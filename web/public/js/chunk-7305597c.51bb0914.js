(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7305597c"],{"16f7":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const o={class:"mb-10"},l=["onClick"],n={key:1,class:"flex-cc"},s=["onClick"];function r(e,t,a,r,d,i){const u=Object(c["resolveComponent"])("viInput"),h=Object(c["resolveComponent"])("FormItem"),b=Object(c["resolveComponent"])("viInputNumber"),p=Object(c["resolveComponent"])("Button"),m=Object(c["resolveComponent"])("viSearchForm"),O=Object(c["resolveComponent"])("viTablePage"),j=Object(c["resolveComponent"])("viLayoutUpDown");return Object(c["openBlock"])(),Object(c["createBlock"])(j,null,{up:Object(c["withCtx"])(()=>[Object(c["createVNode"])(m,{modelValue:d.searchData,"onUpdate:modelValue":t[4]||(t[4]=e=>d.searchData=e),onSearch:i.reSearch},{extral:Object(c["withCtx"])(()=>[Object(c["createVNode"])(p,{type:"error",onClick:t[3]||(t[3]=e=>i.deleteData()),class:"ml-10"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("批量删除")]),_:1})]),default:Object(c["withCtx"])(()=>[a.curRow.userId?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])(h,{key:0,label:"客户名称:",prop:"userName"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(u,{modelValue:d.searchData.userName,"onUpdate:modelValue":t[0]||(t[0]=e=>d.searchData.userName=e)},null,8,["modelValue"])]),_:1})),a.curRow.goodId?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])(h,{key:1,label:"商品名称:",prop:"goodName"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(u,{modelValue:d.searchData.goodName,"onUpdate:modelValue":t[1]||(t[1]=e=>d.searchData.goodName=e)},null,8,["modelValue"])]),_:1})),Object(c["createElementVNode"])("div",o,[Object(c["createTextVNode"])(" 勾选数据批量调整： "),Object(c["createVNode"])(b,{modelValue:d.step,"onUpdate:modelValue":t[2]||(t[2]=e=>d.step=e),step:.5,onOnEnter:i.changeStep,class:"step-input"},null,8,["modelValue","onOnEnter"]),Object(c["createVNode"])(p,{type:"primary",onClick:i.changeStep,class:"ml-10"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("确认")]),_:1},8,["onClick"])])]),_:1},8,["modelValue","onSearch"])]),down:Object(c["withCtx"])(()=>[Object(c["createVNode"])(O,{ref:"table",columns:i.columns,getData:i.getData,addSelect:"",addIndex:"",onOnSelectionChange:t[6]||(t[6]=e=>d.selected=e)},{special:Object(c["withCtx"])(({row:e,index:a})=>[d.changeIndex!=a?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",{key:0,class:"vi-link-pointer",onClick:e=>d.changeIndex=a}," ￥ "+Object(c["toDisplayString"])(e.specialPrice&&e.specialPrice.toFixed(2)),9,l)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",n,[Object(c["createTextVNode"])(" ￥ "),Object(c["createVNode"])(b,{modelValue:e.specialPrice,"onUpdate:modelValue":t=>e.specialPrice=t,min:0,step:.5},null,8,["modelValue","onUpdate:modelValue"]),Object(c["createVNode"])(p,{onClick:t[5]||(t[5]=e=>d.changeIndex=-1),class:"ml-10"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("取消")]),_:1}),Object(c["createVNode"])(p,{type:"primary",onClick:t=>i.changeData([e]),class:"ml-10"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("确认")]),_:2},1032,["onClick"])]))]),operate:Object(c["withCtx"])(({row:e})=>[Object(c["createElementVNode"])("a",{onClick:t=>i.deleteData([e]),class:"vi-red-pointer"},"删除",8,s)]),_:1},8,["columns","getData"])]),_:1})}var d=a("eeb9"),i={name:"specialMng",props:{curRow:{type:Object,default(){return{}}}},data(){return{searchData:{},selected:[],changeIndex:-1,step:0}},computed:{columns(){return[...this.curRow.userId?[]:[{title:"客户名称",key:"userName",align:"center"}],...this.curRow.goodId?[]:[{title:"商品名称",key:"goodName",align:"center"}],{title:"特价（点击修改）",slot:"special",align:"center",width:300},{title:"操作",slot:"operate",align:"center",width:150}]}},methods:{reSearch(){var e;null===(e=this.$refs.table)||void 0===e||e.changePage(1)},getData(e){return this.selected=[],this.changeIndex=-1,Object(d["o"])({...e,...this.searchData,...this.curRow})},changeStep(){if(!this.selected.length)return this.$Message.info("至少勾选一条数据");this.changeData(this.selected.map(e=>(e.specialPrice+=this.step,e)))},async changeData(e){try{const{returnCode:t,data:a}=await Object(d["z"])({list:e})||{};0===t&&a&&(this.$Message.success("保存成功"),this.$refs.table.changePage(1))}catch(t){this.$Message.error("保存失败："+(t.message||t))}},deleteData(e=this.selected){if(!e.length)return this.$Message.info("至少选中一项");this.$Modal.confirm({title:"删除特价",content:"是否确认删除所选特价？",onOk:async()=>{try{const{returnCode:t,data:a}=await Object(d["e"])({list:e.map(e=>({userId:e.userId,goodId:e.goodId}))})||{};0===t&&a&&(this.$Message.success("删除成功"),this.$refs.table.changePage(1))}catch(t){this.$Message.error("删除失败："+(t.message||t))}}})}},activated(){this.reSearch()}},u=(a("6b70"),a("6b0d")),h=a.n(u);const b=h()(i,[["render",r],["__scopeId","data-v-3b16998c"]]);t["default"]=b},"6b70":function(e,t,a){"use strict";a("881e")},"881e":function(e,t,a){}}]);