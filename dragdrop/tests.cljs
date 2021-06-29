(ns tests
  (:require [state :as st]
            [lstate :as lst]
            [dragdrop :as d]
            [readpoem :as rp]
            [reagent.dom :as dom]
            [clojure.string :as string]))

(defn read-poems [plain-text]
  (->> plain-text
       string/split-lines
       (reduce (fn [[[idx-category idx-poem idx-verse idx-line] indexed-lines] line]
                 (cond
                   (string/starts-with? line "* ")
                   (let [idx [(inc idx-category) -1 0 -1]]
                     [idx (conj indexed-lines [idx (subs line 2)])])
                   (string/starts-with? line "**")
                   (let [idx [idx-category (inc idx-poem) 0 -1]]
                     [idx (conj indexed-lines [idx (subs line 3)])])
                   (= "" (string/trim line))
                   [[idx-category idx-poem (inc idx-verse) -1] indexed-lines]
                   :else
                   (let [idx [idx-category idx-poem idx-verse (inc idx-line)]]
                     [idx (conj indexed-lines [idx (string/trim line)])])))
               [[-1 nil nil nil] []])))

(defn trim-nil [s]
  (when s (string/trim s)))

(defn split-line [str-line]
  (let [[line tag] (string/split str-line #";;")]
    (if (and tag (re-find (re-pattern tag) line))
      (if (string/starts-with? line tag)
        {:part1 nil :tag (string/trim tag) :part2 (subs line (inc (count tag)))}
        (let [[part1 part2] (string/split line (re-pattern tag))]
          {:part1 (string/trim part1) :tag (string/trim tag)
           :part2 (string/trim part2)}))
      {:part1 (string/trim line) :tag nil :part2 nil})))

(defn lines [raw-poems]
  (map (fn [[id str-line]]
         [id (split-line str-line)])
       raw-poems))

(defn poems [raw-poems]
  (let [categories (vals (group-by first (map first raw-poems)))
        categories-poems (map (fn [category]
                                (->> category
                                     (filter #(not= '(-1 0 -1) (rest %)))
                                     (group-by second)
                                     vals))
                              categories)
        third #(get % 2)]
    (map (fn [poems]
           (map (fn [poem]
                  (->> poem
                       (filter #(not= '(0 -1) (rest (rest %))))
                       (group-by third)
                       vals
                       (map count)))
                poems))
         categories-poems)))

(defn concat-line [{:keys [part1 tag part2]}]
  (str part1 " " tag " " part2 " ;; " tag))

(defn print-poems [categories-poems-verses lines]
  (map-indexed (fn [idx-category category]
                 [(str "* " (:part1 (get lines [idx-category -1 0 -1])))
                  (map-indexed (fn [idx-poem poem]
                                 [(str "** " (:part1 (get lines [idx-category idx-poem 0 -1])))
                                  (map-indexed (fn [idx-verse verse]
                                                 [(map (fn [idx-line]
                                                         (->> [idx-category idx-poem idx-verse idx-line]
                                                              (get lines)
                                                              concat-line))
                                                       (range verse))
                                                  ""])
                                               poem)])
                               category)])
               categories-poems-verses))

(defn hu [x]
  (let [raw (second (read-poems x))
        lines (lines raw)
        poems (poems raw)]
    (run! println (flatten (print-poems poems (into {} lines))))))

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
