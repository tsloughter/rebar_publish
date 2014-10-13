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
               "hello"))))
