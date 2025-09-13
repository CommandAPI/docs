---
order: 6
title: Async suggestions
authors:
  - DerEchtePilz
  - willkroboth
  - JorelAli
  - MC-XiaoHei
---

# Asynchronous suggestions

In addition to normal suggestions, safely-typed suggestions and suggestions with tooltips, the CommandAPI can support computing the list of suggestions to send to a player asynchronously. This allows you to perform suggestions independent of the main server thread, which is useful for slow operations, such as:

- Retrieving suggestions from a remote database
- Retrieving information from the web
- Retrieving suggestions from a file

![asynchronous suggestions](/images/asyncsuggestions.gif)

The asynchronous methods for suggestions are similar in format to normal suggestions, except for two things: the name of the method ends with `Async`, and the return type for the inner function is a `CompletableFuture`:

```java
ArgumentSuggestions stringsAsync(Function<SuggestionInfo, CompletableFuture<String[]>> suggestions);
ArgumentSuggestions stringsWithTooltipsAsync(Function<SuggestionInfo, CompletableFuture<IStringTooltip[]>> suggestions);
    
SafeSuggestions<T> suggestAsync(Function<SuggestionInfo, CompletableFuture<T[]>> suggestions);
SafeSuggestions<T> tooltipsAsync(Function<SuggestionInfo, CompletableFuture<Tooltip<T>[]>> suggestions);
```

## Creating completable futures

The easiest way to create a `CompleteableFuture` for asynchronous suggestions is to use Java's `CompletableFuture.supplyAsync()` method. If you have a simple array of string suggestions (`String[]`), these can be turned into a completable future (`CompletableFuture<String[]>`) using this method:

```java
new String[] { "dirt", "grass", "cobblestone", }; // [!code --]
    
CompletableFuture.supplyAsync(() -> { // [!code ++]
    return new String[] { "dirt", "grass", "cobblestone", }; // [!code ++]
}); // [!code ++]
```

:::info
As with all asynchronous operations running in a Minecraft server, you should **not** try to access the Bukkit API within an asynchronous block. If you want to run code which accesses Bukkit's API while inside an asynchronous block, you can schedule a synchronous task using the Bukkit scheduler, for example:

```java
CompletableFuture.supplyAsync(() -> {
   Bukkit.getScheduler().scheduleAsyncDelayedTask(plugin, () -> 
       // Your code here
   );

   return new String[] { "dirt", "grass", "cobblestone", };
});
```
:::

## Asynchronous suggestions examples

::::tip Example – Reading keys from a config file

Say you wanted to write a command to modify your plugin's config file. Since the config file is an external file, you ideally want to access the file in a separate thread to the main server thread to retain performance for players on the server. We have the following command syntax:

```mccmd
/setconfig <key> <value>
```

We make use of the `ArgumentSuggestions.stringsAsync` method to provide asynchronous suggestions. In our completable future implementation, we access the keys from the plugin configuration.

:::tabs
===Java
<<< @/../reference-code/bukkit/src/main/java/createcommands/arguments/suggestions/AsyncSuggestions.java#asyncSuggestionsExample
===Kotlin
<<< @/../reference-code/bukkit/src/main/kotlin/createcommands/arguments/suggestions/AsyncSuggestions.kt#asyncSuggestionsExample
===Kotlin DSL
<<< @/../reference-code/bukkit/src/main/kotlin/createcommands/arguments/suggestions/AsyncSuggestions.kt#asyncSuggestionsExampleDSL
:::

::::