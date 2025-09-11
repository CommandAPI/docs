plugins {
    common
}

group = "dev.jorel.commandapi"
version = "1.0-SNAPSHOT"
description = "reference-code-velocity"

val commandApiVersion: String by project
val velocityVersion: String by project

dependencies {
    compileOnly("dev.jorel:commandapi-velocity-core:$commandApiVersion")
    compileOnly("com.velocitypowered:velocity-api:$velocityVersion")
}