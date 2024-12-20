---
order: 15
authors:
  - JorelAli
  - DerEchtePilz
---

# Incompatible version information

There are a few arguments that are incompatible with various versions of Minecraft. This page outlines the full list of incompatibilities that the CommandAPI has with what versions of Minecraft.

## Argument changes with respect to Minecraft versions

### ChatArgument's chat preview

Incompatible with Minecraft versions **less than 1.19 and greater than 1.19.2** _(Works on 1.19, 1.19.1 and 1.19.2)_

### FunctionArgument

Running functions generated via the `FunctionArgument` on Minecraft version **1.20.3** and **1.20.4** will always return a value of 1, regardless of whether the command succeeds, fails, or returns a result. (Works normally on 1.20.2 and below). Trying to retrieve the list of commands in a function on Minecraft version **1.20.3** and **1.20.4** will always return an empty array.

## CommandAPI behavior with respect to Minecraft versions

### Minecraft version 1.16 and beyond

In Minecraft version **1.16**, the way datapacks were loaded changed in such a way that the CommandAPI had to put in additional countermeasures to provide full support to it. To illustrate this, this was the previous loading sequence for Bukkit servers in Minecraft 1.15:

```mermaid
graph LR
    A(Start loads) --> B(Plugins load)
    B --> C(DataPacks load)
    C --> D(Server finishes loading)
```

However, Minecraft 1.16 changed the loading sequence to the following:

```mermaid
graph LR
    A(Start loads) --> B(DataPacks load)
    B --> C(Plugins load)
    C --> D(Server finishes loading)
```

Because the CommandAPI used to register vanilla Minecraft commands _before_ datapacks (and thus, custom Minecraft functions), it was possible to register custom commands that can be used in functions. With this new loading sequence change in Minecraft 1.16, this meant that datapacks load first before the CommandAPI does, so custom commands are not registered and functions with custom commands would fail to load.

To resolve this, the CommandAPI reloads datapacks _and recipes_ at the end:

```mermaid
graph TD
    A(Server loads) --> B(DataPacks load)
    B --> C(Plugins load)
    C --> D(Server finishes loading)
    D --> E("DataPacks are reloaded (by the CommandAPI)")
    E --> F("Recipes are reloaded (by the CommandAPI)")
```

By doing this, this means:

- Custom functions from datapacks are loaded twice
- Recipes are reloaded twice, _including_ recipes defined by other plugins

Although this sounds pretty bad (since reloading these things twice can be time consuming, thus contributing to the server start-up time), it is the only way to make custom functions work in Minecraft 1.16 and beyond.