const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomePage-DwhsdPOI.js","assets/animations-DS2FomTf.js","assets/vendor-C4fuUDY3.js","assets/router-BUd29xcO.js","assets/Seo-BVubSaRw.js","assets/i18n-NDV7RJlR.js","assets/Button-C24NZqgx.js","assets/Badge-fB5OhWQl.js","assets/SectionHeader-D07d2kZF.js","assets/ServicesPage-BJuga6Pj.js","assets/ServicesPage-Cs8yHCv6.css","assets/ServiceDetailPage-xrgavGoM.js","assets/CaseStudiesPage-D-eYxhCw.js","assets/AboutPage-BaB-vc1Q.js","assets/ContactPage-CpUKmZlM.js","assets/BlogListPage-BmBKvqG8.js","assets/LoadingSkeleton-DI9dF3rv.js","assets/BlogPostPage-ChuQBtn9.js","assets/LegalIndexPage-6lVr4xJF.js","assets/legal-CrnduE_X.js","assets/LegalNoticePage-DXThIwB4.js","assets/LegalDocument-BM55SVCH.js","assets/PrivacyPolicyPage-r1FrbQhb.js","assets/CookiePolicyPage-BIp8ptmk.js","assets/NotFoundPage-Cqdyln21.js"])))=>i.map(i=>d[i]);
var Lt=Object.defineProperty;var Bt=(e,t,i)=>t in e?Lt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var q=(e,t,i)=>Bt(e,typeof t!="symbol"?t+"":t,i);import{j as s,A as xe,m as Y}from"./animations-DS2FomTf.js";import{a as ht,g as De,r as f,b as z}from"./vendor-C4fuUDY3.js";import{L,u as ne,a as Rt,N as Oe,O as Wt,R as Ot,b as S,B as Gt}from"./router-BUd29xcO.js";import{u as P,i as ue,a as Kt,I as Ut}from"./i18n-NDV7RJlR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=i(a);fetch(a.href,r)}})();var Ae={},Ge=ht;Ae.createRoot=Ge.createRoot,Ae.hydrateRoot=Ge.hydrateRoot;var _t=typeof Element<"u",$t=typeof Map=="function",Ht=typeof Set=="function",Yt=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function pe(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var i,n,a;if(Array.isArray(e)){if(i=e.length,i!=t.length)return!1;for(n=i;n--!==0;)if(!pe(e[n],t[n]))return!1;return!0}var r;if($t&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(r=e.entries();!(n=r.next()).done;)if(!t.has(n.value[0]))return!1;for(r=e.entries();!(n=r.next()).done;)if(!pe(n.value[1],t.get(n.value[0])))return!1;return!0}if(Ht&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(r=e.entries();!(n=r.next()).done;)if(!t.has(n.value[0]))return!1;return!0}if(Yt&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(i=e.length,i!=t.length)return!1;for(n=i;n--!==0;)if(e[n]!==t[n])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(a=Object.keys(e),i=a.length,i!==Object.keys(t).length)return!1;for(n=i;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[n]))return!1;if(_t&&e instanceof Element)return!1;for(n=i;n--!==0;)if(!((a[n]==="_owner"||a[n]==="__v"||a[n]==="__o")&&e.$$typeof)&&!pe(e[a[n]],t[a[n]]))return!1;return!0}return e!==e&&t!==t}var Zt=function(t,i){try{return pe(t,i)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}};const Qt=De(Zt);var Xt=function(e,t,i,n,a,r,c,o){if(!e){var l;if(t===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[i,n,a,r,c,o],u=0;l=new Error(t.replace(/%s/g,function(){return d[u++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},Jt=Xt;const Ke=De(Jt);var ei=function(t,i,n,a){var r=n?n.call(a,t,i):void 0;if(r!==void 0)return!!r;if(t===i)return!0;if(typeof t!="object"||!t||typeof i!="object"||!i)return!1;var c=Object.keys(t),o=Object.keys(i);if(c.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(i),d=0;d<c.length;d++){var u=c[d];if(!l(u))return!1;var m=t[u],h=i[u];if(r=n?n.call(a,m,h,u):void 0,r===!1||r===void 0&&m!==h)return!1}return!0};const ti=De(ei);var vt=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(vt||{}),be={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Ue=Object.values(vt),Fe={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},ii=Object.entries(Fe).reduce((e,[t,i])=>(e[i]=t,e),{}),E="data-rh",Q={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},X=(e,t)=>{for(let i=e.length-1;i>=0;i-=1){const n=e[i];if(Object.prototype.hasOwnProperty.call(n,t))return n[t]}return null},ni=e=>{let t=X(e,"title");const i=X(e,Q.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),i&&t)return i.replace(/%s/g,()=>t);const n=X(e,Q.DEFAULT_TITLE);return t||n||void 0},ai=e=>X(e,Q.ON_CHANGE_CLIENT_STATE)||(()=>{}),ye=(e,t)=>t.filter(i=>typeof i[e]<"u").map(i=>i[e]).reduce((i,n)=>({...i,...n}),{}),si=(e,t)=>t.filter(i=>typeof i.base<"u").map(i=>i.base).reverse().reduce((i,n)=>{if(!i.length){const a=Object.keys(n);for(let r=0;r<a.length;r+=1){const o=a[r].toLowerCase();if(e.indexOf(o)!==-1&&n[o])return i.concat(n)}}return i},[]),ri=e=>console&&typeof console.warn=="function"&&console.warn(e),J=(e,t,i)=>{const n={};return i.filter(a=>Array.isArray(a[e])?!0:(typeof a[e]<"u"&&ri(`Helmet: ${e} should be of type "Array". Instead found type "${typeof a[e]}"`),!1)).map(a=>a[e]).reverse().reduce((a,r)=>{const c={};r.filter(l=>{let d;const u=Object.keys(l);for(let h=0;h<u.length;h+=1){const p=u[h],g=p.toLowerCase();t.indexOf(g)!==-1&&!(d==="rel"&&l[d].toLowerCase()==="canonical")&&!(g==="rel"&&l[g].toLowerCase()==="stylesheet")&&(d=g),t.indexOf(p)!==-1&&(p==="innerHTML"||p==="cssText"||p==="itemprop")&&(d=p)}if(!d||!l[d])return!1;const m=l[d].toLowerCase();return n[d]||(n[d]={}),c[d]||(c[d]={}),n[d][m]?!1:(c[d][m]=!0,!0)}).reverse().forEach(l=>a.push(l));const o=Object.keys(c);for(let l=0;l<o.length;l+=1){const d=o[l],u={...n[d],...c[d]};n[d]=u}return a},[]).reverse()},oi=(e,t)=>{if(Array.isArray(e)&&e.length){for(let i=0;i<e.length;i+=1)if(e[i][t])return!0}return!1},ci=e=>({baseTag:si(["href"],e),bodyAttributes:ye("bodyAttributes",e),defer:X(e,Q.DEFER),encode:X(e,Q.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:ye("htmlAttributes",e),linkTags:J("link",["rel","href"],e),metaTags:J("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:J("noscript",["innerHTML"],e),onChangeClientState:ai(e),scriptTags:J("script",["src","innerHTML"],e),styleTags:J("style",["cssText"],e),title:ni(e),titleAttributes:ye("titleAttributes",e),prioritizeSeoTags:oi(e,Q.PRIORITIZE_SEO_TAGS)}),ft=e=>Array.isArray(e)?e.join(""):e,li=(e,t)=>{const i=Object.keys(e);for(let n=0;n<i.length;n+=1)if(t[i[n]]&&t[i[n]].includes(e[i[n]]))return!0;return!1},ke=(e,t)=>Array.isArray(e)?e.reduce((i,n)=>(li(n,t)?i.priority.push(n):i.default.push(n),i),{priority:[],default:[]}):{default:e,priority:[]},_e=(e,t)=>({...e,[t]:void 0}),di=["noscript","script","style"],Ce=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),bt=e=>Object.keys(e).reduce((t,i)=>{const n=typeof e[i]<"u"?`${i}="${e[i]}"`:`${i}`;return t?`${t} ${n}`:n},""),ui=(e,t,i,n)=>{const a=bt(i),r=ft(t);return a?`<${e} ${E}="true" ${a}>${Ce(r,n)}</${e}>`:`<${e} ${E}="true">${Ce(r,n)}</${e}>`},pi=(e,t,i=!0)=>t.reduce((n,a)=>{const r=a,c=Object.keys(r).filter(d=>!(d==="innerHTML"||d==="cssText")).reduce((d,u)=>{const m=typeof r[u]>"u"?u:`${u}="${Ce(r[u],i)}"`;return d?`${d} ${m}`:m},""),o=r.innerHTML||r.cssText||"",l=di.indexOf(e)===-1;return`${n}<${e} ${E}="true" ${c}${l?"/>":`>${o}</${e}>`}`},""),yt=(e,t={})=>Object.keys(e).reduce((i,n)=>{const a=Fe[n];return i[a||n]=e[n],i},t),mi=(e,t,i)=>{const n={key:t,[E]:!0},a=yt(i,n);return[z.createElement("title",a,t)]},me=(e,t)=>t.map((i,n)=>{const a={key:n,[E]:!0};return Object.keys(i).forEach(r=>{const o=Fe[r]||r;if(o==="innerHTML"||o==="cssText"){const l=i.innerHTML||i.cssText;a.dangerouslySetInnerHTML={__html:l}}else a[o]=i[r]}),z.createElement(e,a)}),T=(e,t,i=!0)=>{switch(e){case"title":return{toComponent:()=>mi(e,t.title,t.titleAttributes),toString:()=>ui(e,t.title,t.titleAttributes,i)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>yt(t),toString:()=>bt(t)};default:return{toComponent:()=>me(e,t),toString:()=>pi(e,t,i)}}},gi=({metaTags:e,linkTags:t,scriptTags:i,encode:n})=>{const a=ke(e,be.meta),r=ke(t,be.link),c=ke(i,be.script);return{priorityMethods:{toComponent:()=>[...me("meta",a.priority),...me("link",r.priority),...me("script",c.priority)],toString:()=>`${T("meta",a.priority,n)} ${T("link",r.priority,n)} ${T("script",c.priority,n)}`},metaTags:a.default,linkTags:r.default,scriptTags:c.default}},hi=e=>{const{baseTag:t,bodyAttributes:i,encode:n=!0,htmlAttributes:a,noscriptTags:r,styleTags:c,title:o="",titleAttributes:l,prioritizeSeoTags:d}=e;let{linkTags:u,metaTags:m,scriptTags:h}=e,p={toComponent:()=>{},toString:()=>""};return d&&({priorityMethods:p,linkTags:u,metaTags:m,scriptTags:h}=gi(e)),{priority:p,base:T("base",t,n),bodyAttributes:T("bodyAttributes",i,n),htmlAttributes:T("htmlAttributes",a,n),link:T("link",u,n),meta:T("meta",m,n),noscript:T("noscript",r,n),script:T("script",h,n),style:T("style",c,n),title:T("title",{title:o,titleAttributes:l},n)}},Te=hi,se=[],kt=!!(typeof window<"u"&&window.document&&window.document.createElement),Ne=class{constructor(e,t){q(this,"instances",[]);q(this,"canUseDOM",kt);q(this,"context");q(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?se:this.instances,add:e=>{(this.canUseDOM?se:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?se:this.instances).indexOf(e);(this.canUseDOM?se:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=Te({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},vi={},St=z.createContext(vi),O,wt=(O=class extends f.Component{constructor(i){super(i);q(this,"helmetData");this.helmetData=new Ne(this.props.context||{},O.canUseDOM)}render(){return z.createElement(St.Provider,{value:this.helmetData.value},this.props.children)}},q(O,"canUseDOM",kt),O),_=(e,t)=>{const i=document.head||document.querySelector("head"),n=i.querySelectorAll(`${e}[${E}]`),a=[].slice.call(n),r=[];let c;return t&&t.length&&t.forEach(o=>{const l=document.createElement(e);for(const d in o)if(Object.prototype.hasOwnProperty.call(o,d))if(d==="innerHTML")l.innerHTML=o.innerHTML;else if(d==="cssText")l.styleSheet?l.styleSheet.cssText=o.cssText:l.appendChild(document.createTextNode(o.cssText));else{const u=d,m=typeof o[u]>"u"?"":o[u];l.setAttribute(d,m)}l.setAttribute(E,"true"),a.some((d,u)=>(c=u,l.isEqualNode(d)))?a.splice(c,1):r.push(l)}),a.forEach(o=>{var l;return(l=o.parentNode)==null?void 0:l.removeChild(o)}),r.forEach(o=>i.appendChild(o)),{oldTags:a,newTags:r}},Ee=(e,t)=>{const i=document.getElementsByTagName(e)[0];if(!i)return;const n=i.getAttribute(E),a=n?n.split(","):[],r=[...a],c=Object.keys(t);for(const o of c){const l=t[o]||"";i.getAttribute(o)!==l&&i.setAttribute(o,l),a.indexOf(o)===-1&&a.push(o);const d=r.indexOf(o);d!==-1&&r.splice(d,1)}for(let o=r.length-1;o>=0;o-=1)i.removeAttribute(r[o]);a.length===r.length?i.removeAttribute(E):i.getAttribute(E)!==c.join(",")&&i.setAttribute(E,c.join(","))},fi=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=ft(e)),Ee("title",t)},$e=(e,t)=>{const{baseTag:i,bodyAttributes:n,htmlAttributes:a,linkTags:r,metaTags:c,noscriptTags:o,onChangeClientState:l,scriptTags:d,styleTags:u,title:m,titleAttributes:h}=e;Ee("body",n),Ee("html",a),fi(m,h);const p={baseTag:_("base",i),linkTags:_("link",r),metaTags:_("meta",c),noscriptTags:_("noscript",o),scriptTags:_("script",d),styleTags:_("style",u)},g={},b={};Object.keys(p).forEach(y=>{const{newTags:k,oldTags:w}=p[y];k.length&&(g[y]=k),w.length&&(b[y]=p[y].oldTags)}),t&&t(),l(e,g,b)},ee=null,bi=e=>{ee&&cancelAnimationFrame(ee),e.defer?ee=requestAnimationFrame(()=>{$e(e,()=>{ee=null})}):($e(e),ee=null)},yi=bi,He=class extends f.Component{constructor(){super(...arguments);q(this,"rendered",!1)}shouldComponentUpdate(t){return!ti(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:i}=this.props.context;let n=null;const a=ci(t.get().map(r=>{const c={...r.props};return delete c.context,c}));wt.canUseDOM?yi(a):Te&&(n=Te(a)),i(n)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},we,Xs=(we=class extends f.Component{shouldComponentUpdate(e){return!Qt(_e(this.props,"helmetData"),_e(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,i,n){return{...t,[e.type]:[...t[e.type]||[],{...i,...this.mapNestedChildrenToProps(e,n)}]}}mapObjectTypeChildren(e,t,i,n){switch(e.type){case"title":return{...t,[e.type]:n,titleAttributes:{...i}};case"body":return{...t,bodyAttributes:{...i}};case"html":return{...t,htmlAttributes:{...i}};default:return{...t,[e.type]:{...i}}}}mapArrayTypeChildrenToProps(e,t){let i={...t};return Object.keys(e).forEach(n=>{i={...i,[n]:e[n]}}),i}warnOnInvalidChildren(e,t){return Ke(Ue.some(i=>e.type===i),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Ue.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),Ke(!t||typeof t=="string"||Array.isArray(t)&&!t.some(i=>typeof i!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let i={};return z.Children.forEach(e,n=>{if(!n||!n.props)return;const{children:a,...r}=n.props,c=Object.keys(r).reduce((l,d)=>(l[ii[d]||d]=r[d],l),{});let{type:o}=n;switch(typeof o=="symbol"?o=o.toString():this.warnOnInvalidChildren(n,a),o){case"Symbol(react.fragment)":t=this.mapChildrenToProps(a,t);break;case"link":case"meta":case"noscript":case"script":case"style":i=this.flattenArrayTypeChildren(n,i,c,a);break;default:t=this.mapObjectTypeChildren(n,t,c,a);break}}),this.mapArrayTypeChildrenToProps(i,t)}render(){const{children:e,...t}=this.props;let i={...t},{helmetData:n}=t;if(e&&(i=this.mapChildrenToProps(e,i)),n&&!(n instanceof Ne)){const a=n;n=new Ne(a.context,!0),delete i.helmetData}return n?z.createElement(He,{...i,context:n.value}):z.createElement(St.Consumer,null,a=>z.createElement(He,{...i,context:a}))}},q(we,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),we);const ki="modulepreload",Si=function(e){return"/"+e},Ye={},A=function(t,i,n){let a=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),o=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));a=Promise.allSettled(i.map(l=>{if(l=Si(l),l in Ye)return;Ye[l]=!0;const d=l.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":ki,d||(m.as="script"),m.crossOrigin="",m.href=l,o&&m.setAttribute("nonce",o),document.head.appendChild(m),d)return new Promise((h,p)=>{m.addEventListener("load",h),m.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(c){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=c,window.dispatchEvent(o),!o.defaultPrevented)throw c}return a.then(c=>{for(const o of c||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})},wi={home:"/",about:"/aboutus",services:"/services",serviceDetail:"/services/:serviceSlug",cases:"/cases",blog:"/blog",contact:"/contact",legal:"/legal",notice:"/legal/notice",privacy:"/legal/privacy",cookies:"/legal/cookies"};function Ze(e,t={}){const i=wi[e];if(!i)return console.warn(`No se encontró la ruta para la clave: ${e}`),"/";let n=i;return Object.entries(t).forEach(([a,r])=>{n=n.replace(`:${a}`,r)}),n}const xi={home:"/",about:"/aboutus",services:"/services",cases:"/cases",blog:"/blog",contact:"/contact",legal:"/legal"},Qe=e=>xi[e]||"/",Xe=[{id:"home",translationKey:"navigation.home"},{id:"services",translationKey:"navigation.services"},{id:"blog",translationKey:"navigation.blog"},{id:"contact",translationKey:"navigation.contact"}],Ai=[{id:"company",translationKey:"footer.company",links:[{id:"blog",path:"/blog",translationKey:"navigation.blog"},{id:"contact",path:"/contact",translationKey:"navigation.contact"},{id:"services",path:"/services",translationKey:"navigation.services"}]},{id:"services",translationKey:"footer.services",links:[{id:"service-connectivity",path:"/services",translationKey:"services.customDevelopment"},{id:"service-cybersecurity",path:"/services",translationKey:"services.growthMarketing"},{id:"service-av",path:"/services",translationKey:"services.marketingAutomation"},{id:"service-iot",path:"/services",translationKey:"services.uxUi"}]}],Ci=[{id:"legal.notice",path:":lang/legal/notice",translationKey:"legal.notice"},{id:"legal.privacy",path:":lang/legal/privacy",translationKey:"legal.privacy"},{id:"legal.cookies",path:":lang/legal/cookies",translationKey:"legal.cookies"}],Ti="Netnautica Digital",Js="https://www.netnautica.com",Ve="es",Ni="es",Le=[{code:"es",label:"ES",nativeName:"Español"},{code:"en",label:"EN",nativeName:"English"},{code:"fr",label:"FR",nativeName:"Français"},{code:"de",label:"DE",nativeName:"Deutsch"}],te={email:"cliente@netnautica.es",phone:{es:"+34 606 765 068",en:"+34 606 765 068",fr:"+34 606 765 068",de:"+34 606 765 068"},whatsapp:{es:"+34 606 765 068",en:"+34 606 765 068",fr:"+34 606 765 068",de:"+34 606 765 068"},address:{es:"Palma de Mallorca, España",en:"Palma de Mallorca, Spain",fr:"Palma de Mallorca, Espagne",de:"Palma de Mallorca, Spanien"}},er={linkedin:"https://www.linkedin.com/company/netnautica",twitter:"https://twitter.com/netnautica",youtube:"https://www.youtube.com/@netnautica",github:"https://github.com/netnautica"},tr=3;function xt({className:e=""}){return s.jsx(L,{to:"/",className:`group inline-flex items-center ${e}`,children:s.jsx("img",{src:"/images/netnautica-logo.png",alt:Ti,className:"h-10 w-auto"})})}const Ei={id:"tecnologias-bonding-yates",category:"technology",publishDate:"2024-03-15",author:"Netnautica Team",readTime:"12 min",featured:!0,slug:{es:"tecnologias-bonding-yates",en:"bonding-technologies-luxury-yachts",fr:"technologies-bonding-yachts-luxe",de:"bonding-technologien-luxusyachten"},locales:{es:{title:"Tecnologías de Bonding: Conectividad Redundante para Yates de Lujo",excerpt:"La tecnología de bonding permite la combinación inteligente de múltiples conexiones de internet en una sola interfaz virtual, creando un enlace agregado de mayor capacidad y redundancia para yates modernos.",content:`
      <div class="blog-hero">
        <img src="/images/blog/yate.jpg" alt="Yate de lujo con tecnologías de conectividad avanzada integrada" class="featured-image" loading="lazy" />
      </div>

      <div class="table-of-contents">
        <h2>📋 Índice de Contenidos</h2>
        <div class="toc-grid">
          <div class="toc-item">
            <span class="toc-number">01</span>
            <a href="#que-es-bonding">🔗 Qué es la tecnología Bonding</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">02</span>
            <a href="#peplink-core">⚡ Peplink Core Technology</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">03</span>
            <a href="#ventajas-bonding">🚀 Ventajas del Bonding</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">04</span>
            <a href="#aplicaciones">🎯 Aplicaciones Recomendadas</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">05</span>
            <a href="#conclusion">✨ Conclusión</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">06</span>
            <a href="#referencias">📚 Referencias y Bibliografía</a>
          </div>
        </div>
      </div>

      <div class="content-divider"></div>

      <section class="content-section">
        <h2 id="que-es-bonding" class="section-title">🔗 Qué es la tecnología Bonding</h2>
        
        <div class="intro-text">
          <p>La tecnología de <strong>bonding</strong> permite la combinación inteligente de múltiples conexiones de internet en una sola interfaz virtual, creando un enlace agregado de mayor capacidad y redundancia.</p>
          
          <p>En el entorno náutico, donde las conexiones satelitales, celulares y de marina pueden presentar variaciones en rendimiento y disponibilidad, el bonding se convierte en una solución fundamental para garantizar conectividad continua y estable.</p>

          <p>Como se detalla en este artículo, exploraremos desde <strong><em>ÍNDICE 02: PEPLINK CORE TECHNOLOGY</em></strong> hasta las <strong><em>ÍNDICE 04: APLICACIONES RECOMENDADAS</em></strong> más relevantes para yates modernos.</p>
        </div>

        <div class="technical-explanation">
          <p>Esta tecnología funciona distribuyendo el tráfico de datos a través de todos los enlaces disponibles simultáneamente, optimizando el uso del ancho de banda total y proporcionando <em>failover automático</em> en caso de que algún enlace falle.</p>
          
          <p><strong>El resultado:</strong> una conexión más robusta que cualquier enlace individual.</p>
        </div>

        <div class="highlight-box">
          <h4>💡 Punto Clave</h4>
          <p>El bonding no es simplemente balanceado de carga: es una <strong>agregación inteligente</strong> que optimiza cada paquete de datos según las características específicas de cada enlace disponible.</p>
        </div>

        <p>En la siguiente sección, <strong><em>ÍNDICE 02: PEPLINK CORE TECHNOLOGY</em></strong>, analizaremos cómo esta tecnología se implementa en la práctica.</p>
      </section>

      <div class="section-divider"></div>

      <section class="content-section peplink-section">
        <h2 id="peplink-core" class="section-title">⚡ Peplink Core Technology</h2>
        
        <div class="brand-showcase">
          <div class="logo-container">
            <img src="/src/assets/tech/peplink.png" alt="Peplink Logo" class="peplink-logo-centered" />
          </div>
        </div>

        <div class="technology-intro">
          <h3 class="subsection-title">🚀 SpeedFusion Technology</h3>
          <p>Peplink ha desarrollado <strong>SpeedFusion</strong>, una tecnología propietaria que representa el núcleo de sus soluciones de bonding.</p>
          
          <p>SpeedFusion va más allá del simple balanceado de carga, implementando técnicas avanzadas de agregación de ancho de banda que permiten utilizar eficientemente enlaces con diferentes características de latencia y velocidad.</p>
        </div>

        <div class="diagram-container">
          <img src="/images/blog/speedfusion-diagram.avif" alt="SpeedFusion Technology Diagram" class="featured-image" />
        </div>
      </section>
        <p class="image-caption">✨ Tecnología SpeedFusion: agregación inteligente de múltiples conexiones WAN</p>

        <div class="architecture-section">
          <h3 class="subsection-title">🏗️ Arquitectura de Red</h3>
          <div class="content-block">
            <p>Los equipos Peplink operan estableciendo <strong>túneles encriptados</strong> hacia servidores SpeedFusion Cloud o dispositivos locales, creando una red overlay que abstrae la complejidad de múltiples conexiones WAN.</p>
            
            <p>Esta arquitectura permite que las aplicaciones experimenten una sola conexión estable, independientemente de las fluctuaciones en los enlaces subyacentes.</p>
          </div>
        </div>

        <div class="products-showcase">
          <h3 class="subsection-title">⚓ Gama de Productos Marítimos</h3>
          <p class="intro-products">La línea <strong>Balance</strong> de Peplink ofrece soluciones específicamente diseñadas para entornos marítimos:</p>

          <div class="product-grid">
            <div class="product-card">
              <h4 class="product-name">🚤 Balance 20X</h4>
              <p class="product-description">Solución compacta con soporte para <strong>dos conexiones WAN celulares</strong> más conectividad WiFi, ideal para embarcaciones de tamaño medio.</p>
              <div class="product-specs">
                <span class="spec-tag">Velocidad: hasta 150 Mbps</span>
              </div>
            </div>

            <div class="product-card">
              <h4 class="product-name">🛥️ Balance 380</h4>
              <p class="product-description">Diseñado para yates que requieren mayor capacidad, soporta hasta <strong>tres módems celulares integrados</strong> además de conexiones externas como Starlink.</p>
              <div class="product-specs">
                <span class="spec-tag">Velocidad: hasta 400 Mbps</span>
              </div>
            </div>

            <div class="product-card">
              <h4 class="product-name">🚢 Balance 2500</h4>
              <p class="product-description">Solución enterprise con capacidad para <strong>múltiples conexiones WAN</strong>, diseñada para superyates con requisitos de conectividad críticos.</p>
              <div class="product-specs">
                <span class="spec-tag">Velocidad: hasta 2.5 Gbps</span>
              </div>
            </div>
          </div>
        </div>

        <div class="integration-section">
          <h3 class="subsection-title">🛰️ Integración con Sistemas Satelitales</h3>
          <div class="content-block">
            <p>Los equipos Peplink se integran <em>seamlessly</em> con sistemas <strong>Starlink</strong> y otros proveedores satelitales, permitiendo que estas conexiones de alta velocidad se combinen con enlaces celulares terrestres para crear una solución híbrida optimizada.</p>
          </div>
        </div>

        <p>Estas capacidades técnicas se traducen en ventajas concretas que analizamos en <strong><em>ÍNDICE 03: VENTAJAS DEL BONDING</em></strong>.</p>
      </section>

      <div class="section-divider"></div>

      <section class="content-section advantages-section">
        <h2 id="ventajas-bonding" class="section-title">🚀 Ventajas del Bonding</h2>

        <div class="advantages-grid">
          <div class="advantage-card featured">
            <div class="advantage-icon">🚀</div>
            <h3 class="advantage-title">Agregación de Ancho de Banda</h3>
            <p class="advantage-description">El bonding permite <strong>sumar las velocidades</strong> de múltiples conexiones, creando un enlace agregado que supera las limitaciones individuales de cada proveedor.</p>
            <div class="advantage-detail">
              <p><em>Especialmente valiosa en entornos marítimos donde ningún proveedor individual puede garantizar velocidades consistentemente altas.</em></p>
            </div>
          </div>

          <div class="advantage-card">
            <div class="advantage-icon">🛡️</div>
            <h3 class="advantage-title">Redundancia y Disponibilidad</h3>
            <p class="advantage-description">La redundancia inherente del bonding elimina <strong>puntos únicos de falla</strong>.</p>
            <div class="advantage-detail">
              <p>Si una conexión satelital experimenta interferencias meteorológicas o una conexión celular pierde cobertura, el tráfico se redistribuye automáticamente a través de los enlaces restantes <em>sin interrupción perceptible</em> para los usuarios.</p>
            </div>
          </div>

          <div class="advantage-card">
            <div class="advantage-icon">⚡</div>
            <h3 class="advantage-title">Optimización de Latencia</h3>
            <p class="advantage-description">SpeedFusion incluye <strong>algoritmos de optimización</strong> que pueden reducir la latencia efectiva enviando paquetes duplicados a través de múltiples rutas.</p>
            <div class="advantage-detail">
              <p>Técnica particularmente beneficial para aplicaciones en tiempo real como <em>videoconferencias y VoIP</em>.</p>
            </div>
          </div>

          <div class="advantage-card">
            <div class="advantage-icon">🎯</div>
            <h3 class="advantage-title">Gestión Inteligente del Tráfico</h3>
            <p class="advantage-description">Los sistemas Peplink implementan políticas avanzadas de <strong>Quality of Service (QoS)</strong>.</p>
            <div class="advantage-detail">
              <p>Permiten priorizar tráfico crítico y distribuir eficientemente las aplicaciones a través de los enlaces disponibles según sus características específicas.</p>
            </div>
          </div>
        </div>

        <p>Estas ventajas se materializan en casos de uso concretos que describimos en <strong><em>ÍNDICE 04: APLICACIONES RECOMENDADAS</em></strong>.</p>
      </section>

      <div class="section-divider"></div>

      <section class="content-section applications-section">
        <h2 id="aplicaciones" class="section-title">🎯 Aplicaciones Recomendadas para Yates</h2>

        <div class="applications-grid">
          <div class="application-item">
            <div class="app-header">
              <span class="app-icon">🌐</span>
              <h3 class="app-title">Conectividad Móvil Marina</h3>
            </div>
            <p class="app-description">SpeedFusion permite combinar múltiples conexiones de internet disponibles en entornos marítimos: <strong>satelital, celular y WiFi de marina</strong>, creando una conexión única y robusta.</p>
          </div>

          <div class="application-item">
            <div class="app-header">
              <span class="app-icon">📹</span>
              <h3 class="app-title">Streaming HD en Vivo</h3>
            </div>
            <p class="app-description">La agregación de ancho de banda a nivel de paquete permite <strong>streaming de video HD ininterrumpido</strong>, ideal para entretenimiento de huéspedes y comunicaciones corporativas.</p>
          </div>

          <div class="application-item">
            <div class="app-header">
              <span class="app-icon">🛡️</span>
              <h3 class="app-title">Hot Failover</h3>
            </div>
            <p class="app-description">Mantiene la <strong>persistencia de sesiones</strong> durante desconexiones WAN, garantizando transiciones seamless sin interrupciones perceptibles para los usuarios.</p>
          </div>

          <div class="application-item">
            <div class="app-header">
              <span class="app-icon">📡</span>
              <h3 class="app-title">Comunicación en Áreas Remotas</h3>
            </div>
            <p class="app-description">Especialmente útil en ubicaciones con conectividad limitada, donde la <strong>combinación de múltiples enlaces</strong> proporciona conectividad consistente.</p>
          </div>
        </div>

        <p>Para una comprensión más profunda de estos conceptos, las <strong><em>CARACTERÍSTICAS TÉCNICAS CLAVE</em></strong> proporcionan el contexto técnico necesario.</p>
      </section>

      <div class="section-divider"></div>

      <section class="content-section technical-features">
        <h2 class="section-title">🔧 Características Técnicas Clave</h2>

        <div class="features-container">
          <div class="feature-block">
            <h3 class="feature-title">⚡ Agregación de Ancho de Banda</h3>
            <p class="feature-description">Combina datos <strong>a nivel de paquete</strong>, permitiendo sumar la velocidad de múltiples conexiones para crear enlaces más rápidos entre ubicaciones.</p>
          </div>

          <div class="feature-block">
            <h3 class="feature-title">🔄 Mitigación de Pérdida de Paquetes</h3>
            <p class="feature-description">La tecnología <strong>"Smoothing"</strong> llena gaps de conectividad enviando paquetes redundantes a través de múltiples canales de red.</p>
          </div>

          <div class="feature-block">
            <h3 class="feature-title">🎛️ Gestión Avanzada de Tráfico</h3>
            <p class="feature-description">Control granular sobre diferentes tipos de tráfico con capacidad de <strong>priorizar tráfico crítico</strong> de red y gestionar el rendimiento.</p>
          </div>

          <div class="feature-block">
            <h3 class="feature-title">🔒 Encriptación Separada</h3>
            <p class="feature-description">Cada conexión WAN se <strong>encripta por separado</strong>, proporcionando seguridad mejorada en entornos de múltiples proveedores.</p>
          </div>
        </div>

        <p>Todos estos elementos técnicos convergen en las reflexiones finales de <strong><em>ÍNDICE 05: CONCLUSIÓN</em></strong>.</p>
      </section>

      <div class="section-divider"></div>

      <section class="content-section conclusion-section">
        <h2 id="conclusion" class="section-title">✨ Conclusión</h2>
        
        <div class="conclusion-content">
          <div class="key-insight">
            <p>Las tecnologías de bonding representan la <strong>evolución natural</strong> de la conectividad náutica, transformando múltiples conexiones independientes en una infraestructura de red robusta y predecible.</p>
          </div>

          <div class="value-proposition">
            <p><strong>Peplink</strong>, con su tecnología SpeedFusion y experiencia específica en entornos marítimos, ofrece soluciones que no solo agregan ancho de banda sino que crean una experiencia de conectividad fundamentalmente superior.</p>
          </div>

          <div class="investment-perspective">
            <p>La inversión en tecnologías de bonding debe evaluarse no solo en términos de mejora de conectividad, sino como una <em>actualización fundamental</em> de la infraestructura tecnológica del yate que habilita nuevas capacidades operacionales y posicionamiento competitivo en el mercado de yates de lujo.</p>
          </div>

          <div class="final-statement">
            <div class="quote-box">
              <p><strong>💡 Reflexión Final:</strong> Para yates modernos que buscan ofrecer experiencias de conectividad comparables a instalaciones terrestres, el bonding no es una mejora opcional sino un <strong>requisito fundamental</strong> de la infraestructura tecnológica.</p>
            </div>
          </div>
        </div>

        <p>Para mayor profundidad en estos temas, consulte <strong><em>ÍNDICE 06: REFERENCIAS Y BIBLIOGRAFÍA</em></strong>.</p>
      </section>

      <div class="section-divider"></div>

      <section class="content-section references-section">
        <h2 id="referencias" class="section-title">📚 Referencias y Bibliografía</h2>
        <div class="references-grid">
          <div class="reference-item">
            <span class="ref-icon">📖</span>
            <span class="ref-text">Peplink Technologies - SpeedFusion Documentation</span>
          </div>
          <div class="reference-item">
            <span class="ref-icon">🌊</span>
            <span class="ref-text">Maritime Connectivity Solutions - Industry Best Practices</span>
          </div>
          <div class="reference-item">
            <span class="ref-icon">🛰️</span>
            <span class="ref-text">Satellite Communications for Yachts - Technical Guidelines</span>
          </div>
        </div>
      </section>
    `,seo:{metaTitle:"Tecnologías Bonding para Yates: Conectividad Redundante | Netnautica",metaDescription:"Descubre cómo las tecnologías de bonding Peplink SpeedFusion revolucionan la conectividad en yates de lujo. Guía técnica completa.",keywords:["bonding yates","peplink","speedfusion","conectividad náutica","redundancia","internet embarcaciones"]}},en:{title:"Bonding Technologies: Redundant Connectivity for Luxury Yachts",excerpt:"Bonding technology enables the intelligent combination of multiple internet connections into a single virtual interface, creating an aggregated link with greater capacity and redundancy for modern yachts.",content:`
      <div class="blog-hero">
        <img src="/images/blog/yate.jpg" alt="Luxury yacht with advanced connectivity technologies integrated" class="featured-image" loading="lazy" />
      </div>

      <div class="table-of-contents">
        <h2>📋 Table of Contents</h2>
        <div class="toc-grid">
          <div class="toc-item">
            <span class="toc-number">01</span>
            <a href="#what-is-bonding">🔗 What is Bonding Technology</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">02</span>
            <a href="#peplink-core">⚡ Peplink Core Technology</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">03</span>
            <a href="#bonding-advantages">🚀 Bonding Advantages</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">04</span>
            <a href="#applications">🎯 Recommended Applications</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">05</span>
            <a href="#conclusion">✨ Conclusion</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">06</span>
            <a href="#references">📚 References and Bibliography</a>
          </div>
        </div>
      </div>

      <div class="content-divider"></div>

      <section class="content-section">
        <h2 id="what-is-bonding" class="section-title">🔗 What is Bonding Technology</h2>
        
        <div class="intro-text">
          <p><strong>Bonding technology</strong> enables the intelligent combination of multiple internet connections into a single virtual interface, creating an aggregated link with greater capacity and redundancy.</p>
          
          <p>In the maritime environment, where satellite, cellular, and marina connections can present variations in performance and availability, bonding becomes a fundamental solution to ensure continuous and stable connectivity.</p>

          <p>As detailed in this article, we will explore from <strong><em>INDEX 02: PEPLINK CORE TECHNOLOGY</em></strong> to the most relevant <strong><em>INDEX 04: RECOMMENDED APPLICATIONS</em></strong> for modern yachts.</p>
        </div>

        <div class="technical-explanation">
          <p>This technology works by distributing data traffic across all available links simultaneously, optimizing the use of total bandwidth and providing <em>automatic failover</em> if any link fails.</p>
          
          <p><strong>The result:</strong> a more robust connection than any individual link.</p>
        </div>

        <div class="highlight-box">
          <h4>💡 Key Point</h4>
          <p>Bonding is not simply load balancing: it's <strong>intelligent aggregation</strong> that optimizes each data packet according to the specific characteristics of each available link.</p>
        </div>

        <p>In the next section, <strong><em>INDEX 02: PEPLINK CORE TECHNOLOGY</em></strong>, we will analyze how this technology is implemented in practice.</p>
      </section>

      <div class="section-divider"></div>

      <section class="content-section peplink-section">
        <h2 id="peplink-core" class="section-title">⚡ Peplink Core Technology</h2>
        
        <div class="brand-showcase">
          <div class="logo-container">
            <img src="/src/assets/tech/peplink.png" alt="Peplink Logo" class="peplink-logo-centered" />
          </div>
        </div>

        <div class="technology-intro">
          <h3 class="subsection-title">🚀 SpeedFusion Technology</h3>
          <p>Peplink has developed <strong>SpeedFusion</strong>, a proprietary technology that represents the core of their bonding solutions.</p>
          
          <p>SpeedFusion goes beyond simple load balancing, implementing advanced bandwidth aggregation techniques that efficiently utilize links with different latency and speed characteristics.</p>
        </div>

        <div class="diagram-container">
          <img src="/images/blog/speedfusion-diagram.avif" alt="SpeedFusion Technology Diagram" class="featured-image" />
        </div>
        <p class="image-caption">✨ SpeedFusion Technology: intelligent aggregation of multiple WAN connections</p>

        <div class="architecture-section">
          <h3 class="subsection-title">🏗️ Network Architecture</h3>
          <div class="content-block">
            <p>Peplink devices operate by establishing <strong>encrypted tunnels</strong> to SpeedFusion Cloud servers or local devices, creating an overlay network that abstracts the complexity of multiple WAN connections.</p>
            
            <p>This architecture allows applications to experience a single stable connection, regardless of fluctuations in underlying links.</p>
          </div>
        </div>

        <div class="products-showcase">
          <h3 class="subsection-title">⚓ Maritime Product Range</h3>
          <p class="intro-products">Peplink's <strong>Balance</strong> line offers solutions specifically designed for maritime environments:</p>

          <div class="product-grid">
            <div class="product-card">
              <h4 class="product-name">🚤 Balance 20X</h4>
              <p class="product-description">Compact solution with support for <strong>two cellular WAN connections</strong> plus WiFi connectivity, ideal for medium-sized vessels.</p>
              <div class="product-specs">
                <span class="spec-tag">Speed: up to 150 Mbps</span>
              </div>
            </div>

            <div class="product-card">
              <h4 class="product-name">🛥️ Balance 380</h4>
              <p class="product-description">Designed for yachts requiring greater capacity, supports up to <strong>three integrated cellular modems</strong> plus external connections like Starlink.</p>
              <div class="product-specs">
                <span class="spec-tag">Speed: up to 400 Mbps</span>
              </div>
            </div>

            <div class="product-card">
              <h4 class="product-name">🚢 Balance 2500</h4>
              <p class="product-description">Enterprise solution with capacity for <strong>multiple WAN connections</strong>, designed for superyachts with critical connectivity requirements.</p>
              <div class="product-specs">
                <span class="spec-tag">Speed: up to 2.5 Gbps</span>
              </div>
            </div>
          </div>
        </div>

        <div class="integration-section">
          <h3 class="subsection-title">🛰️ Satellite System Integration</h3>
          <div class="content-block">
            <p>Peplink devices integrate <em>seamlessly</em> with <strong>Starlink</strong> systems and other satellite providers, allowing these high-speed connections to combine with terrestrial cellular links to create an optimized hybrid solution.</p>
          </div>
        </div>
      </section>

      <div class="section-divider"></div>

      <section class="content-section advantages-section">
        <h2 id="bonding-advantages" class="section-title">🚀 Bonding Advantages</h2>

        <div class="advantages-grid">
          <div class="advantage-card featured">
            <div class="advantage-icon">🚀</div>
            <h3 class="advantage-title">Bandwidth Aggregation</h3>
            <p class="advantage-description">Bonding allows <strong>adding the speeds</strong> of multiple connections, creating an aggregated link that surpasses individual limitations of each provider.</p>
            <div class="advantage-detail">
              <p><em>This capability is especially valuable in maritime environments where no individual provider can guarantee consistently high speeds.</em></p>
            </div>
          </div>

          <div class="advantage-card">
            <div class="advantage-icon">🛡️</div>
            <h3 class="advantage-title">Redundancy and Availability</h3>
            <p class="advantage-description">The inherent redundancy of bonding eliminates <strong>single points of failure</strong>.</p>
            <div class="advantage-detail">
              <p>If a satellite connection experiences weather interference or a cellular connection loses coverage, traffic is automatically redistributed through remaining links <em>without perceptible interruption</em> to users.</p>
            </div>
          </div>

          <div class="advantage-card">
            <div class="advantage-icon">⚡</div>
            <h3 class="advantage-title">Latency Optimization</h3>
            <p class="advantage-description">SpeedFusion includes <strong>optimization algorithms</strong> that can reduce effective latency by sending duplicate packets through multiple paths.</p>
            <div class="advantage-detail">
              <p>This technique is particularly beneficial for real-time applications like <em>video conferencing and VoIP</em>.</p>
            </div>
          </div>

          <div class="advantage-card">
            <div class="advantage-icon">🎯</div>
            <h3 class="advantage-title">Intelligent Traffic Management</h3>
            <p class="advantage-description">Peplink systems implement advanced <strong>Quality of Service (QoS)</strong> policies.</p>
            <div class="advantage-detail">
              <p>They allow prioritizing critical traffic and efficiently distributing applications across available links according to their specific characteristics.</p>
            </div>
          </div>
        </div>
      </section>

      <div class="section-divider"></div>

      <h2 id="applications">Recommended Applications for Yachts</h2>

      <h3>🌐 Marine Mobile Connectivity</h3>
      <p>SpeedFusion enables combining multiple internet connections available in maritime environments: satellite, cellular, and marina WiFi, creating a single, robust connection.</p>

      <h3>📹 Live HD Streaming</h3>
      <p>Packet-level bandwidth aggregation enables uninterrupted HD video streaming, ideal for guest entertainment and corporate communications.</p>

      <h3>🛡️ Hot Failover</h3>
      <p>Maintains session persistence during WAN disconnections, ensuring seamless transitions without perceptible interruptions for users.</p>

      <h3>📡 Communication in Remote Areas</h3>
      <p>Especially useful in locations with limited connectivity, where combining multiple links provides consistent connectivity.</p>

      <h2>Key Technical Features</h2>

      <h3>Bandwidth Aggregation</h3>
      <p>Combines data at packet level, allowing speed aggregation of multiple connections to create faster links between locations.</p>

      <h3>Packet Loss Mitigation</h3>
      <p>"Smoothing" technology fills connectivity gaps by sending redundant packets through multiple network channels.</p>

      <h3>Advanced Traffic Management</h3>
      <p>Granular control over different traffic types with ability to prioritize critical network traffic and manage performance.</p>

      <h3>Separate Encryption</h3>
      <p>Each WAN connection is encrypted separately, providing enhanced security in multi-provider environments.</p>

      <h2 id="conclusion">Conclusion</h2>
      <p>Bonding technologies represent the natural evolution of maritime connectivity, transforming multiple independent connections into robust and predictable network infrastructure. Peplink, with its SpeedFusion technology and specific experience in maritime environments, offers solutions that not only aggregate bandwidth but create a fundamentally superior connectivity experience.</p>

      <p>Investment in bonding technologies should be evaluated not only in terms of connectivity improvement, but as a fundamental upgrade of the yacht's technological infrastructure that enables new operational capabilities and competitive positioning in the luxury yacht market.</p>

      <p><strong>For modern yachts seeking to offer connectivity experiences comparable to terrestrial installations, bonding is not an optional improvement but a fundamental requirement of technological infrastructure.</strong></p>

      <h2 id="references">References and Bibliography</h2>
      <ul>
        <li>Peplink Technologies - SpeedFusion Documentation</li>
        <li>Maritime Connectivity Solutions - Industry Best Practices</li>
        <li>Satellite Communications for Yachts - Technical Guidelines</li>
      </ul>
    `,seo:{metaTitle:"Bonding Technologies for Yachts: Redundant Connectivity | Netnautica",metaDescription:"Discover how Peplink SpeedFusion bonding technologies revolutionize connectivity in luxury yachts. Complete technical guide.",keywords:["yacht bonding","peplink","speedfusion","maritime connectivity","redundancy","vessel internet"]}},fr:{title:"Technologies de Bonding: Connectivité Redondante pour Yachts de Luxe",excerpt:"La technologie de bonding permet la combinaison intelligente de multiples connexions internet en une seule interface virtuelle, créant une liaison agrégée de plus grande capacité et redondance pour les yachts modernes.",content:`
      <div class="blog-hero">
        <img src="/images/blog/yate.jpg" alt="Yacht de luxe avec technologies de connectivité avancées" class="featured-image" />
      </div>

      <div class="table-of-contents">
        <h2>📋 Table des Matières</h2>
        <div class="toc-grid">
          <div class="toc-item">
            <span class="toc-number">01</span>
            <a href="#quest-ce-que-bonding">🔗 Qu'est-ce que la technologie Bonding</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">02</span>
            <a href="#peplink-core">⚡ Peplink Core Technology</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">03</span>
            <a href="#avantages-bonding">🚀 Avantages du Bonding</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">04</span>
            <a href="#applications">🎯 Applications Recommandées</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">05</span>
            <a href="#conclusion">✨ Conclusion</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">06</span>
            <a href="#references">📚 Références et Bibliographie</a>
          </div>
        </div>
      </div>

      <div class="content-divider"></div>

      <section class="content-section">
        <h2 id="quest-ce-que-bonding" class="section-title">🔗 Qu'est-ce que la technologie Bonding</h2>
        
        <div class="intro-text">
          <p>La technologie de <strong>bonding</strong> permet la combinaison intelligente de multiples connexions internet en une seule interface virtuelle, créant une liaison agrégée de plus grande capacité et redondance.</p>
          
          <p>Dans l'environnement maritime, où les connexions satellitaires, cellulaires et de marina peuvent présenter des variations de performance et disponibilité, le bonding devient une solution fondamentale pour garantir une connectivité continue et stable.</p>

          <p>Comme détaillé dans cet article, nous explorerons depuis <strong><em>INDEX 02: PEPLINK CORE TECHNOLOGY</em></strong> jusqu'aux <strong><em>INDEX 04: APPLICATIONS RECOMMANDÉES</em></strong> les plus pertinentes pour les yachts modernes.</p>
        </div>

      <p>Cette technologie fonctionne en distribuant le trafic de données à travers tous les liens disponibles simultanément, optimisant l'utilisation de la bande passante totale et fournissant un basculement automatique si un lien échoue. Le résultat est une connexion plus robuste que n'importe quel lien individuel.</p>

      <div class="punto-clave">
        <h4>Point Clé</h4>
        <p>Le bonding n'est pas simplement de l'équilibrage de charge: c'est une agrégation intelligente qui optimise chaque paquet de données selon les caractéristiques spécifiques de chaque lien disponible.</p>
      </div>

      <h2 id="peplink-core">Peplink Core</h2>
      
      <h3>Technologie SpeedFusion</h3>
      <img src="/images/blog/peplink-logo.png" alt="Logo Peplink" class="inline-image" />
      <p>Peplink a développé SpeedFusion, une technologie propriétaire qui représente le cœur de leurs solutions de bonding. SpeedFusion va au-delà du simple équilibrage de charge, implémentant des techniques avancées d'agrégation de bande passante qui utilisent efficacement les liens avec différentes caractéristiques de latence et vitesse.</p>

      <img src="/images/blog/speedfusion-diagram.avif" alt="Diagramme Technologie SpeedFusion" class="featured-image" />
      <p class="image-caption">Technologie SpeedFusion: agrégation intelligente de multiples connexions WAN</p>

      <h3>Architecture Réseau</h3>
      <p>Les équipements Peplink fonctionnent en établissant des tunnels chiffrés vers les serveurs SpeedFusion Cloud ou des dispositifs locaux, créant un réseau overlay qui abstrait la complexité des multiples connexions WAN. Cette architecture permet aux applications d'expérimenter une seule connexion stable, indépendamment des fluctuations des liens sous-jacents.</p>

      <h3>Gamme de Produits Maritimes</h3>
      <p>La ligne Balance de Peplink offre des solutions spécifiquement conçues pour les environnements maritimes:</p>

      <h4>Balance 20X</h4>
      <p>Solution compacte avec support pour deux connexions WAN cellulaires plus connectivité WiFi, idéale pour les embarcations de taille moyenne.</p>

      <h4>Balance 380</h4>
      <p>Conçu pour les yachts nécessitant une plus grande capacité, supporte jusqu'à trois modems cellulaires intégrés plus des connexions externes comme Starlink.</p>

      <h4>Balance 2500</h4>
      <p>Solution enterprise avec capacité pour multiples connexions WAN, conçue pour les superyachts avec des exigences de connectivité critiques.</p>

      <h3>Intégration avec Systèmes Satellitaires</h3>
      <p>Les équipements Peplink s'intègrent parfaitement avec les systèmes Starlink et autres fournisseurs satellitaires, permettant à ces connexions haute vitesse de se combiner avec les liens cellulaires terrestres pour créer une solution hybride optimisée.</p>

      <h2 id="avantages-bonding">Avantages du Bonding</h2>

      <div class="ventaja-item">
        <h3>🚀 Agrégation de Bande Passante</h3>
        <p>Le bonding permet d'additionner les vitesses de multiples connexions, créant un lien agrégé qui dépasse les limitations individuelles de chaque fournisseur. Cette capacité est particulièrement précieuse dans les environnements maritimes où aucun fournisseur individuel ne peut garantir des vitesses constamment élevées.</p>
      </div>

      <div class="ventaja-item">
        <h3>🛡️ Redondance et Disponibilité</h3>
        <p>La redondance inhérente du bonding élimine les points uniques de défaillance. Si une connexion satellitaire subit des interférences météorologiques ou qu'une connexion cellulaire perd sa couverture, le trafic est automatiquement redistribué à travers les liens restants sans interruption perceptible pour les utilisateurs.</p>
      </div>

      <div class="ventaja-item">
        <h3>⚡ Optimisation de Latence</h3>
        <p>SpeedFusion inclut des algorithmes d'optimisation qui peuvent réduire la latence effective en envoyant des paquets dupliqués à travers multiples chemins et utilisant celui qui arrive en premier. Cette technique est particulièrement bénéfique pour les applications temps réel comme la visioconférence et VoIP.</p>
      </div>

      <div class="ventaja-item">
        <h3>🎯 Gestion Intelligente du Trafic</h3>
        <p>Les systèmes Peplink implémentent des politiques avancées de Qualité de Service (QoS) qui permettent de prioriser le trafic critique et distribuer efficacement les applications à travers les liens disponibles selon leurs caractéristiques spécifiques.</p>
      </div>

      <h2 id="applications">Applications Recommandées pour Yachts</h2>

      <h3>🌐 Connectivité Mobile Maritime</h3>
      <p>SpeedFusion permet de combiner multiples connexions internet disponibles dans les environnements maritimes: satellitaire, cellulaire et WiFi de marina, créant une connexion unique et robuste.</p>

      <h3>📹 Streaming HD en Direct</h3>
      <p>L'agrégation de bande passante au niveau paquet permet le streaming vidéo HD ininterrompu, idéal pour le divertissement des invités et les communications corporatives.</p>

      <h3>🛡️ Basculement à Chaud</h3>
      <p>Maintient la persistance des sessions pendant les déconnexions WAN, garantissant des transitions transparentes sans interruptions perceptibles pour les utilisateurs.</p>

      <h3>📡 Communication dans Zones Reculées</h3>
      <p>Particulièrement utile dans les locations avec connectivité limitée, où la combinaison de multiples liens fournit une connectivité consistante.</p>

      <h2>Caractéristiques Techniques Clés</h2>

      <h3>Agrégation de Bande Passante</h3>
      <p>Combine les données au niveau paquet, permettant d'additionner la vitesse de multiples connexions pour créer des liens plus rapides entre locations.</p>

      <h3>Atténuation de Perte de Paquets</h3>
      <p>La technologie "Smoothing" comble les lacunes de connectivité en envoyant des paquets redondants à travers multiples canaux réseau.</p>

      <h3>Gestion Avancée du Trafic</h3>
      <p>Contrôle granulaire sur différents types de trafic avec capacité de prioriser le trafic réseau critique et gérer les performances.</p>

      <h3>Chiffrement Séparé</h3>
      <p>Chaque connexion WAN est chiffrée séparément, fournissant une sécurité améliorée dans les environnements multi-fournisseurs.</p>

      <h2 id="conclusion">Conclusion</h2>
      <p>Les technologies de bonding représentent l'évolution naturelle de la connectivité maritime, transformant multiples connexions indépendantes en une infrastructure réseau robuste et prévisible. Peplink, avec sa technologie SpeedFusion et son expérience spécifique dans les environnements maritimes, offre des solutions qui non seulement agrègent la bande passante mais créent une expérience de connectivité fondamentalement supérieure.</p>

      <p>L'investissement dans les technologies de bonding doit être évalué non seulement en termes d'amélioration de connectivité, mais comme une mise à niveau fondamentale de l'infrastructure technologique du yacht qui permet de nouvelles capacités opérationnelles et un positionnement concurrentiel sur le marché des yachts de luxe.</p>

      <p><strong>Pour les yachts modernes cherchant à offrir des expériences de connectivité comparables aux installations terrestres, le bonding n'est pas une amélioration optionnelle mais un prérequis fondamental de l'infrastructure technologique.</strong></p>

      <h2 id="references">Références et Bibliographie</h2>
      <ul>
        <li>Peplink Technologies - Documentation SpeedFusion</li>
        <li>Solutions de Connectivité Maritime - Meilleures Pratiques de l'Industrie</li>
        <li>Communications Satellitaires pour Yachts - Directives Techniques</li>
      </ul>
    `,seo:{metaTitle:"Technologies Bonding pour Yachts: Connectivité Redondante | Netnautica",metaDescription:"Découvrez comment les technologies de bonding Peplink SpeedFusion révolutionnent la connectivité dans les yachts de luxe. Guide technique complet.",keywords:["bonding yachts","peplink","speedfusion","connectivité maritime","redondance","internet bateaux"]}},de:{title:"Bonding-Technologien: Redundante Konnektivität für Luxusyachten",excerpt:"Bonding-Technologie ermöglicht die intelligente Kombination mehrerer Internetverbindungen in einer einzigen virtuellen Schnittstelle und schafft eine aggregierte Verbindung mit größerer Kapazität und Redundanz für moderne Yachten.",content:`
      <div class="blog-hero">
        <img src="/images/blog/yate.jpg" alt="Luxusyacht mit fortschrittlichen Konnektivitätstechnologien" class="featured-image" />
      </div>

      <div class="table-of-contents">
        <h2>📋 Inhaltsverzeichnis</h2>
        <div class="toc-grid">
          <div class="toc-item">
            <span class="toc-number">01</span>
            <a href="#was-ist-bonding">🔗 Was ist Bonding-Technologie</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">02</span>
            <a href="#peplink-core">⚡ Peplink Core Technology</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">03</span>
            <a href="#bonding-vorteile">🚀 Bonding-Vorteile</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">04</span>
            <a href="#anwendungen">🎯 Empfohlene Anwendungen</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">05</span>
            <a href="#fazit">✨ Fazit</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">06</span>
            <a href="#referenzen">📚 Referenzen und Bibliographie</a>
          </div>
        </div>
      </div>

      <div class="content-divider"></div>

      <h2 id="was-ist-bonding">Was ist Bonding-Technologie</h2>
      <p>Bonding-Technologie ermöglicht die intelligente Kombination mehrerer Internetverbindungen in einer einzigen virtuellen Schnittstelle und schafft eine aggregierte Verbindung mit größerer Kapazität und Redundanz. In der maritimen Umgebung, wo Satelliten-, Mobilfunk- und Marina-Verbindungen Schwankungen in Leistung und Verfügbarkeit aufweisen können, wird Bonding zu einer grundlegenden Lösung für kontinuierliche und stabile Konnektivität.</p>

      <p>Diese Technologie funktioniert durch die Verteilung des Datenverkehrs über alle verfügbaren Verbindungen gleichzeitig, optimiert die Nutzung der gesamten Bandbreite und bietet automatisches Failover, wenn eine Verbindung ausfällt. Das Ergebnis ist eine robustere Verbindung als jede einzelne Verbindung.</p>

      <div class="punto-clave">
        <h4>Schlüsselpunkt</h4>
        <p>Bonding ist nicht einfach Lastausgleich: Es ist intelligente Aggregation, die jedes Datenpaket entsprechend den spezifischen Eigenschaften jeder verfügbaren Verbindung optimiert.</p>
      </div>

      <h2 id="peplink-core">Peplink Core</h2>
      
      <h3>SpeedFusion-Technologie</h3>
      <img src="/images/blog/peplink-logo.png" alt="Peplink Logo" class="inline-image" />
      <p>Peplink hat SpeedFusion entwickelt, eine proprietäre Technologie, die den Kern ihrer Bonding-Lösungen darstellt. SpeedFusion geht über einfachen Lastausgleich hinaus und implementiert fortschrittliche Bandbreitenaggregationstechniken, die Verbindungen mit unterschiedlichen Latenz- und Geschwindigkeitsmerkmalen effizient nutzen.</p>

      <img src="/images/blog/speedfusion-diagram.avif" alt="SpeedFusion-Technologie-Diagramm" class="featured-image" />
      <p class="image-caption">SpeedFusion-Technologie: intelligente Aggregation mehrerer WAN-Verbindungen</p>

      <h3>Netzwerkarchitektur</h3>
      <p>Peplink-Geräte funktionieren durch die Einrichtung verschlüsselter Tunnel zu SpeedFusion Cloud-Servern oder lokalen Geräten und schaffen ein Overlay-Netzwerk, das die Komplexität mehrerer WAN-Verbindungen abstrahiert. Diese Architektur ermöglicht es Anwendungen, eine einzige stabile Verbindung zu erleben, unabhängig von Schwankungen in den zugrunde liegenden Verbindungen.</p>

      <h3>Maritime Produktpalette</h3>
      <p>Die Balance-Linie von Peplink bietet speziell für maritime Umgebungen entwickelte Lösungen:</p>

      <h4>Balance 20X</h4>
      <p>Kompakte Lösung mit Unterstützung für zwei zelluläre WAN-Verbindungen plus WiFi-Konnektivität, ideal für mittelgroße Schiffe.</p>

      <h4>Balance 380</h4>
      <p>Entwickelt für Yachten, die größere Kapazität benötigen, unterstützt bis zu drei integrierte Mobilfunkmodems plus externe Verbindungen wie Starlink.</p>

      <h4>Balance 2500</h4>
      <p>Enterprise-Lösung mit Kapazität für mehrere WAN-Verbindungen, entwickelt für Superyachten mit kritischen Konnektivitätsanforderungen.</p>

      <h3>Integration mit Satellitensystemen</h3>
      <p>Peplink-Geräte integrieren sich nahtlos mit Starlink-Systemen und anderen Satellitenanbietern und ermöglichen es diesen Hochgeschwindigkeitsverbindungen, sich mit terrestrischen Mobilfunkverbindungen zu kombinieren, um eine optimierte Hybridlösung zu schaffen.</p>

      <h2 id="bonding-vorteile">Bonding-Vorteile</h2>

      <div class="ventaja-item">
        <h3>🚀 Bandbreitenaggregation</h3>
        <p>Bonding ermöglicht die Addition der Geschwindigkeiten mehrerer Verbindungen und schafft eine aggregierte Verbindung, die die individuellen Beschränkungen jedes Anbieters übersteigt. Diese Fähigkeit ist besonders wertvoll in maritimen Umgebungen, wo kein einzelner Anbieter durchgehend hohe Geschwindigkeiten garantieren kann.</p>
      </div>

      <div class="ventaja-item">
        <h3>🛡️ Redundanz und Verfügbarkeit</h3>
        <p>Die inhärente Redundanz des Bondings eliminiert einzelne Ausfallpunkte. Wenn eine Satellitenverbindung wetterbedingte Störungen erfährt oder eine Mobilfunkverbindung die Abdeckung verliert, wird der Verkehr automatisch über die verbleibenden Verbindungen umgeleitet, ohne dass Benutzer eine wahrnehmbare Unterbrechung erfahren.</p>
      </div>

      <div class="ventaja-item">
        <h3>⚡ Latenzoptimierung</h3>
        <p>SpeedFusion enthält Optimierungsalgorithmen, die die effektive Latenz reduzieren können, indem duplizierte Pakete über mehrere Pfade gesendet und dasjenige verwendet wird, das zuerst ankommt. Diese Technik ist besonders vorteilhaft für Echtzeitanwendungen wie Videokonferenzen und VoIP.</p>
      </div>

      <div class="ventaja-item">
        <h3>🎯 Intelligentes Verkehrsmanagement</h3>
        <p>Peplink-Systeme implementieren erweiterte Quality of Service (QoS)-Richtlinien, die es ermöglichen, kritischen Verkehr zu priorisieren und Anwendungen effizient über verfügbare Verbindungen entsprechend ihren spezifischen Eigenschaften zu verteilen.</p>
      </div>

      <h2 id="anwendungen">Empfohlene Anwendungen für Yachten</h2>

      <h3>🌐 Maritime Mobile Konnektivität</h3>
      <p>SpeedFusion ermöglicht die Kombination mehrerer in maritimen Umgebungen verfügbarer Internetverbindungen: Satellit, Mobilfunk und Marina-WiFi, wodurch eine einzige, robuste Verbindung entsteht.</p>

      <h3>📹 Live-HD-Streaming</h3>
      <p>Die Bandbreitenaggregation auf Paketebene ermöglicht ununterbrochenes HD-Video-Streaming, ideal für Gästeunterhaltung und Unternehmenskommunikation.</p>

      <h3>🛡️ Hot-Failover</h3>
      <p>Erhält die Sitzungspersistenz während WAN-Trennungen aufrecht und gewährleistet nahtlose Übergänge ohne wahrnehmbare Unterbrechungen für Benutzer.</p>

      <h3>📡 Kommunikation in abgelegenen Gebieten</h3>
      <p>Besonders nützlich an Standorten mit begrenzter Konnektivität, wo die Kombination mehrerer Verbindungen konsistente Konnektivität bietet.</p>

      <h2>Wichtige technische Merkmale</h2>

      <h3>Bandbreitenaggregation</h3>
      <p>Kombiniert Daten auf Paketebene und ermöglicht die Addition der Geschwindigkeit mehrerer Verbindungen, um schnellere Verbindungen zwischen Standorten zu schaffen.</p>

      <h3>Paketverlust-Minderung</h3>
      <p>Die "Smoothing"-Technologie füllt Konnektivitätslücken durch das Senden redundanter Pakete über mehrere Netzwerkkanäle.</p>

      <h3>Erweiterte Verkehrsverwaltung</h3>
      <p>Granulare Kontrolle über verschiedene Verkehrstypen mit der Fähigkeit, kritischen Netzwerkverkehr zu priorisieren und Leistung zu verwalten.</p>

      <h3>Getrennte Verschlüsselung</h3>
      <p>Jede WAN-Verbindung wird separat verschlüsselt und bietet erhöhte Sicherheit in Multi-Provider-Umgebungen.</p>

      <h2 id="fazit">Fazit</h2>
      <p>Bonding-Technologien stellen die natürliche Entwicklung der maritimen Konnektivität dar und verwandeln mehrere unabhängige Verbindungen in eine robuste und vorhersagbare Netzwerkinfrastruktur. Peplink bietet mit seiner SpeedFusion-Technologie und spezifischen Erfahrung in maritimen Umgebungen Lösungen, die nicht nur Bandbreite aggregieren, sondern eine grundlegend überlegene Konnektivitätserfahrung schaffen.</p>

      <p>Investitionen in Bonding-Technologien sollten nicht nur in Bezug auf Konnektivitätsverbesserung bewertet werden, sondern als fundamentale Aufrüstung der technologischen Infrastruktur der Yacht, die neue operative Fähigkeiten und Wettbewerbspositionierung im Luxusyacht-Markt ermöglicht.</p>

      <p><strong>Für moderne Yachten, die Konnektivitätserfahrungen vergleichbar mit terrestrischen Installationen bieten möchten, ist Bonding keine optionale Verbesserung, sondern eine fundamentale Anforderung der technologischen Infrastruktur.</strong></p>

      <h2 id="referenzen">Referenzen und Bibliographie</h2>
      <ul>
        <li>Peplink Technologies - SpeedFusion Dokumentation</li>
        <li>Maritime Konnektivitätslösungen - Industrie Best Practices</li>
        <li>Satellitenkommunikation für Yachten - Technische Richtlinien</li>
      </ul>
    `,seo:{metaTitle:"Bonding-Technologien für Yachten: Redundante Konnektivität | Netnautica",metaDescription:"Entdecken Sie, wie Peplink SpeedFusion Bonding-Technologien die Konnektivität in Luxusyachten revolutionieren. Vollständiger technischer Leitfaden.",keywords:["yacht bonding","peplink","speedfusion","maritime konnektivität","redundanz","schiff internet"]}}},author:"Netnautica Team",publishedAt:"2025-01-15",readingTime:12,category:"Conectividad Avanzada",tags:["bonding","peplink","speedfusion","conectividad","yates","tecnología","starlink","4g","5g","redundancia"],featuredImage:{src:"/images/blog/yate.jpg",alt:"Yate de lujo con tecnologías de conectividad avanzada",width:1200,height:630},seo:{metaTitle:"Bonding Technologies for Yachts: Redundant Connectivity | Netnautica",metaDescription:"Discover how Peplink SpeedFusion bonding technologies revolutionize connectivity in luxury yachts. Complete technical guide.",keywords:["yacht bonding","peplink","speedfusion","maritime connectivity","redundancy","ship internet"]}},zi={id:"starlink-yates-conectividad-satelital",category:"connectivity",publishedAt:"2025-02-20",author:"Netnautica Team",readingTime:3,featured:!0,slug:{es:"starlink-yates-conectividad-satelital",en:"starlink-yacht-satellite-connectivity",fr:"starlink-yachts-connectivite-satellitaire",de:"starlink-yacht-satelliten-konnektivitat"},locales:{es:{title:"Starlink para Yates: Revolución en Conectividad Satelital Marina",excerpt:"Descubre cómo Starlink está transformando la vida a bordo con internet de alta velocidad, baja latencia y cobertura global en cualquier rincón del océano.",content:`
  <div class="blog-hero">
    <img src="/images/blog/starlink-yacht.jpg" alt="Yate equipado con antena satelital Starlink para conectividad global" class="featured-image" loading="lazy" />
  </div>

  <div class="table-of-contents">
    <h2>📋 Índice de Contenidos</h2>
    <div class="toc-grid">
      <div class="toc-item">
        <span class="toc-number">01</span>
        <a href="#que-es-starlink">🛰️ Qué es Starlink</a>
      </div>
      <div class="toc-item">
        <span class="toc-number">02</span>
        <a href="#ventajas-maritimas">⚓ Ventajas para Yates</a>
      </div>
      <div class="toc-item">
        <span class="toc-number">03</span>
        <a href="#instalacion">🔧 Instalación en Yates</a>
      </div>
    </div>
  </div>

  <section class="content-section">
    <h2 id="que-es-starlink" class="section-title">🛰️ Qué es Starlink</h2>
    
    <div class="intro-text">
      <p><strong>Starlink es el sistema satelital de órbita baja (LEO) de SpaceX</strong> que está marcando un antes y un después en la conectividad marítima. Gracias a miles de pequeños satélites que orbitan la Tierra, ofrece <em>internet rápido y estable incluso en alta mar</em>, eliminando las limitaciones de los sistemas satelitales tradicionales.</p>
    </div>
    
    <div class="highlight-box">
      <h4>💡 Innovación Clave</h4>
      <p>A diferencia de los satélites geoestacionarios, que presentan latencias muy altas, Starlink utiliza constelaciones en órbita baja que permiten conexiones con apenas <strong>20-40ms</strong> de latencia, frente a los <strong>600ms+</strong> habituales en otras tecnologías.</p>
    </div>
  </section>

  <section class="content-section">
    <h2 id="ventajas-maritimas" class="section-title">⚓ Ventajas para Yates</h2>
    
    <div class="advantage-grid">
      <div class="advantage-card">
        <h4>🚀 Alta Velocidad</h4>
        <p>Conexiones de hasta <strong>200 Mbps</strong>, ideales para streaming, videollamadas y teletrabajo desde cualquier lugar del océano.</p>
      </div>
      
      <div class="advantage-card">
        <h4>🌍 Cobertura Global</h4>
        <p>Disponible en la mayoría de rutas marítimas populares, con expansión continua hacia aguas internacionales.</p>
      </div>
      
      <div class="advantage-card">
        <h4>⚡ Baja Latencia</h4>
        <p>Perfecto para aplicaciones en tiempo real, desde videoconferencias hasta sistemas de navegación y seguridad a bordo.</p>
      </div>
    </div>
  </section>

  <section class="content-section">
    <h2 id="instalacion" class="section-title">🔧 Instalación en Yates</h2>
    
    <div class="intro-text">
      <p>La instalación de <strong>Starlink Maritime</strong> requiere experiencia y adaptaciones específicas al entorno marino:</p>
    </div>
    
    <div class="installation-steps">
      <div class="step">
        <h4>1. Antena Marina Resistente 🌊</h4>
        <p>Equipos diseñados para soportar condiciones extremas de viento, salinidad y humedad.</p>
      </div>
      
      <div class="step">
        <h4>2. Montaje Estabilizado ⚖️</h4>
        <p>Soportes que mantienen la orientación óptima incluso con el movimiento constante del yate.</p>
      </div>
      
      <div class="step">
        <h4>3. Alimentación Segura 🔋</h4>
        <p>Conexión a sistemas eléctricos de 12V/24V con protección contra sobretensiones.</p>
      </div>
    </div>
  </section>

  <p><strong>Starlink redefine la conectividad en alta mar, transformando el océano en una extensión natural del mundo digital. 🌐⚓</strong></p>
  `,seo:{metaTitle:"Starlink para Yates: Conectividad Satelital Marina | Netnautica",metaDescription:"Descubre cómo Starlink está revolucionando las comunicaciones marítimas con internet de alta velocidad, baja latencia y cobertura global para yates en cualquier rincón del océano.",keywords:["starlink yates","internet satelital","conectividad marina","starlink maritime","comunicaciones náuticas"]}},en:{title:"Starlink for Yachts: A Revolution in Marine Satellite Connectivity",excerpt:"Discover how Starlink is transforming life at sea with high-speed internet, low latency, and global coverage for yachts anywhere in the ocean.",content:`
  <div class="blog-hero">
    <img src="/images/blog/starlink-yacht.jpg" alt="Yacht equipped with Starlink satellite antenna for global connectivity" class="featured-image" loading="lazy" />
  </div>

  <div class="table-of-contents">
    <h2>📋 Table of Contents</h2>
    <div class="toc-grid">
      <div class="toc-item">
        <span class="toc-number">01</span>
        <a href="#what-is-starlink">🛰️ What is Starlink</a>
      </div>
      <div class="toc-item">
        <span class="toc-number">02</span>
        <a href="#yacht-benefits">⚓ Benefits for Yachts</a>
      </div>
      <div class="toc-item">
        <span class="toc-number">03</span>
        <a href="#installation">🔧 Yacht Installation</a>
      </div>
    </div>
  </div>

  <section class="content-section">
    <h2 id="what-is-starlink" class="section-title">🛰️ What is Starlink</h2>
    
    <div class="intro-text">
      <p><strong>Starlink is SpaceX’s low Earth orbit (LEO) satellite system</strong> that is revolutionizing maritime connectivity. With thousands of small satellites orbiting the planet, it delivers <em>fast, stable internet even offshore</em>, overcoming the limitations of traditional satellite systems.</p>
    </div>
    
    <div class="highlight-box">
      <h4>💡 Key Innovation</h4>
      <p>Unlike geostationary satellites, which suffer from high latency, Starlink uses low-orbit constellations to achieve <strong>20-40ms</strong> latency compared to the usual <strong>600ms+</strong> of older technologies.</p>
    </div>
  </section>

  <section class="content-section">
    <h2 id="yacht-benefits" class="section-title">⚓ Benefits for Yachts</h2>
    
    <div class="advantage-grid">
      <div class="advantage-card">
        <h4>🚀 High Speed</h4>
        <p>Download speeds of up to <strong>200 Mbps</strong>, enabling streaming, video calls, and remote work anywhere at sea.</p>
      </div>
      
      <div class="advantage-card">
        <h4>🌍 Global Coverage</h4>
        <p>Available on most popular maritime routes, with ongoing expansion to international waters.</p>
      </div>
      
      <div class="advantage-card">
        <h4>⚡ Low Latency</h4>
        <p>Ideal for real-time applications, from video conferencing to onboard navigation and safety systems.</p>
      </div>
    </div>
  </section>

  <section class="content-section">
    <h2 id="installation" class="section-title">🔧 Yacht Installation</h2>
    
    <div class="intro-text">
      <p>Installing <strong>Starlink Maritime</strong> requires expertise and adaptations for the marine environment:</p>
    </div>
    
    <div class="installation-steps">
      <div class="step">
        <h4>1. Rugged Marine Antenna 🌊</h4>
        <p>Designed to withstand extreme wind, salinity, and humidity conditions.</p>
      </div>
      
      <div class="step">
        <h4>2. Stabilized Mount ⚖️</h4>
        <p>Supports that maintain optimal orientation even with constant yacht movement.</p>
      </div>
      
      <div class="step">
        <h4>3. Secure Power Supply 🔋</h4>
        <p>Connection to 12V/24V systems with surge protection adapted to marine environments.</p>
      </div>
    </div>
  </section>

  <p><strong>Starlink is redefining expectations at sea, turning the ocean into a natural extension of our digital world. 🌐⚓</strong></p>
  `,seo:{metaTitle:"Starlink for Yachts: Marine Satellite Connectivity | Netnautica",metaDescription:"Discover how Starlink is revolutionizing maritime communications with high-speed internet, low latency, and global coverage for yachts anywhere in the ocean.",keywords:["starlink yachts","satellite internet","marine connectivity","starlink maritime","nautical communications"]}},fr:{title:"Starlink pour Yachts : Une Révolution dans la Connectivité Satellite Marine",excerpt:"Découvrez comment Starlink transforme la vie à bord grâce à un internet haut débit, une faible latence et une couverture mondiale pour les yachts partout en mer.",content:`
  <div class="blog-hero">
    <img src="/images/blog/starlink-yacht.jpg" alt="Yacht équipé d'une antenne satellite Starlink pour connectivité globale" class="featured-image" loading="lazy" />
  </div>

  <div class="table-of-contents">
    <h2>📋 Table des Matières</h2>
    <div class="toc-grid">
      <div class="toc-item">
        <span class="toc-number">01</span>
        <a href="#quest-starlink">🛰️ Qu’est-ce que Starlink</a>
      </div>
      <div class="toc-item">
        <span class="toc-number">02</span>
        <a href="#avantages-yachts">⚓ Avantages pour Yachts</a>
      </div>
      <div class="toc-item">
        <span class="toc-number">03</span>
        <a href="#installation">🔧 Installation sur Yachts</a>
      </div>
    </div>
  </div>

  <section class="content-section">
    <h2 id="quest-starlink" class="section-title">🛰️ Qu’est-ce que Starlink</h2>
    
    <div class="intro-text">
      <p><strong>Starlink est le système satellitaire en orbite basse (LEO) développé par SpaceX</strong>, qui révolutionne la connectivité maritime. Grâce à des milliers de petits satellites en orbite terrestre, il fournit un <em>internet rapide et stable même en haute mer</em>, surmontant les limites des systèmes traditionnels.</p>
    </div>
    
    <div class="highlight-box">
      <h4>💡 Innovation Clé</h4>
      <p>Contrairement aux satellites géostationnaires, qui présentent une latence élevée, Starlink utilise des constellations en orbite basse permettant une latence de seulement <strong>20-40ms</strong>, contre <strong>600ms+</strong> avec les technologies classiques.</p>
    </div>
  </section>

  <section class="content-section">
    <h2 id="avantages-yachts" class="section-title">⚓ Avantages pour Yachts</h2>
    
    <div class="advantage-grid">
      <div class="advantage-card">
        <h4>🚀 Haut Débit</h4>
        <p>Vitesses de téléchargement allant jusqu’à <strong>200 Mbps</strong>, idéales pour le streaming, les appels vidéo et le télétravail en mer.</p>
      </div>
      
      <div class="advantage-card">
        <h4>🌍 Couverture Mondiale</h4>
        <p>Disponible sur la plupart des routes maritimes populaires, avec une expansion continue vers les eaux internationales.</p>
      </div>
      
      <div class="advantage-card">
        <h4>⚡ Faible Latence</h4>
        <p>Parfait pour les applications en temps réel, des visioconférences aux systèmes de navigation et de sécurité à bord.</p>
      </div>
    </div>
  </section>

  <section class="content-section">
    <h2 id="installation" class="section-title">🔧 Installation sur Yachts</h2>
    
    <div class="intro-text">
      <p>L’installation de <strong>Starlink Maritime</strong> nécessite expertise et adaptations spécifiques à l’environnement marin :</p>
    </div>
    
    <div class="installation-steps">
      <div class="step">
        <h4>1. Antenne Marine Résistante 🌊</h4>
        <p>Conçue pour résister aux conditions extrêmes de vent, de salinité et d’humidité.</p>
      </div>
      
      <div class="step">
        <h4>2. Support Stabilisé ⚖️</h4>
        <p>Maintient l’orientation optimale même avec le mouvement constant du yacht.</p>
      </div>
      
      <div class="step">
        <h4>3. Alimentation Sécurisée 🔋</h4>
        <p>Connexion aux systèmes électriques 12V/24V avec protection contre les surtensions marines.</p>
      </div>
    </div>
  </section>

  <p><strong>Starlink redéfinit la connectivité en mer, transformant l’océan en une extension naturelle du monde numérique. 🌐⚓</strong></p>
  `,seo:{metaTitle:"Starlink pour Yachts : Connectivité Satellite Marine | Netnautica",metaDescription:"Découvrez comment Starlink révolutionne les communications maritimes avec un internet haut débit, une faible latence et une couverture mondiale pour yachts en haute mer.",keywords:["starlink yachts","internet satellite","connectivité marine","starlink maritime","communications nautiques"]}},de:{title:"Starlink für Yachten: Eine Revolution in der maritimen Satellitenkonnektivität",excerpt:"Entdecken Sie, wie Starlink das Leben an Bord verändert – mit Hochgeschwindigkeitsinternet, niedriger Latenz und globaler Abdeckung für Yachten überall auf dem Ozean.",content:`
  <div class="blog-hero">
    <img src="/images/blog/starlink-yacht.jpg" alt="Yacht mit Starlink-Satellitenantenne für globale Konnektivität" class="featured-image" loading="lazy" />
  </div>

  <div class="table-of-contents">
    <h2>📋 Inhaltsverzeichnis</h2>
    <div class="toc-grid">
      <div class="toc-item">
        <span class="toc-number">01</span>
        <a href="#was-ist-starlink">🛰️ Was ist Starlink</a>
      </div>
      <div class="toc-item">
        <span class="toc-number">02</span>
        <a href="#yacht-vorteile">⚓ Vorteile für Yachten</a>
      </div>
      <div class="toc-item">
        <span class="toc-number">03</span>
        <a href="#installation">🔧 Installation auf Yachten</a>
      </div>
    </div>
  </div>

  <section class="content-section">
    <h2 id="was-ist-starlink" class="section-title">🛰️ Was ist Starlink</h2>
    
    <div class="intro-text">
      <p><strong>Starlink ist das Satellitensystem im niedrigen Erdorbit (LEO) von SpaceX</strong>, das die maritime Konnektivität revolutioniert. Mit Tausenden kleiner Satelliten, die die Erde umkreisen, liefert es <em>schnelles, stabiles Internet selbst auf hoher See</em> und überwindet die Grenzen herkömmlicher Satellitensysteme.</p>
    </div>
    
    <div class="highlight-box">
      <h4>💡 Zentrale Innovation</h4>
      <p>Im Gegensatz zu geostationären Satelliten, die unter hoher Latenz leiden, nutzt Starlink Konstellationen im niedrigen Orbit und erreicht so <strong>20–40 ms</strong> Latenz im Vergleich zu den üblichen <strong>600ms+</strong> älterer Technologien.</p>
    </div>
  </section>

  <section class="content-section">
    <h2 id="yacht-vorteile" class="section-title">⚓ Vorteile für Yachten</h2>
    
    <div class="advantage-grid">
      <div class="advantage-card">
        <h4>🚀 Hohe Geschwindigkeit</h4>
        <p>Downloadraten von bis zu <strong>200 Mbps</strong>, ideal für Streaming, Videoanrufe und Remote-Arbeit auf See.</p>
      </div>
      
      <div class="advantage-card">
        <h4>🌍 Globale Abdeckung</h4>
        <p>Verfügbar auf den meisten beliebten Schifffahrtsrouten mit kontinuierlicher Erweiterung auf internationale Gewässer.</p>
      </div>
      
      <div class="advantage-card">
        <h4>⚡ Niedrige Latenz</h4>
        <p>Perfekt für Echtzeitanwendungen – von Videokonferenzen bis hin zu Navigations- und Sicherheitssystemen an Bord.</p>
      </div>
    </div>
  </section>

  <section class="content-section">
    <h2 id="installation" class="section-title">🔧 Installation auf Yachten</h2>
    
    <div class="intro-text">
      <p>Die Installation von <strong>Starlink Maritime</strong> erfordert Fachwissen und spezielle Anpassungen an die maritime Umgebung:</p>
    </div>
    
    <div class="installation-steps">
      <div class="step">
        <h4>1. Robuste Marineantenne 🌊</h4>
        <p>Konstruktion zum Widerstehen extremer Bedingungen von Wind, Salz und Feuchtigkeit.</p>
      </div>
      
      <div class="step">
        <h4>2. Stabilisierte Halterung ⚖️</h4>
        <p>Halterungen, die die optimale Ausrichtung auch bei ständiger Bewegung der Yacht beibehalten.</p>
      </div>
      
      <div class="step">
        <h4>3. Sichere Stromversorgung 🔋</h4>
        <p>Anschluss an 12V/24V-Systeme mit Überspannungsschutz für maritime Umgebungen.</p>
      </div>
    </div>
  </section>

  <p><strong>Starlink definiert die Konnektivität auf See neu und macht den Ozean zu einer natürlichen Erweiterung unserer digitalen Welt. 🌐⚓</strong></p>
  `,seo:{metaTitle:"Starlink für Yachten: Maritime Satellitenkonnektivität | Netnautica",metaDescription:"Entdecken Sie, wie Starlink die maritime Kommunikation revolutioniert – mit Hochgeschwindigkeitsinternet, niedriger Latenz und globaler Abdeckung für Yachten auf hoher See.",keywords:["starlink yachten","satelliteninternet","marine konnektivität","starlink maritime","nautische kommunikation"]}}},tags:["starlink","conectividad","satelital","yates","internet","navegación","comunicaciones"],featuredImage:{src:"/images/blog/starlink-yacht.jpg",alt:"Yate equipado con antena satelital Starlink",width:1200,height:630},seo:{metaTitle:"Starlink for Yachts: Satellite Connectivity at Sea | Netnautica",metaDescription:"Discover how Starlink revolutionizes maritime connectivity for luxury yachts. Complete guide to satellite internet at sea.",keywords:["starlink yachts","satellite internet","maritime connectivity","yacht internet","sea connectivity"]}},Ii={id:"ciberseguridad-maritima-yates",category:"security",publishDate:"2024-01-10",author:"Netnautica Security Team",readTime:"10 min",featured:!1,slug:{es:"ciberseguridad-maritima-yates",en:"maritime-cybersecurity-yachts",fr:"cybersecurite-maritime-yachts",de:"maritime-cybersicherheit-yachten"},locales:{es:{title:"Ciberseguridad Marítima: Protegiendo tu Yate en la Era Digital",excerpt:"En un mundo hiperconectado, los yates modernos enfrentan nuevas amenazas cibernéticas. Descubre cómo proteger tu embarcación y datos.",content:`
      <div class="blog-hero">
        <img src="/images/blog/cybersecurity-yacht.jpg" alt="Yate con sistemas de seguridad digital integrada para navegación segura" class="featured-image" loading="lazy" />
      </div>

      <div class="table-of-contents">
        <h2>📋 Índice de Contenidos</h2>
        <div class="toc-grid">
          <div class="toc-item">
            <span class="toc-number">01</span>
            <a href="#amenazas-digitales">🔐 Amenazas Digitales Marítimas</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">02</span>
            <a href="#vectores-ataque">⚠️ Vectores de Ataque</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">03</span>
            <a href="#medidas-proteccion">🛡️ Medidas de Protección</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">04</span>
            <a href="#mejores-practicas">✅ Mejores Prácticas</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">05</span>
            <a href="#conclusion">🎯 Conclusión</a>
          </div>
        </div>
      </div>

      <div class="content-divider"></div>

      <section class="content-section">
        <h2 id="amenazas-digitales" class="section-title">🔐 Amenazas Digitales Marítimas</h2>
        
        <div class="intro-text">
          <p>Los <strong>yates modernos</strong> son verdaderos centros tecnológicos flotantes, equipados con sistemas de navegación avanzados, comunicaciones satelitales, entretenimiento digital y automatización del hogar.</p>
          
          <p>Esta conectividad, aunque esencial para la experiencia moderna de navegación, también abre puertas a <strong>nuevas vulnerabilidades cibernéticas</strong> que requieren atención especializada.</p>
        </div>

        <div class="highlight-box">
          <h4>⚠️ Dato Alarmante</h4>
          <p>El <strong>60% de los yates de lujo</strong> carecen de medidas básicas de ciberseguridad, según estudios recientes del sector náutico.</p>
        </div>

        <p>Para entender completamente el panorama, debemos analizar los <strong><em>ÍNDICE 02: VECTORES DE ATAQUE</em></strong> más comunes.</p>
      </section>

      <div class="section-divider"></div>

      <section class="content-section">
        <h2 id="vectores-ataque" class="section-title">⚠️ Vectores de Ataque</h2>

        <div class="advantages-grid">
          <div class="advantage-card">
            <div class="advantage-icon">📶</div>
            <h3 class="advantage-title">Redes WiFi Inseguras</h3>
            <p class="advantage-description">Conexiones WiFi abiertas o mal configuradas que permiten acceso no autorizado a los sistemas del yate.</p>
          </div>

          <div class="advantage-card">
            <div class="advantage-icon">🎣</div>
            <h3 class="advantage-title">Phishing y Ingeniería Social</h3>
            <p class="advantage-description">Ataques dirigidos a la tripulación y pasajeros para obtener credenciales y acceso a sistemas críticos.</p>
          </div>

          <div class="advantage-card">
            <div class="advantage-icon">🔌</div>
            <h3 class="advantage-title">Dispositivos IoT Vulnerables</h3>
            <p class="advantage-description">Sensores, cámaras y dispositivos inteligentes sin actualizaciones de seguridad regulares.</p>
          </div>

          <div class="advantage-card">
            <div class="advantage-icon">📱</div>
            <h3 class="advantage-title">Aplicaciones No Verificadas</h3>
            <p class="advantage-description">Software de terceros sin validación de seguridad que puede contener malware.</p>
          </div>
        </div>

        <p>Ante estas amenazas, es crucial implementar <strong><em>ÍNDICE 03: MEDIDAS DE PROTECCIÓN</em></strong> efectivas.</p>
      </section>

      <div class="section-divider"></div>

      <section class="content-section technical-features">
        <h2 id="medidas-proteccion" class="section-title">🛡️ Medidas de Protección</h2>

        <div class="features-container">
          <div class="feature-block">
            <h3 class="feature-title">🔒 Firewall Náutico</h3>
            <p class="feature-description">Implementación de firewalls especializados que filtran tráfico malicioso y protegen sistemas críticos de navegación.</p>
          </div>

          <div class="feature-block">
            <h3 class="feature-title">🔐 VPN Segura</h3>
            <p class="feature-description">Conexión VPN empresarial para todas las comunicaciones, asegurando privacidad y encriptación de datos.</p>
          </div>

          <div class="feature-block">
            <h3 class="feature-title">📊 Monitoreo 24/7</h3>
            <p class="feature-description">Sistemas de detección de intrusiones que alertan inmediatamente sobre actividad sospechosa.</p>
          </div>

          <div class="feature-block">
            <h3 class="feature-title">🔄 Actualizaciones Automáticas</h3>
            <p class="feature-description">Gestión centralizada de parches y actualizaciones de seguridad para todos los dispositivos conectados.</p>
          </div>
        </div>

        <p>Estas medidas técnicas deben complementarse con <strong><em>ÍNDICE 04: MEJORES PRÁCTICAS</em></strong> operacionales.</p>
      </section>

      <div class="section-divider"></div>

      <section class="content-section applications-section">
        <h2 id="mejores-practicas" class="section-title">✅ Mejores Prácticas</h2>

        <div class="applications-grid">
          <div class="application-item">
            <div class="app-header">
              <span class="app-icon">👥</span>
              <h3 class="app-title">Formación de Tripulación</h3>
            </div>
            <p class="app-description">Capacitación regular en <strong>concienciación de ciberseguridad</strong> para toda la tripulación y usuarios frecuentes.</p>
          </div>

          <div class="application-item">
            <div class="app-header">
              <span class="app-icon">🔑</span>
              <h3 class="app-title">Gestión de Contraseñas</h3>
            </div>
            <p class="app-description">Implementación de <strong>gestores de contraseñas</strong> y autenticación de dos factores en todos los sistemas.</p>
          </div>

          <div class="application-item">
            <div class="app-header">
              <span class="app-icon">💾</span>
              <h3 class="app-title">Respaldos Seguros</h3>
            </div>
            <p class="app-description">Copias de seguridad automáticas y cifradas de datos críticos, almacenadas tanto local como remotamente.</p>
          </div>

          <div class="application-item">
            <div class="app-header">
              <span class="app-icon">📋</span>
              <h3 class="app-title">Protocolo de Incidentes</h3>
            </div>
            <p class="app-description">Plan de respuesta ante incidentes de seguridad con <strong>procedimientos claros</strong> y contactos de emergencia.</p>
          </div>
        </div>

        <p>La implementación de estas prácticas nos lleva a las reflexiones finales en <strong><em>ÍNDICE 05: CONCLUSIÓN</em></strong>.</p>
      </section>

      <div class="section-divider"></div>

      <section class="content-section conclusion-section">
        <h2 id="conclusion" class="section-title">🎯 Conclusión</h2>
        
        <div class="conclusion-content">
          <div class="key-insight">
            <p>La <strong>ciberseguridad marítima</strong> no es un lujo opcional, sino una necesidad crítica en la era digital. Los yates modernos requieren el mismo nivel de protección que las empresas terrestres.</p>
          </div>

          <div class="value-proposition">
            <p>Una <strong>estrategia de seguridad integral</strong> combina tecnología avanzada, mejores prácticas operacionales y formación continua del equipo humano.</p>
          </div>

          <div class="final-statement">
            <div class="quote-box">
              <p><strong>🔐 Reflexión Final:</strong> En el mar de datos digitales, la ciberseguridad es tu <strong>brújula más confiable</strong> para navegar seguro hacia el futuro.</p>
            </div>
          </div>
        </div>
      </section>

      <div class="section-divider"></div>
      `,seo:{metaTitle:"Ciberseguridad Marítima para Yates: Protección Digital | Netnautica",metaDescription:"Protege tu yate de amenazas cibernéticas con nuestras estrategias de ciberseguridad marítima. Guía completa de seguridad digital náutica.",keywords:["ciberseguridad marítima","seguridad yates","protección digital","cybersecurity náutico","seguridad embarcaciones"]}},en:{title:"Maritime Cybersecurity: Protecting Your Yacht in the Digital Age",excerpt:"In a hyperconnected world, modern yachts face new cyber threats. Discover how to protect your vessel and data.",content:`
      <div class="blog-hero">
        <img src="/images/blog/cybersecurity-yacht.jpg" alt="Yacht with integrated digital security systems for safe navigation" class="featured-image" loading="lazy" />
      </div>

      <div class="table-of-contents">
        <h2>📋 Table of Contents</h2>
        <div class="toc-grid">
          <div class="toc-item">
            <span class="toc-number">01</span>
            <a href="#maritime-threats">🔐 Maritime Digital Threats</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">02</span>
            <a href="#attack-vectors">⚠️ Attack Vectors</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">03</span>
            <a href="#protection-measures">🛡️ Protection Measures</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">04</span>
            <a href="#best-practices">✅ Best Practices</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">05</span>
            <a href="#conclusion">🎯 Conclusion</a>
          </div>
        </div>
      </div>

      <div class="content-divider"></div>

      <section class="content-section">
        <h2 id="maritime-threats" class="section-title">🔐 Maritime Digital Threats</h2>
        
        <div class="intro-text">
          <p><strong>Modern yachts</strong> are floating technology hubs, equipped with advanced navigation systems, satellite communications, digital entertainment, and smart-boat automation.</p>
          
          <p>While essential to the onboard experience, this connectivity also opens doors to <strong>new cyber vulnerabilities</strong> that require specialized attention.</p>
        </div>

        <div class="highlight-box">
          <h4>⚠️ Alarming Insight</h4>
          <p><strong>60% of luxury yachts</strong> lack basic cybersecurity measures, according to recent industry studies.</p>
        </div>

        <p>To fully grasp the landscape, let’s examine the most common <strong><em>INDEX 02: ATTACK VECTORS</em></strong>.</p>
      </section>

      <div class="section-divider"></div>

      <section class="content-section">
        <h2 id="attack-vectors" class="section-title">⚠️ Attack Vectors</h2>

        <div class="advantages-grid">
          <div class="advantage-card">
            <div class="advantage-icon">📶</div>
            <h3 class="advantage-title">Insecure Wi-Fi Networks</h3>
            <p class="advantage-description">Open or misconfigured Wi-Fi that allows unauthorized access to yacht systems.</p>
          </div>

          <div class="advantage-card">
            <div class="advantage-icon">🎣</div>
            <h3 class="advantage-title">Phishing & Social Engineering</h3>
            <p class="advantage-description">Targeted attacks on crew and guests to obtain credentials and access critical systems.</p>
          </div>

          <div class="advantage-card">
            <div class="advantage-icon">🔌</div>
            <h3 class="advantage-title">Vulnerable IoT Devices</h3>
            <p class="advantage-description">Sensors, cameras, and smart devices without regular security updates.</p>
          </div>

          <div class="advantage-card">
            <div class="advantage-icon">📱</div>
            <h3 class="advantage-title">Unvetted Applications</h3>
            <p class="advantage-description">Third-party software without proper security validation that may contain malware.</p>
          </div>
        </div>

        <p>Given these threats, it’s crucial to implement effective <strong><em>INDEX 03: PROTECTION MEASURES</em></strong>.</p>
      </section>

      <div class="section-divider"></div>

      <section class="content-section technical-features">
        <h2 id="protection-measures" class="section-title">🛡️ Protection Measures</h2>

        <div class="features-container">
          <div class="feature-block">
            <h3 class="feature-title">🔒 Marine-Grade Firewall</h3>
            <p class="feature-description">Specialized firewalls that filter malicious traffic and protect critical navigation systems.</p>
          </div>

          <div class="feature-block">
            <h3 class="feature-title">🔐 Secure VPN</h3>
            <p class="feature-description">Enterprise VPN for all communications, ensuring privacy and data encryption.</p>
          </div>

          <div class="feature-block">
            <h3 class="feature-title">📊 24/7 Monitoring</h3>
            <p class="feature-description">Intrusion detection systems that immediately alert on suspicious activity.</p>
          </div>

          <div class="feature-block">
            <h3 class="feature-title">🔄 Automatic Updates</h3>
            <p class="feature-description">Centralized patch management and security updates across all connected devices.</p>
          </div>
        </div>

        <p>These technical controls must be complemented by operational <strong><em>INDEX 04: BEST PRACTICES</em></strong>.</p>
      </section>

      <div class="section-divider"></div>

      <section class="content-section applications-section">
        <h2 id="best-practices" class="section-title">✅ Best Practices</h2>

        <div class="applications-grid">
          <div class="application-item">
            <div class="app-header">
              <span class="app-icon">👥</span>
              <h3 class="app-title">Crew Training</h3>
            </div>
            <p class="app-description">Regular <strong>cyber awareness</strong> training for crew and frequent users.</p>
          </div>

          <div class="application-item">
            <div class="app-header">
              <span class="app-icon">🔑</span>
              <h3 class="app-title">Password Management</h3>
            </div>
            <p class="app-description">Adopt <strong>password managers</strong> and two-factor authentication across systems.</p>
          </div>

          <div class="application-item">
            <div class="app-header">
              <span class="app-icon">💾</span>
              <h3 class="app-title">Secure Backups</h3>
            </div>
            <p class="app-description">Automated, encrypted backups of critical data stored both locally and off-site.</p>
          </div>

          <div class="application-item">
            <div class="app-header">
              <span class="app-icon">📋</span>
              <h3 class="app-title">Incident Protocol</h3>
            </div>
            <p class="app-description">Security incident response plan with <strong>clear procedures</strong> and emergency contacts.</p>
          </div>
        </div>

        <p>Implementing these practices leads to the final insights in <strong><em>INDEX 05: CONCLUSION</em></strong>.</p>
      </section>

      <div class="section-divider"></div>

      <section class="content-section conclusion-section">
        <h2 id="conclusion" class="section-title">🎯 Conclusion</h2>
        
        <div class="conclusion-content">
          <div class="key-insight">
            <p><strong>Maritime cybersecurity</strong> is not a luxury but a critical necessity in the digital era. Modern yachts require enterprise-grade protection.</p>
          </div>

          <div class="value-proposition">
            <p>A <strong>holistic security strategy</strong> blends advanced technology, operational best practices, and continual human training.</p>
          </div>

          <div class="final-statement">
            <div class="quote-box">
              <p><strong>🔐 Final Thought:</strong> In the sea of digital data, cybersecurity is your most <strong>reliable compass</strong> to navigate safely into the future.</p>
            </div>
          </div>
        </div>
      </section>

      <div class="section-divider"></div>
      `,seo:{metaTitle:"Maritime Cybersecurity for Yachts: Digital Protection | Netnautica",metaDescription:"Protect your yacht from cyber threats with our maritime cybersecurity strategies. Complete guide to nautical digital security.",keywords:["maritime cybersecurity","yacht security","digital protection","nautical cybersecurity","vessel security"]}},fr:{title:"Cybersécurité Maritime : Protéger votre Yacht à l’Ère Numérique",excerpt:"Dans un monde hyperconnecté, les yachts modernes font face à de nouvelles menaces cybernétiques. Découvrez comment protéger votre navire et vos données.",content:`
      <div class="blog-hero">
        <img src="/images/blog/cybersecurity-yacht.jpg" alt="Yacht avec systèmes de sécurité numérique intégrés pour navigation sécurisée" class="featured-image" loading="lazy" />
      </div>

      <div class="table-of-contents">
        <h2>📋 Table des Matières</h2>
        <div class="toc-grid">
          <div class="toc-item">
            <span class="toc-number">01</span>
            <a href="#menaces-maritimes">🔐 Menaces Numériques Maritimes</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">02</span>
            <a href="#vecteurs-attaque">⚠️ Vecteurs d’Attaque</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">03</span>
            <a href="#mesures-protection">🛡️ Mesures de Protection</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">04</span>
            <a href="#bonnes-pratiques">✅ Bonnes Pratiques</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">05</span>
            <a href="#conclusion">🎯 Conclusion</a>
          </div>
        </div>
      </div>

      <div class="content-divider"></div>

      <section class="content-section">
        <h2 id="menaces-maritimes" class="section-title">🔐 Menaces Numériques Maritimes</h2>
        
        <div class="intro-text">
          <p>Les <strong>yachts modernes</strong> sont de véritables hubs technologiques flottants, équipés de systèmes de navigation avancés, de communications par satellite, de divertissement numérique et d’automatisation embarquée.</p>
          
          <p>Si cette connectivité est essentielle à l’expérience à bord, elle ouvre aussi la voie à <strong>de nouvelles vulnérabilités cyber</strong> nécessitant une attention spécialisée.</p>
        </div>

        <div class="highlight-box">
          <h4>⚠️ Constat Alarmant</h4>
          <p><strong>60 % des yachts de luxe</strong> n’intègrent pas de mesures de cybersécurité de base, selon des études récentes du secteur.</p>
        </div>

        <p>Pour comprendre pleinement l’écosystème des risques, examinons les <strong><em>INDEX 02 : VECTEURS D’ATTAQUE</em></strong> les plus courants.</p>
      </section>

      <div class="section-divider"></div>

      <section class="content-section">
        <h2 id="vecteurs-attaque" class="section-title">⚠️ Vecteurs d’Attaque</h2>

        <div class="advantages-grid">
          <div class="advantage-card">
            <div class="advantage-icon">📶</div>
            <h3 class="advantage-title">Réseaux Wi-Fi Non Sécurisés</h3>
            <p class="advantage-description">Wi-Fi ouvert ou mal configuré permettant un accès non autorisé aux systèmes du yacht.</p>
          </div>

          <div class="advantage-card">
            <div class="advantage-icon">🎣</div>
            <h3 class="advantage-title">Phishing & Ingénierie Sociale</h3>
            <p class="advantage-description">Attaques ciblant l’équipage et les invités pour obtenir des identifiants et accéder aux systèmes critiques.</p>
          </div>

          <div class="advantage-card">
            <div class="advantage-icon">🔌</div>
            <h3 class="advantage-title">Objets Connectés (IoT) Vulnérables</h3>
            <p class="advantage-description">Capteurs, caméras et équipements intelligents sans mises à jour de sécurité régulières.</p>
          </div>

          <div class="advantage-card">
            <div class="advantage-icon">📱</div>
            <h3 class="advantage-title">Applications Non Vérifiées</h3>
            <p class="advantage-description">Logiciels tiers sans validation de sécurité pouvant contenir des malwares.</p>
          </div>
        </div>

        <p>Face à ces menaces, il est crucial de mettre en œuvre des <strong><em>INDEX 03 : MESURES DE PROTECTION</em></strong> efficaces.</p>
      </section>

      <div class="section-divider"></div>

      <section class="content-section technical-features">
        <h2 id="mesures-protection" class="section-title">🛡️ Mesures de Protection</h2>

        <div class="features-container">
          <div class="feature-block">
            <h3 class="feature-title">🔒 Pare-feu Spécialisé</h3>
            <p class="feature-description">Pare-feux marinisés filtrant le trafic malveillant et protégeant les systèmes de navigation critiques.</p>
          </div>

          <div class="feature-block">
            <h3 class="feature-title">🔐 VPN Sécurisé</h3>
            <p class="feature-description">VPN d’entreprise pour toutes les communications, garantissant confidentialité et chiffrement des données.</p>
          </div>

          <div class="feature-block">
            <h3 class="feature-title">📊 Supervision 24/7</h3>
            <p class="feature-description">Systèmes de détection d’intrusion alertant immédiatement en cas d’activité suspecte.</p>
          </div>

          <div class="feature-block">
            <h3 class="feature-title">🔄 Mises à Jour Automatiques</h3>
            <p class="feature-description">Gestion centralisée des correctifs et mises à jour de sécurité pour tous les dispositifs connectés.</p>
          </div>
        </div>

        <p>Ces contrôles techniques doivent être complétés par des <strong><em>INDEX 04 : BONNES PRATIQUES</em></strong> opérationnelles.</p>
      </section>

      <div class="section-divider"></div>

      <section class="content-section applications-section">
        <h2 id="bonnes-pratiques" class="section-title">✅ Bonnes Pratiques</h2>

        <div class="applications-grid">
          <div class="application-item">
            <div class="app-header">
              <span class="app-icon">👥</span>
              <h3 class="app-title">Formation de l’Équipage</h3>
            </div>
            <p class="app-description">Sessions régulières de <strong>sensibilisation cyber</strong> pour l’équipage et les usagers fréquents.</p>
          </div>

          <div class="application-item">
            <div class="app-header">
              <span class="app-icon">🔑</span>
              <h3 class="app-title">Gestion des Mots de Passe</h3>
            </div>
            <p class="app-description">Adoption de <strong>gestionnaires de mots de passe</strong> et d’une authentification à deux facteurs sur l’ensemble des systèmes.</p>
          </div>

          <div class="application-item">
            <div class="app-header">
              <span class="app-icon">💾</span>
              <h3 class="app-title">Sauvegardes Sécurisées</h3>
            </div>
            <p class="app-description">Sauvegardes automatisées et chiffrées des données critiques, stockées localement et hors site.</p>
          </div>

          <div class="application-item">
            <div class="app-header">
              <span class="app-icon">📋</span>
              <h3 class="app-title">Protocole d’Incidents</h3>
            </div>
            <p class="app-description">Plan de réponse aux incidents avec des <strong>procédures claires</strong> et des contacts d’urgence.</p>
          </div>
        </div>

        <p>La mise en œuvre de ces pratiques nous mène aux réflexions finales dans <strong><em>INDEX 05 : CONCLUSION</em></strong>.</p>
      </section>

      <div class="section-divider"></div>

      <section class="content-section conclusion-section">
        <h2 id="conclusion" class="section-title">🎯 Conclusion</h2>
        
        <div class="conclusion-content">
          <div class="key-insight">
            <p>La <strong>cybersécurité maritime</strong> n’est pas un luxe, mais une nécessité critique à l’ère numérique. Les yachts modernes exigent une protection de niveau entreprise.</p>
          </div>

          <div class="value-proposition">
            <p>Une <strong>stratégie de sécurité globale</strong> allie technologies avancées, bonnes pratiques opérationnelles et formation continue des équipes.</p>
          </div>

          <div class="final-statement">
            <div class="quote-box">
              <p><strong>🔐 Pensée Finale :</strong> Dans l’océan des données numériques, la cybersécurité est votre <strong>boussole la plus fiable</strong> pour naviguer sereinement vers l’avenir.</p>
            </div>
          </div>
        </div>
      </section>

      <div class="section-divider"></div>
      `,seo:{metaTitle:"Cybersécurité Maritime pour Yachts : Protection Numérique | Netnautica",metaDescription:"Protégez votre yacht contre les menaces cybernétiques grâce à nos stratégies de cybersécurité maritime. Guide complet de sécurité numérique nautique.",keywords:["cybersécurité maritime","sécurité yachts","protection numérique","cybersécurité nautique","sécurité navires"]}},de:{title:"Maritime Cybersicherheit: Schutz Ihrer Yacht im Digitalen Zeitalter",excerpt:"In einer hypervernetzten Welt stehen moderne Yachten vor neuen Cyber-Bedrohungen. Entdecken Sie, wie Sie Ihr Schiff und Ihre Daten schützen.",content:`
      <div class="blog-hero">
        <img src="/images/blog/cybersecurity-yacht.jpg" alt="Yacht mit integrierten digitalen Sicherheitssystemen für sichere Navigation" class="featured-image" loading="lazy" />
      </div>

      <div class="table-of-contents">
        <h2>📋 Inhaltsverzeichnis</h2>
        <div class="toc-grid">
          <div class="toc-item">
            <span class="toc-number">01</span>
            <a href="#maritime-bedrohungen">🔐 Maritime Digitale Bedrohungen</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">02</span>
            <a href="#angriffsvektoren">⚠️ Angriffsvektoren</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">03</span>
            <a href="#schutzmassnahmen">🛡️ Schutzmaßnahmen</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">04</span>
            <a href="#best-practices">✅ Best Practices</a>
          </div>
          <div class="toc-item">
            <span class="toc-number">05</span>
            <a href="#fazit">🎯 Fazit</a>
          </div>
        </div>
      </div>

      <div class="content-divider"></div>

      <section class="content-section">
        <h2 id="maritime-bedrohungen" class="section-title">🔐 Maritime Digitale Bedrohungen</h2>
        
        <div class="intro-text">
          <p><strong>Moderne Yachten</strong> sind schwimmende Technologiezentren – mit hochentwickelter Navigation, Satellitenkommunikation, digitalem Entertainment und Smart-Boat-Automatisierung.</p>
          
          <p>Diese Konnektivität ist zwar essenziell an Bord, öffnet jedoch zugleich die Tür zu <strong>neuen Cyber-Schwachstellen</strong>, die besondere Aufmerksamkeit erfordern.</p>
        </div>

        <div class="highlight-box">
          <h4>⚠️ Alarmierende Zahl</h4>
          <p><strong>60 % der Luxusyachten</strong> verfügen laut aktuellen Branchenstudien nicht über grundlegende Cybersicherheitsmaßnahmen.</p>
        </div>

        <p>Um das Risiko-Panorama vollständig zu verstehen, betrachten wir die häufigsten <strong><em>INDEX 02: ANGRIFFSVEKTOREN</em></strong>.</p>
      </section>

      <div class="section-divider"></div>

      <section class="content-section">
        <h2 id="angriffsvektoren" class="section-title">⚠️ Angriffsvektoren</h2>

        <div class="advantages-grid">
          <div class="advantage-card">
            <div class="advantage-icon">📶</div>
            <h3 class="advantage-title">Unsichere Wi-Fi-Netze</h3>
            <p class="advantage-description">Offene oder falsch konfigurierte Wi-Fi-Zugänge erlauben unbefugten Zugriff auf Yacht-Systeme.</p>
          </div>

          <div class="advantage-card">
            <div class="advantage-icon">🎣</div>
            <h3 class="advantage-title">Phishing & Social Engineering</h3>
            <p class="advantage-description">Gezielte Angriffe auf Crew und Gäste, um Zugangsdaten zu erlangen und kritische Systeme zu kompromittieren.</p>
          </div>

          <div class="advantage-card">
            <div class="advantage-icon">🔌</div>
            <h3 class="advantage-title">Verwundbare IoT-Geräte</h3>
            <p class="advantage-description">Sensoren, Kameras und smarte Geräte ohne regelmäßige Sicherheitsupdates.</p>
          </div>

          <div class="advantage-card">
            <div class="advantage-icon">📱</div>
            <h3 class="advantage-title">Ungeprüfte Anwendungen</h3>
            <p class="advantage-description">Drittanbieter-Software ohne ausreichende Sicherheitsprüfung, die Malware enthalten kann.</p>
          </div>
        </div>

        <p>Angesichts dieser Bedrohungen sind wirksame <strong><em>INDEX 03: SCHUTZMASSNAHMEN</em></strong> entscheidend.</p>
      </section>

      <div class="section-divider"></div>

      <section class="content-section technical-features">
        <h2 id="schutzmassnahmen" class="section-title">🛡️ Schutzmaßnahmen</h2>

        <div class="features-container">
          <div class="feature-block">
            <h3 class="feature-title">🔒 Marinetaugliche Firewalls</h3>
            <p class="feature-description">Spezialisierte Firewalls filtern schädlichen Traffic und schützen kritische Navigationssysteme.</p>
          </div>

          <div class="feature-block">
            <h3 class="feature-title">🔐 Sichere VPN-Verbindungen</h3>
            <p class="feature-description">Unternehmens-VPN für alle Kommunikationskanäle – für Datenschutz und Datenverschlüsselung.</p>
          </div>

          <div class="feature-block">
            <h3 class="feature-title">📊 24/7-Monitoring</h3>
            <p class="feature-description">Einbruchserkennungssysteme (IDS), die verdächtige Aktivitäten sofort melden.</p>
          </div>

          <div class="feature-block">
            <h3 class="feature-title">🔄 Automatische Updates</h3>
            <p class="feature-description">Zentrale Verwaltung von Patches und Sicherheitsupdates für alle verbundenen Geräte.</p>
          </div>
        </div>

        <p>Neben Technik sind operative <strong><em>INDEX 04: BEST PRACTICES</em></strong> unverzichtbar.</p>
      </section>

      <div class="section-divider"></div>

      <section class="content-section applications-section">
        <h2 id="best-practices" class="section-title">✅ Best Practices</h2>

        <div class="applications-grid">
          <div class="application-item">
            <div class="app-header">
              <span class="app-icon">👥</span>
              <h3 class="app-title">Crew-Schulungen</h3>
            </div>
            <p class="app-description">Regelmäßige Trainings zur <strong>Cyber-Awareness</strong> für Crew und häufige Nutzer.</p>
          </div>

          <div class="application-item">
            <div class="app-header">
              <span class="app-icon">🔑</span>
              <h3 class="app-title">Passwort-Management</h3>
            </div>
            <p class="app-description">Einsatz von <strong>Passwortmanagern</strong> und Zwei-Faktor-Authentifizierung in allen Systemen.</p>
          </div>

          <div class="application-item">
            <div class="app-header">
              <span class="app-icon">💾</span>
              <h3 class="app-title">Sichere Backups</h3>
            </div>
            <p class="app-description">Automatisierte, verschlüsselte Sicherungen kritischer Daten – lokal und extern gespeichert.</p>
          </div>

          <div class="application-item">
            <div class="app-header">
              <span class="app-icon">📋</span>
              <h3 class="app-title">Incident-Response-Plan</h3>
            </div>
            <p class="app-description">Plan zur Reaktion auf Sicherheitsvorfälle mit <strong>klaren Abläufen</strong> und Notfallkontakten.</p>
          </div>
        </div>

        <p>Die Umsetzung dieser Maßnahmen führt zu den Schlussfolgerungen in <strong><em>INDEX 05: FAZIT</em></strong>.</p>
      </section>

      <div class="section-divider"></div>

      <section class="content-section conclusion-section">
        <h2 id="fazit" class="section-title">🎯 Fazit</h2>
        
        <div class="conclusion-content">
          <div class="key-insight">
            <p><strong>Maritime Cybersicherheit</strong> ist kein Luxus, sondern eine zwingende Notwendigkeit. Moderne Yachten brauchen Schutz auf Enterprise-Niveau.</p>
          </div>

          <div class="value-proposition">
            <p>Eine <strong>ganzheitliche Sicherheitsstrategie</strong> verbindet fortschrittliche Technik, betriebliche Best Practices und kontinuierliche Schulung.</p>
          </div>

          <div class="final-statement">
            <div class="quote-box">
              <p><strong>🔐 Schlussgedanke:</strong> In der Flut digitaler Daten ist Cybersicherheit Ihr <strong>zuverlässigster Kompass</strong> für eine sichere Zukunft.</p>
            </div>
          </div>
        </div>
      </section>

      <div class="section-divider"></div>
      `,seo:{metaTitle:"Maritime Cybersicherheit für Yachten: Digitaler Schutz | Netnautica",metaDescription:"Schützen Sie Ihre Yacht vor Cyber-Bedrohungen mit unseren maritimen Cybersicherheitsstrategien. Vollständiger Leitfaden für nautische digitale Sicherheit.",keywords:["maritime cybersicherheit","yacht sicherheit","digitaler schutz","nautische cybersicherheit","schiffs sicherheit"]}}},author:"Netnautica Team",publishedAt:"2025-03-22",readingTime:3,tags:["ciberseguridad","seguridad","digital","yates","protección","privacidad","tecnología"],featuredImage:{src:"/images/blog/cybersecurity-yacht.jpg",alt:"Yacht with digital security systems",width:1200,height:630},seo:{metaTitle:"Maritime Cybersecurity for Yachts: Digital Protection | Netnautica",metaDescription:"Protect your yacht from cyber threats with maritime cybersecurity strategies. Complete guide to nautical digital security.",keywords:["maritime cybersecurity","yacht security","digital protection","nautical cybersecurity","ship security"]}},G=[Ei,zi,Ii],ir=(e="es")=>!G||G.length===0?[]:G.map(t=>({...t,...t.locales[e],slug:t.slug[e]||t.slug.es})),Pi=(e,t="es")=>{const i=G.find(n=>n.slug[t]===e);return i?{...i,...i.locales[t],slug:i.slug}:null},nr=(e,t="es",i=3)=>{const n=G.find(a=>a.id===e);return n?G.filter(a=>a.id!==e&&a.category===n.category).slice(0,i).map(a=>({...a,...a.locales[t],slug:a.slug[t]||a.slug.es})):[]};function Je({className:e=""}){const t=ne(),i=Rt(),{i18n:n,t:a}=P(),r=c=>{if(t.pathname.startsWith("/blog/")&&t.pathname.split("/").length===3){const l=t.pathname.split("/")[2],d=n.language,u=Pi(l,d);if(u){const m=u.slug[c]||u.slug.es;i(`/blog/${m}`,{replace:!0})}}n.changeLanguage(c)};return s.jsxs("div",{className:`flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 text-xs font-medium text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 ${e}`,children:[s.jsx("span",{className:"sr-only",children:a("navigation.language")}),Le.map(c=>{const o=n.language===c.code;return s.jsx("button",{type:"button",onClick:()=>r(c.code),className:`rounded-full px-3 py-1 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${o?"bg-brand-500 text-white shadow":"text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300"}`,"aria-pressed":o,children:c.label},c.code)})]})}const et="netnautica-theme",At=f.createContext({theme:"light",toggleTheme:()=>{},setTheme:()=>{}}),Mi=()=>{var e;return typeof window<"u"&&((e=window.matchMedia)==null?void 0:e.call(window,"(prefers-color-scheme: dark)").matches)};function qi({children:e}){const[t,i]=f.useState(()=>typeof window>"u"?"light":localStorage.getItem(et)??(Mi()?"dark":"light"));f.useEffect(()=>{const a=document.documentElement;a.classList.remove("light","dark"),a.classList.add(t),a.style.setProperty("color-scheme",t),localStorage.setItem(et,t)},[t]),f.useEffect(()=>{if(typeof window>"u")return;const a=window.matchMedia("(prefers-color-scheme: dark)"),r=c=>{i(c.matches?"dark":"light")};return a.addEventListener("change",r),()=>a.removeEventListener("change",r)},[]);const n=f.useMemo(()=>({theme:t,setTheme:i,toggleTheme:()=>i(a=>a==="dark"?"light":"dark")}),[t]);return s.jsx(At.Provider,{value:n,children:e})}const ji=()=>f.useContext(At);function tt({className:e=""}){const{theme:t,toggleTheme:i}=ji(),{t:n}=P(),a=t==="dark";return s.jsx("button",{type:"button",onClick:i,className:`inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-brand-400 hover:text-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-brand-500 dark:hover:text-brand-300 ${e}`,"aria-label":n("actions.toggleTheme"),children:a?s.jsx("svg",{className:"h-5 w-5",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:s.jsx("path",{d:"M21 12.79A9 9 0 0 1 12.79 3 7 7 0 1 0 21 12.79Z",className:"fill-current"})}):s.jsxs("svg",{className:"h-5 w-5",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("circle",{cx:"12",cy:"12",r:"5",className:"fill-current"}),s.jsx("path",{d:"M12 1v2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M12 21v2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M4.22 4.22 5.64 5.64",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M18.36 18.36 19.78 19.78",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M1 12h2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M21 12h2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M4.22 19.78 5.64 18.36",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M18.36 5.64 19.78 4.22",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})})}function j(e){return Array.isArray?Array.isArray(e):Nt(e)==="[object Array]"}function Di(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function Fi(e){return e==null?"":Di(e)}function I(e){return typeof e=="string"}function Ct(e){return typeof e=="number"}function Vi(e){return e===!0||e===!1||Li(e)&&Nt(e)=="[object Boolean]"}function Tt(e){return typeof e=="object"}function Li(e){return Tt(e)&&e!==null}function x(e){return e!=null}function Se(e){return!e.trim().length}function Nt(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const Bi="Incorrect 'index' type",Ri=e=>`Invalid value for key ${e}`,Wi=e=>`Pattern length exceeds max of ${e}.`,Oi=e=>`Missing ${e} property in key`,Gi=e=>`Property 'weight' in key '${e}' must be a positive integer`,it=Object.prototype.hasOwnProperty;class Ki{constructor(t){this._keys=[],this._keyMap={};let i=0;t.forEach(n=>{let a=Et(n);this._keys.push(a),this._keyMap[a.id]=a,i+=a.weight}),this._keys.forEach(n=>{n.weight/=i})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Et(e){let t=null,i=null,n=null,a=1,r=null;if(I(e)||j(e))n=e,t=nt(e),i=ze(e);else{if(!it.call(e,"name"))throw new Error(Oi("name"));const c=e.name;if(n=c,it.call(e,"weight")&&(a=e.weight,a<=0))throw new Error(Gi(c));t=nt(c),i=ze(c),r=e.getFn}return{path:t,id:i,weight:a,src:n,getFn:r}}function nt(e){return j(e)?e:e.split(".")}function ze(e){return j(e)?e.join("."):e}function Ui(e,t){let i=[],n=!1;const a=(r,c,o)=>{if(x(r))if(!c[o])i.push(r);else{let l=c[o];const d=r[l];if(!x(d))return;if(o===c.length-1&&(I(d)||Ct(d)||Vi(d)))i.push(Fi(d));else if(j(d)){n=!0;for(let u=0,m=d.length;u<m;u+=1)a(d[u],c,o+1)}else c.length&&a(d,c,o+1)}};return a(e,I(t)?t.split("."):t,0),n?i:i[0]}const _i={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},$i={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},Hi={location:0,threshold:.6,distance:100},Yi={useExtendedSearch:!1,getFn:Ui,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var v={...$i,..._i,...Hi,...Yi};const Zi=/[^ ]+/g;function Qi(e=1,t=3){const i=new Map,n=Math.pow(10,t);return{get(a){const r=a.match(Zi).length;if(i.has(r))return i.get(r);const c=1/Math.pow(r,.5*e),o=parseFloat(Math.round(c*n)/n);return i.set(r,o),o},clear(){i.clear()}}}class Be{constructor({getFn:t=v.getFn,fieldNormWeight:i=v.fieldNormWeight}={}){this.norm=Qi(i,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((i,n)=>{this._keysMap[i.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,I(this.docs[0])?this.docs.forEach((t,i)=>{this._addString(t,i)}):this.docs.forEach((t,i)=>{this._addObject(t,i)}),this.norm.clear())}add(t){const i=this.size();I(t)?this._addString(t,i):this._addObject(t,i)}removeAt(t){this.records.splice(t,1);for(let i=t,n=this.size();i<n;i+=1)this.records[i].i-=1}getValueForItemAtKeyId(t,i){return t[this._keysMap[i]]}size(){return this.records.length}_addString(t,i){if(!x(t)||Se(t))return;let n={v:t,i,n:this.norm.get(t)};this.records.push(n)}_addObject(t,i){let n={i,$:{}};this.keys.forEach((a,r)=>{let c=a.getFn?a.getFn(t):this.getFn(t,a.path);if(x(c)){if(j(c)){let o=[];const l=[{nestedArrIndex:-1,value:c}];for(;l.length;){const{nestedArrIndex:d,value:u}=l.pop();if(x(u))if(I(u)&&!Se(u)){let m={v:u,i:d,n:this.norm.get(u)};o.push(m)}else j(u)&&u.forEach((m,h)=>{l.push({nestedArrIndex:h,value:m})})}n.$[r]=o}else if(I(c)&&!Se(c)){let o={v:c,n:this.norm.get(c)};n.$[r]=o}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function zt(e,t,{getFn:i=v.getFn,fieldNormWeight:n=v.fieldNormWeight}={}){const a=new Be({getFn:i,fieldNormWeight:n});return a.setKeys(e.map(Et)),a.setSources(t),a.create(),a}function Xi(e,{getFn:t=v.getFn,fieldNormWeight:i=v.fieldNormWeight}={}){const{keys:n,records:a}=e,r=new Be({getFn:t,fieldNormWeight:i});return r.setKeys(n),r.setIndexRecords(a),r}function re(e,{errors:t=0,currentLocation:i=0,expectedLocation:n=0,distance:a=v.distance,ignoreLocation:r=v.ignoreLocation}={}){const c=t/e.length;if(r)return c;const o=Math.abs(n-i);return a?c+o/a:o?1:c}function Ji(e=[],t=v.minMatchCharLength){let i=[],n=-1,a=-1,r=0;for(let c=e.length;r<c;r+=1){let o=e[r];o&&n===-1?n=r:!o&&n!==-1&&(a=r-1,a-n+1>=t&&i.push([n,a]),n=-1)}return e[r-1]&&r-n>=t&&i.push([n,r-1]),i}const W=32;function en(e,t,i,{location:n=v.location,distance:a=v.distance,threshold:r=v.threshold,findAllMatches:c=v.findAllMatches,minMatchCharLength:o=v.minMatchCharLength,includeMatches:l=v.includeMatches,ignoreLocation:d=v.ignoreLocation}={}){if(t.length>W)throw new Error(Wi(W));const u=t.length,m=e.length,h=Math.max(0,Math.min(n,m));let p=r,g=h;const b=o>1||l,y=b?Array(m):[];let k;for(;(k=e.indexOf(t,g))>-1;){let C=re(t,{currentLocation:k,expectedLocation:h,distance:a,ignoreLocation:d});if(p=Math.min(C,p),g=k+u,b){let F=0;for(;F<u;)y[k+F]=1,F+=1}}g=-1;let w=[],D=1,M=u+m;const Vt=1<<u-1;for(let C=0;C<u;C+=1){let F=0,V=M;for(;F<V;)re(t,{errors:C,currentLocation:h+V,expectedLocation:h,distance:a,ignoreLocation:d})<=p?F=V:M=V,V=Math.floor((M-F)/2+F);M=V;let Re=Math.max(1,h-V+1),fe=c?m:Math.min(h+V,m)+u,U=Array(fe+2);U[fe+1]=(1<<C)-1;for(let N=fe;N>=Re;N-=1){let ae=N-1,We=i[e.charAt(ae)];if(b&&(y[ae]=+!!We),U[N]=(U[N+1]<<1|1)&We,C&&(U[N]|=(w[N+1]|w[N])<<1|1|w[N+1]),U[N]&Vt&&(D=re(t,{errors:C,currentLocation:ae,expectedLocation:h,distance:a,ignoreLocation:d}),D<=p)){if(p=D,g=ae,g<=h)break;Re=Math.max(1,2*h-g)}}if(re(t,{errors:C+1,currentLocation:h,expectedLocation:h,distance:a,ignoreLocation:d})>p)break;w=U}const ve={isMatch:g>=0,score:Math.max(.001,D)};if(b){const C=Ji(y,o);C.length?l&&(ve.indices=C):ve.isMatch=!1}return ve}function tn(e){let t={};for(let i=0,n=e.length;i<n;i+=1){const a=e.charAt(i);t[a]=(t[a]||0)|1<<n-i-1}return t}const ge=String.prototype.normalize?e=>e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,""):e=>e;class It{constructor(t,{location:i=v.location,threshold:n=v.threshold,distance:a=v.distance,includeMatches:r=v.includeMatches,findAllMatches:c=v.findAllMatches,minMatchCharLength:o=v.minMatchCharLength,isCaseSensitive:l=v.isCaseSensitive,ignoreDiacritics:d=v.ignoreDiacritics,ignoreLocation:u=v.ignoreLocation}={}){if(this.options={location:i,threshold:n,distance:a,includeMatches:r,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:l,ignoreDiacritics:d,ignoreLocation:u},t=l?t:t.toLowerCase(),t=d?ge(t):t,this.pattern=t,this.chunks=[],!this.pattern.length)return;const m=(p,g)=>{this.chunks.push({pattern:p,alphabet:tn(p),startIndex:g})},h=this.pattern.length;if(h>W){let p=0;const g=h%W,b=h-g;for(;p<b;)m(this.pattern.substr(p,W),p),p+=W;if(g){const y=h-W;m(this.pattern.substr(y),y)}}else m(this.pattern,0)}searchIn(t){const{isCaseSensitive:i,ignoreDiacritics:n,includeMatches:a}=this.options;if(t=i?t:t.toLowerCase(),t=n?ge(t):t,this.pattern===t){let b={isMatch:!0,score:0};return a&&(b.indices=[[0,t.length-1]]),b}const{location:r,distance:c,threshold:o,findAllMatches:l,minMatchCharLength:d,ignoreLocation:u}=this.options;let m=[],h=0,p=!1;this.chunks.forEach(({pattern:b,alphabet:y,startIndex:k})=>{const{isMatch:w,score:D,indices:M}=en(t,b,y,{location:r+k,distance:c,threshold:o,findAllMatches:l,minMatchCharLength:d,includeMatches:a,ignoreLocation:u});w&&(p=!0),h+=D,w&&M&&(m=[...m,...M])});let g={isMatch:p,score:p?h/this.chunks.length:1};return p&&a&&(g.indices=m),g}}class B{constructor(t){this.pattern=t}static isMultiMatch(t){return at(t,this.multiRegex)}static isSingleMatch(t){return at(t,this.singleRegex)}search(){}}function at(e,t){const i=e.match(t);return i?i[1]:null}class nn extends B{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const i=t===this.pattern;return{isMatch:i,score:i?0:1,indices:[0,this.pattern.length-1]}}}class an extends B{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const n=t.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class sn extends B{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const i=t.startsWith(this.pattern);return{isMatch:i,score:i?0:1,indices:[0,this.pattern.length-1]}}}class rn extends B{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const i=!t.startsWith(this.pattern);return{isMatch:i,score:i?0:1,indices:[0,t.length-1]}}}class on extends B{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const i=t.endsWith(this.pattern);return{isMatch:i,score:i?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class cn extends B{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const i=!t.endsWith(this.pattern);return{isMatch:i,score:i?0:1,indices:[0,t.length-1]}}}class Pt extends B{constructor(t,{location:i=v.location,threshold:n=v.threshold,distance:a=v.distance,includeMatches:r=v.includeMatches,findAllMatches:c=v.findAllMatches,minMatchCharLength:o=v.minMatchCharLength,isCaseSensitive:l=v.isCaseSensitive,ignoreDiacritics:d=v.ignoreDiacritics,ignoreLocation:u=v.ignoreLocation}={}){super(t),this._bitapSearch=new It(t,{location:i,threshold:n,distance:a,includeMatches:r,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:l,ignoreDiacritics:d,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Mt extends B{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let i=0,n;const a=[],r=this.pattern.length;for(;(n=t.indexOf(this.pattern,i))>-1;)i=n+r,a.push([n,i-1]);const c=!!a.length;return{isMatch:c,score:c?0:1,indices:a}}}const Ie=[nn,Mt,sn,rn,cn,on,an,Pt],st=Ie.length,ln=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,dn="|";function un(e,t={}){return e.split(dn).map(i=>{let n=i.trim().split(ln).filter(r=>r&&!!r.trim()),a=[];for(let r=0,c=n.length;r<c;r+=1){const o=n[r];let l=!1,d=-1;for(;!l&&++d<st;){const u=Ie[d];let m=u.isMultiMatch(o);m&&(a.push(new u(m,t)),l=!0)}if(!l)for(d=-1;++d<st;){const u=Ie[d];let m=u.isSingleMatch(o);if(m){a.push(new u(m,t));break}}}return a})}const pn=new Set([Pt.type,Mt.type]);class mn{constructor(t,{isCaseSensitive:i=v.isCaseSensitive,ignoreDiacritics:n=v.ignoreDiacritics,includeMatches:a=v.includeMatches,minMatchCharLength:r=v.minMatchCharLength,ignoreLocation:c=v.ignoreLocation,findAllMatches:o=v.findAllMatches,location:l=v.location,threshold:d=v.threshold,distance:u=v.distance}={}){this.query=null,this.options={isCaseSensitive:i,ignoreDiacritics:n,includeMatches:a,minMatchCharLength:r,findAllMatches:o,ignoreLocation:c,location:l,threshold:d,distance:u},t=i?t:t.toLowerCase(),t=n?ge(t):t,this.pattern=t,this.query=un(this.pattern,this.options)}static condition(t,i){return i.useExtendedSearch}searchIn(t){const i=this.query;if(!i)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:a,ignoreDiacritics:r}=this.options;t=a?t:t.toLowerCase(),t=r?ge(t):t;let c=0,o=[],l=0;for(let d=0,u=i.length;d<u;d+=1){const m=i[d];o.length=0,c=0;for(let h=0,p=m.length;h<p;h+=1){const g=m[h],{isMatch:b,indices:y,score:k}=g.search(t);if(b){if(c+=1,l+=k,n){const w=g.constructor.type;pn.has(w)?o=[...o,...y]:o.push(y)}}else{l=0,c=0,o.length=0;break}}if(c){let h={isMatch:!0,score:l/c};return n&&(h.indices=o),h}}return{isMatch:!1,score:1}}}const Pe=[];function gn(...e){Pe.push(...e)}function Me(e,t){for(let i=0,n=Pe.length;i<n;i+=1){let a=Pe[i];if(a.condition(e,t))return new a(e,t)}return new It(e,t)}const he={AND:"$and",OR:"$or"},qe={PATH:"$path",PATTERN:"$val"},je=e=>!!(e[he.AND]||e[he.OR]),hn=e=>!!e[qe.PATH],vn=e=>!j(e)&&Tt(e)&&!je(e),rt=e=>({[he.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function qt(e,t,{auto:i=!0}={}){const n=a=>{let r=Object.keys(a);const c=hn(a);if(!c&&r.length>1&&!je(a))return n(rt(a));if(vn(a)){const l=c?a[qe.PATH]:r[0],d=c?a[qe.PATTERN]:a[l];if(!I(d))throw new Error(Ri(l));const u={keyId:ze(l),pattern:d};return i&&(u.searcher=Me(d,t)),u}let o={children:[],operator:r[0]};return r.forEach(l=>{const d=a[l];j(d)&&d.forEach(u=>{o.children.push(n(u))})}),o};return je(e)||(e=rt(e)),n(e)}function fn(e,{ignoreFieldNorm:t=v.ignoreFieldNorm}){e.forEach(i=>{let n=1;i.matches.forEach(({key:a,norm:r,score:c})=>{const o=a?a.weight:null;n*=Math.pow(c===0&&o?Number.EPSILON:c,(o||1)*(t?1:r))}),i.score=n})}function bn(e,t){const i=e.matches;t.matches=[],x(i)&&i.forEach(n=>{if(!x(n.indices)||!n.indices.length)return;const{indices:a,value:r}=n;let c={indices:a,value:r};n.key&&(c.key=n.key.src),n.idx>-1&&(c.refIndex=n.idx),t.matches.push(c)})}function yn(e,t){t.score=e.score}function kn(e,t,{includeMatches:i=v.includeMatches,includeScore:n=v.includeScore}={}){const a=[];return i&&a.push(bn),n&&a.push(yn),e.map(r=>{const{idx:c}=r,o={item:t[c],refIndex:c};return a.length&&a.forEach(l=>{l(r,o)}),o})}class K{constructor(t,i={},n){this.options={...v,...i},this.options.useExtendedSearch,this._keyStore=new Ki(this.options.keys),this.setCollection(t,n)}setCollection(t,i){if(this._docs=t,i&&!(i instanceof Be))throw new Error(Bi);this._myIndex=i||zt(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){x(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const i=[];for(let n=0,a=this._docs.length;n<a;n+=1){const r=this._docs[n];t(r,n)&&(this.removeAt(n),n-=1,a-=1,i.push(r))}return i}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:i=-1}={}){const{includeMatches:n,includeScore:a,shouldSort:r,sortFn:c,ignoreFieldNorm:o}=this.options;let l=I(t)?I(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return fn(l,{ignoreFieldNorm:o}),r&&l.sort(c),Ct(i)&&i>-1&&(l=l.slice(0,i)),kn(l,this._docs,{includeMatches:n,includeScore:a})}_searchStringList(t){const i=Me(t,this.options),{records:n}=this._myIndex,a=[];return n.forEach(({v:r,i:c,n:o})=>{if(!x(r))return;const{isMatch:l,score:d,indices:u}=i.searchIn(r);l&&a.push({item:r,idx:c,matches:[{score:d,value:r,norm:o,indices:u}]})}),a}_searchLogical(t){const i=qt(t,this.options),n=(o,l,d)=>{if(!o.children){const{keyId:m,searcher:h}=o,p=this._findMatches({key:this._keyStore.get(m),value:this._myIndex.getValueForItemAtKeyId(l,m),searcher:h});return p&&p.length?[{idx:d,item:l,matches:p}]:[]}const u=[];for(let m=0,h=o.children.length;m<h;m+=1){const p=o.children[m],g=n(p,l,d);if(g.length)u.push(...g);else if(o.operator===he.AND)return[]}return u},a=this._myIndex.records,r={},c=[];return a.forEach(({$:o,i:l})=>{if(x(o)){let d=n(i,o,l);d.length&&(r[l]||(r[l]={idx:l,item:o,matches:[]},c.push(r[l])),d.forEach(({matches:u})=>{r[l].matches.push(...u)}))}}),c}_searchObjectList(t){const i=Me(t,this.options),{keys:n,records:a}=this._myIndex,r=[];return a.forEach(({$:c,i:o})=>{if(!x(c))return;let l=[];n.forEach((d,u)=>{l.push(...this._findMatches({key:d,value:c[u],searcher:i}))}),l.length&&r.push({idx:o,item:c,matches:l})}),r}_findMatches({key:t,value:i,searcher:n}){if(!x(i))return[];let a=[];if(j(i))i.forEach(({v:r,i:c,n:o})=>{if(!x(r))return;const{isMatch:l,score:d,indices:u}=n.searchIn(r);l&&a.push({score:d,key:t,value:r,idx:c,norm:o,indices:u})});else{const{v:r,n:c}=i,{isMatch:o,score:l,indices:d}=n.searchIn(r);o&&a.push({score:l,key:t,value:r,norm:c,indices:d})}return a}}K.version="7.1.0";K.createIndex=zt;K.parseIndex=Xi;K.config=v;K.parseQuery=qt;gn(mn);const Sn={spark:s.jsx("path",{d:"M12 2.5 9.9 7.4 4 8.1l4.8 3.7L7.5 18l4.5-2.8 4.5 2.8-1.3-6.2L20 8.1l-5.9-0.7L12 2.5Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round",fill:"none"}),growth:s.jsxs(s.Fragment,{children:[s.jsx("path",{d:"M4 18h16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M8 18V10l4 3 4-6v11",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),shield:s.jsx("path",{d:"M12 3 5 6v6c0 4.2 3.6 7.8 7 9 3.4-1.2 7-4.8 7-9V6l-7-3Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round",fill:"none"}),globe:s.jsxs(s.Fragment,{children:[s.jsx("circle",{cx:"12",cy:"12",r:"8",stroke:"currentColor",strokeWidth:"1.5",fill:"none"}),s.jsx("path",{d:"M4 12h16",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M12 4c-2 3-2 13 0 16 2-3 2-13 0-16Z",stroke:"currentColor",strokeWidth:"1.5",fill:"none"})]}),analytics:s.jsxs(s.Fragment,{children:[s.jsx("path",{d:"M5 18h14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M8 18v-8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M12 18V7",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M16 18v-5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),automation:s.jsxs(s.Fragment,{children:[s.jsx("circle",{cx:"12",cy:"12",r:"3",stroke:"currentColor",strokeWidth:"1.5",fill:"none"}),s.jsx("path",{d:"M12 5V3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M12 21v-2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"m7.1 7.1-1.4-1.4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"m18.3 18.3-1.4-1.4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M5 12H3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M21 12h-2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"m7.1 16.9-1.4 1.4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"m18.3 5.7-1.4 1.4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),ux:s.jsxs(s.Fragment,{children:[s.jsx("rect",{x:"4",y:"5",width:"16",height:"14",rx:"3",stroke:"currentColor",strokeWidth:"1.5",fill:"none"}),s.jsx("path",{d:"M4 10h16",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("circle",{cx:"9",cy:"13",r:"1",fill:"currentColor"}),s.jsx("circle",{cx:"15",cy:"13",r:"1",fill:"currentColor"})]}),calculator:s.jsxs(s.Fragment,{children:[s.jsx("rect",{x:"6",y:"3",width:"12",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5",fill:"none"}),s.jsx("path",{d:"M8 7h8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M9 12h2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M13 12h2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M9 15h2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M13 15h2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})};function R({name:e,className:t="h-6 w-6",...i}){const n=Sn[e];return n?s.jsx("svg",{className:t,viewBox:"0 0 24 24",fill:"none",role:"img","aria-hidden":"true",...i,children:n}):null}const wn=["es","en","fr","de"],ie=e=>wn.reduce((t,i)=>(t[i]=e(i),t),{}),Z={es:"Contactar Netnautica",en:"Contact Netnautica",fr:"Contacter Netnautica",de:"Netnautica kontaktieren"},oe={es:"Ver más servicios",en:"See more services",fr:"Voir plus de services",de:"Weitere Services"},ce="/contact",le="/services",xn=[{id:"connectivity",slug:"conectividad-global-yates",icon:"globe",metrics:[{id:"redundancy",value:"Multi-WAN",label:{es:"Redundancia activa",en:"Active redundancy",fr:"Redondance active",de:"Aktive Redundanz"}},{id:"starlink",value:"Starlink+",label:{es:"Cobertura satelital",en:"Satellite coverage",fr:"Couverture satellite",de:"Satellitenabdeckung"}}],locales:ie(e=>({name:{es:"Conectividad Global",en:"Worldwide Connectivity",fr:"Connectivité Mondiale",de:"Globale Konnektivität"}[e],shortDescription:{es:"Multi-WAN resiliente que combina Starlink, 4G/5G y WiFi 6 para mantener el yate siempre en línea.",en:"Resilient Multi-WAN combining Starlink, 4G/5G and WiFi 6 to keep the yacht always online.",fr:"Multi-WAN résilient combinant Starlink, 4G/5G et WiFi 6 pour une connexion permanente du yacht.",de:"Belastbares Multi-WAN mit Starlink, 4G/5G und WiFi 6 für permanente Yacht-Konnektivität."}[e],hero:{tagline:{es:"Cobertura global sin interrupciones",en:"Uninterrupted worldwide coverage",fr:"Couverture mondiale ininterrompue",de:"Unterbrechungsfreie weltweite Abdeckung"}[e],description:{es:"Diseñamos sistemas de conectividad con failover automático, balanceo de carga y monitorización proactiva para travesías por el Mediterráneo y más allá.",en:"We design connectivity systems with automatic failover, load balancing and proactive monitoring for Mediterranean journeys and beyond.",fr:"Nous concevons des systèmes de connectivité avec failover automatique, équilibrage de charge et surveillance proactive pour les traversées en Méditerranée et au-delà.",de:"Wir entwickeln Konnektivitätssysteme mit automatischem Failover, Lastausgleich und proaktiver Überwachung für Mittelmeerreisen und darüber hinaus."}[e],primaryCta:{label:Z[e],href:ce},secondaryCta:{label:oe[e],href:le}},benefits:[{title:{es:"Multi-WAN inteligente",en:"Smart Multi-WAN",fr:"Multi-WAN intelligent",de:"Intelligentes Multi-WAN"}[e],description:{es:"Starlink LEO, enlaces 4G/5G y VSAT combinados con conmutación automática.",en:"Starlink LEO, 4G/5G links and VSAT combined with automatic switching.",fr:"Starlink LEO, liens 4G/5G et VSAT combinés avec commutation automatique.",de:"Starlink LEO, 4G/5G-Verbindungen und VSAT kombiniert mit automatischer Umschaltung."}[e]},{title:{es:"WiFi 6 premium",en:"Premium WiFi 6",fr:"WiFi 6 premium",de:"Premium WiFi 6"}[e],description:{es:"Cobertura total a bordo con QoS y segmentación para tripulación e invitados.",en:"Complete onboard coverage with QoS and segmentation for crew and guests.",fr:"Couverture totale à bord avec QoS et segmentation pour équipage et invités.",de:"Vollständige Bordabdeckung mit QoS und Segmentierung für Besatzung und Gäste."}[e]},{title:{es:"Gestión remota 24/7",en:"24/7 Remote management",fr:"Gestion à distance 24/7",de:"24/7 Fernverwaltung"}[e],description:{es:"Supervisión continua y ajustes inmediatos para cada ruta y atraque.",en:"Continuous monitoring and immediate adjustments for each route and dock.",fr:"Surveillance continue et ajustements immédiats pour chaque route et amarrage.",de:"Kontinuierliche Überwachung und sofortige Anpassungen für jede Route und jeden Liegeplatz."}[e]}],process:[{title:{es:"Auditoría de señal",en:"Signal audit",fr:"Audit du signal",de:"Signal-Audit"}[e],description:{es:"Estudio de rutas, puertos y racks existentes.",en:"Study of existing routes, ports and racks.",fr:"Étude des routes, ports et racks existants.",de:"Analyse bestehender Routen, Häfen und Racks."}[e]},{title:{es:"Arquitectura redundante",en:"Redundant architecture",fr:"Architecture redondante",de:"Redundante Architektur"}[e],description:{es:"Diseño multi-enlace con balanceo y failover automático.",en:"Multi-link design with load balancing and automatic failover.",fr:"Conception multi-liens avec équilibrage de charge et basculement automatique.",de:"Multi-Link-Design mit Lastausgleich und automatischem Failover."}[e]},{title:{es:"Optimización QoS",en:"QoS optimization",fr:"Optimisation QoS",de:"QoS-Optimierung"}[e],description:{es:"Priorización de aplicaciones críticas y perfiles de invitados.",en:"Prioritization of critical applications and guest profiles.",fr:"Priorisation des applications critiques et des profils invités.",de:"Priorisierung kritischer Anwendungen und Gästeprofile."}[e]},{title:{es:"Monitorización continua",en:"Continuous monitoring",fr:"Surveillance continue",de:"Kontinuierliche Überwachung"}[e],description:{es:"Panel en la nube con alertas y soporte proactivo.",en:"Cloud dashboard with proactive alerts and support.",fr:"Tableau de bord cloud avec alertes et support proactif.",de:"Cloud-Dashboard mit proaktiven Warnungen und Support."}[e]}],caseStudy:{company:"Charter 45 m",challenge:"Cortes al combinar Starlink y 4G/5G durante trayectos largos.",solution:"Implementamos multi-WAN administrado con politicas de priorizacion y respaldo VSAT.",result:"Disponibilidad >99 % y recuperacion inferior a diez segundos."},faq:[{question:{es:"¿Necesito contratar Starlink?",en:"Do I need to contract Starlink?",fr:"Dois-je souscrire à Starlink ?",de:"Muss ich Starlink abonnieren?"}[e],answer:{es:"Integramos Starlink cuando aporta valor, pero siempre combinamos varios proveedores para mantener redundancia.",en:"We integrate Starlink when it adds value, but we always combine multiple providers to maintain redundancy.",fr:"Nous intégrons Starlink quand cela apporte de la valeur, mais nous combinons toujours plusieurs fournisseurs pour maintenir la redondance.",de:"Wir integrieren Starlink, wenn es Mehrwert bietet, kombinieren aber immer mehrere Anbieter, um Redundanz aufrechtzuerhalten."}[e]},{question:{es:"¿Incluye soporte remoto?",en:"Does it include remote support?",fr:"Le support à distance est-il inclus ?",de:"Ist Remote-Support inbegriffen?"}[e],answer:{es:"Sí, monitorizamos los enlaces 24/7 y coordinamos ajustes con la tripulación.",en:"Yes, we monitor the links 24/7 and coordinate adjustments with the crew.",fr:"Oui, nous surveillons les liens 24/7 et coordonnons les ajustements avec l'équipage."}[e]}]}))},{id:"cybersecurity",slug:"ciberseguridad-yates",icon:"shield",metrics:[{id:"monitoring",value:"24/7",label:{es:"Monitorizacion",en:"Monitoring",fr:"Surveillance",de:"Überwachung"}},{id:"segments",value:"4 capas",label:{es:"Segmentacion",en:"Segmentation",fr:"Segmentation",de:"Segmentierung"}}],locales:ie(e=>({name:{es:"Ciberseguridad",en:"Cybersecurity",fr:"Cybersécurité",de:"Cybersicherheit"}[e],shortDescription:{es:"Perímetros digitales robustos con firewalls de nueva generación, segmentación y auditorías periódicas.",en:"Robust digital perimeters with next-generation firewalls, segmentation and periodic audits.",fr:"Périmètres numériques robustes avec pare-feu nouvelle génération, segmentation et audits périodiques.",de:"Robuste digitale Perimeter mit Next-Generation Firewalls, Segmentierung und regelmäßigen Audits."}[e],hero:{tagline:{es:"Fortaleza digital a bordo",en:"Digital fortress onboard",fr:"Forteresse numérique à bord",de:"Digitale Festung an Bord"}[e],description:{es:"Protegemos redes, dispositivos IoT y datos sensibles con políticas adaptadas a tripulación, invitados y sistemas de navegación.",en:"We protect networks, IoT devices and sensitive data with policies adapted to crew, guests and navigation systems.",fr:"Nous protégeons les réseaux, les appareils IoT et les données sensibles avec des politiques adaptées à l'équipage, aux invités et aux systèmes de navigation.",de:"Wir schützen Netzwerke, IoT-Geräte und sensible Daten mit Richtlinien, die auf Besatzung, Gäste und Navigationssysteme zugeschnitten sind."}[e],primaryCta:{label:Z[e],href:ce},secondaryCta:{label:oe[e],href:le}},benefits:[{title:{es:"Firewalls NGFW",en:"NGFW Firewalls",fr:"Pare-feu NGFW",de:"NGFW-Firewalls"}[e],description:{es:"Gestión de Fortinet y Peplink con reglas personalizadas y actualizaciones continuas.",en:"Management of Fortinet and Peplink with custom rules and continuous updates.",fr:"Gestion de Fortinet et Peplink avec règles personnalisées et mises à jour continues.",de:"Verwaltung von Fortinet und Peplink mit benutzerdefinierten Regeln und kontinuierlichen Updates."}[e]},{title:{es:"Segmentación avanzada",en:"Advanced segmentation",fr:"Segmentation avancée",de:"Erweiterte Segmentierung"}[e],description:{es:"Separación de redes para tripulación, invitados, domótica e instrumentación.",en:"Network separation for crew, guests, home automation and instrumentation.",fr:"Séparation des réseaux pour l'équipage, les invités, la domotique et l'instrumentation.",de:"Netzwerktrennung für Besatzung, Gäste, Hausautomation und Instrumentierung."}[e]},{title:{es:"Hardening IoT",en:"IoT Hardening",fr:"Durcissement IoT",de:"IoT-Härtung"}[e],description:{es:"Firmware controlado, acceso seguro y políticas Zero Trust para cada dispositivo.",en:"Controlled firmware, secure access and Zero Trust policies for each device.",fr:"Firmware contrôlé, accès sécurisé et politiques Zero Trust pour chaque appareil.",de:"Kontrollierte Firmware, sicherer Zugriff und Zero Trust-Richtlinien für jedes Gerät."}[e]}],process:[{title:{es:"Auditoría inicial",en:"Initial audit",fr:"Audit initial",de:"Erstprüfung"}[e],description:{es:"Inventario de activos y análisis de vulnerabilidades.",en:"Asset inventory and vulnerability analysis.",fr:"Inventaire des actifs et analyse des vulnérabilités.",de:"Inventar von Vermögenswerten und Schwachstellenanalyse."}[e]},{title:{es:"Diseño de políticas",en:"Policy design",fr:"Conception des politiques",de:"Politikgestaltung"}[e],description:{es:"Definición de VLAN, autenticación y registros.",en:"Definition of VLANs, authentication and logs.",fr:"Définition des VLAN, authentification et journaux.",de:"Definition von VLANs, Authentifizierung und Protokollen."}[e]},{title:{es:"Monitorización SIEM",en:"SIEM monitoring",fr:"Surveillance SIEM",de:"SIEM-Überwachung"}[e],description:{es:"Alertas proactivas y respuesta a incidentes.",en:"Proactive alerts and incident response.",fr:"Alertes proactives et réponse aux incidents.",de:"Proaktive Warnungen und Vorfallreaktion."}[e]},{title:{es:"Revisión recurrente",en:"Recurring review",fr:"Révision récurrente",de:"Wiederkehrende Überprüfung"}[e],description:{es:"Tests de intrusión y planes de mejora trimestrales.",en:"Penetration tests and quarterly improvement plans.",fr:"Tests de pénétration et plans d'amélioration trimestriels.",de:"Penetrationstests und vierteljährliche Verbesserungspläne."}[e]}],caseStudy:{company:"Superyate 50 m",challenge:"Accesos invitados comprometian la red de navegacion y entretenimiento.",solution:"Segmentamos en cuatro capas con autenticacion multifactor y politicas Zero Trust.",result:"Cero incidentes en la ultima temporada y auditoria externa superada."},faq:[{question:{es:"¿Formáis a la tripulación?",en:"Do you train the crew?",fr:"Formez-vous l'équipage ?",de:"Bilden Sie die Besatzung aus?"}[e],answer:{es:"Sí, impartimos sesiones de concienciación y entregamos guías con buenas prácticas.",en:"Yes, we provide awareness sessions and deliver guides with best practices.",fr:"Oui, nous dispensons des sessions de sensibilisation et fournissons des guides de bonnes pratiques.",de:"Ja, wir bieten Schulungen zur Sensibilisierung an und stellen Leitfäden mit Best Practices zur Verfügung."}[e]},{question:{es:"¿Qué ocurre tras la auditoría?",en:"What happens after the audit?",fr:"Que se passe-t-il après l'audit ?",de:"Was passiert nach dem Audit?"}[e],answer:{es:"Recibes un informe con riesgos priorizados y acompañamiento en la implementación.",en:"You receive a report with prioritized risks and implementation support.",fr:"Vous recevez un rapport avec les risques priorisés et un accompagnement dans la mise en œuvre.",de:"Sie erhalten einen Bericht mit priorisierten Risiken und Unterstützung bei der Umsetzung."}[e]}]}))},{id:"av-integration",slug:"integracion-av-yates",icon:"spark",metrics:[{id:"zones",value:"8+",label:{es:"Zonas de audio",en:"Audio zones",fr:"Zones audio",de:"Audiozonen"}},{id:"cinema",value:"4K HDR",label:{es:"Calidad AV",en:"AV quality",fr:"Qualité AV",de:"AV-Qualität"}}],locales:ie(e=>({name:{es:"Integración AV",en:"AV System Integration",fr:"Intégration AV",de:"AV-Systemintegration"}[e],shortDescription:{es:"Entretenimiento inmersivo con distribución 4K, audio zonificado y control domótico personalizado.",en:"Immersive entertainment with 4K distribution, zoned audio and custom home automation control.",fr:"Divertissement immersif avec distribution 4K, audio par zones et contrôle domotique personnalisé.",de:"Immersives Entertainment mit 4K-Verteilung, zoniertem Audio und benutzerdefinierter Hausautomatisierung."}[e],hero:{tagline:{es:"Experiencia cinematográfica en el mar",en:"Cinematic experience at sea",fr:"Expérience cinématographique en mer",de:"Kinematografisches Erlebnis auf See"}[e],description:{es:"Convertimos salones y sky lounges en espacios de cine, reuniones o entretenimiento privado gestionados desde interfaces Crestron.",en:"We transform salons and sky lounges into cinema spaces, meetings or private entertainment managed from Crestron interfaces.",fr:"Nous transformons les salons et sky lounges en espaces cinéma, réunions ou divertissement privé gérés depuis des interfaces Crestron.",de:"Wir verwandeln Salons und Sky Lounges in Kinos, Besprechungsräume oder private Unterhaltung, die über Crestron-Schnittstellen gesteuert werden."}[e],primaryCta:{label:Z[e],href:ce},secondaryCta:{label:oe[e],href:le}},benefits:[{title:{es:"Distribución 4K",en:"4K Distribution",fr:"Distribution 4K",de:"4K-Verteilung"}[e],description:{es:"Matrices UHD para enviar contenido a cualquier estancia sin latencia perceptible.",en:"UHD matrices to send content to any room without noticeable latency.",fr:"Matrices UHD pour envoyer du contenu dans n'importe quelle pièce sans latence perceptible.",de:"UHD-Matrizen zum Senden von Inhalten in jeden Raum ohne spürbare Latenz."}[e]},{title:{es:"Audio por zonas",en:"Zoned audio",fr:"Audio par zones",de:"Audiozonen"}[e],description:{es:"Control independiente por cabina con escenas adaptadas a cada invitado.",en:"Independent control per cabin with scenes adapted to each guest.",fr:"Contrôle indépendant par cabine avec scènes adaptées à chaque invité.",de:"Unabhängige Steuerung pro Kabine mit Szenen, die auf jeden Gast zugeschnitten sind."}[e]},{title:{es:"Espacios polivalentes",en:"Multipurpose spaces",fr:"Espaces polyvalents",de:"Multifunktionale Räume"}[e],description:{es:"Salas preparadas para briefings corporativos o sesiones de ocio.",en:"Rooms prepared for corporate briefings or leisure sessions.",fr:"Salles préparées pour les réunions d'entreprise ou les sessions de loisirs.",de:"Räume, die für Unternehmensbesprechungen oder Freizeitsitzungen vorbereitet sind."}[e]}],process:[{title:{es:"Discovery de usos",en:"Usage discovery",fr:"Découverte des usages",de:"Nutzungsentdeckung"}[e],description:{es:"Definimos escenarios con propietarios y tripulación.",en:"We define scenarios with owners and crew.",fr:"Nous définissons les scénarios avec les propriétaires et l'équipage.",de:"Wir definieren Szenarien mit Eigentümern und Besatzung."}[e]},{title:{es:"Diseño técnico",en:"Technical design",fr:"Conception technique",de:"Technisches Design"}[e],description:{es:"Selección de equipos Crestron, Sonos, IPTV y servidores Plex.",en:"Selection of Crestron, Sonos, IPTV and Plex server equipment.",fr:"Sélection des équipements Crestron, Sonos, IPTV et serveurs Plex.",de:"Auswahl von Crestron-, Sonos-, IPTV- und Plex-Serverausrüstung."}[e]},{title:{es:"Integración domótica",en:"Home automation",fr:"Domotique",de:"Hausautomation"}[e],description:{es:"Interfaces táctiles y control desde dispositivos personales.",en:"Touch interfaces and control from personal devices.",fr:"Interfaces tactiles et contrôle depuis les appareils personnels.",de:"Touch-Interfaces und Steuerung von persönlichen Geräten."}[e]},{title:{es:"Calibración continua",en:"Continuous calibration",fr:"Calibration continue",de:"Kontinuierliche Kalibrierung"}[e],description:{es:"Soporte remoto y ajustes durante la navegación.",en:"Remote support and adjustments during navigation.",fr:"Support à distance et ajustements pendant la navigation.",de:"Fernsupport und Anpassungen während der Navigation."}[e]}],caseStudy:{company:"Yate 38 m",challenge:"Experiencias AV fragmentadas y dificil control por parte de la tripulacion.",solution:"Implementamos matriz 4K, audio oculto y escenas Crestron predefinidas.",result:"Uso intuitivo y satisfaccion total de invitados y tripulacion."},faq:[{question:{es:"¿Podemos reutilizar equipos actuales?",en:"Can we reuse existing equipment?",fr:"Pouvons-nous réutiliser l'équipement existant ?",de:"Können wir vorhandene Geräte wiederverwenden?"}[e],answer:{es:"Sí, integramos hardware existente y lo combinamos con nuevas soluciones cuando es necesario.",en:"Yes, we integrate existing hardware and combine it with new solutions when necessary.",fr:"Oui, nous intégrons le matériel existant et le combinons avec de nouvelles solutions si nécessaire.",de:"Ja, wir integrieren vorhandene Hardware und kombinieren sie bei Bedarf mit neuen Lösungen."}[e]},{question:{es:"¿Ofrecéis ajustes remotos?",en:"Do you offer remote adjustments?",fr:"Proposez-vous des ajustements à distance ?",de:"Bieten Sie Fernanpassungen an?"}[e],answer:{es:"Monitorizamos el sistema y aplicamos actualizaciones o afinaciones bajo demanda.",en:"We monitor the system and apply updates or fine-tuning on demand.",fr:"Nous surveillons le système et appliquons des mises à jour ou des ajustements sur demande.",de:"Wir überwachen das System und wenden bei Bedarf Updates oder Feinabstimmungen an."}[e]}]}))},{id:"iot-surveillance",slug:"iot-vigilancia-yates",icon:"automation",metrics:[{id:"automation",value:"Smart",label:{es:"Automatizacion",en:"Automation",fr:"Automatisation",de:"Automatisierung"}},{id:"cctv",value:"360 degrees",label:{es:"Cobertura CCTV",en:"CCTV coverage",fr:"Couverture CCTV",de:"CCTV-Abdeckung"}}],locales:ie(e=>({name:{es:"IoT y Sistemas de Videovigilancia",en:"IoT & Video Surveillance Systems",fr:"IoT et Systèmes de Vidéosurveillance",de:"IoT- und Videoüberwachungssysteme"}[e],shortDescription:{es:"Automatización integral con control inteligente de cabinas, iluminación y cámaras con acceso seguro.",en:"Comprehensive automation with intelligent control of cabins, lighting and cameras with secure access.",fr:"Automatisation complète avec contrôle intelligent des cabines, de l'éclairage et des caméras avec accès sécurisé.",de:"Umfassende Automatisierung mit intelligenter Steuerung von Kabinen, Beleuchtung und Kameras mit sicherem Zugang."}[e],hero:{tagline:{es:"Control total y seguridad",en:"Total control and security",fr:"Contrôle total et sécurité",de:"Vollständige Kontrolle und Sicherheit"}[e],description:{es:"Integramos iluminación, clima, monitorización NMEA 2000 y CCTV en una sola plataforma accesible desde cualquier lugar.",en:"We integrate lighting, climate, NMEA 2000 monitoring and CCTV in a single platform accessible from anywhere.",fr:"Nous intégrons l'éclairage, le climat, la surveillance NMEA 2000 et la vidéosurveillance dans une seule plateforme accessible de partout.",de:"Wir integrieren Beleuchtung, Klima, NMEA 2000-Überwachung und CCTV in einer einzigen Plattform, die von überall aus zugänglich ist."}[e],primaryCta:{label:Z[e],href:ce},secondaryCta:{label:oe[e],href:le}},benefits:[{title:{es:"Plataforma centralizada",en:"Centralized platform",fr:"Plateforme centralisée",de:"Zentralisierte Plattform"}[e],description:{es:"Escenas, alertas y estados en tiempo real para tripulación y propietarios.",en:"Scenes, alerts and real-time status for crew and owners.",fr:"Scènes, alertes et états en temps réel pour l'équipage et les propriétaires.",de:"Szenen, Warnungen und Echtzeitstatus für die Besatzung und die Eigentümer."}[e]},{title:{es:"Cabinas personalizadas",en:"Custom cabins",fr:"Cabines personnalisées",de:"Benutzerdefinierte Kabinen"}[e],description:{es:"Cada invitado ajusta ambiente y entretenimiento desde su dispositivo.",en:"Each guest adjusts ambiance and entertainment from their device.",fr:"Chaque invité ajuste l'ambiance et le divertissement depuis son appareil.",de:"Jeder Gast passt die Atmosphäre und Unterhaltung von seinem Gerät aus an."}[e]},{title:{es:"Vigilancia avanzada",en:"Advanced surveillance",fr:"Surveillance avancée",de:"Erweiterte Überwachung"}[e],description:{es:"Streaming multiestancia, grabación redundante y accesos cifrados.",en:"Multi-room streaming, redundant recording and encrypted access.",fr:"Streaming multi-pièces, enregistrement redondant et accès cryptés.",de:"Streaming in mehreren Räumen, redundante Aufzeichnung und verschlüsselter Zugriff."}[e]}],process:[{title:"Inventario IoT",description:"Revision de sensores, actuadores y camaras existentes."},{title:"Integracion NMEA 2000",description:"Conectamos datos de navegacion y alarmas a la nube."},{title:"Automatizacion por escenas",description:"Programamos modos day/night, atraque o navegacion."},{title:"Formacion tripulacion",description:"Capacitamos al personal y entregamos manuales digitales."}],caseStudy:{company:"Catamaran 30 m",challenge:"Faltaba control centralizado y acceso remoto seguro.",solution:"Instalamos plataforma IoT con escenas por cabina y CCTV con autenticacion reforzada.",result:"Tripulacion reduce tiempos de respuesta y propietarios monitorizan el yate desde tierra."},faq:[{question:"Que dispositivos soportais?",answer:"Integramos iluminacion KNX, climatizacion, sistemas NMEA 2000 y camaras IP compatibles."},{question:"Se puede acceder desde tierra?",answer:"Si, habilitamos acceso remoto cifrado con autenticacion multifactor."}]}))}],ar=ie(e=>({hero:{eyebrow:{es:"Servicios",en:"Services",fr:"Services",de:"Dienstleistungen"}[e],title:{es:"Tecnología inteligente para navegación perfecta",en:"Smart technology for seamless yachting",fr:"Technologie intelligente pour navigation fluide",de:"Intelligente Technologie für nahtloses Yachting"}[e],description:{es:"Integramos conectividad, ciberseguridad, AV e IoT con un equipo boutique de ingeniería telemática.",en:"We integrate connectivity, cybersecurity, AV and IoT with a boutique telematics engineering team.",fr:"Nous intégrons connectivité, cybersécurité, AV et IoT avec une équipe boutique d'ingénierie télématique.",de:"Wir integrieren Konnektivität, Cybersicherheit, AV und IoT mit einem Boutique-Telegrafie-Ingenieurteam."}[e],primaryCta:{label:Z[e],href:"/contact"},secondaryCta:{label:{es:"Ver portfolio",en:"View portfolio",fr:"Voir le portfolio",de:"Portfolio anzeigen"}[e],href:"/cases"}},intro:{eyebrow:{es:"Metodología",en:"Methodology",fr:"Méthodologie",de:"Methodik"}[e],title:{es:"Metodología a bordo",en:"Onboard methodology",fr:"Méthodologie à bord",de:"Onboard-Methodik"}[e],description:{es:"Auditoría técnica, diseño personalizado, integración cuidadosa y soporte remoto 24/7 para cada travesía.",en:"Technical audit, personalized design, careful integration and 24/7 remote support for every journey.",fr:"Audit technique, conception personnalisée, intégration soignée et support à distance 24/7 pour chaque traversée.",de:"Technische Prüfung, individuelles Design, sorgfältige Integration und 24/7-Remote-Support für jede Reise."}[e]},capabilities:{eyebrow:{es:"Capacidades",en:"Capabilities",fr:"Capacités",de:"Fähigkeiten"}[e],title:{es:"Servicios especializados",en:"Specialized Services",fr:"Services spécialisés",de:"Spezialisierte Services"}[e],description:{es:"Conectividad, ciberseguridad, AV e IoT integrados como un único ecosistema para la tripulación y los invitados.",en:"Comprehensive connectivity, cybersecurity, AV and IoT solutions designed specifically for the nautical environment and adapted to each vessel's needs.",fr:"Solutions complètes de connectivité, cybersécurité, AV et IoT conçues spécifiquement pour l'environnement nautique et adaptées aux besoins de chaque navire.",de:"Komplette Lösungen für Konnektivität, Cybersicherheit, AV und IoT, speziell für die nautische Umgebung entwickelt und an die Bedürfnisse jedes Schiffes angepasst."}[e]},steps:[{title:{es:"Auditoría técnica",en:"Technical audit",fr:"Audit technique",de:"Technische Prüfung"}[e],description:{es:"Inspeccionamos racks, cableado, cobertura satelital y necesidades de tripulación.",en:"We inspect racks, wiring, satellite coverage and crew needs.",fr:"Nous inspectons les racks, câblage, couverture satellite et besoins de l'équipage.",de:"Wir überprüfen Racks, Verkabelung, Satellitenabdeckung und die Bedürfnisse der Besatzung."}[e]},{title:{es:"Diseño personalizado",en:"Personalized design",fr:"Conception personnalisée",de:"Personalisierte Gestaltung"}[e],description:{es:"Arquitectura modular con los mejores fabricantes del mercado náutico.",en:"Modular architecture with the best manufacturers in the nautical market.",fr:"Architecture modulaire avec les meilleurs fabricants du marché nautique.",de:"Modulare Architektur mit den besten Herstellern des maritimen Marktes."}[e]},{title:{es:"Integración precisa",en:"Precise integration",fr:"Intégration précise",de:"Präzise Integration"}[e],description:{es:"Coordinamos con astilleros e interioristas respetando acabados y tiempos.",en:"We coordinate with shipyards and interior designers respecting finishes and timelines.",fr:"Nous coordonnons avec chantiers navals et décorateurs en respectant finitions et délais.",de:"Wir koordinieren mit Werften und Innenarchitekten und respektieren dabei Oberflächen und Zeitpläne."}[e]},{title:{es:"Soporte continuo",en:"Continuous support",fr:"Support continu",de:"Kontinuierliche Unterstützung"}[e],description:{es:"Monitorización 24/7, visitas planificadas y asistencia remota inmediata.",en:"24/7 monitoring, scheduled visits and immediate remote assistance.",fr:"Surveillance 24/7, visites planifiées et assistance à distance immédiate.",de:"24/7-Überwachung, geplante Besuche und sofortige Remote-Unterstützung."}[e]}],cta:{eyebrow:{es:"Siguiente paso",en:"Next step",fr:"Prochaine étape",de:"Nächster Schritt"}[e],title:{es:"Prepara tu próxima travesía con Netnautica",en:"Prepare your next journey with Netnautica",fr:"Préparez votre prochaine traversée avec Netnautica",de:"Bereiten Sie Ihre nächste Reise mit Netnautica vor"}[e],description:{es:"Agenda una consultoría sin compromiso y recibe un plan técnico detallado en menos de 48 horas.",en:"Schedule a no-commitment consultation and receive a detailed technical plan in less than 48 hours.",fr:"Planifiez une consultation sans engagement et recevez un plan technique détaillé en moins de 48 heures.",de:"Vereinbaren Sie eine unverbindliche Beratung und erhalten Sie innerhalb von 48 Stunden einen detaillierten technischen Plan."}[e],primaryCta:{label:Z[e],href:"/contact"}}})),de=(e,t)=>e?e[t]??e[Ve]??Object.values(e)[0]??{}:{},ot=(e,t)=>typeof e=="string"?e:e?e[t]??e[Ve]??Object.values(e)[0]??"":"";function An(){const{t:e,i18n:t}=P(),i=t.language,[n,a]=f.useState(""),[r,c]=f.useState(!1),[o,l]=f.useState({services:[],blogs:[]}),d=f.useMemo(()=>{const p=xn.map(g=>({id:g.id,slug:g.slug,icon:g.icon,name:de(g.locales,i).name,shortDescription:de(g.locales,i).shortDescription,category:"service",url:`/services/${g.slug}`}));return new K(p,{keys:[{name:"name",weight:.4},{name:"shortDescription",weight:.3},{name:"id",weight:.3}],threshold:.3,includeScore:!0,includeMatches:!0})},[i]),u=f.useMemo(()=>{const p=G.map(g=>({id:g.id,slug:ot(g.slug,i),title:de(g.locales,i).title,excerpt:de(g.locales,i).excerpt,category:g.category,publishedAt:g.publishedAt,author:g.author,url:`/blog/${ot(g.slug,i)}`}));return new K(p,{keys:[{name:"title",weight:.4},{name:"excerpt",weight:.3},{name:"category",weight:.2},{name:"author",weight:.1}],threshold:.3,includeScore:!0,includeMatches:!0})},[i]);f.useEffect(()=>{if(n.trim().length<2){l({services:[],blogs:[]}),c(!1);return}c(!0);const p=setTimeout(()=>{const g=d.search(n).slice(0,5),b=u.search(n).slice(0,5);l({services:g,blogs:b}),c(!1)},300);return()=>clearTimeout(p)},[n,d,u]);const m=(p,g)=>{if(!g||g.length===0)return p;const b=g[0];if(!b.indices||b.indices.length===0)return p;const[y,k]=b.indices[0],w=p.slice(0,y),D=p.slice(y,k+1),M=p.slice(k+1);return s.jsxs(s.Fragment,{children:[w,s.jsx("mark",{className:"bg-yellow-200 dark:bg-yellow-800 px-1 rounded",children:D}),M]})},h=o.services.length+o.blogs.length;return s.jsxs("div",{className:"w-full max-w-2xl mx-auto",children:[s.jsxs("div",{className:"relative",children:[s.jsxs("div",{className:"relative",children:[s.jsx(R,{name:"search",className:"absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400"}),s.jsx("input",{type:"text",value:n,onChange:p=>a(p.target.value),placeholder:e("search.placeholder","Buscar servicios y artículos..."),className:"w-full pl-12 pr-4 py-3 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors"}),n&&s.jsx("button",{onClick:()=>a(""),className:"absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors",children:s.jsx(R,{name:"x"})})]}),s.jsx(xe,{children:r&&s.jsx(Y.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"absolute right-12 top-1/2 transform -translate-y-1/2",children:s.jsx("div",{className:"w-4 h-4 border-2 border-brand-500 border-t-transparent rounded-full animate-spin"})})})]}),s.jsx(xe,{children:n.trim().length>=2&&s.jsxs(Y.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:"mt-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg max-h-96 overflow-y-auto",children:[h>0&&s.jsx("div",{className:"px-4 py-2 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50",children:s.jsxs("p",{className:"text-sm text-slate-600 dark:text-slate-300",children:[h," ",h===1?"resultado":"resultados"," encontrado",h===1?"":"s"]})}),h===0&&!r&&s.jsxs("div",{className:"px-4 py-8 text-center",children:[s.jsx(R,{name:"search",className:"w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-4"}),s.jsxs("p",{className:"text-slate-600 dark:text-slate-300",children:[e("search.noResults","No se encontraron resultados para"),' "',n,'"']}),s.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400 mt-2",children:e("search.tryDifferent","Prueba con diferentes palabras clave")})]}),o.services.length>0&&s.jsxs("div",{className:"border-b border-slate-200 dark:border-slate-700 last:border-b-0",children:[s.jsx("div",{className:"px-4 py-2 bg-brand-50 dark:bg-brand-500/10",children:s.jsxs("h3",{className:"text-sm font-semibold text-brand-700 dark:text-brand-300",children:[e("search.services","Servicios")," (",o.services.length,")"]})}),o.services.map((p,g)=>s.jsx(Y.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:g*.05},className:"border-b border-slate-100 dark:border-slate-700 last:border-b-0",children:s.jsx(L,{to:p.item.url,className:"block px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors",children:s.jsxs("div",{className:"flex items-start gap-3",children:[s.jsx("div",{className:"flex-shrink-0 w-8 h-8 bg-brand-100 dark:bg-brand-500/20 rounded-lg flex items-center justify-center",children:s.jsx(R,{name:p.item.icon,className:"w-4 h-4 text-brand-600 dark:text-brand-400"})}),s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsx("h4",{className:"text-sm font-medium text-slate-900 dark:text-white truncate",children:m(p.item.name,p.matches)}),s.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-300 mt-1 line-clamp-2",children:m(p.item.shortDescription,p.matches)})]}),s.jsx(R,{name:"chevron-right",className:"w-4 h-4 text-slate-400 flex-shrink-0"})]})})},p.item.id))]}),o.blogs.length>0&&s.jsxs("div",{children:[s.jsx("div",{className:"px-4 py-2 bg-blue-50 dark:bg-blue-500/10",children:s.jsxs("h3",{className:"text-sm font-semibold text-blue-700 dark:text-blue-300",children:[e("search.blog","Blog")," (",o.blogs.length,")"]})}),o.blogs.map((p,g)=>s.jsx(Y.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:g*.05},className:"border-b border-slate-100 dark:border-slate-700 last:border-b-0",children:s.jsx(L,{to:p.item.url,className:"block px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors",children:s.jsxs("div",{className:"flex items-start gap-3",children:[s.jsx("div",{className:"flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-500/20 rounded-lg flex items-center justify-center",children:s.jsx(R,{name:"file-text",className:"w-4 h-4 text-blue-600 dark:text-blue-400"})}),s.jsxs("div",{className:"flex-1 min-w-0",children:[s.jsx("h4",{className:"text-sm font-medium text-slate-900 dark:text-white truncate",children:m(p.item.title,p.matches)}),s.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-300 mt-1 line-clamp-2",children:m(p.item.excerpt,p.matches)}),s.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[s.jsx("span",{className:"text-xs text-slate-500 dark:text-slate-400",children:p.item.author}),s.jsx("span",{className:"text-xs text-slate-400",children:"•"}),s.jsx("span",{className:"text-xs text-slate-500 dark:text-slate-400",children:new Date(p.item.publishedAt).toLocaleDateString(i,{year:"numeric",month:"short",day:"numeric"})})]})]}),s.jsx(R,{name:"chevron-right",className:"w-4 h-4 text-slate-400 flex-shrink-0"})]})})},p.item.id))]})]})})]})}function Cn({isOpen:e,onClose:t}){const{t:i}=P();return f.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]),f.useEffect(()=>{const n=a=>{a.key==="Escape"&&t()};return e&&document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}},[e,t]),ht.createPortal(s.jsx(xe,{children:e&&s.jsxs(s.Fragment,{children:[s.jsx(Y.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",onClick:t,"aria-hidden":"true"}),s.jsx(Y.div,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},transition:{duration:.2},className:"fixed inset-x-4 top-20 z-50 mx-auto max-w-2xl sm:inset-x-6",children:s.jsxs("div",{className:"overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900",children:[s.jsxs("div",{className:"flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-slate-700",children:[s.jsx("h2",{className:"text-lg font-semibold text-slate-900 dark:text-white",children:i("search.title","Buscar en Netnautica")}),s.jsx("button",{onClick:t,className:"inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200","aria-label":i("search.close","Cerrar búsqueda"),children:s.jsx("svg",{className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),s.jsx("div",{className:"p-6",children:s.jsx(An,{})})]})})]})}),document.body)}function Tn(){const{t:e,i18n:t}=P(),[i,n]=f.useState(!1),[a,r]=f.useState(!1),c=ne();return f.useEffect(()=>{n(!1)},[c.pathname,c.search]),s.jsxs("header",{className:"sticky top-0 z-50 border-b border-slate-200/60 bg-white/90 backdrop-blur transition-colors supports-[backdrop-filter]:bg-white/70 dark:border-slate-800/60 dark:bg-slate-950/80",children:[s.jsxs("div",{className:"mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8",children:[s.jsx(xt,{className:"shrink-0"}),s.jsx("nav",{className:"hidden items-center gap-8 text-sm font-medium md:flex",children:Xe.map(o=>s.jsx(Oe,{to:Ze(o.id),className:({isActive:l})=>`relative text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300 ${l?"text-brand-600 dark:text-brand-300":""}`,children:s.jsx("span",{children:e(o.translationKey)})},o.id))}),s.jsxs("div",{className:"hidden items-center gap-3 md:flex",children:[s.jsx("button",{onClick:()=>r(!0),className:"inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-brand-400 hover:text-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-brand-500 dark:hover:text-brand-300","aria-label":e("search.open","Abrir búsqueda"),children:s.jsx("svg",{className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),s.jsx(Je,{}),s.jsx(tt,{}),s.jsx(L,{to:Ze("contact"),className:"inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500",children:s.jsx("span",{children:e("actions.requestQuote")})})]}),s.jsxs("button",{type:"button",className:"inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-brand-400 hover:text-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-brand-500 dark:hover:text-brand-300 md:hidden",onClick:()=>n(o=>!o),"aria-expanded":i,"aria-controls":"primary-navigation",children:[s.jsx("span",{className:"sr-only",children:e("navigation.toggle")}),i?s.jsxs("svg",{className:"h-5 w-5",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M18 6 6 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M6 6l12 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}):s.jsxs("svg",{className:"h-5 w-5",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[s.jsx("path",{d:"M4 6h16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M4 12h16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M4 18h16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]})]}),i&&s.jsxs("div",{className:"md:hidden","aria-live":"polite",children:[s.jsx("div",{className:"fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm","aria-hidden":"true",onClick:()=>n(!1)}),s.jsxs("div",{className:"fixed inset-x-4 top-20 z-50 origin-top rounded-3xl border border-slate-200/60 bg-white p-6 shadow-2xl shadow-slate-900/20 dark:border-slate-700/60 dark:bg-slate-900",children:[s.jsx("nav",{id:"primary-navigation",className:"flex flex-col gap-4 text-base font-semibold text-slate-700 dark:text-slate-200",children:Xe.map(o=>s.jsx(Oe,{to:Qe(o.id),className:({isActive:l})=>`rounded-xl px-4 py-3 transition hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-slate-800/80 ${l?"bg-brand-50 text-brand-600 dark:bg-slate-800/80 dark:text-brand-300":""}`,children:e(o.translationKey)},o.id))}),s.jsxs("div",{className:"mt-6 flex items-center justify-between gap-3",children:[s.jsx(Je,{className:"grow justify-center"}),s.jsx(tt,{})]}),s.jsx(L,{to:Qe("contact"),className:"mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500",children:e("actions.requestQuote")})]})]}),s.jsx(Cn,{isOpen:a,onClose:()=>r(!1)})]})}const Nn=new Date().getFullYear();function En(){const{t:e,i18n:t}=P(),i=t.language;return s.jsx("footer",{className:"border-t border-slate-200/60 bg-white/90 text-sm text-slate-600 transition-colors dark:border-slate-800/60 dark:bg-slate-950/80 dark:text-slate-300",children:s.jsxs("div",{className:"mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8",children:[s.jsxs("div",{className:"grid gap-10 md:grid-cols-[1.5fr_1fr]",children:[s.jsxs("div",{className:"flex flex-col gap-6",children:[s.jsx(xt,{}),s.jsx("p",{className:"max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-300",children:e("footer.about")}),s.jsxs("div",{className:"space-y-3 text-sm",children:[s.jsxs("div",{children:[s.jsx("span",{className:"font-semibold text-slate-700 dark:text-slate-200",children:"Email:"})," ",s.jsx("a",{href:`mailto:${te.email}`,className:"hover:text-brand-600 dark:hover:text-brand-300",children:te.email})]}),s.jsxs("div",{children:[s.jsx("span",{className:"font-semibold text-slate-700 dark:text-slate-200",children:"WhatsApp:"})," ",s.jsx("a",{href:`https://wa.me/${te.whatsapp[i].replace(/[^0-9]/g,"")}`,className:"hover:text-brand-600 dark:hover:text-brand-300",children:te.whatsapp[i]})]}),s.jsxs("div",{children:[s.jsxs("span",{className:"font-semibold text-slate-700 dark:text-slate-200",children:[e("footer.address"),":"]})," ",s.jsx("span",{children:te.address[i]})]})]}),s.jsx("div",{className:"flex gap-3 pt-2",children:s.jsxs("a",{href:"https://www.instagram.com/netnautica",target:"_blank",rel:"noreferrer",className:"inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-500 dark:hover:text-brand-300",children:[s.jsx("span",{className:"sr-only",children:"Instagram"}),s.jsxs("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:[s.jsx("path",{fillRule:"evenodd",d:"M12.017 0C8.396 0 7.929.016 6.71.077 5.493.137 4.677.277 3.967.598c-.741.322-1.369.754-1.993 1.378C1.35 2.6.918 3.228.596 3.969c-.321.71-.461 1.526-.522 2.743C.016 7.929 0 8.396 0 12.017c0 3.624.016 4.09.077 5.31.061 1.217.201 2.033.522 2.743.322.741.754 1.369 1.378 1.993.624.624 1.252 1.056 1.993 1.378.71.321 1.526.461 2.743.522 1.219.061 1.686.077 5.31.077 3.624 0 4.09-.016 5.31-.077 1.217-.061 2.033-.201 2.743-.522a5.402 5.402 0 001.993-1.378c.624-.624 1.056-1.252 1.378-1.993.321-.71.461-1.526.522-2.743.061-1.219.077-1.686.077-5.31 0-3.624-.016-4.09-.077-5.31-.061-1.217-.201-2.033-.522-2.743a5.402 5.402 0 00-1.378-1.993A5.402 5.402 0 0019.287.596c-.71-.321-1.526-.461-2.743-.522C15.326.016 14.859 0 11.234 0h.783zM12.017 2.162c3.555 0 3.977.014 5.373.072 1.296.059 2.001.274 2.471.454.621.241 1.064.53 1.529.994.464.465.753.908.994 1.529.18.47.395 1.175.454 2.471.058 1.396.072 1.818.072 5.373 0 3.555-.014 3.977-.072 5.373-.059 1.296-.274 2.001-.454 2.471-.241.621-.53 1.064-.994 1.529a4.124 4.124 0 01-1.529.994c-.47.18-1.175.395-2.471.454-1.396.058-1.818.072-5.373.072-3.555 0-3.977-.014-5.373-.072-1.296-.059-2.001-.274-2.471-.454a4.124 4.124 0 01-1.529-.994 4.124 4.124 0 01-.994-1.529c-.18-.47-.395-1.175-.454-2.471-.058-1.396-.072-1.818-.072-5.373 0-3.555.014-3.977.072-5.373.059-1.296.274-2.001.454-2.471.241-.621.53-1.064.994-1.529a4.124 4.124 0 011.529-.994c.47-.18 1.175-.395 2.471-.454 1.396-.058 1.818-.072 5.373-.072z"}),s.jsx("path",{fillRule:"evenodd",d:"M12.017 5.838a6.179 6.179 0 100 12.358 6.179 6.179 0 000-12.358zM12.017 16a4 4 0 110-8 4 4 0 010 8zm6.408-10.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"})]})]})})]}),s.jsx("div",{className:"grid grid-cols-2 gap-8",children:Ai.map(n=>s.jsxs("div",{children:[s.jsx("h3",{className:"text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400",children:e(n.translationKey)}),s.jsx("ul",{className:"mt-4 space-y-2 text-sm",children:n.links.map(a=>s.jsx("li",{children:s.jsx(L,{to:a.path.replace(":lang",t.language),className:"inline-flex items-center gap-2 text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300",children:s.jsx("span",{children:e(a.translationKey)})})},a.id))})]},n.id))})]}),s.jsxs("div",{className:"mt-12 flex flex-col gap-4 border-t border-slate-200/60 pt-6 text-xs text-slate-500 dark:border-slate-800/60 dark:text-slate-400 md:flex-row md:items-center md:justify-between",children:[s.jsxs("div",{children:["© ",Nn," Netnautica. ",e("footer.rights")]}),s.jsx("div",{className:"flex flex-wrap items-center gap-x-6 gap-y-2",children:Ci.map(n=>s.jsx(L,{to:n.path.replace(":lang",t.language),className:"hover:text-brand-600 dark:hover:text-brand-300",children:e(n.translationKey)},n.id))})]})]})})}const ct="netnautica-cookie-consent";function zn(){const{t:e}=P(),[t,i]=f.useState(!1);f.useEffect(()=>{if(typeof window>"u")return;window.localStorage.getItem(ct)||i(!0)},[]);const n=a=>{window.localStorage.setItem(ct,a),i(!1)};return t?s.jsx("div",{className:"fixed inset-x-0 bottom-4 z-50 px-4",children:s.jsxs("div",{className:"mx-auto flex max-w-4xl flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"text-sm font-semibold text-slate-900 dark:text-white",children:e("cookies.title")}),s.jsx("p",{className:"mt-2 text-sm text-slate-600 dark:text-slate-300",children:e("cookies.description")})]}),s.jsxs("div",{className:"flex flex-wrap gap-3",children:[s.jsx("button",{type:"button",onClick:()=>n("accepted"),className:"inline-flex items-center justify-center rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500",children:e("cookies.accept")}),s.jsx("button",{type:"button",onClick:()=>n("declined"),className:"inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200",children:e("cookies.decline")}),s.jsx(L,{to:"/legales/politica-de-cookies",className:"inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-brand-600 hover:text-brand-500",children:e("cookieBanner.manage")})]})]})}):null}function In(){const{t:e}=P();return s.jsxs("div",{className:"flex min-h-screen flex-col bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100",children:[s.jsx("a",{className:"skip-link",href:"#contenido-principal",children:e("accessibility.skipToContent")}),s.jsx(Tn,{}),s.jsxs("main",{id:"contenido-principal",className:"flex-1",children:[s.jsx(Wt,{})," "]}),s.jsx(En,{}),s.jsx(zn,{})]})}function Pn(){const{pathname:e,search:t,hash:i}=ne();return f.useEffect(()=>{i||window.scrollTo({top:0,behavior:"smooth"})},[e,t,i]),null}class Mn extends z.Component{constructor(t){super(t),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(t){return{hasError:!0}}componentDidCatch(t,i){console.error("ErrorBoundary caught an error:",t,i),this.setState({error:t,errorInfo:i})}render(){return this.state.hasError?s.jsx("div",{className:"min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950",children:s.jsxs("div",{className:"text-center p-8",children:[s.jsx("h1",{className:"text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4",children:"Algo salió mal"}),s.jsx("p",{className:"text-slate-600 dark:text-slate-300 mb-4",children:"Ha ocurrido un error inesperado. Por favor, recarga la página o intenta de nuevo."}),s.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-brand-600 text-white rounded-full hover:bg-brand-500",children:"Recargar página"}),!1]})}):this.props.children}}const qn=f.lazy(()=>A(()=>import("./HomePage-DwhsdPOI.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))),jn=f.lazy(()=>A(()=>import("./ServicesPage-BJuga6Pj.js"),__vite__mapDeps([9,1,2,3,4,5,6,7,8,10]))),Dn=f.lazy(()=>A(()=>import("./ServiceDetailPage-xrgavGoM.js"),__vite__mapDeps([11,1,2,3,4,5,6,8]))),Fn=f.lazy(()=>A(()=>import("./CaseStudiesPage-D-eYxhCw.js"),__vite__mapDeps([12,1,2,3,4,5,7,6,8]))),Vn=f.lazy(()=>A(()=>import("./AboutPage-BaB-vc1Q.js"),__vite__mapDeps([13,1,2,4,5,3,7,8,6]))),Ln=f.lazy(()=>A(()=>import("./ContactPage-CpUKmZlM.js"),__vite__mapDeps([14,1,2,4,5,3,6,8]))),Bn=f.lazy(()=>A(()=>import("./BlogListPage-BmBKvqG8.js"),__vite__mapDeps([15,1,2,3,4,5,8,7,16]))),Rn=f.lazy(()=>A(()=>import("./BlogPostPage-ChuQBtn9.js"),__vite__mapDeps([17,1,2,3,4,5,8,7,16]))),Wn=f.lazy(()=>A(()=>import("./LegalIndexPage-6lVr4xJF.js"),__vite__mapDeps([18,1,2,3,4,5,8,19]))),On=f.lazy(()=>A(()=>import("./LegalNoticePage-DXThIwB4.js"),__vite__mapDeps([20,1,2,19,21,4,5,3]))),Gn=f.lazy(()=>A(()=>import("./PrivacyPolicyPage-r1FrbQhb.js"),__vite__mapDeps([22,1,2,19,21,4,5,3]))),Kn=f.lazy(()=>A(()=>import("./CookiePolicyPage-BIp8ptmk.js"),__vite__mapDeps([23,1,2,19,21,4,5,3]))),Un=f.lazy(()=>A(()=>import("./NotFoundPage-Cqdyln21.js"),__vite__mapDeps([24,1,2,3,5]))),_n=()=>{const{t:e}=P();return s.jsxs("div",{className:"flex min-h-screen items-center justify-center bg-slate-50 text-slate-600 dark:bg-slate-950 dark:text-slate-300",children:[s.jsx("div",{className:"animate-spin rounded-full border-4 border-brand-200 border-t-brand-500 p-6","aria-hidden":"true"}),s.jsx("span",{className:"sr-only",children:e("actions.loading")})]})};function $n(){return s.jsxs(s.Fragment,{children:[s.jsx(Pn,{}),s.jsx(Mn,{children:s.jsx(f.Suspense,{fallback:s.jsx(_n,{}),children:s.jsx(Ot,{children:s.jsxs(S,{element:s.jsx(In,{}),children:[s.jsx(S,{index:!0,element:s.jsx(qn,{})}),s.jsx(S,{path:"aboutus",element:s.jsx(Vn,{})}),"             ",s.jsx(S,{path:"services",element:s.jsx(jn,{})}),"         ",s.jsx(S,{path:"services/:serviceSlug",element:s.jsx(Dn,{})})," ",s.jsx(S,{path:"cases",element:s.jsx(Fn,{})}),"         ",s.jsx(S,{path:"blog",element:s.jsx(Bn,{})}),"             ",s.jsx(S,{path:"blog/:slug",element:s.jsx(Rn,{})}),"       ",s.jsx(S,{path:"contact",element:s.jsx(Ln,{})}),"           ",s.jsx(S,{path:"legal",element:s.jsx(Wn,{})}),"          ",s.jsx(S,{path:"legal/notice",element:s.jsx(On,{})}),"  ",s.jsx(S,{path:"legal/privacy",element:s.jsx(Gn,{})})," ",s.jsx(S,{path:"legal/cookies",element:s.jsx(Kn,{})})," ",s.jsx(S,{path:"*",element:s.jsx(Un,{})})]})})})})]})}const{slice:Hn,forEach:Yn}=[];function Zn(e){return Yn.call(Hn.call(arguments,1),t=>{if(t)for(const i in t)e[i]===void 0&&(e[i]=t[i])}),e}function Qn(e){return typeof e!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(i=>i.test(e))}const lt=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Xn=function(e,t){const n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},a=encodeURIComponent(t);let r=`${e}=${a}`;if(n.maxAge>0){const c=n.maxAge-0;if(Number.isNaN(c))throw new Error("maxAge should be a Number");r+=`; Max-Age=${Math.floor(c)}`}if(n.domain){if(!lt.test(n.domain))throw new TypeError("option domain is invalid");r+=`; Domain=${n.domain}`}if(n.path){if(!lt.test(n.path))throw new TypeError("option path is invalid");r+=`; Path=${n.path}`}if(n.expires){if(typeof n.expires.toUTCString!="function")throw new TypeError("option expires is invalid");r+=`; Expires=${n.expires.toUTCString()}`}if(n.httpOnly&&(r+="; HttpOnly"),n.secure&&(r+="; Secure"),n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"strict":r+="; SameSite=Strict";break;case"none":r+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return n.partitioned&&(r+="; Partitioned"),r},dt={create(e,t,i,n){let a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};i&&(a.expires=new Date,a.expires.setTime(a.expires.getTime()+i*60*1e3)),n&&(a.domain=n),document.cookie=Xn(e,t,a)},read(e){const t=`${e}=`,i=document.cookie.split(";");for(let n=0;n<i.length;n++){let a=i[n];for(;a.charAt(0)===" ";)a=a.substring(1,a.length);if(a.indexOf(t)===0)return a.substring(t.length,a.length)}return null},remove(e,t){this.create(e,"",-1,t)}};var Jn={name:"cookie",lookup(e){let{lookupCookie:t}=e;if(t&&typeof document<"u")return dt.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:i,cookieMinutes:n,cookieDomain:a,cookieOptions:r}=t;i&&typeof document<"u"&&dt.create(i,e,n,a,r)}},ea={name:"querystring",lookup(e){var n;let{lookupQuerystring:t}=e,i;if(typeof window<"u"){let{search:a}=window.location;!window.location.search&&((n=window.location.hash)==null?void 0:n.indexOf("?"))>-1&&(a=window.location.hash.substring(window.location.hash.indexOf("?")));const c=a.substring(1).split("&");for(let o=0;o<c.length;o++){const l=c[o].indexOf("=");l>0&&c[o].substring(0,l)===t&&(i=c[o].substring(l+1))}}return i}},ta={name:"hash",lookup(e){var a;let{lookupHash:t,lookupFromHashIndex:i}=e,n;if(typeof window<"u"){const{hash:r}=window.location;if(r&&r.length>2){const c=r.substring(1);if(t){const o=c.split("&");for(let l=0;l<o.length;l++){const d=o[l].indexOf("=");d>0&&o[l].substring(0,d)===t&&(n=o[l].substring(d+1))}}if(n)return n;if(!n&&i>-1){const o=r.match(/\/([a-zA-Z-]*)/g);return Array.isArray(o)?(a=o[typeof i=="number"?i:0])==null?void 0:a.replace("/",""):void 0}}}return n}};let $=null;const ut=()=>{if($!==null)return $;try{if($=typeof window<"u"&&window.localStorage!==null,!$)return!1;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch{$=!1}return $};var ia={name:"localStorage",lookup(e){let{lookupLocalStorage:t}=e;if(t&&ut())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:i}=t;i&&ut()&&window.localStorage.setItem(i,e)}};let H=null;const pt=()=>{if(H!==null)return H;try{if(H=typeof window<"u"&&window.sessionStorage!==null,!H)return!1;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch{H=!1}return H};var na={name:"sessionStorage",lookup(e){let{lookupSessionStorage:t}=e;if(t&&pt())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:i}=t;i&&pt()&&window.sessionStorage.setItem(i,e)}},aa={name:"navigator",lookup(e){const t=[];if(typeof navigator<"u"){const{languages:i,userLanguage:n,language:a}=navigator;if(i)for(let r=0;r<i.length;r++)t.push(i[r]);n&&t.push(n),a&&t.push(a)}return t.length>0?t:void 0}},sa={name:"htmlTag",lookup(e){let{htmlTag:t}=e,i;const n=t||(typeof document<"u"?document.documentElement:null);return n&&typeof n.getAttribute=="function"&&(i=n.getAttribute("lang")),i}},ra={name:"path",lookup(e){var a;let{lookupFromPathIndex:t}=e;if(typeof window>"u")return;const i=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(i)?(a=i[typeof t=="number"?t:0])==null?void 0:a.replace("/",""):void 0}},oa={name:"subdomain",lookup(e){var a,r;let{lookupFromSubdomainIndex:t}=e;const i=typeof t=="number"?t+1:1,n=typeof window<"u"&&((r=(a=window.location)==null?void 0:a.hostname)==null?void 0:r.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(n)return n[i]}};let jt=!1;try{document.cookie,jt=!0}catch{}const Dt=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];jt||Dt.splice(1,1);const ca=()=>({order:Dt,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e});class Ft{constructor(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(t,i)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=t,this.options=Zn(i,this.options||{},ca()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=a=>a.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=n,this.addDetector(Jn),this.addDetector(ea),this.addDetector(ia),this.addDetector(na),this.addDetector(aa),this.addDetector(sa),this.addDetector(ra),this.addDetector(oa),this.addDetector(ta)}addDetector(t){return this.detectors[t.name]=t,this}detect(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,i=[];return t.forEach(n=>{if(this.detectors[n]){let a=this.detectors[n].lookup(this.options);a&&typeof a=="string"&&(a=[a]),a&&(i=i.concat(a))}}),i=i.filter(n=>n!=null&&!Qn(n)).map(n=>this.options.convertDetectedLanguage(n)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?i:i.length>0?i[0]:null}cacheUserLanguage(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;i&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(t)>-1||i.forEach(n=>{this.detectors[n]&&this.detectors[n].cacheUserLanguage(t,this.options)}))}}Ft.type="languageDetector";const la={hero:{eyebrow:"Tecnología náutica boutique",title:"Soluciones para el confort a bordo",subtitle:"Diseñamos e implementamos sistemas tecnológicos inteligentes que elevan el confort a bordo y optimizan la experiencia del usuario en cada travesía.",primaryCta:{label:"Explorar servicios",href:"/services"},secondaryCta:{label:"Ver blogs",href:"/blog"}},stats:[{label:"Proyectos de conectividad entregados",value:"12"},{label:"Especialistas en Starlink, AV e IoT",value:"Equipo boutique"},{label:"Base Palma - Operando globalmente",value:"Mediterráneo"}],highlights:[{title:"Ingeniería certificada",description:"Especialistas en telemática y TI integrando conectividad, ciberseguridad y AV para yates de lujo."},{title:"Fundadores hands-on",description:"Planificación, instalación a bordo y soporte ejecutados directamente por el equipo central."},{title:"Arquitecturas resilientes",description:"Multi-WAN, ciberseguridad proactiva y monitorización para que el yate nunca se desconecte."}],servicesSection:{eyebrow:"Servicios",title:"Cuatro pilares para una experiencia perfecta a bordo",description:"Conectividad global, ciberseguridad, integración AV y IoT & videovigilancia desplegados como un único ecosistema, diseñado para tripulación e invitados."},featuredServices:{connectivity:{title:"Conectividad Global",description:"Multi-WAN resiliente que combina Starlink, 4G/5G y WiFi 6 para mantener el yate siempre en línea.",features:["Multi-WAN inteligente","WiFi 6 premium","Gestión remota 24/7"]},cybersecurity:{title:"Ciberseguridad",description:"Perímetros digitales robustos con firewalls de nueva generación, segmentación y auditorías periódicas.",features:["Firewalls NGFW","Segmentación avanzada","Hardening IoT"]},avIntegration:{title:"Integración AV",description:"Entretenimiento inmersivo con distribución 4K, audio zonificado y control domótico personalizado.",features:["Distribución 4K","Audio por zonas","Espacios polivalentes"]},iotSurveillance:{title:"IoT y Sistemas de Videovigilancia",description:"Automatización integral con control inteligente de cabinas, iluminación y cámaras con acceso seguro.",features:["Plataforma centralizada","Cabinas personalizadas","Vigilancia avanzada"]}},servicesPageContent:{hero:{eyebrow:"Servicios",title:"Tecnología inteligente para navegación perfecta",description:"Integramos conectividad, ciberseguridad, AV e IoT con un equipo boutique de ingeniería telemática.",primaryCta:{label:"Contactar Netnautica",href:"/contact"},secondaryCta:{label:"Ver blogs",href:"/blog"}},intro:{title:"Metodología a bordo",description:"Auditoría técnica, diseño personalizado, integración cuidadosa y soporte remoto 24/7 para cada travesía."},steps:[{title:"Auditoría técnica",description:"Inspeccionamos racks, cableado, cobertura satelital y necesidades de tripulación."},{title:"Diseño personalizado",description:"Arquitectura modular con los mejores fabricantes del mercado náutico."},{title:"Integración precisa",description:"Coordinamos con astilleros e interioristas respetando acabados y tiempos."},{title:"Soporte continuo",description:"Monitorización 24/7, visitas planificadas y asistencia remota inmediata."}],cta:{title:"Prepara tu próxima travesía con Netnautica",description:"Agenda una consultoría sin compromiso y recibe un plan técnico detallado en menos de 48 horas."}},services:{sectionHeaders:{methodology:"Metodología",capabilities:"Capacidades",specializedServices:"Servicios especializados",servicesDescription:"Soluciones integrales de conectividad, ciberseguridad, AV e IoT diseñadas específicamente para el entorno náutico y adaptadas a las necesidades de cada embarcación."},support:{title:"Soporte 24/7",description:"Monitorización continua de sistemas y asistencia técnica remota disponible en cualquier momento durante la navegación."},integration:{title:"Integración completa",description:"Todos los sistemas trabajan como un ecosistema unificado, optimizando el rendimiento y simplificando la gestión."},documentation:{title:"Documentación técnica",description:"Manuales detallados, diagramas de red y protocolos de mantenimiento entregados con cada instalación."}},technologySection:{eyebrow:"Tecnología",title:"Tecnología de vanguardia",description:"Trabajamos con Starlink, Ubiquiti, Peplink, Fortinet y Crestron para garantizar una infraestructura actualizada y soporte global.",partners:[{name:"Starlink",copy:"Conectividad por satélite LEO y despliegue de hardware marítimo."},{name:"Peplink",copy:"Enrutadores Multi-WAN con bonding y conmutación automática."},{name:"Fortinet",copy:"Ciberseguridad de próxima generación con políticas Zero Trust."},{name:"Crestron",copy:"Control AV y automatización con interfaces personalizadas."},{name:"UniFi",copy:"Redes WiFi 6 mesh de alto rendimiento con gestión centralizada."}]},techStack:{eyebrow:"Stack tecnológico",title:"Tecnologías que desplegamos",items:["Starlink","Peplink","Unifi"]},casesSection:{heading:"Proyectos recientes",description:"Ingeniería Multi-WAN, políticas Zero Trust y automatización AV desplegadas junto a capitanes y astilleros."},cases:[{id:"mediterranean-connectivity",slug:"charter-fleet-connectivity",industry:"Charter Mediterráneo",metrics:[{label:"Disponibilidad de red",value:">99 %"},{label:"Tiempo de conmutación",value:"<10 s"}],challenge:"Una flota charter sufría desconexiones al moverse de puertos con cobertura limitada a travesías en mar abierto.",solution:"Diseñamos una arquitectura multi-WAN con routers Peplink, Starlink marítimo y backup VSAT gestionado centralmente.",result:"Conectividad continua durante toda la temporada y monitorización remota 24/7."},{id:"digital-fortress",slug:"superyacht-cybersecurity-reinforcement",industry:"Superyate 50m",metrics:[{label:"Segmentos de red",value:"4 capas"},{label:"Incidentes críticos",value:"0"}],challenge:"El acceso de invitados estaba poniendo en riesgo los sistemas de navegación y entretenimiento.",solution:"Implementamos Fortinet NGFW, VLANs dedicadas y autenticación multi-factor con monitorización SIEM.",result:"Cero incidentes en la última campaña y superación exitosa de auditoría externa."},{id:"immersive-av",slug:"av-integration-38m",industry:"Mejora entretenimiento",metrics:[{label:"Zonas AV",value:"8+"},{label:"Resolución",value:"4K HDR"}],challenge:"Un yate de 38 metros quería unificar cine, reuniones y música con control simple para la tripulación.",solution:"Integramos matriz UHD, audio oculto, escenas personalizadas y paneles Crestron sincronizados con domótica.",result:"Experiencia multi-sala fluida y adopción completa por tripulación e invitados."}],blogSection:{eyebrow:"Blog",title:"Guías técnicas y recursos de Netnautica",description:"Explora nuestras publicaciones sobre conectividad, ciberseguridad y entretenimiento a bordo.",ctaLabel:"Ir al blog"},faqSection:{title:"Preguntas frecuentes",items:[{question:"¿Cómo aseguran la conectividad estable durante la navegación?",answer:"Auditamos rutas y puertos, combinamos Starlink, 4G/5G y VSAT con routers multi-WAN y monitorización remota 24/7."},{question:"¿Pueden trabajar con nuestra tripulación e instaladores?",answer:"Sí, nos coordinamos con capitanes, astilleros y diseñadores de interiores para integrar cableado, racks y automatización sin afectar acabados."},{question:"¿El soporte incluye ciberseguridad e IoT?",answer:"Nuestro plan cubre firewalls, segmentación, actualizaciones IoT y asistencia remota para resolver incidentes en minutos."}]},contactCta:{title:"Preparados para tu próxima travesía",description:"Comparte el estado actual de tu yate y diseñaremos una hoja de ruta tecnológica realista en menos de 48 horas.",primary:{label:"Contactar Netnautica",href:"/contact"},secondary:{label:"Ver servicios",href:"/services"}}},da={home:"Inicio",services:"Servicios",cases:"Proyectos",about:"Nosotros",blog:"Blog",contact:"Contacto",toggle:"Abrir o cerrar menu",language:"Seleccionar idioma"},ua={requestQuote:"Contactar Netnautica",toggleTheme:"Cambiar modo",viewAll:"Ver todos",readMore:"Leer mas",learnMore:"Detalles",next:"Siguiente",previous:"Anterior",submit:"Enviar",start:"Comenzar",loading:"Cargando..."},pa={title:"Blog",subtitle:"Artículos sobre navegación náutica y tecnología marina",readMore:"Leer más",backToBlog:"Volver al blog",relatedPosts:"Entradas relacionadas",noPosts:"No hay entradas disponibles en este momento.",postNotFound:"Entrada no encontrada"},ma={about:"Ingenieria boutique para yates de lujo. Conectividad, ciberseguridad, AV e IoT desde Palma de Mallorca.",company:"Compania",services:"Servicios",newsletterTitle:"Newsletter",newsletterCopy:"Recibe guias sobre conectividad, ciberseguridad y entretenimiento a bordo.",newsletterLabel:"Introduce tu email",newsletterButton:"Suscribirme",rights:"Todos los derechos reservados.",phone:"Telefono",address:"Direccion",schedule:"Horario"},ga={sectionHeaders:{methodology:"Metodología",capabilities:"Capacidades",specializedServices:"Servicios especializados",servicesDescription:"Conectividad, ciberseguridad, AV e IoT integrados como un único ecosistema para la tripulación y los invitados.",nextStep:"Siguiente paso"},connectivity:{title:"Conectividad Global",description:"Arquitecturas multi-WAN con Starlink, VSAT y 4G/5G para conectividad ininterrumpida en cualquier océano.",features:{redundancy:"Redundancia automática entre múltiples proveedores",starlink:"Integración Starlink marítima certificada",peplink:"Routers Peplink con bonding de enlaces"},cta:"Ver conectividad"},cybersecurity:{title:"Ciberseguridad Náutica",description:"Protección Zero Trust con Fortinet, segmentación de red y monitorización 24/7 para activos críticos.",features:{firewall:"Firewall de nueva generación con IA",encryption:"Encriptación end-to-end en todos los datos",monitoring:"Monitorización SIEM y respuesta automática"},cta:"Ver ciberseguridad"},av:{title:"Integración AV",description:"Sistemas de entretenimiento y control unificados con Crestron para una experiencia premium a bordo.",features:{crestron:"Control Crestron con interfaces personalizadas",distribution:"Distribución UHD 4K en múltiples zonas",automation:"Automatización integrada con domótica"},cta:"Ver integración AV"},support:{title:"Soporte 24/7",description:"Monitorización remota, alertas y coordinación con tripulación en minutos."},integration:{title:"Integración boutique",description:"Trabajamos con instaladores homologados respetando cada detalle del interior."},documentation:{title:"Documentación clara",description:"Entregamos manuales digitales y guías rápidas para tripulación y propietarios."},customDevelopment:"Conectividad Global",growthMarketing:"Ciberseguridad",marketingAutomation:"Integración AV",uxUi:"IoT y Videovigilancia",iot:{title:"IoT y Sistemas de Videovigilancia",description:"Automatización integral con control inteligente de cabinas, iluminación y cámaras con acceso seguro.",features:{automation:"Automatización",smart:"Smart",cctv:"Cobertura CCTV",degrees:"360 degrees"},cta:"Contactar Netnautica"}},ha={notice:"Aviso legal",privacy:"Privacidad",cookies:"Cookies"},va={title:"Uso de Cookies",description:"Utilizamos cookies para mejorar tu experiencia de navegación, analizar el tráfico del sitio y personalizar el contenido. Al continuar navegando, aceptas nuestro uso de cookies.",accept:"Aceptar",decline:"Rechazar",manage:"Gestionar"},fa={linkedin:"LinkedIn",twitter:"X/Twitter",youtube:"YouTube",github:"GitHub"},ba={headings:{pillars:"Lo que nos define",timeline:"Nuestra evolucion",culture:"Como trabajamos"},cta:{primary:"Agenda una llamada",secondary:"Ver servicios"}},ya={step:"Paso {{current}} de {{total}}",required:"Campo obligatorio",invalidEmail:"Introduce un email válido",invalidPhone:"Introduce un teléfono válido",consent:"Acepto la política de privacidad",selectPlaceholder:"Selecciona una opción"},ka={placeholder:"Buscar servicios y artículos...",noResults:"No se encontraron resultados para",tryDifferent:"Prueba con diferentes palabras clave",services:"Servicios",blog:"Blog",title:"Buscar en Netnautica",close:"Cerrar búsqueda",open:"Abrir búsqueda"},Sa={title:"Cuéntanos sobre tu proyecto a bordo",subtitle:"Planificamos sistemas de conectividad, seguridad y entretenimiento adaptados a cada ruta y tripulación.",success:"Gracias por contactar. Responderemos en menos de 24 horas laborables.",errors:{generic:"Ha ocurrido un error. Por favor, inténtalo de nuevo."},labels:{name:"Nombre",email:"Email",phone:"Teléfono",company:"Nombre del yate/empresa",role:"Posición",website:"Sitio web",service:"Servicio prioritario",budget:"Presupuesto estimado",timeline:"Plazo deseado",message:"Describe necesidades técnicas",consent:"He leído y acepto la política de privacidad"},placeholders:{name:"Nombre completo",email:"nombre@netnautica.com",phone:"+34 600 000 000",company:"Nombre del yate",role:"Capitán / ETO",website:"https://",message:"Queremos implementar Starlink con backup 4G/5G..."}},wa={skipToContent:"Ir al contenido principal",openMenu:"Abrir menú de navegación",closeMenu:"Cerrar menú de navegación",mainNavigation:"Navegación principal"},xa={pageTitle:"Proyectos Netnautica",pageDescription:"Implementaciones reales de multi-WAN, ciberseguridad y AV para yates de lujo.",heroEyebrow:"Proyectos Netnautica",heroTitle:"Implementaciones recientes a bordo de nuestros clientes",heroDescription:"Arquitecturas multi-WAN, refuerzos de ciberseguridad y experiencias AV diseñadas junto a capitanes y astilleros.",toolkit:"Herramientas",projectPillars:"Pilares del proyecto",description:"Ingeniería multi-WAN, políticas Zero Trust y automatización AV/IoT.",planning:"Planificación con capitanes y ETO para dimensionar redes y racks.",integration:"Integración de Starlink, Peplink, Fortinet y Crestron según cada uso a bordo.",monitoring:"Monitorización remota 24/7 y soporte inmediato durante temporada.",challenge:"Reto",solution:"Solución",result:"Resultado"},Aa={eyebrow:"Servicios Destacados",title:{line1:"Soluciones que",line2:"marcan la diferencia"},description:"Descubre nuestras soluciones más innovadoras, diseñadas específicamente para el entorno náutico",services:{connectivity:{title:"Conectividad Global",description:"Multi-WAN resiliente combinando Starlink, 4G/5G y WiFi 6 para mantener el yate siempre conectado.",features:{redundancy:"Redundancia activa Multi-WAN",starlink:"Cobertura satelital Starlink+",peplink:"Enrutadores Peplink profesionales"},cta:"Ver conectividad"},cybersecurity:{title:"Ciberseguridad Náutica",description:"Protección avanzada con Fortinet, cifrado de extremo a extremo y monitorización proactiva 24/7.",features:{firewall:"Firewall de nueva generación",encryption:"Cifrado punto a punto",monitoring:"Monitorización continua"},cta:"Ver ciberseguridad"},av:{title:"Integración AV",description:"Sistemas de entretenimiento y automatización Crestron con distribución HDMI y control unificado.",features:{crestron:"Automatización Crestron",distribution:"Distribución HDMI profesional",automation:"Control unificado"},cta:"Ver integración AV"},iot:{title:"IoT & Videovigilancia",description:"Automatización inteligente, CCTV 360° y sistemas de control ambiental para máxima eficiencia.",features:{automation:"Automatización inteligente",smart:"Control inteligente",cctv:"CCTV 360°",degrees:"360° cobertura"},cta:"Ver IoT & vigilancia"}}},Ca={pageNotFound:"Página no encontrada",pageNotFoundDescription:"Lo sentimos, no hemos encontrado la página solicitada. Comprueba la URL o regresa a inicio.",backToHome:"Volver al inicio"},Ta={home:la,navigation:da,actions:ua,blog:pa,footer:ma,services:ga,legal:ha,cookies:va,social:fa,about:ba,forms:ya,search:ka,contact:Sa,accessibility:wa,cases:xa,carousel:Aa,errors:Ca},Na={home:"Home",services:"Services",cases:"Projects",about:"About",blog:"Blog",contact:"Contact",toggle:"Toggle navigation",language:"Select language"},Ea={requestQuote:"Contact Netnautica",toggleTheme:"Toggle mode",viewAll:"View all",readMore:"Read more",learnMore:"Learn more",next:"Next",previous:"Previous",submit:"Send",start:"Start",loading:"Loading..."},za={title:"Blog",subtitle:"Articles about nautical navigation and marine technology",readMore:"Read more",backToBlog:"Back to blog",relatedPosts:"Related posts",noPosts:"No posts available at this time.",postNotFound:"Post not found"},Ia={about:"Boutique engineering for luxury yachts. Connectivity, cybersecurity, AV and IoT from Palma de Mallorca.",company:"Company",services:"Services",newsletterTitle:"Newsletter",newsletterCopy:"Receive insights on connectivity, cybersecurity and onboard entertainment.",newsletterLabel:"Enter your email",newsletterButton:"Subscribe",rights:"All rights reserved.",phone:"Phone",address:"Address",schedule:"Schedule"},Pa={customDevelopment:"Worldwide Connectivity",growthMarketing:"Cybersecurity",marketingAutomation:"AV System Integration",uxUi:"IoT & Video Surveillance",iot:{title:"IoT & Video Surveillance Systems",description:"Comprehensive automation with intelligent cabin control, lighting and secure camera access.",features:{automation:"Automation",smart:"Smart",cctv:"CCTV Coverage",degrees:"360 degrees"},cta:"Contact Netnautica"}},Ma={notice:"Legal notice",privacy:"Privacy",cookies:"Cookies"},qa={title:"Cookie Usage",description:"We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By continuing to browse, you accept our use of cookies.",accept:"Accept",decline:"Decline",manage:"Manage"},ja={linkedin:"LinkedIn",twitter:"X/Twitter",youtube:"YouTube",github:"GitHub"},Da={headings:{pillars:"What defines us",timeline:"Our evolution",culture:"How we work"},cta:{primary:"Book a call",secondary:"View services"}},Fa={step:"Step {{current}} of {{total}}",required:"Required field",invalidEmail:"Enter a valid email",invalidPhone:"Enter a valid phone",consent:"I accept the privacy policy",selectPlaceholder:"Select an option"},Va={placeholder:"Search services and articles...",noResults:"No results found for",tryDifferent:"Try different keywords",services:"Services",blog:"Blog",title:"Search Netnautica",close:"Close search",open:"Open search"},La={title:"Tell us about your onboard project",subtitle:"We plan connectivity, security and entertainment systems tailored to each route and crew.",success:"Thank you for reaching out. We'll respond within 24 business hours.",errors:{generic:"An error occurred. Please try again."},labels:{name:"Name",email:"Email",phone:"Phone",company:"Yacht/company name",role:"Position",website:"Website",service:"Priority service",budget:"Estimated budget",timeline:"Desired timeline",message:"Describe technical needs",consent:"I have read and accept the privacy policy"},placeholders:{name:"Full name",email:"name@netnautica.com",phone:"+34 600 000 000",company:"Yacht name",role:"Captain / ETO",website:"https://",message:"We want to deploy Starlink with 4G/5G backup..."},options:{budget:["< 10,000 EUR","10,000 - 30,000 EUR","30,000 - 60,000 EUR","> 60,000 EUR"],timeline:["Immediate","Next 3 months","Next season","Flexible"]}},Ba={hero:{eyebrow:"Services",title:"Smart technology for seamless yachting",description:"We integrate connectivity, cybersecurity, AV and IoT with a boutique telematics engineering team.",primaryCta:{label:"Contact Netnautica",href:"/contact"},secondaryCta:{label:"View portfolio",href:"/cases"}},intro:{title:"Onboard methodology",description:"Technical audit, custom design, precise integration and 24/7 remote support for each journey."},steps:[{title:"Technical audit",description:"We inspect racks, cabling, satellite coverage and crew needs."},{title:"Custom design",description:"Modular architecture with the best maritime manufacturers."},{title:"Precise integration",description:"We coordinate with shipyards and designers respecting finishes and timelines."},{title:"Continuous support",description:"24/7 monitoring, planned visits and immediate remote assistance."}],cta:{title:"Prepare your next journey with Netnautica",description:"Schedule a no-commitment consultation and receive a detailed technical plan within 48 hours.",primaryCta:{label:"Contact Netnautica",href:"/contact"},secondaryCta:{label:"View blogs",href:"/blog"}},framework:{title:"Project pillars",lines:["Planning with captains and ETOs to size networks and racks.","Integration of Starlink, Peplink, Fortinet and Crestron according to each onboard use.","24/7 remote monitoring and immediate support during season."]},pillars:[{title:"24/7 Support",description:"Remote monitoring, alerts and crew coordination in minutes."},{title:"Boutique integration",description:"We work with certified installers respecting every interior detail."},{title:"Clear documentation",description:"Digital manuals and quick guides for crew and owners."}]},Ra={connectivity:{id:"connectivity",slug:"global-yacht-connectivity",icon:"globe",name:"Worldwide Connectivity",shortDescription:"Resilient Multi-WAN combining Starlink, 4G/5G and WiFi 6 to keep the yacht always online.",metrics:[{id:"redundancy",value:"Multi-WAN",label:"Active redundancy"},{id:"starlink",value:"Starlink+",label:"Satellite coverage"}],benefits:[{title:"Smart Multi-WAN",description:"Starlink LEO, 4G/5G and VSAT with automatic failover."},{title:"Premium WiFi 6",description:"Complete coverage with QoS and segmentation for crew and guests."},{title:"24/7 Remote management",description:"Continuous monitoring and immediate adjustments for each route."}],process:[{title:"Signal audit",description:"Study of routes, ports and existing racks."},{title:"Redundant architecture",description:"Multi-link design with load balancing and automatic failover."},{title:"QoS optimization",description:"Critical application prioritization and guest profiles."},{title:"Continuous monitoring",description:"Cloud dashboard with alerts and proactive support."}],hero:{tagline:"Uninterrupted worldwide coverage",description:"Connectivity systems with automatic failover, load balancing and proactive monitoring for the Mediterranean and beyond.",primaryCta:{label:"Contact Netnautica",href:"/contact"},secondaryCta:{label:"View more services",href:"/services"}},caseStudy:{company:"45m Charter",challenge:"Outages between Starlink and 4G/5G during long routes.",solution:"Managed Multi-WAN with prioritization policies and VSAT backup.",result:">99 percent availability and recovery in under ten seconds."},faq:[{question:"Is Starlink subscription required?",answer:"We integrate Starlink where relevant but always combine multiple providers to maintain redundancy."},{question:"Is remote support included?",answer:"Yes, we monitor links 24/7 and adjust with the crew."}]},cybersecurity:{id:"cybersecurity",slug:"yacht-cybersecurity",icon:"shield",name:"Cybersecurity",shortDescription:"Robust digital perimeters with next-generation firewalls, segmentation and recurring audits.",metrics:[{id:"monitoring",value:"24/7",label:"Monitoring"},{id:"segments",value:"4 layers",label:"Segmentation"}],benefits:[{title:"NGFW Firewalls",description:"Fortinet and Peplink management with custom rules and continuous updates."},{title:"Advanced segmentation",description:"Separate networks for crew, guests, automation and instrumentation."},{title:"IoT hardening",description:"Controlled firmware, secure access and Zero Trust policy for each device."}],process:[{title:"Initial audit",description:"Asset inventory and vulnerability analysis."},{title:"Policy design",description:"VLAN definition, authentication and logging."},{title:"SIEM monitoring",description:"Proactive alerts and incident response."},{title:"Regular review",description:"Penetration testing and quarterly improvement plan."}],hero:{tagline:"Digital fortresses at sea",description:"Zero Trust networks with next-generation firewalls, VLAN segmentation and continuous security monitoring.",primaryCta:{label:"Contact Netnautica",href:"/contact"},secondaryCta:{label:"View more services",href:"/services"}},caseStudy:{company:"50m Superyacht",challenge:"Guest networks compromising navigation and AV systems.",solution:"Fortinet NGFW with dedicated VLANs and MFA.",result:"Zero incidents and successful security audit."},faq:[{question:"How do you protect guest access?",answer:"We implement dedicated VLANs with bandwidth limits and Zero Trust policies."},{question:"Can you secure IoT devices?",answer:"Yes, we control firmware updates and network access for each device."}]}},Wa={hero:{eyebrow:"Smart Technology for Seamless Yachting",title:"Solutions for onboard comfort",subtitle:"We design and implement smart technological systems that elevate onboard comfort and optimize the user experience across every voyage.",primaryCta:{label:"Explore services",href:"/services"},secondaryCta:{label:"View blogs",href:"/blog"}},stats:[{label:"Connectivity projects delivered",value:"12"},{label:"Specialists in Starlink, AV & IoT",value:"Boutique team"},{label:"Base Palma - Operating worldwide",value:"Mediterranean"}],highlights:[{title:"Certified engineering",description:"Telematics and IT specialists integrating connectivity, cybersecurity and AV for luxury yachts."},{title:"Hands-on founders",description:"Planning, onboard installation and support executed directly by the core team."},{title:"Resilient architectures",description:"Multi-WAN, proactive cybersecurity and monitoring so the yacht never disconnects."}],servicesSection:{eyebrow:"Services",title:"Four pillars for a seamless onboard experience",description:"Worldwide connectivity, cybersecurity, AV integration and IoT & surveillance are deployed as a single ecosystem, designed for crew and guests."},featuredServices:{connectivity:{title:"Global Connectivity",description:"Resilient multi-WAN combining Starlink, 4G/5G and WiFi 6 to keep the yacht always online.",features:["Intelligent multi-WAN","Premium WiFi 6","24/7 remote management"]},cybersecurity:{title:"Cybersecurity",description:"Robust digital perimeters with next-generation firewalls, segmentation and periodic audits.",features:["NGFW Firewalls","Advanced segmentation","IoT hardening"]},avIntegration:{title:"AV Integration",description:"Immersive entertainment with 4K distribution, zoned audio and personalized home automation control.",features:["4K distribution","Zone audio","Multipurpose spaces"]},iotSurveillance:{title:"IoT and Video Surveillance Systems",description:"Comprehensive automation with intelligent cabin control, lighting and cameras with secure access.",features:["Centralized platform","Custom cabins","Advanced surveillance"]}},servicesPageContent:{hero:{eyebrow:"Services",title:"Smart technology for seamless yachting",description:"We integrate connectivity, cybersecurity, AV and IoT with a boutique telematics engineering team.",primaryCta:{label:"Contact Netnautica",href:"/contact"},secondaryCta:{label:"View blogs",href:"/blog"}},intro:{title:"Onboard methodology",description:"Technical audit, personalized design, careful integration and 24/7 remote support for every journey."},steps:[{title:"Technical audit",description:"We inspect racks, wiring, satellite coverage and crew needs."},{title:"Personalized design",description:"Modular architecture with the best manufacturers in the nautical market."},{title:"Precise integration",description:"We coordinate with shipyards and interior designers respecting finishes and timelines."},{title:"Continuous support",description:"24/7 monitoring, scheduled visits and immediate remote assistance."}],cta:{title:"Prepare your next journey with Netnautica",description:"Schedule a no-commitment consultation and receive a detailed technical plan in less than 48 hours."}},services:{sectionHeaders:{methodology:"Methodology",capabilities:"Capabilities",specializedServices:"Specialized Services",servicesDescription:"Comprehensive connectivity, cybersecurity, AV and IoT solutions designed specifically for the nautical environment and adapted to each vessel's needs.",nextStep:"Next step"},connectivity:{title:"Global Connectivity",description:"Multi-WAN architectures with Starlink, VSAT and 4G/5G for uninterrupted connectivity across any ocean.",features:{redundancy:"Automatic redundancy across multiple providers",starlink:"Certified Starlink maritime integration",peplink:"Peplink routers with link bonding"},cta:"View connectivity"},cybersecurity:{title:"Maritime Cybersecurity",description:"Zero Trust protection with Fortinet, network segmentation and 24/7 monitoring for critical assets.",features:{firewall:"AI-powered next-generation firewall",encryption:"End-to-end encryption on all data",monitoring:"SIEM monitoring and automated response"},cta:"View cybersecurity"},av:{title:"AV Integration",description:"Unified entertainment and control systems with Crestron for premium onboard experiences.",features:{crestron:"Crestron control with custom interfaces",distribution:"UHD 4K distribution across multiple zones",automation:"Integrated automation with smart home systems"},cta:"View AV integration"},support:{title:"24/7 Support",description:"Continuous system monitoring and remote technical assistance available at any time during navigation."},integration:{title:"Complete integration",description:"All systems work as a unified ecosystem, optimizing performance and simplifying management."},documentation:{title:"Technical documentation",description:"Detailed manuals, network diagrams and maintenance protocols delivered with each installation."}},technologySection:{eyebrow:"Technology",title:"Cutting-edge technology",description:"We work with Starlink, Ubiquiti, Peplink, Fortinet and Crestron to ensure up-to-date infrastructure and global support.",partners:[{name:"Starlink",copy:"LEO satellite connectivity and maritime hardware deployment."},{name:"Ubiquiti",copy:"High-performance WiFi 6 mesh networks with centralized management."},{name:"Peplink",copy:"Multi-WAN routers with bonding and automatic failover."},{name:"Fortinet",copy:"Next-generation cybersecurity with Zero Trust policies."},{name:"Crestron",copy:"AV control and automation with customized interfaces."}]},techStack:{eyebrow:"Tech stack",title:"Technologies we deploy",items:["Starlink","Peplink","Unifi"]},casesSection:{heading:"Recent projects",description:"Multi-WAN engineering, Zero Trust policies and AV automation deployed alongside captains and shipyards."},cases:[{id:"mediterranean-connectivity",slug:"charter-fleet-connectivity",industry:"Mediterranean charter",metrics:[{label:"Network availability",value:">99 %"},{label:"Failover time",value:"<10 s"}],challenge:"A charter fleet suffered outages when moving from ports with limited coverage to open sea crossings.",solution:"We designed multi-WAN architecture with Peplink routers, maritime Starlink and centrally managed VSAT backup.",result:"Continuous connectivity throughout the season and 24/7 remote monitoring."},{id:"digital-fortress",slug:"superyacht-cybersecurity-reinforcement",industry:"50m Superyacht",metrics:[{label:"Network segments",value:"4 layers"},{label:"Critical incidents",value:"0"}],challenge:"Guest access was putting navigation and entertainment systems at risk.",solution:"We implemented Fortinet NGFW, dedicated VLANs and multi-factor authentication with SIEM monitoring.",result:"Zero incidents in the last campaign and successfully passed external audit."},{id:"immersive-av",slug:"av-integration-38m",industry:"Entertainment upgrade",metrics:[{label:"AV zones",value:"8+"},{label:"Resolution",value:"4K HDR"}],challenge:"A 38-meter yacht wanted to unify cinema, meetings and music with simple control for the crew.",solution:"We integrated UHD matrix, hidden audio, custom scenes and Crestron panels synchronized with home automation.",result:"Fluid multi-room experience and complete adoption by crew and guests."}],blogSection:{eyebrow:"Blog",title:"Netnautica technical guides and resources",description:"Explore our publications on connectivity, cybersecurity and onboard entertainment.",ctaLabel:"Go to blog"},faqSection:{title:"Frequently asked questions",items:[{question:"How do you ensure stable connectivity while sailing?",answer:"We audit routes and ports, combine Starlink, 4G/5G and VSAT with multi-WAN routers and 24/7 remote monitoring."},{question:"Can you work with our crew and installers?",answer:"Yes, we coordinate with captains, shipyards and interior designers to integrate cabling, racks and automation without affecting finishes."},{question:"Does support include cybersecurity and IoT?",answer:"Our plan covers firewalls, segmentation, IoT updates and remote assistance to resolve incidents in minutes."}]},contactCta:{title:"Ready for your next journey",description:"Share your yacht's current state and we'll design a realistic technology roadmap in under 48 hours.",primary:{label:"Contact Netnautica",href:"/contact"},secondary:{label:"View services",href:"/services"}}},Oa={skipToContent:"Skip to main content",openMenu:"Open navigation menu",closeMenu:"Close navigation menu",mainNavigation:"Main navigation"},Ga={pageTitle:"Netnautica Projects",pageDescription:"Real implementations of multi-WAN, cybersecurity and AV for luxury yachts.",heroEyebrow:"Netnautica Projects",heroTitle:"Recent implementations aboard our clients",heroDescription:"Multi-WAN architectures, cybersecurity reinforcements and AV experiences designed alongside captains and shipyards.",toolkit:"Toolkit",projectPillars:"Project pillars",description:"Multi-WAN engineering, Zero Trust policies and AV/IoT automation.",planning:"Planning with captains and ETOs to size networks and racks.",integration:"Integration of Starlink, Peplink, Fortinet and Crestron according to each onboard use.",monitoring:"24/7 remote monitoring and immediate support during season.",challenge:"Challenge",solution:"Solution",result:"Result"},Ka={eyebrow:"Featured Services",title:{line1:"Solutions that",line2:"make the difference"},description:"Discover our most innovative solutions, designed specifically for the nautical environment",services:{connectivity:{title:"Global Connectivity",description:"Resilient Multi-WAN combining Starlink, 4G/5G and WiFi 6 to keep the yacht always online.",features:{redundancy:"Multi-WAN active redundancy",starlink:"Starlink+ satellite coverage",peplink:"Professional Peplink routers"},cta:"View connectivity"},cybersecurity:{title:"Maritime Cybersecurity",description:"Advanced protection with Fortinet, end-to-end encryption and 24/7 proactive monitoring.",features:{firewall:"Next-generation firewall",encryption:"Point-to-point encryption",monitoring:"Continuous monitoring"},cta:"View cybersecurity"},av:{title:"AV Integration",description:"Crestron entertainment and automation systems with HDMI distribution and unified control.",features:{crestron:"Crestron automation",distribution:"Professional HDMI distribution",automation:"Unified control"},cta:"View AV integration"},iot:{title:"IoT & Surveillance",description:"Smart automation, 360° CCTV and environmental control systems for maximum efficiency.",features:{automation:"Smart automation",smart:"Intelligent control",cctv:"360° CCTV",degrees:"360° coverage"},cta:"View IoT & surveillance"}}},Ua={pageNotFound:"Page not found",pageNotFoundDescription:"Sorry, we couldn't find the page you're looking for. Please check the URL or return to home.",backToHome:"Back to home"},_a={navigation:Na,actions:Ea,blog:za,footer:Ia,services:Pa,legal:Ma,cookies:qa,social:ja,about:Da,forms:Fa,search:Va,contact:La,servicesPage:Ba,servicesData:Ra,home:Wa,accessibility:Oa,cases:Ga,carousel:Ka,errors:Ua},$a={home:"Accueil",services:"Services",cases:"Projets",about:"À propos",blog:"Blog",contact:"Contact",toggle:"Ouvrir ou fermer le menu",language:"Choisir la langue"},Ha={requestQuote:"Contacter Netnautica",toggleTheme:"Changer de mode",viewAll:"Tout voir",readMore:"En savoir plus",learnMore:"Détails",next:"Suivant",previous:"Précédent",submit:"Envoyer",start:"Commencer",loading:"Chargement..."},Ya={title:"Blog",subtitle:"Articles sur la navigation nautique et la technologie marine",readMore:"En savoir plus",backToBlog:"Retour au blog",relatedPosts:"Articles connexes",noPosts:"Aucun article disponible pour le moment.",postNotFound:"Article non trouvé"},Za={about:"Ingénierie boutique pour yachts de luxe. Connectivité, cybersécurité, AV et IoT depuis Palma de Majorque.",company:"Entreprise",services:"Services",newsletterTitle:"Newsletter",newsletterCopy:"Recevez nos conseils sur la connectivité, la cybersurveillance et le divertissement à bord.",newsletterLabel:"Entrez votre email",newsletterButton:"S'abonner",rights:"Tous droits réservés.",phone:"Téléphone",address:"Adresse",schedule:"Horaires"},Qa={customDevelopment:"Worldwide Connectivity",growthMarketing:"Cybersecurity",marketingAutomation:"AV System Integration",uxUi:"IoT & Video Surveillance",iot:{title:"IoT & Systèmes de Vidéosurveillance",description:"Automatisation complète avec contrôle intelligent des cabines, éclairage et accès sécurisé aux caméras.",features:{automation:"Automatisation",smart:"Smart",cctv:"Couverture CCTV",degrees:"360 degrés"},cta:"Contacter Netnautica"}},Xa={notice:"Mentions légales",privacy:"Confidentialité",cookies:"Cookies"},Ja={title:"Utilisation des Cookies",description:"Nous utilisons des cookies pour améliorer votre expérience de navigation, analyser le trafic du site et personnaliser le contenu. En continuant à naviguer, vous acceptez notre utilisation des cookies.",accept:"Accepter",decline:"Refuser",manage:"Gérer"},es={linkedin:"LinkedIn",twitter:"X/Twitter",youtube:"YouTube",github:"GitHub"},ts={headings:{pillars:"Notre ADN",timeline:"Notre évolution",culture:"Notre manière de travailler"},cta:{primary:"Rï¿½server un appel",secondary:"Voir les services"}},is={step:"Étape {{current}} sur {{total}}",required:"Champ obligatoire",invalidEmail:"Saisissez un email valide",invalidPhone:"Saisissez un téléphone valide",consent:"J'accepte la politique de confidentialité",selectPlaceholder:"Sélectionnez une option"},ns={placeholder:"Rechercher services et articles...",noResults:"Aucun résultat trouvé pour",tryDifferent:"Essayez différents mots-clés",services:"Services",blog:"Blog",title:"Rechercher Netnautica",close:"Fermer la recherche",open:"Ouvrir la recherche"},as={title:"Parlez-nous de votre projet à bord",subtitle:"Nous concevons des systèmes de connectivité, de sécurité et de divertissement adaptés à chaque route et équipage.",success:"Merci de votre message. Nous rï¿½pondrons sous 24 heures ouvrï¿½es.",errors:{generic:"Une erreur est survenue. Merci de rï¿½essayer."},labels:{name:"Nom",email:"Email",phone:"Tï¿½lï¿½phone",company:"Yacht ou entreprise",role:"Poste",website:"Site web",service:"Service prioritaire",budget:"Budget estimï¿½",timeline:"ï¿½chï¿½ance",message:"Dï¿½crivez les besoins techniques",consent:"J'ai lu et j'accepte la politique de confidentialitï¿½"},placeholders:{name:"Nom et prï¿½nom",email:"nom@netnautica.com",phone:"+34 600 000 000",company:"Nom du yacht",role:"Capitaine / ETO",website:"https://",message:"Nous souhaitons dï¿½ployer Starlink avec redondance 4G/5G..."},options:{budget:["< 10 000 EUR","10 000 - 30 000 EUR","30 000 - 60 000 EUR","> 60 000 EUR"],timeline:["Immï¿½diat","Dans 3 mois","Saison prochaine","Flexible"]}},ss={title:"Votre confidentialitï¿½ compte",description:"Nous utilisons des cookies techniques et analytiques pour offrir du support et amï¿½liorer l'expï¿½rience. Vous pouvez ajuster vos prï¿½fï¿½rences ï¿½ tout moment.",accept:"Tout accepter",decline:"Essentiels uniquement",manage:"Gï¿½rer les cookies"},rs={hero:{eyebrow:"Technologie intelligente pour la navigation",title:"Confort et contrôle à bord",subtitle:"Nous intégrons des systèmes technologiques intelligents qui élèvent le confort à bord et optimisent l'expérience à chaque traversée.",primaryCta:{label:"Explorer les services",href:"/services"},secondaryCta:{label:"Voir les blogs",href:"/blog"}},stats:[{label:"Projets de connectivite livrer",value:"12"},{label:"Specialistes Starlink, AV et IoT",value:"Equipe boutique"},{label:"Base Palma - Operations worldwide",value:"Mediterranee"}],highlights:[{title:"Ingenierie certifiee",description:"Specialistes telematiques et IT integrant connectivite, cybersurveillance et AV pour yachts de luxe."},{title:"Fondateurs impliques",description:"Planification, installation et support realises directement par l equipe nucleaire."},{title:"Architectures resilientes",description:"Multi-WAN, cybersurveillance proactive et monitoring pour rester connecte en permanence."}],servicesSection:{eyebrow:"Services",title:"Quatre piliers pour une experience fluide",description:"Connectivite mondiale, cybersurveillance, integration AV et IoT deployes comme un ecosysteme unique pour equipage et invites."},featuredServices:{connectivity:{title:"Connectivité Globale",description:"Multi-WAN résilient combinant Starlink, 4G/5G et WiFi 6 pour maintenir le yacht toujours en ligne.",features:["Multi-WAN intelligent","WiFi 6 premium","Gestion 24/7 à distance"]},cybersecurity:{title:"Cybersécurité",description:"Périmètres numériques robustes avec pare-feu nouvelle génération, segmentation et audits périodiques.",features:["Pare-feu NGFW","Segmentation avancée","Durcissement IoT"]},avIntegration:{title:"Intégration AV",description:"Divertissement immersif avec distribution 4K, audio zoné et contrôle domotique personnalisé.",features:["Distribution 4K","Audio par zones","Espaces polyvalents"]},iotSurveillance:{title:"IoT et Systèmes de Vidéosurveillance",description:"Automatisation complète avec contrôle intelligent des cabines, éclairage et caméras avec accès sécurisé.",features:["Plateforme centralisée","Cabines personnalisées","Surveillance avancée"]}},servicesPageContent:{hero:{eyebrow:"Services",title:"Technologie intelligente pour navigation fluide",description:"Nous integrons connectivite, cybersecurite, AV et IoT avec une equipe boutique d'ingenierie telematique.",primaryCta:{label:"Contacter Netnautica",href:"/contact"},secondaryCta:{label:"Voir les blogs",href:"/blog"}},intro:{title:"Methodologie a bord",description:"Audit technique, conception personnalisee, integration soignee et support a distance 24/7 pour chaque traversee."},steps:[{title:"Audit technique",description:"Nous inspectons les racks, cablage, couverture satellite et besoins de l'equipage."},{title:"Conception personnalisee",description:"Architecture modulaire avec les meilleurs fabricants du marche nautique."},{title:"Integration precise",description:"Nous coordonnons avec chantiers navals et decorateurs en respectant finitions et delais."},{title:"Support continu",description:"Surveillance 24/7, visites planifiees et assistance a distance immediate."}],cta:{title:"Preparez votre prochaine traversee avec Netnautica",description:"Planifiez une consultation sans engagement et recevez un plan technique detaille en moins de 48 heures."}},services:{sectionHeaders:{methodology:"Methodologie",capabilities:"Capacites",specializedServices:"Services specialises",servicesDescription:"Solutions completes de connectivite, cybersecurite, AV et IoT concues specifiquement pour l'environnement nautique et adaptees aux besoins de chaque navire.",nextStep:"Prochaine etape"},connectivity:{title:"Connectivite Globale",description:"Architectures multi-WAN avec Starlink, VSAT et 4G/5G pour une connectivite ininterrompue dans n'importe quel ocean.",features:{redundancy:"Redondance automatique entre plusieurs fournisseurs",starlink:"Integration Starlink maritime certifiee",peplink:"Routeurs Peplink avec bonding de liens"},cta:"Voir connectivite"},cybersecurity:{title:"Cybersecurite Maritime",description:"Protection Zero Trust avec Fortinet, segmentation reseau et surveillance 24/7 pour les actifs critiques.",features:{firewall:"Pare-feu nouvelle generation avec IA",encryption:"Chiffrement de bout en bout sur toutes les donnees",monitoring:"Surveillance SIEM et reponse automatique"},cta:"Voir cybersecurite"},av:{title:"Integration AV",description:"Systemes de divertissement et de controle unifies avec Crestron pour des experiences premium a bord.",features:{crestron:"Controle Crestron avec interfaces personnalisees",distribution:"Distribution UHD 4K sur plusieurs zones",automation:"Automatisation integree avec systemes domotiques"},cta:"Voir integration AV"},support:{title:"Support 24/7",description:"Surveillance continue des systemes et assistance technique a distance disponible a tout moment pendant la navigation."},integration:{title:"Integration complete",description:"Tous les systemes fonctionnent comme un ecosysteme unifie, optimisant les performances et simplifiant la gestion."},documentation:{title:"Documentation technique",description:"Manuels detailles, diagrammes de reseau et protocoles de maintenance livres avec chaque installation."}},technologySection:{eyebrow:"Technologie",title:"Technologie de pointe",description:"Nous travaillons avec Starlink, Ubiquiti, Peplink, Fortinet et Crestron pour garantir une infrastructure a jour et un support mondial.",partners:[{name:"Starlink",copy:"Connectivite satellite LEO et materiel maritime."},{name:"Ubiquiti",copy:"Reseaux mailles WiFi 6 haute performance avec gestion centralisee."},{name:"Peplink",copy:"Routeurs multi-WAN avec bonding et bascule automatique."},{name:"Fortinet",copy:"Cybersurveillance nouvelle generation avec politiques Zero Trust."},{name:"Crestron",copy:"Controle AV et automatisation via interfaces personnalisees."}]},techStack:{eyebrow:"Tech stack",title:"Technologies deployees",items:["Starlink","Peplink","Unifi"]},casesSection:{heading:"Implantations recentes",description:"Ingenierie multi-WAN, politiques Zero Trust et automatisation AV realisees avec capitaines et chantiers."},cases:[{id:"mediterranean-connectivity",slug:"flota-charter-conectividad",industry:"Charter mediterraneen",metrics:[{label:"Disponibilite reseau",value:">99 %"},{label:"Temps de bascule",value:"<10 s"}],challenge:"Une flotte charter subissait des coupures entre ports limites et haute mer.",solution:"Nous avons concu une architecture multi-WAN avec routeurs Peplink, Starlink maritime et secours VSAT gere.",result:"Connectivite continue toute la saison et monitoring 24/7."},{id:"digital-fortress",slug:"refuerzo-ciberseguridad-superyate",industry:"Superyacht 50 m",metrics:[{label:"Segments reseau",value:"4 couches"},{label:"Incidents critiques",value:"0"}],challenge:"Les acces invites mena aient navigation et divertissement.",solution:"Fortinet NGFW, VLAN dediees et authentification multifacteur avec monitoring SIEM.",result:"Aucun incident la derniere saison et audit externe reussi."},{id:"immersive-av",slug:"integracion-av-38m",industry:"Upgrade divertissement",metrics:[{label:"Zones AV",value:"8+"},{label:"Resolution",value:"4K HDR"}],challenge:"Un yacht de 38 m voulait unifier cinema, reunions et musique avec controle simple.",solution:"Matrice UHD, audio cache et scenes Crestron personnalisees.",result:"Experience multi-room fluide adoptee par equipage et invites."}],faqSection:{title:"Questions frequentes",items:[{question:"Comment maintenez-vous une connectivite stable en navigation ?",answer:"Nous auditons routes et ports, combinons Starlink, 4G/5G et VSAT avec routeurs multi-WAN et monitoring 24/7."},{question:"Pouvez-vous collaborer avec notre equipage et nos prestataires ?",answer:"Oui, nous travaillons avec capitaines, chantiers et designers pour integrer cablage, racks et domotique sans impacter les finitions."},{question:"Le support couvre-t-il cybersurveillance et IoT ?",answer:"Notre programme inclut firewalls, segmentation, mises a jour IoT et assistance a distance en quelques minutes."}]},contactCta:{title:"Prets pour votre prochaine traversee",description:"Partagez l etat actuel de votre yacht et nous livrerons une feuille de route technologique en moins de 48 heures.",primary:{label:"Contacter Netnautica",href:"/contact"},secondary:{label:"Voir les services",href:"/services"}}},os={hero:{eyebrow:"Services",title:"Technologie intelligente pour une navigation fluide",description:"Nous integrons connectivite, cybersurveillance, AV et IoT avec une equipe boutique d ingenierie telematique.",primaryCta:{label:"Contacter Netnautica",href:"/contact"},secondaryCta:{label:"Voir le portfolio",href:"/cases"}},intro:{title:"Methodologie a bord",description:"Audit technique, conception personnalisee, integration precise et support a distance 24/7 pour chaque traversee."},steps:[{title:"Audit technique",description:"Inspection des racks, cablages, couverture satellite et besoins d equipage."},{title:"Conception personnalisee",description:"Architecture modulaire avec les meilleurs fabricants maritimes."},{title:"Integration precise",description:"Coordination avec chantiers et designers en respectant finitions et delais."},{title:"Support continu",description:"Monitoring 24/7, visites planifiees et assistance immediate."}],cta:{title:"Preparez votre prochaine traversee avec Netnautica",description:"Plan technique detaille livre en moins de 48 heures.",primaryCta:{label:"Contacter Netnautica",href:"/contact"},secondaryCta:{label:"Voir le portfolio",href:"/cases"}},framework:{title:"Piliers du projet",lines:["Planification avec capitaines et ETO pour dimensionner reseaux et racks.","Integration de Starlink, Peplink, Fortinet et Crestron selon chaque usage.","Monitoring a distance 24/7 et support rapide en saison."]},pillars:[{title:"Support 24/7",description:"Monitoring a distance, alertes et coordination avec l equipage en quelques minutes."},{title:"Integration boutique",description:"Travail avec installateurs agrees en preservant chaque detail interieur."},{title:"Documentation claire",description:"Manuels numeriques et guides rapides pour equipage et proprietaires."}]},cs={connectivity:{id:"connectivity",slug:"conectividad-global-yates",icon:"globe",name:"Worldwide Connectivity",shortDescription:"Multi-WAN resilient combinant Starlink, 4G/5G et WiFi 6 pour une connexion permanente.",metrics:[{id:"redundancy",value:"Multi-WAN",label:"Redondance active"},{id:"starlink",value:"Starlink+",label:"Couverture satellite"}],benefits:[{title:"Multi-WAN intelligent",description:"Starlink LEO, 4G/5G et VSAT avec bascule automatique."},{title:"WiFi 6 premium",description:"Couverture complete avec QoS et segmentation pour equipage et invites."},{title:"Gestion a distance 24/7",description:"Supervision continue et ajustements immediats pour chaque route."}],process:[{title:"Audit de signal",description:"Etude des routes, ports et racks existants."},{title:"Architecture redondante",description:"Conception multi-lien avec load balancing et failover automatique."},{title:"Optimisation QoS",description:"Priorisation des applications critiques et profils invites."},{title:"Monitoring continu",description:"Tableau de bord cloud avec alertes et support proactif."}],hero:{tagline:"Couverture mondiale ininterrompue",description:"Systemes de connectivite avec failover automatique, load balancing et monitoring proactif pour le Mediterranee et au-dela.",primaryCta:{label:"Contacter Netnautica",href:"/contact"},secondaryCta:{label:"Voir plus de services",href:"/services"}},caseStudy:{company:"Charter 45 m",challenge:"Coupures entre Starlink et 4G/5G pendant les longues routes.",solution:"Multi-WAN gere avec politiques de priorisation et secours VSAT.",result:"Disponibilite >99 pour cent et reprise en moins de dix secondes."},faq:[{question:"Faut-il souscrire a Starlink ?",answer:"Nous integrons Starlink lorsqu il est pertinent mais combinons toujours plusieurs fournisseurs pour garder la redondance."},{question:"Le support a distance est-il inclus ?",answer:"Oui, nous monitorons les liens 24/7 et ajustons avec l equipage."}]},cybersecurity:{id:"cybersecurity",slug:"ciberseguridad-yates",icon:"shield",name:"Cybersecurity",shortDescription:"Perimetres numeriques robustes avec firewalls nouvelle generation, segmentation et audits recurrents.",metrics:[{id:"monitoring",value:"24/7",label:"Monitoring"},{id:"segments",value:"4 couches",label:"Segmentation"}],benefits:[{title:"Firewalls NGFW",description:"Gestion Fortinet et Peplink avec regles personnalisees et mises a jour continues."},{title:"Segmentation avancee",description:"Reseaux separes pour equipage, invites, domotique et instrumentation."},{title:"Durcissement IoT",description:"Firmware controle, acces securise et politique Zero Trust pour chaque appareil."}],process:[{title:"Audit initial",description:"Inventaire des actifs et analyse de vulnerabilite."},{title:"Conception de politiques",description:"Definition VLAN, authentification et journaux."},{title:"Monitoring SIEM",description:"Alertes proactives et reponse aux incidents."},{title:"Revue reguliere",description:"Tests d intrusion et plan d amelioration trimestriel."}],hero:{tagline:"Forteresse digitale a bord",description:"Protection des reseaux, appareils IoT et donnees sensibles avec politiques adapte es a l equipage et aux systemes de navigation.",primaryCta:{label:"Contacter Netnautica",href:"/contact"},secondaryCta:{label:"Voir plus de services",href:"/services"}},caseStudy:{company:"Superyacht 50 m",challenge:"Les acces invites mena aient navigation et divertissement.",solution:"Segmentation en quatre couches avec authentification multifacteur et politiques Zero Trust.",result:"Zero incident la derniere saison et audit externe reussi."},faq:[{question:"Formez-vous l equipage ?",answer:"Oui, sessions de sensibilisation et guides de bonnes pratiques."},{question:"Que se passe-t-il apres l audit ?",answer:"Rapport de risques priorises et accompagnement sur la mise en oeuvre."}]},"av-integration":{id:"av-integration",slug:"integracion-av-yates",icon:"spark",name:"AV System Integration",shortDescription:"Divertissement immersif avec distribution 4K, audio zone et automatisation personnalisee.",metrics:[{id:"zones",value:"8+",label:"Zones audio"},{id:"cinema",value:"4K HDR",label:"Qualite AV"}],benefits:[{title:"Distribution 4K",description:"Matrices UHD vers toutes les zones sans latence perceptible."},{title:"Audio par zone",description:"Controle independent par cabine avec scenes adapte es."},{title:"Espaces polyvalents",description:"Salons prets pour cinema, briefings ou loisirs."}],process:[{title:"Discovery d usages",description:"Definition des scenarios avec proprietaires et equipage."},{title:"Conception technique",description:"Selection Crestron, Sonos, IPTV et serveurs media."},{title:"Integration domotique",description:"Interfaces tactiles et controle depuis les appareils personnels."},{title:"Calibration continue",description:"Support a distance et reglages pendant la navigation."}],hero:{tagline:"Experience cinema en mer",description:"Transformation des salons et sky lounges en espaces cinema, reunion ou divertissement geres via Crestron.",primaryCta:{label:"Contacter Netnautica",href:"/contact"},secondaryCta:{label:"Voir plus de services",href:"/services"}},caseStudy:{company:"Yacht 38 m",challenge:"Experience AV fragmentee et controle complexe",solution:"Matrice 4K, audio integre et scenes Crestron predefinies.",result:"Utilisation intuitive et satisfaction totale."},faq:[{question:"Pouvons-nous reutiliser du materiel ?",answer:"Oui, nous integrons votre equipement existant et l associons a de nouvelles solutions si necessaire."},{question:"Proposez-vous des reglages a distance ?",answer:"Nous monitorons le systeme et appliquons mises a jour ou reglages a la demande."}]},"iot-surveillance":{id:"iot-surveillance",slug:"iot-vigilancia-yates",icon:"automation",name:"IoT & Video Surveillance Systems",shortDescription:"Automatisation integrale avec controle intelligent des cabines, eclairage et CCTV securise.",metrics:[{id:"automation",value:"Smart",label:"Automatisation"},{id:"cctv",value:"360 deg",label:"Couverture CCTV"}],benefits:[{title:"Plateforme centralisee",description:"Scenes, alertes et etat en temps reel pour equipage et proprietaires."},{title:"Cabines personnalisees",description:"Chaque invite ajuste ambiance et divertissement depuis son appareil."},{title:"Surveillance avancee",description:"Streaming multi-zone, enregistrement redondant et acces chiffre."}],process:[{title:"Inventaire IoT",description:"Revision des capteurs, actionneurs et cameras existants."},{title:"Integration NMEA 2000",description:"Connexion des donnees de navigation et alarmes au cloud."},{title:"Automatisation par scenes",description:"Programmation modes jour/nuit, mouillage ou navigation."},{title:"Formation equipage",description:"Formation et remise de manuels numeriques."}],hero:{tagline:"Controle total et securite",description:"Integration eclairage, climat, monitoring NMEA 2000 et CCTV dans une plateforme accessible partout.",primaryCta:{label:"Contacter Netnautica",href:"/contact"},secondaryCta:{label:"Voir plus de services",href:"/services"}},caseStudy:{company:"Catamaran 30 m",challenge:"Absence de controle centralise et acces distant securise.",solution:"Plateforme IoT avec scenes par cabine et CCTV renforce.",result:"Temps de reaction reduits et proprietaires informes depuis la terre."},faq:[{question:"Quels appareils supportez-vous ?",answer:"Nous integrons eclairage KNX, climatisation, systemes NMEA 2000 et cameras IP compatibles."},{question:"Acces a distance possible ?",answer:"Oui, acces chiffre avec authentification multifacteur."}]}},ls={hero:{eyebrow:"Projets Netnautica",title:"Implementations recentes avec nos clients",description:"Architectures multi-WAN, renforts de cybersurveillance et experiences AV realisees avec capitaines et chantiers."}},ds={hero:{eyebrow:"Blog",title:"Ressources techniques pour yachts connectes",description:"Conseils Netnautica couvrant connectivite, cybersurveillance, AV et IoT en mer."}},us={hero:{eyebrow:"Qui sommes-nous",title:"Ingenierie boutique pour yachts de luxe",description:"Netnautica est ne a Palma de Majorque pour integrer connectivite, cybersurveillance, AV et IoT avec une equipe specialisee compacte.",primaryCta:"Reserver un appel",secondaryCta:"Voir les services"},stats:[{label:"Annee de creation",value:"2024"},{label:"Expertise nucleaire",value:"Ingenierie telematique et IT"},{label:"Couverture",value:"Mediterranee - operations worldwide"}],pillars:[{title:"Strategie et execution",description:"Planification, integration et monitoring comme partenaire technologique unique."},{title:"Relation directe",description:"Les fondateurs coordonnent avec capitaines, chantiers et designers."},{title:"Technologie avancee",description:"Starlink, Peplink, Ubiquiti, Fortinet et Crestron garantissent performance et fiabilite."}],team:{title:"Equipe centrale",members:[{name:"Equipe Netnautica",role:"Ingenierie telematique et IT",bio:"Specialistes connectivite, cybersurveillance, AV et IoT accompagnant l equipage de bout en bout."}]},timeline:[{year:"2024",milestone:"Lancement depuis Palma de Majorque."},{year:"2024",milestone:"Premier projet integral : Starlink, cybersurveillance et AV multi-room."},{year:"2025",milestone:"Support a distance 24/7 et couverture Baleariques, Barcelone et Cote d Azur."}],culture:{title:"Notre facon de travailler",items:["Audit technique initial et documentation claire pour l equipage.","Communication directe avec capitaines et chantiers pendant l integration.","Monitoring a distance, visites planifiees et support immediat en saison."]}},ps={sidebar:{emailLabel:"Email",whatsappLabel:"WhatsApp",addressLabel:"Adresse",scheduleLabel:"Horaires",copy:"Nous coordonnons chaque deploiement avec votre equipage, chantier et partenaires de confiance.",socialIntro:"Suivez-nous"}},ms={pageTitle:"Projets Netnautica",pageDescription:"Implémentations réelles de multi-WAN, cybersécurité et AV pour yachts de luxe.",heroEyebrow:"Projets Netnautica",heroTitle:"Implémentations récentes à bord de nos clients",heroDescription:"Architectures multi-WAN, renforcements de cybersécurité et expériences AV conçues avec capitaines et chantiers navals.",toolkit:"Outils",projectPillars:"Piliers du projet",description:"Ingénierie multi-WAN, politiques Zero Trust et automatisation AV/IoT.",planning:"Planification avec capitaines et ETOs pour dimensionner réseaux et racks.",integration:"Intégration de Starlink, Peplink, Fortinet et Crestron selon chaque usage à bord.",monitoring:"Surveillance à distance 24/7 et support immédiat pendant la saison.",challenge:"Défi",solution:"Solution",result:"Résultat"},gs={eyebrow:"Services en Vedette",title:{line1:"Solutions qui",line2:"font la différence"},description:"Découvrez nos solutions les plus innovantes, conçues spécifiquement pour l'environnement nautique",services:{connectivity:{title:"Connectivité Globale",description:"Multi-WAN résilient combinant Starlink, 4G/5G et WiFi 6 pour maintenir le yacht toujours connecté.",features:{redundancy:"Redondance active Multi-WAN",starlink:"Couverture satellitaire Starlink+",peplink:"Routeurs Peplink professionnels"},cta:"Voir connectivité"},cybersecurity:{title:"Cybersécurité Maritime",description:"Protection avancée avec Fortinet, chiffrement de bout en bout et surveillance proactive 24/7.",features:{firewall:"Pare-feu nouvelle génération",encryption:"Chiffrement point à point",monitoring:"Surveillance continue"},cta:"Voir cybersécurité"},av:{title:"Intégration AV",description:"Systèmes de divertissement et d'automatisation Crestron avec distribution HDMI et contrôle unifié.",features:{crestron:"Automatisation Crestron",distribution:"Distribution HDMI professionnelle",automation:"Contrôle unifié"},cta:"Voir intégration AV"},iot:{title:"IoT & Surveillance",description:"Automatisation intelligente, CCTV 360° et systèmes de contrôle environnemental pour efficacité maximale.",features:{automation:"Automatisation intelligente",smart:"Contrôle intelligent",cctv:"CCTV 360°",degrees:"Couverture 360°"},cta:"Voir IoT & surveillance"}}},hs={pageNotFound:"Page non trouvée",pageNotFoundDescription:"Désolé, nous n'avons pas pu trouver la page demandée. Vérifiez l'URL ou retournez à l'accueil.",backToHome:"Retour à l'accueil"},vs={navigation:$a,actions:Ha,blog:Ya,footer:Za,services:Qa,legal:Xa,cookies:Ja,social:es,about:ts,forms:is,search:ns,contact:as,cookieBanner:ss,home:rs,servicesPage:os,servicesData:cs,caseStudiesPage:ls,blogPage:ds,aboutPage:us,contactPage:ps,cases:ms,carousel:gs,errors:hs},fs={home:"Startseite",services:"Dienstleistungen",cases:"Projekte",about:"Über uns",blog:"Blog",contact:"Kontakt",toggle:"Menü öffnen oder schließen",language:"Sprache auswählen"},bs={requestQuote:"Netnautica kontaktieren",toggleTheme:"Modus wechseln",viewAll:"Alle anzeigen",readMore:"Mehr erfahren",learnMore:"Details",next:"Weiter",previous:"Zurück",submit:"Senden",start:"Beginnen",loading:"Laden..."},ys={title:"Blog",subtitle:"Artikel über nautische Navigation und Meerestechnologie",readMore:"Mehr erfahren",backToBlog:"Zurück zum Blog",relatedPosts:"Verwandte Beiträge",noPosts:"Derzeit keine Beiträge verfügbar.",postNotFound:"Beitrag nicht gefunden"},ks={about:"Boutique-Engineering für Luxusyachten. Konnektivität, Cybersicherheit, AV und IoT von Palma de Mallorca.",company:"Unternehmen",services:"Dienstleistungen",newsletterTitle:"Newsletter",newsletterCopy:"Erhalten Sie unsere Tipps zur Konnektivität, Cyberüberwachung und Bordunterhaltung.",newsletterLabel:"E-Mail eingeben",newsletterButton:"Abonnieren",rights:"Alle Rechte vorbehalten.",phone:"Telefon",address:"Adresse",schedule:"Öffnungszeiten"},Ss={customDevelopment:"Worldwide Connectivity",growthMarketing:"Cybersecurity",marketingAutomation:"AV System Integration",uxUi:"IoT & Video Surveillance"},ws={notice:"Impressum",privacy:"Datenschutz",cookies:"Cookies"},xs={title:"Cookie-Nutzung",description:"Wir verwenden Cookies, um Ihr Browsing-Erlebnis zu verbessern, den Website-Traffic zu analysieren und Inhalte zu personalisieren. Durch die weitere Nutzung akzeptieren Sie unsere Cookie-Verwendung.",accept:"Akzeptieren",decline:"Ablehnen",manage:"Verwalten"},As={linkedin:"LinkedIn",twitter:"X/Twitter",youtube:"YouTube",github:"GitHub"},Cs={headings:{pillars:"Unsere DNA",timeline:"Unsere Entwicklung",culture:"Unsere Arbeitsweise"},cta:{primary:"Anruf buchen",secondary:"Services ansehen"}},Ts={step:"Schritt {{current}} von {{total}}",required:"Pflichtfeld",invalidEmail:"Gültige E-Mail eingeben",invalidPhone:"Gültige Telefonnummer eingeben",consent:"Ich akzeptiere die Datenschutzrichtlinie",selectPlaceholder:"Option auswählen"},Ns={title:"Erzählen Sie uns von Ihrem Bordprojekt",subtitle:"Wir entwickeln Konnektivitäts-, Sicherheits- und Unterhaltungssysteme, die auf jede Route und Besatzung zugeschnitten sind.",success:"Vielen Dank für Ihre Nachricht. Wir antworten innerhalb von 24 Arbeitsstunden.",errors:{generic:"Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut."},labels:{name:"Name",email:"E-Mail",phone:"Telefon",company:"Yacht oder Unternehmen",role:"Position",website:"Website",service:"Prioritärer Service",budget:"Geschätztes Budget",timeline:"Zeitrahmen",message:"Technische Anforderungen beschreiben",consent:"Ich habe die Datenschutzrichtlinie gelesen und akzeptiere sie"},placeholders:{name:"Vor- und Nachname",email:"name@netnautica.com",phone:"+49 170 000 0000",company:"Name der Yacht",role:"Kapitän / ETO",website:"https://",message:"Wir möchten Starlink mit 4G/5G-Redundanz implementieren..."},options:{budget:["< 10.000 EUR","10.000 - 30.000 EUR","30.000 - 60.000 EUR","> 60.000 EUR"],timeline:["Sofort","In 3 Monaten","Nächste Saison","Flexibel"]}},Es={title:"Ihre Privatsphäre zählt",description:"Wir verwenden technische und analytische Cookies, um Support zu bieten und das Erlebnis zu verbessern. Sie können Ihre Einstellungen jederzeit anpassen.",accept:"Alle akzeptieren",decline:"Nur wesentliche",manage:"Cookies verwalten"},zs={hero:{eyebrow:"Intelligente Technologie für die Navigation",title:"Komfort und Kontrolle an Bord",subtitle:"Wir integrieren intelligente Technologiesysteme, die den Bordkomfort erhöhen und das Erlebnis bei jeder Überfahrt optimieren.",primaryCta:{label:"Services erkunden",href:"/services"},secondaryCta:{label:"Blogs ansehen",href:"/blog"}},stats:[{label:"Konnektivitätsprojekte geliefert",value:"12"},{label:"Starlink-, AV- und IoT-Spezialisten",value:"Boutique-Team"},{label:"Basis Palma - Weltweite Operationen",value:"Mittelmeer"}],highlights:[{title:"Zertifizierte Ingenieurstechnik",description:"Telematik- und IT-Spezialisten, die Konnektivität, Cyberüberwachung und AV für Luxusyachten integrieren."},{title:"Engagierte Gründer",description:"Planung, Installation und Support direkt vom Kernteam durchgeführt."},{title:"Resiliente Architekturen",description:"Multi-WAN, proaktive Cyberüberwachung und Monitoring für permanente Konnektivität."}],servicesSection:{eyebrow:"Services",title:"Vier Säulen für ein reibungsloses Erlebnis",description:"Globale Konnektivität, Cyberüberwachung, AV-Integration und IoT als einheitliches Ökosystem für Besatzung und Gäste."},featuredServices:{connectivity:{title:"Globale Konnektivität",description:"Widerstandsfähiges Multi-WAN mit Starlink, 4G/5G und WiFi 6, um die Yacht immer online zu halten.",features:["Intelligentes Multi-WAN","Premium WiFi 6","24/7 Fernverwaltung"]},cybersecurity:{title:"Cybersicherheit",description:"Robuste digitale Perimeter mit Next-Generation-Firewalls, Segmentierung und regelmäßigen Audits.",features:["NGFW-Firewalls","Erweiterte Segmentierung","IoT-Härtung"]},avIntegration:{title:"AV-Integration",description:"Immersive Unterhaltung mit 4K-Verteilung, zonierten Audio und personalisierter Hausautomation.",features:["4K-Verteilung","Zonen-Audio","Mehrzweckräume"]},iotSurveillance:{title:"IoT und Videoüberwachungssysteme",description:"Umfassende Automatisierung mit intelligenter Kabinensteuerung, Beleuchtung und Kameras mit sicherem Zugang.",features:["Zentralisierte Plattform","Personalisierte Kabinen","Erweiterte Überwachung"]}},servicesPageContent:{hero:{eyebrow:"Services",title:"Intelligente Technologie für reibungslose Navigation",description:"Wir integrieren Konnektivität, Cybersicherheit, AV und IoT mit einem Boutique-Team für Telematik-Engineering.",primaryCta:{label:"Netnautica kontaktieren",href:"/contact"},secondaryCta:{label:"Blogs ansehen",href:"/blog"}},intro:{title:"Bordmethodik",description:"Technisches Audit, maßgeschneiderte Konzeption, sorgfältige Integration und 24/7-Fernsupport für jede Überfahrt."},steps:[{title:"Technisches Audit",description:"Inspektion von Racks, Verkabelung, Satellitenabdeckung und Besatzungsanforderungen."},{title:"Maßgeschneiderte Konzeption",description:"Modulare Architektur mit den besten Herstellern des nautischen Marktes."},{title:"Präzise Integration",description:"Koordination mit Werften und Designern unter Einhaltung von Ausführung und Terminen."},{title:"Kontinuierlicher Support",description:"24/7-Überwachung, geplante Besuche und sofortige Fernunterstützung."}],cta:{title:"Bereiten Sie Ihre nächste Überfahrt mit Netnautica vor",description:"Planen Sie eine unverbindliche Beratung und erhalten Sie einen detaillierten technischen Plan in weniger als 48 Stunden."}},services:{sectionHeaders:{methodology:"Methodik",capabilities:"Fähigkeiten",specializedServices:"Spezialisierte Services",servicesDescription:"Komplette Lösungen für Konnektivität, Cybersicherheit, AV und IoT, speziell für die nautische Umgebung entwickelt und an die Bedürfnisse jedes Schiffes angepasst.",nextStep:"Nächster Schritt"},support:{title:"24/7 Support",description:"Kontinuierliche Systemüberwachung und technische Fernunterstützung jederzeit während der Navigation verfügbar."},integration:{title:"Vollständige Integration",description:"Alle Systeme funktionieren als einheitliches Ökosystem, optimieren die Leistung und vereinfachen das Management."},documentation:{title:"Technische Dokumentation",description:"Detaillierte Handbücher, Netzwerkdiagramme und Wartungsprotokolle mit jeder Installation geliefert."}},technologySection:{eyebrow:"Technologie",title:"Spitzentechnologie",description:"Wir arbeiten mit Starlink, Ubiquiti, Peplink, Fortinet und Crestron, um eine aktuelle Infrastruktur und weltweiten Support zu gewährleisten.",partners:[{name:"Starlink",copy:"LEO-Satellitenkonnektivität und maritime Hardware."},{name:"Ubiquiti",copy:"Hochleistungs-WiFi-6-Mesh-Netzwerke mit zentralisiertem Management."},{name:"Peplink",copy:"Multi-WAN-Router mit Bonding und automatischem Failover."},{name:"Fortinet",copy:"Next-Generation-Cyberüberwachung mit Zero-Trust-Richtlinien."},{name:"Crestron",copy:"AV-Steuerung und Automatisierung über maßgeschneiderte Schnittstellen."}]},techStack:{eyebrow:"Tech Stack",title:"Eingesetzte Technologien",items:["Starlink","Peplink","Unifi"]},casesSection:{heading:"Aktuelle Implementierungen",description:"Multi-WAN-Engineering, Zero-Trust-Richtlinien und AV-Automatisierung mit Kapitänen und Werften realisiert."},cases:[{id:"mediterranean-connectivity",slug:"flota-charter-conectividad",industry:"Mittelmeer-Charter",metrics:[{label:"Netzwerkverfügbarkeit",value:">99%"},{label:"Failover-Zeit",value:"<10s"}],challenge:"Eine Charterflotte erlitt Ausfälle zwischen begrenzten Häfen und offener See.",solution:"Wir entwickelten eine Multi-WAN-Architektur mit Peplink-Routern, maritimem Starlink und verwaltetem VSAT-Backup.",result:"Kontinuierliche Konnektivität die ganze Saison und 24/7-Monitoring."},{id:"digital-fortress",slug:"refuerzo-ciberseguridad-superyate",industry:"50m Superyacht",metrics:[{label:"Netzwerksegmente",value:"4 Schichten"},{label:"Kritische Vorfälle",value:"0"}],challenge:"Gastzugänge gefährdeten Navigation und Unterhaltung.",solution:"Fortinet NGFW, dedizierte VLANs und Multi-Faktor-Authentifizierung mit SIEM-Monitoring.",result:"Null Vorfälle in der letzten Saison und bestandenes externes Audit."},{id:"immersive-av",slug:"integracion-av-38m",industry:"Entertainment-Upgrade",metrics:[{label:"AV-Zonen",value:"8+"},{label:"Auflösung",value:"4K HDR"}],challenge:"Eine 38m-Yacht wollte Kino, Meetings und Musik mit einfacher Steuerung vereinen.",solution:"UHD-Matrix, verstecktes Audio und maßgeschneiderte Crestron-Szenen.",result:"Reibungsloses Multi-Room-Erlebnis, von Besatzung und Gästen angenommen."}],faqSection:{title:"Häufig gestellte Fragen",items:[{question:"Wie gewährleisten Sie stabile Konnektivität während der Navigation?",answer:"Wir auditieren Routen und Häfen, kombinieren Starlink, 4G/5G und VSAT mit Multi-WAN-Routern und 24/7-Monitoring."},{question:"Können Sie mit unserer Besatzung und Dienstleistern zusammenarbeiten?",answer:"Ja, wir arbeiten mit Kapitänen, Werften und Designern zusammen, um Verkabelung, Racks und Hausautomation zu integrieren, ohne die Ausführung zu beeinträchtigen."},{question:"Umfasst der Support Cyberüberwachung und IoT?",answer:"Unser Programm umfasst Firewalls, Segmentierung, IoT-Updates und Fernunterstützung in wenigen Minuten."}]},contactCta:{title:"Bereit für Ihre nächste Überfahrt",description:"Teilen Sie den aktuellen Zustand Ihrer Yacht mit und wir liefern eine technologische Roadmap in weniger als 48 Stunden.",primary:{label:"Netnautica kontaktieren",href:"/contact"},secondary:{label:"Services ansehen",href:"/services"}}},Is={hero:{eyebrow:"Services",title:"Intelligente Technologie für reibungslose Navigation",description:"Wir integrieren Konnektivität, Cyberüberwachung, AV und IoT mit einem Boutique-Team für Telematik-Engineering.",primaryCta:{label:"Netnautica kontaktieren",href:"/contact"},secondaryCta:{label:"Portfolio ansehen",href:"/cases"}},intro:{title:"Bordmethodik",description:"Technisches Audit, maßgeschneiderte Konzeption, präzise Integration und 24/7-Fernsupport für jede Überfahrt."},steps:[{title:"Technisches Audit",description:"Inspektion von Racks, Verkabelung, Satellitenabdeckung und Besatzungsanforderungen."},{title:"Maßgeschneiderte Konzeption",description:"Modulare Architektur mit den besten maritimen Herstellern."},{title:"Präzise Integration",description:"Koordination mit Werften und Designern unter Einhaltung von Ausführung und Terminen."},{title:"Kontinuierlicher Support",description:"24/7-Monitoring, geplante Besuche und sofortige Unterstützung."}],cta:{title:"Bereiten Sie Ihre nächste Überfahrt mit Netnautica vor",description:"Detaillierter technischer Plan in weniger als 48 Stunden geliefert.",primaryCta:{label:"Netnautica kontaktieren",href:"/contact"},secondaryCta:{label:"Portfolio ansehen",href:"/cases"}},framework:{title:"Projektsäulen",lines:["Planung mit Kapitänen und ETOs zur Dimensionierung von Netzwerken und Racks.","Integration von Starlink, Peplink, Fortinet und Crestron je nach Anwendung.","24/7-Fernmonitoring und schneller Support in der Saison."]},pillars:[{title:"24/7 Support",description:"Fernmonitoring, Alerts und Koordination mit der Besatzung in wenigen Minuten."},{title:"Boutique-Integration",description:"Arbeit mit zertifizierten Installateuren unter Bewahrung jedes Innendetails."},{title:"Klare Dokumentation",description:"Digitale Handbücher und Schnellanleitungen für Besatzung und Eigentümer."}]},Ps={connectivity:{id:"connectivity",slug:"conectividad-global-yates",icon:"globe",name:"Worldwide Connectivity",shortDescription:"Resilientes Multi-WAN kombiniert Starlink, 4G/5G und WiFi 6 für permanente Verbindung.",metrics:[{id:"redundancy",value:"Multi-WAN",label:"Aktive Redundanz"},{id:"starlink",value:"Starlink+",label:"Satellitenabdeckung"}],benefits:[{title:"Intelligentes Multi-WAN",description:"Starlink LEO, 4G/5G und VSAT mit automatischem Failover."},{title:"Premium WiFi 6",description:"Vollständige Abdeckung mit QoS und Segmentierung für Besatzung und Gäste."},{title:"24/7 Fernverwaltung",description:"Kontinuierliche Überwachung und sofortige Anpassungen für jede Route."}],process:[{title:"Signalaudit",description:"Untersuchung von Routen, Häfen und bestehenden Racks."},{title:"Redundante Architektur",description:"Multi-Link-Design mit Load Balancing und automatischem Failover."},{title:"QoS-Optimierung",description:"Priorisierung kritischer Anwendungen und Gastprofile."},{title:"Kontinuierliches Monitoring",description:"Cloud-Dashboard mit Alerts und proaktivem Support."}],hero:{tagline:"Ununterbrochene weltweite Abdeckung",description:"Konnektivitätssysteme mit automatischem Failover, Load Balancing und proaktivem Monitoring für das Mittelmeer und darüber hinaus.",primaryCta:{label:"Netnautica kontaktieren",href:"/contact"},secondaryCta:{label:"Weitere Services ansehen",href:"/services"}},caseStudy:{company:"45m Charter",challenge:"Ausfälle zwischen Starlink und 4G/5G während langer Routen.",solution:"Verwaltetes Multi-WAN mit Priorisierungsrichtlinien und VSAT-Backup.",result:"Verfügbarkeit >99% und Wiederherstellung in weniger als zehn Sekunden."},faq:[{question:"Muss ich Starlink abonnieren?",answer:"Wir integrieren Starlink, wenn es relevant ist, kombinieren aber immer mehrere Anbieter, um Redundanz zu gewährleisten."},{question:"Ist Fernsupport inbegriffen?",answer:"Ja, wir überwachen Links 24/7 und passen mit der Besatzung an."}]},cybersecurity:{id:"cybersecurity",slug:"ciberseguridad-yates",icon:"shield",name:"Cybersecurity",shortDescription:"Robuste digitale Perimeter mit Next-Generation-Firewalls, Segmentierung und wiederkehrenden Audits.",metrics:[{id:"monitoring",value:"24/7",label:"Monitoring"},{id:"segments",value:"4 Schichten",label:"Segmentierung"}],benefits:[{title:"NGFW Firewalls",description:"Fortinet- und Peplink-Management mit benutzerdefinierten Regeln und kontinuierlichen Updates."},{title:"Erweiterte Segmentierung",description:"Getrennte Netzwerke für Besatzung, Gäste, Hausautomation und Instrumentierung."},{title:"IoT-Härtung",description:"Kontrollierte Firmware, sicherer Zugang und Zero-Trust-Richtlinie für jedes Gerät."}],process:[{title:"Erstaudit",description:"Asset-Inventar und Schwachstellenanalyse."},{title:"Richtliniendesign",description:"VLAN-Definition, Authentifizierung und Logs."},{title:"SIEM-Monitoring",description:"Proaktive Alerts und Incident Response."},{title:"Regelmäßige Überprüfung",description:"Penetrationstests und vierteljährlicher Verbesserungsplan."}],hero:{tagline:"Digitale Festung an Bord",description:"Schutz von Netzwerken, IoT-Geräten und sensiblen Daten mit an Besatzung und Navigationssysteme angepassten Richtlinien.",primaryCta:{label:"Netnautica kontaktieren",href:"/contact"},secondaryCta:{label:"Weitere Services ansehen",href:"/services"}},caseStudy:{company:"50m Superyacht",challenge:"Gastzugänge gefährdeten Navigation und Unterhaltung.",solution:"Vierschichtige Segmentierung mit Multi-Faktor-Authentifizierung und Zero-Trust-Richtlinien.",result:"Null Vorfälle in der letzten Saison und bestandenes externes Audit."},faq:[{question:"Schulen Sie die Besatzung?",answer:"Ja, Sensibilisierungssitzungen und Best-Practice-Leitfäden."},{question:"Was passiert nach dem Audit?",answer:"Priorisierter Risikobericht und Begleitung bei der Umsetzung."}]},"av-integration":{id:"av-integration",slug:"integracion-av-yates",icon:"spark",name:"AV System Integration",shortDescription:"Immersive Unterhaltung mit 4K-Verteilung, Zonen-Audio und maßgeschneiderter Automatisierung.",metrics:[{id:"zones",value:"8+",label:"Audio-Zonen"},{id:"cinema",value:"4K HDR",label:"AV-Qualität"}],benefits:[{title:"4K-Verteilung",description:"UHD-Matrizen zu allen Zonen ohne wahrnehmbare Latenz."},{title:"Zonen-Audio",description:"Unabhängige Steuerung pro Kabine mit angepassten Szenen."},{title:"Vielseitige Räume",description:"Salons bereit für Kino, Briefings oder Freizeit."}],process:[{title:"Nutzungs-Discovery",description:"Szenario-Definition mit Eigentümern und Besatzung."},{title:"Technisches Design",description:"Crestron-, Sonos-, IPTV- und Media-Server-Auswahl."},{title:"Hausautomation-Integration",description:"Touch-Interfaces und Steuerung von persönlichen Geräten."},{title:"Kontinuierliche Kalibrierung",description:"Fernsupport und Einstellungen während der Navigation."}],hero:{tagline:"Kinoerlebnis auf See",description:"Transformation von Salons und Sky Lounges in Kino-, Meeting- oder Unterhaltungsräume, verwaltet über Crestron.",primaryCta:{label:"Netnautica kontaktieren",href:"/contact"},secondaryCta:{label:"Weitere Services ansehen",href:"/services"}},caseStudy:{company:"38m Yacht",challenge:"Fragmentiertes AV-Erlebnis und komplexe Steuerung",solution:"4K-Matrix, integriertes Audio und vordefinierte Crestron-Szenen.",result:"Intuitive Nutzung und vollständige Zufriedenheit."},faq:[{question:"Können wir vorhandene Ausrüstung wiederverwenden?",answer:"Ja, wir integrieren Ihre bestehende Ausrüstung und kombinieren sie bei Bedarf mit neuen Lösungen."},{question:"Bieten Sie Ferneinstellungen an?",answer:"Wir überwachen das System und wenden Updates oder Einstellungen auf Anfrage an."}]},"iot-surveillance":{id:"iot-surveillance",slug:"iot-vigilancia-yates",icon:"automation",name:"IoT & Video Surveillance Systems",shortDescription:"Umfassende Automatisierung mit intelligenter Steuerung von Kabinen, Beleuchtung und sicherem CCTV.",metrics:[{id:"automation",value:"Smart",label:"Automatisierung"},{id:"cctv",value:"360°",label:"CCTV-Abdeckung"}],benefits:[{title:"Zentralisierte Plattform",description:"Szenen, Alerts und Echtzeitstatus für Besatzung und Eigentümer."},{title:"Personalisierte Kabinen",description:"Jeder Gast passt Atmosphäre und Unterhaltung von seinem Gerät an."},{title:"Erweiterte Überwachung",description:"Multi-Zonen-Streaming, redundante Aufzeichnung und verschlüsselter Zugang."}],process:[{title:"IoT-Inventar",description:"Überprüfung vorhandener Sensoren, Aktoren und Kameras."},{title:"NMEA 2000 Integration",description:"Verbindung von Navigationsdaten und Alarmen zur Cloud."},{title:"Szenen-Automatisierung",description:"Programmierung von Tag-/Nacht-, Anker- oder Navigationsmodi."},{title:"Besatzungsschulung",description:"Schulung und Übergabe digitaler Handbücher."}],hero:{tagline:"Vollständige Kontrolle und Sicherheit",description:"Integration von Beleuchtung, Klima, NMEA 2000-Monitoring und CCTV in einer überall zugänglichen Plattform.",primaryCta:{label:"Netnautica kontaktieren",href:"/contact"},secondaryCta:{label:"Weitere Services ansehen",href:"/services"}},caseStudy:{company:"30m Katamaran",challenge:"Fehlende zentrale Steuerung und sicherer Fernzugang.",solution:"IoT-Plattform mit Kabinen-Szenen und verstärktem CCTV.",result:"Reduzierte Reaktionszeiten und informierte Eigentümer vom Land aus."},faq:[{question:"Welche Geräte unterstützen Sie?",answer:"Wir integrieren KNX-Beleuchtung, Klimatisierung, NMEA 2000-Systeme und kompatible IP-Kameras."},{question:"Ist Fernzugang möglich?",answer:"Ja, verschlüsselter Zugang mit Multi-Faktor-Authentifizierung."}]}},Ms={hero:{eyebrow:"Netnautica Projekte",title:"Aktuelle Implementierungen mit unseren Kunden",description:"Multi-WAN-Architekturen, Cyberüberwachungs-Verstärkungen und AV-Erlebnisse mit Kapitänen und Werften realisiert."}},qs={hero:{eyebrow:"Blog",title:"Technische Ressourcen für vernetzte Yachten",description:"Netnautica-Ratschläge zu Konnektivität, Cyberüberwachung, AV und IoT auf See."}},js={hero:{eyebrow:"Wer wir sind",title:"Boutique-Engineering für Luxusyachten",description:"Netnautica wurde in Palma de Mallorca gegründet, um Konnektivität, Cyberüberwachung, AV und IoT mit einem kompakten Spezialistenteam zu integrieren.",primaryCta:"Anruf buchen",secondaryCta:"Services ansehen"},stats:[{label:"Gründungsjahr",value:"2024"},{label:"Kernexpertise",value:"Telematik- und IT-Engineering"},{label:"Abdeckung",value:"Mittelmeer - Weltweite Operationen"}],pillars:[{title:"Strategie und Ausführung",description:"Planung, Integration und Monitoring als einziger Technologiepartner."},{title:"Direkte Beziehung",description:"Die Gründer koordinieren mit Kapitänen, Werften und Designern."},{title:"Fortschrittliche Technologie",description:"Starlink, Peplink, Ubiquiti, Fortinet und Crestron gewährleisten Leistung und Zuverlässigkeit."}],team:{title:"Kernteam",members:[{name:"Netnautica Team",role:"Telematik- und IT-Engineering",bio:"Spezialisten für Konnektivität, Cyberüberwachung, AV und IoT, die die Besatzung von Anfang bis Ende begleiten."}]},timeline:[{year:"2024",milestone:"Start von Palma de Mallorca."},{year:"2024",milestone:"Erstes Gesamtprojekt: Starlink, Cyberüberwachung und Multi-Room-AV."},{year:"2025",milestone:"24/7-Fernsupport und Abdeckung Balearen, Barcelona und Côte d'Azur."}],culture:{title:"Unsere Arbeitsweise",items:["Technisches Erstaudit und klare Dokumentation für die Besatzung.","Direkte Kommunikation mit Kapitänen und Werften während der Integration.","Fernmonitoring, geplante Besuche und sofortiger Support in der Saison."]}},Ds={sidebar:{emailLabel:"E-Mail",whatsappLabel:"WhatsApp",addressLabel:"Adresse",scheduleLabel:"Öffnungszeiten",copy:"Wir koordinieren jede Implementierung mit Ihrer Besatzung, Werft und vertrauenswürdigen Partnern.",socialIntro:"Folgen Sie uns"}},Fs={pageTitle:"Netnautica Projekte",pageDescription:"Echte Implementierungen von Multi-WAN, Cybersicherheit und AV für Luxusyachten.",heroEyebrow:"Netnautica Projekte",heroTitle:"Jüngste Implementierungen an Bord unserer Kunden",heroDescription:"Multi-WAN-Architekturen, Cybersicherheitsverstärkungen und AV-Erfahrungen, entwickelt mit Kapitänen und Werften.",toolkit:"Werkzeuge",projectPillars:"Projektpfeiler",description:"Multi-WAN-Engineering, Zero-Trust-Richtlinien und AV/IoT-Automatisierung.",planning:"Planung mit Kapitänen und ETOs zur Dimensionierung von Netzwerken und Racks.",integration:"Integration von Starlink, Peplink, Fortinet und Crestron entsprechend jedem Bordgebrauch.",monitoring:"24/7-Fernüberwachung und sofortige Unterstützung während der Saison.",challenge:"Herausforderung",solution:"Lösung",result:"Ergebnis"},Vs={eyebrow:"Ausgewählte Dienstleistungen",title:{line1:"Lösungen die",line2:"den Unterschied machen"},description:"Entdecken Sie unsere innovativsten Lösungen, speziell für die nautische Umgebung entwickelt",services:{connectivity:{title:"Globale Konnektivität",description:"Resilientes Multi-WAN kombiniert Starlink, 4G/5G und WiFi 6, um die Yacht immer online zu halten.",features:{redundancy:"Multi-WAN aktive Redundanz",starlink:"Starlink+ Satellitenabdeckung",peplink:"Professionelle Peplink-Router"},cta:"Konnektivität ansehen"},cybersecurity:{title:"Maritime Cybersicherheit",description:"Erweiterter Schutz mit Fortinet, Ende-zu-Ende-Verschlüsselung und 24/7 proaktive Überwachung.",features:{firewall:"Next-Generation-Firewall",encryption:"Punkt-zu-Punkt-Verschlüsselung",monitoring:"Kontinuierliche Überwachung"},cta:"Cybersicherheit ansehen"},av:{title:"AV-Integration",description:"Crestron Unterhaltungs- und Automatisierungssysteme mit HDMI-Verteilung und einheitlicher Steuerung.",features:{crestron:"Crestron-Automatisierung",distribution:"Professionelle HDMI-Verteilung",automation:"Einheitliche Steuerung"},cta:"AV-Integration ansehen"},iot:{title:"IoT & Überwachung",description:"Intelligente Automatisierung, 360° CCTV und Umweltsteuerungssysteme für maximale Effizienz.",features:{automation:"Intelligente Automatisierung",smart:"Intelligente Steuerung",cctv:"360° CCTV",degrees:"360° Abdeckung"},cta:"IoT & Überwachung ansehen"}}},Ls={pageNotFound:"Seite nicht gefunden",pageNotFoundDescription:"Entschuldigung, wir konnten die angeforderte Seite nicht finden. Überprüfen Sie die URL oder kehren Sie zur Startseite zurück.",backToHome:"Zurück zur Startseite"},Bs={navigation:fs,actions:bs,blog:ys,footer:ks,services:Ss,legal:ws,cookies:xs,social:As,about:Cs,forms:Ts,contact:Ns,cookieBanner:Es,home:zs,servicesPage:Is,servicesData:Ps,caseStudiesPage:Ms,blogPage:qs,aboutPage:js,contactPage:Ds,cases:Fs,carousel:Vs,errors:Ls};ue.use(Kt).use(Ft).init({debug:!0,detection:{order:["localStorage","navigator","htmlTag"],caches:["localStorage"],lookupLocalStorage:"netnautica-lang",checkWhitelist:!0,convertDetectedLanguage:e=>e.split("-")[0]},resources:{es:{translation:Ta},en:{translation:_a},fr:{translation:vs},de:{translation:Bs}},lng:Ve,fallbackLng:Ni,supportedLngs:Le.map(e=>e.code),load:"all",preload:["es","en","fr","de"],interpolation:{escapeValue:!1},returnEmptyString:!1,returnNull:!1,returnObjects:!0},(e,t)=>{e?console.error("❌ Error initializing i18next:",e):(console.log("🚀 i18next initialized successfully"),console.log("🔧 Language:",ue.language),console.log("🌊 Test translation:",t("servicesSection.title")),console.log("📦 Available languages:",Object.keys(ue.services.resourceStore.data)))});const mt="netnautica-lang",Rs=new Set(Le.map(e=>e.code)),gt=e=>e&&Rs.has(e)?e:void 0;function Ws(){const e=ne(),{i18n:t}=P();return f.useEffect(()=>{if(typeof window>"u")return;const i=gt(localStorage.getItem(mt));i&&i!==t.language&&t.changeLanguage(i),document.documentElement.lang=t.language},[]),f.useEffect(()=>{if(typeof window>"u")return;const i=new URLSearchParams(e.search),n=gt(i.get("lang"));n&&n!==t.language&&(t.changeLanguage(n),localStorage.setItem(mt,n)),document.documentElement.lang=t.language},[t,e.search]),null}const Os="G-XXXXXXXXXX",Gs=Os!=="G-XXXXXXXXXX",Ks=()=>{{console.log("📊 Analytics disabled (development or no GA ID)");return}},sr=()=>{const e=ne();f.useEffect(()=>{},[e]);const t=(c,o={})=>{{console.log("📊 Event (disabled):",c,o);return}};return{trackEvent:t,trackClick:(c,o="engagement")=>{t("click",{event_category:o,event_label:c,value:1})},trackFormSubmit:c=>{t("form_submit",{event_category:"form",event_label:c})},trackSearch:c=>{t("search",{search_term:c})},trackError:(c,o="unknown")=>{t("exception",{description:c.message||c,fatal:!1,context:o})},isEnabled:Gs}},Us=({children:e})=>(f.useEffect(()=>{Ks()},[]),e);Ae.createRoot(document.getElementById("root")).render(s.jsx(z.StrictMode,{children:s.jsx(wt,{children:s.jsx(Ut,{i18n:ue,children:s.jsx(qi,{children:s.jsx(Us,{children:s.jsxs(Gt,{children:[s.jsx(Ws,{}),s.jsx($n,{})]})})})})})}));export{te as C,Ve as D,tr as F,Xs as H,R as I,Ci as L,Js as S,Ta as a,Ti as b,er as c,Bs as d,_a as e,vs as f,de as g,ot as h,ar as i,ir as j,Pi as k,nr as l,Le as m,xn as s,sr as u};
