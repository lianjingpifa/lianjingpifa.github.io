(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2085ed"],{a503:function(e,t,n){"use strict";n.r(t);var o=n("7a23");function a(e,t,n,a,s,c){const d=Object(o["resolveComponent"])("viInput");return Object(o["openBlock"])(),Object(o["createBlock"])(d,{ref:"scan",modelValue:c.barcode,"onUpdate:modelValue":t[0]||(t[0]=e=>c.barcode=e),placeholder:s.isMobile?"请输入":"聚焦扫码录入或手动输入",onOnEnter:c.enter},null,8,["modelValue","placeholder","onOnEnter"])}var s={name:"viBarcodeInput",props:{modelValue:{type:String,default:""},disabled:{type:Boolean,default:!1}},data(){return{isMobile:window.isMobile}},computed:{barcode:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}}},methods:{focus(){this.$refs.scan.focus()},enter(){this.$emit("on-enter",this.barcode)},handleScan({barcode:e}){this.disabled||("INPUT"!==document.activeElement.tagName&&this.focus(),this.$refs.scan.isFocus()&&(this.$Message.success("识别到扫码：\n"+e),this.barcode=e,this.$nextTick(()=>{this.enter()})))}},created(){this.$EventBus.$on("barcode",this.handleScan)},beforeUnmount(){this.$EventBus.$off("barcode",this.handleScan)}},c=n("6b0d"),d=n.n(c);const i=d()(s,[["render",a]]);t["default"]=i}}]);
//# sourceMappingURL=chunk-2d2085ed.72853d9a.js.map