(ns lstate
  (:require [state :as st]))

(defn get-tag [id]
  (get-in @st/l-state [:poems-struct :tags id]))

(defn set-poem-struct-v [pst]
  (vswap! st/l-state assoc :poems-struct pst))


(defn get-poems-struct-v []
  (get @st/l-state :poems-struct))


(defn set-tag-v [id tag-txt]
  (vswap! st/l-state assoc-in [:poems-struct :tags id] tag-txt))

(defn get-fill []
  (:fill @st/l-state))

(defn get-blank-chars []
  (:blank-chars @st/l-state))

(defn set-tag-fig-rect-v [id rect]
  (vswap! st/l-state assoc-in [:tag-figs id :rect] rect))

(defn get-tag-fig-rect [id]
  (get-in @st/l-state [:tag-figs id :rect]))

(defn get-tag-fig-rects []
  (into {} (map (fn [[id r]] [id (:rect r)])
                (:tag-figs @st/l-state))))

(defn set-current-tag-id [id]
  (vswap! st/l-state assoc :current-id id))

(defn get-current-tag-id []
  (get @st/l-state :current-id))

(defn set-current-tag-offset [ox oy]
  (vswap! st/l-state assoc :offset [ox oy]))

(defn get-current-tag-offset []
  (get @st/l-state :offset))
