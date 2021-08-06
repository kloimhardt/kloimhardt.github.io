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
  (let [evt (or (first (.-touches e)) e)]
    [(.-clientX evt) (.-clientY evt)]))

(defn get-actual-tag-positions [r-state]
  (merge (:tag-positions r-state) (:moved-tag-positions r-state)))

(defn start-drag [id]
  (fn [e]
    (p "start-drag")
    (lst/set-current-tag-id id)
    (let [[x y] (get (get-actual-tag-positions @st/r-state) id)
          [mx my] (get-mouse-positon e)]
      (lst/set-current-tag-offset (- x mx) (- y my)))))

(defn is-swipe [mouse-position start-position] true)

(defn is-click [mouse-position start-position]
  (every? true? (map #(= %1 %2) mouse-position start-position)))

(defn end-drag [e]
  (p "end-drag")
  (if (:current-id @lst/ui-state)
    (do
      (run! (fn [[line-id tag-id]]
              (when (= tag-id (:current-id @lst/ui-state))
                (let [x (get-in @lst/ui-state [:tag-x-positions line-id])
                      [_ y] (get-in @lst/ui-state [:line-positions line-id])]
                  (st/set-tag-pos tag-id x y))))
            (:current-tags @st/r-state))
      (lst/set-current-tag-id nil)
      (when (is-click (get-mouse-positon e) (:swipe-start-position @lst/ui-state))
        (.log js/console "click")))
    (when (is-swipe (get-mouse-positon e) (:swipe-start-position @lst/ui-state))
      (.log js/console "swipe")))
  (lst/set-swipe-start-position nil))

(defn get-line-id-when-pos-in-line [y line-height]
  (->> (:line-positions @lst/ui-state)
       (map (fn [[id [_line-x line-y]]]
              (when (< (- line-y line-height) y line-y) id)))
       (some identity)))

(defn get-lines-for-tag-id [tags tag-id]
  (map first (filter (fn [[_ line]] (= line tag-id)) tags)))

(defn drag [e]
  (when-let [tag-id (:current-id @lst/ui-state)]
    (let [[ox oy] (:offset @lst/ui-state)
          [mx my] (get-mouse-positon e)
          [posx posy] [(+ mx ox) (+ my oy)]
          midy (- posy (/ (:tag-height lst/config) 4))]
      (st/set-tag-pos tag-id posx posy)
      (if-let [line-id (get-line-id-when-pos-in-line midy (:line-height lst/config))]
        (when (= (get-in @st/r-state [:current-tags line-id]) :blank)
          (st/set-line-tag-id line-id tag-id))
        (when-let [line-id (first (get-lines-for-tag-id (:current-tags @st/r-state) tag-id))]
          (st/set-line-tag-id line-id :blank))))))

(defn start-swipe [el]
  (p "start-swip")
  (lst/set-swipe-start-position (get-mouse-positon el)))

(defn dragarea [el]
  (doto el
    (.addEventListener "mousemove" drag)
    (.addEventListener "touchmove" drag)
    (.addEventListener "mouseup" end-drag)
    (.addEventListener "touchend" end-drag)
    (.addEventListener "mousedown" start-swipe)
    (.addEventListener "touchstart" start-swipe)

    #_(.addEventListener "touchleave" end-drag)
    #_(.addEventListener "touchcancel" end-drag)
    #_(.addEventListener "mouseleave" end-drag)))

(defn make-draggable [el id]
  (doto el
    (.addEventListener "mousedown" (start-drag id))
    (.addEventListener "touchstart" (start-drag id))))

(defn get-momentary-tag [line-id current-tags lines blank-chars]
  (if-let [tag-id (get current-tags line-id)]
    (if (= tag-id :blank)
      blank-chars
      (get-in lines [tag-id :tag]))
    (get-in lines [line-id :tag])))

(defn set-line-positions! [line-positions]
  (lst/clear-line-positions)
  (run! (fn [[line-id [x y]]]
          (lst/set-line-position line-id x y))
        line-positions))

(defn set-tag-positions! [tag-initial-positions]
  (run! (fn [[tag-id [x y]]]
          (when-not (get (get-actual-tag-positions @st/r-state) tag-id)
            (st/set-tag-pos tag-id x y)))
        tag-initial-positions))

(defn all-positions [line-ids tag-ids]
  (let [{:keys [lines line-height line-distance tag-height tag-distance left-margin-poem left-margin-tags next-arrow-x]} lst/config
        psize (* line-height line-distance)
        arrow-y (* tag-height tag-distance)]
    {:line-positions
     (map-indexed (fn [idx line-id]
                    [line-id
                     [left-margin-poem
                      (* psize (inc idx))]])
                  line-ids)
     :tag-initial-positions
     (map (fn [tag-id]
            [tag-id
             [left-margin-tags
              (+ (* psize (inc (count line-ids)))
                 (* tag-height tag-distance
                    (get-in lines [tag-id :tag-sort-idx])))]])
          tag-ids)
     :left-arrow-position
     [left-margin-poem arrow-y]
     :right-arrow-position
     [next-arrow-x arrow-y]}))

(defn get-lines-for-verse [config [category poem verse]]
  (map (fn [line-idx] [category poem verse line-idx])
       (range (get-in (:verse-lengths config) [category poem verse]))))

(defn set-tag-to-blank-for-new-lines [line-ids]
  (let [new-blank-lines (into {} (map (fn[id] [id :blank]) line-ids))]
    (swap! st/r-state update :current-tags #(merge new-blank-lines %))))

(defn go-to-verse [verse-vec]
  (let [line-ids (get-lines-for-verse lst/config verse-vec)
        tag-ids (filter #(:tag (get (:lines lst/config) %)) line-ids)
        {:keys [line-positions tag-initial-positions
                left-arrow-position right-arrow-position]}
        (all-positions line-ids tag-ids)]
    (set-line-positions! line-positions)
    (lst/set-left-arrow-position left-arrow-position)
    (lst/set-right-arrow-position right-arrow-position)
    (st/set-verse verse-vec)
    (set-tag-to-blank-for-new-lines tag-ids)
    (set-tag-positions! tag-initial-positions)))

(defn get-category-name [lines category-idx]
  (get-in lines [[category-idx -1 0 -1] :part1]))

(defn get-poem-title [lines category-idx title-idx]
  (get-in lines [[category-idx title-idx 0 -1] :part1]))

(defn poem-correct? [line-ids current-tags]
  (every? true?
          (map (fn [id]
                 (let [current-tag-id (get current-tags id)]
                   (if current-tag-id (= id current-tag-id) true)))
               line-ids)))

(defn add-duple-to-matrix [duple matrix]
  (map #(map + %1 %2) matrix (repeat duple)))

(defn inc-verse [a]
  (let [nof-verses (count (get-in (:verse-lengths lst/config) (butlast a)))
        nof-poems (count (get (:verse-lengths lst/config) (first a)))
        nof-categories (count (:verse-lengths lst/config))]
    (cond
      (< (inc (get a 2)) nof-verses)
      (update a 2 inc)
      (< (inc (get a 1)) nof-poems)
      (-> a (update 1 inc) (assoc 2 0))
      (< (inc (get a 0)) nof-categories)
      (-> a (update 0 inc) (assoc 1 0) (assoc 2 0))
      :else
      [0 0 0])))

(defn dec-verse [a]
  (cond
    (> (dec (get a 2)) -1)
    (update a 2 dec)
    (> (dec (get a 1)) -1)
    (let [max-verse-idx (dec (count (get-in (:verse-lengths lst/config) [(get a 0) (dec (get a 1))])))]
      (-> a (update 1 dec) (assoc 2 max-verse-idx)))
    (> (dec (get a 0)) -1)
    (let [max-poems-idx (dec (count (get (:verse-lengths lst/config) (dec (get a 0)))))
          max-verse-idx (dec (count (get-in (:verse-lengths lst/config) [(dec (get a 0)) max-poems-idx])))]
      (-> a (update 0 dec) (assoc 1 max-poems-idx) (assoc 2 max-verse-idx)))
    :else
    (let [max-categories-idx (dec (count (:verse-lengths lst/config)))
          max-poems-idx (dec (count (get (:verse-lengths lst/config) max-categories-idx)))
          max-verse-idx (dec (count (get-in (:verse-lengths lst/config) [max-categories-idx max-poems-idx])))]
      [max-categories-idx max-poems-idx max-verse-idx])))
