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
var len__4789__auto___8645 = arguments.length;
var i__4790__auto___8646 = (0);
while(true){
if((i__4790__auto___8646 < len__4789__auto___8645)){
args__4795__auto__.push((arguments[i__4790__auto___8646]));

var G__8647 = (i__4790__auto___8646 + (1));
i__4790__auto___8646 = G__8647;
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
(chess.utils.zip.cljs$lang$applyTo = (function (seq8624){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8624));
}));

chess.utils.asset_path = (function chess$utils$asset_path(rec){
if(cljs.core.truth_(self.location.href.includes("localhost"))){
return rec;
} else {
return ["/chess-cljs",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rec)].join('');
}
});
chess.utils.screen_print = (function chess$utils$screen_print(var_args){
var args__4795__auto__ = [];
var len__4789__auto___8648 = arguments.length;
var i__4790__auto___8649 = (0);
while(true){
if((i__4790__auto___8649 < len__4789__auto___8648)){
args__4795__auto__.push((arguments[i__4790__auto___8649]));

var G__8650 = (i__4790__auto___8649 + (1));
i__4790__auto___8649 = G__8650;
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
(chess.utils.screen_print.cljs$lang$applyTo = (function (seq8625){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8625));
}));

chess.utils.maxf = (function chess$utils$maxf(f,xs){
var G__8629 = xs;
var vec__8630 = G__8629;
var seq__8631 = cljs.core.seq(vec__8630);
var first__8632 = cljs.core.first(seq__8631);
var seq__8631__$1 = cljs.core.next(seq__8631);
var head = first__8632;
var remaining = seq__8631__$1;
var cur_max = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(head) : f.call(null,head));
var cur_max_x = head;
var G__8629__$1 = G__8629;
var cur_max__$1 = cur_max;
var cur_max_x__$1 = cur_max_x;
while(true){
var vec__8639 = G__8629__$1;
var seq__8640 = cljs.core.seq(vec__8639);
var first__8641 = cljs.core.first(seq__8640);
var seq__8640__$1 = cljs.core.next(seq__8640);
var head__$1 = first__8641;
var remaining__$1 = seq__8640__$1;
var cur_max__$2 = cur_max__$1;
var cur_max_x__$2 = cur_max_x__$1;
var cur_val = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(head__$1) : f.call(null,head__$1));
var vec__8642 = (((cur_val > cur_max__$2))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_val,head__$1], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cur_val,cur_max__$2))?(((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() > 0.5))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_max__$2,cur_max_x__$2], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_val,head__$1], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_max__$2,cur_max_x__$2], null)
));
var maxv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8642,(0),null);
var maxx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8642,(1),null);
if(cljs.core.empty_QMARK_(remaining__$1)){
return maxx;
} else {
var G__8651 = remaining__$1;
var G__8652 = maxv;
var G__8653 = maxx;
G__8629__$1 = G__8651;
cur_max__$1 = G__8652;
cur_max_x__$1 = G__8653;
continue;
}
break;
}
});

//# sourceMappingURL=chess.utils.js.map