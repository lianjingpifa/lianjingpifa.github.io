(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f85f139","chunk-2d0f0481"],{"07ae":function(e,t,l){"use strict";l("acee")},"6b05":function(e,t,l){"use strict";l.r(t);l("14d9");var a=l("7a23"),n=l("af58"),o=l("9c67");const u=["onClick"];var r={__name:"index",props:{modelValue:{type:[String,Number],default:""},multiple:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},getData:{type:Function},valueKey:{type:String,default:"id"},labelKey:{type:String,default:"name"},queryKey:{type:String,default:"name"},extraKey:{type:String,default:""},params:{type:Object,default(){return{}}},placeholder:{type:String,default:"请选择"}},emits:["update:modelValue","on-change"],setup(e,{expose:t,emit:l}){const r=e,c=Object(a["inject"])("$Message",()=>{}),i=Object(a["ref"])([]),d=Object(a["ref"])(!1),s=Object(a["computed"])({get(){return r.modelValue},set(e){d.value||(l("update:modelValue",e),l("on-change",e,r.multiple?[...i.value]:i.value[0]))}}),f=Object(a["ref"])();function b(e){const t=i.value.findIndex(t=>e[r.valueKey]===t[r.valueKey]);-1!==t?i.value.splice(t,1):r.multiple?i.value.push(e):i.value=[e];const l=i.value.map(e=>e[r.valueKey]);s.value=l.join(),r.multiple||f.value.changeDropdown(!1)}const v=Object(a["ref"])(!1),p=Object(a["ref"])(!1),m=Object(a["ref"])([]),j=Object(a["ref"])(1),O=Object(a["ref"])(""),y=Object(a["ref"])(-1),g=Object(a["ref"])(null);function h(e){"ArrowDown"===e.key&&y.value<m.value.length-1?(y.value++,g.value[y.value].scrollIntoView(!1)):"ArrowUp"===e.key&&y.value>0?(y.value--,g.value[y.value].scrollIntoView(!1)):"Enter"==e.key&&m.value[y.value]&&b(m.value[y.value])}async function k(){if(!v.value)try{d.value=!0,y.value=-1;const{returnCode:e,data:t}=await r.getData({[r.queryKey]:O.value,...r.params,curPage:j.value,pageSize:10})||{};0===e&&(m.value=[...m.value,...t.rows],j.value++,v.value=m.value.length>=t.count)}catch(e){p.value=!0,c.error("加载失败："+(e.message||e))}finally{d.value=!1}}function w(e){!r.multiple&&i.value[0]&&i.value[0][r.labelKey]===e||(v.value=!1,O.value=e,j.value=1,m.value=[],k())}function x(){f.value.focus()}Object(a["watch"])(()=>r.modelValue,async e=>{const t=i.value.filter(t=>r.multiple?!!e.split(",").find(e=>e==t[r.valueKey]):t[r.valueKey]==e);if(e&&!t.length)try{d.value=!0;const{returnCode:e,data:t}=await r.getData({[r.valueKey]:r.modelValue})||{};0===e&&(d.value=!1,t.rows.map(e=>b(e)),f.value.$refs.selectRef.values=t.rows.map(e=>({value:e[r.valueKey],label:e[r.labelKey],tag:null})))}catch(l){d.value=!1,console.error("回显失败："+(l.message||l))}else i.value=t},{immediate:!0}),t({focus:x});let V=null;return Object(a["onMounted"])(()=>{w(),V=f.value.$el,V.addEventListener("keydown",h)}),Object(a["onBeforeUnmount"])(()=>{V.removeEventListener("keydown",h)}),(t,l)=>{const r=Object(a["resolveComponent"])("Option");return Object(a["openBlock"])(),Object(a["createBlock"])(Object(a["unref"])(o["default"]),{ref_key:"selectRef",ref:f,modelValue:s.value,"onUpdate:modelValue":l[3]||(l[3]=e=>s.value=e),filterable:e.filterable,multiple:e.multiple,notFoundText:"",placeholder:e.placeholder,onOnQueryChange:w},{default:Object(a["withCtx"])(()=>[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(i.value,t=>(Object(a["openBlock"])(),Object(a["createBlock"])(r,{key:t,value:String(t[e.valueKey]),label:t[e.labelKey],style:{display:"none !important"}},null,8,["value","label"]))),128)),Object(a["createVNode"])(Object(a["unref"])(n["a"]),{loading:d.value,"onUpdate:loading":l[0]||(l[0]=e=>d.value=e),finished:v.value,"finished-text":m.value.length?"没有更多了":"无匹配数据",error:p.value,"onUpdate:error":l[1]||(l[1]=e=>p.value=e),"error-text":"加载失败",onLoad:l[2]||(l[2]=e=>k()),class:"list"},{default:Object(a["withCtx"])(()=>[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(m.value,(t,l)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("li",{ref_for:!0,ref_key:"optionLi",ref:g,key:t[e.valueKey],onClick:e=>b(t),class:Object(a["normalizeClass"])(["ivu-select-item",[{"ivu-select-item-selected":!!i.value.find(l=>t[e.valueKey]==l[e.valueKey])},{"ivu-select-item-hover":y.value===l}]])},Object(a["toDisplayString"])(t[e.labelKey])+Object(a["toDisplayString"])(e.extraKey?`（${t[e.extraKey]}）`:""),11,u))),128))]),_:1},8,["loading","finished","finished-text","error"])]),_:1},8,["modelValue","filterable","multiple","placeholder"])}}},c=(l("07ae"),l("6b0d")),i=l.n(c);const d=i()(r,[["__scopeId","data-v-357f9709"]]);t["default"]=d},"9c67":function(e,t,l){"use strict";l.r(t);var a=l("df4e"),n=a["a"],o=l("7a23"),u={__name:"index",props:{modelValue:{type:[String,Number],default:""},clearable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},transfer:{type:Boolean,default:!0},notFoundText:{type:String,default:"无匹配数据"},placeholder:{type:String,default:"请选择"}},emits:["update:modelValue","on-change","on-query-change"],setup(e,{expose:t,emit:l}){const a=e,u=Object(o["computed"])({get(){return a.multiple?a.modelValue?a.modelValue.split(","):[]:a.modelValue},set(e){const t=a.multiple?e.join(","):e;l("update:modelValue",t),l("on-change",t)}}),r=Object(o["ref"])(window.isMobile),c=Object(o["ref"])();function i(e){c.value.toggleMenu(null,e)}function d(){c.value.focus()}return t({changeDropdown:i,focus:d}),(t,a)=>(Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["unref"])(n),{ref_key:"selectRef",ref:c,modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=e=>u.value=e),clearable:e.clearable,multiple:e.multiple,filterable:e.filterable,transfer:e.transfer,size:r.value?"large":"default","not-found-text":e.notFoundText,placeholder:e.placeholder,onOnQueryChange:a[1]||(a[1]=e=>l("on-query-change",e))},{default:Object(o["withCtx"])(()=>[Object(o["renderSlot"])(t.$slots,"default")]),_:3},8,["modelValue","clearable","multiple","filterable","transfer","size","not-found-text","placeholder"]))}};const r=u;t["default"]=r},acee:function(e,t,l){},af58:function(e,t,l){"use strict";l.d(t,"a",(function(){return j}));var a=l("23f9"),n=l("7a23"),o=l("1fba"),u=l("e5f6"),r=l("8db7"),c=l("450f"),i=l("efd9"),d=l("be32"),s=l("5913");const[f,b,v]=Object(o["a"])("list"),p={error:Boolean,offset:Object(u["c"])(300),loading:Boolean,disabled:Boolean,finished:Boolean,scroller:Object,errorText:String,direction:Object(u["e"])("down"),loadingText:String,finishedText:String,immediateCheck:u["g"]};var m=Object(n["defineComponent"])({name:f,props:p,emits:["load","update:error","update:loading"],setup(e,{emit:t,slots:l}){const a=Object(n["ref"])(e.loading),o=Object(n["ref"])(),u=Object(n["ref"])(),f=Object(d["b"])(),p=Object(c["useScrollParent"])(o),m=Object(n["computed"])(()=>e.scroller||p.value),j=()=>{Object(n["nextTick"])(()=>{if(a.value||e.finished||e.disabled||e.error||!1===(null==f?void 0:f.value))return;const{direction:l}=e,n=+e.offset,i=Object(c["useRect"])(m);if(!i.height||Object(r["d"])(o))return;let d=!1;const s=Object(c["useRect"])(u);d="up"===l?i.top-s.top<=n:s.bottom-i.bottom<=n,d&&(a.value=!0,t("update:loading",!0),t("load"))})},O=()=>{if(e.finished){const t=l.finished?l.finished():e.finishedText;if(t)return Object(n["createVNode"])("div",{class:b("finished-text")},[t])}},y=()=>{t("update:error",!1),j()},g=()=>{if(e.error){const t=l.error?l.error():e.errorText;if(t)return Object(n["createVNode"])("div",{role:"button",class:b("error-text"),tabindex:0,onClick:y},[t])}},h=()=>{if(a.value&&!e.finished&&!e.disabled)return Object(n["createVNode"])("div",{class:b("loading")},[l.loading?l.loading():Object(n["createVNode"])(s["a"],{class:b("loading-icon")},{default:()=>[e.loadingText||v("loading")]})])};return Object(n["watch"])(()=>[e.loading,e.finished,e.error],j),f&&Object(n["watch"])(f,e=>{e&&j()}),Object(n["onUpdated"])(()=>{a.value=e.loading}),Object(n["onMounted"])(()=>{e.immediateCheck&&j()}),Object(i["a"])({check:j}),Object(c["useEventListener"])("scroll",j,{target:m,passive:!0}),()=>{var t;const r=null==(t=l.default)?void 0:t.call(l),c=Object(n["createVNode"])("div",{ref:u,class:b("placeholder")},null);return Object(n["createVNode"])("div",{ref:o,role:"feed",class:b(),"aria-busy":a.value},["down"===e.direction?r:c,h(),O(),g(),"up"===e.direction?r:c])}}});const j=Object(a["a"])(m)},be32:function(e,t,l){"use strict";l.d(t,"a",(function(){return n})),l.d(t,"b",(function(){return o}));var a=l("7a23");const n=Symbol(),o=()=>Object(a["inject"])(n,null)}}]);