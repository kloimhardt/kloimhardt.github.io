goog.provide('zprint.zutil');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.zfns');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.zip');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.whitespace');
goog.require('rewrite_clj.zip.move');
goog.require('rewrite_clj.zip.removez');
goog.require('rewrite_clj.zip.editz');
goog.require('clojure.zip');
zprint.zutil.down_STAR_ = clojure.zip.down;
zprint.zutil.up_STAR_ = clojure.zip.up;
zprint.zutil.right_STAR_ = clojure.zip.right;
zprint.zutil.left_STAR_ = clojure.zip.left;
zprint.zutil.next_STAR_ = clojure.zip.next;
zprint.zutil.prev_STAR_ = clojure.zip.prev;
zprint.zutil.replace_STAR_ = clojure.zip.replace;
zprint.zutil.edn_STAR_ = rewrite_clj.zip.base.edn_STAR_;
zprint.zutil.sexpr = rewrite_clj.zip.base.sexpr;
zprint.zutil.string = rewrite_clj.zip.base.string;
zprint.zutil.tag = rewrite_clj.zip.base.tag;
zprint.zutil.skip = rewrite_clj.zip.whitespace.skip;
zprint.zutil.whitespace_QMARK_ = (function zprint$zutil$whitespace_QMARK_(zloc){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"comma","comma",1699024745))));
});
zprint.zutil.skip_whitespace = (function zprint$zutil$skip_whitespace(var_args){
var G__27253 = arguments.length;
switch (G__27253) {
case 1:
return zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.right,zloc);
}));

(zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$2 = (function (f,zloc){
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(f,zprint.zutil.whitespace_QMARK_,zloc) : zprint.zutil.skip.call(null,f,zprint.zutil.whitespace_QMARK_,zloc));
}));

(zprint.zutil.skip_whitespace.cljs$lang$maxFixedArity = 2);

zprint.zutil.whitespace_not_newline_QMARK_ = (function zprint$zutil$whitespace_not_newline_QMARK_(zloc){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"comma","comma",1699024745))));
});
zprint.zutil.whitespace_or_comment_QMARK_ = rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_;
zprint.zutil.length = rewrite_clj.zip.base.length;
zprint.zutil.rightmost_QMARK_ = rewrite_clj.zip.move.rightmost_QMARK_;
zprint.zutil.leftmost_QMARK_ = rewrite_clj.zip.move.leftmost_QMARK_;
zprint.zutil.zremove = rewrite_clj.zip.removez.remove;
zprint.zutil.zreplace = rewrite_clj.zip.editz.replace;
/**
 * Is the zipper zloc equivalent to the path floc.  In this
 *   case, floc isn't a zipper, but was turned into a path early on.
 */
zprint.zutil.zfocus = (function zprint$zutil$zfocus(zloc,floc){
var vec__27254 = (zprint.zutil.find_root_and_path.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.find_root_and_path.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.find_root_and_path.call(null,zloc));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27254,(0),null);
var zpath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27254,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zpath,floc);
});
/**
 * Take the various inputs and come up with a style.
 */
zprint.zutil.zfocus_style = (function zprint$zutil$zfocus_style(style,zloc,floc){
var style__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"f","f",-1597136552)))?style:((zprint.zutil.zfocus(zloc,floc))?new cljs.core.Keyword(null,"f","f",-1597136552):new cljs.core.Keyword(null,"b","b",1482224470)));
return style__$1;
});
/**
 * Is the zloc a collection?
 */
zprint.zutil.z_coll_QMARK_ = (function zprint$zutil$z_coll_QMARK_(zloc){
return (rewrite_clj.zip.seq_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.seq_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.seq_QMARK_.call(null,zloc));
});
/**
 * Is this a #_(...)
 */
zprint.zutil.zuneval_QMARK_ = (function zprint$zutil$zuneval_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"uneval","uneval",1932037707));
});
/**
 * Is this a ^{...}
 */
zprint.zutil.zmeta_QMARK_ = (function zprint$zutil$zmeta_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"meta","meta",1499536964));
});
/**
 * Is this a '(...) or '[ ... ] or some other quote?
 */
zprint.zutil.zquote_QMARK_ = (function zprint$zutil$zquote_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"quote","quote",-262615245));
});
/**
 * Is this a @...
 */
zprint.zutil.zreader_macro_QMARK_ = (function zprint$zutil$zreader_macro_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422));
});
/**
 * Return the tag for this zloc
 */
zprint.zutil.ztag = (function zprint$zutil$ztag(zloc){
return (zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc));
});
/**
 * Is this a namespaced map?
 */
zprint.zutil.znamespacedmap_QMARK_ = (function zprint$zutil$znamespacedmap_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"namespaced-map","namespaced-map",1235665380));
});
/**
 * Returns true if this is a comment.
 */
zprint.zutil.zcomment_QMARK_ = (function zprint$zutil$zcomment_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"comment","comment",532206069));
} else {
return null;
}
});
/**
 * Returns true if this is a newline.
 */
zprint.zutil.znewline_QMARK_ = (function zprint$zutil$znewline_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"newline","newline",1790071323));
} else {
return null;
}
});
/**
 * Does z/string, but takes an additional argument for hex conversion.
 *   Hex conversion is not implemented for zippers, though, because at present
 *   it is only used for byte-arrays, which don't really show up here.
 */
zprint.zutil.znumstr = (function zprint$zutil$znumstr(zloc,_,___$1){
return (zprint.zutil.string.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.string.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.string.call(null,zloc));
});
/**
 * Find the zloc inside of this zloc.
 */
zprint.zutil.zstart = (function zprint$zutil$zstart(zloc){
return (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
});
/**
 * Find the first non-whitespace zloc inside of this zloc, or
 *   the first whitespace zloc that is the focus.
 */
zprint.zutil.zfirst = (function zprint$zutil$zfirst(zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
if(cljs.core.truth_(nloc)){
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
});
/**
 * Find the first non-whitespace and non-comment zloc inside of this zloc.
 */
zprint.zutil.zfirst_no_comment = (function zprint$zutil$zfirst_no_comment(zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
if(cljs.core.truth_(nloc)){
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc));
} else {
return null;
}
});
/**
 * Find the second non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zsecond = (function zprint$zutil$zsecond(zloc){
var temp__5733__auto__ = zprint.zutil.zfirst(zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var first_loc = temp__5733__auto__;
var temp__5733__auto____$1 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(first_loc) : zprint.zutil.right_STAR_.call(null,first_loc));
if(cljs.core.truth_(temp__5733__auto____$1)){
var nloc = temp__5733__auto____$1;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the second non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zsecond_no_comment = (function zprint$zutil$zsecond_no_comment(zloc){
var temp__5733__auto__ = zprint.zutil.zfirst_no_comment(zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var first_loc = temp__5733__auto__;
var temp__5733__auto____$1 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(first_loc) : zprint.zutil.right_STAR_.call(null,first_loc));
if(cljs.core.truth_(temp__5733__auto____$1)){
var nloc = temp__5733__auto____$1;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the third non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zthird = (function zprint$zutil$zthird(zloc){
var G__27257 = zprint.zutil.zfirst(zloc);
var G__27257__$1 = (((G__27257 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__27257) : zprint.zutil.right_STAR_.call(null,G__27257)));
var G__27257__$2 = (((G__27257__$1 == null))?null:(zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__27257__$1) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__27257__$1)));
var G__27257__$3 = (((G__27257__$2 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__27257__$2) : zprint.zutil.right_STAR_.call(null,G__27257__$2)));
if((G__27257__$3 == null)){
return null;
} else {
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__27257__$3) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__27257__$3));
}
});
/**
 * Find the third non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zthird_no_comment = (function zprint$zutil$zthird_no_comment(zloc){
var G__27258 = zprint.zutil.zfirst_no_comment(zloc);
var G__27258__$1 = (((G__27258 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__27258) : zprint.zutil.right_STAR_.call(null,G__27258)));
var G__27258__$2 = (((G__27258__$1 == null))?null:(zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,G__27258__$1) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,G__27258__$1)));
var G__27258__$3 = (((G__27258__$2 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__27258__$2) : zprint.zutil.right_STAR_.call(null,G__27258__$2)));
if((G__27258__$3 == null)){
return null;
} else {
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,G__27258__$3) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,G__27258__$3));
}
});
/**
 * Find the fourth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zfourth = (function zprint$zutil$zfourth(zloc){
var G__27259 = zprint.zutil.zfirst(zloc);
var G__27259__$1 = (((G__27259 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__27259) : zprint.zutil.right_STAR_.call(null,G__27259)));
var G__27259__$2 = (((G__27259__$1 == null))?null:(zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__27259__$1) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__27259__$1)));
var G__27259__$3 = (((G__27259__$2 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__27259__$2) : zprint.zutil.right_STAR_.call(null,G__27259__$2)));
var G__27259__$4 = (((G__27259__$3 == null))?null:(zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__27259__$3) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__27259__$3)));
var G__27259__$5 = (((G__27259__$4 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__27259__$4) : zprint.zutil.right_STAR_.call(null,G__27259__$4)));
if((G__27259__$5 == null)){
return null;
} else {
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__27259__$5) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__27259__$5));
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc. Returns nil
 *   if nothing left.
 */
zprint.zutil.zrightnws = (function zprint$zutil$zrightnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5733__auto__ = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.right_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5733__auto__)){
var nloc = temp__5733__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc considering 
 *   newlines to not be whitespace. Returns nil if nothing left. Which is
 *   why this is nextnws and not rightnws, since it is exposed in zfns.
 */
zprint.zutil.znextnws_w_nl = (function zprint$zutil$znextnws_w_nl(zloc){
if(cljs.core.truth_(zloc)){
var temp__5733__auto__ = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.right_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5733__auto__)){
var nloc = temp__5733__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_not_newline_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_not_newline_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the rightmost non-whitespace zloc at this level
 */
zprint.zutil.zrightmost = (function zprint$zutil$zrightmost(zloc){
var nloc = zprint.zutil.zrightnws(zloc);
var ploc = zloc;
while(true){
if(cljs.core.not(nloc)){
return ploc;
} else {
var G__27446 = zprint.zutil.zrightnws(nloc);
var G__27447 = nloc;
nloc = G__27446;
ploc = G__27447;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zleftnws = (function zprint$zutil$zleftnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5733__auto__ = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.left_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5733__auto__)){
var nloc = temp__5733__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.left_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.left_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the leftmost non-whitespace zloc at this level
 */
zprint.zutil.zleftmost = (function zprint$zutil$zleftmost(zloc){
var nloc = zprint.zutil.zleftnws(zloc);
var ploc = zloc;
while(true){
if(cljs.core.not(nloc)){
return ploc;
} else {
var G__27448 = zprint.zutil.zleftnws(nloc);
var G__27449 = nloc;
nloc = G__27448;
ploc = G__27449;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc.
 */
zprint.zutil.zprevnws = (function zprint$zutil$zprevnws(zloc){
var temp__5733__auto__ = (zprint.zutil.prev_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.prev_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.prev_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5733__auto__)){
var ploc = temp__5733__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.prev_STAR_,zprint.zutil.whitespace_QMARK_,ploc) : zprint.zutil.skip.call(null,zprint.zutil.prev_STAR_,zprint.zutil.whitespace_QMARK_,ploc));
} else {
return null;
}
});
/**
 * Find the nth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.znthnext = (function zprint$zutil$znthnext(zloc,n){
var nloc = zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1((zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc)));
var i = n;
while(true){
if((((nloc == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0))))){
return nloc;
} else {
var G__27450 = zprint.zutil.zrightnws(nloc);
var G__27451 = (i - (1));
nloc = G__27450;
i = G__27451;
continue;
}
break;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.zutil.zfind = (function zprint$zutil$zfind(zthing_QMARK_,zloc){
var nloc = zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1((zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc)));
var i = (0);
while(true){
if((!((nloc == null)))){
if(cljs.core.truth_((zthing_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zthing_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zthing_QMARK_.call(null,nloc)))){
return i;
} else {
var G__27452 = zprint.zutil.zrightnws(nloc);
var G__27453 = (i + (1));
nloc = G__27452;
i = G__27453;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc, including newlines.
 */
zprint.zutil.zmap_w_nl = (function zprint$zutil$zmap_w_nl(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__27454 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__27455 = (function (){var temp__5733__auto__ = (((!(((zprint.zutil.whitespace_QMARK_(nloc)) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),new cljs.core.Keyword(null,"newline","newline",1790071323)))))))))?(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc)):null);
if(cljs.core.truth_(temp__5733__auto__)){
var result = temp__5733__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,result);
} else {
return out;
}
})();
nloc = G__27454;
out = G__27455;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc, including newlines and commas.
 */
zprint.zutil.zmap_w_nl_comma = (function zprint$zutil$zmap_w_nl_comma(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__27456 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__27457 = (function (){var temp__5733__auto__ = (((!(((zprint.zutil.whitespace_QMARK_(nloc)) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),new cljs.core.Keyword(null,"newline","newline",1790071323))))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),new cljs.core.Keyword(null,"comma","comma",1699024745)))))))))?(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc)):null);
if(cljs.core.truth_(temp__5733__auto__)){
var result = temp__5733__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,result);
} else {
return out;
}
})();
nloc = G__27456;
out = G__27457;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc.
 */
zprint.zutil.zmap = (function zprint$zutil$zmap(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__27458 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__27459 = (function (){var temp__5733__auto__ = (((!(zprint.zutil.whitespace_QMARK_(nloc))))?(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc)):null);
if(cljs.core.truth_(temp__5733__auto__)){
var result = temp__5733__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,result);
} else {
return out;
}
})();
nloc = G__27458;
out = G__27459;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every zloc inside of zloc.
 */
zprint.zutil.zmap_all = (function zprint$zutil$zmap_all(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__27462 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__27463 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc)));
nloc = G__27462;
out = G__27463;
continue;
}
break;
}
});
/**
 * Apply a function to every non-whitespace zloc to right of zloc.
 */
zprint.zutil.zmap_right = (function zprint$zutil$zmap_right(zfn,zloc){
var nloc = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.right_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__27464 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__27465 = ((zprint.zutil.whitespace_QMARK_(nloc))?out:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc))));
nloc = G__27464;
out = G__27465;
continue;
}
break;
}
});
/**
 * Return a seq of all of the non-whitespace children of zloc.
 */
zprint.zutil.zseqnws = (function zprint$zutil$zseqnws(zloc){
return zprint.zutil.zmap(cljs.core.identity,zloc);
});
/**
 * Return a seq of all of the non-whitespace children of zloc, including
 *   newlines.
 */
zprint.zutil.zseqnws_w_nl = (function zprint$zutil$zseqnws_w_nl(zloc){
return zprint.zutil.zmap_w_nl(cljs.core.identity,zloc);
});
/**
 * Remove everything to the right of the current zloc. In other words,
 *   make the current zloc the rightmost.
 */
zprint.zutil.zremove_right = (function zprint$zutil$zremove_right(zloc){
var nloc = zloc;
while(true){
if(cljs.core.truth_((zprint.zutil.rightmost_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.rightmost_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.rightmost_QMARK_.call(null,nloc)))){
return nloc;
} else {
var G__27466 = (function (){var G__27260 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
return (zprint.zutil.zremove.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.zremove.cljs$core$IFn$_invoke$arity$1(G__27260) : zprint.zutil.zremove.call(null,G__27260));
})();
nloc = G__27466;
continue;
}
break;
}
});
/**
 * Considering the current zloc a collection, move down into it and
 *   take n non-whitespace elements, dropping the rest.  Then append the
 *   given element to the end, coercing it into a node/zloc.  Note, this 
 *   is not quite implemented that way, as it uses replace.
 */
zprint.zutil.ztake_append = (function zprint$zutil$ztake_append(n,zloc,end_struct){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var index = (0);
while(true){
if((index >= n)){
var G__27261 = zprint.zutil.zremove_right((zprint.zutil.zreplace.cljs$core$IFn$_invoke$arity$2 ? zprint.zutil.zreplace.cljs$core$IFn$_invoke$arity$2(nloc,end_struct) : zprint.zutil.zreplace.call(null,nloc,end_struct)));
return (zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(G__27261) : zprint.zutil.up_STAR_.call(null,G__27261));
} else {
var xloc = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__27467 = xloc;
var G__27468 = ((zprint.zutil.whitespace_QMARK_(xloc))?index:(index + (1)));
nloc = G__27467;
index = G__27468;
continue;
}
break;
}
});
/**
 * How many non-whitespace children does zloc have?  Note that this will
 *   include comments.
 */
zprint.zutil.zcount = (function zprint$zutil$zcount(zloc){
return cljs.core.count(zprint.zutil.zseqnws(zloc));
});
/**
 * How many non-whitespace non-comment children are in zloc-seq? Note
 *   that this is fundamentally different from zcount, in that it doesn't
 *   take a zloc, but rather a zloc-seq (i.e., a seq of elements, each of
 *   which is a zloc).
 */
zprint.zutil.zcount_zloc_seq_nc_nws = (function zprint$zutil$zcount_zloc_seq_nc_nws(zloc_seq){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__27263_SHARP_,p2__27262_SHARP_){
if(cljs.core.truth_((zprint.zutil.whitespace_or_comment_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.whitespace_or_comment_QMARK_.cljs$core$IFn$_invoke$arity$1(p2__27262_SHARP_) : zprint.zutil.whitespace_or_comment_QMARK_.call(null,p2__27262_SHARP_)))){
return p1__27263_SHARP_;
} else {
return (p1__27263_SHARP_ + (1));
}
}),(0),zloc_seq);
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves include
 *   both whitespace and comments.
 */
zprint.zutil.find_root_and_path = (function zprint$zutil$find_root_and_path(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not((zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc)))){
if(cljs.core.not((zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__27469 = (zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc));
var G__27470 = (0);
var G__27471 = cljs.core.cons(left,out);
nloc = G__27469;
left = G__27470;
out = G__27471;
continue;
}
} else {
var G__27472 = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc));
var G__27473 = (left + (1));
var G__27474 = out;
nloc = G__27472;
left = G__27473;
out = G__27474;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves are
 *   non-whitespace, but include comments.
 */
zprint.zutil.find_root_and_path_nw = (function zprint$zutil$find_root_and_path_nw(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not((zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc)))){
if(cljs.core.not((zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__27475 = (zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc));
var G__27476 = (0);
var G__27477 = cljs.core.cons(left,out);
nloc = G__27475;
left = G__27476;
out = G__27477;
continue;
}
} else {
var G__27478 = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc));
var G__27479 = ((zprint.zutil.whitespace_QMARK_(nloc))?left:(left + (1)));
var G__27480 = out;
nloc = G__27478;
left = G__27479;
out = G__27480;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Find the root from a zloc by doing lots of ups.
 */
zprint.zutil.find_root = (function zprint$zutil$find_root(zloc){
var nloc = zloc;
while(true){
if(cljs.core.not((rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.up.call(null,nloc)))){
return nloc;
} else {
var G__27481 = (rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.up.call(null,nloc));
nloc = G__27481;
continue;
}
break;
}
});
/**
 * Move one down and then right a certain number of steps.
 */
zprint.zutil.move_down_and_right = (function zprint$zutil$move_down_and_right(zloc,right_count){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var remaining_right = right_count;
while(true){
if((remaining_right === (0))){
return nloc;
} else {
var G__27482 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__27483 = (remaining_right - (1));
nloc = G__27482;
remaining_right = G__27483;
continue;
}
break;
}
});
/**
 * Follow the path vector from the root and return the zloc
 *   at this location.
 */
zprint.zutil.follow_path = (function zprint$zutil$follow_path(path_vec,zloc){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(zprint.zutil.move_down_and_right,zloc,path_vec);
});
/**
 * Is this an anonymous fn?
 */
zprint.zutil.zanonfn_QMARK_ = (function zprint$zutil$zanonfn_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"fn","fn",-1175266204));
});
/**
 * Return the last non-whitespace (but possibly comment) element inside
 *   of this zloc.
 */
zprint.zutil.zlast = (function zprint$zutil$zlast(zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
if(cljs.core.truth_(nloc)){
return zprint.zutil.zrightmost(nloc);
} else {
return null;
}
});
/**
 * Returns true if this can be converted to an sexpr. Works around a bug
 *   where n/printable-only? returns false for n/tag :fn, but z/sexpr fails
 *   on something with n/tag :fn
 */
zprint.zutil.zsexpr_QMARK_ = (function zprint$zutil$zsexpr_QMARK_(zloc){
var and__4174__auto__ = zloc;
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),(zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)))) && (cljs.core.not((function (){var G__27265 = (rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.node.call(null,zloc));
return (rewrite_clj.node.printable_only_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.printable_only_QMARK_.cljs$core$IFn$_invoke$arity$1(G__27265) : rewrite_clj.node.printable_only_QMARK_.call(null,G__27265));
})())));
} else {
return and__4174__auto__;
}
});
/**
 * Returns true if this is a keyword.
 */
zprint.zutil.zkeyword_QMARK_ = (function zprint$zutil$zkeyword_QMARK_(zloc){
var and__4174__auto__ = zloc;
if(cljs.core.truth_(and__4174__auto__)){
return clojure.string.starts_with_QMARK_((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.string.call(null,zloc)),":");
} else {
return and__4174__auto__;
}
});
/**
 * Returns true if this is a symbol.
 */
zprint.zutil.zsymbol_QMARK_ = (function zprint$zutil$zsymbol_QMARK_(zloc){
var and__4174__auto__ = zloc;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = zprint.zutil.zsexpr_QMARK_(zloc);
if(cljs.core.truth_(and__4174__auto____$1)){
return ((zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.sexpr.call(null,zloc)) instanceof cljs.core.Symbol);
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
});
/**
 * Returns true if this is nil.
 */
zprint.zutil.znil_QMARK_ = (function zprint$zutil$znil_QMARK_(zloc){
var and__4174__auto__ = zloc;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = zprint.zutil.zsexpr_QMARK_(zloc);
if(cljs.core.truth_(and__4174__auto____$1)){
return ((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.sexpr.call(null,zloc)) == null);
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
});
/**
 * Returns true if this is a reader-conditional with a symbol in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_symbol_QMARK_ = (function zprint$zutil$zreader_cond_w_symbol_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_(zloc))?(function (){var element = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.string.call(null,element)),"?")){
var element__$1 = (function (){var G__27266 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.right.call(null,element));
return (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(G__27266) : rewrite_clj.zip.down.call(null,G__27266));
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":clj")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":cljs")))){
return zprint.zutil.zsymbol_QMARK_((rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.right.call(null,element__$1)));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Returns true if this is a reader-conditional with a collection in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_coll_QMARK_ = (function zprint$zutil$zreader_cond_w_coll_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_(zloc))?(function (){var element = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.string.call(null,element)),"?")){
var element__$1 = (function (){var G__27267 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.right.call(null,element));
return (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(G__27267) : rewrite_clj.zip.down.call(null,G__27267));
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":clj")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":cljs")))){
return zprint.zutil.z_coll_QMARK_((rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.right.call(null,element__$1)));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Return a zloc that will turn into a string of three dots.
 */
zprint.zutil.zdotdotdot = (function zprint$zutil$zdotdotdot(){
var G__27268 = rewrite_clj.parser.parse_string("...");
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__27268) : zprint.zutil.edn_STAR_.call(null,G__27268));
});
/**
 * Returns true if this is a keyword, string, or number, in other words,
 *   a constant.
 */
zprint.zutil.zconstant_QMARK_ = (function zprint$zutil$zconstant_QMARK_(zloc){
var ztag = (rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.tag.call(null,zloc));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztag,new cljs.core.Keyword(null,"unquote","unquote",1649741032))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztag,new cljs.core.Keyword(null,"quote","quote",-262615245))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztag,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847))))){
var G__27269 = zprint.zutil.zfirst(zloc);
return (zprint.zutil.zconstant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.zconstant_QMARK_.cljs$core$IFn$_invoke$arity$1(G__27269) : zprint.zutil.zconstant_QMARK_.call(null,G__27269));
} else {
if(cljs.core.not(zprint.zutil.z_coll_QMARK_(zloc))){
var or__4185__auto__ = zprint.zutil.zkeyword_QMARK_(zloc);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.truth_(zprint.zutil.zsexpr_QMARK_(zloc))){
var sexpr = (zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.sexpr.call(null,zloc));
return ((typeof sexpr === 'string') || (typeof sexpr === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexpr))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("false",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexpr))));
} else {
return null;
}
}
} else {
return false;
}
}
});
/**
 * Given a zloc zipper of a map, find the :doc element.
 */
zprint.zutil.find_doc_in_map = (function zprint$zutil$find_doc_in_map(zloc){
var nloc = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
while(true){
if(cljs.core.truth_(nloc)){
if(cljs.core.truth_((function (){var and__4174__auto__ = zprint.zutil.zkeyword_QMARK_(nloc);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.string.call(null,nloc)),":doc");
} else {
return and__4174__auto__;
}
})())){
if(typeof (function (){var G__27270 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
return (zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(G__27270) : zprint.zutil.sexpr.call(null,G__27270));
})() === 'string'){
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
} else {
return null;
}
} else {
var G__27484 = (function (){var G__27271 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__27271) : rewrite_clj.zip.right.call(null,G__27271));
})();
nloc = G__27484;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Find a docstring in a zipper of a function.
 */
zprint.zutil.find_docstring = (function zprint$zutil$find_docstring(zloc){
var fn_name = (function (){var G__27272 = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
return (rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(G__27272) : rewrite_clj.zip.string.call(null,G__27272));
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_name,"defn")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_name,"defmacro")))){
var docloc = (function (){var G__27273 = (function (){var G__27274 = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__27274) : rewrite_clj.zip.right.call(null,G__27274));
})();
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__27273) : rewrite_clj.zip.right.call(null,G__27273));
})();
if(typeof (zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(docloc) : zprint.zutil.sexpr.call(null,docloc)) === 'string'){
return docloc;
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_name,"def")){
var maploc = (function (){var G__27275 = (function (){var G__27276 = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__27276) : rewrite_clj.zip.right.call(null,G__27276));
})();
return (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(G__27275) : rewrite_clj.zip.down.call(null,G__27275));
})();
if(cljs.core.truth_((rewrite_clj.zip.map_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.map_QMARK_.cljs$core$IFn$_invoke$arity$1(maploc) : rewrite_clj.zip.map_QMARK_.call(null,maploc)))){
return zprint.zutil.find_doc_in_map(maploc);
} else {
return null;
}
} else {
return null;

}
}
});
/**
 * Given a zipper of a function definition, add the spec info to
 *   the docstring. Works for docstring with (def ...) functions, but
 *   the left-indent isn't optimal.  But to fix that, we'd have to do
 *   the zprinting here, where we know the indent of the existing
 *   docstring.
 */
zprint.zutil.add_spec_to_docstring = (function zprint$zutil$add_spec_to_docstring(zloc,spec_str){
var temp__5733__auto__ = zprint.zutil.find_docstring(zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var doc_zloc = temp__5733__auto__;
var new_doc_zloc = (function (){var G__27277 = doc_zloc;
var G__27278 = (function (){var G__27279 = (function (){var G__27280 = rewrite_clj.parser.parse_string(["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1((zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(doc_zloc) : zprint.zutil.sexpr.call(null,doc_zloc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_str),"\""].join(''));
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__27280) : zprint.zutil.edn_STAR_.call(null,G__27280));
})();
return (rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1(G__27279) : rewrite_clj.zip.node.call(null,G__27279));
})();
return (zprint.zutil.replace_STAR_.cljs$core$IFn$_invoke$arity$2 ? zprint.zutil.replace_STAR_.cljs$core$IFn$_invoke$arity$2(G__27277,G__27278) : zprint.zutil.replace_STAR_.call(null,G__27277,G__27278));
})();
var G__27281 = (rewrite_clj.zip.root.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.root.cljs$core$IFn$_invoke$arity$1(new_doc_zloc) : rewrite_clj.zip.root.call(null,new_doc_zloc));
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__27281) : zprint.zutil.edn_STAR_.call(null,G__27281));
} else {
return zloc;
}
});
/**
 * Perform a lift-ns on a pair-seq that is returned from
 *   partition-2-all-nc, which is a seq of pairs of zlocs that may or
 *   may not have been sorted and which may or may not have had things
 *   removed from it and may or may not actually be pairs.  Could be
 *   single things, could be multiple things.  If contains multiple
 *   things, the first thing is the key, but if it is just a single
 *   thing, the first thing is *not* a key. So we only need to work
 *   on the first of each seq which has more than one element in it,
 *   and possibly replace it. This will only lift out a ns if all keys
 *   in seqs with more than one element have the same namespace. Returns
 *   the [namespace pair-seq] or nil.
 */
zprint.zutil.zlift_ns = (function zprint$zutil$zlift_ns(p__27282,pair_seq,ns){
var map__27283 = p__27282;
var map__27283__$1 = (((((!((map__27283 == null))))?(((((map__27283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27283):map__27283);
var map_options = map__27283__$1;
var in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27283__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
var lift_ns_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27283__$1,new cljs.core.Keyword(null,"lift-ns?","lift-ns?",2021372853));
var lift_ns_in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27283__$1,new cljs.core.Keyword(null,"lift-ns-in-code?","lift-ns-in-code?",1444279377));
var unlift_ns_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27283__$1,new cljs.core.Keyword(null,"unlift-ns?","unlift-ns?",1065087867));
if(cljs.core.truth_((function (){var and__4174__auto__ = lift_ns_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
if(cljs.core.truth_(in_code_QMARK_)){
return lift_ns_in_code_QMARK_;
} else {
return true;
}
} else {
return and__4174__auto__;
}
})())){
if(cljs.core.truth_(ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,pair_seq], null);
} else {
var strip_ns = (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
}
});
var ns__$1 = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__27292 = cljs.core.first(pair_seq__$1);
var seq__27293 = cljs.core.seq(vec__27292);
var first__27294 = cljs.core.first(seq__27293);
var seq__27293__$1 = cljs.core.next(seq__27293);
var k = first__27294;
var rest_of_pair = seq__27293__$1;
var pair = vec__27292;
var current_ns = (cljs.core.truth_((function (){var and__4174__auto__ = rest_of_pair;
if(and__4174__auto__){
if((!(clojure.string.starts_with_QMARK_((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.string.call(null,k)),"::")))){
var or__4185__auto__ = zprint.zutil.zkeyword_QMARK_(k);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return zprint.zutil.zsymbol_QMARK_(k);
}
} else {
return false;
}
} else {
return and__4174__auto__;
}
})())?cljs.core.namespace((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k))):null);
if(cljs.core.not(k)){
if(cljs.core.truth_(ns__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1)].join(''),out], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(current_ns)){
if(cljs.core.truth_(ns__$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns__$1,current_ns)){
var G__27490 = ns__$1;
var G__27491 = cljs.core.next(pair_seq__$1);
var G__27492 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons((function (){var G__27295 = (function (){var G__27296 = strip_ns((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k)));
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(G__27296) : rewrite_clj.node.token_node.call(null,G__27296));
})();
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__27295) : zprint.zutil.edn_STAR_.call(null,G__27295));
})(),rest_of_pair));
ns__$1 = G__27490;
pair_seq__$1 = G__27491;
out = G__27492;
continue;
} else {
return null;
}
} else {
var G__27493 = current_ns;
var G__27494 = cljs.core.next(pair_seq__$1);
var G__27495 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons((function (){var G__27297 = (function (){var G__27298 = strip_ns((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k)));
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(G__27298) : rewrite_clj.node.token_node.call(null,G__27298));
})();
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__27297) : zprint.zutil.edn_STAR_.call(null,G__27297));
})(),rest_of_pair));
ns__$1 = G__27493;
pair_seq__$1 = G__27494;
out = G__27495;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(1))){
var G__27496 = ns__$1;
var G__27497 = cljs.core.next(pair_seq__$1);
var G__27498 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,pair);
ns__$1 = G__27496;
pair_seq__$1 = G__27497;
out = G__27498;
continue;
} else {
return null;
}
}
}
break;
}
}
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = ns;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = unlift_ns_QMARK_;
if(cljs.core.truth_(and__4174__auto____$1)){
return cljs.core.not(lift_ns_QMARK_);
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})())){
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__27304 = cljs.core.first(pair_seq__$1);
var seq__27305 = cljs.core.seq(vec__27304);
var first__27306 = cljs.core.first(seq__27305);
var seq__27305__$1 = cljs.core.next(seq__27305);
var k = first__27306;
var rest_of_pair = seq__27305__$1;
var pair = vec__27304;
var current_ns = (cljs.core.truth_((function (){var and__4174__auto__ = rest_of_pair;
if(and__4174__auto__){
if((!(clojure.string.starts_with_QMARK_((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.string.call(null,k)),"::")))){
var or__4185__auto__ = zprint.zutil.zkeyword_QMARK_(k);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return zprint.zutil.zsymbol_QMARK_(k);
}
} else {
return false;
}
} else {
return and__4174__auto__;
}
})())?cljs.core.namespace((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k))):null);
if(cljs.core.not(k)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,out], null);
} else {
if(cljs.core.truth_(current_ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,pair_seq__$1], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(1))){
var G__27502 = cljs.core.next(pair_seq__$1);
var G__27503 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,pair);
pair_seq__$1 = G__27502;
out = G__27503;
continue;
} else {
var G__27504 = cljs.core.next(pair_seq__$1);
var G__27505 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons((function (){var G__27307 = (function (){var G__27308 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k)))].join(''));
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(G__27308) : rewrite_clj.node.token_node.call(null,G__27308));
})();
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__27307) : zprint.zutil.edn_STAR_.call(null,G__27307));
})(),rest_of_pair));
pair_seq__$1 = G__27504;
out = G__27505;
continue;

}
}
}
break;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,pair_seq], null);

}
}
});
/**
 * Redefine all of the traversal functions for zippers, then
 *   call the function of no arguments passed in.
 */
zprint.zutil.zredef_call = (function zprint$zutil$zredef_call(body_fn){
var zstring_orig_val__27309 = zprint.zfns.zstring;
var znumstr_orig_val__27310 = zprint.zfns.znumstr;
var zbyte_array_QMARK__orig_val__27311 = zprint.zfns.zbyte_array_QMARK_;
var zcomment_QMARK__orig_val__27312 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__27313 = zprint.zfns.zsexpr;
var zseqnws_orig_val__27314 = zprint.zfns.zseqnws;
var zseqnws_w_nl_orig_val__27315 = zprint.zfns.zseqnws_w_nl;
var zmap_right_orig_val__27316 = zprint.zfns.zmap_right;
var zfocus_style_orig_val__27317 = zprint.zfns.zfocus_style;
var zstart_orig_val__27318 = zprint.zfns.zstart;
var zfirst_orig_val__27319 = zprint.zfns.zfirst;
var zfirst_no_comment_orig_val__27320 = zprint.zfns.zfirst_no_comment;
var zsecond_orig_val__27321 = zprint.zfns.zsecond;
var zsecond_no_comment_orig_val__27322 = zprint.zfns.zsecond_no_comment;
var zthird_orig_val__27323 = zprint.zfns.zthird;
var zthird_no_comment_orig_val__27324 = zprint.zfns.zthird_no_comment;
var zfourth_orig_val__27325 = zprint.zfns.zfourth;
var znextnws_orig_val__27326 = zprint.zfns.znextnws;
var znextnws_w_nl_orig_val__27327 = zprint.zfns.znextnws_w_nl;
var znthnext_orig_val__27328 = zprint.zfns.znthnext;
var zcount_orig_val__27329 = zprint.zfns.zcount;
var zcount_zloc_seq_nc_nws_orig_val__27330 = zprint.zfns.zcount_zloc_seq_nc_nws;
var zmap_orig_val__27331 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__27332 = zprint.zfns.zmap_w_nl;
var zmap_w_nl_comma_orig_val__27333 = zprint.zfns.zmap_w_nl_comma;
var zanonfn_QMARK__orig_val__27334 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__27335 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__27336 = zprint.zfns.zfocus;
var zfind_path_orig_val__27337 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__27338 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__27339 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__27340 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__27341 = zprint.zfns.zmap_QMARK_;
var znamespacedmap_QMARK__orig_val__27342 = zprint.zfns.znamespacedmap_QMARK_;
var zset_QMARK__orig_val__27343 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__27344 = zprint.zfns.zcoll_QMARK_;
var zuneval_QMARK__orig_val__27345 = zprint.zfns.zuneval_QMARK_;
var zmeta_QMARK__orig_val__27346 = zprint.zfns.zmeta_QMARK_;
var ztag_orig_val__27347 = zprint.zfns.ztag;
var zlast_orig_val__27348 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__27349 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__27350 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__27351 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__27352 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__27353 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__27354 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__27355 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__27356 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__27357 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__27358 = zprint.zfns.zmap_all;
var zpromise_QMARK__orig_val__27359 = zprint.zfns.zpromise_QMARK_;
var zfuture_QMARK__orig_val__27360 = zprint.zfns.zfuture_QMARK_;
var zdelay_QMARK__orig_val__27361 = zprint.zfns.zdelay_QMARK_;
var zkeyword_QMARK__orig_val__27362 = zprint.zfns.zkeyword_QMARK_;
var zconstant_QMARK__orig_val__27363 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__27364 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__27365 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__27366 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__27367 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__27368 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__27369 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__27370 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__27371 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__27372 = zprint.zfns.zlift_ns;
var zfind_orig_val__27373 = zprint.zfns.zfind;
var ztake_append_orig_val__27374 = zprint.zfns.ztake_append;
var zstring_temp_val__27375 = rewrite_clj.zip.string;
var znumstr_temp_val__27376 = zprint.zutil.znumstr;
var zbyte_array_QMARK__temp_val__27377 = cljs.core.constantly(false);
var zcomment_QMARK__temp_val__27378 = zprint.zutil.zcomment_QMARK_;
var zsexpr_temp_val__27379 = zprint.zutil.sexpr;
var zseqnws_temp_val__27380 = zprint.zutil.zseqnws;
var zseqnws_w_nl_temp_val__27381 = zprint.zutil.zseqnws_w_nl;
var zmap_right_temp_val__27382 = zprint.zutil.zmap_right;
var zfocus_style_temp_val__27383 = zprint.zutil.zfocus_style;
var zstart_temp_val__27384 = zprint.zutil.zstart;
var zfirst_temp_val__27385 = zprint.zutil.zfirst;
var zfirst_no_comment_temp_val__27386 = zprint.zutil.zfirst_no_comment;
var zsecond_temp_val__27387 = zprint.zutil.zsecond;
var zsecond_no_comment_temp_val__27388 = zprint.zutil.zsecond_no_comment;
var zthird_temp_val__27389 = zprint.zutil.zthird;
var zthird_no_comment_temp_val__27390 = zprint.zutil.zthird_no_comment;
var zfourth_temp_val__27391 = zprint.zutil.zfourth;
var znextnws_temp_val__27392 = zprint.zutil.zrightnws;
var znextnws_w_nl_temp_val__27393 = zprint.zutil.znextnws_w_nl;
var znthnext_temp_val__27394 = zprint.zutil.znthnext;
var zcount_temp_val__27395 = zprint.zutil.zcount;
var zcount_zloc_seq_nc_nws_temp_val__27396 = zprint.zutil.zcount_zloc_seq_nc_nws;
var zmap_temp_val__27397 = zprint.zutil.zmap;
var zmap_w_nl_temp_val__27398 = zprint.zutil.zmap_w_nl;
var zmap_w_nl_comma_temp_val__27399 = zprint.zutil.zmap_w_nl_comma;
var zanonfn_QMARK__temp_val__27400 = zprint.zutil.zanonfn_QMARK_;
var zfn_obj_QMARK__temp_val__27401 = cljs.core.constantly(false);
var zfocus_temp_val__27402 = zprint.zutil.zfocus;
var zfind_path_temp_val__27403 = zprint.zutil.find_root_and_path_nw;
var zwhitespace_QMARK__temp_val__27404 = zprint.zutil.whitespace_QMARK_;
var zlist_QMARK__temp_val__27405 = rewrite_clj.zip.list_QMARK_;
var zvector_QMARK__temp_val__27406 = rewrite_clj.zip.vector_QMARK_;
var zmap_QMARK__temp_val__27407 = rewrite_clj.zip.map_QMARK_;
var znamespacedmap_QMARK__temp_val__27408 = zprint.zutil.znamespacedmap_QMARK_;
var zset_QMARK__temp_val__27409 = rewrite_clj.zip.set_QMARK_;
var zcoll_QMARK__temp_val__27410 = zprint.zutil.z_coll_QMARK_;
var zuneval_QMARK__temp_val__27411 = zprint.zutil.zuneval_QMARK_;
var zmeta_QMARK__temp_val__27412 = zprint.zutil.zmeta_QMARK_;
var ztag_temp_val__27413 = zprint.zutil.ztag;
var zlast_temp_val__27414 = zprint.zutil.zlast;
var zarray_QMARK__temp_val__27415 = cljs.core.constantly(false);
var zatom_QMARK__temp_val__27416 = cljs.core.constantly(false);
var zderef_temp_val__27417 = cljs.core.constantly(false);
var zrecord_QMARK__temp_val__27418 = cljs.core.constantly(false);
var zns_QMARK__temp_val__27419 = cljs.core.constantly(false);
var zobj_to_vec_temp_val__27420 = cljs.core.constantly(null);
var zexpandarray_temp_val__27421 = cljs.core.constantly(null);
var znewline_QMARK__temp_val__27422 = zprint.zutil.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__temp_val__27423 = zprint.zutil.whitespace_or_comment_QMARK_;
var zmap_all_temp_val__27424 = zprint.zutil.zmap_all;
var zpromise_QMARK__temp_val__27425 = cljs.core.constantly(false);
var zfuture_QMARK__temp_val__27426 = cljs.core.constantly(false);
var zdelay_QMARK__temp_val__27427 = cljs.core.constantly(false);
var zkeyword_QMARK__temp_val__27428 = zprint.zutil.zkeyword_QMARK_;
var zconstant_QMARK__temp_val__27429 = zprint.zutil.zconstant_QMARK_;
var zagent_QMARK__temp_val__27430 = cljs.core.constantly(false);
var zreader_macro_QMARK__temp_val__27431 = zprint.zutil.zreader_macro_QMARK_;
var zarray_to_shift_seq_temp_val__27432 = cljs.core.constantly(null);
var zdotdotdot_temp_val__27433 = zprint.zutil.zdotdotdot;
var zsymbol_QMARK__temp_val__27434 = zprint.zutil.zsymbol_QMARK_;
var znil_QMARK__temp_val__27435 = zprint.zutil.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__27436 = zprint.zutil.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__temp_val__27437 = zprint.zutil.zreader_cond_w_coll_QMARK_;
var zlift_ns_temp_val__27438 = zprint.zutil.zlift_ns;
var zfind_temp_val__27439 = zprint.zutil.zfind;
var ztake_append_temp_val__27440 = zprint.zutil.ztake_append;
(zprint.zfns.zstring = zstring_temp_val__27375);

(zprint.zfns.znumstr = znumstr_temp_val__27376);

(zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__temp_val__27377);

(zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__27378);

(zprint.zfns.zsexpr = zsexpr_temp_val__27379);

(zprint.zfns.zseqnws = zseqnws_temp_val__27380);

(zprint.zfns.zseqnws_w_nl = zseqnws_w_nl_temp_val__27381);

(zprint.zfns.zmap_right = zmap_right_temp_val__27382);

(zprint.zfns.zfocus_style = zfocus_style_temp_val__27383);

(zprint.zfns.zstart = zstart_temp_val__27384);

(zprint.zfns.zfirst = zfirst_temp_val__27385);

(zprint.zfns.zfirst_no_comment = zfirst_no_comment_temp_val__27386);

(zprint.zfns.zsecond = zsecond_temp_val__27387);

(zprint.zfns.zsecond_no_comment = zsecond_no_comment_temp_val__27388);

(zprint.zfns.zthird = zthird_temp_val__27389);

(zprint.zfns.zthird_no_comment = zthird_no_comment_temp_val__27390);

(zprint.zfns.zfourth = zfourth_temp_val__27391);

(zprint.zfns.znextnws = znextnws_temp_val__27392);

(zprint.zfns.znextnws_w_nl = znextnws_w_nl_temp_val__27393);

(zprint.zfns.znthnext = znthnext_temp_val__27394);

(zprint.zfns.zcount = zcount_temp_val__27395);

(zprint.zfns.zcount_zloc_seq_nc_nws = zcount_zloc_seq_nc_nws_temp_val__27396);

(zprint.zfns.zmap = zmap_temp_val__27397);

(zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__27398);

(zprint.zfns.zmap_w_nl_comma = zmap_w_nl_comma_temp_val__27399);

(zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__27400);

(zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__27401);

(zprint.zfns.zfocus = zfocus_temp_val__27402);

(zprint.zfns.zfind_path = zfind_path_temp_val__27403);

(zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__27404);

(zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__27405);

(zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__27406);

(zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__27407);

(zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__temp_val__27408);

(zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__27409);

(zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__27410);

(zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__27411);

(zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__27412);

(zprint.zfns.ztag = ztag_temp_val__27413);

(zprint.zfns.zlast = zlast_temp_val__27414);

(zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__27415);

(zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__27416);

(zprint.zfns.zderef = zderef_temp_val__27417);

(zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__27418);

(zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__27419);

(zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__27420);

(zprint.zfns.zexpandarray = zexpandarray_temp_val__27421);

(zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__27422);

(zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__27423);

(zprint.zfns.zmap_all = zmap_all_temp_val__27424);

(zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__27425);

(zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__27426);

(zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__27427);

(zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__27428);

(zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__27429);

(zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__27430);

(zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__27431);

(zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__27432);

(zprint.zfns.zdotdotdot = zdotdotdot_temp_val__27433);

(zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__27434);

(zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__27435);

(zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__27436);

(zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__27437);

(zprint.zfns.zlift_ns = zlift_ns_temp_val__27438);

(zprint.zfns.zfind = zfind_temp_val__27439);

(zprint.zfns.ztake_append = ztake_append_temp_val__27440);

try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}finally {(zprint.zfns.ztake_append = ztake_append_orig_val__27374);

(zprint.zfns.zfind = zfind_orig_val__27373);

(zprint.zfns.zlift_ns = zlift_ns_orig_val__27372);

(zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__27371);

(zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__27370);

(zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__27369);

(zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__27368);

(zprint.zfns.zdotdotdot = zdotdotdot_orig_val__27367);

(zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__27366);

(zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__27365);

(zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__27364);

(zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__27363);

(zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__27362);

(zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__27361);

(zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__27360);

(zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__27359);

(zprint.zfns.zmap_all = zmap_all_orig_val__27358);

(zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__27357);

(zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__27356);

(zprint.zfns.zexpandarray = zexpandarray_orig_val__27355);

(zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__27354);

(zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__27353);

(zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__27352);

(zprint.zfns.zderef = zderef_orig_val__27351);

(zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__27350);

(zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__27349);

(zprint.zfns.zlast = zlast_orig_val__27348);

(zprint.zfns.ztag = ztag_orig_val__27347);

(zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__27346);

(zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__27345);

(zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__27344);

(zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__27343);

(zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__orig_val__27342);

(zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__27341);

(zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__27340);

(zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__27339);

(zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__27338);

(zprint.zfns.zfind_path = zfind_path_orig_val__27337);

(zprint.zfns.zfocus = zfocus_orig_val__27336);

(zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__27335);

(zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__27334);

(zprint.zfns.zmap_w_nl_comma = zmap_w_nl_comma_orig_val__27333);

(zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__27332);

(zprint.zfns.zmap = zmap_orig_val__27331);

(zprint.zfns.zcount_zloc_seq_nc_nws = zcount_zloc_seq_nc_nws_orig_val__27330);

(zprint.zfns.zcount = zcount_orig_val__27329);

(zprint.zfns.znthnext = znthnext_orig_val__27328);

(zprint.zfns.znextnws_w_nl = znextnws_w_nl_orig_val__27327);

(zprint.zfns.znextnws = znextnws_orig_val__27326);

(zprint.zfns.zfourth = zfourth_orig_val__27325);

(zprint.zfns.zthird_no_comment = zthird_no_comment_orig_val__27324);

(zprint.zfns.zthird = zthird_orig_val__27323);

(zprint.zfns.zsecond_no_comment = zsecond_no_comment_orig_val__27322);

(zprint.zfns.zsecond = zsecond_orig_val__27321);

(zprint.zfns.zfirst_no_comment = zfirst_no_comment_orig_val__27320);

(zprint.zfns.zfirst = zfirst_orig_val__27319);

(zprint.zfns.zstart = zstart_orig_val__27318);

(zprint.zfns.zfocus_style = zfocus_style_orig_val__27317);

(zprint.zfns.zmap_right = zmap_right_orig_val__27316);

(zprint.zfns.zseqnws_w_nl = zseqnws_w_nl_orig_val__27315);

(zprint.zfns.zseqnws = zseqnws_orig_val__27314);

(zprint.zfns.zsexpr = zsexpr_orig_val__27313);

(zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__27312);

(zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__orig_val__27311);

(zprint.zfns.znumstr = znumstr_orig_val__27310);

(zprint.zfns.zstring = zstring_orig_val__27309);
}});

//# sourceMappingURL=zprint.zutil.js.map
