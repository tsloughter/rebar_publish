(ns dashcon.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    [cljs.core.async :as async :refer [put! chan alts!]]
    [goog.events :as events]
    [secretary.core :as secretary :include-macros true :refer [defroute]]
    [om.dom :as dom :include-macros true]
    [om.core :as om :include-macros true]
    [goog.dom :as gdom]

    [dashcon.home :as home]
    [dashcon.instance :as instance]
    [dashcon.cluster :as cluster]
    [dashcon.nav :as nav]
    [dashcon.utils :as utils])
  (:import [goog.net XhrIo]
    [goog Uri]
    [goog.history Html5History]
    goog.net.EventType
    [goog.events EventType]
    goog.History))

(def app-state
  (atom { :nav {:title "Clusters", :key "cluster", :list '("one")}
          ,:view home/view, :data {:id "cluster0"} }))

(def history (Html5History.))
(.setUseFragment history false)
(.setPathPrefix history "")
(.setEnabled history true)

(defn listen [el type]
  (let [out (chan)]
    (events/listen el type
      (fn [e] (put! out e)))
    out))

(defn define-routes [cursor]
  (defroute instance-path "/instance/:id" [id]
    (om/update! cursor [:data :id] id)
    (om/update! cursor :view instance/view))

  (defroute cluster-path "/cluster/:id" [id]
    (om/update! cursor [:data :id] id)
    (om/update! cursor :view cluster/view))

  (defroute home-path "" []
    (om/update! cursor :view home/view))

  (defroute home-path "/" []
    (om/update! cursor :view home/view)))

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
    {:target (gdom/getElement "app")})

(om/root nav/view app-state
  {:target (gdom/getElement "nav")})

(secretary/dispatch! (-> js/window .-location .-pathname))
