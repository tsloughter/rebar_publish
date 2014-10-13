// Compiled by ClojureScript 0.0-2261
goog.provide('dashcon.counters');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('secretary.core');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
dashcon.counters.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counters","counters",33475982),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (n){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),n,new cljs.core.Keyword(null,"count","count",2139924085),(0)], null);
}),cljs.core.range.call(null,(10))))], null));
dashcon.counters.counter = (function counter(data,owner){if(typeof dashcon.counters.t9550 !== 'undefined')
{} else
{
/**
* @constructor
*/
dashcon.counters.t9550 = (function (owner,data,counter,meta9551){
this.owner = owner;
this.data = data;
this.counter = counter;
this.meta9551 = meta9551;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
dashcon.counters.t9550.cljs$lang$type = true;
dashcon.counters.t9550.cljs$lang$ctorStr = "dashcon.counters/t9550";
dashcon.counters.t9550.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"dashcon.counters/t9550");
});
dashcon.counters.t9550.prototype.om$core$IRender$ = true;
dashcon.counters.t9550.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.label(null,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(self__.data)),React.DOM.button({"onClick": ((function (___$1){
return (function (e){return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.inc);
});})(___$1))
},"+"),React.DOM.button({"onClick": ((function (___$1){
return (function (e){return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.dec);
});})(___$1))
},"-"));
});
dashcon.counters.t9550.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9552){var self__ = this;
var _9552__$1 = this;return self__.meta9551;
});
dashcon.counters.t9550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9552,meta9551__$1){var self__ = this;
var _9552__$1 = this;return (new dashcon.counters.t9550(self__.owner,self__.data,self__.counter,meta9551__$1));
});
dashcon.counters.__GT_t9550 = (function __GT_t9550(owner__$1,data__$1,counter__$1,meta9551){return (new dashcon.counters.t9550(owner__$1,data__$1,counter__$1,meta9551));
});
}
return (new dashcon.counters.t9550(owner,data,counter,null));
});
dashcon.counters.counter_view = (function counter_view(app,owner){if(typeof dashcon.counters.t9556 !== 'undefined')
{} else
{
/**
* @constructor
*/
dashcon.counters.t9556 = (function (owner,app,counter_view,meta9557){
this.owner = owner;
this.app = app;
this.counter_view = counter_view;
this.meta9557 = meta9557;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
dashcon.counters.t9556.cljs$lang$type = true;
dashcon.counters.t9556.cljs$lang$ctorStr = "dashcon.counters/t9556";
dashcon.counters.t9556.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"dashcon.counters/t9556");
});
dashcon.counters.t9556.prototype.om$core$IRender$ = true;
dashcon.counters.t9556.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,null,React.DOM.h1({"key": "head"},"A Counting Widget!"),om.core.build_all.call(null,dashcon.counters.counter,new cljs.core.Keyword(null,"counters","counters",33475982).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092)], null)));
});
dashcon.counters.t9556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9558){var self__ = this;
var _9558__$1 = this;return self__.meta9557;
});
dashcon.counters.t9556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9558,meta9557__$1){var self__ = this;
var _9558__$1 = this;return (new dashcon.counters.t9556(self__.owner,self__.app,self__.counter_view,meta9557__$1));
});
dashcon.counters.__GT_t9556 = (function __GT_t9556(owner__$1,app__$1,counter_view__$1,meta9557){return (new dashcon.counters.t9556(owner__$1,app__$1,counter_view__$1,meta9557));
});
}
return (new dashcon.counters.t9556(owner,app,counter_view,null));
});
dashcon.counters.render_partials = (function render_partials(partial,state){return om.core.build.call(null,partial,state);
});
dashcon.counters.app_view = (function app_view(cursor,owner){if(typeof dashcon.counters.t9562 !== 'undefined')
{} else
{
/**
* @constructor
*/
dashcon.counters.t9562 = (function (owner,cursor,app_view,meta9563){
this.owner = owner;
this.cursor = cursor;
this.app_view = app_view;
this.meta9563 = meta9563;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
dashcon.counters.t9562.cljs$lang$type = true;
dashcon.counters.t9562.cljs$lang$ctorStr = "dashcon.counters/t9562";
dashcon.counters.t9562.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"dashcon.counters/t9562");
});
dashcon.counters.t9562.prototype.om$core$IRender$ = true;
dashcon.counters.t9562.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return dashcon.counters.render_partials.call(null,dashcon.counters.counter_view,self__.cursor);
});
dashcon.counters.t9562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9564){var self__ = this;
var _9564__$1 = this;return self__.meta9563;
});
dashcon.counters.t9562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9564,meta9563__$1){var self__ = this;
var _9564__$1 = this;return (new dashcon.counters.t9562(self__.owner,self__.cursor,self__.app_view,meta9563__$1));
});
dashcon.counters.__GT_t9562 = (function __GT_t9562(owner__$1,cursor__$1,app_view__$1,meta9563){return (new dashcon.counters.t9562(owner__$1,cursor__$1,app_view__$1,meta9563));
});
}
return (new dashcon.counters.t9562(owner,cursor,app_view,null));
});
om.core.root.call(null,dashcon.counters.app_view,dashcon.counters.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app0")], null));

//# sourceMappingURL=counters.js.map