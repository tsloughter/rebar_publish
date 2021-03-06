(ns rp.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [cljs.core.async :as async :refer [put! chan alts!]]
   [goog.events :as events]
   [secretary.core :as secretary :refer-macros [defroute]]
   [om.dom :as dom :include-macros true]
   [om.core :as om :include-macros true]
   [goog.dom :as gdom]

   [rp.home :as home]
   [rp.package :as package])
  (:import [goog.net XhrIo]
           [goog Uri]
           [goog.history Html5History]
           goog.net.EventType
           [goog.events EventType]
           goog.History))

(def app-state
  (atom { :view home/view, :data { :id nil, :vsn "" } }))

(def history (Html5History.))
(.setUseFragment history false)
(.setPathPrefix history "")
(.setEnabled history true)

(defn define-routes [cursor]

  (defroute package-id-vsn-path "/package/:id/:vsn" [id vsn]
    (om/update! cursor [:data :vsn] vsn)
    (om/update! cursor [:data :id] id)
    (om/update! cursor :view package/view))

  (defroute package-id-path "/package/:id" [id]
    (om/update! cursor [:data :id] id)
    (om/update! cursor :view package/view)))

(defn listen [el type]
  (let [out (chan)]
    (events/listen el type
      (fn [e] (put! out e)))
    out))

(defn app-view [cursor owner]
  (reify
    om/IInitState
    (init-state [_]
      (define-routes cursor))
    om/IRender
    (render [_]
      (om/build (get cursor :view) cursor))))

(let [navigation (listen history goog.history.EventType.NAVIGATE)]
  (go
    (while true
      (let [token (.-token (<! navigation))]
        (secretary/dispatch! token)))))

(events/listen js/window goog.events.EventType.CLICK
  (fn [e]
    (let [path (.getPath (.parse Uri (.-href (.-target e))))
          title (.-title (.-target e))]
      (when (secretary/locate-route path)
        (. history (setToken path title))
        (.preventDefault e)))))

(om/root app-view app-state
  {:target (gdom/getElement "content")})

(secretary/dispatch! (-> js/window .-location .-pathname))
