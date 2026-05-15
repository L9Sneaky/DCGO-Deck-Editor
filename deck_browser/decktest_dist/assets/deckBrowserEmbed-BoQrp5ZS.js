import{s as v,A as L,a7 as S,a as W,a5 as O,r as g,a6 as ze,ae as Ve,ai as _e,aI as Xe,j as s,aS as Ge,aT as He,aU as We,aV as Ye,aW as Ze,ac as Ke,aX as Je,aJ as Qe,aK as et,aL as tt,aM as nt,a0 as st,aO as it,aP as rt,aQ as ot,aR as at,aN as pe,bj as lt,b0 as ct,bl as dt}from"./index-2cjrbyn3.js";const te="AncientIrismon",B="Default",me="Deck Browser";function k(e,a){return(e.effectSections||[]).find(c=>c.label===a)?.text??""}function ut(e){const a=k(e,"Main Effect")||k(e,"Option Effect"),l=k(e,"Inherited"),c=k(e,"Security"),p=k(e,"Special Digivolve"),h=k(e,"Burst Digivolve"),u=k(e,"DNA Digivolve"),j=k(e,"DigiXros"),C=k(e,"Assembly"),T=k(e,"Rule"),R=k(e,"ACE"),f=e.linkEffect||k(e,"Link Effect"),y=e.linkRequirement||k(e,"Link Requirement"),V=(e.digivolveConditions||[]).filter(w=>w&&w.cost!==null&&w.level!==null&&w.color).map(w=>({color:String(w.color),cost:Number(w.cost),level:Number(w.level)}));return{id:e.code,uniqueCardNumber:e.code,cardNumber:e.cardNumber,name:e.name,imgUrl:e.imageUrl||"",cardType:e.type||"",color:e.colors||[],attribute:e.attribute||void 0,stage:e.stage||void 0,digiType:e.digitype||[],dp:e.dp??void 0,playCost:e.playCost??void 0,level:e.level??void 0,digivolveConditions:V.length?V:void 0,specialDigivolve:p||void 0,burstDigivolve:h||void 0,dnaDigivolve:u||void 0,digiXros:j||void 0,assemblyEffect:C||void 0,mainEffect:a||void 0,inheritedEffect:l||void 0,securityEffect:c||void 0,aceEffect:R||void 0,rule:T||void 0,linkDP:e.linkDP??void 0,linkEffect:f||void 0,linkRequirement:y||void 0,restrictions:{english:e.restriction||"Unrestricted",japanese:"",chinese:"",korean:""},illustrator:e.illustrator||""}}function ft(e){const a=[],l=[];return e.cards.forEach(c=>{const p=Math.max(0,Number(c.count)||0);for(let h=0;h<p;h+=1)c.type==="Digi-Egg"?l.push(c.code):a.push(c.code)}),{main:a,eggs:l}}function gt(e){const a=ft(e);return{id:e.id,name:e.name,mainDeckList:a.main,eggDeckList:a.eggs,deckImageCardUrl:e.coverImageUrl||"",mainSleeveName:B,eggSleeveName:B}}function pt(e){const a=new Set;return e.filter(l=>l&&l.code).map(l=>a.has(l.code)?null:(a.add(l.code),ut(l))).filter(l=>!!l)}function xe(e){switch(e.toLowerCase()){case"red":return"#f05155";case"blue":return"#4ea7f7";case"yellow":return"#ffd057";case"green":return"#2abb68";case"purple":return"#9b6df3";case"black":return"#222";case"white":return"#f2f6fb";default:return"#6fd6ff"}}function mt(e){return e.toLowerCase()==="white"?"#091724":"#f7fbff"}const ht=new Set(["On Play","When Digivolving","When Attacking","When Linking","End of Attack","On Deletion","Your Turn","All Turns","Opponent's Turn","End of Opponent's Turn","Start of Your Turn","End of Your Turn","Security","Main","Start of Your Main Phase","Start of Opponent's Main Phase","Counter","End of All Turns"]),xt=new Set(["Once Per Turn","Twice Per Turn","Hand","Trash","Breeding"]),bt=new Set(["DigiXros -1","DigiXros -2","DigiXros -3","DigiXros -4","Burst Digivolve","DNA Digivolve","Link"]),vt=new Set(["Digivolve","Arts Digivolve","App Fusion"]);function q(e){return e==null||e===""?"—":String(e)}function kt(e){return/^(Lv\.\d+|\d{3,6}|[A-Z][A-Z0-9 ./'-]{2,})$/.test(e)}function yt(e,a){return a?"effect-token angle":xt.has(e)?"effect-token recurring":ht.has(e)?"effect-token timing":e==="Rule"?"effect-token rule":bt.has(e)?"effect-token special":vt.has(e)||e.includes("Assembly")?"effect-token evolution":kt(e)?"effect-token trait":"effect-token name"}function he(e,a){const l=e.split(`
`);return l.flatMap((c,p)=>p===l.length-1?[c]:[c,s.jsx("br",{},`${a}-br-${p}`)])}function z(e){const a=String(e||""),l=/(\[([^\]]+)\]|＜([^＞]+)＞)/g,c=[];let p,h=0,u=0;for(;(p=l.exec(a))!==null;){c.push(...he(a.slice(h,p.index),`plain-${u}`));const j=!!p[3],C=p[2]||p[3]||"";c.push(s.jsx("span",{className:yt(C,j),children:C},`token-${u}-${p.index}`)),h=l.lastIndex,u+=1}return c.push(...he(a.slice(h),`tail-${u}`)),c}function wt(e){if(!e)return[];const a=[{label:"Special Digivolve",text:e.specialDigivolve||""},{label:"DNA Digivolve",text:e.dnaDigivolve||""},{label:"Burst Digivolve",text:e.burstDigivolve||""},{label:"Link Requirement",text:e.linkRequirement||""},{label:e.cardType==="Option"?"Option Effect":"Main Effect",text:e.mainEffect||""},{label:"Security",text:e.securityEffect||""},{label:"Inherited",text:e.inheritedEffect||""},{label:"DigiXros",text:e.digiXros||""},{label:"Assembly",text:e.assemblyEffect||""},{label:"ACE",text:e.aceEffect||""},{label:"Link Effect",text:e.linkEffect||""},{label:"Rule",text:e.rule||""}].filter(c=>c.text.trim()),l={"Special Digivolve":0,"DNA Digivolve":0,"Burst Digivolve":0,"Link Requirement":0,"Main Effect":1,"Option Effect":1,Security:2,Inherited:3,Rule:4,DigiXros:5,Assembly:6,ACE:7,"Link Effect":8};return a.map((c,p)=>({section:c,index:p})).sort((c,p)=>{const h=l[c.section.label]??99,u=l[p.section.label]??99;return h!==u?h-u:c.index-p.index}).map(c=>c.section)}function Dt(e,a){return e==="Main Effect"?"MAIN EFFECT":e==="Option Effect"?"OPTION EFFECT":e==="Inherited"?a.cardType==="Option"||a.cardType==="Tamer"?"SECURITY EFFECT":"INHERITED EFFECT ↗":e==="Security"?"SECURITY EFFECT":e==="ACE"?"ACE EFFECT":e==="Link Effect"?"LINK EFFECT":e.toUpperCase()}function Ct(e){return["Arts Digivolve","Special Digivolve","DNA Digivolve","Burst Digivolve","DigiXros","Assembly","Link Requirement"].includes(e)}function Et({colors:e}){const a=e.length?e:["Unknown"];return s.jsx("div",{className:"details-color-strip",children:a.map(l=>s.jsx("div",{className:"details-color-segment",style:{background:xe(l),color:mt(l)},children:l},l))})}function St({color:e}){return s.jsx("span",{className:"details-color-dot",title:e||"",style:{background:xe(String(e||""))}})}function jt({card:e}){const a=e.level!==void 0||e.stage||e.dp!==void 0,l=e.cardType!=="Digi-Egg"&&e.playCost!==void 0&&e.playCost!==null,c=e.digivolveConditions||[],p=l||c.length>0;return!a&&!p?null:s.jsxs("div",{className:"details-info-card",children:[a&&s.jsxs("div",{className:"details-info-row",children:[e.level!==void 0&&s.jsxs("span",{children:["Lv.",s.jsx("span",{className:"details-info-metric",children:q(e.level)})]}),!!e.stage&&s.jsxs("span",{children:["Stage: ",s.jsx("span",{className:"details-info-metric",children:e.stage})]}),e.dp!==void 0&&s.jsxs("span",{children:["DP: ",s.jsx("span",{className:"details-info-metric",children:q(e.dp)})]})]}),p&&s.jsxs("div",{className:"details-info-row",children:[l&&s.jsxs("span",{children:[e.cardType==="Option"?"Use: ":"Play: ",s.jsx("span",{className:"details-info-metric",children:q(e.playCost)})]}),!!c.length&&s.jsxs("span",{children:["Digivolve: ",s.jsx("span",{className:"details-info-metric",children:q(c[0].cost)})," from"," ",c.map((h,u)=>s.jsxs("span",{children:[u>0&&" | ",s.jsx(St,{color:h.color})]},`${h.color}-${h.level}-${u}`))," ","Lv.",s.jsx("span",{className:"details-info-metric",children:q(c[0].level)})]})]})]})}function Nt({onImageContextMenu:e,onImageClick:a}){const l=L(f=>f.selectedCard),c=L(f=>f.hoverCard),p=S(f=>f.inheritCardInfo),h=S(f=>f.linkCardInfo),u=c||l;if(!u)return s.jsxs("div",{className:"details-body dcgo-sim-details-body",children:[s.jsx("div",{className:"details-art",children:s.jsx("img",{src:pe,alt:"Card back",style:{opacity:.25,filter:"saturate(0.5)",pointerEvents:"none"}})}),s.jsx("div",{className:"empty-state",children:"Hover or select a card to inspect it."})]});const j=u.color||[],C=u.digiType||[],T=h.reduce((f,y)=>f+(Number(y.dp)||0),0),R=`https://digimoncardgame.fandom.com/wiki/${u.cardNumber}/Rulings`;return s.jsxs("div",{className:"details-body dcgo-sim-details-body","data-preview-kind":c?"hover":"selected",children:[s.jsx("div",{className:"details-art",children:s.jsx("img",{src:u.imgUrl||pe,alt:u.name,onContextMenu:e,onClick:a})}),s.jsxs("div",{className:"details-card-head",children:[s.jsx("h2",{className:"details-name",children:u.name}),!!C.length&&s.jsx("div",{className:"details-traits",children:C.map((f,y)=>s.jsxs("span",{children:[y>0&&s.jsx("span",{className:"details-trait-divider",children:"|"}),s.jsx("span",{children:f})]},`${f}-${y}`))})]}),s.jsx(Et,{colors:j}),s.jsx(jt,{card:u}),wt(u).map(f=>Ct(f.label)?s.jsx("section",{className:"details-special-card",children:z(f.text)},`${u.uniqueCardNumber}-${f.label}`):f.label==="Rule"?s.jsx("section",{className:"details-rule-card",children:z(f.text)},`${u.uniqueCardNumber}-${f.label}`):s.jsxs("section",{className:"details-effect-card",children:[s.jsx("div",{className:"details-effect-header",children:Dt(f.label,u)}),s.jsx("div",{className:"details-effect-text",children:z(f.text)})]},`${u.uniqueCardNumber}-${f.label}`)),!!h.length&&s.jsxs("section",{className:"details-effect-card tester-linked-section sim-linked-section",children:[s.jsxs("div",{className:"details-effect-header tester-linked-section-header sim-linked-section-header",children:[s.jsxs("span",{className:"tester-linked-title",children:["LINKED CARDS ",s.jsx("span",{className:"tester-linked-icon",children:"🔗"})]}),s.jsxs("span",{className:"tester-linked-dp-bonus sim-linked-dp-bonus",children:["+ ",T," DP"]})]}),h.map((f,y)=>s.jsx("div",{className:"details-effect-text",children:z(f.effect||"No linked effect text available.")},`link-${y}`))]}),!!p.filter(Boolean).length&&s.jsxs("section",{className:"details-effect-card tester-stack-inherited-card",children:[s.jsx("div",{className:"details-effect-header",children:"DIGIVOLUTION CARDS ↙"}),p.filter(Boolean).slice().reverse().map((f,y)=>s.jsx("div",{className:"details-effect-text",children:z(f)},`inherit-${y}`))]}),s.jsxs("div",{className:"details-footer",children:[s.jsx("span",{children:u.cardNumber}),!!u.illustrator&&s.jsxs("span",{children:["✒ ",u.illustrator]}),!!u.cardNumber&&s.jsx("a",{className:"details-rulings-link",href:R,target:"_blank",rel:"noopener noreferrer",children:"ℹ Rulings"})]})]})}function At(){const e=S(l=>l.messages),a=e.slice(-60).reverse();return s.jsxs(It,{children:[s.jsxs(Lt,{children:[s.jsx("span",{children:"Action Log"}),s.jsxs("small",{children:[e.length," events"]})]}),s.jsxs(Rt,{children:[!a.length&&s.jsx(Ut,{children:"Local test actions will appear here."}),a.map((l,c)=>{const p=l.replace(/^Deck Browser﹕/,"").replace(/^【SERVER】﹕/,"").replace(/\[FIELD_UPDATE\]≔/g,"").replace(/﹕/g," ");return s.jsx(Mt,{children:p},`${c}-${l}`)})]})]})}function Tt({deck:e,decks:a,cardCatalog:l,onExit:c}){const p=L(n=>n.selectCard),h=L(n=>n.user)||me,u=S(n=>n.clearBoard),j=S(n=>n.setPlayers),C=S(n=>n.progressToNextPhase),T=S(n=>n.setMessages),R=W(n=>n.playAttackSfx),f=W(n=>n.playEffectAttackSfx),y=W(n=>n.playNextPhaseSfx),V=W(n=>n.playShuffleDeckSfx),w=O(n=>n.setArrowFrom),Y=O(n=>n.setArrowTo),Z=O(n=>n.setIsEffectArrow),ne=O(n=>n.stackDialog),se=O(n=>n.openedCardDialog),{show:ke}=st({id:"detailsImageMenu"}),[ye,we]=g.useState(null),[De,ie]=g.useState(!1),[re,Ce]=g.useState(null),[F,oe]=g.useState(e.id),_=g.useRef(null),E=g.useMemo(()=>a.map(gt),[a]),I=g.useMemo(()=>pt(l),[l]);g.useEffect(()=>{ze.setState({decks:E,filteredCards:I,fetchedCards:I,isLoading:!1})},[E,I]),g.useEffect(()=>{L.setState({user:me,avatarName:te,activeDeckId:e.id}),oe(e.id)},[e.id]),g.useEffect(()=>{const n=E.find(t=>t.id===F)||null;Ce(n)},[E,F]);const ae=g.useCallback(n=>({...n,modifiers:{plusDp:0,plusSecurityAttacks:0,keywords:[],colors:n.color},isTilted:!1,isFaceUp:!1}),[]),le=g.useCallback(n=>{let t=[...n];for(let i=0;i<3;i++)t=X(t);t=ce(t),t=ce(t),t=Se(t),t=je(t),t=Ee(t),t=Ne(t);for(let i=0;i<3;i++)t=X(t);return t=Ae(t),t},[]),Ee=g.useCallback(n=>{const t=[...n],i=1e3;for(let r=0;r<i;r++){let o=!1;for(let d=0;d<t.length-1;d++)if(t[d].uniqueCardNumber===t[d+1].uniqueCardNumber){o=!0;let m=-1;const x=50;for(let D=0;D<x;D++){const U=new Uint32Array(1);crypto.getRandomValues(U);const N=U[0]%t.length;if(!(N>0&&t[N-1].uniqueCardNumber===t[d+1].uniqueCardNumber||N<t.length-1&&t[N+1].uniqueCardNumber===t[d+1].uniqueCardNumber||Math.abs(N-d)<=1)){m=N;break}}m!==-1&&([t[d+1],t[m]]=[t[m],t[d+1]])}if(!o)break}return t},[]),X=g.useCallback(n=>{const t=[...n];for(let i=t.length-1;i>0;i--){const r=new Uint32Array(1);crypto.getRandomValues(r);const o=r[0]%(i+1);[t[i],t[o]]=[t[o],t[i]]}return t},[]),ce=g.useCallback(n=>{const t=[...n],i=Math.floor(t.length/2),r=t.slice(0,i),o=t.slice(i),d=[];let m=0,x=0;for(;m<r.length&&x<o.length;){const D=new Uint32Array(1);crypto.getRandomValues(D),D[0]%2===0?d.push(r[m++]):d.push(o[x++])}return d.push(...r.slice(m)),d.push(...o.slice(x)),d},[]),Se=g.useCallback(n=>{const t=[];for(let i=0;i<n.length;i++){const r=new Uint32Array(1);crypto.getRandomValues(r);const o=r[0]%(i+1);o===i?t.push(n[i]):(t.push(t[o]),t[o]=n[i])}return t},[]),je=g.useCallback(n=>{const t=[...n],i=Math.max(3,Math.floor(Math.sqrt(n.length))),r=[];for(let o=0;o<t.length;o+=i)r.push(t.slice(o,o+i));for(let o=r.length-1;o>0;o--){const d=new Uint32Array(1);crypto.getRandomValues(d);const m=d[0]%(o+1);[r[o],r[m]]=[r[m],r[o]]}for(const o of r)for(let d=o.length-1;d>0;d--){const m=new Uint32Array(1);crypto.getRandomValues(m);const x=m[0]%(d+1);[o[d],o[x]]=[o[x],o[d]]}return r.flat()},[]),Ne=g.useCallback(n=>{const t=[...n];for(let i=t.length-1;i>0;i--){const r=new Uint32Array(1);crypto.getRandomValues(r);const o=r[0]%i;[t[i],t[o]]=[t[o],t[i]]}return t},[]),Ae=g.useCallback(n=>{const t=[...n],i=4;for(let r=t.length-i;r>=0;r-=i){const o=Math.min(r+i,t.length),d=t.slice(r,o);for(let m=d.length-1;m>0;m--){const x=new Uint32Array(1);crypto.getRandomValues(x);const D=x[0]%(m+1);[d[m],d[D]]=[d[D],d[m]]}t.splice(r,d.length,...d)}return t},[]),K=g.useCallback(n=>{const t=E.find(b=>b.id===n);if(!t||!t.mainDeckList.length){T("No deck found or deck is empty. Please select a different deck.");return}const i=te,r=t.mainSleeveName||B,o=t.eggSleeveName||B;u(),S.setState({messages:[]});const d=[];let m=0;for(const b of[...t.mainDeckList,...t.eggDeckList]){const ee=I.find(qe=>qe.uniqueCardNumber===b);ee?d.push({...ee,id:ee.id+"_"+d.length}):(m++,console.warn(`Card not found in fetchedCards: ${b}`))}m>0&&console.warn(`${m} cards from deck not found in card database`);let x=d.map(b=>ae(b));x=le(x),x=X(x);const D=x.filter(b=>b.cardType==="Digi-Egg"),U=x.filter(b=>b.cardType!=="Digi-Egg"),N=U.splice(0,5).map(b=>({...b,isFaceUp:!1})),ge=U.splice(0,5).map(b=>({...b,isFaceUp:!1})),$e=U.map(b=>({...b,isFaceUp:!1})),Oe=D.map(b=>({...b,isFaceUp:!1}));S.setState({myHand:ge,mySecurity:N,myDeckField:$e,myEggDeck:Oe,myMemory:0,opponentMemory:0,phase:_e.MAIN,bootStage:Ve.GAME_IN_PROGRESS,player1:{username:h,avatarName:i,mainSleeveName:r,eggSleeveName:o}}),j({username:h,avatarName:i,mainSleeveName:r,eggSleeveName:o},{username:"Test Dummy",avatarName:te,mainSleeveName:B,eggSleeveName:B})},[E,I,ae,le,u,j,T,h,X]),J=g.useCallback(()=>{K(F)},[F,K]);g.useEffect(()=>{E.length>0&&I.length>0&&J()},[E.length,I.length,J]);const Q=g.useCallback(n=>{const t=typeof n=="string"?n:String(n);t.includes("/moveCard:")&&console.log(`Mock move action: ${t}`)},[]),Te=g.useCallback(n=>{n?f():R();const t=()=>{_.current!==null&&(clearTimeout(_.current),_.current=null),w(""),Y(""),Z(!1)};_.current=window.setTimeout(()=>{w(""),Y(""),Z(!1)},3500),we(()=>t)},[R,f,w,Y,Z]),de=Xe({sendMessage:Q,restartAttackAnimation:Te,clearAttackAnimation:ye});g.useLayoutEffect(()=>{const n=t=>{const{item:i,targetId:r}=t.detail,o=r.includes("_bottom"),d=o?r.replace("_bottom",""):r,m=de(d,{bottom:o});m?.drop&&m.drop(i)};return window.addEventListener("reactDndDrop",n),()=>window.removeEventListener("reactDndDrop",n)},[de]);function Ie(){if(De)return;ie(!0);const n=setTimeout(()=>{C(),y(),ie(!1)},920);return()=>clearTimeout(n)}function Le(n,t,i){Q(`test:/moveCard:${n}:${t}:${i}`)}function Re(n){n.length&&T(h+"﹕"+n)}function Me(){u(),c?.()}function Ue(n){const t=String(n.target.value);L.setState({activeDeckId:t}),oe(t),setTimeout(()=>{K(t)},100)}const G={matchInfo:{gameId:"test-mode",user:h,opponentName:"Test Dummy"},sendMessage:Q,sendMoveCard:Le,sendChatMessage:Re,sendSfx:n=>{n==="playShuffleDeckSfx"&&V()},sendPhaseUpdate:()=>console.log("Test mode: phase update"),nextPhase:Ie},Be=L(n=>n.cardWidth*.45),ue=g.useRef(null),H=g.useRef(null),fe=ue.current?Math.max(window.innerHeight-32,720):void 0,Pe="ontouchstart"in window?rt:ot,$=g.useCallback((n,t)=>{const i=t?.querySelector(".dcgo-sim-details-body");i instanceof HTMLElement&&(i.scrollHeight<=i.clientHeight||(n.preventDefault(),n.stopPropagation(),i.scrollTop+=n.deltaY))},[]),M=g.useCallback(n=>{n.stopPropagation()},[]);g.useEffect(()=>{const n=H.current;if(!n)return;const t=i=>$(i,n);return n.addEventListener("wheel",t,{capture:!0,passive:!1}),()=>n.removeEventListener("wheel",t,{capture:!0})},[$]),g.useEffect(()=>{const n=t=>{const i=H.current;if(!i)return;const r=i.getBoundingClientRect();t.clientX>=r.left&&t.clientX<=r.right&&t.clientY>=r.top&&t.clientY<=r.bottom&&$(t,i)};return document.addEventListener("wheel",n,{capture:!0,passive:!1}),()=>document.removeEventListener("wheel",n,{capture:!0})},[$]);const Fe=s.jsxs(Ft,{height:fe,"data-testid":"deck-test-board",children:[s.jsx($t,{children:s.jsx(Ot,{"data-testid":"dcgo-settings-toolbar",children:s.jsx(Ge,{iconFontSize:`${Be}px!important`})})}),s.jsxs(qt,{children:[!ne&&!se&&s.jsx(At,{}),!!se&&s.jsx(He,{}),!!ne&&s.jsx(We,{})]}),s.jsx(Ye,{}),s.jsx(Ze,{wsUtils:G}),s.jsxs(zt,{children:[s.jsxs(Gt,{children:[s.jsx(Xt,{value:F,onChange:Ue,children:E.map(n=>s.jsx("option",{value:n.id,children:n.name},n.id))}),!!re?.mainDeckList?.length&&s.jsx(Ke,{deck:re,lobbyView:!0})]}),s.jsxs(Ht,{children:[s.jsx(Vt,{className:"button",title:"Reset the deck and restart test",onClick:J,children:"RESET"}),s.jsx(_t,{className:"button",title:"Exit test mode and return to deck browser",onClick:Me,children:"EXIT"})]})]}),s.jsx(Je,{wsUtils:G})]});return s.jsxs(Bt,{ref:ue,children:[s.jsx(Qe,{}),s.jsx(et,{wsUtils:G}),s.jsx(tt,{wsUtils:G}),s.jsx(nt,{}),s.jsx(Pt,{height:fe,ref:H,onWheel:n=>$(n,H.current),onPointerDown:M,onPointerMove:M,onPointerUp:M,onMouseDown:M,onMouseMove:M,onMouseUp:M,children:s.jsx(Nt,{onImageContextMenu:n=>ke({event:n}),onImageClick:()=>p(null)})}),s.jsxs(it,{backend:Pe,children:[Fe,s.jsx(at,{})]})]})}const It=v.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    color: #dff5ff;
`,Lt=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px;
    border-bottom: 1px solid rgba(95, 201, 231, 0.2);
    color: #69d8ff;
    font-size: 0.82rem;
    font-weight: 900;
    letter-spacing: 0.14em;
    text-transform: uppercase;

    small {
        color: rgba(222, 242, 255, 0.55);
        font-size: 0.72rem;
        letter-spacing: 0.05em;
        text-transform: none;
    }
`,Rt=v.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
    overflow-y: auto;
    padding: 10px;
    scrollbar-width: thin;
`,Mt=v.div`
    border: 1px solid rgba(95, 201, 231, 0.12);
    border-radius: 8px;
    background: rgba(5, 16, 28, 0.48);
    color: rgba(232, 246, 255, 0.82);
    font-family: Cousine, monospace;
    font-size: 0.74rem;
    line-height: 1.28;
    padding: 6px 7px;
    word-break: break-word;
`,Ut=v.div`
    margin: auto;
    color: rgba(222, 242, 255, 0.58);
    font-size: 0.9rem;
    text-align: center;
`,Bt=v.div`
    display: grid;
    grid-template-columns: clamp(292px, 18vw, 340px) minmax(0, 1fr);
    justify-content: stretch;
    align-items: stretch;

    position: relative;
    width: 100%;
    max-width: 100%;
    height: 100%;
    min-height: 0;
    overflow: hidden;
    gap: 0;
    background:
        radial-gradient(circle at 52% 48%, rgba(46, 170, 217, 0.2), transparent 34%),
        linear-gradient(115deg, rgba(19, 38, 89, 0.96), rgba(5, 93, 105, 0.96));
`,Pt=v.div`
    grid-column: 1;
    grid-row: 1;
    background:
        linear-gradient(180deg, rgba(15, 30, 51, 0.96), rgba(13, 25, 44, 0.98)),
        radial-gradient(circle at top, rgba(77, 204, 255, 0.08), transparent 45%);
    display: flex;
    width: clamp(292px, 18vw, 340px) !important;
    max-width: clamp(292px, 18vw, 340px);
    height: ${({height:e})=>e?`${e}px`:"100%"};
    max-height: 100%;
    min-height: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding: 14px 12px;
    border-right: 1px solid rgba(102, 201, 239, 0.22);
    box-shadow: inset -1px 0 0 rgba(255, 255, 255, 0.04), 12px 0 38px rgba(0, 0, 0, 0.18);
    overflow-x: hidden;
    overflow-y: hidden;
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
    scrollbar-width: thin;
    scrollbar-color: rgba(122, 213, 255, 0.45) rgba(5, 13, 24, 0.4);
    box-sizing: border-box;

    .dcgo-sim-details-body {
        width: 100%;
        height: 100%;
        max-height: 100%;
        min-height: 0;
        flex: 1 1 auto;
        overflow-y: auto;
        overflow-x: hidden;
        padding-bottom: 72px;
        overscroll-behavior: contain;
        -webkit-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
        cursor: text;
        scrollbar-width: thin;
        scrollbar-color: rgba(122, 213, 255, 0.45) rgba(5, 13, 24, 0.4);
    }

    .dcgo-sim-details-body * {
        -webkit-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
    }

    .dcgo-sim-details-body .details-art,
    .dcgo-sim-details-body .details-art * {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
    }

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(122, 213, 255, 0.35);
        border-radius: 10px;
    }

    .dcgo-sim-details-body::-webkit-scrollbar {
        width: 6px;
    }

    .dcgo-sim-details-body::-webkit-scrollbar-thumb {
        background: rgba(122, 213, 255, 0.35);
        border-radius: 10px;
    }
`,Ft=v.div`
    grid-column: 2;
    grid-row: 1;
    position: relative;
    aspect-ratio: 35 / 20;
    width: 100%;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    align-self: center;
    justify-self: center;
    min-width: 0;

    display: grid;
    grid-template-columns: repeat(35, 1fr);
    grid-template-rows: repeat(20, 1fr);

    container-type: inline-size;
    container-name: board-layout;

    transform: ${({isCameraTilted:e})=>e?"perspective(2000px) rotateX(35deg) rotateZ(0deg)":"unset"};
    padding: ${({isCameraTilted:e})=>e?"0 3.5vw 0 5vw":"0"};

    background:
        radial-gradient(circle at 45% 38%, rgba(73, 165, 237, 0.12), transparent 35%),
        radial-gradient(circle at 72% 52%, rgba(34, 211, 191, 0.1), transparent 34%);

    @media (max-aspect-ratio: 16 / 10) {
        width: 100%;
    }
`,$t=v.div`
    grid-column: 1 / 9;
    grid-row: 1 / 3;
    z-index: 1;
`,Ot=v.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: fit-content;
    padding: 0.35rem;
    border-radius: 999px;
    background: rgba(5, 16, 28, 0.26);
    backdrop-filter: blur(8px);
`,qt=v.div`
    height: 88%;
    width: 88%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    grid-column: 30 / 36;
    grid-row: 7 / 18;

    background: rgba(7, 21, 36, 0.55);
    border: 1px solid rgba(95, 201, 231, 0.28);
    border-radius: 16px;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 18px 30px rgba(0, 0, 0, 0.18);

    z-index: 20;
`,zt=v.div`
    grid-column: 4 / 32;
    grid-row: 3 / 8;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    z-index: 10;
`,Vt=v.div`
    border-radius: 14px;
    position: relative;
    border: none !important;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 126px;
    height: 76px;
    cursor: pointer;

    background: linear-gradient(180deg, rgba(31, 112, 168, 0.92), rgba(18, 72, 117, 0.9));
    color: ghostwhite;
    font-family: "Frutiger", sans-serif;
    font-size: 22px;
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
`,_t=v.div`
    border-radius: 14px;
    position: relative;
    border: none !important;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 126px;
    height: 76px;
    cursor: pointer;

    background: rgba(159, 39, 71, 0.8);
    color: ghostwhite;
    font-family: "Frutiger", sans-serif;
    font-size: 22px;
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
        background: rgba(206, 52, 93, 0.9);
        border: none;
        filter: saturate(1);
    }

    &:active {
        background: rgba(215, 22, 73, 1);
        box-shadow:
            inset -1px -1px 1px rgba(255, 255, 255, 0.4),
            inset 1px 1px 1px rgba(0, 0, 0, 0.8);
    }
`,Xt=v.select`
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
`,Gt=v.div`
    width: fit-content;
    height: fit-content;
    padding: 0.65rem;
    display: flex;
    flex-direction: column;
    gap: 6px;

    position: relative;
    color: ghostwhite;
    background: rgba(7, 21, 36, 0.5);
    border: 1px solid rgba(95, 201, 231, 0.24);
    border-radius: 14px;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.07), 0 14px 24px rgba(0, 0, 0, 0.16);
`,Ht=v.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;let P=null,A=null,be=0;function Wt(e){if(typeof e=="string"){const a=document.getElementById(e);if(!a)throw new Error(`Deck Browser mount root not found: ${e}`);return a}return e}function ve(){if(!A)return;const e=Wt(A.root);P||(P=lt.createRoot(e)),P.render(s.jsx(ct.StrictMode,{children:s.jsx(dt,{initialEntries:["/test"],children:s.jsx(Tt,{deck:A.deck,decks:A.decks,cardCatalog:A.cardCatalog,onExit:A.onExit},`decktest-${be}-${A.deck.id}`)})}))}function Yt(e){A=e,ve()}function Zt(){be+=1,ve()}function Kt(){P&&(P.unmount(),P=null)}const Jt={mount:Yt,unmount:Kt,reset:Zt};window.DCGODeckTest=Jt;window.dispatchEvent(new CustomEvent("dcgo-decktest-ready"));
