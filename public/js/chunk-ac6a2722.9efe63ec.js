(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ac6a2722"],{"16f7":function(e,t,c){"use strict";c.r(t);var o=c("7a23"),a=c("eeb9");const l={class:"mb-10"},n=["onClick"],r={key:1,class:"flex-cc"},u=["onClick"];var d={__name:"index",props:{curRow:{type:Object,default(){return{}}}},setup(e){const t=e,c=Object(o["inject"])("$Message",()=>{}),d=Object(o["inject"])("$Modal",()=>{}),i=Object(o["computed"])(()=>[...t.curRow.userId?[]:[{title:"客户名称",key:"userName"}],...t.curRow.goodId?[]:[{title:"商品名称",key:"goodName"}],{title:"特价（点击修改）",slot:"special",width:300},{title:"操作",slot:"operate",width:150}]),s=Object(o["ref"])({}),b=Object(o["ref"])([]),O=Object(o["ref"])(-1),j=Object(o["ref"])(0),p=Object(o["ref"])();function m(){var e;null===(e=p.value)||void 0===e||e.changePage(1)}function v(e){return b.value=[],O.value=-1,Object(a["v"])({...e,...s.value,...t.curRow})}async function V(e){try{const{returnCode:t,data:o}=await Object(a["J"])({list:e})||{};0===t&&o&&(c.success("保存成功"),m())}catch(t){c.error("保存失败："+(t.message||t))}}function f(){if(!b.value.length)return c.info("至少勾选一条数据");V(b.value.map(e=>(e.specialPrice+=j.value,e)))}function C(e=b.value){if(!e.length)return c.info("至少选中一项");d.confirm({title:"删除特价",content:"是否确认删除所选特价？",loading:!0,onOk:async()=>{try{const{returnCode:t,data:o}=await Object(a["i"])({list:e.map(e=>({userId:e.userId,goodId:e.goodId}))})||{};0===t&&o&&(c.success("删除成功"),d.remove(),m())}catch(t){c.error("删除失败："+(t.message||t))}}})}return Object(o["onActivated"])(()=>{m()}),(t,c)=>{const a=Object(o["resolveComponent"])("viInput"),d=Object(o["resolveComponent"])("FormItem"),w=Object(o["resolveComponent"])("viInputNumber"),k=Object(o["resolveComponent"])("Button"),N=Object(o["resolveComponent"])("viSearchForm"),h=Object(o["resolveComponent"])("viTablePage"),x=Object(o["resolveComponent"])("viLayoutUpDown");return Object(o["openBlock"])(),Object(o["createBlock"])(x,null,{up:Object(o["withCtx"])(()=>[Object(o["createVNode"])(N,{modelValue:s.value,"onUpdate:modelValue":c[4]||(c[4]=e=>s.value=e),onSearch:m},{extral:Object(o["withCtx"])(()=>[Object(o["createVNode"])(k,{type:"error",onClick:c[3]||(c[3]=e=>C())},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("批量删除")]),_:1})]),default:Object(o["withCtx"])(()=>[e.curRow.userId?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])(d,{key:0,label:"客户名称:",prop:"userName"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(a,{modelValue:s.value.userName,"onUpdate:modelValue":c[0]||(c[0]=e=>s.value.userName=e)},null,8,["modelValue"])]),_:1})),e.curRow.goodId?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])(d,{key:1,label:"商品名称:",prop:"goodName"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(a,{modelValue:s.value.goodName,"onUpdate:modelValue":c[1]||(c[1]=e=>s.value.goodName=e)},null,8,["modelValue"])]),_:1})),Object(o["createElementVNode"])("div",l,[Object(o["createTextVNode"])(" 勾选数据批量调整： "),Object(o["createVNode"])(w,{modelValue:j.value,"onUpdate:modelValue":c[2]||(c[2]=e=>j.value=e),step:.5,onOnEnter:f,class:"step-input"},null,8,["modelValue"]),Object(o["createVNode"])(k,{type:"primary",onClick:f,class:"ml-10"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("确认")]),_:1})])]),_:1},8,["modelValue"])]),down:Object(o["withCtx"])(()=>[Object(o["createVNode"])(h,{ref_key:"tableRef",ref:p,columns:i.value,getData:v,addSelect:"",addIndex:"",onOnSelectionChange:c[6]||(c[6]=e=>b.value=e)},{special:Object(o["withCtx"])(({row:e,index:t})=>[O.value!=t?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",{key:0,class:"vi-link-pointer",onClick:e=>O.value=t}," ￥ "+Object(o["toDisplayString"])(e.specialPrice&&e.specialPrice.toFixed(2)),9,n)):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r,[Object(o["createTextVNode"])(" ￥ "),Object(o["createVNode"])(w,{modelValue:e.specialPrice,"onUpdate:modelValue":t=>e.specialPrice=t,min:0,step:.5},null,8,["modelValue","onUpdate:modelValue"]),Object(o["createVNode"])(k,{onClick:c[5]||(c[5]=e=>O.value=-1),class:"ml-10"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("取消")]),_:1}),Object(o["createVNode"])(k,{type:"primary",onClick:t=>V([e])},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("确认")]),_:2},1032,["onClick"])]))]),operate:Object(o["withCtx"])(({row:e})=>[Object(o["createElementVNode"])("a",{onClick:t=>C([e]),class:"vi-red-pointer"},"删除",8,u)]),_:1},8,["columns"])]),_:1})}}},i=(c("c56b"),c("6b0d")),s=c.n(i);const b=s()(d,[["__scopeId","data-v-27f82c2e"]]);t["default"]=b},"4ad1":function(e,t,c){},c56b:function(e,t,c){"use strict";c("4ad1")}}]);