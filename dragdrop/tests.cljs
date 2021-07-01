(ns tests
  (:require [state :as st]
            [lstate :as lst]
            [dragdrop :as d]
            [readpoem :as rp]
            [reagent.dom :as dom]
            [clojure.string :as string]))
(defn ps [x]
  (println x)
  x)

(defn p [x]
  (.log js/console x)
  x)

(defn hu [plain-text]
  (lst/set-lines-and-verse-lengths (rp/get-lines-and-verse-lengths plain-text))
  (dom/render [d/main] (.getElementById js/document "content")))

(rp/get-file "poems.org" hu)

(defn print-states []
  (.log js/console @lst/l-state)
  (.log js/console @st/r-state)
  (ps (:verse-lengths @lst/l-state))
  (ps (map-indexed
        (fn [c-idx poems]
          [(get-in (:lines @lst/l-state) [[c-idx -1 0 -1] :part1])
           (map-indexed (fn [p-idx _] (lst/get-poem-title c-idx p-idx)) poems)])
        (:verse-lengths @lst/l-state))))

(js/setTimeout print-states 300)
