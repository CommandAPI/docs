import org.jetbrains.kotlin.gradle.dsl.JvmTarget
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    `java-library`
    kotlin("jvm") version "2.1.0"
}

group = "dev.jorel.commandapi"
version = "1.0-SNAPSHOT"
description = "reference-code-bukkit"

repositories {
    mavenLocal()
    maven {
        url = uri("https://libraries.minecraft.net")
    }

    maven {
        url = uri("https://repo.papermc.io/repository/maven-public/")
    }

    maven {
        url = uri("https://repo.codemc.org/repository/maven-public/")
    }

    maven {
        url = uri("https://central.sonatype.com/repository/maven-snapshots/")
    }

    maven {
        url = uri("https://repo.maven.apache.org/maven2/")
    }
}

dependencies {
    api(libs.net.kyori.adventure.platform.bukkit)
    api(libs.dev.jorel.commandapi.bukkit.core)
    api(libs.dev.jorel.commandapi.paper.core)
    api(libs.dev.jorel.commandapi.spigot.core)
    api(libs.dev.jorel.commandapi.kotlin.bukkit)
    api(libs.dev.jorel.commandapi.annotations)
    compileOnly(libs.dev.jorel.commandapi.velocity.shade)
    api(libs.de.tr7zw.item.nbt.api)
    api(libs.org.jetbrains.kotlin.kotlin.stdlib)
    testImplementation(libs.org.junit.jupiter.junit.jupiter)
    //testImplementation(libs.dev.jorel.commandapi.bukkit.test.toolkit)
    testImplementation(libs.com.github.seeseemelk.mockbukkit.v1.v21)
    compileOnly(libs.com.mojang.brigadier)
    compileOnly(libs.com.mojang.authlib)
    compileOnly(libs.io.papermc.paper.paper.api)
    compileOnly(libs.com.velocitypowered.velocity.api)
}

group = "dev.jorel.commandapi"
version = "1.0-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_21
java.targetCompatibility = JavaVersion.VERSION_21

tasks.withType<JavaCompile> {
    options.encoding = "UTF-8"
}

tasks.withType<Javadoc> {
    options.encoding = "UTF-8"
}

tasks.withType<KotlinCompile> {
    compilerOptions.jvmTarget = JvmTarget.JVM_21
}