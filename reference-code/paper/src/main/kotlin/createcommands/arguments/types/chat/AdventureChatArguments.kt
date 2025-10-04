package createcommands.arguments.types.chat

import dev.jorel.commandapi.CommandAPICommand
import dev.jorel.commandapi.arguments.*
import dev.jorel.commandapi.executors.CommandExecutor
import dev.jorel.commandapi.executors.PlayerCommandExecutor
import dev.jorel.commandapi.kotlindsl.*
import net.kyori.adventure.chat.ChatType
import net.kyori.adventure.chat.SignedMessage
import net.kyori.adventure.inventory.Book
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.Bukkit
import org.bukkit.entity.Player

fun adventureChatArguments() {
    // #region namedTextColorExample
    CommandAPICommand("namecolor")
        .withArguments(ChatColorArgument("chatcolor"))
        .executesPlayer(PlayerCommandExecutor { player, args ->
            val color = args["chatcolor"] as NamedTextColor
            player.displayName(Component.text().color(color).append(Component.text(player.name)).build())
        })
        .register()
    // #endregion namedTextColorExample

    // #region componentExample
    CommandAPICommand("showbook")
        .withArguments(EntitySelectorArgument.OnePlayer("target"))
        .withArguments(TextArgument("title"))
        .withArguments(StringArgument("author"))
        .withArguments(ChatComponentArgument("contents"))
        .executes(CommandExecutor { _, args ->
            val target = args["target"] as Player
            val title = args["title"] as String
            val author = args["author"] as String
            val content = args["contents"] as Component

            // Create a book and show it to the user (Requires Paper)
            val mybook = Book.book(Component.text(title), Component.text(author), content)
            target.openBook(mybook)
        })
        .register()
    // #endregion componentExample

    // #region chatArgumentExample
    CommandAPICommand("pbroadcast")
        .withArguments(ChatArgument("message"))
        .executesPlayer(PlayerCommandExecutor { sender, args ->
            val message = args["message"] as SignedMessage

            // Sends the message as if it was sent by a player
            Bukkit.getServer().sendMessage(message, ChatType.CHAT.bind(Component.text(sender.name)))
        })
        .register()
    // #endregion chatArgumentExample
}

fun adventureChatArgumentsDSL() {
    // #region namedTextColorExampleDSL
    commandAPICommand("namecolor") {
        chatColorArgument("chatcolor")
        playerExecutor { player, args ->
            val color = args["chatcolor"] as NamedTextColor
            player.displayName(Component.text().color(color).append(Component.text(player.name)).build())
        }
    }
    // #endregion namedTextColorExampleDSL

    // #region componentExampleDSL
    commandAPICommand("showbook") {
        entitySelectorArgumentOnePlayer("target")
        textArgument("title")
        stringArgument("author")
        chatComponentArgument("contents")
        anyExecutor { _, args ->
            val target = args["target"] as Player
            val title = args["title"] as String
            val author = args["author"] as String
            val content = args["contents"] as Component

            // Create a book and show it to the user (Requires Paper)
            val mybook = Book.book(Component.text(title), Component.text(author), content)
            target.openBook(mybook)
        }
    }
    // #endregion componentExampleDSL

    // #region chatArgumentExampleDSL
    commandAPICommand("pbroadcast") {
        chatArgument("message")
        playerExecutor { sender, args ->
            val message = args["message"] as Component

            // Sends the message as if it was sent by a player
            Bukkit.getServer().sendMessage(message, ChatType.CHAT.bind(Component.text(sender.name)))
        }
    }
    // #endregion chatArgumentExampleDSL
}