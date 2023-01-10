(()=>{"use strict";var e={};function t(t){var r=e.classPrefix;return"Forms"===t?r+"0":"Headings"===t?r+"1":"Images"===t?r+"2":"Landmarks"===t?r+"3":"Lists"===t?r+"4":"Interactive"===t?r+"5":"unrecognizedName"}function r(){var e;return{x:void 0===window.pageXOffset?(((e=document.documentElement)||(e=document.body.parentNode))&&"number"==typeof e.ScrollLeft?e:document.body).ScrollLeft:window.pageXOffset,y:void 0===window.pageYOffset?(((e=document.documentElement)||(e=document.body.parentNode))&&"number"==typeof e.ScrollTop?e:document.body).ScrollTop:window.pageYOffset}}Object.defineProperty(e,"classPrefix",{value:"a11yGfdXALm"}),Object.defineProperty(e,"globalPrefix",{value:"a11y"}),Object.defineProperty(e,"title",{value:"oaa-tools/bookmarklets"}),Object.defineProperty(e,"version",{value:"0.2.2"});var n=1e5;function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var a=["application","banner","complementary","contentinfo","form","main","navigation","search","alert","alertdialog","button","checkbox","dialog","gridcell","link","log","marquee","menuitem","menuitemcheckbox","menuitemradio","option","progressbar","radio","scrollbar","searchbox","slider","spinbutton","status","switch","tab","tabpanel","textbox","timer","tooltip","treeitem","combobox","grid","listbox","menu","menubar","radiogroup","tablist","tree","treegrid","article","cell","columnheader","definition","directory","document","group","heading","img","list","listitem","math","none","note","presentation","region","row","rowgroup","rowheader","separator","table","text","toolbar"];function i(e){var t=e.tagName.toLowerCase(),r=e.type;if(e.hasAttribute("role"))return function(e){for(var t,r=e.split(" "),n=function(){var e=r[i].toLowerCase(),t=a.find((function(t){return t===e}));if(t)return{v:t}},i=0;i<r.length;i++)if("object"===o(t=n()))return t.v;return null}(c(e,"role"));switch(t){case"a":case"area":case"link":if(e.hasAttribute("href"))return"link";break;case"article":return"article";case"aside":return"complementary";case"body":return"document";case"button":case"summary":return"button";case"datalist":case"select":return"listbox";case"details":case"fieldset":return"group";case"dialog":return"dialog";case"dl":case"ol":case"ul":return"list";case"footer":if(!E(e,["article","section"]))return"contentinfo";break;case"form":return"form";case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return"heading";case"header":if(!E(e,["article","section"]))return"banner";break;case"hr":return"separator";case"img":if(!function(e){var t=e.getAttribute("alt");return null!==t&&0===s(t).length}(e))return"img";break;case"input":if("button"===r)return"button";if("checkbox"===r)return"checkbox";if("email"===r)return e.hasAttribute("list")?"combobox":"textbox";if("image"===r)return"button";if("number"===r)return"spinbutton";if("password"===r)return"textbox";if("radio"===r)return"radio";if("range"===r)return"slider";if("reset"===r)return"button";if("search"===r)return e.hasAttribute("list")?"combobox":"textbox";if("submit"===r)return"button";if("tel"===r)return e.hasAttribute("list")?"combobox":"textbox";if("text"===r)return e.hasAttribute("list")?"combobox":"textbox";if("url"===r)return e.hasAttribute("list")?"combobox":"textbox";break;case"li":if(function(e,t){var r=e.parentElement.tagName.toLowerCase();return!!r&&["ol","ul"].some((function(e){return r===e}))}(e))return"listitem";break;case"main":return"main";case"menu":if("toolbar"===r)return"toolbar";break;case"menuitem":if("command"===r)return"menuitem";if("checkbox"===r)return"menuitemcheckbox";if("radio"===r)return"menuitemradio";break;case"meter":case"progress":return"progressbar";case"nav":return"navigation";case"option":if(function(e){var t=e.parentElement,r=t.tagName.toLowerCase(),n=t.parentElement.tagName.toLowerCase();return!("select"!==r&&("optgroup"!==r||"select"!==n)&&"datalist"!==r)}(e))return"option";break;case"output":return"status";case"section":return"region";case"tbody":case"tfoot":case"thead":return"rowgroup";case"textarea":return"textbox";case"th":return"columnheader"}return null}function l(e){return s(e.value)}function u(e){var t;return(t=c(e,"aria-valuetext")).length||(t=c(e,"aria-valuenow")).length?t:l(e)}function s(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"").replace(/\s+/g," ")}function c(e,t){var r=e.getAttribute(t);return null===r?"":s(r)}function f(e){var t=e.tagName.toLowerCase(),r=e.type;return"input"===t?"hidden"!==r:!("button"!==t&&"keygen"!==t&&"meter"!==t&&"output"!==t&&"progress"!==t&&"select"!==t&&"textarea"!==t)}function d(e,t){var r=t,n=getComputedStyle(e,":before").content,o=getComputedStyle(e,":after").content;return"none"!==n&&(r=n+r),"none"!==o&&(r+=o),r}function m(e,t){var r="";if(e===t)return"";switch(e.nodeType){case Node.ELEMENT_NODE:if(function(e){var t=e.tagName.toLowerCase();return!("img"!==t&&"area"!==t)||!("input"!==t)&&e.type&&"image"===e.type}(e))r=c(e,"alt");else if(function(e){var t=i(e);return-1!==["textbox","combobox","listbox","slider","spinbutton"].indexOf(t)}(e))r=function(e){var t=i(e);return"textbox"===t?function(e){var t=e.tagName.toLowerCase(),r=e.type;return"input"===t&&-1!==["email","password","search","tel","text","url"].indexOf(r)||"textarea"===t?l(e):""}(e):"combobox"===t?function(e){var t=e.tagName.toLowerCase(),r=e.type;return"input"===t&&-1!==["email","search","tel","text","url"].indexOf(r)?l(e):""}(e):"listbox"===t?function(e){if("select"===e.tagName.toLowerCase()){for(var t=[],r=e.selectedOptions,n=0;n<r.length;n++){var o=s(r[n].value);o.length&&t.push(o)}if(t.length)return t.join(" ")}return""}(e):"slider"===t?function(e){var t=e.tagName.toLowerCase(),r=e.type;return"input"===t&&"range"===r?u(e):""}(e):"spinbutton"===t?function(e){var t=e.tagName.toLowerCase(),r=e.type;return"input"===t&&"number"===r?u(e):""}(e):""}(e);else if(e.hasChildNodes()){for(var n,o=e.childNodes,a=[],f=0;f<o.length;f++)(n=m(o[f],t)).length&&a.push(n);r=a.length?a.join(" "):""}r=d(e,r);break;case Node.TEXT_NODE:r=s(e.textContent)}return r}function p(e,t){var r="";if(e.hasChildNodes()){for(var n,o=e.childNodes,a=[],i=0;i<o.length;i++)(n=m(o[i],t)).length&&a.push(n);r=a.length?a.join(" "):""}return d(e,r)}function b(e,t){var r;return(r=c(e,t)).length?{name:r,source:t}:null}function h(e){var t=e.getAttribute("alt");return null===t?null:(t=s(t)).length?{name:t,source:"alt"}:{name:"<empty>",source:"alt"}}function g(e){var t;return(t=p(e)).length?{name:t,source:"contents"}:null}function v(e){return e.length?{name:e,source:"default"}:null}function y(e,t){var r=e.querySelector(t);if(r){var n=p(r);if(n.length)return{name:n,source:t+" element"}}return null}function w(e){var t,r;return e.id&&(r=document.querySelector('[for="'+e.id+'"]'))&&(t=p(r,e)).length?{name:t,source:"label reference"}:"function"==typeof e.closest&&(r=e.closest("label"))&&(t=p(r,e)).length?{name:t,source:"label encapsulation"}:null}function x(e){var t="",r=e.title,n=e.element,o=e.grpLabels,a=e.accName,i=e.accDesc,l=e.role,u=e.props;if(t+="=== "+r+" ===",n&&(t+="\nELEMENT: "+n),o&&o.length)for(var s=o.length-1;0<=s;s--)t+="\nGRP. LABEL: "+o[s].name+"\nFROM: "+o[s].source;return a&&(t+="\nACC. NAME: "+a.name+"\nFROM: "+a.source),i&&(t+="\nACC. DESC: "+i.name+"\nFROM: "+i.source),l&&(t+="\nROLE: "+l),u&&(t+="\nPROPERTIES: "+u),t}function E(e,t){return!("function"!=typeof e.closest)&&t.some((function(t){return null!==e.closest(t)}))}function N(e){var t=e.targetList,o=e.cssClass,a=e.getInfo,i=e.evalInfo,l=e.dndFlag,u=0;return t.forEach((function(e){var t=document.querySelectorAll(e.selector);"function"==typeof e.filter&&(t=Array.prototype.filter.call(t,e.filter)),Array.prototype.forEach.call(t,(function(t){if(function(e){return function e(t){if(t.nodeType===Node.DOCUMENT_NODE)return!0;var r=window.getComputedStyle(t,null),n=r.getPropertyValue("display"),o=r.getPropertyValue("visibility"),a=t.getAttribute("hidden"),i=t.getAttribute("aria-hidden");return"none"!==n&&"hidden"!==o&&null===a&&"true"!==i&&e(t.parentNode)}(e)}(t)){var s=a(t,e);i&&i(s,e);var c=t.getBoundingClientRect(),f=function(e,t,o){var a=Math.max,i=r(),l=document.createElement("div");l.setAttribute("class",[o,"oaa-element-overlay"].join(" ")),l.startLeft=t.left+i.x+"px",l.startTop=t.top+i.y+"px",l.style.left=l.startLeft,l.style.top=l.startTop,l.style.width=a(t.width,68)+"px",l.style.height=a(t.height,27)+"px",l.style.borderColor=e.color,l.style.zIndex=n;var u=document.createElement("div");return u.setAttribute("class","oaa-overlay-label"),u.style.backgroundColor=e.color,u.innerHTML=e.label,l.appendChild(u),l}(e,c,o);l&&function(e){function t(e){e.style.zIndex=n+=100}var o=e.firstChild;o.onmousedown=function(e){!function(e,t,n){function o(t){t||(t=window.event);var n=r();e.style.left=t.clientX+n.x-f+"px",e.style.top=t.clientY+n.y-d+"px",e.style.cursor="move",t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}function a(t){t||(t=window.event),e.style.cursor="grab",e.style.cursor="-moz-grab",e.style.cursor="-webkit-grab",document.removeEventListener?(document.removeEventListener("mouseup",a,!0),document.removeEventListener("mousemove",o,!0)):document.detachEvent&&(e.detachEvent("onlosecapture",a),e.detachEvent("onmouseup",a),e.detachEvent("onmousemove",o),e.releaseCapture()),t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}var i=r(),l=n.clientX+i.x,u=n.clientY+i.y,s=e.offsetLeft,c=e.offsetTop,f=l-s,d=u-c;t&&t(e),document.addEventListener?(document.addEventListener("mousemove",o,!0),document.addEventListener("mouseup",a,!0)):document.attachEvent&&(e.setCapture(),e.attachEvent("onmousemove",o),e.attachEvent("onmouseup",a),e.attachEvent("onlosecapture",a)),n.stopPropagation?n.stopPropagation():n.cancelBubble=!0,n.preventDefault?n.preventDefault():n.returnValue=!1}(this.parentNode,t,e)},o.ondblclick=function(){!function(e){e.style.left=e.startLeft,e.style.top=e.startTop}(this.parentNode)}}(f);var d=f.firstChild;d.setAttribute("data-bs-toggle","popover"),d.setAttribute("data-bs-content",x(s)),d.title=x(s).split("\n")[0],document.body.appendChild(f),u+=1}}))})),u}function L(e){var t=document.querySelectorAll("div."+e);Array.prototype.forEach.call(t,(function(e){document.body.removeChild(e)}))}function C(e){var t=window.innerWidth/3.2,n=window.innerWidth/2-t/2,o=r();e.style.width=t+"px",e.style.left=o.x+n+"px",e.style.top=o.y+30+"px"}function k(){this.GLOBAL_NAME="a11yMessageDialog",this.CSS_CLASS="oaa-message-dialog"}function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function S(t){var r=this,n=function(t){return e.globalPrefix+t}(t.appName);if("object"===A(window[n]))return window[n];this.appName=t.appName,this.cssClass=t.cssClass,this.msgText=t.msgText,this.params=t,this.show=!1;var o=new k;window.addEventListener("resize",(function(){L(r.cssClass),o.resize(),r.show=!1})),window[n]=this,function(t){console.log(e.title+" : v"+e.version+" : "+t)}(this.appName)}function T(e,t){var r=e.tagName.toLowerCase(),n=i(e),o=null;if(n&&("presentation"===n||"none"===n))return null;switch(r){case"input":switch(e.type){case"hidden":t&&(o=w(e));break;case"email":case"password":case"search":case"tel":case"text":case"url":null===(o=w(e))&&(o=b(e,"placeholder"));break;case"button":o=b(e,"value");break;case"reset":null===(o=b(e,"value"))&&(o=v("Reset"));break;case"submit":null===(o=b(e,"value"))&&(o=v("Submit"));break;case"image":null===(o=h(e))&&(o=b(e,"value"));break;default:o=w(e)}break;case"button":case"label":case"a":o=g(e);break;case"keygen":case"meter":case"output":case"progress":case"select":o=w(e);break;case"textarea":null===(o=w(e))&&(o=b(e,"placeholder"));break;case"audio":case"embed":case"object":case"video":o={name:"NOT YET IMPLEMENTED",source:""};break;case"iframe":o=b(e,"title");break;case"img":case"area":o=h(e);break;case"svg":o=y(e,"title");break;case"details":o=function(e){var t,r;if((r=e.querySelector("summary"))&&(t=p(r)),function(e){return e.hasAttribute("open")}(e)){if(t+=function(e,t){var r,n=[];return Array.prototype.forEach.call(e.childNodes,(function(e){switch(e.nodeType){case Node.ELEMENT_NODE:(function(e){return"summary"!==e.tagName.toLowerCase()})(e)&&(r=p(e)).length&&n.push(r);break;case Node.TEXT_NODE:(r=s(e.textContent)).length&&n.push(r)}})),n.length?n.join(" "):""}(e),t.length)return{name:t,source:"contents"}}else if(t.length)return{name:t,source:"summary element"};return null}(e);break;case"figure":o=y(e,"figcaption");break;case"table":o=y(e,"caption");break;default:(function(e){var t=i(e);if(null===t)return!1;var r=["button","cell","checkbox","columnheader","directory","gridcell","heading","link","listitem","menuitem","menuitemcheckbox","menuitemradio","option","radio","row","rowgroup","rowheader","switch","tab","text","tooltip","treeitem"].find((function(e){return e===t}));return void 0!==r}(e)||t)&&(o=g(e))}return null===o&&(o=b(e,"title")),o}function O(e,t){var r,n,o,a,i=c(e,t),l=[];if(i.length)for(r=i.split(" "),n=0;n<r.length;n++)(o=document.getElementById(r[n]))&&(a=P(o,!0))&&a.name.length&&l.push(a.name);return l.length?{name:l.join(" "),source:t}:null}function P(e,t){var r=null;return t||(r=O(e,"aria-labelledby")),null===r&&(r=b(e,"aria-label")),null===r&&(r=T(e,t)),r}function M(e,t){this.title=t,this.element=function(e){var t=e.tagName.toLowerCase(),r=t;if("input"===t){var n=e.type;n&&n.length&&(r+=' [type="'+n+'"]')}if("label"===t){var o=c(e,"for");o.length&&(r+=' [for="'+o+'"]')}if(f(e)){var a=e.id;a&&a.length&&(r+=' [id="'+a+'"]')}if(e.hasAttribute("role")){var i=c(e,"role");i.length&&(r+=' [role="'+i+'"]')}return r}(e),this.grpLabels=function(e){return f(e)?function(e){var t=[];return"function"==typeof e.closest?(function e(t,r){var n=t.closest("fieldset");if(n){var o=n.querySelector("legend");if(o){var a=p(o);a.length&&r.push({name:a,source:"fieldset/legend"})}e(n.parentNode,r)}}(e,t),t):t}(e):[]}(e),this.accName=P(e),this.accDesc=function(e,t){var r=null;return null===(r=O(e,"aria-describedby"))&&(r=b(e,"title")),r}(e),this.role=i(e),function(e,t){if(null===e||null===t)return!1;var r=e.name,n=t.name;return!("string"!=typeof r||"string"!=typeof n)&&r.toLowerCase().includes(n.toLowerCase())}(this.accName,this.accDesc)&&(this.accDesc=null)}k.prototype.show=function(e,t){var r,n,o=this,a=this.GLOBAL_NAME;window[a]||(window[a]=function(e,t){var r=document.createElement("div"),n=document.createElement("button");return r.className=e,C(r),n.onclick=function(){return o.hide()},r.appendChild(n),document.body.appendChild(r),r}(this.CSS_CLASS)),(r=document.createElement("h2")).innerHTML=e,window[a].appendChild(r),(n=document.createElement("div")).innerHTML=t,window[a].appendChild(n)},k.prototype.hide=function(){var e=this.GLOBAL_NAME;window[e]&&(function(e){e&&document.body.removeChild(e)}(window[e]),delete window[e])},k.prototype.resize=function(){var e=this.GLOBAL_NAME;window[e]&&C(window[e])},S.prototype.run=function(){var e=new k;e.hide(),this.show=!this.show,this.show?0===N(this.params)&&(e.show(this.appName,this.msgText),this.show=!1):L(this.cssClass)},M.prototype.addProps=function(e){this.props=e},function(){!function(){var e=String.prototype;Array.prototype.find||(Array.prototype.find=function(e){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var t,r=Object(this),n=r.length>>>0,o=arguments[1],a=0;a<n;a++)if(t=r[a],e.call(o,t,a,r))return t}),e.includes||(e.includes=function(e,t){return"number"!=typeof t&&(t=0),!(t+e.length>this.length)&&-1!==this.indexOf(e,t)})}();var e=[{selector:"a",color:"olive",label:"a"},{selector:"audio[controls]",color:"olive",label:"audio"},{selector:"button",color:"olive",label:"button"},{selector:"embed",color:"purple",label:"embed"},{selector:"iframe",color:"teal",label:"iframe"},{selector:"img[usemap]",color:"maroon",label:"img"},{selector:"input",color:"navy",label:"input"},{selector:"keygen",color:"teal",label:"keygen"},{selector:"label",color:"purple",label:"label"},{selector:"object[usemap]",color:"gray",label:"object"},{selector:"select",color:"green",label:"select"},{selector:"textarea",color:"navy",label:"textarea"},{selector:"video[controls]",color:"navy",label:"video"},{selector:"meter",color:"maroon",label:"meter"},{selector:"output",color:"brown",label:"output"},{selector:"progress",color:"gray",label:"progress"},{selector:"area",color:"brown",label:"area"},{selector:"details",color:"purple",label:"details"},{selector:"svg",color:"green",label:"svg"},{selector:"[tabindex]",color:"teal",label:"tabindex"}],r=e.map((function(e){return e.selector})).join(", ");return new S({appName:"Interactive",cssClass:t("Interactive"),msgText:"No interactive elements ("+r+") found.",targetList:e,getInfo:function(e){return new M(e,"INTERACTIVE INFO")},evalInfo:function(e,t){t.color=null===e.accName?"maroon":"#008080"},dndFlag:!0})}().run()})();