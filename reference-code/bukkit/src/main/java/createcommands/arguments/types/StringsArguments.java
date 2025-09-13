package createcommands.arguments.types;

import dev.jorel.commandapi.CommandAPICommand;
import dev.jorel.commandapi.arguments.EntitySelectorArgument;
import dev.jorel.commandapi.arguments.GreedyStringArgument;
import org.bukkit.entity.Player;

class StringsArguments {
    static {
        // #region greedyStringArgumentsExample
        new CommandAPICommand("message")
            .withArguments(new EntitySelectorArgument.OnePlayer("target"))
            .withArguments(new GreedyStringArgument("message"))
            .executes((sender, args) -> {
                ((Player) args.get("target")).sendMessage((String) args.get("message"));
            })
            .register();
        // #endregion greedyStringArgumentsExample
    }
}
