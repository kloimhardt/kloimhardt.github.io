(ns state
  (:require [reagent.core :as r]))

(def r-state (r/atom {}))

(def l-state (volatile! {:fill "#fafafa" :blank-chars "__"}))

(defn set-poem-struct [pst]
  (swap! r-state assoc :poems-struct pst))

(defn set-poem-struct-v [pst]
  (vswap! l-state assoc :poems-struct pst))

(defn get-poems-struct []
  (get @r-state :poems-struct))

(defn get-poems-struct-v []
  (get @l-state :poems-struct))

(defn set-tag [id tag-txt]
  (swap! r-state assoc-in [:poems-struct :tags id] tag-txt))

(defn set-tag-v [id tag-txt]
  (vswap! l-state assoc-in [:poems-struct :tags id] tag-txt))

(defn get-tag [id]
  (get-in @r-state [:poems-struct :tags id]))

(defn get-lines []
  (get-in @r-state [:poems-struct :lines]))

(defn set-line-tag-id [line-id tag-id]
  (swap! r-state
         (fn [state]
           (assoc-in state [:poems-struct :lines line-id :tag-id] tag-id))))

(defn get-line-tag-id [line-id]
  (get-in @r-state [:poems-struct :lines line-id :tag-id]))

(defn get-lines-for-tag-id [tag-id]
  (map first (filter (fn [[_ line]] (= (:tag-id line) tag-id)) (get-lines))))

(defn set-all-line-tag-ids [blank-kw]
  (run! (fn [line-id]
          (swap! r-state
                 (fn [state]
                   (update-in state [:poems-struct :lines line-id :tag-id]
                              (fn [tag-id] (when tag-id blank-kw))))))
        (keys (get-in @r-state [:poems-struct :lines]))))

(defn set-tag-pos [id x y]
  (swap! r-state assoc-in [:ui :tags id :pos] [x y]))

(defn get-tag-pos [id]
  (get-in @r-state [:ui :tags id :pos]))

(defn set-line-element [id e]
  (swap! r-state assoc-in [:ui :lines id :element] e))

(defn get-line-element [id]
  (get-in @r-state [:ui :lines id :element]))

(defn get-fill []
  (:fill @l-state))

(defn get-blank-chars []
  (:blank-chars @l-state))

(defn set-tag-fig-rect [id rect]
  (vswap! l-state assoc-in [:tag-figs id :rect] rect))

(defn set-tag-fig-rect-v [id rect]
  (vswap! l-state assoc-in [:tag-figs-v id :rect] rect))

(defn get-tag-fig-rects []
  (into {} (map (fn [[id r]] [id (:rect r)]) (:tag-figs @l-state))))

(defn set-current-tag-id [id]
  (vswap! l-state assoc :current-id id))

(defn get-current-tag-id []
  (get @l-state :current-id))

(defn set-current-tag-offset [ox oy]
  (vswap! l-state assoc :offset [ox oy]))

(defn get-current-tag-offset []
  (get @l-state :offset))
