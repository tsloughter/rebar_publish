// Compiled by ClojureScript 0.0-2261
goog.provide('rp.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('goog.Uri');
goog.require('secretary.core');
goog.require('goog.history.Html5History');
goog.require('om.dom');
goog.require('rp.home');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('rp.home');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('rp.search');
goog.require('goog.net.XhrIo');
goog.require('om.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('rp.search');
goog.require('goog.events');
rp.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),rp.home.view,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.EMPTY], null));
rp.core.history = (new goog.history.Html5History());
rp.core.history.setUseFragment(false);
rp.core.history.setPathPrefix("");
rp.core.history.setEnabled(true);
rp.core.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,((function (out){
return (function (e){return cljs.core.async.put_BANG_.call(null,out,e);
});})(out))
);
return out;
});
rp.core.define_routes = (function define_routes(cursor){var action__5790__auto__ = (function (params__5791__auto__){if(cljs.core.map_QMARK_.call(null,params__5791__auto__))
{var map__10663 = params__5791__auto__;var map__10663__$1 = ((cljs.core.seq_QMARK_.call(null,map__10663))?cljs.core.apply.call(null,cljs.core.hash_map,map__10663):map__10663);return om.core.update_BANG_.call(null,cursor,new cljs.core.Keyword(null,"view","view",1247994814),rp.search.view);
} else
{if(cljs.core.vector_QMARK_.call(null,params__5791__auto__))
{var vec__10664 = params__5791__auto__;return om.core.update_BANG_.call(null,cursor,new cljs.core.Keyword(null,"view","view",1247994814),rp.search.view);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/search",action__5790__auto__);
/**
* @param {...*} var_args
*/
rp.core.search_path = ((function (action__5790__auto__){
return (function() { 
var search_path__delegate = function (args__5789__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/search",args__5789__auto__);
};
var search_path = function (var_args){
var args__5789__auto__ = null;if (arguments.length > 0) {
  args__5789__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return search_path__delegate.call(this,args__5789__auto__);};
search_path.cljs$lang$maxFixedArity = 0;
search_path.cljs$lang$applyTo = (function (arglist__10665){
var args__5789__auto__ = cljs.core.seq(arglist__10665);
return search_path__delegate(args__5789__auto__);
});
search_path.cljs$core$IFn$_invoke$arity$variadic = search_path__delegate;
return search_path;
})()
;})(action__5790__auto__))
;
});
rp.core.app_view = (function app_view(cursor,owner){if(typeof rp.core.t10669 !== 'undefined')
{} else
{
/**
* @constructor
*/
rp.core.t10669 = (function (owner,cursor,app_view,meta10670){
this.owner = owner;
this.cursor = cursor;
this.app_view = app_view;
this.meta10670 = meta10670;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
rp.core.t10669.cljs$lang$type = true;
rp.core.t10669.cljs$lang$ctorStr = "rp.core/t10669";
rp.core.t10669.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"rp.core/t10669");
});
rp.core.t10669.prototype.om$core$IRender$ = true;
rp.core.t10669.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.core.build.call(null,cljs.core.get.call(null,self__.cursor,new cljs.core.Keyword(null,"view","view",1247994814)),self__.cursor);
});
rp.core.t10669.prototype.om$core$IInitState$ = true;
rp.core.t10669.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return rp.core.define_routes.call(null,self__.cursor);
});
rp.core.t10669.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10671){var self__ = this;
var _10671__$1 = this;return self__.meta10670;
});
rp.core.t10669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10671,meta10670__$1){var self__ = this;
var _10671__$1 = this;return (new rp.core.t10669(self__.owner,self__.cursor,self__.app_view,meta10670__$1));
});
rp.core.__GT_t10669 = (function __GT_t10669(owner__$1,cursor__$1,app_view__$1,meta10670){return (new rp.core.t10669(owner__$1,cursor__$1,app_view__$1,meta10670));
});
}
return (new rp.core.t10669(owner,cursor,app_view,null));
});
var navigation_10701 = rp.core.listen.call(null,rp.core.history,goog.history.EventType.NAVIGATE);var c__7006__auto___10702 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7006__auto___10702,navigation_10701){
return (function (){var f__7007__auto__ = (function (){var switch__6991__auto__ = ((function (c__7006__auto___10702,navigation_10701){
return (function (state_10685){var state_val_10686 = (state_10685[(1)]);if((state_val_10686 === (7)))
{var inst_10675 = (state_10685[(2)]);var inst_10676 = inst_10675.token;var inst_10677 = secretary.core.dispatch_BANG_.call(null,inst_10676);var state_10685__$1 = (function (){var statearr_10687 = state_10685;(statearr_10687[(7)] = inst_10677);
return statearr_10687;
})();var statearr_10688_10703 = state_10685__$1;(statearr_10688_10703[(2)] = null);
(statearr_10688_10703[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10686 === (6)))
{var inst_10681 = (state_10685[(2)]);var state_10685__$1 = state_10685;var statearr_10689_10704 = state_10685__$1;(statearr_10689_10704[(2)] = inst_10681);
(statearr_10689_10704[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10686 === (5)))
{var state_10685__$1 = state_10685;var statearr_10690_10705 = state_10685__$1;(statearr_10690_10705[(2)] = null);
(statearr_10690_10705[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10686 === (4)))
{var state_10685__$1 = state_10685;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10685__$1,(7),navigation_10701);
} else
{if((state_val_10686 === (3)))
{var inst_10683 = (state_10685[(2)]);var state_10685__$1 = state_10685;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10685__$1,inst_10683);
} else
{if((state_val_10686 === (2)))
{var state_10685__$1 = state_10685;if(true)
{var statearr_10691_10706 = state_10685__$1;(statearr_10691_10706[(1)] = (4));
} else
{var statearr_10692_10707 = state_10685__$1;(statearr_10692_10707[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10686 === (1)))
{var state_10685__$1 = state_10685;var statearr_10693_10708 = state_10685__$1;(statearr_10693_10708[(2)] = null);
(statearr_10693_10708[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__7006__auto___10702,navigation_10701))
;return ((function (switch__6991__auto__,c__7006__auto___10702,navigation_10701){
return (function() {
var state_machine__6992__auto__ = null;
var state_machine__6992__auto____0 = (function (){var statearr_10697 = [null,null,null,null,null,null,null,null];(statearr_10697[(0)] = state_machine__6992__auto__);
(statearr_10697[(1)] = (1));
return statearr_10697;
});
var state_machine__6992__auto____1 = (function (state_10685){while(true){
var ret_value__6993__auto__ = (function (){try{while(true){
var result__6994__auto__ = switch__6991__auto__.call(null,state_10685);if(cljs.core.keyword_identical_QMARK_.call(null,result__6994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6994__auto__;
}
break;
}
}catch (e10698){if((e10698 instanceof Object))
{var ex__6995__auto__ = e10698;var statearr_10699_10709 = state_10685;(statearr_10699_10709[(5)] = ex__6995__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10685);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10698;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10710 = state_10685;
state_10685 = G__10710;
continue;
}
} else
{return ret_value__6993__auto__;
}
break;
}
});
state_machine__6992__auto__ = function(state_10685){
switch(arguments.length){
case 0:
return state_machine__6992__auto____0.call(this);
case 1:
return state_machine__6992__auto____1.call(this,state_10685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6992__auto____0;
state_machine__6992__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6992__auto____1;
return state_machine__6992__auto__;
})()
;})(switch__6991__auto__,c__7006__auto___10702,navigation_10701))
})();var state__7008__auto__ = (function (){var statearr_10700 = f__7007__auto__.call(null);(statearr_10700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7006__auto___10702);
return statearr_10700;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7008__auto__);
});})(c__7006__auto___10702,navigation_10701))
);
goog.events.listen(window,goog.events.EventType.CLICK,(function (e){var path = goog.Uri.parse(e.target.href).getPath();var title = e.target.title;if(cljs.core.truth_(secretary.core.locate_route.call(null,path)))
{rp.core.history.setToken(path,title);
return e.preventDefault();
} else
{return null;
}
}));
om.core.root.call(null,rp.core.app_view,rp.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),goog.dom.getElement("content")], null));
secretary.core.dispatch_BANG_.call(null,window.location.pathname);

//# sourceMappingURL=core.js.map