import{_ as a,C as t,c as n,o,G as r,am as d,w as h,j as e,a as p}from"./chunks/framework.DEPJlf-V.js";const v=JSON.parse('{"title":"SuggestionsInfo record","description":"","frontmatter":{"order":2,"authors":["JorelAli","willkroboth"]},"headers":[],"relativePath":"create-commands/arguments/suggestions/suggestions-info.md","filePath":"en/create-commands/arguments/suggestions/suggestions-info.md","lastUpdated":1741894940000}'),l={name:"create-commands/arguments/suggestions/suggestions-info.md"};function c(g,s,u,k,m,E){const i=t("TitleAnchor");return o(),n("div",null,[r(i,{anchor:"suggestions-info-record"},{default:h(()=>s[0]||(s[0]=[e("h1",{id:"suggestions-info-record",tabindex:"-1"},[e("code",null,"SuggestionsInfo"),p(" record "),e("a",{class:"header-anchor",href:"#suggestions-info-record","aria-label":'Permalink to "`SuggestionsInfo` record"'},"​")],-1)])),_:1}),s[1]||(s[1]=d(`<p>Argument suggestion methods can accept a function which takes in a <code>SuggestionsInfo</code> object and returns a suitable format for suggestions. The <code>SuggestionInfo</code> class is a record which contains the following methods:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> record SuggestionInfo {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CommandSender </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sender</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CommandArguments </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">previousArgs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">currentInput</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">currentArg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>These methods can be used to aid with providing context-aware suggestions for users. The fields are as follows:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CommandSender </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sender</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p><code>sender()</code> represents the command sender which is typing this command and requesting these suggestions. This is normally a <code>Player</code>, but can also be a console command sender if using a Paper server.</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CommandArguments </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">previousArgs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p><code>previousArgs()</code> represents the previously declared arguments, which are parsed and interpreted as if they were being used to execute the command. See <a href="./string-suggestions#suggestions-depending-on-previous-arguments">this example on the string argument suggestions page</a> for an idea of how to utilize this field.</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">currentInput</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p><code>currentInput()</code> represents the current input that the command sender has entered. This is effectively everything that they’ve typed, including the leading <code>/</code> symbol which is required to start a command. If a user is typing <code>/mycommand hellowor¦</code>, the result of <code>currentInput()</code> would be <code>&quot;/mycommand hellowor&quot;</code>.</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">currentArg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p><code>currentArg()</code> represents the current text which the command sender has entered for the argument which you&#39;re trying to provide suggestions for. If a user is typing <code>/mycommand hellowor¦</code>, the result of <code>currentArg()</code> would be <code>&quot;hellowor&quot;</code>.</p>`,11))])}const f=a(l,[["render",c]]);export{v as __pageData,f as default};
