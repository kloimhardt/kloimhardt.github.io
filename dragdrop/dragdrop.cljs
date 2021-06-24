;; https://www.petercollingridge.co.uk/tutorials/svg/interactive/dragging/

(ns dragdrop
  (:require [state :as st]
            [lstate :as lst]
            [clojure.string :as string]))

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
                (map (fn [[line-id {:keys [tag-id]}]]
                       (or (nil? tag-id) (= line-id tag-id)))
                     (st/get-lines)))
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

(defn calc-tag-fig-rect [el str-line tag]
  (let [idx1 (string/index-of str-line tag)
        idx2 (dec (+ idx1 (count tag)))
        [start end]  [(.getStartPositionOfChar el idx1)
                      (.getEndPositionOfChar el idx2)]
        client-rect  (first (.getClientRects el))
        blank-rect  [(.-x start)
                     (.-x end)
                     (.-top client-rect)
                     (.-bottom client-rect)]]
    blank-rect))

(defn plot-tags [line-ids tag-positions {:keys [lines tag-height]}]
  [:<>
   (map-indexed (fn [idx line-id]
                  (when-let [tag (get-in lines [line-id :tag])]
                    (if-let [pos (get-in tag-positions [line-id :pos])]
                      ^{:key line-id}
                      [:text {:x (first pos) :y (last pos) :ref (fn [el] (when el (make-draggable el line-id)))
                              :style {:cursor :move} :font-size tag-height}
                       tag]
                      (st/set-tag-pos line-id (+ 10 (* 100 idx)) 200))))
                line-ids)])

(defn plot-figs [line-ids tags-for-lines reactive-tag-rects {:keys [fill-color]}]
  [:<>
   (map (fn [id]
          (let [tag-id (get-in tags-for-lines [id :tag-id])]
            (when (= tag-id :blank)
              (let [[x-start x-end top bottom] (get reactive-tag-rects id)]
                ^{:key [id]}
                [:rect {:x (dec x-start) :y (inc top) :width (inc (- x-end x-start))
                        :height (inc (- bottom top))
                        :fill fill-color}]))))
        line-ids)])

(defn get-momentary-tag [line-id tag-ids {:keys [lines blank-chars]}]
  (if-let [tag-id (get-in tag-ids [line-id :tag-id])]
    (if (= tag-id :blank)
      blank-chars
      (get-in lines [tag-id :tag]))
    (get-in lines [line-id :tag])))

(defn plot-poem [line-ids tag-ids {:keys [lines line-height line-distance] :as params}]
  (let [psize (* line-height line-distance)]
    [:<>
     (map-indexed (fn [idx line-id]
                    (let [tag (get-momentary-tag line-id tag-ids params)
                          {:keys [part1 part2]} (get lines line-id)
                          str-line (str part1 tag part2)]
                      ^{:key line-id}
                      [:text {:x 10 :y (* psize (inc idx))
                              :font-size line-height
                              :ref (fn [el]
                                     (when (and el tag)
                                       (st/set-tag-fig-rect line-id
                                                            (calc-tag-fig-rect el str-line tag))))}
                       str-line]))
                  line-ids)]))

(defn svg-canvas
  [line-ids tag-ids tag-positions tag-rects {:keys [fill-color] :as params}]
  [:div
   [:svg {:width "100%" :height "70%"}
    [:rect {:x 0, :y 0, :width "100%", :height "100%"
            :fill fill-color :ref (fn [el] (when el (dragarea el)))}]
    [plot-poem line-ids tag-ids params]
    [plot-figs line-ids tag-ids tag-rects params]
    [plot-tags
     line-ids
     ;;(map key (filter (fn [[_id {:keys [tag-id]}]] (= tag-id :blank)) tag-ids))
     tag-positions params]]])

(defn main []
  (let [tag-ids (st/get-lines)
        tag-positions (st/get-ui-tags)
        tag-rects (st/get-tag-fig-rects)
        poems-struct (lst/get-poems-struct)
        {:keys [line-ids]} (first (:poems poems-struct))]
    [svg-canvas line-ids tag-ids tag-positions tag-rects
     {:lines (:lines poems-struct)
      :fill-color (lst/get-fill)
      :blank-chars (lst/get-blank-chars)
      :line-height (:line-height @lst/l-state)
      :line-distance (:line-distance @lst/l-state)
      :tag-height (lst/get-tag-height)}]))
