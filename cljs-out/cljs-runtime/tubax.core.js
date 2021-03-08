goog.provide('tubax.core');
goog.require('cljs.core');
goog.require('ext.saxjs');
tubax.core.new_document = (function tubax$core$new_document(){
return cljs.core.List.EMPTY;
});
tubax.core.add_node_document = (function tubax$core$add_node_document(node,document){
var keytag = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(node.name);
var att_map = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(node.attributes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var node_value = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),keytag,new cljs.core.Keyword(null,"attributes","attributes",-74013604),att_map,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(document,node_value);
});
tubax.core.close_node_document = (function tubax$core$close_node_document(node,document){
if((!(cljs.core.empty_QMARK_(cljs.core.rest(document))))){
var current_node = cljs.core.first(document);
var father_node = cljs.core.first(cljs.core.rest(document));
var father_children = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(father_node);
var new_father = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(father_node,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(father_children,current_node));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(cljs.core.rest(document)),new_father);
} else {
return document;
}
});
tubax.core.add_text = (function tubax$core$add_text(text,document){
if((!(cljs.core.empty_QMARK_(text)))){
var current_node = cljs.core.first(document);
var node_children = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(current_node);
var new_node_value = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(current_node,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node_children,text));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(document),new_node_value);
} else {
return document;
}
});
tubax.core.format_document = (function tubax$core$format_document(document){
return cljs.core.first(document);
});
tubax.core.xml__GT_clj = (function tubax$core$xml__GT_clj(var_args){
var G__30653 = arguments.length;
switch (G__30653) {
case 1:
return tubax.core.xml__GT_clj.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tubax.core.xml__GT_clj.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tubax.core.xml__GT_clj.cljs$core$IFn$_invoke$arity$1 = (function (source){
return tubax.core.xml__GT_clj.cljs$core$IFn$_invoke$arity$2(source,cljs.core.PersistentArrayMap.EMPTY);
}));

(tubax.core.xml__GT_clj.cljs$core$IFn$_invoke$arity$2 = (function (source,p__30654){
var map__30655 = p__30654;
var map__30655__$1 = (((((!((map__30655 == null))))?(((((map__30655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30655):map__30655);
var strict = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30655__$1,new cljs.core.Keyword(null,"strict","strict",-665564191),true);
var trim = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30655__$1,new cljs.core.Keyword(null,"trim","trim",774319767),true);
var normalize = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30655__$1,new cljs.core.Keyword(null,"normalize","normalize",-1904390051),false);
var lowercase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30655__$1,new cljs.core.Keyword(null,"lowercase","lowercase",41029539),true);
var xmlns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30655__$1,new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30655__$1,new cljs.core.Keyword(null,"position","position",-2011731912),true);
var strict_entities = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30655__$1,new cljs.core.Keyword(null,"strict-entities","strict-entities",-551773933),false);
var parser = sax.parser(strict,({"trim": trim, "normalize": normalize, "lowercase": lowercase, "xmlns": xmlns, "position": position, "strictEntities": strict_entities}));
var document = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(tubax.core.new_document());
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
(parser.onopentag = (function (p1__30647_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(document,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(tubax.core.add_node_document,p1__30647_SHARP_));
}));

(parser.onclosetag = (function (p1__30648_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(document,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(tubax.core.close_node_document,p1__30648_SHARP_));
}));

(parser.ontext = (function (p1__30649_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(document,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(tubax.core.add_text,p1__30649_SHARP_));
}));

(parser.oncdata = (function (p1__30650_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(document,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(tubax.core.add_text,p1__30650_SHARP_));
}));

(parser.onend = (function (){
if((cljs.core.deref(result) == null)){
return cljs.core.reset_BANG_(result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"success","success",1890645906),tubax.core.format_document(cljs.core.deref(document))], null));
} else {
return null;
}
}));

(parser.onerror = (function (p1__30651_SHARP_){
return cljs.core.reset_BANG_(result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30651_SHARP_)], null));
}));

parser.write(source);

parser.close();

var or__4185__auto__ = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(result));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(result))),cljs.core.PersistentArrayMap.EMPTY);
}
}));

(tubax.core.xml__GT_clj.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=tubax.core.js.map
