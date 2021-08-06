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
  (ps (:tag-positions @st/r-state))
  (ps
    (let [{:keys [tag-height tag-distance]} lst/config]
      (into {} (map (fn [[id [x y]]] [id [x (- y (* tag-height tag-distance))]]) (:tag-positions @st/r-state))))
    )
  )

(js/setTimeout print-states 300)
