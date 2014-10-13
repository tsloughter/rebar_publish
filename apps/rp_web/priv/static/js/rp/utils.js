// Compiled by ClojureScript 0.0-2261
goog.provide('rp.utils');
goog.require('cljs.core');
goog.require('goog.events.EventType');
goog.require('goog.net.XhrIo');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('goog.events');
goog.require('goog.events');
rp.utils.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1683182755),"GET",new cljs.core.Keyword(null,"put","put",1299772570),"PUT",new cljs.core.Keyword(null,"post","post",269697687),"POST",new cljs.core.Keyword(null,"delete","delete",-1768633620),"DELETE"], null);
rp.utils.json_xhr = (function json_xhr(p__10446){var map__10448 = p__10446;var map__10448__$1 = ((cljs.core.seq_QMARK_.call(null,map__10448))?cljs.core.apply.call(null,cljs.core.hash_map,map__10448):map__10448);var on_complete = cljs.core.get.call(null,map__10448__$1,new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971));var data = cljs.core.get.call(null,map__10448__$1,new cljs.core.Keyword(null,"data","data",-232669377));var url = cljs.core.get.call(null,map__10448__$1,new cljs.core.Keyword(null,"url","url",276297046));var method = cljs.core.get.call(null,map__10448__$1,new cljs.core.Keyword(null,"method","method",55703592));var xhr = (new goog.net.XhrIo());goog.events.listen(xhr,goog.net.EventType.COMPLETE,((function (xhr,map__10448,map__10448__$1,on_complete,data,url,method){
return (function (e){return on_complete.call(null,cljs.core.js__GT_clj.call(null,xhr.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});})(xhr,map__10448,map__10448__$1,on_complete,data,url,method))
);
return xhr.send(url,rp.utils.meths.call(null,method),(cljs.core.truth_(data)?cljs.core.pr_str.call(null,data):null),{"accept": "application/json"});
});
rp.utils.poll = (function poll(cursor,key,url){return rp.utils.json_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),(function (p1__10449_SHARP_){return om.core.transact_BANG_.call(null,cursor,key,(function (_){return p1__10449_SHARP_;
}));
})], null));
});

//# sourceMappingURL=utils.js.map