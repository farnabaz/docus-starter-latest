import n from"./ContentQuery.18e01c72.js";import{f as c,ae as h,j as p}from"./runtime-core.esm-bundler.f2bbce76.js";import"./index.255a8a72.js";import"./asyncData.2a997736.js";import"./entry.c55f9561.js";import"./DocsAsideTree.8cb84843.js";import"./cookie.8ebb7536.js";import"./Container.7277881d.js";import"./query.c3f7607a.js";const L=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(u){const t=h(),{path:f,query:o}=u,m={...o||{},path:f||(o==null?void 0:o.path)||"/"},r=(e,a)=>p("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:e,data:a},null,2));return p(n,m,{default:t!=null&&t.default?({data:e,refresh:a,isPartial:d})=>t==null?void 0:t.default({list:e,refresh:a,isPartial:d,...this.$attrs}):({data:e})=>r("default",e),empty:e=>t!=null&&t.empty?t.empty(e):r("default",e==null?void 0:e.data),"not-found":e=>{var a;return t!=null&&t["not-found"]?(a=t==null?void 0:t["not-found"])==null?void 0:a.call(t,e):r("not-found",e==null?void 0:e.data)}})}});export{L as default};
