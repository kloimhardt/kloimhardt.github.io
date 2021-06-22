(ns tests
  (:require [state :as st]
            [dragdrop :as d]
            [readpoem :as rp]
            [reagent.dom :as dom]))

(defn print-states []
  (.log js/console @st/l-state)
  (.log js/console "rst5")
  (.log js/console @st/r-state)
  (.log js/console "rst1")
  (println nil)
  )

(rp/get-file "poems.txt")

(dom/render [d/main] (.getElementById js/document "content"))

(js/setTimeout print-states 300)
