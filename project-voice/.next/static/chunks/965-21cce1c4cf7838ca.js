(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[965],{4709:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return w}});let i=r(7677),o=r(544),n=r(4848),s=o._(r(6540)),l=i._(r(961)),u=i._(r(3248)),a=r(3297),d=r(3436),f=r(2454);r(4636);let c=r(4671),g=i._(r(701)),p=r(4293),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,r,i,o,n,s){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function v(e){return s.use?{fetchPriority:e}:{fetchpriority:e}}let b=(0,s.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:o,height:l,width:u,decoding:a,className:d,style:f,fetchPriority:c,placeholder:g,loading:m,unoptimized:b,fill:y,onLoadRef:w,onLoadingCompleteRef:_,setBlurComplete:j,setShowAltText:S,sizesInput:x,onLoad:C,onError:z,...P}=e,E=(0,s.useCallback)(e=>{e&&(z&&(e.src=e.src),e.complete&&h(e,g,w,_,j,b,x))},[r,g,w,_,j,z,b,x]),O=(0,p.useMergedRef)(t,E);return(0,n.jsx)("img",{...P,...v(c),loading:m,width:u,height:l,decoding:a,"data-nimg":y?"fill":"1",className:d,style:f,sizes:o,srcSet:i,src:r,ref:O,onLoad:e=>{h(e.currentTarget,g,w,_,j,b,x)},onError:e=>{S(!0),"empty"!==g&&j(!0),z&&z(e)}})});function y(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...v(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,i),null):(0,n.jsx)(u.default,{children:(0,n.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let w=(0,s.forwardRef)((e,t)=>{let r=(0,s.useContext)(c.RouterContext),i=(0,s.useContext)(f.ImageConfigContext),o=(0,s.useMemo)(()=>{let e=m||i||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:l,onLoadingComplete:u}=e,p=(0,s.useRef)(l);(0,s.useEffect)(()=>{p.current=l},[l]);let h=(0,s.useRef)(u);(0,s.useEffect)(()=>{h.current=u},[u]);let[v,w]=(0,s.useState)(!1),[_,j]=(0,s.useState)(!1),{props:S,meta:x}=(0,a.getImgProps)(e,{defaultLoader:g.default,imgConf:o,blurComplete:v,showAltText:_});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{...S,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:p,onLoadingCompleteRef:h,setBlurComplete:w,setShowAltText:j,sizesInput:e.sizes,ref:t}),x.priority?(0,n.jsx)(y,{isAppRouter:!r,imgAttributes:S}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4293:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let i=r(6540);function o(e,t){let r=(0,i.useRef)(()=>{}),o=(0,i.useRef)(()=>{});return(0,i.useMemo)(()=>e&&t?i=>{null===i?(r.current(),o.current()):(r.current=n(e,i),o.current=n(t,i))}:e||t,[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3297:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(4636);let i=r(7688),o=r(3436);function n(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,u,a,{src:d,sizes:f,unoptimized:c=!1,priority:g=!1,loading:p,className:m,quality:h,width:v,height:b,fill:y=!1,style:w,overrideSrc:_,onLoad:j,onLoadingComplete:S,placeholder:x="empty",blurDataURL:C,fetchPriority:z,decoding:P="async",layout:E,objectFit:O,objectPosition:M,lazyBoundary:R,lazyRoot:I,...k}=e,{imgConf:N,showAltText:A,blurComplete:D,defaultLoader:B}=t,F=N||o.imageConfigDefault;if("allSizes"in F)l=F;else{let e=[...F.deviceSizes,...F.imageSizes].sort((e,t)=>e-t),t=F.deviceSizes.sort((e,t)=>e-t);l={...F,allSizes:e,deviceSizes:t}}if(void 0===B)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let G=k.loader||B;delete k.loader,delete k.srcSet;let L="__next_img_default"in G;if(L){if("custom"===l.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=G;G=t=>{let{config:r,...i}=t;return e(i)}}if(E){"fill"===E&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!f&&(f=t)}let W="",T=s(v),U=s(b);if((r=d)&&"object"==typeof r&&(n(r)||void 0!==r.src)){let e=n(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(u=e.blurWidth,a=e.blurHeight,C=C||e.blurDataURL,W=e.src,!y){if(T||U){if(T&&!U){let t=T/e.width;U=Math.round(e.height*t)}else if(!T&&U){let t=U/e.height;T=Math.round(e.width*t)}}else T=e.width,U=e.height}}let V=!g&&("lazy"===p||void 0===p);(!(d="string"==typeof d?d:W)||d.startsWith("data:")||d.startsWith("blob:"))&&(c=!0,V=!1),l.unoptimized&&(c=!0),L&&d.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(c=!0);let q=s(h),J=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:M}:{},A?{}:{color:"transparent"},w),Y=D||"empty"===x?null:"blur"===x?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:T,heightInt:U,blurWidth:u,blurHeight:a,blurDataURL:C||"",objectFit:J.objectFit})+'")':'url("'+x+'")',H=Y?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},$=function(e){let{config:t,src:r,unoptimized:i,width:o,quality:n,sizes:s,loader:l}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:a}=function(e,t,r){let{deviceSizes:i,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,s),d=u.length-1;return{sizes:s||"w"!==a?s:"100vw",srcSet:u.map((e,i)=>l({config:t,src:r,quality:n,width:e})+" "+("w"===a?e:i+1)+a).join(", "),src:l({config:t,src:r,quality:n,width:u[d]})}}({config:l,src:d,unoptimized:c,width:T,quality:q,sizes:f,loader:G});return{props:{...k,loading:V?"lazy":p,fetchPriority:z,width:T,height:U,decoding:P,className:m,style:{...J,...H},sizes:$.sizes,srcSet:$.srcSet,src:_||$.src},meta:{unoptimized:c,priority:g,placeholder:x,fill:y}}}},7688:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:o,blurDataURL:n,objectFit:s}=e,l=i?40*i:t,u=o?40*o:r,a=l&&u?"viewBox='0 0 "+l+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+a+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(a?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},1709:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return u},getImageProps:function(){return l}});let i=r(7677),o=r(3297),n=r(4709),s=i._(r(701));function l(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let u=n.Image},701:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:i,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},9965:(e,t,r)=>{e.exports=r(1709)}}]);