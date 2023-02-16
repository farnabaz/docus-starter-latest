import{_ as b,d as q}from"./Container.7277881d.js";import{u as S,o as k,p as L}from"./index.255a8a72.js";import{T as g}from"./DocsAsideTree.8cb84843.js";import{r as I}from"./asyncData.2a997736.js";import{u as M}from"./cookie.8ebb7536.js";import{f as A,r as p,O as N,aj as B,q as u,x as c,y as E,F as R,E as e,D as _,G as x,C,J as U,n as z,M as D,N as F}from"./runtime-core.esm-bundler.f2bbce76.js";/* empty css                               */import"./entry.c55f9561.js";import"./query.c3f7607a.js";const i=a=>(D("data-v-8c875a22"),a=a(),F(),a),H=i(()=>e("svg",{viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z",fill:"currentColor"})],-1)),V=i(()=>e("span",null,"Preview mode enabled",-1)),j={key:0},O=i(()=>e("div",{id:"__preview_background"},null,-1)),Z=i(()=>e("svg",{id:"__preview_loading_icon",width:"32",height:"32",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"})],-1)),G=i(()=>e("p",null,"Initializing the preview...",-1)),J={key:0},$=i(()=>e("div",{id:"__preview_background"},null,-1)),K={id:"__preview_loader"},Q=A({__name:"ContentPreviewMode",props:{previewToken:{type:Object,required:!0},apiURL:{type:String,required:!0},syncPreview:{type:Function,required:!0},requestPreviewSyncAPI:{type:Function,required:!0}},setup(a){const s=a,w=["__nuxt_preview","__preview_enabled"],P=S(),m=p(!0),f=p(!1),t=p(!1),r=p("");let o;const y=async()=>{M("previewToken").value="",k().query.preview="",await L(k().path),z(()=>{I()}),m.value=!1,r.value="",document.body.classList.remove(...w)},h=async l=>{const n=await s.syncPreview(l);if(t.value!==!0){if(!n){setTimeout(()=>h(l),1e3);return}t.value=!0,P.callHook("nuxt-studio:preview:ready"),window.parent&&window.self!==window.parent&&o.disconnect()}};return N(async()=>{o=(await b(()=>import("./index.e2533f77.js"),[],import.meta.url)).connect(`${s.apiURL}/preview`,{transports:["websocket","polling"],auth:{token:s.previewToken.value}});let n;o.on("connect",()=>{n=setTimeout(()=>{t.value||(n=setTimeout(()=>{r.value="Preview sync timed out",t.value=!1},3e4),o.emit("draft:requestSync"))},3e4)});const d=()=>{n&&(clearTimeout(n),n=null)};o.on("draft:sync",async v=>{if(d(),!v){try{await s.requestPreviewSyncAPI(),o.once("draft:ready",()=>{o.emit("draft:requestSync")})}catch(T){switch(d(),T.response.status){case 404:r.value="Preview draft not found",t.value=!1;break;default:r.value="An error occurred while syncing preview",t.value=!1}}return}h(v)}),o.on("draft:unauthorized",()=>{d(),r.value="Unauthorized preview token",t.value=!1}),o.on("disconnect",()=>{d()}),document.body.classList.add(...w),o.on("draft:update",v=>{f.value=!0,s.syncPreview(v),f.value=!1})}),B(()=>{document.body.classList.remove(...w)}),(l,n)=>(u(),c("div",null,[m.value?(u(),c("div",{key:0,id:"__nuxt_preview",class:E({__preview_ready:t.value,__preview_refreshing:f.value})},[t.value?(u(),c(R,{key:0},[H,V,e("button",{onClick:y}," Close ")],64)):_("",!0)],2)):_("",!0),x(g,{name:"preview-loading"},{default:C(()=>[m.value&&!t.value&&!r.value?(u(),c("div",j,[O,e("div",{id:"__preview_loader"},[Z,G,e("button",{onClick:y}," Cancel ")])])):_("",!0)]),_:1}),x(g,{name:"preview-loading"},{default:C(()=>[r.value?(u(),c("div",J,[$,e("div",K,[e("p",null,U(r.value),1),e("button",{onClick:y}," Exit preview ")])])):_("",!0)]),_:1})]))}}),ae=q(Q,[["__scopeId","data-v-8c875a22"]]);export{ae as default};
