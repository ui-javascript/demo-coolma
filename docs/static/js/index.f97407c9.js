(function(e){function t(t){for(var r,c,s=t[0],o=t[1],l=t[2],h=0,d=[];h<s.length;h++)c=s[h],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&d.push(n[c][0]),n[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,s=1;s<a.length;s++){var o=a[s];0!==n[o]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},n={index:0},i=[];function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=o;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("7120")},"576e":function(e,t,a){},"5e8a":function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return v}));var r=a("5530"),n=(a("b0c0"),a("a15b"),a("ac1f"),a("00b4"),a("1276"),a("38cf"),a("2d37")),i=a("e862"),c=a("bb3a"),s=a("bb38"),o=a("afc9"),l=a("e53b"),u={}.hasOwnProperty,h=/^\(^\t\n\r "#'.<=>`}]+$/;C.peek=T;var d={canContainEols:["textDirective"],enter:{directiveContainer:f,directiveContainerAttributes:x,directiveContainerArgs:y,directiveLeaf:b,directiveLeafAttributes:x,directiveText:g,directiveTextAttributes:x,directiveTextNamespace:E,directiveTextArgs:S},exit:{directiveContainer:N,directiveContainerAttributeClassValue:A,directiveContainerAttributeIdValue:O,directiveContainerAttributeName:k,directiveContainerAttributeValue:w,directiveContainerAttributes:D,directiveContainerArgValueData:m,directiveContainerArgs:z,directiveContainerName:j,directiveContainerNamespace:M,directiveLeaf:N,directiveLeafAttributeClassValue:A,directiveLeafAttributeIdValue:O,directiveLeafAttributeName:k,directiveLeafAttributeValue:w,directiveLeafAttributes:D,directiveLeafArgValueData:m,directiveLeafArgs:z,directiveLeafName:j,directiveLeafNamespace:M,directiveText:N,directiveTextAttributeClassValue:A,directiveTextAttributeIdValue:O,directiveTextAttributeName:k,directiveTextAttributeValue:w,directiveTextAttributes:D,directiveTextArgValueData:m,directiveTextArgs:z,directiveTextName:j,directiveTextNamespace:M}},v={unsafe:[{character:"\r",inConstruct:["leafDirectiveArgs","containerDirectiveArgs"]},{character:"\n",inConstruct:["leafDirectiveArgs","containerDirectiveArgs"]},{before:"[^@]",character:"@",after:"[A-Za-z]",inConstruct:["phrasing"]},{atBreak:!0,character:"@",after:"@"}],handlers:{containerDirective:C,leafDirective:C,textDirective:C}};function f(e){p.call(this,"containerDirective",e)}function b(e){p.call(this,"leafDirective",e)}function g(e){p.call(this,"textDirective",e)}function p(e,t){this.enter({type:e,name:"",namespace:"",attributes:{},args:[],children:[]},t)}function m(e){var t=this.getData("directiveArgs");console.log("==="),console.log(e),t.push(this.sliceSerialize(e))}function j(e){var t=this.stack[this.stack.length-1];t.name=this.sliceSerialize(e)}function y(e){console.log(e),this.enter({type:"paragraph",data:{directiveArgs:!0},children:[]},e)}function x(){this.setData("directiveAttributes",[]),this.buffer()}function O(e){var t=this.getData("directiveAttributes");t.push(["id",Object(n["a"])(this.sliceSerialize(e))])}function A(e){var t=this.getData("directiveAttributes");t.push(["class",Object(n["a"])(this.sliceSerialize(e))])}function w(e){var t=this.getData("directiveAttributes");t[t.length-1][1]=Object(n["a"])(this.sliceSerialize(e))}function k(e){var t=this.getData("directiveAttributes");t.push([this.sliceSerialize(e),""])}function D(){var e=this.getData("directiveAttributes"),t={},a=-1;while(++a<e.length){var r=e[a];"class"===r[0]&&t.class?t.class+=" "+r[1]:t[r[0]]=r[1]}this.setData("directiveAttributes"),this.resume();var n=this.stack[this.stack.length-1];n.attributes=t}function N(e){this.exit(e)}function C(e,t,a,n){var i=Object(l["a"])(n),c=V(e),o=a.enter(e.type),u=i.move(c+(e.name||"")),h=e;if("containerDirective"===e.type){var d=(e.children||[])[0];h=P(d)?d:void 0}if(h&&h.args&&h.args.length>0){var v=a.enter("args"),f=a.enter(e.type+"Args");console.log("进入"),u+=i.move("("),"textDirective"===e.type?u+=i.move("'"+h.args.join("','")+"'"):u+=i.move(Object(s["a"])(h,a,Object(r["a"])(Object(r["a"])({},i.current()),{},{before:u,after:")"}))),u+=i.move(")"),f(),v()}return u+=i.move(L(e,a)),o(),console.log("处理Arg"),console.log(u),u}function T(){return"@"}function L(e,t){var a,r,n,c,s=Object(o["a"])(t),l="textDirective"===e.type?[s]:[s,"\n","\r"],d=e.attributes||{},v=[];for(c in d)if(u.call(d,c)&&void 0!==d[c]&&null!==d[c]){var f=String(d[c]);if("id"===c)n=h.test(f)?"#"+f:j("id",f);else if("class"===c){var b=f.split(/[\t\n\r ]+/g),g=[],p=[],m=-1;while(++m<b.length)(h.test(b[m])?p:g).push(b[m]);a=g.length>0?j("class",g.join(" ")):"",r=p.length>0?"."+p.join("."):""}else v.push(j(c,f))}return a&&v.unshift(a),r&&v.unshift(r),n&&v.unshift(n),v.length>0?"{"+v.join(" ")+"}":"";function j(e,t){return e+(t?"="+s+Object(i["b"])(t,{subset:l})+s:"")}}function P(e){return console.log("参数指令"),console.log(e),Boolean(e&&"paragraph"===e.type&&e.data&&e.data.directiveArgs)}function S(){this.buffer(),this.setData("directiveArgs",[])}function z(){var e,t=this.getData("directiveArgs"),a=[],r=-1;console.log("==>"),console.log(t);while(++r<t.length)e=t[r],a.push(e);this.resume(),this.setData("directiveArgs"),this.stack[this.stack.length-1].args=a}function E(){this.buffer()}function M(){var e=this.resume();console.log(this.stack[this.stack.length-1]),this.stack[this.stack.length-1].namespace=e}function V(e){var t=0;return"containerDirective"===e.type?(Object(c["c"])(e,"containerDirective",a),t+=3):t="leafDirective"===e.type?2:1,"@".repeat(t);function a(e,a){var r=a.length,n=0;while(r--)"containerDirective"===a[r].type&&n++;n>t&&(t=n)}}},7120:function(e,t,a){"use strict";a.r(t);var r=a("1da1"),n=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("96cf"),a("99af"),a("a026")),i=a("ed09"),c=a("3654"),s=a("1808"),o=a("bb3a"),l=a("7d45"),u=a("2cfd"),h=a("1fb9"),d=a("d2b0"),v=a("5997"),f=a("5e8a");function b(){var e=this.data();function t(t,a){var r=e[t]?e[t]:e[t]=[];r.push(a)}t("micromarkExtensions",Object(v["a"])()),t("fromMarkdownExtensions",f["a"]),t("toMarkdownExtensions",f["b"])}var g=a("66c7"),p=a.n(g),m=(a("b0c0"),a("f9c0"));function j(e){var t=e.data||(e.data={});t.hName=Object(m["a"])("span",{}).tagName}function y(e,t,a,r){e[a]||(e[a]={}),e[a].attachAnno=t,e[a].properties=r}function x(e,t,a,r,n){var i=null;if(a.name!==e){var c=!1;for(var s in t)if(a.name===s&&t[s].attachAnno===e){c=!0,i=t[s]["properties"];break}if(!c)return}i&&(a.attributes=Object.assign({},i,a.attributes||{})),n(a,r)}function O(e,t){var a=t[t.length-1];if(a.children&&0!==a.children.length)for(var r in a.children){var n=a.children[r];if(r=parseInt(r),"textDirective"===n.type&&n.name===e.name){var i=r,c=r,s=null,o=null;while(++i<a.children.length){var l=a.children[i];if(l&&"text"===l.type&&p()(l.value)){s=l;break}}if(!s)while(--c>-1){var u=a.children[c];if(u&&"text"===u.type&&p()(u.value)){o=u;break}}if(s){console.log("修改后节点"),console.log(s);var h=s.data||(s.data={}),d=Object(m["a"])("mark",s.value);h.hName=d.tagName,h.hProperties=d.properties,h.hChildren=d.children}else if(o){console.log("修改前节点"),console.log(o);var v=o.data||(o.data={}),f=Object(m["a"])("mark",o.value);v.hName=f.tagName,v.hProperties=f.properties,v.hChildren=f.children}j(e);break}}}var A=a("5530");function w(e,t){var a=e.data||(e.data={});!("title"in e.attributes)&&e.args&&e.args.length>1&&(e.attributes.title=e.args[1]);var r=Object(m["a"])(e.name,Object(A["a"])(Object(A["a"])({},e.attributes),{},{title:null,"data-tooltip":e.attributes.title}),e.args&&e.args.length>0?e.args[0]:"");a.hName=r.tagName,a.hProperties=r.properties,a.hChildren=r.children}a("caad"),a("2532"),a("e9c4"),a("d3b7"),a("ddb0");var k=a("bc3a"),D=a.n(k),N=a("e1bd"),C=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,a){var r,n,i,c,s,o,l,u,h,d,v,f,b,g,p,y,x,O,A,w,k,C;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.attributes&&"weather"in t.attributes||t.args&&0!==t.args.length){e.next=3;break}return j(t),e.abrupt("return");case 3:if(r=null,t.attributes&&"weather"in t.attributes&&"false"!=t.attributes.weather&&(r=L),t.args&&t.args[0]&&(r=t.args[0]),n=r===L,r){e.next=10;break}return j(t),e.abrupt("return");case 10:return i=Object(N["a"])(),c=Object(N["a"])(),s=Object(N["a"])(),o=t.data||(t.data={}),l=Object(m["a"])("div#".concat(c),{"aria-busy":"true",style:"width: 100%;min-height: 50px;"},[Object(m["a"])("figure",{},[n?[Object(m["a"])("table#".concat(i),{role:"grid"},[]),Object(m["a"])("h6#".concat(s),{class:"text-center"},"")]:[Object(m["a"])("table#".concat(i),{role:"grid"},[])]])]),o.hName=l.tagName,o.hProperties=l.properties,o.hChildren=l.children,e.next=20,D.a.get(r);case 20:u=e.sent,h=u.data?u.data.data?u.data.data:u.data:u,d=t.attributes["includeKeys"],n&&!d&&(d=["day","date","week","wea"]),v=document.getElementById(i),f=document.createElement("thead"),b=document.createElement("tr"),e.t0=regeneratorRuntime.keys(h[0]);case 28:if((e.t1=e.t0()).done){e.next=37;break}if(g=e.t1.value,!d||d.includes("*")||d.includes(g)){e.next=32;break}return e.abrupt("continue",28);case 32:p=document.createElement("th"),p.innerText=g,b.appendChild(p),e.next=28;break;case 37:f.appendChild(b),y=document.createElement("tbody"),x=0;case 40:if(!(x<h.length)){e.next=56;break}O=document.createElement("tr"),e.t2=regeneratorRuntime.keys(h[x]);case 43:if((e.t3=e.t2()).done){e.next=52;break}if(A=e.t3.value,!d||d.includes("*")||d.includes(A)){e.next=47;break}return e.abrupt("continue",43);case 47:w=document.createElement("td"),w.innerText=JSON.stringify(h[x][A]),O.appendChild(w),e.next=43;break;case 52:y.appendChild(O);case 53:x++,e.next=40;break;case 56:v.appendChild(f),v.appendChild(y),k=document.getElementById(c),k.setAttribute("aria-busy",!1),n&&(C=document.getElementById(s),C.innerText="(".concat(u.data.city,"-未来一周天气表)"));case 61:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),T=C,L="https://v0.yiketianqi.com/api?unescape=1&version=v91&appid=43656176&appsecret=I42og6Lm&ext=&cityid=&city=";a("576e");function P(e){y(e,"fetch","weather",{weather:!0,includeKeys:["day","date","week","wea","win"]})}function S(e){y(e,"fetch","fetchAliasWeather",{includeKeys:["day","tem","wea"]})}function z(e,t){var a=t[t.length-1];if(a.children&&0!==a.children.length)for(var r in a.children){var n=a.children[r];if(r=parseInt(r),"textDirective"===n.type&&n.name===e.name){var i=r,c=r,s=null,o=null;while(++i<a.children.length){var l=a.children[i];if(l&&"text"===l.type&&p()(l.value)){s=l;break}}if(!s)while(--c>-1){var u=a.children[c];if(u&&"text"===u.type&&p()(u.value)){o=u;break}}if(s){console.log("修改后节点"),console.log(s);var h=s.data||(s.data={}),d=Object(m["a"])("del",s.value);h.hName=d.tagName,h.hProperties=d.properties,h.hChildren=d.children}else if(o){console.log("修改前节点"),console.log(o);var v=o.data||(o.data={}),f=Object(m["a"])("del",o.value);v.hName=f.tagName,v.hProperties=f.properties,v.hChildren=f.children}j(e);break}}}var E={xiong:"https://luo0412.oss-cn-hangzhou.aliyuncs.com/static/images/index/xiong.gif",cat:"https://luo0412.oss-cn-hangzhou.aliyuncs.com/1652243827370-DjxeEK7YYXXp.jpeg",dog:"https://luo0412.oss-cn-hangzhou.aliyuncs.com/1652249579841-Yty6cpQs34pj.jpeg",cool:"https://luo0412.oss-cn-hangzhou.aliyuncs.com/1652249708936-SYHxj43D8Ahf.jpeg",ichange:"https://luo0412.oss-cn-hangzhou.aliyuncs.com/1652249747826-TWzsbJWnaWZD.jpeg",tiger:"https://luo0412.oss-cn-hangzhou.aliyuncs.com/1652249821637-cT4N4NAhHzcX.jpeg"};function M(e,t){var a=t[t.length-1],r=!1;for(var n in E)if(n in e.attributes){r=!0;break}var i=e.args&&e.args.length>0,c="url"in e.attributes||"src"in e.attributes,s=a.children&&a.children.length>1;if(r||c||i||s){if(c){var o=e.data||(e.data={}),l=Object(m["a"])("img",Object(A["a"])(Object(A["a"])({},e.attributes),{},{src:e.attributes.url||e.attributes.src}));return o.hName=l.tagName,o.hProperties=l.properties,void(o.hChildren=l.children)}if(i){var u=e.data||(e.data={}),h=Object(m["a"])("img",Object(A["a"])(Object(A["a"])({},e.attributes),{},{src:e.args[0]}));return u.hName=h.tagName,u.hProperties=h.properties,void(u.hChildren=h.children)}if(r){var d,v=e.data||(e.data={});for(var f in e.attributes)if("src"!==f&&"style"!=f&&"class"!=f&&"id"!=f){d=E[f];break}if(!d)return void j(e);var b=Object(m["a"])("img",Object(A["a"])(Object(A["a"])({},e.attributes),{},{src:d}));return v.hName=b.tagName,v.hProperties=b.properties,void(v.hChildren=b.children)}var g=null;for(var y in a.children){var x=a.children[y];if(y=parseInt(y),"textDirective"===x.type&&x.name===e.name){var O=y;while(++O<a.children.length){var w=a.children[O];if(w&&"text"===w.type&&p()(w.value)){g=w;break}}if(g){console.log("修改后节点"),console.log(g);var k=g.data||(g.data={}),D=Object(m["a"])("img",Object(A["a"])(Object(A["a"])({},e.attributes),{},{src:g.value}));k.hName=D.tagName,k.hProperties=D.properties,k.hChildren=D.children}break}}j(e)}else j(e)}function V(e){y(e,"img","emoji",{style:"width: 150px;"})}var I=a("ade3");a("ac1f"),a("1276");function H(e,t){var a=t[t.length-1],r=a.children&&a.children.length>1;if(r){var n=null;for(var i in a.children){var c=a.children[i];if(i=parseInt(i),"textDirective"===c.type&&c.name===e.name){var s=i;while(++s<a.children.length){var o=a.children[s];if(o&&"text"===o.type&&p()(o.value)){n=o;break}}if(n){var l,u=n.value.split("/"),h=u.length>0?u[u.length-1]:n.value,d=n.data||(n.data={}),v=Object(m["a"])(e.attributes.tagName||"a",Object(A["a"])(Object(A["a"])({},e.attributes),{},(l={},Object(I["a"])(l,e.attributes.docType||"href",n.value),Object(I["a"])(l,"target","_blank"),l)),[e.attributes.docName||h]);d.hName=v.tagName,d.hProperties=v.properties,d.hChildren=v.children}break}}j(e)}else j(e)}function K(e){y(e,"doc","code",{})}var W='# 世界很大, 而我又是靓仔 @nice \n\n说了句正确的废话 @del \n\n@dog\n@emoji{cat}\n\n@doc https://procomponents.ant.design/components/editable-table\n\n@abbr(HTML, "Hyper Text Markup Language")\n\n@weather\n';"# 世界很大, 而我又是靓仔 @nice    \n\n---\n\n说点正确的废话 @del    \n\n---\n\n- 相关链接 \n  - @code{docName = coolma演示} https://github.com/ui-javascript/demo-coolma-202205\n  - @doc https://procomponents.ant.design/components/editable-table\n\n---\n\n@emoji{xiong}\n@img ".concat(E.dog,'\n@img("').concat(E.cat,'"){style: "width: 150px;"}\n@emoji("').concat(E.cool,'")\n@emoji{src: "').concat(E.tiger,'"}\n\n---\n\nA lovely language know as @abbr[namespace](HTML, "HTML的全称"){.red #id} @abbr(HTML, "HTML的全称"){.bg-blue.border-orange-lighter.border-solid}\n\n---\n\n@weather\n\n\n@fetch("').concat(L,"\"){includeKeys: '[*]'}\n\n@fetch{weather}\n\n@fetch{weather: true}\n\n数组属性没有引号包裹, 注解直接摆烂, 原地显示 --\x3e @fetch{weather: true, includeKeys: ['date']}\n\n@fetch{weather: true, includeKeys: \"['date']\"}\n\n@fetch{weather: false}\n\n\n\n@fetchAliasWeather\n\n@fetchAliasWeather{weather}\n\n---\n\nhello @nice\n  \n@nice hello\n\nhello hi @nice @nice\n\nhello hi *暂时跳过这种标签* @abbr(HTML, \"HTML的全称\"){.bg-blue} @nice @nice\n\nhello @nice @nice hi\n\n");function _(){var e={};return P(e),S(e),V(e),K(e),function(t){Object(o["c"])(t,"textDirective",(function(t,a){x("abbr",e,t,a,w),a&&0!==a.length&&(x("nice",e,t,a,O),x("img",e,t,a,M),x("doc",e,t,a,H),x("del",e,t,a,z),x("fetch",e,t,a,T))}))}}var J={template:'\n    <main class="container-fluid">\n  \n    <div class="grid">\n\n      <textarea style="display: block;min-height: 350px" v-model="before"></textarea>\n      <div v-html="after"></div>\n\n    </div>\n   \n    </main>\n\n  ',setup:function(){var e=Object(i["J"])(""),t=Object(i["J"])("");return Object(c["watchDebounced"])(e,Object(r["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(s["a"])().use(l["a"]).use(b).use(_).use(u["a"]).use(h["a"]).use(d["a"]).process(e.value);case 2:r=a.sent,console.log(String(r)),t.value=String(r);case 5:case"end":return a.stop()}}),a)}))),{debounce:200,maxWait:1e3}),Object(i["A"])((function(){e.value=W})),{before:e,after:t,weatherApi:L,emojiUrls:E}}};n["default"].use(i["f"]),n["default"].config.productionTip=!1,new n["default"]({el:"#app",render:function(e){return e(J)}})}});