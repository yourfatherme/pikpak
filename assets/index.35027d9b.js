var ce=Object.defineProperty;var U=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var H=(e,t,o)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))pe.call(t,o)&&H(e,o,t[o]);if(U)for(var o of U(t))de.call(t,o)&&H(e,o,t[o]);return e};import{d as N,u as me,r as h,o as G,a as K,b as v,c as Y,w as c,e as i,f as n,N as ge,g as _e,h as fe,z as he,i as ve,j as ke,k as Z,l as ye,m as Ee,n as Fe,p as we,q as Ae,s as y,t as Ce,v as xe,x as De,y as E,A as P,B as Ie,C as Ne,D,E as _,F as q,G as Pe,H as Le,I as L,L as be,J as X,K as $e,M as Se,O as Be,P as Oe,Q as Te,R as Ve,S as Re,T as Me,U as Q,V as je,W as ze,X as Je,Y as Ue,Z as He,_ as We,$ as Ge,a0 as Ke,a1 as Ye,a2 as Ze,a3 as qe}from"./vendor.64da71ad.js";const Xe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}};Xe();const Qe=N({setup(e){return window.$message=me(),(t,o)=>null}}),et=["https://ryp.ryp.workers.dev"],tt=N({setup(e){const t=h({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return G(()=>{localStorage.getItem("isSettingProxy")||localStorage.setItem("proxy",JSON.stringify(et))}),(o,a)=>{const s=K("router-view");return v(),Y(n(ke),{locale:n(he),"date-locale":n(ve),"theme-overrides":t.value},{default:c(()=>[i(n(fe),null,{default:c(()=>[i(n(ge),null,{default:c(()=>[i(n(_e),null,{default:c(()=>[i(Qe),i(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),ot="modulepreload",ee={},st="/ryppikpak/",d=function(t,o){return!o||o.length===0?t():Promise.all(o.map(a=>{if(a=`${st}${a}`,a in ee)return;ee[a]=!0;const s=a.endsWith(".css"),r=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${r}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":ot,s||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),s)return new Promise((C,g)=>{u.addEventListener("load",C),u.addEventListener("error",g)})})).then(()=>t())};var at="/ryppikpak/assets/logo1.08eb9157.png";const m=Z.create({});m.interceptors.request.use(e=>{var o;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(e.headers=e.headers||{},t.access_token&&(e.headers.Authorization=`${t.token_type||"Bearer"} ${t.access_token}`),((o=e.url)==null?void 0:o.indexOf("https://",4))===-1){const a=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(a.length>0){const s=Math.floor(Math.random()*a.length);e.url=a[s]+"/"+e.url}}return e});let w=!1;m.interceptors.response.use(e=>e,e=>{var a;const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:const s=window.localStorage.getItem("pikpakLoginData"),r=s?JSON.parse(s):{};return r.username&&r.password&&!w?(console.log("wait",o.url),w=!0,m.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},r)).then(u=>(u.data&&u.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(u.data)),w=!1,m(o))).catch(()=>(I.push("/login"),!1))):r.username&&r.password&&w?new Promise((u,C)=>{const g=setInterval(()=>{w||(clearInterval(g),u(m(o)))},100)}):(I.push("/login"),!1);default:window.$message.error(((a=t==null?void 0:t.data)==null?void 0:a.error_description)||"\u51FA\u9519\u4E86");break}return console.log(o.url,111),Promise.reject(e)});const nt=Z.create({});nt.interceptors.request.use(e=>{e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"};const t=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(t.length>0){const o=Math.floor(Math.random()*t.length);e.url=t[o]+"/"+e.url}return e});const te=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let a=Math.floor(o/10);return e=e/Math.pow(2,10*a),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[a]};const it=_("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[_("img",{src:"https://www.mypikpak.com/logo.png",class:"logo-box__icon",alt:""}),_("div",{class:"logo-box__text"},"PikPak")],-1),rt={key:0,class:"content-bottom"},ut=E("\u4F1A\u5458\u7801"),lt={style:{"margin-bottom":"0"}},ct=_("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"2021\u5E7412\u670823\u65E5~2021\u5E7412\u670831\u65E5\uFFE5119\u8D2D\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361",-1),pt=E(" 2021\u5E7412\u670823\u65E5~2021\u5E7412\u670831\u65E5 \u30101\u5E74PikPak\u4F53\u9A8C\u4F1A\u5458\u4EC5\u552E\uFF1A119\u5143\uFF01\u539F\u4EF7450\u5143\u3011 2022\u5E741\u67081\u65E5\u8D77\uFF1A 1\u5E74PikPak\u4F53\u9A8C\u4F1A\u5458\u4EC5\u552E\uFF1A169\u5143\uFF01\u539F\u4EF7450\u5143\u3011 -\u6BCF\u4EBA\u53EA\u80FD\u8D2D\u4E70\u4F7F\u7528\u4E00\u6B21\uFF0C\u5B98\u65B9\u4EE3\u7406\u5546\u5206\u9500\uFF0C\u611F\u8C22\u652F\u6301 "),dt={class:"bottom-user-info"},mt={key:0,src:at,class:"user-info-avatar"},gt={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},_t={class:"user-info-name"},ft={key:0},ht={class:"action"},vt=E(" \u9000\u51FA\u767B\u5F55 "),kt=_("p",null,[_("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"\u30100.33\u5143/\u5929\u3011PikPak\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361-\u53EF\u4E0E7\u5929\u514D\u8D39\u4F1A\u5458\u7801\u53E0\u52A0-\u6BCF\u4EBA\u53EA\u80FD\u8D2D\u4E70\u4F7F\u7528\u4E00\u6B21\uFF0C\u611F\u8C22\u652F\u6301")],-1),yt=E("\u6DFB\u52A0"),Et=N({setup(e){const t=h(!1),o=l=>()=>Q(L,null,{default:()=>Q(l)}),a=ye(),s=Ee(),r=h([{label:"\u6587\u4EF6",key:"list",icon:o(We)},{label:"\u89C6\u9891",key:"video",icon:o(je)},{label:"\u56FE\u7247",key:"image",icon:o(ze)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(Je)},{label:"\u9080\u8BF7",key:"invited",icon:o(Ue)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(He)}]),u=h(),C=()=>{m.get("https://user.mypikpak.com/v1/user/me").then(l=>{window.localStorage.setItem("pikpakUser",JSON.stringify(l.data)),u.value=l.data}).catch(l=>{console.log(l)})},g=h(),b=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/about").then(l=>{g.value=l.data}).catch(l=>{console.log(l)})},k=h(),oe=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(l=>{var p;k.value=(p=l.data)==null?void 0:p.data})},se=(l,p)=>{console.log(p),a.push("/"+p.key)};G(()=>{C(),b(),oe()});const x=h(),F=h(!1),ae=()=>{m.post("https://api-drive.mypikpak.com/vip/v1/order/free",{activation_code:x.value}).then(l=>{window.$message.success("\u5151\u6362\u6210\u529F"),b()}).catch(l=>{console.log(l)}).finally(()=>{F.value=!1})},$=h(!1),ne=l=>{$.value=l<800,t.value||(t.value=l<800)};Fe(s,()=>{$.value&&(t.value=!0)});const ie=we(),re=()=>{ie.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{m.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(l=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),a.push("/login")}).catch(l=>{console.log(l)})}})};return(l,p)=>{const ue=K("router-view"),le=Ae("resize");return v(),y(Me,null,[Ce(i(n(X),{"has-sider":"",onResize:ne},{default:c(()=>[i(n(xe),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:p[1]||(p[1]=f=>t.value=!0),onExpand:p[2]||(p[2]=f=>t.value=!1),bordered:""},{default:c(()=>{var f,S,B,O,T,V,R,M,j,z,J;return[it,i(n(De),{options:r.value,value:String(n(s).name),"onUpdate:value":se},null,8,["options","value"]),t.value?D("",!0):(v(),y("div",rt,[E(P(n(te)((f=g.value)==null?void 0:f.quota.usage))+" / "+P(n(te)((S=g.value)==null?void 0:S.quota.limit))+" ",1),i(n(Ie),{type:"primary",onClick:p[0]||(p[0]=At=>F.value=!0)},{default:c(()=>[ut]),_:1}),((B=g.value)==null?void 0:B.quota)?(v(),Y(n(Ne),{key:0,type:"line",percentage:Number((((O=g.value)==null?void 0:O.quota.usage)/((T=g.value)==null?void 0:T.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((V=k.value)==null?void 0:V.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):D("",!0),_("p",lt,[i(n(q),{width:600,placement:"right"},{trigger:c(()=>[ct]),default:c(()=>[pt]),_:1})])])),t.value?D("",!0):(v(),y("div",{key:1,class:Pe(["sider-bottom",{vip:((R=k.value)==null?void 0:R.status)==="ok"}])},[_("div",dt,[((M=k.value)==null?void 0:M.status)==="ok"?(v(),y("img",mt)):(v(),y("img",gt)),_("div",_t,[E(P((j=u.value)==null?void 0:j.name)+" ",1),((z=k.value)==null?void 0:z.status)==="ok"&&((J=k.value)==null?void 0:J.expire)?(v(),y("div",ft,[i(n(Le),{time:new Date(k.value.expire),type:"datetime"},null,8,["time"])])):D("",!0)]),_("div",ht,[i(n(q),null,{trigger:c(()=>[i(n(L),{onClick:re},{default:c(()=>[i(n(be))]),_:1})]),default:c(()=>[vt]),_:1})])])],2))]}),_:1},8,["collapsed"]),i(n(X),null,{default:c(()=>[i(n($e),{style:{height:"100vh"}},{default:c(()=>[i(n(Se),{style:{"max-height":"100vh"}},{default:c(()=>[i(ue)]),_:1})]),_:1})]),_:1})]),_:1},512),[[le]]),i(n(Re),{show:F.value,"onUpdate:show":p[5]||(p[5]=f=>F.value=f)},{default:c(()=>[i(n(Be),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":c(()=>[i(n(L),{onClick:p[3]||(p[3]=f=>F.value=!1)},{default:c(()=>[i(n(Oe))]),_:1})]),action:c(()=>[i(n(Te),{block:!0,type:"primary",disabled:!x.value,onClick:ae},{default:c(()=>[yt]),_:1},8,["disabled"])]),default:c(()=>[i(n(Ve),{placeholder:"\u4F1A\u5458\u7801",value:x.value,"onUpdate:value":p[4]||(p[4]=f=>x.value=f)},null,8,["value"]),kt]),_:1})]),_:1},8,["show"])],64)}}}),Ft=[{path:"/",name:"home",component:Et,redirect:"/list",beforeEnter:(e,t,o)=>{const a=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");(!a||!a.access_token)&&e.name!=="setting"?o("/login"):o()},children:[{path:"list/:id?",name:"list",component:()=>d(()=>import("./list.5cee1c11.js"),["assets/list.5cee1c11.js","assets/list.764e0448.css","assets/vendor.64da71ad.js","assets/clipboard.a54b99ef.js"])},{path:"video",name:"video",component:()=>d(()=>import("./list.5cee1c11.js"),["assets/list.5cee1c11.js","assets/list.764e0448.css","assets/vendor.64da71ad.js","assets/clipboard.a54b99ef.js"])},{path:"image",name:"image",component:()=>d(()=>import("./list.5cee1c11.js"),["assets/list.5cee1c11.js","assets/list.764e0448.css","assets/vendor.64da71ad.js","assets/clipboard.a54b99ef.js"])},{path:"trash",name:"trash",component:()=>d(()=>import("./trash.9d813769.js"),["assets/trash.9d813769.js","assets/trash.99a3677d.css","assets/vendor.64da71ad.js"])},{path:"setting",name:"setting",component:()=>d(()=>import("./setting.51a43918.js"),["assets/setting.51a43918.js","assets/setting.f947579c.css","assets/vendor.64da71ad.js"])},{path:"invited",name:"invited",component:()=>d(()=>import("./invited.2a33a3f0.js"),["assets/invited.2a33a3f0.js","assets/invited.74b24e1e.css","assets/clipboard.a54b99ef.js","assets/vendor.64da71ad.js"])}]},{path:"/t/:id?",name:"test",component:()=>d(()=>import("./test.030bf0a7.js"),["assets/test.030bf0a7.js","assets/vendor.64da71ad.js"])},{path:"/s/:id/:password?",name:"shareInfo",component:()=>d(()=>import("./shareInfo.8173f220.js"),["assets/shareInfo.8173f220.js","assets/shareInfo.678356c6.css","assets/vendor.64da71ad.js"])},{path:"/login",name:"login",component:()=>d(()=>import("./login.616774e6.js"),["assets/login.616774e6.js","assets/login.a8b45006.css","assets/vendor.64da71ad.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/sms",name:"sms",component:()=>d(()=>import("./sms.3fa7d933.js"),["assets/sms.3fa7d933.js","assets/sms.81a6d8ca.css","assets/phone-pc2.dbf6d71e.js","assets/vendor.64da71ad.js"])},{path:"/register",name:"register",component:()=>d(()=>import("./register.1f504203.js"),["assets/register.1f504203.js","assets/register.5588ce76.css","assets/vendor.64da71ad.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/testtest",name:"testtest",component:()=>d(()=>import("./testtest.f2c40642.js"),["assets/testtest.f2c40642.js","assets/vendor.64da71ad.js"])}],wt=Ge({history:Ke(),routes:Ft});var I=wt;const A=Ye(tt);A.directive("resize",{mounted(e,t,o){e.$$erd=Ze({strategy:"scroll"}),e.$$erd.listenTo({},e,a=>{let s=a.offsetWidth,r=a.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var u;(u=o.props)==null||u.onResize(s,r)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});A.config.globalProperties.$http=m;A.use(I);A.use(qe,{router:I,siteIdList:[1280510106]});A.mount("#app");export{te as b,m as i,et as p};
