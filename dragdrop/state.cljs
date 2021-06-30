(ns state
  (:require [reagent.core :as r]))

(def r-state (r/atom {}))

(defn get-ui-tags []
  (get-in @r-state [:ui :tags]))

(defn get-verse-tags []
    (get-in @r-state [:poem-data :tags]))

(defn set-line-tag-id [line-id tag-id]
  (swap! r-state
         (fn [state]
           (assoc-in state [:poem-data :tags line-id] tag-id))))

(defn get-line-tag-id [line-id]
  (get-in @r-state [:poem-data :tags line-id]))

(defn get-lines-for-tag-id [tag-id]
  (map first (filter (fn [[_ line]] (= line tag-id)) (get-verse-tags))))

(defn set-blank-tags [line-ids]
  (swap! r-state
         assoc-in [:poems-struct :lines] (into {} (map (fn [id] {id {:tag-id :blank}})
                                                        line-ids))))

(defn set-tag-pos [id x y]
  (swap! r-state assoc-in [:ui :tags id :pos] [x y]))

(defn get-tag-pos [id]
  (get-in @r-state [:ui :tags id :pos]))

(defn set-tag-fig-rect [id rect]
  (swap! r-state assoc-in [:ui :lines id :fig-rect] rect))

(defn get-tag-fig-rect [id]
  (get-in @r-state [:ui :lines id :fig-rect]))

(defn get-tag-fig-rects []
  (into {} (map (fn [[id r]] [id (:fig-rect r)]) (get-in @r-state [:ui :lines]))))
