import org.jetbrains.kotlin.gradle.dsl.JvmTarget
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    `java-library`
    kotlin("jvm")
}

java.sourceCompatibility = JavaVersion.VERSION_21
java.targetCompatibility = JavaVersion.VERSION_21

val commandApiVersion: String by project
val paperVersion: String by project
val velocityVersion: String by project
val brigadierVersion: String by project
val authlibVersion: String by project
val nbtApiVersion: String by project
val kotlinVersion: String by project
val junitVersion: String by project
val mockBukkitVersion: String by project

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
    api("dev.jorel:commandapi-bukkit-core:$commandApiVersion")
    api("dev.jorel:commandapi-paper-core:$commandApiVersion")
    api("dev.jorel:commandapi-spigot-core:$commandApiVersion")
    api("dev.jorel:commandapi-kotlin-bukkit:$commandApiVersion")
    api("dev.jorel:commandapi-annotations:$commandApiVersion")
    compileOnly("dev.jorel:commandapi-velocity-shade:$commandApiVersion")
    api("de.tr7zw:item-nbt-api:$nbtApiVersion")
    api("org.jetbrains.kotlin:kotlin-stdlib:$kotlinVersion")
    testImplementation("org.junit.jupiter:junit-jupiter:$junitVersion")
    //testImplementation(libs.dev.jorel.commandapi.bukkit.test.toolkit)
    testImplementation("com.github.seeseemelk:MockBukkit-v1.21:$mockBukkitVersion")
    compileOnly("com.mojang:brigadier:$brigadierVersion")
    compileOnly("com.mojang:authlib:$authlibVersion")
    compileOnly("io.papermc.paper:paper-api:$paperVersion")
    compileOnly("com.velocitypowered:velocity-api:$velocityVersion")
}

tasks.withType<JavaCompile> {
    options.encoding = "UTF-8"
}

tasks.withType<Javadoc> {
    options.encoding = "UTF-8"
}

tasks.withType<KotlinCompile> {
    compilerOptions.jvmTarget = JvmTarget.JVM_21
}