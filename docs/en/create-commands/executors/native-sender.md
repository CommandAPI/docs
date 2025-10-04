---
order: 4
authors:
  - DerEchtePilz
  - willkroboth
  - JorelAli
---

# Native command senders

In a similar way that the `ProxiedCommandSender` is used to store information about two command senders: a caller (the one that wrote the command) and a callee (the one that ends up executing the command), the CommandAPI also has a special `NativeProxyCommandSender` class which is a more powerful representation of the `ProxiedCommandSender` class. In addition to inheriting all of the methods from `ProxiedCommandSender`, this class also has the following two methods:

```java
public World getWorld();
public Location getLocation();
```

These methods contain additional information about the command executor's state, and are primarily designed to be used with Minecraft's `/execute` command.

## Minecraft's `/execute` arguments

The following table represents how the different `/execute` arguments affect the `NativeProxyCommandSender` class:

| /execute argument     | How it changes NativeProxyCommandSender       |
|-----------------------|-----------------------------------------------|
| `/execute align`      | Changes `getLocation()` only                  |
| `/execute anchored`   | Changes nothing                               |
| `/execute as`         | Changes `getCallee()` only                    |
| `/execute at`         | Changes `getLocation()` and `getWorld()` only |
| `/execute facing`     | Changes `getLocation()` only                  |
| `/execute in`         | Changes `getWorld()` only                     |
| `/execute positioned` | Changes `getLocation()` only                  |
| `/execute rotated`    | Changes `getLocation()`only                   |

## Using the native CommandSender

As described in the section about [normal command executors](./normal-executors), there are multiple methods to register a command executor. For the `NativeProxyCommandSender`, the `.executesNative()` method should be used.

:::info
The `.executesNative()` method has the highest priority over all over `.executesXXX()` methods - if you use the `.executesNative()` method, no other execution method will be run.
:::

::::tip Example – A really simple "break block" command

Say we wanted to make a command that simply sets the current block to air. For this example, we'll use the following command syntax:

```mccmd
/break
```

As you can see, this command takes no arguments. This is fine, since our "argument" will be the sender's location. We can access the sender's location using the `getLocation()` method from the `NativeProxyCommandSender` object, available from the `.executesNative()` method:

:::tabs
===Java
<<< @/../reference-code/bukkit/src/main/java/createcommands/executors/NativeSender.java#breakCommandExample
===Kotlin
<<< @/../reference-code/bukkit/src/main/kotlin/createcommands/executors/NativeSender.kt#breakCommandExample
===Kotlin DSL
<<< @/../reference-code/bukkit/src/main/kotlin/createcommands/executors/NativeSender.kt#breakCommandExampleDSL
:::

This can now be used via the following command examples:

```mccmd
/execute positioned 100 62 50 run break
/execute at @e[type=pig] run break
/execute in minecraft:overworld positioned 20 60 -20 run break
```

::::

## Constructing a `NativeProxyCommandSender`

You can create a `NativeProxyCommandSender` object yourself using the static `from` method:

```java
NativeProxyCommandSender from(CommandSender caller, CommandSender callee, Location location, World world);
```

This `CommandSender` will work the same as any other `NativeProxyCommandSender` you would get while using `executesNative`. For example, you could use it to make a simple version of `/execute`, like so:

:::tabs
===Java
<<< @/../reference-code/bukkit/src/main/java/createcommands/executors/NativeSender.java#constructorExample
===Kotlin
<<< @/../reference-code/bukkit/src/main/kotlin/createcommands/executors/NativeSender.kt#constructorExample
===Kotlin DSL
<<< @/../reference-code/bukkit/src/main/kotlin/createcommands/executors/NativeSender.kt#constructorExampleDSL
:::
