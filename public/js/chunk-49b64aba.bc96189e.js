(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49b64aba"],{2410:function(e,t,c){(function(t){var c=function(){"use strict";function e(e,t){return null!=t&&e instanceof t}var c,a,n;try{c=Map}catch(b){c=function(){}}try{a=Set}catch(b){a=function(){}}try{n=Promise}catch(b){n=function(){}}function l(r,o,s,i,b){"object"===typeof o&&(s=o.depth,i=o.prototype,b=o.includeNonEnumerable,o=o.circular);var u=[],d=[],j="undefined"!=typeof t;function O(r,s){if(null===r)return null;if(0===s)return r;var f,m;if("object"!=typeof r)return r;if(e(r,c))f=new c;else if(e(r,a))f=new a;else if(e(r,n))f=new n((function(e,t){r.then((function(t){e(O(t,s-1))}),(function(e){t(O(e,s-1))}))}));else if(l.__isArray(r))f=[];else if(l.__isRegExp(r))f=new RegExp(r.source,p(r)),r.lastIndex&&(f.lastIndex=r.lastIndex);else if(l.__isDate(r))f=new Date(r.getTime());else{if(j&&t.isBuffer(r))return f=t.allocUnsafe?t.allocUnsafe(r.length):new t(r.length),r.copy(f),f;e(r,Error)?f=Object.create(r):"undefined"==typeof i?(m=Object.getPrototypeOf(r),f=Object.create(m)):(f=Object.create(i),m=i)}if(o){var v=u.indexOf(r);if(-1!=v)return d[v];u.push(r),d.push(f)}for(var g in e(r,c)&&r.forEach((function(e,t){var c=O(t,s-1),a=O(e,s-1);f.set(c,a)})),e(r,a)&&r.forEach((function(e){var t=O(e,s-1);f.add(t)})),r){var y;m&&(y=Object.getOwnPropertyDescriptor(m,g)),y&&null==y.set||(f[g]=O(r[g],s-1))}if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(r);for(g=0;g<E.length;g++){var k=E[g],h=Object.getOwnPropertyDescriptor(r,k);(!h||h.enumerable||b)&&(f[k]=O(r[k],s-1),h.enumerable||Object.defineProperty(f,k,{enumerable:!1}))}}if(b){var N=Object.getOwnPropertyNames(r);for(g=0;g<N.length;g++){var B=N[g];h=Object.getOwnPropertyDescriptor(r,B);h&&h.enumerable||(f[B]=O(r[B],s-1),Object.defineProperty(f,B,{enumerable:!1}))}}return f}return"undefined"==typeof o&&(o=!0),"undefined"==typeof s&&(s=1/0),O(r,s)}function r(e){return Object.prototype.toString.call(e)}function o(e){return"object"===typeof e&&"[object Date]"===r(e)}function s(e){return"object"===typeof e&&"[object Array]"===r(e)}function i(e){return"object"===typeof e&&"[object RegExp]"===r(e)}function p(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),t}return l.clonePrototype=function(e){if(null===e)return null;var t=function(){};return t.prototype=e,new t},l.__objToStr=r,l.__isDate=o,l.__isArray=s,l.__isRegExp=i,l.__getRegExpFlags=p,l}();e.exports&&(e.exports=c)}).call(this,c("b639").Buffer)},8339:function(e,t,c){"use strict";c.r(t);var a=c("7a23"),n=c("2410"),l=c.n(n),r=c("4360");const o=e=>(Object(a["pushScopeId"])("data-v-4bada44e"),e=e(),Object(a["popScopeId"])(),e),s={class:"print-wrapper"},i={id:"print-content",ref:"box"},p={key:0,class:"page"},b={class:"table-header"},u={class:"tc"},d={class:"header-msg"},j={class:"header-msg"},O={key:0},f={key:1},m=o(()=>Object(a["createElementVNode"])("span",{class:"ml-22"},"月",-1)),v=o(()=>Object(a["createElementVNode"])("span",{class:"ml-22"},"日",-1)),g={class:"table-right"},y=o(()=>Object(a["createElementVNode"])("span",null,"︵",-1)),E=o(()=>Object(a["createElementVNode"])("span",null,"︶",-1)),k=Object(a["createStaticVNode"])('<div class="thead" data-v-4bada44e><div class="tr" data-v-4bada44e><p class="index" data-v-4bada44e>序号</p><p class="name" data-v-4bada44e>名称</p><p class="standard" data-v-4bada44e>规格</p><p class="unit" data-v-4bada44e>单位</p><p class="count" data-v-4bada44e>数量</p><p class="price" data-v-4bada44e>单价</p><p class="subtotal" data-v-4bada44e>小计</p><p class="remarks" data-v-4bada44e>备注</p></div></div>',1),h={class:"tbody"},N={class:"index"},B={class:"name"},V={class:"standard"},S={class:"unit"},D={class:"count"},x={class:"price"},w={key:0},_={key:1},P={class:"subtotal"},F={key:0},I={key:1},M={class:"remarks"},R={class:"tfoot"},A={class:"tr flex-bc"},C={key:0},T={key:1},Y={class:"plr"},$={class:"line"},J={key:0,class:"num"},L=o(()=>Object(a["createElementVNode"])("div",{class:"no-print split-line"},null,-1));var U={__name:"content",props:{list:{type:Array,default(){return[]}},total:{type:String,default:"0.00"},data:{type:Object,default(){return{}}}},setup(e,{expose:t}){const c=e,n=Object(r["a"])(),o=parseInt(375/29);t({pageSize:o});const U=JSON.parse(sessionStorage.getItem("webConfig")||"{}"),z=Object(a["ref"])(U.print||{}),q=["①","②","③"],G=(new Date).format("YYYY 年 MM 月 DD 日"),H=Object(a["computed"])(()=>{const e={};n.dictMap.good.forEach(t=>{e[t.id]=t.index});const t=l()(c.list);return t.sort((t,c)=>{var a,n;const l=null===(a=t.label)||void 0===a?void 0:a.split(",")[0],r=null===(n=c.label)||void 0===n?void 0:n.split(",")[0];return e[l]-e[r]}),t}),K=Object(a["computed"])(()=>(e,t)=>H.value[(e-1)*o+t-1]||{}),Q=Object(a["computed"])(()=>{if(0==+c.total)return"";const e=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖","拾"],t=["佰","拾","万","仟","佰","拾","元","角","分"],a=t.reverse(),n=(+c.total).toFixed(2).split("").reverse().filter(e=>"."!==e);return n.map((t,c)=>`${e[t]}${a[c]}`).reverse().join("").replace(/(零[^元万])+/g,"零").replace(/零+/g,"零").replace(/零万零?/g,"万零").replace(/(?<=.)零元/g,"元").replace(/零$/g,"").replace(/元$/g,"元整")});function W(...e){return e.some(e=>null===e||void 0===e)}return(t,c)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",s,[Object(a["createElementVNode"])("div",i,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(Math.max(Math.ceil(H.value.length/Object(a["unref"])(o)),1),t=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"table",key:t},[H.value.length?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",p,Object(a["toDisplayString"])(t)+" / "+Object(a["toDisplayString"])(Math.max(Math.ceil(H.value.length/Object(a["unref"])(o)),1)),1)):Object(a["createCommentVNode"])("",!0),Object(a["createElementVNode"])("div",b,[Object(a["createElementVNode"])("h2",u,Object(a["toDisplayString"])(z.value.title),1),Object(a["createElementVNode"])("div",d,[Object(a["createElementVNode"])("p",null,"地址："+Object(a["toDisplayString"])(z.value.address),1),Object(a["createElementVNode"])("p",null,"联系电话："+Object(a["toDisplayString"])(z.value.phone),1)]),Object(a["createElementVNode"])("div",j,[Object(a["createElementVNode"])("h3",null,"客户名称："+Object(a["toDisplayString"])(e.data.name||e.data.userName),1),H.value.length?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h3",O,Object(a["toDisplayString"])(Object(a["unref"])(G)),1)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("h3",f,[Object(a["createTextVNode"])("年"),m,v]))])]),Object(a["createElementVNode"])("p",g,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(z.value.tip,(e,t)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],{key:t},[Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(q[t]),1),Object(a["createElementVNode"])("span",null," "+Object(a["toDisplayString"])(e[0].split("").join(" ")),1),y,Object(a["createTextVNode"])(Object(a["toDisplayString"])(e[1]),1),E],64))),128))]),k,Object(a["createElementVNode"])("div",h,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(Object(a["unref"])(o),e=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"tr",key:e},[Object(a["createElementVNode"])("p",N,Object(a["toDisplayString"])((t-1)*Object(a["unref"])(o)+e),1),Object(a["createElementVNode"])("p",B,Object(a["toDisplayString"])(K.value(t,e).name),1),Object(a["createElementVNode"])("p",V,Object(a["toDisplayString"])(K.value(t,e).standard),1),Object(a["createElementVNode"])("p",S,Object(a["toDisplayString"])(K.value(t,e).unit),1),Object(a["createElementVNode"])("p",D,Object(a["toDisplayString"])(K.value(t,e).count),1),Object(a["createElementVNode"])("p",x,[W(K.value(t,e).price)?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",w)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",_,"￥"+Object(a["toDisplayString"])(K.value(t,e).price.toFixed(2)),1))]),Object(a["createElementVNode"])("p",P,[W(K.value(t,e).price,K.value(t,e).count)?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",F)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",I,"￥"+Object(a["toDisplayString"])((K.value(t,e).price*K.value(t,e).count).toFixed(2)),1))]),Object(a["createElementVNode"])("p",M,Object(a["toDisplayString"])(K.value(t,e).remarks),1)]))),128))]),Object(a["createElementVNode"])("div",R,[Object(a["createElementVNode"])("div",A,[t*Object(a["unref"])(o)>=H.value.length?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h3",C,"总计："+Object(a["toDisplayString"])(Q.value),1)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("h3",T,"总计：")),Object(a["createElementVNode"])("h3",Y,[Object(a["createElementVNode"])("span",$,"￥"+Object(a["toDisplayString"])("_".repeat(15)),1),H.value.length&&t*Object(a["unref"])(o)>=H.value.length?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",J,Object(a["toDisplayString"])(e.total),1)):Object(a["createCommentVNode"])("",!0)])])]),L]))),128))],512)]))}},z=(c("9238"),c("6b0d")),q=c.n(z);const G=q()(U,[["__scopeId","data-v-4bada44e"]]);t["default"]=G},9238:function(e,t,c){"use strict";c("f287")},f287:function(e,t,c){}}]);