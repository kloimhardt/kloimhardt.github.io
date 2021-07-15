(ns view
  (:require [state :as st]
            [lstate :as lst]
            [dragdrop :as dd]))

(defn pc [x]
  ;;(println x)
  x)

(defn plot-tags [& _]
  (let [{:keys [lines tag-height]} lst/config]
    (fn [current-tags tag-positions]
      (pc "plot-tags")
      [:<>
       (map (fn [line-id]
              (let [[x y] (get tag-positions line-id)]
                ^{:key line-id}
                [:text {:x x :y y :ref (fn [el] (when el (dd/make-draggable el line-id)))
                        :style {:cursor :move} :font-size tag-height}
                 (get-in lines [line-id :tag])]))
            (keys current-tags))])))

(defn plot-poem [& _]
  (let [{:keys [lines line-height blank-chars]} lst/config]
    (fn [current-verse current-tags]
      (pc "plot-poem")
      (let [line-ids (dd/get-lines-for-verse lst/config current-verse)]
        [:<>
         (map (fn [line-id]
                (let [[x _ _ y] (get-in @lst/ui-state [:fig-rects line-id])
                      tag (dd/get-momentary-tag line-id current-tags lines blank-chars)
                      {:keys [part1 part2]} (get lines line-id)
                      str-line (str part1 (when part1 " ") tag " " part2)]
                  ^{:key line-id}
                  [:text {:x x :y y :font-size line-height}
                   str-line]))
              line-ids)]))))

(defn svg-canvas [current-verse current-tags tag-positions]
  (pc "svg-canvas")
  [:svg {:width "100%" :height "90%"}
   [:rect {:x 0, :y 0, :width "100%", :height "100%"
           :fill (:fill-color lst/config) :ref (fn [el] (when el (dd/dragarea el)))}]
   [plot-poem current-verse current-tags]
   [plot-tags current-tags tag-positions]])

(defn categories []
  (let [nof-categories (count (:verse-lengths lst/config))]
    (fn []
      (pc "categories")
      [:<>
       (map
         (fn [category-idx] ^{:key category-idx} [:button.button {:on-click #(st/set-category category-idx)}
                                                  (dd/get-category-name (:lines lst/config) category-idx)])
         (range nof-categories))])))

(defn list-poems-for-category [ui-category]
  [:<>
   (map (fn [p-idx]
          ^{:key p-idx}
          [:p
           [:a {:on-click #(do (dd/go-to-verse [ui-category p-idx 0])
                               (st/set-category nil))}
            (dd/get-poem-title (:lines lst/config) ui-category p-idx)]])
        (range (count (get (:verse-lengths lst/config) ui-category))))])

(defn dbg-state []
  [:div
   [:p (str @st/r-state)]
   [:p (str @lst/ui-state)]])

(defn main []
  (dd/go-to-verse [0 0 0])
  (fn []
    (pc "main")
    [:div
     (if-let [category-idx (:current-category @st/r-state)]
       [:<>
        [:button.button {:on-click #(st/set-category nil)} "Back3"]
        (if (= "State" (dd/get-category-name (:lines lst/config) category-idx))
          [dbg-state]
          [list-poems-for-category category-idx])]
       (let [current-verse (:current-verse @st/r-state)
             current-tags (:current-tags @st/r-state)
             tag-positions (:tag-positions @st/r-state)]
         [:<>
          [categories]
          [svg-canvas current-verse current-tags tag-positions]]))]))
