(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54349c5c"],{2410:function(e,t,r){(function(t){var r=function(){"use strict";function e(e,t){return null!=t&&e instanceof t}var r,n,o;try{r=Map}catch(h){r=function(){}}try{n=Set}catch(h){n=function(){}}try{o=Promise}catch(h){o=function(){}}function a(i,c,l,s,h){"object"===typeof c&&(l=c.depth,s=c.prototype,h=c.includeNonEnumerable,c=c.circular);var d=[],p=[],f="undefined"!=typeof t;function g(i,l){if(null===i)return null;if(0===l)return i;var m,b;if("object"!=typeof i)return i;if(e(i,r))m=new r;else if(e(i,n))m=new n;else if(e(i,o))m=new o((function(e,t){i.then((function(t){e(g(t,l-1))}),(function(e){t(g(e,l-1))}))}));else if(a.__isArray(i))m=[];else if(a.__isRegExp(i))m=new RegExp(i.source,u(i)),i.lastIndex&&(m.lastIndex=i.lastIndex);else if(a.__isDate(i))m=new Date(i.getTime());else{if(f&&t.isBuffer(i))return m=t.allocUnsafe?t.allocUnsafe(i.length):new t(i.length),i.copy(m),m;e(i,Error)?m=Object.create(i):"undefined"==typeof s?(b=Object.getPrototypeOf(i),m=Object.create(b)):(m=Object.create(s),b=s)}if(c){var O=d.indexOf(i);if(-1!=O)return p[O];d.push(i),p.push(m)}for(var v in e(i,r)&&i.forEach((function(e,t){var r=g(t,l-1),n=g(e,l-1);m.set(r,n)})),e(i,n)&&i.forEach((function(e){var t=g(e,l-1);m.add(t)})),i){var j;b&&(j=Object.getOwnPropertyDescriptor(b,v)),j&&null==j.set||(m[v]=g(i[v],l-1))}if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(i);for(v=0;v<E.length;v++){var _=E[v],y=Object.getOwnPropertyDescriptor(i,_);(!y||y.enumerable||h)&&(m[_]=g(i[_],l-1),y.enumerable||Object.defineProperty(m,_,{enumerable:!1}))}}if(h){var k=Object.getOwnPropertyNames(i);for(v=0;v<k.length;v++){var w=k[v];y=Object.getOwnPropertyDescriptor(i,w);y&&y.enumerable||(m[w]=g(i[w],l-1),Object.defineProperty(m,w,{enumerable:!1}))}}return m}return"undefined"==typeof c&&(c=!0),"undefined"==typeof l&&(l=1/0),g(i,l)}function i(e){return Object.prototype.toString.call(e)}function c(e){return"object"===typeof e&&"[object Date]"===i(e)}function l(e){return"object"===typeof e&&"[object Array]"===i(e)}function s(e){return"object"===typeof e&&"[object RegExp]"===i(e)}function u(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),t}return a.clonePrototype=function(e){if(null===e)return null;var t=function(){};return t.prototype=e,new t},a.__objToStr=i,a.__isDate=c,a.__isArray=l,a.__isRegExp=s,a.__getRegExpFlags=u,a}();e.exports&&(e.exports=r)}).call(this,r("b639").Buffer)},"2c81":function(e,t,r){},"71ed":function(e,t,r){"use strict";r("2c81")},8339:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),o=r("d044"),a=r.n(o),i=r("2410"),c=r.n(i),l=r("4360");const s=e=>(Object(n["pushScopeId"])("data-v-6cf843e0"),e=e(),Object(n["popScopeId"])(),e),u={class:"print-wrapper"},h={id:"print-content",ref:"box"},d={class:"table-header"},p={key:0,class:"header-qrcode"},f=s(()=>Object(n["createElementVNode"])("p",{class:"mr-5"},null,-1)),g={key:0,class:"left-text"},m=s(()=>Object(n["createElementVNode"])("p",{class:"mr-5"},null,-1)),b={class:"header-content"},O={class:"tc"},v={class:"header-msg"},j={class:"address"},E={class:"phone"},_={class:"header-msg"},y={key:0},k={key:1},w=s(()=>Object(n["createElementVNode"])("span",{class:"ml-22"},"月",-1)),D=s(()=>Object(n["createElementVNode"])("span",{class:"ml-22"},"日",-1)),B={key:1,class:"header-qrcode"},C=s(()=>Object(n["createElementVNode"])("p",{class:"ml-5"},null,-1)),A={key:0,class:"right-text"},N=s(()=>Object(n["createElementVNode"])("p",{class:"ml-5"},null,-1)),T={class:"table-right"},L=s(()=>Object(n["createElementVNode"])("span",null,"︵",-1)),P=s(()=>Object(n["createElementVNode"])("span",null,"︶",-1)),M=Object(n["createStaticVNode"])('<div class="thead" data-v-6cf843e0><div class="tr" data-v-6cf843e0><p class="index" data-v-6cf843e0>序号</p><p class="name" data-v-6cf843e0>名称</p><p class="standard" data-v-6cf843e0>规格</p><p class="unit" data-v-6cf843e0>单位</p><p class="count" data-v-6cf843e0>数量</p><p class="price" data-v-6cf843e0>单价</p><p class="subtotal" data-v-6cf843e0>小计</p><p class="remarks" data-v-6cf843e0>备注</p></div></div>',1),S={class:"tbody"},I={class:"index"},R={key:0,class:"name"},x={key:1,class:"name vi-red-text"},V={class:"standard"},H={class:"unit"},U={class:"count"},Q={class:"price"},F={key:0},G={key:1},K={class:"subtotal"},X={key:0},Y={key:1},J={class:"remarks"},$={class:"tfoot"},q={class:"tr flex-bc"},W={key:0},z={key:1},Z={class:"plr"},ee={class:"line"},te={key:0,class:"num"},re={key:0,class:"page"},ne=s(()=>Object(n["createElementVNode"])("div",{class:"no-print split-line"},null,-1));var oe={__name:"content",props:{list:{type:Array,default(){return[]}},total:{type:String,default:"0.00"},data:{type:Object,default(){return{}}}},setup(e,{expose:t}){const r=e,o=Object(l["a"])(),i=JSON.parse(sessionStorage.getItem("webConfig")||"{}"),s=["①","②","③"],oe=3.77952756*(i.printHeight||297),ae=parseInt((oe-198)/30);t({pageSize:ae});const ie=Object(n["computed"])(()=>{const e={};o.dictMap.good.forEach(t=>{e[t.id]=t.index});const t=c()(r.list);return t.sort((t,r)=>{var n,o;const a=null===(n=t.label)||void 0===n?void 0:n.split(",")[0],i=null===(o=r.label)||void 0===o?void 0:o.split(",")[0];return e[a]-e[i]}),t}),ce=Object(n["computed"])(()=>Math.max(Math.ceil(ie.value.length/ae),1)),le=Object(n["computed"])(()=>{if(0==+r.total)return"";const e=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖","拾"],t=["佰","拾","万","仟","佰","拾","元","角","分"],n=t.reverse(),o=(+r.total).toFixed(2).split("").reverse().filter(e=>"."!==e);return o.map((t,r)=>`${e[t]}${n[r]}`).reverse().join("").replace(/(零[^元万])+/g,"零").replace(/零+/g,"零").replace(/零万零?/g,"万零").replace(/(?<=.)零元/g,"元").replace(/零$/g,"").replace(/元$/g,"元整")});function se(...e){return e.some(e=>null===e||void 0===e)}const ue=Object(n["ref"])(),he=Object(n["ref"])();function de(){i.printQrcodeLeft&&ue.value.forEach(e=>{e.innerHTML="",new a.a(e,{text:i.printQrcodeLeft,width:85,height:85,colorDark:"#515A6E"})}),i.printQrcodeRight&&he.value.forEach(e=>{e.innerHTML="",new a.a(e,{text:i.printQrcodeRight,width:85,height:85,colorDark:"#515A6E"})})}return Object(n["onMounted"])(()=>{de()}),(t,r)=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",u,[Object(n["createElementVNode"])("div",h,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(ce.value,t=>{var r;return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"table",key:t},[Object(n["createElementVNode"])("div",d,[Object(n["unref"])(i).printQrcodeLeft?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",p,[Object(n["createElementVNode"])("div",{ref_for:!0,ref_key:"qrcodeLeft",ref:ue},null,512),f,Object(n["unref"])(i).printQrcodeLeftText?(Object(n["openBlock"])(),Object(n["createElementBlock"])("p",g,Object(n["toDisplayString"])(Object(n["unref"])(i).printQrcodeLeftText),1)):Object(n["createCommentVNode"])("",!0),m])):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("div",b,[Object(n["createElementVNode"])("h2",O,Object(n["toDisplayString"])(Object(n["unref"])(i).printTitle),1),Object(n["createElementVNode"])("div",v,[Object(n["createElementVNode"])("p",j,"地址："+Object(n["toDisplayString"])(Object(n["unref"])(i).printAddress),1),Object(n["createElementVNode"])("p",E,"联系电话："+Object(n["toDisplayString"])(Object(n["unref"])(i).printPhone),1)]),Object(n["createElementVNode"])("div",_,[Object(n["createElementVNode"])("h3",null,"客户名称："+Object(n["toDisplayString"])(e.data.name||e.data.userName),1),ie.value.length?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h3",y,Object(n["toDisplayString"])(new Date(e.data.updateTime||Date.now()).format("YYYY 年 MM 月 DD 日")),1)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("h3",k,[Object(n["createTextVNode"])("年"),w,D]))])]),Object(n["unref"])(i).printQrcodeRight?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",B,[C,Object(n["unref"])(i).printQrcodeRightText?(Object(n["openBlock"])(),Object(n["createElementBlock"])("p",A,Object(n["toDisplayString"])(Object(n["unref"])(i).printQrcodeRightText),1)):Object(n["createCommentVNode"])("",!0),N,Object(n["createElementVNode"])("div",{ref_for:!0,ref_key:"qrcodeRight",ref:he},null,512)])):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("p",T,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])((null===(r=Object(n["unref"])(i).printTip)||void 0===r?void 0:r.split(";").map(e=>e.split(",")))||[],(e,t)=>(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:t},[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(s[t]),1),Object(n["createElementVNode"])("span",null," "+Object(n["toDisplayString"])(e[0].split("").join(" ")),1),L,Object(n["createTextVNode"])(Object(n["toDisplayString"])(e[1]),1),P],64))),128))]),M,Object(n["createElementVNode"])("div",S,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(ie.value.slice((t-1)*Object(n["unref"])(ae),t*Object(n["unref"])(ae)),(e,r)=>(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"tr",key:`${t}_${r}`},[Object(n["createElementVNode"])("p",I,Object(n["toDisplayString"])((t-1)*Object(n["unref"])(ae)+r+1),1),e.goodId?(Object(n["openBlock"])(),Object(n["createElementBlock"])("p",R,Object(n["toDisplayString"])(e.name),1)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("p",x,[Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.name),1)])),Object(n["createElementVNode"])("p",V,Object(n["toDisplayString"])(e.standard),1),Object(n["createElementVNode"])("p",H,Object(n["toDisplayString"])(e.unit),1),Object(n["createElementVNode"])("p",U,Object(n["toDisplayString"])(e.count),1),Object(n["createElementVNode"])("p",Q,[se(e.price)?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",F)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",G,"￥"+Object(n["toDisplayString"])(e.price.toFixed(2)),1))]),Object(n["createElementVNode"])("p",K,[se(e.price,e.count)?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",X)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",Y,"￥"+Object(n["toDisplayString"])((e.price*e.count).toFixed(2)),1))]),Object(n["createElementVNode"])("p",J,Object(n["toDisplayString"])(e.remarks),1)]))),128))]),Object(n["createElementVNode"])("div",$,[Object(n["createElementVNode"])("div",q,[t*Object(n["unref"])(ae)>=ie.value.length?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h3",W,"总计："+Object(n["toDisplayString"])(le.value),1)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("h3",z,"总计：")),Object(n["createElementVNode"])("h3",Z,[Object(n["createElementVNode"])("span",ee,"￥"+Object(n["toDisplayString"])("_".repeat(15)),1),ie.value.length&&t*Object(n["unref"])(ae)>=ie.value.length?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",te,Object(n["toDisplayString"])(e.total),1)):Object(n["createCommentVNode"])("",!0)])])]),ie.value.length?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",re,Object(n["toDisplayString"])(t)+" / "+Object(n["toDisplayString"])(ce.value),1)):Object(n["createCommentVNode"])("",!0),ne])}),128))],512)]))}},ae=(r("71ed"),r("6b0d")),ie=r.n(ae);const ce=ie()(oe,[["__scopeId","data-v-6cf843e0"]]);t["default"]=ce},d044:function(e,t,r){var n;(function(t,r){e.exports=r()})(0,(function(){function e(e){this.mode=r.MODE_8BIT_BYTE,this.data=e,this.parsedData=[];for(var t=0,n=this.data.length;t<n;t++){var o=[],a=this.data.charCodeAt(t);a>65536?(o[0]=240|(1835008&a)>>>18,o[1]=128|(258048&a)>>>12,o[2]=128|(4032&a)>>>6,o[3]=128|63&a):a>2048?(o[0]=224|(61440&a)>>>12,o[1]=128|(4032&a)>>>6,o[2]=128|63&a):a>128?(o[0]=192|(1984&a)>>>6,o[1]=128|63&a):o[0]=a,this.parsedData.push(o)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function t(e,t){this.typeNumber=e,this.errorCorrectLevel=t,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}e.prototype={getLength:function(e){return this.parsedData.length},write:function(e){for(var t=0,r=this.parsedData.length;t<r;t++)e.put(this.parsedData[t],8)}},t.prototype={addData:function(t){var r=new e(t);this.dataList.push(r),this.dataCache=null},isDark:function(e,t){if(e<0||this.moduleCount<=e||t<0||this.moduleCount<=t)throw new Error(e+","+t);return this.modules[e][t]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(e,r){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++)this.modules[n][o]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(e,r),this.typeNumber>=7&&this.setupTypeNumber(e),null==this.dataCache&&(this.dataCache=t.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,r)},setupPositionProbePattern:function(e,t){for(var r=-1;r<=7;r++)if(!(e+r<=-1||this.moduleCount<=e+r))for(var n=-1;n<=7;n++)t+n<=-1||this.moduleCount<=t+n||(this.modules[e+r][t+n]=0<=r&&r<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=n&&n<=4)},getBestMaskPattern:function(){for(var e=0,t=0,r=0;r<8;r++){this.makeImpl(!0,r);var n=i.getLostPoint(this);(0==r||e>n)&&(e=n,t=r)}return t},createMovieClip:function(e,t,r){var n=e.createEmptyMovieClip(t,r),o=1;this.make();for(var a=0;a<this.modules.length;a++)for(var i=a*o,c=0;c<this.modules[a].length;c++){var l=c*o,s=this.modules[a][c];s&&(n.beginFill(0,100),n.moveTo(l,i),n.lineTo(l+o,i),n.lineTo(l+o,i+o),n.lineTo(l,i+o),n.endFill())}return n},setupTimingPattern:function(){for(var e=8;e<this.moduleCount-8;e++)null==this.modules[e][6]&&(this.modules[e][6]=e%2==0);for(var t=8;t<this.moduleCount-8;t++)null==this.modules[6][t]&&(this.modules[6][t]=t%2==0)},setupPositionAdjustPattern:function(){for(var e=i.getPatternPosition(this.typeNumber),t=0;t<e.length;t++)for(var r=0;r<e.length;r++){var n=e[t],o=e[r];if(null==this.modules[n][o])for(var a=-2;a<=2;a++)for(var c=-2;c<=2;c++)this.modules[n+a][o+c]=-2==a||2==a||-2==c||2==c||0==a&&0==c}},setupTypeNumber:function(e){for(var t=i.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var n=!e&&1==(t>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(r=0;r<18;r++){n=!e&&1==(t>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n}},setupTypeInfo:function(e,t){for(var r=this.errorCorrectLevel<<3|t,n=i.getBCHTypeInfo(r),o=0;o<15;o++){var a=!e&&1==(n>>o&1);o<6?this.modules[o][8]=a:o<8?this.modules[o+1][8]=a:this.modules[this.moduleCount-15+o][8]=a}for(o=0;o<15;o++){a=!e&&1==(n>>o&1);o<8?this.modules[8][this.moduleCount-o-1]=a:o<9?this.modules[8][15-o-1+1]=a:this.modules[8][15-o-1]=a}this.modules[this.moduleCount-8][8]=!e},mapData:function(e,t){for(var r=-1,n=this.moduleCount-1,o=7,a=0,c=this.moduleCount-1;c>0;c-=2){6==c&&c--;while(1){for(var l=0;l<2;l++)if(null==this.modules[n][c-l]){var s=!1;a<e.length&&(s=1==(e[a]>>>o&1));var u=i.getMask(t,n,c-l);u&&(s=!s),this.modules[n][c-l]=s,o--,-1==o&&(a++,o=7)}if(n+=r,n<0||this.moduleCount<=n){n-=r,r=-r;break}}}}},t.PAD0=236,t.PAD1=17,t.createData=function(e,r,n){for(var o=u.getRSBlocks(e,r),a=new h,c=0;c<n.length;c++){var l=n[c];a.put(l.mode,4),a.put(l.getLength(),i.getLengthInBits(l.mode,e)),l.write(a)}var s=0;for(c=0;c<o.length;c++)s+=o[c].dataCount;if(a.getLengthInBits()>8*s)throw new Error("code length overflow. ("+a.getLengthInBits()+">"+8*s+")");a.getLengthInBits()+4<=8*s&&a.put(0,4);while(a.getLengthInBits()%8!=0)a.putBit(!1);while(1){if(a.getLengthInBits()>=8*s)break;if(a.put(t.PAD0,8),a.getLengthInBits()>=8*s)break;a.put(t.PAD1,8)}return t.createBytes(a,o)},t.createBytes=function(e,t){for(var r=0,n=0,o=0,a=new Array(t.length),c=new Array(t.length),l=0;l<t.length;l++){var u=t[l].dataCount,h=t[l].totalCount-u;n=Math.max(n,u),o=Math.max(o,h),a[l]=new Array(u);for(var d=0;d<a[l].length;d++)a[l][d]=255&e.buffer[d+r];r+=u;var p=i.getErrorCorrectPolynomial(h),f=new s(a[l],p.getLength()-1),g=f.mod(p);c[l]=new Array(p.getLength()-1);for(d=0;d<c[l].length;d++){var m=d+g.getLength()-c[l].length;c[l][d]=m>=0?g.get(m):0}}var b=0;for(d=0;d<t.length;d++)b+=t[d].totalCount;var O=new Array(b),v=0;for(d=0;d<n;d++)for(l=0;l<t.length;l++)d<a[l].length&&(O[v++]=a[l][d]);for(d=0;d<o;d++)for(l=0;l<t.length;l++)d<c[l].length&&(O[v++]=c[l][d]);return O};for(var r={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},o={L:1,M:0,Q:3,H:2},a={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},i={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(e){var t=e<<10;while(i.getBCHDigit(t)-i.getBCHDigit(i.G15)>=0)t^=i.G15<<i.getBCHDigit(t)-i.getBCHDigit(i.G15);return(e<<10|t)^i.G15_MASK},getBCHTypeNumber:function(e){var t=e<<12;while(i.getBCHDigit(t)-i.getBCHDigit(i.G18)>=0)t^=i.G18<<i.getBCHDigit(t)-i.getBCHDigit(i.G18);return e<<12|t},getBCHDigit:function(e){var t=0;while(0!=e)t++,e>>>=1;return t},getPatternPosition:function(e){return i.PATTERN_POSITION_TABLE[e-1]},getMask:function(e,t,r){switch(e){case a.PATTERN000:return(t+r)%2==0;case a.PATTERN001:return t%2==0;case a.PATTERN010:return r%3==0;case a.PATTERN011:return(t+r)%3==0;case a.PATTERN100:return(Math.floor(t/2)+Math.floor(r/3))%2==0;case a.PATTERN101:return t*r%2+t*r%3==0;case a.PATTERN110:return(t*r%2+t*r%3)%2==0;case a.PATTERN111:return(t*r%3+(t+r)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}},getErrorCorrectPolynomial:function(e){for(var t=new s([1],0),r=0;r<e;r++)t=t.multiply(new s([1,c.gexp(r)],0));return t},getLengthInBits:function(e,t){if(1<=t&&t<10)switch(e){case r.MODE_NUMBER:return 10;case r.MODE_ALPHA_NUM:return 9;case r.MODE_8BIT_BYTE:return 8;case r.MODE_KANJI:return 8;default:throw new Error("mode:"+e)}else if(t<27)switch(e){case r.MODE_NUMBER:return 12;case r.MODE_ALPHA_NUM:return 11;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 10;default:throw new Error("mode:"+e)}else{if(!(t<41))throw new Error("type:"+t);switch(e){case r.MODE_NUMBER:return 14;case r.MODE_ALPHA_NUM:return 13;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 12;default:throw new Error("mode:"+e)}}},getLostPoint:function(e){for(var t=e.getModuleCount(),r=0,n=0;n<t;n++)for(var o=0;o<t;o++){for(var a=0,i=e.isDark(n,o),c=-1;c<=1;c++)if(!(n+c<0||t<=n+c))for(var l=-1;l<=1;l++)o+l<0||t<=o+l||0==c&&0==l||i==e.isDark(n+c,o+l)&&a++;a>5&&(r+=3+a-5)}for(n=0;n<t-1;n++)for(o=0;o<t-1;o++){var s=0;e.isDark(n,o)&&s++,e.isDark(n+1,o)&&s++,e.isDark(n,o+1)&&s++,e.isDark(n+1,o+1)&&s++,0!=s&&4!=s||(r+=3)}for(n=0;n<t;n++)for(o=0;o<t-6;o++)e.isDark(n,o)&&!e.isDark(n,o+1)&&e.isDark(n,o+2)&&e.isDark(n,o+3)&&e.isDark(n,o+4)&&!e.isDark(n,o+5)&&e.isDark(n,o+6)&&(r+=40);for(o=0;o<t;o++)for(n=0;n<t-6;n++)e.isDark(n,o)&&!e.isDark(n+1,o)&&e.isDark(n+2,o)&&e.isDark(n+3,o)&&e.isDark(n+4,o)&&!e.isDark(n+5,o)&&e.isDark(n+6,o)&&(r+=40);var u=0;for(o=0;o<t;o++)for(n=0;n<t;n++)e.isDark(n,o)&&u++;var h=Math.abs(100*u/t/t-50)/5;return r+=10*h,r}},c={glog:function(e){if(e<1)throw new Error("glog("+e+")");return c.LOG_TABLE[e]},gexp:function(e){while(e<0)e+=255;while(e>=256)e-=255;return c.EXP_TABLE[e]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},l=0;l<8;l++)c.EXP_TABLE[l]=1<<l;for(l=8;l<256;l++)c.EXP_TABLE[l]=c.EXP_TABLE[l-4]^c.EXP_TABLE[l-5]^c.EXP_TABLE[l-6]^c.EXP_TABLE[l-8];for(l=0;l<255;l++)c.LOG_TABLE[c.EXP_TABLE[l]]=l;function s(e,t){if(void 0==e.length)throw new Error(e.length+"/"+t);var r=0;while(r<e.length&&0==e[r])r++;this.num=new Array(e.length-r+t);for(var n=0;n<e.length-r;n++)this.num[n]=e[n+r]}function u(e,t){this.totalCount=e,this.dataCount=t}function h(){this.buffer=[],this.length=0}s.prototype={get:function(e){return this.num[e]},getLength:function(){return this.num.length},multiply:function(e){for(var t=new Array(this.getLength()+e.getLength()-1),r=0;r<this.getLength();r++)for(var n=0;n<e.getLength();n++)t[r+n]^=c.gexp(c.glog(this.get(r))+c.glog(e.get(n)));return new s(t,0)},mod:function(e){if(this.getLength()-e.getLength()<0)return this;for(var t=c.glog(this.get(0))-c.glog(e.get(0)),r=new Array(this.getLength()),n=0;n<this.getLength();n++)r[n]=this.get(n);for(n=0;n<e.getLength();n++)r[n]^=c.gexp(c.glog(e.get(n))+t);return new s(r,0).mod(e)}},u.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],u.getRSBlocks=function(e,t){var r=u.getRsBlockTable(e,t);if(void 0==r)throw new Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+t);for(var n=r.length/3,o=[],a=0;a<n;a++)for(var i=r[3*a+0],c=r[3*a+1],l=r[3*a+2],s=0;s<i;s++)o.push(new u(c,l));return o},u.getRsBlockTable=function(e,t){switch(t){case o.L:return u.RS_BLOCK_TABLE[4*(e-1)+0];case o.M:return u.RS_BLOCK_TABLE[4*(e-1)+1];case o.Q:return u.RS_BLOCK_TABLE[4*(e-1)+2];case o.H:return u.RS_BLOCK_TABLE[4*(e-1)+3];default:return}},h.prototype={get:function(e){var t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(var r=0;r<t;r++)this.putBit(1==(e>>>t-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var d=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function p(){return"undefined"!=typeof CanvasRenderingContext2D}function f(){var e=!1,t=navigator.userAgent;if(/android/i.test(t)){e=!0;var r=t.toString().match(/android ([0-9]\.[0-9])/i);r&&r[1]&&(e=parseFloat(r[1]))}return e}var g=function(){var e=function(e,t){this._el=e,this._htOption=t};return e.prototype.draw=function(e){var t=this._htOption,r=this._el,n=e.getModuleCount();Math.floor(t.width/n),Math.floor(t.height/n);function o(e,t){var r=document.createElementNS("http://www.w3.org/2000/svg",e);for(var n in t)t.hasOwnProperty(n)&&r.setAttribute(n,t[n]);return r}this.clear();var a=o("svg",{viewBox:"0 0 "+String(n)+" "+String(n),width:"100%",height:"100%",fill:t.colorLight});a.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),r.appendChild(a),a.appendChild(o("rect",{fill:t.colorLight,width:"100%",height:"100%"})),a.appendChild(o("rect",{fill:t.colorDark,width:"1",height:"1",id:"template"}));for(var i=0;i<n;i++)for(var c=0;c<n;c++)if(e.isDark(i,c)){var l=o("use",{x:String(c),y:String(i)});l.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),a.appendChild(l)}},e.prototype.clear=function(){while(this._el.hasChildNodes())this._el.removeChild(this._el.lastChild)},e}(),m="svg"===document.documentElement.tagName.toLowerCase(),b=m?g:p()?function(){function e(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}if(this._android&&this._android<=2.1){var t=1/window.devicePixelRatio,r=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(e,n,o,a,i,c,l,s,u){if("nodeName"in e&&/img/i.test(e.nodeName))for(var h=arguments.length-1;h>=1;h--)arguments[h]=arguments[h]*t;else"undefined"==typeof s&&(arguments[1]*=t,arguments[2]*=t,arguments[3]*=t,arguments[4]*=t);r.apply(this,arguments)}}function n(e,t){var r=this;if(r._fFail=t,r._fSuccess=e,null===r._bSupportDataURI){var n=document.createElement("img"),o=function(){r._bSupportDataURI=!1,r._fFail&&r._fFail.call(r)},a=function(){r._bSupportDataURI=!0,r._fSuccess&&r._fSuccess.call(r)};return n.onabort=o,n.onerror=o,n.onload=a,void(n.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")}!0===r._bSupportDataURI&&r._fSuccess?r._fSuccess.call(r):!1===r._bSupportDataURI&&r._fFail&&r._fFail.call(r)}var o=function(e,t){this._bIsPainted=!1,this._android=f(),this._htOption=t,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=t.width,this._elCanvas.height=t.height,e.appendChild(this._elCanvas),this._el=e,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!",this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return o.prototype.draw=function(e){var t=this._elImage,r=this._oContext,n=this._htOption,o=e.getModuleCount(),a=n.width/o,i=n.height/o,c=Math.round(a),l=Math.round(i);t.style.display="none",this.clear();for(var s=0;s<o;s++)for(var u=0;u<o;u++){var h=e.isDark(s,u),d=u*a,p=s*i;r.strokeStyle=h?n.colorDark:n.colorLight,r.lineWidth=1,r.fillStyle=h?n.colorDark:n.colorLight,r.fillRect(d,p,a,i),r.strokeRect(Math.floor(d)+.5,Math.floor(p)+.5,c,l),r.strokeRect(Math.ceil(d)-.5,Math.ceil(p)-.5,c,l)}this._bIsPainted=!0},o.prototype.makeImage=function(){this._bIsPainted&&n.call(this,e)},o.prototype.isPainted=function(){return this._bIsPainted},o.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},o.prototype.round=function(e){return e?Math.floor(1e3*e)/1e3:e},o}():function(){var e=function(e,t){this._el=e,this._htOption=t};return e.prototype.draw=function(e){for(var t=this._htOption,r=this._el,n=e.getModuleCount(),o=Math.floor(t.width/n),a=Math.floor(t.height/n),i=['<table style="border:0;border-collapse:collapse;">'],c=0;c<n;c++){i.push("<tr>");for(var l=0;l<n;l++)i.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+o+"px;height:"+a+"px;background-color:"+(e.isDark(c,l)?t.colorDark:t.colorLight)+';"></td>');i.push("</tr>")}i.push("</table>"),r.innerHTML=i.join("");var s=r.childNodes[0],u=(t.width-s.offsetWidth)/2,h=(t.height-s.offsetHeight)/2;u>0&&h>0&&(s.style.margin=h+"px "+u+"px")},e.prototype.clear=function(){this._el.innerHTML=""},e}();function O(e,t){for(var r=1,n=v(e),a=0,i=d.length;a<=i;a++){var c=0;switch(t){case o.L:c=d[a][0];break;case o.M:c=d[a][1];break;case o.Q:c=d[a][2];break;case o.H:c=d[a][3];break}if(n<=c)break;r++}if(r>d.length)throw new Error("Too long data");return r}function v(e){var t=encodeURI(e).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return t.length+(t.length!=e?3:0)}return n=function(e,t){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:o.H},"string"===typeof t&&(t={text:t}),t)for(var r in t)this._htOption[r]=t[r];"string"==typeof e&&(e=document.getElementById(e)),this._htOption.useSVG&&(b=g),this._android=f(),this._el=e,this._oQRCode=null,this._oDrawing=new b(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},n.prototype.makeCode=function(e){this._oQRCode=new t(O(e,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(e),this._oQRCode.make(),this._el.title=e,this._oDrawing.draw(this._oQRCode),this.makeImage()},n.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},n.prototype.clear=function(){this._oDrawing.clear()},n.CorrectLevel=o,n}))}}]);