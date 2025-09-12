package createcommands.arguments.types

import com.destroystokyo.paper.profile.PlayerProfile
import dev.jorel.commandapi.CommandAPICommand
import dev.jorel.commandapi.arguments.*
import dev.jorel.commandapi.executors.CommandExecutor
import dev.jorel.commandapi.executors.PlayerCommandExecutor
import dev.jorel.commandapi.kotlindsl.*
import org.bukkit.Bukkit
import org.bukkit.entity.Entity
import org.bukkit.entity.EntityType
import org.bukkit.entity.Player
import java.util.concurrent.CompletableFuture

fun entitiesArguments() {
    // #region entitySelectorArgumentExample
    CommandAPICommand("remove")
        // Using a collective entity selector to select multiple entities
        .withArguments(EntitySelectorArgument.ManyEntities("entities"))
        .executes(CommandExecutor { sender, args ->
            // Parse the argument as a collection of entities (as stated above in the documentation)
            val entities = args["entities"] as Collection<Entity>

            sender.sendMessage("Removed ${entities.size} entities")
            for (e in entities) {
                e.remove()
            }
        })
        .register()
    // #endregion entitySelectorArgumentExample

    // #region buildNoSelectorSuggestions
    val noSelectorSuggestions = PlayerProfileArgument("target")
        .replaceSafeSuggestions(SafeSuggestions.suggest { info ->
            Bukkit.getOnlinePlayers().map { player -> player.playerProfile }.toTypedArray()
        })
    // #endregion buildNoSelectorSuggestions

    // #region noSelectorSuggestionsExample
    CommandAPICommand("warp")
        .withArguments(noSelectorSuggestions)
        .executesPlayer(PlayerCommandExecutor { player, args ->
            val target = args["target"] as Player
            player.teleport(target)
        })
        .register()
    // #endregion noSelectorSuggestionsExample

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

    // #region entityTypeArgumentExample
    CommandAPICommand("spawnmob")
        .withArguments(EntityTypeArgument("entity"))
        .withArguments(IntegerArgument("amount", 1, 100)) // Prevent spawning too many entities
        .executesPlayer(PlayerCommandExecutor { player, args ->
            for (i in 0 until args["amount"] as Int) {
                player.world.spawnEntity(player.location, args["entity"] as EntityType)
            }
        })
        .register()
    // #endregion entityTypeArgumentExample
}

fun entitiesArgumentsDSL() {
    // #region entitySelectorArgumentExampleDSL
    commandAPICommand("remove") {
        // Using a collective entity selector to select multiple entities
        entitySelectorArgumentManyEntities("entities")
        anyExecutor { sender, args ->
            // Parse the argument as a collection of entities (as stated above in the documentation)
            val entities = args["entities"] as Collection<Entity>

            sender.sendMessage("Removed ${entities.size} entities")
            for (e in entities) {
                e.remove()
            }
        }
    }
    // #endregion entitySelectorArgumentExampleDSL

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

    // #region entityTypeArgumentExampleDSL
    commandAPICommand("spawnmob") {
        entityTypeArgument("entity")
        integerArgument("amount", 1, 100) // Prevent spawning too many entities
        playerExecutor { player, args ->
            for (i in 0 until args["amount"] as Int) {
                player.world.spawnEntity(player.location, args["entity"] as EntityType)
            }
        }
    }
    // #endregion entityTypeArgumentExampleDSL
}