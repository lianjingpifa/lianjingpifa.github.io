(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fdcd1b7"],{"13d5":function(e,t,a){"use strict";var l=a("23e7"),o=a("d58f").left,n=a("a640"),c=a("2d00"),r=a("605d"),i=!r&&c>79&&c<83,u=i||!n("reduce");l({target:"Array",proto:!0,forced:u},{reduce:function(e){var t=arguments.length;return o(this,e,t,t>1?arguments[1]:void 0)}})},"1f38":function(e,t,a){"use strict";a("d9e2");var l=a("7a23"),o=a("2af9"),n=a("eeb9"),c=a("2410"),r=a.n(c),i=a("4360"),u={__name:"addGoodModal",props:{modelValue:{type:Boolean,default:!1},detailData:{type:Object,default(){return{}}},showCount:{type:Boolean,default:!1}},emits:["update:modelValue","save","close"],setup(e,{emit:t}){const a=e,c=Object(i["a"])(),u=Object(l["computed"])(()=>c.dictMap),d=Object(l["inject"])("$Message",()=>{}),s=Object(l["ref"])({});async function p(e,t,l){if(t&&a.detailData.name!==s.value.name){const{data:e}=await Object(n["P"])({name:t})||{};if(e)return l(new Error("该商品名称已存在"))}l()}const b={name:[{required:!0,message:"请输入商品名称"},{validator:p,trigger:"blur"}]},O=Object(l["computed"])(()=>(a.detailData.goodId?"编辑":"新增")+"商品"),m=Object(l["computed"])({get(){return a.modelValue},set(e){t("update:modelValue",e),e||t("close")}}),j=Object(l["ref"])();Object(l["watch"])(()=>a.detailData,()=>{var e;null===(e=j.value)||void 0===e||e.resetFields(),s.value=r()(a.detailData)},{deep:!0});const v=Object(l["ref"])(!1);function f(){v.value=!0,j.value.validate(async e=>{if(!e)return d.error("数据校验不通过"),void(v.value=!1);try{const{_index:e,_rowKey:a,count:l,...o}=s.value,{data:c}=await Object(n["H"])(o)||{};c&&(d.success(O.value+"成功"),t("save",{...s.value}),j.value.resetFields(),m.value=!1)}catch(a){d.error("请求失败："+(a.message||a))}finally{v.value=!1}})}return(t,a)=>{const n=Object(l["resolveComponent"])("viInput"),c=Object(l["resolveComponent"])("FormItem"),r=Object(l["resolveComponent"])("viInputNumber"),i=Object(l["resolveComponent"])("Option"),d=Object(l["resolveComponent"])("viSelect"),p=Object(l["resolveComponent"])("Form"),h=Object(l["resolveComponent"])("Button"),V=Object(l["resolveComponent"])("viModal");return Object(l["openBlock"])(),Object(l["createBlock"])(V,{modelValue:m.value,"onUpdate:modelValue":a[9]||(a[9]=e=>m.value=e),title:O.value},{footer:Object(l["withCtx"])(()=>[Object(l["createVNode"])(h,{onClick:a[8]||(a[8]=e=>m.value=!1)},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])("取消")]),_:1}),Object(l["createVNode"])(h,{type:"primary",onClick:f,loading:v.value},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])("确定")]),_:1},8,["loading"])]),default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(p,{ref_key:"formRef",ref:j,model:s.value,rules:b,"label-width":60,onKeydown:Object(l["withKeys"])(f,["enter"]),class:"vi-modal-content"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(c,{label:"名称:",prop:"name"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(n,{modelValue:s.value.name,"onUpdate:modelValue":a[0]||(a[0]=e=>s.value.name=e)},null,8,["modelValue"])]),_:1}),Object(l["createVNode"])(c,{label:"规格:",prop:"standard"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(n,{modelValue:s.value.standard,"onUpdate:modelValue":a[1]||(a[1]=e=>s.value.standard=e)},null,8,["modelValue"])]),_:1}),Object(l["createVNode"])(c,{label:"单位:",prop:"unit"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(n,{modelValue:s.value.unit,"onUpdate:modelValue":a[2]||(a[2]=e=>s.value.unit=e)},null,8,["modelValue"])]),_:1}),Object(l["createVNode"])(c,{label:"单价:",prop:"price"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(r,{modelValue:s.value.price,"onUpdate:modelValue":a[3]||(a[3]=e=>s.value.price=e),min:0,step:.5},null,8,["modelValue"])]),_:1}),Object(l["createVNode"])(c,{label:"标签:",prop:"label"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(d,{modelValue:s.value.label,"onUpdate:modelValue":a[4]||(a[4]=e=>s.value.label=e),multiple:""},{default:Object(l["withCtx"])(()=>[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(u.value.good,(e,t)=>(Object(l["openBlock"])(),Object(l["createBlock"])(i,{key:t,value:e.id},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),Object(l["createVNode"])(c,{label:"仓库:",prop:"store"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(d,{modelValue:s.value.store,"onUpdate:modelValue":a[5]||(a[5]=e=>s.value.store=e),multiple:""},{default:Object(l["withCtx"])(()=>[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(u.value.store,(e,t)=>(Object(l["openBlock"])(),Object(l["createBlock"])(i,{key:t,value:e.id},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),Object(l["createVNode"])(c,{label:"图片:",prop:"picture"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(Object(l["unref"])(o["s"]),{modelValue:s.value.picture,"onUpdate:modelValue":a[6]||(a[6]=e=>s.value.picture=e)},null,8,["modelValue"])]),_:1}),e.showCount?(Object(l["openBlock"])(),Object(l["createBlock"])(c,{key:0,label:"数量:",prop:"count"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(r,{modelValue:s.value.count,"onUpdate:modelValue":a[7]||(a[7]=e=>s.value.count=e),integer:"",min:0},null,8,["modelValue"])]),_:1})):Object(l["createCommentVNode"])("",!0)]),_:1},8,["model","onKeydown"])]),_:1},8,["modelValue","title"])}}};const d=u;t["a"]=d},2410:function(e,t,a){(function(t){var a=function(){"use strict";function e(e,t){return null!=t&&e instanceof t}var a,l,o;try{a=Map}catch(s){a=function(){}}try{l=Set}catch(s){l=function(){}}try{o=Promise}catch(s){o=function(){}}function n(c,r,i,u,s){"object"===typeof r&&(i=r.depth,u=r.prototype,s=r.includeNonEnumerable,r=r.circular);var p=[],b=[],O="undefined"!=typeof t;function m(c,i){if(null===c)return null;if(0===i)return c;var j,v;if("object"!=typeof c)return c;if(e(c,a))j=new a;else if(e(c,l))j=new l;else if(e(c,o))j=new o((function(e,t){c.then((function(t){e(m(t,i-1))}),(function(e){t(m(e,i-1))}))}));else if(n.__isArray(c))j=[];else if(n.__isRegExp(c))j=new RegExp(c.source,d(c)),c.lastIndex&&(j.lastIndex=c.lastIndex);else if(n.__isDate(c))j=new Date(c.getTime());else{if(O&&t.isBuffer(c))return j=t.allocUnsafe?t.allocUnsafe(c.length):new t(c.length),c.copy(j),j;e(c,Error)?j=Object.create(c):"undefined"==typeof u?(v=Object.getPrototypeOf(c),j=Object.create(v)):(j=Object.create(u),v=u)}if(r){var f=p.indexOf(c);if(-1!=f)return b[f];p.push(c),b.push(j)}for(var h in e(c,a)&&c.forEach((function(e,t){var a=m(t,i-1),l=m(e,i-1);j.set(a,l)})),e(c,l)&&c.forEach((function(e){var t=m(e,i-1);j.add(t)})),c){var V;v&&(V=Object.getOwnPropertyDescriptor(v,h)),V&&null==V.set||(j[h]=m(c[h],i-1))}if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(c);for(h=0;h<g.length;h++){var y=g[h],w=Object.getOwnPropertyDescriptor(c,y);(!w||w.enumerable||s)&&(j[y]=m(c[y],i-1),w.enumerable||Object.defineProperty(j,y,{enumerable:!1}))}}if(s){var N=Object.getOwnPropertyNames(c);for(h=0;h<N.length;h++){var x=N[h];w=Object.getOwnPropertyDescriptor(c,x);w&&w.enumerable||(j[x]=m(c[x],i-1),Object.defineProperty(j,x,{enumerable:!1}))}}return j}return"undefined"==typeof r&&(r=!0),"undefined"==typeof i&&(i=1/0),m(c,i)}function c(e){return Object.prototype.toString.call(e)}function r(e){return"object"===typeof e&&"[object Date]"===c(e)}function i(e){return"object"===typeof e&&"[object Array]"===c(e)}function u(e){return"object"===typeof e&&"[object RegExp]"===c(e)}function d(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),t}return n.clonePrototype=function(e){if(null===e)return null;var t=function(){};return t.prototype=e,new t},n.__objToStr=c,n.__isDate=r,n.__isArray=i,n.__isRegExp=u,n.__getRegExpFlags=d,n}();e.exports&&(e.exports=a)}).call(this,a("b639").Buffer)},2760:function(e,t,a){},"2f7b":function(e,t,a){"use strict";a("feca")},"605d":function(e,t,a){"use strict";var l=a("da84"),o=a("c6b6");e.exports="process"===o(l.process)},"9b2d":function(e,t,a){"use strict";a.r(t);var l=a("274c"),o=(a("13d5"),a("14d9"),a("7a23")),n=a("eec4"),c=a.n(n),r=a("eeb9"),i=a("2af9"),u=a("1f38");const d={class:"vi-modal-content smart-cashier"},s={class:"goodList"};var p={__name:"smartCashierModal",props:{modelValue:{type:Boolean,default:!1}},emits:["on-create"],setup(e,{emit:t}){const a=e,l=(Object(o["inject"])("$Message",()=>{}),Object(o["computed"])({get:()=>a.modelValue,set:e=>{t("update:modelValue",e)}})),n=Object(o["ref"])(""),c=Object(o["ref"])(!1),r="\n[名称] [数量] ([备注])\n例如：\n500可乐 30\n好滋味 30 1+1+1\n".trim();async function i(){}return(e,t)=>{const a=Object(o["resolveComponent"])("viInput"),u=Object(o["resolveComponent"])("viEmpty"),p=Object(o["resolveComponent"])("Button"),b=Object(o["resolveComponent"])("viModal");return Object(o["openBlock"])(),Object(o["createBlock"])(b,{modelValue:l.value,"onUpdate:modelValue":t[2]||(t[2]=e=>l.value=e),title:"智能录单",width:800},{footer:Object(o["withCtx"])(()=>[Object(o["createVNode"])(p,{onClick:t[1]||(t[1]=e=>l.value=!1)},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("取消")]),_:1}),Object(o["createVNode"])(p,{type:"primary",onClick:i,loading:c.value},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("生成订单")]),_:1},8,["loading"])]),default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",d,[Object(o["createVNode"])(a,{type:"textarea",modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),rows:30,placeholder:Object(o["unref"])(r)},null,8,["modelValue","placeholder"]),Object(o["createElementVNode"])("div",s,[Object(o["createVNode"])(u)])])]),_:1},8,["modelValue"])}}},b=(a("b550"),a("6b0d")),O=a.n(b);const m=O()(p,[["__scopeId","data-v-7608e45f"]]);var j=m,v=a("6605");const f=e=>(Object(o["pushScopeId"])("data-v-005a5034"),e=e(),Object(o["popScopeId"])(),e),h={class:"header"},V=f(()=>Object(o["createElementVNode"])("span",null,"订单编号：",-1)),g={key:0},y=f(()=>Object(o["createElementVNode"])("span",null,"客户名称：",-1)),w=f(()=>Object(o["createElementVNode"])("span",{class:"ml-15"},"没有？快速新增：",-1)),N={class:"good-box"},x={class:"flex-none"},C=f(()=>Object(o["createElementVNode"])("span",null,"商品名称：",-1)),k={class:"search-wrapper"},_={class:"no-data"},E={class:"search-box"},I={class:"search-msg"},B=["title"],S={key:0,class:"origin"},U={class:"ml-10"},D={class:"search-input"},T={class:"flex-bc"},P=["onClick"],M={class:"w60 flex-cc flex-1"},$=["onClick"],F={class:"page-footer"};var R={__name:"index",setup(e){const t=Object(o["inject"])("$Message",()=>{}),a=Object(o["inject"])("$Modal",()=>{}),n=[{title:"序号",type:"index",align:"center",width:60},{title:"名称",key:"name",align:"center",minWidth:120},{title:"规格",slot:"standard",align:"center",width:100},{title:"单位",slot:"unit",align:"center",width:80},{title:"数量",slot:"count",align:"center",width:90},{title:"单价",slot:"price",align:"center",minWidth:150},{title:"备注",slot:"remarks",align:"center",minWidth:100},{title:"操作",slot:"operate",align:"center",width:80}],d=Object(o["ref"])([]),s=Object(o["ref"])("0.00");Object(o["watch"])(()=>d.value,e=>{s.value=(e.reduce((e,t)=>e+ +(t.count*t.price).toFixed(2),0)||0).toFixed(2)},{deep:!0});const p=Object(o["ref"])(""),b=Object(o["ref"])({});async function O(e="",a){try{if(p.value=e,!e)return void(b.value={});b.value={...a};const{returnCode:t,data:l}=await Object(r["w"])({userId:e})||{};if(0===t){const e={};l.forEach(t=>{e[t.goodId]=+t.specialPrice}),b.value={...a,special:e},d.value=d.value.map(t=>(t.unit===t.originUnit&&t.standard===t.originStandard?t.price=e[t.goodId]||t.originPrice:t.price=t.originPrice,t))}}catch(l){t.error("获取客户特价失败："+(l.message||l))}}const m=Object(o["ref"])(""),f=Object(o["ref"])({}),R=Object(o["ref"])();function K(e){const t=b.value.special||{};return{...e,price:t[e.goodId]||e.price||0,originPrice:e.price||0,unit:e.unit||"",originUnit:e.unit||"",standard:e.standard||"",originStandard:e.standard||""}}function A(e,t){if(m.value=e,e){const e=K(t);f.value={...e,count:1}}else f.value={};Object(o["nextTick"])(()=>{R.value.focus()})}function G(e){e?(d.value=[],m.value=""):a.confirm({title:"清空商品",content:"是否确认清空所有商品？",onOk:()=>{d.value=[],m.value=""}})}const L=Object(o["ref"])();function J(e){if(!f.value.count)return t.info("请输入商品数量");const a=d.value.findIndex(e=>e.goodId===f.value.goodId);-1===a?d.value.push({...f.value}):d.value[a].count+=f.value.count,m.value="",f.value={},e&&L.value.focus()}function W(e){a.confirm({title:"移除商品",content:"是否确认移除该商品？",onOk:()=>{d.value.splice(e,1)}})}const q=Object(o["ref"])(!1);function z(e){d.value=e.map(K)}const H=Object(o["ref"])(""),Q=Object(o["ref"])(!1);async function X(){if(H.value)try{Q.value=!0;const{data:e}=await Object(r["Q"])({name:H.value})||{};if(e)return t.error("该客户名称已存在"),O(e.userId,e),void(H.value="");const{data:a}=await Object(r["K"])({name:H.value})||{};a&&(t.success("新增成功"),O(a.userId,a),H.value="",getUsersList())}catch(e){t.error("新增客户失败："+(e.message||e))}finally{Q.value=!1}else t.info("请输入要新增的客户名称")}const Y=Object(o["ref"])(!1);function Z(e){d.value.push({...e})}const ee=Object(o["ref"])(""),te=Object(o["ref"])("add");function ae(){d.value=[],p.value="",ee.value=""}const le=Object(o["ref"])(!1);async function oe(e){if("1"==e&&!p.value)return t.info("请填写客户名称");if("2"!=e||p.value)try{le.value=!0;const{returnCode:a,data:l}=await Object(r["I"])({orderId:ee.value||void 0,userId:p.value,status:e,total:s.value,detail:JSON.stringify(d.value)})||{};0===a&&l&&(t.success("保存成功"),window.$EventBus.$emit("saveOrder"),G(!0),O(),ee.value="",te.value="add")}catch(a){t.error("保存草稿失败："+(a.message||a))}finally{le.value=!1}}const ne=Object(v["c"])();async function ce(e,t){ee.value=e||"",await O(t.userId,{userId:t.userId,userName:t.userName}),d.value=JSON.parse(t.detail||"[]").map(e=>("copy"===t.type&&(e.price=e.originPrice),e))}function re(e){te.value=e.orderId?"edit":"add",ce(e.orderId,e),history.state.params={}}Object(o["watch"])(()=>ne,({name:e})=>{if("cashierMng"!==e)return;const{params:t={}}=history.state;Object.keys(t).length&&(d.value.length?a.confirm({title:"编辑确认",content:"页面存在草稿数据，是否删除草稿，显示订单内容",onOk:()=>{re(t)}}):re(t))},{deep:!0,immediate:!0});let ie=null;const ue=Object(o["ref"])(),de=Object(o["ref"])(0);function se(){ie=c()(),ie.listenTo(ue.value,()=>{de.value=ue.value.offsetHeight})}return Object(o["onBeforeUnmount"])(()=>{ie&&ie.uninstall(ue.value)}),(e,t)=>{const a=Object(o["resolveComponent"])("Radio"),c=Object(o["resolveComponent"])("RadioGroup"),v=Object(o["resolveComponent"])("viInput"),K=Object(o["resolveComponent"])("Button"),ne=Object(o["resolveComponent"])("viInputNumber"),re=Object(o["resolveComponent"])("viLayoutUpDown");return Object(o["openBlock"])(),Object(o["createBlock"])(re,{onOnMount:se},{up:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",h,[Object(o["createVNode"])(c,{modelValue:te.value,"onUpdate:modelValue":t[0]||(t[0]=e=>te.value=e),onOnChange:ae,type:"button","button-style":"solid",class:"mr-15"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(a,{label:"add"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("新增订单")]),_:1}),Object(o["createVNode"])(a,{label:"edit"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("编辑订单")]),_:1})]),_:1},8,["modelValue"]),"edit"==te.value?(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],{key:0},[V,Object(o["createVNode"])(Object(o["unref"])(i["d"]),{modelValue:ee.value,"onUpdate:modelValue":t[1]||(t[1]=e=>ee.value=e),getData:Object(o["unref"])(r["u"]),valueKey:"orderId",labelKey:"orderId",extraKey:"userName",queryKey:"userName",filterable:"",placeholder:"输入客户名称检索订单",onOnChange:ce,class:"vi-width mr-15"},null,8,["modelValue","getData"]),p.value?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",g,"客户名称："+Object(o["toDisplayString"])(b.value.userName),1)):Object(o["createCommentVNode"])("",!0)],64)):(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],{key:1},[y,Object(o["createVNode"])(Object(o["unref"])(i["d"]),{modelValue:p.value,"onUpdate:modelValue":t[2]||(t[2]=e=>p.value=e),getData:Object(o["unref"])(r["z"]),valueKey:"userId",filterable:"",params:{power:"9"},onOnChange:O,class:"vi-width"},null,8,["modelValue","getData"]),w,Object(o["createVNode"])(v,{modelValue:H.value,"onUpdate:modelValue":t[3]||(t[3]=e=>H.value=e),placeholder:"客户名称",onOnEnter:X,class:"vi-width"},null,8,["modelValue"]),Object(o["createVNode"])(K,{type:"success",onClick:X,loading:Q.value,class:"ml-10"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("新增客户")]),_:1},8,["loading"])],64))])]),down:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",N,[Object(o["createElementVNode"])("div",x,[C,Object(o["createVNode"])(Object(o["unref"])(i["d"]),{ref_key:"goodRef",ref:L,modelValue:m.value,"onUpdate:modelValue":t[4]||(t[4]=e=>m.value=e),getData:Object(o["unref"])(r["t"]),valueKey:"goodId",filterable:"",onOnChange:A,class:"vi-width"},null,8,["modelValue","getData"])]),Object(o["createElementVNode"])("div",k,[Object(o["withDirectives"])(Object(o["createElementVNode"])("p",_,"暂无数据",512),[[o["vShow"],!f.value.goodId]]),Object(o["withDirectives"])(Object(o["createElementVNode"])("div",E,[Object(o["createElementVNode"])("div",I,[Object(o["createElementVNode"])("b",{title:f.value.name},"商品名称："+Object(o["toDisplayString"])(f.value.name),9,B),Object(o["createElementVNode"])("p",null,[f.value.price!=f.value.originPrice&&f.value.unit==f.value.originUnit&&f.value.standard==f.value.originStandard?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",S,"￥"+Object(o["toDisplayString"])(f.value.originPrice&&f.value.originPrice.toFixed(2)),1)):Object(o["createCommentVNode"])("",!0),Object(o["createTextVNode"])(" ￥"+Object(o["toDisplayString"])(f.value.price&&f.value.price.toFixed(2))+" / "+Object(o["toDisplayString"])(f.value.unit)+" ",1),Object(o["createElementVNode"])("span",U,Object(o["toDisplayString"])(f.value.standard),1)])]),Object(o["withDirectives"])(Object(o["createElementVNode"])("div",D,[Object(o["createVNode"])(ne,{ref_key:"countRef",ref:R,modelValue:f.value.count,"onUpdate:modelValue":t[5]||(t[5]=e=>f.value.count=e),placeholder:"数量",integer:"",min:0,onOnEnter:t[6]||(t[6]=e=>J(!0))},null,8,["modelValue"]),Object(o["createVNode"])(K,{onClick:t[7]||(t[7]=e=>m.value=""),class:"ml-10"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("取消")]),_:1}),Object(o["createVNode"])(K,{type:"primary",onClick:t[8]||(t[8]=e=>J(!1))},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("增加")]),_:1})],512),[[o["vShow"],f.value.goodId]])],512),[[o["vShow"],f.value.goodId]])])]),Object(o["createElementVNode"])("div",{class:"table-box",ref_key:"tableRef",ref:ue},[Object(o["createVNode"])(Object(o["unref"])(l["a"]),{columns:n,data:d.value,height:de.value,stripe:""},{standard:Object(o["withCtx"])(({index:e})=>[Object(o["createVNode"])(v,{modelValue:d.value[e].standard,"onUpdate:modelValue":t=>d.value[e].standard=t,placeholder:"规格",class:"w100"},null,8,["modelValue","onUpdate:modelValue"])]),unit:Object(o["withCtx"])(({index:e})=>[Object(o["createVNode"])(v,{modelValue:d.value[e].unit,"onUpdate:modelValue":t=>d.value[e].unit=t,placeholder:"单位",class:"w100"},null,8,["modelValue","onUpdate:modelValue"])]),price:Object(o["withCtx"])(({index:e})=>[Object(o["createElementVNode"])("div",T,[d.value[e].price!=d.value[e].originPrice&&d.value[e].unit==d.value[e].originUnit&&d.value[e].standard==d.value[e].originStandard?(Object(o["openBlock"])(),Object(o["createElementBlock"])("p",{key:0,onClick:t=>d.value[e].price=d.value[e].originPrice,class:"origin w40 pointer"},[Object(o["createTextVNode"])("￥ "),Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(d.value[e].originPrice),1)],8,P)):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("div",M,[Object(o["createTextVNode"])(" ￥ "),Object(o["createVNode"])(ne,{modelValue:d.value[e].price,"onUpdate:modelValue":t=>d.value[e].price=t,min:0,step:.5},null,8,["modelValue","onUpdate:modelValue"])])])]),count:Object(o["withCtx"])(({index:e})=>[Object(o["createVNode"])(ne,{modelValue:d.value[e].count,"onUpdate:modelValue":t=>d.value[e].count=t,integer:"",min:0},null,8,["modelValue","onUpdate:modelValue"])]),remarks:Object(o["withCtx"])(({index:e})=>[Object(o["createVNode"])(v,{modelValue:d.value[e].remarks,"onUpdate:modelValue":t=>d.value[e].remarks=t,placeholder:"备注",class:"w100"},null,8,["modelValue","onUpdate:modelValue"])]),operate:Object(o["withCtx"])(({index:e})=>[Object(o["createElementVNode"])("a",{onClick:t=>W(e),class:"vi-red-pointer"},"删除",8,$)]),_:1},8,["data","height"])],512)]),footer:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",F,[Object(o["createElementVNode"])("div",null,[Object(o["createVNode"])(K,{type:"primary",onClick:t[9]||(t[9]=e=>Y.value=!0)},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("新增商品")]),_:1}),Object(o["createVNode"])(K,{onClick:t[10]||(t[10]=e=>{d.value=new Array(90).fill().map((e,t)=>({name:"物品"+(t+1),standard:"规格"+(t+1),unit:"单位"+(t+1),count:parseInt(100*Math.random()),price:+parseFloat(100*Math.random()).toFixed(2)}))})},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("生成随机订单")]),_:1})]),Object(o["createElementVNode"])("p",null,"总计：￥"+Object(o["toDisplayString"])(s.value),1),Object(o["createElementVNode"])("div",null,[Object(o["createVNode"])(K,{type:"error",onClick:t[11]||(t[11]=e=>G())},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("清空商品")]),_:1}),Object(o["createVNode"])(K,{onClick:t[12]||(t[12]=e=>oe("1")),loading:le.value},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("保存草稿")]),_:1},8,["loading"]),Object(o["createVNode"])(Object(o["unref"])(i["l"]),{list:d.value,total:s.value,"user-data":b.value,onPrint:t[13]||(t[13]=e=>oe("2"))},null,8,["list","total","user-data"])])]),Object(o["createVNode"])(Object(o["unref"])(u["a"]),{modelValue:Y.value,"onUpdate:modelValue":t[14]||(t[14]=e=>Y.value=e),showCount:"",onSave:Z},null,8,["modelValue"]),Object(o["createVNode"])(Object(o["unref"])(j),{modelValue:q.value,"onUpdate:modelValue":t[15]||(t[15]=e=>q.value=e),onOnCreate:z},null,8,["modelValue"])]),_:1})}}};a("2f7b");const K=O()(R,[["__scopeId","data-v-005a5034"]]);t["default"]=K},"9bc9":function(e,t,a){"use strict";var l=a("7a23");function o(e,t,a,o,n,c){return Object(l["openBlock"])(),Object(l["createBlock"])(l["Teleport"],{to:"body",disabled:!a.transfer},[Object(l["createVNode"])(l["Transition"],{name:a.transitionName},{default:Object(l["withCtx"])(()=>[Object(l["withDirectives"])(Object(l["createElementVNode"])("div",Object(l["mergeProps"])({class:["ivu-select-dropdown",c.mergedClass],ref:"drop",style:c.mergedStyle},e.$attrs,{onMouseenter:t[0]||(t[0]=(...e)=>c.handleMouseenter&&c.handleMouseenter(...e)),onMouseleave:t[1]||(t[1]=(...e)=>c.handleMouseleave&&c.handleMouseleave(...e)),onClick:t[2]||(t[2]=Object(l["withModifiers"])((...e)=>c.handleClick&&c.handleClick(...e),["stop"]))}),[Object(l["renderSlot"])(e.$slots,"default")],16),[[l["vShow"],a.visible]])]),_:3},8,["name"])],8,["disabled"])}var n=a("694c"),c=a("d2e4"),r=a.n(c),i=a("7388"),u={name:"Drop",emits:["mouseenter","mouseleave","click"],props:{placement:{type:String,default:"bottom-start"},className:{type:String},transfer:{type:Boolean},eventsEnabled:{type:Boolean,default:!1},visible:{type:Boolean},classes:{type:Object,default:()=>{}},styles:{type:Object,default:()=>{}},transitionName:{type:String,default:"transition-drop"},boundariesElement:{default:"window"}},data(){return{popper:null,width:"",popperStatus:!1,tIndex:this.handleGetIndex()}},computed:{mergedStyle(){let e={};return this.width&&(e.minWidth=this.width+"px"),this.transfer&&(e["z-index"]=1060+this.tIndex),Object.assign({},this.styles,e)},mergedClass(){return Object.assign({},this.classes,{[this.className]:this.className})}},methods:{update(){Object(l["nextTick"])(()=>{this.popper?(this.popper.update(),this.popperStatus=!0):this.popper=new r.a(this.$parent.$refs.reference,this.$refs.drop,{eventsEnabled:this.eventsEnabled,placement:this.placement,modifiers:{computeStyle:{gpuAcceleration:!1},preventOverflow:{boundariesElement:this.boundariesElement}},onCreate:()=>{this.resetTransformOrigin(),Object(l["nextTick"])(this.popper.update())},onUpdate:()=>{this.resetTransformOrigin()}}),"iSelect"===this.$parent.$options.name&&(this.width=parseInt(Object(n["g"])(this.$parent.$el,"width"))),this.tIndex=this.handleGetIndex()})},destroy(){this.popper&&setTimeout(()=>{this.popper&&!this.popperStatus&&(this.popper.popper.style.display="none",this.popper.destroy(),this.popper=null),this.popperStatus=!1},300)},resetTransformOrigin(){if(!this.popper)return;let e=this.popper.popper.getAttribute("x-placement"),t=e.split("-")[0],a=e.split("-")[1];const l="left"===e||"right"===e;l||(this.popper.popper.style.transformOrigin="bottom"===t||"top"!==t&&"start"===a?"center top":"center bottom")},handleGetIndex(){return Object(i["c"])(),i["d"]},handleMouseenter(e){this.$emit("mouseenter",e)},handleMouseleave(e){this.$emit("mouseleave",e)},handleOnUpdatePopper(){this.update()},handleOnDestroyPopper(){this.destroy()},handleClick(e){this.$emit("click",e)}},beforeUnmount(){this.popper&&(this.popper.destroy(),this.popper=null)}},d=a("6b0d"),s=a.n(d);const p=s()(u,[["render",o]]);t["a"]=p},a640:function(e,t,a){"use strict";var l=a("d039");e.exports=function(e,t){var a=[][e];return!!a&&l((function(){a.call(null,t||function(){return 1},1)}))}},b550:function(e,t,a){"use strict";a("2760")},d58f:function(e,t,a){"use strict";var l=a("59ed"),o=a("7b0b"),n=a("44ad"),c=a("07fa"),r=TypeError,i=function(e){return function(t,a,i,u){l(a);var d=o(t),s=n(d),p=c(d),b=e?p-1:0,O=e?-1:1;if(i<2)while(1){if(b in s){u=s[b],b+=O;break}if(b+=O,e?b<0:p<=b)throw r("Reduce of empty array with no initial value")}for(;e?b>=0:p>b;b+=O)b in s&&(u=a(u,s[b],b,d));return u}};e.exports={left:i(!1),right:i(!0)}},feca:function(e,t,a){}}]);