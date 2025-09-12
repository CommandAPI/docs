plugins {
    common
}

group = "dev.jorel.commandapi"
version = "1.0-SNAPSHOT"
description = "reference-code-paper"

val commandApiVersion: String by project
val paperVersion: String by project

dependencies {
    compileOnly("dev.jorel:commandapi-paper-core:$commandApiVersion")
    compileOnly("dev.jorel:commandapi-kotlin-paper:$commandApiVersion")
    compileOnly("io.papermc.paper:paper-api:$paperVersion")
}