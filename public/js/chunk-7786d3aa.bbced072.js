(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7786d3aa"],{"083a":function(e,t,a){"use strict";var c=a("0d51"),o=TypeError;e.exports=function(e,t){if(!delete e[t])throw o("Cannot delete property "+c(t)+" of "+c(e))}},"13d5":function(e,t,a){"use strict";var c=a("23e7"),o=a("d58f").left,l=a("a640"),n=a("2d00"),r=a("605d"),i=!r&&n>79&&n<83,d=i||!l("reduce");c({target:"Array",proto:!0,forced:d},{reduce:function(e){var t=arguments.length;return o(this,e,t,t>1?arguments[1]:void 0)}})},1928:function(e,t,a){"use strict";a("7dd3")},"3c65":function(e,t,a){"use strict";var c=a("23e7"),o=a("7b0b"),l=a("07fa"),n=a("3a34"),r=a("083a"),i=a("3511"),d=1!==[].unshift(0),u=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},s=d||!u();c({target:"Array",proto:!0,arity:1,forced:s},{unshift:function(e){var t=o(this),a=l(t),c=arguments.length;if(c){i(a+c);var d=a;while(d--){var u=d+c;d in t?t[u]=t[d]:r(t,u)}for(var s=0;s<c;s++)t[s]=arguments[s]}return n(t,a+c)}})},"5cc7":function(e,t,a){"use strict";a("e583")},"605d":function(e,t,a){"use strict";var c=a("da84"),o=a("c6b6");e.exports="process"===o(c.process)},"7a37":function(e,t,a){"use strict";a.r(t);a("13d5"),a("3c65");var c=a("7a23"),o=a("f23a"),l=a("e84a"),n=a("2af9"),r=a("23f9"),i=a("1fba"),d=a("e5f6"),u=a("450f");const[s,b]=Object(i["a"])("radio-group"),p={shape:String,disabled:Boolean,iconSize:d["f"],direction:String,modelValue:d["h"],checkedColor:String},O=Symbol(s);var m=Object(c["defineComponent"])({name:s,props:p,emits:["change","update:modelValue"],setup(e,{emit:t,slots:a}){const{linkChildren:o}=Object(u["useChildren"])(O),l=e=>t("update:modelValue",e);return Object(c["watch"])(()=>e.modelValue,e=>t("change",e)),o({props:e,updateValue:l}),Object(u["useCustomFieldValue"])(()=>e.modelValue),()=>{var t;return Object(c["createVNode"])("div",{class:b([e.direction]),role:"radiogroup"},[null==(t=a.default)?void 0:t.call(a)])}}});const f=Object(r["a"])(m);var j=a("fa7c"),v=a("8343");const h=Object(j["a"])({},v["a"],{shape:String}),[g,V]=Object(i["a"])("radio");var k=Object(c["defineComponent"])({name:g,props:h,emits:["update:modelValue"],setup(e,{emit:t,slots:a}){const{parent:o}=Object(u["useParent"])(O),l=()=>{const t=o?o.props.modelValue:e.modelValue;return t===e.name},n=()=>{o?o.updateValue(e.name):t("update:modelValue",e.name)};return()=>Object(c["createVNode"])(v["b"],Object(c["mergeProps"])({bem:V,role:"radio",parent:o,checked:l(),onToggle:n},e),Object(j["n"])(a,["default","icon"]))}});const C=Object(r["a"])(k);var y=a("eeb9");const N={class:"flex-ac"};var w={__name:"userSelect",props:{modelValue:{type:Boolean,default:!1},userId:{type:[Number,String],default:""}},emits:["update:modelValue","update:userId","on-change"],setup(e,{emit:t}){const a=e,l=Object(c["inject"])("$Message",()=>{}),r=Object(c["computed"])({get(){return a.modelValue},set(e){t("update:modelValue",e)}}),i=Object(c["computed"])({get(){return a.userId},set(e){t("update:userId",e)}}),d=Object(c["ref"])("");function u(e){return Object(y["z"])({...e,name:d.value,power:"9"})}const s=Object(c["ref"])();Object(c["watch"])(()=>d.value,()=>{var e;null===(e=s.value)||void 0===e||e.reSearch()});const b=Object(c["ref"])(""),p=Object(c["ref"])(!1);function O(e){e.userId!==i.value?(i.value=e.userId,t("on-change",e.userId,e)):(i.value="",t("on-change","")),b.value="",r.value=!1}async function m(){if(b.value)try{p.value=!0;const{data:e}=await Object(y["Q"])({name:b.value})||{};if(e)return l.success("名称已存在\n已选择"),void O(e);const{data:t}=await Object(y["K"])({name:b.value})||{};t&&(l.success("新增成功"),O(t))}catch(e){l.error("新增客户失败："+(e.message||e))}finally{p.value=!1}else l.info("请输入要新增的客户名称")}return(e,t)=>{const a=Object(c["resolveComponent"])("Spin"),l=Object(c["resolveComponent"])("Icon"),j=Object(c["resolveComponent"])("van-cell"),v=Object(c["resolveComponent"])("viModal");return Object(c["openBlock"])(),Object(c["createBlock"])(v,{modelValue:r.value,"onUpdate:modelValue":t[3]||(t[3]=e=>r.value=e),title:"选择客户"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(a,{fix:"",show:p.value},null,8,["show"]),Object(c["createElementVNode"])("div",N,[Object(c["createVNode"])(Object(c["unref"])(o["a"]),{modelValue:b.value,"onUpdate:modelValue":t[0]||(t[0]=e=>b.value=e),label:"没有？快速新增：","label-width":"120",clearable:"",placeholder:"客户名称"},null,8,["modelValue"]),Object(c["createVNode"])(l,{type:"ios-checkmark-circle-outline",color:"green",size:"30",class:"mr-10",onClick:m})]),Object(c["createVNode"])(Object(c["unref"])(o["a"]),{modelValue:d.value,"onUpdate:modelValue":t[1]||(t[1]=e=>d.value=e),label:"过滤客户：","label-width":"80",clearable:"",placeholder:"客户名称",class:"flex-none"},null,8,["modelValue"]),Object(c["createVNode"])(Object(c["unref"])(f),{modelValue:i.value,"onUpdate:modelValue":t[2]||(t[2]=e=>i.value=e),class:"user-list"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(Object(c["unref"])(n["i"]),{ref_key:"listRef",ref:s,getData:u,"cell-spacing":!1,class:"h100"},{default:Object(c["withCtx"])(({item:e})=>[Object(c["createVNode"])(j,{title:e.name,clickable:"",onClick:t=>O(e),class:"cell"},{"right-icon":Object(c["withCtx"])(()=>[Object(c["createVNode"])(Object(c["unref"])(C),{name:e.userId},null,8,["name"])]),_:2},1032,["title","onClick"])]),_:1},512)]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])}}},B=(a("5cc7"),a("6b0d")),S=a.n(B);const x=S()(w,[["__scopeId","data-v-5d3c4eb2"]]);var I=x,E=a("6605"),_=a("4360");const P=e=>(Object(c["pushScopeId"])("data-v-7e298914"),e=e(),Object(c["popScopeId"])(),e),U={class:"container"},T={class:"list"},D={class:"card"},$={class:"card-top"},z={class:"title"},J={key:0,class:"card-middle"},F=["onClick"],W={class:"origin"},A={class:"flex-ac"},M=P(()=>Object(c["createElementVNode"])("label",{class:"f-16 mr-5"},"￥",-1)),G=P(()=>Object(c["createElementVNode"])("label",{class:"f-16 ml-10 mr-10"}," / ",-1)),R={key:1,class:"card-middle"},L={class:"price"},H={key:0,class:"origin"},K={class:"bottom-box"},Q={class:"total"};var X={__name:"mobile",setup(e){const t=Object(E["c"])(),a=Object(_["b"])(),r=Object(c["inject"])("$Message",()=>{}),i=Object(c["inject"])("$Modal",()=>{}),d=Object(c["inject"])("$Auth",()=>!1),u=Object(c["ref"])(JSON.parse(localStorage.getItem("order")||"[]")),s=Object(c["ref"])("0.00"),b=Object(c["ref"])(!1),p=Object(c["ref"])(""),O=Object(c["ref"])({});async function m(e="",t){try{if(p.value=e,!e)return void(O.value={});O.value={...t};const{returnCode:a,data:c}=await Object(y["w"])({userId:e})||{};if(0===a){const e={};c.forEach(t=>{e[t.goodId]=+t.specialPrice}),O.value={...t,special:e},u.value=u.value.map(t=>(t.unit===t.originUnit&&t.standard===t.originStandard?t.price=e[t.goodId]||t.originPrice:t.price=t.originPrice,t))}}catch(a){r.error("获取客户特价失败："+(a.message||a))}}Object(c["watch"])(()=>u.value,()=>{s.value=(u.value.reduce((e,t)=>e+ +(t.count*t.price).toFixed(2),0)||0).toFixed(2),window.$EventBus.$emit("badge",{mobileCashier:u.value.reduce((e,t)=>e+ +t.count,0)}),localStorage.setItem("order",JSON.stringify(u.value))},{deep:!0});const f=Object(c["ref"])("");async function j(e,t){f.value=e||"",await m(t.userId,{userName:t.userName}),u.value=JSON.parse(t.detail||"[]").map(e=>("copy"===t.type&&(e.price=e.originPrice),e))}function v(e){j(e.orderId,e),history.state.params={}}function h(){i.confirm({title:"重建订单",content:"是否确认重建订单？",onOk:()=>{f.value=""}})}function g(e){e?u.value=[]:i.confirm({title:"清空商品",content:"是否确认清空所有商品？",onOk:()=>{u.value=[]}})}function V(e,t){const a=[...u.value],c=a.findIndex(t=>t.goodId===e.goodId);t?(-1===c?a.unshift({...e}):a.splice(c,1,{...e}),u.value=a):-1!==c&&i.confirm({title:"删除商品",content:`确认删除${e.name}?`,onOk:()=>{a.splice(c,1),u.value=a},onCancel:()=>{u.value[c]={...e,count:++t}}})}Object(c["watch"])(()=>t,({name:e})=>{if("mobileCashier"!==e)return;d(3)||m(a.userInfo.userId);const{params:t={}}=history.state;Object.keys(t).length&&(u.value.length?i.confirm({title:"编辑确认",content:"页面存在草稿数据，是否删除草稿，显示订单内容",onOk:()=>{v(t)}}):v(t))},{deep:!0,immediate:!0});const k=Object(c["ref"])(!1);async function C(e){if(!d(9))return r.info("未审批客户无法提交，请联系商家");if("1"==e&&!p.value)return r.info("请填写客户名称");if("2"!=e||p.value)try{k.value=!0;const{returnCode:t,data:a}=await Object(y["I"])({orderId:f.value||void 0,userId:p.value,status:e,total:s.value,detail:JSON.stringify(u.value)})||{};0===t&&a&&(r.success("操作成功"),window.$EventBus.$emit("saveOrder"),g(!0),m(),f.value="")}catch(t){r.error("保存草稿失败："+(t.message||t))}finally{k.value=!1}}return Object(c["onActivated"])(()=>{u.value=JSON.parse(localStorage.getItem("order")||"[]")}),(e,t)=>{const a=Object(c["resolveComponent"])("Spin"),r=Object(c["resolveComponent"])("Icon"),i=Object(c["resolveComponent"])("van-cell"),j=Object(c["resolveComponent"])("viEmpty"),v=Object(c["resolveComponent"])("viInputNumber"),y=Object(c["resolveComponent"])("viInput"),N=Object(c["resolveComponent"])("Button");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",U,[Object(c["createVNode"])(a,{fix:"",show:k.value},null,8,["show"]),f.value?(Object(c["openBlock"])(),Object(c["createBlock"])(Object(c["unref"])(o["a"]),{key:0,label:"订单编号",modelValue:f.value,"onUpdate:modelValue":t[0]||(t[0]=e=>f.value=e),"input-align":"right",readonly:"",class:"flex-none"},{"right-icon":Object(c["withCtx"])(()=>[Object(c["createVNode"])(r,{type:"md-close",size:"25",onClick:h,class:"vi-link-text"})]),_:1},8,["modelValue"])):Object(c["createCommentVNode"])("",!0),Object(c["unref"])(d)(3)?(Object(c["openBlock"])(),Object(c["createBlock"])(i,{key:1,title:"客户名称",value:O.value.name,onClick:t[1]||(t[1]=e=>b.value=!0),"is-link":"",class:"user-select"},null,8,["value"])):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])(Object(c["unref"])(I),{modelValue:b.value,"onUpdate:modelValue":t[2]||(t[2]=e=>b.value=e),userId:p.value,"onUpdate:userId":t[3]||(t[3]=e=>p.value=e),onOnChange:m},null,8,["modelValue","userId"]),Object(c["createElementVNode"])("div",T,[u.value.length?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])(j,{key:0})),(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(u.value,(e,t)=>(Object(c["openBlock"])(),Object(c["createBlock"])(Object(c["unref"])(l["a"]),{key:t},{right:Object(c["withCtx"])(()=>[Object(c["createVNode"])(N,{type:"error",onClick:t=>V(e,0)},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("删除")]),_:2},1032,["onClick"])]),default:Object(c["withCtx"])(()=>[Object(c["createElementVNode"])("div",D,[Object(c["createElementVNode"])("div",$,[Object(c["createElementVNode"])("p",z,Object(c["toDisplayString"])(e.name),1),Object(c["createVNode"])(v,{modelValue:e.count,"onUpdate:modelValue":t=>e.count=t,integer:"",min:0,onOnChange:t=>V(e,t),class:"count-input"},null,8,["modelValue","onUpdate:modelValue","onOnChange"])]),Object(c["unref"])(d)(3)?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",J,[e.price!=e.originPrice&&e.unit==e.originUnit&&e.standard==e.originStandard?(Object(c["openBlock"])(),Object(c["createElementBlock"])("p",{key:0,onClick:t=>e.price=e.originPrice,class:"price"},[Object(c["createElementVNode"])("span",W,"￥ "+Object(c["toDisplayString"])(e.originPrice),1)],8,F)):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("div",A,[M,Object(c["createVNode"])(v,{modelValue:e.price,"onUpdate:modelValue":t=>e.price=t,min:0,step:.5,class:"count-input"},null,8,["modelValue","onUpdate:modelValue"]),G,Object(c["createVNode"])(y,{modelValue:e.unit,"onUpdate:modelValue":t=>e.unit=t,placeholder:"单位",class:"flex-1"},null,8,["modelValue","onUpdate:modelValue"]),Object(c["createVNode"])(y,{modelValue:e.standard,"onUpdate:modelValue":t=>e.standard=t,placeholder:"规格",class:"flex-1 ml-10"},null,8,["modelValue","onUpdate:modelValue"])])])):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",R,[Object(c["createElementVNode"])("p",L,[e.price!=e.originPrice&&e.unit==e.originUnit&&e.standard==e.originStandard?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",H,"￥ "+Object(c["toDisplayString"])(e.originPrice),1)):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("span",null,"￥ "+Object(c["toDisplayString"])(e.price),1)])])),Object(c["createVNode"])(Object(c["unref"])(o["a"]),{modelValue:e.remarks,"onUpdate:modelValue":t=>e.remarks=t,label:"备注：","label-width":"50",clearable:"",placeholder:"备注，有就填",class:"card-bottom"},null,8,["modelValue","onUpdate:modelValue"])])]),_:2},1024))),128))]),Object(c["createElementVNode"])("div",K,[Object(c["createElementVNode"])("p",Q,"总计：￥"+Object(c["toDisplayString"])(s.value),1),Object(c["createVNode"])(N,{type:"error",onClick:t[4]||(t[4]=e=>g())},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("清空商品")]),_:1}),Object(c["unref"])(d)(3)?(Object(c["openBlock"])(),Object(c["createBlock"])(N,{key:0,onClick:t[5]||(t[5]=e=>C("1"))},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("保存草稿")]),_:1})):(Object(c["openBlock"])(),Object(c["createBlock"])(N,{key:1,type:"primary",onClick:t[6]||(t[6]=e=>C("1"))},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("提交订单")]),_:1})),Object(c["unref"])(d)(3)?(Object(c["openBlock"])(),Object(c["createBlock"])(Object(c["unref"])(n["l"]),{key:2,list:u.value,total:s.value,"user-data":O.value,onPrint:t[7]||(t[7]=e=>C("2"))},null,8,["list","total","user-data"])):Object(c["createCommentVNode"])("",!0)])])}}};a("1928");const q=S()(X,[["__scopeId","data-v-7e298914"]]);t["default"]=q},"7dd3":function(e,t,a){},8343:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return d}));var c=a("7a23"),o=a("e5f6"),l=a("fa7c"),n=a("5aa0"),r=a("9a1c");const i={name:o["h"],disabled:Boolean,iconSize:o["f"],modelValue:o["h"],checkedColor:String,labelPosition:String,labelDisabled:Boolean};var d=Object(c["defineComponent"])({props:Object(l["a"])({},i,{bem:Object(o["d"])(Function),role:String,shape:String,parent:Object,checked:Boolean,bindGroup:o["g"],indeterminate:{type:Boolean,default:null}}),emits:["click","toggle"],setup(e,{emit:t,slots:a}){const o=Object(c["ref"])(),l=t=>{if(e.parent&&e.bindGroup)return e.parent.props[t]},i=Object(c["computed"])(()=>{if(e.parent&&e.bindGroup){const t=l("disabled")||e.disabled;if("checkbox"===e.role){const a=l("modelValue").length,c=l("max"),o=c&&a>=+c;return t||o&&!e.checked}return t}return e.disabled}),d=Object(c["computed"])(()=>l("direction")),u=Object(c["computed"])(()=>{const t=e.checkedColor||l("checkedColor");if(t&&e.checked&&!i.value)return{borderColor:t,backgroundColor:t}}),s=Object(c["computed"])(()=>e.shape||l("shape")||"round"),b=a=>{const{target:c}=a,l=o.value,n=l===c||(null==l?void 0:l.contains(c));i.value||!n&&e.labelDisabled||t("toggle"),t("click",a)},p=()=>{var t,d;const{bem:b,checked:p,indeterminate:O}=e,m=e.iconSize||l("iconSize");return Object(c["createVNode"])("div",{ref:o,class:b("icon",[s.value,{disabled:i.value,checked:p,indeterminate:O}]),style:"dot"!==s.value?{fontSize:Object(n["b"])(m)}:{width:Object(n["b"])(m),height:Object(n["b"])(m),borderColor:null==(t=u.value)?void 0:t.borderColor}},[a.icon?a.icon({checked:p,disabled:i.value}):"dot"!==s.value?Object(c["createVNode"])(r["a"],{name:O?"minus":"success",style:u.value},null):Object(c["createVNode"])("div",{class:b("icon--dot__icon"),style:{backgroundColor:null==(d=u.value)?void 0:d.backgroundColor}},null)])},O=()=>{const{checked:t}=e;if(a.default)return Object(c["createVNode"])("span",{class:e.bem("label",[e.labelPosition,{disabled:i.value}])},[a.default({checked:t,disabled:i.value})])};return()=>{const t="left"===e.labelPosition?[O(),p()]:[p(),O()];return Object(c["createVNode"])("div",{role:e.role,class:e.bem([{disabled:i.value,"label-disabled":e.labelDisabled},d.value]),tabindex:i.value?void 0:0,"aria-checked":e.checked,onClick:b},[t])}}})},a640:function(e,t,a){"use strict";var c=a("d039");e.exports=function(e,t){var a=[][e];return!!a&&c((function(){a.call(null,t||function(){return 1},1)}))}},d58f:function(e,t,a){"use strict";var c=a("59ed"),o=a("7b0b"),l=a("44ad"),n=a("07fa"),r=TypeError,i=function(e){return function(t,a,i,d){c(a);var u=o(t),s=l(u),b=n(u),p=e?b-1:0,O=e?-1:1;if(i<2)while(1){if(p in s){d=s[p],p+=O;break}if(p+=O,e?p<0:b<=p)throw r("Reduce of empty array with no initial value")}for(;e?p>=0:b>p;p+=O)p in s&&(d=a(d,s[p],p,u));return d}};e.exports={left:i(!1),right:i(!0)}},e583:function(e,t,a){},e84a:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var c=a("23f9"),o=a("7a23"),l=a("1fba"),n=a("e5f6"),r=a("fa7c"),i=a("8db7"),d=a("5aa0"),u=a("9b55"),s=a("450f"),b=a("d7d5"),p=a("efd9");const[O,m]=Object(l["a"])("swipe-cell"),f={name:Object(n["c"])(""),disabled:Boolean,leftWidth:n["f"],rightWidth:n["f"],beforeClose:Function,stopPropagation:Boolean};var j=Object(o["defineComponent"])({name:O,props:f,emits:["open","close","click"],setup(e,{emit:t,slots:a}){let c,l,n,O;const f=Object(o["ref"])(),j=Object(o["ref"])(),v=Object(o["ref"])(),h=Object(o["reactive"])({offset:0,dragging:!1}),g=Object(b["a"])(),V=e=>e.value?Object(s["useRect"])(e).width:0,k=Object(o["computed"])(()=>Object(r["f"])(e.leftWidth)?+e.leftWidth:V(j)),C=Object(o["computed"])(()=>Object(r["f"])(e.rightWidth)?+e.rightWidth:V(v)),y=a=>{h.offset="left"===a?k.value:-C.value,c||(c=!0,t("open",{name:e.name,position:a}))},N=a=>{h.offset=0,c&&(c=!1,t("close",{name:e.name,position:a}))},w=e=>{const t=Math.abs(h.offset),a=.15,o=c?1-a:a,l="left"===e?k.value:C.value;l&&t>l*o?y(e):N(e)},B=t=>{e.disabled||(n=h.offset,g.start(t))},S=t=>{if(e.disabled)return;const{deltaX:a}=g;if(g.move(t),g.isHorizontal()){l=!0,h.dragging=!0;const o=!c||a.value*n<0;o&&Object(i["e"])(t,e.stopPropagation),h.offset=Object(d["d"])(a.value+n,-C.value,k.value)}},x=()=>{h.dragging&&(h.dragging=!1,w(h.offset>0?"left":"right"),setTimeout(()=>{l=!1},0))},I=(a="outside")=>{O||(t("click",a),c&&!l&&(O=!0,Object(u["a"])(e.beforeClose,{args:[{name:e.name,position:a}],done:()=>{O=!1,N(a)},canceled:()=>O=!1,error:()=>O=!1})))},E=(e,t)=>a=>{t&&a.stopPropagation(),I(e)},_=(e,t)=>{const c=a[e];if(c)return Object(o["createVNode"])("div",{ref:t,class:m(e),onClick:E(e,!0)},[c()])};return Object(p["a"])({open:y,close:N}),Object(s["useClickAway"])(f,()=>I("outside"),{eventName:"touchstart"}),Object(s["useEventListener"])("touchmove",S,{target:f}),()=>{var e;const t={transform:`translate3d(${h.offset}px, 0, 0)`,transitionDuration:h.dragging?"0s":".6s"};return Object(o["createVNode"])("div",{ref:f,class:m(),onClick:E("cell",l),onTouchstartPassive:B,onTouchend:x,onTouchcancel:x},[Object(o["createVNode"])("div",{class:m("wrapper"),style:t},[_("left",j),null==(e=a.default)?void 0:e.call(a),_("right",v)])])}}});const v=Object(c["a"])(j)}}]);