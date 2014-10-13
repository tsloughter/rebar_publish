// Compiled by ClojureScript 0.0-2261
goog.provide('rp.search');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('rp.utils');
goog.require('goog.events.EventType');
goog.require('om.dom');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.net.XhrIo');
goog.require('om.core');
goog.require('om.core');
goog.require('rp.utils');
goog.require('goog.events');
rp.search.handle_change = (function handle_change(e,owner,cursor){return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cursor),e.target.value);
});
rp.search.do_search = (function do_search(cursor,owner){var query = om.core.get_node.call(null,owner,"search").value;if(cljs.core.truth_(query))
{return rp.utils.poll.call(null,cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),("/query?query="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)));
} else
{return null;
}
});
rp.search.view = (function view(cursor,owner){if(typeof rp.search.t10589 !== 'undefined')
{} else
{
/**
* @constructor
*/
rp.search.t10589 = (function (owner,cursor,view,meta10590){
this.owner = owner;
this.cursor = cursor;
this.view = view;
this.meta10590 = meta10590;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
rp.search.t10589.cljs$lang$type = true;
rp.search.t10589.cljs$lang$ctorStr = "rp.search/t10589";
rp.search.t10589.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"rp.search/t10589");
});
rp.search.t10589.prototype.om$core$IRender$ = true;
rp.search.t10589.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"className": "row"},React.DOM.div({"className": "col-lg-12"},om.dom.input.call(null,{"value": new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.cursor), "ref": "search", "type": "text"}),React.DOM.button({"onChange": ((function (___$1){
return (function (p1__10585_SHARP_){return rp.search.handle_change.call(null,p1__10585_SHARP_,self__.owner,self__.cursor);
});})(___$1))
, "onClick": ((function (___$1){
return (function (){return rp.search.do_search.call(null,self__.cursor,self__.owner);
});})(___$1))
},"Search"))),cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (___$1){
return (function (v){return React.DOM.div({"className": "row"},React.DOM.div({"className": "col-lg-3"},React.DOM.div(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(v)))));
});})(___$1))
,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.cursor))));
});
rp.search.t10589.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10591){var self__ = this;
var _10591__$1 = this;return self__.meta10590;
});
rp.search.t10589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10591,meta10590__$1){var self__ = this;
var _10591__$1 = this;return (new rp.search.t10589(self__.owner,self__.cursor,self__.view,meta10590__$1));
});
rp.search.__GT_t10589 = (function __GT_t10589(owner__$1,cursor__$1,view__$1,meta10590){return (new rp.search.t10589(owner__$1,cursor__$1,view__$1,meta10590));
});
}
return (new rp.search.t10589(owner,cursor,view,null));
});

//# sourceMappingURL=search.js.map