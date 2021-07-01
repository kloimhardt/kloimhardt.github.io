;; https://www.petercollingridge.co.uk/tutorials/svg/interactive/dragging/

(ns dragdrop
  (:require [state :as st]
            [lstate :as lst]
            [clojure.string :as string]))

(defn ps [x]
  (println x)
  x)

(defn pc [x]
  ;;(println x)
  x)

(defn p [x]
  (.log js/console x)
  x)

(defn get-mouse-positon [e]
  (let [evt (if-let [t (.-touches e)] (first t) e)]
    [(.-clientX evt) (.-clientY evt)]))

(defn start-drag [id]
  (fn [e]
    (lst/set-current-tag-id id)
    (let [[x y] (st/get-tag-pos id)
          [mx my] (get-mouse-positon e)]
      (lst/set-current-tag-offset (- x mx) (- y my)))))

(defn end-drag [_e]
  (lst/set-current-tag-id nil))

(defn get-line-id-when-pos-in-fig [x y]
  (->> (st/get-tag-fig-rects)
       (map (fn [[id [x-start x-end top bottom]]]
              (when (and (or (true? x) (< x-start x x-end)) (< top y bottom)) id)))
       (some identity)))

(defn poem-correct? []
  (when (every? true?
                (map (fn [[line-id tag-id]]
                       (= line-id tag-id))
                     (st/get-verse-tags)))
    (println "good")))

(defn drag [e]
  (when-let [tag-id (lst/get-current-tag-id)]
    (let [[ox oy] (lst/get-current-tag-offset)
          [mx my] (get-mouse-positon e)
          [posx posy] [(+ mx ox) (+ my oy)]
          midy (- posy (/ (lst/get-tag-height) 4))]
      (st/set-tag-pos tag-id posx posy)
      (if-let [line-id (get-line-id-when-pos-in-fig true midy)]
        (when (= (st/get-line-tag-id line-id) :blank)
          (st/set-line-tag-id line-id tag-id)
          (poem-correct?))
        (when-let [line-id (first (st/get-lines-for-tag-id tag-id))]
          (st/set-line-tag-id line-id :blank))))))

(defn dragarea [el]
  (doto el
    (.addEventListener "mousemove" drag)
    (.addEventListener "touchmove" drag)
    (.addEventListener "mouseup" end-drag)
    (.addEventListener "touchend" end-drag)
    #_(.addEventListener "touchleave" end-drag)
    #_(.addEventListener "touchcancel" end-drag)
    #_(.addEventListener "mouseleave" end-drag)))

(defn make-draggable [el id]
  (doto el
    (.addEventListener "mousedown" (start-drag id))
    (.addEventListener "touchstart" (start-drag id))
    dragarea))

(defn plot-tags [& _]
  (let [{:keys [lines tag-height]} @lst/l-state]
    (fn [line-ids tag-positions]
      (pc "plot-tags")
      [:<>
       (map-indexed (fn [idx line-id]
                      (if-let [pos (get-in tag-positions [line-id :pos])]
                        ^{:key line-id}
                        [:text {:x (first pos) :y (last pos) :ref (fn [el] (when el (make-draggable el line-id)))
                                :style {:cursor :move} :font-size tag-height}
                         (get-in lines [line-id :tag])]
                        (st/set-tag-pos line-id (+ 10 (* 100 idx)) 200)))
                    line-ids)])))

(defn get-momentary-tag [line-id tag-ids {:keys [lines blank-chars]}]
  (if-let [tag-id (get tag-ids line-id)]
    (if (= tag-id :blank)
      blank-chars
      (get-in lines [tag-id :tag]))
    (get-in lines [line-id :tag])))

(defn plot-poem [& _]
  (let [{:keys [lines line-height line-distance] :as params} @lst/l-state]
    (fn [line-ids tag-ids]
      (pc "plot-poem")
      (let [psize (* line-height line-distance)]
        [:<>
         (map-indexed (fn [idx line-id]
                        (let [tag (get-momentary-tag line-id tag-ids params)
                              {:keys [part1 part2]} (get lines line-id)
                              str-line (str part1 (when part1 " ") tag " " part2)
                              x 10
                              y (* psize (inc idx))]
                          (st/set-tag-fig-rect line-id [x (+ x 10) (- y line-height) y])
                          ^{:key line-id}
                          [:text {:x x :y y
                                  :font-size line-height}
                           str-line]))
                      line-ids)]))))

(defn svg-canvas [& _]
  (let [{:keys [fill-color]} @lst/l-state]
    (fn
      [line-ids tag-ids tag-positions]
      (pc "svg-canvas")
      [:svg {:width "100%" :height "70%"}
       [:rect {:x 0, :y 0, :width "100%", :height "100%"
               :fill fill-color :ref (fn [el] (when el (dragarea el)))}]
       [plot-poem line-ids tag-ids]
       [plot-tags (keys tag-ids) tag-positions]])))

(defn main2 [& _]
  (let [nof-categories (count (:verse-lengths @lst/l-state))]
    (fn [tag-ids tag-positions ui-category current-verse]
      (pc "main2")
      (let [line-ids (lst/get-lines-for-verse current-verse)]
        [:div
         (if ui-category
           [:div
            [:button.button {:on-click #(st/set-category nil)} "back"]
            (map-indexed (fn [p-idx _]
                           ^{:key p-idx}[:p
                                         [:a {:on-click #(do (st/set-verse [ui-category p-idx 0])
                                                             (st/set-category nil))}
                                             (lst/get-poem-title ui-category p-idx)]])
              (get (:verse-lengths @lst/l-state) ui-category))]
           [:div
            (map
              (fn [category-idx] ^{:key category-idx} [:button.button {:on-click #(st/set-category category-idx)}
                                                       (lst/get-category category-idx)])
              (range nof-categories))
            [svg-canvas line-ids tag-ids tag-positions]])
         [:p (str @st/r-state)]]))))

(defn main []
  (st/set-verse [0 0 0])
  (let [current-verse (get-in @st/r-state [:ui :verse])
        line-ids (lst/get-lines-for-verse current-verse)
        active-lines (lst/filter-lines-with-tags line-ids)]
    (st/set-tag-to-blank-for-lines active-lines)
    (fn []
      (pc "main")
      (let [tag-ids (st/get-verse-tags)
            tag-positions (st/get-ui-tags)
            ui-category (get-in @st/r-state [:ui :category])]
        [main2 tag-ids tag-positions ui-category current-verse]))))
