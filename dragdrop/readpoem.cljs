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

(defn split-line [line tag-id tags]
  (let [tag (get tags tag-id)]
    (if (and tag (re-find (re-pattern tag) line))
      (if (string/starts-with? line tag)
        {:part1 nil :tag-id tag-id :part2 (subs line (count tag))}
        (let [[part1 part2] (string/split line (re-pattern tag))]
          {:part1 part1 :tag-id tag-id :part2 part2}))
      {:part1 line :tag-id nil :part2 nil})))

(defn poems-struct [poems-from-file]
  (let [tags (apply merge
                    (filter identity
                            (map (fn [{:keys [ids tags]}]
                                   (into {} (map (fn [id tag] (when tag [id tag]))
                                                 ids tags)))
                                 poems-from-file)))]
    {:poems (map-indexed (fn [id {:keys [ids]}] {:id id :line-ids ids})  poems-from-file)
     :lines (apply merge
                   (map (fn [{:keys [ids lines]}]
                          (into {} (map (fn [id line] [id (split-line line id tags)])
                                        ids lines)))
                        poems-from-file))
     :tags tags}))

(defn poems-struct-v [poems-from-file]
  (let [tags (apply merge
                    (filter identity
                            (map (fn [{:keys [ids tags]}]
                                   (into {} (map (fn [id tag] (when tag [id tag]))
                                                 ids tags)))
                                 poems-from-file)))]
    {:poems (map-indexed (fn [id {:keys [ids]}] {:id id :line-ids ids})  poems-from-file)
     :lines (apply merge
                   (map (fn [{:keys [ids lines]}]
                          (into {} (map (fn [id line] [id (split-line line id tags)])
                                        ids lines)))
                        poems-from-file))
     :tags tags}))

(defn prepare-poems [plain-text]
  (lst/set-poem-struct-v (poems-struct-v (read-poems plain-text)))
  (lst/set-tag-v :blank (st/get-blank-chars))
  (st/set-poem-struct (poems-struct (read-poems plain-text)))
  (st/set-all-line-tag-ids :blank))

(defn get-file [filename]
  (GET filename
    {:format :text
     :headers {"Accept" "application/text"}
     :handler prepare-poems}))
