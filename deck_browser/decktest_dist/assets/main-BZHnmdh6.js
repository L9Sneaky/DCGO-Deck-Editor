import{j as a,r as w,s as k,u as Vt,a as be,b as Y0,g as J0,R as Q0,c as K0,d as De,e as Bi,f as Li,h as Zs,i as X0,B as Ps,k as sn,l as Mn,m as Ut,n as he,o as zi,p as Ni,q as En,t as Z0,v as ba,w as va,x as ec,y as tc,T as Pr,z as nc,A as q,C as ic,D as er,E as Ts,F as et,G as vt,H as dn,I as tr,J as nr,K as Xn,M as ir,L as ka,N as sr,O as sc,P as rc,Q as rr,S as Fi,U as oc,V as wa,W as ii,X as ac,Y as Tr,Z as Sa,_ as cc,$ as ce,a0 as fe,a1 as V,a2 as Ir,a3 as Un,a4 as lc,a5 as Ht,a6 as or,a7 as dc,a8 as ar,a9 as uc,aa as $i,ab as hc,ac as jn,ad as fc,ae as Ei,af as pc,ag as xc,ah as gc,ai as mc,aj as Ca,ak as Ea,al as yc,am as Rr,an as bc,ao as vc,ap as kc,aq as wc,ar as Sc,as as Cc,at as cr,au as Ec,av as jc,aw as Dc,ax as Ac,ay as Xe,az as Mr,aA as Lt,aB as rn,aC as Oc,aD as ja,aE as Da,aF as Aa,aG as Oa,aH as _a,aI as Pa,aJ as Gi,aK as Ta,aL as Ia,aM as Ra,aN as Ma,aO as Ba,aP as La,aQ as za,aR as Na,aS as Fa,aT as $a,aU as Ga,aV as Va,aW as ri,aX as _c,aY as Pc,aZ as Ua,a_ as lr,a$ as Tc,b0 as Ic,b1 as Rc,b2 as dr,b3 as Mc,b4 as Bc,b5 as Lc,b6 as zc,b7 as Nc,b8 as Fc,b9 as $c,ba as Gc,bb as Vc,bc as Uc,bd as Hc,be as Ha,bf as Wc,bg as st,bh as qc,bi as Yc}from"./index-DTM0aWW1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const on="generated",Jc="pointerdown",Qc="pointerup",Is="pointerleave",Kc="pointerout",hn="pointermove",Xc="touchstart",Br="touchend",Zc="touchmove",el="touchcancel",tl="resize",nl="visibilitychange",at="tsParticles - Error",zt=100,Me=.5,Ge=1e3,$e={x:0,y:0,z:0},oi={a:1,b:0,c:0,d:1},Bn="random",wi="mid",Ve=2,il=Math.PI*Ve,qi=60,Wa="true",Lr="false",Yi="canvas",zr=0,_t=2,Nr=4,sl=1,Fr=1,$r=1,rl=4,qa=1,Si=255,an=360,Rs=100,Ms=100,Gr=0,Bs=0,ol=60,al=0,ji=.25,Vr=Me+ji,Ur=0,cl=1,ll=0,dl=0,ul=1,ur=1,hl=1,Hr=1,Di=0,Ya=1,fl=0,pl=120,xl=0,gl=0,ml=1e4,yl=0,bl=1,Ai=0,Ja=1,vl=1,kl=0,Wr=1,wl=0,Sl=0,qr=-ji,Yr=1.5,Jr=0,Cl=1,El=0,Ls=0,Qa=1,jl=1,Oi=1,Dl=500,Qr=50,Al=0,zs=1,Ka=0,Kr=1,Ol=0,qt=255,Ji=3,Qi=6,_l=1,Pl=1,Tl=0,Il=0,Rl=0,Ml=0;var Fe;(function(t){t.bottom="bottom",t.bottomLeft="bottom-left",t.bottomRight="bottom-right",t.left="left",t.none="none",t.right="right",t.top="top",t.topLeft="top-left",t.topRight="top-right",t.outside="outside",t.inside="inside"})(Fe||(Fe={}));function Xa(t){return typeof t=="boolean"}function $t(t){return typeof t=="string"}function Gt(t){return typeof t=="number"}function Dn(t){return typeof t=="object"&&t!==null}function kt(t){return Array.isArray(t)}function z(t){return t==null}class Ze{constructor(e,n,i){if(this._updateFromAngle=(s,r)=>{this.x=Math.cos(s)*r,this.y=Math.sin(s)*r},!Gt(e)&&e){this.x=e.x,this.y=e.y;const s=e;this.z=s.z?s.z:$e.z}else if(e!==void 0&&n!==void 0)this.x=e,this.y=n,this.z=i??$e.z;else throw new Error(`${at} Vector3d not initialized correctly`)}static get origin(){return Ze.create($e.x,$e.y,$e.z)}get angle(){return Math.atan2(this.y,this.x)}set angle(e){this._updateFromAngle(e,this.length)}get length(){return Math.sqrt(this.getLengthSq())}set length(e){this._updateFromAngle(this.angle,e)}static clone(e){return Ze.create(e.x,e.y,e.z)}static create(e,n,i){return new Ze(e,n,i)}add(e){return Ze.create(this.x+e.x,this.y+e.y,this.z+e.z)}addTo(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}copy(){return Ze.clone(this)}distanceTo(e){return this.sub(e).length}distanceToSq(e){return this.sub(e).getLengthSq()}div(e){return Ze.create(this.x/e,this.y/e,this.z/e)}divTo(e){this.x/=e,this.y/=e,this.z/=e}getLengthSq(){return this.x**_t+this.y**_t}mult(e){return Ze.create(this.x*e,this.y*e,this.z*e)}multTo(e){this.x*=e,this.y*=e,this.z*=e}normalize(){const e=this.length;e!=Ai&&this.multTo(qa/e)}rotate(e){return Ze.create(this.x*Math.cos(e)-this.y*Math.sin(e),this.x*Math.sin(e)+this.y*Math.cos(e),$e.z)}setTo(e){this.x=e.x,this.y=e.y;const n=e;this.z=n.z?n.z:$e.z}sub(e){return Ze.create(this.x-e.x,this.y-e.y,this.z-e.z)}subFrom(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}}class Ne extends Ze{constructor(e,n){super(e,n,$e.z)}static get origin(){return Ne.create($e.x,$e.y)}static clone(e){return Ne.create(e.x,e.y)}static create(e,n){return new Ne(e,n)}}let Bl=Math.random;const Za={nextFrame:t=>requestAnimationFrame(t),cancel:t=>cancelAnimationFrame(t)};function we(){return ct(Bl(),0,1-Number.EPSILON)}function Ll(t){return Za.nextFrame(t)}function zl(t){Za.cancel(t)}function ct(t,e,n){return Math.min(Math.max(t,e),n)}function Ki(t,e,n,i){return Math.floor((t*n+e*i)/(n+i))}function tt(t){const e=bt(t),n=0;let i=Vi(t);return e===i&&(i=n),we()*(e-i)+i}function Y(t){return Gt(t)?t:tt(t)}function Vi(t){return Gt(t)?t:t.min}function bt(t){return Gt(t)?t:t.max}function ye(t,e){if(t===e||e===void 0&&Gt(t))return t;const n=Vi(t),i=bt(t);return e!==void 0?{min:Math.min(n,e),max:Math.max(i,e)}:ye(n,i)}function Ye(t,e){const n=t.x-e.x,i=t.y-e.y,s=2;return{dx:n,dy:i,distance:Math.sqrt(n**s+i**s)}}function nt(t,e){return Ye(t,e).distance}function Ft(t){return t*Math.PI/180}function Nl(t,e,n){if(Gt(t))return Ft(t);switch(t){case Fe.top:return-Math.PI*Me;case Fe.topRight:return-Math.PI*ji;case Fe.right:return al;case Fe.bottomRight:return Math.PI*ji;case Fe.bottom:return Math.PI*Me;case Fe.bottomLeft:return Math.PI*Vr;case Fe.left:return Math.PI;case Fe.topLeft:return-Math.PI*Vr;case Fe.inside:return Math.atan2(n.y-e.y,n.x-e.x);case Fe.outside:return Math.atan2(e.y-n.y,e.x-n.x);default:return we()*il}}function Fl(t){const e=Ne.origin;return e.length=1,e.angle=t,e}function Xr(t,e,n,i){return Ne.create(t.x*(n-i)/(n+i)+e.x*Ve*i/(n+i),t.y)}function $l(t){return{x:t.position?.x??we()*t.size.width,y:t.position?.y??we()*t.size.height}}function e0(t){return t?t.endsWith("%")?parseFloat(t)/zt:parseFloat(t):1}var cn;(function(t){t.auto="auto",t.increase="increase",t.decrease="decrease",t.random="random"})(cn||(cn={}));var Te;(function(t){t.increasing="increasing",t.decreasing="decreasing"})(Te||(Te={}));var fn;(function(t){t.none="none",t.max="max",t.min="min"})(fn||(fn={}));var ue;(function(t){t.bottom="bottom",t.left="left",t.right="right",t.top="top"})(ue||(ue={}));var Ln;(function(t){t.precise="precise",t.percent="percent"})(Ln||(Ln={}));var _n;(function(t){t.max="max",t.min="min",t.random="random"})(_n||(_n={}));const Gl={debug:console.debug,error:console.error,info:console.info,log:console.log,verbose:console.log,warning:console.warn};function pn(){return Gl}function Vl(t){const e=new Map;return(...n)=>{const i=JSON.stringify(n);if(e.has(i))return e.get(i);const s=t(...n);return e.set(i,s),s}}function Zr(t){const e={bounced:!1},{pSide:n,pOtherSide:i,rectSide:s,rectOtherSide:r,velocity:o,factor:c}=t;return i.min<r.min||i.min>r.max||i.max<r.min||i.max>r.max||(n.max>=s.min&&n.max<=(s.max+s.min)*Me&&o>Ur||n.min<=s.max&&n.min>(s.max+s.min)*Me&&o<Ur)&&(e.velocity=o*-c,e.bounced=!0),e}function Ul(t,e){const n=it(e,i=>t.matches(i));return kt(n)?n.some(i=>i):n}function xn(){return typeof window>"u"||!window||typeof window.document>"u"||!window.document}function Hl(){return!xn()&&typeof matchMedia<"u"}function t0(t){if(Hl())return matchMedia(t)}function Wl(t){if(!(xn()||typeof IntersectionObserver>"u"))return new IntersectionObserver(t)}function ql(t){if(!(xn()||typeof MutationObserver>"u"))return new MutationObserver(t)}function _e(t,e){return t===e||kt(e)&&e.indexOf(t)>-1}async function eo(t,e){try{await document.fonts.load(`${e??"400"} 36px '${t??"Verdana"}'`)}catch{}}function Yl(t){return Math.floor(we()*t.length)}function Ui(t,e,n=!0){return t[e!==void 0&&n?e%t.length:Yl(t)]}function hr(t,e,n,i,s){return Jl(si(t,i??0),e,n,s)}function Jl(t,e,n,i){let s=!0;return(!i||i===ue.bottom)&&(s=t.top<e.height+n.x),s&&(!i||i===ue.left)&&(s=t.right>n.x),s&&(!i||i===ue.right)&&(s=t.left<e.width+n.y),s&&(!i||i===ue.top)&&(s=t.bottom>n.y),s}function si(t,e){return{bottom:t.y+e,left:t.x-e,right:t.x+e,top:t.y-e}}function He(t,...e){for(const n of e){if(n==null)continue;if(!Dn(n)){t=n;continue}const i=Array.isArray(n);i&&(Dn(t)||!t||!Array.isArray(t))?t=[]:!i&&(Dn(t)||!t||Array.isArray(t))&&(t={});for(const s in n){if(s==="__proto__")continue;const r=n,o=r[s],c=t;c[s]=Dn(o)&&Array.isArray(o)?o.map(l=>He(c[s],l)):He(c[s],o)}}return t}function fr(t,e){return!!s0(e,n=>n.enable&&_e(t,n.mode))}function pr(t,e,n){it(e,i=>{const s=i.mode;i.enable&&_e(t,s)&&Ql(i,n)})}function Ql(t,e){const n=t.selectors;it(n,i=>{e(i,t)})}function n0(t,e){if(!(!e||!t))return s0(t,n=>Ul(e,n.selectors))}function Ns(t){return{position:t.getPosition(),radius:t.getRadius(),mass:t.getMass(),velocity:t.velocity,factor:Ne.create(Y(t.options.bounce.horizontal.value),Y(t.options.bounce.vertical.value))}}function i0(t,e){const{x:n,y:i}=t.velocity.sub(e.velocity),[s,r]=[t.position,e.position],{dx:o,dy:c}=Ye(r,s);if(n*o+i*c<0)return;const u=-Math.atan2(c,o),d=t.mass,h=e.mass,f=t.velocity.rotate(u),p=e.velocity.rotate(u),x=Xr(f,p,d,h),y=Xr(p,f,d,h),g=x.rotate(-u),m=y.rotate(-u);t.velocity.x=g.x*t.factor.x,t.velocity.y=g.y*t.factor.y,e.velocity.x=m.x*e.factor.x,e.velocity.y=m.y*e.factor.y}function Kl(t,e){const n=t.getPosition(),i=t.getRadius(),s=si(n,i),r=t.options.bounce,o=Zr({pSide:{min:s.left,max:s.right},pOtherSide:{min:s.top,max:s.bottom},rectSide:{min:e.left,max:e.right},rectOtherSide:{min:e.top,max:e.bottom},velocity:t.velocity.x,factor:Y(r.horizontal.value)});o.bounced&&(o.velocity!==void 0&&(t.velocity.x=o.velocity),o.position!==void 0&&(t.position.x=o.position));const c=Zr({pSide:{min:s.top,max:s.bottom},pOtherSide:{min:s.left,max:s.right},rectSide:{min:e.top,max:e.bottom},rectOtherSide:{min:e.left,max:e.right},velocity:t.velocity.y,factor:Y(r.vertical.value)});c.bounced&&(c.velocity!==void 0&&(t.velocity.y=c.velocity),c.position!==void 0&&(t.position.y=c.position))}function it(t,e){return kt(t)?t.map((i,s)=>e(i,s)):e(t,0)}function ot(t,e,n){return kt(t)?Ui(t,e,n):t}function s0(t,e){return kt(t)?t.find((i,s)=>e(i,s)):e(t,0)?t:void 0}function r0(t,e){const n=t.value,i=t.animation,s={delayTime:Y(i.delay)*Ge,enable:i.enable,value:Y(t.value)*e,max:bt(n)*e,min:Vi(n)*e,loops:0,maxLoops:Y(i.count),time:0},r=1;if(i.enable){switch(s.decay=r-Y(i.decay),i.mode){case cn.increase:s.status=Te.increasing;break;case cn.decrease:s.status=Te.decreasing;break;case cn.random:s.status=we()>=Me?Te.increasing:Te.decreasing;break}const o=i.mode===cn.auto;switch(i.startValue){case _n.min:s.value=s.min,o&&(s.status=Te.increasing);break;case _n.max:s.value=s.max,o&&(s.status=Te.decreasing);break;case _n.random:default:s.value=tt(s),o&&(s.status=we()>=Me?Te.increasing:Te.decreasing);break}}return s.initialValue=s.value,s}function Xl(t,e){if(!(t.mode===Ln.percent)){const{mode:s,...r}=t;return r}return"x"in t?{x:t.x/zt*e.width,y:t.y/zt*e.height}:{width:t.width/zt*e.width,height:t.height/zt*e.height}}function o0(t,e){return Xl(t,e)}function Zl(t,e,n,i,s){switch(e){case fn.max:n>=s&&t.destroy();break;case fn.min:n<=i&&t.destroy();break}}function xr(t,e,n,i,s){if(t.destroyed||!e||!e.enable||(e.maxLoops??0)>0&&(e.loops??0)>(e.maxLoops??0))return;const d=(e.velocity??0)*s.factor,h=e.min,f=e.max,p=e.decay??1;if(e.time||(e.time=0),(e.delayTime??0)>0&&e.time<(e.delayTime??0)&&(e.time+=s.value),!((e.delayTime??0)>0&&e.time<(e.delayTime??0))){switch(e.status){case Te.increasing:e.value>=f?(n?e.status=Te.decreasing:e.value-=f,e.loops||(e.loops=0),e.loops++):e.value+=d;break;case Te.decreasing:e.value<=h?(n?e.status=Te.increasing:e.value+=f,e.loops||(e.loops=0),e.loops++):e.value-=d}e.velocity&&p!==1&&(e.velocity*=p),Zl(t,i,e.value,h,f),t.destroyed||(e.value=ct(e.value,h,f))}}function ed(t){const e=document.createElement("div").style;if(!t)return e;for(const n in t){const i=t[n];if(!Object.prototype.hasOwnProperty.call(t,n)||z(i))continue;const s=t.getPropertyValue?.(i);if(!s)continue;const r=t.getPropertyPriority?.(i);r?e.setProperty?.(i,s,r):e.setProperty?.(i,s)}return e}function td(t){const e=document.createElement("div").style,n=10,i={width:"100%",height:"100%",margin:"0",padding:"0",borderWidth:"0",position:"fixed",zIndex:t.toString(n),"z-index":t.toString(n),top:"0",left:"0"};for(const s in i){const r=i[s];e.setProperty(s,r)}return e}const nd=Vl(td);var Fs;(function(t){t.darken="darken",t.enlighten="enlighten"})(Fs||(Fs={}));function id(t,e){if(e){for(const n of t.colorManagers.values())if(e.startsWith(n.stringPrefix))return n.parseString(e)}}function pt(t,e,n,i=!0){if(!e)return;const s=$t(e)?{value:e}:e;if($t(s.value))return a0(t,s.value,n,i);if(kt(s.value))return pt(t,{value:Ui(s.value,n,i)});for(const r of t.colorManagers.values()){const o=r.handleRangeColor(s);if(o)return o}}function a0(t,e,n,i=!0){if(!e)return;const s=$t(e)?{value:e}:e;if($t(s.value))return s.value===Bn?l0():sd(t,s.value);if(kt(s.value))return a0(t,{value:Ui(s.value,n,i)});for(const r of t.colorManagers.values()){const o=r.handleColor(s);if(o)return o}}function Zn(t,e,n,i=!0){const s=pt(t,e,n,i);return s?c0(s):void 0}function c0(t){const e=t.r/Si,n=t.g/Si,i=t.b/Si,s=Math.max(e,n,i),r=Math.min(e,n,i),o={h:Gr,l:(s+r)*Me,s:Bs};return s!==r&&(o.s=o.l<Me?(s-r)/(s+r):(s-r)/(Ve-s-r),o.h=e===s?(n-i)/(s-r):o.h=n===s?Ve+(i-e)/(s-r):Ve*Ve+(e-n)/(s-r)),o.l*=Ms,o.s*=Rs,o.h*=ol,o.h<Gr&&(o.h+=an),o.h>=an&&(o.h-=an),o}function sd(t,e){return id(t,e)}function zn(t){const e=(t.h%an+an)%an,n=Math.max(Bs,Math.min(Rs,t.s)),i=Math.max(Ol,Math.min(Ms,t.l)),s=e/an,r=n/Rs,o=i/Ms;if(n===Bs){const x=Math.round(o*qt);return{r:x,g:x,b:x}}const c=(x,y,g)=>{if(g<0&&g++,g>1&&g--,g*Qi<1)return x+(y-x)*Qi*g;if(g*Ve<1)return y;if(g*Ji<1*Ve){const S=Ve/Ji;return x+(y-x)*(S-g)*Qi}return x},l=o<Me?o*(_l+r):o+r-o*r,u=Ve*o-l,d=Pl/Ji,h=Math.min(qt,qt*c(u,l,s+d)),f=Math.min(qt,qt*c(u,l,s)),p=Math.min(qt,qt*c(u,l,s-d));return{r:Math.round(h),g:Math.round(f),b:Math.round(p)}}function rd(t){const e=zn(t);return{a:t.a,b:e.b,g:e.g,r:e.r}}function l0(t){const e=Tl,n=Si+zs;return{b:Math.floor(tt(ye(e,n))),g:Math.floor(tt(ye(e,n))),r:Math.floor(tt(ye(e,n)))}}function Tt(t,e){return`rgba(${t.r}, ${t.g}, ${t.b}, ${e??ur})`}function ei(t,e){return`hsla(${t.h}, ${t.s}%, ${t.l}%, ${e??ur})`}function gr(t,e,n,i){let s=t,r=e;return s.r===void 0&&(s=zn(t)),r.r===void 0&&(r=zn(e)),{b:Ki(s.b,r.b,n,i),g:Ki(s.g,r.g,n,i),r:Ki(s.r,r.r,n,i)}}function $s(t,e,n){if(n===Bn)return l0();if(n===wi){const i=t.getFillColor()??t.getStrokeColor(),s=e?.getFillColor()??e?.getStrokeColor();if(i&&s&&e)return gr(i,s,t.getRadius(),e.getRadius());{const r=i??s;if(r)return zn(r)}}else return n}function d0(t,e,n,i){const s=$t(e)?e:e.value;return s===Bn?i?pt(t,{value:s}):n?Bn:wi:s===wi?wi:pt(t,{value:s})}function to(t){return t!==void 0?{h:t.h.value,s:t.s.value,l:t.l.value}:void 0}function u0(t,e,n){const i={h:{enable:!1,value:t.h},s:{enable:!1,value:t.s},l:{enable:!1,value:t.l}};return e&&(Xi(i.h,e.h,n),Xi(i.s,e.s,n),Xi(i.l,e.l,n)),i}function Xi(t,e,n){t.enable=e.enable,t.enable?(t.velocity=Y(e.speed)/zt*n,t.decay=Ja-Y(e.decay),t.status=Te.increasing,t.loops=Rl,t.maxLoops=Y(e.count),t.time=Ml,t.delayTime=Y(e.delay)*Ge,e.sync||(t.velocity*=we(),t.value*=we()),t.initialValue=t.value,t.offset=ye(e.offset)):t.velocity=Il}function Zi(t,e,n,i){if(!t||!t.enable||(t.maxLoops??0)>0&&(t.loops??0)>(t.maxLoops??0)||(t.time||(t.time=0),(t.delayTime??0)>0&&t.time<(t.delayTime??0)&&(t.time+=i.value),(t.delayTime??0)>0&&t.time<(t.delayTime??0)))return;const d=t.offset?tt(t.offset):0,h=(t.velocity??0)*i.factor+d*3.6,f=t.decay??1,p=bt(e),x=Vi(e);!n||t.status===Te.increasing?(t.value+=h,t.value>p&&(t.loops||(t.loops=0),t.loops++,n?t.status=Te.decreasing:t.value-=p)):(t.value-=h,t.value<0&&(t.loops||(t.loops=0),t.loops++,t.status=Te.increasing)),t.velocity&&f!==1&&(t.velocity*=f),t.value=ct(t.value,x,p)}function h0(t,e){if(!t)return;const{h:n,s:i,l:s}=t,r={h:{min:0,max:360},s:{min:0,max:100},l:{min:0,max:100}};n&&Zi(n,r.h,!1,e),i&&Zi(i,r.s,!0,e),s&&Zi(s,r.l,!0,e)}function Kn(t,e,n){t.beginPath(),t.moveTo(e.x,e.y),t.lineTo(n.x,n.y),t.closePath()}function od(t,e,n){t.fillStyle=n??"rgba(0,0,0,0)",t.fillRect($e.x,$e.y,e.width,e.height)}function ad(t,e,n,i){n&&(t.globalAlpha=i,t.drawImage(n,$e.x,$e.y,e.width,e.height),t.globalAlpha=1)}function es(t,e){t.clearRect($e.x,$e.y,e.width,e.height)}function cd(t){const{container:e,context:n,particle:i,delta:s,colorStyles:r,backgroundMask:o,composite:c,radius:l,opacity:u,shadow:d,transform:h}=t,f=i.getPosition(),p=i.rotation+(i.pathRotation?i.velocity.angle:Al),x={sin:Math.sin(p),cos:Math.cos(p)},y=!!p,g={a:x.cos*(h.a??oi.a),b:y?x.sin*(h.b??zs):h.b??oi.b,c:y?-x.sin*(h.c??zs):h.c??oi.c,d:x.cos*(h.d??oi.d)};n.setTransform(g.a,g.b,g.c,g.d,f.x,f.y),o&&(n.globalCompositeOperation=c);const m=i.shadowColor;d.enable&&m&&(n.shadowBlur=d.blur,n.shadowColor=Tt(m),n.shadowOffsetX=d.offset.x,n.shadowOffsetY=d.offset.y),r.fill&&(n.fillStyle=r.fill);const v=i.strokeWidth??Ka;n.lineWidth=v,r.stroke&&(n.strokeStyle=r.stroke);const S={container:e,context:n,particle:i,radius:l,opacity:u,delta:s,transformData:g,strokeWidth:v};dd(S),ud(S),ld(S),n.globalCompositeOperation="source-over",n.resetTransform()}function ld(t){const{container:e,context:n,particle:i,radius:s,opacity:r,delta:o,transformData:c}=t;if(!i.effect)return;const l=e.effectDrawers.get(i.effect);l&&l.draw({context:n,particle:i,radius:s,opacity:r,delta:o,pixelRatio:e.retina.pixelRatio,transformData:{...c}})}function dd(t){const{container:e,context:n,particle:i,radius:s,opacity:r,delta:o,strokeWidth:c,transformData:l}=t;if(!i.shape)return;const u=e.shapeDrawers.get(i.shape);u&&(n.beginPath(),u.draw({context:n,particle:i,radius:s,opacity:r,delta:o,pixelRatio:e.retina.pixelRatio,transformData:{...l}}),i.shapeClose&&n.closePath(),c>Ka&&n.stroke(),i.shapeFill&&n.fill())}function ud(t){const{container:e,context:n,particle:i,radius:s,opacity:r,delta:o,transformData:c}=t;if(!i.shape)return;const l=e.shapeDrawers.get(i.shape);l?.afterDraw&&l.afterDraw({context:n,particle:i,radius:s,opacity:r,delta:o,pixelRatio:e.retina.pixelRatio,transformData:{...c}})}function hd(t,e,n){e.draw&&e.draw(t,n)}function fd(t,e,n,i){e.drawParticle&&e.drawParticle(t,n,i)}function pd(t,e,n){return{h:t.h,s:t.s,l:t.l+(e===Fs.darken?-Kr:Kr)*n}}function xd(t,e,n){const i=e[n];i!==void 0&&(t[n]=(t[n]??cl)*i)}function no(t,e,n=!1){if(!e)return;const i=t;if(!i)return;const s=i.style;if(!s)return;const r=new Set;for(const o in s)Object.prototype.hasOwnProperty.call(s,o)&&r.add(s[o]);for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.add(e[o]);for(const o of r){const c=e.getPropertyValue(o);c?s.setProperty(o,c,n?"important":""):s.removeProperty(o)}}class gd{constructor(e,n){this.container=e,this._applyPostDrawUpdaters=r=>{for(const o of this._postDrawUpdaters)o.afterDraw?.(r)},this._applyPreDrawUpdaters=(r,o,c,l,u,d)=>{for(const h of this._preDrawUpdaters){if(h.getColorStyles){const{fill:f,stroke:p}=h.getColorStyles(o,r,c,l);f&&(u.fill=f),p&&(u.stroke=p)}if(h.getTransformValues){const f=h.getTransformValues(o);for(const p in f)xd(d,f,p)}h.beforeDraw?.(o)}},this._applyResizePlugins=()=>{for(const r of this._resizePlugins)r.resize?.()},this._getPluginParticleColors=r=>{let o,c;for(const l of this._colorPlugins)if(!o&&l.particleFillColor&&(o=Zn(this._engine,l.particleFillColor(r))),!c&&l.particleStrokeColor&&(c=Zn(this._engine,l.particleStrokeColor(r))),o&&c)break;return[o,c]},this._initCover=async()=>{const r=this.container.actualOptions,o=r.backgroundMask.cover,c=o.color;if(c){const l=pt(this._engine,c);if(l){const u={...l,a:o.opacity};this._coverColorStyle=Tt(u,u.a)}}else await new Promise((l,u)=>{if(!o.image)return;const d=document.createElement("img");d.addEventListener("load",()=>{this._coverImage={image:d,opacity:o.opacity},l()}),d.addEventListener("error",h=>{u(h.error)}),d.src=o.image})},this._initStyle=()=>{const r=this.element,o=this.container.actualOptions;if(r){this._fullScreen?this._setFullScreenStyle():this._resetOriginalStyle();for(const c in o.style){if(!c||!o.style||!Object.prototype.hasOwnProperty.call(o.style,c))continue;const l=o.style[c];l&&r.style.setProperty(c,l,"important")}}},this._initTrail=async()=>{const r=this.container.actualOptions,o=r.particles.move.trail,c=o.fill;if(!o.enable)return;const l=qa/o.length;if(c.color){const u=pt(this._engine,c.color);if(!u)return;this._trailFill={color:{...u},opacity:l}}else await new Promise((u,d)=>{if(!c.image)return;const h=document.createElement("img");h.addEventListener("load",()=>{this._trailFill={image:h,opacity:l},u()}),h.addEventListener("error",f=>{d(f.error)}),h.src=c.image})},this._paintBase=r=>{this.draw(o=>od(o,this.size,r))},this._paintImage=(r,o)=>{this.draw(c=>ad(c,this.size,r,o))},this._repairStyle=()=>{const r=this.element;if(!r)return;this._safeMutationObserver(c=>c.disconnect()),this._initStyle(),this.initBackground();const o=this._pointerEvents;r.style.pointerEvents=o,r.setAttribute("pointer-events",o),this._safeMutationObserver(c=>{!r||!(r instanceof Node)||c.observe(r,{attributes:!0})})},this._resetOriginalStyle=()=>{const r=this.element,o=this._originalStyle;!r||!o||no(r,o,!0)},this._safeMutationObserver=r=>{this._mutationObserver&&r(this._mutationObserver)},this._setFullScreenStyle=()=>{const r=this.element;r&&no(r,nd(this.container.actualOptions.fullScreen.zIndex),!0)},this._engine=n,this._standardSize={height:0,width:0};const i=e.retina.pixelRatio,s=this._standardSize;this.size={height:s.height*i,width:s.width*i},this._context=null,this._generated=!1,this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[],this._pointerEvents="none"}get _fullScreen(){return this.container.actualOptions.fullScreen.enable}clear(){const e=this.container.actualOptions,n=e.particles.move.trail,i=this._trailFill;e.backgroundMask.enable?this.paint():n.enable&&n.length>dl&&i?i.color?this._paintBase(Tt(i.color,i.opacity)):i.image&&this._paintImage(i.image,i.opacity):e.clear&&this.draw(s=>{es(s,this.size)})}destroy(){this.stop(),this._generated?(this.element?.remove(),this.element=void 0):this._resetOriginalStyle(),this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[]}draw(e){const n=this._context;if(n)return e(n)}drawAsync(e){const n=this._context;if(n)return e(n)}drawParticle(e,n){if(e.spawning||e.destroyed)return;const i=e.getRadius();if(i<=ll)return;const s=e.getFillColor(),r=e.getStrokeColor()??s;let[o,c]=this._getPluginParticleColors(e);o||(o=s),c||(c=r),!(!o&&!c)&&this.draw(l=>{const u=this.container,d=u.actualOptions,h=e.options.zIndex,f=ul-e.zIndexFactor,p=f**h.opacityRate,x=e.bubble.opacity??e.opacity?.value??ur,y=e.strokeOpacity??x,g=x*p,m=y*p,v={},S={fill:o?ei(o,g):void 0};S.stroke=c?ei(c,m):S.fill,this._applyPreDrawUpdaters(l,e,i,g,S,v),cd({container:u,context:l,particle:e,delta:n,colorStyles:S,backgroundMask:d.backgroundMask.enable,composite:d.backgroundMask.composite,radius:i*f**h.sizeRate,opacity:g,shadow:e.options.shadow,transform:v}),this._applyPostDrawUpdaters(e)})}drawParticlePlugin(e,n,i){this.draw(s=>fd(s,e,n,i))}drawPlugin(e,n){this.draw(i=>hd(i,e,n))}async init(){this._safeMutationObserver(e=>e.disconnect()),this._mutationObserver=ql(e=>{for(const n of e)n.type==="attributes"&&n.attributeName==="style"&&this._repairStyle()}),this.resize(),this._initStyle(),await this._initCover();try{await this._initTrail()}catch(e){pn().error(e)}this.initBackground(),this._safeMutationObserver(e=>{!this.element||!(this.element instanceof Node)||e.observe(this.element,{attributes:!0})}),this.initUpdaters(),this.initPlugins(),this.paint()}initBackground(){const e=this.container.actualOptions,n=e.background,i=this.element;if(!i)return;const s=i.style;if(s){if(n.color){const r=pt(this._engine,n.color);s.backgroundColor=r?Tt(r,n.opacity):""}else s.backgroundColor="";s.backgroundImage=n.image||"",s.backgroundPosition=n.position||"",s.backgroundRepeat=n.repeat||"",s.backgroundSize=n.size||""}}initPlugins(){this._resizePlugins=[];for(const e of this.container.plugins.values())e.resize&&this._resizePlugins.push(e),(e.particleFillColor??e.particleStrokeColor)&&this._colorPlugins.push(e)}initUpdaters(){this._preDrawUpdaters=[],this._postDrawUpdaters=[];for(const e of this.container.particles.updaters)e.afterDraw&&this._postDrawUpdaters.push(e),(e.getColorStyles??e.getTransformValues??e.beforeDraw)&&this._preDrawUpdaters.push(e)}loadCanvas(e){this._generated&&this.element&&this.element.remove(),this._generated=e.dataset&&on in e.dataset?e.dataset[on]==="true":this._generated,this.element=e,this.element.ariaHidden="true",this._originalStyle=ed(this.element.style);const n=this._standardSize;n.height=e.offsetHeight,n.width=e.offsetWidth;const i=this.container.retina.pixelRatio,s=this.size;e.height=s.height=n.height*i,e.width=s.width=n.width*i,this._context=this.element.getContext("2d"),this._safeMutationObserver(r=>r.disconnect()),this.container.retina.init(),this.initBackground(),this._safeMutationObserver(r=>{!this.element||!(this.element instanceof Node)||r.observe(this.element,{attributes:!0})})}paint(){const e=this.container.actualOptions;this.draw(n=>{e.backgroundMask.enable&&e.backgroundMask.cover?(es(n,this.size),this._coverImage?this._paintImage(this._coverImage.image,this._coverImage.opacity):this._coverColorStyle?this._paintBase(this._coverColorStyle):this._paintBase()):this._paintBase()})}resize(){if(!this.element)return!1;const e=this.container,n=e.canvas._standardSize,i={width:this.element.offsetWidth,height:this.element.offsetHeight},s=e.retina.pixelRatio,r={width:i.width*s,height:i.height*s};if(i.height===n.height&&i.width===n.width&&r.height===this.element.height&&r.width===this.element.width)return!1;const o={...n};n.height=i.height,n.width=i.width;const c=this.size;return this.element.width=c.width=r.width,this.element.height=c.height=r.height,this.container.started&&e.particles.setResizeFactor({width:n.width/o.width,height:n.height/o.height}),!0}setPointerEvents(e){this.element&&(this._pointerEvents=e,this._repairStyle())}stop(){this._safeMutationObserver(e=>e.disconnect()),this._mutationObserver=void 0,this.draw(e=>es(e,this.size))}async windowResize(){if(!this.element||!this.resize())return;const e=this.container,n=e.updateActualOptions();e.particles.setDensity(),this._applyResizePlugins(),n&&await e.refresh()}}var Pn;(function(t){t.canvas="canvas",t.parent="parent",t.window="window"})(Pn||(Pn={}));function rt(t,e,n,i,s){if(i){let r={passive:!0};Xa(s)?r.capture=s:s!==void 0&&(r=s),t.addEventListener(e,n,r)}else{const r=s;t.removeEventListener(e,n,r)}}class md{constructor(e){this.container=e,this._doMouseTouchClick=n=>{const i=this.container,s=i.actualOptions;if(this._canPush){const r=i.interactivity.mouse,o=r.position;if(!o)return;r.clickPosition={...o},r.clickTime=new Date().getTime();const c=s.interactivity.events.onClick;it(c.mode,l=>this.container.handleClickMode(l))}n.type==="touchend"&&setTimeout(()=>this._mouseTouchFinish(),Dl)},this._handleThemeChange=n=>{const i=n,s=this.container,r=s.options,o=r.defaultThemes,c=i.matches?o.dark:o.light;r.themes.find(u=>u.name===c)?.default.auto&&s.loadTheme(c)},this._handleVisibilityChange=()=>{const n=this.container,i=n.actualOptions;this._mouseTouchFinish(),i.pauseOnBlur&&(document?.hidden?(n.pageHidden=!0,n.pause()):(n.pageHidden=!1,n.animationStatus?n.play(!0):n.draw(!0)))},this._handleWindowResize=()=>{this._resizeTimeout&&(clearTimeout(this._resizeTimeout),delete this._resizeTimeout);const n=async()=>{await this.container.canvas?.windowResize()};this._resizeTimeout=setTimeout(()=>void n(),this.container.actualOptions.interactivity.events.resize.delay*Ge)},this._manageInteractivityListeners=(n,i)=>{const s=this._handlers,r=this.container,o=r.actualOptions,c=r.interactivity.element;if(!c)return;const l=c,u=r.canvas;u.setPointerEvents(l===u.element?"initial":"none"),(o.interactivity.events.onHover.enable||o.interactivity.events.onClick.enable)&&(rt(c,hn,s.mouseMove,i),rt(c,Xc,s.touchStart,i),rt(c,Zc,s.touchMove,i),o.interactivity.events.onClick.enable?(rt(c,Br,s.touchEndClick,i),rt(c,Qc,s.mouseUp,i),rt(c,Jc,s.mouseDown,i)):rt(c,Br,s.touchEnd,i),rt(c,n,s.mouseLeave,i),rt(c,el,s.touchCancel,i))},this._manageListeners=n=>{const i=this._handlers,s=this.container,r=s.actualOptions,o=r.interactivity.detectsOn,c=s.canvas.element;let l=Is;o===Pn.window?(s.interactivity.element=window,l=Kc):o===Pn.parent&&c?s.interactivity.element=c.parentElement??c.parentNode:s.interactivity.element=c,this._manageMediaMatch(n),this._manageResize(n),this._manageInteractivityListeners(l,n),document&&rt(document,nl,i.visibilityChange,n,!1)},this._manageMediaMatch=n=>{const i=this._handlers,s=t0("(prefers-color-scheme: dark)");if(s){if(s.addEventListener!==void 0){rt(s,"change",i.themeChange,n);return}s.addListener!==void 0&&(n?s.addListener(i.oldThemeChange):s.removeListener(i.oldThemeChange))}},this._manageResize=n=>{const i=this._handlers,s=this.container;if(!s.actualOptions.interactivity.events.resize)return;if(typeof ResizeObserver>"u"){rt(window,tl,i.resize,n);return}const o=s.canvas.element;this._resizeObserver&&!n?(o&&this._resizeObserver.unobserve(o),this._resizeObserver.disconnect(),delete this._resizeObserver):!this._resizeObserver&&n&&o&&(this._resizeObserver=new ResizeObserver(c=>{c.find(u=>u.target===o)&&this._handleWindowResize()}),this._resizeObserver.observe(o))},this._mouseDown=()=>{const{interactivity:n}=this.container;if(!n)return;const{mouse:i}=n;i.clicking=!0,i.downPosition=i.position},this._mouseTouchClick=n=>{const i=this.container,s=i.actualOptions,{mouse:r}=i.interactivity;r.inside=!0;let o=!1;const c=r.position;if(!(!c||!s.interactivity.events.onClick.enable)){for(const l of i.plugins.values())if(l.clickPositionValid&&(o=l.clickPositionValid(c),o))break;o||this._doMouseTouchClick(n),r.clicking=!1}},this._mouseTouchFinish=()=>{const n=this.container.interactivity;if(!n)return;const i=n.mouse;delete i.position,delete i.clickPosition,delete i.downPosition,n.status=Is,i.inside=!1,i.clicking=!1},this._mouseTouchMove=n=>{const i=this.container,s=i.actualOptions,r=i.interactivity,o=i.canvas.element;if(!r?.element)return;r.mouse.inside=!0;let c;if(n.type.startsWith("pointer")){this._canPush=!0;const u=n;if(r.element===window){if(o){const d=o.getBoundingClientRect();c={x:u.clientX-d.left,y:u.clientY-d.top}}}else if(s.interactivity.detectsOn===Pn.parent){const d=u.target,h=u.currentTarget;if(d&&h&&o){const f=d.getBoundingClientRect(),p=h.getBoundingClientRect(),x=o.getBoundingClientRect();c={x:u.offsetX+Ve*f.left-(p.left+x.left),y:u.offsetY+Ve*f.top-(p.top+x.top)}}else c={x:u.offsetX??u.clientX,y:u.offsetY??u.clientY}}else u.target===o&&(c={x:u.offsetX??u.clientX,y:u.offsetY??u.clientY})}else if(this._canPush=n.type!=="touchmove",o){const u=n,d=u.touches[u.touches.length-Qa],h=o.getBoundingClientRect();c={x:d.clientX-(h.left??Di),y:d.clientY-(h.top??Di)}}const l=i.retina.pixelRatio;c&&(c.x*=l,c.y*=l),r.mouse.position=c,r.status=hn},this._touchEnd=n=>{const i=n,s=Array.from(i.changedTouches);for(const r of s)this._touches.delete(r.identifier);this._mouseTouchFinish()},this._touchEndClick=n=>{const i=n,s=Array.from(i.changedTouches);for(const r of s)this._touches.delete(r.identifier);this._mouseTouchClick(n)},this._touchStart=n=>{const i=n,s=Array.from(i.changedTouches);for(const r of s)this._touches.set(r.identifier,performance.now());this._mouseTouchMove(n)},this._canPush=!0,this._touches=new Map,this._handlers={mouseDown:()=>this._mouseDown(),mouseLeave:()=>this._mouseTouchFinish(),mouseMove:n=>this._mouseTouchMove(n),mouseUp:n=>this._mouseTouchClick(n),touchStart:n=>this._touchStart(n),touchMove:n=>this._mouseTouchMove(n),touchEnd:n=>this._touchEnd(n),touchCancel:n=>this._touchEnd(n),touchEndClick:n=>this._touchEndClick(n),visibilityChange:()=>this._handleVisibilityChange(),themeChange:n=>this._handleThemeChange(n),oldThemeChange:n=>this._handleThemeChange(n),resize:()=>{this._handleWindowResize()}}}addListeners(){this._manageListeners(!0)}removeListeners(){this._manageListeners(!1)}}var qe;(function(t){t.configAdded="configAdded",t.containerInit="containerInit",t.particlesSetup="particlesSetup",t.containerStarted="containerStarted",t.containerStopped="containerStopped",t.containerDestroyed="containerDestroyed",t.containerPaused="containerPaused",t.containerPlay="containerPlay",t.containerBuilt="containerBuilt",t.particleAdded="particleAdded",t.particleDestroyed="particleDestroyed",t.particleRemoved="particleRemoved"})(qe||(qe={}));class We{constructor(){this.value=""}static create(e,n){const i=new We;return i.load(e),n!==void 0&&($t(n)||kt(n)?i.load({value:n}):i.load(n)),i}load(e){z(e)||z(e.value)||(this.value=e.value)}}class yd{constructor(){this.color=new We,this.color.value="",this.image="",this.position="",this.repeat="",this.size="",this.opacity=1}load(e){z(e)||(e.color!==void 0&&(this.color=We.create(this.color,e.color)),e.image!==void 0&&(this.image=e.image),e.position!==void 0&&(this.position=e.position),e.repeat!==void 0&&(this.repeat=e.repeat),e.size!==void 0&&(this.size=e.size),e.opacity!==void 0&&(this.opacity=e.opacity))}}class bd{constructor(){this.opacity=1}load(e){z(e)||(e.color!==void 0&&(this.color=We.create(this.color,e.color)),e.image!==void 0&&(this.image=e.image),e.opacity!==void 0&&(this.opacity=e.opacity))}}class vd{constructor(){this.composite="destination-out",this.cover=new bd,this.enable=!1}load(e){if(!z(e)){if(e.composite!==void 0&&(this.composite=e.composite),e.cover!==void 0){const n=e.cover,i=$t(e.cover)?{color:e.cover}:e.cover;this.cover.load(n.color!==void 0||n.image!==void 0?n:{color:i})}e.enable!==void 0&&(this.enable=e.enable)}}}class kd{constructor(){this.enable=!0,this.zIndex=0}load(e){z(e)||(e.enable!==void 0&&(this.enable=e.enable),e.zIndex!==void 0&&(this.zIndex=e.zIndex))}}class wd{constructor(){this.enable=!1,this.mode=[]}load(e){z(e)||(e.enable!==void 0&&(this.enable=e.enable),e.mode!==void 0&&(this.mode=e.mode))}}var Nn;(function(t){t.circle="circle",t.rectangle="rectangle"})(Nn||(Nn={}));class io{constructor(){this.selectors=[],this.enable=!1,this.mode=[],this.type=Nn.circle}load(e){z(e)||(e.selectors!==void 0&&(this.selectors=e.selectors),e.enable!==void 0&&(this.enable=e.enable),e.mode!==void 0&&(this.mode=e.mode),e.type!==void 0&&(this.type=e.type))}}class Sd{constructor(){this.enable=!1,this.force=2,this.smooth=10}load(e){z(e)||(e.enable!==void 0&&(this.enable=e.enable),e.force!==void 0&&(this.force=e.force),e.smooth!==void 0&&(this.smooth=e.smooth))}}class Cd{constructor(){this.enable=!1,this.mode=[],this.parallax=new Sd}load(e){z(e)||(e.enable!==void 0&&(this.enable=e.enable),e.mode!==void 0&&(this.mode=e.mode),this.parallax.load(e.parallax))}}class Ed{constructor(){this.delay=.5,this.enable=!0}load(e){z(e)||(e.delay!==void 0&&(this.delay=e.delay),e.enable!==void 0&&(this.enable=e.enable))}}class jd{constructor(){this.onClick=new wd,this.onDiv=new io,this.onHover=new Cd,this.resize=new Ed}load(e){if(z(e))return;this.onClick.load(e.onClick);const n=e.onDiv;n!==void 0&&(this.onDiv=it(n,i=>{const s=new io;return s.load(i),s})),this.onHover.load(e.onHover),this.resize.load(e.resize)}}class Dd{constructor(e,n){this._engine=e,this._container=n}load(e){if(z(e)||!this._container)return;const n=this._engine.interactors.get(this._container);if(n)for(const i of n)i.loadModeOptions&&i.loadModeOptions(this,e)}}class f0{constructor(e,n){this.detectsOn=Pn.window,this.events=new jd,this.modes=new Dd(e,n)}load(e){if(z(e))return;const n=e.detectsOn;n!==void 0&&(this.detectsOn=n),this.events.load(e.events),this.modes.load(e.modes)}}class Ad{load(e){z(e)||(e.position&&(this.position={x:e.position.x??Qr,y:e.position.y??Qr,mode:e.position.mode??Ln.percent}),e.options&&(this.options=He({},e.options)))}}var ln;(function(t){t.screen="screen",t.canvas="canvas"})(ln||(ln={}));class Od{constructor(){this.maxWidth=1/0,this.options={},this.mode=ln.canvas}load(e){z(e)||(z(e.maxWidth)||(this.maxWidth=e.maxWidth),z(e.mode)||(e.mode===ln.screen?this.mode=ln.screen:this.mode=ln.canvas),z(e.options)||(this.options=He({},e.options)))}}var Mt;(function(t){t.any="any",t.dark="dark",t.light="light"})(Mt||(Mt={}));class _d{constructor(){this.auto=!1,this.mode=Mt.any,this.value=!1}load(e){z(e)||(e.auto!==void 0&&(this.auto=e.auto),e.mode!==void 0&&(this.mode=e.mode),e.value!==void 0&&(this.value=e.value))}}class Pd{constructor(){this.name="",this.default=new _d}load(e){z(e)||(e.name!==void 0&&(this.name=e.name),this.default.load(e.default),e.options!==void 0&&(this.options=He({},e.options)))}}class mr{constructor(){this.count=0,this.enable=!1,this.speed=1,this.decay=0,this.delay=0,this.sync=!1}load(e){z(e)||(e.count!==void 0&&(this.count=ye(e.count)),e.enable!==void 0&&(this.enable=e.enable),e.speed!==void 0&&(this.speed=ye(e.speed)),e.decay!==void 0&&(this.decay=ye(e.decay)),e.delay!==void 0&&(this.delay=ye(e.delay)),e.sync!==void 0&&(this.sync=e.sync))}}class yr extends mr{constructor(){super(),this.mode=cn.auto,this.startValue=_n.random}load(e){super.load(e),!z(e)&&(e.mode!==void 0&&(this.mode=e.mode),e.startValue!==void 0&&(this.startValue=e.startValue))}}class ts extends mr{constructor(){super(),this.offset=0,this.sync=!0}load(e){super.load(e),!z(e)&&e.offset!==void 0&&(this.offset=ye(e.offset))}}class Td{constructor(){this.h=new ts,this.s=new ts,this.l=new ts}load(e){z(e)||(this.h.load(e.h),this.s.load(e.s),this.l.load(e.l))}}class ti extends We{constructor(){super(),this.animation=new Td}static create(e,n){const i=new ti;return i.load(e),n!==void 0&&($t(n)||kt(n)?i.load({value:n}):i.load(n)),i}load(e){if(super.load(e),z(e))return;const n=e.animation;n!==void 0&&(n.enable!==void 0?this.animation.h.load(n):this.animation.load(e.animation))}}var Tn;(function(t){t.absorb="absorb",t.bounce="bounce",t.destroy="destroy"})(Tn||(Tn={}));class Id{constructor(){this.speed=2}load(e){z(e)||e.speed!==void 0&&(this.speed=e.speed)}}class Rd{constructor(){this.enable=!0,this.retries=0}load(e){z(e)||(e.enable!==void 0&&(this.enable=e.enable),e.retries!==void 0&&(this.retries=e.retries))}}class mn{constructor(){this.value=0}load(e){z(e)||z(e.value)||(this.value=ye(e.value))}}class Md extends mn{constructor(){super(),this.animation=new mr}load(e){if(super.load(e),z(e))return;const n=e.animation;n!==void 0&&this.animation.load(n)}}class p0 extends Md{constructor(){super(),this.animation=new yr}load(e){super.load(e)}}class so extends mn{constructor(){super(),this.value=1}}class x0{constructor(){this.horizontal=new so,this.vertical=new so}load(e){z(e)||(this.horizontal.load(e.horizontal),this.vertical.load(e.vertical))}}class Bd{constructor(){this.absorb=new Id,this.bounce=new x0,this.enable=!1,this.maxSpeed=50,this.mode=Tn.bounce,this.overlap=new Rd}load(e){z(e)||(this.absorb.load(e.absorb),this.bounce.load(e.bounce),e.enable!==void 0&&(this.enable=e.enable),e.maxSpeed!==void 0&&(this.maxSpeed=ye(e.maxSpeed)),e.mode!==void 0&&(this.mode=e.mode),this.overlap.load(e.overlap))}}class Ld{constructor(){this.close=!0,this.fill=!0,this.options={},this.type=[]}load(e){if(z(e))return;const n=e.options;if(n!==void 0)for(const i in n){const s=n[i];s&&(this.options[i]=He(this.options[i]??{},s))}e.close!==void 0&&(this.close=e.close),e.fill!==void 0&&(this.fill=e.fill),e.type!==void 0&&(this.type=e.type)}}class zd{constructor(){this.offset=0,this.value=90}load(e){z(e)||(e.offset!==void 0&&(this.offset=ye(e.offset)),e.value!==void 0&&(this.value=ye(e.value)))}}class Nd{constructor(){this.distance=200,this.enable=!1,this.rotate={x:3e3,y:3e3}}load(e){if(!z(e)&&(e.distance!==void 0&&(this.distance=ye(e.distance)),e.enable!==void 0&&(this.enable=e.enable),e.rotate)){const n=e.rotate.x;n!==void 0&&(this.rotate.x=n);const i=e.rotate.y;i!==void 0&&(this.rotate.y=i)}}}class Fd{constructor(){this.x=50,this.y=50,this.mode=Ln.percent,this.radius=0}load(e){z(e)||(e.x!==void 0&&(this.x=e.x),e.y!==void 0&&(this.y=e.y),e.mode!==void 0&&(this.mode=e.mode),e.radius!==void 0&&(this.radius=e.radius))}}class $d{constructor(){this.acceleration=9.81,this.enable=!1,this.inverse=!1,this.maxSpeed=50}load(e){z(e)||(e.acceleration!==void 0&&(this.acceleration=ye(e.acceleration)),e.enable!==void 0&&(this.enable=e.enable),e.inverse!==void 0&&(this.inverse=e.inverse),e.maxSpeed!==void 0&&(this.maxSpeed=ye(e.maxSpeed)))}}class Gd{constructor(){this.clamp=!0,this.delay=new mn,this.enable=!1,this.options={}}load(e){z(e)||(e.clamp!==void 0&&(this.clamp=e.clamp),this.delay.load(e.delay),e.enable!==void 0&&(this.enable=e.enable),this.generator=e.generator,e.options&&(this.options=He(this.options,e.options)))}}class Vd{load(e){z(e)||(e.color!==void 0&&(this.color=We.create(this.color,e.color)),e.image!==void 0&&(this.image=e.image))}}class Ud{constructor(){this.enable=!1,this.length=10,this.fill=new Vd}load(e){z(e)||(e.enable!==void 0&&(this.enable=e.enable),e.fill!==void 0&&this.fill.load(e.fill),e.length!==void 0&&(this.length=e.length))}}var Ie;(function(t){t.bounce="bounce",t.none="none",t.out="out",t.destroy="destroy",t.split="split"})(Ie||(Ie={}));class Hd{constructor(){this.default=Ie.out}load(e){z(e)||(e.default!==void 0&&(this.default=e.default),this.bottom=e.bottom??e.default,this.left=e.left??e.default,this.right=e.right??e.default,this.top=e.top??e.default)}}class Wd{constructor(){this.acceleration=0,this.enable=!1}load(e){z(e)||(e.acceleration!==void 0&&(this.acceleration=ye(e.acceleration)),e.enable!==void 0&&(this.enable=e.enable),e.position&&(this.position=He({},e.position)))}}class qd{constructor(){this.angle=new zd,this.attract=new Nd,this.center=new Fd,this.decay=0,this.distance={},this.direction=Fe.none,this.drift=0,this.enable=!1,this.gravity=new $d,this.path=new Gd,this.outModes=new Hd,this.random=!1,this.size=!1,this.speed=2,this.spin=new Wd,this.straight=!1,this.trail=new Ud,this.vibrate=!1,this.warp=!1}load(e){if(z(e))return;this.angle.load(Gt(e.angle)?{value:e.angle}:e.angle),this.attract.load(e.attract),this.center.load(e.center),e.decay!==void 0&&(this.decay=ye(e.decay)),e.direction!==void 0&&(this.direction=e.direction),e.distance!==void 0&&(this.distance=Gt(e.distance)?{horizontal:e.distance,vertical:e.distance}:{...e.distance}),e.drift!==void 0&&(this.drift=ye(e.drift)),e.enable!==void 0&&(this.enable=e.enable),this.gravity.load(e.gravity);const n=e.outModes;n!==void 0&&(Dn(n)?this.outModes.load(n):this.outModes.load({default:n})),this.path.load(e.path),e.random!==void 0&&(this.random=e.random),e.size!==void 0&&(this.size=e.size),e.speed!==void 0&&(this.speed=ye(e.speed)),this.spin.load(e.spin),e.straight!==void 0&&(this.straight=e.straight),this.trail.load(e.trail),e.vibrate!==void 0&&(this.vibrate=e.vibrate),e.warp!==void 0&&(this.warp=e.warp)}}class Yd extends yr{constructor(){super(),this.destroy=fn.none,this.speed=2}load(e){super.load(e),!z(e)&&e.destroy!==void 0&&(this.destroy=e.destroy)}}class Jd extends p0{constructor(){super(),this.animation=new Yd,this.value=1}load(e){if(z(e))return;super.load(e);const n=e.animation;n!==void 0&&this.animation.load(n)}}class Qd{constructor(){this.enable=!1,this.width=1920,this.height=1080}load(e){if(z(e))return;e.enable!==void 0&&(this.enable=e.enable);const n=e.width;n!==void 0&&(this.width=n);const i=e.height;i!==void 0&&(this.height=i)}}var Fn;(function(t){t.delete="delete",t.wait="wait"})(Fn||(Fn={}));class Kd{constructor(){this.mode=Fn.delete,this.value=0}load(e){z(e)||(e.mode!==void 0&&(this.mode=e.mode),e.value!==void 0&&(this.value=e.value))}}class Xd{constructor(){this.density=new Qd,this.limit=new Kd,this.value=0}load(e){z(e)||(this.density.load(e.density),this.limit.load(e.limit),e.value!==void 0&&(this.value=e.value))}}class Zd{constructor(){this.blur=0,this.color=new We,this.enable=!1,this.offset={x:0,y:0},this.color.value="#000"}load(e){z(e)||(e.blur!==void 0&&(this.blur=e.blur),this.color=We.create(this.color,e.color),e.enable!==void 0&&(this.enable=e.enable),e.offset!==void 0&&(e.offset.x!==void 0&&(this.offset.x=e.offset.x),e.offset.y!==void 0&&(this.offset.y=e.offset.y)))}}class eu{constructor(){this.close=!0,this.fill=!0,this.options={},this.type="circle"}load(e){if(z(e))return;const n=e.options;if(n!==void 0)for(const i in n){const s=n[i];s&&(this.options[i]=He(this.options[i]??{},s))}e.close!==void 0&&(this.close=e.close),e.fill!==void 0&&(this.fill=e.fill),e.type!==void 0&&(this.type=e.type)}}class tu extends yr{constructor(){super(),this.destroy=fn.none,this.speed=5}load(e){super.load(e),!z(e)&&e.destroy!==void 0&&(this.destroy=e.destroy)}}class nu extends p0{constructor(){super(),this.animation=new tu,this.value=3}load(e){if(super.load(e),z(e))return;const n=e.animation;n!==void 0&&this.animation.load(n)}}class ro{constructor(){this.width=0}load(e){z(e)||(e.color!==void 0&&(this.color=ti.create(this.color,e.color)),e.width!==void 0&&(this.width=ye(e.width)),e.opacity!==void 0&&(this.opacity=ye(e.opacity)))}}class iu extends mn{constructor(){super(),this.opacityRate=1,this.sizeRate=1,this.velocityRate=1}load(e){super.load(e),!z(e)&&(e.opacityRate!==void 0&&(this.opacityRate=e.opacityRate),e.sizeRate!==void 0&&(this.sizeRate=e.sizeRate),e.velocityRate!==void 0&&(this.velocityRate=e.velocityRate))}}class su{constructor(e,n){this._engine=e,this._container=n,this.bounce=new x0,this.collisions=new Bd,this.color=new ti,this.color.value="#fff",this.effect=new Ld,this.groups={},this.move=new qd,this.number=new Xd,this.opacity=new Jd,this.reduceDuplicates=!1,this.shadow=new Zd,this.shape=new eu,this.size=new nu,this.stroke=new ro,this.zIndex=new iu}load(e){if(z(e))return;if(e.groups!==void 0)for(const i of Object.keys(e.groups)){if(!Object.hasOwn(e.groups,i))continue;const s=e.groups[i];s!==void 0&&(this.groups[i]=He(this.groups[i]??{},s))}e.reduceDuplicates!==void 0&&(this.reduceDuplicates=e.reduceDuplicates),this.bounce.load(e.bounce),this.color.load(ti.create(this.color,e.color)),this.effect.load(e.effect),this.move.load(e.move),this.number.load(e.number),this.opacity.load(e.opacity),this.shape.load(e.shape),this.size.load(e.size),this.shadow.load(e.shadow),this.zIndex.load(e.zIndex),this.collisions.load(e.collisions),e.interactivity!==void 0&&(this.interactivity=He({},e.interactivity));const n=e.stroke;if(n&&(this.stroke=it(n,i=>{const s=new ro;return s.load(i),s})),this._container){const i=this._engine.updaters.get(this._container);if(i)for(const r of i)r.loadOptions&&r.loadOptions(this,e);const s=this._engine.interactors.get(this._container);if(s)for(const r of s)r.loadParticlesOptions&&r.loadParticlesOptions(this,e)}}}function g0(t,...e){for(const n of e)t.load(n)}function m0(t,e,...n){const i=new su(t,e);return g0(i,...n),i}class ru{constructor(e,n){this._findDefaultTheme=i=>this.themes.find(s=>s.default.value&&s.default.mode===i)??this.themes.find(s=>s.default.value&&s.default.mode===Mt.any),this._importPreset=i=>{this.load(this._engine.getPreset(i))},this._engine=e,this._container=n,this.autoPlay=!0,this.background=new yd,this.backgroundMask=new vd,this.clear=!0,this.defaultThemes={},this.delay=0,this.fullScreen=new kd,this.detectRetina=!0,this.duration=0,this.fpsLimit=120,this.interactivity=new f0(e,n),this.manualParticles=[],this.particles=m0(this._engine,this._container),this.pauseOnBlur=!0,this.pauseOnOutsideViewport=!0,this.responsive=[],this.smooth=!1,this.style={},this.themes=[],this.zLayers=100}load(e){if(z(e))return;e.preset!==void 0&&it(e.preset,o=>this._importPreset(o)),e.autoPlay!==void 0&&(this.autoPlay=e.autoPlay),e.clear!==void 0&&(this.clear=e.clear),e.key!==void 0&&(this.key=e.key),e.name!==void 0&&(this.name=e.name),e.delay!==void 0&&(this.delay=ye(e.delay));const n=e.detectRetina;n!==void 0&&(this.detectRetina=n),e.duration!==void 0&&(this.duration=ye(e.duration));const i=e.fpsLimit;i!==void 0&&(this.fpsLimit=i),e.pauseOnBlur!==void 0&&(this.pauseOnBlur=e.pauseOnBlur),e.pauseOnOutsideViewport!==void 0&&(this.pauseOnOutsideViewport=e.pauseOnOutsideViewport),e.zLayers!==void 0&&(this.zLayers=e.zLayers),this.background.load(e.background);const s=e.fullScreen;Xa(s)?this.fullScreen.enable=s:this.fullScreen.load(s),this.backgroundMask.load(e.backgroundMask),this.interactivity.load(e.interactivity),e.manualParticles&&(this.manualParticles=e.manualParticles.map(o=>{const c=new Ad;return c.load(o),c})),this.particles.load(e.particles),this.style=He(this.style,e.style),this._engine.loadOptions(this,e),e.smooth!==void 0&&(this.smooth=e.smooth);const r=this._engine.interactors.get(this._container);if(r)for(const o of r)o.loadOptions&&o.loadOptions(this,e);if(e.responsive!==void 0)for(const o of e.responsive){const c=new Od;c.load(o),this.responsive.push(c)}if(this.responsive.sort((o,c)=>o.maxWidth-c.maxWidth),e.themes!==void 0)for(const o of e.themes){const c=this.themes.find(l=>l.name===o.name);if(c)c.load(o);else{const l=new Pd;l.load(o),this.themes.push(l)}}this.defaultThemes.dark=this._findDefaultTheme(Mt.dark)?.name,this.defaultThemes.light=this._findDefaultTheme(Mt.light)?.name}setResponsive(e,n,i){this.load(i);const s=this.responsive.find(r=>r.mode===ln.screen&&screen?r.maxWidth>screen.availWidth:r.maxWidth*n>e);return this.load(s?.options),s?.maxWidth}setTheme(e){if(e){const n=this.themes.find(i=>i.name===e);n&&this.load(n.options)}else{const n=t0("(prefers-color-scheme: dark)"),i=n?.matches,s=this._findDefaultTheme(i?Mt.dark:Mt.light);s&&this.load(s.options)}}}var $n;(function(t){t.external="external",t.particles="particles"})($n||($n={}));class ou{constructor(e,n){this.container=n,this._engine=e,this._interactors=[],this._externalInteractors=[],this._particleInteractors=[]}externalInteract(e){for(const n of this._externalInteractors)n.isEnabled()&&n.interact(e)}handleClickMode(e){for(const n of this._externalInteractors)n.handleClickMode?.(e)}async init(){this._interactors=await this._engine.getInteractors(this.container,!0),this._externalInteractors=[],this._particleInteractors=[];for(const e of this._interactors){switch(e.type){case $n.external:this._externalInteractors.push(e);break;case $n.particles:this._particleInteractors.push(e);break}e.init()}}particlesInteract(e,n){for(const i of this._externalInteractors)i.clear(e,n);for(const i of this._particleInteractors)i.isEnabled(e)&&i.interact(e,n)}reset(e){for(const n of this._externalInteractors)n.isEnabled()&&n.reset(e);for(const n of this._particleInteractors)n.isEnabled(e)&&n.reset(e)}}var xt;(function(t){t.normal="normal",t.inside="inside",t.outside="outside"})(xt||(xt={}));function au(t,e,n,i){const s=e.options[t];if(s)return He({close:e.close,fill:e.fill},ot(s,n,i))}function cu(t,e,n,i){const s=e.options[t];if(s)return He({close:e.close,fill:e.fill},ot(s,n,i))}function oo(t){if(!_e(t.outMode,t.checkModes))return;const e=t.radius*Ve;t.coord>t.maxCoord-e?t.setCb(-t.radius):t.coord<e&&t.setCb(t.radius)}class lu{constructor(e,n){this.container=n,this._calcPosition=(i,s,r,o=zr)=>{for(const x of i.plugins.values()){const y=x.particlePosition!==void 0?x.particlePosition(s,this):void 0;if(y)return Ze.create(y.x,y.y,r)}const c=i.canvas.size,l=$l({size:c,position:s}),u=Ze.create(l.x,l.y,r),d=this.getRadius(),h=this.options.move.outModes,f=x=>{oo({outMode:x,checkModes:[Ie.bounce],coord:u.x,maxCoord:i.canvas.size.width,setCb:y=>u.x+=y,radius:d})},p=x=>{oo({outMode:x,checkModes:[Ie.bounce],coord:u.y,maxCoord:i.canvas.size.height,setCb:y=>u.y+=y,radius:d})};return f(h.left??h.default),f(h.right??h.default),p(h.top??h.default),p(h.bottom??h.default),this._checkOverlap(u,o)?this._calcPosition(i,void 0,r,o+vl):u},this._calculateVelocity=()=>{const i=Fl(this.direction),s=i.copy(),r=this.options.move;if(r.direction===Fe.inside||r.direction===Fe.outside)return s;const o=Ft(Y(r.angle.value)),c=Ft(Y(r.angle.offset)),l={left:c-o*Me,right:c+o*Me};return r.straight||(s.angle+=tt(ye(l.left,l.right))),r.random&&typeof r.speed=="number"&&(s.length*=we()),s},this._checkOverlap=(i,s=zr)=>{const r=this.options.collisions,o=this.getRadius();if(!r.enable)return!1;const c=r.overlap;if(c.enable)return!1;const l=c.retries;if(l>=kl&&s>l)throw new Error(`${at} particle is overlapping and can't be placed`);return!!this.container.particles.find(u=>nt(i,u.position)<o+u.getRadius())},this._getRollColor=i=>{if(!i||!this.roll||!this.backColor&&!this.roll.alter)return i;const s=this.roll.horizontal&&this.roll.vertical?Ve*Wr:Wr,r=this.roll.horizontal?Math.PI*Me:Ai;return Math.floor(((this.roll.angle??Ai)+r)/(Math.PI/s))%Ve?this.backColor?this.backColor:this.roll.alter?pd(i,this.roll.alter.type,this.roll.alter.value):i:i},this._initPosition=i=>{const s=this.container,r=Y(this.options.zIndex.value);this.position=this._calcPosition(s,i,ct(r,wl,s.zLayers)),this.initialPosition=this.position.copy();const o=s.canvas.size;switch(this.moveCenter={...o0(this.options.move.center,o),radius:this.options.move.center.radius??Sl,mode:this.options.move.center.mode??Ln.percent},this.direction=Nl(this.options.move.direction,this.position,this.moveCenter),this.options.move.direction){case Fe.inside:this.outType=xt.inside;break;case Fe.outside:this.outType=xt.outside;break}this.offset=Ne.origin},this._engine=e}destroy(e){if(this.unbreakable||this.destroyed)return;this.destroyed=!0,this.bubble.inRange=!1,this.slow.inRange=!1;const n=this.container,i=this.pathGenerator;n.shapeDrawers.get(this.shape)?.particleDestroy?.(this);for(const r of n.plugins.values())r.particleDestroyed?.(this,e);for(const r of n.particles.updaters)r.particleDestroyed?.(this,e);i?.reset(this),this._engine.dispatchEvent(qe.particleDestroyed,{container:this.container,data:{particle:this}})}draw(e){const n=this.container,i=n.canvas;for(const s of n.plugins.values())i.drawParticlePlugin(s,this,e);i.drawParticle(this,e)}getFillColor(){return this._getRollColor(this.bubble.color??to(this.color))}getMass(){return this.getRadius()**_t*Math.PI*Me}getPosition(){return{x:this.position.x+this.offset.x,y:this.position.y+this.offset.y,z:this.position.z}}getRadius(){return this.bubble.radius??this.size.value}getStrokeColor(){return this._getRollColor(this.bubble.color??to(this.strokeColor))}init(e,n,i,s){const r=this.container,o=this._engine;this.id=e,this.group=s,this.effectClose=!0,this.effectFill=!0,this.shapeClose=!0,this.shapeFill=!0,this.pathRotation=!1,this.lastPathTime=0,this.destroyed=!1,this.unbreakable=!1,this.isRotating=!1,this.rotation=0,this.misplaced=!1,this.retina={maxDistance:{}},this.outType=xt.normal,this.ignoresResizeRatio=!0;const c=r.retina.pixelRatio,l=r.actualOptions,u=m0(this._engine,r,l.particles),{reduceDuplicates:d}=u,h=u.effect.type,f=u.shape.type;this.effect=ot(h,this.id,d),this.shape=ot(f,this.id,d);const p=u.effect,x=u.shape;if(i){if(i.effect?.type){const L=i.effect.type,H=ot(L,this.id,d);H&&(this.effect=H,p.load(i.effect))}if(i.shape?.type){const L=i.shape.type,H=ot(L,this.id,d);H&&(this.shape=H,x.load(i.shape))}}if(this.effect===Bn){const L=[...this.container.effectDrawers.keys()];this.effect=L[Math.floor(we()*L.length)]}if(this.shape===Bn){const L=[...this.container.shapeDrawers.keys()];this.shape=L[Math.floor(we()*L.length)]}this.effectData=au(this.effect,p,this.id,d),this.shapeData=cu(this.shape,x,this.id,d),u.load(i);const y=this.effectData;y&&u.load(y.particles);const g=this.shapeData;g&&u.load(g.particles);const m=new f0(o,r);m.load(r.actualOptions.interactivity),m.load(u.interactivity),this.interactivity=m,this.effectFill=y?.fill??u.effect.fill,this.effectClose=y?.close??u.effect.close,this.shapeFill=g?.fill??u.shape.fill,this.shapeClose=g?.close??u.shape.close,this.options=u;const v=this.options.move.path;this.pathDelay=Y(v.delay.value)*Ge,v.generator&&(this.pathGenerator=this._engine.getPathGenerator(v.generator),this.pathGenerator&&r.addPath(v.generator,this.pathGenerator)&&this.pathGenerator.init(r)),r.retina.initParticle(this),this.size=r0(this.options.size,c),this.bubble={inRange:!1},this.slow={inRange:!1,factor:1},this._initPosition(n),this.initialVelocity=this._calculateVelocity(),this.velocity=this.initialVelocity.copy(),this.moveDecay=Ja-Y(this.options.move.decay);const S=r.particles;S.setLastZIndex(this.position.z),this.zIndexFactor=this.position.z/r.zLayers,this.sides=24;let j=r.effectDrawers.get(this.effect);j||(j=this._engine.getEffectDrawer(this.effect),j&&r.effectDrawers.set(this.effect,j)),j?.loadEffect&&j.loadEffect(this);let _=r.shapeDrawers.get(this.shape);_||(_=this._engine.getShapeDrawer(this.shape),_&&r.shapeDrawers.set(this.shape,_)),_?.loadShape&&_.loadShape(this);const I=_?.getSidesCount;I&&(this.sides=I(this)),this.spawning=!1,this.shadowColor=pt(this._engine,this.options.shadow.color);for(const L of S.updaters)L.init(this);for(const L of S.movers)L.init?.(this);j?.particleInit?.(r,this),_?.particleInit?.(r,this);for(const L of r.plugins.values())L.particleCreated?.(this)}isInsideCanvas(){const e=this.getRadius(),n=this.container.canvas.size,i=this.position;return i.x>=-e&&i.y>=-e&&i.y<=n.height+e&&i.x<=n.width+e}isVisible(){return!this.destroyed&&!this.spawning&&this.isInsideCanvas()}reset(){for(const e of this.container.particles.updaters)e.reset?.(this)}}class du{constructor(e,n){this.position=e,this.particle=n}}var In;(function(t){t.circle="circle",t.rectangle="rectangle"})(In||(In={}));class y0{constructor(e,n,i){this.position={x:e,y:n},this.type=i}}class Ue extends y0{constructor(e,n,i){super(e,n,In.circle),this.radius=i}contains(e){return nt(e,this.position)<=this.radius}intersects(e){const n=this.position,i=e.position,s={x:Math.abs(i.x-n.x),y:Math.abs(i.y-n.y)},r=this.radius;if(e instanceof Ue||e.type===In.circle){const o=e,c=r+o.radius,l=Math.sqrt(s.x**_t+s.y**_t);return c>l}else if(e instanceof gt||e.type===In.rectangle){const o=e,{width:c,height:l}=o.size;return Math.pow(s.x-c,_t)+Math.pow(s.y-l,_t)<=r**_t||s.x<=r+c&&s.y<=r+l||s.x<=c||s.y<=l}return!1}}class gt extends y0{constructor(e,n,i,s){super(e,n,In.rectangle),this.size={height:s,width:i}}contains(e){const n=this.size.width,i=this.size.height,s=this.position;return e.x>=s.x&&e.x<=s.x+n&&e.y>=s.y&&e.y<=s.y+i}intersects(e){if(e instanceof Ue)return e.intersects(this);const n=this.size.width,i=this.size.height,s=this.position,r=e.position,o=e instanceof gt?e.size:{width:0,height:0},c=o.width,l=o.height;return r.x<s.x+n&&r.x+c>s.x&&r.y<s.y+i&&r.y+l>s.y}}class _i{constructor(e,n){this.rectangle=e,this.capacity=n,this._subdivide=()=>{const{x:i,y:s}=this.rectangle.position,{width:r,height:o}=this.rectangle.size,{capacity:c}=this;for(let l=0;l<rl;l++){const u=l%Ve;this._subs.push(new _i(new gt(i+r*Me*u,s+o*Me*(Math.round(l*Me)-u),r*Me,o*Me),c))}this._divided=!0},this._points=[],this._divided=!1,this._subs=[]}insert(e){return this.rectangle.contains(e.position)?this._points.length<this.capacity?(this._points.push(e),!0):(this._divided||this._subdivide(),this._subs.some(n=>n.insert(e))):!1}query(e,n){const i=[];if(!e.intersects(this.rectangle))return[];for(const s of this._points)!e.contains(s.position)&&nt(e.position,s.position)>s.particle.getRadius()&&(!n||n(s.particle))||i.push(s.particle);if(this._divided)for(const s of this._subs)i.push(...s.query(e,n));return i}queryCircle(e,n,i){return this.query(new Ue(e.x,e.y,n),i)}queryRectangle(e,n,i){return this.query(new gt(e.x,e.y,n.width,n.height),i)}}const ao=t=>{const{height:e,width:n}=t;return new gt(qr*n,qr*e,Yr*n,Yr*e)};class uu{constructor(e,n){this._addToPool=(...s)=>{this._pool.push(...s)},this._applyDensity=(s,r,o,c)=>{const l=s.number;if(!s.number.density?.enable){o===void 0?this._limit=l.limit.value:(c?.number.limit?.value??l.limit.value)&&this._groupLimits.set(o,c?.number.limit?.value??l.limit.value);return}const u=this._initDensityFactor(l.density),d=l.value,h=l.limit.value>Jr?l.limit.value:d,f=Math.min(d,h)*u+r,p=Math.min(this.count,this.filter(x=>x.group===o).length);o===void 0?this._limit=l.limit.value*u:this._groupLimits.set(o,l.limit.value*u),p<f?this.push(Math.abs(f-p),void 0,s,o):p>f&&this.removeQuantity(p-f,o)},this._initDensityFactor=s=>{const r=this._container;if(!r.canvas.element||!s.enable)return jl;const o=r.canvas.element,c=r.retina.pixelRatio;return o.width*o.height/(s.height*s.width*c**_t)},this._pushParticle=(s,r,o,c)=>{try{let l=this._pool.pop();l||(l=new lu(this._engine,this._container)),l.init(this._nextId,s,r,o);let u=!0;return c&&(u=c(l)),u?(this._array.push(l),this._zArray.push(l),this._nextId++,this._engine.dispatchEvent(qe.particleAdded,{container:this._container,data:{particle:l}}),l):void 0}catch(l){pn().warning(`${at} adding particle: ${l}`)}},this._removeParticle=(s,r,o)=>{const c=this._array[s];if(!c||c.group!==r)return!1;const l=this._zArray.indexOf(c);return this._array.splice(s,Oi),this._zArray.splice(l,Oi),c.destroy(o),this._engine.dispatchEvent(qe.particleRemoved,{container:this._container,data:{particle:c}}),this._addToPool(c),!0},this._engine=e,this._container=n,this._nextId=0,this._array=[],this._zArray=[],this._pool=[],this._limit=0,this._groupLimits=new Map,this._needsSort=!1,this._lastZIndex=0,this._interactionManager=new ou(e,n),this._pluginsInitialized=!1;const i=n.canvas.size;this.quadTree=new _i(ao(i),Nr),this.movers=[],this.updaters=[]}get count(){return this._array.length}addManualParticles(){const e=this._container;e.actualOptions.manualParticles.forEach(i=>this.addParticle(i.position?o0(i.position,e.canvas.size):void 0,i.options))}addParticle(e,n,i,s){const r=this._container.actualOptions.particles.number.limit.mode,o=i===void 0?this._limit:this._groupLimits.get(i)??this._limit,c=this.count;if(o>Jr)switch(r){case Fn.delete:{const l=c+Cl-o;l>El&&this.removeQuantity(l);break}case Fn.wait:if(c>=o)return;break}return this._pushParticle(e,n,i,s)}clear(){this._array=[],this._zArray=[],this._pluginsInitialized=!1}destroy(){this._array=[],this._zArray=[],this.movers=[],this.updaters=[]}draw(e){const n=this._container,i=n.canvas;i.clear(),this.update(e);for(const s of n.plugins.values())i.drawPlugin(s,e);for(const s of this._zArray)s.draw(e)}filter(e){return this._array.filter(e)}find(e){return this._array.find(e)}get(e){return this._array[e]}handleClickMode(e){this._interactionManager.handleClickMode(e)}async init(){const e=this._container,n=e.actualOptions;this._lastZIndex=0,this._needsSort=!1,await this.initPlugins();let i=!1;for(const s of e.plugins.values())if(i=s.particlesInitialization?.()??i,i)break;if(this.addManualParticles(),!i){const s=n.particles,r=s.groups;for(const o in r){const c=r[o];for(let l=this.count,u=0;u<c.number?.value&&l<s.number.value;l++,u++)this.addParticle(void 0,c,o)}for(let o=this.count;o<s.number.value;o++)this.addParticle()}}async initPlugins(){if(this._pluginsInitialized)return;const e=this._container;this.movers=await this._engine.getMovers(e,!0),this.updaters=await this._engine.getUpdaters(e,!0),await this._interactionManager.init();for(const n of e.pathGenerators.values())n.init(e)}push(e,n,i,s){for(let r=0;r<e;r++)this.addParticle(n?.position,i,s)}async redraw(){this.clear(),await this.init(),this.draw({value:0,factor:0})}remove(e,n,i){this.removeAt(this._array.indexOf(e),void 0,n,i)}removeAt(e,n=sl,i,s){if(e<Ls||e>this.count)return;let r=0;for(let o=e;r<n&&o<this.count;o++)this._removeParticle(o,i,s)&&(o--,r++)}removeQuantity(e,n){this.removeAt(Ls,e,n)}setDensity(){const e=this._container.actualOptions,n=e.particles.groups,i=e.manualParticles.length;for(const s in n)this._applyDensity(n[s],i,s);this._applyDensity(e.particles,i)}setLastZIndex(e){this._lastZIndex=e,this._needsSort=this._needsSort||this._lastZIndex<e}setResizeFactor(e){this._resizeFactor=e}update(e){const n=this._container,i=new Set;this.quadTree=new _i(ao(n.canvas.size),Nr);for(const r of n.pathGenerators.values())r.update();for(const r of n.plugins.values())r.update?.(e);const s=this._resizeFactor;for(const r of this._array){s&&!r.ignoresResizeRatio&&(r.position.x*=s.width,r.position.y*=s.height,r.initialPosition.x*=s.width,r.initialPosition.y*=s.height),r.ignoresResizeRatio=!1,this._interactionManager.reset(r);for(const o of this._container.plugins.values()){if(r.destroyed)break;o.particleUpdate?.(r,e)}for(const o of this.movers)o.isEnabled(r)&&o.move(r,e);if(r.destroyed){i.add(r);continue}this.quadTree.insert(new du(r.getPosition(),r))}if(i.size){const r=o=>!i.has(o);this._array=this.filter(r),this._zArray=this._zArray.filter(r);for(const o of i)this._engine.dispatchEvent(qe.particleRemoved,{container:this._container,data:{particle:o}});this._addToPool(...i)}this._interactionManager.externalInteract(e);for(const r of this._array){for(const o of this.updaters)o.update(r,e);!r.destroyed&&!r.spawning&&this._interactionManager.particlesInteract(r,e)}if(delete this._resizeFactor,this._needsSort){const r=this._zArray;r.sort((o,c)=>c.position.z-o.position.z||o.id-c.id),this._lastZIndex=r[r.length-Qa].position.z,this._needsSort=!1}}}class hu{constructor(e){this.container=e,this.pixelRatio=Fr,this.reduceFactor=$r}init(){const e=this.container,n=e.actualOptions;this.pixelRatio=!n.detectRetina||xn()?Fr:devicePixelRatio,this.reduceFactor=$r;const i=this.pixelRatio,s=e.canvas;if(s.element){const c=s.element;s.size.width=c.offsetWidth*i,s.size.height=c.offsetHeight*i}const r=n.particles,o=r.move;this.maxSpeed=Y(o.gravity.maxSpeed)*i,this.sizeAnimationSpeed=Y(r.size.animation.speed)*i}initParticle(e){const n=e.options,i=this.pixelRatio,s=n.move,r=s.distance,o=e.retina;o.moveDrift=Y(s.drift)*i,o.moveSpeed=Y(s.speed)*i,o.sizeAnimationSpeed=Y(n.size.animation.speed)*i;const c=o.maxDistance;c.horizontal=r.horizontal!==void 0?r.horizontal*i:void 0,c.vertical=r.vertical!==void 0?r.vertical*i:void 0,o.maxSpeed=Y(s.gravity.maxSpeed)*i}}function Oe(t){return t&&!t.destroyed}function fu(t,e=qi,n=!1){return{value:t,factor:n?qi/e:qi*t/Ge}}function vn(t,e,...n){const i=new ru(t,e);return g0(i,...n),i}let pu=class{constructor(e,n,i){this._intersectionManager=s=>{if(!(!Oe(this)||!this.actualOptions.pauseOnOutsideViewport))for(const r of s)r.target===this.interactivity.element&&(r.isIntersecting?this.play():this.pause())},this._nextFrame=s=>{try{if(!this._smooth&&this._lastFrameTime!==void 0&&s<this._lastFrameTime+Ge/this.fpsLimit){this.draw(!1);return}this._lastFrameTime??=s;const r=fu(s-this._lastFrameTime,this.fpsLimit,this._smooth);if(this.addLifeTime(r.value),this._lastFrameTime=s,r.value>Ge){this.draw(!1);return}if(this.particles.draw(r),!this.alive()){this.destroy();return}this.animationStatus&&this.draw(!1)}catch(r){pn().error(`${at} in animation loop`,r)}},this._engine=e,this.id=Symbol(n),this.fpsLimit=120,this._smooth=!1,this._delay=0,this._duration=0,this._lifeTime=0,this._firstStart=!0,this.started=!1,this.destroyed=!1,this._paused=!0,this._lastFrameTime=0,this.zLayers=100,this.pageHidden=!1,this._clickHandlers=new Map,this._sourceOptions=i,this._initialSourceOptions=i,this.retina=new hu(this),this.canvas=new gd(this,this._engine),this.particles=new uu(this._engine,this),this.pathGenerators=new Map,this.interactivity={mouse:{clicking:!1,inside:!1}},this.plugins=new Map,this.effectDrawers=new Map,this.shapeDrawers=new Map,this._options=vn(this._engine,this),this.actualOptions=vn(this._engine,this),this._eventListeners=new md(this),this._intersectionObserver=Wl(s=>this._intersectionManager(s)),this._engine.dispatchEvent(qe.containerBuilt,{container:this})}get animationStatus(){return!this._paused&&!this.pageHidden&&Oe(this)}get options(){return this._options}get sourceOptions(){return this._sourceOptions}addClickHandler(e){if(!Oe(this))return;const n=this.interactivity.element;if(!n)return;const i=(h,f,p)=>{if(!Oe(this))return;const x=this.retina.pixelRatio,y={x:f.x*x,y:f.y*x},g=this.particles.quadTree.queryCircle(y,p*x);e(h,g)},s=h=>{if(!Oe(this))return;const f=h,p={x:f.offsetX||f.clientX,y:f.offsetY||f.clientY};i(h,p,hl)},r=()=>{Oe(this)&&(u=!0,d=!1)},o=()=>{Oe(this)&&(d=!0)},c=h=>{if(Oe(this)){if(u&&!d){const f=h;let p=f.touches[f.touches.length-Hr];if(!p&&(p=f.changedTouches[f.changedTouches.length-Hr],!p))return;const x=this.canvas.element,y=x?x.getBoundingClientRect():void 0,g={x:p.clientX-(y?y.left:Di),y:p.clientY-(y?y.top:Di)};i(h,g,Math.max(p.radiusX,p.radiusY))}u=!1,d=!1}},l=()=>{Oe(this)&&(u=!1,d=!1)};let u=!1,d=!1;this._clickHandlers.set("click",s),this._clickHandlers.set("touchstart",r),this._clickHandlers.set("touchmove",o),this._clickHandlers.set("touchend",c),this._clickHandlers.set("touchcancel",l);for(const[h,f]of this._clickHandlers)n.addEventListener(h,f)}addLifeTime(e){this._lifeTime+=e}addPath(e,n,i=!1){return!Oe(this)||!i&&this.pathGenerators.has(e)?!1:(this.pathGenerators.set(e,n),!0)}alive(){return!this._duration||this._lifeTime<=this._duration}clearClickHandlers(){if(Oe(this)){for(const[e,n]of this._clickHandlers)this.interactivity.element?.removeEventListener(e,n);this._clickHandlers.clear()}}destroy(e=!0){if(Oe(this)){this.stop(),this.clearClickHandlers(),this.particles.destroy(),this.canvas.destroy();for(const n of this.effectDrawers.values())n.destroy?.(this);for(const n of this.shapeDrawers.values())n.destroy?.(this);for(const n of this.effectDrawers.keys())this.effectDrawers.delete(n);for(const n of this.shapeDrawers.keys())this.shapeDrawers.delete(n);if(this._engine.clearPlugins(this),this.destroyed=!0,e){const n=this._engine.items,i=n.findIndex(s=>s===this);i>=fl&&n.splice(i,Ya)}this._engine.dispatchEvent(qe.containerDestroyed,{container:this})}}draw(e){if(!Oe(this))return;let n=e;const i=s=>{n&&(this._lastFrameTime=void 0,n=!1),this._nextFrame(s)};this._drawAnimationFrame=Ll(s=>i(s))}async export(e,n={}){for(const i of this.plugins.values()){if(!i.export)continue;const s=await i.export(e,n);if(s.supported)return s.blob}pn().error(`${at} - Export plugin with type ${e} not found`)}handleClickMode(e){if(Oe(this)){this.particles.handleClickMode(e);for(const n of this.plugins.values())n.handleClickMode?.(e)}}async init(){if(!Oe(this))return;const e=this._engine.getSupportedEffects();for(const u of e){const d=this._engine.getEffectDrawer(u);d&&this.effectDrawers.set(u,d)}const n=this._engine.getSupportedShapes();for(const u of n){const d=this._engine.getShapeDrawer(u);d&&this.shapeDrawers.set(u,d)}await this.particles.initPlugins(),this._options=vn(this._engine,this,this._initialSourceOptions,this.sourceOptions),this.actualOptions=vn(this._engine,this,this._options);const i=await this._engine.getAvailablePlugins(this);for(const[u,d]of i)this.plugins.set(u,d);this.retina.init(),await this.canvas.init(),this.updateActualOptions(),this.canvas.initBackground(),this.canvas.resize();const{zLayers:s,duration:r,delay:o,fpsLimit:c,smooth:l}=this.actualOptions;this.zLayers=s,this._duration=Y(r)*Ge,this._delay=Y(o)*Ge,this._lifeTime=0,this.fpsLimit=c>xl?c:pl,this._smooth=l;for(const u of this.effectDrawers.values())await u.init?.(this);for(const u of this.shapeDrawers.values())await u.init?.(this);for(const u of this.plugins.values())await u.init?.();this._engine.dispatchEvent(qe.containerInit,{container:this}),await this.particles.init(),this.particles.setDensity();for(const u of this.plugins.values())u.particlesSetup?.();this._engine.dispatchEvent(qe.particlesSetup,{container:this})}async loadTheme(e){Oe(this)&&(this._currentTheme=e,await this.refresh())}pause(){if(Oe(this)&&(this._drawAnimationFrame!==void 0&&(zl(this._drawAnimationFrame),delete this._drawAnimationFrame),!this._paused)){for(const e of this.plugins.values())e.pause?.();this.pageHidden||(this._paused=!0),this._engine.dispatchEvent(qe.containerPaused,{container:this})}}play(e){if(!Oe(this))return;const n=this._paused||e;if(this._firstStart&&!this.actualOptions.autoPlay){this._firstStart=!1;return}if(this._paused&&(this._paused=!1),n)for(const i of this.plugins.values())i.play&&i.play();this._engine.dispatchEvent(qe.containerPlay,{container:this}),this.draw(n??!1)}async refresh(){if(Oe(this))return this.stop(),this.start()}async reset(e){if(Oe(this))return this._initialSourceOptions=e,this._sourceOptions=e,this._options=vn(this._engine,this,this._initialSourceOptions,this.sourceOptions),this.actualOptions=vn(this._engine,this,this._options),this.refresh()}async start(){!Oe(this)||this.started||(await this.init(),this.started=!0,await new Promise(e=>{const n=async()=>{this._eventListeners.addListeners(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.observe(this.interactivity.element);for(const i of this.plugins.values())await i.start?.();this._engine.dispatchEvent(qe.containerStarted,{container:this}),this.play(),e()};this._delayTimeout=setTimeout(()=>void n(),this._delay)}))}stop(){if(!(!Oe(this)||!this.started)){this._delayTimeout&&(clearTimeout(this._delayTimeout),delete this._delayTimeout),this._firstStart=!0,this.started=!1,this._eventListeners.removeListeners(),this.pause(),this.particles.clear(),this.canvas.stop(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.unobserve(this.interactivity.element);for(const e of this.plugins.values())e.stop?.();for(const e of this.plugins.keys())this.plugins.delete(e);this._sourceOptions=this._options,this._engine.dispatchEvent(qe.containerStopped,{container:this})}}updateActualOptions(){this.actualOptions.responsive=[];const e=this.actualOptions.setResponsive(this.canvas.size.width,this.retina.pixelRatio,this._options);return this.actualOptions.setTheme(this._currentTheme),this._responsiveMaxWidth===e?!1:(this._responsiveMaxWidth=e,!0)}};class xu{constructor(){this._listeners=new Map}addEventListener(e,n){this.removeEventListener(e,n);let i=this._listeners.get(e);i||(i=[],this._listeners.set(e,i)),i.push(n)}dispatchEvent(e,n){this._listeners.get(e)?.forEach(s=>s(n))}hasEventListener(e){return!!this._listeners.get(e)}removeAllEventListeners(e){e?this._listeners.delete(e):this._listeners=new Map}removeEventListener(e,n){const i=this._listeners.get(e);if(!i)return;const s=i.length,r=i.indexOf(n);r<Ls||(s===Oi?this._listeners.delete(e):i.splice(r,Oi))}}async function ns(t,e,n,i=!1){let s=e.get(t);return(!s||i)&&(s=await Promise.all([...n.values()].map(r=>r(t))),e.set(t,s)),s}async function gu(t){const e=ot(t.url,t.index);if(!e)return t.fallback;const n=await fetch(e);return n.ok?await n.json():(pn().error(`${at} ${n.status} while retrieving config file`),t.fallback)}const mu=t=>{let e;if(t instanceof HTMLCanvasElement||t.tagName.toLowerCase()===Yi)e=t,e.dataset[on]||(e.dataset[on]=Lr);else{const i=t.getElementsByTagName(Yi);i.length?(e=i[gl],e.dataset[on]=Lr):(e=document.createElement(Yi),e.dataset[on]=Wa,t.appendChild(e))}const n="100%";return e.style.width||(e.style.width=n),e.style.height||(e.style.height=n),e},yu=(t,e)=>{let n=e??document.getElementById(t);return n||(n=document.createElement("div"),n.id=t,n.dataset[on]=Wa,document.body.append(n),n)};class bu{constructor(){this._configs=new Map,this._domArray=[],this._eventDispatcher=new xu,this._initialized=!1,this.plugins=[],this.colorManagers=new Map,this.easingFunctions=new Map,this._initializers={interactors:new Map,movers:new Map,updaters:new Map},this.interactors=new Map,this.movers=new Map,this.updaters=new Map,this.presets=new Map,this.effectDrawers=new Map,this.shapeDrawers=new Map,this.pathGenerators=new Map}get configs(){const e={};for(const[n,i]of this._configs)e[n]=i;return e}get items(){return this._domArray}get version(){return"3.9.1"}async addColorManager(e,n=!0){this.colorManagers.set(e.key,e),await this.refresh(n)}addConfig(e){const n=e.key??e.name??"default";this._configs.set(n,e),this._eventDispatcher.dispatchEvent(qe.configAdded,{data:{name:n,config:e}})}async addEasing(e,n,i=!0){this.getEasing(e)||(this.easingFunctions.set(e,n),await this.refresh(i))}async addEffect(e,n,i=!0){it(e,s=>{this.getEffectDrawer(s)||this.effectDrawers.set(s,n)}),await this.refresh(i)}addEventListener(e,n){this._eventDispatcher.addEventListener(e,n)}async addInteractor(e,n,i=!0){this._initializers.interactors.set(e,n),await this.refresh(i)}async addMover(e,n,i=!0){this._initializers.movers.set(e,n),await this.refresh(i)}async addParticleUpdater(e,n,i=!0){this._initializers.updaters.set(e,n),await this.refresh(i)}async addPathGenerator(e,n,i=!0){this.getPathGenerator(e)||this.pathGenerators.set(e,n),await this.refresh(i)}async addPlugin(e,n=!0){this.getPlugin(e.id)||this.plugins.push(e),await this.refresh(n)}async addPreset(e,n,i=!1,s=!0){(i||!this.getPreset(e))&&this.presets.set(e,n),await this.refresh(s)}async addShape(e,n=!0){for(const i of e.validTypes)this.getShapeDrawer(i)||this.shapeDrawers.set(i,e);await this.refresh(n)}checkVersion(e){if(this.version!==e)throw new Error(`The tsParticles version is different from the loaded plugins version. Engine version: ${this.version}. Plugin version: ${e}`)}clearPlugins(e){this.updaters.delete(e),this.movers.delete(e),this.interactors.delete(e)}dispatchEvent(e,n){this._eventDispatcher.dispatchEvent(e,n)}dom(){return this.items}domItem(e){return this.item(e)}async getAvailablePlugins(e){const n=new Map;for(const i of this.plugins)i.needsPlugin(e.actualOptions)&&n.set(i.id,await i.getPlugin(e));return n}getEasing(e){return this.easingFunctions.get(e)??(n=>n)}getEffectDrawer(e){return this.effectDrawers.get(e)}async getInteractors(e,n=!1){return ns(e,this.interactors,this._initializers.interactors,n)}async getMovers(e,n=!1){return ns(e,this.movers,this._initializers.movers,n)}getPathGenerator(e){return this.pathGenerators.get(e)}getPlugin(e){return this.plugins.find(n=>n.id===e)}getPreset(e){return this.presets.get(e)}getShapeDrawer(e){return this.shapeDrawers.get(e)}getSupportedEffects(){return this.effectDrawers.keys()}getSupportedShapes(){return this.shapeDrawers.keys()}async getUpdaters(e,n=!1){return ns(e,this.updaters,this._initializers.updaters,n)}init(){this._initialized||(this._initialized=!0)}item(e){const{items:n}=this,i=n[e];if(!i||i.destroyed){n.splice(e,Ya);return}return i}async load(e){const n=e.id??e.element?.id??`tsparticles${Math.floor(we()*ml)}`,{index:i,url:s}=e,r=s?await gu({fallback:e.options,url:s,index:i}):e.options,o=ot(r,i),{items:c}=this,l=c.findIndex(f=>f.id.description===n),u=new pu(this,n,o);if(l>=yl){const f=this.item(l),p=f?bl:Ai;f&&!f.destroyed&&f.destroy(!1),c.splice(l,p,u)}else c.push(u);const d=yu(n,e.element),h=mu(d);return u.canvas.loadCanvas(h),await u.start(),u}loadOptions(e,n){this.plugins.forEach(i=>i.loadOptions?.(e,n))}loadParticlesOptions(e,n,...i){const s=this.updaters.get(e);s&&s.forEach(r=>r.loadOptions?.(n,...i))}async refresh(e=!0){e&&await Promise.all(this.items.map(n=>n.refresh()))}removeEventListener(e,n){this._eventDispatcher.removeEventListener(e,n)}setOnClickHandler(e){const{items:n}=this;if(!n.length)throw new Error(`${at} can only set click handlers after calling tsParticles.load()`);n.forEach(i=>i.addClickHandler(e))}}function vu(){const t=new bu;return t.init(),t}class wt{constructor(e){this.type=$n.external,this.container=e}}class br{constructor(e){this.type=$n.particles,this.container=e}}var ht;(function(t){t.clockwise="clockwise",t.counterClockwise="counter-clockwise",t.random="random"})(ht||(ht={}));var co;(function(t){t.linear="linear",t.radial="radial",t.random="random"})(co||(co={}));var un;(function(t){t.easeInBack="ease-in-back",t.easeInCirc="ease-in-circ",t.easeInCubic="ease-in-cubic",t.easeInLinear="ease-in-linear",t.easeInQuad="ease-in-quad",t.easeInQuart="ease-in-quart",t.easeInQuint="ease-in-quint",t.easeInExpo="ease-in-expo",t.easeInSine="ease-in-sine",t.easeOutBack="ease-out-back",t.easeOutCirc="ease-out-circ",t.easeOutCubic="ease-out-cubic",t.easeOutLinear="ease-out-linear",t.easeOutQuad="ease-out-quad",t.easeOutQuart="ease-out-quart",t.easeOutQuint="ease-out-quint",t.easeOutExpo="ease-out-expo",t.easeOutSine="ease-out-sine",t.easeInOutBack="ease-in-out-back",t.easeInOutCirc="ease-in-out-circ",t.easeInOutCubic="ease-in-out-cubic",t.easeInOutLinear="ease-in-out-linear",t.easeInOutQuad="ease-in-out-quad",t.easeInOutQuart="ease-in-out-quart",t.easeInOutQuint="ease-in-out-quint",t.easeInOutExpo="ease-in-out-expo",t.easeInOutSine="ease-in-out-sine"})(un||(un={}));const vr=vu();xn()||(window.tsParticles=vr);const ku=t=>{const e=t.id??"tsparticles";return w.useEffect(()=>{let n;return vr.load({id:e,url:t.url,options:t.options}).then(i=>{var s;n=i,(s=t.particlesLoaded)==null||s.call(t,i)}),()=>{n?.destroy()}},[e,t,t.url,t.options]),a.jsx("div",{id:e,className:t.className})};async function wu(t){await t(vr)}const Gs=.5,Su=2,Nt=0,ft=1,lo=60,uo=0,Cu=.01,Eu=Math.PI*Su;function ju(t){const e=t.initialPosition,{dx:n,dy:i}=Ye(e,t.position),s=Math.abs(n),r=Math.abs(i),{maxDistance:o}=t.retina,c=o.horizontal,l=o.vertical;if(!c&&!l)return;const u=(c&&s>=c)??!1,d=(l&&r>=l)??!1;if((u||d)&&!t.misplaced)t.misplaced=!!c&&s>c||!!l&&r>l,c&&(t.velocity.x=t.velocity.y*Gs-t.velocity.x),l&&(t.velocity.y=t.velocity.x*Gs-t.velocity.y);else if((!c||s<c)&&(!l||r<l)&&t.misplaced)t.misplaced=!1;else if(t.misplaced){const h=t.position,f=t.velocity;c&&(h.x<e.x&&f.x<Nt||h.x>e.x&&f.x>Nt)&&(f.x*=-we()),l&&(h.y<e.y&&f.y<Nt||h.y>e.y&&f.y>Nt)&&(f.y*=-we())}}function Du(t,e,n,i,s,r,o){Ou(t,o);const c=t.gravity,l=c?.enable&&c.inverse?-ft:ft;s&&n&&(t.velocity.x+=s*o.factor/(lo*n)),c?.enable&&n&&(t.velocity.y+=l*(c.acceleration*o.factor)/(lo*n));const u=t.moveDecay;t.velocity.multTo(u);const d=t.velocity.mult(n);c?.enable&&i>Nt&&(!c.inverse&&d.y>=Nt&&d.y>=i||c.inverse&&d.y<=Nt&&d.y<=-i)&&(d.y=l*i,n&&(t.velocity.y=d.y/n));const h=t.options.zIndex,f=(ft-t.zIndexFactor)**h.velocityRate;d.multTo(f),d.multTo(r);const{position:p}=t;p.addTo(d),e.vibrate&&(p.x+=Math.sin(p.x*Math.cos(p.y))*r,p.y+=Math.cos(p.y*Math.sin(p.x))*r)}function Au(t,e,n){const i=t.container;if(!t.spin)return;const s=t.spin.direction===ht.clockwise,r={x:s?Math.cos:Math.sin,y:s?Math.sin:Math.cos};t.position.x=t.spin.center.x+t.spin.radius*r.x(t.spin.angle)*n,t.position.y=t.spin.center.y+t.spin.radius*r.y(t.spin.angle)*n,t.spin.radius+=t.spin.acceleration*n;const o=Math.max(i.canvas.size.width,i.canvas.size.height),c=o*Gs;t.spin.radius>c?(t.spin.radius=c,t.spin.acceleration*=-ft):t.spin.radius<uo&&(t.spin.radius=uo,t.spin.acceleration*=-ft),t.spin.angle+=e*Cu*(ft-t.spin.radius/o)}function Ou(t,e){const n=t.options,i=n.move.path;if(!i.enable)return;if(t.lastPathTime<=t.pathDelay){t.lastPathTime+=e.value;return}const r=t.pathGenerator?.generate(t,e);r&&t.velocity.addTo(r),i.clamp&&(t.velocity.x=ct(t.velocity.x,-ft,ft),t.velocity.y=ct(t.velocity.y,-ft,ft)),t.lastPathTime-=t.pathDelay}function _u(t){return t.slow.inRange?t.slow.factor:ft}function Pu(t){const e=t.container,n=t.options,i=n.move.spin;if(!i.enable)return;const s=i.position??{x:50,y:50},r=.01,o={x:s.x*r*e.canvas.size.width,y:s.y*r*e.canvas.size.height},c=t.getPosition(),l=nt(c,o),u=Y(i.acceleration);t.retina.spinAcceleration=u*e.retina.pixelRatio,t.spin={center:o,direction:t.velocity.x>=Nt?ht.clockwise:ht.counterClockwise,angle:we()*Eu,radius:l,acceleration:t.retina.spinAcceleration}}const Tu=2,Iu=1,Ru=1;class Mu{init(e){const n=e.options,i=n.move.gravity;e.gravity={enable:i.enable,acceleration:Y(i.acceleration),inverse:i.inverse},Pu(e)}isEnabled(e){return!e.destroyed&&e.options.move.enable}move(e,n){const i=e.options,s=i.move;if(!s.enable)return;const r=e.container,o=r.retina.pixelRatio;e.retina.moveSpeed??=Y(s.speed)*o,e.retina.moveDrift??=Y(e.options.move.drift)*o;const c=_u(e),l=r.retina.reduceFactor,u=e.retina.moveSpeed,d=e.retina.moveDrift,h=bt(i.size.value)*o,f=s.size?e.getRadius()/h:Iu,p=n.factor||Ru,x=u*f*c*p/Tu,y=e.retina.maxSpeed??r.retina.maxSpeed;s.spin.enable?Au(e,x,l):Du(e,s,x,y,d,l,n),ju(e)}}async function Bu(t,e=!0){t.checkVersion("3.9.1"),await t.addMover("base",()=>Promise.resolve(new Mu),e)}const Lu=2,zu=Math.PI*Lu,Nu=0,ho={x:0,y:0};function Fu(t){const{context:e,particle:n,radius:i}=t;n.circleRange||(n.circleRange={min:Nu,max:zu});const s=n.circleRange;e.arc(ho.x,ho.y,i,s.min,s.max,!1)}const $u=12,Gu=360,fo=0;class Vu{constructor(){this.validTypes=["circle"]}draw(e){Fu(e)}getSidesCount(){return $u}particleInit(e,n){const i=n.shapeData,s=i?.angle??{max:Gu,min:fo};n.circleRange=Dn(s)?{min:Ft(s.min),max:Ft(s.max)}:{min:fo,max:Ft(s)}}}async function Uu(t,e=!0){t.checkVersion("3.9.1"),await t.addShape(new Vu,e)}class Hu{constructor(e,n){this._container=e,this._engine=n}init(e){const n=Zn(this._engine,e.options.color,e.id,e.options.reduceDuplicates);n&&(e.color=u0(n,e.options.color.animation,this._container.retina.reduceFactor))}isEnabled(e){const{h:n,s:i,l:s}=e.options.color.animation,{color:r}=e;return!e.destroyed&&!e.spawning&&(r?.h.value!==void 0&&n.enable||r?.s.value!==void 0&&i.enable||r?.l.value!==void 0&&s.enable)}update(e,n){h0(e.color,n)}}async function Wu(t,e=!0){t.checkVersion("3.9.1"),await t.addParticleUpdater("color",n=>Promise.resolve(new Hu(n,t)),e)}var nn;(function(t){t[t.r=1]="r",t[t.g=2]="g",t[t.b=3]="b",t[t.a=4]="a"})(nn||(nn={}));const qu=/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,Yu=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i,ai=16,Ju=1,Qu=255;class Ku{constructor(){this.key="hex",this.stringPrefix="#"}handleColor(e){return this._parseString(e.value)}handleRangeColor(e){return this._parseString(e.value)}parseString(e){return this._parseString(e)}_parseString(e){if(typeof e!="string"||!e?.startsWith(this.stringPrefix))return;const n=e.replace(qu,(s,r,o,c,l)=>r+r+o+o+c+c+(l!==void 0?l+l:"")),i=Yu.exec(n);return i?{a:i[nn.a]!==void 0?parseInt(i[nn.a],ai)/Qu:Ju,b:parseInt(i[nn.b],ai),g:parseInt(i[nn.g],ai),r:parseInt(i[nn.r],ai)}:void 0}}async function Xu(t,e=!0){t.checkVersion("3.9.1"),await t.addColorManager(new Ku,e)}var An;(function(t){t[t.h=1]="h",t[t.s=2]="s",t[t.l=3]="l",t[t.a=5]="a"})(An||(An={}));class Zu{constructor(){this.key="hsl",this.stringPrefix="hsl"}handleColor(e){const n=e.value,i=n.hsl??e.value;if(i.h!==void 0&&i.s!==void 0&&i.l!==void 0)return zn(i)}handleRangeColor(e){const n=e.value,i=n.hsl??e.value;if(i.h!==void 0&&i.l!==void 0)return zn({h:Y(i.h),l:Y(i.l),s:Y(i.s)})}parseString(e){if(!e.startsWith("hsl"))return;const n=/hsla?\(\s*(\d+)\s*[\s,]\s*(\d+)%\s*[\s,]\s*(\d+)%\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i,i=n.exec(e),s=4,r=1,o=10;return i?rd({a:i.length>s?e0(i[An.a]):r,h:parseInt(i[An.h],o),l:parseInt(i[An.l],o),s:parseInt(i[An.s],o)}):void 0}}async function e1(t,e=!0){t.checkVersion("3.9.1"),await t.addColorManager(new Zu,e)}class t1{constructor(e){this.container=e}init(e){const n=e.options.opacity,i=1;e.opacity=r0(n,i);const s=n.animation;s.enable&&(e.opacity.velocity=Y(s.speed)/zt*this.container.retina.reduceFactor,s.sync||(e.opacity.velocity*=we()))}isEnabled(e){return!e.destroyed&&!e.spawning&&!!e.opacity&&e.opacity.enable&&((e.opacity.maxLoops??0)<=0||(e.opacity.maxLoops??0)>0&&(e.opacity.loops??0)<(e.opacity.maxLoops??0))}reset(e){e.opacity&&(e.opacity.time=0,e.opacity.loops=0)}update(e,n){!this.isEnabled(e)||!e.opacity||xr(e,e.opacity,!0,e.options.opacity.animation.destroy,n)}}async function n1(t,e=!0){t.checkVersion("3.9.1"),await t.addParticleUpdater("opacity",n=>Promise.resolve(new t1(n)),e)}const Pi=0,Rn=0;function i1(t){if(t.outMode!==Ie.bounce&&t.outMode!==Ie.split||t.direction!==ue.left&&t.direction!==ue.right)return;t.bounds.right<Rn&&t.direction===ue.left?t.particle.position.x=t.size+t.offset.x:t.bounds.left>t.canvasSize.width&&t.direction===ue.right&&(t.particle.position.x=t.canvasSize.width-t.size-t.offset.x);const e=t.particle.velocity.x;let n=!1;if(t.direction===ue.right&&t.bounds.right>=t.canvasSize.width&&e>Pi||t.direction===ue.left&&t.bounds.left<=Rn&&e<Pi){const s=Y(t.particle.options.bounce.horizontal.value);t.particle.velocity.x*=-s,n=!0}if(!n)return;const i=t.offset.x+t.size;t.bounds.right>=t.canvasSize.width&&t.direction===ue.right?t.particle.position.x=t.canvasSize.width-i:t.bounds.left<=Rn&&t.direction===ue.left&&(t.particle.position.x=i),t.outMode===Ie.split&&t.particle.destroy()}function s1(t){if(t.outMode!==Ie.bounce&&t.outMode!==Ie.split||t.direction!==ue.bottom&&t.direction!==ue.top)return;t.bounds.bottom<Rn&&t.direction===ue.top?t.particle.position.y=t.size+t.offset.y:t.bounds.top>t.canvasSize.height&&t.direction===ue.bottom&&(t.particle.position.y=t.canvasSize.height-t.size-t.offset.y);const e=t.particle.velocity.y;let n=!1;if(t.direction===ue.bottom&&t.bounds.bottom>=t.canvasSize.height&&e>Pi||t.direction===ue.top&&t.bounds.top<=Rn&&e<Pi){const s=Y(t.particle.options.bounce.vertical.value);t.particle.velocity.y*=-s,n=!0}if(!n)return;const i=t.offset.y+t.size;t.bounds.bottom>=t.canvasSize.height&&t.direction===ue.bottom?t.particle.position.y=t.canvasSize.height-i:t.bounds.top<=Rn&&t.direction===ue.top&&(t.particle.position.y=i),t.outMode===Ie.split&&t.particle.destroy()}class r1{constructor(e){this.container=e,this.modes=[Ie.bounce,Ie.split]}update(e,n,i,s){if(!this.modes.includes(s))return;const r=this.container;let o=!1;for(const f of r.plugins.values())if(f.particleBounce!==void 0&&(o=f.particleBounce(e,i,n)),o)break;if(o)return;const c=e.getPosition(),l=e.offset,u=e.getRadius(),d=si(c,u),h=r.canvas.size;i1({particle:e,outMode:s,direction:n,bounds:d,canvasSize:h,offset:l,size:u}),s1({particle:e,outMode:s,direction:n,bounds:d,canvasSize:h,offset:l,size:u})}}const ci=0;class o1{constructor(e){this.container=e,this.modes=[Ie.destroy]}update(e,n,i,s){if(!this.modes.includes(s))return;const r=this.container;switch(e.outType){case xt.normal:case xt.outside:if(hr(e.position,r.canvas.size,Ne.origin,e.getRadius(),n))return;break;case xt.inside:{const{dx:o,dy:c}=Ye(e.position,e.moveCenter),{x:l,y:u}=e.velocity;if(l<ci&&o>e.moveCenter.radius||u<ci&&c>e.moveCenter.radius||l>=ci&&o<-e.moveCenter.radius||u>=ci&&c<-e.moveCenter.radius)return;break}}r.particles.remove(e,e.group,!0)}}const li=0;class a1{constructor(e){this.container=e,this.modes=[Ie.none]}update(e,n,i,s){if(!this.modes.includes(s)||((e.options.move.distance.horizontal&&(n===ue.left||n===ue.right))??(e.options.move.distance.vertical&&(n===ue.top||n===ue.bottom))))return;const r=e.options.move.gravity,o=this.container,c=o.canvas.size,l=e.getRadius();if(r.enable){const u=e.position;(!r.inverse&&u.y>c.height+l&&n===ue.bottom||r.inverse&&u.y<-l&&n===ue.top)&&o.particles.remove(e)}else{if(e.velocity.y>li&&e.position.y<=c.height+l||e.velocity.y<li&&e.position.y>=-l||e.velocity.x>li&&e.position.x<=c.width+l||e.velocity.x<li&&e.position.x>=-l)return;hr(e.position,o.canvas.size,Ne.origin,l,n)||o.particles.remove(e)}}}const di=0,ui=0;class c1{constructor(e){this.container=e,this.modes=[Ie.out]}update(e,n,i,s){if(!this.modes.includes(s))return;const r=this.container;switch(e.outType){case xt.inside:{const{x:o,y:c}=e.velocity,l=Ne.origin;l.length=e.moveCenter.radius,l.angle=e.velocity.angle+Math.PI,l.addTo(Ne.create(e.moveCenter));const{dx:u,dy:d}=Ye(e.position,l);if(o<=di&&u>=ui||c<=di&&d>=ui||o>=di&&u<=ui||c>=di&&d<=ui)return;e.position.x=Math.floor(tt({min:0,max:r.canvas.size.width})),e.position.y=Math.floor(tt({min:0,max:r.canvas.size.height}));const{dx:h,dy:f}=Ye(e.position,e.moveCenter);e.direction=Math.atan2(-f,-h),e.velocity.angle=e.direction;break}default:{if(hr(e.position,r.canvas.size,Ne.origin,e.getRadius(),n))return;switch(e.outType){case xt.outside:{e.position.x=Math.floor(tt({min:-e.moveCenter.radius,max:e.moveCenter.radius}))+e.moveCenter.x,e.position.y=Math.floor(tt({min:-e.moveCenter.radius,max:e.moveCenter.radius}))+e.moveCenter.y;const{dx:o,dy:c}=Ye(e.position,e.moveCenter);e.moveCenter.radius&&(e.direction=Math.atan2(c,o),e.velocity.angle=e.direction);break}case xt.normal:{const o=e.options.move.warp,c=r.canvas.size,l={bottom:c.height+e.getRadius()+e.offset.y,left:-e.getRadius()-e.offset.x,right:c.width+e.getRadius()+e.offset.x,top:-e.getRadius()-e.offset.y},u=e.getRadius(),d=si(e.position,u);n===ue.right&&d.left>c.width+e.offset.x?(e.position.x=l.left,e.initialPosition.x=e.position.x,o||(e.position.y=we()*c.height,e.initialPosition.y=e.position.y)):n===ue.left&&d.right<-e.offset.x&&(e.position.x=l.right,e.initialPosition.x=e.position.x,o||(e.position.y=we()*c.height,e.initialPosition.y=e.position.y)),n===ue.bottom&&d.top>c.height+e.offset.y?(o||(e.position.x=we()*c.width,e.initialPosition.x=e.position.x),e.position.y=l.top,e.initialPosition.y=e.position.y):n===ue.top&&d.bottom<-e.offset.y&&(o||(e.position.x=we()*c.width,e.initialPosition.x=e.position.x),e.position.y=l.bottom,e.initialPosition.y=e.position.y);break}}break}}}}const l1=(t,e)=>t.default===e||t.bottom===e||t.left===e||t.right===e||t.top===e;class d1{constructor(e){this._addUpdaterIfMissing=(n,i,s)=>{const r=n.options.move.outModes;!this.updaters.has(i)&&l1(r,i)&&this.updaters.set(i,s(this.container))},this._updateOutMode=(n,i,s,r)=>{for(const o of this.updaters.values())o.update(n,r,i,s)},this.container=e,this.updaters=new Map}init(e){this._addUpdaterIfMissing(e,Ie.bounce,n=>new r1(n)),this._addUpdaterIfMissing(e,Ie.out,n=>new c1(n)),this._addUpdaterIfMissing(e,Ie.destroy,n=>new o1(n)),this._addUpdaterIfMissing(e,Ie.none,n=>new a1(n))}isEnabled(e){return!e.destroyed&&!e.spawning}update(e,n){const i=e.options.move.outModes;this._updateOutMode(e,n,i.bottom??i.default,ue.bottom),this._updateOutMode(e,n,i.left??i.default,ue.left),this._updateOutMode(e,n,i.right??i.default,ue.right),this._updateOutMode(e,n,i.top??i.default,ue.top)}}async function u1(t,e=!0){t.checkVersion("3.9.1"),await t.addParticleUpdater("outModes",n=>Promise.resolve(new d1(n)),e)}var On;(function(t){t[t.r=1]="r",t[t.g=2]="g",t[t.b=3]="b",t[t.a=5]="a"})(On||(On={}));class h1{constructor(){this.key="rgb",this.stringPrefix="rgb"}handleColor(e){const n=e.value,i=n.rgb??e.value;if(i.r!==void 0)return i}handleRangeColor(e){const n=e.value,i=n.rgb??e.value;if(i.r!==void 0)return{r:Y(i.r),g:Y(i.g),b:Y(i.b)}}parseString(e){if(!e.startsWith(this.stringPrefix))return;const n=/rgba?\(\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i,i=n.exec(e),s=10;return i?{a:i.length>4?e0(i[On.a]):1,b:parseInt(i[On.b],s),g:parseInt(i[On.g],s),r:parseInt(i[On.r],s)}:void 0}}async function f1(t,e=!0){t.checkVersion("3.9.1"),await t.addColorManager(new h1,e)}const Yt=0;class p1{init(e){const n=e.container,i=e.options.size,s=i.animation;s.enable&&(e.size.velocity=(e.retina.sizeAnimationSpeed??n.retina.sizeAnimationSpeed)/zt*n.retina.reduceFactor,s.sync||(e.size.velocity*=we()))}isEnabled(e){return!e.destroyed&&!e.spawning&&e.size.enable&&((e.size.maxLoops??Yt)<=Yt||(e.size.maxLoops??Yt)>Yt&&(e.size.loops??Yt)<(e.size.maxLoops??Yt))}reset(e){e.size.loops=Yt}update(e,n){this.isEnabled(e)&&xr(e,e.size,!0,e.options.size.animation.destroy,n)}}async function x1(t,e=!0){t.checkVersion("3.9.1"),await t.addParticleUpdater("size",()=>Promise.resolve(new p1),e)}async function g1(t,e=!0){t.checkVersion("3.9.1"),await Xu(t,!1),await e1(t,!1),await f1(t,!1),await Bu(t,!1),await Uu(t,!1),await Wu(t,!1),await n1(t,!1),await u1(t,!1),await x1(t,!1),await t.refresh(e)}async function m1(t,e=!0){t.checkVersion("3.9.1"),await t.addEasing(un.easeInQuad,n=>n**2,!1),await t.addEasing(un.easeOutQuad,n=>1-(1-n)**2,!1),await t.addEasing(un.easeInOutQuad,n=>n<.5?2*n**2:1-(-2*n+2)**2/2,!1),await t.refresh(e)}function y1(t,e){const{context:n,opacity:i}=t,s=.5,r=n.globalAlpha;if(!e)return;const o=e.width,c=o*s;n.globalAlpha=i,n.drawImage(e,-c,-c,o,o),n.globalAlpha=r}const is='"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"',po=0;class b1{constructor(){this.validTypes=["emoji"],this._emojiShapeDict=new Map}destroy(){for(const[e,n]of this._emojiShapeDict)n instanceof ImageBitmap&&n?.close(),this._emojiShapeDict.delete(e)}draw(e){const n=e.particle.emojiDataKey;if(!n)return;const i=this._emojiShapeDict.get(n);i&&y1(e,i)}async init(e){const n=e.actualOptions,{validTypes:i}=this;if(!i.find(o=>_e(o,n.particles.shape.type)))return;const s=[eo(is)],r=i.map(o=>n.particles.shape.options[o]).find(o=>!!o);r&&it(r,o=>{o.font&&s.push(eo(o.font))}),await Promise.all(s)}particleDestroy(e){e.emojiDataKey=void 0}particleInit(e,n){const s=n.shapeData;if(!s?.value)return;const r=ot(s.value,n.randomIndexData);if(!r)return;const o=typeof r=="string"?{font:s.font??is,padding:s.padding??po,value:r}:{font:is,padding:po,...s,...r},c=o.font,l=o.value,u=`${l}_${c}`;if(this._emojiShapeDict.has(u)){n.emojiDataKey=u;return}const d=o.padding*2,h=bt(n.size.value),f=h+d,p=f*2;let x;if(typeof OffscreenCanvas<"u"){const y=new OffscreenCanvas(p,p),g=y.getContext("2d");if(!g)return;g.font=`400 ${h*2}px ${c}`,g.textBaseline="middle",g.textAlign="center",g.fillText(l,f,f),x=y.transferToImageBitmap()}else{const y=document.createElement("canvas");y.width=p,y.height=p;const g=y.getContext("2d");if(!g)return;g.font=`400 ${h*2}px ${c}`,g.textBaseline="middle",g.textAlign="center",g.fillText(l,f,f),x=y}this._emojiShapeDict.set(u,x),n.emojiDataKey=u}}async function v1(t,e=!0){t.checkVersion("3.9.1"),await t.addShape(new b1,e)}const k1=1,w1=1,b0=0;function v0(t,e,n,i,s,r){const o=e.actualOptions.interactivity.modes.attract;if(!o)return;const c=e.particles.quadTree.query(s,r);for(const l of c){const{dx:u,dy:d,distance:h}=Ye(l.position,n),f=o.speed*o.factor,p=ct(t.getEasing(o.easing)(w1-h/i)*f,k1,o.maxSpeed),x=Ne.create(h?u/h*p:f,h?d/h*p:f);l.position.subFrom(x)}}function S1(t,e,n){e.attract||(e.attract={particles:[]});const{attract:i}=e;if(i.finish||(i.count||(i.count=0),i.count++,i.count===e.particles.count&&(i.finish=!0)),i.clicking){const s=e.interactivity.mouse.clickPosition,r=e.retina.attractModeDistance;if(!r||r<b0||!s)return;v0(t,e,s,r,new Ue(s.x,s.y,r),o=>n(o))}else i.clicking===!1&&(i.particles=[])}function C1(t,e,n){const i=e.interactivity.mouse.position,s=e.retina.attractModeDistance;!s||s<b0||!i||v0(t,e,i,s,new Ue(i.x,i.y,s),r=>n(r))}class E1{constructor(){this.distance=200,this.duration=.4,this.easing=un.easeOutQuad,this.factor=1,this.maxSpeed=50,this.speed=1}load(e){z(e)||(e.distance!==void 0&&(this.distance=e.distance),e.duration!==void 0&&(this.duration=e.duration),e.easing!==void 0&&(this.easing=e.easing),e.factor!==void 0&&(this.factor=e.factor),e.maxSpeed!==void 0&&(this.maxSpeed=e.maxSpeed),e.speed!==void 0&&(this.speed=e.speed))}}const Hn="attract";let j1=class extends wt{constructor(e,n){super(n),this._engine=e,n.attract||(n.attract={particles:[]}),this.handleClickMode=i=>{const s=this.container.actualOptions,r=s.interactivity.modes.attract;if(!(!r||i!==Hn)){n.attract||(n.attract={particles:[]}),n.attract.clicking=!0,n.attract.count=0;for(const o of n.attract.particles)this.isEnabled(o)&&o.velocity.setTo(o.initialVelocity);n.attract.particles=[],n.attract.finish=!1,setTimeout(()=>{n.destroyed||(n.attract||(n.attract={particles:[]}),n.attract.clicking=!1)},r.duration*Ge)}}}clear(){}init(){const e=this.container,n=e.actualOptions.interactivity.modes.attract;n&&(e.retina.attractModeDistance=n.distance*e.retina.pixelRatio)}interact(){const e=this.container,n=e.actualOptions,i=e.interactivity.status===hn,s=n.interactivity.events,{enable:r,mode:o}=s.onHover,{enable:c,mode:l}=s.onClick;i&&r&&_e(Hn,o)?C1(this._engine,this.container,u=>this.isEnabled(u)):c&&_e(Hn,l)&&S1(this._engine,this.container,u=>this.isEnabled(u))}isEnabled(e){const n=this.container,i=n.actualOptions,s=n.interactivity.mouse,r=(e?.interactivity??i.interactivity).events;if((!s.position||!r.onHover.enable)&&(!s.clickPosition||!r.onClick.enable))return!1;const o=r.onHover.mode,c=r.onClick.mode;return _e(Hn,o)||_e(Hn,c)}loadModeOptions(e,...n){e.attract||(e.attract=new E1);for(const i of n)e.attract.load(i?.attract)}reset(){}};async function D1(t,e=!0){t.checkVersion("3.9.1"),await t.addInteractor("externalAttract",n=>Promise.resolve(new j1(t,n)),e)}const A1=2,Ci=.5,O1=Math.PI*Ci,xo=2,k0=10,_1=0;function w0(t,e,n,i,s){const r=t.particles.quadTree.query(i,s);for(const o of r)i instanceof Ue?i0(Ns(o),{position:e,mass:n**A1*O1,velocity:Ne.origin,factor:Ne.origin}):i instanceof gt&&Kl(o,si(e,n))}function P1(t,e,n,i){const s=document.querySelectorAll(e);s.length&&s.forEach(r=>{const o=r,c=t.retina.pixelRatio,l={x:(o.offsetLeft+o.offsetWidth*Ci)*c,y:(o.offsetTop+o.offsetHeight*Ci)*c},u=o.offsetWidth*Ci*c,d=k0*c,h=n.type===Nn.circle?new Ue(l.x,l.y,u+d):new gt(o.offsetLeft*c-d,o.offsetTop*c-d,o.offsetWidth*c+d*xo,o.offsetHeight*c+d*xo);i(l,u,h)})}function T1(t,e,n,i){pr(n,e,(s,r)=>P1(t,s,r,(o,c,l)=>w0(t,o,c,l,i)))}function I1(t,e){const n=t.retina.pixelRatio,i=k0*n,s=t.interactivity.mouse.position,r=t.retina.bounceModeDistance;!r||r<_1||!s||w0(t,s,r,new Ue(s.x,s.y,r+i),e)}class R1{constructor(){this.distance=200}load(e){z(e)||e.distance!==void 0&&(this.distance=e.distance)}}const hi="bounce";class M1 extends wt{constructor(e){super(e)}clear(){}init(){const e=this.container,n=e.actualOptions.interactivity.modes.bounce;n&&(e.retina.bounceModeDistance=n.distance*e.retina.pixelRatio)}interact(){const e=this.container,n=e.actualOptions,i=n.interactivity.events,s=e.interactivity.status===hn,r=i.onHover.enable,o=i.onHover.mode,c=i.onDiv;s&&r&&_e(hi,o)?I1(this.container,l=>this.isEnabled(l)):T1(this.container,c,hi,l=>this.isEnabled(l))}isEnabled(e){const n=this.container,i=n.actualOptions,s=n.interactivity.mouse,r=(e?.interactivity??i.interactivity).events,o=r.onDiv;return!!s.position&&r.onHover.enable&&_e(hi,r.onHover.mode)||fr(hi,o)}loadModeOptions(e,...n){e.bounce||(e.bounce=new R1);for(const i of n)e.bounce.load(i?.bounce)}reset(){}}async function B1(t,e=!0){t.checkVersion("3.9.1"),await t.addInteractor("externalBounce",n=>Promise.resolve(new M1(n)),e)}class S0{constructor(){this.distance=200,this.duration=.4,this.mix=!1}load(e){if(!z(e)){if(e.distance!==void 0&&(this.distance=e.distance),e.duration!==void 0&&(this.duration=e.duration),e.mix!==void 0&&(this.mix=e.mix),e.opacity!==void 0&&(this.opacity=e.opacity),e.color!==void 0){const n=kt(this.color)?void 0:this.color;this.color=it(e.color,i=>We.create(n,i))}e.size!==void 0&&(this.size=e.size)}}}class L1 extends S0{constructor(){super(),this.selectors=[]}load(e){super.load(e),!z(e)&&e.selectors!==void 0&&(this.selectors=e.selectors)}}class z1 extends S0{load(e){super.load(e),!z(e)&&(this.divs=it(e.divs,n=>{const i=new L1;return i.load(n),i}))}}var yt;(function(t){t.color="color",t.opacity="opacity",t.size="size"})(yt||(yt={}));function go(t,e,n,i){if(e>=n){const s=t+(e-n)*i;return ct(s,t,e)}else if(e<n){const s=t-(n-e)*i;return ct(s,e,t)}}const Jt="bubble",ss=0,N1=0,F1=2,mo=1,yo=1,$1=0,G1=0,rs=.5,os=1;class V1 extends wt{constructor(e,n){super(e),this._clickBubble=()=>{const i=this.container,s=i.actualOptions,r=i.interactivity.mouse.clickPosition,o=s.interactivity.modes.bubble;if(!o||!r)return;i.bubble||(i.bubble={});const c=i.retina.bubbleModeDistance;if(!c||c<ss)return;const l=i.particles.quadTree.queryCircle(r,c,d=>this.isEnabled(d)),{bubble:u}=i;for(const d of l){if(!u.clicking)continue;d.bubble.inRange=!u.durationEnd;const h=d.getPosition(),f=nt(h,r),p=(new Date().getTime()-(i.interactivity.mouse.clickTime??N1))/Ge;p>o.duration&&(u.durationEnd=!0),p>o.duration*F1&&(u.clicking=!1,u.durationEnd=!1);const x={bubbleObj:{optValue:i.retina.bubbleModeSize,value:d.bubble.radius},particlesObj:{optValue:bt(d.options.size.value)*i.retina.pixelRatio,value:d.size.value},type:yt.size};this._process(d,f,p,x);const y={bubbleObj:{optValue:o.opacity,value:d.bubble.opacity},particlesObj:{optValue:bt(d.options.opacity.value),value:d.opacity?.value??mo},type:yt.opacity};this._process(d,f,p,y),!u.durationEnd&&f<=c?this._hoverBubbleColor(d,f):delete d.bubble.color}},this._hoverBubble=()=>{const i=this.container,s=i.interactivity.mouse.position,r=i.retina.bubbleModeDistance;if(!r||r<ss||!s)return;const o=i.particles.quadTree.queryCircle(s,r,c=>this.isEnabled(c));for(const c of o){c.bubble.inRange=!0;const l=c.getPosition(),u=nt(l,s),d=yo-u/r;u<=r?d>=G1&&i.interactivity.status===hn&&(this._hoverBubbleSize(c,d),this._hoverBubbleOpacity(c,d),this._hoverBubbleColor(c,d)):this.reset(c),i.interactivity.status===Is&&this.reset(c)}},this._hoverBubbleColor=(i,s,r)=>{const o=this.container.actualOptions,c=r??o.interactivity.modes.bubble;if(c){if(!i.bubble.finalColor){const l=c.color;if(!l)return;const u=ot(l);i.bubble.finalColor=Zn(this._engine,u)}if(i.bubble.finalColor)if(c.mix){i.bubble.color=void 0;const l=i.getFillColor();i.bubble.color=l?c0(gr(l,i.bubble.finalColor,yo-s,s)):i.bubble.finalColor}else i.bubble.color=i.bubble.finalColor}},this._hoverBubbleOpacity=(i,s,r)=>{const o=this.container,c=o.actualOptions,l=r?.opacity??c.interactivity.modes.bubble?.opacity;if(!l)return;const u=i.options.opacity.value,d=i.opacity?.value??mo,h=go(d,l,bt(u),s);h!==void 0&&(i.bubble.opacity=h)},this._hoverBubbleSize=(i,s,r)=>{const o=this.container,c=r?.size?r.size*o.retina.pixelRatio:o.retina.bubbleModeSize;if(c===void 0)return;const l=bt(i.options.size.value)*o.retina.pixelRatio,u=i.size.value,d=go(u,c,l,s);d!==void 0&&(i.bubble.radius=d)},this._process=(i,s,r,o)=>{const c=this.container,l=o.bubbleObj.optValue,u=c.actualOptions,d=u.interactivity.modes.bubble;if(!d||l===void 0)return;const h=d.duration,f=c.retina.bubbleModeDistance,p=o.particlesObj.optValue,x=o.bubbleObj.value,y=o.particlesObj.value??$1,g=o.type;if(!(!f||f<ss||l===p))if(c.bubble||(c.bubble={}),c.bubble.durationEnd)x&&(g===yt.size&&delete i.bubble.radius,g===yt.opacity&&delete i.bubble.opacity);else if(s<=f){if((x??y)!==l){const v=y-r*(y-l)/h;g===yt.size&&(i.bubble.radius=v),g===yt.opacity&&(i.bubble.opacity=v)}}else g===yt.size&&delete i.bubble.radius,g===yt.opacity&&delete i.bubble.opacity},this._singleSelectorHover=(i,s,r)=>{const o=this.container,c=document.querySelectorAll(s),l=o.actualOptions.interactivity.modes.bubble;!l||!c.length||c.forEach(u=>{const d=u,h=o.retina.pixelRatio,f={x:(d.offsetLeft+d.offsetWidth*rs)*h,y:(d.offsetTop+d.offsetHeight*rs)*h},p=d.offsetWidth*rs*h,x=r.type===Nn.circle?new Ue(f.x,f.y,p):new gt(d.offsetLeft*h,d.offsetTop*h,d.offsetWidth*h,d.offsetHeight*h),y=o.particles.quadTree.query(x,g=>this.isEnabled(g));for(const g of y){if(!x.contains(g.getPosition()))continue;g.bubble.inRange=!0;const m=l.divs,v=n0(m,d);(!g.bubble.div||g.bubble.div!==d)&&(this.clear(g,i,!0),g.bubble.div=d),this._hoverBubbleSize(g,os,v),this._hoverBubbleOpacity(g,os,v),this._hoverBubbleColor(g,os,v)}})},this._engine=n,e.bubble||(e.bubble={}),this.handleClickMode=i=>{i===Jt&&(e.bubble||(e.bubble={}),e.bubble.clicking=!0)}}clear(e,n,i){e.bubble.inRange&&!i||(delete e.bubble.div,delete e.bubble.opacity,delete e.bubble.radius,delete e.bubble.color)}init(){const e=this.container,n=e.actualOptions.interactivity.modes.bubble;n&&(e.retina.bubbleModeDistance=n.distance*e.retina.pixelRatio,n.size!==void 0&&(e.retina.bubbleModeSize=n.size*e.retina.pixelRatio))}interact(e){const n=this.container.actualOptions,i=n.interactivity.events,s=i.onHover,r=i.onClick,o=s.enable,c=s.mode,l=r.enable,u=r.mode,d=i.onDiv;o&&_e(Jt,c)?this._hoverBubble():l&&_e(Jt,u)?this._clickBubble():pr(Jt,d,(h,f)=>this._singleSelectorHover(e,h,f))}isEnabled(e){const n=this.container,i=n.actualOptions,s=n.interactivity.mouse,r=(e?.interactivity??i.interactivity).events,{onClick:o,onDiv:c,onHover:l}=r,u=fr(Jt,c);return u||l.enable&&s.position||o.enable&&s.clickPosition?_e(Jt,l.mode)||_e(Jt,o.mode)||u:!1}loadModeOptions(e,...n){e.bubble||(e.bubble=new z1);for(const i of n)e.bubble.load(i?.bubble)}reset(e){e.bubble.inRange=!1}}async function U1(t,e=!0){t.checkVersion("3.9.1"),await t.addInteractor("externalBubble",n=>Promise.resolve(new V1(n,t)),e)}class H1{constructor(){this.opacity=.5}load(e){z(e)||e.opacity!==void 0&&(this.opacity=e.opacity)}}class W1{constructor(){this.distance=80,this.links=new H1,this.radius=60}load(e){z(e)||(e.distance!==void 0&&(this.distance=e.distance),this.links.load(e.links),e.radius!==void 0&&(this.radius=e.radius))}}const bo=0,vo=1,q1=0;function Y1(t,e,n,i){const s=Math.floor(n.getRadius()/e.getRadius()),r=e.getFillColor(),o=n.getFillColor();if(!r||!o)return;const c=e.getPosition(),l=n.getPosition(),u=gr(r,o,e.getRadius(),n.getRadius()),d=t.createLinearGradient(c.x,c.y,l.x,l.y);return d.addColorStop(bo,ei(r,i)),d.addColorStop(ct(s,bo,vo),Tt(u,i)),d.addColorStop(vo,ei(o,i)),d}function J1(t,e,n,i,s){Kn(t,i,s),t.lineWidth=e,t.strokeStyle=n,t.stroke()}function Q1(t,e,n,i){const s=t.actualOptions,r=s.interactivity.modes.connect;if(r)return Y1(e,n,i,r.links.opacity)}function K1(t,e,n){t.canvas.draw(i=>{const s=Q1(t,i,e,n);if(!s)return;const r=e.getPosition(),o=n.getPosition();J1(i,e.retina.linksWidth??q1,s,r,o)})}const X1="connect",ko=0;class Z1 extends wt{constructor(e){super(e)}clear(){}init(){const e=this.container,n=e.actualOptions.interactivity.modes.connect;n&&(e.retina.connectModeDistance=n.distance*e.retina.pixelRatio,e.retina.connectModeRadius=n.radius*e.retina.pixelRatio)}interact(){const e=this.container;if(e.actualOptions.interactivity.events.onHover.enable&&e.interactivity.status==="pointermove"){const i=e.interactivity.mouse.position,{connectModeDistance:s,connectModeRadius:r}=e.retina;if(!s||s<ko||!r||r<ko||!i)return;const o=Math.abs(r),c=e.particles.quadTree.queryCircle(i,o,l=>this.isEnabled(l));c.forEach((l,u)=>{const d=l.getPosition(),h=1;for(const f of c.slice(u+h)){const p=f.getPosition(),x=Math.abs(s),y=Math.abs(d.x-p.x),g=Math.abs(d.y-p.y);y<x&&g<x&&K1(e,l,f)}})}}isEnabled(e){const n=this.container,i=n.interactivity.mouse,s=(e?.interactivity??n.actualOptions.interactivity).events;return s.onHover.enable&&i.position?_e(X1,s.onHover.mode):!1}loadModeOptions(e,...n){e.connect||(e.connect=new W1);for(const i of n)e.connect.load(i?.connect)}reset(){}}async function eh(t,e=!0){t.checkVersion("3.9.1"),await t.addInteractor("externalConnect",n=>Promise.resolve(new Z1(n)),e)}class th{constructor(){this.blink=!1,this.consent=!1,this.opacity=1}load(e){z(e)||(e.blink!==void 0&&(this.blink=e.blink),e.color!==void 0&&(this.color=We.create(this.color,e.color)),e.consent!==void 0&&(this.consent=e.consent),e.opacity!==void 0&&(this.opacity=e.opacity))}}class nh{constructor(){this.distance=100,this.links=new th}load(e){z(e)||(e.distance!==void 0&&(this.distance=e.distance),this.links.load(e.links))}}const ih=0;function sh(t,e,n,i,s,r){Kn(t,n,i),t.strokeStyle=Tt(s,r),t.lineWidth=e,t.stroke()}function rh(t,e,n,i,s){t.canvas.draw(r=>{const o=e.getPosition();sh(r,e.retina.linksWidth??ih,o,s,n,i)})}const oh="grab",ah=0,ch=0;class lh extends wt{constructor(e,n){super(e),this._engine=n}clear(){}init(){const e=this.container,n=e.actualOptions.interactivity.modes.grab;n&&(e.retina.grabModeDistance=n.distance*e.retina.pixelRatio)}interact(){const e=this.container,n=e.actualOptions,i=n.interactivity;if(!i.modes.grab||!i.events.onHover.enable||e.interactivity.status!==hn)return;const s=e.interactivity.mouse.position;if(!s)return;const r=e.retina.grabModeDistance;if(!r||r<ah)return;const o=e.particles.quadTree.queryCircle(s,r,c=>this.isEnabled(c));for(const c of o){const l=c.getPosition(),u=nt(l,s);if(u>r)continue;const d=i.modes.grab.links,h=d.opacity,f=h-u*h/r;if(f<=ch)continue;const p=d.color??c.options.links?.color;if(!e.particles.grabLineColor&&p){const y=i.modes.grab.links;e.particles.grabLineColor=d0(this._engine,p,y.blink,y.consent)}const x=$s(c,void 0,e.particles.grabLineColor);x&&rh(e,c,x,f,s)}}isEnabled(e){const n=this.container,i=n.interactivity.mouse,s=(e?.interactivity??n.actualOptions.interactivity).events;return s.onHover.enable&&!!i.position&&_e(oh,s.onHover.mode)}loadModeOptions(e,...n){e.grab||(e.grab=new nh);for(const i of n)e.grab.load(i?.grab)}reset(){}}async function dh(t,e=!0){t.checkVersion("3.9.1"),await t.addInteractor("externalGrab",n=>Promise.resolve(new lh(n,t)),e)}const uh="pause";class hh extends wt{constructor(e){super(e),this.handleClickMode=n=>{if(n!==uh)return;const i=this.container;i.animationStatus?i.pause():i.play()}}clear(){}init(){}interact(){}isEnabled(){return!0}reset(){}}async function fh(t,e=!0){t.checkVersion("3.9.1"),await t.addInteractor("externalPause",n=>Promise.resolve(new hh(n)),e)}class ph{constructor(){this.default=!0,this.groups=[],this.quantity=4}load(e){if(z(e))return;e.default!==void 0&&(this.default=e.default),e.groups!==void 0&&(this.groups=e.groups.map(i=>i)),this.groups.length||(this.default=!0);const n=e.quantity;n!==void 0&&(this.quantity=ye(n)),this.particles=it(e.particles,i=>He({},i))}}const xh="push",gh=0;class mh extends wt{constructor(e){super(e),this.handleClickMode=n=>{if(n!==xh)return;const i=this.container,s=i.actualOptions,r=s.interactivity.modes.push;if(!r)return;const o=Y(r.quantity);if(o<=gh)return;const c=Ui([void 0,...r.groups]),l=c!==void 0?i.actualOptions.particles.groups[c]:void 0,u=ot(r.particles),d=He(l,u);i.particles.push(o,i.interactivity.mouse,d,c)}}clear(){}init(){}interact(){}isEnabled(){return!0}loadModeOptions(e,...n){e.push||(e.push=new ph);for(const i of n)e.push.load(i?.push)}reset(){}}async function yh(t,e=!0){t.checkVersion("3.9.1"),await t.addInteractor("externalPush",n=>Promise.resolve(new mh(n)),e)}class bh{constructor(){this.quantity=2}load(e){if(z(e))return;const n=e.quantity;n!==void 0&&(this.quantity=ye(n))}}const vh="remove";class kh extends wt{constructor(e){super(e),this.handleClickMode=n=>{const i=this.container,s=i.actualOptions;if(!s.interactivity.modes.remove||n!==vh)return;const r=Y(s.interactivity.modes.remove.quantity);i.particles.removeQuantity(r)}}clear(){}init(){}interact(){}isEnabled(){return!0}loadModeOptions(e,...n){e.remove||(e.remove=new bh);for(const i of n)e.remove.load(i?.remove)}reset(){}}async function wh(t,e=!0){t.checkVersion("3.9.1"),await t.addInteractor("externalRemove",n=>Promise.resolve(new kh(n)),e)}class C0{constructor(){this.distance=200,this.duration=.4,this.factor=100,this.speed=1,this.maxSpeed=50,this.easing=un.easeOutQuad}load(e){z(e)||(e.distance!==void 0&&(this.distance=e.distance),e.duration!==void 0&&(this.duration=e.duration),e.easing!==void 0&&(this.easing=e.easing),e.factor!==void 0&&(this.factor=e.factor),e.speed!==void 0&&(this.speed=e.speed),e.maxSpeed!==void 0&&(this.maxSpeed=e.maxSpeed))}}class Sh extends C0{constructor(){super(),this.selectors=[]}load(e){super.load(e),!z(e)&&e.selectors!==void 0&&(this.selectors=e.selectors)}}class Ch extends C0{load(e){super.load(e),!z(e)&&(this.divs=it(e.divs,n=>{const i=new Sh;return i.load(n),i}))}}const Qt="repulse",Eh=0,jh=6,Dh=3,Ah=2,Oh=0,_h=0,Ph=1,as=.5;class Th extends wt{constructor(e,n){super(n),this._clickRepulse=()=>{const i=this.container,s=i.actualOptions.interactivity.modes.repulse;if(!s)return;const r=i.repulse??{particles:[]};if(r.finish||(r.count||(r.count=0),r.count++,r.count===i.particles.count&&(r.finish=!0)),r.clicking){const o=i.retina.repulseModeDistance;if(!o||o<Eh)return;const c=Math.pow(o/jh,Dh),l=i.interactivity.mouse.clickPosition;if(l===void 0)return;const u=new Ue(l.x,l.y,c),d=i.particles.quadTree.query(u,h=>this.isEnabled(h));for(const h of d){const{dx:f,dy:p,distance:x}=Ye(l,h.position),y=x**Ah,g=s.speed,m=-c*g/y;if(y<=c){r.particles.push(h);const v=Ne.create(f,p);v.length=m,h.velocity.setTo(v)}}}else if(r.clicking===!1){for(const o of r.particles)o.velocity.setTo(o.initialVelocity);r.particles=[]}},this._hoverRepulse=()=>{const i=this.container,s=i.interactivity.mouse.position,r=i.retina.repulseModeDistance;!r||r<Oh||!s||this._processRepulse(s,r,new Ue(s.x,s.y,r))},this._processRepulse=(i,s,r,o)=>{const c=this.container,l=c.particles.quadTree.query(r,g=>this.isEnabled(g)),u=c.actualOptions.interactivity.modes.repulse;if(!u)return;const{easing:d,speed:h,factor:f,maxSpeed:p}=u,x=this._engine.getEasing(d),y=(o?.speed??h)*f;for(const g of l){const{dx:m,dy:v,distance:S}=Ye(g.position,i),j=ct(x(Ph-S/s)*y,_h,p),_=Ne.create(S?m/S*j:y,S?v/S*j:y);g.position.addTo(_)}},this._singleSelectorRepulse=(i,s)=>{const r=this.container,o=r.actualOptions.interactivity.modes.repulse;if(!o)return;const c=document.querySelectorAll(i);c.length&&c.forEach(l=>{const u=l,d=r.retina.pixelRatio,h={x:(u.offsetLeft+u.offsetWidth*as)*d,y:(u.offsetTop+u.offsetHeight*as)*d},f=u.offsetWidth*as*d,p=s.type===Nn.circle?new Ue(h.x,h.y,f):new gt(u.offsetLeft*d,u.offsetTop*d,u.offsetWidth*d,u.offsetHeight*d),x=o.divs,y=n0(x,u);this._processRepulse(h,f,p,y)})},this._engine=e,n.repulse||(n.repulse={particles:[]}),this.handleClickMode=i=>{const s=this.container.actualOptions,r=s.interactivity.modes.repulse;if(!r||i!==Qt)return;n.repulse||(n.repulse={particles:[]});const o=n.repulse;o.clicking=!0,o.count=0;for(const c of n.repulse.particles)this.isEnabled(c)&&c.velocity.setTo(c.initialVelocity);o.particles=[],o.finish=!1,setTimeout(()=>{n.destroyed||(o.clicking=!1)},r.duration*Ge)}}clear(){}init(){const e=this.container,n=e.actualOptions.interactivity.modes.repulse;n&&(e.retina.repulseModeDistance=n.distance*e.retina.pixelRatio)}interact(){const e=this.container,n=e.actualOptions,i=e.interactivity.status===hn,s=n.interactivity.events,r=s.onHover,o=r.enable,c=r.mode,l=s.onClick,u=l.enable,d=l.mode,h=s.onDiv;i&&o&&_e(Qt,c)?this._hoverRepulse():u&&_e(Qt,d)?this._clickRepulse():pr(Qt,h,(f,p)=>this._singleSelectorRepulse(f,p))}isEnabled(e){const n=this.container,i=n.actualOptions,s=n.interactivity.mouse,r=(e?.interactivity??i.interactivity).events,o=r.onDiv,c=r.onHover,l=r.onClick,u=fr(Qt,o);if(!(u||c.enable&&s.position||l.enable&&s.clickPosition))return!1;const d=c.mode,h=l.mode;return _e(Qt,d)||_e(Qt,h)||u}loadModeOptions(e,...n){e.repulse||(e.repulse=new Ch);for(const i of n)e.repulse.load(i?.repulse)}reset(){}}async function Ih(t,e=!0){t.checkVersion("3.9.1"),await t.addInteractor("externalRepulse",n=>Promise.resolve(new Th(t,n)),e)}class Rh{constructor(){this.factor=3,this.radius=200}load(e){z(e)||(e.factor!==void 0&&(this.factor=e.factor),e.radius!==void 0&&(this.radius=e.radius))}}const Mh="slow",Bh=0;class Lh extends wt{constructor(e){super(e)}clear(e,n,i){e.slow.inRange&&!i||(e.slow.factor=1)}init(){const e=this.container,n=e.actualOptions.interactivity.modes.slow;n&&(e.retina.slowModeRadius=n.radius*e.retina.pixelRatio)}interact(){}isEnabled(e){const n=this.container,i=n.interactivity.mouse,s=(e?.interactivity??n.actualOptions.interactivity).events;return s.onHover.enable&&!!i.position&&_e(Mh,s.onHover.mode)}loadModeOptions(e,...n){e.slow||(e.slow=new Rh);for(const i of n)e.slow.load(i?.slow)}reset(e){e.slow.inRange=!1;const n=this.container,i=n.actualOptions,s=n.interactivity.mouse.position,r=n.retina.slowModeRadius,o=i.interactivity.modes.slow;if(!o||!r||r<Bh||!s)return;const c=e.getPosition(),l=nt(s,c),u=l/r,d=o.factor,{slow:h}=e;l>r||(h.inRange=!0,h.factor=u/d)}}async function zh(t,e=!0){t.checkVersion("3.9.1"),await t.addInteractor("externalSlow",n=>Promise.resolve(new Lh(n)),e)}const Nh=0,Fh=1,$h=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;function Gh(t,e,n){const{svgData:i}=t;if(!i)return"";const s=ei(e,n);if(i.includes("fill"))return i.replace($h,()=>s);const r=i.indexOf(">");return`${i.substring(Nh,r)} fill="${s}"${i.substring(r)}`}async function Hi(t){return new Promise(e=>{t.loading=!0;const n=new Image;t.element=n,n.addEventListener("load",()=>{t.loading=!1,e()}),n.addEventListener("error",()=>{t.element=void 0,t.error=!0,t.loading=!1,pn().error(`${at} loading image: ${t.source}`),e()}),n.src=t.source})}async function Vh(t){if(t.type!=="svg"){await Hi(t);return}t.loading=!0;const e=await fetch(t.source);e.ok?t.svgData=await e.text():(pn().error(`${at} Image not found`),t.error=!0),t.loading=!1}function Uh(t,e,n,i){const s=Gh(t,n,i.opacity?.value??Fh),r={color:n,gif:e.gif,data:{...t,svgData:s},loaded:!1,ratio:e.width/e.height,replaceColor:e.replaceColor,source:e.src};return new Promise(o=>{const c=new Blob([s],{type:"image/svg+xml"}),l=URL||window.URL||window.webkitURL||window,u=l.createObjectURL(c),d=new Image;d.addEventListener("load",()=>{r.loaded=!0,r.element=d,o(r),l.revokeObjectURL(u)});const h=async()=>{l.revokeObjectURL(u);const f={...t,error:!1,loading:!0};await Hi(f),r.loaded=!0,r.element=f.element,o(r)};d.addEventListener("error",()=>void h()),d.src=u})}const cs=[0,4,2,1],wo=[8,8,4,2];class Hh{constructor(e){this.pos=0,this.data=new Uint8ClampedArray(e)}getString(e){const n=this.data.slice(this.pos,this.pos+e);return this.pos+=n.length,n.reduce((i,s)=>i+String.fromCharCode(s),"")}nextByte(){return this.data[this.pos++]}nextTwoBytes(){return this.pos+=2,this.data[this.pos-2]+(this.data[this.pos-1]<<8)}readSubBlocks(){let e="",n=0;const i=0,s=0;do{n=this.data[this.pos++];for(let r=n;--r>=i;e+=String.fromCharCode(this.data[this.pos++]));}while(n!==s);return e}readSubBlocksBin(){let e=this.data[this.pos],n=0;const i=0,s=1;for(let o=0;e!==i;o+=e+s,e=this.data[this.pos+o])n+=e;const r=new Uint8Array(n);e=this.data[this.pos++];for(let o=0;e!==i;e=this.data[this.pos++])for(let c=e;--c>=i;r[o++]=this.data[this.pos++]);return r}skipSubBlocks(){for(const e=1,n=0;this.data[this.pos]!==n;this.pos+=this.data[this.pos]+e);this.pos++}}var ut;(function(t){t[t.Replace=0]="Replace",t[t.Combine=1]="Combine",t[t.RestoreBackground=2]="RestoreBackground",t[t.RestorePrevious=3]="RestorePrevious",t[t.UndefinedA=4]="UndefinedA",t[t.UndefinedB=5]="UndefinedB",t[t.UndefinedC=6]="UndefinedC",t[t.UndefinedD=7]="UndefinedD"})(ut||(ut={}));var Pt;(function(t){t[t.Extension=33]="Extension",t[t.ApplicationExtension=255]="ApplicationExtension",t[t.GraphicsControlExtension=249]="GraphicsControlExtension",t[t.PlainTextExtension=1]="PlainTextExtension",t[t.CommentExtension=254]="CommentExtension",t[t.Image=44]="Image",t[t.EndOfFile=59]="EndOfFile"})(Pt||(Pt={}));const Qe={x:0,y:0},Wh=0,So=.5,qh=0,Co=0,Vs=0;function E0(t,e){const n=[];for(let i=0;i<e;i++)n.push({r:t.data[t.pos],g:t.data[t.pos+1],b:t.data[t.pos+2]}),t.pos+=3;return n}function Yh(t,e,n,i){switch(t.nextByte()){case Pt.GraphicsControlExtension:{const s=e.frames[n(!1)];t.pos++;const r=t.nextByte();s.GCreserved=(r&224)>>>5,s.disposalMethod=(r&28)>>>2,s.userInputDelayFlag=(r&2)===2;const o=(r&1)===1;s.delayTime=t.nextTwoBytes()*10;const c=t.nextByte();o&&i(c),t.pos++;break}case Pt.ApplicationExtension:{t.pos++;const s={identifier:t.getString(8),authenticationCode:t.getString(3),data:t.readSubBlocksBin()};e.applicationExtensions.push(s);break}case Pt.CommentExtension:{e.comments.push([n(!1),t.readSubBlocks()]);break}case Pt.PlainTextExtension:{if(e.globalColorTable.length===0)throw new EvalError("plain text extension without global color table");t.pos++,e.frames[n(!1)].plainTextData={left:t.nextTwoBytes(),top:t.nextTwoBytes(),width:t.nextTwoBytes(),height:t.nextTwoBytes(),charSize:{width:t.nextTwoBytes(),height:t.nextTwoBytes()},foregroundColor:t.nextByte(),backgroundColor:t.nextByte(),text:t.readSubBlocks()};break}default:t.skipSubBlocks();break}}async function Jh(t,e,n,i,s,r){const o=e.frames[i(!0)];o.left=t.nextTwoBytes(),o.top=t.nextTwoBytes(),o.width=t.nextTwoBytes(),o.height=t.nextTwoBytes();const c=t.nextByte(),l=(c&128)===128,u=(c&64)===64;o.sortFlag=(c&32)===32,o.reserved=(c&24)>>>3;const d=1<<(c&7)+1;l&&(o.localColorTable=E0(t,d));const h=m=>{const{r:v,g:S,b:j}=(l?o.localColorTable:e.globalColorTable)[m];return m!==s(null)?{r:v,g:S,b:j,a:255}:{r:v,g:S,b:j,a:n?~~((v+S+j)/3):0}},f=(()=>{try{return new ImageData(o.width,o.height,{colorSpace:"srgb"})}catch(m){if(m instanceof DOMException&&m.name==="IndexSizeError")return null;throw m}})();if(f==null)throw new EvalError("GIF frame size is to large");const p=t.nextByte(),x=t.readSubBlocksBin(),y=1<<p,g=(m,v)=>{const S=m>>>3,j=m&7;return(x[S]+(x[S+1]<<8)+(x[S+2]<<16)&(1<<v)-1<<j)>>>j};if(u){for(let m=0,v=p+1,S=0,j=[[0]],_=0;_<4;_++)if(cs[_]<o.height){let I=0,L=0,H=!1;for(;!H;){const $=m;if(m=g(S,v),S+=v+1,m===y){v=p+1,j.length=y+2;for(let X=0;X<j.length;X++)j[X]=X<y?[X]:[]}else{m>=j.length?j.push(j[$].concat(j[$][0])):$!==y&&j.push(j[$].concat(j[m][0]));for(const X of j[m]){const{r:W,g:ne,b:ie,a:Q}=h(X);f.data.set([W,ne,ie,Q],cs[_]*o.width+wo[_]*L+I%(o.width*4)),I+=4}j.length===1<<v&&v<12&&v++}I===o.width*4*(L+1)&&(L++,cs[_]+wo[_]*L>=o.height&&(H=!0))}}o.image=f,o.bitmap=await createImageBitmap(f)}else{let m=0,v=p+1,S=0,j=-4,_=!1;const I=[[0]];for(;!_;){const L=m;if(m=g(S,v),S+=v,m===y){v=p+1,I.length=y+2;for(let H=0;H<I.length;H++)I[H]=H<y?[H]:[]}else{if(m===y+1){_=!0;break}m>=I.length?I.push(I[L].concat(I[L][0])):L!==y&&I.push(I[L].concat(I[m][0]));for(const H of I[m]){const{r:$,g:X,b:W,a:ne}=h(H);f.data.set([$,X,W,ne],j+=4)}I.length>=1<<v&&v<12&&v++}}o.image=f,o.bitmap=await createImageBitmap(f)}}async function Qh(t,e,n,i,s,r){switch(t.nextByte()){case Pt.EndOfFile:return!0;case Pt.Image:await Jh(t,e,n,i,s);break;case Pt.Extension:Yh(t,e,i,s);break;default:throw new EvalError("undefined block found")}return!1}function Kh(t){for(const e of t.applicationExtensions)if(e.identifier+e.authenticationCode==="NETSCAPE2.0")return e.data[1]+(e.data[2]<<8);return NaN}async function Xh(t,e,n){n||(n=!1);const i=await fetch(t);if(!i.ok&&i.status===404)throw new EvalError("file not found");const s=await i.arrayBuffer(),r={width:0,height:0,totalTime:0,colorRes:0,pixelAspectRatio:0,frames:[],sortFlag:!1,globalColorTable:[],backgroundImage:new ImageData(1,1,{colorSpace:"srgb"}),comments:[],applicationExtensions:[]},o=new Hh(new Uint8ClampedArray(s));if(o.getString(6)!=="GIF89a")throw new Error("not a supported GIF file");r.width=o.nextTwoBytes(),r.height=o.nextTwoBytes();const c=o.nextByte(),l=(c&128)===128;r.colorRes=(c&112)>>>4,r.sortFlag=(c&8)===8;const u=1<<(c&7)+1,d=o.nextByte();r.pixelAspectRatio=o.nextByte(),r.pixelAspectRatio!==0&&(r.pixelAspectRatio=(r.pixelAspectRatio+15)/64),l&&(r.globalColorTable=E0(o,u));const h=(()=>{try{return new ImageData(r.width,r.height,{colorSpace:"srgb"})}catch(j){if(j instanceof DOMException&&j.name==="IndexSizeError")return null;throw j}})();if(h==null)throw new Error("GIF frame size is to large");const{r:f,g:p,b:x}=r.globalColorTable[d];h.data.set(l?[f,p,x,255]:[0,0,0,0]);for(let j=4;j<h.data.length;j*=2)h.data.copyWithin(j,0,j);r.backgroundImage=h;let y=-1,g=!0,m=-1;const v=j=>(j&&(g=!0),y),S=j=>(j!=null&&(m=j),m);try{do g&&(r.frames.push({left:0,top:0,width:0,height:0,disposalMethod:ut.Replace,image:new ImageData(1,1,{colorSpace:"srgb"}),plainTextData:null,userInputDelayFlag:!1,delayTime:0,sortFlag:!1,localColorTable:[],reserved:0,GCreserved:0}),y++,m=-1,g=!1);while(!await Qh(o,r,n,v,S,e));r.frames.length--;for(const j of r.frames){if(j.userInputDelayFlag&&j.delayTime===0){r.totalTime=1/0;break}r.totalTime+=j.delayTime}return r}catch(j){throw j instanceof EvalError?new Error(`error while parsing frame ${y} "${j.message}"`):j}}function Zh(t){const{context:e,radius:n,particle:i,delta:s}=t,r=i.image;if(!r?.gifData||!r.gif)return;const o=new OffscreenCanvas(r.gifData.width,r.gifData.height),c=o.getContext("2d");if(!c)throw new Error("could not create offscreen canvas context");c.imageSmoothingQuality="low",c.imageSmoothingEnabled=!1,c.clearRect(Qe.x,Qe.y,o.width,o.height),i.gifLoopCount===void 0&&(i.gifLoopCount=r.gifLoopCount??Vs);let l=i.gifFrame??Wh;const u={x:-r.gifData.width*So,y:-r.gifData.height*So},d=r.gifData.frames[l];if(i.gifTime===void 0&&(i.gifTime=qh),!!d.bitmap){switch(e.scale(n/r.gifData.width,n/r.gifData.height),d.disposalMethod){case ut.UndefinedA:case ut.UndefinedB:case ut.UndefinedC:case ut.UndefinedD:case ut.Replace:c.drawImage(d.bitmap,d.left,d.top),e.drawImage(o,u.x,u.y),c.clearRect(Qe.x,Qe.y,o.width,o.height);break;case ut.Combine:c.drawImage(d.bitmap,d.left,d.top),e.drawImage(o,u.x,u.y);break;case ut.RestoreBackground:c.drawImage(d.bitmap,d.left,d.top),e.drawImage(o,u.x,u.y),c.clearRect(Qe.x,Qe.y,o.width,o.height),r.gifData.globalColorTable.length?c.putImageData(r.gifData.backgroundImage,u.x,u.y):c.putImageData(r.gifData.frames[Co].image,u.x+d.left,u.y+d.top);break;case ut.RestorePrevious:{const h=c.getImageData(Qe.x,Qe.y,o.width,o.height);c.drawImage(d.bitmap,d.left,d.top),e.drawImage(o,u.x,u.y),c.clearRect(Qe.x,Qe.y,o.width,o.height),c.putImageData(h,Qe.x,Qe.y)}break}if(i.gifTime+=s.value,i.gifTime>d.delayTime){if(i.gifTime-=d.delayTime,++l>=r.gifData.frames.length){if(--i.gifLoopCount<=Vs)return;l=Co,c.clearRect(Qe.x,Qe.y,o.width,o.height)}i.gifFrame=l}e.scale(r.gifData.width/n,r.gifData.height/n)}}async function ef(t){if(t.type!=="gif"){await Hi(t);return}t.loading=!0;try{t.gifData=await Xh(t.source),t.gifLoopCount=Kh(t.gifData)??Vs,t.gifLoopCount||(t.gifLoopCount=1/0)}catch{t.error=!0}t.loading=!1}const tf=2,nf=1,sf=12,rf=1;class of{constructor(e){this.validTypes=["image","images"],this.loadImageShape=async n=>{if(!this._engine.loadImage)throw new Error(`${at} image shape not initialized`);await this._engine.loadImage({gif:n.gif,name:n.name,replaceColor:n.replaceColor??!1,src:n.src})},this._engine=e}addImage(e){this._engine.images||(this._engine.images=[]),this._engine.images.push(e)}draw(e){const{context:n,radius:i,particle:s,opacity:r}=e,o=s.image,c=o?.element;if(o){if(n.globalAlpha=r,o.gif&&o.gifData)Zh(e);else if(c){const l=o.ratio,u={x:-i,y:-i},d=i*tf;n.drawImage(c,u.x,u.y,d,d/l)}n.globalAlpha=nf}}getSidesCount(){return sf}async init(e){const n=e.actualOptions;if(!(!n.preload||!this._engine.loadImage))for(const i of n.preload)await this._engine.loadImage(i)}loadShape(e){if(e.shape!=="image"&&e.shape!=="images")return;this._engine.images||(this._engine.images=[]);const n=e.shapeData;if(!n)return;this._engine.images.find(s=>s.name===n.name||s.source===n.src)||this.loadImageShape(n).then(()=>{this.loadShape(e)})}particleInit(e,n){if(n.shape!=="image"&&n.shape!=="images")return;this._engine.images||(this._engine.images=[]);const i=this._engine.images,s=n.shapeData;if(!s)return;const r=n.getFillColor(),o=i.find(l=>l.name===s.name||l.source===s.src);if(!o)return;const c=s.replaceColor??o.replaceColor;if(o.loading){setTimeout(()=>{this.particleInit(e,n)});return}(async()=>{let l;o.svgData&&r?l=await Uh(o,s,r,n):l={color:r,data:o,element:o.element,gif:o.gif,gifData:o.gifData,gifLoopCount:o.gifLoopCount,loaded:!0,ratio:s.width&&s.height?s.width/s.height:o.ratio??rf,replaceColor:c,source:s.src},l.ratio||(l.ratio=1);const u=s.fill??n.shapeFill,d=s.close??n.shapeClose,h={image:l,fill:u,close:d};n.image=h.image,n.shapeFill=h.fill,n.shapeClose=h.close})()}}class af{constructor(){this.src="",this.gif=!1}load(e){z(e)||(e.gif!==void 0&&(this.gif=e.gif),e.height!==void 0&&(this.height=e.height),e.name!==void 0&&(this.name=e.name),e.replaceColor!==void 0&&(this.replaceColor=e.replaceColor),e.src!==void 0&&(this.src=e.src),e.width!==void 0&&(this.width=e.width))}}class cf{constructor(e){this.id="imagePreloader",this._engine=e}async getPlugin(){return await Promise.resolve(),{}}loadOptions(e,n){if(!n?.preload)return;e.preload||(e.preload=[]);const i=e.preload;for(const s of n.preload){const r=i.find(o=>o.name===s.name||o.src===s.src);if(r)r.load(s);else{const o=new af;o.load(s),i.push(o)}}}needsPlugin(){return!0}}const lf=3;function df(t){t.loadImage||(t.loadImage=async e=>{if(!e.name&&!e.src)throw new Error(`${at} no image source provided`);if(t.images||(t.images=[]),!t.images.find(n=>n.name===e.name||n.source===e.src))try{const n={gif:e.gif??!1,name:e.name??e.src,source:e.src,type:e.src.substring(e.src.length-lf),error:!1,loading:!0,replaceColor:e.replaceColor,ratio:e.width&&e.height?e.width/e.height:void 0};t.images.push(n);let i;e.gif?i=ef:i=e.replaceColor?Vh:Hi,await i(n)}catch{throw new Error(`${at} ${e.name??e.src} not found`)}})}async function uf(t,e=!0){t.checkVersion("3.9.1"),df(t);const n=new cf(t);await t.addPlugin(n,e),await t.addShape(new of(t),e)}class hf extends mn{constructor(){super(),this.sync=!1}load(e){z(e)||(super.load(e),e.sync!==void 0&&(this.sync=e.sync))}}class ff extends mn{constructor(){super(),this.sync=!1}load(e){z(e)||(super.load(e),e.sync!==void 0&&(this.sync=e.sync))}}class pf{constructor(){this.count=0,this.delay=new hf,this.duration=new ff}load(e){z(e)||(e.count!==void 0&&(this.count=e.count),this.delay.load(e.delay),this.duration.load(e.duration))}}const kn=0,xf=-1,Eo=0,jo=0;function gf(t,e,n){if(!t.life)return;const i=t.life;let s=!1;if(t.spawning)if(i.delayTime+=e.value,i.delayTime>=t.life.delay)s=!0,t.spawning=!1,i.delayTime=kn,i.time=kn;else return;if(i.duration===xf||t.spawning||(s?i.time=kn:i.time+=e.value,i.time<i.duration))return;if(i.time=kn,t.life.count>Eo&&t.life.count--,t.life.count===Eo){t.destroy();return}const r=ye(jo,n.width),o=ye(jo,n.width);t.position.x=tt(r),t.position.y=tt(o),t.spawning=!0,i.delayTime=kn,i.time=kn,t.reset();const c=t.options.life;c&&(i.delay=Y(c.delay.value)*Ge,i.duration=Y(c.duration.value)*Ge)}const Kt=0,Do=1,Ao=-1;class mf{constructor(e){this.container=e}init(e){const n=this.container,i=e.options,s=i.life;s&&(e.life={delay:n.retina.reduceFactor?Y(s.delay.value)*(s.delay.sync?Do:we())/n.retina.reduceFactor*Ge:Kt,delayTime:Kt,duration:n.retina.reduceFactor?Y(s.duration.value)*(s.duration.sync?Do:we())/n.retina.reduceFactor*Ge:Kt,time:Kt,count:s.count},e.life.duration<=Kt&&(e.life.duration=Ao),e.life.count<=Kt&&(e.life.count=Ao),e.life&&(e.spawning=e.life.delay>Kt))}isEnabled(e){return!e.destroyed}loadOptions(e,...n){e.life||(e.life=new pf);for(const i of n)e.life.load(i?.life)}update(e,n){!this.isEnabled(e)||!e.life||gf(e,n,this.container.canvas.size)}}async function yf(t,e=!0){t.checkVersion("3.9.1"),await t.addParticleUpdater("life",async n=>Promise.resolve(new mf(n)),e)}function bf(t){const{context:e,particle:n,radius:i}=t,s=n.shapeData,r=0;e.moveTo(-i,r),e.lineTo(i,r),e.lineCap=s?.cap??"butt"}const vf=1;class kf{constructor(){this.validTypes=["line"]}draw(e){bf(e)}getSidesCount(){return vf}}async function wf(t,e=!0){t.checkVersion("3.9.1"),await t.addShape(new kf,e)}const Oo=.5;class Sf{init(){}isEnabled(e){return!xn()&&!e.destroyed&&e.container.actualOptions.interactivity.events.onHover.parallax.enable}move(e){const n=e.container,i=n.actualOptions,s=i.interactivity.events.onHover.parallax;if(xn()||!s.enable)return;const r=s.force,o=n.interactivity.mouse.position;if(!o)return;const c=n.canvas.size,l={x:c.width*Oo,y:c.height*Oo},u=s.smooth,d=e.getRadius()/r,h={x:(o.x-l.x)*d,y:(o.y-l.y)*d},{offset:f}=e;f.x+=(h.x-f.x)/u,f.y+=(h.y-f.y)/u}}async function Cf(t,e=!0){t.checkVersion("3.9.1"),await t.addMover("parallax",()=>Promise.resolve(new Sf),e)}const _o=1e3,Ef=1;class jf extends br{constructor(e){super(e)}clear(){}init(){}interact(e){const n=this.container;e.attractDistance===void 0&&(e.attractDistance=Y(e.options.move.attract.distance)*n.retina.pixelRatio);const i=e.attractDistance,s=e.getPosition(),r=n.particles.quadTree.queryCircle(s,i);for(const o of r){if(e===o||!o.options.move.attract.enable||o.destroyed||o.spawning)continue;const c=o.getPosition(),{dx:l,dy:u}=Ye(s,c),d=e.options.move.attract.rotate,h=l/(d.x*_o),f=u/(d.y*_o),p=o.size.value/e.size.value,x=Ef/p;e.velocity.x-=h*p,e.velocity.y-=f*p,o.velocity.x+=h*x,o.velocity.y+=f*x}}isEnabled(e){return e.options.move.attract.enable}reset(){}}async function Df(t,e=!0){t.checkVersion("3.9.1"),await t.addInteractor("particlesAttract",n=>Promise.resolve(new jf(n)),e)}const Af=.5,Of=10,_f=0;function Po(t,e,n,i,s,r){const o=ct(t.options.collisions.absorb.speed*s.factor/Of,_f,i);t.size.value+=o*Af,n.size.value-=o,i<=r&&(n.size.value=0,n.destroy())}function Pf(t,e,n,i){const s=t.getRadius(),r=e.getRadius();s===void 0&&r!==void 0?t.destroy():s!==void 0&&r===void 0?e.destroy():s!==void 0&&r!==void 0&&(s>=r?Po(t,s,e,r,n,i):Po(e,r,t,s,n,i))}const To=t=>{t.collisionMaxSpeed===void 0&&(t.collisionMaxSpeed=Y(t.options.collisions.maxSpeed)),t.velocity.length>t.collisionMaxSpeed&&(t.velocity.length=t.collisionMaxSpeed)};function j0(t,e){i0(Ns(t),Ns(e)),To(t),To(e)}function Tf(t,e){!t.unbreakable&&!e.unbreakable&&j0(t,e),t.getRadius()===void 0&&e.getRadius()!==void 0?t.destroy():t.getRadius()!==void 0&&e.getRadius()===void 0?e.destroy():t.getRadius()!==void 0&&e.getRadius()!==void 0&&(t.getRadius()>=e.getRadius()?e:t).destroy()}function If(t,e,n,i){switch(t.options.collisions.mode){case Tn.absorb:{Pf(t,e,n,i);break}case Tn.bounce:{j0(t,e);break}case Tn.destroy:{Tf(t,e);break}}}const Rf=2;class Mf extends br{constructor(e){super(e)}clear(){}init(){}interact(e,n){if(e.destroyed||e.spawning)return;const i=this.container,s=e.getPosition(),r=e.getRadius(),o=i.particles.quadTree.queryCircle(s,r*Rf);for(const c of o){if(e===c||!c.options.collisions.enable||e.options.collisions.mode!==c.options.collisions.mode||c.destroyed||c.spawning)continue;const l=c.getPosition(),u=c.getRadius();if(Math.abs(Math.round(s.z)-Math.round(l.z))>r+u)continue;const d=nt(s,l),h=r+u;d>h||If(e,c,n,i.retina.pixelRatio)}}isEnabled(e){return e.options.collisions.enable}reset(){}}async function Bf(t,e=!0){t.checkVersion("3.9.1"),await t.addInteractor("particlesCollisions",n=>Promise.resolve(new Mf(n)),e)}const ls=2;class Lf extends Ue{constructor(e,n,i,s){super(e,n,i),this.canvasSize=s,this.canvasSize={...s}}contains(e){const{width:n,height:i}=this.canvasSize,{x:s,y:r}=e;return super.contains(e)||super.contains({x:s-n,y:r})||super.contains({x:s-n,y:r-i})||super.contains({x:s,y:r-i})}intersects(e){if(super.intersects(e))return!0;const n=e,i=e,s={x:e.position.x-this.canvasSize.width,y:e.position.y-this.canvasSize.height};if(i.radius!==void 0){const r=new Ue(s.x,s.y,i.radius*ls);return super.intersects(r)}else if(n.size!==void 0){const r=new gt(s.x,s.y,n.size.width*ls,n.size.height*ls);return super.intersects(r)}return!1}}class zf{constructor(){this.blur=5,this.color=new We,this.color.value="#000",this.enable=!1}load(e){z(e)||(e.blur!==void 0&&(this.blur=e.blur),this.color=We.create(this.color,e.color),e.enable!==void 0&&(this.enable=e.enable))}}class Nf{constructor(){this.enable=!1,this.frequency=1}load(e){z(e)||(e.color!==void 0&&(this.color=We.create(this.color,e.color)),e.enable!==void 0&&(this.enable=e.enable),e.frequency!==void 0&&(this.frequency=e.frequency),e.opacity!==void 0&&(this.opacity=e.opacity))}}class Ff{constructor(){this.blink=!1,this.color=new We,this.color.value="#fff",this.consent=!1,this.distance=100,this.enable=!1,this.frequency=1,this.opacity=1,this.shadow=new zf,this.triangles=new Nf,this.width=1,this.warp=!1}load(e){z(e)||(e.id!==void 0&&(this.id=e.id),e.blink!==void 0&&(this.blink=e.blink),this.color=We.create(this.color,e.color),e.consent!==void 0&&(this.consent=e.consent),e.distance!==void 0&&(this.distance=e.distance),e.enable!==void 0&&(this.enable=e.enable),e.frequency!==void 0&&(this.frequency=e.frequency),e.opacity!==void 0&&(this.opacity=e.opacity),this.shadow.load(e.shadow),this.triangles.load(e.triangles),e.width!==void 0&&(this.width=e.width),e.warp!==void 0&&(this.warp=e.warp))}}const Io=2,$f=1,fi={x:0,y:0},Gf=0;function Vf(t,e,n,i,s){const{dx:r,dy:o,distance:c}=Ye(t,e);if(!s||c<=n)return c;const l={x:Math.abs(r),y:Math.abs(o)},u={x:Math.min(l.x,i.width-l.x),y:Math.min(l.y,i.height-l.y)};return Math.sqrt(u.x**Io+u.y**Io)}class Uf extends br{constructor(e,n){super(e),this._setColor=i=>{if(!i.options.links)return;const s=this._linkContainer,r=i.options.links;let o=r.id===void 0?s.particles.linksColor:s.particles.linksColors.get(r.id);if(o)return;const c=r.color;o=d0(this._engine,c,r.blink,r.consent),r.id===void 0?s.particles.linksColor=o:s.particles.linksColors.set(r.id,o)},this._linkContainer=e,this._engine=n}clear(){}init(){this._linkContainer.particles.linksColor=void 0,this._linkContainer.particles.linksColors=new Map}interact(e){if(!e.options.links)return;e.links=[];const n=e.getPosition(),i=this.container,s=i.canvas.size;if(n.x<fi.x||n.y<fi.y||n.x>s.width||n.y>s.height)return;const r=e.options.links,o=r.opacity,c=e.retina.linksDistance??Gf,l=r.warp;let u;l?u=new Lf(n.x,n.y,c,s):u=new Ue(n.x,n.y,c);const d=i.particles.quadTree.query(u);for(const h of d){const f=h.options.links;if(e===h||!f?.enable||r.id!==f.id||h.spawning||h.destroyed||!h.links||e.links.some(g=>g.destination===h)||h.links.some(g=>g.destination===e))continue;const p=h.getPosition();if(p.x<fi.x||p.y<fi.y||p.x>s.width||p.y>s.height)continue;const x=Vf(n,p,c,s,l&&f.warp);if(x>c)continue;const y=($f-x/c)*o;this._setColor(e),e.links.push({destination:h,opacity:y})}}isEnabled(e){return!!e.options.links?.enable}loadParticlesOptions(e,...n){e.links||(e.links=new Ff);for(const i of n)e.links.load(i?.links)}reset(){}}async function Hf(t,e=!0){await t.addInteractor("particlesLinks",async n=>Promise.resolve(new Uf(n,t)),e)}function Wf(t,e,n,i){t.beginPath(),t.moveTo(e.x,e.y),t.lineTo(n.x,n.y),t.lineTo(i.x,i.y),t.closePath()}function qf(t){let e=!1;const{begin:n,end:i,engine:s,maxDistance:r,context:o,canvasSize:c,width:l,backgroundMask:u,colorLine:d,opacity:h,links:f}=t;if(nt(n,i)<=r)Kn(o,n,i),e=!0;else if(f.warp){let x,y;const g={x:i.x-c.width,y:i.y},m=Ye(n,g);if(m.distance<=r){const v=n.y-m.dy/m.dx*n.x;x={x:0,y:v},y={x:c.width,y:v}}else{const v={x:i.x,y:i.y-c.height},S=Ye(n,v);if(S.distance<=r){const _=-(n.y-S.dy/S.dx*n.x)/(S.dy/S.dx);x={x:_,y:0},y={x:_,y:c.height}}else{const j={x:i.x-c.width,y:i.y-c.height},_=Ye(n,j);if(_.distance<=r){const I=n.y-_.dy/_.dx*n.x;x={x:-I/(_.dy/_.dx),y:I},y={x:x.x+c.width,y:x.y+c.height}}}}x&&y&&(Kn(o,n,x),Kn(o,i,y),e=!0)}if(!e)return;o.lineWidth=l,u.enable&&(o.globalCompositeOperation=u.composite),o.strokeStyle=Tt(d,h);const{shadow:p}=f;if(p.enable){const x=pt(s,p.color);x&&(o.shadowBlur=p.blur,o.shadowColor=Tt(x))}o.stroke()}function Yf(t){const{context:e,pos1:n,pos2:i,pos3:s,backgroundMask:r,colorTriangle:o,opacityTriangle:c}=t;Wf(e,n,i,s),r.enable&&(e.globalCompositeOperation=r.composite),e.fillStyle=Tt(o,c),e.fill()}function Jf(t){return t.sort((e,n)=>e-n),t.join("_")}function Ro(t,e){const n=Jf(t.map(s=>s.id));let i=e.get(n);return i===void 0&&(i=we(),e.set(n,i)),i}const Mo=0,ds=0,Bo=0,Qf=.5,Kf=1;class Xf{constructor(e,n){this._drawLinkLine=(i,s)=>{const r=i.options.links;if(!r?.enable)return;const o=this._container,c=o.actualOptions,l=s.destination,u=i.getPosition(),d=l.getPosition();let h=s.opacity;o.canvas.draw(f=>{let p;const x=i.options.twinkle?.lines;if(x?.enable){const v=x.frequency,S=pt(this._engine,x.color);we()<v&&S&&(p=S,h=Y(x.opacity))}if(!p){const v=r.id!==void 0?o.particles.linksColors.get(r.id):o.particles.linksColor;p=$s(i,l,v)}if(!p)return;const y=i.retina.linksWidth??ds,g=i.retina.linksDistance??Bo,{backgroundMask:m}=c;qf({context:f,width:y,begin:u,end:d,engine:this._engine,maxDistance:g,canvasSize:o.canvas.size,links:r,backgroundMask:m,colorLine:p,opacity:h})})},this._drawLinkTriangle=(i,s,r)=>{const o=i.options.links;if(!o?.enable)return;const c=o.triangles;if(!c.enable)return;const l=this._container,u=l.actualOptions,d=s.destination,h=r.destination,f=c.opacity??(s.opacity+r.opacity)*Qf;f<=Mo||l.canvas.draw(p=>{const x=i.getPosition(),y=d.getPosition(),g=h.getPosition(),m=i.retina.linksDistance??Bo;if(nt(x,y)>m||nt(g,y)>m||nt(g,x)>m)return;let v=pt(this._engine,c.color);if(!v){const S=o.id!==void 0?l.particles.linksColors.get(o.id):l.particles.linksColor;v=$s(i,d,S)}v&&Yf({context:p,pos1:x,pos2:y,pos3:g,backgroundMask:u.backgroundMask,colorTriangle:v,opacityTriangle:f})})},this._drawTriangles=(i,s,r,o)=>{const c=r.destination;if(!(i.links?.triangles.enable&&c.options.links?.triangles.enable))return;const l=c.links?.filter(u=>{const d=this._getLinkFrequency(c,u.destination);return c.options.links&&d<=c.options.links.frequency&&o.findIndex(f=>f.destination===u.destination)>=0});if(l?.length)for(const u of l){const d=u.destination;this._getTriangleFrequency(s,c,d)>i.links.triangles.frequency||this._drawLinkTriangle(s,r,u)}},this._getLinkFrequency=(i,s)=>Ro([i,s],this._freqs.links),this._getTriangleFrequency=(i,s,r)=>Ro([i,s,r],this._freqs.triangles),this._container=e,this._engine=n,this._freqs={links:new Map,triangles:new Map}}drawParticle(e,n){const{links:i,options:s}=n;if(!i?.length)return;const r=i.filter(o=>s.links&&(s.links.frequency>=Kf||this._getLinkFrequency(n,o.destination)<=s.links.frequency));for(const o of r)this._drawTriangles(s,n,o,r),o.opacity>Mo&&(n.retina.linksWidth??ds)>ds&&this._drawLinkLine(n,o)}async init(){this._freqs.links=new Map,this._freqs.triangles=new Map,await Promise.resolve()}particleCreated(e){if(e.links=[],!e.options.links)return;const n=this._container.retina.pixelRatio,{retina:i}=e,{distance:s,width:r}=e.options.links;i.linksDistance=s*n,i.linksWidth=r*n}particleDestroyed(e){e.links=[]}}class Zf{constructor(e){this.id="links",this._engine=e}getPlugin(e){return Promise.resolve(new Xf(e,this._engine))}loadOptions(){}needsPlugin(){return!0}}async function ep(t,e=!0){const n=new Zf(t);await t.addPlugin(n,e)}async function tp(t,e=!0){t.checkVersion("3.9.1"),await Hf(t,e),await ep(t,e)}const np=180,pi={x:0,y:0},ip=2;function sp(t,e,n){const{context:i}=t,s=n.count.numerator*n.count.denominator,r=n.count.numerator/n.count.denominator,o=np*(r-ip)/r,c=Math.PI-Ft(o);if(i){i.beginPath(),i.translate(e.x,e.y),i.moveTo(pi.x,pi.y);for(let l=0;l<s;l++)i.lineTo(n.length,pi.y),i.translate(n.length,pi.y),i.rotate(c)}}const rp=5;class D0{draw(e){const{particle:n,radius:i}=e,s=this.getCenter(n,i),r=this.getSidesData(n,i);sp(e,s,r)}getSidesCount(e){const n=e.shapeData;return Math.round(Y(n?.sides??rp))}}const Lo=3.5,zo=2.66,op=3;class ap extends D0{constructor(){super(...arguments),this.validTypes=["polygon"]}getCenter(e,n){return{x:-n/(e.sides/Lo),y:-n/(zo/Lo)}}getSidesData(e,n){const i=e.sides;return{count:{denominator:1,numerator:i},length:n*zo/(i/op)}}}const cp=1.66,lp=3,dp=2;class up extends D0{constructor(){super(...arguments),this.validTypes=["triangle"]}getCenter(e,n){return{x:-n,y:n/cp}}getSidesCount(){return lp}getSidesData(e,n){const i=n*dp;return{count:{denominator:2,numerator:3},length:i}}}async function hp(t,e=!0){t.checkVersion("3.9.1"),await t.addShape(new ap,e)}async function fp(t,e=!0){t.checkVersion("3.9.1"),await t.addShape(new up,e)}async function pp(t,e=!0){t.checkVersion("3.9.1"),await hp(t,e),await fp(t,e)}class xp{constructor(){this.enable=!1,this.speed=0,this.decay=0,this.sync=!1}load(e){z(e)||(e.enable!==void 0&&(this.enable=e.enable),e.speed!==void 0&&(this.speed=ye(e.speed)),e.decay!==void 0&&(this.decay=ye(e.decay)),e.sync!==void 0&&(this.sync=e.sync))}}class gp extends mn{constructor(){super(),this.animation=new xp,this.direction=ht.clockwise,this.path=!1,this.value=0}load(e){z(e)||(super.load(e),e.direction!==void 0&&(this.direction=e.direction),this.animation.load(e.animation),e.path!==void 0&&(this.path=e.path))}}const A0=2,mp=Math.PI*A0,yp=1,bp=360;class vp{constructor(e){this.container=e}init(e){const n=e.options.rotate;if(!n)return;e.rotate={enable:n.animation.enable,value:Ft(Y(n.value)),min:0,max:mp},e.pathRotation=n.path;let i=n.direction;switch(i===ht.random&&(i=Math.floor(we()*A0)>0?ht.counterClockwise:ht.clockwise),i){case ht.counterClockwise:case"counterClockwise":e.rotate.status=Te.decreasing;break;case ht.clockwise:e.rotate.status=Te.increasing;break}const s=n.animation;s.enable&&(e.rotate.decay=yp-Y(s.decay),e.rotate.velocity=Y(s.speed)/bp*this.container.retina.reduceFactor,s.sync||(e.rotate.velocity*=we())),e.rotation=e.rotate.value}isEnabled(e){const n=e.options.rotate;return n?!e.destroyed&&!e.spawning&&(!!n.value||n.animation.enable||n.path):!1}loadOptions(e,...n){e.rotate||(e.rotate=new gp);for(const i of n)e.rotate.load(i?.rotate)}update(e,n){this.isEnabled(e)&&(e.isRotating=!!e.rotate,e.rotate&&(xr(e,e.rotate,!1,fn.none,n),e.rotation=e.rotate.value))}}async function kp(t,e=!0){t.checkVersion("3.9.1"),await t.addParticleUpdater("rotate",n=>Promise.resolve(new vp(n)),e)}const wp=2,Sp=Math.sqrt(wp),Cp=2;function Ep(t){const{context:e,radius:n}=t,i=n/Sp,s=i*Cp;e.rect(-i,-i,s,s)}const jp=4;class Dp{constructor(){this.validTypes=["edge","square"]}draw(e){Ep(e)}getSidesCount(){return jp}}async function Ap(t,e=!0){t.checkVersion("3.9.1"),await t.addShape(new Dp,e)}const Op=2,wn={x:0,y:0};function _p(t){const{context:e,particle:n,radius:i}=t,s=n.sides,r=n.starInset??Op;e.moveTo(wn.x,wn.y-i);for(let o=0;o<s;o++)e.rotate(Math.PI/s),e.lineTo(wn.x,wn.y-i*r),e.rotate(Math.PI/s),e.lineTo(wn.x,wn.y-i)}const Pp=2,Tp=5;class Ip{constructor(){this.validTypes=["star"]}draw(e){_p(e)}getSidesCount(e){const n=e.shapeData;return Math.round(Y(n?.sides??Tp))}particleInit(e,n){const i=n.shapeData;n.starInset=Y(i?.inset??Pp)}}async function Rp(t,e=!0){t.checkVersion("3.9.1"),await t.addShape(new Ip,e)}const Mp=1;class Bp{constructor(e,n){this._container=e,this._engine=n}init(e){const n=this._container,i=e.options,s=ot(i.stroke,e.id,i.reduceDuplicates);e.strokeWidth=Y(s.width)*n.retina.pixelRatio,e.strokeOpacity=Y(s.opacity??Mp),e.strokeAnimation=s.color?.animation;const r=Zn(this._engine,s.color)??e.getFillColor();r&&(e.strokeColor=u0(r,e.strokeAnimation,n.retina.reduceFactor))}isEnabled(e){const n=e.strokeAnimation,{strokeColor:i}=e;return!e.destroyed&&!e.spawning&&!!n&&(i?.h.value!==void 0&&i.h.enable||i?.s.value!==void 0&&i.s.enable||i?.l.value!==void 0&&i.l.enable)}update(e,n){this.isEnabled(e)&&h0(e.strokeColor,n)}}async function Lp(t,e=!0){t.checkVersion("3.9.1"),await t.addParticleUpdater("strokeColor",n=>Promise.resolve(new Bp(n,t)),e)}async function zp(t,e=!0){t.checkVersion("3.9.1"),await Cf(t,!1),await D1(t,!1),await B1(t,!1),await U1(t,!1),await eh(t,!1),await dh(t,!1),await fh(t,!1),await yh(t,!1),await wh(t,!1),await Ih(t,!1),await zh(t,!1),await Df(t,!1),await Bf(t,!1),await tp(t,!1),await m1(t,!1),await v1(t,!1),await uf(t,!1),await wf(t,!1),await pp(t,!1),await Ap(t,!1),await Rp(t,!1),await yf(t,!1),await kp(t,!1),await Lp(t,!1),await g1(t,e)}function Wi({route:t}){const e=Vt(),n=be(s=>s.playButtonClickSfx);function i(){n(),t?e(t):window.history.back()}return a.jsx(Np,{className:"button",onClick:i,children:"back➤"})}const Np=k.button`
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
`,No={500:"#3f51b5"};function Fp(t,e,n,i,s){const[r,o]=w.useState(()=>s&&n?n(t).matches:i?i(t).matches:e);return K0(()=>{if(!n)return;const c=n(t),l=()=>{o(c.matches)};return l(),c.addEventListener("change",l),()=>{c.removeEventListener("change",l)}},[t,n]),r}const $p={...Q0},O0=$p.useSyncExternalStore;function Gp(t,e,n,i,s){const r=w.useCallback(()=>e,[e]),o=w.useMemo(()=>{if(s&&n)return()=>n(t).matches;if(i!==null){const{matches:d}=i(t);return()=>d}return r},[r,t,i,s,n]),[c,l]=w.useMemo(()=>{if(n===null)return[r,()=>()=>{}];const d=n(t);return[()=>d.matches,h=>(d.addEventListener("change",h),()=>{d.removeEventListener("change",h)})]},[r,n,t]);return O0(l,c,o)}function _0(t={}){const{themeId:e}=t;return function(i,s={}){let r=Y0();r&&e&&(r=r[e]||r);const o=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:c=!1,matchMedia:l=o?window.matchMedia:null,ssrMatchMedia:u=null,noSsr:d=!1}=J0({name:"MuiUseMediaQuery",props:s,theme:r});let h=typeof i=="function"?i(r):i;return h=h.replace(/^@media( ?)/m,""),h.includes("print")&&console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.","Using the print media query to modify print styles can lead to unexpected results.","Consider using the `displayPrint` field in the `sx` prop instead.","More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`)),(O0!==void 0?Gp:Fp)(h,c,l,u,d)}}_0();const Vp=De(a.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}));function Up(t){return Li("MuiChip",t)}const ae=Bi("MuiChip",["root","sizeSmall","sizeMedium","colorDefault","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),Hp=t=>{const{classes:e,disabled:n,size:i,color:s,iconColor:r,onDelete:o,clickable:c,variant:l}=t,u={root:["root",l,n&&"disabled",`size${he(i)}`,`color${he(s)}`,c&&"clickable",c&&`clickableColor${he(s)}`,o&&"deletable",o&&`deletableColor${he(s)}`,`${l}${he(s)}`],label:["label",`label${he(i)}`],avatar:["avatar",`avatar${he(i)}`,`avatarColor${he(s)}`],icon:["icon",`icon${he(i)}`,`iconColor${he(r)}`],deleteIcon:["deleteIcon",`deleteIcon${he(i)}`,`deleteIconColor${he(s)}`,`deleteIcon${he(l)}Color${he(s)}`]};return zi(u,Up,e)},Wp=Ut("div",{name:"MuiChip",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t,{color:i,iconColor:s,clickable:r,onDelete:o,size:c,variant:l}=n;return[{[`& .${ae.avatar}`]:e.avatar},{[`& .${ae.avatar}`]:e[`avatar${he(c)}`]},{[`& .${ae.avatar}`]:e[`avatarColor${he(i)}`]},{[`& .${ae.icon}`]:e.icon},{[`& .${ae.icon}`]:e[`icon${he(c)}`]},{[`& .${ae.icon}`]:e[`iconColor${he(s)}`]},{[`& .${ae.deleteIcon}`]:e.deleteIcon},{[`& .${ae.deleteIcon}`]:e[`deleteIcon${he(c)}`]},{[`& .${ae.deleteIcon}`]:e[`deleteIconColor${he(i)}`]},{[`& .${ae.deleteIcon}`]:e[`deleteIcon${he(l)}Color${he(i)}`]},e.root,e[`size${he(c)}`],e[`color${he(i)}`],r&&e.clickable,r&&i!=="default"&&e[`clickableColor${he(i)})`],o&&e.deletable,o&&i!=="default"&&e[`deletableColor${he(i)}`],e[l],e[`${l}${he(i)}`]]}})(Ni(({theme:t})=>{const e=t.palette.mode==="light"?t.palette.grey[700]:t.palette.grey[300];return{maxWidth:"100%",fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,lineHeight:1.5,color:(t.vars||t).palette.text.primary,backgroundColor:(t.vars||t).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:t.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${ae.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${ae.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:t.vars?t.vars.palette.Chip.defaultAvatarColor:e,fontSize:t.typography.pxToRem(12)},[`& .${ae.avatarColorPrimary}`]:{color:(t.vars||t).palette.primary.contrastText,backgroundColor:(t.vars||t).palette.primary.dark},[`& .${ae.avatarColorSecondary}`]:{color:(t.vars||t).palette.secondary.contrastText,backgroundColor:(t.vars||t).palette.secondary.dark},[`& .${ae.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:t.typography.pxToRem(10)},[`& .${ae.icon}`]:{marginLeft:5,marginRight:-6},[`& .${ae.deleteIcon}`]:{WebkitTapHighlightColor:"transparent",color:t.alpha((t.vars||t).palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:t.alpha((t.vars||t).palette.text.primary,.4)}},variants:[{props:{size:"small"},style:{height:24,[`& .${ae.icon}`]:{fontSize:18,marginLeft:4,marginRight:-4},[`& .${ae.deleteIcon}`]:{fontSize:16,marginRight:4,marginLeft:-4}}},...Object.entries(t.palette).filter(En(["contrastText"])).map(([n])=>({props:{color:n},style:{backgroundColor:(t.vars||t).palette[n].main,color:(t.vars||t).palette[n].contrastText,[`& .${ae.deleteIcon}`]:{color:t.alpha((t.vars||t).palette[n].contrastText,.7),"&:hover, &:active":{color:(t.vars||t).palette[n].contrastText}}}})),{props:n=>n.iconColor===n.color,style:{[`& .${ae.icon}`]:{color:t.vars?t.vars.palette.Chip.defaultIconColor:e}}},{props:n=>n.iconColor===n.color&&n.color!=="default",style:{[`& .${ae.icon}`]:{color:"inherit"}}},{props:{onDelete:!0},style:{[`&.${ae.focusVisible}`]:{backgroundColor:t.alpha((t.vars||t).palette.action.selected,`${(t.vars||t).palette.action.selectedOpacity} + ${(t.vars||t).palette.action.focusOpacity}`)}}},...Object.entries(t.palette).filter(En(["dark"])).map(([n])=>({props:{color:n,onDelete:!0},style:{[`&.${ae.focusVisible}`]:{background:(t.vars||t).palette[n].dark}}})),{props:{clickable:!0},style:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:t.alpha((t.vars||t).palette.action.selected,`${(t.vars||t).palette.action.selectedOpacity} + ${(t.vars||t).palette.action.hoverOpacity}`)},[`&.${ae.focusVisible}`]:{backgroundColor:t.alpha((t.vars||t).palette.action.selected,`${(t.vars||t).palette.action.selectedOpacity} + ${(t.vars||t).palette.action.focusOpacity}`)},"&:active":{boxShadow:(t.vars||t).shadows[1]}}},...Object.entries(t.palette).filter(En(["dark"])).map(([n])=>({props:{color:n,clickable:!0},style:{[`&:hover, &.${ae.focusVisible}`]:{backgroundColor:(t.vars||t).palette[n].dark}}})),{props:{variant:"outlined"},style:{backgroundColor:"transparent",border:t.vars?`1px solid ${t.vars.palette.Chip.defaultBorder}`:`1px solid ${t.palette.mode==="light"?t.palette.grey[400]:t.palette.grey[700]}`,[`&.${ae.clickable}:hover`]:{backgroundColor:(t.vars||t).palette.action.hover},[`&.${ae.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`& .${ae.avatar}`]:{marginLeft:4},[`& .${ae.avatarSmall}`]:{marginLeft:2},[`& .${ae.icon}`]:{marginLeft:4},[`& .${ae.iconSmall}`]:{marginLeft:2},[`& .${ae.deleteIcon}`]:{marginRight:5},[`& .${ae.deleteIconSmall}`]:{marginRight:3}}},...Object.entries(t.palette).filter(En()).map(([n])=>({props:{variant:"outlined",color:n},style:{color:(t.vars||t).palette[n].main,border:`1px solid ${t.alpha((t.vars||t).palette[n].main,.7)}`,[`&.${ae.clickable}:hover`]:{backgroundColor:t.alpha((t.vars||t).palette[n].main,(t.vars||t).palette.action.hoverOpacity)},[`&.${ae.focusVisible}`]:{backgroundColor:t.alpha((t.vars||t).palette[n].main,(t.vars||t).palette.action.focusOpacity)},[`& .${ae.deleteIcon}`]:{color:t.alpha((t.vars||t).palette[n].main,.7),"&:hover, &:active":{color:(t.vars||t).palette[n].main}}}}))]}})),qp=Ut("span",{name:"MuiChip",slot:"Label",overridesResolver:(t,e)=>{const{ownerState:n}=t,{size:i}=n;return[e.label,e[`label${he(i)}`]]}})({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap",variants:[{props:{variant:"outlined"},style:{paddingLeft:11,paddingRight:11}},{props:{size:"small"},style:{paddingLeft:8,paddingRight:8}},{props:{size:"small",variant:"outlined"},style:{paddingLeft:7,paddingRight:7}}]});function Fo(t){return t.key==="Backspace"||t.key==="Delete"}const P0=w.forwardRef(function(e,n){const i=Zs({props:e,name:"MuiChip"}),{avatar:s,className:r,clickable:o,color:c="default",component:l,deleteIcon:u,disabled:d=!1,icon:h,label:f,onClick:p,onDelete:x,onKeyDown:y,onKeyUp:g,size:m="medium",variant:v="filled",tabIndex:S,skipFocusWhenDisabled:j=!1,slots:_={},slotProps:I={},...L}=i,H=w.useRef(null),$=X0(H,n),X=K=>{K.stopPropagation(),x&&x(K)},W=K=>{K.currentTarget===K.target&&Fo(K)&&K.preventDefault(),y&&y(K)},ne=K=>{K.currentTarget===K.target&&x&&Fo(K)&&x(K),g&&g(K)},ie=o!==!1&&p?!0:o,Q=ie||x?Ps:l||"div",ee={...i,component:Q,disabled:d,size:m,color:c,iconColor:w.isValidElement(h)&&h.props.color||c,onDelete:!!x,clickable:ie,variant:v},Z=Hp(ee),ge=Q===Ps?{component:l||"div",focusVisibleClassName:Z.focusVisible,...x&&{disableRipple:!0}}:{};let ke=null;x&&(ke=u&&w.isValidElement(u)?w.cloneElement(u,{className:sn(u.props.className,Z.deleteIcon),onClick:X}):a.jsx(Vp,{className:Z.deleteIcon,onClick:X}));let se=null;s&&w.isValidElement(s)&&(se=w.cloneElement(s,{className:sn(Z.avatar,s.props.className)}));let N=null;h&&w.isValidElement(h)&&(N=w.cloneElement(h,{className:sn(Z.icon,h.props.className)}));const R={slots:_,slotProps:I},[re,ve]=Mn("root",{elementType:Wp,externalForwardedProps:{...R,...L},ownerState:ee,shouldForwardComponentProp:!0,ref:$,className:sn(Z.root,r),additionalProps:{disabled:ie&&d?!0:void 0,tabIndex:j&&d?-1:S,...ge},getSlotProps:K=>({...K,onClick:me=>{K.onClick?.(me),p?.(me)},onKeyDown:me=>{K.onKeyDown?.(me),W(me)},onKeyUp:me=>{K.onKeyUp?.(me),ne(me)}})}),[Se,oe]=Mn("label",{elementType:qp,externalForwardedProps:R,ownerState:ee,className:Z.label});return a.jsxs(re,{as:Q,...ve,children:[se||N,a.jsx(Se,{...oe,children:f}),ke]})});function Yp(t){return Li("PrivateSwitchBase",t)}Bi("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Jp=t=>{const{classes:e,checked:n,disabled:i,edge:s}=t,r={root:["root",n&&"checked",i&&"disabled",s&&`edge${he(s)}`],input:["input"]};return zi(r,Yp,e)},Qp=Ut(Ps,{name:"MuiSwitchBase"})({padding:9,borderRadius:"50%",variants:[{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:({edge:t,ownerState:e})=>t==="start"&&e.size!=="small",style:{marginLeft:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}},{props:({edge:t,ownerState:e})=>t==="end"&&e.size!=="small",style:{marginRight:-12}}]}),Kp=Ut("input",{name:"MuiSwitchBase",shouldForwardProp:va})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Xp=w.forwardRef(function(e,n){const{autoFocus:i,checked:s,checkedIcon:r,defaultChecked:o,disabled:c,disableFocusRipple:l=!1,edge:u=!1,icon:d,id:h,inputProps:f,inputRef:p,name:x,onBlur:y,onChange:g,onFocus:m,readOnly:v,required:S=!1,tabIndex:j,type:_,value:I,slots:L={},slotProps:H={},...$}=e,[X,W]=Z0({controlled:s,default:!!o,name:"SwitchBase",state:"checked"}),ne=ba(),ie=oe=>{m&&m(oe),ne&&ne.onFocus&&ne.onFocus(oe)},Q=oe=>{y&&y(oe),ne&&ne.onBlur&&ne.onBlur(oe)},ee=oe=>{if(oe.nativeEvent.defaultPrevented)return;const K=oe.target.checked;W(K),g&&g(oe,K)};let Z=c;ne&&typeof Z>"u"&&(Z=ne.disabled);const ge=_==="checkbox"||_==="radio",ke={...e,checked:X,disabled:Z,disableFocusRipple:l,edge:u},se=Jp(ke),N={slots:L,slotProps:{input:f,...H}},[R,re]=Mn("root",{ref:n,elementType:Qp,className:se.root,shouldForwardComponentProp:!0,externalForwardedProps:{...N,component:"span",...$},getSlotProps:oe=>({...oe,onFocus:K=>{oe.onFocus?.(K),ie(K)},onBlur:K=>{oe.onBlur?.(K),Q(K)}}),ownerState:ke,additionalProps:{centerRipple:!0,focusRipple:!l,disabled:Z,role:void 0,tabIndex:null}}),[ve,Se]=Mn("input",{ref:p,elementType:Kp,className:se.input,externalForwardedProps:N,getSlotProps:oe=>({...oe,onChange:K=>{oe.onChange?.(K),ee(K)}}),ownerState:ke,additionalProps:{autoFocus:i,checked:s,defaultChecked:o,disabled:Z,id:ge?h:void 0,name:x,readOnly:v,required:S,tabIndex:j,type:_,..._==="checkbox"&&I===void 0?{}:{value:I}}});return a.jsxs(R,{...re,children:[a.jsx(ve,{...Se}),X?r:d]})}),Zp=De(a.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})),ex=De(a.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})),tx=De(a.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}));function nx(t){return Li("MuiCheckbox",t)}const us=Bi("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),ix=t=>{const{classes:e,indeterminate:n,color:i,size:s}=t,r={root:["root",n&&"indeterminate",`color${he(i)}`,`size${he(s)}`]},o=zi(r,nx,e);return{...e,...o}},sx=Ut(Xp,{shouldForwardProp:t=>va(t)||t==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.indeterminate&&e.indeterminate,e[`size${he(n.size)}`],n.color!=="default"&&e[`color${he(n.color)}`]]}})(Ni(({theme:t})=>({color:(t.vars||t).palette.text.secondary,variants:[{props:{color:"default",disableRipple:!1},style:{"&:hover":{backgroundColor:t.alpha((t.vars||t).palette.action.active,(t.vars||t).palette.action.hoverOpacity)}}},...Object.entries(t.palette).filter(En()).map(([e])=>({props:{color:e,disableRipple:!1},style:{"&:hover":{backgroundColor:t.alpha((t.vars||t).palette[e].main,(t.vars||t).palette.action.hoverOpacity)}}})),...Object.entries(t.palette).filter(En()).map(([e])=>({props:{color:e},style:{[`&.${us.checked}, &.${us.indeterminate}`]:{color:(t.vars||t).palette[e].main},[`&.${us.disabled}`]:{color:(t.vars||t).palette.action.disabled}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]}))),rx=a.jsx(ex,{}),ox=a.jsx(Zp,{}),ax=a.jsx(tx,{}),Ti=w.forwardRef(function(e,n){const i=Zs({props:e,name:"MuiCheckbox"}),{checkedIcon:s=rx,color:r="primary",icon:o=ox,indeterminate:c=!1,indeterminateIcon:l=ax,inputProps:u,size:d="medium",disableRipple:h=!1,className:f,slots:p={},slotProps:x={},...y}=i,g=c?l:o,m=c?l:s,v={...i,disableRipple:h,color:r,indeterminate:c,size:d},S=ix(v),j=x.input??u,[_,I]=Mn("root",{ref:n,elementType:sx,className:sn(S.root,f),shouldForwardComponentProp:!0,externalForwardedProps:{slots:p,slotProps:x,...y},ownerState:v,additionalProps:{type:"checkbox",icon:w.cloneElement(g,{fontSize:g.props.fontSize??d}),checkedIcon:w.cloneElement(m,{fontSize:m.props.fontSize??d}),disableRipple:h,slots:p,slotProps:{input:ec(typeof j=="function"?j(v):j,{"data-indeterminate":c})}}});return a.jsx(_,{...I,classes:S})});function cx(t){return Li("MuiFormControlLabel",t)}const Qn=Bi("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),lx=t=>{const{classes:e,disabled:n,labelPlacement:i,error:s,required:r}=t,o={root:["root",n&&"disabled",`labelPlacement${he(i)}`,s&&"error",r&&"required"],label:["label",n&&"disabled"],asterisk:["asterisk",s&&"error"]};return zi(o,cx,e)},dx=Ut("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[{[`& .${Qn.label}`]:e.label},e.root,e[`labelPlacement${he(n.labelPlacement)}`]]}})(Ni(({theme:t})=>({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${Qn.disabled}`]:{cursor:"default"},[`& .${Qn.label}`]:{[`&.${Qn.disabled}`]:{color:(t.vars||t).palette.text.disabled}},variants:[{props:{labelPlacement:"start"},style:{flexDirection:"row-reverse",marginRight:-11}},{props:{labelPlacement:"top"},style:{flexDirection:"column-reverse"}},{props:{labelPlacement:"bottom"},style:{flexDirection:"column"}},{props:({labelPlacement:e})=>e==="start"||e==="top"||e==="bottom",style:{marginLeft:16}}]}))),ux=Ut("span",{name:"MuiFormControlLabel",slot:"Asterisk"})(Ni(({theme:t})=>({[`&.${Qn.error}`]:{color:(t.vars||t).palette.error.main}}))),Us=w.forwardRef(function(e,n){const i=Zs({props:e,name:"MuiFormControlLabel"}),{checked:s,className:r,componentsProps:o={},control:c,disabled:l,disableTypography:u,inputRef:d,label:h,labelPlacement:f="end",name:p,onChange:x,required:y,slots:g={},slotProps:m={},value:v,...S}=i,j=ba(),_=l??c.props.disabled??j?.disabled,I=y??c.props.required,L={disabled:_,required:I};["checked","name","onChange","value","inputRef"].forEach(ee=>{typeof c.props[ee]>"u"&&typeof i[ee]<"u"&&(L[ee]=i[ee])});const H=tc({props:i,muiFormControl:j,states:["error"]}),$={...i,disabled:_,labelPlacement:f,required:I,error:H.error},X=lx($),W={slots:g,slotProps:{...o,...m}},[ne,ie]=Mn("typography",{elementType:Pr,externalForwardedProps:W,ownerState:$});let Q=h;return Q!=null&&Q.type!==Pr&&!u&&(Q=a.jsx(ne,{component:"span",...ie,className:sn(X.label,ie?.className),children:Q})),a.jsxs(dx,{className:sn(X.root,r),ownerState:$,ref:n,...S,children:[w.cloneElement(c,L),I?a.jsxs("div",{children:[Q,a.jsxs(ux,{ownerState:$,"aria-hidden":!0,className:X.asterisk,children:[" ","*"]})]}):Q]})}),kr=_0({themeId:nc});function hx(){const t=q(s=>s.getAvatar),e=q(s=>s.avatarName),n=q(s=>s.setAvatar),i=be(s=>s.playButtonClickSfx);return w.useEffect(()=>{t()},[t,e]),a.jsx(fx,{children:ic.map(s=>a.jsx(er,{followCursor:!0,title:`✒️ ${s.artist}`,PopperProps:{modifiers:[{name:"offset",options:{offset:[-3,8]}}]},slotProps:{tooltip:{sx:{background:"transparent",color:"dodgerblue",opacity:.5}}},children:a.jsx(px,{alt:s.name,src:Ts(s.name),chosen:e===s.name,onClick:()=>{i(),n(s.name)}})},s.name))})}const fx=k.div`
    align-self: center;
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    position: relative;
    padding: 5px;
    transition: all 0.2s ease-in-out;
`,px=k.img`
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
`;function xx(){const t=q(c=>c.changeSafetyQuestion),[e,n]=w.useState(""),[i,s]=w.useState(""),r=e.trim().length>0&&i.trim().length>0;function o(c){c.preventDefault(),r&&(t(e,i),n(""),s(""))}return a.jsx(gx,{children:a.jsxs("div",{style:{gap:8,display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[a.jsx("span",{style:{fontFamily:"Naston, sans-serif",color:"#1d7dfc"},children:"Safety Question:"}),a.jsxs(mx,{onSubmit:o,children:[a.jsx($o,{name:"question",placeholder:"Question",value:e,onChange:c=>n(c.target.value)}),a.jsx($o,{name:"answer",placeholder:"Answer",value:i,onChange:c=>s(c.target.value)}),a.jsx(et,{type:"submit",disabled:!r,children:"SAVE"})]})]})})}const gx=k.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    @media (max-width: 1100px) {
        justify-content: center;
    }
`,mx=k.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    flex-wrap: wrap;
`,$o=k.input`
    width: 243px;
    height: 32px;
    background: #242424;
    font-family: Cousine, sans-serif;

    &:focus {
        outline: 2px solid #1d7dfc;
        outline-offset: -2px;
    }
`;function yx(){const[t,e]=w.useState(""),[n,i]=w.useState([]),[s,r]=w.useState(!1);w.useEffect(()=>{o()},[]);const o=async()=>{try{const h=await vt.get("/api/user/blocked");i(h.data.sort())}catch(h){console.error("Failed to fetch blocked users:",h)}},c=async h=>{try{r(!0);const f=await vt.post(`/api/user/blocked/${h}`);f.data.includes("Error")&&dn(f.data.substring(7))}catch(f){console.error("Failed to block user:",f)}finally{o(),r(!1)}},l=async h=>{try{r(!0);const f=await vt.delete(`/api/user/blocked/${h}`);f.data.includes("Error")&&dn(f.data.substring(7))}catch(f){console.error("Failed to unblock user:",f)}finally{o(),r(!1)}},u=h=>{h.preventDefault();const f=t.trim();if(f){if(n.includes(f)){alert("User is already blocked"),e("");return}c(f),e("")}},d=h=>{l(h)};return a.jsxs(bx,{children:[a.jsx("span",{style:{fontFamily:"Naston, sans-serif",color:"#1d7dfc"},children:"Blocked Users:"}),a.jsx("form",{onSubmit:u,children:a.jsxs(vx,{children:[a.jsx(wx,{placeholder:"Enter username to block",value:t,onChange:h=>e(h.target.value),disabled:s}),a.jsx(et,{type:"submit",disabled:s||!t.trim()||n.includes(t.trim()),children:"ADD"})]})}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:n.map(h=>a.jsx(kx,{label:h,onDelete:()=>d(h),disabled:s,variant:"outlined"},h))}),n.length===0&&a.jsx("span",{color:"rgba(255, 255, 255, 0.7)",children:"No blocked users"})]})}const bx=k.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;
`,vx=k.div`
    display: flex;
    gap: 10px;
    align-items: center;
`,kx=k(P0)`
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
`,wx=k.input`
    width: 243px;
    height: 32px;
    background: #242424;
    font-family: Cousine, sans-serif;

    &:focus {
        outline: 2px solid #1d7dfc;
        outline-offset: -2px;
    }
`,Sx={autoPlay:!0,background:{color:{value:"transparent"},image:"",position:"",repeat:"",size:"",opacity:1},backgroundMask:{composite:"destination-out",cover:{color:{value:"#fff"},opacity:1},enable:!1},defaultThemes:{},delay:0,fullScreen:{enable:!0,zIndex:-1},detectRetina:!0,duration:0,fpsLimit:120,interactivity:{detectsOn:"window",events:{onHover:{enable:!0,mode:"grab",parallax:{enable:!1,force:2,smooth:10}},resize:{delay:.5,enable:!0}},modes:{trail:{delay:.005,pauseOnStop:!0,quantity:5,particles:{color:{value:"#ff0000",animation:{enable:!0,speed:400,sync:!0}},collisions:{enable:!1},links:{type:"circle",enable:!1},move:{outModes:{default:"destroy"},speed:2},size:{value:5,animation:{enable:!0,speed:5,minimumValue:1,sync:!0,startValue:"min",destroy:"max"}}}},attract:{distance:200,duration:.4,easing:"ease-out-quad",factor:1,maxSpeed:50,speed:1},bounce:{distance:200},bubble:{distance:200,duration:.4,mix:!1,divs:{distance:200,duration:.4,mix:!1,selectors:[]}},connect:{distance:80,links:{opacity:.5},radius:60},grab:{distance:150,links:{blink:!1,consent:!1,opacity:1}},push:{default:!0,groups:[],quantity:4},remove:{quantity:2},repulse:{distance:200,duration:.4,factor:100,speed:1,maxSpeed:50,easing:"ease-out-quad",divs:{distance:200,duration:.4,factor:100,speed:1,maxSpeed:50,easing:"ease-out-quad",selectors:[]}},slow:{factor:3,radius:200},light:{area:{gradient:{start:{value:"#ffffff"},stop:{value:"#000000"}},radius:1e3},shadow:{color:{value:"#000000"},length:2e3}}}},manualParticles:[],particles:{bounce:{horizontal:{value:1},vertical:{value:1}},collisions:{absorb:{speed:2},bounce:{horizontal:{value:1},vertical:{value:1}},enable:!1,maxSpeed:50,mode:"bounce",overlap:{enable:!0,retries:0}},color:{value:"#386ff0",animation:{h:{count:0,enable:!1,offset:0,speed:1,delay:0,decay:0,sync:!0},s:{count:0,enable:!1,offset:0,speed:1,delay:0,decay:0,sync:!0},l:{count:0,enable:!1,offset:0,speed:1,delay:0,decay:0,sync:!0}}},groups:{},move:{angle:{offset:0,value:90},attract:{distance:200,enable:!1,rotate:{x:3e3,y:3e3}},center:{x:50,y:50,mode:"percent",radius:0},decay:0,distance:{},direction:"none",drift:0,enable:!0,gravity:{acceleration:9.81,enable:!1,inverse:!1,maxSpeed:50},path:{clamp:!0,delay:{value:0},enable:!1,options:{}},outModes:{default:"out",bottom:"out",left:"out",right:"out",top:"out"},random:!1,size:!1,speed:2,spin:{acceleration:0,enable:!1},straight:!1,trail:{enable:!1,length:10,fill:{}},vibrate:!1,warp:!1},number:{density:{enable:!0,width:1920,height:1080},value:150},opacity:{value:{min:.3,max:.8},animation:{count:0,enable:!0,speed:.5,decay:0,delay:0,sync:!1,mode:"auto",startValue:"random",destroy:"none"}},reduceDuplicates:!1,shadow:{blur:0,color:{value:"#000"},enable:!1,offset:{x:0,y:0}},shape:{close:!0,fill:!0,options:{},type:"diamonds"},size:{value:{min:1,max:3},animation:{count:0,enable:!0,speed:3,decay:0,delay:0,sync:!1,mode:"auto",startValue:"random",destroy:"none"}},stroke:{width:0},zIndex:{value:0,opacityRate:1,sizeRate:1,velocityRate:1},destroy:{bounds:{},mode:"none",split:{count:1,factor:{random:{enable:!1,minimumValue:0},value:3},rate:{random:{enable:!1,minimumValue:0},value:{min:4,max:9}},sizeOffset:!0,particles:{}}},roll:{darken:{enable:!1,value:0},enable:!1,enlighten:{enable:!1,value:0},mode:"vertical",speed:25},tilt:{random:{enable:!1,minimumValue:0},value:0,animation:{enable:!1,speed:0,decay:0,sync:!1},direction:"clockwise",enable:!1},twinkle:{lines:{enable:!1,frequency:.05,opacity:1},particles:{enable:!0,frequency:1,opacity:1}},wobble:{distance:5,enable:!1,speed:{angle:50,move:10}},life:{count:0,delay:{random:{enable:!1,minimumValue:0},value:0,sync:!1},duration:{random:{enable:!1,minimumValue:1e-4},value:0,sync:!1}},rotate:{random:{enable:!1,minimumValue:0},value:0,animation:{enable:!1,speed:0,decay:0,sync:!1},direction:"clockwise",path:!1},orbit:{animation:{count:0,enable:!1,speed:1,decay:0,delay:0,sync:!1},enable:!1,opacity:1,rotation:{random:{enable:!1,minimumValue:0},value:45},width:1},links:{blink:!1,color:{value:"random"},consent:!1,distance:100,enable:!0,frequency:1,opacity:1,shadow:{blur:5,color:{value:"#000"},enable:!1},triangles:{enable:!1,frequency:1},width:1,warp:!1},repulse:{random:{enable:!1,minimumValue:0},value:0,enabled:!1,distance:1,duration:1,factor:1,speed:1}},pauseOnBlur:!0,pauseOnOutsideViewport:!0,responsive:[],smooth:!1,style:{},themes:[],zLayers:100,motion:{disable:!1,reduce:{factor:4,value:!0}}};Fn.delete;function yn({children:t,style:e}){const n=q(r=>r.particlesInitialized),i=r=>new Promise(o=>{console.log(r),o()}),s=w.useMemo(()=>a.jsx(ku,{id:"tsparticles",particlesLoaded:i,options:Sx}),[]);return a.jsxs(Cx,{style:e,children:[t,n&&s]})}const Cx=k.div`
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
`;function Ii({headline:t,rightElement:e}){return a.jsxs(Ex,{children:[a.jsxs("div",{style:{width:"100%",height:"3.5em",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsx("span",{children:t}),e]}),a.jsx("hr",{style:{width:"100vw",maxWidth:1204}})]})}const Ex=k.div`
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
`;function jx(){const[t,e]=w.useState(""),[n,i]=w.useState(""),s=t.length>=6&&n.length>=6&&t===n;function r(o){if(o.preventDefault(),!s){t.length<6||n.length<6?dn("Password must be at least 6 characters long."):dn("Passwords do not match.");return}vt.put("/api/user/change-password",t,{headers:{"Content-Type":"text/plain"}}).then(()=>{tr("Password changed successfully!"),e(""),i("")}).catch(c=>{console.error("Error changing password:",c),dn("Error changing password. Please try again.")})}return a.jsx(Dx,{children:a.jsxs("div",{style:{gap:8,display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[a.jsx("span",{style:{fontFamily:"Naston, sans-serif",color:"#1d7dfc"},children:"Change Password:"}),a.jsxs(Ax,{onSubmit:r,children:[a.jsx(Go,{name:"newPassword",type:"password",placeholder:"New password",autoComplete:"new-password",minLength:6,value:t,onChange:o=>e(o.target.value),style:{borderColor:t?t.length<6?"coral":"mediumaquamarine":void 0}}),a.jsx(Go,{name:"repeatPassword",type:"password",placeholder:"Repeat new password",autoComplete:"new-password",minLength:6,value:n,onChange:o=>i(o.target.value),style:{borderColor:n&&t.length>=6?t!==n?"coral":"mediumaquamarine":void 0}}),a.jsx(et,{type:"submit",disabled:!s,children:"SAVE"})]})]})})}const Dx=k.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    @media (max-width: 1100px) {
        justify-content: center;
    }
`,Ax=k.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    flex-wrap: wrap;
`,Go=k.input`
    width: 243px;
    height: 32px;
    background: #242424;
    font-family: Cousine, sans-serif;

    &:focus {
        outline: ${({value:t})=>t?"none":"2px solid #1d7dfc"};
        outline-offset: -2px;
    }
`;function Ox(){const t=q(e=>e.user);return a.jsx(yn,{children:a.jsxs("div",{style:{paddingTop:20,maxWidth:1204,minHeight:"100vh",height:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start"},children:[a.jsx(Ii,{headline:"Profile Settings for "+t,rightElement:a.jsx(Wi,{})}),a.jsxs("div",{style:{display:"flex",gap:32,flexWrap:"wrap"},children:[a.jsx(jx,{}),a.jsx(xx,{}),a.jsx(yx,{})]}),a.jsx(Ii,{headline:"Avatar"}),a.jsx(hx,{})]})})}function _x(){const t=nr().pathname;return a.jsxs(Px,{children:["Project ",t==="/login"&&a.jsx("br",{}),a.jsx(T0,{style:{fontSize:"60px"},children:"Drasil"})]})}const Px=k.h1`
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
`,T0=k.span`
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
`;function I0(){return a.jsx(Tx,{children:a.jsx("a",{href:"https://github.com/WE-Kaito/digimon-tcg-simulator/wiki/Patchnotes#03042026",target:"_blank",rel:"noopener noreferrer",children:"Patch notes (03.04.2026)"})})}const Tx=k.sub`
    width: 100vw;
    position: fixed;
    bottom: -2px;
    left: 114px;
    transform: translateX(-50%);
    font-family: Cousine, monospace;
`;function Ix(){const t=Xn(s=>s.hasAcceptedRules),e=Xn(s=>s.setHasAcceptedRules),[n,i]=w.useState(!1);return a.jsxs(ir,{open:!t,children:[a.jsx(ka,{sx:{color:"crimson",fontFamily:"League Spartan, sans-serif",fontSize:26,textAlign:"center"},children:"Terms of use"}),a.jsxs(sr,{sx:{color:"ghostwhite",fontFamily:"League Spartan, sans-serif"},children:[a.jsxs("p",{children:["NO insults or harassment of any kind directed at other users.",a.jsx("br",{}),"NO usernames that are indicative of group hatred, abuse or any other form of encouragement of violence.",a.jsx("br",{}),"NO gossip about other users on our discord server. Please use the report function or settle things privately.",a.jsx("br",{}),"NO spamming or flooding the chat with messages.",a.jsx("br",{}),"NO sharing of links to harmful or inappropriate websites.",a.jsx("br",{}),"NO hacking, cheating, or exploiting bugs in the game.",a.jsx("br",{}),"If you can't agree on rulings, stay peaceful. You will often find helpful judges on the discord server."]}),a.jsx("hr",{}),a.jsxs("p",{children:["Breaking these rules will result in a warning, a temporary ban, or a permanent ban from the game and/or the discord server.",a.jsx("br",{}),a.jsx("br",{}),"This is a non-commercial fan-made project and is not affiliated with the Digimon brand or Bandai Co., Ltd. The purpose of this project is to celebrate and advertise the Digimon Card Game."]}),a.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"},children:[a.jsxs("div",{style:{display:"flex",gap:5,alignItems:"center"},children:[a.jsx(Ti,{sx:n?void 0:{svg:{color:"ghostwhite"}},checked:n,onChange:()=>i(!n)}),a.jsx("span",{style:{transform:"translateY(1px)"},children:"I have read and acknowledged the terms of use"})]}),a.jsx(sc,{sx:{fontWeight:600},variant:"outlined",disabled:!n,onClick:()=>e(!0),children:"START ››"})]})]})]})}function Rx(){const[t,e]=w.useState(""),[n,i]=w.useState(""),s=Vt(),r=q($=>$.login),[o,c]=w.useState(!1),[l,u]=w.useState(""),[d,h]=w.useState(""),[f,p]=w.useState(""),[x,y]=w.useState(""),[g,m]=w.useState(""),v=q($=>$.register),S=/^(?=.*[a-zA-Z])(?=.*\d).{6,128}$/,j=/^(?:(?![:_【】﹕≔<>$& ]).){3,16}$/,_=/^(?:(?![:_【】﹕≔<>$&]).){1,64}$/;function I($){$.preventDefault(),r(t,n,s)}function L($){$.preventDefault(),!(!j.test(l)||!S.test(d)||d!==f||!_.test(x)||!_.test(g))&&(v(l,d,x,g,c,s),h(""),p(""),u(""),y(""),m(""))}function H($,X){if($==="")return"ghostwhite";let W=!1;switch(X){case"username":W=j.test($);break;case"password":W=S.test($);break;case"question":W=_.test($);break;case"repeatedPassword":W=f===d}return W?"#6ed298":"#e17b88"}return a.jsxs(yn,{children:[a.jsx(_x,{}),a.jsx(Ix,{}),!o&&a.jsxs(Mx,{onSubmit:I,children:[a.jsx(Ri,{value:t,onChange:$=>e($.target.value),type:"text",name:"userName",placeholder:"username",maxLength:16}),a.jsxs("div",{children:[a.jsx(Ri,{value:n,onChange:$=>i($.target.value),type:"password",name:"password",placeholder:"password"}),a.jsx("br",{}),a.jsx(Lx,{onClick:()=>s("/recover-password"),children:"Forgot your password?"})]}),a.jsx(Gn,{type:"submit",children:a.jsx(xi,{children:"LOGIN"})}),a.jsx(R0,{style:{marginTop:"50px"},type:"button",onClick:()=>c(!0),children:a.jsx(xi,{children:"REGISTER"})})]}),o&&a.jsxs(Bx,{onSubmit:L,children:[a.jsxs("div",{children:[a.jsx(Bt,{value:l,onChange:$=>u($.target.value),type:"text",name:"userName",placeholder:"username",maxLength:16,style:{backgroundColor:`${H(l,"username")}`}}),a.jsx("br",{}),a.jsx(Vo,{children:"3 - 16 characters"})]}),a.jsxs("div",{children:[a.jsx(Bt,{value:d,onChange:$=>h($.target.value),type:"password",name:"password",placeholder:"password",style:{backgroundColor:`${H(d,"password")}`}}),a.jsx("br",{}),a.jsx(Vo,{children:"6+ characters, cont. numbers & letters"})]}),a.jsx(Bt,{value:f,onChange:$=>p($.target.value),type:"password",name:"RepeatPassword",placeholder:"repeat password",style:{backgroundColor:`${H(f,"repeatedPassword")}`}}),a.jsx(Bt,{value:x,onChange:$=>y($.target.value),type:"text",name:"Question",placeholder:"safety question",style:{backgroundColor:`${H(x,"question")}`}}),a.jsx(Bt,{value:g,onChange:$=>m($.target.value),type:"text",name:"Answer",placeholder:"answer (pw recovery)",style:{backgroundColor:`${H(g,"question")}`}}),a.jsxs(Nx,{children:[a.jsx(zx,{type:"button",onClick:()=>c(!1),children:a.jsx(xi,{children:"BACK"})}),a.jsx(Gn,{type:"submit",children:a.jsx(xi,{children:"REGISTER"})})]})]}),!o&&a.jsx(I0,{})]})}const Gn=k.button`
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
`,Ri=k.input`
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

`,Bt=k(Ri)`
  font-size: 22px;
  width: 300px;
  height: 50px;
`,Mx=k.form`
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
`,Bx=k.form`
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
`,Vo=k.span`
  font-family: 'Naston', sans-serif;
  font-size: 15px;
`,Lx=k.span`
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
`,R0=k(Gn)`
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
`,zx=k(R0)`
  width: 110px;
  margin-right: 45px;
`,xi=k.span`
  font-family: 'Pixel Digivolve', sans-serif;
  letter-spacing: 1px;
`,Nx=k.div`
  margin-top: 50px;
  @media (max-width: 767px) {
    margin-top: 32px;
  }
`;function Fx(){const[t,e]=w.useState(""),n=Vt(),i=/^(?=.*[a-zA-Z])(?=.*\d).{6,128}$/,s=q(v=>v.usernameForRecovery),r=q(v=>v.recoveryQuestion),o=q(v=>v.getRecoveryQuestion),c=q(v=>v.recoverPassword),[l,u]=w.useState(""),[d,h]=w.useState(""),[f,p]=w.useState("");function x(){return l===""?"ghostwhite":i.test(l)?"#6ed298":"#e17b88"}function y(){return d===""?"ghostwhite":d===l?"#6ed298":"#e17b88"}function g(v){v.preventDefault(),o(t)}function m(v){v.preventDefault(),!(!i.test(l)||l!==d)&&c(f,l,n)}return a.jsxs(yn,{children:[a.jsx(T0,{style:{marginTop:80},children:"Password Recovery"}),a.jsxs($x,{onSubmit:g,children:[a.jsx(Ri,{value:t,onChange:v=>e(v.target.value),type:"text",name:"username",placeholder:s||"username",maxLength:16}),a.jsxs(Yx,{children:[a.jsx(qx,{type:"button",onClick:()=>n("/"),children:a.jsx(hs,{children:"Back"})}),a.jsx(Gn,{type:"submit",children:a.jsx(hs,{children:"Find"})})]})]}),r==="User not found!"&&a.jsx(Ux,{children:"User not found!"}),r!==""&&r!=="User not found!"&&a.jsxs(Gx,{onSubmit:m,children:[a.jsx(Vx,{children:r}),a.jsx(Bt,{value:f,onChange:v=>p(v.target.value),type:"text",name:"answer",placeholder:"answer"}),a.jsx(Bt,{value:l,onChange:v=>u(v.target.value),type:"password",name:"password",placeholder:"new password",style:{backgroundColor:x()}}),a.jsx(Bt,{value:d,onChange:v=>h(v.target.value),type:"password",name:"repeatPassword",placeholder:"repeat new password",style:{backgroundColor:y()}}),a.jsx(Hx,{type:"submit",style:{width:280},children:a.jsx(hs,{children:"Change Password"})})]})]})}const $x=k.form`
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
`,Gx=k.form`
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
`,Vx=k.span`
    font-family: "Naston", sans-serif;
    font-size: 16px;
    color: #646cff;
`,Ux=k.span`
    font-family: "Naston", sans-serif;
    color: crimson;
    margin-top: 30px;
    font-size: 22px;
    max-width: 300px;
`,Hx=k(Gn)`
    &:hover {
        background: #39dcb6;
    }
`,Wx=k(Gn)`
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
`,qx=k(Wx)`
    width: 110px;
    margin-right: 45px;
`,hs=k.span`
    font-family: "Pixel Digivolve", sans-serif;
    letter-spacing: 1px;
`,Yx=k.div`
    margin-top: 50px;
    @media (max-width: 767px) {
        margin-top: 32px;
    }
`;function Jx(){const t=q(n=>n.user);if(t==="")return"loading ...";const e=t!=="anonymousUser";return a.jsx(a.Fragment,{children:e?a.jsx(rc,{}):a.jsx(rr,{to:"/login"})})}const Qx=De(a.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-3 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V8c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1"})),Uo=De(a.jsx("path",{d:"M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"})),Kx=De(a.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m1 4h-2v-2h2z"})),Xx=De(a.jsx("path",{d:"M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6z"})),Zx=De(a.jsx("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2M9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9zm9 14H6V10h12zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2"})),e2=De(a.jsx("path",{d:"M3.96 11.38C4.24 9.91 5.62 8.9 7.12 8.9h2.93c.52 0 .95-.43.95-.95S10.57 7 10.05 7H7.22c-2.61 0-4.94 1.91-5.19 4.51C1.74 14.49 4.08 17 7 17h3.05c.52 0 .95-.43.95-.95s-.43-.95-.95-.95H7c-1.91 0-3.42-1.74-3.04-3.72M9 13h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1s.45 1 1 1m7.78-6h-2.83c-.52 0-.95.43-.95.95s.43.95.95.95h2.93c1.5 0 2.88 1.01 3.16 2.48.38 1.98-1.13 3.72-3.04 3.72h-3.05c-.52 0-.95.43-.95.95s.43.95.95.95H17c2.92 0 5.26-2.51 4.98-5.49-.25-2.6-2.59-4.51-5.2-4.51"})),Ho=De([a.jsx("path",{d:"M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z"},"0"),a.jsx("path",{d:"m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"},"1")]),Wo=De([a.jsx("path",{d:"M6 17.59 7.41 19 12 14.42 16.59 19 18 17.59l-6-6z"},"0"),a.jsx("path",{d:"m6 11 1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z"},"1")]),t2=De(a.jsx("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1z"})),n2=De([a.jsx("path",{d:"M19 5H5v14h14zm-5 12h-2V9h-2V7h4z",opacity:".3"},"0"),a.jsx("path",{d:"M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2M5 5h14v14H5zm5 4h2v8h2V7h-4z"},"1")]),i2=De([a.jsx("circle",{cx:"10",cy:"8",r:"2",opacity:".3"},"0"),a.jsx("path",{d:"M10 16c0-.34.03-.67.08-.99-.03-.01-.05-.01-.08-.01-1.97 0-3.9.53-5.59 1.54-.25.14-.41.46-.41.81V18h6.29c-.19-.63-.29-1.3-.29-2",opacity:".3"},"1"),a.jsx("path",{d:"M4 18v-.65c0-.34.16-.66.41-.81C6.1 15.53 8.03 15 10 15c.03 0 .05 0 .08.01.1-.7.3-1.37.59-1.98-.22-.02-.44-.03-.67-.03-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26c-.42-.6-.75-1.28-.97-2zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m10.83 6.63-1.45.49q-.48-.405-1.08-.63L18 11h-2l-.3 1.49q-.6.225-1.08.63l-1.45-.49-1 1.73 1.14 1c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1 1 1.73 1.45-.49q.48.405 1.08.63L16 21h2l.3-1.49q.6-.225 1.08-.63l1.45.49 1-1.73-1.14-1c.03-.21.06-.41.06-.63s-.03-.42-.06-.63l1.14-1zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"},"2")]),s2=De([a.jsx("path",{fillRule:"evenodd",d:"M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87"},"0"),a.jsx("circle",{cx:"9",cy:"8",r:"4",fillRule:"evenodd"},"1"),a.jsx("path",{fillRule:"evenodd",d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24m-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4"},"2")]),r2=De(a.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5 11H7v-2h10z"})),o2=De(a.jsx("path",{d:"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27zM12 17.3c-.72 0-1.3-.58-1.3-1.3s.58-1.3 1.3-1.3 1.3.58 1.3 1.3-.58 1.3-1.3 1.3m1-4.3h-2V7h2z"})),a2=De([a.jsx("path",{d:"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27zM19 14.9 14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1z"},"0"),a.jsx("circle",{cx:"12",cy:"16",r:"1"},"1"),a.jsx("path",{d:"M11 7h2v7h-2z"},"2")]),c2=De(a.jsx("path",{d:"M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"})),l2=De(a.jsx("path",{d:"M16.54 11 13 7.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41zM11 7H2v2h9zm10 6.41L19.59 12 17 14.59 14.41 12 13 13.41 15.59 16 13 18.59 14.41 20 17 17.41 19.59 20 21 18.59 18.41 16zM11 15H2v2h9z"})),d2=De([a.jsx("path",{d:"M15.22 4.75 7.87 7.79l4.96 11.96 7.35-3.05zM11 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1",opacity:".3"},"0"),a.jsx("path",{d:"m3.87 11.18-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61l1.34.56zm18.16 4.77L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6m-9.2 3.8L7.87 7.79l7.35-3.04h.01l4.95 11.95z"},"1"),a.jsx("circle",{cx:"11",cy:"9",r:"1"},"2"),a.jsx("path",{d:"m9.33 21.75-3.45-8.34v6.34c0 1.1.9 2 2 2z"},"3")]),M0=De(a.jsx("path",{d:"M20.06 10.14c.56.46 1.38.42 1.89-.09.59-.59.55-1.57-.1-2.1-3.59-2.94-8.2-4.03-12.55-3.26l2.59 2.59c2.89-.03 5.8.92 8.17 2.86m-2.27 1.83c-.78-.57-1.63-1-2.52-1.3l2.95 2.95c.24-.58.1-1.27-.43-1.65m-3.84 4.26c-1.22-.63-2.68-.63-3.91 0-.59.31-.7 1.12-.23 1.59l1.47 1.47c.39.39 1.02.39 1.41 0l1.47-1.47c.49-.47.39-1.28-.21-1.59m5.73 1.67L4.12 2.34a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L5.05 6.1c-1.01.5-1.99 1.11-2.89 1.85-.65.53-.69 1.51-.1 2.1.51.51 1.32.56 1.87.1 1-.82 2.1-1.46 3.25-1.93l2.23 2.23c-1.13.3-2.21.8-3.19 1.51-.69.5-.73 1.51-.13 2.11l.01.01c.49.49 1.26.54 1.83.13 1.19-.84 2.58-1.26 3.97-1.29l6.37 6.37c.39.39 1.02.39 1.41 0 .39-.37.39-1 0-1.39"}));var fs={},Ke={},ps={},qo;function St(){return qo||(qo=1,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.isEventSourceSupported=t.isReactNative=t.ReadyState=t.DEFAULT_HEARTBEAT=t.UNPARSABLE_JSON_OBJECT=t.DEFAULT_RECONNECT_INTERVAL_MS=t.DEFAULT_RECONNECT_LIMIT=t.SOCKET_IO_PING_CODE=t.SOCKET_IO_PATH=t.SOCKET_IO_PING_INTERVAL=t.DEFAULT_EVENT_SOURCE_OPTIONS=t.EMPTY_EVENT_HANDLERS=t.DEFAULT_OPTIONS=void 0;var e=1,n=1e3*e;t.DEFAULT_OPTIONS={},t.EMPTY_EVENT_HANDLERS={},t.DEFAULT_EVENT_SOURCE_OPTIONS={withCredentials:!1,events:t.EMPTY_EVENT_HANDLERS},t.SOCKET_IO_PING_INTERVAL=25*n,t.SOCKET_IO_PATH="/socket.io/?EIO=3&transport=websocket",t.SOCKET_IO_PING_CODE="2",t.DEFAULT_RECONNECT_LIMIT=20,t.DEFAULT_RECONNECT_INTERVAL_MS=5e3,t.UNPARSABLE_JSON_OBJECT={},t.DEFAULT_HEARTBEAT={message:"ping",timeout:6e4,interval:25e3};var i;(function(r){r[r.UNINSTANTIATED=-1]="UNINSTANTIATED",r[r.CONNECTING=0]="CONNECTING",r[r.OPEN=1]="OPEN",r[r.CLOSING=2]="CLOSING",r[r.CLOSED=3]="CLOSED"})(i||(t.ReadyState=i={}));var s=function(){try{return"EventSource"in globalThis}catch{return!1}};t.isReactNative=typeof navigator<"u"&&navigator.product==="ReactNative",t.isEventSourceSupported=!t.isReactNative&&s()})(ps)),ps}var Wn={},xs={},Yo;function wr(){return Yo||(Yo=1,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.resetWebSockets=t.sharedWebSockets=void 0,t.sharedWebSockets={};var e=function(n){if(n&&t.sharedWebSockets.hasOwnProperty(n))delete t.sharedWebSockets[n];else for(var i in t.sharedWebSockets)t.sharedWebSockets.hasOwnProperty(i)&&delete t.sharedWebSockets[i]};t.resetWebSockets=e})(xs)),xs}var Xt={},Dt={},Jo;function Sr(){if(Jo)return Dt;Jo=1,Object.defineProperty(Dt,"__esModule",{value:!0}),Dt.setUpSocketIOPing=Dt.appendQueryParams=Dt.parseSocketIOUrl=void 0;var t=St(),e=function(s){if(s){var r=/^https|wss/.test(s),o=s.replace(/^(https?|wss?)(:\/\/)?/,""),c=o.replace(/\/$/,""),l=r?"wss":"ws";return"".concat(l,"://").concat(c).concat(t.SOCKET_IO_PATH)}else if(s===""){var r=/^https/.test(window.location.protocol),l=r?"wss":"ws",u=window.location.port?":".concat(window.location.port):"";return"".concat(l,"://").concat(window.location.hostname).concat(u).concat(t.SOCKET_IO_PATH)}return s};Dt.parseSocketIOUrl=e;var n=function(s,r){r===void 0&&(r={});var o=/\?([\w]+=[\w]+)/,c=o.test(s),l="".concat(Object.entries(r).reduce(function(u,d){var h=d[0],f=d[1];return u+"".concat(h,"=").concat(f,"&")},"").slice(0,-1));return"".concat(s).concat(c?"&":"?").concat(l)};Dt.appendQueryParams=n;var i=function(s,r){r===void 0&&(r=t.SOCKET_IO_PING_INTERVAL);var o=function(){return s(t.SOCKET_IO_PING_CODE)};return window.setInterval(o,r)};return Dt.setUpSocketIOPing=i,Dt}var gi={},Qo;function B0(){if(Qo)return gi;Qo=1,Object.defineProperty(gi,"__esModule",{value:!0}),gi.heartbeat=n;var t=St();function e(i){return Array.isArray(i)?i.reduce(function(s,r){return s.current>r.current?s:r}).current:i.current}function n(i,s,r){var o=r||{},c=o.interval,l=c===void 0?t.DEFAULT_HEARTBEAT.interval:c,u=o.timeout,d=u===void 0?t.DEFAULT_HEARTBEAT.timeout:u,h=o.message,f=h===void 0?t.DEFAULT_HEARTBEAT.message:h,p=Math.max(100,l/10),x=Date.now(),y=setInterval(function(){var g=Date.now(),m=e(s);if(m+d<=g)console.warn("Heartbeat timed out, closing connection, last message received ".concat(g-m,"ms ago, last ping sent ").concat(g-x,"ms ago")),i.close();else if(m+l<=g&&x+l<=g)try{typeof f=="function"?i.send(f()):i.send(f),x=g}catch(v){console.error("Heartbeat failed, closing connection",v instanceof Error?v.message:v),i.close()}},p);return i.addEventListener("close",function(){clearInterval(y)}),function(){}}return gi}var qn={},gs={},Ko;function Cr(){return Ko||(Ko=1,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.resetSubscribers=t.removeSubscriber=t.addSubscriber=t.hasSubscribers=t.getSubscribers=void 0;var e={},n=[],i=function(l){return(0,t.hasSubscribers)(l)?Array.from(e[l]):n};t.getSubscribers=i;var s=function(l){var u;return((u=e[l])===null||u===void 0?void 0:u.size)>0};t.hasSubscribers=s;var r=function(l,u){e[l]=e[l]||new Set,e[l].add(u)};t.addSubscriber=r;var o=function(l,u){e[l].delete(u)};t.removeSubscriber=o;var c=function(l){if(l&&e.hasOwnProperty(l))delete e[l];else for(var u in e)e.hasOwnProperty(u)&&delete e[u]};t.resetSubscribers=c})(gs)),gs}var Xo;function Er(){if(Xo)return qn;Xo=1,Object.defineProperty(qn,"__esModule",{value:!0}),qn.assertIsWebSocket=n,qn.resetGlobalState=i;var t=wr(),e=Cr();function n(s,r){if(!r&&!(s instanceof WebSocket))throw new Error("")}function i(s){(0,e.resetSubscribers)(s),(0,t.resetWebSockets)(s)}return qn}var Zo;function u2(){if(Zo)return Xt;Zo=1;var t=Xt&&Xt.__assign||function(){return t=Object.assign||function(d){for(var h,f=1,p=arguments.length;f<p;f++){h=arguments[f];for(var x in h)Object.prototype.hasOwnProperty.call(h,x)&&(d[x]=h[x])}return d},t.apply(this,arguments)};Object.defineProperty(Xt,"__esModule",{value:!0}),Xt.attachListeners=void 0;var e=Sr(),n=B0(),i=St(),s=Er(),r=function(d,h,f,p){d.onmessage=function(x){var y;h.current.onMessage&&h.current.onMessage(x),typeof p?.current=="number"&&(p.current=Date.now()),!(typeof h.current.filter=="function"&&h.current.filter(x)!==!0)&&(h.current.heartbeat&&typeof h.current.heartbeat!="boolean"&&((y=h.current.heartbeat)===null||y===void 0?void 0:y.returnMessage)===x.data||f(x))}},o=function(d,h,f,p,x){d.onopen=function(y){if(h.current.onOpen&&h.current.onOpen(y),p.current=0,f(i.ReadyState.OPEN),h.current.heartbeat&&d instanceof WebSocket){var g=typeof h.current.heartbeat=="boolean"?void 0:h.current.heartbeat;x.current=Date.now(),(0,n.heartbeat)(d,x,g)}}},c=function(d,h,f,p,x){if(i.isEventSourceSupported&&d instanceof EventSource)return function(){};(0,s.assertIsWebSocket)(d,h.current.skipAssert);var y;return d.onclose=function(g){var m;if(h.current.onClose&&h.current.onClose(g),f(i.ReadyState.CLOSED),h.current.shouldReconnect&&h.current.shouldReconnect(g)){var v=(m=h.current.reconnectAttempts)!==null&&m!==void 0?m:i.DEFAULT_RECONNECT_LIMIT;if(x.current<v){var S=typeof h.current.reconnectInterval=="function"?h.current.reconnectInterval(x.current):h.current.reconnectInterval;y=window.setTimeout(function(){x.current++,p()},S??i.DEFAULT_RECONNECT_INTERVAL_MS)}else h.current.onReconnectStop&&h.current.onReconnectStop(v),console.warn("Max reconnect attempts of ".concat(v," exceeded"))}},function(){return y&&window.clearTimeout(y)}},l=function(d,h,f,p,x){var y;return d.onerror=function(g){var m;if(h.current.onError&&h.current.onError(g),i.isEventSourceSupported&&d instanceof EventSource&&(h.current.onClose&&h.current.onClose(t(t({},g),{code:1006,reason:"An error occurred with the EventSource: ".concat(g),wasClean:!1})),f(i.ReadyState.CLOSED),d.close()),h.current.retryOnError)if(x.current<((m=h.current.reconnectAttempts)!==null&&m!==void 0?m:i.DEFAULT_RECONNECT_LIMIT)){var v=typeof h.current.reconnectInterval=="function"?h.current.reconnectInterval(x.current):h.current.reconnectInterval;y=window.setTimeout(function(){x.current++,p()},v??i.DEFAULT_RECONNECT_INTERVAL_MS)}else h.current.onReconnectStop&&h.current.onReconnectStop(h.current.reconnectAttempts),console.warn("Max reconnect attempts of ".concat(h.current.reconnectAttempts," exceeded"))},function(){return y&&window.clearTimeout(y)}},u=function(d,h,f,p,x,y,g){var m=h.setLastMessage,v=h.setReadyState,S,j,_;return f.current.fromSocketIO&&(S=(0,e.setUpSocketIOPing)(g)),r(d,f,m,y),o(d,f,v,x,y),j=c(d,f,v,p,x),_=l(d,f,v,p,x),function(){v(i.ReadyState.CLOSING),j(),_(),d.close(),S&&clearInterval(S)}};return Xt.attachListeners=u,Xt}var Zt={},ea;function h2(){if(ea)return Zt;ea=1;var t=Zt&&Zt.__assign||function(){return t=Object.assign||function(h){for(var f,p=1,x=arguments.length;p<x;p++){f=arguments[p];for(var y in f)Object.prototype.hasOwnProperty.call(f,y)&&(h[y]=f[y])}return h},t.apply(this,arguments)};Object.defineProperty(Zt,"__esModule",{value:!0}),Zt.attachSharedListeners=void 0;var e=wr(),n=St(),i=Cr(),s=Sr(),r=B0(),o=function(h,f,p){h.onmessage=function(x){(0,i.getSubscribers)(f).forEach(function(y){var g;y.optionsRef.current.onMessage&&y.optionsRef.current.onMessage(x),typeof((g=y?.lastMessageTime)===null||g===void 0?void 0:g.current)=="number"&&(y.lastMessageTime.current=Date.now()),!(typeof y.optionsRef.current.filter=="function"&&y.optionsRef.current.filter(x)!==!0)&&(p&&typeof p!="boolean"&&p?.returnMessage===x.data||y.setLastMessage(x))})}},c=function(h,f,p){h.onopen=function(x){var y=(0,i.getSubscribers)(f);y.forEach(function(g){g.reconnectCount.current=0,g.optionsRef.current.onOpen&&g.optionsRef.current.onOpen(x),g.setReadyState(n.ReadyState.OPEN),p&&h instanceof WebSocket&&(g.lastMessageTime.current=Date.now())}),p&&h instanceof WebSocket&&(0,r.heartbeat)(h,y.map(function(g){return g.lastMessageTime}),typeof p=="boolean"?void 0:p)}},l=function(h,f){h instanceof WebSocket&&(h.onclose=function(p){(0,i.getSubscribers)(f).forEach(function(x){x.optionsRef.current.onClose&&x.optionsRef.current.onClose(p),x.setReadyState(n.ReadyState.CLOSED)}),delete e.sharedWebSockets[f],(0,i.getSubscribers)(f).forEach(function(x){var y;if(x.optionsRef.current.shouldReconnect&&x.optionsRef.current.shouldReconnect(p)){var g=(y=x.optionsRef.current.reconnectAttempts)!==null&&y!==void 0?y:n.DEFAULT_RECONNECT_LIMIT;if(x.reconnectCount.current<g){var m=typeof x.optionsRef.current.reconnectInterval=="function"?x.optionsRef.current.reconnectInterval(x.reconnectCount.current):x.optionsRef.current.reconnectInterval;setTimeout(function(){x.reconnectCount.current++,x.reconnect.current()},m??n.DEFAULT_RECONNECT_INTERVAL_MS)}else x.optionsRef.current.onReconnectStop&&x.optionsRef.current.onReconnectStop(x.optionsRef.current.reconnectAttempts),console.warn("Max reconnect attempts of ".concat(g," exceeded"))}})})},u=function(h,f){h.onerror=function(p){(0,i.getSubscribers)(f).forEach(function(x){x.optionsRef.current.onError&&x.optionsRef.current.onError(p),n.isEventSourceSupported&&h instanceof EventSource&&(x.optionsRef.current.onClose&&x.optionsRef.current.onClose(t(t({},p),{code:1006,reason:"An error occurred with the EventSource: ".concat(p),wasClean:!1})),x.setReadyState(n.ReadyState.CLOSED))}),n.isEventSourceSupported&&h instanceof EventSource&&h.close()}},d=function(h,f,p,x){var y;return p.current.fromSocketIO&&(y=(0,s.setUpSocketIOPing)(x)),o(h,f,p.current.heartbeat),l(h,f),c(h,f,p.current.heartbeat),u(h,f),function(){y&&clearInterval(y)}};return Zt.attachSharedListeners=d,Zt}var ta;function f2(){if(ta)return Wn;ta=1,Object.defineProperty(Wn,"__esModule",{value:!0}),Wn.createOrJoinSocket=void 0;var t=wr(),e=St(),n=u2(),i=h2(),s=Cr(),r=function(c,l,u,d,h){return function(){if((0,s.removeSubscriber)(c,l),!(0,s.hasSubscribers)(c)){try{var f=t.sharedWebSockets[c];f instanceof WebSocket&&(f.onclose=function(p){u.current.onClose&&u.current.onClose(p),d(e.ReadyState.CLOSED)}),f.close()}catch{}h&&h(),delete t.sharedWebSockets[c]}}},o=function(c,l,u,d,h,f,p,x,y){if(!e.isEventSourceSupported&&d.current.eventSourceOptions)throw e.isReactNative?new Error("EventSource is not supported in ReactNative"):new Error("EventSource is not supported");if(d.current.share){var g=null;t.sharedWebSockets[l]===void 0?(t.sharedWebSockets[l]=d.current.eventSourceOptions?new EventSource(l,d.current.eventSourceOptions):new WebSocket(l,d.current.protocols),c.current=t.sharedWebSockets[l],u(e.ReadyState.CONNECTING),g=(0,i.attachSharedListeners)(t.sharedWebSockets[l],l,d,y)):(c.current=t.sharedWebSockets[l],u(t.sharedWebSockets[l].readyState));var m={setLastMessage:h,setReadyState:u,optionsRef:d,reconnectCount:p,lastMessageTime:x,reconnect:f};return(0,s.addSubscriber)(l,m),r(l,m,d,u,g)}else{if(c.current=d.current.eventSourceOptions?new EventSource(l,d.current.eventSourceOptions):new WebSocket(l,d.current.protocols),u(e.ReadyState.CONNECTING),!c.current)throw new Error("WebSocket failed to be created");return(0,n.attachListeners)(c.current,{setLastMessage:h,setReadyState:u},d,f.current,p,x,y)}};return Wn.createOrJoinSocket=o,Wn}var At={},na;function p2(){return na||(na=1,(function(t){var e=At&&At.__awaiter||function(l,u,d,h){function f(p){return p instanceof d?p:new d(function(x){x(p)})}return new(d||(d=Promise))(function(p,x){function y(v){try{m(h.next(v))}catch(S){x(S)}}function g(v){try{m(h.throw(v))}catch(S){x(S)}}function m(v){v.done?p(v.value):f(v.value).then(y,g)}m((h=h.apply(l,u||[])).next())})},n=At&&At.__generator||function(l,u){var d={label:0,sent:function(){if(p[0]&1)throw p[1];return p[1]},trys:[],ops:[]},h,f,p,x=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return x.next=y(0),x.throw=y(1),x.return=y(2),typeof Symbol=="function"&&(x[Symbol.iterator]=function(){return this}),x;function y(m){return function(v){return g([m,v])}}function g(m){if(h)throw new TypeError("Generator is already executing.");for(;x&&(x=0,m[0]&&(d=0)),d;)try{if(h=1,f&&(p=m[0]&2?f.return:m[0]?f.throw||((p=f.return)&&p.call(f),0):f.next)&&!(p=p.call(f,m[1])).done)return p;switch(f=0,p&&(m=[m[0]&2,p.value]),m[0]){case 0:case 1:p=m;break;case 4:return d.label++,{value:m[1],done:!1};case 5:d.label++,f=m[1],m=[0];continue;case 7:m=d.ops.pop(),d.trys.pop();continue;default:if(p=d.trys,!(p=p.length>0&&p[p.length-1])&&(m[0]===6||m[0]===2)){d=0;continue}if(m[0]===3&&(!p||m[1]>p[0]&&m[1]<p[3])){d.label=m[1];break}if(m[0]===6&&d.label<p[1]){d.label=p[1],p=m;break}if(p&&d.label<p[2]){d.label=p[2],d.ops.push(m);break}p[2]&&d.ops.pop(),d.trys.pop();continue}m=u.call(l,d)}catch(v){m=[6,v],f=0}finally{h=p=0}if(m[0]&5)throw m[1];return{value:m[0]?m[1]:void 0,done:!0}}},i=At&&At.__spreadArray||function(l,u,d){if(d||arguments.length===2)for(var h=0,f=u.length,p;h<f;h++)(p||!(h in u))&&(p||(p=Array.prototype.slice.call(u,0,h)),p[h]=u[h]);return l.concat(p||Array.prototype.slice.call(u))};Object.defineProperty(t,"__esModule",{value:!0}),t.getUrl=void 0;var s=Sr(),r=St(),o=function(l){return new Promise(function(u){return window.setTimeout(u,l)})},c=function(l,u){for(var d=[],h=2;h<arguments.length;h++)d[h-2]=arguments[h];return e(void 0,i([l,u],d,!0),void 0,function(f,p,x){var y,g,m,v,S,j,_,I;return x===void 0&&(x=0),n(this,function(L){switch(L.label){case 0:if(typeof f!="function")return[3,10];L.label=1;case 1:return L.trys.push([1,3,,9]),[4,f()];case 2:return y=L.sent(),[3,9];case 3:return L.sent(),p.current.retryOnError?(g=(j=p.current.reconnectAttempts)!==null&&j!==void 0?j:r.DEFAULT_RECONNECT_LIMIT,x<g?(m=typeof p.current.reconnectInterval=="function"?p.current.reconnectInterval(x):p.current.reconnectInterval,[4,o(m??r.DEFAULT_RECONNECT_INTERVAL_MS)]):[3,5]):[3,7];case 4:return L.sent(),[2,(0,t.getUrl)(f,p,x+1)];case 5:return(I=(_=p.current).onReconnectStop)===null||I===void 0||I.call(_,x),[2,null];case 6:return[3,8];case 7:return[2,null];case 8:return[3,9];case 9:return[3,11];case 10:y=f,L.label=11;case 11:return v=p.current.fromSocketIO?(0,s.parseSocketIOUrl)(y):y,S=p.current.queryParams?(0,s.appendQueryParams)(v,p.current.queryParams):v,[2,S]}})})};t.getUrl=c})(At)),At}var ms={},ia;function x2(){return ia||(ia=1,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.websocketWrapper=void 0;var e=function(n,i){return new Proxy(n,{get:function(s,r){var o=s[r];return r==="reconnect"?i:typeof o=="function"?(console.error("Calling methods directly on the websocket is not supported at this moment. You must use the methods returned by useWebSocket."),function(){}):o},set:function(s,r,o){return/^on/.test(r)?(console.warn("The websocket's event handlers should be defined through the options object passed into useWebSocket."),!1):(s[r]=o,!0)}})};t.websocketWrapper=e,t.default=t.websocketWrapper})(ms)),ms}var sa;function jr(){if(sa)return Ke;sa=1;var t=Ke&&Ke.__assign||function(){return t=Object.assign||function(f){for(var p,x=1,y=arguments.length;x<y;x++){p=arguments[x];for(var g in p)Object.prototype.hasOwnProperty.call(p,g)&&(f[g]=p[g])}return f},t.apply(this,arguments)},e=Ke&&Ke.__awaiter||function(f,p,x,y){function g(m){return m instanceof x?m:new x(function(v){v(m)})}return new(x||(x=Promise))(function(m,v){function S(I){try{_(y.next(I))}catch(L){v(L)}}function j(I){try{_(y.throw(I))}catch(L){v(L)}}function _(I){I.done?m(I.value):g(I.value).then(S,j)}_((y=y.apply(f,p||[])).next())})},n=Ke&&Ke.__generator||function(f,p){var x={label:0,sent:function(){if(m[0]&1)throw m[1];return m[1]},trys:[],ops:[]},y,g,m,v=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return v.next=S(0),v.throw=S(1),v.return=S(2),typeof Symbol=="function"&&(v[Symbol.iterator]=function(){return this}),v;function S(_){return function(I){return j([_,I])}}function j(_){if(y)throw new TypeError("Generator is already executing.");for(;v&&(v=0,_[0]&&(x=0)),x;)try{if(y=1,g&&(m=_[0]&2?g.return:_[0]?g.throw||((m=g.return)&&m.call(g),0):g.next)&&!(m=m.call(g,_[1])).done)return m;switch(g=0,m&&(_=[_[0]&2,m.value]),_[0]){case 0:case 1:m=_;break;case 4:return x.label++,{value:_[1],done:!1};case 5:x.label++,g=_[1],_=[0];continue;case 7:_=x.ops.pop(),x.trys.pop();continue;default:if(m=x.trys,!(m=m.length>0&&m[m.length-1])&&(_[0]===6||_[0]===2)){x=0;continue}if(_[0]===3&&(!m||_[1]>m[0]&&_[1]<m[3])){x.label=_[1];break}if(_[0]===6&&x.label<m[1]){x.label=m[1],m=_;break}if(m&&x.label<m[2]){x.label=m[2],x.ops.push(_);break}m[2]&&x.ops.pop(),x.trys.pop();continue}_=p.call(f,x)}catch(I){_=[6,I],g=0}finally{y=m=0}if(_[0]&5)throw _[1];return{value:_[0]?_[1]:void 0,done:!0}}},i=Ke&&Ke.__importDefault||function(f){return f&&f.__esModule?f:{default:f}};Object.defineProperty(Ke,"__esModule",{value:!0}),Ke.useWebSocket=void 0;var s=Fi(),r=oc(),o=St(),c=f2(),l=p2(),u=i(x2()),d=Er(),h=function(f,p,x){p===void 0&&(p=o.DEFAULT_OPTIONS),x===void 0&&(x=!0);var y=(0,s.useState)(null),g=y[0],m=y[1],v=(0,s.useState)({}),S=v[0],j=v[1],_=(0,s.useMemo)(function(){if(!p.disableJson&&g)try{return JSON.parse(g.data)}catch{return o.UNPARSABLE_JSON_OBJECT}return null},[g,p.disableJson]),I=(0,s.useRef)(null),L=(0,s.useRef)(null),H=(0,s.useRef)(function(){}),$=(0,s.useRef)(0),X=(0,s.useRef)(Date.now()),W=(0,s.useRef)([]),ne=(0,s.useRef)(null),ie=(0,s.useRef)(p);ie.current=p;var Q=I.current&&S[I.current]!==void 0?S[I.current]:f!==null&&x===!0?o.ReadyState.CONNECTING:o.ReadyState.UNINSTANTIATED,ee=p.queryParams?JSON.stringify(p.queryParams):null,Z=(0,s.useCallback)(function(se,N){var R;if(N===void 0&&(N=!0),o.isEventSourceSupported&&L.current instanceof EventSource){console.warn("Unable to send a message from an eventSource");return}((R=L.current)===null||R===void 0?void 0:R.readyState)===o.ReadyState.OPEN?((0,d.assertIsWebSocket)(L.current,ie.current.skipAssert),L.current.send(se)):N&&W.current.push(se)},[]),ge=(0,s.useCallback)(function(se,N){N===void 0&&(N=!0),Z(JSON.stringify(se),N)},[Z]),ke=(0,s.useCallback)(function(){return ie.current.share!==!0||o.isEventSourceSupported&&L.current instanceof EventSource?L.current:(ne.current===null&&L.current&&((0,d.assertIsWebSocket)(L.current,ie.current.skipAssert),ne.current=(0,u.default)(L.current,H)),ne.current)},[]);return(0,s.useEffect)(function(){if(f!==null&&x===!0){var se,N=!1,R=!0,re=function(){return e(void 0,void 0,void 0,function(){var ve,Se,oe;return n(this,function(K){switch(K.label){case 0:return ve=I,[4,(0,l.getUrl)(f,ie)];case 1:return ve.current=K.sent(),I.current===null?(console.error("Failed to get a valid URL. WebSocket connection aborted."),I.current="ABORTED",(0,r.flushSync)(function(){return j(function(me){return t(t({},me),{ABORTED:o.ReadyState.CLOSED})})}),[2]):(Se=function(me){N||(0,r.flushSync)(function(){return m(me)})},oe=function(me){N||(0,r.flushSync)(function(){return j(function(Re){var Pe;return t(t({},Re),I.current&&(Pe={},Pe[I.current]=me,Pe))})})},R&&(se=(0,c.createOrJoinSocket)(L,I.current,oe,ie,Se,H,$,X,Z)),[2])}})})};return H.current=function(){N||(ne.current&&(ne.current=null),se?.(),re())},re(),function(){N=!0,R=!1,ne.current&&(ne.current=null),se?.(),m(null)}}else(f===null||x===!1)&&($.current=0,j(function(ve){var Se;return t(t({},ve),I.current&&(Se={},Se[I.current]=o.ReadyState.CLOSED,Se))}))},[f,x,ee,Z]),(0,s.useEffect)(function(){Q===o.ReadyState.OPEN&&W.current.splice(0).forEach(function(se){Z(se)})},[Q]),{sendMessage:Z,sendJsonMessage:ge,lastMessage:g,lastJsonMessage:_,readyState:Q,getWebSocket:ke}};return Ke.useWebSocket=h,Ke}var en={},ra;function g2(){if(ra)return en;ra=1;var t=en&&en.__assign||function(){return t=Object.assign||function(c){for(var l,u=1,d=arguments.length;u<d;u++){l=arguments[u];for(var h in l)Object.prototype.hasOwnProperty.call(l,h)&&(c[h]=l[h])}return c},t.apply(this,arguments)};Object.defineProperty(en,"__esModule",{value:!0}),en.useSocketIO=void 0;var e=Fi(),n=jr(),i=St(),s={type:"empty",payload:null},r=function(c){if(!c||!c.data)return s;var l=c.data.match(/\[.*]/);if(!l)return s;var u=JSON.parse(l);return!Array.isArray(u)||!u[1]?s:{type:u[0],payload:u[1]}},o=function(c,l,u){l===void 0&&(l=i.DEFAULT_OPTIONS),u===void 0&&(u=!0);var d=(0,e.useMemo)(function(){return t(t({},l),{fromSocketIO:!0})},[]),h=(0,n.useWebSocket)(c,d,u),f=h.sendMessage,p=h.sendJsonMessage,x=h.lastMessage,y=h.readyState,g=h.getWebSocket,m=(0,e.useMemo)(function(){return r(x)},[x]);return{sendMessage:f,sendJsonMessage:p,lastMessage:m,lastJsonMessage:m,readyState:y,getWebSocket:g}};return en.useSocketIO=o,en}var Ot={},oa;function m2(){if(oa)return Ot;oa=1;var t=Ot&&Ot.__assign||function(){return t=Object.assign||function(o){for(var c,l=1,u=arguments.length;l<u;l++){c=arguments[l];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(o[d]=c[d])}return o},t.apply(this,arguments)},e=Ot&&Ot.__rest||function(o,c){var l={};for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&c.indexOf(u)<0&&(l[u]=o[u]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,u=Object.getOwnPropertySymbols(o);d<u.length;d++)c.indexOf(u[d])<0&&Object.prototype.propertyIsEnumerable.call(o,u[d])&&(l[u[d]]=o[u[d]]);return l};Object.defineProperty(Ot,"__esModule",{value:!0}),Ot.useEventSource=void 0;var n=Fi(),i=jr(),s=St(),r=function(o,c,l){c===void 0&&(c=s.DEFAULT_EVENT_SOURCE_OPTIONS);var u=c.withCredentials,d=c.events,h=e(c,["withCredentials","events"]);l===void 0&&(l=!0);var f=t(t({},h),{eventSourceOptions:{withCredentials:u}}),p=(0,n.useRef)(s.EMPTY_EVENT_HANDLERS);d&&(p.current=d);var x=(0,i.useWebSocket)(o,f,l),y=x.lastMessage,g=x.readyState,m=x.getWebSocket;return(0,n.useEffect)(function(){y?.type&&Object.entries(p.current).forEach(function(v){var S=v[0],j=v[1];S===y.type&&j(y)})},[y]),{lastEvent:y,readyState:g,getEventSource:m}};return Ot.useEventSource=r,Ot}var aa;function y2(){return aa||(aa=1,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.resetGlobalState=t.useEventSource=t.ReadyState=t.useSocketIO=t.default=void 0;var e=jr();Object.defineProperty(t,"default",{enumerable:!0,get:function(){return e.useWebSocket}});var n=g2();Object.defineProperty(t,"useSocketIO",{enumerable:!0,get:function(){return n.useSocketIO}});var i=St();Object.defineProperty(t,"ReadyState",{enumerable:!0,get:function(){return i.ReadyState}});var s=m2();Object.defineProperty(t,"useEventSource",{enumerable:!0,get:function(){return s.useEventSource}});var r=Er();Object.defineProperty(t,"resetGlobalState",{enumerable:!0,get:function(){return r.resetGlobalState}})})(fs)),fs}var b2=y2();const L0=wa(b2),v2="/assets/discordLogo-D8wyZE9p.png";function k2({sendMessage:t,messages:e,roomId:n}){const i=q(d=>d.user),[s,r]=w.useState(""),{show:o}=ii({id:"chat-message-menu"}),c=w.useRef(null);function l(d){d.preventDefault(),s.trim().length&&(t(n?"/roomChatMessage:"+s+":"+n:"/chatMessage:"+s),r(""))}function u(d,h){o({event:d,props:h})}return w.useEffect(()=>{c.current&&(c.current.scrollTop=c.current.scrollHeight)},[e]),a.jsxs(w2,{children:[!!n&&a.jsx(O2,{children:"PRIVATE ROOM CHAT"}),a.jsx(D2,{ref:c,children:e.map(d=>d.author==="【SERVER】"?a.jsx(ca,{"data-message-id":d.id,onContextMenu:h=>u(h,d),children:a.jsxs(C2,{children:[a.jsx("span",{children:"Server "}),a.jsx("span",{children:" "}),d.message==="Join our Discord!"?a.jsxs(a.Fragment,{children:[a.jsx("a",{href:"https://discord.gg/sBdByGAh2y",target:"_blank",rel:"noopener noreferrer",children:d.message}),a.jsx("img",{alt:"logo",src:v2,height:14,style:{transform:"translate(3px, 2px)"}})]}):d.message]})},d.id):a.jsx(ca,{"data-message-id":d.id,onContextMenu:h=>u(h,d),children:a.jsxs(S2,{isMe:i===d.author,children:[a.jsx("span",{children:d.author+" "}),a.jsx("span",{children:" "}),a.jsx("span",{className:"text",children:d.message})]})},d.id))}),a.jsxs(j2,{onSubmit:l,children:[a.jsx(E2,{value:s,placeholder:"...",onChange:d=>r(d.target.value)}),a.jsx(A2,{className:"button",children:"SEND"})]})]})}const w2=k.div`
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
`,S2=k.span`
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
`,C2=k.span`
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
`,E2=k.input`
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
`,j2=k.form`
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
`,D2=k.div`
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
`,A2=k.button`
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
`,O2=k.span`
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
`,ca=k.div`
    display: flex;
    width: 100%;
    position: relative;
    user-select: text;
    &:hover {
        background: rgba(218, 51, 187, 0.1);
        border-radius: 4px;
    }
`,_2="/assets/crown-Bfs216yl.webp",P2="5.7.3",T2=60,I2=0,R2=210,M2=490,B2=490,L2="gif_count_1",z2=0,N2=[],F2=JSON.parse('[{"ddd":0,"ind":1,"ty":4,"nm":"Num_3 Outlines","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":5,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":59,"s":[100]},{"t":64,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[245.00000000000003,245.00000000000003,0],"ix":2},"a":{"a":0,"k":[245,245,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.683,0.683,0.833],"y":[0.992,0.992,-2.977]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.183,0.183,0.167],"y":[0.46,0.46,42.955]},"t":5,"s":[108,108,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":59,"s":[120,120,100]},{"t":64,"s":[0,0,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-3.76,0.718],[-1.47,0.615],[-2.461,2.256],[-1.162,1.982],[-0.923,3.145],[-0.307,2.392],[-0.136,4.716],[0.513,3.008],[0.684,1.949],[1.094,1.607],[2.325,2.597],[0,0],[-0.718,3.794],[-0.137,5.059],[0.342,3.486],[1.606,4.204],[2.906,2.187],[3.281,0.923],[2.051,0],[0,0],[2.701,-1.299],[2.085,-1.504],[1.88,-3.589],[0.274,-6.357],[0,-1.713],[-7.673,0],[0,0],[-0.154,4.526],[-0.131,0.237],[-1.401,1.23],[-3.76,0],[0,0],[-1.436,-0.752],[-0.888,-1.914],[0.034,-3.794],[0.444,-1.333],[0.889,-0.752],[2.016,-0.513],[1.435,0],[0,0],[0,-4.639],[0,0],[-4.639,0],[0,0],[-1.162,-1.333],[-0.479,-2.735],[0.376,-3.759],[1.983,-1.435],[3.487,0],[0,0],[0.957,0.273],[0.821,0.889],[0.069,2.324],[4.456,0],[0,0],[0,-7.732],[-0.003,-0.119],[-0.027,-0.604],[-2.016,-4.443],[-2.666,-2.05],[-3.247,-0.889],[-3.213,-0.068]],"o":[[0,0],[1.093,0],[3.76,-0.718],[1.469,-0.615],[2.461,-2.256],[1.162,-1.983],[0.923,-3.144],[0.308,-2.393],[0.069,-7.725],[-0.512,-3.008],[-0.683,-1.948],[-1.093,-1.606],[0,0],[1.23,-1.367],[0.717,-3.794],[0.068,-4.306],[-0.342,-3.486],[-1.607,-4.204],[-2.905,-2.188],[-3.281,-0.923],[0,0],[-5.537,0],[-2.7,1.299],[-2.085,1.504],[-1.879,3.588],[-0.033,0.646],[0,7.672],[0,0],[4.529,0],[0.093,-2.761],[0.342,-0.615],[1.401,-1.231],[0,0],[2.461,0],[1.435,0.752],[0.684,1.572],[-0.034,3.794],[-0.444,1.333],[-0.889,0.752],[-2.017,0.513],[0,0],[-4.639,0],[0,0],[0,4.639],[0,0],[1.914,0],[1.162,1.333],[0.547,3.554],[-0.376,3.76],[-1.982,1.436],[0,0],[-2.871,0],[-0.957,-0.274],[-0.82,-0.888],[-0.131,-4.455],[0,0],[-7.732,0],[0,0.118],[0.023,0.934],[0.171,3.862],[2.017,4.443],[2.666,2.051],[3.247,0.888],[0,0]],"v":[[-10.273,70.752],[16.387,70.752],[23.667,69.675],[31.512,67.676],[37.406,63.369],[42.841,57.012],[45.97,49.321],[47.815,41.016],[48.48,30.352],[47.815,14.253],[46.02,6.818],[43.354,1.486],[38.227,-4.819],[43.047,-11.074],[45.97,-18.816],[47.25,-32.095],[46.841,-43.784],[43.919,-55.32],[37.151,-64.907],[27.871,-69.573],[19.872,-70.957],[-19.707,-70.957],[-32.063,-69.009],[-39.24,-64.805],[-45.188,-57.165],[-48.418,-42.246],[-48.467,-38.707],[-34.575,-24.814],[-29.055,-24.814],[-20.659,-32.93],[-20.322,-37.427],[-17.707,-40.195],[-9.965,-42.041],[5.825,-42.041],[11.67,-40.913],[15.156,-36.914],[16.13,-28.865],[15.413,-21.174],[13.413,-18.047],[9.056,-16.15],[3.877,-15.381],[-19.92,-15.381],[-28.32,-6.981],[-28.32,3.802],[-19.92,12.202],[9.517,12.202],[14.13,14.201],[16.591,20.303],[16.849,31.274],[13.31,39.067],[5.107,41.221],[-9.965,41.221],[-15.708,40.811],[-18.374,39.067],[-19.707,34.248],[-27.943,26.25],[-34.549,26.25],[-48.549,40.25],[-48.544,40.604],[-48.469,42.912],[-45.188,55.371],[-38.164,65.112],[-29.294,69.522],[-19.604,70.957]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.46,0.604,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[244.03,244.948],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":65,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Num_2 Outlines","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":123,"s":[100]},{"t":128,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[245.00000000000003,245.00000000000003,0],"ix":2},"a":{"a":0,"k":[245,245,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.683,0.683,0.833],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":64,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.183,0.183,0.167],"y":[0,0,0]},"t":69,"s":[108,108,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":123,"s":[120,120,100]},{"t":128,"s":[0,0,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,7.725],[0,0],[4.639,0],[0,0],[0.429,0.031],[0.511,0.272],[0.273,0.41],[-0.069,1.365],[0,0],[0,0],[-0.819,1.331],[-1.297,0.683],[-3.208,0.409],[0,0],[-1.228,0.273],[-2.56,1.16],[-1.432,1.74],[-1.093,2.081],[-0.682,2.013],[-0.444,3.174],[-0.068,7.44],[0,0],[0.098,1.262],[0.113,1.252],[0,0],[0.121,1.26],[0.41,1.262],[1.091,2.321],[1.194,1.536],[1.57,1.365],[2.048,0.853],[3.242,0.751],[1.98,0],[0,0],[2.867,-0.546],[2.149,-0.75],[2.185,-1.57],[1.979,-3.652],[0.341,-4.47],[0.098,-6.638],[-7.731,-0.114],[-0.069,0],[0,0],[-0.181,4.505],[-0.088,1.3],[-0.819,0.921],[-1.604,0.819],[-2.389,0],[0,0],[-1.161,-0.17],[-1.366,-1.365],[0.409,-6.758],[0,0],[0.921,-1.365],[1.195,-0.375],[4.505,-0.683],[0,0],[4.573,-0.511],[3.139,-0.785],[2.115,-1.024],[1.809,-1.502],[1.604,-2.56],[0.785,-3.106],[0.443,-2.32],[0,-6.689],[0,0],[-7.732,0]],"o":[[0,0],[7.726,-0.009],[0,0],[0,-4.639],[0,0],[-2.074,-0.003],[-0.478,-0.034],[-0.513,-0.274],[-0.546,-0.615],[0,0],[0,0],[0.204,-1.638],[0.819,-1.331],[1.297,-0.682],[0,0],[9.487,-1.091],[1.229,-0.273],[2.559,-1.161],[1.434,-1.741],[1.092,-2.082],[0.683,-2.014],[0.444,-3.174],[0,0],[-0.006,-4.232],[-0.055,-0.712],[0,0],[-0.089,-0.971],[-0.307,-3.208],[-0.41,-1.263],[-1.092,-2.321],[-1.194,-1.536],[-1.57,-1.365],[-2.048,-0.853],[-3.242,-0.75],[0,0],[-2.593,0],[-2.867,0.546],[-2.15,0.751],[-2.184,1.57],[-1.979,3.652],[-0.144,1.876],[-0.115,7.732],[0.07,0.001],[0,0],[4.509,0],[0.06,-1.515],[0.342,-5.05],[0.819,-0.922],[1.604,-0.819],[0,0],[3.277,0],[1.161,0.171],[1.569,1.707],[0,0],[-0.204,2.798],[-0.922,1.365],[-1.194,0.376],[0,0],[-1.16,0.273],[-4.573,0.513],[-3.14,0.785],[-2.117,1.024],[-1.808,1.501],[-1.604,2.559],[-0.785,3.106],[-0.444,2.322],[0,0],[0,7.732],[0,0]],"v":[[-33.149,71.098],[30.861,71.026],[44.847,57.027],[44.847,50.845],[36.446,42.447],[-8.499,42.445],[-12.253,42.395],[-13.736,41.934],[-14.914,40.91],[-15.63,37.941],[-15.529,35.79],[-15.324,29.135],[-13.788,24.682],[-10.615,21.661],[-3.857,20.025],[10.579,17.874],[26.653,15.827],[32.335,13.676],[38.325,9.326],[42.114,3.591],[44.774,-2.552],[46.464,-10.333],[47.232,-26.254],[47.232,-26.973],[47.079,-35.212],[46.826,-38.16],[46.778,-38.673],[46.464,-42.021],[45.39,-48.727],[43.137,-54.102],[39.708,-59.887],[35.561,-64.238],[30.135,-67.565],[22.2,-69.971],[14.368,-71.098],[-14.813,-71.098],[-23.003,-70.279],[-30.527,-68.333],[-37.029,-64.853],[-43.274,-57.02],[-46.755,-44.836],[-47.117,-32.065],[-33.326,-17.859],[-33.119,-17.858],[-25.885,-17.858],[-17.492,-25.922],[-17.27,-30.145],[-15.529,-39.103],[-11.895,-41.714],[-5.904,-42.943],[2.696,-42.943],[9.351,-42.686],[13.14,-40.383],[14.88,-27.686],[14.571,-19.905],[12.883,-13.66],[9.709,-11.049],[1.16,-9.463],[-2.014,-8.849],[-10.615,-7.672],[-22.184,-5.726],[-30.066,-3.013],[-35.954,0.776],[-41.074,6.868],[-44.656,15.366],[-46.499,23.504],[-47.165,37.02],[-47.165,57.098],[-33.165,71.098]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.46,0.604,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[244.668,244.697],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":64,"op":129,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Num_1 Outlines","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":186,"s":[100]},{"t":191,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[245.00000000000003,245.00000000000003,0],"ix":2},"a":{"a":0,"k":[245,245,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.683,0.683,0.833],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":127,"s":[0,0,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.183,0.183,0.167],"y":[0,0,0]},"t":132,"s":[108,108,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":186,"s":[120,120,100]},{"t":191,"s":[0,0,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-4.633,0],[0,0],[0,4.639],[0.006,0.002],[0,0],[7.727,0.01],[0,0],[0,-4.639],[0,0],[-4.639,0],[0,0],[0,0]],"o":[[0,0],[4.64,0.006],[0,-0.002],[0,0],[-0.016,-7.728],[0,0],[-4.639,0],[0,0],[0,4.64],[0,0],[0,0],[0.008,4.633]],"v":[[-0.074,71.193],[15.236,71.193],[23.635,62.799],[23.63,62.792],[23.544,-57.199],[9.534,-71.199],[-15.235,-71.199],[-23.635,-62.798],[-23.635,-50.785],[-15.235,-42.385],[-8.664,-42.385],[-8.474,62.808]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.46,0.604,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[242.035,244.799],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":127,"op":192,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Circle_White Outlines","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.32],"y":[0.94]},"t":183,"s":[100]},{"t":194,"s":[0]}],"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.32],"y":[0.99]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.956]},"o":{"x":[0.32],"y":[0.94]},"t":59,"s":[11]},{"i":{"x":[0.833],"y":[0.868]},"o":{"x":[0.32],"y":[0.98]},"t":73,"s":[-91]},{"i":{"x":[0.247],"y":[0.948]},"o":{"x":[0.32],"y":[0.94]},"t":122,"s":[-105]},{"i":{"x":[0.614],"y":[0.823]},"o":{"x":[0.32],"y":[0.85]},"t":136,"s":[-14.432]},{"i":{"x":[0.596],"y":[0.959]},"o":{"x":[0.32],"y":[0.94]},"t":183,"s":[0]},{"t":196,"s":[-96.432]}],"ix":10},"p":{"a":0,"k":[245.00000000000003,245.00000000000003,0],"ix":2},"a":{"a":0,"k":[245,245,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.32,0.32,0.32],"y":[0.94,0.94,0]},"t":183,"s":[100,100,100]},{"t":194,"s":[106,106,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-7.377,0.138],[0,0],[6.46,-0.889],[0,0]],"o":[[0,0],[-6.674,0.125],[0,0],[7.141,-0.983]],"v":[[7.291,-183.717],[7.624,-166.22],[-12.089,-164.688],[-14.498,-182.024]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[-7.241,1.281],[0,0],[6.262,-1.902],[0,0]],"o":[[0,0],[-6.551,1.158],[0,0],[6.921,-2.102]],"v":[[-21.411,-180.938],[-18.345,-163.705],[-37.577,-159.104],[-42.668,-175.852]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[5.903,-2.872],[0,0],[-6.442,2.288]],"o":[[0,0],[-6.268,2.169],[0,0],[6.089,-2.962],[0,0]],"v":[[-49.326,-173.691],[-43.6,-157.149],[-61.868,-149.574],[-69.516,-165.319],[-50.709,-173.206]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[-6.447,3.448],[0,0],[5.392,-3.769],[0,0]],"o":[[0,0],[-5.833,3.12],[0,0],[5.959,-4.166]],"v":[[-75.75,-162.136],[-67.508,-146.694],[-84.358,-136.347],[-94.373,-150.7]],"c":true},"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[-5.817,4.404],[0,0],[4.747,-4.57],[0,0]],"o":[[0,0],[-5.262,3.985],[0,0],[5.247,-5.052]],"v":[[-100.033,-146.58],[-89.479,-132.62],[-104.506,-119.774],[-116.643,-132.381]],"c":true},"ix":2},"nm":"Path 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":0,"k":{"i":[[-5.052,5.247],[0,0],[3.985,-5.262],[0,0]],"o":[[0,0],[-4.57,4.747],[0,0],[4.404,-5.817]],"v":[[-121.591,-127.433],[-108.984,-115.296],[-121.83,-100.269],[-135.79,-110.823]],"c":true},"ix":2},"nm":"Path 6","mn":"ADBE Vector Shape - Group","hd":false},{"ind":6,"ty":"sh","ix":7,"ks":{"a":0,"k":{"i":[[-4.166,5.959],[0,0],[3.12,-5.834],[0,0]],"o":[[0,0],[-3.769,5.391],[0,0],[3.449,-6.447]],"v":[[-139.91,-105.163],[-125.557,-95.148],[-135.904,-78.298],[-151.346,-86.54]],"c":true},"ix":2},"nm":"Path 7","mn":"ADBE Vector Shape - Group","hd":false},{"ind":7,"ty":"sh","ix":8,"ks":{"a":0,"k":{"i":[[-3.175,6.524],[0,0],[2.169,-6.268],[0,0]],"o":[[0,0],[-2.872,5.902],[0,0],[2.397,-6.928]],"v":[[-154.528,-80.306],[-138.784,-72.658],[-146.358,-54.39],[-162.9,-60.116]],"c":true},"ix":2},"nm":"Path 8","mn":"ADBE Vector Shape - Group","hd":false},{"ind":8,"ty":"sh","ix":9,"ks":{"a":0,"k":{"i":[[-2.102,6.921],[0,0],[1.158,-6.551],[0,0]],"o":[[0,0],[-1.901,6.262],[0,0],[1.28,-7.241]],"v":[[-165.062,-53.458],[-148.314,-48.367],[-152.915,-29.135],[-170.147,-32.202]],"c":true},"ix":2},"nm":"Path 9","mn":"ADBE Vector Shape - Group","hd":false},{"ind":9,"ty":"sh","ix":10,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0.125,-6.675],[0,0],[-0.866,6.68]],"o":[[0,0],[-0.889,6.46],[0,0],[0.129,-6.886],[0,0]],"v":[[-171.234,-25.288],[-153.898,-22.879],[-155.43,-3.166],[-172.927,-3.499],[-171.425,-23.858]],"c":true},"ix":2},"nm":"Path 10","mn":"ADBE Vector Shape - Group","hd":false},{"ind":10,"ty":"sh","ix":11,"ks":{"a":0,"k":{"i":[[-3.12,5.833],[0,0],[4.166,-5.959],[0,0]],"o":[[0,0],[-3.448,6.447],[0,0],[3.77,-5.392]],"v":[[157.485,78.299],[172.926,86.541],[161.491,105.164],[147.138,95.149]],"c":true},"ix":2},"nm":"Path 11","mn":"ADBE Vector Shape - Group","hd":false},{"ind":11,"ty":"sh","ix":12,"ks":{"a":0,"k":{"i":[[-3.986,5.263],[0,0],[5.052,-5.247],[0,0]],"o":[[0,0],[-4.405,5.816],[0,0],[4.57,-4.747]],"v":[[143.412,100.269],[157.372,110.824],[143.172,127.434],[130.565,115.297]],"c":true},"ix":2},"nm":"Path 12","mn":"ADBE Vector Shape - Group","hd":false},{"ind":12,"ty":"sh","ix":13,"ks":{"a":0,"k":{"i":[[-4.748,4.57],[0,0],[5.816,-4.404],[0,0]],"o":[[0,0],[-5.247,5.052],[0,0],[5.263,-3.985]],"v":[[126.087,119.775],[138.224,132.382],[121.614,146.581],[111.059,132.621]],"c":true},"ix":2},"nm":"Path 13","mn":"ADBE Vector Shape - Group","hd":false},{"ind":13,"ty":"sh","ix":14,"ks":{"a":0,"k":{"i":[[-5.392,3.769],[0,0],[6.446,-3.448],[0,0]],"o":[[0,0],[-5.959,4.166],[0,0],[5.833,-3.12]],"v":[[105.939,136.348],[115.955,150.7],[97.332,162.136],[89.089,146.695]],"c":true},"ix":2},"nm":"Path 14","mn":"ADBE Vector Shape - Group","hd":false},{"ind":14,"ty":"sh","ix":15,"ks":{"a":0,"k":{"i":[[-5.902,2.872],[0,0],[6.926,-2.398],[0,0]],"o":[[0,0],[-6.523,3.174],[0,0],[6.268,-2.169]],"v":[[83.448,149.575],[91.096,165.32],[70.907,173.692],[65.181,157.149]],"c":true},"ix":2},"nm":"Path 15","mn":"ADBE Vector Shape - Group","hd":false},{"ind":15,"ty":"sh","ix":16,"ks":{"a":0,"k":{"i":[[-6.262,1.901],[0,0],[7.24,-1.28],[0,0]],"o":[[0,0],[-6.921,2.101],[0,0],[6.552,-1.157]],"v":[[59.158,159.105],[64.249,175.853],[42.993,180.938],[39.925,163.705]],"c":true},"ix":2},"nm":"Path 16","mn":"ADBE Vector Shape - Group","hd":false},{"ind":16,"ty":"sh","ix":17,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[7.376,-0.139],[0,0],[-6.014,0.777]],"o":[[0,0],[-7.14,0.982],[0,0],[6.197,-0.116],[0,0]],"v":[[33.669,164.689],[36.078,182.025],[14.291,183.718],[13.958,166.221],[32.284,164.873]],"c":true},"ix":2},"nm":"Path 17","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[234.209,245],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":18,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-24.617,-0.447]],"o":[[21.128,9.608],[0,0]],"v":[[-34.561,-7.793],[34.561,7.793]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":17.5,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[207.198,412.178],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":60,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[27.608,0.533]],"o":[[-23.211,-12.256],[0,0]],"v":[[38.524,9.942],[-38.524,-9.942]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":28,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[287.755,74.821],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":60,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":195,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Circle_Yellow Outlines 4","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.32],"y":[0.94]},"t":183,"s":[100]},{"t":194,"s":[0]}],"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.469],"y":[0.935]},"o":{"x":[0.346],"y":[-0.035]},"t":0,"s":[-206.557]},{"i":{"x":[0.614],"y":[0.868]},"o":{"x":[0.159],"y":[0.173]},"t":23,"s":[-122.432]},{"i":{"x":[0.596],"y":[0.913]},"o":{"x":[0.407],"y":[-0.017]},"t":58,"s":[-108]},{"i":{"x":[0.792],"y":[1]},"o":{"x":[0.081],"y":[0.152]},"t":86,"s":[-204.432]},{"i":{"x":[0.833],"y":[0.937]},"o":{"x":[0.167],"y":[0]},"t":165,"s":[-236]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[1.371]},"t":195,"s":[-108]},{"i":{"x":[0.833],"y":[0.928]},"o":{"x":[0.167],"y":[0.167]},"t":251,"s":[-97]},{"i":{"x":[0.562],"y":[0.761]},"o":{"x":[0.198],"y":[0.441]},"t":280,"s":[-199]},{"t":291,"s":[-206.557]}],"ix":10},"p":{"a":0,"k":[245.00000000000003,245.00000000000003,0],"ix":2},"a":{"a":0,"k":[245,245,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.32,0.32,0.32],"y":[0.94,0.94,0]},"t":183,"s":[100,100,100]},{"t":194,"s":[106,106,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-27.715,28.938]],"o":[[43.233,0],[0,0]],"v":[[-54.987,23.479],[54.986,-23.479]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5.25,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[299.987,373.771],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":195,"st":-125,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Circle_Yellow Outlines 3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.32],"y":[0.94]},"t":183,"s":[100]},{"t":194,"s":[0]}],"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.812],"y":[1]},"o":{"x":[0.328],"y":[-0.048]},"t":0,"s":[-4.547]},{"i":{"x":[0.833],"y":[0.936]},"o":{"x":[0.167],"y":[0]},"t":70,"s":[-128]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[1.356]},"t":101,"s":[0]},{"i":{"x":[0.833],"y":[0.929]},"o":{"x":[0.167],"y":[0.167]},"t":157,"s":[11]},{"i":{"x":[0.833],"y":[0.874]},"o":{"x":[0.167],"y":[0.865]},"t":185,"s":[-91]},{"i":{"x":[0.247],"y":[0.892]},"o":{"x":[0.158],"y":[-0.011]},"t":232,"s":[-105]},{"i":{"x":[0.567],"y":[0.657]},"o":{"x":[0.178],"y":[0.241]},"t":261,"s":[-14.432]},{"t":291,"s":[-4.547]}],"ix":10},"p":{"a":0,"k":[245.00000000000003,245.00000000000003,0],"ix":2},"a":{"a":0,"k":[245,245,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.32,0.32,0.32],"y":[0.94,0.94,0]},"t":183,"s":[100,100,100]},{"t":194,"s":[106,106,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[82.636,0]],"o":[[0,-82.636],[0,0]],"v":[[74.813,74.813],[-74.813,-74.813]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10.5,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[319.813,170.188],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-0.401,6.132]],"o":[[1.118,-5.908],[0,0]],"v":[[-1.145,9.035],[1.145,-9.035]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10.5,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[393.156,263.959],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":195,"st":-222,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Circle_Yellow Outlines 2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.32],"y":[0.94]},"t":183,"s":[100]},{"t":194,"s":[0]}],"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.247],"y":[0.784]},"o":{"x":[0.158],"y":[-0.023]},"t":0,"s":[-105]},{"i":{"x":[0.614],"y":[0.804]},"o":{"x":[0.159],"y":[0.257]},"t":58,"s":[-14.432]},{"i":{"x":[0.596],"y":[0.916]},"o":{"x":[0.407],"y":[-0.016]},"t":110,"s":[0]},{"i":{"x":[0.792],"y":[1]},"o":{"x":[0.081],"y":[0.152]},"t":137,"s":[-96.432]},{"i":{"x":[0.833],"y":[0.936]},"o":{"x":[0.167],"y":[0]},"t":216,"s":[-128]},{"i":{"x":[0.839],"y":[0.985]},"o":{"x":[0.157],"y":[-0.105]},"t":247,"s":[0]},{"t":291,"s":[-105]}],"ix":10},"p":{"a":0,"k":[245.00000000000003,245.00000000000003,0],"ix":2},"a":{"a":0,"k":[245,245,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.32,0.32,0.32],"y":[0.94,0.94,0]},"t":183,"s":[100,100,100]},{"t":194,"s":[106,106,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,-41.876],[-63.102,-18.585]],"o":[[-27.36,27.526],[0,69.12],[0,0]],"v":[[-10.314,-126.699],[-54.581,-19.369],[54.581,126.698]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5.25,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[147.331,264.368],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":195,"st":-105,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Circle_Yellow Outlines","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.32],"y":[0.94]},"t":183,"s":[100]},{"t":194,"s":[0]}],"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.611],"y":[0.963]},"o":{"x":[0.264],"y":[-0.012]},"t":0,"s":[-10.592]},{"i":{"x":[0.792],"y":[1]},"o":{"x":[0.081],"y":[0.152]},"t":11,"s":[-96.432]},{"i":{"x":[0.833],"y":[0.936]},"o":{"x":[0.167],"y":[0]},"t":90,"s":[-128]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[1.356]},"t":121,"s":[0]},{"i":{"x":[0.833],"y":[0.929]},"o":{"x":[0.167],"y":[0.167]},"t":177,"s":[11]},{"i":{"x":[0.833],"y":[0.874]},"o":{"x":[0.167],"y":[0.865]},"t":205,"s":[-91]},{"i":{"x":[0.247],"y":[0.892]},"o":{"x":[0.158],"y":[-0.011]},"t":252,"s":[-105]},{"i":{"x":[0.576],"y":[0.617]},"o":{"x":[0.229],"y":[0.267]},"t":281,"s":[-14.432]},{"t":291,"s":[-10.592]}],"ix":10},"p":{"a":0,"k":[245.00000000000003,245.00000000000003,0],"ix":2},"a":{"a":0,"k":[245,245,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.32,0.32,0.32],"y":[0.94,0.94,0]},"t":183,"s":[100,100,100]},{"t":194,"s":[106,106,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,26.429],[37.636,32.098]],"o":[[10.489,-22.465],[0,-53.342],[0,0]],"v":[[14.404,103.581],[30.751,29.628],[-30.751,-103.581]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5.25,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[389.249,215.372],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":195,"st":-202,"bm":0},{"ddd":0,"ind":9,"ty":3,"nm":"Null 1","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":129,"ix":10},"p":{"a":0,"k":[242,233,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,-100,100],"ix":6}},"ao":0,"ip":127,"op":177,"st":127,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"Particule Outlines 30","parent":9,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":127,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":139,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":152,"s":[100]},{"t":167,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":127,"s":[1,1,0],"to":[26.512,6.862,0],"ti":[-47.301,-12.243,0]},{"i":{"x":0.824,"y":0.864},"o":{"x":0.19,"y":1},"t":139,"s":[168.563,44.372,0],"to":[8.65,2.239,0],"ti":[-4.848,-1.255,0]},{"t":177,"s":[189.157,49.702,0]}],"ix":2},"a":{"a":0,"k":[431.157,282.702,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[1.413,1.96],[0.082,0.752],[0,0],[0,0],[-1.428,1.949],[-0.69,0.31],[0,0],[0,0],[-2.296,-0.754],[-0.509,-0.56],[0,0],[0,0],[0.009,-2.416],[0.376,-0.657],[0,0],[0,0],[2.3,-0.738],[0.741,0.154]],"o":[[0,0],[-1.96,1.412],[-0.443,-0.614],[0,0],[0,0],[-1.949,-1.427],[0.446,-0.61],[0,0],[0,0],[0.756,-2.295],[0.718,0.238],[0,0],[0,0],[2.416,0.009],[-0.003,0.757],[0,0],[0,0],[0.738,2.301],[-0.721,0.231],[0,0]],"v":[[3.505,12.693],[-2.257,16.846],[-8.364,15.854],[-9.164,13.771],[-9.933,6.711],[-15.662,2.515],[-16.606,-3.6],[-14.872,-5.005],[-8.395,-7.917],[-6.176,-14.664],[-0.651,-17.453],[1.221,-16.236],[5.992,-10.977],[13.094,-10.949],[17.452,-6.557],[16.874,-4.401],[13.347,1.762],[15.516,8.525],[12.686,14.026],[10.456,14.143]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[431.157,282.703],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 10","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":127,"op":177,"st":127,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"Particule Outlines 29","parent":9,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":127,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":139,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":152,"s":[100]},{"t":167,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":127,"s":[1,1,0],"to":[21.416,-17.246,0],"ti":[-38.236,30.79,0]},{"i":{"x":0.824,"y":0.858},"o":{"x":0.191,"y":1},"t":139,"s":[136.364,-108.004,0],"to":[7.008,-5.643,0],"ti":[-3.925,3.161,0]},{"t":177,"s":[153.046,-121.437,0]}],"ix":2},"a":{"a":0,"k":[395.046,111.563,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.968,2.289],[-0.903,1.959],[-0.845,0.389],[-2.289,4.967],[-1.959,-0.903],[-0.39,-0.846],[-4.967,-2.289],[0.902,-1.959],[0.846,-0.389],[2.289,-4.968],[1.959,0.903],[0.389,0.845]],"o":[[-1.959,-0.903],[0.39,-0.844],[4.968,-2.289],[0.902,-1.959],[0.845,0.39],[2.289,4.967],[1.959,0.903],[-0.39,0.845],[-4.967,2.289],[-0.903,1.959],[-0.844,-0.389],[-2.289,-4.968]],"v":[[-14.79,3.275],[-16.703,-1.907],[-14.79,-3.819],[-3.547,-15.062],[1.635,-16.975],[3.547,-15.062],[14.79,-3.819],[16.703,1.363],[14.79,3.275],[3.547,14.519],[-1.635,16.431],[-3.547,14.519]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[395.045,111.834],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":127,"op":177,"st":127,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"Particule Outlines 28","parent":9,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":127,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":139,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":152,"s":[100]},{"t":167,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":127,"s":[1,1,0],"to":[-26.421,9.299,0],"ti":[47.317,-16.654,0]},{"i":{"x":0.824,"y":0.829},"o":{"x":0.194,"y":1},"t":139,"s":[-166.038,59.791,0],"to":[-8.761,3.084,0],"ti":[4.892,-1.722,0]},{"t":177,"s":[-186.875,67.125,0]}],"ix":2},"a":{"a":0,"k":[55.125,300.125,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-5.316,0],[0,-5.315],[5.316,0],[0,5.315]],"o":[[5.316,0],[0,5.315],[-5.316,0],[0,-5.315]],"v":[[0,-9.625],[9.625,0],[0,9.625],[-9.625,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[55.125,300.125],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":127,"op":177,"st":127,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"Particule Outlines 27","parent":9,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":127,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":139,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":152,"s":[100]},{"t":167,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":127,"s":[1,1,0],"to":[-23.622,-14.223,0],"ti":[42.195,25.405,0]},{"i":{"x":0.824,"y":0.853},"o":{"x":0.191,"y":1},"t":139,"s":[-148.314,-88.9,0],"to":[-7.746,-4.663,0],"ti":[4.336,2.611,0]},{"t":177,"s":[-166.75,-100,0]}],"ix":2},"a":{"a":0,"k":[75.25,133,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-4.349,0],[0,-4.349],[4.349,0],[0,4.349]],"o":[[4.349,0],[0,4.349],[-4.349,0],[0,-4.349]],"v":[[0,-7.875],[7.875,0],[0,7.875],[-7.875,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[75.25,133],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":20,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":127,"op":177,"st":127,"bm":0},{"ddd":0,"ind":14,"ty":4,"nm":"Particule Outlines 26","parent":9,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":127,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":139,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":152,"s":[100]},{"t":167,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.355},"t":127,"s":[1,1,0],"to":[-19.915,16.552,0],"ti":[35.174,-29.234,0]},{"i":{"x":0.824,"y":0.961},"o":{"x":0.182,"y":1},"t":139,"s":[-124.771,105.53,0],"to":[-6.221,5.17,0],"ti":[3.522,-2.927,0]},{"t":177,"s":[-139.625,117.875,0]}],"ix":2},"a":{"a":0,"k":[102.375,350.875,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.866,0],[0,-3.866],[3.866,0],[0,3.866]],"o":[[3.866,0],[0,3.866],[-3.866,0],[0,-3.866]],"v":[[0,-7],[7,0],[0,7],[-7,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[102.375,350.875],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":127,"op":177,"st":127,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"Particule Outlines 25","parent":9,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":127,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":139,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":152,"s":[100]},{"t":167,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.358},"t":127,"s":[1,1,0],"to":[25.302,14.42,0],"ti":[-45.596,-25.987,0]},{"i":{"x":0.824,"y":0.771},"o":{"x":0.199,"y":1},"t":139,"s":[161.039,92.213,0],"to":[8.617,4.911,0],"ti":[-4.782,-2.725,0]},{"t":177,"s":[181.5,103.875,0]}],"ix":2},"a":{"a":0,"k":[423.5,336.875,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.866,0],[0,-3.866],[3.866,0],[0,3.866]],"o":[[3.866,0],[0,3.866],[-3.866,0],[0,-3.866]],"v":[[0,-7],[7,0],[0,7],[-7,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[423.5,336.875],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":127,"op":177,"st":127,"bm":0},{"ddd":0,"ind":16,"ty":4,"nm":"Particule Outlines 24","parent":9,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":127,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":139,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":152,"s":[100]},{"t":167,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.358},"t":127,"s":[1,1,0],"to":[-19.483,21.304,0],"ti":[35.063,-38.341,0]},{"i":{"x":0.824,"y":0.784},"o":{"x":0.198,"y":1},"t":139,"s":[-122.222,135.74,0],"to":[-6.597,7.214,0],"ti":[3.666,-4.008,0]},{"t":177,"s":[-137.892,152.875,0]}],"ix":2},"a":{"a":0,"k":[104.108,385.875,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.821,1.761],[-0.695,1.507],[-0.65,0.3],[-1.761,3.82],[-1.507,-0.694],[-0.299,-0.651],[-3.82,-1.761],[0.694,-1.508],[0.651,-0.3],[1.762,-3.82],[1.507,0.694],[0.299,0.651]],"o":[[-1.507,-0.694],[0.299,-0.65],[3.821,-1.761],[0.694,-1.508],[0.65,0.3],[1.762,3.82],[1.508,0.694],[-0.3,0.65],[-3.82,1.761],[-0.694,1.508],[-0.65,-0.3],[-1.761,-3.82]],"v":[[-11.377,2.729],[-12.848,-1.258],[-11.377,-2.728],[-2.728,-11.376],[1.258,-12.849],[2.728,-11.376],[11.377,-2.728],[12.849,1.258],[11.377,2.729],[2.728,11.376],[-1.257,12.849],[-2.728,11.376]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[104.108,385.875],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":127,"op":177,"st":127,"bm":0},{"ddd":0,"ind":17,"ty":4,"nm":"Particule Outlines 23","parent":9,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":127,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":139,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":152,"s":[100]},{"t":167,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":127,"s":[1,1,0],"to":[14.926,23.58,0],"ti":[-26.716,-42.205,0]},{"i":{"x":0.824,"y":0.834},"o":{"x":0.193,"y":1},"t":139,"s":[95.364,150.072,0],"to":[4.937,7.799,0],"ti":[-2.758,-4.357,0]},{"t":177,"s":[107.108,168.625,0]}],"ix":2},"a":{"a":0,"k":[349.108,401.625,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.821,1.761],[-0.694,1.507],[-0.649,0.3],[-1.76,3.82],[-1.507,-0.694],[-0.299,-0.651],[-3.821,-1.761],[0.694,-1.508],[0.65,-0.3],[1.761,-3.82],[1.507,0.694],[0.3,0.651]],"o":[[-1.507,-0.694],[0.3,-0.65],[3.821,-1.761],[0.695,-1.508],[0.65,0.3],[1.761,3.82],[1.507,0.694],[-0.3,0.65],[-3.821,1.761],[-0.694,1.508],[-0.649,-0.3],[-1.76,-3.82]],"v":[[-11.378,2.729],[-12.849,-1.258],[-11.378,-2.728],[-2.729,-11.376],[1.257,-12.849],[2.728,-11.376],[11.377,-2.728],[12.849,1.258],[11.377,2.729],[2.728,11.376],[-1.258,12.849],[-2.729,11.376]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[349.108,401.625],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":127,"op":177,"st":127,"bm":0},{"ddd":0,"ind":18,"ty":4,"nm":"Particule Outlines 22","parent":9,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":127,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":139,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":152,"s":[100]},{"t":167,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.355},"t":127,"s":[1,1,0],"to":[-25.438,6.014,0],"ti":[45.007,-10.64,0]},{"i":{"x":0.824,"y":0.944},"o":{"x":0.183,"y":1},"t":139,"s":[-159.67,38.983,0],"to":[-8.007,1.893,0],"ti":[4.525,-1.07,0]},{"t":177,"s":[-178.777,43.5,0]}],"ix":2},"a":{"a":0,"k":[63.223,276.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[1.932,2.163],[0.192,0.888],[0,0],[0,0],[-1.459,2.506],[-0.785,0.456],[0,0],[0,0],[-2.834,-0.614],[-0.677,-0.605],[0,0],[0,0],[-0.293,-2.884],[0.366,-0.831],[0,0],[0,0],[2.653,-1.17],[0.903,0.092]],"o":[[0,0],[-2.162,1.932],[-0.605,-0.677],[0,0],[0,0],[-2.505,-1.459],[0.457,-0.784],[0,0],[0,0],[0.614,-2.834],[0.887,0.192],[0,0],[0,0],[2.885,-0.292],[0.091,0.904],[0,0],[0,0],[1.17,2.654],[-0.831,0.366],[0,0]],"v":[[5.611,13.679],[-0.241,18.908],[-7.654,18.491],[-8.87,16.104],[-10.531,8.435],[-17.312,4.485],[-19.206,-2.694],[-17.312,-4.588],[-10.531,-8.538],[-8.87,-16.207],[-2.628,-20.227],[-0.241,-19.01],[5.611,-13.782],[13.418,-14.573],[19.171,-9.879],[18.751,-7.232],[15.587,-0.051],[18.751,7.129],[16.064,14.051],[13.418,14.47]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[63.584,276.551],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":127,"op":177,"st":127,"bm":0},{"ddd":0,"ind":19,"ty":4,"nm":"Particule Outlines 21","parent":9,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":127,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":139,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":152,"s":[100]},{"t":167,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":127,"s":[1,1,0],"to":[24.933,-11.516,0],"ti":[-44.507,20.556,0]},{"i":{"x":0.824,"y":0.86},"o":{"x":0.191,"y":1},"t":139,"s":[158.594,-71.787,0],"to":[8.152,-3.765,0],"ti":[-4.567,2.109,0]},{"t":177,"s":[178,-80.75,0]}],"ix":2},"a":{"a":0,"k":[420,152.25,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-4.35,0],[0,-4.349],[4.35,0],[0,4.349]],"o":[[4.35,0],[0,4.349],[-4.35,0],[0,-4.349]],"v":[[0,-7.875],[7.875,0],[0,7.875],[-7.875,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[420,152.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":127,"op":177,"st":127,"bm":0},{"ddd":0,"ind":20,"ty":3,"nm":"Null 1","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":48,"ix":10},"p":{"a":0,"k":[242,233,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":64,"op":114,"st":64,"bm":0},{"ddd":0,"ind":21,"ty":4,"nm":"Particule Outlines 20","parent":20,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":64,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":76,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":89,"s":[100]},{"t":104,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":64,"s":[1,1,0],"to":[26.512,6.862,0],"ti":[-47.301,-12.243,0]},{"i":{"x":0.824,"y":0.864},"o":{"x":0.19,"y":1},"t":76,"s":[168.563,44.372,0],"to":[8.65,2.239,0],"ti":[-4.848,-1.255,0]},{"t":114,"s":[189.157,49.702,0]}],"ix":2},"a":{"a":0,"k":[431.157,282.702,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[1.413,1.96],[0.082,0.752],[0,0],[0,0],[-1.428,1.949],[-0.69,0.31],[0,0],[0,0],[-2.296,-0.754],[-0.509,-0.56],[0,0],[0,0],[0.009,-2.416],[0.376,-0.657],[0,0],[0,0],[2.3,-0.738],[0.741,0.154]],"o":[[0,0],[-1.96,1.412],[-0.443,-0.614],[0,0],[0,0],[-1.949,-1.427],[0.446,-0.61],[0,0],[0,0],[0.756,-2.295],[0.718,0.238],[0,0],[0,0],[2.416,0.009],[-0.003,0.757],[0,0],[0,0],[0.738,2.301],[-0.721,0.231],[0,0]],"v":[[3.505,12.693],[-2.257,16.846],[-8.364,15.854],[-9.164,13.771],[-9.933,6.711],[-15.662,2.515],[-16.606,-3.6],[-14.872,-5.005],[-8.395,-7.917],[-6.176,-14.664],[-0.651,-17.453],[1.221,-16.236],[5.992,-10.977],[13.094,-10.949],[17.452,-6.557],[16.874,-4.401],[13.347,1.762],[15.516,8.525],[12.686,14.026],[10.456,14.143]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[431.157,282.703],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 10","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":64,"op":114,"st":64,"bm":0},{"ddd":0,"ind":22,"ty":4,"nm":"Particule Outlines 19","parent":20,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":64,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":76,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":89,"s":[100]},{"t":104,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":64,"s":[1,1,0],"to":[21.416,-17.246,0],"ti":[-38.236,30.79,0]},{"i":{"x":0.824,"y":0.858},"o":{"x":0.191,"y":1},"t":76,"s":[136.364,-108.004,0],"to":[7.008,-5.643,0],"ti":[-3.925,3.161,0]},{"t":114,"s":[153.046,-121.437,0]}],"ix":2},"a":{"a":0,"k":[395.046,111.563,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.968,2.289],[-0.903,1.959],[-0.845,0.389],[-2.289,4.967],[-1.959,-0.903],[-0.39,-0.846],[-4.967,-2.289],[0.902,-1.959],[0.846,-0.389],[2.289,-4.968],[1.959,0.903],[0.389,0.845]],"o":[[-1.959,-0.903],[0.39,-0.844],[4.968,-2.289],[0.902,-1.959],[0.845,0.39],[2.289,4.967],[1.959,0.903],[-0.39,0.845],[-4.967,2.289],[-0.903,1.959],[-0.844,-0.389],[-2.289,-4.968]],"v":[[-14.79,3.275],[-16.703,-1.907],[-14.79,-3.819],[-3.547,-15.062],[1.635,-16.975],[3.547,-15.062],[14.79,-3.819],[16.703,1.363],[14.79,3.275],[3.547,14.519],[-1.635,16.431],[-3.547,14.519]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[395.045,111.834],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":64,"op":114,"st":64,"bm":0},{"ddd":0,"ind":23,"ty":4,"nm":"Particule Outlines 18","parent":20,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":64,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":76,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":89,"s":[100]},{"t":104,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":64,"s":[1,1,0],"to":[-26.421,9.299,0],"ti":[47.317,-16.654,0]},{"i":{"x":0.824,"y":0.829},"o":{"x":0.194,"y":1},"t":76,"s":[-166.038,59.791,0],"to":[-8.761,3.084,0],"ti":[4.892,-1.722,0]},{"t":114,"s":[-186.875,67.125,0]}],"ix":2},"a":{"a":0,"k":[55.125,300.125,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-5.316,0],[0,-5.315],[5.316,0],[0,5.315]],"o":[[5.316,0],[0,5.315],[-5.316,0],[0,-5.315]],"v":[[0,-9.625],[9.625,0],[0,9.625],[-9.625,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[55.125,300.125],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":64,"op":114,"st":64,"bm":0},{"ddd":0,"ind":24,"ty":4,"nm":"Particule Outlines 17","parent":20,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":64,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":76,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":89,"s":[100]},{"t":104,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":64,"s":[1,1,0],"to":[-23.622,-14.223,0],"ti":[42.195,25.405,0]},{"i":{"x":0.824,"y":0.853},"o":{"x":0.191,"y":1},"t":76,"s":[-148.314,-88.9,0],"to":[-7.746,-4.663,0],"ti":[4.336,2.611,0]},{"t":114,"s":[-166.75,-100,0]}],"ix":2},"a":{"a":0,"k":[75.25,133,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-4.349,0],[0,-4.349],[4.349,0],[0,4.349]],"o":[[4.349,0],[0,4.349],[-4.349,0],[0,-4.349]],"v":[[0,-7.875],[7.875,0],[0,7.875],[-7.875,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[75.25,133],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":20,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":64,"op":114,"st":64,"bm":0},{"ddd":0,"ind":25,"ty":4,"nm":"Particule Outlines 16","parent":20,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":64,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":76,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":89,"s":[100]},{"t":104,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.355},"t":64,"s":[1,1,0],"to":[-19.915,16.552,0],"ti":[35.174,-29.234,0]},{"i":{"x":0.824,"y":0.961},"o":{"x":0.182,"y":1},"t":76,"s":[-124.771,105.53,0],"to":[-6.221,5.17,0],"ti":[3.522,-2.927,0]},{"t":114,"s":[-139.625,117.875,0]}],"ix":2},"a":{"a":0,"k":[102.375,350.875,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.866,0],[0,-3.866],[3.866,0],[0,3.866]],"o":[[3.866,0],[0,3.866],[-3.866,0],[0,-3.866]],"v":[[0,-7],[7,0],[0,7],[-7,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[102.375,350.875],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":64,"op":114,"st":64,"bm":0},{"ddd":0,"ind":26,"ty":4,"nm":"Particule Outlines 15","parent":20,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":64,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":76,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":89,"s":[100]},{"t":104,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.358},"t":64,"s":[1,1,0],"to":[25.302,14.42,0],"ti":[-45.596,-25.987,0]},{"i":{"x":0.824,"y":0.771},"o":{"x":0.199,"y":1},"t":76,"s":[161.039,92.213,0],"to":[8.617,4.911,0],"ti":[-4.782,-2.725,0]},{"t":114,"s":[181.5,103.875,0]}],"ix":2},"a":{"a":0,"k":[423.5,336.875,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.866,0],[0,-3.866],[3.866,0],[0,3.866]],"o":[[3.866,0],[0,3.866],[-3.866,0],[0,-3.866]],"v":[[0,-7],[7,0],[0,7],[-7,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[423.5,336.875],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":64,"op":114,"st":64,"bm":0},{"ddd":0,"ind":27,"ty":4,"nm":"Particule Outlines 14","parent":20,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":64,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":76,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":89,"s":[100]},{"t":104,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.358},"t":64,"s":[1,1,0],"to":[-19.483,21.304,0],"ti":[35.063,-38.341,0]},{"i":{"x":0.824,"y":0.784},"o":{"x":0.198,"y":1},"t":76,"s":[-122.222,135.74,0],"to":[-6.597,7.214,0],"ti":[3.666,-4.008,0]},{"t":114,"s":[-137.892,152.875,0]}],"ix":2},"a":{"a":0,"k":[104.108,385.875,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.821,1.761],[-0.695,1.507],[-0.65,0.3],[-1.761,3.82],[-1.507,-0.694],[-0.299,-0.651],[-3.82,-1.761],[0.694,-1.508],[0.651,-0.3],[1.762,-3.82],[1.507,0.694],[0.299,0.651]],"o":[[-1.507,-0.694],[0.299,-0.65],[3.821,-1.761],[0.694,-1.508],[0.65,0.3],[1.762,3.82],[1.508,0.694],[-0.3,0.65],[-3.82,1.761],[-0.694,1.508],[-0.65,-0.3],[-1.761,-3.82]],"v":[[-11.377,2.729],[-12.848,-1.258],[-11.377,-2.728],[-2.728,-11.376],[1.258,-12.849],[2.728,-11.376],[11.377,-2.728],[12.849,1.258],[11.377,2.729],[2.728,11.376],[-1.257,12.849],[-2.728,11.376]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[104.108,385.875],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":64,"op":114,"st":64,"bm":0},{"ddd":0,"ind":28,"ty":4,"nm":"Particule Outlines 13","parent":20,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":64,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":76,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":89,"s":[100]},{"t":104,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":64,"s":[1,1,0],"to":[14.926,23.58,0],"ti":[-26.716,-42.205,0]},{"i":{"x":0.824,"y":0.834},"o":{"x":0.193,"y":1},"t":76,"s":[95.364,150.072,0],"to":[4.937,7.799,0],"ti":[-2.758,-4.357,0]},{"t":114,"s":[107.108,168.625,0]}],"ix":2},"a":{"a":0,"k":[349.108,401.625,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.821,1.761],[-0.694,1.507],[-0.649,0.3],[-1.76,3.82],[-1.507,-0.694],[-0.299,-0.651],[-3.821,-1.761],[0.694,-1.508],[0.65,-0.3],[1.761,-3.82],[1.507,0.694],[0.3,0.651]],"o":[[-1.507,-0.694],[0.3,-0.65],[3.821,-1.761],[0.695,-1.508],[0.65,0.3],[1.761,3.82],[1.507,0.694],[-0.3,0.65],[-3.821,1.761],[-0.694,1.508],[-0.649,-0.3],[-1.76,-3.82]],"v":[[-11.378,2.729],[-12.849,-1.258],[-11.378,-2.728],[-2.729,-11.376],[1.257,-12.849],[2.728,-11.376],[11.377,-2.728],[12.849,1.258],[11.377,2.729],[2.728,11.376],[-1.258,12.849],[-2.729,11.376]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[349.108,401.625],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":64,"op":114,"st":64,"bm":0},{"ddd":0,"ind":29,"ty":4,"nm":"Particule Outlines 12","parent":20,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":64,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":76,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":89,"s":[100]},{"t":104,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.355},"t":64,"s":[1,1,0],"to":[-25.438,6.014,0],"ti":[45.007,-10.64,0]},{"i":{"x":0.824,"y":0.944},"o":{"x":0.183,"y":1},"t":76,"s":[-159.67,38.983,0],"to":[-8.007,1.893,0],"ti":[4.525,-1.07,0]},{"t":114,"s":[-178.777,43.5,0]}],"ix":2},"a":{"a":0,"k":[63.223,276.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[1.932,2.163],[0.192,0.888],[0,0],[0,0],[-1.459,2.506],[-0.785,0.456],[0,0],[0,0],[-2.834,-0.614],[-0.677,-0.605],[0,0],[0,0],[-0.293,-2.884],[0.366,-0.831],[0,0],[0,0],[2.653,-1.17],[0.903,0.092]],"o":[[0,0],[-2.162,1.932],[-0.605,-0.677],[0,0],[0,0],[-2.505,-1.459],[0.457,-0.784],[0,0],[0,0],[0.614,-2.834],[0.887,0.192],[0,0],[0,0],[2.885,-0.292],[0.091,0.904],[0,0],[0,0],[1.17,2.654],[-0.831,0.366],[0,0]],"v":[[5.611,13.679],[-0.241,18.908],[-7.654,18.491],[-8.87,16.104],[-10.531,8.435],[-17.312,4.485],[-19.206,-2.694],[-17.312,-4.588],[-10.531,-8.538],[-8.87,-16.207],[-2.628,-20.227],[-0.241,-19.01],[5.611,-13.782],[13.418,-14.573],[19.171,-9.879],[18.751,-7.232],[15.587,-0.051],[18.751,7.129],[16.064,14.051],[13.418,14.47]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[63.584,276.551],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":64,"op":114,"st":64,"bm":0},{"ddd":0,"ind":30,"ty":4,"nm":"Particule Outlines 11","parent":20,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":64,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":76,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":89,"s":[100]},{"t":104,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":64,"s":[1,1,0],"to":[24.933,-11.516,0],"ti":[-44.507,20.556,0]},{"i":{"x":0.824,"y":0.86},"o":{"x":0.191,"y":1},"t":76,"s":[158.594,-71.787,0],"to":[8.152,-3.765,0],"ti":[-4.567,2.109,0]},{"t":114,"s":[178,-80.75,0]}],"ix":2},"a":{"a":0,"k":[420,152.25,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-4.35,0],[0,-4.349],[4.35,0],[0,4.349]],"o":[[4.35,0],[0,4.349],[-4.35,0],[0,-4.349]],"v":[[0,-7.875],[7.875,0],[0,7.875],[-7.875,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[420,152.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":64,"op":114,"st":64,"bm":0},{"ddd":0,"ind":31,"ty":3,"nm":"Null 1","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[242,233,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":50,"st":0,"bm":0},{"ddd":0,"ind":32,"ty":4,"nm":"Particule Outlines 10","parent":31,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":12,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":25,"s":[100]},{"t":40,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":0,"s":[1,1,0],"to":[26.512,6.862,0],"ti":[-47.301,-12.243,0]},{"i":{"x":0.824,"y":0.864},"o":{"x":0.19,"y":1},"t":12,"s":[168.563,44.372,0],"to":[8.65,2.239,0],"ti":[-4.848,-1.255,0]},{"t":50,"s":[189.157,49.702,0]}],"ix":2},"a":{"a":0,"k":[431.157,282.702,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[1.413,1.96],[0.082,0.752],[0,0],[0,0],[-1.428,1.949],[-0.69,0.31],[0,0],[0,0],[-2.296,-0.754],[-0.509,-0.56],[0,0],[0,0],[0.009,-2.416],[0.376,-0.657],[0,0],[0,0],[2.3,-0.738],[0.741,0.154]],"o":[[0,0],[-1.96,1.412],[-0.443,-0.614],[0,0],[0,0],[-1.949,-1.427],[0.446,-0.61],[0,0],[0,0],[0.756,-2.295],[0.718,0.238],[0,0],[0,0],[2.416,0.009],[-0.003,0.757],[0,0],[0,0],[0.738,2.301],[-0.721,0.231],[0,0]],"v":[[3.505,12.693],[-2.257,16.846],[-8.364,15.854],[-9.164,13.771],[-9.933,6.711],[-15.662,2.515],[-16.606,-3.6],[-14.872,-5.005],[-8.395,-7.917],[-6.176,-14.664],[-0.651,-17.453],[1.221,-16.236],[5.992,-10.977],[13.094,-10.949],[17.452,-6.557],[16.874,-4.401],[13.347,1.762],[15.516,8.525],[12.686,14.026],[10.456,14.143]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[431.157,282.703],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 10","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":50,"st":0,"bm":0},{"ddd":0,"ind":33,"ty":4,"nm":"Particule Outlines 9","parent":31,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":12,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":25,"s":[100]},{"t":40,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":0,"s":[1,1,0],"to":[21.416,-17.246,0],"ti":[-38.236,30.79,0]},{"i":{"x":0.824,"y":0.858},"o":{"x":0.191,"y":1},"t":12,"s":[136.364,-108.004,0],"to":[7.008,-5.643,0],"ti":[-3.925,3.161,0]},{"t":50,"s":[153.046,-121.437,0]}],"ix":2},"a":{"a":0,"k":[395.046,111.563,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[4.968,2.289],[-0.903,1.959],[-0.845,0.389],[-2.289,4.967],[-1.959,-0.903],[-0.39,-0.846],[-4.967,-2.289],[0.902,-1.959],[0.846,-0.389],[2.289,-4.968],[1.959,0.903],[0.389,0.845]],"o":[[-1.959,-0.903],[0.39,-0.844],[4.968,-2.289],[0.902,-1.959],[0.845,0.39],[2.289,4.967],[1.959,0.903],[-0.39,0.845],[-4.967,2.289],[-0.903,1.959],[-0.844,-0.389],[-2.289,-4.968]],"v":[[-14.79,3.275],[-16.703,-1.907],[-14.79,-3.819],[-3.547,-15.062],[1.635,-16.975],[3.547,-15.062],[14.79,-3.819],[16.703,1.363],[14.79,3.275],[3.547,14.519],[-1.635,16.431],[-3.547,14.519]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[395.045,111.834],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":50,"st":0,"bm":0},{"ddd":0,"ind":34,"ty":4,"nm":"Particule Outlines 8","parent":31,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":12,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":25,"s":[100]},{"t":40,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":0,"s":[1,1,0],"to":[-26.421,9.299,0],"ti":[47.317,-16.654,0]},{"i":{"x":0.824,"y":0.829},"o":{"x":0.194,"y":1},"t":12,"s":[-166.038,59.791,0],"to":[-8.761,3.084,0],"ti":[4.892,-1.722,0]},{"t":50,"s":[-186.875,67.125,0]}],"ix":2},"a":{"a":0,"k":[55.125,300.125,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-5.316,0],[0,-5.315],[5.316,0],[0,5.315]],"o":[[5.316,0],[0,5.315],[-5.316,0],[0,-5.315]],"v":[[0,-9.625],[9.625,0],[0,9.625],[-9.625,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[55.125,300.125],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":50,"st":0,"bm":0},{"ddd":0,"ind":35,"ty":4,"nm":"Particule Outlines 7","parent":31,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":12,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":25,"s":[100]},{"t":40,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":0,"s":[1,1,0],"to":[-23.622,-14.223,0],"ti":[42.195,25.405,0]},{"i":{"x":0.824,"y":0.853},"o":{"x":0.191,"y":1},"t":12,"s":[-148.314,-88.9,0],"to":[-7.746,-4.663,0],"ti":[4.336,2.611,0]},{"t":50,"s":[-166.75,-100,0]}],"ix":2},"a":{"a":0,"k":[75.25,133,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-4.349,0],[0,-4.349],[4.349,0],[0,4.349]],"o":[[4.349,0],[0,4.349],[-4.349,0],[0,-4.349]],"v":[[0,-7.875],[7.875,0],[0,7.875],[-7.875,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[75.25,133],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":20,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":50,"st":0,"bm":0},{"ddd":0,"ind":36,"ty":4,"nm":"Particule Outlines 6","parent":31,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":12,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":25,"s":[100]},{"t":40,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.355},"t":0,"s":[1,1,0],"to":[-19.915,16.552,0],"ti":[35.174,-29.234,0]},{"i":{"x":0.824,"y":0.961},"o":{"x":0.182,"y":1},"t":12,"s":[-124.771,105.53,0],"to":[-6.221,5.17,0],"ti":[3.522,-2.927,0]},{"t":50,"s":[-139.625,117.875,0]}],"ix":2},"a":{"a":0,"k":[102.375,350.875,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.866,0],[0,-3.866],[3.866,0],[0,3.866]],"o":[[3.866,0],[0,3.866],[-3.866,0],[0,-3.866]],"v":[[0,-7],[7,0],[0,7],[-7,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[102.375,350.875],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":50,"st":0,"bm":0},{"ddd":0,"ind":37,"ty":4,"nm":"Particule Outlines 5","parent":31,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":12,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":25,"s":[100]},{"t":40,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.358},"t":0,"s":[1,1,0],"to":[25.302,14.42,0],"ti":[-45.596,-25.987,0]},{"i":{"x":0.824,"y":0.771},"o":{"x":0.199,"y":1},"t":12,"s":[161.039,92.213,0],"to":[8.617,4.911,0],"ti":[-4.782,-2.725,0]},{"t":50,"s":[181.5,103.875,0]}],"ix":2},"a":{"a":0,"k":[423.5,336.875,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.866,0],[0,-3.866],[3.866,0],[0,3.866]],"o":[[3.866,0],[0,3.866],[-3.866,0],[0,-3.866]],"v":[[0,-7],[7,0],[0,7],[-7,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[423.5,336.875],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":50,"st":0,"bm":0},{"ddd":0,"ind":38,"ty":4,"nm":"Particule Outlines 4","parent":31,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":12,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":25,"s":[100]},{"t":40,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.358},"t":0,"s":[1,1,0],"to":[-19.483,21.304,0],"ti":[35.063,-38.341,0]},{"i":{"x":0.824,"y":0.784},"o":{"x":0.198,"y":1},"t":12,"s":[-122.222,135.74,0],"to":[-6.597,7.214,0],"ti":[3.666,-4.008,0]},{"t":50,"s":[-137.892,152.875,0]}],"ix":2},"a":{"a":0,"k":[104.108,385.875,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.821,1.761],[-0.695,1.507],[-0.65,0.3],[-1.761,3.82],[-1.507,-0.694],[-0.299,-0.651],[-3.82,-1.761],[0.694,-1.508],[0.651,-0.3],[1.762,-3.82],[1.507,0.694],[0.299,0.651]],"o":[[-1.507,-0.694],[0.299,-0.65],[3.821,-1.761],[0.694,-1.508],[0.65,0.3],[1.762,3.82],[1.508,0.694],[-0.3,0.65],[-3.82,1.761],[-0.694,1.508],[-0.65,-0.3],[-1.761,-3.82]],"v":[[-11.377,2.729],[-12.848,-1.258],[-11.377,-2.728],[-2.728,-11.376],[1.258,-12.849],[2.728,-11.376],[11.377,-2.728],[12.849,1.258],[11.377,2.729],[2.728,11.376],[-1.257,12.849],[-2.728,11.376]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[104.108,385.875],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":50,"st":0,"bm":0},{"ddd":0,"ind":39,"ty":4,"nm":"Particule Outlines 3","parent":31,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":12,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":25,"s":[100]},{"t":40,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":0,"s":[1,1,0],"to":[14.926,23.58,0],"ti":[-26.716,-42.205,0]},{"i":{"x":0.824,"y":0.834},"o":{"x":0.193,"y":1},"t":12,"s":[95.364,150.072,0],"to":[4.937,7.799,0],"ti":[-2.758,-4.357,0]},{"t":50,"s":[107.108,168.625,0]}],"ix":2},"a":{"a":0,"k":[349.108,401.625,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.821,1.761],[-0.694,1.507],[-0.649,0.3],[-1.76,3.82],[-1.507,-0.694],[-0.299,-0.651],[-3.821,-1.761],[0.694,-1.508],[0.65,-0.3],[1.761,-3.82],[1.507,0.694],[0.3,0.651]],"o":[[-1.507,-0.694],[0.3,-0.65],[3.821,-1.761],[0.695,-1.508],[0.65,0.3],[1.761,3.82],[1.507,0.694],[-0.3,0.65],[-3.821,1.761],[-0.694,1.508],[-0.649,-0.3],[-1.76,-3.82]],"v":[[-11.378,2.729],[-12.849,-1.258],[-11.378,-2.728],[-2.729,-11.376],[1.257,-12.849],[2.728,-11.376],[11.377,-2.728],[12.849,1.258],[11.377,2.729],[2.728,11.376],[-1.258,12.849],[-2.729,11.376]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[349.108,401.625],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":50,"st":0,"bm":0},{"ddd":0,"ind":40,"ty":4,"nm":"Particule Outlines 2","parent":31,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":12,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":25,"s":[100]},{"t":40,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.355},"t":0,"s":[1,1,0],"to":[-25.438,6.014,0],"ti":[45.007,-10.64,0]},{"i":{"x":0.824,"y":0.944},"o":{"x":0.183,"y":1},"t":12,"s":[-159.67,38.983,0],"to":[-8.007,1.893,0],"ti":[4.525,-1.07,0]},{"t":50,"s":[-178.777,43.5,0]}],"ix":2},"a":{"a":0,"k":[63.223,276.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[1.932,2.163],[0.192,0.888],[0,0],[0,0],[-1.459,2.506],[-0.785,0.456],[0,0],[0,0],[-2.834,-0.614],[-0.677,-0.605],[0,0],[0,0],[-0.293,-2.884],[0.366,-0.831],[0,0],[0,0],[2.653,-1.17],[0.903,0.092]],"o":[[0,0],[-2.162,1.932],[-0.605,-0.677],[0,0],[0,0],[-2.505,-1.459],[0.457,-0.784],[0,0],[0,0],[0.614,-2.834],[0.887,0.192],[0,0],[0,0],[2.885,-0.292],[0.091,0.904],[0,0],[0,0],[1.17,2.654],[-0.831,0.366],[0,0]],"v":[[5.611,13.679],[-0.241,18.908],[-7.654,18.491],[-8.87,16.104],[-10.531,8.435],[-17.312,4.485],[-19.206,-2.694],[-17.312,-4.588],[-10.531,-8.538],[-8.87,-16.207],[-2.628,-20.227],[-0.241,-19.01],[5.611,-13.782],[13.418,-14.573],[19.171,-9.879],[18.751,-7.232],[15.587,-0.051],[18.751,7.129],[16.064,14.051],[13.418,14.47]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.698,0.7765,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[63.584,276.551],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":50,"st":0,"bm":0},{"ddd":0,"ind":41,"ty":4,"nm":"Particule Outlines","parent":31,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":12,"s":[100]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":25,"s":[100]},{"t":40,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.618,"y":0.922},"o":{"x":0.21,"y":0.357},"t":0,"s":[1,1,0],"to":[24.933,-11.516,0],"ti":[-44.507,20.556,0]},{"i":{"x":0.824,"y":0.86},"o":{"x":0.191,"y":1},"t":12,"s":[158.594,-71.787,0],"to":[8.152,-3.765,0],"ti":[-4.567,2.109,0]},{"t":50,"s":[178,-80.75,0]}],"ix":2},"a":{"a":0,"k":[420,152.25,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-4.35,0],[0,-4.349],[4.35,0],[0,4.349]],"o":[[4.35,0],[0,4.349],[-4.35,0],[0,-4.349]],"v":[[0,-7.875],[7.875,0],[0,7.875],[-7.875,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9412,0.9647,0.9961,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[420,152.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":50,"st":0,"bm":0},{"ddd":0,"ind":42,"ty":4,"nm":"BG Outlines","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":12,"s":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":183,"s":[100]},{"t":195,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[245.00000000000003,245.00000000000003,0],"ix":2},"a":{"a":0,"k":[245,245,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-72.487,0],[0,-72.487],[72.487,0],[0,72.487]],"o":[[72.487,0],[0,72.487],[-72.487,0],[0,-72.487]],"v":[[0,-131.25],[131.25,0],[0,131.25],[-131.25,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.7216,0.5294,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[245,245],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":20,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-101.482,0],[0,-101.482],[101.482,0],[0,101.482]],"o":[[101.482,0],[0,101.482],[-101.482,0],[0,-101.482]],"v":[[0,-183.75],[183.75,0],[0,183.75],[-183.75,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.7216,0.5294,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[245,245],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":20,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1098,"st":0,"bm":0}]'),$2=[{tm:291,cm:"2",dr:0}],G2={v:P2,fr:T2,ip:I2,op:R2,w:M2,h:B2,nm:L2,ddd:z2,assets:N2,layers:F2,markers:$2};function V2(){const t=Vt(),e=be(s=>s.playButtonClickSfx),n=q(s=>s.me);function i(){e(),vt.post("/api/user/logout").catch(console.error).then(()=>n()).finally(()=>t("/login"))}return a.jsx(U2,{className:"button",onClick:i,children:"LOGOUT➤"})}const U2=k.button`
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
`;function Mi(t){const[e,n]=w.useState(null),[i,s]=w.useState(!1);async function r(){s(!0);try{const o=await vt.get(t);o.data==="false"?n(!1):o.data==="true"?n(!0):n(o.data)}catch(o){console.error(`Failed to fetch ${t}:`,o)}finally{s(!1)}}return w.useState(()=>{r()}),{data:e,isFetching:i,refetch:r}}function ni(t,e){const[n,i]=w.useState(!1);async function s(r){i(!0);try{return(await vt({method:e,url:t+(r?.pathVariable??""),data:r?.payload})).data}catch(o){return console.error(o),dn("Something went wrong!"),null}finally{i(!1)}}return{isPending:n,mutate:s}}function H2({isAdmin:t}){const e=q(o=>o.user),{mutate:n,isPending:i}=ni("/api/report","POST");function s({props:o}){o!==void 0&&vt.delete(`/api/admin/chat/${o.id}`).then(()=>tr("Message deleted!")).catch(c=>dn(c))}async function r({props:o}){o===void 0||i||await n({payload:{embeds:[{fields:[{name:"`From`",value:e,inline:!0},{name:"`Reported User`",value:o.author,inline:!0},{name:"`Global Chat Message:`",value:o.message}]}]}})}return a.jsxs(ac,{id:"chat-message-menu",theme:"dark",children:[t&&a.jsx(Tr,{onClick:s,children:a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[a.jsx("span",{children:"Delete Message"}),a.jsx(Sa,{color:"warning"})]})}),t&&a.jsx(cc,{}),a.jsx(Tr,{onClick:r,children:a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[a.jsx("span",{children:"Report Message"}),a.jsx(o2,{color:"error"})]})})]})}function W2(){const t=window.location.port,e=window.location.origin.replace("https://",""),n=t==="5173"?"ws://192.168.0.26:8080/api/ws/lobby":"wss://"+e+"/api/ws/lobby",i=q(P=>P.user),s=q(P=>P.setActiveDeck),r=q(P=>P.activeDeckId),o=q(P=>P.getActiveDeck),c=q(P=>P.activeDeckReadyState),l=ce(P=>P.setIsRematch),u=fe(P=>P.decks),d=V(P=>P.gameId),h=V(P=>P.setGameId),f=V(P=>P.clearBoard),p=V(P=>P.setIsOpponentOnline),x=be(P=>P.playJoinSfx),y=be(P=>P.playKickSfx),g=be(P=>P.playCountdownSfx),{data:m,isFetching:v}=Mi("/api/user/isAdmin"),{data:S,isFetching:j}=Mi("/api/user/isBanned"),[_,I]=w.useState(!1),[L,H]=w.useState(0),[$,X]=w.useState(0),[W,ne]=w.useState(!1),[ie,Q]=w.useState(!1),[ee,Z]=w.useState(null),[ge,ke]=w.useState([]),[se,N]=w.useState([]),[R,re]=w.useState([]),[ve,Se]=w.useState(""),[oe,K]=w.useState(""),[me,Re]=w.useState(!1),[Pe,Ee]=w.useState(""),[lt,A]=w.useState(!1),[D,C]=w.useState(""),[M,B]=w.useState(!1),[G,J]=w.useState(null),[le,Ce]=w.useState(!1),[pe,de]=w.useState(!1),E=Vt();function b(){p(!0),Q(!1),E("/game")}function O(){Q(!0);const P=setTimeout(()=>Q(!1),5e3);return()=>clearTimeout(P)}const T=L0(n,{shouldReconnect:()=>!0,onMessage:P=>{if(P.data==="[SUCCESS]"&&Q(!1),P.data==="[NO_ACTIVE_DECK]"&&(Ir("No active deck not found! Please refresh if this error should not appear."),s(u[0].id)),P.data==="[BROKEN_DECK]"&&Ir("Cards in your deck could not be found!"),P.data.startsWith("[USER_COUNT]:")&&(H(parseInt(P.data.substring(13))),T.sendMessage("/heartbeat/")),P.data.startsWith("[USER_COUNT_QUICK_PLAY]:")&&X(parseInt(P.data.substring(24))),P.data.startsWith("[ROOMS]:")&&re(JSON.parse(P.data.substring(8))),P.data==="[PROMPT_PASSWORD]"&&(B(!1),C(""),A(!0)),P.data.startsWith("[JOIN_ROOM]:")&&(J(JSON.parse(P.data.substring(12))),Q(!1),Se(""),K(""),A(!1),Re(!1)),P.data.startsWith("[ROOM_UPDATE]:")&&J(JSON.parse(P.data.substring(14))),P.data==="[LEAVE_ROOM]"&&(J(null),N([]),Q(!1),x()),P.data==="[KICKED]"&&(J(null),N([]),y()),P.data==="[PLAYER_JOINED]"&&x(),P.data==="[WRONG_PASSWORD]"&&(Q(!1),B(!0)),P.data.startsWith("[COMPUTE_GAME]:")){localStorage.setItem("isReported",JSON.stringify(!1)),localStorage.removeItem("boardStore");const je=P.data.substring(15);Wt(je)}if(P.data.startsWith("[RECONNECT_ENABLED]:")){const je=P.data.substring(20);ne(je===d)}if(P.data==="[RECONNECT_DISABLED]"&&ne(!1),P.data==="[SESSION_ALREADY_CONNECTED]"&&I(!0),P.data.startsWith("[GLOBAL_CHAT]:")){const je=JSON.parse(P.data.substring(14));ke(je)}if(P.data.startsWith("[CHAT_MESSAGE]:")&&!G){const je=P.data.substring(15),Et=JSON.parse(je);ke(jt=>[...jt,Et])}if(P.data.startsWith("[CHAT_MESSAGE_ROOM]:")){const je=P.data.substring(20),Et=JSON.parse(je);N(jt=>[...jt,Et])}if(P.data.startsWith("[MESSAGE_DELETED]:")){const je=P.data.substring(18);ke(Et=>Et.filter(jt=>jt.id!==je)),N(Et=>Et.filter(jt=>jt.id!==je))}}},!j&&!S);function F(P){s(String(P.target.value))}function U(){O(),Ct();const P=ve.trim().replace(":","∶");T.sendMessage("/createRoom:"+P+":"+oe+":"+me)}function te(P){O(),Ct(),C(""),Ee(P),T.sendMessage("/joinRoom:"+P)}function xe(){O(),T.sendMessage("/password:"+Pe+":"+D)}function Be(){O(),T.sendMessage("/toggleReady:"+G?.id)}function Le(){O(),T.sendMessage("/leave:"+G?.id+":"+i+":true")}function Je(P){O(),T.sendMessage("/kick:"+G?.id+":"+P),y()}function It(){O(),Ct();const P=i+"‗"+G?.players.find(je=>je.name!==i)?.name;T.sendMessage("/startGame:"+G?.id+":"+P)}function Wt(P){g(),de(!0);const je=setTimeout(()=>{h(P),l(!1),f(),Q(!1),J(null),E("/game")},3150);return()=>clearTimeout(je)}function Ct(){Ce(!1),T.sendMessage("/cancelQuickPlay")}function Ae(){le?Ct():(Ce(!0),T.sendMessage("/quickPlay"))}const Rt=w.useCallback(()=>{o()},[o]);w.useEffect(()=>Rt(),[Rt]),w.useEffect(()=>{vt.get(`/api/profile/decks/${r}`).then(P=>Z(P.data))},[r]),w.useEffect(()=>{const P=()=>{G&&T.sendMessage("/leave:"+G.id+":"+i+":false")};return window.addEventListener("beforeunload",P),()=>window.removeEventListener("beforeunload",P)},[G,i,T]);const dt=G?.players.find(P=>P.name===i),W0=c===Un.NOT_FULL||!!G&&(ie||!!G.players.find(P=>!P.ready)||G.players.length<2||G.restrictionsApplied&&c===Un.VIOLATES_RESTRICTIONS),q0=kr("(max-width:499px)");return a.jsxs(yn,{children:[pe&&a.jsx(lc,{open:!0,sx:{background:"rgba(8,8,8,0.5)",pointerEvents:"none"},PaperProps:{sx:{background:"none",overflow:"hidden",boxShadow:"none"}},children:a.jsx(Ht,{animationData:G2})}),a.jsx(ir,{onClose:()=>A(!1),open:lt,children:a.jsx(sr,{children:a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,alignItems:"center",width:300,maxWidth:"100vw"},children:[a.jsx(bs,{value:D,error:M,type:"password",style:{width:"calc(100% - 1.5rem)",border:`2px solid ${M?"crimson":"#1C7540FF"}`},onChange:P=>{C(P.target.value),B(!1)}}),a.jsx(et,{disabled:!D,onClick:xe,style:{width:"50%",minWidth:100,background:"#1C7540FF"},children:M?"wrong password":"Submit"})]})})}),a.jsxs(q2,{children:[a.jsx(or,{opened:!0}),W&&a.jsx(et,{onClick:b,children:"RECONNECT"}),a.jsxs(J2,{children:[_&&a.jsx(Kx,{fontSize:"large",color:"warning"}),[0,3].includes(T.readyState)&&a.jsx(M0,{fontSize:"large",color:"error"}),a.jsx(s2,{sx:{color:"whitesmoke",opacity:.8},fontSize:"large"}),a.jsx("span",{style:{color:"whitesmoke",opacity:.8,lineHeight:1},children:L})]}),!v&&m&&a.jsx(mi,{style:{width:"fit-content",height:"38px",padding:"0 1px 1px 6px",fontSize:"22px",fontFamily:"Pixel Digivolve, sans-serif"},onClick:()=>{E("/administration"),J(null)},className:"button",children:a.jsx("span",{children:"ADMIN⚙️"})}),a.jsx(V2,{})]}),a.jsxs(Y2,{children:[a.jsxs(Q2,{children:[a.jsxs(eg,{children:[a.jsxs(Ws,{children:[a.jsx(ys,{style:{marginBottom:0},children:G?.name??"Room"}),a.jsx(ys,{style:{color:"var(--lobby-accent)"},children:G?"":"Host"}),a.jsx(ys,{style:{gridColumn:"span 2"},children:G?"":"Settings"}),G?i===G.hostName?a.jsx(et,{disabled:W0,onClick:It,children:"START GAME"}):a.jsx(da,{disabled:c===Un.NOT_FULL||G.restrictionsApplied&&c===Un.VIOLATES_RESTRICTIONS,isSearchingGame:!!dt?.ready,onClick:Be,children:"READY"}):a.jsxs(da,{disabled:ie||c===Un.NOT_FULL,onClick:Ae,isSearchingGame:le,children:[le?"Finding Opponent...":"Quick Play"," 👤",$]})]}),a.jsx(K2,{children:G?a.jsx(la,{children:G.players.map(P=>{const je=P.name===i,Et=P.name===G.hostName,jt=i===G.hostName;return a.jsxs(Ws,{children:[a.jsx("img",{alt:P.name+"img",width:96,height:96,style:{transform:"scaleX(-1)"},src:Ts(P.avatarName)}),a.jsx(vs,{children:P.name}),Et?a.jsx("img",{alt:"HOST",width:36,src:_2,style:{justifySelf:"center",gridColumn:"span 2"}}):a.jsx(Z2,{ready:P.ready,style:{justifySelf:"center",gridColumn:"span 2"},children:P.ready?"READY":"NOT READY"}),je&&a.jsx(et,{disabled:ie,onClick:Le,children:"LEAVE"}),!je&&jt&&a.jsx(et,{disabled:ie,onClick:()=>Je(P.name),children:"KICK"})]},P.name)})}):a.jsx(la,{children:R.sort((P,je)=>P.name.localeCompare(je.name)).map(P=>a.jsxs(ng,{children:[a.jsx(vs,{children:P.name}),a.jsxs(vs,{children:[a.jsx("span",{children:P.hostName}),a.jsx("img",{alt:"Host: ",width:24,height:24,src:Ts(P.players.find(je=>je.name===P.hostName)?.avatarName||""),style:{marginLeft:"4px",transform:"translateY(-3px)"}})]}),P.restrictionsApplied?a.jsx(l2,{}):a.jsx("div",{}),P.hasPassword?a.jsx(Zx,{}):a.jsx("div",{}),a.jsx(et,{disabled:ie,onClick:()=>te(P.id),children:"Join"})]},P.id))})})]}),a.jsxs("div",{style:{display:"flex",maxHeight:"100%",justifyContent:"space-between",flexWrap:"wrap",gap:"32px"},children:[!G&&a.jsxs(tg,{children:[a.jsxs(mi,{className:"button",onClick:()=>{E("/decks"),J(null)},children:[a.jsx(d2,{style:{fontSize:50}}),a.jsx("span",{style:{fontFamily:"Naston, sans-serif",fontSize:40},children:"Decks"})]}),a.jsxs(mi,{className:"button",onClick:()=>{E("/test"),J(null)},children:[a.jsx(dc,{style:{fontSize:50}}),a.jsx("span",{style:{fontFamily:"Naston, sans-serif",fontSize:40},children:"Test "})]}),a.jsxs(mi,{className:"button",onClick:()=>{E("/profile"),J(null)},children:[a.jsx(i2,{style:{fontSize:50}}),a.jsx("span",{style:{fontFamily:"Naston, sans-serif",fontSize:40},children:"Profile"})]})]}),a.jsxs(Hs,{style:q0?{order:99,width:"100%"}:{},children:[a.jsx(X2,{value:r,onChange:F,disabled:!!dt?.ready&&G?.hostName!==i||le,children:u.map(P=>a.jsx("option",{value:P.id,children:P.name},P.id))}),!!ee?.mainDeckList?.length&&a.jsx(ar,{deck:ee,lobbyView:!0,inRoom:!!G})]}),!G&&a.jsxs(Hs,{style:{minWidth:300,flex:1,display:"flex",flexDirection:"column",alignItems:"center"},children:[a.jsx(bs,{value:ve,onChange:P=>Se(P.target.value),placeholder:"New room name",style:{marginBottom:"1rem",width:"calc(100% - 24px)",maxHeight:"1.25rem"}}),a.jsx(bs,{value:oe,onChange:P=>K(P.target.value),placeholder:"Password (optional)",style:{marginBottom:"1rem",width:"calc(100% - 24px)",maxHeight:"1.25rem"}}),a.jsx(Us,{disabled:!0,className:"button",checked:me,onClick:()=>Re(!me),control:a.jsx(Ti,{}),sx:{"& .MuiButtonBase-root":{color:"rgba(56, 111, 240, 0.75)!important"},width:"100%",paddingLeft:"10px",transform:"translateY(-6px)"},label:a.jsxs("span",{style:{color:"antiquewhite"},children:["Decks must follow the"," ",a.jsx("a",{href:"https://world.digimoncard.com/rule/restriction_card/",target:"_blank",rel:"noopener noreferrer",onClick:P=>P.stopPropagation(),children:"current restrictions"})]})}),a.jsx(et,{disabled:!ve||ie,onClick:U,style:{width:"250px",height:"36px",marginTop:"auto"},children:"Create Room"})]})]})]}),a.jsx(k2,{sendMessage:T.sendMessage,messages:G?se:ge,roomId:G?.id})]}),a.jsx(I0,{}),a.jsx(H2,{isAdmin:!!m})]})}const q2=k.header`
    width: calc(100% - 32px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 16px;
`,Y2=k.div`
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
`,J2=k.div`
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;
    color: ghostwhite;
    font-size: 28px;
    font-family:
        League Spartan,
        sans-serif;
`,Q2=k.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    flex: 1;
    height: 100%;
`,Hs=k.div`
    padding: 1rem;

    position: relative;
    color: ghostwhite;
    background: rgba(12, 21, 16, 0.25);
    border: 1px solid rgba(124, 124, 118, 0.4);
    border-radius: 3px;
    box-shadow: inset 5px 5px 30px 5px rgba(255, 255, 255, 0.05);
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5));
`,mi=k.div`
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
`,ys=k.span`
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
`,K2=k.div`
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
`,la=k.ul`
    list-style-type: none;
    padding: 0;
`,bs=k.input`
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
`,X2=k.select`
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
`,da=k(et)`
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
`,Z2=k.div`
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
`,vs=k.span`
    font-size: 24px;
    font-family: "League Spartan", sans-serif;
    color: ghostwhite;
    display: flex;
    align-items: center;
`,eg=k(Hs)`
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
`,tg=k.div`
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
`,Ws=k.div`
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
`,ng=k(Ws)`
    border: 1px solid transparent;
    background-color: rgba(0, 68, 192, 0.1);

    &:hover {
        background-color: rgba(218, 51, 187, 0.1);
    }
`,ig=()=>a.jsx(sg,{stacked:!0}),sg=k(uc)`
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
`,rg=window.location.port,og=window.location.origin.replace("https://",""),ag=rg==="5173"?"ws://192.168.0.26:8080/api/ws/game":"wss://"+og+"/api/ws/game";function ua(t,e){if(t>=e+1&&t<=e+8)return e;let s;return t>e+8?s=t-8:s=t-1,s>8&&(s=8),s<0&&(s=0),s}function cg(t){const{clearAttackAnimation:e,restartAttackAnimation:n}=t,i=q(b=>b.user),s=ce(b=>b.setOpenedCardDialog),r=ce(b=>b.setRestartOrder),o=ce(b=>b.setRestartPromptModal),c=ce(b=>b.isRematch),l=ce(b=>b.setIsRematch),u=ce(b=>b.setIsEndDialogOpen),d=ce(b=>b.setEndDialogText),h=ce(b=>b.setOpponentEmote),f=V(b=>b.gameId),p=V(b=>b.setBootStage),x=V(b=>b.setPlayers),y=V(b=>b.setPhase),g=V(b=>b.setMyAttackPhase),m=V(b=>b.setOpponentAttackPhase),v=V(b=>b.distributeCards),S=V(b=>b.setMessages),j=V(b=>b.setAllMessages),_=V(b=>b.setUsernameTurn),I=V(b=>b.moveCard),L=V(b=>b.moveCardToStack),H=V(b=>b.tiltCard),$=V(b=>b.setCardIdWithEffect),X=V(b=>b.setCardIdWithTarget),W=V(b=>b.setMemory),ne=V(b=>b.createToken),ie=V(b=>b.setModifiers),Q=V(b=>b.clearBoard),ee=V(b=>b.phase),Z=V(b=>b.progressToNextPhase),ge=V(b=>b.unsuspendAll),ke=V(b=>b.setStartingPlayer),se=V(b=>b.setIsOpponentOnline),N=V(b=>b.flipCard),R=ce(b=>b.setArrowFrom),re=ce(b=>b.setArrowTo),ve=ce(b=>b.setIsEffectArrow),Se=ce(b=>b.fieldOffset),oe=ce(b=>b.setFieldOffset),K=ce(b=>b.setOpponentFieldOffset),me=f.split("‗").filter(b=>b!==i)[0],Re=be(b=>b.playCoinFlipSfx),Pe=be(b=>b.playButtonClickSfx),Ee=be(b=>b.playDrawCardSfx),lt=be(b=>b.playNextPhaseSfx),A=be(b=>b.playOpponentPlaceCardSfx),D=be(b=>b.playPassTurnSfx),C=be(b=>b.playRevealCardSfx),M=be(b=>b.playSecurityRevealSfx),B=be(b=>b.playShuffleDeckSfx),G=be(b=>b.playSuspendSfx),J=be(b=>b.playTrashCardSfx),le=be(b=>b.playUnsuspendSfx),Ce=be(b=>b.playRematchSfx);function pe(){const b=setTimeout(()=>$(""),2600);return()=>clearTimeout(b)}function de(){const b=setTimeout(()=>X(""),3500);return()=>clearTimeout(b)}const E=L0(ag,{shouldReconnect:()=>!0,onOpen:()=>E.sendMessage("/joinGame:"+f),onMessage:b=>{if(b.data==="[START_GAME]"){ke(""),g(!1),m(!1);return}if(b.data.startsWith("[DISTRIBUTE_CARDS]:")){const O=b.data.substring(19);v(i,O,Ee),s(!1);return}if(b.data.startsWith("[PLAYER_INFO]:")){const O=b.data.substring(14),T=JSON.parse(O);x(T[0],T[1])}if(b.data.startsWith("[SET_BOOT_STAGE]:")){p(parseInt(b.data.substring(17)));return}if(b.data.startsWith("[SET_PHASE]:")){y(b.data.substring(12));return}if(b.data.startsWith("[SET_TURN]:")){_(b.data.substring(11));return}if(b.data.startsWith("[STARTING_PLAYER]")){const O=b.data.substring(18);ke(O),p($i.SHOW_STARTING_PLAYER),c?Ce():Re(),_(O===i?i:me),S(b.data);return}if(b.data.startsWith("[MOVE_CARD]:")){const O=b.data.substring(12).split(":"),T=O?.[0],F=O?.[1],U=O?.[2];T&&F&&U&&I(T,F,U);return}if(b.data.startsWith("[MOVE_CARD_TO_STACK]:")){const O=b.data.substring(21).split(":"),T=O?.[0],F=O?.[1],U=O?.[2],te=O?.[3],xe=O?.[4]==="undefined"?void 0:O?.[4];T&&F&&U&&te&&L(T,F,U,te,xe);return}if(b.data.startsWith("[TILT_CARD]:")){const O=b.data.substring(12).split(":"),T=O?.[0],F=O?.[1];T&&F&&H(T,F,G,le);return}if(b.data.startsWith("[FLIP_CARD]:")){const O=b.data.substring(12).split(":"),T=O?.[0],F=O?.[1];T&&F&&N(T,F);return}if(b.data.startsWith("[ACTIVATE_EFFECT]:")){const O=b.data.substring(18);$(O),pe();return}if(b.data.startsWith("[ACTIVATE_TARGET]:")){const O=b.data.substring(18);X(O),de();return}if(b.data.startsWith("[UPDATE_MEMORY]:")){const O=b.data.substring(16);W(parseInt(O));return}if(b.data.startsWith("[CHAT_MESSAGE]:")){const O=b.data.substring(15);S(O);return}if(b.data.startsWith("[CHAT_HISTORY]:")){const O=b.data.substring(15);try{const T=JSON.parse(O);j(T)}catch{console.warn("Failed to parse chat history:",O)}return}if(b.data.startsWith("[EMOTE]:")){const O=b.data.substring(8);h(O);return}if(b.data.startsWith("[ATTACK]:")){const O=b.data.substring(9).split(":");if(O.length<3)return;const T=O[0]?.match(/\d+/),F=O[1]?.match(/\d+/);if(T?.length>0&&F?.length>0&&T[0]&&F[0]){const U=Number(T[0]);K(ua(U,Se));const te=Number(F[0]);oe(ua(te,Se))}e?.(),R(O[0]),re(O[1]),ve(O[2]==="true"),n(O[2]==="true");return}if(b.data.startsWith("[OPPONENT_ATTACK_PHASE]:")){const O=b.data.substring(24);m(O==="false"?!1:O);return}if(b.data.startsWith("[CREATE_TOKEN]:")){const O=b.data.substring(15).split(":");if(O.length<2)return;const T=O[0],F=O[1],U=hc(F);U&&ne(U,jn.OPPONENT,T);return}if(b.data.startsWith("[SET_MODIFIERS]:")){const O=b.data.substring(16).split(":");if(O.length<3)return;const T=O[0],F=O[1];try{const U=JSON.parse(O.slice(2).join(":"));ie(T,F,U)}catch{console.warn("Failed to parse modifiers:",O.slice(2).join(":"))}return}if(b.data.includes("SFX"))switch(b.data){case"[REVEAL_SFX]":{C();break}case"[SECURITY_REVEAL_SFX]":{M();break}case"[PLACE_CARD_SFX]":{A();break}case"[DRAW_CARD_SFX]":{Ee();break}case"[SUSPEND_CARD_SFX]":{G();break}case"[UNSUSPEND_CARD_SFX]":{le();break}case"[BUTTON_CLICK_SFX]":{Pe();break}case"[TRASH_CARD_SFX]":{J();break}case"[SHUFFLE_DECK_SFX]":{B();break}case"[NEXT_PHASE_SFX]":{lt();break}case"[PASS_TURN_SFX]":{D();break}}switch(b.data){case"[HEARTBEAT]":{E.sendMessage(`${f}:/heartbeat`);break}case"[SURRENDER]":{u(!0),d("🎉 Your opponent surrendered!");break}case"[SECURITY_VIEWED]":{pc("Opponent opened Security Stack!");break}case"[RESTART_AS_FIRST]":{r("second"),o(!0);break}case"[RESTART_AS_SECOND]":{r("first"),o(!0);break}case"[ACCEPT_RESTART]":{g(!1),m(!1),Q(),l(!0),u(!1);break}case"[UPDATE_PHASE]":{ee===Ei.MAIN&&_(i),Z();break}case"[RESOLVE_COUNTER_BLOCK]":{g(fc.RESOLVE_ATTACK);break}case"[UNSUSPEND_ALL]":{ge(jn.OPPONENT);break}case"[OPPONENT_DISCONNECTED]":{se(!1);break}case"[OPPONENT_RECONNECTED]":{se(!0);break}}}});return{sendMessage:E.sendMessage}}const lg="/assets/opponent-security-apng-DRTWwoRK.png",dg=1,ug=300,hg=300,fg={g:"@lottiefiles/toolkit-js 0.33.2"},pg=JSON.parse('[{"ty":3,"sr":1,"st":0,"op":41,"ip":0,"ddd":1,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[69,69,69]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[150,241,0]},"sa":{"a":0,"k":0},"o":{"a":0,"k":0},"rx":{"a":0,"k":0},"ry":{"a":0,"k":0},"rz":{"a":0,"k":0},"or":{"a":0,"k":[0,0,0]}},"ef":[],"ind":1},{"ty":3,"sr":1,"st":0,"op":41,"ip":0,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[960,540,0]},"s":{"a":0,"k":[100,100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[150,150,0]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"ef":[],"ind":2},{"ty":4,"sr":1,"st":20,"op":41,"ip":30,"ddd":1,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[9.96,-80.75,0]},"s":{"a":0,"k":[-100,100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-9.96,-218.75,0]},"sa":{"a":0,"k":0},"o":{"a":0,"k":100},"rx":{"a":0,"k":0},"ry":{"a":0,"k":0},"rz":{"a":0,"k":0},"or":{"a":0,"k":[0,0,0]}},"ef":[],"shapes":[{"ty":"gr","bm":0,"it":[{"ty":"sh","bm":0,"d":1,"ks":{"a":1,"k":[{"o":{"x":0.33,"y":0},"i":{"x":0.83,"y":1},"s":[{"c":true,"i":[[8,11.5],[-2,-30.75],[2.25,9]],"o":[[9.5,18.75],[1,-15.75],[-2.25,-9]],"v":[[1.5,-116.75],[15,-44.75],[17.75,-92.25]]}],"t":20},{"o":{"x":0.17,"y":0},"i":{"x":0.83,"y":1},"s":[{"c":true,"i":[[3.75,7.11],[-1.05,-25.58],[0.55,10.69]],"o":[[1.04,22.5],[3.12,-15.62],[-0.56,-10.86]],"v":[[1.14,-118.02],[3.77,-44.39],[9.24,-87.54]]}],"t":25},{"o":{"x":0.17,"y":0},"i":{"x":0.83,"y":1},"s":[{"c":true,"i":[[0.58,7.74],[-1.05,-25.58],[0,11.23]],"o":[[1.04,22.5],[-0.05,-15.17],[0,-10.87]],"v":[[-5.2,-97.91],[-4.02,-45.47],[-4.17,-75.95]]}],"t":30},{"o":{"x":0.17,"y":0},"i":{"x":0.67,"y":1},"s":[{"c":true,"i":[[3.75,7.11],[-1.05,-25.58],[0.55,10.69]],"o":[[1.04,22.5],[3.12,-15.62],[-0.56,-10.86]],"v":[[1.14,-118.02],[3.77,-44.39],[9.24,-87.54]]}],"t":35},{"s":[{"c":true,"i":[[8,11.5],[-2,-30.75],[2.25,9]],"o":[[9.5,18.75],[1,-15.75],[-2.25,-9]],"v":[[1.5,-116.75],[15,-44.75],[17.75,-92.25]]}],"t":40}]}},{"ty":"st","bm":0,"lc":1,"lj":1,"ml":4,"o":{"a":0,"k":100},"w":{"a":0,"k":0},"c":{"a":0,"k":[0.5451,0.8314,0.8745]}},{"ty":"fl","bm":0,"c":{"a":0,"k":[0.902,0.6,0.6]},"r":1,"o":{"a":0,"k":100}},{"ty":"tr","a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[0,0]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}}]}],"ind":3,"parent":1},{"ty":4,"sr":1,"st":0,"op":20,"ip":10,"ddd":1,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[9.96,-80.75,0]},"s":{"a":0,"k":[-100,100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[-9.96,-218.75,0]},"sa":{"a":0,"k":0},"o":{"a":0,"k":100},"rx":{"a":0,"k":0},"ry":{"a":0,"k":0},"rz":{"a":0,"k":0},"or":{"a":0,"k":[0,0,0]}},"ef":[],"shapes":[{"ty":"gr","bm":0,"it":[{"ty":"sh","bm":0,"d":1,"ks":{"a":1,"k":[{"o":{"x":0.33,"y":0},"i":{"x":0.83,"y":1},"s":[{"c":true,"i":[[8,11.5],[-2,-30.75],[2.25,9]],"o":[[9.5,18.75],[1,-15.75],[-2.25,-9]],"v":[[1.5,-116.75],[15,-44.75],[17.75,-92.25]]}],"t":0},{"o":{"x":0.17,"y":0},"i":{"x":0.83,"y":1},"s":[{"c":true,"i":[[3.75,7.11],[-1.05,-25.58],[0.55,10.69]],"o":[[1.04,22.5],[3.12,-15.62],[-0.56,-10.86]],"v":[[1.14,-118.02],[3.77,-44.39],[9.24,-87.54]]}],"t":5},{"o":{"x":0.17,"y":0},"i":{"x":0.83,"y":1},"s":[{"c":true,"i":[[0.58,7.74],[-1.05,-25.58],[0,11.23]],"o":[[1.04,22.5],[-0.05,-15.17],[0,-10.87]],"v":[[-5.2,-97.91],[-4.02,-45.47],[-4.17,-75.95]]}],"t":10},{"o":{"x":0.17,"y":0},"i":{"x":0.67,"y":1},"s":[{"c":true,"i":[[3.75,7.11],[-1.05,-25.58],[0.55,10.69]],"o":[[1.04,22.5],[3.12,-15.62],[-0.56,-10.86]],"v":[[1.14,-118.02],[3.77,-44.39],[9.24,-87.54]]}],"t":15},{"s":[{"c":true,"i":[[8,11.5],[-2,-30.75],[2.25,9]],"o":[[9.5,18.75],[1,-15.75],[-2.25,-9]],"v":[[1.5,-116.75],[15,-44.75],[17.75,-92.25]]}],"t":20}]}},{"ty":"st","bm":0,"lc":1,"lj":1,"ml":4,"o":{"a":0,"k":100},"w":{"a":0,"k":0},"c":{"a":0,"k":[0.5451,0.8314,0.8745]}},{"ty":"fl","bm":0,"c":{"a":0,"k":[0.902,0.6,0.6]},"r":1,"o":{"a":0,"k":100}},{"ty":"tr","a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[0,0]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}}]}],"ind":4,"parent":1},{"ty":4,"sr":1,"st":20,"op":30,"ip":20,"ddd":1,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[9.96,-80.75,0]},"s":{"a":1,"k":[{"o":{"x":0.33,"y":0},"i":{"x":0.67,"y":1},"s":[0,0,0],"t":20},{"s":[100,100,100],"t":25}]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[9.96,-218.75,0]},"sa":{"a":0,"k":0},"o":{"a":0,"k":100},"rx":{"a":0,"k":0},"ry":{"a":0,"k":0},"rz":{"a":0,"k":0},"or":{"a":0,"k":[0,0,0]}},"ef":[],"shapes":[{"ty":"gr","bm":0,"it":[{"ty":"sh","bm":0,"d":1,"ks":{"a":1,"k":[{"o":{"x":0.33,"y":0},"i":{"x":0.83,"y":1},"s":[{"c":true,"i":[[8,11.5],[-2,-30.75],[2.25,9]],"o":[[9.5,18.75],[1,-15.75],[-2.25,-9]],"v":[[1.5,-116.75],[15,-44.75],[17.75,-92.25]]}],"t":20},{"o":{"x":0.17,"y":0},"i":{"x":0.83,"y":1},"s":[{"c":true,"i":[[3.75,7.11],[-1.05,-25.58],[0.55,10.69]],"o":[[1.04,22.5],[3.12,-15.62],[-0.56,-10.86]],"v":[[1.14,-118.02],[3.77,-44.39],[9.24,-87.54]]}],"t":25},{"o":{"x":0.17,"y":0},"i":{"x":0.83,"y":1},"s":[{"c":true,"i":[[0.58,7.74],[-1.05,-25.58],[0,11.23]],"o":[[1.04,22.5],[-0.05,-15.17],[0,-10.87]],"v":[[-5.2,-97.91],[-4.02,-45.47],[-4.17,-75.95]]}],"t":30},{"o":{"x":0.17,"y":0},"i":{"x":0.67,"y":1},"s":[{"c":true,"i":[[3.75,7.11],[-1.05,-25.58],[0.55,10.69]],"o":[[1.04,22.5],[3.12,-15.62],[-0.56,-10.86]],"v":[[1.14,-118.02],[3.77,-44.39],[9.24,-87.54]]}],"t":35},{"s":[{"c":true,"i":[[8,11.5],[-2,-30.75],[2.25,9]],"o":[[9.5,18.75],[1,-15.75],[-2.25,-9]],"v":[[1.5,-116.75],[15,-44.75],[17.75,-92.25]]}],"t":40}]}},{"ty":"st","bm":0,"lc":1,"lj":1,"ml":4,"o":{"a":0,"k":100},"w":{"a":0,"k":0},"c":{"a":0,"k":[0.5451,0.8314,0.8745]}},{"ty":"fl","bm":0,"c":{"a":0,"k":[0.902,0.6,0.6]},"r":1,"o":{"a":0,"k":100}},{"ty":"tr","a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[0,0]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}}]}],"ind":5,"parent":1},{"ty":4,"sr":1,"st":0,"op":10,"ip":0,"ddd":1,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[9.96,-80.75,0]},"s":{"a":1,"k":[{"o":{"x":0.33,"y":0},"i":{"x":0.67,"y":1},"s":[0,0,0],"t":0},{"s":[100,100,100],"t":5}]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[9.96,-218.75,0]},"sa":{"a":0,"k":0},"o":{"a":0,"k":100},"rx":{"a":0,"k":0},"ry":{"a":0,"k":0},"rz":{"a":0,"k":0},"or":{"a":0,"k":[0,0,0]}},"ef":[],"shapes":[{"ty":"gr","bm":0,"it":[{"ty":"sh","bm":0,"d":1,"ks":{"a":1,"k":[{"o":{"x":0.33,"y":0},"i":{"x":0.83,"y":1},"s":[{"c":true,"i":[[8,11.5],[-2,-30.75],[2.25,9]],"o":[[9.5,18.75],[1,-15.75],[-2.25,-9]],"v":[[1.5,-116.75],[15,-44.75],[17.75,-92.25]]}],"t":0},{"o":{"x":0.17,"y":0},"i":{"x":0.83,"y":1},"s":[{"c":true,"i":[[3.75,7.11],[-1.05,-25.58],[0.55,10.69]],"o":[[1.04,22.5],[3.12,-15.62],[-0.56,-10.86]],"v":[[1.14,-118.02],[3.77,-44.39],[9.24,-87.54]]}],"t":5},{"o":{"x":0.17,"y":0},"i":{"x":0.83,"y":1},"s":[{"c":true,"i":[[0.58,7.74],[-1.05,-25.58],[0,11.23]],"o":[[1.04,22.5],[-0.05,-15.17],[0,-10.87]],"v":[[-5.2,-97.91],[-4.02,-45.47],[-4.17,-75.95]]}],"t":10},{"o":{"x":0.17,"y":0},"i":{"x":0.67,"y":1},"s":[{"c":true,"i":[[3.75,7.11],[-1.05,-25.58],[0.55,10.69]],"o":[[1.04,22.5],[3.12,-15.62],[-0.56,-10.86]],"v":[[1.14,-118.02],[3.77,-44.39],[9.24,-87.54]]}],"t":15},{"s":[{"c":true,"i":[[8,11.5],[-2,-30.75],[2.25,9]],"o":[[9.5,18.75],[1,-15.75],[-2.25,-9]],"v":[[1.5,-116.75],[15,-44.75],[17.75,-92.25]]}],"t":20}]}},{"ty":"st","bm":0,"lc":1,"lj":1,"ml":4,"o":{"a":0,"k":100},"w":{"a":0,"k":0},"c":{"a":0,"k":[0.5451,0.8314,0.8745]}},{"ty":"fl","bm":0,"c":{"a":0,"k":[0.902,0.6,0.6]},"r":1,"o":{"a":0,"k":100}},{"ty":"tr","a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[0,0]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}}]}],"ind":6,"parent":1},{"ty":4,"sr":1,"st":0,"op":41,"ip":0,"ddd":1,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[100,100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[0,-138,0]},"sa":{"a":0,"k":0},"o":{"a":0,"k":100},"rx":{"a":0,"k":0},"ry":{"a":0,"k":0},"rz":{"a":0,"k":0},"or":{"a":0,"k":[0,0,0]}},"ef":[],"shapes":[{"ty":"gr","bm":0,"it":[{"ty":"sh","bm":0,"d":1,"ks":{"a":1,"k":[{"o":{"x":1,"y":0},"i":{"x":0.83,"y":0.83},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[0.5,-136],[-26,-95.87],[-19.75,27.75],[20,28],[27.5,-96]]}],"t":0},{"o":{"x":0.17,"y":0.17},"i":{"x":0.67,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[0.38,-136.27],[-16.69,-94.05],[-10.16,30.17],[10.49,28.89],[22.18,-101.45]]}],"t":5},{"o":{"x":0.33,"y":0},"i":{"x":0.83,"y":0.83},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[0.25,-136.55],[-7.3,-94.29],[-3.06,27.59],[3.48,27.61],[8.09,-106.54]]}],"t":10},{"o":{"x":0.17,"y":0.17},"i":{"x":0,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[0.38,-136.27],[-19.95,-100.17],[-10.16,27.67],[10.49,30.31],[16.56,-96.42]]}],"t":15},{"o":{"x":1,"y":0},"i":{"x":0.83,"y":0.83},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[0.5,-134.87],[-26,-95.87],[-19.75,28.88],[20,29.13],[27.5,-94.87]]}],"t":20},{"o":{"x":0.17,"y":0.17},"i":{"x":0.67,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[0.38,-136.27],[-16.69,-94.05],[-10.16,30.17],[10.49,28.89],[22.18,-101.45]]}],"t":25},{"o":{"x":0.33,"y":0},"i":{"x":0.83,"y":0.83},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[0.25,-136.55],[-7.3,-94.29],[-3.06,27.59],[3.48,27.61],[8.09,-106.54]]}],"t":30},{"o":{"x":0.17,"y":0.17},"i":{"x":0,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[0.38,-136.27],[-19.95,-100.17],[-10.16,27.67],[10.49,30.31],[16.56,-96.42]]}],"t":35},{"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[0.5,-134.87],[-26,-95.87],[-19.75,28.88],[20,29.13],[27.5,-94.87]]}],"t":40}]}},{"ty":"st","bm":0,"lc":1,"lj":1,"ml":4,"o":{"a":0,"k":100},"w":{"a":0,"k":0},"c":{"a":0,"k":[0.5451,0.8314,0.8745]}},{"ty":"fl","bm":0,"c":{"a":0,"k":[1,1,1]},"r":1,"o":{"a":0,"k":100}},{"ty":"tr","a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[0,0]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}}]}],"ind":7,"parent":1},{"ty":4,"sr":1,"st":0,"op":41,"ip":0,"ddd":1,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[101,101,101]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[0,-138,0]},"sa":{"a":0,"k":0},"o":{"a":0,"k":100},"rx":{"a":0,"k":0},"ry":{"a":0,"k":0},"rz":{"a":0,"k":0},"or":{"a":0,"k":[0,0,0]}},"ef":[],"shapes":[{"ty":"gr","bm":0,"it":[{"ty":"sh","bm":0,"d":1,"ks":{"a":1,"k":[{"o":{"x":1,"y":0},"i":{"x":0.83,"y":0.83},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[55.77,40.51],[-55.76,40.76],[-68.64,55.89],[-56,70.64],[-19.01,70.52],[-19,119.9],[0.02,136.26],[18.87,119.9],[19.25,70.76],[55.39,70.76],[69.01,55.26]]}],"t":0},{"o":{"x":0.17,"y":0.17},"i":{"x":0.67,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[29.87,37.38],[-29.36,43.36],[-36.52,58.68],[-28.26,70.83],[-10.53,71.26],[-10.03,120.95],[0.02,136.51],[10.08,120.95],[11.02,71.38],[31.74,71.6],[38.03,53.38]]}],"t":5},{"o":{"x":0.33,"y":0},"i":{"x":0.83,"y":0.83},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[6.44,41],[-5.44,41.01],[-5.07,56.51],[-4.44,72],[-4.53,72],[-3.53,122],[0.02,136.75],[3.15,122],[5.27,72],[5.19,72],[5.94,56.44]]}],"t":10},{"o":{"x":0.17,"y":0.17},"i":{"x":0,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[28.79,43.95],[-29.36,37.51],[-40.1,53.73],[-29.7,72.97],[-10.53,71.26],[-10.03,120.95],[0.02,136.51],[10.08,120.95],[11.02,71.38],[29.05,69.01],[37.67,56.89]]}],"t":15},{"o":{"x":1,"y":0},"i":{"x":0.83,"y":0.83},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[55.77,40.51],[-55.76,40.76],[-68.64,55.89],[-56,70.64],[-19.01,70.52],[-19,119.9],[0.02,136.26],[18.87,119.9],[19.25,70.76],[55.39,70.76],[69.01,55.26]]}],"t":20},{"o":{"x":0.17,"y":0.17},"i":{"x":0.67,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[29.87,37.38],[-29.36,43.36],[-36.52,58.68],[-28.26,70.83],[-10.53,71.26],[-10.03,120.95],[0.02,136.51],[10.08,120.95],[11.02,71.38],[31.74,71.6],[38.03,53.38]]}],"t":25},{"o":{"x":0.33,"y":0},"i":{"x":0.83,"y":0.83},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[6.44,41],[-5.44,41.01],[-5.07,56.51],[-4.44,72],[-4.53,72],[-3.53,122],[0.02,136.75],[3.15,122],[5.27,72],[5.19,72],[5.94,56.44]]}],"t":30},{"o":{"x":0.17,"y":0.17},"i":{"x":0,"y":1},"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[28.79,43.95],[-29.36,37.51],[-40.1,53.73],[-29.7,72.97],[-10.53,71.26],[-10.03,120.95],[0.02,136.51],[10.08,120.95],[11.02,71.38],[29.05,69.01],[37.67,56.89]]}],"t":35},{"s":[{"c":true,"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[55.77,40.51],[-55.76,40.76],[-68.64,55.89],[-56,70.64],[-19.01,70.52],[-19,119.9],[0.02,136.26],[18.87,119.9],[19.25,70.76],[55.39,70.76],[69.01,55.26]]}],"t":40}]}},{"ty":"st","bm":0,"lc":1,"lj":1,"ml":4,"o":{"a":0,"k":100},"w":{"a":0,"k":0},"c":{"a":0,"k":[0.5451,0.8314,0.8745]}},{"ty":"fl","bm":0,"c":{"a":0,"k":[1,1,1]},"r":1,"o":{"a":0,"k":100}},{"ty":"tr","a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[0,0]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}}]}],"ind":8,"parent":1}]'),xg="5.7.0",gg=30,mg=41,yg=0,bg=[],vg={ddd:dg,h:ug,w:hg,meta:fg,layers:pg,v:xg,fr:gg,op:mg,ip:yg,assets:bg};function kg(){const t=V(h=>h.opponentSecurity),e=V(h=>h.cardIdWithEffect),n=V(h=>h.cardIdWithTarget),i=t.find(h=>h.id===e)!==void 0,s=t.find(h=>h.id===n)!==void 0,{setNodeRef:r,isOver:o}=xc({id:"opponentSecurity",data:{accept:["card"]}}),[c,l]=w.useState(!1),{show:u}=ii({id:"opponentHandCardMenu",props:{index:-1}}),d=q(h=>h.cardWidth/2.25);return a.jsx(wg,{children:a.jsxs(Sg,{ref:r,children:[o?a.jsx(Ht,{animationData:vg,loop:!0,style:{zIndex:1e5}}):a.jsx(er,{TransitionComponent:gc,sx:{width:"100%"},open:(t.length===0?!1:c)||i||s,onClose:()=>l(!1),onOpen:()=>l(!!t.length),arrow:!0,placement:"bottom",componentsProps:jg(t.length),title:a.jsx("div",{style:{position:"relative",display:"flex",flexWrap:"wrap",gap:"5px"},children:t.map((h,f)=>a.jsxs(w.Fragment,{children:[f===0&&a.jsx(mc,{sx:{position:"absolute",zIndex:5,fontSize:35,color:"#d52563",left:9,top:-21,filter:"dropShadow(0 0 2px black)"}},h.id+"_arrow"),a.jsx(Ca,{card:h,location:"opponentSecurity",style:{width:"50px"},onContextMenu:p=>u({event:p,props:{index:f,location:"opponentHand",id:h.id,name:h.name}})},h.id)]},h.id+"_fragment"))}),children:a.jsx(Cg,{id:"opponentSecurity",style:{fontSize:d},children:t.length})}),a.jsx(Eg,{alt:"oppSS",src:lg})]})})}const wg=k.div`
    grid-area: SS;
    height: 100%;
    width: 100%;
    z-index: 10;
`,Sg=k.div`
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`,Cg=k.span`
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
`,Eg=k.img`
    width: 130%;
    position: absolute;
    left: 50%;
    top: 47%;
    transform: translate(-50%, -50%);
`;function jg(t){return{tooltip:{style:{backgroundColor:"#0c0c0c",borderRadius:6,boxShadow:"inset 0 0 0 2px #961626",filter:"drop-shadow(1px 2px 3px black)",padding:10,minWidth:280,maxWidth:`${t<=10?t*55+30:580}px`}},arrow:{style:{color:"#961626"}}}}function Dg(){const t=q(r=>r.user),e=V(r=>r.opponentEggDeck),n=V(r=>r.player1),i=V(r=>r.player2),s=n.username===t?i.eggSleeveName:n.eggSleeveName;return a.jsxs(Ag,{children:[e.length!==0&&a.jsx(Og,{children:e.length}),e.length!==0&&a.jsx(_g,{alt:"egg-deck",src:Ea("Digi-Egg",s)})]})}const Ag=k.div`
    grid-area: egg-deck;
    position: relative;
    display: flex;
    flex-direction: column;
    transform: translate(-3%, -14%);
`,Og=k.span`
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
`,_g=k.img`
    height: 100%;
    margin: 0 12.5% 0 12.5%;
    border-radius: 3px;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
`;function Pg(){const t=q(r=>r.user),e=V(r=>r.opponentDeckField),n=V(r=>r.player1),i=V(r=>r.player2),s=n.username===t?i.mainSleeveName:n.mainSleeveName;return a.jsxs(Tg,{children:[a.jsx(Ig,{children:e.length}),a.jsx(Rg,{alt:"sleeve",src:Ea("Digimon",s)})]})}const Tg=k.div`
    grid-area: deck;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    transform: translateY(-10%);
`,Ig=k.span`
    position: absolute;
    top: 0;
    width: 100%;
    transform: translateY(-105%);
    font-family: Awsumsans, sans-serif;
    font-style: italic;
    @media (max-height: 500px) {
        font-size: 0.8em;
    }
`,Rg=k.img`
    height: 100%;
    border-radius: 3px;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    box-shadow: 1px 1px 0 0 black;
`;function Mg(){const{show:t}=ii({id:"opponentHandCardMenu",props:{index:-1}}),e=V(u=>u.opponentHand),n=q(u=>u.cardWidth*1.1),i=5,s=n+i,r=s*6.25-i,o=e.length<=6?s:(r-n)/(e.length-1),c=n+o*(e.length-1),l=(r-c)/2;return a.jsxs(Bg,{cardCount:e.length,children:[e.map((u,d)=>a.jsx("div",{onContextMenu:h=>t({event:h,props:{index:d,location:"opponentHand",id:u.id,name:u.name}}),style:{position:"absolute",left:l+d*o},children:a.jsx(Ca,{card:u,location:"opponentHand",style:{width:n*.9,transition:"all 0.2s ease",filter:"drop-shadow(-1px 1px 2px rgba(0, 0, 0, 0.8))",pointerEvents:u.isFaceUp?"auto":"none"}},u.id)})),e.length>7&&a.jsx(Lg,{children:e.length})]})}const Bg=k.div`
    //touch-action: none;
    grid-area: hand;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
`,Lg=k.span`
    font-family: Awsumsans, sans-serif;
    font-style: italic;
    font-size: 20px;
    opacity: 0.4;
    position: absolute;
    bottom: 1%;
    left: -4.5%;
    pointer-events: none;
`;function zg(){const t=V(d=>d.opponentTrash),e=V(d=>d.getCardLocationById),n=V(d=>d.cardIdWithEffect),i=V(d=>d.cardIdWithTarget),s=ce(d=>d.openedCardDialog),r=ce(d=>d.setOpenedCardDialog),o=e(n??"")==="opponentTrash",c=e(i??"")==="opponentTrash",l=s===Rr.OPPONENT_TRASH;function u(){r(l?!1:Rr.OPPONENT_TRASH)}return a.jsxs(Ng,{children:[t.length===0&&!l&&a.jsx(Fg,{children:a.jsx(Vg,{})}),t.length>0&&!l&&a.jsx($g,{src:t[t.length-1]?.imgUrl,alt:"myTrash",title:"Open trash",onClick:u,onError:bc}),l&&a.jsx(Ug,{onClick:u,className:"button",children:a.jsx(Sa,{style:{color:"ghostwhite",fontSize:"250%"}})}),a.jsx(Gg,{children:t.length}),o&&a.jsx(ha,{animationData:vc,loop:!0}),c&&a.jsx(ha,{animationData:kc,loop:!0})]})}const Ng=k.div`
    grid-area: trash;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    transform: translateY(-10%) scale(1.1);
`,Fg=k.div`
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
`,$g=k.img`
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
`,Gg=k.span`
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
`,ha=k(Ht)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
`,Vg=k(yc)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.5;
    font-size: 2.5em;
    @media (max-height: 500px) {
        font-size: 1.25em;
    }
`,Ug=k.div`
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
`;function Hg({wsUtils:t}){const e=V(l=>l.bootStage),n=V(l=>l.isOpponentOnline),i=V(l=>l.startingPlayer),s=ce(l=>l.opponentEmote),r=i===t?.matchInfo.opponentName,[o,c]=w.useState(!1);return a.jsx(Wg,{ref:l=>{const u=requestAnimationFrame(()=>c((l?.children?.length??0)>0));return()=>cancelAnimationFrame(u)},hasChildren:o,children:s?a.jsx(wc,{emote:s}):a.jsx(a.Fragment,{children:n?a.jsx(a.Fragment,{children:e===$i.SHOW_STARTING_PLAYER&&a.jsx(Ht,{animationData:Sc,autoplay:r,loop:!1,initialSegment:[0,70],style:{transform:"translateY(20%) scaleY(-1)"}})}):a.jsx(M0,{fontSize:"large",color:"error"})})})}const Wg=k.div`
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
`;function qg({matchInfo:t,isOpen:e,setIsOpen:n}){const i=V(d=>d.messages),[s,r]=w.useState(""),{mutate:o,isPending:c}=ni("/api/report","POST");function l(){Yg(s,i,t,o).then(()=>n(!1)),localStorage.setItem("isReported",JSON.stringify(!0))}const u=s.length>=700?` ${s.length}/800`:"";return a.jsxs(ir,{onClose:()=>n(!1),open:e,children:[a.jsx(Kg,{children:"Report "+t.opponentName+":"}),a.jsx(sr,{children:a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,alignItems:"center",width:300,maxWidth:"100vw",padding:5},children:[a.jsx("span",{style:{fontFamily:"League Spatan, sans-serif",color:"ghostwhite"},children:"A report containing the chat history will be sent to the moderators for review. You can only file one report per game."}),a.jsx(Xg,{label:"Reason"+u,variant:"outlined",multiline:!0,rows:5,fullWidth:!0,focused:!0,color:s.length>=800?"error":"warning",value:s,onChange:d=>{d.target.value.length<=800&&r(d.target.value)}}),a.jsx(Zg,{disabled:s.length===0||c,onClick:l,children:"SUBMIT REPORT"}),a.jsx(em,{onClick:()=>n(!1),children:"CANCEL"})]})})]})}async function Yg(t,e,n,i){const s=Jg(e,n),r=Qg(s,1024);for(let o=0;o<r.length;o++){const c=r[o];await i({payload:{embeds:[{fields:[{name:"`From`",value:n.user,inline:!0},{name:"`Reported User`",value:n.opponentName,inline:!0},...r.length>1?[{name:"`Part`",value:`${o+1}/${r.length}`,inline:!0}]:[],...o===0?[{name:"`Message`",value:t}]:[],{name:"`Chat History`",value:c}]}]}}),o<r.length-1&&await new Promise(l=>setTimeout(l,500))}}function Jg(t,e){return t.map(n=>{if(n.startsWith("[STARTING_PLAYER]≔"))return"";const s=n.split("﹕",2)[0]===e.user,r=n.split("﹕",2)[1],o=s?e.user:e.opponentName;return r.startsWith("[FIELD_UPDATE]≔")?"*"+o+" plays "+r.split("≔")[1]+"*":"**"+o+":** "+r}).reverse().join(`
`)}function Qg(t,e){const n=[];let i=0;for(;i<t.length;){const s=t.slice(i,i+e),r=s.lastIndexOf(`
`);r!==-1?(n.push(t.slice(i,i+r+1)),i+=r+1):(n.push(s),i+=e)}return n}const Kg=k(ka)`
    font-family:
        League Spartan,
        sans-serif;
    font-size: 24px;
    color: ghostwhite;
    margin-left: 5px;
    padding-bottom: 0;
`,Xg=k(Cc)`
    .MuiInputBase-root {
        color: ghostwhite;
        font-family: Cousine, sans-serif;
    }
`,Zg=k.button`
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
`,em=k.button`
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
`;function tm({matchInfo:t,iconFontSize:e}){const[n,i]=w.useState(!1),s=localStorage.getItem("isReported")==="true";return a.jsxs(a.Fragment,{children:[a.jsx(qg,{isOpen:n,setIsOpen:i,matchInfo:t}),a.jsx(nm,{disabled:s,className:"button",onClick:()=>i(!0),style:{gridArea:"report",fontSize:e,transform:"translate(-4px, 0.15em)"},children:a.jsx(a2,{className:"button",sx:{fontSize:e,color:"indianred"}})})]})}const nm=k.div`
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
`;function im({setRestartRequestModal:t,wsUtils:e}){const{sendMessage:n,matchInfo:{gameId:i}}=e;function s(o){n(`${i}:/restartRequest${o}`),tr("Sent restart request!"),t(!1)}const r=[{text:"GO FIRST",onClick:()=>s("AsFirst"),color:"#1a99e8"},{text:"GO SECOND",onClick:()=>s("AsSecond"),color:"#e79831"},{text:"CANCEL",onClick:()=>t(!1),color:"#D9D9D9"}];return a.jsx(cr,{text:"Send Rematch request:",buttonProps:r})}function sm({setSurrenderModal:t,wsUtils:e}){const{sendMessage:n,matchInfo:{gameId:i}}=e,s=ce(l=>l.setIsEndDialogOpen),r=ce(l=>l.setEndDialogText);function o(){t(!1),s(!0),r("🏳️ You surrendered."),n(`${i}:/surrender`)}const c=[{text:"SURRENDER",onClick:o,color:"#C03427"},{text:"CANCEL",onClick:()=>t(!1),color:"#D9D9D9"}];return a.jsx(cr,{text:"Do you want to surrender?",buttonProps:c})}function rm({wsUtils:t}){const e=q(o=>o.cardWidth*.45),[n,i]=w.useState(!1),[s,r]=w.useState(!1);return a.jsxs(om,{children:[t&&a.jsxs(a.Fragment,{children:[n&&a.jsx(im,{setRestartRequestModal:i,wsUtils:t}),s&&a.jsx(sm,{setSurrenderModal:r,wsUtils:t}),a.jsx(tm,{matchInfo:t.matchInfo,iconFontSize:`${e-5}px`}),a.jsx(fa,{className:"button",onClick:()=>r(!0),style:{gridArea:"surrender",transform:"translate(-4px, -1px)"},children:a.jsx(Xx,{className:"button",sx:{fontSize:e-5,color:"blanchedalmond"}})}),a.jsx(fa,{className:"button",onClick:()=>i(!0),style:{gridArea:"restart",transform:`translate(-4px, -${e/5}px)`},children:a.jsx(c2,{className:"button",sx:{fontSize:e-5,color:"mediumaquamarine"}})})]}),a.jsx(kg,{}),a.jsx(Dg,{}),a.jsx(Ec,{side:jn.OPPONENT,wsUtils:t}),a.jsx(jc,{side:jn.OPPONENT}),a.jsx(am,{children:a.jsx(Dc,{side:jn.OPPONENT})}),a.jsx(Hg,{wsUtils:t}),a.jsx(zg,{}),a.jsx(Pg,{}),a.jsx(Mg,{}),a.jsx(Ac,{side:jn.OPPONENT,wsUtils:t})]})}const om=k.div`
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
`,am=k.div`
    grid-area: opponent-field-nav;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
`,fa=k.div`
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
`;var ks,pa;function cm(){return pa||(pa=1,ks=(function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(i,s,r){n.o(i,s)||Object.defineProperty(i,s,{enumerable:!0,get:r})},n.r=function(i){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},n.t=function(i,s){if(1&s&&(i=n(i)),8&s||4&s&&typeof i=="object"&&i&&i.__esModule)return i;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:i}),2&s&&typeof i!="string")for(var o in i)n.d(r,o,(function(c){return i[c]}).bind(null,o));return r},n.n=function(i){var s=i&&i.__esModule?function(){return i.default}:function(){return i};return n.d(s,"a",s),s},n.o=function(i,s){return Object.prototype.hasOwnProperty.call(i,s)},n.p="",n(n.s=2)})([function(t,e){t.exports=Fi()},function(t,e,n){t.exports=(function(i){var s={};function r(o){if(s[o])return s[o].exports;var c=s[o]={i:o,l:!1,exports:{}};return i[o].call(c.exports,c,c.exports,r),c.l=!0,c.exports}return r.m=i,r.c=s,r.d=function(o,c,l){r.o(o,c)||Object.defineProperty(o,c,{enumerable:!0,get:l})},r.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},r.t=function(o,c){if(1&c&&(o=r(o)),8&c||4&c&&typeof o=="object"&&o&&o.__esModule)return o;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:o}),2&c&&typeof o!="string")for(var u in o)r.d(l,u,(function(d){return o[d]}).bind(null,u));return l},r.n=function(o){var c=o&&o.__esModule?function(){return o.default}:function(){return o};return r.d(c,"a",c),c},r.o=function(o,c){return Object.prototype.hasOwnProperty.call(o,c)},r.p="",r(r.s=0)})([function(i,s,r){function o(A){return(o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D})(A)}function c(A,D){return(function(C){if(Array.isArray(C))return C})(A)||(function(C,M){if(typeof Symbol<"u"&&Symbol.iterator in Object(C)){var B=[],G=!0,J=!1,le=void 0;try{for(var Ce,pe=C[Symbol.iterator]();!(G=(Ce=pe.next()).done)&&(B.push(Ce.value),!M||B.length!==M);G=!0);}catch(de){J=!0,le=de}finally{try{G||pe.return==null||pe.return()}finally{if(J)throw le}}return B}})(A,D)||(function(C,M){if(C){if(typeof C=="string")return l(C,M);var B=Object.prototype.toString.call(C).slice(8,-1);return B==="Object"&&C.constructor&&(B=C.constructor.name),B==="Map"||B==="Set"?Array.from(B):B==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(B)?l(C,M):void 0}})(A,D)||(function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}function l(A,D){(D==null||D>A.length)&&(D=A.length);for(var C=0,M=new Array(D);C<D;C++)M[C]=A[C];return M}r.r(s),r.d(s,"DIRECTION",(function(){return x})),r.d(s,"HEAD",(function(){return L}));var u="http://www.w3.org/2000/svg",d=function(A,D){return A==="style"?(C=D,(M=Object.entries(C).reduce((function(B,G){var J=c(G,2),le=J[0],Ce=J[1];return typeof Ce=="number"?"".concat(le,": ").concat(Ce,"px; ").concat(B):"".concat(le,": ").concat(Ce,"; ").concat(B)}),"")).endsWith("; ")?M.substring(0,M.length-2):M):D;var C,M},h=function(A){var D=A.key,C=A.node,M=A.value;switch(D){case"className":return"class";case"ref":return M(C),null;default:return D}},f=function(A,D){for(var C=arguments.length,M=new Array(C>2?C-2:0),B=2;B<C;B++)M[B-2]=arguments[B];var G=document.createElementNS(u,A);return D&&Object.entries(D).forEach((function(J){var le=c(J,2),Ce=le[0],pe=le[1],de=h({key:Ce,node:G,value:pe});de&&G.setAttributeNS(null,de,d(Ce,pe))})),M.length&&M.forEach((function(J){J&&o(J)==="object"?G.appendChild(J):G.innerHTML=M})),G},p=function(){var A=function D(C){D.current=C};return A.current=null,A},x={TOP_LEFT:"top-left",TOP:"top",TOP_RIGHT:"top-right",RIGHT:"right",BOTTOM_LEFT:"bottom-left",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",LEFT:"left"},y=function(A){var D=A.size,C=D===void 0?10:D;return{node:f("g",{transform:"translate(-".concat(C,", 0)")},f("path",{d:"M".concat(-C," 0 L0 ").concat(-C," L").concat(C," 0 L0 ").concat(C," Z")})),width:C,height:C}},g=function(A){var D=A.size,C=D===void 0?10:D;return{node:f("g",{transform:"translate(-".concat(C,", 0)")},f("circle",{cx:0,cy:0,r:C})),width:C,height:C}},m=function(A){var D=A.src,C=A.width,M=A.height;if(!D||!C||!M)throw new Error("image requires src, height, width");var B=document.createElementNS("http://www.w3.org/2000/svg","image");return B.setAttributeNS(null,"width",C),B.setAttributeNS(null,"height",M),B.setAttributeNS(null,"x",-C),B.setAttributeNS(null,"y",-M/2),B.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",D),{node:B,width:C,height:M}},v=function(A){var D=A.size,C=D===void 0?10:D;return{node:f("path",{d:"M".concat(-C," 0 L0 ").concat(-C," L0 ").concat(C," Z")}),width:C,height:C}},S=function(A){var D=A.size,C=D===void 0?10:D;return{node:f("path",{d:"M".concat(-C," ").concat(-C," L0 0 L").concat(-C," ").concat(C," Z")}),width:C,height:C}},j=function(){return{node:"",width:10,height:10}},_=function(A){var D=A.size,C=D===void 0?10:D;return{node:f("g",null,f("line",{x1:-C,y1:-C,x2:0,y2:0}),f("line",{x1:0,y1:0,x2:-C,y2:C})),width:C,height:C}},I=function(A){var D=A.size,C=D===void 0?10:D;return{node:f("g",{transform:"translate(-".concat(C,", 0)")},f("path",{d:"M".concat(-C," ").concat(-C," L").concat(C," 0 L").concat(-C," ").concat(C," L0 0 Z")})),width:C,height:C}},L={diamond:y,DIAMOND:y,dot:g,DOT:g,image:m,IMAGE:m,none:j,NONE:j,inv:v,INV:v,normal:S,NORMAL:S,thin:_,THIN:_,vee:I,VEE:I};function H(A,D){var C=Object.keys(A);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(A);D&&(M=M.filter((function(B){return Object.getOwnPropertyDescriptor(A,B).enumerable}))),C.push.apply(C,M)}return C}function $(A){for(var D=1;D<arguments.length;D++){var C=arguments[D]!=null?arguments[D]:{};D%2?H(Object(C),!0).forEach((function(M){X(A,M,C[M])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(C)):H(Object(C)).forEach((function(M){Object.defineProperty(A,M,Object.getOwnPropertyDescriptor(C,M))}))}return A}function X(A,D,C){return D in A?Object.defineProperty(A,D,{value:C,enumerable:!0,configurable:!0,writable:!0}):A[D]=C,A}function W(A){return(W=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D})(A)}var ne=function(A){return Math.round(1e3*A)/1e3},ie=function(A,D){var C=A.distance,M=function(le){return Math.pow(1-C,2)*(D[1][le]-D[0][le])+2*C*(1-C)*(D[2][le]-D[1][le])+C*C*(D[3][le]-D[2][le])},B=M("x"),G=M("y"),J=ne(-Math.atan2(B,G)+.5*Math.PI);return{degree:ne(J*(180/Math.PI)),radius:J}},Q=function(A,D){var C=A.distance,M=function(B){return Math.pow(1-C,3)*D[0][B]+3*C*Math.pow(1-C,2)*D[1][B]+3*C*C*(1-C)*D[2][B]+C*C*C*D[3][B]};return{x:M("x"),y:M("y")}},ee=function(A){return"rotate(".concat(A.degree,", ").concat(A.x,", ").concat(A.y,"), translate(").concat(A.x,", ").concat(A.y,")")},Z=function(A){return typeof A=="function"?A():A};function ge(A,D){var C=Object.keys(A);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(A);D&&(M=M.filter((function(B){return Object.getOwnPropertyDescriptor(A,B).enumerable}))),C.push.apply(C,M)}return C}function ke(A,D,C){return D in A?Object.defineProperty(A,D,{value:C,enumerable:!0,configurable:!0,writable:!0}):A[D]=C,A}var se=function(A){var D=(function(M){if(!Z(M.node))throw new Error("point is null, check if 'from'/'to' exists");var B=Z(M.node).getBoundingClientRect();switch(M.direction){case x.TOP_LEFT:return{x:B.x,y:B.y};case x.TOP:return{x:B.x+B.width/2,y:B.y};case x.TOP_RIGHT:return{x:B.x+B.width,y:B.y};case x.RIGHT:return{x:B.x+B.width,y:B.y+B.height/2};case x.BOTTOM_LEFT:return{x:B.x,y:B.y+B.height};case x.BOTTOM:return{x:B.x+B.width/2,y:B.y+B.height};case x.BOTTOM_RIGHT:return{x:B.x+B.width,y:B.y+B.height};case x.LEFT:return{x:B.x,y:B.y+B.height/2};default:throw new Error("unexpected type")}})(A),C=window?{x:window.scrollX,y:window.scrollY}:{};return D.y+=C.y,D.x+=C.x,(function(M){for(var B=1;B<arguments.length;B++){var G=arguments[B]!=null?arguments[B]:{};B%2?ge(Object(G),!0).forEach((function(J){ke(M,J,G[J])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(G)):ge(Object(G)).forEach((function(J){Object.defineProperty(M,J,Object.getOwnPropertyDescriptor(G,J))}))}return M})({},A,{},D)},N=function(A){return[A.x,A.y]},R=function(A,D){return{x:A.x+D.width*A.translation[0],y:A.y+D.height*A.translation[1]}};function re(A,D){var C=Object.keys(A);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(A);D&&(M=M.filter((function(B){return Object.getOwnPropertyDescriptor(A,B).enumerable}))),C.push.apply(C,M)}return C}function ve(A){for(var D=1;D<arguments.length;D++){var C=arguments[D]!=null?arguments[D]:{};D%2?re(Object(C),!0).forEach((function(M){Se(A,M,C[M])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(C)):re(Object(C)).forEach((function(M){Object.defineProperty(A,M,Object.getOwnPropertyDescriptor(C,M))}))}return A}function Se(A,D,C){return D in A?Object.defineProperty(A,D,{value:C,enumerable:!0,configurable:!0,writable:!0}):A[D]=C,A}var oe=function(A,D,C){return(function(M,B){return ve({},M,{x:M.x-B.x,y:M.y-B.y})})(ve({},A,{x:A.x-D.x,y:A.y-D.y}),{x:2*-C.width,y:2*-C.height})},K=function(A){var D=["M"];return D.push(N(A[0])),D.push("C"),D.push(N(A[1])),D.push(","),D.push(N(A[2])),D.push(","),D.push(N(A[3])),D.flat().join(" ").replace(/ ,/g,",")},me=function(A,D){return A.reduce((function(C,M){return C?D(C,M):M}))},Re=function(A,D,C){var M=(function(pe){var de=(function b(O){if(!O)return{func:L.THIN};if(typeof O=="string")return b(L[O]);if(W(O)==="object"){if(typeof O.func=="function")return O;if(typeof O.func=="string")return $({},O,{},b(O.func))}return typeof O=="function"?{func:O}:$({},O,{func:L.THIN})})(pe),E=$({},pe,{},de.func(de));if(!E.node===void 0||!E.width||!E.height)throw new Error("head function should return { node, width, height }");return E.distance||(E.distance=1),E})(C),B=(function(pe,de){return{x:Math.min(pe.x,de.x),y:Math.min(pe.y,de.y)}})(A,D),G=(function(pe){var de=pe.from,E=pe.to,b=pe.head,O=(function(F){var U=F.from,te=F.to;return{width:Math.max(U.x,te.x),height:Math.max(U.y,te.y)}})({from:de,to:E}),T=[];return T.push(de),T.push(R(de,O)),T.push(R(E,O)),T.push(E),(function(F,U){var te=me(F,(function(xe,Be){return{x:Math.min(xe.x,Be.x),y:Math.min(xe.y,Be.y)}}));return F.map((function(xe){return ve({},xe,{x:xe.x-te.x+U.width,y:xe.y-te.y+U.height})}))})(T,b)})({from:oe(A,B,M),to:oe(D,B,M),head:M}),J=me(G,(function(pe,de){return{x:Math.max(pe.x,de.x),y:Math.max(pe.y,de.y)}})),le=ve({},ie(M,G),{},Q(M,G)),Ce=(function(pe,de,E){var b=function(O){return Math.min(pe[0][O]-E.width,pe[3][O]-E.height)};return{x:de.x-b("x")-E.width,y:de.y-b("y")-E.height}})(G,B,M);return{offset:Ce,size:{width:J.x+2*M.width,height:J.y+2*M.height},points:K(G),head:ve({},M,{},le),getPointXY:function(){var pe=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,de=ie({distance:pe},G),E=Q({distance:pe},G);return ve({},de,{x:E.x+Ce.x,y:E.y+Ce.y})}}},Pe=["x","y","width","height"],Ee=function(A,D){var C=D.getBoundingClientRect();return{equal:!Pe.some((function(M){return A[M]!==C[M]})),rect:C}},lt=function(A){var D=A.className,C=D===void 0?"arrow":D,M=A.head,B=A.from,G=A.to,J={className:C,head:M,from:B,to:G,onChange:A.onChange},le=Re(se(J.from),se(J.to),J.head),Ce=p(),pe=p(),de=p(),E=f("svg",{className:J.className,ref:Ce,style:{top:le.offset.y,left:le.offset.x,position:"absolute"},width:le.size.width,height:le.size.height},f("path",{ref:pe,className:"".concat(C,"__path"),d:le.points}),f("g",{ref:de,className:"".concat(C,"__head"),transform:ee(le.head)},le.head.node)),b=function(){var T=Re(se(J.from),se(J.to),J.head);J.onChange&&J.onChange(T),Ce.current.style.top="".concat(T.offset.y,"px"),Ce.current.style.left="".concat(T.offset.x,"px"),Ce.current.style.width="".concat(T.size.width,"px"),Ce.current.style.height="".concat(T.size.height,"px"),pe.current.setAttribute("d",T.points),de.current.setAttribute("transform",ee(T.head)),typeof T.head.node=="string"?de.current.innerHTML=T.head.node:(de.current.firstChild&&de.current.removeChild(de.current.firstChild),de.current.appendChild(T.head.node))},O=(function(T,F){var U={from:T,to:F},te={from:{},to:{}},xe=null,Be=setInterval((function(){var Le=Z(U.from.node),Je=Z(U.to.node);if(Le&&Je&&document.body.contains(Le)&&document.body.contains(Je)){var It=(function(Wt){var Ct=Wt.previousPositions,Ae=Wt.fromNode,Rt=Wt.toNode,dt={};return dt.from=Ee(Ct.from,Ae),dt.to=Ee(Ct.to,Rt),dt.from.equal&&dt.to.equal?null:{from:dt.from.rect,to:dt.to.rect}})({previousPositions:te,fromNode:Le,toNode:Je});It&&(te.from=It.from,te.to=It.to,xe&&xe())}}),150);return{observe:function(Le){xe=Le},timer:Be,clear:function(){return clearInterval(Be)},setFrom:function(Le){U.from=Le},setTo:function(Le){U.to=Le}}})(B,G);return O.observe(b),{node:E,timer:O.timer,clear:function(){O.clear();var T=E.parentNode;T&&T.removeChild(E)},update:b,setProps:function(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};T.from&&(O.setFrom(T.from),J.from=T.from),T.to&&(O.setFrom(T.to),J.to=T.to),Object.keys(T).forEach((function(F){J[F]=T[F]})),b()}}};window&&(window.arrowCreate=lt),s.default=lt}])},function(t,e,n){n.r(e),n.d(e,"DIRECTION",(function(){return s.DIRECTION})),n.d(e,"HEAD",(function(){return s.HEAD}));var i=n(0),s=n(1),r=n.n(s),o=function(y){return typeof y=="function"?y():y},c=function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return o(y.node)};function l(y,g){return(function(m){if(Array.isArray(m))return m})(y)||(function(m,v){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(m)))){var S=[],j=!0,_=!1,I=void 0;try{for(var L,H=m[Symbol.iterator]();!(j=(L=H.next()).done)&&(S.push(L.value),!v||S.length!==v);j=!0);}catch($){_=!0,I=$}finally{try{j||H.return==null||H.return()}finally{if(_)throw I}}return S}})(y,g)||(function(m,v){if(m){if(typeof m=="string")return u(m,v);var S=Object.prototype.toString.call(m).slice(8,-1);if(S==="Object"&&m.constructor&&(S=m.constructor.name),S==="Map"||S==="Set")return Array.from(S);if(S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))return u(m,v)}})(y,g)||(function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}function u(y,g){(g==null||g>y.length)&&(g=y.length);for(var m=0,v=new Array(g);m<g;m++)v[m]=y[m];return v}var d=function(y){var g=y.from,m=y.to,v=l(Object(i.useState)(!1),2),S=v[0],j=v[1];return Object(i.useLayoutEffect)((function(){var _=function(){if(c(g)&&c(m))return j(!0),!0};if(!_()){var I=setInterval(_,150);return function(){return clearInterval(I)}}}),[S,g,m]),S};function h(y,g){var m=Object.keys(y);if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(y);g&&(v=v.filter((function(S){return Object.getOwnPropertyDescriptor(y,S).enumerable}))),m.push.apply(m,v)}return m}function f(y){for(var g=1;g<arguments.length;g++){var m=arguments[g]!=null?arguments[g]:{};g%2?h(Object(m),!0).forEach((function(v){p(y,v,m[v])})):Object.getOwnPropertyDescriptors?Object.defineProperties(y,Object.getOwnPropertyDescriptors(m)):h(Object(m)).forEach((function(v){Object.defineProperty(y,v,Object.getOwnPropertyDescriptor(m,v))}))}return y}function p(y,g,m){return g in y?Object.defineProperty(y,g,{value:m,enumerable:!0,configurable:!0,writable:!0}):y[g]=m,y}var x=function(y){var g=y.className,m=y.head,v=y.from,S=y.to,j=y.onChange,_=d({from:v,to:S}),I=Object(i.useRef)();Object(i.useLayoutEffect)((function(){I.current&&I.current.setProps({className:g,head:m,from:v,to:S,onChange:j})}),[g,m,v,S,j]),Object(i.useLayoutEffect)((function(){if(_){try{I.current=r()({className:g,head:m,from:f({},v,{node:c(v)}),to:f({},S,{node:c(S)}),onChange:j})}catch(L){return void console.warn(L)}return document.body.appendChild(I.current.node),function(){I.current.clear(),I.current=null}}}),[_])};e.default=Object(i.memo)((function(y){var g=y.className,m=y.head,v=y.from,S=y.to,j=y.onChange;return x({className:g,head:m,from:v,to:S,onChange:j}),null}))}])),ks}var Cn=cm();const lm=wa(Cn),dm=["opponentDigi1","opponentDigi2","opponentDigi3","opponentDigi4","opponentDigi5","opponentDigi6","opponentDigi7","opponentDigi8","opponentDigi9","opponentDigi10","opponentDigi11","opponentDigi12","opponentDigi13","opponentDigi14","opponentDigi15","opponentBreedingArea"];function um(){const t=ce(s=>s.arrowFrom),e=ce(s=>s.arrowTo),n=ce(s=>s.isEffectArrow),i=dm.includes(t);return!t||!e?a.jsx(a.Fragment,{}):a.jsx(hm,{isFromOpponent:i,isEffect:n,from:{direction:i?Cn.DIRECTION.BOTTOM:Cn.DIRECTION.TOP,node:()=>document.getElementById(t),translation:[0,0]},to:{direction:i?Cn.DIRECTION.TOP:Cn.DIRECTION.BOTTOM,node:()=>document.getElementById(e),translation:[0,0]},head:Cn.HEAD.NONE})}const hm=k(lm)`
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
`;function fm({wsUtils:t}){const{sendMessage:e,matchInfo:{gameId:n}}=t,i=ce(d=>d.restartOrder),s=ce(d=>d.restartPromptModal),r=ce(d=>d.setRestartPromptModal),o=ce(d=>d.setIsRematch),c=V(d=>d.clearBoard);function l(){c(),r(!1),o(!0),e(`${n}:/acceptRestart`),e(`${n}:/restartGame:${i}`)}const u=[{text:"DENY",onClick:()=>r(!1),color:"#C03427"},{text:`ACCEPT ► GOING ${i}`,onClick:l,color:"#27C06E"}];return s?a.jsx(cr,{text:"Opponent requested a rematch!",buttonProps:u}):a.jsx(a.Fragment,{})}const pm="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20version='1.1'%20width='32'%20height='32'%20viewBox='0%200%20256%20256'%20xml:space='preserve'%20%3e%3cdefs%3e%3c/defs%3e%3cg%20style='stroke:%20none;%20stroke-width:%200;%20stroke-dasharray:%20none;%20stroke-linecap:%20butt;%20stroke-linejoin:%20miter;%20stroke-miterlimit:%2010;%20fill:%20none;%20fill-rule:%20nonzero;%20opacity:%201;'%20transform='translate(1.4065934065934016%201.4065934065934016)%20scale(2.81%202.81)'%3e%3cpath%20d='M%2089.999%203.075%20C%2090%203.02%2090%202.967%2089.999%202.912%20c%20-0.004%20-0.134%20-0.017%20-0.266%20-0.038%20-0.398%20c%20-0.007%20-0.041%20-0.009%20-0.081%20-0.018%20-0.122%20c%20-0.034%20-0.165%20-0.082%20-0.327%20-0.144%20-0.484%20c%20-0.018%20-0.046%20-0.041%20-0.089%20-0.061%20-0.134%20c%20-0.053%20-0.119%20-0.113%20-0.234%20-0.182%20-0.346%20C%2089.528%201.382%2089.5%201.336%2089.469%201.29%20c%20-0.102%20-0.147%20-0.212%20-0.288%20-0.341%20-0.417%20c%20-0.13%20-0.13%20-0.273%20-0.241%20-0.421%20-0.344%20c%20-0.042%20-0.029%20-0.085%20-0.056%20-0.129%20-0.082%20c%20-0.118%20-0.073%20-0.239%20-0.136%20-0.364%20-0.191%20c%20-0.039%20-0.017%20-0.076%20-0.037%20-0.116%20-0.053%20c%20-0.161%20-0.063%20-0.327%20-0.113%20-0.497%20-0.147%20c%20-0.031%20-0.006%20-0.063%20-0.008%20-0.094%20-0.014%20c%20-0.142%20-0.024%20-0.285%20-0.038%20-0.429%20-0.041%20C%2087.03%200%2086.983%200%2086.936%200.001%20c%20-0.141%200.003%20-0.282%200.017%20-0.423%200.041%20c%20-0.035%200.006%20-0.069%200.008%20-0.104%200.015%20c%20-0.154%200.031%20-0.306%200.073%20-0.456%200.129%20L%201.946%2031.709%20c%20-1.124%200.422%20-1.888%201.473%20-1.943%202.673%20c%20-0.054%201.199%200.612%202.316%201.693%202.838%20l%2034.455%2016.628%20l%2016.627%2034.455%20C%2053.281%2089.344%2054.334%2090%2055.481%2090%20c%200.046%200%200.091%20-0.001%200.137%20-0.003%20c%201.199%20-0.055%202.251%20-0.819%202.673%20-1.943%20L%2089.815%204.048%20c%200.056%20-0.149%200.097%20-0.3%200.128%20-0.453%20c%200.008%20-0.041%200.011%20-0.081%200.017%20-0.122%20C%2089.982%203.341%2089.995%203.208%2089.999%203.075%20z%20M%2075.086%2010.672%20L%2037.785%2047.973%20L%2010.619%2034.864%20L%2075.086%2010.672%20z%20M%2055.136%2079.381%20L%2042.027%2052.216%20l%2037.302%20-37.302%20L%2055.136%2079.381%20z'%20style='stroke:%20none;%20stroke-width:%201;%20stroke-dasharray:%20none;%20stroke-linecap:%20butt;%20stroke-linejoin:%20miter;%20stroke-miterlimit:%2010;%20fill:%20rgb(5,%205,%205);%20fill-rule:%20nonzero;%20opacity:%201;'%20transform='%20matrix(1%200%200%201%200%200)%20'%20stroke-linecap='round'/%3e%3c/g%3e%3c/svg%3e";function z0({matchInfo:t,sendChatMessage:e}){const n=V(o=>o.messages),[i,s]=w.useState("");function r(o){o.preventDefault(),e&&(e(i),s(""))}return a.jsxs(a.Fragment,{children:[a.jsx(gm,{children:n.map((o,c)=>{if(o.startsWith("[STARTING_PLAYER]≔"))return a.jsx(yi,{style:{background:"rgba(255, 215, 0, 0.25)"},children:a.jsxs("p",{children:["FIRST TURN: ",o.split("≔")[1]]})});const l=o.split("﹕",2)[0],u=l===t?.user,d=o.split("﹕",2)[1];if(l==="【SERVER】")return a.jsx(yi,{style:{background:"rgba(4,241,150,0.25)",outline:"1px solid rgba(4,241,150,0.75)",outlineOffset:"-1px"},children:a.jsx("p",{children:"SERVER: "+d})},"msx_"+c);if(d?.startsWith("[FIELD_UPDATE]≔")){const h=o.indexOf("【"),f=o.substring(h),p=f.split("﹕")[0],x=f.split("﹕")[1];if(f.startsWith("【MEMORY】")){const y=parseInt(x.split("±")[0]),g=parseInt(x.split("±")[1]);return a.jsx(yi,{isMyMessage:u,children:a.jsxs("p",{children:[p," ",u?`${y.toString()} ➟ ${g.toString()}`:`${(-y).toString()} ➟ ${(-g).toString()}`]})},"msx_"+c)}return a.jsx(yi,{isMyMessage:u,children:a.jsxs("p",{children:[p," ",x]})},"msx_"+c)}return a.jsx(xm,{isMyMessage:u,children:a.jsx("p",{children:d})},"msx_"+c)})}),e&&a.jsxs(bm,{onSubmit:r,children:[a.jsx(ym,{value:i,placeholder:"...",onChange:o=>s(o.target.value)}),a.jsx(mm,{children:a.jsx("img",{alt:"send",src:pm})})]}),!e&&a.jsx("div",{style:{padding:"8px",textAlign:"center",color:"rgba(255,255,255,0.6)",fontSize:"12px",borderTop:"1px solid rgba(42, 246, 246, 0.175)"},children:"Test Mode - Read Only History"})]})}const xm=k.div`
    max-width: 85%;
    width: fit-content;
    height: fit-content;
    align-self: ${({isMyMessage:t})=>t?"flex-end":"flex-start"};
    background: rgba(12, 12, 12, 0.4);
    border-radius: 5px;
    padding: 1px 4px 1px 4px;
    display: flex;
    border: 1px solid ${({isMyMessage:t})=>t?"rgba(29,159,221,0.6)":"rgba(255,81,118,0.4)"};
    margin-right: 4px;
    p {
        margin: 0;
        font-family: Cousine, sans-serif;
        text-align: left;
        color: papayawhip;
        max-width: 100%;
        word-break: break-word;
    }
`,gm=k.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    justify-content: flex-start;
    height: 96%;
    width: 98%;
    overflow-y: scroll;
    overflow-x: hidden;
    gap: 3px;
    z-index: 100;
    padding-bottom: 2px;

    border-bottom: 1px solid rgba(42, 246, 246, 0.175);

    @supports (-moz-appearance: none) {
        scrollbar-width: thin;
    }

    ::-webkit-scrollbar {
        background: rgba(30, 31, 16, 0.5);
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background: rgba(255, 239, 213, 0.75);
    }
`,mm=k.button`
    padding: 0 2px 2px 0;
    cursor: pointer;
    width: 32px;
    height: 32px;
    border-radius: 2px 5px 5px 2px;
    background: rgba(14, 252, 252, 0.59);
    font-size: 24px;
    color: #0e0e0e;
    box-shadow: 2px 2px 2px 0 #262626;
    transition: all 0.15s ease;

    img {
        transform: translateY(1px);
        width: 24px;
        height: 24px;
        pointer-events: none;
    }

    &:hover {
        background-color: rgba(18, 253, 218, 0.9);
        color: black;
        border: none;

        img {
            transform: translateY(2px);
        }
    }

    &:focus {
        outline: none;
    }

    &:active {
        background: #31da86;
        transform: translateY(1px);
    }
`,ym=k.input`
    width: 90%;
    overflow-y: clip;
    height: 30px;
    font-family: Frutiger, sans-serif;
    border: none;
    font-size: 1.05em;
    background: rgba(255, 239, 213, 0.25);
    color: #1a1a1a;
    border-radius: 5px 2px 2px 5px;

    :focus {
        outline: none;
        filter: drop-shadow(0 0 2px ghostwhite);
        background: rgb(250, 250, 250);
    }
`,bm=k.form`
    width: 98%;
    padding: 1%;
    margin-bottom: 1%;
    height: fit-content;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`,yi=k.div`
    display: flex;
    width: 96%;
    height: fit-content;
    align-self: flex-start;
    background: ${({isMyMessage:t})=>t?"rgba(29,159,221,0.25)":"rgba(255,81,118,0.2)"};
    padding: 1px 4px 0 4px;

    p {
        font-family: Cousine, sans-serif;
        color: papayawhip;
        margin: 3px;
        width: 100%;
        max-width: 100%;
        text-align: left;
        opacity: 0.8;
        font-size: 0.8em;
    }
`;var ze=(t=>(t.MAIN="main",t.INHERITED="inherited",t.SECURITY="security",t.SPECIAL="special",t.INHERITED_FROM_DIGIVOLUTION_CARDS="digivolution cards",t.LINK="link",t))(ze||{});function mt({children:t,variant:e}){const i=nr().pathname==="/game",s=e===ze.INHERITED_FROM_DIGIVOLUTION_CARDS;return a.jsx(Dr,{inherited:s,style:e===ze.SPECIAL?wm:void 0,children:e!==ze.SPECIAL&&e!==ze.LINK?a.jsxs(gn,{inGame:i,children:[a.jsxs(N0,{children:[a.jsxs("span",{children:[e.toUpperCase()," ",!s&&"EFFECT"]}),e===ze.SECURITY&&a.jsx(t2,{sx:{width:16,position:"absolute",transform:"translate(2px, -11px)"}}),e===ze.INHERITED&&a.jsx(Uo,{sx:{width:17,position:"absolute",transform:"translate(2px, -11px)"}}),s&&a.jsx(Uo,{sx:{width:20,position:"absolute",transform:"translate(2px, -9px) scale(-1)",filter:"drop-shadow(0 0 2px #0000ff)"}})]}),a.jsx("hr",{style:{transform:"translateY(2px) scaleX(1.025)",opacity:.4}}),t]}):a.jsx(gn,{style:{padding:"3px 5px 0 5px"},inGame:i,children:t})})}function vm({ruleText:t}){const e=location.pathname==="/game";return a.jsx(Dr,{style:{background:"rgba(255, 255, 255, 0.675)"},children:a.jsx(gn,{inGame:e,style:{color:"black",fontWeight:500},children:a.jsx(Xe,{text:t})})})}function km({linkCardInfo:t}){const e=t.reduce((i,s)=>i+s.dp,0),n=t.map(i=>i.effect).join(`
`);return a.jsx(Dr,{style:{background:"linear-gradient(to right top, rgba(47,225,172,0.15) 0%, rgba(67,245,192,0.15) 20%, rgba(67,245,192,0.15) 75%, rgba(77,255, 200,0.1) 100%)"},children:a.jsxs(gn,{inGame:!0,children:[a.jsxs(N0,{children:[a.jsx("span",{children:"LINKED CARDS"}),a.jsx(e2,{sx:{fontSize:30,position:"absolute",transform:"translate(5px, -12px)",filter:"drop-shadow(0 0 1px #00ff00)"}}),a.jsx("span",{style:{position:"absolute",right:0,fontWeight:"bolder"},children:`+ ${e} DP`})]}),a.jsx("hr",{style:{transform:"translateY(2px) scaleX(1.025)",opacity:.4}}),a.jsx("span",{style:{textShadow:"0 0 3px #000000"},children:a.jsx(Xe,{text:n})})]})})}const Dr=k.div`
    width: 99.25%;
    position: relative;
    color: ghostwhite;
    background: ${({inherited:t})=>t?"linear-gradient(to right top, rgba(37,170,225,0.2) 0%, rgba(57,190,255,0.2) 20%, rgba(67,190,255,0.2) 75%, rgba(67,200,250,0.15) 100%)":"rgba(12, 21, 16, 0.25)"};
    border: 1px solid rgba(124, 124, 118, 0.4);
    border-radius: 3px;
    box-shadow: inset 5px 5px 30px 5px rgba(255, 255, 255, 0.05);
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5));
`,gn=k.div`
    font-family:
        League Spartan,
        sans-serif;
    font-weight: 300;
    font-size: ${({inGame:t})=>t?"1.25em":"1rem"};
    text-align: left;
    padding: 5px 5px 2px 5px;

    @media (max-width: 767px) {
        font-size: ${({inGame:t})=>t?"1.5rem":"1rem"};
    }
`,N0=k.div`
    width: 100%;
    text-align: start;
    line-height: 0.4;
    transform: translateY(0.35rem);
    position: relative;
    z-index: 2;
`,wm={backgroundImage:`
    radial-gradient(circle at 0%   0%, rgba(0, 255, 180, 0.125) 0%, transparent 3%),
    radial-gradient(circle at 5%   0%, rgba(0, 255, 180, 0.125) 0%, transparent 3%),
    radial-gradient(circle at 10%  0%, rgba(0, 220, 255, 0.125) 0%, transparent 3%),
    radial-gradient(circle at 15%  0%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 20%  0%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 25%  0%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 30%  0%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 35%  0%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 40%  0%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 45%  0%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 50%  0%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 55%  0%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 60%  0%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 65%  0%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 70%  0%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 75%  0%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 80%  0%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 85%  0%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 90%  0%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 95%  0%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 100% 0%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    
    radial-gradient(circle at 0%   25%, rgba(0, 255, 180, 0.125) 0%, transparent 3%),
    radial-gradient(circle at 5%   25%, rgba(0, 255, 180, 0.125) 0%, transparent 3%),
    radial-gradient(circle at 10%  25%, rgba(0, 220, 255, 0.125) 0%, transparent 3%),
    radial-gradient(circle at 15%  25%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 20%  25%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 25%  25%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 30%  25%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 35%  25%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 40%  25%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 45%  25%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 50%  25%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 55%  25%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 60%  25%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 65%  25%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 70%  25%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 75%  25%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 80%  25%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 85%  25%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 90%  25%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 95%  25%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 100% 25%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    
    radial-gradient(circle at 0%   50%, rgba(0, 255, 180, 0.125) 0%, transparent 3%),
    radial-gradient(circle at 5%   50%, rgba(0, 255, 180, 0.125) 0%, transparent 3%),
    radial-gradient(circle at 10%  50%, rgba(0, 220, 255, 0.125) 0%, transparent 3%),
    radial-gradient(circle at 15%  50%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 20%  50%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 25%  50%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 30%  50%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 35%  50%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 40%  50%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 45%  50%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 50%  50%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 55%  50%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 60%  50%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 65%  50%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 70%  50%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 75%  50%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 80%  50%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 85%  50%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 90%  50%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 95%  50%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 100% 50%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    
    radial-gradient(circle at 0%   75%, rgba(0, 255, 180, 0.125) 0%, transparent 3%),
    radial-gradient(circle at 5%   75%, rgba(0, 255, 180, 0.125) 0%, transparent 3%),
    radial-gradient(circle at 10%  75%, rgba(0, 220, 255, 0.125) 0%, transparent 3%),
    radial-gradient(circle at 15%  75%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 20%  75%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 25%  75%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 30%  75%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 35%  75%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 40%  75%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 45%  75%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 50%  75%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 55%  75%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 60%  75%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 65%  75%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 70%  75%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 75%  75%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 80%  75%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 85%  75%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 90%  75%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 95%  75%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 100% 75%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    
    radial-gradient(circle at 0%   100%, rgba(0, 255, 180, 0.125) 0%, transparent 3%),
    radial-gradient(circle at 5%   100%, rgba(0, 255, 180, 0.125) 0%, transparent 3%),
    radial-gradient(circle at 10%  100%, rgba(0, 220, 255, 0.125) 0%, transparent 3%),
    radial-gradient(circle at 15%  100%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 20%  100%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 25%  100%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 30%  100%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 35%  100%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 40%  100%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 45%  100%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 50%  100%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 55%  100%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 60%  100%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 65%  100%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 70%  100%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 75%  100%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 80%  100%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 85%  100%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 90%  100%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 95%  100%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    radial-gradient(circle at 100% 100%, rgba(100, 255, 200, 0.1) 0%, transparent 3%),
    linear-gradient(135deg, rgba(10, 20, 25, 0.1), rgba(5, 15, 20, 0.05))
  `,border:"1px solid rgba(6, 164, 159, 0.55)",boxShadow:"inset 0 0 5px rgba(0, 255, 255, 0.25)",backgroundSize:"20% 20%"};function ws(t){switch(t){case"Red":return["#b02626","ghostwhite"];case"Yellow":return["#cbbc2f","black"];case"Green":return["#0c8a3e","ghostwhite"];case"Blue":return["#017fc2","ghostwhite"];case"Purple":return["#7f2dbd","ghostwhite"];case"Black":return["#212121","ghostwhite"];case"White":return["#DBDBDB","black"];default:return["transparent",""]}}function Sm(){const t=q(i=>i.selectedCard),n=q(i=>i.hoverCard)?.color??t?.color;return a.jsx("div",{style:{display:"flex",width:"100%"},children:n?.map((i,s)=>a.jsx("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",background:ws(i)[0],textShadow:ws(i)[1]==="black"?void 0:"0 0 3px #000000"},children:a.jsx(Cm,{style:{color:ws(i)[1]},children:i})},"details_header_"+i+s))})}const Cm=k.span`
    display: inline-block;
    font-family:
        League Spartan,
        sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    transform: translateY(0.175rem);
    line-height: 1;
    color: whitesmoke;
`,Em="/assets/virus-C1KN_ZVa.png",jm="/assets/data-CGvmLl6X.png",Dm="/assets/vaccine-BZLBYVeZ.png",Am="/assets/free-S5xbIRmA.png",Om="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TpVIqDnaQ4hCwCoIFURFHqWIRLJS2QqsOJpd+CE0akhQXR8G14ODHYtXBxVlXB1dBEPwAcXVxUnSREv+XFFrEeHDcj3f3HnfvAKFRYarZNQ6ommWkE3Exl18RA68IIIIghjAqMVNPZhay8Bxf9/Dx9S7Gs7zP/Tl6lYLJAJ9IPMt0wyJeJ57etHTO+8RhVpYU4nPiMYMuSPzIddnlN84lhwWeGTay6TniMLFY6mC5g1nZUImniKOKqlG+kHNZ4bzFWa3UWOue/IWhgrac4TrNQSSwiCRSECGjhg1UYCFGq0aKiTTtxz38EcefIpdMrg0wcsyjChWS4wf/g9/dmsXJCTcpFAe6X2z7YxgI7ALNum1/H9t28wTwPwNXWttfbQAzn6TX21r0COjbBi6u25q8B1zuAANPumRIjuSnKRSLwPsZfVMe6L8Fgqtub619nD4AWepq6QY4OARGSpS95vHuns7e/j3T6u8HuyJyxDsEArQAAAAGYktHRAATABIAFax8xdgAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfnBxoLEAgCXZ/zAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAACeRJREFUaN7tmnlwG/UVxz+7WlmWbB22LCcxCSHQXMYlnhRaSJqDhAlNgVCgCZABnHCVQilJOwm0hEC5JtwwHAHSycEZSGjTcCRQwpGQciRknHAFGi5TaDyK1odsyZK1u/3Dv1Vks5Il2QY6ozez/2h29dvP773fe+/3/S0UrGAFK1jBClaw78ukgR7AXx4wxygWl9LjFh3oEJceUoPG/yWwAB0B/AGYCgwSwLYe4+pADGgB6oGHgc0AAwEvDQBkBXAZcBEwJHWMSjd4nAZ24WNdh3AHhNokYonk3xjC2/8A7gDe7U9wqR9hncAC4DqgyPz9uJE6v54cpXp4HL9Hx+UwUISPNQ1icYnWiMTn++28vKuYx7fae4b7q8B5wH/7A1zqJ69WAy8CVYA0tsrgrKkdnDA+wsihOnIOowRbJLbtKWbDv5y8sMtm/hwFrgLu7Su01A+w84CHAHulG34zs4O6E9vwlBg5gfa0eCds3VPEsqc81H8pmaH+N+DskBrs/M6BBeyFwIOAPK1G44a6FkYN05D6MTMcaJFYucnNrX93mNBvANPzhZb6AHsx8AAgX35SnAVntOAtGZiMbxiw8c1iFjzoJhwDYBswJZ/wVvoKu+CUGIvPbKXInhsAkHUkSBLMOq4Dj1Nn9jJvnyZPyeOZY4H7AHnhrBiL5mQHe6BFYu9XCg2NdprbZAwDXMUGVf4EI4d2ctjgzMkt0gGv1jv7HC1Kjt71As8CyqnHaFxxembYeAI+brDx1GulPPhiUcb/njRG57JZYY4e3YmvtHuktkfh9nVeHthcBKABKwY8aYlQXgFcMKLCYN01KocN1jOWlxsf87Jppx01kmwoYsB7wG6gTZSz8YDffJdjDte57twWjhmTQJYhGoObHveaE6aJ5fShuTpCavDtgQIeDXwA2O69uJ2zp0fS3vvuJwoLlvv46BvJbB6+AJYAa9M8MhJYDvzcbFpuqYtwxuQItz/t6Ql7F+BKeXYmsCXbBCbl4N01wLmTx+o8/qcQTof1vTv2Ksy8tiy1YTgDeCWkBmNZjDEM2AgcBUgjKgw+PyCZsHUiUXomj9XxlRhs3GkDSAAnAy9lA23LBtjlLJGAJwDlytnt1P4oYXnff4IS591aTnNEQoRdbUgN7o5GI1pvY0SjEaLRSIvLWfIQ4AaObo5ImoCdb8LWDjd4eKHKaROj7D/g4P2vZBmYA7zjcpZ8Fo1GMo4jZxnR8wAHwLTxHWmz6NLVZaZHWoCJITUYzDWpCC8tAirFdVQq7OpFIQ6pMCh1wY3nNzN3UgKxDJ4DpqdsR/MDFn9wESBdflKcCo911Lz7bzsv1tvM8PtFSA0255tJQ2rQCKnBFqAUeAfwTBqjs2ZxiKGBg+P7Sg2ur2vmrIkJs+JsAmZkgs7Gw8XAKIDja63DRdPhzvUec4u3Q1x93ZSMEknSUzvc4L7LVQ6p+PZk+9wGyy5sSoXemAk6G2APUFLphkMrrZfi3gYb2/bKZumpC6lBrR9gdwDe1DBOZ6UuuHF+duGt9CLLINauvdJr4HZZD1q/L5myG4B95vP59Lr+8kBVahin86yVp6+f14yu+1i7XTHDeybwckYP+8sDduAZ0RzsBp4HZGeRQXGRYRnODcHkvIWFTLMbeMFfHnDnISKsBuRMYZwWurRbeEvAbf7yQFlaDwvYp0QjMDa1bMkyFCnWGwG1NTlvNSlKhQQ87S8PzAmpwXAuzdAgDyyeEyYWl/i0q3nBJsOhg6z77YZGmU7tYGNxzglt7NznZV+jlFUvLbkdjL3nkrBtcPnBemu3gc2iassSnDcjzOwpB/9cbbXJf17lrm5Qpa/z2Q02thKbe5sHUY8BmDFOY/Vi1XLSr17pY1N9t5fTgKZsNw9GOAYv7XSy7MImSl2Z306W4ccjtG71eMmqUhrUpEqRSzmK+ssDpwoBr1aIeRJQMcinW7aFuk6qAJha978GpoXUYFPaNSxUhAcAY+12hav+WkZzW/YaQaQDbnjMxyOv2U3Y+3MMZ0JqMAqcKGTdwSIfMCygWUZYRxzCkeTkHi+eGwSM7wmbzsNbRHbbtHa7osiyj+vrmvG5MzurLQJL1yRhNeBskfDyajxETpGBSQA1I2KW67ct2qV6irwR7q0yyGkG2yIa8vgT2xSWrPLRFsnsWQvY9X1RGEVpuwcocijw0zHWElYoLPNNk4TYerb39r9yhhl+CZgFJJLhHZZ6C2MN+FVfYU3dHjgf4Oa69m+JAqbt/rTI1LlCQGtewD2gZ5rQS9f4uq3ptggsWeVjxT+TsHOBFyyal1y9axPdkrNmqMEvfxa1vK8zASs3J7Pqy2KrmP9uyTK8V3aFt0UYzxWS7QEx2zfnAy1gVwI/cShw8/wWAl5r7+78xM6uL5It7dJsokrJJoH4ywNmeD+3druixDrLKHUaPPp6EvY00bCkqmxXAlP85YHTgcbeXibl8G2zaHy4/YJ2jj3Seu0mNNjwRlIXrhdlqN81remiR5XEZaTCTq3WufOSJjbtcHH1o0n2DrGDudhcYylZ2Bx/iPDqNMDuUOCui9qYMzWaUUY68Zoy07uzQ2rwmQER4v3lgQmALwX6CcA9tVpn+QKVgNdA1+GN9+1c94iXPV8lh9CBz4CtwMeiba0GpgBDzXc5bqTODfOaGXdE+hOMprDEOcvKeXufbCorNf2qaaUBPxJ4E3BPHK2z/PcqVT0a/VCrxLY9Dm56stRUQtJa7XCDRbPDHFsdy3iCYRhwxzo3y54pBogDo0Nq8Ivv4qhlI3DytBqNu3/b9C3Ynvr0R1/a+PBLB/tVG+0dXcO6nQZVFQlqDoszaqh1J9UTdt3rTi5dXmqG8h+Bu3MpgQr5mwQwb0Y7Q/yZxytSYNwRGuOOiKAb3Y9asj1h1A149s1iFq5Iwj6aK2wuIp7lhAPGZfd7eP4tR/YDSl1bPZucPaymw5NbXFx6v5tYInlsen4+zY0tH9JoNILLWbIeGB/XGLnhLYfkkG2MHtaZVq/O1xqbJO5c7+Uva51oehL2zHxlJFu+LxKNRnQBXQuM2vqBIr3zYTGHD0kwuEzHJvcNNJ6ALbuKWLi8jGd3KmZErQDm90Uz669PHq4CrjW167MmJpg1IcKE6liv++me1hyW2Pqegw3bXebJAkAE+B2w+nv95KEH9HChhdWaucGhwBWnxJhwZJQqv0aJs0sXU4T3OzWJWGfXFq+hUWHre07ufb7bKaMOvAKcG1KD+/vjXQfis6XpwGKxGU9+k1XphrISA6cDZMkQ7WEXcLBVMk8YzdDtFJuH24C3f5CfLVmAy3R9rzUXOBwoAewWlUETgO2iA1sllMsf/odpGeCL6TridFgAJwRwGxAf6E8PC1awghWsYAUr2Pdn/wMI/P7swAxkTAAAAABJRU5ErkJggg==",_m="/assets/unknown-CnNrRsu4.png",Pm="/assets/god-BymstFHt.png",Tm="/assets/game-AzR3mWkW.png",Im="/assets/life-DlrftaSV.png",Rm="/assets/navi-Hq6UmU_f.png",Mm="/assets/social-_CnO5sHo.png",Bm="/assets/system-B7glowQT.png",Lm="/assets/tool-B-xWpLiX.png",zm=["Takuya Kanbara","Koji Minamoto","Koichi Kimura","Tommy Himi","Zoe Orimoto","J.P. Shibayama","Satsuki Tamahime","Eiji Nagasumi","Marvin Jackson","Xu Yulin","Hacker Judge","Kosuke Kisakata"];function Nm(t){switch(t){case"Virus":return Em;case"Data":return jm;case"Vaccine":return Dm;case"Free":return Am;case"Variable":return Om;case"Unknown":return _m;case"God":return Pm;case"Game":return Tm;case"Life":return Im;case"Navi":return Rm;case"Social":return Mm;case"System":return Bm;case"Tool":return Lm;case"default":return}}function Ar(){const t=nr(),e=t.pathname==="/game"||t.pathname==="/test",n=q(R=>R.selectedCard),i=q(R=>R.hoverCard),s=V(R=>R.inheritCardInfo),r=V(R=>R.linkCardInfo),o=Xn(R=>R.details),c=i?.name??n?.name,l=i?.cardType??n?.cardType,u=!!(i?i.name?.length>=30:n&&n?.name.length>=30),d=i?.attribute??(i?null:n?.attribute),h=i?.digiType??(i?null:n?.digiType),f=i?.mainEffect??(i?"":n?.mainEffect??""),p=i?.inheritedEffect??(i?"":n?.inheritedEffect??""),x=i?.securityEffect??(i?"":n?.securityEffect??""),y=i?.specialDigivolve??(i?"":n?.specialDigivolve??""),g=i?.burstDigivolve??(i?"":n?.burstDigivolve??""),m=i?.digiXros??(i?"":n?.digiXros??""),v=i?.dnaDigivolve??(i?"":n?.dnaDigivolve??""),S=i?.rule??(i?"":n?.rule??""),j=i?.linkDP??(i?0:n?.linkDP??0),_=i?.linkEffect??(i?"":n?.linkEffect??""),I=i?.linkRequirement??(i?"":n?.linkRequirement??""),L=i?.assemblyEffect??(i?"":n?.assemblyEffect??""),H=i?.aceEffect??(i?null:n?.aceEffect),$=H?.indexOf("-")??-1,X=H?H[$+1]:null,W=i?.cardNumber??n?.cardNumber,ne=i?.level??(i?0:n?.level??0),ie=i?.playCost??(i?0:n?.playCost??0),Q=i?.digivolveConditions??(i?[]:n?.digivolveConditions??[]),ee=i?.dp??(i?0:n?.dp??0),Z=i?.stage??(i?"":n?.stage??""),ge=i?.illustrator??(i?"":n?.illustrator??""),ke=`https://digimoncardgame.fandom.com/wiki/${W}/Rulings`,se=!zm.includes(String(c)),N=!["BT9-109","EX5-070"].includes(String(W));return!n&&!i?a.jsx("div",{style:{height:500}}):a.jsxs(Fm,{inGame:e,children:[(o!==Lt.INHERIT_OR_LINK||!e)&&a.jsxs(a.Fragment,{children:[!!c&&a.jsx(Hm,{isLong:u,children:c}),a.jsx("span",{children:h?.map((R,re)=>a.jsxs(Wm,{children:[re!==0&&" | ",R]},R))}),a.jsxs(xa,{style:{flexDirection:"row",justifyContent:"space-between",gap:2,width:"calc(100% - 4px)"},children:[!!l&&a.jsx(Ss,{title:a.jsx(Cs,{explanation:Es(l)}),children:l.split("/").length===1?a.jsx("img",{width:30,style:{padding:2},alt:"cardType",src:rn(l)}):a.jsxs("div",{style:{display:"flex"},children:[a.jsx("img",{width:30,style:{padding:2,paddingRight:1},alt:"cardType",src:rn(l.split("/")[0])}),a.jsx("img",{width:30,style:{padding:2,paddingLeft:1},alt:"cardType",src:rn(l.split("/")[1])})]})}),a.jsx(Sm,{}),!!d&&a.jsx(Ss,{title:a.jsx(Cs,{explanation:Es(d)}),children:a.jsx("img",{width:30,style:{padding:2},alt:"attribute",src:Nm(d)})})]}),a.jsxs(xa,{style:X?{...Um}:void 0,children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center"},children:[["Digimon","Digi-Egg"].includes(String(l))&&a.jsxs(tn,{children:["Lv.",a.jsx(Sn,{children:ne})]}),!!Z&&a.jsxs(tn,{children:["Stage: ",a.jsx(Sn,{children:Z})]}),!!ee&&a.jsxs(tn,{children:["DP: ",a.jsx(Sn,{children:ee})]}),!!H&&a.jsx(Ss,{title:a.jsx(Cs,{explanation:Es("Overflow",X)}),children:a.jsxs(Vm,{children:["ACE-",X]})})]}),a.jsxs("div",{style:{display:"flex",width:"calc(100% - 4px)",justifyContent:"space-between",alignItems:"center",paddingRight:"4px"},children:[l!=="Digi-Egg"&&a.jsxs(tn,{children:[l==="Option"?"Use: ":"Play: ",a.jsx(Sn,{children:ie})]}),Q[0]&&a.jsxs("div",{style:{display:"flex",gap:7,transform:"translateY(2px)"},children:[a.jsxs("div",{children:[a.jsx("span",{children:"Digivolve: "}),a.jsx(Sn,{children:Q[0]?.cost})]}),a.jsxs("div",{children:[a.jsx("span",{style:{fontSize:"12px"},children:" from "}),Q?.map((R,re)=>a.jsxs("span",{children:[re!==0&&" | ",qm(R.color.toLowerCase())]},R.color+re))," Lv.",a.jsx(Sn,{children:Q[0]?.level})]})]})]})]})]}),a.jsxs($m,{children:[(o!==Lt.INHERIT_OR_LINK||!e)&&a.jsxs(a.Fragment,{children:[v&&a.jsx(mt,{variant:ze.SPECIAL,children:a.jsx(Xe,{text:v})},`${W}_dna`),g&&a.jsx(mt,{variant:ze.SPECIAL,children:a.jsx(Xe,{text:g})},`${W}_burst`),y&&a.jsx(mt,{variant:ze.SPECIAL,children:a.jsx(Xe,{text:y})},`${W}_spec`),m&&a.jsx(mt,{variant:ze.SPECIAL,children:a.jsx(Xe,{text:m})},`${W}_xros`),L&&a.jsx(mt,{variant:ze.SPECIAL,children:a.jsx(Xe,{text:L})},`${W}_assembly`),f&&a.jsx(mt,{variant:ze.MAIN,children:a.jsx(Xe,{text:f})},`${W}_main`),(_||j!==0)&&a.jsx(mt,{variant:ze.LINK,children:a.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"1px"},children:[a.jsxs("div",{style:{display:"flex",width:"100%",flexDirection:"column"},children:[a.jsx(gn,{style:{borderBottom:"1px dotted rgba(255, 255, 255, 0.35)",paddingBottom:"0.4em",marginBottom:"0.25em"},children:a.jsx(Xe,{text:I})}),a.jsx(gn,{children:a.jsx(Xe,{text:_})})]}),a.jsxs("div",{style:{display:"flex",width:"fit-content",flexDirection:"column",padding:"8px 10px 4px 10px",alignItems:"center",border:"1px solid rgba(255, 255, 255, 0.25)",borderRadius:"3px",marginBottom:"0.15em",textShadow:"0 0 2px #000000",background:"linear-gradient(to right top, rgba(47,225,172,0.4) 0%, rgba(67,245,192,0.4) 20%, rgba(67,245,192,0.3) 75%, rgba(77,255, 200,0.2) 100%)"},children:[j!==null&&a.jsx("span",{style:{fontWeight:500,fontSize:"1.1em",lineHeight:1},children:"+ DP"}),j!==null&&a.jsx("span",{style:{fontFamily:"Awsumsans, sans-serif",minWidth:"4ch"},children:j})]})]})},`${W}_link`),S&&a.jsx(vm,{ruleText:S},`${W}_rule`)]}),r.length>0&&a.jsx(km,{linkCardInfo:r},`${W}_linkedEffect`),s[0]?.length>0&&a.jsx(mt,{variant:ze.INHERITED_FROM_DIGIVOLUTION_CARDS,children:a.jsx(Oc,{gap:1,children:s.map((R,re)=>!!R&&a.jsx("span",{children:a.jsx(Xe,{text:R})},`${W}_inherited_from_material_${re}`))})},`${W}_inherited`),(o!==Lt.INHERIT_OR_LINK||!e)&&a.jsxs(a.Fragment,{children:[p&&a.jsx(mt,{variant:l==="Option"&&N||l==="Tamer"&&se?ze.SECURITY:ze.INHERITED,children:a.jsx(Xe,{text:p})},`${W}_to_inherit`),x&&a.jsx(mt,{variant:ze.SECURITY,children:a.jsx(Xe,{text:x})},`${W}_security`)]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(o!==Lt.INHERIT_OR_LINK||!e)&&a.jsxs(a.Fragment,{children:[W&&a.jsx(tn,{style:{width:"fit-content",textWrap:"nowrap"},children:W}),a.jsxs(tn,{style:{width:"fit-content",textWrap:"nowrap"},children:["✒️ ",ge]})]}),W&&a.jsx(tn,{children:a.jsx(Gm,{href:ke,target:"_blank",rel:"noopener noreferrer",children:a.jsx("span",{children:"ℹ️ Rulings"})})})]})]})]})}const Fm=k.div`
    grid-area: details;
    width: ${({inGame:t})=>t?"342px":"100%"};
    height: fit-content;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    @supports (-moz-appearance: none) {
        scrollbar-width: thin;
    }

    ::-webkit-scrollbar {
        background: rgba(240, 240, 240, 0.1);
        width: 3px;
        border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(240, 240, 240, 0.4);
        border-radius: 5px;
    }
`,$m=k.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-y: visible;
    gap: 8px;

    @supports (-moz-appearance: none) {
        scrollbar-width: thin;
    }

    ::-webkit-scrollbar {
        background: rgba(30, 31, 16, 0.5);
        width: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background: rgba(255, 239, 213, 0.75);
    }
`,tn=k(gn)`
    font-size: 18px;
    line-height: 1.4rem;
    transform: translateY(0.1rem);
`,Sn=k.span`
    font-size: 0.95em;
    font-family: Awsumsans, sans-serif;
    color: lightcyan;
`,Gm=k.a`
    font-weight: 500;
    color: ghostwhite;
    border: 1px solid rgba(22, 171, 255, 0.15);
    background: rgba(56, 111, 240, 0.15);
    box-shadow: inset 5px 5px 5px 5px rgba(255, 255, 255, 0.05);
    border-radius: 5px;
    padding: 3px 3px 1px 0;
    text-wrap: nowrap;
    span {
        pointer-events: none;
    }

    &:hover {
        color: ghostwhite;
        background: rgba(56, 111, 240, 0.5);
        border: 1px solid rgba(22, 171, 255, 0.25);
    }
`,xa=k.div`
    width: 99.25%;
    height: 100%;
    color: ghostwhite;
    background: rgba(12, 21, 16, 0.25);
    border: 1px solid rgba(124, 124, 118, 0.4);
    border-radius: 3px;
    box-shadow: inset 5px 5px 30px 5px rgba(255, 255, 255, 0.05);
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5));
    display: flex;
    flex-direction: column;
    z-index: 1;
`,Vm=k.span`
    font-family: Sakana, sans-serif;
    background-image: linear-gradient(320deg, #d2d2d2, #757575);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 20px;
    line-height: 1;
    filter: drop-shadow(0 0 2px #000000);
    text-shadow: none !important;
    padding-right: 6px;
`,Um={backgroundImage:`
    repeating-linear-gradient(135deg, rgba(230, 239, 255, 0) 0%, rgba(230, 239, 255, 0) 3%, rgba(230, 239, 255, 0.06) 4%),
    repeating-linear-gradient(135deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 0.12) 2.5%),
    repeating-linear-gradient(135deg, rgba(230, 239, 255, 0) 0%, rgba(230, 239, 255, 0) 0.6%, rgba(230, 239, 255, 0.08) 1.2%),
    linear-gradient(135deg, rgba(20, 25, 30, 1) 0%, rgba(40, 50, 60, 1) 45%, rgba(30, 38, 48, 1) 55%, rgba(15, 20, 25, 1) 100%)
  `,textShadow:"0 0 2px #000000",border:"1px solid rgba(124, 124, 118, 0.1)"},Hm=k.span`
    display: inline-block;
    font-family:
        League Spartan,
        sans-serif;
    font-weight: 400;
    font-size: ${({isLong:t})=>t?"1.25rem":"1.8rem"};
    line-height: 0.7;
    color: ghostwhite;
`,Wm=k.span`
    font-weight: 300;
    font-size: 1.25rem;
    display: inline-block;
    font-family:
        League Spartan,
        sans-serif;
    line-height: 1;
    color: whitesmoke;
`,Ss=Ut(({className:t,...e})=>a.jsx(er,{...e,arrow:!0,classes:{popper:t}}))(()=>({[`& .${Mr.arrow}`]:{color:No[500]},[`& .${Mr.tooltip}`]:{backgroundColor:No[500]}}));function Cs({explanation:t}){return a.jsx("span",{style:{fontFamily:"League Spartan",color:"ghostwhite",fontSize:"1.2rem"},children:t})}function Es(t,e){return t==="Overflow"?`As this card moves from the battle area or under a card to another area, lose ${e} memory.`:t}function qm(t){switch(t){case"red":return"🔴";case"yellow":return"🟡";case"green":return"🟢";case"blue":return"🔵";case"purple":return"🟣";case"black":return"⚫";case"white":return"⚪";case"all":return"ALL 🌈";default:return t+" "}}function Ym({wsUtils:t}){const e=V(S=>S.phase),n=V(S=>S.progressToNextPhase),i=V(S=>S.setUsernameTurn),s=V(S=>S.myMemory),r=V(S=>S.areCardsSuspended),c=V(S=>S.bootStage)===$i.GAME_IN_PROGRESS,l=V(S=>S.getIsMyTurn),u=q(S=>S.user),d=l(u),h=be(S=>S.playNextPhaseSfx),f=be(S=>S.playPassTurnSfx),[p,x]=w.useState(!0),y=e===Ei.MAIN,g=s<0;function m(){if(!(!d||!c)){if(y){if(!g)return;f(),i(t?.matchInfo.opponentName??""),t?.sendSfx("playPassTurnSfx")}else h(),t?.sendSfx("playNextPhaseSfx");n(),t?.sendPhaseUpdate()}}w.useEffect(()=>{d&&e===Ei.UNSUSPEND&&!r()&&t?.nextPhase()},[e]),w.useEffect(()=>{x(!1);const S=setTimeout(()=>x(!0),10);return()=>clearTimeout(S)},[e]);const v=q(S=>S.cardWidth/4);return a.jsx(Jm,{onClick:m,isMyTurn:d,isMainPhase:y,isPassTurnAllowed:g,gameHasStarted:c,...d&&y&&!g&&{title:"Please set memory before passing turn."},children:a.jsx(Qm,{style:{opacity:p?1:0,fontSize:v},children:c?e:"BOOTING"})})}const Jm=k.div`
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

    border: 2px solid ${({gameHasStarted:t,isMyTurn:e})=>Zm(t,e)};
    color: ghostwhite;

    background: rgba(0, 0, 0, 0.6);
    border-radius: 9px;

    filter: drop-shadow(0 0 2px ${({gameHasStarted:t,isMyTurn:e})=>Xm(t,e)});
    box-shadow: ${({gameHasStarted:t,isMyTurn:e})=>Km(t,e)};

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
`,Qm=k.span`
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
`;function Km(t,e){return t?e?"inset 1px 2px 10px 1px rgb(29, 159, 221)":"inset 0 0 12px 2px rgba(243,58,96,0.7)":"inset 0 0 12px 2px rgb(252,241,49)"}function Xm(t,e){return t?e?"rgba(29, 159, 221, 0.6)":"rgba(255,81,118,0.6)":"rgba(255, 247, 84, 0.35)"}function Zm(t,e){return t?e?"rgba(29, 159, 221, 0.4)":"rgba(255, 114, 135, 0.6)":"rgba(241,255,41,0.63)"}function ey(){const t=q(R=>R.selectCard),e=q(R=>R.selectedCard),n=q(R=>R.hoverCard),i=q(R=>R.user),s=V(R=>R.gameId),r=s.split("‗").filter(R=>R!==i)[0],o=be(R=>R.playAttackSfx),c=be(R=>R.playEffectAttackSfx),l=be(R=>R.playNextPhaseSfx),u=V(R=>R.progressToNextPhase),d=V(R=>R.setMessages),h=ce(R=>R.setArrowFrom),f=ce(R=>R.setArrowTo),p=ce(R=>R.setIsEffectArrow),x=ce(R=>R.stackDialog),y=ce(R=>R.openedCardDialog),g=Xn(R=>R.details),{show:m}=ii({id:"detailsImageMenu"}),[v,S]=w.useState(null),[j,_]=w.useState(!1),I=w.useRef(null),L=w.useCallback(R=>{R?c():o();const re=()=>{I.current!==null&&(clearTimeout(I.current),I.current=null),h(""),f(""),p(!1)};I.current=setTimeout(()=>{h(""),f(""),p(!1)},3500),S(()=>re)},[o,c]),{sendMessage:H}=cg({clearAttackAnimation:v,restartAttackAnimation:L}),$=Da({sendMessage:H,restartAttackAnimation:L,clearAttackAnimation:v});w.useLayoutEffect(()=>{const R=re=>{const{item:ve,targetId:Se}=re.detail,oe=Se.includes("_bottom"),K=oe?Se.replace("_bottom",""):Se,me=$(K,{bottom:oe});me?.drop&&me.drop(ve)};return window.addEventListener("reactDndDrop",R),()=>window.removeEventListener("reactDndDrop",R)},[$]);function X(){H(`${s}:/updatePhase`)}function W(){if(j)return;_(!0);const R=setTimeout(()=>{u(),X(),l(),Q("playNextPhaseSfx"),_(!1)},920);return()=>clearTimeout(R)}function ne(R,re,ve){H(`${s}:/moveCard:${R}:${re}:${ve}`)}function ie(R){R.length&&(d(i+"﹕"+R),H(`${s}:/chatMessage:${R}`))}function Q(R){const re=setTimeout(()=>H(`${s}:/${R}`),10);return()=>clearTimeout(re)}const ee={matchInfo:{gameId:s,user:i,opponentName:r},sendMessage:H,sendMoveCard:ne,sendChatMessage:ie,sendSfx:Q,sendPhaseUpdate:X,nextPhase:W},Z=q(R=>R.cardWidth*.45),ge=w.useRef(null),ke=ge.current?Math.max(window.outerHeight-148,800):void 0;w.useLayoutEffect(()=>window.scrollTo(document.documentElement.scrollWidth-window.innerWidth,0),[]);const se="ontouchstart"in window?Ia:Ra,N=a.jsxs(sy,{height:ke,children:[a.jsx(ry,{children:a.jsxs(or,{iconFontSize:Z,children:[a.jsx("a",{href:"https://world.digimoncard.com/rule/pdf/general_rules.pdf",target:"_blank",rel:"noopener noreferrer",title:"Rulings",children:a.jsxs(oy,{sx:{color:"white",position:"relative"},children:[a.jsx(Ba,{sx:{fontSize:`${Z*.85}px!important`,opacity:.8}}),a.jsx(La,{sx:{color:"dodgerblue",position:"absolute",right:0,top:7,fontSize:`${Z*.4}px!important`,pointerEvents:"none"}})]})}),a.jsx(za,{iconFontSize:`${Z}px!important`})]})}),a.jsxs(ay,{children:[!x&&!y&&a.jsx(z0,{...ee}),!!y&&a.jsx(Na,{}),!!x&&a.jsx(Fa,{})]}),a.jsx($a,{}),a.jsx(Ga,{wsUtils:ee}),a.jsx(Ym,{wsUtils:ee}),a.jsx(rm,{wsUtils:ee}),a.jsx(Va,{wsUtils:ee})]});return a.jsxs(ty,{ref:ge,children:[a.jsx(Aa,{}),a.jsx(Oa,{wsUtils:ee}),a.jsx(um,{}),a.jsx(_a,{wsUtils:ee}),a.jsx(Pa,{}),a.jsx(fm,{wsUtils:ee}),a.jsxs(ny,{height:ke,style:{minHeight:window.innerHeight},children:[g!==Lt.NO_IMAGE&&a.jsx(iy,{src:n?.imgUrl??e?.imgUrl??Gi,alt:"cardImg",onContextMenu:R=>m({event:R}),onClick:()=>t(null),...!e&&!n&&{style:{pointerEvents:"none",opacity:.25,filter:"saturate(0.5)"}}}),g===Lt.NO_IMAGE&&a.jsx("div",{style:{height:"10px"}}),a.jsx(Ar,{})]}),a.jsxs(Ta,{backend:se,children:[N,a.jsx(Ma,{})]})]})}const ty=k.div`
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
`,ry=k.div`
    grid-column: 1 / 9;
    grid-row: 1 / 3;
    z-index: 1;
`,oy=k(ja)`
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
`,cy="5.5.7",ly={g:"LottieFiles AE 0.1.21",a:"",k:"",d:"",tc:""},dy=29.97,uy=0,hy=33,fy=500,py=500,xy=0,gy=[],my=[{ddd:0,ind:1,ty:4,sr:1,ks:{o:{a:0,k:100},r:{a:1,k:[{i:{x:[.83],y:[.83]},o:{x:[.17],y:[.17]},t:0,s:[0]},{t:30,s:[360]}]},p:{a:0,k:[250,250,0]},a:{a:0,k:[10,-22,0]},s:{a:0,k:[100,100,100]}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[300,300]},p:{a:0,k:[0,0]}},{ty:"st",c:{a:0,k:[1,1,1,1]},o:{a:0,k:100},w:{a:0,k:40},lc:1,lj:1,ml:4,bm:0},{ty:"tm",s:{a:1,k:[{i:{x:[.67],y:[1]},o:{x:[.33],y:[0]},t:9.6,s:[0]},{t:28.8,s:[100]}]},e:{a:1,k:[{i:{x:[.67],y:[1]},o:{x:[.33],y:[0]},t:0,s:[1]},{t:18,s:[100]}]},o:{a:0,k:0},m:1},{ty:"tr",p:{a:0,k:[10,-22]},a:{a:0,k:[0,0]},s:{a:0,k:[100,100]},r:{a:0,k:0},o:{a:0,k:100},sk:{a:0,k:0},sa:{a:0,k:0}}],bm:0}],ip:0,op:150,st:0,bm:0}],yy=[],Or={v:cy,meta:ly,fr:dy,ip:uy,op:hy,w:fy,h:py,ddd:xy,assets:gy,layers:my,markers:yy},by="4.8.0",vy={g:"LottieFiles AE ",a:"",k:"",d:"",tc:""},ky=32,wy=0,Sy=152,Cy=336,Ey=336,jy=0,Dy=[],Ay=[{ddd:0,ind:1,ty:4,sr:1,ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:0,k:[168,168,0]},a:{a:0,k:[0,0,0]},s:{a:0,k:[-100,-100,100]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[0,21],[0,-21]],c:!1}}},{ty:"tm",s:{a:0,k:0},e:{a:1,k:[{i:{x:[.83],y:[.83]},o:{x:[.17],y:[.17]},t:0,s:[0]},{i:{x:[.67],y:[1]},o:{x:[.33],y:[0]},t:7,s:[0]},{t:24,s:[100]}]},o:{a:0,k:0},m:1},{ty:"st",c:{a:0,k:[.474509805441,.427450984716,.51372551918,1]},o:{a:0,k:100},w:{a:0,k:3},lc:3,lj:2,bm:0},{ty:"tr",p:{a:0,k:[0,0]},a:{a:0,k:[0,0]},s:{a:0,k:[300,300]},r:{a:0,k:-45},o:{a:0,k:100},sk:{a:0,k:0},sa:{a:0,k:0}}],bm:0}],ip:0,op:160,st:0,bm:0},{ddd:0,ind:2,ty:4,sr:1,ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:0,k:[168,168,0]},a:{a:0,k:[0,0,0]},s:{a:0,k:[100,100,100]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[0,21],[0,-21]],c:!1}}},{ty:"tm",s:{a:1,k:[{i:{x:[.83],y:[.83]},o:{x:[.17],y:[.17]},t:0,s:[100]},{i:{x:[.67],y:[1]},o:{x:[.33],y:[0]},t:17,s:[100]},{t:35,s:[0]}]},e:{a:0,k:100},o:{a:0,k:0},m:1},{ty:"st",c:{a:0,k:[.474509805441,.427450984716,.51372551918,1]},o:{a:0,k:100},w:{a:0,k:3},lc:3,lj:2,bm:0},{ty:"tr",p:{a:0,k:[0,0]},a:{a:0,k:[0,0]},s:{a:0,k:[300,300]},r:{a:0,k:45},o:{a:0,k:100},sk:{a:0,k:0},sa:{a:0,k:0}}],bm:0}],ip:0,op:160,st:0,bm:0},{ddd:0,ind:3,ty:4,sr:1,ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:0,k:[168,168,0]},a:{a:0,k:[0,0,0]},s:{a:0,k:[100,100,100]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ks:{a:0,k:{i:[[-26.4,0],[0,-26.4],[26.4,0],[0,26.4]],o:[[26.4,0],[0,26.4],[-26.4,0],[0,-26.4]],v:[[0,-47],[47,0],[0,47],[-47,0]],c:!0}}},{ty:"st",c:{a:0,k:[.474509805441,.427450984716,.51372551918,1]},o:{a:0,k:100},w:{a:0,k:3},lc:1,lj:2,bm:0},{ty:"tr",p:{a:0,k:[.54,.82]},a:{a:0,k:[0,0]},s:{a:0,k:[300,300]},r:{a:0,k:0},o:{a:0,k:100},sk:{a:0,k:0},sa:{a:0,k:0}}],bm:0},{ty:"tm",s:{a:1,k:[{i:{x:[.67],y:[1]},o:{x:[.33],y:[0]},t:0,s:[100]},{t:35,s:[0]}]},e:{a:0,k:100},o:{a:0,k:0},m:1}],ip:0,op:160,st:0,bm:0}],Oy=[],_y={v:by,meta:vy,fr:ky,ip:wy,op:Sy,w:Cy,h:Ey,ddd:jy,assets:Dy,layers:Ay,markers:Oy},qs="/assets/gatchmon-CqbbMHZP.png",Py="modulepreload",Ty=function(t){return"/"+t},ga={},Iy=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){let l=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");s=l(n.map(u=>{if(u=Ty(u),u in ga)return;ga[u]=!0;const d=u.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":Py,d||(f.as="script"),f.crossOrigin="",f.href=u,c&&f.setAttribute("nonce",c),document.head.appendChild(f),d)return new Promise((p,x)=>{f.addEventListener("load",p),f.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&r(c.reason);return e().catch(r)})},Ry=w.lazy(()=>Iy(()=>Promise.resolve().then(()=>k5),void 0));function My({card:t}){const e=q(s=>s.selectCard),[n,i]=w.useState(!1);return!n||t.cardNumber===t.uniqueCardNumber?a.jsxs("div",{style:{position:"relative",height:"fit-content"},onContextMenu:()=>e(t),id:t.uniqueCardNumber,children:[a.jsx(Ry,{card:t,location:"fetchedData",setImageError:i}),t.restrictions.english==="Restricted to 1"&&a.jsx(n2,{color:t.color.includes("Red")?"warning":"error",fontSize:"large",sx:{background:"rgba(8,8,8,0.5)",borderRadius:"5px",position:"absolute",bottom:8,right:3,pointerEvents:"none"}}),["Banned","Unreleased"].includes(t.restrictions.english)&&a.jsx(r2,{color:t.color.includes("Red")?"warning":"error",fontSize:"large",sx:{position:"absolute",bottom:8,right:5,pointerEvents:"none"}})]}):a.jsx(a.Fragment,{})}const Ys=()=>a.jsxs(Js,{children:[a.jsx(Ht,{animationData:Or,loop:!0,style:{width:"90px"}}),a.jsx("img",{alt:"",src:qs,width:80,height:100})]});function By(){const t=fe(s=>s.isLoading),e=fe(s=>s.fetchedCards),n=fe(s=>s.filteredCards),i=w.useMemo(()=>n,[n]);return w.useEffect(()=>{document.getElementById("search-container")?.addEventListener("contextmenu",function(r){r.preventDefault()})},[]),a.jsx(Ly,{id:"search-container",children:a.jsxs(w.Suspense,{fallback:a.jsx(Ys,{}),children:[t&&a.jsx(Ys,{}),!t&&n.length<2e3&&n!==e?i?.map((s,r)=>a.jsx(My,{card:s},s.uniqueCardNumber+r)):a.jsx(Js,{children:a.jsx("img",{alt:"gatchmon",src:qs,width:100,height:120})}),!t&&i.length===0&&a.jsxs(Js,{children:[a.jsx(Ht,{animationData:_y,loop:!1,style:{width:"70px"}}),a.jsx("img",{alt:"gatchmon",src:qs,width:80,height:100})]})]})})}const Js=k.div`
    height: 90%;
    width: 90%;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,Ly=k.div`
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
`;function _r(t,e,n){const i=t.slice();return i.splice(n<0?i.length+n:n,0,i.splice(e,1)[0]),i}function zy(t,e){return t.reduce((n,i,s)=>{const r=e.get(i);return r&&(n[s]=r),n},Array(t.length))}function bi(t){return t!==null&&t>=0}function Ny(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function Fy(t){return typeof t=="boolean"?{draggable:t,droppable:t}:t}const F0=t=>{let{rects:e,activeIndex:n,overIndex:i,index:s}=t;const r=_r(e,i,n),o=e[s],c=r[s];return!c||!o?null:{x:c.left-o.left,y:c.top-o.top,scaleX:c.width/o.width,scaleY:c.height/o.height}},$0="Sortable",G0=lr.createContext({activeIndex:-1,containerId:$0,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:F0,disabled:{draggable:!1,droppable:!1}});function $y(t){let{children:e,id:n,items:i,strategy:s=F0,disabled:r=!1}=t;const{active:o,dragOverlay:c,droppableRects:l,over:u,measureDroppableContainers:d}=_c(),h=Pc($0,n),f=c.rect!==null,p=w.useMemo(()=>i.map(I=>typeof I=="object"&&"id"in I?I.id:I),[i]),x=o!=null,y=o?p.indexOf(o.id):-1,g=u?p.indexOf(u.id):-1,m=w.useRef(p),v=!Ny(p,m.current),S=g!==-1&&y===-1||v,j=Fy(r);Ua(()=>{v&&x&&d(p)},[v,p,x,d]),w.useEffect(()=>{m.current=p},[p]);const _=w.useMemo(()=>({activeIndex:y,containerId:h,disabled:j,disableTransforms:S,items:p,overIndex:g,useDragOverlay:f,sortedRects:zy(p,l),strategy:s}),[y,h,j.draggable,j.droppable,S,p,g,l,f,s]);return lr.createElement(G0.Provider,{value:_},e)}const Gy=t=>{let{id:e,items:n,activeIndex:i,overIndex:s}=t;return _r(n,i,s).indexOf(e)},Vy=t=>{let{containerId:e,isSorting:n,wasDragging:i,index:s,items:r,newIndex:o,previousItems:c,previousContainerId:l,transition:u}=t;return!u||!i||c!==r&&s===o?!1:n?!0:o!==s&&e===l},Uy={duration:200,easing:"ease"},V0="transform",Hy=dr.Transition.toString({property:V0,duration:0,easing:"linear"}),Wy={roleDescription:"sortable"};function qy(t){let{disabled:e,index:n,node:i,rect:s}=t;const[r,o]=w.useState(null),c=w.useRef(n);return Ua(()=>{if(!e&&n!==c.current&&i.current){const l=s.current;if(l){const u=Bc(i.current,{ignoreTransform:!0}),d={x:l.left-u.left,y:l.top-u.top,scaleX:l.width/u.width,scaleY:l.height/u.height};(d.x||d.y)&&o(d)}}n!==c.current&&(c.current=n)},[e,n,i,s]),w.useEffect(()=>{r&&o(null)},[r]),r}function Yy(t){let{animateLayoutChanges:e=Vy,attributes:n,disabled:i,data:s,getNewIndex:r=Gy,id:o,strategy:c,resizeObserverConfig:l,transition:u=Uy}=t;const{items:d,containerId:h,activeIndex:f,disabled:p,disableTransforms:x,sortedRects:y,overIndex:g,useDragOverlay:m,strategy:v}=w.useContext(G0),S=Jy(i,p),j=d.indexOf(o),_=w.useMemo(()=>({sortable:{containerId:h,index:j,items:d},...s}),[h,s,j,d]),I=w.useMemo(()=>d.slice(d.indexOf(o)),[d,o]),{rect:L,node:H,isOver:$,setNodeRef:X}=Tc({id:o,data:_,disabled:S.droppable,resizeObserverConfig:{updateMeasurementsFor:I,...l}}),{active:W,activatorEvent:ne,activeNodeRect:ie,attributes:Q,setNodeRef:ee,listeners:Z,isDragging:ge,over:ke,setActivatorNodeRef:se,transform:N}=Ic({id:o,data:_,attributes:{...Wy,...n},disabled:S.draggable}),R=Rc(X,ee),re=!!W,ve=re&&!x&&bi(f)&&bi(g),Se=!m&&ge,oe=Se&&ve?N:null,me=ve?oe??(c??v)({rects:y,activeNodeRect:ie,activeIndex:f,overIndex:g,index:j}):null,Re=bi(f)&&bi(g)?r({id:o,items:d,activeIndex:f,overIndex:g}):j,Pe=W?.id,Ee=w.useRef({activeId:Pe,items:d,newIndex:Re,containerId:h}),lt=d!==Ee.current.items,A=e({active:W,containerId:h,isDragging:ge,isSorting:re,id:o,index:j,items:d,newIndex:Ee.current.newIndex,previousItems:Ee.current.items,previousContainerId:Ee.current.containerId,transition:u,wasDragging:Ee.current.activeId!=null}),D=qy({disabled:!A,index:j,node:H,rect:L});return w.useEffect(()=>{re&&Ee.current.newIndex!==Re&&(Ee.current.newIndex=Re),h!==Ee.current.containerId&&(Ee.current.containerId=h),d!==Ee.current.items&&(Ee.current.items=d)},[re,Re,h,d]),w.useEffect(()=>{if(Pe===Ee.current.activeId)return;if(Pe!=null&&Ee.current.activeId==null){Ee.current.activeId=Pe;return}const M=setTimeout(()=>{Ee.current.activeId=Pe},50);return()=>clearTimeout(M)},[Pe]),{active:W,activeIndex:f,attributes:Q,data:_,rect:L,index:j,newIndex:Re,items:d,isOver:$,isSorting:re,isDragging:ge,listeners:Z,node:H,overIndex:g,over:ke,setNodeRef:R,setActivatorNodeRef:se,setDroppableNodeRef:X,setDraggableNodeRef:ee,transform:D??me,transition:C()};function C(){if(D||lt&&Ee.current.newIndex===j)return Hy;if(!(Se&&!Mc(ne)||!u)&&(re||A))return dr.Transition.toString({...u,property:V0})}}function Jy(t,e){var n,i;return typeof t=="boolean"?{draggable:t,droppable:!1}:{draggable:(n=t?.draggable)!=null?n:e.draggable,droppable:(i=t?.droppable)!=null?i:e.droppable}}ri.Down,ri.Right,ri.Up,ri.Left;function Qy(t){const{attributes:e,listeners:n,setNodeRef:i,transform:s,transition:r,isDragging:o}=Yy({id:t.deck.id});return a.jsxs(Ky,{ref:i,...e,isDragging:o,transition:r,transform:s,children:[a.jsx(Xy,{...n,isDragging:o,children:":::"}),a.jsx(ar,{isDragging:o,...t})]})}const Ky=k.div`
    transform: ${({transform:t})=>dr.Transform.toString(t)};
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
`;function Zy(){const t=fe(x=>x.loadOrderedDecks),e=fe(x=>x.deckIdOrder),n=fe(x=>x.setDeckIdOrder),i=fe(x=>x.isLoading),s=fe(x=>x.clearDeck),[r,o]=w.useState(!1),[c,l]=w.useState([]),u=Vt(),d=Lc(zc($c));function h(x){const{active:y,over:g}=x;if(g&&y.id!==g.id){const m=e.findIndex(S=>S===y.id),v=e.findIndex(S=>S===g.id);n(_r(e,m,v),l)}}function f(){u("/deckbuilder"),s()}const p=w.useCallback(()=>t(l),[t]);return w.useLayoutEffect(()=>p(),[p]),w.useLayoutEffect(()=>{!i&&c.length<16&&o(!0)},[i,c.length]),a.jsxs(yn,{style:{justifyContent:"flex-start"},children:[a.jsx(Ii,{headline:"Decks",rightElement:a.jsx(Wi,{route:"/"})}),a.jsx(Nc,{sensors:d,collisionDetection:Fc,onDragEnd:h,children:a.jsx(e5,{children:i?a.jsx(Ys,{}):a.jsxs(a.Fragment,{children:[a.jsx($y,{items:c,children:c?.map(x=>a.jsx(w.Fragment,{children:a.jsx(Qy,{deck:x})},x.id))}),r&&a.jsx(t5,{className:"button",onClick:f,children:a.jsx(Qx,{})})]})})})]})}const e5=k.div`
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
`,t5=k.div`
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
`;function js(){return a.jsxs(a.Fragment,{children:[a.jsx("option",{value:"",children:"🌈"}),a.jsx("option",{value:"Red",children:"🟥"}),a.jsx("option",{value:"Yellow",children:"🟨"}),a.jsx("option",{value:"Green",children:"🟩"}),a.jsx("option",{value:"Blue",children:"🟦"}),a.jsx("option",{value:"Purple",children:"🟪"}),a.jsx("option",{value:"Black",children:"⬛"}),a.jsx("option",{value:"White",children:"⬜"})]})}function n5(){const t=fe(N=>N.filterCards),[e,n]=w.useState(""),[i,s]=w.useState(""),[r,o]=w.useState(""),[c,l]=w.useState(""),[u,d]=w.useState(""),[h,f]=w.useState(null),[p,x]=w.useState(null),[y,g]=w.useState(null),[m,v]=w.useState(null),[S,j]=w.useState(""),[_,I]=w.useState(""),[L,H]=w.useState(""),[$,X]=w.useState(""),[W,ne]=w.useState(""),[ie,Q]=w.useState(""),[ee,Z]=w.useState(!1),[ge,ke]=w.useState(!0);function se(){n(""),s(""),o(""),l(""),d(""),f(null),x(null),g(null),v(null),j(""),I(""),H(""),X(""),ne(""),Q(""),Z(!1),t("","","","","","","","","",null,null,null,null,"","",!1,!0)}return w.useEffect(()=>{const N=setTimeout(()=>{t(e,u,i,r,c,L,$,S,_,p,h,y,m,W,ie,ee,ge)},1400);return()=>clearTimeout(N)},[e,$,ie,W,p]),w.useEffect(()=>{t(e,u,i,r,c,L,$,S,_,p,h,y,m,W,ie,ee,ge)},[u,i,r,c,L,S,_,h,m,y,ee,ge]),a.jsxs(i5,{children:[a.jsxs(Yn,{children:[a.jsx(r5,{placeholder:"Set Number",value:$??void 0,onChange:N=>{X(N.target.value)}}),a.jsx(s5,{placeholder:"Name",value:e??void 0,onChange:N=>n(N.target.value)}),a.jsx(c5,{min:-1e3,max:17e3,step:1e3,type:"number",placeholder:"DP",value:p??"",onChange:N=>{x(N.target.value==="-1000"?null:parseInt(N.target.value))}})]}),a.jsxs(Yn,{children:[a.jsxs(x5,{value:u??"Type",onChange:N=>d(N.target.value??""),children:[a.jsx("option",{value:"",children:"Type"}),a.jsx("option",{children:"Digimon"}),a.jsx("option",{children:"Digi-Egg"}),a.jsx("option",{children:"Option"}),a.jsx("option",{children:"Tamer"})]}),a.jsxs(p5,{value:L??"Attr.",onChange:N=>H(N.target.value??""),children:[a.jsx("option",{value:"",children:"Attr."}),a.jsx("option",{children:"Data"}),a.jsx("option",{children:"Free"}),a.jsx("option",{children:"Unknown"}),a.jsx("option",{children:"Variable"}),a.jsx("option",{children:"Vaccine"}),a.jsx("option",{children:"Virus"}),a.jsx("option",{style:{background:"rgb(4,24,35)"},children:"Game"}),a.jsx("option",{style:{background:"rgb(4,24,35)"},children:"God"}),a.jsx("option",{style:{background:"rgb(4,24,35)"},children:"Life"}),a.jsx("option",{style:{background:"rgb(4,24,35)"},children:"Navi"}),a.jsx("option",{style:{background:"rgb(4,24,35)"},children:"Social"}),a.jsx("option",{style:{background:"rgb(4,24,35)"},children:"System"}),a.jsx("option",{style:{background:"rgb(4,24,35)"},children:"Tool"})]}),a.jsxs(l5,{value:h??"",onChange:N=>{f(N.target.value==="-1"?null:parseInt(N.target.value))},children:[a.jsx("option",{value:-1,children:"Cost"}),a.jsx("option",{value:0,children:"0"}),a.jsx("option",{value:1,children:"1"}),a.jsx("option",{value:2,children:"2"}),a.jsx("option",{value:3,children:"3"}),a.jsx("option",{value:4,children:"4"}),a.jsx("option",{value:5,children:"5"}),a.jsx("option",{value:6,children:"6"}),a.jsx("option",{value:7,children:"7"}),a.jsx("option",{value:8,children:"8"}),a.jsx("option",{value:9,children:"9"}),a.jsx("option",{value:10,children:"10"}),a.jsx("option",{value:11,children:"11"}),a.jsx("option",{value:12,children:"12"}),a.jsx("option",{value:13,children:"13"}),a.jsx("option",{value:14,children:"14"}),a.jsx("option",{value:15,children:"15"}),a.jsx("option",{value:16,children:"16"}),a.jsx("option",{value:20,children:"20"})]}),a.jsxs(d5,{value:y??-1,onChange:N=>{g(N.target.value==="-1"?null:parseInt(N.target.value))},children:[a.jsx("option",{value:-1,children:"Digiv. Cost"}),a.jsx("option",{value:0,children:"0"}),a.jsx("option",{value:1,children:"1"}),a.jsx("option",{value:2,children:"2"}),a.jsx("option",{value:3,children:"3"}),a.jsx("option",{value:4,children:"4"}),a.jsx("option",{value:5,children:"5"}),a.jsx("option",{value:6,children:"6"}),a.jsx("option",{value:7,children:"7"}),a.jsx("option",{value:8,children:"8"}),a.jsx("option",{value:9,children:"9"})]}),a.jsxs(u5,{value:m??-1,onChange:N=>{v(N.target.value==="-1"?null:parseInt(N.target.value))},children:[a.jsx("option",{value:-1,children:"Lvl"}),a.jsx("option",{value:2,children:"2"}),a.jsx("option",{value:3,children:"3"}),a.jsx("option",{value:4,children:"4"}),a.jsx("option",{value:5,children:"5"}),a.jsx("option",{value:6,children:"6"}),a.jsx("option",{value:7,children:"7"})]})]}),a.jsxs(Yn,{children:[a.jsxs(h5,{value:S??"Stage",onChange:N=>j(N.target.value??""),children:[a.jsx("option",{value:"",children:"Stage"}),a.jsx("option",{children:"In-Training"}),a.jsx("option",{children:"Rookie"}),a.jsx("option",{children:"Champion"}),a.jsx("option",{children:"Ultimate"}),a.jsx("option",{children:"Mega"}),a.jsx("option",{children:"Armor Form"}),a.jsx("option",{children:"Hybrid"}),a.jsx("option",{style:{background:"rgb(4,24,35)"},children:"Appmon"}),a.jsx("option",{style:{background:"rgb(4,24,35)"},children:"Stnd./Appmon"}),a.jsx("option",{style:{background:"rgb(4,24,35)"},children:"Sup./Appmon"}),a.jsx("option",{style:{background:"rgb(4,24,35)"},children:"Ult./Appmon"}),a.jsx("option",{style:{background:"rgb(4,24,35)"},children:"God/Appmon"}),a.jsx("option",{style:{background:"rgb(54,54,54)"},children:"D-Reaper"}),a.jsx("option",{style:{background:"rgb(54,54,54)"},children:"Eater"})]}),a.jsx(f5,{placeholder:"Trait",value:_??[],onChange:N=>{I(N.target.value)}}),a.jsx(a5,{placeholder:"Illustrator",value:W??void 0,onChange:N=>ne(N.target.value)})]}),a.jsx(Yn,{children:a.jsx(o5,{placeholder:"Effect Text",value:ie??void 0,onChange:N=>Q(N.target.value)})}),a.jsxs(Yn,{style:{marginTop:5,justifyContent:"space-evenly"},children:[a.jsxs(g5,{children:[a.jsx(Ds,{value:i??"",style:{gridArea:"one",filter:`drop-shadow(0 0 3px ${As(i)})`},onChange:N=>s(N.target.value??""),children:a.jsx(js,{})}),a.jsx(Ds,{value:r??"",style:{gridArea:"two",filter:`drop-shadow(0 0 3px ${As(r)})`},onChange:N=>o(N.target.value??""),children:a.jsx(js,{})}),a.jsx(Ds,{value:c??"",style:{gridArea:"three",filter:`drop-shadow(0 0 3px ${As(c)})`},onChange:N=>l(N.target.value??""),children:a.jsx(js,{})})]}),a.jsx(m5,{children:a.jsx(Us,{className:"button",control:a.jsx(Ti,{size:"small",value:ee,checked:ee,onChange:N=>Z(N.target.checked),sx:{color:"var(--blue)","&.Mui-checked":{color:"rgba(56, 111, 240, 1)"},maxWidth:"7px",maxHeight:"7px",transform:"translateY(-1px)"}}),label:"ACE",componentsProps:{typography:{fontFamily:"Sakana",lineHeight:1,color:"silver",marginLeft:"6px"}}})}),a.jsx(y5,{children:a.jsx(Us,{className:"button",control:a.jsx(Ti,{size:"small",value:ge,checked:ge,onChange:N=>ke(N.target.checked),sx:{color:"var(--blue)","&.Mui-checked":{color:"rgba(56, 111, 240, 1)"},maxWidth:"7px",maxHeight:"7px",transform:"translateY(-2px)"}}),label:"Alt. Arts",componentsProps:{typography:{fontFamily:"League Spartan",fontWeight:"bold",lineHeight:1,color:"lightgrey",marginLeft:"6px"}}})}),a.jsx(b5,{type:"button",onClick:se,children:"CLEAR"})]})]})}const i5=k.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`,Yn=k.div`
    display: flex;
    flex-wrap: wrap;
`,Vn=k.input`
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
`,s5=k(Vn)`
    grid-area: name;
`,r5=k(Vn)`
    grid-area: setnumber;
    max-width: 10.8125ch;
`,o5=k(Vn)`
    grid-area: effect;
`,a5=k(Vn)`
    grid-area: illustrator;
`,c5=k(Vn)`
    max-width: 10.8125ch;
`,bn=k.select`
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
`,Ds=k(bn)`
    grid-area: color;
    border: none;
    box-shadow: none;
    border-radius: 5px;
    background: rgba(26, 26, 26, 0.75);
`,l5=k(bn)`
    grid-area: playcost;
`,d5=k(bn)`
    grid-area: digivolutioncost;
`,u5=k(bn)`
    grid-area: level;
`,h5=k(bn)`
    grid-area: stage;
`,f5=k(Vn)`
    grid-area: digitype;
`,p5=k(bn)`
    grid-area: attribute;
`,x5=k(bn)`
    grid-area: type;
`,g5=k.div`
    grid-area: color;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "one two three";
    gap: 12px;
`,U0=k.div`
    height: 100%;
    width: 100px;
    display: flex;
    place-items: center;
    justify-content: center;
`,m5=k(U0)`
    width: 75px;
    padding-left: 25px;

    @media (max-width: 499px) {
        width: 56px;
        padding-left: 12px;
    }
`,y5=k(U0)`
    width: 100px;
    padding-left: 25px;

    @media (max-width: 499px) {
        width: 80px;
        padding-left: 6px;
    }
`,b5=k.button`
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
`;function As(t){switch(t){case"Red":return"#b02626";case"Yellow":return"#cbbc2f";case"Green":return"#0c8a3e";case"Blue":return"#017fc2";case"Purple":return"#7f2dbd";case"Black":return"#212121";case"White":return"#DBDBDB";default:return"transparent"}}function Qs(t){const{card:e,location:n,setImageError:i}=t,s=q(h=>h.selectCard),r=q(h=>h.setHoverCard),o=fe(h=>h.addCardToDeck),c=be(h=>h.playPlaceCardSfx),[l,u]=w.useState(e.imgUrl);function d(h){h.stopPropagation(),n==="fetchedData"?(o(e.cardNumber,e.cardType,e.uniqueCardNumber),c()):s(e)}return a.jsx(v5,{onClick:d,onMouseEnter:()=>r(e),onMouseOver:()=>r(e),onMouseLeave:()=>r(null),alt:e.name+" "+e.uniqueCardNumber,src:l,location:n,onError:()=>{i?.(!0),u(Gi)}})}const v5=k.img`
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
`,k5=Object.freeze(Object.defineProperty({__proto__:null,default:Qs},Symbol.toStringTag,{value:"Module"}));function w5(){const t=fe(g=>g.mainDeckCards),e=fe(g=>g.eggDeckCards),n=fe(g=>g.isLoading),i=fe(g=>g.isSettingDeck),s=fe(g=>g.addCardToDeck),r=fe(g=>g.deleteFromDeck),o=be(g=>g.playPlaceCardSfx),c=be(g=>g.playTrashCardSfx),l=t.filter(g=>g.cardType==="Digimon").length,u=t.filter(g=>g.cardType==="Tamer").length,d=t.filter(g=>g.cardType==="Option").length,h=e.length,f=Gc([...e,...t]),p={};f.forEach(g=>{const m=g.uniqueCardNumber;p[m]||(p[m]=[]),p[m].push(g)});function x(g){return g.cardType==="Digi-Egg"?h<5&&e.filter(m=>m.cardNumber===g.cardNumber).length<4:t.length<50&&t.filter(m=>m.cardNumber===g.cardNumber).length<4||[...Uc,Hc].includes(g.cardNumber)}const y=kr("(max-width:499px)");return a.jsxs(a.Fragment,{children:[a.jsxs(E5,{children:[a.jsxs(Jn,{style:{scale:y?.9:void 0},children:[t.length," / 50"]}),a.jsx("div",{style:{transform:"translateY(3px)",scale:y?.9:1.1,width:50},children:a.jsx(Vc,{deckCards:t})}),a.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:y?8:24},children:[a.jsxs(vi,{children:[a.jsx(ki,{src:rn("Digi-Egg"),alt:"Egg: "}),a.jsxs(Jn,{children:[h," / 5"]})]}),a.jsxs(vi,{children:[a.jsx(ki,{style:{width:y?40:50,transform:"translateY(1px)"},src:rn("Option"),alt:"Option: "}),a.jsx(Jn,{children:d})]}),a.jsxs(vi,{children:[a.jsx(ki,{src:rn("Tamer"),alt:"Tamer: "}),a.jsx(Jn,{children:u})]}),a.jsxs(vi,{children:[a.jsx(ki,{src:rn("Digimon"),alt:"Digimon: "}),a.jsx(Jn,{children:l})]})]})]}),a.jsx(j5,{children:!n&&!i?Object.values(p).map((g,m)=>a.jsxs(S5,{children:[g.map((v,S)=>{if(S>0&&g[S-1]?.uniqueCardNumber===v.uniqueCardNumber){const j=S<3?5*S:15;return a.jsx("div",{style:{position:"absolute",left:j,top:j},children:S<4&&a.jsx(Qs,{card:v,location:"deck"})},v.id)}return a.jsx("div",{children:a.jsx(Qs,{card:v,location:"deck"})},v.id)}),a.jsxs(C5,{children:[a.jsx(D5,{className:"button",onClick:()=>{r(g.at(-1).id),c()},children:"−"}),a.jsx("span",{style:{color:g.length>4?"#ffcf00":void 0},children:g.length}),a.jsx(H0,{className:"button",disabled:!x(g[0]),onClick:()=>{s(g[0].cardNumber,g[0].cardType,g[0].uniqueCardNumber),o()},children:"+"})]})]},m)):a.jsx("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:a.jsx(Ht,{animationData:Or,loop:!0,style:{width:"50%"}})})})]})}const S5=k.div`
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
`,C5=k.span`
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
`,E5=k.div`
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    background: var(--blue);
`,vi=k.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`,ki=k.img`
    width: 45px;

    @media (max-width: 499px) {
        width: 35px;
    }
`,Jn=k.span`
    font-size: 25px;
    font-family: "AwsumSans", sans-serif;
    transform: translateY(4px);
`,j5=k.div`
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
`,H0=k.div`
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
`,D5=k(H0)`
    background: #721b39;
`,A5={pd:'["BT1-001_P1", ...]',tts:'["BT1-001", "BT1-001", "EX5-023", ...]',text:`// deck name

3 Agumon BT1-010
2 Greymon BT1-015
...`};function O5({deckName:t}){const[e,n]=w.useState(""),i=fe(m=>m.importDeck),s=fe(m=>m.exportDeck),[r,o]=w.useState(!1),[c,l]=w.useState(!1),u=fe(m=>m.fetchedCards),[d,h]=w.useState("pd");function f(){if(d==="text"){i(e,d);return}try{const m=JSON.parse(e);m.every(v=>u.some(S=>S.cardNumber===v))||p(),Array.isArray(m)&&m.every(v=>typeof v=="string")?(i(m,d),n("")):p()}catch{p()}}function p(){l(!0);const m=setTimeout(()=>{l(!1)},3500);return()=>clearTimeout(m)}function x(){const m=s(d,t);n(m),navigator.clipboard.writeText(m).then(()=>{o(!0),setTimeout(()=>{o(!1)},3500)})}const y=m=>h(m.target.value),g=kr("(max-width:499px)");return a.jsxs(_5,{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-evenly",gap:g?12:28,padding:"0 8px 0 8px",width:"calc(100% - 16px)"},children:[!c&&a.jsxs(Ks,{className:"button",onClick:f,children:[!g&&a.jsx(Wo,{}),a.jsx("span",{children:"IMPORT"}),!g&&a.jsx(Wo,{})]}),c&&a.jsx(Ks,{style:{background:"crimson"},children:"INVALID!"}),a.jsxs("div",{style:{display:"flex",width:250,justifyContent:"space-between"},children:[a.jsxs("div",{style:{display:"flex"},children:[a.jsx("input",{type:"radio",value:"pd",id:"pd",name:"radio-buttons",className:"button",checked:d==="pd",onChange:y}),a.jsx(Os,{htmlFor:"pd",className:"button",checked:d==="pd",title:"Project Drasil (includes Alternate Arts)",children:"PD"})]}),a.jsxs("div",{style:{display:"flex"},children:[a.jsx("input",{type:"radio",value:"tts",id:"tts",name:"radio-buttons",className:"button",checked:d==="tts",onChange:y}),a.jsx(Os,{htmlFor:"tts",className:"button",checked:d==="tts",title:"Tabletop Simulator (without Alt Arts)",children:"TTS"})]}),a.jsxs("div",{style:{display:"flex"},children:[a.jsx("input",{type:"radio",value:"text",id:"text",name:"radio-buttons",className:"button",checked:d==="text",onChange:y}),a.jsx(Os,{htmlFor:"text",className:"button",checked:d==="text",title:"Text: digimoncard.dev text format",children:"Text"})]})]}),!r&&a.jsxs(ma,{className:"button",onClick:x,children:[!g&&a.jsx(Ho,{}),a.jsx("span",{children:"EXPORT"}),!g&&a.jsx(Ho,{})]}),r&&a.jsx(ma,{style:{background:"#32e7b7"},children:"COPIED!"})]}),a.jsx(P5,{value:e,placeholder:A5[d],onChange:m=>n(m.target.value)})]})}const _5=k.div`
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
`,P5=k.textarea`
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
`,Ks=k.div`
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
`,ma=k(Ks)`
    background: rgba(46, 146, 245, 0.8);

    &:hover {
        background: #2fb1ea;
    }
`,Os=k.label`
    font-family: "League Spartan", sans-serif;
    font-size: 18px;
    margin-left: 3px;
    transform: translateY(2px);
    color: ${({checked:t})=>t?"#00ffc3":"ghostwhite"};
    text-decoration: ${({checked:t})=>t?"double underline":"none"};
`;function T5(t){const{deckName:e}=t,n=fe(f=>f.decks),i=fe(f=>f.saveDeck),s=fe(f=>f.isSaving),r=()=>i(e),{id:o}=Ha(),c=fe(f=>f.deleteDeck),l=fe(f=>f.updateDeck),u=Vt(),[d,h]=w.useState(!1);return o?a.jsxs(a.Fragment,{children:[a.jsx(Xs,{onClick:()=>o&&l(o,e),children:a.jsx(_s,{children:"SAVE CHANGES"})}),n.length>1&&a.jsx(I5,{isDeleting:d,onClick:()=>{d&&o&&c(o,u),h(!d)},children:a.jsx(_s,{style:d?{fontSize:16,letterSpacing:1,textDecoration:"double underline cyan"}:{},children:d?"DELETE PERMANENTLY?":"DELETE"})})]}):a.jsx(Xs,{disabled:s||n.length>=16,onClick:r,children:a.jsx(_s,{children:n.length>=16?"16/16 Decks":`SAVE (${n.length}/16)`})})}const _s=k.span`
    font-family: "League Spartan", sans-serif;
    letter-spacing: 2px;
    font-size: 18px;
    text-shadow: 0 -1px 1px rgba(2, 38, 19, 0.25);
`,Xs=k.button`
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
`,I5=k(Xs)`
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
`;function ya(){const{id:t}=Ha(),e=q(d=>d.selectedCard),n=q(d=>d.hoverCard),i=fe(d=>d.deckName),s=fe(d=>d.setDeckName),r=fe(d=>d.mainDeckCards),o=fe(d=>d.setDeckById),c=fe(d=>d.decks),l=fe(d=>d.fetchedCards),u=w.useCallback(()=>{t||(localStorage.setItem("deckName",i),localStorage.setItem("deckCards",JSON.stringify(r)))},[i,i,r,t]);return w.useEffect(()=>(window.addEventListener("beforeunload",u),()=>window.removeEventListener("beforeunload",u)),[u]),w.useLayoutEffect(()=>{t&&c&&l&&o(t)},[t,c,l]),a.jsx(yn,{children:a.jsxs(R5,{children:[a.jsxs(M5,{children:[a.jsx(z5,{src:(n??e)?.imgUrl??Gi,alt:n?.name??(n?"Card":e?.name??"Card")}),a.jsx(Ar,{})]}),a.jsxs(B5,{children:[a.jsx("div",{style:{display:"flex",height:50,justifyContent:"center",alignItems:"center"},children:a.jsx(N5,{type:"text",value:i,maxLength:35,onChange:d=>s(d.target.value)})}),a.jsx(w5,{}),a.jsx(O5,{deckName:i})]}),a.jsxs(L5,{children:[a.jsxs("div",{style:{width:"100%",minHeight:50,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsx(T5,{deckName:i}),a.jsx(Wi,{})]}),a.jsx(n5,{}),a.jsx(By,{})]})]})})}const R5=k.div`
    display: flex;
    gap: 16px;
    flex: 1;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap-reverse;
`,M5=k.div`
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
`,B5=k.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 500px;

    @media (max-width: 499px) {
        min-width: unset;
        max-width: 100vw;
    }
`,L5=k.div`
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
`,z5=k.img`
    grid-area: cardimage;
    aspect-ratio: 7 / 10;
    max-width: 100%;
    max-height: 380px;
    border-radius: 10px;
    filter: drop-shadow(0 0 3px #060e18);

    @media (max-width: 500px) {
        max-height: unset;
    }
`,N5=k.input`
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
`;function F5(){const t=q(E=>E.selectCard),e=q(E=>E.selectedCard),n=q(E=>E.hoverCard),i=q(E=>E.user),s=q(E=>E.activeDeckId),r=q(E=>E.avatarName),o=q(E=>E.getAvatar),c=q(E=>E.setActiveDeck),l=q(E=>E.getActiveDeck),u=Vt(),d=fe(E=>E.decks),h=fe(E=>E.fetchedCards),f=V(E=>E.clearBoard),p=V(E=>E.setPlayers),x=V(E=>E.progressToNextPhase),y=V(E=>E.setMessages),g=be(E=>E.playAttackSfx),m=be(E=>E.playEffectAttackSfx),v=be(E=>E.playNextPhaseSfx),S=be(E=>E.playShuffleDeckSfx),j=ce(E=>E.setArrowFrom),_=ce(E=>E.setArrowTo),I=ce(E=>E.setIsEffectArrow),L=ce(E=>E.stackDialog),H=ce(E=>E.openedCardDialog),$=Xn(E=>E.details),{show:X}=ii({id:"detailsImageMenu"}),[W,ne]=w.useState(null),[ie,Q]=w.useState(!1),[ee,Z]=w.useState(null),ge=w.useRef(null),ke=w.useCallback(E=>({...E,modifiers:{plusDp:0,plusSecurityAttacks:0,keywords:[],colors:E.color},isTilted:!1,isFaceUp:!1}),[]),se=w.useCallback(E=>{let b=[...E];for(let O=0;O<3;O++)b=R(b);b=re(b),b=re(b),b=ve(b),b=Se(b),b=N(b),b=oe(b);for(let O=0;O<3;O++)b=R(b);return b=K(b),b},[]),N=w.useCallback(E=>{const b=[...E],O=1e3;for(let T=0;T<O;T++){let F=!1;for(let U=0;U<b.length-1;U++)if(b[U].uniqueCardNumber===b[U+1].uniqueCardNumber){F=!0;let te=-1;const xe=50;for(let Be=0;Be<xe;Be++){const Le=new Uint32Array(1);crypto.getRandomValues(Le);const Je=Le[0]%b.length;if(!(Je>0&&b[Je-1].uniqueCardNumber===b[U+1].uniqueCardNumber||Je<b.length-1&&b[Je+1].uniqueCardNumber===b[U+1].uniqueCardNumber||Math.abs(Je-U)<=1)){te=Je;break}}te!==-1&&([b[U+1],b[te]]=[b[te],b[U+1]])}if(!F)break}return b},[]),R=w.useCallback(E=>{const b=[...E];for(let O=b.length-1;O>0;O--){const T=new Uint32Array(1);crypto.getRandomValues(T);const F=T[0]%(O+1);[b[O],b[F]]=[b[F],b[O]]}return b},[]),re=w.useCallback(E=>{const b=[...E],O=Math.floor(b.length/2),T=b.slice(0,O),F=b.slice(O),U=[];let te=0,xe=0;for(;te<T.length&&xe<F.length;){const Be=new Uint32Array(1);crypto.getRandomValues(Be),Be[0]%2===0?U.push(T[te++]):U.push(F[xe++])}return U.push(...T.slice(te)),U.push(...F.slice(xe)),U},[]),ve=w.useCallback(E=>{const b=[];for(let O=0;O<E.length;O++){const T=new Uint32Array(1);crypto.getRandomValues(T);const F=T[0]%(O+1);F===O?b.push(E[O]):(b.push(b[F]),b[F]=E[O])}return b},[]),Se=w.useCallback(E=>{const b=[...E],O=Math.max(3,Math.floor(Math.sqrt(E.length))),T=[];for(let F=0;F<b.length;F+=O)T.push(b.slice(F,F+O));for(let F=T.length-1;F>0;F--){const U=new Uint32Array(1);crypto.getRandomValues(U);const te=U[0]%(F+1);[T[F],T[te]]=[T[te],T[F]]}for(const F of T)for(let U=F.length-1;U>0;U--){const te=new Uint32Array(1);crypto.getRandomValues(te);const xe=te[0]%(U+1);[F[U],F[xe]]=[F[xe],F[U]]}return T.flat()},[]),oe=w.useCallback(E=>{const b=[...E];for(let O=b.length-1;O>0;O--){const T=new Uint32Array(1);crypto.getRandomValues(T);const F=T[0]%O;[b[O],b[F]]=[b[F],b[O]]}return b},[]),K=w.useCallback(E=>{const b=[...E],O=4;for(let T=b.length-O;T>=0;T-=O){const F=Math.min(T+O,b.length),U=b.slice(T,F);for(let te=U.length-1;te>0;te--){const xe=new Uint32Array(1);crypto.getRandomValues(xe);const Be=xe[0]%(te+1);[U[te],U[Be]]=[U[Be],U[te]]}b.splice(T,U.length,...U)}return b},[]),me=w.useCallback(E=>{const b=d.find(Ae=>Ae.id===E);if(!b||!b.mainDeckList.length){y("No deck found or deck is empty. Please select a different deck.");return}const O=r||"AncientIrismon",T=b.mainSleeveName||"Default",F=b.eggSleeveName||"Default";f(),V.setState({messages:[]});const U=[];let te=0;for(const Ae of[...b.mainDeckList,...b.eggDeckList]){const Rt=h.find(dt=>dt.uniqueCardNumber===Ae);Rt?U.push({...Rt,id:Rt.id+"_"+U.length}):(te++,console.warn(`Card not found in fetchedCards: ${Ae}`))}te>0&&console.warn(`${te} cards from deck not found in card database`);let xe=U.map(Ae=>ke(Ae));xe=se(xe),xe=R(xe);const Be=xe.filter(Ae=>Ae.cardType==="Digi-Egg"),Le=xe.filter(Ae=>Ae.cardType!=="Digi-Egg"),Je=Le.splice(0,5).map(Ae=>({...Ae,isFaceUp:!1})),It=Le.splice(0,5).map(Ae=>({...Ae,isFaceUp:!1})),Wt=Le.map(Ae=>({...Ae,isFaceUp:!1})),Ct=Be.map(Ae=>({...Ae,isFaceUp:!1}));V.setState({myHand:It,mySecurity:Je,myDeckField:Wt,myEggDeck:Ct,myMemory:0,opponentMemory:0,phase:Ei.MAIN,bootStage:$i.GAME_IN_PROGRESS,player1:{username:i,avatarName:O,mainSleeveName:T,eggSleeveName:F}}),p({username:i,avatarName:O,mainSleeveName:T,eggSleeveName:F},{username:"Test Dummy",avatarName:"AncientIrismon",mainSleeveName:"Default",eggSleeveName:"Default"})},[d,h,ke,se,f,p,y,i,r,R]),Re=w.useCallback(()=>{me(s)},[s,me]);w.useEffect(()=>{o(),l()},[o,l]),w.useEffect(()=>{s&&vt.get(`/api/profile/decks/${s}`).then(E=>Z(E.data))},[s]),w.useEffect(()=>{const E=d.find(b=>b.id===s);E&&Z(E)},[d,s]),w.useEffect(()=>{d.length>0&&h.length>0&&Re()},[d.length,h.length,Re]);const Pe=w.useCallback(E=>{const b=typeof E=="string"?E:String(E);b.includes("/moveCard:")&&console.log(`Mock move action: ${b}`)},[]),Ee=w.useCallback(E=>{E?m():g();const b=()=>{ge.current!==null&&(clearTimeout(ge.current),ge.current=null),j(""),_(""),I(!1)};ge.current=setTimeout(()=>{j(""),_(""),I(!1)},3500),ne(()=>b)},[g,m,j,_,I]),lt=Da({sendMessage:Pe,restartAttackAnimation:Ee,clearAttackAnimation:W});w.useLayoutEffect(()=>{const E=b=>{const{item:O,targetId:T}=b.detail,F=T.includes("_bottom"),U=F?T.replace("_bottom",""):T,te=lt(U,{bottom:F});te?.drop&&te.drop(O)};return window.addEventListener("reactDndDrop",E),()=>window.removeEventListener("reactDndDrop",E)},[lt]);function A(){if(ie)return;Q(!0);const E=setTimeout(()=>{x(),v(),Q(!1)},920);return()=>clearTimeout(E)}function D(E,b,O){Pe(`test:/moveCard:${E}:${b}:${O}`)}function C(E){E.length&&y(i+"﹕"+E)}function M(){f(),u("/")}function B(E){const b=String(E.target.value);c(b),setTimeout(()=>{me(b)},100)}const G={matchInfo:{gameId:"test-mode",user:i,opponentName:"Test Dummy"},sendMessage:Pe,sendMoveCard:D,sendChatMessage:C,sendSfx:E=>{E==="playShuffleDeckSfx"&&S()},sendPhaseUpdate:()=>console.log("Test mode: phase update"),nextPhase:A},J=q(E=>E.cardWidth*.45),le=w.useRef(null),Ce=le.current?Math.max(window.outerHeight-148,800):void 0;w.useLayoutEffect(()=>window.scrollTo(document.documentElement.scrollWidth-window.innerWidth,0),[]);const pe="ontouchstart"in window?Ia:Ra,de=a.jsxs(U5,{height:Ce,children:[a.jsx(H5,{children:a.jsxs(or,{iconFontSize:J,children:[a.jsx("a",{href:"https://world.digimoncard.com/rule/pdf/general_rules.pdf",target:"_blank",rel:"noopener noreferrer",title:"Rulings",children:a.jsxs(W5,{sx:{color:"white",position:"relative"},children:[a.jsx(Ba,{sx:{fontSize:`${J*.85}px!important`,opacity:.8}}),a.jsx(La,{sx:{color:"dodgerblue",position:"absolute",right:0,top:7,fontSize:`${J*.4}px!important`,pointerEvents:"none"}})]})}),a.jsx(za,{iconFontSize:`${J}px!important`})]})}),a.jsxs(q5,{children:[!L&&!H&&a.jsx(z0,{matchInfo:G.matchInfo,sendChatMessage:C}),!!H&&a.jsx(Na,{}),!!L&&a.jsx(Fa,{})]}),a.jsx($a,{}),a.jsx(Ga,{wsUtils:G}),a.jsxs(Y5,{children:[a.jsxs(X5,{children:[a.jsx(K5,{value:s,onChange:B,children:d.map(E=>a.jsx("option",{value:E.id,children:E.name},E.id))}),!!ee?.mainDeckList?.length&&a.jsx(ar,{deck:ee,lobbyView:!0})]}),a.jsxs(Z5,{children:[a.jsx(J5,{className:"button",title:"Reset the deck and restart test",onClick:Re,children:"RESET"}),a.jsx(Q5,{className:"button",title:"Exit test mode and return to lobby",onClick:M,children:"EXIT"})]})]}),a.jsx(Va,{wsUtils:G})]});return a.jsxs($5,{ref:le,children:[a.jsx(Aa,{}),a.jsx(Oa,{wsUtils:G}),a.jsx(_a,{wsUtils:G}),a.jsx(Pa,{}),a.jsxs(G5,{height:Ce,style:{minHeight:window.innerHeight},children:[$!==Lt.NO_IMAGE&&a.jsx(V5,{src:n?.imgUrl??e?.imgUrl??Gi,alt:"cardImg",onContextMenu:E=>X({event:E}),onClick:()=>t(null),...!e&&!n&&{style:{pointerEvents:"none",opacity:.25,filter:"saturate(0.5)"}}}),$===Lt.NO_IMAGE&&a.jsx("div",{style:{height:"10px"}}),a.jsx(Ar,{})]}),a.jsxs(Ta,{backend:pe,children:[de,a.jsx(Ma,{})]})]})}const $5=k.div`
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
`,G5=k.div`
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
`,V5=k.img`
    width: calc(100% - 10px);
    border-radius: 3.5%;
    aspect-ratio: 5 / 7;
    z-index: 1000;
`,U5=k.div`
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
`,H5=k.div`
    grid-column: 1 / 9;
    grid-row: 1 / 3;
    z-index: 1;
`,W5=k(ja)`
    width: fit-content;
    opacity: 0.7;
    display: flex;
`,q5=k.div`
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
`,Y5=k.div`
    grid-column: 4 / 32;
    grid-row: 4 / 10;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    z-index: 10;
`,J5=k.div`
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
`,Q5=k.div`
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
`,K5=k.select`
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
`,X5=k.div`
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
`,Z5=k.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;function eb(){const{data:t,isFetching:e,refetch:n}=Mi("/api/admin/banned"),{mutate:i,isPending:s}=ni("/api/admin/ban","PUT"),{mutate:r,isPending:o}=ni("/api/admin/unban","PUT"),[c,l]=w.useState("");function u(){i({pathVariable:"/"+c.trim()}).then(()=>l("")).finally(()=>n())}function d(h){r({pathVariable:"/"+h}).finally(()=>n())}return a.jsxs(tb,{children:[a.jsx("span",{style:{fontFamily:"Naston, sans-serif",color:"#1d7dfc"},children:"Banned Users:"}),a.jsxs(nb,{children:[a.jsx(sb,{placeholder:"Enter username to ban",value:c,onChange:h=>l(h.target.value),disabled:e||s||o}),a.jsx(et,{onClick:u,disabled:!c.trim()||t?.includes(c.trim())||e||s||o,children:"ADD"})]}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:t?.map(h=>a.jsx(ib,{label:h,onDelete:()=>d(h),disabled:e||s||o,variant:"outlined"},h))}),!t?.length&&a.jsx("span",{color:"rgba(255, 255, 255, 0.7)",children:"No banned users"})]})}const tb=k.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;
`,nb=k.div`
    display: flex;
    gap: 10px;
    align-items: center;
`,ib=k(P0)`
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
`,sb=k.input`
    width: 243px;
    height: 32px;
    background: #242424;
    font-family: Cousine, sans-serif;

    &:focus {
        outline: 2px solid #1d7dfc;
        outline-offset: -2px;
    }
`;function rb(){const{mutate:t,isPending:e}=ni("/api/admin/server-message","POST"),[n,i]=w.useState("");function s(){t({payload:{message:n.trim()}}).then(()=>i(""))}return a.jsxs(ob,{children:[a.jsx("span",{style:{fontFamily:"Naston, sans-serif",color:"#1d7dfc"},children:"Send server message:"}),a.jsx(ab,{placeholder:"Enter message to be sent to all chats",value:n,onChange:r=>i(r.target.value),disabled:e}),a.jsx(et,{onClick:s,disabled:!n.trim()||e,children:"SEND"})]})}const ob=k.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;
`,ab=k.input`
    width: 100%;
    max-width: 503px;
    height: 32px;
    background: #242424;
    font-family: Cousine, sans-serif;

    &:focus {
        outline: 2px solid #1d7dfc;
        outline-offset: -2px;
    }
`;function cb(){const t=q(i=>i.user),{data:e,isFetching:n}=Mi("/api/admin/admins");return!n&&e&&!e.includes(t)?a.jsx(rr,{to:"/"}):a.jsx(yn,{children:a.jsxs("div",{style:{paddingTop:20,maxWidth:1204,minHeight:"100vh",height:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start"},children:[a.jsx(Ii,{headline:"Administration",rightElement:a.jsx(Wi,{})}),n?a.jsx("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:a.jsx(Ht,{animationData:Or,loop:!0,style:{width:"50%"}})}):a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[a.jsx(eb,{}),a.jsx(rb,{})]})]})})}function lb(){const t=q(r=>r.me),e=q(r=>r.user),n=fe(r=>r.fetchCards),i=fe(r=>r.fetchDecks),s=q(r=>r.setParticlesInitialized);return w.useEffect(()=>t(),[t]),w.useEffect(()=>n(),[n]),w.useEffect(()=>{e.length&&e!=="anonymousUser"&&i()},[i,e]),w.useEffect(()=>{wu(async r=>await zp(r)).then(()=>s(!0))},[s]),a.jsxs(a.Fragment,{children:[a.jsx(ig,{}),a.jsxs(Wc,{children:[a.jsxs(st,{element:a.jsx(Jx,{}),children:[a.jsx(st,{path:"/",element:a.jsx(W2,{})}),a.jsx(st,{path:"/profile",element:a.jsx(Ox,{})}),a.jsx(st,{path:"/decks",element:a.jsx(Zy,{})}),a.jsx(st,{path:"/deckbuilder",element:a.jsx(ya,{})}),a.jsx(st,{path:"/deckbuilder/:id",element:a.jsx(ya,{})}),a.jsx(st,{path:"/game",element:a.jsx(ey,{})}),a.jsx(st,{path:"/test",element:a.jsx(F5,{})}),a.jsx(st,{path:"/administration",element:a.jsx(cb,{})}),a.jsx(st,{path:"/*",element:a.jsx(rr,{to:"/"})})]}),a.jsx(st,{path:"/login",element:a.jsx(Rx,{})}),a.jsx(st,{path:"/recover-password",element:a.jsx(Fx,{})})]})]})}qc.createRoot(document.getElementById("root")).render(a.jsx(lr.StrictMode,{children:a.jsx(Yc,{children:a.jsx(lb,{})})}));
