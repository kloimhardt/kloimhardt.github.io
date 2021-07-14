(ns view
  (:require [state :as st]
            [lstate :as lst]
            [dragdrop :as dd]))

(defn pc [x]
  ;;(println x)
  x)

(defn plot-tags [& _]
  (let [{:keys [lines tag-height]} lst/config]
    (fn [line-ids tag-positions]
      (pc "plot-tags")
      [:<>
       (map (fn [line-id]
              (let [pos (get-in tag-positions [line-id :pos])]
                ^{:key line-id}
                [:text {:x (first pos) :y (last pos) :ref (fn [el] (when el (dd/make-draggable el line-id)))
                        :style {:cursor :move} :font-size tag-height}
                 (get-in lines [line-id :tag])]))
            line-ids)])))

(defn plot-poem [& _]
  (let [{:keys [lines line-height] :as params} lst/config]
    (fn [line-ids tag-ids]
      (pc "plot-poem")
      [:<>
       (map (fn [line-id]
              (let [[x _ _ y] (get-in @lst/ui-state [:fig-rects line-id])
                    tag (dd/get-momentary-tag line-id tag-ids params)
                    {:keys [part1 part2]} (get lines line-id)
                    str-line (str part1 (when part1 " ") tag " " part2)]
                ^{:key line-id}
                [:text {:x x :y y :font-size line-height}
                 str-line]))
            line-ids)])))

(defn svg-canvas [& _]
  (let [{:keys [fill-color]} lst/config]
    (fn [line-ids tag-ids tag-positions]
      (pc "svg-canvas")
      [:svg {:width "100%" :height "90%"}
       [:rect {:x 0, :y 0, :width "100%", :height "100%"
               :fill fill-color :ref (fn [el] (when el (dd/dragarea el)))}]
       [plot-poem line-ids tag-ids]
       [plot-tags (keys tag-ids) tag-positions]])))

(defn categories []
  (let [nof-categories (count (:verse-lengths lst/config))]
    (fn []
      (pc "categories")
      [:<>
       (map
         (fn [category-idx] ^{:key category-idx} [:button.button {:on-click #(st/set-category category-idx)}
                                                  (lst/get-category category-idx)])
         (range nof-categories))])))

(defn list-poems-for-category [ui-category]
  [:<>
   (map-indexed (fn [p-idx _]
                  ^{:key p-idx}
                  [:p
                   [:a {:on-click #(do (dd/go-to-verse [ui-category p-idx 0])
                                       (st/set-category nil))}
                    (lst/get-poem-title ui-category p-idx)]])
                (get (:verse-lengths lst/config) ui-category))])

(defn main []
  (dd/go-to-verse [0 0 0])
  (fn []
    (pc "main")
    [:div
     (if-let [ui-category (get-in @st/r-state [:ui :category])]
       [:<>
        [:button.button {:on-click #(st/set-category nil)} "back"]
        [list-poems-for-category ui-category]]
       (let [current-verse (get-in @st/r-state [:ui :verse])
             tag-ids (get-in @st/r-state [:poem-data :tags])
             tag-positions (get-in @st/r-state [:ui :tags])]
         [:<>
          [categories]
          [svg-canvas (dd/get-lines-for-verse lst/config current-verse) tag-ids tag-positions]]))]))
