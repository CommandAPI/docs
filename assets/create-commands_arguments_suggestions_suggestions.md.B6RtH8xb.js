import{_ as l,C as g,c as k,o as p,G as n,am as e,w as h,j as i,a as t}from"./chunks/framework.DEPJlf-V.js";const A=JSON.parse('{"title":"Argument suggestions","description":"","frontmatter":{"order":1,"authors":["JorelAli"]},"headers":[],"relativePath":"create-commands/arguments/suggestions/suggestions.md","filePath":"en/create-commands/arguments/suggestions/suggestions.md","lastUpdated":1741894940000}'),r={name:"create-commands/arguments/suggestions/suggestions.md"};function o(E,s,d,u,y,c){const a=g("TitleAnchor");return p(),k("div",null,[n(a,{anchor:"argument-suggestions"},{default:h(()=>s[0]||(s[0]=[i("h1",{id:"argument-suggestions",tabindex:"-1"},[t("Argument suggestions "),i("a",{class:"header-anchor",href:"#argument-suggestions","aria-label":'Permalink to "Argument suggestions"'},"​")],-1)])),_:1}),s[2]||(s[2]=e(`<p>Sometimes, you want to modify the list of suggestions that are provided by an argument. To handle this, CommandAPI arguments have two methods:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Argument </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replaceSuggestions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ArgumentSuggestions suggestions);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Argument </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includeSuggestions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ArgumentSuggestions suggestions);</span></span></code></pre></div><p>The <code>replaceSuggestions</code> method replaces all suggestions with the provided list of suggestions, whereas the <code>includeSuggestions</code> method will include the provided suggestions with the suggestions already present by the argument.</p><p>Because argument suggestions are arguably the most powerful feature that the CommandAPI offers, I&#39;ve split this section into a number of subsections. To give an overview on what CommandAPI argument suggestions can do:</p><ul><li>Provide a list of suggestions</li><li>Provide a list of suggestions depending on the command sender</li><li>Provide a list of suggestions based on what the player has already typed in the command</li><li>Provide a list of suggestions asynchronously</li><li>Provide a list of suggestions with tooltips to guide users on what certain suggestions do</li><li>Append suggestions to an existing list of suggestions</li></ul>`,5)),n(a,{anchor:"the-argument-suggestions-interface"},{default:h(()=>s[1]||(s[1]=[i("h2",{id:"the-argument-suggestions-interface",tabindex:"-1"},[t("The "),i("code",null,"ArgumentSuggestions"),t(" interface "),i("a",{class:"header-anchor",href:"#the-argument-suggestions-interface","aria-label":'Permalink to "The `ArgumentSuggestions` interface"'},"​")],-1)])),_:1}),s[3]||(s[3]=e(`<p>The two methods above require an <code>ArgumentSuggestions</code> object, which is a functional interface that takes in a <code>SuggestionInfo</code> record and the current Brigadier <code>SuggestionsBuilder</code> and returns a <code>CompletableFuture&lt;Suggestions&gt;</code> object. This may sound a bit complicated, but this allows you to implement very powerful suggestions using a combination of the CommandAPI and raw Brigadier API methods. More information about using Brigadier-level suggestions can be found in the <a href="./../../../internal/brigadier-suggestions">brigadier suggestions</a> section.</p><p>To simplify this, the CommandAPI provides a number of methods to generate suggestions:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ArgumentSuggestions </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">strings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String... suggestions);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ArgumentSuggestions </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">strings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Collection</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ArgumentSuggestions </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">strings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Function</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SuggestionInfo, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> suggestions);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ArgumentSuggestions </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringCollection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Function</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SuggestionInfo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CommandSender</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Collection</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ArgumentSuggestions </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringsAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Function</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SuggestionInfo, CompletableFuture</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> suggestions);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ArgumentSuggestions </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringCollectionAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Function</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SuggestionInfo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CommandSender</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, CompletableFuture</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Collection</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ArgumentSuggestions </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringsWithTooltips</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(IStringTooltip... suggestions);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ArgumentSuggestions </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringsWithTooltips</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Collection</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">IStringTooltip</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ArgumentSuggestions </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringsWithTooltips</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Function</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SuggestionInfo, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">IStringTooltip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> suggestions);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ArgumentSuggestions </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringsWithTooltipsCollection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Function</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SuggestionInfo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CommandSender</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Collection</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">IStringTooltip</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ArgumentSuggestions </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringsWithTooltipsAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Function</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SuggestionInfo, CompletableFuture</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;IStringTooltip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> suggestions);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ArgumentSuggestions </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringsWithTooltipsCollectionAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Function</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SuggestionInfo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CommandSender</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, CompletableFuture</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Collection</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">IStringTooltip</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,3))])}const F=l(r,[["render",o]]);export{A as __pageData,F as default};
