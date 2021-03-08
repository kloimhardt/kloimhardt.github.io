goog.provide('rewrite_clj.parser.keyword');
goog.require('cljs.core');
goog.require('rewrite_clj.node');
goog.require('cljs.tools.reader.reader_types');
goog.require('rewrite_clj.reader');
rewrite_clj.parser.keyword.parse_keyword = (function rewrite_clj$parser$keyword$parse_keyword(reader){
(rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.read_char.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.read_char.call(null,reader));

var temp__5733__auto__ = (rewrite_clj.reader.peek_char.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.reader.peek_char.cljs$core$IFn$_invoke$arity$1(reader) : rewrite_clj.reader.peek_char.call(null,reader));
if(cljs.core.truth_(temp__5733__auto__)){
var c = temp__5733__auto__;
if((c === ":")){
var G__26976 = rewrite_clj.reader.read_keyword(reader,":");
var G__26977 = true;
return (rewrite_clj.node.keyword_node.cljs$core$IFn$_invoke$arity$2 ? rewrite_clj.node.keyword_node.cljs$core$IFn$_invoke$arity$2(G__26976,G__26977) : rewrite_clj.node.keyword_node.call(null,G__26976,G__26977));
} else {
var G__26979_26983 = reader;
var G__26980_26984 = ":";
(rewrite_clj.reader.unread.cljs$core$IFn$_invoke$arity$2 ? rewrite_clj.reader.unread.cljs$core$IFn$_invoke$arity$2(G__26979_26983,G__26980_26984) : rewrite_clj.reader.unread.call(null,G__26979_26983,G__26980_26984));

var G__26981 = rewrite_clj.reader.read_keyword(reader,":");
return (rewrite_clj.node.keyword_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.keyword_node.cljs$core$IFn$_invoke$arity$1(G__26981) : rewrite_clj.node.keyword_node.call(null,G__26981));
}
} else {
return rewrite_clj.reader.throw_reader(reader,"unexpected EOF while reading keyword.");
}
});

//# sourceMappingURL=rewrite_clj.parser.keyword.js.map
