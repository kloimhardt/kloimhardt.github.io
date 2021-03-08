goog.provide('sci.impl.interpreter');
goog.require('cljs.core');
goog.require('cljs.tools.reader.reader_types');
goog.require('sci.impl.analyzer');
goog.require('sci.impl.fns');
goog.require('sci.impl.interop');
goog.require('sci.impl.macros');
goog.require('sci.impl.max_or_throw');
goog.require('sci.impl.opts');
goog.require('sci.impl.parser');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');

sci.impl.interpreter.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),"null",new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"let","let",358118826,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),"null",new cljs.core.Symbol(null,"require","require",1172530194,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"case","case",-1510733573,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core.
 */
sci.impl.interpreter.eval_and = (function sci$impl$interpreter$eval_and(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
if(xs){
var G__27826 = xs;
args__$2 = G__27826;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core.
 */
sci.impl.interpreter.eval_or = (function sci$impl$interpreter$eval_or(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
return v;
} else {
if(xs){
var G__27827 = xs;
args__$2 = G__27827;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.interpreter.eval_let = (function sci$impl$interpreter$eval_let(var_args){
var args__4795__auto__ = [];
var len__4789__auto___27828 = arguments.length;
var i__4790__auto___27829 = (0);
while(true){
if((i__4790__auto___27829 < len__4789__auto___27828)){
args__4795__auto__.push((arguments[i__4790__auto___27829]));

var G__27830 = (i__4790__auto___27829 + (1));
i__4790__auto___27829 = G__27830;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,let_bindings,exprs){
var ctx__$1 = (function (){var ctx__$1 = ctx;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var val_tag = (function (){var temp__5735__auto__ = cljs.core.meta(let_val);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
})();
var let_name__$1 = (cljs.core.truth_(val_tag)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(let_name,cljs.core.update,new cljs.core.Keyword(null,"tag","tag",-1290361223),((function (ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag){
return (function (t){
if(cljs.core.truth_(t)){
return t;
} else {
return val_tag;
}
});})(ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag))
):let_name);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,let_val) : sci.impl.interpreter.interpret.call(null,ctx__$1,let_val));
var ctx__$2 = cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),let_name__$1], null),v);
if(cljs.core.not(rest_let_bindings)){
return ctx__$2;
} else {
var G__27831 = ctx__$2;
var G__27832 = rest_let_bindings;
ctx__$1 = G__27831;
let_bindings__$1 = G__27832;
continue;
}
break;
}
})();
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,e) : sci.impl.interpreter.interpret.call(null,ctx__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__27834 = nexprs;
exprs__$1 = G__27834;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
}));

(sci.impl.interpreter.eval_let.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq27105){
var G__27106 = cljs.core.first(seq27105);
var seq27105__$1 = cljs.core.next(seq27105);
var G__27107 = cljs.core.first(seq27105__$1);
var seq27105__$2 = cljs.core.next(seq27105__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27106,G__27107,seq27105__$2);
}));

sci.impl.interpreter.eval_if = (function sci$impl$interpreter$eval_if(ctx,expr){
var cond = cljs.core.first(expr);
var expr__$1 = cljs.core.rest(expr);
var then = cljs.core.first(expr__$1);
var expr__$2 = cljs.core.rest(expr__$1);
var else$ = cljs.core.first(expr__$2);
if(cljs.core.truth_((sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,cond) : sci.impl.interpreter.interpret.call(null,ctx,cond)))){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,then) : sci.impl.interpreter.interpret.call(null,ctx,then));
} else {
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,else$) : sci.impl.interpreter.interpret.call(null,ctx,else$));
}
});
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__27108){
var vec__27109 = p__27108;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27109,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27109,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27109,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27109,(3),null);
var docstring = (cljs.core.truth_(_QMARK_init)?_QMARK_docstring:null);
var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.interpreter.interpret.call(null,ctx,init));
var m = cljs.core.meta(var_name);
var m__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.interpreter.interpret.call(null,ctx,m));
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null));
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var v = (cljs.core.truth_((function (){var G__27112 = new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647);
var G__27113 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27112,G__27113) : sci.impl.utils.kw_identical_QMARK_.call(null,G__27112,G__27113));
})())?(function (){var G__27114 = prev;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27114,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__27114;
})():(function (){
sci.impl.vars.bindRoot(prev,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return prev;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,var_name], null));
});
sci.impl.interpreter.resolve_symbol = (function sci$impl$interpreter$resolve_symbol(ctx,sym){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var temp__5733__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var v = temp__5733__auto__;
return cljs.core.second(v);
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Could not resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"\nks:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx)))].join(''),sym);
}
});
sci.impl.interpreter.parse_libspec = (function sci$impl$interpreter$parse_libspec(libspec){
if((libspec instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),libspec], null);
} else {
var vec__27115 = libspec;
var seq__27116 = cljs.core.seq(vec__27115);
var first__27117 = cljs.core.first(seq__27116);
var seq__27116__$1 = cljs.core.next(seq__27116);
var lib_name = first__27117;
var opts = seq__27116__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__27121 = opts;
var vec__27122 = G__27121;
var seq__27123 = cljs.core.seq(vec__27122);
var first__27124 = cljs.core.first(seq__27123);
var seq__27123__$1 = cljs.core.next(seq__27123);
var opt_name = first__27124;
var first__27124__$1 = cljs.core.first(seq__27123__$1);
var seq__27123__$2 = cljs.core.next(seq__27123__$1);
var fst_opt = first__27124__$1;
var rst_opts = seq__27123__$2;
var ret__$1 = ret;
var G__27121__$1 = G__27121;
while(true){
var ret__$2 = ret__$1;
var vec__27129 = G__27121__$1;
var seq__27130 = cljs.core.seq(vec__27129);
var first__27131 = cljs.core.first(seq__27130);
var seq__27130__$1 = cljs.core.next(seq__27130);
var opt_name__$1 = first__27131;
var first__27131__$1 = cljs.core.first(seq__27130__$1);
var seq__27130__$2 = cljs.core.next(seq__27130__$1);
var fst_opt__$1 = first__27131__$1;
var rst_opts__$1 = seq__27130__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__27132 = opt_name__$1;
var G__27132__$1 = (((G__27132 instanceof cljs.core.Keyword))?G__27132.fqn:null);
switch (G__27132__$1) {
case "as":
var G__27838 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__27839 = rst_opts__$1;
ret__$1 = G__27838;
G__27121__$1 = G__27839;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__27840 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__27841 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__27840;
G__27121__$1 = G__27841;
continue;

break;
case "refer":
var G__27842 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"refer","refer",-964295553),fst_opt__$1);
var G__27843 = rst_opts__$1;
ret__$1 = G__27842;
G__27121__$1 = G__27843;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27132__$1)].join('')));

}
}
break;
}
}
});
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,current_ns,the_loaded_ns,lib_name,p__27133){
var map__27134 = p__27133;
var map__27134__$1 = (((((!((map__27134 == null))))?(((((map__27134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27134):map__27134);
var _parsed_libspec = map__27134__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27134__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27134__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var the_current_ns__$2 = (cljs.core.truth_(refer)?(function (){
if(cljs.core.sequential_QMARK_(refer)){
} else {
throw (new Error(":refer value must be a sequential collection of symbols"));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,sym,(function (){var temp__5733__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__27136 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27136,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27136,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
}),the_current_ns__$1,refer);
})()
:the_current_ns__$1);
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
return env__$1;
});
sci.impl.interpreter.handle_require_libspec = (function sci$impl$interpreter$handle_require_libspec(ctx,libspec){
var map__27139 = sci.impl.interpreter.parse_libspec(libspec);
var map__27139__$1 = (((((!((map__27139 == null))))?(((((map__27139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27139):map__27139);
var parsed_libspec = map__27139__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27139__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27139__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var temp__5733__auto__ = (cljs.core.truth_(reload)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name));
if(cljs.core.truth_(temp__5733__auto__)){
var the_loaded_ns = temp__5733__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
var temp__5733__auto____$1 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5733__auto____$1)){
var load_fn = temp__5733__auto____$1;
var temp__5733__auto____$2 = (function (){var G__27141 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__27141) : load_fn.call(null,G__27141));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__27142 = temp__5733__auto____$2;
var map__27142__$1 = (((((!((map__27142 == null))))?(((((map__27142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27142):map__27142);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27142__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27142__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_file,file]));

try{var G__27145_27844 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__27146_27845 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__27145_27844,G__27146_27845) : sci.impl.interpreter.eval_string_STAR_.call(null,G__27145_27844,G__27146_27845));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e27144){if((e27144 instanceof Error)){
var e_27847 = e27144;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_27847;
} else {
throw e27144;

}
}finally {sci.impl.utils.set_namespace_BANG_(ctx,cnn,null);
}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib_name);
return sci.impl.interpreter.handle_require_libspec_env(env__$1,cnn,the_loaded_ns,lib_name,parsed_libspec);
}));
} else {
var or__4185__auto__ = (cljs.core.truth_(reload)?(function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name);
if(cljs.core.truth_(temp__5735__auto__)){
var the_loaded_ns = temp__5735__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
});
sci.impl.interpreter.eval_require = (function sci$impl$interpreter$eval_require(ctx,expr){
var args = cljs.core.next(expr);
var libspecs = cljs.core.PersistentVector.EMPTY;
var current_libspec = null;
var args__$1 = args;
while(true){
if(args__$1){
var ret = (function (){var G__27153 = ctx;
var G__27154 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27153,G__27154) : sci.impl.interpreter.interpret.call(null,G__27153,G__27154));
})();
if((ret instanceof cljs.core.Symbol)){
var G__27851 = (function (){var G__27155 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__27155,current_libspec);
} else {
return G__27155;
}
})();
var G__27852 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__27853 = cljs.core.next(args__$1);
libspecs = G__27851;
current_libspec = G__27852;
args__$1 = G__27853;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__27865 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__27866 = null;
var G__27867 = cljs.core.next(args__$1);
libspecs = G__27865;
current_libspec = G__27866;
args__$1 = G__27867;
continue;
} else {
var G__27868 = (function (){var G__27156 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__27156,current_libspec);
} else {
return G__27156;
}
})();
var G__27869 = ret;
var G__27870 = cljs.core.next(args__$1);
libspecs = G__27868;
current_libspec = G__27869;
args__$1 = G__27870;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__27157 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__27157,current_libspec);
} else {
return G__27157;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1,args){
return (function (p1__27147_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__27147_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1,args))
,libspecs__$1);
}
break;
}
});
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__27158){
var vec__27159 = p__27158;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27159,(0),null);
var map__27162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27159,(1),null);
var map__27162__$1 = (((((!((map__27162 == null))))?(((((map__27162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27162):map__27162);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27162__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27162__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27162__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__27164 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27164,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27164,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__27167 = ctx;
var G__27168 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27167,G__27168) : sci.impl.interpreter.interpret.call(null,G__27167,G__27168));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__27169 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__27169__$1 = (((((!((map__27169 == null))))?(((((map__27169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27169):map__27169);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27169__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27169__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27169__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var G__27177 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","in-try","sci.impl/in-try",851574752),true);
var G__27178 = body;
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27177,G__27178) : sci.impl.interpreter.interpret.call(null,G__27177,G__27178));
}catch (e27171){if((e27171 instanceof Error)){
var e = e27171;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__27172 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__27173 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27172,G__27173) : sci.impl.interpreter.interpret.call(null,G__27172,G__27173));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__27174 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27174,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27174,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e27171;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__27179){
var vec__27180 = p__27179;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27180,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27180,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27183_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__27183_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__27183_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__27185){
var vec__27186 = p__27185;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27186,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27186,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27186,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27184_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__27184_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__27184_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__27191,p__27192){
var map__27193 = p__27191;
var map__27193__$1 = (((((!((map__27193 == null))))?(((((map__27193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27193):map__27193);
var ctx = map__27193__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27193__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__27194 = p__27192;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27194,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27194,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27194,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27194,(3),null);
var instance_meta = cljs.core.meta(instance_expr);
var t = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.interpreter.interpret.call(null,ctx,instance_expr));
var t_class = (cljs.core.truth_(t)?(function (){var or__4185__auto__ = sci.impl.interop.resolve_class(ctx,t);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''),instance_expr);
}
})():null);
var target_class = (function (){var or__4185__auto__ = t_class;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var temp__5735__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
}
})();
var resolved_class = (function (){var or__4185__auto__ = target_class;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var class_name = resolved_class.name;
var class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(class_name);
var allowed_QMARK_ = (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,class_symbol);
}
})();
if(cljs.core.truth_(allowed_QMARK_)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resolved_class)," not allowed!"].join(''),instance_expr);
}

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27190_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__27190_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__27190_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__27198){
var vec__27199 = p__27198;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27199,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27199,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__27202){
var vec__27203 = p__27202;
var seq__27204 = cljs.core.seq(vec__27203);
var first__27205 = cljs.core.first(seq__27204);
var seq__27204__$1 = cljs.core.next(seq__27204);
var _ = first__27205;
var first__27205__$1 = cljs.core.first(seq__27204__$1);
var seq__27204__$2 = cljs.core.next(seq__27204__$1);
var ns_sym = first__27205__$1;
var exprs = seq__27204__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__27206 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27206,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27206,(1),null);
var G__27209_27881 = k;
var G__27209_27882__$1 = (((G__27209_27881 instanceof cljs.core.Keyword))?G__27209_27881.fqn:null);
switch (G__27209_27882__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__27209_27881,G__27209_27882__$1,vec__27206,k,v,ns_sym__$1,vec__27203,seq__27204,first__27205,seq__27204__$1,_,first__27205__$1,seq__27204__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__27209_27881,G__27209_27882__$1,vec__27206,k,v,ns_sym__$1,vec__27203,seq__27204,first__27205,seq__27204__$1,_,first__27205__$1,seq__27204__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27209_27882__$1)].join('')));

}

var G__27884 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__27884;
continue;
} else {
return null;
}
break;
}
});
sci.impl.interpreter.eval_resolve = (function sci$impl$interpreter$eval_resolve(ctx,p__27210){
var vec__27211 = p__27210;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27211,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27211,(1),null);
var sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.interpreter.interpret.call(null,ctx,sym));
return cljs.core.second(sci.impl.analyzer.lookup(ctx,sym__$1,false));
});
sci.impl.interpreter.macroexpand_1 = (function sci$impl$interpreter$macroexpand_1(ctx,expr){
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
return sci.impl.analyzer.analyze(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true),expr);
} else {
var f = sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
var f__$1 = (cljs.core.truth_(((sci.impl.vars.var_QMARK_(f))?sci.impl.vars.isMacro(f):false))?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.analyzer.macro_QMARK_(f__$1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr));
} else {
return expr;
}

}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.interpreter.macroexpand = (function sci$impl$interpreter$macroexpand(ctx,form){
var ex = sci.impl.interpreter.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.macroexpand.call(null,ctx,ex));
}
});
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__27214){
var vec__27215 = p__27214;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27215,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27215,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27215,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__27221 = exprs;
var vec__27222 = G__27221;
var seq__27223 = cljs.core.seq(vec__27222);
var first__27224 = cljs.core.first(seq__27223);
var seq__27223__$1 = cljs.core.next(seq__27223);
var expr = first__27224;
var exprs__$1 = seq__27223__$1;
var G__27221__$1 = G__27221;
while(true){
var vec__27225 = G__27221__$1;
var seq__27226 = cljs.core.seq(vec__27225);
var first__27227 = cljs.core.first(seq__27226);
var seq__27226__$1 = cljs.core.next(seq__27226);
var expr__$1 = first__27227;
var exprs__$2 = seq__27226__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e27228){if((e27228 instanceof Error)){
var e = e27228;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e27228;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__27891 = exprs__$3;
G__27221__$1 = G__27891;
continue;
} else {
return ret;
}
break;
}
});
sci.impl.interpreter.eval_do = (function sci$impl$interpreter$eval_do(ctx,expr){
var temp__5735__auto__ = cljs.core.next(expr);
if(temp__5735__auto__){
var exprs = temp__5735__auto__;
return sci.impl.interpreter.eval_do_STAR_(ctx,exprs);
} else {
return null;
}
});
sci.impl.interpreter.fn_call = (function sci$impl$interpreter$fn_call(ctx,f,args){
var G__27421 = cljs.core.count(args);
switch (G__27421) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg27231 = (function (){var G__27422 = ctx;
var G__27423 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27422,G__27423) : sci.impl.interpreter.interpret.call(null,G__27422,G__27423));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg27231) : f.call(null,arg27231));

break;
case (2):
var arg27232 = (function (){var G__27424 = ctx;
var G__27425 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27424,G__27425) : sci.impl.interpreter.interpret.call(null,G__27424,G__27425));
})();
var args__$1 = cljs.core.rest(args);
var arg27233 = (function (){var G__27426 = ctx;
var G__27427 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27426,G__27427) : sci.impl.interpreter.interpret.call(null,G__27426,G__27427));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg27232,arg27233) : f.call(null,arg27232,arg27233));

break;
case (3):
var arg27234 = (function (){var G__27428 = ctx;
var G__27429 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27428,G__27429) : sci.impl.interpreter.interpret.call(null,G__27428,G__27429));
})();
var args__$1 = cljs.core.rest(args);
var arg27235 = (function (){var G__27430 = ctx;
var G__27431 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27430,G__27431) : sci.impl.interpreter.interpret.call(null,G__27430,G__27431));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg27236 = (function (){var G__27432 = ctx;
var G__27433 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27432,G__27433) : sci.impl.interpreter.interpret.call(null,G__27432,G__27433));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg27234,arg27235,arg27236) : f.call(null,arg27234,arg27235,arg27236));

break;
case (4):
var arg27237 = (function (){var G__27434 = ctx;
var G__27435 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27434,G__27435) : sci.impl.interpreter.interpret.call(null,G__27434,G__27435));
})();
var args__$1 = cljs.core.rest(args);
var arg27238 = (function (){var G__27436 = ctx;
var G__27437 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27436,G__27437) : sci.impl.interpreter.interpret.call(null,G__27436,G__27437));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg27239 = (function (){var G__27438 = ctx;
var G__27439 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27438,G__27439) : sci.impl.interpreter.interpret.call(null,G__27438,G__27439));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg27240 = (function (){var G__27440 = ctx;
var G__27441 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27440,G__27441) : sci.impl.interpreter.interpret.call(null,G__27440,G__27441));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg27237,arg27238,arg27239,arg27240) : f.call(null,arg27237,arg27238,arg27239,arg27240));

break;
case (5):
var arg27241 = (function (){var G__27442 = ctx;
var G__27443 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27442,G__27443) : sci.impl.interpreter.interpret.call(null,G__27442,G__27443));
})();
var args__$1 = cljs.core.rest(args);
var arg27242 = (function (){var G__27444 = ctx;
var G__27445 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27444,G__27445) : sci.impl.interpreter.interpret.call(null,G__27444,G__27445));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg27243 = (function (){var G__27446 = ctx;
var G__27447 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27446,G__27447) : sci.impl.interpreter.interpret.call(null,G__27446,G__27447));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg27244 = (function (){var G__27448 = ctx;
var G__27449 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27448,G__27449) : sci.impl.interpreter.interpret.call(null,G__27448,G__27449));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg27245 = (function (){var G__27450 = ctx;
var G__27451 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27450,G__27451) : sci.impl.interpreter.interpret.call(null,G__27450,G__27451));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg27241,arg27242,arg27243,arg27244,arg27245) : f.call(null,arg27241,arg27242,arg27243,arg27244,arg27245));

break;
case (6):
var arg27246 = (function (){var G__27452 = ctx;
var G__27453 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27452,G__27453) : sci.impl.interpreter.interpret.call(null,G__27452,G__27453));
})();
var args__$1 = cljs.core.rest(args);
var arg27247 = (function (){var G__27454 = ctx;
var G__27455 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27454,G__27455) : sci.impl.interpreter.interpret.call(null,G__27454,G__27455));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg27248 = (function (){var G__27456 = ctx;
var G__27457 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27456,G__27457) : sci.impl.interpreter.interpret.call(null,G__27456,G__27457));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg27249 = (function (){var G__27458 = ctx;
var G__27459 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27458,G__27459) : sci.impl.interpreter.interpret.call(null,G__27458,G__27459));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg27250 = (function (){var G__27460 = ctx;
var G__27461 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27460,G__27461) : sci.impl.interpreter.interpret.call(null,G__27460,G__27461));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg27251 = (function (){var G__27462 = ctx;
var G__27463 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27462,G__27463) : sci.impl.interpreter.interpret.call(null,G__27462,G__27463));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg27246,arg27247,arg27248,arg27249,arg27250,arg27251) : f.call(null,arg27246,arg27247,arg27248,arg27249,arg27250,arg27251));

break;
case (7):
var arg27252 = (function (){var G__27464 = ctx;
var G__27465 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27464,G__27465) : sci.impl.interpreter.interpret.call(null,G__27464,G__27465));
})();
var args__$1 = cljs.core.rest(args);
var arg27253 = (function (){var G__27466 = ctx;
var G__27467 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27466,G__27467) : sci.impl.interpreter.interpret.call(null,G__27466,G__27467));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg27254 = (function (){var G__27468 = ctx;
var G__27469 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27468,G__27469) : sci.impl.interpreter.interpret.call(null,G__27468,G__27469));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg27255 = (function (){var G__27470 = ctx;
var G__27471 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27470,G__27471) : sci.impl.interpreter.interpret.call(null,G__27470,G__27471));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg27256 = (function (){var G__27472 = ctx;
var G__27473 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27472,G__27473) : sci.impl.interpreter.interpret.call(null,G__27472,G__27473));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg27257 = (function (){var G__27474 = ctx;
var G__27475 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27474,G__27475) : sci.impl.interpreter.interpret.call(null,G__27474,G__27475));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg27258 = (function (){var G__27476 = ctx;
var G__27477 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27476,G__27477) : sci.impl.interpreter.interpret.call(null,G__27476,G__27477));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg27252,arg27253,arg27254,arg27255,arg27256,arg27257,arg27258) : f.call(null,arg27252,arg27253,arg27254,arg27255,arg27256,arg27257,arg27258));

break;
case (8):
var arg27259 = (function (){var G__27478 = ctx;
var G__27479 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27478,G__27479) : sci.impl.interpreter.interpret.call(null,G__27478,G__27479));
})();
var args__$1 = cljs.core.rest(args);
var arg27260 = (function (){var G__27480 = ctx;
var G__27481 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27480,G__27481) : sci.impl.interpreter.interpret.call(null,G__27480,G__27481));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg27261 = (function (){var G__27482 = ctx;
var G__27483 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27482,G__27483) : sci.impl.interpreter.interpret.call(null,G__27482,G__27483));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg27262 = (function (){var G__27484 = ctx;
var G__27485 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27484,G__27485) : sci.impl.interpreter.interpret.call(null,G__27484,G__27485));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg27263 = (function (){var G__27486 = ctx;
var G__27487 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27486,G__27487) : sci.impl.interpreter.interpret.call(null,G__27486,G__27487));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg27264 = (function (){var G__27488 = ctx;
var G__27489 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27488,G__27489) : sci.impl.interpreter.interpret.call(null,G__27488,G__27489));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg27265 = (function (){var G__27490 = ctx;
var G__27491 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27490,G__27491) : sci.impl.interpreter.interpret.call(null,G__27490,G__27491));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg27266 = (function (){var G__27492 = ctx;
var G__27493 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27492,G__27493) : sci.impl.interpreter.interpret.call(null,G__27492,G__27493));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg27259,arg27260,arg27261,arg27262,arg27263,arg27264,arg27265,arg27266) : f.call(null,arg27259,arg27260,arg27261,arg27262,arg27263,arg27264,arg27265,arg27266));

break;
case (9):
var arg27267 = (function (){var G__27494 = ctx;
var G__27495 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27494,G__27495) : sci.impl.interpreter.interpret.call(null,G__27494,G__27495));
})();
var args__$1 = cljs.core.rest(args);
var arg27268 = (function (){var G__27496 = ctx;
var G__27497 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27496,G__27497) : sci.impl.interpreter.interpret.call(null,G__27496,G__27497));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg27269 = (function (){var G__27498 = ctx;
var G__27499 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27498,G__27499) : sci.impl.interpreter.interpret.call(null,G__27498,G__27499));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg27270 = (function (){var G__27500 = ctx;
var G__27501 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27500,G__27501) : sci.impl.interpreter.interpret.call(null,G__27500,G__27501));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg27271 = (function (){var G__27502 = ctx;
var G__27503 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27502,G__27503) : sci.impl.interpreter.interpret.call(null,G__27502,G__27503));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg27272 = (function (){var G__27504 = ctx;
var G__27505 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27504,G__27505) : sci.impl.interpreter.interpret.call(null,G__27504,G__27505));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg27273 = (function (){var G__27506 = ctx;
var G__27507 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27506,G__27507) : sci.impl.interpreter.interpret.call(null,G__27506,G__27507));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg27274 = (function (){var G__27508 = ctx;
var G__27509 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27508,G__27509) : sci.impl.interpreter.interpret.call(null,G__27508,G__27509));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg27275 = (function (){var G__27510 = ctx;
var G__27511 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27510,G__27511) : sci.impl.interpreter.interpret.call(null,G__27510,G__27511));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg27267,arg27268,arg27269,arg27270,arg27271,arg27272,arg27273,arg27274,arg27275) : f.call(null,arg27267,arg27268,arg27269,arg27270,arg27271,arg27272,arg27273,arg27274,arg27275));

break;
case (10):
var arg27276 = (function (){var G__27512 = ctx;
var G__27513 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27512,G__27513) : sci.impl.interpreter.interpret.call(null,G__27512,G__27513));
})();
var args__$1 = cljs.core.rest(args);
var arg27277 = (function (){var G__27514 = ctx;
var G__27515 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27514,G__27515) : sci.impl.interpreter.interpret.call(null,G__27514,G__27515));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg27278 = (function (){var G__27516 = ctx;
var G__27517 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27516,G__27517) : sci.impl.interpreter.interpret.call(null,G__27516,G__27517));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg27279 = (function (){var G__27518 = ctx;
var G__27519 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27518,G__27519) : sci.impl.interpreter.interpret.call(null,G__27518,G__27519));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg27280 = (function (){var G__27520 = ctx;
var G__27521 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27520,G__27521) : sci.impl.interpreter.interpret.call(null,G__27520,G__27521));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg27281 = (function (){var G__27522 = ctx;
var G__27523 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27522,G__27523) : sci.impl.interpreter.interpret.call(null,G__27522,G__27523));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg27282 = (function (){var G__27524 = ctx;
var G__27525 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27524,G__27525) : sci.impl.interpreter.interpret.call(null,G__27524,G__27525));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg27283 = (function (){var G__27526 = ctx;
var G__27527 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27526,G__27527) : sci.impl.interpreter.interpret.call(null,G__27526,G__27527));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg27284 = (function (){var G__27528 = ctx;
var G__27529 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27528,G__27529) : sci.impl.interpreter.interpret.call(null,G__27528,G__27529));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg27285 = (function (){var G__27530 = ctx;
var G__27531 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27530,G__27531) : sci.impl.interpreter.interpret.call(null,G__27530,G__27531));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg27276,arg27277,arg27278,arg27279,arg27280,arg27281,arg27282,arg27283,arg27284,arg27285) : f.call(null,arg27276,arg27277,arg27278,arg27279,arg27280,arg27281,arg27282,arg27283,arg27284,arg27285));

break;
case (11):
var arg27286 = (function (){var G__27532 = ctx;
var G__27533 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27532,G__27533) : sci.impl.interpreter.interpret.call(null,G__27532,G__27533));
})();
var args__$1 = cljs.core.rest(args);
var arg27287 = (function (){var G__27534 = ctx;
var G__27535 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27534,G__27535) : sci.impl.interpreter.interpret.call(null,G__27534,G__27535));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg27288 = (function (){var G__27536 = ctx;
var G__27537 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27536,G__27537) : sci.impl.interpreter.interpret.call(null,G__27536,G__27537));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg27289 = (function (){var G__27538 = ctx;
var G__27539 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27538,G__27539) : sci.impl.interpreter.interpret.call(null,G__27538,G__27539));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg27290 = (function (){var G__27540 = ctx;
var G__27541 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27540,G__27541) : sci.impl.interpreter.interpret.call(null,G__27540,G__27541));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg27291 = (function (){var G__27542 = ctx;
var G__27543 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27542,G__27543) : sci.impl.interpreter.interpret.call(null,G__27542,G__27543));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg27292 = (function (){var G__27544 = ctx;
var G__27545 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27544,G__27545) : sci.impl.interpreter.interpret.call(null,G__27544,G__27545));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg27293 = (function (){var G__27546 = ctx;
var G__27547 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27546,G__27547) : sci.impl.interpreter.interpret.call(null,G__27546,G__27547));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg27294 = (function (){var G__27548 = ctx;
var G__27549 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27548,G__27549) : sci.impl.interpreter.interpret.call(null,G__27548,G__27549));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg27295 = (function (){var G__27550 = ctx;
var G__27551 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27550,G__27551) : sci.impl.interpreter.interpret.call(null,G__27550,G__27551));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg27296 = (function (){var G__27552 = ctx;
var G__27553 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27552,G__27553) : sci.impl.interpreter.interpret.call(null,G__27552,G__27553));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg27286,arg27287,arg27288,arg27289,arg27290,arg27291,arg27292,arg27293,arg27294,arg27295,arg27296) : f.call(null,arg27286,arg27287,arg27288,arg27289,arg27290,arg27291,arg27292,arg27293,arg27294,arg27295,arg27296));

break;
case (12):
var arg27297 = (function (){var G__27554 = ctx;
var G__27555 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27554,G__27555) : sci.impl.interpreter.interpret.call(null,G__27554,G__27555));
})();
var args__$1 = cljs.core.rest(args);
var arg27298 = (function (){var G__27556 = ctx;
var G__27557 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27556,G__27557) : sci.impl.interpreter.interpret.call(null,G__27556,G__27557));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg27299 = (function (){var G__27558 = ctx;
var G__27559 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27558,G__27559) : sci.impl.interpreter.interpret.call(null,G__27558,G__27559));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg27300 = (function (){var G__27560 = ctx;
var G__27561 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27560,G__27561) : sci.impl.interpreter.interpret.call(null,G__27560,G__27561));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg27301 = (function (){var G__27562 = ctx;
var G__27563 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27562,G__27563) : sci.impl.interpreter.interpret.call(null,G__27562,G__27563));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg27302 = (function (){var G__27564 = ctx;
var G__27565 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27564,G__27565) : sci.impl.interpreter.interpret.call(null,G__27564,G__27565));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg27303 = (function (){var G__27566 = ctx;
var G__27567 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27566,G__27567) : sci.impl.interpreter.interpret.call(null,G__27566,G__27567));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg27304 = (function (){var G__27568 = ctx;
var G__27569 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27568,G__27569) : sci.impl.interpreter.interpret.call(null,G__27568,G__27569));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg27305 = (function (){var G__27570 = ctx;
var G__27571 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27570,G__27571) : sci.impl.interpreter.interpret.call(null,G__27570,G__27571));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg27306 = (function (){var G__27572 = ctx;
var G__27573 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27572,G__27573) : sci.impl.interpreter.interpret.call(null,G__27572,G__27573));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg27307 = (function (){var G__27574 = ctx;
var G__27575 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27574,G__27575) : sci.impl.interpreter.interpret.call(null,G__27574,G__27575));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg27308 = (function (){var G__27576 = ctx;
var G__27577 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27576,G__27577) : sci.impl.interpreter.interpret.call(null,G__27576,G__27577));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg27297,arg27298,arg27299,arg27300,arg27301,arg27302,arg27303,arg27304,arg27305,arg27306,arg27307,arg27308) : f.call(null,arg27297,arg27298,arg27299,arg27300,arg27301,arg27302,arg27303,arg27304,arg27305,arg27306,arg27307,arg27308));

break;
case (13):
var arg27309 = (function (){var G__27578 = ctx;
var G__27579 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27578,G__27579) : sci.impl.interpreter.interpret.call(null,G__27578,G__27579));
})();
var args__$1 = cljs.core.rest(args);
var arg27310 = (function (){var G__27580 = ctx;
var G__27581 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27580,G__27581) : sci.impl.interpreter.interpret.call(null,G__27580,G__27581));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg27311 = (function (){var G__27582 = ctx;
var G__27583 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27582,G__27583) : sci.impl.interpreter.interpret.call(null,G__27582,G__27583));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg27312 = (function (){var G__27584 = ctx;
var G__27585 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27584,G__27585) : sci.impl.interpreter.interpret.call(null,G__27584,G__27585));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg27313 = (function (){var G__27586 = ctx;
var G__27587 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27586,G__27587) : sci.impl.interpreter.interpret.call(null,G__27586,G__27587));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg27314 = (function (){var G__27588 = ctx;
var G__27589 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27588,G__27589) : sci.impl.interpreter.interpret.call(null,G__27588,G__27589));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg27315 = (function (){var G__27590 = ctx;
var G__27591 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27590,G__27591) : sci.impl.interpreter.interpret.call(null,G__27590,G__27591));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg27316 = (function (){var G__27592 = ctx;
var G__27593 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27592,G__27593) : sci.impl.interpreter.interpret.call(null,G__27592,G__27593));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg27317 = (function (){var G__27594 = ctx;
var G__27595 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27594,G__27595) : sci.impl.interpreter.interpret.call(null,G__27594,G__27595));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg27318 = (function (){var G__27596 = ctx;
var G__27597 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27596,G__27597) : sci.impl.interpreter.interpret.call(null,G__27596,G__27597));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg27319 = (function (){var G__27598 = ctx;
var G__27599 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27598,G__27599) : sci.impl.interpreter.interpret.call(null,G__27598,G__27599));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg27320 = (function (){var G__27600 = ctx;
var G__27601 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27600,G__27601) : sci.impl.interpreter.interpret.call(null,G__27600,G__27601));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg27321 = (function (){var G__27602 = ctx;
var G__27603 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27602,G__27603) : sci.impl.interpreter.interpret.call(null,G__27602,G__27603));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg27309,arg27310,arg27311,arg27312,arg27313,arg27314,arg27315,arg27316,arg27317,arg27318,arg27319,arg27320,arg27321) : f.call(null,arg27309,arg27310,arg27311,arg27312,arg27313,arg27314,arg27315,arg27316,arg27317,arg27318,arg27319,arg27320,arg27321));

break;
case (14):
var arg27322 = (function (){var G__27604 = ctx;
var G__27605 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27604,G__27605) : sci.impl.interpreter.interpret.call(null,G__27604,G__27605));
})();
var args__$1 = cljs.core.rest(args);
var arg27323 = (function (){var G__27606 = ctx;
var G__27607 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27606,G__27607) : sci.impl.interpreter.interpret.call(null,G__27606,G__27607));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg27324 = (function (){var G__27608 = ctx;
var G__27609 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27608,G__27609) : sci.impl.interpreter.interpret.call(null,G__27608,G__27609));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg27325 = (function (){var G__27610 = ctx;
var G__27611 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27610,G__27611) : sci.impl.interpreter.interpret.call(null,G__27610,G__27611));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg27326 = (function (){var G__27612 = ctx;
var G__27613 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27612,G__27613) : sci.impl.interpreter.interpret.call(null,G__27612,G__27613));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg27327 = (function (){var G__27614 = ctx;
var G__27615 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27614,G__27615) : sci.impl.interpreter.interpret.call(null,G__27614,G__27615));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg27328 = (function (){var G__27616 = ctx;
var G__27617 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27616,G__27617) : sci.impl.interpreter.interpret.call(null,G__27616,G__27617));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg27329 = (function (){var G__27618 = ctx;
var G__27619 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27618,G__27619) : sci.impl.interpreter.interpret.call(null,G__27618,G__27619));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg27330 = (function (){var G__27620 = ctx;
var G__27621 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27620,G__27621) : sci.impl.interpreter.interpret.call(null,G__27620,G__27621));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg27331 = (function (){var G__27622 = ctx;
var G__27623 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27622,G__27623) : sci.impl.interpreter.interpret.call(null,G__27622,G__27623));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg27332 = (function (){var G__27624 = ctx;
var G__27625 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27624,G__27625) : sci.impl.interpreter.interpret.call(null,G__27624,G__27625));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg27333 = (function (){var G__27626 = ctx;
var G__27627 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27626,G__27627) : sci.impl.interpreter.interpret.call(null,G__27626,G__27627));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg27334 = (function (){var G__27628 = ctx;
var G__27629 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27628,G__27629) : sci.impl.interpreter.interpret.call(null,G__27628,G__27629));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg27335 = (function (){var G__27630 = ctx;
var G__27631 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27630,G__27631) : sci.impl.interpreter.interpret.call(null,G__27630,G__27631));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg27322,arg27323,arg27324,arg27325,arg27326,arg27327,arg27328,arg27329,arg27330,arg27331,arg27332,arg27333,arg27334,arg27335) : f.call(null,arg27322,arg27323,arg27324,arg27325,arg27326,arg27327,arg27328,arg27329,arg27330,arg27331,arg27332,arg27333,arg27334,arg27335));

break;
case (15):
var arg27336 = (function (){var G__27632 = ctx;
var G__27633 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27632,G__27633) : sci.impl.interpreter.interpret.call(null,G__27632,G__27633));
})();
var args__$1 = cljs.core.rest(args);
var arg27337 = (function (){var G__27634 = ctx;
var G__27635 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27634,G__27635) : sci.impl.interpreter.interpret.call(null,G__27634,G__27635));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg27338 = (function (){var G__27636 = ctx;
var G__27637 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27636,G__27637) : sci.impl.interpreter.interpret.call(null,G__27636,G__27637));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg27339 = (function (){var G__27638 = ctx;
var G__27639 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27638,G__27639) : sci.impl.interpreter.interpret.call(null,G__27638,G__27639));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg27340 = (function (){var G__27640 = ctx;
var G__27641 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27640,G__27641) : sci.impl.interpreter.interpret.call(null,G__27640,G__27641));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg27341 = (function (){var G__27642 = ctx;
var G__27643 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27642,G__27643) : sci.impl.interpreter.interpret.call(null,G__27642,G__27643));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg27342 = (function (){var G__27644 = ctx;
var G__27645 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27644,G__27645) : sci.impl.interpreter.interpret.call(null,G__27644,G__27645));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg27343 = (function (){var G__27646 = ctx;
var G__27647 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27646,G__27647) : sci.impl.interpreter.interpret.call(null,G__27646,G__27647));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg27344 = (function (){var G__27648 = ctx;
var G__27649 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27648,G__27649) : sci.impl.interpreter.interpret.call(null,G__27648,G__27649));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg27345 = (function (){var G__27650 = ctx;
var G__27651 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27650,G__27651) : sci.impl.interpreter.interpret.call(null,G__27650,G__27651));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg27346 = (function (){var G__27652 = ctx;
var G__27653 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27652,G__27653) : sci.impl.interpreter.interpret.call(null,G__27652,G__27653));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg27347 = (function (){var G__27654 = ctx;
var G__27655 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27654,G__27655) : sci.impl.interpreter.interpret.call(null,G__27654,G__27655));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg27348 = (function (){var G__27656 = ctx;
var G__27657 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27656,G__27657) : sci.impl.interpreter.interpret.call(null,G__27656,G__27657));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg27349 = (function (){var G__27658 = ctx;
var G__27659 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27658,G__27659) : sci.impl.interpreter.interpret.call(null,G__27658,G__27659));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg27350 = (function (){var G__27660 = ctx;
var G__27661 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27660,G__27661) : sci.impl.interpreter.interpret.call(null,G__27660,G__27661));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg27336,arg27337,arg27338,arg27339,arg27340,arg27341,arg27342,arg27343,arg27344,arg27345,arg27346,arg27347,arg27348,arg27349,arg27350) : f.call(null,arg27336,arg27337,arg27338,arg27339,arg27340,arg27341,arg27342,arg27343,arg27344,arg27345,arg27346,arg27347,arg27348,arg27349,arg27350));

break;
case (16):
var arg27351 = (function (){var G__27662 = ctx;
var G__27663 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27662,G__27663) : sci.impl.interpreter.interpret.call(null,G__27662,G__27663));
})();
var args__$1 = cljs.core.rest(args);
var arg27352 = (function (){var G__27664 = ctx;
var G__27665 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27664,G__27665) : sci.impl.interpreter.interpret.call(null,G__27664,G__27665));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg27353 = (function (){var G__27666 = ctx;
var G__27667 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27666,G__27667) : sci.impl.interpreter.interpret.call(null,G__27666,G__27667));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg27354 = (function (){var G__27668 = ctx;
var G__27669 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27668,G__27669) : sci.impl.interpreter.interpret.call(null,G__27668,G__27669));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg27355 = (function (){var G__27670 = ctx;
var G__27671 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27670,G__27671) : sci.impl.interpreter.interpret.call(null,G__27670,G__27671));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg27356 = (function (){var G__27672 = ctx;
var G__27673 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27672,G__27673) : sci.impl.interpreter.interpret.call(null,G__27672,G__27673));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg27357 = (function (){var G__27674 = ctx;
var G__27675 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27674,G__27675) : sci.impl.interpreter.interpret.call(null,G__27674,G__27675));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg27358 = (function (){var G__27676 = ctx;
var G__27677 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27676,G__27677) : sci.impl.interpreter.interpret.call(null,G__27676,G__27677));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg27359 = (function (){var G__27678 = ctx;
var G__27679 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27678,G__27679) : sci.impl.interpreter.interpret.call(null,G__27678,G__27679));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg27360 = (function (){var G__27680 = ctx;
var G__27681 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27680,G__27681) : sci.impl.interpreter.interpret.call(null,G__27680,G__27681));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg27361 = (function (){var G__27682 = ctx;
var G__27683 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27682,G__27683) : sci.impl.interpreter.interpret.call(null,G__27682,G__27683));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg27362 = (function (){var G__27684 = ctx;
var G__27685 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27684,G__27685) : sci.impl.interpreter.interpret.call(null,G__27684,G__27685));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg27363 = (function (){var G__27686 = ctx;
var G__27687 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27686,G__27687) : sci.impl.interpreter.interpret.call(null,G__27686,G__27687));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg27364 = (function (){var G__27688 = ctx;
var G__27689 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27688,G__27689) : sci.impl.interpreter.interpret.call(null,G__27688,G__27689));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg27365 = (function (){var G__27690 = ctx;
var G__27691 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27690,G__27691) : sci.impl.interpreter.interpret.call(null,G__27690,G__27691));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg27366 = (function (){var G__27692 = ctx;
var G__27693 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27692,G__27693) : sci.impl.interpreter.interpret.call(null,G__27692,G__27693));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg27351,arg27352,arg27353,arg27354,arg27355,arg27356,arg27357,arg27358,arg27359,arg27360,arg27361,arg27362,arg27363,arg27364,arg27365,arg27366) : f.call(null,arg27351,arg27352,arg27353,arg27354,arg27355,arg27356,arg27357,arg27358,arg27359,arg27360,arg27361,arg27362,arg27363,arg27364,arg27365,arg27366));

break;
case (17):
var arg27367 = (function (){var G__27694 = ctx;
var G__27695 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27694,G__27695) : sci.impl.interpreter.interpret.call(null,G__27694,G__27695));
})();
var args__$1 = cljs.core.rest(args);
var arg27368 = (function (){var G__27696 = ctx;
var G__27697 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27696,G__27697) : sci.impl.interpreter.interpret.call(null,G__27696,G__27697));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg27369 = (function (){var G__27698 = ctx;
var G__27699 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27698,G__27699) : sci.impl.interpreter.interpret.call(null,G__27698,G__27699));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg27370 = (function (){var G__27700 = ctx;
var G__27701 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27700,G__27701) : sci.impl.interpreter.interpret.call(null,G__27700,G__27701));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg27371 = (function (){var G__27702 = ctx;
var G__27703 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27702,G__27703) : sci.impl.interpreter.interpret.call(null,G__27702,G__27703));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg27372 = (function (){var G__27704 = ctx;
var G__27705 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27704,G__27705) : sci.impl.interpreter.interpret.call(null,G__27704,G__27705));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg27373 = (function (){var G__27706 = ctx;
var G__27707 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27706,G__27707) : sci.impl.interpreter.interpret.call(null,G__27706,G__27707));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg27374 = (function (){var G__27708 = ctx;
var G__27709 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27708,G__27709) : sci.impl.interpreter.interpret.call(null,G__27708,G__27709));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg27375 = (function (){var G__27710 = ctx;
var G__27711 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27710,G__27711) : sci.impl.interpreter.interpret.call(null,G__27710,G__27711));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg27376 = (function (){var G__27712 = ctx;
var G__27713 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27712,G__27713) : sci.impl.interpreter.interpret.call(null,G__27712,G__27713));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg27377 = (function (){var G__27714 = ctx;
var G__27715 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27714,G__27715) : sci.impl.interpreter.interpret.call(null,G__27714,G__27715));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg27378 = (function (){var G__27716 = ctx;
var G__27717 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27716,G__27717) : sci.impl.interpreter.interpret.call(null,G__27716,G__27717));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg27379 = (function (){var G__27718 = ctx;
var G__27719 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27718,G__27719) : sci.impl.interpreter.interpret.call(null,G__27718,G__27719));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg27380 = (function (){var G__27720 = ctx;
var G__27721 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27720,G__27721) : sci.impl.interpreter.interpret.call(null,G__27720,G__27721));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg27381 = (function (){var G__27722 = ctx;
var G__27723 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27722,G__27723) : sci.impl.interpreter.interpret.call(null,G__27722,G__27723));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg27382 = (function (){var G__27724 = ctx;
var G__27725 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27724,G__27725) : sci.impl.interpreter.interpret.call(null,G__27724,G__27725));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg27383 = (function (){var G__27726 = ctx;
var G__27727 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27726,G__27727) : sci.impl.interpreter.interpret.call(null,G__27726,G__27727));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg27367,arg27368,arg27369,arg27370,arg27371,arg27372,arg27373,arg27374,arg27375,arg27376,arg27377,arg27378,arg27379,arg27380,arg27381,arg27382,arg27383) : f.call(null,arg27367,arg27368,arg27369,arg27370,arg27371,arg27372,arg27373,arg27374,arg27375,arg27376,arg27377,arg27378,arg27379,arg27380,arg27381,arg27382,arg27383));

break;
case (18):
var arg27384 = (function (){var G__27728 = ctx;
var G__27729 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27728,G__27729) : sci.impl.interpreter.interpret.call(null,G__27728,G__27729));
})();
var args__$1 = cljs.core.rest(args);
var arg27385 = (function (){var G__27730 = ctx;
var G__27731 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27730,G__27731) : sci.impl.interpreter.interpret.call(null,G__27730,G__27731));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg27386 = (function (){var G__27732 = ctx;
var G__27733 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27732,G__27733) : sci.impl.interpreter.interpret.call(null,G__27732,G__27733));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg27387 = (function (){var G__27734 = ctx;
var G__27735 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27734,G__27735) : sci.impl.interpreter.interpret.call(null,G__27734,G__27735));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg27388 = (function (){var G__27736 = ctx;
var G__27737 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27736,G__27737) : sci.impl.interpreter.interpret.call(null,G__27736,G__27737));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg27389 = (function (){var G__27738 = ctx;
var G__27739 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27738,G__27739) : sci.impl.interpreter.interpret.call(null,G__27738,G__27739));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg27390 = (function (){var G__27740 = ctx;
var G__27741 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27740,G__27741) : sci.impl.interpreter.interpret.call(null,G__27740,G__27741));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg27391 = (function (){var G__27742 = ctx;
var G__27743 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27742,G__27743) : sci.impl.interpreter.interpret.call(null,G__27742,G__27743));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg27392 = (function (){var G__27744 = ctx;
var G__27745 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27744,G__27745) : sci.impl.interpreter.interpret.call(null,G__27744,G__27745));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg27393 = (function (){var G__27746 = ctx;
var G__27747 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27746,G__27747) : sci.impl.interpreter.interpret.call(null,G__27746,G__27747));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg27394 = (function (){var G__27748 = ctx;
var G__27749 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27748,G__27749) : sci.impl.interpreter.interpret.call(null,G__27748,G__27749));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg27395 = (function (){var G__27750 = ctx;
var G__27751 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27750,G__27751) : sci.impl.interpreter.interpret.call(null,G__27750,G__27751));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg27396 = (function (){var G__27752 = ctx;
var G__27753 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27752,G__27753) : sci.impl.interpreter.interpret.call(null,G__27752,G__27753));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg27397 = (function (){var G__27754 = ctx;
var G__27755 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27754,G__27755) : sci.impl.interpreter.interpret.call(null,G__27754,G__27755));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg27398 = (function (){var G__27756 = ctx;
var G__27757 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27756,G__27757) : sci.impl.interpreter.interpret.call(null,G__27756,G__27757));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg27399 = (function (){var G__27758 = ctx;
var G__27759 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27758,G__27759) : sci.impl.interpreter.interpret.call(null,G__27758,G__27759));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg27400 = (function (){var G__27760 = ctx;
var G__27761 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27760,G__27761) : sci.impl.interpreter.interpret.call(null,G__27760,G__27761));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg27401 = (function (){var G__27762 = ctx;
var G__27763 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27762,G__27763) : sci.impl.interpreter.interpret.call(null,G__27762,G__27763));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg27384,arg27385,arg27386,arg27387,arg27388,arg27389,arg27390,arg27391,arg27392,arg27393,arg27394,arg27395,arg27396,arg27397,arg27398,arg27399,arg27400,arg27401) : f.call(null,arg27384,arg27385,arg27386,arg27387,arg27388,arg27389,arg27390,arg27391,arg27392,arg27393,arg27394,arg27395,arg27396,arg27397,arg27398,arg27399,arg27400,arg27401));

break;
case (19):
var arg27402 = (function (){var G__27764 = ctx;
var G__27765 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27764,G__27765) : sci.impl.interpreter.interpret.call(null,G__27764,G__27765));
})();
var args__$1 = cljs.core.rest(args);
var arg27403 = (function (){var G__27766 = ctx;
var G__27767 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27766,G__27767) : sci.impl.interpreter.interpret.call(null,G__27766,G__27767));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg27404 = (function (){var G__27768 = ctx;
var G__27769 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27768,G__27769) : sci.impl.interpreter.interpret.call(null,G__27768,G__27769));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg27405 = (function (){var G__27770 = ctx;
var G__27771 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27770,G__27771) : sci.impl.interpreter.interpret.call(null,G__27770,G__27771));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg27406 = (function (){var G__27772 = ctx;
var G__27773 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27772,G__27773) : sci.impl.interpreter.interpret.call(null,G__27772,G__27773));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg27407 = (function (){var G__27774 = ctx;
var G__27775 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27774,G__27775) : sci.impl.interpreter.interpret.call(null,G__27774,G__27775));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg27408 = (function (){var G__27776 = ctx;
var G__27777 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27776,G__27777) : sci.impl.interpreter.interpret.call(null,G__27776,G__27777));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg27409 = (function (){var G__27778 = ctx;
var G__27779 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27778,G__27779) : sci.impl.interpreter.interpret.call(null,G__27778,G__27779));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg27410 = (function (){var G__27780 = ctx;
var G__27781 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27780,G__27781) : sci.impl.interpreter.interpret.call(null,G__27780,G__27781));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg27411 = (function (){var G__27782 = ctx;
var G__27783 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27782,G__27783) : sci.impl.interpreter.interpret.call(null,G__27782,G__27783));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg27412 = (function (){var G__27784 = ctx;
var G__27785 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27784,G__27785) : sci.impl.interpreter.interpret.call(null,G__27784,G__27785));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg27413 = (function (){var G__27786 = ctx;
var G__27787 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27786,G__27787) : sci.impl.interpreter.interpret.call(null,G__27786,G__27787));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg27414 = (function (){var G__27788 = ctx;
var G__27789 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27788,G__27789) : sci.impl.interpreter.interpret.call(null,G__27788,G__27789));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg27415 = (function (){var G__27790 = ctx;
var G__27791 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27790,G__27791) : sci.impl.interpreter.interpret.call(null,G__27790,G__27791));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg27416 = (function (){var G__27792 = ctx;
var G__27793 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27792,G__27793) : sci.impl.interpreter.interpret.call(null,G__27792,G__27793));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg27417 = (function (){var G__27794 = ctx;
var G__27795 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27794,G__27795) : sci.impl.interpreter.interpret.call(null,G__27794,G__27795));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg27418 = (function (){var G__27796 = ctx;
var G__27797 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27796,G__27797) : sci.impl.interpreter.interpret.call(null,G__27796,G__27797));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg27419 = (function (){var G__27798 = ctx;
var G__27799 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27798,G__27799) : sci.impl.interpreter.interpret.call(null,G__27798,G__27799));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg27420 = (function (){var G__27800 = ctx;
var G__27801 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27800,G__27801) : sci.impl.interpreter.interpret.call(null,G__27800,G__27801));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg27402,arg27403,arg27404,arg27405,arg27406,arg27407,arg27408,arg27409,arg27410,arg27411,arg27412,arg27413,arg27414,arg27415,arg27416,arg27417,arg27418,arg27419,arg27420) : f.call(null,arg27402,arg27403,arg27404,arg27405,arg27406,arg27407,arg27408,arg27409,arg27410,arg27411,arg27412,arg27413,arg27414,arg27415,arg27416,arg27417,arg27418,arg27419,arg27420));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__2619_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__2619_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__2619_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__27802 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__27802)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__27802)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__27802)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__27802)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__27802)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__27802)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__27803 = ctx;
var G__27804 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27803,G__27804) : sci.impl.interpreter.interpret.call(null,G__27803,G__27804));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__27802)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__27802)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__27802)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__27802)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__27802)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__27802)){
return sci.impl.interpreter.eval_require(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__27802)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__27802)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__27805 = ctx;
var G__27806 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27805,G__27806) : sci.impl.interpreter.interpret.call(null,G__27805,G__27806));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__27802)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__27802)){
return (new cljs.core.LazySeq(null,(function (){var G__27807 = ctx;
var G__27808 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__27807,G__27808) : sci.impl.interpreter.interpret.call(null,G__27807,G__27808));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__27802)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__27802)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__27802)){
return sci.impl.interpreter.eval_resolve(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__27802)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27802)].join('')));

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
sci.impl.interpreter.eval_call = (function sci$impl$interpreter$eval_call(ctx,expr){
try{var f = cljs.core.first(expr);
var m = cljs.core.meta(f);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
if((((f instanceof cljs.core.Symbol)) && (cljs.core.not(op)))){
return sci.impl.interpreter.eval_special_call(ctx,f,expr);
} else {
if(cljs.core.truth_((function (){var G__27810 = op;
var G__27811 = new cljs.core.Keyword(null,"static-access","static-access",-1860919441);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27810,G__27811) : sci.impl.utils.kw_identical_QMARK_.call(null,G__27810,G__27811));
})())){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_static_method_invocation(ctx,expr);
}
} else {
var f__$1 = (cljs.core.truth_(op)?(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.interpreter.interpret.call(null,ctx,f)):f);
if(cljs.core.ifn_QMARK_(f__$1)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.fn_call(ctx,f__$1,cljs.core.rest(expr));
}
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1], 0))," as a function."].join('')));
}

}
}
}catch (e27809){if((e27809 instanceof Error)){
var e = e27809;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e27809;

}
}});
sci.impl.interpreter.fix_meta = (function sci$impl$interpreter$fix_meta(v,old_meta){
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.meta(v);
if(cljs.core.truth_(and__4174__auto__)){
return (((!(sci.impl.vars.var_QMARK_(v)))) && ((!(sci.impl.vars.namespace_QMARK_(v)))));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(v,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(old_meta));
}));
} else {
return v;
}
});
sci.impl.interpreter.interpret = (function sci$impl$interpreter$interpret(ctx,expr){
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.sci$impl$types$IBox$getVal$arity$1(null);
if(cljs.core.not(sci.impl.vars.isMacro(v))){
return cljs.core.deref(v);
} else {
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
}
} else {
var m = cljs.core.meta(expr);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
var ret = ((cljs.core.not(op))?expr:(function (){var G__27815 = op;
var G__27815__$1 = (((G__27815 instanceof cljs.core.Keyword))?G__27815.fqn:null);
switch (G__27815__$1) {
case "call":
return sci.impl.interpreter.eval_call(ctx,expr);

break;
case "try":
return sci.impl.interpreter.eval_try(ctx,expr);

break;
case "fn":
return sci.impl.fns.eval_fn(ctx,sci.impl.interpreter.interpret,sci.impl.interpreter.eval_do_STAR_,expr);

break;
case "static-access":
return sci.impl.interop.get_static_field(expr);

break;
case "var-value":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr,(0));

break;
case "deref!":
var v = cljs.core.first(expr);
var v__$1 = ((sci.impl.vars.var_QMARK_(v))?cljs.core.deref(v):v);
return cljs.core.force(v__$1);

break;
case "resolve-sym":
return sci.impl.interpreter.resolve_symbol(ctx,expr);

break;
case "needs-ctx":
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expr,ctx);

break;
default:
if(cljs.core.map_QMARK_(expr)){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27812_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__27812_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__27812_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27813_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__27813_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__27813_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27814_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__27814_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__27814_SHARP_));
}),expr));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));

}
}

}
})());
var ret__$1 = (cljs.core.truth_(m)?sci.impl.interpreter.fix_meta(ret,m):ret);
var temp__5733__auto__ = ctx.get(new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543));
if(cljs.core.truth_(temp__5733__auto__)){
var n = temp__5733__auto__;
return sci.impl.max_or_throw.max_or_throw(ret__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"expression","expression",202311876),expr),n);
} else {
return ret__$1;
}
}
});
sci.impl.interpreter.do_QMARK_ = (function sci$impl$interpreter$do_QMARK_(expr){
return ((cljs.core.list_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(expr))));
});
sci.impl.interpreter.eval_form = (function sci$impl$interpreter$eval_form(ctx,form){
if(sci.impl.interpreter.do_QMARK_(form)){
var exprs = cljs.core.rest(form);
var ret = null;
while(true){
if(cljs.core.seq(exprs)){
var G__27894 = cljs.core.rest(exprs);
var G__27895 = (function (){var G__27818 = ctx;
var G__27819 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__27818,G__27819) : sci.impl.interpreter.eval_form.call(null,G__27818,G__27819));
})();
exprs = G__27894;
ret = G__27895;
continue;
} else {
return ret;
}
break;
}
} else {
var analyzed = sci.impl.analyzer.analyze(ctx,form);
var ret = sci.impl.interpreter.interpret(ctx,analyzed);
return ret;
}
});
sci.impl.interpreter.eval_string_STAR_ = (function sci$impl$interpreter$eval_string_STAR_(ctx,s){
var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
var queue = cljs.core.PersistentVector.EMPTY;
var ret = null;
while(true){
var expr = (function (){var or__4185__auto__ = cljs.core.first(queue);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader);
}
})();
if(cljs.core.truth_((function (){var G__27822 = new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
var G__27823 = expr;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__27822,G__27823) : sci.impl.utils.kw_identical_QMARK_.call(null,G__27822,G__27823));
})())){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
if(cljs.core.seq(queue)){
var G__27896 = cljs.core.rest(queue);
var G__27897 = ret__$1;
queue = G__27896;
ret = G__27897;
continue;
} else {
var G__27898 = cljs.core.PersistentVector.EMPTY;
var G__27899 = ret__$1;
queue = G__27898;
ret = G__27899;
continue;
}
}
break;
}
});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__27825 = arguments.length;
switch (G__27825) {
case 1:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var init_ctx = sci.impl.opts.init(opts);
var ret = (function (){
sci.impl.vars.push_thread_bindings((cljs.core.truth_(cljs.core.deref(sci.impl.vars.current_ns))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,sci.impl.opts.user_ns])));

try{return sci.impl.interpreter.eval_string_STAR_(init_ctx,s);
}finally {sci.impl.vars.pop_thread_bindings();
}})()
;
return ret;
}));

(sci.impl.interpreter.eval_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sci.impl.interpreter.js.map
