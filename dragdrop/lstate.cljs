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

(defn clear-tag-fig-rects []
  (vswap! ui-state dissoc :fig-rects))

(defn set-left-arrow-position [pos]
  (vswap! ui-state assoc :left-arrow-position pos))

(defn set-right-arrow-position [pos]
  (vswap! ui-state assoc :right-arrow-position pos))

(def l-state (volatile! {:fill-color "#fafafa"
                         :blank-chars "__"
                         :line-height 20
                         :line-distance 2
                         :tag-height 50
                         :tag-distance 1.2
                         :left-margin-poem 10
                         :left-margin-tags 50
                         :next-arrow-x 100
                         :left-arrow [[40 0] [0 -15] [40 -30]]
                         :right-arrow [[0 0] [40 -15] [0 -30]]}))

(defn set-lines-and-verse-lengths [{:keys [verse-lengths lines]}]
  (vswap! l-state assoc :verse-lengths verse-lengths :lines lines))

(def config nil)

(defn redefine-config []
  (alter-var-root #'config (constantly @l-state)))
