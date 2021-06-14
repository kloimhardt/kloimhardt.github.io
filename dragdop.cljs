;; https://www.petercollingridge.co.uk/tutorials/svg/interactive/dragging/

(ns dragrop.dragdrop
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [ajax.core :refer [GET POST]]
            [clojure.string :as string]))

(def r-state (r/atom {:words {}}))
(def l-state (volatile! {}))

(defn set-pos [id x y]
  (swap! r-state assoc-in [:words id :pos] [x y]))

(defn get-pos [id]
  (get-in @r-state [:words id :pos]))

(defn start-drag [id]
  (fn [e]
    (vswap! l-state assoc :current-id id)
    (let [[x y] (get-pos id)]
      (vswap! l-state assoc :offset [(- x (.-clientX e)) (- y (.-clientY e))]))))

(defn end-drag [_e]
  (vswap! l-state assoc :current-id nil))

(defn drag [e]
  (when-let [id  (:current-id @l-state)]
    (let [[ox oy] (:offset @l-state)]
      (set-pos id (+ (.-clientX e) ox) (+ (.-clientY e) oy)))))

(defn make-draggable [id]
  (fn [e]
    (when e
      (doto e
        (.addEventListener "mousedown" (start-drag id))
        (.addEventListener "mousemove" drag)
        (.addEventListener "mouseup" end-drag)))))

(defn dragarea [e]
  (when e
    (doto e
      (.addEventListener "mousemove" drag)
      (.addEventListener "mouseup" end-drag)
      #_(.addEventListener "mouseleave" end-drag))))

(defn word [{:keys [id x y]} _text]
  (set-pos id x y)
  (fn [{:keys [id _x _y]} text]
    (let [[px py] (get-pos id)]
      [:text {:x px :y py :ref (make-draggable id) :style {:cursor :move :user-select :none}} text])))

(defn home []
  [:div
   [:svg {:xmlns "http://www.w3.org/2000/svg", :viewbox "0 0 30 20"}
    [:rect {:x "0", :y "0", :z 0 :width "300", :height "200", :fill "#fafafa" :ref dragarea}]
    [word {:id "w1" :x 18 :y 15} "ha"]
    [word {:id "w2" :x 35 :y 15} "hu"]
    [word {:id "w3" :x 35 :y 55} "lorem ipsum hicksi"]]
   [:p "hi" (str @r-state)]])

(dom/render [home] (.getElementById js/document "content"))
