goog.provide('block_cljs.view');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('goog.dom.forms');
goog.require('sci.core');
var module$node_modules$blockly$index=shadow.js.require("module$node_modules$blockly$index", {});
goog.require('block_cljs.xmlparse');
goog.require('block_cljs.tutorials_a');
goog.require('block_cljs.tutorials_b');
goog.require('block_cljs.tutorials_c');
goog.require('block_cljs.tutorials_d');
goog.require('block_cljs.tutorials_e');
goog.require('block_cljs.tutorials_f');
goog.require('clojure.walk');
goog.require('tubax.core');
goog.require('reagent.core');
goog.require('zprint.core');
block_cljs.view.menu = false;
block_cljs.view.tutorials = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(block_cljs.tutorials_a.vect,block_cljs.tutorials_b.vect,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_cljs.tutorials_c.vect,block_cljs.tutorials_d.vect,block_cljs.tutorials_e.vect,block_cljs.tutorials_f.vect], 0)));
block_cljs.view.chapters = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(block_cljs.tutorials_a.vect),"I"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(block_cljs.tutorials_b.vect),"II"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(block_cljs.tutorials_c.vect),"III"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(block_cljs.tutorials_d.vect),"IV"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(block_cljs.tutorials_e.vect),"V"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(block_cljs.tutorials_f.vect),"VI")], 0)));
block_cljs.view.load_workspace = (function block_cljs$view$load_workspace(xml_text){
return module$node_modules$blockly$index.Xml.clearWorkspaceAndLoadFromXml(module$node_modules$blockly$index.Xml.textToDom(xml_text),module$node_modules$blockly$index.getMainWorkspace());
});
if((typeof block_cljs !== 'undefined') && (typeof block_cljs.view !== 'undefined') && (typeof block_cljs.view.state !== 'undefined')){
} else {
block_cljs.view.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof block_cljs !== 'undefined') && (typeof block_cljs.view !== 'undefined') && (typeof block_cljs.view.app_state !== 'undefined')){
} else {
block_cljs.view.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
block_cljs.view.tutorial_fu = (function block_cljs$view$tutorial_fu(inc_or_dec){
return (function (){
var el = goog.dom.getElement("tutorial_no");
var idx_old = (function (){var G__6998 = goog.dom.forms.getValue(el);
return goog.string.toNumber(G__6998);
})();
var idx_new = (inc_or_dec.cljs$core$IFn$_invoke$arity$1 ? inc_or_dec.cljs$core$IFn$_invoke$arity$1(idx_old) : inc_or_dec.call(null,idx_old));
var idx = ((((((-1) < idx_new)) && ((idx_new < cljs.core.count(block_cljs.view.tutorials)))))?idx_new:((((((-1) < idx_old)) && ((idx_old < cljs.core.count(block_cljs.view.tutorials)))))?idx_old:(0)
));
var tut = cljs.core.get.cljs$core$IFn$_invoke$arity$2(block_cljs.view.tutorials,idx);
block_cljs.view.load_workspace(tut);

goog.dom.forms.setValue(el,idx);

cljs.core.reset_BANG_(block_cljs.view.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stdout","stdout",-531490018),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"code","code",1586293142),null,new cljs.core.Keyword(null,"tutorial-no","tutorial-no",-548072568),idx], null));

return cljs.core.reset_BANG_(block_cljs.view.app_state,(0));
});
});
if((typeof block_cljs !== 'undefined') && (typeof block_cljs.view !== 'undefined') && (typeof block_cljs.view.workspace !== 'undefined')){
} else {
block_cljs.view.workspace = (function (){
initblocks(module$node_modules$blockly$index);

return module$node_modules$blockly$index.inject("blocklyDiv",((block_cljs.view.menu)?cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toolbox","toolbox",762819836),goog.dom.getElement("toolbox"),new cljs.core.Keyword(null,"media","media",-1066138403),"/blockly/media/"], null)):null));
})()
;
}
var fexpr__6999_7010 = block_cljs.view.tutorial_fu(cljs.core.identity);
(fexpr__6999_7010.cljs$core$IFn$_invoke$arity$0 ? fexpr__6999_7010.cljs$core$IFn$_invoke$arity$0() : fexpr__6999_7010.call(null));
block_cljs.view.thexml = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
block_cljs.view.code__GT_break_str = (function block_cljs$view$code__GT_break_str(width,edn_code){
var temp__5733__auto__ = new cljs.core.Keyword(null,"dat","dat",683898592).cljs$core$IFn$_invoke$arity$1(edn_code);
if(cljs.core.truth_(temp__5733__auto__)){
var code = temp__5733__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7000_SHARP_){
return zprint.core.zprint_str.cljs$core$IFn$_invoke$arity$variadic(p1__7000_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([width], 0));
}),code)));
} else {
return zprint.core.zprint_str.cljs$core$IFn$_invoke$arity$variadic(edn_code,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([width], 0));
}
});
block_cljs.view.part_str = (function block_cljs$view$part_str(width,s){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core.str),cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(width,s))));
});
block_cljs.view.my_str = (function block_cljs$view$my_str(e,width){
var f = (function (x){
if((x == null)){
return "nil";
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}
});
if(cljs.core.seq_QMARK_(e)){
return block_cljs.view.part_str(width,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,e))));
} else {
return block_cljs.view.part_str(width,f(e));
}
});
block_cljs.view.augment_code_fu = (function block_cljs$view$augment_code_fu(edn_code,flat_code,fn_code){
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.second(fn_code)]),flat_code));
if(and__4174__auto__){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(edn_code);
} else {
return and__4174__auto__;
}
})())){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dat","dat",683898592).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(edn_code)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(edn_code,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"dat","dat",683898592)], null),(function (p1__7001_SHARP_){
return cljs.core.cons(fn_code,p1__7001_SHARP_);
}));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(edn_code,new cljs.core.Keyword(null,"code","code",1586293142),(function (c){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dat","dat",683898592),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_code,c], null)], null);
}));
}
} else {
return edn_code;
}
});
block_cljs.view.augment_code = (function block_cljs$view$augment_code(edn_code){
var flat_code = cljs.core.flatten(clojure.walk.postwalk((function (p1__7002_SHARP_){
if(cljs.core.map_QMARK_(p1__7002_SHARP_)){
return cljs.core.vec(p1__7002_SHARP_);
} else {
return p1__7002_SHARP_;
}
}),edn_code));
return block_cljs.view.augment_code_fu(block_cljs.view.augment_code_fu(edn_code,flat_code,cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"vec-rest","vec-rest",154067886,null),"added by Blockly parser",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r","r",1169147337,null),cljs.core.list(new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"r","r",1169147337,null)),cljs.core.list(new cljs.core.Symbol(null,"vec","vec",982683596,null),new cljs.core.Symbol(null,"r","r",1169147337,null)),new cljs.core.Symbol(null,"r","r",1169147337,null))))),flat_code,cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"vec-cons","vec-cons",527174270,null),"added by Blockly parser",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",-122660552,null),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",755448454,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),cljs.core.list(new cljs.core.Symbol(null,"vec","vec",982683596,null),new cljs.core.Symbol(null,"c","c",-122660552,null)),new cljs.core.Symbol(null,"c","c",-122660552,null)))));
});
block_cljs.view.timer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
block_cljs.view.counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
block_cljs.view.stop_timer = (function block_cljs$view$stop_timer(msg){
clearInterval(cljs.core.deref(block_cljs.view.timer));

cljs.core.reset_BANG_(block_cljs.view.timer,null);

cljs.core.reset_BANG_(block_cljs.view.counter,(0));

return msg;
});
block_cljs.view.start_timer = (function block_cljs$view$start_timer(fu,ms,max,msg){
if(cljs.core.truth_(cljs.core.deref(block_cljs.view.timer))){
return null;
} else {
cljs.core.reset_BANG_(block_cljs.view.timer,setInterval((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(block_cljs.view.counter,cljs.core.inc);

if((cljs.core.deref(block_cljs.view.counter) < max)){
return (fu.cljs$core$IFn$_invoke$arity$0 ? fu.cljs$core$IFn$_invoke$arity$0() : fu.call(null));
} else {
return block_cljs.view.stop_timer(null);
}
}),ms));

return msg;
}
});
block_cljs.view.run_code = (function block_cljs$view$run_code(edn_code){
var aug_edn_code = block_cljs.view.augment_code(edn_code);
var theout = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
var str_width = (41);
var bindings = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"println","println",-733595439,null),(function() { 
var G__7011__delegate = function (x){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(theout,cljs.core.str,block_cljs.view.my_str(x,str_width),"\n");

return null;
};
var G__7011 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__7012__i = 0, G__7012__a = new Array(arguments.length -  0);
while (G__7012__i < G__7012__a.length) {G__7012__a[G__7012__i] = arguments[G__7012__i + 0]; ++G__7012__i;}
  x = new cljs.core.IndexedSeq(G__7012__a,0,null);
} 
return G__7011__delegate.call(this,x);};
G__7011.cljs$lang$maxFixedArity = 0;
G__7011.cljs$lang$applyTo = (function (arglist__7013){
var x = cljs.core.seq(arglist__7013);
return G__7011__delegate(x);
});
G__7011.cljs$core$IFn$_invoke$arity$variadic = G__7011__delegate;
return G__7011;
})()
,new cljs.core.Symbol(null,"print","print",-1354873355,null),(function() { 
var G__7014__delegate = function (x){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(theout,cljs.core.str,block_cljs.view.my_str(x,str_width));

return null;
};
var G__7014 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__7015__i = 0, G__7015__a = new Array(arguments.length -  0);
while (G__7015__i < G__7015__a.length) {G__7015__a[G__7015__i] = arguments[G__7015__i + 0]; ++G__7015__i;}
  x = new cljs.core.IndexedSeq(G__7015__a,0,null);
} 
return G__7014__delegate.call(this,x);};
G__7014.cljs$lang$maxFixedArity = 0;
G__7014.cljs$lang$applyTo = (function (arglist__7016){
var x = cljs.core.seq(arglist__7016);
return G__7014__delegate(x);
});
G__7014.cljs$core$IFn$_invoke$arity$variadic = G__7014__delegate;
return G__7014;
})()
,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),block_cljs.view.app_state,new cljs.core.Symbol(null,"start-timer","start-timer",-1107980353,null),block_cljs.view.start_timer,new cljs.core.Symbol(null,"stop-timer","stop-timer",-664535809,null),block_cljs.view.stop_timer], null);
var erg = (function (){try{return sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(block_cljs.view.code__GT_break_str(str_width,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(aug_edn_code)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings], null));
}catch (e7003){if((e7003 instanceof Error)){
var e = e7003;
return e.message;
} else {
throw e7003;

}
}})();
if(block_cljs.view.menu){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------"], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_cljs.view.code__GT_break_str(str_width,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(aug_edn_code))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(aug_edn_code)], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------"], 0));

if(cljs.core.truth_(cljs.core.deref(theout))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(theout)], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([erg], 0));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(block_cljs.view.state,cljs.core.assoc,new cljs.core.Keyword(null,"stdout","stdout",-531490018),cljs.core.deref(theout),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211),block_cljs.view.my_str(erg,str_width),new cljs.core.Keyword(null,"code","code",1586293142),(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(aug_edn_code))?"Cannot even parse the blocks":block_cljs.view.code__GT_break_str(str_width,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(aug_edn_code))),new cljs.core.Keyword(null,"edn-code","edn-code",-57376893),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(aug_edn_code)], 0));
});
block_cljs.view.startsci = (function block_cljs$view$startsci(){
var xml_str = module$node_modules$blockly$index.Xml.domToPrettyText(module$node_modules$blockly$index.Xml.workspaceToDom(module$node_modules$blockly$index.mainWorkspace));
var edn_xml = tubax.core.xml__GT_clj.cljs$core$IFn$_invoke$arity$1(xml_str);
var edn_code = ((cljs.core.seq(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(edn_xml)))?(function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),block_cljs.xmlparse.parse(edn_xml)], null);
}catch (e7004){if((e7004 instanceof Error)){
var e = e7004;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e.message], null);
} else {
throw e7004;

}
}})():"");
cljs.core.reset_BANG_(block_cljs.view.thexml,xml_str);

return block_cljs.view.run_code(edn_code);
});
goog.exportSymbol('block_cljs.view.startsci', block_cljs.view.startsci);
block_cljs.view.tutorials_comp = (function block_cljs$view$tutorials_comp(){
if((new cljs.core.Keyword(null,"tutorial-no","tutorial-no",-548072568).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(block_cljs.view.state)) === (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),block_cljs.view.tutorial_fu(cljs.core.inc)], null),"Go to next example"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),block_cljs.view.tutorial_fu((function (p1__7005_SHARP_){
return (p1__7005_SHARP_ - (5));
}))], null),"<<"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),block_cljs.view.tutorial_fu((function (p1__7006_SHARP_){
return (p1__7006_SHARP_ + (5));
}))], null),">>"], null)," ",(new cljs.core.Keyword(null,"tutorial-no","tutorial-no",-548072568).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(block_cljs.view.state)) + (1)),"/",cljs.core.count(block_cljs.view.tutorials)," ","(",cljs.core.get.cljs$core$IFn$_invoke$arity$2(block_cljs.view.chapters,new cljs.core.Keyword(null,"tutorial-no","tutorial-no",-548072568).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(block_cljs.view.state))),")"," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),block_cljs.view.tutorial_fu(cljs.core.dec)], null),"<"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),block_cljs.view.tutorial_fu(cljs.core.inc)], null),">"], null)], null);
}
});
block_cljs.view.filter_defns = (function block_cljs$view$filter_defns(edn_code,fu){
var ec = (cljs.core.truth_(new cljs.core.Keyword(null,"dat","dat",683898592).cljs$core$IFn$_invoke$arity$1(edn_code))?edn_code:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dat","dat",683898592),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [edn_code], null)], null));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dat","dat",683898592),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7007_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("defn"),cljs.core.first(p1__7007_SHARP_));
}),new cljs.core.Keyword(null,"dat","dat",683898592).cljs$core$IFn$_invoke$arity$1(ec))),(new cljs.core.List(null,fu,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(new cljs.core.Keyword(null,"dat","dat",683898592).cljs$core$IFn$_invoke$arity$1(ec))], 0))], null);
});
block_cljs.view.to_kw = (function block_cljs$view$to_kw(edn_code,sy){
if((sy instanceof cljs.core.Symbol)){
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sy);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",cljs.core.first(s))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(1),((s).length)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("nil",s)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@app-state",s)){
return cljs.core.deref(block_cljs.view.app_state);
} else {
return sy;

}
}
}
} else {
if(cljs.core.map_QMARK_(sy)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(sy))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sy,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return block_cljs.view.run_code(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),block_cljs.view.filter_defns(edn_code,new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(sy))], null));
}));
} else {
return sy;
}
} else {
if(cljs.core.list_QMARK_(sy)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tl ",sy], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_cljs.view.augment_code(edn_code)], 0));

try{return sci.core.eval_string.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sy], 0)));
}catch (e7008){if((e7008 instanceof Error)){
var e = e7008;
return e.message;
} else {
throw e7008;

}
}} else {
return sy;

}
}
}
});
block_cljs.view.transform_vec = (function block_cljs$view$transform_vec(vect,edn_code){
return clojure.walk.postwalk((function (p1__7009_SHARP_){
return block_cljs.view.to_kw(edn_code,p1__7009_SHARP_);
}),vect);
});
block_cljs.view.reagent_comp = (function block_cljs$view$reagent_comp(){
var last_vec = ((cljs.core.vector_QMARK_(new cljs.core.Keyword(null,"edn-code","edn-code",-57376893).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(block_cljs.view.state))))?new cljs.core.Keyword(null,"edn-code","edn-code",-57376893).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(block_cljs.view.state)):((((cljs.core.map_QMARK_(new cljs.core.Keyword(null,"edn-code","edn-code",-57376893).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(block_cljs.view.state)))) && (cljs.core.vector_QMARK_(cljs.core.last(new cljs.core.Keyword(null,"dat","dat",683898592).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"edn-code","edn-code",-57376893).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(block_cljs.view.state))))))))?cljs.core.last(new cljs.core.Keyword(null,"dat","dat",683898592).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"edn-code","edn-code",-57376893).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(block_cljs.view.state)))):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)
));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(":div"),cljs.core.first(last_vec))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),block_cljs.view.transform_vec(last_vec,new cljs.core.Keyword(null,"edn-code","edn-code",-57376893).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(block_cljs.view.state)))], null);
} else {
return null;
}
});
block_cljs.view.out_comp = (function block_cljs$view$out_comp(){
return reagent.core.create_class(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((block_cljs.view.menu)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(block_cljs.view.thexml)], 0)),new cljs.core.Keyword(null,"id","id",-1388402092),"xmltext",new cljs.core.Keyword(null,"read-only","read-only",-191706886),true], null)], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_cljs.view.tutorials_comp], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_cljs.view.reagent_comp], null),(cljs.core.truth_(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(block_cljs.view.state)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"left","left",-399115937)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"50%"], null)], null),"Output"], null),((((1) < new cljs.core.Keyword(null,"tutorial-no","tutorial-no",-548072568).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(block_cljs.view.state))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Code"], null):null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"top","top",-1856271961)], null),(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"stdout","stdout",-531490018).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(block_cljs.view.state));
if(cljs.core.truth_(temp__5735__auto__)){
var so = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),so], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(block_cljs.view.state))], null)], null),((((1) < new cljs.core.Keyword(null,"tutorial-no","tutorial-no",-548072568).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(block_cljs.view.state))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"top","top",-1856271961)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(block_cljs.view.state))], null)], null):null)], null)], null)], null):null)], null);
})], null),((block_cljs.view.menu)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (){
goog.dom.getElement("xmltext").select();

return document.execCommand("copy");
})], null):null)], 0)));
});
block_cljs.view.theview = (function block_cljs$view$theview(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_cljs.view.out_comp], null)], null);
});
block_cljs.view.output = (function block_cljs$view$output(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_cljs.view.theview], null),goog.dom.getElement("out"));
});
goog.exportSymbol('block_cljs.view.output', block_cljs.view.output);

//# sourceMappingURL=block_cljs.view.js.map
