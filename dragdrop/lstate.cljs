(ns lstate)

(def l-state (volatile! {:fill-color "#fafafa"
                         :blank-chars "__"
                         :line-height 20
                         :line-distance 2
                         :tag-height 50}))

(defn set-current-tag-id [id]
  (vswap! l-state assoc :current-id id))

(defn get-current-tag-id []
  (get @l-state :current-id))

(defn set-current-tag-offset [ox oy]
  (vswap! l-state assoc :offset [ox oy]))

(defn get-current-tag-offset []
  (get @l-state :offset))

(defn get-tag-height []
  (:tag-height @l-state))

(defn set-verse-lengths-and-lines [verse-lengths lines]
  (vswap! l-state assoc :verse-lengths verse-lengths :lines lines))

(defn get-lines-for-verse [category poem verse]
  (map (fn [line-idx] [category poem verse line-idx])
       (range (get-in (:verse-lengths @l-state) [category poem verse]))))

(defn filter-lines-with-tags [line-ids]
  (filter #(:tag (get (:lines @l-state) %)) line-ids))
