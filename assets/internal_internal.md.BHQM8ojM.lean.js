import{_ as o,c as i,G as r,w as n,a as t,am as d,B as c,o as m,f as s}from"./chunks/framework.COPtEDDn.js";const b=JSON.parse('{"title":"Internal CommandAPI","description":"","frontmatter":{"order":1,"authors":["JorelAli","willkroboth","DerEchtePilz"]},"headers":[],"relativePath":"internal/internal.md","filePath":"en/internal/internal.md","lastUpdated":1735920041000}'),g={name:"internal/internal.md"};function l(h,e,p,u,f,k){const a=c("TitleAnchor");return m(),i("div",null,[r(a,{anchor:"internal-command-api"},{default:n(()=>e[0]||(e[0]=[t("h1",{id:"internal-command-api",tabindex:"-1"},[s("Internal CommandAPI "),t("a",{class:"header-anchor",href:"#internal-command-api","aria-label":'Permalink to "Internal CommandAPI"'},"​")],-1)])),_:1}),e[4]||(e[4]=t("p",null,`The CommandAPI does a lot of stuff "behind the scenes". This internal CommandAPI section will go into detail about what the CommandAPI does, how it's implemented and why it has been implemented like that.`,-1)),r(a,{anchor:"argument-identifiers"},{default:n(()=>e[1]||(e[1]=[t("h2",{id:"argument-identifiers",tabindex:"-1"},[s("Argument identifiers "),t("a",{class:"header-anchor",href:"#argument-identifiers","aria-label":'Permalink to "Argument identifiers"'},"​")],-1)])),_:1}),e[5]||(e[5]=d('<p>The CommandAPI&#39;s arguments are representations of the different arguments that the Minecraft Command Data protocol handles. These are outlined in the table below:</p><table tabindex="0"><thead><tr><th>Identifier</th><th>CommandAPI argument</th></tr></thead><tbody><tr><td><code>brigadier:bool</code></td><td><a href="./../create-commands/arguments/types/primitive-arguments#boolean-arguments"><code>BooleanArgument</code></a></td></tr><tr><td><code>brigadier:double</code></td><td><a href="./../create-commands/arguments/types/primitive-arguments#numerical-arguments"><code>DoubleArgument</code></a></td></tr><tr><td><code>brigadier:float</code></td><td><a href="./../create-commands/arguments/types/primitive-arguments#numerical-arguments"><code>FloatArgument</code></a></td></tr><tr><td><code>brigadier:integer</code></td><td><a href="./../create-commands/arguments/types/primitive-arguments#numerical-arguments"><code>IntegerArgument</code></a></td></tr><tr><td><code>brigadier:long</code></td><td><a href="./../create-commands/arguments/types/primitive-arguments#numerical-arguments"><code>LongArgument</code></a></td></tr><tr><td><code>brigadier:string</code></td><td><a href="./../create-commands/arguments/types/string-arguments#string-argument"><code>StringArgument</code></a><br><a href="./../create-commands/arguments/types/string-arguments#text-argument"><code>TextArgument</code></a><br><a href="./../create-commands/arguments/types/string-arguments#greedy-string-argument"><code>GreedyStringArgument</code></a><br><a href="./../create-commands/arguments/types/custom-arguments"><code>CustomArgument&lt;T&gt;</code></a></td></tr><tr><td><code>minecraft:angle</code></td><td><a href="./../create-commands/arguments/types/misc/angle-arguments"><code>AngleArgument</code></a></td></tr><tr><td><code>minecraft:block_pos</code></td><td><a href="./../create-commands/arguments/types/position/location-arguments#2d-location"><code>LocationArgument</code></a><br>(<code>LocationType.BLOCK_POSITION</code>)</td></tr><tr><td><code>minecraft:block_predicate</code></td><td><a href="./../create-commands/arguments/types/predicate/block-predicate-arguments"><code>BlockPredicateArgument</code></a></td></tr><tr><td><code>minecraft:block_state</code></td><td><a href="./../create-commands/arguments/types/misc/blockstate-arguments"><code>BlockStateArgument</code></a></td></tr><tr><td><code>minecraft:color</code></td><td><a href="./../create-commands/arguments/types/chat/spigot-chat-arguments#chat-color-argument"><code>ChatColorArgument</code></a></td></tr><tr><td><code>minecraft:column_pos</code></td><td><a href="./../create-commands/arguments/types/position/location-arguments#3d-location"><code>Location2DArgument</code></a> <br>(<code>LocationType.BLOCK_POSITION</code>)</td></tr><tr><td><code>minecraft:component</code></td><td><a href="./../create-commands/arguments/types/chat/spigot-chat-arguments#chat-component-argument"><code>ChatComponentArgument</code></a></td></tr><tr><td><code>minecraft:dimension</code></td><td><a href="./../create-commands/arguments/types/misc/world-arguments"><code>WorldArgument</code></a></td></tr><tr><td><code>minecraft:entity</code></td><td><a href="./../create-commands/arguments/types/entities-arguments#entity-selector-argument"><code>EntitySelectorArgument</code></a></td></tr><tr><td><code>minecraft:entity_anchor</code></td><td></td></tr><tr><td><code>minecraft:entity_summon</code></td><td><a href="./../create-commands/arguments/types/entities-arguments#entity-type-argument"><code>EntityTypeArgument</code></a></td></tr><tr><td><code>minecraft:float_range</code></td><td><a href="./../create-commands/arguments/types/ranged-arguments#the-integerrange--floatrange-class"><code>FloatRangeArgument</code></a></td></tr><tr><td><code>minecraft:function</code></td><td><a href="./../create-commands/functions-and-tags/function-arguments"><code>FunctionArgument</code></a></td></tr><tr><td><code>minecraft:game_profile</code></td><td><a href="./../create-commands/arguments/types/entities-arguments#player-argument"><code>PlayerArgument</code></a></td></tr><tr><td><code>minecraft:game_profile</code></td><td><a href="./../create-commands/arguments/types/entities-arguments#offlineplayer-argument"><code>OfflinePlayerArgument</code></a></td></tr><tr><td><code>minecraft:int_range</code></td><td><a href="./../create-commands/arguments/types/ranged-arguments#the-integerrange--floatrange-class"><code>IntegerRangeArgument</code></a></td></tr><tr><td><code>minecraft:item_enchantment</code></td><td><a href="./../create-commands/arguments/types/misc/enchantment-arguments"><code>EnchantmentArgument</code></a></td></tr><tr><td><code>minecraft:item_predicate</code></td><td><a href="./../create-commands/arguments/types/predicate/itemstack-predicate-arguments"><code>ItemStackPredicateArgument</code></a></td></tr><tr><td><code>minecraft:item_slot</code></td><td></td></tr><tr><td><code>minecraft:item_stack</code></td><td><a href="./../create-commands/arguments/types/misc/itemstack-arguments"><code>ItemStackArgument</code></a></td></tr><tr><td><code>minecraft:message</code></td><td><a href="./../create-commands/arguments/types/chat/spigot-chat-arguments#chat-argument"><code>ChatArgument</code></a></td></tr><tr><td><code>minecraft:mob_effect</code></td><td><a href="./../create-commands/arguments/types/misc/potion-arguments"><code>PotionEffectArgument</code></a></td></tr><tr><td><code>minecraft:nbt</code></td><td></td></tr><tr><td><code>minecraft:nbt_compound_tag</code></td><td><a href="./../create-commands/arguments/types/nbt-arguments"><code>NBTCompoundArgument</code></a></td></tr><tr><td><code>minecraft:nbt_path</code></td><td></td></tr><tr><td><code>minecraft:nbt_tag</code></td><td></td></tr><tr><td><code>minecraft:objective</code></td><td><a href="./../create-commands/arguments/types/scoreboard/objective-arguments#objective-argument"><code>ObjectiveArgument</code></a></td></tr><tr><td><code>minecraft:objective_criteria</code></td><td><a href="./../create-commands/arguments/types/scoreboard/objective-arguments#objective-criteria-argument"><code>ObjectiveCriteriaArgument</code></a></td></tr><tr><td><code>minecraft:operation</code></td><td><a href="./../create-commands/arguments/types/misc/mathoperation-arguments"><code>MathOperationArgument</code></a></td></tr><tr><td><code>minecraft:particle</code></td><td><a href="./../create-commands/arguments/types/misc/particle-arguments"><code>ParticleArgument</code></a></td></tr><tr><td><code>minecraft:resource_location</code></td><td><a href="./../create-commands/arguments/types/misc/advancement-arguments"><code>AdvancementArgument</code></a><br><a href="./../create-commands/arguments/types/misc/biome-arguments"><code>BiomeArgument</code></a><br><a href="./../create-commands/arguments/types/custom-arguments"><code>CustomArgument&lt;T&gt;</code></a><br><a href="./../create-commands/arguments/types/misc/loottable-arguments"><code>LootTableArgument</code></a><br><a href="./../create-commands/arguments/types/misc/namespacedkey-arguments"><code>NamespacedKeyArgument</code></a><br><a href="./../create-commands/arguments/types/misc/recipe-arguments"><code>RecipeArgument</code></a><br><a href="./../create-commands/arguments/types/misc/sound-arguments"><code>SoundArgument</code></a></td></tr><tr><td><code>minecraft:rotation</code></td><td><a href="./../create-commands/arguments/types/position/rotation-arguments"><code>RotationArgument</code></a></td></tr><tr><td><code>minecraft:score_holder</code></td><td><a href="./../create-commands/arguments/types/scoreboard/scoreboard-arguments#score-holder-argument"><code>ScoreHolderArgument</code></a></td></tr><tr><td><code>minecraft:scoreboard_slot</code></td><td><a href="./../create-commands/arguments/types/scoreboard/scoreboard-arguments#scoreboard-slot-argument"><code>ScoreboardSlotArgument</code></a></td></tr><tr><td><code>minecraft:swizzle</code></td><td><a href="./../create-commands/arguments/types/position/axis-arguments"><code>AxisArgument</code></a></td></tr><tr><td><code>minecraft:team</code></td><td><a href="./../create-commands/arguments/types/scoreboard/team-arguments"><code>TeamArgument</code></a></td></tr><tr><td><code>minecraft:time</code></td><td><a href="./../create-commands/arguments/types/misc/time-arguments"><code>TimeArgument</code></a></td></tr><tr><td><code>minecraft:uuid</code></td><td><a href="./../create-commands/arguments/types/misc/uuid-arguments"><code>UUIDArgument</code></a></td></tr><tr><td><code>minecraft:vec2</code></td><td><a href="./../create-commands/arguments/types/position/location-arguments#2d-location"><code>Location2DArgument</code></a><br>(<code>LocationType.PRECISE_POSITION</code>)</td></tr><tr><td><code>minecraft:vec3</code></td><td><a href="./../create-commands/arguments/types/position/location-arguments#3d-location"><code>LocationArgument</code></a><br>(<code>LocationType.PRECISE_POSITION</code>)</td></tr></tbody></table><p>There are a few arguments that aren&#39;t implemented. Here&#39;s why:</p><ul><li><code>minecraft:entity_anchor</code> - This argument only has two values: <code>eyes</code> and <code>feet</code>. It&#39;s incredibly unnecessary for any other purpose and is easier to implement with a <code>MultiLiteralArgument</code>.</li><li><code>minecraft:item_slot</code> - Bukkit&#39;s implementation of item slot numbers differs very wildly to Minecraft&#39;s implementation of item slot numbers. This difference makes it near-impossible to have a suitable middle-ground for item slot numbers that ensures that invalid numbers cannot be passed to the wrong inventory type. An implementation of this would require a rewrite of the current system to maintain proper inventory slot access safety.</li><li><code>minecraft:nbt</code>, <code>minecraft:nbt_path</code>, <code>minecraft:nbt_tag</code> - You&#39;ve got the <code>NBTCompoundArgument</code>, that&#39;s good enough, right? ¯\\_(ツ)_/¯</li></ul>',4)),r(a,{anchor:"reloading-datapacks"},{default:n(()=>e[2]||(e[2]=[t("h2",{id:"reloading-datapacks",tabindex:"-1"},[s("Reloading datapacks "),t("a",{class:"header-anchor",href:"#reloading-datapacks","aria-label":'Permalink to "Reloading datapacks"'},"​")],-1)])),_:1}),e[6]||(e[6]=d('<p>During the initialization of Minecraft 1.16+ servers, the CommandAPI uses a custom datapack reloading sequence as opposed to the normal Vanilla Minecraft datapack reloading method. The CommandAPI&#39;s method uses the server&#39;s current command dispatcher object as opposed to a new one, which allows datapacks to use commands registered by the CommandAPI. This can be invoked using the following method:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CommandAPI.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reloadDatapacks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div>',2)),r(a,{anchor:"getting-a-list-of-registered-commands"},{default:n(()=>e[3]||(e[3]=[t("h2",{id:"getting-a-list-of-registered-commands",tabindex:"-1"},[s("Getting a list of registered commands "),t("a",{class:"header-anchor",href:"#getting-a-list-of-registered-commands","aria-label":'Permalink to "Getting a list of registered commands"'},"​")],-1)])),_:1}),e[7]||(e[7]=d(`<p>The CommandAPI doesn&#39;t store the <code>CommandAPICommand</code> objects during the main running of the server because it simply doesn&#39;t need to. Instead, it stores a list of <code>RegisteredCommand</code> objects which are defined as the following, which should be fairly self-explanatory:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> record RegisteredCommand {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">commandName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    List&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">argsAsStr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Optional&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">shortDescription</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Optional&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fullDescription</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Optional&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">usageDescription</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">aliases</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CommandPermission </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">permission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>The <code>argsAsStr()</code> method returns a list of arguments in a string format, of the form <code>argName:SimpleClassName</code>, where <code>argName</code> is the name of the argument (the argument&#39;s node name) and <code>SimpleClassName</code> is the name of the argument class that was used to construct it (such as <code>IntegerArgument</code>).</p><p>A <code>List&lt;RegisteredCommand&gt;</code> can be acquired using the following method:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CommandAPI.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getRegisteredCommands</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title"><strong>Developer&#39;s Note:</strong></p><p>Note that this list does not update when commands are <em>unregistered</em>, only when commands are registered.</p></div>`,6))])}const E=o(g,[["render",l]]);export{b as __pageData,E as default};