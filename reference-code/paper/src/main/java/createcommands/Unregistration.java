package createcommands;

import dev.jorel.commandapi.CommandAPI;
import dev.jorel.commandapi.CommandAPIBukkit;
import dev.jorel.commandapi.CommandAPICommand;
import dev.jorel.commandapi.CommandAPIPaperConfig;
import dev.jorel.commandapi.arguments.MultiLiteralArgument;
import io.papermc.paper.plugin.bootstrap.BootstrapContext;
import io.papermc.paper.plugin.bootstrap.PluginBootstrap;
import net.kyori.adventure.text.Component;
import org.bukkit.plugin.java.JavaPlugin;
import org.bukkit.scheduler.BukkitRunnable;
import org.jetbrains.annotations.NotNull;

class Unregistration {

    // #region registerBootstrapExample
    public class MyPluginBootstrap implements PluginBootstrap {

        @Override
        public void bootstrap(@NotNull BootstrapContext context) {
            CommandAPI.onLoad(new CommandAPIPaperConfig<>(context.getPluginMeta(), context));

            new CommandAPICommand("inbootstrap")
                .executes((sender, args) -> {
                    sender.sendMessage(Component.text("This command is registed in step 3!"));
                })
                .register();
        }
    }
    // #endregion registerBootstrapExample

    {
        new JavaPlugin() {
            // #region unregisterBukkitExample
            @Override
            public void onLoad() {
                CommandAPIBukkit.unregister("version", true, true);
            }
            // #endregion unregisterBukkitExample
        };

        new JavaPlugin() {
            // #region unregisterVanillaExample
            @Override
            public void onEnable() {
                CommandAPI.unregister("gamemode");
            }
            // #endregion unregisterVanillaExample
        };

        new JavaPlugin() {
            // #region unregisterVanillaAndReplaceExample
            @Override
            public void onEnable() {
                // Register our new /gamemode, with survival, creative, adventure and spectator
                new CommandAPICommand("gamemode")
                    .withArguments(new MultiLiteralArgument("gamemodes", "survival", "creative", "adventure", "spectator"))
                    .executes((sender, args) -> {
                        // Implementation of our /gamemode command
                    })
                    .register();
            }
            // #endregion unregisterVanillaAndReplaceExample
        };

        new JavaPlugin() {
            // #region unregisterPluginExample
            @Override
            public void onEnable() {
                CommandAPIBukkit.unregister("luckperms:luckperms", false, true);
            }
            // #endregion unregisterPluginExample
        };

        new JavaPlugin() {
            // #region unregisterCommandAPIExample
            @Override
            public void onEnable() {
                CommandAPI.unregister("break");
            }
            // #endregion unregisterCommandAPIExample
        };

        new JavaPlugin() {
            // #region unregisterBukkitHelpExample
            @Override
            public void onEnable() {
                CommandAPIBukkit.unregister("help", false, true);
            }
            // #endregion unregisterBukkitHelpExample
        };

        new JavaPlugin() {
            // #region unregisterVanillaNamespaceOnlyExample
            @Override
            public void onEnable() {
                new BukkitRunnable() {
                    @Override
                    public void run() {
                        CommandAPI.unregister("minecraft:gamemode");
                    }
                }.runTaskLater(this, 0);
            }
            // #endregion unregisterVanillaNamespaceOnlyExample
        };

        new JavaPlugin() {
            // #region unregisterDelayedVanillaBadExample
            // NOT RECOMMENDED
            @Override
            public void onEnable() {
                new BukkitRunnable() {
                    @Override
                    public void run() {
                        CommandAPI.unregister("gamemode");
                    }
                }.runTaskLater(this, 0);
            }
            // #endregion unregisterDelayedVanillaBadExample
        };

        new JavaPlugin() {
            // #region unregisterDelayedVanillaGoodExample
            @Override
            public void onEnable() {
                new BukkitRunnable() {
                    @Override
                    public void run() {
                        CommandAPI.unregister("gamemode", true);
                    }
                }.runTaskLater(this, 0);
            }
            // #endregion unregisterDelayedVanillaGoodExample
        };
    }
}
