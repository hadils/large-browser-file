goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14353){
var map__14354 = p__14353;
var map__14354__$1 = cljs.core.__destructure_map(map__14354);
var runtime = map__14354__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14354__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14601 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14601)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14363 = runtime;
var G__14364 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14601);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14363,G__14364) : shadow.remote.runtime.shared.process.call(null, G__14363,G__14364));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14369,res){
var map__14370 = p__14369;
var map__14370__$1 = cljs.core.__destructure_map(map__14370);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14370__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14370__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14372 = res;
var G__14372__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14372,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14372);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14372__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14372__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14377 = arguments.length;
switch (G__14377) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14385,msg,handlers,timeout_after_ms){
var map__14386 = p__14385;
var map__14386__$1 = cljs.core.__destructure_map(map__14386);
var runtime = map__14386__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14386__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14629 = arguments.length;
var i__5727__auto___14630 = (0);
while(true){
if((i__5727__auto___14630 < len__5726__auto___14629)){
args__5732__auto__.push((arguments[i__5727__auto___14630]));

var G__14632 = (i__5727__auto___14630 + (1));
i__5727__auto___14630 = G__14632;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14404,ev,args){
var map__14405 = p__14404;
var map__14405__$1 = cljs.core.__destructure_map(map__14405);
var runtime = map__14405__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14405__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14406 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14409 = null;
var count__14410 = (0);
var i__14411 = (0);
while(true){
if((i__14411 < count__14410)){
var ext = chunk__14409.cljs$core$IIndexed$_nth$arity$2(null, i__14411);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14657 = seq__14406;
var G__14658 = chunk__14409;
var G__14659 = count__14410;
var G__14660 = (i__14411 + (1));
seq__14406 = G__14657;
chunk__14409 = G__14658;
count__14410 = G__14659;
i__14411 = G__14660;
continue;
} else {
var G__14674 = seq__14406;
var G__14675 = chunk__14409;
var G__14676 = count__14410;
var G__14677 = (i__14411 + (1));
seq__14406 = G__14674;
chunk__14409 = G__14675;
count__14410 = G__14676;
i__14411 = G__14677;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14406);
if(temp__5804__auto__){
var seq__14406__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14406__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14406__$1);
var G__14682 = cljs.core.chunk_rest(seq__14406__$1);
var G__14683 = c__5525__auto__;
var G__14684 = cljs.core.count(c__5525__auto__);
var G__14685 = (0);
seq__14406 = G__14682;
chunk__14409 = G__14683;
count__14410 = G__14684;
i__14411 = G__14685;
continue;
} else {
var ext = cljs.core.first(seq__14406__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14694 = cljs.core.next(seq__14406__$1);
var G__14695 = null;
var G__14696 = (0);
var G__14697 = (0);
seq__14406 = G__14694;
chunk__14409 = G__14695;
count__14410 = G__14696;
i__14411 = G__14697;
continue;
} else {
var G__14707 = cljs.core.next(seq__14406__$1);
var G__14708 = null;
var G__14709 = (0);
var G__14710 = (0);
seq__14406 = G__14707;
chunk__14409 = G__14708;
count__14410 = G__14709;
i__14411 = G__14710;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14399){
var G__14400 = cljs.core.first(seq14399);
var seq14399__$1 = cljs.core.next(seq14399);
var G__14402 = cljs.core.first(seq14399__$1);
var seq14399__$2 = cljs.core.next(seq14399__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14400,G__14402,seq14399__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14424,p__14425){
var map__14426 = p__14424;
var map__14426__$1 = cljs.core.__destructure_map(map__14426);
var runtime = map__14426__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14426__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14427 = p__14425;
var map__14427__$1 = cljs.core.__destructure_map(map__14427);
var msg = map__14427__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14427__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14430 = cljs.core.deref(state_ref);
var map__14430__$1 = cljs.core.__destructure_map(map__14430);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14430__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14430__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14435,msg){
var map__14436 = p__14435;
var map__14436__$1 = cljs.core.__destructure_map(map__14436);
var runtime = map__14436__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14436__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14442,key,p__14443){
var map__14446 = p__14442;
var map__14446__$1 = cljs.core.__destructure_map(map__14446);
var state = map__14446__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14446__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14447 = p__14443;
var map__14447__$1 = cljs.core.__destructure_map(map__14447);
var spec = map__14447__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14447__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14447__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14453,key,spec){
var map__14454 = p__14453;
var map__14454__$1 = cljs.core.__destructure_map(map__14454);
var runtime = map__14454__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14454__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___14807 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___14807 == null)){
} else {
var on_welcome_14808 = temp__5808__auto___14807;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14808.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14808.cljs$core$IFn$_invoke$arity$0() : on_welcome_14808.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14458_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14458_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14459_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14459_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14460_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14460_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14461_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14461_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14462_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14462_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14484,key){
var map__14485 = p__14484;
var map__14485__$1 = cljs.core.__destructure_map(map__14485);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14485__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14494,msg){
var map__14496 = p__14494;
var map__14496__$1 = cljs.core.__destructure_map(map__14496);
var runtime = map__14496__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14496__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14514,p__14515){
var map__14516 = p__14514;
var map__14516__$1 = cljs.core.__destructure_map(map__14516);
var runtime = map__14516__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14516__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14517 = p__14515;
var map__14517__$1 = cljs.core.__destructure_map(map__14517);
var msg = map__14517__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14517__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14517__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14535 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14537 = null;
var count__14538 = (0);
var i__14539 = (0);
while(true){
if((i__14539 < count__14538)){
var map__14570 = chunk__14537.cljs$core$IIndexed$_nth$arity$2(null, i__14539);
var map__14570__$1 = cljs.core.__destructure_map(map__14570);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14570__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__14905 = seq__14535;
var G__14906 = chunk__14537;
var G__14907 = count__14538;
var G__14908 = (i__14539 + (1));
seq__14535 = G__14905;
chunk__14537 = G__14906;
count__14538 = G__14907;
i__14539 = G__14908;
continue;
} else {
var G__14918 = seq__14535;
var G__14919 = chunk__14537;
var G__14920 = count__14538;
var G__14921 = (i__14539 + (1));
seq__14535 = G__14918;
chunk__14537 = G__14919;
count__14538 = G__14920;
i__14539 = G__14921;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14535);
if(temp__5804__auto__){
var seq__14535__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14535__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14535__$1);
var G__14934 = cljs.core.chunk_rest(seq__14535__$1);
var G__14935 = c__5525__auto__;
var G__14936 = cljs.core.count(c__5525__auto__);
var G__14937 = (0);
seq__14535 = G__14934;
chunk__14537 = G__14935;
count__14538 = G__14936;
i__14539 = G__14937;
continue;
} else {
var map__14584 = cljs.core.first(seq__14535__$1);
var map__14584__$1 = cljs.core.__destructure_map(map__14584);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14584__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__14946 = cljs.core.next(seq__14535__$1);
var G__14947 = null;
var G__14948 = (0);
var G__14949 = (0);
seq__14535 = G__14946;
chunk__14537 = G__14947;
count__14538 = G__14948;
i__14539 = G__14949;
continue;
} else {
var G__14950 = cljs.core.next(seq__14535__$1);
var G__14951 = null;
var G__14952 = (0);
var G__14953 = (0);
seq__14535 = G__14950;
chunk__14537 = G__14951;
count__14538 = G__14952;
i__14539 = G__14953;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
