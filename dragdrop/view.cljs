(ns view
  (:require [state :as st]
            [lstate :as lst]
            [dragdrop :as dd]
            [clojure.string :as s]))

(defn pc [x]
  ;;(println x)
  x)

(def pd js/console.log)

(defn plot-next-button []
  [:polygon {:points (dd/add-duple-to-matrix (:right-arrow-position @lst/ui-state)
                                             (:right-arrow lst/config))
             :on-click #(dd/go-to-verse (dd/inc-verse (:current-verse @st/r-state)))}])

(defn plot-prev-button []
  [:polygon {:points (dd/add-duple-to-matrix (:left-arrow-position @lst/ui-state)
                                             (:left-arrow lst/config))
             :on-click #(dd/go-to-verse (dd/dec-verse (:current-verse @st/r-state)))}])

(defn plot-tags [& _]
  (let [{:keys [lines line-height tag-text-color]} lst/config]
    (fn [current-tags tag-positions]
      (pc "plot-tags")
      [:<>
       (map (fn [line-id]
              (let [[x y] (get tag-positions line-id)]
                ^{:key line-id}
                [:text {:x x :y y :ref (fn [el] (when el (dd/make-draggable el line-id)))
                        :style {:cursor :move} :font-size line-height :fill tag-text-color}
                 (get-in lines [line-id :tag])]))
            (keys current-tags))])))

(defn plot-tag-rects [& _]
  (let [{:keys [tag-height line-height fill-color tag-rect-width]} lst/config]
    (fn [current-tags tag-positions]
      (pc "plot-tags")
      [:<>
       (map (fn [line-id]
              (let [[x y] (get tag-positions line-id)]
                ^{:key line-id}
                [:rect {:x x :y (+ (- y tag-height) (/ line-height 2)) :width tag-rect-width :height tag-height :fill fill-color
                        :ref (fn [el] (when el (dd/make-draggable el line-id)))}]
                ))
            (keys current-tags))])))

(defn plot-poem [& _]
  (let [{:keys [lines line-height blank-chars]} lst/config]
    (fn [current-verse current-tags supress-tags?]
      (pc "plot-poem")
      (when (dd/poem-correct? current-tags) (st/set-supress-tags current-verse true))
      (let [line-ids (dd/get-lines-for-verse lst/config current-verse)]
        [:<>
         (map (fn [line-id]
                (let [[x y] (get-in @lst/ui-state [:line-positions line-id])
                      line (get lines line-id)
                      tag (if-not (get supress-tags? current-verse)
                            (dd/get-momentary-tag line-id current-tags lines blank-chars)
                            (:tag line))
                      {:keys [part1 part2]} line
                      str-line (str part1 (when part1 " ") tag " " part2)]
                  ^{:key line-id}
                  [:text {:x x :y y :font-size line-height
                          :ref (fn[el] (when (and el (not (get-in @lst/ui-state [:tag-x-positions line-id])))
                                         (lst/set-tag-x-position line-id (.-x (.getStartPositionOfChar el (if (and part1 tag) (inc (count part1)) 0))))))}
                   str-line]))
              line-ids)]))))

(defn plot-title [_]
  (let [x (:left-margin-poem lst/config)
        h (:line-height lst/config)]
    (fn [current-verse]
      [:text {:x x :y h :font-size h} (dd/get-poem-title (:lines lst/config) (first current-verse) (second current-verse))])))

(defn svg-canvas [current-verse current-tags tag-positions supress-tags?]
  (pc "svg-canvas")
  [:svg {:width "100%" :height "100%"}
   [:rect {:x 0, :y 0, :width "100%", :height "100%"
           :fill (:fill-color lst/config) :ref (fn [el] (when el (dd/dragarea el)))}]
   [plot-tag-rects current-tags tag-positions]
   [plot-title current-verse]
   [plot-poem current-verse current-tags supress-tags?]
   (if (get supress-tags? current-verse)
     [plot-next-button]
     [plot-tags current-tags tag-positions])
   (when (get supress-tags? (dd/dec-verse current-verse))
     [plot-prev-button])])

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
        [:button.button {:on-click #(st/set-category nil)} "Back"]
        (if (= "State" (dd/get-category-name (:lines lst/config) category-idx))
          [dbg-state]
          [list-poems-for-category category-idx])]
       (let [current-verse (:current-verse @st/r-state)
             current-tags (:current-tags @st/r-state)
             tag-positions (:tag-positions @st/r-state)
             supress-tags? (:supress-tags? @st/r-state)]
         [:<>
          [categories]
          [svg-canvas current-verse current-tags tag-positions supress-tags?]]))]))
