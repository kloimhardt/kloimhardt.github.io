;; https://www.petercollingridge.co.uk/tutorials/svg/interactive/dragging/

(ns dragrop.dragdrop
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [ajax.core :refer [GET POST]]
            [clojure.string :as string]))

(def r-state (r/atom {:words {}}))
(def l-state (volatile! {:fill "#fafafa"}))

(defn set-pos [id x y]
  (swap! r-state assoc-in [:words id :pos] [x y]))

(defn set-element [id e]
  (swap! r-state assoc-in [:words id :element] e))

(defn get-element [id]
  (get-in @r-state [:words id :element]))

(defn get-pos [id]
  (get-in @r-state [:words id :pos]))

(defn get-fill []
  (:fill @l-state))

(defn get-mouse-positon [e]
  (let [evt (if-let [t (.-touches e)] (first t) e)]
    [(.-clientX evt) (.-clientY evt)]))

(defn start-drag [id]
  (fn [e]
    (vswap! l-state assoc :current-id id)
    (let [[x y] (get-pos id)
          [mx my] (get-mouse-positon e)]
      (vswap! l-state assoc :offset [(- x mx) (- y my)]))))

(defn end-drag [_e]
  (vswap! l-state assoc :current-id nil))

(defn drag [e]
  (when-let [id (:current-id @l-state)]
    (let [[ox oy] (:offset @l-state)
          [mx my] (get-mouse-positon e)]
      (set-pos id (+ mx ox) (+ my oy)))))

(defn dragarea [e]
  (when e
    (doto e
      (.addEventListener "mousemove" drag)
      (.addEventListener "touchmove" drag)
      (.addEventListener "mouseup" end-drag)
      (.addEventListener "touchend" end-drag)
      #_(.addEventListener "touchleave" end-drag)
      #_(.addEventListener "touchcancel" end-drag)
      #_(.addEventListener "mouseleave" end-drag))))

(defn make-draggable [id]
  (fn [e]
    (when e
      (set-element id e)
      (doto e
        (.addEventListener "mousedown" (start-drag id))
        (.addEventListener "touchstart" (start-drag id))
        dragarea))))

(defn word [{:keys [id x y]} _text]
  (set-pos id x y)
  (fn [{:keys [id _x _y]} text]
    (let [[px py] (get-pos id)
          el (get-element id)
          [idx1 idx2] [6 10]
          [start end] (when el [(.getStartPositionOfChar el idx1) (.getEndPositionOfChar el idx2)])
          client-rect (when el (first (.getClientRects el)))
          [sx sy ex ey fsy fey] (when el [(.-x start) (.-y start) (.-x end) (.-y end) (.-top client-rect) (.-bottom client-rect)])]
      [:g
       [:text {:x px :y py :ref (make-draggable id) :style {:cursor :move} :font-size "2em"} (str text " " sy " " ey)]
       (when el
         [:rect {:x sx :y fsy :width (- ex sx) :height (- fey fsy) :fill (get-fill)}])])))

(defn home []
  [:div
   [:svg {:width "100%" :height "70%"}
    [:rect {:x 0, :y 0, :width "100%", :height "100%", :fill (get-fill) :ref dragarea}]
    #_[word {:id "w1" :x 18 :y 30} "hal"]
    #_[word {:id "w2" :x 155 :y 30} "hui"]
    [word {:id "w3" :x 35 :y 75} "lorem ipsum hicksi"]]
   [:p (subs "lorem ipsum duda" 6 11) (str @r-state)]])

(.log js/console "hi11")
(dom/render [home] (.getElementById js/document "content"))
