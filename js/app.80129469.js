(function(t){function n(n){for(var a,i,s=n[0],u=n[1],c=n[2],f=0,p=[];f<s.length;f++)i=s[f],o[i]&&p.push(o[i][0]),o[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(n);while(p.length)p.shift()();return e.push.apply(e,c||[]),r()}function r(){for(var t,n=0;n<e.length;n++){for(var r=e[n],a=!0,s=1;s<r.length;s++){var u=r[s];0!==o[u]&&(a=!1)}a&&(e.splice(n--,1),t=i(i.s=r[0]))}return t}var a={},o={1:0},e=[];function i(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,n,r){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)i.d(r,a,function(n){return t[n]}.bind(null,a));return r},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var l=u;e.push([3,0]),r()})({"+5WQ":function(t,n,r){"use strict";var a=r("BCgF"),o=r.n(a);o.a},3:function(t,n,r){t.exports=r("Vtdi")},"5zCm":function(t,n,r){"use strict";var a=r("J+dp"),o=r.n(a);o.a},BCgF:function(t,n,r){},"J+dp":function(t,n,r){},Vtdi:function(t,n,r){"use strict";r.r(n);r("VRzm");var a=r("Kw5r"),o=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{attrs:{id:"app"}},[r("introduction"),r("fallingBricks")],1)},e=[],i=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div")},s=[],u={name:"introduction"},c=u,l=(r("+5WQ"),r("KHd+")),f=Object(l["a"])(c,i,s,!1,null,null,null),p=f.exports,d=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"falling-bricks"},[r("svg",{staticClass:"visual",attrs:{viewBox:"0 0 100 100"}},t._l(t.layers,function(n){return r("g",{key:n.id},t._l(n.sides,function(n,a){return r("g",{key:n.id},[r("g",{attrs:{transform:"rotate("+(60*a+n.rotation)+" 50 50)"}},t._l(n.polygons,function(t){return r("polygon",{key:t.id,attrs:{transform:"translate("+t.translation+")",points:t.points,fill:t.color}})}))])}))}))])},y=[],h=(r("xfY5"),r("rE2o"),r("ioFf"),r("rGqo"),r("aCrv"));function v(t){requestAnimationFrame(v),h.update(t)}requestAnimationFrame(v);var g=function(){var t=0;return function(){return t++}}(),x={name:"falling-bricks",data:function(){return{layers:[]}},methods:{CreateLayers:function(t){for(var n=0;n<t;n++)this.layers.push({id:g(),sides:[]})}},created:function(){this.CreateLayers(4);for(var t=0;t<6;t++)this.layers[0].sides.push(E(60)),this.layers[1].sides.push(b(180)),this.layers[2].sides.push(w(60)),this.layers[3].sides.push(m(60));var n=this,r={translation:20};new h.Tween(r).to({translation:0},2e3).easing(h.Easing.Quadratic.Out).onUpdate(function(){for(var t=0;t<6;t++)n.layers[0].sides[t].polygons.forEach(function(t){return t.translation=r.translation})}).delay(1e3).start();var a={rotation:60};new h.Tween(a).to({rotation:0},1e3).easing(h.Easing.Quadratic.Out).onUpdate(function(){n.layers[0].sides.forEach(function(t){return t.rotation=a.rotation})}).delay(1e3).start();var o={translation:40};new h.Tween(o).to({translation:0},1e3).easing(h.Easing.Quadratic.Out).onUpdate(function(){n.layers[1].sides.forEach(function(t){return t.polygons.forEach(function(t){return t.translation=o.translation})})}).start();var e={rotation:180};new h.Tween(e).to({rotation:0},3e3).easing(h.Easing.Quadratic.Out).onUpdate(function(){n.layers[1].sides.forEach(function(t){return t.rotation=e.rotation})}).start();var i={translation:30};new h.Tween(i).to({translation:10},1e3).easing(h.Easing.Quadratic.Out).onUpdate(function(){n.layers[2].sides.forEach(function(t){return t.polygons.forEach(function(t){return t.translation=i.translation})})}).start();var s={translation:10};new h.Tween(s).to({translation:30},1500).easing(h.Easing.Quadratic.Out).onUpdate(function(){n.layers[3].sides.forEach(function(t){return t.polygons.forEach(function(t){return t.translation=s.translation})})}).start()}};function m(t){var n=[],r=Math.sqrt(3);return n.push(O([{x:50+50*r,y:0},{x:50+30*r,y:50},{x:50+20*r,y:50}])),n.push(O([{x:50+50*r,y:100},{x:50+30*r,y:50},{x:50+20*r,y:50}])),{id:g(),polygons:n,rotation:t||0}}function w(t){var n=[],r=Math.sqrt(3);return n.push(O([{x:50+14*r,y:36},{x:50+14*r,y:64},{x:50+20*r,y:50}])),n.push(O([{x:50+50*r,y:100},{x:50+14*r,y:64},{x:50+20*r,y:50}])),n.push(O([{x:50+50*r,y:0},{x:50+14*r,y:36},{x:50+20*r,y:50}])),{id:g(),polygons:n,rotation:t||0}}function b(t){var n=[],r=Math.sqrt(3);return n.push(O([{x:50+10*r,y:60},{x:50+10*r,y:40},{x:50+14*r,y:36},{x:50+14*r,y:64}])),{id:g(),polygons:n,rotation:t||0}}function E(t){var n=[],r=Math.sqrt(3);return n.push(O([{x:50,y:50},{x:50+80*r,y:130},{x:50+80*r,y:-30}],20)),n.push(O([{x:50,y:50},{x:50+10*r,y:60},{x:50+10*r,y:40}],20)),{id:g(),polygons:n,rotation:t||0}}function O(t,n){var r={id:g(),points:_(t),color:U(),translation:n||0};return r}function _(t){var n="",r=!0,a=!1,o=void 0;try{for(var e,i=t[Symbol.iterator]();!(r=(e=i.next()).done);r=!0){var s=e.value;n+="".concat(s.x,",").concat(s.y," ")}}catch(t){a=!0,o=t}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}var M=50,j=128,k=128,C=200,T=30,Q=127,q=127,S=0;function U(){var t=(M+T*Math.random()).clamp(0,255),n=(j+Q*Math.random()).clamp(0,255),r=(k+q*Math.random()).clamp(0,255),a=(C+S*Math.random()).clamp(0,255);return"rgba(".concat(t,", ").concat(n,", ").concat(r,", ").concat(a,")")}Number.prototype.clamp=function(t,n){return Math.min(Math.max(this,t),n)};var P=x,B=(r("5zCm"),Object(l["a"])(P,d,y,!1,null,null,null)),F=B.exports,J={name:"app",components:{introduction:p,fallingBricks:F}},L=J,$=(r("ZL7j"),Object(l["a"])(L,o,e,!1,null,null,null)),z=$.exports,V=r("L2JU");a["a"].use(V["a"]);var A=new V["a"].Store({state:{},mutations:{},actions:{}});a["a"].config.productionTip=!1,new a["a"]({store:A,render:function(t){return t(z)}}).$mount("#app")},ZL7j:function(t,n,r){"use strict";var a=r("slcd"),o=r.n(a);o.a},slcd:function(t,n,r){}});
//# sourceMappingURL=app.80129469.js.map