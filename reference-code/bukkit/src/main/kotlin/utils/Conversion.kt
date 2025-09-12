package utils

import dev.jorel.commandapi.Converter
import dev.jorel.commandapi.arguments.EntitySelectorArgument
import dev.jorel.commandapi.arguments.IntegerArgument
import dev.jorel.commandapi.arguments.MultiLiteralArgument
import org.bukkit.Bukkit
import org.bukkit.plugin.java.JavaPlugin

fun conversion() {
    // #region simpleConvertExample
    class YourPlugin : JavaPlugin() {
        override fun onEnable() {
            Converter.convert(Bukkit.getPluginManager().getPlugin("TargetPlugin") as JavaPlugin)
            // Other code goes here...
        }
    }
    // #endregion simpleConvertExample

    // #region convertSpeedCommandExample
    val essentials = Bukkit.getPluginManager().getPlugin("Essentials") as JavaPlugin

    // /speed <speed>
    Converter.convert(essentials, "speed", IntegerArgument("speed", 0, 10))

    // /speed <target>
    Converter.convert(essentials, "speed", EntitySelectorArgument.OnePlayer("target"))

    // /speed <walk/fly> <speed>
    Converter.convert(essentials, "speed",
        MultiLiteralArgument("modes", "walk", "fly"),
        IntegerArgument("speed", 0, 10)
    )

    // /speed <walk/fly> <speed> <target>
    Converter.convert(essentials, "speed",
        MultiLiteralArgument("modes", "walk", "fly"),
        IntegerArgument("speed", 0, 10),
        EntitySelectorArgument.OnePlayer("target")
    )
    // #endregion convertSpeedCommandExample
}