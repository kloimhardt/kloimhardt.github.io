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
        verse-lengths (rp1/verse-lengths raw)
        ]
    (lst/set-verse-lengths-and-lines verse-lengths lines)
    (let [lines-with-tags (lst/filter-lines-for-tags (lst/get-lines-for-verse 0 0 0))]
      (swap! st/r-state assoc-in [:poem-data :tags] (into {} (map (fn[id] [id :blank]) lines-with-tags)))
      ;;(run! println (flatten (rp1/print-poems verse-lengths lines)))
      ;;(println (lst/get-lines-for-verse 0 0 0))
      ;;(println (lst/filter-lines-for-tags (lst/get-lines-for-verse 0 0 0)))
      ;;(println lines-with-tags)
      )
    (dom/render [d/main] (.getElementById js/document "content"))
    ))

(rp1/get-file "poems.org" hu)

(defn handler [plain-text]
  (rp/prepare-poems plain-text)
  #_(dom/render [d/main] (.getElementById js/document "content")))

;;(rp/get-file "poems.txt" handler)

(defn print-states []
  (.log js/console @lst/l-state)
  (.log js/console @st/r-state))

(js/setTimeout print-states 300)
