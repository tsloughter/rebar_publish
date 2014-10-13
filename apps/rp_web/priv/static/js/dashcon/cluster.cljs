(ns dashcon.cluster
  (:require
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [goog.dom :as gdom]

    [dashcon.nav :as nav]
    [dashcon.utils :as utils]))

(defn view [cursor owner]
  (reify
    om/IWillMount
    (will-mount [this]
      (set! this.interval (js/setInterval
                            (fn []
                              (utils/poll cursor [:data :nodes] (str "/cluster/" (:id (:data @cursor)))))
                            2000)))
    om/IWillUnmount
    (will-unmount [this]
      (js/clearInterval this.interval))
    om/IRender
    (render [_]
      (let [nodes (:nodes (:data cursor))]
        (om/update! cursor :nav {:title "Instances", :key "instance", :list nodes}))
      (dom/div #js {:className "row"}
        (dom/div #js {:className "col-lg-3"}
          (dom/div #js {:className "panel panel-default"}
          (dom/a #js {:href "/" :className "panel-heading"} (get-in cursor [:data :id]))))))))
