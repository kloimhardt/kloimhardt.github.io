(ns tests
  (:require [state :as st]
            [lstate :as lst]
            [dragdrop :as d]
            [readpoem :as rp]
            [reagent.dom :as dom]
            [clojure.string :as string]))

(defn hu [plain-text]
  (let [raw (second (rp/read-poems plain-text))
        lines (into {} (rp/lines raw))
        verse-lengths (rp/verse-lengths raw)
        ]
    (lst/set-verse-lengths-and-lines verse-lengths lines)
    (let [lines-with-tags (lst/filter-lines-for-tags (lst/get-lines-for-verse 0 0 0))]
      (swap! st/r-state assoc-in [:poem-data :tags] (into {} (map (fn[id] [id :blank]) lines-with-tags)))
      )
    (dom/render [d/main] (.getElementById js/document "content"))
    ))

(rp/get-file "poems.org" hu)

(defn print-states []
  (.log js/console @lst/l-state)
  (.log js/console @st/r-state))

(js/setTimeout print-states 300)
