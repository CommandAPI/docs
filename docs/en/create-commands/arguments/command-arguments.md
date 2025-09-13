---
order: 2
authors:
  - DerEchtePilz
  - willkroboth
  - JorelAli
title: CommandArguments class
---

# The `CommandArguments` class

The `CommandArguments` class was introduced in CommandAPI 9.0.0 and provides a much more powerful way of accessing arguments than just an array of arguments which existed until 9.0.0.

While the argument array just gives the possibility to access the arguments via the array notation (`args[0]`), the `CommandArguments` class offers much more, including:

- [Access the inner structure directly](#access-the-inner-structure-directly)
- [Access arguments](#access-arguments)
- [Access raw arguments](#access-raw-arguments)
- [Access unsafe arguments](#access-unsafe-arguments)
- [Access safe arguments](#access-safe-arguments)

## Access the inner structure directly

To access the inner structure of the `CommandArguments` class directly, it provides various methods which you can learn about below:

**Get the argument array**

```java
Object[] args();
```

This returns the array of arguments as defined when creating your command.

**Get the arguments mapped to their node name**

```java
Map<String, Object> argsMap();
```

This returns an unmodifiable map which contains the arguments mapped to their node names.

**Get the raw argument array**

```java
String[] rawArgs();
 ```

This returns the array of raw arguments. An explanation of what raw arguments are can be found in the section about [accessing raw arguments](#access-raw-arguments).

**Get the raw arguments mapped to their node name**

```java
Map<String, String> rawArgsMap();
```

This returns an unmodifiable map which contains the raw arguments mapped to their node names. An explanation of what raw arguments are can be found in the section about [accessing raw arguments](#access-raw-arguments).

**Other useful methods**

```java
String fullInput();    // Returns the full command input (including the / character)
int count();           // Returns the amount of arguments
```

## Access arguments

The `CommandArguments` class provides its arguments in a way similar to how a `List` or `Map` let you access their contents. When using these methods, you need to cast the arguments to their respective type. The `CommandArguments` class also provides a way to [access unsafe arguments](#access-unsafe-arguments).

You can choose to access arguments by their node name or by their index.

### Access arguments by node name

Accessing arguments by their node name is the recommended way of accessing arguments.

There are four methods you can use to access arguments by their node name:

```java
Object get(String nodeName);
Object getOrDefault(String nodeName, Object defaultValue);
Object getOrDefault(String nodeName, Supplier<?> defaultValue);
Optional<Object> getOptional(String nodeName);
```

### Access arguments by index

Accessing arguments by their index is the original way of accessing arguments. However, we recommend to [access arguments by node name](#access-arguments-by-node-name).

Similar to the four methods of accessing arguments by their node name, there also are four methods you can use to access arguments by their index:

```java
Object get(int index);
Object getOrDefault(int index, Object defaultValue);
Object getOrDefault(int index, Supplier<?> defaultValue);
Optional<Object> getOptional(int index);
```

::::tip Example - Access arguments by node name and index

To demonstrate the different ways of accessing arguments, we want to register a command `/mycommand` like this:

```mccmd
/mycommand <name> <amount>
/mycommand <name> <amount> <player>
/mycommand <name> <amount> <player> <target>
/mycommand <name> <amount> <player> <target> <message>
```

This is how these commands are implemented:

:::tabs
===Java
<<< @/../reference-code/bukkit/src/main/java/createcommands/arguments/CommandArguments.java#getArgExample
===Kotlin
<<< @/../reference-code/bukkit/src/main/kotlin/createcommands/arguments/CommandArguments.kt#getArgExample
:::

::::

## Access raw arguments

A "raw argument" is the `String` form of an argument as written in a command. For example:

A user defines a command `/mycommand` that accepts a `double` as the first argument and an entity selector as the second argument. It could be executed with the values `15.3` as the `double` value and `@e` as the entity selector:

```mccmd
/mycommand 15.3 @e
```

When [accessing the raw arguments](#access-raw-arguments) of this command there are `15.3` and `@e` available as `String`s.

However, when [accessing the arguments](#access-arguments) of this command there is `15.3` available as `double` and `@e` available as `Collection<Entity>`.

Raw arguments are accessed basically the same way you would [access arguments](#access-arguments). You can access them by their node name and their index in the argument array.

### Access raw arguments by node name

Accessing raw arguments by their node name is the recommended way of doing it.

To access raw arguments by their node name, you can use these methods:

```java
String getRaw(String nodeName);
String getOrDefaultRaw(String nodeName, String defaultValue);
String getOrDefaultRaw(String nodeName, Supplier<String> defaultValue);
Optional<String> getRawOptional(String nodeName);
```

### Access raw arguments by index

Of course, if you don't want to access raw arguments by their node name, we also provide the option to access them by index with these methods:

```java
String getRaw(int index);
String getOrDefaultRaw(int index, String defaultValue);
String getOrDefaultRaw(int index, Supplier<String> defaultValue);
Optional<String> getRawOptional(int index);
```

::::tip Example - Access raw arguments by node name and index

To demonstrate how to access raw arguments, we’re going to implement the `/mycommand` again, this time with the following syntax:

```mccmd
/mycommand <entities>
```

We want to find out which entity selector is being used when the command is executed.

:::tabs
===Java
<<< @/../reference-code/bukkit/src/main/java/createcommands/arguments/CommandArguments.java#getRawExample
===Kotlin
<<< @/../reference-code/bukkit/src/main/kotlin/createcommands/arguments/CommandArguments.kt#getRawExample
:::

::::

## Access unsafe arguments

When [accessing arguments](#access-arguments) you need to cast the `Object` returned by these methods to the type the argument returns. More about casting arguments [here](./arguments#argument-casting).

Unsafe arguments provide the ability to access an argument without needing to cast it to the argument's type. When not using unsafe arguments, your code looks like this:

```java
String name = (String) args.get("name");
```

When using unsafe arguments, you can make your code look like this:

```java
String name = args.getUnchecked("name");
```

Unsafe arguments can also be accessed by their node names and their indices.

### Access arguments by node name

Node name can also access unsafe arguments which, again, is the recommended way of doing it.

Use these methods when accessing unsafe arguments by their node name:

```java
T getUnchecked(String nodeName);
T getOrDefaultUnchecked(String nodeName, T defaultValue);
T getOrDefaultUnchecked(String nodeName, Supplier<T> defaultValue);
Optional<T> getOptionalUnchecked(String nodeName);
```

### Access arguments by index

If you want to access unsafe arguments by index, you can do that by using these methods:

```java
T getUnchecked(int index);
T getOrDefaultUnchecked(int index, T defaultValue);
T getOrDefaultUnchecked(int index, Supplier<T> defaultValue);
Optional<T> getOptionalUnchecked(int index);
```

::::tip Example - Access unsafe arguments by node name and index

Finally, we want to implement the `/mycommand` again. This time we use this syntax:

```mccmd
/mycommand <player>
```

Here, we don't actually want to cast the argument, so we use unsafe arguments to remove that cast:

:::tabs
===Java
<<< @/../reference-code/bukkit/src/main/java/createcommands/arguments/CommandArguments.java#getUncheckedExample
===Kotlin
<<< @/../reference-code/bukkit/src/main/kotlin/createcommands/arguments/CommandArguments.kt#getUncheckedExample
:::

::::

## Access safe arguments

:::danger **Developer's Note:**

The following methods can’t be used to access a value returned by a `CustomArgument` as its return type depends on the base argument for it.

:::

Lastly, the CommandArguments class offers you a way to access your arguments in a safer way by using internal casts.
Again, methods are offered to access arguments by their
index or their node name:

```java
T getByClass(String nodeName, Class<T> argumentType);
T getByClassOrDefault(String nodeName, Class<T> argumentType, T defaultValue);
T getOptionalByClass(String nodeName, Class<T> argumentType);
T getByClass(int index, Class<T> argumentType);
T getByClassOrDefault(int index, Class<T> argumentType, T defaultValue);
T getOptionalByClass(int index, Class<T> argumentType);
```

Compared to the other methods the `CommandArguments` class offers, these methods take an additional parameter of type `Class<T>` where `T` is the return type
of the argument with the given node name or index.

For example, say you declared a `new StringArgument("value")` and you now want to access the return value of this argument using safe casting. This would be done as follows:

:::tabs
===Java
```java
String value = args.getByClass("value", String.class);
```
===Kotlin
```kotlin
val value = args.getByClass("value", String::class.java)
```
:::

### Access safe arguments using an argument instance

Finally, there is one more, even safer way of accessing safe arguments: by using an argument instance:

```java
T getByArgument(Argument<T> argumentType);
T getByArgumentOrDefault(Argument<T> argumentType, T defaultValue);
T getOptionalByArgument(Argument<T> argumentType);
```

However, while safer, this also introduces the need to first initialize your arguments before you can start implementing your command.
To visualize this, we want to implement the command from [Access arguments by node name and index](#access-arguments-by-index) again, but this time using safe arguments with an argument instance:

::::tip Example – Access safe arguments using an argument instance

:::tabs
===Java
<<< @/../reference-code/bukkit/src/main/java/createcommands/arguments/CommandArguments.java#getByArgumentExample
===Kotlin
<<< @/../reference-code/bukkit/src/main/kotlin/createcommands/arguments/CommandArguments.kt#getByArgumentExample
:::

::::