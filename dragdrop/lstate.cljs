(ns lstate)

(def ui-state (volatile! {:current-id nil
                          :offset nil
                          :fig-rects nil}))

(defn set-current-tag-id [id]
  (vswap! ui-state assoc :current-id id))

(defn set-current-tag-offset [ox oy]
  (vswap! ui-state assoc :offset [ox oy]))

(defn set-tag-fig-rect [id rect]
  (vswap! ui-state assoc-in [:fig-rects id] rect))

(def l-state (volatile! {:fill-color "#fafafa"
                         :blank-chars "__"
                         :line-height 20
                         :line-distance 2
                         :tag-height 50
                         :tag-distance 1.2
                         :left-margin 10}))

(defn set-lines-and-verse-lengths [{:keys [verse-lengths lines]}]
  (vswap! l-state assoc :verse-lengths verse-lengths :lines lines))

(defn get-category [category-idx]
  (get-in (:lines @l-state) [[category-idx -1 0 -1] :part1]))

(defn get-poem-title [category-idx title-idx]
  (get-in (:lines @l-state) [[category-idx title-idx 0 -1] :part1]))

(def config nil)

(defn redefine-config []
  (alter-var-root #'config (constantly @l-state)))
