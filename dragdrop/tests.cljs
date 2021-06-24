(ns tests
  (:require [state :as st]
            [lstate :as lst]
            [dragdrop :as d]
            [readpoem :as rp]
            [reagent.dom :as dom]
            [clojure.string :as string]))

(defn print-states []
  (.log js/console @lst/l-state)
  (.log js/console "rst5")
  (.log js/console @st/r-state)
  (.log js/console "rst1")
  )

(rp/get-file "poems.txt" rp/prepare-poems)

(dom/render [d/main] (.getElementById js/document "content"))

(js/setTimeout print-states 300)
