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
      (dom/div nil
               (dom/div #js {:className "row"}
                        (dom/div #js {:className "col-lg-8 col-lg-offset-2"}
                                 (dom/div #js {:className "list-group"}
                                          (dom/a #js {:className "list-group-item"}
                                                 (dom/span #js {:className "badge"}
                                                           "http")
                                                 (dom/span #js {:className "badge"}
                                                           "server")
                                                 (dom/h4 #js {:className "list-group-item-heading"}
                                                         "Cowboy")
                                                 (dom/p #js {:className "list-group-item-text"}
                                                        "Small, fast, modular HTTP server written in Erlang.")))))))))
