(ns tests
  (:require [state :as st]
            [lstate :as lst]
            [dragdrop :as d]
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
  (dom/render [d/main] (.getElementById js/document "content")))

(rp/get-file "poems.org" hu)

(defn all-positions [line-ids tag-ids]
  (let [{:keys [lines line-height line-distance tag-height tag-distance left-margin]} @lst/l-state
        psize (* line-height line-distance)]
    {:line-positions
     (->> line-ids
          (map-indexed (fn [idx line-id]
                         [line-id
                          [left-margin
                           (* psize (inc idx))]]))
          (into {}))
     :tag-initial-positions
     (->> (keys tag-ids)
          (map (fn [tag-id]
                 [tag-id
                  [left-margin
                   (+ (* psize (count line-ids))
                      (* tag-height tag-distance
                         (get-in lines [tag-id :tag-sort-idx])))]]))
          (into {}))}))

(defn print-states []
  (.log js/console @lst/l-state)
  (.log js/console @st/r-state)

  (p
    (let [current-verse (get-in @st/r-state [:ui :verse])
          line-ids (lst/get-lines-for-verse current-verse)
          tag-ids (st/get-verse-tags)]
      (all-positions line-ids tag-ids))))

(js/setTimeout print-states 300)
