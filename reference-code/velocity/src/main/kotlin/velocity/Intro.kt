package velocity

import dev.jorel.commandapi.CommandAPICommand
import dev.jorel.commandapi.arguments.IntegerArgument
import dev.jorel.commandapi.executors.PlayerCommandExecutor
import net.kyori.adventure.text.Component
import java.util.concurrent.ThreadLocalRandom

fun intro() {
    // #region registerCommandExample
    CommandAPICommand("randomnumber")
        .withArguments(IntegerArgument("min"))
        .withArguments(IntegerArgument("max"))
        .executesPlayer(PlayerCommandExecutor { player, args ->
            val min = args["min"] as Int
            val max = args["max"] as Int
            val random = ThreadLocalRandom.current()
            val randomNumber = random.nextInt(min, max)
            player.sendMessage(Component.text().content("Your random number is: $randomNumber"))
        })
        .register()
    // #endregion registerCommandExample
}