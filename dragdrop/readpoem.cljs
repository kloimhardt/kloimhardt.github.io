(ns readpoem
  (:require [clojure.string :as string]
            [ajax.core :refer [GET]]
            [state :as st]
            [lstate :as lst]))

(defn trim-nil [s]
  (when s (string/trim s)))

(defn read-poems [poems]
  (let [vect
        (->> poems
             string/split-lines
             (map #(string/split % #";;")))]
    [{:lines (->> vect (map first) (map string/trim))
      :tags (->> vect (map fnext) (map trim-nil))
      :ids (range (count vect))}]))

(defn split-line [line tag]
  (if (and tag (re-find (re-pattern tag) line))
    (if (string/starts-with? line tag)
      {:part1 nil :tag tag :part2 (subs line (count tag))}
      (let [[part1 part2] (string/split line (re-pattern tag))]
        {:part1 part1 :tag tag :part2 part2}))
    {:part1 line :tag nil :part2 nil}))

(defn poems-struct [poems-from-file]
  (let [{:keys [lines tags]} (first poems-from-file)]
    {:poems [{:id 0 :line-ids (range (count lines))}]
     :lines (into {} (map (fn[idx line tag] [idx (split-line line tag)]) (range) lines tags))}))

(defn prepare-poems [plain-text]
  (lst/set-poem-struct (poems-struct (read-poems plain-text)))
  (st/set-blank-tags (lst/get-tag-ids)))

(defn get-file [filename handler]
  (GET filename
    {:format :text
     :headers {"Accept" "application/text"}
     :handler handler}))
