goog.provide('chess.utils');
goog.require('cljs.core');
chess.utils.nilmap = (function chess$utils$nilmap(x,f){
if((!((x == null)))){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
} else {
return null;
}
});
chess.utils.zip = (function chess$utils$zip(var_args){
var args__4795__auto__ = [];
var len__4789__auto___27294 = arguments.length;
var i__4790__auto___27295 = (0);
while(true){
if((i__4790__auto___27295 < len__4789__auto___27294)){
args__4795__auto__.push((arguments[i__4790__auto___27295]));

var G__27296 = (i__4790__auto___27295 + (1));
i__4790__auto___27295 = G__27296;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(chess.utils.zip.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core.cons(cljs.core.vector,seqs));
}));

(chess.utils.zip.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(chess.utils.zip.cljs$lang$applyTo = (function (seq27273){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27273));
}));

chess.utils.asset_path = (function chess$utils$asset_path(rec){
if(cljs.core.truth_(window.location.href.includes("localhost"))){
return rec;
} else {
return ["/chess-cljs",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rec)].join('');
}
});
chess.utils.screen_print = (function chess$utils$screen_print(var_args){
var args__4795__auto__ = [];
var len__4789__auto___27298 = arguments.length;
var i__4790__auto___27299 = (0);
while(true){
if((i__4790__auto___27299 < len__4789__auto___27298)){
args__4795__auto__.push((arguments[i__4790__auto___27299]));

var G__27300 = (i__4790__auto___27299 + (1));
i__4790__auto___27299 = G__27300;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return chess.utils.screen_print.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(chess.utils.screen_print.cljs$core$IFn$_invoke$arity$variadic = (function (stuff){
(document.getElementsByTagName("BODY")[(0)]).appendChild((function (){var el = document.createElement("p");
(el["innerHTML"] = stuff);

return el;
})());

return cljs.core.last(stuff);
}));

(chess.utils.screen_print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(chess.utils.screen_print.cljs$lang$applyTo = (function (seq27274){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27274));
}));

chess.utils.maxf = (function chess$utils$maxf(f,xs){
var G__27278 = xs;
var vec__27279 = G__27278;
var seq__27280 = cljs.core.seq(vec__27279);
var first__27281 = cljs.core.first(seq__27280);
var seq__27280__$1 = cljs.core.next(seq__27280);
var head = first__27281;
var remaining = seq__27280__$1;
var cur_max = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(head) : f.call(null,head));
var cur_max_x = head;
var G__27278__$1 = G__27278;
var cur_max__$1 = cur_max;
var cur_max_x__$1 = cur_max_x;
while(true){
var vec__27288 = G__27278__$1;
var seq__27289 = cljs.core.seq(vec__27288);
var first__27290 = cljs.core.first(seq__27289);
var seq__27289__$1 = cljs.core.next(seq__27289);
var head__$1 = first__27290;
var remaining__$1 = seq__27289__$1;
var cur_max__$2 = cur_max__$1;
var cur_max_x__$2 = cur_max_x__$1;
var cur_val = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(head__$1) : f.call(null,head__$1));
var vec__27291 = (((cur_val > cur_max__$2))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_val,head__$1], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cur_val,cur_max__$2))?(((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() > 0.5))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_max__$2,cur_max_x__$2], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_val,head__$1], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_max__$2,cur_max_x__$2], null)
));
var maxv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27291,(0),null);
var maxx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27291,(1),null);
if(cljs.core.empty_QMARK_(remaining__$1)){
return maxx;
} else {
var G__27303 = remaining__$1;
var G__27304 = maxv;
var G__27305 = maxx;
G__27278__$1 = G__27303;
cur_max__$1 = G__27304;
cur_max_x__$1 = G__27305;
continue;
}
break;
}
});

//# sourceMappingURL=chess.utils.js.map
