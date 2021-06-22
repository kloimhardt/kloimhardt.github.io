(ns lstate
  (:require [state :as st]))

(defn get-poems-struct-v []
  (get @st/l-state :poems-struct))

(defn get-fill []
  (:fill @st/l-state))

(defn set-current-tag-id [id]
  (vswap! st/l-state assoc :current-id id))

(defn get-current-tag-id []
  (get @st/l-state :current-id))

(defn set-current-tag-offset [ox oy]
  (vswap! st/l-state assoc :offset [ox oy]))

(defn get-current-tag-offset []
  (get @st/l-state :offset))

(defn set-poem-struct-v [pst]
  (vswap! st/l-state assoc :poems-struct pst))

(defn set-tag-v [id tag-txt]
  (vswap! st/l-state assoc-in [:poems-struct :tags id] tag-txt))

(defn get-blank-chars []
  (:blank-chars @st/l-state))
