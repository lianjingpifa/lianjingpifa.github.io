(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4660dac0"],{"267e":function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return l}));const c={1:"草稿",2:"已打印",3:"已作废"},o={1:"未注册",2:"待审核",3:"已验证"},l={1:"超管",2:"店长",3:"店员",9:"客户",99:"游客"}},"7e0a":function(e,t,a){"use strict";a.r(t);var c=a("8738"),o=(a("14d9"),a("7a23")),l=a("eeb9"),r=a("2af9"),n=a("267e"),d=a("6605");const u=["onClick"],i=["onClick"],s=["onClick"];var b={__name:"index",props:{curRow:{type:Object,default(){return{}}}},emits:["close"],setup(e,{emit:t}){const a=e,b=Object(d["d"])(),m=Object(o["inject"])("$Message",()=>{}),O=Object(o["inject"])("$Modal",()=>{}),j={shortcuts:[{text:"今天",value:()=>[new Date,new Date]},{text:"近2天",value:()=>[(new Date).subtract(1),new Date]},{text:"近3天",value:()=>[(new Date).subtract(2),new Date]},{text:"近一周",value:()=>[(new Date).subtract(7),new Date]}]},p=Object(o["ref"])();function v(){var e;null===(e=p.value)||void 0===e||e.changePage(1)}const w=Object(o["ref"])({}),f=Object(o["ref"])([]),h=Object(o["ref"])(!1),V=Object(o["ref"])({}),C=Object(o["computed"])(()=>[{title:"订单编号",minWidth:130,render:(e,{row:t})=>e("span",{class:"vi-link-pointer",onClick:()=>{V.value={...t,list:JSON.parse(t.detail||"[]"),total:t.total.toFixed(2)},h.value=!0}},t.orderId)},...a.curRow.userId?[]:[{title:"客户名称",key:"userName",minWidth:100}],{title:"订单状态",width:80,render:(e,{row:t})=>e("span",n["a"][t.status]||"-")},{title:"总金额",minWidth:90,render:(e,{row:t})=>e("span","￥"+t.total.toFixed(2))},{title:"修改时间",key:"updateTime",minWidth:90},{title:"创建时间",key:"createTime",minWidth:90},{title:"操作",slot:"operate",minWidth:100}]);function x(e){f.value=[];const{updateTime:t=[],createTime:c=[],...o}=w.value;return Object(l["t"])({...e,...o,updateTimeStart:t[0]&&new Date(t[0]).startOf("day").format("YYYY-MM-DD HH:mm:ss"),updateTimeEnd:t[1]&&new Date(t[1]).endOf("day").format("YYYY-MM-DD HH:mm:ss"),createTimeStart:c[0]&&new Date(c[0]).startOf("day").format("YYYY-MM-DD HH:mm:ss"),createTimeEnd:c[1]&&new Date(c[1]).endOf("day").format("YYYY-MM-DD HH:mm:ss"),userId:a.curRow.userId})}function k(e){h.value=!1,t("close"),b.push({name:"cashierMng",state:{params:{type:"change",userId:e.userId,goodList:e.detail,orderId:e.orderId}}})}function N(e){h.value=!1,t("close"),b.push({name:"cashierMng",state:{params:{type:"copy",goodList:e.detail}}})}function y(e=f.value){if(!e.length)return m.info("至少选中一项");O.confirm({title:"删除订单",content:"是否确认删除所选订单？",onOk:async()=>{try{const{returnCode:t,data:a}=await Object(l["g"])({orderIds:e.map(e=>e.orderId).join()})||{};0===t&&a&&(m.success("删除成功"),v(),window.$EventBus.$emit("saveOrder"))}catch(t){m.error("删除失败："+(t.message||t))}}})}return Object(o["onActivated"])(()=>{v()}),(t,a)=>{const l=Object(o["resolveComponent"])("viInput"),d=Object(o["resolveComponent"])("FormItem"),b=Object(o["resolveComponent"])("Option"),m=Object(o["resolveComponent"])("viSelect"),O=Object(o["resolveComponent"])("Button"),D=Object(o["resolveComponent"])("viSearchForm"),T=Object(o["resolveComponent"])("viTablePage"),_=Object(o["resolveComponent"])("viModal"),g=Object(o["resolveComponent"])("viLayoutUpDown");return Object(o["openBlock"])(),Object(o["createBlock"])(g,null,{up:Object(o["withCtx"])(()=>[Object(o["createVNode"])(D,{modelValue:w.value,"onUpdate:modelValue":a[5]||(a[5]=e=>w.value=e),onSearch:v},{extral:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{type:"error",onClick:a[4]||(a[4]=e=>y())},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("批量删除")]),_:1})]),default:Object(o["withCtx"])(()=>[e.curRow.userId?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])(d,{key:0,label:"客户名称:",prop:"userName"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,{modelValue:w.value.userName,"onUpdate:modelValue":a[0]||(a[0]=e=>w.value.userName=e),class:"vi-width"},null,8,["modelValue"])]),_:1})),Object(o["createVNode"])(d,{label:"订单状态:",prop:"status"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(m,{modelValue:w.value.status,"onUpdate:modelValue":a[1]||(a[1]=e=>w.value.status=e),class:"vi-width"},{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(Object(o["unref"])(n["a"]),(e,t)=>(Object(o["openBlock"])(),Object(o["createBlock"])(b,{key:t,value:t},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),Object(o["createVNode"])(d,{label:"修改时间:",prop:"updateTime"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(Object(o["unref"])(c["a"]),{modelValue:w.value.updateTime,"onUpdate:modelValue":a[2]||(a[2]=e=>w.value.updateTime=e),type:"daterange",options:j,placeholder:"请选择",class:"vi-width"},null,8,["modelValue"])]),_:1}),Object(o["createVNode"])(d,{label:"创建时间:",prop:"createTime"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(Object(o["unref"])(c["a"]),{modelValue:w.value.createTime,"onUpdate:modelValue":a[3]||(a[3]=e=>w.value.createTime=e),type:"daterange",options:j,placeholder:"请选择",class:"vi-width"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])]),down:Object(o["withCtx"])(()=>[Object(o["createVNode"])(T,{ref_key:"tableRef",ref:p,columns:C.value,getData:x,addSelect:"",addIndex:"",onOnSelectionChange:a[6]||(a[6]=e=>f.value=e)},{operate:Object(o["withCtx"])(({row:e})=>[Object(o["createElementVNode"])("a",{onClick:t=>k(e)},"修改",8,u),Object(o["createElementVNode"])("a",{onClick:t=>y([e]),class:"vi-red-pointer"},"删除",8,i),Object(o["createElementVNode"])("a",{onClick:t=>N(e),class:"vi-green-pointer"},"一键复制",8,s)]),_:1},8,["columns"]),Object(o["createVNode"])(_,{modelValue:h.value,"onUpdate:modelValue":a[11]||(a[11]=e=>h.value=e),title:"订单详情",width:880},{footer:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{onClick:a[7]||(a[7]=e=>h.value=!1)},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("取消")]),_:1}),Object(o["createVNode"])(O,{type:"primary",onClick:a[8]||(a[8]=e=>k(V.value))},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("去修改")]),_:1}),Object(o["createVNode"])(O,{type:"primary",onClick:a[9]||(a[9]=e=>N(V.value))},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("一键复制")]),_:1}),Object(o["createVNode"])(O,{type:"error",onClick:a[10]||(a[10]=e=>y([V.value]))},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("删除")]),_:1})]),default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(Object(o["unref"])(r["m"]),{list:V.value.list,total:V.value.total,class:"order-detail"},null,8,["list","total"])]),_:1},8,["modelValue"])]),_:1})}}},m=(a("f635"),a("6b0d")),O=a.n(m);const j=O()(b,[["__scopeId","data-v-88eb92a0"]]);t["default"]=j},"930e":function(e,t,a){},f635:function(e,t,a){"use strict";a("930e")}}]);