(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26b07c7a"],{"083a":function(e,t,o){"use strict";var a=o("0d51"),r=TypeError;e.exports=function(e,t){if(!delete e[t])throw r("Cannot delete property "+a(t)+" of "+a(e))}},"1f38":function(e,t,o){"use strict";var a=o("7a23");function r(e,t,o,r,n,c){const l=Object(a["resolveComponent"])("viInput"),i=Object(a["resolveComponent"])("FormItem"),s=Object(a["resolveComponent"])("viInputNumber"),d=Object(a["resolveComponent"])("Option"),u=Object(a["resolveComponent"])("Select"),b=Object(a["resolveComponent"])("Form"),p=Object(a["resolveComponent"])("Button"),m=Object(a["resolveComponent"])("Modal");return Object(a["openBlock"])(),Object(a["createBlock"])(m,{title:c.title,modelValue:c.showModal,"onUpdate:modelValue":t[8]||(t[8]=e=>c.showModal=e),width:400,"class-name":"vertical-center-modal"},{footer:Object(a["withCtx"])(()=>[Object(a["createVNode"])(p,{type:"text",onClick:t[7]||(t[7]=e=>c.showModal=!1)},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("取消")]),_:1}),Object(a["createVNode"])(p,{type:"primary",onClick:c.submit,loading:n.loading},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("确定")]),_:1},8,["onClick","loading"])]),default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(b,{ref:"form",model:n.formData,rules:n.rules,"label-width":60,onKeydown:Object(a["withKeys"])(c.submit,["enter"]),class:"plr"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(i,{label:"名称:",prop:"name"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(l,{modelValue:n.formData.name,"onUpdate:modelValue":t[0]||(t[0]=e=>n.formData.name=e)},null,8,["modelValue"])]),_:1}),Object(a["createVNode"])(i,{label:"规格:",prop:"standard"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(l,{modelValue:n.formData.standard,"onUpdate:modelValue":t[1]||(t[1]=e=>n.formData.standard=e)},null,8,["modelValue"])]),_:1}),Object(a["createVNode"])(i,{label:"单位:",prop:"unit"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(l,{modelValue:n.formData.unit,"onUpdate:modelValue":t[2]||(t[2]=e=>n.formData.unit=e)},null,8,["modelValue"])]),_:1}),Object(a["createVNode"])(i,{label:"单价:",prop:"price"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(s,{modelValue:n.formData.price,"onUpdate:modelValue":t[3]||(t[3]=e=>n.formData.price=e),min:0,step:.5},null,8,["modelValue"])]),_:1}),Object(a["createVNode"])(i,{label:"标签:",prop:"label"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(u,{modelValue:n.formData.label,"onUpdate:modelValue":t[4]||(t[4]=e=>n.formData.label=e),multiple:""},{default:Object(a["withCtx"])(()=>[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(n.dictMap.good,(e,t)=>(Object(a["openBlock"])(),Object(a["createBlock"])(d,{key:t,value:e.id},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),Object(a["createVNode"])(i,{label:"仓库:",prop:"store"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(u,{modelValue:n.formData.store,"onUpdate:modelValue":t[5]||(t[5]=e=>n.formData.store=e),multiple:""},{default:Object(a["withCtx"])(()=>[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(n.dictMap.store,(e,t)=>(Object(a["openBlock"])(),Object(a["createBlock"])(d,{key:t,value:e.id},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o.showCount?(Object(a["openBlock"])(),Object(a["createBlock"])(i,{key:0,label:"数量:",prop:"count"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(s,{modelValue:n.formData.count,"onUpdate:modelValue":t[6]||(t[6]=e=>n.formData.count=e),integer:"",min:0},null,8,["modelValue"])]),_:1})):Object(a["createCommentVNode"])("",!0)]),_:1},8,["model","rules","onKeydown"])]),_:1},8,["title","modelValue"])}o("d9e2");var n=o("eeb9"),c=o("2410"),l=o.n(c),i=o("4360");const s=Object(i["a"])();var d={name:"addGoodModal",props:{modelValue:{type:Boolean,default:!1},detailData:{type:Object,default(){return{}}},showCount:{type:Boolean,default:!1}},data(){const e=async(e,t,o)=>{if(t&&this.detailData.name!==this.formData.name){const{data:e}=await Object(n["I"])({name:t})||{};if(e)return o(new Error("该商品名称已存在"))}o()};return{dictMap:s.dictMap,formData:{},rules:{name:[{required:!0,message:"请输入商品名称"},{validator:e,trigger:"blur"}]},loading:!1}},computed:{title(){return(this.detailData.goodId?"编辑":"新增")+"商品"},showModal:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e),e||this.$emit("close")}}},watch:{detailData:{deep:!0,handler(){this.$refs.form.resetFields(),this.formData=l()(this.detailData)}}},methods:{submit(){this.loading=!0,this.$refs.form.validate(async e=>{if(!e)return this.$Message.error("数据校验不通过"),void(this.loading=!1);try{const{_index:e,_rowKey:t,count:o,...a}=this.formData,{data:r}=await Object(n["C"])(a)||{};r&&(this.$Message.success(this.title+"成功"),this.$emit("save",{...this.formData}),this.$refs.form.resetFields(),this.showModal=!1)}catch(t){this.$Message.error("请求失败："+(t.message||t))}finally{this.loading=!1}})}}},u=o("6b0d"),b=o.n(u);const p=b()(d,[["render",r]]);t["a"]=p},2410:function(e,t,o){(function(t){var o=function(){"use strict";function e(e,t){return null!=t&&e instanceof t}var o,a,r;try{o=Map}catch(u){o=function(){}}try{a=Set}catch(u){a=function(){}}try{r=Promise}catch(u){r=function(){}}function n(c,l,i,s,u){"object"===typeof l&&(i=l.depth,s=l.prototype,u=l.includeNonEnumerable,l=l.circular);var b=[],p=[],m="undefined"!=typeof t;function f(c,i){if(null===c)return null;if(0===i)return c;var h,O;if("object"!=typeof c)return c;if(e(c,o))h=new o;else if(e(c,a))h=new a;else if(e(c,r))h=new r((function(e,t){c.then((function(t){e(f(t,i-1))}),(function(e){t(f(e,i-1))}))}));else if(n.__isArray(c))h=[];else if(n.__isRegExp(c))h=new RegExp(c.source,d(c)),c.lastIndex&&(h.lastIndex=c.lastIndex);else if(n.__isDate(c))h=new Date(c.getTime());else{if(m&&t.isBuffer(c))return h=t.allocUnsafe?t.allocUnsafe(c.length):new t(c.length),c.copy(h),h;e(c,Error)?h=Object.create(c):"undefined"==typeof s?(O=Object.getPrototypeOf(c),h=Object.create(O)):(h=Object.create(s),O=s)}if(l){var j=b.indexOf(c);if(-1!=j)return p[j];b.push(c),p.push(h)}for(var g in e(c,o)&&c.forEach((function(e,t){var o=f(t,i-1),a=f(e,i-1);h.set(o,a)})),e(c,a)&&c.forEach((function(e){var t=f(e,i-1);h.add(t)})),c){var v;O&&(v=Object.getOwnPropertyDescriptor(O,g)),v&&null==v.set||(h[g]=f(c[g],i-1))}if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(c);for(g=0;g<y.length;g++){var V=y[g],w=Object.getOwnPropertyDescriptor(c,V);(!w||w.enumerable||u)&&(h[V]=f(c[V],i-1),w.enumerable||Object.defineProperty(h,V,{enumerable:!1}))}}if(u){var C=Object.getOwnPropertyNames(c);for(g=0;g<C.length;g++){var D=C[g];w=Object.getOwnPropertyDescriptor(c,D);w&&w.enumerable||(h[D]=f(c[D],i-1),Object.defineProperty(h,D,{enumerable:!1}))}}return h}return"undefined"==typeof l&&(l=!0),"undefined"==typeof i&&(i=1/0),f(c,i)}function c(e){return Object.prototype.toString.call(e)}function l(e){return"object"===typeof e&&"[object Date]"===c(e)}function i(e){return"object"===typeof e&&"[object Array]"===c(e)}function s(e){return"object"===typeof e&&"[object RegExp]"===c(e)}function d(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),t}return n.clonePrototype=function(e){if(null===e)return null;var t=function(){};return t.prototype=e,new t},n.__objToStr=c,n.__isDate=l,n.__isArray=i,n.__isRegExp=s,n.__getRegExpFlags=d,n}();e.exports&&(e.exports=o)}).call(this,o("b639").Buffer)},"3c65":function(e,t,o){"use strict";var a=o("23e7"),r=o("7b0b"),n=o("07fa"),c=o("3a34"),l=o("083a"),i=o("3511"),s=1!==[].unshift(0),d=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},u=s||!d();a({target:"Array",proto:!0,arity:1,forced:u},{unshift:function(e){var t=r(this),o=n(t),a=arguments.length;if(a){i(o+a);var s=o;while(s--){var d=s+a;s in t?t[d]=t[s]:l(t,d)}for(var u=0;u<a;u++)t[u]=arguments[u]}return c(t,o+a)}})},"4ed8":function(e,t,o){"use strict";o.r(t);o("14d9");var a=o("7a23");const r={class:"container"},n=["onClick"],c={class:"card-top"},l={class:"card-bottom"},i={class:"card-left"},s={class:"price"},d={key:0,class:"ml-5"},u={key:1,class:"standard"},b={class:"card-right"};function p(e,t,o,p,m,f){const h=Object(a["resolveComponent"])("Icon"),O=Object(a["resolveComponent"])("van-search"),j=Object(a["resolveComponent"])("van-action-sheet"),g=Object(a["resolveComponent"])("van-sidebar-item"),v=Object(a["resolveComponent"])("van-sidebar"),y=Object(a["resolveComponent"])("viInputNumber"),V=Object(a["resolveComponent"])("viListScroll"),w=Object(a["resolveComponent"])("add-good-modal");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",null,[f.showScan?(Object(a["openBlock"])(),Object(a["createBlock"])(h,{key:0,type:"ios-qr-scanner",size:"28",onClick:t[0]||(t[0]=t=>e.$router.push("mobileEnter")),class:"vi-header-icon left"})):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(h,{type:"ios-add",size:"34",onClick:t[1]||(t[1]=e=>f.onSelect("change",{})),class:"vi-header-icon right"}),Object(a["createVNode"])(O,{modelValue:m.keyword,"onUpdate:modelValue":t[3]||(t[3]=e=>m.keyword=e),shape:"round",placeholder:"请输入商品名称搜索","show-action":"",onClear:f.reSearch,onSearch:f.reSearch,class:"search-input"},{action:Object(a["withCtx"])(()=>[Object(a["createVNode"])(h,{type:"ios-repeat",size:"24",onClick:t[2]||(t[2]=e=>m.showSort=!0),class:"rotate"})]),_:1},8,["modelValue","onClear","onSearch"]),Object(a["createVNode"])(j,{show:m.showSort,"onUpdate:show":t[4]||(t[4]=e=>m.showSort=e),title:"排序",actions:f.sortActions,"cancel-text":"取消","close-on-click-action":"",onSelect:f.sortChange},null,8,["show","actions","onSelect"]),Object(a["createElementVNode"])("div",r,[Object(a["createVNode"])(v,{modelValue:m.label,"onUpdate:modelValue":t[5]||(t[5]=e=>m.label=e),onChange:f.reSearch,class:"sidebar"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(g,{title:"全部"}),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(m.dictMap.good,(e,t)=>(Object(a["openBlock"])(),Object(a["createBlock"])(g,{key:t,title:e.name},null,8,["title"]))),128)),Object(a["createVNode"])(g,{title:"其他"})]),_:1},8,["modelValue","onChange"]),Object(a["createVNode"])(V,{ref:"list",getData:f.getData,onOnUpdate:f.updateData,class:"flex-1 h100"},{default:Object(a["withCtx"])(({item:e})=>[Object(a["createElementVNode"])("div",{class:"card",onClick:t=>f.openPopup(e)},[Object(a["createElementVNode"])("p",c,Object(a["toDisplayString"])(e.name),1),Object(a["createElementVNode"])("div",l,[Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("span",s,"￥"+Object(a["toDisplayString"])(e.price&&e.price.toFixed(2)),1),e.unit?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",d,"/ "+Object(a["toDisplayString"])(e.unit),1)):Object(a["createCommentVNode"])("",!0),e.standard?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",u,Object(a["toDisplayString"])(e.standard),1)):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("div",b,[Object(a["createVNode"])(y,{modelValue:e.count,"onUpdate:modelValue":t=>e.count=t,integer:"",min:0,onOnChange:t=>f.changeCount(e,t),onClick:t[6]||(t[6]=Object(a["withModifiers"])(()=>{},["stop"]))},null,8,["modelValue","onUpdate:modelValue","onOnChange"])])])],8,n)]),_:1},8,["getData","onOnUpdate"])]),Object(a["createVNode"])(w,{modelValue:m.showGoodModal,"onUpdate:modelValue":t[7]||(t[7]=e=>m.showGoodModal=e),detailData:m.detailData,onSave:f.reSearch},null,8,["modelValue","detailData","onSave"]),Object(a["createVNode"])(j,{show:m.showPopup,"onUpdate:show":t[8]||(t[8]=e=>m.showPopup=e),title:m.detailData.name,actions:m.actions,"cancel-text":"取消","close-on-click-action":"",onSelect:t[9]||(t[9]=e=>f.onSelect(e.type))},null,8,["show","title","actions"])])}o("3c65"),o("13d5");var m=o("df7b"),f=o("b351"),h=o("eeb9"),O=o("2af9"),j=o("1f38"),g=o("4360");const v=Object(g["a"])();var y={name:"mobileGood",components:{[m["a"].name]:m["a"],[f["a"].name]:f["a"],viListScroll:O["g"],addGoodModal:j["a"]},data(){return{dictMap:v.dictMap,label:"",keyword:"",showGoodModal:!1,detailData:{},showPopup:!1,actions:[{name:"删除",type:"delete",color:"#f66161"},{name:"特价",type:"special",color:"#07c160"},{name:"修改",type:"change"}],showSort:!1,sortParams:{sortBy:"updateTime",order:"DESC"}}},computed:{showScan(){return location.href.startsWith("https")||location.href.startsWith("http://localhost")},sortActions(){const e=[{name:"修改时间倒序",sortBy:"updateTime",order:"DESC"},{name:"修改时间顺序",sortBy:"updateTime",order:"ASC"},{name:"价格倒序",sortBy:"price",order:"DESC"},{name:"价格顺序",sortBy:"price",order:"ASC"}];return e.map(e=>(this.sortParams.sortBy==e.sortBy&&this.sortParams.order==e.order&&(e.color="#2d8cf0"),e))}},methods:{sortChange({sortBy:e,order:t}){this.sortParams={sortBy:e,order:t},this.reSearch()},reSearch(){var e;null===(e=this.$refs.list)||void 0===e||e.reSearch()},getData(e){const t=["",...this.dictMap.good.map(e=>e.id),"其他"];return Object(h["q"])({...e,name:this.keyword,label:t[this.label],...this.sortParams})},updateData({rows:e,total:t}){this.$emit("total",t);const o=JSON.parse(sessionStorage.getItem("order")||"[]"),a={};o.forEach(e=>a[e.goodId]=e.count),e.forEach(e=>{e.originPrice=e.price||0,e.originUnit=e.unit,e.originStandard=e.standard,e.count=a[e.goodId]||0})},changeCount(e,t){const o=JSON.parse(sessionStorage.getItem("order")||"[]"),a=o.findIndex(t=>t.goodId===e.goodId),r={...e,...-1===a?{}:o[a],count:t};t?-1===a?o.unshift(r):o.splice(a,1,r):-1!==a&&o.splice(a,1),sessionStorage.setItem("order",JSON.stringify(o)),this.$EventBus.$emit("badge",{mobileCashier:o.reduce((e,t)=>e+ +t.count,0)})},deleteGood({goodId:e,name:t}){this.$Modal.confirm({title:"删除商品",content:`是否确认删除${t}？`,onOk:async()=>{try{const{returnCode:t,data:o}=await Object(h["e"])({goodIds:""+e})||{};0===t&&o&&(this.$Message.success("删除成功"),this.reSearch())}catch(t){this.$Message.error("删除失败："+(t.message||t))}}})},openPopup(e){this.detailData={...e},this.showPopup=!0},onSelect(e,t=this.detailData){"change"===e?(this.detailData={...t},this.showGoodModal=!0):"special"===e?this.$router.push({name:"mobileSpecial",state:{params:{goodId:t.goodId,name:t.name}}}):"delete"===e&&this.deleteGood(t)}},activated(){this.reSearch()}},V=(o("6d44"),o("6b0d")),w=o.n(V);const C=w()(y,[["render",p],["__scopeId","data-v-63715200"]]);t["default"]=C},"6d44":function(e,t,o){"use strict";o("e569")},a68d:function(e,t,o){"use strict";o.d(t,"a",(function(){return s})),o.d(t,"b",(function(){return u}));var a=o("7a23"),r=o("1fba"),n=o("e5f6"),c=o("450f");const[l,i]=Object(r["a"])("sidebar"),s=Symbol(l),d={modelValue:Object(n["c"])(0)};var u=Object(a["defineComponent"])({name:l,props:d,emits:["change","update:modelValue"],setup(e,{emit:t,slots:o}){const{linkChildren:r}=Object(c["useChildren"])(s),n=()=>+e.modelValue,l=e=>{e!==n()&&(t("update:modelValue",e),t("change",e))};return r({getActive:n,setActive:l}),()=>{var e;return Object(a["createVNode"])("div",{role:"tablist",class:i()},[null==(e=o.default)?void 0:e.call(o)])}}})},b351:function(e,t,o){"use strict";o.d(t,"a",(function(){return h}));var a=o("23f9"),r=o("7a23"),n=o("1fba"),c=o("fa7c"),l=o("e5f6"),i=o("a68d"),s=o("450f"),d=o("4e5e"),u=o("8be7");const[b,p]=Object(n["a"])("sidebar-item"),m=Object(c["a"])({},d["b"],{dot:Boolean,title:String,badge:l["f"],disabled:Boolean,badgeProps:Object});var f=Object(r["defineComponent"])({name:b,props:m,emits:["click"],setup(e,{emit:t,slots:o}){const a=Object(d["c"])(),{parent:n,index:c}=Object(s["useParent"])(i["a"]);if(!n)return void 0;const l=()=>{e.disabled||(t("click",c.value),n.setActive(c.value),a())};return()=>{const{dot:t,badge:a,title:i,disabled:s}=e,d=c.value===n.getActive();return Object(r["createVNode"])("div",{role:"tab",class:p({select:d,disabled:s}),tabindex:s?void 0:0,"aria-selected":d,onClick:l},[Object(r["createVNode"])(u["a"],Object(r["mergeProps"])({dot:t,class:p("text"),content:a},e.badgeProps),{default:()=>[o.title?o.title():i]})])}}});const h=Object(a["a"])(f)},df7b:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var a=o("23f9"),r=o("a68d");const n=Object(a["a"])(r["b"])},e569:function(e,t,o){}}]);