goog.provide('app.core');
app.core.image_file_url = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
app.core.canvas_width = (640);
app.core.canvas_height = (640);
if((typeof app !== 'undefined') && (typeof app.core !== 'undefined') && (typeof app.core.app_state !== 'undefined')){
} else {
app.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"image","image",-58725096),null,new cljs.core.Keyword(null,"drag-start","drag-start",292353430),null,new cljs.core.Keyword(null,"image-pos","image-pos",2145770002),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"image-scale","image-scale",1188015597),(1),new cljs.core.Keyword(null,"image-rotation","image-rotation",397517612),(0)], null));
}
app.core.draw = (function app$core$draw(id){
var canvas = document.getElementById(id);
var ctx = canvas.getContext("2d");
var image = (new Image());
(image.onload = (function (_){
return ctx.drawImage(image,(0),(0),app.core.canvas_width,app.core.canvas_height);
}));

if(cljs.core.truth_(cljs.core.deref(app.core.image_file_url))){
return image.setAttribute("src",cljs.core.deref(app.core.image_file_url));
} else {
return console.error("No image file URL yet.");
}
});
app.core.deg_to_rad = (function app$core$deg_to_rad(degrees){
return (degrees * (Math.PI / (180)));
});
app.core.draw_image = (function app$core$draw_image(canvas,image,x,y,scale){
var ctx = canvas.getContext("2d");
var scaled_width = (image.width * scale);
var scaled_height = (image.height * scale);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["scale",scale," x",x," y",y," scaled-width",scaled_width," scaled-height",scaled_height], 0));

ctx.clearRect((0),(0),canvas.width,canvas.height);

return ctx.drawImage(image,x,y,scaled_width,scaled_height);
});
app.core.create_image = (function app$core$create_image(image_file,callback){
var image = document.createElement("img");
(image.onload = (function (_){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(image) : callback.call(null, image));
}));

if(cljs.core.truth_(cljs.core.deref(app.core.image_file_url))){
image.setAttribute("src",image_file);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"image","image",-58725096),image);
} else {
return console.error("No image file URL yet.");
}
});
app.core.convert_image = (function app$core$convert_image(image){
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
(canvas.width = image.width);

(canvas.height = image.height);

ctx.drawImage(image,(0),(0));

var data = ctx.getImageData((0),(0),canvas.width,canvas.height);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["data",data], 0));

var buf = data.data;
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["width",image.width,"height",image.height,"bytes per pixel",(3)], 0));
});
app.core.on_image_change = (function app$core$on_image_change(event){
var image_file = URL.createObjectURL(cljs.core.first(event.target.files));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["image-file",image_file], 0));

cljs.core.reset_BANG_(app.core.image_file_url,image_file);

return app.core.create_image(image_file,app.core.convert_image);
});
app.core.on_mouse_down = (function app$core$on_mouse_down(event){
var canvas = document.getElementById("canvas");
var rect = canvas.getBoundingClientRect();
var _ = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["clientX",event.clientX,"clientY",event.clientY,"left",rect.left,"top",rect.top,"width",rect.width,"height",rect.height], 0));
var x = (event.clientX - rect.left);
var y = (event.clientY - rect.top);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"drag-start","drag-start",292353430),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));
});
app.core.on_mouse_move = (function app$core$on_mouse_move(event){
var temp__5804__auto__ = new cljs.core.Keyword(null,"drag-start","drag-start",292353430).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.core.app_state));
if(cljs.core.truth_(temp__5804__auto__)){
var drag_start = temp__5804__auto__;
var canvas = document.getElementById("canvas");
var rect = canvas.getBoundingClientRect();
var x = (event.clientX - rect.left);
var y = (event.clientY - rect.top);
var dx = (x - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(drag_start));
var dy = (y - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(drag_start));
var _ = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dx",dx,"dy",dy,"x",x,"y",y,"drag-start",drag_start], 0));
var new_pos = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"image-pos","image-pos",2145770002).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.core.app_state))) + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"image-pos","image-pos",2145770002).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.core.app_state))) + dy)], null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new-pos",new_pos], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"image-pos","image-pos",2145770002),new_pos);

app.core.draw_image(canvas,new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.core.app_state)),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new_pos),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new_pos),0.1);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"drag-start","drag-start",292353430),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));
} else {
return null;
}
});
app.core.on_mouse_up = (function app$core$on_mouse_up(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"drag-start","drag-start",292353430),null);
});
app.core.app = (function app$core$app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hello from React and Shadow CLJS!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"id","id",-1388402092),"input",new cljs.core.Keyword(null,"multiple","multiple",1244445549),true,new cljs.core.Keyword(null,"accept","accept",1874130431),"image/*",new cljs.core.Keyword(null,"on-change","on-change",-732046149),app.core.on_image_change], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),"canvas",new cljs.core.Keyword(null,"width","width",-384071477),app.core.canvas_width,new cljs.core.Keyword(null,"height","height",1025178622),app.core.canvas_height,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),app.core.on_mouse_down,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),app.core.on_mouse_move,new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),app.core.on_mouse_up,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),app.core.on_mouse_up], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.core.draw_image(document.getElementById("canvas"),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.core.app_state)),(0),(0),0.1);
})], null),"Draw transformed image"], null)], null);
});
app.core.mount = (function app$core$mount(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.app], null),document.getElementById("app"));
});
app.core.init = (function app$core$init(){
return app.core.mount();
});

//# sourceMappingURL=app.core.js.map
