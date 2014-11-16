(defproject rebar_publish "0.1.0-SNAPSHOT"
  :description ""
  :url ""

  :jvm-opts ^:replace ["-Xmx1g" "-server"]

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.clojure/clojurescript "0.0-2322"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [om "0.8.0-alpha2"]
                 [secretary "1.2.2-SNAPSHOT"]]

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
