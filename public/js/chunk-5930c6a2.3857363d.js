(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5930c6a2"],{"192b":function(e,t,a){"use strict";a("14d9");var c=a("7a23"),l=a("4360");const o={class:"detail-container"},n={class:"group-title"},r={class:"card-list"},d={class:"title"},u={class:"count"},i={class:"f-20"};var s={__name:"orderStatModal",props:{modelValue:{type:Boolean,default:!1},statOrders:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(e,{emit:t}){const a=e,s=Object(l["a"])(),b=Object(c["computed"])(()=>s.dictMap),O=Object(c["ref"])(window.isMobile),j=Object(c["computed"])({get(){return a.modelValue},set(e){t("update:modelValue",e)}}),m=Object(c["ref"])({});return Object(c["watch"])(()=>a.statOrders,e=>{const t=[];e.forEach(({detail:e})=>{const a=JSON.parse(e||"[]");a.forEach(({goodId:e,name:a,count:c})=>{const l=t.findIndex(t=>t.goodId===e);l>-1?t[l].count+=+c||0:t.push({goodId:e,name:a,count:+c||0})})});const a={};t.forEach(e=>{var t;const c=(null===(t=e.store)||void 0===t?void 0:t.split(",")[0])||"";a[c]?a[c].push(e):a[c]=[e]}),m.value=a}),(t,a)=>{const l=Object(c["resolveComponent"])("viEmpty"),s=Object(c["resolveComponent"])("viModal");return Object(c["openBlock"])(),Object(c["createBlock"])(s,{modelValue:j.value,"onUpdate:modelValue":a[0]||(a[0]=e=>j.value=e),title:`订单统计（${e.statOrders.length}）`,width:880},{default:Object(c["withCtx"])(()=>[Object(c["createElementVNode"])("div",o,[Object.keys(m.value).length?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])(l,{key:0})),(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(m.value,(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:t,class:"card-group"},[Object(c["createElementVNode"])("p",n,Object(c["toDisplayString"])(b.value.store[t]||"其他"),1),Object(c["createElementVNode"])("div",r,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e,(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:t,class:Object(c["normalizeClass"])(["card",{mobile:O.value}])},[Object(c["createElementVNode"])("p",d,Object(c["toDisplayString"])(e.name),1),Object(c["createElementVNode"])("p",u,[Object(c["createTextVNode"])("X "),Object(c["createElementVNode"])("span",i,Object(c["toDisplayString"])(e.count),1)])],2))),128))])]))),128))])]),_:1},8,["modelValue","title"])}}},b=(a("9b53"),a("6b0d")),O=a.n(b);const j=O()(s,[["__scopeId","data-v-5b00737f"]]);t["a"]=j},"51d9":function(e,t,a){"use strict";a.r(t);var c=a("7a23"),l=a("aad9"),o=a("3e47"),n=a("23f9"),r=a("1fba"),d=a("fa7c"),u=a("e5f6"),i=a("450f"),s=a("efd9");const[b,O]=Object(r["a"])("checkbox-group"),j={max:u["f"],shape:Object(u["e"])("round"),disabled:Boolean,iconSize:u["f"],direction:String,modelValue:Object(u["a"])(),checkedColor:String},m=Symbol(b);Object(c["defineComponent"])({name:b,props:j,emits:["change","update:modelValue"],setup(e,{emit:t,slots:a}){const{children:l,linkChildren:o}=Object(i["useChildren"])(m),n=e=>t("update:modelValue",e),r=(e={})=>{"boolean"===typeof e&&(e={checked:e});const{checked:t,skipDisabled:a}=e,c=l.filter(e=>!!e.props.bindGroup&&(e.props.disabled&&a?e.checked.value:null!=t?t:!e.checked.value)),o=c.map(e=>e.name);n(o)};return Object(c["watch"])(()=>e.modelValue,e=>t("change",e)),Object(s["a"])({toggleAll:r}),Object(i["useCustomFieldValue"])(()=>e.modelValue),o({props:e,updateValue:n}),()=>{var t;return Object(c["createVNode"])("div",{class:O([e.direction])},[null==(t=a.default)?void 0:t.call(a)])}}});var p=a("8343");const[v,f]=Object(r["a"])("checkbox"),V=Object(d["a"])({},p["a"],{shape:String,bindGroup:u["g"],indeterminate:{type:Boolean,default:null}});var k=Object(c["defineComponent"])({name:v,props:V,emits:["change","update:modelValue"],setup(e,{emit:t,slots:a}){const{parent:l}=Object(i["useParent"])(m),o=t=>{const{name:a}=e,{max:c,modelValue:o}=l.props,n=o.slice();if(t){const t=c&&n.length>=+c;t||n.includes(a)||(n.push(a),e.bindGroup&&l.updateValue(n))}else{const t=n.indexOf(a);-1!==t&&(n.splice(t,1),e.bindGroup&&l.updateValue(n))}},n=Object(c["computed"])(()=>l&&e.bindGroup?-1!==l.props.modelValue.indexOf(e.name):!!e.modelValue),r=(a=!n.value)=>{l&&e.bindGroup?o(a):t("update:modelValue",a),null!==e.indeterminate&&t("change",a)};return Object(c["watch"])(()=>e.modelValue,a=>{null===e.indeterminate&&t("change",a)}),Object(s["a"])({toggle:r,props:e,checked:n}),Object(i["useCustomFieldValue"])(()=>e.modelValue),()=>Object(c["createVNode"])(p["b"],Object(c["mergeProps"])({bem:f,role:"checkbox",parent:l,checked:n.value,onToggle:r},e),Object(d["n"])(a,["default","icon"]))}});const h=Object(n["a"])(k);var g=a("eeb9"),C=a("2af9"),N=(a("14d9"),a("6605"));const y={class:"detail-container"},B={class:"card-list"},x={class:"title"},E={class:"card-bottom"},w={key:0,class:"price origin"},D={class:"price"},S={key:1,class:"ml-5"},_={key:2,class:"standard"},T={class:"count"},I={class:"f-20"},U={class:"total"};var z={__name:"orderDetailModal",props:{modelValue:{type:Boolean,default:!1},detailData:{type:Object,default(){return{}}}},emits:["update:modelValue"],setup(e,{emit:t}){const a=e,l=Object(N["d"])(),o=Object(c["inject"])("$Message",()=>{}),n=Object(c["inject"])("$Modal",()=>{}),r=Object(c["inject"])("$Auth",()=>!1),d=Object(c["computed"])({get(){return a.modelValue},set(e){t("update:modelValue",e)}});function u(){n.confirm({title:"删除订单",content:"是否确认删除所选订单？",loading:!0,onOk:async()=>{try{const{returnCode:e,data:t}=await Object(g["h"])({orderIds:""+a.detailData.orderId})||{};0===e&&t&&(o.success("删除成功"),n.remove(),window.$EventBus.$emit("saveOrder"),d.value=!1)}catch(e){o.error("删除失败："+(e.message||e))}}})}function i(){d.value=!1,l.push({name:"mobileCashier",state:{params:{type:"change",userId:a.detailData.userId,userName:a.detailData.userName,detail:a.detailData.detail,orderId:a.detailData.orderId}}})}function s(){d.value=!1,l.push({name:"mobileCashier",state:{params:{type:"copy",detail:a.detailData.detail}}})}return(t,a)=>{const l=Object(c["resolveComponent"])("van-cell"),o=Object(c["resolveComponent"])("viEmpty"),n=Object(c["resolveComponent"])("Button"),b=Object(c["resolveComponent"])("viModal");return Object(c["openBlock"])(),Object(c["createBlock"])(b,{modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=e=>d.value=e),title:"订单详情"},{footer:Object(c["withCtx"])(()=>[Object(c["createElementVNode"])("p",U,"总金额：￥"+Object(c["toDisplayString"])(e.detailData.total),1),Object(c["unref"])(r)(3)||"1"==e.detailData.status?(Object(c["openBlock"])(),Object(c["createBlock"])(n,{key:0,type:"primary",onClick:i},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("修改")]),_:1})):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])(n,{type:"success",onClick:s},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("复制")]),_:1}),Object(c["unref"])(r)(3)||"1"==e.detailData.status?(Object(c["openBlock"])(),Object(c["createBlock"])(n,{key:1,type:"error",onClick:u},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("删除")]),_:1})):Object(c["createCommentVNode"])("",!0)]),default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(l,{title:"订单编号",value:e.detailData.orderId,class:"flex-none"},null,8,["value"]),Object(c["createVNode"])(l,{title:"客户名称",value:e.detailData.userName,class:"flex-none"},null,8,["value"]),Object(c["createElementVNode"])("div",y,[Object(c["createElementVNode"])("div",B,[e.detailData.list.length?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])(o,{key:0})),(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.detailData.list,(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:"card",key:t},[Object(c["createElementVNode"])("p",x,Object(c["toDisplayString"])(e.name),1),Object(c["createElementVNode"])("div",E,[Object(c["createElementVNode"])("div",null,[e.price!=e.originPrice&&e.unit==e.originUnit&&e.standard==e.originStandard?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",w,"￥"+Object(c["toDisplayString"])(e.originPrice&&e.originPrice.toFixed(2)),1)):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("span",D,"￥"+Object(c["toDisplayString"])(e.price&&e.price.toFixed(2)),1),e.unit?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",S,"/ "+Object(c["toDisplayString"])(e.unit),1)):Object(c["createCommentVNode"])("",!0),e.standard?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",_,Object(c["toDisplayString"])(e.standard),1)):Object(c["createCommentVNode"])("",!0)]),Object(c["createElementVNode"])("p",T,[Object(c["createTextVNode"])("X "),Object(c["createElementVNode"])("span",I,Object(c["toDisplayString"])(e.count),1)])])]))),128))])])]),_:1},8,["modelValue"])}}},F=(a("be42"),a("6b0d")),M=a.n(F);const G=M()(z,[["__scopeId","data-v-191208e0"]]);var P=G,$=a("192b"),L=a("4360");const A={class:"card"},J=["onClick"],X={class:"title"},R={class:"f-16"},q={class:"f-16"},H={class:"f-16"},K={key:1,class:"confirm-select"};var Q={__name:"mobile",props:{draftCount:{type:Number,default:void 0}},setup(e){const t=e,a=Object(N["c"])(),n=Object(L["b"])(),r=Object(c["inject"])("$Auth",()=>!1),d=Object(c["inject"])("$Message",()=>{}),u=Object(c["ref"])();function i(){var e;null===(e=u.value)||void 0===e||e.reSearch()}Object(c["watch"])(()=>t.draftCount,()=>{i()});const s=Object(c["ref"])({}),b=Object(c["computed"])(()=>{var e,t;return!!(null!==(e=s.value.createTime)&&void 0!==e&&e.length||null!==(t=s.value.updateTime)&&void 0!==t&&t.length)}),O=Object(c["ref"])(""),j=Object(c["ref"])("1"),m=Object(c["ref"])([]),p=Object(c["ref"])([]),v=Object(c["ref"])(""),f=Object(c["ref"])("");function V(){p.value=[],m.value=[]}function k(){v.value="",f.value="",i()}function y(e){const{updateTime:t=[],createTime:a=[]}=s.value,[c,l]=t,[o,n]=a;return Object(g["u"])({...e,userId:v.value,userName:O.value,status:j.value,updateTimeStart:c&&c+" 00:00:00",updateTimeEnd:l&&l+" 23:59:59",createTimeStart:o&&o+" 00:00:00",createTimeEnd:n&&n+" 23:59:59"})}Object(c["watch"])(()=>a,({name:e})=>{if("mobileOrder"!==e)return;r(3)||(v.value=n.userInfo.userId,f.value=n.userInfo.nickName);const{params:t={}}=history.state;Object.keys(t).length&&(v.value=t.userId,f.value=t.name,O.value="",j.value="2",V(),i(),history.state.params={})},{deep:!0,immediate:!0});const B=Object(c["ref"])(!1);function x(){p.value=s.value.updateTime||[],m.value=s.value.createTime||[],B.value=!0}function E(){s.value={updateTime:p.value,createTime:m.value},B.value=!1,i()}const w=Object(c["ref"])(!1),D=Object(c["computed"])({get(){var e;const t=(null===(e=u.value)||void 0===e?void 0:e.dataList)||[];return t.every(e=>e.selected)},set(e){var t;null===(t=u.value)||void 0===t||t.dataList.forEach(t=>{t.selected=e})}}),S=Object(c["ref"])({}),_=Object(c["ref"])(!1);function T(e){w.value?e.selected=!e.selected:(S.value={...e,list:JSON.parse(e.detail||"[]"),total:e.total.toFixed(2)},_.value=!0)}const I=Object(c["ref"])(!1),U=Object(c["ref"])([]);function z(){var e;const t=((null===(e=u.value)||void 0===e?void 0:e.dataList)||[]).filter(e=>e.selected);if(!t.length)return d.info("至少选中一项");U.value=t,I.value=!0}return Object(c["onActivated"])(()=>{i()}),(t,a)=>{const n=Object(c["resolveComponent"])("Icon"),d=Object(c["resolveComponent"])("van-cell"),s=Object(c["resolveComponent"])("van-search"),g=Object(c["resolveComponent"])("Button"),N=Object(c["resolveComponent"])("viModal");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",null,[Object(c["unref"])(r)(3)?(Object(c["openBlock"])(),Object(c["createBlock"])(n,{key:0,type:"ios-stats-outline",size:"30",onClick:a[0]||(a[0]=e=>w.value=!w.value),class:"vi-header-icon right"})):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])(Object(c["unref"])(l["a"]),{active:j.value,"onUpdate:active":a[1]||(a[1]=e=>j.value=e),onChange:i},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(Object(c["unref"])(o["a"]),{title:Object(c["unref"])(r)(3)?"草稿":"未出单",name:"1",badge:e.draftCount||void 0},null,8,["title","badge"]),Object(c["createVNode"])(Object(c["unref"])(o["a"]),{title:Object(c["unref"])(r)(3)?"已打印":"已出单",name:"2"},null,8,["title"]),Object(c["createVNode"])(Object(c["unref"])(o["a"]),{title:"全部",name:""})]),_:1},8,["active"]),Object(c["createVNode"])(s,{modelValue:O.value,"onUpdate:modelValue":a[2]||(a[2]=e=>O.value=e),shape:"round",placeholder:"请输入客户名称搜索","show-action":"",onClear:i,onSearch:i,class:"search-input"},{action:Object(c["withCtx"])(()=>[v.value?(Object(c["openBlock"])(),Object(c["createBlock"])(d,{key:0,title:"客户名称",value:f.value,class:"user-id-cell"},Object(c["createSlots"])({_:2},[Object(c["unref"])(r)(3)?{name:"right-icon",fn:Object(c["withCtx"])(()=>[Object(c["createVNode"])(n,{type:"md-close",size:"25",onClick:k,class:"vi-link-text ml-10"})]),key:"0"}:void 0]),1032,["value"])):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])(n,{type:b.value?"ios-funnel":"ios-funnel-outline",size:"24",color:b.value?"#2d8cf0":"#555",onClick:x},null,8,["type","color"])]),_:1},8,["modelValue"]),Object(c["createVNode"])(N,{modelValue:B.value,"onUpdate:modelValue":a[5]||(a[5]=e=>B.value=e),title:"更多检索条件"},{footer:Object(c["withCtx"])(()=>[Object(c["createVNode"])(g,{onClick:V},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("重置")]),_:1}),Object(c["createVNode"])(g,{type:"primary",onClick:E},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("检索")]),_:1})]),default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(Object(c["unref"])(C["a"]),{modelValue:p.value,"onUpdate:modelValue":a[3]||(a[3]=e=>p.value=e),title:"修改时间"},null,8,["modelValue"]),Object(c["createVNode"])(Object(c["unref"])(C["a"]),{modelValue:m.value,"onUpdate:modelValue":a[4]||(a[4]=e=>m.value=e),title:"创建时间"},null,8,["modelValue"])]),_:1},8,["modelValue"]),Object(c["createVNode"])(Object(c["unref"])(C["i"]),{ref_key:"listRef",ref:u,getData:y,class:Object(c["normalizeClass"])(["container",{selected:w.value}])},{default:Object(c["withCtx"])(({item:e})=>[Object(c["createElementVNode"])("div",A,[w.value?(Object(c["openBlock"])(),Object(c["createBlock"])(Object(c["unref"])(h),{key:0,modelValue:e.selected,"onUpdate:modelValue":t=>e.selected=t,class:"card-select"},null,8,["modelValue","onUpdate:modelValue"])):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("div",{class:"card-content",onClick:t=>T(e)},[Object(c["createElementVNode"])("p",X,"订单编号："+Object(c["toDisplayString"])(e.orderId),1),Object(c["createElementVNode"])("p",R,"客户名称："+Object(c["toDisplayString"])(e.userName),1),Object(c["createElementVNode"])("p",q,"总 金 额 ：￥"+Object(c["toDisplayString"])(e.total&&e.total.toFixed(2)),1),Object(c["createElementVNode"])("p",H,"修改时间："+Object(c["toDisplayString"])(e.updateTime),1)],8,J)])]),_:1},8,["class"]),w.value?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",K,[w.value?(Object(c["openBlock"])(),Object(c["createBlock"])(Object(c["unref"])(h),{key:0,modelValue:D.value,"onUpdate:modelValue":a[6]||(a[6]=e=>D.value=e)},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("全选")]),_:1},8,["modelValue"])):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("div",null,[Object(c["createVNode"])(g,{onClick:a[7]||(a[7]=e=>w.value=!1)},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("取消")]),_:1}),Object(c["createVNode"])(g,{type:"success",onClick:z},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("统计")]),_:1})])])):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])(Object(c["unref"])(P),{modelValue:_.value,"onUpdate:modelValue":a[8]||(a[8]=e=>_.value=e),detailData:S.value},null,8,["modelValue","detailData"]),Object(c["createVNode"])(Object(c["unref"])($["a"]),{modelValue:I.value,"onUpdate:modelValue":a[9]||(a[9]=e=>I.value=e),statOrders:U.value},null,8,["modelValue","statOrders"])])}}};a("e847");const W=M()(Q,[["__scopeId","data-v-d99ed482"]]);t["default"]=W},8343:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var c=a("7a23"),l=a("e5f6"),o=a("fa7c"),n=a("5aa0"),r=a("9a1c");const d={name:l["h"],disabled:Boolean,iconSize:l["f"],modelValue:l["h"],checkedColor:String,labelPosition:String,labelDisabled:Boolean};var u=Object(c["defineComponent"])({props:Object(o["a"])({},d,{bem:Object(l["d"])(Function),role:String,shape:String,parent:Object,checked:Boolean,bindGroup:l["g"],indeterminate:{type:Boolean,default:null}}),emits:["click","toggle"],setup(e,{emit:t,slots:a}){const l=Object(c["ref"])(),o=t=>{if(e.parent&&e.bindGroup)return e.parent.props[t]},d=Object(c["computed"])(()=>{if(e.parent&&e.bindGroup){const t=o("disabled")||e.disabled;if("checkbox"===e.role){const a=o("modelValue").length,c=o("max"),l=c&&a>=+c;return t||l&&!e.checked}return t}return e.disabled}),u=Object(c["computed"])(()=>o("direction")),i=Object(c["computed"])(()=>{const t=e.checkedColor||o("checkedColor");if(t&&e.checked&&!d.value)return{borderColor:t,backgroundColor:t}}),s=Object(c["computed"])(()=>e.shape||o("shape")||"round"),b=a=>{const{target:c}=a,o=l.value,n=o===c||(null==o?void 0:o.contains(c));d.value||!n&&e.labelDisabled||t("toggle"),t("click",a)},O=()=>{var t,u;const{bem:b,checked:O,indeterminate:j}=e,m=e.iconSize||o("iconSize");return Object(c["createVNode"])("div",{ref:l,class:b("icon",[s.value,{disabled:d.value,checked:O,indeterminate:j}]),style:"dot"!==s.value?{fontSize:Object(n["b"])(m)}:{width:Object(n["b"])(m),height:Object(n["b"])(m),borderColor:null==(t=i.value)?void 0:t.borderColor}},[a.icon?a.icon({checked:O,disabled:d.value}):"dot"!==s.value?Object(c["createVNode"])(r["a"],{name:j?"minus":"success",style:i.value},null):Object(c["createVNode"])("div",{class:b("icon--dot__icon"),style:{backgroundColor:null==(u=i.value)?void 0:u.backgroundColor}},null)])},j=()=>{const{checked:t}=e;if(a.default)return Object(c["createVNode"])("span",{class:e.bem("label",[e.labelPosition,{disabled:d.value}])},[a.default({checked:t,disabled:d.value})])};return()=>{const t="left"===e.labelPosition?[j(),O()]:[O(),j()];return Object(c["createVNode"])("div",{role:e.role,class:e.bem([{disabled:d.value,"label-disabled":e.labelDisabled},u.value]),tabindex:d.value?void 0:0,"aria-checked":e.checked,onClick:b},[t])}}})},"863d":function(e,t,a){},"9b53":function(e,t,a){"use strict";a("9e18")},"9e18":function(e,t,a){},b95a:function(e,t,a){},be42:function(e,t,a){"use strict";a("b95a")},e847:function(e,t,a){"use strict";a("863d")}}]);