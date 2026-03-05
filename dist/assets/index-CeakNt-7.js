(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function oy(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Vh={exports:{}},fa={},Oh={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function I0(){if(Sm)return Ce;Sm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),k=Symbol.iterator;function D(V){return V===null||typeof V!="object"?null:(V=k&&V[k]||V["@@iterator"],typeof V=="function"?V:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,J={};function $(V,q,oe){this.props=V,this.context=q,this.refs=J,this.updater=oe||B}$.prototype.isReactComponent={},$.prototype.setState=function(V,q){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,q,"setState")},$.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function we(){}we.prototype=$.prototype;function ye(V,q,oe){this.props=V,this.context=q,this.refs=J,this.updater=oe||B}var Ie=ye.prototype=new we;Ie.constructor=ye,Y(Ie,$.prototype),Ie.isPureReactComponent=!0;var Re=Array.isArray,Be=Object.prototype.hasOwnProperty,ke={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function I(V,q,oe){var z,te={},ae=null,_e=null;if(q!=null)for(z in q.ref!==void 0&&(_e=q.ref),q.key!==void 0&&(ae=""+q.key),q)Be.call(q,z)&&!x.hasOwnProperty(z)&&(te[z]=q[z]);var pe=arguments.length-2;if(pe===1)te.children=oe;else if(1<pe){for(var je=Array(pe),ot=0;ot<pe;ot++)je[ot]=arguments[ot+2];te.children=je}if(V&&V.defaultProps)for(z in pe=V.defaultProps,pe)te[z]===void 0&&(te[z]=pe[z]);return{$$typeof:i,type:V,key:ae,ref:_e,props:te,_owner:ke.current}}function A(V,q){return{$$typeof:i,type:V.type,key:q,ref:V.ref,props:V.props,_owner:V._owner}}function C(V){return typeof V=="object"&&V!==null&&V.$$typeof===i}function N(V){var q={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(oe){return q[oe]})}var O=/\/+/g;function S(V,q){return typeof V=="object"&&V!==null&&V.key!=null?N(""+V.key):q.toString(36)}function Xe(V,q,oe,z,te){var ae=typeof V;(ae==="undefined"||ae==="boolean")&&(V=null);var _e=!1;if(V===null)_e=!0;else switch(ae){case"string":case"number":_e=!0;break;case"object":switch(V.$$typeof){case i:case e:_e=!0}}if(_e)return _e=V,te=te(_e),V=z===""?"."+S(_e,0):z,Re(te)?(oe="",V!=null&&(oe=V.replace(O,"$&/")+"/"),Xe(te,q,oe,"",function(ot){return ot})):te!=null&&(C(te)&&(te=A(te,oe+(!te.key||_e&&_e.key===te.key?"":(""+te.key).replace(O,"$&/")+"/")+V)),q.push(te)),1;if(_e=0,z=z===""?".":z+":",Re(V))for(var pe=0;pe<V.length;pe++){ae=V[pe];var je=z+S(ae,pe);_e+=Xe(ae,q,oe,je,te)}else if(je=D(V),typeof je=="function")for(V=je.call(V),pe=0;!(ae=V.next()).done;)ae=ae.value,je=z+S(ae,pe++),_e+=Xe(ae,q,oe,je,te);else if(ae==="object")throw q=String(V),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return _e}function _t(V,q,oe){if(V==null)return V;var z=[],te=0;return Xe(V,z,"","",function(ae){return q.call(oe,ae,te++)}),z}function ht(V){if(V._status===-1){var q=V._result;q=q(),q.then(function(oe){(V._status===0||V._status===-1)&&(V._status=1,V._result=oe)},function(oe){(V._status===0||V._status===-1)&&(V._status=2,V._result=oe)}),V._status===-1&&(V._status=0,V._result=q)}if(V._status===1)return V._result.default;throw V._result}var De={current:null},ee={transition:null},de={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:ee,ReactCurrentOwner:ke};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:_t,forEach:function(V,q,oe){_t(V,function(){q.apply(this,arguments)},oe)},count:function(V){var q=0;return _t(V,function(){q++}),q},toArray:function(V){return _t(V,function(q){return q})||[]},only:function(V){if(!C(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ce.Component=$,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=ye,Ce.StrictMode=s,Ce.Suspense=g,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,Ce.act=ne,Ce.cloneElement=function(V,q,oe){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var z=Y({},V.props),te=V.key,ae=V.ref,_e=V._owner;if(q!=null){if(q.ref!==void 0&&(ae=q.ref,_e=ke.current),q.key!==void 0&&(te=""+q.key),V.type&&V.type.defaultProps)var pe=V.type.defaultProps;for(je in q)Be.call(q,je)&&!x.hasOwnProperty(je)&&(z[je]=q[je]===void 0&&pe!==void 0?pe[je]:q[je])}var je=arguments.length-2;if(je===1)z.children=oe;else if(1<je){pe=Array(je);for(var ot=0;ot<je;ot++)pe[ot]=arguments[ot+2];z.children=pe}return{$$typeof:i,type:V.type,key:te,ref:ae,props:z,_owner:_e}},Ce.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},Ce.createElement=I,Ce.createFactory=function(V){var q=I.bind(null,V);return q.type=V,q},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(V){return{$$typeof:m,render:V}},Ce.isValidElement=C,Ce.lazy=function(V){return{$$typeof:E,_payload:{_status:-1,_result:V},_init:ht}},Ce.memo=function(V,q){return{$$typeof:v,type:V,compare:q===void 0?null:q}},Ce.startTransition=function(V){var q=ee.transition;ee.transition={};try{V()}finally{ee.transition=q}},Ce.unstable_act=ne,Ce.useCallback=function(V,q){return De.current.useCallback(V,q)},Ce.useContext=function(V){return De.current.useContext(V)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(V){return De.current.useDeferredValue(V)},Ce.useEffect=function(V,q){return De.current.useEffect(V,q)},Ce.useId=function(){return De.current.useId()},Ce.useImperativeHandle=function(V,q,oe){return De.current.useImperativeHandle(V,q,oe)},Ce.useInsertionEffect=function(V,q){return De.current.useInsertionEffect(V,q)},Ce.useLayoutEffect=function(V,q){return De.current.useLayoutEffect(V,q)},Ce.useMemo=function(V,q){return De.current.useMemo(V,q)},Ce.useReducer=function(V,q,oe){return De.current.useReducer(V,q,oe)},Ce.useRef=function(V){return De.current.useRef(V)},Ce.useState=function(V){return De.current.useState(V)},Ce.useSyncExternalStore=function(V,q,oe){return De.current.useSyncExternalStore(V,q,oe)},Ce.useTransition=function(){return De.current.useTransition()},Ce.version="18.3.1",Ce}var Am;function Ed(){return Am||(Am=1,Oh.exports=I0()),Oh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function S0(){if(Rm)return fa;Rm=1;var i=Ed(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,v){var E,k={},D=null,B=null;v!==void 0&&(D=""+v),g.key!==void 0&&(D=""+g.key),g.ref!==void 0&&(B=g.ref);for(E in g)s.call(g,E)&&!u.hasOwnProperty(E)&&(k[E]=g[E]);if(m&&m.defaultProps)for(E in g=m.defaultProps,g)k[E]===void 0&&(k[E]=g[E]);return{$$typeof:e,type:m,key:D,ref:B,props:k,_owner:o.current}}return fa.Fragment=t,fa.jsx=h,fa.jsxs=h,fa}var km;function A0(){return km||(km=1,Vh.exports=S0()),Vh.exports}var L=A0(),ze=Ed();const R0=oy(ze);var du={},Lh={exports:{}},Xt={},bh={exports:{}},Mh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function k0(){return Cm||(Cm=1,(function(i){function e(ee,de){var ne=ee.length;ee.push(de);e:for(;0<ne;){var V=ne-1>>>1,q=ee[V];if(0<o(q,de))ee[V]=de,ee[ne]=q,ne=V;else break e}}function t(ee){return ee.length===0?null:ee[0]}function s(ee){if(ee.length===0)return null;var de=ee[0],ne=ee.pop();if(ne!==de){ee[0]=ne;e:for(var V=0,q=ee.length,oe=q>>>1;V<oe;){var z=2*(V+1)-1,te=ee[z],ae=z+1,_e=ee[ae];if(0>o(te,ne))ae<q&&0>o(_e,te)?(ee[V]=_e,ee[ae]=ne,V=ae):(ee[V]=te,ee[z]=ne,V=z);else if(ae<q&&0>o(_e,ne))ee[V]=_e,ee[ae]=ne,V=ae;else break e}}return de}function o(ee,de){var ne=ee.sortIndex-de.sortIndex;return ne!==0?ne:ee.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var g=[],v=[],E=1,k=null,D=3,B=!1,Y=!1,J=!1,$=typeof setTimeout=="function"?setTimeout:null,we=typeof clearTimeout=="function"?clearTimeout:null,ye=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ie(ee){for(var de=t(v);de!==null;){if(de.callback===null)s(v);else if(de.startTime<=ee)s(v),de.sortIndex=de.expirationTime,e(g,de);else break;de=t(v)}}function Re(ee){if(J=!1,Ie(ee),!Y)if(t(g)!==null)Y=!0,ht(Be);else{var de=t(v);de!==null&&De(Re,de.startTime-ee)}}function Be(ee,de){Y=!1,J&&(J=!1,we(I),I=-1),B=!0;var ne=D;try{for(Ie(de),k=t(g);k!==null&&(!(k.expirationTime>de)||ee&&!N());){var V=k.callback;if(typeof V=="function"){k.callback=null,D=k.priorityLevel;var q=V(k.expirationTime<=de);de=i.unstable_now(),typeof q=="function"?k.callback=q:k===t(g)&&s(g),Ie(de)}else s(g);k=t(g)}if(k!==null)var oe=!0;else{var z=t(v);z!==null&&De(Re,z.startTime-de),oe=!1}return oe}finally{k=null,D=ne,B=!1}}var ke=!1,x=null,I=-1,A=5,C=-1;function N(){return!(i.unstable_now()-C<A)}function O(){if(x!==null){var ee=i.unstable_now();C=ee;var de=!0;try{de=x(!0,ee)}finally{de?S():(ke=!1,x=null)}}else ke=!1}var S;if(typeof ye=="function")S=function(){ye(O)};else if(typeof MessageChannel<"u"){var Xe=new MessageChannel,_t=Xe.port2;Xe.port1.onmessage=O,S=function(){_t.postMessage(null)}}else S=function(){$(O,0)};function ht(ee){x=ee,ke||(ke=!0,S())}function De(ee,de){I=$(function(){ee(i.unstable_now())},de)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(ee){ee.callback=null},i.unstable_continueExecution=function(){Y||B||(Y=!0,ht(Be))},i.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<ee?Math.floor(1e3/ee):5},i.unstable_getCurrentPriorityLevel=function(){return D},i.unstable_getFirstCallbackNode=function(){return t(g)},i.unstable_next=function(ee){switch(D){case 1:case 2:case 3:var de=3;break;default:de=D}var ne=D;D=de;try{return ee()}finally{D=ne}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(ee,de){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var ne=D;D=ee;try{return de()}finally{D=ne}},i.unstable_scheduleCallback=function(ee,de,ne){var V=i.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?V+ne:V):ne=V,ee){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=ne+q,ee={id:E++,callback:de,priorityLevel:ee,startTime:ne,expirationTime:q,sortIndex:-1},ne>V?(ee.sortIndex=ne,e(v,ee),t(g)===null&&ee===t(v)&&(J?(we(I),I=-1):J=!0,De(Re,ne-V))):(ee.sortIndex=q,e(g,ee),Y||B||(Y=!0,ht(Be))),ee},i.unstable_shouldYield=N,i.unstable_wrapCallback=function(ee){var de=D;return function(){var ne=D;D=de;try{return ee.apply(this,arguments)}finally{D=ne}}}})(Mh)),Mh}var Pm;function C0(){return Pm||(Pm=1,bh.exports=k0()),bh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function P0(){if(xm)return Xt;xm=1;var i=Ed(),e=C0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},k={};function D(n){return g.call(k,n)?!0:g.call(E,n)?!1:v.test(n)?k[n]=!0:(E[n]=!0,!1)}function B(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Y(n,r,a,c){if(r===null||typeof r>"u"||B(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function J(n,r,a,c,d,p,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=_}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){$[n]=new J(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];$[r]=new J(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){$[n]=new J(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){$[n]=new J(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){$[n]=new J(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){$[n]=new J(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){$[n]=new J(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){$[n]=new J(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){$[n]=new J(n,5,!1,n.toLowerCase(),null,!1,!1)});var we=/[\-:]([a-z])/g;function ye(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(we,ye);$[r]=new J(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(we,ye);$[r]=new J(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(we,ye);$[r]=new J(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){$[n]=new J(n,1,!1,n.toLowerCase(),null,!1,!1)}),$.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){$[n]=new J(n,1,!1,n.toLowerCase(),null,!0,!0)});function Ie(n,r,a,c){var d=$.hasOwnProperty(r)?$[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Y(r,a,d,c)&&(a=null),c||d===null?D(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Re=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Be=Symbol.for("react.element"),ke=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),Xe=Symbol.for("react.suspense_list"),_t=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),De=Symbol.for("react.offscreen"),ee=Symbol.iterator;function de(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,V;function q(n){if(V===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);V=r&&r[1]||""}return`
`+V+n}var oe=!1;function z(n,r){if(!n||oe)return"";oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(U){var c=U}Reflect.construct(n,[],r)}else{try{r.call()}catch(U){c=U}n.call(r.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,T=p.length-1;1<=_&&0<=T&&d[_]!==p[T];)T--;for(;1<=_&&0<=T;_--,T--)if(d[_]!==p[T]){if(_!==1||T!==1)do if(_--,T--,0>T||d[_]!==p[T]){var R=`
`+d[_].replace(" at new "," at ");return n.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",n.displayName)),R}while(1<=_&&0<=T);break}}}finally{oe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?q(n):""}function te(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=z(n.type,!1),n;case 11:return n=z(n.type.render,!1),n;case 1:return n=z(n.type,!0),n;default:return""}}function ae(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case x:return"Fragment";case ke:return"Portal";case A:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case Xe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case O:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case _t:return r=n.displayName||null,r!==null?r:ae(n.type)||"Memo";case ht:r=n._payload,n=n._init;try{return ae(n(r))}catch{}}return null}function _e(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function je(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ot(n){var r=je(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function er(n){n._valueTracker||(n._valueTracker=ot(n))}function ns(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=je(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function kr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function pi(n,r){var a=r.checked;return ne({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function rs(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=pe(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function vo(n,r){r=r.checked,r!=null&&Ie(n,"checked",r,!1)}function wo(n,r){vo(n,r);var a=pe(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?is(n,r.type,a):r.hasOwnProperty("defaultValue")&&is(n,r.type,pe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Xa(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function is(n,r,a){(r!=="number"||kr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var tr=Array.isArray;function nr(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+pe(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Eo(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ss(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(tr(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:pe(a)}}function os(n,r){var a=pe(r.value),c=pe(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function To(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function dt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ft(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?dt(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var rr,Io=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(rr=rr||document.createElement("div"),rr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=rr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Cr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var mi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gi=["Webkit","ms","Moz","O"];Object.keys(mi).forEach(function(n){gi.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),mi[r]=mi[n]})});function So(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||mi.hasOwnProperty(n)&&mi[n]?(""+r).trim():r+"px"}function Ao(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=So(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Ro=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ko(n,r){if(r){if(Ro[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Co(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yi=null;function as(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ls=null,cn=null,Fn=null;function us(n){if(n=Jo(n)){if(typeof ls!="function")throw Error(t(280));var r=n.stateNode;r&&(r=kl(r),ls(n.stateNode,n.type,r))}}function Un(n){cn?Fn?Fn.push(n):Fn=[n]:cn=n}function Po(){if(cn){var n=cn,r=Fn;if(Fn=cn=null,us(n),r)for(n=0;n<r.length;n++)us(r[n])}}function _i(n,r){return n(r)}function xo(){}var ir=!1;function No(n,r,a){if(ir)return n(r,a);ir=!0;try{return _i(n,r,a)}finally{ir=!1,(cn!==null||Fn!==null)&&(xo(),Po())}}function nt(n,r){var a=n.stateNode;if(a===null)return null;var c=kl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var cs=!1;if(m)try{var En={};Object.defineProperty(En,"passive",{get:function(){cs=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{cs=!1}function vi(n,r,a,c,d,p,_,T,R){var U=Array.prototype.slice.call(arguments,3);try{r.apply(a,U)}catch(K){this.onError(K)}}var wi=!1,hs=null,Tn=!1,Do=null,ac={onError:function(n){wi=!0,hs=n}};function ds(n,r,a,c,d,p,_,T,R){wi=!1,hs=null,vi.apply(ac,arguments)}function Ja(n,r,a,c,d,p,_,T,R){if(ds.apply(this,arguments),wi){if(wi){var U=hs;wi=!1,hs=null}else throw Error(t(198));Tn||(Tn=!0,Do=U)}}function In(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Ei(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Sn(n){if(In(n)!==n)throw Error(t(188))}function Za(n){var r=n.alternate;if(!r){if(r=In(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Sn(d),n;if(p===c)return Sn(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var _=!1,T=d.child;T;){if(T===a){_=!0,a=d,c=p;break}if(T===c){_=!0,c=d,a=p;break}T=T.sibling}if(!_){for(T=p.child;T;){if(T===a){_=!0,a=p,c=d;break}if(T===c){_=!0,c=p,a=d;break}T=T.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Vo(n){return n=Za(n),n!==null?fs(n):null}function fs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=fs(n);if(r!==null)return r;n=n.sibling}return null}var ps=e.unstable_scheduleCallback,Oo=e.unstable_cancelCallback,el=e.unstable_shouldYield,lc=e.unstable_requestPaint,qe=e.unstable_now,tl=e.unstable_getCurrentPriorityLevel,Ti=e.unstable_ImmediatePriority,Pr=e.unstable_UserBlockingPriority,hn=e.unstable_NormalPriority,Lo=e.unstable_LowPriority,nl=e.unstable_IdlePriority,Ii=null,tn=null;function rl(n){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Ii,n,void 0,(n.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:sl,bo=Math.log,il=Math.LN2;function sl(n){return n>>>=0,n===0?32:31-(bo(n)/il|0)|0}var ms=64,gs=4194304;function xr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Si(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=a&268435455;if(_!==0){var T=_&~d;T!==0?c=xr(T):(p&=_,p!==0&&(c=xr(p)))}else _=a&~d,_!==0?c=xr(_):p!==0&&(c=xr(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-jt(r),d=1<<a,c|=n[a],r&=~d;return c}function uc(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sr(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-jt(p),T=1<<_,R=d[_];R===-1?((T&a)===0||(T&c)!==0)&&(d[_]=uc(T,r)):R<=r&&(n.expiredLanes|=T),p&=~T}}function nn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ai(){var n=ms;return ms<<=1,(ms&4194240)===0&&(ms=64),n}function Nr(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Dr(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-jt(r),n[r]=a}function $e(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-jt(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function Vr(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-jt(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var xe=0;function Or(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ol,ys,al,ll,ul,Mo=!1,jn=[],St=null,An=null,Rn=null,Lr=new Map,dn=new Map,zn=[],cc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cl(n,r){switch(n){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Lr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":dn.delete(r.pointerId)}}function qt(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=Jo(r),r!==null&&ys(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function hc(n,r,a,c,d){switch(r){case"focusin":return St=qt(St,n,r,a,c,d),!0;case"dragenter":return An=qt(An,n,r,a,c,d),!0;case"mouseover":return Rn=qt(Rn,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return Lr.set(p,qt(Lr.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,dn.set(p,qt(dn.get(p)||null,n,r,a,c,d)),!0}return!1}function hl(n){var r=xi(n.target);if(r!==null){var a=In(r);if(a!==null){if(r=a.tag,r===13){if(r=Ei(a),r!==null){n.blockedOn=r,ul(n.priority,function(){al(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function or(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=_s(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);yi=c,a.target.dispatchEvent(c),yi=null}else return r=Jo(a),r!==null&&ys(r),n.blockedOn=a,!1;r.shift()}return!0}function Ri(n,r,a){or(n)&&a.delete(r)}function dl(){Mo=!1,St!==null&&or(St)&&(St=null),An!==null&&or(An)&&(An=null),Rn!==null&&or(Rn)&&(Rn=null),Lr.forEach(Ri),dn.forEach(Ri)}function kn(n,r){n.blockedOn===r&&(n.blockedOn=null,Mo||(Mo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,dl)))}function Cn(n){function r(d){return kn(d,n)}if(0<jn.length){kn(jn[0],n);for(var a=1;a<jn.length;a++){var c=jn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(St!==null&&kn(St,n),An!==null&&kn(An,n),Rn!==null&&kn(Rn,n),Lr.forEach(r),dn.forEach(r),a=0;a<zn.length;a++)c=zn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<zn.length&&(a=zn[0],a.blockedOn===null);)hl(a),a.blockedOn===null&&zn.shift()}var ar=Re.ReactCurrentBatchConfig,br=!0;function Qe(n,r,a,c){var d=xe,p=ar.transition;ar.transition=null;try{xe=1,Fo(n,r,a,c)}finally{xe=d,ar.transition=p}}function dc(n,r,a,c){var d=xe,p=ar.transition;ar.transition=null;try{xe=4,Fo(n,r,a,c)}finally{xe=d,ar.transition=p}}function Fo(n,r,a,c){if(br){var d=_s(n,r,a,c);if(d===null)Ic(n,r,c,ki,a),cl(n,c);else if(hc(d,n,r,a,c))c.stopPropagation();else if(cl(n,c),r&4&&-1<cc.indexOf(n)){for(;d!==null;){var p=Jo(d);if(p!==null&&ol(p),p=_s(n,r,a,c),p===null&&Ic(n,r,c,ki,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else Ic(n,r,c,null,a)}}var ki=null;function _s(n,r,a,c){if(ki=null,n=as(c),n=xi(n),n!==null)if(r=In(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Ei(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return ki=n,null}function Uo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tl()){case Ti:return 1;case Pr:return 4;case hn:case Lo:return 16;case nl:return 536870912;default:return 16}default:return 16}}var rn=null,vs=null,Wt=null;function jo(){if(Wt)return Wt;var n,r=vs,a=r.length,c,d="value"in rn?rn.value:rn.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[p-c];c++);return Wt=d.slice(n,1<c?1-c:void 0)}function ws(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Bn(){return!0}function zo(){return!1}function At(n){function r(a,c,d,p,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Bn:zo,this.isPropagationStopped=zo,this}return ne(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),r}var Pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Es=At(Pn),$n=ne({},Pn,{view:0,detail:0}),fc=At($n),Ts,lr,Mr,Ci=ne({},$n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Mr&&(Mr&&n.type==="mousemove"?(Ts=n.screenX-Mr.screenX,lr=n.screenY-Mr.screenY):lr=Ts=0,Mr=n),Ts)},movementY:function(n){return"movementY"in n?n.movementY:lr}}),Is=At(Ci),Bo=ne({},Ci,{dataTransfer:0}),fl=At(Bo),Ss=ne({},$n,{relatedTarget:0}),As=At(Ss),pl=ne({},Pn,{animationName:0,elapsedTime:0,pseudoElement:0}),ur=At(pl),ml=ne({},Pn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),gl=At(ml),yl=ne({},Pn,{data:0}),$o=At(yl),Rs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_l={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=_l[n])?!!r[n]:!1}function qn(){return vl}var l=ne({},$n,{key:function(n){if(n.key){var r=Rs[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=ws(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?zt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(n){return n.type==="keypress"?ws(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ws(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=At(l),y=ne({},Ci,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=At(y),b=ne({},$n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn}),j=At(b),Z=ne({},Pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=At(Z),pt=ne({},Ci,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ve=At(pt),vt=[9,13,27,32],at=m&&"CompositionEvent"in window,fn=null;m&&"documentMode"in document&&(fn=document.documentMode);var sn=m&&"TextEvent"in window&&!fn,Pi=m&&(!at||fn&&8<fn&&11>=fn),ks=" ",_f=!1;function vf(n,r){switch(n){case"keyup":return vt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Cs=!1;function wv(n,r){switch(n){case"compositionend":return wf(r);case"keypress":return r.which!==32?null:(_f=!0,ks);case"textInput":return n=r.data,n===ks&&_f?null:n;default:return null}}function Ev(n,r){if(Cs)return n==="compositionend"||!at&&vf(n,r)?(n=jo(),Wt=vs=rn=null,Cs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Pi&&r.locale!=="ko"?null:r.data;default:return null}}var Tv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ef(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Tv[n.type]:r==="textarea"}function Tf(n,r,a,c){Un(c),r=Sl(r,"onChange"),0<r.length&&(a=new Es("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var qo=null,Wo=null;function Iv(n){jf(n,0)}function wl(n){var r=Vs(n);if(ns(r))return n}function Sv(n,r){if(n==="change")return r}var If=!1;if(m){var pc;if(m){var mc="oninput"in document;if(!mc){var Sf=document.createElement("div");Sf.setAttribute("oninput","return;"),mc=typeof Sf.oninput=="function"}pc=mc}else pc=!1;If=pc&&(!document.documentMode||9<document.documentMode)}function Af(){qo&&(qo.detachEvent("onpropertychange",Rf),Wo=qo=null)}function Rf(n){if(n.propertyName==="value"&&wl(Wo)){var r=[];Tf(r,Wo,n,as(n)),No(Iv,r)}}function Av(n,r,a){n==="focusin"?(Af(),qo=r,Wo=a,qo.attachEvent("onpropertychange",Rf)):n==="focusout"&&Af()}function Rv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return wl(Wo)}function kv(n,r){if(n==="click")return wl(r)}function Cv(n,r){if(n==="input"||n==="change")return wl(r)}function Pv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var xn=typeof Object.is=="function"?Object.is:Pv;function Ho(n,r){if(xn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(r,d)||!xn(n[d],r[d]))return!1}return!0}function kf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Cf(n,r){var a=kf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=kf(a)}}function Pf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Pf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function xf(){for(var n=window,r=kr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=kr(n.document)}return r}function gc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function xv(n){var r=xf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Pf(a.ownerDocument.documentElement,a)){if(c!==null&&gc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Cf(a,p);var _=Cf(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Nv=m&&"documentMode"in document&&11>=document.documentMode,Ps=null,yc=null,Ko=null,_c=!1;function Nf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_c||Ps==null||Ps!==kr(c)||(c=Ps,"selectionStart"in c&&gc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ko&&Ho(Ko,c)||(Ko=c,c=Sl(yc,"onSelect"),0<c.length&&(r=new Es("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Ps)))}function El(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var xs={animationend:El("Animation","AnimationEnd"),animationiteration:El("Animation","AnimationIteration"),animationstart:El("Animation","AnimationStart"),transitionend:El("Transition","TransitionEnd")},vc={},Df={};m&&(Df=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function Tl(n){if(vc[n])return vc[n];if(!xs[n])return n;var r=xs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Df)return vc[n]=r[a];return n}var Vf=Tl("animationend"),Of=Tl("animationiteration"),Lf=Tl("animationstart"),bf=Tl("transitionend"),Mf=new Map,Ff="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(n,r){Mf.set(n,r),u(r,[n])}for(var wc=0;wc<Ff.length;wc++){var Ec=Ff[wc],Dv=Ec.toLowerCase(),Vv=Ec[0].toUpperCase()+Ec.slice(1);Fr(Dv,"on"+Vv)}Fr(Vf,"onAnimationEnd"),Fr(Of,"onAnimationIteration"),Fr(Lf,"onAnimationStart"),Fr("dblclick","onDoubleClick"),Fr("focusin","onFocus"),Fr("focusout","onBlur"),Fr(bf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ov=new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));function Uf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,Ja(c,r,void 0,n),n.currentTarget=null}function jf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var _=c.length-1;0<=_;_--){var T=c[_],R=T.instance,U=T.currentTarget;if(T=T.listener,R!==p&&d.isPropagationStopped())break e;Uf(d,T,U),p=R}else for(_=0;_<c.length;_++){if(T=c[_],R=T.instance,U=T.currentTarget,T=T.listener,R!==p&&d.isPropagationStopped())break e;Uf(d,T,U),p=R}}}if(Tn)throw n=Do,Tn=!1,Do=null,n}function He(n,r){var a=r[Pc];a===void 0&&(a=r[Pc]=new Set);var c=n+"__bubble";a.has(c)||(zf(r,n,2,!1),a.add(c))}function Tc(n,r,a){var c=0;r&&(c|=4),zf(a,n,c,r)}var Il="_reactListening"+Math.random().toString(36).slice(2);function Qo(n){if(!n[Il]){n[Il]=!0,s.forEach(function(a){a!=="selectionchange"&&(Ov.has(a)||Tc(a,!1,n),Tc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Il]||(r[Il]=!0,Tc("selectionchange",!1,r))}}function zf(n,r,a,c){switch(Uo(r)){case 1:var d=Qe;break;case 4:d=dc;break;default:d=Fo}a=d.bind(null,r,a,n),d=void 0,!cs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Ic(n,r,a,c,d){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var R=_.tag;if((R===3||R===4)&&(R=_.stateNode.containerInfo,R===d||R.nodeType===8&&R.parentNode===d))return;_=_.return}for(;T!==null;){if(_=xi(T),_===null)return;if(R=_.tag,R===5||R===6){c=p=_;continue e}T=T.parentNode}}c=c.return}No(function(){var U=p,K=as(a),Q=[];e:{var H=Mf.get(n);if(H!==void 0){var re=Es,le=n;switch(n){case"keypress":if(ws(a)===0)break e;case"keydown":case"keyup":re=f;break;case"focusin":le="focus",re=As;break;case"focusout":le="blur",re=As;break;case"beforeblur":case"afterblur":re=As;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=Is;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=fl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=j;break;case Vf:case Of:case Lf:re=ur;break;case bf:re=Fe;break;case"scroll":re=fc;break;case"wheel":re=Ve;break;case"copy":case"cut":case"paste":re=gl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=w}var ue=(r&4)!==0,rt=!ue&&n==="scroll",M=ue?H!==null?H+"Capture":null:H;ue=[];for(var P=U,F;P!==null;){F=P;var X=F.stateNode;if(F.tag===5&&X!==null&&(F=X,M!==null&&(X=nt(P,M),X!=null&&ue.push(Yo(P,X,F)))),rt)break;P=P.return}0<ue.length&&(H=new re(H,le,null,a,K),Q.push({event:H,listeners:ue}))}}if((r&7)===0){e:{if(H=n==="mouseover"||n==="pointerover",re=n==="mouseout"||n==="pointerout",H&&a!==yi&&(le=a.relatedTarget||a.fromElement)&&(xi(le)||le[cr]))break e;if((re||H)&&(H=K.window===K?K:(H=K.ownerDocument)?H.defaultView||H.parentWindow:window,re?(le=a.relatedTarget||a.toElement,re=U,le=le?xi(le):null,le!==null&&(rt=In(le),le!==rt||le.tag!==5&&le.tag!==6)&&(le=null)):(re=null,le=U),re!==le)){if(ue=Is,X="onMouseLeave",M="onMouseEnter",P="mouse",(n==="pointerout"||n==="pointerover")&&(ue=w,X="onPointerLeave",M="onPointerEnter",P="pointer"),rt=re==null?H:Vs(re),F=le==null?H:Vs(le),H=new ue(X,P+"leave",re,a,K),H.target=rt,H.relatedTarget=F,X=null,xi(K)===U&&(ue=new ue(M,P+"enter",le,a,K),ue.target=F,ue.relatedTarget=rt,X=ue),rt=X,re&&le)t:{for(ue=re,M=le,P=0,F=ue;F;F=Ns(F))P++;for(F=0,X=M;X;X=Ns(X))F++;for(;0<P-F;)ue=Ns(ue),P--;for(;0<F-P;)M=Ns(M),F--;for(;P--;){if(ue===M||M!==null&&ue===M.alternate)break t;ue=Ns(ue),M=Ns(M)}ue=null}else ue=null;re!==null&&Bf(Q,H,re,ue,!1),le!==null&&rt!==null&&Bf(Q,rt,le,ue,!0)}}e:{if(H=U?Vs(U):window,re=H.nodeName&&H.nodeName.toLowerCase(),re==="select"||re==="input"&&H.type==="file")var he=Sv;else if(Ef(H))if(If)he=Cv;else{he=Rv;var me=Av}else(re=H.nodeName)&&re.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(he=kv);if(he&&(he=he(n,U))){Tf(Q,he,a,K);break e}me&&me(n,H,U),n==="focusout"&&(me=H._wrapperState)&&me.controlled&&H.type==="number"&&is(H,"number",H.value)}switch(me=U?Vs(U):window,n){case"focusin":(Ef(me)||me.contentEditable==="true")&&(Ps=me,yc=U,Ko=null);break;case"focusout":Ko=yc=Ps=null;break;case"mousedown":_c=!0;break;case"contextmenu":case"mouseup":case"dragend":_c=!1,Nf(Q,a,K);break;case"selectionchange":if(Nv)break;case"keydown":case"keyup":Nf(Q,a,K)}var ge;if(at)e:{switch(n){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Cs?vf(n,a)&&(Ee="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(Pi&&a.locale!=="ko"&&(Cs||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Cs&&(ge=jo()):(rn=K,vs="value"in rn?rn.value:rn.textContent,Cs=!0)),me=Sl(U,Ee),0<me.length&&(Ee=new $o(Ee,n,null,a,K),Q.push({event:Ee,listeners:me}),ge?Ee.data=ge:(ge=wf(a),ge!==null&&(Ee.data=ge)))),(ge=sn?wv(n,a):Ev(n,a))&&(U=Sl(U,"onBeforeInput"),0<U.length&&(K=new $o("onBeforeInput","beforeinput",null,a,K),Q.push({event:K,listeners:U}),K.data=ge))}jf(Q,r)})}function Yo(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Sl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=nt(n,a),p!=null&&c.unshift(Yo(n,p,d)),p=nt(n,r),p!=null&&c.push(Yo(n,p,d))),n=n.return}return c}function Ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Bf(n,r,a,c,d){for(var p=r._reactName,_=[];a!==null&&a!==c;){var T=a,R=T.alternate,U=T.stateNode;if(R!==null&&R===c)break;T.tag===5&&U!==null&&(T=U,d?(R=nt(a,p),R!=null&&_.unshift(Yo(a,R,T))):d||(R=nt(a,p),R!=null&&_.push(Yo(a,R,T)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var Lv=/\r\n?/g,bv=/\u0000|\uFFFD/g;function $f(n){return(typeof n=="string"?n:""+n).replace(Lv,`
`).replace(bv,"")}function Al(n,r,a){if(r=$f(r),$f(n)!==r&&a)throw Error(t(425))}function Rl(){}var Sc=null,Ac=null;function Rc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var kc=typeof setTimeout=="function"?setTimeout:void 0,Mv=typeof clearTimeout=="function"?clearTimeout:void 0,qf=typeof Promise=="function"?Promise:void 0,Fv=typeof queueMicrotask=="function"?queueMicrotask:typeof qf<"u"?function(n){return qf.resolve(null).then(n).catch(Uv)}:kc;function Uv(n){setTimeout(function(){throw n})}function Cc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Cn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Cn(r)}function Ur(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Wf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),Wn="__reactFiber$"+Ds,Xo="__reactProps$"+Ds,cr="__reactContainer$"+Ds,Pc="__reactEvents$"+Ds,jv="__reactListeners$"+Ds,zv="__reactHandles$"+Ds;function xi(n){var r=n[Wn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[cr]||a[Wn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Wf(n);n!==null;){if(a=n[Wn])return a;n=Wf(n)}return r}n=a,a=n.parentNode}return null}function Jo(n){return n=n[Wn]||n[cr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Vs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function kl(n){return n[Xo]||null}var xc=[],Os=-1;function jr(n){return{current:n}}function Ke(n){0>Os||(n.current=xc[Os],xc[Os]=null,Os--)}function We(n,r){Os++,xc[Os]=n.current,n.current=r}var zr={},Dt=jr(zr),Ht=jr(!1),Ni=zr;function Ls(n,r){var a=n.type.contextTypes;if(!a)return zr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Kt(n){return n=n.childContextTypes,n!=null}function Cl(){Ke(Ht),Ke(Dt)}function Hf(n,r,a){if(Dt.current!==zr)throw Error(t(168));We(Dt,r),We(Ht,a)}function Kf(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,_e(n)||"Unknown",d));return ne({},a,c)}function Pl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||zr,Ni=Dt.current,We(Dt,n),We(Ht,Ht.current),!0}function Gf(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Kf(n,r,Ni),c.__reactInternalMemoizedMergedChildContext=n,Ke(Ht),Ke(Dt),We(Dt,n)):Ke(Ht),We(Ht,a)}var hr=null,xl=!1,Nc=!1;function Qf(n){hr===null?hr=[n]:hr.push(n)}function Bv(n){xl=!0,Qf(n)}function Br(){if(!Nc&&hr!==null){Nc=!0;var n=0,r=xe;try{var a=hr;for(xe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}hr=null,xl=!1}catch(d){throw hr!==null&&(hr=hr.slice(n+1)),ps(Ti,Br),d}finally{xe=r,Nc=!1}}return null}var bs=[],Ms=0,Nl=null,Dl=0,pn=[],mn=0,Di=null,dr=1,fr="";function Vi(n,r){bs[Ms++]=Dl,bs[Ms++]=Nl,Nl=n,Dl=r}function Yf(n,r,a){pn[mn++]=dr,pn[mn++]=fr,pn[mn++]=Di,Di=n;var c=dr;n=fr;var d=32-jt(c)-1;c&=~(1<<d),a+=1;var p=32-jt(r)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,dr=1<<32-jt(r)+d|a<<d|c,fr=p+n}else dr=1<<p|a<<d|c,fr=n}function Dc(n){n.return!==null&&(Vi(n,1),Yf(n,1,0))}function Vc(n){for(;n===Nl;)Nl=bs[--Ms],bs[Ms]=null,Dl=bs[--Ms],bs[Ms]=null;for(;n===Di;)Di=pn[--mn],pn[mn]=null,fr=pn[--mn],pn[mn]=null,dr=pn[--mn],pn[mn]=null}var on=null,an=null,Ye=!1,Nn=null;function Xf(n,r){var a=vn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Jf(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,on=n,an=Ur(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,on=n,an=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Di!==null?{id:dr,overflow:fr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=vn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,on=n,an=null,!0):!1;default:return!1}}function Oc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Lc(n){if(Ye){var r=an;if(r){var a=r;if(!Jf(n,r)){if(Oc(n))throw Error(t(418));r=Ur(a.nextSibling);var c=on;r&&Jf(n,r)?Xf(c,a):(n.flags=n.flags&-4097|2,Ye=!1,on=n)}}else{if(Oc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ye=!1,on=n}}}function Zf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;on=n}function Vl(n){if(n!==on)return!1;if(!Ye)return Zf(n),Ye=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Rc(n.type,n.memoizedProps)),r&&(r=an)){if(Oc(n))throw ep(),Error(t(418));for(;r;)Xf(n,r),r=Ur(r.nextSibling)}if(Zf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){an=Ur(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}an=null}}else an=on?Ur(n.stateNode.nextSibling):null;return!0}function ep(){for(var n=an;n;)n=Ur(n.nextSibling)}function Fs(){an=on=null,Ye=!1}function bc(n){Nn===null?Nn=[n]:Nn.push(n)}var $v=Re.ReactCurrentBatchConfig;function Zo(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(_){var T=d.refs;_===null?delete T[p]:T[p]=_},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ol(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function tp(n){var r=n._init;return r(n._payload)}function np(n){function r(M,P){if(n){var F=M.deletions;F===null?(M.deletions=[P],M.flags|=16):F.push(P)}}function a(M,P){if(!n)return null;for(;P!==null;)r(M,P),P=P.sibling;return null}function c(M,P){for(M=new Map;P!==null;)P.key!==null?M.set(P.key,P):M.set(P.index,P),P=P.sibling;return M}function d(M,P){return M=Yr(M,P),M.index=0,M.sibling=null,M}function p(M,P,F){return M.index=F,n?(F=M.alternate,F!==null?(F=F.index,F<P?(M.flags|=2,P):F):(M.flags|=2,P)):(M.flags|=1048576,P)}function _(M){return n&&M.alternate===null&&(M.flags|=2),M}function T(M,P,F,X){return P===null||P.tag!==6?(P=kh(F,M.mode,X),P.return=M,P):(P=d(P,F),P.return=M,P)}function R(M,P,F,X){var he=F.type;return he===x?K(M,P,F.props.children,X,F.key):P!==null&&(P.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===ht&&tp(he)===P.type)?(X=d(P,F.props),X.ref=Zo(M,P,F),X.return=M,X):(X=iu(F.type,F.key,F.props,null,M.mode,X),X.ref=Zo(M,P,F),X.return=M,X)}function U(M,P,F,X){return P===null||P.tag!==4||P.stateNode.containerInfo!==F.containerInfo||P.stateNode.implementation!==F.implementation?(P=Ch(F,M.mode,X),P.return=M,P):(P=d(P,F.children||[]),P.return=M,P)}function K(M,P,F,X,he){return P===null||P.tag!==7?(P=zi(F,M.mode,X,he),P.return=M,P):(P=d(P,F),P.return=M,P)}function Q(M,P,F){if(typeof P=="string"&&P!==""||typeof P=="number")return P=kh(""+P,M.mode,F),P.return=M,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Be:return F=iu(P.type,P.key,P.props,null,M.mode,F),F.ref=Zo(M,null,P),F.return=M,F;case ke:return P=Ch(P,M.mode,F),P.return=M,P;case ht:var X=P._init;return Q(M,X(P._payload),F)}if(tr(P)||de(P))return P=zi(P,M.mode,F,null),P.return=M,P;Ol(M,P)}return null}function H(M,P,F,X){var he=P!==null?P.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return he!==null?null:T(M,P,""+F,X);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case Be:return F.key===he?R(M,P,F,X):null;case ke:return F.key===he?U(M,P,F,X):null;case ht:return he=F._init,H(M,P,he(F._payload),X)}if(tr(F)||de(F))return he!==null?null:K(M,P,F,X,null);Ol(M,F)}return null}function re(M,P,F,X,he){if(typeof X=="string"&&X!==""||typeof X=="number")return M=M.get(F)||null,T(P,M,""+X,he);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Be:return M=M.get(X.key===null?F:X.key)||null,R(P,M,X,he);case ke:return M=M.get(X.key===null?F:X.key)||null,U(P,M,X,he);case ht:var me=X._init;return re(M,P,F,me(X._payload),he)}if(tr(X)||de(X))return M=M.get(F)||null,K(P,M,X,he,null);Ol(P,X)}return null}function le(M,P,F,X){for(var he=null,me=null,ge=P,Ee=P=0,Tt=null;ge!==null&&Ee<F.length;Ee++){ge.index>Ee?(Tt=ge,ge=null):Tt=ge.sibling;var be=H(M,ge,F[Ee],X);if(be===null){ge===null&&(ge=Tt);break}n&&ge&&be.alternate===null&&r(M,ge),P=p(be,P,Ee),me===null?he=be:me.sibling=be,me=be,ge=Tt}if(Ee===F.length)return a(M,ge),Ye&&Vi(M,Ee),he;if(ge===null){for(;Ee<F.length;Ee++)ge=Q(M,F[Ee],X),ge!==null&&(P=p(ge,P,Ee),me===null?he=ge:me.sibling=ge,me=ge);return Ye&&Vi(M,Ee),he}for(ge=c(M,ge);Ee<F.length;Ee++)Tt=re(ge,M,Ee,F[Ee],X),Tt!==null&&(n&&Tt.alternate!==null&&ge.delete(Tt.key===null?Ee:Tt.key),P=p(Tt,P,Ee),me===null?he=Tt:me.sibling=Tt,me=Tt);return n&&ge.forEach(function(Xr){return r(M,Xr)}),Ye&&Vi(M,Ee),he}function ue(M,P,F,X){var he=de(F);if(typeof he!="function")throw Error(t(150));if(F=he.call(F),F==null)throw Error(t(151));for(var me=he=null,ge=P,Ee=P=0,Tt=null,be=F.next();ge!==null&&!be.done;Ee++,be=F.next()){ge.index>Ee?(Tt=ge,ge=null):Tt=ge.sibling;var Xr=H(M,ge,be.value,X);if(Xr===null){ge===null&&(ge=Tt);break}n&&ge&&Xr.alternate===null&&r(M,ge),P=p(Xr,P,Ee),me===null?he=Xr:me.sibling=Xr,me=Xr,ge=Tt}if(be.done)return a(M,ge),Ye&&Vi(M,Ee),he;if(ge===null){for(;!be.done;Ee++,be=F.next())be=Q(M,be.value,X),be!==null&&(P=p(be,P,Ee),me===null?he=be:me.sibling=be,me=be);return Ye&&Vi(M,Ee),he}for(ge=c(M,ge);!be.done;Ee++,be=F.next())be=re(ge,M,Ee,be.value,X),be!==null&&(n&&be.alternate!==null&&ge.delete(be.key===null?Ee:be.key),P=p(be,P,Ee),me===null?he=be:me.sibling=be,me=be);return n&&ge.forEach(function(T0){return r(M,T0)}),Ye&&Vi(M,Ee),he}function rt(M,P,F,X){if(typeof F=="object"&&F!==null&&F.type===x&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case Be:e:{for(var he=F.key,me=P;me!==null;){if(me.key===he){if(he=F.type,he===x){if(me.tag===7){a(M,me.sibling),P=d(me,F.props.children),P.return=M,M=P;break e}}else if(me.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===ht&&tp(he)===me.type){a(M,me.sibling),P=d(me,F.props),P.ref=Zo(M,me,F),P.return=M,M=P;break e}a(M,me);break}else r(M,me);me=me.sibling}F.type===x?(P=zi(F.props.children,M.mode,X,F.key),P.return=M,M=P):(X=iu(F.type,F.key,F.props,null,M.mode,X),X.ref=Zo(M,P,F),X.return=M,M=X)}return _(M);case ke:e:{for(me=F.key;P!==null;){if(P.key===me)if(P.tag===4&&P.stateNode.containerInfo===F.containerInfo&&P.stateNode.implementation===F.implementation){a(M,P.sibling),P=d(P,F.children||[]),P.return=M,M=P;break e}else{a(M,P);break}else r(M,P);P=P.sibling}P=Ch(F,M.mode,X),P.return=M,M=P}return _(M);case ht:return me=F._init,rt(M,P,me(F._payload),X)}if(tr(F))return le(M,P,F,X);if(de(F))return ue(M,P,F,X);Ol(M,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,P!==null&&P.tag===6?(a(M,P.sibling),P=d(P,F),P.return=M,M=P):(a(M,P),P=kh(F,M.mode,X),P.return=M,M=P),_(M)):a(M,P)}return rt}var Us=np(!0),rp=np(!1),Ll=jr(null),bl=null,js=null,Mc=null;function Fc(){Mc=js=bl=null}function Uc(n){var r=Ll.current;Ke(Ll),n._currentValue=r}function jc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function zs(n,r){bl=n,Mc=js=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Gt=!0),n.firstContext=null)}function gn(n){var r=n._currentValue;if(Mc!==n)if(n={context:n,memoizedValue:r,next:null},js===null){if(bl===null)throw Error(t(308));js=n,bl.dependencies={lanes:0,firstContext:n}}else js=js.next=n;return r}var Oi=null;function zc(n){Oi===null?Oi=[n]:Oi.push(n)}function ip(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,zc(r)):(a.next=d.next,d.next=a),r.interleaved=a,pr(n,c)}function pr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var $r=!1;function Bc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function mr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function qr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Le&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,pr(n,a)}return d=c.interleaved,d===null?(r.next=r,zc(c)):(r.next=d.next,d.next=r),c.interleaved=r,pr(n,a)}function Ml(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Vr(n,a)}}function op(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=_:p=p.next=_,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Fl(n,r,a,c){var d=n.updateQueue;$r=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var R=T,U=R.next;R.next=null,_===null?p=U:_.next=U,_=R;var K=n.alternate;K!==null&&(K=K.updateQueue,T=K.lastBaseUpdate,T!==_&&(T===null?K.firstBaseUpdate=U:T.next=U,K.lastBaseUpdate=R))}if(p!==null){var Q=d.baseState;_=0,K=U=R=null,T=p;do{var H=T.lane,re=T.eventTime;if((c&H)===H){K!==null&&(K=K.next={eventTime:re,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var le=n,ue=T;switch(H=r,re=a,ue.tag){case 1:if(le=ue.payload,typeof le=="function"){Q=le.call(re,Q,H);break e}Q=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ue.payload,H=typeof le=="function"?le.call(re,Q,H):le,H==null)break e;Q=ne({},Q,H);break e;case 2:$r=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,H=d.effects,H===null?d.effects=[T]:H.push(T))}else re={eventTime:re,lane:H,tag:T.tag,payload:T.payload,callback:T.callback,next:null},K===null?(U=K=re,R=Q):K=K.next=re,_|=H;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;H=T,T=H.next,H.next=null,d.lastBaseUpdate=H,d.shared.pending=null}}while(!0);if(K===null&&(R=Q),d.baseState=R,d.firstBaseUpdate=U,d.lastBaseUpdate=K,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);Mi|=_,n.lanes=_,n.memoizedState=Q}}function ap(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ea={},Hn=jr(ea),ta=jr(ea),na=jr(ea);function Li(n){if(n===ea)throw Error(t(174));return n}function $c(n,r){switch(We(na,r),We(ta,n),We(Hn,ea),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ft(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ft(r,n)}Ke(Hn),We(Hn,r)}function Bs(){Ke(Hn),Ke(ta),Ke(na)}function lp(n){Li(na.current);var r=Li(Hn.current),a=ft(r,n.type);r!==a&&(We(ta,n),We(Hn,a))}function qc(n){ta.current===n&&(Ke(Hn),Ke(ta))}var Je=jr(0);function Ul(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Wc=[];function Hc(){for(var n=0;n<Wc.length;n++)Wc[n]._workInProgressVersionPrimary=null;Wc.length=0}var jl=Re.ReactCurrentDispatcher,Kc=Re.ReactCurrentBatchConfig,bi=0,Ze=null,mt=null,wt=null,zl=!1,ra=!1,ia=0,qv=0;function Vt(){throw Error(t(321))}function Gc(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!xn(n[a],r[a]))return!1;return!0}function Qc(n,r,a,c,d,p){if(bi=p,Ze=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,jl.current=n===null||n.memoizedState===null?Gv:Qv,n=a(c,d),ra){p=0;do{if(ra=!1,ia=0,25<=p)throw Error(t(301));p+=1,wt=mt=null,r.updateQueue=null,jl.current=Yv,n=a(c,d)}while(ra)}if(jl.current=ql,r=mt!==null&&mt.next!==null,bi=0,wt=mt=Ze=null,zl=!1,r)throw Error(t(300));return n}function Yc(){var n=ia!==0;return ia=0,n}function Kn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?Ze.memoizedState=wt=n:wt=wt.next=n,wt}function yn(){if(mt===null){var n=Ze.alternate;n=n!==null?n.memoizedState:null}else n=mt.next;var r=wt===null?Ze.memoizedState:wt.next;if(r!==null)wt=r,mt=n;else{if(n===null)throw Error(t(310));mt=n,n={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},wt===null?Ze.memoizedState=wt=n:wt=wt.next=n}return wt}function sa(n,r){return typeof r=="function"?r(n):r}function Xc(n){var r=yn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=mt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var T=_=null,R=null,U=p;do{var K=U.lane;if((bi&K)===K)R!==null&&(R=R.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var Q={lane:K,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};R===null?(T=R=Q,_=c):R=R.next=Q,Ze.lanes|=K,Mi|=K}U=U.next}while(U!==null&&U!==p);R===null?_=c:R.next=T,xn(c,r.memoizedState)||(Gt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=R,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Ze.lanes|=p,Mi|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Jc(n){var r=yn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);xn(p,r.memoizedState)||(Gt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function up(){}function cp(n,r){var a=Ze,c=yn(),d=r(),p=!xn(c.memoizedState,d);if(p&&(c.memoizedState=d,Gt=!0),c=c.queue,Zc(fp.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||wt!==null&&wt.memoizedState.tag&1){if(a.flags|=2048,oa(9,dp.bind(null,a,c,d,r),void 0,null),Et===null)throw Error(t(349));(bi&30)!==0||hp(a,r,d)}return d}function hp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function dp(n,r,a,c){r.value=a,r.getSnapshot=c,pp(r)&&mp(n)}function fp(n,r,a){return a(function(){pp(r)&&mp(n)})}function pp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!xn(n,a)}catch{return!0}}function mp(n){var r=pr(n,1);r!==null&&Ln(r,n,1,-1)}function gp(n){var r=Kn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:n},r.queue=n,n=n.dispatch=Kv.bind(null,Ze,n),[r.memoizedState,n]}function oa(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function yp(){return yn().memoizedState}function Bl(n,r,a,c){var d=Kn();Ze.flags|=n,d.memoizedState=oa(1|r,a,void 0,c===void 0?null:c)}function $l(n,r,a,c){var d=yn();c=c===void 0?null:c;var p=void 0;if(mt!==null){var _=mt.memoizedState;if(p=_.destroy,c!==null&&Gc(c,_.deps)){d.memoizedState=oa(r,a,p,c);return}}Ze.flags|=n,d.memoizedState=oa(1|r,a,p,c)}function _p(n,r){return Bl(8390656,8,n,r)}function Zc(n,r){return $l(2048,8,n,r)}function vp(n,r){return $l(4,2,n,r)}function wp(n,r){return $l(4,4,n,r)}function Ep(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Tp(n,r,a){return a=a!=null?a.concat([n]):null,$l(4,4,Ep.bind(null,r,n),a)}function eh(){}function Ip(n,r){var a=yn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Gc(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Sp(n,r){var a=yn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Gc(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Ap(n,r,a){return(bi&21)===0?(n.baseState&&(n.baseState=!1,Gt=!0),n.memoizedState=a):(xn(a,r)||(a=Ai(),Ze.lanes|=a,Mi|=a,n.baseState=!0),r)}function Wv(n,r){var a=xe;xe=a!==0&&4>a?a:4,n(!0);var c=Kc.transition;Kc.transition={};try{n(!1),r()}finally{xe=a,Kc.transition=c}}function Rp(){return yn().memoizedState}function Hv(n,r,a){var c=Gr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},kp(n))Cp(r,a);else if(a=ip(n,r,a,c),a!==null){var d=$t();Ln(a,n,c,d),Pp(a,r,c)}}function Kv(n,r,a){var c=Gr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(kp(n))Cp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var _=r.lastRenderedState,T=p(_,a);if(d.hasEagerState=!0,d.eagerState=T,xn(T,_)){var R=r.interleaved;R===null?(d.next=d,zc(r)):(d.next=R.next,R.next=d),r.interleaved=d;return}}catch{}finally{}a=ip(n,r,d,c),a!==null&&(d=$t(),Ln(a,n,c,d),Pp(a,r,c))}}function kp(n){var r=n.alternate;return n===Ze||r!==null&&r===Ze}function Cp(n,r){ra=zl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Pp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Vr(n,a)}}var ql={readContext:gn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},Gv={readContext:gn,useCallback:function(n,r){return Kn().memoizedState=[n,r===void 0?null:r],n},useContext:gn,useEffect:_p,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Bl(4194308,4,Ep.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Bl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Bl(4,2,n,r)},useMemo:function(n,r){var a=Kn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Kn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=Hv.bind(null,Ze,n),[c.memoizedState,n]},useRef:function(n){var r=Kn();return n={current:n},r.memoizedState=n},useState:gp,useDebugValue:eh,useDeferredValue:function(n){return Kn().memoizedState=n},useTransition:function(){var n=gp(!1),r=n[0];return n=Wv.bind(null,n[1]),Kn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Ze,d=Kn();if(Ye){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),Et===null)throw Error(t(349));(bi&30)!==0||hp(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,_p(fp.bind(null,c,p,n),[n]),c.flags|=2048,oa(9,dp.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=Kn(),r=Et.identifierPrefix;if(Ye){var a=fr,c=dr;a=(c&~(1<<32-jt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ia++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=qv++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Qv={readContext:gn,useCallback:Ip,useContext:gn,useEffect:Zc,useImperativeHandle:Tp,useInsertionEffect:vp,useLayoutEffect:wp,useMemo:Sp,useReducer:Xc,useRef:yp,useState:function(){return Xc(sa)},useDebugValue:eh,useDeferredValue:function(n){var r=yn();return Ap(r,mt.memoizedState,n)},useTransition:function(){var n=Xc(sa)[0],r=yn().memoizedState;return[n,r]},useMutableSource:up,useSyncExternalStore:cp,useId:Rp,unstable_isNewReconciler:!1},Yv={readContext:gn,useCallback:Ip,useContext:gn,useEffect:Zc,useImperativeHandle:Tp,useInsertionEffect:vp,useLayoutEffect:wp,useMemo:Sp,useReducer:Jc,useRef:yp,useState:function(){return Jc(sa)},useDebugValue:eh,useDeferredValue:function(n){var r=yn();return mt===null?r.memoizedState=n:Ap(r,mt.memoizedState,n)},useTransition:function(){var n=Jc(sa)[0],r=yn().memoizedState;return[n,r]},useMutableSource:up,useSyncExternalStore:cp,useId:Rp,unstable_isNewReconciler:!1};function Dn(n,r){if(n&&n.defaultProps){r=ne({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function th(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ne({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Wl={isMounted:function(n){return(n=n._reactInternals)?In(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=$t(),d=Gr(n),p=mr(c,d);p.payload=r,a!=null&&(p.callback=a),r=qr(n,p,d),r!==null&&(Ln(r,n,d,c),Ml(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=$t(),d=Gr(n),p=mr(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=qr(n,p,d),r!==null&&(Ln(r,n,d,c),Ml(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=$t(),c=Gr(n),d=mr(a,c);d.tag=2,r!=null&&(d.callback=r),r=qr(n,d,c),r!==null&&(Ln(r,n,c,a),Ml(r,n,c))}};function xp(n,r,a,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):r.prototype&&r.prototype.isPureReactComponent?!Ho(a,c)||!Ho(d,p):!0}function Np(n,r,a){var c=!1,d=zr,p=r.contextType;return typeof p=="object"&&p!==null?p=gn(p):(d=Kt(r)?Ni:Dt.current,c=r.contextTypes,p=(c=c!=null)?Ls(n,d):zr),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Wl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function Dp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Wl.enqueueReplaceState(r,r.state,null)}function nh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Bc(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=gn(p):(p=Kt(r)?Ni:Dt.current,d.context=Ls(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(th(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Wl.enqueueReplaceState(d,d.state,null),Fl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function $s(n,r){try{var a="",c=r;do a+=te(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function rh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function ih(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var Xv=typeof WeakMap=="function"?WeakMap:Map;function Vp(n,r,a){a=mr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){Jl||(Jl=!0,vh=c),ih(n,r)},a}function Op(n,r,a){a=mr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){ih(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){ih(n,r),typeof c!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function Lp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Xv;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=h0.bind(null,n,r,a),r.then(n,n))}function bp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Mp(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=mr(-1,1),r.tag=2,qr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Jv=Re.ReactCurrentOwner,Gt=!1;function Bt(n,r,a,c){r.child=n===null?rp(r,null,a,c):Us(r,n.child,a,c)}function Fp(n,r,a,c,d){a=a.render;var p=r.ref;return zs(r,d),c=Qc(n,r,a,c,p,d),a=Yc(),n!==null&&!Gt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,gr(n,r,d)):(Ye&&a&&Dc(r),r.flags|=1,Bt(n,r,c,d),r.child)}function Up(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Rh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,jp(n,r,p,c,d)):(n=iu(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&d)===0){var _=p.memoizedProps;if(a=a.compare,a=a!==null?a:Ho,a(_,c)&&n.ref===r.ref)return gr(n,r,d)}return r.flags|=1,n=Yr(p,c),n.ref=r.ref,n.return=r,r.child=n}function jp(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(Ho(p,c)&&n.ref===r.ref)if(Gt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Gt=!0);else return r.lanes=n.lanes,gr(n,r,d)}return sh(n,r,a,c,d)}function zp(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(Ws,ln),ln|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,We(Ws,ln),ln|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,We(Ws,ln),ln|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,We(Ws,ln),ln|=c;return Bt(n,r,d,a),r.child}function Bp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function sh(n,r,a,c,d){var p=Kt(a)?Ni:Dt.current;return p=Ls(r,p),zs(r,d),a=Qc(n,r,a,c,p,d),c=Yc(),n!==null&&!Gt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,gr(n,r,d)):(Ye&&c&&Dc(r),r.flags|=1,Bt(n,r,a,d),r.child)}function $p(n,r,a,c,d){if(Kt(a)){var p=!0;Pl(r)}else p=!1;if(zs(r,d),r.stateNode===null)Kl(n,r),Np(r,a,c),nh(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,T=r.memoizedProps;_.props=T;var R=_.context,U=a.contextType;typeof U=="object"&&U!==null?U=gn(U):(U=Kt(a)?Ni:Dt.current,U=Ls(r,U));var K=a.getDerivedStateFromProps,Q=typeof K=="function"||typeof _.getSnapshotBeforeUpdate=="function";Q||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==c||R!==U)&&Dp(r,_,c,U),$r=!1;var H=r.memoizedState;_.state=H,Fl(r,c,_,d),R=r.memoizedState,T!==c||H!==R||Ht.current||$r?(typeof K=="function"&&(th(r,a,K,c),R=r.memoizedState),(T=$r||xp(r,a,T,c,H,R,U))?(Q||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=R),_.props=c,_.state=R,_.context=U,c=T):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,sp(n,r),T=r.memoizedProps,U=r.type===r.elementType?T:Dn(r.type,T),_.props=U,Q=r.pendingProps,H=_.context,R=a.contextType,typeof R=="object"&&R!==null?R=gn(R):(R=Kt(a)?Ni:Dt.current,R=Ls(r,R));var re=a.getDerivedStateFromProps;(K=typeof re=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==Q||H!==R)&&Dp(r,_,c,R),$r=!1,H=r.memoizedState,_.state=H,Fl(r,c,_,d);var le=r.memoizedState;T!==Q||H!==le||Ht.current||$r?(typeof re=="function"&&(th(r,a,re,c),le=r.memoizedState),(U=$r||xp(r,a,U,c,H,le,R)||!1)?(K||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,le,R),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,le,R)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=le),_.props=c,_.state=le,_.context=R,c=U):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&H===n.memoizedState||(r.flags|=1024),c=!1)}return oh(n,r,a,c,p,d)}function oh(n,r,a,c,d,p){Bp(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&Gf(r,a,!1),gr(n,r,p);c=r.stateNode,Jv.current=r;var T=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=Us(r,n.child,null,p),r.child=Us(r,null,T,p)):Bt(n,r,T,p),r.memoizedState=c.state,d&&Gf(r,a,!0),r.child}function qp(n){var r=n.stateNode;r.pendingContext?Hf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Hf(n,r.context,!1),$c(n,r.containerInfo)}function Wp(n,r,a,c,d){return Fs(),bc(d),r.flags|=256,Bt(n,r,a,c),r.child}var ah={dehydrated:null,treeContext:null,retryLane:0};function lh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Hp(n,r,a){var c=r.pendingProps,d=Je.current,p=!1,_=(r.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),We(Je,d&1),n===null)return Lc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=c.children,n=c.fallback,p?(c=r.mode,p=r.child,_={mode:"hidden",children:_},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=_):p=su(_,c,0,null),n=zi(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=lh(a),r.memoizedState=ah,n):uh(r,_));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return Zv(n,r,_,c,T,d,a);if(p){p=c.fallback,_=r.mode,d=n.child,T=d.sibling;var R={mode:"hidden",children:c.children};return(_&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=R,r.deletions=null):(c=Yr(d,R),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=Yr(T,p):(p=zi(p,_,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,_=n.child.memoizedState,_=_===null?lh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~a,r.memoizedState=ah,c}return p=n.child,n=p.sibling,c=Yr(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function uh(n,r){return r=su({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Hl(n,r,a,c){return c!==null&&bc(c),Us(r,n.child,null,a),n=uh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Zv(n,r,a,c,d,p,_){if(a)return r.flags&256?(r.flags&=-257,c=rh(Error(t(422))),Hl(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=su({mode:"visible",children:c.children},d,0,null),p=zi(p,d,_,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&Us(r,n.child,null,_),r.child.memoizedState=lh(_),r.memoizedState=ah,p);if((r.mode&1)===0)return Hl(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,p=Error(t(419)),c=rh(p,c,void 0),Hl(n,r,_,c)}if(T=(_&n.childLanes)!==0,Gt||T){if(c=Et,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,pr(n,d),Ln(c,n,d,-1))}return Ah(),c=rh(Error(t(421))),Hl(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=d0.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,an=Ur(d.nextSibling),on=r,Ye=!0,Nn=null,n!==null&&(pn[mn++]=dr,pn[mn++]=fr,pn[mn++]=Di,dr=n.id,fr=n.overflow,Di=r),r=uh(r,c.children),r.flags|=4096,r)}function Kp(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),jc(n.return,r,a)}function ch(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function Gp(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(Bt(n,r,c.children,a),c=Je.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Kp(n,a,r);else if(n.tag===19)Kp(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(We(Je,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Ul(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),ch(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Ul(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}ch(r,!0,a,null,p);break;case"together":ch(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Kl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function gr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Mi|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Yr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Yr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function e0(n,r,a){switch(r.tag){case 3:qp(r),Fs();break;case 5:lp(r);break;case 1:Kt(r.type)&&Pl(r);break;case 4:$c(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;We(Ll,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(We(Je,Je.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?Hp(n,r,a):(We(Je,Je.current&1),n=gr(n,r,a),n!==null?n.sibling:null);We(Je,Je.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return Gp(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),We(Je,Je.current),c)break;return null;case 22:case 23:return r.lanes=0,zp(n,r,a)}return gr(n,r,a)}var Qp,hh,Yp,Xp;Qp=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},hh=function(){},Yp=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Li(Hn.current);var p=null;switch(a){case"input":d=pi(n,d),c=pi(n,c),p=[];break;case"select":d=ne({},d,{value:void 0}),c=ne({},c,{value:void 0}),p=[];break;case"textarea":d=Eo(n,d),c=Eo(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Rl)}ko(a,c);var _;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var T=d[U];for(_ in T)T.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?p||(p=[]):(p=p||[]).push(U,null));for(U in c){var R=c[U];if(T=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&R!==T&&(R!=null||T!=null))if(U==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||R&&R.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in R)R.hasOwnProperty(_)&&T[_]!==R[_]&&(a||(a={}),a[_]=R[_])}else a||(p||(p=[]),p.push(U,a)),a=R;else U==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,T=T?T.__html:void 0,R!=null&&T!==R&&(p=p||[]).push(U,R)):U==="children"?typeof R!="string"&&typeof R!="number"||(p=p||[]).push(U,""+R):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(R!=null&&U==="onScroll"&&He("scroll",n),p||T===R||(p=[])):(p=p||[]).push(U,R))}a&&(p=p||[]).push("style",a);var U=p;(r.updateQueue=U)&&(r.flags|=4)}},Xp=function(n,r,a,c){a!==c&&(r.flags|=4)};function aa(n,r){if(!Ye)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ot(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function t0(n,r,a){var c=r.pendingProps;switch(Vc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(r),null;case 1:return Kt(r.type)&&Cl(),Ot(r),null;case 3:return c=r.stateNode,Bs(),Ke(Ht),Ke(Dt),Hc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Vl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Nn!==null&&(Th(Nn),Nn=null))),hh(n,r),Ot(r),null;case 5:qc(r);var d=Li(na.current);if(a=r.type,n!==null&&r.stateNode!=null)Yp(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Ot(r),null}if(n=Li(Hn.current),Vl(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[Wn]=r,c[Xo]=p,n=(r.mode&1)!==0,a){case"dialog":He("cancel",c),He("close",c);break;case"iframe":case"object":case"embed":He("load",c);break;case"video":case"audio":for(d=0;d<Go.length;d++)He(Go[d],c);break;case"source":He("error",c);break;case"img":case"image":case"link":He("error",c),He("load",c);break;case"details":He("toggle",c);break;case"input":rs(c,p),He("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},He("invalid",c);break;case"textarea":ss(c,p),He("invalid",c)}ko(a,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var T=p[_];_==="children"?typeof T=="string"?c.textContent!==T&&(p.suppressHydrationWarning!==!0&&Al(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&Al(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&He("scroll",c)}switch(a){case"input":er(c),Xa(c,p,!0);break;case"textarea":er(c),To(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Rl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=dt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[Wn]=r,n[Xo]=c,Qp(n,r,!1,!1),r.stateNode=n;e:{switch(_=Co(a,c),a){case"dialog":He("cancel",n),He("close",n),d=c;break;case"iframe":case"object":case"embed":He("load",n),d=c;break;case"video":case"audio":for(d=0;d<Go.length;d++)He(Go[d],n);d=c;break;case"source":He("error",n),d=c;break;case"img":case"image":case"link":He("error",n),He("load",n),d=c;break;case"details":He("toggle",n),d=c;break;case"input":rs(n,c),d=pi(n,c),He("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ne({},c,{value:void 0}),He("invalid",n);break;case"textarea":ss(n,c),d=Eo(n,c),He("invalid",n);break;default:d=c}ko(a,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var R=T[p];p==="style"?Ao(n,R):p==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&Io(n,R)):p==="children"?typeof R=="string"?(a!=="textarea"||R!=="")&&Cr(n,R):typeof R=="number"&&Cr(n,""+R):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?R!=null&&p==="onScroll"&&He("scroll",n):R!=null&&Ie(n,p,R,_))}switch(a){case"input":er(n),Xa(n,c,!1);break;case"textarea":er(n),To(n);break;case"option":c.value!=null&&n.setAttribute("value",""+pe(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?nr(n,!!c.multiple,p,!1):c.defaultValue!=null&&nr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Rl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ot(r),null;case 6:if(n&&r.stateNode!=null)Xp(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Li(na.current),Li(Hn.current),Vl(r)){if(c=r.stateNode,a=r.memoizedProps,c[Wn]=r,(p=c.nodeValue!==a)&&(n=on,n!==null))switch(n.tag){case 3:Al(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Al(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Wn]=r,r.stateNode=c}return Ot(r),null;case 13:if(Ke(Je),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ye&&an!==null&&(r.mode&1)!==0&&(r.flags&128)===0)ep(),Fs(),r.flags|=98560,p=!1;else if(p=Vl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Wn]=r}else Fs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ot(r),p=!1}else Nn!==null&&(Th(Nn),Nn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Je.current&1)!==0?gt===0&&(gt=3):Ah())),r.updateQueue!==null&&(r.flags|=4),Ot(r),null);case 4:return Bs(),hh(n,r),n===null&&Qo(r.stateNode.containerInfo),Ot(r),null;case 10:return Uc(r.type._context),Ot(r),null;case 17:return Kt(r.type)&&Cl(),Ot(r),null;case 19:if(Ke(Je),p=r.memoizedState,p===null)return Ot(r),null;if(c=(r.flags&128)!==0,_=p.rendering,_===null)if(c)aa(p,!1);else{if(gt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(_=Ul(n),_!==null){for(r.flags|=128,aa(p,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return We(Je,Je.current&1|2),r.child}n=n.sibling}p.tail!==null&&qe()>Hs&&(r.flags|=128,c=!0,aa(p,!1),r.lanes=4194304)}else{if(!c)if(n=Ul(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),aa(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!Ye)return Ot(r),null}else 2*qe()-p.renderingStartTime>Hs&&a!==1073741824&&(r.flags|=128,c=!0,aa(p,!1),r.lanes=4194304);p.isBackwards?(_.sibling=r.child,r.child=_):(a=p.last,a!==null?a.sibling=_:r.child=_,p.last=_)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=qe(),r.sibling=null,a=Je.current,We(Je,c?a&1|2:a&1),r):(Ot(r),null);case 22:case 23:return Sh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(ln&1073741824)!==0&&(Ot(r),r.subtreeFlags&6&&(r.flags|=8192)):Ot(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function n0(n,r){switch(Vc(r),r.tag){case 1:return Kt(r.type)&&Cl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Bs(),Ke(Ht),Ke(Dt),Hc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return qc(r),null;case 13:if(Ke(Je),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Fs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Ke(Je),null;case 4:return Bs(),null;case 10:return Uc(r.type._context),null;case 22:case 23:return Sh(),null;case 24:return null;default:return null}}var Gl=!1,Lt=!1,r0=typeof WeakSet=="function"?WeakSet:Set,se=null;function qs(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tt(n,r,c)}else a.current=null}function dh(n,r,a){try{a()}catch(c){tt(n,r,c)}}var Jp=!1;function i0(n,r){if(Sc=br,n=xf(),gc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var _=0,T=-1,R=-1,U=0,K=0,Q=n,H=null;t:for(;;){for(var re;Q!==a||d!==0&&Q.nodeType!==3||(T=_+d),Q!==p||c!==0&&Q.nodeType!==3||(R=_+c),Q.nodeType===3&&(_+=Q.nodeValue.length),(re=Q.firstChild)!==null;)H=Q,Q=re;for(;;){if(Q===n)break t;if(H===a&&++U===d&&(T=_),H===p&&++K===c&&(R=_),(re=Q.nextSibling)!==null)break;Q=H,H=Q.parentNode}Q=re}a=T===-1||R===-1?null:{start:T,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ac={focusedElem:n,selectionRange:a},br=!1,se=r;se!==null;)if(r=se,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,se=n;else for(;se!==null;){r=se;try{var le=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(le!==null){var ue=le.memoizedProps,rt=le.memoizedState,M=r.stateNode,P=M.getSnapshotBeforeUpdate(r.elementType===r.type?ue:Dn(r.type,ue),rt);M.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var F=r.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){tt(r,r.return,X)}if(n=r.sibling,n!==null){n.return=r.return,se=n;break}se=r.return}return le=Jp,Jp=!1,le}function la(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&dh(r,a,p)}d=d.next}while(d!==c)}}function Ql(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function fh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function Zp(n){var r=n.alternate;r!==null&&(n.alternate=null,Zp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Wn],delete r[Xo],delete r[Pc],delete r[jv],delete r[zv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function em(n){return n.tag===5||n.tag===3||n.tag===4}function tm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||em(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ph(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Rl));else if(c!==4&&(n=n.child,n!==null))for(ph(n,r,a),n=n.sibling;n!==null;)ph(n,r,a),n=n.sibling}function mh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(mh(n,r,a),n=n.sibling;n!==null;)mh(n,r,a),n=n.sibling}var Rt=null,Vn=!1;function Wr(n,r,a){for(a=a.child;a!==null;)nm(n,r,a),a=a.sibling}function nm(n,r,a){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Ii,a)}catch{}switch(a.tag){case 5:Lt||qs(a,r);case 6:var c=Rt,d=Vn;Rt=null,Wr(n,r,a),Rt=c,Vn=d,Rt!==null&&(Vn?(n=Rt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(Vn?(n=Rt,a=a.stateNode,n.nodeType===8?Cc(n.parentNode,a):n.nodeType===1&&Cc(n,a),Cn(n)):Cc(Rt,a.stateNode));break;case 4:c=Rt,d=Vn,Rt=a.stateNode.containerInfo,Vn=!0,Wr(n,r,a),Rt=c,Vn=d;break;case 0:case 11:case 14:case 15:if(!Lt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&((p&2)!==0||(p&4)!==0)&&dh(a,r,_),d=d.next}while(d!==c)}Wr(n,r,a);break;case 1:if(!Lt&&(qs(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){tt(a,r,T)}Wr(n,r,a);break;case 21:Wr(n,r,a);break;case 22:a.mode&1?(Lt=(c=Lt)||a.memoizedState!==null,Wr(n,r,a),Lt=c):Wr(n,r,a);break;default:Wr(n,r,a)}}function rm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new r0),r.forEach(function(c){var d=f0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function On(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,_=r,T=_;e:for(;T!==null;){switch(T.tag){case 5:Rt=T.stateNode,Vn=!1;break e;case 3:Rt=T.stateNode.containerInfo,Vn=!0;break e;case 4:Rt=T.stateNode.containerInfo,Vn=!0;break e}T=T.return}if(Rt===null)throw Error(t(160));nm(p,_,d),Rt=null,Vn=!1;var R=d.alternate;R!==null&&(R.return=null),d.return=null}catch(U){tt(d,r,U)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)im(r,n),r=r.sibling}function im(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(On(r,n),Gn(n),c&4){try{la(3,n,n.return),Ql(3,n)}catch(ue){tt(n,n.return,ue)}try{la(5,n,n.return)}catch(ue){tt(n,n.return,ue)}}break;case 1:On(r,n),Gn(n),c&512&&a!==null&&qs(a,a.return);break;case 5:if(On(r,n),Gn(n),c&512&&a!==null&&qs(a,a.return),n.flags&32){var d=n.stateNode;try{Cr(d,"")}catch(ue){tt(n,n.return,ue)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=a!==null?a.memoizedProps:p,T=n.type,R=n.updateQueue;if(n.updateQueue=null,R!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&vo(d,p),Co(T,_);var U=Co(T,p);for(_=0;_<R.length;_+=2){var K=R[_],Q=R[_+1];K==="style"?Ao(d,Q):K==="dangerouslySetInnerHTML"?Io(d,Q):K==="children"?Cr(d,Q):Ie(d,K,Q,U)}switch(T){case"input":wo(d,p);break;case"textarea":os(d,p);break;case"select":var H=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var re=p.value;re!=null?nr(d,!!p.multiple,re,!1):H!==!!p.multiple&&(p.defaultValue!=null?nr(d,!!p.multiple,p.defaultValue,!0):nr(d,!!p.multiple,p.multiple?[]:"",!1))}d[Xo]=p}catch(ue){tt(n,n.return,ue)}}break;case 6:if(On(r,n),Gn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(ue){tt(n,n.return,ue)}}break;case 3:if(On(r,n),Gn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Cn(r.containerInfo)}catch(ue){tt(n,n.return,ue)}break;case 4:On(r,n),Gn(n);break;case 13:On(r,n),Gn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(_h=qe())),c&4&&rm(n);break;case 22:if(K=a!==null&&a.memoizedState!==null,n.mode&1?(Lt=(U=Lt)||K,On(r,n),Lt=U):On(r,n),Gn(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!K&&(n.mode&1)!==0)for(se=n,K=n.child;K!==null;){for(Q=se=K;se!==null;){switch(H=se,re=H.child,H.tag){case 0:case 11:case 14:case 15:la(4,H,H.return);break;case 1:qs(H,H.return);var le=H.stateNode;if(typeof le.componentWillUnmount=="function"){c=H,a=H.return;try{r=c,le.props=r.memoizedProps,le.state=r.memoizedState,le.componentWillUnmount()}catch(ue){tt(c,a,ue)}}break;case 5:qs(H,H.return);break;case 22:if(H.memoizedState!==null){am(Q);continue}}re!==null?(re.return=H,se=re):am(Q)}K=K.sibling}e:for(K=null,Q=n;;){if(Q.tag===5){if(K===null){K=Q;try{d=Q.stateNode,U?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=Q.stateNode,R=Q.memoizedProps.style,_=R!=null&&R.hasOwnProperty("display")?R.display:null,T.style.display=So("display",_))}catch(ue){tt(n,n.return,ue)}}}else if(Q.tag===6){if(K===null)try{Q.stateNode.nodeValue=U?"":Q.memoizedProps}catch(ue){tt(n,n.return,ue)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;K===Q&&(K=null),Q=Q.return}K===Q&&(K=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:On(r,n),Gn(n),c&4&&rm(n);break;case 21:break;default:On(r,n),Gn(n)}}function Gn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(em(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Cr(d,""),c.flags&=-33);var p=tm(n);mh(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,T=tm(n);ph(n,T,_);break;default:throw Error(t(161))}}catch(R){tt(n,n.return,R)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function s0(n,r,a){se=n,sm(n)}function sm(n,r,a){for(var c=(n.mode&1)!==0;se!==null;){var d=se,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||Gl;if(!_){var T=d.alternate,R=T!==null&&T.memoizedState!==null||Lt;T=Gl;var U=Lt;if(Gl=_,(Lt=R)&&!U)for(se=d;se!==null;)_=se,R=_.child,_.tag===22&&_.memoizedState!==null?lm(d):R!==null?(R.return=_,se=R):lm(d);for(;p!==null;)se=p,sm(p),p=p.sibling;se=d,Gl=T,Lt=U}om(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,se=p):om(n)}}function om(n){for(;se!==null;){var r=se;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Lt||Ql(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Lt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:Dn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&ap(r,p,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}ap(r,_,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var R=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&a.focus();break;case"img":R.src&&(a.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var U=r.alternate;if(U!==null){var K=U.memoizedState;if(K!==null){var Q=K.dehydrated;Q!==null&&Cn(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Lt||r.flags&512&&fh(r)}catch(H){tt(r,r.return,H)}}if(r===n){se=null;break}if(a=r.sibling,a!==null){a.return=r.return,se=a;break}se=r.return}}function am(n){for(;se!==null;){var r=se;if(r===n){se=null;break}var a=r.sibling;if(a!==null){a.return=r.return,se=a;break}se=r.return}}function lm(n){for(;se!==null;){var r=se;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Ql(4,r)}catch(R){tt(r,a,R)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(R){tt(r,d,R)}}var p=r.return;try{fh(r)}catch(R){tt(r,p,R)}break;case 5:var _=r.return;try{fh(r)}catch(R){tt(r,_,R)}}}catch(R){tt(r,r.return,R)}if(r===n){se=null;break}var T=r.sibling;if(T!==null){T.return=r.return,se=T;break}se=r.return}}var o0=Math.ceil,Yl=Re.ReactCurrentDispatcher,gh=Re.ReactCurrentOwner,_n=Re.ReactCurrentBatchConfig,Le=0,Et=null,lt=null,kt=0,ln=0,Ws=jr(0),gt=0,ua=null,Mi=0,Xl=0,yh=0,ca=null,Qt=null,_h=0,Hs=1/0,yr=null,Jl=!1,vh=null,Hr=null,Zl=!1,Kr=null,eu=0,ha=0,wh=null,tu=-1,nu=0;function $t(){return(Le&6)!==0?qe():tu!==-1?tu:tu=qe()}function Gr(n){return(n.mode&1)===0?1:(Le&2)!==0&&kt!==0?kt&-kt:$v.transition!==null?(nu===0&&(nu=Ai()),nu):(n=xe,n!==0||(n=window.event,n=n===void 0?16:Uo(n.type)),n)}function Ln(n,r,a,c){if(50<ha)throw ha=0,wh=null,Error(t(185));Dr(n,a,c),((Le&2)===0||n!==Et)&&(n===Et&&((Le&2)===0&&(Xl|=a),gt===4&&Qr(n,kt)),Yt(n,c),a===1&&Le===0&&(r.mode&1)===0&&(Hs=qe()+500,xl&&Br()))}function Yt(n,r){var a=n.callbackNode;sr(n,r);var c=Si(n,n===Et?kt:0);if(c===0)a!==null&&Oo(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Oo(a),r===1)n.tag===0?Bv(cm.bind(null,n)):Qf(cm.bind(null,n)),Fv(function(){(Le&6)===0&&Br()}),a=null;else{switch(Or(c)){case 1:a=Ti;break;case 4:a=Pr;break;case 16:a=hn;break;case 536870912:a=nl;break;default:a=hn}a=_m(a,um.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function um(n,r){if(tu=-1,nu=0,(Le&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ks()&&n.callbackNode!==a)return null;var c=Si(n,n===Et?kt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=ru(n,c);else{r=c;var d=Le;Le|=2;var p=dm();(Et!==n||kt!==r)&&(yr=null,Hs=qe()+500,Ui(n,r));do try{u0();break}catch(T){hm(n,T)}while(!0);Fc(),Yl.current=p,Le=d,lt!==null?r=0:(Et=null,kt=0,r=gt)}if(r!==0){if(r===2&&(d=nn(n),d!==0&&(c=d,r=Eh(n,d))),r===1)throw a=ua,Ui(n,0),Qr(n,c),Yt(n,qe()),a;if(r===6)Qr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!a0(d)&&(r=ru(n,c),r===2&&(p=nn(n),p!==0&&(c=p,r=Eh(n,p))),r===1))throw a=ua,Ui(n,0),Qr(n,c),Yt(n,qe()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:ji(n,Qt,yr);break;case 3:if(Qr(n,c),(c&130023424)===c&&(r=_h+500-qe(),10<r)){if(Si(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){$t(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=kc(ji.bind(null,n,Qt,yr),r);break}ji(n,Qt,yr);break;case 4:if(Qr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-jt(c);p=1<<_,_=r[_],_>d&&(d=_),c&=~p}if(c=d,c=qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*o0(c/1960))-c,10<c){n.timeoutHandle=kc(ji.bind(null,n,Qt,yr),c);break}ji(n,Qt,yr);break;case 5:ji(n,Qt,yr);break;default:throw Error(t(329))}}}return Yt(n,qe()),n.callbackNode===a?um.bind(null,n):null}function Eh(n,r){var a=ca;return n.current.memoizedState.isDehydrated&&(Ui(n,r).flags|=256),n=ru(n,r),n!==2&&(r=Qt,Qt=a,r!==null&&Th(r)),n}function Th(n){Qt===null?Qt=n:Qt.push.apply(Qt,n)}function a0(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!xn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Qr(n,r){for(r&=~yh,r&=~Xl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-jt(r),c=1<<a;n[a]=-1,r&=~c}}function cm(n){if((Le&6)!==0)throw Error(t(327));Ks();var r=Si(n,0);if((r&1)===0)return Yt(n,qe()),null;var a=ru(n,r);if(n.tag!==0&&a===2){var c=nn(n);c!==0&&(r=c,a=Eh(n,c))}if(a===1)throw a=ua,Ui(n,0),Qr(n,r),Yt(n,qe()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,ji(n,Qt,yr),Yt(n,qe()),null}function Ih(n,r){var a=Le;Le|=1;try{return n(r)}finally{Le=a,Le===0&&(Hs=qe()+500,xl&&Br())}}function Fi(n){Kr!==null&&Kr.tag===0&&(Le&6)===0&&Ks();var r=Le;Le|=1;var a=_n.transition,c=xe;try{if(_n.transition=null,xe=1,n)return n()}finally{xe=c,_n.transition=a,Le=r,(Le&6)===0&&Br()}}function Sh(){ln=Ws.current,Ke(Ws)}function Ui(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Mv(a)),lt!==null)for(a=lt.return;a!==null;){var c=a;switch(Vc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Cl();break;case 3:Bs(),Ke(Ht),Ke(Dt),Hc();break;case 5:qc(c);break;case 4:Bs();break;case 13:Ke(Je);break;case 19:Ke(Je);break;case 10:Uc(c.type._context);break;case 22:case 23:Sh()}a=a.return}if(Et=n,lt=n=Yr(n.current,null),kt=ln=r,gt=0,ua=null,yh=Xl=Mi=0,Qt=ca=null,Oi!==null){for(r=0;r<Oi.length;r++)if(a=Oi[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}a.pending=c}Oi=null}return n}function hm(n,r){do{var a=lt;try{if(Fc(),jl.current=ql,zl){for(var c=Ze.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}zl=!1}if(bi=0,wt=mt=Ze=null,ra=!1,ia=0,gh.current=null,a===null||a.return===null){gt=1,ua=r,lt=null;break}e:{var p=n,_=a.return,T=a,R=r;if(r=kt,T.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var U=R,K=T,Q=K.tag;if((K.mode&1)===0&&(Q===0||Q===11||Q===15)){var H=K.alternate;H?(K.updateQueue=H.updateQueue,K.memoizedState=H.memoizedState,K.lanes=H.lanes):(K.updateQueue=null,K.memoizedState=null)}var re=bp(_);if(re!==null){re.flags&=-257,Mp(re,_,T,p,r),re.mode&1&&Lp(p,U,r),r=re,R=U;var le=r.updateQueue;if(le===null){var ue=new Set;ue.add(R),r.updateQueue=ue}else le.add(R);break e}else{if((r&1)===0){Lp(p,U,r),Ah();break e}R=Error(t(426))}}else if(Ye&&T.mode&1){var rt=bp(_);if(rt!==null){(rt.flags&65536)===0&&(rt.flags|=256),Mp(rt,_,T,p,r),bc($s(R,T));break e}}p=R=$s(R,T),gt!==4&&(gt=2),ca===null?ca=[p]:ca.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var M=Vp(p,R,r);op(p,M);break e;case 1:T=R;var P=p.type,F=p.stateNode;if((p.flags&128)===0&&(typeof P.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(Hr===null||!Hr.has(F)))){p.flags|=65536,r&=-r,p.lanes|=r;var X=Op(p,T,r);op(p,X);break e}}p=p.return}while(p!==null)}pm(a)}catch(he){r=he,lt===a&&a!==null&&(lt=a=a.return);continue}break}while(!0)}function dm(){var n=Yl.current;return Yl.current=ql,n===null?ql:n}function Ah(){(gt===0||gt===3||gt===2)&&(gt=4),Et===null||(Mi&268435455)===0&&(Xl&268435455)===0||Qr(Et,kt)}function ru(n,r){var a=Le;Le|=2;var c=dm();(Et!==n||kt!==r)&&(yr=null,Ui(n,r));do try{l0();break}catch(d){hm(n,d)}while(!0);if(Fc(),Le=a,Yl.current=c,lt!==null)throw Error(t(261));return Et=null,kt=0,gt}function l0(){for(;lt!==null;)fm(lt)}function u0(){for(;lt!==null&&!el();)fm(lt)}function fm(n){var r=ym(n.alternate,n,ln);n.memoizedProps=n.pendingProps,r===null?pm(n):lt=r,gh.current=null}function pm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=t0(a,r,ln),a!==null){lt=a;return}}else{if(a=n0(a,r),a!==null){a.flags&=32767,lt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gt=6,lt=null;return}}if(r=r.sibling,r!==null){lt=r;return}lt=r=n}while(r!==null);gt===0&&(gt=5)}function ji(n,r,a){var c=xe,d=_n.transition;try{_n.transition=null,xe=1,c0(n,r,a,c)}finally{_n.transition=d,xe=c}return null}function c0(n,r,a,c){do Ks();while(Kr!==null);if((Le&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if($e(n,p),n===Et&&(lt=Et=null,kt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Zl||(Zl=!0,_m(hn,function(){return Ks(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=_n.transition,_n.transition=null;var _=xe;xe=1;var T=Le;Le|=4,gh.current=null,i0(n,a),im(a,n),xv(Ac),br=!!Sc,Ac=Sc=null,n.current=a,s0(a),lc(),Le=T,xe=_,_n.transition=p}else n.current=a;if(Zl&&(Zl=!1,Kr=n,eu=d),p=n.pendingLanes,p===0&&(Hr=null),rl(a.stateNode),Yt(n,qe()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Jl)throw Jl=!1,n=vh,vh=null,n;return(eu&1)!==0&&n.tag!==0&&Ks(),p=n.pendingLanes,(p&1)!==0?n===wh?ha++:(ha=0,wh=n):ha=0,Br(),null}function Ks(){if(Kr!==null){var n=Or(eu),r=_n.transition,a=xe;try{if(_n.transition=null,xe=16>n?16:n,Kr===null)var c=!1;else{if(n=Kr,Kr=null,eu=0,(Le&6)!==0)throw Error(t(331));var d=Le;for(Le|=4,se=n.current;se!==null;){var p=se,_=p.child;if((se.flags&16)!==0){var T=p.deletions;if(T!==null){for(var R=0;R<T.length;R++){var U=T[R];for(se=U;se!==null;){var K=se;switch(K.tag){case 0:case 11:case 15:la(8,K,p)}var Q=K.child;if(Q!==null)Q.return=K,se=Q;else for(;se!==null;){K=se;var H=K.sibling,re=K.return;if(Zp(K),K===U){se=null;break}if(H!==null){H.return=re,se=H;break}se=re}}}var le=p.alternate;if(le!==null){var ue=le.child;if(ue!==null){le.child=null;do{var rt=ue.sibling;ue.sibling=null,ue=rt}while(ue!==null)}}se=p}}if((p.subtreeFlags&2064)!==0&&_!==null)_.return=p,se=_;else e:for(;se!==null;){if(p=se,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:la(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,se=M;break e}se=p.return}}var P=n.current;for(se=P;se!==null;){_=se;var F=_.child;if((_.subtreeFlags&2064)!==0&&F!==null)F.return=_,se=F;else e:for(_=P;se!==null;){if(T=se,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:Ql(9,T)}}catch(he){tt(T,T.return,he)}if(T===_){se=null;break e}var X=T.sibling;if(X!==null){X.return=T.return,se=X;break e}se=T.return}}if(Le=d,Br(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Ii,n)}catch{}c=!0}return c}finally{xe=a,_n.transition=r}}return!1}function mm(n,r,a){r=$s(a,r),r=Vp(n,r,1),n=qr(n,r,1),r=$t(),n!==null&&(Dr(n,1,r),Yt(n,r))}function tt(n,r,a){if(n.tag===3)mm(n,n,a);else for(;r!==null;){if(r.tag===3){mm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Hr===null||!Hr.has(c))){n=$s(a,n),n=Op(r,n,1),r=qr(r,n,1),n=$t(),r!==null&&(Dr(r,1,n),Yt(r,n));break}}r=r.return}}function h0(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=$t(),n.pingedLanes|=n.suspendedLanes&a,Et===n&&(kt&a)===a&&(gt===4||gt===3&&(kt&130023424)===kt&&500>qe()-_h?Ui(n,0):yh|=a),Yt(n,r)}function gm(n,r){r===0&&((n.mode&1)===0?r=1:(r=gs,gs<<=1,(gs&130023424)===0&&(gs=4194304)));var a=$t();n=pr(n,r),n!==null&&(Dr(n,r,a),Yt(n,a))}function d0(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),gm(n,a)}function f0(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),gm(n,a)}var ym;ym=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Ht.current)Gt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Gt=!1,e0(n,r,a);Gt=(n.flags&131072)!==0}else Gt=!1,Ye&&(r.flags&1048576)!==0&&Yf(r,Dl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Kl(n,r),n=r.pendingProps;var d=Ls(r,Dt.current);zs(r,a),d=Qc(null,r,c,n,d,a);var p=Yc();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Kt(c)?(p=!0,Pl(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Bc(r),d.updater=Wl,r.stateNode=d,d._reactInternals=r,nh(r,c,n,a),r=oh(null,r,c,!0,p,a)):(r.tag=0,Ye&&p&&Dc(r),Bt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Kl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=m0(c),n=Dn(c,n),d){case 0:r=sh(null,r,c,n,a);break e;case 1:r=$p(null,r,c,n,a);break e;case 11:r=Fp(null,r,c,n,a);break e;case 14:r=Up(null,r,c,Dn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Dn(c,d),sh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Dn(c,d),$p(n,r,c,d,a);case 3:e:{if(qp(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,sp(n,r),Fl(r,c,null,a);var _=r.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=$s(Error(t(423)),r),r=Wp(n,r,c,a,d);break e}else if(c!==d){d=$s(Error(t(424)),r),r=Wp(n,r,c,a,d);break e}else for(an=Ur(r.stateNode.containerInfo.firstChild),on=r,Ye=!0,Nn=null,a=rp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Fs(),c===d){r=gr(n,r,a);break e}Bt(n,r,c,a)}r=r.child}return r;case 5:return lp(r),n===null&&Lc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,Rc(c,d)?_=null:p!==null&&Rc(c,p)&&(r.flags|=32),Bp(n,r),Bt(n,r,_,a),r.child;case 6:return n===null&&Lc(r),null;case 13:return Hp(n,r,a);case 4:return $c(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Us(r,null,c,a):Bt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Dn(c,d),Fp(n,r,c,d,a);case 7:return Bt(n,r,r.pendingProps,a),r.child;case 8:return Bt(n,r,r.pendingProps.children,a),r.child;case 12:return Bt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,_=d.value,We(Ll,c._currentValue),c._currentValue=_,p!==null)if(xn(p.value,_)){if(p.children===d.children&&!Ht.current){r=gr(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var T=p.dependencies;if(T!==null){_=p.child;for(var R=T.firstContext;R!==null;){if(R.context===c){if(p.tag===1){R=mr(-1,a&-a),R.tag=2;var U=p.updateQueue;if(U!==null){U=U.shared;var K=U.pending;K===null?R.next=R:(R.next=K.next,K.next=R),U.pending=R}}p.lanes|=a,R=p.alternate,R!==null&&(R.lanes|=a),jc(p.return,a,r),T.lanes|=a;break}R=R.next}}else if(p.tag===10)_=p.type===r.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=a,T=_.alternate,T!==null&&(T.lanes|=a),jc(_,a,r),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===r){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}Bt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,zs(r,a),d=gn(d),c=c(d),r.flags|=1,Bt(n,r,c,a),r.child;case 14:return c=r.type,d=Dn(c,r.pendingProps),d=Dn(c.type,d),Up(n,r,c,d,a);case 15:return jp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Dn(c,d),Kl(n,r),r.tag=1,Kt(c)?(n=!0,Pl(r)):n=!1,zs(r,a),Np(r,c,d),nh(r,c,d,a),oh(null,r,c,!0,n,a);case 19:return Gp(n,r,a);case 22:return zp(n,r,a)}throw Error(t(156,r.tag))};function _m(n,r){return ps(n,r)}function p0(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(n,r,a,c){return new p0(n,r,a,c)}function Rh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function m0(n){if(typeof n=="function")return Rh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===_t)return 14}return 2}function Yr(n,r){var a=n.alternate;return a===null?(a=vn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function iu(n,r,a,c,d,p){var _=2;if(c=n,typeof n=="function")Rh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case x:return zi(a.children,d,p,r);case I:_=8,d|=8;break;case A:return n=vn(12,a,r,d|2),n.elementType=A,n.lanes=p,n;case S:return n=vn(13,a,r,d),n.elementType=S,n.lanes=p,n;case Xe:return n=vn(19,a,r,d),n.elementType=Xe,n.lanes=p,n;case De:return su(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:_=10;break e;case N:_=9;break e;case O:_=11;break e;case _t:_=14;break e;case ht:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=vn(_,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function zi(n,r,a,c){return n=vn(7,n,c,r),n.lanes=a,n}function su(n,r,a,c){return n=vn(22,n,c,r),n.elementType=De,n.lanes=a,n.stateNode={isHidden:!1},n}function kh(n,r,a){return n=vn(6,n,null,r),n.lanes=a,n}function Ch(n,r,a){return r=vn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function g0(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nr(0),this.expirationTimes=Nr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Ph(n,r,a,c,d,p,_,T,R){return n=new g0(n,r,a,T,R),r===1?(r=1,p===!0&&(r|=8)):r=0,p=vn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bc(p),n}function y0(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ke,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function vm(n){if(!n)return zr;n=n._reactInternals;e:{if(In(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Kt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Kt(a))return Kf(n,a,r)}return r}function wm(n,r,a,c,d,p,_,T,R){return n=Ph(a,c,!0,n,d,p,_,T,R),n.context=vm(null),a=n.current,c=$t(),d=Gr(a),p=mr(c,d),p.callback=r??null,qr(a,p,d),n.current.lanes=d,Dr(n,d,c),Yt(n,c),n}function ou(n,r,a,c){var d=r.current,p=$t(),_=Gr(d);return a=vm(a),r.context===null?r.context=a:r.pendingContext=a,r=mr(p,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=qr(d,r,_),n!==null&&(Ln(n,d,_,p),Ml(n,d,_)),_}function au(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Em(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function xh(n,r){Em(n,r),(n=n.alternate)&&Em(n,r)}function _0(){return null}var Tm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Nh(n){this._internalRoot=n}lu.prototype.render=Nh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));ou(n,r,null,null)},lu.prototype.unmount=Nh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Fi(function(){ou(null,n,null,null)}),r[cr]=null}};function lu(n){this._internalRoot=n}lu.prototype.unstable_scheduleHydration=function(n){if(n){var r=ll();n={blockedOn:null,target:n,priority:r};for(var a=0;a<zn.length&&r!==0&&r<zn[a].priority;a++);zn.splice(a,0,n),a===0&&hl(n)}};function Dh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function uu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Im(){}function v0(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var U=au(_);p.call(U)}}var _=wm(r,c,n,0,null,!1,!1,"",Im);return n._reactRootContainer=_,n[cr]=_.current,Qo(n.nodeType===8?n.parentNode:n),Fi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var U=au(R);T.call(U)}}var R=Ph(n,0,!1,null,null,!1,!1,"",Im);return n._reactRootContainer=R,n[cr]=R.current,Qo(n.nodeType===8?n.parentNode:n),Fi(function(){ou(r,R,a,c)}),R}function cu(n,r,a,c,d){var p=a._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var T=d;d=function(){var R=au(_);T.call(R)}}ou(r,_,n,d)}else _=v0(a,r,n,d,c);return au(_)}ol=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=xr(r.pendingLanes);a!==0&&(Vr(r,a|1),Yt(r,qe()),(Le&6)===0&&(Hs=qe()+500,Br()))}break;case 13:Fi(function(){var c=pr(n,1);if(c!==null){var d=$t();Ln(c,n,1,d)}}),xh(n,1)}},ys=function(n){if(n.tag===13){var r=pr(n,134217728);if(r!==null){var a=$t();Ln(r,n,134217728,a)}xh(n,134217728)}},al=function(n){if(n.tag===13){var r=Gr(n),a=pr(n,r);if(a!==null){var c=$t();Ln(a,n,r,c)}xh(n,r)}},ll=function(){return xe},ul=function(n,r){var a=xe;try{return xe=n,r()}finally{xe=a}},ls=function(n,r,a){switch(r){case"input":if(wo(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=kl(c);if(!d)throw Error(t(90));ns(c),wo(c,d)}}}break;case"textarea":os(n,a);break;case"select":r=a.value,r!=null&&nr(n,!!a.multiple,r,!1)}},_i=Ih,xo=Fi;var w0={usingClientEntryPoint:!1,Events:[Jo,Vs,kl,Un,Po,Ih]},da={findFiberByHostInstance:xi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},E0={bundleType:da.bundleType,version:da.version,rendererPackageName:da.rendererPackageName,rendererConfig:da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Re.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Vo(n),n===null?null:n.stateNode},findFiberByHostInstance:da.findFiberByHostInstance||_0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hu.isDisabled&&hu.supportsFiber)try{Ii=hu.inject(E0),tn=hu}catch{}}return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w0,Xt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dh(r))throw Error(t(200));return y0(n,r,null,a)},Xt.createRoot=function(n,r){if(!Dh(n))throw Error(t(299));var a=!1,c="",d=Tm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Ph(n,1,!1,null,null,a,!1,c,d),n[cr]=r.current,Qo(n.nodeType===8?n.parentNode:n),new Nh(r)},Xt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Vo(r),n=n===null?null:n.stateNode,n},Xt.flushSync=function(n){return Fi(n)},Xt.hydrate=function(n,r,a){if(!uu(r))throw Error(t(200));return cu(null,n,r,!0,a)},Xt.hydrateRoot=function(n,r,a){if(!Dh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",_=Tm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=wm(r,null,n,1,a??null,d,!1,p,_),n[cr]=r.current,Qo(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new lu(r)},Xt.render=function(n,r,a){if(!uu(r))throw Error(t(200));return cu(null,n,r,!1,a)},Xt.unmountComponentAtNode=function(n){if(!uu(n))throw Error(t(40));return n._reactRootContainer?(Fi(function(){cu(null,null,n,!1,function(){n._reactRootContainer=null,n[cr]=null})}),!0):!1},Xt.unstable_batchedUpdates=Ih,Xt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!uu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return cu(n,r,a,!1,c)},Xt.version="18.3.1-next-f1338f8080-20240426",Xt}var Nm;function x0(){if(Nm)return Lh.exports;Nm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Lh.exports=P0(),Lh.exports}var Dm;function N0(){if(Dm)return du;Dm=1;var i=x0();return du.createRoot=i.createRoot,du.hydrateRoot=i.hydrateRoot,du}var D0=N0();const V0=oy(D0);var Vm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},O0=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},ly={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,g=o+2<i.length,v=g?i[o+2]:0,E=u>>2,k=(u&3)<<4|m>>4;let D=(m&15)<<2|v>>6,B=v&63;g||(B=64,h||(D=64)),s.push(t[E],t[k],t[D],t[B])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(ay(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):O0(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const k=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||v==null||k==null)throw new L0;const D=u<<2|m>>4;if(s.push(D),v!==64){const B=m<<4&240|v>>2;if(s.push(B),k!==64){const Y=v<<6&192|k;s.push(Y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class L0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const b0=function(i){const e=ay(i);return ly.encodeByteArray(e,!0)},Cu=function(i){return b0(i).replace(/\./g,"")},uy=function(i){try{return ly.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0=()=>M0().__FIREBASE_DEFAULTS__,U0=()=>{if(typeof process>"u"||typeof Vm>"u")return;const i=Vm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},j0=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&uy(i[1]);return e&&JSON.parse(e)},qu=()=>{try{return F0()||U0()||j0()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},cy=i=>{var e,t;return(t=(e=qu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},z0=i=>{const e=cy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},hy=()=>{var i;return(i=qu())===null||i===void 0?void 0:i.config},dy=i=>{var e;return(e=qu())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Cu(JSON.stringify(t)),Cu(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function q0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function W0(){var i;const e=(i=qu())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function H0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function K0(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function G0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Q0(){const i=Ut();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Y0(){return!W0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function X0(){try{return typeof indexedDB=="object"}catch{return!1}}function J0(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="FirebaseError";class Rr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Z0,Object.setPrototypeOf(this,Rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fa.prototype.create)}}class Fa{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?ew(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Rr(o,m,s)}}function ew(i,e){return i.replace(tw,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const tw=/\{\$([^}]+)}/g;function nw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Pu(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Om(u)&&Om(h)){if(!Pu(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Om(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ga(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function ya(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function rw(i,e){const t=new iw(i,e);return t.subscribe.bind(t)}class iw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");sw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Fh),o.error===void 0&&(o.error=Fh),o.complete===void 0&&(o.complete=Fh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Fh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(i){return i&&i._delegate?i._delegate:i}class Ki{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new B0;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lw(e))try{this.getOrInitializeService({instanceIdentifier:Bi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Bi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bi){return this.instances.has(e)}getOptions(e=Bi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:aw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Bi){return this.component?this.component.multipleInstances?e:Bi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aw(i){return i===Bi?void 0:i}function lw(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ow(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ne||(Ne={}));const cw={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},hw=Ne.INFO,dw={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},fw=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=dw[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Td{constructor(e){this.name=e,this._logLevel=hw,this._logHandler=fw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const pw=(i,e)=>e.some(t=>i instanceof t);let Lm,bm;function mw(){return Lm||(Lm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gw(){return bm||(bm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fy=new WeakMap,Xh=new WeakMap,py=new WeakMap,Uh=new WeakMap,Id=new WeakMap;function yw(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(ii(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&fy.set(t,i)}).catch(()=>{}),Id.set(e,i),e}function _w(i){if(Xh.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});Xh.set(i,e)}let Jh={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Xh.get(i);if(e==="objectStoreNames")return i.objectStoreNames||py.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ii(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function vw(i){Jh=i(Jh)}function ww(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(jh(this),e,...t);return py.set(s,e.sort?e.sort():[e]),ii(s)}:gw().includes(i)?function(...e){return i.apply(jh(this),e),ii(fy.get(this))}:function(...e){return ii(i.apply(jh(this),e))}}function Ew(i){return typeof i=="function"?ww(i):(i instanceof IDBTransaction&&_w(i),pw(i,mw())?new Proxy(i,Jh):i)}function ii(i){if(i instanceof IDBRequest)return yw(i);if(Uh.has(i))return Uh.get(i);const e=Ew(i);return e!==i&&(Uh.set(i,e),Id.set(e,i)),e}const jh=i=>Id.get(i);function Tw(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=ii(h);return s&&h.addEventListener("upgradeneeded",g=>{s(ii(h.result),g.oldVersion,g.newVersion,ii(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const Iw=["get","getKey","getAll","getAllKeys","count"],Sw=["put","add","delete","clear"],zh=new Map;function Mm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(zh.get(e))return zh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=Sw.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Iw.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let v=g.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&g.done]))[0]};return zh.set(e,u),u}vw(i=>({...i,get:(e,t,s)=>Mm(e,t)||i.get(e,t,s),has:(e,t)=>!!Mm(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Rw(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Rw(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zh="@firebase/app",Fm="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new Td("@firebase/app"),kw="@firebase/app-compat",Cw="@firebase/analytics-compat",Pw="@firebase/analytics",xw="@firebase/app-check-compat",Nw="@firebase/app-check",Dw="@firebase/auth",Vw="@firebase/auth-compat",Ow="@firebase/database",Lw="@firebase/data-connect",bw="@firebase/database-compat",Mw="@firebase/functions",Fw="@firebase/functions-compat",Uw="@firebase/installations",jw="@firebase/installations-compat",zw="@firebase/messaging",Bw="@firebase/messaging-compat",$w="@firebase/performance",qw="@firebase/performance-compat",Ww="@firebase/remote-config",Hw="@firebase/remote-config-compat",Kw="@firebase/storage",Gw="@firebase/storage-compat",Qw="@firebase/firestore",Yw="@firebase/vertexai-preview",Xw="@firebase/firestore-compat",Jw="firebase",Zw="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed="[DEFAULT]",eE={[Zh]:"fire-core",[kw]:"fire-core-compat",[Pw]:"fire-analytics",[Cw]:"fire-analytics-compat",[Nw]:"fire-app-check",[xw]:"fire-app-check-compat",[Dw]:"fire-auth",[Vw]:"fire-auth-compat",[Ow]:"fire-rtdb",[Lw]:"fire-data-connect",[bw]:"fire-rtdb-compat",[Mw]:"fire-fn",[Fw]:"fire-fn-compat",[Uw]:"fire-iid",[jw]:"fire-iid-compat",[zw]:"fire-fcm",[Bw]:"fire-fcm-compat",[$w]:"fire-perf",[qw]:"fire-perf-compat",[Ww]:"fire-rc",[Hw]:"fire-rc-compat",[Kw]:"fire-gcs",[Gw]:"fire-gcs-compat",[Qw]:"fire-fst",[Xw]:"fire-fst-compat",[Yw]:"fire-vertex","fire-js":"fire-js",[Jw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=new Map,tE=new Map,td=new Map;function Um(i,e){try{i.container.addComponent(e)}catch(t){Tr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function no(i){const e=i.name;if(td.has(e))return Tr.debug(`There were multiple attempts to register component ${e}.`),!1;td.set(e,i);for(const t of xu.values())Um(t,i);for(const t of tE.values())Um(t,i);return!0}function Sd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function _r(i){return i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},si=new Fa("app","Firebase",nE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ki("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw si.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=Zw;function my(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ed,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw si.create("bad-app-name",{appName:String(o)});if(t||(t=hy()),!t)throw si.create("no-options");const u=xu.get(o);if(u){if(Pu(t,u.options)&&Pu(s,u.config))return u;throw si.create("duplicate-app",{appName:o})}const h=new uw(o);for(const g of td.values())h.addComponent(g);const m=new rE(t,s,h);return xu.set(o,m),m}function gy(i=ed){const e=xu.get(i);if(!e&&i===ed&&hy())return my();if(!e)throw si.create("no-app",{appName:i});return e}function oi(i,e,t){var s;let o=(s=eE[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tr.warn(m.join(" "));return}no(new Ki(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE="firebase-heartbeat-database",sE=1,ka="firebase-heartbeat-store";let Bh=null;function yy(){return Bh||(Bh=Tw(iE,sE,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(ka)}catch(t){console.warn(t)}}}}).catch(i=>{throw si.create("idb-open",{originalErrorMessage:i.message})})),Bh}async function oE(i){try{const t=(await yy()).transaction(ka),s=await t.objectStore(ka).get(_y(i));return await t.done,s}catch(e){if(e instanceof Rr)Tr.warn(e.message);else{const t=si.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tr.warn(t.message)}}}async function jm(i,e){try{const s=(await yy()).transaction(ka,"readwrite");await s.objectStore(ka).put(e,_y(i)),await s.done}catch(t){if(t instanceof Rr)Tr.warn(t.message);else{const s=si.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Tr.warn(s.message)}}}function _y(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE=1024,lE=720*60*60*1e3;class uE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new hE(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=zm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const m=new Date(h.date).valueOf();return Date.now()-m<=lE}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Tr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=zm(),{heartbeatsToSend:s,unsentEntries:o}=cE(this._heartbeatsCache.heartbeats),u=Cu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Tr.warn(t),""}}}function zm(){return new Date().toISOString().substring(0,10)}function cE(i,e=aE){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Bm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Bm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class hE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return X0()?J0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await oE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return jm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return jm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Bm(i){return Cu(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(i){no(new Ki("platform-logger",e=>new Aw(e),"PRIVATE")),no(new Ki("heartbeat",e=>new uE(e),"PRIVATE")),oi(Zh,Fm,i),oi(Zh,Fm,"esm2017"),oi("fire-js","")}dE("");var fE="firebase",pE="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oi(fE,pE,"app");function Ad(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function vy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mE=vy,wy=new Fa("auth","Firebase",vy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=new Td("@firebase/auth");function gE(i,...e){Nu.logLevel<=Ne.WARN&&Nu.warn(`Auth (${ho}): ${i}`,...e)}function vu(i,...e){Nu.logLevel<=Ne.ERROR&&Nu.error(`Auth (${ho}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(i,...e){throw Rd(i,...e)}function Qn(i,...e){return Rd(i,...e)}function Ey(i,e,t){const s=Object.assign(Object.assign({},mE()),{[e]:t});return new Fa("auth","Firebase",s).create(e,{appName:i.name})}function ai(i){return Ey(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rd(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return wy.create(i,...e)}function ve(i,e,...t){if(!i)throw Rd(e,...t)}function vr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw vu(e),new Error(e)}function Ir(i,e){i||vr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function yE(){return $m()==="http:"||$m()==="https:"}function $m(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yE()||K0()||"connection"in navigator)?navigator.onLine:!0}function vE(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ir(t>e,"Short delay should be less than long delay!"),this.isMobile=q0()||G0()}get(){return _E()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(i,e){Ir(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE=new ja(3e4,6e4);function Ji(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function di(i,e,t,s,o={}){return Iy(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Ua(Object.assign({key:i.config.apiKey},h)).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const v=Object.assign({method:e,headers:g},u);return H0()||(v.referrerPolicy="no-referrer"),Ty.fetch()(Sy(i,i.config.apiHost,t,m),v)})}async function Iy(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},wE),e);try{const o=new IE(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw fu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,v]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw fu(i,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw fu(i,"email-already-in-use",h);if(g==="USER_DISABLED")throw fu(i,"user-disabled",h);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Ey(i,E,v);bn(i,E)}}catch(o){if(o instanceof Rr)throw o;bn(i,"network-request-failed",{message:String(o)})}}async function Wu(i,e,t,s,o={}){const u=await di(i,e,t,s,o);return"mfaPendingCredential"in u&&bn(i,"multi-factor-auth-required",{_serverResponse:u}),u}function Sy(i,e,t,s){const o=`${e}${t}?${s}`;return i.config.emulator?kd(i.config,o):`${i.config.apiScheme}://${o}`}function TE(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class IE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Qn(this.auth,"network-request-failed")),EE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Qn(i,e,s);return o.customData._tokenResponse=t,o}function qm(i){return i!==void 0&&i.enterprise!==void 0}class SE{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return TE(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function AE(i,e){return di(i,"GET","/v2/recaptchaConfig",Ji(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RE(i,e){return di(i,"POST","/v1/accounts:delete",e)}async function Ay(i,e){return di(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kE(i,e=!1){const t=st(i),s=await t.getIdToken(e),o=Cd(s);ve(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Ta($h(o.auth_time)),issuedAtTime:Ta($h(o.iat)),expirationTime:Ta($h(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function $h(i){return Number(i)*1e3}function Cd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return vu("JWT malformed, contained fewer than 3 sections"),null;try{const o=uy(t);return o?JSON.parse(o):(vu("Failed to decode base64 JWT payload"),null)}catch(o){return vu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Wm(i){const e=Cd(i);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ca(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Rr&&CE(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function CE({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ta(this.lastLoginAt),this.creationTime=Ta(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Du(i){var e;const t=i.auth,s=await i.getIdToken(),o=await Ca(i,Ay(t,{idToken:s}));ve(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Ry(u.providerUserInfo):[],m=NE(i.providerData,h),g=i.isAnonymous,v=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),E=g?v:!1,k={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new rd(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(i,k)}async function xE(i){const e=st(i);await Du(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function NE(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Ry(i){return i.map(e=>{var{providerId:t}=e,s=Ad(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DE(i,e){const t=await Iy(i,{},async()=>{const s=Ua({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=Sy(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",Ty.fetch()(h,{method:"POST",headers:m,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function VE(i,e){return di(i,"POST","/v2/accounts:revokeToken",Ji(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=Wm(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await DE(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new Js;return s&&(ve(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ve(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ve(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Js,this.toJSON())}_performRefresh(){return vr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(i,e){ve(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class wr{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Ad(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new PE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new rd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Ca(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return kE(this,e)}reload(){return xE(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new wr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Du(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_r(this.auth.app))return Promise.reject(ai(this.auth));const e=await this.getIdToken();return await Ca(this,RE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,g,v,E;const k=(s=t.displayName)!==null&&s!==void 0?s:void 0,D=(o=t.email)!==null&&o!==void 0?o:void 0,B=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,Y=(h=t.photoURL)!==null&&h!==void 0?h:void 0,J=(m=t.tenantId)!==null&&m!==void 0?m:void 0,$=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,we=(v=t.createdAt)!==null&&v!==void 0?v:void 0,ye=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:Ie,emailVerified:Re,isAnonymous:Be,providerData:ke,stsTokenManager:x}=t;ve(Ie&&x,e,"internal-error");const I=Js.fromJSON(this.name,x);ve(typeof Ie=="string",e,"internal-error"),Jr(k,e.name),Jr(D,e.name),ve(typeof Re=="boolean",e,"internal-error"),ve(typeof Be=="boolean",e,"internal-error"),Jr(B,e.name),Jr(Y,e.name),Jr(J,e.name),Jr($,e.name),Jr(we,e.name),Jr(ye,e.name);const A=new wr({uid:Ie,auth:e,email:D,emailVerified:Re,displayName:k,isAnonymous:Be,photoURL:Y,phoneNumber:B,tenantId:J,stsTokenManager:I,createdAt:we,lastLoginAt:ye});return ke&&Array.isArray(ke)&&(A.providerData=ke.map(C=>Object.assign({},C))),$&&(A._redirectEventId=$),A}static async _fromIdTokenResponse(e,t,s=!1){const o=new Js;o.updateFromServerResponse(t);const u=new wr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Du(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ve(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Ry(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new Js;m.updateFromIdToken(s);const g=new wr({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new rd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,v),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=new Map;function Er(i){Ir(i instanceof Function,"Expected a class definition");let e=Hm.get(i);return e?(Ir(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Hm.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ky.type="NONE";const Km=ky;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(i,e,t){return`firebase:${i}:${e}:${t}`}class Zs{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=wu(this.userKey,o.apiKey,u),this.fullPersistenceKey=wu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Zs(Er(Km),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||Er(Km);const h=wu(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const E=await v._get(h);if(E){const k=wr._fromJSON(e,E);v!==u&&(m=k),u=v;break}}catch{}const g=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new Zs(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new Zs(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ny(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vy(e))return"Blackberry";if(Oy(e))return"Webos";if(Py(e))return"Safari";if((e.includes("chrome/")||xy(e))&&!e.includes("edge/"))return"Chrome";if(Dy(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Cy(i=Ut()){return/firefox\//i.test(i)}function Py(i=Ut()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xy(i=Ut()){return/crios\//i.test(i)}function Ny(i=Ut()){return/iemobile/i.test(i)}function Dy(i=Ut()){return/android/i.test(i)}function Vy(i=Ut()){return/blackberry/i.test(i)}function Oy(i=Ut()){return/webos/i.test(i)}function Pd(i=Ut()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function OE(i=Ut()){var e;return Pd(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function LE(){return Q0()&&document.documentMode===10}function Ly(i=Ut()){return Pd(i)||Dy(i)||Oy(i)||Vy(i)||/windows phone/i.test(i)||Ny(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(i,e=[]){let t;switch(i){case"Browser":t=Gm(Ut());break;case"Worker":t=`${Gm(Ut())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ho}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ME(i,e={}){return di(i,"GET","/v2/passwordPolicy",Ji(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=6;class UE{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:FE,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qm(this),this.idTokenSubscription=new Qm(this),this.beforeStateQueue=new bE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Er(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await Zs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ay(this,{idToken:e}),s=await wr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(_r(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Du(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_r(this.app))return Promise.reject(ai(this));const t=e?st(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _r(this.app)?Promise.reject(ai(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _r(this.app)?Promise.reject(ai(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ME(this),t=new UE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fa("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await VE(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Er(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await Zs.create(this,[Er(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=by(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&gE(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function fo(i){return st(i)}class Qm{constructor(e){this.auth=e,this.observer=null,this.addObserver=rw(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zE(i){Hu=i}function My(i){return Hu.loadJS(i)}function BE(){return Hu.recaptchaEnterpriseScript}function $E(){return Hu.gapiScript}function qE(i){return`__${i}${Math.floor(Math.random()*1e6)}`}const WE="recaptcha-enterprise",HE="NO_RECAPTCHA";class KE{constructor(e){this.type=WE,this.auth=fo(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{AE(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const v=new SE(g);return u.tenantId==null?u._agentRecaptchaConfig=v:u._tenantRecaptchaConfigs[u.tenantId]=v,h(v.siteKey)}}).catch(g=>{m(g)})})}function o(u,h,m){const g=window.grecaptcha;qm(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(v=>{h(v)}).catch(()=>{h(HE)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&qm(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=BE();g.length!==0&&(g+=m),My(g).then(()=>{o(m,u,h)}).catch(v=>{h(v)})}}).catch(m=>{h(m)})})}}async function Ym(i,e,t,s=!1){const o=new KE(i);let u;try{u=await o.verify(t)}catch{u=await o.verify(t,!0)}const h=Object.assign({},e);return s?Object.assign(h,{captchaResp:u}):Object.assign(h,{captchaResponse:u}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Xm(i,e,t,s){var o;if(!((o=i._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await Ym(i,e,t,t==="getOobCode");return s(i,u)}else return s(i,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await Ym(i,e,t,t==="getOobCode");return s(i,h)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(i,e){const t=Sd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Pu(u,e??{}))return o;bn(o,"already-initialized")}return t.initialize({options:e})}function QE(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Er);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function YE(i,e,t){const s=fo(i);ve(s._canInitEmulator,s,"emulator-config-failed"),ve(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Fy(e),{host:h,port:m}=XE(e),g=m===null?"":`:${m}`;s.config.emulator={url:`${u}//${h}${g}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),JE()}function Fy(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function XE(i){const e=Fy(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Jm(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Jm(h)}}}function Jm(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function JE(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return vr("not implemented")}_getIdTokenResponse(e){return vr("not implemented")}_linkToIdToken(e,t){return vr("not implemented")}_getReauthenticationResolver(e){return vr("not implemented")}}async function ZE(i,e){return di(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eT(i,e){return Wu(i,"POST","/v1/accounts:signInWithPassword",Ji(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tT(i,e){return Wu(i,"POST","/v1/accounts:signInWithEmailLink",Ji(i,e))}async function nT(i,e){return Wu(i,"POST","/v1/accounts:signInWithEmailLink",Ji(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends xd{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Pa(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Pa(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xm(e,t,"signInWithPassword",eT);case"emailLink":return tT(e,{email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xm(e,s,"signUpPassword",ZE);case"emailLink":return nT(e,{idToken:t,email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(i,e){return Wu(i,"POST","/v1/accounts:signInWithIdp",Ji(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT="http://localhost";class Gi extends xd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Gi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):bn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Ad(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new Gi(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return eo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,eo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,eo(e,t)}buildRequest(){const e={requestUri:rT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ua(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sT(i){const e=ga(ya(i)).link,t=e?ga(ya(e)).deep_link_id:null,s=ga(ya(i)).deep_link_id;return(s?ga(ya(s)).link:null)||s||t||e||i}class Nd{constructor(e){var t,s,o,u,h,m;const g=ga(ya(e)),v=(t=g.apiKey)!==null&&t!==void 0?t:null,E=(s=g.oobCode)!==null&&s!==void 0?s:null,k=iT((o=g.mode)!==null&&o!==void 0?o:null);ve(v&&E&&k,"argument-error"),this.apiKey=v,this.operation=k,this.code=E,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=g.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(m=g.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const t=sT(e);try{return new Nd(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(){this.providerId=po.PROVIDER_ID}static credential(e,t){return Pa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Nd.parseLink(t);return ve(s,"argument-error"),Pa._fromEmailAndCode(e,s.code,s.tenantId)}}po.PROVIDER_ID="password";po.EMAIL_PASSWORD_SIGN_IN_METHOD="password";po.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za extends Uy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends za{constructor(){super("facebook.com")}static credential(e){return Gi._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zr.credential(e.oauthAccessToken)}catch{return null}}}Zr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends za{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Gi._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ei.credential(t,s)}catch{return null}}}ei.GOOGLE_SIGN_IN_METHOD="google.com";ei.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends za{constructor(){super("github.com")}static credential(e){return Gi._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ti.credential(e.oauthAccessToken)}catch{return null}}}ti.GITHUB_SIGN_IN_METHOD="github.com";ti.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends za{constructor(){super("twitter.com")}static credential(e,t){return Gi._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ni.credential(t,s)}catch{return null}}}ni.TWITTER_SIGN_IN_METHOD="twitter.com";ni.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await wr._fromIdTokenResponse(e,s,o),h=Zm(s);return new ro({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Zm(s);return new ro({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Zm(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu extends Rr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Vu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Vu(e,t,s,o)}}function jy(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Vu._fromErrorAndOperation(i,u,e,s):u})}async function oT(i,e,t=!1){const s=await Ca(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return ro._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aT(i,e,t=!1){const{auth:s}=i;if(_r(s.app))return Promise.reject(ai(s));const o="reauthenticate";try{const u=await Ca(i,jy(s,o,e,i),t);ve(u.idToken,s,"internal-error");const h=Cd(u.idToken);ve(h,s,"internal-error");const{sub:m}=h;return ve(i.uid===m,s,"user-mismatch"),ro._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&bn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zy(i,e,t=!1){if(_r(i.app))return Promise.reject(ai(i));const s="signIn",o=await jy(i,s,e),u=await ro._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function lT(i,e){return zy(fo(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uT(i){const e=fo(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function cT(i,e,t){return _r(i.app)?Promise.reject(ai(i)):lT(st(i),po.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&uT(i),s})}function hT(i,e,t,s){return st(i).onIdTokenChanged(e,t,s)}function dT(i,e,t){return st(i).beforeAuthStateChanged(e,t)}function fT(i,e,t,s){return st(i).onAuthStateChanged(e,t,s)}function eg(i){return st(i).signOut()}const Ou="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ou,"1"),this.storage.removeItem(Ou),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT=1e3,mT=10;class $y extends By{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ly(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);LE()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,mT):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},pT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}$y.type="LOCAL";const gT=$y;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy extends By{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}qy.type="SESSION";const Wy=qy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Ku(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),g=await yT(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ku.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const v=Dd("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(k){const D=k;if(D.data.eventId===v)switch(D.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(D.data.response);break;default:clearTimeout(E),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(){return window}function vT(i){Yn().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(){return typeof Yn().WorkerGlobalScope<"u"&&typeof Yn().importScripts=="function"}async function wT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ET(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function TT(){return Hy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky="firebaseLocalStorageDb",IT=1,Lu="firebaseLocalStorage",Gy="fbase_key";class Ba{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Gu(i,e){return i.transaction([Lu],e?"readwrite":"readonly").objectStore(Lu)}function ST(){const i=indexedDB.deleteDatabase(Ky);return new Ba(i).toPromise()}function id(){const i=indexedDB.open(Ky,IT);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Lu,{keyPath:Gy})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Lu)?e(s):(s.close(),await ST(),e(await id()))})})}async function tg(i,e,t){const s=Gu(i,!0).put({[Gy]:e,value:t});return new Ba(s).toPromise()}async function AT(i,e){const t=Gu(i,!1).get(e),s=await new Ba(t).toPromise();return s===void 0?null:s.value}function ng(i,e){const t=Gu(i,!0).delete(e);return new Ba(t).toPromise()}const RT=800,kT=3;class Qy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await id(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>kT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ku._getInstance(TT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await wT(),!this.activeServiceWorker)return;this.sender=new _T(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ET()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await id();return await tg(e,Ou,"1"),await ng(e,Ou),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>tg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>AT(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ng(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Gu(o,!1).getAll();return new Ba(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qy.type="LOCAL";const CT=Qy;new ja(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(i,e){return e?Er(e):(ve(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd extends xd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return eo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return eo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return eo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function xT(i){return zy(i.auth,new Vd(i),i.bypassAuthState)}function NT(i){const{auth:e,user:t}=i;return ve(t,e,"internal-error"),aT(t,new Vd(i),i.bypassAuthState)}async function DT(i){const{auth:e,user:t}=i;return ve(t,e,"internal-error"),oT(t,new Vd(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xT;case"linkViaPopup":case"linkViaRedirect":return DT;case"reauthViaPopup":case"reauthViaRedirect":return NT;default:bn(this.auth,"internal-error")}}resolve(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT=new ja(2e3,1e4);class Xs extends Yy{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Xs.currentPopupAction&&Xs.currentPopupAction.cancel(),Xs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){Ir(this.filter.length===1,"Popup operations only handle one event");const e=Dd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Qn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,VT.get())};e()}}Xs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT="pendingRedirect",Eu=new Map;class LT extends Yy{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Eu.get(this.auth._key());if(!e){try{const s=await bT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Eu.set(this.auth._key(),e)}return this.bypassAuthState||Eu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bT(i,e){const t=UT(e),s=FT(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function MT(i,e){Eu.set(i._key(),e)}function FT(i){return Er(i._redirectPersistence)}function UT(i){return wu(OT,i.config.apiKey,i.name)}async function jT(i,e,t=!1){if(_r(i.app))return Promise.reject(ai(i));const s=fo(i),o=PT(s,e),h=await new LT(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=600*1e3;class BT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$T(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Xy(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Qn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zT&&this.cachedEventUids.clear(),this.cachedEventUids.has(rg(e))}saveEventToCache(e){this.cachedEventUids.add(rg(e)),this.lastProcessedEventTime=Date.now()}}function rg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Xy({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $T(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xy(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qT(i,e={}){return di(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HT=/^https?/;async function KT(i){if(i.config.emulator)return;const{authorizedDomains:e}=await qT(i);for(const t of e)try{if(GT(t))return}catch{}bn(i,"unauthorized-domain")}function GT(i){const e=nd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!HT.test(t))return!1;if(WT.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT=new ja(3e4,6e4);function ig(){const i=Yn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function YT(i){return new Promise((e,t)=>{var s,o,u;function h(){ig(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ig(),t(Qn(i,"network-request-failed"))},timeout:QT.get()})}if(!((o=(s=Yn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Yn().gapi)===null||u===void 0)&&u.load)h();else{const m=qE("iframefcb");return Yn()[m]=()=>{gapi.load?h():t(Qn(i,"network-request-failed"))},My(`${$E()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Tu=null,e})}let Tu=null;function XT(i){return Tu=Tu||YT(i),Tu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT=new ja(5e3,15e3),ZT="__/auth/iframe",eI="emulator/auth/iframe",tI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rI(i){const e=i.config;ve(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?kd(e,eI):`https://${i.config.authDomain}/${ZT}`,s={apiKey:e.apiKey,appName:i.name,v:ho},o=nI.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ua(s).slice(1)}`}async function iI(i){const e=await XT(i),t=Yn().gapi;return ve(t,i,"internal-error"),e.open({where:document.body,url:rI(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tI,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Qn(i,"network-request-failed"),m=Yn().setTimeout(()=>{u(h)},JT.get());function g(){Yn().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oI=500,aI=600,lI="_blank",uI="http://localhost";class sg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cI(i,e,t,s=oI,o=aI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},sI),{width:s.toString(),height:o.toString(),top:u,left:h}),v=Ut().toLowerCase();t&&(m=xy(v)?lI:t),Cy(v)&&(e=e||uI,g.scrollbars="yes");const E=Object.entries(g).reduce((D,[B,Y])=>`${D}${B}=${Y},`,"");if(OE(v)&&m!=="_self")return hI(e||"",m),new sg(null);const k=window.open(e||"",m,E);ve(k,i,"popup-blocked");try{k.focus()}catch{}return new sg(k)}function hI(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI="__/auth/handler",fI="emulator/auth/handler",pI=encodeURIComponent("fac");async function og(i,e,t,s,o,u){ve(i.config.authDomain,i,"auth-domain-config-required"),ve(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:ho,eventId:o};if(e instanceof Uy){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",nw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,k]of Object.entries({}))h[E]=k}if(e instanceof za){const E=e.getScopes().filter(k=>k!=="");E.length>0&&(h.scopes=E.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const g=await i._getAppCheckToken(),v=g?`#${pI}=${encodeURIComponent(g)}`:"";return`${mI(i)}?${Ua(m).slice(1)}${v}`}function mI({config:i}){return i.emulator?kd(i,fI):`https://${i.authDomain}/${dI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh="webStorageSupport";class gI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wy,this._completeRedirectFn=jT,this._overrideRedirectResult=MT}async _openPopup(e,t,s,o){var u;Ir((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await og(e,t,s,nd(),o);return cI(e,h,Dd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await og(e,t,s,nd(),o);return vT(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Ir(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await iI(e),s=new BT(e);return t.register("authEvent",o=>(ve(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(qh,{type:qh},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[qh];h!==void 0&&t(!!h),bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=KT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ly()||Py()||Pd()}}const yI=gI;var ag="@firebase/auth",lg="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wI(i){no(new Ki("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;ve(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:by(i)},v=new jE(s,o,u,g);return QE(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),no(new Ki("auth-internal",e=>{const t=fo(e.getProvider("auth").getImmediate());return(s=>new _I(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),oi(ag,lg,vI(i)),oi(ag,lg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=300,TI=dy("authIdTokenMaxAge")||EI;let ug=null;const II=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>TI)return;const o=t==null?void 0:t.token;ug!==o&&(ug=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function SI(i=gy()){const e=Sd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=GE(i,{popupRedirectResolver:yI,persistence:[CT,gT,Wy]}),s=dy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=II(u.toString());dT(t,h,()=>h(t.currentUser)),hT(t,m=>h(m))}}const o=cy("auth");return o&&YE(t,`http://${o}`),t}function AI(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}zE({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Qn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",AI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wI("Browser");var cg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qi,Jy;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,I){function A(){}A.prototype=I.prototype,x.D=I.prototype,x.prototype=new A,x.prototype.constructor=x,x.C=function(C,N,O){for(var S=Array(arguments.length-2),Xe=2;Xe<arguments.length;Xe++)S[Xe-2]=arguments[Xe];return I.prototype[N].apply(C,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,I,A){A||(A=0);var C=Array(16);if(typeof I=="string")for(var N=0;16>N;++N)C[N]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(N=0;16>N;++N)C[N]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=x.g[0],A=x.g[1],N=x.g[2];var O=x.g[3],S=I+(O^A&(N^O))+C[0]+3614090360&4294967295;I=A+(S<<7&4294967295|S>>>25),S=O+(N^I&(A^N))+C[1]+3905402710&4294967295,O=I+(S<<12&4294967295|S>>>20),S=N+(A^O&(I^A))+C[2]+606105819&4294967295,N=O+(S<<17&4294967295|S>>>15),S=A+(I^N&(O^I))+C[3]+3250441966&4294967295,A=N+(S<<22&4294967295|S>>>10),S=I+(O^A&(N^O))+C[4]+4118548399&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(N^I&(A^N))+C[5]+1200080426&4294967295,O=I+(S<<12&4294967295|S>>>20),S=N+(A^O&(I^A))+C[6]+2821735955&4294967295,N=O+(S<<17&4294967295|S>>>15),S=A+(I^N&(O^I))+C[7]+4249261313&4294967295,A=N+(S<<22&4294967295|S>>>10),S=I+(O^A&(N^O))+C[8]+1770035416&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(N^I&(A^N))+C[9]+2336552879&4294967295,O=I+(S<<12&4294967295|S>>>20),S=N+(A^O&(I^A))+C[10]+4294925233&4294967295,N=O+(S<<17&4294967295|S>>>15),S=A+(I^N&(O^I))+C[11]+2304563134&4294967295,A=N+(S<<22&4294967295|S>>>10),S=I+(O^A&(N^O))+C[12]+1804603682&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(N^I&(A^N))+C[13]+4254626195&4294967295,O=I+(S<<12&4294967295|S>>>20),S=N+(A^O&(I^A))+C[14]+2792965006&4294967295,N=O+(S<<17&4294967295|S>>>15),S=A+(I^N&(O^I))+C[15]+1236535329&4294967295,A=N+(S<<22&4294967295|S>>>10),S=I+(N^O&(A^N))+C[1]+4129170786&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^N&(I^A))+C[6]+3225465664&4294967295,O=I+(S<<9&4294967295|S>>>23),S=N+(I^A&(O^I))+C[11]+643717713&4294967295,N=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(N^O))+C[0]+3921069994&4294967295,A=N+(S<<20&4294967295|S>>>12),S=I+(N^O&(A^N))+C[5]+3593408605&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^N&(I^A))+C[10]+38016083&4294967295,O=I+(S<<9&4294967295|S>>>23),S=N+(I^A&(O^I))+C[15]+3634488961&4294967295,N=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(N^O))+C[4]+3889429448&4294967295,A=N+(S<<20&4294967295|S>>>12),S=I+(N^O&(A^N))+C[9]+568446438&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^N&(I^A))+C[14]+3275163606&4294967295,O=I+(S<<9&4294967295|S>>>23),S=N+(I^A&(O^I))+C[3]+4107603335&4294967295,N=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(N^O))+C[8]+1163531501&4294967295,A=N+(S<<20&4294967295|S>>>12),S=I+(N^O&(A^N))+C[13]+2850285829&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^N&(I^A))+C[2]+4243563512&4294967295,O=I+(S<<9&4294967295|S>>>23),S=N+(I^A&(O^I))+C[7]+1735328473&4294967295,N=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(N^O))+C[12]+2368359562&4294967295,A=N+(S<<20&4294967295|S>>>12),S=I+(A^N^O)+C[5]+4294588738&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^N)+C[8]+2272392833&4294967295,O=I+(S<<11&4294967295|S>>>21),S=N+(O^I^A)+C[11]+1839030562&4294967295,N=O+(S<<16&4294967295|S>>>16),S=A+(N^O^I)+C[14]+4259657740&4294967295,A=N+(S<<23&4294967295|S>>>9),S=I+(A^N^O)+C[1]+2763975236&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^N)+C[4]+1272893353&4294967295,O=I+(S<<11&4294967295|S>>>21),S=N+(O^I^A)+C[7]+4139469664&4294967295,N=O+(S<<16&4294967295|S>>>16),S=A+(N^O^I)+C[10]+3200236656&4294967295,A=N+(S<<23&4294967295|S>>>9),S=I+(A^N^O)+C[13]+681279174&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^N)+C[0]+3936430074&4294967295,O=I+(S<<11&4294967295|S>>>21),S=N+(O^I^A)+C[3]+3572445317&4294967295,N=O+(S<<16&4294967295|S>>>16),S=A+(N^O^I)+C[6]+76029189&4294967295,A=N+(S<<23&4294967295|S>>>9),S=I+(A^N^O)+C[9]+3654602809&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^N)+C[12]+3873151461&4294967295,O=I+(S<<11&4294967295|S>>>21),S=N+(O^I^A)+C[15]+530742520&4294967295,N=O+(S<<16&4294967295|S>>>16),S=A+(N^O^I)+C[2]+3299628645&4294967295,A=N+(S<<23&4294967295|S>>>9),S=I+(N^(A|~O))+C[0]+4096336452&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~N))+C[7]+1126891415&4294967295,O=I+(S<<10&4294967295|S>>>22),S=N+(I^(O|~A))+C[14]+2878612391&4294967295,N=O+(S<<15&4294967295|S>>>17),S=A+(O^(N|~I))+C[5]+4237533241&4294967295,A=N+(S<<21&4294967295|S>>>11),S=I+(N^(A|~O))+C[12]+1700485571&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~N))+C[3]+2399980690&4294967295,O=I+(S<<10&4294967295|S>>>22),S=N+(I^(O|~A))+C[10]+4293915773&4294967295,N=O+(S<<15&4294967295|S>>>17),S=A+(O^(N|~I))+C[1]+2240044497&4294967295,A=N+(S<<21&4294967295|S>>>11),S=I+(N^(A|~O))+C[8]+1873313359&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~N))+C[15]+4264355552&4294967295,O=I+(S<<10&4294967295|S>>>22),S=N+(I^(O|~A))+C[6]+2734768916&4294967295,N=O+(S<<15&4294967295|S>>>17),S=A+(O^(N|~I))+C[13]+1309151649&4294967295,A=N+(S<<21&4294967295|S>>>11),S=I+(N^(A|~O))+C[4]+4149444226&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~N))+C[11]+3174756917&4294967295,O=I+(S<<10&4294967295|S>>>22),S=N+(I^(O|~A))+C[2]+718787259&4294967295,N=O+(S<<15&4294967295|S>>>17),S=A+(O^(N|~I))+C[9]+3951481745&4294967295,x.g[0]=x.g[0]+I&4294967295,x.g[1]=x.g[1]+(N+(S<<21&4294967295|S>>>11))&4294967295,x.g[2]=x.g[2]+N&4294967295,x.g[3]=x.g[3]+O&4294967295}s.prototype.u=function(x,I){I===void 0&&(I=x.length);for(var A=I-this.blockSize,C=this.B,N=this.h,O=0;O<I;){if(N==0)for(;O<=A;)o(this,x,O),O+=this.blockSize;if(typeof x=="string"){for(;O<I;)if(C[N++]=x.charCodeAt(O++),N==this.blockSize){o(this,C),N=0;break}}else for(;O<I;)if(C[N++]=x[O++],N==this.blockSize){o(this,C),N=0;break}}this.h=N,this.o+=I},s.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var I=1;I<x.length-8;++I)x[I]=0;var A=8*this.o;for(I=x.length-8;I<x.length;++I)x[I]=A&255,A/=256;for(this.u(x),x=Array(16),I=A=0;4>I;++I)for(var C=0;32>C;C+=8)x[A++]=this.g[I]>>>C&255;return x};function u(x,I){var A=m;return Object.prototype.hasOwnProperty.call(A,x)?A[x]:A[x]=I(x)}function h(x,I){this.h=I;for(var A=[],C=!0,N=x.length-1;0<=N;N--){var O=x[N]|0;C&&O==I||(A[N]=O,C=!1)}this.g=A}var m={};function g(x){return-128<=x&&128>x?u(x,function(I){return new h([I|0],0>I?-1:0)}):new h([x|0],0>x?-1:0)}function v(x){if(isNaN(x)||!isFinite(x))return k;if(0>x)return $(v(-x));for(var I=[],A=1,C=0;x>=A;C++)I[C]=x/A|0,A*=4294967296;return new h(I,0)}function E(x,I){if(x.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(x.charAt(0)=="-")return $(E(x.substring(1),I));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=v(Math.pow(I,8)),C=k,N=0;N<x.length;N+=8){var O=Math.min(8,x.length-N),S=parseInt(x.substring(N,N+O),I);8>O?(O=v(Math.pow(I,O)),C=C.j(O).add(v(S))):(C=C.j(A),C=C.add(v(S)))}return C}var k=g(0),D=g(1),B=g(16777216);i=h.prototype,i.m=function(){if(J(this))return-$(this).m();for(var x=0,I=1,A=0;A<this.g.length;A++){var C=this.i(A);x+=(0<=C?C:4294967296+C)*I,I*=4294967296}return x},i.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(Y(this))return"0";if(J(this))return"-"+$(this).toString(x);for(var I=v(Math.pow(x,6)),A=this,C="";;){var N=Re(A,I).g;A=we(A,N.j(I));var O=((0<A.g.length?A.g[0]:A.h)>>>0).toString(x);if(A=N,Y(A))return O+C;for(;6>O.length;)O="0"+O;C=O+C}},i.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function Y(x){if(x.h!=0)return!1;for(var I=0;I<x.g.length;I++)if(x.g[I]!=0)return!1;return!0}function J(x){return x.h==-1}i.l=function(x){return x=we(this,x),J(x)?-1:Y(x)?0:1};function $(x){for(var I=x.g.length,A=[],C=0;C<I;C++)A[C]=~x.g[C];return new h(A,~x.h).add(D)}i.abs=function(){return J(this)?$(this):this},i.add=function(x){for(var I=Math.max(this.g.length,x.g.length),A=[],C=0,N=0;N<=I;N++){var O=C+(this.i(N)&65535)+(x.i(N)&65535),S=(O>>>16)+(this.i(N)>>>16)+(x.i(N)>>>16);C=S>>>16,O&=65535,S&=65535,A[N]=S<<16|O}return new h(A,A[A.length-1]&-2147483648?-1:0)};function we(x,I){return x.add($(I))}i.j=function(x){if(Y(this)||Y(x))return k;if(J(this))return J(x)?$(this).j($(x)):$($(this).j(x));if(J(x))return $(this.j($(x)));if(0>this.l(B)&&0>x.l(B))return v(this.m()*x.m());for(var I=this.g.length+x.g.length,A=[],C=0;C<2*I;C++)A[C]=0;for(C=0;C<this.g.length;C++)for(var N=0;N<x.g.length;N++){var O=this.i(C)>>>16,S=this.i(C)&65535,Xe=x.i(N)>>>16,_t=x.i(N)&65535;A[2*C+2*N]+=S*_t,ye(A,2*C+2*N),A[2*C+2*N+1]+=O*_t,ye(A,2*C+2*N+1),A[2*C+2*N+1]+=S*Xe,ye(A,2*C+2*N+1),A[2*C+2*N+2]+=O*Xe,ye(A,2*C+2*N+2)}for(C=0;C<I;C++)A[C]=A[2*C+1]<<16|A[2*C];for(C=I;C<2*I;C++)A[C]=0;return new h(A,0)};function ye(x,I){for(;(x[I]&65535)!=x[I];)x[I+1]+=x[I]>>>16,x[I]&=65535,I++}function Ie(x,I){this.g=x,this.h=I}function Re(x,I){if(Y(I))throw Error("division by zero");if(Y(x))return new Ie(k,k);if(J(x))return I=Re($(x),I),new Ie($(I.g),$(I.h));if(J(I))return I=Re(x,$(I)),new Ie($(I.g),I.h);if(30<x.g.length){if(J(x)||J(I))throw Error("slowDivide_ only works with positive integers.");for(var A=D,C=I;0>=C.l(x);)A=Be(A),C=Be(C);var N=ke(A,1),O=ke(C,1);for(C=ke(C,2),A=ke(A,2);!Y(C);){var S=O.add(C);0>=S.l(x)&&(N=N.add(A),O=S),C=ke(C,1),A=ke(A,1)}return I=we(x,N.j(I)),new Ie(N,I)}for(N=k;0<=x.l(I);){for(A=Math.max(1,Math.floor(x.m()/I.m())),C=Math.ceil(Math.log(A)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),O=v(A),S=O.j(I);J(S)||0<S.l(x);)A-=C,O=v(A),S=O.j(I);Y(O)&&(O=D),N=N.add(O),x=we(x,S)}return new Ie(N,x)}i.A=function(x){return Re(this,x).h},i.and=function(x){for(var I=Math.max(this.g.length,x.g.length),A=[],C=0;C<I;C++)A[C]=this.i(C)&x.i(C);return new h(A,this.h&x.h)},i.or=function(x){for(var I=Math.max(this.g.length,x.g.length),A=[],C=0;C<I;C++)A[C]=this.i(C)|x.i(C);return new h(A,this.h|x.h)},i.xor=function(x){for(var I=Math.max(this.g.length,x.g.length),A=[],C=0;C<I;C++)A[C]=this.i(C)^x.i(C);return new h(A,this.h^x.h)};function Be(x){for(var I=x.g.length+1,A=[],C=0;C<I;C++)A[C]=x.i(C)<<1|x.i(C-1)>>>31;return new h(A,x.h)}function ke(x,I){var A=I>>5;I%=32;for(var C=x.g.length-A,N=[],O=0;O<C;O++)N[O]=0<I?x.i(O+A)>>>I|x.i(O+A+1)<<32-I:x.i(O+A);return new h(N,x.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Jy=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=E,qi=h}).apply(typeof cg<"u"?cg:typeof self<"u"?self:typeof window<"u"?window:{});var pu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zy,_a,e_,Iu,sd,t_,n_,r_;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,y){return l==Array.prototype||l==Object.prototype||(l[f]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof pu=="object"&&pu];for(var f=0;f<l.length;++f){var y=l[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var y=s;l=l.split(".");for(var w=0;w<l.length-1;w++){var b=l[w];if(!(b in y))break e;y=y[b]}l=l[l.length-1],w=y[l],f=f(w),f!=w&&f!=null&&e(y,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var y=0,w=!1,b={next:function(){if(!w&&y<l.length){var j=y++;return{value:f(j,l[j]),done:!1}}return w=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function g(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function v(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function E(l,f,y){return l.call.apply(l.bind,arguments)}function k(l,f,y){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,w),l.apply(f,b)}}return function(){return l.apply(f,arguments)}}function D(l,f,y){return D=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:k,D.apply(null,arguments)}function B(l,f){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function Y(l,f){function y(){}y.prototype=f.prototype,l.aa=f.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(w,b,j){for(var Z=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)Z[Fe-2]=arguments[Fe];return f.prototype[b].apply(w,Z)}}function J(l){const f=l.length;if(0<f){const y=Array(f);for(let w=0;w<f;w++)y[w]=l[w];return y}return[]}function $(l,f){for(let y=1;y<arguments.length;y++){const w=arguments[y];if(g(w)){const b=l.length||0,j=w.length||0;l.length=b+j;for(let Z=0;Z<j;Z++)l[b+Z]=w[Z]}else l.push(w)}}class we{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function ye(l){return/^[\s\xa0]*$/.test(l)}function Ie(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function Re(l){return Re[" "](l),l}Re[" "]=function(){};var Be=Ie().indexOf("Gecko")!=-1&&!(Ie().toLowerCase().indexOf("webkit")!=-1&&Ie().indexOf("Edge")==-1)&&!(Ie().indexOf("Trident")!=-1||Ie().indexOf("MSIE")!=-1)&&Ie().indexOf("Edge")==-1;function ke(l,f,y){for(const w in l)f.call(y,l[w],w,l)}function x(l,f){for(const y in l)f.call(void 0,l[y],y,l)}function I(l){const f={};for(const y in l)f[y]=l[y];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,f){let y,w;for(let b=1;b<arguments.length;b++){w=arguments[b];for(y in w)l[y]=w[y];for(let j=0;j<A.length;j++)y=A[j],Object.prototype.hasOwnProperty.call(w,y)&&(l[y]=w[y])}}function N(l){var f=1;l=l.split(":");const y=[];for(;0<f&&l.length;)y.push(l.shift()),f--;return l.length&&y.push(l.join(":")),y}function O(l){m.setTimeout(()=>{throw l},0)}function S(){var l=de;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class Xe{constructor(){this.h=this.g=null}add(f,y){const w=_t.get();w.set(f,y),this.h?this.h.next=w:this.g=w,this.h=w}}var _t=new we(()=>new ht,l=>l.reset());class ht{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let De,ee=!1,de=new Xe,ne=()=>{const l=m.Promise.resolve(void 0);De=()=>{l.then(V)}};var V=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(y){O(y)}var f=_t;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}ee=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function oe(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}oe.prototype.h=function(){this.defaultPrevented=!0};var z=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};m.addEventListener("test",y,f),m.removeEventListener("test",y,f)}catch{}return l})();function te(l,f){if(oe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(Be){e:{try{Re(f.nodeName);var b=!0;break e}catch{}b=!1}b||(f=null)}}else y=="mouseover"?f=l.fromElement:y=="mouseout"&&(f=l.toElement);this.relatedTarget=f,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:ae[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&te.aa.h.call(this)}}Y(te,oe);var ae={2:"touch",3:"pen",4:"mouse"};te.prototype.h=function(){te.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var _e="closure_listenable_"+(1e6*Math.random()|0),pe=0;function je(l,f,y,w,b){this.listener=l,this.proxy=null,this.src=f,this.type=y,this.capture=!!w,this.ha=b,this.key=++pe,this.da=this.fa=!1}function ot(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function er(l){this.src=l,this.g={},this.h=0}er.prototype.add=function(l,f,y,w,b){var j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);var Z=kr(l,f,w,b);return-1<Z?(f=l[Z],y||(f.fa=!1)):(f=new je(f,this.src,j,!!w,b),f.fa=y,l.push(f)),f};function ns(l,f){var y=f.type;if(y in l.g){var w=l.g[y],b=Array.prototype.indexOf.call(w,f,void 0),j;(j=0<=b)&&Array.prototype.splice.call(w,b,1),j&&(ot(f),l.g[y].length==0&&(delete l.g[y],l.h--))}}function kr(l,f,y,w){for(var b=0;b<l.length;++b){var j=l[b];if(!j.da&&j.listener==f&&j.capture==!!y&&j.ha==w)return b}return-1}var pi="closure_lm_"+(1e6*Math.random()|0),rs={};function vo(l,f,y,w,b){if(Array.isArray(f)){for(var j=0;j<f.length;j++)vo(l,f[j],y,w,b);return null}return y=To(y),l&&l[_e]?l.K(f,y,v(w)?!!w.capture:!1,b):wo(l,f,y,!1,w,b)}function wo(l,f,y,w,b,j){if(!f)throw Error("Invalid event type");var Z=v(b)?!!b.capture:!!b,Fe=ss(l);if(Fe||(l[pi]=Fe=new er(l)),y=Fe.add(f,y,w,Z,j),y.proxy)return y;if(w=Xa(),y.proxy=w,w.src=l,w.listener=y,l.addEventListener)z||(b=Z),b===void 0&&(b=!1),l.addEventListener(f.toString(),w,b);else if(l.attachEvent)l.attachEvent(nr(f.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Xa(){function l(y){return f.call(l.src,l.listener,y)}const f=Eo;return l}function is(l,f,y,w,b){if(Array.isArray(f))for(var j=0;j<f.length;j++)is(l,f[j],y,w,b);else w=v(w)?!!w.capture:!!w,y=To(y),l&&l[_e]?(l=l.i,f=String(f).toString(),f in l.g&&(j=l.g[f],y=kr(j,y,w,b),-1<y&&(ot(j[y]),Array.prototype.splice.call(j,y,1),j.length==0&&(delete l.g[f],l.h--)))):l&&(l=ss(l))&&(f=l.g[f.toString()],l=-1,f&&(l=kr(f,y,w,b)),(y=-1<l?f[l]:null)&&tr(y))}function tr(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[_e])ns(f.i,l);else{var y=l.type,w=l.proxy;f.removeEventListener?f.removeEventListener(y,w,l.capture):f.detachEvent?f.detachEvent(nr(y),w):f.addListener&&f.removeListener&&f.removeListener(w),(y=ss(f))?(ns(y,l),y.h==0&&(y.src=null,f[pi]=null)):ot(l)}}}function nr(l){return l in rs?rs[l]:rs[l]="on"+l}function Eo(l,f){if(l.da)l=!0;else{f=new te(f,this);var y=l.listener,w=l.ha||l.src;l.fa&&tr(l),l=y.call(w,f)}return l}function ss(l){return l=l[pi],l instanceof er?l:null}var os="__closure_events_fn_"+(1e9*Math.random()>>>0);function To(l){return typeof l=="function"?l:(l[os]||(l[os]=function(f){return l.handleEvent(f)}),l[os])}function dt(){q.call(this),this.i=new er(this),this.M=this,this.F=null}Y(dt,q),dt.prototype[_e]=!0,dt.prototype.removeEventListener=function(l,f,y,w){is(this,l,f,y,w)};function ft(l,f){var y,w=l.F;if(w)for(y=[];w;w=w.F)y.push(w);if(l=l.M,w=f.type||f,typeof f=="string")f=new oe(f,l);else if(f instanceof oe)f.target=f.target||l;else{var b=f;f=new oe(w,l),C(f,b)}if(b=!0,y)for(var j=y.length-1;0<=j;j--){var Z=f.g=y[j];b=rr(Z,w,!0,f)&&b}if(Z=f.g=l,b=rr(Z,w,!0,f)&&b,b=rr(Z,w,!1,f)&&b,y)for(j=0;j<y.length;j++)Z=f.g=y[j],b=rr(Z,w,!1,f)&&b}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var y=l.g[f],w=0;w<y.length;w++)ot(y[w]);delete l.g[f],l.h--}}this.F=null},dt.prototype.K=function(l,f,y,w){return this.i.add(String(l),f,!1,y,w)},dt.prototype.L=function(l,f,y,w){return this.i.add(String(l),f,!0,y,w)};function rr(l,f,y,w){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var b=!0,j=0;j<f.length;++j){var Z=f[j];if(Z&&!Z.da&&Z.capture==y){var Fe=Z.listener,pt=Z.ha||Z.src;Z.fa&&ns(l.i,Z),b=Fe.call(pt,w)!==!1&&b}}return b&&!w.defaultPrevented}function Io(l,f,y){if(typeof l=="function")y&&(l=D(l,y));else if(l&&typeof l.handleEvent=="function")l=D(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function Cr(l){l.g=Io(()=>{l.g=null,l.i&&(l.i=!1,Cr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class mi extends q{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Cr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gi(l){q.call(this),this.h=l,this.g={}}Y(gi,q);var So=[];function Ao(l){ke(l.g,function(f,y){this.g.hasOwnProperty(y)&&tr(f)},l),l.g={}}gi.prototype.N=function(){gi.aa.N.call(this),Ao(this)},gi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ro=m.JSON.stringify,ko=m.JSON.parse,Co=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function yi(){}yi.prototype.h=null;function as(l){return l.h||(l.h=l.i())}function ls(){}var cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fn(){oe.call(this,"d")}Y(Fn,oe);function us(){oe.call(this,"c")}Y(us,oe);var Un={},Po=null;function _i(){return Po=Po||new dt}Un.La="serverreachability";function xo(l){oe.call(this,Un.La,l)}Y(xo,oe);function ir(l){const f=_i();ft(f,new xo(f))}Un.STAT_EVENT="statevent";function No(l,f){oe.call(this,Un.STAT_EVENT,l),this.stat=f}Y(No,oe);function nt(l){const f=_i();ft(f,new No(f,l))}Un.Ma="timingevent";function cs(l,f){oe.call(this,Un.Ma,l),this.size=f}Y(cs,oe);function En(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function vi(){this.g=!0}vi.prototype.xa=function(){this.g=!1};function wi(l,f,y,w,b,j){l.info(function(){if(l.g)if(j)for(var Z="",Fe=j.split("&"),pt=0;pt<Fe.length;pt++){var Ve=Fe[pt].split("=");if(1<Ve.length){var vt=Ve[0];Ve=Ve[1];var at=vt.split("_");Z=2<=at.length&&at[1]=="type"?Z+(vt+"="+Ve+"&"):Z+(vt+"=redacted&")}}else Z=null;else Z=j;return"XMLHTTP REQ ("+w+") [attempt "+b+"]: "+f+`
`+y+`
`+Z})}function hs(l,f,y,w,b,j,Z){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+b+"]: "+f+`
`+y+`
`+j+" "+Z})}function Tn(l,f,y,w){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+ac(l,y)+(w?" "+w:"")})}function Do(l,f){l.info(function(){return"TIMEOUT: "+f})}vi.prototype.info=function(){};function ac(l,f){if(!l.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var w=y[l];if(!(2>w.length)){var b=w[1];if(Array.isArray(b)&&!(1>b.length)){var j=b[0];if(j!="noop"&&j!="stop"&&j!="close")for(var Z=1;Z<b.length;Z++)b[Z]=""}}}}return Ro(y)}catch{return f}}var ds={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ja={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},In;function Ei(){}Y(Ei,yi),Ei.prototype.g=function(){return new XMLHttpRequest},Ei.prototype.i=function(){return{}},In=new Ei;function Sn(l,f,y,w){this.j=l,this.i=f,this.l=y,this.R=w||1,this.U=new gi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Za}function Za(){this.i=null,this.g="",this.h=!1}var Vo={},fs={};function ps(l,f,y){l.L=1,l.v=Vr(nn(f)),l.m=y,l.P=!0,Oo(l,null)}function Oo(l,f){l.F=Date.now(),qe(l),l.A=nn(l.v);var y=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),Lr(y.i,"t",w),l.C=0,y=l.j.J,l.h=new Za,l.g=yl(l.j,y?f:null,!l.m),0<l.O&&(l.M=new mi(D(l.Y,l,l.g),l.O)),f=l.U,y=l.g,w=l.ca;var b="readystatechange";Array.isArray(b)||(b&&(So[0]=b.toString()),b=So);for(var j=0;j<b.length;j++){var Z=vo(y,b[j],w||f.handleEvent,!1,f.h||f);if(!Z)break;f.g[Z.key]=Z}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),ir(),wi(l.i,l.u,l.A,l.l,l.R,l.m)}Sn.prototype.ca=function(l){l=l.target;const f=this.M;f&&Wt(l)==3?f.j():this.Y(l)},Sn.prototype.Y=function(l){try{if(l==this.g)e:{const at=Wt(this.g);var f=this.g.Ba();const fn=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||jo(this.g)))){this.J||at!=4||f==7||(f==8||0>=fn?ir(3):ir(2)),Ti(this);var y=this.g.Z();this.X=y;t:if(el(this)){var w=jo(this.g);l="";var b=w.length,j=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hn(this),Pr(this);var Z="";break t}this.h.i=new m.TextDecoder}for(f=0;f<b;f++)this.h.h=!0,l+=this.h.i.decode(w[f],{stream:!(j&&f==b-1)});w.length=0,this.h.g+=l,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=y==200,hs(this.i,this.u,this.A,this.l,this.R,at,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,pt=this.g;if((Fe=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ye(Fe)){var Ve=Fe;break t}}Ve=null}if(y=Ve)Tn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Lo(this,y);else{this.o=!1,this.s=3,nt(12),hn(this),Pr(this);break e}}if(this.P){y=!0;let sn;for(;!this.J&&this.C<Z.length;)if(sn=lc(this,Z),sn==fs){at==4&&(this.s=4,nt(14),y=!1),Tn(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==Vo){this.s=4,nt(15),Tn(this.i,this.l,Z,"[Invalid Chunk]"),y=!1;break}else Tn(this.i,this.l,sn,null),Lo(this,sn);if(el(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||Z.length!=0||this.h.h||(this.s=1,nt(16),y=!1),this.o=this.o&&y,!y)Tn(this.i,this.l,Z,"[Invalid Chunked Response]"),hn(this),Pr(this);else if(0<Z.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),Bo(vt),vt.M=!0,nt(11))}}else Tn(this.i,this.l,Z,null),Lo(this,Z);at==4&&hn(this),this.o&&!this.J&&(at==4?As(this.j,this):(this.o=!1,qe(this)))}else ws(this.g),y==400&&0<Z.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),hn(this),Pr(this)}}}catch{}finally{}};function el(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function lc(l,f){var y=l.C,w=f.indexOf(`
`,y);return w==-1?fs:(y=Number(f.substring(y,w)),isNaN(y)?Vo:(w+=1,w+y>f.length?fs:(f=f.slice(w,w+y),l.C=w+y,f)))}Sn.prototype.cancel=function(){this.J=!0,hn(this)};function qe(l){l.S=Date.now()+l.I,tl(l,l.I)}function tl(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=En(D(l.ba,l),f)}function Ti(l){l.B&&(m.clearTimeout(l.B),l.B=null)}Sn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Do(this.i,this.A),this.L!=2&&(ir(),nt(17)),hn(this),this.s=2,Pr(this)):tl(this,this.S-l)};function Pr(l){l.j.G==0||l.J||As(l.j,l)}function hn(l){Ti(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Ao(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Lo(l,f){try{var y=l.j;if(y.G!=0&&(y.g==l||jt(y.h,l))){if(!l.K&&jt(y.h,l)&&y.G==3){try{var w=y.Da.g.parse(f)}catch{w=null}if(Array.isArray(w)&&w.length==3){var b=w;if(b[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)Ss(y),Pn(y);else break e;Is(y),nt(18)}}else y.za=b[1],0<y.za-y.T&&37500>b[2]&&y.F&&y.v==0&&!y.C&&(y.C=En(D(y.Za,y),6e3));if(1>=rl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else ur(y,11)}else if((l.K||y.g==l)&&Ss(y),!ye(f))for(b=y.Da.g.parse(f),f=0;f<b.length;f++){let Ve=b[f];if(y.T=Ve[0],Ve=Ve[1],y.G==2)if(Ve[0]=="c"){y.K=Ve[1],y.ia=Ve[2];const vt=Ve[3];vt!=null&&(y.la=vt,y.j.info("VER="+y.la));const at=Ve[4];at!=null&&(y.Aa=at,y.j.info("SVER="+y.Aa));const fn=Ve[5];fn!=null&&typeof fn=="number"&&0<fn&&(w=1.5*fn,y.L=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const sn=l.g;if(sn){const Pi=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Pi){var j=w.h;j.g||Pi.indexOf("spdy")==-1&&Pi.indexOf("quic")==-1&&Pi.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(bo(j,j.h),j.h=null))}if(w.D){const ks=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;ks&&(w.ya=ks,$e(w.I,w.D,ks))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),w=y;var Z=l;if(w.qa=gl(w,w.J?w.ia:null,w.W),Z.K){il(w.h,Z);var Fe=Z,pt=w.L;pt&&(Fe.I=pt),Fe.B&&(Ti(Fe),qe(Fe)),w.g=Z}else Ci(w);0<y.i.length&&$n(y)}else Ve[0]!="stop"&&Ve[0]!="close"||ur(y,7);else y.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?ur(y,7):At(y):Ve[0]!="noop"&&y.l&&y.l.ta(Ve),y.v=0)}}ir(4)}catch{}}var nl=class{constructor(l,f){this.g=l,this.map=f}};function Ii(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function tn(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function rl(l){return l.h?1:l.g?l.g.size:0}function jt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function bo(l,f){l.g?l.g.add(f):l.h=f}function il(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Ii.prototype.cancel=function(){if(this.i=sl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function sl(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const y of l.g.values())f=f.concat(y.D);return f}return J(l.i)}function ms(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var f=[],y=l.length,w=0;w<y;w++)f.push(l[w]);return f}f=[],y=0;for(w in l)f[y++]=l[w];return f}function gs(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var f=[];l=l.length;for(var y=0;y<l;y++)f.push(y);return f}f=[],y=0;for(const w in l)f[y++]=w;return f}}}function xr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var y=gs(l),w=ms(l),b=w.length,j=0;j<b;j++)f.call(void 0,w[j],y&&y[j],l)}var Si=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uc(l,f){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var w=l[y].indexOf("="),b=null;if(0<=w){var j=l[y].substring(0,w);b=l[y].substring(w+1)}else j=l[y];f(j,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function sr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof sr){this.h=l.h,Ai(this,l.j),this.o=l.o,this.g=l.g,Nr(this,l.s),this.l=l.l;var f=l.i,y=new jn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),Dr(this,y),this.m=l.m}else l&&(f=String(l).match(Si))?(this.h=!1,Ai(this,f[1]||"",!0),this.o=xe(f[2]||""),this.g=xe(f[3]||"",!0),Nr(this,f[4]),this.l=xe(f[5]||"",!0),Dr(this,f[6]||"",!0),this.m=xe(f[7]||"")):(this.h=!1,this.i=new jn(null,this.h))}sr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Or(f,ys,!0),":");var y=this.g;return(y||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Or(f,ys,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Or(y,y.charAt(0)=="/"?ll:al,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Or(y,Mo)),l.join("")};function nn(l){return new sr(l)}function Ai(l,f,y){l.j=y?xe(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Nr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Dr(l,f,y){f instanceof jn?(l.i=f,zn(l.i,l.h)):(y||(f=Or(f,ul)),l.i=new jn(f,l.h))}function $e(l,f,y){l.i.set(f,y)}function Vr(l){return $e(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function xe(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Or(l,f,y){return typeof l=="string"?(l=encodeURI(l).replace(f,ol),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function ol(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ys=/[#\/\?@]/g,al=/[#\?:]/g,ll=/[#\?]/g,ul=/[#\?@]/g,Mo=/#/g;function jn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function St(l){l.g||(l.g=new Map,l.h=0,l.i&&uc(l.i,function(f,y){l.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}i=jn.prototype,i.add=function(l,f){St(this),this.i=null,l=dn(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(f),this.h+=1,this};function An(l,f){St(l),f=dn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Rn(l,f){return St(l),f=dn(l,f),l.g.has(f)}i.forEach=function(l,f){St(this),this.g.forEach(function(y,w){y.forEach(function(b){l.call(f,b,w,this)},this)},this)},i.na=function(){St(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let w=0;w<f.length;w++){const b=l[w];for(let j=0;j<b.length;j++)y.push(f[w])}return y},i.V=function(l){St(this);let f=[];if(typeof l=="string")Rn(this,l)&&(f=f.concat(this.g.get(dn(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)f=f.concat(l[y])}return f},i.set=function(l,f){return St(this),this.i=null,l=dn(this,l),Rn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Lr(l,f,y){An(l,f),0<y.length&&(l.i=null,l.g.set(dn(l,f),J(y)),l.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var w=f[y];const j=encodeURIComponent(String(w)),Z=this.V(w);for(w=0;w<Z.length;w++){var b=j;Z[w]!==""&&(b+="="+encodeURIComponent(String(Z[w]))),l.push(b)}}return this.i=l.join("&")};function dn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function zn(l,f){f&&!l.j&&(St(l),l.i=null,l.g.forEach(function(y,w){var b=w.toLowerCase();w!=b&&(An(this,w),Lr(this,b,y))},l)),l.j=f}function cc(l,f){const y=new vi;if(m.Image){const w=new Image;w.onload=B(qt,y,"TestLoadImage: loaded",!0,f,w),w.onerror=B(qt,y,"TestLoadImage: error",!1,f,w),w.onabort=B(qt,y,"TestLoadImage: abort",!1,f,w),w.ontimeout=B(qt,y,"TestLoadImage: timeout",!1,f,w),m.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else f(!1)}function cl(l,f){const y=new vi,w=new AbortController,b=setTimeout(()=>{w.abort(),qt(y,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:w.signal}).then(j=>{clearTimeout(b),j.ok?qt(y,"TestPingServer: ok",!0,f):qt(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(b),qt(y,"TestPingServer: error",!1,f)})}function qt(l,f,y,w,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),w(y)}catch{}}function hc(){this.g=new Co}function hl(l,f,y){const w=y||"";try{xr(l,function(b,j){let Z=b;v(b)&&(Z=Ro(b)),f.push(w+j+"="+encodeURIComponent(Z))})}catch(b){throw f.push(w+"type="+encodeURIComponent("_badmap")),b}}function or(l){this.l=l.Ub||null,this.j=l.eb||!1}Y(or,yi),or.prototype.g=function(){return new Ri(this.l,this.j)},or.prototype.i=(function(l){return function(){return l}})({});function Ri(l,f){dt.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}Y(Ri,dt),i=Ri.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Cn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,kn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;dl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function dl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?kn(this):Cn(this),this.readyState==3&&dl(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,kn(this))},i.Qa=function(l){this.g&&(this.response=l,kn(this))},i.ga=function(){this.g&&kn(this)};function kn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Cn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=f.next();return l.join(`\r
`)};function Cn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ri.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function ar(l){let f="";return ke(l,function(y,w){f+=w,f+=":",f+=y,f+=`\r
`}),f}function br(l,f,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=ar(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):$e(l,f,y))}function Qe(l){dt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}Y(Qe,dt);var dc=/^https?$/i,Fo=["POST","PUT"];i=Qe.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():In.g(),this.v=this.o?as(this.o):as(In),this.g.onreadystatechange=D(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(j){ki(this,j);return}if(l=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var b in w)y.set(b,w[b]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const j of w.keys())y.set(j,w.get(j));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(j=>j.toLowerCase()=="content-type"),b=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Fo,f,void 0))||w||b||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,Z]of y)this.g.setRequestHeader(j,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vs(this),this.u=!0,this.g.send(l),this.u=!1}catch(j){ki(this,j)}};function ki(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,_s(l),rn(l)}function _s(l){l.A||(l.A=!0,ft(l,"complete"),ft(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ft(this,"complete"),ft(this,"abort"),rn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rn(this,!0)),Qe.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Uo(this):this.bb())},i.bb=function(){Uo(this)};function Uo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Wt(l)!=4||l.Z()!=2)){if(l.u&&Wt(l)==4)Io(l.Ea,0,l);else if(ft(l,"readystatechange"),Wt(l)==4){l.h=!1;try{const Z=l.Z();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var w;if(w=Z===0){var b=String(l.D).match(Si)[1]||null;!b&&m.self&&m.self.location&&(b=m.self.location.protocol.slice(0,-1)),w=!dc.test(b?b.toLowerCase():"")}y=w}if(y)ft(l,"complete"),ft(l,"success");else{l.m=6;try{var j=2<Wt(l)?l.g.statusText:""}catch{j=""}l.l=j+" ["+l.Z()+"]",_s(l)}}finally{rn(l)}}}}function rn(l,f){if(l.g){vs(l);const y=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ft(l,"ready");try{y.onreadystatechange=w}catch{}}}function vs(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function Wt(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),ko(f)}};function jo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function ws(l){const f={};l=(l.g&&2<=Wt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(ye(l[w]))continue;var y=N(l[w]);const b=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const j=f[b]||[];f[b]=j,j.push(y)}x(f,function(w){return w.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bn(l,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||f}function zo(l){this.Aa=0,this.i=[],this.j=new vi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bn("baseRetryDelayMs",5e3,l),this.cb=Bn("retryDelaySeedMs",1e4,l),this.Wa=Bn("forwardChannelMaxRetries",2,l),this.wa=Bn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ii(l&&l.concurrentRequestLimit),this.Da=new hc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=zo.prototype,i.la=8,i.G=1,i.connect=function(l,f,y,w){nt(0),this.W=l,this.H=f||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.I=gl(this,null,this.W),$n(this)};function At(l){if(Es(l),l.G==3){var f=l.U++,y=nn(l.I);if($e(y,"SID",l.K),$e(y,"RID",f),$e(y,"TYPE","terminate"),lr(l,y),f=new Sn(l,l.j,f),f.L=2,f.v=Vr(nn(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=f.v,y=!0),y||(f.g=yl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),qe(f)}ml(l)}function Pn(l){l.g&&(Bo(l),l.g.cancel(),l.g=null)}function Es(l){Pn(l),l.u&&(m.clearTimeout(l.u),l.u=null),Ss(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function $n(l){if(!tn(l.h)&&!l.s){l.s=!0;var f=l.Ga;De||ne(),ee||(De(),ee=!0),de.add(f,l),l.B=0}}function fc(l,f){return rl(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=En(D(l.Ga,l,f),pl(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const b=new Sn(this,this.j,l);let j=this.o;if(this.S&&(j?(j=I(j),C(j,this.S)):j=this.S),this.m!==null||this.O||(b.H=j,j=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(f+=w,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=Mr(this,b,f),y=nn(this.I),$e(y,"RID",l),$e(y,"CVER",22),this.D&&$e(y,"X-HTTP-Session-Id",this.D),lr(this,y),j&&(this.O?f="headers="+encodeURIComponent(String(ar(j)))+"&"+f:this.m&&br(y,this.m,j)),bo(this.h,b),this.Ua&&$e(y,"TYPE","init"),this.P?($e(y,"$req",f),$e(y,"SID","null"),b.T=!0,ps(b,y,null)):ps(b,y,f),this.G=2}}else this.G==3&&(l?Ts(this,l):this.i.length==0||tn(this.h)||Ts(this))};function Ts(l,f){var y;f?y=f.l:y=l.U++;const w=nn(l.I);$e(w,"SID",l.K),$e(w,"RID",y),$e(w,"AID",l.T),lr(l,w),l.m&&l.o&&br(w,l.m,l.o),y=new Sn(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Mr(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),bo(l.h,y),ps(y,w,f)}function lr(l,f){l.H&&ke(l.H,function(y,w){$e(f,w,y)}),l.l&&xr({},function(y,w){$e(f,w,y)})}function Mr(l,f,y){y=Math.min(l.i.length,y);var w=l.l?D(l.l.Na,l.l,l):null;e:{var b=l.i;let j=-1;for(;;){const Z=["count="+y];j==-1?0<y?(j=b[0].g,Z.push("ofs="+j)):j=0:Z.push("ofs="+j);let Fe=!0;for(let pt=0;pt<y;pt++){let Ve=b[pt].g;const vt=b[pt].map;if(Ve-=j,0>Ve)j=Math.max(0,b[pt].g-100),Fe=!1;else try{hl(vt,Z,"req"+Ve+"_")}catch{w&&w(vt)}}if(Fe){w=Z.join("&");break e}}}return l=l.i.splice(0,y),f.D=l,w}function Ci(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;De||ne(),ee||(De(),ee=!0),de.add(f,l),l.v=0}}function Is(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=En(D(l.Fa,l),pl(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,fl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=En(D(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),Pn(this),fl(this))};function Bo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function fl(l){l.g=new Sn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=nn(l.qa);$e(f,"RID","rpc"),$e(f,"SID",l.K),$e(f,"AID",l.T),$e(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&$e(f,"TO",l.ja),$e(f,"TYPE","xmlhttp"),lr(l,f),l.m&&l.o&&br(f,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=Vr(nn(f)),y.m=null,y.P=!0,Oo(y,l)}i.Za=function(){this.C!=null&&(this.C=null,Pn(this),Is(this),nt(19))};function Ss(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function As(l,f){var y=null;if(l.g==f){Ss(l),Bo(l),l.g=null;var w=2}else if(jt(l.h,f))y=f.D,il(l.h,f),w=1;else return;if(l.G!=0){if(f.o)if(w==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var b=l.B;w=_i(),ft(w,new cs(w,y)),$n(l)}else Ci(l);else if(b=f.s,b==3||b==0&&0<f.X||!(w==1&&fc(l,f)||w==2&&Is(l)))switch(y&&0<y.length&&(f=l.h,f.i=f.i.concat(y)),b){case 1:ur(l,5);break;case 4:ur(l,10);break;case 3:ur(l,6);break;default:ur(l,2)}}}function pl(l,f){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*f}function ur(l,f){if(l.j.info("Error code "+f),f==2){var y=D(l.fb,l),w=l.Xa;const b=!w;w=new sr(w||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Ai(w,"https"),Vr(w),b?cc(w.toString(),y):cl(w.toString(),y)}else nt(2);l.G=0,l.l&&l.l.sa(f),ml(l),Es(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function ml(l){if(l.G=0,l.ka=[],l.l){const f=sl(l.h);(f.length!=0||l.i.length!=0)&&($(l.ka,f),$(l.ka,l.i),l.h.i.length=0,J(l.i),l.i.length=0),l.l.ra()}}function gl(l,f,y){var w=y instanceof sr?nn(y):new sr(y);if(w.g!="")f&&(w.g=f+"."+w.g),Nr(w,w.s);else{var b=m.location;w=b.protocol,f=f?f+"."+b.hostname:b.hostname,b=+b.port;var j=new sr(null);w&&Ai(j,w),f&&(j.g=f),b&&Nr(j,b),y&&(j.l=y),w=j}return y=l.D,f=l.ya,y&&f&&$e(w,y,f),$e(w,"VER",l.la),lr(l,w),w}function yl(l,f,y){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Qe(new or({eb:y})):new Qe(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function $o(){}i=$o.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Rs(){}Rs.prototype.g=function(l,f){return new zt(l,f)};function zt(l,f){dt.call(this),this.g=new zo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!ye(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!ye(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new qn(this)}Y(zt,dt),zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){At(this.g)},zt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=Ro(l),l=y);f.i.push(new nl(f.Ya++,l)),f.G==3&&$n(f)},zt.prototype.N=function(){this.g.l=null,delete this.j,At(this.g),delete this.g,zt.aa.N.call(this)};function _l(l){Fn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const y in f){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}Y(_l,Fn);function vl(){us.call(this),this.status=1}Y(vl,us);function qn(l){this.g=l}Y(qn,$o),qn.prototype.ua=function(){ft(this.g,"a")},qn.prototype.ta=function(l){ft(this.g,new _l(l))},qn.prototype.sa=function(l){ft(this.g,new vl)},qn.prototype.ra=function(){ft(this.g,"b")},Rs.prototype.createWebChannel=Rs.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,r_=function(){return new Rs},n_=function(){return _i()},t_=Un,sd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ds.NO_ERROR=0,ds.TIMEOUT=8,ds.HTTP_ERROR=6,Iu=ds,Ja.COMPLETE="complete",e_=Ja,ls.EventType=cn,cn.OPEN="a",cn.CLOSE="b",cn.ERROR="c",cn.MESSAGE="d",dt.prototype.listen=dt.prototype.K,_a=ls,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,Zy=Qe}).apply(typeof pu<"u"?pu:typeof self<"u"?self:typeof window<"u"?window:{});const hg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Mt.UNAUTHENTICATED=new Mt(null),Mt.GOOGLE_CREDENTIALS=new Mt("google-credentials-uid"),Mt.FIRST_PARTY=new Mt("first-party-uid"),Mt.MOCK_USER=new Mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mo="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=new Td("@firebase/firestore");function pa(){return Qi.logLevel}function ce(i,...e){if(Qi.logLevel<=Ne.DEBUG){const t=e.map(Od);Qi.debug(`Firestore (${mo}): ${i}`,...t)}}function Sr(i,...e){if(Qi.logLevel<=Ne.ERROR){const t=e.map(Od);Qi.error(`Firestore (${mo}): ${i}`,...t)}}function io(i,...e){if(Qi.logLevel<=Ne.WARN){const t=e.map(Od);Qi.warn(`Firestore (${mo}): ${i}`,...t)}}function Od(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(i="Unexpected state"){const e=`FIRESTORE (${mo}) INTERNAL ASSERTION FAILED: `+i;throw Sr(e),new Error(e)}function Ue(i,e){i||Te()}function Ae(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends Rr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class RI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Mt.UNAUTHENTICATED)))}shutdown(){}}class kI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class CI{constructor(e){this.t=e,this.currentUser=Mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new Wi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Wi,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=u;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Wi)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ue(typeof s.accessToken=="string"),new i_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new Mt(e)}}class PI{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class xI{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new PI(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Mt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class NI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class DI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Ue(this.o===void 0);const s=u=>{u.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,ce("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ue(typeof t.token=="string"),this.R=t.token,new NI(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=VI(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%e.length))}return s}}function Me(i,e){return i<e?-1:i>e?1:0}function so(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ie(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ie(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ie(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return yt.fromMillis(Date.now())}static fromDate(e){return yt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new yt(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Me(this.nanoseconds,e.nanoseconds):Me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Se(e)}static min(){return new Se(new yt(0,0))}static max(){return new Se(new yt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,t,s){t===void 0?t=0:t>e.length&&Te(),s===void 0?s=e.length-t:s>e.length-t&&Te(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return xa.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof xa?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=e.get(o),h=t.get(o);if(u<h)return-1;if(u>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ge extends xa{construct(e,t,s){return new Ge(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ie(W.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Ge(t)}static emptyPath(){return new Ge([])}}const OI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends xa{construct(e,t,s){return new Pt(e,t,s)}static isValidIdentifier(e){return OI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pt(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ie(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ie(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ie(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ie(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(t)}static emptyPath(){return new Pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(Ge.fromString(e))}static fromName(e){return new fe(Ge.fromString(e).popFirst(5))}static empty(){return new fe(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new Ge(e.slice()))}}function LI(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Se.fromTimestamp(s===1e9?new yt(t+1,0):new yt(t,s));return new ui(o,fe.empty(),e)}function bI(i){return new ui(i.readTime,i.key,-1)}class ui{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ui(Se.min(),fe.empty(),-1)}static max(){return new ui(Se.max(),fe.empty(),-1)}}function MI(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=fe.comparator(i.documentKey,e.documentKey),t!==0?t:Me(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class UI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $a(i){if(i.code!==W.FAILED_PRECONDITION||i.message!==FI)throw i;ce("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):G.reject(t)}static resolve(e){return new G(((t,s)=>{t(e)}))}static reject(e){return new G(((t,s)=>{s(e)}))}static waitFor(e){return new G(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(g=>s(g)))})),h=!0,u===o&&t()}))}static or(e){let t=G.resolve(!1);for(const s of e)t=t.next((o=>o?G.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new G(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const v=g;t(e[v]).next((E=>{h[v]=E,++m,m===u&&s(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new G(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function jI(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function qa(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ld.oe=-1;function Qu(i){return i==null}function bu(i){return i===0&&1/i==-1/0}function zI(i){return typeof i=="number"&&Number.isInteger(i)&&!bu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Zi(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function o_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.comparator=e,this.root=t||Ct.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mu(this.root,e,this.comparator,!1)}getReverseIterator(){return new mu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mu(this.root,e,this.comparator,!0)}}class mu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ct{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Ct.RED,this.left=o??Ct.EMPTY,this.right=u??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Ct(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ct.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(e,t,s,o,u){return this}insert(e,t,s){return new Ct(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new fg(this.data.getIterator())}getIteratorFrom(e){return new fg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new xt(this.comparator);return t.data=e,t}}class fg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new un([])}unionWith(e){let t=new xt(Pt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new un(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return so(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new a_("Invalid base64 string: "+u):u}})(e);return new Nt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new Nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const BI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ci(i){if(Ue(!!i),typeof i=="string"){let e=0;const t=BI.exec(i);if(Ue(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:it(i.seconds),nanos:it(i.nanos)}}function it(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Yi(i){return typeof i=="string"?Nt.fromBase64String(i):Nt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Md(i){const e=i.mapValue.fields.__previous_value__;return bd(e)?Md(e):e}function Na(i){const e=ci(i.mapValue.fields.__local_write_time__.timestampValue);return new yt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e,t,s,o,u,h,m,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=v}}class Da{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Da("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Da&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu={mapValue:{}};function Xi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?bd(i)?4:WI(i)?9007199254740991:qI(i)?10:11:Te()}function Zn(i,e){if(i===e)return!0;const t=Xi(i);if(t!==Xi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Na(i).isEqual(Na(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=ci(o.timestampValue),m=ci(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return Yi(o.bytesValue).isEqual(Yi(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return it(o.geoPointValue.latitude)===it(u.geoPointValue.latitude)&&it(o.geoPointValue.longitude)===it(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return it(o.integerValue)===it(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=it(o.doubleValue),m=it(u.doubleValue);return h===m?bu(h)===bu(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return so(i.arrayValue.values||[],e.arrayValue.values||[],Zn);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(dg(h)!==dg(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!Zn(h[g],m[g])))return!1;return!0})(i,e);default:return Te()}}function Va(i,e){return(i.values||[]).find((t=>Zn(t,e)))!==void 0}function oo(i,e){if(i===e)return 0;const t=Xi(i),s=Xi(e);if(t!==s)return Me(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Me(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=it(u.integerValue||u.doubleValue),g=it(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(i,e);case 3:return pg(i.timestampValue,e.timestampValue);case 4:return pg(Na(i),Na(e));case 5:return Me(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=Yi(u),g=Yi(h);return m.compareTo(g)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),g=h.split("/");for(let v=0;v<m.length&&v<g.length;v++){const E=Me(m[v],g[v]);if(E!==0)return E}return Me(m.length,g.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Me(it(u.latitude),it(h.latitude));return m!==0?m:Me(it(u.longitude),it(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return mg(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var m,g,v,E;const k=u.fields||{},D=h.fields||{},B=(m=k.value)===null||m===void 0?void 0:m.arrayValue,Y=(g=D.value)===null||g===void 0?void 0:g.arrayValue,J=Me(((v=B==null?void 0:B.values)===null||v===void 0?void 0:v.length)||0,((E=Y==null?void 0:Y.values)===null||E===void 0?void 0:E.length)||0);return J!==0?J:mg(B,Y)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===gu.mapValue&&h===gu.mapValue)return 0;if(u===gu.mapValue)return 1;if(h===gu.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),v=h.fields||{},E=Object.keys(v);g.sort(),E.sort();for(let k=0;k<g.length&&k<E.length;++k){const D=Me(g[k],E[k]);if(D!==0)return D;const B=oo(m[g[k]],v[E[k]]);if(B!==0)return B}return Me(g.length,E.length)})(i.mapValue,e.mapValue);default:throw Te()}}function pg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Me(i,e);const t=ci(i),s=ci(e),o=Me(t.seconds,s.seconds);return o!==0?o:Me(t.nanos,s.nanos)}function mg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=oo(t[o],s[o]);if(u)return u}return Me(t.length,s.length)}function ao(i){return od(i)}function od(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=ci(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Yi(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return fe.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=od(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${od(t.fields[h])}`;return o+"}"})(i.mapValue):Te()}function gg(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function ad(i){return!!i&&"integerValue"in i}function Fd(i){return!!i&&"arrayValue"in i}function yg(i){return!!i&&"nullValue"in i}function _g(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Su(i){return!!i&&"mapValue"in i}function qI(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ia(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return Zi(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Ia(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ia(i.arrayValue.values[t]);return e}return Object.assign({},i)}function WI(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Su(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ia(t)}setAll(e){let t=Pt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Ia(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Su(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Zn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Su(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Zi(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new Jt(Ia(this.value))}}function l_(i){const e=[];return Zi(i.fields,((t,s)=>{const o=new Pt([t]);if(Su(s)){const u=l_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new un(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ft(e,0,Se.min(),Se.min(),Se.min(),Jt.empty(),0)}static newFoundDocument(e,t,s,o){return new Ft(e,1,t,Se.min(),s,o,0)}static newNoDocument(e,t){return new Ft(e,2,t,Se.min(),Se.min(),Jt.empty(),0)}static newUnknownDocument(e,t){return new Ft(e,3,t,Se.min(),Se.min(),Jt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,t){this.position=e,this.inclusive=t}}function vg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=fe.comparator(fe.fromName(h.referenceValue),t.key):s=oo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function wg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Zn(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,t="asc"){this.field=e,this.dir=t}}function HI(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{}class ct extends u_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new GI(e,t,s):t==="array-contains"?new XI(e,s):t==="in"?new JI(e,s):t==="not-in"?new ZI(e,s):t==="array-contains-any"?new eS(e,s):new ct(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new QI(e,s):new YI(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(oo(t,this.value)):t!==null&&Xi(this.value)===Xi(t)&&this.matchesComparison(oo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mn extends u_{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Mn(e,t)}matches(e){return c_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function c_(i){return i.op==="and"}function h_(i){return KI(i)&&c_(i)}function KI(i){for(const e of i.filters)if(e instanceof Mn)return!1;return!0}function ld(i){if(i instanceof ct)return i.field.canonicalString()+i.op.toString()+ao(i.value);if(h_(i))return i.filters.map((e=>ld(e))).join(",");{const e=i.filters.map((t=>ld(t))).join(",");return`${i.op}(${e})`}}function d_(i,e){return i instanceof ct?(function(s,o){return o instanceof ct&&s.op===o.op&&s.field.isEqual(o.field)&&Zn(s.value,o.value)})(i,e):i instanceof Mn?(function(s,o){return o instanceof Mn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&d_(h,o.filters[m])),!0):!1})(i,e):void Te()}function f_(i){return i instanceof ct?(function(t){return`${t.field.canonicalString()} ${t.op} ${ao(t.value)}`})(i):i instanceof Mn?(function(t){return t.op.toString()+" {"+t.getFilters().map(f_).join(" ,")+"}"})(i):"Filter"}class GI extends ct{constructor(e,t,s){super(e,t,s),this.key=fe.fromName(s.referenceValue)}matches(e){const t=fe.comparator(e.key,this.key);return this.matchesComparison(t)}}class QI extends ct{constructor(e,t){super(e,"in",t),this.keys=p_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class YI extends ct{constructor(e,t){super(e,"not-in",t),this.keys=p_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function p_(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>fe.fromName(s.referenceValue)))}class XI extends ct{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Fd(t)&&Va(t.arrayValue,this.value)}}class JI extends ct{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Va(this.value.arrayValue,t)}}class ZI extends ct{constructor(e,t){super(e,"not-in",t)}matches(e){if(Va(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Va(this.value.arrayValue,t)}}class eS extends ct{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Fd(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Va(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.ue=null}}function Eg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new tS(i,e,t,s,o,u,h)}function Ud(i){const e=Ae(i);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>ld(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),Qu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>ao(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>ao(s))).join(",")),e.ue=t}return e.ue}function jd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!HI(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!d_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!wg(i.startAt,e.startAt)&&wg(i.endAt,e.endAt)}function ud(i){return fe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function nS(i,e,t,s,o,u,h,m){return new go(i,e,t,s,o,u,h,m)}function zd(i){return new go(i)}function Tg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function m_(i){return i.collectionGroup!==null}function Sa(i){const e=Ae(i);if(e.ce===null){e.ce=[];const t=new Set;for(const u of e.explicitOrderBy)e.ce.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new xt(Pt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((v=>{v.isInequality()&&(m=m.add(v.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.ce.push(new Oa(u,s))})),t.has(Pt.keyField().canonicalString())||e.ce.push(new Oa(Pt.keyField(),s))}return e.ce}function Xn(i){const e=Ae(i);return e.le||(e.le=rS(e,Sa(i))),e.le}function rS(i,e){if(i.limitType==="F")return Eg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Oa(o.field,u)}));const t=i.endAt?new Mu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Mu(i.startAt.position,i.startAt.inclusive):null;return Eg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function cd(i,e){const t=i.filters.concat([e]);return new go(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function hd(i,e,t){return new go(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Yu(i,e){return jd(Xn(i),Xn(e))&&i.limitType===e.limitType}function g_(i){return`${Ud(Xn(i))}|lt:${i.limitType}`}function Gs(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>f_(o))).join(", ")}]`),Qu(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>ao(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>ao(o))).join(",")),`Target(${s})`})(Xn(i))}; limitType=${i.limitType})`}function Xu(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):fe.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of Sa(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,g){const v=vg(h,m,g);return h.inclusive?v<=0:v<0})(s.startAt,Sa(s),o)||s.endAt&&!(function(h,m,g){const v=vg(h,m,g);return h.inclusive?v>=0:v>0})(s.endAt,Sa(s),o))})(i,e)}function iS(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function y_(i){return(e,t)=>{let s=!1;for(const o of Sa(i)){const u=sS(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function sS(i,e,t){const s=i.field.isKeyField()?fe.comparator(e.key,t.key):(function(u,h,m){const g=h.data.field(u),v=m.data.field(u);return g!==null&&v!==null?oo(g,v):Te()})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return Te()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Zi(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return o_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS=new et(fe.comparator);function Ar(){return oS}const __=new et(fe.comparator);function va(...i){let e=__;for(const t of i)e=e.insert(t.key,t);return e}function v_(i){let e=__;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function $i(){return Aa()}function w_(){return Aa()}function Aa(){return new yo((i=>i.toString()),((i,e)=>i.isEqual(e)))}const aS=new et(fe.comparator),lS=new xt(fe.comparator);function Pe(...i){let e=lS;for(const t of i)e=e.add(t);return e}const uS=new xt(Me);function cS(){return uS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bu(e)?"-0":e}}function E_(i){return{integerValue:""+i}}function hS(i,e){return zI(e)?E_(e):Bd(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(){this._=void 0}}function dS(i,e,t){return i instanceof Fu?(function(o,u){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&bd(u)&&(u=Md(u)),u&&(h.fields.__previous_value__=u),{mapValue:h}})(t,e):i instanceof La?I_(i,e):i instanceof ba?S_(i,e):(function(o,u){const h=T_(o,u),m=Ig(h)+Ig(o.Pe);return ad(h)&&ad(o.Pe)?E_(m):Bd(o.serializer,m)})(i,e)}function fS(i,e,t){return i instanceof La?I_(i,e):i instanceof ba?S_(i,e):t}function T_(i,e){return i instanceof Uu?(function(s){return ad(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Fu extends Ju{}class La extends Ju{constructor(e){super(),this.elements=e}}function I_(i,e){const t=A_(e);for(const s of i.elements)t.some((o=>Zn(o,s)))||t.push(s);return{arrayValue:{values:t}}}class ba extends Ju{constructor(e){super(),this.elements=e}}function S_(i,e){let t=A_(e);for(const s of i.elements)t=t.filter((o=>!Zn(o,s)));return{arrayValue:{values:t}}}class Uu extends Ju{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Ig(i){return it(i.integerValue||i.doubleValue)}function A_(i){return Fd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function pS(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof La&&o instanceof La||s instanceof ba&&o instanceof ba?so(s.elements,o.elements,Zn):s instanceof Uu&&o instanceof Uu?Zn(s.Pe,o.Pe):s instanceof Fu&&o instanceof Fu})(i.transform,e.transform)}class mS{constructor(e,t){this.version=e,this.transformResults=t}}class wn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new wn}static exists(e){return new wn(void 0,e)}static updateTime(e){return new wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Au(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Zu{}function R_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new $d(i.key,wn.none()):new Wa(i.key,i.data,wn.none());{const t=i.data,s=Jt.empty();let o=new xt(Pt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new fi(i.key,s,new un(o.toArray()),wn.none())}}function gS(i,e,t){i instanceof Wa?(function(o,u,h){const m=o.value.clone(),g=Ag(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof fi?(function(o,u,h){if(!Au(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Ag(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(k_(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Ra(i,e,t,s){return i instanceof Wa?(function(u,h,m,g){if(!Au(u.precondition,h))return m;const v=u.value.clone(),E=Rg(u.fieldTransforms,g,h);return v.setAll(E),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null})(i,e,t,s):i instanceof fi?(function(u,h,m,g){if(!Au(u.precondition,h))return m;const v=Rg(u.fieldTransforms,g,h),E=h.data;return E.setAll(k_(u)),E.setAll(v),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((k=>k.field)))})(i,e,t,s):(function(u,h,m){return Au(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function yS(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=T_(s.transform,o||null);u!=null&&(t===null&&(t=Jt.empty()),t.set(s.field,u))}return t||null}function Sg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&so(s,o,((u,h)=>pS(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Wa extends Zu{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class fi extends Zu{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function k_(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function Ag(i,e,t){const s=new Map;Ue(i.length===t.length);for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,fS(h,m,t[o]))}return s}function Rg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,dS(u,h,e))}return s}class $d extends Zu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _S extends Zu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&gS(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ra(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ra(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=w_();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=R_(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Se.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Pe())}isEqual(e){return this.batchId===e.batchId&&so(this.mutations,e.mutations,((t,s)=>Sg(t,s)))&&so(this.baseMutations,e.baseMutations,((t,s)=>Sg(t,s)))}}class qd{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ue(e.mutations.length===s.length);let o=(function(){return aS})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new qd(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut,Oe;function TS(i){switch(i){default:return Te();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function C_(i){if(i===void 0)return Sr("GRPC error has no .code"),W.UNKNOWN;switch(i){case ut.OK:return W.OK;case ut.CANCELLED:return W.CANCELLED;case ut.UNKNOWN:return W.UNKNOWN;case ut.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case ut.INTERNAL:return W.INTERNAL;case ut.UNAVAILABLE:return W.UNAVAILABLE;case ut.UNAUTHENTICATED:return W.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case ut.NOT_FOUND:return W.NOT_FOUND;case ut.ALREADY_EXISTS:return W.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return W.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case ut.ABORTED:return W.ABORTED;case ut.OUT_OF_RANGE:return W.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return W.UNIMPLEMENTED;case ut.DATA_LOSS:return W.DATA_LOSS;default:return Te()}}(Oe=ut||(ut={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=new qi([4294967295,4294967295],0);function kg(i){const e=IS().encode(i),t=new Jy;return t.update(e),new Uint8Array(t.digest())}function Cg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new qi([t,s],0),new qi([o,u],0)]}class Wd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new wa(`Invalid padding: ${t}`);if(s<0)throw new wa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new wa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new wa(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=qi.fromNumber(this.Ie)}Ee(e,t,s){let o=e.add(t.multiply(qi.fromNumber(s)));return o.compare(SS)===1&&(o=new qi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=kg(e),[s,o]=Cg(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,o,u);if(!this.de(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Wd(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.Ie===0)return;const t=kg(e),[s,o]=Cg(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,o,u);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class wa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Ha.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new ec(Se.min(),o,new et(Me),Ar(),Pe())}}class Ha{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ha(s,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,t,s,o){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=o}}class P_{constructor(e,t){this.targetId=e,this.me=t}}class x_{constructor(e,t,s=Nt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Pg{constructor(){this.fe=0,this.ge=Ng(),this.pe=Nt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Pe(),t=Pe(),s=Pe();return this.ge.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:Te()}})),new Ha(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=Ng()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class AS{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ar(),this.qe=xg(),this.Qe=new et(Me)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,(t=>{const s=this.Ge(t);switch(e.state){case 0:this.ze(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),s.De(e.resumeToken));break;default:Te()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach(((s,o)=>{this.ze(o)&&t(o)}))}He(e){const t=e.targetId,s=e.me.count,o=this.Je(t);if(o){const u=o.target;if(ud(u))if(s===0){const h=new fe(u.path);this.Ue(t,h,Ft.newNoDocument(h,Se.min()))}else Ue(s===1);else{const h=this.Ye(t);if(h!==s){const m=this.Ze(e),g=m?this.Xe(m,e,h):1;if(g!==0){this.je(t);const v=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,v)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Yi(s).toUint8Array()}catch(g){if(g instanceof a_)return io("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new Wd(h,o,u)}catch(g){return io(g instanceof wa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.Ie===0?null:m}Xe(e,t,s){return t.me.count===s-this.nt(e,t.targetId)?0:2}nt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.Le.tt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.Ue(t,u,null),o++)})),o}rt(e){const t=new Map;this.Be.forEach(((u,h)=>{const m=this.Je(h);if(m){if(u.current&&ud(m.target)){const g=new fe(m.target.path);this.ke.get(g)!==null||this.it(h,g)||this.Ue(h,g,Ft.newNoDocument(g,e))}u.be&&(t.set(h,u.ve()),u.Ce())}}));let s=Pe();this.qe.forEach(((u,h)=>{let m=!0;h.forEachWhile((g=>{const v=this.Je(g);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.ke.forEach(((u,h)=>h.setReadTime(e)));const o=new ec(e,t,this.Qe,this.ke,s);return this.ke=Ar(),this.qe=xg(),this.Qe=new et(Me),o}$e(e,t){if(!this.ze(e))return;const s=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,s){if(!this.ze(e))return;const o=this.Ge(e);this.it(e,t)?o.Fe(t,1):o.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Pg,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new xt(Me),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||ce("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Pg),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.Ue(e,t,null)}))}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function xg(){return new et(fe.comparator)}function Ng(){return new et(fe.comparator)}const RS={asc:"ASCENDING",desc:"DESCENDING"},kS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},CS={and:"AND",or:"OR"};class PS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function dd(i,e){return i.useProto3Json||Qu(e)?e:{value:e}}function ju(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function N_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function xS(i,e){return ju(i,e.toTimestamp())}function Jn(i){return Ue(!!i),Se.fromTimestamp((function(t){const s=ci(t);return new yt(s.seconds,s.nanos)})(i))}function Hd(i,e){return fd(i,e).canonicalString()}function fd(i,e){const t=(function(o){return new Ge(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function D_(i){const e=Ge.fromString(i);return Ue(M_(e)),e}function pd(i,e){return Hd(i.databaseId,e.path)}function Wh(i,e){const t=D_(e);if(t.get(1)!==i.databaseId.projectId)throw new ie(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ie(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new fe(O_(t))}function V_(i,e){return Hd(i.databaseId,e)}function NS(i){const e=D_(i);return e.length===4?Ge.emptyPath():O_(e)}function md(i){return new Ge(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function O_(i){return Ue(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function Dg(i,e,t){return{name:pd(i,e),fields:t.value.mapValue.fields}}function DS(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:Te()})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(v,E){return v.useProto3Json?(Ue(E===void 0||typeof E=="string"),Nt.fromBase64String(E||"")):(Ue(E===void 0||E instanceof Buffer||E instanceof Uint8Array),Nt.fromUint8Array(E||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(v){const E=v.code===void 0?W.UNKNOWN:C_(v.code);return new ie(E,v.message||"")})(h);t=new x_(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Wh(i,s.document.name),u=Jn(s.document.updateTime),h=s.document.createTime?Jn(s.document.createTime):Se.min(),m=new Jt({mapValue:{fields:s.document.fields}}),g=Ft.newFoundDocument(o,u,h,m),v=s.targetIds||[],E=s.removedTargetIds||[];t=new Ru(v,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Wh(i,s.document),u=s.readTime?Jn(s.readTime):Se.min(),h=Ft.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Ru([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Wh(i,s.document),u=s.removedTargetIds||[];t=new Ru([],u,o,null)}else{if(!("filter"in e))return Te();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new ES(o,u),m=s.targetId;t=new P_(m,h)}}return t}function VS(i,e){let t;if(e instanceof Wa)t={update:Dg(i,e.key,e.value)};else if(e instanceof $d)t={delete:pd(i,e.key)};else if(e instanceof fi)t={update:Dg(i,e.key,e.data),updateMask:BS(e.fieldMask)};else{if(!(e instanceof _S))return Te();t={verify:pd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof Fu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof La)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof ba)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Uu)return{fieldPath:h.field.canonicalString(),increment:m.Pe};throw Te()})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:xS(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Te()})(i,e.precondition)),t}function OS(i,e){return i&&i.length>0?(Ue(e!==void 0),i.map((t=>(function(o,u){let h=o.updateTime?Jn(o.updateTime):Jn(u);return h.isEqual(Se.min())&&(h=Jn(u)),new mS(h,o.transformResults||[])})(t,e)))):[]}function LS(i,e){return{documents:[V_(i,e.path)]}}function bS(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=V_(i,o);const u=(function(v){if(v.length!==0)return b_(Mn.create(v,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(v){if(v.length!==0)return v.map((E=>(function(D){return{field:Qs(D.field),direction:US(D.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=dd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{_t:t,parent:o}}function MS(i){let e=NS(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ue(s===1);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=(function(k){const D=L_(k);return D instanceof Mn&&h_(D)?D.getFilters():[D]})(t.where));let h=[];t.orderBy&&(h=(function(k){return k.map((D=>(function(Y){return new Oa(Ys(Y.field),(function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Y.direction))})(D)))})(t.orderBy));let m=null;t.limit&&(m=(function(k){let D;return D=typeof k=="object"?k.value:k,Qu(D)?null:D})(t.limit));let g=null;t.startAt&&(g=(function(k){const D=!!k.before,B=k.values||[];return new Mu(B,D)})(t.startAt));let v=null;return t.endAt&&(v=(function(k){const D=!k.before,B=k.values||[];return new Mu(B,D)})(t.endAt)),nS(e,o,h,u,m,"F",g,v)}function FS(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te()}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function L_(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Ys(t.unaryFilter.field);return ct.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ys(t.unaryFilter.field);return ct.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ys(t.unaryFilter.field);return ct.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Ys(t.unaryFilter.field);return ct.create(h,"!=",{nullValue:"NULL_VALUE"});default:return Te()}})(i):i.fieldFilter!==void 0?(function(t){return ct.create(Ys(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return Mn.create(t.compositeFilter.filters.map((s=>L_(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Te()}})(t.compositeFilter.op))})(i):Te()}function US(i){return RS[i]}function jS(i){return kS[i]}function zS(i){return CS[i]}function Qs(i){return{fieldPath:i.canonicalString()}}function Ys(i){return Pt.fromServerFormat(i.fieldPath)}function b_(i){return i instanceof ct?(function(t){if(t.op==="=="){if(_g(t.value))return{unaryFilter:{field:Qs(t.field),op:"IS_NAN"}};if(yg(t.value))return{unaryFilter:{field:Qs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(_g(t.value))return{unaryFilter:{field:Qs(t.field),op:"IS_NOT_NAN"}};if(yg(t.value))return{unaryFilter:{field:Qs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qs(t.field),op:jS(t.op),value:t.value}}})(i):i instanceof Mn?(function(t){const s=t.getFilters().map((o=>b_(o)));return s.length===1?s[0]:{compositeFilter:{op:zS(t.op),filters:s}}})(i):Te()}function BS(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function M_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t,s,o,u=Se.min(),h=Se.min(),m=Nt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new ri(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ri(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e){this.ct=e}}function qS(i){const e=MS({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?hd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(){this.un=new HS}addToCollectionParentIndex(e,t){return this.un.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(ui.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(ui.min())}updateCollectionGroup(e,t,s){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class HS{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new xt(Ge.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new xt(Ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new lo(0)}static kn(){return new lo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(){this.changes=new yo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ft.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?G.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Ra(s.mutation,o,un.empty(),yt.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Pe()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Pe()){const o=$i();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=va();return u.forEach(((m,g)=>{h=h.insert(m,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=$i();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Pe())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Ar();const h=Aa(),m=(function(){return Aa()})();return t.forEach(((g,v)=>{const E=s.get(v.key);o.has(v.key)&&(E===void 0||E.mutation instanceof fi)?u=u.insert(v.key,v):E!==void 0?(h.set(v.key,E.mutation.getFieldMask()),Ra(E.mutation,v,E.mutation.getFieldMask(),yt.now())):h.set(v.key,un.empty())})),this.recalculateAndSaveOverlays(e,u).next((g=>(g.forEach(((v,E)=>h.set(v,E))),t.forEach(((v,E)=>{var k;return m.set(v,new GS(E,(k=h.get(v))!==null&&k!==void 0?k:null))})),m)))}recalculateAndSaveOverlays(e,t){const s=Aa();let o=new et(((h,m)=>h-m)),u=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((g=>{const v=t.get(g);if(v===null)return;let E=s.get(g)||un.empty();E=m.applyToLocalView(v,E),s.set(g,E);const k=(o.get(m.batchId)||Pe()).add(g);o=o.insert(m.batchId,k)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),v=g.key,E=g.value,k=w_();E.forEach((D=>{if(!u.has(D)){const B=R_(t.get(D),s.get(D));B!==null&&k.set(D,B),u=u.add(D)}})),h.push(this.documentOverlayCache.saveOverlays(e,v,k))}return G.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return fe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):m_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):G.resolve($i());let m=-1,g=u;return h.next((v=>G.forEach(v,((E,k)=>(m<k.largestBatchId&&(m=k.largestBatchId),u.get(E)?G.resolve():this.remoteDocumentCache.getEntry(e,E).next((D=>{g=g.insert(E,D)}))))).next((()=>this.populateOverlays(e,v,u))).next((()=>this.computeViews(e,g,v,Pe()))).next((E=>({batchId:m,changes:v_(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new fe(t)).next((s=>{let o=va();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=va();return this.indexManager.getCollectionParents(e,u).next((m=>G.forEach(m,(g=>{const v=(function(k,D){return new go(D,null,k.explicitOrderBy.slice(),k.filters.slice(),k.limit,k.limitType,k.startAt,k.endAt)})(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next((E=>{E.forEach(((k,D)=>{h=h.insert(k,D)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((g,v)=>{const E=v.getKey();h.get(E)===null&&(h=h.insert(E,Ft.newInvalidDocument(E)))}));let m=va();return h.forEach(((g,v)=>{const E=u.get(g);E!==void 0&&Ra(E.mutation,v,un.empty(),yt.now()),Xu(t,v)&&(m=m.insert(g,v))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return G.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:Jn(o.createTime)}})(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,(function(o){return{name:o.name,query:qS(o.bundledQuery),readTime:Jn(o.readTime)}})(t)),G.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(){this.overlays=new et(fe.comparator),this.Ir=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const s=$i();return G.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.ht(e,t,u)})),G.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Ir.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.Ir.delete(s)),G.resolve()}getOverlaysForCollection(e,t,s){const o=$i(),u=t.length+1,h=new fe(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return G.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new et(((v,E)=>v-E));const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let E=u.get(v.largestBatchId);E===null&&(E=$i(),u=u.insert(v.largestBatchId,E)),E.set(v.getKey(),v)}}const m=$i(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((v,E)=>m.set(v,E))),!(m.size()>=o)););return G.resolve(m)}ht(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Ir.get(o.largestBatchId).delete(s.key);this.Ir.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new wS(t,s));let u=this.Ir.get(t);u===void 0&&(u=Pe(),this.Ir.set(t,u)),this.Ir.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(){this.Tr=new xt(It.Er),this.dr=new xt(It.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const s=new It(e,t);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Vr(new It(e,t))}mr(e,t){e.forEach((s=>this.removeReference(s,t)))}gr(e){const t=new fe(new Ge([])),s=new It(t,e),o=new It(t,e+1),u=[];return this.dr.forEachInRange([s,o],(h=>{this.Vr(h),u.push(h.key)})),u}pr(){this.Tr.forEach((e=>this.Vr(e)))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new fe(new Ge([])),s=new It(t,e),o=new It(t,e+1);let u=Pe();return this.dr.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new It(e,0),s=this.Tr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class It{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return fe.comparator(e.key,t.key)||Me(e.wr,t.wr)}static Ar(e,t){return Me(e.wr,t.wr)||fe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new xt(It.Er)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new vS(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.br=this.br.add(new It(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return G.resolve(h)}lookupMutationBatch(e,t){return G.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.vr(s),u=o<0?0:o;return G.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new It(t,0),o=new It(t,Number.POSITIVE_INFINITY),u=[];return this.br.forEachInRange([s,o],(h=>{const m=this.Dr(h.wr);u.push(m)})),G.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new xt(Me);return t.forEach((o=>{const u=new It(o,0),h=new It(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([u,h],(m=>{s=s.add(m.wr)}))})),G.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;fe.isDocumentKey(u)||(u=u.child(""));const h=new It(new fe(u),0);let m=new xt(Me);return this.br.forEachWhile((g=>{const v=g.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(g.wr)),!0)}),h),G.resolve(this.Cr(m))}Cr(e){const t=[];return e.forEach((s=>{const o=this.Dr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Ue(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return G.forEach(t.mutations,(o=>{const u=new It(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.br=s}))}On(e){}containsKey(e,t){const s=new It(t,0),o=this.br.firstAfterOrEqual(s);return G.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e){this.Mr=e,this.docs=(function(){return new et(fe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.Mr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return G.resolve(s?s.document.mutableCopy():Ft.newInvalidDocument(t))}getEntries(e,t){let s=Ar();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ft.newInvalidDocument(o))})),G.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Ar();const h=t.path,m=new fe(h.child("")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:v,value:{document:E}}=g.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||MI(bI(E),s)<=0||(o.has(E.key)||Xu(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return G.resolve(u)}getAllFromCollectionGroup(e,t,s,o){Te()}Or(e,t){return G.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new tA(this)}getSize(e){return G.resolve(this.size)}}class tA extends KS{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.cr.addEntry(e,o)):this.cr.removeEntry(s)})),G.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.persistence=e,this.Nr=new yo((t=>Ud(t)),jd),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Kd,this.targetCount=0,this.kr=lo.Bn()}forEachTarget(e,t){return this.Nr.forEach(((s,o)=>t(o))),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Lr&&(this.Lr=t),G.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new lo(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.Kn(t),G.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.Nr.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.Nr.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),G.waitFor(u).next((()=>o))}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const s=this.Nr.get(t)||null;return G.resolve(s)}addMatchingKeys(e,t,s){return this.Br.Rr(t,s),G.resolve()}removeMatchingKeys(e,t,s){this.Br.mr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),G.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Br.yr(t);return G.resolve(s)}containsKey(e,t){return G.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Ld(0),this.Kr=!1,this.Kr=!0,this.$r=new JS,this.referenceDelegate=e(this),this.Ur=new nA(this),this.indexManager=new WS,this.remoteDocumentCache=(function(o){return new eA(o)})((s=>this.referenceDelegate.Wr(s))),this.serializer=new $S(t),this.Gr=new YS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new XS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.qr[e.toKey()];return s||(s=new ZS(t,this.referenceDelegate),this.qr[e.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,s){ce("MemoryPersistence","Starting transaction:",e);const o=new iA(this.Qr.next());return this.referenceDelegate.zr(),s(o).next((u=>this.referenceDelegate.jr(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Hr(e,t){return G.or(Object.values(this.qr).map((s=>()=>s.containsKey(e,t))))}}class iA extends UI{constructor(e){super(),this.currentSequenceNumber=e}}class Gd{constructor(e){this.persistence=e,this.Jr=new Kd,this.Yr=null}static Zr(e){return new Gd(e)}get Xr(){if(this.Yr)return this.Yr;throw Te()}addReference(e,t,s){return this.Jr.addReference(s,t),this.Xr.delete(s.toString()),G.resolve()}removeReference(e,t,s){return this.Jr.removeReference(s,t),this.Xr.add(s.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),G.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach((o=>this.Xr.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.Xr.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.Xr,(s=>{const o=fe.fromPath(s);return this.ei(e,o).next((u=>{u||t.removeEntry(o,Se.min())}))})).next((()=>(this.Yr=null,t.apply(e))))}updateLimboDocument(e,t){return this.ei(e,t).next((s=>{s?this.Xr.delete(t.toString()):this.Xr.add(t.toString())}))}Wr(e){return 0}ei(e,t){return G.or([()=>G.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.$i=s,this.Ui=o}static Wi(e,t){let s=Pe(),o=Pe();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Qd(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=(function(){return Y0()?8:jI(Ut())>0?6:4})()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.Yi(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.Zi(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new sA;return this.Xi(e,t,h).next((m=>{if(u.result=m,this.zi)return this.es(e,t,h,m.size)}))})).next((()=>u.result))}es(e,t,s,o){return s.documentReadCount<this.ji?(pa()<=Ne.DEBUG&&ce("QueryEngine","SDK will not create cache indexes for query:",Gs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),G.resolve()):(pa()<=Ne.DEBUG&&ce("QueryEngine","Query:",Gs(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Hi*o?(pa()<=Ne.DEBUG&&ce("QueryEngine","The SDK decides to create cache indexes for query:",Gs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xn(t))):G.resolve())}Yi(e,t){if(Tg(t))return G.resolve(null);let s=Xn(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=hd(t,null,"F"),s=Xn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=Pe(...u);return this.Ji.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((g=>{const v=this.ts(t,m);return this.ns(t,v,h,g.readTime)?this.Yi(e,hd(t,null,"F")):this.rs(e,v,t,g)}))))})))))}Zi(e,t,s,o){return Tg(t)||o.isEqual(Se.min())?G.resolve(null):this.Ji.getDocuments(e,s).next((u=>{const h=this.ts(t,u);return this.ns(t,h,s,o)?G.resolve(null):(pa()<=Ne.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Gs(t)),this.rs(e,h,t,LI(o,-1)).next((m=>m)))}))}ts(e,t){let s=new xt(y_(e));return t.forEach(((o,u)=>{Xu(e,u)&&(s=s.add(u))})),s}ns(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Xi(e,t,s){return pa()<=Ne.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",Gs(t)),this.Ji.getDocumentsMatchingQuery(e,t,ui.min(),s)}rs(e,t,s,o){return this.Ji.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e,t,s,o){this.persistence=e,this.ss=t,this.serializer=o,this.os=new et(Me),this._s=new yo((u=>Ud(u)),jd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(s)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QS(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.os)))}}function lA(i,e,t,s){return new aA(i,e,t,s)}async function F_(i,e){const t=Ae(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.ls(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let g=Pe();for(const v of o){h.push(v.batchId);for(const E of v.mutations)g=g.add(E.key)}for(const v of u){m.push(v.batchId);for(const E of v.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(s,g).next((v=>({hs:v,removedBatchIds:h,addedBatchIds:m})))}))}))}function uA(i,e){const t=Ae(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.cs.newChangeBuffer({trackRemovals:!0});return(function(m,g,v,E){const k=v.batch,D=k.keys();let B=G.resolve();return D.forEach((Y=>{B=B.next((()=>E.getEntry(g,Y))).next((J=>{const $=v.docVersions.get(Y);Ue($!==null),J.version.compareTo($)<0&&(k.applyToRemoteDocument(J,v),J.isValidDocument()&&(J.setReadTime(v.commitVersion),E.addEntry(J)))}))})),B.next((()=>m.mutationQueue.removeMutationBatch(g,k)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let g=Pe();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(g=g.add(m.batch.mutations[v].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function U_(i){const e=Ae(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ur.getLastRemoteSnapshotVersion(t)))}function cA(i,e){const t=Ae(i),s=e.snapshotVersion;let o=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.cs.newChangeBuffer({trackRemovals:!0});o=t.os;const m=[];e.targetChanges.forEach(((E,k)=>{const D=o.get(k);if(!D)return;m.push(t.Ur.removeMatchingKeys(u,E.removedDocuments,k).next((()=>t.Ur.addMatchingKeys(u,E.addedDocuments,k))));let B=D.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(k)!==null?B=B.withResumeToken(Nt.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):E.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(E.resumeToken,s)),o=o.insert(k,B),(function(J,$,we){return J.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=3e8?!0:we.addedDocuments.size+we.modifiedDocuments.size+we.removedDocuments.size>0})(D,B,E)&&m.push(t.Ur.updateTargetData(u,B))}));let g=Ar(),v=Pe();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,E))})),m.push(hA(u,h,e.documentUpdates).next((E=>{g=E.Ps,v=E.Is}))),!s.isEqual(Se.min())){const E=t.Ur.getLastRemoteSnapshotVersion(u).next((k=>t.Ur.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(E)}return G.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,g,v))).next((()=>g))})).then((u=>(t.os=o,u)))}function hA(i,e,t){let s=Pe(),o=Pe();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=Ar();return t.forEach(((m,g)=>{const v=u.get(m);g.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(Se.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!v.isValidDocument()||g.version.compareTo(v.version)>0||g.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):ce("LocalStore","Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",g.version)})),{Ps:h,Is:o}}))}function dA(i,e){const t=Ae(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function fA(i,e){const t=Ae(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.Ur.getTargetData(s,e).next((u=>u?(o=u,G.resolve(o)):t.Ur.allocateTargetId(s).next((h=>(o=new ri(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Ur.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.os.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.os=t.os.insert(s.targetId,s),t._s.set(e,s.targetId)),s}))}async function gd(i,e,t){const s=Ae(i),o=s.os.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!qa(h))throw h;ce("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}s.os=s.os.remove(e),s._s.delete(o.target)}function Vg(i,e,t){const s=Ae(i);let o=Se.min(),u=Pe();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,v,E){const k=Ae(g),D=k._s.get(E);return D!==void 0?G.resolve(k.os.get(D)):k.Ur.getTargetData(v,E)})(s,h,Xn(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(h,m.targetId).next((g=>{u=g}))})).next((()=>s.ss.getDocumentsMatchingQuery(h,e,t?o:Se.min(),t?u:Pe()))).next((m=>(pA(s,iS(e),m),{documents:m,Ts:u})))))}function pA(i,e,t){let s=i.us.get(e)||Se.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.us.set(e,s)}class Og{constructor(){this.activeTargetIds=cS()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mA{constructor(){this.so=new Og,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,s){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Og,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ce("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ce("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yu=null;function Hh(){return yu===null?yu=(function(){return 268435456+Math.round(2147483648*Math.random())})():yu++,"0x"+yu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="WebChannelConnection";class vA extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),u=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+t.host,this.vo=`projects/${o}/databases/${u}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${u}`}get Fo(){return!1}Mo(t,s,o,u,h){const m=Hh(),g=this.xo(t,s.toUriEncodedString());ce("RestConnection",`Sending RPC '${t}' ${m}:`,g,o);const v={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(v,u,h),this.No(t,g,v,o).then((E=>(ce("RestConnection",`Received RPC '${t}' ${m}: `,E),E)),(E=>{throw io("RestConnection",`RPC '${t}' ${m} failed with error: `,E,"url: ",g,"request:",o),E}))}Lo(t,s,o,u,h,m){return this.Mo(t,s,o,u,h)}Oo(t,s,o){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+mo})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach(((u,h)=>t[h]=u)),o&&o.headers.forEach(((u,h)=>t[h]=u))}xo(t,s){const o=yA[t];return`${this.Do}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,s,o){const u=Hh();return new Promise(((h,m)=>{const g=new Zy;g.setWithCredentials(!0),g.listenOnce(e_.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case Iu.NO_ERROR:const E=g.getResponseJson();ce(bt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),h(E);break;case Iu.TIMEOUT:ce(bt,`RPC '${e}' ${u} timed out`),m(new ie(W.DEADLINE_EXCEEDED,"Request time out"));break;case Iu.HTTP_ERROR:const k=g.getStatus();if(ce(bt,`RPC '${e}' ${u} failed with status:`,k,"response text:",g.getResponseText()),k>0){let D=g.getResponseJson();Array.isArray(D)&&(D=D[0]);const B=D==null?void 0:D.error;if(B&&B.status&&B.message){const Y=(function($){const we=$.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(we)>=0?we:W.UNKNOWN})(B.status);m(new ie(Y,B.message))}else m(new ie(W.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new ie(W.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{ce(bt,`RPC '${e}' ${u} completed.`)}}));const v=JSON.stringify(o);ce(bt,`RPC '${e}' ${u} sending request:`,o),g.send(t,"POST",v,s,15)}))}Bo(e,t,s){const o=Hh(),u=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=r_(),m=n_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Oo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const E=u.join("");ce(bt,`Creating RPC '${e}' stream ${o}: ${E}`,g);const k=h.createWebChannel(E,g);let D=!1,B=!1;const Y=new _A({Io:$=>{B?ce(bt,`Not sending because RPC '${e}' stream ${o} is closed:`,$):(D||(ce(bt,`Opening RPC '${e}' stream ${o} transport.`),k.open(),D=!0),ce(bt,`RPC '${e}' stream ${o} sending:`,$),k.send($))},To:()=>k.close()}),J=($,we,ye)=>{$.listen(we,(Ie=>{try{ye(Ie)}catch(Re){setTimeout((()=>{throw Re}),0)}}))};return J(k,_a.EventType.OPEN,(()=>{B||(ce(bt,`RPC '${e}' stream ${o} transport opened.`),Y.yo())})),J(k,_a.EventType.CLOSE,(()=>{B||(B=!0,ce(bt,`RPC '${e}' stream ${o} transport closed`),Y.So())})),J(k,_a.EventType.ERROR,($=>{B||(B=!0,io(bt,`RPC '${e}' stream ${o} transport errored:`,$),Y.So(new ie(W.UNAVAILABLE,"The operation could not be completed")))})),J(k,_a.EventType.MESSAGE,($=>{var we;if(!B){const ye=$.data[0];Ue(!!ye);const Ie=ye,Re=Ie.error||((we=Ie[0])===null||we===void 0?void 0:we.error);if(Re){ce(bt,`RPC '${e}' stream ${o} received error:`,Re);const Be=Re.status;let ke=(function(A){const C=ut[A];if(C!==void 0)return C_(C)})(Be),x=Re.message;ke===void 0&&(ke=W.INTERNAL,x="Unknown error status: "+Be+" with message "+Re.message),B=!0,Y.So(new ie(ke,x)),k.close()}else ce(bt,`RPC '${e}' stream ${o} received:`,ye),Y.bo(ye)}})),J(m,t_.STAT_EVENT,($=>{$.stat===sd.PROXY?ce(bt,`RPC '${e}' stream ${o} detected buffering proxy`):$.stat===sd.NOPROXY&&ce(bt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{Y.wo()}),0),Y}}function Kh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(i){return new PS(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,t,s=1e3,o=1.5,u=6e4){this.ui=e,this.timerId=t,this.ko=s,this.qo=o,this.Qo=u,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),o=Math.max(0,t-s);o>0&&ce("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,t,s,o,u,h,m,g){this.ui=e,this.Ho=s,this.Jo=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new j_(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(Sr(t.toString()),Sr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.Yo===t&&this.P_(s,o)}),(s=>{e((()=>{const o=new ie(W.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(o)}))}))}P_(e,t){const s=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo((()=>{s((()=>this.listener.Eo()))})),this.stream.Ro((()=>{s((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((o=>{s((()=>this.I_(o)))})),this.stream.onMessage((o=>{s((()=>++this.e_==1?this.E_(o):this.onNext(o)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(e){return ce("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget((()=>this.Yo===e?t():(ce("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class wA extends z_{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=DS(this.serializer,e),s=(function(u){if(!("targetChange"in u))return Se.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Se.min():h.readTime?Jn(h.readTime):Se.min()})(e);return this.listener.d_(t,s)}A_(e){const t={};t.database=md(this.serializer),t.addTarget=(function(u,h){let m;const g=h.target;if(m=ud(g)?{documents:LS(u,g)}:{query:bS(u,g)._t},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=N_(u,h.resumeToken);const v=dd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(Se.min())>0){m.readTime=ju(u,h.snapshotVersion.toTimestamp());const v=dd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m})(this.serializer,e);const s=FS(this.serializer,e);s&&(t.labels=s),this.a_(t)}R_(e){const t={};t.database=md(this.serializer),t.removeTarget=e,this.a_(t)}}class EA extends z_{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=OS(e.writeResults,e.commitTime),s=Jn(e.commitTime);return this.listener.g_(s,t)}p_(){const e={};e.database=md(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>VS(this.serializer,s)))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new ie(W.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Mo(e,fd(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ie(W.UNKNOWN,u.toString())}))}Lo(e,t,s,o,u){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Lo(e,fd(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ie(W.UNKNOWN,h.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class IA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Sr(t),this.D_=!1):ce("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=u,this.k_._o((h=>{s.enqueueAndForget((async()=>{es(this)&&(ce("RemoteStore","Restarting streams for network reachability change."),await(async function(g){const v=Ae(g);v.L_.add(4),await Ka(v),v.q_.set("Unknown"),v.L_.delete(4),await nc(v)})(this))}))})),this.q_=new IA(s,o)}}async function nc(i){if(es(i))for(const e of i.B_)await e(!0)}async function Ka(i){for(const e of i.B_)await e(!1)}function B_(i,e){const t=Ae(i);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Zd(t)?Jd(t):_o(t).r_()&&Xd(t,e))}function Yd(i,e){const t=Ae(i),s=_o(t);t.N_.delete(e),s.r_()&&$_(t,e),t.N_.size===0&&(s.r_()?s.o_():es(t)&&t.q_.set("Unknown"))}function Xd(i,e){if(i.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Se.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}_o(i).A_(e)}function $_(i,e){i.Q_.xe(e),_o(i).R_(e)}function Jd(i){i.Q_=new AS({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>i.N_.get(e)||null,tt:()=>i.datastore.serializer.databaseId}),_o(i).start(),i.q_.v_()}function Zd(i){return es(i)&&!_o(i).n_()&&i.N_.size>0}function es(i){return Ae(i).L_.size===0}function q_(i){i.Q_=void 0}async function AA(i){i.q_.set("Online")}async function RA(i){i.N_.forEach(((e,t)=>{Xd(i,e)}))}async function kA(i,e){q_(i),Zd(i)?(i.q_.M_(e),Jd(i)):i.q_.set("Unknown")}async function CA(i,e,t){if(i.q_.set("Online"),e instanceof x_&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.N_.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.N_.delete(m),o.Q_.removeTarget(m))})(i,e)}catch(s){ce("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await zu(i,s)}else if(e instanceof Ru?i.Q_.Ke(e):e instanceof P_?i.Q_.He(e):i.Q_.We(e),!t.isEqual(Se.min()))try{const s=await U_(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.Q_.rt(h);return m.targetChanges.forEach(((g,v)=>{if(g.resumeToken.approximateByteSize()>0){const E=u.N_.get(v);E&&u.N_.set(v,E.withResumeToken(g.resumeToken,h))}})),m.targetMismatches.forEach(((g,v)=>{const E=u.N_.get(g);if(!E)return;u.N_.set(g,E.withResumeToken(Nt.EMPTY_BYTE_STRING,E.snapshotVersion)),$_(u,g);const k=new ri(E.target,g,v,E.sequenceNumber);Xd(u,k)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){ce("RemoteStore","Failed to raise snapshot:",s),await zu(i,s)}}async function zu(i,e,t){if(!qa(e))throw e;i.L_.add(1),await Ka(i),i.q_.set("Offline"),t||(t=()=>U_(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{ce("RemoteStore","Retrying IndexedDB access"),await t(),i.L_.delete(1),await nc(i)}))}function W_(i,e){return e().catch((t=>zu(i,t,e)))}async function rc(i){const e=Ae(i),t=hi(e);let s=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;PA(e);)try{const o=await dA(e.localStore,s);if(o===null){e.O_.length===0&&t.o_();break}s=o.batchId,xA(e,o)}catch(o){await zu(e,o)}H_(e)&&K_(e)}function PA(i){return es(i)&&i.O_.length<10}function xA(i,e){i.O_.push(e);const t=hi(i);t.r_()&&t.V_&&t.m_(e.mutations)}function H_(i){return es(i)&&!hi(i).n_()&&i.O_.length>0}function K_(i){hi(i).start()}async function NA(i){hi(i).p_()}async function DA(i){const e=hi(i);for(const t of i.O_)e.m_(t.mutations)}async function VA(i,e,t){const s=i.O_.shift(),o=qd.from(s,e,t);await W_(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await rc(i)}async function OA(i,e){e&&hi(i).V_&&await(async function(s,o){if((function(h){return TS(h)&&h!==W.ABORTED})(o.code)){const u=s.O_.shift();hi(s).s_(),await W_(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await rc(s)}})(i,e),H_(i)&&K_(i)}async function bg(i,e){const t=Ae(i);t.asyncQueue.verifyOperationInProgress(),ce("RemoteStore","RemoteStore received new credentials");const s=es(t);t.L_.add(3),await Ka(t),s&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await nc(t)}async function LA(i,e){const t=Ae(i);e?(t.L_.delete(2),await nc(t)):e||(t.L_.add(2),await Ka(t),t.q_.set("Unknown"))}function _o(i){return i.K_||(i.K_=(function(t,s,o){const u=Ae(t);return u.w_(),new wA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Eo:AA.bind(null,i),Ro:RA.bind(null,i),mo:kA.bind(null,i),d_:CA.bind(null,i)}),i.B_.push((async e=>{e?(i.K_.s_(),Zd(i)?Jd(i):i.q_.set("Unknown")):(await i.K_.stop(),q_(i))}))),i.K_}function hi(i){return i.U_||(i.U_=(function(t,s,o){const u=Ae(t);return u.w_(),new EA(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Eo:()=>Promise.resolve(),Ro:NA.bind(null,i),mo:OA.bind(null,i),f_:DA.bind(null,i),g_:VA.bind(null,i)}),i.B_.push((async e=>{e?(i.U_.s_(),await rc(i)):(await i.U_.stop(),i.O_.length>0&&(ce("RemoteStore",`Stopping write stream with ${i.O_.length} pending writes`),i.O_=[]))}))),i.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Wi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new ef(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tf(i,e){if(Sr("AsyncQueue",`${e}: ${i}`),qa(i))return new ie(W.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.comparator=e?(t,s)=>e(t,s)||fe.comparator(t.key,s.key):(t,s)=>fe.comparator(t.key,s.key),this.keyedMap=va(),this.sortedSet=new et(this.comparator)}static emptySet(e){return new to(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof to)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new to;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(){this.W_=new et(fe.comparator)}track(e){const t=e.doc.key,s=this.W_.get(t);s?e.type!==0&&s.type===3?this.W_=this.W_.insert(t,e):e.type===3&&s.type!==1?this.W_=this.W_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.W_=this.W_.remove(t):e.type===1&&s.type===2?this.W_=this.W_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Te():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal(((t,s)=>{e.push(s)})),e}}class uo{constructor(e,t,s,o,u,h,m,g,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new uo(e,t,to.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((e=>e.J_()))}}class MA{constructor(){this.queries=Fg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,s){const o=Ae(t),u=o.queries;o.queries=Fg(),u.forEach(((h,m)=>{for(const g of m.j_)g.onError(s)}))})(this,new ie(W.ABORTED,"Firestore shutting down"))}}function Fg(){return new yo((i=>g_(i)),Yu)}async function FA(i,e){const t=Ae(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.H_()&&e.J_()&&(s=2):(u=new bA,s=e.J_()?0:1);try{switch(s){case 0:u.z_=await t.onListen(o,!0);break;case 1:u.z_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=tf(h,`Initialization of query '${Gs(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.j_.push(e),e.Z_(t.onlineState),u.z_&&e.X_(u.z_)&&nf(t)}async function UA(i,e){const t=Ae(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.j_.indexOf(e);h>=0&&(u.j_.splice(h,1),u.j_.length===0?o=e.J_()?0:1:!u.H_()&&e.J_()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function jA(i,e){const t=Ae(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.j_)m.X_(o)&&(s=!0);h.z_=o}}s&&nf(t)}function zA(i,e,t){const s=Ae(i),o=s.queries.get(e);if(o)for(const u of o.j_)u.onError(t);s.queries.delete(e)}function nf(i){i.Y_.forEach((e=>{e.next()}))}var yd,Ug;(Ug=yd||(yd={})).ea="default",Ug.Cache="cache";class BA{constructor(e,t,s){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new uo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const s=t!=="Offline";return(!this.options._a||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=uo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==yd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.key=e}}class Q_{constructor(e){this.key=e}}class $A{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Pe(),this.mutatedKeys=Pe(),this.Aa=y_(e),this.Ra=new to(this.Aa)}get Va(){return this.Ta}ma(e,t){const s=t?t.fa:new Mg,o=t?t.Ra:this.Ra;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,k)=>{const D=o.get(E),B=Xu(this.query,k)?k:null,Y=!!D&&this.mutatedKeys.has(D.key),J=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let $=!1;D&&B?D.data.isEqual(B.data)?Y!==J&&(s.track({type:3,doc:B}),$=!0):this.ga(D,B)||(s.track({type:2,doc:B}),$=!0,(g&&this.Aa(B,g)>0||v&&this.Aa(B,v)<0)&&(m=!0)):!D&&B?(s.track({type:0,doc:B}),$=!0):D&&!B&&(s.track({type:1,doc:D}),$=!0,(g||v)&&(m=!0)),$&&(B?(h=h.add(B),u=J?u.add(E):u.delete(E)):(h=h.delete(E),u=u.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{Ra:h,fa:s,ns:m,mutatedKeys:u}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const h=e.fa.G_();h.sort(((E,k)=>(function(B,Y){const J=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te()}};return J(B)-J(Y)})(E.type,k.type)||this.Aa(E.doc,k.doc))),this.pa(s),o=o!=null&&o;const m=t&&!o?this.ya():[],g=this.da.size===0&&this.current&&!o?1:0,v=g!==this.Ea;return this.Ea=g,h.length!==0||v?{snapshot:new uo(this.query,e.Ra,u,h,e.mutatedKeys,g===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:m}:{wa:m}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Mg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach((t=>this.Ta=this.Ta.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ta=this.Ta.delete(t))),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Pe(),this.Ra.forEach((s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))}));const t=[];return e.forEach((s=>{this.da.has(s)||t.push(new Q_(s))})),this.da.forEach((s=>{e.has(s)||t.push(new G_(s))})),t}ba(e){this.Ta=e.Ts,this.da=Pe();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return uo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class qA{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class WA{constructor(e){this.key=e,this.va=!1}}class HA{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Ca={},this.Fa=new yo((m=>g_(m)),Yu),this.Ma=new Map,this.xa=new Set,this.Oa=new et(fe.comparator),this.Na=new Map,this.La=new Kd,this.Ba={},this.ka=new Map,this.qa=lo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function KA(i,e,t=!0){const s=tv(i);let o;const u=s.Fa.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Da()):o=await Y_(s,e,t,!0),o}async function GA(i,e){const t=tv(i);await Y_(t,e,!0,!1)}async function Y_(i,e,t,s){const o=await fA(i.localStore,Xn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await QA(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&B_(i.remoteStore,o),m}async function QA(i,e,t,s,o){i.Ka=(k,D,B)=>(async function(J,$,we,ye){let Ie=$.view.ma(we);Ie.ns&&(Ie=await Vg(J.localStore,$.query,!1).then((({documents:x})=>$.view.ma(x,Ie))));const Re=ye&&ye.targetChanges.get($.targetId),Be=ye&&ye.targetMismatches.get($.targetId)!=null,ke=$.view.applyChanges(Ie,J.isPrimaryClient,Re,Be);return zg(J,$.targetId,ke.wa),ke.snapshot})(i,k,D,B);const u=await Vg(i.localStore,e,!0),h=new $A(e,u.Ts),m=h.ma(u.documents),g=Ha.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(m,i.isPrimaryClient,g);zg(i,t,v.wa);const E=new qA(e,t,h);return i.Fa.set(e,E),i.Ma.has(t)?i.Ma.get(t).push(e):i.Ma.set(t,[e]),v.snapshot}async function YA(i,e,t){const s=Ae(i),o=s.Fa.get(e),u=s.Ma.get(o.targetId);if(u.length>1)return s.Ma.set(o.targetId,u.filter((h=>!Yu(h,e)))),void s.Fa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await gd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Yd(s.remoteStore,o.targetId),_d(s,o.targetId)})).catch($a)):(_d(s,o.targetId),await gd(s.localStore,o.targetId,!0))}async function XA(i,e){const t=Ae(i),s=t.Fa.get(e),o=t.Ma.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Yd(t.remoteStore,s.targetId))}async function JA(i,e,t){const s=s1(i);try{const o=await(function(h,m){const g=Ae(h),v=yt.now(),E=m.reduce(((B,Y)=>B.add(Y.key)),Pe());let k,D;return g.persistence.runTransaction("Locally write mutations","readwrite",(B=>{let Y=Ar(),J=Pe();return g.cs.getEntries(B,E).next(($=>{Y=$,Y.forEach(((we,ye)=>{ye.isValidDocument()||(J=J.add(we))}))})).next((()=>g.localDocuments.getOverlayedDocuments(B,Y))).next(($=>{k=$;const we=[];for(const ye of m){const Ie=yS(ye,k.get(ye.key).overlayedDocument);Ie!=null&&we.push(new fi(ye.key,Ie,l_(Ie.value.mapValue),wn.exists(!0)))}return g.mutationQueue.addMutationBatch(B,v,we,m)})).next(($=>{D=$;const we=$.applyToLocalDocumentSet(k,J);return g.documentOverlayCache.saveOverlays(B,$.batchId,we)}))})).then((()=>({batchId:D.batchId,changes:v_(k)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,g){let v=h.Ba[h.currentUser.toKey()];v||(v=new et(Me)),v=v.insert(m,g),h.Ba[h.currentUser.toKey()]=v})(s,o.batchId,t),await Ga(s,o.changes),await rc(s.remoteStore)}catch(o){const u=tf(o,"Failed to persist write");t.reject(u)}}async function X_(i,e){const t=Ae(i);try{const s=await cA(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Na.get(u);h&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.va=!0:o.modifiedDocuments.size>0?Ue(h.va):o.removedDocuments.size>0&&(Ue(h.va),h.va=!1))})),await Ga(t,s,e)}catch(s){await $a(s)}}function jg(i,e,t){const s=Ae(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Fa.forEach(((u,h)=>{const m=h.view.Z_(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const g=Ae(h);g.onlineState=m;let v=!1;g.queries.forEach(((E,k)=>{for(const D of k.j_)D.Z_(m)&&(v=!0)})),v&&nf(g)})(s.eventManager,e),o.length&&s.Ca.d_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ZA(i,e,t){const s=Ae(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Na.get(e),u=o&&o.key;if(u){let h=new et(fe.comparator);h=h.insert(u,Ft.newNoDocument(u,Se.min()));const m=Pe().add(u),g=new ec(Se.min(),new Map,new et(Me),h,m);await X_(s,g),s.Oa=s.Oa.remove(u),s.Na.delete(e),rf(s)}else await gd(s.localStore,e,!1).then((()=>_d(s,e,t))).catch($a)}async function e1(i,e){const t=Ae(i),s=e.batch.batchId;try{const o=await uA(t.localStore,e);Z_(t,s,null),J_(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ga(t,o)}catch(o){await $a(o)}}async function t1(i,e,t){const s=Ae(i);try{const o=await(function(h,m){const g=Ae(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let E;return g.mutationQueue.lookupMutationBatch(v,m).next((k=>(Ue(k!==null),E=k.keys(),g.mutationQueue.removeMutationBatch(v,k)))).next((()=>g.mutationQueue.performConsistencyCheck(v))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(v,E,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,E))).next((()=>g.localDocuments.getDocuments(v,E)))}))})(s.localStore,e);Z_(s,e,t),J_(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Ga(s,o)}catch(o){await $a(o)}}function J_(i,e){(i.ka.get(e)||[]).forEach((t=>{t.resolve()})),i.ka.delete(e)}function Z_(i,e,t){const s=Ae(i);let o=s.Ba[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Ba[s.currentUser.toKey()]=o}}function _d(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Ma.get(e))i.Fa.delete(s),t&&i.Ca.$a(s,t);i.Ma.delete(e),i.isPrimaryClient&&i.La.gr(e).forEach((s=>{i.La.containsKey(s)||ev(i,s)}))}function ev(i,e){i.xa.delete(e.path.canonicalString());const t=i.Oa.get(e);t!==null&&(Yd(i.remoteStore,t),i.Oa=i.Oa.remove(e),i.Na.delete(t),rf(i))}function zg(i,e,t){for(const s of t)s instanceof G_?(i.La.addReference(s.key,e),n1(i,s)):s instanceof Q_?(ce("SyncEngine","Document no longer in limbo: "+s.key),i.La.removeReference(s.key,e),i.La.containsKey(s.key)||ev(i,s.key)):Te()}function n1(i,e){const t=e.key,s=t.path.canonicalString();i.Oa.get(t)||i.xa.has(s)||(ce("SyncEngine","New document in limbo: "+t),i.xa.add(s),rf(i))}function rf(i){for(;i.xa.size>0&&i.Oa.size<i.maxConcurrentLimboResolutions;){const e=i.xa.values().next().value;i.xa.delete(e);const t=new fe(Ge.fromString(e)),s=i.qa.next();i.Na.set(s,new WA(t)),i.Oa=i.Oa.insert(t,s),B_(i.remoteStore,new ri(Xn(zd(t.path)),s,"TargetPurposeLimboResolution",Ld.oe))}}async function Ga(i,e,t){const s=Ae(i),o=[],u=[],h=[];s.Fa.isEmpty()||(s.Fa.forEach(((m,g)=>{h.push(s.Ka(g,e,t).then((v=>{var E;if((v||t)&&s.isPrimaryClient){const k=v?!v.fromCache:(E=t==null?void 0:t.targetChanges.get(g.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(g.targetId,k?"current":"not-current")}if(v){o.push(v);const k=Qd.Wi(g.targetId,v);u.push(k)}})))})),await Promise.all(h),s.Ca.d_(o),await(async function(g,v){const E=Ae(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(k=>G.forEach(v,(D=>G.forEach(D.$i,(B=>E.persistence.referenceDelegate.addReference(k,D.targetId,B))).next((()=>G.forEach(D.Ui,(B=>E.persistence.referenceDelegate.removeReference(k,D.targetId,B)))))))))}catch(k){if(!qa(k))throw k;ce("LocalStore","Failed to update sequence numbers: "+k)}for(const k of v){const D=k.targetId;if(!k.fromCache){const B=E.os.get(D),Y=B.snapshotVersion,J=B.withLastLimboFreeSnapshotVersion(Y);E.os=E.os.insert(D,J)}}})(s.localStore,u))}async function r1(i,e){const t=Ae(i);if(!t.currentUser.isEqual(e)){ce("SyncEngine","User change. New user:",e.toKey());const s=await F_(t.localStore,e);t.currentUser=e,(function(u,h){u.ka.forEach((m=>{m.forEach((g=>{g.reject(new ie(W.CANCELLED,h))}))})),u.ka.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ga(t,s.hs)}}function i1(i,e){const t=Ae(i),s=t.Na.get(e);if(s&&s.va)return Pe().add(s.key);{let o=Pe();const u=t.Ma.get(e);if(!u)return o;for(const h of u){const m=t.Fa.get(h);o=o.unionWith(m.view.Va)}return o}}function tv(i){const e=Ae(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=X_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=i1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ZA.bind(null,e),e.Ca.d_=jA.bind(null,e.eventManager),e.Ca.$a=zA.bind(null,e.eventManager),e}function s1(i){const e=Ae(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=e1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=t1.bind(null,e),e}class Bu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=tc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return lA(this.persistence,new oA,e.initialUser,this.serializer)}Ga(e){return new rA(Gd.Zr,this.serializer)}Wa(e){return new mA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Bu.provider={build:()=>new Bu};class vd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>jg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=r1.bind(null,this.syncEngine),await LA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new MA})()}createDatastore(e){const t=tc(e.databaseInfo.databaseId),s=(function(u){return new vA(u)})(e.databaseInfo);return(function(u,h,m,g){return new TA(u,h,m,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new SA(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>jg(this.syncEngine,t,0)),(function(){return Lg.D()?new Lg:new gA})())}createSyncEngine(e,t){return(function(o,u,h,m,g,v,E){const k=new HA(o,u,h,m,g,v);return E&&(k.Qa=!0),k})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=Ae(o);ce("RemoteStore","RemoteStore shutting down."),u.L_.add(5),await Ka(u),u.k_.shutdown(),u.q_.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}vd.provider={build:()=>new vd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Sr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Mt.UNAUTHENTICATED,this.clientId=s_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{ce("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ce("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=tf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Gh(i,e){i.asyncQueue.verifyOperationInProgress(),ce("FirestoreClient","Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await F_(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function Bg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await l1(i);ce("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>bg(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>bg(e.remoteStore,o))),i._onlineComponents=e}async function l1(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ce("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gh(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;io("Error using user provided cache. Falling back to memory cache: "+t),await Gh(i,new Bu)}}else ce("FirestoreClient","Using default OfflineComponentProvider"),await Gh(i,new Bu);return i._offlineComponents}async function nv(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ce("FirestoreClient","Using user provided OnlineComponentProvider"),await Bg(i,i._uninitializedComponentsProvider._online)):(ce("FirestoreClient","Using default OnlineComponentProvider"),await Bg(i,new vd))),i._onlineComponents}function u1(i){return nv(i).then((e=>e.syncEngine))}async function $g(i){const e=await nv(i),t=e.eventManager;return t.onListen=KA.bind(null,e.syncEngine),t.onUnlisten=YA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=GA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=XA.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(i,e,t){if(!t)throw new ie(W.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function c1(i,e,t,s){if(e===!0&&s===!0)throw new ie(W.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Wg(i){if(!fe.isDocumentKey(i))throw new ie(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Hg(i){if(fe.isDocumentKey(i))throw new ie(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function ic(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Te()}function Hi(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ie(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ic(i);throw new ie(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}c1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ie(W.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ie(W.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ie(W.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kg(e),e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new RI;switch(s.type){case"firstParty":return new xI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ie(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=qg.get(t);s&&(ce("ComponentProvider","Removing Datastore"),qg.delete(t),s.terminate())})(this),Promise.resolve()}}function h1(i,e,t,s={}){var o;const u=(i=Hi(i,sc))._getSettings(),h=`${e}:${t}`;if(u.host!=="firestore.googleapis.com"&&u.host!==h&&io("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},u),{host:h,ssl:!1})),s.mockUserToken){let m,g;if(typeof s.mockUserToken=="string")m=s.mockUserToken,g=Mt.MOCK_USER;else{m=$0(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new ie(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Mt(v)}i._authCredentials=new kI(new i_(m,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ts(this.firestore,e,this._query)}}class Zt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new li(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Zt(this.firestore,e,this._key)}}class li extends ts{constructor(e,t,s){super(e,t,zd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Zt(this.firestore,null,new fe(e))}withConverter(e){return new li(this.firestore,e,this._path)}}function Qh(i,e,...t){if(i=st(i),iv("collection","path",e),i instanceof sc){const s=Ge.fromString(e,...t);return Hg(s),new li(i,null,s)}{if(!(i instanceof Zt||i instanceof li))throw new ie(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ge.fromString(e,...t));return Hg(s),new li(i.firestore,null,s)}}function Gg(i,e,...t){if(i=st(i),arguments.length===1&&(e=s_.newId()),iv("doc","path",e),i instanceof sc){const s=Ge.fromString(e,...t);return Wg(s),new Zt(i,null,new fe(s))}{if(!(i instanceof Zt||i instanceof li))throw new ie(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ge.fromString(e,...t));return Wg(s),new Zt(i.firestore,i instanceof li?i.converter:null,new fe(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new j_(this,"async_queue_retry"),this.Vu=()=>{const s=Kh();s&&ce("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=e;const t=Kh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Kh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise((()=>{}));const t=new Wi;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Pu.push(e),this.pu())))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!qa(e))throw e;ce("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(e){const t=this.mu.then((()=>(this.du=!0,e().catch((s=>{this.Eu=s,this.du=!1;const o=(function(h){let m=h.message||"";return h.stack&&(m=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),m})(s);throw Sr("INTERNAL UNHANDLED ERROR: ",o),s})).then((s=>(this.du=!1,s))))));return this.mu=t,t}enqueueAfterDelay(e,t,s){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const o=ef.createAndSchedule(this,e,t,s,(u=>this.yu(u)));return this.Tu.push(o),o}fu(){this.Eu&&Te()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then((()=>{this.Tu.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()}))}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Yg(i){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1})(i,["next","error","complete"])}class Ma extends sc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Qg,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qg(e),this._firestoreClient=void 0,await e}}}function d1(i,e){const t=typeof i=="object"?i:gy(),s=typeof i=="string"?i:"(default)",o=Sd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=z0("firestore");u&&h1(o,...u)}return o}function sf(i){if(i._terminated)throw new ie(W.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||f1(i),i._firestoreClient}function f1(i){var e,t,s;const o=i._freezeSettings(),u=(function(m,g,v,E){return new $I(m,g,v,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,rv(E.experimentalLongPollingOptions),E.useFetchStreams)})(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new a1(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&(function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}})(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this._byteString=e}static fromBase64String(e){try{return new co(Nt.fromBase64String(e))}catch(t){throw new ie(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new co(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ie(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ie(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ie(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Me(this._lat,e._lat)||Me(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1=/^__.*__$/;class m1{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new fi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Wa(e,this.data,t,this.fieldTransforms)}}class sv{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new fi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ov(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}class uf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.vu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new uf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:s,xu:!1});return o.Ou(e),o}Nu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:s,xu:!1});return o.vu(),o}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return $u(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(ov(this.Cu)&&p1.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class g1{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||tc(e)}Qu(e,t,s,o=!1){return new uf({Cu:e,methodName:t,qu:s,path:Pt.emptyPath(),xu:!1,ku:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cf(i){const e=i._freezeSettings(),t=tc(i._databaseId);return new g1(i._databaseId,!!e.ignoreUndefinedProperties,t)}function y1(i,e,t,s,o,u={}){const h=i.Qu(u.merge||u.mergeFields?2:0,e,t,o);hf("Data must be an object, but it was:",h,s);const m=uv(s,h);let g,v;if(u.merge)g=new un(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const k of u.mergeFields){const D=wd(e,k,t);if(!h.contains(D))throw new ie(W.INVALID_ARGUMENT,`Field '${D}' is specified in your field mask but missing from your input data.`);hv(E,D)||E.push(D)}g=new un(E),v=h.fieldTransforms.filter((k=>g.covers(k.field)))}else g=null,v=h.fieldTransforms;return new m1(new Jt(m),g,v)}class oc extends of{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof oc}}function av(i,e,t,s){const o=i.Qu(1,e,t);hf("Data must be an object, but it was:",o,s);const u=[],h=Jt.empty();Zi(s,((g,v)=>{const E=df(e,g,t);v=st(v);const k=o.Nu(E);if(v instanceof oc)u.push(E);else{const D=Ya(v,k);D!=null&&(u.push(E),h.set(E,D))}}));const m=new un(u);return new sv(h,m,o.fieldTransforms)}function lv(i,e,t,s,o,u){const h=i.Qu(1,e,t),m=[wd(e,s,t)],g=[o];if(u.length%2!=0)throw new ie(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let D=0;D<u.length;D+=2)m.push(wd(e,u[D])),g.push(u[D+1]);const v=[],E=Jt.empty();for(let D=m.length-1;D>=0;--D)if(!hv(v,m[D])){const B=m[D];let Y=g[D];Y=st(Y);const J=h.Nu(B);if(Y instanceof oc)v.push(B);else{const $=Ya(Y,J);$!=null&&(v.push(B),E.set(B,$))}}const k=new un(v);return new sv(E,k,h.fieldTransforms)}function _1(i,e,t,s=!1){return Ya(t,i.Qu(s?4:3,e))}function Ya(i,e){if(cv(i=st(i)))return hf("Unsupported field value:",e,i),uv(i,e);if(i instanceof of)return(function(s,o){if(!ov(o.Cu))throw o.Bu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Bu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let g=Ya(m,o.Lu(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=st(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return hS(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=yt.fromDate(s);return{timestampValue:ju(o.serializer,u)}}if(s instanceof yt){const u=new yt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ju(o.serializer,u)}}if(s instanceof af)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof co)return{bytesValue:N_(o.serializer,s._byteString)};if(s instanceof Zt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Bu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Hd(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof lf)return(function(h,m){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map((g=>{if(typeof g!="number")throw m.Bu("VectorValues must only contain numeric values.");return Bd(m.serializer,g)}))}}}}}})(s,o);throw o.Bu(`Unsupported field value: ${ic(s)}`)})(i,e)}function uv(i,e){const t={};return o_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zi(i,((s,o)=>{const u=Ya(o,e.Mu(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function cv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof yt||i instanceof af||i instanceof co||i instanceof Zt||i instanceof of||i instanceof lf)}function hf(i,e,t){if(!cv(t)||!(function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)})(t)){const s=ic(t);throw s==="an object"?e.Bu(i+" a custom object"):e.Bu(i+" "+s)}}function wd(i,e,t){if((e=st(e))instanceof Qa)return e._internalPath;if(typeof e=="string")return df(i,e);throw $u("Field path arguments must be of type string or ",i,!1,void 0,t)}const v1=new RegExp("[~\\*/\\[\\]]");function df(i,e,t){if(e.search(v1)>=0)throw $u(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Qa(...e.split("."))._internalPath}catch{throw $u(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function $u(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ie(W.INVALID_ARGUMENT,m+i+g)}function hv(i,e){return i.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new w1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ff("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class w1 extends dv{data(){return super.data()}}function ff(i,e){return typeof e=="string"?df(i,e):e instanceof Qa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ie(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pf{}class fv extends pf{}function Xg(i,e,...t){let s=[];e instanceof pf&&s.push(e),s=s.concat(t),(function(u){const h=u.filter((g=>g instanceof gf)).length,m=u.filter((g=>g instanceof mf)).length;if(h>1||h>0&&m>0)throw new ie(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)i=o._apply(i);return i}class mf extends fv{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new mf(e,t,s)}_apply(e){const t=this._parse(e);return pv(e._query,t),new ts(e.firestore,e.converter,cd(e._query,t))}_parse(e){const t=cf(e.firestore);return(function(u,h,m,g,v,E,k){let D;if(v.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ie(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){Zg(k,E);const B=[];for(const Y of k)B.push(Jg(g,u,Y));D={arrayValue:{values:B}}}else D=Jg(g,u,k)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||Zg(k,E),D=_1(m,h,k,E==="in"||E==="not-in");return ct.create(v,E,D)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class gf extends pf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new gf(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Mn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,u){let h=o;const m=u.getFlattenedFilters();for(const g of m)pv(h,g),h=cd(h,g)})(e._query,t),new ts(e.firestore,e.converter,cd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class yf extends fv{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new yf(e,t)}_apply(e){const t=(function(o,u,h){if(o.startAt!==null)throw new ie(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ie(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Oa(u,h)})(e._query,this._field,this._direction);return new ts(e.firestore,e.converter,(function(o,u){const h=o.explicitOrderBy.concat([u]);return new go(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function T1(i,e="asc"){const t=e,s=ff("orderBy",i);return yf._create(s,t)}function Jg(i,e,t){if(typeof(t=st(t))=="string"){if(t==="")throw new ie(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!m_(e)&&t.indexOf("/")!==-1)throw new ie(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ge.fromString(t));if(!fe.isDocumentKey(s))throw new ie(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return gg(i,new fe(s))}if(t instanceof Zt)return gg(i,t._key);throw new ie(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ic(t)}.`)}function Zg(i,e){if(!Array.isArray(i)||i.length===0)throw new ie(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function pv(i,e){const t=(function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(i.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ie(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class I1{convertValue(e,t="none"){switch(Xi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Yi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Zi(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>it(h.doubleValue)));return new lf(u)}convertGeoPoint(e){return new af(it(e.latitude),it(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Md(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Na(e));default:return null}}convertTimestamp(e){const t=ci(e);return new yt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ge.fromString(e);Ue(M_(s));const o=new Da(s.get(1),s.get(3)),u=new fe(s.popFirst(5));return o.isEqual(t)||Sr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1(i,e,t){let s;return s=i?t&&(t.merge||t.mergeFields)?i.toFirestore(e,t):i.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mv extends dv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ku(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(ff("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class ku extends mv{data(e={}){return super.data(e)}}class A1{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ea(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new ku(this._firestore,this._userDataWriter,s.key,s,new Ea(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ie(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const g=new ku(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ea(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const g=new ku(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ea(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,E=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),E=h.indexOf(m.doc.key)),{type:R1(m.type),doc:g,oldIndex:v,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function R1(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te()}}class gv extends I1{constructor(e){super(),this.firestore=e}convertBytes(e){return new co(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Zt(this.firestore,null,t)}}function k1(i,e,t,...s){i=Hi(i,Zt);const o=Hi(i.firestore,Ma),u=cf(o);let h;return h=typeof(e=st(e))=="string"||e instanceof Qa?lv(u,"updateDoc",i._key,e,t,s):av(u,"updateDoc",i._key,e),yv(o,[h.toMutation(i._key,wn.exists(!0))])}function ey(i,...e){var t,s,o;i=st(i);let u={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||Yg(e[h])||(u=e[h],h++);const m={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(Yg(e[h])){const k=e[h];e[h]=(t=k.next)===null||t===void 0?void 0:t.bind(k),e[h+1]=(s=k.error)===null||s===void 0?void 0:s.bind(k),e[h+2]=(o=k.complete)===null||o===void 0?void 0:o.bind(k)}let g,v,E;if(i instanceof Zt)v=Hi(i.firestore,Ma),E=zd(i._key.path),g={next:k=>{e[h]&&e[h](C1(v,i,k))},error:e[h+1],complete:e[h+2]};else{const k=Hi(i,ts);v=Hi(k.firestore,Ma),E=k._query;const D=new gv(v);g={next:B=>{e[h]&&e[h](new A1(v,D,k,B))},error:e[h+1],complete:e[h+2]},E1(i._query)}return(function(D,B,Y,J){const $=new o1(J),we=new BA(B,$,Y);return D.asyncQueue.enqueueAndForget((async()=>FA(await $g(D),we))),()=>{$.Za(),D.asyncQueue.enqueueAndForget((async()=>UA(await $g(D),we)))}})(sf(v),E,m,g)}function yv(i,e){return(function(s,o){const u=new Wi;return s.asyncQueue.enqueueAndForget((async()=>JA(await u1(s),o,u))),u.promise})(sf(i),e)}function C1(i,e,t){const s=t.docs.get(e._key),o=new gv(i);return new mv(i,o,e._key,s,new Ea(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=cf(e)}set(e,t,s){this._verifyNotCommitted();const o=Yh(e,this._firestore),u=S1(o.converter,t,s),h=y1(this._dataReader,"WriteBatch.set",o._key,u,o.converter!==null,s);return this._mutations.push(h.toMutation(o._key,wn.none())),this}update(e,t,s,...o){this._verifyNotCommitted();const u=Yh(e,this._firestore);let h;return h=typeof(t=st(t))=="string"||t instanceof Qa?lv(this._dataReader,"WriteBatch.update",u._key,t,s,o):av(this._dataReader,"WriteBatch.update",u._key,t),this._mutations.push(h.toMutation(u._key,wn.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Yh(e,this._firestore);return this._mutations=this._mutations.concat(new $d(t._key,wn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ie(W.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Yh(i,e){if((i=st(i)).firestore!==e)throw new ie(W.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x1(i){return sf(i=Hi(i,Ma)),new P1(i,(e=>yv(i,e)))}(function(e,t=!0){(function(o){mo=o})(ho),no(new Ki("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Ma(new CI(s.getProvider("auth-internal")),new DI(s.getProvider("app-check-internal")),(function(v,E){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ie(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Da(v.options.projectId,E)})(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),oi(hg,"4.7.3",e),oi(hg,"4.7.3","esm2017")})();const N1={apiKey:"AIzaSyDAx3_N8gZYSmBhzEPUIfnIgwZMzPLQGK0",authDomain:"interview-coder-f895b.firebaseapp.com",databaseURL:"https://interview-coder-f895b-default-rtdb.firebaseio.com",projectId:"interview-coder-f895b",storageBucket:"interview-coder-f895b.firebasestorage.app",messagingSenderId:"119848230297",appId:"1:119848230297:web:cc4672eee21179317b8708",measurementId:"G-YLL76252LN"},_v=my(N1),_u=SI(_v),ma=d1(_v);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vv=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var V1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=ze.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},g)=>ze.createElement("svg",{ref:g,...V1,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:vv("lucide",o),...m},[...h.map(([v,E])=>ze.createElement(v,E)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=(i,e)=>{const t=ze.forwardRef(({className:s,...o},u)=>ze.createElement(O1,{ref:u,iconNode:e,className:vv(`lucide-${D1(i)}`,s),...o}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=en("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=en("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=en("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=en("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=en("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=en("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=en("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=en("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=en("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=en("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=en("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=en("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=en("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=en("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),sy="/assets/admin-BStT3JrB.png";function W1(){const[i,e]=ze.useState(null),[t,s]=ze.useState(!0),[o,u]=ze.useState([]),[h,m]=ze.useState(""),[g,v]=ze.useState(""),[E,k]=ze.useState(null),[D,B]=ze.useState(""),[Y,J]=ze.useState(Date.now()),[$,we]=ze.useState("users"),[ye,Ie]=ze.useState([]),[Re,Be]=ze.useState(!1),[ke,x]=ze.useState(null),[I,A]=ze.useState(!1),[C,N]=ze.useState("monthly"),[O,S]=ze.useState(6);ze.useEffect(()=>{const z=setInterval(()=>J(Date.now()),6e4);return()=>clearInterval(z)},[]),ze.useEffect(()=>{const z=fT(_u,te=>{te&&te.email==="admin@islamguide.com"?e(te):(e(null),te&&(eg(_u),k("Unauthorized: Only the designated admin can access this dashboard."))),s(!1)});return()=>z()},[]),ze.useEffect(()=>{if(!i)return;const z=Xg(Qh(ma,"users")),te=ey(z,ae=>{const _e=[];ae.forEach(pe=>{_e.push({id:pe.id,...pe.data()})}),u(_e)},ae=>{console.error("Users Snapshot Error:",ae),ae.code==="permission-denied"&&alert("FIREBASE_PERMISSION_DENIED: Your Firestore rules are blocking access to the users collection.")});return()=>te()},[i]),ze.useEffect(()=>{if(!i||$!=="licenses")return;const z=Xg(Qh(ma,"license_keys"),T1("createdAt","desc")),te=ey(z,ae=>{const _e=[];ae.forEach(pe=>{_e.push({id:pe.id,...pe.data()})}),Ie(_e)},ae=>{console.error("Licenses Snapshot Error:",ae),ae.code==="permission-denied"&&alert("SECURITY_ERROR: Failed to retrieve license keys. Ensure you have applied the Firestore Rules.")});return()=>te()},[i,$]);const Xe=async z=>{z.preventDefault(),k(null);try{await cT(_u,h,g)}catch(te){k(te.message)}},_t=()=>eg(_u),ht=async(z,te)=>{try{await k1(Gg(ma,"users",z),{status:te})}catch(ae){alert("Error: "+ae.message)}},De=z=>z?(Y-new Date(z).getTime())/1e3/60<5:!1,ee=z=>{if(!z)return"Never";const te=Math.floor((Y-new Date(z).getTime())/1e3/60);return te<1?"Just now":te<60?`${te}m ago`:te<1440?`${Math.floor(te/60)}h ago`:new Date(z).toLocaleDateString()},de=ze.useMemo(()=>o.filter(z=>{var te,ae;return(((te=z.email)==null?void 0:te.toLowerCase())||"").includes(D.toLowerCase())||(((ae=z.name)==null?void 0:ae.toLowerCase())||"").includes(D.toLowerCase())}).slice(0,100),[o,D]),ne=ze.useMemo(()=>ye.filter(z=>{var te,ae,_e;return(((te=z.key)==null?void 0:te.toLowerCase())||"").includes(D.toLowerCase())||(((ae=z.usedByEmail)==null?void 0:ae.toLowerCase())||"").includes(D.toLowerCase())||(((_e=z.usedByName)==null?void 0:_e.toLowerCase())||"").includes(D.toLowerCase())}).slice(0,100),[ye,D]),V=async()=>{Be(!0);try{const z=x1(ma),te=Qh(ma,"license_keys");let ae=null,_e="eternal";if(C==="monthly"){const pe=new Date;pe.setMonth(pe.getMonth()+1),ae=pe.toISOString(),_e="monthly"}else if(C==="custom"){const pe=new Date;pe.setMonth(pe.getMonth()+O),ae=pe.toISOString(),_e=`${O}mo`}for(let pe=0;pe<500;pe++){const je=Math.random().toString(36).substring(2,10).toUpperCase()+"-"+Math.random().toString(36).substring(2,10).toUpperCase(),ot=Gg(te);z.set(ot,{key:je,isUsed:!1,usedByUid:null,deviceId:null,createdAt:new Date().toISOString(),keyType:_e,expiresAt:ae,transfersUsed:0,maxTransfers:3,lastTransferDate:null,previousDevices:[],transferHistory:[],violationAttempts:[]})}await z.commit(),alert(`500 ${_e} keys generated!`),A(!1)}catch(z){alert("Error: "+z.message)}finally{Be(!1)}},q=()=>{const z=ye.filter(pe=>!pe.isUsed).map(pe=>pe.key).join(`
`),te=new Blob([z],{type:"text/plain"}),ae=URL.createObjectURL(te),_e=document.createElement("a");_e.href=ae,_e.download=`license_keys_${new Date().toISOString().split("T")[0]}.txt`,_e.click(),URL.revokeObjectURL(ae)},oe=ze.useMemo(()=>ye.reduce((z,te)=>z+(te.violationAttempts||[]).filter(ae=>!ae.resolved).length,0),[ye]);return t?L.jsx("div",{className:"min-h-screen bg-[#021008] flex items-center justify-center",children:L.jsx("div",{className:"w-10 h-10 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"})}):i?L.jsx("div",{className:"min-h-screen bg-[#050505] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(5,5,5,1))] text-white p-6 lg:p-8 font-sans selection:bg-emerald-500/30 overflow-x-hidden",children:L.jsxs("div",{className:"max-w-[1400px] mx-auto relative cursor-default",children:[L.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16",children:[L.jsxs("div",{className:"flex items-center gap-6",children:[L.jsxs("div",{className:"relative group",children:[L.jsx("div",{className:"absolute -inset-2 bg-emerald-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"}),L.jsx("img",{src:sy,alt:"Admin",className:"relative w-16 h-16 rounded-2xl border border-white/10 shadow-2xl object-cover"})]}),L.jsxs("div",{children:[L.jsxs("div",{className:"inline-flex items-center gap-3 px-4 py-1.5 bg-white/[0.03] border border-white/5 rounded-full text-emerald-400 text-[9px] font-black uppercase tracking-[0.3em] mb-3 backdrop-blur-md",children:[L.jsxs("span",{className:"relative flex h-2 w-2",children:[L.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),L.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),"System Authorization Alpha ",L.jsx("span",{className:"text-white/20",children:"|"})," Online",oe>0&&L.jsxs("span",{className:"bg-red-500 text-white px-2 py-0.5 rounded-full text-[8px] font-black animate-pulse ml-2 shadow-[0_0_15px_rgba(239,68,68,0.4)]",children:[oe," ALERT",oe>1?"S":""]})]}),L.jsxs("h1",{className:"text-4xl font-black tracking-tighter flex items-center gap-4 leading-none uppercase italic",children:[L.jsx("span",{className:"bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent",children:"Interview"}),L.jsx("span",{className:"text-emerald-500 font-light drop-shadow-[0_0_20px_rgba(16,185,129,0.5)]",children:"Core"})]})]})]}),L.jsxs("div",{className:"flex items-center gap-4",children:[L.jsxs("div",{className:"hidden md:block text-right mr-4",children:[L.jsx("p",{className:"text-[10px] font-black text-white/20 uppercase tracking-[0.2em]",children:"Active Session"}),L.jsx("p",{className:"text-xs font-bold text-zinc-400",children:i==null?void 0:i.email})]}),L.jsxs("button",{onClick:_t,className:"flex items-center gap-3 bg-white/[0.02] border border-white/5 px-5 py-3 rounded-2xl hover:bg-red-500/10 hover:border-red-500/20 transition-all group active:scale-95",children:[L.jsx(z1,{size:18,className:"text-white/40 group-hover:text-red-400 transition-colors"}),L.jsx("span",{className:"font-black text-[10px] uppercase tracking-widest text-white/60 group-hover:text-red-400 transition-colors",children:"Terminate"})]})]})]}),L.jsxs("div",{className:"flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12",children:[L.jsxs("div",{className:"flex p-1.5 bg-white/[0.02] border border-white/5 rounded-2xl inline-flex backdrop-blur-xl",children:[L.jsxs("button",{onClick:()=>we("users"),className:`flex items-center gap-3 px-6 py-2.5 rounded-xl font-bold transition-all text-xs ${$==="users"?"bg-white/10 text-white shadow-[0_2px_10px_rgba(0,0,0,0.2)] border border-white/[0.05]":"text-white/40 hover:text-white/80"}`,children:[L.jsx(iy,{size:16})," Users"]}),L.jsxs("button",{onClick:()=>we("licenses"),className:`relative flex items-center gap-3 px-6 py-2.5 rounded-xl font-bold transition-all text-xs ${$==="licenses"?"bg-white/10 text-white shadow-[0_2px_10px_rgba(0,0,0,0.2)] border border-white/[0.05]":"text-white/40 hover:text-white/80"}`,children:[L.jsx(ry,{size:16})," Licenses",oe>0&&L.jsx("span",{className:"absolute max-w-fit px-1.5 min-w-[20px] -top-2 -right-2 bg-red-500 text-white h-5 rounded-full text-[10px] font-black flex items-center justify-center shadow-[0_0_10px_rgba(239,68,68,0.5)]",children:oe})]})]}),L.jsxs("div",{className:"relative group w-full lg:w-96 drop-shadow-2xl",children:[L.jsx($1,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-emerald-500 transition-colors",size:18}),L.jsx("input",{type:"text",placeholder:"Search accounts, licenses, dates...",value:D,onChange:z=>B(z.target.value),className:"w-full bg-white/[0.02] border border-white/5 rounded-xl py-2 pl-10 pr-4 text-white text-xs focus:outline-none focus:border-emerald-500/40 focus:bg-white/[0.04] transition-all placeholder:text-white/20 shadow-inner"})]})]}),L.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-12",children:[{label:$==="users"?"Total Users":"Total Keys",value:$==="users"?o.length:ye.length,color:"text-white"},{label:$==="users"?"Pending Approval":"Available Keys",value:$==="users"?o.filter(z=>z.status==="pending").length:ye.filter(z=>!z.isUsed).length,color:"text-orange-400"},{label:$==="users"?"Online Now":oe>0?"Active Violations":"Online Units",value:$==="users"?o.filter(z=>De(z.lastSeen)).length:oe,color:$==="licenses"&&oe>0?"text-red-400":"text-emerald-400"}].map((z,te)=>L.jsxs("div",{className:"group relative bg-[#0e0e0e] border border-white/[0.05] p-5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors shadow-xl",children:[L.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"}),L.jsx("p",{className:"text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2",children:z.label}),L.jsx("p",{className:`text-3xl font-black tracking-tight ${z.color}`,children:z.value})]},te))}),$==="users"?L.jsx("div",{className:"bg-[#0e0e0e] border border-white/5 rounded-2xl overflow-hidden shadow-2xl",children:L.jsxs("div",{className:"overflow-x-auto",children:[L.jsxs("table",{className:"w-full text-left border-collapse",children:[L.jsx("thead",{children:L.jsxs("tr",{className:"border-b border-white/5 bg-white/[0.01]",children:[L.jsx("th",{className:"px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40",children:"Identity"}),L.jsx("th",{className:"px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 text-center",children:"Status"}),L.jsx("th",{className:"px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40",children:"Activity"}),L.jsx("th",{className:"px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 text-right",children:"Actions"})]})}),L.jsx("tbody",{className:"divide-y divide-white/5",children:de.map(z=>{var te,ae;return L.jsxs("tr",{className:"hover:bg-white/[0.02] transition-colors group/row",children:[L.jsx("td",{className:"px-5 py-3",children:L.jsxs("div",{className:"flex items-center gap-5",children:[L.jsxs("div",{className:"relative",children:[L.jsx("div",{className:`w-10 h-10 border rounded-full flex items-center justify-center font-bold text-base ${De(z.lastSeen)?"bg-emerald-500/10 text-emerald-400 border-emerald-500/20":"bg-white/5 text-white/40 border-white/5"}`,children:((ae=(te=z.name)==null?void 0:te[0])==null?void 0:ae.toUpperCase())||"?"}),De(z.lastSeen)&&L.jsx("div",{className:"absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-[2.5px] border-[#0a0a0a]"})]}),L.jsxs("div",{children:[L.jsx("div",{className:"font-bold text-sm tracking-tight text-white mb-0.5",children:z.name||"Anonymous"}),L.jsx("div",{className:"text-[10px] text-white/40 font-medium tracking-wide",children:z.email})]})]})}),L.jsx("td",{className:"px-5 py-3 text-center",children:L.jsx("span",{className:`inline-flex items-center px-3 py-1.5 rounded-lg text-[9px] font-bold tracking-[0.15em] uppercase border ${z.status==="approved"?"bg-emerald-500/10 text-emerald-400 border-emerald-500/10":"bg-orange-500/10 text-orange-400 border-orange-500/10"}`,children:z.status||"pending"})}),L.jsx("td",{className:"px-5 py-3",children:L.jsx("div",{className:"flex items-center gap-2",children:L.jsx("span",{className:`text-[11px] font-bold ${De(z.lastSeen)?"text-emerald-400":"text-white/30"}`,children:De(z.lastSeen)?"Online Now":ee(z.lastSeen)})})}),L.jsx("td",{className:"px-5 py-3 text-right",children:z.status==="pending"?L.jsxs("button",{onClick:()=>ht(z.id,"approved"),className:"inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black text-[9px] font-bold px-4 py-2 rounded-lg transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]",children:[L.jsx(M1,{size:14})," Approve"]}):L.jsxs("button",{onClick:()=>ht(z.id,"pending"),className:"inline-flex items-center gap-2 bg-white/[0.03] border border-white/5 text-white/50 hover:text-white hover:bg-red-500/20 hover:border-red-500/30 text-[9px] font-bold px-4 py-2 rounded-lg transition-all",children:[L.jsx(ny,{size:14})," Revoke"]})})]},z.id)})})]}),de.length===0&&L.jsxs("div",{className:"p-24 text-center",children:[L.jsx(iy,{size:48,className:"mx-auto text-white/10 mb-6"}),L.jsx("div",{className:"text-white/40 font-bold text-lg tracking-tight",children:"No users found"})]})]})}):L.jsxs("div",{className:"space-y-8 animate-in fade-in duration-500",children:[L.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[L.jsxs("h2",{className:"text-2xl font-black tracking-tight flex items-center gap-3 italic uppercase",children:[L.jsx(ry,{className:"text-emerald-500",size:24})," License Gateway"]}),L.jsxs("div",{className:"flex gap-4",children:[L.jsxs("button",{onClick:q,disabled:ye.length===0,className:"flex items-center gap-3 bg-white/[0.02] border border-white/5 px-6 py-3 rounded-xl hover:bg-white/[0.05] transition-all text-xs font-bold disabled:opacity-20",children:[L.jsx(U1,{size:18})," Export Buffer"]}),L.jsxs("button",{onClick:()=>A(!0),className:"flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-3 rounded-xl font-bold text-xs transition-all shadow-[0_4px_20px_rgba(16,185,129,0.3)]",children:[L.jsx(F1,{size:18})," Initialize Keys"]})]})]}),L.jsx("div",{className:"bg-[#0e0e0e] border border-white/5 rounded-2xl overflow-hidden shadow-2xl",children:L.jsx("div",{className:"overflow-x-auto",children:L.jsxs("table",{className:"w-full text-left border-collapse",children:[L.jsx("thead",{children:L.jsxs("tr",{className:"border-b border-white/5 bg-white/[0.01]",children:[L.jsx("th",{className:"px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40",children:"Sequence"}),L.jsx("th",{className:"px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 text-center",children:"State"}),L.jsx("th",{className:"px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40",children:"Assigned To"}),L.jsx("th",{className:"px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40",children:"Alerts"})]})}),L.jsx("tbody",{className:"divide-y divide-white/5",children:ne.map(z=>L.jsxs("tr",{className:"hover:bg-white/[0.02] transition-colors group/row",children:[L.jsxs("td",{className:"px-5 py-4",children:[L.jsx("div",{className:"font-mono text-emerald-400 text-sm font-bold tracking-wider mb-1 select-all",children:z.key}),L.jsxs("div",{className:"text-[9px] text-white/20 font-medium uppercase tracking-widest",children:[z.keyType," • Created ",new Date(z.createdAt).toLocaleDateString()]})]}),L.jsx("td",{className:"px-5 py-4 text-center",children:L.jsx("span",{className:`inline-flex px-3 py-1.5 rounded-lg text-[9px] font-bold tracking-widest uppercase border ${z.isUsed?"bg-emerald-500/10 text-emerald-400 border-emerald-500/10":"bg-white/5 text-white/20 border-white/5"}`,children:z.isUsed?"Active":"Standby"})}),L.jsx("td",{className:"px-5 py-4",children:z.usedByEmail?L.jsxs("div",{children:[L.jsx("div",{className:"text-xs font-bold text-white mb-0.5",children:z.usedByName||"Linked User"}),L.jsx("div",{className:"text-[10px] text-white/30 font-medium",children:z.usedByEmail})]}):L.jsx("span",{className:"text-[10px] text-white/10 font-bold uppercase tracking-widest",children:"Unassigned"})}),L.jsx("td",{className:"px-5 py-4",children:L.jsxs("div",{className:"flex items-center gap-3",children:[(z.violationAttempts||[]).filter(te=>!te.resolved).length>0&&L.jsxs("div",{className:"flex items-center gap-1.5 bg-red-500/10 text-red-500 px-2 py-1 rounded-md border border-red-500/10 animate-pulse",children:[L.jsx(q1,{size:12}),L.jsx("span",{className:"text-[10px] font-black italic",children:"!"})]}),L.jsx("button",{onClick:()=>x(ke===z.id?null:z.id),className:"p-2 hover:bg-white/5 rounded-lg transition-colors text-white/30 hover:text-white",children:ke===z.id?L.jsx(b1,{size:16}):L.jsx(L1,{size:16})})]})})]},z.id))})]})})})]}),I&&L.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-6 backdrop-blur-md bg-black/40 animate-in fade-in duration-300",children:L.jsxs("div",{className:"bg-[#0e0e0e] border border-white/10 w-full max-w-md rounded-3xl overflow-hidden shadow-2xl",children:[L.jsxs("div",{className:"p-8 border-b border-white/5 flex justify-between items-center",children:[L.jsxs("div",{children:[L.jsx("h3",{className:"text-xl font-black tracking-tight italic uppercase",children:"Provision protocol"}),L.jsx("p",{className:"text-[10px] text-white/30 font-bold uppercase tracking-widest mt-1",children:"Select key configuration"})]}),L.jsx("button",{onClick:()=>A(!1),className:"text-white/20 hover:text-white transition-colors",children:L.jsx(ny,{size:24})})]}),L.jsxs("div",{className:"p-8 space-y-8",children:[L.jsx("div",{className:"grid grid-cols-3 gap-3",children:["monthly","custom","eternal"].map(z=>L.jsx("button",{onClick:()=>N(z),className:`py-3 px-2 rounded-xl text-[10px] font-bold uppercase tracking-widest border transition-all ${C===z?"bg-emerald-500 text-black border-emerald-400":"bg-white/5 text-white/40 border-white/5 hover:border-white/10"}`,children:z},z))}),C==="custom"&&L.jsxs("div",{className:"space-y-4 animate-in slide-in-from-top-2",children:[L.jsx("label",{className:"block text-[10px] font-black text-emerald-500/50 uppercase tracking-[0.3em]",children:"Duration (Months)"}),L.jsx("input",{type:"range",min:"1",max:"12",value:O,onChange:z=>S(parseInt(z.target.value)),className:"w-full accent-emerald-500 bg-white/5 h-1.5 rounded-full appearance-none"}),L.jsxs("div",{className:"text-center font-black text-3xl text-emerald-400",children:[O," ",L.jsx("span",{className:"text-xs uppercase text-white/20",children:"Months"})]})]}),L.jsx("button",{onClick:V,disabled:Re,className:"w-full bg-emerald-500 hover:bg-emerald-400 text-black py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-[0_10px_30px_rgba(16,185,129,0.3)] disabled:opacity-50",children:Re?L.jsx(B1,{className:"animate-spin mx-auto",size:18}):"Execute Generation"})]})]})}),L.jsxs("div",{className:"mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4",children:[L.jsx("p",{className:"text-[10px] font-black text-white/10 uppercase tracking-[0.4em]",children:"NEURAL CORE v6.0.4 • © 2026 Admin Hub"}),L.jsxs("div",{className:"flex gap-8",children:[L.jsxs("span",{className:"flex items-center gap-2 text-[9px] font-black text-emerald-500/30 uppercase tracking-widest",children:[L.jsx(ty,{size:10})," Latency: 24ms"]}),L.jsxs("span",{className:"flex items-center gap-2 text-[9px] font-black text-emerald-500/30 uppercase tracking-widest",children:[L.jsx(j1,{size:10})," Region: Global"]})]})]})]})}):L.jsxs("div",{className:"min-h-screen bg-[#020804] bg-[radial-gradient(circle_at_50%_0%,_#0b3a24_0%,_#020804_100%)] flex flex-col items-center justify-center p-6 text-white font-sans overflow-hidden",children:[L.jsxs("div",{className:"absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none",children:[L.jsx("div",{className:"absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/20 rounded-full blur-[120px]"}),L.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-600/10 rounded-full blur-[120px]"})]}),L.jsxs("div",{className:"max-w-md w-full relative group",children:[L.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-emerald-800/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"}),L.jsxs("div",{className:"relative bg-[#05150d]/80 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-10 shadow-2xl overflow-hidden",children:[L.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"}),L.jsx("div",{className:"flex justify-center mb-8",children:L.jsxs("div",{className:"relative",children:[L.jsx("div",{className:"absolute -inset-4 bg-emerald-500/20 rounded-full blur-xl animate-pulse"}),L.jsx("div",{className:"relative bg-emerald-500/10 p-1 rounded-[2.5rem] border border-emerald-500/20 shadow-inner overflow-hidden",children:L.jsx("img",{src:sy,alt:"Admin Core",className:"w-24 h-24 object-cover rounded-[2rem]"})})]})}),L.jsx("h1",{className:"text-4xl font-black text-center mb-2 tracking-tighter bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent italic uppercase",children:"Command Center"}),L.jsxs("p",{className:"text-emerald-400/40 text-center text-[9px] mb-12 font-black uppercase tracking-[0.4em] flex items-center justify-center gap-3",children:[L.jsx("span",{className:"h-px w-8 bg-emerald-500/20"})," Neural Gateway Locked ",L.jsx("span",{className:"h-px w-8 bg-emerald-500/20"})]}),L.jsxs("form",{onSubmit:Xe,className:"space-y-6",children:[L.jsxs("div",{className:"space-y-2",children:[L.jsx("label",{className:"block text-[10px] font-black text-emerald-500/50 uppercase tracking-widest ml-4",children:"Terminal Identifier"}),L.jsx("input",{type:"email",value:h,onChange:z=>m(z.target.value),className:"w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500/40 focus:bg-white/[0.08] transition-all placeholder:text-white/10",placeholder:"admin@islamguide.com",required:!0})]}),L.jsxs("div",{className:"space-y-2",children:[L.jsx("label",{className:"block text-[10px] font-black text-emerald-500/50 uppercase tracking-widest ml-4",children:"Access Protocol"}),L.jsx("input",{type:"password",value:g,onChange:z=>v(z.target.value),className:"w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500/40 focus:bg-white/[0.08] transition-all placeholder:text-white/10",placeholder:"••••••••",required:!0})]}),E&&L.jsx("div",{className:"p-4 bg-red-500/5 border border-red-500/20 text-red-400 text-xs rounded-2xl text-center font-bold",children:E}),L.jsxs("button",{type:"submit",className:"w-full relative group/btn overflow-hidden rounded-2xl py-4 font-black text-[#021008] transition-all",children:[L.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all group-hover/btn:scale-105"}),L.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"}),L.jsxs("span",{className:"relative flex items-center justify-center gap-2",children:["Initialize Session ",L.jsx(ty,{size:16})]})]})]})]})]}),L.jsx("p",{className:"mt-12 text-emerald-900/40 text-[9px] font-black uppercase tracking-[0.4em]",children:"interview coder v5.2.0 • secure gateway"})]})}V0.createRoot(document.getElementById("root")).render(L.jsx(R0.StrictMode,{children:L.jsx(W1,{})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js")});
