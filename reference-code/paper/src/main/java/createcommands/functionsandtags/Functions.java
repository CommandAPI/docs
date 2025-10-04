package createcommands.functionsandtags;

import dev.jorel.commandapi.CommandAPICommand;
import io.papermc.paper.plugin.bootstrap.BootstrapContext;
import io.papermc.paper.plugin.bootstrap.PluginBootstrap;
import org.bukkit.Bukkit;
import org.bukkit.plugin.java.JavaPlugin;

class Functions {
    // #region functionsExample
    public class MainBoostrap implements PluginBootstrap {
        @Override
        public void bootstrap(BootstrapContext context) {
            // Commands which will be used in Minecraft functions are registered here

            new CommandAPICommand("killall")
                .executes((sender, args) -> {
                    // Kills all enemies in all worlds
                    Bukkit.getWorlds().forEach(w -> w.getLivingEntities().forEach(e -> e.setHealth(0)));
                })
                .register();
        }
    }
    // #endregion functionsExample
}
