package createcommands.arguments.types.misc

import dev.jorel.commandapi.CommandAPICommand
import dev.jorel.commandapi.arguments.WorldArgument
import dev.jorel.commandapi.executors.NormalExecutor
import dev.jorel.commandapi.kotlindsl.anyExecutor
import dev.jorel.commandapi.kotlindsl.commandAPICommand
import dev.jorel.commandapi.kotlindsl.worldArgument
import org.bukkit.Bukkit
import org.bukkit.World
import org.bukkit.command.CommandSender

fun worldArguments() {
    // #region worldArgumentsExample
    CommandAPICommand("unloadworld")
        .withArguments(WorldArgument("world"))
        .executes(NormalExecutor<CommandSender, Any> { sender, args ->
            val world = args["world"] as World

            // Unload the world (and save the world's chunks)
            Bukkit.getServer().unloadWorld(world, true)
        })
        .register()
    // #endregion worldArgumentsExample
}

fun worldArgumentsDSL() {
    // #region worldArgumentsExampleDSL
    commandAPICommand("unloadworld") {
        worldArgument("world")
        anyExecutor { sender, args ->
            val world = args["world"] as World

            // Unload the world (and save the world's chunks)
            Bukkit.getServer().unloadWorld(world, true)
        }
    }
    // #endregion worldArgumentsExampleDSL
}