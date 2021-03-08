goog.provide('sci.impl.interop');
goog.require('cljs.core');
goog.require('goog.object');
sci.impl.interop.invoke_instance_method = (function sci$impl$interop$invoke_instance_method(obj,_target_class,method_name,args){
if(("-" === method_name.charAt((0)))){
return (obj[cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_name,(1))]);
} else {
var temp__5733__auto__ = (obj[method_name]);
if(cljs.core.truth_(temp__5733__auto__)){
var method = temp__5733__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(method,obj,args);
} else {
throw (new Error(["Could not find method: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name)].join('')));
}
}
});
sci.impl.interop.invoke_static_method = (function sci$impl$interop$invoke_static_method(p__26266,args){
var vec__26267 = p__26266;
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26267,(0),null);
var method_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26267,(1),null);
var temp__5733__auto__ = goog.object.get(class$,method_name);
if(cljs.core.truth_(temp__5733__auto__)){
var method = temp__5733__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(method,args);
} else {
throw (new Error("Could not find method",method_name));
}
});
sci.impl.interop.get_static_field = (function sci$impl$interop$get_static_field(_){
throw (new Error("Not implemented yet."));
});
sci.impl.interop.invoke_constructor = (function sci$impl$interop$invoke_constructor(constructor$,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(constructor$,args);
});
sci.impl.interop.fully_qualify_class = (function sci$impl$interop$fully_qualify_class(p__26270,sym){
var map__26271 = p__26270;
var map__26271__$1 = (((((!((map__26271 == null))))?(((((map__26271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26271):map__26271);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26271__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26271__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var or__4185__auto__ = (function (){var temp__5733__auto__ = cljs.core.namespace(sym);
if(cljs.core.truth_(temp__5733__auto__)){
var ns_STAR_ = temp__5733__auto__;
if(("js" === ns_STAR_)){
if(cljs.core.contains_QMARK_(class__GT_opts,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym)))){
return sym;
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.contains_QMARK_(class__GT_opts,sym)){
return sym;
} else {
return null;
}
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(env)),sym);
}
});
sci.impl.interop.resolve_class_opts = (function sci$impl$interop$resolve_class_opts(p__26273,sym){
var map__26274 = p__26273;
var map__26274__$1 = (((((!((map__26274 == null))))?(((((map__26274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26274):map__26274);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26274__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26274__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var class_opts = (function (){var or__4185__auto__ = (function (){var temp__5733__auto__ = cljs.core.namespace(sym);
if(cljs.core.truth_(temp__5733__auto__)){
var ns_STAR_ = temp__5733__auto__;
if(("js" === ns_STAR_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym)));
} else {
return null;
}
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,sym);
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(env)),sym);
if(cljs.core.truth_(temp__5735__auto__)){
var v = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,v);
} else {
return null;
}
}
})();
return class_opts;
});
sci.impl.interop.resolve_class = (function sci$impl$interop$resolve_class(ctx,sym){
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(sci.impl.interop.resolve_class_opts(ctx,sym));
});

//# sourceMappingURL=sci.impl.interop.js.map
