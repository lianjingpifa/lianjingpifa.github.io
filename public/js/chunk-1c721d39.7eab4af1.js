(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c721d39"],{8451:function(e,t,a){"use strict";var o=a("ca5c");t["a"]=o["a"]},"9ed6":function(e,t,a){"use strict";a.r(t);var o=a("8451"),l=a("7a23"),c=(a("d9e2"),a("eeb9")),r=a("ed08"),n=a("6605"),s={__name:"register",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue","on-submit"],setup(e,{emit:t}){const a=e,o=Object(n["c"])(),s=Object(l["inject"])("$Message",()=>{}),u=Object(l["ref"])({}),d=Object(l["ref"])();function i(e,t,a){t!==u.value.password?a(new Error("两次输入密码不一致")):a()}const m={nickName:{required:!0,message:"请输入用户名"},password:{required:!0,message:"请输入密码"},confirmPassword:[{required:!0,message:"请输入密码"},{validator:i,trigger:"blur"}]},b=Object(l["computed"])({get(){return a.modelValue},set(e){t("update:modelValue",e),e||d.value.resetFields()}}),p=Object(l["ref"])(!1);function O(){d.value.validate(async e=>{e||s.error("数据校验不通过");try{p.value=!0;const{data:e}=await Object(c["G"])({name:o.query.wxid,wxid:o.query.wxid,nickName:u.value.nickName||o.query.wxid,remarks:u.value.remarks,password:Object(r["l"])(u.value.password),status:"2",power:"99"})||{};e&&(s.success("注册成功"),t("on-submit",{...u.value}),b.value=!1)}catch(a){s.error("注册失败："+(a.message||a))}finally{p.value=!1}})}return(e,t)=>{const a=Object(l["resolveComponent"])("viInput"),o=Object(l["resolveComponent"])("FormItem"),c=Object(l["resolveComponent"])("Form"),r=Object(l["resolveComponent"])("Button"),n=Object(l["resolveComponent"])("viModal");return Object(l["openBlock"])(),Object(l["createBlock"])(n,{modelValue:b.value,"onUpdate:modelValue":t[5]||(t[5]=e=>b.value=e),title:"注册"},{footer:Object(l["withCtx"])(()=>[Object(l["createVNode"])(r,{onClick:t[4]||(t[4]=e=>b.value=!1)},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])("取消")]),_:1}),Object(l["createVNode"])(r,{type:"primary",onClick:O,loading:p.value},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])("确定")]),_:1},8,["loading"])]),default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(c,{ref_key:"formRef",ref:d,model:u.value,rules:m,"label-width":86,onKeydown:Object(l["withKeys"])(O,["enter"]),class:"vi-modal-content"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(o,{label:"用户名:",prop:"nickName"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(a,{modelValue:u.value.nickName,"onUpdate:modelValue":t[0]||(t[0]=e=>u.value.nickName=e)},null,8,["modelValue"])]),_:1}),Object(l["createVNode"])(o,{label:"备注:",prop:"remarks"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(a,{modelValue:u.value.remarks,"onUpdate:modelValue":t[1]||(t[1]=e=>u.value.remarks=e),type:"textarea",placeholder:"用于商家审批"},null,8,["modelValue"])]),_:1}),Object(l["createVNode"])(o,{label:"密码:",prop:"password"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(a,{modelValue:u.value.password,"onUpdate:modelValue":t[2]||(t[2]=e=>u.value.password=e),type:"password",placeholder:"请输入密码"},null,8,["modelValue"])]),_:1}),Object(l["createVNode"])(o,{label:"确认密码:",prop:"confirmPassword"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(a,{modelValue:u.value.confirmPassword,"onUpdate:modelValue":t[3]||(t[3]=e=>u.value.confirmPassword=e),type:"password",placeholder:"请确认密码"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","onKeydown"])]),_:1},8,["modelValue"])}}};const u=s;var d=u;const i=e=>(Object(l["pushScopeId"])("data-v-aed557e4"),e=e(),Object(l["popScopeId"])(),e),m={class:"login"},b={class:"login-content"},p=i(()=>Object(l["createElementVNode"])("p",{class:"login-name"},"登录",-1)),O={class:"login-tip"};var j={__name:"index",setup(e){const t=Object(n["c"])(),a=Object(n["d"])(),s=Object(l["inject"])("$Message",()=>{}),u=Object(l["inject"])("$Modal",()=>{}),i={userName:{required:!0,message:"请输入用户名"},password:{required:!0,message:"请输入密码"}},j=Object(l["computed"])(()=>t.query.wxid),h=Object(l["ref"])(),v=Object(l["ref"])({}),V=Object(l["ref"])(""),f=Object(l["ref"])(!1);function w(){h.value.validate(async e=>{if(!e)return s.error("数据校验不通过");try{f.value=!0;let e=v.value.password;V.value!==v.value.password&&(e=Object(r["l"])(v.value.password));const o=sessionStorage.getItem("wxid")||void 0,{returnCode:l,data:n}=await Object(c["E"])({wxid:o,userName:v.value.userName,password:e})||{};0===l&&(Object(r["n"])({...v.value,password:e},n),a.replace({name:t.query.realName||"home",query:JSON.parse(t.query.query||"{}"),params:JSON.parse(t.query.params||"{}")}))}catch(o){s.error("登录失败："+(o.message||o))}finally{f.value=!1}})}const k=Object(l["ref"])(!1);function g(e){v.value={...v.value,...e,userName:e.nickName||""}}function C(){u.info({title:"忘记密码？",content:"通知店家重置密码"})}const N=Object(l["ref"])(!1),x=Object(l["ref"])(!1);function y(e,t){t?localStorage.setItem(e,"1"):(localStorage.removeItem(e),"remember"===e&&localStorage.removeItem("token"))}return Object(l["onMounted"])(()=>{window.document.title="登录",N.value="1"===localStorage.getItem("remember"),x.value="1"===localStorage.getItem("autoLogin");const e=sessionStorage.getItem("token")||localStorage.getItem("token");if(N.value&&e){var a;const[t,o]=null===(a=Object(r["d"])(e))||void 0===a?void 0:a.split("/");t&&o&&(v.value={userName:t,password:o},V.value=o)}t.query.wxid&&sessionStorage.setItem("wxid",t.query.wxid),x.value&&e&&!t.query.from&&Object(l["nextTick"])(()=>{Object(c["E"])()})}),(e,t)=>{const a=Object(l["resolveComponent"])("Spin"),c=Object(l["resolveComponent"])("viInput"),r=Object(l["resolveComponent"])("FormItem"),n=Object(l["resolveComponent"])("Form"),s=Object(l["resolveComponent"])("Button");return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",m,[Object(l["createVNode"])(a,{fix:"",show:f.value},null,8,["show"]),Object(l["createElementVNode"])("div",b,[p,Object(l["createVNode"])(n,{ref_key:"formRef",ref:h,model:v.value,rules:i,"label-width":76,onKeydown:Object(l["withKeys"])(w,["enter"])},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(r,{label:"用户名:",prop:"userName"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(c,{modelValue:v.value.userName,"onUpdate:modelValue":t[0]||(t[0]=e=>v.value.userName=e),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),Object(l["createVNode"])(r,{label:"密码:",prop:"password"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(c,{modelValue:v.value.password,"onUpdate:modelValue":t[1]||(t[1]=e=>v.value.password=e),type:"password",placeholder:"请输入密码"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","onKeydown"]),j.value?(Object(l["openBlock"])(),Object(l["createElementBlock"])("p",{key:0,onClick:C,class:"vi-link-pointer fr"},"忘记密码？")):Object(l["createCommentVNode"])("",!0),Object(l["createElementVNode"])("div",O,[Object(l["createVNode"])(Object(l["unref"])(o["a"]),{modelValue:N.value,"onUpdate:modelValue":t[2]||(t[2]=e=>N.value=e),onOnChange:t[3]||(t[3]=e=>y("remember",e))},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])("记住密码")]),_:1},8,["modelValue"]),Object(l["createVNode"])(Object(l["unref"])(o["a"]),{modelValue:x.value,"onUpdate:modelValue":t[4]||(t[4]=e=>x.value=e),onOnChange:t[5]||(t[5]=e=>y("autoLogin",e))},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])("自动登录")]),_:1},8,["modelValue"])]),Object(l["createVNode"])(s,{onClick:w,long:"",type:"success"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])("登录")]),_:1}),j.value?(Object(l["openBlock"])(),Object(l["createElementBlock"])("p",{key:1,onClick:t[6]||(t[6]=e=>k.value=!0),class:"vi-link-pointer tc mt-10"},"没有账号？点击注册")):Object(l["createCommentVNode"])("",!0),Object(l["createVNode"])(d,{modelValue:k.value,"onUpdate:modelValue":t[7]||(t[7]=e=>k.value=e),onOnSubmit:g},null,8,["modelValue"])])])}}},h=(a("f088"),a("6b0d")),v=a.n(h);const V=v()(j,[["__scopeId","data-v-aed557e4"]]);t["default"]=V},ca5c:function(e,t,a){"use strict";var o=a("7a23");const l=["disabled","value","name"],c=["disabled","checked","name"],r={key:0,class:"ivu-checkbox-label-text"};function n(e,t,a,n,s,u){return Object(o["openBlock"])(),Object(o["createElementBlock"])("label",{class:Object(o["normalizeClass"])(u.wrapClasses)},[Object(o["createElementVNode"])("span",{class:Object(o["normalizeClass"])(u.checkboxClasses)},[Object(o["createElementVNode"])("span",{class:Object(o["normalizeClass"])(u.innerClasses)},null,2),u.group?Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createElementBlock"])("input",{key:0,type:"checkbox",class:Object(o["normalizeClass"])(u.inputClasses),disabled:e.itemDisabled,value:a.label,"onUpdate:modelValue":t[0]||(t[0]=e=>s.model=e),name:a.name,onChange:t[1]||(t[1]=(...e)=>u.change&&u.change(...e)),onFocus:t[2]||(t[2]=(...e)=>u.onFocus&&u.onFocus(...e)),onBlur:t[3]||(t[3]=(...e)=>u.onBlur&&u.onBlur(...e))},null,42,l)),[[o["vModelCheckbox"],s.model]]):(Object(o["openBlock"])(),Object(o["createElementBlock"])("input",{key:1,type:"checkbox",class:Object(o["normalizeClass"])(u.inputClasses),disabled:e.itemDisabled,checked:u.currentValue,name:a.name,onChange:t[4]||(t[4]=(...e)=>u.change&&u.change(...e)),onFocus:t[5]||(t[5]=(...e)=>u.onFocus&&u.onFocus(...e)),onBlur:t[6]||(t[6]=(...e)=>u.onBlur&&u.onBlur(...e))},null,42,c))],2),s.showSlot?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",r,[Object(o["renderSlot"])(e.$slots,"default",{},()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(a.label),1)])])):Object(o["createCommentVNode"])("",!0)],2)}var s=a("694c"),u=a("9836");const d="ivu-checkbox";var i={name:"Checkbox",mixins:[u["a"]],emits:["update:modelValue","on-change"],inject:{CheckboxGroupInstance:{default:null}},props:{disabled:{type:Boolean,default:!1},modelValue:{type:[String,Number,Boolean],default:!1},trueValue:{type:[String,Number,Boolean],default:!0},falseValue:{type:[String,Number,Boolean],default:!1},label:{type:[String,Number,Boolean]},indeterminate:{type:Boolean,default:!1},size:{validator(e){return Object(s["h"])(e,["small","large","default"])},default(){const e=Object(o["getCurrentInstance"])().appContext.config.globalProperties;return e.$VIEWUI&&""!==e.$VIEWUI.size?e.$VIEWUI.size:"default"}},name:{type:String},border:{type:Boolean,default:!1}},data(){return{showSlot:!0,focusInner:!1,model:[]}},computed:{wrapClasses(){return[d+"-wrapper",{[d+"-group-item"]:this.group,[d+"-wrapper-checked"]:this.currentValue,[d+"-wrapper-disabled"]:this.itemDisabled,[`${d}-${this.size}`]:!!this.size,[d+"-border"]:this.border}]},checkboxClasses(){return[""+d,{[d+"-checked"]:this.currentValue,[d+"-disabled"]:this.itemDisabled,[d+"-indeterminate"]:this.indeterminate}]},innerClasses(){return[d+"-inner",{[d+"-focus"]:this.focusInner}]},inputClasses(){return d+"-input"},currentValue(){return this.CheckboxGroupInstance?this.CheckboxGroupInstance.modelValue.indexOf(this.label)>=0:this.modelValue===this.trueValue},group(){return!!this.CheckboxGroupInstance}},mounted(){this.CheckboxGroupInstance||(this.showSlot=void 0!==this.$slots.default)},methods:{change(e){if(this.itemDisabled)return!1;const t=e.target.checked,a=t?this.trueValue:this.falseValue;this.$emit("update:modelValue",a),this.group?this.CheckboxGroupInstance.change(this.model):(this.$emit("on-change",a),this.handleFormItemChange("change",a))},onBlur(){this.focusInner=!1},onFocus(){this.focusInner=!0}},watch:{modelValue(e){if(e!==this.trueValue&&e!==this.falseValue)throw"Value should be trueValue or falseValue."},"CheckboxGroupInstance.modelValue":{handler(e){this.model=e||[]},immediate:!0}}},m=a("6b0d"),b=a.n(m);const p=b()(i,[["render",n]]);t["a"]=p},d19d4:function(e,t,a){},f088:function(e,t,a){"use strict";a("d19d4")}}]);