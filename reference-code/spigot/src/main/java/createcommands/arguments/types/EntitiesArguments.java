package createcommands.arguments.types;

import dev.jorel.commandapi.CommandAPICommand;
import dev.jorel.commandapi.arguments.AsyncPlayerProfileArgument;
import org.bukkit.Bukkit;
import org.bukkit.profile.PlayerProfile;

import java.util.List;
import java.util.concurrent.CompletableFuture;

class EntitiesArguments {
    static {
        // #region playedBeforeArgumentExample
        new CommandAPICommand("playedbefore")
            .withArguments(new AsyncPlayerProfileArgument("player"))
            .executes((sender, args) -> {
                CompletableFuture<List<PlayerProfile>> profiles = (CompletableFuture<List<PlayerProfile>>) args.get("player");

                // Directly sends a message to the sender, indicating that the command is running to prevent confusion
                sender.sendMessage("Checking if the player has played before...");

                profiles.thenAccept(profileList -> {
                    if (Bukkit.getOfflinePlayer(profileList.getFirst().getUniqueId()).hasPlayedBefore()) {
                        sender.sendMessage("Player has played before");
                    } else {
                        sender.sendMessage("Player has never played before");
                    }
                }).exceptionally(throwable -> {
                    // We have to partly handle exceptions ourselves, since we are using a CompletableFuture
                    Throwable cause = throwable.getCause();
                    Throwable rootCause = cause instanceof RuntimeException ? cause.getCause() : cause;

                    sender.sendMessage(rootCause.getMessage());
                    return null;
                });
            })
            .register();
        // #endregion playedBeforeArgumentExample
    }
}
