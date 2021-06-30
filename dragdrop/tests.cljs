(ns tests
  (:require [state :as st]
            [lstate :as lst]
            [dragdrop :as d]
            [readpoem :as rp]
            [readpoem1 :as rp1]
            [reagent.dom :as dom]
            [clojure.string :as string]))

(defn hu [plain-text]
  (let [raw (second (rp1/read-poems plain-text))
        lines (into {} (rp1/lines raw))
        verse-lengths (rp1/verse-lengths raw)]
    (lst/set-verse-lengths-and-lines verse-lengths lines)
    (run! println (flatten (rp1/print-poems verse-lengths lines)))
    (println (lst/get-lines-for-verse 0 0 0))
    ))

(rp1/get-file "poems.org" hu)

(defn handler [plain-text]
  (rp/prepare-poems plain-text)
  (dom/render [d/main] (.getElementById js/document "content")))

(rp/get-file "poems.txt" handler)

(defn print-states []
  (.log js/console @lst/l-state)
  (.log js/console "rst5")
  (.log js/console @st/r-state)
  (.log js/console "rst1"))

(js/setTimeout print-states 300)
