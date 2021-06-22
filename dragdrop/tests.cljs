(ns tests
  (:require [state :as st]
            [lstate :as lst]
            [dragdrop :as d]
            [readpoem :as rp]
            [reagent.dom :as dom]
            [clojure.string :as string]))

(defn split-line [line tag]
  (if (and tag (re-find (re-pattern tag) line))
    (if (string/starts-with? line tag)
      {:part1 nil :tag tag :part2 (subs line (count tag))}
      (let [[part1 part2] (string/split line (re-pattern tag))]
        {:part1 part1 :tag tag :part2 part2}))
    {:part1 line :tag-id nil :part2 nil}))

(defn han [plain-text]
  (let [{:keys [lines tags] :as x} (first (rp/read-poems plain-text))]
    (println (into {}
                   (map-indexed (fn [idx {:keys [lines tags]}]
                                  [idx (map (fn [line tag] (split-line line tag)) lines tags)])
                                (rp/read-poems plain-text))))))

(defn print-states []
  (.log js/console @lst/l-state)
  (.log js/console "rst5")
  (.log js/console @st/r-state)
  (.log js/console "rst1")
  )

(rp/get-file "poems.txt" rp/prepare-poems)
(rp/get-file "poems.txt" han)

(dom/render [d/main] (.getElementById js/document "content"))

(js/setTimeout print-states 300)
