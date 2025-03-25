import{_ as r,C as h,c as d,o as E,G as l,j as s,w as t,a as i,am as o}from"./chunks/framework.DEPJlf-V.js";const p="/images/arguments/worldargument.png",A=JSON.parse('{"title":"World arguments","description":"","frontmatter":{"order":16,"authors":["DerEchtePilz","JorelAli","willkroboth"]},"headers":[],"relativePath":"create-commands/arguments/types/misc/world-arguments.md","filePath":"en/create-commands/arguments/types/misc/world-arguments.md","lastUpdated":1741894940000}'),g={name:"create-commands/arguments/types/misc/world-arguments.md"},y={style:{height:"0",color:"rgba(0,0,0,0%)",position:"relative",top:"32px"}},c={class:"tip custom-block"};function u(m,a,F,C,w,B){const n=h("TitleAnchor"),e=h("PluginTabsTab"),k=h("PluginTabs");return E(),d("div",null,[l(n,{anchor:"world-arguments"},{default:t(()=>a[0]||(a[0]=[s("h1",{id:"world-arguments",tabindex:"-1"},[i("World arguments "),s("a",{class:"header-anchor",href:"#world-arguments","aria-label":'Permalink to "World arguments"'},"​")],-1)])),_:1}),a[6]||(a[6]=s("p",null,[s("img",{src:p,alt:"A picture of world arguments in action"})],-1)),a[7]||(a[7]=s("p",null,[i("The "),s("code",null,"WorldArgument"),i(" class allows a command sender to refer to a loaded Bukkit "),s("code",null,"World"),i(".")],-1)),s("div",y,[l(n,{anchor:"example-unloading-world"},{default:t(()=>a[1]||(a[1]=[s("h3",{id:"example-unloading-world",class:"example-title-anchor",style:{"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}},[i("Example - Unloading world "),s("a",{class:"header-anchor",href:"#example-unloading-world"},"​")],-1)])),_:1})]),s("div",c,[a[5]||(a[5]=o('<p class="custom-block-title">Example - Unloading world</p><p>Say we want to unload a world on our Minecraft server. We want to create a command with the following syntax:</p><div class="language-mccmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mccmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">unloadworld</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> &lt;world&gt;</span></span></code></pre></div><p>Using the world from the <code>WorldArgument</code>, we can then unload the world safely using <code>Bukkit.getServer().unloadWorld()</code> and passing <code>true</code> (to save chunks):</p>',4)),l(k,{sharedStateKey:"tabs-3"},{default:t(()=>[l(e,{label:"Java"},{default:t(()=>a[2]||(a[2]=[s("div",{class:"language-java vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"java"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"new"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," CommandAPICommand"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"unloadworld"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"withArguments"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"new"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," WorldArgument"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"world"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"))")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"executes"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"((sender, args) "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"->"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        World world "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (World) args."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"get"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"world"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"        // Unload the world (and save the world's chunks)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        Bukkit."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getServer"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"unloadWorld"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(world, "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    })")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"register"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")])])])],-1)])),_:1}),l(e,{label:"Kotlin"},{default:t(()=>a[3]||(a[3]=[s("div",{class:"language-kotlin vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"kotlin"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"CommandAPICommand"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"unloadworld"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"withArguments"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"WorldArgument"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"world"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"))")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"executes"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"CommandExecutor"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { sender, args "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"->")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        val"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," world "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," args["),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"world"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"] "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"as"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," World")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"        // Unload the world (and save the world's chunks)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        Bukkit."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getServer"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"unloadWorld"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(world, "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    })")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"register"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")])])])],-1)])),_:1}),l(e,{label:"Kotlin DSL"},{default:t(()=>a[4]||(a[4]=[s("div",{class:"language-kotlin vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"kotlin"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"commandAPICommand"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"unloadworld"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    worldArgument"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"world"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    anyExecutor"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { sender, args "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"->")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        val"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," world "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," args["),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"world"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"] "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"as"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," World")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"        // Unload the world (and save the world's chunks)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        Bukkit."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getServer"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"unloadWorld"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(world, "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])],-1)])),_:1})]),_:1})])])}const b=r(g,[["render",u]]);export{A as __pageData,b as default};
