plugins {
    common
}

group = "dev.jorel.commandapi"
version = "1.0-SNAPSHOT"
description = "reference-code-spigot"

val commandApiVersion: String by project
val spigotVersion: String by project

dependencies {
    compileOnly("dev.jorel:commandapi-spigot-core:$commandApiVersion")
    compileOnly("dev.jorel:commandapi-kotlin-spigot:$commandApiVersion")
    compileOnly("org.spigotmc:spigot-api:$spigotVersion")
}