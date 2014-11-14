(ns rp.home
  (:require
   [goog.events :as events]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [goog.dom :as gdom])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]))


(defn view [cursor owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil
               (dom/div #js {:className "row"}
                        (dom/div #js {:className "col-lg-8 col-lg-offset-2"}
                                 (dom/h2 nil "Available Apps")
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
