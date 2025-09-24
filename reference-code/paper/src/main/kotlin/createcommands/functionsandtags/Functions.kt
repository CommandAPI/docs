package createcommands.functionsandtags

import dev.jorel.commandapi.CommandAPICommand
import dev.jorel.commandapi.executors.CommandExecutor
import io.papermc.paper.plugin.bootstrap.BootstrapContext
import io.papermc.paper.plugin.bootstrap.PluginBootstrap
import org.bukkit.Bukkit
import org.bukkit.plugin.java.JavaPlugin

// #region functionsExample
class MainBootstrap : PluginBootstrap {
    override fun bootstrap(context: BootstrapContext) {
        // Commands which will be used in Minecraft functions are registered here

        CommandAPICommand("killall")
            .executes(CommandExecutor { _, _ ->
                // Kills all enemies in all worlds
                Bukkit.getWorlds().forEach { world -> world.livingEntities.forEach { entity -> entity.health = 0.0 } }
            })
            .register()
    }
}
// #endregion functionsExample