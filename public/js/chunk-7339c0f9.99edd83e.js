(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7339c0f9"],{"0ae8":function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var l=a("7a23"),o=a("fa7c"),i=a("6872"),c=a("e561");let r;const n={loop:!0,images:[],maxZoom:3,minZoom:1/3,onScale:void 0,onClose:void 0,onChange:void 0,vertical:!1,teleport:"body",className:"",showIndex:!0,closeable:!1,closeIcon:"clear",transition:void 0,beforeClose:void 0,doubleScale:!0,overlayStyle:void 0,overlayClass:void 0,startPosition:0,swipeDuration:300,showIndicators:!1,closeOnPopstate:!0,closeOnClickOverlay:!0,closeIconPosition:"top-right"};function s(){({instance:r}=Object(i["a"])({setup(){const{state:e,toggle:t}=Object(i["b"])(),a=()=>{e.images=[]};return()=>Object(l["createVNode"])(c["a"],Object(l["mergeProps"])(e,{onClosed:a,"onUpdate:show":t}),null)}}))}const d=(e,t=0)=>{if(o["d"])return r||s(),e=Array.isArray(e)?{images:e,startPosition:t}:e,r.open(Object(o["a"])({},n,e)),r}},"0ae84":function(e,t,a){},7171:function(e,t,a){"use strict";a.r(t);var l=a("7a23"),o=a("23f9"),i=a("e5f6"),c=a("fa7c"),r=a("5aa0"),n=a("1fba");const[s,d,u]=Object(n["a"])("uploader");function p(e,t){return new Promise(a=>{if("file"===t)return void a();const l=new FileReader;l.onload=e=>{a(e.target.result)},"dataUrl"===t?l.readAsDataURL(e):"text"===t&&l.readAsText(e)})}function b(e,t){return Object(c["o"])(e).some(e=>!!e.file&&(Object(c["g"])(t)?t(e.file):e.file.size>+t))}function m(e,t){const a=[],l=[];return e.forEach(e=>{b(e,t)?l.push(e):a.push(e)}),{valid:a,invalid:l}}const f=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg|avif)/i,v=e=>f.test(e);function j(e){return!!e.isImage||(e.file&&e.file.type?0===e.file.type.indexOf("image"):e.url?v(e.url):"string"===typeof e.content&&0===e.content.indexOf("data:image"))}var O=a("450f"),g=a("efd9"),w=a("9a1c"),V=a("0ae8"),h=a("9b55"),y=a("aee2"),x=a("5913"),k=Object(l["defineComponent"])({props:{name:i["f"],item:Object(i["d"])(Object),index:Number,imageFit:String,lazyLoad:Boolean,deletable:Boolean,reupload:Boolean,previewSize:[Number,String,Array],beforeDelete:Function},emits:["delete","preview","reupload"],setup(e,{emit:t,slots:a}){const o=()=>{const{status:t,message:a}=e.item;if("uploading"===t||"failed"===t){const e="failed"===t?Object(l["createVNode"])(w["a"],{name:"close",class:d("mask-icon")},null):Object(l["createVNode"])(x["a"],{class:d("loading")},null),o=Object(c["f"])(a)&&""!==a;return Object(l["createVNode"])("div",{class:d("mask")},[e,o&&Object(l["createVNode"])("div",{class:d("mask-message")},[a])])}},i=a=>{const{name:l,item:o,index:i,beforeDelete:c}=e;a.stopPropagation(),Object(h["a"])(c,{args:[o,{name:l,index:i}],done:()=>t("delete")})},n=()=>t("preview"),s=()=>t("reupload"),p=()=>{if(e.deletable&&"uploading"!==e.item.status){const e=a["preview-delete"];return Object(l["createVNode"])("div",{role:"button",class:d("preview-delete",{shadow:!e}),tabindex:0,"aria-label":u("delete"),onClick:i},[e?e():Object(l["createVNode"])(w["a"],{name:"cross",class:d("preview-delete-icon")},null)])}},b=()=>{if(a["preview-cover"]){const{index:t,item:o}=e;return Object(l["createVNode"])("div",{class:d("preview-cover")},[a["preview-cover"](Object(c["a"])({index:t},o))])}},m=()=>{const{item:t,lazyLoad:a,imageFit:o,previewSize:i,reupload:c}=e;return j(t)?Object(l["createVNode"])(y["a"],{fit:o,src:t.objectUrl||t.content||t.url,class:d("preview-image"),width:Array.isArray(i)?i[0]:i,height:Array.isArray(i)?i[1]:i,lazyLoad:a,onClick:c?s:n},{default:b}):Object(l["createVNode"])("div",{class:d("file"),style:Object(r["f"])(e.previewSize)},[Object(l["createVNode"])(w["a"],{class:d("file-icon"),name:"description"},null),Object(l["createVNode"])("div",{class:[d("file-name"),"van-ellipsis"]},[t.file?t.file.name:t.url]),b()])};return()=>Object(l["createVNode"])("div",{class:d("preview")},[m(),o(),p()])}});const N={name:Object(i["c"])(""),accept:Object(i["e"])("image/*"),capture:String,multiple:Boolean,disabled:Boolean,readonly:Boolean,lazyLoad:Boolean,maxCount:Object(i["c"])(1/0),imageFit:Object(i["e"])("cover"),resultType:Object(i["e"])("dataUrl"),uploadIcon:Object(i["e"])("photograph"),uploadText:String,deletable:i["g"],reupload:Boolean,afterRead:Function,showUpload:i["g"],modelValue:Object(i["a"])(),beforeRead:Function,beforeDelete:Function,previewSize:[Number,String,Array],previewImage:i["g"],previewOptions:Object,previewFullImage:i["g"],maxSize:{type:[Number,String,Function],default:1/0}};var U=Object(l["defineComponent"])({name:s,props:N,emits:["delete","oversize","clickUpload","closePreview","clickPreview","clickReupload","update:modelValue"],setup(e,{emit:t,slots:a}){const o=Object(l["ref"])(),i=[],n=Object(l["ref"])(-1),s=Object(l["ref"])(!1),u=(t=e.modelValue.length)=>({name:e.name,index:t}),f=()=>{o.value&&(o.value.value="")},v=a=>{if(f(),b(a,e.maxSize)){if(!Array.isArray(a))return void t("oversize",a,u());{const l=m(a,e.maxSize);if(a=l.valid,t("oversize",l.invalid,u()),!a.length)return}}if(a=Object(l["reactive"])(a),n.value>-1){const l=[...e.modelValue];l.splice(n.value,1,a),t("update:modelValue",l),n.value=-1}else t("update:modelValue",[...e.modelValue,...Object(c["o"])(a)]);e.afterRead&&e.afterRead(a,u())},h=t=>{const{maxCount:a,modelValue:l,resultType:o}=e;if(Array.isArray(t)){const e=+a-l.length;t.length>e&&(t=t.slice(0,e)),Promise.all(t.map(e=>p(e,o))).then(e=>{const a=t.map((t,a)=>{const l={file:t,status:"",message:"",objectUrl:URL.createObjectURL(t)};return e[a]&&(l.content=e[a]),l});v(a)})}else p(t,o).then(e=>{const a={file:t,status:"",message:"",objectUrl:URL.createObjectURL(t)};e&&(a.content=e),v(a)})},y=t=>{const{files:a}=t.target;if(e.disabled||!a||!a.length)return;const l=1===a.length?a[0]:[].slice.call(a);if(e.beforeRead){const t=e.beforeRead(l,u());if(!t)return void f();if(Object(c["k"])(t))return void t.then(e=>{h(e||l)}).catch(f)}h(l)};let x;const N=()=>t("closePreview"),U=t=>{if(e.previewFullImage){const a=e.modelValue.filter(j),l=a.map(e=>(e.objectUrl&&!e.url&&"failed"!==e.status&&(e.url=e.objectUrl,i.push(e.url)),e.url)).filter(Boolean);x=Object(V["a"])(Object(c["a"])({images:l,startPosition:a.indexOf(t),onClose:N},e.previewOptions))}},C=()=>{x&&x.close()},S=(a,l)=>{const o=e.modelValue.slice(0);o.splice(l,1),t("update:modelValue",o),t("delete",a,u(l))},z=e=>{s.value=!0,n.value=e,Object(l["nextTick"])(()=>L())},P=()=>{s.value||(n.value=-1),s.value=!1},R=(o,i)=>{const r=["imageFit","deletable","reupload","previewSize","beforeDelete"],n=Object(c["a"])(Object(c["n"])(e,r),Object(c["n"])(o,r,!0));return Object(l["createVNode"])(k,Object(l["mergeProps"])({item:o,index:i,onClick:()=>t(e.reupload?"clickReupload":"clickPreview",o,u(i)),onDelete:()=>S(o,i),onPreview:()=>U(o),onReupload:()=>z(i)},Object(c["n"])(e,["name","lazyLoad"]),n),Object(c["n"])(a,["preview-cover","preview-delete"]))},F=()=>{if(e.previewImage)return e.modelValue.map(R)},I=e=>t("clickUpload",e),A=()=>{if(e.modelValue.length>=+e.maxCount&&!e.reupload)return;const t=e.modelValue.length>=+e.maxCount&&e.reupload,i=e.readonly?null:Object(l["createVNode"])("input",{ref:o,type:"file",class:d("input"),accept:e.accept,capture:e.capture,multiple:e.multiple&&-1===n.value,disabled:e.disabled,onChange:y,onClick:P},null);return a.default?Object(l["withDirectives"])(Object(l["createVNode"])("div",{class:d("input-wrapper"),onClick:I},[a.default(),i]),[[l["vShow"],!t]]):Object(l["withDirectives"])(Object(l["createVNode"])("div",{class:d("upload",{readonly:e.readonly}),style:Object(r["f"])(e.previewSize),onClick:I},[Object(l["createVNode"])(w["a"],{name:e.uploadIcon,class:d("upload-icon")},null),e.uploadText&&Object(l["createVNode"])("span",{class:d("upload-text")},[e.uploadText]),i]),[[l["vShow"],e.showUpload&&!t]])},L=()=>{o.value&&!e.disabled&&o.value.click()};return Object(l["onBeforeUnmount"])(()=>{i.forEach(e=>URL.revokeObjectURL(e))}),Object(g["a"])({chooseFile:L,closeImagePreview:C}),Object(O["useCustomFieldValue"])(()=>e.modelValue),()=>Object(l["createVNode"])("div",{class:d()},[Object(l["createVNode"])("div",{class:d("wrapper",{disabled:e.disabled})},[F(),A()])])}});const C=Object(o["a"])(U);var S=a("eeb9"),z={__name:"index",props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:t}){const a=e,o=Object(l["inject"])("$Message",()=>{}),i=sessionStorage.getItem("imagePrefix"),c=Object(l["ref"])([]);async function r(e){try{e.status="uploading",e.message="上传中...";const t=new FormData;t.append("file",e.file);const{returnCode:a,data:l}=await Object(S["L"])(t)||{};0===a&&(e.url=`${i}${l}`,e.originalUrl=l,e.status="",e.message="")}catch(t){e.status="failed",e.message="上传失败",o.error("网络超时")}}function n(e){"failed"===e.status&&r(e)}return Object(l["watch"])(()=>a.modelValue,e=>{c.value=e?e.split(",").map(e=>({originalUrl:e,url:`${i}${e}`})):[]},{immediate:!0}),Object(l["watch"])(()=>c.value,e=>{e.every(e=>e.originalUrl)&&t("update:modelValue",e.map(e=>e.originalUrl).join(","))},{deep:!0}),(e,t)=>(Object(l["openBlock"])(),Object(l["createBlock"])(Object(l["unref"])(C),{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=e=>c.value=e),accept:"image/*","after-read":r,onClickPreview:n,class:"viUploadImg"},null,8,["modelValue"]))}},P=(a("8edf"),a("6b0d")),R=a.n(P);const F=R()(z,[["__scopeId","data-v-5b42c2d4"]]);t["default"]=F},"8edf":function(e,t,a){"use strict";a("0ae84")}}]);