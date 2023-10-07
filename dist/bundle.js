(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n\nh1{\n    margin: 0;\n    padding: 20px;\n    border: gold 10px solid;\n    background-color: black;\n    color: white;\n    text-align: center;\n}\n\n#flex-container{\n    display: flex;\n    align-items: stretch;\n    background-color: #6a9cff;\n    flex-grow : 1;\n  }\n\n#projects{\n    background-color: blue;\n    flex: 1 1 400px;\n    min-width: 400px;\n    max-width: 400px;\n    padding-left: 10px;\n   \n}\n#todo-container{\n    background-color: aqua;\n    flex: 5 2 auto;\n}\n\n\n\n.todo{\n  \n    background-color: blueviolet;\n    display: flex;\n    justify-content: space-between;\n    padding-right: 100px;\n    padding-left: 100px;\n    border: white 1px solid;\n    font-size: 3rem;\n}\n\n.todo > p{\n    margin: 0;\n    padding: 0;\n}\n\n.active{\n    background-color: chocolate;\n    color: beige;\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=r(f,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{let e=document.getElementById("todo-container");document.getElementById("projects"),document.createElement("div"),document.getElementsByClassName("icon");class n{constructor(e,n,t,o){this.expand=!1,this.title=e,this.description=n,this.dueDate=t,this.priority=o}changeExpandState(){this.expand=!this.expand}}let o=[new n("Eat breakfast","scrambled eggs with fresh juice",new Date("2025-03-25"),"medium"),new n("Take out trash","bio on monday",new Date("2024-04-25"),"high")];var r=t(379),a=t.n(r),i=t(795),c=t.n(i),s=t(569),d=t.n(s),l=t(565),u=t.n(l),p=t(216),f=t.n(p),m=t(589),h=t.n(m),v=t(426),g={};g.styleTagTransform=h(),g.setAttributes=u(),g.insert=d().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=f(),a()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals;const y=function(e){const n=document.createElement("div");return e.forEach((e=>{let t=function(e){const n=document.createElement("div"),t=document.createElement("div");t.classList.add("todo");const o=document.createElement("p"),r=document.createElement("p"),a=document.createElement("img");a.src="../src/images/icons8-expand-arrow-50.png",o.textContent=e.title,r.textContent="in "+function(e){const n=e-Date.now();return Math.floor(n/864e5)}(e.dueDate)+" days",t.appendChild(o),t.appendChild(r),t.appendChild(a),n.appendChild(t);const i=document.createElement("div");i.classList.add("todo");const c=document.createElement("p");c.textContent=e.description;const s=document.createElement("p");return s.textContent=e.dueDate.getDate()+"."+(e.dueDate.getMonth()+1)+"."+e.dueDate.getFullYear(),i.appendChild(c),i.appendChild(s),n.appendChild(i),i.style.display="none",a.addEventListener("click",(function(){n.classList.toggle("active"),n.classList.contains("active")?i.style.display="block":i.style.display="none"})),n}(e);n.appendChild(t)})),n}(o);e.appendChild(y)})()})();