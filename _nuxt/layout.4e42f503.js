import{T as l}from"./DocsAsideTree.8cb84843.js";import{l as u,d as p,e as f,g as r}from"./entry.c55f9561.js";import{o as d}from"./index.255a8a72.js";import{f as i,j as y,h as c,i as L,u as h}from"./runtime-core.esm-bundler.f2bbce76.js";import"./cookie.8ebb7536.js";import"./Container.7277881d.js";import"./query.c3f7607a.js";const _=i({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(n,t){const e=await u[n.name]().then(a=>a.default||a);return()=>y(e,t.attrs,t.slots)}}),C=i({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(n,t){const e=L("_route"),a=e===d()?p():e,o=c(()=>h(n.name)??a.meta.layout??"default");return()=>{const s=o.value&&o.value in u,m=a.meta.layoutTransition??f;return r(l,s&&m,{default:()=>r(_,s&&{key:o.value,name:o.value,...t.attrs},t.slots).default()}).default()}}});export{C as default};
