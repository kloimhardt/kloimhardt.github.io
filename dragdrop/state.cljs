(ns state
  (:require [reagent.core :as r]))

(def r-state (r/atom {:tags {}}))

(defn set-poem-struct [pst]
  (swap! r-state assoc :poems-struct pst))

(defn get-poems-struct []
  (get @r-state :poems-struct))

(defn set-tag-pos [id x y]
  (swap! r-state assoc-in [:tags id :pos] [x y]))

(defn get-tag-pos [id]
  (get-in @r-state [:tags id :pos]))

(defn set-tag [id tag-txt]
  (swap! r-state assoc-in [:poems-struct :tags id] tag-txt))

(defn get-tag [id]
  (get-in @r-state [:poems-struct :tags id]))

(defn set-line-tag-id [line-id tag-id]
  (swap! r-state
         (fn [state]
           (assoc-in state [:poems-struct :lines line-id :tag-id] tag-id))))

(defn get-line-tag-id [line-id]
  (get-in @r-state [:poems-struct :lines line-id :tag-id]))

(defn set-all-line-tag-ids [blank-kw]
  (run! (fn [line-id]
          (swap! r-state
                 (fn [state]
                   (update-in state [:poems-struct :lines line-id :tag-id]
                              (fn [tag-id] (when tag-id blank-kw))))))
        (keys (get-in @r-state [:poems-struct :lines]))))

(defn set-tag-element [id e]
  (swap! r-state assoc-in [:tags id :element] e))

(defn get-tag-element [id]
  (get-in @r-state [:tags id :element]))

(defn set-line-element [id e]
  (swap! r-state assoc-in [:lines id] e))

(defn get-line-element [id]
  (get-in @r-state [:lines id]))

(def l-state (volatile! {:fill "#fafafa"}))

(defn get-fill []
  (:fill @l-state))

(defn set-blank-rect [id rect]
  (vswap! l-state assoc-in [:blanks id] rect))

(defn get-blank-rect [id]
  (get-in @l-state [:blanks id]))

(defn get-lines-for-tag-id [tag-id]
  (map first (filter (fn [[_ line]] (= (:tag-id line) tag-id))
                     (get-in @r-state [:poems-struct :lines]))))

(defn get-blank-rects []
  (get @l-state :blanks)
  #_(select-keys (get @l-state :blanks) (get-lines-for-tag-id :blank)))
