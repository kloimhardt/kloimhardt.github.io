(ns tests
  (:require [state :as st]
            [lstate :as lst]
            [view :as d]
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
  (lst/redefine-config)
  (dom/render [d/main] (.getElementById js/document "content")))

(rp/get-file "poems.org" hu)


(defn print-states []
  (p @lst/l-state)
  (p @lst/ui-state)
  (p @st/r-state)

    (defn inc-verse [a _]
    (let [nof-verses (count (get-in (:verse-lengths lst/config) (butlast a)))
          nof-poems (count (get (:verse-lengths lst/config) (first a)))
          nof-categories (count (:verse-lengths lst/config))]
      (cond
        (< (inc (get a 2)) nof-verses)
        (update a 2 inc)
        (< (inc (get a 1)) nof-poems)
        (-> a (update 1 inc) (assoc 2 0))
        (< (inc (get a 0)) nof-categories)
        (-> a (update 0 inc) (assoc 1 0) (assoc 2 0))
        :else
        [0 0 0])))

  (defn dec-verse [a _]
    (cond
      (> (dec (get a 2)) -1)
      (update a 2 dec)
      (> (dec (get a 1)) -1)
      (let [max-verse-idx (dec (count (get-in (:verse-lengths lst/config) [(get a 0) (dec (get a 1))])))]
        (-> a (update 1 dec) (assoc 2 max-verse-idx)))
      (> (dec (get a 0)) -1)
      (let [max-poems-idx (dec (count (get (:verse-lengths lst/config) (dec (get a 0)))))
            max-verse-idx (dec (count (get-in (:verse-lengths lst/config) [(dec (get a 0)) max-poems-idx])))]
        (-> a (update 0 dec) (assoc 1 max-poems-idx) (assoc 2 max-verse-idx)))
      :else
      (let [max-categories-idx (dec (count (:verse-lengths lst/config)))
            max-poems-idx (dec (count (get (:verse-lengths lst/config) max-categories-idx)))
            max-verse-idx (dec (count (get-in (:verse-lengths lst/config) [max-categories-idx max-poems-idx])))]
        [max-categories-idx max-poems-idx max-verse-idx])))

  (println
    (reductions inc-verse [0 0 0] (range 18))
    )
  (println
    (reductions dec-verse [0 0 0] (range 18))
    (= (reductions inc-verse [0 0 0] (range 18)) (reverse (reductions dec-verse [0 0 0] (range 18))))
    )
  )

(js/setTimeout print-states 300)
