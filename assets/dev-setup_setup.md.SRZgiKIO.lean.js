import{_ as k,C as l,c as r,o,G as e,j as s,am as h,w as t,a as i}from"./chunks/framework.DAr4A1sI.js";const E="/9.7.0/images/intellij.png",g="/9.7.0/images/eclipse.jpg",F=JSON.parse('{"title":"Setting up your development environment","description":"","frontmatter":{"order":1,"preferences":["build-system"],"authors":["JorelAli","DerEchtePilz","willkroboth"]},"headers":[],"relativePath":"dev-setup/setup.md","filePath":"en/dev-setup/setup.md","lastUpdated":1742050500000}'),c={name:"dev-setup/setup.md"};function u(y,a,m,v,b,A){const n=l("TitleAnchor"),p=l("PluginTabsTab"),d=l("PluginTabs");return o(),r("div",null,[e(n,{anchor:"setting-up-your-development-environment"},{default:t(()=>a[0]||(a[0]=[s("h1",{id:"setting-up-your-development-environment",tabindex:"-1"},[i("Setting up your development environment "),s("a",{class:"header-anchor",href:"#setting-up-your-development-environment","aria-label":'Permalink to "Setting up your development environment"'},"​")],-1)])),_:1}),a[5]||(a[5]=s("p",null,[i("To use the CommandAPI in your plugins, there are a few methods of adding it to your development environment. First things first, if you're using the CommandAPI plugin, you need to add the CommandAPI as a dependent in your "),s("code",null,"plugin.yml"),i(" or "),s("code",null,"paper-plugin.yml"),i(":")],-1)),e(d,{sharedStateKey:"dev-setup"},{default:t(()=>[e(p,{label:"plugin.yml (Bukkit/Spigot/Paper)"},{default:t(()=>a[1]||(a[1]=[s("div",{class:"language-yaml vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yaml"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"name"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"MyPlugin")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"main"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"some.package.name.Main")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"version"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1.0")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"depend"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": ["),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"CommandAPI"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"]")])])])],-1)])),_:1}),e(p,{label:"paper-plugin.yml (Paper)"},{default:t(()=>a[2]||(a[2]=[s("div",{class:"language-yaml vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"yaml"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"name"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"MyPlugin")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"main"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"some.package.name.Main")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"version"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"1.0")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"dependencies"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"  server"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"    CommandAPI"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"      load"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"BEFORE")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"      required"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"      join-classpath"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true")])])])],-1)])),_:1})]),_:1}),e(n,{anchor:"using-a-build-system-recommended"},{default:t(()=>a[3]||(a[3]=[s("h2",{id:"using-a-build-system-recommended",tabindex:"-1"},[i("Using a build system (Recommended) "),s("a",{class:"header-anchor",href:"#using-a-build-system-recommended","aria-label":'Permalink to "Using a build system (Recommended)"'},"​")],-1)])),_:1}),a[6]||(a[6]=h("",3)),e(n,{anchor:"manually-using-the-jar"},{default:t(()=>a[4]||(a[4]=[s("h2",{id:"manually-using-the-jar",tabindex:"-1"},[i("Manually using the .jar "),s("a",{class:"header-anchor",href:"#manually-using-the-jar","aria-label":'Permalink to "Manually using the .jar"'},"​")],-1)])),_:1}),a[7]||(a[7]=h("",1))])}const f=k(c,[["render",u]]);export{F as __pageData,f as default};
