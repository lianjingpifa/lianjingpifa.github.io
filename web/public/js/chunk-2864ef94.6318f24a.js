(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2864ef94"],{"083a":function(e,t,o){"use strict";var r=o("0d51"),a=TypeError;e.exports=function(e,t){if(!delete e[t])throw a("Cannot delete property "+r(t)+" of "+r(e))}},"1f38":function(e,t,o){"use strict";var r=o("7a23");function a(e,t,o,a,c,n){const i=Object(r["resolveComponent"])("viInput"),d=Object(r["resolveComponent"])("FormItem"),l=Object(r["resolveComponent"])("viInputNumber"),s=Object(r["resolveComponent"])("Option"),u=Object(r["resolveComponent"])("viSelect"),b=Object(r["resolveComponent"])("Form"),m=Object(r["resolveComponent"])("Button"),h=Object(r["resolveComponent"])("Modal");return Object(r["openBlock"])(),Object(r["createBlock"])(h,{title:n.title,modelValue:n.showModal,"onUpdate:modelValue":t[8]||(t[8]=e=>n.showModal=e),width:400,"class-name":"vertical-center-modal"},{footer:Object(r["withCtx"])(()=>[Object(r["createVNode"])(m,{type:"text",onClick:t[7]||(t[7]=e=>n.showModal=!1)},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("取消")]),_:1}),Object(r["createVNode"])(m,{type:"primary",onClick:n.submit,loading:c.loading},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("确定")]),_:1},8,["onClick","loading"])]),default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(b,{ref:"form",model:c.formData,rules:c.rules,"label-width":60,onKeydown:Object(r["withKeys"])(n.submit,["enter"]),class:"plr"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(d,{label:"名称:",prop:"name"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(i,{modelValue:c.formData.name,"onUpdate:modelValue":t[0]||(t[0]=e=>c.formData.name=e)},null,8,["modelValue"])]),_:1}),Object(r["createVNode"])(d,{label:"规格:",prop:"standard"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(i,{modelValue:c.formData.standard,"onUpdate:modelValue":t[1]||(t[1]=e=>c.formData.standard=e)},null,8,["modelValue"])]),_:1}),Object(r["createVNode"])(d,{label:"单位:",prop:"unit"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(i,{modelValue:c.formData.unit,"onUpdate:modelValue":t[2]||(t[2]=e=>c.formData.unit=e)},null,8,["modelValue"])]),_:1}),Object(r["createVNode"])(d,{label:"单价:",prop:"price"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(l,{modelValue:c.formData.price,"onUpdate:modelValue":t[3]||(t[3]=e=>c.formData.price=e),min:0,step:.5},null,8,["modelValue"])]),_:1}),Object(r["createVNode"])(d,{label:"标签:",prop:"label"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(u,{modelValue:c.formData.label,"onUpdate:modelValue":t[4]||(t[4]=e=>c.formData.label=e),multiple:""},{default:Object(r["withCtx"])(()=>[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(c.dictMap.good,(e,t)=>(Object(r["openBlock"])(),Object(r["createBlock"])(s,{key:t,value:e.id},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),Object(r["createVNode"])(d,{label:"仓库:",prop:"store"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(u,{modelValue:c.formData.store,"onUpdate:modelValue":t[5]||(t[5]=e=>c.formData.store=e),multiple:""},{default:Object(r["withCtx"])(()=>[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(c.dictMap.store,(e,t)=>(Object(r["openBlock"])(),Object(r["createBlock"])(s,{key:t,value:e.id},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o.showCount?(Object(r["openBlock"])(),Object(r["createBlock"])(d,{key:0,label:"数量:",prop:"count"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(l,{modelValue:c.formData.count,"onUpdate:modelValue":t[6]||(t[6]=e=>c.formData.count=e),integer:"",min:0},null,8,["modelValue"])]),_:1})):Object(r["createCommentVNode"])("",!0)]),_:1},8,["model","rules","onKeydown"])]),_:1},8,["title","modelValue"])}o("d9e2");var c=o("eeb9"),n=o("2410"),i=o.n(n),d=o("4360");const l=Object(d["a"])();var s={name:"addGoodModal",props:{modelValue:{type:Boolean,default:!1},detailData:{type:Object,default(){return{}}},showCount:{type:Boolean,default:!1}},data(){const e=async(e,t,o)=>{if(t&&this.detailData.name!==this.formData.name){const{data:e}=await Object(c["N"])({name:t})||{};if(e)return o(new Error("该商品名称已存在"))}o()};return{dictMap:l.dictMap,formData:{},rules:{name:[{required:!0,message:"请输入商品名称"},{validator:e,trigger:"blur"}]},loading:!1}},computed:{title(){return(this.detailData.goodId?"编辑":"新增")+"商品"},showModal:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e),e||this.$emit("close")}}},watch:{detailData:{deep:!0,handler(){this.$refs.form.resetFields(),this.formData=i()(this.detailData)}}},methods:{submit(){this.loading=!0,this.$refs.form.validate(async e=>{if(!e)return this.$Message.error("数据校验不通过"),void(this.loading=!1);try{const{_index:e,_rowKey:t,count:o,...r}=this.formData,{data:a}=await Object(c["H"])(r)||{};a&&(this.$Message.success(this.title+"成功"),this.$emit("save",{...this.formData}),this.$refs.form.resetFields(),this.showModal=!1)}catch(t){this.$Message.error("请求失败："+(t.message||t))}finally{this.loading=!1}})}}},u=o("6b0d"),b=o.n(u);const m=b()(s,[["render",a]]);t["a"]=m},2410:function(e,t,o){(function(t){var o=function(){"use strict";function e(e,t){return null!=t&&e instanceof t}var o,r,a;try{o=Map}catch(u){o=function(){}}try{r=Set}catch(u){r=function(){}}try{a=Promise}catch(u){a=function(){}}function c(n,i,d,l,u){"object"===typeof i&&(d=i.depth,l=i.prototype,u=i.includeNonEnumerable,i=i.circular);var b=[],m=[],h="undefined"!=typeof t;function O(n,d){if(null===n)return null;if(0===d)return n;var p,j;if("object"!=typeof n)return n;if(e(n,o))p=new o;else if(e(n,r))p=new r;else if(e(n,a))p=new a((function(e,t){n.then((function(t){e(O(t,d-1))}),(function(e){t(O(e,d-1))}))}));else if(c.__isArray(n))p=[];else if(c.__isRegExp(n))p=new RegExp(n.source,s(n)),n.lastIndex&&(p.lastIndex=n.lastIndex);else if(c.__isDate(n))p=new Date(n.getTime());else{if(h&&t.isBuffer(n))return p=t.allocUnsafe?t.allocUnsafe(n.length):new t(n.length),n.copy(p),p;e(n,Error)?p=Object.create(n):"undefined"==typeof l?(j=Object.getPrototypeOf(n),p=Object.create(j)):(p=Object.create(l),j=l)}if(i){var f=b.indexOf(n);if(-1!=f)return m[f];b.push(n),m.push(p)}for(var g in e(n,o)&&n.forEach((function(e,t){var o=O(t,d-1),r=O(e,d-1);p.set(o,r)})),e(n,r)&&n.forEach((function(e){var t=O(e,d-1);p.add(t)})),n){var V;j&&(V=Object.getOwnPropertyDescriptor(j,g)),V&&null==V.set||(p[g]=O(n[g],d-1))}if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(n);for(g=0;g<w.length;g++){var v=w[g],y=Object.getOwnPropertyDescriptor(n,v);(!y||y.enumerable||u)&&(p[v]=O(n[v],d-1),y.enumerable||Object.defineProperty(p,v,{enumerable:!1}))}}if(u){var N=Object.getOwnPropertyNames(n);for(g=0;g<N.length;g++){var x=N[g];y=Object.getOwnPropertyDescriptor(n,x);y&&y.enumerable||(p[x]=O(n[x],d-1),Object.defineProperty(p,x,{enumerable:!1}))}}return p}return"undefined"==typeof i&&(i=!0),"undefined"==typeof d&&(d=1/0),O(n,d)}function n(e){return Object.prototype.toString.call(e)}function i(e){return"object"===typeof e&&"[object Date]"===n(e)}function d(e){return"object"===typeof e&&"[object Array]"===n(e)}function l(e){return"object"===typeof e&&"[object RegExp]"===n(e)}function s(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),t}return c.clonePrototype=function(e){if(null===e)return null;var t=function(){};return t.prototype=e,new t},c.__objToStr=n,c.__isDate=i,c.__isArray=d,c.__isRegExp=l,c.__getRegExpFlags=s,c}();e.exports&&(e.exports=o)}).call(this,o("b639").Buffer)},"3c65":function(e,t,o){"use strict";var r=o("23e7"),a=o("7b0b"),c=o("07fa"),n=o("3a34"),i=o("083a"),d=o("3511"),l=1!==[].unshift(0),s=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},u=l||!s();r({target:"Array",proto:!0,arity:1,forced:u},{unshift:function(e){var t=a(this),o=c(t),r=arguments.length;if(r){d(o+r);var l=o;while(l--){var s=l+r;l in t?t[s]=t[l]:i(t,s)}for(var u=0;u<r;u++)t[u]=arguments[u]}return n(t,o+r)}})},"8b8f":function(e,t,o){"use strict";o("fcbe")},"9b2d":function(e,t,o){"use strict";o.r(t);var r=o("7a23");const a=e=>(Object(r["pushScopeId"])("data-v-146a371c"),e=e(),Object(r["popScopeId"])(),e),c={class:"header"},n=a(()=>Object(r["createElementVNode"])("span",null,"订单编号：",-1)),i=a(()=>Object(r["createElementVNode"])("span",null,"客户名称：",-1)),d=a(()=>Object(r["createElementVNode"])("span",{class:"ml-15"},"没有？快速新增：",-1)),l={class:"good-box"},s={class:"flex-none"},u=a(()=>Object(r["createElementVNode"])("span",null,"商品名称：",-1)),b={class:"search-wrapper"},m={class:"no-data"},h={class:"search-box"},O={class:"search-msg"},p=["title"],j={key:0,class:"origin"},f={class:"ml-10"},g={class:"search-input"},V={class:"table-box",ref:"table"},w={class:"flex-bc"},v=["onClick"],y={class:"w60 flex-cc flex-1"},N=["onClick"],x={class:"page-footer"};function C(e,t,o,a,C,U){const k=Object(r["resolveComponent"])("Icon"),I=Object(r["resolveComponent"])("Option"),L=Object(r["resolveComponent"])("viSelect"),G=Object(r["resolveComponent"])("viInput"),E=Object(r["resolveComponent"])("Button"),D=Object(r["resolveComponent"])("viInputNumber"),_=Object(r["resolveComponent"])("Table"),M=Object(r["resolveComponent"])("viPrint"),B=Object(r["resolveComponent"])("add-good-modal"),$=Object(r["resolveComponent"])("viLayoutUpDown");return Object(r["openBlock"])(),Object(r["createBlock"])($,{onOnMount:U.addErd},{up:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("div",c,[C.curOrderId?(Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],{key:0},[n,Object(r["createElementVNode"])("span",null,Object(r["toDisplayString"])(C.curOrderId),1),Object(r["createVNode"])(k,{type:"md-close",size:"25",onClick:U.deleteOrderId,title:"重建订单",class:"vi-link-pointer mr-10"},null,8,["onClick"])],64)):Object(r["createCommentVNode"])("",!0),i,Object(r["createVNode"])(L,{modelValue:C.curUserId,"onUpdate:modelValue":t[0]||(t[0]=e=>C.curUserId=e),ref:"user",class:"vi-width"},{default:Object(r["withCtx"])(()=>[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(C.allUsers,e=>(Object(r["openBlock"])(),Object(r["createBlock"])(I,{key:e.userId,value:e.userId},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),d,Object(r["createVNode"])(G,{modelValue:C.newUserName,"onUpdate:modelValue":t[1]||(t[1]=e=>C.newUserName=e),placeholder:"客户名称",onOnEnter:U.confirmAddUser,class:"vi-width"},null,8,["modelValue","onOnEnter"]),Object(r["createVNode"])(E,{type:"success",onClick:U.confirmAddUser,loading:C.newUserLoading,class:"ml-10"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("新增客户")]),_:1},8,["onClick","loading"])])]),down:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("div",l,[Object(r["createElementVNode"])("div",s,[u,Object(r["createVNode"])(L,{modelValue:C.curGoodId,"onUpdate:modelValue":t[2]||(t[2]=e=>C.curGoodId=e),onOnChange:U.selectGood,class:"vi-width"},{default:Object(r["withCtx"])(()=>[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(C.allGoods,e=>(Object(r["openBlock"])(),Object(r["createBlock"])(I,{key:e.goodId,value:e.goodId},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue","onOnChange"])]),Object(r["createElementVNode"])("div",b,[Object(r["withDirectives"])(Object(r["createElementVNode"])("p",m,"暂无数据",512),[[r["vShow"],!U.curGood.goodId]]),Object(r["withDirectives"])(Object(r["createElementVNode"])("div",h,[Object(r["createElementVNode"])("div",O,[Object(r["createElementVNode"])("b",{title:U.curGood.name},"商品名称："+Object(r["toDisplayString"])(U.curGood.name),9,p),Object(r["createElementVNode"])("p",null,[U.curGood.price!=U.curGood.originPrice&&U.curGood.unit==U.curGood.originUnit&&U.curGood.standard==U.curGood.originStandard?(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",j,"￥"+Object(r["toDisplayString"])(U.curGood.originPrice&&U.curGood.originPrice.toFixed(2)),1)):Object(r["createCommentVNode"])("",!0),Object(r["createTextVNode"])(" ￥"+Object(r["toDisplayString"])(U.curGood.price&&U.curGood.price.toFixed(2))+" / "+Object(r["toDisplayString"])(U.curGood.unit)+" ",1),Object(r["createElementVNode"])("span",f,Object(r["toDisplayString"])(U.curGood.standard),1)])]),Object(r["withDirectives"])(Object(r["createElementVNode"])("div",g,[Object(r["createVNode"])(D,{ref:"count",modelValue:U.curGood.count,"onUpdate:modelValue":t[3]||(t[3]=e=>U.curGood.count=e),placeholder:"数量",integer:"",min:0,onOnEnter:U.confirmAdd},null,8,["modelValue","onOnEnter"]),Object(r["createVNode"])(E,{onClick:t[4]||(t[4]=e=>C.curGoodId=""),class:"ml-10"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("取消")]),_:1}),Object(r["createVNode"])(E,{type:"primary",onClick:U.confirmAdd},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("增加")]),_:1},8,["onClick"])],512),[[r["vShow"],U.curGood.goodId]])],512),[[r["vShow"],U.curGood.goodId]])])]),Object(r["createElementVNode"])("div",V,[Object(r["createVNode"])(_,{columns:C.columns,data:C.goodList,height:C.height,stripe:""},{standard:Object(r["withCtx"])(({index:e})=>[Object(r["createVNode"])(G,{modelValue:C.goodList[e].standard,"onUpdate:modelValue":t=>C.goodList[e].standard=t,placeholder:"规格",class:"w100"},null,8,["modelValue","onUpdate:modelValue"])]),unit:Object(r["withCtx"])(({index:e})=>[Object(r["createVNode"])(G,{modelValue:C.goodList[e].unit,"onUpdate:modelValue":t=>C.goodList[e].unit=t,placeholder:"单位",class:"w100"},null,8,["modelValue","onUpdate:modelValue"])]),price:Object(r["withCtx"])(({index:e})=>[Object(r["createElementVNode"])("div",w,[C.goodList[e].price!=C.goodList[e].originPrice&&C.goodList[e].unit==C.goodList[e].originUnit&&C.goodList[e].standard==C.goodList[e].originStandard?(Object(r["openBlock"])(),Object(r["createElementBlock"])("p",{key:0,onClick:t=>C.goodList[e].price=C.goodList[e].originPrice,class:"origin w40 pointer"},[Object(r["createTextVNode"])("￥ "),Object(r["createElementVNode"])("span",null,Object(r["toDisplayString"])(C.goodList[e].originPrice),1)],8,v)):Object(r["createCommentVNode"])("",!0),Object(r["createElementVNode"])("div",y,[Object(r["createTextVNode"])(" ￥ "),Object(r["createVNode"])(D,{modelValue:C.goodList[e].price,"onUpdate:modelValue":t=>C.goodList[e].price=t,min:0,step:.5},null,8,["modelValue","onUpdate:modelValue"])])])]),count:Object(r["withCtx"])(({index:e})=>[Object(r["createVNode"])(D,{modelValue:C.goodList[e].count,"onUpdate:modelValue":t=>C.goodList[e].count=t,integer:"",min:0},null,8,["modelValue","onUpdate:modelValue"])]),remarks:Object(r["withCtx"])(({index:e})=>[Object(r["createVNode"])(G,{modelValue:C.goodList[e].remarks,"onUpdate:modelValue":t=>C.goodList[e].remarks=t,placeholder:"备注",class:"w100"},null,8,["modelValue","onUpdate:modelValue"])]),operate:Object(r["withCtx"])(({index:e})=>[Object(r["createElementVNode"])("a",{onClick:t=>U.deleteGood(e),class:"vi-red-pointer"},"删除",8,N)]),_:1},8,["columns","data","height"])],512)]),footer:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("div",x,[Object(r["createElementVNode"])("div",null,[Object(r["createVNode"])(E,{type:"primary",onClick:t[5]||(t[5]=e=>C.showGoodModal=!0)},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("新增商品")]),_:1}),Object(r["createVNode"])(E,{onClick:t[6]||(t[6]=e=>{C.goodList=new Array(90).fill().map((e,t)=>({name:"物品"+(t+1),standard:"规格"+(t+1),unit:"单位"+(t+1),count:parseInt(100*Math.random()),price:+parseFloat(100*Math.random()).toFixed(2)}))})},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("生成随机订单")]),_:1})]),Object(r["createElementVNode"])("p",null,"总计：￥"+Object(r["toDisplayString"])(C.totalPrice),1),Object(r["createElementVNode"])("div",null,[Object(r["createVNode"])(E,{type:"error",onClick:t[7]||(t[7]=e=>U.clearAll())},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("清空商品")]),_:1}),Object(r["createVNode"])(E,{onClick:t[8]||(t[8]=e=>U.saveOrder("1")),loading:C.saveLoading},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("保存草稿")]),_:1},8,["loading"]),Object(r["createVNode"])(M,{list:C.goodList,total:C.totalPrice,"user-data":U.curUser,onPrint:t[9]||(t[9]=e=>U.saveOrder("2"))},null,8,["list","total","user-data"])])]),Object(r["createVNode"])(B,{modelValue:C.showGoodModal,"onUpdate:modelValue":t[10]||(t[10]=e=>C.showGoodModal=e),showCount:"",onSave:U.saveGood},null,8,["modelValue","onSave"])]),_:1},8,["onOnMount"])}var U=o("274c"),k=(o("13d5"),o("3c65"),o("eec4")),I=o.n(k),L=o("eeb9"),G=o("2af9"),E=o("1f38"),D={name:"cashierMng",components:{Table:U["a"],viPrint:G["i"],addGoodModal:E["a"]},data(){return{erd:null,allGoods:[],allUsers:[],curGoodId:"",curUserId:"",curOrderId:"",goodList:[],height:0,columns:[{title:"序号",type:"index",align:"center",width:80},{title:"名称",key:"name",align:"center",minWidth:120},{title:"规格",slot:"standard",align:"center",width:100},{title:"单位",slot:"unit",align:"center",width:80},{title:"数量",slot:"count",align:"center",width:90},{title:"单价",slot:"price",align:"center",minWidth:150},{title:"备注",slot:"remarks",align:"center",minWidth:100},{title:"操作",slot:"operate",align:"center",width:100}],totalPrice:"0.00",showGoodModal:!1,printLoading:!1,saveLoading:!1,newUserName:"",newUserLoading:!1}},watch:{goodList:{deep:!0,handler(e){this.totalPrice=(e.reduce((e,t)=>e+ +(t.count*t.price).toFixed(2),0)||0).toFixed(2)}},$route:{deep:!0,immediate:!0,handler({name:e}){if("cashierMng"!==e)return;const{params:t={}}=history.state;Object.keys(t).length&&(this.goodList.length?this.$Modal.confirm({title:"编辑确认",content:"页面存在草稿数据，是否删除草稿，显示订单内容",onOk:()=>{this.initData(t)}}):this.initData(t))}},curUserId(e){this.changeUser(e)}},computed:{curUser(){return this.allUsers.find(e=>e.userId==this.curUserId)||{}},curGood(){const e=this.allGoods.find(e=>e.goodId==this.curGoodId)||{};return e.count=1,e}},methods:{initData(e){this.curUserId=e.userId?+e.userId:"",this.curOrderId=e.orderId||"",this.$nextTick(()=>{this.goodList=JSON.parse(e.goodList||"[]").map(t=>("copy"===e.type&&(t.price=t.originPrice),t)),history.state.params={}})},async printOrder(){try{this.printLoading=!0;const{returnCode:e,data:t}=await Object(L["C"])({list:this.goodList,total:this.totalPrice})||{};0===e&&t&&this.$Message.success("打印成功")}catch(e){this.$Message.error("打印失败："+(e.message||e))}finally{this.printLoading=!1}},deleteOrderId(){this.$Modal.confirm({title:"重建订单",content:"是否确认重建订单？",onOk:()=>{this.curOrderId=""}})},clearAll(e){e?(this.goodList=[],this.curGoodId=""):this.$Modal.confirm({title:"清空商品",content:"是否确认清空所有商品？",onOk:()=>{this.goodList=[],this.curGoodId=""}})},selectGood(){this.$nextTick(()=>{this.$refs.count.focus()})},confirmAdd(){if(!this.curGood.count)return this.$Message.info("请输入商品数量");const e=this.goodList.findIndex(e=>e.goodId===this.curGood.goodId);-1===e?this.goodList.unshift({...this.curGood}):this.goodList[e].count+=this.curGood.count,this.curGoodId=""},deleteGood(e){this.$Modal.confirm({title:"移除商品",content:"是否确认移除该商品？",onOk:()=>{this.goodList.splice(e,1)}})},async saveOrder(e){if("1"==e&&!this.curUserId)return this.$Message.info("请填写客户名称");if("2"!=e||this.curUserId)try{this.saveLoading=!0;const{returnCode:t,data:o}=await Object(L["I"])({orderId:this.curOrderId||void 0,userId:this.curUserId,status:e,total:this.totalPrice,detail:JSON.stringify(this.goodList)})||{};0===t&&o&&(this.$Message.success("保存成功"),this.$EventBus.$emit("saveOrder"),this.clearAll(!0),this.curUserId="",this.curOrderId="",this.getUsersList())}catch(t){this.$Message.error("保存草稿失败："+(t.message||t))}finally{this.saveLoading=!1}},changeUser(){const{special:e={}}=this.curUser;this.allGoods=this.allGoods.map(t=>(t.unit===t.originUnit&&t.standard===t.originStandard?t.price=e[t.goodId]||t.originPrice:t.price=t.originPrice,t)),this.goodList=this.goodList.map(t=>(t.unit===t.originUnit&&t.standard===t.originStandard?t.price=e[t.goodId]||t.originPrice:t.price=t.originPrice,t))},async confirmAddUser(){if(this.newUserName)try{this.newUserLoading=!0;const{data:e}=await Object(L["O"])({name:this.newUserName})||{};if(e)return this.$Message.error("该客户名称已存在"),this.curUserId=e.userId,void(this.newUserName="");const{data:t}=await Object(L["K"])({name:this.newUserName})||{};t&&(this.$Message.success("新增成功"),this.curUserId=t.userId,this.newUserName="",this.getUsersList())}catch(e){this.$Message.error("新增客户失败："+(e.message||e))}finally{this.newUserLoading=!1}else this.$Message.info("请输入要新增的客户名称")},saveGood(e){this.goodList.unshift({...e}),this.getGoodsList()},async getGoodsList(){try{const{returnCode:e,data:t}=await Object(L["n"])()||{};0===e&&(this.allGoods=t&&t.map(e=>(e.originPrice=e.price||0,e.unit=e.unit||"",e.originUnit=e.unit||"",e.standard=e.standard||"",e.originStandard=e.standard||"",e))||[])}catch(e){this.$Message.error("获取商品字典失败："+(e.message||e))}},async getUsersList(){try{const{returnCode:e,data:t}=await Object(L["o"])()||{};if(0===e&&(this.allUsers=t&&t.map(e=>{const t={};return e.special.forEach(e=>{t[e.goodId]=+e.price}),e.special=t,e})||[],this.curUserId)){const e=t.find(e=>e.userId===this.curUserId)||{};this.$refs.user.values=[{value:this.curUserId,label:e.name,tag:null}]}}catch(e){this.$Message.error("获取客户列表失败："+(e.message||e))}},addErd(){this.erd=I()(),this.erd.listenTo(this.$refs.table,()=>{this.height=this.$refs.table.offsetHeight})}},activated(){this.getGoodsList(),this.getUsersList()},beforeUnmount(){this.erd.uninstall(this.$refs.table)}},_=(o("8b8f"),o("6b0d")),M=o.n(_);const B=M()(D,[["render",C],["__scopeId","data-v-146a371c"]]);t["default"]=B},fcbe:function(e,t,o){}}]);