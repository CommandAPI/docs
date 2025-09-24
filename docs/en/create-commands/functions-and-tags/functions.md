---
order: 1
preferences: ["paper-spigot"]
authors:
  - DerEchtePilz
  - willkroboth
  - JorelAli
  - misode
---

# Functions

The CommandAPI has support to use Minecraft's [functions](https://minecraft.wiki/w/Function_(Java_Edition)) within your plugins. This is handled by using a class provided by the CommandAPI called `FunctionWrapper`, which allows you to execute functions. The CommandAPI also provides support to let you run your own commands within Minecraft function files.

## Functions in 1.16+

:::info

Minecraft 1.16+ changes the way that datapacks are loaded on the server, so that they load before plugins are enabled. This means that non-vanilla commands that are declared in functions and tags will be detected as invalid, causing the server to throw a lot of errors at the very start.

<div class="paper">

To make commands available in datapacks, they have to be registered at the right place. More on that later.

</div>
<div class="spigot">

The CommandAPI reloads datapacks once the server has finished loading using all declared commands, therefore **the error messages at the start of the server can be ignored**.

</div>

:::

## Using custom commands in functions

<div class="paper">

In order to use a command from your plugin in a `.mcfunction` file, you must register your command in your plugin's `bootstrap(BootstrapContext)` method, instead of the `onLoad()`/`onEnable()` method. Failure to do so will not allow the command to be registered for Minecraft functions, causing the function file to fail to load during the server startup phase.

:::info

In short, if you want to register a command which can be used in Minecraft functions, register it in your plugin's `bootstrap(BootstrapContext)` method.

:::

</div>

::::tip Example – Registering command for use in a function

<div class="paper">

Say we have a command `/killall` that simply kills all entities in all worlds on the server. To make it available in a function, we want to register the command in the `bootstrap(BootstrapContext)` method.

:::tabs
===Java
<<< @/../reference-code/paper/src/main/java/createcommands/functionsandtags/Functions.java#functionsExample
===Kotlin
<<< @/../reference-code/paper/src/main/kotlin/createcommands/functionsandtags/Functions.kt#functionsExample
:::

</div>
<div class="spigot">

Say we have a command `/killall` that simply kills all entities in all worlds on the server. It doesn't matter where we register to make the command available in a function, but we'll just use the `onLoad()` method here.

:::tabs
===Java
<<< @/../reference-code/spigot/src/main/java/createcommands/functionsandtags/Functions.java#functionsExample
===Kotlin
<<< @/../reference-code/spigot/src/main/kotlin/createcommands/functionsandtags/Functions.kt#functionsExample
:::

</div>

::::