(ns rp.utils
  (:require
    [goog.events :as events]
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true])
  (:import [goog.net XhrIo]
    goog.net.EventType
    [goog.events EventType]))

(def ^:private meths
  { :get "GET"
    :put "PUT"
    :post "POST"
    :delete "DELETE" })

(defn json-xhr [{:keys [method url data on-complete]}]
  (let [xhr (XhrIo.)]
    (events/listen xhr goog.net.EventType.COMPLETE
                   (fn [e]
                     (on-complete (js->clj (.getResponseJson xhr) :keywordize-keys true))))
    (. xhr
       (send url (meths method) (when data (pr-str data))
             #js {"accept" "application/json"}))))

(defn poll [cursor key url]
  (json-xhr
    {:method :get
      :url url
      :on-complete #(om/transact! cursor key (fn [_] %))}))
