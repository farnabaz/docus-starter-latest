import c from"./ContentRendererMarkdown.e9f218e6.js";import{f as l,a as m,ae as s,j as d}from"./runtime-core.esm-bundler.f2bbce76.js";import"./cookie.8ebb7536.js";import"./index.255a8a72.js";const _=l({name:"ContentRenderer",props:{value:{type:Object,required:!1,default:()=>({})},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"}},setup(t){m(()=>t.excerpt,n=>{var e,r,a;n&&!((e=t.value)!=null&&e.excerpt)&&(console.warn(`No excerpt found for document content/${(r=t==null?void 0:t.value)==null?void 0:r._path}.${(a=t==null?void 0:t.value)==null?void 0:a._extension}!`),console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature."))},{immediate:!0})},render(t){var i,o,u,f;const n=s(),{value:e,excerpt:r,tag:a}=t;return!((o=(i=e==null?void 0:e.body)==null?void 0:i.children)!=null&&o.length)&&(n!=null&&n.empty)?n.empty({value:e,excerpt:r,tag:a,...this.$attrs}):n!=null&&n.default?n.default({value:e,excerpt:r,tag:a,...this.$attrs}):(e==null?void 0:e._type)==="markdown"&&((f=(u=e==null?void 0:e.body)==null?void 0:u.children)!=null&&f.length)?d(c,{value:e,excerpt:r,tag:a,...this.$attrs}):d("pre",null,JSON.stringify({message:"You should use slots with <ContentRenderer>",value:e,excerpt:r,tag:a},null,2))}});export{_ as default};
