(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d209017"],{a6e1:function(e,t,s){"use strict";s.r(t);var c=s("7a23"),i=s("0ae8"),a=s("aee2"),n={__name:"index",props:{src:{type:String,default:""},size:{type:String,default:"80px"}},setup(e){const t=e,s=Object(c["ref"])("");function n(){Object(i["a"])({images:[s.value],showIndex:!1})}return Object(c["watch"])(()=>t.src,()=>{if(t.src.startsWith("http"))s.value=t.src;else{const e=sessionStorage.getItem("imagePrefix");s.value=`${e}${t.src}`}},{immediate:!0}),(t,i)=>(Object(c["openBlock"])(),Object(c["createBlock"])(Object(c["unref"])(a["a"]),{width:e.size,height:e.size,src:s.value,"lazy-load":"",onClick:Object(c["withModifiers"])(n,["stop"]),class:"pointer"},null,8,["width","height","src","onClick"]))}};const r=n;t["default"]=r}}]);