package devsetup

import dev.jorel.commandapi.CommandAPI
import dev.jorel.commandapi.CommandAPIBukkitConfig
import dev.jorel.commandapi.CommandAPICommand
import dev.jorel.commandapi.CommandAPIPaperConfig
import dev.jorel.commandapi.executors.CommandExecutor
import org.bukkit.plugin.java.JavaPlugin

class KotlinShadingPlugin : JavaPlugin()
fun shading() {
    val plugin: JavaPlugin = KotlinShadingPlugin()
    // #region bukkitConfigExample
    CommandAPI.onLoad(CommandAPIPaperConfig(plugin.pluginMeta, plugin).silentLogs(true))
    // #endregion bukkitConfigExample
}

// #region shadingExample
class MyPlugin : JavaPlugin() {
    override fun onLoad() {
        CommandAPI.onLoad(CommandAPIPaperConfig(this.pluginMeta, this).verboseOutput(true)) // Load with verbose output

        CommandAPICommand("ping")
            .executes(CommandExecutor { sender, _ ->
                sender.sendMessage("pong!")
            })
            .register()
    }

    override fun onEnable() {
        CommandAPI.onEnable()
        // Register commands, listeners etc.
    }

    override fun onDisable() {
        CommandAPI.onDisable()
    }
}
// #endregion shadingExample