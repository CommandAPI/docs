---
order: 3
authors:
  - JorelAli
  - DerEchtePilz
  - willkroboth
---

# The FunctionWrapper

The CommandAPI includes the `FunctionWrapper` class which is a wrapper for Minecraft's functions. It allows you to execute the commands that are represented by the respective `.mcfunction` file.

The `FunctionWrapper` class is an extension of the `SimpleFunctionWrapper` class. It is a `SimpleFunctionWrapper` which has been constructed from an existing command sender when a command is used. This means that the command sender has already been "baked into" the `FunctionWrapper` object, allowing you to run it without having to provide a command sender.

## FunctionWrapper methods

The `FunctionWrapper` class has the following methods:

```java
class FunctionWrapper extends SimpleFunctionWrapper {

    // Methods specific to this class
    int run();
    int runAs(Entity e);

    // Methods inherited from SimpleFunctionWrapper
    static SimpleFunctionWrapper getFunction(NamespacedKey key);
    static SimpleFunctionWrapper[] getTag(NamespacedKey key);
    static Set<NamespacedKey> getFunctions();
    static Set<NamespacedKey> getTags();
    int run(CommandSender sender);
    String[] getCommands();
    NamespacedKey getKey();
}
```

These methods allow you to interact with the Minecraft function that this class wraps.

### `run()`

:::danger run() support in 1.20.3+

As of CommandAPI 9.3.0 (compatible with Minecraft versions 1.20.3 and 1.20.4), calling `run()` will always return a value of `1`, regardless of whether the command succeeds, fails, or returns a result.

:::

The `run()` method runs the function. The command executor that runs this function is the command executor that was used to retrieve it. For example, if a player in-game populated this argument, then the player will be filled in for `@p` and the player's location would be used for things such as `~ ~ ~`:

:::tabs
===Java
<<< @/../reference-code/src/main/java/createcommands/functionsandtags/FunctionWrapperRef.java#runExample
===Kotlin
<<< @/../reference-code/src/main/kotlin/createcommands/functionsandtags/FunctionWrapperRef.kt#runExample
:::

### `runAs(Entity)`

:::danger runAs(Entity) support in 1.20.3+

As of CommandAPI 9.3.0 (compatible with Minecraft versions 1.20.3 and 1.20.4), calling `runAs(Entity)` will always return a value of `1`, regardless of whether the command succeeds, fails, or returns a result.

:::

The `runAs(Entity)` is the same as the `run()` method, but it allows you to change the command executor to another entity.