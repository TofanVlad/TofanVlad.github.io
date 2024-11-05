(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Zl(n,e){const t=new Set(n.split(","));return i=>t.has(i)}const dt={},Ar=[],hn=()=>{},im=()=>!1,jo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ql=n=>n.startsWith("onUpdate:"),Et=Object.assign,ec=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},rm=Object.prototype.hasOwnProperty,Je=(n,e)=>rm.call(n,e),Ne=Array.isArray,wr=n=>Ko(n)==="[object Map]",Bh=n=>Ko(n)==="[object Set]",He=n=>typeof n=="function",gt=n=>typeof n=="string",nr=n=>typeof n=="symbol",ft=n=>n!==null&&typeof n=="object",kh=n=>(ft(n)||He(n))&&He(n.then)&&He(n.catch),Hh=Object.prototype.toString,Ko=n=>Hh.call(n),sm=n=>Ko(n).slice(8,-1),zh=n=>Ko(n)==="[object Object]",tc=n=>gt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,rs=Zl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},om=/-(\w)/g,Un=Jo(n=>n.replace(om,(e,t)=>t?t.toUpperCase():"")),am=/\B([A-Z])/g,zr=Jo(n=>n.replace(am,"-$1").toLowerCase()),Zo=Jo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ta=Jo(n=>n?`on${Zo(n)}`:""),Si=(n,e)=>!Object.is(n,e),ba=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Vh=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},lm=n=>{const e=parseFloat(n);return isNaN(e)?n:e},cm=n=>{const e=gt(n)?Number(n):NaN;return isNaN(e)?n:e};let Wc;const Gh=()=>Wc||(Wc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nc(n){if(Ne(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=gt(i)?dm(i):nc(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(gt(n)||ft(n))return n}const um=/;(?![^(]*\))/g,fm=/:([^]+)/,hm=/\/\*[^]*?\*\//g;function dm(n){const e={};return n.replace(hm,"").split(um).forEach(t=>{if(t){const i=t.split(fm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ys(n){let e="";if(gt(n))e=n;else if(Ne(n))for(let t=0;t<n.length;t++){const i=ys(n[t]);i&&(e+=i+" ")}else if(ft(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const pm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",mm=Zl(pm);function Wh(n){return!!n||n===""}const je=n=>gt(n)?n:n==null?"":Ne(n)||ft(n)&&(n.toString===Hh||!He(n.toString))?JSON.stringify(n,Xh,2):String(n),Xh=(n,e)=>e&&e.__v_isRef?Xh(n,e.value):wr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Aa(i,s)+" =>"]=r,t),{})}:Bh(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Aa(t))}:nr(e)?Aa(e):ft(e)&&!Ne(e)&&!zh(e)?String(e):e,Aa=(n,e="")=>{var t;return nr(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let En;class $h{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=En,!e&&En&&(this.index=(En.scopes||(En.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=En;try{return En=this,e()}finally{En=t}}}on(){En=this}off(){En=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function _m(n){return new $h(n)}function gm(n,e=En){e&&e.active&&e.effects.push(n)}function vm(){return En}let Qi;class ic{constructor(e,t,i,r){this.fn=e,this.trigger=t,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,gm(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,wi();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(xm(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Ri()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=_i,t=Qi;try{return _i=!0,Qi=this,this._runnings++,Xc(this),this.fn()}finally{$c(this),this._runnings--,Qi=t,_i=e}}stop(){this.active&&(Xc(this),$c(this),this.onStop&&this.onStop(),this.active=!1)}}function xm(n){return n.value}function Xc(n){n._trackId++,n._depsLength=0}function $c(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)Yh(n.deps[e],n);n.deps.length=n._depsLength}}function Yh(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let _i=!0,El=0;const qh=[];function wi(){qh.push(_i),_i=!1}function Ri(){const n=qh.pop();_i=n===void 0?!0:n}function rc(){El++}function sc(){for(El--;!El&&Sl.length;)Sl.shift()()}function jh(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const i=n.deps[n._depsLength];i!==e?(i&&Yh(i,n),n.deps[n._depsLength++]=e):n._depsLength++}}const Sl=[];function Kh(n,e,t){rc();for(const i of n.keys()){let r;i._dirtyLevel<e&&(r??(r=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(r??(r=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&Sl.push(i.scheduler)))}sc()}const Jh=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},Ml=new WeakMap,er=Symbol(""),yl=Symbol("");function en(n,e,t){if(_i&&Qi){let i=Ml.get(n);i||Ml.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Jh(()=>i.delete(t))),jh(Qi,r)}}function qn(n,e,t,i,r,s){const o=Ml.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ne(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!nr(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ne(n)?tc(t)&&a.push(o.get("length")):(a.push(o.get(er)),wr(n)&&a.push(o.get(yl)));break;case"delete":Ne(n)||(a.push(o.get(er)),wr(n)&&a.push(o.get(yl)));break;case"set":wr(n)&&a.push(o.get(er));break}rc();for(const l of a)l&&Kh(l,4);sc()}const Em=Zl("__proto__,__v_isRef,__isVue"),Zh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(nr)),Yc=Sm();function Sm(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=tt(this);for(let s=0,o=this.length;s<o;s++)en(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(tt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){wi(),rc();const i=tt(this)[e].apply(this,t);return sc(),Ri(),i}}),n}function Mm(n){nr(n)||(n=String(n));const e=tt(this);return en(e,"has",n),e.hasOwnProperty(n)}class Qh{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Um:id:s?nd:td).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ne(e);if(!r){if(o&&Je(Yc,t))return Reflect.get(Yc,t,i);if(t==="hasOwnProperty")return Mm}const a=Reflect.get(e,t,i);return(nr(t)?Zh.has(t):Em(t))||(r||en(e,"get",t),s)?a:Kt(a)?o&&tc(t)?a:a.value:ft(a)?r?rd(a):lc(a):a}}class ed extends Qh{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=ds(s);if(!Lo(i)&&!ds(i)&&(s=tt(s),i=tt(i)),!Ne(e)&&Kt(s)&&!Kt(i))return l?!1:(s.value=i,!0)}const o=Ne(e)&&tc(t)?Number(t)<e.length:Je(e,t),a=Reflect.set(e,t,i,r);return e===tt(r)&&(o?Si(i,s)&&qn(e,"set",t,i):qn(e,"add",t,i)),a}deleteProperty(e,t){const i=Je(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&qn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!nr(t)||!Zh.has(t))&&en(e,"has",t),i}ownKeys(e){return en(e,"iterate",Ne(e)?"length":er),Reflect.ownKeys(e)}}class ym extends Qh{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Tm=new ed,bm=new ym,Am=new ed(!0);const oc=n=>n,Qo=n=>Reflect.getPrototypeOf(n);function Us(n,e,t=!1,i=!1){n=n.__v_raw;const r=tt(n),s=tt(e);t||(Si(e,s)&&en(r,"get",e),en(r,"get",s));const{has:o}=Qo(r),a=i?oc:t?uc:ps;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function Os(n,e=!1){const t=this.__v_raw,i=tt(t),r=tt(n);return e||(Si(n,r)&&en(i,"has",n),en(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Fs(n,e=!1){return n=n.__v_raw,!e&&en(tt(n),"iterate",er),Reflect.get(n,"size",n)}function qc(n){n=tt(n);const e=tt(this);return Qo(e).has.call(e,n)||(e.add(n),qn(e,"add",n,n)),this}function jc(n,e){e=tt(e);const t=tt(this),{has:i,get:r}=Qo(t);let s=i.call(t,n);s||(n=tt(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?Si(e,o)&&qn(t,"set",n,e):qn(t,"add",n,e),this}function Kc(n){const e=tt(this),{has:t,get:i}=Qo(e);let r=t.call(e,n);r||(n=tt(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&qn(e,"delete",n,void 0),s}function Jc(){const n=tt(this),e=n.size!==0,t=n.clear();return e&&qn(n,"clear",void 0,void 0),t}function Bs(n,e){return function(i,r){const s=this,o=s.__v_raw,a=tt(o),l=e?oc:n?uc:ps;return!n&&en(a,"iterate",er),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function ks(n,e,t){return function(...i){const r=this.__v_raw,s=tt(r),o=wr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?oc:e?uc:ps;return!e&&en(s,"iterate",l?yl:er),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function ei(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function wm(){const n={get(s){return Us(this,s)},get size(){return Fs(this)},has:Os,add:qc,set:jc,delete:Kc,clear:Jc,forEach:Bs(!1,!1)},e={get(s){return Us(this,s,!1,!0)},get size(){return Fs(this)},has:Os,add:qc,set:jc,delete:Kc,clear:Jc,forEach:Bs(!1,!0)},t={get(s){return Us(this,s,!0)},get size(){return Fs(this,!0)},has(s){return Os.call(this,s,!0)},add:ei("add"),set:ei("set"),delete:ei("delete"),clear:ei("clear"),forEach:Bs(!0,!1)},i={get(s){return Us(this,s,!0,!0)},get size(){return Fs(this,!0)},has(s){return Os.call(this,s,!0)},add:ei("add"),set:ei("set"),delete:ei("delete"),clear:ei("clear"),forEach:Bs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ks(s,!1,!1),t[s]=ks(s,!0,!1),e[s]=ks(s,!1,!0),i[s]=ks(s,!0,!0)}),[n,t,e,i]}const[Rm,Cm,Lm,Pm]=wm();function ac(n,e){const t=e?n?Pm:Lm:n?Cm:Rm;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Je(t,r)&&r in i?t:i,r,s)}const Im={get:ac(!1,!1)},Nm={get:ac(!1,!0)},Dm={get:ac(!0,!1)};const td=new WeakMap,nd=new WeakMap,id=new WeakMap,Um=new WeakMap;function Om(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fm(n){return n.__v_skip||!Object.isExtensible(n)?0:Om(sm(n))}function lc(n){return ds(n)?n:cc(n,!1,Tm,Im,td)}function Bm(n){return cc(n,!1,Am,Nm,nd)}function rd(n){return cc(n,!0,bm,Dm,id)}function cc(n,e,t,i,r){if(!ft(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Fm(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function ss(n){return ds(n)?ss(n.__v_raw):!!(n&&n.__v_isReactive)}function ds(n){return!!(n&&n.__v_isReadonly)}function Lo(n){return!!(n&&n.__v_isShallow)}function sd(n){return n?!!n.__v_raw:!1}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function km(n){return Object.isExtensible(n)&&Vh(n,"__v_skip",!0),n}const ps=n=>ft(n)?lc(n):n,uc=n=>ft(n)?rd(n):n;class od{constructor(e,t,i,r){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ic(()=>e(this._value),()=>So(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=tt(this);return(!e._cacheable||e.effect.dirty)&&Si(e._value,e._value=e.effect.run())&&So(e,4),ad(e),e.effect._dirtyLevel>=2&&So(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Hm(n,e,t=!1){let i,r;const s=He(n);return s?(i=n,r=hn):(i=n.get,r=n.set),new od(i,r,s||!r,t)}function ad(n){var e;_i&&Qi&&(n=tt(n),jh(Qi,(e=n.dep)!=null?e:n.dep=Jh(()=>n.dep=void 0,n instanceof od?n:void 0)))}function So(n,e=4,t){n=tt(n);const i=n.dep;i&&Kh(i,e)}function Kt(n){return!!(n&&n.__v_isRef===!0)}function on(n){return cd(n,!1)}function ld(n){return cd(n,!0)}function cd(n,e){return Kt(n)?n:new zm(n,e)}class zm{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:tt(e),this._value=t?e:ps(e)}get value(){return ad(this),this._value}set value(e){const t=this.__v_isShallow||Lo(e)||ds(e);e=t?e:tt(e),Si(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:ps(e),So(this,4))}}function gi(n){return Kt(n)?n.value:n}const Vm={get:(n,e,t)=>gi(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Kt(r)&&!Kt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function ud(n){return ss(n)?n:new Proxy(n,Vm)}/**
* @vue/runtime-core v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vi(n,e,t,i){try{return i?n(...i):n()}catch(r){ea(r,e,t)}}function pn(n,e,t,i){if(He(n)){const r=vi(n,e,t,i);return r&&kh(r)&&r.catch(s=>{ea(s,e,t)}),r}if(Ne(n)){const r=[];for(let s=0;s<n.length;s++)r.push(pn(n[s],e,t,i));return r}}function ea(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){wi(),vi(l,null,10,[n,o,a]),Ri();return}}Gm(n,t,r,i)}function Gm(n,e,t,i=!0){console.error(n)}let ms=!1,Tl=!1;const Bt=[];let In=0;const Rr=[];let ui=null,Yi=0;const fd=Promise.resolve();let fc=null;function Wm(n){const e=fc||fd;return n?e.then(this?n.bind(this):n):e}function Xm(n){let e=In+1,t=Bt.length;for(;e<t;){const i=e+t>>>1,r=Bt[i],s=_s(r);s<n||s===n&&r.pre?e=i+1:t=i}return e}function hc(n){(!Bt.length||!Bt.includes(n,ms&&n.allowRecurse?In+1:In))&&(n.id==null?Bt.push(n):Bt.splice(Xm(n.id),0,n),hd())}function hd(){!ms&&!Tl&&(Tl=!0,fc=fd.then(pd))}function $m(n){const e=Bt.indexOf(n);e>In&&Bt.splice(e,1)}function Ym(n){Ne(n)?Rr.push(...n):(!ui||!ui.includes(n,n.allowRecurse?Yi+1:Yi))&&Rr.push(n),hd()}function Zc(n,e,t=ms?In+1:0){for(;t<Bt.length;t++){const i=Bt[t];if(i&&i.pre){if(n&&i.id!==n.uid)continue;Bt.splice(t,1),t--,i()}}}function dd(n){if(Rr.length){const e=[...new Set(Rr)].sort((t,i)=>_s(t)-_s(i));if(Rr.length=0,ui){ui.push(...e);return}for(ui=e,Yi=0;Yi<ui.length;Yi++)ui[Yi]();ui=null,Yi=0}}const _s=n=>n.id==null?1/0:n.id,qm=(n,e)=>{const t=_s(n)-_s(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function pd(n){Tl=!1,ms=!0,Bt.sort(qm);try{for(In=0;In<Bt.length;In++){const e=Bt[In];e&&e.active!==!1&&vi(e,null,14)}}finally{In=0,Bt.length=0,dd(),ms=!1,fc=null,(Bt.length||Rr.length)&&pd()}}function jm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||dt;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||dt;h&&(r=t.map(m=>gt(m)?m.trim():m)),f&&(r=t.map(lm))}let a,l=i[a=Ta(e)]||i[a=Ta(Un(e))];!l&&s&&(l=i[a=Ta(zr(e))]),l&&pn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,pn(c,n,6,r)}}function md(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!He(n)){const l=c=>{const u=md(c,e,!0);u&&(a=!0,Et(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ft(n)&&i.set(n,null),null):(Ne(s)?s.forEach(l=>o[l]=null):Et(o,s),ft(n)&&i.set(n,o),o)}function ta(n,e){return!n||!jo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Je(n,e[0].toLowerCase()+e.slice(1))||Je(n,zr(e))||Je(n,e))}let kt=null,na=null;function Po(n){const e=kt;return kt=n,na=n&&n.type.__scopeId||null,e}function ia(n){na=n}function ra(){na=null}function Mi(n,e=kt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&uu(-1);const s=Po(e);let o;try{o=n(...r)}finally{Po(s),i._d&&uu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function wa(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:m,ctx:g,inheritAttrs:x}=n,_=Po(n);let p,R;try{if(t.shapeFlag&4){const S=r||i,P=S;p=Ln(c.call(P,S,u,f,m,h,g)),R=a}else{const S=e;p=Ln(S.length>1?S(f,{attrs:a,slots:o,emit:l}):S(f,null)),R=e.props?a:Km(a)}}catch(S){us.length=0,ea(S,n,1),p=Qe(an)}let v=p;if(R&&x!==!1){const S=Object.keys(R),{shapeFlag:P}=v;S.length&&P&7&&(s&&S.some(Ql)&&(R=Jm(R,s)),v=yi(v,R,!1,!0))}return t.dirs&&(v=yi(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&(v.transition=t.transition),p=v,Po(_),p}const Km=n=>{let e;for(const t in n)(t==="class"||t==="style"||jo(t))&&((e||(e={}))[t]=n[t]);return e},Jm=(n,e)=>{const t={};for(const i in n)(!Ql(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Zm(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Qc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!ta(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Qc(i,o,c):!0:!!o;return!1}function Qc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!ta(t,s))return!0}return!1}function Qm({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const e_="components",_d=Symbol.for("v-ndc");function t_(n){return gt(n)?n_(e_,n,!1)||n:n||_d}function n_(n,e,t=!0,i=!1){const r=kt||Rt;if(r){const s=r.type;{const a=J_(s,!1);if(a&&(a===e||a===Un(e)||a===Zo(Un(e))))return s}const o=eu(r[n]||s[n],e)||eu(r.appContext[n],e);return!o&&i?s:o}}function eu(n,e){return n&&(n[e]||n[Un(e)]||n[Zo(Un(e))])}const i_=n=>n.__isSuspense;function r_(n,e){e&&e.pendingBranch?Ne(n)?e.effects.push(...n):e.effects.push(n):Ym(n)}const s_=Symbol.for("v-scx"),o_=()=>cs(s_),Hs={};function Cr(n,e,t){return gd(n,e,t)}function gd(n,e,{immediate:t,deep:i,flush:r,once:s,onTrack:o,onTrigger:a}=dt){if(e&&s){const T=e;e=(...L)=>{T(...L),P()}}const l=Rt,c=T=>i===!0?T:yr(T,i===!1?1:void 0);let u,f=!1,h=!1;if(Kt(n)?(u=()=>n.value,f=Lo(n)):ss(n)?(u=()=>c(n),f=!0):Ne(n)?(h=!0,f=n.some(T=>ss(T)||Lo(T)),u=()=>n.map(T=>{if(Kt(T))return T.value;if(ss(T))return c(T);if(He(T))return vi(T,l,2)})):He(n)?e?u=()=>vi(n,l,2):u=()=>(m&&m(),pn(n,l,3,[g])):u=hn,e&&i){const T=u;u=()=>yr(T())}let m,g=T=>{m=v.onStop=()=>{vi(T,l,4),m=v.onStop=void 0}},x;if(la)if(g=hn,e?t&&pn(e,l,3,[u(),h?[]:void 0,g]):u(),r==="sync"){const T=o_();x=T.__watcherHandles||(T.__watcherHandles=[])}else return hn;let _=h?new Array(n.length).fill(Hs):Hs;const p=()=>{if(!(!v.active||!v.dirty))if(e){const T=v.run();(i||f||(h?T.some((L,D)=>Si(L,_[D])):Si(T,_)))&&(m&&m(),pn(e,l,3,[T,_===Hs?void 0:h&&_[0]===Hs?[]:_,g]),_=T)}else v.run()};p.allowRecurse=!!e;let R;r==="sync"?R=p:r==="post"?R=()=>Qt(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),R=()=>hc(p));const v=new ic(u,hn,R),S=vm(),P=()=>{v.stop(),S&&ec(S.effects,v)};return e?t?p():_=v.run():r==="post"?Qt(v.run.bind(v),l&&l.suspense):v.run(),x&&x.push(P),P}function a_(n,e,t){const i=this.proxy,r=gt(n)?n.includes(".")?vd(i,n):()=>i[n]:n.bind(i,i);let s;He(e)?s=e:(s=e.handler,t=e);const o=bs(this),a=gd(r,s.bind(i),t);return o(),a}function vd(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function yr(n,e=1/0,t){if(e<=0||!ft(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Kt(n))yr(n.value,e,t);else if(Ne(n))for(let i=0;i<n.length;i++)yr(n[i],e,t);else if(Bh(n)||wr(n))n.forEach(i=>{yr(i,e,t)});else if(zh(n))for(const i in n)yr(n[i],e,t);return n}function Ni(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(wi(),pn(l,t,8,[n.el,a,n,e]),Ri())}}const fi=Symbol("_leaveCb"),zs=Symbol("_enterCb");function l_(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ir(()=>{n.isMounted=!0}),Td(()=>{n.isUnmounting=!0}),n}const cn=[Function,Array],xd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:cn,onEnter:cn,onAfterEnter:cn,onEnterCancelled:cn,onBeforeLeave:cn,onLeave:cn,onAfterLeave:cn,onLeaveCancelled:cn,onBeforeAppear:cn,onAppear:cn,onAfterAppear:cn,onAppearCancelled:cn},c_={name:"BaseTransition",props:xd,setup(n,{slots:e}){const t=Nr(),i=l_();return()=>{const r=e.default&&Sd(e.default(),!0);if(!r||!r.length)return;let s=r[0];if(r.length>1){for(const h of r)if(h.type!==an){s=h;break}}const o=tt(n),{mode:a}=o;if(i.isLeaving)return Ra(s);const l=tu(s);if(!l)return Ra(s);const c=bl(l,o,i,t);Al(l,c);const u=t.subTree,f=u&&tu(u);if(f&&f.type!==an&&!qi(l,f)){const h=bl(f,o,i,t);if(Al(f,h),a==="out-in"&&l.type!==an)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&(t.effect.dirty=!0,t.update())},Ra(s);a==="in-out"&&l.type!==an&&(h.delayLeave=(m,g,x)=>{const _=Ed(i,f);_[String(f.key)]=f,m[fi]=()=>{g(),m[fi]=void 0,delete c.delayedLeave},c.delayedLeave=x})}return s}}},u_=c_;function Ed(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function bl(n,e,t,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:x,onAppear:_,onAfterAppear:p,onAppearCancelled:R}=e,v=String(n.key),S=Ed(t,n),P=(D,M)=>{D&&pn(D,i,9,M)},T=(D,M)=>{const y=M[1];P(D,M),Ne(D)?D.every(V=>V.length<=1)&&y():D.length<=1&&y()},L={mode:s,persisted:o,beforeEnter(D){let M=a;if(!t.isMounted)if(r)M=x||a;else return;D[fi]&&D[fi](!0);const y=S[v];y&&qi(n,y)&&y.el[fi]&&y.el[fi](),P(M,[D])},enter(D){let M=l,y=c,V=u;if(!t.isMounted)if(r)M=_||l,y=p||c,V=R||u;else return;let B=!1;const O=D[zs]=ee=>{B||(B=!0,ee?P(V,[D]):P(y,[D]),L.delayedLeave&&L.delayedLeave(),D[zs]=void 0)};M?T(M,[D,O]):O()},leave(D,M){const y=String(n.key);if(D[zs]&&D[zs](!0),t.isUnmounting)return M();P(f,[D]);let V=!1;const B=D[fi]=O=>{V||(V=!0,M(),O?P(g,[D]):P(m,[D]),D[fi]=void 0,S[y]===n&&delete S[y])};S[y]=n,h?T(h,[D,B]):B()},clone(D){return bl(D,e,t,i)}};return L}function Ra(n){if(sa(n))return n=yi(n),n.children=null,n}function tu(n){if(!sa(n))return n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&He(t.default))return t.default()}}function Al(n,e){n.shapeFlag&6&&n.component?Al(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Sd(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===pt?(o.patchFlag&128&&r++,i=i.concat(Sd(o.children,e,a))):(e||o.type!==an)&&i.push(a!=null?yi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Pt(n,e){return He(n)?Et({name:n.name},e,{setup:n}):n}const os=n=>!!n.type.__asyncLoader,sa=n=>n.type.__isKeepAlive;function f_(n,e){Md(n,"a",e)}function h_(n,e){Md(n,"da",e)}function Md(n,e,t=Rt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(oa(e,i,t),t){let r=t.parent;for(;r&&r.parent;)sa(r.parent.vnode)&&d_(i,e,t,r),r=r.parent}}function d_(n,e,t,i){const r=oa(e,n,i,!0);dc(()=>{ec(i[e],r)},t)}function oa(n,e,t=Rt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;wi();const a=bs(t),l=pn(e,t,n,o);return a(),Ri(),l});return i?r.unshift(s):r.push(s),s}}const Jn=n=>(e,t=Rt)=>(!la||n==="sp")&&oa(n,(...i)=>e(...i),t),yd=Jn("bm"),ir=Jn("m"),p_=Jn("bu"),m_=Jn("u"),Td=Jn("bum"),dc=Jn("um"),__=Jn("sp"),g_=Jn("rtg"),v_=Jn("rtc");function x_(n,e=Rt){oa("ec",n,e)}function aa(n,e,t,i){let r;const s=t;if(Ne(n)||gt(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=e(n[o],o,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(ft(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>e(o,a,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(n[c],c,a,s)}}else r=[];return r}function E_(n,e,t={},i,r){if(kt.isCE||kt.parent&&os(kt.parent)&&kt.parent.isCE)return Qe("slot",t,i);let s=n[e];s&&s._c&&(s._d=!1),ct();const o=s&&bd(s(t)),a=rr(pt,{key:t.key||o&&o.key||`_${e}`},o||[],o&&n._===1?64:-2);return a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function bd(n){return n.some(e=>No(e)?!(e.type===an||e.type===pt&&!bd(e.children)):!0)?n:null}const wl=n=>n?Hd(n)?vc(n)||n.proxy:wl(n.parent):null,as=Et(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>wl(n.parent),$root:n=>wl(n.root),$emit:n=>n.emit,$options:n=>pc(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,hc(n.update)}),$nextTick:n=>n.n||(n.n=Wm.bind(n.proxy)),$watch:n=>a_.bind(n)}),Ca=(n,e)=>n!==dt&&!n.__isScriptSetup&&Je(n,e),S_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ca(i,e))return o[e]=1,i[e];if(r!==dt&&Je(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&Je(c,e))return o[e]=3,s[e];if(t!==dt&&Je(t,e))return o[e]=4,t[e];Rl&&(o[e]=0)}}const u=as[e];let f,h;if(u)return e==="$attrs"&&en(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==dt&&Je(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Je(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Ca(r,e)?(r[e]=t,!0):i!==dt&&Je(i,e)?(i[e]=t,!0):Je(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==dt&&Je(n,o)||Ca(e,o)||(a=s[0])&&Je(a,o)||Je(i,o)||Je(as,o)||Je(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Je(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function nu(n){return Ne(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Rl=!0;function M_(n){const e=pc(n),t=n.proxy,i=n.ctx;Rl=!1,e.beforeCreate&&iu(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:g,activated:x,deactivated:_,beforeDestroy:p,beforeUnmount:R,destroyed:v,unmounted:S,render:P,renderTracked:T,renderTriggered:L,errorCaptured:D,serverPrefetch:M,expose:y,inheritAttrs:V,components:B,directives:O,filters:ee}=e;if(c&&y_(c,i,null),o)for(const ie in o){const $=o[ie];He($)&&(i[ie]=$.bind(t))}if(r){const ie=r.call(t,t);ft(ie)&&(n.data=lc(ie))}if(Rl=!0,s)for(const ie in s){const $=s[ie],ce=He($)?$.bind(t,t):He($.get)?$.get.bind(t,t):hn,ue=!He($)&&He($.set)?$.set.bind(t):hn,ge=Sn({get:ce,set:ue});Object.defineProperty(i,ie,{enumerable:!0,configurable:!0,get:()=>ge.value,set:we=>ge.value=we})}if(a)for(const ie in a)Ad(a[ie],i,t,ie);if(l){const ie=He(l)?l.call(t):l;Reflect.ownKeys(ie).forEach($=>{C_($,ie[$])})}u&&iu(u,n,"c");function se(ie,$){Ne($)?$.forEach(ce=>ie(ce.bind(t))):$&&ie($.bind(t))}if(se(yd,f),se(ir,h),se(p_,m),se(m_,g),se(f_,x),se(h_,_),se(x_,D),se(v_,T),se(g_,L),se(Td,R),se(dc,S),se(__,M),Ne(y))if(y.length){const ie=n.exposed||(n.exposed={});y.forEach($=>{Object.defineProperty(ie,$,{get:()=>t[$],set:ce=>t[$]=ce})})}else n.exposed||(n.exposed={});P&&n.render===hn&&(n.render=P),V!=null&&(n.inheritAttrs=V),B&&(n.components=B),O&&(n.directives=O)}function y_(n,e,t=hn){Ne(n)&&(n=Cl(n));for(const i in n){const r=n[i];let s;ft(r)?"default"in r?s=cs(r.from||i,r.default,!0):s=cs(r.from||i):s=cs(r),Kt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function iu(n,e,t){pn(Ne(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ad(n,e,t,i){const r=i.includes(".")?vd(t,i):()=>t[i];if(gt(n)){const s=e[n];He(s)&&Cr(r,s)}else if(He(n))Cr(r,n.bind(t));else if(ft(n))if(Ne(n))n.forEach(s=>Ad(s,e,t,i));else{const s=He(n.handler)?n.handler.bind(t):e[n.handler];He(s)&&Cr(r,s,n)}}function pc(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Io(l,c,o,!0)),Io(l,e,o)),ft(e)&&s.set(e,l),l}function Io(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Io(n,s,t,!0),r&&r.forEach(o=>Io(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=T_[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const T_={data:ru,props:su,emits:su,methods:ns,computed:ns,beforeCreate:Gt,created:Gt,beforeMount:Gt,mounted:Gt,beforeUpdate:Gt,updated:Gt,beforeDestroy:Gt,beforeUnmount:Gt,destroyed:Gt,unmounted:Gt,activated:Gt,deactivated:Gt,errorCaptured:Gt,serverPrefetch:Gt,components:ns,directives:ns,watch:A_,provide:ru,inject:b_};function ru(n,e){return e?n?function(){return Et(He(n)?n.call(this,this):n,He(e)?e.call(this,this):e)}:e:n}function b_(n,e){return ns(Cl(n),Cl(e))}function Cl(n){if(Ne(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Gt(n,e){return n?[...new Set([].concat(n,e))]:e}function ns(n,e){return n?Et(Object.create(null),n,e):e}function su(n,e){return n?Ne(n)&&Ne(e)?[...new Set([...n,...e])]:Et(Object.create(null),nu(n),nu(e??{})):e}function A_(n,e){if(!n)return e;if(!e)return n;const t=Et(Object.create(null),n);for(const i in e)t[i]=Gt(n[i],e[i]);return t}function wd(){return{app:null,config:{isNativeTag:im,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let w_=0;function R_(n,e){return function(i,r=null){He(i)||(i=Et({},i)),r!=null&&!ft(r)&&(r=null);const s=wd(),o=new WeakSet;let a=!1;const l=s.app={_uid:w_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Q_,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&He(c.install)?(o.add(c),c.install(l,...u)):He(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=Qe(i,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(h,c):n(h,c,f),a=!0,l._container=c,c.__vue_app__=l,vc(h.component)||h.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=ls;ls=l;try{return c()}finally{ls=u}}};return l}}let ls=null;function C_(n,e){if(Rt){let t=Rt.provides;const i=Rt.parent&&Rt.parent.provides;i===t&&(t=Rt.provides=Object.create(i)),t[n]=e}}function cs(n,e,t=!1){const i=Rt||kt;if(i||ls){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:ls._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&He(e)?e.call(i&&i.proxy):e}}const Rd={},Cd=()=>Object.create(Rd),Ld=n=>Object.getPrototypeOf(n)===Rd;function L_(n,e,t,i=!1){const r={},s=Cd();n.propsDefaults=Object.create(null),Pd(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Bm(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function P_(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=tt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ta(n.emitsOptions,h))continue;const m=e[h];if(l)if(Je(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const g=Un(h);r[g]=Ll(l,a,g,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{Pd(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Je(e,f)&&((u=zr(f))===f||!Je(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Ll(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Je(e,f))&&(delete s[f],c=!0)}c&&qn(n.attrs,"set","")}function Pd(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(rs(l))continue;const c=e[l];let u;r&&Je(r,u=Un(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:ta(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=tt(t),c=a||dt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Ll(r,l,f,c[f],n,!Je(c,f))}}return o}function Ll(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Je(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&He(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=bs(r);i=c[t]=l.call(null,e),u()}}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===zr(t))&&(i=!0))}return i}function Id(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!He(n)){const u=f=>{l=!0;const[h,m]=Id(f,e,!0);Et(o,h),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return ft(n)&&i.set(n,Ar),Ar;if(Ne(s))for(let u=0;u<s.length;u++){const f=Un(s[u]);ou(f)&&(o[f]=dt)}else if(s)for(const u in s){const f=Un(u);if(ou(f)){const h=s[u],m=o[f]=Ne(h)||He(h)?{type:h}:Et({},h);if(m){const g=cu(Boolean,m.type),x=cu(String,m.type);m[0]=g>-1,m[1]=x<0||g<x,(g>-1||Je(m,"default"))&&a.push(f)}}}const c=[o,a];return ft(n)&&i.set(n,c),c}function ou(n){return n[0]!=="$"&&!rs(n)}function au(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function lu(n,e){return au(n)===au(e)}function cu(n,e){return Ne(e)?e.findIndex(t=>lu(t,n)):He(e)&&lu(e,n)?0:-1}const Nd=n=>n[0]==="_"||n==="$stable",mc=n=>Ne(n)?n.map(Ln):[Ln(n)],I_=(n,e,t)=>{if(e._n)return e;const i=Mi((...r)=>mc(e(...r)),t);return i._c=!1,i},Dd=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Nd(r))continue;const s=n[r];if(He(s))e[r]=I_(r,s,i);else if(s!=null){const o=mc(s);e[r]=()=>o}}},Ud=(n,e)=>{const t=mc(e);n.slots.default=()=>t},N_=(n,e)=>{const t=n.slots=Cd();if(n.vnode.shapeFlag&32){const i=e._;i?(Et(t,e),Vh(t,"_",i,!0)):Dd(e,t)}else e&&Ud(n,e)},D_=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=dt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Et(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Dd(e,r)),o=e}else e&&(Ud(n,e),o={default:1});if(s)for(const a in r)!Nd(a)&&o[a]==null&&delete r[a]};function Pl(n,e,t,i,r=!1){if(Ne(n)){n.forEach((h,m)=>Pl(h,e&&(Ne(e)?e[m]:e),t,i,r));return}if(os(i)&&!r)return;const s=i.shapeFlag&4?vc(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===dt?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(gt(c)?(u[c]=null,Je(f,c)&&(f[c]=null)):Kt(c)&&(c.value=null)),He(l))vi(l,a,12,[o,u]);else{const h=gt(l),m=Kt(l);if(h||m){const g=()=>{if(n.f){const x=h?Je(f,l)?f[l]:u[l]:l.value;r?Ne(x)&&ec(x,s):Ne(x)?x.includes(s)||x.push(s):h?(u[l]=[s],Je(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=o,Je(f,l)&&(f[l]=o)):m&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,Qt(g,t)):g()}}}const Qt=r_;function U_(n){return O_(n)}function O_(n,e){const t=Gh();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=hn,insertStaticContent:g}=n,x=(I,b,k,q=null,J=null,oe=null,A=void 0,d=null,E=!!b.dynamicChildren)=>{if(I===b)return;I&&!qi(I,b)&&(q=de(I),we(I,J,oe,!0),I=null),b.patchFlag===-2&&(E=!1,b.dynamicChildren=null);const{type:w,ref:U,shapeFlag:G}=b;switch(w){case Ts:_(I,b,k,q);break;case an:p(I,b,k,q);break;case Pa:I==null&&R(b,k,q,A);break;case pt:B(I,b,k,q,J,oe,A,d,E);break;default:G&1?P(I,b,k,q,J,oe,A,d,E):G&6?O(I,b,k,q,J,oe,A,d,E):(G&64||G&128)&&w.process(I,b,k,q,J,oe,A,d,E,W)}U!=null&&J&&Pl(U,I&&I.ref,oe,b||I,!b)},_=(I,b,k,q)=>{if(I==null)i(b.el=a(b.children),k,q);else{const J=b.el=I.el;b.children!==I.children&&c(J,b.children)}},p=(I,b,k,q)=>{I==null?i(b.el=l(b.children||""),k,q):b.el=I.el},R=(I,b,k,q)=>{[I.el,I.anchor]=g(I.children,b,k,q,I.el,I.anchor)},v=({el:I,anchor:b},k,q)=>{let J;for(;I&&I!==b;)J=h(I),i(I,k,q),I=J;i(b,k,q)},S=({el:I,anchor:b})=>{let k;for(;I&&I!==b;)k=h(I),r(I),I=k;r(b)},P=(I,b,k,q,J,oe,A,d,E)=>{b.type==="svg"?A="svg":b.type==="math"&&(A="mathml"),I==null?T(b,k,q,J,oe,A,d,E):M(I,b,J,oe,A,d,E)},T=(I,b,k,q,J,oe,A,d)=>{let E,w;const{props:U,shapeFlag:G,transition:Y,dirs:N}=I;if(E=I.el=o(I.type,oe,U&&U.is,U),G&8?u(E,I.children):G&16&&D(I.children,E,null,q,J,La(I,oe),A,d),N&&Ni(I,null,q,"created"),L(E,I,I.scopeId,A,q),U){for(const le in U)le!=="value"&&!rs(le)&&s(E,le,null,U[le],oe,I.children,q,J,me);"value"in U&&s(E,"value",null,U.value,oe),(w=U.onVnodeBeforeMount)&&Rn(w,q,I)}N&&Ni(I,null,q,"beforeMount");const F=F_(J,Y);F&&Y.beforeEnter(E),i(E,b,k),((w=U&&U.onVnodeMounted)||F||N)&&Qt(()=>{w&&Rn(w,q,I),F&&Y.enter(E),N&&Ni(I,null,q,"mounted")},J)},L=(I,b,k,q,J)=>{if(k&&m(I,k),q)for(let oe=0;oe<q.length;oe++)m(I,q[oe]);if(J){let oe=J.subTree;if(b===oe){const A=J.vnode;L(I,A,A.scopeId,A.slotScopeIds,J.parent)}}},D=(I,b,k,q,J,oe,A,d,E=0)=>{for(let w=E;w<I.length;w++){const U=I[w]=d?hi(I[w]):Ln(I[w]);x(null,U,b,k,q,J,oe,A,d)}},M=(I,b,k,q,J,oe,A)=>{const d=b.el=I.el;let{patchFlag:E,dynamicChildren:w,dirs:U}=b;E|=I.patchFlag&16;const G=I.props||dt,Y=b.props||dt;let N;if(k&&Di(k,!1),(N=Y.onVnodeBeforeUpdate)&&Rn(N,k,b,I),U&&Ni(b,I,k,"beforeUpdate"),k&&Di(k,!0),w?y(I.dynamicChildren,w,d,k,q,La(b,J),oe):A||$(I,b,d,null,k,q,La(b,J),oe,!1),E>0){if(E&16)V(d,b,G,Y,k,q,J);else if(E&2&&G.class!==Y.class&&s(d,"class",null,Y.class,J),E&4&&s(d,"style",G.style,Y.style,J),E&8){const F=b.dynamicProps;for(let le=0;le<F.length;le++){const te=F[le],pe=G[te],Re=Y[te];(Re!==pe||te==="value")&&s(d,te,pe,Re,J,I.children,k,q,me)}}E&1&&I.children!==b.children&&u(d,b.children)}else!A&&w==null&&V(d,b,G,Y,k,q,J);((N=Y.onVnodeUpdated)||U)&&Qt(()=>{N&&Rn(N,k,b,I),U&&Ni(b,I,k,"updated")},q)},y=(I,b,k,q,J,oe,A)=>{for(let d=0;d<b.length;d++){const E=I[d],w=b[d],U=E.el&&(E.type===pt||!qi(E,w)||E.shapeFlag&70)?f(E.el):k;x(E,w,U,null,q,J,oe,A,!0)}},V=(I,b,k,q,J,oe,A)=>{if(k!==q){if(k!==dt)for(const d in k)!rs(d)&&!(d in q)&&s(I,d,k[d],null,A,b.children,J,oe,me);for(const d in q){if(rs(d))continue;const E=q[d],w=k[d];E!==w&&d!=="value"&&s(I,d,w,E,A,b.children,J,oe,me)}"value"in q&&s(I,"value",k.value,q.value,A)}},B=(I,b,k,q,J,oe,A,d,E)=>{const w=b.el=I?I.el:a(""),U=b.anchor=I?I.anchor:a("");let{patchFlag:G,dynamicChildren:Y,slotScopeIds:N}=b;N&&(d=d?d.concat(N):N),I==null?(i(w,k,q),i(U,k,q),D(b.children||[],k,U,J,oe,A,d,E)):G>0&&G&64&&Y&&I.dynamicChildren?(y(I.dynamicChildren,Y,k,J,oe,A,d),(b.key!=null||J&&b===J.subTree)&&Od(I,b,!0)):$(I,b,k,U,J,oe,A,d,E)},O=(I,b,k,q,J,oe,A,d,E)=>{b.slotScopeIds=d,I==null?b.shapeFlag&512?J.ctx.activate(b,k,q,A,E):ee(b,k,q,J,oe,A,E):ne(I,b,E)},ee=(I,b,k,q,J,oe,A)=>{const d=I.component=$_(I,q,J);if(sa(I)&&(d.ctx.renderer=W),Y_(d),d.asyncDep){if(J&&J.registerDep(d,se),!I.el){const E=d.subTree=Qe(an);p(null,E,b,k)}}else se(d,I,b,k,J,oe,A)},ne=(I,b,k)=>{const q=b.component=I.component;if(Zm(I,b,k))if(q.asyncDep&&!q.asyncResolved){ie(q,b,k);return}else q.next=b,$m(q.update),q.effect.dirty=!0,q.update();else b.el=I.el,q.vnode=b},se=(I,b,k,q,J,oe,A)=>{const d=()=>{if(I.isMounted){let{next:U,bu:G,u:Y,parent:N,vnode:F}=I;{const ye=Fd(I);if(ye){U&&(U.el=F.el,ie(I,U,A)),ye.asyncDep.then(()=>{I.isUnmounted||d()});return}}let le=U,te;Di(I,!1),U?(U.el=F.el,ie(I,U,A)):U=F,G&&ba(G),(te=U.props&&U.props.onVnodeBeforeUpdate)&&Rn(te,N,U,F),Di(I,!0);const pe=wa(I),Re=I.subTree;I.subTree=pe,x(Re,pe,f(Re.el),de(Re),I,J,oe),U.el=pe.el,le===null&&Qm(I,pe.el),Y&&Qt(Y,J),(te=U.props&&U.props.onVnodeUpdated)&&Qt(()=>Rn(te,N,U,F),J)}else{let U;const{el:G,props:Y}=b,{bm:N,m:F,parent:le}=I,te=os(b);if(Di(I,!1),N&&ba(N),!te&&(U=Y&&Y.onVnodeBeforeMount)&&Rn(U,le,b),Di(I,!0),G&&be){const pe=()=>{I.subTree=wa(I),be(G,I.subTree,I,J,null)};te?b.type.__asyncLoader().then(()=>!I.isUnmounted&&pe()):pe()}else{const pe=I.subTree=wa(I);x(null,pe,k,q,I,J,oe),b.el=pe.el}if(F&&Qt(F,J),!te&&(U=Y&&Y.onVnodeMounted)){const pe=b;Qt(()=>Rn(U,le,pe),J)}(b.shapeFlag&256||le&&os(le.vnode)&&le.vnode.shapeFlag&256)&&I.a&&Qt(I.a,J),I.isMounted=!0,b=k=q=null}},E=I.effect=new ic(d,hn,()=>hc(w),I.scope),w=I.update=()=>{E.dirty&&E.run()};w.id=I.uid,Di(I,!0),w()},ie=(I,b,k)=>{b.component=I;const q=I.vnode.props;I.vnode=b,I.next=null,P_(I,b.props,q,k),D_(I,b.children,k),wi(),Zc(I),Ri()},$=(I,b,k,q,J,oe,A,d,E=!1)=>{const w=I&&I.children,U=I?I.shapeFlag:0,G=b.children,{patchFlag:Y,shapeFlag:N}=b;if(Y>0){if(Y&128){ue(w,G,k,q,J,oe,A,d,E);return}else if(Y&256){ce(w,G,k,q,J,oe,A,d,E);return}}N&8?(U&16&&me(w,J,oe),G!==w&&u(k,G)):U&16?N&16?ue(w,G,k,q,J,oe,A,d,E):me(w,J,oe,!0):(U&8&&u(k,""),N&16&&D(G,k,q,J,oe,A,d,E))},ce=(I,b,k,q,J,oe,A,d,E)=>{I=I||Ar,b=b||Ar;const w=I.length,U=b.length,G=Math.min(w,U);let Y;for(Y=0;Y<G;Y++){const N=b[Y]=E?hi(b[Y]):Ln(b[Y]);x(I[Y],N,k,null,J,oe,A,d,E)}w>U?me(I,J,oe,!0,!1,G):D(b,k,q,J,oe,A,d,E,G)},ue=(I,b,k,q,J,oe,A,d,E)=>{let w=0;const U=b.length;let G=I.length-1,Y=U-1;for(;w<=G&&w<=Y;){const N=I[w],F=b[w]=E?hi(b[w]):Ln(b[w]);if(qi(N,F))x(N,F,k,null,J,oe,A,d,E);else break;w++}for(;w<=G&&w<=Y;){const N=I[G],F=b[Y]=E?hi(b[Y]):Ln(b[Y]);if(qi(N,F))x(N,F,k,null,J,oe,A,d,E);else break;G--,Y--}if(w>G){if(w<=Y){const N=Y+1,F=N<U?b[N].el:q;for(;w<=Y;)x(null,b[w]=E?hi(b[w]):Ln(b[w]),k,F,J,oe,A,d,E),w++}}else if(w>Y)for(;w<=G;)we(I[w],J,oe,!0),w++;else{const N=w,F=w,le=new Map;for(w=F;w<=Y;w++){const qe=b[w]=E?hi(b[w]):Ln(b[w]);qe.key!=null&&le.set(qe.key,w)}let te,pe=0;const Re=Y-F+1;let ye=!1,Se=0;const De=new Array(Re);for(w=0;w<Re;w++)De[w]=0;for(w=N;w<=G;w++){const qe=I[w];if(pe>=Re){we(qe,J,oe,!0);continue}let Ce;if(qe.key!=null)Ce=le.get(qe.key);else for(te=F;te<=Y;te++)if(De[te-F]===0&&qi(qe,b[te])){Ce=te;break}Ce===void 0?we(qe,J,oe,!0):(De[Ce-F]=w+1,Ce>=Se?Se=Ce:ye=!0,x(qe,b[Ce],k,null,J,oe,A,d,E),pe++)}const We=ye?B_(De):Ar;for(te=We.length-1,w=Re-1;w>=0;w--){const qe=F+w,Ce=b[qe],H=qe+1<U?b[qe+1].el:q;De[w]===0?x(null,Ce,k,H,J,oe,A,d,E):ye&&(te<0||w!==We[te]?ge(Ce,k,H,2):te--)}}},ge=(I,b,k,q,J=null)=>{const{el:oe,type:A,transition:d,children:E,shapeFlag:w}=I;if(w&6){ge(I.component.subTree,b,k,q);return}if(w&128){I.suspense.move(b,k,q);return}if(w&64){A.move(I,b,k,W);return}if(A===pt){i(oe,b,k);for(let G=0;G<E.length;G++)ge(E[G],b,k,q);i(I.anchor,b,k);return}if(A===Pa){v(I,b,k);return}if(q!==2&&w&1&&d)if(q===0)d.beforeEnter(oe),i(oe,b,k),Qt(()=>d.enter(oe),J);else{const{leave:G,delayLeave:Y,afterLeave:N}=d,F=()=>i(oe,b,k),le=()=>{G(oe,()=>{F(),N&&N()})};Y?Y(oe,F,le):le()}else i(oe,b,k)},we=(I,b,k,q=!1,J=!1)=>{const{type:oe,props:A,ref:d,children:E,dynamicChildren:w,shapeFlag:U,patchFlag:G,dirs:Y}=I;if(d!=null&&Pl(d,null,k,I,!0),U&256){b.ctx.deactivate(I);return}const N=U&1&&Y,F=!os(I);let le;if(F&&(le=A&&A.onVnodeBeforeUnmount)&&Rn(le,b,I),U&6)he(I.component,k,q);else{if(U&128){I.suspense.unmount(k,q);return}N&&Ni(I,null,b,"beforeUnmount"),U&64?I.type.remove(I,b,k,J,W,q):w&&(oe!==pt||G>0&&G&64)?me(w,b,k,!1,!0):(oe===pt&&G&384||!J&&U&16)&&me(E,b,k),q&&Ye(I)}(F&&(le=A&&A.onVnodeUnmounted)||N)&&Qt(()=>{le&&Rn(le,b,I),N&&Ni(I,null,b,"unmounted")},k)},Ye=I=>{const{type:b,el:k,anchor:q,transition:J}=I;if(b===pt){Q(k,q);return}if(b===Pa){S(I);return}const oe=()=>{r(k),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(I.shapeFlag&1&&J&&!J.persisted){const{leave:A,delayLeave:d}=J,E=()=>A(k,oe);d?d(I.el,oe,E):E()}else oe()},Q=(I,b)=>{let k;for(;I!==b;)k=h(I),r(I),I=k;r(b)},he=(I,b,k)=>{const{bum:q,scope:J,update:oe,subTree:A,um:d}=I;q&&ba(q),J.stop(),oe&&(oe.active=!1,we(A,I,b,k)),d&&Qt(d,b),Qt(()=>{I.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},me=(I,b,k,q=!1,J=!1,oe=0)=>{for(let A=oe;A<I.length;A++)we(I[A],b,k,q,J)},de=I=>I.shapeFlag&6?de(I.component.subTree):I.shapeFlag&128?I.suspense.next():h(I.anchor||I.el);let Ue=!1;const Fe=(I,b,k)=>{I==null?b._vnode&&we(b._vnode,null,null,!0):x(b._vnode||null,I,b,null,null,null,k),Ue||(Ue=!0,Zc(),dd(),Ue=!1),b._vnode=I},W={p:x,um:we,m:ge,r:Ye,mt:ee,mc:D,pc:$,pbc:y,n:de,o:n};let Ke,be;return{render:Fe,hydrate:Ke,createApp:R_(Fe,Ke)}}function La({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Di({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function F_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Od(n,e,t=!1){const i=n.children,r=e.children;if(Ne(i)&&Ne(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=hi(r[s]),a.el=o.el),t||Od(o,a)),a.type===Ts&&(a.el=o.el)}}function B_(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Fd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Fd(e)}const k_=n=>n.__isTeleport,pt=Symbol.for("v-fgt"),Ts=Symbol.for("v-txt"),an=Symbol.for("v-cmt"),Pa=Symbol.for("v-stc"),us=[];let Tn=null;function ct(n=!1){us.push(Tn=n?null:[])}function H_(){us.pop(),Tn=us[us.length-1]||null}let gs=1;function uu(n){gs+=n}function Bd(n){return n.dynamicChildren=gs>0?Tn||Ar:null,H_(),gs>0&&Tn&&Tn.push(n),n}function At(n,e,t,i,r,s){return Bd(fe(n,e,t,i,r,s,!0))}function rr(n,e,t,i,r){return Bd(Qe(n,e,t,i,r,!0))}function No(n){return n?n.__v_isVNode===!0:!1}function qi(n,e){return n.type===e.type&&n.key===e.key}const kd=({key:n})=>n??null,Mo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?gt(n)||Kt(n)||He(n)?{i:kt,r:n,k:e,f:!!t}:n:null);function fe(n,e=null,t=null,i=0,r=null,s=n===pt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&kd(e),ref:e&&Mo(e),scopeId:na,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:kt};return a?(gc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=gt(t)?8:16),gs>0&&!o&&Tn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Tn.push(l),l}const Qe=z_;function z_(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===_d)&&(n=an),No(n)){const a=yi(n,e,!0);return t&&gc(a,t),gs>0&&!s&&Tn&&(a.shapeFlag&6?Tn[Tn.indexOf(n)]=a:Tn.push(a)),a.patchFlag|=-2,a}if(Z_(n)&&(n=n.__vccOpts),e){e=V_(e);let{class:a,style:l}=e;a&&!gt(a)&&(e.class=ys(a)),ft(l)&&(sd(l)&&!Ne(l)&&(l=Et({},l)),e.style=nc(l))}const o=gt(n)?1:i_(n)?128:k_(n)?64:ft(n)?4:He(n)?2:0;return fe(n,e,t,i,r,o,s,!0)}function V_(n){return n?sd(n)||Ld(n)?Et({},n):n:null}function yi(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?G_(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&kd(c),ref:e&&e.ref?t&&s?Ne(s)?s.concat(Mo(e)):[s,Mo(e)]:Mo(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==pt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&yi(n.ssContent),ssFallback:n.ssFallback&&yi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&(u.transition=l.clone(u)),u}function Yt(n=" ",e=0){return Qe(Ts,null,n,e)}function _c(n="",e=!1){return e?(ct(),rr(an,null,n)):Qe(an,null,n)}function Ln(n){return n==null||typeof n=="boolean"?Qe(an):Ne(n)?Qe(pt,null,n.slice()):typeof n=="object"?hi(n):Qe(Ts,null,String(n))}function hi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:yi(n)}function gc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ne(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),gc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Ld(e)?e._ctx=kt:r===3&&kt&&(kt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else He(e)?(e={default:e,_ctx:kt},t=32):(e=String(e),i&64?(t=16,e=[Yt(e)]):t=8);n.children=e,n.shapeFlag|=t}function G_(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ys([e.class,i.class]));else if(r==="style")e.style=nc([e.style,i.style]);else if(jo(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ne(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Rn(n,e,t,i=null){pn(n,e,7,[t,i])}const W_=wd();let X_=0;function $_(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||W_,s={uid:X_++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new $h(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Id(i,r),emitsOptions:md(i,r),emit:null,emitted:null,propsDefaults:dt,inheritAttrs:i.inheritAttrs,ctx:dt,data:dt,props:dt,attrs:dt,slots:dt,refs:dt,setupState:dt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=jm.bind(null,s),n.ce&&n.ce(s),s}let Rt=null;const Nr=()=>Rt||kt;let Do,Il;{const n=Gh(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Do=e("__VUE_INSTANCE_SETTERS__",t=>Rt=t),Il=e("__VUE_SSR_SETTERS__",t=>la=t)}const bs=n=>{const e=Rt;return Do(n),n.scope.on(),()=>{n.scope.off(),Do(e)}},fu=()=>{Rt&&Rt.scope.off(),Do(null)};function Hd(n){return n.vnode.shapeFlag&4}let la=!1;function Y_(n,e=!1){e&&Il(e);const{props:t,children:i}=n.vnode,r=Hd(n);L_(n,t,r,e),N_(n,i);const s=r?q_(n,e):void 0;return e&&Il(!1),s}function q_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,S_);const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?K_(n):null,s=bs(n);wi();const o=vi(i,n,0,[n.props,r]);if(Ri(),s(),kh(o)){if(o.then(fu,fu),e)return o.then(a=>{hu(n,a,e)}).catch(a=>{ea(a,n,0)});n.asyncDep=o}else hu(n,o,e)}else zd(n,e)}function hu(n,e,t){He(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ft(e)&&(n.setupState=ud(e)),zd(n,t)}let du;function zd(n,e,t){const i=n.type;if(!n.render){if(!e&&du&&!i.render){const r=i.template||pc(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Et(Et({isCustomElement:s,delimiters:a},o),l);i.render=du(r,c)}}n.render=i.render||hn}{const r=bs(n);wi();try{M_(n)}finally{Ri(),r()}}}const j_={get(n,e){return en(n,"get",""),n[e]}};function K_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,j_),slots:n.slots,emit:n.emit,expose:e}}function vc(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(ud(km(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in as)return as[t](n)},has(e,t){return t in e||t in as}}))}function J_(n,e=!0){return He(n)?n.displayName||n.name:n.name||e&&n.__name}function Z_(n){return He(n)&&"__vccOpts"in n}const Sn=(n,e)=>Hm(n,e,la);function xc(n,e,t){const i=arguments.length;return i===2?ft(e)&&!Ne(e)?No(e)?Qe(n,null,[e]):Qe(n,e):Qe(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&No(t)&&(t=[t]),Qe(n,e,t))}const Q_="3.4.26";/**
* @vue/runtime-dom v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const eg="http://www.w3.org/2000/svg",tg="http://www.w3.org/1998/Math/MathML",di=typeof document<"u"?document:null,pu=di&&di.createElement("template"),ng={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?di.createElementNS(eg,n):e==="mathml"?di.createElementNS(tg,n):di.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>di.createTextNode(n),createComment:n=>di.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>di.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{pu.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const a=pu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ti="transition",qr="animation",vs=Symbol("_vtc"),ca=(n,{slots:e})=>xc(u_,ig(n),e);ca.displayName="Transition";const Vd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ca.props=Et({},xd,Vd);const Ui=(n,e=[])=>{Ne(n)?n.forEach(t=>t(...e)):n&&n(...e)},mu=n=>n?Ne(n)?n.some(e=>e.length>1):n.length>1:!1;function ig(n){const e={};for(const B in n)B in Vd||(e[B]=n[B]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,g=rg(r),x=g&&g[0],_=g&&g[1],{onBeforeEnter:p,onEnter:R,onEnterCancelled:v,onLeave:S,onLeaveCancelled:P,onBeforeAppear:T=p,onAppear:L=R,onAppearCancelled:D=v}=e,M=(B,O,ee)=>{Oi(B,O?u:a),Oi(B,O?c:o),ee&&ee()},y=(B,O)=>{B._isLeaving=!1,Oi(B,f),Oi(B,m),Oi(B,h),O&&O()},V=B=>(O,ee)=>{const ne=B?L:R,se=()=>M(O,B,ee);Ui(ne,[O,se]),_u(()=>{Oi(O,B?l:s),ni(O,B?u:a),mu(ne)||gu(O,i,x,se)})};return Et(e,{onBeforeEnter(B){Ui(p,[B]),ni(B,s),ni(B,o)},onBeforeAppear(B){Ui(T,[B]),ni(B,l),ni(B,c)},onEnter:V(!1),onAppear:V(!0),onLeave(B,O){B._isLeaving=!0;const ee=()=>y(B,O);ni(B,f),ni(B,h),ag(),_u(()=>{B._isLeaving&&(Oi(B,f),ni(B,m),mu(S)||gu(B,i,_,ee))}),Ui(S,[B,ee])},onEnterCancelled(B){M(B,!1),Ui(v,[B])},onAppearCancelled(B){M(B,!0),Ui(D,[B])},onLeaveCancelled(B){y(B),Ui(P,[B])}})}function rg(n){if(n==null)return null;if(ft(n))return[Ia(n.enter),Ia(n.leave)];{const e=Ia(n);return[e,e]}}function Ia(n){return cm(n)}function ni(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[vs]||(n[vs]=new Set)).add(e)}function Oi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[vs];t&&(t.delete(e),t.size||(n[vs]=void 0))}function _u(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let sg=0;function gu(n,e,t,i){const r=n._endId=++sg,s=()=>{r===n._endId&&i()};if(t)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=og(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=m=>{m.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function og(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(`${ti}Delay`),s=i(`${ti}Duration`),o=vu(r,s),a=i(`${qr}Delay`),l=i(`${qr}Duration`),c=vu(a,l);let u=null,f=0,h=0;e===ti?o>0&&(u=ti,f=o,h=s.length):e===qr?c>0&&(u=qr,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?ti:qr:null,h=u?u===ti?s.length:l.length:0);const m=u===ti&&/\b(transform|all)(,|$)/.test(i(`${ti}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:m}}function vu(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>xu(t)+xu(n[i])))}function xu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function ag(){return document.body.offsetHeight}function lg(n,e,t){const i=n[vs];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Eu=Symbol("_vod"),cg=Symbol("_vsh"),ug=Symbol(""),fg=/(^|;)\s*display\s*:/;function hg(n,e,t){const i=n.style,r=gt(t);let s=!1;if(t&&!r){if(e)if(gt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&yo(i,a,"")}else for(const o in e)t[o]==null&&yo(i,o,"");for(const o in t)o==="display"&&(s=!0),yo(i,o,t[o])}else if(r){if(e!==t){const o=i[ug];o&&(t+=";"+o),i.cssText=t,s=fg.test(t)}}else e&&n.removeAttribute("style");Eu in n&&(n[Eu]=s?i.display:"",n[cg]&&(i.display="none"))}const Su=/\s*!important$/;function yo(n,e,t){if(Ne(t))t.forEach(i=>yo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=dg(n,e);Su.test(t)?n.setProperty(zr(i),t.replace(Su,""),"important"):n[i]=t}}const Mu=["Webkit","Moz","ms"],Na={};function dg(n,e){const t=Na[e];if(t)return t;let i=Un(e);if(i!=="filter"&&i in n)return Na[e]=i;i=Zo(i);for(let r=0;r<Mu.length;r++){const s=Mu[r]+i;if(s in n)return Na[e]=s}return e}const yu="http://www.w3.org/1999/xlink";function pg(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(yu,e.slice(6,e.length)):n.setAttributeNS(yu,e,t);else{const s=mm(e);t==null||s&&!Wh(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function mg(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?n.getAttribute("value")||"":n.value,u=t??"";(c!==u||!("_value"in n))&&(n.value=u),t==null&&n.removeAttribute(e),n._value=t;return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Wh(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function _g(n,e,t,i){n.addEventListener(e,t,i)}function gg(n,e,t,i){n.removeEventListener(e,t,i)}const Tu=Symbol("_vei");function vg(n,e,t,i,r=null){const s=n[Tu]||(n[Tu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=xg(e);if(i){const c=s[e]=Mg(i,r);_g(n,a,c,l)}else o&&(gg(n,a,o,l),s[e]=void 0)}}const bu=/(?:Once|Passive|Capture)$/;function xg(n){let e;if(bu.test(n)){e={};let i;for(;i=n.match(bu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):zr(n.slice(2)),e]}let Da=0;const Eg=Promise.resolve(),Sg=()=>Da||(Eg.then(()=>Da=0),Da=Date.now());function Mg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;pn(yg(i,t.value),e,5,[i])};return t.value=n,t.attached=Sg(),t}function yg(n,e){if(Ne(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Au=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Tg=(n,e,t,i,r,s,o,a,l)=>{const c=r==="svg";e==="class"?lg(n,i,c):e==="style"?hg(n,t,i):jo(e)?Ql(e)||vg(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bg(n,e,i,c))?mg(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),pg(n,e,i,c))};function bg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Au(e)&&He(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Au(e)&&gt(t)?!1:e in n}const Ag=Et({patchProp:Tg},ng);let wu;function wg(){return wu||(wu=U_(Ag))}const Rg=(...n)=>{const e=wg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Lg(i);if(!r)return;const s=e._component;!He(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,Cg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Cg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Lg(n){return gt(n)?document.querySelector(n):n}const Uo=Pt({__name:"my-container",props:{tag:{}},setup(n){return(e,t)=>(ct(),rr(t_(e.tag?e.tag:"section"),{class:"max-w-[1280px] mx-auto lg:px-0 px-2 min-h-[100vh]"},{default:Mi(()=>[E_(e.$slots,"default")]),_:3}))}});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ec="164",Pg=0,Ru=1,Ig=2,Gd=1,Ng=2,Wn=3,Ti=0,qt=1,Xn=2,xi=0,Lr=1,Cu=2,Lu=3,Pu=4,Dg=5,ji=100,Ug=101,Og=102,Fg=103,Bg=104,kg=200,Hg=201,zg=202,Vg=203,Nl=204,Dl=205,Gg=206,Wg=207,Xg=208,$g=209,Yg=210,qg=211,jg=212,Kg=213,Jg=214,Zg=0,Qg=1,ev=2,Oo=3,tv=4,nv=5,iv=6,rv=7,Wd=0,sv=1,ov=2,Ei=0,av=1,lv=2,cv=3,uv=4,fv=5,hv=6,dv=7,Xd=300,Dr=301,Ur=302,Ul=303,Ol=304,ua=306,Fl=1e3,Ji=1001,Bl=1002,dn=1003,pv=1004,Vs=1005,Mn=1006,Ua=1007,Zi=1008,bi=1009,mv=1010,_v=1011,$d=1012,Yd=1013,Or=1014,mi=1015,fa=1016,qd=1017,jd=1018,As=1020,gv=35902,vv=1021,xv=1022,Nn=1023,Ev=1024,Sv=1025,Pr=1026,xs=1027,Mv=1028,Kd=1029,yv=1030,Jd=1031,Zd=1033,Oa=33776,Fa=33777,Ba=33778,ka=33779,Iu=35840,Nu=35841,Du=35842,Uu=35843,Ou=36196,Fu=37492,Bu=37496,ku=37808,Hu=37809,zu=37810,Vu=37811,Gu=37812,Wu=37813,Xu=37814,$u=37815,Yu=37816,qu=37817,ju=37818,Ku=37819,Ju=37820,Zu=37821,Ha=36492,Qu=36494,ef=36495,Tv=36283,tf=36284,nf=36285,rf=36286,bv=3200,Av=3201,wv=0,Rv=1,pi="",Cn="srgb",Ci="srgb-linear",Sc="display-p3",ha="display-p3-linear",Fo="linear",lt="srgb",Bo="rec709",ko="p3",sr=7680,sf=519,Cv=512,Lv=513,Pv=514,Qd=515,Iv=516,Nv=517,Dv=518,Uv=519,of=35044,af="300 es",Yn=2e3,Ho=2001;class Vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],To=Math.PI/180,kl=180/Math.PI;function ws(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function Ft(n,e,t){return Math.max(e,Math.min(t,n))}function Ov(n,e){return(n%e+e)%e}function za(n,e,t){return(1-t)*n+t*e}function jr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],g=i[8],x=r[0],_=r[3],p=r[6],R=r[1],v=r[4],S=r[7],P=r[2],T=r[5],L=r[8];return s[0]=o*x+a*R+l*P,s[3]=o*_+a*v+l*T,s[6]=o*p+a*S+l*L,s[1]=c*x+u*R+f*P,s[4]=c*_+u*v+f*T,s[7]=c*p+u*S+f*L,s[2]=h*x+m*R+g*P,s[5]=h*_+m*v+g*T,s[8]=h*p+m*S+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,m=c*s-o*l,g=t*f+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=m*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Va.makeScale(e,t)),this}rotate(e){return this.premultiply(Va.makeRotation(-e)),this}translate(e,t){return this.premultiply(Va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Va=new Ge;function ep(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Es(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Fv(){const n=Es("canvas");return n.style.display="block",n}const lf={};function Bv(n){n in lf||(lf[n]=!0,console.warn(n))}const cf=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),uf=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gs={[Ci]:{transfer:Fo,primaries:Bo,toReference:n=>n,fromReference:n=>n},[Cn]:{transfer:lt,primaries:Bo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ha]:{transfer:Fo,primaries:ko,toReference:n=>n.applyMatrix3(uf),fromReference:n=>n.applyMatrix3(cf)},[Sc]:{transfer:lt,primaries:ko,toReference:n=>n.convertSRGBToLinear().applyMatrix3(uf),fromReference:n=>n.applyMatrix3(cf).convertLinearToSRGB()}},kv=new Set([Ci,ha]),st={enabled:!0,_workingColorSpace:Ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!kv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Gs[e].toReference,r=Gs[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Gs[n].primaries},getTransfer:function(n){return n===pi?Fo:Gs[n].transfer}};function Ir(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ga(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let or;class Hv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{or===void 0&&(or=Es("canvas")),or.width=e.width,or.height=e.height;const i=or.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=or}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Es("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ir(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ir(t[i]/255)*255):t[i]=Ir(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zv=0;class tp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zv++}),this.uuid=ws(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Wa(r[o].image)):s.push(Wa(r[o]))}else s=Wa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Wa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vv=0;class jt extends Vr{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,i=Ji,r=Ji,s=Mn,o=Zi,a=Nn,l=bi,c=jt.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=ws(),this.name="",this.source=new tp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fl:e.x=e.x-Math.floor(e.x);break;case Ji:e.x=e.x<0?0:1;break;case Bl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fl:e.y=e.y-Math.floor(e.y);break;case Ji:e.y=e.y<0?0:1;break;case Bl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Xd;jt.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],x=l[2],_=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-_)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+_)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(m+1)/2,P=(p+1)/2,T=(u+h)/4,L=(f+x)/4,D=(g+_)/4;return v>S&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=L/i):S>P?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=D/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=L/s,r=D/s),this.set(i,r,s,t),this}let R=Math.sqrt((_-g)*(_-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(R)<.001&&(R=1),this.x=(_-g)/R,this.y=(f-x)/R,this.z=(h-u)/R,this.w=Math.acos((c+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gv extends Vr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new tp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tr extends Gv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class np extends jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wv extends jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(f!==x||l!==h||c!==m||u!==g){let _=1-a;const p=l*h+c*m+u*g+f*x,R=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const P=Math.sqrt(v),T=Math.atan2(P,p*R);_=Math.sin(_*T)/P,a=Math.sin(a*T)/P}const S=a*R;if(l=l*_+h*S,c=c*_+m*S,u=u*_+g*S,f=f*_+x*S,_===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*m-c*h,e[t+1]=l*g+u*h+c*f-a*m,e[t+2]=c*g+u*m+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ff.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ff.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xa.copy(this).projectOnVector(e),this.sub(Xa)}reflect(e){return this.sub(Xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xa=new z,ff=new Rs;class Cs{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_n):_n.fromBufferAttribute(s,o),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ws.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ws.copy(i.boundingBox)),Ws.applyMatrix4(e.matrixWorld),this.union(Ws)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kr),Xs.subVectors(this.max,Kr),ar.subVectors(e.a,Kr),lr.subVectors(e.b,Kr),cr.subVectors(e.c,Kr),ii.subVectors(lr,ar),ri.subVectors(cr,lr),Fi.subVectors(ar,cr);let t=[0,-ii.z,ii.y,0,-ri.z,ri.y,0,-Fi.z,Fi.y,ii.z,0,-ii.x,ri.z,0,-ri.x,Fi.z,0,-Fi.x,-ii.y,ii.x,0,-ri.y,ri.x,0,-Fi.y,Fi.x,0];return!$a(t,ar,lr,cr,Xs)||(t=[1,0,0,0,1,0,0,0,1],!$a(t,ar,lr,cr,Xs))?!1:($s.crossVectors(ii,ri),t=[$s.x,$s.y,$s.z],$a(t,ar,lr,cr,Xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fn=[new z,new z,new z,new z,new z,new z,new z,new z],_n=new z,Ws=new Cs,ar=new z,lr=new z,cr=new z,ii=new z,ri=new z,Fi=new z,Kr=new z,Xs=new z,$s=new z,Bi=new z;function $a(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Bi.fromArray(n,s);const a=r.x*Math.abs(Bi.x)+r.y*Math.abs(Bi.y)+r.z*Math.abs(Bi.z),l=e.dot(Bi),c=t.dot(Bi),u=i.dot(Bi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Xv=new Cs,Jr=new z,Ya=new z;class Ls{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Xv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jr.subVectors(e,this.center);const t=Jr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Jr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jr.copy(e.center).add(Ya)),this.expandByPoint(Jr.copy(e.center).sub(Ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new z,qa=new z,Ys=new z,si=new z,ja=new z,qs=new z,Ka=new z;class Mc{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){qa.copy(e).add(t).multiplyScalar(.5),Ys.copy(t).sub(e).normalize(),si.copy(this.origin).sub(qa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ys),a=si.dot(this.direction),l=-si.dot(Ys),c=si.lengthSq(),u=Math.abs(1-o*o);let f,h,m,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const x=1/u;f*=x,h*=x,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(qa).addScaledVector(Ys,h),m}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const i=Bn.dot(this.direction),r=Bn.dot(Bn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,i,r,s){ja.subVectors(t,e),qs.subVectors(i,e),Ka.crossVectors(ja,qs);let o=this.direction.dot(Ka),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,e);const l=a*this.direction.dot(qs.crossVectors(si,qs));if(l<0)return null;const c=a*this.direction.dot(ja.cross(si));if(c<0||l+c>o)return null;const u=-a*si.dot(Ka);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,i,r,s,o,a,l,c,u,f,h,m,g,x,_){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,m,g,x,_)}set(e,t,i,r,s,o,a,l,c,u,f,h,m,g,x,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=m,p[7]=g,p[11]=x,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ur.setFromMatrixColumn(e,0).length(),s=1/ur.setFromMatrixColumn(e,1).length(),o=1/ur.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*f,g=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,g=c*u,x=c*f;t[0]=h+x*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,g=c*u,x=c*f;t[0]=h-x*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*f,g=a*u,x=a*f;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-h*f,t[8]=g*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+g,t[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,m=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=o*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($v,e,Yv)}lookAt(e,t,i){const r=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),oi.crossVectors(i,rn),oi.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),oi.crossVectors(i,rn)),oi.normalize(),js.crossVectors(rn,oi),r[0]=oi.x,r[4]=js.x,r[8]=rn.x,r[1]=oi.y,r[5]=js.y,r[9]=rn.y,r[2]=oi.z,r[6]=js.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],g=i[2],x=i[6],_=i[10],p=i[14],R=i[3],v=i[7],S=i[11],P=i[15],T=r[0],L=r[4],D=r[8],M=r[12],y=r[1],V=r[5],B=r[9],O=r[13],ee=r[2],ne=r[6],se=r[10],ie=r[14],$=r[3],ce=r[7],ue=r[11],ge=r[15];return s[0]=o*T+a*y+l*ee+c*$,s[4]=o*L+a*V+l*ne+c*ce,s[8]=o*D+a*B+l*se+c*ue,s[12]=o*M+a*O+l*ie+c*ge,s[1]=u*T+f*y+h*ee+m*$,s[5]=u*L+f*V+h*ne+m*ce,s[9]=u*D+f*B+h*se+m*ue,s[13]=u*M+f*O+h*ie+m*ge,s[2]=g*T+x*y+_*ee+p*$,s[6]=g*L+x*V+_*ne+p*ce,s[10]=g*D+x*B+_*se+p*ue,s[14]=g*M+x*O+_*ie+p*ge,s[3]=R*T+v*y+S*ee+P*$,s[7]=R*L+v*V+S*ne+P*ce,s[11]=R*D+v*B+S*se+P*ue,s[15]=R*M+v*O+S*ie+P*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],x=e[7],_=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*m-i*l*m)+x*(+t*l*m-t*c*h+s*o*h-r*o*m+r*c*u-s*l*u)+_*(+t*c*f-t*a*m-s*o*f+i*o*m+s*a*u-i*c*u)+p*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],x=e[13],_=e[14],p=e[15],R=f*_*c-x*h*c+x*l*m-a*_*m-f*l*p+a*h*p,v=g*h*c-u*_*c-g*l*m+o*_*m+u*l*p-o*h*p,S=u*x*c-g*f*c+g*a*m-o*x*m-u*a*p+o*f*p,P=g*f*l-u*x*l-g*a*h+o*x*h+u*a*_-o*f*_,T=t*R+i*v+r*S+s*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/T;return e[0]=R*L,e[1]=(x*h*s-f*_*s-x*r*m+i*_*m+f*r*p-i*h*p)*L,e[2]=(a*_*s-x*l*s+x*r*c-i*_*c-a*r*p+i*l*p)*L,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*m-i*l*m)*L,e[4]=v*L,e[5]=(u*_*s-g*h*s+g*r*m-t*_*m-u*r*p+t*h*p)*L,e[6]=(g*l*s-o*_*s-g*r*c+t*_*c+o*r*p-t*l*p)*L,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*m+t*l*m)*L,e[8]=S*L,e[9]=(g*f*s-u*x*s-g*i*m+t*x*m+u*i*p-t*f*p)*L,e[10]=(o*x*s-g*a*s+g*i*c-t*x*c-o*i*p+t*a*p)*L,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*m-t*a*m)*L,e[12]=P*L,e[13]=(u*x*r-g*f*r+g*i*h-t*x*h-u*i*_+t*f*_)*L,e[14]=(g*a*r-o*x*r-g*i*l+t*x*l+o*i*_-t*a*_)*L,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,m=s*u,g=s*f,x=o*u,_=o*f,p=a*f,R=l*c,v=l*u,S=l*f,P=i.x,T=i.y,L=i.z;return r[0]=(1-(x+p))*P,r[1]=(m+S)*P,r[2]=(g-v)*P,r[3]=0,r[4]=(m-S)*T,r[5]=(1-(h+p))*T,r[6]=(_+R)*T,r[7]=0,r[8]=(g+v)*L,r[9]=(_-R)*L,r[10]=(1-(h+x))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ur.set(r[0],r[1],r[2]).length();const o=ur.set(r[4],r[5],r[6]).length(),a=ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],gn.copy(this);const c=1/s,u=1/o,f=1/a;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=u,gn.elements[5]*=u,gn.elements[6]*=u,gn.elements[8]*=f,gn.elements[9]*=f,gn.elements[10]*=f,t.setFromRotationMatrix(gn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Yn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let m,g;if(a===Yn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ho)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Yn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,m=(i+r)*u;let g,x;if(a===Yn)g=(o+s)*f,x=-2*f;else if(a===Ho)g=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ur=new z,gn=new _t,$v=new z(0,0,0),Yv=new z(1,1,1),oi=new z,js=new z,rn=new z,hf=new _t,df=new Rs;class jn{constructor(e=0,t=0,i=0,r=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return df.setFromEuler(this),this.setFromQuaternion(df,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class ip{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qv=0;const pf=new z,fr=new Rs,kn=new _t,Ks=new z,Zr=new z,jv=new z,Kv=new Rs,mf=new z(1,0,0),_f=new z(0,1,0),gf=new z(0,0,1),vf={type:"added"},Jv={type:"removed"},hr={type:"childadded",child:null},Ja={type:"childremoved",child:null};class Ht extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new z,t=new jn,i=new Rs,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new Ge}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ip,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.multiply(fr),this}rotateOnWorldAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.premultiply(fr),this}rotateX(e){return this.rotateOnAxis(mf,e)}rotateY(e){return this.rotateOnAxis(_f,e)}rotateZ(e){return this.rotateOnAxis(gf,e)}translateOnAxis(e,t){return pf.copy(e).applyQuaternion(this.quaternion),this.position.add(pf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mf,e)}translateY(e){return this.translateOnAxis(_f,e)}translateZ(e){return this.translateOnAxis(gf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ks.copy(e):Ks.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Zr,Ks,this.up):kn.lookAt(Ks,Zr,this.up),this.quaternion.setFromRotationMatrix(kn),r&&(kn.extractRotation(r.matrixWorld),fr.setFromRotationMatrix(kn),this.quaternion.premultiply(fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vf),hr.child=e,this.dispatchEvent(hr),hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jv),Ja.child=e,this.dispatchEvent(Ja),Ja.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vf),hr.child=e,this.dispatchEvent(hr),hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,e,jv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,Kv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new z(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new z,Hn=new z,Za=new z,zn=new z,dr=new z,pr=new z,xf=new z,Qa=new z,el=new z,tl=new z;class yn{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),vn.subVectors(e,t),r.cross(vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){vn.subVectors(r,t),Hn.subVectors(i,t),Za.subVectors(e,t);const o=vn.dot(vn),a=vn.dot(Hn),l=vn.dot(Za),c=Hn.dot(Hn),u=Hn.dot(Za),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zn.x),l.addScaledVector(o,zn.y),l.addScaledVector(a,zn.z),l)}static isFrontFacing(e,t,i,r){return vn.subVectors(i,t),Hn.subVectors(e,t),vn.cross(Hn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),vn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return yn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;dr.subVectors(r,i),pr.subVectors(s,i),Qa.subVectors(e,i);const l=dr.dot(Qa),c=pr.dot(Qa);if(l<=0&&c<=0)return t.copy(i);el.subVectors(e,r);const u=dr.dot(el),f=pr.dot(el);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(dr,o);tl.subVectors(e,s);const m=dr.dot(tl),g=pr.dot(tl);if(g>=0&&m<=g)return t.copy(s);const x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(pr,a);const _=u*g-m*f;if(_<=0&&f-u>=0&&m-g>=0)return xf.subVectors(s,r),a=(f-u)/(f-u+(m-g)),t.copy(r).addScaledVector(xf,a);const p=1/(_+x+h);return o=x*p,a=h*p,t.copy(i).addScaledVector(dr,o).addScaledVector(pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Js={h:0,s:0,l:0};function nl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=st.workingColorSpace){if(e=Ov(e,1),t=Ft(t,0,1),i=Ft(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=nl(o,s,e+1/3),this.g=nl(o,s,e),this.b=nl(o,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,t=Cn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Cn){const i=rp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}copyLinearToSRGB(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return st.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Ft(Ot.r*255,0,255))*65536+Math.round(Ft(Ot.g*255,0,255))*256+Math.round(Ft(Ot.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(Ot.copy(this),t);const i=Ot.r,r=Ot.g,s=Ot.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Cn){st.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,r=Ot.b;return e!==Cn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(Js);const i=za(ai.h,Js.h,t),r=za(ai.s,Js.s,t),s=za(ai.l,Js.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new et;et.NAMES=rp;let Zv=0;class Gr extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=ws(),this.name="",this.type="Material",this.blending=Lr,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Dl,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nl&&(i.blendSrc=this.blendSrc),this.blendDst!==Dl&&(i.blendDst=this.blendDst),this.blendEquation!==ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Oo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yc extends Gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Wd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new z,Zs=new Ie;class mn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=of,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Bv("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Zs.fromBufferAttribute(this,t),Zs.applyMatrix3(e),this.setXY(t,Zs.x,Zs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=jr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==of&&(e.usage=this.usage),e}}class sp extends mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class op extends mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class zt extends mn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Qv=0;const un=new _t,il=new Ht,mr=new z,sn=new Cs,Qr=new Cs,bt=new z;class tn extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ep(e)?op:sp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,i){return un.makeTranslation(e,t,i),this.applyMatrix4(un),this}scale(e,t,i){return un.makeScale(e,t,i),this.applyMatrix4(un),this}lookAt(e){return il.lookAt(e),il.updateMatrix(),this.applyMatrix4(il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Qr.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(sn.min,Qr.min),sn.expandByPoint(bt),bt.addVectors(sn.max,Qr.max),sn.expandByPoint(bt)):(sn.expandByPoint(Qr.min),sn.expandByPoint(Qr.max))}sn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)bt.fromBufferAttribute(a,c),l&&(mr.fromBufferAttribute(e,c),bt.add(mr)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new z,l[D]=new z;const c=new z,u=new z,f=new z,h=new Ie,m=new Ie,g=new Ie,x=new z,_=new z;function p(D,M,y){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,D),m.fromBufferAttribute(s,M),g.fromBufferAttribute(s,y),u.sub(c),f.sub(c),m.sub(h),g.sub(h);const V=1/(m.x*g.y-g.x*m.y);isFinite(V)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(V),_.copy(f).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(V),a[D].add(x),a[M].add(x),a[y].add(x),l[D].add(_),l[M].add(_),l[y].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let D=0,M=R.length;D<M;++D){const y=R[D],V=y.start,B=y.count;for(let O=V,ee=V+B;O<ee;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const v=new z,S=new z,P=new z,T=new z;function L(D){P.fromBufferAttribute(r,D),T.copy(P);const M=a[D];v.copy(M),v.sub(P.multiplyScalar(P.dot(M))).normalize(),S.crossVectors(T,M);const V=S.dot(l[D])<0?-1:1;o.setXYZW(D,v.x,v.y,v.z,V)}for(let D=0,M=R.length;D<M;++D){const y=R[D],V=y.start,B=y.count;for(let O=V,ee=V+B;O<ee;O+=3)L(e.getX(O+0)),L(e.getX(O+1)),L(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),x=e.getX(h+1),_=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,_),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,_),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let x=0,_=l.length;x<_;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*u;for(let p=0;p<u;p++)h[g++]=c[m++]}return new mn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ef=new _t,ki=new Mc,Qs=new Ls,Sf=new z,_r=new z,gr=new z,vr=new z,rl=new z,eo=new z,to=new Ie,no=new Ie,io=new Ie,Mf=new z,yf=new z,Tf=new z,ro=new z,so=new z;class bn extends Ht{constructor(e=new tn,t=new yc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){eo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(rl.fromBufferAttribute(f,e),o?eo.addScaledVector(rl,u):eo.addScaledVector(rl.sub(t),u))}t.add(eo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qs.copy(i.boundingSphere),Qs.applyMatrix4(s),ki.copy(e.ray).recast(e.near),!(Qs.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Qs,Sf)===null||ki.origin.distanceToSquared(Sf)>(e.far-e.near)**2))&&(Ef.copy(s).invert(),ki.copy(e.ray).applyMatrix4(Ef),!(i.boundingBox!==null&&ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const _=h[g],p=o[_.materialIndex],R=Math.max(_.start,m.start),v=Math.min(a.count,Math.min(_.start+_.count,m.start+m.count));for(let S=R,P=v;S<P;S+=3){const T=a.getX(S),L=a.getX(S+1),D=a.getX(S+2);r=oo(this,p,e,i,c,u,f,T,L,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let _=g,p=x;_<p;_+=3){const R=a.getX(_),v=a.getX(_+1),S=a.getX(_+2);r=oo(this,o,e,i,c,u,f,R,v,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const _=h[g],p=o[_.materialIndex],R=Math.max(_.start,m.start),v=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let S=R,P=v;S<P;S+=3){const T=S,L=S+1,D=S+2;r=oo(this,p,e,i,c,u,f,T,L,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let _=g,p=x;_<p;_+=3){const R=_,v=_+1,S=_+2;r=oo(this,o,e,i,c,u,f,R,v,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function e0(n,e,t,i,r,s,o,a){let l;if(e.side===qt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ti,a),l===null)return null;so.copy(a),so.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(so);return c<t.near||c>t.far?null:{distance:c,point:so.clone(),object:n}}function oo(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,_r),n.getVertexPosition(l,gr),n.getVertexPosition(c,vr);const u=e0(n,e,t,i,_r,gr,vr,ro);if(u){r&&(to.fromBufferAttribute(r,a),no.fromBufferAttribute(r,l),io.fromBufferAttribute(r,c),u.uv=yn.getInterpolation(ro,_r,gr,vr,to,no,io,new Ie)),s&&(to.fromBufferAttribute(s,a),no.fromBufferAttribute(s,l),io.fromBufferAttribute(s,c),u.uv1=yn.getInterpolation(ro,_r,gr,vr,to,no,io,new Ie)),o&&(Mf.fromBufferAttribute(o,a),yf.fromBufferAttribute(o,l),Tf.fromBufferAttribute(o,c),u.normal=yn.getInterpolation(ro,_r,gr,vr,Mf,yf,Tf,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new z,materialIndex:0};yn.getNormal(_r,gr,vr,f.normal),u.face=f}return u}class Ps extends tn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(f,2));function g(x,_,p,R,v,S,P,T,L,D,M){const y=S/L,V=P/D,B=S/2,O=P/2,ee=T/2,ne=L+1,se=D+1;let ie=0,$=0;const ce=new z;for(let ue=0;ue<se;ue++){const ge=ue*V-O;for(let we=0;we<ne;we++){const Ye=we*y-B;ce[x]=Ye*R,ce[_]=ge*v,ce[p]=ee,c.push(ce.x,ce.y,ce.z),ce[x]=0,ce[_]=0,ce[p]=T>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(we/L),f.push(1-ue/D),ie+=1}}for(let ue=0;ue<D;ue++)for(let ge=0;ge<L;ge++){const we=h+ge+ne*ue,Ye=h+ge+ne*(ue+1),Q=h+(ge+1)+ne*(ue+1),he=h+(ge+1)+ne*ue;l.push(we,Ye,he),l.push(Ye,Q,he),$+=6}a.addGroup(m,$,M),m+=$,h+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Wt(n){const e={};for(let t=0;t<n.length;t++){const i=Fr(n[t]);for(const r in i)e[r]=i[r]}return e}function t0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ap(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const n0={clone:Fr,merge:Wt};var i0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends Gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i0,this.fragmentShader=r0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fr(e.uniforms),this.uniformsGroups=t0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class lp extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Yn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new z,bf=new Ie,Af=new Ie;class $t extends lp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=kl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(To*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kl*2*Math.atan(Math.tan(To*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,bf,Af),t.subVectors(Af,bf)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(To*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xr=-90,Er=1;class s0 extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $t(xr,Er,e,t);r.layers=this.layers,this.add(r);const s=new $t(xr,Er,e,t);s.layers=this.layers,this.add(s);const o=new $t(xr,Er,e,t);o.layers=this.layers,this.add(o);const a=new $t(xr,Er,e,t);a.layers=this.layers,this.add(a);const l=new $t(xr,Er,e,t);l.layers=this.layers,this.add(l);const c=new $t(xr,Er,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ho)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class cp extends jt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Dr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class o0 extends tr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new cp(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ps(5,5,5),s=new Kn({name:"CubemapFromEquirect",uniforms:Fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:xi});s.uniforms.tEquirect.value=t;const o=new bn(r,s),a=t.minFilter;return t.minFilter===Zi&&(t.minFilter=Mn),new s0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const sl=new z,a0=new z,l0=new Ge;class Xi{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=sl.subVectors(i,t).cross(a0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(sl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||l0.getNormalMatrix(e),r=this.coplanarPoint(sl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new Ls,ao=new z;class up{constructor(e=new Xi,t=new Xi,i=new Xi,r=new Xi,s=new Xi,o=new Xi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],m=r[8],g=r[9],x=r[10],_=r[11],p=r[12],R=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,_-m,S-p).normalize(),i[1].setComponents(l+s,h+c,_+m,S+p).normalize(),i[2].setComponents(l+o,h+u,_+g,S+R).normalize(),i[3].setComponents(l-o,h-u,_-g,S-R).normalize(),i[4].setComponents(l-a,h-f,_-x,S-v).normalize(),t===Yn)i[5].setComponents(l+a,h+f,_+x,S+v).normalize();else if(t===Ho)i[5].setComponents(a,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ao.x=r.normal.x>0?e.max.x:e.min.x,ao.y=r.normal.y>0?e.max.y:e.min.y,ao.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ao)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fp(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function c0(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(n.bindBuffer(c,a),f.count===-1&&h.length===0&&n.bufferSubData(c,0,u),h.length!==0){for(let m=0,g=h.length;m<g;m++){const x=h[m];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Is extends tn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,m=[],g=[],x=[],_=[];for(let p=0;p<u;p++){const R=p*h-o;for(let v=0;v<c;v++){const S=v*f-s;g.push(S,-R,0),x.push(0,0,1),_.push(v/a),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let R=0;R<a;R++){const v=R+c*p,S=R+c*(p+1),P=R+1+c*(p+1),T=R+1+c*p;m.push(v,S,T),m.push(S,P,T)}this.setIndex(m),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.width,e.height,e.widthSegments,e.heightSegments)}}var u0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f0=`#ifdef USE_ALPHAHASH
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
#endif`,h0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_0=`#ifdef USE_AOMAP
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
#endif`,g0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v0=`#ifdef USE_BATCHING
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
#endif`,x0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,E0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,y0=`#ifdef USE_IRIDESCENCE
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
#endif`,T0=`#ifdef USE_BUMPMAP
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
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,I0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,N0=`#define PI 3.141592653589793
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
} // validated`,D0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,U0=`vec3 transformedNormal = objectNormal;
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
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H0="gl_FragColor = linearToOutputTexel( gl_FragColor );",z0=`
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
}`,V0=`#ifdef USE_ENVMAP
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
#endif`,G0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$0=`#ifdef USE_ENVMAP
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
#endif`,Y0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J0=`#ifdef USE_GRADIENTMAP
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
}`,Z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tx=`uniform bool receiveShadow;
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
#endif`,nx=`#ifdef USE_ENVMAP
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
#endif`,ix=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ax=`PhysicalMaterial material;
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
#endif`,lx=`struct PhysicalMaterial {
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
}`,cx=`
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
#endif`,ux=`#if defined( RE_IndirectDiffuse )
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
#endif`,fx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,px=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_x=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xx=`#if defined( USE_POINTS_UV )
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
#endif`,Ex=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tx=`#ifdef USE_MORPHNORMALS
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
#endif`,bx=`#ifdef USE_MORPHTARGETS
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
#endif`,Ax=`#ifdef USE_MORPHTARGETS
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
#endif`,wx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Px=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ix=`#ifdef USE_NORMALMAP
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
#endif`,Nx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ux=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ox=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$x=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qx=`float getShadowMask() {
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
}`,jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kx=`#ifdef USE_SKINNING
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
#endif`,Jx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zx=`#ifdef USE_SKINNING
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
#endif`,Qx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iE=`#ifdef USE_TRANSMISSION
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
#endif`,rE=`#ifdef USE_TRANSMISSION
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
#endif`,sE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uE=`uniform sampler2D t2D;
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
}`,fE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mE=`#include <common>
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
}`,_E=`#if DEPTH_PACKING == 3200
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
}`,gE=`#define DISTANCE
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
}`,vE=`#define DISTANCE
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
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SE=`uniform float scale;
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
}`,ME=`uniform vec3 diffuse;
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
}`,yE=`#include <common>
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
}`,TE=`uniform vec3 diffuse;
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
}`,bE=`#define LAMBERT
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
}`,AE=`#define LAMBERT
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
}`,wE=`#define MATCAP
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
}`,RE=`#define MATCAP
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
}`,CE=`#define NORMAL
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
}`,LE=`#define NORMAL
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
}`,PE=`#define PHONG
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
}`,IE=`#define PHONG
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
}`,NE=`#define STANDARD
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
}`,DE=`#define STANDARD
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
}`,UE=`#define TOON
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
}`,OE=`#define TOON
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
}`,FE=`uniform float size;
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
}`,BE=`uniform vec3 diffuse;
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
}`,kE=`#include <common>
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
}`,HE=`uniform vec3 color;
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
}`,zE=`uniform float rotation;
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
}`,VE=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:u0,alphahash_pars_fragment:f0,alphamap_fragment:h0,alphamap_pars_fragment:d0,alphatest_fragment:p0,alphatest_pars_fragment:m0,aomap_fragment:_0,aomap_pars_fragment:g0,batching_pars_vertex:v0,batching_vertex:x0,begin_vertex:E0,beginnormal_vertex:S0,bsdfs:M0,iridescence_fragment:y0,bumpmap_pars_fragment:T0,clipping_planes_fragment:b0,clipping_planes_pars_fragment:A0,clipping_planes_pars_vertex:w0,clipping_planes_vertex:R0,color_fragment:C0,color_pars_fragment:L0,color_pars_vertex:P0,color_vertex:I0,common:N0,cube_uv_reflection_fragment:D0,defaultnormal_vertex:U0,displacementmap_pars_vertex:O0,displacementmap_vertex:F0,emissivemap_fragment:B0,emissivemap_pars_fragment:k0,colorspace_fragment:H0,colorspace_pars_fragment:z0,envmap_fragment:V0,envmap_common_pars_fragment:G0,envmap_pars_fragment:W0,envmap_pars_vertex:X0,envmap_physical_pars_fragment:nx,envmap_vertex:$0,fog_vertex:Y0,fog_pars_vertex:q0,fog_fragment:j0,fog_pars_fragment:K0,gradientmap_pars_fragment:J0,lightmap_pars_fragment:Z0,lights_lambert_fragment:Q0,lights_lambert_pars_fragment:ex,lights_pars_begin:tx,lights_toon_fragment:ix,lights_toon_pars_fragment:rx,lights_phong_fragment:sx,lights_phong_pars_fragment:ox,lights_physical_fragment:ax,lights_physical_pars_fragment:lx,lights_fragment_begin:cx,lights_fragment_maps:ux,lights_fragment_end:fx,logdepthbuf_fragment:hx,logdepthbuf_pars_fragment:dx,logdepthbuf_pars_vertex:px,logdepthbuf_vertex:mx,map_fragment:_x,map_pars_fragment:gx,map_particle_fragment:vx,map_particle_pars_fragment:xx,metalnessmap_fragment:Ex,metalnessmap_pars_fragment:Sx,morphinstance_vertex:Mx,morphcolor_vertex:yx,morphnormal_vertex:Tx,morphtarget_pars_vertex:bx,morphtarget_vertex:Ax,normal_fragment_begin:wx,normal_fragment_maps:Rx,normal_pars_fragment:Cx,normal_pars_vertex:Lx,normal_vertex:Px,normalmap_pars_fragment:Ix,clearcoat_normal_fragment_begin:Nx,clearcoat_normal_fragment_maps:Dx,clearcoat_pars_fragment:Ux,iridescence_pars_fragment:Ox,opaque_fragment:Fx,packing:Bx,premultiplied_alpha_fragment:kx,project_vertex:Hx,dithering_fragment:zx,dithering_pars_fragment:Vx,roughnessmap_fragment:Gx,roughnessmap_pars_fragment:Wx,shadowmap_pars_fragment:Xx,shadowmap_pars_vertex:$x,shadowmap_vertex:Yx,shadowmask_pars_fragment:qx,skinbase_vertex:jx,skinning_pars_vertex:Kx,skinning_vertex:Jx,skinnormal_vertex:Zx,specularmap_fragment:Qx,specularmap_pars_fragment:eE,tonemapping_fragment:tE,tonemapping_pars_fragment:nE,transmission_fragment:iE,transmission_pars_fragment:rE,uv_pars_fragment:sE,uv_pars_vertex:oE,uv_vertex:aE,worldpos_vertex:lE,background_vert:cE,background_frag:uE,backgroundCube_vert:fE,backgroundCube_frag:hE,cube_vert:dE,cube_frag:pE,depth_vert:mE,depth_frag:_E,distanceRGBA_vert:gE,distanceRGBA_frag:vE,equirect_vert:xE,equirect_frag:EE,linedashed_vert:SE,linedashed_frag:ME,meshbasic_vert:yE,meshbasic_frag:TE,meshlambert_vert:bE,meshlambert_frag:AE,meshmatcap_vert:wE,meshmatcap_frag:RE,meshnormal_vert:CE,meshnormal_frag:LE,meshphong_vert:PE,meshphong_frag:IE,meshphysical_vert:NE,meshphysical_frag:DE,meshtoon_vert:UE,meshtoon_frag:OE,points_vert:FE,points_frag:BE,shadow_vert:kE,shadow_frag:HE,sprite_vert:zE,sprite_frag:VE},_e={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Pn={basic:{uniforms:Wt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Wt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new et(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Wt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Wt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Wt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new et(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Wt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Wt([_e.points,_e.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Wt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Wt([_e.common,_e.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Wt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Wt([_e.sprite,_e.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Wt([_e.common,_e.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Wt([_e.lights,_e.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Pn.physical={uniforms:Wt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const lo={r:0,b:0,g:0},zi=new jn,GE=new _t;function WE(n,e,t,i,r,s,o){const a=new et(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function g(R){let v=R.isScene===!0?R.background:null;return v&&v.isTexture&&(v=(R.backgroundBlurriness>0?t:e).get(v)),v}function x(R){let v=!1;const S=g(R);S===null?p(a,l):S&&S.isColor&&(p(S,1),v=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil)}function _(R,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===ua)?(u===void 0&&(u=new bn(new Ps(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Fr(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),zi.copy(v.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(GE.makeRotationFromEuler(zi)),u.material.toneMapped=st.getTransfer(S.colorSpace)!==lt,(f!==S||h!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,m=n.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new bn(new Is(2,2),new Kn({name:"BackgroundMaterial",uniforms:Fr(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=st.getTransfer(S.colorSpace)!==lt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,m=n.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function p(R,v){R.getRGB(lo,ap(n)),i.buffers.color.setClear(lo.r,lo.g,lo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(R,v=1){a.set(R),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,p(a,l)},render:x,addToRenderList:_}}function XE(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,V,B,O,ee){let ne=!1;const se=f(O,B,V);s!==se&&(s=se,c(s.object)),ne=m(y,O,B,ee),ne&&g(y,O,B,ee),ee!==null&&e.update(ee,n.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,S(y,V,B,O),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,V,B){const O=B.wireframe===!0;let ee=i[y.id];ee===void 0&&(ee={},i[y.id]=ee);let ne=ee[V.id];ne===void 0&&(ne={},ee[V.id]=ne);let se=ne[O];return se===void 0&&(se=h(l()),ne[O]=se),se}function h(y){const V=[],B=[],O=[];for(let ee=0;ee<t;ee++)V[ee]=0,B[ee]=0,O[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:B,attributeDivisors:O,object:y,attributes:{},index:null}}function m(y,V,B,O){const ee=s.attributes,ne=V.attributes;let se=0;const ie=B.getAttributes();for(const $ in ie)if(ie[$].location>=0){const ue=ee[$];let ge=ne[$];if(ge===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),ue===void 0||ue.attribute!==ge||ge&&ue.data!==ge.data)return!0;se++}return s.attributesNum!==se||s.index!==O}function g(y,V,B,O){const ee={},ne=V.attributes;let se=0;const ie=B.getAttributes();for(const $ in ie)if(ie[$].location>=0){let ue=ne[$];ue===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(ue=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(ue=y.instanceColor));const ge={};ge.attribute=ue,ue&&ue.data&&(ge.data=ue.data),ee[$]=ge,se++}s.attributes=ee,s.attributesNum=se,s.index=O}function x(){const y=s.newAttributes;for(let V=0,B=y.length;V<B;V++)y[V]=0}function _(y){p(y,0)}function p(y,V){const B=s.newAttributes,O=s.enabledAttributes,ee=s.attributeDivisors;B[y]=1,O[y]===0&&(n.enableVertexAttribArray(y),O[y]=1),ee[y]!==V&&(n.vertexAttribDivisor(y,V),ee[y]=V)}function R(){const y=s.newAttributes,V=s.enabledAttributes;for(let B=0,O=V.length;B<O;B++)V[B]!==y[B]&&(n.disableVertexAttribArray(B),V[B]=0)}function v(y,V,B,O,ee,ne,se){se===!0?n.vertexAttribIPointer(y,V,B,ee,ne):n.vertexAttribPointer(y,V,B,O,ee,ne)}function S(y,V,B,O){x();const ee=O.attributes,ne=B.getAttributes(),se=V.defaultAttributeValues;for(const ie in ne){const $=ne[ie];if($.location>=0){let ce=ee[ie];if(ce===void 0&&(ie==="instanceMatrix"&&y.instanceMatrix&&(ce=y.instanceMatrix),ie==="instanceColor"&&y.instanceColor&&(ce=y.instanceColor)),ce!==void 0){const ue=ce.normalized,ge=ce.itemSize,we=e.get(ce);if(we===void 0)continue;const Ye=we.buffer,Q=we.type,he=we.bytesPerElement,me=Q===n.INT||Q===n.UNSIGNED_INT||ce.gpuType===Yd;if(ce.isInterleavedBufferAttribute){const de=ce.data,Ue=de.stride,Fe=ce.offset;if(de.isInstancedInterleavedBuffer){for(let W=0;W<$.locationSize;W++)p($.location+W,de.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let W=0;W<$.locationSize;W++)_($.location+W);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let W=0;W<$.locationSize;W++)v($.location+W,ge/$.locationSize,Q,ue,Ue*he,(Fe+ge/$.locationSize*W)*he,me)}else{if(ce.isInstancedBufferAttribute){for(let de=0;de<$.locationSize;de++)p($.location+de,ce.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let de=0;de<$.locationSize;de++)_($.location+de);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let de=0;de<$.locationSize;de++)v($.location+de,ge/$.locationSize,Q,ue,ge*he,ge/$.locationSize*de*he,me)}}else if(se!==void 0){const ue=se[ie];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv($.location,ue);break;case 3:n.vertexAttrib3fv($.location,ue);break;case 4:n.vertexAttrib4fv($.location,ue);break;default:n.vertexAttrib1fv($.location,ue)}}}}R()}function P(){D();for(const y in i){const V=i[y];for(const B in V){const O=V[B];for(const ee in O)u(O[ee].object),delete O[ee];delete V[B]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;const V=i[y.id];for(const B in V){const O=V[B];for(const ee in O)u(O[ee].object),delete O[ee];delete V[B]}delete i[y.id]}function L(y){for(const V in i){const B=i[V];if(B[y.id]===void 0)continue;const O=B[y.id];for(const ee in O)u(O[ee].object),delete O[ee];delete B[y.id]}}function D(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:_,disableUnusedAttributes:R}}function $E(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<f;m++)this.render(c[m],u[m]);else{h.multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let g=0;g<f;g++)m+=u[g];t.update(m,i,1)}}function l(c,u,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];for(let x=0;x<h.length;x++)t.update(g,i,h[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function YE(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Nn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const L=T===fa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==bi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==mi&&!L)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=m>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:p,maxVaryings:R,maxFragmentUniforms:v,vertexTextures:S,maxSamples:P}}function qE(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Xi,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const g=f.clippingPlanes,x=f.clipIntersection,_=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!_)s?u(null):c();else{const R=s?0:i,v=R*4;let S=p.clippingState||null;l.value=S,S=u(g,h,v,m);for(let P=0;P!==v;++P)S[P]=t[P];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,g){const x=f!==null?f.length:0;let _=null;if(x!==0){if(_=l.value,g!==!0||_===null){const p=m+x*4,R=h.matrixWorldInverse;a.getNormalMatrix(R),(_===null||_.length<p)&&(_=new Float32Array(p));for(let v=0,S=m;v!==x;++v,S+=4)o.copy(f[v]).applyMatrix4(R,a),o.normal.toArray(_,S),_[S+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,_}}function jE(n){let e=new WeakMap;function t(o,a){return a===Ul?o.mapping=Dr:a===Ol&&(o.mapping=Ur),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ul||a===Ol)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new o0(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class KE extends lp{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Tr=4,wf=[.125,.215,.35,.446,.526,.582],Ki=20,ol=new KE,Rf=new et;let al=null,ll=0,cl=0,ul=!1;const $i=(1+Math.sqrt(5))/2,Sr=1/$i,Cf=[new z(-$i,Sr,0),new z($i,Sr,0),new z(-Sr,0,$i),new z(Sr,0,$i),new z(0,$i,-Sr),new z(0,$i,Sr),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Lf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){al=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=If(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(al,ll,cl),this._renderer.xr.enabled=ul,e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Dr||e.mapping===Ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),al=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:fa,format:Nn,colorSpace:Ci,depthBuffer:!1},r=Pf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JE(s)),this._blurMaterial=ZE(s,e,t)}return r}_compileMaterial(e){const t=new bn(this._lodPlanes[0],e);this._renderer.compile(t,ol)}_sceneToCubeUV(e,t,i,r){const a=new $t(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Rf),u.toneMapping=Ei,u.autoClear=!1;const m=new yc({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),g=new bn(new Ps,m);let x=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,x=!0):(m.color.copy(Rf),x=!0);for(let p=0;p<6;p++){const R=p%3;R===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):R===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;co(r,R*v,p>2?v:0,v,v),u.setRenderTarget(r),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Dr||e.mapping===Ur;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=If());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new bn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;co(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ol)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Cf[(r-s-1)%Cf.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new bn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ki-1),x=s/g,_=isFinite(s)?1+Math.floor(u*x):Ki;_>Ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ki}`);const p=[];let R=0;for(let L=0;L<Ki;++L){const D=L/x,M=Math.exp(-D*D/2);p.push(M),L===0?R+=M:L<_&&(R+=2*M)}for(let L=0;L<p.length;L++)p[L]=p[L]/R;h.envMap.value=e.texture,h.samples.value=_,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const S=this._sizeLods[r],P=3*S*(r>v-Tr?r-v+Tr:0),T=4*(this._cubeSize-S);co(t,P,T,3*S,2*S),l.setRenderTarget(t),l.render(f,ol)}}function JE(n){const e=[],t=[],i=[];let r=n;const s=n-Tr+1+wf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Tr?l=wf[o-n+Tr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,x=3,_=2,p=1,R=new Float32Array(x*g*m),v=new Float32Array(_*g*m),S=new Float32Array(p*g*m);for(let T=0;T<m;T++){const L=T%3*2/3-1,D=T>2?0:-1,M=[L,D,0,L+2/3,D,0,L+2/3,D+1,0,L,D,0,L+2/3,D+1,0,L,D+1,0];R.set(M,x*g*T),v.set(h,_*g*T);const y=[T,T,T,T,T,T];S.set(y,p*g*T)}const P=new tn;P.setAttribute("position",new mn(R,x)),P.setAttribute("uv",new mn(v,_)),P.setAttribute("faceIndex",new mn(S,p)),e.push(P),r>Tr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Pf(n,e,t){const i=new tr(n,e,t);return i.texture.mapping=ua,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function co(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ZE(n,e,t){const i=new Float32Array(Ki),r=new z(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function If(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Nf(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Tc(){return`

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
	`}function QE(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ul||l===Ol,u=l===Dr||l===Ur;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Lf(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new Lf(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function eS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function tS(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const x=h.morphAttributes[g];for(let _=0,p=x.length;_<p;_++)e.remove(x[_])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const x=m[g];for(let _=0,p=x.length;_<p;_++)e.update(x[_],n.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let x=0;if(m!==null){const R=m.array;x=m.version;for(let v=0,S=R.length;v<S;v+=3){const P=R[v+0],T=R[v+1],L=R[v+2];h.push(P,T,T,L,L,P)}}else if(g!==void 0){const R=g.array;x=g.version;for(let v=0,S=R.length/3-1;v<S;v+=3){const P=v+0,T=v+1,L=v+2;h.push(P,T,T,L,L,P)}}else return;const _=new(ep(h)?op:sp)(h,1);_.version=x;const p=s.get(f);p&&e.remove(p),s.set(f,_)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function nS(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){n.drawElements(i,m,s,h*o),t.update(m,i,1)}function c(h,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,h*o,g),t.update(m,i,g))}function u(h,m,g){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<g;_++)this.render(h[_]/o,m[_]);else{x.multiDrawElementsWEBGL(i,m,0,s,h,0,g);let _=0;for(let p=0;p<g;p++)_+=m[p];t.update(_,i,1)}}function f(h,m,g,x){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<h.length;p++)c(h[p]/o,m[p],x[p]);else{_.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,x,0,g);let p=0;for(let R=0;R<g;R++)p+=m[R];for(let R=0;R<x.length;R++)t.update(p,i,x[R])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function iS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function rS(n,e,t){const i=new WeakMap,r=new Ct;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let y=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var m=y;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],R=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),_===!0&&(S=3);let P=a.attributes.position.count*S,T=1;P>e.maxTextureSize&&(T=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const L=new Float32Array(P*T*4*f),D=new np(L,P,T,f);D.type=mi,D.needsUpdate=!0;const M=S*4;for(let V=0;V<f;V++){const B=p[V],O=R[V],ee=v[V],ne=P*T*4*V;for(let se=0;se<B.count;se++){const ie=se*M;g===!0&&(r.fromBufferAttribute(B,se),L[ne+ie+0]=r.x,L[ne+ie+1]=r.y,L[ne+ie+2]=r.z,L[ne+ie+3]=0),x===!0&&(r.fromBufferAttribute(O,se),L[ne+ie+4]=r.x,L[ne+ie+5]=r.y,L[ne+ie+6]=r.z,L[ne+ie+7]=0),_===!0&&(r.fromBufferAttribute(ee,se),L[ne+ie+8]=r.x,L[ne+ie+9]=r.y,L[ne+ie+10]=r.z,L[ne+ie+11]=ee.itemSize===4?r.w:1)}}h={count:f,texture:D,size:new Ie(P,T)},i.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let _=0;_<c.length;_++)g+=c[_];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function sS(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class hp extends jt{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Pr,u!==Pr&&u!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Pr&&(i=Or),i===void 0&&u===xs&&(i=As),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const dp=new jt,pp=new hp(1,1);pp.compareFunction=Qd;const mp=new np,_p=new Wv,gp=new cp,Df=[],Uf=[],Of=new Float32Array(16),Ff=new Float32Array(9),Bf=new Float32Array(4);function Wr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Df[r];if(s===void 0&&(s=new Float32Array(r),Df[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function da(n,e){let t=Uf[e];t===void 0&&(t=new Int32Array(e),Uf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function oS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function aS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function lS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function cS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function uS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(yt(t,i))return;Bf.set(i),n.uniformMatrix2fv(this.addr,!1,Bf),Tt(t,i)}}function fS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(yt(t,i))return;Ff.set(i),n.uniformMatrix3fv(this.addr,!1,Ff),Tt(t,i)}}function hS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(yt(t,i))return;Of.set(i),n.uniformMatrix4fv(this.addr,!1,Of),Tt(t,i)}}function dS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function pS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function mS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function _S(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function gS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function vS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function xS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function ES(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function SS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?pp:dp;t.setTexture2D(e||s,r)}function MS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||_p,r)}function yS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||gp,r)}function TS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||mp,r)}function bS(n){switch(n){case 5126:return oS;case 35664:return aS;case 35665:return lS;case 35666:return cS;case 35674:return uS;case 35675:return fS;case 35676:return hS;case 5124:case 35670:return dS;case 35667:case 35671:return pS;case 35668:case 35672:return mS;case 35669:case 35673:return _S;case 5125:return gS;case 36294:return vS;case 36295:return xS;case 36296:return ES;case 35678:case 36198:case 36298:case 36306:case 35682:return SS;case 35679:case 36299:case 36307:return MS;case 35680:case 36300:case 36308:case 36293:return yS;case 36289:case 36303:case 36311:case 36292:return TS}}function AS(n,e){n.uniform1fv(this.addr,e)}function wS(n,e){const t=Wr(e,this.size,2);n.uniform2fv(this.addr,t)}function RS(n,e){const t=Wr(e,this.size,3);n.uniform3fv(this.addr,t)}function CS(n,e){const t=Wr(e,this.size,4);n.uniform4fv(this.addr,t)}function LS(n,e){const t=Wr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function PS(n,e){const t=Wr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function IS(n,e){const t=Wr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function NS(n,e){n.uniform1iv(this.addr,e)}function DS(n,e){n.uniform2iv(this.addr,e)}function US(n,e){n.uniform3iv(this.addr,e)}function OS(n,e){n.uniform4iv(this.addr,e)}function FS(n,e){n.uniform1uiv(this.addr,e)}function BS(n,e){n.uniform2uiv(this.addr,e)}function kS(n,e){n.uniform3uiv(this.addr,e)}function HS(n,e){n.uniform4uiv(this.addr,e)}function zS(n,e,t){const i=this.cache,r=e.length,s=da(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||dp,s[o])}function VS(n,e,t){const i=this.cache,r=e.length,s=da(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||_p,s[o])}function GS(n,e,t){const i=this.cache,r=e.length,s=da(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||gp,s[o])}function WS(n,e,t){const i=this.cache,r=e.length,s=da(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||mp,s[o])}function XS(n){switch(n){case 5126:return AS;case 35664:return wS;case 35665:return RS;case 35666:return CS;case 35674:return LS;case 35675:return PS;case 35676:return IS;case 5124:case 35670:return NS;case 35667:case 35671:return DS;case 35668:case 35672:return US;case 35669:case 35673:return OS;case 5125:return FS;case 36294:return BS;case 36295:return kS;case 36296:return HS;case 35678:case 36198:case 36298:case 36306:case 35682:return zS;case 35679:case 36299:case 36307:return VS;case 35680:case 36300:case 36308:case 36293:return GS;case 36289:case 36303:case 36311:case 36292:return WS}}class $S{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=bS(t.type)}}class YS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=XS(t.type)}}class qS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const fl=/(\w+)(\])?(\[|\.)?/g;function kf(n,e){n.seq.push(e),n.map[e.id]=e}function jS(n,e,t){const i=n.name,r=i.length;for(fl.lastIndex=0;;){const s=fl.exec(i),o=fl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){kf(t,c===void 0?new $S(a,n,e):new YS(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new qS(a),kf(t,f)),t=f}}}class bo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);jS(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Hf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const KS=37297;let JS=0;function ZS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function QS(n){const e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(n);let i;switch(e===t?i="":e===ko&&t===Bo?i="LinearDisplayP3ToLinearSRGB":e===Bo&&t===ko&&(i="LinearSRGBToLinearDisplayP3"),n){case Ci:case ha:return[i,"LinearTransferOETF"];case Cn:case Sc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function zf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ZS(n.getShaderSource(e),o)}else return r}function eM(n,e){const t=QS(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function tM(n,e){let t;switch(e){case av:t="Linear";break;case lv:t="Reinhard";break;case cv:t="OptimizedCineon";break;case uv:t="ACESFilmic";break;case hv:t="AgX";break;case dv:t="Neutral";break;case fv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function nM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(is).join(`
`)}function iM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function rM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function is(n){return n!==""}function Vf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(n){return n.replace(sM,aM)}const oM=new Map;function aM(n,e){let t=Ve[e];if(t===void 0){const i=oM.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hl(t)}const lM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wf(n){return n.replace(lM,cM)}function cM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Gd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ng?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function fM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Dr:case Ur:e="ENVMAP_TYPE_CUBE";break;case ua:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ur:e="ENVMAP_MODE_REFRACTION";break}return e}function dM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Wd:e="ENVMAP_BLENDING_MULTIPLY";break;case sv:e="ENVMAP_BLENDING_MIX";break;case ov:e="ENVMAP_BLENDING_ADD";break}return e}function pM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function mM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=uM(t),c=fM(t),u=hM(t),f=dM(t),h=pM(t),m=nM(t),g=iM(s),x=r.createProgram();let _,p,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(is).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(is).join(`
`),p.length>0&&(p+=`
`)):(_=[Xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),p=[Xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Ei?tM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,eM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(is).join(`
`)),o=Hl(o),o=Vf(o,t),o=Gf(o,t),a=Hl(a),a=Vf(a,t),a=Gf(a,t),o=Wf(o),a=Wf(a),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===af?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===af?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=R+_+o,S=R+p+a,P=Hf(r,r.VERTEX_SHADER,v),T=Hf(r,r.FRAGMENT_SHADER,S);r.attachShader(x,P),r.attachShader(x,T),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function L(V){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(x).trim(),O=r.getShaderInfoLog(P).trim(),ee=r.getShaderInfoLog(T).trim();let ne=!0,se=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,P,T);else{const ie=zf(r,P,"vertex"),$=zf(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+B+`
`+ie+`
`+$)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(O===""||ee==="")&&(se=!1);se&&(V.diagnostics={runnable:ne,programLog:B,vertexShader:{log:O,prefix:_},fragmentShader:{log:ee,prefix:p}})}r.deleteShader(P),r.deleteShader(T),D=new bo(r,x),M=rM(r,x)}let D;this.getUniforms=function(){return D===void 0&&L(this),D};let M;this.getAttributes=function(){return M===void 0&&L(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,KS)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=T,this}let _M=0;class gM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new vM(e),t.set(e,i)),i}}class vM{constructor(e){this.id=_M++,this.code=e,this.usedTimes=0}}function xM(n,e,t,i,r,s,o){const a=new ip,l=new gM,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function _(M,y,V,B,O){const ee=B.fog,ne=O.geometry,se=M.isMeshStandardMaterial?B.environment:null,ie=(M.isMeshStandardMaterial?t:e).get(M.envMap||se),$=ie&&ie.mapping===ua?ie.image.height:null,ce=g[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const ue=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,ge=ue!==void 0?ue.length:0;let we=0;ne.morphAttributes.position!==void 0&&(we=1),ne.morphAttributes.normal!==void 0&&(we=2),ne.morphAttributes.color!==void 0&&(we=3);let Ye,Q,he,me;if(ce){const rt=Pn[ce];Ye=rt.vertexShader,Q=rt.fragmentShader}else Ye=M.vertexShader,Q=M.fragmentShader,l.update(M),he=l.getVertexShaderID(M),me=l.getFragmentShaderID(M);const de=n.getRenderTarget(),Ue=O.isInstancedMesh===!0,Fe=O.isBatchedMesh===!0,W=!!M.map,Ke=!!M.matcap,be=!!ie,I=!!M.aoMap,b=!!M.lightMap,k=!!M.bumpMap,q=!!M.normalMap,J=!!M.displacementMap,oe=!!M.emissiveMap,A=!!M.metalnessMap,d=!!M.roughnessMap,E=M.anisotropy>0,w=M.clearcoat>0,U=M.dispersion>0,G=M.iridescence>0,Y=M.sheen>0,N=M.transmission>0,F=E&&!!M.anisotropyMap,le=w&&!!M.clearcoatMap,te=w&&!!M.clearcoatNormalMap,pe=w&&!!M.clearcoatRoughnessMap,Re=G&&!!M.iridescenceMap,ye=G&&!!M.iridescenceThicknessMap,Se=Y&&!!M.sheenColorMap,De=Y&&!!M.sheenRoughnessMap,We=!!M.specularMap,qe=!!M.specularColorMap,Ce=!!M.specularIntensityMap,H=N&&!!M.transmissionMap,ae=N&&!!M.thicknessMap,re=!!M.gradientMap,xe=!!M.alphaMap,Me=M.alphaTest>0,Ze=!!M.alphaHash,at=!!M.extensions;let mt=Ei;M.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(mt=n.toneMapping);const It={shaderID:ce,shaderType:M.type,shaderName:M.name,vertexShader:Ye,fragmentShader:Q,defines:M.defines,customVertexShaderID:he,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Fe,instancing:Ue,instancingColor:Ue&&O.instanceColor!==null,instancingMorph:Ue&&O.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Ci,alphaToCoverage:!!M.alphaToCoverage,map:W,matcap:Ke,envMap:be,envMapMode:be&&ie.mapping,envMapCubeUVHeight:$,aoMap:I,lightMap:b,bumpMap:k,normalMap:q,displacementMap:h&&J,emissiveMap:oe,normalMapObjectSpace:q&&M.normalMapType===Rv,normalMapTangentSpace:q&&M.normalMapType===wv,metalnessMap:A,roughnessMap:d,anisotropy:E,anisotropyMap:F,clearcoat:w,clearcoatMap:le,clearcoatNormalMap:te,clearcoatRoughnessMap:pe,dispersion:U,iridescence:G,iridescenceMap:Re,iridescenceThicknessMap:ye,sheen:Y,sheenColorMap:Se,sheenRoughnessMap:De,specularMap:We,specularColorMap:qe,specularIntensityMap:Ce,transmission:N,transmissionMap:H,thicknessMap:ae,gradientMap:re,opaque:M.transparent===!1&&M.blending===Lr&&M.alphaToCoverage===!1,alphaMap:xe,alphaTest:Me,alphaHash:Ze,combine:M.combine,mapUv:W&&x(M.map.channel),aoMapUv:I&&x(M.aoMap.channel),lightMapUv:b&&x(M.lightMap.channel),bumpMapUv:k&&x(M.bumpMap.channel),normalMapUv:q&&x(M.normalMap.channel),displacementMapUv:J&&x(M.displacementMap.channel),emissiveMapUv:oe&&x(M.emissiveMap.channel),metalnessMapUv:A&&x(M.metalnessMap.channel),roughnessMapUv:d&&x(M.roughnessMap.channel),anisotropyMapUv:F&&x(M.anisotropyMap.channel),clearcoatMapUv:le&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:te&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(M.sheenRoughnessMap.channel),specularMapUv:We&&x(M.specularMap.channel),specularColorMapUv:qe&&x(M.specularColorMap.channel),specularIntensityMapUv:Ce&&x(M.specularIntensityMap.channel),transmissionMapUv:H&&x(M.transmissionMap.channel),thicknessMapUv:ae&&x(M.thicknessMap.channel),alphaMapUv:xe&&x(M.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(q||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!ne.attributes.uv&&(W||xe),fog:!!ee,useFog:M.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:we,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:mt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:W&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Xn,flipSided:M.side===qt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:at&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:at&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const V in M.defines)y.push(V),y.push(M.defines[V]);return M.isRawShaderMaterial===!1&&(R(y,M),v(y,M),y.push(n.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function R(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function v(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),M.push(a.mask)}function S(M){const y=g[M.type];let V;if(y){const B=Pn[y];V=n0.clone(B.uniforms)}else V=M.uniforms;return V}function P(M,y){let V;for(let B=0,O=u.length;B<O;B++){const ee=u[B];if(ee.cacheKey===y){V=ee,++V.usedTimes;break}}return V===void 0&&(V=new mM(n,y,M,s),u.push(V)),V}function T(M){if(--M.usedTimes===0){const y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function L(M){l.remove(M)}function D(){l.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:S,acquireProgram:P,releaseProgram:T,releaseShaderCache:L,programs:u,dispose:D}}function EM(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function SM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $f(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Yf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,m,g,x,_){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:x,group:_},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=m,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=x,p.group=_),e++,p}function a(f,h,m,g,x,_){const p=o(f,h,m,g,x,_);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(f,h,m,g,x,_){const p=o(f,h,m,g,x,_);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||SM),i.length>1&&i.sort(h||$f),r.length>1&&r.sort(h||$f)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function MM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Yf,n.set(i,[o])):r>=s.length?(o=new Yf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function yM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new et};break;case"SpotLight":t={position:new z,direction:new z,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function TM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let bM=0;function AM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function wM(n){const e=new yM,t=TM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new _t,o=new _t;function a(c,u){let f=0,h=0,m=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let g=0,x=0,_=0,p=0,R=0,v=0,S=0,P=0,T=0,L=0,D=0;c.sort(AM);const M=u===!0?Math.PI:1;for(let V=0,B=c.length;V<B;V++){const O=c[V],ee=O.color,ne=O.intensity,se=O.distance,ie=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=ee.r*ne*M,h+=ee.g*ne*M,m+=ee.b*ne*M;else if(O.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(O.sh.coefficients[$],ne);D++}else if(O.isDirectionalLight){const $=e.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity*M),O.castShadow){const ce=O.shadow,ue=t.get(O);ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,i.directionalShadow[g]=ue,i.directionalShadowMap[g]=ie,i.directionalShadowMatrix[g]=O.shadow.matrix,v++}i.directional[g]=$,g++}else if(O.isSpotLight){const $=e.get(O);$.position.setFromMatrixPosition(O.matrixWorld),$.color.copy(ee).multiplyScalar(ne*M),$.distance=se,$.coneCos=Math.cos(O.angle),$.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),$.decay=O.decay,i.spot[_]=$;const ce=O.shadow;if(O.map&&(i.spotLightMap[T]=O.map,T++,ce.updateMatrices(O),O.castShadow&&L++),i.spotLightMatrix[_]=ce.matrix,O.castShadow){const ue=t.get(O);ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,i.spotShadow[_]=ue,i.spotShadowMap[_]=ie,P++}_++}else if(O.isRectAreaLight){const $=e.get(O);$.color.copy(ee).multiplyScalar(ne),$.halfWidth.set(O.width*.5,0,0),$.halfHeight.set(0,O.height*.5,0),i.rectArea[p]=$,p++}else if(O.isPointLight){const $=e.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity*M),$.distance=O.distance,$.decay=O.decay,O.castShadow){const ce=O.shadow,ue=t.get(O);ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,ue.shadowCameraNear=ce.camera.near,ue.shadowCameraFar=ce.camera.far,i.pointShadow[x]=ue,i.pointShadowMap[x]=ie,i.pointShadowMatrix[x]=O.shadow.matrix,S++}i.point[x]=$,x++}else if(O.isHemisphereLight){const $=e.get(O);$.skyColor.copy(O.color).multiplyScalar(ne*M),$.groundColor.copy(O.groundColor).multiplyScalar(ne*M),i.hemi[R]=$,R++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=m;const y=i.hash;(y.directionalLength!==g||y.pointLength!==x||y.spotLength!==_||y.rectAreaLength!==p||y.hemiLength!==R||y.numDirectionalShadows!==v||y.numPointShadows!==S||y.numSpotShadows!==P||y.numSpotMaps!==T||y.numLightProbes!==D)&&(i.directional.length=g,i.spot.length=_,i.rectArea.length=p,i.point.length=x,i.hemi.length=R,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=P+T-L,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=D,y.directionalLength=g,y.pointLength=x,y.spotLength=_,y.rectAreaLength=p,y.hemiLength=R,y.numDirectionalShadows=v,y.numPointShadows=S,y.numSpotShadows=P,y.numSpotMaps=T,y.numLightProbes=D,i.version=bM++)}function l(c,u){let f=0,h=0,m=0,g=0,x=0;const _=u.matrixWorldInverse;for(let p=0,R=c.length;p<R;p++){const v=c[p];if(v.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),f++}else if(v.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),m++}else if(v.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(_),o.identity(),s.copy(v.matrixWorld),s.premultiply(_),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(_),h++}else if(v.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(_),x++}}}return{setup:a,setupView:l,state:i}}function qf(n){const e=new wM(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(u){e.setup(t,u)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function RM(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new qf(n),e.set(r,[a])):s>=o.length?(a=new qf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class CM extends Gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LM extends Gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const PM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IM=`uniform sampler2D shadow_pass;
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
}`;function NM(n,e,t){let i=new up;const r=new Ie,s=new Ie,o=new Ct,a=new CM({depthPacking:Av}),l=new LM,c={},u=t.maxTextureSize,f={[Ti]:qt,[qt]:Ti,[Xn]:Xn},h=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:PM,fragmentShader:IM}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new tn;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new bn(g,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gd;let p=this.type;this.render=function(T,L,D){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||T.length===0)return;const M=n.getRenderTarget(),y=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),B=n.state;B.setBlending(xi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const O=p!==Wn&&this.type===Wn,ee=p===Wn&&this.type!==Wn;for(let ne=0,se=T.length;ne<se;ne++){const ie=T[ne],$=ie.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const ce=$.getFrameExtents();if(r.multiply(ce),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ce.x),r.x=s.x*ce.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ce.y),r.y=s.y*ce.y,$.mapSize.y=s.y)),$.map===null||O===!0||ee===!0){const ge=this.type!==Wn?{minFilter:dn,magFilter:dn}:{};$.map!==null&&$.map.dispose(),$.map=new tr(r.x,r.y,ge),$.map.texture.name=ie.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const ue=$.getViewportCount();for(let ge=0;ge<ue;ge++){const we=$.getViewport(ge);o.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),B.viewport(o),$.updateMatrices(ie,ge),i=$.getFrustum(),S(L,D,$.camera,ie,this.type)}$.isPointLightShadow!==!0&&this.type===Wn&&R($,D),$.needsUpdate=!1}p=this.type,_.needsUpdate=!1,n.setRenderTarget(M,y,V)};function R(T,L){const D=e.update(x);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new tr(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(L,null,D,h,x,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(L,null,D,m,x,null)}function v(T,L,D,M){let y=null;const V=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(V!==void 0)y=V;else if(y=D.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const B=y.uuid,O=L.uuid;let ee=c[B];ee===void 0&&(ee={},c[B]=ee);let ne=ee[O];ne===void 0&&(ne=y.clone(),ee[O]=ne,L.addEventListener("dispose",P)),y=ne}if(y.visible=L.visible,y.wireframe=L.wireframe,M===Wn?y.side=L.shadowSide!==null?L.shadowSide:L.side:y.side=L.shadowSide!==null?L.shadowSide:f[L.side],y.alphaMap=L.alphaMap,y.alphaTest=L.alphaTest,y.map=L.map,y.clipShadows=L.clipShadows,y.clippingPlanes=L.clippingPlanes,y.clipIntersection=L.clipIntersection,y.displacementMap=L.displacementMap,y.displacementScale=L.displacementScale,y.displacementBias=L.displacementBias,y.wireframeLinewidth=L.wireframeLinewidth,y.linewidth=L.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=n.properties.get(y);B.light=D}return y}function S(T,L,D,M,y){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Wn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const O=e.update(T),ee=T.material;if(Array.isArray(ee)){const ne=O.groups;for(let se=0,ie=ne.length;se<ie;se++){const $=ne[se],ce=ee[$.materialIndex];if(ce&&ce.visible){const ue=v(T,ce,M,y);T.onBeforeShadow(n,T,L,D,O,ue,$),n.renderBufferDirect(D,null,O,ue,T,$),T.onAfterShadow(n,T,L,D,O,ue,$)}}}else if(ee.visible){const ne=v(T,ee,M,y);T.onBeforeShadow(n,T,L,D,O,ne,null),n.renderBufferDirect(D,null,O,ne,T,null),T.onAfterShadow(n,T,L,D,O,ne,null)}}const B=T.children;for(let O=0,ee=B.length;O<ee;O++)S(B[O],L,D,M,y)}function P(T){T.target.removeEventListener("dispose",P);for(const D in c){const M=c[D],y=T.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}function DM(n){function e(){let H=!1;const ae=new Ct;let re=null;const xe=new Ct(0,0,0,0);return{setMask:function(Me){re!==Me&&!H&&(n.colorMask(Me,Me,Me,Me),re=Me)},setLocked:function(Me){H=Me},setClear:function(Me,Ze,at,mt,It){It===!0&&(Me*=mt,Ze*=mt,at*=mt),ae.set(Me,Ze,at,mt),xe.equals(ae)===!1&&(n.clearColor(Me,Ze,at,mt),xe.copy(ae))},reset:function(){H=!1,re=null,xe.set(-1,0,0,0)}}}function t(){let H=!1,ae=null,re=null,xe=null;return{setTest:function(Me){Me?me(n.DEPTH_TEST):de(n.DEPTH_TEST)},setMask:function(Me){ae!==Me&&!H&&(n.depthMask(Me),ae=Me)},setFunc:function(Me){if(re!==Me){switch(Me){case Zg:n.depthFunc(n.NEVER);break;case Qg:n.depthFunc(n.ALWAYS);break;case ev:n.depthFunc(n.LESS);break;case Oo:n.depthFunc(n.LEQUAL);break;case tv:n.depthFunc(n.EQUAL);break;case nv:n.depthFunc(n.GEQUAL);break;case iv:n.depthFunc(n.GREATER);break;case rv:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}re=Me}},setLocked:function(Me){H=Me},setClear:function(Me){xe!==Me&&(n.clearDepth(Me),xe=Me)},reset:function(){H=!1,ae=null,re=null,xe=null}}}function i(){let H=!1,ae=null,re=null,xe=null,Me=null,Ze=null,at=null,mt=null,It=null;return{setTest:function(rt){H||(rt?me(n.STENCIL_TEST):de(n.STENCIL_TEST))},setMask:function(rt){ae!==rt&&!H&&(n.stencilMask(rt),ae=rt)},setFunc:function(rt,wn,Vt){(re!==rt||xe!==wn||Me!==Vt)&&(n.stencilFunc(rt,wn,Vt),re=rt,xe=wn,Me=Vt)},setOp:function(rt,wn,Vt){(Ze!==rt||at!==wn||mt!==Vt)&&(n.stencilOp(rt,wn,Vt),Ze=rt,at=wn,mt=Vt)},setLocked:function(rt){H=rt},setClear:function(rt){It!==rt&&(n.clearStencil(rt),It=rt)},reset:function(){H=!1,ae=null,re=null,xe=null,Me=null,Ze=null,at=null,mt=null,It=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],m=null,g=!1,x=null,_=null,p=null,R=null,v=null,S=null,P=null,T=new et(0,0,0),L=0,D=!1,M=null,y=null,V=null,B=null,O=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,se=0;const ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(ie)[1]),ne=se>=1):ie.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),ne=se>=2);let $=null,ce={};const ue=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),we=new Ct().fromArray(ue),Ye=new Ct().fromArray(ge);function Q(H,ae,re,xe){const Me=new Uint8Array(4),Ze=n.createTexture();n.bindTexture(H,Ze),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let at=0;at<re;at++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(ae+at,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return Ze}const he={};he[n.TEXTURE_2D]=Q(n.TEXTURE_2D,n.TEXTURE_2D,1),he[n.TEXTURE_CUBE_MAP]=Q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[n.TEXTURE_2D_ARRAY]=Q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),he[n.TEXTURE_3D]=Q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),me(n.DEPTH_TEST),s.setFunc(Oo),k(!1),q(Ru),me(n.CULL_FACE),I(xi);function me(H){c[H]!==!0&&(n.enable(H),c[H]=!0)}function de(H){c[H]!==!1&&(n.disable(H),c[H]=!1)}function Ue(H,ae){return u[H]!==ae?(n.bindFramebuffer(H,ae),u[H]=ae,H===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ae),H===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function Fe(H,ae){let re=h,xe=!1;if(H){re=f.get(ae),re===void 0&&(re=[],f.set(ae,re));const Me=H.textures;if(re.length!==Me.length||re[0]!==n.COLOR_ATTACHMENT0){for(let Ze=0,at=Me.length;Ze<at;Ze++)re[Ze]=n.COLOR_ATTACHMENT0+Ze;re.length=Me.length,xe=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,xe=!0);xe&&n.drawBuffers(re)}function W(H){return m!==H?(n.useProgram(H),m=H,!0):!1}const Ke={[ji]:n.FUNC_ADD,[Ug]:n.FUNC_SUBTRACT,[Og]:n.FUNC_REVERSE_SUBTRACT};Ke[Fg]=n.MIN,Ke[Bg]=n.MAX;const be={[kg]:n.ZERO,[Hg]:n.ONE,[zg]:n.SRC_COLOR,[Nl]:n.SRC_ALPHA,[Yg]:n.SRC_ALPHA_SATURATE,[Xg]:n.DST_COLOR,[Gg]:n.DST_ALPHA,[Vg]:n.ONE_MINUS_SRC_COLOR,[Dl]:n.ONE_MINUS_SRC_ALPHA,[$g]:n.ONE_MINUS_DST_COLOR,[Wg]:n.ONE_MINUS_DST_ALPHA,[qg]:n.CONSTANT_COLOR,[jg]:n.ONE_MINUS_CONSTANT_COLOR,[Kg]:n.CONSTANT_ALPHA,[Jg]:n.ONE_MINUS_CONSTANT_ALPHA};function I(H,ae,re,xe,Me,Ze,at,mt,It,rt){if(H===xi){g===!0&&(de(n.BLEND),g=!1);return}if(g===!1&&(me(n.BLEND),g=!0),H!==Dg){if(H!==x||rt!==D){if((_!==ji||v!==ji)&&(n.blendEquation(n.FUNC_ADD),_=ji,v=ji),rt)switch(H){case Lr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cu:n.blendFunc(n.ONE,n.ONE);break;case Lu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Lr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Lu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}p=null,R=null,S=null,P=null,T.set(0,0,0),L=0,x=H,D=rt}return}Me=Me||ae,Ze=Ze||re,at=at||xe,(ae!==_||Me!==v)&&(n.blendEquationSeparate(Ke[ae],Ke[Me]),_=ae,v=Me),(re!==p||xe!==R||Ze!==S||at!==P)&&(n.blendFuncSeparate(be[re],be[xe],be[Ze],be[at]),p=re,R=xe,S=Ze,P=at),(mt.equals(T)===!1||It!==L)&&(n.blendColor(mt.r,mt.g,mt.b,It),T.copy(mt),L=It),x=H,D=!1}function b(H,ae){H.side===Xn?de(n.CULL_FACE):me(n.CULL_FACE);let re=H.side===qt;ae&&(re=!re),k(re),H.blending===Lr&&H.transparent===!1?I(xi):I(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),s.setFunc(H.depthFunc),s.setTest(H.depthTest),s.setMask(H.depthWrite),r.setMask(H.colorWrite);const xe=H.stencilWrite;o.setTest(xe),xe&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),oe(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):de(n.SAMPLE_ALPHA_TO_COVERAGE)}function k(H){M!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),M=H)}function q(H){H!==Pg?(me(n.CULL_FACE),H!==y&&(H===Ru?n.cullFace(n.BACK):H===Ig?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):de(n.CULL_FACE),y=H}function J(H){H!==V&&(ne&&n.lineWidth(H),V=H)}function oe(H,ae,re){H?(me(n.POLYGON_OFFSET_FILL),(B!==ae||O!==re)&&(n.polygonOffset(ae,re),B=ae,O=re)):de(n.POLYGON_OFFSET_FILL)}function A(H){H?me(n.SCISSOR_TEST):de(n.SCISSOR_TEST)}function d(H){H===void 0&&(H=n.TEXTURE0+ee-1),$!==H&&(n.activeTexture(H),$=H)}function E(H,ae,re){re===void 0&&($===null?re=n.TEXTURE0+ee-1:re=$);let xe=ce[re];xe===void 0&&(xe={type:void 0,texture:void 0},ce[re]=xe),(xe.type!==H||xe.texture!==ae)&&($!==re&&(n.activeTexture(re),$=re),n.bindTexture(H,ae||he[H]),xe.type=H,xe.texture=ae)}function w(){const H=ce[$];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function U(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function G(){try{n.compressedTexImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function N(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function F(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function le(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function te(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pe(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Re(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Se(H){we.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),we.copy(H))}function De(H){Ye.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),Ye.copy(H))}function We(H,ae){let re=l.get(ae);re===void 0&&(re=new WeakMap,l.set(ae,re));let xe=re.get(H);xe===void 0&&(xe=n.getUniformBlockIndex(ae,H.name),re.set(H,xe))}function qe(H,ae){const xe=l.get(ae).get(H);a.get(ae)!==xe&&(n.uniformBlockBinding(ae,xe,H.__bindingPointIndex),a.set(ae,xe))}function Ce(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},$=null,ce={},u={},f=new WeakMap,h=[],m=null,g=!1,x=null,_=null,p=null,R=null,v=null,S=null,P=null,T=new et(0,0,0),L=0,D=!1,M=null,y=null,V=null,B=null,O=null,we.set(0,0,n.canvas.width,n.canvas.height),Ye.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:me,disable:de,bindFramebuffer:Ue,drawBuffers:Fe,useProgram:W,setBlending:I,setMaterial:b,setFlipSided:k,setCullFace:q,setLineWidth:J,setPolygonOffset:oe,setScissorTest:A,activeTexture:d,bindTexture:E,unbindTexture:w,compressedTexImage2D:U,compressedTexImage3D:G,texImage2D:Re,texImage3D:ye,updateUBOMapping:We,uniformBlockBinding:qe,texStorage2D:te,texStorage3D:pe,texSubImage2D:Y,texSubImage3D:N,compressedTexSubImage2D:F,compressedTexSubImage3D:le,scissor:Se,viewport:De,reset:Ce}}function UM(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ie,u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,d){return m?new OffscreenCanvas(A,d):Es("canvas")}function x(A,d,E){let w=1;const U=oe(A);if((U.width>E||U.height>E)&&(w=E/Math.max(U.width,U.height)),w<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const G=Math.floor(w*U.width),Y=Math.floor(w*U.height);f===void 0&&(f=g(G,Y));const N=d?g(G,Y):f;return N.width=G,N.height=Y,N.getContext("2d").drawImage(A,0,0,G,Y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+G+"x"+Y+")."),N}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),A;return A}function _(A){return A.generateMipmaps&&A.minFilter!==dn&&A.minFilter!==Mn}function p(A){n.generateMipmap(A)}function R(A,d,E,w,U=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let G=d;if(d===n.RED&&(E===n.FLOAT&&(G=n.R32F),E===n.HALF_FLOAT&&(G=n.R16F),E===n.UNSIGNED_BYTE&&(G=n.R8)),d===n.RED_INTEGER&&(E===n.UNSIGNED_BYTE&&(G=n.R8UI),E===n.UNSIGNED_SHORT&&(G=n.R16UI),E===n.UNSIGNED_INT&&(G=n.R32UI),E===n.BYTE&&(G=n.R8I),E===n.SHORT&&(G=n.R16I),E===n.INT&&(G=n.R32I)),d===n.RG&&(E===n.FLOAT&&(G=n.RG32F),E===n.HALF_FLOAT&&(G=n.RG16F),E===n.UNSIGNED_BYTE&&(G=n.RG8)),d===n.RG_INTEGER&&(E===n.UNSIGNED_BYTE&&(G=n.RG8UI),E===n.UNSIGNED_SHORT&&(G=n.RG16UI),E===n.UNSIGNED_INT&&(G=n.RG32UI),E===n.BYTE&&(G=n.RG8I),E===n.SHORT&&(G=n.RG16I),E===n.INT&&(G=n.RG32I)),d===n.RGB&&E===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),d===n.RGBA){const Y=U?Fo:st.getTransfer(w);E===n.FLOAT&&(G=n.RGBA32F),E===n.HALF_FLOAT&&(G=n.RGBA16F),E===n.UNSIGNED_BYTE&&(G=Y===lt?n.SRGB8_ALPHA8:n.RGBA8),E===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),E===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function v(A,d){return _(A)===!0||A.isFramebufferTexture&&A.minFilter!==dn&&A.minFilter!==Mn?Math.log2(Math.max(d.width,d.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?d.mipmaps.length:1}function S(A){const d=A.target;d.removeEventListener("dispose",S),T(d),d.isVideoTexture&&u.delete(d)}function P(A){const d=A.target;d.removeEventListener("dispose",P),D(d)}function T(A){const d=i.get(A);if(d.__webglInit===void 0)return;const E=A.source,w=h.get(E);if(w){const U=w[d.__cacheKey];U.usedTimes--,U.usedTimes===0&&L(A),Object.keys(w).length===0&&h.delete(E)}i.remove(A)}function L(A){const d=i.get(A);n.deleteTexture(d.__webglTexture);const E=A.source,w=h.get(E);delete w[d.__cacheKey],o.memory.textures--}function D(A){const d=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let w=0;w<6;w++){if(Array.isArray(d.__webglFramebuffer[w]))for(let U=0;U<d.__webglFramebuffer[w].length;U++)n.deleteFramebuffer(d.__webglFramebuffer[w][U]);else n.deleteFramebuffer(d.__webglFramebuffer[w]);d.__webglDepthbuffer&&n.deleteRenderbuffer(d.__webglDepthbuffer[w])}else{if(Array.isArray(d.__webglFramebuffer))for(let w=0;w<d.__webglFramebuffer.length;w++)n.deleteFramebuffer(d.__webglFramebuffer[w]);else n.deleteFramebuffer(d.__webglFramebuffer);if(d.__webglDepthbuffer&&n.deleteRenderbuffer(d.__webglDepthbuffer),d.__webglMultisampledFramebuffer&&n.deleteFramebuffer(d.__webglMultisampledFramebuffer),d.__webglColorRenderbuffer)for(let w=0;w<d.__webglColorRenderbuffer.length;w++)d.__webglColorRenderbuffer[w]&&n.deleteRenderbuffer(d.__webglColorRenderbuffer[w]);d.__webglDepthRenderbuffer&&n.deleteRenderbuffer(d.__webglDepthRenderbuffer)}const E=A.textures;for(let w=0,U=E.length;w<U;w++){const G=i.get(E[w]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(E[w])}i.remove(A)}let M=0;function y(){M=0}function V(){const A=M;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),M+=1,A}function B(A){const d=[];return d.push(A.wrapS),d.push(A.wrapT),d.push(A.wrapR||0),d.push(A.magFilter),d.push(A.minFilter),d.push(A.anisotropy),d.push(A.internalFormat),d.push(A.format),d.push(A.type),d.push(A.generateMipmaps),d.push(A.premultiplyAlpha),d.push(A.flipY),d.push(A.unpackAlignment),d.push(A.colorSpace),d.join()}function O(A,d){const E=i.get(A);if(A.isVideoTexture&&q(A),A.isRenderTargetTexture===!1&&A.version>0&&E.__version!==A.version){const w=A.image;if(w===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(w.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(E,A,d);return}}t.bindTexture(n.TEXTURE_2D,E.__webglTexture,n.TEXTURE0+d)}function ee(A,d){const E=i.get(A);if(A.version>0&&E.__version!==A.version){we(E,A,d);return}t.bindTexture(n.TEXTURE_2D_ARRAY,E.__webglTexture,n.TEXTURE0+d)}function ne(A,d){const E=i.get(A);if(A.version>0&&E.__version!==A.version){we(E,A,d);return}t.bindTexture(n.TEXTURE_3D,E.__webglTexture,n.TEXTURE0+d)}function se(A,d){const E=i.get(A);if(A.version>0&&E.__version!==A.version){Ye(E,A,d);return}t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+d)}const ie={[Fl]:n.REPEAT,[Ji]:n.CLAMP_TO_EDGE,[Bl]:n.MIRRORED_REPEAT},$={[dn]:n.NEAREST,[pv]:n.NEAREST_MIPMAP_NEAREST,[Vs]:n.NEAREST_MIPMAP_LINEAR,[Mn]:n.LINEAR,[Ua]:n.LINEAR_MIPMAP_NEAREST,[Zi]:n.LINEAR_MIPMAP_LINEAR},ce={[Cv]:n.NEVER,[Uv]:n.ALWAYS,[Lv]:n.LESS,[Qd]:n.LEQUAL,[Pv]:n.EQUAL,[Dv]:n.GEQUAL,[Iv]:n.GREATER,[Nv]:n.NOTEQUAL};function ue(A,d){if(d.type===mi&&e.has("OES_texture_float_linear")===!1&&(d.magFilter===Mn||d.magFilter===Ua||d.magFilter===Vs||d.magFilter===Zi||d.minFilter===Mn||d.minFilter===Ua||d.minFilter===Vs||d.minFilter===Zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,ie[d.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,ie[d.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,ie[d.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,$[d.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,$[d.minFilter]),d.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ce[d.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(d.magFilter===dn||d.minFilter!==Vs&&d.minFilter!==Zi||d.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(d.anisotropy>1||i.get(d).__currentAnisotropy){const E=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,E.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(d.anisotropy,r.getMaxAnisotropy())),i.get(d).__currentAnisotropy=d.anisotropy}}}function ge(A,d){let E=!1;A.__webglInit===void 0&&(A.__webglInit=!0,d.addEventListener("dispose",S));const w=d.source;let U=h.get(w);U===void 0&&(U={},h.set(w,U));const G=B(d);if(G!==A.__cacheKey){U[G]===void 0&&(U[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,E=!0),U[G].usedTimes++;const Y=U[A.__cacheKey];Y!==void 0&&(U[A.__cacheKey].usedTimes--,Y.usedTimes===0&&L(d)),A.__cacheKey=G,A.__webglTexture=U[G].texture}return E}function we(A,d,E){let w=n.TEXTURE_2D;(d.isDataArrayTexture||d.isCompressedArrayTexture)&&(w=n.TEXTURE_2D_ARRAY),d.isData3DTexture&&(w=n.TEXTURE_3D);const U=ge(A,d),G=d.source;t.bindTexture(w,A.__webglTexture,n.TEXTURE0+E);const Y=i.get(G);if(G.version!==Y.__version||U===!0){t.activeTexture(n.TEXTURE0+E);const N=st.getPrimaries(st.workingColorSpace),F=d.colorSpace===pi?null:st.getPrimaries(d.colorSpace),le=d.colorSpace===pi||N===F?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,d.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,d.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let te=x(d.image,!1,r.maxTextureSize);te=J(d,te);const pe=s.convert(d.format,d.colorSpace),Re=s.convert(d.type);let ye=R(d.internalFormat,pe,Re,d.colorSpace,d.isVideoTexture);ue(w,d);let Se;const De=d.mipmaps,We=d.isVideoTexture!==!0,qe=Y.__version===void 0||U===!0,Ce=G.dataReady,H=v(d,te);if(d.isDepthTexture)ye=n.DEPTH_COMPONENT16,d.type===mi?ye=n.DEPTH_COMPONENT32F:d.type===Or?ye=n.DEPTH_COMPONENT24:d.type===As&&(ye=n.DEPTH24_STENCIL8),qe&&(We?t.texStorage2D(n.TEXTURE_2D,1,ye,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,ye,te.width,te.height,0,pe,Re,null));else if(d.isDataTexture)if(De.length>0){We&&qe&&t.texStorage2D(n.TEXTURE_2D,H,ye,De[0].width,De[0].height);for(let ae=0,re=De.length;ae<re;ae++)Se=De[ae],We?Ce&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Se.width,Se.height,pe,Re,Se.data):t.texImage2D(n.TEXTURE_2D,ae,ye,Se.width,Se.height,0,pe,Re,Se.data);d.generateMipmaps=!1}else We?(qe&&t.texStorage2D(n.TEXTURE_2D,H,ye,te.width,te.height),Ce&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,pe,Re,te.data)):t.texImage2D(n.TEXTURE_2D,0,ye,te.width,te.height,0,pe,Re,te.data);else if(d.isCompressedTexture)if(d.isCompressedArrayTexture){We&&qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,H,ye,De[0].width,De[0].height,te.depth);for(let ae=0,re=De.length;ae<re;ae++)Se=De[ae],d.format!==Nn?pe!==null?We?Ce&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Se.width,Se.height,te.depth,pe,Se.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,ye,Se.width,Se.height,te.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?Ce&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Se.width,Se.height,te.depth,pe,Re,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,ye,Se.width,Se.height,te.depth,0,pe,Re,Se.data)}else{We&&qe&&t.texStorage2D(n.TEXTURE_2D,H,ye,De[0].width,De[0].height);for(let ae=0,re=De.length;ae<re;ae++)Se=De[ae],d.format!==Nn?pe!==null?We?Ce&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,Se.width,Se.height,pe,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,ye,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?Ce&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Se.width,Se.height,pe,Re,Se.data):t.texImage2D(n.TEXTURE_2D,ae,ye,Se.width,Se.height,0,pe,Re,Se.data)}else if(d.isDataArrayTexture)We?(qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,H,ye,te.width,te.height,te.depth),Ce&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,pe,Re,te.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,te.width,te.height,te.depth,0,pe,Re,te.data);else if(d.isData3DTexture)We?(qe&&t.texStorage3D(n.TEXTURE_3D,H,ye,te.width,te.height,te.depth),Ce&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,pe,Re,te.data)):t.texImage3D(n.TEXTURE_3D,0,ye,te.width,te.height,te.depth,0,pe,Re,te.data);else if(d.isFramebufferTexture){if(qe)if(We)t.texStorage2D(n.TEXTURE_2D,H,ye,te.width,te.height);else{let ae=te.width,re=te.height;for(let xe=0;xe<H;xe++)t.texImage2D(n.TEXTURE_2D,xe,ye,ae,re,0,pe,Re,null),ae>>=1,re>>=1}}else if(De.length>0){if(We&&qe){const ae=oe(De[0]);t.texStorage2D(n.TEXTURE_2D,H,ye,ae.width,ae.height)}for(let ae=0,re=De.length;ae<re;ae++)Se=De[ae],We?Ce&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,pe,Re,Se):t.texImage2D(n.TEXTURE_2D,ae,ye,pe,Re,Se);d.generateMipmaps=!1}else if(We){if(qe){const ae=oe(te);t.texStorage2D(n.TEXTURE_2D,H,ye,ae.width,ae.height)}Ce&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,Re,te)}else t.texImage2D(n.TEXTURE_2D,0,ye,pe,Re,te);_(d)&&p(w),Y.__version=G.version,d.onUpdate&&d.onUpdate(d)}A.__version=d.version}function Ye(A,d,E){if(d.image.length!==6)return;const w=ge(A,d),U=d.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+E);const G=i.get(U);if(U.version!==G.__version||w===!0){t.activeTexture(n.TEXTURE0+E);const Y=st.getPrimaries(st.workingColorSpace),N=d.colorSpace===pi?null:st.getPrimaries(d.colorSpace),F=d.colorSpace===pi||Y===N?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,d.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,d.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,F);const le=d.isCompressedTexture||d.image[0].isCompressedTexture,te=d.image[0]&&d.image[0].isDataTexture,pe=[];for(let re=0;re<6;re++)!le&&!te?pe[re]=x(d.image[re],!0,r.maxCubemapSize):pe[re]=te?d.image[re].image:d.image[re],pe[re]=J(d,pe[re]);const Re=pe[0],ye=s.convert(d.format,d.colorSpace),Se=s.convert(d.type),De=R(d.internalFormat,ye,Se,d.colorSpace),We=d.isVideoTexture!==!0,qe=G.__version===void 0||w===!0,Ce=U.dataReady;let H=v(d,Re);ue(n.TEXTURE_CUBE_MAP,d);let ae;if(le){We&&qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,H,De,Re.width,Re.height);for(let re=0;re<6;re++){ae=pe[re].mipmaps;for(let xe=0;xe<ae.length;xe++){const Me=ae[xe];d.format!==Nn?ye!==null?We?Ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe,0,0,Me.width,Me.height,ye,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe,De,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe,0,0,Me.width,Me.height,ye,Se,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe,De,Me.width,Me.height,0,ye,Se,Me.data)}}}else{if(ae=d.mipmaps,We&&qe){ae.length>0&&H++;const re=oe(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,H,De,re.width,re.height)}for(let re=0;re<6;re++)if(te){We?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,pe[re].width,pe[re].height,ye,Se,pe[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,De,pe[re].width,pe[re].height,0,ye,Se,pe[re].data);for(let xe=0;xe<ae.length;xe++){const Ze=ae[xe].image[re].image;We?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe+1,0,0,Ze.width,Ze.height,ye,Se,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe+1,De,Ze.width,Ze.height,0,ye,Se,Ze.data)}}else{We?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ye,Se,pe[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,De,ye,Se,pe[re]);for(let xe=0;xe<ae.length;xe++){const Me=ae[xe];We?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe+1,0,0,ye,Se,Me.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe+1,De,ye,Se,Me.image[re])}}}_(d)&&p(n.TEXTURE_CUBE_MAP),G.__version=U.version,d.onUpdate&&d.onUpdate(d)}A.__version=d.version}function Q(A,d,E,w,U,G){const Y=s.convert(E.format,E.colorSpace),N=s.convert(E.type),F=R(E.internalFormat,Y,N,E.colorSpace);if(!i.get(d).__hasExternalTextures){const te=Math.max(1,d.width>>G),pe=Math.max(1,d.height>>G);U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?t.texImage3D(U,G,F,te,pe,d.depth,0,Y,N,null):t.texImage2D(U,G,F,te,pe,0,Y,N,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),k(d)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,w,U,i.get(E).__webglTexture,0,b(d)):(U===n.TEXTURE_2D||U>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,w,U,i.get(E).__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(A,d,E){if(n.bindRenderbuffer(n.RENDERBUFFER,A),d.depthBuffer&&!d.stencilBuffer){let w=n.DEPTH_COMPONENT24;if(E||k(d)){const U=d.depthTexture;U&&U.isDepthTexture&&(U.type===mi?w=n.DEPTH_COMPONENT32F:U.type===Or&&(w=n.DEPTH_COMPONENT24));const G=b(d);k(d)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,G,w,d.width,d.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,G,w,d.width,d.height)}else n.renderbufferStorage(n.RENDERBUFFER,w,d.width,d.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(d.depthBuffer&&d.stencilBuffer){const w=b(d);E&&k(d)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,w,n.DEPTH24_STENCIL8,d.width,d.height):k(d)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,w,n.DEPTH24_STENCIL8,d.width,d.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,d.width,d.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{const w=d.textures;for(let U=0;U<w.length;U++){const G=w[U],Y=s.convert(G.format,G.colorSpace),N=s.convert(G.type),F=R(G.internalFormat,Y,N,G.colorSpace),le=b(d);E&&k(d)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,F,d.width,d.height):k(d)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,F,d.width,d.height):n.renderbufferStorage(n.RENDERBUFFER,F,d.width,d.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function me(A,d){if(d&&d.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(d.depthTexture&&d.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(d.depthTexture).__webglTexture||d.depthTexture.image.width!==d.width||d.depthTexture.image.height!==d.height)&&(d.depthTexture.image.width=d.width,d.depthTexture.image.height=d.height,d.depthTexture.needsUpdate=!0),O(d.depthTexture,0);const w=i.get(d.depthTexture).__webglTexture,U=b(d);if(d.depthTexture.format===Pr)k(d)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,w,0,U):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,w,0);else if(d.depthTexture.format===xs)k(d)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,w,0,U):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,w,0);else throw new Error("Unknown depthTexture format")}function de(A){const d=i.get(A),E=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!d.__autoAllocateDepthBuffer){if(E)throw new Error("target.depthTexture not supported in Cube render targets");me(d.__webglFramebuffer,A)}else if(E){d.__webglDepthbuffer=[];for(let w=0;w<6;w++)t.bindFramebuffer(n.FRAMEBUFFER,d.__webglFramebuffer[w]),d.__webglDepthbuffer[w]=n.createRenderbuffer(),he(d.__webglDepthbuffer[w],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,d.__webglFramebuffer),d.__webglDepthbuffer=n.createRenderbuffer(),he(d.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(A,d,E){const w=i.get(A);d!==void 0&&Q(w.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),E!==void 0&&de(A)}function Fe(A){const d=A.texture,E=i.get(A),w=i.get(d);A.addEventListener("dispose",P);const U=A.textures,G=A.isWebGLCubeRenderTarget===!0,Y=U.length>1;if(Y||(w.__webglTexture===void 0&&(w.__webglTexture=n.createTexture()),w.__version=d.version,o.memory.textures++),G){E.__webglFramebuffer=[];for(let N=0;N<6;N++)if(d.mipmaps&&d.mipmaps.length>0){E.__webglFramebuffer[N]=[];for(let F=0;F<d.mipmaps.length;F++)E.__webglFramebuffer[N][F]=n.createFramebuffer()}else E.__webglFramebuffer[N]=n.createFramebuffer()}else{if(d.mipmaps&&d.mipmaps.length>0){E.__webglFramebuffer=[];for(let N=0;N<d.mipmaps.length;N++)E.__webglFramebuffer[N]=n.createFramebuffer()}else E.__webglFramebuffer=n.createFramebuffer();if(Y)for(let N=0,F=U.length;N<F;N++){const le=i.get(U[N]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&k(A)===!1){E.__webglMultisampledFramebuffer=n.createFramebuffer(),E.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,E.__webglMultisampledFramebuffer);for(let N=0;N<U.length;N++){const F=U[N];E.__webglColorRenderbuffer[N]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,E.__webglColorRenderbuffer[N]);const le=s.convert(F.format,F.colorSpace),te=s.convert(F.type),pe=R(F.internalFormat,le,te,F.colorSpace,A.isXRRenderTarget===!0),Re=b(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,pe,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+N,n.RENDERBUFFER,E.__webglColorRenderbuffer[N])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(E.__webglDepthRenderbuffer=n.createRenderbuffer(),he(E.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture),ue(n.TEXTURE_CUBE_MAP,d);for(let N=0;N<6;N++)if(d.mipmaps&&d.mipmaps.length>0)for(let F=0;F<d.mipmaps.length;F++)Q(E.__webglFramebuffer[N][F],A,d,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+N,F);else Q(E.__webglFramebuffer[N],A,d,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+N,0);_(d)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Y){for(let N=0,F=U.length;N<F;N++){const le=U[N],te=i.get(le);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),ue(n.TEXTURE_2D,le),Q(E.__webglFramebuffer,A,le,n.COLOR_ATTACHMENT0+N,n.TEXTURE_2D,0),_(le)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let N=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(N=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(N,w.__webglTexture),ue(N,d),d.mipmaps&&d.mipmaps.length>0)for(let F=0;F<d.mipmaps.length;F++)Q(E.__webglFramebuffer[F],A,d,n.COLOR_ATTACHMENT0,N,F);else Q(E.__webglFramebuffer,A,d,n.COLOR_ATTACHMENT0,N,0);_(d)&&p(N),t.unbindTexture()}A.depthBuffer&&de(A)}function W(A){const d=A.textures;for(let E=0,w=d.length;E<w;E++){const U=d[E];if(_(U)){const G=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Y=i.get(U).__webglTexture;t.bindTexture(G,Y),p(G),t.unbindTexture()}}}const Ke=[],be=[];function I(A){if(A.samples>0){if(k(A)===!1){const d=A.textures,E=A.width,w=A.height;let U=n.COLOR_BUFFER_BIT;const G=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=i.get(A),N=d.length>1;if(N)for(let F=0;F<d.length;F++)t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+F,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+F,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Y.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Y.__webglFramebuffer);for(let F=0;F<d.length;F++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(U|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(U|=n.STENCIL_BUFFER_BIT)),N){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Y.__webglColorRenderbuffer[F]);const le=i.get(d[F]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,E,w,0,0,E,w,U,n.NEAREST),l===!0&&(Ke.length=0,be.length=0,Ke.push(n.COLOR_ATTACHMENT0+F),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ke.push(G),be.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,be)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),N)for(let F=0;F<d.length;F++){t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+F,n.RENDERBUFFER,Y.__webglColorRenderbuffer[F]);const le=i.get(d[F]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+F,n.TEXTURE_2D,le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Y.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const d=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[d])}}}function b(A){return Math.min(r.maxSamples,A.samples)}function k(A){const d=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&d.__useRenderToTexture!==!1}function q(A){const d=o.render.frame;u.get(A)!==d&&(u.set(A,d),A.update())}function J(A,d){const E=A.colorSpace,w=A.format,U=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||E!==Ci&&E!==pi&&(st.getTransfer(E)===lt?(w!==Nn||U!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",E)),d}function oe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=y,this.setTexture2D=O,this.setTexture2DArray=ee,this.setTexture3D=ne,this.setTextureCube=se,this.rebindTextures=Ue,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=k}function OM(n,e){function t(i,r=pi){let s;const o=st.getTransfer(r);if(i===bi)return n.UNSIGNED_BYTE;if(i===qd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===jd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gv)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===mv)return n.BYTE;if(i===_v)return n.SHORT;if(i===$d)return n.UNSIGNED_SHORT;if(i===Yd)return n.INT;if(i===Or)return n.UNSIGNED_INT;if(i===mi)return n.FLOAT;if(i===fa)return n.HALF_FLOAT;if(i===vv)return n.ALPHA;if(i===xv)return n.RGB;if(i===Nn)return n.RGBA;if(i===Ev)return n.LUMINANCE;if(i===Sv)return n.LUMINANCE_ALPHA;if(i===Pr)return n.DEPTH_COMPONENT;if(i===xs)return n.DEPTH_STENCIL;if(i===Mv)return n.RED;if(i===Kd)return n.RED_INTEGER;if(i===yv)return n.RG;if(i===Jd)return n.RG_INTEGER;if(i===Zd)return n.RGBA_INTEGER;if(i===Oa||i===Fa||i===Ba||i===ka)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Oa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Oa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ba)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ka)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Iu||i===Nu||i===Du||i===Uu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Iu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Du)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Uu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ou||i===Fu||i===Bu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ou||i===Fu)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Bu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ku||i===Hu||i===zu||i===Vu||i===Gu||i===Wu||i===Xu||i===$u||i===Yu||i===qu||i===ju||i===Ku||i===Ju||i===Zu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ku)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$u)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ju)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ku)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ju)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zu)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ha||i===Qu||i===ef)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ha)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ef)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Tv||i===tf||i===nf||i===rf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ha)return s.COMPRESSED_RED_RGTC1_EXT;if(i===tf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===As?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class FM extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class uo extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BM={type:"move"};class hl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const _=t.getJointPose(x,i),p=this._getHandJoint(c,x);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(BM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new uo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const kM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HM=`
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

}`;class zM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new jt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Kn({vertexShader:kM,fragmentShader:HM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new bn(new Is(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class VM extends Vr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,g=null;const x=new zM,_=t.getContextAttributes();let p=null,R=null;const v=[],S=[],P=new Ie;let T=null;const L=new $t;L.layers.enable(1),L.viewport=new Ct;const D=new $t;D.layers.enable(2),D.viewport=new Ct;const M=[L,D],y=new FM;y.layers.enable(1),y.layers.enable(2);let V=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let he=v[Q];return he===void 0&&(he=new hl,v[Q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Q){let he=v[Q];return he===void 0&&(he=new hl,v[Q]=he),he.getGripSpace()},this.getHand=function(Q){let he=v[Q];return he===void 0&&(he=new hl,v[Q]=he),he.getHandSpace()};function O(Q){const he=S.indexOf(Q.inputSource);if(he===-1)return;const me=v[he];me!==void 0&&(me.update(Q.inputSource,Q.frame,c||o),me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ee(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",ne);for(let Q=0;Q<v.length;Q++){const he=S[Q];he!==null&&(S[Q]=null,v[Q].disconnect(he))}V=null,B=null,x.reset(),e.setRenderTarget(p),m=null,h=null,f=null,r=null,R=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",ne),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const he={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),R=new tr(m.framebufferWidth,m.framebufferHeight,{format:Nn,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let he=null,me=null,de=null;_.depth&&(de=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=_.stencil?xs:Pr,me=_.stencil?As:Or);const Ue={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Ue),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),R=new tr(h.textureWidth,h.textureHeight,{format:Nn,type:bi,depthTexture:new hp(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ne(Q){for(let he=0;he<Q.removed.length;he++){const me=Q.removed[he],de=S.indexOf(me);de>=0&&(S[de]=null,v[de].disconnect(me))}for(let he=0;he<Q.added.length;he++){const me=Q.added[he];let de=S.indexOf(me);if(de===-1){for(let Fe=0;Fe<v.length;Fe++)if(Fe>=S.length){S.push(me),de=Fe;break}else if(S[Fe]===null){S[Fe]=me,de=Fe;break}if(de===-1)break}const Ue=v[de];Ue&&Ue.connect(me)}}const se=new z,ie=new z;function $(Q,he,me){se.setFromMatrixPosition(he.matrixWorld),ie.setFromMatrixPosition(me.matrixWorld);const de=se.distanceTo(ie),Ue=he.projectionMatrix.elements,Fe=me.projectionMatrix.elements,W=Ue[14]/(Ue[10]-1),Ke=Ue[14]/(Ue[10]+1),be=(Ue[9]+1)/Ue[5],I=(Ue[9]-1)/Ue[5],b=(Ue[8]-1)/Ue[0],k=(Fe[8]+1)/Fe[0],q=W*b,J=W*k,oe=de/(-b+k),A=oe*-b;he.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(A),Q.translateZ(oe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const d=W+oe,E=Ke+oe,w=q-A,U=J+(de-A),G=be*Ke/E*d,Y=I*Ke/E*d;Q.projectionMatrix.makePerspective(w,U,G,Y,d,E),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function ce(Q,he){he===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(he.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;x.texture!==null&&(Q.near=x.depthNear,Q.far=x.depthFar),y.near=D.near=L.near=Q.near,y.far=D.far=L.far=Q.far,(V!==y.near||B!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),V=y.near,B=y.far,L.near=V,L.far=B,D.near=V,D.far=B,L.updateProjectionMatrix(),D.updateProjectionMatrix(),Q.updateProjectionMatrix());const he=Q.parent,me=y.cameras;ce(y,he);for(let de=0;de<me.length;de++)ce(me[de],he);me.length===2?$(y,L,D):y.projectionMatrix.copy(L.projectionMatrix),ue(Q,y,he)};function ue(Q,he,me){me===null?Q.matrix.copy(he.matrixWorld):(Q.matrix.copy(me.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(he.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=kl*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return x.texture!==null};let ge=null;function we(Q,he){if(u=he.getViewerPose(c||o),g=he,u!==null){const me=u.views;m!==null&&(e.setRenderTargetFramebuffer(R,m.framebuffer),e.setRenderTarget(R));let de=!1;me.length!==y.cameras.length&&(y.cameras.length=0,de=!0);for(let Fe=0;Fe<me.length;Fe++){const W=me[Fe];let Ke=null;if(m!==null)Ke=m.getViewport(W);else{const I=f.getViewSubImage(h,W);Ke=I.viewport,Fe===0&&(e.setRenderTargetTextures(R,I.colorTexture,h.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(R))}let be=M[Fe];be===void 0&&(be=new $t,be.layers.enable(Fe),be.viewport=new Ct,M[Fe]=be),be.matrix.fromArray(W.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(W.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Fe===0&&(y.matrix.copy(be.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),de===!0&&y.cameras.push(be)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const Fe=f.getDepthInformation(me[0]);Fe&&Fe.isValid&&Fe.texture&&x.init(e,Fe,r.renderState)}}for(let me=0;me<v.length;me++){const de=S[me],Ue=v[me];de!==null&&Ue!==void 0&&Ue.update(de,he,c||o)}x.render(e,y),ge&&ge(Q,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),g=null}const Ye=new fp;Ye.setAnimationLoop(we),this.setAnimationLoop=function(Q){ge=Q},this.dispose=function(){}}}const Vi=new jn,GM=new _t;function WM(n,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function i(_,p){p.color.getRGB(_.fogColor.value,ap(n)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,R,v,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(_,p):p.isMeshToonMaterial?(s(_,p),f(_,p)):p.isMeshPhongMaterial?(s(_,p),u(_,p)):p.isMeshStandardMaterial?(s(_,p),h(_,p),p.isMeshPhysicalMaterial&&m(_,p,S)):p.isMeshMatcapMaterial?(s(_,p),g(_,p)):p.isMeshDepthMaterial?s(_,p):p.isMeshDistanceMaterial?(s(_,p),x(_,p)):p.isMeshNormalMaterial?s(_,p):p.isLineBasicMaterial?(o(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?l(_,p,R,v):p.isSpriteMaterial?c(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===qt&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===qt&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const R=e.get(p),v=R.envMap,S=R.envMapRotation;if(v&&(_.envMap.value=v,Vi.copy(S),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),_.envMapRotation.value.setFromMatrix4(GM.makeRotationFromEuler(Vi)),_.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap){_.lightMap.value=p.lightMap;const P=n._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=p.lightMapIntensity*P,t(p.lightMap,_.lightMapTransform)}p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function o(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,R,v){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*R,_.scale.value=v*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function f(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function h(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function m(_,p,R){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=R.texture,_.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,p){p.matcap&&(_.matcap.value=p.matcap)}function x(_,p){const R=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(R.matrixWorld),_.nearDistance.value=R.shadow.camera.near,_.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function XM(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,v){const S=v.program;i.uniformBlockBinding(R,S)}function c(R,v){let S=r[R.id];S===void 0&&(g(R),S=u(R),r[R.id]=S,R.addEventListener("dispose",_));const P=v.program;i.updateUBOMapping(R,P);const T=e.render.frame;s[R.id]!==T&&(h(R),s[R.id]=T)}function u(R){const v=f();R.__bindingPointIndex=v;const S=n.createBuffer(),P=R.__size,T=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,P,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,S),S}function f(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(R){const v=r[R.id],S=R.uniforms,P=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,L=S.length;T<L;T++){const D=Array.isArray(S[T])?S[T]:[S[T]];for(let M=0,y=D.length;M<y;M++){const V=D[M];if(m(V,T,M,P)===!0){const B=V.__offset,O=Array.isArray(V.value)?V.value:[V.value];let ee=0;for(let ne=0;ne<O.length;ne++){const se=O[ne],ie=x(se);typeof se=="number"||typeof se=="boolean"?(V.__data[0]=se,n.bufferSubData(n.UNIFORM_BUFFER,B+ee,V.__data)):se.isMatrix3?(V.__data[0]=se.elements[0],V.__data[1]=se.elements[1],V.__data[2]=se.elements[2],V.__data[3]=0,V.__data[4]=se.elements[3],V.__data[5]=se.elements[4],V.__data[6]=se.elements[5],V.__data[7]=0,V.__data[8]=se.elements[6],V.__data[9]=se.elements[7],V.__data[10]=se.elements[8],V.__data[11]=0):(se.toArray(V.__data,ee),ee+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,V.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(R,v,S,P){const T=R.value,L=v+"_"+S;if(P[L]===void 0)return typeof T=="number"||typeof T=="boolean"?P[L]=T:P[L]=T.clone(),!0;{const D=P[L];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return P[L]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function g(R){const v=R.uniforms;let S=0;const P=16;for(let L=0,D=v.length;L<D;L++){const M=Array.isArray(v[L])?v[L]:[v[L]];for(let y=0,V=M.length;y<V;y++){const B=M[y],O=Array.isArray(B.value)?B.value:[B.value];for(let ee=0,ne=O.length;ee<ne;ee++){const se=O[ee],ie=x(se),$=S%P;$!==0&&P-$<ie.boundary&&(S+=P-$),B.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=ie.storage}}}const T=S%P;return T>0&&(S+=P-T),R.__size=S,R.__cache={},this}function x(R){const v={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(v.boundary=4,v.storage=4):R.isVector2?(v.boundary=8,v.storage=8):R.isVector3||R.isColor?(v.boundary=16,v.storage=12):R.isVector4?(v.boundary=16,v.storage=16):R.isMatrix3?(v.boundary=48,v.storage=48):R.isMatrix4?(v.boundary=64,v.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),v}function _(R){const v=R.target;v.removeEventListener("dispose",_);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const R in r)n.deleteBuffer(r[R]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class pa{constructor(e={}){const{canvas:t=Fv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),g=new Int32Array(4);let x=null,_=null;const p=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Cn,this._useLegacyLights=!1,this.toneMapping=Ei,this.toneMappingExposure=1;const v=this;let S=!1,P=0,T=0,L=null,D=-1,M=null;const y=new Ct,V=new Ct;let B=null;const O=new et(0);let ee=0,ne=t.width,se=t.height,ie=1,$=null,ce=null;const ue=new Ct(0,0,ne,se),ge=new Ct(0,0,ne,se);let we=!1;const Ye=new up;let Q=!1,he=!1;const me=new _t,de=new z,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return L===null?ie:1}let W=i;function Ke(C,X){return t.getContext(C,X)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ec}`),t.addEventListener("webglcontextlost",H,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",re,!1),W===null){const X="webgl2";if(W=Ke(X,C),W===null)throw Ke(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let be,I,b,k,q,J,oe,A,d,E,w,U,G,Y,N,F,le,te,pe,Re,ye,Se,De,We;function qe(){be=new eS(W),be.init(),Se=new OM(W,be),I=new YE(W,be,e,Se),b=new DM(W),k=new iS(W),q=new EM,J=new UM(W,be,b,q,I,Se,k),oe=new jE(v),A=new QE(v),d=new c0(W),De=new XE(W,d),E=new tS(W,d,k,De),w=new sS(W,E,d,k),pe=new rS(W,I,J),F=new qE(q),U=new xM(v,oe,A,be,I,De,F),G=new WM(v,q),Y=new MM,N=new RM(be),te=new WE(v,oe,A,b,w,h,l),le=new NM(v,w,I),We=new XM(W,k,I,b),Re=new $E(W,be,k),ye=new nS(W,be,k),k.programs=U.programs,v.capabilities=I,v.extensions=be,v.properties=q,v.renderLists=Y,v.shadowMap=le,v.state=b,v.info=k}qe();const Ce=new VM(v,W);this.xr=Ce,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const C=be.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=be.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(C){C!==void 0&&(ie=C,this.setSize(ne,se,!1))},this.getSize=function(C){return C.set(ne,se)},this.setSize=function(C,X,Z=!0){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=C,se=X,t.width=Math.floor(C*ie),t.height=Math.floor(X*ie),Z===!0&&(t.style.width=C+"px",t.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(ne*ie,se*ie).floor()},this.setDrawingBufferSize=function(C,X,Z){ne=C,se=X,ie=Z,t.width=Math.floor(C*Z),t.height=Math.floor(X*Z),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(y)},this.getViewport=function(C){return C.copy(ue)},this.setViewport=function(C,X,Z,j){C.isVector4?ue.set(C.x,C.y,C.z,C.w):ue.set(C,X,Z,j),b.viewport(y.copy(ue).multiplyScalar(ie).round())},this.getScissor=function(C){return C.copy(ge)},this.setScissor=function(C,X,Z,j){C.isVector4?ge.set(C.x,C.y,C.z,C.w):ge.set(C,X,Z,j),b.scissor(V.copy(ge).multiplyScalar(ie).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(C){b.setScissorTest(we=C)},this.setOpaqueSort=function(C){$=C},this.setTransparentSort=function(C){ce=C},this.getClearColor=function(C){return C.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(C=!0,X=!0,Z=!0){let j=0;if(C){let K=!1;if(L!==null){const Ee=L.texture.format;K=Ee===Zd||Ee===Jd||Ee===Kd}if(K){const Ee=L.texture.type,Te=Ee===bi||Ee===Or||Ee===$d||Ee===As||Ee===qd||Ee===jd,Ae=te.getClearColor(),Pe=te.getClearAlpha(),Be=Ae.r,ze=Ae.g,Xe=Ae.b;Te?(m[0]=Be,m[1]=ze,m[2]=Xe,m[3]=Pe,W.clearBufferuiv(W.COLOR,0,m)):(g[0]=Be,g[1]=ze,g[2]=Xe,g[3]=Pe,W.clearBufferiv(W.COLOR,0,g))}else j|=W.COLOR_BUFFER_BIT}X&&(j|=W.DEPTH_BUFFER_BIT),Z&&(j|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",H,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",re,!1),Y.dispose(),N.dispose(),q.dispose(),oe.dispose(),A.dispose(),w.dispose(),De.dispose(),We.dispose(),U.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",rt),Ce.removeEventListener("sessionend",wn),Vt.stop()};function H(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=k.autoReset,X=le.enabled,Z=le.autoUpdate,j=le.needsUpdate,K=le.type;qe(),k.autoReset=C,le.enabled=X,le.autoUpdate=Z,le.needsUpdate=j,le.type=K}function re(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function xe(C){const X=C.target;X.removeEventListener("dispose",xe),Me(X)}function Me(C){Ze(C),q.remove(C)}function Ze(C){const X=q.get(C).programs;X!==void 0&&(X.forEach(function(Z){U.releaseProgram(Z)}),C.isShaderMaterial&&U.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,Z,j,K,Ee){X===null&&(X=Ue);const Te=K.isMesh&&K.matrixWorld.determinant()<0,Ae=Qp(C,X,Z,j,K);b.setMaterial(j,Te);let Pe=Z.index,Be=1;if(j.wireframe===!0){if(Pe=E.getWireframeAttribute(Z),Pe===void 0)return;Be=2}const ze=Z.drawRange,Xe=Z.attributes.position;let vt=ze.start*Be,Nt=(ze.start+ze.count)*Be;Ee!==null&&(vt=Math.max(vt,Ee.start*Be),Nt=Math.min(Nt,(Ee.start+Ee.count)*Be)),Pe!==null?(vt=Math.max(vt,0),Nt=Math.min(Nt,Pe.count)):Xe!=null&&(vt=Math.max(vt,0),Nt=Math.min(Nt,Xe.count));const nn=Nt-vt;if(nn<0||nn===1/0)return;De.setup(K,j,Ae,Z,Pe);let On,nt=Re;if(Pe!==null&&(On=d.get(Pe),nt=ye,nt.setIndex(On)),K.isMesh)j.wireframe===!0?(b.setLineWidth(j.wireframeLinewidth*Fe()),nt.setMode(W.LINES)):nt.setMode(W.TRIANGLES);else if(K.isLine){let ke=j.linewidth;ke===void 0&&(ke=1),b.setLineWidth(ke*Fe()),K.isLineSegments?nt.setMode(W.LINES):K.isLineLoop?nt.setMode(W.LINE_LOOP):nt.setMode(W.LINE_STRIP)}else K.isPoints?nt.setMode(W.POINTS):K.isSprite&&nt.setMode(W.TRIANGLES);if(K.isBatchedMesh)K._multiDrawInstances!==null?nt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances):nt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)nt.renderInstances(vt,nn,K.count);else if(Z.isInstancedBufferGeometry){const ke=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,$r=Math.min(Z.instanceCount,ke);nt.renderInstances(vt,nn,$r)}else nt.render(vt,nn)};function at(C,X,Z){C.transparent===!0&&C.side===Xn&&C.forceSinglePass===!1?(C.side=qt,C.needsUpdate=!0,Ds(C,X,Z),C.side=Ti,C.needsUpdate=!0,Ds(C,X,Z),C.side=Xn):Ds(C,X,Z)}this.compile=function(C,X,Z=null){Z===null&&(Z=C),_=N.get(Z),_.init(X),R.push(_),Z.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),C!==Z&&C.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),_.setupLights(v._useLegacyLights);const j=new Set;return C.traverse(function(K){const Ee=K.material;if(Ee)if(Array.isArray(Ee))for(let Te=0;Te<Ee.length;Te++){const Ae=Ee[Te];at(Ae,Z,K),j.add(Ae)}else at(Ee,Z,K),j.add(Ee)}),R.pop(),_=null,j},this.compileAsync=function(C,X,Z=null){const j=this.compile(C,X,Z);return new Promise(K=>{function Ee(){if(j.forEach(function(Te){q.get(Te).currentProgram.isReady()&&j.delete(Te)}),j.size===0){K(C);return}setTimeout(Ee,10)}be.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let mt=null;function It(C){mt&&mt(C)}function rt(){Vt.stop()}function wn(){Vt.start()}const Vt=new fp;Vt.setAnimationLoop(It),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(C){mt=C,Ce.setAnimationLoop(C),C===null?Vt.stop():Vt.start()},Ce.addEventListener("sessionstart",rt),Ce.addEventListener("sessionend",wn),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(X),X=Ce.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,X,L),_=N.get(C,R.length),_.init(X),R.push(_),me.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ye.setFromProjectionMatrix(me),he=this.localClippingEnabled,Q=F.init(this.clippingPlanes,he),x=Y.get(C,p.length),x.init(),p.push(x),Oc(C,X,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort($,ce);const Z=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1;Z&&te.addToRenderList(x,C),this.info.render.frame++,Q===!0&&F.beginShadows();const j=_.state.shadowsArray;le.render(j,C,X),Q===!0&&F.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=x.opaque,Ee=x.transmissive;if(_.setupLights(v._useLegacyLights),X.isArrayCamera){const Te=X.cameras;if(Ee.length>0)for(let Ae=0,Pe=Te.length;Ae<Pe;Ae++){const Be=Te[Ae];Bc(K,Ee,C,Be)}Z&&te.render(C);for(let Ae=0,Pe=Te.length;Ae<Pe;Ae++){const Be=Te[Ae];Fc(x,C,Be,Be.viewport)}}else Ee.length>0&&Bc(K,Ee,C,X),Z&&te.render(C),Fc(x,C,X);L!==null&&(J.updateMultisampleRenderTarget(L),J.updateRenderTargetMipmap(L)),C.isScene===!0&&C.onAfterRender(v,C,X),De.resetDefaultState(),D=-1,M=null,R.pop(),R.length>0?(_=R[R.length-1],Q===!0&&F.setGlobalState(v.clippingPlanes,_.state.camera)):_=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Oc(C,X,Z,j){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ye.intersectsSprite(C)){j&&de.setFromMatrixPosition(C.matrixWorld).applyMatrix4(me);const Te=w.update(C),Ae=C.material;Ae.visible&&x.push(C,Te,Ae,Z,de.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ye.intersectsObject(C))){const Te=w.update(C),Ae=C.material;if(j&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),de.copy(C.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),de.copy(Te.boundingSphere.center)),de.applyMatrix4(C.matrixWorld).applyMatrix4(me)),Array.isArray(Ae)){const Pe=Te.groups;for(let Be=0,ze=Pe.length;Be<ze;Be++){const Xe=Pe[Be],vt=Ae[Xe.materialIndex];vt&&vt.visible&&x.push(C,Te,vt,Z,de.z,Xe)}}else Ae.visible&&x.push(C,Te,Ae,Z,de.z,null)}}const Ee=C.children;for(let Te=0,Ae=Ee.length;Te<Ae;Te++)Oc(Ee[Te],X,Z,j)}function Fc(C,X,Z,j){const K=C.opaque,Ee=C.transmissive,Te=C.transparent;_.setupLightsView(Z),Q===!0&&F.setGlobalState(v.clippingPlanes,Z),j&&b.viewport(y.copy(j)),K.length>0&&Ns(K,X,Z),Ee.length>0&&Ns(Ee,X,Z),Te.length>0&&Ns(Te,X,Z),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Bc(C,X,Z,j){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[j.id]===void 0&&(_.state.transmissionRenderTarget[j.id]=new tr(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?fa:bi,minFilter:Zi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const Ee=_.state.transmissionRenderTarget[j.id],Te=j.viewport||y;Ee.setSize(Te.z,Te.w);const Ae=v.getRenderTarget();v.setRenderTarget(Ee),v.getClearColor(O),ee=v.getClearAlpha(),ee<1&&v.setClearColor(16777215,.5),v.clear();const Pe=v.toneMapping;v.toneMapping=Ei;const Be=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),_.setupLightsView(j),Q===!0&&F.setGlobalState(v.clippingPlanes,j),Ns(C,Z,j),J.updateMultisampleRenderTarget(Ee),J.updateRenderTargetMipmap(Ee),be.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Xe=0,vt=X.length;Xe<vt;Xe++){const Nt=X[Xe],nn=Nt.object,On=Nt.geometry,nt=Nt.material,ke=Nt.group;if(nt.side===Xn&&nn.layers.test(j.layers)){const $r=nt.side;nt.side=qt,nt.needsUpdate=!0,kc(nn,Z,j,On,nt,ke),nt.side=$r,nt.needsUpdate=!0,ze=!0}}ze===!0&&(J.updateMultisampleRenderTarget(Ee),J.updateRenderTargetMipmap(Ee))}v.setRenderTarget(Ae),v.setClearColor(O,ee),Be!==void 0&&(j.viewport=Be),v.toneMapping=Pe}function Ns(C,X,Z){const j=X.isScene===!0?X.overrideMaterial:null;for(let K=0,Ee=C.length;K<Ee;K++){const Te=C[K],Ae=Te.object,Pe=Te.geometry,Be=j===null?Te.material:j,ze=Te.group;Ae.layers.test(Z.layers)&&kc(Ae,X,Z,Pe,Be,ze)}}function kc(C,X,Z,j,K,Ee){C.onBeforeRender(v,X,Z,j,K,Ee),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(v,X,Z,j,C,Ee),K.transparent===!0&&K.side===Xn&&K.forceSinglePass===!1?(K.side=qt,K.needsUpdate=!0,v.renderBufferDirect(Z,X,j,K,C,Ee),K.side=Ti,K.needsUpdate=!0,v.renderBufferDirect(Z,X,j,K,C,Ee),K.side=Xn):v.renderBufferDirect(Z,X,j,K,C,Ee),C.onAfterRender(v,X,Z,j,K,Ee)}function Ds(C,X,Z){X.isScene!==!0&&(X=Ue);const j=q.get(C),K=_.state.lights,Ee=_.state.shadowsArray,Te=K.state.version,Ae=U.getParameters(C,K.state,Ee,X,Z),Pe=U.getProgramCacheKey(Ae);let Be=j.programs;j.environment=C.isMeshStandardMaterial?X.environment:null,j.fog=X.fog,j.envMap=(C.isMeshStandardMaterial?A:oe).get(C.envMap||j.environment),j.envMapRotation=j.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,Be===void 0&&(C.addEventListener("dispose",xe),Be=new Map,j.programs=Be);let ze=Be.get(Pe);if(ze!==void 0){if(j.currentProgram===ze&&j.lightsStateVersion===Te)return zc(C,Ae),ze}else Ae.uniforms=U.getUniforms(C),C.onBuild(Z,Ae,v),C.onBeforeCompile(Ae,v),ze=U.acquireProgram(Ae,Pe),Be.set(Pe,ze),j.uniforms=Ae.uniforms;const Xe=j.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Xe.clippingPlanes=F.uniform),zc(C,Ae),j.needsLights=tm(C),j.lightsStateVersion=Te,j.needsLights&&(Xe.ambientLightColor.value=K.state.ambient,Xe.lightProbe.value=K.state.probe,Xe.directionalLights.value=K.state.directional,Xe.directionalLightShadows.value=K.state.directionalShadow,Xe.spotLights.value=K.state.spot,Xe.spotLightShadows.value=K.state.spotShadow,Xe.rectAreaLights.value=K.state.rectArea,Xe.ltc_1.value=K.state.rectAreaLTC1,Xe.ltc_2.value=K.state.rectAreaLTC2,Xe.pointLights.value=K.state.point,Xe.pointLightShadows.value=K.state.pointShadow,Xe.hemisphereLights.value=K.state.hemi,Xe.directionalShadowMap.value=K.state.directionalShadowMap,Xe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Xe.spotShadowMap.value=K.state.spotShadowMap,Xe.spotLightMatrix.value=K.state.spotLightMatrix,Xe.spotLightMap.value=K.state.spotLightMap,Xe.pointShadowMap.value=K.state.pointShadowMap,Xe.pointShadowMatrix.value=K.state.pointShadowMatrix),j.currentProgram=ze,j.uniformsList=null,ze}function Hc(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=bo.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function zc(C,X){const Z=q.get(C);Z.outputColorSpace=X.outputColorSpace,Z.batching=X.batching,Z.instancing=X.instancing,Z.instancingColor=X.instancingColor,Z.instancingMorph=X.instancingMorph,Z.skinning=X.skinning,Z.morphTargets=X.morphTargets,Z.morphNormals=X.morphNormals,Z.morphColors=X.morphColors,Z.morphTargetsCount=X.morphTargetsCount,Z.numClippingPlanes=X.numClippingPlanes,Z.numIntersection=X.numClipIntersection,Z.vertexAlphas=X.vertexAlphas,Z.vertexTangents=X.vertexTangents,Z.toneMapping=X.toneMapping}function Qp(C,X,Z,j,K){X.isScene!==!0&&(X=Ue),J.resetTextureUnits();const Ee=X.fog,Te=j.isMeshStandardMaterial?X.environment:null,Ae=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ci,Pe=(j.isMeshStandardMaterial?A:oe).get(j.envMap||Te),Be=j.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ze=!!Z.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Xe=!!Z.morphAttributes.position,vt=!!Z.morphAttributes.normal,Nt=!!Z.morphAttributes.color;let nn=Ei;j.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(nn=v.toneMapping);const On=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,nt=On!==void 0?On.length:0,ke=q.get(j),$r=_.state.lights;if(Q===!0&&(he===!0||C!==M)){const ln=C===M&&j.id===D;F.setState(j,C,ln)}let ht=!1;j.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==$r.state.version||ke.outputColorSpace!==Ae||K.isBatchedMesh&&ke.batching===!1||!K.isBatchedMesh&&ke.batching===!0||K.isInstancedMesh&&ke.instancing===!1||!K.isInstancedMesh&&ke.instancing===!0||K.isSkinnedMesh&&ke.skinning===!1||!K.isSkinnedMesh&&ke.skinning===!0||K.isInstancedMesh&&ke.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ke.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ke.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ke.instancingMorph===!1&&K.morphTexture!==null||ke.envMap!==Pe||j.fog===!0&&ke.fog!==Ee||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==F.numPlanes||ke.numIntersection!==F.numIntersection)||ke.vertexAlphas!==Be||ke.vertexTangents!==ze||ke.morphTargets!==Xe||ke.morphNormals!==vt||ke.morphColors!==Nt||ke.toneMapping!==nn||ke.morphTargetsCount!==nt)&&(ht=!0):(ht=!0,ke.__version=j.version);let Ii=ke.currentProgram;ht===!0&&(Ii=Ds(j,X,K));let Vc=!1,Yr=!1,Sa=!1;const Dt=Ii.getUniforms(),Qn=ke.uniforms;if(b.useProgram(Ii.program)&&(Vc=!0,Yr=!0,Sa=!0),j.id!==D&&(D=j.id,Yr=!0),Vc||M!==C){Dt.setValue(W,"projectionMatrix",C.projectionMatrix),Dt.setValue(W,"viewMatrix",C.matrixWorldInverse);const ln=Dt.map.cameraPosition;ln!==void 0&&ln.setValue(W,de.setFromMatrixPosition(C.matrixWorld)),I.logarithmicDepthBuffer&&Dt.setValue(W,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Dt.setValue(W,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,Yr=!0,Sa=!0)}if(K.isSkinnedMesh){Dt.setOptional(W,K,"bindMatrix"),Dt.setOptional(W,K,"bindMatrixInverse");const ln=K.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Dt.setValue(W,"boneTexture",ln.boneTexture,J))}K.isBatchedMesh&&(Dt.setOptional(W,K,"batchingTexture"),Dt.setValue(W,"batchingTexture",K._matricesTexture,J));const Ma=Z.morphAttributes;if((Ma.position!==void 0||Ma.normal!==void 0||Ma.color!==void 0)&&pe.update(K,Z,Ii),(Yr||ke.receiveShadow!==K.receiveShadow)&&(ke.receiveShadow=K.receiveShadow,Dt.setValue(W,"receiveShadow",K.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Qn.envMap.value=Pe,Qn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&X.environment!==null&&(Qn.envMapIntensity.value=X.environmentIntensity),Yr&&(Dt.setValue(W,"toneMappingExposure",v.toneMappingExposure),ke.needsLights&&em(Qn,Sa),Ee&&j.fog===!0&&G.refreshFogUniforms(Qn,Ee),G.refreshMaterialUniforms(Qn,j,ie,se,_.state.transmissionRenderTarget[C.id]),bo.upload(W,Hc(ke),Qn,J)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(bo.upload(W,Hc(ke),Qn,J),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Dt.setValue(W,"center",K.center),Dt.setValue(W,"modelViewMatrix",K.modelViewMatrix),Dt.setValue(W,"normalMatrix",K.normalMatrix),Dt.setValue(W,"modelMatrix",K.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const ln=j.uniformsGroups;for(let ya=0,nm=ln.length;ya<nm;ya++){const Gc=ln[ya];We.update(Gc,Ii),We.bind(Gc,Ii)}}return Ii}function em(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function tm(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(C,X,Z){q.get(C.texture).__webglTexture=X,q.get(C.depthTexture).__webglTexture=Z;const j=q.get(C);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Z===void 0,j.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,X){const Z=q.get(C);Z.__webglFramebuffer=X,Z.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,Z=0){L=C,P=X,T=Z;let j=!0,K=null,Ee=!1,Te=!1;if(C){const Pe=q.get(C);Pe.__useDefaultFramebuffer!==void 0?(b.bindFramebuffer(W.FRAMEBUFFER,null),j=!1):Pe.__webglFramebuffer===void 0?J.setupRenderTarget(C):Pe.__hasExternalTextures&&J.rebindTextures(C,q.get(C.texture).__webglTexture,q.get(C.depthTexture).__webglTexture);const Be=C.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Te=!0);const ze=q.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ze[X])?K=ze[X][Z]:K=ze[X],Ee=!0):C.samples>0&&J.useMultisampledRTT(C)===!1?K=q.get(C).__webglMultisampledFramebuffer:Array.isArray(ze)?K=ze[Z]:K=ze,y.copy(C.viewport),V.copy(C.scissor),B=C.scissorTest}else y.copy(ue).multiplyScalar(ie).floor(),V.copy(ge).multiplyScalar(ie).floor(),B=we;if(b.bindFramebuffer(W.FRAMEBUFFER,K)&&j&&b.drawBuffers(C,K),b.viewport(y),b.scissor(V),b.setScissorTest(B),Ee){const Pe=q.get(C.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+X,Pe.__webglTexture,Z)}else if(Te){const Pe=q.get(C.texture),Be=X||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Pe.__webglTexture,Z||0,Be)}D=-1},this.readRenderTargetPixels=function(C,X,Z,j,K,Ee,Te){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=q.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Te!==void 0&&(Ae=Ae[Te]),Ae){b.bindFramebuffer(W.FRAMEBUFFER,Ae);try{const Pe=C.texture,Be=Pe.format,ze=Pe.type;if(!I.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-j&&Z>=0&&Z<=C.height-K&&W.readPixels(X,Z,j,K,Se.convert(Be),Se.convert(ze),Ee)}finally{const Pe=L!==null?q.get(L).__webglFramebuffer:null;b.bindFramebuffer(W.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(C,X,Z=0){const j=Math.pow(2,-Z),K=Math.floor(X.image.width*j),Ee=Math.floor(X.image.height*j);J.setTexture2D(X,0),W.copyTexSubImage2D(W.TEXTURE_2D,Z,0,0,C.x,C.y,K,Ee),b.unbindTexture()},this.copyTextureToTexture=function(C,X,Z,j=0){const K=X.image.width,Ee=X.image.height,Te=Se.convert(Z.format),Ae=Se.convert(Z.type);J.setTexture2D(Z,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Z.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,Z.unpackAlignment),X.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,j,C.x,C.y,K,Ee,Te,Ae,X.image.data):X.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,j,C.x,C.y,X.mipmaps[0].width,X.mipmaps[0].height,Te,X.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,j,C.x,C.y,Te,Ae,X.image),j===0&&Z.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),b.unbindTexture()},this.copyTextureToTexture3D=function(C,X,Z,j,K=0){const Ee=C.max.x-C.min.x,Te=C.max.y-C.min.y,Ae=C.max.z-C.min.z,Pe=Se.convert(j.format),Be=Se.convert(j.type);let ze;if(j.isData3DTexture)J.setTexture3D(j,0),ze=W.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)J.setTexture2DArray(j,0),ze=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,j.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,j.unpackAlignment);const Xe=W.getParameter(W.UNPACK_ROW_LENGTH),vt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Nt=W.getParameter(W.UNPACK_SKIP_PIXELS),nn=W.getParameter(W.UNPACK_SKIP_ROWS),On=W.getParameter(W.UNPACK_SKIP_IMAGES),nt=Z.isCompressedTexture?Z.mipmaps[K]:Z.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,nt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,nt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,C.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,C.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,C.min.z),Z.isDataTexture||Z.isData3DTexture?W.texSubImage3D(ze,K,X.x,X.y,X.z,Ee,Te,Ae,Pe,Be,nt.data):j.isCompressedArrayTexture?W.compressedTexSubImage3D(ze,K,X.x,X.y,X.z,Ee,Te,Ae,Pe,nt.data):W.texSubImage3D(ze,K,X.x,X.y,X.z,Ee,Te,Ae,Pe,Be,nt),W.pixelStorei(W.UNPACK_ROW_LENGTH,Xe),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,vt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Nt),W.pixelStorei(W.UNPACK_SKIP_ROWS,nn),W.pixelStorei(W.UNPACK_SKIP_IMAGES,On),K===0&&j.generateMipmaps&&W.generateMipmap(ze),b.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?J.setTextureCube(C,0):C.isData3DTexture?J.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?J.setTexture2DArray(C,0):J.setTexture2D(C,0),b.unbindTexture()},this.resetState=function(){P=0,T=0,L=null,b.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Sc?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===ha?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class bc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new et(e),this.density=t}clone(){return new bc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ma extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class vp extends Gr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zo=new z,Vo=new z,jf=new _t,es=new Mc,fo=new Ls,dl=new z,Kf=new z;class $M extends Ht{constructor(e=new tn,t=new vp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)zo.fromBufferAttribute(t,r-1),Vo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=zo.distanceTo(Vo);e.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fo.copy(i.boundingSphere),fo.applyMatrix4(r),fo.radius+=s,e.ray.intersectsSphere(fo)===!1)return;jf.copy(r).invert(),es.copy(e.ray).applyMatrix4(jf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const m=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=m,_=g-1;x<_;x+=c){const p=u.getX(x),R=u.getX(x+1),v=ho(this,e,es,l,p,R);v&&t.push(v)}if(this.isLineLoop){const x=u.getX(g-1),_=u.getX(m),p=ho(this,e,es,l,x,_);p&&t.push(p)}}else{const m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=m,_=g-1;x<_;x+=c){const p=ho(this,e,es,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){const x=ho(this,e,es,l,g-1,m);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ho(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(zo.fromBufferAttribute(o,r),Vo.fromBufferAttribute(o,s),t.distanceSqToSegment(zo,Vo,dl,Kf)>i)return;dl.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(dl);if(!(l<e.near||l>e.far))return{distance:l,point:Kf.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const Jf=new z,Zf=new z;class YM extends $M{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Jf.fromBufferAttribute(t,r),Zf.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Jf.distanceTo(Zf);e.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Go extends Gr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qf=new _t,zl=new Mc,po=new Ls,mo=new z;class Vl extends Ht{constructor(e=new tn,t=new Go){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(r),po.radius+=s,e.ray.intersectsSphere(po)===!1)return;Qf.copy(r).invert(),zl.copy(e.ray).applyMatrix4(Qf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=h,x=m;g<x;g++){const _=c.getX(g);mo.fromBufferAttribute(f,_),eh(mo,_,l,r,e,t,this)}}else{const h=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=h,x=m;g<x;g++)mo.fromBufferAttribute(f,g),eh(mo,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function eh(n,e,t,i,r,s,o){const a=zl.distanceSqToPoint(n);if(a<t){const l=new z;zl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Zn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,m=(o-u)/h;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Ie:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new z,r=[],s=[],o=[],a=new z,l=new _t;for(let m=0;m<=e;m++){const g=m/e;r[m]=this.getTangentAt(g,new z)}s[0]=new z,o[0]=new z;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ft(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(Ft(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],m*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class xp extends Zn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ie){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,m=c-this.aY;l=h*u-m*f+this.aX,c=h*f+m*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class qM extends xp{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ac(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,m*=u,r(o,a,h,m)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const _o=new z,pl=new Ac,ml=new Ac,_l=new Ac;class Ep extends Zn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new z){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(_o.subVectors(r[0],r[1]).add(r[0]),c=_o);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(_o.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=_o),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),m),x=Math.pow(f.distanceToSquared(h),m),_=Math.pow(h.distanceToSquared(u),m);x<1e-4&&(x=1),g<1e-4&&(g=x),_<1e-4&&(_=x),pl.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,x,_),ml.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,x,_),_l.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,x,_)}else this.curveType==="catmullrom"&&(pl.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),ml.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),_l.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(pl.calc(l),ml.calc(l),_l.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new z().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function th(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function jM(n,e){const t=1-n;return t*t*e}function KM(n,e){return 2*(1-n)*n*e}function JM(n,e){return n*n*e}function fs(n,e,t,i){return jM(n,e)+KM(n,t)+JM(n,i)}function ZM(n,e){const t=1-n;return t*t*t*e}function QM(n,e){const t=1-n;return 3*t*t*n*e}function ey(n,e){return 3*(1-n)*n*n*e}function ty(n,e){return n*n*n*e}function hs(n,e,t,i,r){return ZM(n,e)+QM(n,t)+ey(n,i)+ty(n,r)}class ny extends Zn{constructor(e=new Ie,t=new Ie,i=new Ie,r=new Ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Ie){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(hs(e,r.x,s.x,o.x,a.x),hs(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class iy extends Zn{constructor(e=new z,t=new z,i=new z,r=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new z){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(hs(e,r.x,s.x,o.x,a.x),hs(e,r.y,s.y,o.y,a.y),hs(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ry extends Zn{constructor(e=new Ie,t=new Ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ie){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sy extends Zn{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class oy extends Zn{constructor(e=new Ie,t=new Ie,i=new Ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ie){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(fs(e,r.x,s.x,o.x),fs(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sp extends Zn{constructor(e=new z,t=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new z){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(fs(e,r.x,s.x,o.x),fs(e,r.y,s.y,o.y),fs(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ay extends Zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ie){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(th(a,l.x,c.x,u.x,f.x),th(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Ie().fromArray(r))}return this}}var ly=Object.freeze({__proto__:null,ArcCurve:qM,CatmullRomCurve3:Ep,CubicBezierCurve:ny,CubicBezierCurve3:iy,EllipseCurve:xp,LineCurve:ry,LineCurve3:sy,QuadraticBezierCurve:oy,QuadraticBezierCurve3:Sp,SplineCurve:ay});const go=new z,vo=new z,gl=new z,xo=new yn;class cy extends tn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(To*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h={},m=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:x,b:_,c:p}=xo;if(x.fromBufferAttribute(a,c[0]),_.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),xo.getNormal(gl),f[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,f[1]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,f[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let R=0;R<3;R++){const v=(R+1)%3,S=f[R],P=f[v],T=xo[u[R]],L=xo[u[v]],D=`${S}_${P}`,M=`${P}_${S}`;M in h&&h[M]?(gl.dot(h[M].normal)<=s&&(m.push(T.x,T.y,T.z),m.push(L.x,L.y,L.z)),h[M]=null):D in h||(h[D]={index0:c[R],index1:c[v],normal:gl.clone()})}}for(const g in h)if(h[g]){const{index0:x,index1:_}=h[g];go.fromBufferAttribute(a,x),vo.fromBufferAttribute(a,_),m.push(go.x,go.y,go.z),m.push(vo.x,vo.y,vo.z)}this.setAttribute("position",new zt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class wc extends tn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new z,h=new z,m=[],g=[],x=[],_=[];for(let p=0;p<=i;p++){const R=[],v=p/i;let S=0;p===0&&o===0?S=.5/t:p===i&&l===Math.PI&&(S=-.5/t);for(let P=0;P<=t;P++){const T=P/t;f.x=-e*Math.cos(r+T*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+T*s)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),_.push(T+S,1-v),R.push(c++)}u.push(R)}for(let p=0;p<i;p++)for(let R=0;R<t;R++){const v=u[p][R+1],S=u[p][R],P=u[p+1][R],T=u[p+1][R+1];(p!==0||o>0)&&m.push(v,S,T),(p!==i-1||l<Math.PI)&&m.push(S,P,T)}this.setIndex(m),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wo extends tn{constructor(e=new Sp(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new z,l=new z,c=new Ie;let u=new z;const f=[],h=[],m=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new zt(f,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(m,2));function x(){for(let v=0;v<t;v++)_(v);_(s===!1?t:0),R(),p()}function _(v){u=e.getPointAt(v/t,u);const S=o.normals[v],P=o.binormals[v];for(let T=0;T<=r;T++){const L=T/r*Math.PI*2,D=Math.sin(L),M=-Math.cos(L);l.x=M*S.x+D*P.x,l.y=M*S.y+D*P.y,l.z=M*S.z+D*P.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=t;v++)for(let S=1;S<=r;S++){const P=(r+1)*(v-1)+(S-1),T=(r+1)*v+(S-1),L=(r+1)*v+S,D=(r+1)*(v-1)+S;g.push(P,T,D),g.push(T,L,D)}}function R(){for(let v=0;v<=t;v++)for(let S=0;S<=r;S++)c.x=v/t,c.y=S/r,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Wo(new ly[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}const nh={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class uy{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const fy=new uy;class Rc{constructor(e){this.manager=e!==void 0?e:fy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Rc.DEFAULT_MATERIAL_NAME="__DEFAULT";class hy extends Rc{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=nh.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Es("img");function l(){u(),nh.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Mp extends Rc{constructor(e){super(e)}load(e,t,i,r){const s=new jt,o=new hy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class dy extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class py extends dy{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ec);function my(n){const e=n.offsetWidth,t=n.offsetHeight,i=new ma,r=new $t(65,e/t);r.position.z=14,r.position.y=2,i.add(r);const s=new pa({canvas:n,alpha:!0,antialias:!0});s.setSize(e,t);const o=new Mp,a=new wc(4,96,96),l=new Go({alphaMap:o.load("/earthspec1k_inverted.jpg"),alphaHash:!0,color:15790320,size:.02,opacity:.7}),c=new Vl(a,l);i.add(c),r.lookAt(c.position);const u=x=>{const _=new Float32Array(x*3);for(let p=0;p<x;p++)_[p]=(Math.random()-.5)*25;return _},f=new tn;f.setAttribute("position",new mn(u(1e3),3));const h=new Go({size:.05,map:o.load("/star.png"),transparent:!0}),m=new Vl(f,h);i.add(m);function g(){s.setPixelRatio(window.devicePixelRatio),m.rotation.y-=1e-4,c.rotation.y+=.001,s.render(i,r),requestAnimationFrame(g)}window.addEventListener("resize",()=>{n.style.width="100vw",n.style.height="100vh";const x=n.offsetWidth,_=n.offsetHeight;r.aspect=x/_,r.updateProjectionMatrix(),s.setPixelRatio(window.devicePixelRatio),s.setSize(x,_),s.render(i,r)}),g()}const _y={class:"relative w-full h-screen pointer-events-none"},gy={class:"flex sm:flex-row flex-col-reverse justify-between w-full absolute md:top-1/4 sm:top-[20%] top-[12%] md:-translate-y-1/4 sm:-translate-y-[20%] -translate-y-[12%] px-8"},vy={class:"flex flex-col font-light tracking-wide text-2xl"},xy=fe("br",null,null,-1),Ey={class:"text-right sm:text-2xl text-base font-light sm:tracking-wide tracking-widest"},Sy=fe("br",null,null,-1),My=fe("h1",{class:"py-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 outline outline-1 outline-white md:bg-[#0e0e0e]/50 bg-[#0e0e0e]/75 w-max px-8 absolute sm:text-start text-center"},[fe("p",{class:"lg:text-[60px] md:text-5xl sm:text-4xl text-[6.2vw] tracking-widest"}," FRONTEND DEVELOPER ")],-1),yy={class:"absolute left-1/2 -translate-x-1/2 bottom-4 w-full text-center px-8"},Ty={href:"#contacts",class:"mt-auto mx-auto text-green-500 hover:text-[#090909] hover:bg-green-500 transition-all duration-300 cursor-pointer px-4 py-2 text-xl tracking-widest outline outline-1 select-none"},by={class:"text-3xl mx-auto mt-8"},Ay=Pt({__name:"my-header",setup(n){const e=on(null);return ir(()=>{e.value!==null&&my(e.value)}),(t,i)=>(ct(),At(pt,null,[fe("canvas",{ref_key:"canvas",ref:e,class:"h-screen w-screen absolute top-0 left-0"},null,512),fe("div",_y,[fe("div",gy,[fe("div",vy,[Yt(" TOFAN VLAD "),xy,Yt(" "+je(t.$t("header.based")),1)]),fe("p",Ey,[Yt(je(t.$t("header.welcome_1"))+" ",1),Sy,Yt(" "+je(t.$t("header.welcome_2")),1)])]),My]),fe("div",yy,[fe("a",Ty,je(t.$t("header.button")),1),fe("h2",by,je(t.$t("header.specialize")),1)])],64))}}),wy=`
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
`,Ry=`
    void main(){
        gl_FragColor = vec4(1., 1., 1., 1.);
    }
`;function Cy(n){const e=n.offsetWidth,t=n.offsetHeight,i=new ma,r=new $t(65,e/t);r.position.z=8.5,r.position.y=1.5,r.rotation.x=.2,i.add(r);const s=new pa({canvas:n,alpha:!0});s.setSize(e,t);const o=on({uTime:{value:0},uAmplitude:{value:.25},uWaveLength:{value:1}}),a=new Is(32,12,64,8),l=new Kn({vertexShader:wy,fragmentShader:Ry,wireframe:!0,uniforms:o.value}),c=new bn(a,l);c.rotation.y=Math.PI/180*180,c.rotation.x=Math.PI/180*90,i.add(c);function u(){o.value.uTime.value+=.025,s.render(i,r),requestAnimationFrame(u)}window.addEventListener("resize",()=>{n.style.width="100vw",n.style.height="100vh";const f=n.offsetWidth,h=n.offsetHeight;r.aspect=f/h,r.updateProjectionMatrix(),s.setPixelRatio(window.devicePixelRatio),s.setSize(f,h),s.render(i,r)}),u()}const Ly={class:"flex lg:flex-row flex-col justify-between lg:items-center lg:gap-8 gap-4 xl:mt-24 sm:mt-8 mt-0"},Py={class:"flex flex-col gap-2 px-8"},Iy={class:"sm:text-sm text-xs tracking-widest"},Ny={class:"md:text-2xl sm:text-2xl text-base tracking-widest uppercase"},Dy={class:"flex lg:flex-row flex-col justify-between lg:items-center lg:gap-8 gap-4 bg-[#0e0e0e]/50"},Uy={class:"flex flex-col gap-2 lg:whitespace-nowrap px-8"},Oy={class:"sm:text-sm text-xs tracking-widest"},Fy=fe("h1",{class:"md:text-[46px] sm:text-4xl text-2xl"},[Yt(" Frontend Developer"),fe("br",{class:"lg:block hidden"}),Yt(" TweenyOne SRL "),fe("br"),Yt(" 2023 - 2024 ")],-1),By={class:"lg:border-l-2 lg:border-t-0 border-t-2 border-white h-full md:text-3xl sm:text-xl text-lg lg:mx-0 mx-8 lg:py-0 lg:px-4 pt-4 tracking-widest flex"},ky={class:"my-auto"},Hy=Pt({__name:"my-about",setup(n){const e=on(null);return ir(()=>{e.value!==null&&Cy(e.value)}),(t,i)=>(ct(),At(pt,null,[Qe(Uo,{class:"flex flex-col md:pt-28 pt-24 pb-16 z-10 relative lg:gap-16 gap-8 uppercase"},{default:Mi(()=>[fe("div",Ly,[fe("div",Py,[fe("p",Iy,je(t.$t("about.title")),1),fe("h1",Ny,je(t.$t("about.title_desc")),1)])]),fe("div",Dy,[fe("div",Uy,[fe("p",Oy,je(t.$t("about.exp")),1),Fy]),fe("div",By,[fe("p",ky,je(t.$t("about.exp_desc")),1)])])]),_:1}),fe("canvas",{ref_key:"canvas",ref:e,class:"w-screen h-screen absolute top-0 left-0"},null,512)],64))}}),yp=n=>(ia("data-v-5494b4bb"),n=n(),ra(),n),zy=["href"],Vy=yp(()=>fe("div",{class:"-translate-x-[110%] absolute left-0 bottom-0 transition-transform w-full"},"+",-1)),Gy=yp(()=>fe("div",{class:"absolute bottom-0 left-0 w-full h-[1px] bg-white -translate-x-[110%] transition-transform"},null,-1)),Wy={class:"tracking-widest"},Xy=Pt({__name:"my-link",props:{href:{},text:{}},setup(n){return(e,t)=>e.href?(ct(),At("a",{key:0,href:e.href,target:"_blank",class:"items-center flex gap-2 relative w-max group md:hover:pl-4 hover:pl-3 transition-[padding] overflow-hidden md:text-[.8vw] text-[12px] lg:text-sm md:text-xs link"},[Vy,Gy,fe("p",Wy,je(e.text),1)],8,zy)):_c("",!0)}}),_a=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Ao=_a(Xy,[["__scopeId","data-v-5494b4bb"]]),$y={class:"outline-1 outline md:outline-white/50 transition-[colors_outline] duration-300 md:group-hover:outline-green-500 md:group-hover:text-green-500 md:text-white/50 text-green-500 lg:px-3 px-2 md:py-1 py-[2px] rounded lg:text-sm md:text-xs text-[12px] md:leading-none"},Yy=Pt({__name:"my-chip",props:{text:{}},setup(n){return(e,t)=>(ct(),At("div",$y,je(e.text),1))}}),qy={class:"xl:flex md:hidden flex gap-2 md:group-hover:text-white md:group-hover:translate-x-0 md:text-white/50 transition-[colors_translate] duration-300 sm:mt-4 mt-4 col-span-3 md:group-hover:opacity-100 md:-translate-x-[50px] md:opacity-0 sm:text-[2.2vw] text-[3vw] md:text-sm tracking-[.1vw]"},jy=fe("div",null,"+",-1),Ky=Pt({__name:"my-description",props:{text:{}},setup(n){return(e,t)=>(ct(),At("p",qy,[jy,Yt(" "+je(e.text[e.$i18n.locale]),1)]))}}),Jy={class:"flex flex-col gap-2 mt-4 overflow-hidden tracking-wide md:mt-0 lg:gap-2 md:gap-1"},Zy={class:"text-base tracking-widest xl:text-sm"},Qy={class:"lg:text-4xl md:text-[4vw] text-[6vw] leading-none"},eT={class:"text-base tracking-widest xl:text-sm"},tT={class:"lg:text-4xl md:text-[4vw] text-[6vw] leading-none"},nT={class:"text-base tracking-widest xl:text-sm"},iT={class:"flex flex-wrap gap-2 pb-1 pl-1 mt-2"},rT=Pt({__name:"my-card-desc",props:{title:{},year:{},tehnologies:{},description:{},role:{}},setup(n){return(e,t)=>(ct(),At("div",Jy,[fe("div",null,[fe("p",Zy,je(e.$t("card.year")),1),fe("h2",Qy,je(e.year),1)]),fe("div",null,[fe("p",eT,je(e.$t("card.role")),1),fe("h2",tT,je(e.role?e.role:"FRONTEND DEVELOPER"),1)]),fe("div",null,[fe("p",nT,je(e.$t("card.tehnologies")),1),fe("div",iT,[(ct(!0),At(pt,null,aa(e.tehnologies,(i,r)=>(ct(),rr(Yy,{key:r,text:i},null,8,["text"]))),128))])]),Qe(Ky,{text:e.description},null,8,["text"])]))}}),sT={class:"border-t-[1px] border-white md:grid flex flex-col xl:grid-cols-[1.5fr_5fr_3fr] grid-cols-[1fr_5.5fr_3fr] w-full mb-20 uppercase relative group transition-colors duration-300 hover:text-white md:text-[white]/50"},oT={class:"px-[1.5vw] pt-[1.5vw] xl:px-4 xl:pt-4 md:block hidden"},aT={class:"xl:text-lg text-[1.2vw] tracking-widest"},lT={class:"xl:text-[90px] text-[5.5vw] leading-none"},cT={class:"pt-[1.5vw] md:px-4 xl:pt-4 relative aspect-video md:border-x-[1px] border-white"},uT=fe("div",{class:"absolute top-0 left-0 w-full h-full transition-colors duration-300 md:bg-black/50 group-hover:bg-transparent"},null,-1),fT=["src","alt"],hT={class:"px-[1.5vw] pt-[1.5vw] xl:px-4 xl:pt-4"},dT=Pt({__name:"my-card",props:{project:{}},setup(n){return(e,t)=>(ct(),At("article",sT,[fe("div",oT,[fe("p",aT,je(e.project.title[e.$i18n.locale]),1),fe("h1",lT," 0"+je(e.project.number),1),Qe(Ao,{href:e.project.href,text:e.$t("card.visit")},null,8,["href","text"])]),fe("div",cT,[uT,fe("img",{src:e.project.video,alt:e.project.title[e.$i18n.locale],class:"object-cover w-full h-full"},null,8,fT)]),fe("div",hT,[Qe(rT,{title:e.project.title,year:e.project.year,description:e.project.description,tehnologies:e.project.tehnologies,role:e.project.role},null,8,["title","year","description","tehnologies","role"])])]))}}),pT="/logo-removebg.png",wo=on(!1);function Xo(){window.innerWidth<768&&(wo.value=!wo.value),wo.value?document.body.style.overflowY="hidden":document.body.style.overflowY="auto"}const mT=n=>(ia("data-v-4652c147"),n=n(),ra(),n),_T={class:"flex items-center gap-8 justify-between fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-[1240px] px-8 z-[999]"},gT=mT(()=>fe("div",{class:"md:w-[75px] w-[45px] aspect-square"},[fe("img",{src:pT,alt:"Logo",class:"w-full h-full object-contain"})],-1)),vT={class:"md:hidden block text-lg tracking-widest"},xT={class:"md:flex hidden items-center gap-4"},ET={href:"#home",class:"relative before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-[2px] before:bg-white before:transition-all before:duration-300"},ST={href:"#about",class:"relative before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-[2px] before:bg-white before:transition-all before:duration-300"},MT={href:"#projects",class:"relative before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-[2px] before:bg-white before:transition-all before:duration-300"},yT={href:"#contacts",class:"relative before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-[2px] before:bg-white before:transition-all before:duration-300"},TT={class:"outline outline-[1px] outline-white flex h-max relative bg-[#0e0e0e]/75"},bT=Pt({__name:"my-nav",setup(n){return(e,t)=>(ct(),At("nav",_T,[fe("div",{class:"md:px-4 px-2 outline outline-1 outline-white bg-[#0e0e0e]/75 flex items-center md:cursor-auto cursor-pointer justify-between gap-4 uppercase top-8 md:w-[650px]",onClick:t[0]||(t[0]=(...i)=>gi(Xo)&&gi(Xo)(...i))},[gT,fe("p",vT,je(e.$t("nav.menu")),1),fe("ul",xT,[fe("a",ET,je(e.$t("nav.home")),1),fe("a",ST,je(e.$t("nav.about")),1),fe("a",MT,je(e.$t("nav.projects")),1),fe("a",yT,je(e.$t("nav.contacts")),1)])]),fe("div",TT,[fe("div",{class:"py-1 px-2 cursor-pointer text-black invert-[1] mix-blend-difference font-medium z-[5]",onClick:t[1]||(t[1]=i=>e.$i18n.locale="en")}," EN "),fe("div",{class:"py-1 px-2 cursor-pointer text-black invert-[1] mix-blend-difference font-medium z-[5]",onClick:t[2]||(t[2]=i=>e.$i18n.locale="ro")}," RO "),fe("div",{class:ys(["absolute w-1/2 h-full bg-white top-0 transition-all",e.$i18n.locale==="en"?"translate-x-0":"translate-x-[calc(100%+1px)]"])},null,2)])]))}}),AT=_a(bT,[["__scopeId","data-v-4652c147"]]),wT={key:0,class:"w-screen h-[100dvh] bg-[#090909] bottom-0 left-0 md:hidden flex flex-col fixed px-4 pt-20 z-[100]"},RT={class:"uppercase text-2xl mt-20"},CT=fe("br",null,null,-1),LT={class:"flex flex-col my-auto divide-y-2"},PT=["href"],IT={class:"text-4xl"},NT={class:"text-xs"},DT=fe("hr",{class:"mt-auto"},null,-1),UT=fe("div",{class:"flex items-center justify-between mb-4 py-2"},[fe("a",{href:"mailto:tofanvladit@gmail.com "},"E-MAIL"),fe("a",{href:"https://www.linkedin.com/in/vlad-tofan-349b70291/"},"LINKEDIN"),fe("a",{href:"https://discordapp.com/users/284386100829487106"},"DISCORD"),fe("a",{href:"https://github.com/TofanVlad"},"GITHUB")],-1),OT=Pt({__name:"my-menu",setup(n){const e=[{title:"nav.home",href:"#home"},{title:"nav.about",href:"#about"},{title:"nav.projects",href:"#projects"},{title:"nav.contacts",href:"#contacts"}];return(t,i)=>(ct(),rr(ca,{name:"slide-fade"},{default:Mi(()=>[gi(wo)?(ct(),At("section",wT,[fe("h1",RT,[Yt(je(t.$t("header.welcome_1"))+" ",1),CT,Yt(" "+je(t.$t("header.welcome_2")),1)]),fe("div",LT,[(ct(),At(pt,null,aa(e,(r,s)=>fe("a",{href:r.href,key:s,class:"uppercase py-4 cursor-pointer flex gap-2",onClick:i[0]||(i[0]=(...o)=>gi(Xo)&&gi(Xo)(...o))},[fe("p",IT,je(t.$t(r.title)),1),fe("p",NT,"0"+je(s+1),1)],8,PT)),64))]),DT,UT])):_c("",!0)]),_:1}))}}),FT="/Me.jpg";function BT(n){const e=n.offsetWidth,t=n.offsetHeight,i=new ma,r=new $t(65,e/t);r.position.z=14,r.position.y=3,i.add(r);const s=new pa({canvas:n,alpha:!0});s.setSize(e,t);const o=new Mp,a=new py(16777215,1.5);i.add(a);const l=m=>{const g=new Float32Array(m*3);for(let x=0;x<m;x++)g[x]=(Math.random()-.5)*500;return g},c=new tn;c.setAttribute("position",new mn(l(3e3),3));const u=new Go({size:.05,map:o.load("/star.png"),transparent:!0}),f=new Vl(c,u);i.add(f);function h(){f.rotation.y-=1e-4,s.render(i,r),requestAnimationFrame(h)}window.addEventListener("resize",()=>{n.style.width="100vw",n.style.height="100vh";const m=n.offsetWidth,g=n.offsetHeight;r.aspect=m/g,r.updateProjectionMatrix(),s.setPixelRatio(window.devicePixelRatio),s.setSize(m,g),s.render(i,r)}),h()}const Tp=n=>(ia("data-v-222630c4"),n=n(),ra(),n),kT=Tp(()=>fe("div",{class:"aspect-[4/5] md:max-h-[455px] max-h-[350px]"},[fe("img",{src:FT,alt:"Tofan Vlad - Profile Picture",class:"w-full h-full object-contain md:max-h-[615px] max-h-[350px]"})],-1)),HT={class:"text-[#0e0e0e] bg-white px-8 py-4 lg:text-[3.6vw] md:text-5xl sm:text-[6.2vw] text-[5.6vw] text-center"},zT={class:"flex flex-col lg:w-[50%] w-[75%] gap-2"},VT={class:"w-full border-b-[1px] border-white text-center lg:text-[1.6vw] text-2xl"},GT={class:"grid grid-cols-3 gap-8"},WT=Tp(()=>fe("a",{href:"mailto:tofanvladit@gmail.com",class:"lg:text-[3.6vw] text-4xl h-max lg:leading-[3.6vw] tracking-widest overflow-hidden relative before:bottom-0 before:-left-full before:absolute before:content-[''] before:bg-white before:h-[2px] before:w-full hover:before:translate-x-full before:transition-transform"},[Yt(" TOFANVLADIT"),fe("br",{class:"block md:hidden"}),Yt("@GMAIL.COM")],-1)),XT=Pt({__name:"my-footer",setup(n){const e=on(null);return ir(()=>{e.value!==null&&BT(e.value)}),(t,i)=>(ct(),At(pt,null,[fe("canvas",{ref_key:"canvas",ref:e,class:"absolute top-0 left-0 w-screen h-screen pointer-events-none"},null,512),Qe(Uo,{class:"flex flex-col items-center justify-around pt-24 pb-12 md:pt-34 md:pb-0"},{default:Mi(()=>[kT,fe("div",HT," + "+je(t.$t("footer.title")),1),fe("div",zT,[fe("p",VT,je(t.$t("footer.connect")),1),fe("div",GT,[Qe(Ao,{text:"GITHUB",href:"https://github.com/TofanVlad"}),Qe(Ao,{text:"LINKEDIN",href:"https://www.linkedin.com/in/vlad-tofan-349b70291/",class:"place-self-center"}),Qe(Ao,{text:"DISCORD",href:"https://discordapp.com/users/284386100829487106",class:"place-self-end"})])]),WT]),_:1})],64))}}),$T=_a(XT,[["__scopeId","data-v-222630c4"]]),Ro=[10.136184463414924,-1.374508746897471,10.384881573913269,9.115259388985471,-1.374508746897471,8.584679279757001,9.066935570975488,-1.0665123466336568,5.893777163160816,10.151040177840205,-.6591365314493796,3.4340491740541346,10.806779203170416,1.8859391007298545,.46855774212986023,10.761433540147586,2.8724172201359197,-1.2811838605587311,9.619592310444506,2.8724172201359197,-3.2833099941904766,6.976302088915165,2.7659257976905427,-4.759195890883017,6.04612778913537,1.072704530208988,-6.663874016409048,7.347223577854479,-1.8228856326635698,-9.068504304618562,7.226367212900791,-1.8228856326635698,-10.499536640855691,5.835456669626391,-1.8228856326635698,-12.039219379199908,3.6532357452141353,-.2046398357057339,-13.87695442281038,-.30169589630131455,1.5965000671484342,-14.879986418947327,-2.8925694230502157,2.297136461442748,-13.892095587598131,-4.537672295357936,4.586351575965921,-12.140831652074551,-6.128791346411759,5.9653814634119815,-8.97765273188759,-6.012030160645281,4.4081161943856,-6.712084358394045,-5.213825215903897,2.820894808418279,-4.453282041208561,-2.342471283510961,2.203206500508626,-3.0788773693500198,-.0076956453915433265,1.8931797788880202,-1.6577070662471063,-.24767503988481437,2.8845808465856684,.07391585921422172,-2.2174044353598896,4.241552450731858,2.215992718290742,-3.4526531678364756,3.061519202334085,4.792240493209656,-3.7356278971556445,1.4054080369354316,7.843202184143463,-3.400373446380412,1.1924069108769393,9.246409088622707,-1.8851803760476225,1.5269331003449989,10.306083896408374,.01071077144031829,2.1101821577522295,10.490880699847727,.42562058195647,2.2759939598834387,11.61312943658029,.09640526218222512,.03231778408405439,16.223455375061565,2.3458797884520433,.38907275257695584,19.91188266079584,5.701840009848877,1.73337964747396,20.61548158699996,7.972093973675182,1.73337964747396,19.303399329816457,9.867236272109565,.09008301805702518,16.89333854161812,11.225959519544134,-1.374508746897471,14.279002555560753,11.288646925965876,-1.374508746897471,11.926359497447137,10.136184463414924,-1.374508746897471,10.384881573913269],bp=[],YT=Ro.length;for(let n=0;n<YT;n+=3)bp.push(new z(Ro[n],Ro[n+1],Ro[n+2]));const ih=new Ep(bp);function qT(n){const e=n.offsetWidth,t=n.offsetHeight,i=new ma;i.fog=new bc(921102,.5);const r=new $t(65,e/t);r.position.z=14,r.position.y=3,i.add(r);const s=new pa({canvas:n,alpha:!0});s.setSize(e,t);const o=.5,a=new Wo(ih,256,o,16,!0),l=new cy(a,.25),c=new vp({color:16777215}),u=new YM(l,c);i.add(u);const f=new Wo(ih,256,o+.01,16,!0),h=new yc({color:921102,side:qt}),m=new bn(f,h);i.add(m);function g(_){const p=_*.05,R=10*1e3,v=p%R/R,S=a.parameters.path.getPointAt(v),P=a.parameters.path.getPointAt((v+.025)%1);r.position.copy(S),r.lookAt(P)}function x(_=0){g(_),s.render(i,r),requestAnimationFrame(x)}window.addEventListener("resize",()=>{n.style.width="100%",n.style.height="100%";const _=n.offsetWidth,p=n.offsetHeight;r.aspect=_/p,r.updateProjectionMatrix(),s.setPixelRatio(window.devicePixelRatio),s.setSize(_,p),s.render(i,r)}),x()}const jT=["Vue JS","Nuxt JS","Tailwind CSS","Three JS","API","i18n","Typescript","git","SEO"],KT=[{title:{en:"Tehnoconduct",ro:"Tehnoconduct"},href:"https://tehnoconduct.md",year:2024,tehnologies:["Nuxt","Tailwind","Typescript","api"],description:{en:"Built out the frontend for tehnoconduct.md from scratch. implemented animations to enrich user experience.",ro:"Am creat frontend-ul pentru tehnoconduct.md de la zero, de asemenea am implementat animații pentru a îmbogăți experiența utilizatorului."},video:"/images/Tehnoconduct.png"},{title:{en:"Sushi",ro:"Sushi"},year:2023,href:"https://github.com/TofanVlad/Sushi",role:"FullStack DEVELOPER",tehnologies:["Vue","Typescript","api","scss"],description:{en:"My very first full-stack project that I did on my own. Implemented responsive design along with various modals.",ro:"Primul meu proiect full-stack pe care l-am făcut pe cont propriu. Am implementat design responsive împreună cu diverse funcționalități."},video:"/images/Sushi.png"},{href:"https://github.com/TofanVlad/Minesweeper",title:{en:"Minesweeper",ro:"Minesweeper"},year:2024,tehnologies:["Vue","Typescript","TailwindCSS"],description:{en:"In this project I recreated the popular game Minesweeper.",ro:"În acest proiect am recreat jocul popular Minesweeper."},video:"/images/MineSweeper.png"},{href:"https://github.com/TofanVlad/innete",title:{en:"Inette",ro:"Inette"},year:2024,tehnologies:["Vue","Typescript","TailwindCSS","AnimeJS"],description:{en:"This project is replica of real web-site inette.co.",ro:"Acest proiect este replica unui web-site real inette.co."},video:"/images/Inette.png"}],JT=Pt({__name:"my-cell",props:{text:{},index:{}},setup(n){return(e,t)=>(ct(),At("div",{class:ys(["border-[1px] border-white bg-black/75 flex items-center justify-center lg:text-[2.2vw] sm:text-xl font-light tracking-wider uppercase",e.index===0&&"lg:col-span-1 col-span-2"])},[fe("p",null,je(e.text),1)],2))}}),ZT=n=>(ia("data-v-c126a216"),n=n(),ra(),n),QT={class:"mt-32 justify-end items-center uppercase flex gap-2 xl:px-0 px-2 tracking-widest"},eb=ZT(()=>fe("span",{class:"text-lg"},"+",-1)),tb={class:"w-full h-[450px] border-[1px] border-white relative"},nb={key:0,class:"w-full h-full absolute top-0 left-0 grid lg:grid-cols-3 grid-cols-2 sm:p-8 p-4 lg:gap-8 gap-4 bg-black/50"},ib=Pt({__name:"my-stack",setup(n){const e=on(null),t=on(!0);return ir(()=>{e.value!==null&&qT(e.value)}),(i,r)=>(ct(),At(pt,null,[fe("p",QT,[eb,Yt(" "+je(i.$t("stack.title")),1)]),fe("section",tb,[fe("canvas",{ref_key:"canvas",ref:e,class:"w-full h-full"},null,512),Qe(ca,null,{default:Mi(()=>[t.value?(ct(),At("div",nb,[(ct(!0),At(pt,null,aa(gi(jT),(s,o)=>(ct(),rr(JT,{key:o,text:s,index:o},null,8,["text","index"]))),128))])):_c("",!0)]),_:1})]),fe("button",{onClick:r[0]||(r[0]=s=>t.value=!t.value),class:"lg:text-[1.6vw] text-lg leading-none tracking-widest bg-transparent hover:bg-white border-[1px] border-white transition-colors px-4 py-2 hover:text-[#0e0e0e] text-white mb-32 mx-auto mt-4 w-max block"},je(t.value?i.$t("stack.button_hide"):i.$t("stack.button_show"))+" "+je(i.$t("stack.button")),1)],64))}}),rb=_a(ib,[["__scopeId","data-v-c126a216"]]),sb=fe("hr",{class:"mx-4 my-8"},null,-1),ob={class:"relative",id:"about"},ab=fe("hr",{class:"mb-16"},null,-1),lb={class:"justify-end items-center uppercase flex gap-2 xl:px-0 px-2 tracking-widest"},cb=fe("span",{class:"text-lg"},"+",-1),ub=fe("hr",{class:"mb-16"},null,-1),fb={class:"relative",id:"contacts"},hb=Pt({__name:"App",setup(n){return(e,t)=>(ct(),At(pt,null,[Qe(Uo,{tag:"header",id:"home"},{default:Mi(()=>[Qe(AT),Qe(Ay),Qe(OT,{"show-menu":!0})]),_:1}),sb,fe("main",ob,[Qe(Hy)]),ab,Qe(Uo,{id:"projects",class:"md:pt-44 pt-24"},{default:Mi(()=>[fe("p",lb,[cb,Yt(" "+je(e.$t("card.selected")),1)]),(ct(!0),At(pt,null,aa(gi(KT),(i,r)=>(ct(),rr(dT,{key:r,project:{...i,number:r+1}},null,8,["project"]))),128)),Qe(rb)]),_:1}),ub,fe("footer",fb,[Qe($T)])],64))}});/*!
  * shared v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const $o=typeof window<"u",Li=(n,e=!1)=>e?Symbol.for(n):Symbol(n),db=(n,e,t)=>pb({l:n,k:e,s:t}),pb=n=>JSON.stringify(n).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),St=n=>typeof n=="number"&&isFinite(n),mb=n=>wp(n)==="[object Date]",Ai=n=>wp(n)==="[object RegExp]",ga=n=>Oe(n)&&Object.keys(n).length===0,Lt=Object.assign;let rh;const $n=()=>rh||(rh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sh(n){return n.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const _b=Object.prototype.hasOwnProperty;function Yo(n,e){return _b.call(n,e)}const ut=Array.isArray,ot=n=>typeof n=="function",ve=n=>typeof n=="string",$e=n=>typeof n=="boolean",it=n=>n!==null&&typeof n=="object",gb=n=>it(n)&&ot(n.then)&&ot(n.catch),Ap=Object.prototype.toString,wp=n=>Ap.call(n),Oe=n=>{if(!it(n))return!1;const e=Object.getPrototypeOf(n);return e===null||e.constructor===Object},vb=n=>n==null?"":ut(n)||Oe(n)&&n.toString===Ap?JSON.stringify(n,null,2):String(n);function xb(n,e=""){return n.reduce((t,i,r)=>r===0?t+i:t+e+i,"")}function va(n){let e=n;return()=>++e}function Eb(n,e){typeof console<"u"&&(console.warn("[intlify] "+n),e&&console.warn(e.stack))}const Eo=n=>!it(n)||ut(n);function Co(n,e){if(Eo(n)||Eo(e))throw new Error("Invalid value");const t=[{src:n,des:e}];for(;t.length;){const{src:i,des:r}=t.pop();Object.keys(i).forEach(s=>{Eo(i[s])||Eo(r[s])?r[s]=i[s]:t.push({src:i[s],des:r[s]})})}}/*!
  * message-compiler v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */function Sb(n,e,t){return{line:n,column:e,offset:t}}function qo(n,e,t){return{start:n,end:e}}const Mb=/\{([0-9a-zA-Z]+)\}/g;function Rp(n,...e){return e.length===1&&yb(e[0])&&(e=e[0]),(!e||!e.hasOwnProperty)&&(e={}),n.replace(Mb,(t,i)=>e.hasOwnProperty(i)?e[i]:"")}const Cp=Object.assign,oh=n=>typeof n=="string",yb=n=>n!==null&&typeof n=="object";function Lp(n,e=""){return n.reduce((t,i,r)=>r===0?t+i:t+e+i,"")}const Cc={USE_MODULO_SYNTAX:1,__EXTEND_POINT__:2},Tb={[Cc.USE_MODULO_SYNTAX]:"Use modulo before '{{0}}'."};function bb(n,e,...t){const i=Rp(Tb[n],...t||[]),r={message:String(i),code:n};return e&&(r.location=e),r}const Le={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},Ab={[Le.EXPECTED_TOKEN]:"Expected token: '{0}'",[Le.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[Le.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[Le.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[Le.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[Le.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[Le.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[Le.EMPTY_PLACEHOLDER]:"Empty placeholder",[Le.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[Le.INVALID_LINKED_FORMAT]:"Invalid linked format",[Le.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[Le.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[Le.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[Le.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[Le.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[Le.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function Xr(n,e,t={}){const{domain:i,messages:r,args:s}=t,o=Rp((r||Ab)[n]||"",...s||[]),a=new SyntaxError(String(o));return a.code=n,e&&(a.location=e),a.domain=i,a}function wb(n){throw n}const Vn=" ",Rb="\r",Xt=`
`,Cb="\u2028",Lb="\u2029";function Pb(n){const e=n;let t=0,i=1,r=1,s=0;const o=L=>e[L]===Rb&&e[L+1]===Xt,a=L=>e[L]===Xt,l=L=>e[L]===Lb,c=L=>e[L]===Cb,u=L=>o(L)||a(L)||l(L)||c(L),f=()=>t,h=()=>i,m=()=>r,g=()=>s,x=L=>o(L)||l(L)||c(L)?Xt:e[L],_=()=>x(t),p=()=>x(t+s);function R(){return s=0,u(t)&&(i++,r=0),o(t)&&t++,t++,r++,e[t]}function v(){return o(t+s)&&s++,s++,e[t+s]}function S(){t=0,i=1,r=1,s=0}function P(L=0){s=L}function T(){const L=t+s;for(;L!==t;)R();s=0}return{index:f,line:h,column:m,peekOffset:g,charAt:x,currentChar:_,currentPeek:p,next:R,peek:v,reset:S,resetPeek:P,skipToPeek:T}}const ci=void 0,Ib=".",ah="'",Nb="tokenizer";function Db(n,e={}){const t=e.location!==!1,i=Pb(n),r=()=>i.index(),s=()=>Sb(i.line(),i.column(),i.index()),o=s(),a=r(),l={currentType:14,offset:a,startLoc:o,endLoc:o,lastType:14,lastOffset:a,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function f(d,E,w,...U){const G=c();if(E.column+=w,E.offset+=w,u){const Y=t?qo(G.startLoc,E):null,N=Xr(d,Y,{domain:Nb,args:U});u(N)}}function h(d,E,w){d.endLoc=s(),d.currentType=E;const U={type:E};return t&&(U.loc=qo(d.startLoc,d.endLoc)),w!=null&&(U.value=w),U}const m=d=>h(d,14);function g(d,E){return d.currentChar()===E?(d.next(),E):(f(Le.EXPECTED_TOKEN,s(),0,E),"")}function x(d){let E="";for(;d.currentPeek()===Vn||d.currentPeek()===Xt;)E+=d.currentPeek(),d.peek();return E}function _(d){const E=x(d);return d.skipToPeek(),E}function p(d){if(d===ci)return!1;const E=d.charCodeAt(0);return E>=97&&E<=122||E>=65&&E<=90||E===95}function R(d){if(d===ci)return!1;const E=d.charCodeAt(0);return E>=48&&E<=57}function v(d,E){const{currentType:w}=E;if(w!==2)return!1;x(d);const U=p(d.currentPeek());return d.resetPeek(),U}function S(d,E){const{currentType:w}=E;if(w!==2)return!1;x(d);const U=d.currentPeek()==="-"?d.peek():d.currentPeek(),G=R(U);return d.resetPeek(),G}function P(d,E){const{currentType:w}=E;if(w!==2)return!1;x(d);const U=d.currentPeek()===ah;return d.resetPeek(),U}function T(d,E){const{currentType:w}=E;if(w!==8)return!1;x(d);const U=d.currentPeek()===".";return d.resetPeek(),U}function L(d,E){const{currentType:w}=E;if(w!==9)return!1;x(d);const U=p(d.currentPeek());return d.resetPeek(),U}function D(d,E){const{currentType:w}=E;if(!(w===8||w===12))return!1;x(d);const U=d.currentPeek()===":";return d.resetPeek(),U}function M(d,E){const{currentType:w}=E;if(w!==10)return!1;const U=()=>{const Y=d.currentPeek();return Y==="{"?p(d.peek()):Y==="@"||Y==="%"||Y==="|"||Y===":"||Y==="."||Y===Vn||!Y?!1:Y===Xt?(d.peek(),U()):B(d,!1)},G=U();return d.resetPeek(),G}function y(d){x(d);const E=d.currentPeek()==="|";return d.resetPeek(),E}function V(d){const E=x(d),w=d.currentPeek()==="%"&&d.peek()==="{";return d.resetPeek(),{isModulo:w,hasSpace:E.length>0}}function B(d,E=!0){const w=(G=!1,Y="",N=!1)=>{const F=d.currentPeek();return F==="{"?Y==="%"?!1:G:F==="@"||!F?Y==="%"?!0:G:F==="%"?(d.peek(),w(G,"%",!0)):F==="|"?Y==="%"||N?!0:!(Y===Vn||Y===Xt):F===Vn?(d.peek(),w(!0,Vn,N)):F===Xt?(d.peek(),w(!0,Xt,N)):!0},U=w();return E&&d.resetPeek(),U}function O(d,E){const w=d.currentChar();return w===ci?ci:E(w)?(d.next(),w):null}function ee(d){const E=d.charCodeAt(0);return E>=97&&E<=122||E>=65&&E<=90||E>=48&&E<=57||E===95||E===36}function ne(d){return O(d,ee)}function se(d){const E=d.charCodeAt(0);return E>=97&&E<=122||E>=65&&E<=90||E>=48&&E<=57||E===95||E===36||E===45}function ie(d){return O(d,se)}function $(d){const E=d.charCodeAt(0);return E>=48&&E<=57}function ce(d){return O(d,$)}function ue(d){const E=d.charCodeAt(0);return E>=48&&E<=57||E>=65&&E<=70||E>=97&&E<=102}function ge(d){return O(d,ue)}function we(d){let E="",w="";for(;E=ce(d);)w+=E;return w}function Ye(d){_(d);const E=d.currentChar();return E!=="%"&&f(Le.EXPECTED_TOKEN,s(),0,E),d.next(),"%"}function Q(d){let E="";for(;;){const w=d.currentChar();if(w==="{"||w==="}"||w==="@"||w==="|"||!w)break;if(w==="%")if(B(d))E+=w,d.next();else break;else if(w===Vn||w===Xt)if(B(d))E+=w,d.next();else{if(y(d))break;E+=w,d.next()}else E+=w,d.next()}return E}function he(d){_(d);let E="",w="";for(;E=ie(d);)w+=E;return d.currentChar()===ci&&f(Le.UNTERMINATED_CLOSING_BRACE,s(),0),w}function me(d){_(d);let E="";return d.currentChar()==="-"?(d.next(),E+=`-${we(d)}`):E+=we(d),d.currentChar()===ci&&f(Le.UNTERMINATED_CLOSING_BRACE,s(),0),E}function de(d){return d!==ah&&d!==Xt}function Ue(d){_(d),g(d,"'");let E="",w="";for(;E=O(d,de);)E==="\\"?w+=Fe(d):w+=E;const U=d.currentChar();return U===Xt||U===ci?(f(Le.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,s(),0),U===Xt&&(d.next(),g(d,"'")),w):(g(d,"'"),w)}function Fe(d){const E=d.currentChar();switch(E){case"\\":case"'":return d.next(),`\\${E}`;case"u":return W(d,E,4);case"U":return W(d,E,6);default:return f(Le.UNKNOWN_ESCAPE_SEQUENCE,s(),0,E),""}}function W(d,E,w){g(d,E);let U="";for(let G=0;G<w;G++){const Y=ge(d);if(!Y){f(Le.INVALID_UNICODE_ESCAPE_SEQUENCE,s(),0,`\\${E}${U}${d.currentChar()}`);break}U+=Y}return`\\${E}${U}`}function Ke(d){return d!=="{"&&d!=="}"&&d!==Vn&&d!==Xt}function be(d){_(d);let E="",w="";for(;E=O(d,Ke);)w+=E;return w}function I(d){let E="",w="";for(;E=ne(d);)w+=E;return w}function b(d){const E=w=>{const U=d.currentChar();return U==="{"||U==="%"||U==="@"||U==="|"||U==="("||U===")"||!U||U===Vn?w:(w+=U,d.next(),E(w))};return E("")}function k(d){_(d);const E=g(d,"|");return _(d),E}function q(d,E){let w=null;switch(d.currentChar()){case"{":return E.braceNest>=1&&f(Le.NOT_ALLOW_NEST_PLACEHOLDER,s(),0),d.next(),w=h(E,2,"{"),_(d),E.braceNest++,w;case"}":return E.braceNest>0&&E.currentType===2&&f(Le.EMPTY_PLACEHOLDER,s(),0),d.next(),w=h(E,3,"}"),E.braceNest--,E.braceNest>0&&_(d),E.inLinked&&E.braceNest===0&&(E.inLinked=!1),w;case"@":return E.braceNest>0&&f(Le.UNTERMINATED_CLOSING_BRACE,s(),0),w=J(d,E)||m(E),E.braceNest=0,w;default:{let G=!0,Y=!0,N=!0;if(y(d))return E.braceNest>0&&f(Le.UNTERMINATED_CLOSING_BRACE,s(),0),w=h(E,1,k(d)),E.braceNest=0,E.inLinked=!1,w;if(E.braceNest>0&&(E.currentType===5||E.currentType===6||E.currentType===7))return f(Le.UNTERMINATED_CLOSING_BRACE,s(),0),E.braceNest=0,oe(d,E);if(G=v(d,E))return w=h(E,5,he(d)),_(d),w;if(Y=S(d,E))return w=h(E,6,me(d)),_(d),w;if(N=P(d,E))return w=h(E,7,Ue(d)),_(d),w;if(!G&&!Y&&!N)return w=h(E,13,be(d)),f(Le.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,w.value),_(d),w;break}}return w}function J(d,E){const{currentType:w}=E;let U=null;const G=d.currentChar();switch((w===8||w===9||w===12||w===10)&&(G===Xt||G===Vn)&&f(Le.INVALID_LINKED_FORMAT,s(),0),G){case"@":return d.next(),U=h(E,8,"@"),E.inLinked=!0,U;case".":return _(d),d.next(),h(E,9,".");case":":return _(d),d.next(),h(E,10,":");default:return y(d)?(U=h(E,1,k(d)),E.braceNest=0,E.inLinked=!1,U):T(d,E)||D(d,E)?(_(d),J(d,E)):L(d,E)?(_(d),h(E,12,I(d))):M(d,E)?(_(d),G==="{"?q(d,E)||U:h(E,11,b(d))):(w===8&&f(Le.INVALID_LINKED_FORMAT,s(),0),E.braceNest=0,E.inLinked=!1,oe(d,E))}}function oe(d,E){let w={type:14};if(E.braceNest>0)return q(d,E)||m(E);if(E.inLinked)return J(d,E)||m(E);switch(d.currentChar()){case"{":return q(d,E)||m(E);case"}":return f(Le.UNBALANCED_CLOSING_BRACE,s(),0),d.next(),h(E,3,"}");case"@":return J(d,E)||m(E);default:{if(y(d))return w=h(E,1,k(d)),E.braceNest=0,E.inLinked=!1,w;const{isModulo:G,hasSpace:Y}=V(d);if(G)return Y?h(E,0,Q(d)):h(E,4,Ye(d));if(B(d))return h(E,0,Q(d));break}}return w}function A(){const{currentType:d,offset:E,startLoc:w,endLoc:U}=l;return l.lastType=d,l.lastOffset=E,l.lastStartLoc=w,l.lastEndLoc=U,l.offset=r(),l.startLoc=s(),i.currentChar()===ci?h(l,14):oe(i,l)}return{nextToken:A,currentOffset:r,currentPosition:s,context:c}}const Ub="parser",Ob=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function Fb(n,e,t){switch(n){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||t,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function Bb(n={}){const e=n.location!==!1,{onError:t,onWarn:i}=n;function r(v,S,P,T,...L){const D=v.currentPosition();if(D.offset+=T,D.column+=T,t){const M=e?qo(P,D):null,y=Xr(S,M,{domain:Ub,args:L});t(y)}}function s(v,S,P,T,...L){const D=v.currentPosition();if(D.offset+=T,D.column+=T,i){const M=e?qo(P,D):null;i(bb(S,M,L))}}function o(v,S,P){const T={type:v};return e&&(T.start=S,T.end=S,T.loc={start:P,end:P}),T}function a(v,S,P,T){e&&(v.end=S,v.loc&&(v.loc.end=P))}function l(v,S){const P=v.context(),T=o(3,P.offset,P.startLoc);return T.value=S,a(T,v.currentOffset(),v.currentPosition()),T}function c(v,S){const P=v.context(),{lastOffset:T,lastStartLoc:L}=P,D=o(5,T,L);return D.index=parseInt(S,10),v.nextToken(),a(D,v.currentOffset(),v.currentPosition()),D}function u(v,S,P){const T=v.context(),{lastOffset:L,lastStartLoc:D}=T,M=o(4,L,D);return M.key=S,P===!0&&(M.modulo=!0),v.nextToken(),a(M,v.currentOffset(),v.currentPosition()),M}function f(v,S){const P=v.context(),{lastOffset:T,lastStartLoc:L}=P,D=o(9,T,L);return D.value=S.replace(Ob,Fb),v.nextToken(),a(D,v.currentOffset(),v.currentPosition()),D}function h(v){const S=v.nextToken(),P=v.context(),{lastOffset:T,lastStartLoc:L}=P,D=o(8,T,L);return S.type!==12?(r(v,Le.UNEXPECTED_EMPTY_LINKED_MODIFIER,P.lastStartLoc,0),D.value="",a(D,T,L),{nextConsumeToken:S,node:D}):(S.value==null&&r(v,Le.UNEXPECTED_LEXICAL_ANALYSIS,P.lastStartLoc,0,xn(S)),D.value=S.value||"",a(D,v.currentOffset(),v.currentPosition()),{node:D})}function m(v,S){const P=v.context(),T=o(7,P.offset,P.startLoc);return T.value=S,a(T,v.currentOffset(),v.currentPosition()),T}function g(v){const S=v.context(),P=o(6,S.offset,S.startLoc);let T=v.nextToken();if(T.type===9){const L=h(v);P.modifier=L.node,T=L.nextConsumeToken||v.nextToken()}switch(T.type!==10&&r(v,Le.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,xn(T)),T=v.nextToken(),T.type===2&&(T=v.nextToken()),T.type){case 11:T.value==null&&r(v,Le.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,xn(T)),P.key=m(v,T.value||"");break;case 5:T.value==null&&r(v,Le.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,xn(T)),P.key=u(v,T.value||"");break;case 6:T.value==null&&r(v,Le.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,xn(T)),P.key=c(v,T.value||"");break;case 7:T.value==null&&r(v,Le.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,xn(T)),P.key=f(v,T.value||"");break;default:{r(v,Le.UNEXPECTED_EMPTY_LINKED_KEY,S.lastStartLoc,0);const L=v.context(),D=o(7,L.offset,L.startLoc);return D.value="",a(D,L.offset,L.startLoc),P.key=D,a(P,L.offset,L.startLoc),{nextConsumeToken:T,node:P}}}return a(P,v.currentOffset(),v.currentPosition()),{node:P}}function x(v){const S=v.context(),P=S.currentType===1?v.currentOffset():S.offset,T=S.currentType===1?S.endLoc:S.startLoc,L=o(2,P,T);L.items=[];let D=null,M=null;do{const B=D||v.nextToken();switch(D=null,B.type){case 0:B.value==null&&r(v,Le.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,xn(B)),L.items.push(l(v,B.value||""));break;case 6:B.value==null&&r(v,Le.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,xn(B)),L.items.push(c(v,B.value||""));break;case 4:M=!0;break;case 5:B.value==null&&r(v,Le.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,xn(B)),L.items.push(u(v,B.value||"",!!M)),M&&(s(v,Cc.USE_MODULO_SYNTAX,S.lastStartLoc,0,xn(B)),M=null);break;case 7:B.value==null&&r(v,Le.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,xn(B)),L.items.push(f(v,B.value||""));break;case 8:{const O=g(v);L.items.push(O.node),D=O.nextConsumeToken||null;break}}}while(S.currentType!==14&&S.currentType!==1);const y=S.currentType===1?S.lastOffset:v.currentOffset(),V=S.currentType===1?S.lastEndLoc:v.currentPosition();return a(L,y,V),L}function _(v,S,P,T){const L=v.context();let D=T.items.length===0;const M=o(1,S,P);M.cases=[],M.cases.push(T);do{const y=x(v);D||(D=y.items.length===0),M.cases.push(y)}while(L.currentType!==14);return D&&r(v,Le.MUST_HAVE_MESSAGES_IN_PLURAL,P,0),a(M,v.currentOffset(),v.currentPosition()),M}function p(v){const S=v.context(),{offset:P,startLoc:T}=S,L=x(v);return S.currentType===14?L:_(v,P,T,L)}function R(v){const S=Db(v,Cp({},n)),P=S.context(),T=o(0,P.offset,P.startLoc);return e&&T.loc&&(T.loc.source=v),T.body=p(S),n.onCacheKey&&(T.cacheKey=n.onCacheKey(v)),P.currentType!==14&&r(S,Le.UNEXPECTED_LEXICAL_ANALYSIS,P.lastStartLoc,0,v[P.offset]||""),a(T,S.currentOffset(),S.currentPosition()),T}return{parse:R}}function xn(n){if(n.type===14)return"EOF";const e=(n.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function kb(n,e={}){const t={ast:n,helpers:new Set};return{context:()=>t,helper:s=>(t.helpers.add(s),s)}}function lh(n,e){for(let t=0;t<n.length;t++)Lc(n[t],e)}function Lc(n,e){switch(n.type){case 1:lh(n.cases,e),e.helper("plural");break;case 2:lh(n.items,e);break;case 6:{Lc(n.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function Hb(n,e={}){const t=kb(n);t.helper("normalize"),n.body&&Lc(n.body,t);const i=t.context();n.helpers=Array.from(i.helpers)}function zb(n){const e=n.body;return e.type===2?ch(e):e.cases.forEach(t=>ch(t)),n}function ch(n){if(n.items.length===1){const e=n.items[0];(e.type===3||e.type===9)&&(n.static=e.value,delete e.value)}else{const e=[];for(let t=0;t<n.items.length;t++){const i=n.items[t];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===n.items.length){n.static=Lp(e);for(let t=0;t<n.items.length;t++){const i=n.items[t];(i.type===3||i.type===9)&&delete i.value}}}}const Vb="minifier";function Mr(n){switch(n.t=n.type,n.type){case 0:{const e=n;Mr(e.body),e.b=e.body,delete e.body;break}case 1:{const e=n,t=e.cases;for(let i=0;i<t.length;i++)Mr(t[i]);e.c=t,delete e.cases;break}case 2:{const e=n,t=e.items;for(let i=0;i<t.length;i++)Mr(t[i]);e.i=t,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=n;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=n;Mr(e.key),e.k=e.key,delete e.key,e.modifier&&(Mr(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=n;e.i=e.index,delete e.index;break}case 4:{const e=n;e.k=e.key,delete e.key;break}default:throw Xr(Le.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:Vb,args:[n.type]})}delete n.type}const Gb="parser";function Wb(n,e){const{sourceMap:t,filename:i,breakLineCode:r,needIndent:s}=e,o=e.location!==!1,a={filename:i,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:r,needIndent:s,indentLevel:0};o&&n.loc&&(a.source=n.loc.source);const l=()=>a;function c(_,p){a.code+=_}function u(_,p=!0){const R=p?r:"";c(s?R+"  ".repeat(_):R)}function f(_=!0){const p=++a.indentLevel;_&&u(p)}function h(_=!0){const p=--a.indentLevel;_&&u(p)}function m(){u(a.indentLevel)}return{context:l,push:c,indent:f,deindent:h,newline:m,helper:_=>`_${_}`,needIndent:()=>a.needIndent}}function Xb(n,e){const{helper:t}=n;n.push(`${t("linked")}(`),Br(n,e.key),e.modifier?(n.push(", "),Br(n,e.modifier),n.push(", _type")):n.push(", undefined, _type"),n.push(")")}function $b(n,e){const{helper:t,needIndent:i}=n;n.push(`${t("normalize")}([`),n.indent(i());const r=e.items.length;for(let s=0;s<r&&(Br(n,e.items[s]),s!==r-1);s++)n.push(", ");n.deindent(i()),n.push("])")}function Yb(n,e){const{helper:t,needIndent:i}=n;if(e.cases.length>1){n.push(`${t("plural")}([`),n.indent(i());const r=e.cases.length;for(let s=0;s<r&&(Br(n,e.cases[s]),s!==r-1);s++)n.push(", ");n.deindent(i()),n.push("])")}}function qb(n,e){e.body?Br(n,e.body):n.push("null")}function Br(n,e){const{helper:t}=n;switch(e.type){case 0:qb(n,e);break;case 1:Yb(n,e);break;case 2:$b(n,e);break;case 6:Xb(n,e);break;case 8:n.push(JSON.stringify(e.value),e);break;case 7:n.push(JSON.stringify(e.value),e);break;case 5:n.push(`${t("interpolate")}(${t("list")}(${e.index}))`,e);break;case 4:n.push(`${t("interpolate")}(${t("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:n.push(JSON.stringify(e.value),e);break;case 3:n.push(JSON.stringify(e.value),e);break;default:throw Xr(Le.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:Gb,args:[e.type]})}}const jb=(n,e={})=>{const t=oh(e.mode)?e.mode:"normal",i=oh(e.filename)?e.filename:"message.intl",r=!!e.sourceMap,s=e.breakLineCode!=null?e.breakLineCode:t==="arrow"?";":`
`,o=e.needIndent?e.needIndent:t!=="arrow",a=n.helpers||[],l=Wb(n,{mode:t,filename:i,sourceMap:r,breakLineCode:s,needIndent:o});l.push(t==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(o),a.length>0&&(l.push(`const { ${Lp(a.map(f=>`${f}: _${f}`),", ")} } = ctx`),l.newline()),l.push("return "),Br(l,n),l.deindent(o),l.push("}"),delete n.helpers;const{code:c,map:u}=l.context();return{ast:n,code:c,map:u?u.toJSON():void 0}};function Kb(n,e={}){const t=Cp({},e),i=!!t.jit,r=!!t.minify,s=t.optimize==null?!0:t.optimize,a=Bb(t).parse(n);return i?(s&&zb(a),r&&Mr(a),{ast:a,code:""}):(Hb(a,t),jb(a,t))}/*!
  * core-base v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */function Jb(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&($n().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&($n().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&($n().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}const Pi=[];Pi[0]={w:[0],i:[3,0],"[":[4],o:[7]};Pi[1]={w:[1],".":[2],"[":[4],o:[7]};Pi[2]={w:[2],i:[3,0],0:[3,0]};Pi[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};Pi[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};Pi[5]={"'":[4,0],o:8,l:[5,0]};Pi[6]={'"':[4,0],o:8,l:[6,0]};const Zb=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Qb(n){return Zb.test(n)}function eA(n){const e=n.charCodeAt(0),t=n.charCodeAt(n.length-1);return e===t&&(e===34||e===39)?n.slice(1,-1):n}function tA(n){if(n==null)return"o";switch(n.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return n;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function nA(n){const e=n.trim();return n.charAt(0)==="0"&&isNaN(parseInt(n))?!1:Qb(e)?eA(e):"*"+e}function iA(n){const e=[];let t=-1,i=0,r=0,s,o,a,l,c,u,f;const h=[];h[0]=()=>{o===void 0?o=a:o+=a},h[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},h[2]=()=>{h[0](),r++},h[3]=()=>{if(r>0)r--,i=4,h[0]();else{if(r=0,o===void 0||(o=nA(o),o===!1))return!1;h[1]()}};function m(){const g=n[t+1];if(i===5&&g==="'"||i===6&&g==='"')return t++,a="\\"+g,h[0](),!0}for(;i!==null;)if(t++,s=n[t],!(s==="\\"&&m())){if(l=tA(s),f=Pi[i],c=f[l]||f.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=h[c[1]],u&&(a=s,u()===!1))))return;if(i===7)return e}}const uh=new Map;function rA(n,e){return it(n)?n[e]:null}function sA(n,e){if(!it(n))return null;let t=uh.get(e);if(t||(t=iA(e),t&&uh.set(e,t)),!t)return null;const i=t.length;let r=n,s=0;for(;s<i;){const o=r[t[s]];if(o===void 0||ot(r))return null;r=o,s++}return r}const oA=n=>n,aA=n=>"",lA="text",cA=n=>n.length===0?"":xb(n),uA=vb;function fh(n,e){return n=Math.abs(n),e===2?n?n>1?1:0:1:n?Math.min(n,2):0}function fA(n){const e=St(n.pluralIndex)?n.pluralIndex:-1;return n.named&&(St(n.named.count)||St(n.named.n))?St(n.named.count)?n.named.count:St(n.named.n)?n.named.n:e:e}function hA(n,e){e.count||(e.count=n),e.n||(e.n=n)}function dA(n={}){const e=n.locale,t=fA(n),i=it(n.pluralRules)&&ve(e)&&ot(n.pluralRules[e])?n.pluralRules[e]:fh,r=it(n.pluralRules)&&ve(e)&&ot(n.pluralRules[e])?fh:void 0,s=p=>p[i(t,p.length,r)],o=n.list||[],a=p=>o[p],l=n.named||{};St(n.pluralIndex)&&hA(t,l);const c=p=>l[p];function u(p){const R=ot(n.messages)?n.messages(p):it(n.messages)?n.messages[p]:!1;return R||(n.parent?n.parent.message(p):aA)}const f=p=>n.modifiers?n.modifiers[p]:oA,h=Oe(n.processor)&&ot(n.processor.normalize)?n.processor.normalize:cA,m=Oe(n.processor)&&ot(n.processor.interpolate)?n.processor.interpolate:uA,g=Oe(n.processor)&&ve(n.processor.type)?n.processor.type:lA,_={list:a,named:c,plural:s,linked:(p,...R)=>{const[v,S]=R;let P="text",T="";R.length===1?it(v)?(T=v.modifier||T,P=v.type||P):ve(v)&&(T=v||T):R.length===2&&(ve(v)&&(T=v||T),ve(S)&&(P=S||P));const L=u(p)(_),D=P==="vnode"&&ut(L)&&T?L[0]:L;return T?f(T)(D,P):D},message:u,type:g,interpolate:m,normalize:h,values:Lt({},o,l)};return _}let Ss=null;function pA(n){Ss=n}function mA(n,e,t){Ss&&Ss.emit("i18n:init",{timestamp:Date.now(),i18n:n,version:e,meta:t})}const _A=gA("function:translate");function gA(n){return e=>Ss&&Ss.emit(n,e)}const Pp=Cc.__EXTEND_POINT__,Gi=va(Pp),vA={NOT_FOUND_KEY:Pp,FALLBACK_TO_TRANSLATE:Gi(),CANNOT_FORMAT_NUMBER:Gi(),FALLBACK_TO_NUMBER_FORMAT:Gi(),CANNOT_FORMAT_DATE:Gi(),FALLBACK_TO_DATE_FORMAT:Gi(),EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:Gi(),__EXTEND_POINT__:Gi()},Ip=Le.__EXTEND_POINT__,Wi=va(Ip),An={INVALID_ARGUMENT:Ip,INVALID_DATE_ARGUMENT:Wi(),INVALID_ISO_DATE_ARGUMENT:Wi(),NOT_SUPPORT_NON_STRING_MESSAGE:Wi(),NOT_SUPPORT_LOCALE_PROMISE_VALUE:Wi(),NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:Wi(),NOT_SUPPORT_LOCALE_TYPE:Wi(),__EXTEND_POINT__:Wi()};function Dn(n){return Xr(n,null,void 0)}function Pc(n,e){return e.locale!=null?hh(e.locale):hh(n.locale)}let vl;function hh(n){if(ve(n))return n;if(ot(n)){if(n.resolvedOnce&&vl!=null)return vl;if(n.constructor.name==="Function"){const e=n();if(gb(e))throw Dn(An.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return vl=e}else throw Dn(An.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw Dn(An.NOT_SUPPORT_LOCALE_TYPE)}function xA(n,e,t){return[...new Set([t,...ut(e)?e:it(e)?Object.keys(e):ve(e)?[e]:[t]])]}function Np(n,e,t){const i=ve(t)?t:kr,r=n;r.__localeChainCache||(r.__localeChainCache=new Map);let s=r.__localeChainCache.get(i);if(!s){s=[];let o=[t];for(;ut(o);)o=dh(s,o,e);const a=ut(e)||!Oe(e)?e:e.default?e.default:null;o=ve(a)?[a]:a,ut(o)&&dh(s,o,!1),r.__localeChainCache.set(i,s)}return s}function dh(n,e,t){let i=!0;for(let r=0;r<e.length&&$e(i);r++){const s=e[r];ve(s)&&(i=EA(n,e[r],t))}return i}function EA(n,e,t){let i;const r=e.split("-");do{const s=r.join("-");i=SA(n,s,t),r.splice(-1,1)}while(r.length&&i===!0);return i}function SA(n,e,t){let i=!1;if(!n.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");n.push(r),(ut(t)||Oe(t))&&t[r]&&(i=t[r])}return i}const MA="9.13.1",xa=-1,kr="en-US",ph="",mh=n=>`${n.charAt(0).toLocaleUpperCase()}${n.substr(1)}`;function yA(){return{upper:(n,e)=>e==="text"&&ve(n)?n.toUpperCase():e==="vnode"&&it(n)&&"__v_isVNode"in n?n.children.toUpperCase():n,lower:(n,e)=>e==="text"&&ve(n)?n.toLowerCase():e==="vnode"&&it(n)&&"__v_isVNode"in n?n.children.toLowerCase():n,capitalize:(n,e)=>e==="text"&&ve(n)?mh(n):e==="vnode"&&it(n)&&"__v_isVNode"in n?mh(n.children):n}}let Dp;function _h(n){Dp=n}let Up;function TA(n){Up=n}let Op;function bA(n){Op=n}let Fp=null;const AA=n=>{Fp=n},wA=()=>Fp;let Bp=null;const gh=n=>{Bp=n},RA=()=>Bp;let vh=0;function CA(n={}){const e=ot(n.onWarn)?n.onWarn:Eb,t=ve(n.version)?n.version:MA,i=ve(n.locale)||ot(n.locale)?n.locale:kr,r=ot(i)?kr:i,s=ut(n.fallbackLocale)||Oe(n.fallbackLocale)||ve(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:r,o=Oe(n.messages)?n.messages:{[r]:{}},a=Oe(n.datetimeFormats)?n.datetimeFormats:{[r]:{}},l=Oe(n.numberFormats)?n.numberFormats:{[r]:{}},c=Lt({},n.modifiers||{},yA()),u=n.pluralRules||{},f=ot(n.missing)?n.missing:null,h=$e(n.missingWarn)||Ai(n.missingWarn)?n.missingWarn:!0,m=$e(n.fallbackWarn)||Ai(n.fallbackWarn)?n.fallbackWarn:!0,g=!!n.fallbackFormat,x=!!n.unresolving,_=ot(n.postTranslation)?n.postTranslation:null,p=Oe(n.processor)?n.processor:null,R=$e(n.warnHtmlMessage)?n.warnHtmlMessage:!0,v=!!n.escapeParameter,S=ot(n.messageCompiler)?n.messageCompiler:Dp,P=ot(n.messageResolver)?n.messageResolver:Up||rA,T=ot(n.localeFallbacker)?n.localeFallbacker:Op||xA,L=it(n.fallbackContext)?n.fallbackContext:void 0,D=n,M=it(D.__datetimeFormatters)?D.__datetimeFormatters:new Map,y=it(D.__numberFormatters)?D.__numberFormatters:new Map,V=it(D.__meta)?D.__meta:{};vh++;const B={version:t,cid:vh,locale:i,fallbackLocale:s,messages:o,modifiers:c,pluralRules:u,missing:f,missingWarn:h,fallbackWarn:m,fallbackFormat:g,unresolving:x,postTranslation:_,processor:p,warnHtmlMessage:R,escapeParameter:v,messageCompiler:S,messageResolver:P,localeFallbacker:T,fallbackContext:L,onWarn:e,__meta:V};return B.datetimeFormats=a,B.numberFormats=l,B.__datetimeFormatters=M,B.__numberFormatters=y,__INTLIFY_PROD_DEVTOOLS__&&mA(B,t,V),B}function Ic(n,e,t,i,r){const{missing:s,onWarn:o}=n;if(s!==null){const a=s(n,t,e,r);return ve(a)?a:e}else return e}function ts(n,e,t){const i=n;i.__localeChainCache=new Map,n.localeFallbacker(n,t,e)}function LA(n,e){return n===e?!1:n.split("-")[0]===e.split("-")[0]}function PA(n,e){const t=e.indexOf(n);if(t===-1)return!1;for(let i=t+1;i<e.length;i++)if(LA(n,e[i]))return!0;return!1}function xl(n){return t=>IA(t,n)}function IA(n,e){const t=e.b||e.body;if((t.t||t.type)===1){const i=t,r=i.c||i.cases;return n.plural(r.reduce((s,o)=>[...s,xh(n,o)],[]))}else return xh(n,t)}function xh(n,e){const t=e.s||e.static;if(t)return n.type==="text"?t:n.normalize([t]);{const i=(e.i||e.items).reduce((r,s)=>[...r,Gl(n,s)],[]);return n.normalize(i)}}function Gl(n,e){const t=e.t||e.type;switch(t){case 3:{const i=e;return i.v||i.value}case 9:{const i=e;return i.v||i.value}case 4:{const i=e;return n.interpolate(n.named(i.k||i.key))}case 5:{const i=e;return n.interpolate(n.list(i.i!=null?i.i:i.index))}case 6:{const i=e,r=i.m||i.modifier;return n.linked(Gl(n,i.k||i.key),r?Gl(n,r):void 0,n.type)}case 7:{const i=e;return i.v||i.value}case 8:{const i=e;return i.v||i.value}default:throw new Error(`unhandled node type on format message part: ${t}`)}}const kp=n=>n;let br=Object.create(null);const Hr=n=>it(n)&&(n.t===0||n.type===0)&&("b"in n||"body"in n);function Hp(n,e={}){let t=!1;const i=e.onError||wb;return e.onError=r=>{t=!0,i(r)},{...Kb(n,e),detectError:t}}const NA=(n,e)=>{if(!ve(n))throw Dn(An.NOT_SUPPORT_NON_STRING_MESSAGE);{$e(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||kp)(n),r=br[i];if(r)return r;const{code:s,detectError:o}=Hp(n,e),a=new Function(`return ${s}`)();return o?a:br[i]=a}};function DA(n,e){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&ve(n)){$e(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||kp)(n),r=br[i];if(r)return r;const{ast:s,detectError:o}=Hp(n,{...e,location:!1,jit:!0}),a=xl(s);return o?a:br[i]=a}else{const t=n.cacheKey;if(t){const i=br[t];return i||(br[t]=xl(n))}else return xl(n)}}const Eh=()=>"",fn=n=>ot(n);function Sh(n,...e){const{fallbackFormat:t,postTranslation:i,unresolving:r,messageCompiler:s,fallbackLocale:o,messages:a}=n,[l,c]=Wl(...e),u=$e(c.missingWarn)?c.missingWarn:n.missingWarn,f=$e(c.fallbackWarn)?c.fallbackWarn:n.fallbackWarn,h=$e(c.escapeParameter)?c.escapeParameter:n.escapeParameter,m=!!c.resolvedMessage,g=ve(c.default)||$e(c.default)?$e(c.default)?s?l:()=>l:c.default:t?s?l:()=>l:"",x=t||g!=="",_=Pc(n,c);h&&UA(c);let[p,R,v]=m?[l,_,a[_]||{}]:zp(n,l,_,o,f,u),S=p,P=l;if(!m&&!(ve(S)||Hr(S)||fn(S))&&x&&(S=g,P=S),!m&&(!(ve(S)||Hr(S)||fn(S))||!ve(R)))return r?xa:l;let T=!1;const L=()=>{T=!0},D=fn(S)?S:Vp(n,l,R,S,P,L);if(T)return S;const M=BA(n,R,v,c),y=dA(M),V=OA(n,D,y),B=i?i(V,l):V;if(__INTLIFY_PROD_DEVTOOLS__){const O={timestamp:Date.now(),key:ve(l)?l:fn(S)?S.key:"",locale:R||(fn(S)?S.locale:""),format:ve(S)?S:fn(S)?S.source:"",message:B};O.meta=Lt({},n.__meta,wA()||{}),_A(O)}return B}function UA(n){ut(n.list)?n.list=n.list.map(e=>ve(e)?sh(e):e):it(n.named)&&Object.keys(n.named).forEach(e=>{ve(n.named[e])&&(n.named[e]=sh(n.named[e]))})}function zp(n,e,t,i,r,s){const{messages:o,onWarn:a,messageResolver:l,localeFallbacker:c}=n,u=c(n,i,t);let f={},h,m=null;const g="translate";for(let x=0;x<u.length&&(h=u[x],f=o[h]||{},(m=l(f,e))===null&&(m=f[e]),!(ve(m)||Hr(m)||fn(m)));x++)if(!PA(h,u)){const _=Ic(n,e,h,s,g);_!==e&&(m=_)}return[m,h,f]}function Vp(n,e,t,i,r,s){const{messageCompiler:o,warnHtmlMessage:a}=n;if(fn(i)){const c=i;return c.locale=c.locale||t,c.key=c.key||e,c}if(o==null){const c=()=>i;return c.locale=t,c.key=e,c}const l=o(i,FA(n,t,r,i,a,s));return l.locale=t,l.key=e,l.source=i,l}function OA(n,e,t){return e(t)}function Wl(...n){const[e,t,i]=n,r={};if(!ve(e)&&!St(e)&&!fn(e)&&!Hr(e))throw Dn(An.INVALID_ARGUMENT);const s=St(e)?String(e):(fn(e),e);return St(t)?r.plural=t:ve(t)?r.default=t:Oe(t)&&!ga(t)?r.named=t:ut(t)&&(r.list=t),St(i)?r.plural=i:ve(i)?r.default=i:Oe(i)&&Lt(r,i),[s,r]}function FA(n,e,t,i,r,s){return{locale:e,key:t,warnHtmlMessage:r,onError:o=>{throw s&&s(o),o},onCacheKey:o=>db(e,t,o)}}function BA(n,e,t,i){const{modifiers:r,pluralRules:s,messageResolver:o,fallbackLocale:a,fallbackWarn:l,missingWarn:c,fallbackContext:u}=n,h={locale:e,modifiers:r,pluralRules:s,messages:m=>{let g=o(t,m);if(g==null&&u){const[,,x]=zp(u,m,e,a,l,c);g=o(x,m)}if(ve(g)||Hr(g)){let x=!1;const p=Vp(n,m,e,g,m,()=>{x=!0});return x?Eh:p}else return fn(g)?g:Eh}};return n.processor&&(h.processor=n.processor),i.list&&(h.list=i.list),i.named&&(h.named=i.named),St(i.plural)&&(h.pluralIndex=i.plural),h}function Mh(n,...e){const{datetimeFormats:t,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:o}=n,{__datetimeFormatters:a}=n,[l,c,u,f]=Xl(...e),h=$e(u.missingWarn)?u.missingWarn:n.missingWarn;$e(u.fallbackWarn)?u.fallbackWarn:n.fallbackWarn;const m=!!u.part,g=Pc(n,u),x=o(n,r,g);if(!ve(l)||l==="")return new Intl.DateTimeFormat(g,f).format(c);let _={},p,R=null;const v="datetime format";for(let T=0;T<x.length&&(p=x[T],_=t[p]||{},R=_[l],!Oe(R));T++)Ic(n,l,p,h,v);if(!Oe(R)||!ve(p))return i?xa:l;let S=`${p}__${l}`;ga(f)||(S=`${S}__${JSON.stringify(f)}`);let P=a.get(S);return P||(P=new Intl.DateTimeFormat(p,Lt({},R,f)),a.set(S,P)),m?P.formatToParts(c):P.format(c)}const Gp=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Xl(...n){const[e,t,i,r]=n,s={};let o={},a;if(ve(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw Dn(An.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(c);try{a.toISOString()}catch{throw Dn(An.INVALID_ISO_DATE_ARGUMENT)}}else if(mb(e)){if(isNaN(e.getTime()))throw Dn(An.INVALID_DATE_ARGUMENT);a=e}else if(St(e))a=e;else throw Dn(An.INVALID_ARGUMENT);return ve(t)?s.key=t:Oe(t)&&Object.keys(t).forEach(l=>{Gp.includes(l)?o[l]=t[l]:s[l]=t[l]}),ve(i)?s.locale=i:Oe(i)&&(o=i),Oe(r)&&(o=r),[s.key||"",a,s,o]}function yh(n,e,t){const i=n;for(const r in t){const s=`${e}__${r}`;i.__datetimeFormatters.has(s)&&i.__datetimeFormatters.delete(s)}}function Th(n,...e){const{numberFormats:t,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:o}=n,{__numberFormatters:a}=n,[l,c,u,f]=$l(...e),h=$e(u.missingWarn)?u.missingWarn:n.missingWarn;$e(u.fallbackWarn)?u.fallbackWarn:n.fallbackWarn;const m=!!u.part,g=Pc(n,u),x=o(n,r,g);if(!ve(l)||l==="")return new Intl.NumberFormat(g,f).format(c);let _={},p,R=null;const v="number format";for(let T=0;T<x.length&&(p=x[T],_=t[p]||{},R=_[l],!Oe(R));T++)Ic(n,l,p,h,v);if(!Oe(R)||!ve(p))return i?xa:l;let S=`${p}__${l}`;ga(f)||(S=`${S}__${JSON.stringify(f)}`);let P=a.get(S);return P||(P=new Intl.NumberFormat(p,Lt({},R,f)),a.set(S,P)),m?P.formatToParts(c):P.format(c)}const Wp=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function $l(...n){const[e,t,i,r]=n,s={};let o={};if(!St(e))throw Dn(An.INVALID_ARGUMENT);const a=e;return ve(t)?s.key=t:Oe(t)&&Object.keys(t).forEach(l=>{Wp.includes(l)?o[l]=t[l]:s[l]=t[l]}),ve(i)?s.locale=i:Oe(i)&&(o=i),Oe(r)&&(o=r),[s.key||"",a,s,o]}function bh(n,e,t){const i=n;for(const r in t){const s=`${e}__${r}`;i.__numberFormatters.has(s)&&i.__numberFormatters.delete(s)}}Jb();/*!
  * vue-i18n v9.13.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const kA="9.13.1";function HA(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&($n().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&($n().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&($n().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&($n().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&($n().__INTLIFY_PROD_DEVTOOLS__=!1)}const Xp=vA.__EXTEND_POINT__,Gn=va(Xp);Gn(),Gn(),Gn(),Gn(),Gn(),Gn(),Gn(),Gn(),Gn();const $p=An.__EXTEND_POINT__,Zt=va($p),Mt={UNEXPECTED_RETURN_TYPE:$p,INVALID_ARGUMENT:Zt(),MUST_BE_CALL_SETUP_TOP:Zt(),NOT_INSTALLED:Zt(),NOT_AVAILABLE_IN_LEGACY_MODE:Zt(),REQUIRED_VALUE:Zt(),INVALID_VALUE:Zt(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:Zt(),NOT_INSTALLED_WITH_PROVIDE:Zt(),UNEXPECTED_ERROR:Zt(),NOT_COMPATIBLE_LEGACY_VUE_I18N:Zt(),BRIDGE_SUPPORT_VUE_2_ONLY:Zt(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:Zt(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:Zt(),__EXTEND_POINT__:Zt()};function wt(n,...e){return Xr(n,null,void 0)}const Yl=Li("__translateVNode"),ql=Li("__datetimeParts"),jl=Li("__numberParts"),Yp=Li("__setPluralRules"),qp=Li("__injectWithOption"),Kl=Li("__dispose");function Ms(n){if(!it(n))return n;for(const e in n)if(Yo(n,e))if(!e.includes("."))it(n[e])&&Ms(n[e]);else{const t=e.split("."),i=t.length-1;let r=n,s=!1;for(let o=0;o<i;o++){if(t[o]in r||(r[t[o]]={}),!it(r[t[o]])){s=!0;break}r=r[t[o]]}s||(r[t[i]]=n[e],delete n[e]),it(r[t[i]])&&Ms(r[t[i]])}return n}function Ea(n,e){const{messages:t,__i18n:i,messageResolver:r,flatJson:s}=e,o=Oe(t)?t:ut(i)?{}:{[n]:{}};if(ut(i)&&i.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:c}=a;l?(o[l]=o[l]||{},Co(c,o[l])):Co(c,o)}else ve(a)&&Co(JSON.parse(a),o)}),r==null&&s)for(const a in o)Yo(o,a)&&Ms(o[a]);return o}function jp(n){return n.type}function Kp(n,e,t){let i=it(e.messages)?e.messages:{};"__i18nGlobal"in t&&(i=Ea(n.locale.value,{messages:i,__i18n:t.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(s=>{n.mergeLocaleMessage(s,i[s])});{if(it(e.datetimeFormats)){const s=Object.keys(e.datetimeFormats);s.length&&s.forEach(o=>{n.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(it(e.numberFormats)){const s=Object.keys(e.numberFormats);s.length&&s.forEach(o=>{n.mergeNumberFormat(o,e.numberFormats[o])})}}}function Ah(n){return Qe(Ts,null,n,0)}const wh="__INTLIFY_META__",Rh=()=>[],zA=()=>!1;let Ch=0;function Lh(n){return(e,t,i,r)=>n(t,i,Nr()||void 0,r)}const VA=()=>{const n=Nr();let e=null;return n&&(e=jp(n)[wh])?{[wh]:e}:null};function Nc(n={},e){const{__root:t,__injectWithOption:i}=n,r=t===void 0,s=n.flatJson,o=$o?on:ld,a=!!n.translateExistCompatible;let l=$e(n.inheritLocale)?n.inheritLocale:!0;const c=o(t&&l?t.locale.value:ve(n.locale)?n.locale:kr),u=o(t&&l?t.fallbackLocale.value:ve(n.fallbackLocale)||ut(n.fallbackLocale)||Oe(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:c.value),f=o(Ea(c.value,n)),h=o(Oe(n.datetimeFormats)?n.datetimeFormats:{[c.value]:{}}),m=o(Oe(n.numberFormats)?n.numberFormats:{[c.value]:{}});let g=t?t.missingWarn:$e(n.missingWarn)||Ai(n.missingWarn)?n.missingWarn:!0,x=t?t.fallbackWarn:$e(n.fallbackWarn)||Ai(n.fallbackWarn)?n.fallbackWarn:!0,_=t?t.fallbackRoot:$e(n.fallbackRoot)?n.fallbackRoot:!0,p=!!n.fallbackFormat,R=ot(n.missing)?n.missing:null,v=ot(n.missing)?Lh(n.missing):null,S=ot(n.postTranslation)?n.postTranslation:null,P=t?t.warnHtmlMessage:$e(n.warnHtmlMessage)?n.warnHtmlMessage:!0,T=!!n.escapeParameter;const L=t?t.modifiers:Oe(n.modifiers)?n.modifiers:{};let D=n.pluralRules||t&&t.pluralRules,M;M=(()=>{r&&gh(null);const N={version:kA,locale:c.value,fallbackLocale:u.value,messages:f.value,modifiers:L,pluralRules:D,missing:v===null?void 0:v,missingWarn:g,fallbackWarn:x,fallbackFormat:p,unresolving:!0,postTranslation:S===null?void 0:S,warnHtmlMessage:P,escapeParameter:T,messageResolver:n.messageResolver,messageCompiler:n.messageCompiler,__meta:{framework:"vue"}};N.datetimeFormats=h.value,N.numberFormats=m.value,N.__datetimeFormatters=Oe(M)?M.__datetimeFormatters:void 0,N.__numberFormatters=Oe(M)?M.__numberFormatters:void 0;const F=CA(N);return r&&gh(F),F})(),ts(M,c.value,u.value);function V(){return[c.value,u.value,f.value,h.value,m.value]}const B=Sn({get:()=>c.value,set:N=>{c.value=N,M.locale=c.value}}),O=Sn({get:()=>u.value,set:N=>{u.value=N,M.fallbackLocale=u.value,ts(M,c.value,N)}}),ee=Sn(()=>f.value),ne=Sn(()=>h.value),se=Sn(()=>m.value);function ie(){return ot(S)?S:null}function $(N){S=N,M.postTranslation=N}function ce(){return R}function ue(N){N!==null&&(v=Lh(N)),R=N,M.missing=v}const ge=(N,F,le,te,pe,Re)=>{V();let ye;try{__INTLIFY_PROD_DEVTOOLS__,r||(M.fallbackContext=t?RA():void 0),ye=N(M)}finally{__INTLIFY_PROD_DEVTOOLS__,r||(M.fallbackContext=void 0)}if(le!=="translate exists"&&St(ye)&&ye===xa||le==="translate exists"&&!ye){const[Se,De]=F();return t&&_?te(t):pe(Se)}else{if(Re(ye))return ye;throw wt(Mt.UNEXPECTED_RETURN_TYPE)}};function we(...N){return ge(F=>Reflect.apply(Sh,null,[F,...N]),()=>Wl(...N),"translate",F=>Reflect.apply(F.t,F,[...N]),F=>F,F=>ve(F))}function Ye(...N){const[F,le,te]=N;if(te&&!it(te))throw wt(Mt.INVALID_ARGUMENT);return we(F,le,Lt({resolvedMessage:!0},te||{}))}function Q(...N){return ge(F=>Reflect.apply(Mh,null,[F,...N]),()=>Xl(...N),"datetime format",F=>Reflect.apply(F.d,F,[...N]),()=>ph,F=>ve(F))}function he(...N){return ge(F=>Reflect.apply(Th,null,[F,...N]),()=>$l(...N),"number format",F=>Reflect.apply(F.n,F,[...N]),()=>ph,F=>ve(F))}function me(N){return N.map(F=>ve(F)||St(F)||$e(F)?Ah(String(F)):F)}const Ue={normalize:me,interpolate:N=>N,type:"vnode"};function Fe(...N){return ge(F=>{let le;const te=F;try{te.processor=Ue,le=Reflect.apply(Sh,null,[te,...N])}finally{te.processor=null}return le},()=>Wl(...N),"translate",F=>F[Yl](...N),F=>[Ah(F)],F=>ut(F))}function W(...N){return ge(F=>Reflect.apply(Th,null,[F,...N]),()=>$l(...N),"number format",F=>F[jl](...N),Rh,F=>ve(F)||ut(F))}function Ke(...N){return ge(F=>Reflect.apply(Mh,null,[F,...N]),()=>Xl(...N),"datetime format",F=>F[ql](...N),Rh,F=>ve(F)||ut(F))}function be(N){D=N,M.pluralRules=D}function I(N,F){return ge(()=>{if(!N)return!1;const le=ve(F)?F:c.value,te=q(le),pe=M.messageResolver(te,N);return a?pe!=null:Hr(pe)||fn(pe)||ve(pe)},()=>[N],"translate exists",le=>Reflect.apply(le.te,le,[N,F]),zA,le=>$e(le))}function b(N){let F=null;const le=Np(M,u.value,c.value);for(let te=0;te<le.length;te++){const pe=f.value[le[te]]||{},Re=M.messageResolver(pe,N);if(Re!=null){F=Re;break}}return F}function k(N){const F=b(N);return F??(t?t.tm(N)||{}:{})}function q(N){return f.value[N]||{}}function J(N,F){if(s){const le={[N]:F};for(const te in le)Yo(le,te)&&Ms(le[te]);F=le[N]}f.value[N]=F,M.messages=f.value}function oe(N,F){f.value[N]=f.value[N]||{};const le={[N]:F};if(s)for(const te in le)Yo(le,te)&&Ms(le[te]);F=le[N],Co(F,f.value[N]),M.messages=f.value}function A(N){return h.value[N]||{}}function d(N,F){h.value[N]=F,M.datetimeFormats=h.value,yh(M,N,F)}function E(N,F){h.value[N]=Lt(h.value[N]||{},F),M.datetimeFormats=h.value,yh(M,N,F)}function w(N){return m.value[N]||{}}function U(N,F){m.value[N]=F,M.numberFormats=m.value,bh(M,N,F)}function G(N,F){m.value[N]=Lt(m.value[N]||{},F),M.numberFormats=m.value,bh(M,N,F)}Ch++,t&&$o&&(Cr(t.locale,N=>{l&&(c.value=N,M.locale=N,ts(M,c.value,u.value))}),Cr(t.fallbackLocale,N=>{l&&(u.value=N,M.fallbackLocale=N,ts(M,c.value,u.value))}));const Y={id:Ch,locale:B,fallbackLocale:O,get inheritLocale(){return l},set inheritLocale(N){l=N,N&&t&&(c.value=t.locale.value,u.value=t.fallbackLocale.value,ts(M,c.value,u.value))},get availableLocales(){return Object.keys(f.value).sort()},messages:ee,get modifiers(){return L},get pluralRules(){return D||{}},get isGlobal(){return r},get missingWarn(){return g},set missingWarn(N){g=N,M.missingWarn=g},get fallbackWarn(){return x},set fallbackWarn(N){x=N,M.fallbackWarn=x},get fallbackRoot(){return _},set fallbackRoot(N){_=N},get fallbackFormat(){return p},set fallbackFormat(N){p=N,M.fallbackFormat=p},get warnHtmlMessage(){return P},set warnHtmlMessage(N){P=N,M.warnHtmlMessage=N},get escapeParameter(){return T},set escapeParameter(N){T=N,M.escapeParameter=N},t:we,getLocaleMessage:q,setLocaleMessage:J,mergeLocaleMessage:oe,getPostTranslationHandler:ie,setPostTranslationHandler:$,getMissingHandler:ce,setMissingHandler:ue,[Yp]:be};return Y.datetimeFormats=ne,Y.numberFormats=se,Y.rt=Ye,Y.te=I,Y.tm=k,Y.d=Q,Y.n=he,Y.getDateTimeFormat=A,Y.setDateTimeFormat=d,Y.mergeDateTimeFormat=E,Y.getNumberFormat=w,Y.setNumberFormat=U,Y.mergeNumberFormat=G,Y[qp]=i,Y[Yl]=Fe,Y[ql]=Ke,Y[jl]=W,Y}function GA(n){const e=ve(n.locale)?n.locale:kr,t=ve(n.fallbackLocale)||ut(n.fallbackLocale)||Oe(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:e,i=ot(n.missing)?n.missing:void 0,r=$e(n.silentTranslationWarn)||Ai(n.silentTranslationWarn)?!n.silentTranslationWarn:!0,s=$e(n.silentFallbackWarn)||Ai(n.silentFallbackWarn)?!n.silentFallbackWarn:!0,o=$e(n.fallbackRoot)?n.fallbackRoot:!0,a=!!n.formatFallbackMessages,l=Oe(n.modifiers)?n.modifiers:{},c=n.pluralizationRules,u=ot(n.postTranslation)?n.postTranslation:void 0,f=ve(n.warnHtmlInMessage)?n.warnHtmlInMessage!=="off":!0,h=!!n.escapeParameterHtml,m=$e(n.sync)?n.sync:!0;let g=n.messages;if(Oe(n.sharedMessages)){const T=n.sharedMessages;g=Object.keys(T).reduce((D,M)=>{const y=D[M]||(D[M]={});return Lt(y,T[M]),D},g||{})}const{__i18n:x,__root:_,__injectWithOption:p}=n,R=n.datetimeFormats,v=n.numberFormats,S=n.flatJson,P=n.translateExistCompatible;return{locale:e,fallbackLocale:t,messages:g,flatJson:S,datetimeFormats:R,numberFormats:v,missing:i,missingWarn:r,fallbackWarn:s,fallbackRoot:o,fallbackFormat:a,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:f,escapeParameter:h,messageResolver:n.messageResolver,inheritLocale:m,translateExistCompatible:P,__i18n:x,__root:_,__injectWithOption:p}}function Jl(n={},e){{const t=Nc(GA(n)),{__extender:i}=n,r={id:t.id,get locale(){return t.locale.value},set locale(s){t.locale.value=s},get fallbackLocale(){return t.fallbackLocale.value},set fallbackLocale(s){t.fallbackLocale.value=s},get messages(){return t.messages.value},get datetimeFormats(){return t.datetimeFormats.value},get numberFormats(){return t.numberFormats.value},get availableLocales(){return t.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(s){},get missing(){return t.getMissingHandler()},set missing(s){t.setMissingHandler(s)},get silentTranslationWarn(){return $e(t.missingWarn)?!t.missingWarn:t.missingWarn},set silentTranslationWarn(s){t.missingWarn=$e(s)?!s:s},get silentFallbackWarn(){return $e(t.fallbackWarn)?!t.fallbackWarn:t.fallbackWarn},set silentFallbackWarn(s){t.fallbackWarn=$e(s)?!s:s},get modifiers(){return t.modifiers},get formatFallbackMessages(){return t.fallbackFormat},set formatFallbackMessages(s){t.fallbackFormat=s},get postTranslation(){return t.getPostTranslationHandler()},set postTranslation(s){t.setPostTranslationHandler(s)},get sync(){return t.inheritLocale},set sync(s){t.inheritLocale=s},get warnHtmlInMessage(){return t.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(s){t.warnHtmlMessage=s!=="off"},get escapeParameterHtml(){return t.escapeParameter},set escapeParameterHtml(s){t.escapeParameter=s},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(s){},get pluralizationRules(){return t.pluralRules||{}},__composer:t,t(...s){const[o,a,l]=s,c={};let u=null,f=null;if(!ve(o))throw wt(Mt.INVALID_ARGUMENT);const h=o;return ve(a)?c.locale=a:ut(a)?u=a:Oe(a)&&(f=a),ut(l)?u=l:Oe(l)&&(f=l),Reflect.apply(t.t,t,[h,u||f||{},c])},rt(...s){return Reflect.apply(t.rt,t,[...s])},tc(...s){const[o,a,l]=s,c={plural:1};let u=null,f=null;if(!ve(o))throw wt(Mt.INVALID_ARGUMENT);const h=o;return ve(a)?c.locale=a:St(a)?c.plural=a:ut(a)?u=a:Oe(a)&&(f=a),ve(l)?c.locale=l:ut(l)?u=l:Oe(l)&&(f=l),Reflect.apply(t.t,t,[h,u||f||{},c])},te(s,o){return t.te(s,o)},tm(s){return t.tm(s)},getLocaleMessage(s){return t.getLocaleMessage(s)},setLocaleMessage(s,o){t.setLocaleMessage(s,o)},mergeLocaleMessage(s,o){t.mergeLocaleMessage(s,o)},d(...s){return Reflect.apply(t.d,t,[...s])},getDateTimeFormat(s){return t.getDateTimeFormat(s)},setDateTimeFormat(s,o){t.setDateTimeFormat(s,o)},mergeDateTimeFormat(s,o){t.mergeDateTimeFormat(s,o)},n(...s){return Reflect.apply(t.n,t,[...s])},getNumberFormat(s){return t.getNumberFormat(s)},setNumberFormat(s,o){t.setNumberFormat(s,o)},mergeNumberFormat(s,o){t.mergeNumberFormat(s,o)},getChoiceIndex(s,o){return-1}};return r.__extender=i,r}}const Dc={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:n=>n==="parent"||n==="global",default:"parent"},i18n:{type:Object}};function WA({slots:n},e){return e.length===1&&e[0]==="default"?(n.default?n.default():[]).reduce((i,r)=>[...i,...r.type===pt?r.children:[r]],[]):e.reduce((t,i)=>{const r=n[i];return r&&(t[i]=r()),t},{})}function Jp(n){return pt}const XA=Pt({name:"i18n-t",props:Lt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:n=>St(n)||!isNaN(n)}},Dc),setup(n,e){const{slots:t,attrs:i}=e,r=n.i18n||Uc({useScope:n.scope,__useComponent:!0});return()=>{const s=Object.keys(t).filter(f=>f!=="_"),o={};n.locale&&(o.locale=n.locale),n.plural!==void 0&&(o.plural=ve(n.plural)?+n.plural:n.plural);const a=WA(e,s),l=r[Yl](n.keypath,a,o),c=Lt({},i),u=ve(n.tag)||it(n.tag)?n.tag:Jp();return xc(u,c,l)}}}),Ph=XA;function $A(n){return ut(n)&&!ve(n[0])}function Zp(n,e,t,i){const{slots:r,attrs:s}=e;return()=>{const o={part:!0};let a={};n.locale&&(o.locale=n.locale),ve(n.format)?o.key=n.format:it(n.format)&&(ve(n.format.key)&&(o.key=n.format.key),a=Object.keys(n.format).reduce((h,m)=>t.includes(m)?Lt({},h,{[m]:n.format[m]}):h,{}));const l=i(n.value,o,a);let c=[o.key];ut(l)?c=l.map((h,m)=>{const g=r[h.type],x=g?g({[h.type]:h.value,index:m,parts:l}):[h.value];return $A(x)&&(x[0].key=`${h.type}-${m}`),x}):ve(l)&&(c=[l]);const u=Lt({},s),f=ve(n.tag)||it(n.tag)?n.tag:Jp();return xc(f,u,c)}}const YA=Pt({name:"i18n-n",props:Lt({value:{type:Number,required:!0},format:{type:[String,Object]}},Dc),setup(n,e){const t=n.i18n||Uc({useScope:n.scope,__useComponent:!0});return Zp(n,e,Wp,(...i)=>t[jl](...i))}}),Ih=YA,qA=Pt({name:"i18n-d",props:Lt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Dc),setup(n,e){const t=n.i18n||Uc({useScope:n.scope,__useComponent:!0});return Zp(n,e,Gp,(...i)=>t[ql](...i))}}),Nh=qA;function jA(n,e){const t=n;if(n.mode==="composition")return t.__getInstance(e)||n.global;{const i=t.__getInstance(e);return i!=null?i.__composer:n.global.__composer}}function KA(n){const e=o=>{const{instance:a,modifiers:l,value:c}=o;if(!a||!a.$)throw wt(Mt.UNEXPECTED_ERROR);const u=jA(n,a.$),f=Dh(c);return[Reflect.apply(u.t,u,[...Uh(f)]),u]};return{created:(o,a)=>{const[l,c]=e(a);$o&&n.global===c&&(o.__i18nWatcher=Cr(c.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=c,o.textContent=l},unmounted:o=>{$o&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const l=o.__composer,c=Dh(a);o.textContent=Reflect.apply(l.t,l,[...Uh(c)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function Dh(n){if(ve(n))return{path:n};if(Oe(n)){if(!("path"in n))throw wt(Mt.REQUIRED_VALUE,"path");return n}else throw wt(Mt.INVALID_VALUE)}function Uh(n){const{path:e,locale:t,args:i,choice:r,plural:s}=n,o={},a=i||{};return ve(t)&&(o.locale=t),St(r)&&(o.plural=r),St(s)&&(o.plural=s),[e,a,o]}function JA(n,e,...t){const i=Oe(t[0])?t[0]:{},r=!!i.useI18nComponentName;($e(i.globalInstall)?i.globalInstall:!0)&&([r?"i18n":Ph.name,"I18nT"].forEach(o=>n.component(o,Ph)),[Ih.name,"I18nN"].forEach(o=>n.component(o,Ih)),[Nh.name,"I18nD"].forEach(o=>n.component(o,Nh))),n.directive("t",KA(e))}function ZA(n,e,t){return{beforeCreate(){const i=Nr();if(!i)throw wt(Mt.UNEXPECTED_ERROR);const r=this.$options;if(r.i18n){const s=r.i18n;if(r.__i18n&&(s.__i18n=r.__i18n),s.__root=e,this===this.$root)this.$i18n=Oh(n,s);else{s.__injectWithOption=!0,s.__extender=t.__vueI18nExtend,this.$i18n=Jl(s);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(r.__i18n)if(this===this.$root)this.$i18n=Oh(n,r);else{this.$i18n=Jl({__i18n:r.__i18n,__injectWithOption:!0,__extender:t.__vueI18nExtend,__root:e});const s=this.$i18n;s.__extender&&(s.__disposer=s.__extender(this.$i18n))}else this.$i18n=n;r.__i18nGlobal&&Kp(e,r,r),this.$t=(...s)=>this.$i18n.t(...s),this.$rt=(...s)=>this.$i18n.rt(...s),this.$tc=(...s)=>this.$i18n.tc(...s),this.$te=(s,o)=>this.$i18n.te(s,o),this.$d=(...s)=>this.$i18n.d(...s),this.$n=(...s)=>this.$i18n.n(...s),this.$tm=s=>this.$i18n.tm(s),t.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=Nr();if(!i)throw wt(Mt.UNEXPECTED_ERROR);const r=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,r.__disposer&&(r.__disposer(),delete r.__disposer,delete r.__extender),t.__deleteInstance(i),delete this.$i18n}}}function Oh(n,e){n.locale=e.locale||n.locale,n.fallbackLocale=e.fallbackLocale||n.fallbackLocale,n.missing=e.missing||n.missing,n.silentTranslationWarn=e.silentTranslationWarn||n.silentFallbackWarn,n.silentFallbackWarn=e.silentFallbackWarn||n.silentFallbackWarn,n.formatFallbackMessages=e.formatFallbackMessages||n.formatFallbackMessages,n.postTranslation=e.postTranslation||n.postTranslation,n.warnHtmlInMessage=e.warnHtmlInMessage||n.warnHtmlInMessage,n.escapeParameterHtml=e.escapeParameterHtml||n.escapeParameterHtml,n.sync=e.sync||n.sync,n.__composer[Yp](e.pluralizationRules||n.pluralizationRules);const t=Ea(n.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(t).forEach(i=>n.mergeLocaleMessage(i,t[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>n.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>n.mergeNumberFormat(i,e.numberFormats[i])),n}const QA=Li("global-vue-i18n");function e1(n={},e){const t=__VUE_I18N_LEGACY_API__&&$e(n.legacy)?n.legacy:__VUE_I18N_LEGACY_API__,i=$e(n.globalInjection)?n.globalInjection:!0,r=__VUE_I18N_LEGACY_API__&&t?!!n.allowComposition:!0,s=new Map,[o,a]=t1(n,t),l=Li("");function c(h){return s.get(h)||null}function u(h,m){s.set(h,m)}function f(h){s.delete(h)}{const h={get mode(){return __VUE_I18N_LEGACY_API__&&t?"legacy":"composition"},get allowComposition(){return r},async install(m,...g){if(m.__VUE_I18N_SYMBOL__=l,m.provide(m.__VUE_I18N_SYMBOL__,h),Oe(g[0])){const p=g[0];h.__composerExtend=p.__composerExtend,h.__vueI18nExtend=p.__vueI18nExtend}let x=null;!t&&i&&(x=u1(m,h.global)),__VUE_I18N_FULL_INSTALL__&&JA(m,h,...g),__VUE_I18N_LEGACY_API__&&t&&m.mixin(ZA(a,a.__composer,h));const _=m.unmount;m.unmount=()=>{x&&x(),h.dispose(),_()}},get global(){return a},dispose(){o.stop()},__instances:s,__getInstance:c,__setInstance:u,__deleteInstance:f};return h}}function Uc(n={}){const e=Nr();if(e==null)throw wt(Mt.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw wt(Mt.NOT_INSTALLED);const t=n1(e),i=r1(t),r=jp(e),s=i1(n,r);if(__VUE_I18N_LEGACY_API__&&t.mode==="legacy"&&!n.__useComponent){if(!t.allowComposition)throw wt(Mt.NOT_AVAILABLE_IN_LEGACY_MODE);return l1(e,s,i,n)}if(s==="global")return Kp(i,n,r),i;if(s==="parent"){let l=s1(t,e,n.__useComponent);return l==null&&(l=i),l}const o=t;let a=o.__getInstance(e);if(a==null){const l=Lt({},n);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),a=Nc(l),o.__composerExtend&&(a[Kl]=o.__composerExtend(a)),a1(o,e,a),o.__setInstance(e,a)}return a}function t1(n,e,t){const i=_m();{const r=__VUE_I18N_LEGACY_API__&&e?i.run(()=>Jl(n)):i.run(()=>Nc(n));if(r==null)throw wt(Mt.UNEXPECTED_ERROR);return[i,r]}}function n1(n){{const e=cs(n.isCE?QA:n.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw wt(n.isCE?Mt.NOT_INSTALLED_WITH_PROVIDE:Mt.UNEXPECTED_ERROR);return e}}function i1(n,e){return ga(n)?"__i18n"in e?"local":"global":n.useScope?n.useScope:"local"}function r1(n){return n.mode==="composition"?n.global:n.global.__composer}function s1(n,e,t=!1){let i=null;const r=e.root;let s=o1(e,t);for(;s!=null;){const o=n;if(n.mode==="composition")i=o.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const a=o.__getInstance(s);a!=null&&(i=a.__composer,t&&i&&!i[qp]&&(i=null))}if(i!=null||r===s)break;s=s.parent}return i}function o1(n,e=!1){return n==null?null:e&&n.vnode.ctx||n.parent}function a1(n,e,t){ir(()=>{},e),dc(()=>{const i=t;n.__deleteInstance(e);const r=i[Kl];r&&(r(),delete i[Kl])},e)}function l1(n,e,t,i={}){const r=e==="local",s=ld(null);if(r&&n.proxy&&!(n.proxy.$options.i18n||n.proxy.$options.__i18n))throw wt(Mt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const o=$e(i.inheritLocale)?i.inheritLocale:!ve(i.locale),a=on(!r||o?t.locale.value:ve(i.locale)?i.locale:kr),l=on(!r||o?t.fallbackLocale.value:ve(i.fallbackLocale)||ut(i.fallbackLocale)||Oe(i.fallbackLocale)||i.fallbackLocale===!1?i.fallbackLocale:a.value),c=on(Ea(a.value,i)),u=on(Oe(i.datetimeFormats)?i.datetimeFormats:{[a.value]:{}}),f=on(Oe(i.numberFormats)?i.numberFormats:{[a.value]:{}}),h=r?t.missingWarn:$e(i.missingWarn)||Ai(i.missingWarn)?i.missingWarn:!0,m=r?t.fallbackWarn:$e(i.fallbackWarn)||Ai(i.fallbackWarn)?i.fallbackWarn:!0,g=r?t.fallbackRoot:$e(i.fallbackRoot)?i.fallbackRoot:!0,x=!!i.fallbackFormat,_=ot(i.missing)?i.missing:null,p=ot(i.postTranslation)?i.postTranslation:null,R=r?t.warnHtmlMessage:$e(i.warnHtmlMessage)?i.warnHtmlMessage:!0,v=!!i.escapeParameter,S=r?t.modifiers:Oe(i.modifiers)?i.modifiers:{},P=i.pluralRules||r&&t.pluralRules;function T(){return[a.value,l.value,c.value,u.value,f.value]}const L=Sn({get:()=>s.value?s.value.locale.value:a.value,set:b=>{s.value&&(s.value.locale.value=b),a.value=b}}),D=Sn({get:()=>s.value?s.value.fallbackLocale.value:l.value,set:b=>{s.value&&(s.value.fallbackLocale.value=b),l.value=b}}),M=Sn(()=>s.value?s.value.messages.value:c.value),y=Sn(()=>u.value),V=Sn(()=>f.value);function B(){return s.value?s.value.getPostTranslationHandler():p}function O(b){s.value&&s.value.setPostTranslationHandler(b)}function ee(){return s.value?s.value.getMissingHandler():_}function ne(b){s.value&&s.value.setMissingHandler(b)}function se(b){return T(),b()}function ie(...b){return s.value?se(()=>Reflect.apply(s.value.t,null,[...b])):se(()=>"")}function $(...b){return s.value?Reflect.apply(s.value.rt,null,[...b]):""}function ce(...b){return s.value?se(()=>Reflect.apply(s.value.d,null,[...b])):se(()=>"")}function ue(...b){return s.value?se(()=>Reflect.apply(s.value.n,null,[...b])):se(()=>"")}function ge(b){return s.value?s.value.tm(b):{}}function we(b,k){return s.value?s.value.te(b,k):!1}function Ye(b){return s.value?s.value.getLocaleMessage(b):{}}function Q(b,k){s.value&&(s.value.setLocaleMessage(b,k),c.value[b]=k)}function he(b,k){s.value&&s.value.mergeLocaleMessage(b,k)}function me(b){return s.value?s.value.getDateTimeFormat(b):{}}function de(b,k){s.value&&(s.value.setDateTimeFormat(b,k),u.value[b]=k)}function Ue(b,k){s.value&&s.value.mergeDateTimeFormat(b,k)}function Fe(b){return s.value?s.value.getNumberFormat(b):{}}function W(b,k){s.value&&(s.value.setNumberFormat(b,k),f.value[b]=k)}function Ke(b,k){s.value&&s.value.mergeNumberFormat(b,k)}const be={get id(){return s.value?s.value.id:-1},locale:L,fallbackLocale:D,messages:M,datetimeFormats:y,numberFormats:V,get inheritLocale(){return s.value?s.value.inheritLocale:o},set inheritLocale(b){s.value&&(s.value.inheritLocale=b)},get availableLocales(){return s.value?s.value.availableLocales:Object.keys(c.value)},get modifiers(){return s.value?s.value.modifiers:S},get pluralRules(){return s.value?s.value.pluralRules:P},get isGlobal(){return s.value?s.value.isGlobal:!1},get missingWarn(){return s.value?s.value.missingWarn:h},set missingWarn(b){s.value&&(s.value.missingWarn=b)},get fallbackWarn(){return s.value?s.value.fallbackWarn:m},set fallbackWarn(b){s.value&&(s.value.missingWarn=b)},get fallbackRoot(){return s.value?s.value.fallbackRoot:g},set fallbackRoot(b){s.value&&(s.value.fallbackRoot=b)},get fallbackFormat(){return s.value?s.value.fallbackFormat:x},set fallbackFormat(b){s.value&&(s.value.fallbackFormat=b)},get warnHtmlMessage(){return s.value?s.value.warnHtmlMessage:R},set warnHtmlMessage(b){s.value&&(s.value.warnHtmlMessage=b)},get escapeParameter(){return s.value?s.value.escapeParameter:v},set escapeParameter(b){s.value&&(s.value.escapeParameter=b)},t:ie,getPostTranslationHandler:B,setPostTranslationHandler:O,getMissingHandler:ee,setMissingHandler:ne,rt:$,d:ce,n:ue,tm:ge,te:we,getLocaleMessage:Ye,setLocaleMessage:Q,mergeLocaleMessage:he,getDateTimeFormat:me,setDateTimeFormat:de,mergeDateTimeFormat:Ue,getNumberFormat:Fe,setNumberFormat:W,mergeNumberFormat:Ke};function I(b){b.locale.value=a.value,b.fallbackLocale.value=l.value,Object.keys(c.value).forEach(k=>{b.mergeLocaleMessage(k,c.value[k])}),Object.keys(u.value).forEach(k=>{b.mergeDateTimeFormat(k,u.value[k])}),Object.keys(f.value).forEach(k=>{b.mergeNumberFormat(k,f.value[k])}),b.escapeParameter=v,b.fallbackFormat=x,b.fallbackRoot=g,b.fallbackWarn=m,b.missingWarn=h,b.warnHtmlMessage=R}return yd(()=>{if(n.proxy==null||n.proxy.$i18n==null)throw wt(Mt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const b=s.value=n.proxy.$i18n.__composer;e==="global"?(a.value=b.locale.value,l.value=b.fallbackLocale.value,c.value=b.messages.value,u.value=b.datetimeFormats.value,f.value=b.numberFormats.value):r&&I(b)}),be}const c1=["locale","fallbackLocale","availableLocales"],Fh=["t","rt","d","n","tm","te"];function u1(n,e){const t=Object.create(null);return c1.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s)throw wt(Mt.UNEXPECTED_ERROR);const o=Kt(s.value)?{get(){return s.value.value},set(a){s.value.value=a}}:{get(){return s.get&&s.get()}};Object.defineProperty(t,r,o)}),n.config.globalProperties.$i18n=t,Fh.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s||!s.value)throw wt(Mt.UNEXPECTED_ERROR);Object.defineProperty(n.config.globalProperties,`$${r}`,s)}),()=>{delete n.config.globalProperties.$i18n,Fh.forEach(r=>{delete n.config.globalProperties[`$${r}`]})}}HA();__INTLIFY_JIT_COMPILATION__?_h(DA):_h(NA);TA(sA);bA(Np);if(__INTLIFY_PROD_DEVTOOLS__){const n=$n();n.__INTLIFY__=!0,pA(n.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const f1={home:"Welcome",projects:"Projects",about:"About",contacts:"Contacts",menu:"Menu"},h1={based:"BASED IN MOLDOVA",welcome_1:"WELCOME TO",welcome_2:"MY PORTFOLIO 2024",button:"OPEN TO WORK",specialize:"SPECIALIZING IN INTERACTIVE WEB EXPERIENCES"},d1={title:"ABOUT ME",title_desc:"Hi, I'm a 21 year old student from Moldova, beginning my journey in the IT industry. I'm enthusiastic and a quick learner, always open for new experiences and challenges to refine and advance my skills.",exp:"PROFESSIONAL EXPERIENCE",exp_desc:"WHILE WORKING AT TWEENYONE SRL, I DEVELOPED WEBPAGES TO MEET THE REQUESTS OF EACH CLIENT, WHILE ALSO IMPLEMENTING RESPONSIVE DESIGN.",education:"EDUCATION",education_web_1:"ADMINISTRATION OF WEB APPLICATIONS",education_web_2:"CENTER OF EXCELLENCE IN ECONOMICS AND FINANCE",education_utm_1:"INFORMATIONAL TECHNOLOGIES",education_utm_2:"TECHNICAL UNIVERSITY OF MOLDOVA",city:"CHISINAU"},p1={selected:"Selected Works",visit:"Visit Site",year:"Year",role:"Role",tehnologies:"Tehnologies"},m1={title:"Skills & Tehnologies",button_show:"Show",button_hide:"Hide",button:"Stack"},_1={title:"LET'S WORK TOGETHER",connect:"CONNECT ON"},g1={nav:f1,header:h1,about:d1,card:p1,stack:m1,footer:_1},v1={home:"Acasă",projects:"Proiecte",about:"Despre",contacts:"Contacte",menu:"Meniu"},x1={based:"SITUAT ÎN MOLDOVA",welcome_1:"BINE AȚI VENIT",welcome_2:"PORTOFOLIUL MEU 2024",button:"DISPONIBIL",specialize:"SPECIALIZAT ÎN EXPERIENȚE WEB INTERACTIVE"},E1={title:"DESPRE MINE",title_desc:"Salut, sunt un student din Moldova și am 21 de ani, și-mi încep călătoria în industria IT. Sunt entuziast și sunt mereu deschis pentru noi experiențe și provocări pentru a-mi perfecționa și avansa abilitățile mele.",exp:"EXPERIENȚĂ PROFESIONALĂ",exp_desc:"Lucrând la Tweenyone SRL, am dezvoltat pagini web pentru a satisface cerințele fiecărui client, implementând în același timp un design responsive.",education:"EDUCAȚIE",education_web_1:"ADMINISTRAREA APLICAȚIILOR WEB",education_web_2:"CENTRU DE EXCELENȚĂ ÎN ECONOMIE ȘI FINANȚE",education_utm_1:"TEHNOLOGII INFORMAȚIONALE",education_utm_2:"UNIVERSITATEA TEHNICĂ A MOLDOVEI",city:"CHIȘINĂU"},S1={selected:"Proiectele selectate",visit:"Vizitează",year:"Anul",role:"Rolul",tehnologies:"Tehnologii"},M1={title:"Abilități & Tehnologii",button_show:"Arată",button_hide:"Ascunde",button:"Stack"},y1={title:"HAI SĂ LUCRĂM ÎMPREUNĂ",connect:"CONNECTEAZĂ-TE"},T1={nav:v1,header:x1,about:E1,card:S1,stack:M1,footer:y1},b1=e1({legacy:!1,locale:"en",messages:{en:g1,ro:T1}});Rg(hb).use(b1).mount("#app");
