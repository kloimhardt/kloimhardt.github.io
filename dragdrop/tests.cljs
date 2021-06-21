(ns tests
  (:require [state :as st]
            [dragdrop :as d]
            [readpoem :as rp]
            [reagent.dom :as dom]))

(defn thetest []
  (let [poems (st/get-poems-struct)
        a (rp/poems-from-struct (first poems))]
    (.log js/console (rp/cut-out-word a))
    (.log js/console
          (str a))
    (.log js/console
          (str (d/plot-poem a 20)))
    (.log js/console
          (str (d/plot-tags a 20)))
    (.log js/console
          (str (d/plot-figs a)))
    (.log js/console
          (str (d/get-line-id-when-pos-in-fig 62 45)))
    (.log js/console "ps")
    (.log js/console (rp/poems-struct poems))
    (.log js/console (= (rp/poems-from-struct
                         (rp/poems-struct poems))
                        poems)))
  (let [tgs {1 "ha" 2 "hi" 3 "ho"}
        a (rp/split-line "ha hi ho" 1 tgs)
        b (rp/split-line "ha hi ho" 2 {1 "ha" 2 "hi" 3 "ho"})
        c (rp/split-line "ha hi ho" 3 {1 "ha" 2 "hi" 3 "ho"})]
    (.log js/console "cl")
    (.log js/console (rp/concat-line c tgs)))
(.log js/console @st/l-state)
(.log js/console "rst")
(.log js/console @st/r-state)


  )

(defn print-states []
  (.log js/console @st/l-state)
  (.log js/console "rst5")
  (.log js/console @st/r-state)
  (.log js/console "rst1")
  (.log js/console (get @st/r-state [:poems-struct :tags 1]))
  (println (filter (fn [[line-id {:keys [tag-id]}]] (= line-id tag-id) ) (st/get-lines)))
  )

(rp/get-file "poems.txt")

(dom/render [d/main] (.getElementById js/document "content"))

(js/setTimeout print-states 300)
