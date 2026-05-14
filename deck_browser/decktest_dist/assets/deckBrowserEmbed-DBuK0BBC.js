import{s as c,aD as _e,A as C,a1 as S,a as _,$,r as u,a0 as He,aa as Xe,ae as We,aE as Ke,j as e,a6 as Ze,aO as Je,aP as Qe,aQ as Ye,aR as et,aS as tt,aT as nt,aU as rt,a8 as ot,aV as st,aF as it,aG as at,aH as lt,aI as ct,W as dt,aJ as gt,aK as ft,aL as ut,aM as pt,aN as xt,ay as P,bh as ht,a_ as mt,bj as bt}from"./index-DTM0aWW1.js";const te="AncientIrismon",T="Default",me="Deck Browser";function b(n,f){return(n.effectSections||[]).find(m=>m.label===f)?.text??""}function vt(n){const f=b(n,"Main Effect")||b(n,"Option Effect"),p=b(n,"Inherited"),m=b(n,"Security"),l=b(n,"Special Digivolve"),k=b(n,"Burst Digivolve"),N=b(n,"DNA Digivolve"),D=b(n,"DigiXros"),L=b(n,"Assembly"),d=b(n,"Rule"),v=b(n,"ACE"),U=n.linkEffect||b(n,"Link Effect"),F=n.linkRequirement||b(n,"Link Requirement"),B=(n.digivolveConditions||[]).filter(w=>w&&w.cost!==null&&w.level!==null&&w.color).map(w=>({color:String(w.color),cost:Number(w.cost),level:Number(w.level)}));return{id:n.code,uniqueCardNumber:n.code,cardNumber:n.cardNumber,name:n.name,imgUrl:n.imageUrl||"",cardType:n.type||"",color:n.colors||[],attribute:n.attribute||void 0,stage:n.stage||void 0,digiType:n.digitype||[],dp:n.dp??void 0,playCost:n.playCost??void 0,level:n.level??void 0,digivolveConditions:B.length?B:void 0,specialDigivolve:l||void 0,burstDigivolve:k||void 0,dnaDigivolve:N||void 0,digiXros:D||void 0,assemblyEffect:L||void 0,mainEffect:f||void 0,inheritedEffect:p||void 0,securityEffect:m||void 0,aceEffect:v||void 0,rule:d||void 0,linkDP:n.linkDP??void 0,linkEffect:U||void 0,linkRequirement:F||void 0,restrictions:{english:n.restriction||"Unrestricted",japanese:"",chinese:"",korean:""},illustrator:n.illustrator||""}}function kt(n){const f=[],p=[];return n.cards.forEach(m=>{const l=Math.max(0,Number(m.count)||0);for(let k=0;k<l;k+=1)m.type==="Digi-Egg"?p.push(m.code):f.push(m.code)}),{main:f,eggs:p}}function wt(n){const f=kt(n);return{id:n.id,name:n.name,mainDeckList:f.main,eggDeckList:f.eggs,deckImageCardUrl:n.coverImageUrl||"",mainSleeveName:T,eggSleeveName:T}}function yt(n){const f=new Set;return n.filter(p=>p&&p.code).map(p=>f.has(p.code)?null:(f.add(p.code),vt(p))).filter(p=>!!p)}function Dt(n){return(n||[]).filter(Boolean).join(" | ")}function jt(n){switch(n.toLowerCase()){case"red":return"#f05155";case"blue":return"#4ea7f7";case"yellow":return"#ffd057";case"green":return"#2abb68";case"purple":return"#9b6df3";case"black":return"#222";case"white":return"#f2f6fb";default:return"#6fd6ff"}}function Ct(n){return n.toLowerCase()==="white"?"#091724":"#f7fbff"}function St(n){return n?[{label:"DNA Digivolve",text:n.dnaDigivolve||""},{label:"Burst Digivolve",text:n.burstDigivolve||""},{label:"Special Digivolve",text:n.specialDigivolve||""},{label:"DigiXros",text:n.digiXros||""},{label:"Assembly",text:n.assemblyEffect||""},{label:n.cardType==="Option"?"Option Effect":"Main Effect",text:n.mainEffect||""},{label:"ACE Effect",text:n.aceEffect||""},{label:"Security",text:n.securityEffect||""},{label:"Inherited Effect",text:n.inheritedEffect||""}].filter(f=>f.text.trim()):[]}function Et(){const n=C(d=>d.selectedCard),f=C(d=>d.hoverCard),p=S(d=>d.inheritCardInfo),m=S(d=>d.linkCardInfo),l=f||n;if(!l)return e.jsxs(be,{children:[e.jsx(ve,{children:"Card Details"}),e.jsx(Lt,{children:"Hover or select a card to inspect it."})]});const k=l.color||[],N=Dt(l.digiType),D=m.reduce((d,v)=>d+(Number(v.dp)||0),0),L=`https://digimoncardgame.fandom.com/wiki/${l.cardNumber}/Rulings`;return e.jsxs(be,{children:[e.jsx(ve,{children:f?"Hover Preview":"Selected Card"}),e.jsx(Rt,{children:l.name}),!!N&&e.jsx(It,{children:N}),!!k.length&&e.jsx(Tt,{children:k.map(d=>e.jsx(Mt,{style:{background:jt(d),color:Ct(d)},children:d},d))}),e.jsxs(Ut,{children:[!!l.level&&e.jsxs(H,{children:[e.jsx("span",{children:"Lv."}),e.jsx("strong",{children:l.level})]}),!!l.stage&&e.jsxs(H,{children:[e.jsx("span",{children:"Stage"}),e.jsx("strong",{children:l.stage})]}),!!l.dp&&e.jsxs(H,{children:[e.jsx("span",{children:"DP"}),e.jsx("strong",{children:l.dp})]}),l.playCost!==void 0&&l.playCost!==null&&e.jsxs(H,{children:[e.jsx("span",{children:l.cardType==="Option"?"Use":"Play"}),e.jsx("strong",{children:l.playCost})]})]}),!!l.digivolveConditions?.length&&e.jsxs(ke,{children:[e.jsx(ne,{children:"Digivolve"}),l.digivolveConditions.map((d,v)=>e.jsxs("span",{children:[v>0?" | ":" ","Lv.",d.level," ",d.color,": Cost ",d.cost]},`${d.color}-${d.level}-${v}`))]}),!!l.linkRequirement&&e.jsxs(ke,{children:[e.jsx(ne,{children:"Link"})," ",e.jsx(P,{text:l.linkRequirement})]}),St(l).map(d=>e.jsxs(re,{children:[e.jsx(oe,{children:d.label}),e.jsx(X,{children:e.jsx(P,{text:d.text})})]},`${l.uniqueCardNumber}-${d.label}`)),!!l.rule&&e.jsxs(Bt,{children:[e.jsx(ne,{children:"Rule"})," ",e.jsx(P,{text:l.rule})]}),!!m.length&&e.jsxs(re,{children:[e.jsxs(oe,{children:[e.jsx("span",{children:"LINKED CARDS 🔗"}),e.jsxs(zt,{children:["+ ",D," DP"]})]}),m.map((d,v)=>e.jsx(X,{children:e.jsx(P,{text:d.effect||"No linked effect text available."})},`link-${v}`))]}),!!p.filter(Boolean).length&&e.jsxs(re,{children:[e.jsx(oe,{children:"DIGIVOLUTION CARDS ↙"}),p.filter(Boolean).slice().reverse().map((d,v)=>e.jsx(X,{children:e.jsx(P,{text:d})},`inherit-${v}`))]}),e.jsxs($t,{children:[e.jsx("span",{children:l.cardNumber}),!!l.illustrator&&e.jsxs("span",{children:["✒ ",l.illustrator]}),!!l.cardNumber&&e.jsx("a",{href:L,target:"_blank",rel:"noopener noreferrer",children:"Rulings"})]})]})}function At(){const n=S(p=>p.messages),f=n.slice(-60).reverse();return e.jsxs(Pt,{children:[e.jsxs(Ft,{children:[e.jsx("span",{children:"Action Log"}),e.jsxs("small",{children:[n.length," events"]})]}),e.jsxs(qt,{children:[!f.length&&e.jsx(Gt,{children:"Local test actions will appear here."}),f.map((p,m)=>{const l=p.replace(/^Deck Browser﹕/,"").replace(/^【SERVER】﹕/,"").replace(/\[FIELD_UPDATE\]≔/g,"").replace(/﹕/g," ");return e.jsx(Vt,{children:l},`${m}-${p}`)})]})]})}function Nt({deck:n,decks:f,cardCatalog:p,onExit:m}){const l=C(r=>r.selectCard),k=C(r=>r.selectedCard),N=C(r=>r.hoverCard),D=C(r=>r.user)||me,L=S(r=>r.clearBoard),d=S(r=>r.setPlayers),v=S(r=>r.progressToNextPhase),U=S(r=>r.setMessages),F=_(r=>r.playAttackSfx),B=_(r=>r.playEffectAttackSfx),w=_(r=>r.playNextPhaseSfx),De=_(r=>r.playShuffleDeckSfx),W=$(r=>r.setArrowFrom),K=$(r=>r.setArrowTo),Z=$(r=>r.setIsEffectArrow),se=$(r=>r.stackDialog),ie=$(r=>r.openedCardDialog),{show:je}=dt({id:"detailsImageMenu"}),[Ce,Se]=u.useState(null),[Ee,ae]=u.useState(!1),[le,Ae]=u.useState(null),[z,ce]=u.useState(n.id),q=u.useRef(null),j=u.useMemo(()=>f.map(wt),[f]),R=u.useMemo(()=>yt(p),[p]);u.useEffect(()=>{He.setState({decks:j,filteredCards:R,fetchedCards:R,isLoading:!1})},[j,R]),u.useEffect(()=>{C.setState({user:me,avatarName:te,activeDeckId:n.id}),ce(n.id)},[n.id]),u.useEffect(()=>{const r=j.find(t=>t.id===z)||null;Ae(r)},[j,z]);const de=u.useCallback(r=>({...r,modifiers:{plusDp:0,plusSecurityAttacks:0,keywords:[],colors:r.color},isTilted:!1,isFaceUp:!1}),[]),ge=u.useCallback(r=>{let t=[...r];for(let o=0;o<3;o++)t=V(t);t=fe(t),t=fe(t),t=Le(t),t=Re(t),t=Ne(t),t=Ie(t);for(let o=0;o<3;o++)t=V(t);return t=Te(t),t},[]),Ne=u.useCallback(r=>{const t=[...r],o=1e3;for(let a=0;a<o;a++){let s=!1;for(let i=0;i<t.length-1;i++)if(t[i].uniqueCardNumber===t[i+1].uniqueCardNumber){s=!0;let g=-1;const x=50;for(let y=0;y<x;y++){const I=new Uint32Array(1);crypto.getRandomValues(I);const E=I[0]%t.length;if(!(E>0&&t[E-1].uniqueCardNumber===t[i+1].uniqueCardNumber||E<t.length-1&&t[E+1].uniqueCardNumber===t[i+1].uniqueCardNumber||Math.abs(E-i)<=1)){g=E;break}}g!==-1&&([t[i+1],t[g]]=[t[g],t[i+1]])}if(!s)break}return t},[]),V=u.useCallback(r=>{const t=[...r];for(let o=t.length-1;o>0;o--){const a=new Uint32Array(1);crypto.getRandomValues(a);const s=a[0]%(o+1);[t[o],t[s]]=[t[s],t[o]]}return t},[]),fe=u.useCallback(r=>{const t=[...r],o=Math.floor(t.length/2),a=t.slice(0,o),s=t.slice(o),i=[];let g=0,x=0;for(;g<a.length&&x<s.length;){const y=new Uint32Array(1);crypto.getRandomValues(y),y[0]%2===0?i.push(a[g++]):i.push(s[x++])}return i.push(...a.slice(g)),i.push(...s.slice(x)),i},[]),Le=u.useCallback(r=>{const t=[];for(let o=0;o<r.length;o++){const a=new Uint32Array(1);crypto.getRandomValues(a);const s=a[0]%(o+1);s===o?t.push(r[o]):(t.push(t[s]),t[s]=r[o])}return t},[]),Re=u.useCallback(r=>{const t=[...r],o=Math.max(3,Math.floor(Math.sqrt(r.length))),a=[];for(let s=0;s<t.length;s+=o)a.push(t.slice(s,s+o));for(let s=a.length-1;s>0;s--){const i=new Uint32Array(1);crypto.getRandomValues(i);const g=i[0]%(s+1);[a[s],a[g]]=[a[g],a[s]]}for(const s of a)for(let i=s.length-1;i>0;i--){const g=new Uint32Array(1);crypto.getRandomValues(g);const x=g[0]%(i+1);[s[i],s[x]]=[s[x],s[i]]}return a.flat()},[]),Ie=u.useCallback(r=>{const t=[...r];for(let o=t.length-1;o>0;o--){const a=new Uint32Array(1);crypto.getRandomValues(a);const s=a[0]%o;[t[o],t[s]]=[t[s],t[o]]}return t},[]),Te=u.useCallback(r=>{const t=[...r],o=4;for(let a=t.length-o;a>=0;a-=o){const s=Math.min(a+o,t.length),i=t.slice(a,s);for(let g=i.length-1;g>0;g--){const x=new Uint32Array(1);crypto.getRandomValues(x);const y=x[0]%(g+1);[i[g],i[y]]=[i[y],i[g]]}t.splice(a,i.length,...i)}return t},[]),J=u.useCallback(r=>{const t=j.find(h=>h.id===r);if(!t||!t.mainDeckList.length){U("No deck found or deck is empty. Please select a different deck.");return}const o=te,a=t.mainSleeveName||T,s=t.eggSleeveName||T;L(),S.setState({messages:[]});const i=[];let g=0;for(const h of[...t.mainDeckList,...t.eggDeckList]){const ee=R.find(Oe=>Oe.uniqueCardNumber===h);ee?i.push({...ee,id:ee.id+"_"+i.length}):(g++,console.warn(`Card not found in fetchedCards: ${h}`))}g>0&&console.warn(`${g} cards from deck not found in card database`);let x=i.map(h=>de(h));x=ge(x),x=V(x);const y=x.filter(h=>h.cardType==="Digi-Egg"),I=x.filter(h=>h.cardType!=="Digi-Egg"),E=I.splice(0,5).map(h=>({...h,isFaceUp:!1})),he=I.splice(0,5).map(h=>({...h,isFaceUp:!1})),Ve=I.map(h=>({...h,isFaceUp:!1})),Ge=y.map(h=>({...h,isFaceUp:!1}));S.setState({myHand:he,mySecurity:E,myDeckField:Ve,myEggDeck:Ge,myMemory:0,opponentMemory:0,phase:We.MAIN,bootStage:Xe.GAME_IN_PROGRESS,player1:{username:D,avatarName:o,mainSleeveName:a,eggSleeveName:s}}),d({username:D,avatarName:o,mainSleeveName:a,eggSleeveName:s},{username:"Test Dummy",avatarName:te,mainSleeveName:T,eggSleeveName:T})},[j,R,de,ge,L,d,U,D,V]),Q=u.useCallback(()=>{J(z)},[z,J]);u.useEffect(()=>{j.length>0&&R.length>0&&Q()},[j.length,R.length,Q]);const Y=u.useCallback(r=>{const t=typeof r=="string"?r:String(r);t.includes("/moveCard:")&&console.log(`Mock move action: ${t}`)},[]),Me=u.useCallback(r=>{r?B():F();const t=()=>{q.current!==null&&(clearTimeout(q.current),q.current=null),W(""),K(""),Z(!1)};q.current=window.setTimeout(()=>{W(""),K(""),Z(!1)},3500),Se(()=>t)},[F,B,W,K,Z]),ue=Ke({sendMessage:Y,restartAttackAnimation:Me,clearAttackAnimation:Ce});u.useLayoutEffect(()=>{const r=t=>{const{item:o,targetId:a}=t.detail,s=a.includes("_bottom"),i=s?a.replace("_bottom",""):a,g=ue(i,{bottom:s});g?.drop&&g.drop(o)};return window.addEventListener("reactDndDrop",r),()=>window.removeEventListener("reactDndDrop",r)},[ue]);function Ue(){if(Ee)return;ae(!0);const r=setTimeout(()=>{v(),w(),ae(!1)},920);return()=>clearTimeout(r)}function Be(r,t,o){Y(`test:/moveCard:${r}:${t}:${o}`)}function ze(r){r.length&&U(D+"﹕"+r)}function $e(){L(),m?.()}function Pe(r){const t=String(r.target.value);C.setState({activeDeckId:t}),ce(t),setTimeout(()=>{J(t)},100)}const G={matchInfo:{gameId:"test-mode",user:D,opponentName:"Test Dummy"},sendMessage:Y,sendMoveCard:Be,sendChatMessage:ze,sendSfx:r=>{r==="playShuffleDeckSfx"&&De()},sendPhaseUpdate:()=>console.log("Test mode: phase update"),nextPhase:Ue},O=C(r=>r.cardWidth*.45),pe=u.useRef(null),xe=pe.current?Math.max(window.innerHeight-32,720):void 0,Fe="ontouchstart"in window?ut:pt,qe=e.jsxs(Xt,{height:xe,"data-testid":"deck-test-board",children:[e.jsx(Wt,{children:e.jsxs(Ze,{iconFontSize:O,children:[e.jsx("a",{href:"https://world.digimoncard.com/rule/pdf/general_rules.pdf",target:"_blank",rel:"noopener noreferrer",title:"Rulings",children:e.jsxs(Kt,{sx:{color:"white",position:"relative"},children:[e.jsx(Je,{sx:{fontSize:`${O*.85}px!important`,opacity:.8}}),e.jsx(Qe,{sx:{color:"dodgerblue",position:"absolute",right:0,top:7,fontSize:`${O*.4}px!important`,pointerEvents:"none"}})]})}),e.jsx(Ye,{iconFontSize:`${O}px!important`})]})}),e.jsxs(Zt,{children:[!se&&!ie&&e.jsx(At,{}),!!ie&&e.jsx(et,{}),!!se&&e.jsx(tt,{})]}),e.jsx(nt,{}),e.jsx(rt,{wsUtils:G}),e.jsxs(Jt,{children:[e.jsxs(tn,{children:[e.jsx(en,{value:z,onChange:Pe,children:j.map(r=>e.jsx("option",{value:r.id,children:r.name},r.id))}),!!le?.mainDeckList?.length&&e.jsx(ot,{deck:le,lobbyView:!0})]}),e.jsxs(nn,{children:[e.jsx(Qt,{className:"button",title:"Reset the deck and restart test",onClick:Q,children:"RESET"}),e.jsx(Yt,{className:"button",title:"Exit test mode and return to deck browser",onClick:$e,children:"EXIT"})]})]}),e.jsx(st,{wsUtils:G})]});return e.jsxs(Ot,{ref:pe,children:[e.jsx(it,{}),e.jsx(at,{wsUtils:G}),e.jsx(lt,{wsUtils:G}),e.jsx(ct,{}),e.jsxs(_t,{height:xe,children:[e.jsx(Ht,{src:N?.imgUrl??k?.imgUrl??gt,alt:"cardImg",onContextMenu:r=>je({event:r}),onClick:()=>l(null),...!k&&!N&&{style:{pointerEvents:"none",opacity:.25,filter:"saturate(0.5)"}}}),e.jsx(Et,{})]}),e.jsxs(ft,{backend:Fe,children:[qe,e.jsx(xt,{})]})]})}const be=c.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #dceeff;
    font-family: "League Spartan", sans-serif;
`,ve=c.div`
    color: #66d9ff;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.18em;
    text-transform: uppercase;
`,Lt=c.div`
    border: 1px solid rgba(89, 196, 232, 0.18);
    border-radius: 14px;
    background: rgba(6, 15, 26, 0.55);
    color: rgba(220, 238, 255, 0.72);
    padding: 18px;
    line-height: 1.4;
`,Rt=c.div`
    color: #f2f8ff;
    font-size: clamp(1.45rem, 1.7vw, 2rem);
    font-weight: 900;
    line-height: 0.95;
    text-align: center;
    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.45);
`,It=c.div`
    color: rgba(240, 249, 255, 0.82);
    font-size: 1.05rem;
    line-height: 1.2;
    text-align: center;
`,Tt=c.div`
    display: flex;
    width: 100%;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 8px;
`,Mt=c.div`
    flex: 1;
    padding: 8px 4px;
    text-align: center;
    font-size: 1.05rem;
    font-weight: 800;
    text-shadow: 0 1px 8px rgba(0, 0, 0, 0.45);
`,Ut=c.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
`,H=c.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
    padding: 8px 10px;
    border: 1px solid rgba(116, 216, 246, 0.18);
    border-radius: 10px;
    background: rgba(7, 18, 31, 0.68);

    span {
        color: rgba(222, 239, 255, 0.72);
        font-size: 0.8rem;
        letter-spacing: 0.05em;
        text-transform: uppercase;
    }

    strong {
        color: #e8fbff;
        font-size: 1.1rem;
        font-weight: 900;
    }
`,ke=c.div`
    border: 1px solid rgba(0, 206, 214, 0.38);
    border-radius: 10px;
    background:
        linear-gradient(90deg, rgba(0, 170, 180, 0.28), rgba(0, 70, 90, 0.24)),
        repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0.035) 1px, transparent 1px, transparent 5px);
    color: #e6fbff;
    padding: 7px 9px;
    font-size: 0.98rem;
    line-height: 1.35;
`,ne=c.span`
    display: inline-block;
    margin-right: 5px;
    padding: 2px 6px;
    border-radius: 5px;
    background: linear-gradient(180deg, rgba(18, 175, 185, 0.92), rgba(8, 119, 140, 0.9));
    color: #f4feff;
    font-weight: 800;
`,re=c.div`
    overflow: hidden;
    border: 1px solid rgba(116, 216, 246, 0.2);
    border-radius: 11px;
    background: rgba(6, 16, 28, 0.62);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
`,oe=c.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 7px 10px 5px;
    border-bottom: 1px solid rgba(116, 216, 246, 0.2);
    color: rgba(236, 248, 255, 0.86);
    font-size: 0.9rem;
    font-weight: 800;
    letter-spacing: 0.07em;
    text-transform: uppercase;
`,X=c.div`
    padding: 9px 10px;
    color: #f2f7ff;
    font-size: 1rem;
    line-height: 1.42;

    & + & {
        border-top: 1px solid rgba(116, 216, 246, 0.12);
    }
`,Bt=c(X)`
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 10px;
    background: rgba(230, 238, 245, 0.86);
    color: #111827;
    font-weight: 800;
`,zt=c.span`
    flex: 0 0 auto;
    padding: 3px 7px;
    border-radius: 999px;
    background: rgba(45, 212, 191, 0.18);
    color: #bffdf2;
    font-weight: 900;
    letter-spacing: 0;
`,$t=c.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    color: rgba(226, 240, 255, 0.78);
    font-size: 0.9rem;

    a {
        border: 1px solid rgba(98, 184, 255, 0.35);
        border-radius: 8px;
        background: rgba(37, 99, 235, 0.22);
        color: #eaf6ff;
        padding: 5px 8px;
        text-decoration: none;
        font-weight: 800;
    }
`,Pt=c.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    color: #dff5ff;
`,Ft=c.div`
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
`,qt=c.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
    overflow-y: auto;
    padding: 10px;
    scrollbar-width: thin;
`,Vt=c.div`
    border: 1px solid rgba(95, 201, 231, 0.12);
    border-radius: 8px;
    background: rgba(5, 16, 28, 0.48);
    color: rgba(232, 246, 255, 0.82);
    font-family: Cousine, monospace;
    font-size: 0.74rem;
    line-height: 1.28;
    padding: 6px 7px;
    word-break: break-word;
`,Gt=c.div`
    margin: auto;
    color: rgba(222, 242, 255, 0.58);
    font-size: 0.9rem;
    text-align: center;
`,Ot=c.div`
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
`,_t=c.div`
    grid-column: 1;
    grid-row: 1;
    background:
        linear-gradient(180deg, rgba(15, 30, 51, 0.96), rgba(13, 25, 44, 0.98)),
        radial-gradient(circle at top, rgba(77, 204, 255, 0.08), transparent 45%);
    display: flex;
    width: clamp(292px, 18vw, 340px) !important;
    max-width: clamp(292px, 18vw, 340px);
    height: ${({height:n})=>n?`${n}px`:"100%"};
    max-height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding: 14px 12px;
    border-right: 1px solid rgba(102, 201, 239, 0.22);
    box-shadow: inset -1px 0 0 rgba(255, 255, 255, 0.04), 12px 0 38px rgba(0, 0, 0, 0.18);
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: rgba(122, 213, 255, 0.45) rgba(5, 13, 24, 0.4);
    box-sizing: border-box;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(122, 213, 255, 0.35);
        border-radius: 10px;
    }
`,Ht=c.img`
    width: min(100%, 260px);
    border-radius: 14px;
    aspect-ratio: 5 / 7;
    z-index: 1000;
    object-fit: cover;
    box-shadow: 0 18px 34px rgba(0, 0, 0, 0.34);
`,Xt=c.div`
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

    transform: ${({isCameraTilted:n})=>n?"perspective(2000px) rotateX(35deg) rotateZ(0deg)":"unset"};
    padding: ${({isCameraTilted:n})=>n?"0 3.5vw 0 5vw":"0"};

    background:
        radial-gradient(circle at 45% 38%, rgba(73, 165, 237, 0.12), transparent 35%),
        radial-gradient(circle at 72% 52%, rgba(34, 211, 191, 0.1), transparent 34%);

    @media (max-aspect-ratio: 16 / 10) {
        width: 100%;
    }
`,Wt=c.div`
    grid-column: 1 / 9;
    grid-row: 1 / 3;
    z-index: 1;
`,Kt=c(_e)`
    width: fit-content;
    opacity: 0.7;
    display: flex;
`,Zt=c.div`
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
`,Jt=c.div`
    grid-column: 4 / 32;
    grid-row: 3 / 8;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    z-index: 10;
`,Qt=c.div`
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
`,Yt=c.div`
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
`,en=c.select`
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
`,tn=c.div`
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
`,nn=c.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;let M=null,A=null,we=0;function rn(n){if(typeof n=="string"){const f=document.getElementById(n);if(!f)throw new Error(`Deck Browser mount root not found: ${n}`);return f}return n}function ye(){if(!A)return;const n=rn(A.root);M||(M=ht.createRoot(n)),M.render(e.jsx(mt.StrictMode,{children:e.jsx(bt,{initialEntries:["/test"],children:e.jsx(Nt,{deck:A.deck,decks:A.decks,cardCatalog:A.cardCatalog,onExit:A.onExit},`decktest-${we}-${A.deck.id}`)})}))}function on(n){A=n,ye()}function sn(){we+=1,ye()}function an(){M&&(M.unmount(),M=null)}const ln={mount:on,unmount:an,reset:sn};window.DCGODeckTest=ln;window.dispatchEvent(new CustomEvent("dcgo-decktest-ready"));
