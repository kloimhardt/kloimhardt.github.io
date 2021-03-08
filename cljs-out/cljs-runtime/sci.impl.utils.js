goog.provide('sci.impl.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('sci.impl.vars');
goog.require('sci.impl.types');
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.error","realized-beyond-max","sci.error/realized-beyond-max",-1094268187),new cljs.core.Keyword("sci","error","sci/error",-979082803));
sci.impl.utils.constant_QMARK_ = (function sci$impl$utils$constant_QMARK_(x){
return ((typeof x === 'number') || (typeof x === 'string') || ((x instanceof cljs.core.Keyword)));
});
sci.impl.utils.mark_resolve_sym = (function sci$impl$utils$mark_resolve_sym(sym){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(sym,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"resolve-sym","resolve-sym",-1193683260));
}));
});
sci.impl.utils.eval_QMARK_ = (function sci$impl$utils$eval_QMARK_(x){
var G__26194 = x;
var G__26194__$1 = (((G__26194 == null))?null:cljs.core.meta(G__26194));
if((G__26194__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(G__26194__$1);
}
});
sci.impl.utils.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
sci.impl.utils.gensym_STAR_ = (function sci$impl$utils$gensym_STAR_(var_args){
var G__26196 = arguments.length;
switch (G__26196) {
case 0:
return sci.impl.utils.gensym_STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sci.impl.utils.gensym_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.utils.gensym_STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return sci.impl.utils.mark_resolve_sym(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
}));

(sci.impl.utils.gensym_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return sci.impl.utils.mark_resolve_sym(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(prefix));
}));

(sci.impl.utils.gensym_STAR_.cljs$lang$maxFixedArity = 1);

sci.impl.utils.mark_eval_call = (function sci$impl$utils$mark_eval_call(expr){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(expr,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"call","call",-519999866));
}));
});
sci.impl.utils.mark_eval = (function sci$impl$utils$mark_eval(expr){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(expr,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"eval","eval",-1103567905));
}));
});
sci.impl.utils.throw_error_with_location = (function sci$impl$utils$throw_error_with_location(var_args){
var G__26201 = arguments.length;
switch (G__26201) {
case 2:
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2 = (function (msg,iobj){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3(msg,iobj,cljs.core.PersistentArrayMap.EMPTY);
}));

(sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3 = (function (msg,iobj,data){
var map__26207 = cljs.core.meta(iobj);
var map__26207__$1 = (((((!((map__26207 == null))))?(((((map__26207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26207):map__26207);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26207__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26207__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)," [at ",(function (){var temp__5735__auto__ = cljs.core.deref(sci.impl.vars.current_file);
if(cljs.core.truth_(temp__5735__auto__)){
var v = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),", "].join('');
} else {
return null;
}
})(),"line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),"]"].join('');
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg__$1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("sci","error","sci/error",-979082803),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null),data], 0)));
}));

(sci.impl.utils.throw_error_with_location.cljs$lang$maxFixedArity = 3);

sci.impl.utils.rethrow_with_location_of_node = (function sci$impl$utils$rethrow_with_location_of_node(ctx,e,node){
if(cljs.core.not(new cljs.core.Keyword("sci.impl","in-try","sci.impl/in-try",851574752).cljs$core$IFn$_invoke$arity$1(ctx))){
var temp__5733__auto__ = e.message;
if(cljs.core.truth_(temp__5733__auto__)){
var m = temp__5733__auto__;
if(clojure.string.includes_QMARK_(m,"[at")){
throw e;
} else {
var map__26209 = cljs.core.meta(node);
var map__26209__$1 = (((((!((map__26209 == null))))?(((((map__26209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26209):map__26209);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26209__$1,new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(ctx));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26209__$1,new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(ctx));
if(cljs.core.truth_((function (){var and__4174__auto__ = line;
if(cljs.core.truth_(and__4174__auto__)){
return column;
} else {
return and__4174__auto__;
}
})())){
var m__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)," [at ",(function (){var temp__5735__auto__ = cljs.core.deref(sci.impl.vars.current_file);
if(cljs.core.truth_(temp__5735__auto__)){
var v = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),", "].join('');
} else {
return null;
}
})(),"line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),"]"].join('');
var new_exception = (function (){var d = cljs.core.ex_data(e);
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("sci","error","sci/error",-979082803),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column,new cljs.core.Keyword(null,"message","message",-406056002),m__$1], null),d], 0)),e);
})();
throw new_exception;
} else {
throw e;
}
}
} else {
throw e;
}
} else {
throw e;
}
});
/**
 * Only adds metadata to obj if d is not nil and if obj already has meta
 */
sci.impl.utils.vary_meta_STAR_ = (function sci$impl$utils$vary_meta_STAR_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___26231 = arguments.length;
var i__4790__auto___26234 = (0);
while(true){
if((i__4790__auto___26234 < len__4789__auto___26231)){
args__4795__auto__.push((arguments[i__4790__auto___26234]));

var G__26235 = (i__4790__auto___26234 + (1));
i__4790__auto___26234 = G__26235;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return sci.impl.utils.vary_meta_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(sci.impl.utils.vary_meta_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,f,args){
if((!(sci.impl.vars.var_QMARK_(obj)))){
if(cljs.core.truth_(cljs.core.meta(obj))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vary_meta,obj,f,args);
} else {
return obj;
}
} else {
return obj;
}
}));

(sci.impl.utils.vary_meta_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.utils.vary_meta_STAR_.cljs$lang$applyTo = (function (seq26211){
var G__26212 = cljs.core.first(seq26211);
var seq26211__$1 = cljs.core.next(seq26211);
var G__26213 = cljs.core.first(seq26211__$1);
var seq26211__$2 = cljs.core.next(seq26211__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26212,G__26213,seq26211__$2);
}));

/**
 * Only adds metadata to obj if d is not nil and if meta on obj isn't already nil.
 */
sci.impl.utils.merge_meta = (function sci$impl$utils$merge_meta(obj,d){
if(cljs.core.truth_((function (){var and__4174__auto__ = d;
if(cljs.core.truth_(and__4174__auto__)){
return (((!(sci.impl.vars.var_QMARK_(obj)))) && ((!(sci.impl.vars.namespace_QMARK_(obj)))));
} else {
return and__4174__auto__;
}
})())){
var temp__5733__auto__ = cljs.core.meta(obj);
if(cljs.core.truth_(temp__5733__auto__)){
var m = temp__5733__auto__;
return cljs.core.with_meta(obj,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,d], 0)));
} else {
return obj;
}
} else {
return obj;
}
});
sci.impl.utils.strip_core_ns = (function sci$impl$utils$strip_core_ns(sym){
var G__26215 = cljs.core.namespace(sym);
switch (G__26215) {
case "clojure.core":
case "cljs.core":
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));

break;
default:
return sym;

}
});
sci.impl.utils.allowed_loop = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("loop"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"allow","allow",-1857325745)], null));
sci.impl.utils.allowed_recur = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("recur"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"allow","allow",-1857325745)], null));
sci.impl.utils.walk_STAR_ = (function sci$impl$utils$walk_STAR_(inner,form){
if(cljs.core.truth_(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form)))){
return form;
} else {
if(cljs.core.list_QMARK_(form)){
return cljs.core.with_meta(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form)),cljs.core.meta(form));
} else {
if(cljs.core.map_entry_QMARK_(form)){
return (new cljs.core.MapEntry((function (){var G__26216 = cljs.core.key(form);
return (inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(G__26216) : inner.call(null,G__26216));
})(),(function (){var G__26217 = cljs.core.val(form);
return (inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(G__26217) : inner.call(null,G__26217));
})(),null));
} else {
if(cljs.core.seq_QMARK_(form)){
return cljs.core.with_meta(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form)),cljs.core.meta(form));
} else {
if(cljs.core.record_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(x) : inner.call(null,x)));
}),form,form);
} else {
if(cljs.core.coll_QMARK_(form)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(form),cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
} else {
return form;

}
}
}
}
}
}
});
/**
 * Prewalk with metadata preservation. Does not prewalk :sci.impl/op nodes.
 */
sci.impl.utils.prewalk = (function sci$impl$utils$prewalk(f,form){
return sci.impl.utils.walk_STAR_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sci.impl.utils.prewalk,f),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(form) : f.call(null,form)));
});
/**
 * Fetches namespaces from env if it exists. Else produces one and adds it to env before returning it.
 */
sci.impl.utils.get_namespace = (function sci$impl$utils$get_namespace(env,ns_sym,attr_map){
var or__4185__auto__ = (function (){var v = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(env),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym,new cljs.core.Keyword(null,"obj","obj",981763962)], null));
return v;
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var ns_obj = sci.impl.vars.__GT_SciNamespace(ns_sym,attr_map);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym,new cljs.core.Keyword(null,"obj","obj",981763962)], null),ns_obj);

return ns_obj;
}
});
sci.impl.utils.set_namespace_BANG_ = (function sci$impl$utils$set_namespace_BANG_(ctx,ns_sym,attr_map){
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var attr_map__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(ns_sym),attr_map], 0));
var ns_obj = sci.impl.utils.get_namespace(env,ns_sym,attr_map__$1);
return sci.impl.types.setVal(sci.impl.vars.current_ns,ns_obj);
});

//# sourceMappingURL=sci.impl.utils.js.map
