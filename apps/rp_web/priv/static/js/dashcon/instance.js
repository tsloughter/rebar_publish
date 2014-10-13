// Compiled by ClojureScript 0.0-2261
goog.provide('dashcon.instance');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('dashcon.nav');
goog.require('om.dom');
goog.require('dashcon.utils');
goog.require('om.dom');
goog.require('goog.dom');
goog.require('dashcon.nav');
goog.require('om.core');
goog.require('om.core');
goog.require('dashcon.utils');
dashcon.instance.system_view = (function system_view(cursor,owner){if(typeof dashcon.instance.t5753 !== 'undefined')
{} else
{
/**
* @constructor
*/
dashcon.instance.t5753 = (function (owner,cursor,system_view,meta5754){
this.owner = owner;
this.cursor = cursor;
this.system_view = system_view;
this.meta5754 = meta5754;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
dashcon.instance.t5753.cljs$lang$type = true;
dashcon.instance.t5753.cljs$lang$ctorStr = "dashcon.instance/t5753";
dashcon.instance.t5753.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"dashcon.instance/t5753");
});
dashcon.instance.t5753.prototype.om$core$IRender$ = true;
dashcon.instance.t5753.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "col-lg-3"},React.DOM.div({"className": "panel panel-default"},React.DOM.div({"className": "panel-heading"},"System and Architecture"),React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-striped table-bordered table-hover"},cljs.core.apply.call(null,om.dom.tbody,null,cljs.core.map.call(null,((function (___$1){
return (function (p__5756){var vec__5757 = p__5756;var k = cljs.core.nth.call(null,vec__5757,(0),null);var v = cljs.core.nth.call(null,vec__5757,(1),null);return React.DOM.tr(null,React.DOM.td(null,cljs.core.name.call(null,k)),React.DOM.td(null,v));
});})(___$1))
,self__.cursor)))))));
});
dashcon.instance.t5753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5755){var self__ = this;
var _5755__$1 = this;return self__.meta5754;
});
dashcon.instance.t5753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5755,meta5754__$1){var self__ = this;
var _5755__$1 = this;return (new dashcon.instance.t5753(self__.owner,self__.cursor,self__.system_view,meta5754__$1));
});
dashcon.instance.__GT_t5753 = (function __GT_t5753(owner__$1,cursor__$1,system_view__$1,meta5754){return (new dashcon.instance.t5753(owner__$1,cursor__$1,system_view__$1,meta5754));
});
}
return (new dashcon.instance.t5753(owner,cursor,system_view,null));
});
dashcon.instance.memory_view = (function memory_view(cursor,owner){if(typeof dashcon.instance.t5763 !== 'undefined')
{} else
{
/**
* @constructor
*/
dashcon.instance.t5763 = (function (owner,cursor,memory_view,meta5764){
this.owner = owner;
this.cursor = cursor;
this.memory_view = memory_view;
this.meta5764 = meta5764;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
dashcon.instance.t5763.cljs$lang$type = true;
dashcon.instance.t5763.cljs$lang$ctorStr = "dashcon.instance/t5763";
dashcon.instance.t5763.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"dashcon.instance/t5763");
});
dashcon.instance.t5763.prototype.om$core$IRender$ = true;
dashcon.instance.t5763.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "col-lg-3"},React.DOM.div({"className": "panel panel-default"},React.DOM.div({"className": "panel-heading"},"Memory Usage"),React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-striped table-bordered table-hover"},cljs.core.apply.call(null,om.dom.tbody,null,cljs.core.map.call(null,((function (___$1){
return (function (p__5766){var vec__5767 = p__5766;var k = cljs.core.nth.call(null,vec__5767,(0),null);var v = cljs.core.nth.call(null,vec__5767,(1),null);return React.DOM.tr(null,React.DOM.td(null,cljs.core.name.call(null,k)),React.DOM.td(null,v));
});})(___$1))
,self__.cursor)))))));
});
dashcon.instance.t5763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5765){var self__ = this;
var _5765__$1 = this;return self__.meta5764;
});
dashcon.instance.t5763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5765,meta5764__$1){var self__ = this;
var _5765__$1 = this;return (new dashcon.instance.t5763(self__.owner,self__.cursor,self__.memory_view,meta5764__$1));
});
dashcon.instance.__GT_t5763 = (function __GT_t5763(owner__$1,cursor__$1,memory_view__$1,meta5764){return (new dashcon.instance.t5763(owner__$1,cursor__$1,memory_view__$1,meta5764));
});
}
return (new dashcon.instance.t5763(owner,cursor,memory_view,null));
});
dashcon.instance.statistics_view = (function statistics_view(cursor,owner){if(typeof dashcon.instance.t5771 !== 'undefined')
{} else
{
/**
* @constructor
*/
dashcon.instance.t5771 = (function (owner,cursor,statistics_view,meta5772){
this.owner = owner;
this.cursor = cursor;
this.statistics_view = statistics_view;
this.meta5772 = meta5772;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
dashcon.instance.t5771.cljs$lang$type = true;
dashcon.instance.t5771.cljs$lang$ctorStr = "dashcon.instance/t5771";
dashcon.instance.t5771.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"dashcon.instance/t5771");
});
dashcon.instance.t5771.prototype.om$core$IRender$ = true;
dashcon.instance.t5771.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "col-lg-3"},React.DOM.div({"className": "panel panel-default"},React.DOM.div({"className": "panel-heading"},"Statistics"),React.DOM.div({"className": "panel-body"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table table-striped table-bordered table-hover"},React.DOM.tbody(null,React.DOM.tr(null,React.DOM.td(null,"Uptime"),React.DOM.td(null,new cljs.core.Keyword(null,"uptime","uptime",1173191273).cljs$core$IFn$_invoke$arity$1(self__.cursor)))))))));
});
dashcon.instance.t5771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5773){var self__ = this;
var _5773__$1 = this;return self__.meta5772;
});
dashcon.instance.t5771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5773,meta5772__$1){var self__ = this;
var _5773__$1 = this;return (new dashcon.instance.t5771(self__.owner,self__.cursor,self__.statistics_view,meta5772__$1));
});
dashcon.instance.__GT_t5771 = (function __GT_t5771(owner__$1,cursor__$1,statistics_view__$1,meta5772){return (new dashcon.instance.t5771(owner__$1,cursor__$1,statistics_view__$1,meta5772));
});
}
return (new dashcon.instance.t5771(owner,cursor,statistics_view,null));
});
dashcon.instance.view = (function view(cursor,owner){if(typeof dashcon.instance.t5777 !== 'undefined')
{} else
{
/**
* @constructor
*/
dashcon.instance.t5777 = (function (owner,cursor,view,meta5778){
this.owner = owner;
this.cursor = cursor;
this.view = view;
this.meta5778 = meta5778;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
dashcon.instance.t5777.cljs$lang$type = true;
dashcon.instance.t5777.cljs$lang$ctorStr = "dashcon.instance/t5777";
dashcon.instance.t5777.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"dashcon.instance/t5777");
});
dashcon.instance.t5777.prototype.om$core$IRender$ = true;
dashcon.instance.t5777.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;om.core.update_BANG_.call(null,self__.cursor,new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Stats",new cljs.core.Keyword(null,"key","key",-1516042587),"stats",new cljs.core.Keyword(null,"list","list",765357683),cljs.core.list("Memory")], null));
return React.DOM.div({"className": "row"},om.core.build.call(null,dashcon.instance.system_view,cljs.core.get_in.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"system","system",-29381724)], null))),om.core.build.call(null,dashcon.instance.memory_view,cljs.core.get_in.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"memory","memory",-1449401430)], null))),om.core.build.call(null,dashcon.instance.statistics_view,cljs.core.get_in.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"statistics","statistics",-1140631984)], null))));
});
dashcon.instance.t5777.prototype.om$core$IWillUnmount$ = true;
dashcon.instance.t5777.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return clearInterval(thisinterval);
});
dashcon.instance.t5777.prototype.om$core$IWillMount$ = true;
dashcon.instance.t5777.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return thisinterval = setInterval(((function (this$__$1){
return (function (){return dashcon.utils.poll.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"stats","stats",-85643011)], null),("/instance/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.cursor))))));
});})(this$__$1))
,(2000));
});
dashcon.instance.t5777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5779){var self__ = this;
var _5779__$1 = this;return self__.meta5778;
});
dashcon.instance.t5777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5779,meta5778__$1){var self__ = this;
var _5779__$1 = this;return (new dashcon.instance.t5777(self__.owner,self__.cursor,self__.view,meta5778__$1));
});
dashcon.instance.__GT_t5777 = (function __GT_t5777(owner__$1,cursor__$1,view__$1,meta5778){return (new dashcon.instance.t5777(owner__$1,cursor__$1,view__$1,meta5778));
});
}
return (new dashcon.instance.t5777(owner,cursor,view,null));
});

//# sourceMappingURL=instance.js.map