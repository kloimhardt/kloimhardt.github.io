(ns lstate)


(def ui-state (volatile! {}))

(defn set-current-tag-id [id]
  (vswap! ui-state assoc :current-id id))

(defn get-current-tag-id []
  (get @ui-state :current-id))

(defn set-current-tag-offset [ox oy]
  (vswap! ui-state assoc :offset [ox oy]))

(defn get-current-tag-offset []
  (get @ui-state :offset))

(defn set-tag-fig-rect [id rect]
  (vswap! ui-state assoc-in [:fig-rects id] rect))

(defn get-tag-fig-rects []
  (:fig-rects @ui-state))

(def l-state (volatile! {:fill-color "#fafafa"
                         :blank-chars "__"
                         :line-height 20
                         :line-distance 2
                         :tag-height 50
                         :tag-distance 1.2
                         :left-margin 10}))

(defn get-tag-height []
  (:tag-height @l-state))

(defn set-lines-and-verse-lengths [{:keys [verse-lengths lines]}]
  (vswap! l-state assoc :verse-lengths verse-lengths :lines lines))

(defn get-lines-for-verse [[category poem verse]]
  (map (fn [line-idx] [category poem verse line-idx])
       (range (get-in (:verse-lengths @l-state) [category poem verse]))))

(defn filter-lines-with-tags [line-ids]
  (filter #(:tag (get (:lines @l-state) %)) line-ids))

(defn get-category [category-idx]
  (get-in (:lines @l-state) [[category-idx -1 0 -1] :part1]))

(defn get-poem-title [category-idx title-idx]
  (get-in (:lines @l-state) [[category-idx title-idx 0 -1] :part1]))
