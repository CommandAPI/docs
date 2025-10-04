plugins {
    common
}

group = "dev.jorel.commandapi"
version = "1.0-SNAPSHOT"
description = "reference-code-paper"

val commandApiVersion: String by project
val paperVersion: String by project

dependencies {
    implementation("dev.jorel:commandapi-paper-core:$commandApiVersion")
    implementation("dev.jorel:commandapi-kotlin-paper:$commandApiVersion")
    implementation("io.papermc.paper:paper-api:$paperVersion")

    testImplementation("dev.jorel:commandapi-paper-test-toolkit:${commandApiVersion}")
}