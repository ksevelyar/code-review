(function(e){function t(t){for(var a,o,c=t[0],i=t[1],l=t[2],d=0,f=[];d<c.length;d++)o=c[d],r[o]&&f.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},s=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/code-review/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0cfb":function(e,t,n){},"3b1d":function(e,t,n){"use strict";var a=n("ea4a"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container grid-xl",attrs:{id:"app"}},[n("div",{staticClass:"columns categories"},[e._l(e.categories,function(e){return n("CategoryCard",{key:e.id,attrs:{category:e}})}),e._m(0)],2)])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"column my-2 col-md-12 col-xs-12 col-lg-6 col-4"},[n("div",{staticClass:"add-new-category"},[n("div",{staticClass:"btn"},[n("a",{staticClass:"icon icon-plus"})])])])}],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"column my-2 col-md-12 col-xs-12 col-lg-6 col-4"},[n("div",{staticClass:"card category-card"},[n("div",{staticClass:"card-header"},[n("div",{staticClass:"card-title"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column col-2"},[n("span",{staticClass:"chip"},[n("figure",{staticClass:"avatar avatar-sm",attrs:{"data-initial":e.icon}}),e._v(e._s(e.category.score))])]),n("div",{staticClass:"column col-8 text-center"},[n("mark",[e._v(e._s(e.category.name))])]),e._m(0)])])]),n("div",{staticClass:"card-body"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column col-auto"},[n("div",{staticClass:"vertical-slider-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.category.score,expression:"category.score",modifiers:{number:!0}}],staticClass:"slider vertical-slider",attrs:{type:"range",step:"10",min:"0",max:"100"},domProps:{value:e.category.score},on:{__r:function(t){e.$set(e.category,"score",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])]),n("div",{staticClass:"column"},[e._l(e.category.statements,function(e){return n("CategoryStatement",{attrs:{statement:e}})}),e._m(1)],2)])])])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"column col-2"},[n("a",{staticClass:"float-right"},[n("i",{staticClass:"icon icon-delete"})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"add-new-statement"},[n("a",{staticClass:"icon icon-plus float-right"})])}],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"statement columns"},[n("div",{staticClass:"column"},[n("div",{staticClass:"statement__text"},[e._v(e._s(e.statement.name))])]),e._m(0)])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"column col-auto text-right"},[n("i",{staticClass:"icon icon-delete"})])}],u={name:"CategoryStatement",props:{statement:{type:Object,default:function(){return{name:"Statement"}}}}},d=u,f=(n("3b1d"),n("2877")),m=Object(f["a"])(d,i,l,!1,null,null,null),p=m.exports,v={components:{CategoryStatement:p},name:"CategoryCard",data:function(){return{icons:{0:"💀",100:"🤖"}}},props:{category:{type:Object,default:function(){return{name:"Hello World",statements:[],score:0}}}},computed:{icon:function(){return this.icons[this.category.score]||"💩"}}},g=v,y=(n("9c45"),Object(f["a"])(g,o,c,!1,null,null,null)),b=y.exports,C={name:"app",data:function(){return{categories:[{name:"Auto Tests",id:0,score:0,statements:[{name:"Test Driven Development"},{name:"Factories"}]},{name:"Static Analyzers",id:1,score:0,statements:[{name:"Rubocop"},{name:"ESLint"}]},{name:"Perfomance",id:2,score:0,statements:[{name:"Avoid n^2 algorithms"},{name:"Use greedy algorihms"}]},{name:"SOLID",id:3,score:0,statements:[{name:"Single responsibility"},{name:"Open/closed"},{name:"Liskov substitution"},{name:"Interface segregation"},{name:"Dependency inversion"}]}]}},components:{CategoryCard:b}},h=C,_=(n("cf25"),Object(f["a"])(h,r,s,!1,null,null,null)),w=_.exports,x=n("2f62");a["a"].use(x["a"]);var O=new x["a"].Store({state:{},mutations:{},actions:{}}),j=n("9483");Object(j["a"])("".concat("/code-review/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].config.productionTip=!1,new a["a"]({store:O,render:function(e){return e(w)}}).$mount("#app")},"9c45":function(e,t,n){"use strict";var a=n("aaaa"),r=n.n(a);r.a},aaaa:function(e,t,n){},cf25:function(e,t,n){"use strict";var a=n("0cfb"),r=n.n(a);r.a},ea4a:function(e,t,n){}});
//# sourceMappingURL=app.e963d3df.js.map