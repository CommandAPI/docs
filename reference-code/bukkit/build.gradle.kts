plugins {
    common
}

group = "dev.jorel.commandapi"
version = "1.0-SNAPSHOT"
description = "reference-code-bukkit"

val commandApiVersion: String by project
val paperVersion: String by project

dependencies {
    compileOnly("dev.jorel:commandapi-bukkit-core:$commandApiVersion")
    compileOnly("dev.jorel:commandapi-kotlin-bukkit:$commandApiVersion")
    compileOnly("io.papermc.paper:paper-api:$paperVersion")
}