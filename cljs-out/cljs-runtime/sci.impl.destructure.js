goog.provide('sci.impl.destructure');
goog.require('cljs.core');
goog.require('sci.impl.utils');
sci.impl.destructure.destructure_STAR_ = (function sci$impl$destructure$destructure_STAR_(bindings){
var bents = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
var pb = (function sci$impl$destructure$destructure_STAR__$_pb(bvec,b,v){
var pvec = (function (bvec__$1,b__$1,val){
var gvec = sci.impl.utils.gensym_STAR_.cljs$core$IFn$_invoke$arity$1("vec__");
var gseq = sci.impl.utils.gensym_STAR_.cljs$core$IFn$_invoke$arity$1("seq__");
var gfirst = sci.impl.utils.gensym_STAR_.cljs$core$IFn$_invoke$arity$1("first__");
var has_rest = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),b__$1);
var ret = (function (){var ret = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(bvec__$1,gvec,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val], 0));
if(cljs.core.truth_(has_rest)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,gseq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sci.impl.utils.mark_eval_call((new cljs.core.List(null,cljs.core.seq,(new cljs.core.List(null,gvec,null,(1),null)),(2),null)))], 0));
} else {
return ret;
}
})();
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq(bs)){
var firstb = cljs.core.first(bs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,new cljs.core.Symbol(null,"&","&",-2144855648,null))){
var G__26254 = sci$impl$destructure$destructure_STAR__$_pb(ret,cljs.core.second(bs),gseq);
var G__26255 = n;
var G__26256 = cljs.core.nnext(bs);
var G__26257 = true;
ret = G__26254;
n = G__26255;
bs = G__26256;
seen_rest_QMARK_ = G__26257;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return sci$impl$destructure$destructure_STAR__$_pb(ret,cljs.core.second(bs),gvec);
} else {
if(cljs.core.truth_(seen_rest_QMARK_)){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__26258 = sci$impl$destructure$destructure_STAR__$_pb((cljs.core.truth_(has_rest)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,gfirst,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sci.impl.utils.mark_eval_call(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.first,null,(1),null)),(new cljs.core.List(null,gseq,null,(1),null)))))),gseq,sci.impl.utils.mark_eval_call(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.next,null,(1),null)),(new cljs.core.List(null,gseq,null,(1),null))))))], 0)):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:sci.impl.utils.mark_eval_call((new cljs.core.List(null,cljs.core.nth,(new cljs.core.List(null,gvec,(new cljs.core.List(null,n,(new cljs.core.List(null,null,null,(1),null)),(2),null)),(3),null)),(4),null)))));
var G__26259 = (n + (1));
var G__26260 = cljs.core.next(bs);
var G__26261 = seen_rest_QMARK_;
ret = G__26258;
n = G__26259;
bs = G__26260;
seen_rest_QMARK_ = G__26261;
continue;
}

}
}
} else {
return ret;
}
break;
}
});
var pmap = (function (bvec__$1,b__$1,v__$1){
var gmap = sci.impl.utils.gensym_STAR_.cljs$core$IFn$_invoke$arity$1("map__");
var defaults = new cljs.core.Keyword(null,"or","or",235744169).cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = (function (){var G__26242 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec__$1,gmap),v__$1),gmap),sci.impl.utils.mark_eval_call(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,sci.impl.utils.mark_eval_call(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.seq_QMARK_,null,(1),null)),(new cljs.core.List(null,gmap,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.mark_eval_call(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.apply,null,(1),null)),(new cljs.core.List(null,cljs.core.hash_map,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,gmap,null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,gmap,null,(1),null))], 0))))));
var fexpr__26241 = ((function (G__26242,gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gmap], 0));
} else {
return ret;
}
});})(G__26242,gmap,defaults,pvec,bents))
;
return fexpr__26241(G__26242);
})();
var bes = (function (){var transforms = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace(mk);
var mkn = cljs.core.name(mk);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"keys")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,(function (p1__26219_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2((function (){var or__4185__auto__ = mkns;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.namespace(p1__26219_SHARP_);
}
})(),cljs.core.name(p1__26219_SHARP_));
}));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"syms")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,(function (p1__26220_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((function (){var or__4185__auto__ = mkns;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.namespace(p1__26220_SHARP_);
}
})(),cljs.core.name(p1__26220_SHARP_));
}));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"strs")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,cljs.core.str);
} else {
return transforms;

}
}
}
} else {
return transforms;
}
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(b__$1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__26222_SHARP_,p2__26223_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26222_SHARP_,p2__26223_SHARP_,(function (){var fexpr__26248 = cljs.core.val(entry);
return (fexpr__26248.cljs$core$IFn$_invoke$arity$1 ? fexpr__26248.cljs$core$IFn$_invoke$arity$1(p2__26223_SHARP_) : fexpr__26248.call(null,p2__26223_SHARP_));
})());
}),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bes,cljs.core.key(entry)),(function (){var fexpr__26249 = cljs.core.key(entry);
return (fexpr__26249.cljs$core$IFn$_invoke$arity$1 ? fexpr__26249.cljs$core$IFn$_invoke$arity$1(bes) : fexpr__26249.call(null,bes));
})());
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(b__$1,new cljs.core.Keyword(null,"as","as",1148689641),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"or","or",235744169)], 0)),transforms);
})();
while(true){
if(cljs.core.seq(bes)){
var bb = cljs.core.key(cljs.core.first(bes));
var bk = cljs.core.val(cljs.core.first(bes));
var local = (((((!((bb == null))))?(((((bb.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === bb.cljs$core$INamed$))))?true:false):false))?cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(bb)),cljs.core.meta(bb)):bb);
var bk__$1 = (((bk instanceof cljs.core.Symbol))?(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,bk,null,(1),null)),(2),null)):bk);
var bv = (function (){var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(defaults,local);
if(cljs.core.truth_(temp__5733__auto__)){
var default$ = temp__5733__auto__;
return sci.impl.utils.mark_eval_call((new cljs.core.List(null,cljs.core.get,(new cljs.core.List(null,gmap,(new cljs.core.List(null,bk__$1,(new cljs.core.List(null,default$,null,(1),null)),(2),null)),(3),null)),(4),null)));
} else {
return sci.impl.utils.mark_eval_call((new cljs.core.List(null,cljs.core.get,(new cljs.core.List(null,gmap,(new cljs.core.List(null,bk__$1,null,(1),null)),(2),null)),(3),null)));
}
})();
var G__26264 = (((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,local,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bv], 0)):sci$impl$destructure$destructure_STAR__$_pb(ret,bb,bv));
var G__26265 = cljs.core.next(bes);
ret = G__26264;
bes = G__26265;
continue;
} else {
return ret;
}
break;
}
});
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec,(cljs.core.truth_(cljs.core.namespace(b))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(b))),v);
} else {
if(cljs.core.vector_QMARK_(b)){
return pvec(bvec,b,v);
} else {
if(cljs.core.map_QMARK_(b)){
return pmap(bvec,b,v);
} else {
throw (new Error(["Unsupported binding form: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('')));

}
}
}
}
});
var process_entry = (function (bvec,b){
return pb(bvec,cljs.core.first(b),cljs.core.second(b));
});
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,bents))){
return bindings;
} else {
var temp__5733__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26224_SHARP_){
return (cljs.core.first(p1__26224_SHARP_) instanceof cljs.core.Keyword);
}),bents));
if(temp__5733__auto__){
var kwbs = temp__5733__auto__;
throw (new Error(["Unsupported binding key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst(kwbs))].join('')));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
sci.impl.destructure.destructure = (function sci$impl$destructure$destructure(b){
return sci.impl.destructure.destructure_STAR_(b);
});

//# sourceMappingURL=sci.impl.destructure.js.map
