(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a62fce0"],{"8af8":function(e,t,n){"use strict";n("c34b")},c34b:function(e,t,n){},feda:function(e,t,n){"use strict";n.r(t);n("14d9");var c=n("7a23"),l=n("6605");const o=e=>(Object(c["pushScopeId"])("data-v-4026fea5"),e=e(),Object(c["popScopeId"])(),e),a={class:"tip"},i=o(()=>Object(c["createElementVNode"])("p",null,"你在思考人生",-1)),u=["onClick"];var r={__name:"index",setup(e){const t=Object(l["d"])(),n=Object(c["ref"])({left:"calc(50% - 25px)",top:"calc(50% - 25px)"}),o=Object(c["ref"])(10*Math.random()-5),r=Object(c["ref"])(10*Math.random()-5),s=()=>{const e=document.querySelector(".container"),t=document.querySelector(".ball"),c=e.getBoundingClientRect(),l=t.getBoundingClientRect();let a=l.left,i=l.top;a+=o.value,i+=r.value,(a<=0||a+l.width>=c.width)&&(o.value=-o.value),(i<=0||i+l.height>=c.height)&&(r.value=-r.value),n.value.left=a+"px",n.value.top=i+"px"};let d=null;const p=()=>{s(),d=requestAnimationFrame(p)},b=Object(c["ref"])({});let h=null;const j=()=>{fetch("https://api.kekc.cn/api/yien").then(async e=>{const t=await e.json();b.value=t}),h&&clearTimeout(h),h=setTimeout(()=>{j()},3e4)},m=()=>{t.push("/login")};return Object(c["onMounted"])(()=>{p(),j(),window.document.title="思考人生"}),Object(c["onBeforeUnmount"])(()=>{clearTimeout(h),h=null,cancelAnimationFrame(d),d=null}),(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:"container",onClick:m},[Object(c["createElementVNode"])("div",{style:Object(c["normalizeStyle"])(n.value),class:"ball"},null,4),Object(c["createElementVNode"])("div",a,[i,Object(c["createElementVNode"])("p",null,Object(c["toDisplayString"])(b.value.cn||"生活就像海洋，只有意志坚强的人才能到达彼岸。"),1),Object(c["createElementVNode"])("p",null,Object(c["toDisplayString"])(b.value.en||"Life is like an ocean, only those with strong willpower can reach the other shore."),1),Object(c["createElementVNode"])("button",{onClick:Object(c["withModifiers"])(j,["stop"])},"说得好",8,u)])]))}},s=(n("8af8"),n("6b0d")),d=n.n(s);const p=d()(r,[["__scopeId","data-v-4026fea5"]]);t["default"]=p}}]);