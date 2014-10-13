(ns dashcon.counters
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [secretary.core :as secretary :include-macros true :refer [defroute]]
    [goog.dom :as gdom]
    [cljs.core.async :refer [<! chan put! sliding-buffer]]))

(enable-console-print!)

(def app-state
  (atom {:counters (into [] (map (fn [n] {:id n :count 0}) (range 10)))}))

(defn counter [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil
        (dom/label nil (:count data))
        (dom/button
          #js {:onClick
               (fn [e]
                 (om/transact! data :count inc))}
          "+")
        (dom/button
          #js {:onClick
               (fn [e]
                 (om/transact! data :count dec))}
          "-")))))

(defn counter-view [app owner]
  (reify
    om/IRender
    (render [_]
      (apply dom/div nil
        (dom/h1 #js {:key "head"} "A Counting Widget!")
        (om/build-all counter (:counters app)
          {:key :id})))))

(defn render-partials [partial state]
  (om/build partial state))

;(defn define-routes [cursor]
  ;(defroute home-path "/" []
   ; (render-partials counter-view cursor)))

(defn app-view [cursor owner]
  (reify
    ;om/IWillMount
    ;(will-mount [_]
      ;(define-routes cursor))
    om/IRender
    (render [_]
      (render-partials counter-view cursor))))

(om/root app-view app-state
  {:target (.getElementById js/document "app0")})

;(om/root counter-view app-state
;  {:target (.getElementById js/document "app1")})
