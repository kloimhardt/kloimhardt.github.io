(ns readpoem
  (:require [clojure.string :as string]
            [ajax.core :refer [GET]]))

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
  (let [[line tag-and-sort-idx] (map trim-nil (string/split str-line #";;"))
        [tag tag-sort-idx] (if tag-and-sort-idx (string/split tag-and-sort-idx #" ") [nil nil])]
    (if (and tag (re-find (re-pattern tag) line))
      (if (string/starts-with? line tag)
        {:part1 nil :tag tag :part2 (subs line (inc (count tag))) :tag-sort-idx tag-sort-idx}
        (let [[part1 part2] (string/split line (re-pattern tag))]
          {:part1 (string/trim part1) :tag tag
           :part2 (trim-nil part2)
           :tag-sort-idx tag-sort-idx}))
      {:part1 line :tag nil :part2 nil})))

(defn lines [raw-poems]
  (map (fn [[id str-line]]
         [id (split-line str-line)])
       raw-poems))

(defn verse-lengths [raw-poems]
  (let [categories (vals (group-by first (map first raw-poems)))
        categories-poems (map (fn [category]
                                (->> category
                                     (filter #(not= '(-1 0 -1) (rest %)))
                                     (group-by second)
                                     vals))
                              categories)
        third #(get % 2)]
    (mapv (fn [poems]
           (mapv (fn [poem]
                  (->> poem
                       (filter #(not= '(0 -1) (rest (rest %))))
                       (group-by third)
                       vals
                       (mapv count)))
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

(defn get-file [filename handler]
  (GET filename
       {:format :text
        :headers {"Accept" "application/text"}
        :handler handler}))

(defn get-lines-and-verse-lengths [plain-text]
  (let [raw (second (read-poems plain-text))
        lines (into {} (lines raw))
        verse-lengths (verse-lengths raw)]
    {:lines lines :verse-lengths verse-lengths}))
