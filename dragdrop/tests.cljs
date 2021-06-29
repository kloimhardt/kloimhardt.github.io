(ns tests
  (:require [state :as st]
            [lstate :as lst]
            [dragdrop :as d]
            [readpoem :as rp]
            [reagent.dom :as dom]
            [clojure.string :as string]))

(defn trim-nil [s]
  (when s (string/trim s)))

(defn read-poem [poem]
  (let [vect
        (->> poem
             string/split-lines
             (map #(string/split % #";;")))]
    {:lines (->> vect (map first) (map string/trim))
     :tags (->> vect (map fnext) (map trim-nil))}))

(defn read-poems [plain-text]
  (let [vect (->> plain-text
                  string/split-lines)]
    (reduce (fn [[[pn sn ln] ps] line]
              (cond
                (string/starts-with? line "*")
                (let [idx [(inc pn) 0 -1]]
                  [idx (conj ps [idx (subs line 2)])])
                (= "" (string/trim line))
                [[pn (inc sn) 0] ps]
                :else
                (let [idx [pn sn (inc ln)]]
                  [idx (conj ps [idx (string/trim line)])])))
            [[-1 0 0] []] vect)))

(defn split-line [str-line]
  (let [[line tag] (string/split str-line #";;")]
    (if (and tag (re-find (re-pattern tag) line))
      (if (string/starts-with? line tag)
        {:part1 nil :tag tag :part2 (subs line (inc (count tag)))}
        (let [[part1 part2] (string/split line (re-pattern tag))]
          {:part1 (string/trim part1) :tag tag
           :part2 (string/trim part2)}))
      {:part1 (string/trim line) :tag nil :part2 nil})))

(defn hu [x]
  (let [raw (second (read-poems x))
        lines (into {} (map (fn [[id str-line]] [id (split-line str-line)]) raw))
        poems (group-by first (map first raw))
        pps (map (fn [[i p]] [i (group-by second p)]) poems)
        hu (map (fn [[_pi p]]
                  (map (fn[[_i s]] (count (filter #(not= (rest %) '(0 -1)) s))) p))
                        pps)]
    (.log js/console poems)
    (println pps)
    (println hu)
    ))

(rp/get-file "poems.org" hu)

(defn handler [plain-text]
  (rp/prepare-poems plain-text)
  (dom/render [d/main] (.getElementById js/document "content")))

(rp/get-file "poems.txt" handler)

(defn print-states []
  (.log js/console @lst/l-state)
  (.log js/console "rst5")
  (.log js/console @st/r-state)
  (.log js/console "rst1")
  )

(js/setTimeout print-states 300)
