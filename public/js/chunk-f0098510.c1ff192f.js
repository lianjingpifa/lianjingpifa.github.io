(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f0098510"],{"0335":function(e,t,a){"use strict";a("a296")},2410:function(e,t,a){(function(t){var a=function(){"use strict";function e(e,t){return null!=t&&e instanceof t}var a,o,n;try{a=Map}catch(i){a=function(){}}try{o=Set}catch(i){o=function(){}}try{n=Promise}catch(i){n=function(){}}function l(c,r,d,u,i){"object"===typeof r&&(d=r.depth,u=r.prototype,i=r.includeNonEnumerable,r=r.circular);var b=[],f=[],p="undefined"!=typeof t;function O(c,d){if(null===c)return null;if(0===d)return c;var m,j;if("object"!=typeof c)return c;if(e(c,a))m=new a;else if(e(c,o))m=new o;else if(e(c,n))m=new n((function(e,t){c.then((function(t){e(O(t,d-1))}),(function(e){t(O(e,d-1))}))}));else if(l.__isArray(c))m=[];else if(l.__isRegExp(c))m=new RegExp(c.source,s(c)),c.lastIndex&&(m.lastIndex=c.lastIndex);else if(l.__isDate(c))m=new Date(c.getTime());else{if(p&&t.isBuffer(c))return m=t.allocUnsafe?t.allocUnsafe(c.length):new t(c.length),c.copy(m),m;e(c,Error)?m=Object.create(c):"undefined"==typeof u?(j=Object.getPrototypeOf(c),m=Object.create(j)):(m=Object.create(u),j=u)}if(r){var v=b.indexOf(c);if(-1!=v)return f[v];b.push(c),f.push(m)}for(var g in e(c,a)&&c.forEach((function(e,t){var a=O(t,d-1),o=O(e,d-1);m.set(a,o)})),e(c,o)&&c.forEach((function(e){var t=O(e,d-1);m.add(t)})),c){var h;j&&(h=Object.getOwnPropertyDescriptor(j,g)),h&&null==h.set||(m[g]=O(c[g],d-1))}if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(c);for(g=0;g<y.length;g++){var x=y[g],V=Object.getOwnPropertyDescriptor(c,x);(!V||V.enumerable||i)&&(m[x]=O(c[x],d-1),V.enumerable||Object.defineProperty(m,x,{enumerable:!1}))}}if(i){var w=Object.getOwnPropertyNames(c);for(g=0;g<w.length;g++){var N=w[g];V=Object.getOwnPropertyDescriptor(c,N);V&&V.enumerable||(m[N]=O(c[N],d-1),Object.defineProperty(m,N,{enumerable:!1}))}}return m}return"undefined"==typeof r&&(r=!0),"undefined"==typeof d&&(d=1/0),O(c,d)}function c(e){return Object.prototype.toString.call(e)}function r(e){return"object"===typeof e&&"[object Date]"===c(e)}function d(e){return"object"===typeof e&&"[object Array]"===c(e)}function u(e){return"object"===typeof e&&"[object RegExp]"===c(e)}function s(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),t}return l.clonePrototype=function(e){if(null===e)return null;var t=function(){};return t.prototype=e,new t},l.__objToStr=c,l.__isDate=r,l.__isArray=d,l.__isRegExp=u,l.__getRegExpFlags=s,l}();e.exports&&(e.exports=a)}).call(this,a("b639").Buffer)},"3d78":function(e,t,a){"use strict";a("dc91")},6504:function(e,t,a){"use strict";a.r(t);var o=a("48fd"),n=a("a5d6"),l=a("8738"),c=a("7a23"),r=a("2af9"),d=(a("14d9"),a("eeb9"));const u={grid:{bottom:15,top:20,left:0,right:0,containLabel:!0},legend:{data:["销售总量"],right:0,itemWidth:10,itemHeight:8,textStyle:{fontWeight:400,fontSize:12,padding:[0,0,-3,0]}},tooltip:{trigger:"axis",appendToBody:!0,axisPointer:{type:"shadow"}},xAxis:{type:"category",data:[],axisLabel:{rotate:10,fontWeight:400,fontSize:12}},yAxis:{type:"value",axisLabel:{fontWeight:400,fontSize:12}},series:[{data:[],type:"bar",name:"销售总量",barMaxWidth:30,barMinWidth:20,label:{show:!0,position:"top"}}],dataZoom:[{type:"slider",height:15,bottom:5,right:5,startValue:0,endValue:9},{type:"inside",startValue:0,endValue:9,zoomOnMouseWheel:!1,moveOnMouseWheel:!0}]},s={grid:{bottom:0,top:20,left:0,right:0,containLabel:!0},legend:{data:["销售总量"],right:0,itemWidth:10,itemHeight:8,textStyle:{fontWeight:400,fontSize:12,padding:[0,0,-3,0]}},tooltip:{trigger:"axis",appendToBody:!0,axisPointer:{type:"shadow"},position:(e,t,a,o,n)=>{let l={top:e[1]-n.contentSize[1]/2};return e[0]+n.contentSize[0]+20<n.viewSize[0]?l.left=e[0]+20:l.left=e[0]-n.contentSize[0]-20,l}},xAxis:{type:"category",data:[],axisLabel:{fontWeight:400,fontSize:12}},yAxis:{type:"value",axisLabel:{fontWeight:400,fontSize:12}},series:[{data:[],type:"line",name:"销售总量",symbol:"circle",symbolSize:4,smooth:!0}]};var i=a("2410"),b=a.n(i);const f=e=>(Object(c["pushScopeId"])("data-v-453a4eb5"),e=e(),Object(c["popScopeId"])(),e),p={class:"sales-top"},O={class:"chart-header"},m=f(()=>Object(c["createElementVNode"])("p",{class:"vi-title"},[Object(c["createTextVNode"])("商品销量排行榜"),Object(c["createElementVNode"])("span",{class:"vi-text-tip"},"（点击柱子进行商品销量具体分析）")],-1));var j={__name:"salesTop",props:{getParams:{type:Function,default:()=>{}}},emits:["on-change"],setup(e,{expose:t,emit:a}){const o=e,n=Object(c["inject"])("$Message",()=>{}),l=Object(c["ref"])([]);Object(c["watch"])(()=>l.value,e=>{a("on-change",e)},{deep:!0});const s=Object(c["ref"])({}),i=Object(c["ref"])("desc"),f=Object(c["ref"])([]),j=Object(c["ref"])(!1);function v(){if(!f.value.length)return void(s.value={});const e=b()(u);e.legend.data=f.value.map(e=>e.userName||"销售总量");const t=f.value[0].data.map(e=>e.goodName);"asc"===i.value&&t.reverse(),e.xAxis.data=t,e.series=f.value.map(t=>{const a=t.data.map(e=>({userId:t.userId,userName:t.userName,goodId:e.goodId,goodName:e.goodName,value:+(e.count||0)}));return"asc"===i.value&&a.reverse(),{...e.series[0],name:t.userName||"销售总量",data:a}}),f.value[0].data.length<10&&(e.dataZoom=[],e.xAxis.axisLabel.rotate=0),s.value=e}async function g(){try{j.value=!0;const e=o.getParams(),{returnCode:t,data:a}=await Object(d["z"])(e)||{};0===t&&(f.value=a||[],v(),l.value=f.value.map(({data:e})=>e[0]))}catch(e){n.error("获取商品排行榜失败："+(e.message||e))}finally{j.value=!1}}function h(e){e.on("click",e=>{const{goodId:t,goodName:a,userId:o,userName:n}=e.data,c=l.value.findIndex(e=>e.goodId==t&&e.userId==o);-1===c?l.value.push({goodId:t,goodName:a,userId:o,userName:n}):l.value.splice(c,1)})}function y(){g()}function x(){l.value=f.value.map(({data:e})=>e[0])}return t({resetLegend:x,reSearch:y}),Object(c["onMounted"])(()=>{y()}),(e,t)=>{const a=Object(c["resolveComponent"])("Spin"),o=Object(c["resolveComponent"])("Option"),n=Object(c["resolveComponent"])("viSelect");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",p,[Object(c["createVNode"])(a,{fix:"",show:j.value},null,8,["show"]),Object(c["createElementVNode"])("div",O,[m,Object(c["createElementVNode"])("div",null,[Object(c["createVNode"])(n,{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=e=>i.value=e),transfer:"",clearable:!1,onOnChange:v,class:"vi-width ml-10"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(o,{value:"desc"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("倒序")]),_:1}),Object(c["createVNode"])(o,{value:"asc"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("升序")]),_:1})]),_:1},8,["modelValue"])])]),Object(c["createVNode"])(Object(c["unref"])(r["b"]),{options:s.value,onOnMount:h,class:"chart-content"},null,8,["options"])])}}},v=(a("3d78"),a("6b0d")),g=a.n(v);const h=g()(j,[["__scopeId","data-v-453a4eb5"]]);var y=h;a("13d5");const x=e=>(Object(c["pushScopeId"])("data-v-43dd4730"),e=e(),Object(c["popScopeId"])(),e),V={class:"sales-trend"},w={class:"chart-header"},N=x(()=>Object(c["createElementVNode"])("p",{class:"vi-title"},"商品销量趋势分析",-1)),_={class:"flex-none"};var C={__name:"salesTrend",props:{getParams:{type:Function,default:()=>{}},legendData:{type:Array,default:()=>[]}},setup(e){const t=e,a=Object(c["inject"])("$Message",()=>{}),o=Object(c["ref"])({}),n=Object(c["ref"])("month"),l=Object(c["ref"])([]),u=Object(c["ref"])(!1);function i(){if(!l.value.length)return void(o.value={});const e=b()(s);e.legend.data=l.value.map(({userName:e,goodName:t})=>`${e?e+"-":""}${t}`),e.xAxis.data=l.value[0].data.map(e=>e.date),e.series=l.value.map(({userName:t,goodName:a,data:o})=>({...e.series[0],name:`${t?t+"-":""}${a}`,data:o.map(e=>({...e,value:+(e.count||0)}))})),o.value=e}function f(e){const[t,a]=e.split("-Q");return new Date(+t,3*(+a-1))}async function p(){try{if(!t.legendData.length)return void(o.value={});u.value=!0;const{startTime:a,endTime:r}=t.getParams(),{returnCode:s,data:b}=await Object(d["A"])({startTime:a,endTime:r,lineType:n.value,list:t.legendData.filter(Boolean)})||{};if(0===s){l.value=b;const t={day:"YYYY-MM-DD",month:"YYYY-MM",year:"YYYY",quarter:"YYYY-Q"},a=t[n.value];let o=(new Date).format(a),r=new Date(0).format(a);for(let n of b){var e,c;const t=(null===(e=n.data[0])||void 0===e?void 0:e.date)||o,a=(null===(c=n.data[n.data.length-1])||void 0===c?void 0:c.date)||o;t<o&&(o=t),a>r&&(r=a)}const d=[];let u="quarter"===n.value?f(o):new Date(o);while(u.format(a)<=r)if(d.push(u.format(a)),"day"===n.value)u=u.add(1,"days");else if("month"===n.value)u=u.add(1,"months");else if("year"===n.value)u=u.add(1,"years");else{if("quarter"!==n.value)break;u=u.add(1,"quarters")}b.forEach(e=>{const t=e.data.reduce((e,t)=>(e[t.date]=t.count||0,e),{});e.data=d.map(e=>({date:e,count:t[e]}))}),i()}}catch(r){a.error("获取商品销量趋势失败："+(r.message||r))}finally{u.value=!1}}return Object(c["watch"])(()=>t.legendData,()=>{p()},{deep:!0}),Object(c["onMounted"])(()=>{p()}),(e,t)=>{const a=Object(c["resolveComponent"])("Spin"),l=Object(c["resolveComponent"])("Radio"),d=Object(c["resolveComponent"])("RadioGroup");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",V,[Object(c["createVNode"])(a,{fix:"",show:u.value},null,8,["show"]),Object(c["createElementVNode"])("div",w,[N,Object(c["createElementVNode"])("div",_,[Object(c["createVNode"])(d,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),type:"button","button-style":"solid",onOnChange:t[1]||(t[1]=e=>p())},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(l,{label:"year"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("按年")]),_:1}),Object(c["createVNode"])(l,{label:"quarter"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("按季度")]),_:1}),Object(c["createVNode"])(l,{label:"month"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("按月")]),_:1}),Object(c["createVNode"])(l,{label:"day"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("按天")]),_:1})]),_:1},8,["modelValue"])])]),Object(c["createVNode"])(Object(c["unref"])(r["b"]),{options:o.value,class:"chart-content"},null,8,["options"])])}}};a("8516");const D=g()(C,[["__scopeId","data-v-43dd4730"]]);var S=D;const k=e=>(Object(c["pushScopeId"])("data-v-7f74773a"),e=e(),Object(c["popScopeId"])(),e),I={class:"sales-season"},T={class:"chart-header"},E=k(()=>Object(c["createElementVNode"])("p",{class:"vi-title"},"商品季节平均销量",-1)),B={class:"flex-none"};var Y={__name:"salesSeason",props:{getParams:{type:Function,default:()=>{}},legendData:{type:Array,default:()=>[]}},setup(e){const t=e,a=Object(c["inject"])("$Message",()=>{}),o=Object(c["ref"])({}),n=Object(c["ref"])("month"),l=Object(c["ref"])([]),s=Object(c["ref"])(!1);function i(){if(!l.value.length)return void(o.value={});const e=b()(u);e.legend.data=l.value.map(({userName:e,goodName:t})=>`${e?e+"-":""}${t}`),e.xAxis.data=l.value[0].data.map(e=>e.date),e.series=l.value.map(({userName:t,goodName:a,data:o},n)=>({...e.series[0],name:e.legend.data[n],data:o.map(e=>({userName:t,goodName:a,value:+(e.count||0)}))})),e.dataZoom=[],e.xAxis.axisLabel.rotate=0,o.value=e}async function f(){try{if(!t.legendData.length)return void(o.value={});s.value=!0;const{startTime:e,endTime:a}=t.getParams(),{returnCode:c,data:r}=await Object(d["y"])({startTime:e,endTime:a,barType:n.value,list:t.legendData.filter(Boolean)})||{};0===c&&(r.forEach(e=>{const t=e.data.reduce((e,t)=>(e[t.date]=t.count||0,e),{});"month"===n.value?e.data=new Array(12).fill(null).map((e,a)=>({count:t[a+1]||0,date:a+1+"月"})):"quarter"===n.value&&(e.data=new Array(4).fill(null).map((e,a)=>({count:t[a+1]||0,date:"Q"+(a+1)})))}),l.value=r,i())}catch(e){a.error("获取商品销量趋势失败："+(e.message||e))}finally{s.value=!1}}return Object(c["watch"])(()=>t.legendData,()=>{f()},{deep:!0}),Object(c["onMounted"])(()=>{f()}),(e,t)=>{const a=Object(c["resolveComponent"])("Spin"),l=Object(c["resolveComponent"])("Radio"),d=Object(c["resolveComponent"])("RadioGroup");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",I,[Object(c["createVNode"])(a,{fix:"",show:s.value},null,8,["show"]),Object(c["createElementVNode"])("div",T,[E,Object(c["createElementVNode"])("div",B,[Object(c["createVNode"])(d,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),type:"button","button-style":"solid",onOnChange:t[1]||(t[1]=e=>f())},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(l,{label:"quarter"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("按季度")]),_:1}),Object(c["createVNode"])(l,{label:"month"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("按月")]),_:1})]),_:1},8,["modelValue"])])]),Object(c["createVNode"])(Object(c["unref"])(r["b"]),{options:o.value,class:"chart-content"},null,8,["options"])])}}};a("9834");const P=g()(Y,[["__scopeId","data-v-7f74773a"]]);var M=P,z=a("4360");const A={class:"legend-box"};var R={__name:"index",setup(e){const t=Object(z["a"])(),a=Object(c["computed"])(()=>t.dictMap),u={shortcuts:[{text:"本周",value:()=>[(new Date).startOf("week"),new Date]},{text:"近7天",value:()=>[(new Date).subtract(7),new Date]},{text:"本月",value:()=>[(new Date).startOf("month"),new Date]},{text:"近30天",value:()=>[(new Date).subtract(30),new Date]},{text:"近90天",value:()=>[(new Date).subtract(90),new Date]},{text:"今年",value:()=>[(new Date).startOf("year"),new Date]},{text:"近一年",value:()=>[(new Date).subtract(365),new Date]},{text:"近三年",value:()=>[(new Date).subtract(1095),new Date]}]},s=Object(c["ref"])({timeRange:[],label:Object(c["ref"])("1")});function i(){const{timeRange:e,...t}=s.value,[a,o]=e;return{startTime:a&&new Date(a).startOf("day").format("YYYY-MM-DD HH:mm:ss"),endTime:o&&new Date(o).endOf("day").format("YYYY-MM-DD HH:mm:ss"),...t}}const b=Object(c["ref"])();function f(){var e;null===(e=b.value)||void 0===e||e.reSearch()}const p=Object(c["ref"])("trend"),O=Object(c["ref"])([]);function m(e){O.value.splice(e,1)}return(e,t)=>{const j=Object(c["resolveComponent"])("FormItem"),v=Object(c["resolveComponent"])("Radio"),g=Object(c["resolveComponent"])("RadioGroup"),h=Object(c["resolveComponent"])("viSearchForm"),x=Object(c["resolveComponent"])("Icon"),V=Object(c["resolveComponent"])("Button"),w=Object(c["resolveComponent"])("viLayoutUpDown");return Object(c["openBlock"])(),Object(c["createBlock"])(w,null,{up:Object(c["withCtx"])(()=>[Object(c["createVNode"])(h,{modelValue:s.value,"onUpdate:modelValue":t[4]||(t[4]=e=>s.value=e),onSearch:f},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(j,{label:"商品范围:",prop:"goodIds"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(Object(c["unref"])(r["d"]),{modelValue:s.value.goodIds,"onUpdate:modelValue":t[0]||(t[0]=e=>s.value.goodIds=e),getData:Object(c["unref"])(d["u"]),valueKey:"goodId",multiple:"",filterable:"",class:"fuzzy-width"},null,8,["modelValue","getData"])]),_:1}),Object(c["createVNode"])(j,{label:"客户范围:",prop:"userIds"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(Object(c["unref"])(r["d"]),{modelValue:s.value.userIds,"onUpdate:modelValue":t[1]||(t[1]=e=>s.value.userIds=e),getData:Object(c["unref"])(d["C"]),valueKey:"userId",multiple:"",filterable:"",class:"fuzzy-width"},null,8,["modelValue","getData"])]),_:1}),Object(c["createVNode"])(j,{label:"时间范围:",prop:"timeRange"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(Object(c["unref"])(l["a"]),{modelValue:s.value.timeRange,"onUpdate:modelValue":t[2]||(t[2]=e=>s.value.timeRange=e),type:"daterange",options:u,placeholder:"请选择",class:"stat-width"},null,8,["modelValue"])]),_:1}),Object(c["createVNode"])(j,{label:"排行范围:",prop:"label"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(g,{modelValue:s.value.label,"onUpdate:modelValue":t[3]||(t[3]=e=>s.value.label=e)},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(v,{label:""},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("全部")]),_:1}),(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(a.value.good,(e,t)=>(Object(c["openBlock"])(),Object(c["createBlock"])(v,{key:t,label:e.id},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.name),1)]),_:2},1032,["label"]))),128)),Object(c["createVNode"])(v,{label:"其他"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("其他")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])]),down:Object(c["withCtx"])(()=>[Object(c["createVNode"])(y,{ref_key:"salesTopRef",ref:b,getParams:i,onOnChange:t[5]||(t[5]=e=>O.value=e)},null,512),Object(c["createVNode"])(Object(c["unref"])(n["a"]),{modelValue:p.value,"onUpdate:modelValue":t[8]||(t[8]=e=>p.value=e),animated:!1},{extra:Object(c["withCtx"])(()=>[Object(c["createElementVNode"])("div",A,[Object(c["createElementVNode"])("p",{class:"legend-list",ref:"list",onWheel:t[6]||(t[6]=t=>e.$refs.list.scrollLeft+=t.deltaY)},[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(O.value,(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",{key:t},[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.userId?e.userName+"-":"")+Object(c["toDisplayString"])(e.goodName)+" ",1),Object(c["createVNode"])(x,{type:"md-close",size:"16",onClick:e=>m(t),class:"vi-link-pointer mr-5"},null,8,["onClick"])]))),128))],544),Object(c["createVNode"])(V,{class:"ml-15 fr",onClick:t[7]||(t[7]=e=>b.value.resetLegend())},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])("重置")]),_:1})])]),default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(Object(c["unref"])(o["a"]),{label:"趋势分析",name:"trend"}),Object(c["createVNode"])(Object(c["unref"])(o["a"]),{label:"季节分析",name:"season"})]),_:1},8,["modelValue"]),"trend"===p.value?(Object(c["openBlock"])(),Object(c["createBlock"])(S,{key:0,getParams:i,legendData:O.value},null,8,["legendData"])):Object(c["createCommentVNode"])("",!0),"season"===p.value?(Object(c["openBlock"])(),Object(c["createBlock"])(M,{key:1,getParams:i,legendData:O.value},null,8,["legendData"])):Object(c["createCommentVNode"])("",!0)]),_:1})}}};a("0335");const L=g()(R,[["__scopeId","data-v-7c5b39c1"]]);t["default"]=L},"77dd":function(e,t,a){},8516:function(e,t,a){"use strict";a("77dd")},9834:function(e,t,a){"use strict";a("cce0")},a296:function(e,t,a){},cce0:function(e,t,a){},dc91:function(e,t,a){}}]);