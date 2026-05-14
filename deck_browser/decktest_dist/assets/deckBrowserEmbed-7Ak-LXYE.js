import{s as m,ay as Fe,A as D,a1 as j,a as V,$ as L,K as ze,r as c,a0 as Pe,aa as Ge,ae as qe,az as Ve,j as r,a6 as _e,aL as Oe,aM as He,aN as We,aO as Xe,aP as Ke,aQ as Ye,aR as Ze,aS as Je,a8 as Qe,aT as et,aA as tt,aB as nt,aC as ot,aD as st,aE as ge,W as at,aF as it,aG as rt,aH as lt,aI as ct,aJ as dt,aK as ut,bg as ft,aY as gt,bi as pt}from"./index-BFLqDyKe.js";const J="AncientIrismon",A="Default",pe="Deck Browser";function p(n,d){return(n.effectSections||[]).find(h=>h.label===d)?.text??""}function mt(n){const d=p(n,"Main Effect")||p(n,"Option Effect"),g=p(n,"Inherited"),h=p(n,"Security"),M=p(n,"Special Digivolve"),w=p(n,"Burst Digivolve"),$=p(n,"DNA Digivolve"),C=p(n,"DigiXros"),I=p(n,"Assembly"),F=p(n,"Rule"),_=p(n,"ACE"),R=n.linkEffect||p(n,"Link Effect"),z=n.linkRequirement||p(n,"Link Requirement"),T=(n.digivolveConditions||[]).filter(x=>x&&x.cost!==null&&x.level!==null&&x.color).map(x=>({color:String(x.color),cost:Number(x.cost),level:Number(x.level)}));return{id:n.code,uniqueCardNumber:n.code,cardNumber:n.cardNumber,name:n.name,imgUrl:n.imageUrl||"",cardType:n.type||"",color:n.colors||[],attribute:n.attribute||void 0,stage:n.stage||void 0,digiType:n.digitype||[],dp:n.dp??void 0,playCost:n.playCost??void 0,level:n.level??void 0,digivolveConditions:T.length?T:void 0,specialDigivolve:M||void 0,burstDigivolve:w||void 0,dnaDigivolve:$||void 0,digiXros:C||void 0,assemblyEffect:I||void 0,mainEffect:d||void 0,inheritedEffect:g||void 0,securityEffect:h||void 0,aceEffect:_||void 0,rule:F||void 0,linkDP:n.linkDP??void 0,linkEffect:R||void 0,linkRequirement:z||void 0,restrictions:{english:n.restriction||"Unrestricted",japanese:"",chinese:"",korean:""},illustrator:n.illustrator||""}}function ht(n){const d=[],g=[];return n.cards.forEach(h=>{const M=Math.max(0,Number(h.count)||0);for(let w=0;w<M;w+=1)h.type==="Digi-Egg"?g.push(h.code):d.push(h.code)}),{main:d,eggs:g}}function xt(n){const d=ht(n);return{id:n.id,name:n.name,mainDeckList:d.main,eggDeckList:d.eggs,deckImageCardUrl:n.coverImageUrl||"",mainSleeveName:A,eggSleeveName:A}}function bt(n){const d=new Set;return n.filter(g=>g&&g.code).map(g=>d.has(g.code)?null:(d.add(g.code),mt(g))).filter(g=>!!g)}function vt({deck:n,decks:d,cardCatalog:g,onExit:h}){const M=D(e=>e.selectCard),w=D(e=>e.selectedCard),$=D(e=>e.hoverCard),C=D(e=>e.user)||pe,I=j(e=>e.clearBoard),F=j(e=>e.setPlayers),_=j(e=>e.progressToNextPhase),R=j(e=>e.setMessages),z=V(e=>e.playAttackSfx),T=V(e=>e.playEffectAttackSfx),x=V(e=>e.playNextPhaseSfx),xe=V(e=>e.playShuffleDeckSfx),O=L(e=>e.setArrowFrom),H=L(e=>e.setArrowTo),W=L(e=>e.setIsEffectArrow),Q=L(e=>e.stackDialog),ee=L(e=>e.openedCardDialog),te=ze(e=>e.details),{show:be}=at({id:"detailsImageMenu"}),[ve,ke]=c.useState(null),[ye,ne]=c.useState(!1),[oe,we]=c.useState(null),[U,se]=c.useState(n.id),P=c.useRef(null),v=c.useMemo(()=>d.map(xt),[d]),S=c.useMemo(()=>bt(g),[g]);c.useEffect(()=>{Pe.setState({decks:v,filteredCards:S,fetchedCards:S,isLoading:!1})},[v,S]),c.useEffect(()=>{D.setState({user:pe,avatarName:J,activeDeckId:n.id}),se(n.id)},[n.id]),c.useEffect(()=>{const e=v.find(t=>t.id===U)||null;we(e)},[v,U]);const ae=c.useCallback(e=>({...e,modifiers:{plusDp:0,plusSecurityAttacks:0,keywords:[],colors:e.color},isTilted:!1,isFaceUp:!1}),[]),ie=c.useCallback(e=>{let t=[...e];for(let o=0;o<3;o++)t=G(t);t=re(t),t=re(t),t=Se(t),t=De(t),t=Ce(t),t=Ee(t);for(let o=0;o<3;o++)t=G(t);return t=je(t),t},[]),Ce=c.useCallback(e=>{const t=[...e],o=1e3;for(let i=0;i<o;i++){let s=!1;for(let a=0;a<t.length-1;a++)if(t[a].uniqueCardNumber===t[a+1].uniqueCardNumber){s=!0;let l=-1;const u=50;for(let b=0;b<u;b++){const E=new Uint32Array(1);crypto.getRandomValues(E);const k=E[0]%t.length;if(!(k>0&&t[k-1].uniqueCardNumber===t[a+1].uniqueCardNumber||k<t.length-1&&t[k+1].uniqueCardNumber===t[a+1].uniqueCardNumber||Math.abs(k-a)<=1)){l=k;break}}l!==-1&&([t[a+1],t[l]]=[t[l],t[a+1]])}if(!s)break}return t},[]),G=c.useCallback(e=>{const t=[...e];for(let o=t.length-1;o>0;o--){const i=new Uint32Array(1);crypto.getRandomValues(i);const s=i[0]%(o+1);[t[o],t[s]]=[t[s],t[o]]}return t},[]),re=c.useCallback(e=>{const t=[...e],o=Math.floor(t.length/2),i=t.slice(0,o),s=t.slice(o),a=[];let l=0,u=0;for(;l<i.length&&u<s.length;){const b=new Uint32Array(1);crypto.getRandomValues(b),b[0]%2===0?a.push(i[l++]):a.push(s[u++])}return a.push(...i.slice(l)),a.push(...s.slice(u)),a},[]),Se=c.useCallback(e=>{const t=[];for(let o=0;o<e.length;o++){const i=new Uint32Array(1);crypto.getRandomValues(i);const s=i[0]%(o+1);s===o?t.push(e[o]):(t.push(t[s]),t[s]=e[o])}return t},[]),De=c.useCallback(e=>{const t=[...e],o=Math.max(3,Math.floor(Math.sqrt(e.length))),i=[];for(let s=0;s<t.length;s+=o)i.push(t.slice(s,s+o));for(let s=i.length-1;s>0;s--){const a=new Uint32Array(1);crypto.getRandomValues(a);const l=a[0]%(s+1);[i[s],i[l]]=[i[l],i[s]]}for(const s of i)for(let a=s.length-1;a>0;a--){const l=new Uint32Array(1);crypto.getRandomValues(l);const u=l[0]%(a+1);[s[a],s[u]]=[s[u],s[a]]}return i.flat()},[]),Ee=c.useCallback(e=>{const t=[...e];for(let o=t.length-1;o>0;o--){const i=new Uint32Array(1);crypto.getRandomValues(i);const s=i[0]%o;[t[o],t[s]]=[t[s],t[o]]}return t},[]),je=c.useCallback(e=>{const t=[...e],o=4;for(let i=t.length-o;i>=0;i-=o){const s=Math.min(i+o,t.length),a=t.slice(i,s);for(let l=a.length-1;l>0;l--){const u=new Uint32Array(1);crypto.getRandomValues(u);const b=u[0]%(l+1);[a[l],a[b]]=[a[b],a[l]]}t.splice(i,a.length,...a)}return t},[]),X=c.useCallback(e=>{const t=v.find(f=>f.id===e);if(!t||!t.mainDeckList.length){R("No deck found or deck is empty. Please select a different deck.");return}const o=J,i=t.mainSleeveName||A,s=t.eggSleeveName||A;I(),j.setState({messages:[]});const a=[];let l=0;for(const f of[...t.mainDeckList,...t.eggDeckList]){const Z=S.find($e=>$e.uniqueCardNumber===f);Z?a.push({...Z,id:Z.id+"_"+a.length}):(l++,console.warn(`Card not found in fetchedCards: ${f}`))}l>0&&console.warn(`${l} cards from deck not found in card database`);let u=a.map(f=>ae(f));u=ie(u),u=G(u);const b=u.filter(f=>f.cardType==="Digi-Egg"),E=u.filter(f=>f.cardType!=="Digi-Egg"),k=E.splice(0,5).map(f=>({...f,isFaceUp:!1})),fe=E.splice(0,5).map(f=>({...f,isFaceUp:!1})),Be=E.map(f=>({...f,isFaceUp:!1})),Le=b.map(f=>({...f,isFaceUp:!1}));j.setState({myHand:fe,mySecurity:k,myDeckField:Be,myEggDeck:Le,myMemory:0,opponentMemory:0,phase:qe.MAIN,bootStage:Ge.GAME_IN_PROGRESS,player1:{username:C,avatarName:o,mainSleeveName:i,eggSleeveName:s}}),F({username:C,avatarName:o,mainSleeveName:i,eggSleeveName:s},{username:"Test Dummy",avatarName:J,mainSleeveName:A,eggSleeveName:A})},[v,S,ae,ie,I,F,R,C,G]),K=c.useCallback(()=>{X(U)},[U,X]);c.useEffect(()=>{v.length>0&&S.length>0&&K()},[v.length,S.length,K]);const Y=c.useCallback(e=>{const t=typeof e=="string"?e:String(e);t.includes("/moveCard:")&&console.log(`Mock move action: ${t}`)},[]),Ae=c.useCallback(e=>{e?T():z();const t=()=>{P.current!==null&&(clearTimeout(P.current),P.current=null),O(""),H(""),W(!1)};P.current=window.setTimeout(()=>{O(""),H(""),W(!1)},3500),ke(()=>t)},[z,T,O,H,W]),le=Ve({sendMessage:Y,restartAttackAnimation:Ae,clearAttackAnimation:ve});c.useLayoutEffect(()=>{const e=t=>{const{item:o,targetId:i}=t.detail,s=i.includes("_bottom"),a=s?i.replace("_bottom",""):i,l=le(a,{bottom:s});l?.drop&&l.drop(o)};return window.addEventListener("reactDndDrop",e),()=>window.removeEventListener("reactDndDrop",e)},[le]);function Ne(){if(ye)return;ne(!0);const e=setTimeout(()=>{_(),x(),ne(!1)},920);return()=>clearTimeout(e)}function Me(e,t,o){Y(`test:/moveCard:${e}:${t}:${o}`)}function ce(e){e.length&&R(C+"﹕"+e)}function Ie(){I(),h?.()}function Re(e){const t=String(e.target.value);D.setState({activeDeckId:t}),se(t),setTimeout(()=>{X(t)},100)}const B={matchInfo:{gameId:"test-mode",user:C,opponentName:"Test Dummy"},sendMessage:Y,sendMoveCard:Me,sendChatMessage:ce,sendSfx:e=>{e==="playShuffleDeckSfx"&&xe()},sendPhaseUpdate:()=>console.log("Test mode: phase update"),nextPhase:Ne},q=D(e=>e.cardWidth*.45),de=c.useRef(null),ue=de.current?Math.max(window.outerHeight-148,800):void 0;c.useLayoutEffect(()=>window.scrollTo(document.documentElement.scrollWidth-window.innerWidth,0),[]);const Te="ontouchstart"in window?ct:dt,Ue=r.jsxs(Ct,{height:ue,"data-testid":"deck-test-board",children:[r.jsx(St,{children:r.jsxs(_e,{iconFontSize:q,children:[r.jsx("a",{href:"https://world.digimoncard.com/rule/pdf/general_rules.pdf",target:"_blank",rel:"noopener noreferrer",title:"Rulings",children:r.jsxs(Dt,{sx:{color:"white",position:"relative"},children:[r.jsx(Oe,{sx:{fontSize:`${q*.85}px!important`,opacity:.8}}),r.jsx(He,{sx:{color:"dodgerblue",position:"absolute",right:0,top:7,fontSize:`${q*.4}px!important`,pointerEvents:"none"}})]})}),r.jsx(We,{iconFontSize:`${q}px!important`})]})}),r.jsxs(Et,{children:[!Q&&!ee&&r.jsx(Xe,{matchInfo:B.matchInfo,sendChatMessage:ce}),!!ee&&r.jsx(Ke,{}),!!Q&&r.jsx(Ye,{})]}),r.jsx(Ze,{}),r.jsx(Je,{wsUtils:B}),r.jsxs(jt,{children:[r.jsxs(It,{children:[r.jsx(Mt,{value:U,onChange:Re,children:v.map(e=>r.jsx("option",{value:e.id,children:e.name},e.id))}),!!oe?.mainDeckList?.length&&r.jsx(Qe,{deck:oe,lobbyView:!0})]}),r.jsxs(Rt,{children:[r.jsx(At,{className:"button",title:"Reset the deck and restart test",onClick:K,children:"RESET"}),r.jsx(Nt,{className:"button",title:"Exit test mode and return to deck browser",onClick:Ie,children:"EXIT"})]})]}),r.jsx(et,{wsUtils:B})]});return r.jsxs(kt,{ref:de,children:[r.jsx(tt,{}),r.jsx(nt,{wsUtils:B}),r.jsx(ot,{wsUtils:B}),r.jsx(st,{}),r.jsxs(yt,{height:ue,style:{minHeight:window.innerHeight},children:[te!==ge.NO_IMAGE&&r.jsx(wt,{src:$?.imgUrl??w?.imgUrl??it,alt:"cardImg",onContextMenu:e=>be({event:e}),onClick:()=>M(null),...!w&&!$&&{style:{pointerEvents:"none",opacity:.25,filter:"saturate(0.5)"}}}),te===ge.NO_IMAGE&&r.jsx("div",{style:{height:"10px"}}),r.jsx(rt,{})]}),r.jsxs(lt,{backend:Te,children:[Ue,r.jsx(ut,{})]})]})}const kt=m.div`
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
`,yt=m.div`
    background: rgba(0, 0, 0, 0.35);
    display: flex;
    width: 350px !important;
    max-width: 350px;
    height: ${({height:n})=>n?`${n}px`:"unset"};
    max-height: ${({height:n})=>n?`${n}px`:"unset"};
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
`,wt=m.img`
    width: calc(100% - 10px);
    border-radius: 3.5%;
    aspect-ratio: 5 / 7;
    z-index: 1000;
`,Ct=m.div`
    position: relative;
    aspect-ratio: 35 / 20;
    height: ${({height:n})=>n?`${n}px`:"auto"};

    display: grid;
    grid-template-columns: repeat(35, 1fr);
    grid-template-rows: repeat(20, 1fr);

    container-type: inline-size;
    container-name: board-layout;

    transform: ${({isCameraTilted:n})=>n?"perspective(2000px) rotateX(35deg) rotateZ(0deg)":"unset"};
    padding: ${({isCameraTilted:n})=>n?"0 3.5vw 0 5vw":"0"};

    @supports (-moz-appearance: none) {
        height: ${({height:n})=>n?`${n-8}px`:"auto"};
    }
`,St=m.div`
    grid-column: 1 / 9;
    grid-row: 1 / 3;
    z-index: 1;
`,Dt=m(Fe)`
    width: fit-content;
    opacity: 0.7;
    display: flex;
`,Et=m.div`
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
`,jt=m.div`
    grid-column: 4 / 32;
    grid-row: 4 / 10;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    z-index: 10;
`,At=m.div`
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
`,Nt=m.div`
    border-radius: 5px;
    position: relative;
    border: none !important;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 120px;
    cursor: pointer;

    background: rgba(159, 39, 71, 0.8);
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
`,Mt=m.select`
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
`,It=m.div`
    width: fit-content;
    height: fit-content;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 6px;

    position: relative;
    color: ghostwhite;
    background: rgba(12, 21, 16, 0.1);
    border: 1px solid rgba(124, 124, 118, 0.6);
    border-radius: 1%;
    box-shadow: inset 5px 5px 30px 5px rgba(255, 255, 255, 0.09);
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5));
`,Rt=m.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;let N=null,y=null,me=0;function Tt(n){if(typeof n=="string"){const d=document.getElementById(n);if(!d)throw new Error(`Deck Browser mount root not found: ${n}`);return d}return n}function he(){if(!y)return;const n=Tt(y.root);N||(N=ft.createRoot(n)),N.render(r.jsx(gt.StrictMode,{children:r.jsx(pt,{initialEntries:["/test"],children:r.jsx(vt,{deck:y.deck,decks:y.decks,cardCatalog:y.cardCatalog,onExit:y.onExit},`decktest-${me}-${y.deck.id}`)})}))}function Ut(n){y=n,he()}function Bt(){me+=1,he()}function Lt(){N&&(N.unmount(),N=null)}const $t={mount:Ut,unmount:Lt,reset:Bt};window.DCGODeckTest=$t;window.dispatchEvent(new CustomEvent("dcgo-decktest-ready"));
