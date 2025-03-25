import{_ as o,C as p,c as h,o as r,G as a,am as t,j as e,w as n,a as l}from"./chunks/framework.DEPJlf-V.js";const C=JSON.parse('{"title":"Entity selectors","description":"","frontmatter":{"order":4,"authors":["misode","JorelAli"]},"headers":[],"relativePath":"user-setup/command-conversion/entity-selectors.md","filePath":"en/user-setup/command-conversion/entity-selectors.md","lastUpdated":1741894940000}'),c={name:"user-setup/command-conversion/entity-selectors.md"},d={style:{height:"0",color:"rgba(0,0,0,0%)",position:"relative",top:"32px"}};function k(g,s,m,E,y,u){const i=p("TitleAnchor");return r(),h("div",null,[a(i,{anchor:"entity-selectors"},{default:n(()=>s[0]||(s[0]=[e("h1",{id:"entity-selectors",tabindex:"-1"},[l("Entity selectors "),e("a",{class:"header-anchor",href:"#entity-selectors","aria-label":'Permalink to "Entity selectors"'},"​")],-1)])),_:1}),s[2]||(s[2]=t('<p><a href="https://minecraft.wiki/w/Target_selectors" target="_blank" rel="noreferrer">Entity selectors</a> (also known as target selectors) allows you to select certain entities or players which fit a certain criteria when writing a command. Typically, these are of the form <code>@p</code>, <code>@r</code>, <code>@a</code>, <code>@e</code> or <code>@s</code>. By default, when converting a command without arguments, the CommandAPI will not handle these entity selectors. In order to get entity selectors to cooperate with plugins, they must be declared in the relevant <code>config.yml</code> section.</p>',1)),e("div",d,[a(i,{anchor:"example-converting-essentials-xs-ext-command"},{default:n(()=>s[1]||(s[1]=[e("h3",{id:"example-converting-essentials-xs-ext-command",class:"example-title-anchor",style:{"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}},[l("Example - Converting EssentialsX's /ext command "),e("a",{class:"header-anchor",href:"#example-converting-essentials-xs-ext-command"},"​")],-1)])),_:1})]),s[3]||(s[3]=t(`<div class="tip custom-block"><p class="custom-block-title">Example - Converting EssentialsX&#39;s /ext command</p><p>EssentialsX includes a command <code>/ext</code> which lets you extinguish a player that is currently on fire. The command format is the following:</p><div class="language-mccmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mccmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ext</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ext</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> &lt;player&gt;</span></span></code></pre></div><p>In order to convert this command, we could use the following <code>config.yml</code> file:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">verbose-outputs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">create-dispatcher-json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">plugins-to-convert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Essentials</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ext</span></span></code></pre></div><p>Using the above <code>config.yml</code> file will support the following commands:</p><div class="language-mccmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mccmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ext</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Notch</span></span></code></pre></div><p>However, the above <code>config.yml</code> <strong>will not</strong> support the following commands:</p><div class="language-mccmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mccmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ext</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> @a[distance=10]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ext</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> @p</span></span></code></pre></div><p>In order to handle this, we have to use the conversion with arguments (as described in the <a href="./single-command-with-args">previous section</a>). For this <code>ext</code> command, we want to only use this command on <em>one or more players</em>, therefore we want to use the <code>api:players</code> argument which is compatible with one or more players:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">verbose-outputs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">create-dispatcher-json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">plugins-to-convert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Essentials</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ext &lt;player&gt;[api:players]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ext</span></span></code></pre></div></div><p>Note that we declare <code>ext &lt;player&gt;[api:players]</code> <em>before</em> we declare <code>ext</code>. This is because more precise commands MUST be declared before lesser precise commands.</p>`,2))])}const b=o(c,[["render",k]]);export{C as __pageData,b as default};
