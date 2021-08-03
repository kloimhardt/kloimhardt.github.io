(ns lstate)

(def ui-state (volatile! {:current-id nil
                          :offset nil
                          :line-positions nil}))

(defn set-current-tag-id [id]
  (vswap! ui-state assoc :current-id id))

(defn set-current-tag-offset [ox oy]
  (vswap! ui-state assoc :offset [ox oy]))

(defn set-line-position [id x y]
  (vswap! ui-state assoc-in [:line-positions id] [x y]))

(defn clear-line-positions []
  (vswap! ui-state dissoc :line-positions))

(defn set-tag-x-position [line-id x]
  (vswap! ui-state assoc-in [:tag-x-positions line-id] x))

(defn set-left-arrow-position [pos]
  (vswap! ui-state assoc :left-arrow-position pos))

(defn set-right-arrow-position [pos]
  (vswap! ui-state assoc :right-arrow-position pos))

(def line-height 20)
(def line-distance 2)
(def l-state (volatile! {:fill-color "#fafafa"
                         :blank-chars "__"
                         :line-height line-height
                         :line-distance line-distance
                         :tag-height (* line-height line-distance 0.9)
                         :tag-rect-width 500
                         :tag-distance 1.2
                         :left-margin-poem 10
                         :left-margin-tags 10
                         :next-arrow-x 100
                         :left-arrow [[40 0] [0 -15] [40 -30]]
                         :right-arrow [[0 0] [40 -15] [0 -30]]}))

(defn set-lines-and-verse-lengths [{:keys [verse-lengths lines]}]
  (vswap! l-state assoc :verse-lengths verse-lengths :lines lines))

(def config nil)

(defn redefine-config []
  (alter-var-root #'config (constantly @l-state)))
