"use strict";exports.id=596,exports.ids=[596],exports.modules={5593:(e,r,l)=>{l.d(r,{Z:()=>a});var t=l(9885);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=(...e)=>e.filter((e,r,l)=>!!e&&l.indexOf(e)===r).join(" ");/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,t.forwardRef)(({color:e="currentColor",size:r=24,strokeWidth:l=2,absoluteStrokeWidth:n,className:i="",children:a,iconNode:u,...d},c)=>(0,t.createElement)("svg",{ref:c,...o,width:r,height:r,stroke:e,strokeWidth:n?24*Number(l)/Number(r):l,className:s("lucide",i),...d},[...u.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(a)?a:[a]])),a=(e,r)=>{let l=(0,t.forwardRef)(({className:l,...o},a)=>(0,t.createElement)(i,{ref:a,iconNode:r,className:s(`lucide-${n(e)}`,l),...o}));return l.displayName=`${e}`,l}},1971:(e,r,l)=>{l.d(r,{j:()=>o});var t=l(566);let n=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,s=t.W,o=(e,r)=>l=>{var t;if((null==r?void 0:r.variants)==null)return s(e,null==l?void 0:l.class,null==l?void 0:l.className);let{variants:o,defaultVariants:i}=r,a=Object.keys(o).map(e=>{let r=null==l?void 0:l[e],t=null==i?void 0:i[e];if(null===r)return null;let s=n(r)||n(t);return o[e][s]}),u=l&&Object.entries(l).reduce((e,r)=>{let[l,t]=r;return void 0===t||(e[l]=t),e},{}),d=null==r?void 0:null===(t=r.compoundVariants)||void 0===t?void 0:t.reduce((e,r)=>{let{class:l,className:t,...n}=r;return Object.entries(n).every(e=>{let[r,l]=e;return Array.isArray(l)?l.includes({...i,...u}[r]):({...i,...u})[r]===l})?[...e,l,t]:e},[]);return s(e,a,d,null==l?void 0:l.class,null==l?void 0:l.className)}}};