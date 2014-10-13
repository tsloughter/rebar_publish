// Compiled by ClojureScript 0.0-2261
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10974 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10974 = (function (f,fn_handler,meta10975){
this.f = f;
this.fn_handler = fn_handler;
this.meta10975 = meta10975;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10974.cljs$lang$type = true;
cljs.core.async.t10974.cljs$lang$ctorStr = "cljs.core.async/t10974";
cljs.core.async.t10974.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t10974");
});
cljs.core.async.t10974.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10974.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10974.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10976){var self__ = this;
var _10976__$1 = this;return self__.meta10975;
});
cljs.core.async.t10974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10976,meta10975__$1){var self__ = this;
var _10976__$1 = this;return (new cljs.core.async.t10974(self__.f,self__.fn_handler,meta10975__$1));
});
cljs.core.async.__GT_t10974 = (function __GT_t10974(f__$1,fn_handler__$1,meta10975){return (new cljs.core.async.t10974(f__$1,fn_handler__$1,meta10975));
});
}
return (new cljs.core.async.t10974(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10978 = buff;if(G__10978)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__10978.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10978.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10978);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10978);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10979 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10979);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10979,ret){
return (function (){return fn1.call(null,val_10979);
});})(val_10979,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3531__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___10980 = n;var x_10981 = (0);while(true){
if((x_10981 < n__4399__auto___10980))
{(a[x_10981] = (0));
{
var G__10982 = (x_10981 + (1));
x_10981 = G__10982;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10983 = (i + (1));
i = G__10983;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10987 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10987 = (function (flag,alt_flag,meta10988){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10988 = meta10988;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10987.cljs$lang$type = true;
cljs.core.async.t10987.cljs$lang$ctorStr = "cljs.core.async/t10987";
cljs.core.async.t10987.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t10987");
});})(flag))
;
cljs.core.async.t10987.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10987.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10987.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10987.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10989){var self__ = this;
var _10989__$1 = this;return self__.meta10988;
});})(flag))
;
cljs.core.async.t10987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10989,meta10988__$1){var self__ = this;
var _10989__$1 = this;return (new cljs.core.async.t10987(self__.flag,self__.alt_flag,meta10988__$1));
});})(flag))
;
cljs.core.async.__GT_t10987 = ((function (flag){
return (function __GT_t10987(flag__$1,alt_flag__$1,meta10988){return (new cljs.core.async.t10987(flag__$1,alt_flag__$1,meta10988));
});})(flag))
;
}
return (new cljs.core.async.t10987(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10993 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10993 = (function (cb,flag,alt_handler,meta10994){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10994 = meta10994;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10993.cljs$lang$type = true;
cljs.core.async.t10993.cljs$lang$ctorStr = "cljs.core.async/t10993";
cljs.core.async.t10993.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t10993");
});
cljs.core.async.t10993.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10993.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10993.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10995){var self__ = this;
var _10995__$1 = this;return self__.meta10994;
});
cljs.core.async.t10993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10995,meta10994__$1){var self__ = this;
var _10995__$1 = this;return (new cljs.core.async.t10993(self__.cb,self__.flag,self__.alt_handler,meta10994__$1));
});
cljs.core.async.__GT_t10993 = (function __GT_t10993(cb__$1,flag__$1,alt_handler__$1,meta10994){return (new cljs.core.async.t10993(cb__$1,flag__$1,alt_handler__$1,meta10994));
});
}
return (new cljs.core.async.t10993(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10996_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10996_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3543__auto__ = wport;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10997 = (i + (1));
i = G__10997;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3543__auto__ = ret;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3531__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3531__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10998){var map__11000 = p__10998;var map__11000__$1 = ((cljs.core.seq_QMARK_.call(null,map__11000))?cljs.core.apply.call(null,cljs.core.hash_map,map__11000):map__11000);var opts = map__11000__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10998 = null;if (arguments.length > 1) {
  p__10998 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10998);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11001){
var ports = cljs.core.first(arglist__11001);
var p__10998 = cljs.core.rest(arglist__11001);
return alts_BANG___delegate(ports,p__10998);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11009 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11009 = (function (ch,f,map_LT_,meta11010){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11010 = meta11010;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11009.cljs$lang$type = true;
cljs.core.async.t11009.cljs$lang$ctorStr = "cljs.core.async/t11009";
cljs.core.async.t11009.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t11009");
});
cljs.core.async.t11009.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11009.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11009.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11009.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11012 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11012 = (function (fn1,_,meta11010,ch,f,map_LT_,meta11013){
this.fn1 = fn1;
this._ = _;
this.meta11010 = meta11010;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11013 = meta11013;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11012.cljs$lang$type = true;
cljs.core.async.t11012.cljs$lang$ctorStr = "cljs.core.async/t11012";
cljs.core.async.t11012.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t11012");
});})(___$1))
;
cljs.core.async.t11012.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11012.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11012.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11012.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__11002_SHARP_){return f1.call(null,(((p1__11002_SHARP_ == null))?null:self__.f.call(null,p1__11002_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t11012.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11014){var self__ = this;
var _11014__$1 = this;return self__.meta11013;
});})(___$1))
;
cljs.core.async.t11012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11014,meta11013__$1){var self__ = this;
var _11014__$1 = this;return (new cljs.core.async.t11012(self__.fn1,self__._,self__.meta11010,self__.ch,self__.f,self__.map_LT_,meta11013__$1));
});})(___$1))
;
cljs.core.async.__GT_t11012 = ((function (___$1){
return (function __GT_t11012(fn1__$1,___$2,meta11010__$1,ch__$2,f__$2,map_LT___$2,meta11013){return (new cljs.core.async.t11012(fn1__$1,___$2,meta11010__$1,ch__$2,f__$2,map_LT___$2,meta11013));
});})(___$1))
;
}
return (new cljs.core.async.t11012(fn1,___$1,self__.meta11010,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11009.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11009.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11011){var self__ = this;
var _11011__$1 = this;return self__.meta11010;
});
cljs.core.async.t11009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11011,meta11010__$1){var self__ = this;
var _11011__$1 = this;return (new cljs.core.async.t11009(self__.ch,self__.f,self__.map_LT_,meta11010__$1));
});
cljs.core.async.__GT_t11009 = (function __GT_t11009(ch__$1,f__$1,map_LT___$1,meta11010){return (new cljs.core.async.t11009(ch__$1,f__$1,map_LT___$1,meta11010));
});
}
return (new cljs.core.async.t11009(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11018 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11018 = (function (ch,f,map_GT_,meta11019){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11019 = meta11019;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11018.cljs$lang$type = true;
cljs.core.async.t11018.cljs$lang$ctorStr = "cljs.core.async/t11018";
cljs.core.async.t11018.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t11018");
});
cljs.core.async.t11018.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11018.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11018.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11018.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11018.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11018.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11020){var self__ = this;
var _11020__$1 = this;return self__.meta11019;
});
cljs.core.async.t11018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11020,meta11019__$1){var self__ = this;
var _11020__$1 = this;return (new cljs.core.async.t11018(self__.ch,self__.f,self__.map_GT_,meta11019__$1));
});
cljs.core.async.__GT_t11018 = (function __GT_t11018(ch__$1,f__$1,map_GT___$1,meta11019){return (new cljs.core.async.t11018(ch__$1,f__$1,map_GT___$1,meta11019));
});
}
return (new cljs.core.async.t11018(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11024 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11024 = (function (ch,p,filter_GT_,meta11025){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11025 = meta11025;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11024.cljs$lang$type = true;
cljs.core.async.t11024.cljs$lang$ctorStr = "cljs.core.async/t11024";
cljs.core.async.t11024.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t11024");
});
cljs.core.async.t11024.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11024.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11024.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11024.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11024.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11024.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11026){var self__ = this;
var _11026__$1 = this;return self__.meta11025;
});
cljs.core.async.t11024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11026,meta11025__$1){var self__ = this;
var _11026__$1 = this;return (new cljs.core.async.t11024(self__.ch,self__.p,self__.filter_GT_,meta11025__$1));
});
cljs.core.async.__GT_t11024 = (function __GT_t11024(ch__$1,p__$1,filter_GT___$1,meta11025){return (new cljs.core.async.t11024(ch__$1,p__$1,filter_GT___$1,meta11025));
});
}
return (new cljs.core.async.t11024(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7018__auto___11109 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7018__auto___11109,out){
return (function (){var f__7019__auto__ = (function (){var switch__7003__auto__ = ((function (c__7018__auto___11109,out){
return (function (state_11088){var state_val_11089 = (state_11088[(1)]);if((state_val_11089 === (7)))
{var inst_11084 = (state_11088[(2)]);var state_11088__$1 = state_11088;var statearr_11090_11110 = state_11088__$1;(statearr_11090_11110[(2)] = inst_11084);
(statearr_11090_11110[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11089 === (1)))
{var state_11088__$1 = state_11088;var statearr_11091_11111 = state_11088__$1;(statearr_11091_11111[(2)] = null);
(statearr_11091_11111[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11089 === (4)))
{var inst_11070 = (state_11088[(7)]);var inst_11070__$1 = (state_11088[(2)]);var inst_11071 = (inst_11070__$1 == null);var state_11088__$1 = (function (){var statearr_11092 = state_11088;(statearr_11092[(7)] = inst_11070__$1);
return statearr_11092;
})();if(cljs.core.truth_(inst_11071))
{var statearr_11093_11112 = state_11088__$1;(statearr_11093_11112[(1)] = (5));
} else
{var statearr_11094_11113 = state_11088__$1;(statearr_11094_11113[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11089 === (6)))
{var inst_11070 = (state_11088[(7)]);var inst_11075 = p.call(null,inst_11070);var state_11088__$1 = state_11088;if(cljs.core.truth_(inst_11075))
{var statearr_11095_11114 = state_11088__$1;(statearr_11095_11114[(1)] = (8));
} else
{var statearr_11096_11115 = state_11088__$1;(statearr_11096_11115[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11089 === (3)))
{var inst_11086 = (state_11088[(2)]);var state_11088__$1 = state_11088;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11088__$1,inst_11086);
} else
{if((state_val_11089 === (2)))
{var state_11088__$1 = state_11088;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11088__$1,(4),ch);
} else
{if((state_val_11089 === (11)))
{var inst_11078 = (state_11088[(2)]);var state_11088__$1 = state_11088;var statearr_11097_11116 = state_11088__$1;(statearr_11097_11116[(2)] = inst_11078);
(statearr_11097_11116[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11089 === (9)))
{var state_11088__$1 = state_11088;var statearr_11098_11117 = state_11088__$1;(statearr_11098_11117[(2)] = null);
(statearr_11098_11117[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11089 === (5)))
{var inst_11073 = cljs.core.async.close_BANG_.call(null,out);var state_11088__$1 = state_11088;var statearr_11099_11118 = state_11088__$1;(statearr_11099_11118[(2)] = inst_11073);
(statearr_11099_11118[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11089 === (10)))
{var inst_11081 = (state_11088[(2)]);var state_11088__$1 = (function (){var statearr_11100 = state_11088;(statearr_11100[(8)] = inst_11081);
return statearr_11100;
})();var statearr_11101_11119 = state_11088__$1;(statearr_11101_11119[(2)] = null);
(statearr_11101_11119[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11089 === (8)))
{var inst_11070 = (state_11088[(7)]);var state_11088__$1 = state_11088;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11088__$1,(11),out,inst_11070);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7018__auto___11109,out))
;return ((function (switch__7003__auto__,c__7018__auto___11109,out){
return (function() {
var state_machine__7004__auto__ = null;
var state_machine__7004__auto____0 = (function (){var statearr_11105 = [null,null,null,null,null,null,null,null,null];(statearr_11105[(0)] = state_machine__7004__auto__);
(statearr_11105[(1)] = (1));
return statearr_11105;
});
var state_machine__7004__auto____1 = (function (state_11088){while(true){
var ret_value__7005__auto__ = (function (){try{while(true){
var result__7006__auto__ = switch__7003__auto__.call(null,state_11088);if(cljs.core.keyword_identical_QMARK_.call(null,result__7006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7006__auto__;
}
break;
}
}catch (e11106){if((e11106 instanceof Object))
{var ex__7007__auto__ = e11106;var statearr_11107_11120 = state_11088;(statearr_11107_11120[(5)] = ex__7007__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11088);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11106;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11121 = state_11088;
state_11088 = G__11121;
continue;
}
} else
{return ret_value__7005__auto__;
}
break;
}
});
state_machine__7004__auto__ = function(state_11088){
switch(arguments.length){
case 0:
return state_machine__7004__auto____0.call(this);
case 1:
return state_machine__7004__auto____1.call(this,state_11088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7004__auto____0;
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7004__auto____1;
return state_machine__7004__auto__;
})()
;})(switch__7003__auto__,c__7018__auto___11109,out))
})();var state__7020__auto__ = (function (){var statearr_11108 = f__7019__auto__.call(null);(statearr_11108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7018__auto___11109);
return statearr_11108;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7020__auto__);
});})(c__7018__auto___11109,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__7018__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7018__auto__){
return (function (){var f__7019__auto__ = (function (){var switch__7003__auto__ = ((function (c__7018__auto__){
return (function (state_11273){var state_val_11274 = (state_11273[(1)]);if((state_val_11274 === (7)))
{var inst_11269 = (state_11273[(2)]);var state_11273__$1 = state_11273;var statearr_11275_11312 = state_11273__$1;(statearr_11275_11312[(2)] = inst_11269);
(statearr_11275_11312[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11274 === (20)))
{var inst_11244 = (state_11273[(7)]);var inst_11255 = (state_11273[(2)]);var inst_11256 = cljs.core.next.call(null,inst_11244);var inst_11230 = inst_11256;var inst_11231 = null;var inst_11232 = (0);var inst_11233 = (0);var state_11273__$1 = (function (){var statearr_11276 = state_11273;(statearr_11276[(8)] = inst_11255);
(statearr_11276[(9)] = inst_11230);
(statearr_11276[(10)] = inst_11233);
(statearr_11276[(11)] = inst_11231);
(statearr_11276[(12)] = inst_11232);
return statearr_11276;
})();var statearr_11277_11313 = state_11273__$1;(statearr_11277_11313[(2)] = null);
(statearr_11277_11313[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11274 === (1)))
{var state_11273__$1 = state_11273;var statearr_11278_11314 = state_11273__$1;(statearr_11278_11314[(2)] = null);
(statearr_11278_11314[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11274 === (4)))
{var inst_11219 = (state_11273[(13)]);var inst_11219__$1 = (state_11273[(2)]);var inst_11220 = (inst_11219__$1 == null);var state_11273__$1 = (function (){var statearr_11282 = state_11273;(statearr_11282[(13)] = inst_11219__$1);
return statearr_11282;
})();if(cljs.core.truth_(inst_11220))
{var statearr_11283_11315 = state_11273__$1;(statearr_11283_11315[(1)] = (5));
} else
{var statearr_11284_11316 = state_11273__$1;(statearr_11284_11316[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11274 === (15)))
{var state_11273__$1 = state_11273;var statearr_11285_11317 = state_11273__$1;(statearr_11285_11317[(2)] = null);
(statearr_11285_11317[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11274 === (13)))
{var inst_11230 = (state_11273[(9)]);var inst_11233 = (state_11273[(10)]);var inst_11231 = (state_11273[(11)]);var inst_11232 = (state_11273[(12)]);var inst_11240 = (state_11273[(2)]);var inst_11241 = (inst_11233 + (1));var tmp11279 = inst_11230;var tmp11280 = inst_11231;var tmp11281 = inst_11232;var inst_11230__$1 = tmp11279;var inst_11231__$1 = tmp11280;var inst_11232__$1 = tmp11281;var inst_11233__$1 = inst_11241;var state_11273__$1 = (function (){var statearr_11286 = state_11273;(statearr_11286[(9)] = inst_11230__$1);
(statearr_11286[(14)] = inst_11240);
(statearr_11286[(10)] = inst_11233__$1);
(statearr_11286[(11)] = inst_11231__$1);
(statearr_11286[(12)] = inst_11232__$1);
return statearr_11286;
})();var statearr_11287_11318 = state_11273__$1;(statearr_11287_11318[(2)] = null);
(statearr_11287_11318[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11274 === (6)))
{var inst_11219 = (state_11273[(13)]);var inst_11224 = f.call(null,inst_11219);var inst_11229 = cljs.core.seq.call(null,inst_11224);var inst_11230 = inst_11229;var inst_11231 = null;var inst_11232 = (0);var inst_11233 = (0);var state_11273__$1 = (function (){var statearr_11288 = state_11273;(statearr_11288[(9)] = inst_11230);
(statearr_11288[(10)] = inst_11233);
(statearr_11288[(11)] = inst_11231);
(statearr_11288[(12)] = inst_11232);
return statearr_11288;
})();var statearr_11289_11319 = state_11273__$1;(statearr_11289_11319[(2)] = null);
(statearr_11289_11319[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11274 === (17)))
{var inst_11244 = (state_11273[(7)]);var inst_11248 = cljs.core.chunk_first.call(null,inst_11244);var inst_11249 = cljs.core.chunk_rest.call(null,inst_11244);var inst_11250 = cljs.core.count.call(null,inst_11248);var inst_11230 = inst_11249;var inst_11231 = inst_11248;var inst_11232 = inst_11250;var inst_11233 = (0);var state_11273__$1 = (function (){var statearr_11290 = state_11273;(statearr_11290[(9)] = inst_11230);
(statearr_11290[(10)] = inst_11233);
(statearr_11290[(11)] = inst_11231);
(statearr_11290[(12)] = inst_11232);
return statearr_11290;
})();var statearr_11291_11320 = state_11273__$1;(statearr_11291_11320[(2)] = null);
(statearr_11291_11320[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11274 === (3)))
{var inst_11271 = (state_11273[(2)]);var state_11273__$1 = state_11273;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11273__$1,inst_11271);
} else
{if((state_val_11274 === (12)))
{var inst_11264 = (state_11273[(2)]);var state_11273__$1 = state_11273;var statearr_11292_11321 = state_11273__$1;(statearr_11292_11321[(2)] = inst_11264);
(statearr_11292_11321[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11274 === (2)))
{var state_11273__$1 = state_11273;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11273__$1,(4),in$);
} else
{if((state_val_11274 === (19)))
{var inst_11259 = (state_11273[(2)]);var state_11273__$1 = state_11273;var statearr_11293_11322 = state_11273__$1;(statearr_11293_11322[(2)] = inst_11259);
(statearr_11293_11322[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11274 === (11)))
{var inst_11230 = (state_11273[(9)]);var inst_11244 = (state_11273[(7)]);var inst_11244__$1 = cljs.core.seq.call(null,inst_11230);var state_11273__$1 = (function (){var statearr_11294 = state_11273;(statearr_11294[(7)] = inst_11244__$1);
return statearr_11294;
})();if(inst_11244__$1)
{var statearr_11295_11323 = state_11273__$1;(statearr_11295_11323[(1)] = (14));
} else
{var statearr_11296_11324 = state_11273__$1;(statearr_11296_11324[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11274 === (9)))
{var inst_11266 = (state_11273[(2)]);var state_11273__$1 = (function (){var statearr_11297 = state_11273;(statearr_11297[(15)] = inst_11266);
return statearr_11297;
})();var statearr_11298_11325 = state_11273__$1;(statearr_11298_11325[(2)] = null);
(statearr_11298_11325[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11274 === (5)))
{var inst_11222 = cljs.core.async.close_BANG_.call(null,out);var state_11273__$1 = state_11273;var statearr_11299_11326 = state_11273__$1;(statearr_11299_11326[(2)] = inst_11222);
(statearr_11299_11326[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11274 === (14)))
{var inst_11244 = (state_11273[(7)]);var inst_11246 = cljs.core.chunked_seq_QMARK_.call(null,inst_11244);var state_11273__$1 = state_11273;if(inst_11246)
{var statearr_11300_11327 = state_11273__$1;(statearr_11300_11327[(1)] = (17));
} else
{var statearr_11301_11328 = state_11273__$1;(statearr_11301_11328[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11274 === (16)))
{var inst_11262 = (state_11273[(2)]);var state_11273__$1 = state_11273;var statearr_11302_11329 = state_11273__$1;(statearr_11302_11329[(2)] = inst_11262);
(statearr_11302_11329[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11274 === (10)))
{var inst_11233 = (state_11273[(10)]);var inst_11231 = (state_11273[(11)]);var inst_11238 = cljs.core._nth.call(null,inst_11231,inst_11233);var state_11273__$1 = state_11273;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11273__$1,(13),out,inst_11238);
} else
{if((state_val_11274 === (18)))
{var inst_11244 = (state_11273[(7)]);var inst_11253 = cljs.core.first.call(null,inst_11244);var state_11273__$1 = state_11273;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11273__$1,(20),out,inst_11253);
} else
{if((state_val_11274 === (8)))
{var inst_11233 = (state_11273[(10)]);var inst_11232 = (state_11273[(12)]);var inst_11235 = (inst_11233 < inst_11232);var inst_11236 = inst_11235;var state_11273__$1 = state_11273;if(cljs.core.truth_(inst_11236))
{var statearr_11303_11330 = state_11273__$1;(statearr_11303_11330[(1)] = (10));
} else
{var statearr_11304_11331 = state_11273__$1;(statearr_11304_11331[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7018__auto__))
;return ((function (switch__7003__auto__,c__7018__auto__){
return (function() {
var state_machine__7004__auto__ = null;
var state_machine__7004__auto____0 = (function (){var statearr_11308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11308[(0)] = state_machine__7004__auto__);
(statearr_11308[(1)] = (1));
return statearr_11308;
});
var state_machine__7004__auto____1 = (function (state_11273){while(true){
var ret_value__7005__auto__ = (function (){try{while(true){
var result__7006__auto__ = switch__7003__auto__.call(null,state_11273);if(cljs.core.keyword_identical_QMARK_.call(null,result__7006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7006__auto__;
}
break;
}
}catch (e11309){if((e11309 instanceof Object))
{var ex__7007__auto__ = e11309;var statearr_11310_11332 = state_11273;(statearr_11310_11332[(5)] = ex__7007__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11273);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11309;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11333 = state_11273;
state_11273 = G__11333;
continue;
}
} else
{return ret_value__7005__auto__;
}
break;
}
});
state_machine__7004__auto__ = function(state_11273){
switch(arguments.length){
case 0:
return state_machine__7004__auto____0.call(this);
case 1:
return state_machine__7004__auto____1.call(this,state_11273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7004__auto____0;
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7004__auto____1;
return state_machine__7004__auto__;
})()
;})(switch__7003__auto__,c__7018__auto__))
})();var state__7020__auto__ = (function (){var statearr_11311 = f__7019__auto__.call(null);(statearr_11311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7018__auto__);
return statearr_11311;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7020__auto__);
});})(c__7018__auto__))
);
return c__7018__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__7018__auto___11414 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7018__auto___11414){
return (function (){var f__7019__auto__ = (function (){var switch__7003__auto__ = ((function (c__7018__auto___11414){
return (function (state_11393){var state_val_11394 = (state_11393[(1)]);if((state_val_11394 === (7)))
{var inst_11389 = (state_11393[(2)]);var state_11393__$1 = state_11393;var statearr_11395_11415 = state_11393__$1;(statearr_11395_11415[(2)] = inst_11389);
(statearr_11395_11415[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11394 === (1)))
{var state_11393__$1 = state_11393;var statearr_11396_11416 = state_11393__$1;(statearr_11396_11416[(2)] = null);
(statearr_11396_11416[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11394 === (4)))
{var inst_11376 = (state_11393[(7)]);var inst_11376__$1 = (state_11393[(2)]);var inst_11377 = (inst_11376__$1 == null);var state_11393__$1 = (function (){var statearr_11397 = state_11393;(statearr_11397[(7)] = inst_11376__$1);
return statearr_11397;
})();if(cljs.core.truth_(inst_11377))
{var statearr_11398_11417 = state_11393__$1;(statearr_11398_11417[(1)] = (5));
} else
{var statearr_11399_11418 = state_11393__$1;(statearr_11399_11418[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11394 === (6)))
{var inst_11376 = (state_11393[(7)]);var state_11393__$1 = state_11393;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11393__$1,(11),to,inst_11376);
} else
{if((state_val_11394 === (3)))
{var inst_11391 = (state_11393[(2)]);var state_11393__$1 = state_11393;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11393__$1,inst_11391);
} else
{if((state_val_11394 === (2)))
{var state_11393__$1 = state_11393;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11393__$1,(4),from);
} else
{if((state_val_11394 === (11)))
{var inst_11386 = (state_11393[(2)]);var state_11393__$1 = (function (){var statearr_11400 = state_11393;(statearr_11400[(8)] = inst_11386);
return statearr_11400;
})();var statearr_11401_11419 = state_11393__$1;(statearr_11401_11419[(2)] = null);
(statearr_11401_11419[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11394 === (9)))
{var state_11393__$1 = state_11393;var statearr_11402_11420 = state_11393__$1;(statearr_11402_11420[(2)] = null);
(statearr_11402_11420[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11394 === (5)))
{var state_11393__$1 = state_11393;if(cljs.core.truth_(close_QMARK_))
{var statearr_11403_11421 = state_11393__$1;(statearr_11403_11421[(1)] = (8));
} else
{var statearr_11404_11422 = state_11393__$1;(statearr_11404_11422[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11394 === (10)))
{var inst_11383 = (state_11393[(2)]);var state_11393__$1 = state_11393;var statearr_11405_11423 = state_11393__$1;(statearr_11405_11423[(2)] = inst_11383);
(statearr_11405_11423[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11394 === (8)))
{var inst_11380 = cljs.core.async.close_BANG_.call(null,to);var state_11393__$1 = state_11393;var statearr_11406_11424 = state_11393__$1;(statearr_11406_11424[(2)] = inst_11380);
(statearr_11406_11424[(1)] = (10));
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
}
}
}
}
});})(c__7018__auto___11414))
;return ((function (switch__7003__auto__,c__7018__auto___11414){
return (function() {
var state_machine__7004__auto__ = null;
var state_machine__7004__auto____0 = (function (){var statearr_11410 = [null,null,null,null,null,null,null,null,null];(statearr_11410[(0)] = state_machine__7004__auto__);
(statearr_11410[(1)] = (1));
return statearr_11410;
});
var state_machine__7004__auto____1 = (function (state_11393){while(true){
var ret_value__7005__auto__ = (function (){try{while(true){
var result__7006__auto__ = switch__7003__auto__.call(null,state_11393);if(cljs.core.keyword_identical_QMARK_.call(null,result__7006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7006__auto__;
}
break;
}
}catch (e11411){if((e11411 instanceof Object))
{var ex__7007__auto__ = e11411;var statearr_11412_11425 = state_11393;(statearr_11412_11425[(5)] = ex__7007__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11393);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11411;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11426 = state_11393;
state_11393 = G__11426;
continue;
}
} else
{return ret_value__7005__auto__;
}
break;
}
});
state_machine__7004__auto__ = function(state_11393){
switch(arguments.length){
case 0:
return state_machine__7004__auto____0.call(this);
case 1:
return state_machine__7004__auto____1.call(this,state_11393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7004__auto____0;
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7004__auto____1;
return state_machine__7004__auto__;
})()
;})(switch__7003__auto__,c__7018__auto___11414))
})();var state__7020__auto__ = (function (){var statearr_11413 = f__7019__auto__.call(null);(statearr_11413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7018__auto___11414);
return statearr_11413;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7020__auto__);
});})(c__7018__auto___11414))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__7018__auto___11513 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7018__auto___11513,tc,fc){
return (function (){var f__7019__auto__ = (function (){var switch__7003__auto__ = ((function (c__7018__auto___11513,tc,fc){
return (function (state_11491){var state_val_11492 = (state_11491[(1)]);if((state_val_11492 === (7)))
{var inst_11487 = (state_11491[(2)]);var state_11491__$1 = state_11491;var statearr_11493_11514 = state_11491__$1;(statearr_11493_11514[(2)] = inst_11487);
(statearr_11493_11514[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11492 === (1)))
{var state_11491__$1 = state_11491;var statearr_11494_11515 = state_11491__$1;(statearr_11494_11515[(2)] = null);
(statearr_11494_11515[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11492 === (4)))
{var inst_11472 = (state_11491[(7)]);var inst_11472__$1 = (state_11491[(2)]);var inst_11473 = (inst_11472__$1 == null);var state_11491__$1 = (function (){var statearr_11495 = state_11491;(statearr_11495[(7)] = inst_11472__$1);
return statearr_11495;
})();if(cljs.core.truth_(inst_11473))
{var statearr_11496_11516 = state_11491__$1;(statearr_11496_11516[(1)] = (5));
} else
{var statearr_11497_11517 = state_11491__$1;(statearr_11497_11517[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11492 === (6)))
{var inst_11472 = (state_11491[(7)]);var inst_11478 = p.call(null,inst_11472);var state_11491__$1 = state_11491;if(cljs.core.truth_(inst_11478))
{var statearr_11498_11518 = state_11491__$1;(statearr_11498_11518[(1)] = (9));
} else
{var statearr_11499_11519 = state_11491__$1;(statearr_11499_11519[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11492 === (3)))
{var inst_11489 = (state_11491[(2)]);var state_11491__$1 = state_11491;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11491__$1,inst_11489);
} else
{if((state_val_11492 === (2)))
{var state_11491__$1 = state_11491;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11491__$1,(4),ch);
} else
{if((state_val_11492 === (11)))
{var inst_11472 = (state_11491[(7)]);var inst_11482 = (state_11491[(2)]);var state_11491__$1 = state_11491;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11491__$1,(8),inst_11482,inst_11472);
} else
{if((state_val_11492 === (9)))
{var state_11491__$1 = state_11491;var statearr_11500_11520 = state_11491__$1;(statearr_11500_11520[(2)] = tc);
(statearr_11500_11520[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11492 === (5)))
{var inst_11475 = cljs.core.async.close_BANG_.call(null,tc);var inst_11476 = cljs.core.async.close_BANG_.call(null,fc);var state_11491__$1 = (function (){var statearr_11501 = state_11491;(statearr_11501[(8)] = inst_11475);
return statearr_11501;
})();var statearr_11502_11521 = state_11491__$1;(statearr_11502_11521[(2)] = inst_11476);
(statearr_11502_11521[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11492 === (10)))
{var state_11491__$1 = state_11491;var statearr_11503_11522 = state_11491__$1;(statearr_11503_11522[(2)] = fc);
(statearr_11503_11522[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11492 === (8)))
{var inst_11484 = (state_11491[(2)]);var state_11491__$1 = (function (){var statearr_11504 = state_11491;(statearr_11504[(9)] = inst_11484);
return statearr_11504;
})();var statearr_11505_11523 = state_11491__$1;(statearr_11505_11523[(2)] = null);
(statearr_11505_11523[(1)] = (2));
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
}
}
}
}
});})(c__7018__auto___11513,tc,fc))
;return ((function (switch__7003__auto__,c__7018__auto___11513,tc,fc){
return (function() {
var state_machine__7004__auto__ = null;
var state_machine__7004__auto____0 = (function (){var statearr_11509 = [null,null,null,null,null,null,null,null,null,null];(statearr_11509[(0)] = state_machine__7004__auto__);
(statearr_11509[(1)] = (1));
return statearr_11509;
});
var state_machine__7004__auto____1 = (function (state_11491){while(true){
var ret_value__7005__auto__ = (function (){try{while(true){
var result__7006__auto__ = switch__7003__auto__.call(null,state_11491);if(cljs.core.keyword_identical_QMARK_.call(null,result__7006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7006__auto__;
}
break;
}
}catch (e11510){if((e11510 instanceof Object))
{var ex__7007__auto__ = e11510;var statearr_11511_11524 = state_11491;(statearr_11511_11524[(5)] = ex__7007__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11491);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11510;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11525 = state_11491;
state_11491 = G__11525;
continue;
}
} else
{return ret_value__7005__auto__;
}
break;
}
});
state_machine__7004__auto__ = function(state_11491){
switch(arguments.length){
case 0:
return state_machine__7004__auto____0.call(this);
case 1:
return state_machine__7004__auto____1.call(this,state_11491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7004__auto____0;
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7004__auto____1;
return state_machine__7004__auto__;
})()
;})(switch__7003__auto__,c__7018__auto___11513,tc,fc))
})();var state__7020__auto__ = (function (){var statearr_11512 = f__7019__auto__.call(null);(statearr_11512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7018__auto___11513);
return statearr_11512;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7020__auto__);
});})(c__7018__auto___11513,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__7018__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7018__auto__){
return (function (){var f__7019__auto__ = (function (){var switch__7003__auto__ = ((function (c__7018__auto__){
return (function (state_11572){var state_val_11573 = (state_11572[(1)]);if((state_val_11573 === (7)))
{var inst_11568 = (state_11572[(2)]);var state_11572__$1 = state_11572;var statearr_11574_11590 = state_11572__$1;(statearr_11574_11590[(2)] = inst_11568);
(statearr_11574_11590[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11573 === (6)))
{var inst_11561 = (state_11572[(7)]);var inst_11558 = (state_11572[(8)]);var inst_11565 = f.call(null,inst_11558,inst_11561);var inst_11558__$1 = inst_11565;var state_11572__$1 = (function (){var statearr_11575 = state_11572;(statearr_11575[(8)] = inst_11558__$1);
return statearr_11575;
})();var statearr_11576_11591 = state_11572__$1;(statearr_11576_11591[(2)] = null);
(statearr_11576_11591[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11573 === (5)))
{var inst_11558 = (state_11572[(8)]);var state_11572__$1 = state_11572;var statearr_11577_11592 = state_11572__$1;(statearr_11577_11592[(2)] = inst_11558);
(statearr_11577_11592[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11573 === (4)))
{var inst_11561 = (state_11572[(7)]);var inst_11561__$1 = (state_11572[(2)]);var inst_11562 = (inst_11561__$1 == null);var state_11572__$1 = (function (){var statearr_11578 = state_11572;(statearr_11578[(7)] = inst_11561__$1);
return statearr_11578;
})();if(cljs.core.truth_(inst_11562))
{var statearr_11579_11593 = state_11572__$1;(statearr_11579_11593[(1)] = (5));
} else
{var statearr_11580_11594 = state_11572__$1;(statearr_11580_11594[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11573 === (3)))
{var inst_11570 = (state_11572[(2)]);var state_11572__$1 = state_11572;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11572__$1,inst_11570);
} else
{if((state_val_11573 === (2)))
{var state_11572__$1 = state_11572;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11572__$1,(4),ch);
} else
{if((state_val_11573 === (1)))
{var inst_11558 = init;var state_11572__$1 = (function (){var statearr_11581 = state_11572;(statearr_11581[(8)] = inst_11558);
return statearr_11581;
})();var statearr_11582_11595 = state_11572__$1;(statearr_11582_11595[(2)] = null);
(statearr_11582_11595[(1)] = (2));
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
});})(c__7018__auto__))
;return ((function (switch__7003__auto__,c__7018__auto__){
return (function() {
var state_machine__7004__auto__ = null;
var state_machine__7004__auto____0 = (function (){var statearr_11586 = [null,null,null,null,null,null,null,null,null];(statearr_11586[(0)] = state_machine__7004__auto__);
(statearr_11586[(1)] = (1));
return statearr_11586;
});
var state_machine__7004__auto____1 = (function (state_11572){while(true){
var ret_value__7005__auto__ = (function (){try{while(true){
var result__7006__auto__ = switch__7003__auto__.call(null,state_11572);if(cljs.core.keyword_identical_QMARK_.call(null,result__7006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7006__auto__;
}
break;
}
}catch (e11587){if((e11587 instanceof Object))
{var ex__7007__auto__ = e11587;var statearr_11588_11596 = state_11572;(statearr_11588_11596[(5)] = ex__7007__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11572);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11587;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11597 = state_11572;
state_11572 = G__11597;
continue;
}
} else
{return ret_value__7005__auto__;
}
break;
}
});
state_machine__7004__auto__ = function(state_11572){
switch(arguments.length){
case 0:
return state_machine__7004__auto____0.call(this);
case 1:
return state_machine__7004__auto____1.call(this,state_11572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7004__auto____0;
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7004__auto____1;
return state_machine__7004__auto__;
})()
;})(switch__7003__auto__,c__7018__auto__))
})();var state__7020__auto__ = (function (){var statearr_11589 = f__7019__auto__.call(null);(statearr_11589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7018__auto__);
return statearr_11589;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7020__auto__);
});})(c__7018__auto__))
);
return c__7018__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__7018__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7018__auto__){
return (function (){var f__7019__auto__ = (function (){var switch__7003__auto__ = ((function (c__7018__auto__){
return (function (state_11659){var state_val_11660 = (state_11659[(1)]);if((state_val_11660 === (7)))
{var inst_11640 = (state_11659[(7)]);var inst_11645 = (state_11659[(2)]);var inst_11646 = cljs.core.next.call(null,inst_11640);var inst_11640__$1 = inst_11646;var state_11659__$1 = (function (){var statearr_11661 = state_11659;(statearr_11661[(8)] = inst_11645);
(statearr_11661[(7)] = inst_11640__$1);
return statearr_11661;
})();var statearr_11662_11680 = state_11659__$1;(statearr_11662_11680[(2)] = null);
(statearr_11662_11680[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11660 === (1)))
{var inst_11639 = cljs.core.seq.call(null,coll);var inst_11640 = inst_11639;var state_11659__$1 = (function (){var statearr_11663 = state_11659;(statearr_11663[(7)] = inst_11640);
return statearr_11663;
})();var statearr_11664_11681 = state_11659__$1;(statearr_11664_11681[(2)] = null);
(statearr_11664_11681[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11660 === (4)))
{var inst_11640 = (state_11659[(7)]);var inst_11643 = cljs.core.first.call(null,inst_11640);var state_11659__$1 = state_11659;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11659__$1,(7),ch,inst_11643);
} else
{if((state_val_11660 === (6)))
{var inst_11655 = (state_11659[(2)]);var state_11659__$1 = state_11659;var statearr_11665_11682 = state_11659__$1;(statearr_11665_11682[(2)] = inst_11655);
(statearr_11665_11682[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11660 === (3)))
{var inst_11657 = (state_11659[(2)]);var state_11659__$1 = state_11659;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11659__$1,inst_11657);
} else
{if((state_val_11660 === (2)))
{var inst_11640 = (state_11659[(7)]);var state_11659__$1 = state_11659;if(cljs.core.truth_(inst_11640))
{var statearr_11666_11683 = state_11659__$1;(statearr_11666_11683[(1)] = (4));
} else
{var statearr_11667_11684 = state_11659__$1;(statearr_11667_11684[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11660 === (9)))
{var state_11659__$1 = state_11659;var statearr_11668_11685 = state_11659__$1;(statearr_11668_11685[(2)] = null);
(statearr_11668_11685[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11660 === (5)))
{var state_11659__$1 = state_11659;if(cljs.core.truth_(close_QMARK_))
{var statearr_11669_11686 = state_11659__$1;(statearr_11669_11686[(1)] = (8));
} else
{var statearr_11670_11687 = state_11659__$1;(statearr_11670_11687[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11660 === (10)))
{var inst_11653 = (state_11659[(2)]);var state_11659__$1 = state_11659;var statearr_11671_11688 = state_11659__$1;(statearr_11671_11688[(2)] = inst_11653);
(statearr_11671_11688[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11660 === (8)))
{var inst_11650 = cljs.core.async.close_BANG_.call(null,ch);var state_11659__$1 = state_11659;var statearr_11672_11689 = state_11659__$1;(statearr_11672_11689[(2)] = inst_11650);
(statearr_11672_11689[(1)] = (10));
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
}
}
}
});})(c__7018__auto__))
;return ((function (switch__7003__auto__,c__7018__auto__){
return (function() {
var state_machine__7004__auto__ = null;
var state_machine__7004__auto____0 = (function (){var statearr_11676 = [null,null,null,null,null,null,null,null,null];(statearr_11676[(0)] = state_machine__7004__auto__);
(statearr_11676[(1)] = (1));
return statearr_11676;
});
var state_machine__7004__auto____1 = (function (state_11659){while(true){
var ret_value__7005__auto__ = (function (){try{while(true){
var result__7006__auto__ = switch__7003__auto__.call(null,state_11659);if(cljs.core.keyword_identical_QMARK_.call(null,result__7006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7006__auto__;
}
break;
}
}catch (e11677){if((e11677 instanceof Object))
{var ex__7007__auto__ = e11677;var statearr_11678_11690 = state_11659;(statearr_11678_11690[(5)] = ex__7007__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11659);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11677;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11691 = state_11659;
state_11659 = G__11691;
continue;
}
} else
{return ret_value__7005__auto__;
}
break;
}
});
state_machine__7004__auto__ = function(state_11659){
switch(arguments.length){
case 0:
return state_machine__7004__auto____0.call(this);
case 1:
return state_machine__7004__auto____1.call(this,state_11659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7004__auto____0;
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7004__auto____1;
return state_machine__7004__auto__;
})()
;})(switch__7003__auto__,c__7018__auto__))
})();var state__7020__auto__ = (function (){var statearr_11679 = f__7019__auto__.call(null);(statearr_11679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7018__auto__);
return statearr_11679;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7020__auto__);
});})(c__7018__auto__))
);
return c__7018__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11693 = {};return obj11693;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3531__auto__ = _;if(and__3531__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4170__auto__ = (((_ == null))?null:_);return (function (){var or__3543__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11695 = {};return obj11695;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11919 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11919 = (function (cs,ch,mult,meta11920){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11920 = meta11920;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11919.cljs$lang$type = true;
cljs.core.async.t11919.cljs$lang$ctorStr = "cljs.core.async/t11919";
cljs.core.async.t11919.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t11919");
});})(cs))
;
cljs.core.async.t11919.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11919.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11919.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11919.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11919.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11919.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11919.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11921){var self__ = this;
var _11921__$1 = this;return self__.meta11920;
});})(cs))
;
cljs.core.async.t11919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11921,meta11920__$1){var self__ = this;
var _11921__$1 = this;return (new cljs.core.async.t11919(self__.cs,self__.ch,self__.mult,meta11920__$1));
});})(cs))
;
cljs.core.async.__GT_t11919 = ((function (cs){
return (function __GT_t11919(cs__$1,ch__$1,mult__$1,meta11920){return (new cljs.core.async.t11919(cs__$1,ch__$1,mult__$1,meta11920));
});})(cs))
;
}
return (new cljs.core.async.t11919(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__7018__auto___12142 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7018__auto___12142,cs,m,dchan,dctr,done){
return (function (){var f__7019__auto__ = (function (){var switch__7003__auto__ = ((function (c__7018__auto___12142,cs,m,dchan,dctr,done){
return (function (state_12056){var state_val_12057 = (state_12056[(1)]);if((state_val_12057 === (7)))
{var inst_12052 = (state_12056[(2)]);var state_12056__$1 = state_12056;var statearr_12058_12143 = state_12056__$1;(statearr_12058_12143[(2)] = inst_12052);
(statearr_12058_12143[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (20)))
{var inst_11953 = (state_12056[(7)]);var inst_11963 = cljs.core.first.call(null,inst_11953);var inst_11964 = cljs.core.nth.call(null,inst_11963,(0),null);var inst_11965 = cljs.core.nth.call(null,inst_11963,(1),null);var state_12056__$1 = (function (){var statearr_12059 = state_12056;(statearr_12059[(8)] = inst_11964);
return statearr_12059;
})();if(cljs.core.truth_(inst_11965))
{var statearr_12060_12144 = state_12056__$1;(statearr_12060_12144[(1)] = (22));
} else
{var statearr_12061_12145 = state_12056__$1;(statearr_12061_12145[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (27)))
{var inst_11995 = (state_12056[(9)]);var inst_11993 = (state_12056[(10)]);var inst_12000 = cljs.core._nth.call(null,inst_11993,inst_11995);var state_12056__$1 = (function (){var statearr_12062 = state_12056;(statearr_12062[(11)] = inst_12000);
return statearr_12062;
})();var statearr_12063_12146 = state_12056__$1;(statearr_12063_12146[(2)] = null);
(statearr_12063_12146[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (1)))
{var state_12056__$1 = state_12056;var statearr_12064_12147 = state_12056__$1;(statearr_12064_12147[(2)] = null);
(statearr_12064_12147[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (24)))
{var inst_11953 = (state_12056[(7)]);var inst_11970 = (state_12056[(2)]);var inst_11971 = cljs.core.next.call(null,inst_11953);var inst_11933 = inst_11971;var inst_11934 = null;var inst_11935 = (0);var inst_11936 = (0);var state_12056__$1 = (function (){var statearr_12065 = state_12056;(statearr_12065[(12)] = inst_11936);
(statearr_12065[(13)] = inst_11934);
(statearr_12065[(14)] = inst_11970);
(statearr_12065[(15)] = inst_11933);
(statearr_12065[(16)] = inst_11935);
return statearr_12065;
})();var statearr_12066_12148 = state_12056__$1;(statearr_12066_12148[(2)] = null);
(statearr_12066_12148[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (39)))
{var inst_12013 = (state_12056[(17)]);var inst_12031 = (state_12056[(2)]);var inst_12032 = cljs.core.next.call(null,inst_12013);var inst_11992 = inst_12032;var inst_11993 = null;var inst_11994 = (0);var inst_11995 = (0);var state_12056__$1 = (function (){var statearr_12070 = state_12056;(statearr_12070[(18)] = inst_11992);
(statearr_12070[(19)] = inst_12031);
(statearr_12070[(9)] = inst_11995);
(statearr_12070[(10)] = inst_11993);
(statearr_12070[(20)] = inst_11994);
return statearr_12070;
})();var statearr_12071_12149 = state_12056__$1;(statearr_12071_12149[(2)] = null);
(statearr_12071_12149[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (4)))
{var inst_11924 = (state_12056[(21)]);var inst_11924__$1 = (state_12056[(2)]);var inst_11925 = (inst_11924__$1 == null);var state_12056__$1 = (function (){var statearr_12072 = state_12056;(statearr_12072[(21)] = inst_11924__$1);
return statearr_12072;
})();if(cljs.core.truth_(inst_11925))
{var statearr_12073_12150 = state_12056__$1;(statearr_12073_12150[(1)] = (5));
} else
{var statearr_12074_12151 = state_12056__$1;(statearr_12074_12151[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (15)))
{var inst_11936 = (state_12056[(12)]);var inst_11934 = (state_12056[(13)]);var inst_11933 = (state_12056[(15)]);var inst_11935 = (state_12056[(16)]);var inst_11949 = (state_12056[(2)]);var inst_11950 = (inst_11936 + (1));var tmp12067 = inst_11934;var tmp12068 = inst_11933;var tmp12069 = inst_11935;var inst_11933__$1 = tmp12068;var inst_11934__$1 = tmp12067;var inst_11935__$1 = tmp12069;var inst_11936__$1 = inst_11950;var state_12056__$1 = (function (){var statearr_12075 = state_12056;(statearr_12075[(22)] = inst_11949);
(statearr_12075[(12)] = inst_11936__$1);
(statearr_12075[(13)] = inst_11934__$1);
(statearr_12075[(15)] = inst_11933__$1);
(statearr_12075[(16)] = inst_11935__$1);
return statearr_12075;
})();var statearr_12076_12152 = state_12056__$1;(statearr_12076_12152[(2)] = null);
(statearr_12076_12152[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (21)))
{var inst_11974 = (state_12056[(2)]);var state_12056__$1 = state_12056;var statearr_12077_12153 = state_12056__$1;(statearr_12077_12153[(2)] = inst_11974);
(statearr_12077_12153[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (31)))
{var inst_12000 = (state_12056[(11)]);var inst_12001 = (state_12056[(2)]);var inst_12002 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12003 = cljs.core.async.untap_STAR_.call(null,m,inst_12000);var state_12056__$1 = (function (){var statearr_12078 = state_12056;(statearr_12078[(23)] = inst_12001);
(statearr_12078[(24)] = inst_12002);
return statearr_12078;
})();var statearr_12079_12154 = state_12056__$1;(statearr_12079_12154[(2)] = inst_12003);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12056__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (32)))
{var inst_12000 = (state_12056[(11)]);var inst_11924 = (state_12056[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12056,(31),Object,null,(30));var inst_12007 = cljs.core.async.put_BANG_.call(null,inst_12000,inst_11924,done);var state_12056__$1 = state_12056;var statearr_12080_12155 = state_12056__$1;(statearr_12080_12155[(2)] = inst_12007);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12056__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (40)))
{var inst_12022 = (state_12056[(25)]);var inst_12023 = (state_12056[(2)]);var inst_12024 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12025 = cljs.core.async.untap_STAR_.call(null,m,inst_12022);var state_12056__$1 = (function (){var statearr_12081 = state_12056;(statearr_12081[(26)] = inst_12023);
(statearr_12081[(27)] = inst_12024);
return statearr_12081;
})();var statearr_12082_12156 = state_12056__$1;(statearr_12082_12156[(2)] = inst_12025);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12056__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (33)))
{var inst_12013 = (state_12056[(17)]);var inst_12015 = cljs.core.chunked_seq_QMARK_.call(null,inst_12013);var state_12056__$1 = state_12056;if(inst_12015)
{var statearr_12083_12157 = state_12056__$1;(statearr_12083_12157[(1)] = (36));
} else
{var statearr_12084_12158 = state_12056__$1;(statearr_12084_12158[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (13)))
{var inst_11943 = (state_12056[(28)]);var inst_11946 = cljs.core.async.close_BANG_.call(null,inst_11943);var state_12056__$1 = state_12056;var statearr_12085_12159 = state_12056__$1;(statearr_12085_12159[(2)] = inst_11946);
(statearr_12085_12159[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (22)))
{var inst_11964 = (state_12056[(8)]);var inst_11967 = cljs.core.async.close_BANG_.call(null,inst_11964);var state_12056__$1 = state_12056;var statearr_12086_12160 = state_12056__$1;(statearr_12086_12160[(2)] = inst_11967);
(statearr_12086_12160[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (36)))
{var inst_12013 = (state_12056[(17)]);var inst_12017 = cljs.core.chunk_first.call(null,inst_12013);var inst_12018 = cljs.core.chunk_rest.call(null,inst_12013);var inst_12019 = cljs.core.count.call(null,inst_12017);var inst_11992 = inst_12018;var inst_11993 = inst_12017;var inst_11994 = inst_12019;var inst_11995 = (0);var state_12056__$1 = (function (){var statearr_12087 = state_12056;(statearr_12087[(18)] = inst_11992);
(statearr_12087[(9)] = inst_11995);
(statearr_12087[(10)] = inst_11993);
(statearr_12087[(20)] = inst_11994);
return statearr_12087;
})();var statearr_12088_12161 = state_12056__$1;(statearr_12088_12161[(2)] = null);
(statearr_12088_12161[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (41)))
{var inst_12022 = (state_12056[(25)]);var inst_11924 = (state_12056[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12056,(40),Object,null,(39));var inst_12029 = cljs.core.async.put_BANG_.call(null,inst_12022,inst_11924,done);var state_12056__$1 = state_12056;var statearr_12089_12162 = state_12056__$1;(statearr_12089_12162[(2)] = inst_12029);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12056__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (43)))
{var state_12056__$1 = state_12056;var statearr_12090_12163 = state_12056__$1;(statearr_12090_12163[(2)] = null);
(statearr_12090_12163[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (29)))
{var inst_12040 = (state_12056[(2)]);var state_12056__$1 = state_12056;var statearr_12091_12164 = state_12056__$1;(statearr_12091_12164[(2)] = inst_12040);
(statearr_12091_12164[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (44)))
{var inst_12049 = (state_12056[(2)]);var state_12056__$1 = (function (){var statearr_12092 = state_12056;(statearr_12092[(29)] = inst_12049);
return statearr_12092;
})();var statearr_12093_12165 = state_12056__$1;(statearr_12093_12165[(2)] = null);
(statearr_12093_12165[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (6)))
{var inst_11984 = (state_12056[(30)]);var inst_11983 = cljs.core.deref.call(null,cs);var inst_11984__$1 = cljs.core.keys.call(null,inst_11983);var inst_11985 = cljs.core.count.call(null,inst_11984__$1);var inst_11986 = cljs.core.reset_BANG_.call(null,dctr,inst_11985);var inst_11991 = cljs.core.seq.call(null,inst_11984__$1);var inst_11992 = inst_11991;var inst_11993 = null;var inst_11994 = (0);var inst_11995 = (0);var state_12056__$1 = (function (){var statearr_12094 = state_12056;(statearr_12094[(18)] = inst_11992);
(statearr_12094[(31)] = inst_11986);
(statearr_12094[(30)] = inst_11984__$1);
(statearr_12094[(9)] = inst_11995);
(statearr_12094[(10)] = inst_11993);
(statearr_12094[(20)] = inst_11994);
return statearr_12094;
})();var statearr_12095_12166 = state_12056__$1;(statearr_12095_12166[(2)] = null);
(statearr_12095_12166[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (28)))
{var inst_12013 = (state_12056[(17)]);var inst_11992 = (state_12056[(18)]);var inst_12013__$1 = cljs.core.seq.call(null,inst_11992);var state_12056__$1 = (function (){var statearr_12096 = state_12056;(statearr_12096[(17)] = inst_12013__$1);
return statearr_12096;
})();if(inst_12013__$1)
{var statearr_12097_12167 = state_12056__$1;(statearr_12097_12167[(1)] = (33));
} else
{var statearr_12098_12168 = state_12056__$1;(statearr_12098_12168[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (25)))
{var inst_11995 = (state_12056[(9)]);var inst_11994 = (state_12056[(20)]);var inst_11997 = (inst_11995 < inst_11994);var inst_11998 = inst_11997;var state_12056__$1 = state_12056;if(cljs.core.truth_(inst_11998))
{var statearr_12099_12169 = state_12056__$1;(statearr_12099_12169[(1)] = (27));
} else
{var statearr_12100_12170 = state_12056__$1;(statearr_12100_12170[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (34)))
{var state_12056__$1 = state_12056;var statearr_12101_12171 = state_12056__$1;(statearr_12101_12171[(2)] = null);
(statearr_12101_12171[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (17)))
{var state_12056__$1 = state_12056;var statearr_12102_12172 = state_12056__$1;(statearr_12102_12172[(2)] = null);
(statearr_12102_12172[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (3)))
{var inst_12054 = (state_12056[(2)]);var state_12056__$1 = state_12056;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12056__$1,inst_12054);
} else
{if((state_val_12057 === (12)))
{var inst_11979 = (state_12056[(2)]);var state_12056__$1 = state_12056;var statearr_12103_12173 = state_12056__$1;(statearr_12103_12173[(2)] = inst_11979);
(statearr_12103_12173[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (2)))
{var state_12056__$1 = state_12056;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12056__$1,(4),ch);
} else
{if((state_val_12057 === (23)))
{var state_12056__$1 = state_12056;var statearr_12104_12174 = state_12056__$1;(statearr_12104_12174[(2)] = null);
(statearr_12104_12174[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (35)))
{var inst_12038 = (state_12056[(2)]);var state_12056__$1 = state_12056;var statearr_12105_12175 = state_12056__$1;(statearr_12105_12175[(2)] = inst_12038);
(statearr_12105_12175[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (19)))
{var inst_11953 = (state_12056[(7)]);var inst_11957 = cljs.core.chunk_first.call(null,inst_11953);var inst_11958 = cljs.core.chunk_rest.call(null,inst_11953);var inst_11959 = cljs.core.count.call(null,inst_11957);var inst_11933 = inst_11958;var inst_11934 = inst_11957;var inst_11935 = inst_11959;var inst_11936 = (0);var state_12056__$1 = (function (){var statearr_12106 = state_12056;(statearr_12106[(12)] = inst_11936);
(statearr_12106[(13)] = inst_11934);
(statearr_12106[(15)] = inst_11933);
(statearr_12106[(16)] = inst_11935);
return statearr_12106;
})();var statearr_12107_12176 = state_12056__$1;(statearr_12107_12176[(2)] = null);
(statearr_12107_12176[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (11)))
{var inst_11953 = (state_12056[(7)]);var inst_11933 = (state_12056[(15)]);var inst_11953__$1 = cljs.core.seq.call(null,inst_11933);var state_12056__$1 = (function (){var statearr_12108 = state_12056;(statearr_12108[(7)] = inst_11953__$1);
return statearr_12108;
})();if(inst_11953__$1)
{var statearr_12109_12177 = state_12056__$1;(statearr_12109_12177[(1)] = (16));
} else
{var statearr_12110_12178 = state_12056__$1;(statearr_12110_12178[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (9)))
{var inst_11981 = (state_12056[(2)]);var state_12056__$1 = state_12056;var statearr_12111_12179 = state_12056__$1;(statearr_12111_12179[(2)] = inst_11981);
(statearr_12111_12179[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (5)))
{var inst_11931 = cljs.core.deref.call(null,cs);var inst_11932 = cljs.core.seq.call(null,inst_11931);var inst_11933 = inst_11932;var inst_11934 = null;var inst_11935 = (0);var inst_11936 = (0);var state_12056__$1 = (function (){var statearr_12112 = state_12056;(statearr_12112[(12)] = inst_11936);
(statearr_12112[(13)] = inst_11934);
(statearr_12112[(15)] = inst_11933);
(statearr_12112[(16)] = inst_11935);
return statearr_12112;
})();var statearr_12113_12180 = state_12056__$1;(statearr_12113_12180[(2)] = null);
(statearr_12113_12180[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (14)))
{var state_12056__$1 = state_12056;var statearr_12114_12181 = state_12056__$1;(statearr_12114_12181[(2)] = null);
(statearr_12114_12181[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (45)))
{var inst_12046 = (state_12056[(2)]);var state_12056__$1 = state_12056;var statearr_12115_12182 = state_12056__$1;(statearr_12115_12182[(2)] = inst_12046);
(statearr_12115_12182[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (26)))
{var inst_11984 = (state_12056[(30)]);var inst_12042 = (state_12056[(2)]);var inst_12043 = cljs.core.seq.call(null,inst_11984);var state_12056__$1 = (function (){var statearr_12116 = state_12056;(statearr_12116[(32)] = inst_12042);
return statearr_12116;
})();if(inst_12043)
{var statearr_12117_12183 = state_12056__$1;(statearr_12117_12183[(1)] = (42));
} else
{var statearr_12118_12184 = state_12056__$1;(statearr_12118_12184[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (16)))
{var inst_11953 = (state_12056[(7)]);var inst_11955 = cljs.core.chunked_seq_QMARK_.call(null,inst_11953);var state_12056__$1 = state_12056;if(inst_11955)
{var statearr_12122_12185 = state_12056__$1;(statearr_12122_12185[(1)] = (19));
} else
{var statearr_12123_12186 = state_12056__$1;(statearr_12123_12186[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (38)))
{var inst_12035 = (state_12056[(2)]);var state_12056__$1 = state_12056;var statearr_12124_12187 = state_12056__$1;(statearr_12124_12187[(2)] = inst_12035);
(statearr_12124_12187[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (30)))
{var inst_11992 = (state_12056[(18)]);var inst_11995 = (state_12056[(9)]);var inst_11993 = (state_12056[(10)]);var inst_11994 = (state_12056[(20)]);var inst_12009 = (state_12056[(2)]);var inst_12010 = (inst_11995 + (1));var tmp12119 = inst_11992;var tmp12120 = inst_11993;var tmp12121 = inst_11994;var inst_11992__$1 = tmp12119;var inst_11993__$1 = tmp12120;var inst_11994__$1 = tmp12121;var inst_11995__$1 = inst_12010;var state_12056__$1 = (function (){var statearr_12125 = state_12056;(statearr_12125[(18)] = inst_11992__$1);
(statearr_12125[(33)] = inst_12009);
(statearr_12125[(9)] = inst_11995__$1);
(statearr_12125[(10)] = inst_11993__$1);
(statearr_12125[(20)] = inst_11994__$1);
return statearr_12125;
})();var statearr_12126_12188 = state_12056__$1;(statearr_12126_12188[(2)] = null);
(statearr_12126_12188[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (10)))
{var inst_11936 = (state_12056[(12)]);var inst_11934 = (state_12056[(13)]);var inst_11942 = cljs.core._nth.call(null,inst_11934,inst_11936);var inst_11943 = cljs.core.nth.call(null,inst_11942,(0),null);var inst_11944 = cljs.core.nth.call(null,inst_11942,(1),null);var state_12056__$1 = (function (){var statearr_12127 = state_12056;(statearr_12127[(28)] = inst_11943);
return statearr_12127;
})();if(cljs.core.truth_(inst_11944))
{var statearr_12128_12189 = state_12056__$1;(statearr_12128_12189[(1)] = (13));
} else
{var statearr_12129_12190 = state_12056__$1;(statearr_12129_12190[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (18)))
{var inst_11977 = (state_12056[(2)]);var state_12056__$1 = state_12056;var statearr_12130_12191 = state_12056__$1;(statearr_12130_12191[(2)] = inst_11977);
(statearr_12130_12191[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (42)))
{var state_12056__$1 = state_12056;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12056__$1,(45),dchan);
} else
{if((state_val_12057 === (37)))
{var inst_12013 = (state_12056[(17)]);var inst_12022 = cljs.core.first.call(null,inst_12013);var state_12056__$1 = (function (){var statearr_12131 = state_12056;(statearr_12131[(25)] = inst_12022);
return statearr_12131;
})();var statearr_12132_12192 = state_12056__$1;(statearr_12132_12192[(2)] = null);
(statearr_12132_12192[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12057 === (8)))
{var inst_11936 = (state_12056[(12)]);var inst_11935 = (state_12056[(16)]);var inst_11938 = (inst_11936 < inst_11935);var inst_11939 = inst_11938;var state_12056__$1 = state_12056;if(cljs.core.truth_(inst_11939))
{var statearr_12133_12193 = state_12056__$1;(statearr_12133_12193[(1)] = (10));
} else
{var statearr_12134_12194 = state_12056__$1;(statearr_12134_12194[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7018__auto___12142,cs,m,dchan,dctr,done))
;return ((function (switch__7003__auto__,c__7018__auto___12142,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7004__auto__ = null;
var state_machine__7004__auto____0 = (function (){var statearr_12138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12138[(0)] = state_machine__7004__auto__);
(statearr_12138[(1)] = (1));
return statearr_12138;
});
var state_machine__7004__auto____1 = (function (state_12056){while(true){
var ret_value__7005__auto__ = (function (){try{while(true){
var result__7006__auto__ = switch__7003__auto__.call(null,state_12056);if(cljs.core.keyword_identical_QMARK_.call(null,result__7006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7006__auto__;
}
break;
}
}catch (e12139){if((e12139 instanceof Object))
{var ex__7007__auto__ = e12139;var statearr_12140_12195 = state_12056;(statearr_12140_12195[(5)] = ex__7007__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12056);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12139;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12196 = state_12056;
state_12056 = G__12196;
continue;
}
} else
{return ret_value__7005__auto__;
}
break;
}
});
state_machine__7004__auto__ = function(state_12056){
switch(arguments.length){
case 0:
return state_machine__7004__auto____0.call(this);
case 1:
return state_machine__7004__auto____1.call(this,state_12056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7004__auto____0;
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7004__auto____1;
return state_machine__7004__auto__;
})()
;})(switch__7003__auto__,c__7018__auto___12142,cs,m,dchan,dctr,done))
})();var state__7020__auto__ = (function (){var statearr_12141 = f__7019__auto__.call(null);(statearr_12141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7018__auto___12142);
return statearr_12141;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7020__auto__);
});})(c__7018__auto___12142,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12198 = {};return obj12198;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12308 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12308 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12309){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12309 = meta12309;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12308.cljs$lang$type = true;
cljs.core.async.t12308.cljs$lang$ctorStr = "cljs.core.async/t12308";
cljs.core.async.t12308.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t12308");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12308.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12308.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12308.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12308.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12308.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12308.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12308.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12308.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12308.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12310){var self__ = this;
var _12310__$1 = this;return self__.meta12309;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12310,meta12309__$1){var self__ = this;
var _12310__$1 = this;return (new cljs.core.async.t12308(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12309__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12308 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12308(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12309){return (new cljs.core.async.t12308(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12309));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12308(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__7018__auto___12417 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7018__auto___12417,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__7019__auto__ = (function (){var switch__7003__auto__ = ((function (c__7018__auto___12417,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12375){var state_val_12376 = (state_12375[(1)]);if((state_val_12376 === (7)))
{var inst_12324 = (state_12375[(7)]);var inst_12329 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12324);var state_12375__$1 = state_12375;var statearr_12377_12418 = state_12375__$1;(statearr_12377_12418[(2)] = inst_12329);
(statearr_12377_12418[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (20)))
{var inst_12339 = (state_12375[(8)]);var state_12375__$1 = state_12375;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12375__$1,(23),out,inst_12339);
} else
{if((state_val_12376 === (1)))
{var inst_12314 = (state_12375[(9)]);var inst_12314__$1 = calc_state.call(null);var inst_12315 = cljs.core.seq_QMARK_.call(null,inst_12314__$1);var state_12375__$1 = (function (){var statearr_12378 = state_12375;(statearr_12378[(9)] = inst_12314__$1);
return statearr_12378;
})();if(inst_12315)
{var statearr_12379_12419 = state_12375__$1;(statearr_12379_12419[(1)] = (2));
} else
{var statearr_12380_12420 = state_12375__$1;(statearr_12380_12420[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (4)))
{var inst_12314 = (state_12375[(9)]);var inst_12320 = (state_12375[(2)]);var inst_12321 = cljs.core.get.call(null,inst_12320,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12322 = cljs.core.get.call(null,inst_12320,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12323 = cljs.core.get.call(null,inst_12320,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12324 = inst_12314;var state_12375__$1 = (function (){var statearr_12381 = state_12375;(statearr_12381[(7)] = inst_12324);
(statearr_12381[(10)] = inst_12321);
(statearr_12381[(11)] = inst_12323);
(statearr_12381[(12)] = inst_12322);
return statearr_12381;
})();var statearr_12382_12421 = state_12375__$1;(statearr_12382_12421[(2)] = null);
(statearr_12382_12421[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (15)))
{var state_12375__$1 = state_12375;var statearr_12383_12422 = state_12375__$1;(statearr_12383_12422[(2)] = null);
(statearr_12383_12422[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (21)))
{var state_12375__$1 = state_12375;var statearr_12384_12423 = state_12375__$1;(statearr_12384_12423[(2)] = null);
(statearr_12384_12423[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (13)))
{var inst_12371 = (state_12375[(2)]);var state_12375__$1 = state_12375;var statearr_12385_12424 = state_12375__$1;(statearr_12385_12424[(2)] = inst_12371);
(statearr_12385_12424[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (22)))
{var inst_12332 = (state_12375[(13)]);var inst_12368 = (state_12375[(2)]);var inst_12324 = inst_12332;var state_12375__$1 = (function (){var statearr_12386 = state_12375;(statearr_12386[(7)] = inst_12324);
(statearr_12386[(14)] = inst_12368);
return statearr_12386;
})();var statearr_12387_12425 = state_12375__$1;(statearr_12387_12425[(2)] = null);
(statearr_12387_12425[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (6)))
{var inst_12373 = (state_12375[(2)]);var state_12375__$1 = state_12375;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12375__$1,inst_12373);
} else
{if((state_val_12376 === (17)))
{var inst_12354 = (state_12375[(15)]);var state_12375__$1 = state_12375;var statearr_12388_12426 = state_12375__$1;(statearr_12388_12426[(2)] = inst_12354);
(statearr_12388_12426[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (3)))
{var inst_12314 = (state_12375[(9)]);var state_12375__$1 = state_12375;var statearr_12389_12427 = state_12375__$1;(statearr_12389_12427[(2)] = inst_12314);
(statearr_12389_12427[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (12)))
{var inst_12354 = (state_12375[(15)]);var inst_12340 = (state_12375[(16)]);var inst_12335 = (state_12375[(17)]);var inst_12354__$1 = inst_12335.call(null,inst_12340);var state_12375__$1 = (function (){var statearr_12390 = state_12375;(statearr_12390[(15)] = inst_12354__$1);
return statearr_12390;
})();if(cljs.core.truth_(inst_12354__$1))
{var statearr_12391_12428 = state_12375__$1;(statearr_12391_12428[(1)] = (17));
} else
{var statearr_12392_12429 = state_12375__$1;(statearr_12392_12429[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (2)))
{var inst_12314 = (state_12375[(9)]);var inst_12317 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12314);var state_12375__$1 = state_12375;var statearr_12393_12430 = state_12375__$1;(statearr_12393_12430[(2)] = inst_12317);
(statearr_12393_12430[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (23)))
{var inst_12365 = (state_12375[(2)]);var state_12375__$1 = state_12375;var statearr_12394_12431 = state_12375__$1;(statearr_12394_12431[(2)] = inst_12365);
(statearr_12394_12431[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (19)))
{var inst_12362 = (state_12375[(2)]);var state_12375__$1 = state_12375;if(cljs.core.truth_(inst_12362))
{var statearr_12395_12432 = state_12375__$1;(statearr_12395_12432[(1)] = (20));
} else
{var statearr_12396_12433 = state_12375__$1;(statearr_12396_12433[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (11)))
{var inst_12339 = (state_12375[(8)]);var inst_12345 = (inst_12339 == null);var state_12375__$1 = state_12375;if(cljs.core.truth_(inst_12345))
{var statearr_12397_12434 = state_12375__$1;(statearr_12397_12434[(1)] = (14));
} else
{var statearr_12398_12435 = state_12375__$1;(statearr_12398_12435[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (9)))
{var inst_12332 = (state_12375[(13)]);var inst_12332__$1 = (state_12375[(2)]);var inst_12333 = cljs.core.get.call(null,inst_12332__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12334 = cljs.core.get.call(null,inst_12332__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12335 = cljs.core.get.call(null,inst_12332__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12375__$1 = (function (){var statearr_12399 = state_12375;(statearr_12399[(13)] = inst_12332__$1);
(statearr_12399[(17)] = inst_12335);
(statearr_12399[(18)] = inst_12334);
return statearr_12399;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12375__$1,(10),inst_12333);
} else
{if((state_val_12376 === (5)))
{var inst_12324 = (state_12375[(7)]);var inst_12327 = cljs.core.seq_QMARK_.call(null,inst_12324);var state_12375__$1 = state_12375;if(inst_12327)
{var statearr_12400_12436 = state_12375__$1;(statearr_12400_12436[(1)] = (7));
} else
{var statearr_12401_12437 = state_12375__$1;(statearr_12401_12437[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (14)))
{var inst_12340 = (state_12375[(16)]);var inst_12347 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12340);var state_12375__$1 = state_12375;var statearr_12402_12438 = state_12375__$1;(statearr_12402_12438[(2)] = inst_12347);
(statearr_12402_12438[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (16)))
{var inst_12350 = (state_12375[(2)]);var inst_12351 = calc_state.call(null);var inst_12324 = inst_12351;var state_12375__$1 = (function (){var statearr_12403 = state_12375;(statearr_12403[(7)] = inst_12324);
(statearr_12403[(19)] = inst_12350);
return statearr_12403;
})();var statearr_12404_12439 = state_12375__$1;(statearr_12404_12439[(2)] = null);
(statearr_12404_12439[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (10)))
{var inst_12339 = (state_12375[(8)]);var inst_12340 = (state_12375[(16)]);var inst_12338 = (state_12375[(2)]);var inst_12339__$1 = cljs.core.nth.call(null,inst_12338,(0),null);var inst_12340__$1 = cljs.core.nth.call(null,inst_12338,(1),null);var inst_12341 = (inst_12339__$1 == null);var inst_12342 = cljs.core._EQ_.call(null,inst_12340__$1,change);var inst_12343 = (inst_12341) || (inst_12342);var state_12375__$1 = (function (){var statearr_12405 = state_12375;(statearr_12405[(8)] = inst_12339__$1);
(statearr_12405[(16)] = inst_12340__$1);
return statearr_12405;
})();if(cljs.core.truth_(inst_12343))
{var statearr_12406_12440 = state_12375__$1;(statearr_12406_12440[(1)] = (11));
} else
{var statearr_12407_12441 = state_12375__$1;(statearr_12407_12441[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (18)))
{var inst_12340 = (state_12375[(16)]);var inst_12335 = (state_12375[(17)]);var inst_12334 = (state_12375[(18)]);var inst_12357 = cljs.core.empty_QMARK_.call(null,inst_12335);var inst_12358 = inst_12334.call(null,inst_12340);var inst_12359 = cljs.core.not.call(null,inst_12358);var inst_12360 = (inst_12357) && (inst_12359);var state_12375__$1 = state_12375;var statearr_12408_12442 = state_12375__$1;(statearr_12408_12442[(2)] = inst_12360);
(statearr_12408_12442[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12376 === (8)))
{var inst_12324 = (state_12375[(7)]);var state_12375__$1 = state_12375;var statearr_12409_12443 = state_12375__$1;(statearr_12409_12443[(2)] = inst_12324);
(statearr_12409_12443[(1)] = (9));
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7018__auto___12417,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__7003__auto__,c__7018__auto___12417,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7004__auto__ = null;
var state_machine__7004__auto____0 = (function (){var statearr_12413 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12413[(0)] = state_machine__7004__auto__);
(statearr_12413[(1)] = (1));
return statearr_12413;
});
var state_machine__7004__auto____1 = (function (state_12375){while(true){
var ret_value__7005__auto__ = (function (){try{while(true){
var result__7006__auto__ = switch__7003__auto__.call(null,state_12375);if(cljs.core.keyword_identical_QMARK_.call(null,result__7006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7006__auto__;
}
break;
}
}catch (e12414){if((e12414 instanceof Object))
{var ex__7007__auto__ = e12414;var statearr_12415_12444 = state_12375;(statearr_12415_12444[(5)] = ex__7007__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12375);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12414;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12445 = state_12375;
state_12375 = G__12445;
continue;
}
} else
{return ret_value__7005__auto__;
}
break;
}
});
state_machine__7004__auto__ = function(state_12375){
switch(arguments.length){
case 0:
return state_machine__7004__auto____0.call(this);
case 1:
return state_machine__7004__auto____1.call(this,state_12375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7004__auto____0;
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7004__auto____1;
return state_machine__7004__auto__;
})()
;})(switch__7003__auto__,c__7018__auto___12417,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__7020__auto__ = (function (){var statearr_12416 = f__7019__auto__.call(null);(statearr_12416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7018__auto___12417);
return statearr_12416;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7020__auto__);
});})(c__7018__auto___12417,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12447 = {};return obj12447;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3543__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3543__auto__,mults){
return (function (p1__12448_SHARP_){if(cljs.core.truth_(p1__12448_SHARP_.call(null,topic)))
{return p1__12448_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12448_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12573 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12573 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12574){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12574 = meta12574;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12573.cljs$lang$type = true;
cljs.core.async.t12573.cljs$lang$ctorStr = "cljs.core.async/t12573";
cljs.core.async.t12573.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t12573");
});})(mults,ensure_mult))
;
cljs.core.async.t12573.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12573.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12573.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12573.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12573.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12573.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12573.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12573.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12575){var self__ = this;
var _12575__$1 = this;return self__.meta12574;
});})(mults,ensure_mult))
;
cljs.core.async.t12573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12575,meta12574__$1){var self__ = this;
var _12575__$1 = this;return (new cljs.core.async.t12573(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12574__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12573 = ((function (mults,ensure_mult){
return (function __GT_t12573(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12574){return (new cljs.core.async.t12573(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12574));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12573(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__7018__auto___12697 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7018__auto___12697,mults,ensure_mult,p){
return (function (){var f__7019__auto__ = (function (){var switch__7003__auto__ = ((function (c__7018__auto___12697,mults,ensure_mult,p){
return (function (state_12649){var state_val_12650 = (state_12649[(1)]);if((state_val_12650 === (7)))
{var inst_12645 = (state_12649[(2)]);var state_12649__$1 = state_12649;var statearr_12651_12698 = state_12649__$1;(statearr_12651_12698[(2)] = inst_12645);
(statearr_12651_12698[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12650 === (20)))
{var state_12649__$1 = state_12649;var statearr_12652_12699 = state_12649__$1;(statearr_12652_12699[(2)] = null);
(statearr_12652_12699[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12650 === (1)))
{var state_12649__$1 = state_12649;var statearr_12653_12700 = state_12649__$1;(statearr_12653_12700[(2)] = null);
(statearr_12653_12700[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12650 === (24)))
{var inst_12628 = (state_12649[(7)]);var inst_12578 = (state_12649[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12649,(23),Object,null,(22));var inst_12635 = cljs.core.async.muxch_STAR_.call(null,inst_12628);var state_12649__$1 = state_12649;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12649__$1,(25),inst_12635,inst_12578);
} else
{if((state_val_12650 === (4)))
{var inst_12578 = (state_12649[(8)]);var inst_12578__$1 = (state_12649[(2)]);var inst_12579 = (inst_12578__$1 == null);var state_12649__$1 = (function (){var statearr_12654 = state_12649;(statearr_12654[(8)] = inst_12578__$1);
return statearr_12654;
})();if(cljs.core.truth_(inst_12579))
{var statearr_12655_12701 = state_12649__$1;(statearr_12655_12701[(1)] = (5));
} else
{var statearr_12656_12702 = state_12649__$1;(statearr_12656_12702[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12650 === (15)))
{var inst_12620 = (state_12649[(2)]);var state_12649__$1 = state_12649;var statearr_12657_12703 = state_12649__$1;(statearr_12657_12703[(2)] = inst_12620);
(statearr_12657_12703[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12650 === (21)))
{var inst_12642 = (state_12649[(2)]);var state_12649__$1 = (function (){var statearr_12658 = state_12649;(statearr_12658[(9)] = inst_12642);
return statearr_12658;
})();var statearr_12659_12704 = state_12649__$1;(statearr_12659_12704[(2)] = null);
(statearr_12659_12704[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12650 === (13)))
{var inst_12602 = (state_12649[(10)]);var inst_12604 = cljs.core.chunked_seq_QMARK_.call(null,inst_12602);var state_12649__$1 = state_12649;if(inst_12604)
{var statearr_12660_12705 = state_12649__$1;(statearr_12660_12705[(1)] = (16));
} else
{var statearr_12661_12706 = state_12649__$1;(statearr_12661_12706[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12650 === (22)))
{var inst_12639 = (state_12649[(2)]);var state_12649__$1 = state_12649;var statearr_12662_12707 = state_12649__$1;(statearr_12662_12707[(2)] = inst_12639);
(statearr_12662_12707[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12650 === (6)))
{var inst_12628 = (state_12649[(7)]);var inst_12578 = (state_12649[(8)]);var inst_12626 = (state_12649[(11)]);var inst_12626__$1 = topic_fn.call(null,inst_12578);var inst_12627 = cljs.core.deref.call(null,mults);var inst_12628__$1 = cljs.core.get.call(null,inst_12627,inst_12626__$1);var state_12649__$1 = (function (){var statearr_12663 = state_12649;(statearr_12663[(7)] = inst_12628__$1);
(statearr_12663[(11)] = inst_12626__$1);
return statearr_12663;
})();if(cljs.core.truth_(inst_12628__$1))
{var statearr_12664_12708 = state_12649__$1;(statearr_12664_12708[(1)] = (19));
} else
{var statearr_12665_12709 = state_12649__$1;(statearr_12665_12709[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12650 === (25)))
{var inst_12637 = (state_12649[(2)]);var state_12649__$1 = state_12649;var statearr_12666_12710 = state_12649__$1;(statearr_12666_12710[(2)] = inst_12637);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12649__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12650 === (17)))
{var inst_12602 = (state_12649[(10)]);var inst_12611 = cljs.core.first.call(null,inst_12602);var inst_12612 = cljs.core.async.muxch_STAR_.call(null,inst_12611);var inst_12613 = cljs.core.async.close_BANG_.call(null,inst_12612);var inst_12614 = cljs.core.next.call(null,inst_12602);var inst_12588 = inst_12614;var inst_12589 = null;var inst_12590 = (0);var inst_12591 = (0);var state_12649__$1 = (function (){var statearr_12667 = state_12649;(statearr_12667[(12)] = inst_12613);
(statearr_12667[(13)] = inst_12591);
(statearr_12667[(14)] = inst_12590);
(statearr_12667[(15)] = inst_12588);
(statearr_12667[(16)] = inst_12589);
return statearr_12667;
})();var statearr_12668_12711 = state_12649__$1;(statearr_12668_12711[(2)] = null);
(statearr_12668_12711[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12650 === (3)))
{var inst_12647 = (state_12649[(2)]);var state_12649__$1 = state_12649;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12649__$1,inst_12647);
} else
{if((state_val_12650 === (12)))
{var inst_12622 = (state_12649[(2)]);var state_12649__$1 = state_12649;var statearr_12669_12712 = state_12649__$1;(statearr_12669_12712[(2)] = inst_12622);
(statearr_12669_12712[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12650 === (2)))
{var state_12649__$1 = state_12649;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12649__$1,(4),ch);
} else
{if((state_val_12650 === (23)))
{var inst_12626 = (state_12649[(11)]);var inst_12630 = (state_12649[(2)]);var inst_12631 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12626);var state_12649__$1 = (function (){var statearr_12670 = state_12649;(statearr_12670[(17)] = inst_12630);
return statearr_12670;
})();var statearr_12671_12713 = state_12649__$1;(statearr_12671_12713[(2)] = inst_12631);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12649__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12650 === (19)))
{var state_12649__$1 = state_12649;var statearr_12672_12714 = state_12649__$1;(statearr_12672_12714[(2)] = null);
(statearr_12672_12714[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12650 === (11)))
{var inst_12602 = (state_12649[(10)]);var inst_12588 = (state_12649[(15)]);var inst_12602__$1 = cljs.core.seq.call(null,inst_12588);var state_12649__$1 = (function (){var statearr_12673 = state_12649;(statearr_12673[(10)] = inst_12602__$1);
return statearr_12673;
})();if(inst_12602__$1)
{var statearr_12674_12715 = state_12649__$1;(statearr_12674_12715[(1)] = (13));
} else
{var statearr_12675_12716 = state_12649__$1;(statearr_12675_12716[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12650 === (9)))
{var inst_12624 = (state_12649[(2)]);var state_12649__$1 = state_12649;var statearr_12676_12717 = state_12649__$1;(statearr_12676_12717[(2)] = inst_12624);
(statearr_12676_12717[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12650 === (5)))
{var inst_12585 = cljs.core.deref.call(null,mults);var inst_12586 = cljs.core.vals.call(null,inst_12585);var inst_12587 = cljs.core.seq.call(null,inst_12586);var inst_12588 = inst_12587;var inst_12589 = null;var inst_12590 = (0);var inst_12591 = (0);var state_12649__$1 = (function (){var statearr_12677 = state_12649;(statearr_12677[(13)] = inst_12591);
(statearr_12677[(14)] = inst_12590);
(statearr_12677[(15)] = inst_12588);
(statearr_12677[(16)] = inst_12589);
return statearr_12677;
})();var statearr_12678_12718 = state_12649__$1;(statearr_12678_12718[(2)] = null);
(statearr_12678_12718[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12650 === (14)))
{var state_12649__$1 = state_12649;var statearr_12682_12719 = state_12649__$1;(statearr_12682_12719[(2)] = null);
(statearr_12682_12719[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12650 === (16)))
{var inst_12602 = (state_12649[(10)]);var inst_12606 = cljs.core.chunk_first.call(null,inst_12602);var inst_12607 = cljs.core.chunk_rest.call(null,inst_12602);var inst_12608 = cljs.core.count.call(null,inst_12606);var inst_12588 = inst_12607;var inst_12589 = inst_12606;var inst_12590 = inst_12608;var inst_12591 = (0);var state_12649__$1 = (function (){var statearr_12683 = state_12649;(statearr_12683[(13)] = inst_12591);
(statearr_12683[(14)] = inst_12590);
(statearr_12683[(15)] = inst_12588);
(statearr_12683[(16)] = inst_12589);
return statearr_12683;
})();var statearr_12684_12720 = state_12649__$1;(statearr_12684_12720[(2)] = null);
(statearr_12684_12720[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12650 === (10)))
{var inst_12591 = (state_12649[(13)]);var inst_12590 = (state_12649[(14)]);var inst_12588 = (state_12649[(15)]);var inst_12589 = (state_12649[(16)]);var inst_12596 = cljs.core._nth.call(null,inst_12589,inst_12591);var inst_12597 = cljs.core.async.muxch_STAR_.call(null,inst_12596);var inst_12598 = cljs.core.async.close_BANG_.call(null,inst_12597);var inst_12599 = (inst_12591 + (1));var tmp12679 = inst_12590;var tmp12680 = inst_12588;var tmp12681 = inst_12589;var inst_12588__$1 = tmp12680;var inst_12589__$1 = tmp12681;var inst_12590__$1 = tmp12679;var inst_12591__$1 = inst_12599;var state_12649__$1 = (function (){var statearr_12685 = state_12649;(statearr_12685[(13)] = inst_12591__$1);
(statearr_12685[(18)] = inst_12598);
(statearr_12685[(14)] = inst_12590__$1);
(statearr_12685[(15)] = inst_12588__$1);
(statearr_12685[(16)] = inst_12589__$1);
return statearr_12685;
})();var statearr_12686_12721 = state_12649__$1;(statearr_12686_12721[(2)] = null);
(statearr_12686_12721[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12650 === (18)))
{var inst_12617 = (state_12649[(2)]);var state_12649__$1 = state_12649;var statearr_12687_12722 = state_12649__$1;(statearr_12687_12722[(2)] = inst_12617);
(statearr_12687_12722[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12650 === (8)))
{var inst_12591 = (state_12649[(13)]);var inst_12590 = (state_12649[(14)]);var inst_12593 = (inst_12591 < inst_12590);var inst_12594 = inst_12593;var state_12649__$1 = state_12649;if(cljs.core.truth_(inst_12594))
{var statearr_12688_12723 = state_12649__$1;(statearr_12688_12723[(1)] = (10));
} else
{var statearr_12689_12724 = state_12649__$1;(statearr_12689_12724[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7018__auto___12697,mults,ensure_mult,p))
;return ((function (switch__7003__auto__,c__7018__auto___12697,mults,ensure_mult,p){
return (function() {
var state_machine__7004__auto__ = null;
var state_machine__7004__auto____0 = (function (){var statearr_12693 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12693[(0)] = state_machine__7004__auto__);
(statearr_12693[(1)] = (1));
return statearr_12693;
});
var state_machine__7004__auto____1 = (function (state_12649){while(true){
var ret_value__7005__auto__ = (function (){try{while(true){
var result__7006__auto__ = switch__7003__auto__.call(null,state_12649);if(cljs.core.keyword_identical_QMARK_.call(null,result__7006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7006__auto__;
}
break;
}
}catch (e12694){if((e12694 instanceof Object))
{var ex__7007__auto__ = e12694;var statearr_12695_12725 = state_12649;(statearr_12695_12725[(5)] = ex__7007__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12649);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12694;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12726 = state_12649;
state_12649 = G__12726;
continue;
}
} else
{return ret_value__7005__auto__;
}
break;
}
});
state_machine__7004__auto__ = function(state_12649){
switch(arguments.length){
case 0:
return state_machine__7004__auto____0.call(this);
case 1:
return state_machine__7004__auto____1.call(this,state_12649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7004__auto____0;
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7004__auto____1;
return state_machine__7004__auto__;
})()
;})(switch__7003__auto__,c__7018__auto___12697,mults,ensure_mult,p))
})();var state__7020__auto__ = (function (){var statearr_12696 = f__7019__auto__.call(null);(statearr_12696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7018__auto___12697);
return statearr_12696;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7020__auto__);
});})(c__7018__auto___12697,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__7018__auto___12863 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7018__auto___12863,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__7019__auto__ = (function (){var switch__7003__auto__ = ((function (c__7018__auto___12863,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12833){var state_val_12834 = (state_12833[(1)]);if((state_val_12834 === (7)))
{var state_12833__$1 = state_12833;var statearr_12835_12864 = state_12833__$1;(statearr_12835_12864[(2)] = null);
(statearr_12835_12864[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12834 === (1)))
{var state_12833__$1 = state_12833;var statearr_12836_12865 = state_12833__$1;(statearr_12836_12865[(2)] = null);
(statearr_12836_12865[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12834 === (4)))
{var inst_12797 = (state_12833[(7)]);var inst_12799 = (inst_12797 < cnt);var state_12833__$1 = state_12833;if(cljs.core.truth_(inst_12799))
{var statearr_12837_12866 = state_12833__$1;(statearr_12837_12866[(1)] = (6));
} else
{var statearr_12838_12867 = state_12833__$1;(statearr_12838_12867[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12834 === (15)))
{var inst_12829 = (state_12833[(2)]);var state_12833__$1 = state_12833;var statearr_12839_12868 = state_12833__$1;(statearr_12839_12868[(2)] = inst_12829);
(statearr_12839_12868[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12834 === (13)))
{var inst_12822 = cljs.core.async.close_BANG_.call(null,out);var state_12833__$1 = state_12833;var statearr_12840_12869 = state_12833__$1;(statearr_12840_12869[(2)] = inst_12822);
(statearr_12840_12869[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12834 === (6)))
{var state_12833__$1 = state_12833;var statearr_12841_12870 = state_12833__$1;(statearr_12841_12870[(2)] = null);
(statearr_12841_12870[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12834 === (3)))
{var inst_12831 = (state_12833[(2)]);var state_12833__$1 = state_12833;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12833__$1,inst_12831);
} else
{if((state_val_12834 === (12)))
{var inst_12819 = (state_12833[(8)]);var inst_12819__$1 = (state_12833[(2)]);var inst_12820 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12819__$1);var state_12833__$1 = (function (){var statearr_12842 = state_12833;(statearr_12842[(8)] = inst_12819__$1);
return statearr_12842;
})();if(cljs.core.truth_(inst_12820))
{var statearr_12843_12871 = state_12833__$1;(statearr_12843_12871[(1)] = (13));
} else
{var statearr_12844_12872 = state_12833__$1;(statearr_12844_12872[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12834 === (2)))
{var inst_12796 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12797 = (0);var state_12833__$1 = (function (){var statearr_12845 = state_12833;(statearr_12845[(9)] = inst_12796);
(statearr_12845[(7)] = inst_12797);
return statearr_12845;
})();var statearr_12846_12873 = state_12833__$1;(statearr_12846_12873[(2)] = null);
(statearr_12846_12873[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12834 === (11)))
{var inst_12797 = (state_12833[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12833,(10),Object,null,(9));var inst_12806 = chs__$1.call(null,inst_12797);var inst_12807 = done.call(null,inst_12797);var inst_12808 = cljs.core.async.take_BANG_.call(null,inst_12806,inst_12807);var state_12833__$1 = state_12833;var statearr_12847_12874 = state_12833__$1;(statearr_12847_12874[(2)] = inst_12808);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12833__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12834 === (9)))
{var inst_12797 = (state_12833[(7)]);var inst_12810 = (state_12833[(2)]);var inst_12811 = (inst_12797 + (1));var inst_12797__$1 = inst_12811;var state_12833__$1 = (function (){var statearr_12848 = state_12833;(statearr_12848[(7)] = inst_12797__$1);
(statearr_12848[(10)] = inst_12810);
return statearr_12848;
})();var statearr_12849_12875 = state_12833__$1;(statearr_12849_12875[(2)] = null);
(statearr_12849_12875[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12834 === (5)))
{var inst_12817 = (state_12833[(2)]);var state_12833__$1 = (function (){var statearr_12850 = state_12833;(statearr_12850[(11)] = inst_12817);
return statearr_12850;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12833__$1,(12),dchan);
} else
{if((state_val_12834 === (14)))
{var inst_12819 = (state_12833[(8)]);var inst_12824 = cljs.core.apply.call(null,f,inst_12819);var state_12833__$1 = state_12833;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12833__$1,(16),out,inst_12824);
} else
{if((state_val_12834 === (16)))
{var inst_12826 = (state_12833[(2)]);var state_12833__$1 = (function (){var statearr_12851 = state_12833;(statearr_12851[(12)] = inst_12826);
return statearr_12851;
})();var statearr_12852_12876 = state_12833__$1;(statearr_12852_12876[(2)] = null);
(statearr_12852_12876[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12834 === (10)))
{var inst_12801 = (state_12833[(2)]);var inst_12802 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12833__$1 = (function (){var statearr_12853 = state_12833;(statearr_12853[(13)] = inst_12801);
return statearr_12853;
})();var statearr_12854_12877 = state_12833__$1;(statearr_12854_12877[(2)] = inst_12802);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12833__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12834 === (8)))
{var inst_12815 = (state_12833[(2)]);var state_12833__$1 = state_12833;var statearr_12855_12878 = state_12833__$1;(statearr_12855_12878[(2)] = inst_12815);
(statearr_12855_12878[(1)] = (5));
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
}
}
}
}
}
}
}
}
}
});})(c__7018__auto___12863,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__7003__auto__,c__7018__auto___12863,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7004__auto__ = null;
var state_machine__7004__auto____0 = (function (){var statearr_12859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12859[(0)] = state_machine__7004__auto__);
(statearr_12859[(1)] = (1));
return statearr_12859;
});
var state_machine__7004__auto____1 = (function (state_12833){while(true){
var ret_value__7005__auto__ = (function (){try{while(true){
var result__7006__auto__ = switch__7003__auto__.call(null,state_12833);if(cljs.core.keyword_identical_QMARK_.call(null,result__7006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7006__auto__;
}
break;
}
}catch (e12860){if((e12860 instanceof Object))
{var ex__7007__auto__ = e12860;var statearr_12861_12879 = state_12833;(statearr_12861_12879[(5)] = ex__7007__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12833);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12860;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12880 = state_12833;
state_12833 = G__12880;
continue;
}
} else
{return ret_value__7005__auto__;
}
break;
}
});
state_machine__7004__auto__ = function(state_12833){
switch(arguments.length){
case 0:
return state_machine__7004__auto____0.call(this);
case 1:
return state_machine__7004__auto____1.call(this,state_12833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7004__auto____0;
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7004__auto____1;
return state_machine__7004__auto__;
})()
;})(switch__7003__auto__,c__7018__auto___12863,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__7020__auto__ = (function (){var statearr_12862 = f__7019__auto__.call(null);(statearr_12862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7018__auto___12863);
return statearr_12862;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7020__auto__);
});})(c__7018__auto___12863,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7018__auto___12988 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7018__auto___12988,out){
return (function (){var f__7019__auto__ = (function (){var switch__7003__auto__ = ((function (c__7018__auto___12988,out){
return (function (state_12964){var state_val_12965 = (state_12964[(1)]);if((state_val_12965 === (7)))
{var inst_12944 = (state_12964[(7)]);var inst_12943 = (state_12964[(8)]);var inst_12943__$1 = (state_12964[(2)]);var inst_12944__$1 = cljs.core.nth.call(null,inst_12943__$1,(0),null);var inst_12945 = cljs.core.nth.call(null,inst_12943__$1,(1),null);var inst_12946 = (inst_12944__$1 == null);var state_12964__$1 = (function (){var statearr_12966 = state_12964;(statearr_12966[(9)] = inst_12945);
(statearr_12966[(7)] = inst_12944__$1);
(statearr_12966[(8)] = inst_12943__$1);
return statearr_12966;
})();if(cljs.core.truth_(inst_12946))
{var statearr_12967_12989 = state_12964__$1;(statearr_12967_12989[(1)] = (8));
} else
{var statearr_12968_12990 = state_12964__$1;(statearr_12968_12990[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12965 === (1)))
{var inst_12935 = cljs.core.vec.call(null,chs);var inst_12936 = inst_12935;var state_12964__$1 = (function (){var statearr_12969 = state_12964;(statearr_12969[(10)] = inst_12936);
return statearr_12969;
})();var statearr_12970_12991 = state_12964__$1;(statearr_12970_12991[(2)] = null);
(statearr_12970_12991[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12965 === (4)))
{var inst_12936 = (state_12964[(10)]);var state_12964__$1 = state_12964;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12964__$1,(7),inst_12936);
} else
{if((state_val_12965 === (6)))
{var inst_12960 = (state_12964[(2)]);var state_12964__$1 = state_12964;var statearr_12971_12992 = state_12964__$1;(statearr_12971_12992[(2)] = inst_12960);
(statearr_12971_12992[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12965 === (3)))
{var inst_12962 = (state_12964[(2)]);var state_12964__$1 = state_12964;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12964__$1,inst_12962);
} else
{if((state_val_12965 === (2)))
{var inst_12936 = (state_12964[(10)]);var inst_12938 = cljs.core.count.call(null,inst_12936);var inst_12939 = (inst_12938 > (0));var state_12964__$1 = state_12964;if(cljs.core.truth_(inst_12939))
{var statearr_12973_12993 = state_12964__$1;(statearr_12973_12993[(1)] = (4));
} else
{var statearr_12974_12994 = state_12964__$1;(statearr_12974_12994[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12965 === (11)))
{var inst_12936 = (state_12964[(10)]);var inst_12953 = (state_12964[(2)]);var tmp12972 = inst_12936;var inst_12936__$1 = tmp12972;var state_12964__$1 = (function (){var statearr_12975 = state_12964;(statearr_12975[(10)] = inst_12936__$1);
(statearr_12975[(11)] = inst_12953);
return statearr_12975;
})();var statearr_12976_12995 = state_12964__$1;(statearr_12976_12995[(2)] = null);
(statearr_12976_12995[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12965 === (9)))
{var inst_12944 = (state_12964[(7)]);var state_12964__$1 = state_12964;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12964__$1,(11),out,inst_12944);
} else
{if((state_val_12965 === (5)))
{var inst_12958 = cljs.core.async.close_BANG_.call(null,out);var state_12964__$1 = state_12964;var statearr_12977_12996 = state_12964__$1;(statearr_12977_12996[(2)] = inst_12958);
(statearr_12977_12996[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12965 === (10)))
{var inst_12956 = (state_12964[(2)]);var state_12964__$1 = state_12964;var statearr_12978_12997 = state_12964__$1;(statearr_12978_12997[(2)] = inst_12956);
(statearr_12978_12997[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12965 === (8)))
{var inst_12945 = (state_12964[(9)]);var inst_12944 = (state_12964[(7)]);var inst_12936 = (state_12964[(10)]);var inst_12943 = (state_12964[(8)]);var inst_12948 = (function (){var c = inst_12945;var v = inst_12944;var vec__12941 = inst_12943;var cs = inst_12936;return ((function (c,v,vec__12941,cs,inst_12945,inst_12944,inst_12936,inst_12943,state_val_12965,c__7018__auto___12988,out){
return (function (p1__12881_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12881_SHARP_);
});
;})(c,v,vec__12941,cs,inst_12945,inst_12944,inst_12936,inst_12943,state_val_12965,c__7018__auto___12988,out))
})();var inst_12949 = cljs.core.filterv.call(null,inst_12948,inst_12936);var inst_12936__$1 = inst_12949;var state_12964__$1 = (function (){var statearr_12979 = state_12964;(statearr_12979[(10)] = inst_12936__$1);
return statearr_12979;
})();var statearr_12980_12998 = state_12964__$1;(statearr_12980_12998[(2)] = null);
(statearr_12980_12998[(1)] = (2));
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
}
}
}
}
});})(c__7018__auto___12988,out))
;return ((function (switch__7003__auto__,c__7018__auto___12988,out){
return (function() {
var state_machine__7004__auto__ = null;
var state_machine__7004__auto____0 = (function (){var statearr_12984 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12984[(0)] = state_machine__7004__auto__);
(statearr_12984[(1)] = (1));
return statearr_12984;
});
var state_machine__7004__auto____1 = (function (state_12964){while(true){
var ret_value__7005__auto__ = (function (){try{while(true){
var result__7006__auto__ = switch__7003__auto__.call(null,state_12964);if(cljs.core.keyword_identical_QMARK_.call(null,result__7006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7006__auto__;
}
break;
}
}catch (e12985){if((e12985 instanceof Object))
{var ex__7007__auto__ = e12985;var statearr_12986_12999 = state_12964;(statearr_12986_12999[(5)] = ex__7007__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12964);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12985;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13000 = state_12964;
state_12964 = G__13000;
continue;
}
} else
{return ret_value__7005__auto__;
}
break;
}
});
state_machine__7004__auto__ = function(state_12964){
switch(arguments.length){
case 0:
return state_machine__7004__auto____0.call(this);
case 1:
return state_machine__7004__auto____1.call(this,state_12964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7004__auto____0;
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7004__auto____1;
return state_machine__7004__auto__;
})()
;})(switch__7003__auto__,c__7018__auto___12988,out))
})();var state__7020__auto__ = (function (){var statearr_12987 = f__7019__auto__.call(null);(statearr_12987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7018__auto___12988);
return statearr_12987;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7020__auto__);
});})(c__7018__auto___12988,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7018__auto___13093 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7018__auto___13093,out){
return (function (){var f__7019__auto__ = (function (){var switch__7003__auto__ = ((function (c__7018__auto___13093,out){
return (function (state_13070){var state_val_13071 = (state_13070[(1)]);if((state_val_13071 === (7)))
{var inst_13052 = (state_13070[(7)]);var inst_13052__$1 = (state_13070[(2)]);var inst_13053 = (inst_13052__$1 == null);var inst_13054 = cljs.core.not.call(null,inst_13053);var state_13070__$1 = (function (){var statearr_13072 = state_13070;(statearr_13072[(7)] = inst_13052__$1);
return statearr_13072;
})();if(inst_13054)
{var statearr_13073_13094 = state_13070__$1;(statearr_13073_13094[(1)] = (8));
} else
{var statearr_13074_13095 = state_13070__$1;(statearr_13074_13095[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13071 === (1)))
{var inst_13047 = (0);var state_13070__$1 = (function (){var statearr_13075 = state_13070;(statearr_13075[(8)] = inst_13047);
return statearr_13075;
})();var statearr_13076_13096 = state_13070__$1;(statearr_13076_13096[(2)] = null);
(statearr_13076_13096[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13071 === (4)))
{var state_13070__$1 = state_13070;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13070__$1,(7),ch);
} else
{if((state_val_13071 === (6)))
{var inst_13065 = (state_13070[(2)]);var state_13070__$1 = state_13070;var statearr_13077_13097 = state_13070__$1;(statearr_13077_13097[(2)] = inst_13065);
(statearr_13077_13097[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13071 === (3)))
{var inst_13067 = (state_13070[(2)]);var inst_13068 = cljs.core.async.close_BANG_.call(null,out);var state_13070__$1 = (function (){var statearr_13078 = state_13070;(statearr_13078[(9)] = inst_13067);
return statearr_13078;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13070__$1,inst_13068);
} else
{if((state_val_13071 === (2)))
{var inst_13047 = (state_13070[(8)]);var inst_13049 = (inst_13047 < n);var state_13070__$1 = state_13070;if(cljs.core.truth_(inst_13049))
{var statearr_13079_13098 = state_13070__$1;(statearr_13079_13098[(1)] = (4));
} else
{var statearr_13080_13099 = state_13070__$1;(statearr_13080_13099[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13071 === (11)))
{var inst_13047 = (state_13070[(8)]);var inst_13057 = (state_13070[(2)]);var inst_13058 = (inst_13047 + (1));var inst_13047__$1 = inst_13058;var state_13070__$1 = (function (){var statearr_13081 = state_13070;(statearr_13081[(8)] = inst_13047__$1);
(statearr_13081[(10)] = inst_13057);
return statearr_13081;
})();var statearr_13082_13100 = state_13070__$1;(statearr_13082_13100[(2)] = null);
(statearr_13082_13100[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13071 === (9)))
{var state_13070__$1 = state_13070;var statearr_13083_13101 = state_13070__$1;(statearr_13083_13101[(2)] = null);
(statearr_13083_13101[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13071 === (5)))
{var state_13070__$1 = state_13070;var statearr_13084_13102 = state_13070__$1;(statearr_13084_13102[(2)] = null);
(statearr_13084_13102[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13071 === (10)))
{var inst_13062 = (state_13070[(2)]);var state_13070__$1 = state_13070;var statearr_13085_13103 = state_13070__$1;(statearr_13085_13103[(2)] = inst_13062);
(statearr_13085_13103[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13071 === (8)))
{var inst_13052 = (state_13070[(7)]);var state_13070__$1 = state_13070;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13070__$1,(11),out,inst_13052);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7018__auto___13093,out))
;return ((function (switch__7003__auto__,c__7018__auto___13093,out){
return (function() {
var state_machine__7004__auto__ = null;
var state_machine__7004__auto____0 = (function (){var statearr_13089 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13089[(0)] = state_machine__7004__auto__);
(statearr_13089[(1)] = (1));
return statearr_13089;
});
var state_machine__7004__auto____1 = (function (state_13070){while(true){
var ret_value__7005__auto__ = (function (){try{while(true){
var result__7006__auto__ = switch__7003__auto__.call(null,state_13070);if(cljs.core.keyword_identical_QMARK_.call(null,result__7006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7006__auto__;
}
break;
}
}catch (e13090){if((e13090 instanceof Object))
{var ex__7007__auto__ = e13090;var statearr_13091_13104 = state_13070;(statearr_13091_13104[(5)] = ex__7007__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13070);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13090;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13105 = state_13070;
state_13070 = G__13105;
continue;
}
} else
{return ret_value__7005__auto__;
}
break;
}
});
state_machine__7004__auto__ = function(state_13070){
switch(arguments.length){
case 0:
return state_machine__7004__auto____0.call(this);
case 1:
return state_machine__7004__auto____1.call(this,state_13070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7004__auto____0;
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7004__auto____1;
return state_machine__7004__auto__;
})()
;})(switch__7003__auto__,c__7018__auto___13093,out))
})();var state__7020__auto__ = (function (){var statearr_13092 = f__7019__auto__.call(null);(statearr_13092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7018__auto___13093);
return statearr_13092;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7020__auto__);
});})(c__7018__auto___13093,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7018__auto___13202 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7018__auto___13202,out){
return (function (){var f__7019__auto__ = (function (){var switch__7003__auto__ = ((function (c__7018__auto___13202,out){
return (function (state_13177){var state_val_13178 = (state_13177[(1)]);if((state_val_13178 === (7)))
{var inst_13172 = (state_13177[(2)]);var state_13177__$1 = state_13177;var statearr_13179_13203 = state_13177__$1;(statearr_13179_13203[(2)] = inst_13172);
(statearr_13179_13203[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (1)))
{var inst_13154 = null;var state_13177__$1 = (function (){var statearr_13180 = state_13177;(statearr_13180[(7)] = inst_13154);
return statearr_13180;
})();var statearr_13181_13204 = state_13177__$1;(statearr_13181_13204[(2)] = null);
(statearr_13181_13204[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (4)))
{var inst_13157 = (state_13177[(8)]);var inst_13157__$1 = (state_13177[(2)]);var inst_13158 = (inst_13157__$1 == null);var inst_13159 = cljs.core.not.call(null,inst_13158);var state_13177__$1 = (function (){var statearr_13182 = state_13177;(statearr_13182[(8)] = inst_13157__$1);
return statearr_13182;
})();if(inst_13159)
{var statearr_13183_13205 = state_13177__$1;(statearr_13183_13205[(1)] = (5));
} else
{var statearr_13184_13206 = state_13177__$1;(statearr_13184_13206[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (6)))
{var state_13177__$1 = state_13177;var statearr_13185_13207 = state_13177__$1;(statearr_13185_13207[(2)] = null);
(statearr_13185_13207[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (3)))
{var inst_13174 = (state_13177[(2)]);var inst_13175 = cljs.core.async.close_BANG_.call(null,out);var state_13177__$1 = (function (){var statearr_13186 = state_13177;(statearr_13186[(9)] = inst_13174);
return statearr_13186;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13177__$1,inst_13175);
} else
{if((state_val_13178 === (2)))
{var state_13177__$1 = state_13177;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13177__$1,(4),ch);
} else
{if((state_val_13178 === (11)))
{var inst_13157 = (state_13177[(8)]);var inst_13166 = (state_13177[(2)]);var inst_13154 = inst_13157;var state_13177__$1 = (function (){var statearr_13187 = state_13177;(statearr_13187[(10)] = inst_13166);
(statearr_13187[(7)] = inst_13154);
return statearr_13187;
})();var statearr_13188_13208 = state_13177__$1;(statearr_13188_13208[(2)] = null);
(statearr_13188_13208[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (9)))
{var inst_13157 = (state_13177[(8)]);var state_13177__$1 = state_13177;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13177__$1,(11),out,inst_13157);
} else
{if((state_val_13178 === (5)))
{var inst_13157 = (state_13177[(8)]);var inst_13154 = (state_13177[(7)]);var inst_13161 = cljs.core._EQ_.call(null,inst_13157,inst_13154);var state_13177__$1 = state_13177;if(inst_13161)
{var statearr_13190_13209 = state_13177__$1;(statearr_13190_13209[(1)] = (8));
} else
{var statearr_13191_13210 = state_13177__$1;(statearr_13191_13210[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (10)))
{var inst_13169 = (state_13177[(2)]);var state_13177__$1 = state_13177;var statearr_13192_13211 = state_13177__$1;(statearr_13192_13211[(2)] = inst_13169);
(statearr_13192_13211[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13178 === (8)))
{var inst_13154 = (state_13177[(7)]);var tmp13189 = inst_13154;var inst_13154__$1 = tmp13189;var state_13177__$1 = (function (){var statearr_13193 = state_13177;(statearr_13193[(7)] = inst_13154__$1);
return statearr_13193;
})();var statearr_13194_13212 = state_13177__$1;(statearr_13194_13212[(2)] = null);
(statearr_13194_13212[(1)] = (2));
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
}
}
}
}
});})(c__7018__auto___13202,out))
;return ((function (switch__7003__auto__,c__7018__auto___13202,out){
return (function() {
var state_machine__7004__auto__ = null;
var state_machine__7004__auto____0 = (function (){var statearr_13198 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13198[(0)] = state_machine__7004__auto__);
(statearr_13198[(1)] = (1));
return statearr_13198;
});
var state_machine__7004__auto____1 = (function (state_13177){while(true){
var ret_value__7005__auto__ = (function (){try{while(true){
var result__7006__auto__ = switch__7003__auto__.call(null,state_13177);if(cljs.core.keyword_identical_QMARK_.call(null,result__7006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7006__auto__;
}
break;
}
}catch (e13199){if((e13199 instanceof Object))
{var ex__7007__auto__ = e13199;var statearr_13200_13213 = state_13177;(statearr_13200_13213[(5)] = ex__7007__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13177);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13199;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13214 = state_13177;
state_13177 = G__13214;
continue;
}
} else
{return ret_value__7005__auto__;
}
break;
}
});
state_machine__7004__auto__ = function(state_13177){
switch(arguments.length){
case 0:
return state_machine__7004__auto____0.call(this);
case 1:
return state_machine__7004__auto____1.call(this,state_13177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7004__auto____0;
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7004__auto____1;
return state_machine__7004__auto__;
})()
;})(switch__7003__auto__,c__7018__auto___13202,out))
})();var state__7020__auto__ = (function (){var statearr_13201 = f__7019__auto__.call(null);(statearr_13201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7018__auto___13202);
return statearr_13201;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7020__auto__);
});})(c__7018__auto___13202,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7018__auto___13349 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7018__auto___13349,out){
return (function (){var f__7019__auto__ = (function (){var switch__7003__auto__ = ((function (c__7018__auto___13349,out){
return (function (state_13319){var state_val_13320 = (state_13319[(1)]);if((state_val_13320 === (7)))
{var inst_13315 = (state_13319[(2)]);var state_13319__$1 = state_13319;var statearr_13321_13350 = state_13319__$1;(statearr_13321_13350[(2)] = inst_13315);
(statearr_13321_13350[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (1)))
{var inst_13282 = (new Array(n));var inst_13283 = inst_13282;var inst_13284 = (0);var state_13319__$1 = (function (){var statearr_13322 = state_13319;(statearr_13322[(7)] = inst_13284);
(statearr_13322[(8)] = inst_13283);
return statearr_13322;
})();var statearr_13323_13351 = state_13319__$1;(statearr_13323_13351[(2)] = null);
(statearr_13323_13351[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (4)))
{var inst_13287 = (state_13319[(9)]);var inst_13287__$1 = (state_13319[(2)]);var inst_13288 = (inst_13287__$1 == null);var inst_13289 = cljs.core.not.call(null,inst_13288);var state_13319__$1 = (function (){var statearr_13324 = state_13319;(statearr_13324[(9)] = inst_13287__$1);
return statearr_13324;
})();if(inst_13289)
{var statearr_13325_13352 = state_13319__$1;(statearr_13325_13352[(1)] = (5));
} else
{var statearr_13326_13353 = state_13319__$1;(statearr_13326_13353[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (15)))
{var inst_13309 = (state_13319[(2)]);var state_13319__$1 = state_13319;var statearr_13327_13354 = state_13319__$1;(statearr_13327_13354[(2)] = inst_13309);
(statearr_13327_13354[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (13)))
{var state_13319__$1 = state_13319;var statearr_13328_13355 = state_13319__$1;(statearr_13328_13355[(2)] = null);
(statearr_13328_13355[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (6)))
{var inst_13284 = (state_13319[(7)]);var inst_13305 = (inst_13284 > (0));var state_13319__$1 = state_13319;if(cljs.core.truth_(inst_13305))
{var statearr_13329_13356 = state_13319__$1;(statearr_13329_13356[(1)] = (12));
} else
{var statearr_13330_13357 = state_13319__$1;(statearr_13330_13357[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (3)))
{var inst_13317 = (state_13319[(2)]);var state_13319__$1 = state_13319;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13319__$1,inst_13317);
} else
{if((state_val_13320 === (12)))
{var inst_13283 = (state_13319[(8)]);var inst_13307 = cljs.core.vec.call(null,inst_13283);var state_13319__$1 = state_13319;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13319__$1,(15),out,inst_13307);
} else
{if((state_val_13320 === (2)))
{var state_13319__$1 = state_13319;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13319__$1,(4),ch);
} else
{if((state_val_13320 === (11)))
{var inst_13299 = (state_13319[(2)]);var inst_13300 = (new Array(n));var inst_13283 = inst_13300;var inst_13284 = (0);var state_13319__$1 = (function (){var statearr_13331 = state_13319;(statearr_13331[(7)] = inst_13284);
(statearr_13331[(8)] = inst_13283);
(statearr_13331[(10)] = inst_13299);
return statearr_13331;
})();var statearr_13332_13358 = state_13319__$1;(statearr_13332_13358[(2)] = null);
(statearr_13332_13358[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (9)))
{var inst_13283 = (state_13319[(8)]);var inst_13297 = cljs.core.vec.call(null,inst_13283);var state_13319__$1 = state_13319;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13319__$1,(11),out,inst_13297);
} else
{if((state_val_13320 === (5)))
{var inst_13284 = (state_13319[(7)]);var inst_13287 = (state_13319[(9)]);var inst_13283 = (state_13319[(8)]);var inst_13292 = (state_13319[(11)]);var inst_13291 = (inst_13283[inst_13284] = inst_13287);var inst_13292__$1 = (inst_13284 + (1));var inst_13293 = (inst_13292__$1 < n);var state_13319__$1 = (function (){var statearr_13333 = state_13319;(statearr_13333[(12)] = inst_13291);
(statearr_13333[(11)] = inst_13292__$1);
return statearr_13333;
})();if(cljs.core.truth_(inst_13293))
{var statearr_13334_13359 = state_13319__$1;(statearr_13334_13359[(1)] = (8));
} else
{var statearr_13335_13360 = state_13319__$1;(statearr_13335_13360[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (14)))
{var inst_13312 = (state_13319[(2)]);var inst_13313 = cljs.core.async.close_BANG_.call(null,out);var state_13319__$1 = (function (){var statearr_13337 = state_13319;(statearr_13337[(13)] = inst_13312);
return statearr_13337;
})();var statearr_13338_13361 = state_13319__$1;(statearr_13338_13361[(2)] = inst_13313);
(statearr_13338_13361[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (10)))
{var inst_13303 = (state_13319[(2)]);var state_13319__$1 = state_13319;var statearr_13339_13362 = state_13319__$1;(statearr_13339_13362[(2)] = inst_13303);
(statearr_13339_13362[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (8)))
{var inst_13283 = (state_13319[(8)]);var inst_13292 = (state_13319[(11)]);var tmp13336 = inst_13283;var inst_13283__$1 = tmp13336;var inst_13284 = inst_13292;var state_13319__$1 = (function (){var statearr_13340 = state_13319;(statearr_13340[(7)] = inst_13284);
(statearr_13340[(8)] = inst_13283__$1);
return statearr_13340;
})();var statearr_13341_13363 = state_13319__$1;(statearr_13341_13363[(2)] = null);
(statearr_13341_13363[(1)] = (2));
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
}
}
}
}
}
}
}
}
});})(c__7018__auto___13349,out))
;return ((function (switch__7003__auto__,c__7018__auto___13349,out){
return (function() {
var state_machine__7004__auto__ = null;
var state_machine__7004__auto____0 = (function (){var statearr_13345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13345[(0)] = state_machine__7004__auto__);
(statearr_13345[(1)] = (1));
return statearr_13345;
});
var state_machine__7004__auto____1 = (function (state_13319){while(true){
var ret_value__7005__auto__ = (function (){try{while(true){
var result__7006__auto__ = switch__7003__auto__.call(null,state_13319);if(cljs.core.keyword_identical_QMARK_.call(null,result__7006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7006__auto__;
}
break;
}
}catch (e13346){if((e13346 instanceof Object))
{var ex__7007__auto__ = e13346;var statearr_13347_13364 = state_13319;(statearr_13347_13364[(5)] = ex__7007__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13319);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13346;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13365 = state_13319;
state_13319 = G__13365;
continue;
}
} else
{return ret_value__7005__auto__;
}
break;
}
});
state_machine__7004__auto__ = function(state_13319){
switch(arguments.length){
case 0:
return state_machine__7004__auto____0.call(this);
case 1:
return state_machine__7004__auto____1.call(this,state_13319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7004__auto____0;
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7004__auto____1;
return state_machine__7004__auto__;
})()
;})(switch__7003__auto__,c__7018__auto___13349,out))
})();var state__7020__auto__ = (function (){var statearr_13348 = f__7019__auto__.call(null);(statearr_13348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7018__auto___13349);
return statearr_13348;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7020__auto__);
});})(c__7018__auto___13349,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7018__auto___13508 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7018__auto___13508,out){
return (function (){var f__7019__auto__ = (function (){var switch__7003__auto__ = ((function (c__7018__auto___13508,out){
return (function (state_13478){var state_val_13479 = (state_13478[(1)]);if((state_val_13479 === (7)))
{var inst_13474 = (state_13478[(2)]);var state_13478__$1 = state_13478;var statearr_13480_13509 = state_13478__$1;(statearr_13480_13509[(2)] = inst_13474);
(statearr_13480_13509[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13479 === (1)))
{var inst_13437 = [];var inst_13438 = inst_13437;var inst_13439 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_13478__$1 = (function (){var statearr_13481 = state_13478;(statearr_13481[(7)] = inst_13439);
(statearr_13481[(8)] = inst_13438);
return statearr_13481;
})();var statearr_13482_13510 = state_13478__$1;(statearr_13482_13510[(2)] = null);
(statearr_13482_13510[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13479 === (4)))
{var inst_13442 = (state_13478[(9)]);var inst_13442__$1 = (state_13478[(2)]);var inst_13443 = (inst_13442__$1 == null);var inst_13444 = cljs.core.not.call(null,inst_13443);var state_13478__$1 = (function (){var statearr_13483 = state_13478;(statearr_13483[(9)] = inst_13442__$1);
return statearr_13483;
})();if(inst_13444)
{var statearr_13484_13511 = state_13478__$1;(statearr_13484_13511[(1)] = (5));
} else
{var statearr_13485_13512 = state_13478__$1;(statearr_13485_13512[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13479 === (15)))
{var inst_13468 = (state_13478[(2)]);var state_13478__$1 = state_13478;var statearr_13486_13513 = state_13478__$1;(statearr_13486_13513[(2)] = inst_13468);
(statearr_13486_13513[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13479 === (13)))
{var state_13478__$1 = state_13478;var statearr_13487_13514 = state_13478__$1;(statearr_13487_13514[(2)] = null);
(statearr_13487_13514[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13479 === (6)))
{var inst_13438 = (state_13478[(8)]);var inst_13463 = inst_13438.length;var inst_13464 = (inst_13463 > (0));var state_13478__$1 = state_13478;if(cljs.core.truth_(inst_13464))
{var statearr_13488_13515 = state_13478__$1;(statearr_13488_13515[(1)] = (12));
} else
{var statearr_13489_13516 = state_13478__$1;(statearr_13489_13516[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13479 === (3)))
{var inst_13476 = (state_13478[(2)]);var state_13478__$1 = state_13478;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13478__$1,inst_13476);
} else
{if((state_val_13479 === (12)))
{var inst_13438 = (state_13478[(8)]);var inst_13466 = cljs.core.vec.call(null,inst_13438);var state_13478__$1 = state_13478;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13478__$1,(15),out,inst_13466);
} else
{if((state_val_13479 === (2)))
{var state_13478__$1 = state_13478;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13478__$1,(4),ch);
} else
{if((state_val_13479 === (11)))
{var inst_13446 = (state_13478[(10)]);var inst_13442 = (state_13478[(9)]);var inst_13456 = (state_13478[(2)]);var inst_13457 = [];var inst_13458 = inst_13457.push(inst_13442);var inst_13438 = inst_13457;var inst_13439 = inst_13446;var state_13478__$1 = (function (){var statearr_13490 = state_13478;(statearr_13490[(11)] = inst_13456);
(statearr_13490[(7)] = inst_13439);
(statearr_13490[(8)] = inst_13438);
(statearr_13490[(12)] = inst_13458);
return statearr_13490;
})();var statearr_13491_13517 = state_13478__$1;(statearr_13491_13517[(2)] = null);
(statearr_13491_13517[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13479 === (9)))
{var inst_13438 = (state_13478[(8)]);var inst_13454 = cljs.core.vec.call(null,inst_13438);var state_13478__$1 = state_13478;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13478__$1,(11),out,inst_13454);
} else
{if((state_val_13479 === (5)))
{var inst_13439 = (state_13478[(7)]);var inst_13446 = (state_13478[(10)]);var inst_13442 = (state_13478[(9)]);var inst_13446__$1 = f.call(null,inst_13442);var inst_13447 = cljs.core._EQ_.call(null,inst_13446__$1,inst_13439);var inst_13448 = cljs.core.keyword_identical_QMARK_.call(null,inst_13439,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_13449 = (inst_13447) || (inst_13448);var state_13478__$1 = (function (){var statearr_13492 = state_13478;(statearr_13492[(10)] = inst_13446__$1);
return statearr_13492;
})();if(cljs.core.truth_(inst_13449))
{var statearr_13493_13518 = state_13478__$1;(statearr_13493_13518[(1)] = (8));
} else
{var statearr_13494_13519 = state_13478__$1;(statearr_13494_13519[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13479 === (14)))
{var inst_13471 = (state_13478[(2)]);var inst_13472 = cljs.core.async.close_BANG_.call(null,out);var state_13478__$1 = (function (){var statearr_13496 = state_13478;(statearr_13496[(13)] = inst_13471);
return statearr_13496;
})();var statearr_13497_13520 = state_13478__$1;(statearr_13497_13520[(2)] = inst_13472);
(statearr_13497_13520[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13479 === (10)))
{var inst_13461 = (state_13478[(2)]);var state_13478__$1 = state_13478;var statearr_13498_13521 = state_13478__$1;(statearr_13498_13521[(2)] = inst_13461);
(statearr_13498_13521[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13479 === (8)))
{var inst_13438 = (state_13478[(8)]);var inst_13446 = (state_13478[(10)]);var inst_13442 = (state_13478[(9)]);var inst_13451 = inst_13438.push(inst_13442);var tmp13495 = inst_13438;var inst_13438__$1 = tmp13495;var inst_13439 = inst_13446;var state_13478__$1 = (function (){var statearr_13499 = state_13478;(statearr_13499[(14)] = inst_13451);
(statearr_13499[(7)] = inst_13439);
(statearr_13499[(8)] = inst_13438__$1);
return statearr_13499;
})();var statearr_13500_13522 = state_13478__$1;(statearr_13500_13522[(2)] = null);
(statearr_13500_13522[(1)] = (2));
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
}
}
}
}
}
}
}
}
});})(c__7018__auto___13508,out))
;return ((function (switch__7003__auto__,c__7018__auto___13508,out){
return (function() {
var state_machine__7004__auto__ = null;
var state_machine__7004__auto____0 = (function (){var statearr_13504 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13504[(0)] = state_machine__7004__auto__);
(statearr_13504[(1)] = (1));
return statearr_13504;
});
var state_machine__7004__auto____1 = (function (state_13478){while(true){
var ret_value__7005__auto__ = (function (){try{while(true){
var result__7006__auto__ = switch__7003__auto__.call(null,state_13478);if(cljs.core.keyword_identical_QMARK_.call(null,result__7006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7006__auto__;
}
break;
}
}catch (e13505){if((e13505 instanceof Object))
{var ex__7007__auto__ = e13505;var statearr_13506_13523 = state_13478;(statearr_13506_13523[(5)] = ex__7007__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13478);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13505;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13524 = state_13478;
state_13478 = G__13524;
continue;
}
} else
{return ret_value__7005__auto__;
}
break;
}
});
state_machine__7004__auto__ = function(state_13478){
switch(arguments.length){
case 0:
return state_machine__7004__auto____0.call(this);
case 1:
return state_machine__7004__auto____1.call(this,state_13478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7004__auto____0;
state_machine__7004__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7004__auto____1;
return state_machine__7004__auto__;
})()
;})(switch__7003__auto__,c__7018__auto___13508,out))
})();var state__7020__auto__ = (function (){var statearr_13507 = f__7019__auto__.call(null);(statearr_13507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7018__auto___13508);
return statearr_13507;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7020__auto__);
});})(c__7018__auto___13508,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map