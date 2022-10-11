import{G as $,H as R,I as F}from"./element-plus.0e1471b6.js";import{_ as P}from"./Card.a2baa27f.js";import{o as c,c as _,a as d,ao as p,l as Y,r as E,d as H,R as I,S as i,X as B,Y as h,u as g,Z as T,T as G,F as C,a9 as O}from"./@vue.ae71f803.js";import{h as K,U as S,c as z,o as j,_ as X}from"./index.a782ff1d.js";import{a as q}from"./axios.c924aa86.js";import{u as W}from"./vue-i18n.cb61a333.js";import{S as Z,T as J,U as Q,H as ee,V as te,F as oe}from"./@element-plus.681668a3.js";import{_ as re}from"./lodash.1c56cec1.js";import{q as se}from"./@vueuse.f8c502e5.js";import"./lodash-es.2e433212.js";import"./@popperjs.36402333.js";import"./@ctrl.82a509e0.js";import"./dayjs.5bdc91a4.js";import"./async-validator.fb49d0f5.js";import"./memoize-one.4ee5c96d.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@floating-ui.6dc68714.js";import"./vue-echarts.23b66ad5.js";import"./resize-detector.4e96b72b.js";import"./echarts.d349f57c.js";import"./tslib.60310f1a.js";import"./zrender.6e8dd875.js";import"./pinia.d4e83f12.js";import"./vue-demi.65474690.js";import"./xe-utils.e9a24773.js";/* empty css                     */import"./vxe-table.25833a37.js";import"./js-cookie.31874410.js";import"./@wangeditor.319f2da9.js";import"./yup.9b2b43ad.js";import"./nanoclone.7d3cb5fe.js";import"./property-expr.48609aa3.js";import"./toposort.5e0934c4.js";import"./vue-router.56ffce2e.js";import"./nprogress.554036ec.js";import"./@intlify.372ce312.js";import"./form-data.d1f94bc2.js";const ae={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ne=d("path",{fill:"currentColor",d:"M17.65 6.35A7.958 7.958 0 0 0 12 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18a6 6 0 0 1-6-6a6 6 0 0 1 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z"},null,-1),ie=[ne];function ce(t,a){return c(),_("svg",ae,ie)}const me={name:"mdi-refresh",render:ce},le=(t,a,o)=>{const s=`https://api.github.com/repos/${t}/${a}/commits?access_token=${o}`;return new Promise(async(u,v)=>{try{const l=await q.get(s,{headers:{Authorization:"Bearer "+o}});u(l)}catch(l){v(l)}})},pe=()=>new Promise(async(t,a)=>{try{const o=await K.get("/commits");t(o)}catch(o){a(o)}});var N=(t=>(t.GITHUB_ACCESS_TOKEN="xxx",t))(N||{}),m=(t=>(t.FEAT="#0bbd87",t.FIX="#f5c518",t.DOCS="#4b5261",t.STYLE="#ec407a",t.CHORE="#d81b60",t.UNKNOWN="#666666",t))(m||{});const x=new Map([["feat",[m.FEAT,p(Z)]],["fix",[m.FIX,p(J)]],["docs",[m.DOCS,p(Q)]],["style",[m.STYLE,p(ee)]],["chore",[m.STYLE,p(te)]],["unkonw",[m.UNKNOWN,p(oe)]]]);function ue(t){const a=re.cloneDeep(t);return Object.entries(t).forEach(([o,s])=>{s=="true"||s=="false"?a[o]=s=="true":/^\d+$/.test(s)?a[o]=Number(s):s=="null"?a[o]=null:s=="undefined"&&(a[o]=void 0)}),a}const _e={class:"flex justify-center items-center h-[220px] w-8/12 text-center mx-auto"},de={class:"text-lg font-semibold text-gray-500"},fe={class:"time-line-box h-[250px] overflow-y-auto px-6 py-5"},he={class:"p-3 overflow-auto"},ge=["onClick"],ve={class:"hover:cursor-pointer hover:underline decoration-1"},Ee=Y({__name:"TimeLine",setup(t){const{t:a}=W(),o=E({}),s=E(""),u=E(!1);function v(r){return r.map(e=>({date:g(se(e.commit.author.date,"YYYY-MM-DD")),message:e.commit.message,html_url:e.html_url}))}function l(r){try{return r.match(/(\S*):/)[1]}catch{return"unkonw"}}function k(r,e){let n=l(r.message);n=x.get(n)?n:"unkonw",o.value[e].color=x.get(n)[0],o.value[e].icon=x.get(n)[1]}function A(r){r.forEach(e=>{let n=e.date+l(e.message);o.value[n]?o.value[n].content.push({message:e.message,html_url:e.html_url}):(o.value[n]={content:[{message:e.message,html_url:e.html_url}],timestamp:e.date},k(e,n))})}async function y(){u.value=!0,o.value={},s.value="";try{let r=null;ue({VITE_API_URL:"https://mock.mengxuegu.com/mock/62baa319c99b3c42abbc2636/cloud",VITE_MOCK_ENABLE:"false",VITE_PORT:"3000",VITE_GLOB_APP_TITLE:"\u55B5\u55B5App\u7BA1\u7406\u7CFB\u7EDF",BASE_URL:"/cloud-app-admin/",MODE:"production",DEV:!1,PROD:!0}).VITE_MOCK_ENABLE?r=await le(S.GITHUB_USER,S.GITHUB_REPO,N.GITHUB_ACCESS_TOKEN):r=await pe();const e=v(r.data);A(e)}catch(r){s.value=r.message,z("error",r.message)}finally{u.value=!1}}return H(async()=>{y()}),(r,e)=>{const n=me,w=P,M=$,U=R,D=F;return c(),I(w,{"err-capture":!!s.value},{title:i(()=>[B(h(g(a)("page.common.dashboard.card.timeline")),1)]),actions:i(()=>[T(n,{class:"cursor-pointer text-gray-400 dark:text-white hover:rotate-180 duration-500",style:{"font-size":"1.2em"},onClick:e[0]||(e[0]=()=>y())})]),error:i(()=>[d("div",_e,[d("p",de,h(`${g(a)("page.common.dashboard.card.timeline.woops")}${s.value}`),1)])]),content:i(()=>[G((c(),_("div",fe,[T(U,null,{default:i(()=>[(c(!0),_(C,null,O(Object.values(o.value),(f,V)=>(c(),I(M,{key:V,style:{"--el-timeline-node-size-large":"18px"},size:"large",icon:f.icon,color:f.color,timestamp:f.timestamp,placement:"top"},{default:i(()=>[T(w,{empty:"","auto-height":""},{content:i(()=>[d("div",he,[(c(!0),_(C,null,O(f.content,(b,L)=>(c(),_("p",{key:L,class:"leading-5",onClick:Te=>g(j)(b.html_url)},[B(h(L+1+"\u3001 ")+" ",1),d("span",ve,h(b.message),1)],8,ge))),128))])]),_:2},1024)]),_:2},1032,["icon","color","timestamp"]))),128))]),_:1})])),[[D,u.value]])]),_:1},8,["err-capture"])}}});const at=X(Ee,[["__scopeId","data-v-b2e0585e"]]);export{at as default};