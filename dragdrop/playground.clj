(ns playground
  (:require [clojure.string :as string]))

(re-find #"o" "huio")

(+ 5 6)
(string/index-of "hallo" "o")

(some identity [nil nil nil])

(string/split "ha hi hu" (re-pattern "hi"))

(defn cut-out-word1 [line tag]
  (if tag
    (let [part1 part2] (string/split line (re-pattern tag)))))

(def dline "ha hi ho")

(def dtags {1 "hi"})
(def dtid 1)

(string/split dline (re-pattern "hi"))

(defn split-line [line tag-id tags]
  (let [tag (get tags tag-id)]
    (if (and tag (re-find (re-pattern tag) line))
      (if (string/starts-with? line tag)
        {:part1 nil :tag-id tag-id :part2 (subs line (count tag))}
        (let [[part1 part2] (string/split line (re-pattern tag))]
          {:part1 part1 :tag-id tag-id :part2 part2}))
      {:part1 line :tag-id nil :part2 nil})))

(split-line "ha hi ho" 1 {1 "ha" 2 "hi" 3 "ho"})
(split-line "ha hi ho" 2 {1 "ha" 2 "hi" 3 "ho"})
(split-line "ha hi ho" 3 {1 "ha" 2 "hi" 3 "ho"})