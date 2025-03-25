import{_ as r,C as h,c as d,o as p,G as a,j as i,am as k,w as e,a as s}from"./chunks/framework.DAr4A1sI.js";const f=JSON.parse('{"title":"NBT arguments","description":"","frontmatter":{"order":11,"authors":["JorelAli","willkroboth","DerEchtePilz"]},"headers":[],"relativePath":"create-commands/arguments/types/nbt-arguments.md","filePath":"en/create-commands/arguments/types/nbt-arguments.md","lastUpdated":1742050500000}'),g={name:"create-commands/arguments/types/nbt-arguments.md"},E={style:{height:"0",color:"rgba(0,0,0,0%)",position:"relative",top:"32px"}},u={class:"tip custom-block"},c={style:{height:"0",color:"rgba(0,0,0,0%)",position:"relative",top:"32px"}},m={class:"tip custom-block"};function y(b,t,C,F,B,T){const n=h("TitleAnchor"),l=h("PluginTabsTab"),o=h("PluginTabs");return p(),d("div",null,[a(n,{anchor:"nbt-arguments"},{default:e(()=>t[0]||(t[0]=[i("h1",{id:"nbt-arguments",tabindex:"-1"},[s("NBT arguments "),i("a",{class:"header-anchor",href:"#nbt-arguments","aria-label":'Permalink to "NBT arguments"'},"​")],-1)])),_:1}),t[16]||(t[16]=i("p",null,[s("The CommandAPI includes support for NBT compound arguments using an NBT API. The usage for the "),i("code",null,"NBTCompoundArgument"),s(" depends on whether you are using the CommandAPI plugin (using a "),i("code",null,"CommandAPI.jar"),s(" file in your "),i("code",null,"plugins/"),s(" folder), or are shading the CommandAPI (including the compiled CommandAPI code in your own plugin).")],-1)),a(n,{anchor:"plugin-usage-setup"},{default:e(()=>t[1]||(t[1]=[i("h2",{id:"plugin-usage-setup",tabindex:"-1"},[s("Plugin usage setup "),i("a",{class:"header-anchor",href:"#plugin-usage-setup","aria-label":'Permalink to "Plugin usage setup"'},"​")],-1)])),_:1}),t[17]||(t[17]=i("p",null,[s("By default, the CommandAPI plugin includes a copy of the "),i("a",{href:"https://www.spigotmc.org/resources/nbt-api.7939/",target:"_blank",rel:"noreferrer"},"NBT API by tr7zw"),s(" in "),i("code",null,"dev.jorel.commandapi.nbtapi"),s(". No additional setup is required, and it can be used directly out the box.")],-1)),a(n,{anchor:"shading-usage-setup"},{default:e(()=>t[2]||(t[2]=[i("h2",{id:"shading-usage-setup",tabindex:"-1"},[s("Shading usage setup "),i("a",{class:"header-anchor",href:"#shading-usage-setup","aria-label":'Permalink to "Shading usage setup"'},"​")],-1)])),_:1}),t[18]||(t[18]=k('<p>In order to use the <code>NBTCompoundArgument</code>, you will have to use an NBT API that can create an NBT Compound object from an <code>Object</code> (ideally a <code>net.minecraft.nbt.NBTTagCompound</code> object). Examples of NBT APIs that can do this are <em>(these are not sponsored in any way)</em>:</p><ul><li><a href="https://www.spigotmc.org/resources/nbt-api.7939/" target="_blank" rel="noreferrer">NBT API</a>, via the <a href="https://tr7zw.github.io/Item-NBT-API/v2-api/de/tr7zw/changeme/nbtapi/NBTContainer.html#NBTContainer-java.lang.Object-" target="_blank" rel="noreferrer"><code>new NBTContainer(Object)</code></a> constructor</li></ul>',2)),a(n,{anchor:"hooking-into-an-nbt-api"},{default:e(()=>t[3]||(t[3]=[i("h3",{id:"hooking-into-an-nbt-api",tabindex:"-1"},[s("Hooking into an NBT API "),i("a",{class:"header-anchor",href:"#hooking-into-an-nbt-api","aria-label":'Permalink to "Hooking into an NBT API"'},"​")],-1)])),_:1}),t[19]||(t[19]=k('<p>Before the <code>NBTCompoundArgument</code> can be used, the CommandAPI needs to know what implementation of an NBT Compound object you&#39;re going to use. This is specified in the <code>onLoad()</code> sequence, where your CommandAPI&#39;s config is set up, by using the following method:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">T</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CommandAPIConfig </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">initializeNBTAPI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">T</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> nbtContainerClass, Function</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Object, T</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> nbtContainerConstructor);</span></span></code></pre></div><p>The <code>initializeNBTAPI(Class&lt;T&gt;, Function&lt;Object, T&gt;)</code> takes in two arguments:</p><ul><li><p><code>Class&lt;T&gt;</code> - The class that will be your NBT Compound implementation. This is also the type that the CommandAPI will return when the <code>NBTCompoundArgument</code> is used.</p></li><li><p><code>Function&lt;Object, T&gt;</code> - A function that takes in an object and returns the specified NBT Compound implementation. This could be a constructor or a static method, for example.</p></li></ul>',4)),i("div",E,[a(n,{anchor:"example-hooking-into-the-nbt-api"},{default:e(()=>t[4]||(t[4]=[i("h3",{id:"example-hooking-into-the-nbt-api",class:"example-title-anchor",style:{"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}},[s("Example – Hooking into the NBT API "),i("a",{class:"header-anchor",href:"#example-hooking-into-the-nbt-api"},"​")],-1)])),_:1})]),i("div",u,[t[7]||(t[7]=k('<p class="custom-block-title">Example – Hooking into the NBT API</p><p>Say we want to use the <a href="https://www.spigotmc.org/resources/nbt-api.7939/" target="_blank" rel="noreferrer">NBT API</a> as our implementation of NBT compounds. First, we have to shade the NBT API into our project (view the official documentation for how to do this for <a href="https://github.com/tr7zw/Item-NBT-API/wiki/Using-Maven#option-2-shading-the-nbt-api-into-your-plugin" target="_blank" rel="noreferrer">Maven</a> or <a href="https://github.com/tr7zw/Item-NBT-API/wiki/Using-Gradle#option-2-shading-the-nbt-api-into-your-plugin" target="_blank" rel="noreferrer">Gradle</a>).</p><p>Now, we can configure the CommandAPI using the <code>CommandAPI.onLoad()</code> method to use the <code>NBTContainer</code> class, and the <a href="https://tr7zw.github.io/Item-NBT-API/v2-api/de/tr7zw/changeme/nbtapi/NBTContainer.html#NBTContainer-java.lang.Object-" target="_blank" rel="noreferrer"><code>NBTContainer</code> constructor that takes in an <code>Object</code></a>:</p>',3)),a(o,{sharedStateKey:"tabs-2"},{default:e(()=>[a(l,{label:"Java"},{default:e(()=>t[5]||(t[5]=[i("div",{class:"language-java vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"java"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"@"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"Override")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"public"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," void"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," onLoad"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    CommandAPI."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"onLoad"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"new"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," CommandAPIBukkitConfig"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"initializeNBTAPI"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(NBTContainer.class, NBTContainer"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"::new"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    );")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])],-1)])),_:1}),a(l,{label:"Kotlin"},{default:e(()=>t[6]||(t[6]=[i("div",{class:"language-kotlin vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"kotlin"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"override"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," fun"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," onLoad"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    CommandAPI."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"onLoad"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"CommandAPIBukkitConfig"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"initializeNBTAPI"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(NBTContainer::"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"class"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},".java, ::"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"NBTContainer"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    )")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])],-1)])),_:1})]),_:1}),t[8]||(t[8]=i("blockquote",null,[i("p",null,[i("em",null,[s("Confused with the "),i("code",null,"::new"),s(" syntax? Read more about method references to a constructor "),i("a",{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methodreferences.html",target:"_blank",rel:"noreferrer"},"here"),s(".")])])],-1)),t[9]||(t[9]=i("p",null,[s("We're now able to use the "),i("code",null,"NBTContainer"),s(" as our implemented type for the "),i("code",null,"NBTCompoundArgument"),s("!")],-1))]),i("div",c,[a(n,{anchor:"example"},{default:e(()=>t[10]||(t[10]=[i("h3",{id:"example",class:"example-title-anchor",style:{"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}},[s("Example – ??? "),i("a",{class:"header-anchor",href:"#example"},"​")],-1)])),_:1})]),i("div",m,[t[14]||(t[14]=i("p",{class:"custom-block-title"},"Example – ???",-1)),t[15]||(t[15]=i("p",null,[s("Since the underlying implementation of the "),i("code",null,"NBTCompoundArgument"),s(" can change (e.g. "),i("code",null,"NBTContainer"),s(" if you're using the NBT API), the type of your NBT compound implementation has to be declared in angle brackets.")],-1)),a(o,{sharedStateKey:"tabs-3"},{default:e(()=>[a(l,{label:"Java"},{default:e(()=>t[11]||(t[11]=[i("div",{class:"language-java vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"java"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"new"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," CommandAPICommand"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"award"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"withArguments"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"new"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," NBTCompoundArgument<"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"NBTContainer"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"nbt"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"))")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"executes"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"((sender, args) "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"->"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        NBTContainer nbt "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (NBTContainer) args."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"get"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"nbt"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'        // Do something with "nbt" here...')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    })")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"register"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")])])])],-1)])),_:1}),a(l,{label:"Kotlin"},{default:e(()=>t[12]||(t[12]=[i("div",{class:"language-kotlin vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"kotlin"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"CommandAPICommand"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"award"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"withArguments"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"NBTCompoundArgument"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"NBTContainer"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"nbt"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"))")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"executes"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"CommandExecutor"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { _, args "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"->")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        val"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," nbt "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," args["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"nbt"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"] "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"as"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," NBTContainer")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'        // Do something with "nbt" here...')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    })")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    ."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"register"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"()")])])])],-1)])),_:1}),a(l,{label:"Kotlin DSL"},{default:e(()=>t[13]||(t[13]=[i("div",{class:"language-kotlin vp-adaptive-theme"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang"},"kotlin"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"commandAPICommand"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"award"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    nbtCompoundArgument"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"NBTContainer"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"nbt"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"    anyExecutor"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { _, args "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"->")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        val"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," nbt "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," args["),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"nbt"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"] "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"as"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," NBTContainer")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},'        // Do something with "nbt" here...')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")])])])],-1)])),_:1})]),_:1})]),t[20]||(t[20]=i("div",{class:"info custom-block"},[i("p",{class:"custom-block-title"},[i("strong",null,"Developer's Note:")]),i("p",null,[s("If you believe you can supply a suitable example for this page, feel free to send an example "),i("a",{href:"https://github.com/CommandAPI/CommandAPI/issues/new/choose",target:"_blank",rel:"noreferrer"},"on the CommandAPI issues page!")])],-1))])}const N=r(g,[["render",y]]);export{f as __pageData,N as default};
