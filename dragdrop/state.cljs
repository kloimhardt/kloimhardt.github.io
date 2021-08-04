(ns state
  (:require [reagent.core :as r]))

(def r-state (r/atom {}))

(defn set-line-tag-id [line-id tag-id]
  (swap! r-state
         (fn [state]
           (assoc-in state [:current-tags line-id] tag-id))))

(defn set-tag-to-blank-for-lines [line-ids]
  (let [new-blank-lines (into {} (map (fn[id] [id :blank]) line-ids))]
    (swap! r-state assoc :current-tags new-blank-lines)))

(defn set-verse [idx-vec]
  (swap! r-state assoc :current-verse idx-vec))

(defn set-tag-pos [id x y]
  (swap! r-state assoc-in [:tag-positions id] [x y]))

(defn clear-tag-positions []
  (swap! r-state dissoc :tag-positions))

(defn set-category [category]
  (swap! r-state assoc :current-category category))

(defn set-display-type [type]
  (swap! r-state assoc :display-type type))
