(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b68b452"],{"083a":function(e,t,a){"use strict";var o=a("0d51"),c=TypeError;e.exports=function(e,t){if(!delete e[t])throw c("Cannot delete property "+o(t)+" of "+o(e))}},"13d5":function(e,t,a){"use strict";var o=a("23e7"),c=a("d58f").left,n=a("a640"),r=a("2d00"),l=a("605d"),i=!l&&r>79&&r<83,u=i||!n("reduce");o({target:"Array",proto:!0,forced:u},{reduce:function(e){var t=arguments.length;return c(this,e,t,t>1?arguments[1]:void 0)}})},"1f38":function(e,t,a){"use strict";a("d9e2");var o=a("7a23"),c=a("eeb9"),n=a("2410"),r=a.n(n),l=a("4360"),i={__name:"addGoodModal",props:{modelValue:{type:Boolean,default:!1},detailData:{type:Object,default(){return{}}},showCount:{type:Boolean,default:!1}},emits:["update:modelValue","save","close"],setup(e,{emit:t}){const a=e,n=Object(l["a"])(),i=Object(o["computed"])(()=>n.dictMap),u=Object(o["inject"])("$Message",()=>{}),d=Object(o["ref"])({});async function s(e,t,o){if(t&&a.detailData.name!==d.value.name){const{data:e}=await Object(c["L"])({name:t})||{};if(e)return o(new Error("该商品名称已存在"))}o()}const b={name:[{required:!0,message:"请输入商品名称"},{validator:s,trigger:"blur"}]},f=Object(o["computed"])(()=>(a.detailData.goodId?"编辑":"新增")+"商品"),p=Object(o["computed"])({get(){return a.modelValue},set(e){t("update:modelValue",e),e||t("close")}}),O=Object(o["ref"])();Object(o["watch"])(()=>a.detailData,()=>{var e;null===(e=O.value)||void 0===e||e.resetFields(),d.value=r()(a.detailData)},{deep:!0});const j=Object(o["ref"])(!1);function m(){j.value=!0,O.value.validate(async e=>{if(!e)return u.error("数据校验不通过"),void(j.value=!1);try{const{_index:e,_rowKey:a,count:o,...n}=d.value,{data:r}=await Object(c["F"])(n)||{};r&&(u.success(f.value+"成功"),t("save",{...d.value}),O.value.resetFields(),p.value=!1)}catch(a){u.error("请求失败："+(a.message||a))}finally{j.value=!1}})}return(t,a)=>{const c=Object(o["resolveComponent"])("viInput"),n=Object(o["resolveComponent"])("FormItem"),r=Object(o["resolveComponent"])("viInputNumber"),l=Object(o["resolveComponent"])("Option"),u=Object(o["resolveComponent"])("viSelect"),s=Object(o["resolveComponent"])("Form"),v=Object(o["resolveComponent"])("Button"),h=Object(o["resolveComponent"])("viModal");return Object(o["openBlock"])(),Object(o["createBlock"])(h,{modelValue:p.value,"onUpdate:modelValue":a[8]||(a[8]=e=>p.value=e),title:f.value},{footer:Object(o["withCtx"])(()=>[Object(o["createVNode"])(v,{onClick:a[7]||(a[7]=e=>p.value=!1)},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("取消")]),_:1}),Object(o["createVNode"])(v,{type:"primary",onClick:m,loading:j.value},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("确定")]),_:1},8,["loading"])]),default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{ref_key:"formRef",ref:O,model:d.value,rules:b,"label-width":60,onKeydown:Object(o["withKeys"])(m,["enter"]),class:"vi-modal-content"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{label:"名称:",prop:"name"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{modelValue:d.value.name,"onUpdate:modelValue":a[0]||(a[0]=e=>d.value.name=e)},null,8,["modelValue"])]),_:1}),Object(o["createVNode"])(n,{label:"规格:",prop:"standard"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{modelValue:d.value.standard,"onUpdate:modelValue":a[1]||(a[1]=e=>d.value.standard=e)},null,8,["modelValue"])]),_:1}),Object(o["createVNode"])(n,{label:"单位:",prop:"unit"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{modelValue:d.value.unit,"onUpdate:modelValue":a[2]||(a[2]=e=>d.value.unit=e)},null,8,["modelValue"])]),_:1}),Object(o["createVNode"])(n,{label:"单价:",prop:"price"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r,{modelValue:d.value.price,"onUpdate:modelValue":a[3]||(a[3]=e=>d.value.price=e),min:0,step:.5},null,8,["modelValue"])]),_:1}),Object(o["createVNode"])(n,{label:"标签:",prop:"label"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(u,{modelValue:d.value.label,"onUpdate:modelValue":a[4]||(a[4]=e=>d.value.label=e),multiple:""},{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(i.value.good,(e,t)=>(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:t,value:e.id},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),Object(o["createVNode"])(n,{label:"仓库:",prop:"store"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(u,{modelValue:d.value.store,"onUpdate:modelValue":a[5]||(a[5]=e=>d.value.store=e),multiple:""},{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(i.value.store,(e,t)=>(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:t,value:e.id},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e.showCount?(Object(o["openBlock"])(),Object(o["createBlock"])(n,{key:0,label:"数量:",prop:"count"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r,{modelValue:d.value.count,"onUpdate:modelValue":a[6]||(a[6]=e=>d.value.count=e),integer:"",min:0},null,8,["modelValue"])]),_:1})):Object(o["createCommentVNode"])("",!0)]),_:1},8,["model","onKeydown"])]),_:1},8,["modelValue","title"])}}};const u=i;t["a"]=u},"218e":function(e,t,a){},2410:function(e,t,a){(function(t){var a=function(){"use strict";function e(e,t){return null!=t&&e instanceof t}var a,o,c;try{a=Map}catch(s){a=function(){}}try{o=Set}catch(s){o=function(){}}try{c=Promise}catch(s){c=function(){}}function n(r,l,i,u,s){"object"===typeof l&&(i=l.depth,u=l.prototype,s=l.includeNonEnumerable,l=l.circular);var b=[],f=[],p="undefined"!=typeof t;function O(r,i){if(null===r)return null;if(0===i)return r;var j,m;if("object"!=typeof r)return r;if(e(r,a))j=new a;else if(e(r,o))j=new o;else if(e(r,c))j=new c((function(e,t){r.then((function(t){e(O(t,i-1))}),(function(e){t(O(e,i-1))}))}));else if(n.__isArray(r))j=[];else if(n.__isRegExp(r))j=new RegExp(r.source,d(r)),r.lastIndex&&(j.lastIndex=r.lastIndex);else if(n.__isDate(r))j=new Date(r.getTime());else{if(p&&t.isBuffer(r))return j=t.allocUnsafe?t.allocUnsafe(r.length):new t(r.length),r.copy(j),j;e(r,Error)?j=Object.create(r):"undefined"==typeof u?(m=Object.getPrototypeOf(r),j=Object.create(m)):(j=Object.create(u),m=u)}if(l){var v=b.indexOf(r);if(-1!=v)return f[v];b.push(r),f.push(j)}for(var h in e(r,a)&&r.forEach((function(e,t){var a=O(t,i-1),o=O(e,i-1);j.set(a,o)})),e(r,o)&&r.forEach((function(e){var t=O(e,i-1);j.add(t)})),r){var g;m&&(g=Object.getOwnPropertyDescriptor(m,h)),g&&null==g.set||(j[h]=O(r[h],i-1))}if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(r);for(h=0;h<y.length;h++){var V=y[h],w=Object.getOwnPropertyDescriptor(r,V);(!w||w.enumerable||s)&&(j[V]=O(r[V],i-1),w.enumerable||Object.defineProperty(j,V,{enumerable:!1}))}}if(s){var C=Object.getOwnPropertyNames(r);for(h=0;h<C.length;h++){var k=C[h];w=Object.getOwnPropertyDescriptor(r,k);w&&w.enumerable||(j[k]=O(r[k],i-1),Object.defineProperty(j,k,{enumerable:!1}))}}return j}return"undefined"==typeof l&&(l=!0),"undefined"==typeof i&&(i=1/0),O(r,i)}function r(e){return Object.prototype.toString.call(e)}function l(e){return"object"===typeof e&&"[object Date]"===r(e)}function i(e){return"object"===typeof e&&"[object Array]"===r(e)}function u(e){return"object"===typeof e&&"[object RegExp]"===r(e)}function d(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),t}return n.clonePrototype=function(e){if(null===e)return null;var t=function(){};return t.prototype=e,new t},n.__objToStr=r,n.__isDate=l,n.__isArray=i,n.__isRegExp=u,n.__getRegExpFlags=d,n}();e.exports&&(e.exports=a)}).call(this,a("b639").Buffer)},"2e7e":function(e,t,a){"use strict";a.r(t);a("3c65"),a("13d5"),a("14d9");var o=a("7a23"),c=a("df7b"),n=a("b351"),r=a("eeb9"),l=a("2af9"),i=a("1f38"),u=a("4360"),d=a("6605");const s={class:"container"},b=["onClick"],f={class:"card-top"},p={class:"card-bottom"},O={class:"card-left"},j={class:"price"},m={key:0,class:"ml-5"},v={key:1,class:"standard"},h={class:"card-right"};var g={__name:"mobile",emits:["total"],setup(e,{emit:t}){const a=Object(u["a"])(),g=Object(o["computed"])(()=>a.dictMap),y=Object(d["d"])(),V=Object(o["inject"])("$Message",()=>{}),w=Object(o["inject"])("$Modal",()=>{}),C=[{name:"删除",type:"delete",color:"#f66161"},{name:"特价",type:"special",color:"#07c160"},{name:"修改",type:"change"}],k=Object(o["computed"])(()=>location.href.startsWith("https")||location.href.startsWith("http://localhost")),N=Object(o["ref"])();function x(){var e;null===(e=N.value)||void 0===e||e.reSearch()}const _=Object(o["ref"])(!1),B=Object(o["ref"])({sortBy:"updateTime",order:"DESC"}),E=Object(o["computed"])(()=>{const e=[{name:"修改时间倒序",sortBy:"updateTime",order:"DESC"},{name:"修改时间顺序",sortBy:"updateTime",order:"ASC"},{name:"价格倒序",sortBy:"price",order:"DESC"},{name:"价格顺序",sortBy:"price",order:"ASC"}];return e.map(e=>(B.value.sortBy==e.sortBy&&B.value.order==e.order&&(e.color="#2d8cf0"),e))});function S({sortBy:e,order:t}){B.value={sortBy:e,order:t},x()}const D=Object(o["ref"])(""),I=Object(o["ref"])(""),U=Object(o["ref"])(!1);function P(e){const t=["",...g.value.good.map(e=>e.id),"其他"];return Object(r["r"])({...e,name:I.value,label:t[D.value],...B.value})}function A({rows:e,total:a}){t("total",a);const o=JSON.parse(localStorage.getItem("order")||"[]"),c={};o.forEach(e=>c[e.goodId]=e.count),e.forEach(e=>{e.originPrice=e.price||0,e.originUnit=e.unit,e.originStandard=e.standard,e.count=c[e.goodId]||0})}function T(e,t){const a=JSON.parse(localStorage.getItem("order")||"[]"),o=a.findIndex(t=>t.goodId===e.goodId),c={...e,...-1===o?{}:a[o],count:t};t?-1===o?a.unshift(c):a.splice(o,1,c):-1!==o&&a.splice(o,1),localStorage.setItem("order",JSON.stringify(a)),window.$EventBus.$emit("badge",{mobileCashier:a.reduce((e,t)=>e+ +t.count,0)})}function F({goodId:e,name:t}){w.confirm({title:"删除商品",content:`是否确认删除${t}？`,onOk:async()=>{try{const{returnCode:t,data:a}=await Object(r["f"])({goodIds:""+e})||{};0===t&&a&&(V.success("删除成功"),x())}catch(t){V.error("删除失败："+(t.message||t))}}})}const M=Object(o["ref"])({}),R=Object(o["ref"])(!1);function $(e){M.value={...e},R.value=!0}function J(e,t=M.value){"change"===e?(M.value={...t},U.value=!0):"special"===e?y.push({name:"mobileSpecial",state:{params:{goodId:t.goodId,name:t.name}}}):"delete"===e&&F(t)}return Object(o["onActivated"])(()=>{x()}),(e,t)=>{const a=Object(o["resolveComponent"])("Icon"),r=Object(o["resolveComponent"])("van-search"),u=Object(o["resolveComponent"])("van-action-sheet"),d=Object(o["resolveComponent"])("viInputNumber");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[k.value?(Object(o["openBlock"])(),Object(o["createBlock"])(a,{key:0,type:"ios-qr-scanner",size:"28",onClick:t[0]||(t[0]=t=>e.$router.push("mobileEnter")),class:"vi-header-icon left"})):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(a,{type:"ios-add",size:"34",onClick:t[1]||(t[1]=e=>J("change",{})),class:"vi-header-icon right"}),Object(o["createVNode"])(r,{modelValue:I.value,"onUpdate:modelValue":t[3]||(t[3]=e=>I.value=e),shape:"round",placeholder:"请输入商品名称搜索","show-action":"",onClear:x,onSearch:x,class:"search-input"},{action:Object(o["withCtx"])(()=>[Object(o["createVNode"])(a,{type:"ios-repeat",size:"24",onClick:t[2]||(t[2]=e=>_.value=!0),class:"rotate"})]),_:1},8,["modelValue"]),Object(o["createVNode"])(u,{show:_.value,"onUpdate:show":t[4]||(t[4]=e=>_.value=e),title:"排序",actions:E.value,"cancel-text":"取消","close-on-click-action":"",onSelect:S},null,8,["show","actions"]),Object(o["createElementVNode"])("div",s,[Object(o["createVNode"])(Object(o["unref"])(c["a"]),{modelValue:D.value,"onUpdate:modelValue":t[5]||(t[5]=e=>D.value=e),onChange:x,class:"sidebar"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(Object(o["unref"])(n["a"]),{title:"全部"}),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(g.value.good,(e,t)=>(Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["unref"])(n["a"]),{key:t,title:e.name},null,8,["title"]))),128)),Object(o["createVNode"])(Object(o["unref"])(n["a"]),{title:"其他"})]),_:1},8,["modelValue"]),Object(o["createVNode"])(Object(o["unref"])(l["h"]),{ref_key:"listRef",ref:N,getData:P,onOnUpdate:A,class:"flex-1 h100"},{default:Object(o["withCtx"])(({item:e})=>[Object(o["createElementVNode"])("div",{class:"card",onClick:t=>$(e)},[Object(o["createElementVNode"])("p",f,Object(o["toDisplayString"])(e.name),1),Object(o["createElementVNode"])("div",p,[Object(o["createElementVNode"])("div",O,[Object(o["createElementVNode"])("span",j,"￥"+Object(o["toDisplayString"])(e.price&&e.price.toFixed(2)),1),e.unit?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",m,"/ "+Object(o["toDisplayString"])(e.unit),1)):Object(o["createCommentVNode"])("",!0),e.standard?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",v,Object(o["toDisplayString"])(e.standard),1)):Object(o["createCommentVNode"])("",!0)]),Object(o["createElementVNode"])("div",h,[Object(o["createVNode"])(d,{modelValue:e.count,"onUpdate:modelValue":t=>e.count=t,integer:"",min:0,onOnChange:t=>T(e,t),onClick:t[6]||(t[6]=Object(o["withModifiers"])(()=>{},["stop"]))},null,8,["modelValue","onUpdate:modelValue","onOnChange"])])])],8,b)]),_:1},512)]),Object(o["createVNode"])(Object(o["unref"])(i["a"]),{modelValue:U.value,"onUpdate:modelValue":t[7]||(t[7]=e=>U.value=e),detailData:M.value,onSave:x},null,8,["modelValue","detailData"]),Object(o["createVNode"])(u,{show:R.value,"onUpdate:show":t[8]||(t[8]=e=>R.value=e),title:M.value.name,actions:C,"cancel-text":"取消","close-on-click-action":"",onSelect:t[9]||(t[9]=e=>J(e.type))},null,8,["show","title"])])}}},y=(a("a878"),a("6b0d")),V=a.n(y);const w=V()(g,[["__scopeId","data-v-258adbd2"]]);t["default"]=w},"3c65":function(e,t,a){"use strict";var o=a("23e7"),c=a("7b0b"),n=a("07fa"),r=a("3a34"),l=a("083a"),i=a("3511"),u=1!==[].unshift(0),d=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},s=u||!d();o({target:"Array",proto:!0,arity:1,forced:s},{unshift:function(e){var t=c(this),a=n(t),o=arguments.length;if(o){i(a+o);var u=a;while(u--){var d=u+o;u in t?t[d]=t[u]:l(t,d)}for(var s=0;s<o;s++)t[s]=arguments[s]}return r(t,a+o)}})},"605d":function(e,t,a){"use strict";var o=a("da84"),c=a("c6b6");e.exports="process"===c(o.process)},a640:function(e,t,a){"use strict";var o=a("d039");e.exports=function(e,t){var a=[][e];return!!a&&o((function(){a.call(null,t||function(){return 1},1)}))}},a68d:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return s}));var o=a("7a23"),c=a("1fba"),n=a("e5f6"),r=a("450f");const[l,i]=Object(c["a"])("sidebar"),u=Symbol(l),d={modelValue:Object(n["c"])(0)};var s=Object(o["defineComponent"])({name:l,props:d,emits:["change","update:modelValue"],setup(e,{emit:t,slots:a}){const{linkChildren:c}=Object(r["useChildren"])(u),n=()=>+e.modelValue,l=e=>{e!==n()&&(t("update:modelValue",e),t("change",e))};return c({getActive:n,setActive:l}),()=>{var e;return Object(o["createVNode"])("div",{role:"tablist",class:i()},[null==(e=a.default)?void 0:e.call(a)])}}})},a878:function(e,t,a){"use strict";a("218e")},b351:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var o=a("23f9"),c=a("7a23"),n=a("1fba"),r=a("fa7c"),l=a("e5f6"),i=a("a68d"),u=a("450f"),d=a("4e5e"),s=a("8be7");const[b,f]=Object(n["a"])("sidebar-item"),p=Object(r["a"])({},d["b"],{dot:Boolean,title:String,badge:l["f"],disabled:Boolean,badgeProps:Object});var O=Object(c["defineComponent"])({name:b,props:p,emits:["click"],setup(e,{emit:t,slots:a}){const o=Object(d["c"])(),{parent:n,index:r}=Object(u["useParent"])(i["a"]);if(!n)return void 0;const l=()=>{e.disabled||(t("click",r.value),n.setActive(r.value),o())};return()=>{const{dot:t,badge:o,title:i,disabled:u}=e,d=r.value===n.getActive();return Object(c["createVNode"])("div",{role:"tab",class:f({select:d,disabled:u}),tabindex:u?void 0:0,"aria-selected":d,onClick:l},[Object(c["createVNode"])(s["a"],Object(c["mergeProps"])({dot:t,class:f("text"),content:o},e.badgeProps),{default:()=>[a.title?a.title():i]})])}}});const j=Object(o["a"])(O)},d58f:function(e,t,a){"use strict";var o=a("59ed"),c=a("7b0b"),n=a("44ad"),r=a("07fa"),l=TypeError,i=function(e){return function(t,a,i,u){o(a);var d=c(t),s=n(d),b=r(d),f=e?b-1:0,p=e?-1:1;if(i<2)while(1){if(f in s){u=s[f],f+=p;break}if(f+=p,e?f<0:b<=f)throw l("Reduce of empty array with no initial value")}for(;e?f>=0:b>f;f+=p)f in s&&(u=a(u,s[f],f,d));return u}};e.exports={left:i(!1),right:i(!0)}},df7b:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var o=a("23f9"),c=a("a68d");const n=Object(o["a"])(c["b"])}}]);