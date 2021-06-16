(ns dragrop.dragdrop
  (:require [clojure.string :as string]))

(def w (slurp "poems.txt"))

(defn trim-nil [s]
  (when s (string/trim s)))

(defn read-poems [filename]
  (let [vect
        (->> filename
             slurp
             string/split-lines
             (map #(string/split % #";;")))]
    [(->> vect (map first) (map string/trim))
     (->> vect (map rest) (map last) (map trim-nil))]))

(read-poems "poems.txt")
