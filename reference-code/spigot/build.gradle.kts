plugins {
    common
}

group = "dev.jorel.commandapi"
version = "1.0-SNAPSHOT"
description = "reference-code-spigot"

val commandApiVersion: String by project
val spigotVersion: String by project

dependencies {
    implementation("dev.jorel:commandapi-spigot-core:$commandApiVersion")
    implementation("dev.jorel:commandapi-kotlin-spigot:$commandApiVersion")
    implementation("org.spigotmc:spigot-api:$spigotVersion")

    testImplementation("dev.jorel:commandapi-spigot-test-toolkit:${commandApiVersion}")
}