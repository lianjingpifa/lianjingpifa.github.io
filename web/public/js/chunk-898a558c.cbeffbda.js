(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-898a558c"],{"02e6":function(e,t,a){},8451:function(e,t,a){"use strict";var l=a("ca5c");t["a"]=l["a"]},"9ed6":function(e,t,a){"use strict";a.r(t);var l=a("8451"),o=a("5201"),c=(a("d9e2"),a("7a23")),r=a("ed08"),n=a("eeb9"),u=a("6605");const s=e=>(Object(c["pushScopeId"])("data-v-6d424e04"),e=e(),Object(c["popScopeId"])(),e),d={class:"login"},i={key:0,class:"login-content"},b=s(()=>Object(c["createElementVNode"])("p",{class:"login-name"},"登录",-1)),m={class:"login-tip"},p={key:1,class:"login-content"},O=s(()=>Object(c["createElementVNode"])("p",{class:"login-name"},"注册",-1)),j={key:2,class:"login-content"},h=s(()=>Object(c["createElementVNode"])("p",{class:"login-name"},"重置密码",-1));var V={__name:"index",setup(e){const t=Object(u["c"])(),a=Object(u["d"])(),s=Object(c["inject"])("$Message",()=>{}),V=Object(c["ref"])(),v=Object(c["ref"])({});function f(e,t,a){t!==v.value.password?a(new Error("两次输入密码不一致")):a()}const w={userName:{required:!0,message:"请输入用户名"},phone:{required:!0,message:"请输入联系电话"},password:{required:!0,message:"请输入密码"},confirmPassword:[{required:!0,message:"请输入密码"},{validator:f,trigger:"blur"}]},k=Object(c["computed"])(()=>t.query.wxid),N=Object(c["ref"])("1");function C(){V.value.validate(async e=>{if(!e)return s.error("数据校验不通过");try{await Object(r["h"])({...v.value,loginType:N.value}),t.query.realName&&a.replace({name:t.query.realName,query:JSON.parse(t.query.query),params:JSON.parse(t.query.params)})}catch(l){s.error("登录失败："+(l.message||l))}})}const x=Object(c["ref"])(!1);function g(){V.value.validate(async e=>{if(!e)return s.error("数据校验不通过");try{o["a"].show();const{data:e}=await Object(n["D"])({name:t.query.wxid,wxid:t.query.wxid,nickName:v.value.nickName||t.query.wxid,phone:v.value.phone,remarks:v.value.remarks,password:Object(r["k"])(v.value.password),status:"2",power:"99"})||{};e&&(s.success("注册成功"),x.value=!1)}catch(a){s.error("注册失败："+(a.message||a))}finally{o["a"].hide()}})}const y=Object(c["ref"])(!1);function B(){V.value.validate(async e=>{if(!e)return s.error("数据校验不通过");try{o["a"].show();const{data:e}=await Object(n["E"])({wxid:t.query.wxid,phone:v.value.phone,password:Object(r["k"])(v.value.password)})||{};e&&(s.success("操作成功"),y.value=!1)}catch(a){s.error("操作失败："+(a.message||a))}finally{o["a"].hide()}})}const I=Object(c["ref"])(!1),E=Object(c["ref"])(!1);function _(e,t){t?localStorage.setItem(e,"1"):(localStorage.removeItem(e),"remember"===e&&localStorage.removeItem("token"))}return Object(c["onMounted"])(()=>{I.value="1"===localStorage.getItem("remember"),E.value="1"===localStorage.getItem("autoLogin");const e=sessionStorage.getItem("token")||localStorage.getItem("token");if(I.value&&e){var a;const[t,l]=null===(a=Object(r["c"])(e))||void 0===a?void 0:a.split("/");t&&l&&(v.value={userName:t,password:l})}t.query.wxid?(N.value="1",v.value.wxid=t.query.wxid,sessionStorage.setItem("wxid",t.query.wxid)):N.value="2",E.value&&e&&!t.query.from&&Object(c["nextTick"])(()=>{C()})}),(e,t)=>{const a=Object(c["resolveComponent"])("Radio"),o=Object(c["resolveComponent"])("RadioGroup"),r=Object(c["resolveComponent"])("FormItem"),n=Object(c["resolveComponent"])("viInput"),u=Object(c["resolveComponent"])("Form"),s=Object(c["resolveComponent"])("Button");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",d,[x.value||y.value?x.value?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",p,[O,Object(c["createVNode"])(u,{ref_key:"form",ref:V,model:v.value,rules:w,"label-width":86},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(r,{label:"用户名:",prop:"nickName"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(n,{modelValue:v.value.nickName,"onUpdate:modelValue":t[11]||(t[11]=e=>v.value.nickName=e)},null,8,["modelValue"])]),_:1}),Object(c["createVNode"])(r,{label:"联系电话:",prop:"phone"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(n,{modelValue:v.value.phone,"onUpdate:modelValue":t[12]||(t[12]=e=>v.value.phone=e),placeholder:"用于重置密码"},null,8,["modelValue"])]),_:1}),Object(c["createVNode"])(r,{label:"备注:",prop:"remarks"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(n,{modelValue:v.value.remarks,"onUpdate:modelValue":t[13]||(t[13]=e=>v.value.remarks=e),type:"textarea",placeholder:"用于商家审批"},null,8,["modelValue"])]),_:1}),Object(c["createVNode"])(r,{label:"密码:",prop:"password"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(n,{modelValue:v.value.password,"onUpdate:modelValue":t[14]||(t[14]=e=>v.value.password=e),type:"password",placeholder:"请输入密码",onOnEnter:C},null,8,["modelValue"])]),_:1}),Object(c["createVNode"])(r,{label:"确认密码:",prop:"confirmPassword"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(n,{modelValue:v.value.confirmPassword,"onUpdate:modelValue":t[15]||(t[15]=e=>v.value.confirmPassword=e),type:"password",placeholder:"请确认密码",onOnEnter:C},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),Object(c["createVNode"])(s,{onClick:g,long:"",type:"success"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("注册")]),_:1}),Object(c["createElementVNode"])("p",{onClick:t[16]||(t[16]=e=>x.value=!1),class:"vi-link-pointer tc mt-10"},"已有账号，点击登录")])):y.value?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",j,[h,Object(c["createVNode"])(u,{ref_key:"form",ref:V,model:v.value,rules:w,"label-width":86},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(r,{label:"联系电话:",prop:"phone"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(n,{modelValue:v.value.phone,"onUpdate:modelValue":t[17]||(t[17]=e=>v.value.phone=e)},null,8,["modelValue"])]),_:1}),Object(c["createVNode"])(r,{label:"新密码:",prop:"password"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(n,{modelValue:v.value.password,"onUpdate:modelValue":t[18]||(t[18]=e=>v.value.password=e),type:"password",placeholder:"请输入新密码",onOnEnter:C},null,8,["modelValue"])]),_:1}),Object(c["createVNode"])(r,{label:"确认密码:",prop:"confirmPassword"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(n,{modelValue:v.value.confirmPassword,"onUpdate:modelValue":t[19]||(t[19]=e=>v.value.confirmPassword=e),type:"password",placeholder:"请确认密码",onOnEnter:C},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),Object(c["createVNode"])(s,{onClick:B,long:"",type:"success"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("重置密码")]),_:1}),Object(c["createElementVNode"])("p",{onClick:t[20]||(t[20]=e=>y.value=!1),class:"vi-link-pointer tc mt-10"},"点击登录")])):Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",i,[b,Object(c["createVNode"])(u,{ref_key:"form",ref:V,model:v.value,rules:w,"label-width":76},{default:Object(c["withCtx"])(()=>[k.value?(Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],{key:0},[Object(c["createVNode"])(r,{label:"登陆方式:"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(o,{modelValue:N.value,"onUpdate:modelValue":t[0]||(t[0]=e=>N.value=e)},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(a,{label:"1"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("微信号")]),_:1}),Object(c["createVNode"])(a,{label:"2"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("昵称")]),_:1})]),_:1},8,["modelValue"])]),_:1}),"1"===N.value?(Object(c["openBlock"])(),Object(c["createBlock"])(r,{key:0,label:"微信号:",prop:"wxid"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(n,{modelValue:v.value.wxid,"onUpdate:modelValue":t[1]||(t[1]=e=>v.value.wxid=e),disabled:""},null,8,["modelValue"])]),_:1})):(Object(c["openBlock"])(),Object(c["createBlock"])(r,{key:1,label:"用户名:",prop:"userName"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(n,{modelValue:v.value.userName,"onUpdate:modelValue":t[2]||(t[2]=e=>v.value.userName=e),placeholder:"请输入用户名",onOnEnter:C},null,8,["modelValue"])]),_:1}))],64)):(Object(c["openBlock"])(),Object(c["createBlock"])(r,{key:1,label:"用户名:",prop:"userName"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(n,{modelValue:v.value.userName,"onUpdate:modelValue":t[3]||(t[3]=e=>v.value.userName=e),placeholder:"请输入用户名",onOnEnter:C},null,8,["modelValue"])]),_:1})),Object(c["createVNode"])(r,{label:"密码:",prop:"password"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(n,{modelValue:v.value.password,"onUpdate:modelValue":t[4]||(t[4]=e=>v.value.password=e),type:"password",placeholder:"请输入密码",onOnEnter:C},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),k.value?(Object(c["openBlock"])(),Object(c["createElementBlock"])("p",{key:0,onClick:t[5]||(t[5]=e=>y.value=!0),class:"vi-link-pointer fr"},"忘记密码？")):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("div",m,[Object(c["createVNode"])(Object(c["unref"])(l["a"]),{modelValue:I.value,"onUpdate:modelValue":t[6]||(t[6]=e=>I.value=e),onOnChange:t[7]||(t[7]=e=>_("remember",e))},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("记住密码")]),_:1},8,["modelValue"]),Object(c["createVNode"])(Object(c["unref"])(l["a"]),{modelValue:E.value,"onUpdate:modelValue":t[8]||(t[8]=e=>E.value=e),onOnChange:t[9]||(t[9]=e=>_("autoLogin",e))},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("自动登录")]),_:1},8,["modelValue"])]),Object(c["createVNode"])(s,{onClick:C,long:"",type:"success"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("登录")]),_:1}),k.value?(Object(c["openBlock"])(),Object(c["createElementBlock"])("p",{key:1,onClick:t[10]||(t[10]=e=>x.value=!0),class:"vi-link-pointer tc mt-10"},"没有账号？点击注册")):Object(c["createCommentVNode"])("",!0)]))])}}},v=(a("d52e"),a("6b0d")),f=a.n(v);const w=f()(V,[["__scopeId","data-v-6d424e04"]]);t["default"]=w},ca5c:function(e,t,a){"use strict";var l=a("7a23");const o=["disabled","value","name"],c=["disabled","checked","name"],r={key:0,class:"ivu-checkbox-label-text"};function n(e,t,a,n,u,s){return Object(l["openBlock"])(),Object(l["createElementBlock"])("label",{class:Object(l["normalizeClass"])(s.wrapClasses)},[Object(l["createElementVNode"])("span",{class:Object(l["normalizeClass"])(s.checkboxClasses)},[Object(l["createElementVNode"])("span",{class:Object(l["normalizeClass"])(s.innerClasses)},null,2),s.group?Object(l["withDirectives"])((Object(l["openBlock"])(),Object(l["createElementBlock"])("input",{key:0,type:"checkbox",class:Object(l["normalizeClass"])(s.inputClasses),disabled:e.itemDisabled,value:a.label,"onUpdate:modelValue":t[0]||(t[0]=e=>u.model=e),name:a.name,onChange:t[1]||(t[1]=(...e)=>s.change&&s.change(...e)),onFocus:t[2]||(t[2]=(...e)=>s.onFocus&&s.onFocus(...e)),onBlur:t[3]||(t[3]=(...e)=>s.onBlur&&s.onBlur(...e))},null,42,o)),[[l["vModelCheckbox"],u.model]]):(Object(l["openBlock"])(),Object(l["createElementBlock"])("input",{key:1,type:"checkbox",class:Object(l["normalizeClass"])(s.inputClasses),disabled:e.itemDisabled,checked:s.currentValue,name:a.name,onChange:t[4]||(t[4]=(...e)=>s.change&&s.change(...e)),onFocus:t[5]||(t[5]=(...e)=>s.onFocus&&s.onFocus(...e)),onBlur:t[6]||(t[6]=(...e)=>s.onBlur&&s.onBlur(...e))},null,42,c))],2),u.showSlot?(Object(l["openBlock"])(),Object(l["createElementBlock"])("span",r,[Object(l["renderSlot"])(e.$slots,"default",{},()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(a.label),1)])])):Object(l["createCommentVNode"])("",!0)],2)}var u=a("694c"),s=a("9836");const d="ivu-checkbox";var i={name:"Checkbox",mixins:[s["a"]],emits:["update:modelValue","on-change"],inject:{CheckboxGroupInstance:{default:null}},props:{disabled:{type:Boolean,default:!1},modelValue:{type:[String,Number,Boolean],default:!1},trueValue:{type:[String,Number,Boolean],default:!0},falseValue:{type:[String,Number,Boolean],default:!1},label:{type:[String,Number,Boolean]},indeterminate:{type:Boolean,default:!1},size:{validator(e){return Object(u["h"])(e,["small","large","default"])},default(){const e=Object(l["getCurrentInstance"])().appContext.config.globalProperties;return e.$VIEWUI&&""!==e.$VIEWUI.size?e.$VIEWUI.size:"default"}},name:{type:String},border:{type:Boolean,default:!1}},data(){return{showSlot:!0,focusInner:!1,model:[]}},computed:{wrapClasses(){return[d+"-wrapper",{[d+"-group-item"]:this.group,[d+"-wrapper-checked"]:this.currentValue,[d+"-wrapper-disabled"]:this.itemDisabled,[`${d}-${this.size}`]:!!this.size,[d+"-border"]:this.border}]},checkboxClasses(){return[""+d,{[d+"-checked"]:this.currentValue,[d+"-disabled"]:this.itemDisabled,[d+"-indeterminate"]:this.indeterminate}]},innerClasses(){return[d+"-inner",{[d+"-focus"]:this.focusInner}]},inputClasses(){return d+"-input"},currentValue(){return this.CheckboxGroupInstance?this.CheckboxGroupInstance.modelValue.indexOf(this.label)>=0:this.modelValue===this.trueValue},group(){return!!this.CheckboxGroupInstance}},mounted(){this.CheckboxGroupInstance||(this.showSlot=void 0!==this.$slots.default)},methods:{change(e){if(this.itemDisabled)return!1;const t=e.target.checked,a=t?this.trueValue:this.falseValue;this.$emit("update:modelValue",a),this.group?this.CheckboxGroupInstance.change(this.model):(this.$emit("on-change",a),this.handleFormItemChange("change",a))},onBlur(){this.focusInner=!1},onFocus(){this.focusInner=!0}},watch:{modelValue(e){if(e!==this.trueValue&&e!==this.falseValue)throw"Value should be trueValue or falseValue."},"CheckboxGroupInstance.modelValue":{handler(e){this.model=e||[]},immediate:!0}}},b=a("6b0d"),m=a.n(b);const p=m()(i,[["render",n]]);t["a"]=p},d52e:function(e,t,a){"use strict";a("02e6")}}]);