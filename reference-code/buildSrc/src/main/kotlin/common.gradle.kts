import org.jetbrains.kotlin.gradle.dsl.JvmTarget
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    `java-library`
    kotlin("jvm")
}

java.sourceCompatibility = JavaVersion.VERSION_21
java.targetCompatibility = JavaVersion.VERSION_21

val commandApiVersion: String by project
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
    compileOnly("dev.jorel:commandapi-annotations:$commandApiVersion")
    compileOnly("de.tr7zw:item-nbt-api:$nbtApiVersion")
    compileOnly("org.jetbrains.kotlin:kotlin-stdlib:$kotlinVersion")
    testImplementation("org.junit.jupiter:junit-jupiter:$junitVersion")
    testImplementation("org.mockbukkit.mockbukkit:mockbukkit-v1.21:$mockBukkitVersion")
    compileOnly("com.mojang:brigadier:$brigadierVersion")
    compileOnly("com.mojang:authlib:$authlibVersion")
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