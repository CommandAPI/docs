import{_ as h,C as p,c as r,o as k,G as t,am as e,w as n,j as i,a as l}from"./chunks/framework.DEPJlf-V.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"upgrading-parts/8.6.0-to-8.7.0.md","filePath":"en/upgrading-parts/8.6.0-to-8.7.0.md","lastUpdated":1741894940000}'),d={name:"upgrading-parts/8.6.0-to-8.7.0.md"};function E(o,s,g,y,c,u){const a=p("TitleAnchor");return k(),r("div",null,[t(a,{anchor:"sound-arguments"},{default:n(()=>s[0]||(s[0]=[i("h3",{id:"sound-arguments",tabindex:"-1"},[l("Sound arguments "),i("a",{class:"header-anchor",href:"#sound-arguments","aria-label":'Permalink to "Sound arguments"'},"​")],-1)])),_:1}),s[3]||(s[3]=e(`<p>This update introduces a backwards-incompatible change to the <code>SoundArgument</code> which was introduced in 8.6.0. SoundArguments no longer need a generic type parameter:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code" tabindex="0"><code><span class="line diff remove"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SoundArgument&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Sound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sound&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SoundArgument</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sound&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span></code></pre></div><p><code>NamespacedKey</code> SoundArguments no longer need a <code>SoundType</code> parameter, instead the <code>NamespacedKey</code> constructor should be used:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code" tabindex="0"><code><span class="line diff remove"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SoundArgument&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">NamespacedKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sound&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, SoundType.NAMESPACED_KEY); </span></span>
<span class="line"></span>
<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SoundArgument.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">NamespacedKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sound&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span></code></pre></div>`,4)),t(a,{anchor:"entity-selector-arguments"},{default:n(()=>s[1]||(s[1]=[i("h3",{id:"entity-selector-arguments",tabindex:"-1"},[l("Entity selector arguments "),i("a",{class:"header-anchor",href:"#entity-selector-arguments","aria-label":'Permalink to "Entity selector arguments"'},"​")],-1)])),_:1}),s[4]||(s[4]=e(`<p>Entity selector arguments no longer need a generic type parameter or a <code>EntitySelector</code> parameter. Instead, the corresponding constructor should be used instead:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code" tabindex="0"><code><span class="line diff remove"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> EntitySelectorArgument&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Player</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;target&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, EntitySelector.ONE_PLAYER); </span></span>
<span class="line diff remove"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> EntitySelectorArgument&lt;Collection&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Player</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;target&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, EntitySelector.MANY_PLAYERS); </span></span>
<span class="line diff remove"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> EntitySelectorArgument&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Entity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;target&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, EntitySelector.ONE_ENTITY); </span></span>
<span class="line diff remove"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> EntitySelectorArgument&lt;Collection&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Entity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;target&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, EntitySelector.MANY_ENTITIES); </span></span>
<span class="line"></span>
<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> EntitySelectorArgument.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">OnePlayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;target&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span>
<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> EntitySelectorArgument.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ManyPlayers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;target&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span>
<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> EntitySelectorArgument.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">OneEntity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;target&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span>
<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> EntitySelectorArgument.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ManyEntities</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;target&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span></code></pre></div>`,2)),t(a,{anchor:"scoreholder-arguments"},{default:n(()=>s[2]||(s[2]=[i("h3",{id:"scoreholder-arguments",tabindex:"-1"},[l("Scoreholder arguments "),i("a",{class:"header-anchor",href:"#scoreholder-arguments","aria-label":'Permalink to "Scoreholder arguments"'},"​")],-1)])),_:1}),s[5]||(s[5]=e(`<p>The <code>ScoreHolderArgument</code> no longer needs a generic type parameter or a <code>ScoreHolderType</code> parameter. Instead, the corresponding constructor should be used instead:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code" tabindex="0"><code><span class="line diff remove"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ScoreHolderArgument&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(nodeName, ScoreHolderType.SINGLE); </span></span>
<span class="line diff remove"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ScoreHolderArgument&lt;Collection&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;(nodeName, ScoreHolderType.MULTIPLE); </span></span>
<span class="line"></span>
<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ScoreHolderArgument.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Single</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(nodeName); </span></span>
<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ScoreHolderArgument.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Multiple</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(nodeName); </span></span></code></pre></div>`,2))])}const A=h(d,[["render",E]]);export{F as __pageData,A as default};
