---
order: 3
authors:
  - DerEchtePilz
  - willkroboth
  - JorelAli
---

# String suggestions

## Suggestions with a String Array

The first method, `replaceSuggestions(ArgumentSuggestions suggestions)`, allows you to _replace_ the suggestions normally associated with that argument. This can be replaced with an array of strings by using the `strings(String... suggestions)` method.

::::tip Example – Teleport to worlds by replacing suggestions

Say we're creating a plugin with the ability to teleport to different warps on the server. If we were to retrieve a list of warps, we would be able to replace the suggestions of a typical `StringArgument` to teleport to that warp. Let's create a command with the following syntax:

```mccmd
/warp <warp>
```

We then implement our warp teleporting command using `replaceSuggestions()` on the `StringArgument` to provide a list of warps to teleport to:

:::tabs
===Java
<<< @/../reference-code/src/main/java/createcommands/arguments/suggestions/StringSuggestions.java#createWarpCommand
===Kotlin
<<< @/../reference-code/src/main/kotlin/createcommands/arguments/suggestions/StringSuggestions.kt#createWarpCommand
:::

::::

The second method, `includeSuggestions(ArgumentSuggestions suggestions)`, allows you to _include_ additional suggestions in combination with the list of existing suggestions for a command.

## Suggestions depending on a command sender

The `strings(Function<SuggestionInfo, String[]> suggestions)` method in `ArgumentSuggestions` allows you to modify suggestions normally associated with that argument with an array of strings that are evaluated dynamically using information about the command sender, using the `sender()` method.

::::tip Example - Friend list by replacing suggestions

Say you have a plugin which has a "friend list" for players. If you want to teleport to a friend in that list, you could use a `PlayerArgument`, which has the list of suggestions replaced with the list of friends that that player has. Since the list of friends _depends on the sender_, we can use the function to determine what our suggestions should be. Let's use the following command to teleport to a friend from our friend list:

```mccmd
/friendtp <friend>
```

Let's say we have a simple class to get the friends of a command sender:

:::tabs
===Java
<<< @/../reference-code/src/main/java/createcommands/arguments/suggestions/StringSuggestions.java#createFriendsClass
===Kotlin
<<< @/../reference-code/src/main/kotlin/createcommands/arguments/suggestions/StringSuggestions.kt#createFriendsClass
:::

We can then use this to generate our suggested list of friends:

:::tabs
===Java
<<< @/../reference-code/src/main/java/createcommands/arguments/suggestions/StringSuggestions.java#createFriendCommand
===Kotlin
<<< @/../reference-code/src/main/kotlin/createcommands/arguments/suggestions/StringSuggestions.kt#createFriendCommand
:::

::::

## Suggestions depending on previous arguments

The `strings(Function<SuggestionInfo, String[]>)` method also has the capability to suggest arguments based on the values of previously inputted arguments, using the `previousArgs()` method in `SuggestionInfo`. This `previousArgs()` method returns a **list of previous arguments** which are parsed exactly like any regular CommandAPI command argument.

:::danger

The ability to use previously declared arguments _does not work via redirects_. This means that any command that comes before it that leads into a command that uses suggestions depending on previous arguments will not work. For example, if we had a command `/mycommand <arg1> <arg2> <arg3>` and ran it as normal, it would work as normal:

```mccmd
/mycommand arg1 arg2 arg3
```

However, if we redirect execution via the `/execute` command to have the following:

```mccmd
/execute run mycommand <suggestions>
```

This won't work, because we make use of a redirect:

$$
\text{/execute run} \xrightarrow{\text{redirect}} \text{mycommand arg1 arg2 arg3}
$$

It is not possible to access the [`CommandArguments`](../command-arguments) of previously declared arguments. **If a command occurs via a redirect, the [`CommandArguments`](../command-arguments) of previously declared arguments will be null**.

:::

::::tip Example – Sending a message to a nearby player

Say we wanted to create a command that lets you send a message to a specific player in a given radius. _(This is a bit of a contrived example, but let's roll with it)_. To do this, we'll use the following command syntax:

```mccmd
/localmsg <radius> <target> <message>
```

When run, this command will send a message to a target player within the provided radius. To help identify which players are within a radius, we can replace the suggestions on the `<target>` argument to include a list of players within the provided radius. We do this with the following code:

:::tabs
===Java
<<< @/../reference-code/src/main/java/createcommands/arguments/suggestions/StringSuggestions.java#createLocalMessageCommand
===Kotlin
<<< @/../reference-code/src/main/kotlin/createcommands/arguments/suggestions/StringSuggestions.kt#createLocalMessageCommand
:::

As shown in this code, we use the `previousArgs()` method access the previously declared arguments. In this example, `info.previousArgs()` will be `{ int }`, where this `int` refers to the radius. Note how this object array only has the previously declared arguments (and not for example `{ int, Player, String }`).

::::