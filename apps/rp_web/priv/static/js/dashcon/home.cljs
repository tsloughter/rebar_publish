(ns dashcon.home
  (:require
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [goog.dom :as gdom]))

(defn view [cursor owner]
  (reify
    om/IRender
    (render [_]
      (js/alert "hello")
      (dom/div nil
        "hello"))))
