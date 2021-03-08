goog.provide('rewrite_clj.node.protocols');
goog.require('cljs.core');
goog.require('clojure.string');

/**
 * Protocol for EDN/Clojure nodes.
 * @interface
 */
rewrite_clj.node.protocols.Node = function(){};

/**
 * Keyword representing the type of the node.
 */
rewrite_clj.node.protocols.tag = (function rewrite_clj$node$protocols$tag(_){
if((((!((_ == null)))) && ((!((_.rewrite_clj$node$protocols$Node$tag$arity$1 == null)))))){
return _.rewrite_clj$node$protocols$Node$tag$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (rewrite_clj.node.protocols.tag[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (rewrite_clj.node.protocols.tag["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Node.tag",_);
}
}
}
});

/**
 * Return true if the node cannot be converted to an s-expression
 *   element.
 */
rewrite_clj.node.protocols.printable_only_QMARK_ = (function rewrite_clj$node$protocols$printable_only_QMARK_(_){
if((((!((_ == null)))) && ((!((_.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 == null)))))){
return _.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (rewrite_clj.node.protocols.printable_only_QMARK_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (rewrite_clj.node.protocols.printable_only_QMARK_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Node.printable-only?",_);
}
}
}
});

/**
 * Convert node to s-expression.
 */
rewrite_clj.node.protocols.sexpr = (function rewrite_clj$node$protocols$sexpr(_){
if((((!((_ == null)))) && ((!((_.rewrite_clj$node$protocols$Node$sexpr$arity$1 == null)))))){
return _.rewrite_clj$node$protocols$Node$sexpr$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (rewrite_clj.node.protocols.sexpr[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (rewrite_clj.node.protocols.sexpr["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Node.sexpr",_);
}
}
}
});

/**
 * Get number of characters for the string version of this node.
 */
rewrite_clj.node.protocols.length = (function rewrite_clj$node$protocols$length(_){
if((((!((_ == null)))) && ((!((_.rewrite_clj$node$protocols$Node$length$arity$1 == null)))))){
return _.rewrite_clj$node$protocols$Node$length$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (rewrite_clj.node.protocols.length[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (rewrite_clj.node.protocols.length["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Node.length",_);
}
}
}
});

/**
 * Convert node to printable string.
 */
rewrite_clj.node.protocols.string = (function rewrite_clj$node$protocols$string(_){
if((((!((_ == null)))) && ((!((_.rewrite_clj$node$protocols$Node$string$arity$1 == null)))))){
return _.rewrite_clj$node$protocols$Node$string$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (rewrite_clj.node.protocols.string[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (rewrite_clj.node.protocols.string["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Node.string",_);
}
}
}
});

goog.object.set(rewrite_clj.node.protocols.Node,"object",true);

var G__26350_26408 = rewrite_clj.node.protocols.tag;
var G__26351_26409 = "object";
var G__26352_26410 = (function (_){
return new cljs.core.Keyword(null,"unknown","unknown",-935977881);
});
goog.object.set(G__26350_26408,G__26351_26409,G__26352_26410);

var G__26354_26411 = rewrite_clj.node.protocols.printable_only_QMARK_;
var G__26355_26412 = "object";
var G__26356_26413 = (function (_){
return false;
});
goog.object.set(G__26354_26411,G__26355_26412,G__26356_26413);

var G__26358_26414 = rewrite_clj.node.protocols.sexpr;
var G__26359_26415 = "object";
var G__26360_26416 = (function (this$){
return this$;
});
goog.object.set(G__26358_26414,G__26359_26415,G__26360_26416);

var G__26361_26417 = rewrite_clj.node.protocols.length;
var G__26362_26418 = "object";
var G__26363_26419 = (function (this$){
return cljs.core.count(rewrite_clj.node.protocols.string(this$));
});
goog.object.set(G__26361_26417,G__26362_26418,G__26363_26419);

var G__26364_26420 = rewrite_clj.node.protocols.string;
var G__26365_26421 = "object";
var G__26366_26422 = (function (this$){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
});
goog.object.set(G__26364_26420,G__26365_26421,G__26366_26422);
/**
 * Given a seq of nodes, convert those that represent s-expressions
 * to the respective forms.
 */
rewrite_clj.node.protocols.sexprs = (function rewrite_clj$node$protocols$sexprs(nodes){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.sexpr,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.printable_only_QMARK_,nodes));
});
/**
 * Sum up lengths of the given nodes.
 */
rewrite_clj.node.protocols.sum_lengths = (function rewrite_clj$node$protocols$sum_lengths(nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.length,nodes));
});
/**
 * Convert nodes to strings and concatenate them.
 */
rewrite_clj.node.protocols.concat_strings = (function rewrite_clj$node$protocols$concat_strings(nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.string,nodes));
});

/**
 * Protocol for non-leaf EDN/Clojure nodes.
 * @interface
 */
rewrite_clj.node.protocols.InnerNode = function(){};

/**
 * Check whether the node can contain children.
 */
rewrite_clj.node.protocols.inner_QMARK_ = (function rewrite_clj$node$protocols$inner_QMARK_(_){
if((((!((_ == null)))) && ((!((_.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 == null)))))){
return _.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (rewrite_clj.node.protocols.inner_QMARK_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (rewrite_clj.node.protocols.inner_QMARK_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("InnerNode.inner?",_);
}
}
}
});

/**
 * Get child nodes.
 */
rewrite_clj.node.protocols.children = (function rewrite_clj$node$protocols$children(_){
if((((!((_ == null)))) && ((!((_.rewrite_clj$node$protocols$InnerNode$children$arity$1 == null)))))){
return _.rewrite_clj$node$protocols$InnerNode$children$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (rewrite_clj.node.protocols.children[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (rewrite_clj.node.protocols.children["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("InnerNode.children",_);
}
}
}
});

/**
 * Replace the node's children.
 */
rewrite_clj.node.protocols.replace_children = (function rewrite_clj$node$protocols$replace_children(_,children){
if((((!((_ == null)))) && ((!((_.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 == null)))))){
return _.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2(_,children);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (rewrite_clj.node.protocols.replace_children[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(_,children) : m__4488__auto__.call(null,_,children));
} else {
var m__4485__auto__ = (rewrite_clj.node.protocols.replace_children["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(_,children) : m__4485__auto__.call(null,_,children));
} else {
throw cljs.core.missing_protocol("InnerNode.replace-children",_);
}
}
}
});

goog.object.set(rewrite_clj.node.protocols.InnerNode,"object",true);

var G__26383_26432 = rewrite_clj.node.protocols.inner_QMARK_;
var G__26384_26433 = "object";
var G__26385_26434 = (function (_){
return false;
});
goog.object.set(G__26383_26432,G__26384_26433,G__26385_26434);

var G__26386_26435 = rewrite_clj.node.protocols.children;
var G__26387_26436 = "object";
var G__26388_26437 = (function (_){
throw (new Error("UnsupportedOperationException"));
});
goog.object.set(G__26386_26435,G__26387_26436,G__26388_26437);

var G__26389_26438 = rewrite_clj.node.protocols.replace_children;
var G__26390_26439 = "object";
var G__26391_26440 = (function (_,___$1){
throw (new Error("UnsupportedOperationException"));
});
goog.object.set(G__26389_26438,G__26390_26439,G__26391_26440);
/**
 * Get all child s-expressions for the given node.
 */
rewrite_clj.node.protocols.child_sexprs = (function rewrite_clj$node$protocols$child_sexprs(node){
if(cljs.core.truth_(rewrite_clj.node.protocols.inner_QMARK_(node))){
return rewrite_clj.node.protocols.sexprs(rewrite_clj.node.protocols.children(node));
} else {
return null;
}
});

/**
 * Protocol for values that can be coerced to nodes.
 * @interface
 */
rewrite_clj.node.protocols.NodeCoerceable = function(){};

rewrite_clj.node.protocols.coerce = (function rewrite_clj$node$protocols$coerce(_){
if((((!((_ == null)))) && ((!((_.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 == null)))))){
return _.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (rewrite_clj.node.protocols.coerce[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (rewrite_clj.node.protocols.coerce["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("NodeCoerceable.coerce",_);
}
}
}
});

rewrite_clj.node.protocols.assert_sexpr_count = (function rewrite_clj$node$protocols$assert_sexpr_count(nodes,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.printable_only_QMARK_,nodes)),c)){
return null;
} else {
throw (new Error(["Assert failed: ",["can only contain",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," non-whitespace form(s)."].join(''),"\n","(= (count (remove printable-only? nodes)) c)"].join('')));
}
});
rewrite_clj.node.protocols.assert_single_sexpr = (function rewrite_clj$node$protocols$assert_single_sexpr(nodes){
return rewrite_clj.node.protocols.assert_sexpr_count(nodes,(1));
});

//# sourceMappingURL=rewrite_clj.node.protocols.js.map
