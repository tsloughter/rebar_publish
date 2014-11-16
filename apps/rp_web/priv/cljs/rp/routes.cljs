(ns rp.routes
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
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
