(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40397286"],{"13d5":function(e,t,l){"use strict";var i=l("23e7"),s=l("d58f").left,n=l("a640"),o=l("2d00"),a=l("605d"),r=!a&&o>79&&o<83,c=r||!n("reduce");i({target:"Array",proto:!0,forced:c},{reduce:function(e){var t=arguments.length;return s(this,e,t,t>1?arguments[1]:void 0)}})},"605d":function(e,t,l){"use strict";var i=l("da84"),s=l("c6b6");e.exports="process"===s(i.process)},"9bc9":function(e,t,l){"use strict";var i=l("7a23");function s(e,t,l,s,n,o){return Object(i["openBlock"])(),Object(i["createBlock"])(i["Teleport"],{to:"body",disabled:!l.transfer},[Object(i["createVNode"])(i["Transition"],{name:l.transitionName},{default:Object(i["withCtx"])(()=>[Object(i["withDirectives"])(Object(i["createElementVNode"])("div",Object(i["mergeProps"])({class:["ivu-select-dropdown",o.mergedClass],ref:"drop",style:o.mergedStyle},e.$attrs,{onMouseenter:t[0]||(t[0]=(...e)=>o.handleMouseenter&&o.handleMouseenter(...e)),onMouseleave:t[1]||(t[1]=(...e)=>o.handleMouseleave&&o.handleMouseleave(...e)),onClick:t[2]||(t[2]=Object(i["withModifiers"])((...e)=>o.handleClick&&o.handleClick(...e),["stop"]))}),[Object(i["renderSlot"])(e.$slots,"default")],16),[[i["vShow"],l.visible]])]),_:3},8,["name"])],8,["disabled"])}var n=l("694c"),o=l("d2e4"),a=l.n(o),r=l("7388"),c={name:"Drop",emits:["mouseenter","mouseleave","click"],props:{placement:{type:String,default:"bottom-start"},className:{type:String},transfer:{type:Boolean},eventsEnabled:{type:Boolean,default:!1},visible:{type:Boolean},classes:{type:Object,default:()=>{}},styles:{type:Object,default:()=>{}},transitionName:{type:String,default:"transition-drop"},boundariesElement:{default:"window"}},data(){return{popper:null,width:"",popperStatus:!1,tIndex:this.handleGetIndex()}},computed:{mergedStyle(){let e={};return this.width&&(e.minWidth=this.width+"px"),this.transfer&&(e["z-index"]=1060+this.tIndex),Object.assign({},this.styles,e)},mergedClass(){return Object.assign({},this.classes,{[this.className]:this.className})}},methods:{update(){Object(i["nextTick"])(()=>{this.popper?(this.popper.update(),this.popperStatus=!0):this.popper=new a.a(this.$parent.$refs.reference,this.$refs.drop,{eventsEnabled:this.eventsEnabled,placement:this.placement,modifiers:{computeStyle:{gpuAcceleration:!1},preventOverflow:{boundariesElement:this.boundariesElement}},onCreate:()=>{this.resetTransformOrigin(),Object(i["nextTick"])(this.popper.update())},onUpdate:()=>{this.resetTransformOrigin()}}),"iSelect"===this.$parent.$options.name&&(this.width=parseInt(Object(n["g"])(this.$parent.$el,"width"))),this.tIndex=this.handleGetIndex()})},destroy(){this.popper&&setTimeout(()=>{this.popper&&!this.popperStatus&&(this.popper.popper.style.display="none",this.popper.destroy(),this.popper=null),this.popperStatus=!1},300)},resetTransformOrigin(){if(!this.popper)return;let e=this.popper.popper.getAttribute("x-placement"),t=e.split("-")[0],l=e.split("-")[1];const i="left"===e||"right"===e;i||(this.popper.popper.style.transformOrigin="bottom"===t||"top"!==t&&"start"===l?"center top":"center bottom")},handleGetIndex(){return Object(r["c"])(),r["d"]},handleMouseenter(e){this.$emit("mouseenter",e)},handleMouseleave(e){this.$emit("mouseleave",e)},handleOnUpdatePopper(){this.update()},handleOnDestroyPopper(){this.destroy()},handleClick(e){this.$emit("click",e)}},beforeUnmount(){this.popper&&(this.popper.destroy(),this.popper=null)}},u=l("6b0d"),h=l.n(u);const d=h()(c,[["render",s]]);t["a"]=d},a476:function(e,t,l){"use strict";l.d(t,"a",(function(){return h}));const i="click",s=Object.create(null),n=Object.create(null),o=[s,n],a=function(e,t,l){const{target:i}=l,s=function(t){const{el:s}=t;if(s!==i&&!s.contains(i)){const{binding:i}=t;i.modifiers.stop&&l.stopPropagation(),i.modifiers.prevent&&l.preventDefault(),i.value.call(e,l)}},n=function(e){return t[e].forEach(s)};Object.keys(t).forEach(n)},r=function(e){a(this,s,e)},c=function(e){a(this,n,e)},u=function(e){return e?r:c},h=Object.defineProperties({},{$_captureInstances:{value:s},$_nonCaptureInstances:{value:n},$_onCaptureEvent:{value:r},$_onNonCaptureEvent:{value:c},beforeMount:{value:function(e,t){if("function"!==typeof t.value)throw new TypeError("Binding value must be a function.");let l;const o=t.modifiers;l=o.click?"click":o.mousedown?"mousedown":o.touchstart?"touchstart":i;const a=t.arg,r={...t,modifiers:{capture:!1,prevent:!1,stop:!1,...t.modifiers}},c=a?s:n;Array.isArray(c[l])||(c[l]=[]),1===c[l].push({el:e,binding:r})&&"object"===typeof document&&document&&document.addEventListener(l,u(a),a)}},unmounted:{value:function(e){const t=function(t){return t.el!==e},l=function(e){const l=Object.keys(e);if(l.length){const i=e===s,n=function(l){const s=e[l].filter(t);s.length?e[l]=s:("object"===typeof document&&document&&document.removeEventListener(l,u(i),i),delete e[l])};l.forEach(n)}};o.forEach(l)}},version:{enumerable:!0,value:"3.7.1"}})},a4f6:function(e,t,l){"use strict";var i=l("7a23");t["a"]={data(){return{globalConfig:{}}},created(){const e=Object(i["getCurrentInstance"])();this.globalConfig=e.appContext.config.globalProperties.$VIEWUI}}},a640:function(e,t,l){"use strict";var i=l("d039");e.exports=function(e,t){var l=[][e];return!!l&&i((function(){l.call(null,t||function(){return 1},1)}))}},d58f:function(e,t,l){"use strict";var i=l("59ed"),s=l("7b0b"),n=l("44ad"),o=l("07fa"),a=TypeError,r=function(e){return function(t,l,r,c){i(l);var u=s(t),h=n(u),d=o(u),p=e?d-1:0,m=e?-1:1;if(r<2)while(1){if(p in h){c=h[p],p+=m;break}if(p+=m,e?p<0:d<=p)throw a("Reduce of empty array with no initial value")}for(;e?p>=0:d>p;p+=m)p in h&&(c=l(c,h[p],p,u));return c}};e.exports={left:r(!1),right:r(!0)}},df4e:function(e,t,l){"use strict";var i=l("7a23");const s=["tabindex"],n=["name","value"];function o(e,t,l,o,a,r){const c=Object(i["resolveComponent"])("select-head"),u=Object(i["resolveComponent"])("Icon"),h=Object(i["resolveComponent"])("Drop"),d=Object(i["resolveDirective"])("click-outside");return Object(i["withDirectives"])((Object(i["openBlock"])(),Object(i["createElementBlock"])("div",{class:Object(i["normalizeClass"])(r.classes)},[Object(i["createElementVNode"])("div",{ref:"reference",class:Object(i["normalizeClass"])(r.selectionCls),tabindex:r.selectTabindex,onBlur:t[2]||(t[2]=(...e)=>r.toggleHeaderFocus&&r.toggleHeaderFocus(...e)),onFocus:t[3]||(t[3]=(...e)=>r.toggleHeaderFocus&&r.toggleHeaderFocus(...e)),onClick:t[4]||(t[4]=(...e)=>r.toggleMenu&&r.toggleMenu(...e)),onKeydown:[t[5]||(t[5]=Object(i["withKeys"])((...e)=>r.handleKeydown&&r.handleKeydown(...e),["esc"])),t[6]||(t[6]=Object(i["withKeys"])((...e)=>r.handleKeydown&&r.handleKeydown(...e),["enter"])),t[7]||(t[7]=Object(i["withKeys"])(Object(i["withModifiers"])((...e)=>r.handleKeydown&&r.handleKeydown(...e),["prevent"]),["up"])),t[8]||(t[8]=Object(i["withKeys"])(Object(i["withModifiers"])((...e)=>r.handleKeydown&&r.handleKeydown(...e),["prevent"]),["down"])),t[9]||(t[9]=Object(i["withKeys"])((...e)=>r.handleKeydown&&r.handleKeydown(...e),["tab"])),t[10]||(t[10]=Object(i["withKeys"])((...e)=>r.handleKeydown&&r.handleKeydown(...e),["delete"]))],onMouseenter:t[11]||(t[11]=e=>a.hasMouseHoverHead=!0),onMouseleave:t[12]||(t[12]=e=>a.hasMouseHoverHead=!1)},[Object(i["renderSlot"])(e.$slots,"input",{},()=>[Object(i["createElementVNode"])("input",{type:"hidden",name:l.name,value:r.publicValue},null,8,n),Object(i["createVNode"])(c,{ref:"selectHead",filterable:l.filterable,multiple:l.multiple,values:a.values,clearable:r.canBeCleared,prefix:l.prefix,disabled:e.itemDisabled,remote:r.remote,"input-element-id":l.elementId,"initial-label":a.initialLabel,placeholder:l.placeholder,"query-prop":a.query,"max-tag-count":l.maxTagCount,"max-tag-placeholder":l.maxTagPlaceholder,"allow-create":l.allowCreate,"show-create-item":r.showCreateItem,onOnQueryChange:r.onQueryChange,onOnInputFocus:t[0]||(t[0]=e=>a.isFocused=!0),onOnInputBlur:t[1]||(t[1]=e=>a.isFocused=!1),onOnClear:r.clearSingleSelect,onOnEnter:r.handleCreateItem},{prefix:Object(i["withCtx"])(()=>[Object(i["renderSlot"])(e.$slots,"prefix")]),_:3},8,["filterable","multiple","values","clearable","prefix","disabled","remote","input-element-id","initial-label","placeholder","query-prop","max-tag-count","max-tag-placeholder","allow-create","show-create-item","onOnQueryChange","onOnClear","onOnEnter"])])],42,s),Object(i["createVNode"])(h,{ref:"dropdown",classes:r.dropdownCls,visible:r.dropVisible,placement:l.placement,eventsEnabled:l.eventsEnabled,transfer:l.transfer,"transition-name":"transition-drop"},{default:Object(i["withCtx"])(()=>[Object(i["withDirectives"])(Object(i["createElementVNode"])("ul",{class:Object(i["normalizeClass"])([a.prefixCls+"-not-found"])},[Object(i["createElementVNode"])("li",null,Object(i["toDisplayString"])(r.localeNotFoundText),1)],2),[[i["vShow"],r.showNotFoundLabel&&!l.allowCreate]]),!r.remote||r.remote&&!l.loading?(Object(i["openBlock"])(),Object(i["createElementBlock"])("ul",{key:0,class:Object(i["normalizeClass"])(a.prefixCls+"-dropdown-list")},[r.showCreateItem?(Object(i["openBlock"])(),Object(i["createElementBlock"])("li",{key:0,class:Object(i["normalizeClass"])(a.prefixCls+"-item"),onClick:t[13]||(t[13]=(...e)=>r.handleCreateItem&&r.handleCreateItem(...e))},[Object(i["createTextVNode"])(Object(i["toDisplayString"])(a.query)+" ",1),Object(i["createVNode"])(u,{type:"md-return-left",class:Object(i["normalizeClass"])(a.prefixCls+"-item-enter")},null,8,["class"])],2)):Object(i["createCommentVNode"])("",!0),Object(i["renderSlot"])(e.$slots,"default")],2)):(Object(i["openBlock"])(),Object(i["createElementBlock"])("ul",{key:1,class:Object(i["normalizeClass"])(a.prefixCls+"-dropdown-list")},[r.showCreateItem?(Object(i["openBlock"])(),Object(i["createElementBlock"])("li",{key:0,class:Object(i["normalizeClass"])(a.prefixCls+"-item"),onClick:t[14]||(t[14]=(...e)=>r.handleCreateItem&&r.handleCreateItem(...e))},[Object(i["createTextVNode"])(Object(i["toDisplayString"])(a.query)+" ",1),Object(i["createVNode"])(u,{type:"md-return-left",class:Object(i["normalizeClass"])(a.prefixCls+"-item-enter")},null,8,["class"])],2)):Object(i["createCommentVNode"])("",!0)],2)),Object(i["withDirectives"])(Object(i["createElementVNode"])("ul",{class:Object(i["normalizeClass"])([a.prefixCls+"-loading"])},Object(i["toDisplayString"])(r.localeLoadingText),3),[[i["vShow"],l.loading]])]),_:3},8,["classes","visible","placement","eventsEnabled","transfer"])],2)),[[d,r.onClickOutside,l.capture],[d,r.onClickOutside,l.capture,{mousedown:!0}],[d,r.onClickOutside,l.capture,{touchstart:!0}]])}l("14d9"),l("13d5");var a=l("9bc9"),r=l("456c");const c={key:1,class:"ivu-tag ivu-tag-checked"},u={class:"ivu-tag-text ivu-select-max-tag"},h=["id","disabled","placeholder"];function d(e,t,l,s,n,o){const a=Object(i["resolveComponent"])("Icon");return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",{onClick:t[6]||(t[6]=(...e)=>o.onHeaderClick&&o.onHeaderClick(...e)),class:Object(i["normalizeClass"])(o.headCls)},[o.showPrefix?(Object(i["openBlock"])(),Object(i["createElementBlock"])("span",{key:0,class:Object(i["normalizeClass"])([n.prefixCls+"-prefix"])},[Object(i["renderSlot"])(e.$slots,"prefix",{},()=>[l.prefix?(Object(i["openBlock"])(),Object(i["createBlock"])(a,{key:0,type:l.prefix},null,8,["type"])):Object(i["createCommentVNode"])("",!0)])],2)):Object(i["createCommentVNode"])("",!0),(Object(i["openBlock"])(!0),Object(i["createElementBlock"])(i["Fragment"],null,Object(i["renderList"])(o.selectedMultiple,(e,t)=>(Object(i["openBlock"])(),Object(i["createElementBlock"])("div",{class:"ivu-tag ivu-tag-checked",key:t},[Object(i["createElementVNode"])("span",{class:Object(i["normalizeClass"])(["ivu-tag-text",{"ivu-select-multiple-tag-hidden":e.disabled}])},Object(i["toDisplayString"])(void 0!==e.tag?e.tag:e.label),3),e.disabled?Object(i["createCommentVNode"])("",!0):(Object(i["openBlock"])(),Object(i["createBlock"])(a,{key:0,type:"ios-close",onClick:Object(i["withModifiers"])(t=>o.removeTag(e),["stop"])},null,8,["onClick"]))]))),128)),void 0!==l.maxTagCount&&l.values.length>l.maxTagCount?(Object(i["openBlock"])(),Object(i["createElementBlock"])("div",c,[Object(i["createElementVNode"])("span",u,[l.maxTagPlaceholder?(Object(i["openBlock"])(),Object(i["createElementBlock"])(i["Fragment"],{key:0},[Object(i["createTextVNode"])(Object(i["toDisplayString"])(l.maxTagPlaceholder(l.values.length-l.maxTagCount)),1)],64)):(Object(i["openBlock"])(),Object(i["createElementBlock"])(i["Fragment"],{key:1},[Object(i["createTextVNode"])("+ "+Object(i["toDisplayString"])(l.values.length-l.maxTagCount)+"...",1)],64))])])):Object(i["createCommentVNode"])("",!0),Object(i["withDirectives"])(Object(i["createElementVNode"])("span",{class:Object(i["normalizeClass"])(o.singleDisplayClasses)},Object(i["toDisplayString"])(o.singleDisplayValue),3),[[i["vShow"],o.singleDisplayValue]]),l.filterable?Object(i["withDirectives"])((Object(i["openBlock"])(),Object(i["createElementBlock"])("input",{key:2,id:l.inputElementId,type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>n.query=e),disabled:l.disabled,class:Object(i["normalizeClass"])([n.prefixCls+"-input"]),placeholder:o.showPlaceholder?o.localePlaceholder:"",style:Object(i["normalizeStyle"])(o.inputStyle),autocomplete:"off",spellcheck:"false",onKeydown:[t[1]||(t[1]=(...e)=>o.resetInputState&&o.resetInputState(...e)),t[2]||(t[2]=Object(i["withKeys"])((...e)=>o.handleInputDelete&&o.handleInputDelete(...e),["delete"])),t[3]||(t[3]=Object(i["withKeys"])((...e)=>o.handleInputEnter&&o.handleInputEnter(...e),["enter"]))],onFocus:t[4]||(t[4]=(...e)=>o.onInputFocus&&o.onInputFocus(...e)),onBlur:t[5]||(t[5]=(...e)=>o.onInputBlur&&o.onInputBlur(...e)),ref:"input"},null,46,h)),[[i["vModelText"],n.query]]):Object(i["createCommentVNode"])("",!0),o.resetSelect?(Object(i["openBlock"])(),Object(i["createBlock"])(a,{key:3,type:"ios-close-circle",class:Object(i["normalizeClass"])([n.prefixCls+"-arrow"]),onClick:Object(i["withModifiers"])(o.onClear,["stop"])},null,8,["class","onClick"])):Object(i["createCommentVNode"])("",!0),o.resetSelect||l.remote?Object(i["createCommentVNode"])("",!0):(Object(i["openBlock"])(),Object(i["createBlock"])(a,{key:4,type:o.arrowType,custom:o.customArrowType,size:o.arrowSize,class:Object(i["normalizeClass"])([n.prefixCls+"-arrow"])},null,8,["type","custom","size","class"]))],2)}var p=l("bebb"),m=l("a4f6");const b="ivu-select";var f={name:"iSelectHead",mixins:[p["a"],m["a"]],components:{Icon:r["a"]},emits:["on-input-focus","on-input-blur","on-keydown","on-enter","on-clear","on-query-change"],inject:["SelectInstance"],props:{disabled:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},remote:{type:Boolean,default:!1},initialLabel:{type:[String,Number,Array]},values:{type:Array,default:()=>[]},clearable:{type:[Function,Boolean],default:!1},inputElementId:{type:String},placeholder:{type:String},queryProp:{type:String,default:""},prefix:{type:String},maxTagCount:{type:Number},maxTagPlaceholder:{type:Function},allowCreate:{type:Boolean},showCreateItem:{type:Boolean}},data(){return{prefixCls:b,query:"",inputLength:20,remoteInitialLabel:this.initialLabel,preventRemoteCall:!1}},computed:{singleDisplayClasses(){const{filterable:e,multiple:t,showPlaceholder:l}=this;return[{[b+"-head-with-prefix"]:this.showPrefix,[b+"-placeholder"]:l&&!e,[b+"-selected-value"]:!l&&!t&&!e}]},singleDisplayValue(){return this.multiple&&this.values.length>0||this.filterable?"":""+this.selectedSingle||this.localePlaceholder},showPlaceholder(){let e=!1;if(this.multiple)!this.values.length>0&&(e=!0);else{const t=this.values[0];"undefined"!==typeof t&&""!==String(t).trim()||(e=!this.remoteInitialLabel)}return e},resetSelect(){return!this.showPlaceholder&&this.clearable},inputStyle(){let e={};return this.multiple&&(this.showPlaceholder?e.width="100%":e.width=this.inputLength+"px"),e},localePlaceholder(){return void 0===this.placeholder?this.t("i.select.placeholder"):this.placeholder},selectedSingle(){const e=this.values[0];return e?e.label:this.remoteInitialLabel||""},selectedMultiple(){const e=this.multiple?this.values:[];return e.filter((e,t)=>void 0===this.maxTagCount||t<this.maxTagCount)},headCls(){return{[b+"-head-flex"]:this.filterable&&this.showPrefix}},arrowType(){const e=this.globalConfig;let t="ios-arrow-down";return e&&(e.select.customArrow?t="":e.select.arrow&&(t=e.select.arrow)),t},customArrowType(){const e=this.globalConfig;let t="";return e&&e.select.customArrow&&(t=e.select.customArrow),t},showPrefix(){const e=this.$slots.prefix&&this.$slots.prefix();let t=!1;return e&&(t=e[0].children.length>0),t||this.prefix},arrowSize(){const e=this.globalConfig;let t="";return e&&e.select.arrowSize&&(t=e.select.arrowSize),t}},methods:{onInputFocus(){this.$emit("on-input-focus")},onInputBlur(){this.showCreateItem||(this.values.length||(this.query=""),this.$emit("on-input-blur"))},removeTag(e){if(this.disabled)return!1;this.SelectInstance.handleOnSelectSelected(e)},resetInputState(){this.inputLength=12*this.$refs.input.value.length+20,this.$emit("on-keydown")},handleInputDelete(e){const t=e.target.value;this.multiple&&this.selectedMultiple.length&&""===this.query&&""===t&&this.removeTag(this.selectedMultiple[this.selectedMultiple.length-1])},handleInputEnter(e){this.$emit("on-enter"),this.showCreateItem&&e.stopPropagation()},onHeaderClick(e){this.filterable&&e.target===this.$el&&this.$refs.input.focus()},onClear(){this.$emit("on-clear")}},watch:{values([e]){if(this.filterable){if(this.preventRemoteCall=!0,this.multiple)return this.query="",void(this.preventRemoteCall=!1);this.query="undefined"===typeof e||""===e||null===e?"":e.label,Object(i["nextTick"])(()=>this.preventRemoteCall=!1)}},query(e){this.preventRemoteCall?this.preventRemoteCall=!1:this.$emit("on-query-change",e)},queryProp(e){e!==this.query&&(this.query=e)}}},y=l("6b0d"),g=l.n(y);const O=g()(f,[["render",d]]);var v=O,C=l("a476"),w=l("694c"),j=l("9836"),x=l("cdf4");const k="ivu-select",S=(e,t,l)=>{const i=JSON.stringify(e),s=JSON.stringify(t),n=JSON.stringify(l.map(e=>e.value));return i!==s||i!==n||n!==s},I=300;var B={name:"iSelect",mixins:[p["a"],j["a"]],components:{Drop:a["a"],SelectHead:v,Icon:r["a"]},directives:{clickOutside:C["a"]},emits:["on-set-default-options","on-clear","on-clickoutside","on-select","on-create","on-change","on-query-change","on-open-change","update:modelValue"],provide(){return{SelectInstance:this}},props:{modelValue:{type:[String,Number,Array],default:""},label:{type:[String,Number,Array],default:""},defaultLabel:{type:[String,Number,Array],default:""},multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},placeholder:{type:String},filterable:{type:Boolean,default:!1},filterMethod:{type:Function},remoteMethod:{type:Function},loading:{type:Boolean,default:!1},loadingText:{type:String},size:{validator(e){return Object(w["h"])(e,["small","large","default"])},default(){const e=Object(i["getCurrentInstance"])().appContext.config.globalProperties;return e.$VIEWUI&&""!==e.$VIEWUI.size?e.$VIEWUI.size:"default"}},labelInValue:{type:Boolean,default:!1},notFoundText:{type:String},placement:{validator(e){return Object(w["h"])(e,["top","bottom","top-start","bottom-start","top-end","bottom-end"])},default:"bottom-start"},transfer:{type:Boolean,default(){const e=Object(i["getCurrentInstance"])().appContext.config.globalProperties;return!(!e.$VIEWUI||""===e.$VIEWUI.transfer)&&e.$VIEWUI.transfer}},autoComplete:{type:Boolean,default:!1},name:{type:String},elementId:{type:String},transferClassName:{type:String},prefix:{type:String},maxTagCount:{type:Number},maxTagPlaceholder:{type:Function},allowCreate:{type:Boolean,default:!1},capture:{type:Boolean,default(){const e=Object(i["getCurrentInstance"])().appContext.config.globalProperties;return!e.$VIEWUI||e.$VIEWUI.capture}},filterByLabel:{type:Boolean,default:!1},eventsEnabled:{type:Boolean,default:!1},hideNotFound:{type:Boolean,default:!1}},mounted(){if(!this.remote&&this.slotOptions.length>0&&(this.values=this.getInitialValue().map(e=>"number"===typeof e||e?this.getOptionData(e):null).filter(Boolean)),this.checkUpdateStatus(),this.remote&&this.modelValue&&this.defaultLabel)if(this.multiple){if(this.multiple&&this.defaultLabel instanceof Array&&this.modelValue.length===this.defaultLabel.length){const e=this.modelValue.map((e,t)=>({value:e,label:this.defaultLabel[t]}));setTimeout(()=>{this.values=e})}}else this.query=this.defaultLabel,this.modelValue&&this.defaultLabel&&this.values.push({label:this.defaultLabel,value:this.modelValue})},data(){return{prefixCls:k,values:[],dropDownWidth:0,visible:!1,focusIndex:-1,isFocused:!1,query:"",initialLabel:this.label,hasMouseHoverHead:!1,slotOptions:[],caretPosition:-1,lastRemoteQuery:"",unchangedQuery:!0,hasExpectedValue:!1,isTyping:!1,preventRemoteCall:!1,filterQueryChange:!1,slotOptionsMap:new Map,isLocking:!1}},computed:{classes(){return[""+k,{[k+"-visible"]:this.visible,[k+"-disabled"]:this.itemDisabled,[k+"-multiple"]:this.multiple,[k+"-single"]:!this.multiple,[`${k}-${this.size}`]:!!this.size}]},dropdownCls(){return{[k+"-dropdown-transfer"]:this.transfer,[k+"-multiple"]:this.multiple&&this.transfer,["ivu-auto-complete"]:this.autoComplete,[this.transferClassName]:this.transferClassName}},selectionCls(){return{[k+"-selection"]:!this.autoComplete,[k+"-selection-focused"]:this.isFocused}},localeNotFoundText(){return"undefined"===typeof this.notFoundText?this.t("i.select.noMatch"):this.notFoundText},localeLoadingText(){return"undefined"===typeof this.loadingText?this.t("i.select.loading"):this.loadingText},showCreateItem(){let e=!1;const{allowCreate:t,query:l,slotOptions:i}=this;if(t&&""!==l){e=!0;const t=(i||[]).find(e=>e.proxy&&e.proxy.showLabel===l);t&&(e=!1)}return e},transitionName(){return"bottom"===this.placement?"slide-up":"slide-down"},dropVisible(){let e=!0;const t=0===this.slotOptions.length;return!this.loading&&this.remote&&""===this.query&&t&&(e=!1),this.autoComplete&&t&&(e=!1),this.visible&&e},showNotFoundLabel(){const{loading:e,remote:t,slotOptions:l,hideNotFound:i}=this,s=l||[],n=s.find(e=>e.proxy.isShow);return(0===s.length||!n)&&(!t||t&&!e)&&!i},publicValue(){return this.multiple?this.values.map(e=>e.value):(this.values[0]||{}).value},canBeCleared(){const e=this.hasMouseHoverHead,t=!this.multiple&&!this.itemDisabled&&this.clearable;return e&&t&&this.reset},selectTabindex(){return this.itemDisabled||this.filterable?-1:0},remote(){return"function"===typeof this.remoteMethod}},methods:{setQuery(e){e?this.onQueryChange(e):null===e&&(this.onQueryChange(""),this.values=[],this.lastRemoteQuery="")},clearSingleSelect(){this.multiple||this.$emit("update:modelValue",""),this.$emit("on-clear"),this.hideMenu(),this.clearable&&this.reset()},getOptionData(e){const t=this.slotOptions.find(({props:t})=>t.value===e);if(!t)return null;const{optionLabel:l,disabled:i}=t.proxy||{};return{value:e,label:l,disabled:i}},getInitialValue(){const{multiple:e,remote:t,modelValue:l}=this;let i=Array.isArray(l)?l:[l];if(e||"undefined"!==typeof i[0]&&(""!==String(i[0]).trim()||Number.isFinite(i[0]))||(i=[]),t&&!e&&l){const e=this.getOptionData(l);this.query=e?e.label:String(l)}return i.filter(e=>Boolean(e)||0===e)},validateOption({children:e,elm:t,propsData:l}){const i=l.value,s=l.label||"",n=t&&t.textContent||(e||[]).reduce((e,t)=>{const l=t.elm?t.elm.textContent:t.text;return`${e} ${l}`},"")||"",o=this.filterByLabel?[s].toString():[i,s,n].toString(),a=this.query.toLowerCase().trim();return o.toLowerCase().includes(a)},toggleMenu(e,t){if(this.itemDisabled)return!1;this.visible="undefined"!==typeof t?t:!this.visible,this.visible&&(this.dropDownWidth=this.$el.getBoundingClientRect().width,this.$refs.dropdown.handleOnUpdatePopper())},hideMenu(){this.toggleMenu(null,!1),this.isTyping=!1,setTimeout(()=>this.unchangedQuery=!0,I)},onClickOutside(e){if(this.visible){if("mousedown"===e.type)return void e.preventDefault();if(this.transfer){const t=this.$refs.dropdown.$refs.drop;if(t===e.target||t.contains(e.target))return}if(this.filterable){const e=this.$el.querySelector('input[type="text"]');this.caretPosition=e.selectionStart,Object(i["nextTick"])(()=>{const t=-1===this.caretPosition?e.value.length:this.caretPosition;e.setSelectionRange(t,t)})}this.autoComplete||e.stopPropagation(),e.preventDefault(),this.hideMenu(),this.isFocused=!0,this.$emit("on-clickoutside",e)}else this.caretPosition=-1,this.isFocused=!1},reset(){this.query="",this.focusIndex=-1,this.unchangedQuery=!0,this.values=[],this.filterQueryChange=!1},handleKeydown(e){const t=e.key||e.code,l=e.keyCode||e.which;if("Backspace"!==t&&8!==l)if(this.visible){if(e.preventDefault(),"Tab"===t&&e.stopPropagation(),"Escape"===t&&(e.stopPropagation(),this.hideMenu()),"ArrowUp"===t&&this.navigateOptions(-1),"ArrowDown"===t&&this.navigateOptions(1),"Enter"===t){if(-1===this.focusIndex)return this.hideMenu();const e=this.slotOptions[this.focusIndex];if(e){const t=this.getOptionData(e.props.value);this.onOptionClick(t)}else this.hideMenu()}}else{const t=["ArrowUp","ArrowDown"];t.includes(e.key)&&this.toggleMenu(null,!0)}},navigateOptions(e){const t=this.slotOptions,l=t.length-1;if(l<0)return;let i,s=this.focusIndex+e;s<0&&(s=l),s>l&&(s=0);let n=null;if(e>0){i=-1;for(let e=0;e<t.length;e++){const{proxy:l}=t[e],o=!l.disabled;if(o&&(i=e),l.isShow&&null===n)n=e;else if(!l.isShow){i=e;continue}if(i>=s)break}}else{i=t.length;for(let e=l;e>=0;e--){const{proxy:l}=t[e],o=!l.disabled;if(o&&(i=e),l.isShow&&null===n)n=e;else if(!l.isShow){i=e;continue}if(i<=s)break}}const o=t[i];s=o.proxy.isShow?i:n,this.focusIndex=s},onOptionClick(e){if(this.multiple){this.remote?this.lastRemoteQuery=this.lastRemoteQuery||this.query:this.lastRemoteQuery="";const t=this.values.find(({value:t})=>t===e.value);this.values=t?this.values.filter(({value:t})=>t!==e.value):this.values.concat(e),this.isFocused=!0}else this.query=String(e.label).trim(),this.values=[e],this.lastRemoteQuery="",this.hideMenu();if(this.focusIndex=this.slotOptions.findIndex(t=>!!t&&t.props.value===e.value),this.filterable){const e=this.$el.querySelector('input[type="text"]');this.autoComplete||Object(i["nextTick"])(()=>e.focus())}this.$emit("on-select",e),this.$refs.dropdown.handleOnUpdatePopper(),setTimeout(()=>{this.filterQueryChange=!1},I)},onQueryChange(e){if(this.isTyping=!0,e.length>0&&e!==this.query)if(x["a"]&&this.autoComplete){let e=document.hasFocus&&document.hasFocus()&&document.activeElement===this.$el.querySelector("input");this.visible=e}else this.visible=!0;this.query=e,this.unchangedQuery=this.visible,this.filterQueryChange=!0},toggleHeaderFocus({type:e}){this.itemDisabled||(this.isFocused="focus"===e)},checkUpdateStatus(){this.getInitialValue().length>0&&0===this.slotOptions.length&&(this.hasExpectedValue=!0)},handleCreateItem(){if(this.allowCreate&&""!==this.query&&this.showCreateItem){const e=this.query;this.$emit("on-create",e),this.query="";const t={value:e,label:e,tag:void 0};this.$refs.dropdown.handleOnUpdatePopper(),setTimeout(()=>{this.onOptionClick(t)})}},handleOnSelectSelected(e){this.onOptionClick(e)},focus(){this.filterable&&(this.$refs.selectHead.$refs.input.focus(),this.toggleMenu())},lazyUpdateValue(e){const{getInitialValue:t,isLocking:l,defaultLabel:s,remote:n,modelValue:o,values:a}=this,r=!(!s||!s.length),c=!(!o||!o.length);(c||a.length||r)&&n&&e||l||(this.isLocking=!0,Object(i["nextTick"])(()=>{this.values=t().map(this.getOptionData).filter(Boolean),this.isLocking=!1}))}},watch:{modelValue(e){const{publicValue:t,values:l}=this;this.checkUpdateStatus(),""===e?(this.values=[],this.query=""):S(e,t,l)&&(this.lazyUpdateValue(),this.multiple||this.handleFormItemChange("change",this.publicValue))},values(e,t){const l=JSON.stringify(e),i=JSON.stringify(t);let s=this.publicValue;const n=l!==i&&s!==this.modelValue;if(n){let e=this.publicValue;this.labelInValue&&(e=this.multiple?this.values:this.values[0]),(Array.isArray(s)&&!s.length&&null===this.modelValue||void 0===s&&null===this.modelValue)&&(s=null),this.$emit("update:modelValue",s),this.$emit("on-change",e),this.handleFormItemChange("change",e)}},query(e){this.focusIndex=-1,this.$emit("on-query-change",e);const{remoteMethod:t,lastRemoteQuery:l}=this,i=""!==e&&(e!==l||!l),s=t&&i&&!this.preventRemoteCall;if(this.preventRemoteCall=!1,s){const t=this.remoteMethod(e);this.initialLabel="",t&&t.then&&t.then(e=>{e&&(this.options=e)})}this.visible&&this.$refs.dropdown.handleOnUpdatePopper(),""!==e&&this.remote&&(this.lastRemoteQuery=e)},isFocused(e){const t=this.filterable?this.$el.querySelector('input[type="text"]'):this.$el;t[this.isFocused?"focus":"blur"]();const[l]=this.values;if(l&&this.filterable&&!this.multiple&&!e){const e=String(l.label||l.value).trim();e&&this.query!==e&&(this.preventRemoteCall=!0,this.query=e)}},focusIndex(e){if(!(e<0||this.autoComplete)&&this.slotOptions[e]){const t=this.slotOptions[e].proxy,l=t.$el,i=this.$refs.dropdown.$refs.drop;let s=l.getBoundingClientRect().bottom-i.getBoundingClientRect().bottom,n=l.getBoundingClientRect().top-i.getBoundingClientRect().top;s>0&&(i.scrollTop+=s),n<0&&(i.scrollTop+=n)}},dropVisible(e){e?this.$refs.dropdown.handleOnUpdatePopper():this.$refs.dropdown.handleOnDestroyPopper()},visible(e){this.$emit("on-open-change",e)}}};const V=g()(B,[["render",o]]);t["a"]=V}}]);