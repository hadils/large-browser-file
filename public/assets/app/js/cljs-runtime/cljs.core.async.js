goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14333 = (function (f,blockable,meta14334){
this.f = f;
this.blockable = blockable;
this.meta14334 = meta14334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14335,meta14334__$1){
var self__ = this;
var _14335__$1 = this;
return (new cljs.core.async.t_cljs$core$async14333(self__.f,self__.blockable,meta14334__$1));
}));

(cljs.core.async.t_cljs$core$async14333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14335){
var self__ = this;
var _14335__$1 = this;
return self__.meta14334;
}));

(cljs.core.async.t_cljs$core$async14333.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14333.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14333.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14333.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14334","meta14334",929292022,null)], null);
}));

(cljs.core.async.t_cljs$core$async14333.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14333");

(cljs.core.async.t_cljs$core$async14333.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14333");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14333.
 */
cljs.core.async.__GT_t_cljs$core$async14333 = (function cljs$core$async$__GT_t_cljs$core$async14333(f,blockable,meta14334){
return (new cljs.core.async.t_cljs$core$async14333(f,blockable,meta14334));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14330 = arguments.length;
switch (G__14330) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14333(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14371 = arguments.length;
switch (G__14371) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14379 = arguments.length;
switch (G__14379) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14381 = arguments.length;
switch (G__14381) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17610 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17610) : fn1.call(null, val_17610));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17610) : fn1.call(null, val_17610));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14392 = arguments.length;
switch (G__14392) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___17623 = n;
var x_17624 = (0);
while(true){
if((x_17624 < n__5593__auto___17623)){
(a[x_17624] = x_17624);

var G__17625 = (x_17624 + (1));
x_17624 = G__17625;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14417 = (function (flag,meta14418){
this.flag = flag;
this.meta14418 = meta14418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14419,meta14418__$1){
var self__ = this;
var _14419__$1 = this;
return (new cljs.core.async.t_cljs$core$async14417(self__.flag,meta14418__$1));
}));

(cljs.core.async.t_cljs$core$async14417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14419){
var self__ = this;
var _14419__$1 = this;
return self__.meta14418;
}));

(cljs.core.async.t_cljs$core$async14417.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14417.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14417.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14417.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14417.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14418","meta14418",-7600292,null)], null);
}));

(cljs.core.async.t_cljs$core$async14417.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14417.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14417");

(cljs.core.async.t_cljs$core$async14417.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14417");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14417.
 */
cljs.core.async.__GT_t_cljs$core$async14417 = (function cljs$core$async$__GT_t_cljs$core$async14417(flag,meta14418){
return (new cljs.core.async.t_cljs$core$async14417(flag,meta14418));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14417(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14432 = (function (flag,cb,meta14433){
this.flag = flag;
this.cb = cb;
this.meta14433 = meta14433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14434,meta14433__$1){
var self__ = this;
var _14434__$1 = this;
return (new cljs.core.async.t_cljs$core$async14432(self__.flag,self__.cb,meta14433__$1));
}));

(cljs.core.async.t_cljs$core$async14432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14434){
var self__ = this;
var _14434__$1 = this;
return self__.meta14433;
}));

(cljs.core.async.t_cljs$core$async14432.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14432.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14432.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14432.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14433","meta14433",592303566,null)], null);
}));

(cljs.core.async.t_cljs$core$async14432.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14432");

(cljs.core.async.t_cljs$core$async14432.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14432");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14432.
 */
cljs.core.async.__GT_t_cljs$core$async14432 = (function cljs$core$async$__GT_t_cljs$core$async14432(flag,cb,meta14433){
return (new cljs.core.async.t_cljs$core$async14432(flag,cb,meta14433));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14432(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14444_SHARP_){
var G__14450 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14444_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14450) : fret.call(null, G__14450));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14448_SHARP_){
var G__14451 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14448_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14451) : fret.call(null, G__14451));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17645 = (i + (1));
i = G__17645;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17646 = arguments.length;
var i__5727__auto___17650 = (0);
while(true){
if((i__5727__auto___17650 < len__5726__auto___17646)){
args__5732__auto__.push((arguments[i__5727__auto___17650]));

var G__17655 = (i__5727__auto___17650 + (1));
i__5727__auto___17650 = G__17655;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14471){
var map__14473 = p__14471;
var map__14473__$1 = cljs.core.__destructure_map(map__14473);
var opts = map__14473__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14464){
var G__14465 = cljs.core.first(seq14464);
var seq14464__$1 = cljs.core.next(seq14464);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14465,seq14464__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14500 = arguments.length;
switch (G__14500) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14249__auto___17666 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14250__auto__ = (function (){var switch__14052__auto__ = (function (state_14597){
var state_val_14598 = (state_14597[(1)]);
if((state_val_14598 === (7))){
var inst_14593 = (state_14597[(2)]);
var state_14597__$1 = state_14597;
var statearr_14612_17668 = state_14597__$1;
(statearr_14612_17668[(2)] = inst_14593);

(statearr_14612_17668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14598 === (1))){
var state_14597__$1 = state_14597;
var statearr_14614_17669 = state_14597__$1;
(statearr_14614_17669[(2)] = null);

(statearr_14614_17669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14598 === (4))){
var inst_14546 = (state_14597[(7)]);
var inst_14546__$1 = (state_14597[(2)]);
var inst_14554 = (inst_14546__$1 == null);
var state_14597__$1 = (function (){var statearr_14620 = state_14597;
(statearr_14620[(7)] = inst_14546__$1);

return statearr_14620;
})();
if(cljs.core.truth_(inst_14554)){
var statearr_14621_17670 = state_14597__$1;
(statearr_14621_17670[(1)] = (5));

} else {
var statearr_14622_17671 = state_14597__$1;
(statearr_14622_17671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14598 === (13))){
var state_14597__$1 = state_14597;
var statearr_14626_17674 = state_14597__$1;
(statearr_14626_17674[(2)] = null);

(statearr_14626_17674[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14598 === (6))){
var inst_14546 = (state_14597[(7)]);
var state_14597__$1 = state_14597;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14597__$1,(11),to,inst_14546);
} else {
if((state_val_14598 === (3))){
var inst_14595 = (state_14597[(2)]);
var state_14597__$1 = state_14597;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14597__$1,inst_14595);
} else {
if((state_val_14598 === (12))){
var state_14597__$1 = state_14597;
var statearr_14634_17675 = state_14597__$1;
(statearr_14634_17675[(2)] = null);

(statearr_14634_17675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14598 === (2))){
var state_14597__$1 = state_14597;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14597__$1,(4),from);
} else {
if((state_val_14598 === (11))){
var inst_14582 = (state_14597[(2)]);
var state_14597__$1 = state_14597;
if(cljs.core.truth_(inst_14582)){
var statearr_14641_17676 = state_14597__$1;
(statearr_14641_17676[(1)] = (12));

} else {
var statearr_14643_17677 = state_14597__$1;
(statearr_14643_17677[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14598 === (9))){
var state_14597__$1 = state_14597;
var statearr_14644_17678 = state_14597__$1;
(statearr_14644_17678[(2)] = null);

(statearr_14644_17678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14598 === (5))){
var state_14597__$1 = state_14597;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14650_17679 = state_14597__$1;
(statearr_14650_17679[(1)] = (8));

} else {
var statearr_14651_17680 = state_14597__$1;
(statearr_14651_17680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14598 === (14))){
var inst_14591 = (state_14597[(2)]);
var state_14597__$1 = state_14597;
var statearr_14669_17682 = state_14597__$1;
(statearr_14669_17682[(2)] = inst_14591);

(statearr_14669_17682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14598 === (10))){
var inst_14579 = (state_14597[(2)]);
var state_14597__$1 = state_14597;
var statearr_14679_17683 = state_14597__$1;
(statearr_14679_17683[(2)] = inst_14579);

(statearr_14679_17683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14598 === (8))){
var inst_14564 = cljs.core.async.close_BANG_(to);
var state_14597__$1 = state_14597;
var statearr_14686_17684 = state_14597__$1;
(statearr_14686_17684[(2)] = inst_14564);

(statearr_14686_17684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__14053__auto__ = null;
var cljs$core$async$state_machine__14053__auto____0 = (function (){
var statearr_14698 = [null,null,null,null,null,null,null,null];
(statearr_14698[(0)] = cljs$core$async$state_machine__14053__auto__);

(statearr_14698[(1)] = (1));

return statearr_14698;
});
var cljs$core$async$state_machine__14053__auto____1 = (function (state_14597){
while(true){
var ret_value__14054__auto__ = (function (){try{while(true){
var result__14055__auto__ = switch__14052__auto__(state_14597);
if(cljs.core.keyword_identical_QMARK_(result__14055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14055__auto__;
}
break;
}
}catch (e14712){var ex__14056__auto__ = e14712;
var statearr_14718_17685 = state_14597;
(statearr_14718_17685[(2)] = ex__14056__auto__);


if(cljs.core.seq((state_14597[(4)]))){
var statearr_14720_17687 = state_14597;
(statearr_14720_17687[(1)] = cljs.core.first((state_14597[(4)])));

} else {
throw ex__14056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17691 = state_14597;
state_14597 = G__17691;
continue;
} else {
return ret_value__14054__auto__;
}
break;
}
});
cljs$core$async$state_machine__14053__auto__ = function(state_14597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14053__auto____1.call(this,state_14597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14053__auto____0;
cljs$core$async$state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14053__auto____1;
return cljs$core$async$state_machine__14053__auto__;
})()
})();
var state__14251__auto__ = (function (){var statearr_14722 = f__14250__auto__();
(statearr_14722[(6)] = c__14249__auto___17666);

return statearr_14722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14251__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14763){
var vec__14764 = p__14763;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14764,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14764,(1),null);
var job = vec__14764;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14249__auto___17699 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14250__auto__ = (function (){var switch__14052__auto__ = (function (state_14774){
var state_val_14775 = (state_14774[(1)]);
if((state_val_14775 === (1))){
var state_14774__$1 = state_14774;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14774__$1,(2),res,v);
} else {
if((state_val_14775 === (2))){
var inst_14771 = (state_14774[(2)]);
var inst_14772 = cljs.core.async.close_BANG_(res);
var state_14774__$1 = (function (){var statearr_14786 = state_14774;
(statearr_14786[(7)] = inst_14771);

return statearr_14786;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14774__$1,inst_14772);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____0 = (function (){
var statearr_14793 = [null,null,null,null,null,null,null,null];
(statearr_14793[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__);

(statearr_14793[(1)] = (1));

return statearr_14793;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____1 = (function (state_14774){
while(true){
var ret_value__14054__auto__ = (function (){try{while(true){
var result__14055__auto__ = switch__14052__auto__(state_14774);
if(cljs.core.keyword_identical_QMARK_(result__14055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14055__auto__;
}
break;
}
}catch (e14800){var ex__14056__auto__ = e14800;
var statearr_14801_17713 = state_14774;
(statearr_14801_17713[(2)] = ex__14056__auto__);


if(cljs.core.seq((state_14774[(4)]))){
var statearr_14806_17714 = state_14774;
(statearr_14806_17714[(1)] = cljs.core.first((state_14774[(4)])));

} else {
throw ex__14056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17716 = state_14774;
state_14774 = G__17716;
continue;
} else {
return ret_value__14054__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__ = function(state_14774){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____1.call(this,state_14774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__;
})()
})();
var state__14251__auto__ = (function (){var statearr_14810 = f__14250__auto__();
(statearr_14810[(6)] = c__14249__auto___17699);

return statearr_14810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14251__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14814){
var vec__14815 = p__14814;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14815,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14815,(1),null);
var job = vec__14815;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___17719 = n;
var __17720 = (0);
while(true){
if((__17720 < n__5593__auto___17719)){
var G__14825_17721 = type;
var G__14825_17722__$1 = (((G__14825_17721 instanceof cljs.core.Keyword))?G__14825_17721.fqn:null);
switch (G__14825_17722__$1) {
case "compute":
var c__14249__auto___17724 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17720,c__14249__auto___17724,G__14825_17721,G__14825_17722__$1,n__5593__auto___17719,jobs,results,process__$1,async){
return (function (){
var f__14250__auto__ = (function (){var switch__14052__auto__ = ((function (__17720,c__14249__auto___17724,G__14825_17721,G__14825_17722__$1,n__5593__auto___17719,jobs,results,process__$1,async){
return (function (state_14849){
var state_val_14850 = (state_14849[(1)]);
if((state_val_14850 === (1))){
var state_14849__$1 = state_14849;
var statearr_14858_17726 = state_14849__$1;
(statearr_14858_17726[(2)] = null);

(statearr_14858_17726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14850 === (2))){
var state_14849__$1 = state_14849;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14849__$1,(4),jobs);
} else {
if((state_val_14850 === (3))){
var inst_14845 = (state_14849[(2)]);
var state_14849__$1 = state_14849;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14849__$1,inst_14845);
} else {
if((state_val_14850 === (4))){
var inst_14834 = (state_14849[(2)]);
var inst_14838 = process__$1(inst_14834);
var state_14849__$1 = state_14849;
if(cljs.core.truth_(inst_14838)){
var statearr_14863_17728 = state_14849__$1;
(statearr_14863_17728[(1)] = (5));

} else {
var statearr_14864_17729 = state_14849__$1;
(statearr_14864_17729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14850 === (5))){
var state_14849__$1 = state_14849;
var statearr_14866_17731 = state_14849__$1;
(statearr_14866_17731[(2)] = null);

(statearr_14866_17731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14850 === (6))){
var state_14849__$1 = state_14849;
var statearr_14867_17733 = state_14849__$1;
(statearr_14867_17733[(2)] = null);

(statearr_14867_17733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14850 === (7))){
var inst_14843 = (state_14849[(2)]);
var state_14849__$1 = state_14849;
var statearr_14869_17746 = state_14849__$1;
(statearr_14869_17746[(2)] = inst_14843);

(statearr_14869_17746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17720,c__14249__auto___17724,G__14825_17721,G__14825_17722__$1,n__5593__auto___17719,jobs,results,process__$1,async))
;
return ((function (__17720,switch__14052__auto__,c__14249__auto___17724,G__14825_17721,G__14825_17722__$1,n__5593__auto___17719,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____0 = (function (){
var statearr_14873 = [null,null,null,null,null,null,null];
(statearr_14873[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__);

(statearr_14873[(1)] = (1));

return statearr_14873;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____1 = (function (state_14849){
while(true){
var ret_value__14054__auto__ = (function (){try{while(true){
var result__14055__auto__ = switch__14052__auto__(state_14849);
if(cljs.core.keyword_identical_QMARK_(result__14055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14055__auto__;
}
break;
}
}catch (e14875){var ex__14056__auto__ = e14875;
var statearr_14876_17748 = state_14849;
(statearr_14876_17748[(2)] = ex__14056__auto__);


if(cljs.core.seq((state_14849[(4)]))){
var statearr_14877_17749 = state_14849;
(statearr_14877_17749[(1)] = cljs.core.first((state_14849[(4)])));

} else {
throw ex__14056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17750 = state_14849;
state_14849 = G__17750;
continue;
} else {
return ret_value__14054__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__ = function(state_14849){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____1.call(this,state_14849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__;
})()
;})(__17720,switch__14052__auto__,c__14249__auto___17724,G__14825_17721,G__14825_17722__$1,n__5593__auto___17719,jobs,results,process__$1,async))
})();
var state__14251__auto__ = (function (){var statearr_14878 = f__14250__auto__();
(statearr_14878[(6)] = c__14249__auto___17724);

return statearr_14878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14251__auto__);
});})(__17720,c__14249__auto___17724,G__14825_17721,G__14825_17722__$1,n__5593__auto___17719,jobs,results,process__$1,async))
);


break;
case "async":
var c__14249__auto___17754 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17720,c__14249__auto___17754,G__14825_17721,G__14825_17722__$1,n__5593__auto___17719,jobs,results,process__$1,async){
return (function (){
var f__14250__auto__ = (function (){var switch__14052__auto__ = ((function (__17720,c__14249__auto___17754,G__14825_17721,G__14825_17722__$1,n__5593__auto___17719,jobs,results,process__$1,async){
return (function (state_14893){
var state_val_14894 = (state_14893[(1)]);
if((state_val_14894 === (1))){
var state_14893__$1 = state_14893;
var statearr_14899_17756 = state_14893__$1;
(statearr_14899_17756[(2)] = null);

(statearr_14899_17756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14894 === (2))){
var state_14893__$1 = state_14893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14893__$1,(4),jobs);
} else {
if((state_val_14894 === (3))){
var inst_14891 = (state_14893[(2)]);
var state_14893__$1 = state_14893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14893__$1,inst_14891);
} else {
if((state_val_14894 === (4))){
var inst_14882 = (state_14893[(2)]);
var inst_14883 = async(inst_14882);
var state_14893__$1 = state_14893;
if(cljs.core.truth_(inst_14883)){
var statearr_14901_17762 = state_14893__$1;
(statearr_14901_17762[(1)] = (5));

} else {
var statearr_14902_17766 = state_14893__$1;
(statearr_14902_17766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14894 === (5))){
var state_14893__$1 = state_14893;
var statearr_14903_17767 = state_14893__$1;
(statearr_14903_17767[(2)] = null);

(statearr_14903_17767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14894 === (6))){
var state_14893__$1 = state_14893;
var statearr_14909_17768 = state_14893__$1;
(statearr_14909_17768[(2)] = null);

(statearr_14909_17768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14894 === (7))){
var inst_14889 = (state_14893[(2)]);
var state_14893__$1 = state_14893;
var statearr_14912_17770 = state_14893__$1;
(statearr_14912_17770[(2)] = inst_14889);

(statearr_14912_17770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17720,c__14249__auto___17754,G__14825_17721,G__14825_17722__$1,n__5593__auto___17719,jobs,results,process__$1,async))
;
return ((function (__17720,switch__14052__auto__,c__14249__auto___17754,G__14825_17721,G__14825_17722__$1,n__5593__auto___17719,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____0 = (function (){
var statearr_14923 = [null,null,null,null,null,null,null];
(statearr_14923[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__);

(statearr_14923[(1)] = (1));

return statearr_14923;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____1 = (function (state_14893){
while(true){
var ret_value__14054__auto__ = (function (){try{while(true){
var result__14055__auto__ = switch__14052__auto__(state_14893);
if(cljs.core.keyword_identical_QMARK_(result__14055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14055__auto__;
}
break;
}
}catch (e14924){var ex__14056__auto__ = e14924;
var statearr_14929_17784 = state_14893;
(statearr_14929_17784[(2)] = ex__14056__auto__);


if(cljs.core.seq((state_14893[(4)]))){
var statearr_14933_17785 = state_14893;
(statearr_14933_17785[(1)] = cljs.core.first((state_14893[(4)])));

} else {
throw ex__14056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17787 = state_14893;
state_14893 = G__17787;
continue;
} else {
return ret_value__14054__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__ = function(state_14893){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____1.call(this,state_14893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__;
})()
;})(__17720,switch__14052__auto__,c__14249__auto___17754,G__14825_17721,G__14825_17722__$1,n__5593__auto___17719,jobs,results,process__$1,async))
})();
var state__14251__auto__ = (function (){var statearr_14942 = f__14250__auto__();
(statearr_14942[(6)] = c__14249__auto___17754);

return statearr_14942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14251__auto__);
});})(__17720,c__14249__auto___17754,G__14825_17721,G__14825_17722__$1,n__5593__auto___17719,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14825_17722__$1)].join('')));

}

var G__17793 = (__17720 + (1));
__17720 = G__17793;
continue;
} else {
}
break;
}

var c__14249__auto___17794 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14250__auto__ = (function (){var switch__14052__auto__ = (function (state_14979){
var state_val_14980 = (state_14979[(1)]);
if((state_val_14980 === (7))){
var inst_14975 = (state_14979[(2)]);
var state_14979__$1 = state_14979;
var statearr_14983_17795 = state_14979__$1;
(statearr_14983_17795[(2)] = inst_14975);

(statearr_14983_17795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14980 === (1))){
var state_14979__$1 = state_14979;
var statearr_14985_17796 = state_14979__$1;
(statearr_14985_17796[(2)] = null);

(statearr_14985_17796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14980 === (4))){
var inst_14958 = (state_14979[(7)]);
var inst_14958__$1 = (state_14979[(2)]);
var inst_14960 = (inst_14958__$1 == null);
var state_14979__$1 = (function (){var statearr_14989 = state_14979;
(statearr_14989[(7)] = inst_14958__$1);

return statearr_14989;
})();
if(cljs.core.truth_(inst_14960)){
var statearr_14990_17811 = state_14979__$1;
(statearr_14990_17811[(1)] = (5));

} else {
var statearr_14991_17812 = state_14979__$1;
(statearr_14991_17812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14980 === (6))){
var inst_14964 = (state_14979[(8)]);
var inst_14958 = (state_14979[(7)]);
var inst_14964__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14966 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14967 = [inst_14958,inst_14964__$1];
var inst_14968 = (new cljs.core.PersistentVector(null,2,(5),inst_14966,inst_14967,null));
var state_14979__$1 = (function (){var statearr_14996 = state_14979;
(statearr_14996[(8)] = inst_14964__$1);

return statearr_14996;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14979__$1,(8),jobs,inst_14968);
} else {
if((state_val_14980 === (3))){
var inst_14977 = (state_14979[(2)]);
var state_14979__$1 = state_14979;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14979__$1,inst_14977);
} else {
if((state_val_14980 === (2))){
var state_14979__$1 = state_14979;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14979__$1,(4),from);
} else {
if((state_val_14980 === (9))){
var inst_14972 = (state_14979[(2)]);
var state_14979__$1 = (function (){var statearr_15000 = state_14979;
(statearr_15000[(9)] = inst_14972);

return statearr_15000;
})();
var statearr_15008_17824 = state_14979__$1;
(statearr_15008_17824[(2)] = null);

(statearr_15008_17824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14980 === (5))){
var inst_14962 = cljs.core.async.close_BANG_(jobs);
var state_14979__$1 = state_14979;
var statearr_15009_17825 = state_14979__$1;
(statearr_15009_17825[(2)] = inst_14962);

(statearr_15009_17825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14980 === (8))){
var inst_14964 = (state_14979[(8)]);
var inst_14970 = (state_14979[(2)]);
var state_14979__$1 = (function (){var statearr_15010 = state_14979;
(statearr_15010[(10)] = inst_14970);

return statearr_15010;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14979__$1,(9),results,inst_14964);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____0 = (function (){
var statearr_15011 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15011[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__);

(statearr_15011[(1)] = (1));

return statearr_15011;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____1 = (function (state_14979){
while(true){
var ret_value__14054__auto__ = (function (){try{while(true){
var result__14055__auto__ = switch__14052__auto__(state_14979);
if(cljs.core.keyword_identical_QMARK_(result__14055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14055__auto__;
}
break;
}
}catch (e15012){var ex__14056__auto__ = e15012;
var statearr_15013_17830 = state_14979;
(statearr_15013_17830[(2)] = ex__14056__auto__);


if(cljs.core.seq((state_14979[(4)]))){
var statearr_15014_17832 = state_14979;
(statearr_15014_17832[(1)] = cljs.core.first((state_14979[(4)])));

} else {
throw ex__14056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17833 = state_14979;
state_14979 = G__17833;
continue;
} else {
return ret_value__14054__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__ = function(state_14979){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____1.call(this,state_14979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__;
})()
})();
var state__14251__auto__ = (function (){var statearr_15015 = f__14250__auto__();
(statearr_15015[(6)] = c__14249__auto___17794);

return statearr_15015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14251__auto__);
}));


var c__14249__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14250__auto__ = (function (){var switch__14052__auto__ = (function (state_15065){
var state_val_15066 = (state_15065[(1)]);
if((state_val_15066 === (7))){
var inst_15054 = (state_15065[(2)]);
var state_15065__$1 = state_15065;
var statearr_15074_17837 = state_15065__$1;
(statearr_15074_17837[(2)] = inst_15054);

(statearr_15074_17837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (20))){
var state_15065__$1 = state_15065;
var statearr_15079_17839 = state_15065__$1;
(statearr_15079_17839[(2)] = null);

(statearr_15079_17839[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (1))){
var state_15065__$1 = state_15065;
var statearr_15080_17845 = state_15065__$1;
(statearr_15080_17845[(2)] = null);

(statearr_15080_17845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (4))){
var inst_15019 = (state_15065[(7)]);
var inst_15019__$1 = (state_15065[(2)]);
var inst_15020 = (inst_15019__$1 == null);
var state_15065__$1 = (function (){var statearr_15087 = state_15065;
(statearr_15087[(7)] = inst_15019__$1);

return statearr_15087;
})();
if(cljs.core.truth_(inst_15020)){
var statearr_15088_17848 = state_15065__$1;
(statearr_15088_17848[(1)] = (5));

} else {
var statearr_15089_17849 = state_15065__$1;
(statearr_15089_17849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (15))){
var inst_15032 = (state_15065[(8)]);
var state_15065__$1 = state_15065;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15065__$1,(18),to,inst_15032);
} else {
if((state_val_15066 === (21))){
var inst_15049 = (state_15065[(2)]);
var state_15065__$1 = state_15065;
var statearr_15096_17854 = state_15065__$1;
(statearr_15096_17854[(2)] = inst_15049);

(statearr_15096_17854[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (13))){
var inst_15051 = (state_15065[(2)]);
var state_15065__$1 = (function (){var statearr_15098 = state_15065;
(statearr_15098[(9)] = inst_15051);

return statearr_15098;
})();
var statearr_15099_17855 = state_15065__$1;
(statearr_15099_17855[(2)] = null);

(statearr_15099_17855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (6))){
var inst_15019 = (state_15065[(7)]);
var state_15065__$1 = state_15065;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15065__$1,(11),inst_15019);
} else {
if((state_val_15066 === (17))){
var inst_15040 = (state_15065[(2)]);
var state_15065__$1 = state_15065;
if(cljs.core.truth_(inst_15040)){
var statearr_15107_17863 = state_15065__$1;
(statearr_15107_17863[(1)] = (19));

} else {
var statearr_15109_17864 = state_15065__$1;
(statearr_15109_17864[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (3))){
var inst_15056 = (state_15065[(2)]);
var state_15065__$1 = state_15065;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15065__$1,inst_15056);
} else {
if((state_val_15066 === (12))){
var inst_15029 = (state_15065[(10)]);
var state_15065__$1 = state_15065;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15065__$1,(14),inst_15029);
} else {
if((state_val_15066 === (2))){
var state_15065__$1 = state_15065;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15065__$1,(4),results);
} else {
if((state_val_15066 === (19))){
var state_15065__$1 = state_15065;
var statearr_15113_17866 = state_15065__$1;
(statearr_15113_17866[(2)] = null);

(statearr_15113_17866[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (11))){
var inst_15029 = (state_15065[(2)]);
var state_15065__$1 = (function (){var statearr_15117 = state_15065;
(statearr_15117[(10)] = inst_15029);

return statearr_15117;
})();
var statearr_15118_17876 = state_15065__$1;
(statearr_15118_17876[(2)] = null);

(statearr_15118_17876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (9))){
var state_15065__$1 = state_15065;
var statearr_15119_17883 = state_15065__$1;
(statearr_15119_17883[(2)] = null);

(statearr_15119_17883[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (5))){
var state_15065__$1 = state_15065;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15120_17887 = state_15065__$1;
(statearr_15120_17887[(1)] = (8));

} else {
var statearr_15121_17888 = state_15065__$1;
(statearr_15121_17888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (14))){
var inst_15032 = (state_15065[(8)]);
var inst_15034 = (state_15065[(11)]);
var inst_15032__$1 = (state_15065[(2)]);
var inst_15033 = (inst_15032__$1 == null);
var inst_15034__$1 = cljs.core.not(inst_15033);
var state_15065__$1 = (function (){var statearr_15122 = state_15065;
(statearr_15122[(8)] = inst_15032__$1);

(statearr_15122[(11)] = inst_15034__$1);

return statearr_15122;
})();
if(inst_15034__$1){
var statearr_15123_17893 = state_15065__$1;
(statearr_15123_17893[(1)] = (15));

} else {
var statearr_15124_17894 = state_15065__$1;
(statearr_15124_17894[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (16))){
var inst_15034 = (state_15065[(11)]);
var state_15065__$1 = state_15065;
var statearr_15125_17904 = state_15065__$1;
(statearr_15125_17904[(2)] = inst_15034);

(statearr_15125_17904[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (10))){
var inst_15026 = (state_15065[(2)]);
var state_15065__$1 = state_15065;
var statearr_15126_17905 = state_15065__$1;
(statearr_15126_17905[(2)] = inst_15026);

(statearr_15126_17905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (18))){
var inst_15037 = (state_15065[(2)]);
var state_15065__$1 = state_15065;
var statearr_15127_17906 = state_15065__$1;
(statearr_15127_17906[(2)] = inst_15037);

(statearr_15127_17906[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15066 === (8))){
var inst_15023 = cljs.core.async.close_BANG_(to);
var state_15065__$1 = state_15065;
var statearr_15128_17911 = state_15065__$1;
(statearr_15128_17911[(2)] = inst_15023);

(statearr_15128_17911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____0 = (function (){
var statearr_15129 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15129[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__);

(statearr_15129[(1)] = (1));

return statearr_15129;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____1 = (function (state_15065){
while(true){
var ret_value__14054__auto__ = (function (){try{while(true){
var result__14055__auto__ = switch__14052__auto__(state_15065);
if(cljs.core.keyword_identical_QMARK_(result__14055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14055__auto__;
}
break;
}
}catch (e15130){var ex__14056__auto__ = e15130;
var statearr_15131_17921 = state_15065;
(statearr_15131_17921[(2)] = ex__14056__auto__);


if(cljs.core.seq((state_15065[(4)]))){
var statearr_15132_17924 = state_15065;
(statearr_15132_17924[(1)] = cljs.core.first((state_15065[(4)])));

} else {
throw ex__14056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17928 = state_15065;
state_15065 = G__17928;
continue;
} else {
return ret_value__14054__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__ = function(state_15065){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____1.call(this,state_15065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14053__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14053__auto__;
})()
})();
var state__14251__auto__ = (function (){var statearr_15138 = f__14250__auto__();
(statearr_15138[(6)] = c__14249__auto__);

return statearr_15138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14251__auto__);
}));

return c__14249__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15141 = arguments.length;
switch (G__15141) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15149 = arguments.length;
switch (G__15149) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15156 = arguments.length;
switch (G__15156) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14249__auto___17950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14250__auto__ = (function (){var switch__14052__auto__ = (function (state_15190){
var state_val_15191 = (state_15190[(1)]);
if((state_val_15191 === (7))){
var inst_15185 = (state_15190[(2)]);
var state_15190__$1 = state_15190;
var statearr_15196_17953 = state_15190__$1;
(statearr_15196_17953[(2)] = inst_15185);

(statearr_15196_17953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (1))){
var state_15190__$1 = state_15190;
var statearr_15197_17954 = state_15190__$1;
(statearr_15197_17954[(2)] = null);

(statearr_15197_17954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (4))){
var inst_15164 = (state_15190[(7)]);
var inst_15164__$1 = (state_15190[(2)]);
var inst_15165 = (inst_15164__$1 == null);
var state_15190__$1 = (function (){var statearr_15198 = state_15190;
(statearr_15198[(7)] = inst_15164__$1);

return statearr_15198;
})();
if(cljs.core.truth_(inst_15165)){
var statearr_15199_17956 = state_15190__$1;
(statearr_15199_17956[(1)] = (5));

} else {
var statearr_15200_17957 = state_15190__$1;
(statearr_15200_17957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (13))){
var state_15190__$1 = state_15190;
var statearr_15204_17961 = state_15190__$1;
(statearr_15204_17961[(2)] = null);

(statearr_15204_17961[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (6))){
var inst_15164 = (state_15190[(7)]);
var inst_15170 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15164) : p.call(null, inst_15164));
var state_15190__$1 = state_15190;
if(cljs.core.truth_(inst_15170)){
var statearr_15205_17970 = state_15190__$1;
(statearr_15205_17970[(1)] = (9));

} else {
var statearr_15206_17971 = state_15190__$1;
(statearr_15206_17971[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (3))){
var inst_15187 = (state_15190[(2)]);
var state_15190__$1 = state_15190;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15190__$1,inst_15187);
} else {
if((state_val_15191 === (12))){
var state_15190__$1 = state_15190;
var statearr_15211_17973 = state_15190__$1;
(statearr_15211_17973[(2)] = null);

(statearr_15211_17973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (2))){
var state_15190__$1 = state_15190;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15190__$1,(4),ch);
} else {
if((state_val_15191 === (11))){
var inst_15164 = (state_15190[(7)]);
var inst_15175 = (state_15190[(2)]);
var state_15190__$1 = state_15190;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15190__$1,(8),inst_15175,inst_15164);
} else {
if((state_val_15191 === (9))){
var state_15190__$1 = state_15190;
var statearr_15215_17974 = state_15190__$1;
(statearr_15215_17974[(2)] = tc);

(statearr_15215_17974[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (5))){
var inst_15167 = cljs.core.async.close_BANG_(tc);
var inst_15168 = cljs.core.async.close_BANG_(fc);
var state_15190__$1 = (function (){var statearr_15221 = state_15190;
(statearr_15221[(8)] = inst_15167);

return statearr_15221;
})();
var statearr_15222_17981 = state_15190__$1;
(statearr_15222_17981[(2)] = inst_15168);

(statearr_15222_17981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (14))){
var inst_15183 = (state_15190[(2)]);
var state_15190__$1 = state_15190;
var statearr_15223_17982 = state_15190__$1;
(statearr_15223_17982[(2)] = inst_15183);

(statearr_15223_17982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (10))){
var state_15190__$1 = state_15190;
var statearr_15224_17985 = state_15190__$1;
(statearr_15224_17985[(2)] = fc);

(statearr_15224_17985[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15191 === (8))){
var inst_15177 = (state_15190[(2)]);
var state_15190__$1 = state_15190;
if(cljs.core.truth_(inst_15177)){
var statearr_15226_17986 = state_15190__$1;
(statearr_15226_17986[(1)] = (12));

} else {
var statearr_15227_17987 = state_15190__$1;
(statearr_15227_17987[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__14053__auto__ = null;
var cljs$core$async$state_machine__14053__auto____0 = (function (){
var statearr_15231 = [null,null,null,null,null,null,null,null,null];
(statearr_15231[(0)] = cljs$core$async$state_machine__14053__auto__);

(statearr_15231[(1)] = (1));

return statearr_15231;
});
var cljs$core$async$state_machine__14053__auto____1 = (function (state_15190){
while(true){
var ret_value__14054__auto__ = (function (){try{while(true){
var result__14055__auto__ = switch__14052__auto__(state_15190);
if(cljs.core.keyword_identical_QMARK_(result__14055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14055__auto__;
}
break;
}
}catch (e15232){var ex__14056__auto__ = e15232;
var statearr_15233_17993 = state_15190;
(statearr_15233_17993[(2)] = ex__14056__auto__);


if(cljs.core.seq((state_15190[(4)]))){
var statearr_15239_17994 = state_15190;
(statearr_15239_17994[(1)] = cljs.core.first((state_15190[(4)])));

} else {
throw ex__14056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17995 = state_15190;
state_15190 = G__17995;
continue;
} else {
return ret_value__14054__auto__;
}
break;
}
});
cljs$core$async$state_machine__14053__auto__ = function(state_15190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14053__auto____1.call(this,state_15190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14053__auto____0;
cljs$core$async$state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14053__auto____1;
return cljs$core$async$state_machine__14053__auto__;
})()
})();
var state__14251__auto__ = (function (){var statearr_15241 = f__14250__auto__();
(statearr_15241[(6)] = c__14249__auto___17950);

return statearr_15241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14251__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14249__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14250__auto__ = (function (){var switch__14052__auto__ = (function (state_15268){
var state_val_15269 = (state_15268[(1)]);
if((state_val_15269 === (7))){
var inst_15264 = (state_15268[(2)]);
var state_15268__$1 = state_15268;
var statearr_15275_17999 = state_15268__$1;
(statearr_15275_17999[(2)] = inst_15264);

(statearr_15275_17999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15269 === (1))){
var inst_15247 = init;
var inst_15248 = inst_15247;
var state_15268__$1 = (function (){var statearr_15278 = state_15268;
(statearr_15278[(7)] = inst_15248);

return statearr_15278;
})();
var statearr_15280_18001 = state_15268__$1;
(statearr_15280_18001[(2)] = null);

(statearr_15280_18001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15269 === (4))){
var inst_15251 = (state_15268[(8)]);
var inst_15251__$1 = (state_15268[(2)]);
var inst_15252 = (inst_15251__$1 == null);
var state_15268__$1 = (function (){var statearr_15282 = state_15268;
(statearr_15282[(8)] = inst_15251__$1);

return statearr_15282;
})();
if(cljs.core.truth_(inst_15252)){
var statearr_15283_18002 = state_15268__$1;
(statearr_15283_18002[(1)] = (5));

} else {
var statearr_15287_18005 = state_15268__$1;
(statearr_15287_18005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15269 === (6))){
var inst_15248 = (state_15268[(7)]);
var inst_15255 = (state_15268[(9)]);
var inst_15251 = (state_15268[(8)]);
var inst_15255__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15248,inst_15251) : f.call(null, inst_15248,inst_15251));
var inst_15256 = cljs.core.reduced_QMARK_(inst_15255__$1);
var state_15268__$1 = (function (){var statearr_15289 = state_15268;
(statearr_15289[(9)] = inst_15255__$1);

return statearr_15289;
})();
if(inst_15256){
var statearr_15290_18012 = state_15268__$1;
(statearr_15290_18012[(1)] = (8));

} else {
var statearr_15291_18013 = state_15268__$1;
(statearr_15291_18013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15269 === (3))){
var inst_15266 = (state_15268[(2)]);
var state_15268__$1 = state_15268;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15268__$1,inst_15266);
} else {
if((state_val_15269 === (2))){
var state_15268__$1 = state_15268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15268__$1,(4),ch);
} else {
if((state_val_15269 === (9))){
var inst_15255 = (state_15268[(9)]);
var inst_15248 = inst_15255;
var state_15268__$1 = (function (){var statearr_15294 = state_15268;
(statearr_15294[(7)] = inst_15248);

return statearr_15294;
})();
var statearr_15296_18014 = state_15268__$1;
(statearr_15296_18014[(2)] = null);

(statearr_15296_18014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15269 === (5))){
var inst_15248 = (state_15268[(7)]);
var state_15268__$1 = state_15268;
var statearr_15300_18015 = state_15268__$1;
(statearr_15300_18015[(2)] = inst_15248);

(statearr_15300_18015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15269 === (10))){
var inst_15262 = (state_15268[(2)]);
var state_15268__$1 = state_15268;
var statearr_15301_18016 = state_15268__$1;
(statearr_15301_18016[(2)] = inst_15262);

(statearr_15301_18016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15269 === (8))){
var inst_15255 = (state_15268[(9)]);
var inst_15258 = cljs.core.deref(inst_15255);
var state_15268__$1 = state_15268;
var statearr_15304_18017 = state_15268__$1;
(statearr_15304_18017[(2)] = inst_15258);

(statearr_15304_18017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14053__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14053__auto____0 = (function (){
var statearr_15306 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15306[(0)] = cljs$core$async$reduce_$_state_machine__14053__auto__);

(statearr_15306[(1)] = (1));

return statearr_15306;
});
var cljs$core$async$reduce_$_state_machine__14053__auto____1 = (function (state_15268){
while(true){
var ret_value__14054__auto__ = (function (){try{while(true){
var result__14055__auto__ = switch__14052__auto__(state_15268);
if(cljs.core.keyword_identical_QMARK_(result__14055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14055__auto__;
}
break;
}
}catch (e15308){var ex__14056__auto__ = e15308;
var statearr_15309_18022 = state_15268;
(statearr_15309_18022[(2)] = ex__14056__auto__);


if(cljs.core.seq((state_15268[(4)]))){
var statearr_15310_18023 = state_15268;
(statearr_15310_18023[(1)] = cljs.core.first((state_15268[(4)])));

} else {
throw ex__14056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18027 = state_15268;
state_15268 = G__18027;
continue;
} else {
return ret_value__14054__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14053__auto__ = function(state_15268){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14053__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14053__auto____1.call(this,state_15268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14053__auto____0;
cljs$core$async$reduce_$_state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14053__auto____1;
return cljs$core$async$reduce_$_state_machine__14053__auto__;
})()
})();
var state__14251__auto__ = (function (){var statearr_15313 = f__14250__auto__();
(statearr_15313[(6)] = c__14249__auto__);

return statearr_15313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14251__auto__);
}));

return c__14249__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__14249__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14250__auto__ = (function (){var switch__14052__auto__ = (function (state_15323){
var state_val_15324 = (state_15323[(1)]);
if((state_val_15324 === (1))){
var inst_15318 = cljs.core.async.reduce(f__$1,init,ch);
var state_15323__$1 = state_15323;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15323__$1,(2),inst_15318);
} else {
if((state_val_15324 === (2))){
var inst_15320 = (state_15323[(2)]);
var inst_15321 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15320) : f__$1.call(null, inst_15320));
var state_15323__$1 = state_15323;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15323__$1,inst_15321);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14053__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14053__auto____0 = (function (){
var statearr_15343 = [null,null,null,null,null,null,null];
(statearr_15343[(0)] = cljs$core$async$transduce_$_state_machine__14053__auto__);

(statearr_15343[(1)] = (1));

return statearr_15343;
});
var cljs$core$async$transduce_$_state_machine__14053__auto____1 = (function (state_15323){
while(true){
var ret_value__14054__auto__ = (function (){try{while(true){
var result__14055__auto__ = switch__14052__auto__(state_15323);
if(cljs.core.keyword_identical_QMARK_(result__14055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14055__auto__;
}
break;
}
}catch (e15351){var ex__14056__auto__ = e15351;
var statearr_15352_18032 = state_15323;
(statearr_15352_18032[(2)] = ex__14056__auto__);


if(cljs.core.seq((state_15323[(4)]))){
var statearr_15354_18033 = state_15323;
(statearr_15354_18033[(1)] = cljs.core.first((state_15323[(4)])));

} else {
throw ex__14056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18034 = state_15323;
state_15323 = G__18034;
continue;
} else {
return ret_value__14054__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14053__auto__ = function(state_15323){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14053__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14053__auto____1.call(this,state_15323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14053__auto____0;
cljs$core$async$transduce_$_state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14053__auto____1;
return cljs$core$async$transduce_$_state_machine__14053__auto__;
})()
})();
var state__14251__auto__ = (function (){var statearr_15360 = f__14250__auto__();
(statearr_15360[(6)] = c__14249__auto__);

return statearr_15360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14251__auto__);
}));

return c__14249__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15364 = arguments.length;
switch (G__15364) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14249__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14250__auto__ = (function (){var switch__14052__auto__ = (function (state_15394){
var state_val_15395 = (state_15394[(1)]);
if((state_val_15395 === (7))){
var inst_15375 = (state_15394[(2)]);
var state_15394__$1 = state_15394;
var statearr_15396_18040 = state_15394__$1;
(statearr_15396_18040[(2)] = inst_15375);

(statearr_15396_18040[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15395 === (1))){
var inst_15369 = cljs.core.seq(coll);
var inst_15370 = inst_15369;
var state_15394__$1 = (function (){var statearr_15397 = state_15394;
(statearr_15397[(7)] = inst_15370);

return statearr_15397;
})();
var statearr_15398_18047 = state_15394__$1;
(statearr_15398_18047[(2)] = null);

(statearr_15398_18047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15395 === (4))){
var inst_15370 = (state_15394[(7)]);
var inst_15373 = cljs.core.first(inst_15370);
var state_15394__$1 = state_15394;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15394__$1,(7),ch,inst_15373);
} else {
if((state_val_15395 === (13))){
var inst_15388 = (state_15394[(2)]);
var state_15394__$1 = state_15394;
var statearr_15400_18054 = state_15394__$1;
(statearr_15400_18054[(2)] = inst_15388);

(statearr_15400_18054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15395 === (6))){
var inst_15379 = (state_15394[(2)]);
var state_15394__$1 = state_15394;
if(cljs.core.truth_(inst_15379)){
var statearr_15402_18055 = state_15394__$1;
(statearr_15402_18055[(1)] = (8));

} else {
var statearr_15403_18056 = state_15394__$1;
(statearr_15403_18056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15395 === (3))){
var inst_15392 = (state_15394[(2)]);
var state_15394__$1 = state_15394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15394__$1,inst_15392);
} else {
if((state_val_15395 === (12))){
var state_15394__$1 = state_15394;
var statearr_15405_18061 = state_15394__$1;
(statearr_15405_18061[(2)] = null);

(statearr_15405_18061[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15395 === (2))){
var inst_15370 = (state_15394[(7)]);
var state_15394__$1 = state_15394;
if(cljs.core.truth_(inst_15370)){
var statearr_15406_18066 = state_15394__$1;
(statearr_15406_18066[(1)] = (4));

} else {
var statearr_15407_18069 = state_15394__$1;
(statearr_15407_18069[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15395 === (11))){
var inst_15385 = cljs.core.async.close_BANG_(ch);
var state_15394__$1 = state_15394;
var statearr_15408_18070 = state_15394__$1;
(statearr_15408_18070[(2)] = inst_15385);

(statearr_15408_18070[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15395 === (9))){
var state_15394__$1 = state_15394;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15409_18074 = state_15394__$1;
(statearr_15409_18074[(1)] = (11));

} else {
var statearr_15410_18075 = state_15394__$1;
(statearr_15410_18075[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15395 === (5))){
var inst_15370 = (state_15394[(7)]);
var state_15394__$1 = state_15394;
var statearr_15411_18076 = state_15394__$1;
(statearr_15411_18076[(2)] = inst_15370);

(statearr_15411_18076[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15395 === (10))){
var inst_15390 = (state_15394[(2)]);
var state_15394__$1 = state_15394;
var statearr_15413_18077 = state_15394__$1;
(statearr_15413_18077[(2)] = inst_15390);

(statearr_15413_18077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15395 === (8))){
var inst_15370 = (state_15394[(7)]);
var inst_15381 = cljs.core.next(inst_15370);
var inst_15370__$1 = inst_15381;
var state_15394__$1 = (function (){var statearr_15414 = state_15394;
(statearr_15414[(7)] = inst_15370__$1);

return statearr_15414;
})();
var statearr_15415_18078 = state_15394__$1;
(statearr_15415_18078[(2)] = null);

(statearr_15415_18078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__14053__auto__ = null;
var cljs$core$async$state_machine__14053__auto____0 = (function (){
var statearr_15416 = [null,null,null,null,null,null,null,null];
(statearr_15416[(0)] = cljs$core$async$state_machine__14053__auto__);

(statearr_15416[(1)] = (1));

return statearr_15416;
});
var cljs$core$async$state_machine__14053__auto____1 = (function (state_15394){
while(true){
var ret_value__14054__auto__ = (function (){try{while(true){
var result__14055__auto__ = switch__14052__auto__(state_15394);
if(cljs.core.keyword_identical_QMARK_(result__14055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14055__auto__;
}
break;
}
}catch (e15420){var ex__14056__auto__ = e15420;
var statearr_15421_18079 = state_15394;
(statearr_15421_18079[(2)] = ex__14056__auto__);


if(cljs.core.seq((state_15394[(4)]))){
var statearr_15422_18080 = state_15394;
(statearr_15422_18080[(1)] = cljs.core.first((state_15394[(4)])));

} else {
throw ex__14056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18087 = state_15394;
state_15394 = G__18087;
continue;
} else {
return ret_value__14054__auto__;
}
break;
}
});
cljs$core$async$state_machine__14053__auto__ = function(state_15394){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14053__auto____1.call(this,state_15394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14053__auto____0;
cljs$core$async$state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14053__auto____1;
return cljs$core$async$state_machine__14053__auto__;
})()
})();
var state__14251__auto__ = (function (){var statearr_15426 = f__14250__auto__();
(statearr_15426[(6)] = c__14249__auto__);

return statearr_15426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14251__auto__);
}));

return c__14249__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15436 = arguments.length;
switch (G__15436) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18102 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18102(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18103 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18103(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18112 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18112(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18119 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18119(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15446 = (function (ch,cs,meta15447){
this.ch = ch;
this.cs = cs;
this.meta15447 = meta15447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15448,meta15447__$1){
var self__ = this;
var _15448__$1 = this;
return (new cljs.core.async.t_cljs$core$async15446(self__.ch,self__.cs,meta15447__$1));
}));

(cljs.core.async.t_cljs$core$async15446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15448){
var self__ = this;
var _15448__$1 = this;
return self__.meta15447;
}));

(cljs.core.async.t_cljs$core$async15446.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15446.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15446.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15446.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15446.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15446.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15446.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15447","meta15447",-246298409,null)], null);
}));

(cljs.core.async.t_cljs$core$async15446.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15446.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15446");

(cljs.core.async.t_cljs$core$async15446.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15446");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15446.
 */
cljs.core.async.__GT_t_cljs$core$async15446 = (function cljs$core$async$__GT_t_cljs$core$async15446(ch,cs,meta15447){
return (new cljs.core.async.t_cljs$core$async15446(ch,cs,meta15447));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15446(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14249__auto___18137 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14250__auto__ = (function (){var switch__14052__auto__ = (function (state_15594){
var state_val_15595 = (state_15594[(1)]);
if((state_val_15595 === (7))){
var inst_15586 = (state_15594[(2)]);
var state_15594__$1 = state_15594;
var statearr_15602_18138 = state_15594__$1;
(statearr_15602_18138[(2)] = inst_15586);

(statearr_15602_18138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (20))){
var inst_15488 = (state_15594[(7)]);
var inst_15502 = cljs.core.first(inst_15488);
var inst_15503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15502,(0),null);
var inst_15504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15502,(1),null);
var state_15594__$1 = (function (){var statearr_15606 = state_15594;
(statearr_15606[(8)] = inst_15503);

return statearr_15606;
})();
if(cljs.core.truth_(inst_15504)){
var statearr_15608_18150 = state_15594__$1;
(statearr_15608_18150[(1)] = (22));

} else {
var statearr_15609_18151 = state_15594__$1;
(statearr_15609_18151[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (27))){
var inst_15533 = (state_15594[(9)]);
var inst_15535 = (state_15594[(10)]);
var inst_15457 = (state_15594[(11)]);
var inst_15540 = (state_15594[(12)]);
var inst_15540__$1 = cljs.core._nth(inst_15533,inst_15535);
var inst_15541 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15540__$1,inst_15457,done);
var state_15594__$1 = (function (){var statearr_15615 = state_15594;
(statearr_15615[(12)] = inst_15540__$1);

return statearr_15615;
})();
if(cljs.core.truth_(inst_15541)){
var statearr_15616_18152 = state_15594__$1;
(statearr_15616_18152[(1)] = (30));

} else {
var statearr_15617_18153 = state_15594__$1;
(statearr_15617_18153[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (1))){
var state_15594__$1 = state_15594;
var statearr_15618_18154 = state_15594__$1;
(statearr_15618_18154[(2)] = null);

(statearr_15618_18154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (24))){
var inst_15488 = (state_15594[(7)]);
var inst_15509 = (state_15594[(2)]);
var inst_15510 = cljs.core.next(inst_15488);
var inst_15466 = inst_15510;
var inst_15467 = null;
var inst_15468 = (0);
var inst_15469 = (0);
var state_15594__$1 = (function (){var statearr_15620 = state_15594;
(statearr_15620[(13)] = inst_15466);

(statearr_15620[(14)] = inst_15509);

(statearr_15620[(15)] = inst_15467);

(statearr_15620[(16)] = inst_15469);

(statearr_15620[(17)] = inst_15468);

return statearr_15620;
})();
var statearr_15621_18160 = state_15594__$1;
(statearr_15621_18160[(2)] = null);

(statearr_15621_18160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (39))){
var state_15594__$1 = state_15594;
var statearr_15631_18164 = state_15594__$1;
(statearr_15631_18164[(2)] = null);

(statearr_15631_18164[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (4))){
var inst_15457 = (state_15594[(11)]);
var inst_15457__$1 = (state_15594[(2)]);
var inst_15458 = (inst_15457__$1 == null);
var state_15594__$1 = (function (){var statearr_15632 = state_15594;
(statearr_15632[(11)] = inst_15457__$1);

return statearr_15632;
})();
if(cljs.core.truth_(inst_15458)){
var statearr_15633_18172 = state_15594__$1;
(statearr_15633_18172[(1)] = (5));

} else {
var statearr_15634_18173 = state_15594__$1;
(statearr_15634_18173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (15))){
var inst_15466 = (state_15594[(13)]);
var inst_15467 = (state_15594[(15)]);
var inst_15469 = (state_15594[(16)]);
var inst_15468 = (state_15594[(17)]);
var inst_15484 = (state_15594[(2)]);
var inst_15485 = (inst_15469 + (1));
var tmp15625 = inst_15466;
var tmp15626 = inst_15467;
var tmp15627 = inst_15468;
var inst_15466__$1 = tmp15625;
var inst_15467__$1 = tmp15626;
var inst_15468__$1 = tmp15627;
var inst_15469__$1 = inst_15485;
var state_15594__$1 = (function (){var statearr_15642 = state_15594;
(statearr_15642[(13)] = inst_15466__$1);

(statearr_15642[(15)] = inst_15467__$1);

(statearr_15642[(18)] = inst_15484);

(statearr_15642[(16)] = inst_15469__$1);

(statearr_15642[(17)] = inst_15468__$1);

return statearr_15642;
})();
var statearr_15643_18176 = state_15594__$1;
(statearr_15643_18176[(2)] = null);

(statearr_15643_18176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (21))){
var inst_15513 = (state_15594[(2)]);
var state_15594__$1 = state_15594;
var statearr_15652_18177 = state_15594__$1;
(statearr_15652_18177[(2)] = inst_15513);

(statearr_15652_18177[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (31))){
var inst_15540 = (state_15594[(12)]);
var inst_15544 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15540);
var state_15594__$1 = state_15594;
var statearr_15654_18179 = state_15594__$1;
(statearr_15654_18179[(2)] = inst_15544);

(statearr_15654_18179[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (32))){
var inst_15532 = (state_15594[(19)]);
var inst_15534 = (state_15594[(20)]);
var inst_15533 = (state_15594[(9)]);
var inst_15535 = (state_15594[(10)]);
var inst_15546 = (state_15594[(2)]);
var inst_15547 = (inst_15535 + (1));
var tmp15646 = inst_15532;
var tmp15647 = inst_15534;
var tmp15648 = inst_15533;
var inst_15532__$1 = tmp15646;
var inst_15533__$1 = tmp15648;
var inst_15534__$1 = tmp15647;
var inst_15535__$1 = inst_15547;
var state_15594__$1 = (function (){var statearr_15659 = state_15594;
(statearr_15659[(19)] = inst_15532__$1);

(statearr_15659[(21)] = inst_15546);

(statearr_15659[(20)] = inst_15534__$1);

(statearr_15659[(9)] = inst_15533__$1);

(statearr_15659[(10)] = inst_15535__$1);

return statearr_15659;
})();
var statearr_15661_18184 = state_15594__$1;
(statearr_15661_18184[(2)] = null);

(statearr_15661_18184[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (40))){
var inst_15559 = (state_15594[(22)]);
var inst_15563 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15559);
var state_15594__$1 = state_15594;
var statearr_15664_18185 = state_15594__$1;
(statearr_15664_18185[(2)] = inst_15563);

(statearr_15664_18185[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (33))){
var inst_15550 = (state_15594[(23)]);
var inst_15552 = cljs.core.chunked_seq_QMARK_(inst_15550);
var state_15594__$1 = state_15594;
if(inst_15552){
var statearr_15669_18187 = state_15594__$1;
(statearr_15669_18187[(1)] = (36));

} else {
var statearr_15672_18190 = state_15594__$1;
(statearr_15672_18190[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (13))){
var inst_15478 = (state_15594[(24)]);
var inst_15481 = cljs.core.async.close_BANG_(inst_15478);
var state_15594__$1 = state_15594;
var statearr_15675_18193 = state_15594__$1;
(statearr_15675_18193[(2)] = inst_15481);

(statearr_15675_18193[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (22))){
var inst_15503 = (state_15594[(8)]);
var inst_15506 = cljs.core.async.close_BANG_(inst_15503);
var state_15594__$1 = state_15594;
var statearr_15680_18194 = state_15594__$1;
(statearr_15680_18194[(2)] = inst_15506);

(statearr_15680_18194[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (36))){
var inst_15550 = (state_15594[(23)]);
var inst_15554 = cljs.core.chunk_first(inst_15550);
var inst_15555 = cljs.core.chunk_rest(inst_15550);
var inst_15556 = cljs.core.count(inst_15554);
var inst_15532 = inst_15555;
var inst_15533 = inst_15554;
var inst_15534 = inst_15556;
var inst_15535 = (0);
var state_15594__$1 = (function (){var statearr_15685 = state_15594;
(statearr_15685[(19)] = inst_15532);

(statearr_15685[(20)] = inst_15534);

(statearr_15685[(9)] = inst_15533);

(statearr_15685[(10)] = inst_15535);

return statearr_15685;
})();
var statearr_15686_18215 = state_15594__$1;
(statearr_15686_18215[(2)] = null);

(statearr_15686_18215[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (41))){
var inst_15550 = (state_15594[(23)]);
var inst_15565 = (state_15594[(2)]);
var inst_15566 = cljs.core.next(inst_15550);
var inst_15532 = inst_15566;
var inst_15533 = null;
var inst_15534 = (0);
var inst_15535 = (0);
var state_15594__$1 = (function (){var statearr_15687 = state_15594;
(statearr_15687[(19)] = inst_15532);

(statearr_15687[(25)] = inst_15565);

(statearr_15687[(20)] = inst_15534);

(statearr_15687[(9)] = inst_15533);

(statearr_15687[(10)] = inst_15535);

return statearr_15687;
})();
var statearr_15688_18223 = state_15594__$1;
(statearr_15688_18223[(2)] = null);

(statearr_15688_18223[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (43))){
var state_15594__$1 = state_15594;
var statearr_15689_18224 = state_15594__$1;
(statearr_15689_18224[(2)] = null);

(statearr_15689_18224[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (29))){
var inst_15574 = (state_15594[(2)]);
var state_15594__$1 = state_15594;
var statearr_15691_18225 = state_15594__$1;
(statearr_15691_18225[(2)] = inst_15574);

(statearr_15691_18225[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (44))){
var inst_15583 = (state_15594[(2)]);
var state_15594__$1 = (function (){var statearr_15696 = state_15594;
(statearr_15696[(26)] = inst_15583);

return statearr_15696;
})();
var statearr_15697_18226 = state_15594__$1;
(statearr_15697_18226[(2)] = null);

(statearr_15697_18226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (6))){
var inst_15524 = (state_15594[(27)]);
var inst_15523 = cljs.core.deref(cs);
var inst_15524__$1 = cljs.core.keys(inst_15523);
var inst_15525 = cljs.core.count(inst_15524__$1);
var inst_15526 = cljs.core.reset_BANG_(dctr,inst_15525);
var inst_15531 = cljs.core.seq(inst_15524__$1);
var inst_15532 = inst_15531;
var inst_15533 = null;
var inst_15534 = (0);
var inst_15535 = (0);
var state_15594__$1 = (function (){var statearr_15699 = state_15594;
(statearr_15699[(19)] = inst_15532);

(statearr_15699[(27)] = inst_15524__$1);

(statearr_15699[(20)] = inst_15534);

(statearr_15699[(9)] = inst_15533);

(statearr_15699[(10)] = inst_15535);

(statearr_15699[(28)] = inst_15526);

return statearr_15699;
})();
var statearr_15700_18227 = state_15594__$1;
(statearr_15700_18227[(2)] = null);

(statearr_15700_18227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (28))){
var inst_15532 = (state_15594[(19)]);
var inst_15550 = (state_15594[(23)]);
var inst_15550__$1 = cljs.core.seq(inst_15532);
var state_15594__$1 = (function (){var statearr_15704 = state_15594;
(statearr_15704[(23)] = inst_15550__$1);

return statearr_15704;
})();
if(inst_15550__$1){
var statearr_15707_18231 = state_15594__$1;
(statearr_15707_18231[(1)] = (33));

} else {
var statearr_15708_18232 = state_15594__$1;
(statearr_15708_18232[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (25))){
var inst_15534 = (state_15594[(20)]);
var inst_15535 = (state_15594[(10)]);
var inst_15537 = (inst_15535 < inst_15534);
var inst_15538 = inst_15537;
var state_15594__$1 = state_15594;
if(cljs.core.truth_(inst_15538)){
var statearr_15713_18234 = state_15594__$1;
(statearr_15713_18234[(1)] = (27));

} else {
var statearr_15714_18235 = state_15594__$1;
(statearr_15714_18235[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (34))){
var state_15594__$1 = state_15594;
var statearr_15718_18236 = state_15594__$1;
(statearr_15718_18236[(2)] = null);

(statearr_15718_18236[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (17))){
var state_15594__$1 = state_15594;
var statearr_15720_18237 = state_15594__$1;
(statearr_15720_18237[(2)] = null);

(statearr_15720_18237[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (3))){
var inst_15589 = (state_15594[(2)]);
var state_15594__$1 = state_15594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15594__$1,inst_15589);
} else {
if((state_val_15595 === (12))){
var inst_15518 = (state_15594[(2)]);
var state_15594__$1 = state_15594;
var statearr_15725_18238 = state_15594__$1;
(statearr_15725_18238[(2)] = inst_15518);

(statearr_15725_18238[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (2))){
var state_15594__$1 = state_15594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15594__$1,(4),ch);
} else {
if((state_val_15595 === (23))){
var state_15594__$1 = state_15594;
var statearr_15731_18239 = state_15594__$1;
(statearr_15731_18239[(2)] = null);

(statearr_15731_18239[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (35))){
var inst_15572 = (state_15594[(2)]);
var state_15594__$1 = state_15594;
var statearr_15733_18241 = state_15594__$1;
(statearr_15733_18241[(2)] = inst_15572);

(statearr_15733_18241[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (19))){
var inst_15488 = (state_15594[(7)]);
var inst_15493 = cljs.core.chunk_first(inst_15488);
var inst_15494 = cljs.core.chunk_rest(inst_15488);
var inst_15495 = cljs.core.count(inst_15493);
var inst_15466 = inst_15494;
var inst_15467 = inst_15493;
var inst_15468 = inst_15495;
var inst_15469 = (0);
var state_15594__$1 = (function (){var statearr_15738 = state_15594;
(statearr_15738[(13)] = inst_15466);

(statearr_15738[(15)] = inst_15467);

(statearr_15738[(16)] = inst_15469);

(statearr_15738[(17)] = inst_15468);

return statearr_15738;
})();
var statearr_15746_18245 = state_15594__$1;
(statearr_15746_18245[(2)] = null);

(statearr_15746_18245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (11))){
var inst_15466 = (state_15594[(13)]);
var inst_15488 = (state_15594[(7)]);
var inst_15488__$1 = cljs.core.seq(inst_15466);
var state_15594__$1 = (function (){var statearr_15752 = state_15594;
(statearr_15752[(7)] = inst_15488__$1);

return statearr_15752;
})();
if(inst_15488__$1){
var statearr_15753_18246 = state_15594__$1;
(statearr_15753_18246[(1)] = (16));

} else {
var statearr_15757_18247 = state_15594__$1;
(statearr_15757_18247[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (9))){
var inst_15520 = (state_15594[(2)]);
var state_15594__$1 = state_15594;
var statearr_15758_18251 = state_15594__$1;
(statearr_15758_18251[(2)] = inst_15520);

(statearr_15758_18251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (5))){
var inst_15464 = cljs.core.deref(cs);
var inst_15465 = cljs.core.seq(inst_15464);
var inst_15466 = inst_15465;
var inst_15467 = null;
var inst_15468 = (0);
var inst_15469 = (0);
var state_15594__$1 = (function (){var statearr_15759 = state_15594;
(statearr_15759[(13)] = inst_15466);

(statearr_15759[(15)] = inst_15467);

(statearr_15759[(16)] = inst_15469);

(statearr_15759[(17)] = inst_15468);

return statearr_15759;
})();
var statearr_15760_18252 = state_15594__$1;
(statearr_15760_18252[(2)] = null);

(statearr_15760_18252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (14))){
var state_15594__$1 = state_15594;
var statearr_15762_18253 = state_15594__$1;
(statearr_15762_18253[(2)] = null);

(statearr_15762_18253[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (45))){
var inst_15580 = (state_15594[(2)]);
var state_15594__$1 = state_15594;
var statearr_15763_18254 = state_15594__$1;
(statearr_15763_18254[(2)] = inst_15580);

(statearr_15763_18254[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (26))){
var inst_15524 = (state_15594[(27)]);
var inst_15576 = (state_15594[(2)]);
var inst_15577 = cljs.core.seq(inst_15524);
var state_15594__$1 = (function (){var statearr_15764 = state_15594;
(statearr_15764[(29)] = inst_15576);

return statearr_15764;
})();
if(inst_15577){
var statearr_15765_18255 = state_15594__$1;
(statearr_15765_18255[(1)] = (42));

} else {
var statearr_15766_18259 = state_15594__$1;
(statearr_15766_18259[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (16))){
var inst_15488 = (state_15594[(7)]);
var inst_15490 = cljs.core.chunked_seq_QMARK_(inst_15488);
var state_15594__$1 = state_15594;
if(inst_15490){
var statearr_15767_18261 = state_15594__$1;
(statearr_15767_18261[(1)] = (19));

} else {
var statearr_15768_18262 = state_15594__$1;
(statearr_15768_18262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (38))){
var inst_15569 = (state_15594[(2)]);
var state_15594__$1 = state_15594;
var statearr_15769_18263 = state_15594__$1;
(statearr_15769_18263[(2)] = inst_15569);

(statearr_15769_18263[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (30))){
var state_15594__$1 = state_15594;
var statearr_15771_18264 = state_15594__$1;
(statearr_15771_18264[(2)] = null);

(statearr_15771_18264[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (10))){
var inst_15467 = (state_15594[(15)]);
var inst_15469 = (state_15594[(16)]);
var inst_15477 = cljs.core._nth(inst_15467,inst_15469);
var inst_15478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15477,(0),null);
var inst_15479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15477,(1),null);
var state_15594__$1 = (function (){var statearr_15772 = state_15594;
(statearr_15772[(24)] = inst_15478);

return statearr_15772;
})();
if(cljs.core.truth_(inst_15479)){
var statearr_15773_18265 = state_15594__$1;
(statearr_15773_18265[(1)] = (13));

} else {
var statearr_15774_18266 = state_15594__$1;
(statearr_15774_18266[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (18))){
var inst_15516 = (state_15594[(2)]);
var state_15594__$1 = state_15594;
var statearr_15775_18269 = state_15594__$1;
(statearr_15775_18269[(2)] = inst_15516);

(statearr_15775_18269[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (42))){
var state_15594__$1 = state_15594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15594__$1,(45),dchan);
} else {
if((state_val_15595 === (37))){
var inst_15457 = (state_15594[(11)]);
var inst_15550 = (state_15594[(23)]);
var inst_15559 = (state_15594[(22)]);
var inst_15559__$1 = cljs.core.first(inst_15550);
var inst_15560 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15559__$1,inst_15457,done);
var state_15594__$1 = (function (){var statearr_15777 = state_15594;
(statearr_15777[(22)] = inst_15559__$1);

return statearr_15777;
})();
if(cljs.core.truth_(inst_15560)){
var statearr_15780_18270 = state_15594__$1;
(statearr_15780_18270[(1)] = (39));

} else {
var statearr_15781_18271 = state_15594__$1;
(statearr_15781_18271[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (8))){
var inst_15469 = (state_15594[(16)]);
var inst_15468 = (state_15594[(17)]);
var inst_15471 = (inst_15469 < inst_15468);
var inst_15472 = inst_15471;
var state_15594__$1 = state_15594;
if(cljs.core.truth_(inst_15472)){
var statearr_15783_18275 = state_15594__$1;
(statearr_15783_18275[(1)] = (10));

} else {
var statearr_15784_18276 = state_15594__$1;
(statearr_15784_18276[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$mult_$_state_machine__14053__auto__ = null;
var cljs$core$async$mult_$_state_machine__14053__auto____0 = (function (){
var statearr_15788 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15788[(0)] = cljs$core$async$mult_$_state_machine__14053__auto__);

(statearr_15788[(1)] = (1));

return statearr_15788;
});
var cljs$core$async$mult_$_state_machine__14053__auto____1 = (function (state_15594){
while(true){
var ret_value__14054__auto__ = (function (){try{while(true){
var result__14055__auto__ = switch__14052__auto__(state_15594);
if(cljs.core.keyword_identical_QMARK_(result__14055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14055__auto__;
}
break;
}
}catch (e15789){var ex__14056__auto__ = e15789;
var statearr_15790_18277 = state_15594;
(statearr_15790_18277[(2)] = ex__14056__auto__);


if(cljs.core.seq((state_15594[(4)]))){
var statearr_15791_18278 = state_15594;
(statearr_15791_18278[(1)] = cljs.core.first((state_15594[(4)])));

} else {
throw ex__14056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18279 = state_15594;
state_15594 = G__18279;
continue;
} else {
return ret_value__14054__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14053__auto__ = function(state_15594){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14053__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14053__auto____1.call(this,state_15594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14053__auto____0;
cljs$core$async$mult_$_state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14053__auto____1;
return cljs$core$async$mult_$_state_machine__14053__auto__;
})()
})();
var state__14251__auto__ = (function (){var statearr_15793 = f__14250__auto__();
(statearr_15793[(6)] = c__14249__auto___18137);

return statearr_15793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14251__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15796 = arguments.length;
switch (G__15796) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18287 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18287(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18292 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18292(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18293 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18293(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18298 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18298(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18300 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18300(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18302 = arguments.length;
var i__5727__auto___18303 = (0);
while(true){
if((i__5727__auto___18303 < len__5726__auto___18302)){
args__5732__auto__.push((arguments[i__5727__auto___18303]));

var G__18304 = (i__5727__auto___18303 + (1));
i__5727__auto___18303 = G__18304;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15828){
var map__15829 = p__15828;
var map__15829__$1 = cljs.core.__destructure_map(map__15829);
var opts = map__15829__$1;
var statearr_15830_18309 = state;
(statearr_15830_18309[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15834_18311 = state;
(statearr_15834_18311[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15837_18312 = state;
(statearr_15837_18312[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15817){
var G__15818 = cljs.core.first(seq15817);
var seq15817__$1 = cljs.core.next(seq15817);
var G__15819 = cljs.core.first(seq15817__$1);
var seq15817__$2 = cljs.core.next(seq15817__$1);
var G__15820 = cljs.core.first(seq15817__$2);
var seq15817__$3 = cljs.core.next(seq15817__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15818,G__15819,G__15820,seq15817__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15850 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15851){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15851 = meta15851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15852,meta15851__$1){
var self__ = this;
var _15852__$1 = this;
return (new cljs.core.async.t_cljs$core$async15850(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15851__$1));
}));

(cljs.core.async.t_cljs$core$async15850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15852){
var self__ = this;
var _15852__$1 = this;
return self__.meta15851;
}));

(cljs.core.async.t_cljs$core$async15850.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15850.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15850.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15850.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15850.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15850.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15850.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15850.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async15850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15851","meta15851",1829883237,null)], null);
}));

(cljs.core.async.t_cljs$core$async15850.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15850");

(cljs.core.async.t_cljs$core$async15850.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15850");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15850.
 */
cljs.core.async.__GT_t_cljs$core$async15850 = (function cljs$core$async$__GT_t_cljs$core$async15850(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15851){
return (new cljs.core.async.t_cljs$core$async15850(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15851));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async15850(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14249__auto___18337 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14250__auto__ = (function (){var switch__14052__auto__ = (function (state_15952){
var state_val_15953 = (state_15952[(1)]);
if((state_val_15953 === (7))){
var inst_15908 = (state_15952[(2)]);
var state_15952__$1 = state_15952;
if(cljs.core.truth_(inst_15908)){
var statearr_15958_18338 = state_15952__$1;
(statearr_15958_18338[(1)] = (8));

} else {
var statearr_15961_18339 = state_15952__$1;
(statearr_15961_18339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (20))){
var inst_15894 = (state_15952[(7)]);
var state_15952__$1 = state_15952;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15952__$1,(23),out,inst_15894);
} else {
if((state_val_15953 === (1))){
var inst_15875 = calc_state();
var inst_15876 = cljs.core.__destructure_map(inst_15875);
var inst_15877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15876,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15876,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15876,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15881 = inst_15875;
var state_15952__$1 = (function (){var statearr_15963 = state_15952;
(statearr_15963[(8)] = inst_15877);

(statearr_15963[(9)] = inst_15881);

(statearr_15963[(10)] = inst_15880);

(statearr_15963[(11)] = inst_15879);

return statearr_15963;
})();
var statearr_15967_18345 = state_15952__$1;
(statearr_15967_18345[(2)] = null);

(statearr_15967_18345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (24))){
var inst_15884 = (state_15952[(12)]);
var inst_15881 = inst_15884;
var state_15952__$1 = (function (){var statearr_15968 = state_15952;
(statearr_15968[(9)] = inst_15881);

return statearr_15968;
})();
var statearr_15970_18347 = state_15952__$1;
(statearr_15970_18347[(2)] = null);

(statearr_15970_18347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (4))){
var inst_15894 = (state_15952[(7)]);
var inst_15899 = (state_15952[(13)]);
var inst_15892 = (state_15952[(2)]);
var inst_15894__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15892,(0),null);
var inst_15896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15892,(1),null);
var inst_15899__$1 = (inst_15894__$1 == null);
var state_15952__$1 = (function (){var statearr_15975 = state_15952;
(statearr_15975[(14)] = inst_15896);

(statearr_15975[(7)] = inst_15894__$1);

(statearr_15975[(13)] = inst_15899__$1);

return statearr_15975;
})();
if(cljs.core.truth_(inst_15899__$1)){
var statearr_15976_18349 = state_15952__$1;
(statearr_15976_18349[(1)] = (5));

} else {
var statearr_15978_18350 = state_15952__$1;
(statearr_15978_18350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (15))){
var inst_15923 = (state_15952[(15)]);
var inst_15885 = (state_15952[(16)]);
var inst_15923__$1 = cljs.core.empty_QMARK_(inst_15885);
var state_15952__$1 = (function (){var statearr_15987 = state_15952;
(statearr_15987[(15)] = inst_15923__$1);

return statearr_15987;
})();
if(inst_15923__$1){
var statearr_15990_18351 = state_15952__$1;
(statearr_15990_18351[(1)] = (17));

} else {
var statearr_15991_18352 = state_15952__$1;
(statearr_15991_18352[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (21))){
var inst_15884 = (state_15952[(12)]);
var inst_15881 = inst_15884;
var state_15952__$1 = (function (){var statearr_15993 = state_15952;
(statearr_15993[(9)] = inst_15881);

return statearr_15993;
})();
var statearr_15994_18353 = state_15952__$1;
(statearr_15994_18353[(2)] = null);

(statearr_15994_18353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (13))){
var inst_15915 = (state_15952[(2)]);
var inst_15916 = calc_state();
var inst_15881 = inst_15916;
var state_15952__$1 = (function (){var statearr_15998 = state_15952;
(statearr_15998[(9)] = inst_15881);

(statearr_15998[(17)] = inst_15915);

return statearr_15998;
})();
var statearr_15999_18355 = state_15952__$1;
(statearr_15999_18355[(2)] = null);

(statearr_15999_18355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (22))){
var inst_15944 = (state_15952[(2)]);
var state_15952__$1 = state_15952;
var statearr_16003_18356 = state_15952__$1;
(statearr_16003_18356[(2)] = inst_15944);

(statearr_16003_18356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (6))){
var inst_15896 = (state_15952[(14)]);
var inst_15906 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15896,change);
var state_15952__$1 = state_15952;
var statearr_16008_18359 = state_15952__$1;
(statearr_16008_18359[(2)] = inst_15906);

(statearr_16008_18359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (25))){
var state_15952__$1 = state_15952;
var statearr_16012_18362 = state_15952__$1;
(statearr_16012_18362[(2)] = null);

(statearr_16012_18362[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (17))){
var inst_15886 = (state_15952[(18)]);
var inst_15896 = (state_15952[(14)]);
var inst_15925 = (inst_15886.cljs$core$IFn$_invoke$arity$1 ? inst_15886.cljs$core$IFn$_invoke$arity$1(inst_15896) : inst_15886.call(null, inst_15896));
var inst_15926 = cljs.core.not(inst_15925);
var state_15952__$1 = state_15952;
var statearr_16015_18363 = state_15952__$1;
(statearr_16015_18363[(2)] = inst_15926);

(statearr_16015_18363[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (3))){
var inst_15949 = (state_15952[(2)]);
var state_15952__$1 = state_15952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15952__$1,inst_15949);
} else {
if((state_val_15953 === (12))){
var state_15952__$1 = state_15952;
var statearr_16020_18366 = state_15952__$1;
(statearr_16020_18366[(2)] = null);

(statearr_16020_18366[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (2))){
var inst_15881 = (state_15952[(9)]);
var inst_15884 = (state_15952[(12)]);
var inst_15884__$1 = cljs.core.__destructure_map(inst_15881);
var inst_15885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15884__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15884__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15884__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15952__$1 = (function (){var statearr_16022 = state_15952;
(statearr_16022[(18)] = inst_15886);

(statearr_16022[(16)] = inst_15885);

(statearr_16022[(12)] = inst_15884__$1);

return statearr_16022;
})();
return cljs.core.async.ioc_alts_BANG_(state_15952__$1,(4),inst_15887);
} else {
if((state_val_15953 === (23))){
var inst_15934 = (state_15952[(2)]);
var state_15952__$1 = state_15952;
if(cljs.core.truth_(inst_15934)){
var statearr_16029_18368 = state_15952__$1;
(statearr_16029_18368[(1)] = (24));

} else {
var statearr_16030_18369 = state_15952__$1;
(statearr_16030_18369[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (19))){
var inst_15929 = (state_15952[(2)]);
var state_15952__$1 = state_15952;
var statearr_16032_18370 = state_15952__$1;
(statearr_16032_18370[(2)] = inst_15929);

(statearr_16032_18370[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (11))){
var inst_15896 = (state_15952[(14)]);
var inst_15912 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15896);
var state_15952__$1 = state_15952;
var statearr_16036_18371 = state_15952__$1;
(statearr_16036_18371[(2)] = inst_15912);

(statearr_16036_18371[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (9))){
var inst_15920 = (state_15952[(19)]);
var inst_15896 = (state_15952[(14)]);
var inst_15885 = (state_15952[(16)]);
var inst_15920__$1 = (inst_15885.cljs$core$IFn$_invoke$arity$1 ? inst_15885.cljs$core$IFn$_invoke$arity$1(inst_15896) : inst_15885.call(null, inst_15896));
var state_15952__$1 = (function (){var statearr_16039 = state_15952;
(statearr_16039[(19)] = inst_15920__$1);

return statearr_16039;
})();
if(cljs.core.truth_(inst_15920__$1)){
var statearr_16041_18373 = state_15952__$1;
(statearr_16041_18373[(1)] = (14));

} else {
var statearr_16043_18374 = state_15952__$1;
(statearr_16043_18374[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (5))){
var inst_15899 = (state_15952[(13)]);
var state_15952__$1 = state_15952;
var statearr_16048_18376 = state_15952__$1;
(statearr_16048_18376[(2)] = inst_15899);

(statearr_16048_18376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (14))){
var inst_15920 = (state_15952[(19)]);
var state_15952__$1 = state_15952;
var statearr_16053_18377 = state_15952__$1;
(statearr_16053_18377[(2)] = inst_15920);

(statearr_16053_18377[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (26))){
var inst_15939 = (state_15952[(2)]);
var state_15952__$1 = state_15952;
var statearr_16057_18378 = state_15952__$1;
(statearr_16057_18378[(2)] = inst_15939);

(statearr_16057_18378[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (16))){
var inst_15931 = (state_15952[(2)]);
var state_15952__$1 = state_15952;
if(cljs.core.truth_(inst_15931)){
var statearr_16061_18379 = state_15952__$1;
(statearr_16061_18379[(1)] = (20));

} else {
var statearr_16062_18380 = state_15952__$1;
(statearr_16062_18380[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (10))){
var inst_15946 = (state_15952[(2)]);
var state_15952__$1 = state_15952;
var statearr_16063_18385 = state_15952__$1;
(statearr_16063_18385[(2)] = inst_15946);

(statearr_16063_18385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (18))){
var inst_15923 = (state_15952[(15)]);
var state_15952__$1 = state_15952;
var statearr_16065_18387 = state_15952__$1;
(statearr_16065_18387[(2)] = inst_15923);

(statearr_16065_18387[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15953 === (8))){
var inst_15894 = (state_15952[(7)]);
var inst_15910 = (inst_15894 == null);
var state_15952__$1 = state_15952;
if(cljs.core.truth_(inst_15910)){
var statearr_16066_18392 = state_15952__$1;
(statearr_16066_18392[(1)] = (11));

} else {
var statearr_16067_18393 = state_15952__$1;
(statearr_16067_18393[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$mix_$_state_machine__14053__auto__ = null;
var cljs$core$async$mix_$_state_machine__14053__auto____0 = (function (){
var statearr_16073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16073[(0)] = cljs$core$async$mix_$_state_machine__14053__auto__);

(statearr_16073[(1)] = (1));

return statearr_16073;
});
var cljs$core$async$mix_$_state_machine__14053__auto____1 = (function (state_15952){
while(true){
var ret_value__14054__auto__ = (function (){try{while(true){
var result__14055__auto__ = switch__14052__auto__(state_15952);
if(cljs.core.keyword_identical_QMARK_(result__14055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14055__auto__;
}
break;
}
}catch (e16075){var ex__14056__auto__ = e16075;
var statearr_16076_18402 = state_15952;
(statearr_16076_18402[(2)] = ex__14056__auto__);


if(cljs.core.seq((state_15952[(4)]))){
var statearr_16077_18403 = state_15952;
(statearr_16077_18403[(1)] = cljs.core.first((state_15952[(4)])));

} else {
throw ex__14056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18404 = state_15952;
state_15952 = G__18404;
continue;
} else {
return ret_value__14054__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14053__auto__ = function(state_15952){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14053__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14053__auto____1.call(this,state_15952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14053__auto____0;
cljs$core$async$mix_$_state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14053__auto____1;
return cljs$core$async$mix_$_state_machine__14053__auto__;
})()
})();
var state__14251__auto__ = (function (){var statearr_16087 = f__14250__auto__();
(statearr_16087[(6)] = c__14249__auto___18337);

return statearr_16087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14251__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18408 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18408(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18419 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18419(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18420 = (function() {
var G__18421 = null;
var G__18421__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18421__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18421 = function(p,v){
switch(arguments.length){
case 1:
return G__18421__1.call(this,p);
case 2:
return G__18421__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18421.cljs$core$IFn$_invoke$arity$1 = G__18421__1;
G__18421.cljs$core$IFn$_invoke$arity$2 = G__18421__2;
return G__18421;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16169 = arguments.length;
switch (G__16169) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18420(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18420(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16251 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16252){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16252 = meta16252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16253,meta16252__$1){
var self__ = this;
var _16253__$1 = this;
return (new cljs.core.async.t_cljs$core$async16251(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16252__$1));
}));

(cljs.core.async.t_cljs$core$async16251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16253){
var self__ = this;
var _16253__$1 = this;
return self__.meta16252;
}));

(cljs.core.async.t_cljs$core$async16251.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16251.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16251.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16251.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16251.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16251.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16251.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16251.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16252","meta16252",-712456958,null)], null);
}));

(cljs.core.async.t_cljs$core$async16251.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16251.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16251");

(cljs.core.async.t_cljs$core$async16251.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16251");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16251.
 */
cljs.core.async.__GT_t_cljs$core$async16251 = (function cljs$core$async$__GT_t_cljs$core$async16251(ch,topic_fn,buf_fn,mults,ensure_mult,meta16252){
return (new cljs.core.async.t_cljs$core$async16251(ch,topic_fn,buf_fn,mults,ensure_mult,meta16252));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16222 = arguments.length;
switch (G__16222) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16209_SHARP_){
if(cljs.core.truth_((p1__16209_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16209_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16209_SHARP_.call(null, topic)))){
return p1__16209_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16209_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16251(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14249__auto___18462 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14250__auto__ = (function (){var switch__14052__auto__ = (function (state_16390){
var state_val_16392 = (state_16390[(1)]);
if((state_val_16392 === (7))){
var inst_16380 = (state_16390[(2)]);
var state_16390__$1 = state_16390;
var statearr_16405_18463 = state_16390__$1;
(statearr_16405_18463[(2)] = inst_16380);

(statearr_16405_18463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (20))){
var state_16390__$1 = state_16390;
var statearr_16413_18466 = state_16390__$1;
(statearr_16413_18466[(2)] = null);

(statearr_16413_18466[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (1))){
var state_16390__$1 = state_16390;
var statearr_16417_18468 = state_16390__$1;
(statearr_16417_18468[(2)] = null);

(statearr_16417_18468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (24))){
var inst_16363 = (state_16390[(7)]);
var inst_16372 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16363);
var state_16390__$1 = state_16390;
var statearr_16422_18472 = state_16390__$1;
(statearr_16422_18472[(2)] = inst_16372);

(statearr_16422_18472[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (4))){
var inst_16302 = (state_16390[(8)]);
var inst_16302__$1 = (state_16390[(2)]);
var inst_16304 = (inst_16302__$1 == null);
var state_16390__$1 = (function (){var statearr_16423 = state_16390;
(statearr_16423[(8)] = inst_16302__$1);

return statearr_16423;
})();
if(cljs.core.truth_(inst_16304)){
var statearr_16426_18480 = state_16390__$1;
(statearr_16426_18480[(1)] = (5));

} else {
var statearr_16428_18484 = state_16390__$1;
(statearr_16428_18484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (15))){
var inst_16353 = (state_16390[(2)]);
var state_16390__$1 = state_16390;
var statearr_16430_18490 = state_16390__$1;
(statearr_16430_18490[(2)] = inst_16353);

(statearr_16430_18490[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (21))){
var inst_16377 = (state_16390[(2)]);
var state_16390__$1 = (function (){var statearr_16432 = state_16390;
(statearr_16432[(9)] = inst_16377);

return statearr_16432;
})();
var statearr_16433_18492 = state_16390__$1;
(statearr_16433_18492[(2)] = null);

(statearr_16433_18492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (13))){
var inst_16334 = (state_16390[(10)]);
var inst_16337 = cljs.core.chunked_seq_QMARK_(inst_16334);
var state_16390__$1 = state_16390;
if(inst_16337){
var statearr_16434_18495 = state_16390__$1;
(statearr_16434_18495[(1)] = (16));

} else {
var statearr_16435_18497 = state_16390__$1;
(statearr_16435_18497[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (22))){
var inst_16369 = (state_16390[(2)]);
var state_16390__$1 = state_16390;
if(cljs.core.truth_(inst_16369)){
var statearr_16436_18498 = state_16390__$1;
(statearr_16436_18498[(1)] = (23));

} else {
var statearr_16437_18499 = state_16390__$1;
(statearr_16437_18499[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (6))){
var inst_16302 = (state_16390[(8)]);
var inst_16363 = (state_16390[(7)]);
var inst_16365 = (state_16390[(11)]);
var inst_16363__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16302) : topic_fn.call(null, inst_16302));
var inst_16364 = cljs.core.deref(mults);
var inst_16365__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16364,inst_16363__$1);
var state_16390__$1 = (function (){var statearr_16439 = state_16390;
(statearr_16439[(7)] = inst_16363__$1);

(statearr_16439[(11)] = inst_16365__$1);

return statearr_16439;
})();
if(cljs.core.truth_(inst_16365__$1)){
var statearr_16440_18501 = state_16390__$1;
(statearr_16440_18501[(1)] = (19));

} else {
var statearr_16442_18503 = state_16390__$1;
(statearr_16442_18503[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (25))){
var inst_16374 = (state_16390[(2)]);
var state_16390__$1 = state_16390;
var statearr_16445_18504 = state_16390__$1;
(statearr_16445_18504[(2)] = inst_16374);

(statearr_16445_18504[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (17))){
var inst_16334 = (state_16390[(10)]);
var inst_16344 = cljs.core.first(inst_16334);
var inst_16345 = cljs.core.async.muxch_STAR_(inst_16344);
var inst_16346 = cljs.core.async.close_BANG_(inst_16345);
var inst_16347 = cljs.core.next(inst_16334);
var inst_16317 = inst_16347;
var inst_16318 = null;
var inst_16319 = (0);
var inst_16320 = (0);
var state_16390__$1 = (function (){var statearr_16450 = state_16390;
(statearr_16450[(12)] = inst_16317);

(statearr_16450[(13)] = inst_16318);

(statearr_16450[(14)] = inst_16319);

(statearr_16450[(15)] = inst_16346);

(statearr_16450[(16)] = inst_16320);

return statearr_16450;
})();
var statearr_16454_18508 = state_16390__$1;
(statearr_16454_18508[(2)] = null);

(statearr_16454_18508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (3))){
var inst_16382 = (state_16390[(2)]);
var state_16390__$1 = state_16390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16390__$1,inst_16382);
} else {
if((state_val_16392 === (12))){
var inst_16355 = (state_16390[(2)]);
var state_16390__$1 = state_16390;
var statearr_16456_18510 = state_16390__$1;
(statearr_16456_18510[(2)] = inst_16355);

(statearr_16456_18510[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (2))){
var state_16390__$1 = state_16390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16390__$1,(4),ch);
} else {
if((state_val_16392 === (23))){
var state_16390__$1 = state_16390;
var statearr_16457_18517 = state_16390__$1;
(statearr_16457_18517[(2)] = null);

(statearr_16457_18517[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (19))){
var inst_16302 = (state_16390[(8)]);
var inst_16365 = (state_16390[(11)]);
var inst_16367 = cljs.core.async.muxch_STAR_(inst_16365);
var state_16390__$1 = state_16390;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16390__$1,(22),inst_16367,inst_16302);
} else {
if((state_val_16392 === (11))){
var inst_16317 = (state_16390[(12)]);
var inst_16334 = (state_16390[(10)]);
var inst_16334__$1 = cljs.core.seq(inst_16317);
var state_16390__$1 = (function (){var statearr_16470 = state_16390;
(statearr_16470[(10)] = inst_16334__$1);

return statearr_16470;
})();
if(inst_16334__$1){
var statearr_16471_18519 = state_16390__$1;
(statearr_16471_18519[(1)] = (13));

} else {
var statearr_16472_18520 = state_16390__$1;
(statearr_16472_18520[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (9))){
var inst_16357 = (state_16390[(2)]);
var state_16390__$1 = state_16390;
var statearr_16476_18521 = state_16390__$1;
(statearr_16476_18521[(2)] = inst_16357);

(statearr_16476_18521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (5))){
var inst_16314 = cljs.core.deref(mults);
var inst_16315 = cljs.core.vals(inst_16314);
var inst_16316 = cljs.core.seq(inst_16315);
var inst_16317 = inst_16316;
var inst_16318 = null;
var inst_16319 = (0);
var inst_16320 = (0);
var state_16390__$1 = (function (){var statearr_16478 = state_16390;
(statearr_16478[(12)] = inst_16317);

(statearr_16478[(13)] = inst_16318);

(statearr_16478[(14)] = inst_16319);

(statearr_16478[(16)] = inst_16320);

return statearr_16478;
})();
var statearr_16479_18523 = state_16390__$1;
(statearr_16479_18523[(2)] = null);

(statearr_16479_18523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (14))){
var state_16390__$1 = state_16390;
var statearr_16483_18526 = state_16390__$1;
(statearr_16483_18526[(2)] = null);

(statearr_16483_18526[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (16))){
var inst_16334 = (state_16390[(10)]);
var inst_16339 = cljs.core.chunk_first(inst_16334);
var inst_16340 = cljs.core.chunk_rest(inst_16334);
var inst_16341 = cljs.core.count(inst_16339);
var inst_16317 = inst_16340;
var inst_16318 = inst_16339;
var inst_16319 = inst_16341;
var inst_16320 = (0);
var state_16390__$1 = (function (){var statearr_16488 = state_16390;
(statearr_16488[(12)] = inst_16317);

(statearr_16488[(13)] = inst_16318);

(statearr_16488[(14)] = inst_16319);

(statearr_16488[(16)] = inst_16320);

return statearr_16488;
})();
var statearr_16489_18529 = state_16390__$1;
(statearr_16489_18529[(2)] = null);

(statearr_16489_18529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (10))){
var inst_16317 = (state_16390[(12)]);
var inst_16318 = (state_16390[(13)]);
var inst_16319 = (state_16390[(14)]);
var inst_16320 = (state_16390[(16)]);
var inst_16326 = cljs.core._nth(inst_16318,inst_16320);
var inst_16327 = cljs.core.async.muxch_STAR_(inst_16326);
var inst_16328 = cljs.core.async.close_BANG_(inst_16327);
var inst_16331 = (inst_16320 + (1));
var tmp16480 = inst_16317;
var tmp16481 = inst_16318;
var tmp16482 = inst_16319;
var inst_16317__$1 = tmp16480;
var inst_16318__$1 = tmp16481;
var inst_16319__$1 = tmp16482;
var inst_16320__$1 = inst_16331;
var state_16390__$1 = (function (){var statearr_16491 = state_16390;
(statearr_16491[(17)] = inst_16328);

(statearr_16491[(12)] = inst_16317__$1);

(statearr_16491[(13)] = inst_16318__$1);

(statearr_16491[(14)] = inst_16319__$1);

(statearr_16491[(16)] = inst_16320__$1);

return statearr_16491;
})();
var statearr_16492_18536 = state_16390__$1;
(statearr_16492_18536[(2)] = null);

(statearr_16492_18536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (18))){
var inst_16350 = (state_16390[(2)]);
var state_16390__$1 = state_16390;
var statearr_16493_18537 = state_16390__$1;
(statearr_16493_18537[(2)] = inst_16350);

(statearr_16493_18537[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16392 === (8))){
var inst_16319 = (state_16390[(14)]);
var inst_16320 = (state_16390[(16)]);
var inst_16322 = (inst_16320 < inst_16319);
var inst_16323 = inst_16322;
var state_16390__$1 = state_16390;
if(cljs.core.truth_(inst_16323)){
var statearr_16494_18538 = state_16390__$1;
(statearr_16494_18538[(1)] = (10));

} else {
var statearr_16497_18539 = state_16390__$1;
(statearr_16497_18539[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__14053__auto__ = null;
var cljs$core$async$state_machine__14053__auto____0 = (function (){
var statearr_16498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16498[(0)] = cljs$core$async$state_machine__14053__auto__);

(statearr_16498[(1)] = (1));

return statearr_16498;
});
var cljs$core$async$state_machine__14053__auto____1 = (function (state_16390){
while(true){
var ret_value__14054__auto__ = (function (){try{while(true){
var result__14055__auto__ = switch__14052__auto__(state_16390);
if(cljs.core.keyword_identical_QMARK_(result__14055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14055__auto__;
}
break;
}
}catch (e16499){var ex__14056__auto__ = e16499;
var statearr_16500_18544 = state_16390;
(statearr_16500_18544[(2)] = ex__14056__auto__);


if(cljs.core.seq((state_16390[(4)]))){
var statearr_16501_18545 = state_16390;
(statearr_16501_18545[(1)] = cljs.core.first((state_16390[(4)])));

} else {
throw ex__14056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18547 = state_16390;
state_16390 = G__18547;
continue;
} else {
return ret_value__14054__auto__;
}
break;
}
});
cljs$core$async$state_machine__14053__auto__ = function(state_16390){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14053__auto____1.call(this,state_16390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14053__auto____0;
cljs$core$async$state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14053__auto____1;
return cljs$core$async$state_machine__14053__auto__;
})()
})();
var state__14251__auto__ = (function (){var statearr_16513 = f__14250__auto__();
(statearr_16513[(6)] = c__14249__auto___18462);

return statearr_16513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14251__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16517 = arguments.length;
switch (G__16517) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16543 = arguments.length;
switch (G__16543) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16557 = arguments.length;
switch (G__16557) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14249__auto___18562 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14250__auto__ = (function (){var switch__14052__auto__ = (function (state_16621){
var state_val_16622 = (state_16621[(1)]);
if((state_val_16622 === (7))){
var state_16621__$1 = state_16621;
var statearr_16629_18567 = state_16621__$1;
(statearr_16629_18567[(2)] = null);

(statearr_16629_18567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (1))){
var state_16621__$1 = state_16621;
var statearr_16632_18568 = state_16621__$1;
(statearr_16632_18568[(2)] = null);

(statearr_16632_18568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (4))){
var inst_16570 = (state_16621[(7)]);
var inst_16571 = (state_16621[(8)]);
var inst_16573 = (inst_16571 < inst_16570);
var state_16621__$1 = state_16621;
if(cljs.core.truth_(inst_16573)){
var statearr_16633_18569 = state_16621__$1;
(statearr_16633_18569[(1)] = (6));

} else {
var statearr_16634_18574 = state_16621__$1;
(statearr_16634_18574[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (15))){
var inst_16602 = (state_16621[(9)]);
var inst_16610 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16602);
var state_16621__$1 = state_16621;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16621__$1,(17),out,inst_16610);
} else {
if((state_val_16622 === (13))){
var inst_16602 = (state_16621[(9)]);
var inst_16602__$1 = (state_16621[(2)]);
var inst_16604 = cljs.core.some(cljs.core.nil_QMARK_,inst_16602__$1);
var state_16621__$1 = (function (){var statearr_16644 = state_16621;
(statearr_16644[(9)] = inst_16602__$1);

return statearr_16644;
})();
if(cljs.core.truth_(inst_16604)){
var statearr_16647_18577 = state_16621__$1;
(statearr_16647_18577[(1)] = (14));

} else {
var statearr_16648_18578 = state_16621__$1;
(statearr_16648_18578[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (6))){
var state_16621__$1 = state_16621;
var statearr_16651_18580 = state_16621__$1;
(statearr_16651_18580[(2)] = null);

(statearr_16651_18580[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (17))){
var inst_16612 = (state_16621[(2)]);
var state_16621__$1 = (function (){var statearr_16690 = state_16621;
(statearr_16690[(10)] = inst_16612);

return statearr_16690;
})();
var statearr_16698_18581 = state_16621__$1;
(statearr_16698_18581[(2)] = null);

(statearr_16698_18581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (3))){
var inst_16617 = (state_16621[(2)]);
var state_16621__$1 = state_16621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16621__$1,inst_16617);
} else {
if((state_val_16622 === (12))){
var _ = (function (){var statearr_16699 = state_16621;
(statearr_16699[(4)] = cljs.core.rest((state_16621[(4)])));

return statearr_16699;
})();
var state_16621__$1 = state_16621;
var ex16657 = (state_16621__$1[(2)]);
var statearr_16700_18585 = state_16621__$1;
(statearr_16700_18585[(5)] = ex16657);


if((ex16657 instanceof Object)){
var statearr_16701_18586 = state_16621__$1;
(statearr_16701_18586[(1)] = (11));

(statearr_16701_18586[(5)] = null);

} else {
throw ex16657;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (2))){
var inst_16569 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16570 = cnt;
var inst_16571 = (0);
var state_16621__$1 = (function (){var statearr_16702 = state_16621;
(statearr_16702[(7)] = inst_16570);

(statearr_16702[(11)] = inst_16569);

(statearr_16702[(8)] = inst_16571);

return statearr_16702;
})();
var statearr_16706_18594 = state_16621__$1;
(statearr_16706_18594[(2)] = null);

(statearr_16706_18594[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (11))){
var inst_16578 = (state_16621[(2)]);
var inst_16579 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16621__$1 = (function (){var statearr_16710 = state_16621;
(statearr_16710[(12)] = inst_16578);

return statearr_16710;
})();
var statearr_16711_18595 = state_16621__$1;
(statearr_16711_18595[(2)] = inst_16579);

(statearr_16711_18595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (9))){
var inst_16571 = (state_16621[(8)]);
var _ = (function (){var statearr_16712 = state_16621;
(statearr_16712[(4)] = cljs.core.cons((12),(state_16621[(4)])));

return statearr_16712;
})();
var inst_16588 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16571) : chs__$1.call(null, inst_16571));
var inst_16589 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16571) : done.call(null, inst_16571));
var inst_16590 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16588,inst_16589);
var ___$1 = (function (){var statearr_16713 = state_16621;
(statearr_16713[(4)] = cljs.core.rest((state_16621[(4)])));

return statearr_16713;
})();
var state_16621__$1 = state_16621;
var statearr_16714_18596 = state_16621__$1;
(statearr_16714_18596[(2)] = inst_16590);

(statearr_16714_18596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (5))){
var inst_16600 = (state_16621[(2)]);
var state_16621__$1 = (function (){var statearr_16715 = state_16621;
(statearr_16715[(13)] = inst_16600);

return statearr_16715;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16621__$1,(13),dchan);
} else {
if((state_val_16622 === (14))){
var inst_16607 = cljs.core.async.close_BANG_(out);
var state_16621__$1 = state_16621;
var statearr_16719_18597 = state_16621__$1;
(statearr_16719_18597[(2)] = inst_16607);

(statearr_16719_18597[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (16))){
var inst_16615 = (state_16621[(2)]);
var state_16621__$1 = state_16621;
var statearr_16725_18598 = state_16621__$1;
(statearr_16725_18598[(2)] = inst_16615);

(statearr_16725_18598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (10))){
var inst_16571 = (state_16621[(8)]);
var inst_16593 = (state_16621[(2)]);
var inst_16594 = (inst_16571 + (1));
var inst_16571__$1 = inst_16594;
var state_16621__$1 = (function (){var statearr_16726 = state_16621;
(statearr_16726[(14)] = inst_16593);

(statearr_16726[(8)] = inst_16571__$1);

return statearr_16726;
})();
var statearr_16731_18599 = state_16621__$1;
(statearr_16731_18599[(2)] = null);

(statearr_16731_18599[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (8))){
var inst_16598 = (state_16621[(2)]);
var state_16621__$1 = state_16621;
var statearr_16735_18600 = state_16621__$1;
(statearr_16735_18600[(2)] = inst_16598);

(statearr_16735_18600[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__14053__auto__ = null;
var cljs$core$async$state_machine__14053__auto____0 = (function (){
var statearr_16746 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16746[(0)] = cljs$core$async$state_machine__14053__auto__);

(statearr_16746[(1)] = (1));

return statearr_16746;
});
var cljs$core$async$state_machine__14053__auto____1 = (function (state_16621){
while(true){
var ret_value__14054__auto__ = (function (){try{while(true){
var result__14055__auto__ = switch__14052__auto__(state_16621);
if(cljs.core.keyword_identical_QMARK_(result__14055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14055__auto__;
}
break;
}
}catch (e16752){var ex__14056__auto__ = e16752;
var statearr_16755_18601 = state_16621;
(statearr_16755_18601[(2)] = ex__14056__auto__);


if(cljs.core.seq((state_16621[(4)]))){
var statearr_16757_18602 = state_16621;
(statearr_16757_18602[(1)] = cljs.core.first((state_16621[(4)])));

} else {
throw ex__14056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18603 = state_16621;
state_16621 = G__18603;
continue;
} else {
return ret_value__14054__auto__;
}
break;
}
});
cljs$core$async$state_machine__14053__auto__ = function(state_16621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14053__auto____1.call(this,state_16621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14053__auto____0;
cljs$core$async$state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14053__auto____1;
return cljs$core$async$state_machine__14053__auto__;
})()
})();
var state__14251__auto__ = (function (){var statearr_16759 = f__14250__auto__();
(statearr_16759[(6)] = c__14249__auto___18562);

return statearr_16759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14251__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16769 = arguments.length;
switch (G__16769) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14249__auto___18610 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14250__auto__ = (function (){var switch__14052__auto__ = (function (state_16811){
var state_val_16812 = (state_16811[(1)]);
if((state_val_16812 === (7))){
var inst_16785 = (state_16811[(7)]);
var inst_16784 = (state_16811[(8)]);
var inst_16784__$1 = (state_16811[(2)]);
var inst_16785__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16784__$1,(0),null);
var inst_16786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16784__$1,(1),null);
var inst_16787 = (inst_16785__$1 == null);
var state_16811__$1 = (function (){var statearr_16814 = state_16811;
(statearr_16814[(9)] = inst_16786);

(statearr_16814[(7)] = inst_16785__$1);

(statearr_16814[(8)] = inst_16784__$1);

return statearr_16814;
})();
if(cljs.core.truth_(inst_16787)){
var statearr_16815_18612 = state_16811__$1;
(statearr_16815_18612[(1)] = (8));

} else {
var statearr_16817_18613 = state_16811__$1;
(statearr_16817_18613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (1))){
var inst_16773 = cljs.core.vec(chs);
var inst_16774 = inst_16773;
var state_16811__$1 = (function (){var statearr_16819 = state_16811;
(statearr_16819[(10)] = inst_16774);

return statearr_16819;
})();
var statearr_16820_18618 = state_16811__$1;
(statearr_16820_18618[(2)] = null);

(statearr_16820_18618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (4))){
var inst_16774 = (state_16811[(10)]);
var state_16811__$1 = state_16811;
return cljs.core.async.ioc_alts_BANG_(state_16811__$1,(7),inst_16774);
} else {
if((state_val_16812 === (6))){
var inst_16803 = (state_16811[(2)]);
var state_16811__$1 = state_16811;
var statearr_16822_18629 = state_16811__$1;
(statearr_16822_18629[(2)] = inst_16803);

(statearr_16822_18629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (3))){
var inst_16805 = (state_16811[(2)]);
var state_16811__$1 = state_16811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16811__$1,inst_16805);
} else {
if((state_val_16812 === (2))){
var inst_16774 = (state_16811[(10)]);
var inst_16776 = cljs.core.count(inst_16774);
var inst_16777 = (inst_16776 > (0));
var state_16811__$1 = state_16811;
if(cljs.core.truth_(inst_16777)){
var statearr_16828_18631 = state_16811__$1;
(statearr_16828_18631[(1)] = (4));

} else {
var statearr_16829_18635 = state_16811__$1;
(statearr_16829_18635[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (11))){
var inst_16774 = (state_16811[(10)]);
var inst_16796 = (state_16811[(2)]);
var tmp16824 = inst_16774;
var inst_16774__$1 = tmp16824;
var state_16811__$1 = (function (){var statearr_16833 = state_16811;
(statearr_16833[(10)] = inst_16774__$1);

(statearr_16833[(11)] = inst_16796);

return statearr_16833;
})();
var statearr_16834_18641 = state_16811__$1;
(statearr_16834_18641[(2)] = null);

(statearr_16834_18641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (9))){
var inst_16785 = (state_16811[(7)]);
var state_16811__$1 = state_16811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16811__$1,(11),out,inst_16785);
} else {
if((state_val_16812 === (5))){
var inst_16801 = cljs.core.async.close_BANG_(out);
var state_16811__$1 = state_16811;
var statearr_16839_18642 = state_16811__$1;
(statearr_16839_18642[(2)] = inst_16801);

(statearr_16839_18642[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (10))){
var inst_16799 = (state_16811[(2)]);
var state_16811__$1 = state_16811;
var statearr_16840_18648 = state_16811__$1;
(statearr_16840_18648[(2)] = inst_16799);

(statearr_16840_18648[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16812 === (8))){
var inst_16774 = (state_16811[(10)]);
var inst_16786 = (state_16811[(9)]);
var inst_16785 = (state_16811[(7)]);
var inst_16784 = (state_16811[(8)]);
var inst_16791 = (function (){var cs = inst_16774;
var vec__16779 = inst_16784;
var v = inst_16785;
var c = inst_16786;
return (function (p1__16767_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16767_SHARP_);
});
})();
var inst_16792 = cljs.core.filterv(inst_16791,inst_16774);
var inst_16774__$1 = inst_16792;
var state_16811__$1 = (function (){var statearr_16844 = state_16811;
(statearr_16844[(10)] = inst_16774__$1);

return statearr_16844;
})();
var statearr_16846_18654 = state_16811__$1;
(statearr_16846_18654[(2)] = null);

(statearr_16846_18654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__14053__auto__ = null;
var cljs$core$async$state_machine__14053__auto____0 = (function (){
var statearr_16847 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16847[(0)] = cljs$core$async$state_machine__14053__auto__);

(statearr_16847[(1)] = (1));

return statearr_16847;
});
var cljs$core$async$state_machine__14053__auto____1 = (function (state_16811){
while(true){
var ret_value__14054__auto__ = (function (){try{while(true){
var result__14055__auto__ = switch__14052__auto__(state_16811);
if(cljs.core.keyword_identical_QMARK_(result__14055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14055__auto__;
}
break;
}
}catch (e16848){var ex__14056__auto__ = e16848;
var statearr_16849_18666 = state_16811;
(statearr_16849_18666[(2)] = ex__14056__auto__);


if(cljs.core.seq((state_16811[(4)]))){
var statearr_16850_18667 = state_16811;
(statearr_16850_18667[(1)] = cljs.core.first((state_16811[(4)])));

} else {
throw ex__14056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18668 = state_16811;
state_16811 = G__18668;
continue;
} else {
return ret_value__14054__auto__;
}
break;
}
});
cljs$core$async$state_machine__14053__auto__ = function(state_16811){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14053__auto____1.call(this,state_16811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14053__auto____0;
cljs$core$async$state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14053__auto____1;
return cljs$core$async$state_machine__14053__auto__;
})()
})();
var state__14251__auto__ = (function (){var statearr_16852 = f__14250__auto__();
(statearr_16852[(6)] = c__14249__auto___18610);

return statearr_16852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14251__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16860 = arguments.length;
switch (G__16860) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14249__auto___18674 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14250__auto__ = (function (){var switch__14052__auto__ = (function (state_16889){
var state_val_16890 = (state_16889[(1)]);
if((state_val_16890 === (7))){
var inst_16871 = (state_16889[(7)]);
var inst_16871__$1 = (state_16889[(2)]);
var inst_16872 = (inst_16871__$1 == null);
var inst_16873 = cljs.core.not(inst_16872);
var state_16889__$1 = (function (){var statearr_16895 = state_16889;
(statearr_16895[(7)] = inst_16871__$1);

return statearr_16895;
})();
if(inst_16873){
var statearr_16900_18686 = state_16889__$1;
(statearr_16900_18686[(1)] = (8));

} else {
var statearr_16901_18687 = state_16889__$1;
(statearr_16901_18687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16890 === (1))){
var inst_16865 = (0);
var state_16889__$1 = (function (){var statearr_16906 = state_16889;
(statearr_16906[(8)] = inst_16865);

return statearr_16906;
})();
var statearr_16907_18692 = state_16889__$1;
(statearr_16907_18692[(2)] = null);

(statearr_16907_18692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16890 === (4))){
var state_16889__$1 = state_16889;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16889__$1,(7),ch);
} else {
if((state_val_16890 === (6))){
var inst_16884 = (state_16889[(2)]);
var state_16889__$1 = state_16889;
var statearr_16908_18693 = state_16889__$1;
(statearr_16908_18693[(2)] = inst_16884);

(statearr_16908_18693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16890 === (3))){
var inst_16886 = (state_16889[(2)]);
var inst_16887 = cljs.core.async.close_BANG_(out);
var state_16889__$1 = (function (){var statearr_16910 = state_16889;
(statearr_16910[(9)] = inst_16886);

return statearr_16910;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16889__$1,inst_16887);
} else {
if((state_val_16890 === (2))){
var inst_16865 = (state_16889[(8)]);
var inst_16868 = (inst_16865 < n);
var state_16889__$1 = state_16889;
if(cljs.core.truth_(inst_16868)){
var statearr_16911_18699 = state_16889__$1;
(statearr_16911_18699[(1)] = (4));

} else {
var statearr_16912_18700 = state_16889__$1;
(statearr_16912_18700[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16890 === (11))){
var inst_16865 = (state_16889[(8)]);
var inst_16876 = (state_16889[(2)]);
var inst_16877 = (inst_16865 + (1));
var inst_16865__$1 = inst_16877;
var state_16889__$1 = (function (){var statearr_16920 = state_16889;
(statearr_16920[(8)] = inst_16865__$1);

(statearr_16920[(10)] = inst_16876);

return statearr_16920;
})();
var statearr_16921_18701 = state_16889__$1;
(statearr_16921_18701[(2)] = null);

(statearr_16921_18701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16890 === (9))){
var state_16889__$1 = state_16889;
var statearr_16923_18707 = state_16889__$1;
(statearr_16923_18707[(2)] = null);

(statearr_16923_18707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16890 === (5))){
var state_16889__$1 = state_16889;
var statearr_16929_18708 = state_16889__$1;
(statearr_16929_18708[(2)] = null);

(statearr_16929_18708[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16890 === (10))){
var inst_16881 = (state_16889[(2)]);
var state_16889__$1 = state_16889;
var statearr_16937_18709 = state_16889__$1;
(statearr_16937_18709[(2)] = inst_16881);

(statearr_16937_18709[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16890 === (8))){
var inst_16871 = (state_16889[(7)]);
var state_16889__$1 = state_16889;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16889__$1,(11),out,inst_16871);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__14053__auto__ = null;
var cljs$core$async$state_machine__14053__auto____0 = (function (){
var statearr_16940 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16940[(0)] = cljs$core$async$state_machine__14053__auto__);

(statearr_16940[(1)] = (1));

return statearr_16940;
});
var cljs$core$async$state_machine__14053__auto____1 = (function (state_16889){
while(true){
var ret_value__14054__auto__ = (function (){try{while(true){
var result__14055__auto__ = switch__14052__auto__(state_16889);
if(cljs.core.keyword_identical_QMARK_(result__14055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14055__auto__;
}
break;
}
}catch (e16941){var ex__14056__auto__ = e16941;
var statearr_16942_18716 = state_16889;
(statearr_16942_18716[(2)] = ex__14056__auto__);


if(cljs.core.seq((state_16889[(4)]))){
var statearr_16943_18717 = state_16889;
(statearr_16943_18717[(1)] = cljs.core.first((state_16889[(4)])));

} else {
throw ex__14056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18726 = state_16889;
state_16889 = G__18726;
continue;
} else {
return ret_value__14054__auto__;
}
break;
}
});
cljs$core$async$state_machine__14053__auto__ = function(state_16889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14053__auto____1.call(this,state_16889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14053__auto____0;
cljs$core$async$state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14053__auto____1;
return cljs$core$async$state_machine__14053__auto__;
})()
})();
var state__14251__auto__ = (function (){var statearr_16945 = f__14250__auto__();
(statearr_16945[(6)] = c__14249__auto___18674);

return statearr_16945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14251__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16976 = (function (f,ch,meta16960,_,fn1,meta16977){
this.f = f;
this.ch = ch;
this.meta16960 = meta16960;
this._ = _;
this.fn1 = fn1;
this.meta16977 = meta16977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16978,meta16977__$1){
var self__ = this;
var _16978__$1 = this;
return (new cljs.core.async.t_cljs$core$async16976(self__.f,self__.ch,self__.meta16960,self__._,self__.fn1,meta16977__$1));
}));

(cljs.core.async.t_cljs$core$async16976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16978){
var self__ = this;
var _16978__$1 = this;
return self__.meta16977;
}));

(cljs.core.async.t_cljs$core$async16976.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16976.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16976.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16976.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16957_SHARP_){
var G__16986 = (((p1__16957_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16957_SHARP_) : self__.f.call(null, p1__16957_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16986) : f1.call(null, G__16986));
});
}));

(cljs.core.async.t_cljs$core$async16976.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16960","meta16960",-1924152610,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16959","cljs.core.async/t_cljs$core$async16959",171872562,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16977","meta16977",174462201,null)], null);
}));

(cljs.core.async.t_cljs$core$async16976.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16976");

(cljs.core.async.t_cljs$core$async16976.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16976");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16976.
 */
cljs.core.async.__GT_t_cljs$core$async16976 = (function cljs$core$async$__GT_t_cljs$core$async16976(f,ch,meta16960,_,fn1,meta16977){
return (new cljs.core.async.t_cljs$core$async16976(f,ch,meta16960,_,fn1,meta16977));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16959 = (function (f,ch,meta16960){
this.f = f;
this.ch = ch;
this.meta16960 = meta16960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16961,meta16960__$1){
var self__ = this;
var _16961__$1 = this;
return (new cljs.core.async.t_cljs$core$async16959(self__.f,self__.ch,meta16960__$1));
}));

(cljs.core.async.t_cljs$core$async16959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16961){
var self__ = this;
var _16961__$1 = this;
return self__.meta16960;
}));

(cljs.core.async.t_cljs$core$async16959.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16959.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16959.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16959.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16959.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16976(self__.f,self__.ch,self__.meta16960,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16991 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16991) : self__.f.call(null, G__16991));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16959.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16959.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16959.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16960","meta16960",-1924152610,null)], null);
}));

(cljs.core.async.t_cljs$core$async16959.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16959.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16959");

(cljs.core.async.t_cljs$core$async16959.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16959");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16959.
 */
cljs.core.async.__GT_t_cljs$core$async16959 = (function cljs$core$async$__GT_t_cljs$core$async16959(f,ch,meta16960){
return (new cljs.core.async.t_cljs$core$async16959(f,ch,meta16960));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16959(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16996 = (function (f,ch,meta16997){
this.f = f;
this.ch = ch;
this.meta16997 = meta16997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16998,meta16997__$1){
var self__ = this;
var _16998__$1 = this;
return (new cljs.core.async.t_cljs$core$async16996(self__.f,self__.ch,meta16997__$1));
}));

(cljs.core.async.t_cljs$core$async16996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16998){
var self__ = this;
var _16998__$1 = this;
return self__.meta16997;
}));

(cljs.core.async.t_cljs$core$async16996.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16996.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16996.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16996.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16996.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16996.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16997","meta16997",2073920064,null)], null);
}));

(cljs.core.async.t_cljs$core$async16996.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16996");

(cljs.core.async.t_cljs$core$async16996.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16996");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16996.
 */
cljs.core.async.__GT_t_cljs$core$async16996 = (function cljs$core$async$__GT_t_cljs$core$async16996(f,ch,meta16997){
return (new cljs.core.async.t_cljs$core$async16996(f,ch,meta16997));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16996(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17009 = (function (p,ch,meta17010){
this.p = p;
this.ch = ch;
this.meta17010 = meta17010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17011,meta17010__$1){
var self__ = this;
var _17011__$1 = this;
return (new cljs.core.async.t_cljs$core$async17009(self__.p,self__.ch,meta17010__$1));
}));

(cljs.core.async.t_cljs$core$async17009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17011){
var self__ = this;
var _17011__$1 = this;
return self__.meta17010;
}));

(cljs.core.async.t_cljs$core$async17009.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17009.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17009.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17009.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17009.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17009.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17009.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17009.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17010","meta17010",169498847,null)], null);
}));

(cljs.core.async.t_cljs$core$async17009.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17009.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17009");

(cljs.core.async.t_cljs$core$async17009.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17009");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17009.
 */
cljs.core.async.__GT_t_cljs$core$async17009 = (function cljs$core$async$__GT_t_cljs$core$async17009(p,ch,meta17010){
return (new cljs.core.async.t_cljs$core$async17009(p,ch,meta17010));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17009(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17026 = arguments.length;
switch (G__17026) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14249__auto___18764 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14250__auto__ = (function (){var switch__14052__auto__ = (function (state_17053){
var state_val_17054 = (state_17053[(1)]);
if((state_val_17054 === (7))){
var inst_17049 = (state_17053[(2)]);
var state_17053__$1 = state_17053;
var statearr_17057_18773 = state_17053__$1;
(statearr_17057_18773[(2)] = inst_17049);

(statearr_17057_18773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17054 === (1))){
var state_17053__$1 = state_17053;
var statearr_17058_18778 = state_17053__$1;
(statearr_17058_18778[(2)] = null);

(statearr_17058_18778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17054 === (4))){
var inst_17035 = (state_17053[(7)]);
var inst_17035__$1 = (state_17053[(2)]);
var inst_17036 = (inst_17035__$1 == null);
var state_17053__$1 = (function (){var statearr_17059 = state_17053;
(statearr_17059[(7)] = inst_17035__$1);

return statearr_17059;
})();
if(cljs.core.truth_(inst_17036)){
var statearr_17060_18784 = state_17053__$1;
(statearr_17060_18784[(1)] = (5));

} else {
var statearr_17063_18786 = state_17053__$1;
(statearr_17063_18786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17054 === (6))){
var inst_17035 = (state_17053[(7)]);
var inst_17040 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17035) : p.call(null, inst_17035));
var state_17053__$1 = state_17053;
if(cljs.core.truth_(inst_17040)){
var statearr_17066_18790 = state_17053__$1;
(statearr_17066_18790[(1)] = (8));

} else {
var statearr_17067_18792 = state_17053__$1;
(statearr_17067_18792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17054 === (3))){
var inst_17051 = (state_17053[(2)]);
var state_17053__$1 = state_17053;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17053__$1,inst_17051);
} else {
if((state_val_17054 === (2))){
var state_17053__$1 = state_17053;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17053__$1,(4),ch);
} else {
if((state_val_17054 === (11))){
var inst_17043 = (state_17053[(2)]);
var state_17053__$1 = state_17053;
var statearr_17068_18796 = state_17053__$1;
(statearr_17068_18796[(2)] = inst_17043);

(statearr_17068_18796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17054 === (9))){
var state_17053__$1 = state_17053;
var statearr_17069_18797 = state_17053__$1;
(statearr_17069_18797[(2)] = null);

(statearr_17069_18797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17054 === (5))){
var inst_17038 = cljs.core.async.close_BANG_(out);
var state_17053__$1 = state_17053;
var statearr_17071_18801 = state_17053__$1;
(statearr_17071_18801[(2)] = inst_17038);

(statearr_17071_18801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17054 === (10))){
var inst_17046 = (state_17053[(2)]);
var state_17053__$1 = (function (){var statearr_17075 = state_17053;
(statearr_17075[(8)] = inst_17046);

return statearr_17075;
})();
var statearr_17076_18803 = state_17053__$1;
(statearr_17076_18803[(2)] = null);

(statearr_17076_18803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17054 === (8))){
var inst_17035 = (state_17053[(7)]);
var state_17053__$1 = state_17053;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17053__$1,(11),out,inst_17035);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__14053__auto__ = null;
var cljs$core$async$state_machine__14053__auto____0 = (function (){
var statearr_17078 = [null,null,null,null,null,null,null,null,null];
(statearr_17078[(0)] = cljs$core$async$state_machine__14053__auto__);

(statearr_17078[(1)] = (1));

return statearr_17078;
});
var cljs$core$async$state_machine__14053__auto____1 = (function (state_17053){
while(true){
var ret_value__14054__auto__ = (function (){try{while(true){
var result__14055__auto__ = switch__14052__auto__(state_17053);
if(cljs.core.keyword_identical_QMARK_(result__14055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14055__auto__;
}
break;
}
}catch (e17079){var ex__14056__auto__ = e17079;
var statearr_17081_18823 = state_17053;
(statearr_17081_18823[(2)] = ex__14056__auto__);


if(cljs.core.seq((state_17053[(4)]))){
var statearr_17083_18824 = state_17053;
(statearr_17083_18824[(1)] = cljs.core.first((state_17053[(4)])));

} else {
throw ex__14056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18828 = state_17053;
state_17053 = G__18828;
continue;
} else {
return ret_value__14054__auto__;
}
break;
}
});
cljs$core$async$state_machine__14053__auto__ = function(state_17053){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14053__auto____1.call(this,state_17053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14053__auto____0;
cljs$core$async$state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14053__auto____1;
return cljs$core$async$state_machine__14053__auto__;
})()
})();
var state__14251__auto__ = (function (){var statearr_17084 = f__14250__auto__();
(statearr_17084[(6)] = c__14249__auto___18764);

return statearr_17084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14251__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17091 = arguments.length;
switch (G__17091) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14249__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14250__auto__ = (function (){var switch__14052__auto__ = (function (state_17162){
var state_val_17163 = (state_17162[(1)]);
if((state_val_17163 === (7))){
var inst_17158 = (state_17162[(2)]);
var state_17162__$1 = state_17162;
var statearr_17166_18853 = state_17162__$1;
(statearr_17166_18853[(2)] = inst_17158);

(statearr_17166_18853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17163 === (20))){
var inst_17128 = (state_17162[(7)]);
var inst_17139 = (state_17162[(2)]);
var inst_17140 = cljs.core.next(inst_17128);
var inst_17114 = inst_17140;
var inst_17115 = null;
var inst_17116 = (0);
var inst_17117 = (0);
var state_17162__$1 = (function (){var statearr_17173 = state_17162;
(statearr_17173[(8)] = inst_17114);

(statearr_17173[(9)] = inst_17115);

(statearr_17173[(10)] = inst_17116);

(statearr_17173[(11)] = inst_17139);

(statearr_17173[(12)] = inst_17117);

return statearr_17173;
})();
var statearr_17176_18869 = state_17162__$1;
(statearr_17176_18869[(2)] = null);

(statearr_17176_18869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17163 === (1))){
var state_17162__$1 = state_17162;
var statearr_17177_18871 = state_17162__$1;
(statearr_17177_18871[(2)] = null);

(statearr_17177_18871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17163 === (4))){
var inst_17103 = (state_17162[(13)]);
var inst_17103__$1 = (state_17162[(2)]);
var inst_17104 = (inst_17103__$1 == null);
var state_17162__$1 = (function (){var statearr_17178 = state_17162;
(statearr_17178[(13)] = inst_17103__$1);

return statearr_17178;
})();
if(cljs.core.truth_(inst_17104)){
var statearr_17179_18877 = state_17162__$1;
(statearr_17179_18877[(1)] = (5));

} else {
var statearr_17181_18882 = state_17162__$1;
(statearr_17181_18882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17163 === (15))){
var state_17162__$1 = state_17162;
var statearr_17196_18887 = state_17162__$1;
(statearr_17196_18887[(2)] = null);

(statearr_17196_18887[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17163 === (21))){
var state_17162__$1 = state_17162;
var statearr_17197_18888 = state_17162__$1;
(statearr_17197_18888[(2)] = null);

(statearr_17197_18888[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17163 === (13))){
var inst_17114 = (state_17162[(8)]);
var inst_17115 = (state_17162[(9)]);
var inst_17116 = (state_17162[(10)]);
var inst_17117 = (state_17162[(12)]);
var inst_17124 = (state_17162[(2)]);
var inst_17125 = (inst_17117 + (1));
var tmp17192 = inst_17114;
var tmp17193 = inst_17115;
var tmp17194 = inst_17116;
var inst_17114__$1 = tmp17192;
var inst_17115__$1 = tmp17193;
var inst_17116__$1 = tmp17194;
var inst_17117__$1 = inst_17125;
var state_17162__$1 = (function (){var statearr_17201 = state_17162;
(statearr_17201[(8)] = inst_17114__$1);

(statearr_17201[(14)] = inst_17124);

(statearr_17201[(9)] = inst_17115__$1);

(statearr_17201[(10)] = inst_17116__$1);

(statearr_17201[(12)] = inst_17117__$1);

return statearr_17201;
})();
var statearr_17202_18896 = state_17162__$1;
(statearr_17202_18896[(2)] = null);

(statearr_17202_18896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17163 === (22))){
var state_17162__$1 = state_17162;
var statearr_17203_18898 = state_17162__$1;
(statearr_17203_18898[(2)] = null);

(statearr_17203_18898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17163 === (6))){
var inst_17103 = (state_17162[(13)]);
var inst_17112 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17103) : f.call(null, inst_17103));
var inst_17113 = cljs.core.seq(inst_17112);
var inst_17114 = inst_17113;
var inst_17115 = null;
var inst_17116 = (0);
var inst_17117 = (0);
var state_17162__$1 = (function (){var statearr_17207 = state_17162;
(statearr_17207[(8)] = inst_17114);

(statearr_17207[(9)] = inst_17115);

(statearr_17207[(10)] = inst_17116);

(statearr_17207[(12)] = inst_17117);

return statearr_17207;
})();
var statearr_17208_18904 = state_17162__$1;
(statearr_17208_18904[(2)] = null);

(statearr_17208_18904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17163 === (17))){
var inst_17128 = (state_17162[(7)]);
var inst_17132 = cljs.core.chunk_first(inst_17128);
var inst_17133 = cljs.core.chunk_rest(inst_17128);
var inst_17134 = cljs.core.count(inst_17132);
var inst_17114 = inst_17133;
var inst_17115 = inst_17132;
var inst_17116 = inst_17134;
var inst_17117 = (0);
var state_17162__$1 = (function (){var statearr_17209 = state_17162;
(statearr_17209[(8)] = inst_17114);

(statearr_17209[(9)] = inst_17115);

(statearr_17209[(10)] = inst_17116);

(statearr_17209[(12)] = inst_17117);

return statearr_17209;
})();
var statearr_17210_18908 = state_17162__$1;
(statearr_17210_18908[(2)] = null);

(statearr_17210_18908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17163 === (3))){
var inst_17160 = (state_17162[(2)]);
var state_17162__$1 = state_17162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17162__$1,inst_17160);
} else {
if((state_val_17163 === (12))){
var inst_17148 = (state_17162[(2)]);
var state_17162__$1 = state_17162;
var statearr_17211_18909 = state_17162__$1;
(statearr_17211_18909[(2)] = inst_17148);

(statearr_17211_18909[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17163 === (2))){
var state_17162__$1 = state_17162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17162__$1,(4),in$);
} else {
if((state_val_17163 === (23))){
var inst_17156 = (state_17162[(2)]);
var state_17162__$1 = state_17162;
var statearr_17212_18910 = state_17162__$1;
(statearr_17212_18910[(2)] = inst_17156);

(statearr_17212_18910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17163 === (19))){
var inst_17143 = (state_17162[(2)]);
var state_17162__$1 = state_17162;
var statearr_17213_18919 = state_17162__$1;
(statearr_17213_18919[(2)] = inst_17143);

(statearr_17213_18919[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17163 === (11))){
var inst_17114 = (state_17162[(8)]);
var inst_17128 = (state_17162[(7)]);
var inst_17128__$1 = cljs.core.seq(inst_17114);
var state_17162__$1 = (function (){var statearr_17214 = state_17162;
(statearr_17214[(7)] = inst_17128__$1);

return statearr_17214;
})();
if(inst_17128__$1){
var statearr_17216_18937 = state_17162__$1;
(statearr_17216_18937[(1)] = (14));

} else {
var statearr_17217_18940 = state_17162__$1;
(statearr_17217_18940[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17163 === (9))){
var inst_17150 = (state_17162[(2)]);
var inst_17151 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17162__$1 = (function (){var statearr_17218 = state_17162;
(statearr_17218[(15)] = inst_17150);

return statearr_17218;
})();
if(cljs.core.truth_(inst_17151)){
var statearr_17219_18957 = state_17162__$1;
(statearr_17219_18957[(1)] = (21));

} else {
var statearr_17220_18968 = state_17162__$1;
(statearr_17220_18968[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17163 === (5))){
var inst_17106 = cljs.core.async.close_BANG_(out);
var state_17162__$1 = state_17162;
var statearr_17224_18987 = state_17162__$1;
(statearr_17224_18987[(2)] = inst_17106);

(statearr_17224_18987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17163 === (14))){
var inst_17128 = (state_17162[(7)]);
var inst_17130 = cljs.core.chunked_seq_QMARK_(inst_17128);
var state_17162__$1 = state_17162;
if(inst_17130){
var statearr_17225_19013 = state_17162__$1;
(statearr_17225_19013[(1)] = (17));

} else {
var statearr_17227_19021 = state_17162__$1;
(statearr_17227_19021[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17163 === (16))){
var inst_17146 = (state_17162[(2)]);
var state_17162__$1 = state_17162;
var statearr_17229_19024 = state_17162__$1;
(statearr_17229_19024[(2)] = inst_17146);

(statearr_17229_19024[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17163 === (10))){
var inst_17115 = (state_17162[(9)]);
var inst_17117 = (state_17162[(12)]);
var inst_17122 = cljs.core._nth(inst_17115,inst_17117);
var state_17162__$1 = state_17162;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17162__$1,(13),out,inst_17122);
} else {
if((state_val_17163 === (18))){
var inst_17128 = (state_17162[(7)]);
var inst_17137 = cljs.core.first(inst_17128);
var state_17162__$1 = state_17162;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17162__$1,(20),out,inst_17137);
} else {
if((state_val_17163 === (8))){
var inst_17116 = (state_17162[(10)]);
var inst_17117 = (state_17162[(12)]);
var inst_17119 = (inst_17117 < inst_17116);
var inst_17120 = inst_17119;
var state_17162__$1 = state_17162;
if(cljs.core.truth_(inst_17120)){
var statearr_17236_19082 = state_17162__$1;
(statearr_17236_19082[(1)] = (10));

} else {
var statearr_17237_19083 = state_17162__$1;
(statearr_17237_19083[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14053__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14053__auto____0 = (function (){
var statearr_17238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17238[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14053__auto__);

(statearr_17238[(1)] = (1));

return statearr_17238;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14053__auto____1 = (function (state_17162){
while(true){
var ret_value__14054__auto__ = (function (){try{while(true){
var result__14055__auto__ = switch__14052__auto__(state_17162);
if(cljs.core.keyword_identical_QMARK_(result__14055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14055__auto__;
}
break;
}
}catch (e17240){var ex__14056__auto__ = e17240;
var statearr_17241_19093 = state_17162;
(statearr_17241_19093[(2)] = ex__14056__auto__);


if(cljs.core.seq((state_17162[(4)]))){
var statearr_17242_19094 = state_17162;
(statearr_17242_19094[(1)] = cljs.core.first((state_17162[(4)])));

} else {
throw ex__14056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19096 = state_17162;
state_17162 = G__19096;
continue;
} else {
return ret_value__14054__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14053__auto__ = function(state_17162){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14053__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14053__auto____1.call(this,state_17162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14053__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14053__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14053__auto__;
})()
})();
var state__14251__auto__ = (function (){var statearr_17246 = f__14250__auto__();
(statearr_17246[(6)] = c__14249__auto__);

return statearr_17246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14251__auto__);
}));

return c__14249__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17248 = arguments.length;
switch (G__17248) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17261 = arguments.length;
switch (G__17261) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17265 = arguments.length;
switch (G__17265) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14249__auto___19144 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14250__auto__ = (function (){var switch__14052__auto__ = (function (state_17291){
var state_val_17292 = (state_17291[(1)]);
if((state_val_17292 === (7))){
var inst_17286 = (state_17291[(2)]);
var state_17291__$1 = state_17291;
var statearr_17296_19158 = state_17291__$1;
(statearr_17296_19158[(2)] = inst_17286);

(statearr_17296_19158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17292 === (1))){
var inst_17267 = null;
var state_17291__$1 = (function (){var statearr_17298 = state_17291;
(statearr_17298[(7)] = inst_17267);

return statearr_17298;
})();
var statearr_17299_19167 = state_17291__$1;
(statearr_17299_19167[(2)] = null);

(statearr_17299_19167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17292 === (4))){
var inst_17270 = (state_17291[(8)]);
var inst_17270__$1 = (state_17291[(2)]);
var inst_17271 = (inst_17270__$1 == null);
var inst_17272 = cljs.core.not(inst_17271);
var state_17291__$1 = (function (){var statearr_17305 = state_17291;
(statearr_17305[(8)] = inst_17270__$1);

return statearr_17305;
})();
if(inst_17272){
var statearr_17306_19177 = state_17291__$1;
(statearr_17306_19177[(1)] = (5));

} else {
var statearr_17307_19179 = state_17291__$1;
(statearr_17307_19179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17292 === (6))){
var state_17291__$1 = state_17291;
var statearr_17308_19190 = state_17291__$1;
(statearr_17308_19190[(2)] = null);

(statearr_17308_19190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17292 === (3))){
var inst_17288 = (state_17291[(2)]);
var inst_17289 = cljs.core.async.close_BANG_(out);
var state_17291__$1 = (function (){var statearr_17309 = state_17291;
(statearr_17309[(9)] = inst_17288);

return statearr_17309;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17291__$1,inst_17289);
} else {
if((state_val_17292 === (2))){
var state_17291__$1 = state_17291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17291__$1,(4),ch);
} else {
if((state_val_17292 === (11))){
var inst_17270 = (state_17291[(8)]);
var inst_17280 = (state_17291[(2)]);
var inst_17267 = inst_17270;
var state_17291__$1 = (function (){var statearr_17315 = state_17291;
(statearr_17315[(10)] = inst_17280);

(statearr_17315[(7)] = inst_17267);

return statearr_17315;
})();
var statearr_17316_19201 = state_17291__$1;
(statearr_17316_19201[(2)] = null);

(statearr_17316_19201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17292 === (9))){
var inst_17270 = (state_17291[(8)]);
var state_17291__$1 = state_17291;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17291__$1,(11),out,inst_17270);
} else {
if((state_val_17292 === (5))){
var inst_17270 = (state_17291[(8)]);
var inst_17267 = (state_17291[(7)]);
var inst_17275 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17270,inst_17267);
var state_17291__$1 = state_17291;
if(inst_17275){
var statearr_17318_19208 = state_17291__$1;
(statearr_17318_19208[(1)] = (8));

} else {
var statearr_17319_19209 = state_17291__$1;
(statearr_17319_19209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17292 === (10))){
var inst_17283 = (state_17291[(2)]);
var state_17291__$1 = state_17291;
var statearr_17320_19214 = state_17291__$1;
(statearr_17320_19214[(2)] = inst_17283);

(statearr_17320_19214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17292 === (8))){
var inst_17267 = (state_17291[(7)]);
var tmp17317 = inst_17267;
var inst_17267__$1 = tmp17317;
var state_17291__$1 = (function (){var statearr_17321 = state_17291;
(statearr_17321[(7)] = inst_17267__$1);

return statearr_17321;
})();
var statearr_17322_19229 = state_17291__$1;
(statearr_17322_19229[(2)] = null);

(statearr_17322_19229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__14053__auto__ = null;
var cljs$core$async$state_machine__14053__auto____0 = (function (){
var statearr_17323 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17323[(0)] = cljs$core$async$state_machine__14053__auto__);

(statearr_17323[(1)] = (1));

return statearr_17323;
});
var cljs$core$async$state_machine__14053__auto____1 = (function (state_17291){
while(true){
var ret_value__14054__auto__ = (function (){try{while(true){
var result__14055__auto__ = switch__14052__auto__(state_17291);
if(cljs.core.keyword_identical_QMARK_(result__14055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14055__auto__;
}
break;
}
}catch (e17324){var ex__14056__auto__ = e17324;
var statearr_17325_19236 = state_17291;
(statearr_17325_19236[(2)] = ex__14056__auto__);


if(cljs.core.seq((state_17291[(4)]))){
var statearr_17326_19237 = state_17291;
(statearr_17326_19237[(1)] = cljs.core.first((state_17291[(4)])));

} else {
throw ex__14056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19238 = state_17291;
state_17291 = G__19238;
continue;
} else {
return ret_value__14054__auto__;
}
break;
}
});
cljs$core$async$state_machine__14053__auto__ = function(state_17291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14053__auto____1.call(this,state_17291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14053__auto____0;
cljs$core$async$state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14053__auto____1;
return cljs$core$async$state_machine__14053__auto__;
})()
})();
var state__14251__auto__ = (function (){var statearr_17341 = f__14250__auto__();
(statearr_17341[(6)] = c__14249__auto___19144);

return statearr_17341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14251__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17357 = arguments.length;
switch (G__17357) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14249__auto___19243 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14250__auto__ = (function (){var switch__14052__auto__ = (function (state_17412){
var state_val_17414 = (state_17412[(1)]);
if((state_val_17414 === (7))){
var inst_17406 = (state_17412[(2)]);
var state_17412__$1 = state_17412;
var statearr_17417_19246 = state_17412__$1;
(statearr_17417_19246[(2)] = inst_17406);

(statearr_17417_19246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17414 === (1))){
var inst_17371 = (new Array(n));
var inst_17372 = inst_17371;
var inst_17373 = (0);
var state_17412__$1 = (function (){var statearr_17419 = state_17412;
(statearr_17419[(7)] = inst_17373);

(statearr_17419[(8)] = inst_17372);

return statearr_17419;
})();
var statearr_17423_19249 = state_17412__$1;
(statearr_17423_19249[(2)] = null);

(statearr_17423_19249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17414 === (4))){
var inst_17376 = (state_17412[(9)]);
var inst_17376__$1 = (state_17412[(2)]);
var inst_17377 = (inst_17376__$1 == null);
var inst_17378 = cljs.core.not(inst_17377);
var state_17412__$1 = (function (){var statearr_17424 = state_17412;
(statearr_17424[(9)] = inst_17376__$1);

return statearr_17424;
})();
if(inst_17378){
var statearr_17425_19255 = state_17412__$1;
(statearr_17425_19255[(1)] = (5));

} else {
var statearr_17426_19256 = state_17412__$1;
(statearr_17426_19256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17414 === (15))){
var inst_17400 = (state_17412[(2)]);
var state_17412__$1 = state_17412;
var statearr_17427_19257 = state_17412__$1;
(statearr_17427_19257[(2)] = inst_17400);

(statearr_17427_19257[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17414 === (13))){
var state_17412__$1 = state_17412;
var statearr_17428_19264 = state_17412__$1;
(statearr_17428_19264[(2)] = null);

(statearr_17428_19264[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17414 === (6))){
var inst_17373 = (state_17412[(7)]);
var inst_17396 = (inst_17373 > (0));
var state_17412__$1 = state_17412;
if(cljs.core.truth_(inst_17396)){
var statearr_17432_19265 = state_17412__$1;
(statearr_17432_19265[(1)] = (12));

} else {
var statearr_17433_19266 = state_17412__$1;
(statearr_17433_19266[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17414 === (3))){
var inst_17408 = (state_17412[(2)]);
var state_17412__$1 = state_17412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17412__$1,inst_17408);
} else {
if((state_val_17414 === (12))){
var inst_17372 = (state_17412[(8)]);
var inst_17398 = cljs.core.vec(inst_17372);
var state_17412__$1 = state_17412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17412__$1,(15),out,inst_17398);
} else {
if((state_val_17414 === (2))){
var state_17412__$1 = state_17412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17412__$1,(4),ch);
} else {
if((state_val_17414 === (11))){
var inst_17390 = (state_17412[(2)]);
var inst_17391 = (new Array(n));
var inst_17372 = inst_17391;
var inst_17373 = (0);
var state_17412__$1 = (function (){var statearr_17436 = state_17412;
(statearr_17436[(7)] = inst_17373);

(statearr_17436[(10)] = inst_17390);

(statearr_17436[(8)] = inst_17372);

return statearr_17436;
})();
var statearr_17437_19267 = state_17412__$1;
(statearr_17437_19267[(2)] = null);

(statearr_17437_19267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17414 === (9))){
var inst_17372 = (state_17412[(8)]);
var inst_17388 = cljs.core.vec(inst_17372);
var state_17412__$1 = state_17412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17412__$1,(11),out,inst_17388);
} else {
if((state_val_17414 === (5))){
var inst_17383 = (state_17412[(11)]);
var inst_17373 = (state_17412[(7)]);
var inst_17376 = (state_17412[(9)]);
var inst_17372 = (state_17412[(8)]);
var inst_17380 = (inst_17372[inst_17373] = inst_17376);
var inst_17383__$1 = (inst_17373 + (1));
var inst_17384 = (inst_17383__$1 < n);
var state_17412__$1 = (function (){var statearr_17438 = state_17412;
(statearr_17438[(11)] = inst_17383__$1);

(statearr_17438[(12)] = inst_17380);

return statearr_17438;
})();
if(cljs.core.truth_(inst_17384)){
var statearr_17439_19272 = state_17412__$1;
(statearr_17439_19272[(1)] = (8));

} else {
var statearr_17440_19273 = state_17412__$1;
(statearr_17440_19273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17414 === (14))){
var inst_17403 = (state_17412[(2)]);
var inst_17404 = cljs.core.async.close_BANG_(out);
var state_17412__$1 = (function (){var statearr_17442 = state_17412;
(statearr_17442[(13)] = inst_17403);

return statearr_17442;
})();
var statearr_17443_19275 = state_17412__$1;
(statearr_17443_19275[(2)] = inst_17404);

(statearr_17443_19275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17414 === (10))){
var inst_17394 = (state_17412[(2)]);
var state_17412__$1 = state_17412;
var statearr_17444_19278 = state_17412__$1;
(statearr_17444_19278[(2)] = inst_17394);

(statearr_17444_19278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17414 === (8))){
var inst_17383 = (state_17412[(11)]);
var inst_17372 = (state_17412[(8)]);
var tmp17441 = inst_17372;
var inst_17372__$1 = tmp17441;
var inst_17373 = inst_17383;
var state_17412__$1 = (function (){var statearr_17445 = state_17412;
(statearr_17445[(7)] = inst_17373);

(statearr_17445[(8)] = inst_17372__$1);

return statearr_17445;
})();
var statearr_17446_19283 = state_17412__$1;
(statearr_17446_19283[(2)] = null);

(statearr_17446_19283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__14053__auto__ = null;
var cljs$core$async$state_machine__14053__auto____0 = (function (){
var statearr_17447 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17447[(0)] = cljs$core$async$state_machine__14053__auto__);

(statearr_17447[(1)] = (1));

return statearr_17447;
});
var cljs$core$async$state_machine__14053__auto____1 = (function (state_17412){
while(true){
var ret_value__14054__auto__ = (function (){try{while(true){
var result__14055__auto__ = switch__14052__auto__(state_17412);
if(cljs.core.keyword_identical_QMARK_(result__14055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14055__auto__;
}
break;
}
}catch (e17448){var ex__14056__auto__ = e17448;
var statearr_17449_19292 = state_17412;
(statearr_17449_19292[(2)] = ex__14056__auto__);


if(cljs.core.seq((state_17412[(4)]))){
var statearr_17450_19293 = state_17412;
(statearr_17450_19293[(1)] = cljs.core.first((state_17412[(4)])));

} else {
throw ex__14056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19300 = state_17412;
state_17412 = G__19300;
continue;
} else {
return ret_value__14054__auto__;
}
break;
}
});
cljs$core$async$state_machine__14053__auto__ = function(state_17412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14053__auto____1.call(this,state_17412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14053__auto____0;
cljs$core$async$state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14053__auto____1;
return cljs$core$async$state_machine__14053__auto__;
})()
})();
var state__14251__auto__ = (function (){var statearr_17451 = f__14250__auto__();
(statearr_17451[(6)] = c__14249__auto___19243);

return statearr_17451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14251__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17457 = arguments.length;
switch (G__17457) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14249__auto___19310 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14250__auto__ = (function (){var switch__14052__auto__ = (function (state_17502){
var state_val_17503 = (state_17502[(1)]);
if((state_val_17503 === (7))){
var inst_17498 = (state_17502[(2)]);
var state_17502__$1 = state_17502;
var statearr_17504_19317 = state_17502__$1;
(statearr_17504_19317[(2)] = inst_17498);

(statearr_17504_19317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (1))){
var inst_17458 = [];
var inst_17459 = inst_17458;
var inst_17460 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17502__$1 = (function (){var statearr_17505 = state_17502;
(statearr_17505[(7)] = inst_17459);

(statearr_17505[(8)] = inst_17460);

return statearr_17505;
})();
var statearr_17506_19318 = state_17502__$1;
(statearr_17506_19318[(2)] = null);

(statearr_17506_19318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (4))){
var inst_17463 = (state_17502[(9)]);
var inst_17463__$1 = (state_17502[(2)]);
var inst_17464 = (inst_17463__$1 == null);
var inst_17465 = cljs.core.not(inst_17464);
var state_17502__$1 = (function (){var statearr_17512 = state_17502;
(statearr_17512[(9)] = inst_17463__$1);

return statearr_17512;
})();
if(inst_17465){
var statearr_17516_19323 = state_17502__$1;
(statearr_17516_19323[(1)] = (5));

} else {
var statearr_17518_19324 = state_17502__$1;
(statearr_17518_19324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (15))){
var inst_17459 = (state_17502[(7)]);
var inst_17490 = cljs.core.vec(inst_17459);
var state_17502__$1 = state_17502;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17502__$1,(18),out,inst_17490);
} else {
if((state_val_17503 === (13))){
var inst_17485 = (state_17502[(2)]);
var state_17502__$1 = state_17502;
var statearr_17524_19331 = state_17502__$1;
(statearr_17524_19331[(2)] = inst_17485);

(statearr_17524_19331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (6))){
var inst_17459 = (state_17502[(7)]);
var inst_17487 = inst_17459.length;
var inst_17488 = (inst_17487 > (0));
var state_17502__$1 = state_17502;
if(cljs.core.truth_(inst_17488)){
var statearr_17525_19332 = state_17502__$1;
(statearr_17525_19332[(1)] = (15));

} else {
var statearr_17526_19333 = state_17502__$1;
(statearr_17526_19333[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (17))){
var inst_17495 = (state_17502[(2)]);
var inst_17496 = cljs.core.async.close_BANG_(out);
var state_17502__$1 = (function (){var statearr_17530 = state_17502;
(statearr_17530[(10)] = inst_17495);

return statearr_17530;
})();
var statearr_17534_19334 = state_17502__$1;
(statearr_17534_19334[(2)] = inst_17496);

(statearr_17534_19334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (3))){
var inst_17500 = (state_17502[(2)]);
var state_17502__$1 = state_17502;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17502__$1,inst_17500);
} else {
if((state_val_17503 === (12))){
var inst_17459 = (state_17502[(7)]);
var inst_17478 = cljs.core.vec(inst_17459);
var state_17502__$1 = state_17502;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17502__$1,(14),out,inst_17478);
} else {
if((state_val_17503 === (2))){
var state_17502__$1 = state_17502;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17502__$1,(4),ch);
} else {
if((state_val_17503 === (11))){
var inst_17463 = (state_17502[(9)]);
var inst_17459 = (state_17502[(7)]);
var inst_17467 = (state_17502[(11)]);
var inst_17475 = inst_17459.push(inst_17463);
var tmp17539 = inst_17459;
var inst_17459__$1 = tmp17539;
var inst_17460 = inst_17467;
var state_17502__$1 = (function (){var statearr_17540 = state_17502;
(statearr_17540[(7)] = inst_17459__$1);

(statearr_17540[(8)] = inst_17460);

(statearr_17540[(12)] = inst_17475);

return statearr_17540;
})();
var statearr_17544_19355 = state_17502__$1;
(statearr_17544_19355[(2)] = null);

(statearr_17544_19355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (9))){
var inst_17460 = (state_17502[(8)]);
var inst_17471 = cljs.core.keyword_identical_QMARK_(inst_17460,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17502__$1 = state_17502;
var statearr_17545_19359 = state_17502__$1;
(statearr_17545_19359[(2)] = inst_17471);

(statearr_17545_19359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (5))){
var inst_17463 = (state_17502[(9)]);
var inst_17460 = (state_17502[(8)]);
var inst_17468 = (state_17502[(13)]);
var inst_17467 = (state_17502[(11)]);
var inst_17467__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17463) : f.call(null, inst_17463));
var inst_17468__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17467__$1,inst_17460);
var state_17502__$1 = (function (){var statearr_17546 = state_17502;
(statearr_17546[(13)] = inst_17468__$1);

(statearr_17546[(11)] = inst_17467__$1);

return statearr_17546;
})();
if(inst_17468__$1){
var statearr_17547_19372 = state_17502__$1;
(statearr_17547_19372[(1)] = (8));

} else {
var statearr_17548_19373 = state_17502__$1;
(statearr_17548_19373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (14))){
var inst_17463 = (state_17502[(9)]);
var inst_17467 = (state_17502[(11)]);
var inst_17480 = (state_17502[(2)]);
var inst_17481 = [];
var inst_17482 = inst_17481.push(inst_17463);
var inst_17459 = inst_17481;
var inst_17460 = inst_17467;
var state_17502__$1 = (function (){var statearr_17549 = state_17502;
(statearr_17549[(7)] = inst_17459);

(statearr_17549[(14)] = inst_17480);

(statearr_17549[(8)] = inst_17460);

(statearr_17549[(15)] = inst_17482);

return statearr_17549;
})();
var statearr_17550_19395 = state_17502__$1;
(statearr_17550_19395[(2)] = null);

(statearr_17550_19395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (16))){
var state_17502__$1 = state_17502;
var statearr_17558_19401 = state_17502__$1;
(statearr_17558_19401[(2)] = null);

(statearr_17558_19401[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (10))){
var inst_17473 = (state_17502[(2)]);
var state_17502__$1 = state_17502;
if(cljs.core.truth_(inst_17473)){
var statearr_17559_19407 = state_17502__$1;
(statearr_17559_19407[(1)] = (11));

} else {
var statearr_17560_19408 = state_17502__$1;
(statearr_17560_19408[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (18))){
var inst_17492 = (state_17502[(2)]);
var state_17502__$1 = state_17502;
var statearr_17562_19413 = state_17502__$1;
(statearr_17562_19413[(2)] = inst_17492);

(statearr_17562_19413[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (8))){
var inst_17468 = (state_17502[(13)]);
var state_17502__$1 = state_17502;
var statearr_17563_19415 = state_17502__$1;
(statearr_17563_19415[(2)] = inst_17468);

(statearr_17563_19415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__14053__auto__ = null;
var cljs$core$async$state_machine__14053__auto____0 = (function (){
var statearr_17564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17564[(0)] = cljs$core$async$state_machine__14053__auto__);

(statearr_17564[(1)] = (1));

return statearr_17564;
});
var cljs$core$async$state_machine__14053__auto____1 = (function (state_17502){
while(true){
var ret_value__14054__auto__ = (function (){try{while(true){
var result__14055__auto__ = switch__14052__auto__(state_17502);
if(cljs.core.keyword_identical_QMARK_(result__14055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14055__auto__;
}
break;
}
}catch (e17565){var ex__14056__auto__ = e17565;
var statearr_17567_19419 = state_17502;
(statearr_17567_19419[(2)] = ex__14056__auto__);


if(cljs.core.seq((state_17502[(4)]))){
var statearr_17569_19420 = state_17502;
(statearr_17569_19420[(1)] = cljs.core.first((state_17502[(4)])));

} else {
throw ex__14056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19421 = state_17502;
state_17502 = G__19421;
continue;
} else {
return ret_value__14054__auto__;
}
break;
}
});
cljs$core$async$state_machine__14053__auto__ = function(state_17502){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14053__auto____1.call(this,state_17502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14053__auto____0;
cljs$core$async$state_machine__14053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14053__auto____1;
return cljs$core$async$state_machine__14053__auto__;
})()
})();
var state__14251__auto__ = (function (){var statearr_17570 = f__14250__auto__();
(statearr_17570[(6)] = c__14249__auto___19310);

return statearr_17570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14251__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
