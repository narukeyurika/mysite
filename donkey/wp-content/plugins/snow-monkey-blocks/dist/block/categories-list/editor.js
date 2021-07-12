!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=21)}([function(t,e){t.exports=window.wp.element},function(t,e){t.exports=window.wp.i18n},function(t,e){t.exports=window.lodash},function(t,e){t.exports=window.wp.components},function(t,e,i){var n,o;window,void 0===(o="function"==typeof(n=function(){"use strict";function t(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}var e="undefined"==typeof console?function(){}:function(t){console.error(t)},i=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],n=i.length;function o(t){var i=getComputedStyle(t);return i||e("Style returned "+i+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),i}var r,s=!1;return function e(a){if(function(){if(!s){s=!0;var i=document.createElement("div");i.style.width="200px",i.style.padding="1px 2px 3px 4px",i.style.borderStyle="solid",i.style.borderWidth="1px 2px 3px 4px",i.style.boxSizing="border-box";var n=document.body||document.documentElement;n.appendChild(i);var a=o(i);r=200==Math.round(t(a.width)),e.isBoxSizeOuter=r,n.removeChild(i)}}(),"string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var c=o(a);if("none"==c.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<n;e++)t[i[e]]=0;return t}();var l={};l.width=a.offsetWidth,l.height=a.offsetHeight;for(var u=l.isBorderBox="border-box"==c.boxSizing,h=0;h<n;h++){var d=i[h],f=c[d],p=parseFloat(f);l[d]=isNaN(p)?0:p}var m=l.paddingLeft+l.paddingRight,g=l.paddingTop+l.paddingBottom,y=l.marginLeft+l.marginRight,v=l.marginTop+l.marginBottom,b=l.borderLeftWidth+l.borderRightWidth,_=l.borderTopWidth+l.borderBottomWidth,O=u&&r,E=t(c.width);!1!==E&&(l.width=E+(O?0:m+b));var w=t(c.height);return!1!==w&&(l.height=w+(O?0:g+_)),l.innerWidth=l.width-(m+b),l.innerHeight=l.height-(g+_),l.outerWidth=l.width+y,l.outerHeight=l.height+v,l}}})?n.call(e,i,e,t):n)||(t.exports=o)},function(t,e){t.exports=function(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e,i){var n,o;"undefined"!=typeof window&&window,void 0===(o="function"==typeof(n=function(){"use strict";function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],o=0;o<i.length;o++){var r=i[o];n&&n[r]&&(this.off(t,r),delete n[r]),r.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t})?n.call(e,i,e,t):n)||(t.exports=o)},function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i(8),o=i.n(n);function r(t){t.classList.add("masonry-active"),new o.a(t,{itemSelector:".smb-categories-list__item",percentPosition:!0,horizontalOrder:!0})}},function(t,e,i){var n,o,r;window,o=[i(13),i(4)],void 0===(r="function"==typeof(n=function(t,e){"use strict";var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var n=i.prototype;return n._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},n.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n;r=Math[s&&s<1?"round":"floor"](r),this.cols=Math.max(r,1)},n.getContainerWidth=function(){var t=this._getOption("fitWidth")?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},n._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=Math[e&&e<1?"round":"ceil"](t.size.outerWidth/this.columnWidth);i=Math.min(i,this.cols);for(var n=this[this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition"](i,t),o={x:this.columnWidth*n.col,y:n.y},r=n.y+t.size.outerHeight,s=i+n.col,a=n.col;a<s;a++)this.colYs[a]=r;return o},n._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},n._getTopColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;n<i;n++)e[n]=this._getColGroupY(n,t);return e},n._getColGroupY=function(t,e){if(e<2)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},n._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols;i=t>1&&i+t>this.cols?0:i;var n=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=n?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},n._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft")?n.left:n.right,r=o+i.outerWidth,s=Math.floor(o/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a-=r%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var c=(this._getOption("originTop")?n.top:n.bottom)+i.outerHeight,l=s;l<=a;l++)this.colYs[l]=Math.max(c,this.colYs[l])},n._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},n._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i})?n.apply(e,o):n)||(t.exports=r)},function(t){t.exports=JSON.parse('{"apiVersion":2,"name":"snow-monkey-blocks/categories-list","title":"Categories list","description":"This is a block that displays a list of categories","category":"smb","attributes":{"articles":{"type":"number","default":5},"exclusionCategories":{"type":"string","default":""},"orderby":{"type":"string","default":""},"order":{"type":"string","default":""}}}')},function(t,e){t.exports=window.wp.data},function(t,e){t.exports=window.regeneratorRuntime},function(t,e){t.exports=window.wp.blockEditor},function(t,e,i){var n,o;!function(r,s){"use strict";n=[i(6),i(4),i(14),i(16)],void 0===(o=function(t,e,i,n){return function(t,e,i,n,o){var r=t.console,s=t.jQuery,a=function(){},c=0,l={};function u(t,e){var i=n.getQueryElement(t);if(i){this.element=i,s&&(this.$element=s(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++c;this.element.outlayerGUID=o,l[o]=this,this._create(),this._getOption("initLayout")&&this.layout()}else r&&r.error("Bad element for "+this.constructor.namespace+": "+(i||t))}u.namespace="outlayer",u.Item=o,u.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var h=u.prototype;function d(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}n.extend(h,e.prototype),h.option=function(t){n.extend(this.options,t)},h._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},u.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},h._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle),this._getOption("resize")&&this.bindResize()},h.reloadItems=function(){this.items=this._itemize(this.element.children)},h._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=new i(e[o],this);n.push(r)}return n},h._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},h.getItemElements=function(){return this.items.map((function(t){return t.element}))},h.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},h._init=h.layout,h._resetLayout=function(){this.getSize()},h.getSize=function(){this.size=i(this.element)},h._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},h.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},h._getItemsForLayout=function(t){return t.filter((function(t){return!t.isIgnored}))},h._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach((function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)}),this),this._processLayoutQueue(i)}},h._getItemLayoutPosition=function(){return{x:0,y:0}},h._processLayoutQueue=function(t){this.updateStagger(),t.forEach((function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)}),this)},h.updateStagger=function(){var t=this.options.stagger;if(null!=t)return this.stagger=function(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];return i.length?(i=parseFloat(i))*(f[n]||1):0}(t),this.stagger;this.stagger=0},h._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},h._postLayout=function(){this.resizeContainer()},h.resizeContainer=function(){if(this._getOption("resizeContainer")){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},h._getContainerSize=a,h._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},h._emitCompleteOnItems=function(t,e){var i=this;function n(){i.dispatchEvent(t+"Complete",null,[e])}var o=e.length;if(e&&o){var r=0;e.forEach((function(e){e.once(t,s)}))}else n();function s(){++r==o&&n()}},h.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),s)if(this.$element=this.$element||s(this.element),e){var o=s.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},h.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},h.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},h.stamp=function(t){(t=this._find(t))&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},h.unstamp=function(t){(t=this._find(t))&&t.forEach((function(t){n.removeFrom(this.stamps,t),this.unignore(t)}),this)},h._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),n.makeArray(t)},h._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},h._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},h._manageStamp=a,h._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t);return{left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom}},h.handleEvent=n.handleEvent,h.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},h.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},h.onresize=function(){this.resize()},n.debounceMethod(u,"onresize",100),h.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},h.needsResizeLayout=function(){var t=i(this.element);return this.size&&t&&t.innerWidth!==this.size.innerWidth},h.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},h.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},h.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},h.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach((function(t,i){t.stagger(i*e),t.reveal()}))}},h.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach((function(t,i){t.stagger(i*e),t.hide()}))}},h.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},h.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},h.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},h.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach((function(t){var i=this.getItem(t);i&&e.push(i)}),this),e},h.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach((function(t){t.remove(),n.removeFrom(this.items,t)}),this)},h.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach((function(t){t.destroy()})),this.unbindResize();var e=this.element.outlayerGUID;delete l[e],delete this.element.outlayerGUID,s&&s.removeData(this.element,this.constructor.namespace)},u.data=function(t){var e=(t=n.getQueryElement(t))&&t.outlayerGUID;return e&&l[e]},u.create=function(t,e){var i=d(u);return i.defaults=n.extend({},u.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},u.compatOptions),i.namespace=t,i.data=u.data,i.Item=d(o),n.htmlInit(i,t),s&&s.bridget&&s.bridget(t,i),i};var f={ms:1,s:1e3};return u.Item=o,u}(r,t,e,i,n)}.apply(e,n))||(t.exports=o)}(window)},function(t,e,i){var n,o;!function(r,s){n=[i(15)],void 0===(o=function(t){return function(t,e){"use strict";var i={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e}},n=Array.prototype.slice;i.makeArray=function(t){return Array.isArray(t)?t:null==t?[]:"object"==typeof t&&"number"==typeof t.length?n.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach((function(t){if(t instanceof HTMLElement)if(n){e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}else o.push(t)})),o},i.debounceMethod=function(t,e,i){i=i||100;var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout((function(){n.apply(r,e),delete r[o]}),i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,(function(t,e,i){return e+"-"+i})).toLowerCase()};var o=t.console;return i.htmlInit=function(e,n){i.docReady((function(){var r=i.toDashed(n),s="data-"+r,a=document.querySelectorAll("["+s+"]"),c=document.querySelectorAll(".js-"+r),l=i.makeArray(a).concat(i.makeArray(c)),u=s+"-options",h=t.jQuery;l.forEach((function(t){var i,r=t.getAttribute(s)||t.getAttribute(u);try{i=r&&JSON.parse(r)}catch(e){return void(o&&o.error("Error parsing "+s+" on "+t.className+": "+e))}var a=new e(t,i);h&&h.data(t,n,a)}))}))},i}(r,t)}.apply(e,n))||(t.exports=o)}(window)},function(t,e,i){var n,o;!function(r,s){"use strict";void 0===(o="function"==typeof(n=s)?n.call(e,i,e,t):n)||(t.exports=o)}(window,(function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i]+"MatchesSelector";if(t[n])return n}}();return function(e,i){return e[t](i)}}))},function(t,e,i){var n,o,r;window,o=[i(6),i(4)],void 0===(r="function"==typeof(n=function(t,e){"use strict";var i=document.documentElement.style,n="string"==typeof i.transition?"transition":"WebkitTransition",o="string"==typeof i.transform?"transform":"WebkitTransform",r={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[n],s={transform:o,transition:n,transitionDuration:n+"Duration",transitionProperty:n+"Property",transitionDelay:n+"Delay"};function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var c=a.prototype=Object.create(t.prototype);c.constructor=a,c._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},c.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},c.getSize=function(){this.size=e(this.element)},c.css=function(t){var e=this.element.style;for(var i in t)e[s[i]||i]=t[i]},c.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=parseFloat(n),s=parseFloat(o),a=this.layout.size;-1!=n.indexOf("%")&&(r=r/100*a.width),-1!=o.indexOf("%")&&(s=s/100*a.height),r=isNaN(r)?0:r,s=isNaN(s)?0:s,r-=e?a.paddingLeft:a.paddingRight,s-=i?a.paddingTop:a.paddingBottom,this.position.x=r,this.position.y=s},c.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var c=n?"paddingTop":"paddingBottom",l=n?"top":"bottom",u=n?"bottom":"top",h=this.position.y+t[c];e[l]=this.getYValue(h),e[u]="",this.css(e),this.emitEvent("layout",[this])},c.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},c.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},c._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),!o||this.isTransitioning){var r=t-i,s=e-n,a={};a.transform=this.getTranslate(r,s),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})}else this.layoutPosition()},c.getTranslate=function(t,e){return"translate3d("+(t=this.layout._getOption("originLeft")?t:-t)+"px, "+(e=this.layout._getOption("originTop")?e:-e)+"px, 0)"},c.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},c.moveTo=c._transitionTo,c.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},c._nonTransition=function(t){for(var e in this.css(t.to),t.isCleaning&&this._removeStyles(t.to),t.onTransitionEnd)t.onTransitionEnd[e].call(this)},c.transition=function(t){if(parseFloat(this.layout.options.transitionDuration)){var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);t.from&&(this.css(t.from),this.element.offsetHeight),this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0}else this._nonTransition(t)};var l="opacity,"+o.replace(/([A-Z])/g,(function(t){return"-"+t.toLowerCase()}));c.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(r,this,!1)}},c.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},c.onotransitionend=function(t){this.ontransitionend(t)};var u={"-webkit-transform":"transform"};c.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,i=u[t.propertyName]||t.propertyName;delete e.ingProperties[i],function(t){for(var e in t)return!1;return!0}(e.ingProperties)&&this.disableTransition(),i in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[i]),i in e.onEnd&&(e.onEnd[i].call(this),delete e.onEnd[i]),this.emitEvent("transitionEnd",[this])}},c.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(r,this,!1),this.isTransitioning=!1},c._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var h={transitionProperty:"",transitionDuration:"",transitionDelay:""};return c.removeTransitionStyles=function(){this.css(h)},c.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},c.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},c.remove=function(){n&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",(function(){this.removeElem()})),this.hide()):this.removeElem()},c.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("visibleStyle")]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},c.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},c.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},c.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("hiddenStyle")]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},c.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},c.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a})?n.apply(e,o):n)||(t.exports=r)},function(t,e){t.exports=window.wp.blocks},function(t,e){t.exports=window.wp.dataControls},function(t,e){t.exports=window.wp.richText},function(t,e,i){var n;!function(){"use strict";var i={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var r=typeof n;if("string"===r||"number"===r)t.push(n);else if(Array.isArray(n)){if(n.length){var s=o.apply(null,n);s&&t.push(s)}}else if("object"===r)if(n.toString===Object.prototype.toString)for(var a in n)i.call(n,a)&&n[a]&&t.push(a);else t.push(n.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()},function(t,e,i){"use strict";i.r(e);var n={};i.r(n),i.d(n,"metadata",(function(){return h})),i.d(n,"name",(function(){return T})),i.d(n,"settings",(function(){return k}));var o=i(5),r=i.n(o),s=i(0),a=i(2),c=i(17),l=(i(19),i(1)),u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return t=Number(t),(isNaN(t)||t<e)&&(t=e),null!==i&&t>i&&(t=i),t},h=i(9),d=i(20),f=i.n(d),p=i(10),m=i(12),g=i(3),y=i(7),v=i(11),b=i.n(v),_=i(18);function O(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function E(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?O(Object(i),!0).forEach((function(e){r()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):O(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var w=h.name,x={articleCategories:{}},j={setArticleCategories:function(t){return{type:"SET_ARTICLE_CATEGORIES",articleCategories:t}},fetchArticleCategories:b.a.mark((function t(){var e;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.apiFetch)({path:"/wp/v2/categories/?per_page=-1"});case 2:return e=t.sent,t.abrupt("return",j.setArticleCategories(e));case 4:case"end":return t.stop()}}),t)}))},C={getArticleCategories:b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.fetchArticleCategories();case 2:case"end":return t.stop()}}),t)}))},S=Object(p.createReduxStore)(w,{reducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_ARTICLE_CATEGORIES":return E(E({},t),{},{articleCategories:e.articleCategories})}return t},actions:j,selectors:{getArticleCategories:function(t){return t.articleCategories}},controls:_.controls,resolvers:C});Object(p.register)(S);var T=h.name,k={icon:{foreground:"#cd162c",src:"excerpt-view"},edit:function(t){var e=t.attributes,i=t.setAttributes,n=t.className,o=e.articles,r=e.exclusionCategories,c=e.orderby,h=e.order,d=Object(s.useRef)();Object(s.useEffect)((function(){d.current&&Object(y.a)(d.current)}));var v=Object(p.useSelect)((function(t){return t(S).getArticleCategories()}));if(!v||!v.length)return Object(s.createElement)("div",Object(m.useBlockProps)(),Object(s.createElement)(g.Placeholder,{icon:"editor-ul",label:Object(l.__)("Categories list","snow-monkey-blocks")},Object(s.createElement)(g.Spinner,null),Object(l.__)("Loading Setting Data","snow-monkey-blocks")));var b=function(t,e){var i=[];return null!=r&&(i=r.split(",")),t?i.push(e):i=Object(a.remove)(i,(function(t){return e!==t})),Object(a.compact)(Object(a.union)(i)).join(",")},_=f()("smb-categories-list",n);return Object(s.createElement)(s.Fragment,null,Object(s.createElement)(m.InspectorControls,null,Object(s.createElement)(g.PanelBody,{title:Object(l.__)("Block Settings","snow-monkey-blocks")},Object(s.createElement)(g.RangeControl,{label:Object(l.__)("Categories List Articles","snow-monkey-blocks"),value:o,onChange:function(t){return i({articles:u(t,1,5)})},min:"1",max:"5"})),Object(s.createElement)((function(){var t=v.map((function(t){return Object(s.createElement)(g.CheckboxControl,{key:t.id,label:t.name,value:String(t.id),checked:-1!==Object(a.indexOf)(r.split(","),String(t.id)),onChange:function(e){i({exclusionCategories:b(e,String(t.id))})}})}));return Object(s.createElement)(g.PanelBody,{title:Object(l.__)("Exclusion Categories Settings","snow-monkey-blocks")},Object(s.createElement)("p",null,Object(l.__)("Categories with a post count of 0 are not displayed even if they are not excluded","snow-monkey-blocks")),t)}),null),Object(s.createElement)(g.PanelBody,{title:Object(l.__)("Display order settings","snow-monkey-blocks")},Object(s.createElement)("p",null,Object(l.__)("The display order you set is valid only on the actual contribution screen","snow-monkey-blocks")),Object(s.createElement)(g.SelectControl,{label:Object(l.__)("orderby","snow-monkey-blocks"),value:c,options:[{label:Object(l.__)("category id","snow-monkey-blocks"),value:"id"},{label:Object(l.__)("category name","snow-monkey-blocks"),value:"name"},{label:Object(l.__)("category slug","snow-monkey-blocks"),value:"slug"},{label:Object(l.__)("category post count","snow-monkey-blocks"),value:"count"},{label:Object(l.__)("term_group","snow-monkey-blocks"),value:"term_group"}],onChange:function(t){return i({orderby:t})}}),Object(s.createElement)(g.SelectControl,{label:Object(l.__)("order","snow-monkey-blocks"),value:h,options:[{label:Object(l.__)("asc","snow-monkey-blocks"),value:"asc"},{label:Object(l.__)("desc","snow-monkey-blocks"),value:"desc"}],onChange:function(t){return i({order:t})}}))),Object(s.createElement)("div",Object(m.useBlockProps)(),Object(s.createElement)((function(){var t=v.map((function(t){return t.count>0&&-1===Object(a.indexOf)(r.split(","),String(t.id))?Object(s.createElement)("li",{className:"smb-categories-list__item",key:t.id},Object(s.createElement)("div",{className:"smb-categories-list__item__count"},t.count,Object(s.createElement)("span",null,Object(l.__)("articles","snow-monkey-blocks"))),Object(s.createElement)("div",{className:"smb-categories-list__item__detail"},Object(s.createElement)("div",{className:"smb-categories-list__item__category-name"},t.name),t.description&&Object(s.createElement)("div",{className:"smb-categories-list__item__category-description"},t.description),Object(s.createElement)("div",{className:"smb-categories-list__item__recent-label"},Object(l.__)("Recent posts","snow-monkey-blocks")),Object(s.createElement)("ul",{className:"smb-categories-list__item__list"},Object(s.createElement)("li",null,Object(l.__)("Only the actual contribution screen is displayed","snow-monkey-blocks"))))):null})).filter((function(t){return t}));return Object(s.createElement)("div",{className:_},Object(s.createElement)("ul",{className:"smb-categories-list__list",ref:d},t.filter((function(t){return t}))))}),null)))},save:function(){return null}};!function(t){if(t){var e=t.metadata,i=t.settings,n=t.name;e&&(e.title&&(e.title=Object(l.__)(e.title,"snow-monkey-blocks"),i.title=e.title),e.description&&(e.description=Object(l.__)(e.description,"snow-monkey-blocks"),i.description=e.description),e.keywords&&(e.keywords=Object(l.__)(e.keywords,"snow-monkey-blocks"),i.keywords=e.keywords),Object(c.unstable__bootstrapServerSideBlockDefinitions)(r()({},n,e))),Object(c.registerBlockType)(n,i)}}(n)}]);