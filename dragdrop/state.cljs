(ns state
  (:require [reagent.core :as r]))

(def r-state (r/atom {}))

(defn set-line-tag-id [line-id tag-id]
  (swap! r-state
         (fn [state]
           (assoc-in state [:poem-data :tags line-id] tag-id))))

(defn set-tag-pos [id x y]
  (swap! r-state assoc-in [:ui :tags id :pos] [x y]))

(defn set-tag-to-blank-for-lines [line-ids]
  (let [new-blank-lines (into {} (map (fn[id] [id :blank]) line-ids))]
    (swap! r-state assoc-in [:poem-data :tags] new-blank-lines)))

(defn set-category [category]
  (swap! r-state assoc-in [:ui :category] category))

(defn set-verse [idx-vec]
  (swap! r-state assoc-in [:poem-data :verse] idx-vec))
