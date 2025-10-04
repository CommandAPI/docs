package createcommands.arguments.types.misc

import dev.jorel.commandapi.CommandAPICommand
import dev.jorel.commandapi.arguments.BlockStateArgument
import dev.jorel.commandapi.executors.PlayerCommandExecutor
import dev.jorel.commandapi.kotlindsl.blockStateArgument
import dev.jorel.commandapi.kotlindsl.commandAPICommand
import dev.jorel.commandapi.kotlindsl.playerExecutor
import org.bukkit.block.BlockState

fun blockStateArguments() {
    // #region blockStateArgumentsExample
    CommandAPICommand("set")
        .withArguments(BlockStateArgument("block"))
        .executesPlayer(PlayerCommandExecutor { player, args ->
            val blockState = args["block"] as BlockState
            val targetBlock = player.getTargetBlockExact(256)

            // Set the block, along with its data
            targetBlock?.type = blockState.blockData.material
            targetBlock?.state?.blockData = blockState.blockData
        })
        .register()
    // #endregion blockStateArgumentsExample
}

fun blockStateArgumentsDSL() {
    // #region blockStateArgumentsExampleDSL
    commandAPICommand("set") {
        blockStateArgument("block")
        playerExecutor { player, args ->
            val blockState = args["block"] as BlockState
            val targetBlock = player.getTargetBlockExact(256)

            // Set the block, along with its data
            targetBlock?.type = blockState.blockData.material
            targetBlock?.state?.blockData = blockState.blockData
        }
    }
    // #endregion blockStateArgumentsExampleDSL
}