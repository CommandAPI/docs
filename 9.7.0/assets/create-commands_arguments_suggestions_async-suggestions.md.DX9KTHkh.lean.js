import{_ as p,C as k,c as g,o as r,G as t,am as e,j as s,w as h,a as i}from"./chunks/framework.DAr4A1sI.js";const d="/9.7.0/images/asyncsuggestions.gif",b=JSON.parse('{"title":"Async suggestions","description":"","frontmatter":{"order":6,"title":"Async suggestions","authors":["DerEchtePilz","willkroboth","JorelAli","MC-XiaoHei"]},"headers":[],"relativePath":"create-commands/arguments/suggestions/async-suggestions.md","filePath":"en/create-commands/arguments/suggestions/async-suggestions.md","lastUpdated":1742050500000}'),o={name:"create-commands/arguments/suggestions/async-suggestions.md"},y={style:{height:"0",color:"rgba(0,0,0,0%)",position:"relative",top:"32px"}},u={class:"tip custom-block"};function c(F,a,m,C,A,f){const l=k("TitleAnchor"),n=k("PluginTabsTab"),E=k("PluginTabs");return r(),g("div",null,[t(l,{anchor:"asynchronous-suggestions"},{default:h(()=>a[0]||(a[0]=[s("h1",{id:"asynchronous-suggestions",tabindex:"-1"},[i("Asynchronous suggestions "),s("a",{class:"header-anchor",href:"#asynchronous-suggestions","aria-label":'Permalink to "Asynchronous suggestions"'},"​")],-1)])),_:1}),a[8]||(a[8]=e("",5)),t(l,{anchor:"creating-completable-futures"},{default:h(()=>a[1]||(a[1]=[s("h2",{id:"creating-completable-futures",tabindex:"-1"},[i("Creating completable futures "),s("a",{class:"header-anchor",href:"#creating-completable-futures","aria-label":'Permalink to "Creating completable futures"'},"​")],-1)])),_:1}),a[9]||(a[9]=e("",3)),t(l,{anchor:"asynchronous-suggestions-examples"},{default:h(()=>a[2]||(a[2]=[s("h2",{id:"asynchronous-suggestions-examples",tabindex:"-1"},[i("Asynchronous suggestions examples "),s("a",{class:"header-anchor",href:"#asynchronous-suggestions-examples","aria-label":'Permalink to "Asynchronous suggestions examples"'},"​")],-1)])),_:1}),s("div",y,[t(l,{anchor:"example-reading-keys-from-a-config-file"},{default:h(()=>a[3]||(a[3]=[s("h3",{id:"example-reading-keys-from-a-config-file",class:"example-title-anchor",style:{"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}},[i("Example – Reading keys from a config file "),s("a",{class:"header-anchor",href:"#example-reading-keys-from-a-config-file"},"​")],-1)])),_:1})]),s("div",u,[a[7]||(a[7]=e("",4)),t(E,{sharedStateKey:"tabs-3"},{default:h(()=>[t(n,{label:"Java"},{default:h(()=>a[4]||(a[4]=[s("div",{class:"language-java vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"java"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"new"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," CommandAPICommand"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"setconfig"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"withArguments"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"new"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," StringArgument"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"key"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        ."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"replaceSuggestions"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(ArgumentSuggestions."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"stringsAsync"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(info "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"->")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            CompletableFuture."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"supplyAsync"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(() "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"->")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                plugin."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getConfig"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getKeys"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"toArray"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"new"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," String"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"["),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"0"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"])")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        ))")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    )")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"withArguments"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"new"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," TextArgument"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"value"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"))")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"executes"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"((sender, args) "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"->"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        String key "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (String) args."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"get"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"key"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        String value "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (String) args."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"get"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"value"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        plugin."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getConfig"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"set"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(key, value);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    })")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"register"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")])])])],-1)])),_:1}),t(n,{label:"Kotlin"},{default:h(()=>a[5]||(a[5]=[s("div",{class:"language-kotlin vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"kotlin"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"CommandAPICommand"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"setconfig"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"withArguments"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"StringArgument"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"key"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"replaceSuggestions"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        ArgumentSuggestions."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"stringsAsync"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { _ "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"->")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            CompletableFuture."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"supplyAsync"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                plugin.config."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getKeys"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"toTypedArray"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ))")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"withArguments"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"TextArgument"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"value"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"))")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"executes"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"CommandExecutor"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { _, args "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"->")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        val"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," key "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," args["),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"key"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"] "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"as"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," String")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        val"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," value"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," args["),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"value"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"] "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"as"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," String")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        plugin.config."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"set"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(key, "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"value"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    })")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"register"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")])])])],-1)])),_:1}),t(n,{label:"Kotlin DSL"},{default:h(()=>a[6]||(a[6]=[s("div",{class:"language-kotlin vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"kotlin"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"commandAPICommand"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"setconfig"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    stringArgument"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"key"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"        replaceSuggestions"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(ArgumentSuggestions."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"stringsAsync"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { _ "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"->")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            CompletableFuture."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"supplyAsync"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"                plugin.config."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"getKeys"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"toTypedArray"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"            }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        })")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    textArgument"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"value"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    anyExecutor"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { _, args "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"->")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        val"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," key "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," args["),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"key"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"] "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"as"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," String")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        val"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," value"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," args["),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"value"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"] "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"as"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," String")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        plugin.config."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"set"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(key, "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"value"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])],-1)])),_:1})]),_:1})])])}const v=p(o,[["render",c]]);export{b as __pageData,v as default};
