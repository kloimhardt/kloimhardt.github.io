(ns dragrop.dragdrop
  (:require [clojure.string :as string]))

(defn trim-nil [s]
  (when s (string/trim s)))

(defn read-poems [filename]
  (let [vect
        (->> filename
             slurp
             string/split-lines
             (map #(string/split % #";;")))]
    {:poem (->> vect (map first) (map string/trim))
     :tags (->> vect (map fnext) (map trim-nil))}))

(defn cut-out-word [{:keys [poem tags]}]
  (->> (map (fn [x y] (if y (string/split x (re-pattern y)) [x]))
            poem tags)
       (map #(map string/trim %))))

(defn paste-in-word [stub proposal]
  (->> (map (fn [s p] (if p [(first s) (str " " p " ") (last s)] s))
            stub proposal)
       (map string/join)))

(def a (read-poems "poems.txt"))
(def b (cut-out-word a))

(paste-in-word b (:tags a))
