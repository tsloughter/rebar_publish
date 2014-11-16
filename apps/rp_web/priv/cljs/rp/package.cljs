(ns rp.package
  (:require
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
         :url (utils/uri "/packages" (:id (:data cursor)) (:vsn (:data cursor)))
         :on-complete #(om/transact! cursor :package (fn [_] %))}))
    om/IRender
    (render [_]
      (let [pkgname (get-in cursor [:package :name])
            vsn (get-in cursor [:package :vsn])
            vsns (get-in cursor [:package :vsns])
            tags (get-in cursor [:package :tags])
            desc (get-in cursor [:package :desc])
            deps (get-in cursor [:package :deps])]
        (dom/div nil
          (dom/div #js {:className "row"}
            (dom/div #js {:className "col-lg-8 col-lg-offset-2"}
              (dom/h2 nil (str pkgname " - " vsn))
              (dom/ul #js {:className "list-group"}
                (dom/li #js {:className "list-group-item"}
                  (into-array
                    (map
                      (fn [tag]
                        (dom/span #js {:className "badge"}
                          tag)) (into [] tags)))

                  (dom/p #js {:className "list-group-item-text"}
                    (dom/p nil desc)
                    (dom/p nil "Versions: "
                      (into-array
                        (map
                          (fn [v]
                            (dom/a #js {:href (utils/uri "/package" pkgname v)}
                              (dom/span #js {:className "label label-default"}
                                v))) (distinct (into [] vsns)))))
                    (dom/p nil "Dependencies: "
                      (into-array
                        (map
                          (fn [[k v]]
                            (dom/a #js {:href (utils/uri "/package" (name k) v)}
                              (dom/span #js {:className "label label-default"}
                                (name k) " - " v))) deps)))
                    (dom/hr nil)
                    (dom/p nil
                      "Add to rebar.config "
                      (dom/code nil "deps")
                      ":")
                    (dom/p nil (dom/pre nil "{" pkgname ", \"" vsn "\"}"))))))))))))
