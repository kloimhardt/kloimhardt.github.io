(ns lstate)

(def l-state (volatile! {:fill-color "#fafafa"
                         :blank-chars "__"
                         :line-height 20
                         :line-distance 2
                         :tag-height 50}))

(defn set-poem-struct [pst]
  (vswap! l-state assoc :lines (:lines pst) :poems (:poems pst)))



(defn set-current-tag-id [id]
  (vswap! l-state assoc :current-id id))

(defn get-current-tag-id []
  (get @l-state :current-id))

(defn set-current-tag-offset [ox oy]
  (vswap! l-state assoc :offset [ox oy]))

(defn get-current-tag-offset []
  (get @l-state :offset))

(defn set-tag [id tag-txt]
  (vswap! l-state assoc-in [:tags id] tag-txt))

(defn get-tag-ids []
  (filter identity
          (map (fn [[id l]] (when (:tag l) id))
                        (get-in @l-state [:lines]))))

(defn get-tag-height []
  (:tag-height @l-state))
