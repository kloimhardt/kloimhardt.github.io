(ns tests
  (:require [state :as st]
            [lstate :as lst]
            [dragdrop :as d]
            [readpoem :as rp]
            [reagent.dom :as dom]
            [clojure.string :as string]))

(defn hu [plain-text]
  (lst/set-lines-and-verse-lengths (rp/get-lines-and-verse-lengths plain-text))
  (dom/render [d/main] (.getElementById js/document "content")))

(rp/get-file "poems.org" hu)

(defn print-states []
  (.log js/console @lst/l-state)
  (.log js/console @st/r-state))

(js/setTimeout print-states 300)
