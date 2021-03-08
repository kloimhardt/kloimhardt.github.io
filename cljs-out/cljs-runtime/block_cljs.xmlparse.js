goog.provide('block_cljs.xmlparse');
goog.require('cljs.core');
block_cljs.xmlparse.l_block = (function block_cljs$xmlparse$l_block(x){
var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.Keyword(null,"type","type",1174270348)], null));
var s = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),(0),new cljs.core.Keyword(null,"content","content",15833224),(0)], null));
var t = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),(1),new cljs.core.Keyword(null,"content","content",15833224),(0)], null));
var u = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31197_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__31197_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),(0)], null));
}),(function (){var c = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224)], null));
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(c) / (2)),c);
})());
var pred__31198 = cljs.core._EQ_;
var expr__31199 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"___"].join(''),(0),(4));
if(cljs.core.truth_((pred__31198.cljs$core$IFn$_invoke$arity$2 ? pred__31198.cljs$core$IFn$_invoke$arity$2("vari",expr__31199) : pred__31198.call(null,"vari",expr__31199)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"var","var",-769682797),s], null);
} else {
if(cljs.core.truth_((pred__31198.cljs$core$IFn$_invoke$arity$2 ? pred__31198.cljs$core$IFn$_invoke$arity$2("num_",expr__31199) : pred__31198.call(null,"num_",expr__31199)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num","num",1985240673),s], null);
} else {
if(cljs.core.truth_((pred__31198.cljs$core$IFn$_invoke$arity$2 ? pred__31198.cljs$core$IFn$_invoke$arity$2("sym_",expr__31199) : pred__31198.call(null,"sym_",expr__31199)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sym","sym",-1444860305),s], null);
} else {
if(cljs.core.truth_((pred__31198.cljs$core$IFn$_invoke$arity$2 ? pred__31198.cljs$core$IFn$_invoke$arity$2("text",expr__31199) : pred__31198.call(null,"text",expr__31199)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),s], null);
} else {
if(cljs.core.truth_((pred__31198.cljs$core$IFn$_invoke$arity$2 ? pred__31198.cljs$core$IFn$_invoke$arity$2("funs",expr__31199) : pred__31198.call(null,"funs",expr__31199)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fun","fun",-1265158045),s], null);
} else {
if(cljs.core.truth_((pred__31198.cljs$core$IFn$_invoke$arity$2 ? pred__31198.cljs$core$IFn$_invoke$arity$2("inli",expr__31199) : pred__31198.call(null,"inli",expr__31199)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inli","inli",289112550),s], null);
} else {
if(cljs.core.truth_((pred__31198.cljs$core$IFn$_invoke$arity$2 ? pred__31198.cljs$core$IFn$_invoke$arity$2("list",expr__31199) : pred__31198.call(null,"list",expr__31199)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),s], null);
} else {
if(cljs.core.truth_((pred__31198.cljs$core$IFn$_invoke$arity$2 ? pred__31198.cljs$core$IFn$_invoke$arity$2("idfu",expr__31199) : pred__31198.call(null,"idfu",expr__31199)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idfun","idfun",345864348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,t], null)], null);
} else {
if(cljs.core.truth_((pred__31198.cljs$core$IFn$_invoke$arity$2 ? pred__31198.cljs$core$IFn$_invoke$arity$2("pair",expr__31199) : pred__31198.call(null,"pair",expr__31199)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pair","pair",-447516312),"p"], null);
} else {
if(cljs.core.truth_((pred__31198.cljs$core$IFn$_invoke$arity$2 ? pred__31198.cljs$core$IFn$_invoke$arity$2("map_",expr__31199) : pred__31198.call(null,"map_",expr__31199)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),"m"], null);
} else {
if(cljs.core.truth_((pred__31198.cljs$core$IFn$_invoke$arity$2 ? pred__31198.cljs$core$IFn$_invoke$arity$2("map-",expr__31199) : pred__31198.call(null,"map-",expr__31199)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map-h","map-h",1556484074),u], null);
} else {
if(cljs.core.truth_((pred__31198.cljs$core$IFn$_invoke$arity$2 ? pred__31198.cljs$core$IFn$_invoke$arity$2("vect",expr__31199) : pred__31198.call(null,"vect",expr__31199)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vec","vec",-657847931),"v"], null);
} else {
if(cljs.core.truth_((pred__31198.cljs$core$IFn$_invoke$arity$2 ? pred__31198.cljs$core$IFn$_invoke$arity$2("let_",expr__31199) : pred__31198.call(null,"let_",expr__31199)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"let","let",-1282412701),"l"], null);
} else {
if(cljs.core.truth_((pred__31198.cljs$core$IFn$_invoke$arity$2 ? pred__31198.cljs$core$IFn$_invoke$arity$2("args",expr__31199) : pred__31198.call(null,"args",expr__31199)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),"args"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}
}
}
}
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
block_cljs.xmlparse.level1b = (function block_cljs$xmlparse$level1b(x){
if(cljs.core.map_QMARK_(x)){
if(cljs.core.truth_((function (){var G__31203 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(x);
var fexpr__31202 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"statement","statement",-32780863),null,new cljs.core.Keyword(null,"block","block",664686210),null,new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"next","next",-117701485),null,new cljs.core.Keyword(null,"xml","xml",-1170142052),null], null), null);
return (fexpr__31202.cljs$core$IFn$_invoke$arity$1 ? fexpr__31202.cljs$core$IFn$_invoke$arity$1(G__31203) : fexpr__31202.call(null,G__31203));
})())){
var a = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31201_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p1__31201_SHARP_);
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(block_cljs.xmlparse.level1b,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(x)));
var b = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(x)))?block_cljs.xmlparse.l_block(x):cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core.empty_QMARK_(a)){
return b;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,new cljs.core.Keyword(null,"dat","dat",683898592),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,a));
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
} else {
return x;
}
});
block_cljs.xmlparse.level2a = (function block_cljs$xmlparse$level2a(x){
var a = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(block_cljs.xmlparse.level2a,new cljs.core.Keyword(null,"dat","dat",683898592).cljs$core$IFn$_invoke$arity$1(x));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(x))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(a))))){
return cljs.core.first(a);
} else {
if(cljs.core.empty_QMARK_(a)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"dat","dat",683898592));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"dat","dat",683898592),a);
}
}
});
block_cljs.xmlparse.level3a = (function block_cljs$xmlparse$level3a(x){
var a = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(block_cljs.xmlparse.level3a,new cljs.core.Keyword(null,"dat","dat",683898592).cljs$core$IFn$_invoke$arity$1(x));
if(cljs.core.empty_QMARK_(a)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"dat","dat",683898592));
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__4174__auto__)){
return new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(cljs.core.last(a));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"dat","dat",683898592),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(a),new cljs.core.Keyword(null,"dat","dat",683898592).cljs$core$IFn$_invoke$arity$1(cljs.core.last(a)))));
} else {
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fun","fun",-1265158045).cljs$core$IFn$_invoke$arity$1(x),"defn"))?new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1((1)) : a.call(null,(1)))):false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"dat","dat",683898592),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1((0)) : a.call(null,(0))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),"args-1",new cljs.core.Keyword(null,"dat","dat",683898592),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1((1)) : a.call(null,(1)))], null)], null),(a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1((2)) : a.call(null,(2)))], null));
} else {
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fun","fun",-1265158045).cljs$core$IFn$_invoke$arity$1(x),"fn"))?new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1((0)) : a.call(null,(0)))):false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"dat","dat",683898592),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),"args-1",new cljs.core.Keyword(null,"dat","dat",683898592),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1((0)) : a.call(null,(0)))], null)], null),(a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1((1)) : a.call(null,(1)))], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"dat","dat",683898592),a);

}
}
}
}
});
block_cljs.xmlparse.level4a = (function block_cljs$xmlparse$level4a(x){
var a = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(block_cljs.xmlparse.level4a,new cljs.core.Keyword(null,"dat","dat",683898592).cljs$core$IFn$_invoke$arity$1(x));
if(cljs.core.truth_(new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(x));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(x));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(x));
} else {
if(cljs.core.contains_QMARK_(x,new cljs.core.Keyword(null,"text","text",-1790561697))){
var temp__5733__auto__ = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__5733__auto__)){
var t = temp__5733__auto__;
return t;
} else {
return " ";
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"fun","fun",-1265158045).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fun","fun",-1265158045).cljs$core$IFn$_invoke$arity$1(x)),a);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"inli","inli",289112550).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"inli","inli",289112550).cljs$core$IFn$_invoke$arity$1(x)),a);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"list","list",765357683).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,a);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"idfun","idfun",345864348).cljs$core$IFn$_invoke$arity$1(x))){
var v = new cljs.core.Keyword(null,"idfun","idfun",345864348).cljs$core$IFn$_invoke$arity$1(x);
return cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1((0)) : v.call(null,(0)))),cljs.core.cons((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1((1)) : v.call(null,(1))),a));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(x))){
return a;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.first(a))));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"map-h","map-h",1556484074).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,new cljs.core.Keyword(null,"map-h","map-h",1556484074).cljs$core$IFn$_invoke$arity$1(x)),a));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"vec","vec",-657847931).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.first(a);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"let","let",-1282412701).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.cons(new cljs.core.Symbol(null,"let","let",358118826,null),a);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(x))){
return a;
} else {
if(cljs.core.empty_QMARK_(a)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"dat","dat",683898592));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"dat","dat",683898592),a);

}
}
}
}
}
}
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
block_cljs.xmlparse.parse = (function block_cljs$xmlparse$parse(edn){
return block_cljs.xmlparse.level4a(block_cljs.xmlparse.level3a(block_cljs.xmlparse.level2a(block_cljs.xmlparse.level1b(edn))));
});

//# sourceMappingURL=block_cljs.xmlparse.js.map
