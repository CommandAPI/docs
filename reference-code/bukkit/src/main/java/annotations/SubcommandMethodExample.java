package annotations;

import dev.jorel.commandapi.annotations.Permission;
import dev.jorel.commandapi.annotations.Subcommand;
import dev.jorel.commandapi.annotations.arguments.AEntitySelectorArgument;
import dev.jorel.commandapi.annotations.arguments.AStringArgument;
import org.bukkit.entity.Player;

import static annotations.WarpCommand.warps;

class SubcommandMethodExample {
    // #region subcommandMethodExample
    @Subcommand("create")
    @Permission("warps.create")
    public static void createWarp(Player player, @AStringArgument String warpName) {
        warps.put(warpName, player.getLocation());
    }
    // #endregion subcommandMethodExample

    // #region subcommandAliasesMethodExample
    @Subcommand({"teleport", "tp"})
    public static void teleport(Player player, @AEntitySelectorArgument.OnePlayer Player target) {
        player.teleport(target);
    }
    // #endregion subcommandAliasesMethodExample
}
