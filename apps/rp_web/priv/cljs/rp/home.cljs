(ns rp.home
  (:require
   [secretary.core :as secretary :refer-macros [defroute]]
   [goog.events :as events]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [goog.dom :as gdom]

   [rp.utils :as utils])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]))

(defn view [cursor owner]
  (reify
    om/IWillMount
    (will-mount [this]
      (utils/json-xhr
        {:method :get
         :url "/packages"
         :on-complete #(om/transact! cursor :packages (fn [_] %))}))
    om/IRender
    (render [_]
      (dom/div nil
        (dom/div #js {:className "row"}
          (dom/div #js {:className "col-lg-8 col-lg-offset-2"}
            (dom/h2 nil "Available Apps")
            (apply dom/div #js {:className "list-group"}
              (map
                (fn [[k v]]
                  (dom/a #js {:className "list-group-item" :href (utils/uri "/package" (name k))}
                    (into-array
                      (map
                        (fn [tag]
                          (dom/span #js {:className "badge"}
                            tag)) (into [] (get-in v [:tags]))))
                    (dom/h4 #js {:className "list-group-item-heading"}
                      (name k))
                    (dom/p #js {:className "list-group-item-text"}
                      (get-in v [:desc])))) (get-in cursor [:packages])))))))))
