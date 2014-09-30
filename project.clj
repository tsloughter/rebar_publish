(defproject rebar_publish "0.1.0-SNAPSHOT"
  :description ""
  :url ""

  :jvm-opts ^:replace ["-Xmx1g" "-server"]

  :dependencies [[org.clojure/clojure "1.6.0"]
                  [org.clojure/clojurescript "0.0-2261"]
                  [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                  [com.facebook/react "0.9.0.2"]
                  [om "0.6.3"]
                  [secretary "1.2.1-SNAPSHOT"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]

  :cljsbuild {
               :builds [{:id "dev"
                          :source-paths ["apps/rp_web/priv/cljs"]
                          :compiler {
                                      :output-to "apps/rp_web/priv/static/js/app.js"
                                      :output-dir "apps/rp_web/priv/static/js/"
                                      :optimizations :none
                                      :source-map true}}
                         {:id "release"
                           :source-paths ["apps/rp_web/priv/cljs"]
                           :compiler {
                                       :output-to "apps/rp_web/priv/static/js/app.js"
                                       :optimizations :advanced
                                       :elide-asserts true
                                       :pretty-print false
                                       :preamble ["react/react.min.js"]
                                       :externs ["react/externs/react.js"]
                                       :closure-warnings
                                       {:non-standard-jsdoc :off}}}]})
