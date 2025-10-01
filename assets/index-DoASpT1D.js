(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function nc(t,e){const n=new Set(t.split(","));return e?i=>n.has(i.toLowerCase()):i=>n.has(i)}const pt={},Lr=[],dn=()=>{},gm=()=>!1,Qo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ic=t=>t.startsWith("onUpdate:"),Ct=Object.assign,rc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vm=Object.prototype.hasOwnProperty,Ke=(t,e)=>vm.call(t,e),Ie=Array.isArray,Pr=t=>ea(t)==="[object Map]",Gh=t=>ea(t)==="[object Set]",ze=t=>typeof t=="function",xt=t=>typeof t=="string",or=t=>typeof t=="symbol",ht=t=>t!==null&&typeof t=="object",Wh=t=>(ht(t)||ze(t))&&ze(t.then)&&ze(t.catch),Xh=Object.prototype.toString,ea=t=>Xh.call(t),xm=t=>ea(t).slice(8,-1),$h=t=>ea(t)==="[object Object]",sc=t=>xt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ls=nc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ta=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Em=/-(\w)/g,Bn=ta(t=>t.replace(Em,(e,n)=>n?n.toUpperCase():"")),Sm=/\B([A-Z])/g,Wr=ta(t=>t.replace(Sm,"-$1").toLowerCase()),na=ta(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ra=ta(t=>t?`on${na(t)}`:""),bi=(t,e)=>!Object.is(t,e),Ca=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Yh=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Mm=t=>{const e=parseFloat(t);return isNaN(e)?t:e},ym=t=>{const e=xt(t)?Number(t):NaN;return isNaN(e)?t:e};let qc;const qh=()=>qc||(qc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function oc(t){if(Ie(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=xt(i)?wm(i):oc(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(xt(t)||ht(t))return t}const Tm=/;(?![^(]*\))/g,bm=/:([^]+)/,Am=/\/\*[^]*?\*\//g;function wm(t){const e={};return t.replace(Am,"").split(Tm).forEach(n=>{if(n){const i=n.split(bm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Rs(t){let e="";if(xt(t))e=t;else if(Ie(t))for(let n=0;n<t.length;n++){const i=Rs(t[n]);i&&(e+=i+" ")}else if(ht(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Rm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cm=nc(Rm);function jh(t){return!!t||t===""}const Ye=t=>xt(t)?t:t==null?"":Ie(t)||ht(t)&&(t.toString===Xh||!ze(t.toString))?JSON.stringify(t,Kh,2):String(t),Kh=(t,e)=>e&&e.__v_isRef?Kh(t,e.value):Pr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[La(i,s)+" =>"]=r,n),{})}:Gh(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>La(n))}:or(e)?La(e):ht(e)&&!Ie(e)&&!$h(e)?String(e):e,La=(t,e="")=>{var n;return or(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Sn;class Jh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Sn,!e&&Sn&&(this.index=(Sn.scopes||(Sn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Sn;try{return Sn=this,e()}finally{Sn=n}}}on(){Sn=this}off(){Sn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Lm(t){return new Jh(t)}function Pm(t,e=Sn){e&&e.active&&e.effects.push(t)}function Im(){return Sn}let ir;class ac{constructor(e,n,i,r){this.fn=e,this.trigger=n,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Pm(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Li();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Nm(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Pi()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Ei,n=ir;try{return Ei=!0,ir=this,this._runnings++,jc(this),this.fn()}finally{Kc(this),this._runnings--,ir=n,Ei=e}}stop(){this.active&&(jc(this),Kc(this),this.onStop&&this.onStop(),this.active=!1)}}function Nm(t){return t.value}function jc(t){t._trackId++,t._depsLength=0}function Kc(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Zh(t.deps[e],t);t.deps.length=t._depsLength}}function Zh(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Ei=!0,Tl=0;const Qh=[];function Li(){Qh.push(Ei),Ei=!1}function Pi(){const t=Qh.pop();Ei=t===void 0?!0:t}function lc(){Tl++}function cc(){for(Tl--;!Tl&&bl.length;)bl.shift()()}function ed(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const i=t.deps[t._depsLength];i!==e?(i&&Zh(i,t),t.deps[t._depsLength++]=e):t._depsLength++}}const bl=[];function td(t,e,n){lc();for(const i of t.keys()){let r;i._dirtyLevel<e&&(r??(r=t.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(r??(r=t.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&bl.push(i.scheduler)))}cc()}const nd=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Al=new WeakMap,rr=Symbol(""),wl=Symbol("");function tn(t,e,n){if(Ei&&ir){let i=Al.get(t);i||Al.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=nd(()=>i.delete(n))),ed(ir,r)}}function Zn(t,e,n,i,r,s){const o=Al.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Ie(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!or(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Ie(t)?sc(n)&&a.push(o.get("length")):(a.push(o.get(rr)),Pr(t)&&a.push(o.get(wl)));break;case"delete":Ie(t)||(a.push(o.get(rr)),Pr(t)&&a.push(o.get(wl)));break;case"set":Pr(t)&&a.push(o.get(rr));break}lc();for(const l of a)l&&td(l,4);cc()}const Dm=nc("__proto__,__v_isRef,__isVue"),id=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(or)),Jc=Um();function Um(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=nt(this);for(let s=0,o=this.length;s<o;s++)tn(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(nt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Li(),lc();const i=nt(this)[e].apply(this,n);return cc(),Pi(),i}}),t}function Om(t){or(t)||(t=String(t));const e=nt(this);return tn(e,"has",t),e.hasOwnProperty(t)}class rd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?jm:ld:s?ad:od).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ie(e);if(!r){if(o&&Ke(Jc,n))return Reflect.get(Jc,n,i);if(n==="hasOwnProperty")return Om}const a=Reflect.get(e,n,i);return(or(n)?id.has(n):Dm(n))||(r||tn(e,"get",n),s)?a:Jt(a)?o&&sc(n)?a:a.value:ht(a)?r?cd(a):hc(a):a}}class sd extends rd{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=gs(s);if(!Uo(i)&&!gs(i)&&(s=nt(s),i=nt(i)),!Ie(e)&&Jt(s)&&!Jt(i))return l?!1:(s.value=i,!0)}const o=Ie(e)&&sc(n)?Number(n)<e.length:Ke(e,n),a=Reflect.set(e,n,i,r);return e===nt(r)&&(o?bi(i,s)&&Zn(e,"set",n,i):Zn(e,"add",n,i)),a}deleteProperty(e,n){const i=Ke(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Zn(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!or(n)||!id.has(n))&&tn(e,"has",n),i}ownKeys(e){return tn(e,"iterate",Ie(e)?"length":rr),Reflect.ownKeys(e)}}class Fm extends rd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Bm=new sd,km=new Fm,Hm=new sd(!0);const uc=t=>t,ia=t=>Reflect.getPrototypeOf(t);function Hs(t,e,n=!1,i=!1){t=t.__v_raw;const r=nt(t),s=nt(e);n||(bi(e,s)&&tn(r,"get",e),tn(r,"get",s));const{has:o}=ia(r),a=i?uc:n?pc:vs;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function zs(t,e=!1){const n=this.__v_raw,i=nt(n),r=nt(t);return e||(bi(t,r)&&tn(i,"has",t),tn(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Vs(t,e=!1){return t=t.__v_raw,!e&&tn(nt(t),"iterate",rr),Reflect.get(t,"size",t)}function Zc(t){t=nt(t);const e=nt(this);return ia(e).has.call(e,t)||(e.add(t),Zn(e,"add",t,t)),this}function Qc(t,e){e=nt(e);const n=nt(this),{has:i,get:r}=ia(n);let s=i.call(n,t);s||(t=nt(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?bi(e,o)&&Zn(n,"set",t,e):Zn(n,"add",t,e),this}function eu(t){const e=nt(this),{has:n,get:i}=ia(e);let r=n.call(e,t);r||(t=nt(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&Zn(e,"delete",t,void 0),s}function tu(){const t=nt(this),e=t.size!==0,n=t.clear();return e&&Zn(t,"clear",void 0,void 0),n}function Gs(t,e){return function(i,r){const s=this,o=s.__v_raw,a=nt(o),l=e?uc:t?pc:vs;return!t&&tn(a,"iterate",rr),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Ws(t,e,n){return function(...i){const r=this.__v_raw,s=nt(r),o=Pr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?uc:e?pc:vs;return!e&&tn(s,"iterate",l?wl:rr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function ri(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function zm(){const t={get(s){return Hs(this,s)},get size(){return Vs(this)},has:zs,add:Zc,set:Qc,delete:eu,clear:tu,forEach:Gs(!1,!1)},e={get(s){return Hs(this,s,!1,!0)},get size(){return Vs(this)},has:zs,add:Zc,set:Qc,delete:eu,clear:tu,forEach:Gs(!1,!0)},n={get(s){return Hs(this,s,!0)},get size(){return Vs(this,!0)},has(s){return zs.call(this,s,!0)},add:ri("add"),set:ri("set"),delete:ri("delete"),clear:ri("clear"),forEach:Gs(!0,!1)},i={get(s){return Hs(this,s,!0,!0)},get size(){return Vs(this,!0)},has(s){return zs.call(this,s,!0)},add:ri("add"),set:ri("set"),delete:ri("delete"),clear:ri("clear"),forEach:Gs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Ws(s,!1,!1),n[s]=Ws(s,!0,!1),e[s]=Ws(s,!1,!0),i[s]=Ws(s,!0,!0)}),[t,n,e,i]}const[Vm,Gm,Wm,Xm]=zm();function fc(t,e){const n=e?t?Xm:Wm:t?Gm:Vm;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Ke(n,r)&&r in i?n:i,r,s)}const $m={get:fc(!1,!1)},Ym={get:fc(!1,!0)},qm={get:fc(!0,!1)};const od=new WeakMap,ad=new WeakMap,ld=new WeakMap,jm=new WeakMap;function Km(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jm(t){return t.__v_skip||!Object.isExtensible(t)?0:Km(xm(t))}function hc(t){return gs(t)?t:dc(t,!1,Bm,$m,od)}function Zm(t){return dc(t,!1,Hm,Ym,ad)}function cd(t){return dc(t,!0,km,qm,ld)}function dc(t,e,n,i,r){if(!ht(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=Jm(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function cs(t){return gs(t)?cs(t.__v_raw):!!(t&&t.__v_isReactive)}function gs(t){return!!(t&&t.__v_isReadonly)}function Uo(t){return!!(t&&t.__v_isShallow)}function ud(t){return t?!!t.__v_raw:!1}function nt(t){const e=t&&t.__v_raw;return e?nt(e):t}function Qm(t){return Object.isExtensible(t)&&Yh(t,"__v_skip",!0),t}const vs=t=>ht(t)?hc(t):t,pc=t=>ht(t)?cd(t):t;class fd{constructor(e,n,i,r){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ac(()=>e(this._value),()=>wo(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=nt(this);return(!e._cacheable||e.effect.dirty)&&bi(e._value,e._value=e.effect.run())&&wo(e,4),hd(e),e.effect._dirtyLevel>=2&&wo(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function e_(t,e,n=!1){let i,r;const s=ze(t);return s?(i=t,r=dn):(i=t.get,r=t.set),new fd(i,r,s||!r,n)}function hd(t){var e;Ei&&ir&&(t=nt(t),ed(ir,(e=t.dep)!=null?e:t.dep=nd(()=>t.dep=void 0,t instanceof fd?t:void 0)))}function wo(t,e=4,n){t=nt(t);const i=t.dep;i&&td(i,e)}function Jt(t){return!!(t&&t.__v_isRef===!0)}function an(t){return pd(t,!1)}function dd(t){return pd(t,!0)}function pd(t,e){return Jt(t)?t:new t_(t,e)}class t_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:nt(e),this._value=n?e:vs(e)}get value(){return hd(this),this._value}set value(e){const n=this.__v_isShallow||Uo(e)||gs(e);e=n?e:nt(e),bi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:vs(e),wo(this,4))}}function Si(t){return Jt(t)?t.value:t}const n_={get:(t,e,n)=>Si(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Jt(r)&&!Jt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function md(t){return cs(t)?t:new Proxy(t,n_)}/**
* @vue/runtime-core v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mi(t,e,n,i){try{return i?t(...i):t()}catch(r){ra(r,e,n)}}function mn(t,e,n,i){if(ze(t)){const r=Mi(t,e,n,i);return r&&Wh(r)&&r.catch(s=>{ra(s,e,n)}),r}if(Ie(t)){const r=[];for(let s=0;s<t.length;s++)r.push(mn(t[s],e,n,i));return r}}function ra(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Li(),Mi(l,null,10,[t,o,a]),Pi();return}}i_(t,n,r,i)}function i_(t,e,n,i=!0){console.error(t)}let xs=!1,Rl=!1;const Ht=[];let Dn=0;const Ir=[];let pi=null,Ji=0;const _d=Promise.resolve();let mc=null;function r_(t){const e=mc||_d;return t?e.then(this?t.bind(this):t):e}function s_(t){let e=Dn+1,n=Ht.length;for(;e<n;){const i=e+n>>>1,r=Ht[i],s=Es(r);s<t||s===t&&r.pre?e=i+1:n=i}return e}function _c(t){(!Ht.length||!Ht.includes(t,xs&&t.allowRecurse?Dn+1:Dn))&&(t.id==null?Ht.push(t):Ht.splice(s_(t.id),0,t),gd())}function gd(){!xs&&!Rl&&(Rl=!0,mc=_d.then(xd))}function o_(t){const e=Ht.indexOf(t);e>Dn&&Ht.splice(e,1)}function a_(t){Ie(t)?Ir.push(...t):(!pi||!pi.includes(t,t.allowRecurse?Ji+1:Ji))&&Ir.push(t),gd()}function nu(t,e,n=xs?Dn+1:0){for(;n<Ht.length;n++){const i=Ht[n];if(i&&i.pre){if(t&&i.id!==t.uid)continue;Ht.splice(n,1),n--,i()}}}function vd(t){if(Ir.length){const e=[...new Set(Ir)].sort((n,i)=>Es(n)-Es(i));if(Ir.length=0,pi){pi.push(...e);return}for(pi=e,Ji=0;Ji<pi.length;Ji++)pi[Ji]();pi=null,Ji=0}}const Es=t=>t.id==null?1/0:t.id,l_=(t,e)=>{const n=Es(t)-Es(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function xd(t){Rl=!1,xs=!0,Ht.sort(l_);try{for(Dn=0;Dn<Ht.length;Dn++){const e=Ht[Dn];e&&e.active!==!1&&Mi(e,null,14)}}finally{Dn=0,Ht.length=0,vd(),xs=!1,mc=null,(Ht.length||Ir.length)&&xd()}}function c_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||pt;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||pt;h&&(r=n.map(p=>xt(p)?p.trim():p)),f&&(r=n.map(Mm))}let a,l=i[a=Ra(e)]||i[a=Ra(Bn(e))];!l&&s&&(l=i[a=Ra(Wr(e))]),l&&mn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,mn(c,t,6,r)}}function Ed(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!ze(t)){const l=c=>{const u=Ed(c,e,!0);u&&(a=!0,Ct(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(ht(t)&&i.set(t,null),null):(Ie(s)?s.forEach(l=>o[l]=null):Ct(o,s),ht(t)&&i.set(t,o),o)}function sa(t,e){return!t||!Qo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ke(t,e[0].toLowerCase()+e.slice(1))||Ke(t,Wr(e))||Ke(t,e))}let zt=null,oa=null;function Oo(t){const e=zt;return zt=t,oa=t&&t.type.__scopeId||null,e}function aa(t){oa=t}function la(){oa=null}function kn(t,e=zt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&mu(-1);const s=Oo(e);let o;try{o=t(...r)}finally{Oo(s),i._d&&mu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function iu(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:g,inheritAttrs:x}=t,_=Oo(t);let m,A;try{if(n.shapeFlag&4){const S=r||i,P=S;m=In(c.call(P,S,u,f,p,h,g)),A=a}else{const S=e;m=In(S.length>1?S(f,{attrs:a,slots:o,emit:l}):S(f,null)),A=e.props?a:u_(a)}}catch(S){ps.length=0,ra(S,t,1),m=je(ln)}let v=m;if(A&&x!==!1){const S=Object.keys(A),{shapeFlag:P}=v;S.length&&P&7&&(s&&S.some(ic)&&(A=f_(A,s)),v=Ai(v,A,!1,!0))}return n.dirs&&(v=Ai(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),m=v,Oo(_),m}const u_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Qo(n))&&((e||(e={}))[n]=t[n]);return e},f_=(t,e)=>{const n={};for(const i in t)(!ic(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function h_(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?ru(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!sa(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?ru(i,o,c):!0:!!o;return!1}function ru(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!sa(n,s))return!0}return!1}function d_({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const p_="components",Sd=Symbol.for("v-ndc");function m_(t){return xt(t)?__(p_,t,!1)||t:t||Sd}function __(t,e,n=!0,i=!1){const r=zt||Pt;if(r){const s=r.type;{const a=ug(s,!1);if(a&&(a===e||a===Bn(e)||a===na(Bn(e))))return s}const o=su(r[t]||s[t],e)||su(r.appContext[t],e);return!o&&i?s:o}}function su(t,e){return t&&(t[e]||t[Bn(e)]||t[na(Bn(e))])}const g_=t=>t.__isSuspense;function v_(t,e){e&&e.pendingBranch?Ie(t)?e.effects.push(...t):e.effects.push(t):a_(t)}const x_=Symbol.for("v-scx"),E_=()=>ds(x_),Xs={};function Nr(t,e,n){return Md(t,e,n)}function Md(t,e,{immediate:n,deep:i,flush:r,once:s,onTrack:o,onTrigger:a}=pt){if(e&&s){const T=e;e=(...R)=>{T(...R),P()}}const l=Pt,c=T=>i===!0?T:wr(T,i===!1?1:void 0);let u,f=!1,h=!1;if(Jt(t)?(u=()=>t.value,f=Uo(t)):cs(t)?(u=()=>c(t),f=!0):Ie(t)?(h=!0,f=t.some(T=>cs(T)||Uo(T)),u=()=>t.map(T=>{if(Jt(T))return T.value;if(cs(T))return c(T);if(ze(T))return Mi(T,l,2)})):ze(t)?e?u=()=>Mi(t,l,2):u=()=>(p&&p(),mn(t,l,3,[g])):u=dn,e&&i){const T=u;u=()=>wr(T())}let p,g=T=>{p=v.onStop=()=>{Mi(T,l,4),p=v.onStop=void 0}},x;if(ha)if(g=dn,e?n&&mn(e,l,3,[u(),h?[]:void 0,g]):u(),r==="sync"){const T=E_();x=T.__watcherHandles||(T.__watcherHandles=[])}else return dn;let _=h?new Array(t.length).fill(Xs):Xs;const m=()=>{if(!(!v.active||!v.dirty))if(e){const T=v.run();(i||f||(h?T.some((R,N)=>bi(R,_[N])):bi(T,_)))&&(p&&p(),mn(e,l,3,[T,_===Xs?void 0:h&&_[0]===Xs?[]:_,g]),_=T)}else v.run()};m.allowRecurse=!!e;let A;r==="sync"?A=m:r==="post"?A=()=>en(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),A=()=>_c(m));const v=new ac(u,dn,A),S=Im(),P=()=>{v.stop(),S&&rc(S.effects,v)};return e?n?m():_=v.run():r==="post"?en(v.run.bind(v),l&&l.suspense):v.run(),x&&x.push(P),P}function S_(t,e,n){const i=this.proxy,r=xt(t)?t.includes(".")?yd(i,t):()=>i[t]:t.bind(i,i);let s;ze(e)?s=e:(s=e.handler,n=e);const o=Ls(this),a=Md(r,s.bind(i),n);return o(),a}function yd(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function wr(t,e=1/0,n){if(e<=0||!ht(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Jt(t))wr(t.value,e,n);else if(Ie(t))for(let i=0;i<t.length;i++)wr(t[i],e,n);else if(Gh(t)||Pr(t))t.forEach(i=>{wr(i,e,n)});else if($h(t))for(const i in t)wr(t[i],e,n);return t}function Fi(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Li(),mn(l,n,8,[t.el,a,t,e]),Pi())}}const mi=Symbol("_leaveCb"),$s=Symbol("_enterCb");function M_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ar(()=>{t.isMounted=!0}),Cd(()=>{t.isUnmounting=!0}),t}const un=[Function,Array],Td={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:un,onEnter:un,onAfterEnter:un,onEnterCancelled:un,onBeforeLeave:un,onLeave:un,onAfterLeave:un,onLeaveCancelled:un,onBeforeAppear:un,onAppear:un,onAfterAppear:un,onAppearCancelled:un},y_={name:"BaseTransition",props:Td,setup(t,{slots:e}){const n=Fr(),i=M_();return()=>{const r=e.default&&Ad(e.default(),!0);if(!r||!r.length)return;let s=r[0];if(r.length>1){for(const h of r)if(h.type!==ln){s=h;break}}const o=nt(t),{mode:a}=o;if(i.isLeaving)return Pa(s);const l=ou(s);if(!l)return Pa(s);const c=Cl(l,o,i,n);Ll(l,c);const u=n.subTree,f=u&&ou(u);if(f&&f.type!==ln&&!Zi(l,f)){const h=Cl(f,o,i,n);if(Ll(f,h),a==="out-in"&&l.type!==ln)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Pa(s);a==="in-out"&&l.type!==ln&&(h.delayLeave=(p,g,x)=>{const _=bd(i,f);_[String(f.key)]=f,p[mi]=()=>{g(),p[mi]=void 0,delete c.delayedLeave},c.delayedLeave=x})}return s}}},T_=y_;function bd(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Cl(t,e,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:x,onAppear:_,onAfterAppear:m,onAppearCancelled:A}=e,v=String(t.key),S=bd(n,t),P=(N,M)=>{N&&mn(N,i,9,M)},T=(N,M)=>{const y=M[1];P(N,M),Ie(N)?N.every(V=>V.length<=1)&&y():N.length<=1&&y()},R={mode:s,persisted:o,beforeEnter(N){let M=a;if(!n.isMounted)if(r)M=x||a;else return;N[mi]&&N[mi](!0);const y=S[v];y&&Zi(t,y)&&y.el[mi]&&y.el[mi](),P(M,[N])},enter(N){let M=l,y=c,V=u;if(!n.isMounted)if(r)M=_||l,y=m||c,V=A||u;else return;let F=!1;const O=N[$s]=ee=>{F||(F=!0,ee?P(V,[N]):P(y,[N]),R.delayedLeave&&R.delayedLeave(),N[$s]=void 0)};M?T(M,[N,O]):O()},leave(N,M){const y=String(t.key);if(N[$s]&&N[$s](!0),n.isUnmounting)return M();P(f,[N]);let V=!1;const F=N[mi]=O=>{V||(V=!0,M(),O?P(g,[N]):P(p,[N]),N[mi]=void 0,S[y]===t&&delete S[y])};S[y]=t,h?T(h,[N,F]):F()},clone(N){return Cl(N,e,n,i)}};return R}function Pa(t){if(ca(t))return t=Ai(t),t.children=null,t}function ou(t){if(!ca(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ze(n.default))return n.default()}}function Ll(t,e){t.shapeFlag&6&&t.component?Ll(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ad(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===mt?(o.patchFlag&128&&r++,i=i.concat(Ad(o.children,e,a))):(e||o.type!==ln)&&i.push(a!=null?Ai(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Lt(t,e){return ze(t)?Ct({name:t.name},e,{setup:t}):t}const us=t=>!!t.type.__asyncLoader,ca=t=>t.type.__isKeepAlive;function b_(t,e){wd(t,"a",e)}function A_(t,e){wd(t,"da",e)}function wd(t,e,n=Pt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ua(e,i,n),n){let r=n.parent;for(;r&&r.parent;)ca(r.parent.vnode)&&w_(i,e,n,r),r=r.parent}}function w_(t,e,n,i){const r=ua(e,t,i,!0);gc(()=>{rc(i[e],r)},n)}function ua(t,e,n=Pt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Li();const a=Ls(n),l=mn(e,n,t,o);return a(),Pi(),l});return i?r.unshift(s):r.push(s),s}}const ti=t=>(e,n=Pt)=>(!ha||t==="sp")&&ua(t,(...i)=>e(...i),n),Rd=ti("bm"),ar=ti("m"),R_=ti("bu"),C_=ti("u"),Cd=ti("bum"),gc=ti("um"),L_=ti("sp"),P_=ti("rtg"),I_=ti("rtc");function N_(t,e=Pt){ua("ec",t,e)}function fa(t,e,n,i){let r;const s=n;if(Ie(t)||xt(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s)}else if(ht(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s)}}else r=[];return r}function Ld(t,e,n={},i,r){if(zt.isCE||zt.parent&&us(zt.parent)&&zt.parent.isCE)return je("slot",n,i);let s=t[e];s&&s._c&&(s._d=!1),lt();const o=s&&Pd(s(n)),a=lr(mt,{key:n.key||o&&o.key||`_${e}`},o||[],o&&t._===1?64:-2);return a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Pd(t){return t.some(e=>Bo(e)?!(e.type===ln||e.type===mt&&!Pd(e.children)):!0)?t:null}const Pl=t=>t?Yd(t)?Sc(t)||t.proxy:Pl(t.parent):null,fs=Ct(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pl(t.parent),$root:t=>Pl(t.root),$emit:t=>t.emit,$options:t=>Nd(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,_c(t.update)}),$nextTick:t=>t.n||(t.n=r_.bind(t.proxy)),$watch:t=>S_.bind(t)}),Ia=(t,e)=>t!==pt&&!t.__isScriptSetup&&Ke(t,e),D_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Ia(i,e))return o[e]=1,i[e];if(r!==pt&&Ke(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&Ke(c,e))return o[e]=3,s[e];if(n!==pt&&Ke(n,e))return o[e]=4,n[e];Il&&(o[e]=0)}}const u=fs[e];let f,h;if(u)return e==="$attrs"&&tn(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==pt&&Ke(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,Ke(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Ia(r,e)?(r[e]=n,!0):i!==pt&&Ke(i,e)?(i[e]=n,!0):Ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==pt&&Ke(t,o)||Ia(e,o)||(a=s[0])&&Ke(a,o)||Ke(i,o)||Ke(fs,o)||Ke(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function au(t){return Ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Il=!0;function U_(t){const e=Nd(t),n=t.proxy,i=t.ctx;Il=!1,e.beforeCreate&&lu(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:x,deactivated:_,beforeDestroy:m,beforeUnmount:A,destroyed:v,unmounted:S,render:P,renderTracked:T,renderTriggered:R,errorCaptured:N,serverPrefetch:M,expose:y,inheritAttrs:V,components:F,directives:O,filters:ee}=e;if(c&&O_(c,i,null),o)for(const re in o){const Y=o[re];ze(Y)&&(i[re]=Y.bind(n))}if(r){const re=r.call(n,n);ht(re)&&(t.data=hc(re))}if(Il=!0,s)for(const re in s){const Y=s[re],ce=ze(Y)?Y.bind(n,n):ze(Y.get)?Y.get.bind(n,n):dn,fe=!ze(Y)&&ze(Y.set)?Y.set.bind(n):dn,ge=Mn({get:ce,set:fe});Object.defineProperty(i,re,{enumerable:!0,configurable:!0,get:()=>ge.value,set:we=>ge.value=we})}if(a)for(const re in a)Id(a[re],i,n,re);if(l){const re=ze(l)?l.call(n):l;Reflect.ownKeys(re).forEach(Y=>{V_(Y,re[Y])})}u&&lu(u,t,"c");function oe(re,Y){Ie(Y)?Y.forEach(ce=>re(ce.bind(n))):Y&&re(Y.bind(n))}if(oe(Rd,f),oe(ar,h),oe(R_,p),oe(C_,g),oe(b_,x),oe(A_,_),oe(N_,N),oe(I_,T),oe(P_,R),oe(Cd,A),oe(gc,S),oe(L_,M),Ie(y))if(y.length){const re=t.exposed||(t.exposed={});y.forEach(Y=>{Object.defineProperty(re,Y,{get:()=>n[Y],set:ce=>n[Y]=ce})})}else t.exposed||(t.exposed={});P&&t.render===dn&&(t.render=P),V!=null&&(t.inheritAttrs=V),F&&(t.components=F),O&&(t.directives=O)}function O_(t,e,n=dn){Ie(t)&&(t=Nl(t));for(const i in t){const r=t[i];let s;ht(r)?"default"in r?s=ds(r.from||i,r.default,!0):s=ds(r.from||i):s=ds(r),Jt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function lu(t,e,n){mn(Ie(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Id(t,e,n,i){const r=i.includes(".")?yd(n,i):()=>n[i];if(xt(t)){const s=e[t];ze(s)&&Nr(r,s)}else if(ze(t))Nr(r,t.bind(n));else if(ht(t))if(Ie(t))t.forEach(s=>Id(s,e,n,i));else{const s=ze(t.handler)?t.handler.bind(n):e[t.handler];ze(s)&&Nr(r,s,t)}}function Nd(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Fo(l,c,o,!0)),Fo(l,e,o)),ht(e)&&s.set(e,l),l}function Fo(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Fo(t,s,n,!0),r&&r.forEach(o=>Fo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=F_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const F_={data:cu,props:uu,emits:uu,methods:ss,computed:ss,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:ss,directives:ss,watch:k_,provide:cu,inject:B_};function cu(t,e){return e?t?function(){return Ct(ze(t)?t.call(this,this):t,ze(e)?e.call(this,this):e)}:e:t}function B_(t,e){return ss(Nl(t),Nl(e))}function Nl(t){if(Ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Xt(t,e){return t?[...new Set([].concat(t,e))]:e}function ss(t,e){return t?Ct(Object.create(null),t,e):e}function uu(t,e){return t?Ie(t)&&Ie(e)?[...new Set([...t,...e])]:Ct(Object.create(null),au(t),au(e??{})):e}function k_(t,e){if(!t)return e;if(!e)return t;const n=Ct(Object.create(null),t);for(const i in e)n[i]=Xt(t[i],e[i]);return n}function Dd(){return{app:null,config:{isNativeTag:gm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let H_=0;function z_(t,e){return function(i,r=null){ze(i)||(i=Ct({},i)),r!=null&&!ht(r)&&(r=null);const s=Dd(),o=new WeakSet;let a=!1;const l=s.app={_uid:H_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:hg,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&ze(c.install)?(o.add(c),c.install(l,...u)):ze(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=je(i,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),t(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Sc(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=hs;hs=l;try{return c()}finally{hs=u}}};return l}}let hs=null;function V_(t,e){if(Pt){let n=Pt.provides;const i=Pt.parent&&Pt.parent.provides;i===n&&(n=Pt.provides=Object.create(i)),n[t]=e}}function ds(t,e,n=!1){const i=Pt||zt;if(i||hs){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:hs._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ze(e)?e.call(i&&i.proxy):e}}const Ud={},Od=()=>Object.create(Ud),Fd=t=>Object.getPrototypeOf(t)===Ud;function G_(t,e,n,i=!1){const r={},s=Od();t.propsDefaults=Object.create(null),Bd(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Zm(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function W_(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=nt(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(sa(t.emitsOptions,h))continue;const p=e[h];if(l)if(Ke(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const g=Bn(h);r[g]=Dl(l,a,g,p,t,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{Bd(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ke(e,f)&&((u=Wr(f))===f||!Ke(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Dl(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ke(e,f))&&(delete s[f],c=!0)}c&&Zn(t.attrs,"set","")}function Bd(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ls(l))continue;const c=e[l];let u;r&&Ke(r,u=Bn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:sa(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=nt(n),c=a||pt;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Dl(r,l,f,c[f],t,!Ke(c,f))}}return o}function Dl(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=Ke(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ze(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Ls(r);i=c[n]=l.call(null,e),u()}}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Wr(n))&&(i=!0))}return i}function kd(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!ze(t)){const u=f=>{l=!0;const[h,p]=kd(f,e,!0);Ct(o,h),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return ht(t)&&i.set(t,Lr),Lr;if(Ie(s))for(let u=0;u<s.length;u++){const f=Bn(s[u]);fu(f)&&(o[f]=pt)}else if(s)for(const u in s){const f=Bn(u);if(fu(f)){const h=s[u],p=o[f]=Ie(h)||ze(h)?{type:h}:Ct({},h);if(p){const g=pu(Boolean,p.type),x=pu(String,p.type);p[0]=g>-1,p[1]=x<0||g<x,(g>-1||Ke(p,"default"))&&a.push(f)}}}const c=[o,a];return ht(t)&&i.set(t,c),c}function fu(t){return t[0]!=="$"&&!ls(t)}function hu(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function du(t,e){return hu(t)===hu(e)}function pu(t,e){return Ie(e)?e.findIndex(n=>du(n,t)):ze(e)&&du(e,t)?0:-1}const Hd=t=>t[0]==="_"||t==="$stable",vc=t=>Ie(t)?t.map(In):[In(t)],X_=(t,e,n)=>{if(e._n)return e;const i=kn((...r)=>vc(e(...r)),n);return i._c=!1,i},zd=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Hd(r))continue;const s=t[r];if(ze(s))e[r]=X_(r,s,i);else if(s!=null){const o=vc(s);e[r]=()=>o}}},Vd=(t,e)=>{const n=vc(e);t.slots.default=()=>n},$_=(t,e)=>{const n=t.slots=Od();if(t.vnode.shapeFlag&32){const i=e._;i?(Ct(n,e),Yh(n,"_",i,!0)):zd(e,n)}else e&&Vd(t,e)},Y_=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=pt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Ct(r,e),!n&&a===1&&delete r._):(s=!e.$stable,zd(e,r)),o=e}else e&&(Vd(t,e),o={default:1});if(s)for(const a in r)!Hd(a)&&o[a]==null&&delete r[a]};function Ul(t,e,n,i,r=!1){if(Ie(t)){t.forEach((h,p)=>Ul(h,e&&(Ie(e)?e[p]:e),n,i,r));return}if(us(i)&&!r)return;const s=i.shapeFlag&4?Sc(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===pt?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(xt(c)?(u[c]=null,Ke(f,c)&&(f[c]=null)):Jt(c)&&(c.value=null)),ze(l))Mi(l,a,12,[o,u]);else{const h=xt(l),p=Jt(l);if(h||p){const g=()=>{if(t.f){const x=h?Ke(f,l)?f[l]:u[l]:l.value;r?Ie(x)&&rc(x,s):Ie(x)?x.includes(s)||x.push(s):h?(u[l]=[s],Ke(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,Ke(f,l)&&(f[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,en(g,n)):g()}}}const en=v_;function q_(t){return j_(t)}function j_(t,e){const n=qh();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=dn,insertStaticContent:g}=t,x=(L,U,I,W=null,q=null,te=null,ae=void 0,b=null,d=!!U.dynamicChildren)=>{if(L===U)return;L&&!Zi(L,U)&&(W=pe(L),we(L,q,te,!0),L=null),U.patchFlag===-2&&(d=!1,U.dynamicChildren=null);const{type:E,ref:C,shapeFlag:B}=U;switch(E){case Cs:_(L,U,I,W);break;case ln:m(L,U,I,W);break;case Da:L==null&&A(U,I,W,ae);break;case mt:F(L,U,I,W,q,te,ae,b,d);break;default:B&1?P(L,U,I,W,q,te,ae,b,d):B&6?O(L,U,I,W,q,te,ae,b,d):(B&64||B&128)&&E.process(L,U,I,W,q,te,ae,b,d,X)}C!=null&&q&&Ul(C,L&&L.ref,te,U||L,!U)},_=(L,U,I,W)=>{if(L==null)i(U.el=a(U.children),I,W);else{const q=U.el=L.el;U.children!==L.children&&c(q,U.children)}},m=(L,U,I,W)=>{L==null?i(U.el=l(U.children||""),I,W):U.el=L.el},A=(L,U,I,W)=>{[L.el,L.anchor]=g(L.children,U,I,W,L.el,L.anchor)},v=({el:L,anchor:U},I,W)=>{let q;for(;L&&L!==U;)q=h(L),i(L,I,W),L=q;i(U,I,W)},S=({el:L,anchor:U})=>{let I;for(;L&&L!==U;)I=h(L),r(L),L=I;r(U)},P=(L,U,I,W,q,te,ae,b,d)=>{U.type==="svg"?ae="svg":U.type==="math"&&(ae="mathml"),L==null?T(U,I,W,q,te,ae,b,d):M(L,U,q,te,ae,b,d)},T=(L,U,I,W,q,te,ae,b)=>{let d,E;const{props:C,shapeFlag:B,transition:G,dirs:J}=L;if(d=L.el=o(L.type,te,C&&C.is,C),B&8?u(d,L.children):B&16&&N(L.children,d,null,W,q,Na(L,te),ae,b),J&&Fi(L,null,W,"created"),R(d,L,L.scopeId,ae,W),C){for(const k in C)k!=="value"&&!ls(k)&&s(d,k,null,C[k],te,L.children,W,q,me);"value"in C&&s(d,"value",null,C.value,te),(E=C.onVnodeBeforeMount)&&Ln(E,W,L)}J&&Fi(L,null,W,"beforeMount");const D=K_(q,G);D&&G.beforeEnter(d),i(d,U,I),((E=C&&C.onVnodeMounted)||D||J)&&en(()=>{E&&Ln(E,W,L),D&&G.enter(d),J&&Fi(L,null,W,"mounted")},q)},R=(L,U,I,W,q)=>{if(I&&p(L,I),W)for(let te=0;te<W.length;te++)p(L,W[te]);if(q){let te=q.subTree;if(U===te){const ae=q.vnode;R(L,ae,ae.scopeId,ae.slotScopeIds,q.parent)}}},N=(L,U,I,W,q,te,ae,b,d=0)=>{for(let E=d;E<L.length;E++){const C=L[E]=b?_i(L[E]):In(L[E]);x(null,C,U,I,W,q,te,ae,b)}},M=(L,U,I,W,q,te,ae)=>{const b=U.el=L.el;let{patchFlag:d,dynamicChildren:E,dirs:C}=U;d|=L.patchFlag&16;const B=L.props||pt,G=U.props||pt;let J;if(I&&Bi(I,!1),(J=G.onVnodeBeforeUpdate)&&Ln(J,I,U,L),C&&Fi(U,L,I,"beforeUpdate"),I&&Bi(I,!0),E?y(L.dynamicChildren,E,b,I,W,Na(U,q),te):ae||Y(L,U,b,null,I,W,Na(U,q),te,!1),d>0){if(d&16)V(b,U,B,G,I,W,q);else if(d&2&&B.class!==G.class&&s(b,"class",null,G.class,q),d&4&&s(b,"style",B.style,G.style,q),d&8){const D=U.dynamicProps;for(let k=0;k<D.length;k++){const he=D[k],ie=B[he],xe=G[he];(xe!==ie||he==="value")&&s(b,he,ie,xe,q,L.children,I,W,me)}}d&1&&L.children!==U.children&&u(b,U.children)}else!ae&&E==null&&V(b,U,B,G,I,W,q);((J=G.onVnodeUpdated)||C)&&en(()=>{J&&Ln(J,I,U,L),C&&Fi(U,L,I,"updated")},W)},y=(L,U,I,W,q,te,ae)=>{for(let b=0;b<U.length;b++){const d=L[b],E=U[b],C=d.el&&(d.type===mt||!Zi(d,E)||d.shapeFlag&70)?f(d.el):I;x(d,E,C,null,W,q,te,ae,!0)}},V=(L,U,I,W,q,te,ae)=>{if(I!==W){if(I!==pt)for(const b in I)!ls(b)&&!(b in W)&&s(L,b,I[b],null,ae,U.children,q,te,me);for(const b in W){if(ls(b))continue;const d=W[b],E=I[b];d!==E&&b!=="value"&&s(L,b,E,d,ae,U.children,q,te,me)}"value"in W&&s(L,"value",I.value,W.value,ae)}},F=(L,U,I,W,q,te,ae,b,d)=>{const E=U.el=L?L.el:a(""),C=U.anchor=L?L.anchor:a("");let{patchFlag:B,dynamicChildren:G,slotScopeIds:J}=U;J&&(b=b?b.concat(J):J),L==null?(i(E,I,W),i(C,I,W),N(U.children||[],I,C,q,te,ae,b,d)):B>0&&B&64&&G&&L.dynamicChildren?(y(L.dynamicChildren,G,I,q,te,ae,b),(U.key!=null||q&&U===q.subTree)&&Gd(L,U,!0)):Y(L,U,I,C,q,te,ae,b,d)},O=(L,U,I,W,q,te,ae,b,d)=>{U.slotScopeIds=b,L==null?U.shapeFlag&512?q.ctx.activate(U,I,W,ae,d):ee(U,I,W,q,te,ae,d):ne(L,U,d)},ee=(L,U,I,W,q,te,ae)=>{const b=L.component=sg(L,W,q);if(ca(L)&&(b.ctx.renderer=X),og(b),b.asyncDep){if(q&&q.registerDep(b,oe),!L.el){const d=b.subTree=je(ln);m(null,d,U,I)}}else oe(b,L,U,I,q,te,ae)},ne=(L,U,I)=>{const W=U.component=L.component;if(h_(L,U,I))if(W.asyncDep&&!W.asyncResolved){re(W,U,I);return}else W.next=U,o_(W.update),W.effect.dirty=!0,W.update();else U.el=L.el,W.vnode=U},oe=(L,U,I,W,q,te,ae)=>{const b=()=>{if(L.isMounted){let{next:C,bu:B,u:G,parent:J,vnode:D}=L;{const De=Wd(L);if(De){C&&(C.el=D.el,re(L,C,ae)),De.asyncDep.then(()=>{L.isUnmounted||b()});return}}let k=C,he;Bi(L,!1),C?(C.el=D.el,re(L,C,ae)):C=D,B&&Ca(B),(he=C.props&&C.props.onVnodeBeforeUpdate)&&Ln(he,J,C,D),Bi(L,!0);const ie=iu(L),xe=L.subTree;L.subTree=ie,x(xe,ie,f(xe.el),pe(xe),L,q,te),C.el=ie.el,k===null&&d_(L,ie.el),G&&en(G,q),(he=C.props&&C.props.onVnodeUpdated)&&en(()=>Ln(he,J,C,D),q)}else{let C;const{el:B,props:G}=U,{bm:J,m:D,parent:k}=L,he=us(U);Bi(L,!1),J&&Ca(J),!he&&(C=G&&G.onVnodeBeforeMount)&&Ln(C,k,U),Bi(L,!0);{const ie=L.subTree=iu(L);x(null,ie,I,W,L,q,te),U.el=ie.el}if(D&&en(D,q),!he&&(C=G&&G.onVnodeMounted)){const ie=U;en(()=>Ln(C,k,ie),q)}(U.shapeFlag&256||k&&us(k.vnode)&&k.vnode.shapeFlag&256)&&L.a&&en(L.a,q),L.isMounted=!0,U=I=W=null}},d=L.effect=new ac(b,dn,()=>_c(E),L.scope),E=L.update=()=>{d.dirty&&d.run()};E.id=L.uid,Bi(L,!0),E()},re=(L,U,I)=>{U.component=L;const W=L.vnode.props;L.vnode=U,L.next=null,W_(L,U.props,W,I),Y_(L,U.children,I),Li(),nu(L),Pi()},Y=(L,U,I,W,q,te,ae,b,d=!1)=>{const E=L&&L.children,C=L?L.shapeFlag:0,B=U.children,{patchFlag:G,shapeFlag:J}=U;if(G>0){if(G&128){fe(E,B,I,W,q,te,ae,b,d);return}else if(G&256){ce(E,B,I,W,q,te,ae,b,d);return}}J&8?(C&16&&me(E,q,te),B!==E&&u(I,B)):C&16?J&16?fe(E,B,I,W,q,te,ae,b,d):me(E,q,te,!0):(C&8&&u(I,""),J&16&&N(B,I,W,q,te,ae,b,d))},ce=(L,U,I,W,q,te,ae,b,d)=>{L=L||Lr,U=U||Lr;const E=L.length,C=U.length,B=Math.min(E,C);let G;for(G=0;G<B;G++){const J=U[G]=d?_i(U[G]):In(U[G]);x(L[G],J,I,null,q,te,ae,b,d)}E>C?me(L,q,te,!0,!1,B):N(U,I,W,q,te,ae,b,d,B)},fe=(L,U,I,W,q,te,ae,b,d)=>{let E=0;const C=U.length;let B=L.length-1,G=C-1;for(;E<=B&&E<=G;){const J=L[E],D=U[E]=d?_i(U[E]):In(U[E]);if(Zi(J,D))x(J,D,I,null,q,te,ae,b,d);else break;E++}for(;E<=B&&E<=G;){const J=L[B],D=U[G]=d?_i(U[G]):In(U[G]);if(Zi(J,D))x(J,D,I,null,q,te,ae,b,d);else break;B--,G--}if(E>B){if(E<=G){const J=G+1,D=J<C?U[J].el:W;for(;E<=G;)x(null,U[E]=d?_i(U[E]):In(U[E]),I,D,q,te,ae,b,d),E++}}else if(E>G)for(;E<=B;)we(L[E],q,te,!0),E++;else{const J=E,D=E,k=new Map;for(E=D;E<=G;E++){const Re=U[E]=d?_i(U[E]):In(U[E]);Re.key!=null&&k.set(Re.key,E)}let he,ie=0;const xe=G-D+1;let De=!1,Te=0;const Me=new Array(xe);for(E=0;E<xe;E++)Me[E]=0;for(E=J;E<=B;E++){const Re=L[E];if(ie>=xe){we(Re,q,te,!0);continue}let Ze;if(Re.key!=null)Ze=k.get(Re.key);else for(he=D;he<=G;he++)if(Me[he-D]===0&&Zi(Re,U[he])){Ze=he;break}Ze===void 0?we(Re,q,te,!0):(Me[Ze-D]=E+1,Ze>=Te?Te=Ze:De=!0,x(Re,U[Ze],I,null,q,te,ae,b,d),ie++)}const Fe=De?J_(Me):Lr;for(he=Fe.length-1,E=xe-1;E>=0;E--){const Re=D+E,Ze=U[Re],Be=Re+1<C?U[Re+1].el:W;Me[E]===0?x(null,Ze,I,Be,q,te,ae,b,d):De&&(he<0||E!==Fe[he]?ge(Ze,I,Be,2):he--)}}},ge=(L,U,I,W,q=null)=>{const{el:te,type:ae,transition:b,children:d,shapeFlag:E}=L;if(E&6){ge(L.component.subTree,U,I,W);return}if(E&128){L.suspense.move(U,I,W);return}if(E&64){ae.move(L,U,I,X);return}if(ae===mt){i(te,U,I);for(let B=0;B<d.length;B++)ge(d[B],U,I,W);i(L.anchor,U,I);return}if(ae===Da){v(L,U,I);return}if(W!==2&&E&1&&b)if(W===0)b.beforeEnter(te),i(te,U,I),en(()=>b.enter(te),q);else{const{leave:B,delayLeave:G,afterLeave:J}=b,D=()=>i(te,U,I),k=()=>{B(te,()=>{D(),J&&J()})};G?G(te,D,k):k()}else i(te,U,I)},we=(L,U,I,W=!1,q=!1)=>{const{type:te,props:ae,ref:b,children:d,dynamicChildren:E,shapeFlag:C,patchFlag:B,dirs:G}=L;if(b!=null&&Ul(b,null,I,L,!0),C&256){U.ctx.deactivate(L);return}const J=C&1&&G,D=!us(L);let k;if(D&&(k=ae&&ae.onVnodeBeforeUnmount)&&Ln(k,U,L),C&6)de(L.component,I,W);else{if(C&128){L.suspense.unmount(I,W);return}J&&Fi(L,null,U,"beforeUnmount"),C&64?L.type.remove(L,U,I,q,X,W):E&&(te!==mt||B>0&&B&64)?me(E,U,I,!1,!0):(te===mt&&B&384||!q&&C&16)&&me(d,U,I),W&&qe(L)}(D&&(k=ae&&ae.onVnodeUnmounted)||J)&&en(()=>{k&&Ln(k,U,L),J&&Fi(L,null,U,"unmounted")},I)},qe=L=>{const{type:U,el:I,anchor:W,transition:q}=L;if(U===mt){Q(I,W);return}if(U===Da){S(L);return}const te=()=>{r(I),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(L.shapeFlag&1&&q&&!q.persisted){const{leave:ae,delayLeave:b}=q,d=()=>ae(I,te);b?b(L.el,te,d):d()}else te()},Q=(L,U)=>{let I;for(;L!==U;)I=h(L),r(L),L=I;r(U)},de=(L,U,I)=>{const{bum:W,scope:q,update:te,subTree:ae,um:b}=L;W&&Ca(W),q.stop(),te&&(te.active=!1,we(ae,L,U,I)),b&&en(b,U),en(()=>{L.isUnmounted=!0},U),U&&U.pendingBranch&&!U.isUnmounted&&L.asyncDep&&!L.asyncResolved&&L.suspenseId===U.pendingId&&(U.deps--,U.deps===0&&U.resolve())},me=(L,U,I,W=!1,q=!1,te=0)=>{for(let ae=te;ae<L.length;ae++)we(L[ae],U,I,W,q)},pe=L=>L.shapeFlag&6?pe(L.component.subTree):L.shapeFlag&128?L.suspense.next():h(L.anchor||L.el);let Ne=!1;const Oe=(L,U,I)=>{L==null?U._vnode&&we(U._vnode,null,null,!0):x(U._vnode||null,L,U,null,null,null,I),Ne||(Ne=!0,nu(),vd(),Ne=!1),U._vnode=L},X={p:x,um:we,m:ge,r:qe,mt:ee,mc:N,pc:Y,pbc:y,n:pe,o:t};return{render:Oe,hydrate:void 0,createApp:z_(Oe)}}function Na({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Bi({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function K_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Gd(t,e,n=!1){const i=t.children,r=e.children;if(Ie(i)&&Ie(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=_i(r[s]),a.el=o.el),n||Gd(o,a)),a.type===Cs&&(a.el=o.el)}}function J_(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Wd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Wd(e)}const Z_=t=>t.__isTeleport,mt=Symbol.for("v-fgt"),Cs=Symbol.for("v-txt"),ln=Symbol.for("v-cmt"),Da=Symbol.for("v-stc"),ps=[];let bn=null;function lt(t=!1){ps.push(bn=t?null:[])}function Q_(){ps.pop(),bn=ps[ps.length-1]||null}let Ss=1;function mu(t){Ss+=t}function Xd(t){return t.dynamicChildren=Ss>0?bn||Lr:null,Q_(),Ss>0&&bn&&bn.push(t),t}function Mt(t,e,n,i,r,s){return Xd(ue(t,e,n,i,r,s,!0))}function lr(t,e,n,i,r){return Xd(je(t,e,n,i,r,!0))}function Bo(t){return t?t.__v_isVNode===!0:!1}function Zi(t,e){return t.type===e.type&&t.key===e.key}const $d=({key:t})=>t??null,Ro=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?xt(t)||Jt(t)||ze(t)?{i:zt,r:t,k:e,f:!!n}:t:null);function ue(t,e=null,n=null,i=0,r=null,s=t===mt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&$d(e),ref:e&&Ro(e),scopeId:oa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:zt};return a?(Ec(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=xt(n)?8:16),Ss>0&&!o&&bn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&bn.push(l),l}const je=eg;function eg(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Sd)&&(t=ln),Bo(t)){const a=Ai(t,e,!0);return n&&Ec(a,n),Ss>0&&!s&&bn&&(a.shapeFlag&6?bn[bn.indexOf(t)]=a:bn.push(a)),a.patchFlag|=-2,a}if(fg(t)&&(t=t.__vccOpts),e){e=tg(e);let{class:a,style:l}=e;a&&!xt(a)&&(e.class=Rs(a)),ht(l)&&(ud(l)&&!Ie(l)&&(l=Ct({},l)),e.style=oc(l))}const o=xt(t)?1:g_(t)?128:Z_(t)?64:ht(t)?4:ze(t)?2:0;return ue(t,e,n,i,r,o,s,!0)}function tg(t){return t?ud(t)||Fd(t)?Ct({},t):t:null}function Ai(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?ng(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&$d(c),ref:e&&e.ref?n&&s?Ie(s)?s.concat(Ro(e)):[s,Ro(e)]:Ro(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==mt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ai(t.ssContent),ssFallback:t.ssFallback&&Ai(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&(u.transition=l.clone(u)),u}function wt(t=" ",e=0){return je(Cs,null,t,e)}function xc(t="",e=!1){return e?(lt(),lr(ln,null,t)):je(ln,null,t)}function In(t){return t==null||typeof t=="boolean"?je(ln):Ie(t)?je(mt,null,t.slice()):typeof t=="object"?_i(t):je(Cs,null,String(t))}function _i(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ai(t)}function Ec(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ie(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ec(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Fd(e)?e._ctx=zt:r===3&&zt&&(zt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ze(e)?(e={default:e,_ctx:zt},n=32):(e=String(e),i&64?(n=16,e=[wt(e)]):n=8);t.children=e,t.shapeFlag|=n}function ng(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Rs([e.class,i.class]));else if(r==="style")e.style=oc([e.style,i.style]);else if(Qo(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ie(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Ln(t,e,n,i=null){mn(t,e,7,[n,i])}const ig=Dd();let rg=0;function sg(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||ig,s={uid:rg++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Jh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kd(i,r),emitsOptions:Ed(i,r),emit:null,emitted:null,propsDefaults:pt,inheritAttrs:i.inheritAttrs,ctx:pt,data:pt,props:pt,attrs:pt,slots:pt,refs:pt,setupState:pt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=c_.bind(null,s),t.ce&&t.ce(s),s}let Pt=null;const Fr=()=>Pt||zt;let ko,Ol;{const t=qh(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ko=e("__VUE_INSTANCE_SETTERS__",n=>Pt=n),Ol=e("__VUE_SSR_SETTERS__",n=>ha=n)}const Ls=t=>{const e=Pt;return ko(t),t.scope.on(),()=>{t.scope.off(),ko(e)}},_u=()=>{Pt&&Pt.scope.off(),ko(null)};function Yd(t){return t.vnode.shapeFlag&4}let ha=!1;function og(t,e=!1){e&&Ol(e);const{props:n,children:i}=t.vnode,r=Yd(t);G_(t,n,r,e),$_(t,i);const s=r?ag(t,e):void 0;return e&&Ol(!1),s}function ag(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,D_);const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?cg(t):null,s=Ls(t);Li();const o=Mi(i,t,0,[t.props,r]);if(Pi(),s(),Wh(o)){if(o.then(_u,_u),e)return o.then(a=>{gu(t,a)}).catch(a=>{ra(a,t,0)});t.asyncDep=o}else gu(t,o)}else qd(t)}function gu(t,e,n){ze(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ht(e)&&(t.setupState=md(e)),qd(t)}function qd(t,e,n){const i=t.type;t.render||(t.render=i.render||dn);{const r=Ls(t);Li();try{U_(t)}finally{Pi(),r()}}}const lg={get(t,e){return tn(t,"get",""),t[e]}};function cg(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,lg),slots:t.slots,emit:t.emit,expose:e}}function Sc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(md(Qm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in fs)return fs[n](t)},has(e,n){return n in e||n in fs}}))}function ug(t,e=!0){return ze(t)?t.displayName||t.name:t.name||e&&t.__name}function fg(t){return ze(t)&&"__vccOpts"in t}const Mn=(t,e)=>e_(t,e,ha);function Mc(t,e,n){const i=arguments.length;return i===2?ht(e)&&!Ie(e)?Bo(e)?je(t,null,[e]):je(t,e):je(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Bo(n)&&(n=[n]),je(t,e,n))}const hg="3.4.26";/**
* @vue/runtime-dom v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const dg="http://www.w3.org/2000/svg",pg="http://www.w3.org/1998/Math/MathML",gi=typeof document<"u"?document:null,vu=gi&&gi.createElement("template"),mg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?gi.createElementNS(dg,t):e==="mathml"?gi.createElementNS(pg,t):gi.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>gi.createTextNode(t),createComment:t=>gi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>gi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{vu.innerHTML=i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t;const a=vu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},si="transition",Jr="animation",Ms=Symbol("_vtc"),da=(t,{slots:e})=>Mc(T_,_g(t),e);da.displayName="Transition";const jd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};da.props=Ct({},Td,jd);const ki=(t,e=[])=>{Ie(t)?t.forEach(n=>n(...e)):t&&t(...e)},xu=t=>t?Ie(t)?t.some(e=>e.length>1):t.length>1:!1;function _g(t){const e={};for(const F in t)F in jd||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=gg(r),x=g&&g[0],_=g&&g[1],{onBeforeEnter:m,onEnter:A,onEnterCancelled:v,onLeave:S,onLeaveCancelled:P,onBeforeAppear:T=m,onAppear:R=A,onAppearCancelled:N=v}=e,M=(F,O,ee)=>{Hi(F,O?u:a),Hi(F,O?c:o),ee&&ee()},y=(F,O)=>{F._isLeaving=!1,Hi(F,f),Hi(F,p),Hi(F,h),O&&O()},V=F=>(O,ee)=>{const ne=F?R:A,oe=()=>M(O,F,ee);ki(ne,[O,oe]),Eu(()=>{Hi(O,F?l:s),oi(O,F?u:a),xu(ne)||Su(O,i,x,oe)})};return Ct(e,{onBeforeEnter(F){ki(m,[F]),oi(F,s),oi(F,o)},onBeforeAppear(F){ki(T,[F]),oi(F,l),oi(F,c)},onEnter:V(!1),onAppear:V(!0),onLeave(F,O){F._isLeaving=!0;const ee=()=>y(F,O);oi(F,f),oi(F,h),Eg(),Eu(()=>{F._isLeaving&&(Hi(F,f),oi(F,p),xu(S)||Su(F,i,_,ee))}),ki(S,[F,ee])},onEnterCancelled(F){M(F,!1),ki(v,[F])},onAppearCancelled(F){M(F,!0),ki(N,[F])},onLeaveCancelled(F){y(F),ki(P,[F])}})}function gg(t){if(t==null)return null;if(ht(t))return[Ua(t.enter),Ua(t.leave)];{const e=Ua(t);return[e,e]}}function Ua(t){return ym(t)}function oi(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ms]||(t[Ms]=new Set)).add(e)}function Hi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Ms];n&&(n.delete(e),n.size||(t[Ms]=void 0))}function Eu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let vg=0;function Su(t,e,n,i){const r=t._endId=++vg,s=()=>{r===t._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=xg(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,h),s()},h=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,h)}function xg(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),r=i(`${si}Delay`),s=i(`${si}Duration`),o=Mu(r,s),a=i(`${Jr}Delay`),l=i(`${Jr}Duration`),c=Mu(a,l);let u=null,f=0,h=0;e===si?o>0&&(u=si,f=o,h=s.length):e===Jr?c>0&&(u=Jr,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?si:Jr:null,h=u?u===si?s.length:l.length:0);const p=u===si&&/\b(transform|all)(,|$)/.test(i(`${si}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:p}}function Mu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>yu(n)+yu(t[i])))}function yu(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Eg(){return document.body.offsetHeight}function Sg(t,e,n){const i=t[Ms];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Tu=Symbol("_vod"),Mg=Symbol("_vsh"),yg=Symbol(""),Tg=/(^|;)\s*display\s*:/;function bg(t,e,n){const i=t.style,r=xt(n);let s=!1;if(n&&!r){if(e)if(xt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Co(i,a,"")}else for(const o in e)n[o]==null&&Co(i,o,"");for(const o in n)o==="display"&&(s=!0),Co(i,o,n[o])}else if(r){if(e!==n){const o=i[yg];o&&(n+=";"+o),i.cssText=n,s=Tg.test(n)}}else e&&t.removeAttribute("style");Tu in t&&(t[Tu]=s?i.display:"",t[Mg]&&(i.display="none"))}const bu=/\s*!important$/;function Co(t,e,n){if(Ie(n))n.forEach(i=>Co(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Ag(t,e);bu.test(n)?t.setProperty(Wr(i),n.replace(bu,""),"important"):t[i]=n}}const Au=["Webkit","Moz","ms"],Oa={};function Ag(t,e){const n=Oa[e];if(n)return n;let i=Bn(e);if(i!=="filter"&&i in t)return Oa[e]=i;i=na(i);for(let r=0;r<Au.length;r++){const s=Au[r]+i;if(s in t)return Oa[e]=s}return e}const wu="http://www.w3.org/1999/xlink";function wg(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(wu,e.slice(6,e.length)):t.setAttributeNS(wu,e,n);else{const s=Cm(e);n==null||s&&!jh(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Rg(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=jh(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Cg(t,e,n,i){t.addEventListener(e,n,i)}function Lg(t,e,n,i){t.removeEventListener(e,n,i)}const Ru=Symbol("_vei");function Pg(t,e,n,i,r=null){const s=t[Ru]||(t[Ru]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Ig(e);if(i){const c=s[e]=Ug(i,r);Cg(t,a,c,l)}else o&&(Lg(t,a,o,l),s[e]=void 0)}}const Cu=/(?:Once|Passive|Capture)$/;function Ig(t){let e;if(Cu.test(t)){e={};let i;for(;i=t.match(Cu);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Wr(t.slice(2)),e]}let Fa=0;const Ng=Promise.resolve(),Dg=()=>Fa||(Ng.then(()=>Fa=0),Fa=Date.now());function Ug(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;mn(Og(i,n.value),e,5,[i])};return n.value=t,n.attached=Dg(),n}function Og(t,e){if(Ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Lu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Fg=(t,e,n,i,r,s,o,a,l)=>{const c=r==="svg";e==="class"?Sg(t,i,c):e==="style"?bg(t,n,i):Qo(e)?ic(e)||Pg(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Bg(t,e,i,c))?Rg(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),wg(t,e,i,c))};function Bg(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Lu(e)&&ze(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Lu(e)&&xt(n)?!1:e in t}const kg=Ct({patchProp:Fg},mg);let Pu;function Hg(){return Pu||(Pu=q_(kg))}const zg=(...t)=>{const e=Hg().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Gg(i);if(!r)return;const s=e._component;!ze(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,Vg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Vg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Gg(t){return xt(t)?document.querySelector(t):t}const Ho=Lt({__name:"my-container",props:{tag:{}},setup(t){return(e,n)=>(lt(),lr(m_(e.tag?e.tag:"section"),{class:"max-w-[1280px] mx-auto lg:px-0 px-2 min-h-[100vh]"},{default:kn(()=>[Ld(e.$slots,"default")]),_:3}))}});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yc="164",Wg=0,Iu=1,Xg=2,Kd=1,$g=2,qn=3,wi=0,jt=1,jn=2,yi=0,Dr=1,Nu=2,Du=3,Uu=4,Yg=5,Qi=100,qg=101,jg=102,Kg=103,Jg=104,Zg=200,Qg=201,ev=202,tv=203,Fl=204,Bl=205,nv=206,iv=207,rv=208,sv=209,ov=210,av=211,lv=212,cv=213,uv=214,fv=0,hv=1,dv=2,zo=3,pv=4,mv=5,_v=6,gv=7,Jd=0,vv=1,xv=2,Ti=0,Ev=1,Sv=2,Mv=3,yv=4,Tv=5,bv=6,Av=7,Zd=300,Br=301,kr=302,kl=303,Hl=304,pa=306,zl=1e3,tr=1001,Vl=1002,pn=1003,wv=1004,Ys=1005,yn=1006,Ba=1007,nr=1008,Ri=1009,Rv=1010,Cv=1011,Qd=1012,ep=1013,Hr=1014,xi=1015,ma=1016,tp=1017,np=1018,Ps=1020,Lv=35902,Pv=1021,Iv=1022,Un=1023,Nv=1024,Dv=1025,Ur=1026,ys=1027,Uv=1028,ip=1029,Ov=1030,rp=1031,sp=1033,ka=33776,Ha=33777,za=33778,Va=33779,Ou=35840,Fu=35841,Bu=35842,ku=35843,Hu=36196,zu=37492,Vu=37496,Gu=37808,Wu=37809,Xu=37810,$u=37811,Yu=37812,qu=37813,ju=37814,Ku=37815,Ju=37816,Zu=37817,Qu=37818,ef=37819,tf=37820,nf=37821,Ga=36492,rf=36494,sf=36495,Fv=36283,of=36284,af=36285,lf=36286,Bv=3200,kv=3201,Hv=0,zv=1,vi="",Pn="srgb",Ii="srgb-linear",Tc="display-p3",_a="display-p3-linear",Vo="linear",ut="srgb",Go="rec709",Wo="p3",cr=7680,cf=519,Vv=512,Gv=513,Wv=514,op=515,Xv=516,$v=517,Yv=518,qv=519,uf=35044,ff="300 es",Jn=2e3,Xo=2001;class Xr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lo=Math.PI/180,Gl=180/Math.PI;function Is(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[t&255]+Ft[t>>8&255]+Ft[t>>16&255]+Ft[t>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[n&63|128]+Ft[n>>8&255]+"-"+Ft[n>>16&255]+Ft[n>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function kt(t,e,n){return Math.max(e,Math.min(n,t))}function jv(t,e){return(t%e+e)%e}function Wa(t,e,n){return(1-n)*t+n*e}function Zr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Pe{constructor(e=0,n=0){Pe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],x=r[0],_=r[3],m=r[6],A=r[1],v=r[4],S=r[7],P=r[2],T=r[5],R=r[8];return s[0]=o*x+a*A+l*P,s[3]=o*_+a*v+l*T,s[6]=o*m+a*S+l*R,s[1]=c*x+u*A+f*P,s[4]=c*_+u*v+f*T,s[7]=c*m+u*S+f*R,s[2]=h*x+p*A+g*P,s[5]=h*_+p*v+g*T,s[8]=h*m+p*S+g*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=n*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Xa.makeScale(e,n)),this}rotate(e){return this.premultiply(Xa.makeRotation(-e)),this}translate(e,n){return this.premultiply(Xa.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xa=new We;function ap(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ts(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Kv(){const t=Ts("canvas");return t.style.display="block",t}const hf={};function Jv(t){t in hf||(hf[t]=!0,console.warn(t))}const df=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pf=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qs={[Ii]:{transfer:Vo,primaries:Go,toReference:t=>t,fromReference:t=>t},[Pn]:{transfer:ut,primaries:Go,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[_a]:{transfer:Vo,primaries:Wo,toReference:t=>t.applyMatrix3(pf),fromReference:t=>t.applyMatrix3(df)},[Tc]:{transfer:ut,primaries:Wo,toReference:t=>t.convertSRGBToLinear().applyMatrix3(pf),fromReference:t=>t.applyMatrix3(df).convertLinearToSRGB()}},Zv=new Set([Ii,_a]),st={enabled:!0,_workingColorSpace:Ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Zv.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=qs[e].toReference,r=qs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return qs[t].primaries},getTransfer:function(t){return t===vi?Vo:qs[t].transfer}};function Or(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function $a(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ur;class Qv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ur===void 0&&(ur=Ts("canvas")),ur.width=e.width,ur.height=e.height;const i=ur.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ur}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ts("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Or(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Or(n[i]/255)*255):n[i]=Or(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let e0=0;class lp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Is(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ya(r[o].image)):s.push(Ya(r[o]))}else s=Ya(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ya(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Qv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let t0=0;class Kt extends Xr{constructor(e=Kt.DEFAULT_IMAGE,n=Kt.DEFAULT_MAPPING,i=tr,r=tr,s=yn,o=nr,a=Un,l=Ri,c=Kt.DEFAULT_ANISOTROPY,u=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Is(),this.name="",this.source=new lp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zl:e.x=e.x-Math.floor(e.x);break;case tr:e.x=e.x<0?0:1;break;case Vl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zl:e.y=e.y-Math.floor(e.y);break;case tr:e.y=e.y<0?0:1;break;case Vl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Zd;Kt.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,n=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],x=l[2],_=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-_)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+_)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(p+1)/2,P=(m+1)/2,T=(u+h)/4,R=(f+x)/4,N=(g+_)/4;return v>S&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=R/i):S>P?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=N/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=R/s,r=N/s),this.set(i,r,s,n),this}let A=Math.sqrt((_-g)*(_-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(_-g)/A,this.y=(f-x)/A,this.z=(h-u)/A,this.w=Math.acos((c+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class n0 extends Xr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new lp(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sr extends n0{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class cp extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class i0 extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ns{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=x;return}if(f!==x||l!==h||c!==p||u!==g){let _=1-a;const m=l*h+c*p+u*g+f*x,A=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const P=Math.sqrt(v),T=Math.atan2(P,m*A);_=Math.sin(_*T)/P,a=Math.sin(a*T)/P}const S=a*A;if(l=l*_+h*S,c=c*_+p*S,u=u*_+g*S,f=f*_+x*S,_===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*p-c*h,e[n+1]=l*g+u*h+c*f-a*p,e[n+2]=c*g+u*p+a*h-l*f,e[n+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(mf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(mf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qa.copy(this).projectOnVector(e),this.sub(qa)}reflect(e){return this.sub(qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qa=new H,mf=new Ns;class Ds{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(gn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(gn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=gn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(s,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),js.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),js.copy(i.boundingBox)),js.applyMatrix4(e.matrixWorld),this.union(js)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qr),Ks.subVectors(this.max,Qr),fr.subVectors(e.a,Qr),hr.subVectors(e.b,Qr),dr.subVectors(e.c,Qr),ai.subVectors(hr,fr),li.subVectors(dr,hr),zi.subVectors(fr,dr);let n=[0,-ai.z,ai.y,0,-li.z,li.y,0,-zi.z,zi.y,ai.z,0,-ai.x,li.z,0,-li.x,zi.z,0,-zi.x,-ai.y,ai.x,0,-li.y,li.x,0,-zi.y,zi.x,0];return!ja(n,fr,hr,dr,Ks)||(n=[1,0,0,0,1,0,0,0,1],!ja(n,fr,hr,dr,Ks))?!1:(Js.crossVectors(ai,li),n=[Js.x,Js.y,Js.z],ja(n,fr,hr,dr,Ks))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new H,new H,new H,new H,new H,new H,new H,new H],gn=new H,js=new Ds,fr=new H,hr=new H,dr=new H,ai=new H,li=new H,zi=new H,Qr=new H,Ks=new H,Js=new H,Vi=new H;function ja(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Vi.fromArray(t,s);const a=r.x*Math.abs(Vi.x)+r.y*Math.abs(Vi.y)+r.z*Math.abs(Vi.z),l=e.dot(Vi),c=n.dot(Vi),u=i.dot(Vi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const r0=new Ds,es=new H,Ka=new H;class Us{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):r0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;es.subVectors(e,this.center);const n=es.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(es,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(es.copy(e.center).add(Ka)),this.expandByPoint(es.copy(e.center).sub(Ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new H,Ja=new H,Zs=new H,ci=new H,Za=new H,Qs=new H,Qa=new H;class bc{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Vn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,n),Vn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ja.copy(e).add(n).multiplyScalar(.5),Zs.copy(n).sub(e).normalize(),ci.copy(this.origin).sub(Ja);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Zs),a=ci.dot(this.direction),l=-ci.dot(Zs),c=ci.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const x=1/u;f*=x,h*=x,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ja).addScaledVector(Zs,h),p}intersectSphere(e,n){Vn.subVectors(e.center,this.origin);const i=Vn.dot(this.direction),r=Vn.dot(Vn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,n,i,r,s){Za.subVectors(n,e),Qs.subVectors(i,e),Qa.crossVectors(Za,Qs);let o=this.direction.dot(Qa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,e);const l=a*this.direction.dot(Qs.crossVectors(ci,Qs));if(l<0)return null;const c=a*this.direction.dot(Za.cross(ci));if(c<0||l+c>o)return null;const u=-a*ci.dot(Qa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,n,i,r,s,o,a,l,c,u,f,h,p,g,x,_){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,p,g,x,_)}set(e,n,i,r,s,o,a,l,c,u,f,h,p,g,x,_){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=p,m[7]=g,m[11]=x,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/pr.setFromMatrixColumn(e,0).length(),s=1/pr.setFromMatrixColumn(e,1).length(),o=1/pr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,x=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,x=c*f;n[0]=h+x*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,x=c*f;n[0]=h-x*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=x-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,x=a*f;n[0]=l*u,n[4]=g*c-p,n[8]=h*c+x,n[1]=l*f,n[5]=x*c+h,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=x-h*f,n[8]=g*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+g,n[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+x,n[5]=o*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*u,n[10]=x*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(s0,e,o0)}lookAt(e,n,i){const r=this.elements;return sn.subVectors(e,n),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ui.crossVectors(i,sn),ui.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ui.crossVectors(i,sn)),ui.normalize(),eo.crossVectors(sn,ui),r[0]=ui.x,r[4]=eo.x,r[8]=sn.x,r[1]=ui.y,r[5]=eo.y,r[9]=sn.y,r[2]=ui.z,r[6]=eo.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],x=i[6],_=i[10],m=i[14],A=i[3],v=i[7],S=i[11],P=i[15],T=r[0],R=r[4],N=r[8],M=r[12],y=r[1],V=r[5],F=r[9],O=r[13],ee=r[2],ne=r[6],oe=r[10],re=r[14],Y=r[3],ce=r[7],fe=r[11],ge=r[15];return s[0]=o*T+a*y+l*ee+c*Y,s[4]=o*R+a*V+l*ne+c*ce,s[8]=o*N+a*F+l*oe+c*fe,s[12]=o*M+a*O+l*re+c*ge,s[1]=u*T+f*y+h*ee+p*Y,s[5]=u*R+f*V+h*ne+p*ce,s[9]=u*N+f*F+h*oe+p*fe,s[13]=u*M+f*O+h*re+p*ge,s[2]=g*T+x*y+_*ee+m*Y,s[6]=g*R+x*V+_*ne+m*ce,s[10]=g*N+x*F+_*oe+m*fe,s[14]=g*M+x*O+_*re+m*ge,s[3]=A*T+v*y+S*ee+P*Y,s[7]=A*R+v*V+S*ne+P*ce,s[11]=A*N+v*F+S*oe+P*fe,s[15]=A*M+v*O+S*re+P*ge,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],x=e[7],_=e[11],m=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+x*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+_*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+m*(-r*a*u-n*l*f+n*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],x=e[13],_=e[14],m=e[15],A=f*_*c-x*h*c+x*l*p-a*_*p-f*l*m+a*h*m,v=g*h*c-u*_*c-g*l*p+o*_*p+u*l*m-o*h*m,S=u*x*c-g*f*c+g*a*p-o*x*p-u*a*m+o*f*m,P=g*f*l-u*x*l-g*a*h+o*x*h+u*a*_-o*f*_,T=n*A+i*v+r*S+s*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=A*R,e[1]=(x*h*s-f*_*s-x*r*p+i*_*p+f*r*m-i*h*m)*R,e[2]=(a*_*s-x*l*s+x*r*c-i*_*c-a*r*m+i*l*m)*R,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*R,e[4]=v*R,e[5]=(u*_*s-g*h*s+g*r*p-n*_*p-u*r*m+n*h*m)*R,e[6]=(g*l*s-o*_*s-g*r*c+n*_*c+o*r*m-n*l*m)*R,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*R,e[8]=S*R,e[9]=(g*f*s-u*x*s-g*i*p+n*x*p+u*i*m-n*f*m)*R,e[10]=(o*x*s-g*a*s+g*i*c-n*x*c-o*i*m+n*a*m)*R,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*R,e[12]=P*R,e[13]=(u*x*r-g*f*r+g*i*h-n*x*h-u*i*_+n*f*_)*R,e[14]=(g*a*r-o*x*r-g*i*l+n*x*l+o*i*_-n*a*_)*R,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*h+n*a*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,g=s*f,x=o*u,_=o*f,m=a*f,A=l*c,v=l*u,S=l*f,P=i.x,T=i.y,R=i.z;return r[0]=(1-(x+m))*P,r[1]=(p+S)*P,r[2]=(g-v)*P,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(h+m))*T,r[6]=(_+A)*T,r[7]=0,r[8]=(g+v)*R,r[9]=(_-A)*R,r[10]=(1-(h+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=pr.set(r[0],r[1],r[2]).length();const o=pr.set(r[4],r[5],r[6]).length(),a=pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],vn.copy(this);const c=1/s,u=1/o,f=1/a;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=f,vn.elements[9]*=f,vn.elements[10]*=f,n.setFromRotationMatrix(vn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Jn){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,g;if(a===Jn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Xo)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Jn){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),h=(n+e)*c,p=(i+r)*u;let g,x;if(a===Jn)g=(o+s)*f,x=-2*f;else if(a===Xo)g=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const pr=new H,vn=new gt,s0=new H(0,0,0),o0=new H(1,1,1),ui=new H,eo=new H,sn=new H,_f=new gt,gf=new Ns;class Qn{constructor(e=0,n=0,i=0,r=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return _f.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_f,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return gf.setFromEuler(this),this.setFromQuaternion(gf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class up{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let a0=0;const vf=new H,mr=new Ns,Gn=new gt,to=new H,ts=new H,l0=new H,c0=new Ns,xf=new H(1,0,0),Ef=new H(0,1,0),Sf=new H(0,0,1),Mf={type:"added"},u0={type:"removed"},_r={type:"childadded",child:null},el={type:"childremoved",child:null};class Vt extends Xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new H,n=new Qn,i=new Ns,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new We}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new up,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return mr.setFromAxisAngle(e,n),this.quaternion.multiply(mr),this}rotateOnWorldAxis(e,n){return mr.setFromAxisAngle(e,n),this.quaternion.premultiply(mr),this}rotateX(e){return this.rotateOnAxis(xf,e)}rotateY(e){return this.rotateOnAxis(Ef,e)}rotateZ(e){return this.rotateOnAxis(Sf,e)}translateOnAxis(e,n){return vf.copy(e).applyQuaternion(this.quaternion),this.position.add(vf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(xf,e)}translateY(e){return this.translateOnAxis(Ef,e)}translateZ(e){return this.translateOnAxis(Sf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?to.copy(e):to.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(ts,to,this.up):Gn.lookAt(to,ts,this.up),this.quaternion.setFromRotationMatrix(Gn),r&&(Gn.extractRotation(r.matrixWorld),mr.setFromRotationMatrix(Gn),this.quaternion.premultiply(mr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mf),_r.child=e,this.dispatchEvent(_r),_r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(u0),el.child=e,this.dispatchEvent(el),el.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mf),_r.child=e,this.dispatchEvent(_r),_r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,e,l0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,c0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new H(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new H,Wn=new H,tl=new H,Xn=new H,gr=new H,vr=new H,yf=new H,nl=new H,il=new H,rl=new H;class Tn{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),xn.subVectors(e,n),r.cross(xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){xn.subVectors(r,n),Wn.subVectors(i,n),tl.subVectors(e,n);const o=xn.dot(xn),a=xn.dot(Wn),l=xn.dot(tl),c=Wn.dot(Wn),u=Wn.dot(tl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xn.x),l.addScaledVector(o,Xn.y),l.addScaledVector(a,Xn.z),l)}static isFrontFacing(e,n,i,r){return xn.subVectors(i,n),Wn.subVectors(e,n),xn.cross(Wn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),xn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Tn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Tn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;gr.subVectors(r,i),vr.subVectors(s,i),nl.subVectors(e,i);const l=gr.dot(nl),c=vr.dot(nl);if(l<=0&&c<=0)return n.copy(i);il.subVectors(e,r);const u=gr.dot(il),f=vr.dot(il);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(gr,o);rl.subVectors(e,s);const p=gr.dot(rl),g=vr.dot(rl);if(g>=0&&p<=g)return n.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(vr,a);const _=u*g-p*f;if(_<=0&&f-u>=0&&p-g>=0)return yf.subVectors(s,r),a=(f-u)/(f-u+(p-g)),n.copy(r).addScaledVector(yf,a);const m=1/(_+x+h);return o=x*m,a=h*m,n.copy(i).addScaledVector(gr,o).addScaledVector(vr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},no={h:0,s:0,l:0};function sl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=jv(e,1),n=kt(n,0,1),i=kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=sl(o,s,e+1/3),this.g=sl(o,s,e),this.b=sl(o,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,n=Pn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Pn){const i=fp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Or(e.r),this.g=Or(e.g),this.b=Or(e.b),this}copyLinearToSRGB(e){return this.r=$a(e.r),this.g=$a(e.g),this.b=$a(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return st.fromWorkingColorSpace(Bt.copy(this),e),Math.round(kt(Bt.r*255,0,255))*65536+Math.round(kt(Bt.g*255,0,255))*256+Math.round(kt(Bt.b*255,0,255))}getHexString(e=Pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.fromWorkingColorSpace(Bt.copy(this),n);const i=Bt.r,r=Bt.g,s=Bt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=st.workingColorSpace){return st.fromWorkingColorSpace(Bt.copy(this),n),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Pn){st.fromWorkingColorSpace(Bt.copy(this),e);const n=Bt.r,i=Bt.g,r=Bt.b;return e!==Pn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+n,fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(fi),e.getHSL(no);const i=Wa(fi.h,no.h,n),r=Wa(fi.s,no.s,n),s=Wa(fi.l,no.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new et;et.NAMES=fp;let f0=0;class $r extends Xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=Is(),this.name="",this.type="Material",this.blending=Dr,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fl,this.blendDst=Bl,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Dr&&(i.blending=this.blending),this.side!==wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fl&&(i.blendSrc=this.blendSrc),this.blendDst!==Bl&&(i.blendDst=this.blendDst),this.blendEquation!==Qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ac extends $r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Jd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new H,io=new Pe;class _n{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=uf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Jv("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)io.fromBufferAttribute(this,n),io.applyMatrix3(e),this.setXY(n,io.x,io.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Zr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Zr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Zr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Zr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Zr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uf&&(e.usage=this.usage),e}}class hp extends _n{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class dp extends _n{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Gt extends _n{constructor(e,n,i){super(new Float32Array(e),n,i)}}let h0=0;const fn=new gt,ol=new Vt,xr=new H,on=new Ds,ns=new Ds,At=new H;class nn extends Xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ap(e)?dp:hp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,n,i){return fn.makeTranslation(e,n,i),this.applyMatrix4(fn),this}scale(e,n,i){return fn.makeScale(e,n,i),this.applyMatrix4(fn),this}lookAt(e){return ol.lookAt(e),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Gt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ds);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];on.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Us);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ns.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(on.min,ns.min),on.expandByPoint(At),At.addVectors(on.max,ns.max),on.expandByPoint(At)):(on.expandByPoint(ns.min),on.expandByPoint(ns.max))}on.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)At.fromBufferAttribute(a,c),l&&(xr.fromBufferAttribute(e,c),At.add(xr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new H,l[N]=new H;const c=new H,u=new H,f=new H,h=new Pe,p=new Pe,g=new Pe,x=new H,_=new H;function m(N,M,y){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,N),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,y),u.sub(c),f.sub(c),p.sub(h),g.sub(h);const V=1/(p.x*g.y-g.x*p.y);isFinite(V)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(V),_.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(V),a[N].add(x),a[M].add(x),a[y].add(x),l[N].add(_),l[M].add(_),l[y].add(_))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let N=0,M=A.length;N<M;++N){const y=A[N],V=y.start,F=y.count;for(let O=V,ee=V+F;O<ee;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const v=new H,S=new H,P=new H,T=new H;function R(N){P.fromBufferAttribute(r,N),T.copy(P);const M=a[N];v.copy(M),v.sub(P.multiplyScalar(P.dot(M))).normalize(),S.crossVectors(T,M);const V=S.dot(l[N])<0?-1:1;o.setXYZW(N,v.x,v.y,v.z,V)}for(let N=0,M=A.length;N<M;++N){const y=A[N],V=y.start,F=y.count;for(let O=V,ee=V+F;O<ee;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _n(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),x=e.getX(h+1),_=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,_),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,_),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,_=l.length;x<_;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let m=0;m<u;m++)h[g++]=c[p++]}return new _n(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new nn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tf=new gt,Gi=new bc,ro=new Us,bf=new H,Er=new H,Sr=new H,Mr=new H,al=new H,so=new H,oo=new Pe,ao=new Pe,lo=new Pe,Af=new H,wf=new H,Rf=new H,co=new H,uo=new H;class An extends Vt{constructor(e=new nn,n=new Ac){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){so.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(al.fromBufferAttribute(f,e),o?so.addScaledVector(al,u):so.addScaledVector(al.sub(n),u))}n.add(so)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ro.copy(i.boundingSphere),ro.applyMatrix4(s),Gi.copy(e.ray).recast(e.near),!(ro.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(ro,bf)===null||Gi.origin.distanceToSquared(bf)>(e.far-e.near)**2))&&(Tf.copy(s).invert(),Gi.copy(e.ray).applyMatrix4(Tf),!(i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Gi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const _=h[g],m=o[_.materialIndex],A=Math.max(_.start,p.start),v=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let S=A,P=v;S<P;S+=3){const T=a.getX(S),R=a.getX(S+1),N=a.getX(S+2);r=fo(this,m,e,i,c,u,f,T,R,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let _=g,m=x;_<m;_+=3){const A=a.getX(_),v=a.getX(_+1),S=a.getX(_+2);r=fo(this,o,e,i,c,u,f,A,v,S),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const _=h[g],m=o[_.materialIndex],A=Math.max(_.start,p.start),v=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let S=A,P=v;S<P;S+=3){const T=S,R=S+1,N=S+2;r=fo(this,m,e,i,c,u,f,T,R,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let _=g,m=x;_<m;_+=3){const A=_,v=_+1,S=_+2;r=fo(this,o,e,i,c,u,f,A,v,S),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}}}function d0(t,e,n,i,r,s,o,a){let l;if(e.side===jt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===wi,a),l===null)return null;uo.copy(a),uo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(uo);return c<n.near||c>n.far?null:{distance:c,point:uo.clone(),object:t}}function fo(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Er),t.getVertexPosition(l,Sr),t.getVertexPosition(c,Mr);const u=d0(t,e,n,i,Er,Sr,Mr,co);if(u){r&&(oo.fromBufferAttribute(r,a),ao.fromBufferAttribute(r,l),lo.fromBufferAttribute(r,c),u.uv=Tn.getInterpolation(co,Er,Sr,Mr,oo,ao,lo,new Pe)),s&&(oo.fromBufferAttribute(s,a),ao.fromBufferAttribute(s,l),lo.fromBufferAttribute(s,c),u.uv1=Tn.getInterpolation(co,Er,Sr,Mr,oo,ao,lo,new Pe)),o&&(Af.fromBufferAttribute(o,a),wf.fromBufferAttribute(o,l),Rf.fromBufferAttribute(o,c),u.normal=Tn.getInterpolation(co,Er,Sr,Mr,Af,wf,Rf,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new H,materialIndex:0};Tn.getNormal(Er,Sr,Mr,f.normal),u.face=f}return u}class Os extends nn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(f,2));function g(x,_,m,A,v,S,P,T,R,N,M){const y=S/R,V=P/N,F=S/2,O=P/2,ee=T/2,ne=R+1,oe=N+1;let re=0,Y=0;const ce=new H;for(let fe=0;fe<oe;fe++){const ge=fe*V-O;for(let we=0;we<ne;we++){const qe=we*y-F;ce[x]=qe*A,ce[_]=ge*v,ce[m]=ee,c.push(ce.x,ce.y,ce.z),ce[x]=0,ce[_]=0,ce[m]=T>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(we/R),f.push(1-fe/N),re+=1}}for(let fe=0;fe<N;fe++)for(let ge=0;ge<R;ge++){const we=h+ge+ne*fe,qe=h+ge+ne*(fe+1),Q=h+(ge+1)+ne*(fe+1),de=h+(ge+1)+ne*fe;l.push(we,qe,de),l.push(qe,Q,de),Y+=6}a.addGroup(p,Y,M),p+=Y,h+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=zr(t[n]);for(const r in i)e[r]=i[r]}return e}function p0(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function pp(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const m0={clone:zr,merge:$t};var _0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends $r{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_0,this.fragmentShader=g0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.uniformsGroups=p0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class mp extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Jn}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new H,Cf=new Pe,Lf=new Pe;class qt extends mp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Gl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gl*2*Math.atan(Math.tan(Lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,n){return this.getViewBounds(e,Cf,Lf),n.subVectors(Lf,Cf)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Lo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const yr=-90,Tr=1;class v0 extends Vt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qt(yr,Tr,e,n);r.layers=this.layers,this.add(r);const s=new qt(yr,Tr,e,n);s.layers=this.layers,this.add(s);const o=new qt(yr,Tr,e,n);o.layers=this.layers,this.add(o);const a=new qt(yr,Tr,e,n);a.layers=this.layers,this.add(a);const l=new qt(yr,Tr,e,n);l.layers=this.layers,this.add(l);const c=new qt(yr,Tr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Jn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class _p extends Kt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Br,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class x0 extends sr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new _p(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:yn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Os(5,5,5),s=new ei({name:"CubemapFromEquirect",uniforms:zr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:yi});s.uniforms.tEquirect.value=n;const o=new An(r,s),a=n.minFilter;return n.minFilter===nr&&(n.minFilter=yn),new v0(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const ll=new H,E0=new H,S0=new We;class ji{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ll.subVectors(i,n).cross(E0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ll),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||S0.getNormalMatrix(e),r=this.coplanarPoint(ll).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new Us,ho=new H;class gp{constructor(e=new ji,n=new ji,i=new ji,r=new ji,s=new ji,o=new ji){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Jn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],g=r[9],x=r[10],_=r[11],m=r[12],A=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,_-p,S-m).normalize(),i[1].setComponents(l+s,h+c,_+p,S+m).normalize(),i[2].setComponents(l+o,h+u,_+g,S+A).normalize(),i[3].setComponents(l-o,h-u,_-g,S-A).normalize(),i[4].setComponents(l-a,h-f,_-x,S-v).normalize(),n===Jn)i[5].setComponents(l+a,h+f,_+x,S+v).normalize();else if(n===Xo)i[5].setComponents(a,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Wi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ho.x=r.normal.x>0?e.max.x:e.min.x,ho.y=r.normal.y>0?e.max.y:e.min.y,ho.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vp(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function M0(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(t.bindBuffer(c,a),f.count===-1&&h.length===0&&t.bufferSubData(c,0,u),h.length!==0){for(let p=0,g=h.length;p<g;p++){const x=h[p];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Fs extends nn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,p=[],g=[],x=[],_=[];for(let m=0;m<u;m++){const A=m*h-o;for(let v=0;v<c;v++){const S=v*f-s;g.push(S,-A,0),x.push(0,0,1),_.push(v/a),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let A=0;A<a;A++){const v=A+c*m,S=A+c*(m+1),P=A+1+c*(m+1),T=A+1+c*m;p.push(v,S,T),p.push(S,P,T)}this.setIndex(p),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(x,3)),this.setAttribute("uv",new Gt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.width,e.height,e.widthSegments,e.heightSegments)}}var y0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,T0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,b0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,R0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,L0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,I0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,N0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,O0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,F0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Y0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,q0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,J0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",ex=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,tx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ix=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ox=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ax=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ux=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,px=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_x=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ex=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ax=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Px=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ix=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ux=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ox=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Bx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,kx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$x=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,sE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,aE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_E=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,EE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,SE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ME=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,CE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,LE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,PE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,FE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,GE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,WE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$E=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,YE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,JE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,eS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:y0,alphahash_pars_fragment:T0,alphamap_fragment:b0,alphamap_pars_fragment:A0,alphatest_fragment:w0,alphatest_pars_fragment:R0,aomap_fragment:C0,aomap_pars_fragment:L0,batching_pars_vertex:P0,batching_vertex:I0,begin_vertex:N0,beginnormal_vertex:D0,bsdfs:U0,iridescence_fragment:O0,bumpmap_pars_fragment:F0,clipping_planes_fragment:B0,clipping_planes_pars_fragment:k0,clipping_planes_pars_vertex:H0,clipping_planes_vertex:z0,color_fragment:V0,color_pars_fragment:G0,color_pars_vertex:W0,color_vertex:X0,common:$0,cube_uv_reflection_fragment:Y0,defaultnormal_vertex:q0,displacementmap_pars_vertex:j0,displacementmap_vertex:K0,emissivemap_fragment:J0,emissivemap_pars_fragment:Z0,colorspace_fragment:Q0,colorspace_pars_fragment:ex,envmap_fragment:tx,envmap_common_pars_fragment:nx,envmap_pars_fragment:ix,envmap_pars_vertex:rx,envmap_physical_pars_fragment:mx,envmap_vertex:sx,fog_vertex:ox,fog_pars_vertex:ax,fog_fragment:lx,fog_pars_fragment:cx,gradientmap_pars_fragment:ux,lightmap_pars_fragment:fx,lights_lambert_fragment:hx,lights_lambert_pars_fragment:dx,lights_pars_begin:px,lights_toon_fragment:_x,lights_toon_pars_fragment:gx,lights_phong_fragment:vx,lights_phong_pars_fragment:xx,lights_physical_fragment:Ex,lights_physical_pars_fragment:Sx,lights_fragment_begin:Mx,lights_fragment_maps:yx,lights_fragment_end:Tx,logdepthbuf_fragment:bx,logdepthbuf_pars_fragment:Ax,logdepthbuf_pars_vertex:wx,logdepthbuf_vertex:Rx,map_fragment:Cx,map_pars_fragment:Lx,map_particle_fragment:Px,map_particle_pars_fragment:Ix,metalnessmap_fragment:Nx,metalnessmap_pars_fragment:Dx,morphinstance_vertex:Ux,morphcolor_vertex:Ox,morphnormal_vertex:Fx,morphtarget_pars_vertex:Bx,morphtarget_vertex:kx,normal_fragment_begin:Hx,normal_fragment_maps:zx,normal_pars_fragment:Vx,normal_pars_vertex:Gx,normal_vertex:Wx,normalmap_pars_fragment:Xx,clearcoat_normal_fragment_begin:$x,clearcoat_normal_fragment_maps:Yx,clearcoat_pars_fragment:qx,iridescence_pars_fragment:jx,opaque_fragment:Kx,packing:Jx,premultiplied_alpha_fragment:Zx,project_vertex:Qx,dithering_fragment:eE,dithering_pars_fragment:tE,roughnessmap_fragment:nE,roughnessmap_pars_fragment:iE,shadowmap_pars_fragment:rE,shadowmap_pars_vertex:sE,shadowmap_vertex:oE,shadowmask_pars_fragment:aE,skinbase_vertex:lE,skinning_pars_vertex:cE,skinning_vertex:uE,skinnormal_vertex:fE,specularmap_fragment:hE,specularmap_pars_fragment:dE,tonemapping_fragment:pE,tonemapping_pars_fragment:mE,transmission_fragment:_E,transmission_pars_fragment:gE,uv_pars_fragment:vE,uv_pars_vertex:xE,uv_vertex:EE,worldpos_vertex:SE,background_vert:ME,background_frag:yE,backgroundCube_vert:TE,backgroundCube_frag:bE,cube_vert:AE,cube_frag:wE,depth_vert:RE,depth_frag:CE,distanceRGBA_vert:LE,distanceRGBA_frag:PE,equirect_vert:IE,equirect_frag:NE,linedashed_vert:DE,linedashed_frag:UE,meshbasic_vert:OE,meshbasic_frag:FE,meshlambert_vert:BE,meshlambert_frag:kE,meshmatcap_vert:HE,meshmatcap_frag:zE,meshnormal_vert:VE,meshnormal_frag:GE,meshphong_vert:WE,meshphong_frag:XE,meshphysical_vert:$E,meshphysical_frag:YE,meshtoon_vert:qE,meshtoon_frag:jE,points_vert:KE,points_frag:JE,shadow_vert:ZE,shadow_frag:QE,sprite_vert:eS,sprite_frag:tS},_e={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Nn={basic:{uniforms:$t([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:$t([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new et(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:$t([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:$t([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:$t([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new et(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:$t([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:$t([_e.points,_e.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:$t([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:$t([_e.common,_e.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:$t([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:$t([_e.sprite,_e.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:$t([_e.common,_e.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:$t([_e.lights,_e.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Nn.physical={uniforms:$t([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const po={r:0,b:0,g:0},Xi=new Qn,nS=new gt;function iS(t,e,n,i,r,s,o){const a=new et(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function g(A){let v=A.isScene===!0?A.background:null;return v&&v.isTexture&&(v=(A.backgroundBlurriness>0?n:e).get(v)),v}function x(A){let v=!1;const S=g(A);S===null?m(a,l):S&&S.isColor&&(m(S,1),v=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function _(A,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===pa)?(u===void 0&&(u=new An(new Os(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:zr(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Xi.copy(v.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(nS.makeRotationFromEuler(Xi)),u.material.toneMapped=st.getTransfer(S.colorSpace)!==ut,(f!==S||h!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,p=t.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new An(new Fs(2,2),new ei({name:"BackgroundMaterial",uniforms:zr(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=st.getTransfer(S.colorSpace)!==ut,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,p=t.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function m(A,v){A.getRGB(po,pp(t)),i.buffers.color.setClear(po.r,po.g,po.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(A,v=1){a.set(A),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,m(a,l)},render:x,addToRenderList:_}}function rS(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,V,F,O,ee){let ne=!1;const oe=f(O,F,V);s!==oe&&(s=oe,c(s.object)),ne=p(y,O,F,ee),ne&&g(y,O,F,ee),ee!==null&&e.update(ee,t.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,S(y,V,F,O),ee!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function f(y,V,F){const O=F.wireframe===!0;let ee=i[y.id];ee===void 0&&(ee={},i[y.id]=ee);let ne=ee[V.id];ne===void 0&&(ne={},ee[V.id]=ne);let oe=ne[O];return oe===void 0&&(oe=h(l()),ne[O]=oe),oe}function h(y){const V=[],F=[],O=[];for(let ee=0;ee<n;ee++)V[ee]=0,F[ee]=0,O[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:F,attributeDivisors:O,object:y,attributes:{},index:null}}function p(y,V,F,O){const ee=s.attributes,ne=V.attributes;let oe=0;const re=F.getAttributes();for(const Y in re)if(re[Y].location>=0){const fe=ee[Y];let ge=ne[Y];if(ge===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),fe===void 0||fe.attribute!==ge||ge&&fe.data!==ge.data)return!0;oe++}return s.attributesNum!==oe||s.index!==O}function g(y,V,F,O){const ee={},ne=V.attributes;let oe=0;const re=F.getAttributes();for(const Y in re)if(re[Y].location>=0){let fe=ne[Y];fe===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(fe=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(fe=y.instanceColor));const ge={};ge.attribute=fe,fe&&fe.data&&(ge.data=fe.data),ee[Y]=ge,oe++}s.attributes=ee,s.attributesNum=oe,s.index=O}function x(){const y=s.newAttributes;for(let V=0,F=y.length;V<F;V++)y[V]=0}function _(y){m(y,0)}function m(y,V){const F=s.newAttributes,O=s.enabledAttributes,ee=s.attributeDivisors;F[y]=1,O[y]===0&&(t.enableVertexAttribArray(y),O[y]=1),ee[y]!==V&&(t.vertexAttribDivisor(y,V),ee[y]=V)}function A(){const y=s.newAttributes,V=s.enabledAttributes;for(let F=0,O=V.length;F<O;F++)V[F]!==y[F]&&(t.disableVertexAttribArray(F),V[F]=0)}function v(y,V,F,O,ee,ne,oe){oe===!0?t.vertexAttribIPointer(y,V,F,ee,ne):t.vertexAttribPointer(y,V,F,O,ee,ne)}function S(y,V,F,O){x();const ee=O.attributes,ne=F.getAttributes(),oe=V.defaultAttributeValues;for(const re in ne){const Y=ne[re];if(Y.location>=0){let ce=ee[re];if(ce===void 0&&(re==="instanceMatrix"&&y.instanceMatrix&&(ce=y.instanceMatrix),re==="instanceColor"&&y.instanceColor&&(ce=y.instanceColor)),ce!==void 0){const fe=ce.normalized,ge=ce.itemSize,we=e.get(ce);if(we===void 0)continue;const qe=we.buffer,Q=we.type,de=we.bytesPerElement,me=Q===t.INT||Q===t.UNSIGNED_INT||ce.gpuType===ep;if(ce.isInterleavedBufferAttribute){const pe=ce.data,Ne=pe.stride,Oe=ce.offset;if(pe.isInstancedInterleavedBuffer){for(let X=0;X<Y.locationSize;X++)m(Y.location+X,pe.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let X=0;X<Y.locationSize;X++)_(Y.location+X);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let X=0;X<Y.locationSize;X++)v(Y.location+X,ge/Y.locationSize,Q,fe,Ne*de,(Oe+ge/Y.locationSize*X)*de,me)}else{if(ce.isInstancedBufferAttribute){for(let pe=0;pe<Y.locationSize;pe++)m(Y.location+pe,ce.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let pe=0;pe<Y.locationSize;pe++)_(Y.location+pe);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let pe=0;pe<Y.locationSize;pe++)v(Y.location+pe,ge/Y.locationSize,Q,fe,ge*de,ge/Y.locationSize*pe*de,me)}}else if(oe!==void 0){const fe=oe[re];if(fe!==void 0)switch(fe.length){case 2:t.vertexAttrib2fv(Y.location,fe);break;case 3:t.vertexAttrib3fv(Y.location,fe);break;case 4:t.vertexAttrib4fv(Y.location,fe);break;default:t.vertexAttrib1fv(Y.location,fe)}}}}A()}function P(){N();for(const y in i){const V=i[y];for(const F in V){const O=V[F];for(const ee in O)u(O[ee].object),delete O[ee];delete V[F]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;const V=i[y.id];for(const F in V){const O=V[F];for(const ee in O)u(O[ee].object),delete O[ee];delete V[F]}delete i[y.id]}function R(y){for(const V in i){const F=i[V];if(F[y.id]===void 0)continue;const O=F[y.id];for(const ee in O)u(O[ee].object),delete O[ee];delete F[y.id]}}function N(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:_,disableUnusedAttributes:A}}function sS(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<f;p++)this.render(c[p],u[p]);else{h.multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];n.update(p,i,1)}}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];for(let x=0;x<h.length;x++)n.update(g,i,h[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function oS(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Un&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ri&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==xi&&!R)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),A=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:m,maxVaryings:A,maxFragmentUniforms:v,vertexTextures:S,maxSamples:P}}function aS(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ji,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,x=f.clipIntersection,_=f.clipShadows,m=t.get(f);if(!r||g===null||g.length===0||s&&!_)s?u(null):c();else{const A=s?0:i,v=A*4;let S=m.clippingState||null;l.value=S,S=u(g,h,v,p);for(let P=0;P!==v;++P)S[P]=n[P];m.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){const x=f!==null?f.length:0;let _=null;if(x!==0){if(_=l.value,g!==!0||_===null){const m=p+x*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(_===null||_.length<m)&&(_=new Float32Array(m));for(let v=0,S=p;v!==x;++v,S+=4)o.copy(f[v]).applyMatrix4(A,a),o.normal.toArray(_,S),_[S+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,_}}function lS(t){let e=new WeakMap;function n(o,a){return a===kl?o.mapping=Br:a===Hl&&(o.mapping=kr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===kl||a===Hl)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new x0(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class cS extends mp{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Rr=4,Pf=[.125,.215,.35,.446,.526,.582],er=20,cl=new cS,If=new et;let ul=null,fl=0,hl=0,dl=!1;const Ki=(1+Math.sqrt(5))/2,br=1/Ki,Nf=[new H(-Ki,br,0),new H(Ki,br,0),new H(-br,0,Ki),new H(br,0,Ki),new H(0,Ki,-br),new H(0,Ki,br),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Df{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ul=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ul,fl,hl),this._renderer.xr.enabled=dl,e.scissorTest=!1,mo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Br||e.mapping===kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ul=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:ma,format:Un,colorSpace:Ii,depthBuffer:!1},r=Uf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uf(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uS(s)),this._blurMaterial=fS(s,e,n)}return r}_compileMaterial(e){const n=new An(this._lodPlanes[0],e);this._renderer.compile(n,cl)}_sceneToCubeUV(e,n,i,r){const a=new qt(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(If),u.toneMapping=Ti,u.autoClear=!1;const p=new Ac({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new An(new Os,p);let x=!1;const _=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,x=!0):(p.color.copy(If),x=!0);for(let m=0;m<6;m++){const A=m%3;A===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):A===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;mo(r,A*v,m>2?v:0,v,v),u.setRenderTarget(r),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Br||e.mapping===kr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Of());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new An(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;mo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,cl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Nf[(r-s-1)%Nf.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new An(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*er-1),x=s/g,_=isFinite(s)?1+Math.floor(u*x):er;_>er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${er}`);const m=[];let A=0;for(let R=0;R<er;++R){const N=R/x,M=Math.exp(-N*N/2);m.push(M),R===0?A+=M:R<_&&(A+=2*M)}for(let R=0;R<m.length;R++)m[R]=m[R]/A;h.envMap.value=e.texture,h.samples.value=_,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const S=this._sizeLods[r],P=3*S*(r>v-Rr?r-v+Rr:0),T=4*(this._cubeSize-S);mo(n,P,T,3*S,2*S),l.setRenderTarget(n),l.render(f,cl)}}function uS(t){const e=[],n=[],i=[];let r=t;const s=t-Rr+1+Pf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Rr?l=Pf[o-t+Rr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,x=3,_=2,m=1,A=new Float32Array(x*g*p),v=new Float32Array(_*g*p),S=new Float32Array(m*g*p);for(let T=0;T<p;T++){const R=T%3*2/3-1,N=T>2?0:-1,M=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];A.set(M,x*g*T),v.set(h,_*g*T);const y=[T,T,T,T,T,T];S.set(y,m*g*T)}const P=new nn;P.setAttribute("position",new _n(A,x)),P.setAttribute("uv",new _n(v,_)),P.setAttribute("faceIndex",new _n(S,m)),e.push(P),r>Rr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Uf(t,e,n){const i=new sr(t,e,n);return i.texture.mapping=pa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function mo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function fS(t,e,n){const i=new Float32Array(er),r=new H(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Of(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Ff(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hS(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===kl||l===Hl,u=l===Br||l===kr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Df(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Df(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function dS(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function pS(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const x=h.morphAttributes[g];for(let _=0,m=x.length;_<m;_++)e.remove(x[_])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const x=p[g];for(let _=0,m=x.length;_<m;_++)e.update(x[_],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let x=0;if(p!==null){const A=p.array;x=p.version;for(let v=0,S=A.length;v<S;v+=3){const P=A[v+0],T=A[v+1],R=A[v+2];h.push(P,T,T,R,R,P)}}else if(g!==void 0){const A=g.array;x=g.version;for(let v=0,S=A.length/3-1;v<S;v+=3){const P=v+0,T=v+1,R=v+2;h.push(P,T,T,R,R,P)}}else return;const _=new(ap(h)?dp:hp)(h,1);_.version=x;const m=s.get(f);m&&e.remove(m),s.set(f,_)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function mS(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,h*o,g),n.update(p,i,g))}function u(h,p,g){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<g;_++)this.render(h[_]/o,p[_]);else{x.multiDrawElementsWEBGL(i,p,0,s,h,0,g);let _=0;for(let m=0;m<g;m++)_+=p[m];n.update(_,i,1)}}function f(h,p,g,x){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<h.length;m++)c(h[m]/o,p[m],x[m]);else{_.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,g);let m=0;for(let A=0;A<g;A++)m+=p[A];for(let A=0;A<x.length;A++)n.update(m,i,x[A])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function _S(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function gS(t,e,n){const i=new WeakMap,r=new It;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let y=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),_===!0&&(S=3);let P=a.attributes.position.count*S,T=1;P>e.maxTextureSize&&(T=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const R=new Float32Array(P*T*4*f),N=new cp(R,P,T,f);N.type=xi,N.needsUpdate=!0;const M=S*4;for(let V=0;V<f;V++){const F=m[V],O=A[V],ee=v[V],ne=P*T*4*V;for(let oe=0;oe<F.count;oe++){const re=oe*M;g===!0&&(r.fromBufferAttribute(F,oe),R[ne+re+0]=r.x,R[ne+re+1]=r.y,R[ne+re+2]=r.z,R[ne+re+3]=0),x===!0&&(r.fromBufferAttribute(O,oe),R[ne+re+4]=r.x,R[ne+re+5]=r.y,R[ne+re+6]=r.z,R[ne+re+7]=0),_===!0&&(r.fromBufferAttribute(ee,oe),R[ne+re+8]=r.x,R[ne+re+9]=r.y,R[ne+re+10]=r.z,R[ne+re+11]=ee.itemSize===4?r.w:1)}}h={count:f,texture:N,size:new Pe(P,T)},i.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let _=0;_<c.length;_++)g+=c[_];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function vS(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class xp extends Kt{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Ur,u!==Ur&&u!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ur&&(i=Hr),i===void 0&&u===ys&&(i=Ps),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:pn,this.minFilter=l!==void 0?l:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Ep=new Kt,Sp=new xp(1,1);Sp.compareFunction=op;const Mp=new cp,yp=new i0,Tp=new _p,Bf=[],kf=[],Hf=new Float32Array(16),zf=new Float32Array(9),Vf=new Float32Array(4);function Yr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Bf[r];if(s===void 0&&(s=new Float32Array(r),Bf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ga(t,e){let n=kf[e];n===void 0&&(n=new Int32Array(e),kf[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function xS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ES(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function SS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function MS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function yS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Tt(n,i))return;Vf.set(i),t.uniformMatrix2fv(this.addr,!1,Vf),bt(n,i)}}function TS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Tt(n,i))return;zf.set(i),t.uniformMatrix3fv(this.addr,!1,zf),bt(n,i)}}function bS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Tt(n,i))return;Hf.set(i),t.uniformMatrix4fv(this.addr,!1,Hf),bt(n,i)}}function AS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function wS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function RS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function CS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function LS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function PS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function IS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function NS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function DS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Sp:Ep;n.setTexture2D(e||s,r)}function US(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||yp,r)}function OS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Tp,r)}function FS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Mp,r)}function BS(t){switch(t){case 5126:return xS;case 35664:return ES;case 35665:return SS;case 35666:return MS;case 35674:return yS;case 35675:return TS;case 35676:return bS;case 5124:case 35670:return AS;case 35667:case 35671:return wS;case 35668:case 35672:return RS;case 35669:case 35673:return CS;case 5125:return LS;case 36294:return PS;case 36295:return IS;case 36296:return NS;case 35678:case 36198:case 36298:case 36306:case 35682:return DS;case 35679:case 36299:case 36307:return US;case 35680:case 36300:case 36308:case 36293:return OS;case 36289:case 36303:case 36311:case 36292:return FS}}function kS(t,e){t.uniform1fv(this.addr,e)}function HS(t,e){const n=Yr(e,this.size,2);t.uniform2fv(this.addr,n)}function zS(t,e){const n=Yr(e,this.size,3);t.uniform3fv(this.addr,n)}function VS(t,e){const n=Yr(e,this.size,4);t.uniform4fv(this.addr,n)}function GS(t,e){const n=Yr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function WS(t,e){const n=Yr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function XS(t,e){const n=Yr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function $S(t,e){t.uniform1iv(this.addr,e)}function YS(t,e){t.uniform2iv(this.addr,e)}function qS(t,e){t.uniform3iv(this.addr,e)}function jS(t,e){t.uniform4iv(this.addr,e)}function KS(t,e){t.uniform1uiv(this.addr,e)}function JS(t,e){t.uniform2uiv(this.addr,e)}function ZS(t,e){t.uniform3uiv(this.addr,e)}function QS(t,e){t.uniform4uiv(this.addr,e)}function eM(t,e,n){const i=this.cache,r=e.length,s=ga(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Ep,s[o])}function tM(t,e,n){const i=this.cache,r=e.length,s=ga(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||yp,s[o])}function nM(t,e,n){const i=this.cache,r=e.length,s=ga(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Tp,s[o])}function iM(t,e,n){const i=this.cache,r=e.length,s=ga(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Mp,s[o])}function rM(t){switch(t){case 5126:return kS;case 35664:return HS;case 35665:return zS;case 35666:return VS;case 35674:return GS;case 35675:return WS;case 35676:return XS;case 5124:case 35670:return $S;case 35667:case 35671:return YS;case 35668:case 35672:return qS;case 35669:case 35673:return jS;case 5125:return KS;case 36294:return JS;case 36295:return ZS;case 36296:return QS;case 35678:case 36198:case 36298:case 36306:case 35682:return eM;case 35679:case 36299:case 36307:return tM;case 35680:case 36300:case 36308:case 36293:return nM;case 36289:case 36303:case 36311:case 36292:return iM}}class sM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=BS(n.type)}}class oM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=rM(n.type)}}class aM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const pl=/(\w+)(\])?(\[|\.)?/g;function Gf(t,e){t.seq.push(e),t.map[e.id]=e}function lM(t,e,n){const i=t.name,r=i.length;for(pl.lastIndex=0;;){const s=pl.exec(i),o=pl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Gf(n,c===void 0?new sM(a,t,e):new oM(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new aM(a),Gf(n,f)),n=f}}}class Po{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);lM(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Wf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const cM=37297;let uM=0;function fM(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function hM(t){const e=st.getPrimaries(st.workingColorSpace),n=st.getPrimaries(t);let i;switch(e===n?i="":e===Wo&&n===Go?i="LinearDisplayP3ToLinearSRGB":e===Go&&n===Wo&&(i="LinearSRGBToLinearDisplayP3"),t){case Ii:case _a:return[i,"LinearTransferOETF"];case Pn:case Tc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Xf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+fM(t.getShaderSource(e),o)}else return r}function dM(t,e){const n=hM(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function pM(t,e){let n;switch(e){case Ev:n="Linear";break;case Sv:n="Reinhard";break;case Mv:n="OptimizedCineon";break;case yv:n="ACESFilmic";break;case bv:n="AgX";break;case Av:n="Neutral";break;case Tv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function mM(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(os).join(`
`)}function _M(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function gM(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function os(t){return t!==""}function $f(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wl(t){return t.replace(vM,EM)}const xM=new Map;function EM(t,e){let n=Ge[e];if(n===void 0){const i=xM.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wl(n)}const SM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qf(t){return t.replace(SM,MM)}function MM(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jf(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yM(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Kd?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===$g?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function TM(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Br:case kr:e="ENVMAP_TYPE_CUBE";break;case pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bM(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case kr:e="ENVMAP_MODE_REFRACTION";break}return e}function AM(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Jd:e="ENVMAP_BLENDING_MULTIPLY";break;case vv:e="ENVMAP_BLENDING_MIX";break;case xv:e="ENVMAP_BLENDING_ADD";break}return e}function wM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function RM(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=yM(n),c=TM(n),u=bM(n),f=AM(n),h=wM(n),p=mM(n),g=_M(s),x=r.createProgram();let _,m,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(os).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(os).join(`
`),m.length>0&&(m+=`
`)):(_=[jf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),m=[jf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ti?"#define TONE_MAPPING":"",n.toneMapping!==Ti?Ge.tonemapping_pars_fragment:"",n.toneMapping!==Ti?pM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,dM("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(os).join(`
`)),o=Wl(o),o=$f(o,n),o=Yf(o,n),a=Wl(a),a=$f(a,n),a=Yf(a,n),o=qf(o),a=qf(a),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",n.glslVersion===ff?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ff?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=A+_+o,S=A+m+a,P=Wf(r,r.VERTEX_SHADER,v),T=Wf(r,r.FRAGMENT_SHADER,S);r.attachShader(x,P),r.attachShader(x,T),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(V){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(x).trim(),O=r.getShaderInfoLog(P).trim(),ee=r.getShaderInfoLog(T).trim();let ne=!0,oe=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ne=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,P,T);else{const re=Xf(r,P,"vertex"),Y=Xf(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+F+`
`+re+`
`+Y)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||ee==="")&&(oe=!1);oe&&(V.diagnostics={runnable:ne,programLog:F,vertexShader:{log:O,prefix:_},fragmentShader:{log:ee,prefix:m}})}r.deleteShader(P),r.deleteShader(T),N=new Po(r,x),M=gM(r,x)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,cM)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=uM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=T,this}let CM=0;class LM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new PM(e),n.set(e,i)),i}}class PM{constructor(e){this.id=CM++,this.code=e,this.usedTimes=0}}function IM(t,e,n,i,r,s,o){const a=new up,l=new LM,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function _(M,y,V,F,O){const ee=F.fog,ne=O.geometry,oe=M.isMeshStandardMaterial?F.environment:null,re=(M.isMeshStandardMaterial?n:e).get(M.envMap||oe),Y=re&&re.mapping===pa?re.image.height:null,ce=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const fe=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,ge=fe!==void 0?fe.length:0;let we=0;ne.morphAttributes.position!==void 0&&(we=1),ne.morphAttributes.normal!==void 0&&(we=2),ne.morphAttributes.color!==void 0&&(we=3);let qe,Q,de,me;if(ce){const rt=Nn[ce];qe=rt.vertexShader,Q=rt.fragmentShader}else qe=M.vertexShader,Q=M.fragmentShader,l.update(M),de=l.getVertexShaderID(M),me=l.getFragmentShaderID(M);const pe=t.getRenderTarget(),Ne=O.isInstancedMesh===!0,Oe=O.isBatchedMesh===!0,X=!!M.map,Je=!!M.matcap,L=!!re,U=!!M.aoMap,I=!!M.lightMap,W=!!M.bumpMap,q=!!M.normalMap,te=!!M.displacementMap,ae=!!M.emissiveMap,b=!!M.metalnessMap,d=!!M.roughnessMap,E=M.anisotropy>0,C=M.clearcoat>0,B=M.dispersion>0,G=M.iridescence>0,J=M.sheen>0,D=M.transmission>0,k=E&&!!M.anisotropyMap,he=C&&!!M.clearcoatMap,ie=C&&!!M.clearcoatNormalMap,xe=C&&!!M.clearcoatRoughnessMap,De=G&&!!M.iridescenceMap,Te=G&&!!M.iridescenceThicknessMap,Me=J&&!!M.sheenColorMap,Fe=J&&!!M.sheenRoughnessMap,Re=!!M.specularMap,Ze=!!M.specularColorMap,Be=!!M.specularIntensityMap,z=D&&!!M.transmissionMap,le=D&&!!M.thicknessMap,se=!!M.gradientMap,Ee=!!M.alphaMap,ye=M.alphaTest>0,Qe=!!M.alphaHash,ct=!!M.extensions;let _t=Ti;M.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(_t=t.toneMapping);const Dt={shaderID:ce,shaderType:M.type,shaderName:M.name,vertexShader:qe,fragmentShader:Q,defines:M.defines,customVertexShaderID:de,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Oe,instancing:Ne,instancingColor:Ne&&O.instanceColor!==null,instancingMorph:Ne&&O.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:pe===null?t.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Ii,alphaToCoverage:!!M.alphaToCoverage,map:X,matcap:Je,envMap:L,envMapMode:L&&re.mapping,envMapCubeUVHeight:Y,aoMap:U,lightMap:I,bumpMap:W,normalMap:q,displacementMap:h&&te,emissiveMap:ae,normalMapObjectSpace:q&&M.normalMapType===zv,normalMapTangentSpace:q&&M.normalMapType===Hv,metalnessMap:b,roughnessMap:d,anisotropy:E,anisotropyMap:k,clearcoat:C,clearcoatMap:he,clearcoatNormalMap:ie,clearcoatRoughnessMap:xe,dispersion:B,iridescence:G,iridescenceMap:De,iridescenceThicknessMap:Te,sheen:J,sheenColorMap:Me,sheenRoughnessMap:Fe,specularMap:Re,specularColorMap:Ze,specularIntensityMap:Be,transmission:D,transmissionMap:z,thicknessMap:le,gradientMap:se,opaque:M.transparent===!1&&M.blending===Dr&&M.alphaToCoverage===!1,alphaMap:Ee,alphaTest:ye,alphaHash:Qe,combine:M.combine,mapUv:X&&x(M.map.channel),aoMapUv:U&&x(M.aoMap.channel),lightMapUv:I&&x(M.lightMap.channel),bumpMapUv:W&&x(M.bumpMap.channel),normalMapUv:q&&x(M.normalMap.channel),displacementMapUv:te&&x(M.displacementMap.channel),emissiveMapUv:ae&&x(M.emissiveMap.channel),metalnessMapUv:b&&x(M.metalnessMap.channel),roughnessMapUv:d&&x(M.roughnessMap.channel),anisotropyMapUv:k&&x(M.anisotropyMap.channel),clearcoatMapUv:he&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ie&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&x(M.sheenRoughnessMap.channel),specularMapUv:Re&&x(M.specularMap.channel),specularColorMapUv:Ze&&x(M.specularColorMap.channel),specularIntensityMapUv:Be&&x(M.specularIntensityMap.channel),transmissionMapUv:z&&x(M.transmissionMap.channel),thicknessMapUv:le&&x(M.thicknessMap.channel),alphaMapUv:Ee&&x(M.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(q||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!ne.attributes.uv&&(X||Ee),fog:!!ee,useFog:M.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:we,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:_t,useLegacyLights:t._useLegacyLights,decodeVideoTexture:X&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===ut,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===jn,flipSided:M.side===jt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ct&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ct&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function m(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const V in M.defines)y.push(V),y.push(M.defines[V]);return M.isRawShaderMaterial===!1&&(A(y,M),v(y,M),y.push(t.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function A(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function v(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),M.push(a.mask)}function S(M){const y=g[M.type];let V;if(y){const F=Nn[y];V=m0.clone(F.uniforms)}else V=M.uniforms;return V}function P(M,y){let V;for(let F=0,O=u.length;F<O;F++){const ee=u[F];if(ee.cacheKey===y){V=ee,++V.usedTimes;break}}return V===void 0&&(V=new RM(t,y,M,s),u.push(V)),V}function T(M){if(--M.usedTimes===0){const y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function R(M){l.remove(M)}function N(){l.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:S,acquireProgram:P,releaseProgram:T,releaseShaderCache:R,programs:u,dispose:N}}function NM(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function DM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Kf(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Jf(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,g,x,_){let m=t[e];return m===void 0?(m={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:_},t[e]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=p,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=x,m.group=_),e++,m}function a(f,h,p,g,x,_){const m=o(f,h,p,g,x,_);p.transmission>0?i.push(m):p.transparent===!0?r.push(m):n.push(m)}function l(f,h,p,g,x,_){const m=o(f,h,p,g,x,_);p.transmission>0?i.unshift(m):p.transparent===!0?r.unshift(m):n.unshift(m)}function c(f,h){n.length>1&&n.sort(f||DM),i.length>1&&i.sort(h||Kf),r.length>1&&r.sort(h||Kf)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function UM(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Jf,t.set(i,[o])):r>=s.length?(o=new Jf,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function OM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new et};break;case"SpotLight":n={position:new H,direction:new H,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function FM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let BM=0;function kM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function HM(t){const e=new OM,n=FM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new gt,o=new gt;function a(c,u){let f=0,h=0,p=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let g=0,x=0,_=0,m=0,A=0,v=0,S=0,P=0,T=0,R=0,N=0;c.sort(kM);const M=u===!0?Math.PI:1;for(let V=0,F=c.length;V<F;V++){const O=c[V],ee=O.color,ne=O.intensity,oe=O.distance,re=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=ee.r*ne*M,h+=ee.g*ne*M,p+=ee.b*ne*M;else if(O.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(O.sh.coefficients[Y],ne);N++}else if(O.isDirectionalLight){const Y=e.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity*M),O.castShadow){const ce=O.shadow,fe=n.get(O);fe.shadowBias=ce.bias,fe.shadowNormalBias=ce.normalBias,fe.shadowRadius=ce.radius,fe.shadowMapSize=ce.mapSize,i.directionalShadow[g]=fe,i.directionalShadowMap[g]=re,i.directionalShadowMatrix[g]=O.shadow.matrix,v++}i.directional[g]=Y,g++}else if(O.isSpotLight){const Y=e.get(O);Y.position.setFromMatrixPosition(O.matrixWorld),Y.color.copy(ee).multiplyScalar(ne*M),Y.distance=oe,Y.coneCos=Math.cos(O.angle),Y.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Y.decay=O.decay,i.spot[_]=Y;const ce=O.shadow;if(O.map&&(i.spotLightMap[T]=O.map,T++,ce.updateMatrices(O),O.castShadow&&R++),i.spotLightMatrix[_]=ce.matrix,O.castShadow){const fe=n.get(O);fe.shadowBias=ce.bias,fe.shadowNormalBias=ce.normalBias,fe.shadowRadius=ce.radius,fe.shadowMapSize=ce.mapSize,i.spotShadow[_]=fe,i.spotShadowMap[_]=re,P++}_++}else if(O.isRectAreaLight){const Y=e.get(O);Y.color.copy(ee).multiplyScalar(ne),Y.halfWidth.set(O.width*.5,0,0),Y.halfHeight.set(0,O.height*.5,0),i.rectArea[m]=Y,m++}else if(O.isPointLight){const Y=e.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity*M),Y.distance=O.distance,Y.decay=O.decay,O.castShadow){const ce=O.shadow,fe=n.get(O);fe.shadowBias=ce.bias,fe.shadowNormalBias=ce.normalBias,fe.shadowRadius=ce.radius,fe.shadowMapSize=ce.mapSize,fe.shadowCameraNear=ce.camera.near,fe.shadowCameraFar=ce.camera.far,i.pointShadow[x]=fe,i.pointShadowMap[x]=re,i.pointShadowMatrix[x]=O.shadow.matrix,S++}i.point[x]=Y,x++}else if(O.isHemisphereLight){const Y=e.get(O);Y.skyColor.copy(O.color).multiplyScalar(ne*M),Y.groundColor.copy(O.groundColor).multiplyScalar(ne*M),i.hemi[A]=Y,A++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=p;const y=i.hash;(y.directionalLength!==g||y.pointLength!==x||y.spotLength!==_||y.rectAreaLength!==m||y.hemiLength!==A||y.numDirectionalShadows!==v||y.numPointShadows!==S||y.numSpotShadows!==P||y.numSpotMaps!==T||y.numLightProbes!==N)&&(i.directional.length=g,i.spot.length=_,i.rectArea.length=m,i.point.length=x,i.hemi.length=A,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=P+T-R,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=N,y.directionalLength=g,y.pointLength=x,y.spotLength=_,y.rectAreaLength=m,y.hemiLength=A,y.numDirectionalShadows=v,y.numPointShadows=S,y.numSpotShadows=P,y.numSpotMaps=T,y.numLightProbes=N,i.version=BM++)}function l(c,u){let f=0,h=0,p=0,g=0,x=0;const _=u.matrixWorldInverse;for(let m=0,A=c.length;m<A;m++){const v=c[m];if(v.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),f++}else if(v.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),p++}else if(v.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(_),o.identity(),s.copy(v.matrixWorld),s.premultiply(_),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(_),h++}else if(v.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(_),x++}}}return{setup:a,setupView:l,state:i}}function Zf(t){const e=new HM(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(u){e.setup(n,u)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function zM(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Zf(t),e.set(r,[a])):s>=o.length?(a=new Zf(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class VM extends $r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GM extends $r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const WM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $M(t,e,n){let i=new gp;const r=new Pe,s=new Pe,o=new It,a=new VM({depthPacking:kv}),l=new GM,c={},u=n.maxTextureSize,f={[wi]:jt,[jt]:wi,[jn]:jn},h=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:WM,fragmentShader:XM}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new nn;g.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new An(g,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kd;let m=this.type;this.render=function(T,R,N){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||T.length===0)return;const M=t.getRenderTarget(),y=t.getActiveCubeFace(),V=t.getActiveMipmapLevel(),F=t.state;F.setBlending(yi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=m!==qn&&this.type===qn,ee=m===qn&&this.type!==qn;for(let ne=0,oe=T.length;ne<oe;ne++){const re=T[ne],Y=re.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const ce=Y.getFrameExtents();if(r.multiply(ce),s.copy(Y.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ce.x),r.x=s.x*ce.x,Y.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ce.y),r.y=s.y*ce.y,Y.mapSize.y=s.y)),Y.map===null||O===!0||ee===!0){const ge=this.type!==qn?{minFilter:pn,magFilter:pn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new sr(r.x,r.y,ge),Y.map.texture.name=re.name+".shadowMap",Y.camera.updateProjectionMatrix()}t.setRenderTarget(Y.map),t.clear();const fe=Y.getViewportCount();for(let ge=0;ge<fe;ge++){const we=Y.getViewport(ge);o.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),F.viewport(o),Y.updateMatrices(re,ge),i=Y.getFrustum(),S(R,N,Y.camera,re,this.type)}Y.isPointLightShadow!==!0&&this.type===qn&&A(Y,N),Y.needsUpdate=!1}m=this.type,_.needsUpdate=!1,t.setRenderTarget(M,y,V)};function A(T,R){const N=e.update(x);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new sr(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(R,null,N,h,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(R,null,N,p,x,null)}function v(T,R,N,M){let y=null;const V=N.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(V!==void 0)y=V;else if(y=N.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const F=y.uuid,O=R.uuid;let ee=c[F];ee===void 0&&(ee={},c[F]=ee);let ne=ee[O];ne===void 0&&(ne=y.clone(),ee[O]=ne,R.addEventListener("dispose",P)),y=ne}if(y.visible=R.visible,y.wireframe=R.wireframe,M===qn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:f[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,N.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=t.properties.get(y);F.light=N}return y}function S(T,R,N,M,y){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===qn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,T.matrixWorld);const O=e.update(T),ee=T.material;if(Array.isArray(ee)){const ne=O.groups;for(let oe=0,re=ne.length;oe<re;oe++){const Y=ne[oe],ce=ee[Y.materialIndex];if(ce&&ce.visible){const fe=v(T,ce,M,y);T.onBeforeShadow(t,T,R,N,O,fe,Y),t.renderBufferDirect(N,null,O,fe,T,Y),T.onAfterShadow(t,T,R,N,O,fe,Y)}}}else if(ee.visible){const ne=v(T,ee,M,y);T.onBeforeShadow(t,T,R,N,O,ne,null),t.renderBufferDirect(N,null,O,ne,T,null),T.onAfterShadow(t,T,R,N,O,ne,null)}}const F=T.children;for(let O=0,ee=F.length;O<ee;O++)S(F[O],R,N,M,y)}function P(T){T.target.removeEventListener("dispose",P);for(const N in c){const M=c[N],y=T.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}function YM(t){function e(){let z=!1;const le=new It;let se=null;const Ee=new It(0,0,0,0);return{setMask:function(ye){se!==ye&&!z&&(t.colorMask(ye,ye,ye,ye),se=ye)},setLocked:function(ye){z=ye},setClear:function(ye,Qe,ct,_t,Dt){Dt===!0&&(ye*=_t,Qe*=_t,ct*=_t),le.set(ye,Qe,ct,_t),Ee.equals(le)===!1&&(t.clearColor(ye,Qe,ct,_t),Ee.copy(le))},reset:function(){z=!1,se=null,Ee.set(-1,0,0,0)}}}function n(){let z=!1,le=null,se=null,Ee=null;return{setTest:function(ye){ye?me(t.DEPTH_TEST):pe(t.DEPTH_TEST)},setMask:function(ye){le!==ye&&!z&&(t.depthMask(ye),le=ye)},setFunc:function(ye){if(se!==ye){switch(ye){case fv:t.depthFunc(t.NEVER);break;case hv:t.depthFunc(t.ALWAYS);break;case dv:t.depthFunc(t.LESS);break;case zo:t.depthFunc(t.LEQUAL);break;case pv:t.depthFunc(t.EQUAL);break;case mv:t.depthFunc(t.GEQUAL);break;case _v:t.depthFunc(t.GREATER);break;case gv:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}se=ye}},setLocked:function(ye){z=ye},setClear:function(ye){Ee!==ye&&(t.clearDepth(ye),Ee=ye)},reset:function(){z=!1,le=null,se=null,Ee=null}}}function i(){let z=!1,le=null,se=null,Ee=null,ye=null,Qe=null,ct=null,_t=null,Dt=null;return{setTest:function(rt){z||(rt?me(t.STENCIL_TEST):pe(t.STENCIL_TEST))},setMask:function(rt){le!==rt&&!z&&(t.stencilMask(rt),le=rt)},setFunc:function(rt,Cn,Wt){(se!==rt||Ee!==Cn||ye!==Wt)&&(t.stencilFunc(rt,Cn,Wt),se=rt,Ee=Cn,ye=Wt)},setOp:function(rt,Cn,Wt){(Qe!==rt||ct!==Cn||_t!==Wt)&&(t.stencilOp(rt,Cn,Wt),Qe=rt,ct=Cn,_t=Wt)},setLocked:function(rt){z=rt},setClear:function(rt){Dt!==rt&&(t.clearStencil(rt),Dt=rt)},reset:function(){z=!1,le=null,se=null,Ee=null,ye=null,Qe=null,ct=null,_t=null,Dt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],p=null,g=!1,x=null,_=null,m=null,A=null,v=null,S=null,P=null,T=new et(0,0,0),R=0,N=!1,M=null,y=null,V=null,F=null,O=null;const ee=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,oe=0;const re=t.getParameter(t.VERSION);re.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(re)[1]),ne=oe>=1):re.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ne=oe>=2);let Y=null,ce={};const fe=t.getParameter(t.SCISSOR_BOX),ge=t.getParameter(t.VIEWPORT),we=new It().fromArray(fe),qe=new It().fromArray(ge);function Q(z,le,se,Ee){const ye=new Uint8Array(4),Qe=t.createTexture();t.bindTexture(z,Qe),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ct=0;ct<se;ct++)z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,Ee,0,t.RGBA,t.UNSIGNED_BYTE,ye):t.texImage2D(le+ct,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ye);return Qe}const de={};de[t.TEXTURE_2D]=Q(t.TEXTURE_2D,t.TEXTURE_2D,1),de[t.TEXTURE_CUBE_MAP]=Q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[t.TEXTURE_2D_ARRAY]=Q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),de[t.TEXTURE_3D]=Q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),me(t.DEPTH_TEST),s.setFunc(zo),W(!1),q(Iu),me(t.CULL_FACE),U(yi);function me(z){c[z]!==!0&&(t.enable(z),c[z]=!0)}function pe(z){c[z]!==!1&&(t.disable(z),c[z]=!1)}function Ne(z,le){return u[z]!==le?(t.bindFramebuffer(z,le),u[z]=le,z===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=le),z===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=le),!0):!1}function Oe(z,le){let se=h,Ee=!1;if(z){se=f.get(le),se===void 0&&(se=[],f.set(le,se));const ye=z.textures;if(se.length!==ye.length||se[0]!==t.COLOR_ATTACHMENT0){for(let Qe=0,ct=ye.length;Qe<ct;Qe++)se[Qe]=t.COLOR_ATTACHMENT0+Qe;se.length=ye.length,Ee=!0}}else se[0]!==t.BACK&&(se[0]=t.BACK,Ee=!0);Ee&&t.drawBuffers(se)}function X(z){return p!==z?(t.useProgram(z),p=z,!0):!1}const Je={[Qi]:t.FUNC_ADD,[qg]:t.FUNC_SUBTRACT,[jg]:t.FUNC_REVERSE_SUBTRACT};Je[Kg]=t.MIN,Je[Jg]=t.MAX;const L={[Zg]:t.ZERO,[Qg]:t.ONE,[ev]:t.SRC_COLOR,[Fl]:t.SRC_ALPHA,[ov]:t.SRC_ALPHA_SATURATE,[rv]:t.DST_COLOR,[nv]:t.DST_ALPHA,[tv]:t.ONE_MINUS_SRC_COLOR,[Bl]:t.ONE_MINUS_SRC_ALPHA,[sv]:t.ONE_MINUS_DST_COLOR,[iv]:t.ONE_MINUS_DST_ALPHA,[av]:t.CONSTANT_COLOR,[lv]:t.ONE_MINUS_CONSTANT_COLOR,[cv]:t.CONSTANT_ALPHA,[uv]:t.ONE_MINUS_CONSTANT_ALPHA};function U(z,le,se,Ee,ye,Qe,ct,_t,Dt,rt){if(z===yi){g===!0&&(pe(t.BLEND),g=!1);return}if(g===!1&&(me(t.BLEND),g=!0),z!==Yg){if(z!==x||rt!==N){if((_!==Qi||v!==Qi)&&(t.blendEquation(t.FUNC_ADD),_=Qi,v=Qi),rt)switch(z){case Dr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Nu:t.blendFunc(t.ONE,t.ONE);break;case Du:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Uu:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Dr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Nu:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Du:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Uu:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}m=null,A=null,S=null,P=null,T.set(0,0,0),R=0,x=z,N=rt}return}ye=ye||le,Qe=Qe||se,ct=ct||Ee,(le!==_||ye!==v)&&(t.blendEquationSeparate(Je[le],Je[ye]),_=le,v=ye),(se!==m||Ee!==A||Qe!==S||ct!==P)&&(t.blendFuncSeparate(L[se],L[Ee],L[Qe],L[ct]),m=se,A=Ee,S=Qe,P=ct),(_t.equals(T)===!1||Dt!==R)&&(t.blendColor(_t.r,_t.g,_t.b,Dt),T.copy(_t),R=Dt),x=z,N=!1}function I(z,le){z.side===jn?pe(t.CULL_FACE):me(t.CULL_FACE);let se=z.side===jt;le&&(se=!se),W(se),z.blending===Dr&&z.transparent===!1?U(yi):U(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),s.setFunc(z.depthFunc),s.setTest(z.depthTest),s.setMask(z.depthWrite),r.setMask(z.colorWrite);const Ee=z.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ae(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?me(t.SAMPLE_ALPHA_TO_COVERAGE):pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function W(z){M!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),M=z)}function q(z){z!==Wg?(me(t.CULL_FACE),z!==y&&(z===Iu?t.cullFace(t.BACK):z===Xg?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):pe(t.CULL_FACE),y=z}function te(z){z!==V&&(ne&&t.lineWidth(z),V=z)}function ae(z,le,se){z?(me(t.POLYGON_OFFSET_FILL),(F!==le||O!==se)&&(t.polygonOffset(le,se),F=le,O=se)):pe(t.POLYGON_OFFSET_FILL)}function b(z){z?me(t.SCISSOR_TEST):pe(t.SCISSOR_TEST)}function d(z){z===void 0&&(z=t.TEXTURE0+ee-1),Y!==z&&(t.activeTexture(z),Y=z)}function E(z,le,se){se===void 0&&(Y===null?se=t.TEXTURE0+ee-1:se=Y);let Ee=ce[se];Ee===void 0&&(Ee={type:void 0,texture:void 0},ce[se]=Ee),(Ee.type!==z||Ee.texture!==le)&&(Y!==se&&(t.activeTexture(se),Y=se),t.bindTexture(z,le||de[z]),Ee.type=z,Ee.texture=le)}function C(){const z=ce[Y];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function B(){try{t.compressedTexImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function G(){try{t.compressedTexImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function D(){try{t.texSubImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function k(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function he(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ie(){try{t.texStorage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xe(){try{t.texStorage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function De(){try{t.texImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Te(){try{t.texImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Me(z){we.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),we.copy(z))}function Fe(z){qe.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),qe.copy(z))}function Re(z,le){let se=l.get(le);se===void 0&&(se=new WeakMap,l.set(le,se));let Ee=se.get(z);Ee===void 0&&(Ee=t.getUniformBlockIndex(le,z.name),se.set(z,Ee))}function Ze(z,le){const Ee=l.get(le).get(z);a.get(le)!==Ee&&(t.uniformBlockBinding(le,Ee,z.__bindingPointIndex),a.set(le,Ee))}function Be(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},Y=null,ce={},u={},f=new WeakMap,h=[],p=null,g=!1,x=null,_=null,m=null,A=null,v=null,S=null,P=null,T=new et(0,0,0),R=0,N=!1,M=null,y=null,V=null,F=null,O=null,we.set(0,0,t.canvas.width,t.canvas.height),qe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:me,disable:pe,bindFramebuffer:Ne,drawBuffers:Oe,useProgram:X,setBlending:U,setMaterial:I,setFlipSided:W,setCullFace:q,setLineWidth:te,setPolygonOffset:ae,setScissorTest:b,activeTexture:d,bindTexture:E,unbindTexture:C,compressedTexImage2D:B,compressedTexImage3D:G,texImage2D:De,texImage3D:Te,updateUBOMapping:Re,uniformBlockBinding:Ze,texStorage2D:ie,texStorage3D:xe,texSubImage2D:J,texSubImage3D:D,compressedTexSubImage2D:k,compressedTexSubImage3D:he,scissor:Me,viewport:Fe,reset:Be}}function qM(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pe,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,d){return p?new OffscreenCanvas(b,d):Ts("canvas")}function x(b,d,E){let C=1;const B=ae(b);if((B.width>E||B.height>E)&&(C=E/Math.max(B.width,B.height)),C<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const G=Math.floor(C*B.width),J=Math.floor(C*B.height);f===void 0&&(f=g(G,J));const D=d?g(G,J):f;return D.width=G,D.height=J,D.getContext("2d").drawImage(b,0,0,G,J),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+G+"x"+J+")."),D}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),b;return b}function _(b){return b.generateMipmaps&&b.minFilter!==pn&&b.minFilter!==yn}function m(b){t.generateMipmap(b)}function A(b,d,E,C,B=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let G=d;if(d===t.RED&&(E===t.FLOAT&&(G=t.R32F),E===t.HALF_FLOAT&&(G=t.R16F),E===t.UNSIGNED_BYTE&&(G=t.R8)),d===t.RED_INTEGER&&(E===t.UNSIGNED_BYTE&&(G=t.R8UI),E===t.UNSIGNED_SHORT&&(G=t.R16UI),E===t.UNSIGNED_INT&&(G=t.R32UI),E===t.BYTE&&(G=t.R8I),E===t.SHORT&&(G=t.R16I),E===t.INT&&(G=t.R32I)),d===t.RG&&(E===t.FLOAT&&(G=t.RG32F),E===t.HALF_FLOAT&&(G=t.RG16F),E===t.UNSIGNED_BYTE&&(G=t.RG8)),d===t.RG_INTEGER&&(E===t.UNSIGNED_BYTE&&(G=t.RG8UI),E===t.UNSIGNED_SHORT&&(G=t.RG16UI),E===t.UNSIGNED_INT&&(G=t.RG32UI),E===t.BYTE&&(G=t.RG8I),E===t.SHORT&&(G=t.RG16I),E===t.INT&&(G=t.RG32I)),d===t.RGB&&E===t.UNSIGNED_INT_5_9_9_9_REV&&(G=t.RGB9_E5),d===t.RGBA){const J=B?Vo:st.getTransfer(C);E===t.FLOAT&&(G=t.RGBA32F),E===t.HALF_FLOAT&&(G=t.RGBA16F),E===t.UNSIGNED_BYTE&&(G=J===ut?t.SRGB8_ALPHA8:t.RGBA8),E===t.UNSIGNED_SHORT_4_4_4_4&&(G=t.RGBA4),E===t.UNSIGNED_SHORT_5_5_5_1&&(G=t.RGB5_A1)}return(G===t.R16F||G===t.R32F||G===t.RG16F||G===t.RG32F||G===t.RGBA16F||G===t.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function v(b,d){return _(b)===!0||b.isFramebufferTexture&&b.minFilter!==pn&&b.minFilter!==yn?Math.log2(Math.max(d.width,d.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?d.mipmaps.length:1}function S(b){const d=b.target;d.removeEventListener("dispose",S),T(d),d.isVideoTexture&&u.delete(d)}function P(b){const d=b.target;d.removeEventListener("dispose",P),N(d)}function T(b){const d=i.get(b);if(d.__webglInit===void 0)return;const E=b.source,C=h.get(E);if(C){const B=C[d.__cacheKey];B.usedTimes--,B.usedTimes===0&&R(b),Object.keys(C).length===0&&h.delete(E)}i.remove(b)}function R(b){const d=i.get(b);t.deleteTexture(d.__webglTexture);const E=b.source,C=h.get(E);delete C[d.__cacheKey],o.memory.textures--}function N(b){const d=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let C=0;C<6;C++){if(Array.isArray(d.__webglFramebuffer[C]))for(let B=0;B<d.__webglFramebuffer[C].length;B++)t.deleteFramebuffer(d.__webglFramebuffer[C][B]);else t.deleteFramebuffer(d.__webglFramebuffer[C]);d.__webglDepthbuffer&&t.deleteRenderbuffer(d.__webglDepthbuffer[C])}else{if(Array.isArray(d.__webglFramebuffer))for(let C=0;C<d.__webglFramebuffer.length;C++)t.deleteFramebuffer(d.__webglFramebuffer[C]);else t.deleteFramebuffer(d.__webglFramebuffer);if(d.__webglDepthbuffer&&t.deleteRenderbuffer(d.__webglDepthbuffer),d.__webglMultisampledFramebuffer&&t.deleteFramebuffer(d.__webglMultisampledFramebuffer),d.__webglColorRenderbuffer)for(let C=0;C<d.__webglColorRenderbuffer.length;C++)d.__webglColorRenderbuffer[C]&&t.deleteRenderbuffer(d.__webglColorRenderbuffer[C]);d.__webglDepthRenderbuffer&&t.deleteRenderbuffer(d.__webglDepthRenderbuffer)}const E=b.textures;for(let C=0,B=E.length;C<B;C++){const G=i.get(E[C]);G.__webglTexture&&(t.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(E[C])}i.remove(b)}let M=0;function y(){M=0}function V(){const b=M;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),M+=1,b}function F(b){const d=[];return d.push(b.wrapS),d.push(b.wrapT),d.push(b.wrapR||0),d.push(b.magFilter),d.push(b.minFilter),d.push(b.anisotropy),d.push(b.internalFormat),d.push(b.format),d.push(b.type),d.push(b.generateMipmaps),d.push(b.premultiplyAlpha),d.push(b.flipY),d.push(b.unpackAlignment),d.push(b.colorSpace),d.join()}function O(b,d){const E=i.get(b);if(b.isVideoTexture&&q(b),b.isRenderTargetTexture===!1&&b.version>0&&E.__version!==b.version){const C=b.image;if(C===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(C.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(E,b,d);return}}n.bindTexture(t.TEXTURE_2D,E.__webglTexture,t.TEXTURE0+d)}function ee(b,d){const E=i.get(b);if(b.version>0&&E.__version!==b.version){we(E,b,d);return}n.bindTexture(t.TEXTURE_2D_ARRAY,E.__webglTexture,t.TEXTURE0+d)}function ne(b,d){const E=i.get(b);if(b.version>0&&E.__version!==b.version){we(E,b,d);return}n.bindTexture(t.TEXTURE_3D,E.__webglTexture,t.TEXTURE0+d)}function oe(b,d){const E=i.get(b);if(b.version>0&&E.__version!==b.version){qe(E,b,d);return}n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+d)}const re={[zl]:t.REPEAT,[tr]:t.CLAMP_TO_EDGE,[Vl]:t.MIRRORED_REPEAT},Y={[pn]:t.NEAREST,[wv]:t.NEAREST_MIPMAP_NEAREST,[Ys]:t.NEAREST_MIPMAP_LINEAR,[yn]:t.LINEAR,[Ba]:t.LINEAR_MIPMAP_NEAREST,[nr]:t.LINEAR_MIPMAP_LINEAR},ce={[Vv]:t.NEVER,[qv]:t.ALWAYS,[Gv]:t.LESS,[op]:t.LEQUAL,[Wv]:t.EQUAL,[Yv]:t.GEQUAL,[Xv]:t.GREATER,[$v]:t.NOTEQUAL};function fe(b,d){if(d.type===xi&&e.has("OES_texture_float_linear")===!1&&(d.magFilter===yn||d.magFilter===Ba||d.magFilter===Ys||d.magFilter===nr||d.minFilter===yn||d.minFilter===Ba||d.minFilter===Ys||d.minFilter===nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,re[d.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,re[d.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,re[d.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,Y[d.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,Y[d.minFilter]),d.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,ce[d.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(d.magFilter===pn||d.minFilter!==Ys&&d.minFilter!==nr||d.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(d.anisotropy>1||i.get(d).__currentAnisotropy){const E=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,E.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(d.anisotropy,r.getMaxAnisotropy())),i.get(d).__currentAnisotropy=d.anisotropy}}}function ge(b,d){let E=!1;b.__webglInit===void 0&&(b.__webglInit=!0,d.addEventListener("dispose",S));const C=d.source;let B=h.get(C);B===void 0&&(B={},h.set(C,B));const G=F(d);if(G!==b.__cacheKey){B[G]===void 0&&(B[G]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,E=!0),B[G].usedTimes++;const J=B[b.__cacheKey];J!==void 0&&(B[b.__cacheKey].usedTimes--,J.usedTimes===0&&R(d)),b.__cacheKey=G,b.__webglTexture=B[G].texture}return E}function we(b,d,E){let C=t.TEXTURE_2D;(d.isDataArrayTexture||d.isCompressedArrayTexture)&&(C=t.TEXTURE_2D_ARRAY),d.isData3DTexture&&(C=t.TEXTURE_3D);const B=ge(b,d),G=d.source;n.bindTexture(C,b.__webglTexture,t.TEXTURE0+E);const J=i.get(G);if(G.version!==J.__version||B===!0){n.activeTexture(t.TEXTURE0+E);const D=st.getPrimaries(st.workingColorSpace),k=d.colorSpace===vi?null:st.getPrimaries(d.colorSpace),he=d.colorSpace===vi||D===k?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,d.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,d.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let ie=x(d.image,!1,r.maxTextureSize);ie=te(d,ie);const xe=s.convert(d.format,d.colorSpace),De=s.convert(d.type);let Te=A(d.internalFormat,xe,De,d.colorSpace,d.isVideoTexture);fe(C,d);let Me;const Fe=d.mipmaps,Re=d.isVideoTexture!==!0,Ze=J.__version===void 0||B===!0,Be=G.dataReady,z=v(d,ie);if(d.isDepthTexture)Te=t.DEPTH_COMPONENT16,d.type===xi?Te=t.DEPTH_COMPONENT32F:d.type===Hr?Te=t.DEPTH_COMPONENT24:d.type===Ps&&(Te=t.DEPTH24_STENCIL8),Ze&&(Re?n.texStorage2D(t.TEXTURE_2D,1,Te,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Te,ie.width,ie.height,0,xe,De,null));else if(d.isDataTexture)if(Fe.length>0){Re&&Ze&&n.texStorage2D(t.TEXTURE_2D,z,Te,Fe[0].width,Fe[0].height);for(let le=0,se=Fe.length;le<se;le++)Me=Fe[le],Re?Be&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,Me.width,Me.height,xe,De,Me.data):n.texImage2D(t.TEXTURE_2D,le,Te,Me.width,Me.height,0,xe,De,Me.data);d.generateMipmaps=!1}else Re?(Ze&&n.texStorage2D(t.TEXTURE_2D,z,Te,ie.width,ie.height),Be&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,xe,De,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Te,ie.width,ie.height,0,xe,De,ie.data);else if(d.isCompressedTexture)if(d.isCompressedArrayTexture){Re&&Ze&&n.texStorage3D(t.TEXTURE_2D_ARRAY,z,Te,Fe[0].width,Fe[0].height,ie.depth);for(let le=0,se=Fe.length;le<se;le++)Me=Fe[le],d.format!==Un?xe!==null?Re?Be&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,Me.width,Me.height,ie.depth,xe,Me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,le,Te,Me.width,Me.height,ie.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?Be&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,Me.width,Me.height,ie.depth,xe,De,Me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,le,Te,Me.width,Me.height,ie.depth,0,xe,De,Me.data)}else{Re&&Ze&&n.texStorage2D(t.TEXTURE_2D,z,Te,Fe[0].width,Fe[0].height);for(let le=0,se=Fe.length;le<se;le++)Me=Fe[le],d.format!==Un?xe!==null?Re?Be&&n.compressedTexSubImage2D(t.TEXTURE_2D,le,0,0,Me.width,Me.height,xe,Me.data):n.compressedTexImage2D(t.TEXTURE_2D,le,Te,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?Be&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,Me.width,Me.height,xe,De,Me.data):n.texImage2D(t.TEXTURE_2D,le,Te,Me.width,Me.height,0,xe,De,Me.data)}else if(d.isDataArrayTexture)Re?(Ze&&n.texStorage3D(t.TEXTURE_2D_ARRAY,z,Te,ie.width,ie.height,ie.depth),Be&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,xe,De,ie.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,ie.width,ie.height,ie.depth,0,xe,De,ie.data);else if(d.isData3DTexture)Re?(Ze&&n.texStorage3D(t.TEXTURE_3D,z,Te,ie.width,ie.height,ie.depth),Be&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,xe,De,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Te,ie.width,ie.height,ie.depth,0,xe,De,ie.data);else if(d.isFramebufferTexture){if(Ze)if(Re)n.texStorage2D(t.TEXTURE_2D,z,Te,ie.width,ie.height);else{let le=ie.width,se=ie.height;for(let Ee=0;Ee<z;Ee++)n.texImage2D(t.TEXTURE_2D,Ee,Te,le,se,0,xe,De,null),le>>=1,se>>=1}}else if(Fe.length>0){if(Re&&Ze){const le=ae(Fe[0]);n.texStorage2D(t.TEXTURE_2D,z,Te,le.width,le.height)}for(let le=0,se=Fe.length;le<se;le++)Me=Fe[le],Re?Be&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,xe,De,Me):n.texImage2D(t.TEXTURE_2D,le,Te,xe,De,Me);d.generateMipmaps=!1}else if(Re){if(Ze){const le=ae(ie);n.texStorage2D(t.TEXTURE_2D,z,Te,le.width,le.height)}Be&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,De,ie)}else n.texImage2D(t.TEXTURE_2D,0,Te,xe,De,ie);_(d)&&m(C),J.__version=G.version,d.onUpdate&&d.onUpdate(d)}b.__version=d.version}function qe(b,d,E){if(d.image.length!==6)return;const C=ge(b,d),B=d.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+E);const G=i.get(B);if(B.version!==G.__version||C===!0){n.activeTexture(t.TEXTURE0+E);const J=st.getPrimaries(st.workingColorSpace),D=d.colorSpace===vi?null:st.getPrimaries(d.colorSpace),k=d.colorSpace===vi||J===D?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,d.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,d.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,k);const he=d.isCompressedTexture||d.image[0].isCompressedTexture,ie=d.image[0]&&d.image[0].isDataTexture,xe=[];for(let se=0;se<6;se++)!he&&!ie?xe[se]=x(d.image[se],!0,r.maxCubemapSize):xe[se]=ie?d.image[se].image:d.image[se],xe[se]=te(d,xe[se]);const De=xe[0],Te=s.convert(d.format,d.colorSpace),Me=s.convert(d.type),Fe=A(d.internalFormat,Te,Me,d.colorSpace),Re=d.isVideoTexture!==!0,Ze=G.__version===void 0||C===!0,Be=B.dataReady;let z=v(d,De);fe(t.TEXTURE_CUBE_MAP,d);let le;if(he){Re&&Ze&&n.texStorage2D(t.TEXTURE_CUBE_MAP,z,Fe,De.width,De.height);for(let se=0;se<6;se++){le=xe[se].mipmaps;for(let Ee=0;Ee<le.length;Ee++){const ye=le[Ee];d.format!==Un?Te!==null?Re?Be&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee,0,0,ye.width,ye.height,Te,ye.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee,Fe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?Be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee,0,0,ye.width,ye.height,Te,Me,ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee,Fe,ye.width,ye.height,0,Te,Me,ye.data)}}}else{if(le=d.mipmaps,Re&&Ze){le.length>0&&z++;const se=ae(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,z,Fe,se.width,se.height)}for(let se=0;se<6;se++)if(ie){Re?Be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,xe[se].width,xe[se].height,Te,Me,xe[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Fe,xe[se].width,xe[se].height,0,Te,Me,xe[se].data);for(let Ee=0;Ee<le.length;Ee++){const Qe=le[Ee].image[se].image;Re?Be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee+1,0,0,Qe.width,Qe.height,Te,Me,Qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee+1,Fe,Qe.width,Qe.height,0,Te,Me,Qe.data)}}else{Re?Be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Te,Me,xe[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Fe,Te,Me,xe[se]);for(let Ee=0;Ee<le.length;Ee++){const ye=le[Ee];Re?Be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee+1,0,0,Te,Me,ye.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee+1,Fe,Te,Me,ye.image[se])}}}_(d)&&m(t.TEXTURE_CUBE_MAP),G.__version=B.version,d.onUpdate&&d.onUpdate(d)}b.__version=d.version}function Q(b,d,E,C,B,G){const J=s.convert(E.format,E.colorSpace),D=s.convert(E.type),k=A(E.internalFormat,J,D,E.colorSpace);if(!i.get(d).__hasExternalTextures){const ie=Math.max(1,d.width>>G),xe=Math.max(1,d.height>>G);B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?n.texImage3D(B,G,k,ie,xe,d.depth,0,J,D,null):n.texImage2D(B,G,k,ie,xe,0,J,D,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),W(d)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,C,B,i.get(E).__webglTexture,0,I(d)):(B===t.TEXTURE_2D||B>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,C,B,i.get(E).__webglTexture,G),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(b,d,E){if(t.bindRenderbuffer(t.RENDERBUFFER,b),d.depthBuffer&&!d.stencilBuffer){let C=t.DEPTH_COMPONENT24;if(E||W(d)){const B=d.depthTexture;B&&B.isDepthTexture&&(B.type===xi?C=t.DEPTH_COMPONENT32F:B.type===Hr&&(C=t.DEPTH_COMPONENT24));const G=I(d);W(d)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,G,C,d.width,d.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,G,C,d.width,d.height)}else t.renderbufferStorage(t.RENDERBUFFER,C,d.width,d.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,b)}else if(d.depthBuffer&&d.stencilBuffer){const C=I(d);E&&W(d)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,C,t.DEPTH24_STENCIL8,d.width,d.height):W(d)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,C,t.DEPTH24_STENCIL8,d.width,d.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,d.width,d.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,b)}else{const C=d.textures;for(let B=0;B<C.length;B++){const G=C[B],J=s.convert(G.format,G.colorSpace),D=s.convert(G.type),k=A(G.internalFormat,J,D,G.colorSpace),he=I(d);E&&W(d)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,k,d.width,d.height):W(d)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,k,d.width,d.height):t.renderbufferStorage(t.RENDERBUFFER,k,d.width,d.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function me(b,d){if(d&&d.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(d.depthTexture&&d.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(d.depthTexture).__webglTexture||d.depthTexture.image.width!==d.width||d.depthTexture.image.height!==d.height)&&(d.depthTexture.image.width=d.width,d.depthTexture.image.height=d.height,d.depthTexture.needsUpdate=!0),O(d.depthTexture,0);const C=i.get(d.depthTexture).__webglTexture,B=I(d);if(d.depthTexture.format===Ur)W(d)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,C,0,B):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,C,0);else if(d.depthTexture.format===ys)W(d)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,C,0,B):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,C,0);else throw new Error("Unknown depthTexture format")}function pe(b){const d=i.get(b),E=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!d.__autoAllocateDepthBuffer){if(E)throw new Error("target.depthTexture not supported in Cube render targets");me(d.__webglFramebuffer,b)}else if(E){d.__webglDepthbuffer=[];for(let C=0;C<6;C++)n.bindFramebuffer(t.FRAMEBUFFER,d.__webglFramebuffer[C]),d.__webglDepthbuffer[C]=t.createRenderbuffer(),de(d.__webglDepthbuffer[C],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,d.__webglFramebuffer),d.__webglDepthbuffer=t.createRenderbuffer(),de(d.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(b,d,E){const C=i.get(b);d!==void 0&&Q(C.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),E!==void 0&&pe(b)}function Oe(b){const d=b.texture,E=i.get(b),C=i.get(d);b.addEventListener("dispose",P);const B=b.textures,G=b.isWebGLCubeRenderTarget===!0,J=B.length>1;if(J||(C.__webglTexture===void 0&&(C.__webglTexture=t.createTexture()),C.__version=d.version,o.memory.textures++),G){E.__webglFramebuffer=[];for(let D=0;D<6;D++)if(d.mipmaps&&d.mipmaps.length>0){E.__webglFramebuffer[D]=[];for(let k=0;k<d.mipmaps.length;k++)E.__webglFramebuffer[D][k]=t.createFramebuffer()}else E.__webglFramebuffer[D]=t.createFramebuffer()}else{if(d.mipmaps&&d.mipmaps.length>0){E.__webglFramebuffer=[];for(let D=0;D<d.mipmaps.length;D++)E.__webglFramebuffer[D]=t.createFramebuffer()}else E.__webglFramebuffer=t.createFramebuffer();if(J)for(let D=0,k=B.length;D<k;D++){const he=i.get(B[D]);he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&W(b)===!1){E.__webglMultisampledFramebuffer=t.createFramebuffer(),E.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,E.__webglMultisampledFramebuffer);for(let D=0;D<B.length;D++){const k=B[D];E.__webglColorRenderbuffer[D]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,E.__webglColorRenderbuffer[D]);const he=s.convert(k.format,k.colorSpace),ie=s.convert(k.type),xe=A(k.internalFormat,he,ie,k.colorSpace,b.isXRRenderTarget===!0),De=I(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,xe,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+D,t.RENDERBUFFER,E.__webglColorRenderbuffer[D])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(E.__webglDepthRenderbuffer=t.createRenderbuffer(),de(E.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(G){n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture),fe(t.TEXTURE_CUBE_MAP,d);for(let D=0;D<6;D++)if(d.mipmaps&&d.mipmaps.length>0)for(let k=0;k<d.mipmaps.length;k++)Q(E.__webglFramebuffer[D][k],b,d,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+D,k);else Q(E.__webglFramebuffer[D],b,d,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+D,0);_(d)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(J){for(let D=0,k=B.length;D<k;D++){const he=B[D],ie=i.get(he);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),fe(t.TEXTURE_2D,he),Q(E.__webglFramebuffer,b,he,t.COLOR_ATTACHMENT0+D,t.TEXTURE_2D,0),_(he)&&m(t.TEXTURE_2D)}n.unbindTexture()}else{let D=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(D=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(D,C.__webglTexture),fe(D,d),d.mipmaps&&d.mipmaps.length>0)for(let k=0;k<d.mipmaps.length;k++)Q(E.__webglFramebuffer[k],b,d,t.COLOR_ATTACHMENT0,D,k);else Q(E.__webglFramebuffer,b,d,t.COLOR_ATTACHMENT0,D,0);_(d)&&m(D),n.unbindTexture()}b.depthBuffer&&pe(b)}function X(b){const d=b.textures;for(let E=0,C=d.length;E<C;E++){const B=d[E];if(_(B)){const G=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,J=i.get(B).__webglTexture;n.bindTexture(G,J),m(G),n.unbindTexture()}}}const Je=[],L=[];function U(b){if(b.samples>0){if(W(b)===!1){const d=b.textures,E=b.width,C=b.height;let B=t.COLOR_BUFFER_BIT;const G=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=i.get(b),D=d.length>1;if(D)for(let k=0;k<d.length;k++)n.bindFramebuffer(t.FRAMEBUFFER,J.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+k,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,J.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+k,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,J.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,J.__webglFramebuffer);for(let k=0;k<d.length;k++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(B|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(B|=t.STENCIL_BUFFER_BIT)),D){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,J.__webglColorRenderbuffer[k]);const he=i.get(d[k]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,he,0)}t.blitFramebuffer(0,0,E,C,0,0,E,C,B,t.NEAREST),l===!0&&(Je.length=0,L.length=0,Je.push(t.COLOR_ATTACHMENT0+k),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Je.push(G),L.push(G),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,L)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Je))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),D)for(let k=0;k<d.length;k++){n.bindFramebuffer(t.FRAMEBUFFER,J.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+k,t.RENDERBUFFER,J.__webglColorRenderbuffer[k]);const he=i.get(d[k]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,J.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+k,t.TEXTURE_2D,he,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,J.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const d=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[d])}}}function I(b){return Math.min(r.maxSamples,b.samples)}function W(b){const d=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&d.__useRenderToTexture!==!1}function q(b){const d=o.render.frame;u.get(b)!==d&&(u.set(b,d),b.update())}function te(b,d){const E=b.colorSpace,C=b.format,B=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||E!==Ii&&E!==vi&&(st.getTransfer(E)===ut?(C!==Un||B!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",E)),d}function ae(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=y,this.setTexture2D=O,this.setTexture2DArray=ee,this.setTexture3D=ne,this.setTextureCube=oe,this.rebindTextures=Ne,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=W}function jM(t,e){function n(i,r=vi){let s;const o=st.getTransfer(r);if(i===Ri)return t.UNSIGNED_BYTE;if(i===tp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===np)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Lv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Rv)return t.BYTE;if(i===Cv)return t.SHORT;if(i===Qd)return t.UNSIGNED_SHORT;if(i===ep)return t.INT;if(i===Hr)return t.UNSIGNED_INT;if(i===xi)return t.FLOAT;if(i===ma)return t.HALF_FLOAT;if(i===Pv)return t.ALPHA;if(i===Iv)return t.RGB;if(i===Un)return t.RGBA;if(i===Nv)return t.LUMINANCE;if(i===Dv)return t.LUMINANCE_ALPHA;if(i===Ur)return t.DEPTH_COMPONENT;if(i===ys)return t.DEPTH_STENCIL;if(i===Uv)return t.RED;if(i===ip)return t.RED_INTEGER;if(i===Ov)return t.RG;if(i===rp)return t.RG_INTEGER;if(i===sp)return t.RGBA_INTEGER;if(i===ka||i===Ha||i===za||i===Va)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ka)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ka)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ha)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===za)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Va)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ou||i===Fu||i===Bu||i===ku)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ou)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ku)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hu||i===zu||i===Vu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Hu||i===zu)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Vu)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Gu||i===Wu||i===Xu||i===$u||i===Yu||i===qu||i===ju||i===Ku||i===Ju||i===Zu||i===Qu||i===ef||i===tf||i===nf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Gu)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wu)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xu)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$u)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yu)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qu)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ju)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ku)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ju)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zu)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qu)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ef)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ga||i===rf||i===sf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ga)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fv||i===of||i===af||i===lf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ga)return s.COMPRESSED_RED_RGTC1_EXT;if(i===of)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===af)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ps?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class KM extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _o extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JM={type:"move"};class ml{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _o,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _o,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _o,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const _=n.getJointPose(x,i),m=this._getHandJoint(c,x);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(JM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new _o;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const ZM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ey{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Kt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new ei({vertexShader:ZM,fragmentShader:QM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new An(new Fs(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class ty extends Xr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const x=new ey,_=n.getContextAttributes();let m=null,A=null;const v=[],S=[],P=new Pe;let T=null;const R=new qt;R.layers.enable(1),R.viewport=new It;const N=new qt;N.layers.enable(2),N.viewport=new It;const M=[R,N],y=new KM;y.layers.enable(1),y.layers.enable(2);let V=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let de=v[Q];return de===void 0&&(de=new ml,v[Q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Q){let de=v[Q];return de===void 0&&(de=new ml,v[Q]=de),de.getGripSpace()},this.getHand=function(Q){let de=v[Q];return de===void 0&&(de=new ml,v[Q]=de),de.getHandSpace()};function O(Q){const de=S.indexOf(Q.inputSource);if(de===-1)return;const me=v[de];me!==void 0&&(me.update(Q.inputSource,Q.frame,c||o),me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ee(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",ne);for(let Q=0;Q<v.length;Q++){const de=S[Q];de!==null&&(S[Q]=null,v[Q].disconnect(de))}V=null,F=null,x.reset(),e.setRenderTarget(m),p=null,h=null,f=null,r=null,A=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",ne),_.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const de={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,de),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new sr(p.framebufferWidth,p.framebufferHeight,{format:Un,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let de=null,me=null,pe=null;_.depth&&(pe=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,de=_.stencil?ys:Ur,me=_.stencil?Ps:Hr);const Ne={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Ne),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new sr(h.textureWidth,h.textureHeight,{format:Un,type:Ri,depthTexture:new xp(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),qe.setContext(r),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ne(Q){for(let de=0;de<Q.removed.length;de++){const me=Q.removed[de],pe=S.indexOf(me);pe>=0&&(S[pe]=null,v[pe].disconnect(me))}for(let de=0;de<Q.added.length;de++){const me=Q.added[de];let pe=S.indexOf(me);if(pe===-1){for(let Oe=0;Oe<v.length;Oe++)if(Oe>=S.length){S.push(me),pe=Oe;break}else if(S[Oe]===null){S[Oe]=me,pe=Oe;break}if(pe===-1)break}const Ne=v[pe];Ne&&Ne.connect(me)}}const oe=new H,re=new H;function Y(Q,de,me){oe.setFromMatrixPosition(de.matrixWorld),re.setFromMatrixPosition(me.matrixWorld);const pe=oe.distanceTo(re),Ne=de.projectionMatrix.elements,Oe=me.projectionMatrix.elements,X=Ne[14]/(Ne[10]-1),Je=Ne[14]/(Ne[10]+1),L=(Ne[9]+1)/Ne[5],U=(Ne[9]-1)/Ne[5],I=(Ne[8]-1)/Ne[0],W=(Oe[8]+1)/Oe[0],q=X*I,te=X*W,ae=pe/(-I+W),b=ae*-I;de.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(b),Q.translateZ(ae),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const d=X+ae,E=Je+ae,C=q-b,B=te+(pe-b),G=L*Je/E*d,J=U*Je/E*d;Q.projectionMatrix.makePerspective(C,B,G,J,d,E),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function ce(Q,de){de===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(de.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;x.texture!==null&&(Q.near=x.depthNear,Q.far=x.depthFar),y.near=N.near=R.near=Q.near,y.far=N.far=R.far=Q.far,(V!==y.near||F!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),V=y.near,F=y.far,R.near=V,R.far=F,N.near=V,N.far=F,R.updateProjectionMatrix(),N.updateProjectionMatrix(),Q.updateProjectionMatrix());const de=Q.parent,me=y.cameras;ce(y,de);for(let pe=0;pe<me.length;pe++)ce(me[pe],de);me.length===2?Y(y,R,N):y.projectionMatrix.copy(R.projectionMatrix),fe(Q,y,de)};function fe(Q,de,me){me===null?Q.matrix.copy(de.matrixWorld):(Q.matrix.copy(me.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(de.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Gl*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return x.texture!==null};let ge=null;function we(Q,de){if(u=de.getViewerPose(c||o),g=de,u!==null){const me=u.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let pe=!1;me.length!==y.cameras.length&&(y.cameras.length=0,pe=!0);for(let Oe=0;Oe<me.length;Oe++){const X=me[Oe];let Je=null;if(p!==null)Je=p.getViewport(X);else{const U=f.getViewSubImage(h,X);Je=U.viewport,Oe===0&&(e.setRenderTargetTextures(A,U.colorTexture,h.ignoreDepthValues?void 0:U.depthStencilTexture),e.setRenderTarget(A))}let L=M[Oe];L===void 0&&(L=new qt,L.layers.enable(Oe),L.viewport=new It,M[Oe]=L),L.matrix.fromArray(X.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(X.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(Je.x,Je.y,Je.width,Je.height),Oe===0&&(y.matrix.copy(L.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),pe===!0&&y.cameras.push(L)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Oe=f.getDepthInformation(me[0]);Oe&&Oe.isValid&&Oe.texture&&x.init(e,Oe,r.renderState)}}for(let me=0;me<v.length;me++){const pe=S[me],Ne=v[me];pe!==null&&Ne!==void 0&&Ne.update(pe,de,c||o)}x.render(e,y),ge&&ge(Q,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),g=null}const qe=new vp;qe.setAnimationLoop(we),this.setAnimationLoop=function(Q){ge=Q},this.dispose=function(){}}}const $i=new Qn,ny=new gt;function iy(t,e){function n(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function i(_,m){m.color.getRGB(_.fogColor.value,pp(t)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function r(_,m,A,v,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(_,m):m.isMeshToonMaterial?(s(_,m),f(_,m)):m.isMeshPhongMaterial?(s(_,m),u(_,m)):m.isMeshStandardMaterial?(s(_,m),h(_,m),m.isMeshPhysicalMaterial&&p(_,m,S)):m.isMeshMatcapMaterial?(s(_,m),g(_,m)):m.isMeshDepthMaterial?s(_,m):m.isMeshDistanceMaterial?(s(_,m),x(_,m)):m.isMeshNormalMaterial?s(_,m):m.isLineBasicMaterial?(o(_,m),m.isLineDashedMaterial&&a(_,m)):m.isPointsMaterial?l(_,m,A,v):m.isSpriteMaterial?c(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,n(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,n(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,n(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===jt&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,n(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===jt&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,n(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,n(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const A=e.get(m),v=A.envMap,S=A.envMapRotation;if(v&&(_.envMap.value=v,$i.copy(S),$i.x*=-1,$i.y*=-1,$i.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),_.envMapRotation.value.setFromMatrix4(ny.makeRotationFromEuler($i)),_.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap){_.lightMap.value=m.lightMap;const P=t._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=m.lightMapIntensity*P,n(m.lightMap,_.lightMapTransform)}m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,_.aoMapTransform))}function o(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,n(m.map,_.mapTransform))}function a(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,A,v){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*A,_.scale.value=v*.5,m.map&&(_.map.value=m.map,n(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,n(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function c(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,n(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,n(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function u(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function f(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function h(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function p(_,m,A){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===jt&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=A.texture,_.transmissionSamplerSize.value.set(A.width,A.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,m){m.matcap&&(_.matcap.value=m.matcap)}function x(_,m){const A=e.get(m).light;_.referencePosition.value.setFromMatrixPosition(A.matrixWorld),_.nearDistance.value=A.shadow.camera.near,_.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ry(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,v){const S=v.program;i.uniformBlockBinding(A,S)}function c(A,v){let S=r[A.id];S===void 0&&(g(A),S=u(A),r[A.id]=S,A.addEventListener("dispose",_));const P=v.program;i.updateUBOMapping(A,P);const T=e.render.frame;s[A.id]!==T&&(h(A),s[A.id]=T)}function u(A){const v=f();A.__bindingPointIndex=v;const S=t.createBuffer(),P=A.__size,T=A.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,P,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const v=r[A.id],S=A.uniforms,P=A.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,R=S.length;T<R;T++){const N=Array.isArray(S[T])?S[T]:[S[T]];for(let M=0,y=N.length;M<y;M++){const V=N[M];if(p(V,T,M,P)===!0){const F=V.__offset,O=Array.isArray(V.value)?V.value:[V.value];let ee=0;for(let ne=0;ne<O.length;ne++){const oe=O[ne],re=x(oe);typeof oe=="number"||typeof oe=="boolean"?(V.__data[0]=oe,t.bufferSubData(t.UNIFORM_BUFFER,F+ee,V.__data)):oe.isMatrix3?(V.__data[0]=oe.elements[0],V.__data[1]=oe.elements[1],V.__data[2]=oe.elements[2],V.__data[3]=0,V.__data[4]=oe.elements[3],V.__data[5]=oe.elements[4],V.__data[6]=oe.elements[5],V.__data[7]=0,V.__data[8]=oe.elements[6],V.__data[9]=oe.elements[7],V.__data[10]=oe.elements[8],V.__data[11]=0):(oe.toArray(V.__data,ee),ee+=re.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,V.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(A,v,S,P){const T=A.value,R=v+"_"+S;if(P[R]===void 0)return typeof T=="number"||typeof T=="boolean"?P[R]=T:P[R]=T.clone(),!0;{const N=P[R];if(typeof T=="number"||typeof T=="boolean"){if(N!==T)return P[R]=T,!0}else if(N.equals(T)===!1)return N.copy(T),!0}return!1}function g(A){const v=A.uniforms;let S=0;const P=16;for(let R=0,N=v.length;R<N;R++){const M=Array.isArray(v[R])?v[R]:[v[R]];for(let y=0,V=M.length;y<V;y++){const F=M[y],O=Array.isArray(F.value)?F.value:[F.value];for(let ee=0,ne=O.length;ee<ne;ee++){const oe=O[ee],re=x(oe),Y=S%P;Y!==0&&P-Y<re.boundary&&(S+=P-Y),F.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=re.storage}}}const T=S%P;return T>0&&(S+=P-T),A.__size=S,A.__cache={},this}function x(A){const v={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(v.boundary=4,v.storage=4):A.isVector2?(v.boundary=8,v.storage=8):A.isVector3||A.isColor?(v.boundary=16,v.storage=12):A.isVector4?(v.boundary=16,v.storage=16):A.isMatrix3?(v.boundary=48,v.storage=48):A.isMatrix4?(v.boundary=64,v.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),v}function _(A){const v=A.target;v.removeEventListener("dispose",_);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function m(){for(const A in r)t.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}class va{constructor(e={}){const{canvas:n=Kv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),g=new Int32Array(4);let x=null,_=null;const m=[],A=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pn,this._useLegacyLights=!1,this.toneMapping=Ti,this.toneMappingExposure=1;const v=this;let S=!1,P=0,T=0,R=null,N=-1,M=null;const y=new It,V=new It;let F=null;const O=new et(0);let ee=0,ne=n.width,oe=n.height,re=1,Y=null,ce=null;const fe=new It(0,0,ne,oe),ge=new It(0,0,ne,oe);let we=!1;const qe=new gp;let Q=!1,de=!1;const me=new gt,pe=new H,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return R===null?re:1}let X=i;function Je(w,$){return n.getContext(w,$)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${yc}`),n.addEventListener("webglcontextlost",z,!1),n.addEventListener("webglcontextrestored",le,!1),n.addEventListener("webglcontextcreationerror",se,!1),X===null){const $="webgl2";if(X=Je($,w),X===null)throw Je($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let L,U,I,W,q,te,ae,b,d,E,C,B,G,J,D,k,he,ie,xe,De,Te,Me,Fe,Re;function Ze(){L=new dS(X),L.init(),Me=new jM(X,L),U=new oS(X,L,e,Me),I=new YM(X),W=new _S(X),q=new NM,te=new qM(X,L,I,q,U,Me,W),ae=new lS(v),b=new hS(v),d=new M0(X),Fe=new rS(X,d),E=new pS(X,d,W,Fe),C=new vS(X,E,d,W),xe=new gS(X,U,te),k=new aS(q),B=new IM(v,ae,b,L,U,Fe,k),G=new iy(v,q),J=new UM,D=new zM(L),ie=new iS(v,ae,b,I,C,h,l),he=new $M(v,C,U),Re=new ry(X,W,U,I),De=new sS(X,L,W),Te=new mS(X,L,W),W.programs=B.programs,v.capabilities=U,v.extensions=L,v.properties=q,v.renderLists=J,v.shadowMap=he,v.state=I,v.info=W}Ze();const Be=new ty(v,X);this.xr=Be,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const w=L.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=L.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(w){w!==void 0&&(re=w,this.setSize(ne,oe,!1))},this.getSize=function(w){return w.set(ne,oe)},this.setSize=function(w,$,Z=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=w,oe=$,n.width=Math.floor(w*re),n.height=Math.floor($*re),Z===!0&&(n.style.width=w+"px",n.style.height=$+"px"),this.setViewport(0,0,w,$)},this.getDrawingBufferSize=function(w){return w.set(ne*re,oe*re).floor()},this.setDrawingBufferSize=function(w,$,Z){ne=w,oe=$,re=Z,n.width=Math.floor(w*Z),n.height=Math.floor($*Z),this.setViewport(0,0,w,$)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(fe)},this.setViewport=function(w,$,Z,j){w.isVector4?fe.set(w.x,w.y,w.z,w.w):fe.set(w,$,Z,j),I.viewport(y.copy(fe).multiplyScalar(re).round())},this.getScissor=function(w){return w.copy(ge)},this.setScissor=function(w,$,Z,j){w.isVector4?ge.set(w.x,w.y,w.z,w.w):ge.set(w,$,Z,j),I.scissor(V.copy(ge).multiplyScalar(re).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(w){I.setScissorTest(we=w)},this.setOpaqueSort=function(w){Y=w},this.setTransparentSort=function(w){ce=w},this.getClearColor=function(w){return w.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(w=!0,$=!0,Z=!0){let j=0;if(w){let K=!1;if(R!==null){const Se=R.texture.format;K=Se===sp||Se===rp||Se===ip}if(K){const Se=R.texture.type,be=Se===Ri||Se===Hr||Se===Qd||Se===Ps||Se===tp||Se===np,Ae=ie.getClearColor(),Le=ie.getClearAlpha(),ke=Ae.r,Ve=Ae.g,Xe=Ae.b;be?(p[0]=ke,p[1]=Ve,p[2]=Xe,p[3]=Le,X.clearBufferuiv(X.COLOR,0,p)):(g[0]=ke,g[1]=Ve,g[2]=Xe,g[3]=Le,X.clearBufferiv(X.COLOR,0,g))}else j|=X.COLOR_BUFFER_BIT}$&&(j|=X.DEPTH_BUFFER_BIT),Z&&(j|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",z,!1),n.removeEventListener("webglcontextrestored",le,!1),n.removeEventListener("webglcontextcreationerror",se,!1),J.dispose(),D.dispose(),q.dispose(),ae.dispose(),b.dispose(),C.dispose(),Fe.dispose(),Re.dispose(),B.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",rt),Be.removeEventListener("sessionend",Cn),Wt.stop()};function z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=W.autoReset,$=he.enabled,Z=he.autoUpdate,j=he.needsUpdate,K=he.type;Ze(),W.autoReset=w,he.enabled=$,he.autoUpdate=Z,he.needsUpdate=j,he.type=K}function se(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ee(w){const $=w.target;$.removeEventListener("dispose",Ee),ye($)}function ye(w){Qe(w),q.remove(w)}function Qe(w){const $=q.get(w).programs;$!==void 0&&($.forEach(function(Z){B.releaseProgram(Z)}),w.isShaderMaterial&&B.releaseShaderCache(w))}this.renderBufferDirect=function(w,$,Z,j,K,Se){$===null&&($=Ne);const be=K.isMesh&&K.matrixWorld.determinant()<0,Ae=dm(w,$,Z,j,K);I.setMaterial(j,be);let Le=Z.index,ke=1;if(j.wireframe===!0){if(Le=E.getWireframeAttribute(Z),Le===void 0)return;ke=2}const Ve=Z.drawRange,Xe=Z.attributes.position;let Et=Ve.start*ke,Ut=(Ve.start+Ve.count)*ke;Se!==null&&(Et=Math.max(Et,Se.start*ke),Ut=Math.min(Ut,(Se.start+Se.count)*ke)),Le!==null?(Et=Math.max(Et,0),Ut=Math.min(Ut,Le.count)):Xe!=null&&(Et=Math.max(Et,0),Ut=Math.min(Ut,Xe.count));const rn=Ut-Et;if(rn<0||rn===1/0)return;Fe.setup(K,j,Ae,Z,Le);let Hn,it=De;if(Le!==null&&(Hn=d.get(Le),it=Te,it.setIndex(Hn)),K.isMesh)j.wireframe===!0?(I.setLineWidth(j.wireframeLinewidth*Oe()),it.setMode(X.LINES)):it.setMode(X.TRIANGLES);else if(K.isLine){let He=j.linewidth;He===void 0&&(He=1),I.setLineWidth(He*Oe()),K.isLineSegments?it.setMode(X.LINES):K.isLineLoop?it.setMode(X.LINE_LOOP):it.setMode(X.LINE_STRIP)}else K.isPoints?it.setMode(X.POINTS):K.isSprite&&it.setMode(X.TRIANGLES);if(K.isBatchedMesh)K._multiDrawInstances!==null?it.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances):it.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)it.renderInstances(Et,rn,K.count);else if(Z.isInstancedBufferGeometry){const He=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,jr=Math.min(Z.instanceCount,He);it.renderInstances(Et,rn,jr)}else it.render(Et,rn)};function ct(w,$,Z){w.transparent===!0&&w.side===jn&&w.forceSinglePass===!1?(w.side=jt,w.needsUpdate=!0,ks(w,$,Z),w.side=wi,w.needsUpdate=!0,ks(w,$,Z),w.side=jn):ks(w,$,Z)}this.compile=function(w,$,Z=null){Z===null&&(Z=w),_=D.get(Z),_.init($),A.push(_),Z.traverseVisible(function(K){K.isLight&&K.layers.test($.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),w!==Z&&w.traverseVisible(function(K){K.isLight&&K.layers.test($.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),_.setupLights(v._useLegacyLights);const j=new Set;return w.traverse(function(K){const Se=K.material;if(Se)if(Array.isArray(Se))for(let be=0;be<Se.length;be++){const Ae=Se[be];ct(Ae,Z,K),j.add(Ae)}else ct(Se,Z,K),j.add(Se)}),A.pop(),_=null,j},this.compileAsync=function(w,$,Z=null){const j=this.compile(w,$,Z);return new Promise(K=>{function Se(){if(j.forEach(function(be){q.get(be).currentProgram.isReady()&&j.delete(be)}),j.size===0){K(w);return}setTimeout(Se,10)}L.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let _t=null;function Dt(w){_t&&_t(w)}function rt(){Wt.stop()}function Cn(){Wt.start()}const Wt=new vp;Wt.setAnimationLoop(Dt),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(w){_t=w,Be.setAnimationLoop(w),w===null?Wt.stop():Wt.start()},Be.addEventListener("sessionstart",rt),Be.addEventListener("sessionend",Cn),this.render=function(w,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera($),$=Be.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,$,R),_=D.get(w,A.length),_.init($),A.push(_),me.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),qe.setFromProjectionMatrix(me),de=this.localClippingEnabled,Q=k.init(this.clippingPlanes,de),x=J.get(w,m.length),x.init(),m.push(x),Hc(w,$,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(Y,ce);const Z=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1;Z&&ie.addToRenderList(x,w),this.info.render.frame++,Q===!0&&k.beginShadows();const j=_.state.shadowsArray;he.render(j,w,$),Q===!0&&k.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=x.opaque,Se=x.transmissive;if(_.setupLights(v._useLegacyLights),$.isArrayCamera){const be=$.cameras;if(Se.length>0)for(let Ae=0,Le=be.length;Ae<Le;Ae++){const ke=be[Ae];Vc(K,Se,w,ke)}Z&&ie.render(w);for(let Ae=0,Le=be.length;Ae<Le;Ae++){const ke=be[Ae];zc(x,w,ke,ke.viewport)}}else Se.length>0&&Vc(K,Se,w,$),Z&&ie.render(w),zc(x,w,$);R!==null&&(te.updateMultisampleRenderTarget(R),te.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(v,w,$),Fe.resetDefaultState(),N=-1,M=null,A.pop(),A.length>0?(_=A[A.length-1],Q===!0&&k.setGlobalState(v.clippingPlanes,_.state.camera)):_=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Hc(w,$,Z,j){if(w.visible===!1)return;if(w.layers.test($.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update($);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||qe.intersectsSprite(w)){j&&pe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(me);const be=C.update(w),Ae=w.material;Ae.visible&&x.push(w,be,Ae,Z,pe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||qe.intersectsObject(w))){const be=C.update(w),Ae=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),pe.copy(w.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),pe.copy(be.boundingSphere.center)),pe.applyMatrix4(w.matrixWorld).applyMatrix4(me)),Array.isArray(Ae)){const Le=be.groups;for(let ke=0,Ve=Le.length;ke<Ve;ke++){const Xe=Le[ke],Et=Ae[Xe.materialIndex];Et&&Et.visible&&x.push(w,be,Et,Z,pe.z,Xe)}}else Ae.visible&&x.push(w,be,Ae,Z,pe.z,null)}}const Se=w.children;for(let be=0,Ae=Se.length;be<Ae;be++)Hc(Se[be],$,Z,j)}function zc(w,$,Z,j){const K=w.opaque,Se=w.transmissive,be=w.transparent;_.setupLightsView(Z),Q===!0&&k.setGlobalState(v.clippingPlanes,Z),j&&I.viewport(y.copy(j)),K.length>0&&Bs(K,$,Z),Se.length>0&&Bs(Se,$,Z),be.length>0&&Bs(be,$,Z),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function Vc(w,$,Z,j){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[j.id]===void 0&&(_.state.transmissionRenderTarget[j.id]=new sr(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?ma:Ri,minFilter:nr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const Se=_.state.transmissionRenderTarget[j.id],be=j.viewport||y;Se.setSize(be.z,be.w);const Ae=v.getRenderTarget();v.setRenderTarget(Se),v.getClearColor(O),ee=v.getClearAlpha(),ee<1&&v.setClearColor(16777215,.5),v.clear();const Le=v.toneMapping;v.toneMapping=Ti;const ke=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),_.setupLightsView(j),Q===!0&&k.setGlobalState(v.clippingPlanes,j),Bs(w,Z,j),te.updateMultisampleRenderTarget(Se),te.updateRenderTargetMipmap(Se),L.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Xe=0,Et=$.length;Xe<Et;Xe++){const Ut=$[Xe],rn=Ut.object,Hn=Ut.geometry,it=Ut.material,He=Ut.group;if(it.side===jn&&rn.layers.test(j.layers)){const jr=it.side;it.side=jt,it.needsUpdate=!0,Gc(rn,Z,j,Hn,it,He),it.side=jr,it.needsUpdate=!0,Ve=!0}}Ve===!0&&(te.updateMultisampleRenderTarget(Se),te.updateRenderTargetMipmap(Se))}v.setRenderTarget(Ae),v.setClearColor(O,ee),ke!==void 0&&(j.viewport=ke),v.toneMapping=Le}function Bs(w,$,Z){const j=$.isScene===!0?$.overrideMaterial:null;for(let K=0,Se=w.length;K<Se;K++){const be=w[K],Ae=be.object,Le=be.geometry,ke=j===null?be.material:j,Ve=be.group;Ae.layers.test(Z.layers)&&Gc(Ae,$,Z,Le,ke,Ve)}}function Gc(w,$,Z,j,K,Se){w.onBeforeRender(v,$,Z,j,K,Se),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(v,$,Z,j,w,Se),K.transparent===!0&&K.side===jn&&K.forceSinglePass===!1?(K.side=jt,K.needsUpdate=!0,v.renderBufferDirect(Z,$,j,K,w,Se),K.side=wi,K.needsUpdate=!0,v.renderBufferDirect(Z,$,j,K,w,Se),K.side=jn):v.renderBufferDirect(Z,$,j,K,w,Se),w.onAfterRender(v,$,Z,j,K,Se)}function ks(w,$,Z){$.isScene!==!0&&($=Ne);const j=q.get(w),K=_.state.lights,Se=_.state.shadowsArray,be=K.state.version,Ae=B.getParameters(w,K.state,Se,$,Z),Le=B.getProgramCacheKey(Ae);let ke=j.programs;j.environment=w.isMeshStandardMaterial?$.environment:null,j.fog=$.fog,j.envMap=(w.isMeshStandardMaterial?b:ae).get(w.envMap||j.environment),j.envMapRotation=j.environment!==null&&w.envMap===null?$.environmentRotation:w.envMapRotation,ke===void 0&&(w.addEventListener("dispose",Ee),ke=new Map,j.programs=ke);let Ve=ke.get(Le);if(Ve!==void 0){if(j.currentProgram===Ve&&j.lightsStateVersion===be)return Xc(w,Ae),Ve}else Ae.uniforms=B.getUniforms(w),w.onBuild(Z,Ae,v),w.onBeforeCompile(Ae,v),Ve=B.acquireProgram(Ae,Le),ke.set(Le,Ve),j.uniforms=Ae.uniforms;const Xe=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xe.clippingPlanes=k.uniform),Xc(w,Ae),j.needsLights=mm(w),j.lightsStateVersion=be,j.needsLights&&(Xe.ambientLightColor.value=K.state.ambient,Xe.lightProbe.value=K.state.probe,Xe.directionalLights.value=K.state.directional,Xe.directionalLightShadows.value=K.state.directionalShadow,Xe.spotLights.value=K.state.spot,Xe.spotLightShadows.value=K.state.spotShadow,Xe.rectAreaLights.value=K.state.rectArea,Xe.ltc_1.value=K.state.rectAreaLTC1,Xe.ltc_2.value=K.state.rectAreaLTC2,Xe.pointLights.value=K.state.point,Xe.pointLightShadows.value=K.state.pointShadow,Xe.hemisphereLights.value=K.state.hemi,Xe.directionalShadowMap.value=K.state.directionalShadowMap,Xe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Xe.spotShadowMap.value=K.state.spotShadowMap,Xe.spotLightMatrix.value=K.state.spotLightMatrix,Xe.spotLightMap.value=K.state.spotLightMap,Xe.pointShadowMap.value=K.state.pointShadowMap,Xe.pointShadowMatrix.value=K.state.pointShadowMatrix),j.currentProgram=Ve,j.uniformsList=null,Ve}function Wc(w){if(w.uniformsList===null){const $=w.currentProgram.getUniforms();w.uniformsList=Po.seqWithValue($.seq,w.uniforms)}return w.uniformsList}function Xc(w,$){const Z=q.get(w);Z.outputColorSpace=$.outputColorSpace,Z.batching=$.batching,Z.instancing=$.instancing,Z.instancingColor=$.instancingColor,Z.instancingMorph=$.instancingMorph,Z.skinning=$.skinning,Z.morphTargets=$.morphTargets,Z.morphNormals=$.morphNormals,Z.morphColors=$.morphColors,Z.morphTargetsCount=$.morphTargetsCount,Z.numClippingPlanes=$.numClippingPlanes,Z.numIntersection=$.numClipIntersection,Z.vertexAlphas=$.vertexAlphas,Z.vertexTangents=$.vertexTangents,Z.toneMapping=$.toneMapping}function dm(w,$,Z,j,K){$.isScene!==!0&&($=Ne),te.resetTextureUnits();const Se=$.fog,be=j.isMeshStandardMaterial?$.environment:null,Ae=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ii,Le=(j.isMeshStandardMaterial?b:ae).get(j.envMap||be),ke=j.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ve=!!Z.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Xe=!!Z.morphAttributes.position,Et=!!Z.morphAttributes.normal,Ut=!!Z.morphAttributes.color;let rn=Ti;j.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(rn=v.toneMapping);const Hn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,it=Hn!==void 0?Hn.length:0,He=q.get(j),jr=_.state.lights;if(Q===!0&&(de===!0||w!==M)){const cn=w===M&&j.id===N;k.setState(j,w,cn)}let dt=!1;j.version===He.__version?(He.needsLights&&He.lightsStateVersion!==jr.state.version||He.outputColorSpace!==Ae||K.isBatchedMesh&&He.batching===!1||!K.isBatchedMesh&&He.batching===!0||K.isInstancedMesh&&He.instancing===!1||!K.isInstancedMesh&&He.instancing===!0||K.isSkinnedMesh&&He.skinning===!1||!K.isSkinnedMesh&&He.skinning===!0||K.isInstancedMesh&&He.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&He.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&He.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&He.instancingMorph===!1&&K.morphTexture!==null||He.envMap!==Le||j.fog===!0&&He.fog!==Se||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==k.numPlanes||He.numIntersection!==k.numIntersection)||He.vertexAlphas!==ke||He.vertexTangents!==Ve||He.morphTargets!==Xe||He.morphNormals!==Et||He.morphColors!==Ut||He.toneMapping!==rn||He.morphTargetsCount!==it)&&(dt=!0):(dt=!0,He.__version=j.version);let Oi=He.currentProgram;dt===!0&&(Oi=ks(j,$,K));let $c=!1,Kr=!1,ba=!1;const Ot=Oi.getUniforms(),ii=He.uniforms;if(I.useProgram(Oi.program)&&($c=!0,Kr=!0,ba=!0),j.id!==N&&(N=j.id,Kr=!0),$c||M!==w){Ot.setValue(X,"projectionMatrix",w.projectionMatrix),Ot.setValue(X,"viewMatrix",w.matrixWorldInverse);const cn=Ot.map.cameraPosition;cn!==void 0&&cn.setValue(X,pe.setFromMatrixPosition(w.matrixWorld)),U.logarithmicDepthBuffer&&Ot.setValue(X,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ot.setValue(X,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Kr=!0,ba=!0)}if(K.isSkinnedMesh){Ot.setOptional(X,K,"bindMatrix"),Ot.setOptional(X,K,"bindMatrixInverse");const cn=K.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Ot.setValue(X,"boneTexture",cn.boneTexture,te))}K.isBatchedMesh&&(Ot.setOptional(X,K,"batchingTexture"),Ot.setValue(X,"batchingTexture",K._matricesTexture,te));const Aa=Z.morphAttributes;if((Aa.position!==void 0||Aa.normal!==void 0||Aa.color!==void 0)&&xe.update(K,Z,Oi),(Kr||He.receiveShadow!==K.receiveShadow)&&(He.receiveShadow=K.receiveShadow,Ot.setValue(X,"receiveShadow",K.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(ii.envMap.value=Le,ii.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&$.environment!==null&&(ii.envMapIntensity.value=$.environmentIntensity),Kr&&(Ot.setValue(X,"toneMappingExposure",v.toneMappingExposure),He.needsLights&&pm(ii,ba),Se&&j.fog===!0&&G.refreshFogUniforms(ii,Se),G.refreshMaterialUniforms(ii,j,re,oe,_.state.transmissionRenderTarget[w.id]),Po.upload(X,Wc(He),ii,te)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Po.upload(X,Wc(He),ii,te),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ot.setValue(X,"center",K.center),Ot.setValue(X,"modelViewMatrix",K.modelViewMatrix),Ot.setValue(X,"normalMatrix",K.normalMatrix),Ot.setValue(X,"modelMatrix",K.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const cn=j.uniformsGroups;for(let wa=0,_m=cn.length;wa<_m;wa++){const Yc=cn[wa];Re.update(Yc,Oi),Re.bind(Yc,Oi)}}return Oi}function pm(w,$){w.ambientLightColor.needsUpdate=$,w.lightProbe.needsUpdate=$,w.directionalLights.needsUpdate=$,w.directionalLightShadows.needsUpdate=$,w.pointLights.needsUpdate=$,w.pointLightShadows.needsUpdate=$,w.spotLights.needsUpdate=$,w.spotLightShadows.needsUpdate=$,w.rectAreaLights.needsUpdate=$,w.hemisphereLights.needsUpdate=$}function mm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,$,Z){q.get(w.texture).__webglTexture=$,q.get(w.depthTexture).__webglTexture=Z;const j=q.get(w);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Z===void 0,j.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,$){const Z=q.get(w);Z.__webglFramebuffer=$,Z.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(w,$=0,Z=0){R=w,P=$,T=Z;let j=!0,K=null,Se=!1,be=!1;if(w){const Le=q.get(w);Le.__useDefaultFramebuffer!==void 0?(I.bindFramebuffer(X.FRAMEBUFFER,null),j=!1):Le.__webglFramebuffer===void 0?te.setupRenderTarget(w):Le.__hasExternalTextures&&te.rebindTextures(w,q.get(w.texture).__webglTexture,q.get(w.depthTexture).__webglTexture);const ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(be=!0);const Ve=q.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ve[$])?K=Ve[$][Z]:K=Ve[$],Se=!0):w.samples>0&&te.useMultisampledRTT(w)===!1?K=q.get(w).__webglMultisampledFramebuffer:Array.isArray(Ve)?K=Ve[Z]:K=Ve,y.copy(w.viewport),V.copy(w.scissor),F=w.scissorTest}else y.copy(fe).multiplyScalar(re).floor(),V.copy(ge).multiplyScalar(re).floor(),F=we;if(I.bindFramebuffer(X.FRAMEBUFFER,K)&&j&&I.drawBuffers(w,K),I.viewport(y),I.scissor(V),I.setScissorTest(F),Se){const Le=q.get(w.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+$,Le.__webglTexture,Z)}else if(be){const Le=q.get(w.texture),ke=$||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Le.__webglTexture,Z||0,ke)}N=-1},this.readRenderTargetPixels=function(w,$,Z,j,K,Se,be){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&be!==void 0&&(Ae=Ae[be]),Ae){I.bindFramebuffer(X.FRAMEBUFFER,Ae);try{const Le=w.texture,ke=Le.format,Ve=Le.type;if(!U.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=w.width-j&&Z>=0&&Z<=w.height-K&&X.readPixels($,Z,j,K,Me.convert(ke),Me.convert(Ve),Se)}finally{const Le=R!==null?q.get(R).__webglFramebuffer:null;I.bindFramebuffer(X.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(w,$,Z=0){const j=Math.pow(2,-Z),K=Math.floor($.image.width*j),Se=Math.floor($.image.height*j);te.setTexture2D($,0),X.copyTexSubImage2D(X.TEXTURE_2D,Z,0,0,w.x,w.y,K,Se),I.unbindTexture()},this.copyTextureToTexture=function(w,$,Z,j=0){const K=$.image.width,Se=$.image.height,be=Me.convert(Z.format),Ae=Me.convert(Z.type);te.setTexture2D(Z,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Z.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Z.unpackAlignment),$.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,j,w.x,w.y,K,Se,be,Ae,$.image.data):$.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,j,w.x,w.y,$.mipmaps[0].width,$.mipmaps[0].height,be,$.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,j,w.x,w.y,be,Ae,$.image),j===0&&Z.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),I.unbindTexture()},this.copyTextureToTexture3D=function(w,$,Z,j,K=0){const Se=w.max.x-w.min.x,be=w.max.y-w.min.y,Ae=w.max.z-w.min.z,Le=Me.convert(j.format),ke=Me.convert(j.type);let Ve;if(j.isData3DTexture)te.setTexture3D(j,0),Ve=X.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)te.setTexture2DArray(j,0),Ve=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,j.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,j.unpackAlignment);const Xe=X.getParameter(X.UNPACK_ROW_LENGTH),Et=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Ut=X.getParameter(X.UNPACK_SKIP_PIXELS),rn=X.getParameter(X.UNPACK_SKIP_ROWS),Hn=X.getParameter(X.UNPACK_SKIP_IMAGES),it=Z.isCompressedTexture?Z.mipmaps[K]:Z.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,it.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,it.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,w.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,w.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,w.min.z),Z.isDataTexture||Z.isData3DTexture?X.texSubImage3D(Ve,K,$.x,$.y,$.z,Se,be,Ae,Le,ke,it.data):j.isCompressedArrayTexture?X.compressedTexSubImage3D(Ve,K,$.x,$.y,$.z,Se,be,Ae,Le,it.data):X.texSubImage3D(Ve,K,$.x,$.y,$.z,Se,be,Ae,Le,ke,it),X.pixelStorei(X.UNPACK_ROW_LENGTH,Xe),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Et),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ut),X.pixelStorei(X.UNPACK_SKIP_ROWS,rn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Hn),K===0&&j.generateMipmaps&&X.generateMipmap(Ve),I.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?te.setTextureCube(w,0):w.isData3DTexture?te.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?te.setTexture2DArray(w,0):te.setTexture2D(w,0),I.unbindTexture()},this.resetState=function(){P=0,T=0,R=null,I.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Tc?"display-p3":"srgb",n.unpackColorSpace=st.workingColorSpace===_a?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Rc{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new et(e),this.density=n}clone(){return new Rc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class xa extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class bp extends $r{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $o=new H,Yo=new H,Qf=new gt,is=new bc,go=new Us,_l=new H,eh=new H;class sy extends Vt{constructor(e=new nn,n=new bp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)$o.fromBufferAttribute(n,r-1),Yo.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=$o.distanceTo(Yo);e.setAttribute("lineDistance",new Gt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(r),go.radius+=s,e.ray.intersectsSphere(go)===!1)return;Qf.copy(r).invert(),is.copy(e.ray).applyMatrix4(Qf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=p,_=g-1;x<_;x+=c){const m=u.getX(x),A=u.getX(x+1),v=vo(this,e,is,l,m,A);v&&n.push(v)}if(this.isLineLoop){const x=u.getX(g-1),_=u.getX(p),m=vo(this,e,is,l,x,_);m&&n.push(m)}}else{const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,_=g-1;x<_;x+=c){const m=vo(this,e,is,l,x,x+1);m&&n.push(m)}if(this.isLineLoop){const x=vo(this,e,is,l,g-1,p);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function vo(t,e,n,i,r,s){const o=t.geometry.attributes.position;if($o.fromBufferAttribute(o,r),Yo.fromBufferAttribute(o,s),n.distanceSqToSegment($o,Yo,_l,eh)>i)return;_l.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(_l);if(!(l<e.near||l>e.far))return{distance:l,point:eh.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const th=new H,nh=new H;class oy extends sy{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)th.fromBufferAttribute(n,r),nh.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+th.distanceTo(nh);e.setAttribute("lineDistance",new Gt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qo extends $r{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ih=new gt,Xl=new bc,xo=new Us,Eo=new H;class $l extends Vt{constructor(e=new nn,n=new qo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(r),xo.radius+=s,e.ray.intersectsSphere(xo)===!1)return;ih.copy(r).invert(),Xl.copy(e.ray).applyMatrix4(ih);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,x=p;g<x;g++){const _=c.getX(g);Eo.fromBufferAttribute(f,_),rh(Eo,_,l,r,e,n,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,x=p;g<x;g++)Eo.fromBufferAttribute(f,g),rh(Eo,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function rh(t,e,n,i,r,s,o){const a=Xl.distanceSqToPoint(t);if(a<n){const l=new H;Xl.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class ni{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,p=(o-u)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Pe:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new H,r=[],s=[],o=[],a=new H,l=new gt;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new H)}s[0]=new H,o[0]=new H;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(kt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(kt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ap extends ni{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Pe){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*f+this.aX,c=h*f+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ay extends Ap{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Cc(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,p*=u,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const So=new H,gl=new Cc,vl=new Cc,xl=new Cc;class wp extends ni{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new H){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(So.subVectors(r[0],r[1]).add(r[0]),c=So);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(So.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=So),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(u),p);x<1e-4&&(x=1),g<1e-4&&(g=x),_<1e-4&&(_=x),gl.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,x,_),vl.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,x,_),xl.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,x,_)}else this.curveType==="catmullrom"&&(gl.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),vl.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),xl.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(gl.calc(l),vl.calc(l),xl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new H().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function sh(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function ly(t,e){const n=1-t;return n*n*e}function cy(t,e){return 2*(1-t)*t*e}function uy(t,e){return t*t*e}function ms(t,e,n,i){return ly(t,e)+cy(t,n)+uy(t,i)}function fy(t,e){const n=1-t;return n*n*n*e}function hy(t,e){const n=1-t;return 3*n*n*t*e}function dy(t,e){return 3*(1-t)*t*t*e}function py(t,e){return t*t*t*e}function _s(t,e,n,i,r){return fy(t,e)+hy(t,n)+dy(t,i)+py(t,r)}class my extends ni{constructor(e=new Pe,n=new Pe,i=new Pe,r=new Pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Pe){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(_s(e,r.x,s.x,o.x,a.x),_s(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _y extends ni{constructor(e=new H,n=new H,i=new H,r=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new H){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(_s(e,r.x,s.x,o.x,a.x),_s(e,r.y,s.y,o.y,a.y),_s(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gy extends ni{constructor(e=new Pe,n=new Pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Pe){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Pe){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vy extends ni{constructor(e=new H,n=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new H){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new H){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xy extends ni{constructor(e=new Pe,n=new Pe,i=new Pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Pe){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ms(e,r.x,s.x,o.x),ms(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rp extends ni{constructor(e=new H,n=new H,i=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new H){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ms(e,r.x,s.x,o.x),ms(e,r.y,s.y,o.y),ms(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ey extends ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Pe){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(sh(a,l.x,c.x,u.x,f.x),sh(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Pe().fromArray(r))}return this}}var Sy=Object.freeze({__proto__:null,ArcCurve:ay,CatmullRomCurve3:wp,CubicBezierCurve:my,CubicBezierCurve3:_y,EllipseCurve:Ap,LineCurve:gy,LineCurve3:vy,QuadraticBezierCurve:xy,QuadraticBezierCurve3:Rp,SplineCurve:Ey});const Mo=new H,yo=new H,El=new H,To=new Tn;class My extends nn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Lo*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:x,b:_,c:m}=To;if(x.fromBufferAttribute(a,c[0]),_.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),To.getNormal(El),f[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,f[1]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,f[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let A=0;A<3;A++){const v=(A+1)%3,S=f[A],P=f[v],T=To[u[A]],R=To[u[v]],N=`${S}_${P}`,M=`${P}_${S}`;M in h&&h[M]?(El.dot(h[M].normal)<=s&&(p.push(T.x,T.y,T.z),p.push(R.x,R.y,R.z)),h[M]=null):N in h||(h[N]={index0:c[A],index1:c[v],normal:El.clone()})}}for(const g in h)if(h[g]){const{index0:x,index1:_}=h[g];Mo.fromBufferAttribute(a,x),yo.fromBufferAttribute(a,_),p.push(Mo.x,Mo.y,Mo.z),p.push(yo.x,yo.y,yo.z)}this.setAttribute("position",new Gt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Lc extends nn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new H,h=new H,p=[],g=[],x=[],_=[];for(let m=0;m<=i;m++){const A=[],v=m/i;let S=0;m===0&&o===0?S=.5/n:m===i&&l===Math.PI&&(S=-.5/n);for(let P=0;P<=n;P++){const T=P/n;f.x=-e*Math.cos(r+T*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+T*s)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),_.push(T+S,1-v),A.push(c++)}u.push(A)}for(let m=0;m<i;m++)for(let A=0;A<n;A++){const v=u[m][A+1],S=u[m][A],P=u[m+1][A],T=u[m+1][A+1];(m!==0||o>0)&&p.push(v,S,T),(m!==i-1||l<Math.PI)&&p.push(S,P,T)}this.setIndex(p),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(x,3)),this.setAttribute("uv",new Gt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class jo extends nn{constructor(e=new Rp(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new H,l=new H,c=new Pe;let u=new H;const f=[],h=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Gt(f,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(p,2));function x(){for(let v=0;v<n;v++)_(v);_(s===!1?n:0),A(),m()}function _(v){u=e.getPointAt(v/n,u);const S=o.normals[v],P=o.binormals[v];for(let T=0;T<=r;T++){const R=T/r*Math.PI*2,N=Math.sin(R),M=-Math.cos(R);l.x=M*S.x+N*P.x,l.y=M*S.y+N*P.y,l.z=M*S.z+N*P.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,f.push(a.x,a.y,a.z)}}function m(){for(let v=1;v<=n;v++)for(let S=1;S<=r;S++){const P=(r+1)*(v-1)+(S-1),T=(r+1)*v+(S-1),R=(r+1)*v+S,N=(r+1)*(v-1)+S;g.push(P,T,N),g.push(T,R,N)}}function A(){for(let v=0;v<=n;v++)for(let S=0;S<=r;S++)c.x=v/n,c.y=S/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new jo(new Sy[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}const oh={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class yy{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Ty=new yy;class Pc{constructor(e){this.manager=e!==void 0?e:Ty,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Pc.DEFAULT_MATERIAL_NAME="__DEFAULT";class by extends Pc{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=oh.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Ts("img");function l(){u(),oh.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Cp extends Pc{constructor(e){super(e)}load(e,n,i,r){const s=new Kt,o=new by(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Ay extends Vt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class wy extends Ay{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yc);function Ry(t){const e=t.offsetWidth,n=t.offsetHeight,i=new xa,r=new qt(65,e/n);r.position.z=14,r.position.y=2,i.add(r);const s=new va({canvas:t,alpha:!0,antialias:!0});s.setSize(e,n);const o=new Cp,a=new Lc(4,96,96),l=new qo({alphaMap:o.load("/earthspec1k_inverted.jpg"),alphaHash:!0,color:15790320,size:.02,opacity:.7}),c=new $l(a,l);i.add(c),r.lookAt(c.position);const u=x=>{const _=new Float32Array(x*3);for(let m=0;m<x;m++)_[m]=(Math.random()-.5)*25;return _},f=new nn;f.setAttribute("position",new _n(u(1e3),3));const h=new qo({size:.05,map:o.load("/star.png"),transparent:!0}),p=new $l(f,h);i.add(p);function g(){s.setPixelRatio(window.devicePixelRatio),p.rotation.y-=1e-4,c.rotation.y+=.001,s.render(i,r),requestAnimationFrame(g)}window.addEventListener("resize",()=>{t.style.width="100vw",t.style.height="100vh";const x=t.offsetWidth,_=t.offsetHeight;r.aspect=x/_,r.updateProjectionMatrix(),s.setPixelRatio(window.devicePixelRatio),s.setSize(x,_),s.render(i,r)}),g()}const Cy=["href","download"],Lp=Lt({__name:"my-button",props:{href:{},download:{}},setup(t){return(e,n)=>(lt(),Mt("a",{href:e.href,download:e.download,class:"mx-auto text-green-500 hover:text-[#090909] hover:bg-green-500 transition-all duration-300 cursor-pointer px-4 py-2 text-xl tracking-widest outline outline-1 select-none whitespace-nowrap"},[Ld(e.$slots,"default")],8,Cy))}}),Ly={class:"relative w-full h-screen pointer-events-none"},Py={class:"flex sm:flex-row flex-col-reverse justify-between w-full absolute md:top-1/4 sm:top-[20%] top-[12%] md:-translate-y-1/4 sm:-translate-y-[20%] -translate-y-[12%] px-8"},Iy={class:"flex flex-col font-light tracking-wide text-2xl"},Ny=ue("br",null,null,-1),Dy={class:"text-right sm:text-2xl text-base font-light sm:tracking-wide tracking-widest"},Uy=ue("br",null,null,-1),Oy=ue("h1",{class:"py-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 outline outline-1 outline-white md:bg-[#0e0e0e]/50 bg-[#0e0e0e]/75 w-max px-8 absolute sm:text-start text-center"},[ue("p",{class:"lg:text-[60px] md:text-5xl sm:text-4xl text-[6.2vw] tracking-widest"}," FRONTEND DEVELOPER ")],-1),Fy={class:"absolute left-1/2 -translate-x-1/2 bottom-4 w-full text-center px-8"},By={class:"text-3xl mx-auto mt-8"},ky=Lt({__name:"my-header",setup(t){const e=an(null);return ar(()=>{e.value!==null&&Ry(e.value)}),(n,i)=>(lt(),Mt(mt,null,[ue("canvas",{ref_key:"canvas",ref:e,class:"h-screen w-screen absolute top-0 left-0"},null,512),ue("div",Ly,[ue("div",Py,[ue("div",Iy,[wt(" TOFAN VLAD "),Ny,wt(" "+Ye(n.$t("header.based")),1)]),ue("p",Dy,[wt(Ye(n.$t("header.welcome_1"))+" ",1),Uy,wt(" "+Ye(n.$t("header.welcome_2")),1)])]),Oy]),ue("div",Fy,[je(Lp,{href:"#contacts"},{default:kn(()=>[wt(Ye(n.$t("header.button")),1)]),_:1}),ue("h2",By,Ye(n.$t("header.specialize")),1)])],64))}}),Hy=`
    uniform float uAmplitude;
    uniform float uWaveLength;
    uniform float uTime;

    void main(){
        vec3 newPosition = position;
        float zWave = uAmplitude * sin(position.x * uWaveLength + uTime);
        float xWave = uAmplitude * sin(position.y * uWaveLength + uTime);
        newPosition.z += zWave;
        newPosition.z += xWave;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
`,zy=`
    void main(){
        gl_FragColor = vec4(1., 1., 1., 1.);
    }
`;function Vy(t){const e=t.offsetWidth,n=t.offsetHeight,i=new xa,r=new qt(65,e/n);r.position.z=8.5,r.position.y=1.5,r.rotation.x=.2,i.add(r);const s=new va({canvas:t,alpha:!0});s.setSize(e,n);const o=an({uTime:{value:0},uAmplitude:{value:.25},uWaveLength:{value:1}}),a=new Fs(32,12,64,8),l=new ei({vertexShader:Hy,fragmentShader:zy,wireframe:!0,uniforms:o.value}),c=new An(a,l);c.rotation.y=Math.PI/180*180,c.rotation.x=Math.PI/180*90,i.add(c);function u(){o.value.uTime.value+=.025,s.render(i,r),requestAnimationFrame(u)}window.addEventListener("resize",()=>{t.style.width="100vw",t.style.height="100vh";const f=t.offsetWidth,h=t.offsetHeight;r.aspect=f/h,r.updateProjectionMatrix(),s.setPixelRatio(window.devicePixelRatio),s.setSize(f,h),s.render(i,r)}),u()}const Gy={class:"flex lg:flex-row flex-col justify-between lg:items-center lg:gap-8 gap-4 xl:mt-24 sm:mt-8 mt-0"},Wy={class:"flex flex-col gap-2 px-8"},Xy={class:"sm:text-sm text-xs tracking-widest"},$y={class:"md:text-2xl sm:text-2xl text-base tracking-widest uppercase"},Yy={class:"flex lg:flex-row flex-col justify-between lg:items-center lg:gap-8 gap-4 bg-[#0e0e0e]/50 pb-4"},qy={class:"flex flex-col gap-2 lg:whitespace-nowrap px-8"},jy={class:"sm:text-sm text-xs tracking-widest"},Ky=ue("h1",{class:"md:text-[46px] sm:text-4xl text-2xl"},[wt(" Frontend Developer"),ue("br",{class:"lg:block hidden"}),wt(" TweenyOne SRL "),ue("br"),wt(" 2023 - 2024 ")],-1),Jy=ue("h1",{class:"md:text-[46px] sm:text-4xl text-2xl mt-4"},[wt(" Frontend Developer"),ue("br",{class:"lg:block hidden"}),wt(" Triseidon SRL "),ue("br"),wt(" 2024 - 2025 ")],-1),Zy={class:"lg:border-l-2 lg:border-t-0 flex-col border-t-2 border-white h-full md:text-3xl sm:text-xl text-lg lg:mx-0 mx-8 lg:py-0 lg:px-4 pt-4 tracking-widest flex"},Qy={class:"my-auto"},eT={class:"my-auto mt-4"},tT=Lt({__name:"my-about",setup(t){const e=an(null);return ar(()=>{e.value!==null&&Vy(e.value)}),(n,i)=>(lt(),Mt(mt,null,[je(Ho,{class:"flex flex-col md:pt-28 pt-24 pb-16 z-10 relative lg:gap-16 gap-8 uppercase"},{default:kn(()=>[ue("div",Gy,[ue("div",Wy,[ue("p",Xy,Ye(n.$t("about.title")),1),ue("h1",$y,Ye(n.$t("about.title_desc")),1)])]),ue("div",Yy,[ue("div",qy,[ue("p",jy,Ye(n.$t("about.exp")),1),Ky,Jy]),ue("div",Zy,[ue("p",Qy,Ye(n.$t("about.exp_desc")),1),ue("p",eT,Ye(n.$t("about.exp_desc2")),1)])])]),_:1}),ue("canvas",{ref_key:"canvas",ref:e,class:"w-screen h-screen absolute top-0 left-0"},null,512)],64))}}),Pp=t=>(aa("data-v-5494b4bb"),t=t(),la(),t),nT=["href"],iT=Pp(()=>ue("div",{class:"-translate-x-[110%] absolute left-0 bottom-0 transition-transform w-full"},"+",-1)),rT=Pp(()=>ue("div",{class:"absolute bottom-0 left-0 w-full h-[1px] bg-white -translate-x-[110%] transition-transform"},null,-1)),sT={class:"tracking-widest"},oT=Lt({__name:"my-link",props:{href:{},text:{}},setup(t){return(e,n)=>e.href?(lt(),Mt("a",{key:0,href:e.href,target:"_blank",class:"items-center flex gap-2 relative w-max group md:hover:pl-4 hover:pl-3 transition-[padding] overflow-hidden md:text-[.8vw] text-[12px] lg:text-sm md:text-xs link"},[iT,rT,ue("p",sT,Ye(e.text),1)],8,nT)):xc("",!0)}}),Ea=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},as=Ea(oT,[["__scopeId","data-v-5494b4bb"]]),aT={class:"outline-1 outline md:outline-white/50 transition-[colors_outline] duration-300 md:group-hover:outline-green-500 md:group-hover:text-green-500 md:text-white/50 text-green-500 lg:px-3 px-2 md:py-1 py-[2px] rounded lg:text-sm md:text-xs text-[12px] md:leading-none"},lT=Lt({__name:"my-chip",props:{text:{}},setup(t){return(e,n)=>(lt(),Mt("div",aT,Ye(e.text),1))}}),cT={class:"xl:flex md:hidden flex gap-2 md:group-hover:text-white md:group-hover:translate-x-0 md:text-white/50 transition-[colors_translate] duration-300 sm:mt-4 mt-4 col-span-3 md:group-hover:opacity-100 md:-translate-x-[50px] md:opacity-0 sm:text-[2.2vw] text-[3vw] md:text-sm tracking-[.1vw]"},uT=ue("div",null,"+",-1),fT=Lt({__name:"my-description",props:{text:{}},setup(t){return(e,n)=>(lt(),Mt("p",cT,[uT,wt(" "+Ye(e.text[e.$i18n.locale]),1)]))}}),hT={class:"flex flex-col gap-2 mt-4 overflow-hidden tracking-wide md:mt-0 lg:gap-2 md:gap-1"},dT={class:"text-base tracking-widest xl:text-sm"},pT={class:"lg:text-4xl md:text-[4vw] text-[6vw] leading-none"},mT={class:"text-base tracking-widest xl:text-sm"},_T={class:"lg:text-4xl md:text-[4vw] text-[6vw] leading-none"},gT={class:"text-base tracking-widest xl:text-sm"},vT={class:"flex flex-wrap gap-2 pb-1 pl-1 mt-2"},xT=Lt({__name:"my-card-desc",props:{title:{},year:{},tehnologies:{},description:{},role:{}},setup(t){return(e,n)=>(lt(),Mt("div",hT,[ue("div",null,[ue("p",dT,Ye(e.$t("card.year")),1),ue("h2",pT,Ye(e.year),1)]),ue("div",null,[ue("p",mT,Ye(e.$t("card.role")),1),ue("h2",_T,Ye(e.role?e.role:"FRONTEND DEVELOPER"),1)]),ue("div",null,[ue("p",gT,Ye(e.$t("card.tehnologies")),1),ue("div",vT,[(lt(!0),Mt(mt,null,fa(e.tehnologies,(i,r)=>(lt(),lr(lT,{key:r,text:i},null,8,["text"]))),128))])]),je(fT,{text:e.description},null,8,["text"])]))}}),ET={class:"border-t-[1px] border-white md:grid flex flex-col xl:grid-cols-[1.5fr_5fr_3fr] grid-cols-[1fr_5.5fr_3fr] w-full mb-20 uppercase relative group transition-colors duration-300 hover:text-white md:text-[white]/50"},ST={class:"px-[1.5vw] pt-[1.5vw] xl:px-4 xl:pt-4 md:block hidden"},MT={class:"xl:text-lg text-[1.2vw] tracking-widest"},yT={class:"xl:text-[90px] text-[5.5vw] leading-none"},TT={class:"pt-[1.5vw] md:px-4 xl:pt-4 relative aspect-video md:border-x-[1px] border-white"},bT=ue("div",{class:"absolute top-0 left-0 w-full h-full transition-colors duration-300 md:bg-black/50 group-hover:bg-transparent"},null,-1),AT=["src","alt"],wT={class:"px-[1.5vw] pt-[1.5vw] xl:px-4 xl:pt-4"},RT=Lt({__name:"my-card",props:{project:{}},setup(t){return(e,n)=>(lt(),Mt("article",ET,[ue("div",ST,[ue("p",MT,Ye(e.project.title[e.$i18n.locale]),1),ue("h1",yT," 0"+Ye(e.project.number),1),je(as,{href:e.project.href,text:e.$t("card.visit")},null,8,["href","text"])]),ue("div",TT,[bT,ue("img",{src:e.project.video,alt:e.project.title[e.$i18n.locale],class:"object-cover w-full h-full"},null,8,AT)]),ue("div",wT,[je(xT,{title:e.project.title,year:e.project.year,description:e.project.description,tehnologies:e.project.tehnologies,role:e.project.role},null,8,["title","year","description","tehnologies","role"])])]))}}),CT="/logo-removebg.png",Io=an(!1);function Ko(){window.innerWidth<768&&(Io.value=!Io.value),Io.value?document.body.style.overflowY="hidden":document.body.style.overflowY="auto"}const LT=t=>(aa("data-v-4652c147"),t=t(),la(),t),PT={class:"flex items-center gap-8 justify-between fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-[1240px] px-8 z-[999]"},IT=LT(()=>ue("div",{class:"md:w-[75px] w-[45px] aspect-square"},[ue("img",{src:CT,alt:"Logo",class:"w-full h-full object-contain"})],-1)),NT={class:"md:hidden block text-lg tracking-widest"},DT={class:"md:flex hidden items-center gap-4"},UT={href:"#home",class:"relative before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-[2px] before:bg-white before:transition-all before:duration-300"},OT={href:"#about",class:"relative before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-[2px] before:bg-white before:transition-all before:duration-300"},FT={href:"#projects",class:"relative before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-[2px] before:bg-white before:transition-all before:duration-300"},BT={href:"#contacts",class:"relative before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-[2px] before:bg-white before:transition-all before:duration-300"},kT={class:"outline outline-[1px] outline-white flex h-max relative bg-[#0e0e0e]/75"},HT=Lt({__name:"my-nav",setup(t){return(e,n)=>(lt(),Mt("nav",PT,[ue("div",{class:"md:px-4 px-2 outline outline-1 outline-white bg-[#0e0e0e]/75 flex items-center md:cursor-auto cursor-pointer justify-between gap-4 uppercase top-8 md:w-[650px]",onClick:n[0]||(n[0]=(...i)=>Si(Ko)&&Si(Ko)(...i))},[IT,ue("p",NT,Ye(e.$t("nav.menu")),1),ue("ul",DT,[ue("a",UT,Ye(e.$t("nav.home")),1),ue("a",OT,Ye(e.$t("nav.about")),1),ue("a",FT,Ye(e.$t("nav.projects")),1),ue("a",BT,Ye(e.$t("nav.contacts")),1)])]),ue("div",kT,[ue("div",{class:"py-1 px-2 cursor-pointer text-black invert-[1] mix-blend-difference font-medium z-[5]",onClick:n[1]||(n[1]=i=>e.$i18n.locale="en")}," EN "),ue("div",{class:"py-1 px-2 cursor-pointer text-black invert-[1] mix-blend-difference font-medium z-[5]",onClick:n[2]||(n[2]=i=>e.$i18n.locale="ro")}," RO "),ue("div",{class:Rs(["absolute w-1/2 h-full bg-white top-0 transition-all",e.$i18n.locale==="en"?"translate-x-0":"translate-x-[calc(100%+1px)]"])},null,2)])]))}}),zT=Ea(HT,[["__scopeId","data-v-4652c147"]]),VT={key:0,class:"w-screen h-[100dvh] bg-[#090909] bottom-0 left-0 md:hidden flex flex-col fixed px-4 pt-20 z-[100]"},GT={class:"uppercase text-2xl mt-20"},WT=ue("br",null,null,-1),XT={class:"flex flex-col my-auto divide-y-2"},$T=["href"],YT={class:"text-4xl"},qT={class:"text-xs"},jT=ue("hr",{class:"mt-auto"},null,-1),KT=ue("div",{class:"flex items-center justify-between mb-4 py-2"},[ue("a",{href:"mailto:tofanvladit@gmail.com "},"E-MAIL"),ue("a",{href:"https://www.linkedin.com/in/vlad-tofan-349b70291/"},"LINKEDIN"),ue("a",{href:"https://discordapp.com/users/284386100829487106"},"DISCORD"),ue("a",{href:"https://github.com/TofanVlad"},"GITHUB")],-1),JT=Lt({__name:"my-menu",setup(t){const e=[{title:"nav.home",href:"#home"},{title:"nav.about",href:"#about"},{title:"nav.projects",href:"#projects"},{title:"nav.contacts",href:"#contacts"}];return(n,i)=>(lt(),lr(da,{name:"slide-fade"},{default:kn(()=>[Si(Io)?(lt(),Mt("section",VT,[ue("h1",GT,[wt(Ye(n.$t("header.welcome_1"))+" ",1),WT,wt(" "+Ye(n.$t("header.welcome_2")),1)]),ue("div",XT,[(lt(),Mt(mt,null,fa(e,(r,s)=>ue("a",{href:r.href,key:s,class:"uppercase py-4 cursor-pointer flex gap-2",onClick:i[0]||(i[0]=(...o)=>Si(Ko)&&Si(Ko)(...o))},[ue("p",YT,Ye(n.$t(r.title)),1),ue("p",qT,"0"+Ye(s+1),1)],8,$T)),64))]),jT,KT])):xc("",!0)]),_:1}))}}),ZT="/Me.jpg";function QT(t){const e=t.offsetWidth,n=t.offsetHeight,i=new xa,r=new qt(65,e/n);r.position.z=14,r.position.y=3,i.add(r);const s=new va({canvas:t,alpha:!0});s.setSize(e,n);const o=new Cp,a=new wy(16777215,1.5);i.add(a);const l=p=>{const g=new Float32Array(p*3);for(let x=0;x<p;x++)g[x]=(Math.random()-.5)*500;return g},c=new nn;c.setAttribute("position",new _n(l(3e3),3));const u=new qo({size:.05,map:o.load("/star.png"),transparent:!0}),f=new $l(c,u);i.add(f);function h(){f.rotation.y-=1e-4,s.render(i,r),requestAnimationFrame(h)}window.addEventListener("resize",()=>{t.style.width="100vw",t.style.height="100vh";const p=t.offsetWidth,g=t.offsetHeight;r.aspect=p/g,r.updateProjectionMatrix(),s.setPixelRatio(window.devicePixelRatio),s.setSize(p,g),s.render(i,r)}),h()}const eb=t=>(aa("data-v-e9eee565"),t=t(),la(),t),tb=eb(()=>ue("div",{class:"aspect-[4/5] md:max-h-[455px] max-h-[350px]"},[ue("img",{src:ZT,alt:"Tofan Vlad - Profile Picture",class:"w-full h-full object-contain md:max-h-[615px] max-h-[350px]"})],-1)),nb={class:"text-[#0e0e0e] bg-white px-8 py-4 lg:text-[3.6vw] md:text-5xl sm:text-[6.2vw] text-[5.6vw] text-center"},ib={class:"flex flex-col lg:w-[50%] xs:w-[75%] w-full xs:px-0 px-4 gap-2"},rb={class:"w-full border-b-[1px] border-white text-center lg:text-[1.6vw] text-2xl"},sb={class:"grid xs:grid-cols-4 grid-cols-2 xs:gap-8 gap-2"},ob=Lt({__name:"my-footer",setup(t){const e=an(null);return ar(()=>{e.value!==null&&QT(e.value)}),(n,i)=>(lt(),Mt(mt,null,[ue("canvas",{ref_key:"canvas",ref:e,class:"absolute top-0 left-0 w-screen h-screen pointer-events-none"},null,512),je(Ho,{class:"flex flex-col items-center justify-around pt-24 pb-12 md:pt-34 md:pb-0"},{default:kn(()=>[tb,ue("div",nb," + "+Ye(n.$t("footer.title")),1),ue("div",ib,[ue("p",rb,Ye(n.$t("footer.connect")),1),ue("div",sb,[je(as,{text:"GITHUB",href:"https://github.com/TofanVlad"}),je(as,{text:"LINKEDIN",href:"https://www.linkedin.com/in/vlad-tofan-349b70291/",class:"xs:place-self-center place-self-end"}),je(as,{text:"EMAIL",href:"mailto:tofanvladit@gmail.com",class:"xs:place-self-center"}),je(as,{text:"TELEGRAM",href:"https://t.me/tofanVlad",class:"place-self-end"})]),je(Lp,{href:"Tofan Vlad CV.pdf",download:"Tofan Vlad CV.pdf",class:"mt-4"},{default:kn(()=>[wt(Ye(n.$t("footer.download")),1)]),_:1})])]),_:1})],64))}}),ab=Ea(ob,[["__scopeId","data-v-e9eee565"]]),No=[10.136184463414924,-1.374508746897471,10.384881573913269,9.115259388985471,-1.374508746897471,8.584679279757001,9.066935570975488,-1.0665123466336568,5.893777163160816,10.151040177840205,-.6591365314493796,3.4340491740541346,10.806779203170416,1.8859391007298545,.46855774212986023,10.761433540147586,2.8724172201359197,-1.2811838605587311,9.619592310444506,2.8724172201359197,-3.2833099941904766,6.976302088915165,2.7659257976905427,-4.759195890883017,6.04612778913537,1.072704530208988,-6.663874016409048,7.347223577854479,-1.8228856326635698,-9.068504304618562,7.226367212900791,-1.8228856326635698,-10.499536640855691,5.835456669626391,-1.8228856326635698,-12.039219379199908,3.6532357452141353,-.2046398357057339,-13.87695442281038,-.30169589630131455,1.5965000671484342,-14.879986418947327,-2.8925694230502157,2.297136461442748,-13.892095587598131,-4.537672295357936,4.586351575965921,-12.140831652074551,-6.128791346411759,5.9653814634119815,-8.97765273188759,-6.012030160645281,4.4081161943856,-6.712084358394045,-5.213825215903897,2.820894808418279,-4.453282041208561,-2.342471283510961,2.203206500508626,-3.0788773693500198,-.0076956453915433265,1.8931797788880202,-1.6577070662471063,-.24767503988481437,2.8845808465856684,.07391585921422172,-2.2174044353598896,4.241552450731858,2.215992718290742,-3.4526531678364756,3.061519202334085,4.792240493209656,-3.7356278971556445,1.4054080369354316,7.843202184143463,-3.400373446380412,1.1924069108769393,9.246409088622707,-1.8851803760476225,1.5269331003449989,10.306083896408374,.01071077144031829,2.1101821577522295,10.490880699847727,.42562058195647,2.2759939598834387,11.61312943658029,.09640526218222512,.03231778408405439,16.223455375061565,2.3458797884520433,.38907275257695584,19.91188266079584,5.701840009848877,1.73337964747396,20.61548158699996,7.972093973675182,1.73337964747396,19.303399329816457,9.867236272109565,.09008301805702518,16.89333854161812,11.225959519544134,-1.374508746897471,14.279002555560753,11.288646925965876,-1.374508746897471,11.926359497447137,10.136184463414924,-1.374508746897471,10.384881573913269],Ip=[],lb=No.length;for(let t=0;t<lb;t+=3)Ip.push(new H(No[t],No[t+1],No[t+2]));const ah=new wp(Ip);function cb(t){const e=t.offsetWidth,n=t.offsetHeight,i=new xa;i.fog=new Rc(921102,.5);const r=new qt(65,e/n);r.position.z=14,r.position.y=3,i.add(r);const s=new va({canvas:t,alpha:!0});s.setSize(e,n);const o=.5,a=new jo(ah,256,o,16,!0),l=new My(a,.25),c=new bp({color:16777215}),u=new oy(l,c);i.add(u);const f=new jo(ah,256,o+.01,16,!0),h=new Ac({color:921102,side:jt}),p=new An(f,h);i.add(p);function g(_){const m=_*.05,A=10*1e3,v=m%A/A,S=a.parameters.path.getPointAt(v),P=a.parameters.path.getPointAt((v+.025)%1);r.position.copy(S),r.lookAt(P)}function x(_=0){g(_),s.render(i,r),requestAnimationFrame(x)}window.addEventListener("resize",()=>{t.style.width="100%",t.style.height="100%";const _=t.offsetWidth,m=t.offsetHeight;r.aspect=_/m,r.updateProjectionMatrix(),s.setPixelRatio(window.devicePixelRatio),s.setSize(_,m),s.render(i,r)}),x()}const ub=["Vue JS","Nuxt JS","Tailwind CSS","Three JS","API","SwiperJS","Typescript","git","SEO"],fb=[{title:{en:"Tehnoconduct",ro:"Tehnoconduct"},href:"https://tehnoconduct.md",year:2024,tehnologies:["Nuxt","Tailwind","Typescript","api"],description:{en:"Built out the frontend for tehnoconduct.md from scratch. implemented animations to enrich user experience.",ro:"Am creat frontend-ul pentru tehnoconduct.md de la zero, de asemenea am implementat animații pentru a îmbogăți experiența utilizatorului."},video:"/images/Tehnoconduct.png"},{title:{en:"Sushi",ro:"Sushi"},year:2023,href:"https://github.com/TofanVlad/Sushi",role:"FullStack DEVELOPER",tehnologies:["Vue","Typescript","api","scss"],description:{en:"My very first full-stack project that I did on my own. Implemented responsive design along with various modals.",ro:"Primul meu proiect full-stack pe care l-am făcut pe cont propriu. Am implementat design responsive împreună cu diverse funcționalități."},video:"/images/Sushi.png"},{href:"https://github.com/TofanVlad/Minesweeper",title:{en:"Minesweeper",ro:"Minesweeper"},year:2024,tehnologies:["Vue","Typescript","TailwindCSS"],description:{en:"In this project I recreated the popular game Minesweeper.",ro:"În acest proiect am recreat jocul popular Minesweeper."},video:"/images/MineSweeper.png"},{href:"https://github.com/TofanVlad/innete",title:{en:"Inette",ro:"Inette"},year:2024,tehnologies:["Vue","Typescript","TailwindCSS","AnimeJS"],description:{en:"This project is replica of real web-site inette.co.",ro:"Acest proiect este replica unui web-site real inette.co."},video:"/images/Inette.png"},{href:"https://www.arhiterra.md/ro/",title:{en:"ARHITERRA",ro:"ARHITERRA"},year:2025,tehnologies:["Nuxt","Typescript","TailwindCSS","SwiperJS"],description:{en:"Comercial project of a architecture company.",ro:"Proiect comercial a unei companii de arhitectură."},video:"/images/ARHITERRA.png"}],hb=Lt({__name:"my-cell",props:{text:{},index:{}},setup(t){return(e,n)=>(lt(),Mt("div",{class:Rs(["border-[1px] border-white bg-black/75 flex items-center justify-center lg:text-[2.2vw] sm:text-xl font-light tracking-wider uppercase",e.index===0&&"lg:col-span-1 col-span-2"])},[ue("p",null,Ye(e.text),1)],2))}}),db=t=>(aa("data-v-c126a216"),t=t(),la(),t),pb={class:"mt-32 justify-end items-center uppercase flex gap-2 xl:px-0 px-2 tracking-widest"},mb=db(()=>ue("span",{class:"text-lg"},"+",-1)),_b={class:"w-full h-[450px] border-[1px] border-white relative"},gb={key:0,class:"w-full h-full absolute top-0 left-0 grid lg:grid-cols-3 grid-cols-2 sm:p-8 p-4 lg:gap-8 gap-4 bg-black/50"},vb=Lt({__name:"my-stack",setup(t){const e=an(null),n=an(!0);return ar(()=>{e.value!==null&&cb(e.value)}),(i,r)=>(lt(),Mt(mt,null,[ue("p",pb,[mb,wt(" "+Ye(i.$t("stack.title")),1)]),ue("section",_b,[ue("canvas",{ref_key:"canvas",ref:e,class:"w-full h-full"},null,512),je(da,null,{default:kn(()=>[n.value?(lt(),Mt("div",gb,[(lt(!0),Mt(mt,null,fa(Si(ub),(s,o)=>(lt(),lr(hb,{key:o,text:s,index:o},null,8,["text","index"]))),128))])):xc("",!0)]),_:1})]),ue("button",{onClick:r[0]||(r[0]=s=>n.value=!n.value),class:"lg:text-[1.6vw] text-lg leading-none tracking-widest bg-transparent hover:bg-white border-[1px] border-white transition-colors px-4 py-2 hover:text-[#0e0e0e] text-white mb-32 mx-auto mt-4 w-max block"},Ye(n.value?i.$t("stack.button_hide"):i.$t("stack.button_show"))+" "+Ye(i.$t("stack.button")),1)],64))}}),xb=Ea(vb,[["__scopeId","data-v-c126a216"]]),Eb=ue("hr",{class:"mx-4 my-8"},null,-1),Sb={class:"relative",id:"about"},Mb=ue("hr",{class:"mb-16"},null,-1),yb={class:"justify-end items-center uppercase flex gap-2 xl:px-0 px-2 tracking-widest"},Tb=ue("span",{class:"text-lg"},"+",-1),bb=ue("hr",{class:"mb-16"},null,-1),Ab={class:"relative",id:"contacts"},wb=Lt({__name:"App",setup(t){return(e,n)=>(lt(),Mt(mt,null,[je(Ho,{tag:"header",id:"home"},{default:kn(()=>[je(zT),je(ky),je(JT,{"show-menu":!0})]),_:1}),Eb,ue("main",Sb,[je(tT)]),Mb,je(Ho,{id:"projects",class:"md:pt-44 pt-24"},{default:kn(()=>[ue("p",yb,[Tb,wt(" "+Ye(e.$t("card.selected")),1)]),(lt(!0),Mt(mt,null,fa(Si(fb),(i,r)=>(lt(),lr(RT,{key:r,project:{...i,number:r+1}},null,8,["project"]))),128)),je(xb)]),_:1}),bb,ue("footer",Ab,[je(ab)])],64))}});/*!
  * shared v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function Rb(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const Jo=typeof window<"u",Ni=(t,e=!1)=>e?Symbol.for(t):Symbol(t),Cb=(t,e,n)=>Lb({l:t,k:e,s:n}),Lb=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),vt=t=>typeof t=="number"&&isFinite(t),Pb=t=>Dp(t)==="[object Date]",Ci=t=>Dp(t)==="[object RegExp]",Sa=t=>Ue(t)&&Object.keys(t).length===0,Nt=Object.assign,Ib=Object.create,ot=(t=null)=>Ib(t);let lh;const Kn=()=>lh||(lh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:ot());function ch(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function uh(t){return t.replace(/&(?![a-zA-Z0-9#]{2,6};)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Nb(t){return t=t.replace(/(\w+)\s*=\s*"([^"]*)"/g,(i,r,s)=>`${r}="${uh(s)}"`),t=t.replace(/(\w+)\s*=\s*'([^']*)'/g,(i,r,s)=>`${r}='${uh(s)}'`),/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(t)&&(t=t.replace(/(\s+)(on)(\w+\s*=)/gi,"$1&#111;n$3")),[/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,/(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(i=>{t=t.replace(i,"$1javascript&#58;")}),t}const Db=Object.prototype.hasOwnProperty;function wn(t,e){return Db.call(t,e)}const ft=Array.isArray,at=t=>typeof t=="function",ve=t=>typeof t=="string",$e=t=>typeof t=="boolean",tt=t=>t!==null&&typeof t=="object",Ub=t=>tt(t)&&at(t.then)&&at(t.catch),Np=Object.prototype.toString,Dp=t=>Np.call(t),Ue=t=>{if(!tt(t))return!1;const e=Object.getPrototypeOf(t);return e===null||e.constructor===Object},Ob=t=>t==null?"":ft(t)||Ue(t)&&t.toString===Np?JSON.stringify(t,null,2):String(t);function Fb(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}function Ma(t){let e=t;return()=>++e}const bo=t=>!tt(t)||ft(t);function Do(t,e){if(bo(t)||bo(e))throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:i,des:r}=n.pop();Object.keys(i).forEach(s=>{s!=="__proto__"&&(tt(i[s])&&!tt(r[s])&&(r[s]=Array.isArray(i[s])?[]:ot()),bo(r[s])||bo(i[s])?r[s]=i[s]:n.push({src:i[s],des:r[s]}))})}}/*!
  * message-compiler v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function Bb(t,e,n){return{line:t,column:e,offset:n}}function Zo(t,e,n){return{start:t,end:e}}const kb=/\{([0-9a-zA-Z]+)\}/g;function Up(t,...e){return e.length===1&&Hb(e[0])&&(e=e[0]),(!e||!e.hasOwnProperty)&&(e={}),t.replace(kb,(n,i)=>e.hasOwnProperty(i)?e[i]:"")}const Op=Object.assign,fh=t=>typeof t=="string",Hb=t=>t!==null&&typeof t=="object";function Fp(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}const Ic={USE_MODULO_SYNTAX:1,__EXTEND_POINT__:2},zb={[Ic.USE_MODULO_SYNTAX]:"Use modulo before '{{0}}'."};function Vb(t,e,...n){const i=Up(zb[t],...n||[]),r={message:String(i),code:t};return e&&(r.location=e),r}const Ce={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},Gb={[Ce.EXPECTED_TOKEN]:"Expected token: '{0}'",[Ce.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[Ce.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[Ce.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[Ce.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[Ce.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[Ce.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[Ce.EMPTY_PLACEHOLDER]:"Empty placeholder",[Ce.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[Ce.INVALID_LINKED_FORMAT]:"Invalid linked format",[Ce.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[Ce.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[Ce.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[Ce.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[Ce.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[Ce.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function qr(t,e,n={}){const{domain:i,messages:r,args:s}=n,o=Up((r||Gb)[t]||"",...s||[]),a=new SyntaxError(String(o));return a.code=t,e&&(a.location=e),a.domain=i,a}function Wb(t){throw t}const $n=" ",Xb="\r",Yt=`
`,$b="\u2028",Yb="\u2029";function qb(t){const e=t;let n=0,i=1,r=1,s=0;const o=R=>e[R]===Xb&&e[R+1]===Yt,a=R=>e[R]===Yt,l=R=>e[R]===Yb,c=R=>e[R]===$b,u=R=>o(R)||a(R)||l(R)||c(R),f=()=>n,h=()=>i,p=()=>r,g=()=>s,x=R=>o(R)||l(R)||c(R)?Yt:e[R],_=()=>x(n),m=()=>x(n+s);function A(){return s=0,u(n)&&(i++,r=0),o(n)&&n++,n++,r++,e[n]}function v(){return o(n+s)&&s++,s++,e[n+s]}function S(){n=0,i=1,r=1,s=0}function P(R=0){s=R}function T(){const R=n+s;for(;R!==n;)A();s=0}return{index:f,line:h,column:p,peekOffset:g,charAt:x,currentChar:_,currentPeek:m,next:A,peek:v,reset:S,resetPeek:P,skipToPeek:T}}const di=void 0,jb=".",hh="'",Kb="tokenizer";function Jb(t,e={}){const n=e.location!==!1,i=qb(t),r=()=>i.index(),s=()=>Bb(i.line(),i.column(),i.index()),o=s(),a=r(),l={currentType:14,offset:a,startLoc:o,endLoc:o,lastType:14,lastOffset:a,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function f(d,E,C,...B){const G=c();if(E.column+=C,E.offset+=C,u){const J=n?Zo(G.startLoc,E):null,D=qr(d,J,{domain:Kb,args:B});u(D)}}function h(d,E,C){d.endLoc=s(),d.currentType=E;const B={type:E};return n&&(B.loc=Zo(d.startLoc,d.endLoc)),C!=null&&(B.value=C),B}const p=d=>h(d,14);function g(d,E){return d.currentChar()===E?(d.next(),E):(f(Ce.EXPECTED_TOKEN,s(),0,E),"")}function x(d){let E="";for(;d.currentPeek()===$n||d.currentPeek()===Yt;)E+=d.currentPeek(),d.peek();return E}function _(d){const E=x(d);return d.skipToPeek(),E}function m(d){if(d===di)return!1;const E=d.charCodeAt(0);return E>=97&&E<=122||E>=65&&E<=90||E===95}function A(d){if(d===di)return!1;const E=d.charCodeAt(0);return E>=48&&E<=57}function v(d,E){const{currentType:C}=E;if(C!==2)return!1;x(d);const B=m(d.currentPeek());return d.resetPeek(),B}function S(d,E){const{currentType:C}=E;if(C!==2)return!1;x(d);const B=d.currentPeek()==="-"?d.peek():d.currentPeek(),G=A(B);return d.resetPeek(),G}function P(d,E){const{currentType:C}=E;if(C!==2)return!1;x(d);const B=d.currentPeek()===hh;return d.resetPeek(),B}function T(d,E){const{currentType:C}=E;if(C!==8)return!1;x(d);const B=d.currentPeek()===".";return d.resetPeek(),B}function R(d,E){const{currentType:C}=E;if(C!==9)return!1;x(d);const B=m(d.currentPeek());return d.resetPeek(),B}function N(d,E){const{currentType:C}=E;if(!(C===8||C===12))return!1;x(d);const B=d.currentPeek()===":";return d.resetPeek(),B}function M(d,E){const{currentType:C}=E;if(C!==10)return!1;const B=()=>{const J=d.currentPeek();return J==="{"?m(d.peek()):J==="@"||J==="%"||J==="|"||J===":"||J==="."||J===$n||!J?!1:J===Yt?(d.peek(),B()):F(d,!1)},G=B();return d.resetPeek(),G}function y(d){x(d);const E=d.currentPeek()==="|";return d.resetPeek(),E}function V(d){const E=x(d),C=d.currentPeek()==="%"&&d.peek()==="{";return d.resetPeek(),{isModulo:C,hasSpace:E.length>0}}function F(d,E=!0){const C=(G=!1,J="",D=!1)=>{const k=d.currentPeek();return k==="{"?J==="%"?!1:G:k==="@"||!k?J==="%"?!0:G:k==="%"?(d.peek(),C(G,"%",!0)):k==="|"?J==="%"||D?!0:!(J===$n||J===Yt):k===$n?(d.peek(),C(!0,$n,D)):k===Yt?(d.peek(),C(!0,Yt,D)):!0},B=C();return E&&d.resetPeek(),B}function O(d,E){const C=d.currentChar();return C===di?di:E(C)?(d.next(),C):null}function ee(d){const E=d.charCodeAt(0);return E>=97&&E<=122||E>=65&&E<=90||E>=48&&E<=57||E===95||E===36}function ne(d){return O(d,ee)}function oe(d){const E=d.charCodeAt(0);return E>=97&&E<=122||E>=65&&E<=90||E>=48&&E<=57||E===95||E===36||E===45}function re(d){return O(d,oe)}function Y(d){const E=d.charCodeAt(0);return E>=48&&E<=57}function ce(d){return O(d,Y)}function fe(d){const E=d.charCodeAt(0);return E>=48&&E<=57||E>=65&&E<=70||E>=97&&E<=102}function ge(d){return O(d,fe)}function we(d){let E="",C="";for(;E=ce(d);)C+=E;return C}function qe(d){_(d);const E=d.currentChar();return E!=="%"&&f(Ce.EXPECTED_TOKEN,s(),0,E),d.next(),"%"}function Q(d){let E="";for(;;){const C=d.currentChar();if(C==="{"||C==="}"||C==="@"||C==="|"||!C)break;if(C==="%")if(F(d))E+=C,d.next();else break;else if(C===$n||C===Yt)if(F(d))E+=C,d.next();else{if(y(d))break;E+=C,d.next()}else E+=C,d.next()}return E}function de(d){_(d);let E="",C="";for(;E=re(d);)C+=E;return d.currentChar()===di&&f(Ce.UNTERMINATED_CLOSING_BRACE,s(),0),C}function me(d){_(d);let E="";return d.currentChar()==="-"?(d.next(),E+=`-${we(d)}`):E+=we(d),d.currentChar()===di&&f(Ce.UNTERMINATED_CLOSING_BRACE,s(),0),E}function pe(d){return d!==hh&&d!==Yt}function Ne(d){_(d),g(d,"'");let E="",C="";for(;E=O(d,pe);)E==="\\"?C+=Oe(d):C+=E;const B=d.currentChar();return B===Yt||B===di?(f(Ce.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,s(),0),B===Yt&&(d.next(),g(d,"'")),C):(g(d,"'"),C)}function Oe(d){const E=d.currentChar();switch(E){case"\\":case"'":return d.next(),`\\${E}`;case"u":return X(d,E,4);case"U":return X(d,E,6);default:return f(Ce.UNKNOWN_ESCAPE_SEQUENCE,s(),0,E),""}}function X(d,E,C){g(d,E);let B="";for(let G=0;G<C;G++){const J=ge(d);if(!J){f(Ce.INVALID_UNICODE_ESCAPE_SEQUENCE,s(),0,`\\${E}${B}${d.currentChar()}`);break}B+=J}return`\\${E}${B}`}function Je(d){return d!=="{"&&d!=="}"&&d!==$n&&d!==Yt}function L(d){_(d);let E="",C="";for(;E=O(d,Je);)C+=E;return C}function U(d){let E="",C="";for(;E=ne(d);)C+=E;return C}function I(d){const E=C=>{const B=d.currentChar();return B==="{"||B==="%"||B==="@"||B==="|"||B==="("||B===")"||!B||B===$n?C:(C+=B,d.next(),E(C))};return E("")}function W(d){_(d);const E=g(d,"|");return _(d),E}function q(d,E){let C=null;switch(d.currentChar()){case"{":return E.braceNest>=1&&f(Ce.NOT_ALLOW_NEST_PLACEHOLDER,s(),0),d.next(),C=h(E,2,"{"),_(d),E.braceNest++,C;case"}":return E.braceNest>0&&E.currentType===2&&f(Ce.EMPTY_PLACEHOLDER,s(),0),d.next(),C=h(E,3,"}"),E.braceNest--,E.braceNest>0&&_(d),E.inLinked&&E.braceNest===0&&(E.inLinked=!1),C;case"@":return E.braceNest>0&&f(Ce.UNTERMINATED_CLOSING_BRACE,s(),0),C=te(d,E)||p(E),E.braceNest=0,C;default:{let G=!0,J=!0,D=!0;if(y(d))return E.braceNest>0&&f(Ce.UNTERMINATED_CLOSING_BRACE,s(),0),C=h(E,1,W(d)),E.braceNest=0,E.inLinked=!1,C;if(E.braceNest>0&&(E.currentType===5||E.currentType===6||E.currentType===7))return f(Ce.UNTERMINATED_CLOSING_BRACE,s(),0),E.braceNest=0,ae(d,E);if(G=v(d,E))return C=h(E,5,de(d)),_(d),C;if(J=S(d,E))return C=h(E,6,me(d)),_(d),C;if(D=P(d,E))return C=h(E,7,Ne(d)),_(d),C;if(!G&&!J&&!D)return C=h(E,13,L(d)),f(Ce.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,C.value),_(d),C;break}}return C}function te(d,E){const{currentType:C}=E;let B=null;const G=d.currentChar();switch((C===8||C===9||C===12||C===10)&&(G===Yt||G===$n)&&f(Ce.INVALID_LINKED_FORMAT,s(),0),G){case"@":return d.next(),B=h(E,8,"@"),E.inLinked=!0,B;case".":return _(d),d.next(),h(E,9,".");case":":return _(d),d.next(),h(E,10,":");default:return y(d)?(B=h(E,1,W(d)),E.braceNest=0,E.inLinked=!1,B):T(d,E)||N(d,E)?(_(d),te(d,E)):R(d,E)?(_(d),h(E,12,U(d))):M(d,E)?(_(d),G==="{"?q(d,E)||B:h(E,11,I(d))):(C===8&&f(Ce.INVALID_LINKED_FORMAT,s(),0),E.braceNest=0,E.inLinked=!1,ae(d,E))}}function ae(d,E){let C={type:14};if(E.braceNest>0)return q(d,E)||p(E);if(E.inLinked)return te(d,E)||p(E);switch(d.currentChar()){case"{":return q(d,E)||p(E);case"}":return f(Ce.UNBALANCED_CLOSING_BRACE,s(),0),d.next(),h(E,3,"}");case"@":return te(d,E)||p(E);default:{if(y(d))return C=h(E,1,W(d)),E.braceNest=0,E.inLinked=!1,C;const{isModulo:G,hasSpace:J}=V(d);if(G)return J?h(E,0,Q(d)):h(E,4,qe(d));if(F(d))return h(E,0,Q(d));break}}return C}function b(){const{currentType:d,offset:E,startLoc:C,endLoc:B}=l;return l.lastType=d,l.lastOffset=E,l.lastStartLoc=C,l.lastEndLoc=B,l.offset=r(),l.startLoc=s(),i.currentChar()===di?h(l,14):ae(i,l)}return{nextToken:b,currentOffset:r,currentPosition:s,context:c}}const Zb="parser",Qb=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function eA(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||n,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function tA(t={}){const e=t.location!==!1,{onError:n,onWarn:i}=t;function r(v,S,P,T,...R){const N=v.currentPosition();if(N.offset+=T,N.column+=T,n){const M=e?Zo(P,N):null,y=qr(S,M,{domain:Zb,args:R});n(y)}}function s(v,S,P,T,...R){const N=v.currentPosition();if(N.offset+=T,N.column+=T,i){const M=e?Zo(P,N):null;i(Vb(S,M,R))}}function o(v,S,P){const T={type:v};return e&&(T.start=S,T.end=S,T.loc={start:P,end:P}),T}function a(v,S,P,T){e&&(v.end=S,v.loc&&(v.loc.end=P))}function l(v,S){const P=v.context(),T=o(3,P.offset,P.startLoc);return T.value=S,a(T,v.currentOffset(),v.currentPosition()),T}function c(v,S){const P=v.context(),{lastOffset:T,lastStartLoc:R}=P,N=o(5,T,R);return N.index=parseInt(S,10),v.nextToken(),a(N,v.currentOffset(),v.currentPosition()),N}function u(v,S,P){const T=v.context(),{lastOffset:R,lastStartLoc:N}=T,M=o(4,R,N);return M.key=S,P===!0&&(M.modulo=!0),v.nextToken(),a(M,v.currentOffset(),v.currentPosition()),M}function f(v,S){const P=v.context(),{lastOffset:T,lastStartLoc:R}=P,N=o(9,T,R);return N.value=S.replace(Qb,eA),v.nextToken(),a(N,v.currentOffset(),v.currentPosition()),N}function h(v){const S=v.nextToken(),P=v.context(),{lastOffset:T,lastStartLoc:R}=P,N=o(8,T,R);return S.type!==12?(r(v,Ce.UNEXPECTED_EMPTY_LINKED_MODIFIER,P.lastStartLoc,0),N.value="",a(N,T,R),{nextConsumeToken:S,node:N}):(S.value==null&&r(v,Ce.UNEXPECTED_LEXICAL_ANALYSIS,P.lastStartLoc,0,En(S)),N.value=S.value||"",a(N,v.currentOffset(),v.currentPosition()),{node:N})}function p(v,S){const P=v.context(),T=o(7,P.offset,P.startLoc);return T.value=S,a(T,v.currentOffset(),v.currentPosition()),T}function g(v){const S=v.context(),P=o(6,S.offset,S.startLoc);let T=v.nextToken();if(T.type===9){const R=h(v);P.modifier=R.node,T=R.nextConsumeToken||v.nextToken()}switch(T.type!==10&&r(v,Ce.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,En(T)),T=v.nextToken(),T.type===2&&(T=v.nextToken()),T.type){case 11:T.value==null&&r(v,Ce.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,En(T)),P.key=p(v,T.value||"");break;case 5:T.value==null&&r(v,Ce.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,En(T)),P.key=u(v,T.value||"");break;case 6:T.value==null&&r(v,Ce.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,En(T)),P.key=c(v,T.value||"");break;case 7:T.value==null&&r(v,Ce.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,En(T)),P.key=f(v,T.value||"");break;default:{r(v,Ce.UNEXPECTED_EMPTY_LINKED_KEY,S.lastStartLoc,0);const R=v.context(),N=o(7,R.offset,R.startLoc);return N.value="",a(N,R.offset,R.startLoc),P.key=N,a(P,R.offset,R.startLoc),{nextConsumeToken:T,node:P}}}return a(P,v.currentOffset(),v.currentPosition()),{node:P}}function x(v){const S=v.context(),P=S.currentType===1?v.currentOffset():S.offset,T=S.currentType===1?S.endLoc:S.startLoc,R=o(2,P,T);R.items=[];let N=null,M=null;do{const F=N||v.nextToken();switch(N=null,F.type){case 0:F.value==null&&r(v,Ce.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,En(F)),R.items.push(l(v,F.value||""));break;case 6:F.value==null&&r(v,Ce.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,En(F)),R.items.push(c(v,F.value||""));break;case 4:M=!0;break;case 5:F.value==null&&r(v,Ce.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,En(F)),R.items.push(u(v,F.value||"",!!M)),M&&(s(v,Ic.USE_MODULO_SYNTAX,S.lastStartLoc,0,En(F)),M=null);break;case 7:F.value==null&&r(v,Ce.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,En(F)),R.items.push(f(v,F.value||""));break;case 8:{const O=g(v);R.items.push(O.node),N=O.nextConsumeToken||null;break}}}while(S.currentType!==14&&S.currentType!==1);const y=S.currentType===1?S.lastOffset:v.currentOffset(),V=S.currentType===1?S.lastEndLoc:v.currentPosition();return a(R,y,V),R}function _(v,S,P,T){const R=v.context();let N=T.items.length===0;const M=o(1,S,P);M.cases=[],M.cases.push(T);do{const y=x(v);N||(N=y.items.length===0),M.cases.push(y)}while(R.currentType!==14);return N&&r(v,Ce.MUST_HAVE_MESSAGES_IN_PLURAL,P,0),a(M,v.currentOffset(),v.currentPosition()),M}function m(v){const S=v.context(),{offset:P,startLoc:T}=S,R=x(v);return S.currentType===14?R:_(v,P,T,R)}function A(v){const S=Jb(v,Op({},t)),P=S.context(),T=o(0,P.offset,P.startLoc);return e&&T.loc&&(T.loc.source=v),T.body=m(S),t.onCacheKey&&(T.cacheKey=t.onCacheKey(v)),P.currentType!==14&&r(S,Ce.UNEXPECTED_LEXICAL_ANALYSIS,P.lastStartLoc,0,v[P.offset]||""),a(T,S.currentOffset(),S.currentPosition()),T}return{parse:A}}function En(t){if(t.type===14)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function nA(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:s=>(n.helpers.add(s),s)}}function dh(t,e){for(let n=0;n<t.length;n++)Nc(t[n],e)}function Nc(t,e){switch(t.type){case 1:dh(t.cases,e),e.helper("plural");break;case 2:dh(t.items,e);break;case 6:{Nc(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function iA(t,e={}){const n=nA(t);n.helper("normalize"),t.body&&Nc(t.body,n);const i=n.context();t.helpers=Array.from(i.helpers)}function rA(t){const e=t.body;return e.type===2?ph(e):e.cases.forEach(n=>ph(n)),t}function ph(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const i=t.items[n];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===t.items.length){t.static=Fp(e);for(let n=0;n<t.items.length;n++){const i=t.items[n];(i.type===3||i.type===9)&&delete i.value}}}}const sA="minifier";function Ar(t){switch(t.t=t.type,t.type){case 0:{const e=t;Ar(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let i=0;i<n.length;i++)Ar(n[i]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let i=0;i<n.length;i++)Ar(n[i]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;Ar(e.key),e.k=e.key,delete e.key,e.modifier&&(Ar(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}default:throw qr(Ce.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:sA,args:[t.type]})}delete t.type}const oA="parser";function aA(t,e){const{filename:n,breakLineCode:i,needIndent:r}=e,s=e.location!==!1,o={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:r,indentLevel:0};s&&t.loc&&(o.source=t.loc.source);const a=()=>o;function l(x,_){o.code+=x}function c(x,_=!0){const m=_?i:"";l(r?m+"  ".repeat(x):m)}function u(x=!0){const _=++o.indentLevel;x&&c(_)}function f(x=!0){const _=--o.indentLevel;x&&c(_)}function h(){c(o.indentLevel)}return{context:a,push:l,indent:u,deindent:f,newline:h,helper:x=>`_${x}`,needIndent:()=>o.needIndent}}function lA(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),Vr(t,e.key),e.modifier?(t.push(", "),Vr(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function cA(t,e){const{helper:n,needIndent:i}=t;t.push(`${n("normalize")}([`),t.indent(i());const r=e.items.length;for(let s=0;s<r&&(Vr(t,e.items[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}function uA(t,e){const{helper:n,needIndent:i}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(i());const r=e.cases.length;for(let s=0;s<r&&(Vr(t,e.cases[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}}function fA(t,e){e.body?Vr(t,e.body):t.push("null")}function Vr(t,e){const{helper:n}=t;switch(e.type){case 0:fA(t,e);break;case 1:uA(t,e);break;case 2:cA(t,e);break;case 6:lA(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break;default:throw qr(Ce.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:oA,args:[e.type]})}}const hA=(t,e={})=>{const n=fh(e.mode)?e.mode:"normal",i=fh(e.filename)?e.filename:"message.intl";e.sourceMap;const r=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,s=e.needIndent?e.needIndent:n!=="arrow",o=t.helpers||[],a=aA(t,{filename:i,breakLineCode:r,needIndent:s});a.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),a.indent(s),o.length>0&&(a.push(`const { ${Fp(o.map(u=>`${u}: _${u}`),", ")} } = ctx`),a.newline()),a.push("return "),Vr(a,t),a.deindent(s),a.push("}"),delete t.helpers;const{code:l,map:c}=a.context();return{ast:t,code:l,map:c?c.toJSON():void 0}};function dA(t,e={}){const n=Op({},e),i=!!n.jit,r=!!n.minify,s=n.optimize==null?!0:n.optimize,a=tA(n).parse(t);return i?(s&&rA(a),r&&Ar(a),{ast:a,code:""}):(iA(a,n),hA(a,n))}/*!
  * core-base v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function pA(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Kn().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(Kn().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Kn().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function Fn(t){return tt(t)&&Dc(t)===0&&(wn(t,"b")||wn(t,"body"))}const Bp=["b","body"];function mA(t){return Di(t,Bp)}const kp=["c","cases"];function _A(t){return Di(t,kp,[])}const Hp=["s","static"];function gA(t){return Di(t,Hp)}const zp=["i","items"];function vA(t){return Di(t,zp,[])}const Vp=["t","type"];function Dc(t){return Di(t,Vp)}const Gp=["v","value"];function Ao(t,e){const n=Di(t,Gp);if(n!=null)return n;throw bs(e)}const Wp=["m","modifier"];function xA(t){return Di(t,Wp)}const Xp=["k","key"];function EA(t){const e=Di(t,Xp);if(e)return e;throw bs(6)}function Di(t,e,n){for(let i=0;i<e.length;i++){const r=e[i];if(wn(t,r)&&t[r]!=null)return t[r]}return n}const $p=[...Bp,...kp,...Hp,...zp,...Xp,...Wp,...Gp,...Vp];function bs(t){return new Error(`unhandled node type: ${t}`)}const Ui=[];Ui[0]={w:[0],i:[3,0],"[":[4],o:[7]};Ui[1]={w:[1],".":[2],"[":[4],o:[7]};Ui[2]={w:[2],i:[3,0],0:[3,0]};Ui[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};Ui[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};Ui[5]={"'":[4,0],o:8,l:[5,0]};Ui[6]={'"':[4,0],o:8,l:[6,0]};const SA=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function MA(t){return SA.test(t)}function yA(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function TA(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function bA(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:MA(e)?yA(e):"*"+e}function AA(t){const e=[];let n=-1,i=0,r=0,s,o,a,l,c,u,f;const h=[];h[0]=()=>{o===void 0?o=a:o+=a},h[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},h[2]=()=>{h[0](),r++},h[3]=()=>{if(r>0)r--,i=4,h[0]();else{if(r=0,o===void 0||(o=bA(o),o===!1))return!1;h[1]()}};function p(){const g=t[n+1];if(i===5&&g==="'"||i===6&&g==='"')return n++,a="\\"+g,h[0](),!0}for(;i!==null;)if(n++,s=t[n],!(s==="\\"&&p())){if(l=TA(s),f=Ui[i],c=f[l]||f.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=h[c[1]],u&&(a=s,u()===!1))))return;if(i===7)return e}}const mh=new Map;function wA(t,e){return tt(t)?t[e]:null}function RA(t,e){if(!tt(t))return null;let n=mh.get(e);if(n||(n=AA(e),n&&mh.set(e,n)),!n)return null;const i=n.length;let r=t,s=0;for(;s<i;){const o=n[s];if($p.includes(o)&&Fn(r))return null;const a=r[o];if(a===void 0||at(r))return null;r=a,s++}return r}const CA=t=>t,LA=t=>"",PA="text",IA=t=>t.length===0?"":Fb(t),NA=Ob;function _h(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function DA(t){const e=vt(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(vt(t.named.count)||vt(t.named.n))?vt(t.named.count)?t.named.count:vt(t.named.n)?t.named.n:e:e}function UA(t,e){e.count||(e.count=t),e.n||(e.n=t)}function OA(t={}){const e=t.locale,n=DA(t),i=tt(t.pluralRules)&&ve(e)&&at(t.pluralRules[e])?t.pluralRules[e]:_h,r=tt(t.pluralRules)&&ve(e)&&at(t.pluralRules[e])?_h:void 0,s=m=>m[i(n,m.length,r)],o=t.list||[],a=m=>o[m],l=t.named||ot();vt(t.pluralIndex)&&UA(n,l);const c=m=>l[m];function u(m){const A=at(t.messages)?t.messages(m):tt(t.messages)?t.messages[m]:!1;return A||(t.parent?t.parent.message(m):LA)}const f=m=>t.modifiers?t.modifiers[m]:CA,h=Ue(t.processor)&&at(t.processor.normalize)?t.processor.normalize:IA,p=Ue(t.processor)&&at(t.processor.interpolate)?t.processor.interpolate:NA,g=Ue(t.processor)&&ve(t.processor.type)?t.processor.type:PA,_={list:a,named:c,plural:s,linked:(m,...A)=>{const[v,S]=A;let P="text",T="";A.length===1?tt(v)?(T=v.modifier||T,P=v.type||P):ve(v)&&(T=v||T):A.length===2&&(ve(v)&&(T=v||T),ve(S)&&(P=S||P));const R=u(m)(_),N=P==="vnode"&&ft(R)&&T?R[0]:R;return T?f(T)(N,P):N},message:u,type:g,interpolate:p,normalize:h,values:Nt(ot(),o,l)};return _}let As=null;function FA(t){As=t}function BA(t,e,n){As&&As.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const kA=HA("function:translate");function HA(t){return e=>As&&As.emit(t,e)}const zA=Ic.__EXTEND_POINT__,Yi=Ma(zA),VA={FALLBACK_TO_TRANSLATE:Yi(),CANNOT_FORMAT_NUMBER:Yi(),FALLBACK_TO_NUMBER_FORMAT:Yi(),CANNOT_FORMAT_DATE:Yi(),FALLBACK_TO_DATE_FORMAT:Yi(),EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:Yi(),__EXTEND_POINT__:Yi()},Yp=Ce.__EXTEND_POINT__,qi=Ma(Yp),Rn={INVALID_ARGUMENT:Yp,INVALID_DATE_ARGUMENT:qi(),INVALID_ISO_DATE_ARGUMENT:qi(),NOT_SUPPORT_NON_STRING_MESSAGE:qi(),NOT_SUPPORT_LOCALE_PROMISE_VALUE:qi(),NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:qi(),NOT_SUPPORT_LOCALE_TYPE:qi(),__EXTEND_POINT__:qi()};function On(t){return qr(t,null,void 0)}function Uc(t,e){return e.locale!=null?gh(e.locale):gh(t.locale)}let Sl;function gh(t){if(ve(t))return t;if(at(t)){if(t.resolvedOnce&&Sl!=null)return Sl;if(t.constructor.name==="Function"){const e=t();if(Ub(e))throw On(Rn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Sl=e}else throw On(Rn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw On(Rn.NOT_SUPPORT_LOCALE_TYPE)}function GA(t,e,n){return[...new Set([n,...ft(e)?e:tt(e)?Object.keys(e):ve(e)?[e]:[n]])]}function qp(t,e,n){const i=ve(n)?n:Gr,r=t;r.__localeChainCache||(r.__localeChainCache=new Map);let s=r.__localeChainCache.get(i);if(!s){s=[];let o=[n];for(;ft(o);)o=vh(s,o,e);const a=ft(e)||!Ue(e)?e:e.default?e.default:null;o=ve(a)?[a]:a,ft(o)&&vh(s,o,!1),r.__localeChainCache.set(i,s)}return s}function vh(t,e,n){let i=!0;for(let r=0;r<e.length&&$e(i);r++){const s=e[r];ve(s)&&(i=WA(t,e[r],n))}return i}function WA(t,e,n){let i;const r=e.split("-");do{const s=r.join("-");i=XA(t,s,n),r.splice(-1,1)}while(r.length&&i===!0);return i}function XA(t,e,n){let i=!1;if(!t.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");t.push(r),(ft(n)||Ue(n))&&n[r]&&(i=n[r])}return i}const $A="9.14.5",ya=-1,Gr="en-US",xh="",Eh=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function YA(){return{upper:(t,e)=>e==="text"&&ve(t)?t.toUpperCase():e==="vnode"&&tt(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&ve(t)?t.toLowerCase():e==="vnode"&&tt(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&ve(t)?Eh(t):e==="vnode"&&tt(t)&&"__v_isVNode"in t?Eh(t.children):t}}let jp;function Sh(t){jp=t}let Kp;function qA(t){Kp=t}let Jp;function jA(t){Jp=t}let Zp=null;const KA=t=>{Zp=t},JA=()=>Zp;let Qp=null;const Mh=t=>{Qp=t},ZA=()=>Qp;let yh=0;function QA(t={}){const e=at(t.onWarn)?t.onWarn:Rb,n=ve(t.version)?t.version:$A,i=ve(t.locale)||at(t.locale)?t.locale:Gr,r=at(i)?Gr:i,s=ft(t.fallbackLocale)||Ue(t.fallbackLocale)||ve(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:r,o=Ue(t.messages)?t.messages:Ml(r),a=Ue(t.datetimeFormats)?t.datetimeFormats:Ml(r),l=Ue(t.numberFormats)?t.numberFormats:Ml(r),c=Nt(ot(),t.modifiers,YA()),u=t.pluralRules||ot(),f=at(t.missing)?t.missing:null,h=$e(t.missingWarn)||Ci(t.missingWarn)?t.missingWarn:!0,p=$e(t.fallbackWarn)||Ci(t.fallbackWarn)?t.fallbackWarn:!0,g=!!t.fallbackFormat,x=!!t.unresolving,_=at(t.postTranslation)?t.postTranslation:null,m=Ue(t.processor)?t.processor:null,A=$e(t.warnHtmlMessage)?t.warnHtmlMessage:!0,v=!!t.escapeParameter,S=at(t.messageCompiler)?t.messageCompiler:jp,P=at(t.messageResolver)?t.messageResolver:Kp||wA,T=at(t.localeFallbacker)?t.localeFallbacker:Jp||GA,R=tt(t.fallbackContext)?t.fallbackContext:void 0,N=t,M=tt(N.__datetimeFormatters)?N.__datetimeFormatters:new Map,y=tt(N.__numberFormatters)?N.__numberFormatters:new Map,V=tt(N.__meta)?N.__meta:{};yh++;const F={version:n,cid:yh,locale:i,fallbackLocale:s,messages:o,modifiers:c,pluralRules:u,missing:f,missingWarn:h,fallbackWarn:p,fallbackFormat:g,unresolving:x,postTranslation:_,processor:m,warnHtmlMessage:A,escapeParameter:v,messageCompiler:S,messageResolver:P,localeFallbacker:T,fallbackContext:R,onWarn:e,__meta:V};return F.datetimeFormats=a,F.numberFormats=l,F.__datetimeFormatters=M,F.__numberFormatters=y,__INTLIFY_PROD_DEVTOOLS__&&BA(F,n,V),F}const Ml=t=>({[t]:ot()});function Oc(t,e,n,i,r){const{missing:s,onWarn:o}=t;if(s!==null){const a=s(t,n,e,r);return ve(a)?a:e}else return e}function rs(t,e,n){const i=t;i.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function e1(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function t1(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let i=n+1;i<e.length;i++)if(e1(t,e[i]))return!0;return!1}function yl(t){return n=>n1(n,t)}function n1(t,e){const n=mA(e);if(n==null)throw bs(0);if(Dc(n)===1){const s=_A(n);return t.plural(s.reduce((o,a)=>[...o,Th(t,a)],[]))}else return Th(t,n)}function Th(t,e){const n=gA(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const i=vA(e).reduce((r,s)=>[...r,Yl(t,s)],[]);return t.normalize(i)}}function Yl(t,e){const n=Dc(e);switch(n){case 3:return Ao(e,n);case 9:return Ao(e,n);case 4:{const i=e;if(wn(i,"k")&&i.k)return t.interpolate(t.named(i.k));if(wn(i,"key")&&i.key)return t.interpolate(t.named(i.key));throw bs(n)}case 5:{const i=e;if(wn(i,"i")&&vt(i.i))return t.interpolate(t.list(i.i));if(wn(i,"index")&&vt(i.index))return t.interpolate(t.list(i.index));throw bs(n)}case 6:{const i=e,r=xA(i),s=EA(i);return t.linked(Yl(t,s),r?Yl(t,r):void 0,t.type)}case 7:return Ao(e,n);case 8:return Ao(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const em=t=>t;let Cr=ot();function tm(t,e={}){let n=!1;const i=e.onError||Wb;return e.onError=r=>{n=!0,i(r)},{...dA(t,e),detectError:n}}const i1=(t,e)=>{if(!ve(t))throw On(Rn.NOT_SUPPORT_NON_STRING_MESSAGE);{$e(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||em)(t),r=Cr[i];if(r)return r;const{code:s,detectError:o}=tm(t,e),a=new Function(`return ${s}`)();return o?a:Cr[i]=a}};function r1(t,e){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&ve(t)){$e(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||em)(t),r=Cr[i];if(r)return r;const{ast:s,detectError:o}=tm(t,{...e,location:!1,jit:!0}),a=yl(s);return o?a:Cr[i]=a}else{const n=t.cacheKey;if(n){const i=Cr[n];return i||(Cr[n]=yl(t))}else return yl(t)}}const bh=()=>"",hn=t=>at(t);function Ah(t,...e){const{fallbackFormat:n,postTranslation:i,unresolving:r,messageCompiler:s,fallbackLocale:o,messages:a}=t,[l,c]=ql(...e),u=$e(c.missingWarn)?c.missingWarn:t.missingWarn,f=$e(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,h=$e(c.escapeParameter)?c.escapeParameter:t.escapeParameter,p=!!c.resolvedMessage,g=ve(c.default)||$e(c.default)?$e(c.default)?s?l:()=>l:c.default:n?s?l:()=>l:"",x=n||g!=="",_=Uc(t,c);h&&s1(c);let[m,A,v]=p?[l,_,a[_]||ot()]:nm(t,l,_,o,f,u),S=m,P=l;if(!p&&!(ve(S)||Fn(S)||hn(S))&&x&&(S=g,P=S),!p&&(!(ve(S)||Fn(S)||hn(S))||!ve(A)))return r?ya:l;let T=!1;const R=()=>{T=!0},N=hn(S)?S:im(t,l,A,S,P,R);if(T)return S;const M=l1(t,A,v,c),y=OA(M),V=o1(t,N,y);let F=i?i(V,l):V;if(h&&ve(F)&&(F=Nb(F)),__INTLIFY_PROD_DEVTOOLS__){const O={timestamp:Date.now(),key:ve(l)?l:hn(S)?S.key:"",locale:A||(hn(S)?S.locale:""),format:ve(S)?S:hn(S)?S.source:"",message:F};O.meta=Nt({},t.__meta,JA()||{}),kA(O)}return F}function s1(t){ft(t.list)?t.list=t.list.map(e=>ve(e)?ch(e):e):tt(t.named)&&Object.keys(t.named).forEach(e=>{ve(t.named[e])&&(t.named[e]=ch(t.named[e]))})}function nm(t,e,n,i,r,s){const{messages:o,onWarn:a,messageResolver:l,localeFallbacker:c}=t,u=c(t,i,n);let f=ot(),h,p=null;const g="translate";for(let x=0;x<u.length&&(h=u[x],f=o[h]||ot(),(p=l(f,e))===null&&(p=f[e]),!(ve(p)||Fn(p)||hn(p)));x++)if(!t1(h,u)){const _=Oc(t,e,h,s,g);_!==e&&(p=_)}return[p,h,f]}function im(t,e,n,i,r,s){const{messageCompiler:o,warnHtmlMessage:a}=t;if(hn(i)){const c=i;return c.locale=c.locale||n,c.key=c.key||e,c}if(o==null){const c=()=>i;return c.locale=n,c.key=e,c}const l=o(i,a1(t,n,r,i,a,s));return l.locale=n,l.key=e,l.source=i,l}function o1(t,e,n){return e(n)}function ql(...t){const[e,n,i]=t,r=ot();if(!ve(e)&&!vt(e)&&!hn(e)&&!Fn(e))throw On(Rn.INVALID_ARGUMENT);const s=vt(e)?String(e):(hn(e),e);return vt(n)?r.plural=n:ve(n)?r.default=n:Ue(n)&&!Sa(n)?r.named=n:ft(n)&&(r.list=n),vt(i)?r.plural=i:ve(i)?r.default=i:Ue(i)&&Nt(r,i),[s,r]}function a1(t,e,n,i,r,s){return{locale:e,key:n,warnHtmlMessage:r,onError:o=>{throw s&&s(o),o},onCacheKey:o=>Cb(e,n,o)}}function l1(t,e,n,i){const{modifiers:r,pluralRules:s,messageResolver:o,fallbackLocale:a,fallbackWarn:l,missingWarn:c,fallbackContext:u}=t,h={locale:e,modifiers:r,pluralRules:s,messages:p=>{let g=o(n,p);if(g==null&&u){const[,,x]=nm(u,p,e,a,l,c);g=o(x,p)}if(ve(g)||Fn(g)){let x=!1;const m=im(t,p,e,g,p,()=>{x=!0});return x?bh:m}else return hn(g)?g:bh}};return t.processor&&(h.processor=t.processor),i.list&&(h.list=i.list),i.named&&(h.named=i.named),vt(i.plural)&&(h.pluralIndex=i.plural),h}function wh(t,...e){const{datetimeFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:o}=t,{__datetimeFormatters:a}=t,[l,c,u,f]=jl(...e),h=$e(u.missingWarn)?u.missingWarn:t.missingWarn;$e(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,g=Uc(t,u),x=o(t,r,g);if(!ve(l)||l==="")return new Intl.DateTimeFormat(g,f).format(c);let _={},m,A=null;const v="datetime format";for(let T=0;T<x.length&&(m=x[T],_=n[m]||{},A=_[l],!Ue(A));T++)Oc(t,l,m,h,v);if(!Ue(A)||!ve(m))return i?ya:l;let S=`${m}__${l}`;Sa(f)||(S=`${S}__${JSON.stringify(f)}`);let P=a.get(S);return P||(P=new Intl.DateTimeFormat(m,Nt({},A,f)),a.set(S,P)),p?P.formatToParts(c):P.format(c)}const rm=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function jl(...t){const[e,n,i,r]=t,s=ot();let o=ot(),a;if(ve(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw On(Rn.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(c);try{a.toISOString()}catch{throw On(Rn.INVALID_ISO_DATE_ARGUMENT)}}else if(Pb(e)){if(isNaN(e.getTime()))throw On(Rn.INVALID_DATE_ARGUMENT);a=e}else if(vt(e))a=e;else throw On(Rn.INVALID_ARGUMENT);return ve(n)?s.key=n:Ue(n)&&Object.keys(n).forEach(l=>{rm.includes(l)?o[l]=n[l]:s[l]=n[l]}),ve(i)?s.locale=i:Ue(i)&&(o=i),Ue(r)&&(o=r),[s.key||"",a,s,o]}function Rh(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__datetimeFormatters.has(s)&&i.__datetimeFormatters.delete(s)}}function Ch(t,...e){const{numberFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:o}=t,{__numberFormatters:a}=t,[l,c,u,f]=Kl(...e),h=$e(u.missingWarn)?u.missingWarn:t.missingWarn;$e(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,g=Uc(t,u),x=o(t,r,g);if(!ve(l)||l==="")return new Intl.NumberFormat(g,f).format(c);let _={},m,A=null;const v="number format";for(let T=0;T<x.length&&(m=x[T],_=n[m]||{},A=_[l],!Ue(A));T++)Oc(t,l,m,h,v);if(!Ue(A)||!ve(m))return i?ya:l;let S=`${m}__${l}`;Sa(f)||(S=`${S}__${JSON.stringify(f)}`);let P=a.get(S);return P||(P=new Intl.NumberFormat(m,Nt({},A,f)),a.set(S,P)),p?P.formatToParts(c):P.format(c)}const sm=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Kl(...t){const[e,n,i,r]=t,s=ot();let o=ot();if(!vt(e))throw On(Rn.INVALID_ARGUMENT);const a=e;return ve(n)?s.key=n:Ue(n)&&Object.keys(n).forEach(l=>{sm.includes(l)?o[l]=n[l]:s[l]=n[l]}),ve(i)?s.locale=i:Ue(i)&&(o=i),Ue(r)&&(o=r),[s.key||"",a,s,o]}function Lh(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__numberFormatters.has(s)&&i.__numberFormatters.delete(s)}}pA();/*!
  * vue-i18n v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const c1="9.14.5";function u1(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(Kn().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(Kn().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(Kn().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Kn().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Kn().__INTLIFY_PROD_DEVTOOLS__=!1)}const f1=VA.__EXTEND_POINT__,Yn=Ma(f1);Yn(),Yn(),Yn(),Yn(),Yn(),Yn(),Yn(),Yn(),Yn();const om=Rn.__EXTEND_POINT__,Qt=Ma(om),yt={UNEXPECTED_RETURN_TYPE:om,INVALID_ARGUMENT:Qt(),MUST_BE_CALL_SETUP_TOP:Qt(),NOT_INSTALLED:Qt(),NOT_AVAILABLE_IN_LEGACY_MODE:Qt(),REQUIRED_VALUE:Qt(),INVALID_VALUE:Qt(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:Qt(),NOT_INSTALLED_WITH_PROVIDE:Qt(),UNEXPECTED_ERROR:Qt(),NOT_COMPATIBLE_LEGACY_VUE_I18N:Qt(),BRIDGE_SUPPORT_VUE_2_ONLY:Qt(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:Qt(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:Qt(),__EXTEND_POINT__:Qt()};function Rt(t,...e){return qr(t,null,void 0)}const Jl=Ni("__translateVNode"),Zl=Ni("__datetimeParts"),Ql=Ni("__numberParts"),am=Ni("__setPluralRules"),lm=Ni("__injectWithOption"),ec=Ni("__dispose");function ws(t){if(!tt(t)||Fn(t))return t;for(const e in t)if(wn(t,e))if(!e.includes("."))tt(t[e])&&ws(t[e]);else{const n=e.split("."),i=n.length-1;let r=t,s=!1;for(let o=0;o<i;o++){if(n[o]==="__proto__")throw new Error(`unsafe key: ${n[o]}`);if(n[o]in r||(r[n[o]]=ot()),!tt(r[n[o]])){s=!0;break}r=r[n[o]]}if(s||(Fn(r)?$p.includes(n[i])||delete t[e]:(r[n[i]]=t[e],delete t[e])),!Fn(r)){const o=r[n[i]];tt(o)&&ws(o)}}return t}function Ta(t,e){const{messages:n,__i18n:i,messageResolver:r,flatJson:s}=e,o=Ue(n)?n:ft(i)?ot():{[t]:ot()};if(ft(i)&&i.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:c}=a;l?(o[l]=o[l]||ot(),Do(c,o[l])):Do(c,o)}else ve(a)&&Do(JSON.parse(a),o)}),r==null&&s)for(const a in o)wn(o,a)&&ws(o[a]);return o}function cm(t){return t.type}function um(t,e,n){let i=tt(e.messages)?e.messages:ot();"__i18nGlobal"in n&&(i=Ta(t.locale.value,{messages:i,__i18n:n.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(s=>{t.mergeLocaleMessage(s,i[s])});{if(tt(e.datetimeFormats)){const s=Object.keys(e.datetimeFormats);s.length&&s.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(tt(e.numberFormats)){const s=Object.keys(e.numberFormats);s.length&&s.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function Ph(t){return je(Cs,null,t,0)}const Ih="__INTLIFY_META__",Nh=()=>[],h1=()=>!1;let Dh=0;function Uh(t){return(e,n,i,r)=>t(n,i,Fr()||void 0,r)}const d1=()=>{const t=Fr();let e=null;return t&&(e=cm(t)[Ih])?{[Ih]:e}:null};function Fc(t={},e){const{__root:n,__injectWithOption:i}=t,r=n===void 0,s=t.flatJson,o=Jo?an:dd,a=!!t.translateExistCompatible;let l=$e(t.inheritLocale)?t.inheritLocale:!0;const c=o(n&&l?n.locale.value:ve(t.locale)?t.locale:Gr),u=o(n&&l?n.fallbackLocale.value:ve(t.fallbackLocale)||ft(t.fallbackLocale)||Ue(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:c.value),f=o(Ta(c.value,t)),h=o(Ue(t.datetimeFormats)?t.datetimeFormats:{[c.value]:{}}),p=o(Ue(t.numberFormats)?t.numberFormats:{[c.value]:{}});let g=n?n.missingWarn:$e(t.missingWarn)||Ci(t.missingWarn)?t.missingWarn:!0,x=n?n.fallbackWarn:$e(t.fallbackWarn)||Ci(t.fallbackWarn)?t.fallbackWarn:!0,_=n?n.fallbackRoot:$e(t.fallbackRoot)?t.fallbackRoot:!0,m=!!t.fallbackFormat,A=at(t.missing)?t.missing:null,v=at(t.missing)?Uh(t.missing):null,S=at(t.postTranslation)?t.postTranslation:null,P=n?n.warnHtmlMessage:$e(t.warnHtmlMessage)?t.warnHtmlMessage:!0,T=!!t.escapeParameter;const R=n?n.modifiers:Ue(t.modifiers)?t.modifiers:{};let N=t.pluralRules||n&&n.pluralRules,M;M=(()=>{r&&Mh(null);const D={version:c1,locale:c.value,fallbackLocale:u.value,messages:f.value,modifiers:R,pluralRules:N,missing:v===null?void 0:v,missingWarn:g,fallbackWarn:x,fallbackFormat:m,unresolving:!0,postTranslation:S===null?void 0:S,warnHtmlMessage:P,escapeParameter:T,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};D.datetimeFormats=h.value,D.numberFormats=p.value,D.__datetimeFormatters=Ue(M)?M.__datetimeFormatters:void 0,D.__numberFormatters=Ue(M)?M.__numberFormatters:void 0;const k=QA(D);return r&&Mh(k),k})(),rs(M,c.value,u.value);function V(){return[c.value,u.value,f.value,h.value,p.value]}const F=Mn({get:()=>c.value,set:D=>{c.value=D,M.locale=c.value}}),O=Mn({get:()=>u.value,set:D=>{u.value=D,M.fallbackLocale=u.value,rs(M,c.value,D)}}),ee=Mn(()=>f.value),ne=Mn(()=>h.value),oe=Mn(()=>p.value);function re(){return at(S)?S:null}function Y(D){S=D,M.postTranslation=D}function ce(){return A}function fe(D){D!==null&&(v=Uh(D)),A=D,M.missing=v}const ge=(D,k,he,ie,xe,De)=>{V();let Te;try{__INTLIFY_PROD_DEVTOOLS__,r||(M.fallbackContext=n?ZA():void 0),Te=D(M)}finally{__INTLIFY_PROD_DEVTOOLS__,r||(M.fallbackContext=void 0)}if(he!=="translate exists"&&vt(Te)&&Te===ya||he==="translate exists"&&!Te){const[Me,Fe]=k();return n&&_?ie(n):xe(Me)}else{if(De(Te))return Te;throw Rt(yt.UNEXPECTED_RETURN_TYPE)}};function we(...D){return ge(k=>Reflect.apply(Ah,null,[k,...D]),()=>ql(...D),"translate",k=>Reflect.apply(k.t,k,[...D]),k=>k,k=>ve(k))}function qe(...D){const[k,he,ie]=D;if(ie&&!tt(ie))throw Rt(yt.INVALID_ARGUMENT);return we(k,he,Nt({resolvedMessage:!0},ie||{}))}function Q(...D){return ge(k=>Reflect.apply(wh,null,[k,...D]),()=>jl(...D),"datetime format",k=>Reflect.apply(k.d,k,[...D]),()=>xh,k=>ve(k))}function de(...D){return ge(k=>Reflect.apply(Ch,null,[k,...D]),()=>Kl(...D),"number format",k=>Reflect.apply(k.n,k,[...D]),()=>xh,k=>ve(k))}function me(D){return D.map(k=>ve(k)||vt(k)||$e(k)?Ph(String(k)):k)}const Ne={normalize:me,interpolate:D=>D,type:"vnode"};function Oe(...D){return ge(k=>{let he;const ie=k;try{ie.processor=Ne,he=Reflect.apply(Ah,null,[ie,...D])}finally{ie.processor=null}return he},()=>ql(...D),"translate",k=>k[Jl](...D),k=>[Ph(k)],k=>ft(k))}function X(...D){return ge(k=>Reflect.apply(Ch,null,[k,...D]),()=>Kl(...D),"number format",k=>k[Ql](...D),Nh,k=>ve(k)||ft(k))}function Je(...D){return ge(k=>Reflect.apply(wh,null,[k,...D]),()=>jl(...D),"datetime format",k=>k[Zl](...D),Nh,k=>ve(k)||ft(k))}function L(D){N=D,M.pluralRules=N}function U(D,k){return ge(()=>{if(!D)return!1;const he=ve(k)?k:c.value,ie=q(he),xe=M.messageResolver(ie,D);return a?xe!=null:Fn(xe)||hn(xe)||ve(xe)},()=>[D],"translate exists",he=>Reflect.apply(he.te,he,[D,k]),h1,he=>$e(he))}function I(D){let k=null;const he=qp(M,u.value,c.value);for(let ie=0;ie<he.length;ie++){const xe=f.value[he[ie]]||{},De=M.messageResolver(xe,D);if(De!=null){k=De;break}}return k}function W(D){const k=I(D);return k??(n?n.tm(D)||{}:{})}function q(D){return f.value[D]||{}}function te(D,k){if(s){const he={[D]:k};for(const ie in he)wn(he,ie)&&ws(he[ie]);k=he[D]}f.value[D]=k,M.messages=f.value}function ae(D,k){f.value[D]=f.value[D]||{};const he={[D]:k};if(s)for(const ie in he)wn(he,ie)&&ws(he[ie]);k=he[D],Do(k,f.value[D]),M.messages=f.value}function b(D){return h.value[D]||{}}function d(D,k){h.value[D]=k,M.datetimeFormats=h.value,Rh(M,D,k)}function E(D,k){h.value[D]=Nt(h.value[D]||{},k),M.datetimeFormats=h.value,Rh(M,D,k)}function C(D){return p.value[D]||{}}function B(D,k){p.value[D]=k,M.numberFormats=p.value,Lh(M,D,k)}function G(D,k){p.value[D]=Nt(p.value[D]||{},k),M.numberFormats=p.value,Lh(M,D,k)}Dh++,n&&Jo&&(Nr(n.locale,D=>{l&&(c.value=D,M.locale=D,rs(M,c.value,u.value))}),Nr(n.fallbackLocale,D=>{l&&(u.value=D,M.fallbackLocale=D,rs(M,c.value,u.value))}));const J={id:Dh,locale:F,fallbackLocale:O,get inheritLocale(){return l},set inheritLocale(D){l=D,D&&n&&(c.value=n.locale.value,u.value=n.fallbackLocale.value,rs(M,c.value,u.value))},get availableLocales(){return Object.keys(f.value).sort()},messages:ee,get modifiers(){return R},get pluralRules(){return N||{}},get isGlobal(){return r},get missingWarn(){return g},set missingWarn(D){g=D,M.missingWarn=g},get fallbackWarn(){return x},set fallbackWarn(D){x=D,M.fallbackWarn=x},get fallbackRoot(){return _},set fallbackRoot(D){_=D},get fallbackFormat(){return m},set fallbackFormat(D){m=D,M.fallbackFormat=m},get warnHtmlMessage(){return P},set warnHtmlMessage(D){P=D,M.warnHtmlMessage=D},get escapeParameter(){return T},set escapeParameter(D){T=D,M.escapeParameter=D},t:we,getLocaleMessage:q,setLocaleMessage:te,mergeLocaleMessage:ae,getPostTranslationHandler:re,setPostTranslationHandler:Y,getMissingHandler:ce,setMissingHandler:fe,[am]:L};return J.datetimeFormats=ne,J.numberFormats=oe,J.rt=qe,J.te=U,J.tm=W,J.d=Q,J.n=de,J.getDateTimeFormat=b,J.setDateTimeFormat=d,J.mergeDateTimeFormat=E,J.getNumberFormat=C,J.setNumberFormat=B,J.mergeNumberFormat=G,J[lm]=i,J[Jl]=Oe,J[Zl]=Je,J[Ql]=X,J}function p1(t){const e=ve(t.locale)?t.locale:Gr,n=ve(t.fallbackLocale)||ft(t.fallbackLocale)||Ue(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,i=at(t.missing)?t.missing:void 0,r=$e(t.silentTranslationWarn)||Ci(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,s=$e(t.silentFallbackWarn)||Ci(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,o=$e(t.fallbackRoot)?t.fallbackRoot:!0,a=!!t.formatFallbackMessages,l=Ue(t.modifiers)?t.modifiers:{},c=t.pluralizationRules,u=at(t.postTranslation)?t.postTranslation:void 0,f=ve(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,h=!!t.escapeParameterHtml,p=$e(t.sync)?t.sync:!0;let g=t.messages;if(Ue(t.sharedMessages)){const T=t.sharedMessages;g=Object.keys(T).reduce((N,M)=>{const y=N[M]||(N[M]={});return Nt(y,T[M]),N},g||{})}const{__i18n:x,__root:_,__injectWithOption:m}=t,A=t.datetimeFormats,v=t.numberFormats,S=t.flatJson,P=t.translateExistCompatible;return{locale:e,fallbackLocale:n,messages:g,flatJson:S,datetimeFormats:A,numberFormats:v,missing:i,missingWarn:r,fallbackWarn:s,fallbackRoot:o,fallbackFormat:a,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:f,escapeParameter:h,messageResolver:t.messageResolver,inheritLocale:p,translateExistCompatible:P,__i18n:x,__root:_,__injectWithOption:m}}function tc(t={},e){{const n=Fc(p1(t)),{__extender:i}=t,r={id:n.id,get locale(){return n.locale.value},set locale(s){n.locale.value=s},get fallbackLocale(){return n.fallbackLocale.value},set fallbackLocale(s){n.fallbackLocale.value=s},get messages(){return n.messages.value},get datetimeFormats(){return n.datetimeFormats.value},get numberFormats(){return n.numberFormats.value},get availableLocales(){return n.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(s){},get missing(){return n.getMissingHandler()},set missing(s){n.setMissingHandler(s)},get silentTranslationWarn(){return $e(n.missingWarn)?!n.missingWarn:n.missingWarn},set silentTranslationWarn(s){n.missingWarn=$e(s)?!s:s},get silentFallbackWarn(){return $e(n.fallbackWarn)?!n.fallbackWarn:n.fallbackWarn},set silentFallbackWarn(s){n.fallbackWarn=$e(s)?!s:s},get modifiers(){return n.modifiers},get formatFallbackMessages(){return n.fallbackFormat},set formatFallbackMessages(s){n.fallbackFormat=s},get postTranslation(){return n.getPostTranslationHandler()},set postTranslation(s){n.setPostTranslationHandler(s)},get sync(){return n.inheritLocale},set sync(s){n.inheritLocale=s},get warnHtmlInMessage(){return n.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(s){n.warnHtmlMessage=s!=="off"},get escapeParameterHtml(){return n.escapeParameter},set escapeParameterHtml(s){n.escapeParameter=s},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(s){},get pluralizationRules(){return n.pluralRules||{}},__composer:n,t(...s){const[o,a,l]=s,c={};let u=null,f=null;if(!ve(o))throw Rt(yt.INVALID_ARGUMENT);const h=o;return ve(a)?c.locale=a:ft(a)?u=a:Ue(a)&&(f=a),ft(l)?u=l:Ue(l)&&(f=l),Reflect.apply(n.t,n,[h,u||f||{},c])},rt(...s){return Reflect.apply(n.rt,n,[...s])},tc(...s){const[o,a,l]=s,c={plural:1};let u=null,f=null;if(!ve(o))throw Rt(yt.INVALID_ARGUMENT);const h=o;return ve(a)?c.locale=a:vt(a)?c.plural=a:ft(a)?u=a:Ue(a)&&(f=a),ve(l)?c.locale=l:ft(l)?u=l:Ue(l)&&(f=l),Reflect.apply(n.t,n,[h,u||f||{},c])},te(s,o){return n.te(s,o)},tm(s){return n.tm(s)},getLocaleMessage(s){return n.getLocaleMessage(s)},setLocaleMessage(s,o){n.setLocaleMessage(s,o)},mergeLocaleMessage(s,o){n.mergeLocaleMessage(s,o)},d(...s){return Reflect.apply(n.d,n,[...s])},getDateTimeFormat(s){return n.getDateTimeFormat(s)},setDateTimeFormat(s,o){n.setDateTimeFormat(s,o)},mergeDateTimeFormat(s,o){n.mergeDateTimeFormat(s,o)},n(...s){return Reflect.apply(n.n,n,[...s])},getNumberFormat(s){return n.getNumberFormat(s)},setNumberFormat(s,o){n.setNumberFormat(s,o)},mergeNumberFormat(s,o){n.mergeNumberFormat(s,o)},getChoiceIndex(s,o){return-1}};return r.__extender=i,r}}const Bc={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function m1({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((i,r)=>[...i,...r.type===mt?r.children:[r]],[]):e.reduce((n,i)=>{const r=t[i];return r&&(n[i]=r()),n},ot())}function fm(t){return mt}const _1=Lt({name:"i18n-t",props:Nt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>vt(t)||!isNaN(t)}},Bc),setup(t,e){const{slots:n,attrs:i}=e,r=t.i18n||kc({useScope:t.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(f=>f!=="_"),o=ot();t.locale&&(o.locale=t.locale),t.plural!==void 0&&(o.plural=ve(t.plural)?+t.plural:t.plural);const a=m1(e,s),l=r[Jl](t.keypath,a,o),c=Nt(ot(),i),u=ve(t.tag)||tt(t.tag)?t.tag:fm();return Mc(u,c,l)}}}),Oh=_1;function g1(t){return ft(t)&&!ve(t[0])}function hm(t,e,n,i){const{slots:r,attrs:s}=e;return()=>{const o={part:!0};let a=ot();t.locale&&(o.locale=t.locale),ve(t.format)?o.key=t.format:tt(t.format)&&(ve(t.format.key)&&(o.key=t.format.key),a=Object.keys(t.format).reduce((h,p)=>n.includes(p)?Nt(ot(),h,{[p]:t.format[p]}):h,ot()));const l=i(t.value,o,a);let c=[o.key];ft(l)?c=l.map((h,p)=>{const g=r[h.type],x=g?g({[h.type]:h.value,index:p,parts:l}):[h.value];return g1(x)&&(x[0].key=`${h.type}-${p}`),x}):ve(l)&&(c=[l]);const u=Nt(ot(),s),f=ve(t.tag)||tt(t.tag)?t.tag:fm();return Mc(f,u,c)}}const v1=Lt({name:"i18n-n",props:Nt({value:{type:Number,required:!0},format:{type:[String,Object]}},Bc),setup(t,e){const n=t.i18n||kc({useScope:t.scope,__useComponent:!0});return hm(t,e,sm,(...i)=>n[Ql](...i))}}),Fh=v1,x1=Lt({name:"i18n-d",props:Nt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Bc),setup(t,e){const n=t.i18n||kc({useScope:t.scope,__useComponent:!0});return hm(t,e,rm,(...i)=>n[Zl](...i))}}),Bh=x1;function E1(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const i=n.__getInstance(e);return i!=null?i.__composer:t.global.__composer}}function S1(t){const e=o=>{const{instance:a,modifiers:l,value:c}=o;if(!a||!a.$)throw Rt(yt.UNEXPECTED_ERROR);const u=E1(t,a.$),f=kh(c);return[Reflect.apply(u.t,u,[...Hh(f)]),u]};return{created:(o,a)=>{const[l,c]=e(a);Jo&&t.global===c&&(o.__i18nWatcher=Nr(c.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=c,o.textContent=l},unmounted:o=>{Jo&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const l=o.__composer,c=kh(a);o.textContent=Reflect.apply(l.t,l,[...Hh(c)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function kh(t){if(ve(t))return{path:t};if(Ue(t)){if(!("path"in t))throw Rt(yt.REQUIRED_VALUE,"path");return t}else throw Rt(yt.INVALID_VALUE)}function Hh(t){const{path:e,locale:n,args:i,choice:r,plural:s}=t,o={},a=i||{};return ve(n)&&(o.locale=n),vt(r)&&(o.plural=r),vt(s)&&(o.plural=s),[e,a,o]}function M1(t,e,...n){const i=Ue(n[0])?n[0]:{},r=!!i.useI18nComponentName;($e(i.globalInstall)?i.globalInstall:!0)&&([r?"i18n":Oh.name,"I18nT"].forEach(o=>t.component(o,Oh)),[Fh.name,"I18nN"].forEach(o=>t.component(o,Fh)),[Bh.name,"I18nD"].forEach(o=>t.component(o,Bh))),t.directive("t",S1(e))}function y1(t,e,n){return{beforeCreate(){const i=Fr();if(!i)throw Rt(yt.UNEXPECTED_ERROR);const r=this.$options;if(r.i18n){const s=r.i18n;if(r.__i18n&&(s.__i18n=r.__i18n),s.__root=e,this===this.$root)this.$i18n=zh(t,s);else{s.__injectWithOption=!0,s.__extender=n.__vueI18nExtend,this.$i18n=tc(s);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(r.__i18n)if(this===this.$root)this.$i18n=zh(t,r);else{this.$i18n=tc({__i18n:r.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const s=this.$i18n;s.__extender&&(s.__disposer=s.__extender(this.$i18n))}else this.$i18n=t;r.__i18nGlobal&&um(e,r,r),this.$t=(...s)=>this.$i18n.t(...s),this.$rt=(...s)=>this.$i18n.rt(...s),this.$tc=(...s)=>this.$i18n.tc(...s),this.$te=(s,o)=>this.$i18n.te(s,o),this.$d=(...s)=>this.$i18n.d(...s),this.$n=(...s)=>this.$i18n.n(...s),this.$tm=s=>this.$i18n.tm(s),n.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=Fr();if(!i)throw Rt(yt.UNEXPECTED_ERROR);const r=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,r.__disposer&&(r.__disposer(),delete r.__disposer,delete r.__extender),n.__deleteInstance(i),delete this.$i18n}}}function zh(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[am](e.pluralizationRules||t.pluralizationRules);const n=Ta(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(i=>t.mergeLocaleMessage(i,n[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>t.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>t.mergeNumberFormat(i,e.numberFormats[i])),t}const T1=Ni("global-vue-i18n");function b1(t={},e){const n=__VUE_I18N_LEGACY_API__&&$e(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,i=$e(t.globalInjection)?t.globalInjection:!0,r=__VUE_I18N_LEGACY_API__&&n?!!t.allowComposition:!0,s=new Map,[o,a]=A1(t,n),l=Ni("");function c(h){return s.get(h)||null}function u(h,p){s.set(h,p)}function f(h){s.delete(h)}{const h={get mode(){return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"},get allowComposition(){return r},async install(p,...g){if(p.__VUE_I18N_SYMBOL__=l,p.provide(p.__VUE_I18N_SYMBOL__,h),Ue(g[0])){const m=g[0];h.__composerExtend=m.__composerExtend,h.__vueI18nExtend=m.__vueI18nExtend}let x=null;!n&&i&&(x=U1(p,h.global)),__VUE_I18N_FULL_INSTALL__&&M1(p,h,...g),__VUE_I18N_LEGACY_API__&&n&&p.mixin(y1(a,a.__composer,h));const _=p.unmount;p.unmount=()=>{x&&x(),h.dispose(),_()}},get global(){return a},dispose(){o.stop()},__instances:s,__getInstance:c,__setInstance:u,__deleteInstance:f};return h}}function kc(t={}){const e=Fr();if(e==null)throw Rt(yt.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw Rt(yt.NOT_INSTALLED);const n=w1(e),i=C1(n),r=cm(e),s=R1(t,r);if(__VUE_I18N_LEGACY_API__&&n.mode==="legacy"&&!t.__useComponent){if(!n.allowComposition)throw Rt(yt.NOT_AVAILABLE_IN_LEGACY_MODE);return N1(e,s,i,t)}if(s==="global")return um(i,t,r),i;if(s==="parent"){let l=L1(n,e,t.__useComponent);return l==null&&(l=i),l}const o=n;let a=o.__getInstance(e);if(a==null){const l=Nt({},t);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),a=Fc(l),o.__composerExtend&&(a[ec]=o.__composerExtend(a)),I1(o,e,a),o.__setInstance(e,a)}return a}function A1(t,e,n){const i=Lm();{const r=__VUE_I18N_LEGACY_API__&&e?i.run(()=>tc(t)):i.run(()=>Fc(t));if(r==null)throw Rt(yt.UNEXPECTED_ERROR);return[i,r]}}function w1(t){{const e=ds(t.isCE?T1:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw Rt(t.isCE?yt.NOT_INSTALLED_WITH_PROVIDE:yt.UNEXPECTED_ERROR);return e}}function R1(t,e){return Sa(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function C1(t){return t.mode==="composition"?t.global:t.global.__composer}function L1(t,e,n=!1){let i=null;const r=e.root;let s=P1(e,n);for(;s!=null;){const o=t;if(t.mode==="composition")i=o.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const a=o.__getInstance(s);a!=null&&(i=a.__composer,n&&i&&!i[lm]&&(i=null))}if(i!=null||r===s)break;s=s.parent}return i}function P1(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function I1(t,e,n){ar(()=>{},e),gc(()=>{const i=n;t.__deleteInstance(e);const r=i[ec];r&&(r(),delete i[ec])},e)}function N1(t,e,n,i={}){const r=e==="local",s=dd(null);if(r&&t.proxy&&!(t.proxy.$options.i18n||t.proxy.$options.__i18n))throw Rt(yt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const o=$e(i.inheritLocale)?i.inheritLocale:!ve(i.locale),a=an(!r||o?n.locale.value:ve(i.locale)?i.locale:Gr),l=an(!r||o?n.fallbackLocale.value:ve(i.fallbackLocale)||ft(i.fallbackLocale)||Ue(i.fallbackLocale)||i.fallbackLocale===!1?i.fallbackLocale:a.value),c=an(Ta(a.value,i)),u=an(Ue(i.datetimeFormats)?i.datetimeFormats:{[a.value]:{}}),f=an(Ue(i.numberFormats)?i.numberFormats:{[a.value]:{}}),h=r?n.missingWarn:$e(i.missingWarn)||Ci(i.missingWarn)?i.missingWarn:!0,p=r?n.fallbackWarn:$e(i.fallbackWarn)||Ci(i.fallbackWarn)?i.fallbackWarn:!0,g=r?n.fallbackRoot:$e(i.fallbackRoot)?i.fallbackRoot:!0,x=!!i.fallbackFormat,_=at(i.missing)?i.missing:null,m=at(i.postTranslation)?i.postTranslation:null,A=r?n.warnHtmlMessage:$e(i.warnHtmlMessage)?i.warnHtmlMessage:!0,v=!!i.escapeParameter,S=r?n.modifiers:Ue(i.modifiers)?i.modifiers:{},P=i.pluralRules||r&&n.pluralRules;function T(){return[a.value,l.value,c.value,u.value,f.value]}const R=Mn({get:()=>s.value?s.value.locale.value:a.value,set:I=>{s.value&&(s.value.locale.value=I),a.value=I}}),N=Mn({get:()=>s.value?s.value.fallbackLocale.value:l.value,set:I=>{s.value&&(s.value.fallbackLocale.value=I),l.value=I}}),M=Mn(()=>s.value?s.value.messages.value:c.value),y=Mn(()=>u.value),V=Mn(()=>f.value);function F(){return s.value?s.value.getPostTranslationHandler():m}function O(I){s.value&&s.value.setPostTranslationHandler(I)}function ee(){return s.value?s.value.getMissingHandler():_}function ne(I){s.value&&s.value.setMissingHandler(I)}function oe(I){return T(),I()}function re(...I){return s.value?oe(()=>Reflect.apply(s.value.t,null,[...I])):oe(()=>"")}function Y(...I){return s.value?Reflect.apply(s.value.rt,null,[...I]):""}function ce(...I){return s.value?oe(()=>Reflect.apply(s.value.d,null,[...I])):oe(()=>"")}function fe(...I){return s.value?oe(()=>Reflect.apply(s.value.n,null,[...I])):oe(()=>"")}function ge(I){return s.value?s.value.tm(I):{}}function we(I,W){return s.value?s.value.te(I,W):!1}function qe(I){return s.value?s.value.getLocaleMessage(I):{}}function Q(I,W){s.value&&(s.value.setLocaleMessage(I,W),c.value[I]=W)}function de(I,W){s.value&&s.value.mergeLocaleMessage(I,W)}function me(I){return s.value?s.value.getDateTimeFormat(I):{}}function pe(I,W){s.value&&(s.value.setDateTimeFormat(I,W),u.value[I]=W)}function Ne(I,W){s.value&&s.value.mergeDateTimeFormat(I,W)}function Oe(I){return s.value?s.value.getNumberFormat(I):{}}function X(I,W){s.value&&(s.value.setNumberFormat(I,W),f.value[I]=W)}function Je(I,W){s.value&&s.value.mergeNumberFormat(I,W)}const L={get id(){return s.value?s.value.id:-1},locale:R,fallbackLocale:N,messages:M,datetimeFormats:y,numberFormats:V,get inheritLocale(){return s.value?s.value.inheritLocale:o},set inheritLocale(I){s.value&&(s.value.inheritLocale=I)},get availableLocales(){return s.value?s.value.availableLocales:Object.keys(c.value)},get modifiers(){return s.value?s.value.modifiers:S},get pluralRules(){return s.value?s.value.pluralRules:P},get isGlobal(){return s.value?s.value.isGlobal:!1},get missingWarn(){return s.value?s.value.missingWarn:h},set missingWarn(I){s.value&&(s.value.missingWarn=I)},get fallbackWarn(){return s.value?s.value.fallbackWarn:p},set fallbackWarn(I){s.value&&(s.value.missingWarn=I)},get fallbackRoot(){return s.value?s.value.fallbackRoot:g},set fallbackRoot(I){s.value&&(s.value.fallbackRoot=I)},get fallbackFormat(){return s.value?s.value.fallbackFormat:x},set fallbackFormat(I){s.value&&(s.value.fallbackFormat=I)},get warnHtmlMessage(){return s.value?s.value.warnHtmlMessage:A},set warnHtmlMessage(I){s.value&&(s.value.warnHtmlMessage=I)},get escapeParameter(){return s.value?s.value.escapeParameter:v},set escapeParameter(I){s.value&&(s.value.escapeParameter=I)},t:re,getPostTranslationHandler:F,setPostTranslationHandler:O,getMissingHandler:ee,setMissingHandler:ne,rt:Y,d:ce,n:fe,tm:ge,te:we,getLocaleMessage:qe,setLocaleMessage:Q,mergeLocaleMessage:de,getDateTimeFormat:me,setDateTimeFormat:pe,mergeDateTimeFormat:Ne,getNumberFormat:Oe,setNumberFormat:X,mergeNumberFormat:Je};function U(I){I.locale.value=a.value,I.fallbackLocale.value=l.value,Object.keys(c.value).forEach(W=>{I.mergeLocaleMessage(W,c.value[W])}),Object.keys(u.value).forEach(W=>{I.mergeDateTimeFormat(W,u.value[W])}),Object.keys(f.value).forEach(W=>{I.mergeNumberFormat(W,f.value[W])}),I.escapeParameter=v,I.fallbackFormat=x,I.fallbackRoot=g,I.fallbackWarn=p,I.missingWarn=h,I.warnHtmlMessage=A}return Rd(()=>{if(t.proxy==null||t.proxy.$i18n==null)throw Rt(yt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const I=s.value=t.proxy.$i18n.__composer;e==="global"?(a.value=I.locale.value,l.value=I.fallbackLocale.value,c.value=I.messages.value,u.value=I.datetimeFormats.value,f.value=I.numberFormats.value):r&&U(I)}),L}const D1=["locale","fallbackLocale","availableLocales"],Vh=["t","rt","d","n","tm","te"];function U1(t,e){const n=Object.create(null);return D1.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s)throw Rt(yt.UNEXPECTED_ERROR);const o=Jt(s.value)?{get(){return s.value.value},set(a){s.value.value=a}}:{get(){return s.get&&s.get()}};Object.defineProperty(n,r,o)}),t.config.globalProperties.$i18n=n,Vh.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s||!s.value)throw Rt(yt.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${r}`,s)}),()=>{delete t.config.globalProperties.$i18n,Vh.forEach(r=>{delete t.config.globalProperties[`$${r}`]})}}u1();__INTLIFY_JIT_COMPILATION__?Sh(r1):Sh(i1);qA(RA);jA(qp);if(__INTLIFY_PROD_DEVTOOLS__){const t=Kn();t.__INTLIFY__=!0,FA(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const O1={home:"Welcome",projects:"Projects",about:"About",contacts:"Contacts",menu:"Menu"},F1={based:"BASED IN MOLDOVA",welcome_1:"WELCOME TO",welcome_2:"MY PORTFOLIO 2025",button:"OPEN TO WORK",specialize:"SPECIALIZING IN INTERACTIVE WEB EXPERIENCES"},B1={title:"ABOUT ME",title_desc:"Hi, I'm a 21 year old student from Moldova, beginning my journey in the IT industry. I'm enthusiastic and a quick learner, always open for new experiences and challenges to refine and advance my skills.",exp:"PROFESSIONAL EXPERIENCE",exp_desc:"WHILE WORKING AT TWEENYONE SRL, I DEVELOPED WEBPAGES TO MEET THE REQUESTS OF EACH CLIENT, WHILE ALSO IMPLEMENTING RESPONSIVE DESIGN.",exp_desc2:"AT TRISEIDON SRL, I IMPLEMENTED RESPONSIVE AND MODULAR DESIGN. ALSO CREATED FULL CUSTOM ANIMATED 3D SCENES USING THREE.JS & BLENDER.",education:"EDUCATION",education_web_1:"ADMINISTRATION OF WEB APPLICATIONS",education_web_2:"CENTER OF EXCELLENCE IN ECONOMICS AND FINANCE",education_utm_1:"INFORMATIONAL TECHNOLOGIES",education_utm_2:"TECHNICAL UNIVERSITY OF MOLDOVA",city:"CHISINAU"},k1={selected:"Selected Works",visit:"Visit Site",year:"Year",role:"Role",tehnologies:"Tehnologies"},H1={title:"Skills & Tehnologies",button_show:"Show",button_hide:"Hide",button:"Stack"},z1={title:"LET'S WORK TOGETHER",connect:"CONNECT ON",download:"Download CV"},V1={nav:O1,header:F1,about:B1,card:k1,stack:H1,footer:z1},G1={home:"Acasă",projects:"Proiecte",about:"Despre",contacts:"Contacte",menu:"Meniu"},W1={based:"SITUAT ÎN MOLDOVA",welcome_1:"BINE AȚI VENIT",welcome_2:"PORTOFOLIUL 2025",button:"DISPONIBIL",specialize:"SPECIALIZAT ÎN EXPERIENȚE WEB INTERACTIVE"},X1={title:"DESPRE MINE",title_desc:"Salut, sunt un student din Moldova și am 21 de ani, și-mi încep călătoria în industria IT. Sunt entuziast și sunt mereu deschis pentru noi experiențe și provocări pentru a-mi perfecționa și avansa abilitățile mele.",exp:"EXPERIENȚĂ PROFESIONALĂ",exp_desc:"Lucrând la Tweenyone SRL, am dezvoltat pagini web pentru a satisface cerințele fiecărui client, implementând în același timp un design responsive.",exp_desc2:"LA TRISEIDON SRL, AM IMPLEMENTAT DESIGN RESPONSIV ȘI MODULAR. DE ASEMENEA, AM CREAT SCENE 3D ANIMATE COMPLET PERSONALIZATE UTILIZÂND THREE.JS ȘI BLENDER.",education:"EDUCAȚIE",education_web_1:"ADMINISTRAREA APLICAȚIILOR WEB",education_web_2:"CENTRU DE EXCELENȚĂ ÎN ECONOMIE ȘI FINANȚE",education_utm_1:"TEHNOLOGII INFORMAȚIONALE",education_utm_2:"UNIVERSITATEA TEHNICĂ A MOLDOVEI",city:"CHIȘINĂU"},$1={selected:"Proiectele selectate",visit:"Vizitează",year:"Anul",role:"Rolul",tehnologies:"Tehnologii"},Y1={title:"Abilități & Tehnologii",button_show:"Arată",button_hide:"Ascunde",button:"Stack"},q1={title:"HAI SĂ LUCRĂM ÎMPREUNĂ",connect:"CONNECTEAZĂ-TE",download:"Descarcă CV"},j1={nav:G1,header:W1,about:X1,card:$1,stack:Y1,footer:q1},K1=b1({legacy:!1,locale:"en",messages:{en:V1,ro:j1}});zg(wb).use(K1).mount("#app");
