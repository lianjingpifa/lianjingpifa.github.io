(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2627983a"],{2410:function(e,t,c){(function(t){var c=function(){"use strict";function e(e,t){return null!=t&&e instanceof t}var c,n,a;try{c=Map}catch(b){c=function(){}}try{n=Set}catch(b){n=function(){}}try{a=Promise}catch(b){a=function(){}}function l(r,o,s,i,b){"object"===typeof o&&(s=o.depth,i=o.prototype,b=o.includeNonEnumerable,o=o.circular);var j=[],u=[],O="undefined"!=typeof t;function d(r,s){if(null===r)return null;if(0===s)return r;var f,m;if("object"!=typeof r)return r;if(e(r,c))f=new c;else if(e(r,n))f=new n;else if(e(r,a))f=new a((function(e,t){r.then((function(t){e(d(t,s-1))}),(function(e){t(d(e,s-1))}))}));else if(l.__isArray(r))f=[];else if(l.__isRegExp(r))f=new RegExp(r.source,p(r)),r.lastIndex&&(f.lastIndex=r.lastIndex);else if(l.__isDate(r))f=new Date(r.getTime());else{if(O&&t.isBuffer(r))return f=t.allocUnsafe?t.allocUnsafe(r.length):new t(r.length),r.copy(f),f;e(r,Error)?f=Object.create(r):"undefined"==typeof i?(m=Object.getPrototypeOf(r),f=Object.create(m)):(f=Object.create(i),m=i)}if(o){var y=j.indexOf(r);if(-1!=y)return u[y];j.push(r),u.push(f)}for(var g in e(r,c)&&r.forEach((function(e,t){var c=d(t,s-1),n=d(e,s-1);f.set(c,n)})),e(r,n)&&r.forEach((function(e){var t=d(e,s-1);f.add(t)})),r){var v;m&&(v=Object.getOwnPropertyDescriptor(m,g)),v&&null==v.set||(f[g]=d(r[g],s-1))}if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(r);for(g=0;g<k.length;g++){var E=k[g],B=Object.getOwnPropertyDescriptor(r,E);(!B||B.enumerable||b)&&(f[E]=d(r[E],s-1),B.enumerable||Object.defineProperty(f,E,{enumerable:!1}))}}if(b){var h=Object.getOwnPropertyNames(r);for(g=0;g<h.length;g++){var N=h[g];B=Object.getOwnPropertyDescriptor(r,N);B&&B.enumerable||(f[N]=d(r[N],s-1),Object.defineProperty(f,N,{enumerable:!1}))}}return f}return"undefined"==typeof o&&(o=!0),"undefined"==typeof s&&(s=1/0),d(r,s)}function r(e){return Object.prototype.toString.call(e)}function o(e){return"object"===typeof e&&"[object Date]"===r(e)}function s(e){return"object"===typeof e&&"[object Array]"===r(e)}function i(e){return"object"===typeof e&&"[object RegExp]"===r(e)}function p(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),t}return l.clonePrototype=function(e){if(null===e)return null;var t=function(){};return t.prototype=e,new t},l.__objToStr=r,l.__isDate=o,l.__isArray=s,l.__isRegExp=i,l.__getRegExpFlags=p,l}();e.exports&&(e.exports=c)}).call(this,c("b639").Buffer)},"6a6a":function(e,t,c){},8339:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),a=c("2410"),l=c.n(a),r=c("4360");const o=e=>(Object(n["pushScopeId"])("data-v-38f32516"),e=e(),Object(n["popScopeId"])(),e),s={class:"print-wrapper"},i={id:"print-content",ref:"box"},p={key:0,class:"page"},b={class:"table-header"},j={class:"tc"},u={class:"header-msg"},O={class:"header-msg"},d={key:0},f={key:1},m=o(()=>Object(n["createElementVNode"])("span",{class:"ml-22"},"月",-1)),y=o(()=>Object(n["createElementVNode"])("span",{class:"ml-22"},"日",-1)),g={class:"table-right"},v=o(()=>Object(n["createElementVNode"])("span",null,"︵",-1)),k=o(()=>Object(n["createElementVNode"])("span",null,"︶",-1)),E=Object(n["createStaticVNode"])('<div class="thead" data-v-38f32516><div class="tr" data-v-38f32516><p class="index" data-v-38f32516>序号</p><p class="name" data-v-38f32516>名称</p><p class="standard" data-v-38f32516>规格</p><p class="unit" data-v-38f32516>单位</p><p class="count" data-v-38f32516>数量</p><p class="price" data-v-38f32516>单价</p><p class="subtotal" data-v-38f32516>小计</p><p class="remarks" data-v-38f32516>备注</p></div></div>',1),B={class:"tbody"},h={class:"index"},N={key:0,class:"name"},S={key:1,class:"name vi-red-text"},V={class:"standard"},D={class:"unit"},x={class:"count"},w={class:"price"},_={key:0},P={key:1},I={class:"subtotal"},F={key:0},M={key:1},$={class:"remarks"},R={class:"tfoot"},A={class:"tr flex-bc"},C={key:0},T={key:1},Y={class:"plr"},J={class:"line"},L={key:0,class:"num"},U=o(()=>Object(n["createElementVNode"])("div",{class:"no-print split-line"},null,-1));var z={__name:"content",props:{list:{type:Array,default(){return[]}},total:{type:String,default:"0.00"},data:{type:Object,default(){return{}}}},setup(e,{expose:t}){const c=e,a=Object(r["a"])(),o=parseInt(685/29);t({pageSize:o});const z=JSON.parse(sessionStorage.getItem("webConfig")||"{}"),q=Object(n["ref"])(z.print||{}),G=["①","②","③"],H=(new Date).format("YYYY 年 MM 月 DD 日"),K=Object(n["computed"])(()=>{const e={};a.dictMap.good.forEach(t=>{e[t.id]=t.index});const t=l()(c.list);return t.sort((t,c)=>{var n,a;const l=null===(n=t.label)||void 0===n?void 0:n.split(",")[0],r=null===(a=c.label)||void 0===a?void 0:a.split(",")[0];return e[l]-e[r]}),t}),Q=Object(n["computed"])(()=>Math.max(Math.ceil(K.value.length/o),1)),W=Object(n["computed"])(()=>{if(0==+c.total)return"";const e=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖","拾"],t=["佰","拾","万","仟","佰","拾","元","角","分"],n=t.reverse(),a=(+c.total).toFixed(2).split("").reverse().filter(e=>"."!==e);return a.map((t,c)=>`${e[t]}${n[c]}`).reverse().join("").replace(/(零[^元万])+/g,"零").replace(/零+/g,"零").replace(/零万零?/g,"万零").replace(/(?<=.)零元/g,"元").replace(/零$/g,"").replace(/元$/g,"元整")});function X(...e){return e.some(e=>null===e||void 0===e)}return(t,c)=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",s,[Object(n["createElementVNode"])("div",i,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(Q.value,t=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"table",key:t},[K.value.length?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",p,Object(n["toDisplayString"])(t)+" / "+Object(n["toDisplayString"])(Q.value),1)):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("div",b,[Object(n["createElementVNode"])("h2",j,Object(n["toDisplayString"])(q.value.title),1),Object(n["createElementVNode"])("div",u,[Object(n["createElementVNode"])("p",null,"地址："+Object(n["toDisplayString"])(q.value.address),1),Object(n["createElementVNode"])("p",null,"联系电话："+Object(n["toDisplayString"])(q.value.phone),1)]),Object(n["createElementVNode"])("div",O,[Object(n["createElementVNode"])("h3",null,"客户名称："+Object(n["toDisplayString"])(e.data.name||e.data.userName),1),K.value.length?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h3",d,Object(n["toDisplayString"])(Object(n["unref"])(H)),1)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("h3",f,[Object(n["createTextVNode"])("年"),m,y]))])]),Object(n["createElementVNode"])("p",g,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(q.value.tip,(e,t)=>(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:t},[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(G[t]),1),Object(n["createElementVNode"])("span",null," "+Object(n["toDisplayString"])(e[0].split("").join(" ")),1),v,Object(n["createTextVNode"])(Object(n["toDisplayString"])(e[1]),1),k],64))),128))]),E,Object(n["createElementVNode"])("div",B,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(K.value.slice((t-1)*Object(n["unref"])(o),t*Object(n["unref"])(o)),(e,c)=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"tr",key:`${t}_${c}`},[Object(n["createElementVNode"])("p",h,Object(n["toDisplayString"])((t-1)*Object(n["unref"])(o)+c+1),1),e.goodId?(Object(n["openBlock"])(),Object(n["createElementBlock"])("p",N,Object(n["toDisplayString"])(e.name),1)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("p",S,[Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.name),1)])),Object(n["createElementVNode"])("p",V,Object(n["toDisplayString"])(e.standard),1),Object(n["createElementVNode"])("p",D,Object(n["toDisplayString"])(e.unit),1),Object(n["createElementVNode"])("p",x,Object(n["toDisplayString"])(e.count),1),Object(n["createElementVNode"])("p",w,[X(e.price)?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",_)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",P,"￥"+Object(n["toDisplayString"])(e.price.toFixed(2)),1))]),Object(n["createElementVNode"])("p",I,[X(e.price,e.count)?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",F)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",M,"￥"+Object(n["toDisplayString"])((e.price*e.count).toFixed(2)),1))]),Object(n["createElementVNode"])("p",$,Object(n["toDisplayString"])(e.remarks),1)]))),128))]),Object(n["createElementVNode"])("div",R,[Object(n["createElementVNode"])("div",A,[t*Object(n["unref"])(o)>=K.value.length?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h3",C,"总计："+Object(n["toDisplayString"])(W.value),1)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("h3",T,"总计：")),Object(n["createElementVNode"])("h3",Y,[Object(n["createElementVNode"])("span",J,"￥"+Object(n["toDisplayString"])("_".repeat(15)),1),K.value.length&&t*Object(n["unref"])(o)>=K.value.length?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",L,Object(n["toDisplayString"])(e.total),1)):Object(n["createCommentVNode"])("",!0)])])]),U]))),128))],512)]))}},q=(c("a388"),c("6b0d")),G=c.n(q);const H=G()(z,[["__scopeId","data-v-38f32516"]]);t["default"]=H},a388:function(e,t,c){"use strict";c("6a6a")}}]);