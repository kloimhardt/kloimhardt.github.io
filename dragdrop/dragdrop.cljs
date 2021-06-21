;; https://www.petercollingridge.co.uk/tutorials/svg/interactive/dragging/

(ns dragdrop
  (:require [state :as st]
            [readpoem :as rp]
            [clojure.string :as string]))

(defn get-mouse-positon [e]
  (let [evt (if-let [t (.-touches e)] (first t) e)]
    [(.-clientX evt) (.-clientY evt)]))

(defn start-drag [id]
  (fn [e]
    (vswap! st/l-state assoc :current-id id)
    (let [[x y] (st/get-tag-pos id)
          [mx my] (get-mouse-positon e)]
      (vswap! st/l-state assoc :offset [(- x mx) (- y my)]))))

(defn end-drag [_e]
  (vswap! st/l-state assoc :current-id nil))

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
  (when-let [tag-id (:current-id @st/l-state)]
    (let [[ox oy] (:offset @st/l-state)
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
      (st/set-tag-element id e)
      (doto e
        (.addEventListener "mousedown" (start-drag id))
        (.addEventListener "touchstart" (start-drag id))
        dragarea))))

(defn plot-figs [{:keys [lines tags ids]}]
  [:<>
   (map (fn [id line tag]
          (when tag
            (when-let [el (st/get-line-element id)]
              (let [idx1 (string/index-of line tag)
                    idx2 (dec (+ idx1 (count tag)))
                    [start end] (when el [(.getStartPositionOfChar el idx1)
                                          (.getEndPositionOfChar el idx2)])
                    client-rect (when el (first (.getClientRects el)))
                    blank-rect (when el [(.-x start)
                                         (.-x end)
                                         (.-top client-rect)
                                         (.-bottom client-rect)])
                    [x-start x-end top bottom] blank-rect]
                (st/set-tag-fig-rect id blank-rect)
                (when (= tag (:blank-chars @st/l-state))
                  ^{:key id}
                  [:rect {:x (dec x-start) :y (inc top) :width (inc (- x-end x-start))
                          :height (inc (- bottom top))
                          :fill (st/get-fill)}])))))
        ids lines tags)])

(defn plot-poem [{:keys [lines ids]} size]
  (let [psize (* size 1.5)]
    [:<>
     (map (fn [idx txt id]
            ^{:key id}
            [:text {:x 10 :y (* psize (inc idx))
                    :font-size size :ref #(st/set-line-element id %)}
             txt])
          (range) lines ids)]))

(defn plot-tag [{:keys [id x y]} _text]
  (st/set-tag-pos id x y)
  (fn [{:keys [id font-size]} text]
    (let [[px py] (st/get-tag-pos id)]
      [:text {:x px :y py :ref (make-draggable id)
              :style {:cursor :move} :font-size font-size}
       text])))

(defn plot-tags [ids size]
  [:<>
   (map (fn [idx id]
          (when-let [tag (st/get-tag id)]
            ^{:key id}
            [plot-tag {:id id :x (+ 10 (* 100 idx)) :y 200
                   :font-size size} tag]))
        (range) ids)])

(defn svg-canvas []
  (let [poems-struct (st/get-poems-struct)
        pms (rp/poems-from-struct poems-struct)
        p (first pms)]
    [:svg {:width "100%" :height "70%"}
     [:rect {:x 0, :y 0, :width "100%", :height "100%"
             :fill (st/get-fill) :ref dragarea}]
     [plot-poem p 20]
     [plot-figs p]
     [plot-tags
      (get (first (get poems-struct :poems)) :line-ids)
      50]]))

(defn main []
  [svg-canvas])
