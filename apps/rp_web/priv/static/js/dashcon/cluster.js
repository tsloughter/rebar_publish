// Compiled by ClojureScript 0.0-2261
goog.provide('dashcon.cluster');
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
dashcon.cluster.view = (function view(cursor,owner){if(typeof dashcon.cluster.t5744 !== 'undefined')
{} else
{
/**
* @constructor
*/
dashcon.cluster.t5744 = (function (owner,cursor,view,meta5745){
this.owner = owner;
this.cursor = cursor;
this.view = view;
this.meta5745 = meta5745;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
dashcon.cluster.t5744.cljs$lang$type = true;
dashcon.cluster.t5744.cljs$lang$ctorStr = "dashcon.cluster/t5744";
dashcon.cluster.t5744.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"dashcon.cluster/t5744");
});
dashcon.cluster.t5744.prototype.om$core$IRender$ = true;
dashcon.cluster.t5744.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var nodes_5747 = new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.cursor));om.core.update_BANG_.call(null,self__.cursor,new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Instances",new cljs.core.Keyword(null,"key","key",-1516042587),"instance",new cljs.core.Keyword(null,"list","list",765357683),nodes_5747], null));
return React.DOM.div({"className": "row"},React.DOM.div({"className": "col-lg-3"},React.DOM.div({"className": "panel panel-default"},React.DOM.a({"className": "panel-heading", "href": "/"},cljs.core.get_in.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"id","id",-1388402092)], null))))));
});
dashcon.cluster.t5744.prototype.om$core$IWillUnmount$ = true;
dashcon.cluster.t5744.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return clearInterval(thisinterval);
});
dashcon.cluster.t5744.prototype.om$core$IWillMount$ = true;
dashcon.cluster.t5744.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return thisinterval = setInterval(((function (this$__$1){
return (function (){return dashcon.utils.poll.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),("/cluster/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.cursor))))));
});})(this$__$1))
,(2000));
});
dashcon.cluster.t5744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5746){var self__ = this;
var _5746__$1 = this;return self__.meta5745;
});
dashcon.cluster.t5744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5746,meta5745__$1){var self__ = this;
var _5746__$1 = this;return (new dashcon.cluster.t5744(self__.owner,self__.cursor,self__.view,meta5745__$1));
});
dashcon.cluster.__GT_t5744 = (function __GT_t5744(owner__$1,cursor__$1,view__$1,meta5745){return (new dashcon.cluster.t5744(owner__$1,cursor__$1,view__$1,meta5745));
});
}
return (new dashcon.cluster.t5744(owner,cursor,view,null));
});

//# sourceMappingURL=cluster.js.map