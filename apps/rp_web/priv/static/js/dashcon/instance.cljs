(ns dashcon.instance
  (:require
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [goog.dom :as gdom]

    [dashcon.nav :as nav]
    [dashcon.utils :as utils]))

(defn system-view [cursor owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "col-lg-3"}
        (dom/div #js {:className "panel panel-default"}
          (dom/div #js {:className "panel-heading"}
            "System and Architecture")
          (dom/div #js {:className "panel-body"}
            (dom/div #js {:className "table-responsive"}
              (dom/table #js {:className "table table-striped table-bordered table-hover"}
                (apply dom/tbody nil
                  (map
                    (fn [[k v]]
                      (dom/tr nil
                        (dom/td nil (name k))
                        (dom/td nil v))) cursor))))))))))


(defn memory-view [cursor owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "col-lg-3"}
        (dom/div #js {:className "panel panel-default"}
          (dom/div #js {:className "panel-heading"}
            "Memory Usage")
          (dom/div #js {:className "panel-body"}
            (dom/div #js {:className "table-responsive"}
              (dom/table #js {:className "table table-striped table-bordered table-hover"}
                (apply dom/tbody nil
                  (map
                    (fn [[k v]]
                      (dom/tr nil
                        (dom/td nil (name k))
                        (dom/td nil v))) cursor))))))))))

(defn statistics-view [cursor owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "col-lg-3"}
        (dom/div #js {:className "panel panel-default"}
          (dom/div #js {:className "panel-heading"}
            "Statistics")
          (dom/div #js {:className "panel-body"}
            (dom/div #js {:className "table-responsive"}
              (dom/table #js {:className "table table-striped table-bordered table-hover"}
                (dom/tbody nil
                  (dom/tr nil
                    (dom/td nil "Uptime")
                    (dom/td nil (:uptime cursor))))))))))))

(defn view [cursor owner]
  (reify
    om/IWillMount
    (will-mount [this]
      (set! this.interval
        (js/setInterval
          (fn []
            (utils/poll cursor [:data :stats] (str "/instance/" (:id (:data @cursor)))))
          2000)))
    om/IWillUnmount
    (will-unmount [this]
      (js/clearInterval this.interval))
    om/IRender
    (render [_]
      (om/update! cursor :nav {:title "Stats", :key "stats", :list '("Memory")})
      (dom/div #js {:className "row"}
        (om/build system-view (get-in cursor [:data :stats :system]))
        (om/build memory-view (get-in cursor [:data :stats :memory]))
        (om/build statistics-view (get-in cursor [:data :stats :statistics]))))))
