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

(defn calc-tag-fig-rect [line-element str-line tag]
(when tag
            (when-let [el line-element]
              (let [idx1 (string/index-of str-line tag)
                    idx2 (dec (+ idx1 (count tag)))
                    [start end] (when el [(.getStartPositionOfChar el idx1)
                                          (.getEndPositionOfChar el idx2)])
                    client-rect (when el (first (.getClientRects el)))
                    blank-rect (when el [(.-x start)
                                         (.-x end)
                                         (.-top client-rect)
                                         (.-bottom client-rect)])]
                blank-rect))))

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

(defn plot-poem [line-ids lines tags r-lines size]
  (let [psize (* size 1.5)]
    [:<>
     (map-indexed (fn [idx line-id]
            (let [str-tag (get tags (:tag-id (get r-lines line-id)))
                  str-line (rp/concat-line-v (get lines line-id) (get r-lines line-id) tags)]
              ^{:key line-id}
              [:text {:x 10 :y (* psize (inc idx))
                      :font-size size :ref (fn [el]
                                             (if-let [tag-fig-rect (calc-tag-fig-rect el str-line str-tag)]
                                               (lst/set-tag-fig-rect-v line-id tag-fig-rect)))}
               str-line]))
           line-ids)]))

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
          (when-let [tag (lst/get-tag id)]
            ^{:key id}
            [plot-tag {:id id :x (+ 10 (* 100 idx)) :y 200
                   :font-size size} tag]))
        (range) ids)])

(defn svg-canvas [poem-line-ids all-lines all-tags reactive-tags fill-color]
  [:div
   [:svg {:width "100%" :height "70%"}
    [:rect {:x 0, :y 0, :width "100%", :height "100%"
            :fill fill-color :ref dragarea}]
    [plot-poem poem-line-ids all-lines all-tags reactive-tags 20]
    [plot-figs-v poem-line-ids]
    [plot-tags poem-line-ids 50]]])

(defn main []
  (let [poems-struct-v (lst/get-poems-struct-v)
        {:keys [line-ids] :as first-poem} (first (:poems poems-struct-v))
        {:keys [lines tags]} poems-struct-v
        reactive-tags (:lines (st/get-poems-struct))
        fill-color (lst/get-fill)]
    [svg-canvas line-ids lines tags reactive-tags fill-color]))
