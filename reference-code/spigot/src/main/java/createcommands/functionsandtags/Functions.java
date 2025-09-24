package createcommands.functionsandtags;

import dev.jorel.commandapi.CommandAPICommand;
import org.bukkit.Bukkit;
import org.bukkit.plugin.java.JavaPlugin;

class Functions {
    // #region functionsExample
    public class Main extends JavaPlugin {
        @Override
        public void onLoad() {
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
