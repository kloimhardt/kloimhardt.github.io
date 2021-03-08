goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__30828__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__30828 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30829__i = 0, G__30829__a = new Array(arguments.length -  0);
while (G__30829__i < G__30829__a.length) {G__30829__a[G__30829__i] = arguments[G__30829__i + 0]; ++G__30829__i;}
  args = new cljs.core.IndexedSeq(G__30829__a,0,null);
} 
return G__30828__delegate.call(this,args);};
G__30828.cljs$lang$maxFixedArity = 0;
G__30828.cljs$lang$applyTo = (function (arglist__30830){
var args = cljs.core.seq(arglist__30830);
return G__30828__delegate(args);
});
G__30828.cljs$core$IFn$_invoke$arity$variadic = G__30828__delegate;
return G__30828;
})()
);

(o.error = (function() { 
var G__30831__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__30831 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30832__i = 0, G__30832__a = new Array(arguments.length -  0);
while (G__30832__i < G__30832__a.length) {G__30832__a[G__30832__i] = arguments[G__30832__i + 0]; ++G__30832__i;}
  args = new cljs.core.IndexedSeq(G__30832__a,0,null);
} 
return G__30831__delegate.call(this,args);};
G__30831.cljs$lang$maxFixedArity = 0;
G__30831.cljs$lang$applyTo = (function (arglist__30833){
var args = cljs.core.seq(arglist__30833);
return G__30831__delegate(args);
});
G__30831.cljs$core$IFn$_invoke$arity$variadic = G__30831__delegate;
return G__30831;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
