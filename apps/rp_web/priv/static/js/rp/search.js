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
rp.search.view = (function view(cursor,owner){if(typeof rp.search.t9476 !== 'undefined')
{} else
{
/**
* @constructor
*/
rp.search.t9476 = (function (owner,cursor,view,meta9477){
this.owner = owner;
this.cursor = cursor;
this.view = view;
this.meta9477 = meta9477;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
rp.search.t9476.cljs$lang$type = true;
rp.search.t9476.cljs$lang$ctorStr = "rp.search/t9476";
rp.search.t9476.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"rp.search/t9476");
});
rp.search.t9476.prototype.om$core$IRender$ = true;
rp.search.t9476.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"className": "row"},React.DOM.div({"className": "col-lg-8 col-lg-offset-2"},React.DOM.div({"className": "list-group"},React.DOM.a({"className": "list-group-item"},React.DOM.span({"className": "badge"},"http"),React.DOM.span({"className": "badge"},"server"),React.DOM.h4({"className": "list-group-item-heading"},"Cowboy"),React.DOM.p({"className": "list-group-item-text"},"Small, fast, modular HTTP server written in Erlang."))))));
});
rp.search.t9476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9478){var self__ = this;
var _9478__$1 = this;return self__.meta9477;
});
rp.search.t9476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9478,meta9477__$1){var self__ = this;
var _9478__$1 = this;return (new rp.search.t9476(self__.owner,self__.cursor,self__.view,meta9477__$1));
});
rp.search.__GT_t9476 = (function __GT_t9476(owner__$1,cursor__$1,view__$1,meta9477){return (new rp.search.t9476(owner__$1,cursor__$1,view__$1,meta9477));
});
}
return (new rp.search.t9476(owner,cursor,view,null));
});

//# sourceMappingURL=search.js.map