package createcommands.arguments.types

import dev.jorel.commandapi.CommandAPICommand
import dev.jorel.commandapi.arguments.EntitySelectorArgument
import dev.jorel.commandapi.arguments.GreedyStringArgument
import dev.jorel.commandapi.executors.CommandExecutor
import dev.jorel.commandapi.kotlindsl.anyExecutor
import dev.jorel.commandapi.kotlindsl.commandAPICommand
import dev.jorel.commandapi.kotlindsl.entitySelectorArgumentOnePlayer
import dev.jorel.commandapi.kotlindsl.greedyStringArgument
import org.bukkit.entity.Player

fun stringsArguments() {
    // #region greedyStringArgumentsExample
    CommandAPICommand("message")
        .withArguments(EntitySelectorArgument.OnePlayer("target"))
        .withArguments(GreedyStringArgument("message"))
        .executes(CommandExecutor { _, args ->
            (args["target"] as Player).sendMessage(args["message"] as String)
        })
        .register()
    // #endregion greedyStringArgumentsExample
}

fun stringsArgumentsDSL() {
    // #region greedyStringArgumentsExampleDSL
    commandAPICommand("message") {
        entitySelectorArgumentOnePlayer("target")
        greedyStringArgument("message")
        anyExecutor { _, args ->
            (args["target"] as Player).sendMessage(args["message"] as String)
        }
    }
    // #endregion greedyStringArgumentsExampleDSL
}