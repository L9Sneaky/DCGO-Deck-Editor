import{j as a,r as w,s as k,u as Nt,a as ye,b as jc,g as Ac,R as Tc,c as Ic,d as Ie,e as Di,f as ji,h as Vs,i as Mc,B as vs,k as Kt,l as On,m as ln,n as ue,o as Ai,p as Ti,q as gn,t as Rc,v as ta,w as na,x as Bc,y as zc,T as yo,z as Lc,A as Y,C as Nc,D as ia,E as ks,F as Xe,G as gt,H as nn,I as Gs,J as Fc,K as mi,M as Us,L as sa,N as Ws,O as $c,P as Vc,Q as qs,S as Ii,U as Gc,V as oa,W as Yn,X as Uc,Y as bo,Z as ra,_ as Wc,$ as ae,a0 as he,a1 as U,a2 as vo,a3 as Bn,a4 as qc,a5 as Ft,a6 as Hs,a7 as Hc,a8 as Ys,a9 as Yc,aa as Mi,ab as Qc,ac as yn,ad as Jc,ae as gi,af as Kc,ag as Xc,ah as Zc,ai as el,aj as aa,ak as ca,al as tl,am as ko,an as nl,ao as il,ap as sl,aq as ol,ar as rl,as as al,at as Qs,au as cl,av as ll,aw as dl,ax as ul,ay as la,az as da,aA as ua,aB as ha,aC as fa,aD as pa,aE as yi,aF as Ri,aG as Js,aH as xa,aI as ma,aJ as ga,aK as ya,aL as ba,aM as va,aN as ka,aO as wa,aP as Sa,aQ as Ca,aR as Ea,aS as _a,aT as Oa,aU as Jn,aV as hl,aW as fl,aX as Pa,aY as Ks,aZ as pl,a_ as xl,a$ as ml,b0 as Xs,b1 as gl,b2 as yl,b3 as bl,b4 as vl,b5 as kl,b6 as wl,b7 as Sl,b8 as Cl,b9 as El,ba as Kn,bb as _l,bc as Ol,bd as Da,be as Pl,bf as nt,bg as Dl,bh as jl}from"./index-BFLqDyKe.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const Xt="generated",Al="pointerdown",Tl="pointerup",ws="pointerleave",Il="pointerout",on="pointermove",Ml="touchstart",wo="touchend",Rl="touchmove",Bl="touchcancel",zl="resize",Ll="visibilitychange",ot="tsParticles - Error",Mt=100,Re=.5,$e=1e3,Fe={x:0,y:0,z:0},Xn={a:1,b:0,c:0,d:1},Pn="random",fi="mid",Ve=2,Nl=Math.PI*Ve,Fi=60,ja="true",So="false",$i="canvas",Co=0,Ot=2,Eo=4,Fl=1,_o=1,Oo=1,$l=4,Aa=1,pi=255,Zt=360,Ss=100,Cs=100,Po=0,Es=0,Vl=60,Gl=0,bi=.25,Do=Re+bi,jo=0,Ul=1,Wl=0,ql=0,Hl=1,Zs=1,Yl=1,Ao=1,vi=0,Ta=1,Ql=0,Jl=120,Kl=0,Xl=0,Zl=1e4,e0=0,t0=1,ki=0,Ia=1,n0=1,i0=0,To=1,s0=0,o0=0,Io=-bi,Mo=1.5,Ro=0,r0=1,a0=0,_s=0,Ma=1,c0=1,wi=1,l0=500,Bo=50,d0=0,Os=1,Ra=0,zo=1,u0=0,Vt=255,Vi=3,Gi=6,h0=1,f0=1,p0=0,x0=0,m0=0,g0=0;var Ne;(function(t){t.bottom="bottom",t.bottomLeft="bottom-left",t.bottomRight="bottom-right",t.left="left",t.none="none",t.right="right",t.top="top",t.topLeft="top-left",t.topRight="top-right",t.outside="outside",t.inside="inside"})(Ne||(Ne={}));function Ba(t){return typeof t=="boolean"}function zt(t){return typeof t=="string"}function Lt(t){return typeof t=="number"}function bn(t){return typeof t=="object"&&t!==null}function yt(t){return Array.isArray(t)}function z(t){return t==null}class Ke{constructor(e,n,i){if(this._updateFromAngle=(s,o)=>{this.x=Math.cos(s)*o,this.y=Math.sin(s)*o},!Lt(e)&&e){this.x=e.x,this.y=e.y;const s=e;this.z=s.z?s.z:Fe.z}else if(e!==void 0&&n!==void 0)this.x=e,this.y=n,this.z=i??Fe.z;else throw new Error(`${ot} Vector3d not initialized correctly`)}static get origin(){return Ke.create(Fe.x,Fe.y,Fe.z)}get angle(){return Math.atan2(this.y,this.x)}set angle(e){this._updateFromAngle(e,this.length)}get length(){return Math.sqrt(this.getLengthSq())}set length(e){this._updateFromAngle(this.angle,e)}static clone(e){return Ke.create(e.x,e.y,e.z)}static create(e,n,i){return new Ke(e,n,i)}add(e){return Ke.create(this.x+e.x,this.y+e.y,this.z+e.z)}addTo(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}copy(){return Ke.clone(this)}distanceTo(e){return this.sub(e).length}distanceToSq(e){return this.sub(e).getLengthSq()}div(e){return Ke.create(this.x/e,this.y/e,this.z/e)}divTo(e){this.x/=e,this.y/=e,this.z/=e}getLengthSq(){return this.x**Ot+this.y**Ot}mult(e){return Ke.create(this.x*e,this.y*e,this.z*e)}multTo(e){this.x*=e,this.y*=e,this.z*=e}normalize(){const e=this.length;e!=ki&&this.multTo(Aa/e)}rotate(e){return Ke.create(this.x*Math.cos(e)-this.y*Math.sin(e),this.x*Math.sin(e)+this.y*Math.cos(e),Fe.z)}setTo(e){this.x=e.x,this.y=e.y;const n=e;this.z=n.z?n.z:Fe.z}sub(e){return Ke.create(this.x-e.x,this.y-e.y,this.z-e.z)}subFrom(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}}class Le extends Ke{constructor(e,n){super(e,n,Fe.z)}static get origin(){return Le.create(Fe.x,Fe.y)}static clone(e){return Le.create(e.x,e.y)}static create(e,n){return new Le(e,n)}}let y0=Math.random;const za={nextFrame:t=>requestAnimationFrame(t),cancel:t=>cancelAnimationFrame(t)};function ke(){return rt(y0(),0,1-Number.EPSILON)}function b0(t){return za.nextFrame(t)}function v0(t){za.cancel(t)}function rt(t,e,n){return Math.min(Math.max(t,e),n)}function Ui(t,e,n,i){return Math.floor((t*n+e*i)/(n+i))}function Ze(t){const e=mt(t),n=0;let i=Bi(t);return e===i&&(i=n),ke()*(e-i)+i}function q(t){return Lt(t)?t:Ze(t)}function Bi(t){return Lt(t)?t:t.min}function mt(t){return Lt(t)?t:t.max}function me(t,e){if(t===e||e===void 0&&Lt(t))return t;const n=Bi(t),i=mt(t);return e!==void 0?{min:Math.min(n,e),max:Math.max(i,e)}:me(n,i)}function He(t,e){const n=t.x-e.x,i=t.y-e.y,s=2;return{dx:n,dy:i,distance:Math.sqrt(n**s+i**s)}}function et(t,e){return He(t,e).distance}function Bt(t){return t*Math.PI/180}function k0(t,e,n){if(Lt(t))return Bt(t);switch(t){case Ne.top:return-Math.PI*Re;case Ne.topRight:return-Math.PI*bi;case Ne.right:return Gl;case Ne.bottomRight:return Math.PI*bi;case Ne.bottom:return Math.PI*Re;case Ne.bottomLeft:return Math.PI*Do;case Ne.left:return Math.PI;case Ne.topLeft:return-Math.PI*Do;case Ne.inside:return Math.atan2(n.y-e.y,n.x-e.x);case Ne.outside:return Math.atan2(e.y-n.y,e.x-n.x);default:return ke()*Nl}}function w0(t){const e=Le.origin;return e.length=1,e.angle=t,e}function Lo(t,e,n,i){return Le.create(t.x*(n-i)/(n+i)+e.x*Ve*i/(n+i),t.y)}function S0(t){return{x:t.position?.x??ke()*t.size.width,y:t.position?.y??ke()*t.size.height}}function La(t){return t?t.endsWith("%")?parseFloat(t)/Mt:parseFloat(t):1}var en;(function(t){t.auto="auto",t.increase="increase",t.decrease="decrease",t.random="random"})(en||(en={}));var Ae;(function(t){t.increasing="increasing",t.decreasing="decreasing"})(Ae||(Ae={}));var rn;(function(t){t.none="none",t.max="max",t.min="min"})(rn||(rn={}));var de;(function(t){t.bottom="bottom",t.left="left",t.right="right",t.top="top"})(de||(de={}));var Dn;(function(t){t.precise="precise",t.percent="percent"})(Dn||(Dn={}));var wn;(function(t){t.max="max",t.min="min",t.random="random"})(wn||(wn={}));const C0={debug:console.debug,error:console.error,info:console.info,log:console.log,verbose:console.log,warning:console.warn};function an(){return C0}function E0(t){const e=new Map;return(...n)=>{const i=JSON.stringify(n);if(e.has(i))return e.get(i);const s=t(...n);return e.set(i,s),s}}function No(t){const e={bounced:!1},{pSide:n,pOtherSide:i,rectSide:s,rectOtherSide:o,velocity:r,factor:c}=t;return i.min<o.min||i.min>o.max||i.max<o.min||i.max>o.max||(n.max>=s.min&&n.max<=(s.max+s.min)*Re&&r>jo||n.min<=s.max&&n.min>(s.max+s.min)*Re&&r<jo)&&(e.velocity=r*-c,e.bounced=!0),e}function _0(t,e){const n=tt(e,i=>t.matches(i));return yt(n)?n.some(i=>i):n}function cn(){return typeof window>"u"||!window||typeof window.document>"u"||!window.document}function O0(){return!cn()&&typeof matchMedia<"u"}function Na(t){if(O0())return matchMedia(t)}function P0(t){if(!(cn()||typeof IntersectionObserver>"u"))return new IntersectionObserver(t)}function D0(t){if(!(cn()||typeof MutationObserver>"u"))return new MutationObserver(t)}function De(t,e){return t===e||yt(e)&&e.indexOf(t)>-1}async function Fo(t,e){try{await document.fonts.load(`${e??"400"} 36px '${t??"Verdana"}'`)}catch{}}function j0(t){return Math.floor(ke()*t.length)}function zi(t,e,n=!0){return t[e!==void 0&&n?e%t.length:j0(t)]}function eo(t,e,n,i,s){return A0(Qn(t,i??0),e,n,s)}function A0(t,e,n,i){let s=!0;return(!i||i===de.bottom)&&(s=t.top<e.height+n.x),s&&(!i||i===de.left)&&(s=t.right>n.x),s&&(!i||i===de.right)&&(s=t.left<e.width+n.y),s&&(!i||i===de.top)&&(s=t.bottom>n.y),s}function Qn(t,e){return{bottom:t.y+e,left:t.x-e,right:t.x+e,top:t.y-e}}function Ue(t,...e){for(const n of e){if(n==null)continue;if(!bn(n)){t=n;continue}const i=Array.isArray(n);i&&(bn(t)||!t||!Array.isArray(t))?t=[]:!i&&(bn(t)||!t||Array.isArray(t))&&(t={});for(const s in n){if(s==="__proto__")continue;const o=n,r=o[s],c=t;c[s]=bn(r)&&Array.isArray(r)?r.map(l=>Ue(c[s],l)):Ue(c[s],r)}}return t}function to(t,e){return!!Va(e,n=>n.enable&&De(t,n.mode))}function no(t,e,n){tt(e,i=>{const s=i.mode;i.enable&&De(t,s)&&T0(i,n)})}function T0(t,e){const n=t.selectors;tt(n,i=>{e(i,t)})}function Fa(t,e){if(!(!e||!t))return Va(t,n=>_0(e,n.selectors))}function Ps(t){return{position:t.getPosition(),radius:t.getRadius(),mass:t.getMass(),velocity:t.velocity,factor:Le.create(q(t.options.bounce.horizontal.value),q(t.options.bounce.vertical.value))}}function $a(t,e){const{x:n,y:i}=t.velocity.sub(e.velocity),[s,o]=[t.position,e.position],{dx:r,dy:c}=He(o,s);if(n*r+i*c<0)return;const u=-Math.atan2(c,r),d=t.mass,h=e.mass,f=t.velocity.rotate(u),p=e.velocity.rotate(u),x=Lo(f,p,d,h),y=Lo(p,f,d,h),m=x.rotate(-u),g=y.rotate(-u);t.velocity.x=m.x*t.factor.x,t.velocity.y=m.y*t.factor.y,e.velocity.x=g.x*e.factor.x,e.velocity.y=g.y*e.factor.y}function I0(t,e){const n=t.getPosition(),i=t.getRadius(),s=Qn(n,i),o=t.options.bounce,r=No({pSide:{min:s.left,max:s.right},pOtherSide:{min:s.top,max:s.bottom},rectSide:{min:e.left,max:e.right},rectOtherSide:{min:e.top,max:e.bottom},velocity:t.velocity.x,factor:q(o.horizontal.value)});r.bounced&&(r.velocity!==void 0&&(t.velocity.x=r.velocity),r.position!==void 0&&(t.position.x=r.position));const c=No({pSide:{min:s.top,max:s.bottom},pOtherSide:{min:s.left,max:s.right},rectSide:{min:e.top,max:e.bottom},rectOtherSide:{min:e.left,max:e.right},velocity:t.velocity.y,factor:q(o.vertical.value)});c.bounced&&(c.velocity!==void 0&&(t.velocity.y=c.velocity),c.position!==void 0&&(t.position.y=c.position))}function tt(t,e){return yt(t)?t.map((i,s)=>e(i,s)):e(t,0)}function st(t,e,n){return yt(t)?zi(t,e,n):t}function Va(t,e){return yt(t)?t.find((i,s)=>e(i,s)):e(t,0)?t:void 0}function Ga(t,e){const n=t.value,i=t.animation,s={delayTime:q(i.delay)*$e,enable:i.enable,value:q(t.value)*e,max:mt(n)*e,min:Bi(n)*e,loops:0,maxLoops:q(i.count),time:0},o=1;if(i.enable){switch(s.decay=o-q(i.decay),i.mode){case en.increase:s.status=Ae.increasing;break;case en.decrease:s.status=Ae.decreasing;break;case en.random:s.status=ke()>=Re?Ae.increasing:Ae.decreasing;break}const r=i.mode===en.auto;switch(i.startValue){case wn.min:s.value=s.min,r&&(s.status=Ae.increasing);break;case wn.max:s.value=s.max,r&&(s.status=Ae.decreasing);break;case wn.random:default:s.value=Ze(s),r&&(s.status=ke()>=Re?Ae.increasing:Ae.decreasing);break}}return s.initialValue=s.value,s}function M0(t,e){if(!(t.mode===Dn.percent)){const{mode:s,...o}=t;return o}return"x"in t?{x:t.x/Mt*e.width,y:t.y/Mt*e.height}:{width:t.width/Mt*e.width,height:t.height/Mt*e.height}}function Ua(t,e){return M0(t,e)}function R0(t,e,n,i,s){switch(e){case rn.max:n>=s&&t.destroy();break;case rn.min:n<=i&&t.destroy();break}}function io(t,e,n,i,s){if(t.destroyed||!e||!e.enable||(e.maxLoops??0)>0&&(e.loops??0)>(e.maxLoops??0))return;const d=(e.velocity??0)*s.factor,h=e.min,f=e.max,p=e.decay??1;if(e.time||(e.time=0),(e.delayTime??0)>0&&e.time<(e.delayTime??0)&&(e.time+=s.value),!((e.delayTime??0)>0&&e.time<(e.delayTime??0))){switch(e.status){case Ae.increasing:e.value>=f?(n?e.status=Ae.decreasing:e.value-=f,e.loops||(e.loops=0),e.loops++):e.value+=d;break;case Ae.decreasing:e.value<=h?(n?e.status=Ae.increasing:e.value+=f,e.loops||(e.loops=0),e.loops++):e.value-=d}e.velocity&&p!==1&&(e.velocity*=p),R0(t,i,e.value,h,f),t.destroyed||(e.value=rt(e.value,h,f))}}function B0(t){const e=document.createElement("div").style;if(!t)return e;for(const n in t){const i=t[n];if(!Object.prototype.hasOwnProperty.call(t,n)||z(i))continue;const s=t.getPropertyValue?.(i);if(!s)continue;const o=t.getPropertyPriority?.(i);o?e.setProperty?.(i,s,o):e.setProperty?.(i,s)}return e}function z0(t){const e=document.createElement("div").style,n=10,i={width:"100%",height:"100%",margin:"0",padding:"0",borderWidth:"0",position:"fixed",zIndex:t.toString(n),"z-index":t.toString(n),top:"0",left:"0"};for(const s in i){const o=i[s];e.setProperty(s,o)}return e}const L0=E0(z0);var Ds;(function(t){t.darken="darken",t.enlighten="enlighten"})(Ds||(Ds={}));function N0(t,e){if(e){for(const n of t.colorManagers.values())if(e.startsWith(n.stringPrefix))return n.parseString(e)}}function ht(t,e,n,i=!0){if(!e)return;const s=zt(e)?{value:e}:e;if(zt(s.value))return Wa(t,s.value,n,i);if(yt(s.value))return ht(t,{value:zi(s.value,n,i)});for(const o of t.colorManagers.values()){const r=o.handleRangeColor(s);if(r)return r}}function Wa(t,e,n,i=!0){if(!e)return;const s=zt(e)?{value:e}:e;if(zt(s.value))return s.value===Pn?Ha():F0(t,s.value);if(yt(s.value))return Wa(t,{value:zi(s.value,n,i)});for(const o of t.colorManagers.values()){const r=o.handleColor(s);if(r)return r}}function Un(t,e,n,i=!0){const s=ht(t,e,n,i);return s?qa(s):void 0}function qa(t){const e=t.r/pi,n=t.g/pi,i=t.b/pi,s=Math.max(e,n,i),o=Math.min(e,n,i),r={h:Po,l:(s+o)*Re,s:Es};return s!==o&&(r.s=r.l<Re?(s-o)/(s+o):(s-o)/(Ve-s-o),r.h=e===s?(n-i)/(s-o):r.h=n===s?Ve+(i-e)/(s-o):Ve*Ve+(e-n)/(s-o)),r.l*=Cs,r.s*=Ss,r.h*=Vl,r.h<Po&&(r.h+=Zt),r.h>=Zt&&(r.h-=Zt),r}function F0(t,e){return N0(t,e)}function jn(t){const e=(t.h%Zt+Zt)%Zt,n=Math.max(Es,Math.min(Ss,t.s)),i=Math.max(u0,Math.min(Cs,t.l)),s=e/Zt,o=n/Ss,r=i/Cs;if(n===Es){const x=Math.round(r*Vt);return{r:x,g:x,b:x}}const c=(x,y,m)=>{if(m<0&&m++,m>1&&m--,m*Gi<1)return x+(y-x)*Gi*m;if(m*Ve<1)return y;if(m*Vi<1*Ve){const S=Ve/Vi;return x+(y-x)*(S-m)*Gi}return x},l=r<Re?r*(h0+o):r+o-r*o,u=Ve*r-l,d=f0/Vi,h=Math.min(Vt,Vt*c(u,l,s+d)),f=Math.min(Vt,Vt*c(u,l,s)),p=Math.min(Vt,Vt*c(u,l,s-d));return{r:Math.round(h),g:Math.round(f),b:Math.round(p)}}function $0(t){const e=jn(t);return{a:t.a,b:e.b,g:e.g,r:e.r}}function Ha(t){const e=p0,n=pi+Os;return{b:Math.floor(Ze(me(e,n))),g:Math.floor(Ze(me(e,n))),r:Math.floor(Ze(me(e,n)))}}function Dt(t,e){return`rgba(${t.r}, ${t.g}, ${t.b}, ${e??Zs})`}function Wn(t,e){return`hsla(${t.h}, ${t.s}%, ${t.l}%, ${e??Zs})`}function so(t,e,n,i){let s=t,o=e;return s.r===void 0&&(s=jn(t)),o.r===void 0&&(o=jn(e)),{b:Ui(s.b,o.b,n,i),g:Ui(s.g,o.g,n,i),r:Ui(s.r,o.r,n,i)}}function js(t,e,n){if(n===Pn)return Ha();if(n===fi){const i=t.getFillColor()??t.getStrokeColor(),s=e?.getFillColor()??e?.getStrokeColor();if(i&&s&&e)return so(i,s,t.getRadius(),e.getRadius());{const o=i??s;if(o)return jn(o)}}else return n}function Ya(t,e,n,i){const s=zt(e)?e:e.value;return s===Pn?i?ht(t,{value:s}):n?Pn:fi:s===fi?fi:ht(t,{value:s})}function $o(t){return t!==void 0?{h:t.h.value,s:t.s.value,l:t.l.value}:void 0}function Qa(t,e,n){const i={h:{enable:!1,value:t.h},s:{enable:!1,value:t.s},l:{enable:!1,value:t.l}};return e&&(Wi(i.h,e.h,n),Wi(i.s,e.s,n),Wi(i.l,e.l,n)),i}function Wi(t,e,n){t.enable=e.enable,t.enable?(t.velocity=q(e.speed)/Mt*n,t.decay=Ia-q(e.decay),t.status=Ae.increasing,t.loops=m0,t.maxLoops=q(e.count),t.time=g0,t.delayTime=q(e.delay)*$e,e.sync||(t.velocity*=ke(),t.value*=ke()),t.initialValue=t.value,t.offset=me(e.offset)):t.velocity=x0}function qi(t,e,n,i){if(!t||!t.enable||(t.maxLoops??0)>0&&(t.loops??0)>(t.maxLoops??0)||(t.time||(t.time=0),(t.delayTime??0)>0&&t.time<(t.delayTime??0)&&(t.time+=i.value),(t.delayTime??0)>0&&t.time<(t.delayTime??0)))return;const d=t.offset?Ze(t.offset):0,h=(t.velocity??0)*i.factor+d*3.6,f=t.decay??1,p=mt(e),x=Bi(e);!n||t.status===Ae.increasing?(t.value+=h,t.value>p&&(t.loops||(t.loops=0),t.loops++,n?t.status=Ae.decreasing:t.value-=p)):(t.value-=h,t.value<0&&(t.loops||(t.loops=0),t.loops++,t.status=Ae.increasing)),t.velocity&&f!==1&&(t.velocity*=f),t.value=rt(t.value,x,p)}function Ja(t,e){if(!t)return;const{h:n,s:i,l:s}=t,o={h:{min:0,max:360},s:{min:0,max:100},l:{min:0,max:100}};n&&qi(n,o.h,!1,e),i&&qi(i,o.s,!0,e),s&&qi(s,o.l,!0,e)}function Gn(t,e,n){t.beginPath(),t.moveTo(e.x,e.y),t.lineTo(n.x,n.y),t.closePath()}function V0(t,e,n){t.fillStyle=n??"rgba(0,0,0,0)",t.fillRect(Fe.x,Fe.y,e.width,e.height)}function G0(t,e,n,i){n&&(t.globalAlpha=i,t.drawImage(n,Fe.x,Fe.y,e.width,e.height),t.globalAlpha=1)}function Hi(t,e){t.clearRect(Fe.x,Fe.y,e.width,e.height)}function U0(t){const{container:e,context:n,particle:i,delta:s,colorStyles:o,backgroundMask:r,composite:c,radius:l,opacity:u,shadow:d,transform:h}=t,f=i.getPosition(),p=i.rotation+(i.pathRotation?i.velocity.angle:d0),x={sin:Math.sin(p),cos:Math.cos(p)},y=!!p,m={a:x.cos*(h.a??Xn.a),b:y?x.sin*(h.b??Os):h.b??Xn.b,c:y?-x.sin*(h.c??Os):h.c??Xn.c,d:x.cos*(h.d??Xn.d)};n.setTransform(m.a,m.b,m.c,m.d,f.x,f.y),r&&(n.globalCompositeOperation=c);const g=i.shadowColor;d.enable&&g&&(n.shadowBlur=d.blur,n.shadowColor=Dt(g),n.shadowOffsetX=d.offset.x,n.shadowOffsetY=d.offset.y),o.fill&&(n.fillStyle=o.fill);const v=i.strokeWidth??Ra;n.lineWidth=v,o.stroke&&(n.strokeStyle=o.stroke);const S={container:e,context:n,particle:i,radius:l,opacity:u,delta:s,transformData:m,strokeWidth:v};q0(S),H0(S),W0(S),n.globalCompositeOperation="source-over",n.resetTransform()}function W0(t){const{container:e,context:n,particle:i,radius:s,opacity:o,delta:r,transformData:c}=t;if(!i.effect)return;const l=e.effectDrawers.get(i.effect);l&&l.draw({context:n,particle:i,radius:s,opacity:o,delta:r,pixelRatio:e.retina.pixelRatio,transformData:{...c}})}function q0(t){const{container:e,context:n,particle:i,radius:s,opacity:o,delta:r,strokeWidth:c,transformData:l}=t;if(!i.shape)return;const u=e.shapeDrawers.get(i.shape);u&&(n.beginPath(),u.draw({context:n,particle:i,radius:s,opacity:o,delta:r,pixelRatio:e.retina.pixelRatio,transformData:{...l}}),i.shapeClose&&n.closePath(),c>Ra&&n.stroke(),i.shapeFill&&n.fill())}function H0(t){const{container:e,context:n,particle:i,radius:s,opacity:o,delta:r,transformData:c}=t;if(!i.shape)return;const l=e.shapeDrawers.get(i.shape);l?.afterDraw&&l.afterDraw({context:n,particle:i,radius:s,opacity:o,delta:r,pixelRatio:e.retina.pixelRatio,transformData:{...c}})}function Y0(t,e,n){e.draw&&e.draw(t,n)}function Q0(t,e,n,i){e.drawParticle&&e.drawParticle(t,n,i)}function J0(t,e,n){return{h:t.h,s:t.s,l:t.l+(e===Ds.darken?-zo:zo)*n}}function K0(t,e,n){const i=e[n];i!==void 0&&(t[n]=(t[n]??Ul)*i)}function Vo(t,e,n=!1){if(!e)return;const i=t;if(!i)return;const s=i.style;if(!s)return;const o=new Set;for(const r in s)Object.prototype.hasOwnProperty.call(s,r)&&o.add(s[r]);for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.add(e[r]);for(const r of o){const c=e.getPropertyValue(r);c?s.setProperty(r,c,n?"important":""):s.removeProperty(r)}}class X0{constructor(e,n){this.container=e,this._applyPostDrawUpdaters=o=>{for(const r of this._postDrawUpdaters)r.afterDraw?.(o)},this._applyPreDrawUpdaters=(o,r,c,l,u,d)=>{for(const h of this._preDrawUpdaters){if(h.getColorStyles){const{fill:f,stroke:p}=h.getColorStyles(r,o,c,l);f&&(u.fill=f),p&&(u.stroke=p)}if(h.getTransformValues){const f=h.getTransformValues(r);for(const p in f)K0(d,f,p)}h.beforeDraw?.(r)}},this._applyResizePlugins=()=>{for(const o of this._resizePlugins)o.resize?.()},this._getPluginParticleColors=o=>{let r,c;for(const l of this._colorPlugins)if(!r&&l.particleFillColor&&(r=Un(this._engine,l.particleFillColor(o))),!c&&l.particleStrokeColor&&(c=Un(this._engine,l.particleStrokeColor(o))),r&&c)break;return[r,c]},this._initCover=async()=>{const o=this.container.actualOptions,r=o.backgroundMask.cover,c=r.color;if(c){const l=ht(this._engine,c);if(l){const u={...l,a:r.opacity};this._coverColorStyle=Dt(u,u.a)}}else await new Promise((l,u)=>{if(!r.image)return;const d=document.createElement("img");d.addEventListener("load",()=>{this._coverImage={image:d,opacity:r.opacity},l()}),d.addEventListener("error",h=>{u(h.error)}),d.src=r.image})},this._initStyle=()=>{const o=this.element,r=this.container.actualOptions;if(o){this._fullScreen?this._setFullScreenStyle():this._resetOriginalStyle();for(const c in r.style){if(!c||!r.style||!Object.prototype.hasOwnProperty.call(r.style,c))continue;const l=r.style[c];l&&o.style.setProperty(c,l,"important")}}},this._initTrail=async()=>{const o=this.container.actualOptions,r=o.particles.move.trail,c=r.fill;if(!r.enable)return;const l=Aa/r.length;if(c.color){const u=ht(this._engine,c.color);if(!u)return;this._trailFill={color:{...u},opacity:l}}else await new Promise((u,d)=>{if(!c.image)return;const h=document.createElement("img");h.addEventListener("load",()=>{this._trailFill={image:h,opacity:l},u()}),h.addEventListener("error",f=>{d(f.error)}),h.src=c.image})},this._paintBase=o=>{this.draw(r=>V0(r,this.size,o))},this._paintImage=(o,r)=>{this.draw(c=>G0(c,this.size,o,r))},this._repairStyle=()=>{const o=this.element;if(!o)return;this._safeMutationObserver(c=>c.disconnect()),this._initStyle(),this.initBackground();const r=this._pointerEvents;o.style.pointerEvents=r,o.setAttribute("pointer-events",r),this._safeMutationObserver(c=>{!o||!(o instanceof Node)||c.observe(o,{attributes:!0})})},this._resetOriginalStyle=()=>{const o=this.element,r=this._originalStyle;!o||!r||Vo(o,r,!0)},this._safeMutationObserver=o=>{this._mutationObserver&&o(this._mutationObserver)},this._setFullScreenStyle=()=>{const o=this.element;o&&Vo(o,L0(this.container.actualOptions.fullScreen.zIndex),!0)},this._engine=n,this._standardSize={height:0,width:0};const i=e.retina.pixelRatio,s=this._standardSize;this.size={height:s.height*i,width:s.width*i},this._context=null,this._generated=!1,this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[],this._pointerEvents="none"}get _fullScreen(){return this.container.actualOptions.fullScreen.enable}clear(){const e=this.container.actualOptions,n=e.particles.move.trail,i=this._trailFill;e.backgroundMask.enable?this.paint():n.enable&&n.length>ql&&i?i.color?this._paintBase(Dt(i.color,i.opacity)):i.image&&this._paintImage(i.image,i.opacity):e.clear&&this.draw(s=>{Hi(s,this.size)})}destroy(){this.stop(),this._generated?(this.element?.remove(),this.element=void 0):this._resetOriginalStyle(),this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[]}draw(e){const n=this._context;if(n)return e(n)}drawAsync(e){const n=this._context;if(n)return e(n)}drawParticle(e,n){if(e.spawning||e.destroyed)return;const i=e.getRadius();if(i<=Wl)return;const s=e.getFillColor(),o=e.getStrokeColor()??s;let[r,c]=this._getPluginParticleColors(e);r||(r=s),c||(c=o),!(!r&&!c)&&this.draw(l=>{const u=this.container,d=u.actualOptions,h=e.options.zIndex,f=Hl-e.zIndexFactor,p=f**h.opacityRate,x=e.bubble.opacity??e.opacity?.value??Zs,y=e.strokeOpacity??x,m=x*p,g=y*p,v={},S={fill:r?Wn(r,m):void 0};S.stroke=c?Wn(c,g):S.fill,this._applyPreDrawUpdaters(l,e,i,m,S,v),U0({container:u,context:l,particle:e,delta:n,colorStyles:S,backgroundMask:d.backgroundMask.enable,composite:d.backgroundMask.composite,radius:i*f**h.sizeRate,opacity:m,shadow:e.options.shadow,transform:v}),this._applyPostDrawUpdaters(e)})}drawParticlePlugin(e,n,i){this.draw(s=>Q0(s,e,n,i))}drawPlugin(e,n){this.draw(i=>Y0(i,e,n))}async init(){this._safeMutationObserver(e=>e.disconnect()),this._mutationObserver=D0(e=>{for(const n of e)n.type==="attributes"&&n.attributeName==="style"&&this._repairStyle()}),this.resize(),this._initStyle(),await this._initCover();try{await this._initTrail()}catch(e){an().error(e)}this.initBackground(),this._safeMutationObserver(e=>{!this.element||!(this.element instanceof Node)||e.observe(this.element,{attributes:!0})}),this.initUpdaters(),this.initPlugins(),this.paint()}initBackground(){const e=this.container.actualOptions,n=e.background,i=this.element;if(!i)return;const s=i.style;if(s){if(n.color){const o=ht(this._engine,n.color);s.backgroundColor=o?Dt(o,n.opacity):""}else s.backgroundColor="";s.backgroundImage=n.image||"",s.backgroundPosition=n.position||"",s.backgroundRepeat=n.repeat||"",s.backgroundSize=n.size||""}}initPlugins(){this._resizePlugins=[];for(const e of this.container.plugins.values())e.resize&&this._resizePlugins.push(e),(e.particleFillColor??e.particleStrokeColor)&&this._colorPlugins.push(e)}initUpdaters(){this._preDrawUpdaters=[],this._postDrawUpdaters=[];for(const e of this.container.particles.updaters)e.afterDraw&&this._postDrawUpdaters.push(e),(e.getColorStyles??e.getTransformValues??e.beforeDraw)&&this._preDrawUpdaters.push(e)}loadCanvas(e){this._generated&&this.element&&this.element.remove(),this._generated=e.dataset&&Xt in e.dataset?e.dataset[Xt]==="true":this._generated,this.element=e,this.element.ariaHidden="true",this._originalStyle=B0(this.element.style);const n=this._standardSize;n.height=e.offsetHeight,n.width=e.offsetWidth;const i=this.container.retina.pixelRatio,s=this.size;e.height=s.height=n.height*i,e.width=s.width=n.width*i,this._context=this.element.getContext("2d"),this._safeMutationObserver(o=>o.disconnect()),this.container.retina.init(),this.initBackground(),this._safeMutationObserver(o=>{!this.element||!(this.element instanceof Node)||o.observe(this.element,{attributes:!0})})}paint(){const e=this.container.actualOptions;this.draw(n=>{e.backgroundMask.enable&&e.backgroundMask.cover?(Hi(n,this.size),this._coverImage?this._paintImage(this._coverImage.image,this._coverImage.opacity):this._coverColorStyle?this._paintBase(this._coverColorStyle):this._paintBase()):this._paintBase()})}resize(){if(!this.element)return!1;const e=this.container,n=e.canvas._standardSize,i={width:this.element.offsetWidth,height:this.element.offsetHeight},s=e.retina.pixelRatio,o={width:i.width*s,height:i.height*s};if(i.height===n.height&&i.width===n.width&&o.height===this.element.height&&o.width===this.element.width)return!1;const r={...n};n.height=i.height,n.width=i.width;const c=this.size;return this.element.width=c.width=o.width,this.element.height=c.height=o.height,this.container.started&&e.particles.setResizeFactor({width:n.width/r.width,height:n.height/r.height}),!0}setPointerEvents(e){this.element&&(this._pointerEvents=e,this._repairStyle())}stop(){this._safeMutationObserver(e=>e.disconnect()),this._mutationObserver=void 0,this.draw(e=>Hi(e,this.size))}async windowResize(){if(!this.element||!this.resize())return;const e=this.container,n=e.updateActualOptions();e.particles.setDensity(),this._applyResizePlugins(),n&&await e.refresh()}}var Sn;(function(t){t.canvas="canvas",t.parent="parent",t.window="window"})(Sn||(Sn={}));function it(t,e,n,i,s){if(i){let o={passive:!0};Ba(s)?o.capture=s:s!==void 0&&(o=s),t.addEventListener(e,n,o)}else{const o=s;t.removeEventListener(e,n,o)}}class Z0{constructor(e){this.container=e,this._doMouseTouchClick=n=>{const i=this.container,s=i.actualOptions;if(this._canPush){const o=i.interactivity.mouse,r=o.position;if(!r)return;o.clickPosition={...r},o.clickTime=new Date().getTime();const c=s.interactivity.events.onClick;tt(c.mode,l=>this.container.handleClickMode(l))}n.type==="touchend"&&setTimeout(()=>this._mouseTouchFinish(),l0)},this._handleThemeChange=n=>{const i=n,s=this.container,o=s.options,r=o.defaultThemes,c=i.matches?r.dark:r.light;o.themes.find(u=>u.name===c)?.default.auto&&s.loadTheme(c)},this._handleVisibilityChange=()=>{const n=this.container,i=n.actualOptions;this._mouseTouchFinish(),i.pauseOnBlur&&(document?.hidden?(n.pageHidden=!0,n.pause()):(n.pageHidden=!1,n.animationStatus?n.play(!0):n.draw(!0)))},this._handleWindowResize=()=>{this._resizeTimeout&&(clearTimeout(this._resizeTimeout),delete this._resizeTimeout);const n=async()=>{await this.container.canvas?.windowResize()};this._resizeTimeout=setTimeout(()=>void n(),this.container.actualOptions.interactivity.events.resize.delay*$e)},this._manageInteractivityListeners=(n,i)=>{const s=this._handlers,o=this.container,r=o.actualOptions,c=o.interactivity.element;if(!c)return;const l=c,u=o.canvas;u.setPointerEvents(l===u.element?"initial":"none"),(r.interactivity.events.onHover.enable||r.interactivity.events.onClick.enable)&&(it(c,on,s.mouseMove,i),it(c,Ml,s.touchStart,i),it(c,Rl,s.touchMove,i),r.interactivity.events.onClick.enable?(it(c,wo,s.touchEndClick,i),it(c,Tl,s.mouseUp,i),it(c,Al,s.mouseDown,i)):it(c,wo,s.touchEnd,i),it(c,n,s.mouseLeave,i),it(c,Bl,s.touchCancel,i))},this._manageListeners=n=>{const i=this._handlers,s=this.container,o=s.actualOptions,r=o.interactivity.detectsOn,c=s.canvas.element;let l=ws;r===Sn.window?(s.interactivity.element=window,l=Il):r===Sn.parent&&c?s.interactivity.element=c.parentElement??c.parentNode:s.interactivity.element=c,this._manageMediaMatch(n),this._manageResize(n),this._manageInteractivityListeners(l,n),document&&it(document,Ll,i.visibilityChange,n,!1)},this._manageMediaMatch=n=>{const i=this._handlers,s=Na("(prefers-color-scheme: dark)");if(s){if(s.addEventListener!==void 0){it(s,"change",i.themeChange,n);return}s.addListener!==void 0&&(n?s.addListener(i.oldThemeChange):s.removeListener(i.oldThemeChange))}},this._manageResize=n=>{const i=this._handlers,s=this.container;if(!s.actualOptions.interactivity.events.resize)return;if(typeof ResizeObserver>"u"){it(window,zl,i.resize,n);return}const r=s.canvas.element;this._resizeObserver&&!n?(r&&this._resizeObserver.unobserve(r),this._resizeObserver.disconnect(),delete this._resizeObserver):!this._resizeObserver&&n&&r&&(this._resizeObserver=new ResizeObserver(c=>{c.find(u=>u.target===r)&&this._handleWindowResize()}),this._resizeObserver.observe(r))},this._mouseDown=()=>{const{interactivity:n}=this.container;if(!n)return;const{mouse:i}=n;i.clicking=!0,i.downPosition=i.position},this._mouseTouchClick=n=>{const i=this.container,s=i.actualOptions,{mouse:o}=i.interactivity;o.inside=!0;let r=!1;const c=o.position;if(!(!c||!s.interactivity.events.onClick.enable)){for(const l of i.plugins.values())if(l.clickPositionValid&&(r=l.clickPositionValid(c),r))break;r||this._doMouseTouchClick(n),o.clicking=!1}},this._mouseTouchFinish=()=>{const n=this.container.interactivity;if(!n)return;const i=n.mouse;delete i.position,delete i.clickPosition,delete i.downPosition,n.status=ws,i.inside=!1,i.clicking=!1},this._mouseTouchMove=n=>{const i=this.container,s=i.actualOptions,o=i.interactivity,r=i.canvas.element;if(!o?.element)return;o.mouse.inside=!0;let c;if(n.type.startsWith("pointer")){this._canPush=!0;const u=n;if(o.element===window){if(r){const d=r.getBoundingClientRect();c={x:u.clientX-d.left,y:u.clientY-d.top}}}else if(s.interactivity.detectsOn===Sn.parent){const d=u.target,h=u.currentTarget;if(d&&h&&r){const f=d.getBoundingClientRect(),p=h.getBoundingClientRect(),x=r.getBoundingClientRect();c={x:u.offsetX+Ve*f.left-(p.left+x.left),y:u.offsetY+Ve*f.top-(p.top+x.top)}}else c={x:u.offsetX??u.clientX,y:u.offsetY??u.clientY}}else u.target===r&&(c={x:u.offsetX??u.clientX,y:u.offsetY??u.clientY})}else if(this._canPush=n.type!=="touchmove",r){const u=n,d=u.touches[u.touches.length-Ma],h=r.getBoundingClientRect();c={x:d.clientX-(h.left??vi),y:d.clientY-(h.top??vi)}}const l=i.retina.pixelRatio;c&&(c.x*=l,c.y*=l),o.mouse.position=c,o.status=on},this._touchEnd=n=>{const i=n,s=Array.from(i.changedTouches);for(const o of s)this._touches.delete(o.identifier);this._mouseTouchFinish()},this._touchEndClick=n=>{const i=n,s=Array.from(i.changedTouches);for(const o of s)this._touches.delete(o.identifier);this._mouseTouchClick(n)},this._touchStart=n=>{const i=n,s=Array.from(i.changedTouches);for(const o of s)this._touches.set(o.identifier,performance.now());this._mouseTouchMove(n)},this._canPush=!0,this._touches=new Map,this._handlers={mouseDown:()=>this._mouseDown(),mouseLeave:()=>this._mouseTouchFinish(),mouseMove:n=>this._mouseTouchMove(n),mouseUp:n=>this._mouseTouchClick(n),touchStart:n=>this._touchStart(n),touchMove:n=>this._mouseTouchMove(n),touchEnd:n=>this._touchEnd(n),touchCancel:n=>this._touchEnd(n),touchEndClick:n=>this._touchEndClick(n),visibilityChange:()=>this._handleVisibilityChange(),themeChange:n=>this._handleThemeChange(n),oldThemeChange:n=>this._handleThemeChange(n),resize:()=>{this._handleWindowResize()}}}addListeners(){this._manageListeners(!0)}removeListeners(){this._manageListeners(!1)}}var qe;(function(t){t.configAdded="configAdded",t.containerInit="containerInit",t.particlesSetup="particlesSetup",t.containerStarted="containerStarted",t.containerStopped="containerStopped",t.containerDestroyed="containerDestroyed",t.containerPaused="containerPaused",t.containerPlay="containerPlay",t.containerBuilt="containerBuilt",t.particleAdded="particleAdded",t.particleDestroyed="particleDestroyed",t.particleRemoved="particleRemoved"})(qe||(qe={}));class We{constructor(){this.value=""}static create(e,n){const i=new We;return i.load(e),n!==void 0&&(zt(n)||yt(n)?i.load({value:n}):i.load(n)),i}load(e){z(e)||z(e.value)||(this.value=e.value)}}class ed{constructor(){this.color=new We,this.color.value="",this.image="",this.position="",this.repeat="",this.size="",this.opacity=1}load(e){z(e)||(e.color!==void 0&&(this.color=We.create(this.color,e.color)),e.image!==void 0&&(this.image=e.image),e.position!==void 0&&(this.position=e.position),e.repeat!==void 0&&(this.repeat=e.repeat),e.size!==void 0&&(this.size=e.size),e.opacity!==void 0&&(this.opacity=e.opacity))}}class td{constructor(){this.opacity=1}load(e){z(e)||(e.color!==void 0&&(this.color=We.create(this.color,e.color)),e.image!==void 0&&(this.image=e.image),e.opacity!==void 0&&(this.opacity=e.opacity))}}class nd{constructor(){this.composite="destination-out",this.cover=new td,this.enable=!1}load(e){if(!z(e)){if(e.composite!==void 0&&(this.composite=e.composite),e.cover!==void 0){const n=e.cover,i=zt(e.cover)?{color:e.cover}:e.cover;this.cover.load(n.color!==void 0||n.image!==void 0?n:{color:i})}e.enable!==void 0&&(this.enable=e.enable)}}}class id{constructor(){this.enable=!0,this.zIndex=0}load(e){z(e)||(e.enable!==void 0&&(this.enable=e.enable),e.zIndex!==void 0&&(this.zIndex=e.zIndex))}}class sd{constructor(){this.enable=!1,this.mode=[]}load(e){z(e)||(e.enable!==void 0&&(this.enable=e.enable),e.mode!==void 0&&(this.mode=e.mode))}}var An;(function(t){t.circle="circle",t.rectangle="rectangle"})(An||(An={}));class Go{constructor(){this.selectors=[],this.enable=!1,this.mode=[],this.type=An.circle}load(e){z(e)||(e.selectors!==void 0&&(this.selectors=e.selectors),e.enable!==void 0&&(this.enable=e.enable),e.mode!==void 0&&(this.mode=e.mode),e.type!==void 0&&(this.type=e.type))}}class od{constructor(){this.enable=!1,this.force=2,this.smooth=10}load(e){z(e)||(e.enable!==void 0&&(this.enable=e.enable),e.force!==void 0&&(this.force=e.force),e.smooth!==void 0&&(this.smooth=e.smooth))}}class rd{constructor(){this.enable=!1,this.mode=[],this.parallax=new od}load(e){z(e)||(e.enable!==void 0&&(this.enable=e.enable),e.mode!==void 0&&(this.mode=e.mode),this.parallax.load(e.parallax))}}class ad{constructor(){this.delay=.5,this.enable=!0}load(e){z(e)||(e.delay!==void 0&&(this.delay=e.delay),e.enable!==void 0&&(this.enable=e.enable))}}class cd{constructor(){this.onClick=new sd,this.onDiv=new Go,this.onHover=new rd,this.resize=new ad}load(e){if(z(e))return;this.onClick.load(e.onClick);const n=e.onDiv;n!==void 0&&(this.onDiv=tt(n,i=>{const s=new Go;return s.load(i),s})),this.onHover.load(e.onHover),this.resize.load(e.resize)}}class ld{constructor(e,n){this._engine=e,this._container=n}load(e){if(z(e)||!this._container)return;const n=this._engine.interactors.get(this._container);if(n)for(const i of n)i.loadModeOptions&&i.loadModeOptions(this,e)}}class Ka{constructor(e,n){this.detectsOn=Sn.window,this.events=new cd,this.modes=new ld(e,n)}load(e){if(z(e))return;const n=e.detectsOn;n!==void 0&&(this.detectsOn=n),this.events.load(e.events),this.modes.load(e.modes)}}class dd{load(e){z(e)||(e.position&&(this.position={x:e.position.x??Bo,y:e.position.y??Bo,mode:e.position.mode??Dn.percent}),e.options&&(this.options=Ue({},e.options)))}}var tn;(function(t){t.screen="screen",t.canvas="canvas"})(tn||(tn={}));class ud{constructor(){this.maxWidth=1/0,this.options={},this.mode=tn.canvas}load(e){z(e)||(z(e.maxWidth)||(this.maxWidth=e.maxWidth),z(e.mode)||(e.mode===tn.screen?this.mode=tn.screen:this.mode=tn.canvas),z(e.options)||(this.options=Ue({},e.options)))}}var Tt;(function(t){t.any="any",t.dark="dark",t.light="light"})(Tt||(Tt={}));class hd{constructor(){this.auto=!1,this.mode=Tt.any,this.value=!1}load(e){z(e)||(e.auto!==void 0&&(this.auto=e.auto),e.mode!==void 0&&(this.mode=e.mode),e.value!==void 0&&(this.value=e.value))}}class fd{constructor(){this.name="",this.default=new hd}load(e){z(e)||(e.name!==void 0&&(this.name=e.name),this.default.load(e.default),e.options!==void 0&&(this.options=Ue({},e.options)))}}class oo{constructor(){this.count=0,this.enable=!1,this.speed=1,this.decay=0,this.delay=0,this.sync=!1}load(e){z(e)||(e.count!==void 0&&(this.count=me(e.count)),e.enable!==void 0&&(this.enable=e.enable),e.speed!==void 0&&(this.speed=me(e.speed)),e.decay!==void 0&&(this.decay=me(e.decay)),e.delay!==void 0&&(this.delay=me(e.delay)),e.sync!==void 0&&(this.sync=e.sync))}}class ro extends oo{constructor(){super(),this.mode=en.auto,this.startValue=wn.random}load(e){super.load(e),!z(e)&&(e.mode!==void 0&&(this.mode=e.mode),e.startValue!==void 0&&(this.startValue=e.startValue))}}class Yi extends oo{constructor(){super(),this.offset=0,this.sync=!0}load(e){super.load(e),!z(e)&&e.offset!==void 0&&(this.offset=me(e.offset))}}class pd{constructor(){this.h=new Yi,this.s=new Yi,this.l=new Yi}load(e){z(e)||(this.h.load(e.h),this.s.load(e.s),this.l.load(e.l))}}class qn extends We{constructor(){super(),this.animation=new pd}static create(e,n){const i=new qn;return i.load(e),n!==void 0&&(zt(n)||yt(n)?i.load({value:n}):i.load(n)),i}load(e){if(super.load(e),z(e))return;const n=e.animation;n!==void 0&&(n.enable!==void 0?this.animation.h.load(n):this.animation.load(e.animation))}}var Cn;(function(t){t.absorb="absorb",t.bounce="bounce",t.destroy="destroy"})(Cn||(Cn={}));class xd{constructor(){this.speed=2}load(e){z(e)||e.speed!==void 0&&(this.speed=e.speed)}}class md{constructor(){this.enable=!0,this.retries=0}load(e){z(e)||(e.enable!==void 0&&(this.enable=e.enable),e.retries!==void 0&&(this.retries=e.retries))}}class dn{constructor(){this.value=0}load(e){z(e)||z(e.value)||(this.value=me(e.value))}}class gd extends dn{constructor(){super(),this.animation=new oo}load(e){if(super.load(e),z(e))return;const n=e.animation;n!==void 0&&this.animation.load(n)}}class Xa extends gd{constructor(){super(),this.animation=new ro}load(e){super.load(e)}}class Uo extends dn{constructor(){super(),this.value=1}}class Za{constructor(){this.horizontal=new Uo,this.vertical=new Uo}load(e){z(e)||(this.horizontal.load(e.horizontal),this.vertical.load(e.vertical))}}class yd{constructor(){this.absorb=new xd,this.bounce=new Za,this.enable=!1,this.maxSpeed=50,this.mode=Cn.bounce,this.overlap=new md}load(e){z(e)||(this.absorb.load(e.absorb),this.bounce.load(e.bounce),e.enable!==void 0&&(this.enable=e.enable),e.maxSpeed!==void 0&&(this.maxSpeed=me(e.maxSpeed)),e.mode!==void 0&&(this.mode=e.mode),this.overlap.load(e.overlap))}}class bd{constructor(){this.close=!0,this.fill=!0,this.options={},this.type=[]}load(e){if(z(e))return;const n=e.options;if(n!==void 0)for(const i in n){const s=n[i];s&&(this.options[i]=Ue(this.options[i]??{},s))}e.close!==void 0&&(this.close=e.close),e.fill!==void 0&&(this.fill=e.fill),e.type!==void 0&&(this.type=e.type)}}class vd{constructor(){this.offset=0,this.value=90}load(e){z(e)||(e.offset!==void 0&&(this.offset=me(e.offset)),e.value!==void 0&&(this.value=me(e.value)))}}class kd{constructor(){this.distance=200,this.enable=!1,this.rotate={x:3e3,y:3e3}}load(e){if(!z(e)&&(e.distance!==void 0&&(this.distance=me(e.distance)),e.enable!==void 0&&(this.enable=e.enable),e.rotate)){const n=e.rotate.x;n!==void 0&&(this.rotate.x=n);const i=e.rotate.y;i!==void 0&&(this.rotate.y=i)}}}class wd{constructor(){this.x=50,this.y=50,this.mode=Dn.percent,this.radius=0}load(e){z(e)||(e.x!==void 0&&(this.x=e.x),e.y!==void 0&&(this.y=e.y),e.mode!==void 0&&(this.mode=e.mode),e.radius!==void 0&&(this.radius=e.radius))}}class Sd{constructor(){this.acceleration=9.81,this.enable=!1,this.inverse=!1,this.maxSpeed=50}load(e){z(e)||(e.acceleration!==void 0&&(this.acceleration=me(e.acceleration)),e.enable!==void 0&&(this.enable=e.enable),e.inverse!==void 0&&(this.inverse=e.inverse),e.maxSpeed!==void 0&&(this.maxSpeed=me(e.maxSpeed)))}}class Cd{constructor(){this.clamp=!0,this.delay=new dn,this.enable=!1,this.options={}}load(e){z(e)||(e.clamp!==void 0&&(this.clamp=e.clamp),this.delay.load(e.delay),e.enable!==void 0&&(this.enable=e.enable),this.generator=e.generator,e.options&&(this.options=Ue(this.options,e.options)))}}class Ed{load(e){z(e)||(e.color!==void 0&&(this.color=We.create(this.color,e.color)),e.image!==void 0&&(this.image=e.image))}}class _d{constructor(){this.enable=!1,this.length=10,this.fill=new Ed}load(e){z(e)||(e.enable!==void 0&&(this.enable=e.enable),e.fill!==void 0&&this.fill.load(e.fill),e.length!==void 0&&(this.length=e.length))}}var Te;(function(t){t.bounce="bounce",t.none="none",t.out="out",t.destroy="destroy",t.split="split"})(Te||(Te={}));class Od{constructor(){this.default=Te.out}load(e){z(e)||(e.default!==void 0&&(this.default=e.default),this.bottom=e.bottom??e.default,this.left=e.left??e.default,this.right=e.right??e.default,this.top=e.top??e.default)}}class Pd{constructor(){this.acceleration=0,this.enable=!1}load(e){z(e)||(e.acceleration!==void 0&&(this.acceleration=me(e.acceleration)),e.enable!==void 0&&(this.enable=e.enable),e.position&&(this.position=Ue({},e.position)))}}class Dd{constructor(){this.angle=new vd,this.attract=new kd,this.center=new wd,this.decay=0,this.distance={},this.direction=Ne.none,this.drift=0,this.enable=!1,this.gravity=new Sd,this.path=new Cd,this.outModes=new Od,this.random=!1,this.size=!1,this.speed=2,this.spin=new Pd,this.straight=!1,this.trail=new _d,this.vibrate=!1,this.warp=!1}load(e){if(z(e))return;this.angle.load(Lt(e.angle)?{value:e.angle}:e.angle),this.attract.load(e.attract),this.center.load(e.center),e.decay!==void 0&&(this.decay=me(e.decay)),e.direction!==void 0&&(this.direction=e.direction),e.distance!==void 0&&(this.distance=Lt(e.distance)?{horizontal:e.distance,vertical:e.distance}:{...e.distance}),e.drift!==void 0&&(this.drift=me(e.drift)),e.enable!==void 0&&(this.enable=e.enable),this.gravity.load(e.gravity);const n=e.outModes;n!==void 0&&(bn(n)?this.outModes.load(n):this.outModes.load({default:n})),this.path.load(e.path),e.random!==void 0&&(this.random=e.random),e.size!==void 0&&(this.size=e.size),e.speed!==void 0&&(this.speed=me(e.speed)),this.spin.load(e.spin),e.straight!==void 0&&(this.straight=e.straight),this.trail.load(e.trail),e.vibrate!==void 0&&(this.vibrate=e.vibrate),e.warp!==void 0&&(this.warp=e.warp)}}class jd extends ro{constructor(){super(),this.destroy=rn.none,this.speed=2}load(e){super.load(e),!z(e)&&e.destroy!==void 0&&(this.destroy=e.destroy)}}class Ad extends Xa{constructor(){super(),this.animation=new jd,this.value=1}load(e){if(z(e))return;super.load(e);const n=e.animation;n!==void 0&&this.animation.load(n)}}class Td{constructor(){this.enable=!1,this.width=1920,this.height=1080}load(e){if(z(e))return;e.enable!==void 0&&(this.enable=e.enable);const n=e.width;n!==void 0&&(this.width=n);const i=e.height;i!==void 0&&(this.height=i)}}var Tn;(function(t){t.delete="delete",t.wait="wait"})(Tn||(Tn={}));class Id{constructor(){this.mode=Tn.delete,this.value=0}load(e){z(e)||(e.mode!==void 0&&(this.mode=e.mode),e.value!==void 0&&(this.value=e.value))}}class Md{constructor(){this.density=new Td,this.limit=new Id,this.value=0}load(e){z(e)||(this.density.load(e.density),this.limit.load(e.limit),e.value!==void 0&&(this.value=e.value))}}class Rd{constructor(){this.blur=0,this.color=new We,this.enable=!1,this.offset={x:0,y:0},this.color.value="#000"}load(e){z(e)||(e.blur!==void 0&&(this.blur=e.blur),this.color=We.create(this.color,e.color),e.enable!==void 0&&(this.enable=e.enable),e.offset!==void 0&&(e.offset.x!==void 0&&(this.offset.x=e.offset.x),e.offset.y!==void 0&&(this.offset.y=e.offset.y)))}}class Bd{constructor(){this.close=!0,this.fill=!0,this.options={},this.type="circle"}load(e){if(z(e))return;const n=e.options;if(n!==void 0)for(const i in n){const s=n[i];s&&(this.options[i]=Ue(this.options[i]??{},s))}e.close!==void 0&&(this.close=e.close),e.fill!==void 0&&(this.fill=e.fill),e.type!==void 0&&(this.type=e.type)}}class zd extends ro{constructor(){super(),this.destroy=rn.none,this.speed=5}load(e){super.load(e),!z(e)&&e.destroy!==void 0&&(this.destroy=e.destroy)}}class Ld extends Xa{constructor(){super(),this.animation=new zd,this.value=3}load(e){if(super.load(e),z(e))return;const n=e.animation;n!==void 0&&this.animation.load(n)}}class Wo{constructor(){this.width=0}load(e){z(e)||(e.color!==void 0&&(this.color=qn.create(this.color,e.color)),e.width!==void 0&&(this.width=me(e.width)),e.opacity!==void 0&&(this.opacity=me(e.opacity)))}}class Nd extends dn{constructor(){super(),this.opacityRate=1,this.sizeRate=1,this.velocityRate=1}load(e){super.load(e),!z(e)&&(e.opacityRate!==void 0&&(this.opacityRate=e.opacityRate),e.sizeRate!==void 0&&(this.sizeRate=e.sizeRate),e.velocityRate!==void 0&&(this.velocityRate=e.velocityRate))}}class Fd{constructor(e,n){this._engine=e,this._container=n,this.bounce=new Za,this.collisions=new yd,this.color=new qn,this.color.value="#fff",this.effect=new bd,this.groups={},this.move=new Dd,this.number=new Md,this.opacity=new Ad,this.reduceDuplicates=!1,this.shadow=new Rd,this.shape=new Bd,this.size=new Ld,this.stroke=new Wo,this.zIndex=new Nd}load(e){if(z(e))return;if(e.groups!==void 0)for(const i of Object.keys(e.groups)){if(!Object.hasOwn(e.groups,i))continue;const s=e.groups[i];s!==void 0&&(this.groups[i]=Ue(this.groups[i]??{},s))}e.reduceDuplicates!==void 0&&(this.reduceDuplicates=e.reduceDuplicates),this.bounce.load(e.bounce),this.color.load(qn.create(this.color,e.color)),this.effect.load(e.effect),this.move.load(e.move),this.number.load(e.number),this.opacity.load(e.opacity),this.shape.load(e.shape),this.size.load(e.size),this.shadow.load(e.shadow),this.zIndex.load(e.zIndex),this.collisions.load(e.collisions),e.interactivity!==void 0&&(this.interactivity=Ue({},e.interactivity));const n=e.stroke;if(n&&(this.stroke=tt(n,i=>{const s=new Wo;return s.load(i),s})),this._container){const i=this._engine.updaters.get(this._container);if(i)for(const o of i)o.loadOptions&&o.loadOptions(this,e);const s=this._engine.interactors.get(this._container);if(s)for(const o of s)o.loadParticlesOptions&&o.loadParticlesOptions(this,e)}}}function ec(t,...e){for(const n of e)t.load(n)}function tc(t,e,...n){const i=new Fd(t,e);return ec(i,...n),i}class $d{constructor(e,n){this._findDefaultTheme=i=>this.themes.find(s=>s.default.value&&s.default.mode===i)??this.themes.find(s=>s.default.value&&s.default.mode===Tt.any),this._importPreset=i=>{this.load(this._engine.getPreset(i))},this._engine=e,this._container=n,this.autoPlay=!0,this.background=new ed,this.backgroundMask=new nd,this.clear=!0,this.defaultThemes={},this.delay=0,this.fullScreen=new id,this.detectRetina=!0,this.duration=0,this.fpsLimit=120,this.interactivity=new Ka(e,n),this.manualParticles=[],this.particles=tc(this._engine,this._container),this.pauseOnBlur=!0,this.pauseOnOutsideViewport=!0,this.responsive=[],this.smooth=!1,this.style={},this.themes=[],this.zLayers=100}load(e){if(z(e))return;e.preset!==void 0&&tt(e.preset,r=>this._importPreset(r)),e.autoPlay!==void 0&&(this.autoPlay=e.autoPlay),e.clear!==void 0&&(this.clear=e.clear),e.key!==void 0&&(this.key=e.key),e.name!==void 0&&(this.name=e.name),e.delay!==void 0&&(this.delay=me(e.delay));const n=e.detectRetina;n!==void 0&&(this.detectRetina=n),e.duration!==void 0&&(this.duration=me(e.duration));const i=e.fpsLimit;i!==void 0&&(this.fpsLimit=i),e.pauseOnBlur!==void 0&&(this.pauseOnBlur=e.pauseOnBlur),e.pauseOnOutsideViewport!==void 0&&(this.pauseOnOutsideViewport=e.pauseOnOutsideViewport),e.zLayers!==void 0&&(this.zLayers=e.zLayers),this.background.load(e.background);const s=e.fullScreen;Ba(s)?this.fullScreen.enable=s:this.fullScreen.load(s),this.backgroundMask.load(e.backgroundMask),this.interactivity.load(e.interactivity),e.manualParticles&&(this.manualParticles=e.manualParticles.map(r=>{const c=new dd;return c.load(r),c})),this.particles.load(e.particles),this.style=Ue(this.style,e.style),this._engine.loadOptions(this,e),e.smooth!==void 0&&(this.smooth=e.smooth);const o=this._engine.interactors.get(this._container);if(o)for(const r of o)r.loadOptions&&r.loadOptions(this,e);if(e.responsive!==void 0)for(const r of e.responsive){const c=new ud;c.load(r),this.responsive.push(c)}if(this.responsive.sort((r,c)=>r.maxWidth-c.maxWidth),e.themes!==void 0)for(const r of e.themes){const c=this.themes.find(l=>l.name===r.name);if(c)c.load(r);else{const l=new fd;l.load(r),this.themes.push(l)}}this.defaultThemes.dark=this._findDefaultTheme(Tt.dark)?.name,this.defaultThemes.light=this._findDefaultTheme(Tt.light)?.name}setResponsive(e,n,i){this.load(i);const s=this.responsive.find(o=>o.mode===tn.screen&&screen?o.maxWidth>screen.availWidth:o.maxWidth*n>e);return this.load(s?.options),s?.maxWidth}setTheme(e){if(e){const n=this.themes.find(i=>i.name===e);n&&this.load(n.options)}else{const n=Na("(prefers-color-scheme: dark)"),i=n?.matches,s=this._findDefaultTheme(i?Tt.dark:Tt.light);s&&this.load(s.options)}}}var In;(function(t){t.external="external",t.particles="particles"})(In||(In={}));class Vd{constructor(e,n){this.container=n,this._engine=e,this._interactors=[],this._externalInteractors=[],this._particleInteractors=[]}externalInteract(e){for(const n of this._externalInteractors)n.isEnabled()&&n.interact(e)}handleClickMode(e){for(const n of this._externalInteractors)n.handleClickMode?.(e)}async init(){this._interactors=await this._engine.getInteractors(this.container,!0),this._externalInteractors=[],this._particleInteractors=[];for(const e of this._interactors){switch(e.type){case In.external:this._externalInteractors.push(e);break;case In.particles:this._particleInteractors.push(e);break}e.init()}}particlesInteract(e,n){for(const i of this._externalInteractors)i.clear(e,n);for(const i of this._particleInteractors)i.isEnabled(e)&&i.interact(e,n)}reset(e){for(const n of this._externalInteractors)n.isEnabled()&&n.reset(e);for(const n of this._particleInteractors)n.isEnabled(e)&&n.reset(e)}}var ft;(function(t){t.normal="normal",t.inside="inside",t.outside="outside"})(ft||(ft={}));function Gd(t,e,n,i){const s=e.options[t];if(s)return Ue({close:e.close,fill:e.fill},st(s,n,i))}function Ud(t,e,n,i){const s=e.options[t];if(s)return Ue({close:e.close,fill:e.fill},st(s,n,i))}function qo(t){if(!De(t.outMode,t.checkModes))return;const e=t.radius*Ve;t.coord>t.maxCoord-e?t.setCb(-t.radius):t.coord<e&&t.setCb(t.radius)}class Wd{constructor(e,n){this.container=n,this._calcPosition=(i,s,o,r=Co)=>{for(const x of i.plugins.values()){const y=x.particlePosition!==void 0?x.particlePosition(s,this):void 0;if(y)return Ke.create(y.x,y.y,o)}const c=i.canvas.size,l=S0({size:c,position:s}),u=Ke.create(l.x,l.y,o),d=this.getRadius(),h=this.options.move.outModes,f=x=>{qo({outMode:x,checkModes:[Te.bounce],coord:u.x,maxCoord:i.canvas.size.width,setCb:y=>u.x+=y,radius:d})},p=x=>{qo({outMode:x,checkModes:[Te.bounce],coord:u.y,maxCoord:i.canvas.size.height,setCb:y=>u.y+=y,radius:d})};return f(h.left??h.default),f(h.right??h.default),p(h.top??h.default),p(h.bottom??h.default),this._checkOverlap(u,r)?this._calcPosition(i,void 0,o,r+n0):u},this._calculateVelocity=()=>{const i=w0(this.direction),s=i.copy(),o=this.options.move;if(o.direction===Ne.inside||o.direction===Ne.outside)return s;const r=Bt(q(o.angle.value)),c=Bt(q(o.angle.offset)),l={left:c-r*Re,right:c+r*Re};return o.straight||(s.angle+=Ze(me(l.left,l.right))),o.random&&typeof o.speed=="number"&&(s.length*=ke()),s},this._checkOverlap=(i,s=Co)=>{const o=this.options.collisions,r=this.getRadius();if(!o.enable)return!1;const c=o.overlap;if(c.enable)return!1;const l=c.retries;if(l>=i0&&s>l)throw new Error(`${ot} particle is overlapping and can't be placed`);return!!this.container.particles.find(u=>et(i,u.position)<r+u.getRadius())},this._getRollColor=i=>{if(!i||!this.roll||!this.backColor&&!this.roll.alter)return i;const s=this.roll.horizontal&&this.roll.vertical?Ve*To:To,o=this.roll.horizontal?Math.PI*Re:ki;return Math.floor(((this.roll.angle??ki)+o)/(Math.PI/s))%Ve?this.backColor?this.backColor:this.roll.alter?J0(i,this.roll.alter.type,this.roll.alter.value):i:i},this._initPosition=i=>{const s=this.container,o=q(this.options.zIndex.value);this.position=this._calcPosition(s,i,rt(o,s0,s.zLayers)),this.initialPosition=this.position.copy();const r=s.canvas.size;switch(this.moveCenter={...Ua(this.options.move.center,r),radius:this.options.move.center.radius??o0,mode:this.options.move.center.mode??Dn.percent},this.direction=k0(this.options.move.direction,this.position,this.moveCenter),this.options.move.direction){case Ne.inside:this.outType=ft.inside;break;case Ne.outside:this.outType=ft.outside;break}this.offset=Le.origin},this._engine=e}destroy(e){if(this.unbreakable||this.destroyed)return;this.destroyed=!0,this.bubble.inRange=!1,this.slow.inRange=!1;const n=this.container,i=this.pathGenerator;n.shapeDrawers.get(this.shape)?.particleDestroy?.(this);for(const o of n.plugins.values())o.particleDestroyed?.(this,e);for(const o of n.particles.updaters)o.particleDestroyed?.(this,e);i?.reset(this),this._engine.dispatchEvent(qe.particleDestroyed,{container:this.container,data:{particle:this}})}draw(e){const n=this.container,i=n.canvas;for(const s of n.plugins.values())i.drawParticlePlugin(s,this,e);i.drawParticle(this,e)}getFillColor(){return this._getRollColor(this.bubble.color??$o(this.color))}getMass(){return this.getRadius()**Ot*Math.PI*Re}getPosition(){return{x:this.position.x+this.offset.x,y:this.position.y+this.offset.y,z:this.position.z}}getRadius(){return this.bubble.radius??this.size.value}getStrokeColor(){return this._getRollColor(this.bubble.color??$o(this.strokeColor))}init(e,n,i,s){const o=this.container,r=this._engine;this.id=e,this.group=s,this.effectClose=!0,this.effectFill=!0,this.shapeClose=!0,this.shapeFill=!0,this.pathRotation=!1,this.lastPathTime=0,this.destroyed=!1,this.unbreakable=!1,this.isRotating=!1,this.rotation=0,this.misplaced=!1,this.retina={maxDistance:{}},this.outType=ft.normal,this.ignoresResizeRatio=!0;const c=o.retina.pixelRatio,l=o.actualOptions,u=tc(this._engine,o,l.particles),{reduceDuplicates:d}=u,h=u.effect.type,f=u.shape.type;this.effect=st(h,this.id,d),this.shape=st(f,this.id,d);const p=u.effect,x=u.shape;if(i){if(i.effect?.type){const B=i.effect.type,W=st(B,this.id,d);W&&(this.effect=W,p.load(i.effect))}if(i.shape?.type){const B=i.shape.type,W=st(B,this.id,d);W&&(this.shape=W,x.load(i.shape))}}if(this.effect===Pn){const B=[...this.container.effectDrawers.keys()];this.effect=B[Math.floor(ke()*B.length)]}if(this.shape===Pn){const B=[...this.container.shapeDrawers.keys()];this.shape=B[Math.floor(ke()*B.length)]}this.effectData=Gd(this.effect,p,this.id,d),this.shapeData=Ud(this.shape,x,this.id,d),u.load(i);const y=this.effectData;y&&u.load(y.particles);const m=this.shapeData;m&&u.load(m.particles);const g=new Ka(r,o);g.load(o.actualOptions.interactivity),g.load(u.interactivity),this.interactivity=g,this.effectFill=y?.fill??u.effect.fill,this.effectClose=y?.close??u.effect.close,this.shapeFill=m?.fill??u.shape.fill,this.shapeClose=m?.close??u.shape.close,this.options=u;const v=this.options.move.path;this.pathDelay=q(v.delay.value)*$e,v.generator&&(this.pathGenerator=this._engine.getPathGenerator(v.generator),this.pathGenerator&&o.addPath(v.generator,this.pathGenerator)&&this.pathGenerator.init(o)),o.retina.initParticle(this),this.size=Ga(this.options.size,c),this.bubble={inRange:!1},this.slow={inRange:!1,factor:1},this._initPosition(n),this.initialVelocity=this._calculateVelocity(),this.velocity=this.initialVelocity.copy(),this.moveDecay=Ia-q(this.options.move.decay);const S=o.particles;S.setLastZIndex(this.position.z),this.zIndexFactor=this.position.z/o.zLayers,this.sides=24;let D=o.effectDrawers.get(this.effect);D||(D=this._engine.getEffectDrawer(this.effect),D&&o.effectDrawers.set(this.effect,D)),D?.loadEffect&&D.loadEffect(this);let j=o.shapeDrawers.get(this.shape);j||(j=this._engine.getShapeDrawer(this.shape),j&&o.shapeDrawers.set(this.shape,j)),j?.loadShape&&j.loadShape(this);const I=j?.getSidesCount;I&&(this.sides=I(this)),this.spawning=!1,this.shadowColor=ht(this._engine,this.options.shadow.color);for(const B of S.updaters)B.init(this);for(const B of S.movers)B.init?.(this);D?.particleInit?.(o,this),j?.particleInit?.(o,this);for(const B of o.plugins.values())B.particleCreated?.(this)}isInsideCanvas(){const e=this.getRadius(),n=this.container.canvas.size,i=this.position;return i.x>=-e&&i.y>=-e&&i.y<=n.height+e&&i.x<=n.width+e}isVisible(){return!this.destroyed&&!this.spawning&&this.isInsideCanvas()}reset(){for(const e of this.container.particles.updaters)e.reset?.(this)}}class qd{constructor(e,n){this.position=e,this.particle=n}}var En;(function(t){t.circle="circle",t.rectangle="rectangle"})(En||(En={}));class nc{constructor(e,n,i){this.position={x:e,y:n},this.type=i}}class Ge extends nc{constructor(e,n,i){super(e,n,En.circle),this.radius=i}contains(e){return et(e,this.position)<=this.radius}intersects(e){const n=this.position,i=e.position,s={x:Math.abs(i.x-n.x),y:Math.abs(i.y-n.y)},o=this.radius;if(e instanceof Ge||e.type===En.circle){const r=e,c=o+r.radius,l=Math.sqrt(s.x**Ot+s.y**Ot);return c>l}else if(e instanceof pt||e.type===En.rectangle){const r=e,{width:c,height:l}=r.size;return Math.pow(s.x-c,Ot)+Math.pow(s.y-l,Ot)<=o**Ot||s.x<=o+c&&s.y<=o+l||s.x<=c||s.y<=l}return!1}}class pt extends nc{constructor(e,n,i,s){super(e,n,En.rectangle),this.size={height:s,width:i}}contains(e){const n=this.size.width,i=this.size.height,s=this.position;return e.x>=s.x&&e.x<=s.x+n&&e.y>=s.y&&e.y<=s.y+i}intersects(e){if(e instanceof Ge)return e.intersects(this);const n=this.size.width,i=this.size.height,s=this.position,o=e.position,r=e instanceof pt?e.size:{width:0,height:0},c=r.width,l=r.height;return o.x<s.x+n&&o.x+c>s.x&&o.y<s.y+i&&o.y+l>s.y}}class Si{constructor(e,n){this.rectangle=e,this.capacity=n,this._subdivide=()=>{const{x:i,y:s}=this.rectangle.position,{width:o,height:r}=this.rectangle.size,{capacity:c}=this;for(let l=0;l<$l;l++){const u=l%Ve;this._subs.push(new Si(new pt(i+o*Re*u,s+r*Re*(Math.round(l*Re)-u),o*Re,r*Re),c))}this._divided=!0},this._points=[],this._divided=!1,this._subs=[]}insert(e){return this.rectangle.contains(e.position)?this._points.length<this.capacity?(this._points.push(e),!0):(this._divided||this._subdivide(),this._subs.some(n=>n.insert(e))):!1}query(e,n){const i=[];if(!e.intersects(this.rectangle))return[];for(const s of this._points)!e.contains(s.position)&&et(e.position,s.position)>s.particle.getRadius()&&(!n||n(s.particle))||i.push(s.particle);if(this._divided)for(const s of this._subs)i.push(...s.query(e,n));return i}queryCircle(e,n,i){return this.query(new Ge(e.x,e.y,n),i)}queryRectangle(e,n,i){return this.query(new pt(e.x,e.y,n.width,n.height),i)}}const Ho=t=>{const{height:e,width:n}=t;return new pt(Io*n,Io*e,Mo*n,Mo*e)};class Hd{constructor(e,n){this._addToPool=(...s)=>{this._pool.push(...s)},this._applyDensity=(s,o,r,c)=>{const l=s.number;if(!s.number.density?.enable){r===void 0?this._limit=l.limit.value:(c?.number.limit?.value??l.limit.value)&&this._groupLimits.set(r,c?.number.limit?.value??l.limit.value);return}const u=this._initDensityFactor(l.density),d=l.value,h=l.limit.value>Ro?l.limit.value:d,f=Math.min(d,h)*u+o,p=Math.min(this.count,this.filter(x=>x.group===r).length);r===void 0?this._limit=l.limit.value*u:this._groupLimits.set(r,l.limit.value*u),p<f?this.push(Math.abs(f-p),void 0,s,r):p>f&&this.removeQuantity(p-f,r)},this._initDensityFactor=s=>{const o=this._container;if(!o.canvas.element||!s.enable)return c0;const r=o.canvas.element,c=o.retina.pixelRatio;return r.width*r.height/(s.height*s.width*c**Ot)},this._pushParticle=(s,o,r,c)=>{try{let l=this._pool.pop();l||(l=new Wd(this._engine,this._container)),l.init(this._nextId,s,o,r);let u=!0;return c&&(u=c(l)),u?(this._array.push(l),this._zArray.push(l),this._nextId++,this._engine.dispatchEvent(qe.particleAdded,{container:this._container,data:{particle:l}}),l):void 0}catch(l){an().warning(`${ot} adding particle: ${l}`)}},this._removeParticle=(s,o,r)=>{const c=this._array[s];if(!c||c.group!==o)return!1;const l=this._zArray.indexOf(c);return this._array.splice(s,wi),this._zArray.splice(l,wi),c.destroy(r),this._engine.dispatchEvent(qe.particleRemoved,{container:this._container,data:{particle:c}}),this._addToPool(c),!0},this._engine=e,this._container=n,this._nextId=0,this._array=[],this._zArray=[],this._pool=[],this._limit=0,this._groupLimits=new Map,this._needsSort=!1,this._lastZIndex=0,this._interactionManager=new Vd(e,n),this._pluginsInitialized=!1;const i=n.canvas.size;this.quadTree=new Si(Ho(i),Eo),this.movers=[],this.updaters=[]}get count(){return this._array.length}addManualParticles(){const e=this._container;e.actualOptions.manualParticles.forEach(i=>this.addParticle(i.position?Ua(i.position,e.canvas.size):void 0,i.options))}addParticle(e,n,i,s){const o=this._container.actualOptions.particles.number.limit.mode,r=i===void 0?this._limit:this._groupLimits.get(i)??this._limit,c=this.count;if(r>Ro)switch(o){case Tn.delete:{const l=c+r0-r;l>a0&&this.removeQuantity(l);break}case Tn.wait:if(c>=r)return;break}return this._pushParticle(e,n,i,s)}clear(){this._array=[],this._zArray=[],this._pluginsInitialized=!1}destroy(){this._array=[],this._zArray=[],this.movers=[],this.updaters=[]}draw(e){const n=this._container,i=n.canvas;i.clear(),this.update(e);for(const s of n.plugins.values())i.drawPlugin(s,e);for(const s of this._zArray)s.draw(e)}filter(e){return this._array.filter(e)}find(e){return this._array.find(e)}get(e){return this._array[e]}handleClickMode(e){this._interactionManager.handleClickMode(e)}async init(){const e=this._container,n=e.actualOptions;this._lastZIndex=0,this._needsSort=!1,await this.initPlugins();let i=!1;for(const s of e.plugins.values())if(i=s.particlesInitialization?.()??i,i)break;if(this.addManualParticles(),!i){const s=n.particles,o=s.groups;for(const r in o){const c=o[r];for(let l=this.count,u=0;u<c.number?.value&&l<s.number.value;l++,u++)this.addParticle(void 0,c,r)}for(let r=this.count;r<s.number.value;r++)this.addParticle()}}async initPlugins(){if(this._pluginsInitialized)return;const e=this._container;this.movers=await this._engine.getMovers(e,!0),this.updaters=await this._engine.getUpdaters(e,!0),await this._interactionManager.init();for(const n of e.pathGenerators.values())n.init(e)}push(e,n,i,s){for(let o=0;o<e;o++)this.addParticle(n?.position,i,s)}async redraw(){this.clear(),await this.init(),this.draw({value:0,factor:0})}remove(e,n,i){this.removeAt(this._array.indexOf(e),void 0,n,i)}removeAt(e,n=Fl,i,s){if(e<_s||e>this.count)return;let o=0;for(let r=e;o<n&&r<this.count;r++)this._removeParticle(r,i,s)&&(r--,o++)}removeQuantity(e,n){this.removeAt(_s,e,n)}setDensity(){const e=this._container.actualOptions,n=e.particles.groups,i=e.manualParticles.length;for(const s in n)this._applyDensity(n[s],i,s);this._applyDensity(e.particles,i)}setLastZIndex(e){this._lastZIndex=e,this._needsSort=this._needsSort||this._lastZIndex<e}setResizeFactor(e){this._resizeFactor=e}update(e){const n=this._container,i=new Set;this.quadTree=new Si(Ho(n.canvas.size),Eo);for(const o of n.pathGenerators.values())o.update();for(const o of n.plugins.values())o.update?.(e);const s=this._resizeFactor;for(const o of this._array){s&&!o.ignoresResizeRatio&&(o.position.x*=s.width,o.position.y*=s.height,o.initialPosition.x*=s.width,o.initialPosition.y*=s.height),o.ignoresResizeRatio=!1,this._interactionManager.reset(o);for(const r of this._container.plugins.values()){if(o.destroyed)break;r.particleUpdate?.(o,e)}for(const r of this.movers)r.isEnabled(o)&&r.move(o,e);if(o.destroyed){i.add(o);continue}this.quadTree.insert(new qd(o.getPosition(),o))}if(i.size){const o=r=>!i.has(r);this._array=this.filter(o),this._zArray=this._zArray.filter(o);for(const r of i)this._engine.dispatchEvent(qe.particleRemoved,{container:this._container,data:{particle:r}});this._addToPool(...i)}this._interactionManager.externalInteract(e);for(const o of this._array){for(const r of this.updaters)r.update(o,e);!o.destroyed&&!o.spawning&&this._interactionManager.particlesInteract(o,e)}if(delete this._resizeFactor,this._needsSort){const o=this._zArray;o.sort((r,c)=>c.position.z-r.position.z||r.id-c.id),this._lastZIndex=o[o.length-Ma].position.z,this._needsSort=!1}}}class Yd{constructor(e){this.container=e,this.pixelRatio=_o,this.reduceFactor=Oo}init(){const e=this.container,n=e.actualOptions;this.pixelRatio=!n.detectRetina||cn()?_o:devicePixelRatio,this.reduceFactor=Oo;const i=this.pixelRatio,s=e.canvas;if(s.element){const c=s.element;s.size.width=c.offsetWidth*i,s.size.height=c.offsetHeight*i}const o=n.particles,r=o.move;this.maxSpeed=q(r.gravity.maxSpeed)*i,this.sizeAnimationSpeed=q(o.size.animation.speed)*i}initParticle(e){const n=e.options,i=this.pixelRatio,s=n.move,o=s.distance,r=e.retina;r.moveDrift=q(s.drift)*i,r.moveSpeed=q(s.speed)*i,r.sizeAnimationSpeed=q(n.size.animation.speed)*i;const c=r.maxDistance;c.horizontal=o.horizontal!==void 0?o.horizontal*i:void 0,c.vertical=o.vertical!==void 0?o.vertical*i:void 0,r.maxSpeed=q(s.gravity.maxSpeed)*i}}function Pe(t){return t&&!t.destroyed}function Qd(t,e=Fi,n=!1){return{value:t,factor:n?Fi/e:Fi*t/$e}}function fn(t,e,...n){const i=new $d(t,e);return ec(i,...n),i}let Jd=class{constructor(e,n,i){this._intersectionManager=s=>{if(!(!Pe(this)||!this.actualOptions.pauseOnOutsideViewport))for(const o of s)o.target===this.interactivity.element&&(o.isIntersecting?this.play():this.pause())},this._nextFrame=s=>{try{if(!this._smooth&&this._lastFrameTime!==void 0&&s<this._lastFrameTime+$e/this.fpsLimit){this.draw(!1);return}this._lastFrameTime??=s;const o=Qd(s-this._lastFrameTime,this.fpsLimit,this._smooth);if(this.addLifeTime(o.value),this._lastFrameTime=s,o.value>$e){this.draw(!1);return}if(this.particles.draw(o),!this.alive()){this.destroy();return}this.animationStatus&&this.draw(!1)}catch(o){an().error(`${ot} in animation loop`,o)}},this._engine=e,this.id=Symbol(n),this.fpsLimit=120,this._smooth=!1,this._delay=0,this._duration=0,this._lifeTime=0,this._firstStart=!0,this.started=!1,this.destroyed=!1,this._paused=!0,this._lastFrameTime=0,this.zLayers=100,this.pageHidden=!1,this._clickHandlers=new Map,this._sourceOptions=i,this._initialSourceOptions=i,this.retina=new Yd(this),this.canvas=new X0(this,this._engine),this.particles=new Hd(this._engine,this),this.pathGenerators=new Map,this.interactivity={mouse:{clicking:!1,inside:!1}},this.plugins=new Map,this.effectDrawers=new Map,this.shapeDrawers=new Map,this._options=fn(this._engine,this),this.actualOptions=fn(this._engine,this),this._eventListeners=new Z0(this),this._intersectionObserver=P0(s=>this._intersectionManager(s)),this._engine.dispatchEvent(qe.containerBuilt,{container:this})}get animationStatus(){return!this._paused&&!this.pageHidden&&Pe(this)}get options(){return this._options}get sourceOptions(){return this._sourceOptions}addClickHandler(e){if(!Pe(this))return;const n=this.interactivity.element;if(!n)return;const i=(h,f,p)=>{if(!Pe(this))return;const x=this.retina.pixelRatio,y={x:f.x*x,y:f.y*x},m=this.particles.quadTree.queryCircle(y,p*x);e(h,m)},s=h=>{if(!Pe(this))return;const f=h,p={x:f.offsetX||f.clientX,y:f.offsetY||f.clientY};i(h,p,Yl)},o=()=>{Pe(this)&&(u=!0,d=!1)},r=()=>{Pe(this)&&(d=!0)},c=h=>{if(Pe(this)){if(u&&!d){const f=h;let p=f.touches[f.touches.length-Ao];if(!p&&(p=f.changedTouches[f.changedTouches.length-Ao],!p))return;const x=this.canvas.element,y=x?x.getBoundingClientRect():void 0,m={x:p.clientX-(y?y.left:vi),y:p.clientY-(y?y.top:vi)};i(h,m,Math.max(p.radiusX,p.radiusY))}u=!1,d=!1}},l=()=>{Pe(this)&&(u=!1,d=!1)};let u=!1,d=!1;this._clickHandlers.set("click",s),this._clickHandlers.set("touchstart",o),this._clickHandlers.set("touchmove",r),this._clickHandlers.set("touchend",c),this._clickHandlers.set("touchcancel",l);for(const[h,f]of this._clickHandlers)n.addEventListener(h,f)}addLifeTime(e){this._lifeTime+=e}addPath(e,n,i=!1){return!Pe(this)||!i&&this.pathGenerators.has(e)?!1:(this.pathGenerators.set(e,n),!0)}alive(){return!this._duration||this._lifeTime<=this._duration}clearClickHandlers(){if(Pe(this)){for(const[e,n]of this._clickHandlers)this.interactivity.element?.removeEventListener(e,n);this._clickHandlers.clear()}}destroy(e=!0){if(Pe(this)){this.stop(),this.clearClickHandlers(),this.particles.destroy(),this.canvas.destroy();for(const n of this.effectDrawers.values())n.destroy?.(this);for(const n of this.shapeDrawers.values())n.destroy?.(this);for(const n of this.effectDrawers.keys())this.effectDrawers.delete(n);for(const n of this.shapeDrawers.keys())this.shapeDrawers.delete(n);if(this._engine.clearPlugins(this),this.destroyed=!0,e){const n=this._engine.items,i=n.findIndex(s=>s===this);i>=Ql&&n.splice(i,Ta)}this._engine.dispatchEvent(qe.containerDestroyed,{container:this})}}draw(e){if(!Pe(this))return;let n=e;const i=s=>{n&&(this._lastFrameTime=void 0,n=!1),this._nextFrame(s)};this._drawAnimationFrame=b0(s=>i(s))}async export(e,n={}){for(const i of this.plugins.values()){if(!i.export)continue;const s=await i.export(e,n);if(s.supported)return s.blob}an().error(`${ot} - Export plugin with type ${e} not found`)}handleClickMode(e){if(Pe(this)){this.particles.handleClickMode(e);for(const n of this.plugins.values())n.handleClickMode?.(e)}}async init(){if(!Pe(this))return;const e=this._engine.getSupportedEffects();for(const u of e){const d=this._engine.getEffectDrawer(u);d&&this.effectDrawers.set(u,d)}const n=this._engine.getSupportedShapes();for(const u of n){const d=this._engine.getShapeDrawer(u);d&&this.shapeDrawers.set(u,d)}await this.particles.initPlugins(),this._options=fn(this._engine,this,this._initialSourceOptions,this.sourceOptions),this.actualOptions=fn(this._engine,this,this._options);const i=await this._engine.getAvailablePlugins(this);for(const[u,d]of i)this.plugins.set(u,d);this.retina.init(),await this.canvas.init(),this.updateActualOptions(),this.canvas.initBackground(),this.canvas.resize();const{zLayers:s,duration:o,delay:r,fpsLimit:c,smooth:l}=this.actualOptions;this.zLayers=s,this._duration=q(o)*$e,this._delay=q(r)*$e,this._lifeTime=0,this.fpsLimit=c>Kl?c:Jl,this._smooth=l;for(const u of this.effectDrawers.values())await u.init?.(this);for(const u of this.shapeDrawers.values())await u.init?.(this);for(const u of this.plugins.values())await u.init?.();this._engine.dispatchEvent(qe.containerInit,{container:this}),await this.particles.init(),this.particles.setDensity();for(const u of this.plugins.values())u.particlesSetup?.();this._engine.dispatchEvent(qe.particlesSetup,{container:this})}async loadTheme(e){Pe(this)&&(this._currentTheme=e,await this.refresh())}pause(){if(Pe(this)&&(this._drawAnimationFrame!==void 0&&(v0(this._drawAnimationFrame),delete this._drawAnimationFrame),!this._paused)){for(const e of this.plugins.values())e.pause?.();this.pageHidden||(this._paused=!0),this._engine.dispatchEvent(qe.containerPaused,{container:this})}}play(e){if(!Pe(this))return;const n=this._paused||e;if(this._firstStart&&!this.actualOptions.autoPlay){this._firstStart=!1;return}if(this._paused&&(this._paused=!1),n)for(const i of this.plugins.values())i.play&&i.play();this._engine.dispatchEvent(qe.containerPlay,{container:this}),this.draw(n??!1)}async refresh(){if(Pe(this))return this.stop(),this.start()}async reset(e){if(Pe(this))return this._initialSourceOptions=e,this._sourceOptions=e,this._options=fn(this._engine,this,this._initialSourceOptions,this.sourceOptions),this.actualOptions=fn(this._engine,this,this._options),this.refresh()}async start(){!Pe(this)||this.started||(await this.init(),this.started=!0,await new Promise(e=>{const n=async()=>{this._eventListeners.addListeners(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.observe(this.interactivity.element);for(const i of this.plugins.values())await i.start?.();this._engine.dispatchEvent(qe.containerStarted,{container:this}),this.play(),e()};this._delayTimeout=setTimeout(()=>void n(),this._delay)}))}stop(){if(!(!Pe(this)||!this.started)){this._delayTimeout&&(clearTimeout(this._delayTimeout),delete this._delayTimeout),this._firstStart=!0,this.started=!1,this._eventListeners.removeListeners(),this.pause(),this.particles.clear(),this.canvas.stop(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.unobserve(this.interactivity.element);for(const e of this.plugins.values())e.stop?.();for(const e of this.plugins.keys())this.plugins.delete(e);this._sourceOptions=this._options,this._engine.dispatchEvent(qe.containerStopped,{container:this})}}updateActualOptions(){this.actualOptions.responsive=[];const e=this.actualOptions.setResponsive(this.canvas.size.width,this.retina.pixelRatio,this._options);return this.actualOptions.setTheme(this._currentTheme),this._responsiveMaxWidth===e?!1:(this._responsiveMaxWidth=e,!0)}};class Kd{constructor(){this._listeners=new Map}addEventListener(e,n){this.removeEventListener(e,n);let i=this._listeners.get(e);i||(i=[],this._listeners.set(e,i)),i.push(n)}dispatchEvent(e,n){this._listeners.get(e)?.forEach(s=>s(n))}hasEventListener(e){return!!this._listeners.get(e)}removeAllEventListeners(e){e?this._listeners.delete(e):this._listeners=new Map}removeEventListener(e,n){const i=this._listeners.get(e);if(!i)return;const s=i.length,o=i.indexOf(n);o<_s||(s===wi?this._listeners.delete(e):i.splice(o,wi))}}async function Qi(t,e,n,i=!1){let s=e.get(t);return(!s||i)&&(s=await Promise.all([...n.values()].map(o=>o(t))),e.set(t,s)),s}async function Xd(t){const e=st(t.url,t.index);if(!e)return t.fallback;const n=await fetch(e);return n.ok?await n.json():(an().error(`${ot} ${n.status} while retrieving config file`),t.fallback)}const Zd=t=>{let e;if(t instanceof HTMLCanvasElement||t.tagName.toLowerCase()===$i)e=t,e.dataset[Xt]||(e.dataset[Xt]=So);else{const i=t.getElementsByTagName($i);i.length?(e=i[Xl],e.dataset[Xt]=So):(e=document.createElement($i),e.dataset[Xt]=ja,t.appendChild(e))}const n="100%";return e.style.width||(e.style.width=n),e.style.height||(e.style.height=n),e},eu=(t,e)=>{let n=e??document.getElementById(t);return n||(n=document.createElement("div"),n.id=t,n.dataset[Xt]=ja,document.body.append(n),n)};class tu{constructor(){this._configs=new Map,this._domArray=[],this._eventDispatcher=new Kd,this._initialized=!1,this.plugins=[],this.colorManagers=new Map,this.easingFunctions=new Map,this._initializers={interactors:new Map,movers:new Map,updaters:new Map},this.interactors=new Map,this.movers=new Map,this.updaters=new Map,this.presets=new Map,this.effectDrawers=new Map,this.shapeDrawers=new Map,this.pathGenerators=new Map}get configs(){const e={};for(const[n,i]of this._configs)e[n]=i;return e}get items(){return this._domArray}get version(){return"3.9.1"}async addColorManager(e,n=!0){this.colorManagers.set(e.key,e),await this.refresh(n)}addConfig(e){const n=e.key??e.name??"default";this._configs.set(n,e),this._eventDispatcher.dispatchEvent(qe.configAdded,{data:{name:n,config:e}})}async addEasing(e,n,i=!0){this.getEasing(e)||(this.easingFunctions.set(e,n),await this.refresh(i))}async addEffect(e,n,i=!0){tt(e,s=>{this.getEffectDrawer(s)||this.effectDrawers.set(s,n)}),await this.refresh(i)}addEventListener(e,n){this._eventDispatcher.addEventListener(e,n)}async addInteractor(e,n,i=!0){this._initializers.interactors.set(e,n),await this.refresh(i)}async addMover(e,n,i=!0){this._initializers.movers.set(e,n),await this.refresh(i)}async addParticleUpdater(e,n,i=!0){this._initializers.updaters.set(e,n),await this.refresh(i)}async addPathGenerator(e,n,i=!0){this.getPathGenerator(e)||this.pathGenerators.set(e,n),await this.refresh(i)}async addPlugin(e,n=!0){this.getPlugin(e.id)||this.plugins.push(e),await this.refresh(n)}async addPreset(e,n,i=!1,s=!0){(i||!this.getPreset(e))&&this.presets.set(e,n),await this.refresh(s)}async addShape(e,n=!0){for(const i of e.validTypes)this.getShapeDrawer(i)||this.shapeDrawers.set(i,e);await this.refresh(n)}checkVersion(e){if(this.version!==e)throw new Error(`The tsParticles version is different from the loaded plugins version. Engine version: ${this.version}. Plugin version: ${e}`)}clearPlugins(e){this.updaters.delete(e),this.movers.delete(e),this.interactors.delete(e)}dispatchEvent(e,n){this._eventDispatcher.dispatchEvent(e,n)}dom(){return this.items}domItem(e){return this.item(e)}async getAvailablePlugins(e){const n=new Map;for(const i of this.plugins)i.needsPlugin(e.actualOptions)&&n.set(i.id,await i.getPlugin(e));return n}getEasing(e){return this.easingFunctions.get(e)??(n=>n)}getEffectDrawer(e){return this.effectDrawers.get(e)}async getInteractors(e,n=!1){return Qi(e,this.interactors,this._initializers.interactors,n)}async getMovers(e,n=!1){return Qi(e,this.movers,this._initializers.movers,n)}getPathGenerator(e){return this.pathGenerators.get(e)}getPlugin(e){return this.plugins.find(n=>n.id===e)}getPreset(e){return this.presets.get(e)}getShapeDrawer(e){return this.shapeDrawers.get(e)}getSupportedEffects(){return this.effectDrawers.keys()}getSupportedShapes(){return this.shapeDrawers.keys()}async getUpdaters(e,n=!1){return Qi(e,this.updaters,this._initializers.updaters,n)}init(){this._initialized||(this._initialized=!0)}item(e){const{items:n}=this,i=n[e];if(!i||i.destroyed){n.splice(e,Ta);return}return i}async load(e){const n=e.id??e.element?.id??`tsparticles${Math.floor(ke()*Zl)}`,{index:i,url:s}=e,o=s?await Xd({fallback:e.options,url:s,index:i}):e.options,r=st(o,i),{items:c}=this,l=c.findIndex(f=>f.id.description===n),u=new Jd(this,n,r);if(l>=e0){const f=this.item(l),p=f?t0:ki;f&&!f.destroyed&&f.destroy(!1),c.splice(l,p,u)}else c.push(u);const d=eu(n,e.element),h=Zd(d);return u.canvas.loadCanvas(h),await u.start(),u}loadOptions(e,n){this.plugins.forEach(i=>i.loadOptions?.(e,n))}loadParticlesOptions(e,n,...i){const s=this.updaters.get(e);s&&s.forEach(o=>o.loadOptions?.(n,...i))}async refresh(e=!0){e&&await Promise.all(this.items.map(n=>n.refresh()))}removeEventListener(e,n){this._eventDispatcher.removeEventListener(e,n)}setOnClickHandler(e){const{items:n}=this;if(!n.length)throw new Error(`${ot} can only set click handlers after calling tsParticles.load()`);n.forEach(i=>i.addClickHandler(e))}}function nu(){const t=new tu;return t.init(),t}class bt{constructor(e){this.type=In.external,this.container=e}}class ao{constructor(e){this.type=In.particles,this.container=e}}var dt;(function(t){t.clockwise="clockwise",t.counterClockwise="counter-clockwise",t.random="random"})(dt||(dt={}));var Yo;(function(t){t.linear="linear",t.radial="radial",t.random="random"})(Yo||(Yo={}));var sn;(function(t){t.easeInBack="ease-in-back",t.easeInCirc="ease-in-circ",t.easeInCubic="ease-in-cubic",t.easeInLinear="ease-in-linear",t.easeInQuad="ease-in-quad",t.easeInQuart="ease-in-quart",t.easeInQuint="ease-in-quint",t.easeInExpo="ease-in-expo",t.easeInSine="ease-in-sine",t.easeOutBack="ease-out-back",t.easeOutCirc="ease-out-circ",t.easeOutCubic="ease-out-cubic",t.easeOutLinear="ease-out-linear",t.easeOutQuad="ease-out-quad",t.easeOutQuart="ease-out-quart",t.easeOutQuint="ease-out-quint",t.easeOutExpo="ease-out-expo",t.easeOutSine="ease-out-sine",t.easeInOutBack="ease-in-out-back",t.easeInOutCirc="ease-in-out-circ",t.easeInOutCubic="ease-in-out-cubic",t.easeInOutLinear="ease-in-out-linear",t.easeInOutQuad="ease-in-out-quad",t.easeInOutQuart="ease-in-out-quart",t.easeInOutQuint="ease-in-out-quint",t.easeInOutExpo="ease-in-out-expo",t.easeInOutSine="ease-in-out-sine"})(sn||(sn={}));const co=nu();cn()||(window.tsParticles=co);const iu=t=>{const e=t.id??"tsparticles";return w.useEffect(()=>{let n;return co.load({id:e,url:t.url,options:t.options}).then(i=>{var s;n=i,(s=t.particlesLoaded)==null||s.call(t,i)}),()=>{n?.destroy()}},[e,t,t.url,t.options]),a.jsx("div",{id:e,className:t.className})};async function su(t){await t(co)}const As=.5,ou=2,Rt=0,ut=1,Qo=60,Jo=0,ru=.01,au=Math.PI*ou;function cu(t){const e=t.initialPosition,{dx:n,dy:i}=He(e,t.position),s=Math.abs(n),o=Math.abs(i),{maxDistance:r}=t.retina,c=r.horizontal,l=r.vertical;if(!c&&!l)return;const u=(c&&s>=c)??!1,d=(l&&o>=l)??!1;if((u||d)&&!t.misplaced)t.misplaced=!!c&&s>c||!!l&&o>l,c&&(t.velocity.x=t.velocity.y*As-t.velocity.x),l&&(t.velocity.y=t.velocity.x*As-t.velocity.y);else if((!c||s<c)&&(!l||o<l)&&t.misplaced)t.misplaced=!1;else if(t.misplaced){const h=t.position,f=t.velocity;c&&(h.x<e.x&&f.x<Rt||h.x>e.x&&f.x>Rt)&&(f.x*=-ke()),l&&(h.y<e.y&&f.y<Rt||h.y>e.y&&f.y>Rt)&&(f.y*=-ke())}}function lu(t,e,n,i,s,o,r){uu(t,r);const c=t.gravity,l=c?.enable&&c.inverse?-ut:ut;s&&n&&(t.velocity.x+=s*r.factor/(Qo*n)),c?.enable&&n&&(t.velocity.y+=l*(c.acceleration*r.factor)/(Qo*n));const u=t.moveDecay;t.velocity.multTo(u);const d=t.velocity.mult(n);c?.enable&&i>Rt&&(!c.inverse&&d.y>=Rt&&d.y>=i||c.inverse&&d.y<=Rt&&d.y<=-i)&&(d.y=l*i,n&&(t.velocity.y=d.y/n));const h=t.options.zIndex,f=(ut-t.zIndexFactor)**h.velocityRate;d.multTo(f),d.multTo(o);const{position:p}=t;p.addTo(d),e.vibrate&&(p.x+=Math.sin(p.x*Math.cos(p.y))*o,p.y+=Math.cos(p.y*Math.sin(p.x))*o)}function du(t,e,n){const i=t.container;if(!t.spin)return;const s=t.spin.direction===dt.clockwise,o={x:s?Math.cos:Math.sin,y:s?Math.sin:Math.cos};t.position.x=t.spin.center.x+t.spin.radius*o.x(t.spin.angle)*n,t.position.y=t.spin.center.y+t.spin.radius*o.y(t.spin.angle)*n,t.spin.radius+=t.spin.acceleration*n;const r=Math.max(i.canvas.size.width,i.canvas.size.height),c=r*As;t.spin.radius>c?(t.spin.radius=c,t.spin.acceleration*=-ut):t.spin.radius<Jo&&(t.spin.radius=Jo,t.spin.acceleration*=-ut),t.spin.angle+=e*ru*(ut-t.spin.radius/r)}function uu(t,e){const n=t.options,i=n.move.path;if(!i.enable)return;if(t.lastPathTime<=t.pathDelay){t.lastPathTime+=e.value;return}const o=t.pathGenerator?.generate(t,e);o&&t.velocity.addTo(o),i.clamp&&(t.velocity.x=rt(t.velocity.x,-ut,ut),t.velocity.y=rt(t.velocity.y,-ut,ut)),t.lastPathTime-=t.pathDelay}function hu(t){return t.slow.inRange?t.slow.factor:ut}function fu(t){const e=t.container,n=t.options,i=n.move.spin;if(!i.enable)return;const s=i.position??{x:50,y:50},o=.01,r={x:s.x*o*e.canvas.size.width,y:s.y*o*e.canvas.size.height},c=t.getPosition(),l=et(c,r),u=q(i.acceleration);t.retina.spinAcceleration=u*e.retina.pixelRatio,t.spin={center:r,direction:t.velocity.x>=Rt?dt.clockwise:dt.counterClockwise,angle:ke()*au,radius:l,acceleration:t.retina.spinAcceleration}}const pu=2,xu=1,mu=1;class gu{init(e){const n=e.options,i=n.move.gravity;e.gravity={enable:i.enable,acceleration:q(i.acceleration),inverse:i.inverse},fu(e)}isEnabled(e){return!e.destroyed&&e.options.move.enable}move(e,n){const i=e.options,s=i.move;if(!s.enable)return;const o=e.container,r=o.retina.pixelRatio;e.retina.moveSpeed??=q(s.speed)*r,e.retina.moveDrift??=q(e.options.move.drift)*r;const c=hu(e),l=o.retina.reduceFactor,u=e.retina.moveSpeed,d=e.retina.moveDrift,h=mt(i.size.value)*r,f=s.size?e.getRadius()/h:xu,p=n.factor||mu,x=u*f*c*p/pu,y=e.retina.maxSpeed??o.retina.maxSpeed;s.spin.enable?du(e,x,l):lu(e,s,x,y,d,l,n),cu(e)}}async function yu(t,e=!0){t.checkVersion("3.9.1"),await t.addMover("base",()=>Promise.resolve(new gu),e)}const bu=2,vu=Math.PI*bu,ku=0,Ko={x:0,y:0};function wu(t){const{context:e,particle:n,radius:i}=t;n.circleRange||(n.circleRange={min:ku,max:vu});const s=n.circleRange;e.arc(Ko.x,Ko.y,i,s.min,s.max,!1)}const Su=12,Cu=360,Xo=0;class Eu{constructor(){this.validTypes=["circle"]}draw(e){wu(e)}getSidesCount(){return Su}particleInit(e,n){const i=n.shapeData,s=i?.angle??{max:Cu,min:Xo};n.circleRange=bn(s)?{min:Bt(s.min),max:Bt(s.max)}:{min:Xo,max:Bt(s)}}}async function _u(t,e=!0){t.checkVersion("3.9.1"),await t.addShape(new Eu,e)}class Ou{constructor(e,n){this._container=e,this._engine=n}init(e){const n=Un(this._engine,e.options.color,e.id,e.options.reduceDuplicates);n&&(e.color=Qa(n,e.options.color.animation,this._container.retina.reduceFactor))}isEnabled(e){const{h:n,s:i,l:s}=e.options.color.animation,{color:o}=e;return!e.destroyed&&!e.spawning&&(o?.h.value!==void 0&&n.enable||o?.s.value!==void 0&&i.enable||o?.l.value!==void 0&&s.enable)}update(e,n){Ja(e.color,n)}}async function Pu(t,e=!0){t.checkVersion("3.9.1"),await t.addParticleUpdater("color",n=>Promise.resolve(new Ou(n,t)),e)}var Jt;(function(t){t[t.r=1]="r",t[t.g=2]="g",t[t.b=3]="b",t[t.a=4]="a"})(Jt||(Jt={}));const Du=/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,ju=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i,Zn=16,Au=1,Tu=255;class Iu{constructor(){this.key="hex",this.stringPrefix="#"}handleColor(e){return this._parseString(e.value)}handleRangeColor(e){return this._parseString(e.value)}parseString(e){return this._parseString(e)}_parseString(e){if(typeof e!="string"||!e?.startsWith(this.stringPrefix))return;const n=e.replace(Du,(s,o,r,c,l)=>o+o+r+r+c+c+(l!==void 0?l+l:"")),i=ju.exec(n);return i?{a:i[Jt.a]!==void 0?parseInt(i[Jt.a],Zn)/Tu:Au,b:parseInt(i[Jt.b],Zn),g:parseInt(i[Jt.g],Zn),r:parseInt(i[Jt.r],Zn)}:void 0}}async function Mu(t,e=!0){t.checkVersion("3.9.1"),await t.addColorManager(new Iu,e)}var vn;(function(t){t[t.h=1]="h",t[t.s=2]="s",t[t.l=3]="l",t[t.a=5]="a"})(vn||(vn={}));class Ru{constructor(){this.key="hsl",this.stringPrefix="hsl"}handleColor(e){const n=e.value,i=n.hsl??e.value;if(i.h!==void 0&&i.s!==void 0&&i.l!==void 0)return jn(i)}handleRangeColor(e){const n=e.value,i=n.hsl??e.value;if(i.h!==void 0&&i.l!==void 0)return jn({h:q(i.h),l:q(i.l),s:q(i.s)})}parseString(e){if(!e.startsWith("hsl"))return;const n=/hsla?\(\s*(\d+)\s*[\s,]\s*(\d+)%\s*[\s,]\s*(\d+)%\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i,i=n.exec(e),s=4,o=1,r=10;return i?$0({a:i.length>s?La(i[vn.a]):o,h:parseInt(i[vn.h],r),l:parseInt(i[vn.l],r),s:parseInt(i[vn.s],r)}):void 0}}async function Bu(t,e=!0){t.checkVersion("3.9.1"),await t.addColorManager(new Ru,e)}class zu{constructor(e){this.container=e}init(e){const n=e.options.opacity,i=1;e.opacity=Ga(n,i);const s=n.animation;s.enable&&(e.opacity.velocity=q(s.speed)/Mt*this.container.retina.reduceFactor,s.sync||(e.opacity.velocity*=ke()))}isEnabled(e){return!e.destroyed&&!e.spawning&&!!e.opacity&&e.opacity.enable&&((e.opacity.maxLoops??0)<=0||(e.opacity.maxLoops??0)>0&&(e.opacity.loops??0)<(e.opacity.maxLoops??0))}reset(e){e.opacity&&(e.opacity.time=0,e.opacity.loops=0)}update(e,n){!this.isEnabled(e)||!e.opacity||io(e,e.opacity,!0,e.options.opacity.animation.destroy,n)}}async function Lu(t,e=!0){t.checkVersion("3.9.1"),await t.addParticleUpdater("opacity",n=>Promise.resolve(new zu(n)),e)}const Ci=0,_n=0;function Nu(t){if(t.outMode!==Te.bounce&&t.outMode!==Te.split||t.direction!==de.left&&t.direction!==de.right)return;t.bounds.right<_n&&t.direction===de.left?t.particle.position.x=t.size+t.offset.x:t.bounds.left>t.canvasSize.width&&t.direction===de.right&&(t.particle.position.x=t.canvasSize.width-t.size-t.offset.x);const e=t.particle.velocity.x;let n=!1;if(t.direction===de.right&&t.bounds.right>=t.canvasSize.width&&e>Ci||t.direction===de.left&&t.bounds.left<=_n&&e<Ci){const s=q(t.particle.options.bounce.horizontal.value);t.particle.velocity.x*=-s,n=!0}if(!n)return;const i=t.offset.x+t.size;t.bounds.right>=t.canvasSize.width&&t.direction===de.right?t.particle.position.x=t.canvasSize.width-i:t.bounds.left<=_n&&t.direction===de.left&&(t.particle.position.x=i),t.outMode===Te.split&&t.particle.destroy()}function Fu(t){if(t.outMode!==Te.bounce&&t.outMode!==Te.split||t.direction!==de.bottom&&t.direction!==de.top)return;t.bounds.bottom<_n&&t.direction===de.top?t.particle.position.y=t.size+t.offset.y:t.bounds.top>t.canvasSize.height&&t.direction===de.bottom&&(t.particle.position.y=t.canvasSize.height-t.size-t.offset.y);const e=t.particle.velocity.y;let n=!1;if(t.direction===de.bottom&&t.bounds.bottom>=t.canvasSize.height&&e>Ci||t.direction===de.top&&t.bounds.top<=_n&&e<Ci){const s=q(t.particle.options.bounce.vertical.value);t.particle.velocity.y*=-s,n=!0}if(!n)return;const i=t.offset.y+t.size;t.bounds.bottom>=t.canvasSize.height&&t.direction===de.bottom?t.particle.position.y=t.canvasSize.height-i:t.bounds.top<=_n&&t.direction===de.top&&(t.particle.position.y=i),t.outMode===Te.split&&t.particle.destroy()}class $u{constructor(e){this.container=e,this.modes=[Te.bounce,Te.split]}update(e,n,i,s){if(!this.modes.includes(s))return;const o=this.container;let r=!1;for(const f of o.plugins.values())if(f.particleBounce!==void 0&&(r=f.particleBounce(e,i,n)),r)break;if(r)return;const c=e.getPosition(),l=e.offset,u=e.getRadius(),d=Qn(c,u),h=o.canvas.size;Nu({particle:e,outMode:s,direction:n,bounds:d,canvasSize:h,offset:l,size:u}),Fu({particle:e,outMode:s,direction:n,bounds:d,canvasSize:h,offset:l,size:u})}}const ei=0;class Vu{constructor(e){this.container=e,this.modes=[Te.destroy]}update(e,n,i,s){if(!this.modes.includes(s))return;const o=this.container;switch(e.outType){case ft.normal:case ft.outside:if(eo(e.position,o.canvas.size,Le.origin,e.getRadius(),n))return;break;case ft.inside:{const{dx:r,dy:c}=He(e.position,e.moveCenter),{x:l,y:u}=e.velocity;if(l<ei&&r>e.moveCenter.radius||u<ei&&c>e.moveCenter.radius||l>=ei&&r<-e.moveCenter.radius||u>=ei&&c<-e.moveCenter.radius)return;break}}o.particles.remove(e,e.group,!0)}}const ti=0;class Gu{constructor(e){this.container=e,this.modes=[Te.none]}update(e,n,i,s){if(!this.modes.includes(s)||((e.options.move.distance.horizontal&&(n===de.left||n===de.right))??(e.options.move.distance.vertical&&(n===de.top||n===de.bottom))))return;const o=e.options.move.gravity,r=this.container,c=r.canvas.size,l=e.getRadius();if(o.enable){const u=e.position;(!o.inverse&&u.y>c.height+l&&n===de.bottom||o.inverse&&u.y<-l&&n===de.top)&&r.particles.remove(e)}else{if(e.velocity.y>ti&&e.position.y<=c.height+l||e.velocity.y<ti&&e.position.y>=-l||e.velocity.x>ti&&e.position.x<=c.width+l||e.velocity.x<ti&&e.position.x>=-l)return;eo(e.position,r.canvas.size,Le.origin,l,n)||r.particles.remove(e)}}}const ni=0,ii=0;class Uu{constructor(e){this.container=e,this.modes=[Te.out]}update(e,n,i,s){if(!this.modes.includes(s))return;const o=this.container;switch(e.outType){case ft.inside:{const{x:r,y:c}=e.velocity,l=Le.origin;l.length=e.moveCenter.radius,l.angle=e.velocity.angle+Math.PI,l.addTo(Le.create(e.moveCenter));const{dx:u,dy:d}=He(e.position,l);if(r<=ni&&u>=ii||c<=ni&&d>=ii||r>=ni&&u<=ii||c>=ni&&d<=ii)return;e.position.x=Math.floor(Ze({min:0,max:o.canvas.size.width})),e.position.y=Math.floor(Ze({min:0,max:o.canvas.size.height}));const{dx:h,dy:f}=He(e.position,e.moveCenter);e.direction=Math.atan2(-f,-h),e.velocity.angle=e.direction;break}default:{if(eo(e.position,o.canvas.size,Le.origin,e.getRadius(),n))return;switch(e.outType){case ft.outside:{e.position.x=Math.floor(Ze({min:-e.moveCenter.radius,max:e.moveCenter.radius}))+e.moveCenter.x,e.position.y=Math.floor(Ze({min:-e.moveCenter.radius,max:e.moveCenter.radius}))+e.moveCenter.y;const{dx:r,dy:c}=He(e.position,e.moveCenter);e.moveCenter.radius&&(e.direction=Math.atan2(c,r),e.velocity.angle=e.direction);break}case ft.normal:{const r=e.options.move.warp,c=o.canvas.size,l={bottom:c.height+e.getRadius()+e.offset.y,left:-e.getRadius()-e.offset.x,right:c.width+e.getRadius()+e.offset.x,top:-e.getRadius()-e.offset.y},u=e.getRadius(),d=Qn(e.position,u);n===de.right&&d.left>c.width+e.offset.x?(e.position.x=l.left,e.initialPosition.x=e.position.x,r||(e.position.y=ke()*c.height,e.initialPosition.y=e.position.y)):n===de.left&&d.right<-e.offset.x&&(e.position.x=l.right,e.initialPosition.x=e.position.x,r||(e.position.y=ke()*c.height,e.initialPosition.y=e.position.y)),n===de.bottom&&d.top>c.height+e.offset.y?(r||(e.position.x=ke()*c.width,e.initialPosition.x=e.position.x),e.position.y=l.top,e.initialPosition.y=e.position.y):n===de.top&&d.bottom<-e.offset.y&&(r||(e.position.x=ke()*c.width,e.initialPosition.x=e.position.x),e.position.y=l.bottom,e.initialPosition.y=e.position.y);break}}break}}}}const Wu=(t,e)=>t.default===e||t.bottom===e||t.left===e||t.right===e||t.top===e;class qu{constructor(e){this._addUpdaterIfMissing=(n,i,s)=>{const o=n.options.move.outModes;!this.updaters.has(i)&&Wu(o,i)&&this.updaters.set(i,s(this.container))},this._updateOutMode=(n,i,s,o)=>{for(const r of this.updaters.values())r.update(n,o,i,s)},this.container=e,this.updaters=new Map}init(e){this._addUpdaterIfMissing(e,Te.bounce,n=>new $u(n)),this._addUpdaterIfMissing(e,Te.out,n=>new Uu(n)),this._addUpdaterIfMissing(e,Te.destroy,n=>new Vu(n)),this._addUpdaterIfMissing(e,Te.none,n=>new Gu(n))}isEnabled(e){return!e.destroyed&&!e.spawning}update(e,n){const i=e.options.move.outModes;this._updateOutMode(e,n,i.bottom??i.default,de.bottom),this._updateOutMode(e,n,i.left??i.default,de.left),this._updateOutMode(e,n,i.right??i.default,de.right),this._updateOutMode(e,n,i.top??i.default,de.top)}}async function Hu(t,e=!0){t.checkVersion("3.9.1"),await t.addParticleUpdater("outModes",n=>Promise.resolve(new qu(n)),e)}var kn;(function(t){t[t.r=1]="r",t[t.g=2]="g",t[t.b=3]="b",t[t.a=5]="a"})(kn||(kn={}));class Yu{constructor(){this.key="rgb",this.stringPrefix="rgb"}handleColor(e){const n=e.value,i=n.rgb??e.value;if(i.r!==void 0)return i}handleRangeColor(e){const n=e.value,i=n.rgb??e.value;if(i.r!==void 0)return{r:q(i.r),g:q(i.g),b:q(i.b)}}parseString(e){if(!e.startsWith(this.stringPrefix))return;const n=/rgba?\(\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i,i=n.exec(e),s=10;return i?{a:i.length>4?La(i[kn.a]):1,b:parseInt(i[kn.b],s),g:parseInt(i[kn.g],s),r:parseInt(i[kn.r],s)}:void 0}}async function Qu(t,e=!0){t.checkVersion("3.9.1"),await t.addColorManager(new Yu,e)}const Gt=0;class Ju{init(e){const n=e.container,i=e.options.size,s=i.animation;s.enable&&(e.size.velocity=(e.retina.sizeAnimationSpeed??n.retina.sizeAnimationSpeed)/Mt*n.retina.reduceFactor,s.sync||(e.size.velocity*=ke()))}isEnabled(e){return!e.destroyed&&!e.spawning&&e.size.enable&&((e.size.maxLoops??Gt)<=Gt||(e.size.maxLoops??Gt)>Gt&&(e.size.loops??Gt)<(e.size.maxLoops??Gt))}reset(e){e.size.loops=Gt}update(e,n){this.isEnabled(e)&&io(e,e.size,!0,e.options.size.animation.destroy,n)}}async function Ku(t,e=!0){t.checkVersion("3.9.1"),await t.addParticleUpdater("size",()=>Promise.resolve(new Ju),e)}async function Xu(t,e=!0){t.checkVersion("3.9.1"),await Mu(t,!1),await Bu(t,!1),await Qu(t,!1),await yu(t,!1),await _u(t,!1),await Pu(t,!1),await Lu(t,!1),await Hu(t,!1),await Ku(t,!1),await t.refresh(e)}async function Zu(t,e=!0){t.checkVersion("3.9.1"),await t.addEasing(sn.easeInQuad,n=>n**2,!1),await t.addEasing(sn.easeOutQuad,n=>1-(1-n)**2,!1),await t.addEasing(sn.easeInOutQuad,n=>n<.5?2*n**2:1-(-2*n+2)**2/2,!1),await t.refresh(e)}function e1(t,e){const{context:n,opacity:i}=t,s=.5,o=n.globalAlpha;if(!e)return;const r=e.width,c=r*s;n.globalAlpha=i,n.drawImage(e,-c,-c,r,r),n.globalAlpha=o}const Ji='"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"',Zo=0;class t1{constructor(){this.validTypes=["emoji"],this._emojiShapeDict=new Map}destroy(){for(const[e,n]of this._emojiShapeDict)n instanceof ImageBitmap&&n?.close(),this._emojiShapeDict.delete(e)}draw(e){const n=e.particle.emojiDataKey;if(!n)return;const i=this._emojiShapeDict.get(n);i&&e1(e,i)}async init(e){const n=e.actualOptions,{validTypes:i}=this;if(!i.find(r=>De(r,n.particles.shape.type)))return;const s=[Fo(Ji)],o=i.map(r=>n.particles.shape.options[r]).find(r=>!!r);o&&tt(o,r=>{r.font&&s.push(Fo(r.font))}),await Promise.all(s)}particleDestroy(e){e.emojiDataKey=void 0}particleInit(e,n){const s=n.shapeData;if(!s?.value)return;const o=st(s.value,n.randomIndexData);if(!o)return;const r=typeof o=="string"?{font:s.font??Ji,padding:s.padding??Zo,value:o}:{font:Ji,padding:Zo,...s,...o},c=r.font,l=r.value,u=`${l}_${c}`;if(this._emojiShapeDict.has(u)){n.emojiDataKey=u;return}const d=r.padding*2,h=mt(n.size.value),f=h+d,p=f*2;let x;if(typeof OffscreenCanvas<"u"){const y=new OffscreenCanvas(p,p),m=y.getContext("2d");if(!m)return;m.font=`400 ${h*2}px ${c}`,m.textBaseline="middle",m.textAlign="center",m.fillText(l,f,f),x=y.transferToImageBitmap()}else{const y=document.createElement("canvas");y.width=p,y.height=p;const m=y.getContext("2d");if(!m)return;m.font=`400 ${h*2}px ${c}`,m.textBaseline="middle",m.textAlign="center",m.fillText(l,f,f),x=y}this._emojiShapeDict.set(u,x),n.emojiDataKey=u}}async function n1(t,e=!0){t.checkVersion("3.9.1"),await t.addShape(new t1,e)}const i1=1,s1=1,ic=0;function sc(t,e,n,i,s,o){const r=e.actualOptions.interactivity.modes.attract;if(!r)return;const c=e.particles.quadTree.query(s,o);for(const l of c){const{dx:u,dy:d,distance:h}=He(l.position,n),f=r.speed*r.factor,p=rt(t.getEasing(r.easing)(s1-h/i)*f,i1,r.maxSpeed),x=Le.create(h?u/h*p:f,h?d/h*p:f);l.position.subFrom(x)}}function o1(t,e,n){e.attract||(e.attract={particles:[]});const{attract:i}=e;if(i.finish||(i.count||(i.count=0),i.count++,i.count===e.particles.count&&(i.finish=!0)),i.clicking){const s=e.interactivity.mouse.clickPosition,o=e.retina.attractModeDistance;if(!o||o<ic||!s)return;sc(t,e,s,o,new Ge(s.x,s.y,o),r=>n(r))}else i.clicking===!1&&(i.particles=[])}function r1(t,e,n){const i=e.interactivity.mouse.position,s=e.retina.attractModeDistance;!s||s<ic||!i||sc(t,e,i,s,new Ge(i.x,i.y,s),o=>n(o))}class a1{constructor(){this.distance=200,this.duration=.4,this.easing=sn.easeOutQuad,this.factor=1,this.maxSpeed=50,this.speed=1}load(e){z(e)||(e.distance!==void 0&&(this.distance=e.distance),e.duration!==void 0&&(this.duration=e.duration),e.easing!==void 0&&(this.easing=e.easing),e.factor!==void 0&&(this.factor=e.factor),e.maxSpeed!==void 0&&(this.maxSpeed=e.maxSpeed),e.speed!==void 0&&(this.speed=e.speed))}}const zn="attract";let c1=class extends bt{constructor(e,n){super(n),this._engine=e,n.attract||(n.attract={particles:[]}),this.handleClickMode=i=>{const s=this.container.actualOptions,o=s.interactivity.modes.attract;if(!(!o||i!==zn)){n.attract||(n.attract={particles:[]}),n.attract.clicking=!0,n.attract.count=0;for(const r of n.attract.particles)this.isEnabled(r)&&r.velocity.setTo(r.initialVelocity);n.attract.particles=[],n.attract.finish=!1,setTimeout(()=>{n.destroyed||(n.attract||(n.attract={particles:[]}),n.attract.clicking=!1)},o.duration*$e)}}}clear(){}init(){const e=this.container,n=e.actualOptions.interactivity.modes.attract;n&&(e.retina.attractModeDistance=n.distance*e.retina.pixelRatio)}interact(){const e=this.container,n=e.actualOptions,i=e.interactivity.status===on,s=n.interactivity.events,{enable:o,mode:r}=s.onHover,{enable:c,mode:l}=s.onClick;i&&o&&De(zn,r)?r1(this._engine,this.container,u=>this.isEnabled(u)):c&&De(zn,l)&&o1(this._engine,this.container,u=>this.isEnabled(u))}isEnabled(e){const n=this.container,i=n.actualOptions,s=n.interactivity.mouse,o=(e?.interactivity??i.interactivity).events;if((!s.position||!o.onHover.enable)&&(!s.clickPosition||!o.onClick.enable))return!1;const r=o.onHover.mode,c=o.onClick.mode;return De(zn,r)||De(zn,c)}loadModeOptions(e,...n){e.attract||(e.attract=new a1);for(const i of n)e.attract.load(i?.attract)}reset(){}};async function l1(t,e=!0){t.checkVersion("3.9.1"),await t.addInteractor("externalAttract",n=>Promise.resolve(new c1(t,n)),e)}const d1=2,xi=.5,u1=Math.PI*xi,er=2,oc=10,h1=0;function rc(t,e,n,i,s){const o=t.particles.quadTree.query(i,s);for(const r of o)i instanceof Ge?$a(Ps(r),{position:e,mass:n**d1*u1,velocity:Le.origin,factor:Le.origin}):i instanceof pt&&I0(r,Qn(e,n))}function f1(t,e,n,i){const s=document.querySelectorAll(e);s.length&&s.forEach(o=>{const r=o,c=t.retina.pixelRatio,l={x:(r.offsetLeft+r.offsetWidth*xi)*c,y:(r.offsetTop+r.offsetHeight*xi)*c},u=r.offsetWidth*xi*c,d=oc*c,h=n.type===An.circle?new Ge(l.x,l.y,u+d):new pt(r.offsetLeft*c-d,r.offsetTop*c-d,r.offsetWidth*c+d*er,r.offsetHeight*c+d*er);i(l,u,h)})}function p1(t,e,n,i){no(n,e,(s,o)=>f1(t,s,o,(r,c,l)=>rc(t,r,c,l,i)))}function x1(t,e){const n=t.retina.pixelRatio,i=oc*n,s=t.interactivity.mouse.position,o=t.retina.bounceModeDistance;!o||o<h1||!s||rc(t,s,o,new Ge(s.x,s.y,o+i),e)}class m1{constructor(){this.distance=200}load(e){z(e)||e.distance!==void 0&&(this.distance=e.distance)}}const si="bounce";class g1 extends bt{constructor(e){super(e)}clear(){}init(){const e=this.container,n=e.actualOptions.interactivity.modes.bounce;n&&(e.retina.bounceModeDistance=n.distance*e.retina.pixelRatio)}interact(){const e=this.container,n=e.actualOptions,i=n.interactivity.events,s=e.interactivity.status===on,o=i.onHover.enable,r=i.onHover.mode,c=i.onDiv;s&&o&&De(si,r)?x1(this.container,l=>this.isEnabled(l)):p1(this.container,c,si,l=>this.isEnabled(l))}isEnabled(e){const n=this.container,i=n.actualOptions,s=n.interactivity.mouse,o=(e?.interactivity??i.interactivity).events,r=o.onDiv;return!!s.position&&o.onHover.enable&&De(si,o.onHover.mode)||to(si,r)}loadModeOptions(e,...n){e.bounce||(e.bounce=new m1);for(const i of n)e.bounce.load(i?.bounce)}reset(){}}async function y1(t,e=!0){t.checkVersion("3.9.1"),await t.addInteractor("externalBounce",n=>Promise.resolve(new g1(n)),e)}class ac{constructor(){this.distance=200,this.duration=.4,this.mix=!1}load(e){if(!z(e)){if(e.distance!==void 0&&(this.distance=e.distance),e.duration!==void 0&&(this.duration=e.duration),e.mix!==void 0&&(this.mix=e.mix),e.opacity!==void 0&&(this.opacity=e.opacity),e.color!==void 0){const n=yt(this.color)?void 0:this.color;this.color=tt(e.color,i=>We.create(n,i))}e.size!==void 0&&(this.size=e.size)}}}class b1 extends ac{constructor(){super(),this.selectors=[]}load(e){super.load(e),!z(e)&&e.selectors!==void 0&&(this.selectors=e.selectors)}}class v1 extends ac{load(e){super.load(e),!z(e)&&(this.divs=tt(e.divs,n=>{const i=new b1;return i.load(n),i}))}}var xt;(function(t){t.color="color",t.opacity="opacity",t.size="size"})(xt||(xt={}));function tr(t,e,n,i){if(e>=n){const s=t+(e-n)*i;return rt(s,t,e)}else if(e<n){const s=t-(n-e)*i;return rt(s,e,t)}}const Ut="bubble",Ki=0,k1=0,w1=2,nr=1,ir=1,S1=0,C1=0,Xi=.5,Zi=1;class E1 extends bt{constructor(e,n){super(e),this._clickBubble=()=>{const i=this.container,s=i.actualOptions,o=i.interactivity.mouse.clickPosition,r=s.interactivity.modes.bubble;if(!r||!o)return;i.bubble||(i.bubble={});const c=i.retina.bubbleModeDistance;if(!c||c<Ki)return;const l=i.particles.quadTree.queryCircle(o,c,d=>this.isEnabled(d)),{bubble:u}=i;for(const d of l){if(!u.clicking)continue;d.bubble.inRange=!u.durationEnd;const h=d.getPosition(),f=et(h,o),p=(new Date().getTime()-(i.interactivity.mouse.clickTime??k1))/$e;p>r.duration&&(u.durationEnd=!0),p>r.duration*w1&&(u.clicking=!1,u.durationEnd=!1);const x={bubbleObj:{optValue:i.retina.bubbleModeSize,value:d.bubble.radius},particlesObj:{optValue:mt(d.options.size.value)*i.retina.pixelRatio,value:d.size.value},type:xt.size};this._process(d,f,p,x);const y={bubbleObj:{optValue:r.opacity,value:d.bubble.opacity},particlesObj:{optValue:mt(d.options.opacity.value),value:d.opacity?.value??nr},type:xt.opacity};this._process(d,f,p,y),!u.durationEnd&&f<=c?this._hoverBubbleColor(d,f):delete d.bubble.color}},this._hoverBubble=()=>{const i=this.container,s=i.interactivity.mouse.position,o=i.retina.bubbleModeDistance;if(!o||o<Ki||!s)return;const r=i.particles.quadTree.queryCircle(s,o,c=>this.isEnabled(c));for(const c of r){c.bubble.inRange=!0;const l=c.getPosition(),u=et(l,s),d=ir-u/o;u<=o?d>=C1&&i.interactivity.status===on&&(this._hoverBubbleSize(c,d),this._hoverBubbleOpacity(c,d),this._hoverBubbleColor(c,d)):this.reset(c),i.interactivity.status===ws&&this.reset(c)}},this._hoverBubbleColor=(i,s,o)=>{const r=this.container.actualOptions,c=o??r.interactivity.modes.bubble;if(c){if(!i.bubble.finalColor){const l=c.color;if(!l)return;const u=st(l);i.bubble.finalColor=Un(this._engine,u)}if(i.bubble.finalColor)if(c.mix){i.bubble.color=void 0;const l=i.getFillColor();i.bubble.color=l?qa(so(l,i.bubble.finalColor,ir-s,s)):i.bubble.finalColor}else i.bubble.color=i.bubble.finalColor}},this._hoverBubbleOpacity=(i,s,o)=>{const r=this.container,c=r.actualOptions,l=o?.opacity??c.interactivity.modes.bubble?.opacity;if(!l)return;const u=i.options.opacity.value,d=i.opacity?.value??nr,h=tr(d,l,mt(u),s);h!==void 0&&(i.bubble.opacity=h)},this._hoverBubbleSize=(i,s,o)=>{const r=this.container,c=o?.size?o.size*r.retina.pixelRatio:r.retina.bubbleModeSize;if(c===void 0)return;const l=mt(i.options.size.value)*r.retina.pixelRatio,u=i.size.value,d=tr(u,c,l,s);d!==void 0&&(i.bubble.radius=d)},this._process=(i,s,o,r)=>{const c=this.container,l=r.bubbleObj.optValue,u=c.actualOptions,d=u.interactivity.modes.bubble;if(!d||l===void 0)return;const h=d.duration,f=c.retina.bubbleModeDistance,p=r.particlesObj.optValue,x=r.bubbleObj.value,y=r.particlesObj.value??S1,m=r.type;if(!(!f||f<Ki||l===p))if(c.bubble||(c.bubble={}),c.bubble.durationEnd)x&&(m===xt.size&&delete i.bubble.radius,m===xt.opacity&&delete i.bubble.opacity);else if(s<=f){if((x??y)!==l){const v=y-o*(y-l)/h;m===xt.size&&(i.bubble.radius=v),m===xt.opacity&&(i.bubble.opacity=v)}}else m===xt.size&&delete i.bubble.radius,m===xt.opacity&&delete i.bubble.opacity},this._singleSelectorHover=(i,s,o)=>{const r=this.container,c=document.querySelectorAll(s),l=r.actualOptions.interactivity.modes.bubble;!l||!c.length||c.forEach(u=>{const d=u,h=r.retina.pixelRatio,f={x:(d.offsetLeft+d.offsetWidth*Xi)*h,y:(d.offsetTop+d.offsetHeight*Xi)*h},p=d.offsetWidth*Xi*h,x=o.type===An.circle?new Ge(f.x,f.y,p):new pt(d.offsetLeft*h,d.offsetTop*h,d.offsetWidth*h,d.offsetHeight*h),y=r.particles.quadTree.query(x,m=>this.isEnabled(m));for(const m of y){if(!x.contains(m.getPosition()))continue;m.bubble.inRange=!0;const g=l.divs,v=Fa(g,d);(!m.bubble.div||m.bubble.div!==d)&&(this.clear(m,i,!0),m.bubble.div=d),this._hoverBubbleSize(m,Zi,v),this._hoverBubbleOpacity(m,Zi,v),this._hoverBubbleColor(m,Zi,v)}})},this._engine=n,e.bubble||(e.bubble={}),this.handleClickMode=i=>{i===Ut&&(e.bubble||(e.bubble={}),e.bubble.clicking=!0)}}clear(e,n,i){e.bubble.inRange&&!i||(delete e.bubble.div,delete e.bubble.opacity,delete e.bubble.radius,delete e.bubble.color)}init(){const e=this.container,n=e.actualOptions.interactivity.modes.bubble;n&&(e.retina.bubbleModeDistance=n.distance*e.retina.pixelRatio,n.size!==void 0&&(e.retina.bubbleModeSize=n.size*e.retina.pixelRatio))}interact(e){const n=this.container.actualOptions,i=n.interactivity.events,s=i.onHover,o=i.onClick,r=s.enable,c=s.mode,l=o.enable,u=o.mode,d=i.onDiv;r&&De(Ut,c)?this._hoverBubble():l&&De(Ut,u)?this._clickBubble():no(Ut,d,(h,f)=>this._singleSelectorHover(e,h,f))}isEnabled(e){const n=this.container,i=n.actualOptions,s=n.interactivity.mouse,o=(e?.interactivity??i.interactivity).events,{onClick:r,onDiv:c,onHover:l}=o,u=to(Ut,c);return u||l.enable&&s.position||r.enable&&s.clickPosition?De(Ut,l.mode)||De(Ut,r.mode)||u:!1}loadModeOptions(e,...n){e.bubble||(e.bubble=new v1);for(const i of n)e.bubble.load(i?.bubble)}reset(e){e.bubble.inRange=!1}}async function _1(t,e=!0){t.checkVersion("3.9.1"),await t.addInteractor("externalBubble",n=>Promise.resolve(new E1(n,t)),e)}class O1{constructor(){this.opacity=.5}load(e){z(e)||e.opacity!==void 0&&(this.opacity=e.opacity)}}class P1{constructor(){this.distance=80,this.links=new O1,this.radius=60}load(e){z(e)||(e.distance!==void 0&&(this.distance=e.distance),this.links.load(e.links),e.radius!==void 0&&(this.radius=e.radius))}}const sr=0,or=1,D1=0;function j1(t,e,n,i){const s=Math.floor(n.getRadius()/e.getRadius()),o=e.getFillColor(),r=n.getFillColor();if(!o||!r)return;const c=e.getPosition(),l=n.getPosition(),u=so(o,r,e.getRadius(),n.getRadius()),d=t.createLinearGradient(c.x,c.y,l.x,l.y);return d.addColorStop(sr,Wn(o,i)),d.addColorStop(rt(s,sr,or),Dt(u,i)),d.addColorStop(or,Wn(r,i)),d}function A1(t,e,n,i,s){Gn(t,i,s),t.lineWidth=e,t.strokeStyle=n,t.stroke()}function T1(t,e,n,i){const s=t.actualOptions,o=s.interactivity.modes.connect;if(o)return j1(e,n,i,o.links.opacity)}function I1(t,e,n){t.canvas.draw(i=>{const s=T1(t,i,e,n);if(!s)return;const o=e.getPosition(),r=n.getPosition();A1(i,e.retina.linksWidth??D1,s,o,r)})}const M1="connect",rr=0;class R1 extends bt{constructor(e){super(e)}clear(){}init(){const e=this.container,n=e.actualOptions.interactivity.modes.connect;n&&(e.retina.connectModeDistance=n.distance*e.retina.pixelRatio,e.retina.connectModeRadius=n.radius*e.retina.pixelRatio)}interact(){const e=this.container;if(e.actualOptions.interactivity.events.onHover.enable&&e.interactivity.status==="pointermove"){const i=e.interactivity.mouse.position,{connectModeDistance:s,connectModeRadius:o}=e.retina;if(!s||s<rr||!o||o<rr||!i)return;const r=Math.abs(o),c=e.particles.quadTree.queryCircle(i,r,l=>this.isEnabled(l));c.forEach((l,u)=>{const d=l.getPosition(),h=1;for(const f of c.slice(u+h)){const p=f.getPosition(),x=Math.abs(s),y=Math.abs(d.x-p.x),m=Math.abs(d.y-p.y);y<x&&m<x&&I1(e,l,f)}})}}isEnabled(e){const n=this.container,i=n.interactivity.mouse,s=(e?.interactivity??n.actualOptions.interactivity).events;return s.onHover.enable&&i.position?De(M1,s.onHover.mode):!1}loadModeOptions(e,...n){e.connect||(e.connect=new P1);for(const i of n)e.connect.load(i?.connect)}reset(){}}async function B1(t,e=!0){t.checkVersion("3.9.1"),await t.addInteractor("externalConnect",n=>Promise.resolve(new R1(n)),e)}class z1{constructor(){this.blink=!1,this.consent=!1,this.opacity=1}load(e){z(e)||(e.blink!==void 0&&(this.blink=e.blink),e.color!==void 0&&(this.color=We.create(this.color,e.color)),e.consent!==void 0&&(this.consent=e.consent),e.opacity!==void 0&&(this.opacity=e.opacity))}}class L1{constructor(){this.distance=100,this.links=new z1}load(e){z(e)||(e.distance!==void 0&&(this.distance=e.distance),this.links.load(e.links))}}const N1=0;function F1(t,e,n,i,s,o){Gn(t,n,i),t.strokeStyle=Dt(s,o),t.lineWidth=e,t.stroke()}function $1(t,e,n,i,s){t.canvas.draw(o=>{const r=e.getPosition();F1(o,e.retina.linksWidth??N1,r,s,n,i)})}const V1="grab",G1=0,U1=0;class W1 extends bt{constructor(e,n){super(e),this._engine=n}clear(){}init(){const e=this.container,n=e.actualOptions.interactivity.modes.grab;n&&(e.retina.grabModeDistance=n.distance*e.retina.pixelRatio)}interact(){const e=this.container,n=e.actualOptions,i=n.interactivity;if(!i.modes.grab||!i.events.onHover.enable||e.interactivity.status!==on)return;const s=e.interactivity.mouse.position;if(!s)return;const o=e.retina.grabModeDistance;if(!o||o<G1)return;const r=e.particles.quadTree.queryCircle(s,o,c=>this.isEnabled(c));for(const c of r){const l=c.getPosition(),u=et(l,s);if(u>o)continue;const d=i.modes.grab.links,h=d.opacity,f=h-u*h/o;if(f<=U1)continue;const p=d.color??c.options.links?.color;if(!e.particles.grabLineColor&&p){const y=i.modes.grab.links;e.particles.grabLineColor=Ya(this._engine,p,y.blink,y.consent)}const x=js(c,void 0,e.particles.grabLineColor);x&&$1(e,c,x,f,s)}}isEnabled(e){const n=this.container,i=n.interactivity.mouse,s=(e?.interactivity??n.actualOptions.interactivity).events;return s.onHover.enable&&!!i.position&&De(V1,s.onHover.mode)}loadModeOptions(e,...n){e.grab||(e.grab=new L1);for(const i of n)e.grab.load(i?.grab)}reset(){}}async function q1(t,e=!0){t.checkVersion("3.9.1"),await t.addInteractor("externalGrab",n=>Promise.resolve(new W1(n,t)),e)}const H1="pause";class Y1 extends bt{constructor(e){super(e),this.handleClickMode=n=>{if(n!==H1)return;const i=this.container;i.animationStatus?i.pause():i.play()}}clear(){}init(){}interact(){}isEnabled(){return!0}reset(){}}async function Q1(t,e=!0){t.checkVersion("3.9.1"),await t.addInteractor("externalPause",n=>Promise.resolve(new Y1(n)),e)}class J1{constructor(){this.default=!0,this.groups=[],this.quantity=4}load(e){if(z(e))return;e.default!==void 0&&(this.default=e.default),e.groups!==void 0&&(this.groups=e.groups.map(i=>i)),this.groups.length||(this.default=!0);const n=e.quantity;n!==void 0&&(this.quantity=me(n)),this.particles=tt(e.particles,i=>Ue({},i))}}const K1="push",X1=0;class Z1 extends bt{constructor(e){super(e),this.handleClickMode=n=>{if(n!==K1)return;const i=this.container,s=i.actualOptions,o=s.interactivity.modes.push;if(!o)return;const r=q(o.quantity);if(r<=X1)return;const c=zi([void 0,...o.groups]),l=c!==void 0?i.actualOptions.particles.groups[c]:void 0,u=st(o.particles),d=Ue(l,u);i.particles.push(r,i.interactivity.mouse,d,c)}}clear(){}init(){}interact(){}isEnabled(){return!0}loadModeOptions(e,...n){e.push||(e.push=new J1);for(const i of n)e.push.load(i?.push)}reset(){}}async function eh(t,e=!0){t.checkVersion("3.9.1"),await t.addInteractor("externalPush",n=>Promise.resolve(new Z1(n)),e)}class th{constructor(){this.quantity=2}load(e){if(z(e))return;const n=e.quantity;n!==void 0&&(this.quantity=me(n))}}const nh="remove";class ih extends bt{constructor(e){super(e),this.handleClickMode=n=>{const i=this.container,s=i.actualOptions;if(!s.interactivity.modes.remove||n!==nh)return;const o=q(s.interactivity.modes.remove.quantity);i.particles.removeQuantity(o)}}clear(){}init(){}interact(){}isEnabled(){return!0}loadModeOptions(e,...n){e.remove||(e.remove=new th);for(const i of n)e.remove.load(i?.remove)}reset(){}}async function sh(t,e=!0){t.checkVersion("3.9.1"),await t.addInteractor("externalRemove",n=>Promise.resolve(new ih(n)),e)}class cc{constructor(){this.distance=200,this.duration=.4,this.factor=100,this.speed=1,this.maxSpeed=50,this.easing=sn.easeOutQuad}load(e){z(e)||(e.distance!==void 0&&(this.distance=e.distance),e.duration!==void 0&&(this.duration=e.duration),e.easing!==void 0&&(this.easing=e.easing),e.factor!==void 0&&(this.factor=e.factor),e.speed!==void 0&&(this.speed=e.speed),e.maxSpeed!==void 0&&(this.maxSpeed=e.maxSpeed))}}class oh extends cc{constructor(){super(),this.selectors=[]}load(e){super.load(e),!z(e)&&e.selectors!==void 0&&(this.selectors=e.selectors)}}class rh extends cc{load(e){super.load(e),!z(e)&&(this.divs=tt(e.divs,n=>{const i=new oh;return i.load(n),i}))}}const Wt="repulse",ah=0,ch=6,lh=3,dh=2,uh=0,hh=0,fh=1,es=.5;class ph extends bt{constructor(e,n){super(n),this._clickRepulse=()=>{const i=this.container,s=i.actualOptions.interactivity.modes.repulse;if(!s)return;const o=i.repulse??{particles:[]};if(o.finish||(o.count||(o.count=0),o.count++,o.count===i.particles.count&&(o.finish=!0)),o.clicking){const r=i.retina.repulseModeDistance;if(!r||r<ah)return;const c=Math.pow(r/ch,lh),l=i.interactivity.mouse.clickPosition;if(l===void 0)return;const u=new Ge(l.x,l.y,c),d=i.particles.quadTree.query(u,h=>this.isEnabled(h));for(const h of d){const{dx:f,dy:p,distance:x}=He(l,h.position),y=x**dh,m=s.speed,g=-c*m/y;if(y<=c){o.particles.push(h);const v=Le.create(f,p);v.length=g,h.velocity.setTo(v)}}}else if(o.clicking===!1){for(const r of o.particles)r.velocity.setTo(r.initialVelocity);o.particles=[]}},this._hoverRepulse=()=>{const i=this.container,s=i.interactivity.mouse.position,o=i.retina.repulseModeDistance;!o||o<uh||!s||this._processRepulse(s,o,new Ge(s.x,s.y,o))},this._processRepulse=(i,s,o,r)=>{const c=this.container,l=c.particles.quadTree.query(o,m=>this.isEnabled(m)),u=c.actualOptions.interactivity.modes.repulse;if(!u)return;const{easing:d,speed:h,factor:f,maxSpeed:p}=u,x=this._engine.getEasing(d),y=(r?.speed??h)*f;for(const m of l){const{dx:g,dy:v,distance:S}=He(m.position,i),D=rt(x(fh-S/s)*y,hh,p),j=Le.create(S?g/S*D:y,S?v/S*D:y);m.position.addTo(j)}},this._singleSelectorRepulse=(i,s)=>{const o=this.container,r=o.actualOptions.interactivity.modes.repulse;if(!r)return;const c=document.querySelectorAll(i);c.length&&c.forEach(l=>{const u=l,d=o.retina.pixelRatio,h={x:(u.offsetLeft+u.offsetWidth*es)*d,y:(u.offsetTop+u.offsetHeight*es)*d},f=u.offsetWidth*es*d,p=s.type===An.circle?new Ge(h.x,h.y,f):new pt(u.offsetLeft*d,u.offsetTop*d,u.offsetWidth*d,u.offsetHeight*d),x=r.divs,y=Fa(x,u);this._processRepulse(h,f,p,y)})},this._engine=e,n.repulse||(n.repulse={particles:[]}),this.handleClickMode=i=>{const s=this.container.actualOptions,o=s.interactivity.modes.repulse;if(!o||i!==Wt)return;n.repulse||(n.repulse={particles:[]});const r=n.repulse;r.clicking=!0,r.count=0;for(const c of n.repulse.particles)this.isEnabled(c)&&c.velocity.setTo(c.initialVelocity);r.particles=[],r.finish=!1,setTimeout(()=>{n.destroyed||(r.clicking=!1)},o.duration*$e)}}clear(){}init(){const e=this.container,n=e.actualOptions.interactivity.modes.repulse;n&&(e.retina.repulseModeDistance=n.distance*e.retina.pixelRatio)}interact(){const e=this.container,n=e.actualOptions,i=e.interactivity.status===on,s=n.interactivity.events,o=s.onHover,r=o.enable,c=o.mode,l=s.onClick,u=l.enable,d=l.mode,h=s.onDiv;i&&r&&De(Wt,c)?this._hoverRepulse():u&&De(Wt,d)?this._clickRepulse():no(Wt,h,(f,p)=>this._singleSelectorRepulse(f,p))}isEnabled(e){const n=this.container,i=n.actualOptions,s=n.interactivity.mouse,o=(e?.interactivity??i.interactivity).events,r=o.onDiv,c=o.onHover,l=o.onClick,u=to(Wt,r);if(!(u||c.enable&&s.position||l.enable&&s.clickPosition))return!1;const d=c.mode,h=l.mode;return De(Wt,d)||De(Wt,h)||u}loadModeOptions(e,...n){e.repulse||(e.repulse=new rh);for(const i of n)e.repulse.load(i?.repulse)}reset(){}}async function xh(t,e=!0){t.checkVersion("3.9.1"),await t.addInteractor("externalRepulse",n=>Promise.resolve(new ph(t,n)),e)}class mh{constructor(){this.factor=3,this.radius=200}load(e){z(e)||(e.factor!==void 0&&(this.factor=e.factor),e.radius!==void 0&&(this.radius=e.radius))}}const gh="slow",yh=0;class bh extends bt{constructor(e){super(e)}clear(e,n,i){e.slow.inRange&&!i||(e.slow.factor=1)}init(){const e=this.container,n=e.actualOptions.interactivity.modes.slow;n&&(e.retina.slowModeRadius=n.radius*e.retina.pixelRatio)}interact(){}isEnabled(e){const n=this.container,i=n.interactivity.mouse,s=(e?.interactivity??n.actualOptions.interactivity).events;return s.onHover.enable&&!!i.position&&De(gh,s.onHover.mode)}loadModeOptions(e,...n){e.slow||(e.slow=new mh);for(const i of n)e.slow.load(i?.slow)}reset(e){e.slow.inRange=!1;const n=this.container,i=n.actualOptions,s=n.interactivity.mouse.position,o=n.retina.slowModeRadius,r=i.interactivity.modes.slow;if(!r||!o||o<yh||!s)return;const c=e.getPosition(),l=et(s,c),u=l/o,d=r.factor,{slow:h}=e;l>o||(h.inRange=!0,h.factor=u/d)}}async function vh(t,e=!0){t.checkVersion("3.9.1"),await t.addInteractor("externalSlow",n=>Promise.resolve(new bh(n)),e)}const kh=0,wh=1,Sh=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;function Ch(t,e,n){const{svgData:i}=t;if(!i)return"";const s=Wn(e,n);if(i.includes("fill"))return i.replace(Sh,()=>s);const o=i.indexOf(">");return`${i.substring(kh,o)} fill="${s}"${i.substring(o)}`}async function Li(t){return new Promise(e=>{t.loading=!0;const n=new Image;t.element=n,n.addEventListener("load",()=>{t.loading=!1,e()}),n.addEventListener("error",()=>{t.element=void 0,t.error=!0,t.loading=!1,an().error(`${ot} loading image: ${t.source}`),e()}),n.src=t.source})}async function Eh(t){if(t.type!=="svg"){await Li(t);return}t.loading=!0;const e=await fetch(t.source);e.ok?t.svgData=await e.text():(an().error(`${ot} Image not found`),t.error=!0),t.loading=!1}function _h(t,e,n,i){const s=Ch(t,n,i.opacity?.value??wh),o={color:n,gif:e.gif,data:{...t,svgData:s},loaded:!1,ratio:e.width/e.height,replaceColor:e.replaceColor,source:e.src};return new Promise(r=>{const c=new Blob([s],{type:"image/svg+xml"}),l=URL||window.URL||window.webkitURL||window,u=l.createObjectURL(c),d=new Image;d.addEventListener("load",()=>{o.loaded=!0,o.element=d,r(o),l.revokeObjectURL(u)});const h=async()=>{l.revokeObjectURL(u);const f={...t,error:!1,loading:!0};await Li(f),o.loaded=!0,o.element=f.element,r(o)};d.addEventListener("error",()=>void h()),d.src=u})}const ts=[0,4,2,1],ar=[8,8,4,2];class Oh{constructor(e){this.pos=0,this.data=new Uint8ClampedArray(e)}getString(e){const n=this.data.slice(this.pos,this.pos+e);return this.pos+=n.length,n.reduce((i,s)=>i+String.fromCharCode(s),"")}nextByte(){return this.data[this.pos++]}nextTwoBytes(){return this.pos+=2,this.data[this.pos-2]+(this.data[this.pos-1]<<8)}readSubBlocks(){let e="",n=0;const i=0,s=0;do{n=this.data[this.pos++];for(let o=n;--o>=i;e+=String.fromCharCode(this.data[this.pos++]));}while(n!==s);return e}readSubBlocksBin(){let e=this.data[this.pos],n=0;const i=0,s=1;for(let r=0;e!==i;r+=e+s,e=this.data[this.pos+r])n+=e;const o=new Uint8Array(n);e=this.data[this.pos++];for(let r=0;e!==i;e=this.data[this.pos++])for(let c=e;--c>=i;o[r++]=this.data[this.pos++]);return o}skipSubBlocks(){for(const e=1,n=0;this.data[this.pos]!==n;this.pos+=this.data[this.pos]+e);this.pos++}}var lt;(function(t){t[t.Replace=0]="Replace",t[t.Combine=1]="Combine",t[t.RestoreBackground=2]="RestoreBackground",t[t.RestorePrevious=3]="RestorePrevious",t[t.UndefinedA=4]="UndefinedA",t[t.UndefinedB=5]="UndefinedB",t[t.UndefinedC=6]="UndefinedC",t[t.UndefinedD=7]="UndefinedD"})(lt||(lt={}));var Pt;(function(t){t[t.Extension=33]="Extension",t[t.ApplicationExtension=255]="ApplicationExtension",t[t.GraphicsControlExtension=249]="GraphicsControlExtension",t[t.PlainTextExtension=1]="PlainTextExtension",t[t.CommentExtension=254]="CommentExtension",t[t.Image=44]="Image",t[t.EndOfFile=59]="EndOfFile"})(Pt||(Pt={}));const Qe={x:0,y:0},Ph=0,cr=.5,Dh=0,lr=0,Ts=0;function lc(t,e){const n=[];for(let i=0;i<e;i++)n.push({r:t.data[t.pos],g:t.data[t.pos+1],b:t.data[t.pos+2]}),t.pos+=3;return n}function jh(t,e,n,i){switch(t.nextByte()){case Pt.GraphicsControlExtension:{const s=e.frames[n(!1)];t.pos++;const o=t.nextByte();s.GCreserved=(o&224)>>>5,s.disposalMethod=(o&28)>>>2,s.userInputDelayFlag=(o&2)===2;const r=(o&1)===1;s.delayTime=t.nextTwoBytes()*10;const c=t.nextByte();r&&i(c),t.pos++;break}case Pt.ApplicationExtension:{t.pos++;const s={identifier:t.getString(8),authenticationCode:t.getString(3),data:t.readSubBlocksBin()};e.applicationExtensions.push(s);break}case Pt.CommentExtension:{e.comments.push([n(!1),t.readSubBlocks()]);break}case Pt.PlainTextExtension:{if(e.globalColorTable.length===0)throw new EvalError("plain text extension without global color table");t.pos++,e.frames[n(!1)].plainTextData={left:t.nextTwoBytes(),top:t.nextTwoBytes(),width:t.nextTwoBytes(),height:t.nextTwoBytes(),charSize:{width:t.nextTwoBytes(),height:t.nextTwoBytes()},foregroundColor:t.nextByte(),backgroundColor:t.nextByte(),text:t.readSubBlocks()};break}default:t.skipSubBlocks();break}}async function Ah(t,e,n,i,s,o){const r=e.frames[i(!0)];r.left=t.nextTwoBytes(),r.top=t.nextTwoBytes(),r.width=t.nextTwoBytes(),r.height=t.nextTwoBytes();const c=t.nextByte(),l=(c&128)===128,u=(c&64)===64;r.sortFlag=(c&32)===32,r.reserved=(c&24)>>>3;const d=1<<(c&7)+1;l&&(r.localColorTable=lc(t,d));const h=g=>{const{r:v,g:S,b:D}=(l?r.localColorTable:e.globalColorTable)[g];return g!==s(null)?{r:v,g:S,b:D,a:255}:{r:v,g:S,b:D,a:n?~~((v+S+D)/3):0}},f=(()=>{try{return new ImageData(r.width,r.height,{colorSpace:"srgb"})}catch(g){if(g instanceof DOMException&&g.name==="IndexSizeError")return null;throw g}})();if(f==null)throw new EvalError("GIF frame size is to large");const p=t.nextByte(),x=t.readSubBlocksBin(),y=1<<p,m=(g,v)=>{const S=g>>>3,D=g&7;return(x[S]+(x[S+1]<<8)+(x[S+2]<<16)&(1<<v)-1<<D)>>>D};if(u){for(let g=0,v=p+1,S=0,D=[[0]],j=0;j<4;j++)if(ts[j]<r.height){let I=0,B=0,W=!1;for(;!W;){const V=g;if(g=m(S,v),S+=v+1,g===y){v=p+1,D.length=y+2;for(let Z=0;Z<D.length;Z++)D[Z]=Z<y?[Z]:[]}else{g>=D.length?D.push(D[V].concat(D[V][0])):V!==y&&D.push(D[V].concat(D[g][0]));for(const Z of D[g]){const{r:ne,g:ee,b:ie,a:K}=h(Z);f.data.set([ne,ee,ie,K],ts[j]*r.width+ar[j]*B+I%(r.width*4)),I+=4}D.length===1<<v&&v<12&&v++}I===r.width*4*(B+1)&&(B++,ts[j]+ar[j]*B>=r.height&&(W=!0))}}r.image=f,r.bitmap=await createImageBitmap(f)}else{let g=0,v=p+1,S=0,D=-4,j=!1;const I=[[0]];for(;!j;){const B=g;if(g=m(S,v),S+=v,g===y){v=p+1,I.length=y+2;for(let W=0;W<I.length;W++)I[W]=W<y?[W]:[]}else{if(g===y+1){j=!0;break}g>=I.length?I.push(I[B].concat(I[B][0])):B!==y&&I.push(I[B].concat(I[g][0]));for(const W of I[g]){const{r:V,g:Z,b:ne,a:ee}=h(W);f.data.set([V,Z,ne,ee],D+=4)}I.length>=1<<v&&v<12&&v++}}r.image=f,r.bitmap=await createImageBitmap(f)}}async function Th(t,e,n,i,s,o){switch(t.nextByte()){case Pt.EndOfFile:return!0;case Pt.Image:await Ah(t,e,n,i,s);break;case Pt.Extension:jh(t,e,i,s);break;default:throw new EvalError("undefined block found")}return!1}function Ih(t){for(const e of t.applicationExtensions)if(e.identifier+e.authenticationCode==="NETSCAPE2.0")return e.data[1]+(e.data[2]<<8);return NaN}async function Mh(t,e,n){n||(n=!1);const i=await fetch(t);if(!i.ok&&i.status===404)throw new EvalError("file not found");const s=await i.arrayBuffer(),o={width:0,height:0,totalTime:0,colorRes:0,pixelAspectRatio:0,frames:[],sortFlag:!1,globalColorTable:[],backgroundImage:new ImageData(1,1,{colorSpace:"srgb"}),comments:[],applicationExtensions:[]},r=new Oh(new Uint8ClampedArray(s));if(r.getString(6)!=="GIF89a")throw new Error("not a supported GIF file");o.width=r.nextTwoBytes(),o.height=r.nextTwoBytes();const c=r.nextByte(),l=(c&128)===128;o.colorRes=(c&112)>>>4,o.sortFlag=(c&8)===8;const u=1<<(c&7)+1,d=r.nextByte();o.pixelAspectRatio=r.nextByte(),o.pixelAspectRatio!==0&&(o.pixelAspectRatio=(o.pixelAspectRatio+15)/64),l&&(o.globalColorTable=lc(r,u));const h=(()=>{try{return new ImageData(o.width,o.height,{colorSpace:"srgb"})}catch(D){if(D instanceof DOMException&&D.name==="IndexSizeError")return null;throw D}})();if(h==null)throw new Error("GIF frame size is to large");const{r:f,g:p,b:x}=o.globalColorTable[d];h.data.set(l?[f,p,x,255]:[0,0,0,0]);for(let D=4;D<h.data.length;D*=2)h.data.copyWithin(D,0,D);o.backgroundImage=h;let y=-1,m=!0,g=-1;const v=D=>(D&&(m=!0),y),S=D=>(D!=null&&(g=D),g);try{do m&&(o.frames.push({left:0,top:0,width:0,height:0,disposalMethod:lt.Replace,image:new ImageData(1,1,{colorSpace:"srgb"}),plainTextData:null,userInputDelayFlag:!1,delayTime:0,sortFlag:!1,localColorTable:[],reserved:0,GCreserved:0}),y++,g=-1,m=!1);while(!await Th(r,o,n,v,S,e));o.frames.length--;for(const D of o.frames){if(D.userInputDelayFlag&&D.delayTime===0){o.totalTime=1/0;break}o.totalTime+=D.delayTime}return o}catch(D){throw D instanceof EvalError?new Error(`error while parsing frame ${y} "${D.message}"`):D}}function Rh(t){const{context:e,radius:n,particle:i,delta:s}=t,o=i.image;if(!o?.gifData||!o.gif)return;const r=new OffscreenCanvas(o.gifData.width,o.gifData.height),c=r.getContext("2d");if(!c)throw new Error("could not create offscreen canvas context");c.imageSmoothingQuality="low",c.imageSmoothingEnabled=!1,c.clearRect(Qe.x,Qe.y,r.width,r.height),i.gifLoopCount===void 0&&(i.gifLoopCount=o.gifLoopCount??Ts);let l=i.gifFrame??Ph;const u={x:-o.gifData.width*cr,y:-o.gifData.height*cr},d=o.gifData.frames[l];if(i.gifTime===void 0&&(i.gifTime=Dh),!!d.bitmap){switch(e.scale(n/o.gifData.width,n/o.gifData.height),d.disposalMethod){case lt.UndefinedA:case lt.UndefinedB:case lt.UndefinedC:case lt.UndefinedD:case lt.Replace:c.drawImage(d.bitmap,d.left,d.top),e.drawImage(r,u.x,u.y),c.clearRect(Qe.x,Qe.y,r.width,r.height);break;case lt.Combine:c.drawImage(d.bitmap,d.left,d.top),e.drawImage(r,u.x,u.y);break;case lt.RestoreBackground:c.drawImage(d.bitmap,d.left,d.top),e.drawImage(r,u.x,u.y),c.clearRect(Qe.x,Qe.y,r.width,r.height),o.gifData.globalColorTable.length?c.putImageData(o.gifData.backgroundImage,u.x,u.y):c.putImageData(o.gifData.frames[lr].image,u.x+d.left,u.y+d.top);break;case lt.RestorePrevious:{const h=c.getImageData(Qe.x,Qe.y,r.width,r.height);c.drawImage(d.bitmap,d.left,d.top),e.drawImage(r,u.x,u.y),c.clearRect(Qe.x,Qe.y,r.width,r.height),c.putImageData(h,Qe.x,Qe.y)}break}if(i.gifTime+=s.value,i.gifTime>d.delayTime){if(i.gifTime-=d.delayTime,++l>=o.gifData.frames.length){if(--i.gifLoopCount<=Ts)return;l=lr,c.clearRect(Qe.x,Qe.y,r.width,r.height)}i.gifFrame=l}e.scale(o.gifData.width/n,o.gifData.height/n)}}async function Bh(t){if(t.type!=="gif"){await Li(t);return}t.loading=!0;try{t.gifData=await Mh(t.source),t.gifLoopCount=Ih(t.gifData)??Ts,t.gifLoopCount||(t.gifLoopCount=1/0)}catch{t.error=!0}t.loading=!1}const zh=2,Lh=1,Nh=12,Fh=1;class $h{constructor(e){this.validTypes=["image","images"],this.loadImageShape=async n=>{if(!this._engine.loadImage)throw new Error(`${ot} image shape not initialized`);await this._engine.loadImage({gif:n.gif,name:n.name,replaceColor:n.replaceColor??!1,src:n.src})},this._engine=e}addImage(e){this._engine.images||(this._engine.images=[]),this._engine.images.push(e)}draw(e){const{context:n,radius:i,particle:s,opacity:o}=e,r=s.image,c=r?.element;if(r){if(n.globalAlpha=o,r.gif&&r.gifData)Rh(e);else if(c){const l=r.ratio,u={x:-i,y:-i},d=i*zh;n.drawImage(c,u.x,u.y,d,d/l)}n.globalAlpha=Lh}}getSidesCount(){return Nh}async init(e){const n=e.actualOptions;if(!(!n.preload||!this._engine.loadImage))for(const i of n.preload)await this._engine.loadImage(i)}loadShape(e){if(e.shape!=="image"&&e.shape!=="images")return;this._engine.images||(this._engine.images=[]);const n=e.shapeData;if(!n)return;this._engine.images.find(s=>s.name===n.name||s.source===n.src)||this.loadImageShape(n).then(()=>{this.loadShape(e)})}particleInit(e,n){if(n.shape!=="image"&&n.shape!=="images")return;this._engine.images||(this._engine.images=[]);const i=this._engine.images,s=n.shapeData;if(!s)return;const o=n.getFillColor(),r=i.find(l=>l.name===s.name||l.source===s.src);if(!r)return;const c=s.replaceColor??r.replaceColor;if(r.loading){setTimeout(()=>{this.particleInit(e,n)});return}(async()=>{let l;r.svgData&&o?l=await _h(r,s,o,n):l={color:o,data:r,element:r.element,gif:r.gif,gifData:r.gifData,gifLoopCount:r.gifLoopCount,loaded:!0,ratio:s.width&&s.height?s.width/s.height:r.ratio??Fh,replaceColor:c,source:s.src},l.ratio||(l.ratio=1);const u=s.fill??n.shapeFill,d=s.close??n.shapeClose,h={image:l,fill:u,close:d};n.image=h.image,n.shapeFill=h.fill,n.shapeClose=h.close})()}}class Vh{constructor(){this.src="",this.gif=!1}load(e){z(e)||(e.gif!==void 0&&(this.gif=e.gif),e.height!==void 0&&(this.height=e.height),e.name!==void 0&&(this.name=e.name),e.replaceColor!==void 0&&(this.replaceColor=e.replaceColor),e.src!==void 0&&(this.src=e.src),e.width!==void 0&&(this.width=e.width))}}class Gh{constructor(e){this.id="imagePreloader",this._engine=e}async getPlugin(){return await Promise.resolve(),{}}loadOptions(e,n){if(!n?.preload)return;e.preload||(e.preload=[]);const i=e.preload;for(const s of n.preload){const o=i.find(r=>r.name===s.name||r.src===s.src);if(o)o.load(s);else{const r=new Vh;r.load(s),i.push(r)}}}needsPlugin(){return!0}}const Uh=3;function Wh(t){t.loadImage||(t.loadImage=async e=>{if(!e.name&&!e.src)throw new Error(`${ot} no image source provided`);if(t.images||(t.images=[]),!t.images.find(n=>n.name===e.name||n.source===e.src))try{const n={gif:e.gif??!1,name:e.name??e.src,source:e.src,type:e.src.substring(e.src.length-Uh),error:!1,loading:!0,replaceColor:e.replaceColor,ratio:e.width&&e.height?e.width/e.height:void 0};t.images.push(n);let i;e.gif?i=Bh:i=e.replaceColor?Eh:Li,await i(n)}catch{throw new Error(`${ot} ${e.name??e.src} not found`)}})}async function qh(t,e=!0){t.checkVersion("3.9.1"),Wh(t);const n=new Gh(t);await t.addPlugin(n,e),await t.addShape(new $h(t),e)}class Hh extends dn{constructor(){super(),this.sync=!1}load(e){z(e)||(super.load(e),e.sync!==void 0&&(this.sync=e.sync))}}class Yh extends dn{constructor(){super(),this.sync=!1}load(e){z(e)||(super.load(e),e.sync!==void 0&&(this.sync=e.sync))}}class Qh{constructor(){this.count=0,this.delay=new Hh,this.duration=new Yh}load(e){z(e)||(e.count!==void 0&&(this.count=e.count),this.delay.load(e.delay),this.duration.load(e.duration))}}const pn=0,Jh=-1,dr=0,ur=0;function Kh(t,e,n){if(!t.life)return;const i=t.life;let s=!1;if(t.spawning)if(i.delayTime+=e.value,i.delayTime>=t.life.delay)s=!0,t.spawning=!1,i.delayTime=pn,i.time=pn;else return;if(i.duration===Jh||t.spawning||(s?i.time=pn:i.time+=e.value,i.time<i.duration))return;if(i.time=pn,t.life.count>dr&&t.life.count--,t.life.count===dr){t.destroy();return}const o=me(ur,n.width),r=me(ur,n.width);t.position.x=Ze(o),t.position.y=Ze(r),t.spawning=!0,i.delayTime=pn,i.time=pn,t.reset();const c=t.options.life;c&&(i.delay=q(c.delay.value)*$e,i.duration=q(c.duration.value)*$e)}const qt=0,hr=1,fr=-1;class Xh{constructor(e){this.container=e}init(e){const n=this.container,i=e.options,s=i.life;s&&(e.life={delay:n.retina.reduceFactor?q(s.delay.value)*(s.delay.sync?hr:ke())/n.retina.reduceFactor*$e:qt,delayTime:qt,duration:n.retina.reduceFactor?q(s.duration.value)*(s.duration.sync?hr:ke())/n.retina.reduceFactor*$e:qt,time:qt,count:s.count},e.life.duration<=qt&&(e.life.duration=fr),e.life.count<=qt&&(e.life.count=fr),e.life&&(e.spawning=e.life.delay>qt))}isEnabled(e){return!e.destroyed}loadOptions(e,...n){e.life||(e.life=new Qh);for(const i of n)e.life.load(i?.life)}update(e,n){!this.isEnabled(e)||!e.life||Kh(e,n,this.container.canvas.size)}}async function Zh(t,e=!0){t.checkVersion("3.9.1"),await t.addParticleUpdater("life",async n=>Promise.resolve(new Xh(n)),e)}function ef(t){const{context:e,particle:n,radius:i}=t,s=n.shapeData,o=0;e.moveTo(-i,o),e.lineTo(i,o),e.lineCap=s?.cap??"butt"}const tf=1;class nf{constructor(){this.validTypes=["line"]}draw(e){ef(e)}getSidesCount(){return tf}}async function sf(t,e=!0){t.checkVersion("3.9.1"),await t.addShape(new nf,e)}const pr=.5;class of{init(){}isEnabled(e){return!cn()&&!e.destroyed&&e.container.actualOptions.interactivity.events.onHover.parallax.enable}move(e){const n=e.container,i=n.actualOptions,s=i.interactivity.events.onHover.parallax;if(cn()||!s.enable)return;const o=s.force,r=n.interactivity.mouse.position;if(!r)return;const c=n.canvas.size,l={x:c.width*pr,y:c.height*pr},u=s.smooth,d=e.getRadius()/o,h={x:(r.x-l.x)*d,y:(r.y-l.y)*d},{offset:f}=e;f.x+=(h.x-f.x)/u,f.y+=(h.y-f.y)/u}}async function rf(t,e=!0){t.checkVersion("3.9.1"),await t.addMover("parallax",()=>Promise.resolve(new of),e)}const xr=1e3,af=1;class cf extends ao{constructor(e){super(e)}clear(){}init(){}interact(e){const n=this.container;e.attractDistance===void 0&&(e.attractDistance=q(e.options.move.attract.distance)*n.retina.pixelRatio);const i=e.attractDistance,s=e.getPosition(),o=n.particles.quadTree.queryCircle(s,i);for(const r of o){if(e===r||!r.options.move.attract.enable||r.destroyed||r.spawning)continue;const c=r.getPosition(),{dx:l,dy:u}=He(s,c),d=e.options.move.attract.rotate,h=l/(d.x*xr),f=u/(d.y*xr),p=r.size.value/e.size.value,x=af/p;e.velocity.x-=h*p,e.velocity.y-=f*p,r.velocity.x+=h*x,r.velocity.y+=f*x}}isEnabled(e){return e.options.move.attract.enable}reset(){}}async function lf(t,e=!0){t.checkVersion("3.9.1"),await t.addInteractor("particlesAttract",n=>Promise.resolve(new cf(n)),e)}const df=.5,uf=10,hf=0;function mr(t,e,n,i,s,o){const r=rt(t.options.collisions.absorb.speed*s.factor/uf,hf,i);t.size.value+=r*df,n.size.value-=r,i<=o&&(n.size.value=0,n.destroy())}function ff(t,e,n,i){const s=t.getRadius(),o=e.getRadius();s===void 0&&o!==void 0?t.destroy():s!==void 0&&o===void 0?e.destroy():s!==void 0&&o!==void 0&&(s>=o?mr(t,s,e,o,n,i):mr(e,o,t,s,n,i))}const gr=t=>{t.collisionMaxSpeed===void 0&&(t.collisionMaxSpeed=q(t.options.collisions.maxSpeed)),t.velocity.length>t.collisionMaxSpeed&&(t.velocity.length=t.collisionMaxSpeed)};function dc(t,e){$a(Ps(t),Ps(e)),gr(t),gr(e)}function pf(t,e){!t.unbreakable&&!e.unbreakable&&dc(t,e),t.getRadius()===void 0&&e.getRadius()!==void 0?t.destroy():t.getRadius()!==void 0&&e.getRadius()===void 0?e.destroy():t.getRadius()!==void 0&&e.getRadius()!==void 0&&(t.getRadius()>=e.getRadius()?e:t).destroy()}function xf(t,e,n,i){switch(t.options.collisions.mode){case Cn.absorb:{ff(t,e,n,i);break}case Cn.bounce:{dc(t,e);break}case Cn.destroy:{pf(t,e);break}}}const mf=2;class gf extends ao{constructor(e){super(e)}clear(){}init(){}interact(e,n){if(e.destroyed||e.spawning)return;const i=this.container,s=e.getPosition(),o=e.getRadius(),r=i.particles.quadTree.queryCircle(s,o*mf);for(const c of r){if(e===c||!c.options.collisions.enable||e.options.collisions.mode!==c.options.collisions.mode||c.destroyed||c.spawning)continue;const l=c.getPosition(),u=c.getRadius();if(Math.abs(Math.round(s.z)-Math.round(l.z))>o+u)continue;const d=et(s,l),h=o+u;d>h||xf(e,c,n,i.retina.pixelRatio)}}isEnabled(e){return e.options.collisions.enable}reset(){}}async function yf(t,e=!0){t.checkVersion("3.9.1"),await t.addInteractor("particlesCollisions",n=>Promise.resolve(new gf(n)),e)}const ns=2;class bf extends Ge{constructor(e,n,i,s){super(e,n,i),this.canvasSize=s,this.canvasSize={...s}}contains(e){const{width:n,height:i}=this.canvasSize,{x:s,y:o}=e;return super.contains(e)||super.contains({x:s-n,y:o})||super.contains({x:s-n,y:o-i})||super.contains({x:s,y:o-i})}intersects(e){if(super.intersects(e))return!0;const n=e,i=e,s={x:e.position.x-this.canvasSize.width,y:e.position.y-this.canvasSize.height};if(i.radius!==void 0){const o=new Ge(s.x,s.y,i.radius*ns);return super.intersects(o)}else if(n.size!==void 0){const o=new pt(s.x,s.y,n.size.width*ns,n.size.height*ns);return super.intersects(o)}return!1}}class vf{constructor(){this.blur=5,this.color=new We,this.color.value="#000",this.enable=!1}load(e){z(e)||(e.blur!==void 0&&(this.blur=e.blur),this.color=We.create(this.color,e.color),e.enable!==void 0&&(this.enable=e.enable))}}class kf{constructor(){this.enable=!1,this.frequency=1}load(e){z(e)||(e.color!==void 0&&(this.color=We.create(this.color,e.color)),e.enable!==void 0&&(this.enable=e.enable),e.frequency!==void 0&&(this.frequency=e.frequency),e.opacity!==void 0&&(this.opacity=e.opacity))}}class wf{constructor(){this.blink=!1,this.color=new We,this.color.value="#fff",this.consent=!1,this.distance=100,this.enable=!1,this.frequency=1,this.opacity=1,this.shadow=new vf,this.triangles=new kf,this.width=1,this.warp=!1}load(e){z(e)||(e.id!==void 0&&(this.id=e.id),e.blink!==void 0&&(this.blink=e.blink),this.color=We.create(this.color,e.color),e.consent!==void 0&&(this.consent=e.consent),e.distance!==void 0&&(this.distance=e.distance),e.enable!==void 0&&(this.enable=e.enable),e.frequency!==void 0&&(this.frequency=e.frequency),e.opacity!==void 0&&(this.opacity=e.opacity),this.shadow.load(e.shadow),this.triangles.load(e.triangles),e.width!==void 0&&(this.width=e.width),e.warp!==void 0&&(this.warp=e.warp))}}const yr=2,Sf=1,oi={x:0,y:0},Cf=0;function Ef(t,e,n,i,s){const{dx:o,dy:r,distance:c}=He(t,e);if(!s||c<=n)return c;const l={x:Math.abs(o),y:Math.abs(r)},u={x:Math.min(l.x,i.width-l.x),y:Math.min(l.y,i.height-l.y)};return Math.sqrt(u.x**yr+u.y**yr)}class _f extends ao{constructor(e,n){super(e),this._setColor=i=>{if(!i.options.links)return;const s=this._linkContainer,o=i.options.links;let r=o.id===void 0?s.particles.linksColor:s.particles.linksColors.get(o.id);if(r)return;const c=o.color;r=Ya(this._engine,c,o.blink,o.consent),o.id===void 0?s.particles.linksColor=r:s.particles.linksColors.set(o.id,r)},this._linkContainer=e,this._engine=n}clear(){}init(){this._linkContainer.particles.linksColor=void 0,this._linkContainer.particles.linksColors=new Map}interact(e){if(!e.options.links)return;e.links=[];const n=e.getPosition(),i=this.container,s=i.canvas.size;if(n.x<oi.x||n.y<oi.y||n.x>s.width||n.y>s.height)return;const o=e.options.links,r=o.opacity,c=e.retina.linksDistance??Cf,l=o.warp;let u;l?u=new bf(n.x,n.y,c,s):u=new Ge(n.x,n.y,c);const d=i.particles.quadTree.query(u);for(const h of d){const f=h.options.links;if(e===h||!f?.enable||o.id!==f.id||h.spawning||h.destroyed||!h.links||e.links.some(m=>m.destination===h)||h.links.some(m=>m.destination===e))continue;const p=h.getPosition();if(p.x<oi.x||p.y<oi.y||p.x>s.width||p.y>s.height)continue;const x=Ef(n,p,c,s,l&&f.warp);if(x>c)continue;const y=(Sf-x/c)*r;this._setColor(e),e.links.push({destination:h,opacity:y})}}isEnabled(e){return!!e.options.links?.enable}loadParticlesOptions(e,...n){e.links||(e.links=new wf);for(const i of n)e.links.load(i?.links)}reset(){}}async function Of(t,e=!0){await t.addInteractor("particlesLinks",async n=>Promise.resolve(new _f(n,t)),e)}function Pf(t,e,n,i){t.beginPath(),t.moveTo(e.x,e.y),t.lineTo(n.x,n.y),t.lineTo(i.x,i.y),t.closePath()}function Df(t){let e=!1;const{begin:n,end:i,engine:s,maxDistance:o,context:r,canvasSize:c,width:l,backgroundMask:u,colorLine:d,opacity:h,links:f}=t;if(et(n,i)<=o)Gn(r,n,i),e=!0;else if(f.warp){let x,y;const m={x:i.x-c.width,y:i.y},g=He(n,m);if(g.distance<=o){const v=n.y-g.dy/g.dx*n.x;x={x:0,y:v},y={x:c.width,y:v}}else{const v={x:i.x,y:i.y-c.height},S=He(n,v);if(S.distance<=o){const j=-(n.y-S.dy/S.dx*n.x)/(S.dy/S.dx);x={x:j,y:0},y={x:j,y:c.height}}else{const D={x:i.x-c.width,y:i.y-c.height},j=He(n,D);if(j.distance<=o){const I=n.y-j.dy/j.dx*n.x;x={x:-I/(j.dy/j.dx),y:I},y={x:x.x+c.width,y:x.y+c.height}}}}x&&y&&(Gn(r,n,x),Gn(r,i,y),e=!0)}if(!e)return;r.lineWidth=l,u.enable&&(r.globalCompositeOperation=u.composite),r.strokeStyle=Dt(d,h);const{shadow:p}=f;if(p.enable){const x=ht(s,p.color);x&&(r.shadowBlur=p.blur,r.shadowColor=Dt(x))}r.stroke()}function jf(t){const{context:e,pos1:n,pos2:i,pos3:s,backgroundMask:o,colorTriangle:r,opacityTriangle:c}=t;Pf(e,n,i,s),o.enable&&(e.globalCompositeOperation=o.composite),e.fillStyle=Dt(r,c),e.fill()}function Af(t){return t.sort((e,n)=>e-n),t.join("_")}function br(t,e){const n=Af(t.map(s=>s.id));let i=e.get(n);return i===void 0&&(i=ke(),e.set(n,i)),i}const vr=0,is=0,kr=0,Tf=.5,If=1;class Mf{constructor(e,n){this._drawLinkLine=(i,s)=>{const o=i.options.links;if(!o?.enable)return;const r=this._container,c=r.actualOptions,l=s.destination,u=i.getPosition(),d=l.getPosition();let h=s.opacity;r.canvas.draw(f=>{let p;const x=i.options.twinkle?.lines;if(x?.enable){const v=x.frequency,S=ht(this._engine,x.color);ke()<v&&S&&(p=S,h=q(x.opacity))}if(!p){const v=o.id!==void 0?r.particles.linksColors.get(o.id):r.particles.linksColor;p=js(i,l,v)}if(!p)return;const y=i.retina.linksWidth??is,m=i.retina.linksDistance??kr,{backgroundMask:g}=c;Df({context:f,width:y,begin:u,end:d,engine:this._engine,maxDistance:m,canvasSize:r.canvas.size,links:o,backgroundMask:g,colorLine:p,opacity:h})})},this._drawLinkTriangle=(i,s,o)=>{const r=i.options.links;if(!r?.enable)return;const c=r.triangles;if(!c.enable)return;const l=this._container,u=l.actualOptions,d=s.destination,h=o.destination,f=c.opacity??(s.opacity+o.opacity)*Tf;f<=vr||l.canvas.draw(p=>{const x=i.getPosition(),y=d.getPosition(),m=h.getPosition(),g=i.retina.linksDistance??kr;if(et(x,y)>g||et(m,y)>g||et(m,x)>g)return;let v=ht(this._engine,c.color);if(!v){const S=r.id!==void 0?l.particles.linksColors.get(r.id):l.particles.linksColor;v=js(i,d,S)}v&&jf({context:p,pos1:x,pos2:y,pos3:m,backgroundMask:u.backgroundMask,colorTriangle:v,opacityTriangle:f})})},this._drawTriangles=(i,s,o,r)=>{const c=o.destination;if(!(i.links?.triangles.enable&&c.options.links?.triangles.enable))return;const l=c.links?.filter(u=>{const d=this._getLinkFrequency(c,u.destination);return c.options.links&&d<=c.options.links.frequency&&r.findIndex(f=>f.destination===u.destination)>=0});if(l?.length)for(const u of l){const d=u.destination;this._getTriangleFrequency(s,c,d)>i.links.triangles.frequency||this._drawLinkTriangle(s,o,u)}},this._getLinkFrequency=(i,s)=>br([i,s],this._freqs.links),this._getTriangleFrequency=(i,s,o)=>br([i,s,o],this._freqs.triangles),this._container=e,this._engine=n,this._freqs={links:new Map,triangles:new Map}}drawParticle(e,n){const{links:i,options:s}=n;if(!i?.length)return;const o=i.filter(r=>s.links&&(s.links.frequency>=If||this._getLinkFrequency(n,r.destination)<=s.links.frequency));for(const r of o)this._drawTriangles(s,n,r,o),r.opacity>vr&&(n.retina.linksWidth??is)>is&&this._drawLinkLine(n,r)}async init(){this._freqs.links=new Map,this._freqs.triangles=new Map,await Promise.resolve()}particleCreated(e){if(e.links=[],!e.options.links)return;const n=this._container.retina.pixelRatio,{retina:i}=e,{distance:s,width:o}=e.options.links;i.linksDistance=s*n,i.linksWidth=o*n}particleDestroyed(e){e.links=[]}}class Rf{constructor(e){this.id="links",this._engine=e}getPlugin(e){return Promise.resolve(new Mf(e,this._engine))}loadOptions(){}needsPlugin(){return!0}}async function Bf(t,e=!0){const n=new Rf(t);await t.addPlugin(n,e)}async function zf(t,e=!0){t.checkVersion("3.9.1"),await Of(t,e),await Bf(t,e)}const Lf=180,ri={x:0,y:0},Nf=2;function Ff(t,e,n){const{context:i}=t,s=n.count.numerator*n.count.denominator,o=n.count.numerator/n.count.denominator,r=Lf*(o-Nf)/o,c=Math.PI-Bt(r);if(i){i.beginPath(),i.translate(e.x,e.y),i.moveTo(ri.x,ri.y);for(let l=0;l<s;l++)i.lineTo(n.length,ri.y),i.translate(n.length,ri.y),i.rotate(c)}}const $f=5;class uc{draw(e){const{particle:n,radius:i}=e,s=this.getCenter(n,i),o=this.getSidesData(n,i);Ff(e,s,o)}getSidesCount(e){const n=e.shapeData;return Math.round(q(n?.sides??$f))}}const wr=3.5,Sr=2.66,Vf=3;class Gf extends uc{constructor(){super(...arguments),this.validTypes=["polygon"]}getCenter(e,n){return{x:-n/(e.sides/wr),y:-n/(Sr/wr)}}getSidesData(e,n){const i=e.sides;return{count:{denominator:1,numerator:i},length:n*Sr/(i/Vf)}}}const Uf=1.66,Wf=3,qf=2;class Hf extends uc{constructor(){super(...arguments),this.validTypes=["triangle"]}getCenter(e,n){return{x:-n,y:n/Uf}}getSidesCount(){return Wf}getSidesData(e,n){const i=n*qf;return{count:{denominator:2,numerator:3},length:i}}}async function Yf(t,e=!0){t.checkVersion("3.9.1"),await t.addShape(new Gf,e)}async function Qf(t,e=!0){t.checkVersion("3.9.1"),await t.addShape(new Hf,e)}async function Jf(t,e=!0){t.checkVersion("3.9.1"),await Yf(t,e),await Qf(t,e)}class Kf{constructor(){this.enable=!1,this.speed=0,this.decay=0,this.sync=!1}load(e){z(e)||(e.enable!==void 0&&(this.enable=e.enable),e.speed!==void 0&&(this.speed=me(e.speed)),e.decay!==void 0&&(this.decay=me(e.decay)),e.sync!==void 0&&(this.sync=e.sync))}}class Xf extends dn{constructor(){super(),this.animation=new Kf,this.direction=dt.clockwise,this.path=!1,this.value=0}load(e){z(e)||(super.load(e),e.direction!==void 0&&(this.direction=e.direction),this.animation.load(e.animation),e.path!==void 0&&(this.path=e.path))}}const hc=2,Zf=Math.PI*hc,ep=1,tp=360;class np{constructor(e){this.container=e}init(e){const n=e.options.rotate;if(!n)return;e.rotate={enable:n.animation.enable,value:Bt(q(n.value)),min:0,max:Zf},e.pathRotation=n.path;let i=n.direction;switch(i===dt.random&&(i=Math.floor(ke()*hc)>0?dt.counterClockwise:dt.clockwise),i){case dt.counterClockwise:case"counterClockwise":e.rotate.status=Ae.decreasing;break;case dt.clockwise:e.rotate.status=Ae.increasing;break}const s=n.animation;s.enable&&(e.rotate.decay=ep-q(s.decay),e.rotate.velocity=q(s.speed)/tp*this.container.retina.reduceFactor,s.sync||(e.rotate.velocity*=ke())),e.rotation=e.rotate.value}isEnabled(e){const n=e.options.rotate;return n?!e.destroyed&&!e.spawning&&(!!n.value||n.animation.enable||n.path):!1}loadOptions(e,...n){e.rotate||(e.rotate=new Xf);for(const i of n)e.rotate.load(i?.rotate)}update(e,n){this.isEnabled(e)&&(e.isRotating=!!e.rotate,e.rotate&&(io(e,e.rotate,!1,rn.none,n),e.rotation=e.rotate.value))}}async function ip(t,e=!0){t.checkVersion("3.9.1"),await t.addParticleUpdater("rotate",n=>Promise.resolve(new np(n)),e)}const sp=2,op=Math.sqrt(sp),rp=2;function ap(t){const{context:e,radius:n}=t,i=n/op,s=i*rp;e.rect(-i,-i,s,s)}const cp=4;class lp{constructor(){this.validTypes=["edge","square"]}draw(e){ap(e)}getSidesCount(){return cp}}async function dp(t,e=!0){t.checkVersion("3.9.1"),await t.addShape(new lp,e)}const up=2,xn={x:0,y:0};function hp(t){const{context:e,particle:n,radius:i}=t,s=n.sides,o=n.starInset??up;e.moveTo(xn.x,xn.y-i);for(let r=0;r<s;r++)e.rotate(Math.PI/s),e.lineTo(xn.x,xn.y-i*o),e.rotate(Math.PI/s),e.lineTo(xn.x,xn.y-i)}const fp=2,pp=5;class xp{constructor(){this.validTypes=["star"]}draw(e){hp(e)}getSidesCount(e){const n=e.shapeData;return Math.round(q(n?.sides??pp))}particleInit(e,n){const i=n.shapeData;n.starInset=q(i?.inset??fp)}}async function mp(t,e=!0){t.checkVersion("3.9.1"),await t.addShape(new xp,e)}const gp=1;class yp{constructor(e,n){this._container=e,this._engine=n}init(e){const n=this._container,i=e.options,s=st(i.stroke,e.id,i.reduceDuplicates);e.strokeWidth=q(s.width)*n.retina.pixelRatio,e.strokeOpacity=q(s.opacity??gp),e.strokeAnimation=s.color?.animation;const o=Un(this._engine,s.color)??e.getFillColor();o&&(e.strokeColor=Qa(o,e.strokeAnimation,n.retina.reduceFactor))}isEnabled(e){const n=e.strokeAnimation,{strokeColor:i}=e;return!e.destroyed&&!e.spawning&&!!n&&(i?.h.value!==void 0&&i.h.enable||i?.s.value!==void 0&&i.s.enable||i?.l.value!==void 0&&i.l.enable)}update(e,n){this.isEnabled(e)&&Ja(e.strokeColor,n)}}async function bp(t,e=!0){t.checkVersion("3.9.1"),await t.addParticleUpdater("strokeColor",n=>Promise.resolve(new yp(n,t)),e)}async function vp(t,e=!0){t.checkVersion("3.9.1"),await rf(t,!1),await l1(t,!1),await y1(t,!1),await _1(t,!1),await B1(t,!1),await q1(t,!1),await Q1(t,!1),await eh(t,!1),await sh(t,!1),await xh(t,!1),await vh(t,!1),await lf(t,!1),await yf(t,!1),await zf(t,!1),await Zu(t,!1),await n1(t,!1),await qh(t,!1),await sf(t,!1),await Jf(t,!1),await dp(t,!1),await mp(t,!1),await Zh(t,!1),await ip(t,!1),await bp(t,!1),await Xu(t,e)}function Ni({route:t}){const e=Nt(),n=ye(s=>s.playButtonClickSfx);function i(){n(),t?e(t):window.history.back()}return a.jsx(kp,{className:"button",onClick:i,children:"back➤"})}const kp=k.button`
    height: 35px;
    width: 85px;

    font-family: "Pixel Digivolve", sans-serif;
    font-weight: bold;
    font-size: 0.9em;
    text-align: center;
    margin: 0;
    letter-spacing: 2px;
    color: #e1e1e0;
    padding: 0 0 0 5px;

    border-bottom: 1px solid #131313;
    border-right: 1px solid #131313;

    cursor: pointer;
    border-radius: 0;
    background: black;
    box-shadow: 3px 6px 1px 0 rgb(0, 0, 0);
    transition: all 0.15s ease;

    &:hover {
        background: lightgray;
        transform: translateY(1px);
        box-shadow: 2px 4px 1px 0 rgba(0, 0, 0, 0.9);
        color: #0c0c0c;
    }

    &:focus {
        outline: none;
    }

    &:active {
        background: #f8f8f8;
        transform: translateY(2px);
        box-shadow: 1px 2px 1px 0 rgba(0, 0, 0, 0.8);
    }
`;function wp(t,e,n,i,s){const[o,r]=w.useState(()=>s&&n?n(t).matches:i?i(t).matches:e);return Ic(()=>{if(!n)return;const c=n(t),l=()=>{r(c.matches)};return l(),c.addEventListener("change",l),()=>{c.removeEventListener("change",l)}},[t,n]),o}const Sp={...Tc},fc=Sp.useSyncExternalStore;function Cp(t,e,n,i,s){const o=w.useCallback(()=>e,[e]),r=w.useMemo(()=>{if(s&&n)return()=>n(t).matches;if(i!==null){const{matches:d}=i(t);return()=>d}return o},[o,t,i,s,n]),[c,l]=w.useMemo(()=>{if(n===null)return[o,()=>()=>{}];const d=n(t);return[()=>d.matches,h=>(d.addEventListener("change",h),()=>{d.removeEventListener("change",h)})]},[o,n,t]);return fc(l,c,r)}function pc(t={}){const{themeId:e}=t;return function(i,s={}){let o=jc();o&&e&&(o=o[e]||o);const r=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:c=!1,matchMedia:l=r?window.matchMedia:null,ssrMatchMedia:u=null,noSsr:d=!1}=Ac({name:"MuiUseMediaQuery",props:s,theme:o});let h=typeof i=="function"?i(o):i;return h=h.replace(/^@media( ?)/m,""),h.includes("print")&&console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.","Using the print media query to modify print styles can lead to unexpected results.","Consider using the `displayPrint` field in the `sx` prop instead.","More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`)),(fc!==void 0?Cp:wp)(h,c,l,u,d)}}pc();const Ep=Ie(a.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}));function _p(t){return ji("MuiChip",t)}const re=Di("MuiChip",["root","sizeSmall","sizeMedium","colorDefault","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),Op=t=>{const{classes:e,disabled:n,size:i,color:s,iconColor:o,onDelete:r,clickable:c,variant:l}=t,u={root:["root",l,n&&"disabled",`size${ue(i)}`,`color${ue(s)}`,c&&"clickable",c&&`clickableColor${ue(s)}`,r&&"deletable",r&&`deletableColor${ue(s)}`,`${l}${ue(s)}`],label:["label",`label${ue(i)}`],avatar:["avatar",`avatar${ue(i)}`,`avatarColor${ue(s)}`],icon:["icon",`icon${ue(i)}`,`iconColor${ue(o)}`],deleteIcon:["deleteIcon",`deleteIcon${ue(i)}`,`deleteIconColor${ue(s)}`,`deleteIcon${ue(l)}Color${ue(s)}`]};return Ai(u,_p,e)},Pp=ln("div",{name:"MuiChip",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t,{color:i,iconColor:s,clickable:o,onDelete:r,size:c,variant:l}=n;return[{[`& .${re.avatar}`]:e.avatar},{[`& .${re.avatar}`]:e[`avatar${ue(c)}`]},{[`& .${re.avatar}`]:e[`avatarColor${ue(i)}`]},{[`& .${re.icon}`]:e.icon},{[`& .${re.icon}`]:e[`icon${ue(c)}`]},{[`& .${re.icon}`]:e[`iconColor${ue(s)}`]},{[`& .${re.deleteIcon}`]:e.deleteIcon},{[`& .${re.deleteIcon}`]:e[`deleteIcon${ue(c)}`]},{[`& .${re.deleteIcon}`]:e[`deleteIconColor${ue(i)}`]},{[`& .${re.deleteIcon}`]:e[`deleteIcon${ue(l)}Color${ue(i)}`]},e.root,e[`size${ue(c)}`],e[`color${ue(i)}`],o&&e.clickable,o&&i!=="default"&&e[`clickableColor${ue(i)})`],r&&e.deletable,r&&i!=="default"&&e[`deletableColor${ue(i)}`],e[l],e[`${l}${ue(i)}`]]}})(Ti(({theme:t})=>{const e=t.palette.mode==="light"?t.palette.grey[700]:t.palette.grey[300];return{maxWidth:"100%",fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,lineHeight:1.5,color:(t.vars||t).palette.text.primary,backgroundColor:(t.vars||t).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:t.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${re.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${re.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:t.vars?t.vars.palette.Chip.defaultAvatarColor:e,fontSize:t.typography.pxToRem(12)},[`& .${re.avatarColorPrimary}`]:{color:(t.vars||t).palette.primary.contrastText,backgroundColor:(t.vars||t).palette.primary.dark},[`& .${re.avatarColorSecondary}`]:{color:(t.vars||t).palette.secondary.contrastText,backgroundColor:(t.vars||t).palette.secondary.dark},[`& .${re.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:t.typography.pxToRem(10)},[`& .${re.icon}`]:{marginLeft:5,marginRight:-6},[`& .${re.deleteIcon}`]:{WebkitTapHighlightColor:"transparent",color:t.alpha((t.vars||t).palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:t.alpha((t.vars||t).palette.text.primary,.4)}},variants:[{props:{size:"small"},style:{height:24,[`& .${re.icon}`]:{fontSize:18,marginLeft:4,marginRight:-4},[`& .${re.deleteIcon}`]:{fontSize:16,marginRight:4,marginLeft:-4}}},...Object.entries(t.palette).filter(gn(["contrastText"])).map(([n])=>({props:{color:n},style:{backgroundColor:(t.vars||t).palette[n].main,color:(t.vars||t).palette[n].contrastText,[`& .${re.deleteIcon}`]:{color:t.alpha((t.vars||t).palette[n].contrastText,.7),"&:hover, &:active":{color:(t.vars||t).palette[n].contrastText}}}})),{props:n=>n.iconColor===n.color,style:{[`& .${re.icon}`]:{color:t.vars?t.vars.palette.Chip.defaultIconColor:e}}},{props:n=>n.iconColor===n.color&&n.color!=="default",style:{[`& .${re.icon}`]:{color:"inherit"}}},{props:{onDelete:!0},style:{[`&.${re.focusVisible}`]:{backgroundColor:t.alpha((t.vars||t).palette.action.selected,`${(t.vars||t).palette.action.selectedOpacity} + ${(t.vars||t).palette.action.focusOpacity}`)}}},...Object.entries(t.palette).filter(gn(["dark"])).map(([n])=>({props:{color:n,onDelete:!0},style:{[`&.${re.focusVisible}`]:{background:(t.vars||t).palette[n].dark}}})),{props:{clickable:!0},style:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:t.alpha((t.vars||t).palette.action.selected,`${(t.vars||t).palette.action.selectedOpacity} + ${(t.vars||t).palette.action.hoverOpacity}`)},[`&.${re.focusVisible}`]:{backgroundColor:t.alpha((t.vars||t).palette.action.selected,`${(t.vars||t).palette.action.selectedOpacity} + ${(t.vars||t).palette.action.focusOpacity}`)},"&:active":{boxShadow:(t.vars||t).shadows[1]}}},...Object.entries(t.palette).filter(gn(["dark"])).map(([n])=>({props:{color:n,clickable:!0},style:{[`&:hover, &.${re.focusVisible}`]:{backgroundColor:(t.vars||t).palette[n].dark}}})),{props:{variant:"outlined"},style:{backgroundColor:"transparent",border:t.vars?`1px solid ${t.vars.palette.Chip.defaultBorder}`:`1px solid ${t.palette.mode==="light"?t.palette.grey[400]:t.palette.grey[700]}`,[`&.${re.clickable}:hover`]:{backgroundColor:(t.vars||t).palette.action.hover},[`&.${re.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`& .${re.avatar}`]:{marginLeft:4},[`& .${re.avatarSmall}`]:{marginLeft:2},[`& .${re.icon}`]:{marginLeft:4},[`& .${re.iconSmall}`]:{marginLeft:2},[`& .${re.deleteIcon}`]:{marginRight:5},[`& .${re.deleteIconSmall}`]:{marginRight:3}}},...Object.entries(t.palette).filter(gn()).map(([n])=>({props:{variant:"outlined",color:n},style:{color:(t.vars||t).palette[n].main,border:`1px solid ${t.alpha((t.vars||t).palette[n].main,.7)}`,[`&.${re.clickable}:hover`]:{backgroundColor:t.alpha((t.vars||t).palette[n].main,(t.vars||t).palette.action.hoverOpacity)},[`&.${re.focusVisible}`]:{backgroundColor:t.alpha((t.vars||t).palette[n].main,(t.vars||t).palette.action.focusOpacity)},[`& .${re.deleteIcon}`]:{color:t.alpha((t.vars||t).palette[n].main,.7),"&:hover, &:active":{color:(t.vars||t).palette[n].main}}}}))]}})),Dp=ln("span",{name:"MuiChip",slot:"Label",overridesResolver:(t,e)=>{const{ownerState:n}=t,{size:i}=n;return[e.label,e[`label${ue(i)}`]]}})({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap",variants:[{props:{variant:"outlined"},style:{paddingLeft:11,paddingRight:11}},{props:{size:"small"},style:{paddingLeft:8,paddingRight:8}},{props:{size:"small",variant:"outlined"},style:{paddingLeft:7,paddingRight:7}}]});function Cr(t){return t.key==="Backspace"||t.key==="Delete"}const xc=w.forwardRef(function(e,n){const i=Vs({props:e,name:"MuiChip"}),{avatar:s,className:o,clickable:r,color:c="default",component:l,deleteIcon:u,disabled:d=!1,icon:h,label:f,onClick:p,onDelete:x,onKeyDown:y,onKeyUp:m,size:g="medium",variant:v="filled",tabIndex:S,skipFocusWhenDisabled:D=!1,slots:j={},slotProps:I={},...B}=i,W=w.useRef(null),V=Mc(W,n),Z=Q=>{Q.stopPropagation(),x&&x(Q)},ne=Q=>{Q.currentTarget===Q.target&&Cr(Q)&&Q.preventDefault(),y&&y(Q)},ee=Q=>{Q.currentTarget===Q.target&&x&&Cr(Q)&&x(Q),m&&m(Q)},ie=r!==!1&&p?!0:r,K=ie||x?vs:l||"div",te={...i,component:K,disabled:d,size:g,color:c,iconColor:w.isValidElement(h)&&h.props.color||c,onDelete:!!x,clickable:ie,variant:v},X=Op(te),be=K===vs?{component:l||"div",focusVisibleClassName:X.focusVisible,...x&&{disableRipple:!0}}:{};let we=null;x&&(we=u&&w.isValidElement(u)?w.cloneElement(u,{className:Kt(u.props.className,X.deleteIcon),onClick:Z}):a.jsx(Ep,{className:X.deleteIcon,onClick:Z}));let se=null;s&&w.isValidElement(s)&&(se=w.cloneElement(s,{className:Kt(X.avatar,s.props.className)}));let L=null;h&&w.isValidElement(h)&&(L=w.cloneElement(h,{className:Kt(X.icon,h.props.className)}));const N={slots:j,slotProps:I},[ge,ve]=On("root",{elementType:Pp,externalForwardedProps:{...N,...B},ownerState:te,shouldForwardComponentProp:!0,ref:V,className:Kt(X.root,o),additionalProps:{disabled:ie&&d?!0:void 0,tabIndex:D&&d?-1:S,...be},getSlotProps:Q=>({...Q,onClick:xe=>{Q.onClick?.(xe),p?.(xe)},onKeyDown:xe=>{Q.onKeyDown?.(xe),ne(xe)},onKeyUp:xe=>{Q.onKeyUp?.(xe),ee(xe)}})}),[Se,oe]=On("label",{elementType:Dp,externalForwardedProps:N,ownerState:te,className:X.label});return a.jsxs(ge,{as:K,...ve,children:[se||L,a.jsx(Se,{...oe,children:f}),we]})});function jp(t){return ji("PrivateSwitchBase",t)}Di("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Ap=t=>{const{classes:e,checked:n,disabled:i,edge:s}=t,o={root:["root",n&&"checked",i&&"disabled",s&&`edge${ue(s)}`],input:["input"]};return Ai(o,jp,e)},Tp=ln(vs,{name:"MuiSwitchBase"})({padding:9,borderRadius:"50%",variants:[{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:({edge:t,ownerState:e})=>t==="start"&&e.size!=="small",style:{marginLeft:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}},{props:({edge:t,ownerState:e})=>t==="end"&&e.size!=="small",style:{marginRight:-12}}]}),Ip=ln("input",{name:"MuiSwitchBase",shouldForwardProp:na})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Mp=w.forwardRef(function(e,n){const{autoFocus:i,checked:s,checkedIcon:o,defaultChecked:r,disabled:c,disableFocusRipple:l=!1,edge:u=!1,icon:d,id:h,inputProps:f,inputRef:p,name:x,onBlur:y,onChange:m,onFocus:g,readOnly:v,required:S=!1,tabIndex:D,type:j,value:I,slots:B={},slotProps:W={},...V}=e,[Z,ne]=Rc({controlled:s,default:!!r,name:"SwitchBase",state:"checked"}),ee=ta(),ie=oe=>{g&&g(oe),ee&&ee.onFocus&&ee.onFocus(oe)},K=oe=>{y&&y(oe),ee&&ee.onBlur&&ee.onBlur(oe)},te=oe=>{if(oe.nativeEvent.defaultPrevented)return;const Q=oe.target.checked;ne(Q),m&&m(oe,Q)};let X=c;ee&&typeof X>"u"&&(X=ee.disabled);const be=j==="checkbox"||j==="radio",we={...e,checked:Z,disabled:X,disableFocusRipple:l,edge:u},se=Ap(we),L={slots:B,slotProps:{input:f,...W}},[N,ge]=On("root",{ref:n,elementType:Tp,className:se.root,shouldForwardComponentProp:!0,externalForwardedProps:{...L,component:"span",...V},getSlotProps:oe=>({...oe,onFocus:Q=>{oe.onFocus?.(Q),ie(Q)},onBlur:Q=>{oe.onBlur?.(Q),K(Q)}}),ownerState:we,additionalProps:{centerRipple:!0,focusRipple:!l,disabled:X,role:void 0,tabIndex:null}}),[ve,Se]=On("input",{ref:p,elementType:Ip,className:se.input,externalForwardedProps:L,getSlotProps:oe=>({...oe,onChange:Q=>{oe.onChange?.(Q),te(Q)}}),ownerState:we,additionalProps:{autoFocus:i,checked:s,defaultChecked:r,disabled:X,id:be?h:void 0,name:x,readOnly:v,required:S,tabIndex:D,type:j,...j==="checkbox"&&I===void 0?{}:{value:I}}});return a.jsxs(N,{...ge,children:[a.jsx(ve,{...Se}),Z?o:d]})}),Rp=Ie(a.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})),Bp=Ie(a.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})),zp=Ie(a.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}));function Lp(t){return ji("MuiCheckbox",t)}const ss=Di("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),Np=t=>{const{classes:e,indeterminate:n,color:i,size:s}=t,o={root:["root",n&&"indeterminate",`color${ue(i)}`,`size${ue(s)}`]},r=Ai(o,Lp,e);return{...e,...r}},Fp=ln(Mp,{shouldForwardProp:t=>na(t)||t==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.indeterminate&&e.indeterminate,e[`size${ue(n.size)}`],n.color!=="default"&&e[`color${ue(n.color)}`]]}})(Ti(({theme:t})=>({color:(t.vars||t).palette.text.secondary,variants:[{props:{color:"default",disableRipple:!1},style:{"&:hover":{backgroundColor:t.alpha((t.vars||t).palette.action.active,(t.vars||t).palette.action.hoverOpacity)}}},...Object.entries(t.palette).filter(gn()).map(([e])=>({props:{color:e,disableRipple:!1},style:{"&:hover":{backgroundColor:t.alpha((t.vars||t).palette[e].main,(t.vars||t).palette.action.hoverOpacity)}}})),...Object.entries(t.palette).filter(gn()).map(([e])=>({props:{color:e},style:{[`&.${ss.checked}, &.${ss.indeterminate}`]:{color:(t.vars||t).palette[e].main},[`&.${ss.disabled}`]:{color:(t.vars||t).palette.action.disabled}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]}))),$p=a.jsx(Bp,{}),Vp=a.jsx(Rp,{}),Gp=a.jsx(zp,{}),Ei=w.forwardRef(function(e,n){const i=Vs({props:e,name:"MuiCheckbox"}),{checkedIcon:s=$p,color:o="primary",icon:r=Vp,indeterminate:c=!1,indeterminateIcon:l=Gp,inputProps:u,size:d="medium",disableRipple:h=!1,className:f,slots:p={},slotProps:x={},...y}=i,m=c?l:r,g=c?l:s,v={...i,disableRipple:h,color:o,indeterminate:c,size:d},S=Np(v),D=x.input??u,[j,I]=On("root",{ref:n,elementType:Fp,className:Kt(S.root,f),shouldForwardComponentProp:!0,externalForwardedProps:{slots:p,slotProps:x,...y},ownerState:v,additionalProps:{type:"checkbox",icon:w.cloneElement(m,{fontSize:m.props.fontSize??d}),checkedIcon:w.cloneElement(g,{fontSize:g.props.fontSize??d}),disableRipple:h,slots:p,slotProps:{input:Bc(typeof D=="function"?D(v):D,{"data-indeterminate":c})}}});return a.jsx(j,{...I,classes:S})});function Up(t){return ji("MuiFormControlLabel",t)}const Vn=Di("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),Wp=t=>{const{classes:e,disabled:n,labelPlacement:i,error:s,required:o}=t,r={root:["root",n&&"disabled",`labelPlacement${ue(i)}`,s&&"error",o&&"required"],label:["label",n&&"disabled"],asterisk:["asterisk",s&&"error"]};return Ai(r,Up,e)},qp=ln("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[{[`& .${Vn.label}`]:e.label},e.root,e[`labelPlacement${ue(n.labelPlacement)}`]]}})(Ti(({theme:t})=>({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${Vn.disabled}`]:{cursor:"default"},[`& .${Vn.label}`]:{[`&.${Vn.disabled}`]:{color:(t.vars||t).palette.text.disabled}},variants:[{props:{labelPlacement:"start"},style:{flexDirection:"row-reverse",marginRight:-11}},{props:{labelPlacement:"top"},style:{flexDirection:"column-reverse"}},{props:{labelPlacement:"bottom"},style:{flexDirection:"column"}},{props:({labelPlacement:e})=>e==="start"||e==="top"||e==="bottom",style:{marginLeft:16}}]}))),Hp=ln("span",{name:"MuiFormControlLabel",slot:"Asterisk"})(Ti(({theme:t})=>({[`&.${Vn.error}`]:{color:(t.vars||t).palette.error.main}}))),Is=w.forwardRef(function(e,n){const i=Vs({props:e,name:"MuiFormControlLabel"}),{checked:s,className:o,componentsProps:r={},control:c,disabled:l,disableTypography:u,inputRef:d,label:h,labelPlacement:f="end",name:p,onChange:x,required:y,slots:m={},slotProps:g={},value:v,...S}=i,D=ta(),j=l??c.props.disabled??D?.disabled,I=y??c.props.required,B={disabled:j,required:I};["checked","name","onChange","value","inputRef"].forEach(te=>{typeof c.props[te]>"u"&&typeof i[te]<"u"&&(B[te]=i[te])});const W=zc({props:i,muiFormControl:D,states:["error"]}),V={...i,disabled:j,labelPlacement:f,required:I,error:W.error},Z=Wp(V),ne={slots:m,slotProps:{...r,...g}},[ee,ie]=On("typography",{elementType:yo,externalForwardedProps:ne,ownerState:V});let K=h;return K!=null&&K.type!==yo&&!u&&(K=a.jsx(ee,{component:"span",...ie,className:Kt(Z.label,ie?.className),children:K})),a.jsxs(qp,{className:Kt(Z.root,o),ownerState:V,ref:n,...S,children:[w.cloneElement(c,B),I?a.jsxs("div",{children:[K,a.jsxs(Hp,{ownerState:V,"aria-hidden":!0,className:Z.asterisk,children:[" ","*"]})]}):K]})}),lo=pc({themeId:Lc});function Yp(){const t=Y(s=>s.getAvatar),e=Y(s=>s.avatarName),n=Y(s=>s.setAvatar),i=ye(s=>s.playButtonClickSfx);return w.useEffect(()=>{t()},[t,e]),a.jsx(Qp,{children:Nc.map(s=>a.jsx(ia,{followCursor:!0,title:`✒️ ${s.artist}`,PopperProps:{modifiers:[{name:"offset",options:{offset:[-3,8]}}]},slotProps:{tooltip:{sx:{background:"transparent",color:"dodgerblue",opacity:.5}}},children:a.jsx(Jp,{alt:s.name,src:ks(s.name),chosen:e===s.name,onClick:()=>{i(),n(s.name)}})},s.name))})}const Qp=k.div`
    align-self: center;
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    position: relative;
    padding: 5px;
    transition: all 0.2s ease-in-out;
`,Jp=k.img`
    width: 48px;
    opacity: ${({chosen:t})=>t?"1":"0.5"};
    background: ${({chosen:t})=>t?"rgba(220 ,220 ,220, 0.2)":"none"};
    outline: ${({chosen:t})=>t?"2px solid dodgerblue":"none"};
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    :hover {
        opacity: 1;
        z-index: 100;
        filter: drop-shadow(0 0 3px #57a0ff);
    }

    @media (max-width: 1050px) {
        width: 32px;
    }
`;function Kp(){const t=Y(c=>c.changeSafetyQuestion),[e,n]=w.useState(""),[i,s]=w.useState(""),o=e.trim().length>0&&i.trim().length>0;function r(c){c.preventDefault(),o&&(t(e,i),n(""),s(""))}return a.jsx(Xp,{children:a.jsxs("div",{style:{gap:8,display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[a.jsx("span",{style:{fontFamily:"Naston, sans-serif",color:"#1d7dfc"},children:"Safety Question:"}),a.jsxs(Zp,{onSubmit:r,children:[a.jsx(Er,{name:"question",placeholder:"Question",value:e,onChange:c=>n(c.target.value)}),a.jsx(Er,{name:"answer",placeholder:"Answer",value:i,onChange:c=>s(c.target.value)}),a.jsx(Xe,{type:"submit",disabled:!o,children:"SAVE"})]})]})})}const Xp=k.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    @media (max-width: 1100px) {
        justify-content: center;
    }
`,Zp=k.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    flex-wrap: wrap;
`,Er=k.input`
    width: 243px;
    height: 32px;
    background: #242424;
    font-family: Cousine, sans-serif;

    &:focus {
        outline: 2px solid #1d7dfc;
        outline-offset: -2px;
    }
`;function ex(){const[t,e]=w.useState(""),[n,i]=w.useState([]),[s,o]=w.useState(!1);w.useEffect(()=>{r()},[]);const r=async()=>{try{const h=await gt.get("/api/user/blocked");i(h.data.sort())}catch(h){console.error("Failed to fetch blocked users:",h)}},c=async h=>{try{o(!0);const f=await gt.post(`/api/user/blocked/${h}`);f.data.includes("Error")&&nn(f.data.substring(7))}catch(f){console.error("Failed to block user:",f)}finally{r(),o(!1)}},l=async h=>{try{o(!0);const f=await gt.delete(`/api/user/blocked/${h}`);f.data.includes("Error")&&nn(f.data.substring(7))}catch(f){console.error("Failed to unblock user:",f)}finally{r(),o(!1)}},u=h=>{h.preventDefault();const f=t.trim();if(f){if(n.includes(f)){alert("User is already blocked"),e("");return}c(f),e("")}},d=h=>{l(h)};return a.jsxs(tx,{children:[a.jsx("span",{style:{fontFamily:"Naston, sans-serif",color:"#1d7dfc"},children:"Blocked Users:"}),a.jsx("form",{onSubmit:u,children:a.jsxs(nx,{children:[a.jsx(sx,{placeholder:"Enter username to block",value:t,onChange:h=>e(h.target.value),disabled:s}),a.jsx(Xe,{type:"submit",disabled:s||!t.trim()||n.includes(t.trim()),children:"ADD"})]})}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:n.map(h=>a.jsx(ix,{label:h,onDelete:()=>d(h),disabled:s,variant:"outlined"},h))}),n.length===0&&a.jsx("span",{color:"rgba(255, 255, 255, 0.7)",children:"No blocked users"})]})}const tx=k.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;
`,nx=k.div`
    display: flex;
    gap: 10px;
    align-items: center;
`,ix=k(xc)`
    background-color: rgba(255, 255, 255, 0.05);
    color: white;
    border-color: rgba(241, 185, 73, 0.53);

    .MuiChip-deleteIcon {
        color: rgba(255, 255, 255, 0.7);

        &:hover {
            color: #ff1b58;
        }
    }

    &:hover {
        background-color: rgba(12, 12, 12, 0.9);
    }

    &.Mui-disabled {
        opacity: 0.5;
    }
`,sx=k.input`
    width: 243px;
    height: 32px;
    background: #242424;
    font-family: Cousine, sans-serif;

    &:focus {
        outline: 2px solid #1d7dfc;
        outline-offset: -2px;
    }
`,ox={autoPlay:!0,background:{color:{value:"transparent"},image:"",position:"",repeat:"",size:"",opacity:1},backgroundMask:{composite:"destination-out",cover:{color:{value:"#fff"},opacity:1},enable:!1},defaultThemes:{},delay:0,fullScreen:{enable:!0,zIndex:-1},detectRetina:!0,duration:0,fpsLimit:120,interactivity:{detectsOn:"window",events:{onHover:{enable:!0,mode:"grab",parallax:{enable:!1,force:2,smooth:10}},resize:{delay:.5,enable:!0}},modes:{trail:{delay:.005,pauseOnStop:!0,quantity:5,particles:{color:{value:"#ff0000",animation:{enable:!0,speed:400,sync:!0}},collisions:{enable:!1},links:{type:"circle",enable:!1},move:{outModes:{default:"destroy"},speed:2},size:{value:5,animation:{enable:!0,speed:5,minimumValue:1,sync:!0,startValue:"min",destroy:"max"}}}},attract:{distance:200,duration:.4,easing:"ease-out-quad",factor:1,maxSpeed:50,speed:1},bounce:{distance:200},bubble:{distance:200,duration:.4,mix:!1,divs:{distance:200,duration:.4,mix:!1,selectors:[]}},connect:{distance:80,links:{opacity:.5},radius:60},grab:{distance:150,links:{blink:!1,consent:!1,opacity:1}},push:{default:!0,groups:[],quantity:4},remove:{quantity:2},repulse:{distance:200,duration:.4,factor:100,speed:1,maxSpeed:50,easing:"ease-out-quad",divs:{distance:200,duration:.4,factor:100,speed:1,maxSpeed:50,easing:"ease-out-quad",selectors:[]}},slow:{factor:3,radius:200},light:{area:{gradient:{start:{value:"#ffffff"},stop:{value:"#000000"}},radius:1e3},shadow:{color:{value:"#000000"},length:2e3}}}},manualParticles:[],particles:{bounce:{horizontal:{value:1},vertical:{value:1}},collisions:{absorb:{speed:2},bounce:{horizontal:{value:1},vertical:{value:1}},enable:!1,maxSpeed:50,mode:"bounce",overlap:{enable:!0,retries:0}},color:{value:"#386ff0",animation:{h:{count:0,enable:!1,offset:0,speed:1,delay:0,decay:0,sync:!0},s:{count:0,enable:!1,offset:0,speed:1,delay:0,decay:0,sync:!0},l:{count:0,enable:!1,offset:0,speed:1,delay:0,decay:0,sync:!0}}},groups:{},move:{angle:{offset:0,value:90},attract:{distance:200,enable:!1,rotate:{x:3e3,y:3e3}},center:{x:50,y:50,mode:"percent",radius:0},decay:0,distance:{},direction:"none",drift:0,enable:!0,gravity:{acceleration:9.81,enable:!1,inverse:!1,maxSpeed:50},path:{clamp:!0,delay:{value:0},enable:!1,options:{}},outModes:{default:"out",bottom:"out",left:"out",right:"out",top:"out"},random:!1,size:!1,speed:2,spin:{acceleration:0,enable:!1},straight:!1,trail:{enable:!1,length:10,fill:{}},vibrate:!1,warp:!1},number:{density:{enable:!0,width:1920,height:1080},value:150},opacity:{value:{min:.3,max:.8},animation:{count:0,enable:!0,speed:.5,decay:0,delay:0,sync:!1,mode:"auto",startValue:"random",destroy:"none"}},reduceDuplicates:!1,shadow:{blur:0,color:{value:"#000"},enable:!1,offset:{x:0,y:0}},shape:{close:!0,fill:!0,options:{},type:"diamonds"},size:{value:{min:1,max:3},animation:{count:0,enable:!0,speed:3,decay:0,delay:0,sync:!1,mode:"auto",startValue:"random",destroy:"none"}},stroke:{width:0},zIndex:{value:0,opacityRate:1,sizeRate:1,velocityRate:1},destroy:{bounds:{},mode:"none",split:{count:1,factor:{random:{enable:!1,minimumValue:0},value:3},rate:{random:{enable:!1,minimumValue:0},value:{min:4,max:9}},sizeOffset:!0,particles:{}}},roll:{darken:{enable:!1,value:0},enable:!1,enlighten:{enable:!1,value:0},mode:"vertical",speed:25},tilt:{random:{enable:!1,minimumValue:0},value:0,animation:{enable:!1,speed:0,decay:0,sync:!1},direction:"clockwise",enable:!1},twinkle:{lines:{enable:!1,frequency:.05,opacity:1},particles:{enable:!0,frequency:1,opacity:1}},wobble:{distance:5,enable:!1,speed:{angle:50,move:10}},life:{count:0,delay:{random:{enable:!1,minimumValue:0},value:0,sync:!1},duration:{random:{enable:!1,minimumValue:1e-4},value:0,sync:!1}},rotate:{random:{enable:!1,minimumValue:0},value:0,animation:{enable:!1,speed:0,decay:0,sync:!1},direction:"clockwise",path:!1},orbit:{animation:{count:0,enable:!1,speed:1,decay:0,delay:0,sync:!1},enable:!1,opacity:1,rotation:{random:{enable:!1,minimumValue:0},value:45},width:1},links:{blink:!1,color:{value:"random"},consent:!1,distance:100,enable:!0,frequency:1,opacity:1,shadow:{blur:5,color:{value:"#000"},enable:!1},triangles:{enable:!1,frequency:1},width:1,warp:!1},repulse:{random:{enable:!1,minimumValue:0},value:0,enabled:!1,distance:1,duration:1,factor:1,speed:1}},pauseOnBlur:!0,pauseOnOutsideViewport:!0,responsive:[],smooth:!1,style:{},themes:[],zLayers:100,motion:{disable:!1,reduce:{factor:4,value:!0}}};Tn.delete;function un({children:t,style:e}){const n=Y(o=>o.particlesInitialized),i=o=>new Promise(r=>{console.log(o),r()}),s=w.useMemo(()=>a.jsx(iu,{id:"tsparticles",particlesLoaded:i,options:ox}),[]);return a.jsxs(rx,{style:e,children:[t,n&&s]})}const rx=k.div`
    background: transparent; // !! define bg in particles
    display: flex;
    min-height: 100vh;
    min-width: 100vw;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x: clip;
    container-type: inline-size;
    container-name: wrapper;
    position: relative;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    .profile {
        padding-top: 20px;
        justify-content: flex-start;
    }
`;function _i({headline:t,rightElement:e}){return a.jsxs(ax,{children:[a.jsxs("div",{style:{width:"100%",height:"3.5em",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsx("span",{children:t}),e]}),a.jsx("hr",{style:{width:"100vw",maxWidth:1204}})]})}const ax=k.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100vw;
    max-width: 1204px;

    span {
        color: #1d7dfc;
        line-height: 1;
        font-family: Naston, sans-serif;
        font-size: 26px;
        @media (max-width: 1050px) {
            padding-left: 5px;
        }
        transform: translateY(5px);
    }

    hr {
        color: #1d7dfc;
        width: 100%;
        background: #1d7dfc;
        height: 2px;
        border-radius: 3px;
        margin-top: 0;
    }
`;function cx(){const[t,e]=w.useState(""),[n,i]=w.useState(""),s=t.length>=6&&n.length>=6&&t===n;function o(r){if(r.preventDefault(),!s){t.length<6||n.length<6?nn("Password must be at least 6 characters long."):nn("Passwords do not match.");return}gt.put("/api/user/change-password",t,{headers:{"Content-Type":"text/plain"}}).then(()=>{Gs("Password changed successfully!"),e(""),i("")}).catch(c=>{console.error("Error changing password:",c),nn("Error changing password. Please try again.")})}return a.jsx(lx,{children:a.jsxs("div",{style:{gap:8,display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[a.jsx("span",{style:{fontFamily:"Naston, sans-serif",color:"#1d7dfc"},children:"Change Password:"}),a.jsxs(dx,{onSubmit:o,children:[a.jsx(_r,{name:"newPassword",type:"password",placeholder:"New password",autoComplete:"new-password",minLength:6,value:t,onChange:r=>e(r.target.value),style:{borderColor:t?t.length<6?"coral":"mediumaquamarine":void 0}}),a.jsx(_r,{name:"repeatPassword",type:"password",placeholder:"Repeat new password",autoComplete:"new-password",minLength:6,value:n,onChange:r=>i(r.target.value),style:{borderColor:n&&t.length>=6?t!==n?"coral":"mediumaquamarine":void 0}}),a.jsx(Xe,{type:"submit",disabled:!s,children:"SAVE"})]})]})})}const lx=k.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    @media (max-width: 1100px) {
        justify-content: center;
    }
`,dx=k.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    flex-wrap: wrap;
`,_r=k.input`
    width: 243px;
    height: 32px;
    background: #242424;
    font-family: Cousine, sans-serif;

    &:focus {
        outline: ${({value:t})=>t?"none":"2px solid #1d7dfc"};
        outline-offset: -2px;
    }
`;function ux(){const t=Y(e=>e.user);return a.jsx(un,{children:a.jsxs("div",{style:{paddingTop:20,maxWidth:1204,minHeight:"100vh",height:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start"},children:[a.jsx(_i,{headline:"Profile Settings for "+t,rightElement:a.jsx(Ni,{})}),a.jsxs("div",{style:{display:"flex",gap:32,flexWrap:"wrap"},children:[a.jsx(cx,{}),a.jsx(Kp,{}),a.jsx(ex,{})]}),a.jsx(_i,{headline:"Avatar"}),a.jsx(Yp,{})]})})}function hx(){const t=Fc().pathname;return a.jsxs(fx,{children:["Project ",t==="/login"&&a.jsx("br",{}),a.jsx(mc,{style:{fontSize:"60px"},children:"Drasil"})]})}const fx=k.h1`
  font-family: 'Pixel Digivolve', sans-serif;
  font-style: italic;
  font-weight: bold;
  margin: 0;
  font-size: 60px;
  text-shadow: 2px 4px 1px #03060a;
  letter-spacing: 2px;
  color: #ff880d;
  -webkit-text-stroke: 2px navy;
  @media (max-width: 766px) {
    font-size: 45px;
    margin-left: 12px;
  }
`,mc=k.span`
  font-family: 'Pixel Digivolve', sans-serif;
  font-style: italic;
  font-weight: bold;
  font-size: 54px;
  margin: 0;
  text-shadow: 1.5px 3px 1px #060e18;
  color: #1d7dfc;
  -webkit-text-stroke: 2px navy;
  position: relative;

  @media (max-width: 766px) {
    font-size: 35px;
    margin-left: 12px;
  }
`;function gc(){return a.jsx(px,{children:a.jsx("a",{href:"https://github.com/WE-Kaito/digimon-tcg-simulator/wiki/Patchnotes#03042026",target:"_blank",rel:"noopener noreferrer",children:"Patch notes (03.04.2026)"})})}const px=k.sub`
    width: 100vw;
    position: fixed;
    bottom: -2px;
    left: 114px;
    transform: translateX(-50%);
    font-family: Cousine, monospace;
`;function xx(){const t=mi(s=>s.hasAcceptedRules),e=mi(s=>s.setHasAcceptedRules),[n,i]=w.useState(!1);return a.jsxs(Us,{open:!t,children:[a.jsx(sa,{sx:{color:"crimson",fontFamily:"League Spartan, sans-serif",fontSize:26,textAlign:"center"},children:"Terms of use"}),a.jsxs(Ws,{sx:{color:"ghostwhite",fontFamily:"League Spartan, sans-serif"},children:[a.jsxs("p",{children:["NO insults or harassment of any kind directed at other users.",a.jsx("br",{}),"NO usernames that are indicative of group hatred, abuse or any other form of encouragement of violence.",a.jsx("br",{}),"NO gossip about other users on our discord server. Please use the report function or settle things privately.",a.jsx("br",{}),"NO spamming or flooding the chat with messages.",a.jsx("br",{}),"NO sharing of links to harmful or inappropriate websites.",a.jsx("br",{}),"NO hacking, cheating, or exploiting bugs in the game.",a.jsx("br",{}),"If you can't agree on rulings, stay peaceful. You will often find helpful judges on the discord server."]}),a.jsx("hr",{}),a.jsxs("p",{children:["Breaking these rules will result in a warning, a temporary ban, or a permanent ban from the game and/or the discord server.",a.jsx("br",{}),a.jsx("br",{}),"This is a non-commercial fan-made project and is not affiliated with the Digimon brand or Bandai Co., Ltd. The purpose of this project is to celebrate and advertise the Digimon Card Game."]}),a.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"},children:[a.jsxs("div",{style:{display:"flex",gap:5,alignItems:"center"},children:[a.jsx(Ei,{sx:n?void 0:{svg:{color:"ghostwhite"}},checked:n,onChange:()=>i(!n)}),a.jsx("span",{style:{transform:"translateY(1px)"},children:"I have read and acknowledged the terms of use"})]}),a.jsx($c,{sx:{fontWeight:600},variant:"outlined",disabled:!n,onClick:()=>e(!0),children:"START ››"})]})]})]})}function mx(){const[t,e]=w.useState(""),[n,i]=w.useState(""),s=Nt(),o=Y(V=>V.login),[r,c]=w.useState(!1),[l,u]=w.useState(""),[d,h]=w.useState(""),[f,p]=w.useState(""),[x,y]=w.useState(""),[m,g]=w.useState(""),v=Y(V=>V.register),S=/^(?=.*[a-zA-Z])(?=.*\d).{6,128}$/,D=/^(?:(?![:_【】﹕≔<>$& ]).){3,16}$/,j=/^(?:(?![:_【】﹕≔<>$&]).){1,64}$/;function I(V){V.preventDefault(),o(t,n,s)}function B(V){V.preventDefault(),!(!D.test(l)||!S.test(d)||d!==f||!j.test(x)||!j.test(m))&&(v(l,d,x,m,c,s),h(""),p(""),u(""),y(""),g(""))}function W(V,Z){if(V==="")return"ghostwhite";let ne=!1;switch(Z){case"username":ne=D.test(V);break;case"password":ne=S.test(V);break;case"question":ne=j.test(V);break;case"repeatedPassword":ne=f===d}return ne?"#6ed298":"#e17b88"}return a.jsxs(un,{children:[a.jsx(hx,{}),a.jsx(xx,{}),!r&&a.jsxs(gx,{onSubmit:I,children:[a.jsx(Oi,{value:t,onChange:V=>e(V.target.value),type:"text",name:"userName",placeholder:"username",maxLength:16}),a.jsxs("div",{children:[a.jsx(Oi,{value:n,onChange:V=>i(V.target.value),type:"password",name:"password",placeholder:"password"}),a.jsx("br",{}),a.jsx(bx,{onClick:()=>s("/recover-password"),children:"Forgot your password?"})]}),a.jsx(Mn,{type:"submit",children:a.jsx(ai,{children:"LOGIN"})}),a.jsx(yc,{style:{marginTop:"50px"},type:"button",onClick:()=>c(!0),children:a.jsx(ai,{children:"REGISTER"})})]}),r&&a.jsxs(yx,{onSubmit:B,children:[a.jsxs("div",{children:[a.jsx(It,{value:l,onChange:V=>u(V.target.value),type:"text",name:"userName",placeholder:"username",maxLength:16,style:{backgroundColor:`${W(l,"username")}`}}),a.jsx("br",{}),a.jsx(Or,{children:"3 - 16 characters"})]}),a.jsxs("div",{children:[a.jsx(It,{value:d,onChange:V=>h(V.target.value),type:"password",name:"password",placeholder:"password",style:{backgroundColor:`${W(d,"password")}`}}),a.jsx("br",{}),a.jsx(Or,{children:"6+ characters, cont. numbers & letters"})]}),a.jsx(It,{value:f,onChange:V=>p(V.target.value),type:"password",name:"RepeatPassword",placeholder:"repeat password",style:{backgroundColor:`${W(f,"repeatedPassword")}`}}),a.jsx(It,{value:x,onChange:V=>y(V.target.value),type:"text",name:"Question",placeholder:"safety question",style:{backgroundColor:`${W(x,"question")}`}}),a.jsx(It,{value:m,onChange:V=>g(V.target.value),type:"text",name:"Answer",placeholder:"answer (pw recovery)",style:{backgroundColor:`${W(m,"question")}`}}),a.jsxs(kx,{children:[a.jsx(vx,{type:"button",onClick:()=>c(!1),children:a.jsx(ai,{children:"BACK"})}),a.jsx(Mn,{type:"submit",children:a.jsx(ai,{children:"REGISTER"})})]})]}),!r&&a.jsx(gc,{})]})}const Mn=k.button`
  cursor: pointer;
  width: 160px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 0;
  background: #D9D9D9;
  font-family: Pixel Digivolve, sans-serif;
  font-size: 20px;
  color: #0c0c0c;
  box-shadow: 6px 12px 1px 0 rgb(0, 0, 0);
  transition: all 0.15s ease;

  &:hover {
    background: lightgray;
    transform: translateY(1px);
    box-shadow: 4px 8px 1px 0 rgba(0, 0, 0, 0.9);
  }

  &:focus {
    outline: none;
  }

  &:active {
    background: #f8f8f8;
    transform: translateY(2px);
    box-shadow: 2px 4px 1px 0 rgba(0, 0, 0, 0.8);
  }
`,Oi=k.input`
  width: 280px;
  height: 60px;
  flex-shrink: 0;
  border: none;
  color: #070707;
  background: ghostwhite;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.25) inset;
  font-family: 'Naston', sans-serif;
  font-size: 26px;
  text-align: center;
  margin-bottom: 3px;
  transform: skewX(-15deg);

  :focus {
    outline: none;
  }

`,It=k(Oi)`
  font-size: 22px;
  width: 300px;
  height: 50px;
`,gx=k.form`
  margin-top: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    gap: 20px;
  }
`,yx=k.form`
  margin-top: 45px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    gap: 20px;
    margin-top: 35px;
  }
`,Or=k.span`
  font-family: 'Naston', sans-serif;
  font-size: 15px;
`,bx=k.span`
  font-family: 'Naston', sans-serif;
  font-size: 14px;
  margin-top: 2px;
  color: #646cff;
  user-select: none;
  cursor: pointer;

  &:hover {
    color: #ff880d;
  }

  &:active {
    color: #ff310d;
  }
`,yc=k(Mn)`
  background-color: black;
  color: ghostwhite;
  border-right: 1px solid rgba(25, 25, 26, 0.55);
  border-bottom: 1px solid rgba(25, 25, 26, 0.55);

  &:hover {
    background: #061025;
  }

  &:active {
    background: #08183a;
  }
`,vx=k(yc)`
  width: 110px;
  margin-right: 45px;
`,ai=k.span`
  font-family: 'Pixel Digivolve', sans-serif;
  letter-spacing: 1px;
`,kx=k.div`
  margin-top: 50px;
  @media (max-width: 767px) {
    margin-top: 32px;
  }
`;function wx(){const[t,e]=w.useState(""),n=Nt(),i=/^(?=.*[a-zA-Z])(?=.*\d).{6,128}$/,s=Y(v=>v.usernameForRecovery),o=Y(v=>v.recoveryQuestion),r=Y(v=>v.getRecoveryQuestion),c=Y(v=>v.recoverPassword),[l,u]=w.useState(""),[d,h]=w.useState(""),[f,p]=w.useState("");function x(){return l===""?"ghostwhite":i.test(l)?"#6ed298":"#e17b88"}function y(){return d===""?"ghostwhite":d===l?"#6ed298":"#e17b88"}function m(v){v.preventDefault(),r(t)}function g(v){v.preventDefault(),!(!i.test(l)||l!==d)&&c(f,l,n)}return a.jsxs(un,{children:[a.jsx(mc,{style:{marginTop:80},children:"Password Recovery"}),a.jsxs(Sx,{onSubmit:m,children:[a.jsx(Oi,{value:t,onChange:v=>e(v.target.value),type:"text",name:"username",placeholder:s||"username",maxLength:16}),a.jsxs(jx,{children:[a.jsx(Dx,{type:"button",onClick:()=>n("/"),children:a.jsx(os,{children:"Back"})}),a.jsx(Mn,{type:"submit",children:a.jsx(os,{children:"Find"})})]})]}),o==="User not found!"&&a.jsx(_x,{children:"User not found!"}),o!==""&&o!=="User not found!"&&a.jsxs(Cx,{onSubmit:g,children:[a.jsx(Ex,{children:o}),a.jsx(It,{value:f,onChange:v=>p(v.target.value),type:"text",name:"answer",placeholder:"answer"}),a.jsx(It,{value:l,onChange:v=>u(v.target.value),type:"password",name:"password",placeholder:"new password",style:{backgroundColor:x()}}),a.jsx(It,{value:d,onChange:v=>h(v.target.value),type:"password",name:"repeatPassword",placeholder:"repeat new password",style:{backgroundColor:y()}}),a.jsx(Ox,{type:"submit",style:{width:280},children:a.jsx(os,{children:"Change Password"})})]})]})}const Sx=k.form`
    margin-top: 70px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    justify-content: center;
    @media (max-width: 767px) {
        gap: 20px;
    }
`,Cx=k.form`
    margin-top: 45px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;

    @media (max-width: 767px) {
        gap: 20px;
        margin-top: 35px;
    }
`,Ex=k.span`
    font-family: "Naston", sans-serif;
    font-size: 16px;
    color: #646cff;
`,_x=k.span`
    font-family: "Naston", sans-serif;
    color: crimson;
    margin-top: 30px;
    font-size: 22px;
    max-width: 300px;
`,Ox=k(Mn)`
    &:hover {
        background: #39dcb6;
    }
`,Px=k(Mn)`
    background-color: black;
    color: ghostwhite;
    border-right: 1px solid rgba(25, 25, 26, 0.55);
    border-bottom: 1px solid rgba(25, 25, 26, 0.55);

    &:hover {
        background: #061025;
    }

    &:active {
        background: #08183a;
    }
`,Dx=k(Px)`
    width: 110px;
    margin-right: 45px;
`,os=k.span`
    font-family: "Pixel Digivolve", sans-serif;
    letter-spacing: 1px;
`,jx=k.div`
    margin-top: 50px;
    @media (max-width: 767px) {
        margin-top: 32px;
    }
`;function Ax(){const t=Y(n=>n.user);if(t==="")return"loading ...";const e=t!=="anonymousUser";return a.jsx(a.Fragment,{children:e?a.jsx(Vc,{}):a.jsx(qs,{to:"/login"})})}const Tx=Ie(a.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-3 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V8c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1"})),Ix=Ie(a.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m1 4h-2v-2h2z"})),Mx=Ie(a.jsx("path",{d:"M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6z"})),Rx=Ie(a.jsx("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2M9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9zm9 14H6V10h12zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2"})),Pr=Ie([a.jsx("path",{d:"M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z"},"0"),a.jsx("path",{d:"m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"},"1")]),Dr=Ie([a.jsx("path",{d:"M6 17.59 7.41 19 12 14.42 16.59 19 18 17.59l-6-6z"},"0"),a.jsx("path",{d:"m6 11 1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z"},"1")]),Bx=Ie([a.jsx("path",{d:"M19 5H5v14h14zm-5 12h-2V9h-2V7h4z",opacity:".3"},"0"),a.jsx("path",{d:"M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2M5 5h14v14H5zm5 4h2v8h2V7h-4z"},"1")]),zx=Ie([a.jsx("circle",{cx:"10",cy:"8",r:"2",opacity:".3"},"0"),a.jsx("path",{d:"M10 16c0-.34.03-.67.08-.99-.03-.01-.05-.01-.08-.01-1.97 0-3.9.53-5.59 1.54-.25.14-.41.46-.41.81V18h6.29c-.19-.63-.29-1.3-.29-2",opacity:".3"},"1"),a.jsx("path",{d:"M4 18v-.65c0-.34.16-.66.41-.81C6.1 15.53 8.03 15 10 15c.03 0 .05 0 .08.01.1-.7.3-1.37.59-1.98-.22-.02-.44-.03-.67-.03-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26c-.42-.6-.75-1.28-.97-2zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m10.83 6.63-1.45.49q-.48-.405-1.08-.63L18 11h-2l-.3 1.49q-.6.225-1.08.63l-1.45-.49-1 1.73 1.14 1c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1 1 1.73 1.45-.49q.48.405 1.08.63L16 21h2l.3-1.49q.6-.225 1.08-.63l1.45.49 1-1.73-1.14-1c.03-.21.06-.41.06-.63s-.03-.42-.06-.63l1.14-1zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"},"2")]),Lx=Ie([a.jsx("path",{fillRule:"evenodd",d:"M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87"},"0"),a.jsx("circle",{cx:"9",cy:"8",r:"4",fillRule:"evenodd"},"1"),a.jsx("path",{fillRule:"evenodd",d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24m-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4"},"2")]),Nx=Ie(a.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5 11H7v-2h10z"})),Fx=Ie(a.jsx("path",{d:"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27zM12 17.3c-.72 0-1.3-.58-1.3-1.3s.58-1.3 1.3-1.3 1.3.58 1.3 1.3-.58 1.3-1.3 1.3m1-4.3h-2V7h2z"})),$x=Ie([a.jsx("path",{d:"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27zM19 14.9 14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1z"},"0"),a.jsx("circle",{cx:"12",cy:"16",r:"1"},"1"),a.jsx("path",{d:"M11 7h2v7h-2z"},"2")]),Vx=Ie(a.jsx("path",{d:"M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"})),Gx=Ie(a.jsx("path",{d:"M16.54 11 13 7.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41zM11 7H2v2h9zm10 6.41L19.59 12 17 14.59 14.41 12 13 13.41 15.59 16 13 18.59 14.41 20 17 17.41 19.59 20 21 18.59 18.41 16zM11 15H2v2h9z"})),Ux=Ie([a.jsx("path",{d:"M15.22 4.75 7.87 7.79l4.96 11.96 7.35-3.05zM11 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1",opacity:".3"},"0"),a.jsx("path",{d:"m3.87 11.18-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61l1.34.56zm18.16 4.77L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6m-9.2 3.8L7.87 7.79l7.35-3.04h.01l4.95 11.95z"},"1"),a.jsx("circle",{cx:"11",cy:"9",r:"1"},"2"),a.jsx("path",{d:"m9.33 21.75-3.45-8.34v6.34c0 1.1.9 2 2 2z"},"3")]),bc=Ie(a.jsx("path",{d:"M20.06 10.14c.56.46 1.38.42 1.89-.09.59-.59.55-1.57-.1-2.1-3.59-2.94-8.2-4.03-12.55-3.26l2.59 2.59c2.89-.03 5.8.92 8.17 2.86m-2.27 1.83c-.78-.57-1.63-1-2.52-1.3l2.95 2.95c.24-.58.1-1.27-.43-1.65m-3.84 4.26c-1.22-.63-2.68-.63-3.91 0-.59.31-.7 1.12-.23 1.59l1.47 1.47c.39.39 1.02.39 1.41 0l1.47-1.47c.49-.47.39-1.28-.21-1.59m5.73 1.67L4.12 2.34a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L5.05 6.1c-1.01.5-1.99 1.11-2.89 1.85-.65.53-.69 1.51-.1 2.1.51.51 1.32.56 1.87.1 1-.82 2.1-1.46 3.25-1.93l2.23 2.23c-1.13.3-2.21.8-3.19 1.51-.69.5-.73 1.51-.13 2.11l.01.01c.49.49 1.26.54 1.83.13 1.19-.84 2.58-1.26 3.97-1.29l6.37 6.37c.39.39 1.02.39 1.41 0 .39-.37.39-1 0-1.39"}));var rs={},Je={},as={},jr;function vt(){return jr||(jr=1,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.isEventSourceSupported=t.isReactNative=t.ReadyState=t.DEFAULT_HEARTBEAT=t.UNPARSABLE_JSON_OBJECT=t.DEFAULT_RECONNECT_INTERVAL_MS=t.DEFAULT_RECONNECT_LIMIT=t.SOCKET_IO_PING_CODE=t.SOCKET_IO_PATH=t.SOCKET_IO_PING_INTERVAL=t.DEFAULT_EVENT_SOURCE_OPTIONS=t.EMPTY_EVENT_HANDLERS=t.DEFAULT_OPTIONS=void 0;var e=1,n=1e3*e;t.DEFAULT_OPTIONS={},t.EMPTY_EVENT_HANDLERS={},t.DEFAULT_EVENT_SOURCE_OPTIONS={withCredentials:!1,events:t.EMPTY_EVENT_HANDLERS},t.SOCKET_IO_PING_INTERVAL=25*n,t.SOCKET_IO_PATH="/socket.io/?EIO=3&transport=websocket",t.SOCKET_IO_PING_CODE="2",t.DEFAULT_RECONNECT_LIMIT=20,t.DEFAULT_RECONNECT_INTERVAL_MS=5e3,t.UNPARSABLE_JSON_OBJECT={},t.DEFAULT_HEARTBEAT={message:"ping",timeout:6e4,interval:25e3};var i;(function(o){o[o.UNINSTANTIATED=-1]="UNINSTANTIATED",o[o.CONNECTING=0]="CONNECTING",o[o.OPEN=1]="OPEN",o[o.CLOSING=2]="CLOSING",o[o.CLOSED=3]="CLOSED"})(i||(t.ReadyState=i={}));var s=function(){try{return"EventSource"in globalThis}catch{return!1}};t.isReactNative=typeof navigator<"u"&&navigator.product==="ReactNative",t.isEventSourceSupported=!t.isReactNative&&s()})(as)),as}var Ln={},cs={},Ar;function uo(){return Ar||(Ar=1,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.resetWebSockets=t.sharedWebSockets=void 0,t.sharedWebSockets={};var e=function(n){if(n&&t.sharedWebSockets.hasOwnProperty(n))delete t.sharedWebSockets[n];else for(var i in t.sharedWebSockets)t.sharedWebSockets.hasOwnProperty(i)&&delete t.sharedWebSockets[i]};t.resetWebSockets=e})(cs)),cs}var Ht={},Ct={},Tr;function ho(){if(Tr)return Ct;Tr=1,Object.defineProperty(Ct,"__esModule",{value:!0}),Ct.setUpSocketIOPing=Ct.appendQueryParams=Ct.parseSocketIOUrl=void 0;var t=vt(),e=function(s){if(s){var o=/^https|wss/.test(s),r=s.replace(/^(https?|wss?)(:\/\/)?/,""),c=r.replace(/\/$/,""),l=o?"wss":"ws";return"".concat(l,"://").concat(c).concat(t.SOCKET_IO_PATH)}else if(s===""){var o=/^https/.test(window.location.protocol),l=o?"wss":"ws",u=window.location.port?":".concat(window.location.port):"";return"".concat(l,"://").concat(window.location.hostname).concat(u).concat(t.SOCKET_IO_PATH)}return s};Ct.parseSocketIOUrl=e;var n=function(s,o){o===void 0&&(o={});var r=/\?([\w]+=[\w]+)/,c=r.test(s),l="".concat(Object.entries(o).reduce(function(u,d){var h=d[0],f=d[1];return u+"".concat(h,"=").concat(f,"&")},"").slice(0,-1));return"".concat(s).concat(c?"&":"?").concat(l)};Ct.appendQueryParams=n;var i=function(s,o){o===void 0&&(o=t.SOCKET_IO_PING_INTERVAL);var r=function(){return s(t.SOCKET_IO_PING_CODE)};return window.setInterval(r,o)};return Ct.setUpSocketIOPing=i,Ct}var ci={},Ir;function vc(){if(Ir)return ci;Ir=1,Object.defineProperty(ci,"__esModule",{value:!0}),ci.heartbeat=n;var t=vt();function e(i){return Array.isArray(i)?i.reduce(function(s,o){return s.current>o.current?s:o}).current:i.current}function n(i,s,o){var r=o||{},c=r.interval,l=c===void 0?t.DEFAULT_HEARTBEAT.interval:c,u=r.timeout,d=u===void 0?t.DEFAULT_HEARTBEAT.timeout:u,h=r.message,f=h===void 0?t.DEFAULT_HEARTBEAT.message:h,p=Math.max(100,l/10),x=Date.now(),y=setInterval(function(){var m=Date.now(),g=e(s);if(g+d<=m)console.warn("Heartbeat timed out, closing connection, last message received ".concat(m-g,"ms ago, last ping sent ").concat(m-x,"ms ago")),i.close();else if(g+l<=m&&x+l<=m)try{typeof f=="function"?i.send(f()):i.send(f),x=m}catch(v){console.error("Heartbeat failed, closing connection",v instanceof Error?v.message:v),i.close()}},p);return i.addEventListener("close",function(){clearInterval(y)}),function(){}}return ci}var Nn={},ls={},Mr;function fo(){return Mr||(Mr=1,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.resetSubscribers=t.removeSubscriber=t.addSubscriber=t.hasSubscribers=t.getSubscribers=void 0;var e={},n=[],i=function(l){return(0,t.hasSubscribers)(l)?Array.from(e[l]):n};t.getSubscribers=i;var s=function(l){var u;return((u=e[l])===null||u===void 0?void 0:u.size)>0};t.hasSubscribers=s;var o=function(l,u){e[l]=e[l]||new Set,e[l].add(u)};t.addSubscriber=o;var r=function(l,u){e[l].delete(u)};t.removeSubscriber=r;var c=function(l){if(l&&e.hasOwnProperty(l))delete e[l];else for(var u in e)e.hasOwnProperty(u)&&delete e[u]};t.resetSubscribers=c})(ls)),ls}var Rr;function po(){if(Rr)return Nn;Rr=1,Object.defineProperty(Nn,"__esModule",{value:!0}),Nn.assertIsWebSocket=n,Nn.resetGlobalState=i;var t=uo(),e=fo();function n(s,o){if(!o&&!(s instanceof WebSocket))throw new Error("")}function i(s){(0,e.resetSubscribers)(s),(0,t.resetWebSockets)(s)}return Nn}var Br;function Wx(){if(Br)return Ht;Br=1;var t=Ht&&Ht.__assign||function(){return t=Object.assign||function(d){for(var h,f=1,p=arguments.length;f<p;f++){h=arguments[f];for(var x in h)Object.prototype.hasOwnProperty.call(h,x)&&(d[x]=h[x])}return d},t.apply(this,arguments)};Object.defineProperty(Ht,"__esModule",{value:!0}),Ht.attachListeners=void 0;var e=ho(),n=vc(),i=vt(),s=po(),o=function(d,h,f,p){d.onmessage=function(x){var y;h.current.onMessage&&h.current.onMessage(x),typeof p?.current=="number"&&(p.current=Date.now()),!(typeof h.current.filter=="function"&&h.current.filter(x)!==!0)&&(h.current.heartbeat&&typeof h.current.heartbeat!="boolean"&&((y=h.current.heartbeat)===null||y===void 0?void 0:y.returnMessage)===x.data||f(x))}},r=function(d,h,f,p,x){d.onopen=function(y){if(h.current.onOpen&&h.current.onOpen(y),p.current=0,f(i.ReadyState.OPEN),h.current.heartbeat&&d instanceof WebSocket){var m=typeof h.current.heartbeat=="boolean"?void 0:h.current.heartbeat;x.current=Date.now(),(0,n.heartbeat)(d,x,m)}}},c=function(d,h,f,p,x){if(i.isEventSourceSupported&&d instanceof EventSource)return function(){};(0,s.assertIsWebSocket)(d,h.current.skipAssert);var y;return d.onclose=function(m){var g;if(h.current.onClose&&h.current.onClose(m),f(i.ReadyState.CLOSED),h.current.shouldReconnect&&h.current.shouldReconnect(m)){var v=(g=h.current.reconnectAttempts)!==null&&g!==void 0?g:i.DEFAULT_RECONNECT_LIMIT;if(x.current<v){var S=typeof h.current.reconnectInterval=="function"?h.current.reconnectInterval(x.current):h.current.reconnectInterval;y=window.setTimeout(function(){x.current++,p()},S??i.DEFAULT_RECONNECT_INTERVAL_MS)}else h.current.onReconnectStop&&h.current.onReconnectStop(v),console.warn("Max reconnect attempts of ".concat(v," exceeded"))}},function(){return y&&window.clearTimeout(y)}},l=function(d,h,f,p,x){var y;return d.onerror=function(m){var g;if(h.current.onError&&h.current.onError(m),i.isEventSourceSupported&&d instanceof EventSource&&(h.current.onClose&&h.current.onClose(t(t({},m),{code:1006,reason:"An error occurred with the EventSource: ".concat(m),wasClean:!1})),f(i.ReadyState.CLOSED),d.close()),h.current.retryOnError)if(x.current<((g=h.current.reconnectAttempts)!==null&&g!==void 0?g:i.DEFAULT_RECONNECT_LIMIT)){var v=typeof h.current.reconnectInterval=="function"?h.current.reconnectInterval(x.current):h.current.reconnectInterval;y=window.setTimeout(function(){x.current++,p()},v??i.DEFAULT_RECONNECT_INTERVAL_MS)}else h.current.onReconnectStop&&h.current.onReconnectStop(h.current.reconnectAttempts),console.warn("Max reconnect attempts of ".concat(h.current.reconnectAttempts," exceeded"))},function(){return y&&window.clearTimeout(y)}},u=function(d,h,f,p,x,y,m){var g=h.setLastMessage,v=h.setReadyState,S,D,j;return f.current.fromSocketIO&&(S=(0,e.setUpSocketIOPing)(m)),o(d,f,g,y),r(d,f,v,x,y),D=c(d,f,v,p,x),j=l(d,f,v,p,x),function(){v(i.ReadyState.CLOSING),D(),j(),d.close(),S&&clearInterval(S)}};return Ht.attachListeners=u,Ht}var Yt={},zr;function qx(){if(zr)return Yt;zr=1;var t=Yt&&Yt.__assign||function(){return t=Object.assign||function(h){for(var f,p=1,x=arguments.length;p<x;p++){f=arguments[p];for(var y in f)Object.prototype.hasOwnProperty.call(f,y)&&(h[y]=f[y])}return h},t.apply(this,arguments)};Object.defineProperty(Yt,"__esModule",{value:!0}),Yt.attachSharedListeners=void 0;var e=uo(),n=vt(),i=fo(),s=ho(),o=vc(),r=function(h,f,p){h.onmessage=function(x){(0,i.getSubscribers)(f).forEach(function(y){var m;y.optionsRef.current.onMessage&&y.optionsRef.current.onMessage(x),typeof((m=y?.lastMessageTime)===null||m===void 0?void 0:m.current)=="number"&&(y.lastMessageTime.current=Date.now()),!(typeof y.optionsRef.current.filter=="function"&&y.optionsRef.current.filter(x)!==!0)&&(p&&typeof p!="boolean"&&p?.returnMessage===x.data||y.setLastMessage(x))})}},c=function(h,f,p){h.onopen=function(x){var y=(0,i.getSubscribers)(f);y.forEach(function(m){m.reconnectCount.current=0,m.optionsRef.current.onOpen&&m.optionsRef.current.onOpen(x),m.setReadyState(n.ReadyState.OPEN),p&&h instanceof WebSocket&&(m.lastMessageTime.current=Date.now())}),p&&h instanceof WebSocket&&(0,o.heartbeat)(h,y.map(function(m){return m.lastMessageTime}),typeof p=="boolean"?void 0:p)}},l=function(h,f){h instanceof WebSocket&&(h.onclose=function(p){(0,i.getSubscribers)(f).forEach(function(x){x.optionsRef.current.onClose&&x.optionsRef.current.onClose(p),x.setReadyState(n.ReadyState.CLOSED)}),delete e.sharedWebSockets[f],(0,i.getSubscribers)(f).forEach(function(x){var y;if(x.optionsRef.current.shouldReconnect&&x.optionsRef.current.shouldReconnect(p)){var m=(y=x.optionsRef.current.reconnectAttempts)!==null&&y!==void 0?y:n.DEFAULT_RECONNECT_LIMIT;if(x.reconnectCount.current<m){var g=typeof x.optionsRef.current.reconnectInterval=="function"?x.optionsRef.current.reconnectInterval(x.reconnectCount.current):x.optionsRef.current.reconnectInterval;setTimeout(function(){x.reconnectCount.current++,x.reconnect.current()},g??n.DEFAULT_RECONNECT_INTERVAL_MS)}else x.optionsRef.current.onReconnectStop&&x.optionsRef.current.onReconnectStop(x.optionsRef.current.reconnectAttempts),console.warn("Max reconnect attempts of ".concat(m," exceeded"))}})})},u=function(h,f){h.onerror=function(p){(0,i.getSubscribers)(f).forEach(function(x){x.optionsRef.current.onError&&x.optionsRef.current.onError(p),n.isEventSourceSupported&&h instanceof EventSource&&(x.optionsRef.current.onClose&&x.optionsRef.current.onClose(t(t({},p),{code:1006,reason:"An error occurred with the EventSource: ".concat(p),wasClean:!1})),x.setReadyState(n.ReadyState.CLOSED))}),n.isEventSourceSupported&&h instanceof EventSource&&h.close()}},d=function(h,f,p,x){var y;return p.current.fromSocketIO&&(y=(0,s.setUpSocketIOPing)(x)),r(h,f,p.current.heartbeat),l(h,f),c(h,f,p.current.heartbeat),u(h,f),function(){y&&clearInterval(y)}};return Yt.attachSharedListeners=d,Yt}var Lr;function Hx(){if(Lr)return Ln;Lr=1,Object.defineProperty(Ln,"__esModule",{value:!0}),Ln.createOrJoinSocket=void 0;var t=uo(),e=vt(),n=Wx(),i=qx(),s=fo(),o=function(c,l,u,d,h){return function(){if((0,s.removeSubscriber)(c,l),!(0,s.hasSubscribers)(c)){try{var f=t.sharedWebSockets[c];f instanceof WebSocket&&(f.onclose=function(p){u.current.onClose&&u.current.onClose(p),d(e.ReadyState.CLOSED)}),f.close()}catch{}h&&h(),delete t.sharedWebSockets[c]}}},r=function(c,l,u,d,h,f,p,x,y){if(!e.isEventSourceSupported&&d.current.eventSourceOptions)throw e.isReactNative?new Error("EventSource is not supported in ReactNative"):new Error("EventSource is not supported");if(d.current.share){var m=null;t.sharedWebSockets[l]===void 0?(t.sharedWebSockets[l]=d.current.eventSourceOptions?new EventSource(l,d.current.eventSourceOptions):new WebSocket(l,d.current.protocols),c.current=t.sharedWebSockets[l],u(e.ReadyState.CONNECTING),m=(0,i.attachSharedListeners)(t.sharedWebSockets[l],l,d,y)):(c.current=t.sharedWebSockets[l],u(t.sharedWebSockets[l].readyState));var g={setLastMessage:h,setReadyState:u,optionsRef:d,reconnectCount:p,lastMessageTime:x,reconnect:f};return(0,s.addSubscriber)(l,g),o(l,g,d,u,m)}else{if(c.current=d.current.eventSourceOptions?new EventSource(l,d.current.eventSourceOptions):new WebSocket(l,d.current.protocols),u(e.ReadyState.CONNECTING),!c.current)throw new Error("WebSocket failed to be created");return(0,n.attachListeners)(c.current,{setLastMessage:h,setReadyState:u},d,f.current,p,x,y)}};return Ln.createOrJoinSocket=r,Ln}var Et={},Nr;function Yx(){return Nr||(Nr=1,(function(t){var e=Et&&Et.__awaiter||function(l,u,d,h){function f(p){return p instanceof d?p:new d(function(x){x(p)})}return new(d||(d=Promise))(function(p,x){function y(v){try{g(h.next(v))}catch(S){x(S)}}function m(v){try{g(h.throw(v))}catch(S){x(S)}}function g(v){v.done?p(v.value):f(v.value).then(y,m)}g((h=h.apply(l,u||[])).next())})},n=Et&&Et.__generator||function(l,u){var d={label:0,sent:function(){if(p[0]&1)throw p[1];return p[1]},trys:[],ops:[]},h,f,p,x=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return x.next=y(0),x.throw=y(1),x.return=y(2),typeof Symbol=="function"&&(x[Symbol.iterator]=function(){return this}),x;function y(g){return function(v){return m([g,v])}}function m(g){if(h)throw new TypeError("Generator is already executing.");for(;x&&(x=0,g[0]&&(d=0)),d;)try{if(h=1,f&&(p=g[0]&2?f.return:g[0]?f.throw||((p=f.return)&&p.call(f),0):f.next)&&!(p=p.call(f,g[1])).done)return p;switch(f=0,p&&(g=[g[0]&2,p.value]),g[0]){case 0:case 1:p=g;break;case 4:return d.label++,{value:g[1],done:!1};case 5:d.label++,f=g[1],g=[0];continue;case 7:g=d.ops.pop(),d.trys.pop();continue;default:if(p=d.trys,!(p=p.length>0&&p[p.length-1])&&(g[0]===6||g[0]===2)){d=0;continue}if(g[0]===3&&(!p||g[1]>p[0]&&g[1]<p[3])){d.label=g[1];break}if(g[0]===6&&d.label<p[1]){d.label=p[1],p=g;break}if(p&&d.label<p[2]){d.label=p[2],d.ops.push(g);break}p[2]&&d.ops.pop(),d.trys.pop();continue}g=u.call(l,d)}catch(v){g=[6,v],f=0}finally{h=p=0}if(g[0]&5)throw g[1];return{value:g[0]?g[1]:void 0,done:!0}}},i=Et&&Et.__spreadArray||function(l,u,d){if(d||arguments.length===2)for(var h=0,f=u.length,p;h<f;h++)(p||!(h in u))&&(p||(p=Array.prototype.slice.call(u,0,h)),p[h]=u[h]);return l.concat(p||Array.prototype.slice.call(u))};Object.defineProperty(t,"__esModule",{value:!0}),t.getUrl=void 0;var s=ho(),o=vt(),r=function(l){return new Promise(function(u){return window.setTimeout(u,l)})},c=function(l,u){for(var d=[],h=2;h<arguments.length;h++)d[h-2]=arguments[h];return e(void 0,i([l,u],d,!0),void 0,function(f,p,x){var y,m,g,v,S,D,j,I;return x===void 0&&(x=0),n(this,function(B){switch(B.label){case 0:if(typeof f!="function")return[3,10];B.label=1;case 1:return B.trys.push([1,3,,9]),[4,f()];case 2:return y=B.sent(),[3,9];case 3:return B.sent(),p.current.retryOnError?(m=(D=p.current.reconnectAttempts)!==null&&D!==void 0?D:o.DEFAULT_RECONNECT_LIMIT,x<m?(g=typeof p.current.reconnectInterval=="function"?p.current.reconnectInterval(x):p.current.reconnectInterval,[4,r(g??o.DEFAULT_RECONNECT_INTERVAL_MS)]):[3,5]):[3,7];case 4:return B.sent(),[2,(0,t.getUrl)(f,p,x+1)];case 5:return(I=(j=p.current).onReconnectStop)===null||I===void 0||I.call(j,x),[2,null];case 6:return[3,8];case 7:return[2,null];case 8:return[3,9];case 9:return[3,11];case 10:y=f,B.label=11;case 11:return v=p.current.fromSocketIO?(0,s.parseSocketIOUrl)(y):y,S=p.current.queryParams?(0,s.appendQueryParams)(v,p.current.queryParams):v,[2,S]}})})};t.getUrl=c})(Et)),Et}var ds={},Fr;function Qx(){return Fr||(Fr=1,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.websocketWrapper=void 0;var e=function(n,i){return new Proxy(n,{get:function(s,o){var r=s[o];return o==="reconnect"?i:typeof r=="function"?(console.error("Calling methods directly on the websocket is not supported at this moment. You must use the methods returned by useWebSocket."),function(){}):r},set:function(s,o,r){return/^on/.test(o)?(console.warn("The websocket's event handlers should be defined through the options object passed into useWebSocket."),!1):(s[o]=r,!0)}})};t.websocketWrapper=e,t.default=t.websocketWrapper})(ds)),ds}var $r;function xo(){if($r)return Je;$r=1;var t=Je&&Je.__assign||function(){return t=Object.assign||function(f){for(var p,x=1,y=arguments.length;x<y;x++){p=arguments[x];for(var m in p)Object.prototype.hasOwnProperty.call(p,m)&&(f[m]=p[m])}return f},t.apply(this,arguments)},e=Je&&Je.__awaiter||function(f,p,x,y){function m(g){return g instanceof x?g:new x(function(v){v(g)})}return new(x||(x=Promise))(function(g,v){function S(I){try{j(y.next(I))}catch(B){v(B)}}function D(I){try{j(y.throw(I))}catch(B){v(B)}}function j(I){I.done?g(I.value):m(I.value).then(S,D)}j((y=y.apply(f,p||[])).next())})},n=Je&&Je.__generator||function(f,p){var x={label:0,sent:function(){if(g[0]&1)throw g[1];return g[1]},trys:[],ops:[]},y,m,g,v=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return v.next=S(0),v.throw=S(1),v.return=S(2),typeof Symbol=="function"&&(v[Symbol.iterator]=function(){return this}),v;function S(j){return function(I){return D([j,I])}}function D(j){if(y)throw new TypeError("Generator is already executing.");for(;v&&(v=0,j[0]&&(x=0)),x;)try{if(y=1,m&&(g=j[0]&2?m.return:j[0]?m.throw||((g=m.return)&&g.call(m),0):m.next)&&!(g=g.call(m,j[1])).done)return g;switch(m=0,g&&(j=[j[0]&2,g.value]),j[0]){case 0:case 1:g=j;break;case 4:return x.label++,{value:j[1],done:!1};case 5:x.label++,m=j[1],j=[0];continue;case 7:j=x.ops.pop(),x.trys.pop();continue;default:if(g=x.trys,!(g=g.length>0&&g[g.length-1])&&(j[0]===6||j[0]===2)){x=0;continue}if(j[0]===3&&(!g||j[1]>g[0]&&j[1]<g[3])){x.label=j[1];break}if(j[0]===6&&x.label<g[1]){x.label=g[1],g=j;break}if(g&&x.label<g[2]){x.label=g[2],x.ops.push(j);break}g[2]&&x.ops.pop(),x.trys.pop();continue}j=p.call(f,x)}catch(I){j=[6,I],m=0}finally{y=g=0}if(j[0]&5)throw j[1];return{value:j[0]?j[1]:void 0,done:!0}}},i=Je&&Je.__importDefault||function(f){return f&&f.__esModule?f:{default:f}};Object.defineProperty(Je,"__esModule",{value:!0}),Je.useWebSocket=void 0;var s=Ii(),o=Gc(),r=vt(),c=Hx(),l=Yx(),u=i(Qx()),d=po(),h=function(f,p,x){p===void 0&&(p=r.DEFAULT_OPTIONS),x===void 0&&(x=!0);var y=(0,s.useState)(null),m=y[0],g=y[1],v=(0,s.useState)({}),S=v[0],D=v[1],j=(0,s.useMemo)(function(){if(!p.disableJson&&m)try{return JSON.parse(m.data)}catch{return r.UNPARSABLE_JSON_OBJECT}return null},[m,p.disableJson]),I=(0,s.useRef)(null),B=(0,s.useRef)(null),W=(0,s.useRef)(function(){}),V=(0,s.useRef)(0),Z=(0,s.useRef)(Date.now()),ne=(0,s.useRef)([]),ee=(0,s.useRef)(null),ie=(0,s.useRef)(p);ie.current=p;var K=I.current&&S[I.current]!==void 0?S[I.current]:f!==null&&x===!0?r.ReadyState.CONNECTING:r.ReadyState.UNINSTANTIATED,te=p.queryParams?JSON.stringify(p.queryParams):null,X=(0,s.useCallback)(function(se,L){var N;if(L===void 0&&(L=!0),r.isEventSourceSupported&&B.current instanceof EventSource){console.warn("Unable to send a message from an eventSource");return}((N=B.current)===null||N===void 0?void 0:N.readyState)===r.ReadyState.OPEN?((0,d.assertIsWebSocket)(B.current,ie.current.skipAssert),B.current.send(se)):L&&ne.current.push(se)},[]),be=(0,s.useCallback)(function(se,L){L===void 0&&(L=!0),X(JSON.stringify(se),L)},[X]),we=(0,s.useCallback)(function(){return ie.current.share!==!0||r.isEventSourceSupported&&B.current instanceof EventSource?B.current:(ee.current===null&&B.current&&((0,d.assertIsWebSocket)(B.current,ie.current.skipAssert),ee.current=(0,u.default)(B.current,W)),ee.current)},[]);return(0,s.useEffect)(function(){if(f!==null&&x===!0){var se,L=!1,N=!0,ge=function(){return e(void 0,void 0,void 0,function(){var ve,Se,oe;return n(this,function(Q){switch(Q.label){case 0:return ve=I,[4,(0,l.getUrl)(f,ie)];case 1:return ve.current=Q.sent(),I.current===null?(console.error("Failed to get a valid URL. WebSocket connection aborted."),I.current="ABORTED",(0,o.flushSync)(function(){return D(function(xe){return t(t({},xe),{ABORTED:r.ReadyState.CLOSED})})}),[2]):(Se=function(xe){L||(0,o.flushSync)(function(){return g(xe)})},oe=function(xe){L||(0,o.flushSync)(function(){return D(function(Me){var je;return t(t({},Me),I.current&&(je={},je[I.current]=xe,je))})})},N&&(se=(0,c.createOrJoinSocket)(B,I.current,oe,ie,Se,W,V,Z,X)),[2])}})})};return W.current=function(){L||(ee.current&&(ee.current=null),se?.(),ge())},ge(),function(){L=!0,N=!1,ee.current&&(ee.current=null),se?.(),g(null)}}else(f===null||x===!1)&&(V.current=0,D(function(ve){var Se;return t(t({},ve),I.current&&(Se={},Se[I.current]=r.ReadyState.CLOSED,Se))}))},[f,x,te,X]),(0,s.useEffect)(function(){K===r.ReadyState.OPEN&&ne.current.splice(0).forEach(function(se){X(se)})},[K]),{sendMessage:X,sendJsonMessage:be,lastMessage:m,lastJsonMessage:j,readyState:K,getWebSocket:we}};return Je.useWebSocket=h,Je}var Qt={},Vr;function Jx(){if(Vr)return Qt;Vr=1;var t=Qt&&Qt.__assign||function(){return t=Object.assign||function(c){for(var l,u=1,d=arguments.length;u<d;u++){l=arguments[u];for(var h in l)Object.prototype.hasOwnProperty.call(l,h)&&(c[h]=l[h])}return c},t.apply(this,arguments)};Object.defineProperty(Qt,"__esModule",{value:!0}),Qt.useSocketIO=void 0;var e=Ii(),n=xo(),i=vt(),s={type:"empty",payload:null},o=function(c){if(!c||!c.data)return s;var l=c.data.match(/\[.*]/);if(!l)return s;var u=JSON.parse(l);return!Array.isArray(u)||!u[1]?s:{type:u[0],payload:u[1]}},r=function(c,l,u){l===void 0&&(l=i.DEFAULT_OPTIONS),u===void 0&&(u=!0);var d=(0,e.useMemo)(function(){return t(t({},l),{fromSocketIO:!0})},[]),h=(0,n.useWebSocket)(c,d,u),f=h.sendMessage,p=h.sendJsonMessage,x=h.lastMessage,y=h.readyState,m=h.getWebSocket,g=(0,e.useMemo)(function(){return o(x)},[x]);return{sendMessage:f,sendJsonMessage:p,lastMessage:g,lastJsonMessage:g,readyState:y,getWebSocket:m}};return Qt.useSocketIO=r,Qt}var _t={},Gr;function Kx(){if(Gr)return _t;Gr=1;var t=_t&&_t.__assign||function(){return t=Object.assign||function(r){for(var c,l=1,u=arguments.length;l<u;l++){c=arguments[l];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(r[d]=c[d])}return r},t.apply(this,arguments)},e=_t&&_t.__rest||function(r,c){var l={};for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&c.indexOf(u)<0&&(l[u]=r[u]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,u=Object.getOwnPropertySymbols(r);d<u.length;d++)c.indexOf(u[d])<0&&Object.prototype.propertyIsEnumerable.call(r,u[d])&&(l[u[d]]=r[u[d]]);return l};Object.defineProperty(_t,"__esModule",{value:!0}),_t.useEventSource=void 0;var n=Ii(),i=xo(),s=vt(),o=function(r,c,l){c===void 0&&(c=s.DEFAULT_EVENT_SOURCE_OPTIONS);var u=c.withCredentials,d=c.events,h=e(c,["withCredentials","events"]);l===void 0&&(l=!0);var f=t(t({},h),{eventSourceOptions:{withCredentials:u}}),p=(0,n.useRef)(s.EMPTY_EVENT_HANDLERS);d&&(p.current=d);var x=(0,i.useWebSocket)(r,f,l),y=x.lastMessage,m=x.readyState,g=x.getWebSocket;return(0,n.useEffect)(function(){y?.type&&Object.entries(p.current).forEach(function(v){var S=v[0],D=v[1];S===y.type&&D(y)})},[y]),{lastEvent:y,readyState:m,getEventSource:g}};return _t.useEventSource=o,_t}var Ur;function Xx(){return Ur||(Ur=1,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.resetGlobalState=t.useEventSource=t.ReadyState=t.useSocketIO=t.default=void 0;var e=xo();Object.defineProperty(t,"default",{enumerable:!0,get:function(){return e.useWebSocket}});var n=Jx();Object.defineProperty(t,"useSocketIO",{enumerable:!0,get:function(){return n.useSocketIO}});var i=vt();Object.defineProperty(t,"ReadyState",{enumerable:!0,get:function(){return i.ReadyState}});var s=Kx();Object.defineProperty(t,"useEventSource",{enumerable:!0,get:function(){return s.useEventSource}});var o=po();Object.defineProperty(t,"resetGlobalState",{enumerable:!0,get:function(){return o.resetGlobalState}})})(rs)),rs}var Zx=Xx();const kc=oa(Zx),em="/assets/discordLogo-D8wyZE9p.png";function tm({sendMessage:t,messages:e,roomId:n}){const i=Y(d=>d.user),[s,o]=w.useState(""),{show:r}=Yn({id:"chat-message-menu"}),c=w.useRef(null);function l(d){d.preventDefault(),s.trim().length&&(t(n?"/roomChatMessage:"+s+":"+n:"/chatMessage:"+s),o(""))}function u(d,h){r({event:d,props:h})}return w.useEffect(()=>{c.current&&(c.current.scrollTop=c.current.scrollHeight)},[e]),a.jsxs(nm,{children:[!!n&&a.jsx(lm,{children:"PRIVATE ROOM CHAT"}),a.jsx(am,{ref:c,children:e.map(d=>d.author==="【SERVER】"?a.jsx(Wr,{"data-message-id":d.id,onContextMenu:h=>u(h,d),children:a.jsxs(sm,{children:[a.jsx("span",{children:"Server "}),a.jsx("span",{children:" "}),d.message==="Join our Discord!"?a.jsxs(a.Fragment,{children:[a.jsx("a",{href:"https://discord.gg/sBdByGAh2y",target:"_blank",rel:"noopener noreferrer",children:d.message}),a.jsx("img",{alt:"logo",src:em,height:14,style:{transform:"translate(3px, 2px)"}})]}):d.message]})},d.id):a.jsx(Wr,{"data-message-id":d.id,onContextMenu:h=>u(h,d),children:a.jsxs(im,{isMe:i===d.author,children:[a.jsx("span",{children:d.author+" "}),a.jsx("span",{children:" "}),a.jsx("span",{className:"text",children:d.message})]})},d.id))}),a.jsxs(rm,{onSubmit:l,children:[a.jsx(om,{value:s,placeholder:"...",onChange:d=>o(d.target.value)}),a.jsx(cm,{className:"button",children:"SEND"})]})]})}const nm=k.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    background: rgba(12, 21, 16, 0.25);
    border: 1px solid rgba(124, 124, 118, 0.4);
    border-radius: 3px;
    box-shadow: inset 5px 5px 30px 5px rgba(255, 255, 255, 0.05);
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5));
    max-width: 40%;
    flex: 1;
    min-width: 400px;
    max-height: 100%;

    @media (max-width: 499px) {
        order: -1;
        margin-top: 1px;
        min-height: 350px;
        max-height: 350px;
        min-width: unset;
        max-width: unset;
        width: 100%;
    }

    @media (max-height: 499px) {
        min-height: 350px;
        max-height: 350px;
        max-width: unset;
        width: 100%;
    }
`,im=k.span`
    font-family: "League Spartan", sans-serif;
    letter-spacing: 1px;
    font-weight: 300;
    font-size: 18px;
    text-align: left;
    color: papayawhip;
    word-break: break-all;
    span:first-of-type {
        border: 1px solid transparent;
        border-image: ${({isMe:t})=>t?"linear-gradient(to bottom right, transparent 0%, transparent 50%, #d5661f 100%)":"linear-gradient(to bottom right, transparent 0%, transparent 50%, #e1b70f 100%)"};
        border-image-slice: 1;
        color: ${({isMe:t})=>t?"#d5661f":"#e1b70f"};
        border-bottom-right-radius: 4px;
    }
`,sm=k.span`
    font-family: Cousine, sans-serif;
    text-align: left;
    color: papayawhip;
    word-break: break-all;

    span:first-of-type {
        border: 1px solid transparent;
        border-image: linear-gradient(to bottom right, transparent 0%, transparent 50%, #31da75 100%);
        border-image-slice: 1;
        color: #31da75;
        border-bottom-right-radius: 4px;
    }
`,om=k.input`
    width: 90%;
    padding-left: 10px;
    overflow-y: clip;
    height: 30px;
    font-family: "Cousine", monospace;
    border: none;
    font-size: 1.05em;
    background: papayawhip;
    color: #1a1a1a;

    border-radius: 6px;

    :focus {
        outline: none;
        filter: drop-shadow(0 0 2px white);
        background: ghostwhite;
        border-radius: 2px;
    }
`,rm=k.form`
    width: calc(100% - 12px);
    margin-top: 12px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 12px;
    padding: 0 6px 6px 6px;

    @media (max-width: 499px) {
        width: calc(100vw - 48px);
    }
`,am=k.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: calc(100% - 12px);
    overflow-y: scroll;
    padding: 8px 6px 0 6px;
    font-size: 16px;
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(
            to bottom right,
            rgba(63, 109, 207, 0.75) 0%,
            rgba(48, 95, 217, 0.75) 50%,
            rgba(84, 126, 215, 0.75) 100%
        );
        border-radius: 5px;
        box-shadow:
            inset 0 1px 2px rgba(255, 255, 255, 0.6),
            inset 0 -1px 3px rgba(0, 0, 0, 0.9);
    }
`,cm=k.button`
    height: 40px;
    padding: 0.5rem 1rem;
    font-family: "Frutiger", sans-serif;
    letter-spacing: 1px;

    border-radius: 0;
    outline: 1px solid #242424;
    border: 2px solid transparent;

    border-image: linear-gradient(to bottom right, rgba(255, 255, 255, 0.7) 0%, rgba(157, 157, 157, 0.7) 100%) 1;

    background: var(--blue-button-bg);
    color: ghostwhite;

    text-shadow: 0 -2px 1px rgba(0, 0, 0, 0.25);

    box-shadow:
        inset 0 3px 10px rgba(255, 255, 255, 0.2),
        inset 0 -3px 10px rgba(0, 0, 0, 0.3);

    &:hover {
        color: ghostwhite;
        background: var(--blue-button-bg-hover);
    }

    &:active {
        background: var(--blue-button-bg-active);
        box-shadow:
            inset -1px -1px 1px rgba(255, 255, 255, 0.6),
            inset 1px 1px 1px rgba(0, 0, 0, 0.8);
    }
`,lm=k.span`
    font-family: "League Spartan", sans-serif;
    color: var(--lobby-accent);
    width: 100%;
    padding-top: 12px;
    font-size: 32px;
    line-height: 1;
    font-weight: 300;
    border-bottom: 1px solid transparent;
    border-image: linear-gradient(
        to right,
        transparent 0%,
        transparent 20%,
        var(--lobby-accent) 50%,
        transparent 80%,
        transparent 100%
    );
    border-image-slice: 1;
    align-self: flex-start;
    margin-bottom: auto;
`,Wr=k.div`
    display: flex;
    width: 100%;
    position: relative;
    user-select: text;
    &:hover {
        background: rgba(218, 51, 187, 0.1);
        border-radius: 4px;
    }
`,dm="/assets/crown-Bfs216yl.webp",um="5.7.3",hm=60,fm=0,pm=210,xm=490,mm=490,gm="gif_count_1",ym=0,bm=[],vm=JSON.parse('[{"ddd":0,"ind":1,"ty":4,"nm":"Num_3 Outlines","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":5,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":59,"s":[100]},{"t":64,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[245.00000000000003,245.00000000000003,0],"ix":2},"a":{"a":0,"k":[245,245,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.683,0.683,0.833],"y":[0.992,0.992,-2.977]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.183,0.183,0.167],"y":[0.46,0.46,42.955]},"t":5,"s":[108,108,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":59,"s":[120,120,100]},{"t":64,"s":[0,0,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-3.76,0.718],[-1.47,0.615],[-2.461,2.256],[-1.162,1.982],[-0.923,3.145],[-0.307,2.392],[-0.136,4.716],[0.513,3.008],[0.684,1.949],[1.094,1.607],[2.325,2.597],[0,0],[-0.718,3.794],[-0.137,5.059],[0.342,3.486],[1.606,4.204],[2.906,2.187],[3.281,0.923],[2.051,0],[0,0],[2.701,-1.299],[2.085,-1.504],[1.88,-3.589],[0.274,-6.357],[0,-1.713],[-7.673,0],[0,0],[-0.154,4.526],[-0.131,0.237],[-1.401,1.23],[-3.76,0],[0,0],[-1.436,-0.752],[-0.888,-1.914],[0.034,-3.794],[0.444,-1.333],[0.889,-0.752],[2.016,-0.513],[1.435,0],[0,0],[0,-4.639],[0,0],[-4.639,0],[0,0],[-1.162,-1.333],[-0.479,-2.735],[0.376,-3.759],[1.983,-1.435],[3.487,0],[0,0],[0.957,0.273],[0.821,0.889],[0.069,2.324],[4.456,0],[0,0],[0,-7.732],[-0.003,-0.119],[-0.027,-0.604],[-2.016,-4.443],[-2.666,-2.05],[-3.247,-0.889],[-3.213,-0.068]],"o":[[0,0],[1.093,0],[3.76,-0.718],[1.469,-0.615],[2.461,-2.256],[1.162,-1.983],[0.923,-3.144],[0.308,-2.393],[0.069,-7.725],[-0.512,-3.008],[-0.683,-1.948],[-1.093,-1.606],[0,0],[1.23,-1.367],[0.717,-3.794],[0.068,-4.306],[-0.342,-3.486],[-1.607,-4.204],[-2.905,-2.188],[-3.281,-0.923],[0,0],[-5.537,0],[-2.7,1.299],[-2.085,1.504],[-1.879,3.588],[-0.033,0.646],[0,7.672],[0,0],[4.529,0],[0.093,-2.761],[0.342,-0.615],[1.401,-1.231],[0,0],[2.461,0],[1.435,0.752],[0.684,1.572],[-0.034,3.794],[-0.444,1.333],[-0.889,0.752],[-2.017,0.513],[0,0],[-4.639,0],[0,0],[0,4.639],[0,0],[1.914,0],[1.162,1.333],[0.547,3.554],[-0.376,3.76],[-1.982,1.436],[0,0],[-2.871,0],[-0.957,-0.274],[-0.82,-0.888],[-0.131,-4.455],[0,0],[-7.732,0],[0,0.118],[0.023,0.934],[0.171,3.862],[2.017,4.443],[2.666,2.051],[3.247,0.888],[0,0]],"v":[[-10.273,70.752],[16.387,70.752],[23.667,69.675],[31.512,67.676],[37.406,63.369],[42.841,57.012],[45.97,49.321],[47.815,41.016],[48.48,30.352],[47.815,14.253],[46.02,6.818],[43.354,1.486],[38.227,-4.819],[43.047,-11.074],[45.97,-18.816],[47.25,-32.095],[46.841,-43.784],[43.919,-55.32],[37.151,-64.907],[27.871,-69.573],[19.872,-70.957],[-19.707,-70.957],[-32.063,-69.009],[-39.24,-64.805],[-45.188,-57.165],[-48.418,-42.246],[-48.467,-38.707],[-34.575,-24.814],[-29.055,-24.814],[-20.659,-32.93],[-20.322,-37.427],[-17.707,-40.195],[-9.965,-42.041],[5.825,-42.041],[11.67,-40.913],[15.156,-36.914],[16.13,-28.865],[15.413,-21.174],[13.413,-18.047],[9.056,-16.15],[3.877,-15.381],[-19.92,-15.381],[-28.32,-6.981],[-28.32,3.802],[-19.92,12.202],[9.517,12.202],[14.13,14.201],[16.591,20.303],[16.849,31.274],[13.31,39.067],[5.107,41.221],[-9.965,41.221],[-15.708,40.811],[-18.374,39.067],[-19.707,34.248],[-27.943,26.25],[-34.549,26.25],[-48.549,40.25],[-48.544,40.604],[-48.469,42.912],[-45.188,55.371],[-38.164,65.112],[-29.294,69.522],[-19.604,70.957]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.46,0.604,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[244.03,244.948],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":65,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Num_2 Outlines","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":123,"s":[100]},{"t":128,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[245.00000000000003,245.00000000000003,0],"ix":2},"a":{"a":0,"k":[245,245,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.683,0.683,0.833],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":64,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.183,0.183,0.167],"y":[0,0,0]},"t":69,"s":[108,108,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":123,"s":[120,120,100]},{"t":128,"s":[0,0,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,7.725],[0,0],[4.639,0],[0,0],[0.429,0.031],[0.511,0.272],[0.273,0.41],[-0.069,1.365],[0,0],[0,0],[-0.819,1.331],[-1.297,0.683],[-3.208,0.409],[0,0],[-1.228,0.273],[-2.56,1.16],[-1.432,1.74],[-1.093,2.081],[-0.682,2.013],[-0.444,3.174],[-0.068,7.44],[0,0],[0.098,1.262],[0.113,1.252],[0,0],[0.121,1.26],[0.41,1.262],[1.091,2.321],[1.194,1.536],[1.57,1.365],[2.048,0.853],[3.242,0.751],[1.98,0],[0,0],[2.867,-0.546],[2.149,-0.75],[2.185,-1.57],[1.979,-3.652],[0.341,-4.47],[0.098,-6.638],[-7.731,-0.114],[-0.069,0],[0,0],[-0.181,4.505],[-0.088,1.3],[-0.819,0.921],[-1.604,0.819],[-2.389,0],[0,0],[-1.161,-0.17],[-1.366,-1.365],[0.409,-6.758],[0,0],[0.921,-1.365],[1.195,-0.375],[4.505,-0.683],[0,0],[4.573,-0.511],[3.139,-0.785],[2.115,-1.024],[1.809,-1.502],[1.604,-2.56],[0.785,-3.106],[0.443,-2.32],[0,-6.689],[0,0],[-7.732,0]],"o":[[0,0],[7.726,-0.009],[0,0],[0,-4.639],[0,0],[-2.074,-0.003],[-0.478,-0.034],[-0.513,-0.274],[-0.546,-0.615],[0,0],[0,0],[0.204,-1.638],[0.819,-1.331],[1.297,-0.682],[0,0],[9.487,-1.091],[1.229,-0.273],[2.559,-1.161],[1.434,-1.741],[1.092,-2.082],[0.683,-2.014],[0.444,-3.174],[0,0],[-0.006,-4.232],[-0.055,-0.712],[0,0],[-0.089,-0.971],[-0.307,-3.208],[-0.41,-1.263],[-1.092,-2.321],[-1.194,-1.536],[-1.57,-1.365],[-2.048,-0.853],[-3.242,-0.75],[0,0],[-2.593,0],[-2.867,0.546],[-2.15,0.751],[-2.184,1.57],[-1.979,3.652],[-0.144,1.876],[-0.115,7.732],[0.07,0.001],[0,0],[4.509,0],[0.06,-1.515],[0.342,-5.05],[0.819,-0.922],[1.604,-0.819],[0,0],[3.277,0],[1.161,0.171],[1.569,1.707],[0,0],[-0.204,2.798],[-0.922,1.365],[-1.194,0.376],[0,0],[-1.16,0.273],[-4.573,0.513],[-3.14,0.785],[-2.117,1.024],[-1.808,1.501],[-1.604,2.559],[-0.785,3.106],[-0.444,2.322],[0,0],[0,7.732],[0,0]],"v":[[-33.149,71.098],[30.861,71.026],[44.847,57.027],[44.847,50.845],[36.446,42.447],[-8.499,42.445],[-12.253,42.395],[-13.736,41.934],[-14.914,40.91],[-15.63,37.941],[-15.529,35.79],[-15.324,29.135],[-13.788,24.682],[-10.615,21.661],[-3.857,20.025],[10.579,17.874],[26.653,15.827],[32.335,13.676],[38.325,9.326],[42.114,3.591],[44.774,-2.552],[46.464,-10.333],[47.232,-26.254],[47.232,-26.973],[47.079,-35.212],[46.826,-38.16],[46.778,-38.673],[46.464,-42.021],[45.39,-48.727],[43.137,-54.102],[39.708,-59.887],[35.561,-64.238],[30.135,-67.565],[22.2,-69.971],[14.368,-71.098],[-14.813,-71.098],[-23.003,-70.279],[-30.527,-68.333],[-37.029,-64.853],[-43.274,-57.02],[-46.755,-44.836],[-47.117,-32.065],[-33.326,-17.859],[-33.119,-17.858],[-25.885,-17.858],[-17.492,-25.922],[-17.27,-30.145],[-15.529,-39.103],[-11.895,-41.714],[-5.904,-42.943],[2.696,-42.943],[9.351,-42.686],[13.14,-40.383],[14.88,-27.686],[14.571,-19.905],[12.883,-13.66],[9.709,-11.049],[1.16,-9.463],[-2.014,-8.849],[-10.615,-7.672],[-22.184,-5.726],[-30.066,-3.013],[-35.954,0.776],[-41.074,6.868],[-44.656,15.366],[-46.499,23.504],[-47.165,37.02],[-47.165,57.098],[-33.165,71.098]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.46,0.604,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[244.668,244.697],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":64,"op":129,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Num_1 Outlines","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":186,"s":[100]},{"t":191,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[245.00000000000003,245.00000000000003,0],"ix":2},"a":{"a":0,"k":[245,245,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.683,0.683,0.833],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":127,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.183,0.183,0.167],"y":[0,0,0]},"t":132,"s":[108,108,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":186,"s":[120,120,100]},{"t":191,"s":[0,0,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-4.633,0],[0,0],[0,4.639],[0.006,0.002],[0,0],[7.727,0.01],[0,0],[0,-4.639],[0,0],[-4.639,0],[0,0],[0,0]],"o":[[0,0],[4.64,0.006],[0,-0.002],[0,0],[-0.016,-7.728],[0,0],[-4.639,0],[0,0],[0,4.64],[0,0],[0,0],[0.008,4.633]],"v":[[-0.074,71.193],[15.236,71.193],[23.635,62.799],[23.63,62.792],[23.544,-57.199],[9.534,-71.199],[-15.235,-71.199],[-23.635,-62.798],[-23.635,-50.785],[-15.235,-42.385],[-8.664,-42.385],[-8.474,62.808]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.46,0.604,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[242.035,244.799],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":127,"op":192,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Circle_White Outlines","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.32],"y":[0.94]},"t":183,"s":[100]},{"t":194,"s":[0]}],"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.32],"y":[0.99]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.956]},"o":{"x":[0.32],"y":[0.94]},"t":59,"s":[11]},{"i":{"x":[0.833],"y":[0.868]},"o":{"x":[0.32],"y":[0.98]},"t":73,"s":[-91]},{"i":{"x":[0.247],"y":[0.948]},"o":{"x":[0.32],"y":[0.94]},"t":122,"s":[-105]},{"i":{"x":[0.614],"y":[0.823]},"o":{"x":[0.32],"y":[0.85]},"t":136,"s":[-14.432]},{"i":{"x":[0.596],"y":[0.959]},"o":{"x":[0.32],"y":[0.94]},"t":183,"s":[0]},{"t":196,"s":[-96.432]}],"ix":10},"p":{"a":0,"k":[245.00000000000003,245.00000000000003,0],"ix":2},"a":{"a":0,"k":[245,245,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.32,0.32,0.32],"y":[0.94,0.94,0]},"t":183,"s":[100,100,100]},{"t":194,"s":[106,106,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-7.377,0.138],[0,0],[6.46,-0.889],[0,0]],"o":[[0,0],[-6.674,0.125],[0,0],[7.141,-0.983]],"v":[[7.291,-183.717],[7.624,-166.22],[-12.089,-164.688],[-14.498,-182.024]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[-7.241,1.281],[0,0],[6.262,-1.902],[0,0]],"o":[[0,0],[-6.551,1.158],[0,0],[6.921,-2.102]],"v":[[-21.411,-180.938],[-18.345,-163.705],[-37.577,-159.104],[-42.668,-175.852]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[5.903,-2.872],[0,0],[-6.442,2.288]],"o":[[0,0],[-6.268,2.169],[0,0],[6.089,-2.962],[0,0]],"v":[[-49.326,-173.691],[-43.6,-157.149],[-61.868,-149.574],[-69.516,-165.319],[-50.709,-173.206]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[-6.447,3.448],[0,0],[5.392,-3.769],[0,0]],"o":[[0,0],[-5.833,3.12],[0,0],[5.959,-4.166]],"v":[[-75.75,-162.136],[-67.508,-146.694],[-84.358,-136.347],[-94.373,-150.7]],"c":true},"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[-5.817,4.404],[0,0],[4.747,-4.57],[0,0]],"o":[[0,0],[-5.262,3.985],[0,0],[5.247,-5.052]],"v":[[-100.033,-146.58],[-89.479,-132.62],[-104.506,-119.774],[-116.643,-132.381]],"c":true},"ix":2},"nm":"Path 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":0,"k":{"i":[[-5.052,5.247],[0,0],[3.985,-5.262],[0,0]],"o":[[0,0],[-4.57,4.747],[0,0],[4.404,-5.817]],"v":[[-121.591,-127.433],[-108.984,-115.296],[-121.83,-100.269],[-135.79,-110.823]],"c":true},"ix":2},"nm":"Path 6","mn":"ADBE Vector Shape - Group","hd":false},{"ind":6,"ty":"sh","ix":7,"ks":{"a":0,"k":{"i":[[-4.166,5.959],[0,0],[3.12,-5.834],[0,0]],"o":[[0,0],[-3.769,5.391],[0,0],[3.449,-6.447]],"v":[[-139.91,-105.163],[-125.557,-95.148],[-135.904,-78.298],[-151.346,-86.54]],"c":true},"ix":2},"nm":"Path 7","mn":"ADBE Vector Shape - Group","hd":false},{"ind":7,"ty":"sh","ix":8,"ks":{"a":0,"k":{"i":[[-3.175,6.524],[0,0],[2.169,-6.268],[0,0]],"o":[[0,0],[-2.872,5.902],[0,0],[2.397,-6.928]],"v":[[-154.528,-80.306],[-138.784,-72.658],[-146.358,-54.39],[-162.9,-60.116]],"c":true},"ix":2},"nm":"Path 8","mn":"ADBE Vector Shape - Group","hd":false},{"ind":8,"ty":"sh","ix":9,"ks":{"a":0,"k":{"i":[[-2.102,6.921],[0,0],[1.158,-6.551],[0,0]],"o":[[0,0],[-1.901,6.262],[0,0],[1.28,-7.241]],"v":[[-165.062,-53.458],[-148.314,-48.367],[-152.915,-29.135],[-170.147,-32.202]],"c":true},"ix":2},"nm":"Path 9","mn":"ADBE Vector Shape - Group","hd":false},{"ind":9,"ty":"sh","ix":10,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0.125,-6.675],[0,0],[-0.866,6.68]],"o":[[0,0],[-0.889,6.46],[0,0],[0.129,-6.886],[0,0]],"v":[[-171.234,-25.288],[-153.898,-22.879],[-155.43,-3.166],[-172.927,-3.499],[-171.425,-23.858]],"c":true},"ix":2},"nm":"Path 10","mn":"ADBE Vector Shape - Group","hd":false},{"ind":10,"ty":"sh","ix":11,"ks":{"a":0,"k":{"i":[[-3.12,5.833],[0,0],[4.166,-5.959],[0,0]],"o":[[0,0],[-3.448,6.447],[0,0],[3.77,-5.392]],"v":[[157.485,78.299],[172.926,86.541],[161.491,105.164],[147.138,95.149]],"c":true},"ix":2},"nm":"Path 11","mn":"ADBE Vector Shape - Group","hd":false},{"ind":11,"ty":"sh","ix":12,"ks":{"a":0,"k":{"i":[[-3.986,5.263],[0,0],[5.052,-5.247],[0,0]],"o":[[0,0],[-4.405,5.816],[0,0],[4.57,-4.747]],"v":[[143.412,100.269],[157.372,110.824],[143.172,127.434],[130.565,115.297]],"c":true},"ix":2},"nm":"Path 12","mn":"ADBE Vector Shape - Group","hd":false},{"ind":12,"ty":"sh","ix":13,"ks":{"a":0,"k":{"i":[[-4.748,4.57],[0,0],[5.816,-4.404],[0,0]],"o":[[0,0],[-5.247,5.052],[0,0],[5.263,-3.985]],"v":[[126.087,119.775],[138.224,132.382],[121.614,146.581],[111.059,132.621]],"c":true},"ix":2},"nm":"Path 13","mn":"ADBE Vector Shape - Group","hd":false},{"ind":13,"ty":"sh","ix":14,"ks":{"a":0,"k":{"i":[[-5.392,3.769],[0,0],[6.446,-3.448],[0,0]],"o":[[0,0],[-5.959,4.166],[0,0],[5.833,-3.12]],"v":[[105.939,136.348],[115.955,150.7],[97.332,162.136],[89.089,146.695]],"c":true},"ix":2},"nm":"Path 14","mn":"ADBE Vector Shape - Group","hd":false},{"ind":14,"ty":"sh","ix":15,"ks":{"a":0,"k":{"i":[[-5.902,2.872],[0,0],[6.926,-2.398],[0,0]],"o":[[0,0],[-6.523,3.174],[0,0],[6.268,-2.169]],"v":[[83.448,149.575],[91.096,165.32],[70.907,173.692],[65.181,157.149]],"c":true},"ix":2},"nm":"Path 15","mn":"ADBE Vector Shape - Group","hd":false},{"ind":15,"ty":"sh","ix":16,"ks":{"a":0,"k":{"i":[[-6.262,1.901],[0,0],[7.24,-1.28],[0,0]],"o":[[0,0],[-6.921,2.101],[0,0],[6.552,-1.157]],"v":[[59.158,159.105],[64.249,175.853],[42.993,180.938],[39.925,163.705]],"c":true},"ix":2},"nm":"Path 16","mn":"ADBE Vector Shape - Group","hd":false},{"ind":16,"ty":"sh","ix":17,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[7.376,-0.139],[0,0],[-6.014,0.777]],"o":[[0,0],[-7.14,0.982],[0,0],[6.197,-0.116],[0,0]],"v":[[33.669,164.689],[36.078,182.025],[14.291,183.718],[13.958,166.221],[32.284,164.873]],"c":true},"ix":2},"nm":"Path 17","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[234.209,245],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":18,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-24.617,-0.447]],"o":[[21.128,9.608],[0,0]],"v":[[-34.561,-7.793],[34.561,7.793]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":17.5,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[207.198,412.178],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":60,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[27.608,0.533]],"o":[[-23.211,-12.256],[0,0]],"v":[[38.524,9.942],[-38.524,-9.942]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":28,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[287.755,74.821],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":60,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":195,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Circle_Yellow Outlines 4","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.32],"y":[0.94]},"t":183,"s":[100]},{"t":194,"s":[0]}],"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.469],"y":[0.935]},"o":{"x":[0.346],"y":[-0.035]},"t":0,"s":[-206.557]},{"i":{"x":[0.614],"y":[0.868]},"o":{"x":[0.159],"y":[0.173]},"t":23,"s":[-122.432]},{"i":{"x":[0.596],"y":[0.913]},"o":{"x":[0.407],"y":[-0.017]},"t":58,"s":[-108]},{"i":{"x":[0.792],"y":[1]},"o":{"x":[0.081],"y":[0.152]},"t":86,"s":[-204.432]},{"i":{"x":[0.833],"y":[0.937]},"o":{"x":[0.167],"y":[0]},"t":165,"s":[-236]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[1.371]},"t":195,"s":[-108]},{"i":{"x":[0.833],"y":[0.928]},"o":{"x":[0.167],"y":[0.167]},"t":251,"s":[-97]},{"i":{"x":[0.562],"y":[0.761]},"o":{"x":[0.198],"y":[0.441]},"t":280,"s":[-199]},{"t":291,"s":[-206.557]}],"ix":10},"p":{"a":0,"k":[245.00000000000003,245.00000000000003,0],"ix":2},"a":{"a":0,"k":[245,245,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.32,0.32,0.32],"y":[0.94,0.94,0]},"t":183,"s":[100,100,100]},{"t":194,"s":[106,106,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-27.715,28.938]],"o":[[43.233,0],[0,0]],"v":[[-54.987,23.479],[54.986,-23.479]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5.25,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[299.987,373.771],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":195,"st":-125,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Circle_Yellow Outlines 3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.32],"y":[0.94]},"t":183,"s":[100]},{"t":194,"s":[0]}],"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.812],"y":[1]},"o":{"x":[0.328],"y":[-0.048]},"t":0,"s":[-4.547]},{"i":{"x":[0.833],"y":[0.936]},"o":{"x":[0.167],"y":[0]},"t":70,"s":[-128]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[1.356]},"t":101,"s":[0]},{"i":{"x":[0.833],"y":[0.929]},"o":{"x":[0.167],"y":[0.167]},"t":157,"s":[11]},{"i":{"x":[0.833],"y":[0.874]},"o":{"x":[0.167],"y":[0.865]},"t":185,"s":[-91]},{"i":{"x":[0.247],"y":[0.892]},"o":{"x":[0.158],"y":[-0.011]},"t":232,"s":[-105]},{"i":{"x":[0.567],"y":[0.657]},"o":{"x":[0.178],"y":[0.241]},"t":261,"s":[-14.432]},{"t":291,"s":[-4.547]}],"ix":10},"p":{"a":0,"k":[245.00000000000003,245.00000000000003,0],"ix":2},"a":{"a":0,"k":[245,245,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.32,0.32,0.32],"y":[0.94,0.94,0]},"t":183,"s":[100,100,100]},{"t":194,"s":[106,106,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[82.636,0]],"o":[[0,-82.636],[0,0]],"v":[[74.813,74.813],[-74.813,-74.813]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10.5,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[319.813,170.188],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-0.401,6.132]],"o":[[1.118,-5.908],[0,0]],"v":[[-1.145,9.035],[1.145,-9.035]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10.5,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[393.156,263.959],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":195,"st":-222,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Circle_Yellow Outlines 2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.32],"y":[0.94]},"t":183,"s":[100]},{"t":194,"s":[0]}],"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.247],"y":[0.784]},"o":{"x":[0.158],"y":[-0.023]},"t":0,"s":[-105]},{"i":{"x":[0.614],"y":[0.804]},"o":{"x":[0.159],"y":[0.257]},"t":58,"s":[-14.432]},{"i":{"x":[0.596],"y":[0.916]},"o":{"x":[0.407],"y":[-0.016]},"t":110,"s":[0]},{"i":{"x":[0.792],"y":[1]},"o":{"x":[0.081],"y":[0.152]},"t":137,"s":[-96.432]},{"i":{"x":[0.833],"y":[0.936]},"o":{"x":[0.167],"y":[0]},"t":216,"s":[-128]},{"i":{"x":[0.839],"y":[0.985]},"o":{"x":[0.157],"y":[-0.105]},"t":247,"s":[0]},{"t":291,"s":[-105]}],"ix":10},"p":{"a":0,"k":[245.00000000000003,245.00000000000003,0],"ix":2},"a":{"a":0,"k":[245,245,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.32,0.32,0.32],"y":[0.94,0.94,0]},"t":183,"s":[100,100,100]},{"t":194,"s":[106,106,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,-41.876],[-63.102,-18.585]],"o":[[-27.36,27.526],[0,69.12],[0,0]],"v":[[-10.314,-126.699],[-54.581,-19.369],[54.581,126.698]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5.25,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[147.331,264.368],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":195,"st":-105,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Circle_Yellow Outlines","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.32],"y":[0.94]},"t":183,"s":[100]},{"t":194,"s":[0]}],"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.611],"y":[0.963]},"o":{"x":[0.264],"y":[-0.012]},"t":0,"s":[-10.592]},{"i":{"x":[0.792],"y":[1]},"o":{"x":[0.081],"y":[0.152]},"t":11,"s":[-96.432]},{"i":{"x":[0.833],"y":[0.936]},"o":{"x":[0.167],"y":[0]},"t":90,"s":[-128]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[1.356]},"t":121,"s":[0]},{"i":{"x":[0.833],"y":[0.929]},"o":{"x":[0.167],"y":[0.167]},"t":177,"s":[11]},{"i":{"x":[0.833],"y":[0.874]},"o":{"x":[0.167],"y":[0.865]},"t":205,"s":[-91]},{"i":{"x":[0.247],"y":[0.892]},"o":{"x":[0.158],"y":[-0.011]},"t":252,"s":[-105]},{"i":{"x":[0.576],"y":[0.617]},"o":{"x":[0.229],"y":[0.267]},"t":281,"s":[-14.432]},{"t":291,"s":[-10.592]}],"ix":10},"p":{"a":0,"k":[245.00000000000003,245.00000000000003,0],"ix":2},"a":{"a":0,"k":[245,245,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.32,0.32,0.32],"y":[0.94,0.94,0]},"t":183,"s":[100,100,100]},{"t":194,"s":[106,106,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,26.429],[37.636,32.098]],"o":[[10.489,-22.465],[0,-53.342],[0,0]],"v":[[14.404,103.581],[30.751,29.628],[-30.751,-103.581]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5.25,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[389.249,215.372],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":195,"st":-202,"bm":0},{"ddd":0,"ind":9,"ty":3,"nm":"Null 1","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":129,"ix":10},"p":{"a":0,"k":[242,233,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,-100,100],"ix":6}},"ao":0,"ip":127,"op":177,"st":127,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"Particule Outlines 30","parent":9,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":127,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":139,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":152,"s":[100]},{"t":167,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":127,"s":[1,1,0],"to":[26.512,6.862,0],"ti":[-47.301,-12.243,0]},{"i":{"x":0.824,"y":0.864},"o":{"x":0.19,"y":1},"t":139,"s":[168.563,44.372,0],"to":[8.65,2.239,0],"ti":[-4.848,-1.255,0]},{"t":177,"s":[189.157,49.702,0]}],"ix":2},"a":{"a":0,"k":[431.157,282.702,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[1.413,1.96],[0.082,0.752],[0,0],[0,0],[-1.428,1.949],[-0.69,0.31],[0,0],[0,0],[-2.296,-0.754],[-0.509,-0.56],[0,0],[0,0],[0.009,-2.416],[0.376,-0.657],[0,0],[0,0],[2.3,-0.738],[0.741,0.154]],"o":[[0,0],[-1.96,1.412],[-0.443,-0.614],[0,0],[0,0],[-1.949,-1.427],[0.446,-0.61],[0,0],[0,0],[0.756,-2.295],[0.718,0.238],[0,0],[0,0],[2.416,0.009],[-0.003,0.757],[0,0],[0,0],[0.738,2.301],[-0.721,0.231],[0,0]],"v":[[3.505,12.693],[-2.257,16.846],[-8.364,15.854],[-9.164,13.771],[-9.933,6.711],[-15.662,2.515],[-16.606,-3.6],[-14.872,-5.005],[-8.395,-7.917],[-6.176,-14.664],[-0.651,-17.453],[1.221,-16.236],[5.992,-10.977],[13.094,-10.949],[17.452,-6.557],[16.874,-4.401],[13.347,1.762],[15.516,8.525],[12.686,14.026],[10.456,14.143]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[431.157,282.703],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 10","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":127,"op":177,"st":127,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"Particule Outlines 29","parent":9,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":127,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":139,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":152,"s":[100]},{"t":167,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":127,"s":[1,1,0],"to":[21.416,-17.246,0],"ti":[-38.236,30.79,0]},{"i":{"x":0.824,"y":0.858},"o":{"x":0.191,"y":1},"t":139,"s":[136.364,-108.004,0],"to":[7.008,-5.643,0],"ti":[-3.925,3.161,0]},{"t":177,"s":[153.046,-121.437,0]}],"ix":2},"a":{"a":0,"k":[395.046,111.563,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.968,2.289],[-0.903,1.959],[-0.845,0.389],[-2.289,4.967],[-1.959,-0.903],[-0.39,-0.846],[-4.967,-2.289],[0.902,-1.959],[0.846,-0.389],[2.289,-4.968],[1.959,0.903],[0.389,0.845]],"o":[[-1.959,-0.903],[0.39,-0.844],[4.968,-2.289],[0.902,-1.959],[0.845,0.39],[2.289,4.967],[1.959,0.903],[-0.39,0.845],[-4.967,2.289],[-0.903,1.959],[-0.844,-0.389],[-2.289,-4.968]],"v":[[-14.79,3.275],[-16.703,-1.907],[-14.79,-3.819],[-3.547,-15.062],[1.635,-16.975],[3.547,-15.062],[14.79,-3.819],[16.703,1.363],[14.79,3.275],[3.547,14.519],[-1.635,16.431],[-3.547,14.519]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[395.045,111.834],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":127,"op":177,"st":127,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"Particule Outlines 28","parent":9,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":127,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":139,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":152,"s":[100]},{"t":167,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":127,"s":[1,1,0],"to":[-26.421,9.299,0],"ti":[47.317,-16.654,0]},{"i":{"x":0.824,"y":0.829},"o":{"x":0.194,"y":1},"t":139,"s":[-166.038,59.791,0],"to":[-8.761,3.084,0],"ti":[4.892,-1.722,0]},{"t":177,"s":[-186.875,67.125,0]}],"ix":2},"a":{"a":0,"k":[55.125,300.125,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-5.316,0],[0,-5.315],[5.316,0],[0,5.315]],"o":[[5.316,0],[0,5.315],[-5.316,0],[0,-5.315]],"v":[[0,-9.625],[9.625,0],[0,9.625],[-9.625,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[55.125,300.125],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":127,"op":177,"st":127,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"Particule Outlines 27","parent":9,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":127,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":139,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":152,"s":[100]},{"t":167,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":127,"s":[1,1,0],"to":[-23.622,-14.223,0],"ti":[42.195,25.405,0]},{"i":{"x":0.824,"y":0.853},"o":{"x":0.191,"y":1},"t":139,"s":[-148.314,-88.9,0],"to":[-7.746,-4.663,0],"ti":[4.336,2.611,0]},{"t":177,"s":[-166.75,-100,0]}],"ix":2},"a":{"a":0,"k":[75.25,133,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-4.349,0],[0,-4.349],[4.349,0],[0,4.349]],"o":[[4.349,0],[0,4.349],[-4.349,0],[0,-4.349]],"v":[[0,-7.875],[7.875,0],[0,7.875],[-7.875,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[75.25,133],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":20,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":127,"op":177,"st":127,"bm":0},{"ddd":0,"ind":14,"ty":4,"nm":"Particule Outlines 26","parent":9,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":127,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":139,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":152,"s":[100]},{"t":167,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.355},"t":127,"s":[1,1,0],"to":[-19.915,16.552,0],"ti":[35.174,-29.234,0]},{"i":{"x":0.824,"y":0.961},"o":{"x":0.182,"y":1},"t":139,"s":[-124.771,105.53,0],"to":[-6.221,5.17,0],"ti":[3.522,-2.927,0]},{"t":177,"s":[-139.625,117.875,0]}],"ix":2},"a":{"a":0,"k":[102.375,350.875,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.866,0],[0,-3.866],[3.866,0],[0,3.866]],"o":[[3.866,0],[0,3.866],[-3.866,0],[0,-3.866]],"v":[[0,-7],[7,0],[0,7],[-7,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[102.375,350.875],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":127,"op":177,"st":127,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"Particule Outlines 25","parent":9,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":127,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":139,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":152,"s":[100]},{"t":167,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.358},"t":127,"s":[1,1,0],"to":[25.302,14.42,0],"ti":[-45.596,-25.987,0]},{"i":{"x":0.824,"y":0.771},"o":{"x":0.199,"y":1},"t":139,"s":[161.039,92.213,0],"to":[8.617,4.911,0],"ti":[-4.782,-2.725,0]},{"t":177,"s":[181.5,103.875,0]}],"ix":2},"a":{"a":0,"k":[423.5,336.875,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.866,0],[0,-3.866],[3.866,0],[0,3.866]],"o":[[3.866,0],[0,3.866],[-3.866,0],[0,-3.866]],"v":[[0,-7],[7,0],[0,7],[-7,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[423.5,336.875],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":127,"op":177,"st":127,"bm":0},{"ddd":0,"ind":16,"ty":4,"nm":"Particule Outlines 24","parent":9,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":127,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":139,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":152,"s":[100]},{"t":167,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.358},"t":127,"s":[1,1,0],"to":[-19.483,21.304,0],"ti":[35.063,-38.341,0]},{"i":{"x":0.824,"y":0.784},"o":{"x":0.198,"y":1},"t":139,"s":[-122.222,135.74,0],"to":[-6.597,7.214,0],"ti":[3.666,-4.008,0]},{"t":177,"s":[-137.892,152.875,0]}],"ix":2},"a":{"a":0,"k":[104.108,385.875,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.821,1.761],[-0.695,1.507],[-0.65,0.3],[-1.761,3.82],[-1.507,-0.694],[-0.299,-0.651],[-3.82,-1.761],[0.694,-1.508],[0.651,-0.3],[1.762,-3.82],[1.507,0.694],[0.299,0.651]],"o":[[-1.507,-0.694],[0.299,-0.65],[3.821,-1.761],[0.694,-1.508],[0.65,0.3],[1.762,3.82],[1.508,0.694],[-0.3,0.65],[-3.82,1.761],[-0.694,1.508],[-0.65,-0.3],[-1.761,-3.82]],"v":[[-11.377,2.729],[-12.848,-1.258],[-11.377,-2.728],[-2.728,-11.376],[1.258,-12.849],[2.728,-11.376],[11.377,-2.728],[12.849,1.258],[11.377,2.729],[2.728,11.376],[-1.257,12.849],[-2.728,11.376]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[104.108,385.875],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":127,"op":177,"st":127,"bm":0},{"ddd":0,"ind":17,"ty":4,"nm":"Particule Outlines 23","parent":9,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":127,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":139,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":152,"s":[100]},{"t":167,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":127,"s":[1,1,0],"to":[14.926,23.58,0],"ti":[-26.716,-42.205,0]},{"i":{"x":0.824,"y":0.834},"o":{"x":0.193,"y":1},"t":139,"s":[95.364,150.072,0],"to":[4.937,7.799,0],"ti":[-2.758,-4.357,0]},{"t":177,"s":[107.108,168.625,0]}],"ix":2},"a":{"a":0,"k":[349.108,401.625,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.821,1.761],[-0.694,1.507],[-0.649,0.3],[-1.76,3.82],[-1.507,-0.694],[-0.299,-0.651],[-3.821,-1.761],[0.694,-1.508],[0.65,-0.3],[1.761,-3.82],[1.507,0.694],[0.3,0.651]],"o":[[-1.507,-0.694],[0.3,-0.65],[3.821,-1.761],[0.695,-1.508],[0.65,0.3],[1.761,3.82],[1.507,0.694],[-0.3,0.65],[-3.821,1.761],[-0.694,1.508],[-0.649,-0.3],[-1.76,-3.82]],"v":[[-11.378,2.729],[-12.849,-1.258],[-11.378,-2.728],[-2.729,-11.376],[1.257,-12.849],[2.728,-11.376],[11.377,-2.728],[12.849,1.258],[11.377,2.729],[2.728,11.376],[-1.258,12.849],[-2.729,11.376]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[349.108,401.625],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":127,"op":177,"st":127,"bm":0},{"ddd":0,"ind":18,"ty":4,"nm":"Particule Outlines 22","parent":9,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":127,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":139,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":152,"s":[100]},{"t":167,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.355},"t":127,"s":[1,1,0],"to":[-25.438,6.014,0],"ti":[45.007,-10.64,0]},{"i":{"x":0.824,"y":0.944},"o":{"x":0.183,"y":1},"t":139,"s":[-159.67,38.983,0],"to":[-8.007,1.893,0],"ti":[4.525,-1.07,0]},{"t":177,"s":[-178.777,43.5,0]}],"ix":2},"a":{"a":0,"k":[63.223,276.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[1.932,2.163],[0.192,0.888],[0,0],[0,0],[-1.459,2.506],[-0.785,0.456],[0,0],[0,0],[-2.834,-0.614],[-0.677,-0.605],[0,0],[0,0],[-0.293,-2.884],[0.366,-0.831],[0,0],[0,0],[2.653,-1.17],[0.903,0.092]],"o":[[0,0],[-2.162,1.932],[-0.605,-0.677],[0,0],[0,0],[-2.505,-1.459],[0.457,-0.784],[0,0],[0,0],[0.614,-2.834],[0.887,0.192],[0,0],[0,0],[2.885,-0.292],[0.091,0.904],[0,0],[0,0],[1.17,2.654],[-0.831,0.366],[0,0]],"v":[[5.611,13.679],[-0.241,18.908],[-7.654,18.491],[-8.87,16.104],[-10.531,8.435],[-17.312,4.485],[-19.206,-2.694],[-17.312,-4.588],[-10.531,-8.538],[-8.87,-16.207],[-2.628,-20.227],[-0.241,-19.01],[5.611,-13.782],[13.418,-14.573],[19.171,-9.879],[18.751,-7.232],[15.587,-0.051],[18.751,7.129],[16.064,14.051],[13.418,14.47]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[63.584,276.551],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":127,"op":177,"st":127,"bm":0},{"ddd":0,"ind":19,"ty":4,"nm":"Particule Outlines 21","parent":9,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":127,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":139,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":152,"s":[100]},{"t":167,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":127,"s":[1,1,0],"to":[24.933,-11.516,0],"ti":[-44.507,20.556,0]},{"i":{"x":0.824,"y":0.86},"o":{"x":0.191,"y":1},"t":139,"s":[158.594,-71.787,0],"to":[8.152,-3.765,0],"ti":[-4.567,2.109,0]},{"t":177,"s":[178,-80.75,0]}],"ix":2},"a":{"a":0,"k":[420,152.25,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-4.35,0],[0,-4.349],[4.35,0],[0,4.349]],"o":[[4.35,0],[0,4.349],[-4.35,0],[0,-4.349]],"v":[[0,-7.875],[7.875,0],[0,7.875],[-7.875,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[420,152.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":127,"op":177,"st":127,"bm":0},{"ddd":0,"ind":20,"ty":3,"nm":"Null 1","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":48,"ix":10},"p":{"a":0,"k":[242,233,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":64,"op":114,"st":64,"bm":0},{"ddd":0,"ind":21,"ty":4,"nm":"Particule Outlines 20","parent":20,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":64,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":76,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":89,"s":[100]},{"t":104,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":64,"s":[1,1,0],"to":[26.512,6.862,0],"ti":[-47.301,-12.243,0]},{"i":{"x":0.824,"y":0.864},"o":{"x":0.19,"y":1},"t":76,"s":[168.563,44.372,0],"to":[8.65,2.239,0],"ti":[-4.848,-1.255,0]},{"t":114,"s":[189.157,49.702,0]}],"ix":2},"a":{"a":0,"k":[431.157,282.702,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[1.413,1.96],[0.082,0.752],[0,0],[0,0],[-1.428,1.949],[-0.69,0.31],[0,0],[0,0],[-2.296,-0.754],[-0.509,-0.56],[0,0],[0,0],[0.009,-2.416],[0.376,-0.657],[0,0],[0,0],[2.3,-0.738],[0.741,0.154]],"o":[[0,0],[-1.96,1.412],[-0.443,-0.614],[0,0],[0,0],[-1.949,-1.427],[0.446,-0.61],[0,0],[0,0],[0.756,-2.295],[0.718,0.238],[0,0],[0,0],[2.416,0.009],[-0.003,0.757],[0,0],[0,0],[0.738,2.301],[-0.721,0.231],[0,0]],"v":[[3.505,12.693],[-2.257,16.846],[-8.364,15.854],[-9.164,13.771],[-9.933,6.711],[-15.662,2.515],[-16.606,-3.6],[-14.872,-5.005],[-8.395,-7.917],[-6.176,-14.664],[-0.651,-17.453],[1.221,-16.236],[5.992,-10.977],[13.094,-10.949],[17.452,-6.557],[16.874,-4.401],[13.347,1.762],[15.516,8.525],[12.686,14.026],[10.456,14.143]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[431.157,282.703],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 10","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":64,"op":114,"st":64,"bm":0},{"ddd":0,"ind":22,"ty":4,"nm":"Particule Outlines 19","parent":20,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":64,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":76,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":89,"s":[100]},{"t":104,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":64,"s":[1,1,0],"to":[21.416,-17.246,0],"ti":[-38.236,30.79,0]},{"i":{"x":0.824,"y":0.858},"o":{"x":0.191,"y":1},"t":76,"s":[136.364,-108.004,0],"to":[7.008,-5.643,0],"ti":[-3.925,3.161,0]},{"t":114,"s":[153.046,-121.437,0]}],"ix":2},"a":{"a":0,"k":[395.046,111.563,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.968,2.289],[-0.903,1.959],[-0.845,0.389],[-2.289,4.967],[-1.959,-0.903],[-0.39,-0.846],[-4.967,-2.289],[0.902,-1.959],[0.846,-0.389],[2.289,-4.968],[1.959,0.903],[0.389,0.845]],"o":[[-1.959,-0.903],[0.39,-0.844],[4.968,-2.289],[0.902,-1.959],[0.845,0.39],[2.289,4.967],[1.959,0.903],[-0.39,0.845],[-4.967,2.289],[-0.903,1.959],[-0.844,-0.389],[-2.289,-4.968]],"v":[[-14.79,3.275],[-16.703,-1.907],[-14.79,-3.819],[-3.547,-15.062],[1.635,-16.975],[3.547,-15.062],[14.79,-3.819],[16.703,1.363],[14.79,3.275],[3.547,14.519],[-1.635,16.431],[-3.547,14.519]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[395.045,111.834],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":64,"op":114,"st":64,"bm":0},{"ddd":0,"ind":23,"ty":4,"nm":"Particule Outlines 18","parent":20,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":64,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":76,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":89,"s":[100]},{"t":104,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":64,"s":[1,1,0],"to":[-26.421,9.299,0],"ti":[47.317,-16.654,0]},{"i":{"x":0.824,"y":0.829},"o":{"x":0.194,"y":1},"t":76,"s":[-166.038,59.791,0],"to":[-8.761,3.084,0],"ti":[4.892,-1.722,0]},{"t":114,"s":[-186.875,67.125,0]}],"ix":2},"a":{"a":0,"k":[55.125,300.125,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-5.316,0],[0,-5.315],[5.316,0],[0,5.315]],"o":[[5.316,0],[0,5.315],[-5.316,0],[0,-5.315]],"v":[[0,-9.625],[9.625,0],[0,9.625],[-9.625,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[55.125,300.125],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":64,"op":114,"st":64,"bm":0},{"ddd":0,"ind":24,"ty":4,"nm":"Particule Outlines 17","parent":20,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":64,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":76,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":89,"s":[100]},{"t":104,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":64,"s":[1,1,0],"to":[-23.622,-14.223,0],"ti":[42.195,25.405,0]},{"i":{"x":0.824,"y":0.853},"o":{"x":0.191,"y":1},"t":76,"s":[-148.314,-88.9,0],"to":[-7.746,-4.663,0],"ti":[4.336,2.611,0]},{"t":114,"s":[-166.75,-100,0]}],"ix":2},"a":{"a":0,"k":[75.25,133,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-4.349,0],[0,-4.349],[4.349,0],[0,4.349]],"o":[[4.349,0],[0,4.349],[-4.349,0],[0,-4.349]],"v":[[0,-7.875],[7.875,0],[0,7.875],[-7.875,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[75.25,133],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":20,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":64,"op":114,"st":64,"bm":0},{"ddd":0,"ind":25,"ty":4,"nm":"Particule Outlines 16","parent":20,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":64,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":76,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":89,"s":[100]},{"t":104,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.355},"t":64,"s":[1,1,0],"to":[-19.915,16.552,0],"ti":[35.174,-29.234,0]},{"i":{"x":0.824,"y":0.961},"o":{"x":0.182,"y":1},"t":76,"s":[-124.771,105.53,0],"to":[-6.221,5.17,0],"ti":[3.522,-2.927,0]},{"t":114,"s":[-139.625,117.875,0]}],"ix":2},"a":{"a":0,"k":[102.375,350.875,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.866,0],[0,-3.866],[3.866,0],[0,3.866]],"o":[[3.866,0],[0,3.866],[-3.866,0],[0,-3.866]],"v":[[0,-7],[7,0],[0,7],[-7,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[102.375,350.875],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":64,"op":114,"st":64,"bm":0},{"ddd":0,"ind":26,"ty":4,"nm":"Particule Outlines 15","parent":20,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":64,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":76,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":89,"s":[100]},{"t":104,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.358},"t":64,"s":[1,1,0],"to":[25.302,14.42,0],"ti":[-45.596,-25.987,0]},{"i":{"x":0.824,"y":0.771},"o":{"x":0.199,"y":1},"t":76,"s":[161.039,92.213,0],"to":[8.617,4.911,0],"ti":[-4.782,-2.725,0]},{"t":114,"s":[181.5,103.875,0]}],"ix":2},"a":{"a":0,"k":[423.5,336.875,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.866,0],[0,-3.866],[3.866,0],[0,3.866]],"o":[[3.866,0],[0,3.866],[-3.866,0],[0,-3.866]],"v":[[0,-7],[7,0],[0,7],[-7,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[423.5,336.875],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":64,"op":114,"st":64,"bm":0},{"ddd":0,"ind":27,"ty":4,"nm":"Particule Outlines 14","parent":20,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":64,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":76,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":89,"s":[100]},{"t":104,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.358},"t":64,"s":[1,1,0],"to":[-19.483,21.304,0],"ti":[35.063,-38.341,0]},{"i":{"x":0.824,"y":0.784},"o":{"x":0.198,"y":1},"t":76,"s":[-122.222,135.74,0],"to":[-6.597,7.214,0],"ti":[3.666,-4.008,0]},{"t":114,"s":[-137.892,152.875,0]}],"ix":2},"a":{"a":0,"k":[104.108,385.875,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.821,1.761],[-0.695,1.507],[-0.65,0.3],[-1.761,3.82],[-1.507,-0.694],[-0.299,-0.651],[-3.82,-1.761],[0.694,-1.508],[0.651,-0.3],[1.762,-3.82],[1.507,0.694],[0.299,0.651]],"o":[[-1.507,-0.694],[0.299,-0.65],[3.821,-1.761],[0.694,-1.508],[0.65,0.3],[1.762,3.82],[1.508,0.694],[-0.3,0.65],[-3.82,1.761],[-0.694,1.508],[-0.65,-0.3],[-1.761,-3.82]],"v":[[-11.377,2.729],[-12.848,-1.258],[-11.377,-2.728],[-2.728,-11.376],[1.258,-12.849],[2.728,-11.376],[11.377,-2.728],[12.849,1.258],[11.377,2.729],[2.728,11.376],[-1.257,12.849],[-2.728,11.376]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[104.108,385.875],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":64,"op":114,"st":64,"bm":0},{"ddd":0,"ind":28,"ty":4,"nm":"Particule Outlines 13","parent":20,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":64,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":76,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":89,"s":[100]},{"t":104,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":64,"s":[1,1,0],"to":[14.926,23.58,0],"ti":[-26.716,-42.205,0]},{"i":{"x":0.824,"y":0.834},"o":{"x":0.193,"y":1},"t":76,"s":[95.364,150.072,0],"to":[4.937,7.799,0],"ti":[-2.758,-4.357,0]},{"t":114,"s":[107.108,168.625,0]}],"ix":2},"a":{"a":0,"k":[349.108,401.625,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.821,1.761],[-0.694,1.507],[-0.649,0.3],[-1.76,3.82],[-1.507,-0.694],[-0.299,-0.651],[-3.821,-1.761],[0.694,-1.508],[0.65,-0.3],[1.761,-3.82],[1.507,0.694],[0.3,0.651]],"o":[[-1.507,-0.694],[0.3,-0.65],[3.821,-1.761],[0.695,-1.508],[0.65,0.3],[1.761,3.82],[1.507,0.694],[-0.3,0.65],[-3.821,1.761],[-0.694,1.508],[-0.649,-0.3],[-1.76,-3.82]],"v":[[-11.378,2.729],[-12.849,-1.258],[-11.378,-2.728],[-2.729,-11.376],[1.257,-12.849],[2.728,-11.376],[11.377,-2.728],[12.849,1.258],[11.377,2.729],[2.728,11.376],[-1.258,12.849],[-2.729,11.376]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[349.108,401.625],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":64,"op":114,"st":64,"bm":0},{"ddd":0,"ind":29,"ty":4,"nm":"Particule Outlines 12","parent":20,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":64,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":76,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":89,"s":[100]},{"t":104,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.355},"t":64,"s":[1,1,0],"to":[-25.438,6.014,0],"ti":[45.007,-10.64,0]},{"i":{"x":0.824,"y":0.944},"o":{"x":0.183,"y":1},"t":76,"s":[-159.67,38.983,0],"to":[-8.007,1.893,0],"ti":[4.525,-1.07,0]},{"t":114,"s":[-178.777,43.5,0]}],"ix":2},"a":{"a":0,"k":[63.223,276.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[1.932,2.163],[0.192,0.888],[0,0],[0,0],[-1.459,2.506],[-0.785,0.456],[0,0],[0,0],[-2.834,-0.614],[-0.677,-0.605],[0,0],[0,0],[-0.293,-2.884],[0.366,-0.831],[0,0],[0,0],[2.653,-1.17],[0.903,0.092]],"o":[[0,0],[-2.162,1.932],[-0.605,-0.677],[0,0],[0,0],[-2.505,-1.459],[0.457,-0.784],[0,0],[0,0],[0.614,-2.834],[0.887,0.192],[0,0],[0,0],[2.885,-0.292],[0.091,0.904],[0,0],[0,0],[1.17,2.654],[-0.831,0.366],[0,0]],"v":[[5.611,13.679],[-0.241,18.908],[-7.654,18.491],[-8.87,16.104],[-10.531,8.435],[-17.312,4.485],[-19.206,-2.694],[-17.312,-4.588],[-10.531,-8.538],[-8.87,-16.207],[-2.628,-20.227],[-0.241,-19.01],[5.611,-13.782],[13.418,-14.573],[19.171,-9.879],[18.751,-7.232],[15.587,-0.051],[18.751,7.129],[16.064,14.051],[13.418,14.47]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[63.584,276.551],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":64,"op":114,"st":64,"bm":0},{"ddd":0,"ind":30,"ty":4,"nm":"Particule Outlines 11","parent":20,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":64,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":76,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":89,"s":[100]},{"t":104,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":64,"s":[1,1,0],"to":[24.933,-11.516,0],"ti":[-44.507,20.556,0]},{"i":{"x":0.824,"y":0.86},"o":{"x":0.191,"y":1},"t":76,"s":[158.594,-71.787,0],"to":[8.152,-3.765,0],"ti":[-4.567,2.109,0]},{"t":114,"s":[178,-80.75,0]}],"ix":2},"a":{"a":0,"k":[420,152.25,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-4.35,0],[0,-4.349],[4.35,0],[0,4.349]],"o":[[4.35,0],[0,4.349],[-4.35,0],[0,-4.349]],"v":[[0,-7.875],[7.875,0],[0,7.875],[-7.875,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[420,152.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":64,"op":114,"st":64,"bm":0},{"ddd":0,"ind":31,"ty":3,"nm":"Null 1","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[242,233,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":50,"st":0,"bm":0},{"ddd":0,"ind":32,"ty":4,"nm":"Particule Outlines 10","parent":31,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":12,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":25,"s":[100]},{"t":40,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":0,"s":[1,1,0],"to":[26.512,6.862,0],"ti":[-47.301,-12.243,0]},{"i":{"x":0.824,"y":0.864},"o":{"x":0.19,"y":1},"t":12,"s":[168.563,44.372,0],"to":[8.65,2.239,0],"ti":[-4.848,-1.255,0]},{"t":50,"s":[189.157,49.702,0]}],"ix":2},"a":{"a":0,"k":[431.157,282.702,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[1.413,1.96],[0.082,0.752],[0,0],[0,0],[-1.428,1.949],[-0.69,0.31],[0,0],[0,0],[-2.296,-0.754],[-0.509,-0.56],[0,0],[0,0],[0.009,-2.416],[0.376,-0.657],[0,0],[0,0],[2.3,-0.738],[0.741,0.154]],"o":[[0,0],[-1.96,1.412],[-0.443,-0.614],[0,0],[0,0],[-1.949,-1.427],[0.446,-0.61],[0,0],[0,0],[0.756,-2.295],[0.718,0.238],[0,0],[0,0],[2.416,0.009],[-0.003,0.757],[0,0],[0,0],[0.738,2.301],[-0.721,0.231],[0,0]],"v":[[3.505,12.693],[-2.257,16.846],[-8.364,15.854],[-9.164,13.771],[-9.933,6.711],[-15.662,2.515],[-16.606,-3.6],[-14.872,-5.005],[-8.395,-7.917],[-6.176,-14.664],[-0.651,-17.453],[1.221,-16.236],[5.992,-10.977],[13.094,-10.949],[17.452,-6.557],[16.874,-4.401],[13.347,1.762],[15.516,8.525],[12.686,14.026],[10.456,14.143]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[431.157,282.703],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 10","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":50,"st":0,"bm":0},{"ddd":0,"ind":33,"ty":4,"nm":"Particule Outlines 9","parent":31,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":12,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":25,"s":[100]},{"t":40,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":0,"s":[1,1,0],"to":[21.416,-17.246,0],"ti":[-38.236,30.79,0]},{"i":{"x":0.824,"y":0.858},"o":{"x":0.191,"y":1},"t":12,"s":[136.364,-108.004,0],"to":[7.008,-5.643,0],"ti":[-3.925,3.161,0]},{"t":50,"s":[153.046,-121.437,0]}],"ix":2},"a":{"a":0,"k":[395.046,111.563,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.968,2.289],[-0.903,1.959],[-0.845,0.389],[-2.289,4.967],[-1.959,-0.903],[-0.39,-0.846],[-4.967,-2.289],[0.902,-1.959],[0.846,-0.389],[2.289,-4.968],[1.959,0.903],[0.389,0.845]],"o":[[-1.959,-0.903],[0.39,-0.844],[4.968,-2.289],[0.902,-1.959],[0.845,0.39],[2.289,4.967],[1.959,0.903],[-0.39,0.845],[-4.967,2.289],[-0.903,1.959],[-0.844,-0.389],[-2.289,-4.968]],"v":[[-14.79,3.275],[-16.703,-1.907],[-14.79,-3.819],[-3.547,-15.062],[1.635,-16.975],[3.547,-15.062],[14.79,-3.819],[16.703,1.363],[14.79,3.275],[3.547,14.519],[-1.635,16.431],[-3.547,14.519]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[395.045,111.834],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":50,"st":0,"bm":0},{"ddd":0,"ind":34,"ty":4,"nm":"Particule Outlines 8","parent":31,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":12,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":25,"s":[100]},{"t":40,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":0,"s":[1,1,0],"to":[-26.421,9.299,0],"ti":[47.317,-16.654,0]},{"i":{"x":0.824,"y":0.829},"o":{"x":0.194,"y":1},"t":12,"s":[-166.038,59.791,0],"to":[-8.761,3.084,0],"ti":[4.892,-1.722,0]},{"t":50,"s":[-186.875,67.125,0]}],"ix":2},"a":{"a":0,"k":[55.125,300.125,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-5.316,0],[0,-5.315],[5.316,0],[0,5.315]],"o":[[5.316,0],[0,5.315],[-5.316,0],[0,-5.315]],"v":[[0,-9.625],[9.625,0],[0,9.625],[-9.625,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[55.125,300.125],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":50,"st":0,"bm":0},{"ddd":0,"ind":35,"ty":4,"nm":"Particule Outlines 7","parent":31,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":12,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":25,"s":[100]},{"t":40,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":0,"s":[1,1,0],"to":[-23.622,-14.223,0],"ti":[42.195,25.405,0]},{"i":{"x":0.824,"y":0.853},"o":{"x":0.191,"y":1},"t":12,"s":[-148.314,-88.9,0],"to":[-7.746,-4.663,0],"ti":[4.336,2.611,0]},{"t":50,"s":[-166.75,-100,0]}],"ix":2},"a":{"a":0,"k":[75.25,133,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-4.349,0],[0,-4.349],[4.349,0],[0,4.349]],"o":[[4.349,0],[0,4.349],[-4.349,0],[0,-4.349]],"v":[[0,-7.875],[7.875,0],[0,7.875],[-7.875,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[75.25,133],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":20,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":50,"st":0,"bm":0},{"ddd":0,"ind":36,"ty":4,"nm":"Particule Outlines 6","parent":31,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":12,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":25,"s":[100]},{"t":40,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.355},"t":0,"s":[1,1,0],"to":[-19.915,16.552,0],"ti":[35.174,-29.234,0]},{"i":{"x":0.824,"y":0.961},"o":{"x":0.182,"y":1},"t":12,"s":[-124.771,105.53,0],"to":[-6.221,5.17,0],"ti":[3.522,-2.927,0]},{"t":50,"s":[-139.625,117.875,0]}],"ix":2},"a":{"a":0,"k":[102.375,350.875,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.866,0],[0,-3.866],[3.866,0],[0,3.866]],"o":[[3.866,0],[0,3.866],[-3.866,0],[0,-3.866]],"v":[[0,-7],[7,0],[0,7],[-7,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[102.375,350.875],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":50,"st":0,"bm":0},{"ddd":0,"ind":37,"ty":4,"nm":"Particule Outlines 5","parent":31,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":12,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":25,"s":[100]},{"t":40,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.358},"t":0,"s":[1,1,0],"to":[25.302,14.42,0],"ti":[-45.596,-25.987,0]},{"i":{"x":0.824,"y":0.771},"o":{"x":0.199,"y":1},"t":12,"s":[161.039,92.213,0],"to":[8.617,4.911,0],"ti":[-4.782,-2.725,0]},{"t":50,"s":[181.5,103.875,0]}],"ix":2},"a":{"a":0,"k":[423.5,336.875,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.866,0],[0,-3.866],[3.866,0],[0,3.866]],"o":[[3.866,0],[0,3.866],[-3.866,0],[0,-3.866]],"v":[[0,-7],[7,0],[0,7],[-7,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[423.5,336.875],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":50,"st":0,"bm":0},{"ddd":0,"ind":38,"ty":4,"nm":"Particule Outlines 4","parent":31,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":12,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":25,"s":[100]},{"t":40,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.358},"t":0,"s":[1,1,0],"to":[-19.483,21.304,0],"ti":[35.063,-38.341,0]},{"i":{"x":0.824,"y":0.784},"o":{"x":0.198,"y":1},"t":12,"s":[-122.222,135.74,0],"to":[-6.597,7.214,0],"ti":[3.666,-4.008,0]},{"t":50,"s":[-137.892,152.875,0]}],"ix":2},"a":{"a":0,"k":[104.108,385.875,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.821,1.761],[-0.695,1.507],[-0.65,0.3],[-1.761,3.82],[-1.507,-0.694],[-0.299,-0.651],[-3.82,-1.761],[0.694,-1.508],[0.651,-0.3],[1.762,-3.82],[1.507,0.694],[0.299,0.651]],"o":[[-1.507,-0.694],[0.299,-0.65],[3.821,-1.761],[0.694,-1.508],[0.65,0.3],[1.762,3.82],[1.508,0.694],[-0.3,0.65],[-3.82,1.761],[-0.694,1.508],[-0.65,-0.3],[-1.761,-3.82]],"v":[[-11.377,2.729],[-12.848,-1.258],[-11.377,-2.728],[-2.728,-11.376],[1.258,-12.849],[2.728,-11.376],[11.377,-2.728],[12.849,1.258],[11.377,2.729],[2.728,11.376],[-1.257,12.849],[-2.728,11.376]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[104.108,385.875],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":50,"st":0,"bm":0},{"ddd":0,"ind":39,"ty":4,"nm":"Particule Outlines 3","parent":31,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":12,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":25,"s":[100]},{"t":40,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":0,"s":[1,1,0],"to":[14.926,23.58,0],"ti":[-26.716,-42.205,0]},{"i":{"x":0.824,"y":0.834},"o":{"x":0.193,"y":1},"t":12,"s":[95.364,150.072,0],"to":[4.937,7.799,0],"ti":[-2.758,-4.357,0]},{"t":50,"s":[107.108,168.625,0]}],"ix":2},"a":{"a":0,"k":[349.108,401.625,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.821,1.761],[-0.694,1.507],[-0.649,0.3],[-1.76,3.82],[-1.507,-0.694],[-0.299,-0.651],[-3.821,-1.761],[0.694,-1.508],[0.65,-0.3],[1.761,-3.82],[1.507,0.694],[0.3,0.651]],"o":[[-1.507,-0.694],[0.3,-0.65],[3.821,-1.761],[0.695,-1.508],[0.65,0.3],[1.761,3.82],[1.507,0.694],[-0.3,0.65],[-3.821,1.761],[-0.694,1.508],[-0.649,-0.3],[-1.76,-3.82]],"v":[[-11.378,2.729],[-12.849,-1.258],[-11.378,-2.728],[-2.729,-11.376],[1.257,-12.849],[2.728,-11.376],[11.377,-2.728],[12.849,1.258],[11.377,2.729],[2.728,11.376],[-1.258,12.849],[-2.729,11.376]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[349.108,401.625],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":50,"st":0,"bm":0},{"ddd":0,"ind":40,"ty":4,"nm":"Particule Outlines 2","parent":31,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":12,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":25,"s":[100]},{"t":40,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.355},"t":0,"s":[1,1,0],"to":[-25.438,6.014,0],"ti":[45.007,-10.64,0]},{"i":{"x":0.824,"y":0.944},"o":{"x":0.183,"y":1},"t":12,"s":[-159.67,38.983,0],"to":[-8.007,1.893,0],"ti":[4.525,-1.07,0]},{"t":50,"s":[-178.777,43.5,0]}],"ix":2},"a":{"a":0,"k":[63.223,276.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[1.932,2.163],[0.192,0.888],[0,0],[0,0],[-1.459,2.506],[-0.785,0.456],[0,0],[0,0],[-2.834,-0.614],[-0.677,-0.605],[0,0],[0,0],[-0.293,-2.884],[0.366,-0.831],[0,0],[0,0],[2.653,-1.17],[0.903,0.092]],"o":[[0,0],[-2.162,1.932],[-0.605,-0.677],[0,0],[0,0],[-2.505,-1.459],[0.457,-0.784],[0,0],[0,0],[0.614,-2.834],[0.887,0.192],[0,0],[0,0],[2.885,-0.292],[0.091,0.904],[0,0],[0,0],[1.17,2.654],[-0.831,0.366],[0,0]],"v":[[5.611,13.679],[-0.241,18.908],[-7.654,18.491],[-8.87,16.104],[-10.531,8.435],[-17.312,4.485],[-19.206,-2.694],[-17.312,-4.588],[-10.531,-8.538],[-8.87,-16.207],[-2.628,-20.227],[-0.241,-19.01],[5.611,-13.782],[13.418,-14.573],[19.171,-9.879],[18.751,-7.232],[15.587,-0.051],[18.751,7.129],[16.064,14.051],[13.418,14.47]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[63.584,276.551],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":50,"st":0,"bm":0},{"ddd":0,"ind":41,"ty":4,"nm":"Particule Outlines","parent":31,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":12,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":25,"s":[100]},{"t":40,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":0,"s":[1,1,0],"to":[24.933,-11.516,0],"ti":[-44.507,20.556,0]},{"i":{"x":0.824,"y":0.86},"o":{"x":0.191,"y":1},"t":12,"s":[158.594,-71.787,0],"to":[8.152,-3.765,0],"ti":[-4.567,2.109,0]},{"t":50,"s":[178,-80.75,0]}],"ix":2},"a":{"a":0,"k":[420,152.25,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-4.35,0],[0,-4.349],[4.35,0],[0,4.349]],"o":[[4.35,0],[0,4.349],[-4.35,0],[0,-4.349]],"v":[[0,-7.875],[7.875,0],[0,7.875],[-7.875,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[420,152.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":50,"st":0,"bm":0},{"ddd":0,"ind":42,"ty":4,"nm":"BG Outlines","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":12,"s":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":183,"s":[100]},{"t":195,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[245.00000000000003,245.00000000000003,0],"ix":2},"a":{"a":0,"k":[245,245,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-72.487,0],[0,-72.487],[72.487,0],[0,72.487]],"o":[[72.487,0],[0,72.487],[-72.487,0],[0,-72.487]],"v":[[0,-131.25],[131.25,0],[0,131.25],[-131.25,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.7216,0.5294,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[245,245],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":20,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-101.482,0],[0,-101.482],[101.482,0],[0,101.482]],"o":[[101.482,0],[0,101.482],[-101.482,0],[0,-101.482]],"v":[[0,-183.75],[183.75,0],[0,183.75],[-183.75,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.7216,0.5294,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[245,245],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":20,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1098,"st":0,"bm":0}]'),km=[{tm:291,cm:"2",dr:0}],wm={v:um,fr:hm,ip:fm,op:pm,w:xm,h:mm,nm:gm,ddd:ym,assets:bm,layers:vm,markers:km};function Sm(){const t=Nt(),e=ye(s=>s.playButtonClickSfx),n=Y(s=>s.me);function i(){e(),gt.post("/api/user/logout").catch(console.error).then(()=>n()).finally(()=>t("/login"))}return a.jsx(Cm,{className:"button",onClick:i,children:"LOGOUT➤"})}const Cm=k.button`
    height: 38px;
    width: 105px;

    font-family: "Pixel Digivolve", sans-serif;
    font-weight: bold;
    font-size: 0.9em;
    text-align: center;
    margin: 0 3px 0 0;
    letter-spacing: 2px;
    color: #e1e1e0;
    padding: 0 0 0 5px;

    border-bottom: 1px solid #131313;
    border-right: 1px solid #131313;

    cursor: pointer;
    border-radius: 0;
    background: #640c21;
    box-shadow: 3px 6px 1px 0 rgb(0, 0, 0);
    transition: all 0.15s ease;

    &:hover {
        background: #b6163c;
        transform: translateY(1px);
        box-shadow: 2px 4px 1px 0 rgba(0, 0, 0, 0.9);
    }

    &:focus {
        outline: none;
    }

    &:active {
        background: #c50f25;
        transform: translateY(2px);
        box-shadow: 1px 2px 1px 0 rgba(0, 0, 0, 0.8);
    }
`;function Pi(t){const[e,n]=w.useState(null),[i,s]=w.useState(!1);async function o(){s(!0);try{const r=await gt.get(t);r.data==="false"?n(!1):r.data==="true"?n(!0):n(r.data)}catch(r){console.error(`Failed to fetch ${t}:`,r)}finally{s(!1)}}return w.useState(()=>{o()}),{data:e,isFetching:i,refetch:o}}function Hn(t,e){const[n,i]=w.useState(!1);async function s(o){i(!0);try{return(await gt({method:e,url:t+(o?.pathVariable??""),data:o?.payload})).data}catch(r){return console.error(r),nn("Something went wrong!"),null}finally{i(!1)}}return{isPending:n,mutate:s}}function Em({isAdmin:t}){const e=Y(r=>r.user),{mutate:n,isPending:i}=Hn("/api/report","POST");function s({props:r}){r!==void 0&&gt.delete(`/api/admin/chat/${r.id}`).then(()=>Gs("Message deleted!")).catch(c=>nn(c))}async function o({props:r}){r===void 0||i||await n({payload:{embeds:[{fields:[{name:"`From`",value:e,inline:!0},{name:"`Reported User`",value:r.author,inline:!0},{name:"`Global Chat Message:`",value:r.message}]}]}})}return a.jsxs(Uc,{id:"chat-message-menu",theme:"dark",children:[t&&a.jsx(bo,{onClick:s,children:a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[a.jsx("span",{children:"Delete Message"}),a.jsx(ra,{color:"warning"})]})}),t&&a.jsx(Wc,{}),a.jsx(bo,{onClick:o,children:a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[a.jsx("span",{children:"Report Message"}),a.jsx(Fx,{color:"error"})]})})]})}function _m(){const t=window.location.port,e=window.location.origin.replace("https://",""),n=t==="5173"?"ws://192.168.0.26:8080/api/ws/lobby":"wss://"+e+"/api/ws/lobby",i=Y(A=>A.user),s=Y(A=>A.setActiveDeck),o=Y(A=>A.activeDeckId),r=Y(A=>A.getActiveDeck),c=Y(A=>A.activeDeckReadyState),l=ae(A=>A.setIsRematch),u=he(A=>A.decks),d=U(A=>A.gameId),h=U(A=>A.setGameId),f=U(A=>A.clearBoard),p=U(A=>A.setIsOpponentOnline),x=ye(A=>A.playJoinSfx),y=ye(A=>A.playKickSfx),m=ye(A=>A.playCountdownSfx),{data:g,isFetching:v}=Pi("/api/user/isAdmin"),{data:S,isFetching:D}=Pi("/api/user/isBanned"),[j,I]=w.useState(!1),[B,W]=w.useState(0),[V,Z]=w.useState(0),[ne,ee]=w.useState(!1),[ie,K]=w.useState(!1),[te,X]=w.useState(null),[be,we]=w.useState([]),[se,L]=w.useState([]),[N,ge]=w.useState([]),[ve,Se]=w.useState(""),[oe,Q]=w.useState(""),[xe,Me]=w.useState(!1),[je,Ee]=w.useState(""),[at,O]=w.useState(!1),[_,C]=w.useState(""),[M,R]=w.useState(!1),[$,H]=w.useState(null),[ce,Ce]=w.useState(!1),[fe,le]=w.useState(!1),E=Nt();function b(){p(!0),K(!1),E("/game")}function P(){K(!0);const A=setTimeout(()=>K(!1),5e3);return()=>clearTimeout(A)}const T=kc(n,{shouldReconnect:()=>!0,onMessage:A=>{if(A.data==="[SUCCESS]"&&K(!1),A.data==="[NO_ACTIVE_DECK]"&&(vo("No active deck not found! Please refresh if this error should not appear."),s(u[0].id)),A.data==="[BROKEN_DECK]"&&vo("Cards in your deck could not be found!"),A.data.startsWith("[USER_COUNT]:")&&(W(parseInt(A.data.substring(13))),T.sendMessage("/heartbeat/")),A.data.startsWith("[USER_COUNT_QUICK_PLAY]:")&&Z(parseInt(A.data.substring(24))),A.data.startsWith("[ROOMS]:")&&ge(JSON.parse(A.data.substring(8))),A.data==="[PROMPT_PASSWORD]"&&(R(!1),C(""),O(!0)),A.data.startsWith("[JOIN_ROOM]:")&&(H(JSON.parse(A.data.substring(12))),K(!1),Se(""),Q(""),O(!1),Me(!1)),A.data.startsWith("[ROOM_UPDATE]:")&&H(JSON.parse(A.data.substring(14))),A.data==="[LEAVE_ROOM]"&&(H(null),L([]),K(!1),x()),A.data==="[KICKED]"&&(H(null),L([]),y()),A.data==="[PLAYER_JOINED]"&&x(),A.data==="[WRONG_PASSWORD]"&&(K(!1),R(!0)),A.data.startsWith("[COMPUTE_GAME]:")){localStorage.setItem("isReported",JSON.stringify(!1)),localStorage.removeItem("boardStore");const _e=A.data.substring(15);$t(_e)}if(A.data.startsWith("[RECONNECT_ENABLED]:")){const _e=A.data.substring(20);ee(_e===d)}if(A.data==="[RECONNECT_DISABLED]"&&ee(!1),A.data==="[SESSION_ALREADY_CONNECTED]"&&I(!0),A.data.startsWith("[GLOBAL_CHAT]:")){const _e=JSON.parse(A.data.substring(14));we(_e)}if(A.data.startsWith("[CHAT_MESSAGE]:")&&!$){const _e=A.data.substring(15),wt=JSON.parse(_e);we(St=>[...St,wt])}if(A.data.startsWith("[CHAT_MESSAGE_ROOM]:")){const _e=A.data.substring(20),wt=JSON.parse(_e);L(St=>[...St,wt])}if(A.data.startsWith("[MESSAGE_DELETED]:")){const _e=A.data.substring(18);we(wt=>wt.filter(St=>St.id!==_e)),L(wt=>wt.filter(St=>St.id!==_e))}}},!D&&!S);function F(A){s(String(A.target.value))}function G(){P(),kt();const A=ve.trim().replace(":","∶");T.sendMessage("/createRoom:"+A+":"+oe+":"+xe)}function J(A){P(),kt(),C(""),Ee(A),T.sendMessage("/joinRoom:"+A)}function pe(){P(),T.sendMessage("/password:"+je+":"+_)}function Be(){P(),T.sendMessage("/toggleReady:"+$?.id)}function ze(){P(),T.sendMessage("/leave:"+$?.id+":"+i+":true")}function Ye(A){P(),T.sendMessage("/kick:"+$?.id+":"+A),y()}function jt(){P(),kt();const A=i+"‗"+$?.players.find(_e=>_e.name!==i)?.name;T.sendMessage("/startGame:"+$?.id+":"+A)}function $t(A){m(),le(!0);const _e=setTimeout(()=>{h(A),l(!1),f(),K(!1),H(null),E("/game")},3150);return()=>clearTimeout(_e)}function kt(){Ce(!1),T.sendMessage("/cancelQuickPlay")}function Oe(){ce?kt():(Ce(!0),T.sendMessage("/quickPlay"))}const At=w.useCallback(()=>{r()},[r]);w.useEffect(()=>At(),[At]),w.useEffect(()=>{gt.get(`/api/profile/decks/${o}`).then(A=>X(A.data))},[o]),w.useEffect(()=>{const A=()=>{$&&T.sendMessage("/leave:"+$.id+":"+i+":false")};return window.addEventListener("beforeunload",A),()=>window.removeEventListener("beforeunload",A)},[$,i,T]);const ct=$?.players.find(A=>A.name===i),Pc=c===Bn.NOT_FULL||!!$&&(ie||!!$.players.find(A=>!A.ready)||$.players.length<2||$.restrictionsApplied&&c===Bn.VIOLATES_RESTRICTIONS),Dc=lo("(max-width:499px)");return a.jsxs(un,{children:[fe&&a.jsx(qc,{open:!0,sx:{background:"rgba(8,8,8,0.5)",pointerEvents:"none"},PaperProps:{sx:{background:"none",overflow:"hidden",boxShadow:"none"}},children:a.jsx(Ft,{animationData:wm})}),a.jsx(Us,{onClose:()=>O(!1),open:at,children:a.jsx(Ws,{children:a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,alignItems:"center",width:300,maxWidth:"100vw"},children:[a.jsx(hs,{value:_,error:M,type:"password",style:{width:"calc(100% - 1.5rem)",border:`2px solid ${M?"crimson":"#1C7540FF"}`},onChange:A=>{C(A.target.value),R(!1)}}),a.jsx(Xe,{disabled:!_,onClick:pe,style:{width:"50%",minWidth:100,background:"#1C7540FF"},children:M?"wrong password":"Submit"})]})})}),a.jsxs(Om,{children:[a.jsx(Hs,{opened:!0}),ne&&a.jsx(Xe,{onClick:b,children:"RECONNECT"}),a.jsxs(Dm,{children:[j&&a.jsx(Ix,{fontSize:"large",color:"warning"}),[0,3].includes(T.readyState)&&a.jsx(bc,{fontSize:"large",color:"error"}),a.jsx(Lx,{sx:{color:"whitesmoke",opacity:.8},fontSize:"large"}),a.jsx("span",{style:{color:"whitesmoke",opacity:.8,lineHeight:1},children:B})]}),!v&&g&&a.jsx(li,{style:{width:"fit-content",height:"38px",padding:"0 1px 1px 6px",fontSize:"22px",fontFamily:"Pixel Digivolve, sans-serif"},onClick:()=>{E("/administration"),H(null)},className:"button",children:a.jsx("span",{children:"ADMIN⚙️"})}),a.jsx(Sm,{})]}),a.jsxs(Pm,{children:[a.jsxs(jm,{children:[a.jsxs(Mm,{children:[a.jsxs(Rs,{children:[a.jsx(us,{style:{marginBottom:0},children:$?.name??"Room"}),a.jsx(us,{style:{color:"var(--lobby-accent)"},children:$?"":"Host"}),a.jsx(us,{style:{gridColumn:"span 2"},children:$?"":"Settings"}),$?i===$.hostName?a.jsx(Xe,{disabled:Pc,onClick:jt,children:"START GAME"}):a.jsx(Hr,{disabled:c===Bn.NOT_FULL||$.restrictionsApplied&&c===Bn.VIOLATES_RESTRICTIONS,isSearchingGame:!!ct?.ready,onClick:Be,children:"READY"}):a.jsxs(Hr,{disabled:ie||c===Bn.NOT_FULL,onClick:Oe,isSearchingGame:ce,children:[ce?"Finding Opponent...":"Quick Play"," 👤",V]})]}),a.jsx(Am,{children:$?a.jsx(qr,{children:$.players.map(A=>{const _e=A.name===i,wt=A.name===$.hostName,St=i===$.hostName;return a.jsxs(Rs,{children:[a.jsx("img",{alt:A.name+"img",width:96,height:96,style:{transform:"scaleX(-1)"},src:ks(A.avatarName)}),a.jsx(fs,{children:A.name}),wt?a.jsx("img",{alt:"HOST",width:36,src:dm,style:{justifySelf:"center",gridColumn:"span 2"}}):a.jsx(Im,{ready:A.ready,style:{justifySelf:"center",gridColumn:"span 2"},children:A.ready?"READY":"NOT READY"}),_e&&a.jsx(Xe,{disabled:ie,onClick:ze,children:"LEAVE"}),!_e&&St&&a.jsx(Xe,{disabled:ie,onClick:()=>Ye(A.name),children:"KICK"})]},A.name)})}):a.jsx(qr,{children:N.sort((A,_e)=>A.name.localeCompare(_e.name)).map(A=>a.jsxs(Bm,{children:[a.jsx(fs,{children:A.name}),a.jsxs(fs,{children:[a.jsx("span",{children:A.hostName}),a.jsx("img",{alt:"Host: ",width:24,height:24,src:ks(A.players.find(_e=>_e.name===A.hostName)?.avatarName||""),style:{marginLeft:"4px",transform:"translateY(-3px)"}})]}),A.restrictionsApplied?a.jsx(Gx,{}):a.jsx("div",{}),A.hasPassword?a.jsx(Rx,{}):a.jsx("div",{}),a.jsx(Xe,{disabled:ie,onClick:()=>J(A.id),children:"Join"})]},A.id))})})]}),a.jsxs("div",{style:{display:"flex",maxHeight:"100%",justifyContent:"space-between",flexWrap:"wrap",gap:"32px"},children:[!$&&a.jsxs(Rm,{children:[a.jsxs(li,{className:"button",onClick:()=>{E("/decks"),H(null)},children:[a.jsx(Ux,{style:{fontSize:50}}),a.jsx("span",{style:{fontFamily:"Naston, sans-serif",fontSize:40},children:"Decks"})]}),a.jsxs(li,{className:"button",onClick:()=>{E("/test"),H(null)},children:[a.jsx(Hc,{style:{fontSize:50}}),a.jsx("span",{style:{fontFamily:"Naston, sans-serif",fontSize:40},children:"Test "})]}),a.jsxs(li,{className:"button",onClick:()=>{E("/profile"),H(null)},children:[a.jsx(zx,{style:{fontSize:50}}),a.jsx("span",{style:{fontFamily:"Naston, sans-serif",fontSize:40},children:"Profile"})]})]}),a.jsxs(Ms,{style:Dc?{order:99,width:"100%"}:{},children:[a.jsx(Tm,{value:o,onChange:F,disabled:!!ct?.ready&&$?.hostName!==i||ce,children:u.map(A=>a.jsx("option",{value:A.id,children:A.name},A.id))}),!!te?.mainDeckList?.length&&a.jsx(Ys,{deck:te,lobbyView:!0,inRoom:!!$})]}),!$&&a.jsxs(Ms,{style:{minWidth:300,flex:1,display:"flex",flexDirection:"column",alignItems:"center"},children:[a.jsx(hs,{value:ve,onChange:A=>Se(A.target.value),placeholder:"New room name",style:{marginBottom:"1rem",width:"calc(100% - 24px)",maxHeight:"1.25rem"}}),a.jsx(hs,{value:oe,onChange:A=>Q(A.target.value),placeholder:"Password (optional)",style:{marginBottom:"1rem",width:"calc(100% - 24px)",maxHeight:"1.25rem"}}),a.jsx(Is,{disabled:!0,className:"button",checked:xe,onClick:()=>Me(!xe),control:a.jsx(Ei,{}),sx:{"& .MuiButtonBase-root":{color:"rgba(56, 111, 240, 0.75)!important"},width:"100%",paddingLeft:"10px",transform:"translateY(-6px)"},label:a.jsxs("span",{style:{color:"antiquewhite"},children:["Decks must follow the"," ",a.jsx("a",{href:"https://world.digimoncard.com/rule/restriction_card/",target:"_blank",rel:"noopener noreferrer",onClick:A=>A.stopPropagation(),children:"current restrictions"})]})}),a.jsx(Xe,{disabled:!ve||ie,onClick:G,style:{width:"250px",height:"36px",marginTop:"auto"},children:"Create Room"})]})]})]}),a.jsx(tm,{sendMessage:T.sendMessage,messages:$?se:be,roomId:$?.id})]}),a.jsx(gc,{}),a.jsx(Em,{isAdmin:!!g})]})}const Om=k.header`
    width: calc(100% - 32px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 16px;
`,Pm=k.div`
    width: calc(100% - 32px);,
    max-width: calc(100vw - 32px);
    height: calc(100vh - 128px);
    max-height: calc(100vh - 128px);
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    
    @media (max-width: 600px) and (orientation: portrait) {
        max-height: unset;
        height: fit-content;
    }
    @media (max-width: 800px) and (orientation: landscape) {
        max-height: unset;
        height: fit-content;
    }
`,Dm=k.div`
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;
    color: ghostwhite;
    font-size: 28px;
    font-family:
        League Spartan,
        sans-serif;
`,jm=k.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    flex: 1;
    height: 100%;
`,Ms=k.div`
    padding: 1rem;

    position: relative;
    color: ghostwhite;
    background: rgba(12, 21, 16, 0.25);
    border: 1px solid rgba(124, 124, 118, 0.4);
    border-radius: 3px;
    box-shadow: inset 5px 5px 30px 5px rgba(255, 255, 255, 0.05);
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5));
`,li=k.div`
    background: rgba(12, 21, 16, 0.25);
    border: 1px solid rgba(124, 124, 118, 0.4);
    border-radius: 3px;
    box-shadow: inset 5px 5px 30px 5px rgba(255, 255, 255, 0.05);
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5));

    height: 65px;
    width: 275px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;

    & > * {
        opacity: 0.75;
        color: ghostwhite;
    }

    &:hover {
        & > * {
            opacity: 0.9;
            color: var(--blue);
        }
    }

    &:active {
        & > * {
            opacity: 1;
            color: var(--lobby-accent);
        }
    }
`,us=k.span`
    font-family: "League Spartan", sans-serif;
    width: fit-content;

    color: var(--lobby-accent);
    font-size: 28px;
    line-height: 1;
    font-weight: 300;
    border-bottom: 1px solid transparent;
    border-image: linear-gradient(
            to right,
            transparent 0%,
            transparent 10%,
            var(--lobby-accent) 50%,
            transparent 90%,
            transparent 100%
        )
        1;
`,Am=k.div`
    max-height: 95.75%;
    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(
            to bottom right,
            rgba(63, 109, 207, 0.75) 0%,
            rgba(48, 95, 217, 0.75) 50%,
            rgba(84, 126, 215, 0.75) 100%
        );
        border-radius: 5px;
        box-shadow:
            inset 0 1px 2px rgba(255, 255, 255, 0.6),
            inset 0 -1px 3px rgba(0, 0, 0, 0.9);
    }

    @media (max-width: 600px) {
        max-height: 350px;
    }
`,qr=k.ul`
    list-style-type: none;
    padding: 0;
`,hs=k.input`
    flex-grow: 1;
    padding: 0.5rem;
    border: 1px solid ${({error:t})=>t?"crimson":"rgba(48, 95, 217, 0.7)"};
    border-radius: 3px;
    background-color: #0c0c0c;
    color: ghostwhite;
    font-family: "Cousine", monospace;

    &:focus {
        outline: none;
        box-shadow: 0 0 5px rgba(48, 95, 217, 0.7);
    }
`,Tm=k.select`
    width: 100%;
    padding: 0.5rem;
    border: 1px solid rgba(48, 95, 217, 0.7);
    border-radius: 3px;
    background-color: #0c0c0c;
    color: ghostwhite;
    font-family: "League Spartan", sans-serif;
    font-size: 16px;
    margin-bottom: 1rem;

    &:focus {
        outline: none;
        box-shadow: 0 0 5px rgba(48, 95, 217, 0.7);
    }
`,Hr=k(Xe)`
    height: 36px;
    margin-right: 8px;
    background: var(${({isSearchingGame:t})=>t?"--orange-button-bg":"--blue-button-bg"});

    &:hover {
        background: var(
            ${({isSearchingGame:t})=>t?"--orange-button-bg-hover":"--blue-button-bg-hover"}
        );
    }

    &:active {
        background: var(
            ${({isSearchingGame:t})=>t?"--orange-button-bg-active":"--blue-button-bg-active"}
        );
    }

    @media (max-width: 499px) {
        margin-right: unset;
    }
`,Im=k.div`
    width: 100px;
    border-radius: 5px;
    height: 36px;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.5rem 0 0.5rem;
    letter-spacing: 1px;
    color: ghostwhite;
    text-shadow: 0 0 3px black;

    background: ${({ready:t})=>t?"rgb(53,197,147)":"rgb(192,42,42)"};
    filter: drop-shadow(
        ${({ready:t})=>t?"0 0 5px rgba(61,227,169,0.6)":"0 0 5px rgba(236,54,54,0.6)"}
    );
`,fs=k.span`
    font-size: 24px;
    font-family: "League Spartan", sans-serif;
    color: ghostwhite;
    display: flex;
    align-items: center;
`,Mm=k(Ms)`
    flex: 1;
    min-width: 350px;
    max-height: calc(100% - 316px);

    @media (max-width: 600px) and (orientation: portrait), (max-height: 499px) {
        max-height: 400px;
        min-height: 200px;
        max-width: calc(100vw - 32px);
        min-width: unset;
    }
    @media (max-width: 800px) and (orientation: landscape) {
        max-height: 500px;
        max-width: calc(100vw - 32px);
        min-width: unset;
    }
`,Rm=k.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media (max-width: 499px) {
        gap: 16px;
        order: 100;
        width: 100%;
        align-items: center;
        div {
            margin-top: 1px;
        }
    }
`,Rs=k.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 2fr 2fr 0.5fr 0.5fr 250px;
    align-items: center;
    transition: background-color 0.3s ease;
    padding-left: 4px;

    @media (max-width: 600px) and (orientation: portrait), (max-height: 499px) {
    }
    @media (max-width: 800px) and (orientation: landscape) {
        grid-template-columns: 2fr 2fr 0.5fr 0.5fr 200px;
    }
`,Bm=k(Rs)`
    border: 1px solid transparent;
    background-color: rgba(0, 68, 192, 0.1);

    &:hover {
        background-color: rgba(218, 51, 187, 0.1);
    }
`,zm=()=>a.jsx(Lm,{stacked:!0}),Lm=k(Yc)`
  .Toastify__toast {
    text-align: center;
    width: 400px;
    max-width: 50rem;
    font-family: Sansation, sans-serif;
    font-size: 24px;
    filter: drop-shadow(1px 2px 3px black);
    background-color: #0e0e0e;
  }

  .Toastify__toast--warning {
    color: #ffde27;
    .Toastify__progress-bar {
      background-color: #ffde27;
    }
  }

  .Toastify__toast--success {
    color: #3fe577;
    .Toastify__progress-bar {
      background-color: #3fe577;
    }
  }

  .Toastify__toast--error {
    color: crimson;
    .Toastify__progress-bar {
      background-color: crimson;
    }
  }
`,Nm=window.location.port,Fm=window.location.origin.replace("https://",""),$m=Nm==="5173"?"ws://192.168.0.26:8080/api/ws/game":"wss://"+Fm+"/api/ws/game";function Yr(t,e){if(t>=e+1&&t<=e+8)return e;let s;return t>e+8?s=t-8:s=t-1,s>8&&(s=8),s<0&&(s=0),s}function Vm(t){const{clearAttackAnimation:e,restartAttackAnimation:n}=t,i=Y(b=>b.user),s=ae(b=>b.setOpenedCardDialog),o=ae(b=>b.setRestartOrder),r=ae(b=>b.setRestartPromptModal),c=ae(b=>b.isRematch),l=ae(b=>b.setIsRematch),u=ae(b=>b.setIsEndDialogOpen),d=ae(b=>b.setEndDialogText),h=ae(b=>b.setOpponentEmote),f=U(b=>b.gameId),p=U(b=>b.setBootStage),x=U(b=>b.setPlayers),y=U(b=>b.setPhase),m=U(b=>b.setMyAttackPhase),g=U(b=>b.setOpponentAttackPhase),v=U(b=>b.distributeCards),S=U(b=>b.setMessages),D=U(b=>b.setAllMessages),j=U(b=>b.setUsernameTurn),I=U(b=>b.moveCard),B=U(b=>b.moveCardToStack),W=U(b=>b.tiltCard),V=U(b=>b.setCardIdWithEffect),Z=U(b=>b.setCardIdWithTarget),ne=U(b=>b.setMemory),ee=U(b=>b.createToken),ie=U(b=>b.setModifiers),K=U(b=>b.clearBoard),te=U(b=>b.phase),X=U(b=>b.progressToNextPhase),be=U(b=>b.unsuspendAll),we=U(b=>b.setStartingPlayer),se=U(b=>b.setIsOpponentOnline),L=U(b=>b.flipCard),N=ae(b=>b.setArrowFrom),ge=ae(b=>b.setArrowTo),ve=ae(b=>b.setIsEffectArrow),Se=ae(b=>b.fieldOffset),oe=ae(b=>b.setFieldOffset),Q=ae(b=>b.setOpponentFieldOffset),xe=f.split("‗").filter(b=>b!==i)[0],Me=ye(b=>b.playCoinFlipSfx),je=ye(b=>b.playButtonClickSfx),Ee=ye(b=>b.playDrawCardSfx),at=ye(b=>b.playNextPhaseSfx),O=ye(b=>b.playOpponentPlaceCardSfx),_=ye(b=>b.playPassTurnSfx),C=ye(b=>b.playRevealCardSfx),M=ye(b=>b.playSecurityRevealSfx),R=ye(b=>b.playShuffleDeckSfx),$=ye(b=>b.playSuspendSfx),H=ye(b=>b.playTrashCardSfx),ce=ye(b=>b.playUnsuspendSfx),Ce=ye(b=>b.playRematchSfx);function fe(){const b=setTimeout(()=>V(""),2600);return()=>clearTimeout(b)}function le(){const b=setTimeout(()=>Z(""),3500);return()=>clearTimeout(b)}const E=kc($m,{shouldReconnect:()=>!0,onOpen:()=>E.sendMessage("/joinGame:"+f),onMessage:b=>{if(b.data==="[START_GAME]"){we(""),m(!1),g(!1);return}if(b.data.startsWith("[DISTRIBUTE_CARDS]:")){const P=b.data.substring(19);v(i,P,Ee),s(!1);return}if(b.data.startsWith("[PLAYER_INFO]:")){const P=b.data.substring(14),T=JSON.parse(P);x(T[0],T[1])}if(b.data.startsWith("[SET_BOOT_STAGE]:")){p(parseInt(b.data.substring(17)));return}if(b.data.startsWith("[SET_PHASE]:")){y(b.data.substring(12));return}if(b.data.startsWith("[SET_TURN]:")){j(b.data.substring(11));return}if(b.data.startsWith("[STARTING_PLAYER]")){const P=b.data.substring(18);we(P),p(Mi.SHOW_STARTING_PLAYER),c?Ce():Me(),j(P===i?i:xe),S(b.data);return}if(b.data.startsWith("[MOVE_CARD]:")){const P=b.data.substring(12).split(":"),T=P?.[0],F=P?.[1],G=P?.[2];T&&F&&G&&I(T,F,G);return}if(b.data.startsWith("[MOVE_CARD_TO_STACK]:")){const P=b.data.substring(21).split(":"),T=P?.[0],F=P?.[1],G=P?.[2],J=P?.[3],pe=P?.[4]==="undefined"?void 0:P?.[4];T&&F&&G&&J&&B(T,F,G,J,pe);return}if(b.data.startsWith("[TILT_CARD]:")){const P=b.data.substring(12).split(":"),T=P?.[0],F=P?.[1];T&&F&&W(T,F,$,ce);return}if(b.data.startsWith("[FLIP_CARD]:")){const P=b.data.substring(12).split(":"),T=P?.[0],F=P?.[1];T&&F&&L(T,F);return}if(b.data.startsWith("[ACTIVATE_EFFECT]:")){const P=b.data.substring(18);V(P),fe();return}if(b.data.startsWith("[ACTIVATE_TARGET]:")){const P=b.data.substring(18);Z(P),le();return}if(b.data.startsWith("[UPDATE_MEMORY]:")){const P=b.data.substring(16);ne(parseInt(P));return}if(b.data.startsWith("[CHAT_MESSAGE]:")){const P=b.data.substring(15);S(P);return}if(b.data.startsWith("[CHAT_HISTORY]:")){const P=b.data.substring(15);try{const T=JSON.parse(P);D(T)}catch{console.warn("Failed to parse chat history:",P)}return}if(b.data.startsWith("[EMOTE]:")){const P=b.data.substring(8);h(P);return}if(b.data.startsWith("[ATTACK]:")){const P=b.data.substring(9).split(":");if(P.length<3)return;const T=P[0]?.match(/\d+/),F=P[1]?.match(/\d+/);if(T?.length>0&&F?.length>0&&T[0]&&F[0]){const G=Number(T[0]);Q(Yr(G,Se));const J=Number(F[0]);oe(Yr(J,Se))}e?.(),N(P[0]),ge(P[1]),ve(P[2]==="true"),n(P[2]==="true");return}if(b.data.startsWith("[OPPONENT_ATTACK_PHASE]:")){const P=b.data.substring(24);g(P==="false"?!1:P);return}if(b.data.startsWith("[CREATE_TOKEN]:")){const P=b.data.substring(15).split(":");if(P.length<2)return;const T=P[0],F=P[1],G=Qc(F);G&&ee(G,yn.OPPONENT,T);return}if(b.data.startsWith("[SET_MODIFIERS]:")){const P=b.data.substring(16).split(":");if(P.length<3)return;const T=P[0],F=P[1];try{const G=JSON.parse(P.slice(2).join(":"));ie(T,F,G)}catch{console.warn("Failed to parse modifiers:",P.slice(2).join(":"))}return}if(b.data.includes("SFX"))switch(b.data){case"[REVEAL_SFX]":{C();break}case"[SECURITY_REVEAL_SFX]":{M();break}case"[PLACE_CARD_SFX]":{O();break}case"[DRAW_CARD_SFX]":{Ee();break}case"[SUSPEND_CARD_SFX]":{$();break}case"[UNSUSPEND_CARD_SFX]":{ce();break}case"[BUTTON_CLICK_SFX]":{je();break}case"[TRASH_CARD_SFX]":{H();break}case"[SHUFFLE_DECK_SFX]":{R();break}case"[NEXT_PHASE_SFX]":{at();break}case"[PASS_TURN_SFX]":{_();break}}switch(b.data){case"[HEARTBEAT]":{E.sendMessage(`${f}:/heartbeat`);break}case"[SURRENDER]":{u(!0),d("🎉 Your opponent surrendered!");break}case"[SECURITY_VIEWED]":{Kc("Opponent opened Security Stack!");break}case"[RESTART_AS_FIRST]":{o("second"),r(!0);break}case"[RESTART_AS_SECOND]":{o("first"),r(!0);break}case"[ACCEPT_RESTART]":{m(!1),g(!1),K(),l(!0),u(!1);break}case"[UPDATE_PHASE]":{te===gi.MAIN&&j(i),X();break}case"[RESOLVE_COUNTER_BLOCK]":{m(Jc.RESOLVE_ATTACK);break}case"[UNSUSPEND_ALL]":{be(yn.OPPONENT);break}case"[OPPONENT_DISCONNECTED]":{se(!1);break}case"[OPPONENT_RECONNECTED]":{se(!0);break}}}});return{sendMessage:E.sendMessage}}const Gm="/assets/opponent-security-apng-DRTWwoRK.png",Um=1,Wm=300,qm=300,Hm={g:"@lottiefiles/toolkit-js 0.33.2"},Ym=JSON.parse('[{"ty":3,"sr":1,"st":0,"op":41,"ip":0,"ddd":1,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[69,69,69]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[150,241,0]},"sa":{"a":0,"k":0},"o":{"a":0,"k":0},"rx":{"a":0,"k":0},"ry":{"a":0,"k":0},"rz":{"a":0,"k":0},"or":{"a":0,"k":[0,0,0]}},"ef":[],"ind":1},{"ty":3,"sr":1,"st":0,"op":41,"ip":0,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[960,540,0]},"s":{"a":0,"k":[100,100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[150,150,0]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"ef":[],"ind":2},{"ty":4,"sr":1,"st":20,"op":41,"ip":30,"ddd":1,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[9.96,-80.75,0]},"s":{"a":0,"k":[-100,100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-9.96,-218.75,0]},"sa":{"a":0,"k":0},"o":{"a":0,"k":100},"rx":{"a":0,"k":0},"ry":{"a":0,"k":0},"rz":{"a":0,"k":0},"or":{"a":0,"k":[0,0,0]}},"ef":[],"shapes":[{"ty":"gr","bm":0,"it":[{"ty":"sh","bm":0,"d":1,"ks":{"a":1,"k":[{"o":{"x":0.33,"y":0},"i":{"x":0.83,"y":1},"s":[{"c":true,"i":[[8,11.5],[-2,-30.75],[2.25,9]],"o":[[9.5,18.75],[1,-15.75],[-2.25,-9]],"v":[[1.5,-116.75],[15,-44.75],[17.75,-92.25]]}],"t":20},{"o":{"x":0.17,"y":0},"i":{"x":0.83,"y":1},"s":[{"c":true,"i":[[3.75,7.11],[-1.05,-25.58],[0.55,10.69]],"o":[[1.04,22.5],[3.12,-15.62],[-0.56,-10.86]],"v":[[1.14,-118.02],[3.77,-44.39],[9.24,-87.54]]}],"t":25},{"o":{"x":0.17,"y":0},"i":{"x":0.83,"y":1},"s":[{"c":true,"i":[[0.58,7.74],[-1.05,-25.58],[0,11.23]],"o":[[1.04,22.5],[-0.05,-15.17],[0,-10.87]],"v":[[-5.2,-97.91],[-4.02,-45.47],[-4.17,-75.95]]}],"t":30},{"o":{"x":0.17,"y":0},"i":{"x":0.67,"y":1},"s":[{"c":true,"i":[[3.75,7.11],[-1.05,-25.58],[0.55,10.69]],"o":[[1.04,22.5],[3.12,-15.62],[-0.56,-10.86]],"v":[[1.14,-118.02],[3.77,-44.39],[9.24,-87.54]]}],"t":35},{"s":[{"c":true,"i":[[8,11.5],[-2,-30.75],[2.25,9]],"o":[[9.5,18.75],[1,-15.75],[-2.25,-9]],"v":[[1.5,-116.75],[15,-44.75],[17.75,-92.25]]}],"t":40}]}},{"ty":"st","bm":0,"lc":1,"lj":1,"ml":4,"o":{"a":0,"k":100},"w":{"a":0,"k":0},"c":{"a":0,"k":[0.5451,0.8314,0.8745]}},{"ty":"fl","bm":0,"c":{"a":0,"k":[0.902,0.6,0.6]},"r":1,"o":{"a":0,"k":100}},{"ty":"tr","a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[0,0]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}}]}],"ind":3,"parent":1},{"ty":4,"sr":1,"st":0,"op":20,"ip":10,"ddd":1,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[9.96,-80.75,0]},"s":{"a":0,"k":[-100,100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-9.96,-218.75,0]},"sa":{"a":0,"k":0},"o":{"a":0,"k":100},"rx":{"a":0,"k":0},"ry":{"a":0,"k":0},"rz":{"a":0,"k":0},"or":{"a":0,"k":[0,0,0]}},"ef":[],"shapes":[{"ty":"gr","bm":0,"it":[{"ty":"sh","bm":0,"d":1,"ks":{"a":1,"k":[{"o":{"x":0.33,"y":0},"i":{"x":0.83,"y":1},"s":[{"c":true,"i":[[8,11.5],[-2,-30.75],[2.25,9]],"o":[[9.5,18.75],[1,-15.75],[-2.25,-9]],"v":[[1.5,-116.75],[15,-44.75],[17.75,-92.25]]}],"t":0},{"o":{"x":0.17,"y":0},"i":{"x":0.83,"y":1},"s":[{"c":true,"i":[[3.75,7.11],[-1.05,-25.58],[0.55,10.69]],"o":[[1.04,22.5],[3.12,-15.62],[-0.56,-10.86]],"v":[[1.14,-118.02],[3.77,-44.39],[9.24,-87.54]]}],"t":5},{"o":{"x":0.17,"y":0},"i":{"x":0.83,"y":1},"s":[{"c":true,"i":[[0.58,7.74],[-1.05,-25.58],[0,11.23]],"o":[[1.04,22.5],[-0.05,-15.17],[0,-10.87]],"v":[[-5.2,-97.91],[-4.02,-45.47],[-4.17,-75.95]]}],"t":10},{"o":{"x":0.17,"y":0},"i":{"x":0.67,"y":1},"s":[{"c":true,"i":[[3.75,7.11],[-1.05,-25.58],[0.55,10.69]],"o":[[1.04,22.5],[3.12,-15.62],[-0.56,-10.86]],"v":[[1.14,-118.02],[3.77,-44.39],[9.24,-87.54]]}],"t":15},{"s":[{"c":true,"i":[[8,11.5],[-2,-30.75],[2.25,9]],"o":[[9.5,18.75],[1,-15.75],[-2.25,-9]],"v":[[1.5,-116.75],[15,-44.75],[17.75,-92.25]]}],"t":20}]}},{"ty":"st","bm":0,"lc":1,"lj":1,"ml":4,"o":{"a":0,"k":100},"w":{"a":0,"k":0},"c":{"a":0,"k":[0.5451,0.8314,0.8745]}},{"ty":"fl","bm":0,"c":{"a":0,"k":[0.902,0.6,0.6]},"r":1,"o":{"a":0,"k":100}},{"ty":"tr","a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[0,0]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}}]}],"ind":4,"parent":1},{"ty":4,"sr":1,"st":20,"op":30,"ip":20,"ddd":1,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[9.96,-80.75,0]},"s":{"a":1,"k":[{"o":{"x":0.33,"y":0},"i":{"x":0.67,"y":1},"s":[0,0,0],"t":20},{"s":[100,100,100],"t":25}]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[9.96,-218.75,0]},"sa":{"a":0,"k":0},"o":{"a":0,"k":100},"rx":{"a":0,"k":0},"ry":{"a":0,"k":0},"rz":{"a":0,"k":0},"or":{"a":0,"k":[0,0,0]}},"ef":[],"shapes":[{"ty":"gr","bm":0,"it":[{"ty":"sh","bm":0,"d":1,"ks":{"a":1,"k":[{"o":{"x":0.33,"y":0},"i":{"x":0.83,"y":1},"s":[{"c":true,"i":[[8,11.5],[-2,-30.75],[2.25,9]],"o":[[9.5,18.75],[1,-15.75],[-2.25,-9]],"v":[[1.5,-116.75],[15,-44.75],[17.75,-92.25]]}],"t":20},{"o":{"x":0.17,"y":0},"i":{"x":0.83,"y":1},"s":[{"c":true,"i":[[3.75,7.11],[-1.05,-25.58],[0.55,10.69]],"o":[[1.04,22.5],[3.12,-15.62],[-0.56,-10.86]],"v":[[1.14,-118.02],[3.77,-44.39],[9.24,-87.54]]}],"t":25},{"o":{"x":0.17,"y":0},"i":{"x":0.83,"y":1},"s":[{"c":true,"i":[[0.58,7.74],[-1.05,-25.58],[0,11.23]],"o":[[1.04,22.5],[-0.05,-15.17],[0,-10.87]],"v":[[-5.2,-97.91],[-4.02,-45.47],[-4.17,-75.95]]}],"t":30},{"o":{"x":0.17,"y":0},"i":{"x":0.67,"y":1},"s":[{"c":true,"i":[[3.75,7.11],[-1.05,-25.58],[0.55,10.69]],"o":[[1.04,22.5],[3.12,-15.62],[-0.56,-10.86]],"v":[[1.14,-118.02],[3.77,-44.39],[9.24,-87.54]]}],"t":35},{"s":[{"c":true,"i":[[8,11.5],[-2,-30.75],[2.25,9]],"o":[[9.5,18.75],[1,-15.75],[-2.25,-9]],"v":[[1.5,-116.75],[15,-44.75],[17.75,-92.25]]}],"t":40}]}},{"ty":"st","bm":0,"lc":1,"lj":1,"ml":4,"o":{"a":0,"k":100},"w":{"a":0,"k":0},"c":{"a":0,"k":[0.5451,0.8314,0.8745]}},{"ty":"fl","bm":0,"c":{"a":0,"k":[0.902,0.6,0.6]},"r":1,"o":{"a":0,"k":100}},{"ty":"tr","a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[0,0]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}}]}],"ind":5,"parent":1},{"ty":4,"sr":1,"st":0,"op":10,"ip":0,"ddd":1,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[9.96,-80.75,0]},"s":{"a":1,"k":[{"o":{"x":0.33,"y":0},"i":{"x":0.67,"y":1},"s":[0,0,0],"t":0},{"s":[100,100,100],"t":5}]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[9.96,-218.75,0]},"sa":{"a":0,"k":0},"o":{"a":0,"k":100},"rx":{"a":0,"k":0},"ry":{"a":0,"k":0},"rz":{"a":0,"k":0},"or":{"a":0,"k":[0,0,0]}},"ef":[],"shapes":[{"ty":"gr","bm":0,"it":[{"ty":"sh","bm":0,"d":1,"ks":{"a":1,"k":[{"o":{"x":0.33,"y":0},"i":{"x":0.83,"y":1},"s":[{"c":true,"i":[[8,11.5],[-2,-30.75],[2.25,9]],"o":[[9.5,18.75],[1,-15.75],[-2.25,-9]],"v":[[1.5,-116.75],[15,-44.75],[17.75,-92.25]]}],"t":0},{"o":{"x":0.17,"y":0},"i":{"x":0.83,"y":1},"s":[{"c":true,"i":[[3.75,7.11],[-1.05,-25.58],[0.55,10.69]],"o":[[1.04,22.5],[3.12,-15.62],[-0.56,-10.86]],"v":[[1.14,-118.02],[3.77,-44.39],[9.24,-87.54]]}],"t":5},{"o":{"x":0.17,"y":0},"i":{"x":0.83,"y":1},"s":[{"c":true,"i":[[0.58,7.74],[-1.05,-25.58],[0,11.23]],"o":[[1.04,22.5],[-0.05,-15.17],[0,-10.87]],"v":[[-5.2,-97.91],[-4.02,-45.47],[-4.17,-75.95]]}],"t":10},{"o":{"x":0.17,"y":0},"i":{"x":0.67,"y":1},"s":[{"c":true,"i":[[3.75,7.11],[-1.05,-25.58],[0.55,10.69]],"o":[[1.04,22.5],[3.12,-15.62],[-0.56,-10.86]],"v":[[1.14,-118.02],[3.77,-44.39],[9.24,-87.54]]}],"t":15},{"s":[{"c":true,"i":[[8,11.5],[-2,-30.75],[2.25,9]],"o":[[9.5,18.75],[1,-15.75],[-2.25,-9]],"v":[[1.5,-116.75],[15,-44.75],[17.75,-92.25]]}],"t":20}]}},{"ty":"st","bm":0,"lc":1,"lj":1,"ml":4,"o":{"a":0,"k":100},"w":{"a":0,"k":0},"c":{"a":0,"k":[0.5451,0.8314,0.8745]}},{"ty":"fl","bm":0,"c":{"a":0,"k":[0.902,0.6,0.6]},"r":1,"o":{"a":0,"k":100}},{"ty":"tr","a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[0,0]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}}]}],"ind":6,"parent":1},{"ty":4,"sr":1,"st":0,"op":41,"ip":0,"ddd":1,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[100,100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[0,-138,0]},"sa":{"a":0,"k":0},"o":{"a":0,"k":100},"rx":{"a":0,"k":0},"ry":{"a":0,"k":0},"rz":{"a":0,"k":0},"or":{"a":0,"k":[0,0,0]}},"ef":[],"shapes":[{"ty":"gr","bm":0,"it":[{"ty":"sh","bm":0,"d":1,"ks":{"a":1,"k":[{"o":{"x":1,"y":0},"i":{"x":0.83,"y":0.83},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[0.5,-136],[-26,-95.87],[-19.75,27.75],[20,28],[27.5,-96]]}],"t":0},{"o":{"x":0.17,"y":0.17},"i":{"x":0.67,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[0.38,-136.27],[-16.69,-94.05],[-10.16,30.17],[10.49,28.89],[22.18,-101.45]]}],"t":5},{"o":{"x":0.33,"y":0},"i":{"x":0.83,"y":0.83},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[0.25,-136.55],[-7.3,-94.29],[-3.06,27.59],[3.48,27.61],[8.09,-106.54]]}],"t":10},{"o":{"x":0.17,"y":0.17},"i":{"x":0,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[0.38,-136.27],[-19.95,-100.17],[-10.16,27.67],[10.49,30.31],[16.56,-96.42]]}],"t":15},{"o":{"x":1,"y":0},"i":{"x":0.83,"y":0.83},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[0.5,-134.87],[-26,-95.87],[-19.75,28.88],[20,29.13],[27.5,-94.87]]}],"t":20},{"o":{"x":0.17,"y":0.17},"i":{"x":0.67,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[0.38,-136.27],[-16.69,-94.05],[-10.16,30.17],[10.49,28.89],[22.18,-101.45]]}],"t":25},{"o":{"x":0.33,"y":0},"i":{"x":0.83,"y":0.83},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[0.25,-136.55],[-7.3,-94.29],[-3.06,27.59],[3.48,27.61],[8.09,-106.54]]}],"t":30},{"o":{"x":0.17,"y":0.17},"i":{"x":0,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[0.38,-136.27],[-19.95,-100.17],[-10.16,27.67],[10.49,30.31],[16.56,-96.42]]}],"t":35},{"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[0.5,-134.87],[-26,-95.87],[-19.75,28.88],[20,29.13],[27.5,-94.87]]}],"t":40}]}},{"ty":"st","bm":0,"lc":1,"lj":1,"ml":4,"o":{"a":0,"k":100},"w":{"a":0,"k":0},"c":{"a":0,"k":[0.5451,0.8314,0.8745]}},{"ty":"fl","bm":0,"c":{"a":0,"k":[1,1,1]},"r":1,"o":{"a":0,"k":100}},{"ty":"tr","a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[0,0]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}}]}],"ind":7,"parent":1},{"ty":4,"sr":1,"st":0,"op":41,"ip":0,"ddd":1,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[101,101,101]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[0,-138,0]},"sa":{"a":0,"k":0},"o":{"a":0,"k":100},"rx":{"a":0,"k":0},"ry":{"a":0,"k":0},"rz":{"a":0,"k":0},"or":{"a":0,"k":[0,0,0]}},"ef":[],"shapes":[{"ty":"gr","bm":0,"it":[{"ty":"sh","bm":0,"d":1,"ks":{"a":1,"k":[{"o":{"x":1,"y":0},"i":{"x":0.83,"y":0.83},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[55.77,40.51],[-55.76,40.76],[-68.64,55.89],[-56,70.64],[-19.01,70.52],[-19,119.9],[0.02,136.26],[18.87,119.9],[19.25,70.76],[55.39,70.76],[69.01,55.26]]}],"t":0},{"o":{"x":0.17,"y":0.17},"i":{"x":0.67,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[29.87,37.38],[-29.36,43.36],[-36.52,58.68],[-28.26,70.83],[-10.53,71.26],[-10.03,120.95],[0.02,136.51],[10.08,120.95],[11.02,71.38],[31.74,71.6],[38.03,53.38]]}],"t":5},{"o":{"x":0.33,"y":0},"i":{"x":0.83,"y":0.83},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[6.44,41],[-5.44,41.01],[-5.07,56.51],[-4.44,72],[-4.53,72],[-3.53,122],[0.02,136.75],[3.15,122],[5.27,72],[5.19,72],[5.94,56.44]]}],"t":10},{"o":{"x":0.17,"y":0.17},"i":{"x":0,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[28.79,43.95],[-29.36,37.51],[-40.1,53.73],[-29.7,72.97],[-10.53,71.26],[-10.03,120.95],[0.02,136.51],[10.08,120.95],[11.02,71.38],[29.05,69.01],[37.67,56.89]]}],"t":15},{"o":{"x":1,"y":0},"i":{"x":0.83,"y":0.83},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[55.77,40.51],[-55.76,40.76],[-68.64,55.89],[-56,70.64],[-19.01,70.52],[-19,119.9],[0.02,136.26],[18.87,119.9],[19.25,70.76],[55.39,70.76],[69.01,55.26]]}],"t":20},{"o":{"x":0.17,"y":0.17},"i":{"x":0.67,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[29.87,37.38],[-29.36,43.36],[-36.52,58.68],[-28.26,70.83],[-10.53,71.26],[-10.03,120.95],[0.02,136.51],[10.08,120.95],[11.02,71.38],[31.74,71.6],[38.03,53.38]]}],"t":25},{"o":{"x":0.33,"y":0},"i":{"x":0.83,"y":0.83},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[6.44,41],[-5.44,41.01],[-5.07,56.51],[-4.44,72],[-4.53,72],[-3.53,122],[0.02,136.75],[3.15,122],[5.27,72],[5.19,72],[5.94,56.44]]}],"t":30},{"o":{"x":0.17,"y":0.17},"i":{"x":0,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[28.79,43.95],[-29.36,37.51],[-40.1,53.73],[-29.7,72.97],[-10.53,71.26],[-10.03,120.95],[0.02,136.51],[10.08,120.95],[11.02,71.38],[29.05,69.01],[37.67,56.89]]}],"t":35},{"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[55.77,40.51],[-55.76,40.76],[-68.64,55.89],[-56,70.64],[-19.01,70.52],[-19,119.9],[0.02,136.26],[18.87,119.9],[19.25,70.76],[55.39,70.76],[69.01,55.26]]}],"t":40}]}},{"ty":"st","bm":0,"lc":1,"lj":1,"ml":4,"o":{"a":0,"k":100},"w":{"a":0,"k":0},"c":{"a":0,"k":[0.5451,0.8314,0.8745]}},{"ty":"fl","bm":0,"c":{"a":0,"k":[1,1,1]},"r":1,"o":{"a":0,"k":100}},{"ty":"tr","a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[0,0]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}}]}],"ind":8,"parent":1}]'),Qm="5.7.0",Jm=30,Km=41,Xm=0,Zm=[],eg={ddd:Um,h:Wm,w:qm,meta:Hm,layers:Ym,v:Qm,fr:Jm,op:Km,ip:Xm,assets:Zm};function tg(){const t=U(h=>h.opponentSecurity),e=U(h=>h.cardIdWithEffect),n=U(h=>h.cardIdWithTarget),i=t.find(h=>h.id===e)!==void 0,s=t.find(h=>h.id===n)!==void 0,{setNodeRef:o,isOver:r}=Xc({id:"opponentSecurity",data:{accept:["card"]}}),[c,l]=w.useState(!1),{show:u}=Yn({id:"opponentHandCardMenu",props:{index:-1}}),d=Y(h=>h.cardWidth/2.25);return a.jsx(ng,{children:a.jsxs(ig,{ref:o,children:[r?a.jsx(Ft,{animationData:eg,loop:!0,style:{zIndex:1e5}}):a.jsx(ia,{TransitionComponent:Zc,sx:{width:"100%"},open:(t.length===0?!1:c)||i||s,onClose:()=>l(!1),onOpen:()=>l(!!t.length),arrow:!0,placement:"bottom",componentsProps:rg(t.length),title:a.jsx("div",{style:{position:"relative",display:"flex",flexWrap:"wrap",gap:"5px"},children:t.map((h,f)=>a.jsxs(w.Fragment,{children:[f===0&&a.jsx(el,{sx:{position:"absolute",zIndex:5,fontSize:35,color:"#d52563",left:9,top:-21,filter:"dropShadow(0 0 2px black)"}},h.id+"_arrow"),a.jsx(aa,{card:h,location:"opponentSecurity",style:{width:"50px"},onContextMenu:p=>u({event:p,props:{index:f,location:"opponentHand",id:h.id,name:h.name}})},h.id)]},h.id+"_fragment"))}),children:a.jsx(sg,{id:"opponentSecurity",style:{fontSize:d},children:t.length})}),a.jsx(og,{alt:"oppSS",src:Gm})]})})}const ng=k.div`
    grid-area: SS;
    height: 100%;
    width: 100%;
    z-index: 10;
`,ig=k.div`
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`,sg=k.span`
    z-index: 5;
    font-family: Awsumsans, sans-serif;
    font-style: normal;
    font-size: 2em;
    text-shadow: #111921 1px 1px 1px;
    color: #cb6377;
    user-select: none;
    cursor: help;
    @media (max-height: 500px) {
        font-size: 1.5em;
    }
`,og=k.img`
    width: 130%;
    position: absolute;
    left: 50%;
    top: 47%;
    transform: translate(-50%, -50%);
`;function rg(t){return{tooltip:{style:{backgroundColor:"#0c0c0c",borderRadius:6,boxShadow:"inset 0 0 0 2px #961626",filter:"drop-shadow(1px 2px 3px black)",padding:10,minWidth:280,maxWidth:`${t<=10?t*55+30:580}px`}},arrow:{style:{color:"#961626"}}}}function ag(){const t=Y(o=>o.user),e=U(o=>o.opponentEggDeck),n=U(o=>o.player1),i=U(o=>o.player2),s=n.username===t?i.eggSleeveName:n.eggSleeveName;return a.jsxs(cg,{children:[e.length!==0&&a.jsx(lg,{children:e.length}),e.length!==0&&a.jsx(dg,{alt:"egg-deck",src:ca("Digi-Egg",s)})]})}const cg=k.div`
    grid-area: egg-deck;
    position: relative;
    display: flex;
    flex-direction: column;
    transform: translate(-3%, -14%);
`,lg=k.span`
    width: 100%;
    position: absolute;
    top: -25px;
    left: 52%;
    transform: translateX(-50%);
    font-family: Awsumsans, sans-serif;
    font-style: italic;
    transition: all 0.1s ease;
    @media (max-height: 600px) {
        font-size: 0.8em;
    }
`,dg=k.img`
    height: 100%;
    margin: 0 12.5% 0 12.5%;
    border-radius: 3px;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
`;function ug(){const t=Y(o=>o.user),e=U(o=>o.opponentDeckField),n=U(o=>o.player1),i=U(o=>o.player2),s=n.username===t?i.mainSleeveName:n.mainSleeveName;return a.jsxs(hg,{children:[a.jsx(fg,{children:e.length}),a.jsx(pg,{alt:"sleeve",src:ca("Digimon",s)})]})}const hg=k.div`
    grid-area: deck;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    transform: translateY(-10%);
`,fg=k.span`
    position: absolute;
    top: 0;
    width: 100%;
    transform: translateY(-105%);
    font-family: Awsumsans, sans-serif;
    font-style: italic;
    @media (max-height: 500px) {
        font-size: 0.8em;
    }
`,pg=k.img`
    height: 100%;
    border-radius: 3px;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    box-shadow: 1px 1px 0 0 black;
`;function xg(){const{show:t}=Yn({id:"opponentHandCardMenu",props:{index:-1}}),e=U(u=>u.opponentHand),n=Y(u=>u.cardWidth*1.1),i=5,s=n+i,o=s*6.25-i,r=e.length<=6?s:(o-n)/(e.length-1),c=n+r*(e.length-1),l=(o-c)/2;return a.jsxs(mg,{cardCount:e.length,children:[e.map((u,d)=>a.jsx("div",{onContextMenu:h=>t({event:h,props:{index:d,location:"opponentHand",id:u.id,name:u.name}}),style:{position:"absolute",left:l+d*r},children:a.jsx(aa,{card:u,location:"opponentHand",style:{width:n*.9,transition:"all 0.2s ease",filter:"drop-shadow(-1px 1px 2px rgba(0, 0, 0, 0.8))",pointerEvents:u.isFaceUp?"auto":"none"}},u.id)})),e.length>7&&a.jsx(gg,{children:e.length})]})}const mg=k.div`
    //touch-action: none;
    grid-area: hand;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
`,gg=k.span`
    font-family: Awsumsans, sans-serif;
    font-style: italic;
    font-size: 20px;
    opacity: 0.4;
    position: absolute;
    bottom: 1%;
    left: -4.5%;
    pointer-events: none;
`;function yg(){const t=U(d=>d.opponentTrash),e=U(d=>d.getCardLocationById),n=U(d=>d.cardIdWithEffect),i=U(d=>d.cardIdWithTarget),s=ae(d=>d.openedCardDialog),o=ae(d=>d.setOpenedCardDialog),r=e(n??"")==="opponentTrash",c=e(i??"")==="opponentTrash",l=s===ko.OPPONENT_TRASH;function u(){o(l?!1:ko.OPPONENT_TRASH)}return a.jsxs(bg,{children:[t.length===0&&!l&&a.jsx(vg,{children:a.jsx(Sg,{})}),t.length>0&&!l&&a.jsx(kg,{src:t[t.length-1]?.imgUrl,alt:"myTrash",title:"Open trash",onClick:u,onError:nl}),l&&a.jsx(Cg,{onClick:u,className:"button",children:a.jsx(ra,{style:{color:"ghostwhite",fontSize:"250%"}})}),a.jsx(wg,{children:t.length}),r&&a.jsx(Qr,{animationData:il,loop:!0}),c&&a.jsx(Qr,{animationData:sl,loop:!0})]})}const bg=k.div`
    grid-area: trash;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    transform: translateY(-10%) scale(1.1);
`,vg=k.div`
    height: 100%;
    aspect-ratio: 7 / 10;
    border-radius: 3px;
    background: rgba(15, 15, 15, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(220, 220, 220, 0.8);
    font-family: Naston, sans-serif;
    transition: all 0.1s ease-in-out;
`,kg=k.img`
    height: 100%;
    aspect-ratio: 7 / 10;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    filter: drop-shadow(${({isOver:t})=>t?"0px 0px 1px whitesmoke":"1px 1px 2px #060e18"});
    scale: 1.1;

    &:hover {
        filter: drop-shadow(0px 0px 3px #af0c3d) brightness(1.1) saturate(1.2);
    }
`,wg=k.span`
    position: absolute;
    top: -25px;
    left: 46%;
    font-family: Awsumsans, sans-serif;
    font-style: italic;
    transition: all 0.1s ease;
    @media (max-height: 500px) {
        font-size: 0.8em;
        left: 42.5%;
        top: -22px;
    }
`,Qr=k(Ft)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
`,Sg=k(tl)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.5;
    font-size: 2.5em;
    @media (max-height: 500px) {
        font-size: 1.25em;
    }
`,Cg=k.div`
    height: 100%;
    aspect-ratio: 7 / 10;
    border-radius: 5px;
    background: #7c111e;
    box-shadow: inset 0 0 5px 2px rgba(245, 245, 245, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.15s;

    &:hover {
        background: #91182b;
        box-shadow: inset 0 0 2px 2px rgba(213, 213, 213, 0.3);
    }
`;function Eg({wsUtils:t}){const e=U(l=>l.bootStage),n=U(l=>l.isOpponentOnline),i=U(l=>l.startingPlayer),s=ae(l=>l.opponentEmote),o=i===t?.matchInfo.opponentName,[r,c]=w.useState(!1);return a.jsx(_g,{ref:l=>{const u=requestAnimationFrame(()=>c((l?.children?.length??0)>0));return()=>cancelAnimationFrame(u)},hasChildren:r,children:s?a.jsx(ol,{emote:s}):a.jsx(a.Fragment,{children:n?a.jsx(a.Fragment,{children:e===Mi.SHOW_STARTING_PLAYER&&a.jsx(Ft,{animationData:rl,autoplay:o,loop:!1,initialSegment:[0,70],style:{transform:"translateY(20%) scaleY(-1)"}})}):a.jsx(bc,{fontSize:"large",color:"error"})})})}const _g=k.div`
    grid-area: event-utils;
    height: 84%;
    width: 95%;
    margin: 1% 1% 12% 1%;
    padding: 1.5%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: linear-gradient(
        20deg,
        rgba(54, 93, 131, 0.32) 0%,
        rgba(48, 78, 112, 0.32) 70%,
        rgba(24, 46, 61, 0.32) 100%
    );
    box-shadow: inset 2px 3px 10px 3px rgba(71, 161, 196, 0.25);
    filter: drop-shadow(0 0 2px rgba(5, 5, 5, 0.5));
    animation: ${({hasChildren:t})=>t?"pulse 1.5s infinite":"none"};

    &&:before {
        content: "";
        position: absolute;
        top: 5%;
        left: 2.5%;
        width: 95%;
        height: 90%;
        border-radius: 5px;
        background: linear-gradient(20deg, rgb(24, 24, 24) 0%, rgb(10, 10, 10) 70%, rgb(0, 0, 0) 100%);
        z-index: -1;
        box-shadow: inset 0 0 3px 1px rgba(146, 255, 245, 0.15);
    }

    @keyframes pulse {
        0% {
            filter: drop-shadow(0 0 1px rgba(5, 5, 5, 0.5));
            box-shadow: inset 0 0 3px 1px rgba(146, 255, 245, 0.15);
        }
        20% {
            filter: drop-shadow(0 0 2px rgba(187, 215, 116, 0.8));
            box-shadow: inset 0 0 3px 1px rgba(105, 255, 215, 0.25);
        }
        55% {
            filter: drop-shadow(0 0 2px rgb(255, 206, 103));
            box-shadow: inset 0 0 4px 2px rgba(105, 255, 215, 0.35);
        }
        80% {
            filter: drop-shadow(0 0 2px rgba(187, 215, 116, 0.8));
            box-shadow: inset 0 0 3px 1px rgba(105, 255, 215, 0.25);
        }
        100% {
            filter: drop-shadow(0 0 1px rgba(5, 5, 5, 0.5));
            box-shadow: inset 0 0 3px 1px rgba(146, 255, 245, 0.15);
        }
    }
`;function Og({matchInfo:t,isOpen:e,setIsOpen:n}){const i=U(d=>d.messages),[s,o]=w.useState(""),{mutate:r,isPending:c}=Hn("/api/report","POST");function l(){Pg(s,i,t,r).then(()=>n(!1)),localStorage.setItem("isReported",JSON.stringify(!0))}const u=s.length>=700?` ${s.length}/800`:"";return a.jsxs(Us,{onClose:()=>n(!1),open:e,children:[a.jsx(Ag,{children:"Report "+t.opponentName+":"}),a.jsx(Ws,{children:a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,alignItems:"center",width:300,maxWidth:"100vw",padding:5},children:[a.jsx("span",{style:{fontFamily:"League Spatan, sans-serif",color:"ghostwhite"},children:"A report containing the chat history will be sent to the moderators for review. You can only file one report per game."}),a.jsx(Tg,{label:"Reason"+u,variant:"outlined",multiline:!0,rows:5,fullWidth:!0,focused:!0,color:s.length>=800?"error":"warning",value:s,onChange:d=>{d.target.value.length<=800&&o(d.target.value)}}),a.jsx(Ig,{disabled:s.length===0||c,onClick:l,children:"SUBMIT REPORT"}),a.jsx(Mg,{onClick:()=>n(!1),children:"CANCEL"})]})})]})}async function Pg(t,e,n,i){const s=Dg(e,n),o=jg(s,1024);for(let r=0;r<o.length;r++){const c=o[r];await i({payload:{embeds:[{fields:[{name:"`From`",value:n.user,inline:!0},{name:"`Reported User`",value:n.opponentName,inline:!0},...o.length>1?[{name:"`Part`",value:`${r+1}/${o.length}`,inline:!0}]:[],...r===0?[{name:"`Message`",value:t}]:[],{name:"`Chat History`",value:c}]}]}}),r<o.length-1&&await new Promise(l=>setTimeout(l,500))}}function Dg(t,e){return t.map(n=>{if(n.startsWith("[STARTING_PLAYER]≔"))return"";const s=n.split("﹕",2)[0]===e.user,o=n.split("﹕",2)[1],r=s?e.user:e.opponentName;return o.startsWith("[FIELD_UPDATE]≔")?"*"+r+" plays "+o.split("≔")[1]+"*":"**"+r+":** "+o}).reverse().join(`
`)}function jg(t,e){const n=[];let i=0;for(;i<t.length;){const s=t.slice(i,i+e),o=s.lastIndexOf(`
`);o!==-1?(n.push(t.slice(i,i+o+1)),i+=o+1):(n.push(s),i+=e)}return n}const Ag=k(sa)`
    font-family:
        League Spartan,
        sans-serif;
    font-size: 24px;
    color: ghostwhite;
    margin-left: 5px;
    padding-bottom: 0;
`,Tg=k(al)`
    .MuiInputBase-root {
        color: ghostwhite;
        font-family: Cousine, sans-serif;
    }
`,Ig=k.button`
    width: fit-content;
    height: 2.5em;
    flex-shrink: 0;
    border-radius: 0;
    background: ${({disabled:t})=>t?"#62421BFF":"#c97e1d"};
    pointer-events: ${({disabled:t})=>t?"none":"unset"};
    font-family:
        Pixel Digivolve,
        sans-serif;
    font-size: 20px;
    color: #0c0c0c;
    box-shadow: 6px 12px 1px 0 rgb(0, 0, 0);
    transition: all 0.15s ease;

    &:hover {
        background: #efb447;
        transform: translateY(1px);
        filter: contrast(1.15) saturate(1.25);
        box-shadow: 4px 8px 1px 0 rgba(0, 0, 0, 0.9);
    }

    &:focus {
        outline: none;
    }

    &:active {
        background: #efc847;
        transform: translateY(2px);
        filter: contrast(1.3) saturate(1.25);
        box-shadow: 2px 4px 1px 0 rgba(0, 0, 0, 0.8);
    }
`,Mg=k.button`
    width: fit-content;
    height: 2.5em;
    flex-shrink: 0;
    border-radius: 0;
    background: whitesmoke;
    pointer-events: ${({disabled:t})=>t?"none":"unset"};
    font-family:
        Pixel Digivolve,
        sans-serif;
    font-size: 20px;
    color: #0c0c0c;
    box-shadow: 6px 12px 1px 0 rgb(0, 0, 0);
    transition: all 0.15s ease;

    &:hover {
        background: ghostwhite;
        transform: translateY(1px);
        filter: contrast(1.15) saturate(1.25);
        box-shadow: 4px 8px 1px 0 rgba(0, 0, 0, 0.9);
    }

    &:focus {
        outline: none;
    }

    &:active {
        background: ghostwhite;
        transform: translateY(2px);
        filter: contrast(1.3) saturate(1.25);
        box-shadow: 2px 4px 1px 0 rgba(0, 0, 0, 0.8);
    }
`;function Rg({matchInfo:t,iconFontSize:e}){const[n,i]=w.useState(!1),s=localStorage.getItem("isReported")==="true";return a.jsxs(a.Fragment,{children:[a.jsx(Og,{isOpen:n,setIsOpen:i,matchInfo:t}),a.jsx(Bg,{disabled:s,className:"button",onClick:()=>i(!0),style:{gridArea:"report",fontSize:e,transform:"translate(-4px, 0.15em)"},children:a.jsx($x,{className:"button",sx:{fontSize:e,color:"indianred"}})})]})}const Bg=k.div`
    width: 100%;
    height: 80%;
    background: rgba(12, 21, 16, 0.25);
    border: 1px solid rgba(124, 124, 118, 0.4);
    border-left: none;
    border-radius: 0 3px 3px 0;
    box-shadow: inset 5px 5px 30px 5px rgba(255, 255, 255, 0.05);
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5)) ${({disabled:t})=>t?"grayscale(1)":"none"};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    pointer-events: ${({disabled:t})=>t?"none":"unset"};

    &:hover {
        background: rgba(26, 179, 201, 0.35);
    }
`;function zg({setRestartRequestModal:t,wsUtils:e}){const{sendMessage:n,matchInfo:{gameId:i}}=e;function s(r){n(`${i}:/restartRequest${r}`),Gs("Sent restart request!"),t(!1)}const o=[{text:"GO FIRST",onClick:()=>s("AsFirst"),color:"#1a99e8"},{text:"GO SECOND",onClick:()=>s("AsSecond"),color:"#e79831"},{text:"CANCEL",onClick:()=>t(!1),color:"#D9D9D9"}];return a.jsx(Qs,{text:"Send Rematch request:",buttonProps:o})}function Lg({setSurrenderModal:t,wsUtils:e}){const{sendMessage:n,matchInfo:{gameId:i}}=e,s=ae(l=>l.setIsEndDialogOpen),o=ae(l=>l.setEndDialogText);function r(){t(!1),s(!0),o("🏳️ You surrendered."),n(`${i}:/surrender`)}const c=[{text:"SURRENDER",onClick:r,color:"#C03427"},{text:"CANCEL",onClick:()=>t(!1),color:"#D9D9D9"}];return a.jsx(Qs,{text:"Do you want to surrender?",buttonProps:c})}function Ng({wsUtils:t}){const e=Y(r=>r.cardWidth*.45),[n,i]=w.useState(!1),[s,o]=w.useState(!1);return a.jsxs(Fg,{children:[t&&a.jsxs(a.Fragment,{children:[n&&a.jsx(zg,{setRestartRequestModal:i,wsUtils:t}),s&&a.jsx(Lg,{setSurrenderModal:o,wsUtils:t}),a.jsx(Rg,{matchInfo:t.matchInfo,iconFontSize:`${e-5}px`}),a.jsx(Jr,{className:"button",onClick:()=>o(!0),style:{gridArea:"surrender",transform:"translate(-4px, -1px)"},children:a.jsx(Mx,{className:"button",sx:{fontSize:e-5,color:"blanchedalmond"}})}),a.jsx(Jr,{className:"button",onClick:()=>i(!0),style:{gridArea:"restart",transform:`translate(-4px, -${e/5}px)`},children:a.jsx(Vx,{className:"button",sx:{fontSize:e-5,color:"mediumaquamarine"}})})]}),a.jsx(tg,{}),a.jsx(ag,{}),a.jsx(cl,{side:yn.OPPONENT,wsUtils:t}),a.jsx(ll,{side:yn.OPPONENT}),a.jsx($g,{children:a.jsx(dl,{side:yn.OPPONENT})}),a.jsx(Eg,{wsUtils:t}),a.jsx(yg,{}),a.jsx(ug,{}),a.jsx(xg,{}),a.jsx(ul,{side:yn.OPPONENT,wsUtils:t})]})}const Fg=k.div`
    grid-column: 1 / -1;
    grid-row: 1 / 10;
    display: grid;
    grid-template-columns: subgrid;
    grid-template-rows: subgrid;
    grid-template-areas:
        ". . . . . . . . hand hand hand hand hand hand hand hand hand hand hand hand hand . SS SS SS . . .               event-utils event-utils event-utils event-utils event-utils event-utils report"
        ". . . . . . . . hand hand hand hand hand hand hand hand hand hand hand hand hand . SS SS SS . egg-deck egg-deck event-utils event-utils event-utils event-utils event-utils event-utils surrender"
        ". . . . . . . . hand hand hand hand hand hand hand hand hand hand hand hand hand . SS SS SS . egg-deck egg-deck event-utils event-utils event-utils event-utils event-utils event-utils restart"
        "deck deck  BA13 BA13 BA13 BA13 BA12 BA12 BA12 BA12 BA12 BA11 BA11 BA11 BA11 BA11 BA10 BA10 BA10 BA10 BA10 BA9 BA9 BA9 BA9 BA9 breeding breeding player player player player player player player"
        "deck deck  BA13 BA13 BA13 BA13 BA12 BA12 BA12 BA12 BA12 BA11 BA11 BA11 BA11 BA11 BA10 BA10 BA10 BA10 BA10 BA9 BA9 BA9 BA9 BA9 breeding breeding . . . . . . ."
        ". .  LA8 BA8 BA8 LA7 BA7 BA7 LA6 BA6 BA6 LA5 BA5 BA5 LA4 BA4 BA4 LA3 BA3 BA3 LA2 BA2 BA2 LA1 BA1 BA1                    breeding breeding . . . . . . ."
        "trash trash  LA8 BA8 BA8 LA7 BA7 BA7 LA6 BA6 BA6 LA5 BA5 BA5 LA4 BA4 BA4 LA3 BA3 BA3 LA2 BA2 BA2 LA1 BA1 BA1                    breeding breeding . . . . . . ."
        "trash trash  LA8 BA8 BA8 LA7 BA7 BA7 LA6 BA6 BA6 LA5 BA5 BA5 LA4 BA4 BA4 LA3 BA3 BA3 LA2 BA2 BA2 LA1 BA1 BA1            . .             . . . . . . ."
        ". .  LA8 BA8 BA8 LA7 BA7 BA7 LA6 BA6 BA6 LA5 BA5 BA5 LA4 BA4 BA4 LA3 BA3 BA3 LA2 BA2 BA2 LA1 BA1 BA1                    opponent-field-nav opponent-field-nav             . . . . . . .";
    gap: 1px;
    position: relative;
`,$g=k.div`
    grid-area: opponent-field-nav;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
`,Jr=k.div`
    width: 100%;
    height: 80%;
    background: rgba(12, 21, 16, 0.25);
    border: 1px solid rgba(124, 124, 118, 0.4);
    border-left: none;
    border-radius: 0 3px 3px 0;
    box-shadow: inset 5px 5px 30px 5px rgba(255, 255, 255, 0.05);
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5));
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    &:hover {
        background: rgba(26, 179, 201, 0.35);
    }
`;var ps,Kr;function Vg(){return Kr||(Kr=1,ps=(function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(i,s,o){n.o(i,s)||Object.defineProperty(i,s,{enumerable:!0,get:o})},n.r=function(i){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},n.t=function(i,s){if(1&s&&(i=n(i)),8&s||4&s&&typeof i=="object"&&i&&i.__esModule)return i;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:i}),2&s&&typeof i!="string")for(var r in i)n.d(o,r,(function(c){return i[c]}).bind(null,r));return o},n.n=function(i){var s=i&&i.__esModule?function(){return i.default}:function(){return i};return n.d(s,"a",s),s},n.o=function(i,s){return Object.prototype.hasOwnProperty.call(i,s)},n.p="",n(n.s=2)})([function(t,e){t.exports=Ii()},function(t,e,n){t.exports=(function(i){var s={};function o(r){if(s[r])return s[r].exports;var c=s[r]={i:r,l:!1,exports:{}};return i[r].call(c.exports,c,c.exports,o),c.l=!0,c.exports}return o.m=i,o.c=s,o.d=function(r,c,l){o.o(r,c)||Object.defineProperty(r,c,{enumerable:!0,get:l})},o.r=function(r){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},o.t=function(r,c){if(1&c&&(r=o(r)),8&c||4&c&&typeof r=="object"&&r&&r.__esModule)return r;var l=Object.create(null);if(o.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:r}),2&c&&typeof r!="string")for(var u in r)o.d(l,u,(function(d){return r[d]}).bind(null,u));return l},o.n=function(r){var c=r&&r.__esModule?function(){return r.default}:function(){return r};return o.d(c,"a",c),c},o.o=function(r,c){return Object.prototype.hasOwnProperty.call(r,c)},o.p="",o(o.s=0)})([function(i,s,o){function r(O){return(r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _})(O)}function c(O,_){return(function(C){if(Array.isArray(C))return C})(O)||(function(C,M){if(typeof Symbol<"u"&&Symbol.iterator in Object(C)){var R=[],$=!0,H=!1,ce=void 0;try{for(var Ce,fe=C[Symbol.iterator]();!($=(Ce=fe.next()).done)&&(R.push(Ce.value),!M||R.length!==M);$=!0);}catch(le){H=!0,ce=le}finally{try{$||fe.return==null||fe.return()}finally{if(H)throw ce}}return R}})(O,_)||(function(C,M){if(C){if(typeof C=="string")return l(C,M);var R=Object.prototype.toString.call(C).slice(8,-1);return R==="Object"&&C.constructor&&(R=C.constructor.name),R==="Map"||R==="Set"?Array.from(R):R==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(R)?l(C,M):void 0}})(O,_)||(function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}function l(O,_){(_==null||_>O.length)&&(_=O.length);for(var C=0,M=new Array(_);C<_;C++)M[C]=O[C];return M}o.r(s),o.d(s,"DIRECTION",(function(){return x})),o.d(s,"HEAD",(function(){return B}));var u="http://www.w3.org/2000/svg",d=function(O,_){return O==="style"?(C=_,(M=Object.entries(C).reduce((function(R,$){var H=c($,2),ce=H[0],Ce=H[1];return typeof Ce=="number"?"".concat(ce,": ").concat(Ce,"px; ").concat(R):"".concat(ce,": ").concat(Ce,"; ").concat(R)}),"")).endsWith("; ")?M.substring(0,M.length-2):M):_;var C,M},h=function(O){var _=O.key,C=O.node,M=O.value;switch(_){case"className":return"class";case"ref":return M(C),null;default:return _}},f=function(O,_){for(var C=arguments.length,M=new Array(C>2?C-2:0),R=2;R<C;R++)M[R-2]=arguments[R];var $=document.createElementNS(u,O);return _&&Object.entries(_).forEach((function(H){var ce=c(H,2),Ce=ce[0],fe=ce[1],le=h({key:Ce,node:$,value:fe});le&&$.setAttributeNS(null,le,d(Ce,fe))})),M.length&&M.forEach((function(H){H&&r(H)==="object"?$.appendChild(H):$.innerHTML=M})),$},p=function(){var O=function _(C){_.current=C};return O.current=null,O},x={TOP_LEFT:"top-left",TOP:"top",TOP_RIGHT:"top-right",RIGHT:"right",BOTTOM_LEFT:"bottom-left",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",LEFT:"left"},y=function(O){var _=O.size,C=_===void 0?10:_;return{node:f("g",{transform:"translate(-".concat(C,", 0)")},f("path",{d:"M".concat(-C," 0 L0 ").concat(-C," L").concat(C," 0 L0 ").concat(C," Z")})),width:C,height:C}},m=function(O){var _=O.size,C=_===void 0?10:_;return{node:f("g",{transform:"translate(-".concat(C,", 0)")},f("circle",{cx:0,cy:0,r:C})),width:C,height:C}},g=function(O){var _=O.src,C=O.width,M=O.height;if(!_||!C||!M)throw new Error("image requires src, height, width");var R=document.createElementNS("http://www.w3.org/2000/svg","image");return R.setAttributeNS(null,"width",C),R.setAttributeNS(null,"height",M),R.setAttributeNS(null,"x",-C),R.setAttributeNS(null,"y",-M/2),R.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",_),{node:R,width:C,height:M}},v=function(O){var _=O.size,C=_===void 0?10:_;return{node:f("path",{d:"M".concat(-C," 0 L0 ").concat(-C," L0 ").concat(C," Z")}),width:C,height:C}},S=function(O){var _=O.size,C=_===void 0?10:_;return{node:f("path",{d:"M".concat(-C," ").concat(-C," L0 0 L").concat(-C," ").concat(C," Z")}),width:C,height:C}},D=function(){return{node:"",width:10,height:10}},j=function(O){var _=O.size,C=_===void 0?10:_;return{node:f("g",null,f("line",{x1:-C,y1:-C,x2:0,y2:0}),f("line",{x1:0,y1:0,x2:-C,y2:C})),width:C,height:C}},I=function(O){var _=O.size,C=_===void 0?10:_;return{node:f("g",{transform:"translate(-".concat(C,", 0)")},f("path",{d:"M".concat(-C," ").concat(-C," L").concat(C," 0 L").concat(-C," ").concat(C," L0 0 Z")})),width:C,height:C}},B={diamond:y,DIAMOND:y,dot:m,DOT:m,image:g,IMAGE:g,none:D,NONE:D,inv:v,INV:v,normal:S,NORMAL:S,thin:j,THIN:j,vee:I,VEE:I};function W(O,_){var C=Object.keys(O);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(O);_&&(M=M.filter((function(R){return Object.getOwnPropertyDescriptor(O,R).enumerable}))),C.push.apply(C,M)}return C}function V(O){for(var _=1;_<arguments.length;_++){var C=arguments[_]!=null?arguments[_]:{};_%2?W(Object(C),!0).forEach((function(M){Z(O,M,C[M])})):Object.getOwnPropertyDescriptors?Object.defineProperties(O,Object.getOwnPropertyDescriptors(C)):W(Object(C)).forEach((function(M){Object.defineProperty(O,M,Object.getOwnPropertyDescriptor(C,M))}))}return O}function Z(O,_,C){return _ in O?Object.defineProperty(O,_,{value:C,enumerable:!0,configurable:!0,writable:!0}):O[_]=C,O}function ne(O){return(ne=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _})(O)}var ee=function(O){return Math.round(1e3*O)/1e3},ie=function(O,_){var C=O.distance,M=function(ce){return Math.pow(1-C,2)*(_[1][ce]-_[0][ce])+2*C*(1-C)*(_[2][ce]-_[1][ce])+C*C*(_[3][ce]-_[2][ce])},R=M("x"),$=M("y"),H=ee(-Math.atan2(R,$)+.5*Math.PI);return{degree:ee(H*(180/Math.PI)),radius:H}},K=function(O,_){var C=O.distance,M=function(R){return Math.pow(1-C,3)*_[0][R]+3*C*Math.pow(1-C,2)*_[1][R]+3*C*C*(1-C)*_[2][R]+C*C*C*_[3][R]};return{x:M("x"),y:M("y")}},te=function(O){return"rotate(".concat(O.degree,", ").concat(O.x,", ").concat(O.y,"), translate(").concat(O.x,", ").concat(O.y,")")},X=function(O){return typeof O=="function"?O():O};function be(O,_){var C=Object.keys(O);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(O);_&&(M=M.filter((function(R){return Object.getOwnPropertyDescriptor(O,R).enumerable}))),C.push.apply(C,M)}return C}function we(O,_,C){return _ in O?Object.defineProperty(O,_,{value:C,enumerable:!0,configurable:!0,writable:!0}):O[_]=C,O}var se=function(O){var _=(function(M){if(!X(M.node))throw new Error("point is null, check if 'from'/'to' exists");var R=X(M.node).getBoundingClientRect();switch(M.direction){case x.TOP_LEFT:return{x:R.x,y:R.y};case x.TOP:return{x:R.x+R.width/2,y:R.y};case x.TOP_RIGHT:return{x:R.x+R.width,y:R.y};case x.RIGHT:return{x:R.x+R.width,y:R.y+R.height/2};case x.BOTTOM_LEFT:return{x:R.x,y:R.y+R.height};case x.BOTTOM:return{x:R.x+R.width/2,y:R.y+R.height};case x.BOTTOM_RIGHT:return{x:R.x+R.width,y:R.y+R.height};case x.LEFT:return{x:R.x,y:R.y+R.height/2};default:throw new Error("unexpected type")}})(O),C=window?{x:window.scrollX,y:window.scrollY}:{};return _.y+=C.y,_.x+=C.x,(function(M){for(var R=1;R<arguments.length;R++){var $=arguments[R]!=null?arguments[R]:{};R%2?be(Object($),!0).forEach((function(H){we(M,H,$[H])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors($)):be(Object($)).forEach((function(H){Object.defineProperty(M,H,Object.getOwnPropertyDescriptor($,H))}))}return M})({},O,{},_)},L=function(O){return[O.x,O.y]},N=function(O,_){return{x:O.x+_.width*O.translation[0],y:O.y+_.height*O.translation[1]}};function ge(O,_){var C=Object.keys(O);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(O);_&&(M=M.filter((function(R){return Object.getOwnPropertyDescriptor(O,R).enumerable}))),C.push.apply(C,M)}return C}function ve(O){for(var _=1;_<arguments.length;_++){var C=arguments[_]!=null?arguments[_]:{};_%2?ge(Object(C),!0).forEach((function(M){Se(O,M,C[M])})):Object.getOwnPropertyDescriptors?Object.defineProperties(O,Object.getOwnPropertyDescriptors(C)):ge(Object(C)).forEach((function(M){Object.defineProperty(O,M,Object.getOwnPropertyDescriptor(C,M))}))}return O}function Se(O,_,C){return _ in O?Object.defineProperty(O,_,{value:C,enumerable:!0,configurable:!0,writable:!0}):O[_]=C,O}var oe=function(O,_,C){return(function(M,R){return ve({},M,{x:M.x-R.x,y:M.y-R.y})})(ve({},O,{x:O.x-_.x,y:O.y-_.y}),{x:2*-C.width,y:2*-C.height})},Q=function(O){var _=["M"];return _.push(L(O[0])),_.push("C"),_.push(L(O[1])),_.push(","),_.push(L(O[2])),_.push(","),_.push(L(O[3])),_.flat().join(" ").replace(/ ,/g,",")},xe=function(O,_){return O.reduce((function(C,M){return C?_(C,M):M}))},Me=function(O,_,C){var M=(function(fe){var le=(function b(P){if(!P)return{func:B.THIN};if(typeof P=="string")return b(B[P]);if(ne(P)==="object"){if(typeof P.func=="function")return P;if(typeof P.func=="string")return V({},P,{},b(P.func))}return typeof P=="function"?{func:P}:V({},P,{func:B.THIN})})(fe),E=V({},fe,{},le.func(le));if(!E.node===void 0||!E.width||!E.height)throw new Error("head function should return { node, width, height }");return E.distance||(E.distance=1),E})(C),R=(function(fe,le){return{x:Math.min(fe.x,le.x),y:Math.min(fe.y,le.y)}})(O,_),$=(function(fe){var le=fe.from,E=fe.to,b=fe.head,P=(function(F){var G=F.from,J=F.to;return{width:Math.max(G.x,J.x),height:Math.max(G.y,J.y)}})({from:le,to:E}),T=[];return T.push(le),T.push(N(le,P)),T.push(N(E,P)),T.push(E),(function(F,G){var J=xe(F,(function(pe,Be){return{x:Math.min(pe.x,Be.x),y:Math.min(pe.y,Be.y)}}));return F.map((function(pe){return ve({},pe,{x:pe.x-J.x+G.width,y:pe.y-J.y+G.height})}))})(T,b)})({from:oe(O,R,M),to:oe(_,R,M),head:M}),H=xe($,(function(fe,le){return{x:Math.max(fe.x,le.x),y:Math.max(fe.y,le.y)}})),ce=ve({},ie(M,$),{},K(M,$)),Ce=(function(fe,le,E){var b=function(P){return Math.min(fe[0][P]-E.width,fe[3][P]-E.height)};return{x:le.x-b("x")-E.width,y:le.y-b("y")-E.height}})($,R,M);return{offset:Ce,size:{width:H.x+2*M.width,height:H.y+2*M.height},points:Q($),head:ve({},M,{},ce),getPointXY:function(){var fe=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,le=ie({distance:fe},$),E=K({distance:fe},$);return ve({},le,{x:E.x+Ce.x,y:E.y+Ce.y})}}},je=["x","y","width","height"],Ee=function(O,_){var C=_.getBoundingClientRect();return{equal:!je.some((function(M){return O[M]!==C[M]})),rect:C}},at=function(O){var _=O.className,C=_===void 0?"arrow":_,M=O.head,R=O.from,$=O.to,H={className:C,head:M,from:R,to:$,onChange:O.onChange},ce=Me(se(H.from),se(H.to),H.head),Ce=p(),fe=p(),le=p(),E=f("svg",{className:H.className,ref:Ce,style:{top:ce.offset.y,left:ce.offset.x,position:"absolute"},width:ce.size.width,height:ce.size.height},f("path",{ref:fe,className:"".concat(C,"__path"),d:ce.points}),f("g",{ref:le,className:"".concat(C,"__head"),transform:te(ce.head)},ce.head.node)),b=function(){var T=Me(se(H.from),se(H.to),H.head);H.onChange&&H.onChange(T),Ce.current.style.top="".concat(T.offset.y,"px"),Ce.current.style.left="".concat(T.offset.x,"px"),Ce.current.style.width="".concat(T.size.width,"px"),Ce.current.style.height="".concat(T.size.height,"px"),fe.current.setAttribute("d",T.points),le.current.setAttribute("transform",te(T.head)),typeof T.head.node=="string"?le.current.innerHTML=T.head.node:(le.current.firstChild&&le.current.removeChild(le.current.firstChild),le.current.appendChild(T.head.node))},P=(function(T,F){var G={from:T,to:F},J={from:{},to:{}},pe=null,Be=setInterval((function(){var ze=X(G.from.node),Ye=X(G.to.node);if(ze&&Ye&&document.body.contains(ze)&&document.body.contains(Ye)){var jt=(function($t){var kt=$t.previousPositions,Oe=$t.fromNode,At=$t.toNode,ct={};return ct.from=Ee(kt.from,Oe),ct.to=Ee(kt.to,At),ct.from.equal&&ct.to.equal?null:{from:ct.from.rect,to:ct.to.rect}})({previousPositions:J,fromNode:ze,toNode:Ye});jt&&(J.from=jt.from,J.to=jt.to,pe&&pe())}}),150);return{observe:function(ze){pe=ze},timer:Be,clear:function(){return clearInterval(Be)},setFrom:function(ze){G.from=ze},setTo:function(ze){G.to=ze}}})(R,$);return P.observe(b),{node:E,timer:P.timer,clear:function(){P.clear();var T=E.parentNode;T&&T.removeChild(E)},update:b,setProps:function(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};T.from&&(P.setFrom(T.from),H.from=T.from),T.to&&(P.setFrom(T.to),H.to=T.to),Object.keys(T).forEach((function(F){H[F]=T[F]})),b()}}};window&&(window.arrowCreate=at),s.default=at}])},function(t,e,n){n.r(e),n.d(e,"DIRECTION",(function(){return s.DIRECTION})),n.d(e,"HEAD",(function(){return s.HEAD}));var i=n(0),s=n(1),o=n.n(s),r=function(y){return typeof y=="function"?y():y},c=function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return r(y.node)};function l(y,m){return(function(g){if(Array.isArray(g))return g})(y)||(function(g,v){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(g)))){var S=[],D=!0,j=!1,I=void 0;try{for(var B,W=g[Symbol.iterator]();!(D=(B=W.next()).done)&&(S.push(B.value),!v||S.length!==v);D=!0);}catch(V){j=!0,I=V}finally{try{D||W.return==null||W.return()}finally{if(j)throw I}}return S}})(y,m)||(function(g,v){if(g){if(typeof g=="string")return u(g,v);var S=Object.prototype.toString.call(g).slice(8,-1);if(S==="Object"&&g.constructor&&(S=g.constructor.name),S==="Map"||S==="Set")return Array.from(S);if(S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))return u(g,v)}})(y,m)||(function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}function u(y,m){(m==null||m>y.length)&&(m=y.length);for(var g=0,v=new Array(m);g<m;g++)v[g]=y[g];return v}var d=function(y){var m=y.from,g=y.to,v=l(Object(i.useState)(!1),2),S=v[0],D=v[1];return Object(i.useLayoutEffect)((function(){var j=function(){if(c(m)&&c(g))return D(!0),!0};if(!j()){var I=setInterval(j,150);return function(){return clearInterval(I)}}}),[S,m,g]),S};function h(y,m){var g=Object.keys(y);if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(y);m&&(v=v.filter((function(S){return Object.getOwnPropertyDescriptor(y,S).enumerable}))),g.push.apply(g,v)}return g}function f(y){for(var m=1;m<arguments.length;m++){var g=arguments[m]!=null?arguments[m]:{};m%2?h(Object(g),!0).forEach((function(v){p(y,v,g[v])})):Object.getOwnPropertyDescriptors?Object.defineProperties(y,Object.getOwnPropertyDescriptors(g)):h(Object(g)).forEach((function(v){Object.defineProperty(y,v,Object.getOwnPropertyDescriptor(g,v))}))}return y}function p(y,m,g){return m in y?Object.defineProperty(y,m,{value:g,enumerable:!0,configurable:!0,writable:!0}):y[m]=g,y}var x=function(y){var m=y.className,g=y.head,v=y.from,S=y.to,D=y.onChange,j=d({from:v,to:S}),I=Object(i.useRef)();Object(i.useLayoutEffect)((function(){I.current&&I.current.setProps({className:m,head:g,from:v,to:S,onChange:D})}),[m,g,v,S,D]),Object(i.useLayoutEffect)((function(){if(j){try{I.current=o()({className:m,head:g,from:f({},v,{node:c(v)}),to:f({},S,{node:c(S)}),onChange:D})}catch(B){return void console.warn(B)}return document.body.appendChild(I.current.node),function(){I.current.clear(),I.current=null}}}),[j])};e.default=Object(i.memo)((function(y){var m=y.className,g=y.head,v=y.from,S=y.to,D=y.onChange;return x({className:m,head:g,from:v,to:S,onChange:D}),null}))}])),ps}var mn=Vg();const Gg=oa(mn),Ug=["opponentDigi1","opponentDigi2","opponentDigi3","opponentDigi4","opponentDigi5","opponentDigi6","opponentDigi7","opponentDigi8","opponentDigi9","opponentDigi10","opponentDigi11","opponentDigi12","opponentDigi13","opponentDigi14","opponentDigi15","opponentBreedingArea"];function Wg(){const t=ae(s=>s.arrowFrom),e=ae(s=>s.arrowTo),n=ae(s=>s.isEffectArrow),i=Ug.includes(t);return!t||!e?a.jsx(a.Fragment,{}):a.jsx(qg,{isFromOpponent:i,isEffect:n,from:{direction:i?mn.DIRECTION.BOTTOM:mn.DIRECTION.TOP,node:()=>document.getElementById(t),translation:[0,0]},to:{direction:i?mn.DIRECTION.TOP:mn.DIRECTION.BOTTOM,node:()=>document.getElementById(e),translation:[0,0]},head:mn.HEAD.NONE})}const qg=k(Gg)`
    position: relative;
    pointer-events: none;
    stroke: ${({isFromOpponent:t,isEffect:e})=>t?e?"#ECAA4D":"crimson":e?"aquamarine":"#007fff"};
    fill: ${({isFromOpponent:t,isEffect:e})=>t?e?"#ECAA4D":"crimson":e?"aquamarine":"#007fff"};
    filter: drop-shadow(0 0 3px ${({isFromOpponent:t})=>t?"crimson":"#007fff"});
    stroke-linecap: round;
    transform: scale(0.95);
    animation: arrow-pulsate 0.8s ease infinite;
    z-index: 1000;

    path {
        fill: transparent;
        stroke-dasharray: ${({isEffect:t})=>t?15:0};
        stroke-width: 10px;
    }

    .arrow__head {
        stroke-width: 10px;
    }

    @keyframes arrow-pulsate {
        0%,
        100% {
            opacity: 0.9;
        }
        50% {
            opacity: 0.05;
        }
    }
`;function Hg({wsUtils:t}){const{sendMessage:e,matchInfo:{gameId:n}}=t,i=ae(d=>d.restartOrder),s=ae(d=>d.restartPromptModal),o=ae(d=>d.setRestartPromptModal),r=ae(d=>d.setIsRematch),c=U(d=>d.clearBoard);function l(){c(),o(!1),r(!0),e(`${n}:/acceptRestart`),e(`${n}:/restartGame:${i}`)}const u=[{text:"DENY",onClick:()=>o(!1),color:"#C03427"},{text:`ACCEPT ► GOING ${i}`,onClick:l,color:"#27C06E"}];return s?a.jsx(Qs,{text:"Opponent requested a rematch!",buttonProps:u}):a.jsx(a.Fragment,{})}function Yg({wsUtils:t}){const e=U(S=>S.phase),n=U(S=>S.progressToNextPhase),i=U(S=>S.setUsernameTurn),s=U(S=>S.myMemory),o=U(S=>S.areCardsSuspended),c=U(S=>S.bootStage)===Mi.GAME_IN_PROGRESS,l=U(S=>S.getIsMyTurn),u=Y(S=>S.user),d=l(u),h=ye(S=>S.playNextPhaseSfx),f=ye(S=>S.playPassTurnSfx),[p,x]=w.useState(!0),y=e===gi.MAIN,m=s<0;function g(){if(!(!d||!c)){if(y){if(!m)return;f(),i(t?.matchInfo.opponentName??""),t?.sendSfx("playPassTurnSfx")}else h(),t?.sendSfx("playNextPhaseSfx");n(),t?.sendPhaseUpdate()}}w.useEffect(()=>{d&&e===gi.UNSUSPEND&&!o()&&t?.nextPhase()},[e]),w.useEffect(()=>{x(!1);const S=setTimeout(()=>x(!0),10);return()=>clearTimeout(S)},[e]);const v=Y(S=>S.cardWidth/4);return a.jsx(Qg,{onClick:g,isMyTurn:d,isMainPhase:y,isPassTurnAllowed:m,gameHasStarted:c,...d&&y&&!m&&{title:"Please set memory before passing turn."},children:a.jsx(Jg,{style:{opacity:p?1:0,fontSize:v},children:c?e:"BOOTING"})})}const Qg=k.div`
    grid-area: phase;
    grid-column: 1 / 5;
    grid-row: 10 / 12;
    position: relative;
    margin: 10% 5% 10% 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15%;
    z-index: 20;
    transition: all 0.15s ease-in;
    cursor: ${({isMyTurn:t,isMainPhase:e,isPassTurnAllowed:n})=>t?e&&!n?"not-allowed":"pointer":void 0};
    pointer-events: ${({gameHasStarted:t})=>t?"unset":"none"};

    border: 2px solid ${({gameHasStarted:t,isMyTurn:e})=>Zg(t,e)};
    color: ghostwhite;

    background: rgba(0, 0, 0, 0.6);
    border-radius: 9px;

    filter: drop-shadow(0 0 2px ${({gameHasStarted:t,isMyTurn:e})=>Xg(t,e)});
    box-shadow: ${({gameHasStarted:t,isMyTurn:e})=>Kg(t,e)};

    ${({gameHasStarted:t,isMyTurn:e})=>t&&e&&`
      &:hover {
        filter: brightness(1.2) contrast(1.2) drop-shadow(rgba(29, 159, 221, 0.6));
        border: rgba(29, 159, 221, 0.4);
        box-shadow: inset 0 0 12px 2px rgb(29, 159, 221);
      }

      &:active {
        filter: brightness(1.2) contrast(1.2) drop-shadow(rgba(29, 159, 221, 0.6));
        border: rgba(29, 159, 221, 0.4);
        box-shadow: inset 0 0 8px 3px rgb(29, 159, 221);
        background: rgba(6, 18, 33, 0.7);
      }
    `}
`,Jg=k.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -43%);
    color: ghostwhite;
    text-shadow: 0 0 3px black;
    filter: drop-shadow(0 0 4px black);
    font-family: "Awsumsans", sans-serif;
    display: inline-block;
    line-height: 1;
    z-index: 2;
    transition: all 0.15s ease-out;
    user-select: none;
`;function Kg(t,e){return t?e?"inset 1px 2px 10px 1px rgb(29, 159, 221)":"inset 0 0 12px 2px rgba(243,58,96,0.7)":"inset 0 0 12px 2px rgb(252,241,49)"}function Xg(t,e){return t?e?"rgba(29, 159, 221, 0.6)":"rgba(255,81,118,0.6)":"rgba(255, 247, 84, 0.35)"}function Zg(t,e){return t?e?"rgba(29, 159, 221, 0.4)":"rgba(255, 114, 135, 0.6)":"rgba(241,255,41,0.63)"}function ey(){const t=Y(N=>N.selectCard),e=Y(N=>N.selectedCard),n=Y(N=>N.hoverCard),i=Y(N=>N.user),s=U(N=>N.gameId),o=s.split("‗").filter(N=>N!==i)[0],r=ye(N=>N.playAttackSfx),c=ye(N=>N.playEffectAttackSfx),l=ye(N=>N.playNextPhaseSfx),u=U(N=>N.progressToNextPhase),d=U(N=>N.setMessages),h=ae(N=>N.setArrowFrom),f=ae(N=>N.setArrowTo),p=ae(N=>N.setIsEffectArrow),x=ae(N=>N.stackDialog),y=ae(N=>N.openedCardDialog),m=mi(N=>N.details),{show:g}=Yn({id:"detailsImageMenu"}),[v,S]=w.useState(null),[D,j]=w.useState(!1),I=w.useRef(null),B=w.useCallback(N=>{N?c():r();const ge=()=>{I.current!==null&&(clearTimeout(I.current),I.current=null),h(""),f(""),p(!1)};I.current=setTimeout(()=>{h(""),f(""),p(!1)},3500),S(()=>ge)},[r,c]),{sendMessage:W}=Vm({clearAttackAnimation:v,restartAttackAnimation:B}),V=da({sendMessage:W,restartAttackAnimation:B,clearAttackAnimation:v});w.useLayoutEffect(()=>{const N=ge=>{const{item:ve,targetId:Se}=ge.detail,oe=Se.includes("_bottom"),Q=oe?Se.replace("_bottom",""):Se,xe=V(Q,{bottom:oe});xe?.drop&&xe.drop(ve)};return window.addEventListener("reactDndDrop",N),()=>window.removeEventListener("reactDndDrop",N)},[V]);function Z(){W(`${s}:/updatePhase`)}function ne(){if(D)return;j(!0);const N=setTimeout(()=>{u(),Z(),l(),K("playNextPhaseSfx"),j(!1)},920);return()=>clearTimeout(N)}function ee(N,ge,ve){W(`${s}:/moveCard:${N}:${ge}:${ve}`)}function ie(N){N.length&&(d(i+"﹕"+N),W(`${s}:/chatMessage:${N}`))}function K(N){const ge=setTimeout(()=>W(`${s}:/${N}`),10);return()=>clearTimeout(ge)}const te={matchInfo:{gameId:s,user:i,opponentName:o},sendMessage:W,sendMoveCard:ee,sendChatMessage:ie,sendSfx:K,sendPhaseUpdate:Z,nextPhase:ne},X=Y(N=>N.cardWidth*.45),be=w.useRef(null),we=be.current?Math.max(window.outerHeight-148,800):void 0;w.useLayoutEffect(()=>window.scrollTo(document.documentElement.scrollWidth-window.innerWidth,0),[]);const se="ontouchstart"in window?ma:ga,L=a.jsxs(sy,{height:we,children:[a.jsx(oy,{children:a.jsxs(Hs,{iconFontSize:X,children:[a.jsx("a",{href:"https://world.digimoncard.com/rule/pdf/general_rules.pdf",target:"_blank",rel:"noopener noreferrer",title:"Rulings",children:a.jsxs(ry,{sx:{color:"white",position:"relative"},children:[a.jsx(ba,{sx:{fontSize:`${X*.85}px!important`,opacity:.8}}),a.jsx(va,{sx:{color:"dodgerblue",position:"absolute",right:0,top:7,fontSize:`${X*.4}px!important`,pointerEvents:"none"}})]})}),a.jsx(ka,{iconFontSize:`${X}px!important`})]})}),a.jsxs(ay,{children:[!x&&!y&&a.jsx(wa,{...te}),!!y&&a.jsx(Sa,{}),!!x&&a.jsx(Ca,{})]}),a.jsx(Ea,{}),a.jsx(_a,{wsUtils:te}),a.jsx(Yg,{wsUtils:te}),a.jsx(Ng,{wsUtils:te}),a.jsx(Oa,{wsUtils:te})]});return a.jsxs(ty,{ref:be,children:[a.jsx(ua,{}),a.jsx(ha,{wsUtils:te}),a.jsx(Wg,{}),a.jsx(fa,{wsUtils:te}),a.jsx(pa,{}),a.jsx(Hg,{wsUtils:te}),a.jsxs(ny,{height:we,style:{minHeight:window.innerHeight},children:[m!==yi.NO_IMAGE&&a.jsx(iy,{src:n?.imgUrl??e?.imgUrl??Ri,alt:"cardImg",onContextMenu:N=>g({event:N}),onClick:()=>t(null),...!e&&!n&&{style:{pointerEvents:"none",opacity:.25,filter:"saturate(0.5)"}}}),m===yi.NO_IMAGE&&a.jsx("div",{style:{height:"10px"}}),a.jsx(Js,{})]}),a.jsxs(xa,{backend:se,children:[L,a.jsx(ya,{})]})]})}const ty=k.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    position: relative;
    width: 100%;
    min-width: 100vw;
    height: 100%;
    min-height: 100vh;
    overflow-y: hidden;
    gap: 5px;
`,ny=k.div`
    background: rgba(0, 0, 0, 0.35);
    display: flex;
    width: 350px !important;
    max-width: 350px;
    height: ${({height:t})=>t?`${t}px`:"unset"};
    max-height: ${({height:t})=>t?`${t}px`:"unset"};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    overflow-x: hidden;
    overflow-y: scroll;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        width: 0;
        display: none;
    }
`,iy=k.img`
    width: calc(100% - 10px);
    border-radius: 3.5%;
    aspect-ratio: 5 / 7;
    z-index: 1000;
`,sy=k.div`
    position: relative;
    aspect-ratio: 35 / 20;
    height: ${({height:t})=>t?`${t}px`:"auto"};

    display: grid;
    grid-template-columns: repeat(35, 1fr);
    grid-template-rows: repeat(20, 1fr);

    container-type: inline-size;
    container-name: board-layout;

    transform: ${({isCameraTilted:t})=>t?"perspective(2000px) rotateX(35deg) rotateZ(0deg)":"unset"};
    padding: ${({isCameraTilted:t})=>t?"0 3.5vw 0 5vw":"0"};

    @supports (-moz-appearance: none) {
        height: ${({height:t})=>t?`${t-8}px`:"auto"};
    }
`,oy=k.div`
    grid-column: 1 / 9;
    grid-row: 1 / 3;
    z-index: 1;
`,ry=k(la)`
    width: fit-content;
    opacity: 0.7;
    display: flex;
`,ay=k.div`
    height: 95%;
    width: 95%;
    margin: 1.5%;
    padding: 0 1% 0 1%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    grid-column: 29 / 36;
    grid-row: 5 / 17;

    background: rgba(12, 21, 16, 0.1);
    border: 1px solid rgba(124, 124, 118, 0.6);
    border-radius: 1%;
    box-shadow: inset 5px 5px 30px 5px rgba(255, 255, 255, 0.09);
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5));

    z-index: 20;
`,cy="5.5.7",ly={g:"LottieFiles AE 0.1.21",a:"",k:"",d:"",tc:""},dy=29.97,uy=0,hy=33,fy=500,py=500,xy=0,my=[],gy=[{ddd:0,ind:1,ty:4,sr:1,ks:{o:{a:0,k:100},r:{a:1,k:[{i:{x:[.83],y:[.83]},o:{x:[.17],y:[.17]},t:0,s:[0]},{t:30,s:[360]}]},p:{a:0,k:[250,250,0]},a:{a:0,k:[10,-22,0]},s:{a:0,k:[100,100,100]}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[300,300]},p:{a:0,k:[0,0]}},{ty:"st",c:{a:0,k:[1,1,1,1]},o:{a:0,k:100},w:{a:0,k:40},lc:1,lj:1,ml:4,bm:0},{ty:"tm",s:{a:1,k:[{i:{x:[.67],y:[1]},o:{x:[.33],y:[0]},t:9.6,s:[0]},{t:28.8,s:[100]}]},e:{a:1,k:[{i:{x:[.67],y:[1]},o:{x:[.33],y:[0]},t:0,s:[1]},{t:18,s:[100]}]},o:{a:0,k:0},m:1},{ty:"tr",p:{a:0,k:[10,-22]},a:{a:0,k:[0,0]},s:{a:0,k:[100,100]},r:{a:0,k:0},o:{a:0,k:100},sk:{a:0,k:0},sa:{a:0,k:0}}],bm:0}],ip:0,op:150,st:0,bm:0}],yy=[],mo={v:cy,meta:ly,fr:dy,ip:uy,op:hy,w:fy,h:py,ddd:xy,assets:my,layers:gy,markers:yy},by="4.8.0",vy={g:"LottieFiles AE ",a:"",k:"",d:"",tc:""},ky=32,wy=0,Sy=152,Cy=336,Ey=336,_y=0,Oy=[],Py=[{ddd:0,ind:1,ty:4,sr:1,ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:0,k:[168,168,0]},a:{a:0,k:[0,0,0]},s:{a:0,k:[-100,-100,100]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[0,21],[0,-21]],c:!1}}},{ty:"tm",s:{a:0,k:0},e:{a:1,k:[{i:{x:[.83],y:[.83]},o:{x:[.17],y:[.17]},t:0,s:[0]},{i:{x:[.67],y:[1]},o:{x:[.33],y:[0]},t:7,s:[0]},{t:24,s:[100]}]},o:{a:0,k:0},m:1},{ty:"st",c:{a:0,k:[.474509805441,.427450984716,.51372551918,1]},o:{a:0,k:100},w:{a:0,k:3},lc:3,lj:2,bm:0},{ty:"tr",p:{a:0,k:[0,0]},a:{a:0,k:[0,0]},s:{a:0,k:[300,300]},r:{a:0,k:-45},o:{a:0,k:100},sk:{a:0,k:0},sa:{a:0,k:0}}],bm:0}],ip:0,op:160,st:0,bm:0},{ddd:0,ind:2,ty:4,sr:1,ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:0,k:[168,168,0]},a:{a:0,k:[0,0,0]},s:{a:0,k:[100,100,100]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[0,21],[0,-21]],c:!1}}},{ty:"tm",s:{a:1,k:[{i:{x:[.83],y:[.83]},o:{x:[.17],y:[.17]},t:0,s:[100]},{i:{x:[.67],y:[1]},o:{x:[.33],y:[0]},t:17,s:[100]},{t:35,s:[0]}]},e:{a:0,k:100},o:{a:0,k:0},m:1},{ty:"st",c:{a:0,k:[.474509805441,.427450984716,.51372551918,1]},o:{a:0,k:100},w:{a:0,k:3},lc:3,lj:2,bm:0},{ty:"tr",p:{a:0,k:[0,0]},a:{a:0,k:[0,0]},s:{a:0,k:[300,300]},r:{a:0,k:45},o:{a:0,k:100},sk:{a:0,k:0},sa:{a:0,k:0}}],bm:0}],ip:0,op:160,st:0,bm:0},{ddd:0,ind:3,ty:4,sr:1,ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:0,k:[168,168,0]},a:{a:0,k:[0,0,0]},s:{a:0,k:[100,100,100]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ks:{a:0,k:{i:[[-26.4,0],[0,-26.4],[26.4,0],[0,26.4]],o:[[26.4,0],[0,26.4],[-26.4,0],[0,-26.4]],v:[[0,-47],[47,0],[0,47],[-47,0]],c:!0}}},{ty:"st",c:{a:0,k:[.474509805441,.427450984716,.51372551918,1]},o:{a:0,k:100},w:{a:0,k:3},lc:1,lj:2,bm:0},{ty:"tr",p:{a:0,k:[.54,.82]},a:{a:0,k:[0,0]},s:{a:0,k:[300,300]},r:{a:0,k:0},o:{a:0,k:100},sk:{a:0,k:0},sa:{a:0,k:0}}],bm:0},{ty:"tm",s:{a:1,k:[{i:{x:[.67],y:[1]},o:{x:[.33],y:[0]},t:0,s:[100]},{t:35,s:[0]}]},e:{a:0,k:100},o:{a:0,k:0},m:1}],ip:0,op:160,st:0,bm:0}],Dy=[],jy={v:by,meta:vy,fr:ky,ip:wy,op:Sy,w:Cy,h:Ey,ddd:_y,assets:Oy,layers:Py,markers:Dy},Bs="/assets/gatchmon-CqbbMHZP.png",Ay="modulepreload",Ty=function(t){return"/"+t},Xr={},Iy=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){let l=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),c=r?.nonce||r?.getAttribute("nonce");s=l(n.map(u=>{if(u=Ty(u),u in Xr)return;Xr[u]=!0;const d=u.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":Ay,d||(f.as="script"),f.crossOrigin="",f.href=u,c&&f.setAttribute("nonce",c),document.head.appendChild(f),d)return new Promise((p,x)=>{f.addEventListener("load",p),f.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function o(r){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=r,window.dispatchEvent(c),!c.defaultPrevented)throw r}return s.then(r=>{for(const c of r||[])c.status==="rejected"&&o(c.reason);return e().catch(o)})},My=w.lazy(()=>Iy(()=>Promise.resolve().then(()=>k2),void 0));function Ry({card:t}){const e=Y(s=>s.selectCard),[n,i]=w.useState(!1);return!n||t.cardNumber===t.uniqueCardNumber?a.jsxs("div",{style:{position:"relative",height:"fit-content"},onContextMenu:()=>e(t),id:t.uniqueCardNumber,children:[a.jsx(My,{card:t,location:"fetchedData",setImageError:i}),t.restrictions.english==="Restricted to 1"&&a.jsx(Bx,{color:t.color.includes("Red")?"warning":"error",fontSize:"large",sx:{background:"rgba(8,8,8,0.5)",borderRadius:"5px",position:"absolute",bottom:8,right:3,pointerEvents:"none"}}),["Banned","Unreleased"].includes(t.restrictions.english)&&a.jsx(Nx,{color:t.color.includes("Red")?"warning":"error",fontSize:"large",sx:{position:"absolute",bottom:8,right:5,pointerEvents:"none"}})]}):a.jsx(a.Fragment,{})}const zs=()=>a.jsxs(Ls,{children:[a.jsx(Ft,{animationData:mo,loop:!0,style:{width:"90px"}}),a.jsx("img",{alt:"",src:Bs,width:80,height:100})]});function By(){const t=he(s=>s.isLoading),e=he(s=>s.fetchedCards),n=he(s=>s.filteredCards),i=w.useMemo(()=>n,[n]);return w.useEffect(()=>{document.getElementById("search-container")?.addEventListener("contextmenu",function(o){o.preventDefault()})},[]),a.jsx(zy,{id:"search-container",children:a.jsxs(w.Suspense,{fallback:a.jsx(zs,{}),children:[t&&a.jsx(zs,{}),!t&&n.length<2e3&&n!==e?i?.map((s,o)=>a.jsx(Ry,{card:s},s.uniqueCardNumber+o)):a.jsx(Ls,{children:a.jsx("img",{alt:"gatchmon",src:Bs,width:100,height:120})}),!t&&i.length===0&&a.jsxs(Ls,{children:[a.jsx(Ft,{animationData:jy,loop:!1,style:{width:"70px"}}),a.jsx("img",{alt:"gatchmon",src:Bs,width:80,height:100})]})]})})}const Ls=k.div`
    height: 90%;
    width: 90%;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,zy=k.div`
    flex: 1;
    min-height: 400px;
    max-height: calc(100vh - 238px);
    font-family: "AwsumSans", sans-serif;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    place-content: flex-start;
    gap: 16px;
    border-radius: 5px;

    overflow-y: scroll;
    overflow-x: hidden;

    padding: 8px 0 10px 12px;
    border: 2px solid rgba(87, 136, 210, 0.25);
    filter: drop-shadow(0 0 3px rgba(56, 111, 240, 0.325));

    @supports (-moz-appearance: none) {
        scrollbar-width: thin;
    }

    &::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(
            to bottom right,
            rgba(140, 171, 238, 0.75) 0%,
            rgba(83, 106, 166, 0.75) 50%,
            rgba(69, 83, 114, 0.75) 100%
        );
        border-radius: 5px;
        box-shadow:
            inset 0 1px 2px rgba(255, 255, 255, 0.6),
            inset 0 -1px 3px rgba(0, 0, 0, 0.9);
    }

    box-shadow:
        inset 0 0 8px rgba(55, 185, 255, 0.1),
        inset 0 0 13px rgba(64, 180, 252, 0.1),
        inset 0 0 18px rgba(71, 187, 250, 0.1);
`;function go(t,e,n){const i=t.slice();return i.splice(n<0?i.length+n:n,0,i.splice(e,1)[0]),i}function Ly(t,e){return t.reduce((n,i,s)=>{const o=e.get(i);return o&&(n[s]=o),n},Array(t.length))}function di(t){return t!==null&&t>=0}function Ny(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function Fy(t){return typeof t=="boolean"?{draggable:t,droppable:t}:t}const wc=t=>{let{rects:e,activeIndex:n,overIndex:i,index:s}=t;const o=go(e,i,n),r=e[s],c=o[s];return!c||!r?null:{x:c.left-r.left,y:c.top-r.top,scaleX:c.width/r.width,scaleY:c.height/r.height}},Sc="Sortable",Cc=Ks.createContext({activeIndex:-1,containerId:Sc,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:wc,disabled:{draggable:!1,droppable:!1}});function $y(t){let{children:e,id:n,items:i,strategy:s=wc,disabled:o=!1}=t;const{active:r,dragOverlay:c,droppableRects:l,over:u,measureDroppableContainers:d}=hl(),h=fl(Sc,n),f=c.rect!==null,p=w.useMemo(()=>i.map(I=>typeof I=="object"&&"id"in I?I.id:I),[i]),x=r!=null,y=r?p.indexOf(r.id):-1,m=u?p.indexOf(u.id):-1,g=w.useRef(p),v=!Ny(p,g.current),S=m!==-1&&y===-1||v,D=Fy(o);Pa(()=>{v&&x&&d(p)},[v,p,x,d]),w.useEffect(()=>{g.current=p},[p]);const j=w.useMemo(()=>({activeIndex:y,containerId:h,disabled:D,disableTransforms:S,items:p,overIndex:m,useDragOverlay:f,sortedRects:Ly(p,l),strategy:s}),[y,h,D.draggable,D.droppable,S,p,m,l,f,s]);return Ks.createElement(Cc.Provider,{value:j},e)}const Vy=t=>{let{id:e,items:n,activeIndex:i,overIndex:s}=t;return go(n,i,s).indexOf(e)},Gy=t=>{let{containerId:e,isSorting:n,wasDragging:i,index:s,items:o,newIndex:r,previousItems:c,previousContainerId:l,transition:u}=t;return!u||!i||c!==o&&s===r?!1:n?!0:r!==s&&e===l},Uy={duration:200,easing:"ease"},Ec="transform",Wy=Xs.Transition.toString({property:Ec,duration:0,easing:"linear"}),qy={roleDescription:"sortable"};function Hy(t){let{disabled:e,index:n,node:i,rect:s}=t;const[o,r]=w.useState(null),c=w.useRef(n);return Pa(()=>{if(!e&&n!==c.current&&i.current){const l=s.current;if(l){const u=yl(i.current,{ignoreTransform:!0}),d={x:l.left-u.left,y:l.top-u.top,scaleX:l.width/u.width,scaleY:l.height/u.height};(d.x||d.y)&&r(d)}}n!==c.current&&(c.current=n)},[e,n,i,s]),w.useEffect(()=>{o&&r(null)},[o]),o}function Yy(t){let{animateLayoutChanges:e=Gy,attributes:n,disabled:i,data:s,getNewIndex:o=Vy,id:r,strategy:c,resizeObserverConfig:l,transition:u=Uy}=t;const{items:d,containerId:h,activeIndex:f,disabled:p,disableTransforms:x,sortedRects:y,overIndex:m,useDragOverlay:g,strategy:v}=w.useContext(Cc),S=Qy(i,p),D=d.indexOf(r),j=w.useMemo(()=>({sortable:{containerId:h,index:D,items:d},...s}),[h,s,D,d]),I=w.useMemo(()=>d.slice(d.indexOf(r)),[d,r]),{rect:B,node:W,isOver:V,setNodeRef:Z}=pl({id:r,data:j,disabled:S.droppable,resizeObserverConfig:{updateMeasurementsFor:I,...l}}),{active:ne,activatorEvent:ee,activeNodeRect:ie,attributes:K,setNodeRef:te,listeners:X,isDragging:be,over:we,setActivatorNodeRef:se,transform:L}=xl({id:r,data:j,attributes:{...qy,...n},disabled:S.draggable}),N=ml(Z,te),ge=!!ne,ve=ge&&!x&&di(f)&&di(m),Se=!g&&be,oe=Se&&ve?L:null,xe=ve?oe??(c??v)({rects:y,activeNodeRect:ie,activeIndex:f,overIndex:m,index:D}):null,Me=di(f)&&di(m)?o({id:r,items:d,activeIndex:f,overIndex:m}):D,je=ne?.id,Ee=w.useRef({activeId:je,items:d,newIndex:Me,containerId:h}),at=d!==Ee.current.items,O=e({active:ne,containerId:h,isDragging:be,isSorting:ge,id:r,index:D,items:d,newIndex:Ee.current.newIndex,previousItems:Ee.current.items,previousContainerId:Ee.current.containerId,transition:u,wasDragging:Ee.current.activeId!=null}),_=Hy({disabled:!O,index:D,node:W,rect:B});return w.useEffect(()=>{ge&&Ee.current.newIndex!==Me&&(Ee.current.newIndex=Me),h!==Ee.current.containerId&&(Ee.current.containerId=h),d!==Ee.current.items&&(Ee.current.items=d)},[ge,Me,h,d]),w.useEffect(()=>{if(je===Ee.current.activeId)return;if(je!=null&&Ee.current.activeId==null){Ee.current.activeId=je;return}const M=setTimeout(()=>{Ee.current.activeId=je},50);return()=>clearTimeout(M)},[je]),{active:ne,activeIndex:f,attributes:K,data:j,rect:B,index:D,newIndex:Me,items:d,isOver:V,isSorting:ge,isDragging:be,listeners:X,node:W,overIndex:m,over:we,setNodeRef:N,setActivatorNodeRef:se,setDroppableNodeRef:Z,setDraggableNodeRef:te,transform:_??xe,transition:C()};function C(){if(_||at&&Ee.current.newIndex===D)return Wy;if(!(Se&&!gl(ee)||!u)&&(ge||O))return Xs.Transition.toString({...u,property:Ec})}}function Qy(t,e){var n,i;return typeof t=="boolean"?{draggable:t,droppable:!1}:{draggable:(n=t?.draggable)!=null?n:e.draggable,droppable:(i=t?.droppable)!=null?i:e.droppable}}Jn.Down,Jn.Right,Jn.Up,Jn.Left;function Jy(t){const{attributes:e,listeners:n,setNodeRef:i,transform:s,transition:o,isDragging:r}=Yy({id:t.deck.id});return a.jsxs(Ky,{ref:i,...e,isDragging:r,transition:o,transform:s,children:[a.jsx(Xy,{...n,isDragging:r,children:":::"}),a.jsx(Ys,{isDragging:r,...t})]})}const Ky=k.div`
    transform: ${({transform:t})=>Xs.Transform.toString(t)};
    transition: ${({transition:t})=>t};
    z-index: ${({isDragging:t})=>t?1e3:1};
    box-shadow: ${({isDragging:t})=>t?"0 0 8px 0 rgba(160, 160, 160, 0.3)":"none"};
    border-radius: 12px;
    position: relative;
    cursor: ${({isDragging:t})=>t?"grabbing":"unset"};
`,Xy=k.div`
    position: absolute;
    z-index: 2;
    width: 34px;
    height: 20px;
    border-radius: 8px;
    background: linear-gradient(60deg, rgba(20, 20, 20, 0.3), rgba(30, 30, 30, 0.2));
    letter-spacing: 2px;
    font-family: "League Spartan", sans-serif;
    color: lightgray;
    top: 2px;
    right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    scale: ${({isDragging:t})=>t?.7:1};

    &:hover {
        cursor: ${({isDragging:t})=>t?"grabbing":"grab"};
        opacity: 0.8;
        background: linear-gradient(60deg, rgba(30, 30, 30, 0.5), rgba(60, 60, 60, 0.6));
    }
`;function Zy(){const t=he(x=>x.loadOrderedDecks),e=he(x=>x.deckIdOrder),n=he(x=>x.setDeckIdOrder),i=he(x=>x.isLoading),s=he(x=>x.clearDeck),[o,r]=w.useState(!1),[c,l]=w.useState([]),u=Nt(),d=bl(vl(Sl));function h(x){const{active:y,over:m}=x;if(m&&y.id!==m.id){const g=e.findIndex(S=>S===y.id),v=e.findIndex(S=>S===m.id);n(go(e,g,v),l)}}function f(){u("/deckbuilder"),s()}const p=w.useCallback(()=>t(l),[t]);return w.useLayoutEffect(()=>p(),[p]),w.useLayoutEffect(()=>{!i&&c.length<16&&r(!0)},[i,c.length]),a.jsxs(un,{style:{justifyContent:"flex-start"},children:[a.jsx(_i,{headline:"Decks",rightElement:a.jsx(Ni,{route:"/"})}),a.jsx(kl,{sensors:d,collisionDetection:wl,onDragEnd:h,children:a.jsx(e2,{children:i?a.jsx(zs,{}):a.jsxs(a.Fragment,{children:[a.jsx($y,{items:c,children:c?.map(x=>a.jsx(w.Fragment,{children:a.jsx(Jy,{deck:x})},x.id))}),o&&a.jsx(t2,{className:"button",onClick:f,children:a.jsx(Tx,{})})]})})})]})}const e2=k.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    align-items: flex-start;
    background: rgba(0, 0, 0, 0);
    scrollbar-width: none;
    max-width: 1204px;

    ::-webkit-scrollbar {
        visibility: hidden;
    }
`,t2=k.div`
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    height: 180px;
    width: 280px;
    background: linear-gradient(
        20deg,
        rgba(87, 171, 255, 0.06) 0%,
        rgba(93, 159, 236, 0.06) 70%,
        rgba(94, 187, 245, 0.16) 100%
    );
    padding: 3px;
    box-shadow: inset 0 0 3px 0 rgba(148, 224, 255, 0.4);

    &:hover {
        background: linear-gradient(
            20deg,
            rgba(87, 171, 255, 0.12) 0%,
            rgba(93, 159, 236, 0.12) 70%,
            rgba(94, 187, 245, 0.22) 100%
        );

        .MuiSvgIcon-root {
            color: rgba(0, 191, 165, 0.9);
            font-size: 110px;
        }
    }

    &:active {
        height: 170px;
        width: 270px;
        margin: 5px;

        .MuiSvgIcon-root {
            font-size: 100px;
        }
    }

    .MuiSvgIcon-root {
        color: rgba(0, 54, 77, 0.74);
        font-size: 100px;
    }
`;function xs(){return a.jsxs(a.Fragment,{children:[a.jsx("option",{value:"",children:"🌈"}),a.jsx("option",{value:"Red",children:"🟥"}),a.jsx("option",{value:"Yellow",children:"🟨"}),a.jsx("option",{value:"Green",children:"🟩"}),a.jsx("option",{value:"Blue",children:"🟦"}),a.jsx("option",{value:"Purple",children:"🟪"}),a.jsx("option",{value:"Black",children:"⬛"}),a.jsx("option",{value:"White",children:"⬜"})]})}function n2(){const t=he(L=>L.filterCards),[e,n]=w.useState(""),[i,s]=w.useState(""),[o,r]=w.useState(""),[c,l]=w.useState(""),[u,d]=w.useState(""),[h,f]=w.useState(null),[p,x]=w.useState(null),[y,m]=w.useState(null),[g,v]=w.useState(null),[S,D]=w.useState(""),[j,I]=w.useState(""),[B,W]=w.useState(""),[V,Z]=w.useState(""),[ne,ee]=w.useState(""),[ie,K]=w.useState(""),[te,X]=w.useState(!1),[be,we]=w.useState(!0);function se(){n(""),s(""),r(""),l(""),d(""),f(null),x(null),m(null),v(null),D(""),I(""),W(""),Z(""),ee(""),K(""),X(!1),t("","","","","","","","","",null,null,null,null,"","",!1,!0)}return w.useEffect(()=>{const L=setTimeout(()=>{t(e,u,i,o,c,B,V,S,j,p,h,y,g,ne,ie,te,be)},1400);return()=>clearTimeout(L)},[e,V,ie,ne,p]),w.useEffect(()=>{t(e,u,i,o,c,B,V,S,j,p,h,y,g,ne,ie,te,be)},[u,i,o,c,B,S,j,h,g,y,te,be]),a.jsxs(i2,{children:[a.jsxs(Fn,{children:[a.jsx(o2,{placeholder:"Set Number",value:V??void 0,onChange:L=>{Z(L.target.value)}}),a.jsx(s2,{placeholder:"Name",value:e??void 0,onChange:L=>n(L.target.value)}),a.jsx(c2,{min:-1e3,max:17e3,step:1e3,type:"number",placeholder:"DP",value:p??"",onChange:L=>{x(L.target.value==="-1000"?null:parseInt(L.target.value))}})]}),a.jsxs(Fn,{children:[a.jsxs(x2,{value:u??"Type",onChange:L=>d(L.target.value??""),children:[a.jsx("option",{value:"",children:"Type"}),a.jsx("option",{children:"Digimon"}),a.jsx("option",{children:"Digi-Egg"}),a.jsx("option",{children:"Option"}),a.jsx("option",{children:"Tamer"})]}),a.jsxs(p2,{value:B??"Attr.",onChange:L=>W(L.target.value??""),children:[a.jsx("option",{value:"",children:"Attr."}),a.jsx("option",{children:"Data"}),a.jsx("option",{children:"Free"}),a.jsx("option",{children:"Unknown"}),a.jsx("option",{children:"Variable"}),a.jsx("option",{children:"Vaccine"}),a.jsx("option",{children:"Virus"}),a.jsx("option",{style:{background:"rgb(4,24,35)"},children:"Game"}),a.jsx("option",{style:{background:"rgb(4,24,35)"},children:"God"}),a.jsx("option",{style:{background:"rgb(4,24,35)"},children:"Life"}),a.jsx("option",{style:{background:"rgb(4,24,35)"},children:"Navi"}),a.jsx("option",{style:{background:"rgb(4,24,35)"},children:"Social"}),a.jsx("option",{style:{background:"rgb(4,24,35)"},children:"System"}),a.jsx("option",{style:{background:"rgb(4,24,35)"},children:"Tool"})]}),a.jsxs(l2,{value:h??"",onChange:L=>{f(L.target.value==="-1"?null:parseInt(L.target.value))},children:[a.jsx("option",{value:-1,children:"Cost"}),a.jsx("option",{value:0,children:"0"}),a.jsx("option",{value:1,children:"1"}),a.jsx("option",{value:2,children:"2"}),a.jsx("option",{value:3,children:"3"}),a.jsx("option",{value:4,children:"4"}),a.jsx("option",{value:5,children:"5"}),a.jsx("option",{value:6,children:"6"}),a.jsx("option",{value:7,children:"7"}),a.jsx("option",{value:8,children:"8"}),a.jsx("option",{value:9,children:"9"}),a.jsx("option",{value:10,children:"10"}),a.jsx("option",{value:11,children:"11"}),a.jsx("option",{value:12,children:"12"}),a.jsx("option",{value:13,children:"13"}),a.jsx("option",{value:14,children:"14"}),a.jsx("option",{value:15,children:"15"}),a.jsx("option",{value:16,children:"16"}),a.jsx("option",{value:20,children:"20"})]}),a.jsxs(d2,{value:y??-1,onChange:L=>{m(L.target.value==="-1"?null:parseInt(L.target.value))},children:[a.jsx("option",{value:-1,children:"Digiv. Cost"}),a.jsx("option",{value:0,children:"0"}),a.jsx("option",{value:1,children:"1"}),a.jsx("option",{value:2,children:"2"}),a.jsx("option",{value:3,children:"3"}),a.jsx("option",{value:4,children:"4"}),a.jsx("option",{value:5,children:"5"}),a.jsx("option",{value:6,children:"6"}),a.jsx("option",{value:7,children:"7"}),a.jsx("option",{value:8,children:"8"}),a.jsx("option",{value:9,children:"9"})]}),a.jsxs(u2,{value:g??-1,onChange:L=>{v(L.target.value==="-1"?null:parseInt(L.target.value))},children:[a.jsx("option",{value:-1,children:"Lvl"}),a.jsx("option",{value:2,children:"2"}),a.jsx("option",{value:3,children:"3"}),a.jsx("option",{value:4,children:"4"}),a.jsx("option",{value:5,children:"5"}),a.jsx("option",{value:6,children:"6"}),a.jsx("option",{value:7,children:"7"})]})]}),a.jsxs(Fn,{children:[a.jsxs(h2,{value:S??"Stage",onChange:L=>D(L.target.value??""),children:[a.jsx("option",{value:"",children:"Stage"}),a.jsx("option",{children:"In-Training"}),a.jsx("option",{children:"Rookie"}),a.jsx("option",{children:"Champion"}),a.jsx("option",{children:"Ultimate"}),a.jsx("option",{children:"Mega"}),a.jsx("option",{children:"Armor Form"}),a.jsx("option",{children:"Hybrid"}),a.jsx("option",{style:{background:"rgb(4,24,35)"},children:"Appmon"}),a.jsx("option",{style:{background:"rgb(4,24,35)"},children:"Stnd./Appmon"}),a.jsx("option",{style:{background:"rgb(4,24,35)"},children:"Sup./Appmon"}),a.jsx("option",{style:{background:"rgb(4,24,35)"},children:"Ult./Appmon"}),a.jsx("option",{style:{background:"rgb(4,24,35)"},children:"God/Appmon"}),a.jsx("option",{style:{background:"rgb(54,54,54)"},children:"D-Reaper"}),a.jsx("option",{style:{background:"rgb(54,54,54)"},children:"Eater"})]}),a.jsx(f2,{placeholder:"Trait",value:j??[],onChange:L=>{I(L.target.value)}}),a.jsx(a2,{placeholder:"Illustrator",value:ne??void 0,onChange:L=>ee(L.target.value)})]}),a.jsx(Fn,{children:a.jsx(r2,{placeholder:"Effect Text",value:ie??void 0,onChange:L=>K(L.target.value)})}),a.jsxs(Fn,{style:{marginTop:5,justifyContent:"space-evenly"},children:[a.jsxs(m2,{children:[a.jsx(ms,{value:i??"",style:{gridArea:"one",filter:`drop-shadow(0 0 3px ${gs(i)})`},onChange:L=>s(L.target.value??""),children:a.jsx(xs,{})}),a.jsx(ms,{value:o??"",style:{gridArea:"two",filter:`drop-shadow(0 0 3px ${gs(o)})`},onChange:L=>r(L.target.value??""),children:a.jsx(xs,{})}),a.jsx(ms,{value:c??"",style:{gridArea:"three",filter:`drop-shadow(0 0 3px ${gs(c)})`},onChange:L=>l(L.target.value??""),children:a.jsx(xs,{})})]}),a.jsx(g2,{children:a.jsx(Is,{className:"button",control:a.jsx(Ei,{size:"small",value:te,checked:te,onChange:L=>X(L.target.checked),sx:{color:"var(--blue)","&.Mui-checked":{color:"rgba(56, 111, 240, 1)"},maxWidth:"7px",maxHeight:"7px",transform:"translateY(-1px)"}}),label:"ACE",componentsProps:{typography:{fontFamily:"Sakana",lineHeight:1,color:"silver",marginLeft:"6px"}}})}),a.jsx(y2,{children:a.jsx(Is,{className:"button",control:a.jsx(Ei,{size:"small",value:be,checked:be,onChange:L=>we(L.target.checked),sx:{color:"var(--blue)","&.Mui-checked":{color:"rgba(56, 111, 240, 1)"},maxWidth:"7px",maxHeight:"7px",transform:"translateY(-2px)"}}),label:"Alt. Arts",componentsProps:{typography:{fontFamily:"League Spartan",fontWeight:"bold",lineHeight:1,color:"lightgrey",marginLeft:"6px"}}})}),a.jsx(b2,{type:"button",onClick:se,children:"CLEAR"})]})]})}const i2=k.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`,Fn=k.div`
    display: flex;
    flex-wrap: wrap;
`,Rn=k.input`
    height: 25px;
    flex: 1;
    margin: 0;
    padding: 0;
    border: 1px solid var(--blue);
    background-color: #1a1a1a;

    font-family: "Naston", sans-serif;
    text-align: center;

    &:focus {
        outline: none;
    }
    @container (max-width: 449px) {
        font-size: 0.7rem;
    }
`,s2=k(Rn)`
    grid-area: name;
`,o2=k(Rn)`
    grid-area: setnumber;
    max-width: 10.8125ch;
`,r2=k(Rn)`
    grid-area: effect;
`,a2=k(Rn)`
    grid-area: illustrator;
`,c2=k(Rn)`
    max-width: 10.8125ch;
`,hn=k.select`
    height: 27px !important;
    flex: 1;
    margin: 0;
    padding: 0;
    border: 1px solid var(--blue);
    background-color: #1a1a1a;
    font-family: "Naston", sans-serif;
    box-shadow: inset 0 2px 5px rgba(7, 70, 121, 0.2);
    transition: box-shadow 0.3s ease;

    text-align: center;

    &:focus {
        outline: none;
    }

    @media (max-width: 499px) {
        font-size: 0.64rem;
    }

    @media (min-width: 499px) {
        height: 20px;
    }
`,ms=k(hn)`
    grid-area: color;
    border: none;
    box-shadow: none;
    border-radius: 5px;
    background: rgba(26, 26, 26, 0.75);
`,l2=k(hn)`
    grid-area: playcost;
`,d2=k(hn)`
    grid-area: digivolutioncost;
`,u2=k(hn)`
    grid-area: level;
`,h2=k(hn)`
    grid-area: stage;
`,f2=k(Rn)`
    grid-area: digitype;
`,p2=k(hn)`
    grid-area: attribute;
`,x2=k(hn)`
    grid-area: type;
`,m2=k.div`
    grid-area: color;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "one two three";
    gap: 12px;
`,_c=k.div`
    height: 100%;
    width: 100px;
    display: flex;
    place-items: center;
    justify-content: center;
`,g2=k(_c)`
    width: 75px;
    padding-left: 25px;

    @media (max-width: 499px) {
        width: 56px;
        padding-left: 12px;
    }
`,y2=k(_c)`
    width: 100px;
    padding-left: 25px;

    @media (max-width: 499px) {
        width: 80px;
        padding-left: 6px;
    }
`,b2=k.button`
    grid-area: clear;

    margin-left: 1px;
    height: 25px;
    padding: 4px 6px 2px 6px;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0;
    outline: 1px solid #242424;
    border: 2px solid transparent;

    font-family: "League Spartan", sans-serif;
    letter-spacing: 2px;

    border-image: linear-gradient(to bottom right, rgba(255, 255, 255, 0.7) 0%, rgba(157, 157, 157, 0.7) 100%) 1;

    background: var(--blue-button-bg);
    color: ghostwhite;

    box-shadow:
        inset 0 3px 10px rgba(255, 255, 255, 0.2),
        inset 0 -3px 10px rgba(9, 8, 8, 0.3);

    &:hover {
        color: ghostwhite;
        background: var(--blue-button-bg-hover);
    }

    &:active {
        background: var(--blue-button-bg-active);
        box-shadow:
            inset -1px -1px 1px rgba(255, 255, 255, 0.6),
            inset 1px 1px 1px rgba(0, 0, 0, 0.8);
    }

    &:disabled {
        background: #27292d;
        pointer-events: none;
    }
`;function gs(t){switch(t){case"Red":return"#b02626";case"Yellow":return"#cbbc2f";case"Green":return"#0c8a3e";case"Blue":return"#017fc2";case"Purple":return"#7f2dbd";case"Black":return"#212121";case"White":return"#DBDBDB";default:return"transparent"}}function Ns(t){const{card:e,location:n,setImageError:i}=t,s=Y(h=>h.selectCard),o=Y(h=>h.setHoverCard),r=he(h=>h.addCardToDeck),c=ye(h=>h.playPlaceCardSfx),[l,u]=w.useState(e.imgUrl);function d(h){h.stopPropagation(),n==="fetchedData"?(r(e.cardNumber,e.cardType,e.uniqueCardNumber),c()):s(e)}return a.jsx(v2,{onClick:d,onMouseEnter:()=>o(e),onMouseOver:()=>o(e),onMouseLeave:()=>o(null),alt:e.name+" "+e.uniqueCardNumber,src:l,location:n,onError:()=>{i?.(!0),u(Ri)}})}const v2=k.img`
    width: ${({location:t})=>t==="fetchedData"?"90px":"100px"}!important;
    max-width: ${({location:t})=>t==="deck"?"130px":"unset"};
    border-radius: 5px;
    transition: all 0.15s ease-out;
    cursor: ${({location:t})=>t==="deck"?"help":"cell"};
    opacity: 1;
    filter: drop-shadow(0 0 1.5px #004567);

    &:hover {
        filter: drop-shadow(0 0 1.5px ghostwhite);
        //transform: scale(1.1);
    }

    @media (min-width: 500px) {
        min-width: 85px;
    }

    @media (min-width: 768px) {
        width: 95px;
    }

    @media (min-width: 1000px) {
        width: ${({location:t})=>t==="deck"?"5.9vw":"105px"};
    }

    @media (max-width: 700px) and (min-height: 800px) {
        width: 80px;
    }

    @media (max-width: 390px) {
        width: 61px;
    }
`,k2=Object.freeze(Object.defineProperty({__proto__:null,default:Ns},Symbol.toStringTag,{value:"Module"}));function w2(){const t=he(m=>m.mainDeckCards),e=he(m=>m.eggDeckCards),n=he(m=>m.isLoading),i=he(m=>m.isSettingDeck),s=he(m=>m.addCardToDeck),o=he(m=>m.deleteFromDeck),r=ye(m=>m.playPlaceCardSfx),c=ye(m=>m.playTrashCardSfx),l=t.filter(m=>m.cardType==="Digimon").length,u=t.filter(m=>m.cardType==="Tamer").length,d=t.filter(m=>m.cardType==="Option").length,h=e.length,f=Cl([...e,...t]),p={};f.forEach(m=>{const g=m.uniqueCardNumber;p[g]||(p[g]=[]),p[g].push(m)});function x(m){return m.cardType==="Digi-Egg"?h<5&&e.filter(g=>g.cardNumber===m.cardNumber).length<4:t.length<50&&t.filter(g=>g.cardNumber===m.cardNumber).length<4||[..._l,Ol].includes(m.cardNumber)}const y=lo("(max-width:499px)");return a.jsxs(a.Fragment,{children:[a.jsxs(E2,{children:[a.jsxs($n,{style:{scale:y?.9:void 0},children:[t.length," / 50"]}),a.jsx("div",{style:{transform:"translateY(3px)",scale:y?.9:1.1,width:50},children:a.jsx(El,{deckCards:t})}),a.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:y?8:24},children:[a.jsxs(ui,{children:[a.jsx(hi,{src:Kn("Digi-Egg"),alt:"Egg: "}),a.jsxs($n,{children:[h," / 5"]})]}),a.jsxs(ui,{children:[a.jsx(hi,{style:{width:y?40:50,transform:"translateY(1px)"},src:Kn("Option"),alt:"Option: "}),a.jsx($n,{children:d})]}),a.jsxs(ui,{children:[a.jsx(hi,{src:Kn("Tamer"),alt:"Tamer: "}),a.jsx($n,{children:u})]}),a.jsxs(ui,{children:[a.jsx(hi,{src:Kn("Digimon"),alt:"Digimon: "}),a.jsx($n,{children:l})]})]})]}),a.jsx(_2,{children:!n&&!i?Object.values(p).map((m,g)=>a.jsxs(S2,{children:[m.map((v,S)=>{if(S>0&&m[S-1]?.uniqueCardNumber===v.uniqueCardNumber){const D=S<3?5*S:15;return a.jsx("div",{style:{position:"absolute",left:D,top:D},children:S<4&&a.jsx(Ns,{card:v,location:"deck"})},v.id)}return a.jsx("div",{children:a.jsx(Ns,{card:v,location:"deck"})},v.id)}),a.jsxs(C2,{children:[a.jsx(O2,{className:"button",onClick:()=>{o(m.at(-1).id),c()},children:"−"}),a.jsx("span",{style:{color:m.length>4?"#ffcf00":void 0},children:m.length}),a.jsx(Oc,{className:"button",disabled:!x(m[0]),onClick:()=>{s(m[0].cardNumber,m[0].cardType,m[0].uniqueCardNumber),r()},children:"+"})]})]},g)):a.jsx("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:a.jsx(Ft,{animationData:mo,loop:!0,style:{width:"50%"}})})})]})}const S2=k.div`
    border-radius: 5px;
    padding: 0 16px 30px 0;
    position: relative;
    height: fit-content;

    ::before {
        content: "";
        position: absolute;
        opacity: 1;
        inset: 0;
        border-radius: 8px;
        background-image: repeating-linear-gradient(135deg, black 0px, transparent 1px);
        filter: blur(1px); /* Blur the pattern only */
        z-index: -1;
    }
`,C2=k.span`
    width: 100px;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    color: ghostwhite;
    text-shadow: 0 0 2px black;
    font-size: 18px;
    z-index: 9999;
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: space-between;
`,E2=k.div`
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    background: var(--blue);
`,ui=k.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`,hi=k.img`
    width: 45px;

    @media (max-width: 499px) {
        width: 35px;
    }
`,$n=k.span`
    font-size: 25px;
    font-family: "AwsumSans", sans-serif;
    transform: translateY(4px);
`,_2=k.div`
    width: calc(100% - 16px);
    height: calc(100% - 16px);
    max-height: calc(100vh - 250px);
    font-family: "AwsumSans", sans-serif;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    place-content: flex-start;
    gap: 16px;

    overflow-y: scroll;
    overflow-x: hidden;

    padding: 8px 0 10px 12px;
    border: 2px solid var(--blue);
    //border-radius: 5px;
    filter: drop-shadow(0 0 3px rgba(56, 111, 240, 0.325));

    animation: neon-inset-glow 5s infinite alternate;

    @supports (-moz-appearance: none) {
        scrollbar-width: thin;
    }

    &::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(
            to bottom right,
            rgba(63, 109, 207, 0.75) 0%,
            rgba(48, 95, 217, 0.75) 50%,
            rgba(84, 126, 215, 0.75) 100%
        );
        border-radius: 5px;
        box-shadow:
            inset 0 1px 2px rgba(255, 255, 255, 0.6),
            inset 0 -1px 3px rgba(0, 0, 0, 0.9);
    }

    @keyframes neon-inset-glow {
        0% {
            box-shadow:
                inset 0 0 5px rgba(30, 144, 255, 0.125),
                inset 0 0 10px rgba(30, 144, 255, 0.125),
                inset 0 0 15px rgba(30, 144, 255, 0.125);
        }
        100% {
            box-shadow:
                inset 0 0 8px rgba(30, 144, 255, 0.2),
                inset 0 0 13px rgba(30, 144, 255, 0.2),
                inset 0 0 18px rgba(30, 144, 255, 0.2);
        }
    }
`,Oc=k.div`
    border-radius: 3px;
    background: #1d6c63;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 18px;
    width: 32px;
    font-size: 24px;
    margin-bottom: 3px;
    font-family: sans-serif;
    box-shadow: inset 0 0 3px rgba(255, 255, 255, 0.5);
    z-index: 1000;
    opacity: 0.75;

    &:hover {
        opacity: 1;
        filter: brightness(1.2) contrast(1.2) saturate(1.1);
    }

    &:active {
        opacity: 1;
        filter: brightness(1.25) contrast(1.25) saturate(1.25);
    }

    pointer-events: ${t=>t.disabled?"none":"auto"};
    filter: ${t=>t.disabled?"grayscale(1) opacity(0.5)":"none"};
`,O2=k(Oc)`
    background: #721b39;
`,P2={pd:'["BT1-001_P1", ...]',tts:'["BT1-001", "BT1-001", "EX5-023", ...]',text:`// deck name

3 Agumon BT1-010
2 Greymon BT1-015
...`};function D2({deckName:t}){const[e,n]=w.useState(""),i=he(g=>g.importDeck),s=he(g=>g.exportDeck),[o,r]=w.useState(!1),[c,l]=w.useState(!1),u=he(g=>g.fetchedCards),[d,h]=w.useState("pd");function f(){if(d==="text"){i(e,d);return}try{const g=JSON.parse(e);g.every(v=>u.some(S=>S.cardNumber===v))||p(),Array.isArray(g)&&g.every(v=>typeof v=="string")?(i(g,d),n("")):p()}catch{p()}}function p(){l(!0);const g=setTimeout(()=>{l(!1)},3500);return()=>clearTimeout(g)}function x(){const g=s(d,t);n(g),navigator.clipboard.writeText(g).then(()=>{r(!0),setTimeout(()=>{r(!1)},3500)})}const y=g=>h(g.target.value),m=lo("(max-width:499px)");return a.jsxs(j2,{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-evenly",gap:m?12:28,padding:"0 8px 0 8px",width:"calc(100% - 16px)"},children:[!c&&a.jsxs(Fs,{className:"button",onClick:f,children:[!m&&a.jsx(Dr,{}),a.jsx("span",{children:"IMPORT"}),!m&&a.jsx(Dr,{})]}),c&&a.jsx(Fs,{style:{background:"crimson"},children:"INVALID!"}),a.jsxs("div",{style:{display:"flex",width:250,justifyContent:"space-between"},children:[a.jsxs("div",{style:{display:"flex"},children:[a.jsx("input",{type:"radio",value:"pd",id:"pd",name:"radio-buttons",className:"button",checked:d==="pd",onChange:y}),a.jsx(ys,{htmlFor:"pd",className:"button",checked:d==="pd",title:"Project Drasil (includes Alternate Arts)",children:"PD"})]}),a.jsxs("div",{style:{display:"flex"},children:[a.jsx("input",{type:"radio",value:"tts",id:"tts",name:"radio-buttons",className:"button",checked:d==="tts",onChange:y}),a.jsx(ys,{htmlFor:"tts",className:"button",checked:d==="tts",title:"Tabletop Simulator (without Alt Arts)",children:"TTS"})]}),a.jsxs("div",{style:{display:"flex"},children:[a.jsx("input",{type:"radio",value:"text",id:"text",name:"radio-buttons",className:"button",checked:d==="text",onChange:y}),a.jsx(ys,{htmlFor:"text",className:"button",checked:d==="text",title:"Text: digimoncard.dev text format",children:"Text"})]})]}),!o&&a.jsxs(Zr,{className:"button",onClick:x,children:[!m&&a.jsx(Pr,{}),a.jsx("span",{children:"EXPORT"}),!m&&a.jsx(Pr,{})]}),o&&a.jsx(Zr,{style:{background:"#32e7b7"},children:"COPIED!"})]}),a.jsx(A2,{value:e,placeholder:P2[d],onChange:g=>n(g.target.value)})]})}const j2=k.div`
    width: 100%;
    padding-top: 8px;
    height: 112px;
    background: linear-gradient(
        to bottom,
        var(--blue) 0%,
        var(--blue) 1%,
        rgba(14, 37, 91, 0.5) 25%,
        rgba(11, 30, 73, 0.25) 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    box-shadow: inset 0 -5px 20px var(--blue);
`,A2=k.textarea`
    resize: none;
    border-radius: 5px;
    border: none;
    font-size: 0.95em;
    width: calc(100% - 20px);
    height: calc(100% - 55px);
    background: rgba(9, 9, 9, 0.5);

    &:focus {
        outline: 1px solid #646cffa3;
        box-shadow: inset 0 0 2px ghostwhite;
    }

    &::-webkit-scrollbar {
        width: 3px;
        background-color: transparent;
        border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #c5c5c5;
        border-radius: 2px;
    }
`,Fs=k.div`
    height: 30px;
    width: 100%;
    max-width: 180px;
    min-width: 130px;
    border-radius: 5px;
    border: none;
    background: rgba(199, 65, 23, 0.8);
    box-shadow:
        inset -2px 2px 5px rgba(255, 255, 255, 0.3125),
        /* light top-right */ inset 2px -2px 5px rgba(0, 0, 0, 0.55); /* dark bottom-left */
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "League Spartan", sans-serif;
    font-size: 20px;
    letter-spacing: 0.2rem;

    span {
        transform: translateY(2px);
    }

    &:hover {
        background: #e34e1f;
    }

    &:active {
        background-color: #1ae1e8 !important;
        box-shadow:
            inset 1px -1px 5px rgba(255, 255, 255, 0.3125),
            /* light top-right */ inset -1px 1px 5px rgba(0, 0, 0, 0.55); /* dark bottom-left */
    }

    @media (max-width: 499px) {
        min-width: 95px;
    }
`,Zr=k(Fs)`
    background: rgba(46, 146, 245, 0.8);

    &:hover {
        background: #2fb1ea;
    }
`,ys=k.label`
    font-family: "League Spartan", sans-serif;
    font-size: 18px;
    margin-left: 3px;
    transform: translateY(2px);
    color: ${({checked:t})=>t?"#00ffc3":"ghostwhite"};
    text-decoration: ${({checked:t})=>t?"double underline":"none"};
`;function T2(t){const{deckName:e}=t,n=he(f=>f.decks),i=he(f=>f.saveDeck),s=he(f=>f.isSaving),o=()=>i(e),{id:r}=Da(),c=he(f=>f.deleteDeck),l=he(f=>f.updateDeck),u=Nt(),[d,h]=w.useState(!1);return r?a.jsxs(a.Fragment,{children:[a.jsx($s,{onClick:()=>r&&l(r,e),children:a.jsx(bs,{children:"SAVE CHANGES"})}),n.length>1&&a.jsx(I2,{isDeleting:d,onClick:()=>{d&&r&&c(r,u),h(!d)},children:a.jsx(bs,{style:d?{fontSize:16,letterSpacing:1,textDecoration:"double underline cyan"}:{},children:d?"DELETE PERMANENTLY?":"DELETE"})})]}):a.jsx($s,{disabled:s||n.length>=16,onClick:o,children:a.jsx(bs,{children:n.length>=16?"16/16 Decks":`SAVE (${n.length}/16)`})})}const bs=k.span`
    font-family: "League Spartan", sans-serif;
    letter-spacing: 2px;
    font-size: 18px;
    text-shadow: 0 -1px 1px rgba(2, 38, 19, 0.25);
`,$s=k.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0;
    outline: 1px solid #242424;
    border: 2px solid transparent;

    border-image: linear-gradient(to bottom right, rgba(255, 255, 255, 0.7) 0%, rgba(157, 157, 157, 0.7) 100%) 1;

    width: 200px;
    height: 36px;
    background: linear-gradient(
        to bottom,
        rgba(63, 207, 157, 0.5) 0%,
        rgba(48, 217, 127, 0.7) 50%,
        rgba(20, 100, 72, 0.9) 100%
    );
    color: ghostwhite;
    padding: 0.5rem 1rem;

    //
    box-shadow:
        inset 0 3px 10px rgba(255, 255, 255, 0.2),
        inset 0 -3px 10px rgba(9, 8, 8, 0.3);

    &:hover {
        color: ghostwhite;
        background: linear-gradient(
            to bottom,
            rgba(55, 229, 168, 0.5) 0%,
            rgba(33, 229, 148, 0.7) 50%,
            rgba(21, 112, 95, 0.9) 100%
        );
    }

    &:active {
        background: linear-gradient(
            to bottom,
            rgba(56, 236, 215, 0.5) 0%,
            rgba(32, 236, 212, 0.7) 50%,
            rgba(19, 126, 136, 0.9) 100%
        );
        box-shadow:
            inset -1px -1px 1px rgba(255, 255, 255, 0.6),
            inset 1px 1px 1px rgba(0, 0, 0, 0.8);
    }

    &:disabled {
        background: #27292d;
        pointer-events: none;
    }

    @media (max-width: 550px) {
        width: 180px;
    }

    @media (max-width: 420px) {
        width: 170px;
        scale: 0.9;
    }
`,I2=k($s)`
    width: 220px;

    filter: ${({isDeleting:t})=>t?"invert(1) brightness(2)":"unset"};

    background: linear-gradient(
        to bottom,
        rgba(220, 20, 60, 0.5) 0%,
        rgba(178, 0, 55, 0.7) 50%,
        rgba(120, 0, 35, 0.9) 100%
    );

    box-shadow:
        inset 0 3px 10px rgba(255, 255, 255, 0.2),
        inset 0 -3px 10px rgba(0, 0, 0, 0.3);

    &:hover {
        background: linear-gradient(
            to bottom,
            rgba(230, 30, 70, 0.5) 0%,
            rgba(190, 0, 60, 0.7) 50%,
            rgba(130, 0, 40, 0.9) 100%
        );
    }

    &:active {
        background: linear-gradient(
            to bottom,
            rgba(240, 40, 80, 0.5) 0%,
            rgba(200, 0, 65, 0.7) 50%,
            rgba(140, 0, 45, 0.9) 100%
        );
    }
`;function ea(){const{id:t}=Da(),e=Y(d=>d.selectedCard),n=Y(d=>d.hoverCard),i=he(d=>d.deckName),s=he(d=>d.setDeckName),o=he(d=>d.mainDeckCards),r=he(d=>d.setDeckById),c=he(d=>d.decks),l=he(d=>d.fetchedCards),u=w.useCallback(()=>{t||(localStorage.setItem("deckName",i),localStorage.setItem("deckCards",JSON.stringify(o)))},[i,i,o,t]);return w.useEffect(()=>(window.addEventListener("beforeunload",u),()=>window.removeEventListener("beforeunload",u)),[u]),w.useLayoutEffect(()=>{t&&c&&l&&r(t)},[t,c,l]),a.jsx(un,{children:a.jsxs(M2,{children:[a.jsxs(R2,{children:[a.jsx(L2,{src:(n??e)?.imgUrl??Ri,alt:n?.name??(n?"Card":e?.name??"Card")}),a.jsx(Js,{})]}),a.jsxs(B2,{children:[a.jsx("div",{style:{display:"flex",height:50,justifyContent:"center",alignItems:"center"},children:a.jsx(N2,{type:"text",value:i,maxLength:35,onChange:d=>s(d.target.value)})}),a.jsx(w2,{}),a.jsx(D2,{deckName:i})]}),a.jsxs(z2,{children:[a.jsxs("div",{style:{width:"100%",minHeight:50,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsx(T2,{deckName:i}),a.jsx(Ni,{})]}),a.jsx(n2,{}),a.jsx(By,{})]})]})})}const M2=k.div`
    display: flex;
    gap: 16px;
    flex: 1;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap-reverse;
`,R2=k.div`
    justify-self: flex-start;
    min-width: 380px;
    max-width: 380px;
    padding-right: 5px;
    margin: 8px 0 0 0;
    max-height: calc(100vh - 8px);

    overflow-y: auto;
    overflow-x: hidden;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        width: 0;
        display: none;
    }

    @media (max-width: 500px) {
        max-height: unset;
        min-width: 98%;
        max-width: 98%;
        margin-right: 8px;
    }
`,B2=k.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 500px;

    @media (max-width: 499px) {
        min-width: unset;
        max-width: 100vw;
    }
`,z2=k.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 400px;
    max-width: 550px;
    padding-right: 6px;

    @media (max-width: 499px) {
        min-width: unset;
        max-width: 100%;
        padding: 0;
    }
`,L2=k.img`
    grid-area: cardimage;
    aspect-ratio: 7 / 10;
    max-width: 100%;
    max-height: 380px;
    border-radius: 10px;
    filter: drop-shadow(0 0 3px #060e18);

    @media (max-width: 500px) {
        max-height: unset;
    }
`,N2=k.input`
    height: 35px;
    width: 35ch;
    font-family: "League Spartan", sans-serif;
    letter-spacing: 1px;
    text-align: center;
    font-size: 30px;
    padding: 3px 5px 0 5px;
    border: none;

    background: rgba(15, 50, 145, 0.3);

    &:focus {
        outline: 3px solid var(--blue);
    }
`;function F2(){const t=Y(E=>E.selectCard),e=Y(E=>E.selectedCard),n=Y(E=>E.hoverCard),i=Y(E=>E.user),s=Y(E=>E.activeDeckId),o=Y(E=>E.avatarName),r=Y(E=>E.getAvatar),c=Y(E=>E.setActiveDeck),l=Y(E=>E.getActiveDeck),u=Nt(),d=he(E=>E.decks),h=he(E=>E.fetchedCards),f=U(E=>E.clearBoard),p=U(E=>E.setPlayers),x=U(E=>E.progressToNextPhase),y=U(E=>E.setMessages),m=ye(E=>E.playAttackSfx),g=ye(E=>E.playEffectAttackSfx),v=ye(E=>E.playNextPhaseSfx),S=ye(E=>E.playShuffleDeckSfx),D=ae(E=>E.setArrowFrom),j=ae(E=>E.setArrowTo),I=ae(E=>E.setIsEffectArrow),B=ae(E=>E.stackDialog),W=ae(E=>E.openedCardDialog),V=mi(E=>E.details),{show:Z}=Yn({id:"detailsImageMenu"}),[ne,ee]=w.useState(null),[ie,K]=w.useState(!1),[te,X]=w.useState(null),be=w.useRef(null),we=w.useCallback(E=>({...E,modifiers:{plusDp:0,plusSecurityAttacks:0,keywords:[],colors:E.color},isTilted:!1,isFaceUp:!1}),[]),se=w.useCallback(E=>{let b=[...E];for(let P=0;P<3;P++)b=N(b);b=ge(b),b=ge(b),b=ve(b),b=Se(b),b=L(b),b=oe(b);for(let P=0;P<3;P++)b=N(b);return b=Q(b),b},[]),L=w.useCallback(E=>{const b=[...E],P=1e3;for(let T=0;T<P;T++){let F=!1;for(let G=0;G<b.length-1;G++)if(b[G].uniqueCardNumber===b[G+1].uniqueCardNumber){F=!0;let J=-1;const pe=50;for(let Be=0;Be<pe;Be++){const ze=new Uint32Array(1);crypto.getRandomValues(ze);const Ye=ze[0]%b.length;if(!(Ye>0&&b[Ye-1].uniqueCardNumber===b[G+1].uniqueCardNumber||Ye<b.length-1&&b[Ye+1].uniqueCardNumber===b[G+1].uniqueCardNumber||Math.abs(Ye-G)<=1)){J=Ye;break}}J!==-1&&([b[G+1],b[J]]=[b[J],b[G+1]])}if(!F)break}return b},[]),N=w.useCallback(E=>{const b=[...E];for(let P=b.length-1;P>0;P--){const T=new Uint32Array(1);crypto.getRandomValues(T);const F=T[0]%(P+1);[b[P],b[F]]=[b[F],b[P]]}return b},[]),ge=w.useCallback(E=>{const b=[...E],P=Math.floor(b.length/2),T=b.slice(0,P),F=b.slice(P),G=[];let J=0,pe=0;for(;J<T.length&&pe<F.length;){const Be=new Uint32Array(1);crypto.getRandomValues(Be),Be[0]%2===0?G.push(T[J++]):G.push(F[pe++])}return G.push(...T.slice(J)),G.push(...F.slice(pe)),G},[]),ve=w.useCallback(E=>{const b=[];for(let P=0;P<E.length;P++){const T=new Uint32Array(1);crypto.getRandomValues(T);const F=T[0]%(P+1);F===P?b.push(E[P]):(b.push(b[F]),b[F]=E[P])}return b},[]),Se=w.useCallback(E=>{const b=[...E],P=Math.max(3,Math.floor(Math.sqrt(E.length))),T=[];for(let F=0;F<b.length;F+=P)T.push(b.slice(F,F+P));for(let F=T.length-1;F>0;F--){const G=new Uint32Array(1);crypto.getRandomValues(G);const J=G[0]%(F+1);[T[F],T[J]]=[T[J],T[F]]}for(const F of T)for(let G=F.length-1;G>0;G--){const J=new Uint32Array(1);crypto.getRandomValues(J);const pe=J[0]%(G+1);[F[G],F[pe]]=[F[pe],F[G]]}return T.flat()},[]),oe=w.useCallback(E=>{const b=[...E];for(let P=b.length-1;P>0;P--){const T=new Uint32Array(1);crypto.getRandomValues(T);const F=T[0]%P;[b[P],b[F]]=[b[F],b[P]]}return b},[]),Q=w.useCallback(E=>{const b=[...E],P=4;for(let T=b.length-P;T>=0;T-=P){const F=Math.min(T+P,b.length),G=b.slice(T,F);for(let J=G.length-1;J>0;J--){const pe=new Uint32Array(1);crypto.getRandomValues(pe);const Be=pe[0]%(J+1);[G[J],G[Be]]=[G[Be],G[J]]}b.splice(T,G.length,...G)}return b},[]),xe=w.useCallback(E=>{const b=d.find(Oe=>Oe.id===E);if(!b||!b.mainDeckList.length){y("No deck found or deck is empty. Please select a different deck.");return}const P=o||"AncientIrismon",T=b.mainSleeveName||"Default",F=b.eggSleeveName||"Default";f(),U.setState({messages:[]});const G=[];let J=0;for(const Oe of[...b.mainDeckList,...b.eggDeckList]){const At=h.find(ct=>ct.uniqueCardNumber===Oe);At?G.push({...At,id:At.id+"_"+G.length}):(J++,console.warn(`Card not found in fetchedCards: ${Oe}`))}J>0&&console.warn(`${J} cards from deck not found in card database`);let pe=G.map(Oe=>we(Oe));pe=se(pe),pe=N(pe);const Be=pe.filter(Oe=>Oe.cardType==="Digi-Egg"),ze=pe.filter(Oe=>Oe.cardType!=="Digi-Egg"),Ye=ze.splice(0,5).map(Oe=>({...Oe,isFaceUp:!1})),jt=ze.splice(0,5).map(Oe=>({...Oe,isFaceUp:!1})),$t=ze.map(Oe=>({...Oe,isFaceUp:!1})),kt=Be.map(Oe=>({...Oe,isFaceUp:!1}));U.setState({myHand:jt,mySecurity:Ye,myDeckField:$t,myEggDeck:kt,myMemory:0,opponentMemory:0,phase:gi.MAIN,bootStage:Mi.GAME_IN_PROGRESS,player1:{username:i,avatarName:P,mainSleeveName:T,eggSleeveName:F}}),p({username:i,avatarName:P,mainSleeveName:T,eggSleeveName:F},{username:"Test Dummy",avatarName:"AncientIrismon",mainSleeveName:"Default",eggSleeveName:"Default"})},[d,h,we,se,f,p,y,i,o,N]),Me=w.useCallback(()=>{xe(s)},[s,xe]);w.useEffect(()=>{r(),l()},[r,l]),w.useEffect(()=>{s&&gt.get(`/api/profile/decks/${s}`).then(E=>X(E.data))},[s]),w.useEffect(()=>{const E=d.find(b=>b.id===s);E&&X(E)},[d,s]),w.useEffect(()=>{d.length>0&&h.length>0&&Me()},[d.length,h.length,Me]);const je=w.useCallback(E=>{const b=typeof E=="string"?E:String(E);b.includes("/moveCard:")&&console.log(`Mock move action: ${b}`)},[]),Ee=w.useCallback(E=>{E?g():m();const b=()=>{be.current!==null&&(clearTimeout(be.current),be.current=null),D(""),j(""),I(!1)};be.current=setTimeout(()=>{D(""),j(""),I(!1)},3500),ee(()=>b)},[m,g,D,j,I]),at=da({sendMessage:je,restartAttackAnimation:Ee,clearAttackAnimation:ne});w.useLayoutEffect(()=>{const E=b=>{const{item:P,targetId:T}=b.detail,F=T.includes("_bottom"),G=F?T.replace("_bottom",""):T,J=at(G,{bottom:F});J?.drop&&J.drop(P)};return window.addEventListener("reactDndDrop",E),()=>window.removeEventListener("reactDndDrop",E)},[at]);function O(){if(ie)return;K(!0);const E=setTimeout(()=>{x(),v(),K(!1)},920);return()=>clearTimeout(E)}function _(E,b,P){je(`test:/moveCard:${E}:${b}:${P}`)}function C(E){E.length&&y(i+"﹕"+E)}function M(){f(),u("/")}function R(E){const b=String(E.target.value);c(b),setTimeout(()=>{xe(b)},100)}const $={matchInfo:{gameId:"test-mode",user:i,opponentName:"Test Dummy"},sendMessage:je,sendMoveCard:_,sendChatMessage:C,sendSfx:E=>{E==="playShuffleDeckSfx"&&S()},sendPhaseUpdate:()=>console.log("Test mode: phase update"),nextPhase:O},H=Y(E=>E.cardWidth*.45),ce=w.useRef(null),Ce=ce.current?Math.max(window.outerHeight-148,800):void 0;w.useLayoutEffect(()=>window.scrollTo(document.documentElement.scrollWidth-window.innerWidth,0),[]);const fe="ontouchstart"in window?ma:ga,le=a.jsxs(U2,{height:Ce,children:[a.jsx(W2,{children:a.jsxs(Hs,{iconFontSize:H,children:[a.jsx("a",{href:"https://world.digimoncard.com/rule/pdf/general_rules.pdf",target:"_blank",rel:"noopener noreferrer",title:"Rulings",children:a.jsxs(q2,{sx:{color:"white",position:"relative"},children:[a.jsx(ba,{sx:{fontSize:`${H*.85}px!important`,opacity:.8}}),a.jsx(va,{sx:{color:"dodgerblue",position:"absolute",right:0,top:7,fontSize:`${H*.4}px!important`,pointerEvents:"none"}})]})}),a.jsx(ka,{iconFontSize:`${H}px!important`})]})}),a.jsxs(H2,{children:[!B&&!W&&a.jsx(wa,{matchInfo:$.matchInfo,sendChatMessage:C}),!!W&&a.jsx(Sa,{}),!!B&&a.jsx(Ca,{})]}),a.jsx(Ea,{}),a.jsx(_a,{wsUtils:$}),a.jsxs(Y2,{children:[a.jsxs(X2,{children:[a.jsx(K2,{value:s,onChange:R,children:d.map(E=>a.jsx("option",{value:E.id,children:E.name},E.id))}),!!te?.mainDeckList?.length&&a.jsx(Ys,{deck:te,lobbyView:!0})]}),a.jsxs(Z2,{children:[a.jsx(Q2,{className:"button",title:"Reset the deck and restart test",onClick:Me,children:"RESET"}),a.jsx(J2,{className:"button",title:"Exit test mode and return to lobby",onClick:M,children:"EXIT"})]})]}),a.jsx(Oa,{wsUtils:$})]});return a.jsxs($2,{ref:ce,children:[a.jsx(ua,{}),a.jsx(ha,{wsUtils:$}),a.jsx(fa,{wsUtils:$}),a.jsx(pa,{}),a.jsxs(V2,{height:Ce,style:{minHeight:window.innerHeight},children:[V!==yi.NO_IMAGE&&a.jsx(G2,{src:n?.imgUrl??e?.imgUrl??Ri,alt:"cardImg",onContextMenu:E=>Z({event:E}),onClick:()=>t(null),...!e&&!n&&{style:{pointerEvents:"none",opacity:.25,filter:"saturate(0.5)"}}}),V===yi.NO_IMAGE&&a.jsx("div",{style:{height:"10px"}}),a.jsx(Js,{})]}),a.jsxs(xa,{backend:fe,children:[le,a.jsx(ya,{})]})]})}const $2=k.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    position: relative;
    width: 100%;
    min-width: 100vw;
    height: 100%;
    min-height: 100vh;
    overflow-y: hidden;
    gap: 5px;
`,V2=k.div`
    background: rgba(0, 0, 0, 0.35);
    display: flex;
    width: 350px !important;
    max-width: 350px;
    height: ${({height:t})=>t?`${t}px`:"unset"};
    max-height: ${({height:t})=>t?`${t}px`:"unset"};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    overflow-x: hidden;
    overflow-y: scroll;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        width: 0;
        display: none;
    }
`,G2=k.img`
    width: calc(100% - 10px);
    border-radius: 3.5%;
    aspect-ratio: 5 / 7;
    z-index: 1000;
`,U2=k.div`
    position: relative;
    aspect-ratio: 35 / 20;
    height: ${({height:t})=>t?`${t}px`:"auto"};

    display: grid;
    grid-template-columns: repeat(35, 1fr);
    grid-template-rows: repeat(20, 1fr);

    container-type: inline-size;
    container-name: board-layout;

    transform: ${({isCameraTilted:t})=>t?"perspective(2000px) rotateX(35deg) rotateZ(0deg)":"unset"};
    padding: ${({isCameraTilted:t})=>t?"0 3.5vw 0 5vw":"0"};

    @supports (-moz-appearance: none) {
        height: ${({height:t})=>t?`${t-8}px`:"auto"};
    }
`,W2=k.div`
    grid-column: 1 / 9;
    grid-row: 1 / 3;
    z-index: 1;
`,q2=k(la)`
    width: fit-content;
    opacity: 0.7;
    display: flex;
`,H2=k.div`
    height: 95%;
    width: 95%;
    margin: 1.5%;
    padding: 0 1% 0 1%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    grid-column: 29 / 36;
    grid-row: 5 / 17;

    background: rgba(12, 21, 16, 0.1);
    border: 1px solid rgba(124, 124, 118, 0.6);
    border-radius: 1%;
    box-shadow: inset 5px 5px 30px 5px rgba(255, 255, 255, 0.09);
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5));

    z-index: 20;
`,Y2=k.div`
    grid-column: 4 / 32;
    grid-row: 4 / 10;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    z-index: 10;
`,Q2=k.div`
    border-radius: 5px;
    position: relative;
    border: none !important;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 120px;
    cursor: pointer;

    background: var(--blue-button-bg);
    color: ghostwhite;
    font-family: "Frutiger", sans-serif;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: 1px;

    filter: saturate(0.6);
    opacity: 0.8;

    text-shadow: 0 -2px 1px rgba(0, 0, 0, 0.25);
    box-shadow:
        inset 0 3px 10px rgba(255, 255, 255, 0.2),
        inset 0 -3px 10px rgba(0, 0, 0, 0.3);

    &:hover {
        color: ghostwhite;
        background: var(--blue-button-bg-hover);
        border: none;
    }

    &:active {
        background: var(--blue-button-bg-active);
        box-shadow:
            inset -1px -1px 1px rgba(255, 255, 255, 0.6),
            inset 1px 1px 1px rgba(0, 0, 0, 0.8);
    }
`,J2=k.div`
    border-radius: 5px;
    position: relative;
    border: none !important;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 120px;
    cursor: pointer;

    background: rgba(159, 39, 71, 0.8); /* Red tint background */
    color: ghostwhite;
    font-family: "Frutiger", sans-serif;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: 1px;

    filter: saturate(0.8);
    opacity: 0.9;

    text-shadow: 0 -2px 1px rgba(0, 0, 0, 0.25);
    box-shadow:
        inset 0 3px 10px rgba(255, 255, 255, 0.15),
        inset 0 -3px 10px rgba(0, 0, 0, 0.4);

    &:hover {
        color: ghostwhite;
        background: rgba(206, 52, 93, 0.9); /* Lighter red on hover */
        border: none;
        filter: saturate(1);
    }

    &:active {
        background: rgba(215, 22, 73, 1); /* Darker red on active */
        box-shadow:
            inset -1px -1px 1px rgba(255, 255, 255, 0.4),
            inset 1px 1px 1px rgba(0, 0, 0, 0.8);
    }
`,K2=k.select`
    width: 100%;
    padding: 6px 8px;
    border: 1px solid rgba(48, 95, 217, 0.7);
    border-radius: 3px;
    background-color: #0c0c0c;
    color: ghostwhite;
    font-family: "League Spartan", sans-serif;
    font-size: 14px;

    &:focus {
        outline: none;
        box-shadow: 0 0 5px rgba(48, 95, 217, 0.7);
    }

    option {
        background-color: #0c0c0c;
        color: ghostwhite;
    }
`,X2=k.div`
    width: fit-content;
    height: fit-content;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 6px; /* 6px gap between selection and ProfileDeck */

    position: relative;
    color: ghostwhite;
    background: rgba(12, 21, 16, 0.1); /* Matches chat/card modal background */
    border: 1px solid rgba(124, 124, 118, 0.6); /* Matches chat/card modal border */
    border-radius: 1%; /* Matches chat/card modal border radius */
    box-shadow: inset 5px 5px 30px 5px rgba(255, 255, 255, 0.09); /* Matches chat/card modal shadow */
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5)); /* Matches chat/card modal filter */
`,Z2=k.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;function e5(){const{data:t,isFetching:e,refetch:n}=Pi("/api/admin/banned"),{mutate:i,isPending:s}=Hn("/api/admin/ban","PUT"),{mutate:o,isPending:r}=Hn("/api/admin/unban","PUT"),[c,l]=w.useState("");function u(){i({pathVariable:"/"+c.trim()}).then(()=>l("")).finally(()=>n())}function d(h){o({pathVariable:"/"+h}).finally(()=>n())}return a.jsxs(t5,{children:[a.jsx("span",{style:{fontFamily:"Naston, sans-serif",color:"#1d7dfc"},children:"Banned Users:"}),a.jsxs(n5,{children:[a.jsx(s5,{placeholder:"Enter username to ban",value:c,onChange:h=>l(h.target.value),disabled:e||s||r}),a.jsx(Xe,{onClick:u,disabled:!c.trim()||t?.includes(c.trim())||e||s||r,children:"ADD"})]}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:t?.map(h=>a.jsx(i5,{label:h,onDelete:()=>d(h),disabled:e||s||r,variant:"outlined"},h))}),!t?.length&&a.jsx("span",{color:"rgba(255, 255, 255, 0.7)",children:"No banned users"})]})}const t5=k.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;
`,n5=k.div`
    display: flex;
    gap: 10px;
    align-items: center;
`,i5=k(xc)`
    background-color: rgba(255, 255, 255, 0.05);
    color: white;
    border-color: rgba(241, 185, 73, 0.53);

    .MuiChip-deleteIcon {
        color: rgba(255, 255, 255, 0.7);

        &:hover {
            color: #ff1b58;
        }
    }

    &:hover {
        background-color: rgba(12, 12, 12, 0.9);
    }

    &.Mui-disabled {
        opacity: 0.5;
    }
`,s5=k.input`
    width: 243px;
    height: 32px;
    background: #242424;
    font-family: Cousine, sans-serif;

    &:focus {
        outline: 2px solid #1d7dfc;
        outline-offset: -2px;
    }
`;function o5(){const{mutate:t,isPending:e}=Hn("/api/admin/server-message","POST"),[n,i]=w.useState("");function s(){t({payload:{message:n.trim()}}).then(()=>i(""))}return a.jsxs(r5,{children:[a.jsx("span",{style:{fontFamily:"Naston, sans-serif",color:"#1d7dfc"},children:"Send server message:"}),a.jsx(a5,{placeholder:"Enter message to be sent to all chats",value:n,onChange:o=>i(o.target.value),disabled:e}),a.jsx(Xe,{onClick:s,disabled:!n.trim()||e,children:"SEND"})]})}const r5=k.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;
`,a5=k.input`
    width: 100%;
    max-width: 503px;
    height: 32px;
    background: #242424;
    font-family: Cousine, sans-serif;

    &:focus {
        outline: 2px solid #1d7dfc;
        outline-offset: -2px;
    }
`;function c5(){const t=Y(i=>i.user),{data:e,isFetching:n}=Pi("/api/admin/admins");return!n&&e&&!e.includes(t)?a.jsx(qs,{to:"/"}):a.jsx(un,{children:a.jsxs("div",{style:{paddingTop:20,maxWidth:1204,minHeight:"100vh",height:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start"},children:[a.jsx(_i,{headline:"Administration",rightElement:a.jsx(Ni,{})}),n?a.jsx("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:a.jsx(Ft,{animationData:mo,loop:!0,style:{width:"50%"}})}):a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[a.jsx(e5,{}),a.jsx(o5,{})]})]})})}function l5(){const t=Y(o=>o.me),e=Y(o=>o.user),n=he(o=>o.fetchCards),i=he(o=>o.fetchDecks),s=Y(o=>o.setParticlesInitialized);return w.useEffect(()=>t(),[t]),w.useEffect(()=>n(),[n]),w.useEffect(()=>{e.length&&e!=="anonymousUser"&&i()},[i,e]),w.useEffect(()=>{su(async o=>await vp(o)).then(()=>s(!0))},[s]),a.jsxs(a.Fragment,{children:[a.jsx(zm,{}),a.jsxs(Pl,{children:[a.jsxs(nt,{element:a.jsx(Ax,{}),children:[a.jsx(nt,{path:"/",element:a.jsx(_m,{})}),a.jsx(nt,{path:"/profile",element:a.jsx(ux,{})}),a.jsx(nt,{path:"/decks",element:a.jsx(Zy,{})}),a.jsx(nt,{path:"/deckbuilder",element:a.jsx(ea,{})}),a.jsx(nt,{path:"/deckbuilder/:id",element:a.jsx(ea,{})}),a.jsx(nt,{path:"/game",element:a.jsx(ey,{})}),a.jsx(nt,{path:"/test",element:a.jsx(F2,{})}),a.jsx(nt,{path:"/administration",element:a.jsx(c5,{})}),a.jsx(nt,{path:"/*",element:a.jsx(qs,{to:"/"})})]}),a.jsx(nt,{path:"/login",element:a.jsx(mx,{})}),a.jsx(nt,{path:"/recover-password",element:a.jsx(wx,{})})]})]})}Dl.createRoot(document.getElementById("root")).render(a.jsx(Ks.StrictMode,{children:a.jsx(jl,{children:a.jsx(l5,{})})}));
