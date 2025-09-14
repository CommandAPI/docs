package createcommands

import dev.jorel.commandapi.CommandAPI
import dev.jorel.commandapi.CommandAPIBukkit
import dev.jorel.commandapi.CommandAPICommand
import dev.jorel.commandapi.CommandAPIPaperConfig
import dev.jorel.commandapi.arguments.MultiLiteralArgument
import dev.jorel.commandapi.executors.CommandExecutor
import io.papermc.paper.plugin.bootstrap.BootstrapContext
import io.papermc.paper.plugin.bootstrap.PluginBootstrap
import net.kyori.adventure.text.Component
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitRunnable

class UnregistrationKT {

    // #region registerBootstrapExample
    class MyPluginBootstrap : PluginBootstrap {

        override fun bootstrap(context: BootstrapContext) {
            CommandAPI.onLoad(CommandAPIPaperConfig(context.pluginMeta, context))

            CommandAPICommand("inbootstrap")
                .executes(CommandExecutor { sender, _ ->
                    sender.sendMessage(Component.text("This command is registed in step 3!"))
                })
                .register()
        }
    }
    // #endregion registerBootstrapExample

    class A : JavaPlugin() {
        // #region unregisterBukkitExample
        override fun onLoad() {
            CommandAPIBukkit.unregister("version", true, true)
        }
        // #endregion unregisterBukkitExample
    }

    class B : JavaPlugin() {
        // #region unregisterVanillaExample
        override fun onEnable() {
            CommandAPI.unregister("gamemode")
        }
        // #endregion unregisterVanillaExample
    }

    class C : JavaPlugin() {
        // #region unregisterVanillaAndReplaceExample
        override fun onEnable() {
            // Register our new /gamemode, with survival, creative, adventure and spectator
            CommandAPICommand("gamemode")
                .withArguments(MultiLiteralArgument("gamemodes", "survival", "creative", "adventure", "spectator"))
                .executes(CommandExecutor { sender, args ->
                    // Implementation of our /gamemode command
                })
                .register()
        }
        // #endregion unregisterVanillaAndReplaceExample
    }

    class D : JavaPlugin() {
        // #region unregisterPluginExample
        override fun onEnable() {
            CommandAPIBukkit.unregister("luckperms:luckperms", false, true)
        }
        // #endregion unregisterPluginExample
    }

    class E : JavaPlugin() {
        // #region unregisterCommandAPIExample
        override fun onEnable() {
            CommandAPI.unregister("break")
        }
        // #endregion unregisterCommandAPIExample
    }

    class F : JavaPlugin() {
        // #region unregisterBukkitHelpExample
        override fun onEnable() {
            CommandAPIBukkit.unregister("help", false, true)
        }
        // #endregion unregisterBukkitHelpExample
    }

    class G : JavaPlugin() {
        // #region unregisterVanillaNamespaceOnlyExample
        override fun onEnable() {
            object : BukkitRunnable() {
                override fun run() {
                    CommandAPI.unregister("minecraft:gamemode")
                }
            }.runTaskLater(this, 0)
        }
        // #endregion unregisterVanillaNamespaceOnlyExample
    }

    class H : JavaPlugin() {
        // #region unregisterDelayedVanillaBadExample
        // NOT RECOMMENDED
        override fun onEnable() {
            object : BukkitRunnable() {
                override fun run() {
                    CommandAPI.unregister("gamemode")
                }
            }.runTaskLater(this, 0)
        }
        // #endregion unregisterDelayedVanillaBadExample
    }

    class I : JavaPlugin() {
        // #region unregisterDelayedVanillaGoodExample
        override fun onEnable() {
            object : BukkitRunnable() {
                override fun run() {
                    CommandAPI.unregister("gamemode", true)
                }
            }.runTaskLater(this, 0)
        }
        // #endregion unregisterDelayedVanillaGoodExample
    }
}