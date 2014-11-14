(ns rp.search
  (:require
   [goog.events :as events]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [goog.dom :as gdom]

   [rp.utils :as utils])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]))

(defn handle-change [e owner cursor]
  (om/set-state! owner (:text cursor) (.. e -target -value)))

(defn do-search [cursor owner]
  (let [query (-> (om/get-node owner "search")
                  .-value)]
    (when query
      (utils/poll cursor [:data] (str "/query?query=" query)))))

(defn view [cursor owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil "hello"))))
