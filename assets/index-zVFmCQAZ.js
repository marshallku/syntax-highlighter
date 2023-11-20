(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const a of d)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&u(m)}).observe(document,{childList:!0,subtree:!0});function l(d){const a={};return d.integrity&&(a.integrity=d.integrity),d.referrerPolicy&&(a.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?a.credentials="include":d.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function u(d){if(d.ep)return;d.ep=!0;const a=l(d);fetch(d.href,a)}})();var H={exports:{}};H.exports;(function(n){var p=function(){var l=String.fromCharCode,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",a={};function m(t,r){if(!a[t]){a[t]={};for(var f=0;f<t.length;f++)a[t][t.charAt(f)]=f}return a[t][r]}var w={compressToBase64:function(t){if(t==null)return"";var r=w._compress(t,6,function(f){return u.charAt(f)});switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(t){return t==null?"":t==""?null:w._decompress(t.length,32,function(r){return m(u,t.charAt(r))})},compressToUTF16:function(t){return t==null?"":w._compress(t,15,function(r){return l(r+32)})+" "},decompressFromUTF16:function(t){return t==null?"":t==""?null:w._decompress(t.length,16384,function(r){return t.charCodeAt(r)-32})},compressToUint8Array:function(t){for(var r=w.compress(t),f=new Uint8Array(r.length*2),o=0,s=r.length;o<s;o++){var A=r.charCodeAt(o);f[o*2]=A>>>8,f[o*2+1]=A%256}return f},decompressFromUint8Array:function(t){if(t==null)return w.decompress(t);for(var r=new Array(t.length/2),f=0,o=r.length;f<o;f++)r[f]=t[f*2]*256+t[f*2+1];var s=[];return r.forEach(function(A){s.push(l(A))}),w.decompress(s.join(""))},compressToEncodedURIComponent:function(t){return t==null?"":w._compress(t,6,function(r){return d.charAt(r)})},decompressFromEncodedURIComponent:function(t){return t==null?"":t==""?null:(t=t.replace(/ /g,"+"),w._decompress(t.length,32,function(r){return m(d,t.charAt(r))}))},compress:function(t){return w._compress(t,16,function(r){return l(r)})},_compress:function(t,r,f){if(t==null)return"";var o,s,A={},_={},x="",M="",v="",S=2,y=3,h=2,g=[],e=0,c=0,i;for(i=0;i<t.length;i+=1)if(x=t.charAt(i),Object.prototype.hasOwnProperty.call(A,x)||(A[x]=y++,_[x]=!0),M=v+x,Object.prototype.hasOwnProperty.call(A,M))v=M;else{if(Object.prototype.hasOwnProperty.call(_,v)){if(v.charCodeAt(0)<256){for(o=0;o<h;o++)e=e<<1,c==r-1?(c=0,g.push(f(e)),e=0):c++;for(s=v.charCodeAt(0),o=0;o<8;o++)e=e<<1|s&1,c==r-1?(c=0,g.push(f(e)),e=0):c++,s=s>>1}else{for(s=1,o=0;o<h;o++)e=e<<1|s,c==r-1?(c=0,g.push(f(e)),e=0):c++,s=0;for(s=v.charCodeAt(0),o=0;o<16;o++)e=e<<1|s&1,c==r-1?(c=0,g.push(f(e)),e=0):c++,s=s>>1}S--,S==0&&(S=Math.pow(2,h),h++),delete _[v]}else for(s=A[v],o=0;o<h;o++)e=e<<1|s&1,c==r-1?(c=0,g.push(f(e)),e=0):c++,s=s>>1;S--,S==0&&(S=Math.pow(2,h),h++),A[M]=y++,v=String(x)}if(v!==""){if(Object.prototype.hasOwnProperty.call(_,v)){if(v.charCodeAt(0)<256){for(o=0;o<h;o++)e=e<<1,c==r-1?(c=0,g.push(f(e)),e=0):c++;for(s=v.charCodeAt(0),o=0;o<8;o++)e=e<<1|s&1,c==r-1?(c=0,g.push(f(e)),e=0):c++,s=s>>1}else{for(s=1,o=0;o<h;o++)e=e<<1|s,c==r-1?(c=0,g.push(f(e)),e=0):c++,s=0;for(s=v.charCodeAt(0),o=0;o<16;o++)e=e<<1|s&1,c==r-1?(c=0,g.push(f(e)),e=0):c++,s=s>>1}S--,S==0&&(S=Math.pow(2,h),h++),delete _[v]}else for(s=A[v],o=0;o<h;o++)e=e<<1|s&1,c==r-1?(c=0,g.push(f(e)),e=0):c++,s=s>>1;S--,S==0&&(S=Math.pow(2,h),h++)}for(s=2,o=0;o<h;o++)e=e<<1|s&1,c==r-1?(c=0,g.push(f(e)),e=0):c++,s=s>>1;for(;;)if(e=e<<1,c==r-1){g.push(f(e));break}else c++;return g.join("")},decompress:function(t){return t==null?"":t==""?null:w._decompress(t.length,32768,function(r){return t.charCodeAt(r)})},_decompress:function(t,r,f){var o=[],s=4,A=4,_=3,x="",M=[],v,S,y,h,g,e,c,i={val:f(0),position:r,index:1};for(v=0;v<3;v+=1)o[v]=v;for(y=0,g=Math.pow(2,2),e=1;e!=g;)h=i.val&i.position,i.position>>=1,i.position==0&&(i.position=r,i.val=f(i.index++)),y|=(h>0?1:0)*e,e<<=1;switch(y){case 0:for(y=0,g=Math.pow(2,8),e=1;e!=g;)h=i.val&i.position,i.position>>=1,i.position==0&&(i.position=r,i.val=f(i.index++)),y|=(h>0?1:0)*e,e<<=1;c=l(y);break;case 1:for(y=0,g=Math.pow(2,16),e=1;e!=g;)h=i.val&i.position,i.position>>=1,i.position==0&&(i.position=r,i.val=f(i.index++)),y|=(h>0?1:0)*e,e<<=1;c=l(y);break;case 2:return""}for(o[3]=c,S=c,M.push(c);;){if(i.index>t)return"";for(y=0,g=Math.pow(2,_),e=1;e!=g;)h=i.val&i.position,i.position>>=1,i.position==0&&(i.position=r,i.val=f(i.index++)),y|=(h>0?1:0)*e,e<<=1;switch(c=y){case 0:for(y=0,g=Math.pow(2,8),e=1;e!=g;)h=i.val&i.position,i.position>>=1,i.position==0&&(i.position=r,i.val=f(i.index++)),y|=(h>0?1:0)*e,e<<=1;o[A++]=l(y),c=A-1,s--;break;case 1:for(y=0,g=Math.pow(2,16),e=1;e!=g;)h=i.val&i.position,i.position>>=1,i.position==0&&(i.position=r,i.val=f(i.index++)),y|=(h>0?1:0)*e,e<<=1;o[A++]=l(y),c=A-1,s--;break;case 2:return M.join("")}if(s==0&&(s=Math.pow(2,_),_++),o[c])x=o[c];else if(c===A)x=S+S.charAt(0);else return null;M.push(x),o[A++]=S+x.charAt(0),s--,S=x,s==0&&(s=Math.pow(2,_),_++)}}};return w}();n!=null?n.exports=p:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return p})})(H);var D=H.exports;function B(n){navigator.clipboard.writeText(n)}const z=()=>{const n=new URLSearchParams(window.location.search),p={};for(const[l,u]of n.entries())p[l]=u;return p},b=(n,p)=>{const l=new URLSearchParams(window.location.search);l.set(n,p),window.history.replaceState(window.history.state,"",`${window.location.pathname}?${l.toString()}`)},j="theme",R="language",U="code",O=z(),E={theme:O[j]||"one-dark-pro",language:O[R]||"javascript",code:O[U]?D.decompressFromEncodedURIComponent(O[U]):`function main() {
  console.log("hello world!");
}`,outputElements:[],addOutputElement(n){this.outputElements.push(n)}};async function N(){E.highlighter=await window.shiki.getHighlighter({theme:E.theme})}function P(){return window.shiki.BUNDLED_THEMES}function Y(){return window.shiki.BUNDLED_LANGUAGES.map(({id:n})=>n)}function T(){var p;b(U,D.compressToEncodedURIComponent(E.code));const n=(p=E.highlighter)==null?void 0:p.codeToHtml(E.code,E.language);return E.outputElements.forEach(l=>{l.innerHTML=n}),n}function k(){G(T())}function G(n){var p;if(n){B(n);return}B((p=E.highlighter)==null?void 0:p.codeToHtml(E.code,E.language))}function C(n){n!==E.language&&(b(R,n),E.language=n,T())}async function K(n){n!==E.theme&&(b(j,n),E.theme=n,E.highlighter=await window.shiki.getHighlighter({theme:n}),T())}const Q=["animate","animateMotion","animateTransform","circle","clipPath","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","title","tspan","use","view"];function F(n){return n==="fragment"?document.createDocumentFragment():Q.includes(n)?document.createElementNS("http://www.w3.org/2000/svg",n):document.createElement(n)}function L(n,p,...l){const u=F(n),d={...p};return l.forEach(a=>{if(a){if(typeof a=="string"){u.appendChild(document.createTextNode(a));return}u.appendChild(a)}}),u instanceof DocumentFragment||Object.entries(d).forEach(([a,m])=>{if(!(typeof m>"u"||m===null)){if(a==="events"){Object.entries(m).forEach(([w,t])=>{if(Array.isArray(t)){const f=t;u.addEventListener(w,...f);return}const r=t;u.addEventListener(w,r)});return}if(a==="dataset"){Object.entries(m).forEach(([w,t])=>{t&&(u.dataset[w]=t)});return}if(a==="style"){Object.entries(m).forEach(([w,t])=>{if(w in u.style){u.style[w]=t;return}u.style.setProperty(w,t)});return}if(a==="class"&&typeof m=="string"){u.classList.add(...m.split(" "));return}if(u instanceof SVGElement&&typeof m=="string"){if(a==="className"){u.classList.add(...m.split(" "));return}u.setAttribute(a,m);return}if(a in u){try{u[a]=m}catch{u.setAttribute(a,m)}return}u.setAttribute(a,m)}}),u}function Z(){const n=P(),p=l=>L("option",{selected:l===E.theme},l);return L("div",{className:"select-container"},L("span",{},"Theme: "),L("select",{events:{change:({target:l})=>{l instanceof HTMLSelectElement&&K(n[l.selectedIndex])}}},...n.map(l=>p(l))))}function q(){const n=Y(),p=l=>L("option",{selected:l===E.language},l);return L("div",{className:"select-container"},L("span",{},"Languages: "),L("select",{events:{change:({target:l})=>{l instanceof HTMLSelectElement&&(C(n[l.selectedIndex]),T())}}},...n.map(l=>p(l))))}function $(){const n=document.createElementNS("http://www.w3.org/2000/svg","svg"),p=document.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttribute("width","1.5rem"),n.setAttribute("height","1.5rem"),n.setAttribute("viewBox","0 0 24 24"),p.setAttribute("d","M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"),n.append(p),L("button",{className:"copy",events:{click:()=>{G()}}},n)}function I(){const n=u=>{const{target:d}=u;d instanceof HTMLTextAreaElement&&(E.code=d.value,T())},p=u=>{const{code:d,target:a}=u;if(d!=="Tab"||!(a instanceof HTMLTextAreaElement))return;u.preventDefault();const m=a.selectionStart,w=a.selectionEnd,t=a.value;a.value=`${t.slice(0,m)}  ${t.slice(m)}`,a.selectionEnd=w+2,T()},l=u=>{const{target:d}=u;d instanceof HTMLTextAreaElement&&(E.code=d.value,k())};return L("textarea",{autocapitalize:"off",spellcheck:!1,autocomplete:"off",value:E.code,events:{keyup:n,change:n,keydown:p,paste:l,copy:l}})}function J(){const n=L("div");return E.addOutputElement(n),n}function W(){return L("fragment",{},Z(),q(),L("div",{className:"editor"},L("div",{className:"editor__inner"},J(),I())),$())}async function X(){const n=document.getElementById("root"),p=document.querySelector(".loader");await N(),n&&(n.append(W()),T(),p&&(p.addEventListener("transitionend",()=>{p.remove()}),p.classList.add("loader--hide")))}X();