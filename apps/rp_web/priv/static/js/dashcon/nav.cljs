(ns dashcon.nav
  (:require
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]

    [dashcon.utils :as utils]))

(defn view [cursor owner]
  (reify
    om/IRender
    (render [_]
      (dom/nav #js {:className "navbar navbar-default navbar-fixed-top" :role "navigation"}
        (dom/div #js {:className "navbar-header"}
          (dom/a #js {:className "navbar-brand" :href "/"} "Dashcon"))
        (dom/div #js {:className "navbar-default navbar-static-side" :role "navigation"}
          (dom/div #js {:className "sidebar-collapse"}
            (dom/ul #js {:className "nav" :id "side-menu"}
              (dom/li #js {:className "sidebar-search"}
                (dom/div #js {:className "input-group custom-search-form"}
                  (dom/input #js {:type "text" :className "form-control" :placeholder "Search..."}
                  (dom/span #js {:className "input-group-btn"}
                    (dom/button #js {:className "btn btn-default" :type "button"}
                      (dom/i #js {:className "fa fa-search"}))))))
              (dom/li nil
                (dom/a #js {:href "/"}
                  (dom/i #js {:className "fa fa-dashboard fa-fw"})
                  "Dashboard"))
              (dom/li nil
                (dom/a #js {:href "#"}
                  (dom/i #js {:className "fa fa-bar-chart-o fa-fw"})
                  (get-in cursor [:nav :title])
                  (dom/span #js {:className "fa arrow"}))
                (apply dom/ul #js {:className "nav nav-second-level"}
                  (map
                    #(dom/li #js {:id "name"}
                       (dom/a #js {:href (apply str ["/" (get-in cursor [:nav :key]) "/" %])}
                         %)) (get-in cursor [:nav :list])))))))))))
