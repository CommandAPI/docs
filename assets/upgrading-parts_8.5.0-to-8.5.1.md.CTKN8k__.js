import{_ as t,C as e,c as n,o as r,G as h,am as p,w as l,j as i,a as d}from"./chunks/framework.DAr4A1sI.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"upgrading-parts/8.5.0-to-8.5.1.md","filePath":"en/upgrading-parts/8.5.0-to-8.5.1.md","lastUpdated":1742050500000}'),k={name:"upgrading-parts/8.5.0-to-8.5.1.md"};function g(o,s,E,m,u,c){const a=e("TitleAnchor");return r(),n("div",null,[h(a,{anchor:"brigadier-arguments"},{default:l(()=>s[0]||(s[0]=[i("h3",{id:"brigadier-arguments",tabindex:"-1"},[d("Brigadier arguments "),i("a",{class:"header-anchor",href:"#brigadier-arguments","aria-label":'Permalink to "Brigadier arguments"'},"​")],-1)])),_:1}),s[1]||(s[1]=p(`<p>In 8.5.1, the methods <code>Brigadier.fromArgument</code> and <code>Brigadier.toSuggestions</code> were changed to use <code>Argument</code> based parameters instead of <code>String</code> based parameters. Instead of providing the node name, you now have to provide the whole argument:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Argument&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; myArgument </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> StringArgument</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;myargument&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">List&lt;Argument&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt; argumentList </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> List.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(myArgument);</span></span>
<span class="line"></span>
<span class="line diff remove"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Brigadier.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fromArgument</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(argumentList, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;myargument&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span>
<span class="line diff remove"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Brigadier.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toSuggestions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;myargument&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, argumentList); </span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Brigadier.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fromArgument</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(argumentList, myArgument); </span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Brigadier.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toSuggestions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(myArgument, argumentList); </span></span></code></pre></div>`,2))])}const f=t(k,[["render",g]]);export{_ as __pageData,f as default};
