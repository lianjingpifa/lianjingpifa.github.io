(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ad7210c4"],{"1ec7":function(e,t,o){"use strict";o.r(t);var c=o("7a23"),l=o("5f24");const a={class:"popup-header"},n={class:"popup-header-title"},u={key:0,class:"popup-footer"};var s={__name:"index",props:{modelValue:{type:Boolean,default:!1},title:{type:String,default:"弹窗"},width:{type:[Number,String],default:375},height:{type:[Number,String],default:75}},emits:["update:modelValue"],setup(e,{emit:t}){const o=e,s=Object(c["useSlots"])(),d=Object(c["ref"])(window.isMobile),p=Object(c["computed"])({get(){return o.modelValue},set(e){t("update:modelValue",e)}}),r=Object(c["computed"])(()=>d.value?{width:"100%",maxHeight:o.height+"vh",minHeight:"40vh"}:{width:o.width+"px",maxHeight:"90vh"}),i=Object(c["ref"])({});return Object(c["watch"])(()=>o.modelValue,e=>{e&&(i.value={width:"99%"},setTimeout(()=>{i.value={}}))}),(t,o)=>{const b=Object(c["resolveComponent"])("Icon");return Object(c["openBlock"])(),Object(c["createBlock"])(Object(c["unref"])(l["a"]),{show:p.value,"onUpdate:show":o[1]||(o[1]=e=>p.value=e),position:d.value?"bottom":"center",teleport:"body",round:"",style:Object(c["normalizeStyle"])(r.value),class:"popup"},{default:Object(c["withCtx"])(()=>[Object(c["createElementVNode"])("div",a,[Object(c["createElementVNode"])("p",n,Object(c["toDisplayString"])(e.title),1),Object(c["createVNode"])(b,{type:"md-close",class:"popup-header-close",onClick:o[0]||(o[0]=e=>p.value=!1)})]),Object(c["createElementVNode"])("div",{class:"popup-content",style:Object(c["normalizeStyle"])(i.value)},[Object(c["renderSlot"])(t.$slots,"default")],4),Object(c["unref"])(s).footer?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",u,[Object(c["renderSlot"])(t.$slots,"footer")])):Object(c["createCommentVNode"])("",!0)]),_:3},8,["show","position","style"])}}},d=(o("7386"),o("6b0d")),p=o.n(d);const r=p()(s,[["__scopeId","data-v-dc0fa976"]]);t["default"]=r},"28a2":function(e,t,o){},7386:function(e,t,o){"use strict";o("28a2")}}]);