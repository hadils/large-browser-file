goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18646){
var map__18647 = p__18646;
var map__18647__$1 = cljs.core.__destructure_map(map__18647);
var m = map__18647__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18647__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18647__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18655_19105 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18656_19106 = null;
var count__18657_19107 = (0);
var i__18658_19108 = (0);
while(true){
if((i__18658_19108 < count__18657_19107)){
var f_19109 = chunk__18656_19106.cljs$core$IIndexed$_nth$arity$2(null, i__18658_19108);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19109], 0));


var G__19110 = seq__18655_19105;
var G__19111 = chunk__18656_19106;
var G__19112 = count__18657_19107;
var G__19113 = (i__18658_19108 + (1));
seq__18655_19105 = G__19110;
chunk__18656_19106 = G__19111;
count__18657_19107 = G__19112;
i__18658_19108 = G__19113;
continue;
} else {
var temp__5804__auto___19119 = cljs.core.seq(seq__18655_19105);
if(temp__5804__auto___19119){
var seq__18655_19121__$1 = temp__5804__auto___19119;
if(cljs.core.chunked_seq_QMARK_(seq__18655_19121__$1)){
var c__5525__auto___19123 = cljs.core.chunk_first(seq__18655_19121__$1);
var G__19124 = cljs.core.chunk_rest(seq__18655_19121__$1);
var G__19125 = c__5525__auto___19123;
var G__19126 = cljs.core.count(c__5525__auto___19123);
var G__19127 = (0);
seq__18655_19105 = G__19124;
chunk__18656_19106 = G__19125;
count__18657_19107 = G__19126;
i__18658_19108 = G__19127;
continue;
} else {
var f_19129 = cljs.core.first(seq__18655_19121__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19129], 0));


var G__19131 = cljs.core.next(seq__18655_19121__$1);
var G__19132 = null;
var G__19133 = (0);
var G__19134 = (0);
seq__18655_19105 = G__19131;
chunk__18656_19106 = G__19132;
count__18657_19107 = G__19133;
i__18658_19108 = G__19134;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19136 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19136], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19136)))?cljs.core.second(arglists_19136):arglists_19136)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18682_19154 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18683_19155 = null;
var count__18684_19156 = (0);
var i__18685_19157 = (0);
while(true){
if((i__18685_19157 < count__18684_19156)){
var vec__18703_19160 = chunk__18683_19155.cljs$core$IIndexed$_nth$arity$2(null, i__18685_19157);
var name_19161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18703_19160,(0),null);
var map__18706_19162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18703_19160,(1),null);
var map__18706_19163__$1 = cljs.core.__destructure_map(map__18706_19162);
var doc_19164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18706_19163__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19165 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18706_19163__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19161], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19165], 0));

if(cljs.core.truth_(doc_19164)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19164], 0));
} else {
}


var G__19172 = seq__18682_19154;
var G__19173 = chunk__18683_19155;
var G__19174 = count__18684_19156;
var G__19175 = (i__18685_19157 + (1));
seq__18682_19154 = G__19172;
chunk__18683_19155 = G__19173;
count__18684_19156 = G__19174;
i__18685_19157 = G__19175;
continue;
} else {
var temp__5804__auto___19176 = cljs.core.seq(seq__18682_19154);
if(temp__5804__auto___19176){
var seq__18682_19178__$1 = temp__5804__auto___19176;
if(cljs.core.chunked_seq_QMARK_(seq__18682_19178__$1)){
var c__5525__auto___19180 = cljs.core.chunk_first(seq__18682_19178__$1);
var G__19181 = cljs.core.chunk_rest(seq__18682_19178__$1);
var G__19182 = c__5525__auto___19180;
var G__19183 = cljs.core.count(c__5525__auto___19180);
var G__19184 = (0);
seq__18682_19154 = G__19181;
chunk__18683_19155 = G__19182;
count__18684_19156 = G__19183;
i__18685_19157 = G__19184;
continue;
} else {
var vec__18710_19191 = cljs.core.first(seq__18682_19178__$1);
var name_19192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18710_19191,(0),null);
var map__18713_19193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18710_19191,(1),null);
var map__18713_19194__$1 = cljs.core.__destructure_map(map__18713_19193);
var doc_19195 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18713_19194__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19196 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18713_19194__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19192], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19196], 0));

if(cljs.core.truth_(doc_19195)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19195], 0));
} else {
}


var G__19197 = cljs.core.next(seq__18682_19178__$1);
var G__19198 = null;
var G__19199 = (0);
var G__19200 = (0);
seq__18682_19154 = G__19197;
chunk__18683_19155 = G__19198;
count__18684_19156 = G__19199;
i__18685_19157 = G__19200;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18719 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18720 = null;
var count__18721 = (0);
var i__18722 = (0);
while(true){
if((i__18722 < count__18721)){
var role = chunk__18720.cljs$core$IIndexed$_nth$arity$2(null, i__18722);
var temp__5804__auto___19202__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19202__$1)){
var spec_19203 = temp__5804__auto___19202__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19203)], 0));
} else {
}


var G__19204 = seq__18719;
var G__19205 = chunk__18720;
var G__19206 = count__18721;
var G__19207 = (i__18722 + (1));
seq__18719 = G__19204;
chunk__18720 = G__19205;
count__18721 = G__19206;
i__18722 = G__19207;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18719);
if(temp__5804__auto____$1){
var seq__18719__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18719__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18719__$1);
var G__19210 = cljs.core.chunk_rest(seq__18719__$1);
var G__19211 = c__5525__auto__;
var G__19212 = cljs.core.count(c__5525__auto__);
var G__19213 = (0);
seq__18719 = G__19210;
chunk__18720 = G__19211;
count__18721 = G__19212;
i__18722 = G__19213;
continue;
} else {
var role = cljs.core.first(seq__18719__$1);
var temp__5804__auto___19216__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19216__$2)){
var spec_19222 = temp__5804__auto___19216__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19222)], 0));
} else {
}


var G__19225 = cljs.core.next(seq__18719__$1);
var G__19226 = null;
var G__19227 = (0);
var G__19228 = (0);
seq__18719 = G__19225;
chunk__18720 = G__19226;
count__18721 = G__19227;
i__18722 = G__19228;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18769 = datafied_throwable;
var map__18769__$1 = cljs.core.__destructure_map(map__18769);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18769__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18769__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18769__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18770 = cljs.core.last(via);
var map__18770__$1 = cljs.core.__destructure_map(map__18770);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18770__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18770__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18770__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18771 = data;
var map__18771__$1 = cljs.core.__destructure_map(map__18771);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18771__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18771__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18771__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18772 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18772__$1 = cljs.core.__destructure_map(map__18772);
var top_data = map__18772__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18772__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18791 = phase;
var G__18791__$1 = (((G__18791 instanceof cljs.core.Keyword))?G__18791.fqn:null);
switch (G__18791__$1) {
case "read-source":
var map__18794 = data;
var map__18794__$1 = cljs.core.__destructure_map(map__18794);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18794__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18794__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18795 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18795__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18795,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18795);
var G__18795__$2 = (cljs.core.truth_((function (){var fexpr__18799 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18799.cljs$core$IFn$_invoke$arity$1 ? fexpr__18799.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18799.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18795__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18795__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18795__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18795__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18802 = top_data;
var G__18802__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18802,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18802);
var G__18802__$2 = (cljs.core.truth_((function (){var fexpr__18808 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18808.cljs$core$IFn$_invoke$arity$1 ? fexpr__18808.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18808.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18802__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18802__$1);
var G__18802__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18802__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18802__$2);
var G__18802__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18802__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18802__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18802__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18802__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18825 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18825,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18825,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18825,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18825,(3),null);
var G__18829 = top_data;
var G__18829__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18829,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18829);
var G__18829__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18829__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18829__$1);
var G__18829__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18829__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18829__$2);
var G__18829__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18829__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18829__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18829__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18829__$4;
}

break;
case "execution":
var vec__18850 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18850,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18850,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18850,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18850,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18762_SHARP_){
var or__5002__auto__ = (p1__18762_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__18864 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18864.cljs$core$IFn$_invoke$arity$1 ? fexpr__18864.cljs$core$IFn$_invoke$arity$1(p1__18762_SHARP_) : fexpr__18864.call(null, p1__18762_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__18870 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18870__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18870,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18870);
var G__18870__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18870__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18870__$1);
var G__18870__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18870__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18870__$2);
var G__18870__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18870__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18870__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18870__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18870__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18791__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18906){
var map__18907 = p__18906;
var map__18907__$1 = cljs.core.__destructure_map(map__18907);
var triage_data = map__18907__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18907__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18907__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18907__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18907__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18907__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18907__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18907__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18907__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__18930 = phase;
var G__18930__$1 = (((G__18930 instanceof cljs.core.Keyword))?G__18930.fqn:null);
switch (G__18930__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__18943 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__18945 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18946 = loc;
var G__18947 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18969_19296 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18970_19297 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18971_19298 = true;
var _STAR_print_fn_STAR__temp_val__18972_19299 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18971_19298);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18972_19299);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18900_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18900_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18970_19297);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18969_19296);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18943,G__18945,G__18946,G__18947) : format.call(null, G__18943,G__18945,G__18946,G__18947));

break;
case "macroexpansion":
var G__18996 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__18997 = cause_type;
var G__18998 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18999 = loc;
var G__19000 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18996,G__18997,G__18998,G__18999,G__19000) : format.call(null, G__18996,G__18997,G__18998,G__18999,G__19000));

break;
case "compile-syntax-check":
var G__19005 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19006 = cause_type;
var G__19007 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19008 = loc;
var G__19009 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19005,G__19006,G__19007,G__19008,G__19009) : format.call(null, G__19005,G__19006,G__19007,G__19008,G__19009));

break;
case "compilation":
var G__19016 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19017 = cause_type;
var G__19018 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19019 = loc;
var G__19020 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19016,G__19017,G__19018,G__19019,G__19020) : format.call(null, G__19016,G__19017,G__19018,G__19019,G__19020));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19026 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19027 = symbol;
var G__19028 = loc;
var G__19029 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19031_19327 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19032_19328 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19033_19329 = true;
var _STAR_print_fn_STAR__temp_val__19034_19330 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19033_19329);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19034_19330);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18905_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18905_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19032_19328);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19031_19327);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19026,G__19027,G__19028,G__19029) : format.call(null, G__19026,G__19027,G__19028,G__19029));
} else {
var G__19072 = "Execution error%s at %s(%s).\n%s\n";
var G__19073 = cause_type;
var G__19074 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19075 = loc;
var G__19076 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19072,G__19073,G__19074,G__19075,G__19076) : format.call(null, G__19072,G__19073,G__19074,G__19075,G__19076));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18930__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
