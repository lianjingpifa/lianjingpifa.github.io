(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cfb3674"],{a20b:function(e,t,a){"use strict";a.r(t);var o=a("7a23");const s=["onClick"],l={class:"card-top"},c={class:"title"},n={class:"f-16"},r={class:"remarks"},i={key:1,class:"h100"};function d(e,t,a,d,p,h){const u=Object(o["resolveComponent"])("Icon"),m=Object(o["resolveComponent"])("van-search"),b=Object(o["resolveComponent"])("viListScroll"),O=Object(o["resolveComponent"])("allUsersMap"),M=Object(o["resolveComponent"])("add-user-modal"),j=Object(o["resolveComponent"])("single-user-map"),w=Object(o["resolveComponent"])("van-action-sheet");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[Object(o["createVNode"])(u,{type:p.isMapMode?"ios-list":"ios-pin-outline",size:"32",onClick:t[0]||(t[0]=e=>p.isMapMode=!p.isMapMode),class:"vi-header-icon left"},null,8,["type"]),Object(o["createVNode"])(u,{type:"ios-person-add-outline",size:"34",onClick:t[1]||(t[1]=e=>h.onSelect("change",{})),class:"vi-header-icon right"}),p.isMapMode?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",i,[Object(o["createVNode"])(O,{ref:"userMap",onChangeUser:t[4]||(t[4]=e=>h.onSelect("change",e)),onDeleteUser:t[5]||(t[5]=e=>h.onSelect("delete",e)),onOpenHistoryOrder:t[6]||(t[6]=e=>h.onSelect("order",e)),onOpenSpecialMng:t[7]||(t[7]=e=>h.onSelect("special",e)),onClose:t[8]||(t[8]=e=>p.isMapMode=!1)},null,512)])):(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],{key:0},[Object(o["createVNode"])(m,{modelValue:p.keyword,"onUpdate:modelValue":t[2]||(t[2]=e=>p.keyword=e),shape:"round",placeholder:"请输入客户名称搜索",onClear:h.reSearch,onSearch:h.reSearch,class:"search-input"},null,8,["modelValue","onClear","onSearch"]),Object(o["createVNode"])(b,{ref:"list",getData:h.getData,onOnUpdate:t[3]||(t[3]=t=>e.$emit("total",t.total)),class:"container"},{default:Object(o["withCtx"])(({item:e})=>[Object(o["createElementVNode"])("div",{class:"card",onClick:t=>h.openPopup(e)},[Object(o["createElementVNode"])("div",l,[Object(o["createElementVNode"])("p",c,Object(o["toDisplayString"])(e.name),1),Object(o["createElementVNode"])("span",n,Object(o["toDisplayString"])(e.phone),1)]),Object(o["createElementVNode"])("p",r,"备注："+Object(o["toDisplayString"])(e.remarks||"无"),1)],8,s)]),_:1},8,["getData"])],64)),Object(o["createVNode"])(M,{modelValue:p.showUserModal,"onUpdate:modelValue":t[9]||(t[9]=e=>p.showUserModal=e),detailData:p.detailData,onSave:h.reSearch},null,8,["modelValue","detailData","onSave"]),Object(o["createVNode"])(j,{modelValue:p.showMapModal,"onUpdate:modelValue":t[10]||(t[10]=e=>p.showMapModal=e),curRow:p.detailData},null,8,["modelValue","curRow"]),Object(o["createVNode"])(w,{show:p.showPopup,"onUpdate:show":t[11]||(t[11]=e=>p.showPopup=e),title:p.detailData.name,actions:h.actions,"cancel-text":"取消","close-on-click-action":"",onSelect:t[12]||(t[12]=e=>h.onSelect(e.type))},null,8,["show","title","actions"])])}a("14d9");var p=a("eeb9"),h=a("2af9"),u=a("c64b"),m=a("b046"),b=a("31fd"),O={name:"mobileUser",components:{viListScroll:h["g"],addUserModal:u["a"],singleUserMap:m["a"],allUsersMap:b["a"]},data(){return{keyword:"",showUserModal:!1,detailData:{},showPopup:!1,showMapModal:!1,isMapMode:!1}},computed:{actions(){return[{name:"删除",type:"delete",color:"#f66161"},{name:"特价",type:"special",color:"#07c160"},{name:"历史订单",type:"order",color:"#2d8cf0"},...this.detailData.longitude&&this.detailData.latitude?[{name:"定位",type:"location",color:"#07c160"}]:[],{name:"修改",type:"change"}]}},methods:{reSearch(){var e;this.isMapMode?this.$refs.userMap.getUsersList():null===(e=this.$refs.list)||void 0===e||e.reSearch()},getData(e){return Object(p["v"])({...e,name:this.keyword})},deleteUser({userId:e,name:t}){this.$Modal.confirm({title:"删除客户",content:`是否确认删除${t}？`,onOk:async()=>{try{const{returnCode:t,data:a}=await Object(p["h"])({userIds:""+e})||{};0===t&&a&&(this.$Message.success("删除成功"),this.reSearch())}catch(t){this.$Message.error("删除失败："+(t.message||t))}}})},openPopup(e){this.detailData={...e},this.showPopup=!0},onSelect(e,t=this.detailData){"change"===e?(this.detailData={...t},this.showUserModal=!0):"special"===e?this.$router.push({name:"mobileSpecial",state:{params:{userId:t.userId,name:t.name}}}):"order"===e?this.$router.push({name:"mobileOrder",state:{params:{userId:t.userId,name:t.name}}}):"delete"===e?this.deleteUser(t):"location"===e&&(this.showMapModal=!0)}}},M=(a("bb32"),a("6b0d")),j=a.n(M);const w=j()(O,[["render",d],["__scopeId","data-v-a8952714"]]);t["default"]=w},bb32:function(e,t,a){"use strict";a("c65a")},c65a:function(e,t,a){}}]);