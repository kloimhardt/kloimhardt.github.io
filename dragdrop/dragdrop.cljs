;; https://www.petercollingridge.co.uk/tutorials/svg/interactive/dragging/

(ns dragdrop
  (:require [state :as st]
            [lstate :as lst]
            [readpoem :as rp]
            [clojure.string :as string]))

(defn get-mouse-positon [e]
  (let [evt (if-let [t (.-touches e)] (first t) e)]
    [(.-clientX evt) (.-clientY evt)]))

(defn start-drag [id]
  (fn [e]
    (st/set-current-tag-id id)
    (let [[x y] (st/get-tag-pos id)
          [mx my] (get-mouse-positon e)]
      (st/set-current-tag-offset (- x mx) (- y my)))))

(defn end-drag [_e]
  (st/set-current-tag-id nil))

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
  (when-let [tag-id (st/get-current-tag-id)]
    (let [[ox oy] (st/get-current-tag-offset)
          [mx my] (get-mouse-positon e)
          [posx posy] [(+ mx ox) (+ my oy)]]
      (st/set-tag-pos tag-id posx posy)
      (if-let [line-id (get-line-id-when-pos-in-fig true posy)]
        (when (= (st/get-line-tag-id line-id) :blank)
          (st/set-line-tag-id line-id tag-id)
          (poem-correct?))
        (when-let [line-id (first (st/get-lines-for-tag-id tag-id))]
          (st/set-line-tag-id line-id :blank))))))

(defn dragarea [e]
  (when e
    (doto e
      (.addEventListener "mousemove" drag)
      (.addEventListener "touchmove" drag)
      (.addEventListener "mouseup" end-drag)
      (.addEventListener "touchend" end-drag)
      #_(.addEventListener "touchleave" end-drag)
      #_(.addEventListener "touchcancel" end-drag)
      #_(.addEventListener "mouseleave" end-drag))))

(defn make-draggable [id]
  (fn [e]
    (when e
      (doto e
        (.addEventListener "mousedown" (start-drag id))
        (.addEventListener "touchstart" (start-drag id))
        dragarea))))

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

(defn plot-figs-v [ids]
  [:<>
   (map (fn [id]
          (let [tag-id (get-in @st/r-state [:poems-struct :lines id :tag-id])]
            (when (= tag-id :blank)
              (let [[x-start x-end top bottom] (lst/get-tag-fig-rect id)]
                ^{:key id}
                [:rect {:x (dec x-start) :y (inc top) :width (inc (- x-end x-start))
                        :height (inc (- bottom top))
                        :fill (lst/get-fill)}]))))
        ids)])

(defn plot-poem [line-ids lines tags tags-for-lines size]
  (let [psize (* size 1.5)]
    [:<>
     (map-indexed (fn [idx line-id]
                    (let [tag-id (get-in tags-for-lines [line-id :tag-id])
                          tag (get tags tag-id)
                          {:keys [part1 part2] :as line} (get lines line-id)
                          str-line (str part1 tag part2)]
              ^{:key line-id}
              [:text {:x 10 :y (* psize (inc idx))
                      :font-size size :ref (fn [el]
                                             (when (and el tag)
                                               (lst/set-tag-fig-rect-v line-id
                                                                       (calc-tag-fig-rect el str-line tag))))}
               str-line]))
           line-ids)]))

(defn plot-tags [ids all-tags tag-positions font-size]
  [:<>
   (map-indexed (fn [idx id]
          (when-let [tag (get all-tags id)]
            (if-let [pos (get-in tag-positions [id :pos])]
              ^{:key id}
              [:text {:x (first pos) :y (last pos) :ref (make-draggable id)
                      :style {:cursor :move} :font-size font-size}
               tag]
              (st/set-tag-pos id (+ 10 (* 100 idx)) 200))))
         ids)])

(defn svg-canvas [poem-line-ids tags-for-lines all-line-parts all-tags tag-positions fill-color]
  [:div
   [:svg {:width "100%" :height "70%"}
    [:rect {:x 0, :y 0, :width "100%", :height "100%"
            :fill fill-color :ref dragarea}]
    [plot-poem poem-line-ids all-line-parts all-tags tags-for-lines 20]
    [plot-figs-v poem-line-ids]
    [plot-tags poem-line-ids all-tags tag-positions 50]]])

(defn main []
  (let [fill-color (lst/get-fill)]
    (fn []
      (let [reactive-tags (:lines (st/get-poems-struct))
            reactive-tag-positions (get-in @st/r-state [:ui :tags])
            poems-struct-v (lst/get-poems-struct-v)
            {:keys [line-ids] :as first-poem} (first (:poems poems-struct-v))
            {:keys [lines tags]} poems-struct-v]
        [svg-canvas line-ids reactive-tags lines tags reactive-tag-positions fill-color]))))
