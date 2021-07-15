;; https://www.petercollingridge.co.uk/tutorials/svg/interactive/dragging/

(ns dragdrop
  (:require [state :as st]
            [lstate :as lst]))

(defn ps [x]
  (println x)
  x)

(defn pc [x]
  (println x)
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
    (let [[x y] (get-in @st/r-state [:ui :tags id :pos])
          [mx my] (get-mouse-positon e)]
      (lst/set-current-tag-offset (- x mx) (- y my)))))

(defn end-drag [_e]
  (lst/set-current-tag-id nil))

(defn get-line-id-when-pos-in-fig [x y]
  (->> (:fig-rects @lst/ui-state)
       (map (fn [[id [x-start x-end top bottom]]]
              (when (and (or (true? x) (< x-start x x-end)) (< top y bottom)) id)))
       (some identity)))

(defn poem-correct? []
  (when (every? true?
                (map (fn [[line-id tag-id]]
                       (= line-id tag-id))
                     (get-in @st/r-state [:poem-data :tags])
                     ))
    (println "good")))

(defn get-lines-for-tag-id [tags tag-id]
  (map first (filter (fn [[_ line]] (= line tag-id)) tags)))

(defn drag [e]
  (when-let [tag-id (:current-id @lst/ui-state)]
    (let [[ox oy] (:offset @lst/ui-state)
          [mx my] (get-mouse-positon e)
          [posx posy] [(+ mx ox) (+ my oy)]
          midy (- posy (/ (:tag-height lst/config) 4))]
      (st/set-tag-pos tag-id posx posy)
      (if-let [line-id (get-line-id-when-pos-in-fig true midy)]
        (when (= (get-in @st/r-state [:poem-data :tags line-id]) :blank)
          (st/set-line-tag-id line-id tag-id)
          (poem-correct?))
        (when-let [line-id (first (get-lines-for-tag-id (get-in @st/r-state [:poem-data :tags]) tag-id))]
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

(defn get-momentary-tag [line-id tag-ids {:keys [lines blank-chars]}]
  (if-let [tag-id (get tag-ids line-id)]
    (if (= tag-id :blank)
      blank-chars
      (get-in lines [tag-id :tag]))
    (get-in lines [line-id :tag])))

(defn set-tag-fig-rects! [line-positions line-height]
  (run! (fn [[line-id [x y]]]
          (lst/set-tag-fig-rect line-id [x (+ x 10) (- y line-height) y]))
        line-positions))

(defn set-tag-positions! [tag-initial-positions]
  (run! (fn [[tag-id [x y]]] (st/set-tag-pos tag-id x y))
        tag-initial-positions))

(defn all-positions [line-ids tag-ids]
  (let [{:keys [lines line-height line-distance tag-height tag-distance left-margin]} lst/config
        psize (* line-height line-distance)]
    {:line-positions
     (map-indexed (fn [idx line-id]
                    [line-id
                     [left-margin
                      (* psize (inc idx))]])
                  line-ids)
     :tag-initial-positions
     (map (fn [tag-id]
            [tag-id
             [left-margin
              (+ (* psize (count line-ids))
                 (* tag-height tag-distance
                    (get-in lines [tag-id :tag-sort-idx])))]])
          tag-ids)}))

(defn get-lines-for-verse [config [category poem verse]]
  (map (fn [line-idx] [category poem verse line-idx])
       (range (get-in (:verse-lengths config) [category poem verse]))))

(defn go-to-verse [verse-vec]
  (st/set-verse verse-vec)
  (let [line-ids (get-lines-for-verse lst/config verse-vec)
        tag-ids (filter #(:tag (get (:lines lst/config) %)) line-ids)
        {:keys [line-positions tag-initial-positions]} (all-positions line-ids tag-ids)]
    (st/set-tag-to-blank-for-lines tag-ids)
    (set-tag-fig-rects! line-positions (:line-height lst/config))
    (set-tag-positions! tag-initial-positions)))

(defn get-category [lines category-idx]
  (get-in lines [[category-idx -1 0 -1] :part1]))

(defn get-poem-title [lines category-idx title-idx]
  (get-in lines [[category-idx title-idx 0 -1] :part1]))
