goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4487__auto__ = (((value == null))?null:value);
var m__4488__auto__ = (devtools.format._header[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4488__auto__.call(null,value));
} else {
var m__4485__auto__ = (devtools.format._header["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4485__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4487__auto__ = (((value == null))?null:value);
var m__4488__auto__ = (devtools.format._has_body[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4488__auto__.call(null,value));
} else {
var m__4485__auto__ = (devtools.format._has_body["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4485__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4487__auto__ = (((value == null))?null:value);
var m__4488__auto__ = (devtools.format._body[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4488__auto__.call(null,value));
} else {
var m__4485__auto__ = (devtools.format._body["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4485__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o27331 = temp__5733__auto__;
var temp__5733__auto____$1 = (o27331["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o27332 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o27332["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o27333 = temp__5733__auto____$2;
return (o27333["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o27334 = temp__5733__auto__;
var temp__5733__auto____$1 = (o27334["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o27335 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o27335["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o27336 = temp__5733__auto____$2;
return (o27336["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o27337 = temp__5733__auto__;
var temp__5733__auto____$1 = (o27337["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o27338 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o27338["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o27339 = temp__5733__auto____$2;
return (o27339["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o27340 = temp__5733__auto__;
var temp__5733__auto____$1 = (o27340["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o27341 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o27341["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o27342 = temp__5733__auto____$2;
return (o27342["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o27344 = temp__5733__auto__;
var temp__5733__auto____$1 = (o27344["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o27345 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o27345["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o27346 = temp__5733__auto____$2;
return (o27346["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o27350 = temp__5733__auto__;
var temp__5733__auto____$1 = (o27350["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o27351 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o27351["markup"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o27352 = temp__5733__auto____$2;
return (o27352["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5733__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o27353 = temp__5733__auto__;
var temp__5733__auto____$1 = (o27353["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o27354 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o27354["markup"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o27355 = temp__5733__auto____$2;
return (o27355["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4795__auto__ = [];
var len__4789__auto___27507 = arguments.length;
var i__4790__auto___27508 = (0);
while(true){
if((i__4790__auto___27508 < len__4789__auto___27507)){
args__4795__auto__.push((arguments[i__4790__auto___27508]));

var G__27512 = (i__4790__auto___27508 + (1));
i__4790__auto___27508 = G__27512;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq27356){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27356));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4795__auto__ = [];
var len__4789__auto___27516 = arguments.length;
var i__4790__auto___27517 = (0);
while(true){
if((i__4790__auto___27517 < len__4789__auto___27516)){
args__4795__auto__.push((arguments[i__4790__auto___27517]));

var G__27518 = (i__4790__auto___27517 + (1));
i__4790__auto___27517 = G__27518;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq27378){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27378));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4795__auto__ = [];
var len__4789__auto___27519 = arguments.length;
var i__4790__auto___27520 = (0);
while(true){
if((i__4790__auto___27520 < len__4789__auto___27519)){
args__4795__auto__.push((arguments[i__4790__auto___27520]));

var G__27521 = (i__4790__auto___27520 + (1));
i__4790__auto___27520 = G__27521;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq27379){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27379));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4795__auto__ = [];
var len__4789__auto___27522 = arguments.length;
var i__4790__auto___27523 = (0);
while(true){
if((i__4790__auto___27523 < len__4789__auto___27522)){
args__4795__auto__.push((arguments[i__4790__auto___27523]));

var G__27524 = (i__4790__auto___27523 + (1));
i__4790__auto___27523 = G__27524;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq27383){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27383));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4795__auto__ = [];
var len__4789__auto___27525 = arguments.length;
var i__4790__auto___27526 = (0);
while(true){
if((i__4790__auto___27526 < len__4789__auto___27525)){
args__4795__auto__.push((arguments[i__4790__auto___27526]));

var G__27527 = (i__4790__auto___27526 + (1));
i__4790__auto___27526 = G__27527;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq27392){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27392));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4795__auto__ = [];
var len__4789__auto___27528 = arguments.length;
var i__4790__auto___27529 = (0);
while(true){
if((i__4790__auto___27529 < len__4789__auto___27528)){
args__4795__auto__.push((arguments[i__4790__auto___27529]));

var G__27530 = (i__4790__auto___27529 + (1));
i__4790__auto___27529 = G__27530;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq27401){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27401));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4795__auto__ = [];
var len__4789__auto___27531 = arguments.length;
var i__4790__auto___27532 = (0);
while(true){
if((i__4790__auto___27532 < len__4789__auto___27531)){
args__4795__auto__.push((arguments[i__4790__auto___27532]));

var G__27533 = (i__4790__auto___27532 + (1));
i__4790__auto___27532 = G__27533;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq27410){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27410));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4795__auto__ = [];
var len__4789__auto___27534 = arguments.length;
var i__4790__auto___27535 = (0);
while(true){
if((i__4790__auto___27535 < len__4789__auto___27534)){
args__4795__auto__.push((arguments[i__4790__auto___27535]));

var G__27536 = (i__4790__auto___27535 + (1));
i__4790__auto___27535 = G__27536;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__27424){
var vec__27427 = p__27424;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27427,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__27418_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__27418_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq27419){
var G__27420 = cljs.core.first(seq27419);
var seq27419__$1 = cljs.core.next(seq27419);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27420,seq27419__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__27433 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__27434 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__27435 = (function (){var G__27436 = new cljs.core.Keyword(null,"li","li",723558921);
var G__27437 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__27438 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__27436,G__27437,G__27438) : devtools.format.make_template_fn.call(null,G__27436,G__27437,G__27438));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__27433,G__27434,G__27435) : devtools.format.make_template_fn.call(null,G__27433,G__27434,G__27435));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4795__auto__ = [];
var len__4789__auto___27538 = arguments.length;
var i__4790__auto___27539 = (0);
while(true){
if((i__4790__auto___27539 < len__4789__auto___27538)){
args__4795__auto__.push((arguments[i__4790__auto___27539]));

var G__27540 = (i__4790__auto___27539 + (1));
i__4790__auto___27539 = G__27540;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq27445){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27445));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4795__auto__ = [];
var len__4789__auto___27542 = arguments.length;
var i__4790__auto___27543 = (0);
while(true){
if((i__4790__auto___27543 < len__4789__auto___27542)){
args__4795__auto__.push((arguments[i__4790__auto___27543]));

var G__27544 = (i__4790__auto___27543 + (1));
i__4790__auto___27543 = G__27544;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq27460){
var G__27461 = cljs.core.first(seq27460);
var seq27460__$1 = cljs.core.next(seq27460);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27461,seq27460__$1);
}));


//# sourceMappingURL=devtools.format.js.map
