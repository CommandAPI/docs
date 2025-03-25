import{_ as p,C as o,c as h,o as k,G as e,am as l,j as i,w as t,a}from"./chunks/framework.DAr4A1sI.js";const C=JSON.parse('{"title":"Loading The CommandAPI in Tests","description":"","frontmatter":{"order":3,"authors":["willkroboth"]},"headers":[],"relativePath":"test/load-mock-commandapi.md","filePath":"en/test/load-mock-commandapi.md","lastUpdated":1742050500000}'),d={name:"test/load-mock-commandapi.md"},r={style:{height:"0",color:"rgba(0,0,0,0%)",position:"relative",top:"32px"}};function c(m,s,g,E,u,y){const n=o("TitleAnchor");return k(),h("div",null,[e(n,{anchor:"loading-the-command-api-in-tests"},{default:t(()=>s[0]||(s[0]=[i("h1",{id:"loading-the-command-api-in-tests",tabindex:"-1"},[a("Loading The CommandAPI in Tests "),i("a",{class:"header-anchor",href:"#loading-the-command-api-in-tests","aria-label":'Permalink to "Loading The CommandAPI in Tests"'},"​")],-1)])),_:1}),e(n,{anchor:"plugin-dependency"},{default:t(()=>s[1]||(s[1]=[i("h2",{id:"plugin-dependency",tabindex:"-1"},[a("Plugin Dependency "),i("a",{class:"header-anchor",href:"#plugin-dependency","aria-label":'Permalink to "Plugin Dependency"'},"​")],-1)])),_:1}),s[5]||(s[5]=l('<p>If your plugin depends on the CommandAPI plugin to load, when running tests you should load the <code>JavaPlugin</code> <code>MockCommandAPIPlugin</code> before you use MockBukkit to <a href="https://mockbukkit.readthedocs.io/en/latest/first_tests.html#creating-the-test-class" target="_blank" rel="noreferrer">load your plugin</a>. You can either load this class directly with <code>MockBukkit.load(MockCommandAPIPlugin.class)</code>, or use one of the static <code>MockCommandAPIPlugin#load</code> methods:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MockCommandAPIPlugin </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p>Loads the CommandAPI Plugin in the test environment. Works exactly the same as <code>MockBukkit.load(MockCommandAPIPlugin.class)</code>.</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MockCommandAPIPlugin </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Consumer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CommandAPIBukkitConfig</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> configureSettings)</span></span></code></pre></div><p>Loads the CommandAPI Plugin after applying the given consumer. This allows configuring any setting from the <a href="./../user-setup/config#configuration-settings">config.yml</a> using the methods provided by <a href="./../dev-setup/shading#loading">CommandAPIBukkitConfig</a>.</p>',5)),i("div",r,[e(n,{anchor:"example-loading-test-command-api-with-settings"},{default:t(()=>s[2]||(s[2]=[i("h3",{id:"example-loading-test-command-api-with-settings",class:"example-title-anchor",style:{"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}},[a("Example - Loading test CommandAPI with settings "),i("a",{class:"header-anchor",href:"#example-loading-test-command-api-with-settings"},"​")],-1)])),_:1})]),s[6]||(s[6]=l(`<div class="tip custom-block"><p class="custom-block-title">Example - Loading test CommandAPI with settings</p><p>To change, for example, the <code>missing-executor-implementation</code> message while running tests, you can use the method <code>CommandAPIBukkitConfig#missingExecutorImplementationMessage</code> when the <code>configureSettings</code> callback is run:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">BeforeEach</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setUp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Set up MockBukkit server</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ServerMock server </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MockBukkit.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mock</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Load the CommandAPI plugin</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    MockCommandAPIPlugin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> config</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">missingExecutorImplementationMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;This command cannot be run by %S&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Load our plugin</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    MockBukkit.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Main.class);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">org</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.junit.jupiter.api.AfterEach</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tearDown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Reset for a clean slate next test</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    MockBukkit.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">unmock</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div>`,1)),e(n,{anchor:"shaded-dependency"},{default:t(()=>s[3]||(s[3]=[i("h2",{id:"shaded-dependency",tabindex:"-1"},[a("Shaded Dependency "),i("a",{class:"header-anchor",href:"#shaded-dependency","aria-label":'Permalink to "Shaded Dependency"'},"​")],-1)])),_:1}),s[7]||(s[7]=i("p",null,[a("If your plugin shades the CommandAPI, the CommandAPI will automatically load as usual when you use MockBukkit to load your plugin. Just note that you "),i("strong",null,"must"),a(" call "),i("code",null,"CommandAPI.onDisable()"),a(" in your plugin's "),i("code",null,"onDisable"),a(" method in order for the test environment to reset properly after each test.")],-1)),e(n,{anchor:"loading-a-custom-command-api-platform-implementation"},{default:t(()=>s[4]||(s[4]=[i("h2",{id:"loading-a-custom-command-api-platform-implementation",tabindex:"-1"},[a("Loading a custom CommandAPI platform implementation "),i("a",{class:"header-anchor",href:"#loading-a-custom-command-api-platform-implementation","aria-label":'Permalink to "Loading a custom CommandAPI platform implementation"'},"​")],-1)])),_:1}),s[8]||(s[8]=l(`<p>By default, the testing environment will load <code>MockCommandAPIBukkit</code> as the CommandAPI platform object. This works for basic tests, but many methods in <code>MockCommandAPIBukkit</code> are not yet implemented and just throw an <code>UnimplementedMethodException</code>. This may cause your tests to fail if your code relies on any of these methods. If you see an <code>UnimplementedMethodException</code>, please tell us about it with a <a href="https://github.com/CommandAPI/CommandAPI/issues" target="_blank" rel="noreferrer">GitHub Issue</a> or a message in the CommandAPI Discord so we can get it solved for everyone.</p><p>In the short term, you can also try to avoid an <code>UnimplementedMethodException</code> by implementing the required method yourself. Simply create a class that extends <code>MockCommandAPIBukkit</code> and override the required method with an appropriate implementation. Before each test where you want to use your custom implementation, make sure to call <code>CommandAPIVersionHandler#usePlatformImplementation</code> to let the CommandAPI know what it should load.</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CustomMockCommandAPIBukkit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MockCommandAPIBukkit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Implement a method that usually throws \`UnimplementedMethodException\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reloadDataPacks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        CommandAPI.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">logInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Simulating data pack reload&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // Further logic</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">BeforeEach</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setUp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Set up MockBukkit server</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    MockBukkit.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mock</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Tell the CommandAPI to use your custom platform implementation</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CommandAPIVersionHandler.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">usePlatformImplementation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CustomMockCommandAPIBukkit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Load CommandAPI and your plugin as mentioned above...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,3))])}const f=p(d,[["render",c]]);export{C as __pageData,f as default};
