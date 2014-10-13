// Compiled by ClojureScript 0.0-2261
goog.provide('dashcon.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('goog.Uri');
goog.require('secretary.core');
goog.require('goog.history.Html5History');
goog.require('dashcon.nav');
goog.require('om.dom');
goog.require('dashcon.utils');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('dashcon.home');
goog.require('om.dom');
goog.require('dashcon.cluster');
goog.require('cljs.core.async');
goog.require('dashcon.instance');
goog.require('goog.History');
goog.require('goog.events');
goog.require('dashcon.instance');
goog.require('goog.dom');
goog.require('dashcon.nav');
goog.require('goog.net.XhrIo');
goog.require('om.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('dashcon.home');
goog.require('dashcon.utils');
goog.require('dashcon.cluster');
goog.require('goog.events');
dashcon.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Clusters",new cljs.core.Keyword(null,"key","key",-1516042587),"cluster",new cljs.core.Keyword(null,"list","list",765357683),cljs.core.list("one")], null),new cljs.core.Keyword(null,"view","view",1247994814),dashcon.home.view,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"cluster0"], null)], null));
dashcon.core.history = (new goog.history.Html5History());
dashcon.core.history.setUseFragment(false);
dashcon.core.history.setPathPrefix("");
dashcon.core.history.setEnabled(true);
dashcon.core.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,((function (out){
return (function (e){return cljs.core.async.put_BANG_.call(null,out,e);
});})(out))
);
return out;
});
dashcon.core.define_routes = (function define_routes(cursor){var action__5802__auto___9495 = (function (params__5803__auto__){if(cljs.core.map_QMARK_.call(null,params__5803__auto__))
{var map__9487 = params__5803__auto__;var map__9487__$1 = ((cljs.core.seq_QMARK_.call(null,map__9487))?cljs.core.apply.call(null,cljs.core.hash_map,map__9487):map__9487);var id = cljs.core.get.call(null,map__9487__$1,new cljs.core.Keyword(null,"id","id",-1388402092));om.core.update_BANG_.call(null,cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"id","id",-1388402092)], null),id);
return om.core.update_BANG_.call(null,cursor,new cljs.core.Keyword(null,"view","view",1247994814),dashcon.instance.view);
} else
{if(cljs.core.vector_QMARK_.call(null,params__5803__auto__))
{var vec__9488 = params__5803__auto__;var id = cljs.core.nth.call(null,vec__9488,(0),null);om.core.update_BANG_.call(null,cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"id","id",-1388402092)], null),id);
return om.core.update_BANG_.call(null,cursor,new cljs.core.Keyword(null,"view","view",1247994814),dashcon.instance.view);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/instance/:id",action__5802__auto___9495);
/**
* @param {...*} var_args
*/
dashcon.core.instance_path = ((function (action__5802__auto___9495){
return (function() { 
var instance_path__delegate = function (args__5801__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/instance/:id",args__5801__auto__);
};
var instance_path = function (var_args){
var args__5801__auto__ = null;if (arguments.length > 0) {
  args__5801__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return instance_path__delegate.call(this,args__5801__auto__);};
instance_path.cljs$lang$maxFixedArity = 0;
instance_path.cljs$lang$applyTo = (function (arglist__9496){
var args__5801__auto__ = cljs.core.seq(arglist__9496);
return instance_path__delegate(args__5801__auto__);
});
instance_path.cljs$core$IFn$_invoke$arity$variadic = instance_path__delegate;
return instance_path;
})()
;})(action__5802__auto___9495))
;
var action__5802__auto___9497 = (function (params__5803__auto__){if(cljs.core.map_QMARK_.call(null,params__5803__auto__))
{var map__9489 = params__5803__auto__;var map__9489__$1 = ((cljs.core.seq_QMARK_.call(null,map__9489))?cljs.core.apply.call(null,cljs.core.hash_map,map__9489):map__9489);var id = cljs.core.get.call(null,map__9489__$1,new cljs.core.Keyword(null,"id","id",-1388402092));om.core.update_BANG_.call(null,cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"id","id",-1388402092)], null),id);
return om.core.update_BANG_.call(null,cursor,new cljs.core.Keyword(null,"view","view",1247994814),dashcon.cluster.view);
} else
{if(cljs.core.vector_QMARK_.call(null,params__5803__auto__))
{var vec__9490 = params__5803__auto__;var id = cljs.core.nth.call(null,vec__9490,(0),null);om.core.update_BANG_.call(null,cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"id","id",-1388402092)], null),id);
return om.core.update_BANG_.call(null,cursor,new cljs.core.Keyword(null,"view","view",1247994814),dashcon.cluster.view);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/cluster/:id",action__5802__auto___9497);
/**
* @param {...*} var_args
*/
dashcon.core.cluster_path = ((function (action__5802__auto___9497){
return (function() { 
var cluster_path__delegate = function (args__5801__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/cluster/:id",args__5801__auto__);
};
var cluster_path = function (var_args){
var args__5801__auto__ = null;if (arguments.length > 0) {
  args__5801__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cluster_path__delegate.call(this,args__5801__auto__);};
cluster_path.cljs$lang$maxFixedArity = 0;
cluster_path.cljs$lang$applyTo = (function (arglist__9498){
var args__5801__auto__ = cljs.core.seq(arglist__9498);
return cluster_path__delegate(args__5801__auto__);
});
cluster_path.cljs$core$IFn$_invoke$arity$variadic = cluster_path__delegate;
return cluster_path;
})()
;})(action__5802__auto___9497))
;
var action__5802__auto___9499 = (function (params__5803__auto__){if(cljs.core.map_QMARK_.call(null,params__5803__auto__))
{var map__9491 = params__5803__auto__;var map__9491__$1 = ((cljs.core.seq_QMARK_.call(null,map__9491))?cljs.core.apply.call(null,cljs.core.hash_map,map__9491):map__9491);return om.core.update_BANG_.call(null,cursor,new cljs.core.Keyword(null,"view","view",1247994814),dashcon.home.view);
} else
{if(cljs.core.vector_QMARK_.call(null,params__5803__auto__))
{var vec__9492 = params__5803__auto__;return om.core.update_BANG_.call(null,cursor,new cljs.core.Keyword(null,"view","view",1247994814),dashcon.home.view);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"",action__5802__auto___9499);
/**
* @param {...*} var_args
*/
dashcon.core.home_path = ((function (action__5802__auto___9499){
return (function() { 
var home_path__delegate = function (args__5801__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"",args__5801__auto__);
};
var home_path = function (var_args){
var args__5801__auto__ = null;if (arguments.length > 0) {
  args__5801__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return home_path__delegate.call(this,args__5801__auto__);};
home_path.cljs$lang$maxFixedArity = 0;
home_path.cljs$lang$applyTo = (function (arglist__9500){
var args__5801__auto__ = cljs.core.seq(arglist__9500);
return home_path__delegate(args__5801__auto__);
});
home_path.cljs$core$IFn$_invoke$arity$variadic = home_path__delegate;
return home_path;
})()
;})(action__5802__auto___9499))
;
var action__5802__auto__ = (function (params__5803__auto__){if(cljs.core.map_QMARK_.call(null,params__5803__auto__))
{var map__9493 = params__5803__auto__;var map__9493__$1 = ((cljs.core.seq_QMARK_.call(null,map__9493))?cljs.core.apply.call(null,cljs.core.hash_map,map__9493):map__9493);return om.core.update_BANG_.call(null,cursor,new cljs.core.Keyword(null,"view","view",1247994814),dashcon.home.view);
} else
{if(cljs.core.vector_QMARK_.call(null,params__5803__auto__))
{var vec__9494 = params__5803__auto__;return om.core.update_BANG_.call(null,cursor,new cljs.core.Keyword(null,"view","view",1247994814),dashcon.home.view);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__5802__auto__);
/**
* @param {...*} var_args
*/
dashcon.core.home_path = ((function (action__5802__auto__){
return (function() { 
var home_path__delegate = function (args__5801__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__5801__auto__);
};
var home_path = function (var_args){
var args__5801__auto__ = null;if (arguments.length > 0) {
  args__5801__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return home_path__delegate.call(this,args__5801__auto__);};
home_path.cljs$lang$maxFixedArity = 0;
home_path.cljs$lang$applyTo = (function (arglist__9501){
var args__5801__auto__ = cljs.core.seq(arglist__9501);
return home_path__delegate(args__5801__auto__);
});
home_path.cljs$core$IFn$_invoke$arity$variadic = home_path__delegate;
return home_path;
})()
;})(action__5802__auto__))
;
});
dashcon.core.app_view = (function app_view(cursor,owner){if(typeof dashcon.core.t9505 !== 'undefined')
{} else
{
/**
* @constructor
*/
dashcon.core.t9505 = (function (owner,cursor,app_view,meta9506){
this.owner = owner;
this.cursor = cursor;
this.app_view = app_view;
this.meta9506 = meta9506;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
dashcon.core.t9505.cljs$lang$type = true;
dashcon.core.t9505.cljs$lang$ctorStr = "dashcon.core/t9505";
dashcon.core.t9505.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"dashcon.core/t9505");
});
dashcon.core.t9505.prototype.om$core$IRender$ = true;
dashcon.core.t9505.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.core.build.call(null,cljs.core.get.call(null,self__.cursor,new cljs.core.Keyword(null,"view","view",1247994814)),self__.cursor);
});
dashcon.core.t9505.prototype.om$core$IInitState$ = true;
dashcon.core.t9505.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return dashcon.core.define_routes.call(null,self__.cursor);
});
dashcon.core.t9505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9507){var self__ = this;
var _9507__$1 = this;return self__.meta9506;
});
dashcon.core.t9505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9507,meta9506__$1){var self__ = this;
var _9507__$1 = this;return (new dashcon.core.t9505(self__.owner,self__.cursor,self__.app_view,meta9506__$1));
});
dashcon.core.__GT_t9505 = (function __GT_t9505(owner__$1,cursor__$1,app_view__$1,meta9506){return (new dashcon.core.t9505(owner__$1,cursor__$1,app_view__$1,meta9506));
});
}
return (new dashcon.core.t9505(owner,cursor,app_view,null));
});
var navigation_9537 = dashcon.core.listen.call(null,dashcon.core.history,goog.history.EventType.NAVIGATE);var c__7018__auto___9538 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7018__auto___9538,navigation_9537){
return (function (){var f__7019__auto__ = (function (){var switch__7003__auto__ = ((function (c__7018__auto___9538,navigation_9537){
return (function (state_9521){var state_val_9522 = (state_9521[(1)]);if((state_val_9522 === (7)))
{var inst_9511 = (state_9521[(2)]);var inst_9512 = inst_9511.token;var inst_9513 = secretary.core.dispatch_BANG_.call(null,inst_9512);var state_9521__$1 = (function (){var statearr_9523 = state_9521;(statearr_9523[(7)] = inst_9513);
return statearr_9523;
})();var statearr_9524_9539 = state_9521__$1;(statearr_9524_9539[(2)] = null);
(statearr_9524_9539[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9522 === (6)))
{var inst_9517 = (state_9521[(2)]);var state_9521__$1 = state_9521;var statearr_9525_9540 = state_9521__$1;(statearr_9525_9540[(2)] = inst_9517);
(statearr_9525_9540[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9522 === (5)))
{var state_9521__$1 = state_9521;var statearr_9526_9541 = state_9521__$1;(statearr_9526_9541[(2)] = null);
(statearr_9526_9541[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9522 === (4)))
{var state_9521__$1 = state_9521;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9521__$1,(7),navigation_9537);
} else
{if((state_val_9522 === (3)))
{var inst_9519 = (state_9521[(2)]);var state_9521__$1 = state_9521;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9521__$1,inst_9519);
} else
{if((state_val_9522 === (2)))
{var state_9521__$1 = state_9521;if(true)
{var statearr_9527_9542 = state_9521__$1;(statearr_9527_9542[(1)] = (4));
} else
{var statearr_9528_9543 = state_9521__$1;(statearr_9528_9543[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9522 === (1)))
{var state_9521__$1 = state_9521;var statearr_9529_9544 = state_9521__$1;(statearr_9529_9544[(2)] = null);
(statearr_9529_9544[(1)] = (2));
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
});})(c__7018__auto___9538,navigation_9537))
;return ((function (switch__7003__auto__,c__7018__auto___9538,navigation_9537){
return (function() {
var state_machine__7004__auto__ = null;
var state_machine__7004__auto____0 = (function (){var statearr_9533 = [null,null,null,null,null,null,null,null];(statearr_9533[(0)] = state_machine__7004__auto__);
(statearr_9533[(1)] = (1));
return statearr_9533;
});
var state_machine__7004__auto____1 = (function (state_9521){while(true){
var ret_value__7005__auto__ = (function (){try{while(true){
var result__7006__auto__ = switch__7003__auto__.call(null,state_9521);if(cljs.core.keyword_identical_QMARK_.call(null,result__7006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7006__auto__;
}
break;
}
}catch (e9534){if((e9534 instanceof Object))
{var ex__7007__auto__ = e9534;var statearr_9535_9545 = state_9521;(statearr_9535_9545[(5)] = ex__7007__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9521);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9534;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9546 = state_9521;
state_9521 = G__9546;
continue;
}
} else
{return ret_value__7005__auto__;
}
break;
}
});
state_machine__7004__auto__ = function(state_9521){
switch(arguments.length){
case 0:
return state_machine__7004__auto____0.call(this);
case 1:
return state_machine__7004__auto____1.call(this,state_9521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7004__auto____0;
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7004__auto____1;
return state_machine__7004__auto__;
})()
;})(switch__7003__auto__,c__7018__auto___9538,navigation_9537))
})();var state__7020__auto__ = (function (){var statearr_9536 = f__7019__auto__.call(null);(statearr_9536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7018__auto___9538);
return statearr_9536;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7020__auto__);
});})(c__7018__auto___9538,navigation_9537))
);
goog.events.listen(window,goog.events.EventType.CLICK,(function (e){var path = goog.Uri.parse(e.target.href).getPath();var title = e.target.title;if(cljs.core.truth_(secretary.core.locate_route.call(null,path)))
{dashcon.core.history.setToken(path,title);
return e.preventDefault();
} else
{return null;
}
}));
om.core.root.call(null,dashcon.core.app_view,dashcon.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),goog.dom.getElement("app")], null));
om.core.root.call(null,dashcon.nav.view,dashcon.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),goog.dom.getElement("nav")], null));
secretary.core.dispatch_BANG_.call(null,window.location.pathname);

//# sourceMappingURL=core.js.map