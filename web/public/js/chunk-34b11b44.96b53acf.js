(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34b11b44"],{"1f38":function(e,t,a){"use strict";a("d9e2");var o=a("7a23"),l=a("eeb9"),n=a("2410"),c=a.n(n),r=a("4360"),u={__name:"addGoodModal",props:{modelValue:{type:Boolean,default:!1},detailData:{type:Object,default(){return{}}},showCount:{type:Boolean,default:!1}},emits:["update:modelValue","save","close"],setup(e,{emit:t}){const a=e,n=Object(r["a"])(),u=Object(o["computed"])(()=>n.dictMap),i=Object(o["inject"])("$Message",()=>{}),d=Object(o["ref"])({});async function b(e,t,o){if(t&&a.detailData.name!==d.value.name){const{data:e}=await Object(l["M"])({name:t})||{};if(e)return o(new Error("该商品名称已存在"))}o()}const s={name:[{required:!0,message:"请输入商品名称"},{validator:b,trigger:"blur"}]},f=Object(o["computed"])(()=>(a.detailData.goodId?"编辑":"新增")+"商品"),p=Object(o["computed"])({get(){return a.modelValue},set(e){t("update:modelValue",e),e||t("close")}}),j=Object(o["ref"])();Object(o["watch"])(()=>a.detailData,()=>{var e;null===(e=j.value)||void 0===e||e.resetFields(),d.value=c()(a.detailData)},{deep:!0});const O=Object(o["ref"])(!1);function m(){O.value=!0,j.value.validate(async e=>{if(!e)return i.error("数据校验不通过"),void(O.value=!1);try{const{_index:e,_rowKey:a,count:o,...n}=d.value,{data:c}=await Object(l["G"])(n)||{};c&&(i.success(f.value+"成功"),t("save",{...d.value}),j.value.resetFields(),p.value=!1)}catch(a){i.error("请求失败："+(a.message||a))}finally{O.value=!1}})}return(t,a)=>{const l=Object(o["resolveComponent"])("viInput"),n=Object(o["resolveComponent"])("FormItem"),c=Object(o["resolveComponent"])("viInputNumber"),r=Object(o["resolveComponent"])("Option"),i=Object(o["resolveComponent"])("viSelect"),b=Object(o["resolveComponent"])("Form"),v=Object(o["resolveComponent"])("Button"),V=Object(o["resolveComponent"])("viModal");return Object(o["openBlock"])(),Object(o["createBlock"])(V,{modelValue:p.value,"onUpdate:modelValue":a[8]||(a[8]=e=>p.value=e),title:f.value},{footer:Object(o["withCtx"])(()=>[Object(o["createVNode"])(v,{onClick:a[7]||(a[7]=e=>p.value=!1)},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("取消")]),_:1}),Object(o["createVNode"])(v,{type:"primary",onClick:m,loading:O.value},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("确定")]),_:1},8,["loading"])]),default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(b,{ref_key:"formRef",ref:j,model:d.value,rules:s,"label-width":60,onKeydown:Object(o["withKeys"])(m,["enter"]),class:"vi-modal-content"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{label:"名称:",prop:"name"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,{modelValue:d.value.name,"onUpdate:modelValue":a[0]||(a[0]=e=>d.value.name=e)},null,8,["modelValue"])]),_:1}),Object(o["createVNode"])(n,{label:"规格:",prop:"standard"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,{modelValue:d.value.standard,"onUpdate:modelValue":a[1]||(a[1]=e=>d.value.standard=e)},null,8,["modelValue"])]),_:1}),Object(o["createVNode"])(n,{label:"单位:",prop:"unit"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,{modelValue:d.value.unit,"onUpdate:modelValue":a[2]||(a[2]=e=>d.value.unit=e)},null,8,["modelValue"])]),_:1}),Object(o["createVNode"])(n,{label:"单价:",prop:"price"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{modelValue:d.value.price,"onUpdate:modelValue":a[3]||(a[3]=e=>d.value.price=e),min:0,step:.5},null,8,["modelValue"])]),_:1}),Object(o["createVNode"])(n,{label:"标签:",prop:"label"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,{modelValue:d.value.label,"onUpdate:modelValue":a[4]||(a[4]=e=>d.value.label=e),multiple:""},{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(u.value.good,(e,t)=>(Object(o["openBlock"])(),Object(o["createBlock"])(r,{key:t,value:e.id},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),Object(o["createVNode"])(n,{label:"仓库:",prop:"store"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,{modelValue:d.value.store,"onUpdate:modelValue":a[5]||(a[5]=e=>d.value.store=e),multiple:""},{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(u.value.store,(e,t)=>(Object(o["openBlock"])(),Object(o["createBlock"])(r,{key:t,value:e.id},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e.showCount?(Object(o["openBlock"])(),Object(o["createBlock"])(n,{key:0,label:"数量:",prop:"count"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{modelValue:d.value.count,"onUpdate:modelValue":a[6]||(a[6]=e=>d.value.count=e),integer:"",min:0},null,8,["modelValue"])]),_:1})):Object(o["createCommentVNode"])("",!0)]),_:1},8,["model","onKeydown"])]),_:1},8,["modelValue","title"])}}};const i=u;t["a"]=i},2410:function(e,t,a){(function(t){var a=function(){"use strict";function e(e,t){return null!=t&&e instanceof t}var a,o,l;try{a=Map}catch(b){a=function(){}}try{o=Set}catch(b){o=function(){}}try{l=Promise}catch(b){l=function(){}}function n(c,r,u,i,b){"object"===typeof r&&(u=r.depth,i=r.prototype,b=r.includeNonEnumerable,r=r.circular);var s=[],f=[],p="undefined"!=typeof t;function j(c,u){if(null===c)return null;if(0===u)return c;var O,m;if("object"!=typeof c)return c;if(e(c,a))O=new a;else if(e(c,o))O=new o;else if(e(c,l))O=new l((function(e,t){c.then((function(t){e(j(t,u-1))}),(function(e){t(j(e,u-1))}))}));else if(n.__isArray(c))O=[];else if(n.__isRegExp(c))O=new RegExp(c.source,d(c)),c.lastIndex&&(O.lastIndex=c.lastIndex);else if(n.__isDate(c))O=new Date(c.getTime());else{if(p&&t.isBuffer(c))return O=t.allocUnsafe?t.allocUnsafe(c.length):new t(c.length),c.copy(O),O;e(c,Error)?O=Object.create(c):"undefined"==typeof i?(m=Object.getPrototypeOf(c),O=Object.create(m)):(O=Object.create(i),m=i)}if(r){var v=s.indexOf(c);if(-1!=v)return f[v];s.push(c),f.push(O)}for(var V in e(c,a)&&c.forEach((function(e,t){var a=j(t,u-1),o=j(e,u-1);O.set(a,o)})),e(c,o)&&c.forEach((function(e){var t=j(e,u-1);O.add(t)})),c){var y;m&&(y=Object.getOwnPropertyDescriptor(m,V)),y&&null==y.set||(O[V]=j(c[V],u-1))}if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(c);for(V=0;V<w.length;V++){var g=w[V],h=Object.getOwnPropertyDescriptor(c,g);(!h||h.enumerable||b)&&(O[g]=j(c[g],u-1),h.enumerable||Object.defineProperty(O,g,{enumerable:!1}))}}if(b){var _=Object.getOwnPropertyNames(c);for(V=0;V<_.length;V++){var x=_[V];h=Object.getOwnPropertyDescriptor(c,x);h&&h.enumerable||(O[x]=j(c[x],u-1),Object.defineProperty(O,x,{enumerable:!1}))}}return O}return"undefined"==typeof r&&(r=!0),"undefined"==typeof u&&(u=1/0),j(c,u)}function c(e){return Object.prototype.toString.call(e)}function r(e){return"object"===typeof e&&"[object Date]"===c(e)}function u(e){return"object"===typeof e&&"[object Array]"===c(e)}function i(e){return"object"===typeof e&&"[object RegExp]"===c(e)}function d(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),t}return n.clonePrototype=function(e){if(null===e)return null;var t=function(){};return t.prototype=e,new t},n.__objToStr=c,n.__isDate=r,n.__isArray=u,n.__isRegExp=i,n.__getRegExpFlags=d,n}();e.exports&&(e.exports=a)}).call(this,a("b639").Buffer)},"269b":function(e,t,a){"use strict";a.r(t);var o=a("7a23"),l=a("2af9"),n=a("1f38"),c=a("eeb9");const r={class:"plr"};var u={__name:"index",setup(e){const t=Object(o["inject"])("$Message",()=>{}),a=Object(o["ref"])(!1),u=Object(o["ref"])(!1),i=Object(o["ref"])({});async function d(e){try{a.value=!0;const{data:{code:o,msg:l,data:n}}=await Object(c["r"])(e)||{};1==o?i.value={name:n.goodsName,standard:n.standard,price:+n.price}:(i.value={},t.info(l+"\n免费接口查不到信息\n自己填吧")),u.value=!0}catch(o){t.error("获取商品信息失败："+(o.message||o))}finally{a.value=!1}}function b(e){i.value={...e},u.value=!0}const s=Object(o["ref"])();function f(){window.$EventBus.$emit("saveGood"),s.value.openScan()}return(e,t)=>{const c=Object(o["resolveComponent"])("Icon"),p=Object(o["resolveComponent"])("Spin");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r,[Object(o["createVNode"])(c,{type:"ios-add",size:"34",onClick:t[0]||(t[0]=e=>b()),class:"vi-header-icon right"}),Object(o["createVNode"])(p,{fix:"",show:a.value},null,8,["show"]),Object(o["createVNode"])(Object(o["unref"])(l["m"]),{ref_key:"scanRef",ref:s,"close-after-scan":"",onScan:d},null,512),Object(o["createVNode"])(Object(o["unref"])(n["a"]),{modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=e=>u.value=e),detailData:i.value,onSave:f},null,8,["modelValue","detailData"])])}}};const i=u;t["default"]=i}}]);