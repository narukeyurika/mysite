!function(e){var t={};function i(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=13)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.i18n},function(e,t,i){var r;!function(){"use strict";var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)){if(r.length){var o=a.apply(null,r);o&&e.push(o)}}else if("object"===n)if(r.toString===Object.prototype.toString)for(var c in r)i.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.lodash},function(e,t){e.exports=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.primitives},function(e){e.exports=JSON.parse('{"apiVersion":2,"name":"snow-monkey-blocks/media-text","title":"Media text","description":"Set media and words side-by-side for a richer layout.","category":"smb","attributes":{"titleTagName":{"type":"string","default":"h2"},"title":{"type":"string","source":"html","selector":".smb-media-text__title","default":""},"mediaId":{"type":"number","default":0},"mediaUrl":{"type":"string","source":"attribute","selector":".smb-media-text__figure img, .smb-media-text__figure video","attribute":"src","default":""},"mediaLink":{"type":"string"},"mediaAlt":{"type":"string","source":"attribute","selector":".smb-media-text__figure img","attribute":"alt","default":""},"mediaWidth":{"type":"string","source":"attribute","selector":".smb-media-text__figure img, .smb-media-text__figure video","attribute":"width","default":""},"mediaHeight":{"type":"string","source":"attribute","selector":".smb-media-text__figure img, .smb-media-text__figure video","attribute":"height","default":""},"mediaSizeSlug":{"type":"string","default":"large"},"mediaType":{"type":"string"},"caption":{"type":"string","source":"html","selector":".smb-media-text__caption","default":""},"mediaPosition":{"type":"string","default":"right"},"verticalAlignment":{"type":"string","default":"center"},"mediaColumnSize":{"type":"string","default":66},"mobileOrder":{"type":"string"},"href":{"type":"string","default":""},"rel":{"type":"string","source":"attribute","selector":".smb-media-text__figure > a","attribute":"rel"},"linkClass":{"type":"string","source":"attribute","selector":".smb-media-text__figure > a","attribute":"class"},"linkDestination":{"type":"string"},"linkTarget":{"type":"string","source":"attribute","selector":".smb-media-text__figure > a","attribute":"target","default":"_self"}},"supports":{"anchor":true}}')},function(e,t){e.exports=window.wp.data},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.richText},function(e,t){function i(){return e.exports=i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,i.apply(this,arguments)}e.exports=i,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,i){"use strict";i.r(t);var r={};i.r(r),i.d(r,"metadata",(function(){return p})),i.d(r,"name",(function(){return A})),i.d(r,"settings",(function(){return M}));var a=i(6),n=i.n(a),o=i(0),c=i(5),l=i(10),s=(i(11),i(2));function m(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function u(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?m(Object(i),!0).forEach((function(t){n()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):m(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var d=function(e){var t="1-3",i="2-3";return 75===parseInt(e)?(t="1-4",i="3-4"):66===parseInt(e)?(t="1-3",i="2-3"):50===parseInt(e)?(t="1-2",i="1-2"):33===parseInt(e)?(t="2-3",i="1-3"):25===parseInt(e)&&(t="3-4",i="1-4"),{textColumnWidth:t,mediaColumnWidth:i,imageColumnWidth:i}},b=function(e){return e.media_type?"image"===e.media_type?"image":"video":e.type},g=function(e,t){return t?Object(c.reduce)(e,(function(e,i){var r=Object(c.get)(t,["sizes",i.slug,"url"]),a=Object(c.get)(t,["media_details","sizes",i.slug,"source_url"]),o=Object(c.get)(t,["sizes",i.slug,"width"]),l=Object(c.get)(t,["media_details","sizes",i.slug,"width"]),s=Object(c.get)(t,["sizes",i.slug,"height"]),m=Object(c.get)(t,["media_details","sizes",i.slug,"height"]);return u(u({},e),{},n()({},i.slug,{url:r||a,width:o||l,height:s||m}))}),{}):{}},p=i(8),f=i(3),_=i.n(f),y=i(9),O=i(4),v=i(1),h=i(7),j=Object(o.createElement)(h.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)(h.Path,{d:"M4 18h6V6H4v12zm9-9.5V10h7V8.5h-7zm0 7h7V14h-7v1.5z"})),w=Object(o.createElement)(h.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)(h.Path,{d:"M14 6v12h6V6h-6zM4 10h7V8.5H4V10zm0 5.5h7V14H4v1.5z"})),x=i(12),k=i.n(x),E=function(e){var t=e.id,i=e.src,r=e.allowedTypes,a=e.accept,n=e.onSelect,c=e.onSelectURL,l=e.onRemove;return Object(o.createElement)(v.BlockControls,null,Object(o.createElement)(v.MediaReplaceFlow,{mediaId:t,mediaURL:i,allowedTypes:r,accept:a,onSelect:n,onSelectURL:c}),!!i&&!!l&&Object(o.createElement)(O.ToolbarGroup,null,Object(o.createElement)(O.ToolbarItem,{as:O.Button,onClick:l},Object(s.__)("Release","snow-monkey-blocks"))))},S=function(e){var t=e.src,i=e.alt,r=e.id,a=e.style;return Object(o.createElement)("img",{src:t,alt:i,className:"wp-image-".concat(r),style:a})},T=function(e){var t=e.src,i=e.style;return Object(o.createElement)("video",{controls:!0,src:t,style:i})},C=Object(o.memo)((function(e){var t,i,r=e.id,a=e.src,n=e.alt,l=e.url,s=e.target,m=e.allowedTypes,u=e.accept,d=e.onSelect,b=e.onSelectURL,g=e.onRemove,p=e.mediaType,f=e.style,_=e.rel,y=e.linkClass;return"image"===p?(t=Object(o.createElement)(S,{src:a,alt:n,id:r,style:f}),i=_?Object(c.isEmpty)(_)?void 0:_:"_self"!==s&&s?"noopener noreferrer":void 0,l&&(t=Object(o.createElement)("span",{href:l,target:"_self"===s?void 0:s,rel:i,className:y},t))):"video"===p&&(t=Object(o.createElement)(T,{src:a,style:f})),Object(o.createElement)(o.Fragment,null,Object(o.createElement)(E,{id:r,src:a,allowedTypes:m,accept:u,onSelect:d,onSelectURL:b,onRemove:g}),t)}),(function(e,t){for(var i=0,r=Object.keys(e);i<r.length;i++){var a=r[i];if(e[a]!==t[a])return!1}return!0})),N=function(e){var t=e.src,i=e.onSelect,r=e.onSelectURL,a=e.mediaType,n=e.allowedTypes,c=void 0===n?["image"]:n,l=!a&&t?"image":a,m=Object(s.__)("Media","snow-monkey-blocks");1===c.length&&("image"===c[0]?m=Object(s.__)("Image","snow-monkey-blocks"):"video"===c[0]&&(m=Object(s.__)("Video","snow-monkey-blocks")));var u=Object(o.useMemo)((function(){return c.map((function(e){return"".concat(e,"/*")})).join(",")}),[c]);return t?Object(o.createElement)(C,k()({},e,{accept:u,mediaType:l})):Object(o.createElement)(v.MediaPlaceholder,{icon:"format-image",labels:{title:m},onSelect:i,onSelectURL:r,accept:u,allowedTypes:c})},z=function(e){var t=e.label,i=e.id,r=e.slug,a=e.onChange;if(!i)return null;var n=Object(y.useSelect)((function(e){var t=(0,e("core").getMedia)(i);if(!t)return{options:[]};var r=(0,e("core/block-editor").getSettings)().imageSizes,a=g(r,t);return{options:r.map((function(e){return!!a[e.slug]&&{value:e.slug,label:e.name}})).filter((function(e){return e}))}})).options;return 1>n.length?null:Object(o.createElement)(O.SelectControl,{label:t,value:r,options:n,onChange:a})},P=["image","video"];function I(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function R(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?I(Object(i),!0).forEach((function(t){n()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):I(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var U=p.attributes,B=[{attributes:R(R({},U),{},{url:{type:"string",default:""},imageMediaType:{type:"string"},imageSizeSlug:{type:"string",default:"large"},imagePosition:{type:"string",default:"right"},imageID:{type:"number",default:0},imageURL:{type:"string",source:"attribute",selector:".smb-media-text__figure img, .smb-media-text__figure video",attribute:"src",default:""},imageAlt:{type:"string",source:"attribute",selector:".smb-media-text__figure img",attribute:"alt",default:""},imageWidth:{type:"string",source:"attribute",selector:".smb-media-text__figure img, .smb-media-text__figure video",attribute:"width",default:""},imageHeight:{type:"string",source:"attribute",selector:".smb-media-text__figure img, .smb-media-text__figure video",attribute:"height",default:""},imageColumnSize:{type:"string",default:66},target:{type:"string",default:"_self"}}),migrate:function(e){return R(R({},e),{},{href:e.url,mediaType:e.imageMediaType,mediaSizeSlug:e.imageSizeSlug,mediaPosition:e.imagePosition,mediaId:e.imageID,mediaUrl:e.imageURL,mediaAlt:e.imageAlt,mediaWidth:e.imageWidth,mediaHeight:e.imageHeight,mediaColumnSize:e.imageColumnSize,linkTarget:e.target})},save:function(e){var t,i=e.attributes,r=e.className,a=i.titleTagName,c=i.title,l=i.imageID,s=i.imageURL,m=i.imageAlt,u=i.imageWidth,b=i.imageHeight,g=i.imageMediaType,p=i.caption,f=i.imagePosition,y=i.verticalAlignment,O=i.imageColumnSize,h=i.mobileOrder,j=i.url,w=i.target,x=d(O),k=x.textColumnWidth,E=x.imageColumnWidth,S=_()("smb-media-text",r,n()({},"smb-media-text--mobile-".concat(h),!!h)),T=_()("c-row","c-row--margin",{"c-row--reverse":"left"===f,"c-row--top":"top"===y,"c-row--middle":"center"===y,"c-row--bottom":"bottom"===y}),C=_()("c-row__col","c-row__col--1-1",["c-row__col--lg-".concat(k)]),N=_()("c-row__col","c-row__col--1-1",["c-row__col--lg-".concat(E)]),z=Object(o.createElement)("img",{src:s,alt:m,width:!!u&&u,height:!!b&&b,className:"wp-image-".concat(l)}),P=Object(o.createElement)("video",{controls:!0,src:s,width:!!u&&u,height:!!b&&b});return s&&("image"===g||void 0===g?t=j?Object(o.createElement)("a",{href:j,target:"_self"===w?void 0:w,rel:"_self"===w?void 0:"noopener noreferrer"},z):z:"video"===g&&(t=P)),Object(o.createElement)("div",v.useBlockProps.save({className:S}),Object(o.createElement)("div",{className:T},Object(o.createElement)("div",{className:C},!v.RichText.isEmpty(c)&&"none"!==a&&Object(o.createElement)(v.RichText.Content,{className:"smb-media-text__title",tagName:a,value:c}),Object(o.createElement)("div",{className:"smb-media-text__body"},Object(o.createElement)(v.InnerBlocks.Content,null))),Object(o.createElement)("div",{className:N},Object(o.createElement)("div",{className:"smb-media-text__figure"},t),!v.RichText.isEmpty(p)&&Object(o.createElement)("div",{className:"smb-media-text__caption"},Object(o.createElement)(v.RichText.Content,{value:p})))))}},{attributes:R(R({},U),{},{url:{type:"string",default:""},imageMediaType:{type:"string"},imageSizeSlug:{type:"string",default:"large"},imagePosition:{type:"string",default:"right"},imageID:{type:"number",default:0},imageURL:{type:"string",source:"attribute",selector:".smb-media-text__figure img, .smb-media-text__figure video",attribute:"src",default:""},imageAlt:{type:"string",source:"attribute",selector:".smb-media-text__figure img",attribute:"alt",default:""},imageWidth:{type:"string",source:"attribute",selector:".smb-media-text__figure img, .smb-media-text__figure video",attribute:"width",default:""},imageHeight:{type:"string",source:"attribute",selector:".smb-media-text__figure img, .smb-media-text__figure video",attribute:"height",default:""},imageColumnSize:{type:"string",default:66},target:{type:"string",default:"_self"}}),save:function(e){var t=e.attributes,i=t.title,r=t.imageID,a=t.imageURL,n=t.imagePosition,c=t.imageColumnSize,l=d(c),s=l.textColumnWidth,m=l.imageColumnWidth;return Object(o.createElement)("div",{className:"smb-media-text"},Object(o.createElement)("div",{className:_()("c-row","c-row--margin","c-row--middle",{"c-row--reverse":"left"===n})},Object(o.createElement)("div",{className:"c-row__col c-row__col--1-1 c-row__col--lg-".concat(s)},!v.RichText.isEmpty(i)&&Object(o.createElement)("h2",{className:"smb-media-text__title"},Object(o.createElement)(v.RichText.Content,{value:i})),Object(o.createElement)("div",{className:"smb-media-text__body"},Object(o.createElement)(v.InnerBlocks.Content,null))),Object(o.createElement)("div",{className:"c-row__col c-row__col--1-1 c-row__col--lg-".concat(m)},Object(o.createElement)("div",{className:"smb-media-text__figure"},a&&Object(o.createElement)("img",{src:a,alt:"",className:"wp-image-".concat(r)})))))}},{attributes:R(R({},U),{},{url:{type:"string",default:""},imageMediaType:{type:"string"},imageSizeSlug:{type:"string",default:"large"},imagePosition:{type:"string",default:"right"},imageID:{type:"number",default:0},imageURL:{type:"string",source:"attribute",selector:".smb-media-text__figure img, .smb-media-text__figure video",attribute:"src",default:""},imageAlt:{type:"string",source:"attribute",selector:".smb-media-text__figure img",attribute:"alt",default:""},imageWidth:{type:"string",source:"attribute",selector:".smb-media-text__figure img, .smb-media-text__figure video",attribute:"width",default:""},imageHeight:{type:"string",source:"attribute",selector:".smb-media-text__figure img, .smb-media-text__figure video",attribute:"height",default:""},imageColumnSize:{type:"string",default:66},target:{type:"string",default:"_self"}}),save:function(e){var t=e.attributes,i=t.title,r=t.imageURL,a=t.imagePosition,n=t.imageColumnSize,c=d(n),l=c.textColumnWidth,s=c.imageColumnWidth;return Object(o.createElement)("div",{className:"smb-media-text"},Object(o.createElement)("div",{className:_()("c-row","c-row--margin","c-row--middle",{"c-row--reverse":"left"===a})},Object(o.createElement)("div",{className:"c-row__col c-row__col--1-1 c-row__col--lg-".concat(l)},!v.RichText.isEmpty(i)&&Object(o.createElement)("h2",{className:"smb-media-text__title"},Object(o.createElement)(v.RichText.Content,{value:i})),Object(o.createElement)("div",{className:"smb-media-text__body"},Object(o.createElement)(v.InnerBlocks.Content,null))),Object(o.createElement)("div",{className:"c-row__col c-row__col--1-1 c-row__col--lg-".concat(s)},Object(o.createElement)("div",{className:"smb-media-text__figure"},r&&Object(o.createElement)("img",{src:r,alt:""})))))}}],W={attributes:{imageID:1,imageURL:"".concat(smb.pluginUrl,"/dist/img/photos/sunset-over-lake-1.jpg")},innerBlocks:[{name:"core/paragraph",attributes:{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}}]},A=p.name,M={icon:{foreground:"#cd162c",src:"align-left"},edit:function(e){var t=e.attributes,i=e.setAttributes,r=e.isSelected,a=e.className,l=e.clientId,m=t.titleTagName,u=t.title,p=t.mediaId,f=t.mediaUrl,h=t.mediaAlt,x=t.mediaWidth,k=t.mediaHeight,E=t.mediaSizeSlug,S=t.caption,T=t.mediaPosition,C=t.verticalAlignment,I=t.mediaColumnSize,R=t.mobileOrder,U=t.href,B=t.linkTarget,W=t.rel,A=t.linkClass,M=t.linkDestination,L=t.mediaType,D=Object(y.useSelect)((function(e){if(!p)return{resizedImages:{}};var t=(0,e("core").getMedia)(p);if(!t)return{resizedImages:{}};var i=(0,e("core/block-editor").getSettings)().imageSizes;return{image:t,resizedImages:g(i,t)}}),[r,p]),H=D.resizedImages,V=D.image,G=Object(y.useSelect)((function(e){var t=(0,e("core/block-editor").getBlock)(l);return!(!t||!t.innerBlocks.length)}),[l]),F=["h1","h2","h3","none"],q=d(I),J=q.textColumnWidth,K=q.mediaColumnWidth,Q=_()("smb-media-text",a,n()({},"smb-media-text--mobile-".concat(R),!!R)),X=_()("c-row","c-row--margin",{"c-row--reverse":"left"===T,"c-row--top":"top"===C,"c-row--middle":"center"===C,"c-row--bottom":"bottom"===C}),Y=_()("c-row__col","c-row__col--1-1",["c-row__col--lg-".concat(J)]),Z=_()("c-row__col","c-row__col--1-1",["c-row__col--lg-".concat(K)]),$=Object(v.useBlockProps)({className:Q}),ee=Object(v.__experimentalUseInnerBlocksProps)({className:"smb-media-text__body"},{renderAppender:G?void 0:v.InnerBlocks.ButtonBlockAppender});return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(v.InspectorControls,null,Object(o.createElement)(O.PanelBody,{title:Object(s.__)("Block Settings","snow-monkey-blocks")},Object(o.createElement)(O.SelectControl,{label:Object(s.__)("Image Column Size","snow-monkey-blocks"),value:I,options:[{value:66,label:Object(s.__)("66%","snow-monkey-blocks")},{value:50,label:Object(s.__)("50%","snow-monkey-blocks")},{value:33,label:Object(s.__)("33%","snow-monkey-blocks")},{value:25,label:Object(s.__)("25%","snow-monkey-blocks")}],onChange:function(e){return i({mediaColumnSize:e})}}),Object(o.createElement)(z,{label:Object(s.__)("Images size","snow-monkey-blocks"),id:p,slug:E,onChange:function(e){var t=f;H[e]&&H[e].url&&(t=H[e].url);var r=x;H[e]&&H[e].width&&(r=H[e].width);var a=k;H[e]&&H[e].height&&(a=H[e].height),i({mediaUrl:t,mediaWidth:r,mediaHeight:a,mediaSizeSlug:e})}}),Object(o.createElement)(O.SelectControl,{label:Object(s.__)("Sort by mobile","snow-monkey-blocks"),value:R,options:[{value:"",label:Object(s.__)("Default","snow-monkey-blocks")},{value:"text",label:Object(s.__)("Text > Image","snow-monkey-blocks")},{value:"image",label:Object(s.__)("Image > Text","snow-monkey-blocks")}],onChange:function(e){return i({mobileOrder:""===e?void 0:e})}}),Object(o.createElement)(O.BaseControl,{label:Object(s.__)("Title Tag","snow-monkey-blocks"),id:"snow-monkey-blocks/media-text/title-tag-name"},Object(o.createElement)("div",{className:"smb-list-icon-selector"},Object(c.times)(F.length,(function(e){var t=m===F[e];return Object(o.createElement)(O.Button,{isPrimary:t,isSecondary:!t,onClick:function(){return i({titleTagName:F[e]})},key:e},F[e])})))))),Object(o.createElement)(v.BlockControls,null,Object(o.createElement)(v.BlockVerticalAlignmentToolbar,{onChange:function(e){return i({verticalAlignment:e})},value:C}),Object(o.createElement)(O.ToolbarGroup,null,Object(o.createElement)(O.ToolbarButton,{icon:j,title:Object(s.__)("Show media on left","snow-monkey-blocks"),isActive:"left"===T,onClick:function(){return i({mediaPosition:"left"})}}),Object(o.createElement)(O.ToolbarButton,{icon:w,title:Object(s.__)("Show media on right","snow-monkey-blocks"),isActive:"right"===T,onClick:function(){return i({mediaPosition:"right"})}})),f&&("image"===L||void 0===L)&&Object(o.createElement)(O.ToolbarGroup,null,Object(o.createElement)(v.__experimentalImageURLInputUI,{url:U||"",onChangeUrl:function(e){i(e)},linkDestination:M,mediaType:L,mediaUrl:f,mediaLink:V&&V.link,linkTarget:B,linkClass:A,rel:W}))),Object(o.createElement)("div",$,Object(o.createElement)("div",{className:X},Object(o.createElement)("div",{className:Y},(!v.RichText.isEmpty(u)||r)&&"none"!==m&&Object(o.createElement)(v.RichText,{className:"smb-media-text__title",tagName:m,value:u,onChange:function(e){return i({title:e})},placeholder:Object(s.__)("Write title…","snow-monkey-blocks")}),Object(o.createElement)("div",ee)),Object(o.createElement)("div",{className:Z},Object(o.createElement)("div",{className:"smb-media-text__figure"},Object(o.createElement)(N,{src:f,id:p,alt:h,url:U,target:B,onSelect:function(e){var t=e.sizes&&e.sizes[E]?e.sizes[E].url:e.url,r=e.sizes&&e.sizes[E]?e.sizes[E].width:e.width,a=e.sizes&&e.sizes[E]?e.sizes[E].height:e.height,n=U;"media"===M&&(n=e.url),"attachment"===M&&(n=e.link),i({mediaType:b(e),mediaLink:e.link||void 0,mediaId:e.id,mediaUrl:t,mediaAlt:e.alt,mediaWidth:r,mediaHeight:a,href:n})},onSelectURL:function(e){e!==f&&i({mediaUrl:e,mediaId:0,mediaSizeSlug:"large"})},onRemove:function(){i({mediaUrl:"",mediaAlt:"",mediaWidth:"",mediaHeight:"",mediaId:0,mediaType:void 0})},mediaType:L,allowedTypes:P,linkClass:A,rel:W})),(!v.RichText.isEmpty(S)||r)&&Object(o.createElement)(v.RichText,{className:"smb-media-text__caption",placeholder:Object(s.__)("Write caption…","snow-monkey-blocks"),value:S,onChange:function(e){return i({caption:e})}})))))},save:function(e){var t,i=e.attributes,r=e.className,a=i.titleTagName,l=i.title,s=i.mediaId,m=i.mediaUrl,u=i.mediaAlt,b=i.mediaWidth,g=i.mediaHeight,p=i.mediaType,f=i.caption,y=i.mediaPosition,O=i.verticalAlignment,h=i.mediaColumnSize,j=i.mobileOrder,w=i.href,x=i.rel,k=i.linkClass,E=i.linkTarget,S=Object(c.isEmpty)(x)?void 0:x,T=d(h),C=T.textColumnWidth,N=T.mediaColumnWidth,z=_()("smb-media-text",r,n()({},"smb-media-text--mobile-".concat(j),!!j)),P=_()("c-row","c-row--margin",{"c-row--reverse":"left"===y,"c-row--top":"top"===O,"c-row--middle":"center"===O,"c-row--bottom":"bottom"===O}),I=_()("c-row__col","c-row__col--1-1",["c-row__col--lg-".concat(C)]),R=_()("c-row__col","c-row__col--1-1",["c-row__col--lg-".concat(N)]),U=Object(o.createElement)("img",{src:m,alt:u,width:!!b&&b,height:!!g&&g,className:"wp-image-".concat(s)}),B=Object(o.createElement)("video",{controls:!0,src:m,width:!!b&&b,height:!!g&&g});return m&&("image"===p||void 0===p?t=w?Object(o.createElement)("a",{href:w,target:E,className:k,rel:S},U):U:"video"===p&&(t=B)),Object(o.createElement)("div",v.useBlockProps.save({className:z}),Object(o.createElement)("div",{className:P},Object(o.createElement)("div",{className:I},!v.RichText.isEmpty(l)&&"none"!==a&&Object(o.createElement)(v.RichText.Content,{className:"smb-media-text__title",tagName:a,value:l}),Object(o.createElement)("div",{className:"smb-media-text__body"},Object(o.createElement)(v.InnerBlocks.Content,null))),Object(o.createElement)("div",{className:R},Object(o.createElement)("div",{className:"smb-media-text__figure"},t),!v.RichText.isEmpty(f)&&Object(o.createElement)("div",{className:"smb-media-text__caption"},Object(o.createElement)(v.RichText.Content,{value:f})))))},deprecated:B,example:W};!function(e){if(e){var t=e.metadata,i=e.settings,r=e.name;t&&(t.title&&(t.title=Object(s.__)(t.title,"snow-monkey-blocks"),i.title=t.title),t.description&&(t.description=Object(s.__)(t.description,"snow-monkey-blocks"),i.description=t.description),t.keywords&&(t.keywords=Object(s.__)(t.keywords,"snow-monkey-blocks"),i.keywords=t.keywords),Object(l.unstable__bootstrapServerSideBlockDefinitions)(n()({},r,t))),Object(l.registerBlockType)(r,i)}}(r)}]);