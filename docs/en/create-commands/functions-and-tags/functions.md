---
order: 1
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

The CommandAPI reloads datapacks once the server has finished loading using all declared commands, therefore **the error messages at the start of the server can be ignored**.

:::

## Using custom commands in functions

In order to use a command from your plugin in a `.mcfunction` file, you must register your command in your plugin's `onLoad()` method, instead of the `onEnable()` method. Failure to do so will not allow the command to be registered for Minecraft functions, causing the function file to fail to load during the server startup phase.

:::info

In short, if you want to register a command which can be used in Minecraft functions, register it in your plugin's `onLoad()` method.

:::

::::tip Example – Registering command for use in a function

Say we have a command `/killall` that simply kills all entities in all worlds on the server. If we were to register this in our `onLoad()` method, this would allow us to use the `/killall` command in Minecraft functions and tags.

:::tabs
===Java
<<< @/../reference-code/bukkit/src/main/java/createcommands/functionsandtags/Functions.java#functionsExample
===Kotlin
<<< @/../reference-code/bukkit/src/main/kotlin/createcommands/functionsandtags/Functions.kt#functionsExample
:::

::::