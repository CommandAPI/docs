---
order: 2
preferences: ["paper-spigot"]
authors:
  - DerEchtePilz
  - JorelAli
  - willkroboth
---

# Configuration for server admins

The CommandAPI has a few configuration options to change how it functions. These options can be set in the `plugins/CommandAPI/config.yml` file, which is generated automatically when the CommandAPI runs for the first time.

## Default `config.yml` file

The default `config.yml` is shown below:

::: details **config.yml**

<div class="paper">

```yaml
# Verbose outputs (default: false)
# If "true", outputs command registration and unregistration logs in the console
verbose-outputs: false

# Silent logs (default: false)
# If "true", turns off all logging from the CommandAPI, except for errors.
silent-logs: false

# Messages
# Controls messages that the CommandAPI displays to players
messages:

    # Missing executor implementation (default: "This command has no implementations for %s")
    # The message to display to senders when a command has no executor. Available
    # parameters are:
    #   %s - the executor class (lowercase)
    #   %S - the executor class (normal case)
    missing-executor-implementation: This command has no implementations for %s

# Create dispatcher JSON (default: false)
# If "true", the CommandAPI creates a command_registration.json file showing the
# mapping of registered commands. This is designed to be used by developers -
# setting this to "false" will improve command registration performance.
create-dispatcher-json: false

# Fallback to latest version (default: true)
# If "true", the CommandAPI will fall back to the latest available NMS
# implementation when the CommandAPI is used and no implementation for the
# current Minecraft version was found.
fallback-to-latest-nms: true

# Plugins to convert (default: [])
# Controls the list of plugins to process for command conversion.
plugins-to-convert: []

# Other commands to convert (default: [])
# A list of other commands to convert. This should be used for commands which
# are not declared in a plugin.yml file.
other-commands-to-convert: []

# Skip sender proxy (default: [])
# Determines whether the proxy sender should be skipped when converting a
# command. If you are having issues with plugin command conversion, add the
# plugin to this list.
skip-sender-proxy: []
```

</div>
<div class="spigot">

```yaml
# Verbose outputs (default: false)
# If "true", outputs command registration and unregistration logs in the console
verbose-outputs: false

# Silent logs (default: false)
# If "true", turns off all logging from the CommandAPI, except for errors.
silent-logs: false

# Messages
# Controls messages that the CommandAPI displays to players
messages:

    # Missing executor implementation (default: "This command has no implementations for %s")
    # The message to display to senders when a command has no executor. Available
    # parameters are:
    #   %s - the executor class (lowercase)
    #   %S - the executor class (normal case)
    missing-executor-implementation: This command has no implementations for %s

# Create dispatcher JSON (default: false)
# If "true", the CommandAPI creates a command_registration.json file showing the
# mapping of registered commands. This is designed to be used by developers -
# setting this to "false" will improve command registration performance.
create-dispatcher-json: false

# Fallback to latest version (default: false)
# If "true", the CommandAPI will fall back to the latest available NMS
# implementation when the CommandAPI is used and no implementation for the
# current Minecraft version was found.
fallback-to-latest-nms: false

# Skips the initial datapack reload when the server loads (default: true)
# If "true", the CommandAPI will not reload datapacks when the server has finished
# loading. Datapacks will still be reloaded if performed manually when "hook-paper-reload"
# is set to "true" and /minecraft:reload is run.
skip-initial-datapack-reload: true

# Plugins to convert (default: [])
# Controls the list of plugins to process for command conversion.
plugins-to-convert: []

# Other commands to convert (default: [])
# A list of other commands to convert. This should be used for commands which
# are not declared in a plugin.yml file.
other-commands-to-convert: []

# Skip sender proxy (default: [])
# Determines whether the proxy sender should be skipped when converting a
# command. If you are having issues with plugin command conversion, add the
# plugin to this list.
skip-sender-proxy: []
```

</div>
:::

## Configuration settings

### `verbose-outputs`

If `true`, outputs command registration and unregistration logs in the console. This is primarily used for developers to identify issues with command registration.

**Default value**

```yaml
verbose-outputs: false
```

**Example value**

```yaml
verbose-outputs: true
```

### `silent-logs`

If `true`, turns off all logging from the CommandAPI, except for errors.

**Default value**

```yaml
silent-logs: false
```

**Example value**

```yaml
silent-logs: true
```

### `messages`

Controls messages that the CommandAPI displays to players. Available messages:

- `missing-executor-implementation` - the message to display to senders when a command has no executor. This message supports format parameters:
  - `%s` - the executor class (lowercase). For example `craftplayer`
  - `%S` - the executor class (normal case). For example `CraftPlayer`

**Default value**

```yaml
messages:
  missing-executor-implementation: "This command has no implementations for %s"
```

### `create-dispatcher-json`

Controls whether the CommandAPI should generate a `command_registration.json` file showing the mapping of registered commands.

This is primarily designed to be used by developers. Setting this to `false` will slightly improve command registration performance.

The `command_registration.json` JSON representation of commands is in the same format as Minecraft's [_Data Generators_ Commands report](https://minecraft.wiki/w/Minecraft_Wiki:Projects/wiki.vg_merge/Data_Generators#Commands_report). The format is Brigadier's command graph - more information about the JSON format can be found [here](https://minecraft.wiki/w/Minecraft_Wiki:Projects/wiki.vg_merge/Command_Data).

**Default value**

```yaml
create-dispatcher-json: false
```

**Example value**

```yaml
create-dispatcher-json: true
```

### `fallback-to-latest-nms`

Controls whether the CommandAPI should use the latest NMS implementation for command registration and execution if no matching CommandAPI implementation for the version used is found.

This setting can be used to run the CommandAPI on Minecraft versions higher than it can support. For example, if the CommandAPI supports Minecraft 1.18 and Minecraft 1.18.1 comes out, you can use this to enable support for 1.18.1 before an official CommandAPI release comes out that supports 1.18.1.

<div class="paper">

:::warning

Using `fallback-to-latest-nms` is _not_ guaranteed to work and can cause unexpected side effects! However, since we expect very few major breaking changes, we decided to set this value to `true` by default.

:::

**Default value**

```yaml
fallback-to-latest-nms: true
```

**Example value**

```yaml
fallback-to-latest-nms: false
```

</div>
<div class="spigot">

:::danger

This feature is very experimental and should only be used if you know what you’re doing. In almost every case, it is better to wait for an official CommandAPI release that supports the latest version of Minecraft. Using `fallback-to-latest-nms` is _not_ guaranteed to work and can cause unexpected side effects!

:::

**Default value**

```yaml
fallback-to-latest-nms: false
```

**Example value**

```yaml
fallback-to-latest-nms: true
```

### `skip-initial-datapack-reload`

Controls whether the CommandAPI should perform its initial datapack reload when the server has finished loading.

If set to `false`, the CommandAPI reloads all datapacks in a similar fashion to `/minecraft:reload` in order to propagate CommandAPI commands into datapack functions and tags. This operation may cause a slight delay to server startup and is not necessary if you aren’t using datapacks or functions that use CommandAPI commands.

Note that datapacks will still be reloaded if performed manually when `hook-paper-reload` is set to `true` and you run `/minecraft:reload`.

**Default value**

```yaml
skip-initial-datapack-reload: true
```

**Example value**

```yaml
skip-initial-datapack-reload: false
```

</div>

### `plugins-to-convert`

Controls the list of plugins to process for command conversion. See [Command conversion](command-conversion/conversion) for more information.

**Default value**

```yaml
plugins-to-convert: []
```

**Example value**

```yaml
plugins-to-convert:
  - Essentials: ~
```

```yaml
plugins-to-convert:
  - Essentials:
    - speed
    - hat
  - MyPlugin:
    - mycommand
  - MyOtherPlugin: ~
```

```yaml
plugins-to-convert:
  - Essentials:
    - speed <speed>[0..10]
    - speed <target>[minecraft:game_profile]
    - speed (walk|fly) <speed>[0..10]
    - speed (walk|fly) <speed>[0..10] <target>[minecraft:game_profile]
```

### `skip-sender-proxy`

Determines whether the proxy sender should be skipped when converting a command. See [Skipping proxy senders](command-conversion/skip-proxy-senders.md) for more information.

**Default value**

```yaml
skip-sender-proxy: []
```

**Example value**

```yaml
skip-sender-proxy:
  - SkinsRestorer
  - MyPlugin
```

### `other-commands-to-convert`

A list of other commands to convert. This should be used for commands which aren’t declared in a `plugin.yml` file. See [Arbitrary command conversion](command-conversion/single-command#arbitrary-command-conversion) for more information.

**Default value**

```yaml
other-commands-to-convert: []
```

**Example value**

```yaml
other-commands-to-convert:
  - /set
  - mycommand
```
