import{_ as r,c as E,G as t,w as e,a as i,f as s,am as p,B as h,o as d}from"./chunks/framework.COPtEDDn.js";const B=JSON.parse('{"title":"Team arguments","description":"","frontmatter":{"order":3,"authors":["JorelAli","DerEchtePilz","willkroboth"]},"headers":[],"relativePath":"create-commands/arguments/types/scoreboard/team-arguments.md","filePath":"en/create-commands/arguments/types/scoreboard/team-arguments.md","lastUpdated":1735920041000}'),g={name:"create-commands/arguments/types/scoreboard/team-arguments.md"},o={style:{height:"0",color:"rgba(0,0,0,0%)",position:"relative",top:"32px"}},y={class:"tip custom-block"};function m(c,a,F,u,C,b){const n=h("TitleAnchor"),l=h("PluginTabsTab"),k=h("PluginTabs");return d(),E("div",null,[t(n,{anchor:"team-arguments"},{default:e(()=>a[0]||(a[0]=[i("h1",{id:"team-arguments",tabindex:"-1"},[s("Team arguments "),i("a",{class:"header-anchor",href:"#team-arguments","aria-label":'Permalink to "Team arguments"'},"​")],-1)])),_:1}),a[6]||(a[6]=i("p",null,[s("The "),i("code",null,"TeamArgument"),s(" class interacts with the Minecraft scoreboard and represents a team.")],-1)),i("div",o,[t(n,{anchor:"example-toggling-friendly-fire-in-a-team"},{default:e(()=>a[1]||(a[1]=[i("h3",{id:"example-toggling-friendly-fire-in-a-team",class:"example-title-anchor",style:{"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}},[s("Example - Toggling friendly fire in a team "),i("a",{class:"header-anchor",href:"#example-toggling-friendly-fire-in-a-team"},"​")],-1)])),_:1})]),i("div",y,[a[5]||(a[5]=p('<p class="custom-block-title">Example - Toggling friendly fire in a team</p><p>Let&#39;s say we want to create a command to toggle the state of friendly fire in a team. We want a command of the following form</p><div class="language-mccmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mccmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">togglepvp</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> &lt;team&gt;</span></span></code></pre></div><p>To do this, given a team we want to use the <code>setAllowFriendlyFire(boolean)</code> function.</p>',4)),t(k,{sharedStateKey:"tabs-3"},{default:e(()=>[t(l,{label:"Java"},{default:e(()=>a[2]||(a[2]=[i("div",{class:"language-java vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"java"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"new"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," CommandAPICommand"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"togglepvp"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"withArguments"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"new"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," TeamArgument"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"team"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"))")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"executes"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"((sender, args) "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"->"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        Team team "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (Team) args."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"get"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"team"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"        // Toggle pvp")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        team."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"setAllowFriendlyFire"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(team."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"allowFriendlyFire"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"());")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    })")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"register"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")])])])],-1)])),_:1}),t(l,{label:"Kotlin"},{default:e(()=>a[3]||(a[3]=[i("div",{class:"language-kt vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"kt"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"CommandAPICommand"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"togglepvp"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"withArguments"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"TeamArgument"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"team"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"))")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"executes"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"CommandExecutor"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { _, args "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"->")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        val"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," team "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," args["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"team"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"] "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"as"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Team")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"        // Toggle pvp")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        team."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"setAllowFriendlyFire"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(team."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"allowFriendlyFire"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"())")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    })")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"register"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")])])])],-1)])),_:1}),t(l,{label:"Kotlin DSL"},{default:e(()=>a[4]||(a[4]=[i("div",{class:"language-kt vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"kt"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"commandAPICommand"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"togglepvp"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    teamArgument"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"team"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    anyExecutor"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { _, args "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"->")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        val"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," team "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," args["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"team"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"] "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"as"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," Team")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"        // Toggle pvp")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        team."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"setAllowFriendlyFire"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(team."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"allowFriendlyFire"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"())")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])],-1)])),_:1})]),_:1})])])}const f=r(g,[["render",m]]);export{B as __pageData,f as default};