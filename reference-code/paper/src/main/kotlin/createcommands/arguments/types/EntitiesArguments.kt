package createcommands.arguments.types

import com.destroystokyo.paper.profile.PlayerProfile
import dev.jorel.commandapi.CommandAPICommand
import dev.jorel.commandapi.arguments.AsyncPlayerProfileArgument
import dev.jorel.commandapi.executors.CommandExecutor
import dev.jorel.commandapi.kotlindsl.anyExecutor
import dev.jorel.commandapi.kotlindsl.asyncPlayerProfileArgument
import dev.jorel.commandapi.kotlindsl.commandAPICommand
import org.bukkit.Bukkit
import java.util.concurrent.CompletableFuture

fun entitiesArguments() {
    // #region playedBeforeArgumentExample
    CommandAPICommand("playedbefore")
        .withArguments(AsyncPlayerProfileArgument("player"))
        .executes(CommandExecutor { sender, args ->
            val profiles = args["player"] as CompletableFuture<List<PlayerProfile>>

            // Directly sends a message to the sender, indicating that the command is running to prevent confusion
            sender.sendMessage("Checking if the player has played before...")

            profiles.thenAccept { profileList ->
                if (Bukkit.getPlayer(profileList.first().id!!)!!.hasPlayedBefore()) {
                    sender.sendMessage("Player has played before")
                } else {
                    sender.sendMessage("Player has never played before")
                }
            }.exceptionally { throwable ->
                // We have to partly handle exceptions ourselves, since we are using a CompletableFuture
                val cause = throwable.cause
                val rootCause = if (cause is RuntimeException) cause.cause else cause

                sender.sendMessage(rootCause?.message ?: "An error occurred")
                null
            }
        })
        .register()
    // #endregion playedBeforeArgumentExample
}

fun entitiesArgumentsDSL() {
    // #region playedBeforeArgumentExampleDSL
    commandAPICommand("playedbefore") {
        asyncPlayerProfileArgument("player")
        anyExecutor { sender, args ->
            val profiles = args["player"] as CompletableFuture<List<PlayerProfile>>

            // Directly sends a message to the sender, indicating that the command is running to prevent confusion
            sender.sendMessage("Checking if the player has played before...")

            profiles.thenAccept { profileList ->
                if (Bukkit.getPlayer(profileList.first().id!!)!!.hasPlayedBefore()) {
                    sender.sendMessage("Player has played before")
                } else {
                    sender.sendMessage("Player has never played before")
                }
            }.exceptionally { throwable ->
                // We have to partly handle exceptions ourselves, since we are using a CompletableFuture
                val cause = throwable.cause
                val rootCause = if (cause is RuntimeException) cause.cause else cause

                sender.sendMessage(rootCause?.message ?: "An error occurred")
                null
            }
        }
    }
    // #endregion playedBeforeArgumentExampleDSL
}