(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f37a8b3"],{"083a":function(e,t,s){"use strict";var a=s("0d51"),n=TypeError;e.exports=function(e,t){if(!delete e[t])throw n("Cannot delete property "+a(t)+" of "+a(e))}},"0eb6":function(e,t,s){"use strict";s.r(t);var a=s("8451"),n=s("ec16"),o=s("e02b"),r=(s("3c65"),s("7a23"));const l=e=>(Object(r["pushScopeId"])("data-v-236c93b1"),e=e(),Object(r["popScopeId"])(),e),i={class:"pt-20 pb-20"},c=l(()=>Object(r["createElementVNode"])("p",null,"点击或者拖拽文件上传",-1)),u={class:"mt-10"},d={class:"upload-msg"},p={key:0};var h={__name:"index",props:{modelValue:{type:Boolean,default:!1},type:{type:String,default:"batchImportGoods"},label:{type:String,default:"商品"},exportHttp:{required:!0},importHttp:{required:!0}},emits:["update:modelValue","save"],setup(e,{emit:t}){const s=e,l=Object(r["inject"])("$Message",()=>{}),h=Object(r["computed"])({get(){return s.modelValue},set(e){t("update:modelValue",e)}}),m={authorization:sessionStorage.getItem("authorization")},b=Object(r["ref"])(""),f=Object(r["ref"])(""),O=Object(r["ref"])([]),j=Object(r["ref"])(!1),g=Object(r["computed"])(()=>O.value.filter(e=>!j.value||j.value&&1==e.status));function v(){return b.value="",f.value="",O.value=[],!0}function C(e,s){0==e.returnCode?(f.value=s.name,e.data&&e.data.length?(b.value=e.data[0].id,O.value=e.data||[],l.success("导入成功"),t("save")):l.success("上传成功，开始导入")):l.error("上传失败："+e.returnMsg)}function k(e){l.error("上传失败："+(e.message||e))}function y(e){if(0!==e.status||b.value){if(e.id===b.value){const s=O.value.findIndex(t=>t.index<e.index);-1===s?O.value.unshift(e):O.value.splice(s,0,e),10==e.status&&t("save")}}else b.value=e.id,O.value=[e]}function w(){s.exportHttp(`${s.label}模板${(new Date).format("YYYYMMDDHHmmss")}.xlsx`)}return Object(r["onMounted"])(()=>{window.$EventBus.$on(s.type,y)}),Object(r["onBeforeUnmount"])(()=>{window.$EventBus.$off(s.type,y)}),(t,s)=>{const l=Object(r["resolveComponent"])("Icon"),O=Object(r["resolveComponent"])("Button");return Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["unref"])(o["a"]),{modelValue:h.value,"onUpdate:modelValue":s[2]||(s[2]=e=>h.value=e),title:"批量导入"+e.label,width:500,draggable:"",sticky:"",scrollable:"",mask:!1},{footer:Object(r["withCtx"])(()=>[Object(r["createVNode"])(O,{type:"text",onClick:s[1]||(s[1]=e=>h.value=!1)},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("取消")]),_:1}),Object(r["createVNode"])(O,{type:"primary",onClick:w},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("模板下载")]),_:1})]),default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(Object(r["unref"])(n["a"]),{type:"drag",action:e.importHttp,headers:m,accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",format:["xlsx"],"show-upload-list":!1,"before-upload":v,"on-success":C,"on-error":k},{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("div",i,[Object(r["createVNode"])(l,{type:"ios-cloud-upload",size:"52",style:{color:"#3399ff"}}),c])]),_:1},8,["action"]),Object(r["withDirectives"])(Object(r["createElementVNode"])("div",u,[Object(r["createElementVNode"])("p",null,[Object(r["createElementVNode"])("span",null,"导入文件名："+Object(r["toDisplayString"])(f.value),1),Object(r["createVNode"])(Object(r["unref"])(a["a"]),{modelValue:j.value,"onUpdate:modelValue":s[0]||(s[0]=e=>j.value=e),class:"fr"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("只看错误信息")]),_:1},8,["modelValue"])]),Object(r["createElementVNode"])("div",d,[g.value.length?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createElementBlock"])("p",p,Object(r["toDisplayString"])(j.value?"【无】":"【正在导入中】"),1)),(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(g.value,(e,t)=>(Object(r["openBlock"])(),Object(r["createElementBlock"])("p",{key:t},[Object(r["createElementVNode"])("span",{class:Object(r["normalizeClass"])({"vi-red-text":1==e.status,"vi-green-text":[0,2,10].includes(e.status)})},Object(r["toDisplayString"])(e.mes),3)]))),128))])],512),[[r["vShow"],b.value]])]),_:1},8,["modelValue","title"])}}},m=(s("a951"),s("6b0d")),b=s.n(m);const f=b()(h,[["__scopeId","data-v-236c93b1"]]);t["default"]=f},"3c65":function(e,t,s){"use strict";var a=s("23e7"),n=s("7b0b"),o=s("07fa"),r=s("3a34"),l=s("083a"),i=s("3511"),c=1!==[].unshift(0),u=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},d=c||!u();a({target:"Array",proto:!0,arity:1,forced:d},{unshift:function(e){var t=n(this),s=o(t),a=arguments.length;if(a){i(s+a);var c=s;while(c--){var u=c+a;c in t?t[u]=t[c]:l(t,u)}for(var d=0;d<a;d++)t[d]=arguments[d]}return r(t,s+a)}})},8451:function(e,t,s){"use strict";var a=s("ca5c");t["a"]=a["a"]},a951:function(e,t,s){"use strict";s("d11f")},ca5c:function(e,t,s){"use strict";var a=s("7a23");const n=["disabled","value","name"],o=["disabled","checked","name"],r={key:0,class:"ivu-checkbox-label-text"};function l(e,t,s,l,i,c){return Object(a["openBlock"])(),Object(a["createElementBlock"])("label",{class:Object(a["normalizeClass"])(c.wrapClasses)},[Object(a["createElementVNode"])("span",{class:Object(a["normalizeClass"])(c.checkboxClasses)},[Object(a["createElementVNode"])("span",{class:Object(a["normalizeClass"])(c.innerClasses)},null,2),c.group?Object(a["withDirectives"])((Object(a["openBlock"])(),Object(a["createElementBlock"])("input",{key:0,type:"checkbox",class:Object(a["normalizeClass"])(c.inputClasses),disabled:e.itemDisabled,value:s.label,"onUpdate:modelValue":t[0]||(t[0]=e=>i.model=e),name:s.name,onChange:t[1]||(t[1]=(...e)=>c.change&&c.change(...e)),onFocus:t[2]||(t[2]=(...e)=>c.onFocus&&c.onFocus(...e)),onBlur:t[3]||(t[3]=(...e)=>c.onBlur&&c.onBlur(...e))},null,42,n)),[[a["vModelCheckbox"],i.model]]):(Object(a["openBlock"])(),Object(a["createElementBlock"])("input",{key:1,type:"checkbox",class:Object(a["normalizeClass"])(c.inputClasses),disabled:e.itemDisabled,checked:c.currentValue,name:s.name,onChange:t[4]||(t[4]=(...e)=>c.change&&c.change(...e)),onFocus:t[5]||(t[5]=(...e)=>c.onFocus&&c.onFocus(...e)),onBlur:t[6]||(t[6]=(...e)=>c.onBlur&&c.onBlur(...e))},null,42,o))],2),i.showSlot?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",r,[Object(a["renderSlot"])(e.$slots,"default",{},()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(s.label),1)])])):Object(a["createCommentVNode"])("",!0)],2)}var i=s("694c"),c=s("9836");const u="ivu-checkbox";var d={name:"Checkbox",mixins:[c["a"]],emits:["update:modelValue","on-change"],inject:{CheckboxGroupInstance:{default:null}},props:{disabled:{type:Boolean,default:!1},modelValue:{type:[String,Number,Boolean],default:!1},trueValue:{type:[String,Number,Boolean],default:!0},falseValue:{type:[String,Number,Boolean],default:!1},label:{type:[String,Number,Boolean]},indeterminate:{type:Boolean,default:!1},size:{validator(e){return Object(i["h"])(e,["small","large","default"])},default(){const e=Object(a["getCurrentInstance"])().appContext.config.globalProperties;return e.$VIEWUI&&""!==e.$VIEWUI.size?e.$VIEWUI.size:"default"}},name:{type:String},border:{type:Boolean,default:!1}},data(){return{showSlot:!0,focusInner:!1,model:[]}},computed:{wrapClasses(){return[u+"-wrapper",{[u+"-group-item"]:this.group,[u+"-wrapper-checked"]:this.currentValue,[u+"-wrapper-disabled"]:this.itemDisabled,[`${u}-${this.size}`]:!!this.size,[u+"-border"]:this.border}]},checkboxClasses(){return[""+u,{[u+"-checked"]:this.currentValue,[u+"-disabled"]:this.itemDisabled,[u+"-indeterminate"]:this.indeterminate}]},innerClasses(){return[u+"-inner",{[u+"-focus"]:this.focusInner}]},inputClasses(){return u+"-input"},currentValue(){return this.CheckboxGroupInstance?this.CheckboxGroupInstance.modelValue.indexOf(this.label)>=0:this.modelValue===this.trueValue},group(){return!!this.CheckboxGroupInstance}},mounted(){this.CheckboxGroupInstance||(this.showSlot=void 0!==this.$slots.default)},methods:{change(e){if(this.itemDisabled)return!1;const t=e.target.checked,s=t?this.trueValue:this.falseValue;this.$emit("update:modelValue",s),this.group?this.CheckboxGroupInstance.change(this.model):(this.$emit("on-change",s),this.handleFormItemChange("change",s))},onBlur(){this.focusInner=!1},onFocus(){this.focusInner=!0}},watch:{modelValue(e){if(e!==this.trueValue&&e!==this.falseValue)throw"Value should be trueValue or falseValue."},"CheckboxGroupInstance.modelValue":{handler(e){this.model=e||[]},immediate:!0}}},p=s("6b0d"),h=s.n(p);const m=h()(d,[["render",l]]);t["a"]=m},d11f:function(e,t,s){},ec16:function(e,t,s){"use strict";var a=s("7a23");const n=["multiple","webkitdirectory","accept"];function o(e,t,s,o,r,l){const i=Object(a["resolveComponent"])("upload-list");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:Object(a["normalizeClass"])([r.prefixCls])},[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(l.classes),onClick:t[1]||(t[1]=(...e)=>l.handleClick&&l.handleClick(...e)),onDrop:t[2]||(t[2]=Object(a["withModifiers"])((...e)=>l.onDrop&&l.onDrop(...e),["prevent"])),onPaste:t[3]||(t[3]=(...e)=>l.handlePaste&&l.handlePaste(...e)),onDragover:t[4]||(t[4]=Object(a["withModifiers"])(e=>r.dragOver=!0,["prevent"])),onDragleave:t[5]||(t[5]=Object(a["withModifiers"])(e=>r.dragOver=!1,["prevent"]))},[Object(a["createElementVNode"])("input",{ref:"input",type:"file",class:Object(a["normalizeClass"])([r.prefixCls+"-input"]),onChange:t[0]||(t[0]=(...e)=>l.handleChange&&l.handleChange(...e)),multiple:s.multiple,webkitdirectory:s.webkitdirectory,accept:s.accept},null,42,n),Object(a["renderSlot"])(e.$slots,"default")],34),Object(a["renderSlot"])(e.$slots,"tip"),s.showUploadList?(Object(a["openBlock"])(),Object(a["createBlock"])(i,{key:0,files:r.fileList,onOnFileRemove:l.handleRemove,onOnFilePreview:l.handlePreview},null,8,["files","onOnFileRemove","onOnFilePreview"])):Object(a["createCommentVNode"])("",!0)],2)}s("14d9");const r=["onClick"],l=["onClick"];function i(e,t,s,n,o,i){const c=Object(a["resolveComponent"])("Icon"),u=Object(a["resolveComponent"])("i-progress");return Object(a["openBlock"])(),Object(a["createElementBlock"])("ul",{class:Object(a["normalizeClass"])([o.prefixCls+"-list"])},[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(s.files,(e,t)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("li",{key:t,class:Object(a["normalizeClass"])(i.fileCls(e)),onClick:t=>i.handleClick(e)},[Object(a["createElementVNode"])("span",{onClick:t=>i.handlePreview(e)},[Object(a["createVNode"])(c,{type:i.format(e)},null,8,["type"]),Object(a["createTextVNode"])(" "+Object(a["toDisplayString"])(e.name),1)],8,l),Object(a["withDirectives"])(Object(a["createVNode"])(c,{type:"ios-close",class:Object(a["normalizeClass"])([o.prefixCls+"-list-remove"]),onClick:t=>i.handleRemove(e)},null,8,["class","onClick"]),[[a["vShow"],"finished"===e.status]]),Object(a["createVNode"])(a["Transition"],{name:"fade"},{default:Object(a["withCtx"])(()=>[e.showProgress?(Object(a["openBlock"])(),Object(a["createBlock"])(u,{key:0,"stroke-width":2,percent:i.parsePercentage(e.percentage),status:"finished"===e.status&&e.showProgress?"success":"normal"},null,8,["percent","status"])):Object(a["createCommentVNode"])("",!0)]),_:2},1024)],10,r))),128))],2)}var c=s("2628");const u={key:0,class:"ivu-progress-inner-text"};function d(e,t,s,n,o,r){const l=Object(a["resolveComponent"])("Icon");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:Object(a["normalizeClass"])(r.wrapClasses)},[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(r.outerClasses)},[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(r.innerClasses)},[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(r.bgClasses),style:Object(a["normalizeStyle"])(r.bgStyle)},[s.textInside?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",u,Object(a["toDisplayString"])(s.percent)+"%",1)):Object(a["createCommentVNode"])("",!0)],6),Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(r.successBgClasses),style:Object(a["normalizeStyle"])(r.successBgStyle)},null,6)],2)],2),s.hideInfo||s.textInside?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",{key:0,class:Object(a["normalizeClass"])(r.textClasses)},[Object(a["renderSlot"])(e.$slots,"default",{},()=>[r.isStatus?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",{key:0,class:Object(a["normalizeClass"])(r.textInnerClasses)},[Object(a["createVNode"])(l,{type:r.statusIcon},null,8,["type"])],2)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",{key:1,class:Object(a["normalizeClass"])(r.textInnerClasses)},Object(a["toDisplayString"])(s.percent)+"% ",3))])],2))],2)}var p=s("456c"),h=s("694c");const m="ivu-progress";var b={name:"Progress",components:{Icon:p["a"]},props:{percent:{type:Number,default:0},successPercent:{type:Number,default:0},status:{validator(e){return Object(h["h"])(e,["normal","active","wrong","success"])},default:"normal"},hideInfo:{type:Boolean,default:!1},strokeWidth:{type:Number,default:10},vertical:{type:Boolean,default:!1},strokeColor:{type:[String,Array]},textInside:{type:Boolean,default:!1}},data(){return{currentStatus:this.status}},computed:{isStatus(){return"wrong"===this.currentStatus||"success"===this.currentStatus},statusIcon(){let e="";switch(this.currentStatus){case"wrong":e="ios-close-circle";break;case"success":e="ios-checkmark-circle";break}return e},bgStyle(){const e=this.vertical?{height:this.percent+"%",width:this.strokeWidth+"px"}:{width:this.percent+"%",height:this.strokeWidth+"px"};return this.strokeColor&&("string"===typeof this.strokeColor?e["background-color"]=this.strokeColor:e["background-image"]=`linear-gradient(to right, ${this.strokeColor[0]} 0%, ${this.strokeColor[1]} 100%)`),e},successBgStyle(){return this.vertical?{height:this.successPercent+"%",width:this.strokeWidth+"px"}:{width:this.successPercent+"%",height:this.strokeWidth+"px"}},wrapClasses(){return[""+m,`${m}-${this.currentStatus}`,{[m+"-show-info"]:!this.hideInfo&&!this.textInside,[m+"-vertical"]:this.vertical}]},textClasses(){return m+"-text"},textInnerClasses(){return m+"-text-inner"},outerClasses(){return m+"-outer"},innerClasses(){return m+"-inner"},bgClasses(){return m+"-bg"},successBgClasses(){return m+"-success-bg"}},created(){this.handleStatus()},methods:{handleStatus(e){e?(this.currentStatus="normal",this.$emit("on-status-change","normal")):100===parseInt(this.percent,10)&&(this.currentStatus="success",this.$emit("on-status-change","success"))}},watch:{percent(e,t){e<t?this.handleStatus(!0):this.handleStatus()},status(e){this.currentStatus=e}}},f=s("6b0d"),O=s.n(f);const j=O()(b,[["render",d]]);var g=j;const v="ivu-upload";var C={name:"UploadList",components:{Icon:c["a"],iProgress:g},emits:["on-file-click","on-file-preview","on-file-remove"],props:{files:{type:Array,default(){return[]}}},data(){return{prefixCls:v}},methods:{fileCls(e){return[v+"-list-file",{[v+"-list-file-finish"]:"finished"===e.status}]},handleClick(e){this.$emit("on-file-click",e)},handlePreview(e){this.$emit("on-file-preview",e)},handleRemove(e){this.$emit("on-file-remove",e)},format(e){const t=e.name.split(".").pop().toLocaleLowerCase()||"";let s="ios-document-outline";return["gif","jpg","jpeg","png","bmp","webp"].indexOf(t)>-1&&(s="ios-image"),["mp4","m3u8","rmvb","avi","swf","3gp","mkv","flv"].indexOf(t)>-1&&(s="ios-film"),["mp3","wav","wma","ogg","aac","flac"].indexOf(t)>-1&&(s="ios-musical-notes"),["doc","txt","docx","pages","epub","pdf"].indexOf(t)>-1&&(s="md-document"),["numbers","csv","xls","xlsx"].indexOf(t)>-1&&(s="ios-stats"),["keynote","ppt","pptx"].indexOf(t)>-1&&(s="ios-videocam"),s},parsePercentage(e){return parseInt(e,10)}}};const k=O()(C,[["render",i]]);var y=k;function w(e,t,s){const a=`fail to post ${e} ${s.status}'`,n=new Error(a);return n.status=s.status,n.method="post",n.url=e,n}function x(e){const t=e.responseText||e.response;if(!t)return t;try{return JSON.parse(t)}catch(s){return t}}function V(e){if("undefined"===typeof XMLHttpRequest)return;const t=new XMLHttpRequest,s=e.action;t.upload&&(t.upload.onprogress=function(t){t.total>0&&(t.percent=t.loaded/t.total*100),e.onProgress(t)});const a=new FormData;e.data&&Object.keys(e.data).map(t=>{a.append(t,e.data[t])}),a.append(e.filename,e.file),t.onerror=function(t){e.onError(t)},t.onload=function(){if(t.status<200||t.status>=300)return e.onError(w(s,e,t),x(t));e.onSuccess(x(t))},t.open("post",s,!0),e.withCredentials&&"withCredentials"in t&&(t.withCredentials=!0);const n=e.headers||{};for(let o in n)n.hasOwnProperty(o)&&null!==n[o]&&t.setRequestHeader(o,n[o]);t.send(a)}var B=s("9836");const S="ivu-upload";var E={name:"Upload",mixins:[B["a"]],components:{UploadList:y},props:{action:{type:String,required:!0},headers:{type:Object,default(){return{}}},multiple:{type:Boolean,default:!1},data:{type:Object},name:{type:String,default:"file"},withCredentials:{type:Boolean,default:!1},showUploadList:{type:Boolean,default:!0},type:{type:String,validator(e){return Object(h["h"])(e,["select","drag"])},default:"select"},format:{type:Array,default(){return[]}},accept:{type:String},maxSize:{type:Number},beforeUpload:Function,onProgress:{type:Function,default(){return{}}},onSuccess:{type:Function,default(){return{}}},onError:{type:Function,default(){return{}}},onRemove:{type:Function,default(){return{}}},onPreview:{type:Function,default(){return{}}},onExceededSize:{type:Function,default(){return{}}},onFormatError:{type:Function,default(){return{}}},defaultFileList:{type:Array,default(){return[]}},paste:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},webkitdirectory:{type:Boolean,default:!1}},data(){return{prefixCls:S,dragOver:!1,fileList:[],tempIndex:1}},computed:{classes(){return[""+S,{[S+"-select"]:"select"===this.type,[S+"-drag"]:"drag"===this.type,[S+"-dragOver"]:"drag"===this.type&&this.dragOver}]}},methods:{handleClick(){this.itemDisabled||this.$refs.input.click()},handleChange(e){const t=e.target.files;t&&(this.uploadFiles(t),this.$refs.input.value=null)},onDrop(e){this.dragOver=!1,this.itemDisabled||this.uploadFiles(e.dataTransfer.files)},handlePaste(e){this.itemDisabled||this.paste&&this.uploadFiles(e.clipboardData.files)},uploadFiles(e){let t=Array.prototype.slice.call(e);this.multiple||(t=t.slice(0,1)),0!==t.length&&t.forEach(e=>{this.upload(e)})},upload(e){if(!this.beforeUpload)return this.post(e);const t=this.beforeUpload(e);t&&t.then?t.then(t=>{"[object File]"===Object.prototype.toString.call(t)?this.post(t):this.post(e)},()=>{}):!1!==t&&this.post(e)},post(e){if(this.format.length){const t=e.name.split(".").pop().toLocaleLowerCase(),s=this.format.some(e=>e.toLocaleLowerCase()===t);if(!s)return this.onFormatError(e,this.fileList),!1}if(this.maxSize&&e.size>1024*this.maxSize)return this.onExceededSize(e,this.fileList),!1;this.handleStart(e);let t=new FormData;t.append(this.name,e),V({headers:this.headers,withCredentials:this.withCredentials,file:e,data:this.data,filename:this.name,action:this.action,onProgress:t=>{this.handleProgress(t,e)},onSuccess:t=>{this.handleSuccess(t,e)},onError:(t,s)=>{this.handleError(t,s,e)}})},handleStart(e){e.uid=Date.now()+this.tempIndex++;const t={status:"uploading",name:e.name,size:e.size,percentage:0,uid:e.uid,showProgress:!0};this.fileList.push(t)},getFile(e){const t=this.fileList;let s;return t.every(t=>(s=e.uid===t.uid?t:null,!s)),s},handleProgress(e,t){const s=this.getFile(t);this.onProgress(e,s,this.fileList),s.percentage=e.percent||0},handleSuccess(e,t){const s=this.getFile(t);s&&(s.status="finished",s.response=e,this.onSuccess(e,s,this.fileList),this.handleFormItemChange("change",s),setTimeout(()=>{s.showProgress=!1},1e3))},handleError(e,t,s){const a=this.getFile(s),n=this.fileList;a.status="fail",n.splice(n.indexOf(a),1),this.onError(e,t,s)},handleRemove(e){const t=this.fileList;t.splice(t.indexOf(e),1),this.onRemove(e,t)},handlePreview(e){"finished"===e.status&&this.onPreview(e)},clearFiles(){this.fileList=[]}},watch:{defaultFileList:{immediate:!0,handler(e){this.fileList=e.map(e=>(e.status="finished",e.percentage=100,e.uid=Date.now()+this.tempIndex++,e))}}}};const I=O()(E,[["render",o]]);var N=I;t["a"]=N}}]);