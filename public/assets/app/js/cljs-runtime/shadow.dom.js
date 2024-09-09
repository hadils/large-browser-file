goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12695 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12695(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12698 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12698(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11699 = coll;
var G__11700 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11699,G__11700) : shadow.dom.lazy_native_coll_seq.call(null, G__11699,G__11700));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11731 = arguments.length;
switch (G__11731) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11734 = arguments.length;
switch (G__11734) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11739 = arguments.length;
switch (G__11739) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11743 = arguments.length;
switch (G__11743) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11751 = arguments.length;
switch (G__11751) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11753 = arguments.length;
switch (G__11753) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e11776){if((e11776 instanceof Object)){
var e = e11776;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11776;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11786 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11787 = null;
var count__11788 = (0);
var i__11789 = (0);
while(true){
if((i__11789 < count__11788)){
var el = chunk__11787.cljs$core$IIndexed$_nth$arity$2(null, i__11789);
var handler_12744__$1 = ((function (seq__11786,chunk__11787,count__11788,i__11789,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11786,chunk__11787,count__11788,i__11789,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12744__$1);


var G__12745 = seq__11786;
var G__12746 = chunk__11787;
var G__12747 = count__11788;
var G__12748 = (i__11789 + (1));
seq__11786 = G__12745;
chunk__11787 = G__12746;
count__11788 = G__12747;
i__11789 = G__12748;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11786);
if(temp__5804__auto__){
var seq__11786__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11786__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11786__$1);
var G__12750 = cljs.core.chunk_rest(seq__11786__$1);
var G__12751 = c__5525__auto__;
var G__12752 = cljs.core.count(c__5525__auto__);
var G__12753 = (0);
seq__11786 = G__12750;
chunk__11787 = G__12751;
count__11788 = G__12752;
i__11789 = G__12753;
continue;
} else {
var el = cljs.core.first(seq__11786__$1);
var handler_12755__$1 = ((function (seq__11786,chunk__11787,count__11788,i__11789,el,seq__11786__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11786,chunk__11787,count__11788,i__11789,el,seq__11786__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12755__$1);


var G__12761 = cljs.core.next(seq__11786__$1);
var G__12762 = null;
var G__12763 = (0);
var G__12764 = (0);
seq__11786 = G__12761;
chunk__11787 = G__12762;
count__11788 = G__12763;
i__11789 = G__12764;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11807 = arguments.length;
switch (G__11807) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11819 = cljs.core.seq(events);
var chunk__11820 = null;
var count__11821 = (0);
var i__11822 = (0);
while(true){
if((i__11822 < count__11821)){
var vec__11832 = chunk__11820.cljs$core$IIndexed$_nth$arity$2(null, i__11822);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11832,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11832,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12776 = seq__11819;
var G__12777 = chunk__11820;
var G__12778 = count__11821;
var G__12779 = (i__11822 + (1));
seq__11819 = G__12776;
chunk__11820 = G__12777;
count__11821 = G__12778;
i__11822 = G__12779;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11819);
if(temp__5804__auto__){
var seq__11819__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11819__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11819__$1);
var G__12781 = cljs.core.chunk_rest(seq__11819__$1);
var G__12782 = c__5525__auto__;
var G__12783 = cljs.core.count(c__5525__auto__);
var G__12784 = (0);
seq__11819 = G__12781;
chunk__11820 = G__12782;
count__11821 = G__12783;
i__11822 = G__12784;
continue;
} else {
var vec__11840 = cljs.core.first(seq__11819__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11840,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11840,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12787 = cljs.core.next(seq__11819__$1);
var G__12788 = null;
var G__12789 = (0);
var G__12790 = (0);
seq__11819 = G__12787;
chunk__11820 = G__12788;
count__11821 = G__12789;
i__11822 = G__12790;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11846 = cljs.core.seq(styles);
var chunk__11847 = null;
var count__11848 = (0);
var i__11849 = (0);
while(true){
if((i__11849 < count__11848)){
var vec__11862 = chunk__11847.cljs$core$IIndexed$_nth$arity$2(null, i__11849);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11862,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11862,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12794 = seq__11846;
var G__12795 = chunk__11847;
var G__12796 = count__11848;
var G__12797 = (i__11849 + (1));
seq__11846 = G__12794;
chunk__11847 = G__12795;
count__11848 = G__12796;
i__11849 = G__12797;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11846);
if(temp__5804__auto__){
var seq__11846__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11846__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11846__$1);
var G__12798 = cljs.core.chunk_rest(seq__11846__$1);
var G__12799 = c__5525__auto__;
var G__12800 = cljs.core.count(c__5525__auto__);
var G__12801 = (0);
seq__11846 = G__12798;
chunk__11847 = G__12799;
count__11848 = G__12800;
i__11849 = G__12801;
continue;
} else {
var vec__11871 = cljs.core.first(seq__11846__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11871,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11871,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12802 = cljs.core.next(seq__11846__$1);
var G__12803 = null;
var G__12804 = (0);
var G__12805 = (0);
seq__11846 = G__12802;
chunk__11847 = G__12803;
count__11848 = G__12804;
i__11849 = G__12805;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__11880_12808 = key;
var G__11880_12809__$1 = (((G__11880_12808 instanceof cljs.core.Keyword))?G__11880_12808.fqn:null);
switch (G__11880_12809__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12829 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_12829,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_12829,"aria-");
}
})())){
el.setAttribute(ks_12829,value);
} else {
(el[ks_12829] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11969){
var map__11970 = p__11969;
var map__11970__$1 = cljs.core.__destructure_map(map__11970);
var props = map__11970__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11970__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11976 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11976,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11976,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11976,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11981 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11981,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11981;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11998 = arguments.length;
switch (G__11998) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__12005){
var vec__12007 = p__12005;
var seq__12008 = cljs.core.seq(vec__12007);
var first__12009 = cljs.core.first(seq__12008);
var seq__12008__$1 = cljs.core.next(seq__12008);
var nn = first__12009;
var first__12009__$1 = cljs.core.first(seq__12008__$1);
var seq__12008__$2 = cljs.core.next(seq__12008__$1);
var np = first__12009__$1;
var nc = seq__12008__$2;
var node = vec__12007;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12016 = nn;
var G__12017 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12016,G__12017) : create_fn.call(null, G__12016,G__12017));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12019 = nn;
var G__12020 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12019,G__12020) : create_fn.call(null, G__12019,G__12020));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__12022 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12022,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12022,(1),null);
var seq__12025_12876 = cljs.core.seq(node_children);
var chunk__12026_12877 = null;
var count__12027_12878 = (0);
var i__12028_12879 = (0);
while(true){
if((i__12028_12879 < count__12027_12878)){
var child_struct_12882 = chunk__12026_12877.cljs$core$IIndexed$_nth$arity$2(null, i__12028_12879);
var children_12883 = shadow.dom.dom_node(child_struct_12882);
if(cljs.core.seq_QMARK_(children_12883)){
var seq__12062_12885 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12883));
var chunk__12064_12886 = null;
var count__12065_12887 = (0);
var i__12066_12888 = (0);
while(true){
if((i__12066_12888 < count__12065_12887)){
var child_12889 = chunk__12064_12886.cljs$core$IIndexed$_nth$arity$2(null, i__12066_12888);
if(cljs.core.truth_(child_12889)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12889);


var G__12890 = seq__12062_12885;
var G__12891 = chunk__12064_12886;
var G__12893 = count__12065_12887;
var G__12894 = (i__12066_12888 + (1));
seq__12062_12885 = G__12890;
chunk__12064_12886 = G__12891;
count__12065_12887 = G__12893;
i__12066_12888 = G__12894;
continue;
} else {
var G__12895 = seq__12062_12885;
var G__12896 = chunk__12064_12886;
var G__12897 = count__12065_12887;
var G__12898 = (i__12066_12888 + (1));
seq__12062_12885 = G__12895;
chunk__12064_12886 = G__12896;
count__12065_12887 = G__12897;
i__12066_12888 = G__12898;
continue;
}
} else {
var temp__5804__auto___12903 = cljs.core.seq(seq__12062_12885);
if(temp__5804__auto___12903){
var seq__12062_12906__$1 = temp__5804__auto___12903;
if(cljs.core.chunked_seq_QMARK_(seq__12062_12906__$1)){
var c__5525__auto___12908 = cljs.core.chunk_first(seq__12062_12906__$1);
var G__12909 = cljs.core.chunk_rest(seq__12062_12906__$1);
var G__12910 = c__5525__auto___12908;
var G__12911 = cljs.core.count(c__5525__auto___12908);
var G__12912 = (0);
seq__12062_12885 = G__12909;
chunk__12064_12886 = G__12910;
count__12065_12887 = G__12911;
i__12066_12888 = G__12912;
continue;
} else {
var child_12913 = cljs.core.first(seq__12062_12906__$1);
if(cljs.core.truth_(child_12913)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12913);


var G__12914 = cljs.core.next(seq__12062_12906__$1);
var G__12915 = null;
var G__12916 = (0);
var G__12917 = (0);
seq__12062_12885 = G__12914;
chunk__12064_12886 = G__12915;
count__12065_12887 = G__12916;
i__12066_12888 = G__12917;
continue;
} else {
var G__12919 = cljs.core.next(seq__12062_12906__$1);
var G__12920 = null;
var G__12921 = (0);
var G__12922 = (0);
seq__12062_12885 = G__12919;
chunk__12064_12886 = G__12920;
count__12065_12887 = G__12921;
i__12066_12888 = G__12922;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12883);
}


var G__12925 = seq__12025_12876;
var G__12926 = chunk__12026_12877;
var G__12927 = count__12027_12878;
var G__12928 = (i__12028_12879 + (1));
seq__12025_12876 = G__12925;
chunk__12026_12877 = G__12926;
count__12027_12878 = G__12927;
i__12028_12879 = G__12928;
continue;
} else {
var temp__5804__auto___12930 = cljs.core.seq(seq__12025_12876);
if(temp__5804__auto___12930){
var seq__12025_12932__$1 = temp__5804__auto___12930;
if(cljs.core.chunked_seq_QMARK_(seq__12025_12932__$1)){
var c__5525__auto___12933 = cljs.core.chunk_first(seq__12025_12932__$1);
var G__12934 = cljs.core.chunk_rest(seq__12025_12932__$1);
var G__12935 = c__5525__auto___12933;
var G__12936 = cljs.core.count(c__5525__auto___12933);
var G__12937 = (0);
seq__12025_12876 = G__12934;
chunk__12026_12877 = G__12935;
count__12027_12878 = G__12936;
i__12028_12879 = G__12937;
continue;
} else {
var child_struct_12940 = cljs.core.first(seq__12025_12932__$1);
var children_12941 = shadow.dom.dom_node(child_struct_12940);
if(cljs.core.seq_QMARK_(children_12941)){
var seq__12088_12942 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12941));
var chunk__12090_12943 = null;
var count__12091_12944 = (0);
var i__12092_12945 = (0);
while(true){
if((i__12092_12945 < count__12091_12944)){
var child_12948 = chunk__12090_12943.cljs$core$IIndexed$_nth$arity$2(null, i__12092_12945);
if(cljs.core.truth_(child_12948)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12948);


var G__12950 = seq__12088_12942;
var G__12951 = chunk__12090_12943;
var G__12952 = count__12091_12944;
var G__12953 = (i__12092_12945 + (1));
seq__12088_12942 = G__12950;
chunk__12090_12943 = G__12951;
count__12091_12944 = G__12952;
i__12092_12945 = G__12953;
continue;
} else {
var G__12954 = seq__12088_12942;
var G__12955 = chunk__12090_12943;
var G__12956 = count__12091_12944;
var G__12957 = (i__12092_12945 + (1));
seq__12088_12942 = G__12954;
chunk__12090_12943 = G__12955;
count__12091_12944 = G__12956;
i__12092_12945 = G__12957;
continue;
}
} else {
var temp__5804__auto___12960__$1 = cljs.core.seq(seq__12088_12942);
if(temp__5804__auto___12960__$1){
var seq__12088_12961__$1 = temp__5804__auto___12960__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12088_12961__$1)){
var c__5525__auto___12962 = cljs.core.chunk_first(seq__12088_12961__$1);
var G__12964 = cljs.core.chunk_rest(seq__12088_12961__$1);
var G__12965 = c__5525__auto___12962;
var G__12966 = cljs.core.count(c__5525__auto___12962);
var G__12967 = (0);
seq__12088_12942 = G__12964;
chunk__12090_12943 = G__12965;
count__12091_12944 = G__12966;
i__12092_12945 = G__12967;
continue;
} else {
var child_12972 = cljs.core.first(seq__12088_12961__$1);
if(cljs.core.truth_(child_12972)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12972);


var G__12975 = cljs.core.next(seq__12088_12961__$1);
var G__12976 = null;
var G__12977 = (0);
var G__12978 = (0);
seq__12088_12942 = G__12975;
chunk__12090_12943 = G__12976;
count__12091_12944 = G__12977;
i__12092_12945 = G__12978;
continue;
} else {
var G__12979 = cljs.core.next(seq__12088_12961__$1);
var G__12980 = null;
var G__12981 = (0);
var G__12982 = (0);
seq__12088_12942 = G__12979;
chunk__12090_12943 = G__12980;
count__12091_12944 = G__12981;
i__12092_12945 = G__12982;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12941);
}


var G__12984 = cljs.core.next(seq__12025_12932__$1);
var G__12985 = null;
var G__12986 = (0);
var G__12987 = (0);
seq__12025_12876 = G__12984;
chunk__12026_12877 = G__12985;
count__12027_12878 = G__12986;
i__12028_12879 = G__12987;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12166 = cljs.core.seq(node);
var chunk__12167 = null;
var count__12168 = (0);
var i__12169 = (0);
while(true){
if((i__12169 < count__12168)){
var n = chunk__12167.cljs$core$IIndexed$_nth$arity$2(null, i__12169);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__13002 = seq__12166;
var G__13003 = chunk__12167;
var G__13004 = count__12168;
var G__13005 = (i__12169 + (1));
seq__12166 = G__13002;
chunk__12167 = G__13003;
count__12168 = G__13004;
i__12169 = G__13005;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12166);
if(temp__5804__auto__){
var seq__12166__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12166__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12166__$1);
var G__13014 = cljs.core.chunk_rest(seq__12166__$1);
var G__13015 = c__5525__auto__;
var G__13016 = cljs.core.count(c__5525__auto__);
var G__13017 = (0);
seq__12166 = G__13014;
chunk__12167 = G__13015;
count__12168 = G__13016;
i__12169 = G__13017;
continue;
} else {
var n = cljs.core.first(seq__12166__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__13025 = cljs.core.next(seq__12166__$1);
var G__13026 = null;
var G__13027 = (0);
var G__13028 = (0);
seq__12166 = G__13025;
chunk__12167 = G__13026;
count__12168 = G__13027;
i__12169 = G__13028;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12210 = arguments.length;
switch (G__12210) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12226 = arguments.length;
switch (G__12226) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12266 = arguments.length;
switch (G__12266) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13061 = arguments.length;
var i__5727__auto___13063 = (0);
while(true){
if((i__5727__auto___13063 < len__5726__auto___13061)){
args__5732__auto__.push((arguments[i__5727__auto___13063]));

var G__13065 = (i__5727__auto___13063 + (1));
i__5727__auto___13063 = G__13065;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12293_13066 = cljs.core.seq(nodes);
var chunk__12294_13067 = null;
var count__12295_13068 = (0);
var i__12296_13069 = (0);
while(true){
if((i__12296_13069 < count__12295_13068)){
var node_13072 = chunk__12294_13067.cljs$core$IIndexed$_nth$arity$2(null, i__12296_13069);
fragment.appendChild(shadow.dom._to_dom(node_13072));


var G__13073 = seq__12293_13066;
var G__13074 = chunk__12294_13067;
var G__13075 = count__12295_13068;
var G__13076 = (i__12296_13069 + (1));
seq__12293_13066 = G__13073;
chunk__12294_13067 = G__13074;
count__12295_13068 = G__13075;
i__12296_13069 = G__13076;
continue;
} else {
var temp__5804__auto___13077 = cljs.core.seq(seq__12293_13066);
if(temp__5804__auto___13077){
var seq__12293_13080__$1 = temp__5804__auto___13077;
if(cljs.core.chunked_seq_QMARK_(seq__12293_13080__$1)){
var c__5525__auto___13081 = cljs.core.chunk_first(seq__12293_13080__$1);
var G__13083 = cljs.core.chunk_rest(seq__12293_13080__$1);
var G__13084 = c__5525__auto___13081;
var G__13085 = cljs.core.count(c__5525__auto___13081);
var G__13086 = (0);
seq__12293_13066 = G__13083;
chunk__12294_13067 = G__13084;
count__12295_13068 = G__13085;
i__12296_13069 = G__13086;
continue;
} else {
var node_13087 = cljs.core.first(seq__12293_13080__$1);
fragment.appendChild(shadow.dom._to_dom(node_13087));


var G__13092 = cljs.core.next(seq__12293_13080__$1);
var G__13093 = null;
var G__13094 = (0);
var G__13095 = (0);
seq__12293_13066 = G__13092;
chunk__12294_13067 = G__13093;
count__12295_13068 = G__13094;
i__12296_13069 = G__13095;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12282){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12282));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12318_13100 = cljs.core.seq(scripts);
var chunk__12320_13101 = null;
var count__12321_13102 = (0);
var i__12322_13103 = (0);
while(true){
if((i__12322_13103 < count__12321_13102)){
var vec__12354_13105 = chunk__12320_13101.cljs$core$IIndexed$_nth$arity$2(null, i__12322_13103);
var script_tag_13106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12354_13105,(0),null);
var script_body_13107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12354_13105,(1),null);
eval(script_body_13107);


var G__13110 = seq__12318_13100;
var G__13111 = chunk__12320_13101;
var G__13112 = count__12321_13102;
var G__13113 = (i__12322_13103 + (1));
seq__12318_13100 = G__13110;
chunk__12320_13101 = G__13111;
count__12321_13102 = G__13112;
i__12322_13103 = G__13113;
continue;
} else {
var temp__5804__auto___13115 = cljs.core.seq(seq__12318_13100);
if(temp__5804__auto___13115){
var seq__12318_13117__$1 = temp__5804__auto___13115;
if(cljs.core.chunked_seq_QMARK_(seq__12318_13117__$1)){
var c__5525__auto___13118 = cljs.core.chunk_first(seq__12318_13117__$1);
var G__13119 = cljs.core.chunk_rest(seq__12318_13117__$1);
var G__13120 = c__5525__auto___13118;
var G__13121 = cljs.core.count(c__5525__auto___13118);
var G__13122 = (0);
seq__12318_13100 = G__13119;
chunk__12320_13101 = G__13120;
count__12321_13102 = G__13121;
i__12322_13103 = G__13122;
continue;
} else {
var vec__12359_13123 = cljs.core.first(seq__12318_13117__$1);
var script_tag_13124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12359_13123,(0),null);
var script_body_13125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12359_13123,(1),null);
eval(script_body_13125);


var G__13127 = cljs.core.next(seq__12318_13117__$1);
var G__13128 = null;
var G__13129 = (0);
var G__13130 = (0);
seq__12318_13100 = G__13127;
chunk__12320_13101 = G__13128;
count__12321_13102 = G__13129;
i__12322_13103 = G__13130;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12362){
var vec__12363 = p__12362;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12363,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12363,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12369 = arguments.length;
switch (G__12369) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12374 = cljs.core.seq(style_keys);
var chunk__12375 = null;
var count__12376 = (0);
var i__12377 = (0);
while(true){
if((i__12377 < count__12376)){
var it = chunk__12375.cljs$core$IIndexed$_nth$arity$2(null, i__12377);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13161 = seq__12374;
var G__13162 = chunk__12375;
var G__13163 = count__12376;
var G__13164 = (i__12377 + (1));
seq__12374 = G__13161;
chunk__12375 = G__13162;
count__12376 = G__13163;
i__12377 = G__13164;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12374);
if(temp__5804__auto__){
var seq__12374__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12374__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12374__$1);
var G__13173 = cljs.core.chunk_rest(seq__12374__$1);
var G__13174 = c__5525__auto__;
var G__13175 = cljs.core.count(c__5525__auto__);
var G__13176 = (0);
seq__12374 = G__13173;
chunk__12375 = G__13174;
count__12376 = G__13175;
i__12377 = G__13176;
continue;
} else {
var it = cljs.core.first(seq__12374__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13180 = cljs.core.next(seq__12374__$1);
var G__13181 = null;
var G__13182 = (0);
var G__13183 = (0);
seq__12374 = G__13180;
chunk__12375 = G__13181;
count__12376 = G__13182;
i__12377 = G__13183;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12381,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12395 = k12381;
var G__12395__$1 = (((G__12395 instanceof cljs.core.Keyword))?G__12395.fqn:null);
switch (G__12395__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12381,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12398){
var vec__12399 = p__12398;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12399,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12399,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12380){
var self__ = this;
var G__12380__$1 = this;
return (new cljs.core.RecordIter((0),G__12380__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12382,other12383){
var self__ = this;
var this12382__$1 = this;
return (((!((other12383 == null)))) && ((((this12382__$1.constructor === other12383.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12382__$1.x,other12383.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12382__$1.y,other12383.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12382__$1.__extmap,other12383.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12381){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12419 = k12381;
var G__12419__$1 = (((G__12419 instanceof cljs.core.Keyword))?G__12419.fqn:null);
switch (G__12419__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12381);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12380){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12425 = cljs.core.keyword_identical_QMARK_;
var expr__12426 = k__5309__auto__;
if(cljs.core.truth_((pred__12425.cljs$core$IFn$_invoke$arity$2 ? pred__12425.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12426) : pred__12425.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__12426)))){
return (new shadow.dom.Coordinate(G__12380,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12425.cljs$core$IFn$_invoke$arity$2 ? pred__12425.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12426) : pred__12425.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__12426)))){
return (new shadow.dom.Coordinate(self__.x,G__12380,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12380),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12380){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12380,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12391){
var extmap__5342__auto__ = (function (){var G__12440 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12391,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12391)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12440);
} else {
return G__12440;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12391),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12391),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12454,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12468 = k12454;
var G__12468__$1 = (((G__12468 instanceof cljs.core.Keyword))?G__12468.fqn:null);
switch (G__12468__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12454,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12475){
var vec__12476 = p__12475;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12476,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12476,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12453){
var self__ = this;
var G__12453__$1 = this;
return (new cljs.core.RecordIter((0),G__12453__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12455,other12456){
var self__ = this;
var this12455__$1 = this;
return (((!((other12456 == null)))) && ((((this12455__$1.constructor === other12456.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12455__$1.w,other12456.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12455__$1.h,other12456.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12455__$1.__extmap,other12456.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12454){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12503 = k12454;
var G__12503__$1 = (((G__12503 instanceof cljs.core.Keyword))?G__12503.fqn:null);
switch (G__12503__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12454);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12453){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12507 = cljs.core.keyword_identical_QMARK_;
var expr__12508 = k__5309__auto__;
if(cljs.core.truth_((pred__12507.cljs$core$IFn$_invoke$arity$2 ? pred__12507.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12508) : pred__12507.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__12508)))){
return (new shadow.dom.Size(G__12453,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12507.cljs$core$IFn$_invoke$arity$2 ? pred__12507.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12508) : pred__12507.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__12508)))){
return (new shadow.dom.Size(self__.w,G__12453,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12453),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12453){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12453,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12457){
var extmap__5342__auto__ = (function (){var G__12521 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12457,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12457)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12521);
} else {
return G__12521;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12457),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12457),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__13568 = (i + (1));
var G__13569 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__13568;
ret = G__13569;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12546){
var vec__12547 = p__12546;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12547,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12547,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12563 = arguments.length;
switch (G__12563) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__13611 = ps;
var G__13612 = (i + (1));
el__$1 = G__13611;
i = G__13612;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12605 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12605,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12605,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12605,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12611_13646 = cljs.core.seq(props);
var chunk__12612_13647 = null;
var count__12613_13648 = (0);
var i__12614_13649 = (0);
while(true){
if((i__12614_13649 < count__12613_13648)){
var vec__12633_13650 = chunk__12612_13647.cljs$core$IIndexed$_nth$arity$2(null, i__12614_13649);
var k_13651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12633_13650,(0),null);
var v_13652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12633_13650,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_13651);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13651),v_13652);


var G__13654 = seq__12611_13646;
var G__13655 = chunk__12612_13647;
var G__13656 = count__12613_13648;
var G__13657 = (i__12614_13649 + (1));
seq__12611_13646 = G__13654;
chunk__12612_13647 = G__13655;
count__12613_13648 = G__13656;
i__12614_13649 = G__13657;
continue;
} else {
var temp__5804__auto___13659 = cljs.core.seq(seq__12611_13646);
if(temp__5804__auto___13659){
var seq__12611_13660__$1 = temp__5804__auto___13659;
if(cljs.core.chunked_seq_QMARK_(seq__12611_13660__$1)){
var c__5525__auto___13661 = cljs.core.chunk_first(seq__12611_13660__$1);
var G__13662 = cljs.core.chunk_rest(seq__12611_13660__$1);
var G__13663 = c__5525__auto___13661;
var G__13664 = cljs.core.count(c__5525__auto___13661);
var G__13665 = (0);
seq__12611_13646 = G__13662;
chunk__12612_13647 = G__13663;
count__12613_13648 = G__13664;
i__12614_13649 = G__13665;
continue;
} else {
var vec__12647_13666 = cljs.core.first(seq__12611_13660__$1);
var k_13667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12647_13666,(0),null);
var v_13669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12647_13666,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_13667);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13667),v_13669);


var G__13672 = cljs.core.next(seq__12611_13660__$1);
var G__13673 = null;
var G__13674 = (0);
var G__13675 = (0);
seq__12611_13646 = G__13672;
chunk__12612_13647 = G__13673;
count__12613_13648 = G__13674;
i__12614_13649 = G__13675;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12659 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12659,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12659,(1),null);
var seq__12662_13702 = cljs.core.seq(node_children);
var chunk__12664_13703 = null;
var count__12665_13704 = (0);
var i__12666_13705 = (0);
while(true){
if((i__12666_13705 < count__12665_13704)){
var child_struct_13708 = chunk__12664_13703.cljs$core$IIndexed$_nth$arity$2(null, i__12666_13705);
if((!((child_struct_13708 == null)))){
if(typeof child_struct_13708 === 'string'){
var text_13709 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13709),child_struct_13708].join(''));
} else {
var children_13711 = shadow.dom.svg_node(child_struct_13708);
if(cljs.core.seq_QMARK_(children_13711)){
var seq__12681_13712 = cljs.core.seq(children_13711);
var chunk__12683_13713 = null;
var count__12684_13714 = (0);
var i__12685_13715 = (0);
while(true){
if((i__12685_13715 < count__12684_13714)){
var child_13716 = chunk__12683_13713.cljs$core$IIndexed$_nth$arity$2(null, i__12685_13715);
if(cljs.core.truth_(child_13716)){
node.appendChild(child_13716);


var G__13722 = seq__12681_13712;
var G__13723 = chunk__12683_13713;
var G__13724 = count__12684_13714;
var G__13725 = (i__12685_13715 + (1));
seq__12681_13712 = G__13722;
chunk__12683_13713 = G__13723;
count__12684_13714 = G__13724;
i__12685_13715 = G__13725;
continue;
} else {
var G__13727 = seq__12681_13712;
var G__13728 = chunk__12683_13713;
var G__13729 = count__12684_13714;
var G__13730 = (i__12685_13715 + (1));
seq__12681_13712 = G__13727;
chunk__12683_13713 = G__13728;
count__12684_13714 = G__13729;
i__12685_13715 = G__13730;
continue;
}
} else {
var temp__5804__auto___13731 = cljs.core.seq(seq__12681_13712);
if(temp__5804__auto___13731){
var seq__12681_13733__$1 = temp__5804__auto___13731;
if(cljs.core.chunked_seq_QMARK_(seq__12681_13733__$1)){
var c__5525__auto___13734 = cljs.core.chunk_first(seq__12681_13733__$1);
var G__13735 = cljs.core.chunk_rest(seq__12681_13733__$1);
var G__13736 = c__5525__auto___13734;
var G__13737 = cljs.core.count(c__5525__auto___13734);
var G__13738 = (0);
seq__12681_13712 = G__13735;
chunk__12683_13713 = G__13736;
count__12684_13714 = G__13737;
i__12685_13715 = G__13738;
continue;
} else {
var child_13739 = cljs.core.first(seq__12681_13733__$1);
if(cljs.core.truth_(child_13739)){
node.appendChild(child_13739);


var G__13740 = cljs.core.next(seq__12681_13733__$1);
var G__13741 = null;
var G__13742 = (0);
var G__13743 = (0);
seq__12681_13712 = G__13740;
chunk__12683_13713 = G__13741;
count__12684_13714 = G__13742;
i__12685_13715 = G__13743;
continue;
} else {
var G__13783 = cljs.core.next(seq__12681_13733__$1);
var G__13784 = null;
var G__13785 = (0);
var G__13786 = (0);
seq__12681_13712 = G__13783;
chunk__12683_13713 = G__13784;
count__12684_13714 = G__13785;
i__12685_13715 = G__13786;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13711);
}
}


var G__13787 = seq__12662_13702;
var G__13788 = chunk__12664_13703;
var G__13789 = count__12665_13704;
var G__13790 = (i__12666_13705 + (1));
seq__12662_13702 = G__13787;
chunk__12664_13703 = G__13788;
count__12665_13704 = G__13789;
i__12666_13705 = G__13790;
continue;
} else {
var G__13791 = seq__12662_13702;
var G__13792 = chunk__12664_13703;
var G__13793 = count__12665_13704;
var G__13794 = (i__12666_13705 + (1));
seq__12662_13702 = G__13791;
chunk__12664_13703 = G__13792;
count__12665_13704 = G__13793;
i__12666_13705 = G__13794;
continue;
}
} else {
var temp__5804__auto___13796 = cljs.core.seq(seq__12662_13702);
if(temp__5804__auto___13796){
var seq__12662_13798__$1 = temp__5804__auto___13796;
if(cljs.core.chunked_seq_QMARK_(seq__12662_13798__$1)){
var c__5525__auto___13804 = cljs.core.chunk_first(seq__12662_13798__$1);
var G__13805 = cljs.core.chunk_rest(seq__12662_13798__$1);
var G__13806 = c__5525__auto___13804;
var G__13807 = cljs.core.count(c__5525__auto___13804);
var G__13808 = (0);
seq__12662_13702 = G__13805;
chunk__12664_13703 = G__13806;
count__12665_13704 = G__13807;
i__12666_13705 = G__13808;
continue;
} else {
var child_struct_13809 = cljs.core.first(seq__12662_13798__$1);
if((!((child_struct_13809 == null)))){
if(typeof child_struct_13809 === 'string'){
var text_13813 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13813),child_struct_13809].join(''));
} else {
var children_13819 = shadow.dom.svg_node(child_struct_13809);
if(cljs.core.seq_QMARK_(children_13819)){
var seq__12687_13821 = cljs.core.seq(children_13819);
var chunk__12689_13822 = null;
var count__12690_13823 = (0);
var i__12691_13824 = (0);
while(true){
if((i__12691_13824 < count__12690_13823)){
var child_13826 = chunk__12689_13822.cljs$core$IIndexed$_nth$arity$2(null, i__12691_13824);
if(cljs.core.truth_(child_13826)){
node.appendChild(child_13826);


var G__13827 = seq__12687_13821;
var G__13828 = chunk__12689_13822;
var G__13829 = count__12690_13823;
var G__13830 = (i__12691_13824 + (1));
seq__12687_13821 = G__13827;
chunk__12689_13822 = G__13828;
count__12690_13823 = G__13829;
i__12691_13824 = G__13830;
continue;
} else {
var G__13831 = seq__12687_13821;
var G__13832 = chunk__12689_13822;
var G__13833 = count__12690_13823;
var G__13834 = (i__12691_13824 + (1));
seq__12687_13821 = G__13831;
chunk__12689_13822 = G__13832;
count__12690_13823 = G__13833;
i__12691_13824 = G__13834;
continue;
}
} else {
var temp__5804__auto___13835__$1 = cljs.core.seq(seq__12687_13821);
if(temp__5804__auto___13835__$1){
var seq__12687_13836__$1 = temp__5804__auto___13835__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12687_13836__$1)){
var c__5525__auto___13837 = cljs.core.chunk_first(seq__12687_13836__$1);
var G__13838 = cljs.core.chunk_rest(seq__12687_13836__$1);
var G__13839 = c__5525__auto___13837;
var G__13840 = cljs.core.count(c__5525__auto___13837);
var G__13841 = (0);
seq__12687_13821 = G__13838;
chunk__12689_13822 = G__13839;
count__12690_13823 = G__13840;
i__12691_13824 = G__13841;
continue;
} else {
var child_13842 = cljs.core.first(seq__12687_13836__$1);
if(cljs.core.truth_(child_13842)){
node.appendChild(child_13842);


var G__13843 = cljs.core.next(seq__12687_13836__$1);
var G__13844 = null;
var G__13845 = (0);
var G__13846 = (0);
seq__12687_13821 = G__13843;
chunk__12689_13822 = G__13844;
count__12690_13823 = G__13845;
i__12691_13824 = G__13846;
continue;
} else {
var G__13847 = cljs.core.next(seq__12687_13836__$1);
var G__13848 = null;
var G__13849 = (0);
var G__13850 = (0);
seq__12687_13821 = G__13847;
chunk__12689_13822 = G__13848;
count__12690_13823 = G__13849;
i__12691_13824 = G__13850;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13819);
}
}


var G__13851 = cljs.core.next(seq__12662_13798__$1);
var G__13852 = null;
var G__13853 = (0);
var G__13854 = (0);
seq__12662_13702 = G__13851;
chunk__12664_13703 = G__13852;
count__12665_13704 = G__13853;
i__12666_13705 = G__13854;
continue;
} else {
var G__13855 = cljs.core.next(seq__12662_13798__$1);
var G__13856 = null;
var G__13857 = (0);
var G__13858 = (0);
seq__12662_13702 = G__13855;
chunk__12664_13703 = G__13856;
count__12665_13704 = G__13857;
i__12666_13705 = G__13858;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13877 = arguments.length;
var i__5727__auto___13878 = (0);
while(true){
if((i__5727__auto___13878 < len__5726__auto___13877)){
args__5732__auto__.push((arguments[i__5727__auto___13878]));

var G__13879 = (i__5727__auto___13878 + (1));
i__5727__auto___13878 = G__13879;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12693){
var G__12694 = cljs.core.first(seq12693);
var seq12693__$1 = cljs.core.next(seq12693);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12694,seq12693__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
