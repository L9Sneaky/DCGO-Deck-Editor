import{s as v,A as L,a7 as S,a as G,a5 as $,r as m,a6 as Pe,ae as Oe,ai as qe,aI as ze,j as t,aS as Ve,aT as _e,aU as Ge,aV as Xe,aW as He,ac as We,aX as Ye,aJ as Ze,aK as Ke,aL as Je,aM as Qe,a0 as et,aO as tt,aP as nt,aQ as st,aR as it,aN as ue,bj as rt,b0 as at,bl as ot}from"./index-BFMGloOV.js";const J="AncientIrismon",U="Default",fe="Deck Browser";function k(e,r){return(e.effectSections||[]).find(l=>l.label===r)?.text??""}function lt(e){const r=k(e,"Main Effect")||k(e,"Option Effect"),a=k(e,"Inherited"),l=k(e,"Security"),g=k(e,"Special Digivolve"),h=k(e,"Burst Digivolve"),u=k(e,"DNA Digivolve"),j=k(e,"DigiXros"),C=k(e,"Assembly"),T=k(e,"Rule"),R=k(e,"ACE"),f=e.linkEffect||k(e,"Link Effect"),y=e.linkRequirement||k(e,"Link Requirement"),q=(e.digivolveConditions||[]).filter(w=>w&&w.cost!==null&&w.level!==null&&w.color).map(w=>({color:String(w.color),cost:Number(w.cost),level:Number(w.level)}));return{id:e.code,uniqueCardNumber:e.code,cardNumber:e.cardNumber,name:e.name,imgUrl:e.imageUrl||"",cardType:e.type||"",color:e.colors||[],attribute:e.attribute||void 0,stage:e.stage||void 0,digiType:e.digitype||[],dp:e.dp??void 0,playCost:e.playCost??void 0,level:e.level??void 0,digivolveConditions:q.length?q:void 0,specialDigivolve:g||void 0,burstDigivolve:h||void 0,dnaDigivolve:u||void 0,digiXros:j||void 0,assemblyEffect:C||void 0,mainEffect:r||void 0,inheritedEffect:a||void 0,securityEffect:l||void 0,aceEffect:R||void 0,rule:T||void 0,linkDP:e.linkDP??void 0,linkEffect:f||void 0,linkRequirement:y||void 0,restrictions:{english:e.restriction||"Unrestricted",japanese:"",chinese:"",korean:""},illustrator:e.illustrator||""}}function ct(e){const r=[],a=[];return e.cards.forEach(l=>{const g=Math.max(0,Number(l.count)||0);for(let h=0;h<g;h+=1)l.type==="Digi-Egg"?a.push(l.code):r.push(l.code)}),{main:r,eggs:a}}function dt(e){const r=ct(e);return{id:e.id,name:e.name,mainDeckList:r.main,eggDeckList:r.eggs,deckImageCardUrl:e.coverImageUrl||"",mainSleeveName:U,eggSleeveName:U}}function ut(e){const r=new Set;return e.filter(a=>a&&a.code).map(a=>r.has(a.code)?null:(r.add(a.code),lt(a))).filter(a=>!!a)}function pe(e){switch(e.toLowerCase()){case"red":return"#f05155";case"blue":return"#4ea7f7";case"yellow":return"#ffd057";case"green":return"#2abb68";case"purple":return"#9b6df3";case"black":return"#222";case"white":return"#f2f6fb";default:return"#6fd6ff"}}function ft(e){return e.toLowerCase()==="white"?"#091724":"#f7fbff"}const gt=new Set(["On Play","When Digivolving","When Attacking","When Linking","End of Attack","On Deletion","Your Turn","All Turns","Opponent's Turn","End of Opponent's Turn","Start of Your Turn","End of Your Turn","Security","Main","Start of Your Main Phase","Start of Opponent's Main Phase","Counter","End of All Turns"]),pt=new Set(["Once Per Turn","Twice Per Turn","Hand","Trash","Breeding"]),mt=new Set(["DigiXros -1","DigiXros -2","DigiXros -3","DigiXros -4","Burst Digivolve","DNA Digivolve","Link"]),ht=new Set(["Digivolve","Arts Digivolve","App Fusion"]);function P(e){return e==null||e===""?"—":String(e)}function xt(e){return/^(Lv\.\d+|\d{3,6}|[A-Z][A-Z0-9 ./'-]{2,})$/.test(e)}function bt(e,r){return r?"effect-token angle":pt.has(e)?"effect-token recurring":gt.has(e)?"effect-token timing":e==="Rule"?"effect-token rule":mt.has(e)?"effect-token special":ht.has(e)||e.includes("Assembly")?"effect-token evolution":xt(e)?"effect-token trait":"effect-token name"}function ge(e,r){const a=e.split(`
`);return a.flatMap((l,g)=>g===a.length-1?[l]:[l,t.jsx("br",{},`${r}-br-${g}`)])}function O(e){const r=String(e||""),a=/(\[([^\]]+)\]|＜([^＞]+)＞)/g,l=[];let g,h=0,u=0;for(;(g=a.exec(r))!==null;){l.push(...ge(r.slice(h,g.index),`plain-${u}`));const j=!!g[3],C=g[2]||g[3]||"";l.push(t.jsx("span",{className:bt(C,j),children:C},`token-${u}-${g.index}`)),h=a.lastIndex,u+=1}return l.push(...ge(r.slice(h),`tail-${u}`)),l}function vt(e){if(!e)return[];const r=[{label:"Special Digivolve",text:e.specialDigivolve||""},{label:"DNA Digivolve",text:e.dnaDigivolve||""},{label:"Burst Digivolve",text:e.burstDigivolve||""},{label:"Link Requirement",text:e.linkRequirement||""},{label:e.cardType==="Option"?"Option Effect":"Main Effect",text:e.mainEffect||""},{label:"Security",text:e.securityEffect||""},{label:"Inherited",text:e.inheritedEffect||""},{label:"DigiXros",text:e.digiXros||""},{label:"Assembly",text:e.assemblyEffect||""},{label:"ACE",text:e.aceEffect||""},{label:"Link Effect",text:e.linkEffect||""},{label:"Rule",text:e.rule||""}].filter(l=>l.text.trim()),a={"Special Digivolve":0,"DNA Digivolve":0,"Burst Digivolve":0,"Link Requirement":0,"Main Effect":1,"Option Effect":1,Security:2,Inherited:3,Rule:4,DigiXros:5,Assembly:6,ACE:7,"Link Effect":8};return r.map((l,g)=>({section:l,index:g})).sort((l,g)=>{const h=a[l.section.label]??99,u=a[g.section.label]??99;return h!==u?h-u:l.index-g.index}).map(l=>l.section)}function kt(e,r){return e==="Main Effect"?"MAIN EFFECT":e==="Option Effect"?"OPTION EFFECT":e==="Inherited"?r.cardType==="Option"||r.cardType==="Tamer"?"SECURITY EFFECT":"INHERITED EFFECT ↗":e==="Security"?"SECURITY EFFECT":e==="ACE"?"ACE EFFECT":e==="Link Effect"?"LINK EFFECT":e.toUpperCase()}function yt(e){return["Arts Digivolve","Special Digivolve","DNA Digivolve","Burst Digivolve","DigiXros","Assembly","Link Requirement"].includes(e)}function wt({colors:e}){const r=e.length?e:["Unknown"];return t.jsx("div",{className:"details-color-strip",children:r.map(a=>t.jsx("div",{className:"details-color-segment",style:{background:pe(a),color:ft(a)},children:a},a))})}function Dt({color:e}){return t.jsx("span",{className:"details-color-dot",title:e||"",style:{background:pe(String(e||""))}})}function Ct({card:e}){const r=e.level!==void 0||e.stage||e.dp!==void 0,a=e.cardType!=="Digi-Egg"&&e.playCost!==void 0&&e.playCost!==null,l=e.digivolveConditions||[],g=a||l.length>0;return!r&&!g?null:t.jsxs("div",{className:"details-info-card",children:[r&&t.jsxs("div",{className:"details-info-row",children:[e.level!==void 0&&t.jsxs("span",{children:["Lv.",t.jsx("span",{className:"details-info-metric",children:P(e.level)})]}),!!e.stage&&t.jsxs("span",{children:["Stage: ",t.jsx("span",{className:"details-info-metric",children:e.stage})]}),e.dp!==void 0&&t.jsxs("span",{children:["DP: ",t.jsx("span",{className:"details-info-metric",children:P(e.dp)})]})]}),g&&t.jsxs("div",{className:"details-info-row",children:[a&&t.jsxs("span",{children:[e.cardType==="Option"?"Use: ":"Play: ",t.jsx("span",{className:"details-info-metric",children:P(e.playCost)})]}),!!l.length&&t.jsxs("span",{children:["Digivolve: ",t.jsx("span",{className:"details-info-metric",children:P(l[0].cost)})," from"," ",l.map((h,u)=>t.jsxs("span",{children:[u>0&&" | ",t.jsx(Dt,{color:h.color})]},`${h.color}-${h.level}-${u}`))," ","Lv.",t.jsx("span",{className:"details-info-metric",children:P(l[0].level)})]})]})]})}function Et({onImageContextMenu:e,onImageClick:r}){const a=L(f=>f.selectedCard),l=L(f=>f.hoverCard),g=S(f=>f.inheritCardInfo),h=S(f=>f.linkCardInfo),u=l||a;if(!u)return t.jsxs("div",{className:"details-body dcgo-sim-details-body",children:[t.jsx("div",{className:"details-art",children:t.jsx("img",{src:ue,alt:"Card back",style:{opacity:.25,filter:"saturate(0.5)",pointerEvents:"none"}})}),t.jsx("div",{className:"empty-state",children:"Hover or select a card to inspect it."})]});const j=u.color||[],C=u.digiType||[],T=h.reduce((f,y)=>f+(Number(y.dp)||0),0),R=`https://digimoncardgame.fandom.com/wiki/${u.cardNumber}/Rulings`;return t.jsxs("div",{className:"details-body dcgo-sim-details-body","data-preview-kind":l?"hover":"selected",children:[t.jsx("div",{className:"details-art",children:t.jsx("img",{src:u.imgUrl||ue,alt:u.name,onContextMenu:e,onClick:r})}),t.jsxs("div",{className:"details-card-head",children:[t.jsx("h2",{className:"details-name",children:u.name}),!!C.length&&t.jsx("div",{className:"details-traits",children:C.map((f,y)=>t.jsxs("span",{children:[y>0&&t.jsx("span",{className:"details-trait-divider",children:"|"}),t.jsx("span",{children:f})]},`${f}-${y}`))})]}),t.jsx(wt,{colors:j}),t.jsx(Ct,{card:u}),vt(u).map(f=>yt(f.label)?t.jsx("section",{className:"details-special-card",children:O(f.text)},`${u.uniqueCardNumber}-${f.label}`):f.label==="Rule"?t.jsx("section",{className:"details-rule-card",children:O(f.text)},`${u.uniqueCardNumber}-${f.label}`):t.jsxs("section",{className:"details-effect-card",children:[t.jsx("div",{className:"details-effect-header",children:kt(f.label,u)}),t.jsx("div",{className:"details-effect-text",children:O(f.text)})]},`${u.uniqueCardNumber}-${f.label}`)),!!h.length&&t.jsxs("section",{className:"details-effect-card tester-linked-section sim-linked-section",children:[t.jsxs("div",{className:"details-effect-header tester-linked-section-header sim-linked-section-header",children:[t.jsxs("span",{className:"tester-linked-title",children:["LINKED CARDS ",t.jsx("span",{className:"tester-linked-icon",children:"🔗"})]}),t.jsxs("span",{className:"tester-linked-dp-bonus sim-linked-dp-bonus",children:["+ ",T," DP"]})]}),h.map((f,y)=>t.jsx("div",{className:"details-effect-text",children:O(f.effect||"No linked effect text available.")},`link-${y}`))]}),!!g.filter(Boolean).length&&t.jsxs("section",{className:"details-effect-card tester-stack-inherited-card",children:[t.jsx("div",{className:"details-effect-header",children:"DIGIVOLUTION CARDS ↙"}),g.filter(Boolean).slice().reverse().map((f,y)=>t.jsx("div",{className:"details-effect-text",children:O(f)},`inherit-${y}`))]}),t.jsxs("div",{className:"details-footer",children:[t.jsx("span",{children:u.cardNumber}),!!u.illustrator&&t.jsxs("span",{children:["✒ ",u.illustrator]}),!!u.cardNumber&&t.jsx("a",{className:"details-rulings-link",href:R,target:"_blank",rel:"noopener noreferrer",children:"ℹ Rulings"})]})]})}function St(){const e=S(a=>a.messages),r=e.slice(-60).reverse();return t.jsxs(Nt,{children:[t.jsxs(At,{children:[t.jsx("span",{children:"Action Log"}),t.jsxs("small",{children:[e.length," events"]})]}),t.jsxs(Tt,{children:[!r.length&&t.jsx(Lt,{children:"Local test actions will appear here."}),r.map((a,l)=>{const g=a.replace(/^Deck Browser﹕/,"").replace(/^【SERVER】﹕/,"").replace(/\[FIELD_UPDATE\]≔/g,"").replace(/﹕/g," ");return t.jsx(It,{children:g},`${l}-${a}`)})]})]})}function jt({deck:e,decks:r,cardCatalog:a,onExit:l}){const g=L(s=>s.selectCard),h=L(s=>s.user)||fe,u=S(s=>s.clearBoard),j=S(s=>s.setPlayers),C=S(s=>s.progressToNextPhase),T=S(s=>s.setMessages),R=G(s=>s.playAttackSfx),f=G(s=>s.playEffectAttackSfx),y=G(s=>s.playNextPhaseSfx),q=G(s=>s.playShuffleDeckSfx),w=$(s=>s.setArrowFrom),X=$(s=>s.setArrowTo),H=$(s=>s.setIsEffectArrow),Q=$(s=>s.stackDialog),ee=$(s=>s.openedCardDialog),{show:xe}=et({id:"detailsImageMenu"}),[be,ve]=m.useState(null),[ke,te]=m.useState(!1),[ne,ye]=m.useState(null),[F,se]=m.useState(e.id),z=m.useRef(null),E=m.useMemo(()=>r.map(dt),[r]),I=m.useMemo(()=>ut(a),[a]);m.useEffect(()=>{Pe.setState({decks:E,filteredCards:I,fetchedCards:I,isLoading:!1})},[E,I]),m.useEffect(()=>{L.setState({user:fe,avatarName:J,activeDeckId:e.id}),se(e.id)},[e.id]),m.useEffect(()=>{const s=E.find(n=>n.id===F)||null;ye(s)},[E,F]);const ie=m.useCallback(s=>({...s,modifiers:{plusDp:0,plusSecurityAttacks:0,keywords:[],colors:s.color},isTilted:!1,isFaceUp:!1}),[]),re=m.useCallback(s=>{let n=[...s];for(let i=0;i<3;i++)n=V(n);n=ae(n),n=ae(n),n=De(n),n=Ce(n),n=we(n),n=Ee(n);for(let i=0;i<3;i++)n=V(n);return n=Se(n),n},[]),we=m.useCallback(s=>{const n=[...s],i=1e3;for(let d=0;d<i;d++){let o=!1;for(let c=0;c<n.length-1;c++)if(n[c].uniqueCardNumber===n[c+1].uniqueCardNumber){o=!0;let p=-1;const x=50;for(let D=0;D<x;D++){const M=new Uint32Array(1);crypto.getRandomValues(M);const N=M[0]%n.length;if(!(N>0&&n[N-1].uniqueCardNumber===n[c+1].uniqueCardNumber||N<n.length-1&&n[N+1].uniqueCardNumber===n[c+1].uniqueCardNumber||Math.abs(N-c)<=1)){p=N;break}}p!==-1&&([n[c+1],n[p]]=[n[p],n[c+1]])}if(!o)break}return n},[]),V=m.useCallback(s=>{const n=[...s];for(let i=n.length-1;i>0;i--){const d=new Uint32Array(1);crypto.getRandomValues(d);const o=d[0]%(i+1);[n[i],n[o]]=[n[o],n[i]]}return n},[]),ae=m.useCallback(s=>{const n=[...s],i=Math.floor(n.length/2),d=n.slice(0,i),o=n.slice(i),c=[];let p=0,x=0;for(;p<d.length&&x<o.length;){const D=new Uint32Array(1);crypto.getRandomValues(D),D[0]%2===0?c.push(d[p++]):c.push(o[x++])}return c.push(...d.slice(p)),c.push(...o.slice(x)),c},[]),De=m.useCallback(s=>{const n=[];for(let i=0;i<s.length;i++){const d=new Uint32Array(1);crypto.getRandomValues(d);const o=d[0]%(i+1);o===i?n.push(s[i]):(n.push(n[o]),n[o]=s[i])}return n},[]),Ce=m.useCallback(s=>{const n=[...s],i=Math.max(3,Math.floor(Math.sqrt(s.length))),d=[];for(let o=0;o<n.length;o+=i)d.push(n.slice(o,o+i));for(let o=d.length-1;o>0;o--){const c=new Uint32Array(1);crypto.getRandomValues(c);const p=c[0]%(o+1);[d[o],d[p]]=[d[p],d[o]]}for(const o of d)for(let c=o.length-1;c>0;c--){const p=new Uint32Array(1);crypto.getRandomValues(p);const x=p[0]%(c+1);[o[c],o[x]]=[o[x],o[c]]}return d.flat()},[]),Ee=m.useCallback(s=>{const n=[...s];for(let i=n.length-1;i>0;i--){const d=new Uint32Array(1);crypto.getRandomValues(d);const o=d[0]%i;[n[i],n[o]]=[n[o],n[i]]}return n},[]),Se=m.useCallback(s=>{const n=[...s],i=4;for(let d=n.length-i;d>=0;d-=i){const o=Math.min(d+i,n.length),c=n.slice(d,o);for(let p=c.length-1;p>0;p--){const x=new Uint32Array(1);crypto.getRandomValues(x);const D=x[0]%(p+1);[c[p],c[D]]=[c[D],c[p]]}n.splice(d,c.length,...c)}return n},[]),W=m.useCallback(s=>{const n=E.find(b=>b.id===s);if(!n||!n.mainDeckList.length){T("No deck found or deck is empty. Please select a different deck.");return}const i=J,d=n.mainSleeveName||U,o=n.eggSleeveName||U;u(),S.setState({messages:[]});const c=[];let p=0;for(const b of[...n.mainDeckList,...n.eggDeckList]){const K=I.find($e=>$e.uniqueCardNumber===b);K?c.push({...K,id:K.id+"_"+c.length}):(p++,console.warn(`Card not found in fetchedCards: ${b}`))}p>0&&console.warn(`${p} cards from deck not found in card database`);let x=c.map(b=>ie(b));x=re(x),x=V(x);const D=x.filter(b=>b.cardType==="Digi-Egg"),M=x.filter(b=>b.cardType!=="Digi-Egg"),N=M.splice(0,5).map(b=>({...b,isFaceUp:!1})),de=M.splice(0,5).map(b=>({...b,isFaceUp:!1})),Be=M.map(b=>({...b,isFaceUp:!1})),Fe=D.map(b=>({...b,isFaceUp:!1}));S.setState({myHand:de,mySecurity:N,myDeckField:Be,myEggDeck:Fe,myMemory:0,opponentMemory:0,phase:qe.MAIN,bootStage:Oe.GAME_IN_PROGRESS,player1:{username:h,avatarName:i,mainSleeveName:d,eggSleeveName:o}}),j({username:h,avatarName:i,mainSleeveName:d,eggSleeveName:o},{username:"Test Dummy",avatarName:J,mainSleeveName:U,eggSleeveName:U})},[E,I,ie,re,u,j,T,h,V]),Y=m.useCallback(()=>{W(F)},[F,W]);m.useEffect(()=>{E.length>0&&I.length>0&&Y()},[E.length,I.length,Y]);const Z=m.useCallback(s=>{const n=typeof s=="string"?s:String(s);n.includes("/moveCard:")&&console.log(`Mock move action: ${n}`)},[]),je=m.useCallback(s=>{s?f():R();const n=()=>{z.current!==null&&(clearTimeout(z.current),z.current=null),w(""),X(""),H(!1)};z.current=window.setTimeout(()=>{w(""),X(""),H(!1)},3500),ve(()=>n)},[R,f,w,X,H]),oe=ze({sendMessage:Z,restartAttackAnimation:je,clearAttackAnimation:be});m.useLayoutEffect(()=>{const s=n=>{const{item:i,targetId:d}=n.detail,o=d.includes("_bottom"),c=o?d.replace("_bottom",""):d,p=oe(c,{bottom:o});p?.drop&&p.drop(i)};return window.addEventListener("reactDndDrop",s),()=>window.removeEventListener("reactDndDrop",s)},[oe]);function Ne(){if(ke)return;te(!0);const s=setTimeout(()=>{C(),y(),te(!1)},920);return()=>clearTimeout(s)}function Ae(s,n,i){Z(`test:/moveCard:${s}:${n}:${i}`)}function Te(s){s.length&&T(h+"﹕"+s)}function Ie(){u(),l?.()}function Le(s){const n=String(s.target.value);L.setState({activeDeckId:n}),se(n),setTimeout(()=>{W(n)},100)}const _={matchInfo:{gameId:"test-mode",user:h,opponentName:"Test Dummy"},sendMessage:Z,sendMoveCard:Ae,sendChatMessage:Te,sendSfx:s=>{s==="playShuffleDeckSfx"&&q()},sendPhaseUpdate:()=>console.log("Test mode: phase update"),nextPhase:Ne},Re=L(s=>s.cardWidth*.45),le=m.useRef(null),ce=le.current?Math.max(window.innerHeight-32,720):void 0,Me="ontouchstart"in window?nt:st,Ue=t.jsxs(Ut,{height:ce,"data-testid":"deck-test-board",children:[t.jsx(Bt,{children:t.jsx(Ft,{"data-testid":"dcgo-settings-toolbar",children:t.jsx(Ve,{iconFontSize:`${Re}px!important`})})}),t.jsxs($t,{children:[!Q&&!ee&&t.jsx(St,{}),!!ee&&t.jsx(_e,{}),!!Q&&t.jsx(Ge,{})]}),t.jsx(Xe,{}),t.jsx(He,{wsUtils:_}),t.jsxs(Pt,{children:[t.jsxs(Vt,{children:[t.jsx(zt,{value:F,onChange:Le,children:E.map(s=>t.jsx("option",{value:s.id,children:s.name},s.id))}),!!ne?.mainDeckList?.length&&t.jsx(We,{deck:ne,lobbyView:!0})]}),t.jsxs(_t,{children:[t.jsx(Ot,{className:"button",title:"Reset the deck and restart test",onClick:Y,children:"RESET"}),t.jsx(qt,{className:"button",title:"Exit test mode and return to deck browser",onClick:Ie,children:"EXIT"})]})]}),t.jsx(Ye,{wsUtils:_})]});return t.jsxs(Rt,{ref:le,children:[t.jsx(Ze,{}),t.jsx(Ke,{wsUtils:_}),t.jsx(Je,{wsUtils:_}),t.jsx(Qe,{}),t.jsx(Mt,{height:ce,children:t.jsx(Et,{onImageContextMenu:s=>xe({event:s}),onImageClick:()=>g(null)})}),t.jsxs(tt,{backend:Me,children:[Ue,t.jsx(it,{})]})]})}const Nt=v.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    color: #dff5ff;
`,At=v.div`
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
`,Tt=v.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
    overflow-y: auto;
    padding: 10px;
    scrollbar-width: thin;
`,It=v.div`
    border: 1px solid rgba(95, 201, 231, 0.12);
    border-radius: 8px;
    background: rgba(5, 16, 28, 0.48);
    color: rgba(232, 246, 255, 0.82);
    font-family: Cousine, monospace;
    font-size: 0.74rem;
    line-height: 1.28;
    padding: 6px 7px;
    word-break: break-word;
`,Lt=v.div`
    margin: auto;
    color: rgba(222, 242, 255, 0.58);
    font-size: 0.9rem;
    text-align: center;
`,Rt=v.div`
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
`,Mt=v.div`
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
        scrollbar-width: thin;
        scrollbar-color: rgba(122, 213, 255, 0.45) rgba(5, 13, 24, 0.4);
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
`,Ut=v.div`
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
`,Bt=v.div`
    grid-column: 1 / 9;
    grid-row: 1 / 3;
    z-index: 1;
`,Ft=v.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: fit-content;
    padding: 0.35rem;
    border-radius: 999px;
    background: rgba(5, 16, 28, 0.26);
    backdrop-filter: blur(8px);
`,$t=v.div`
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
`,Pt=v.div`
    grid-column: 4 / 32;
    grid-row: 3 / 8;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    z-index: 10;
`,Ot=v.div`
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
`,qt=v.div`
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
`,zt=v.select`
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
`,Vt=v.div`
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
`,_t=v.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;let B=null,A=null,me=0;function Gt(e){if(typeof e=="string"){const r=document.getElementById(e);if(!r)throw new Error(`Deck Browser mount root not found: ${e}`);return r}return e}function he(){if(!A)return;const e=Gt(A.root);B||(B=rt.createRoot(e)),B.render(t.jsx(at.StrictMode,{children:t.jsx(ot,{initialEntries:["/test"],children:t.jsx(jt,{deck:A.deck,decks:A.decks,cardCatalog:A.cardCatalog,onExit:A.onExit},`decktest-${me}-${A.deck.id}`)})}))}function Xt(e){A=e,he()}function Ht(){me+=1,he()}function Wt(){B&&(B.unmount(),B=null)}const Yt={mount:Xt,unmount:Wt,reset:Ht};window.DCGODeckTest=Yt;window.dispatchEvent(new CustomEvent("dcgo-decktest-ready"));
