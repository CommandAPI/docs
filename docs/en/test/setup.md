---
order: 2
preferences: ['paper-spigot', 'build-system']
authors:
  - willkroboth
  - JorelAli
---

# Setting up your project

In the most common simple case, tests can be added directly next to plugin code. Code that goes in your final jar file is located in the `/src/main/` directory, while tests go in `/src/test/`. You can find more information about setting up your project for tests in the [JUnit](https://junit.org/junit5/docs/current/user-guide/#overview-getting-started-example-projects) documentation.

## Dependencies

<div class="paper">

When you add the dependencies for MockBukkit and `commandapi-paper-test-toolkit`, make sure to place them before your main dependencies for the CommandAPI and Paper API. This ensures that certain classes that are compatible with the testing environment override the regular classes when running tests.

<div class="maven">

```xml
<dependencies>
    <!-- See https://github.com/MockBukkit/MockBukkit?tab=readme-ov-file#mag-usage for latest version -->
    <dependency>
        <groupId>org.mockbukkit.mockbukkit</groupId>
        <artifactId>mockbukkit-v1.21</artifactId>
        <version>4.72.8</version>
        <scope>test</scope>
    </dependency>

    <dependency>
        <groupId>dev.jorel</groupId>
        <artifactId>commandapi-paper-test-toolkit</artifactId>
        <version>11.1.0</version>
        <scope>test</scope>
    </dependency>

    <!-- May also be the shade dependency -->
    <dependency>
        <groupId>dev.jorel</groupId>
        <artifactId>commandapi-paper-core</artifactId>
        <version>11.1.0</version>
        <scope>provided</scope>
    </dependency>

    <dependency>
        <groupId>io.papermc.paper</groupId>
        <artifactId>paper-api</artifactId>
        <version>1.21.8-R0.1-SNAPSHOT</version>
        <scope>provided</scope>
    </dependency>

    <!-- See https://junit.org/junit5/ for latest version -->
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter-engine</artifactId>
        <version>5.13.3</version>
        <scope>test</scope>
    </dependency>
</dependencies>
```

</div>

<div class="gradle">

<div class="groovy">

```groovy
dependencies {
    // See https://github.com/MockBukkit/MockBukkit?tab=readme-ov-file#mag-usage for latest version
    testImplementation 'org.mockbukkit.mockbukkit:mockbukkit-v1.21:4.72.8'

    testImplementation 'dev.jorel:commandapi-paper-test-toolkit:11.1.0'

    // May also be the shade dependency
    compileOnly 'dev.jorel:commandapi-paper-core:11.1.0'

    compileOnly 'io.papermc.paper:paper-api:1.21.8-R0.1-SNAPSHOT'

    // See https://junit.org/junit5/ for latest version
    testImplementation 'org.junit.jupiter:junit-jupiter-engine:5.13.3'
}
```

</div>
<div class="kts">

```kotlin
dependencies {
    // See https://github.com/MockBukkit/MockBukkit?tab=readme-ov-file#mag-usage for latest version
    testImplementation("org.mockbukkit.mockbukkit:mockbukkit-v1.21:4.72.8")

    testImplementation("dev.jorel:commandapi-paper-test-toolkit:11.1.0")

    // May also be the shade dependency
    compileOnly("dev.jorel:commandapi-paper-core:11.1.0")

    compileOnly("io.papermc.paper:paper-api:1.21.8-R0.1-SNAPSHOT")

    // See https://junit.org/junit5/ for latest version
    testImplementation("org.junit.jupiter:junit-jupiter-engine:5.13.3")
}
```

</div>

</div>

</div>

<div class="spigot">

When you add the dependencies for MockBukkit and `commandapi-spigot-test-toolkit`, make sure to place them before your main dependencies for the CommandAPI and Spigot API. This ensures that certain classes that are compatible with the testing environment override the regular classes when running tests.

<div class="maven">

```xml
<dependencies>
    <!-- See https://github.com/MockBukkit/MockBukkit?tab=readme-ov-file#mag-usage for latest version -->
    <dependency>
        <groupId>org.mockbukkit.mockbukkit</groupId>
        <artifactId>mockbukkit-v1.21</artifactId>
        <version>4.72.8</version>
        <scope>test</scope>
    </dependency>

    <dependency>
        <groupId>dev.jorel</groupId>
        <artifactId>commandapi-spigot-test-toolkit</artifactId>
        <version>11.1.0</version>
        <scope>test</scope>
    </dependency>

    <!-- May also be the shade dependency -->
    <dependency>
        <groupId>dev.jorel</groupId>
        <artifactId>commandapi-spigot-core</artifactId>
        <version>11.1.0</version>
        <scope>provided</scope>
    </dependency>

    <dependency>
        <groupId>org.spigotmc</groupId>
        <artifactId>spigot-api</artifactId>
        <version>1.21.8-R0.1-SNAPSHOT</version>
        <scope>provided</scope>
    </dependency>

    <!-- See https://junit.org/junit5/ for latest version -->
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter-engine</artifactId>
        <version>5.13.3</version>
        <scope>test</scope>
    </dependency>
</dependencies>
```

</div>

<div class="gradle">

<div class="groovy">

```groovy
dependencies {
    // See https://github.com/MockBukkit/MockBukkit?tab=readme-ov-file#mag-usage for latest version
    testImplementation 'org.mockbukkit.mockbukkit:mockbukkit-v1.21:4.72.8'

    testImplementation 'dev.jorel:commandapi-spigot-test-toolkit:11.1.0'

    // May also be the shade dependency
    compileOnly 'dev.jorel:commandapi-spigot-core:11.1.0'

    compileOnly 'org.spigotmc:spigot-api:1.21.8-R0.1-SNAPSHOT'

    // See https://junit.org/junit5/ for latest version
    testImplementation 'org.junit.jupiter:junit-jupiter-engine:5.13.3'
}
```

</div>
<div class="kts">

```kotlin
dependencies {
    // See https://github.com/MockBukkit/MockBukkit?tab=readme-ov-file#mag-usage for latest version
    testImplementation("org.mockbukkit.mockbukkit:mockbukkit-v1.21:4.72.8")

    testImplementation("dev.jorel:commandapi-spigot-test-toolkit:11.1.0")

    // May also be the shade dependency
    compileOnly("dev.jorel:commandapi-spigot-core:11.1.0")

    compileOnly("org.spigotmc:spigot-api:1.21.8-R0.1-SNAPSHOT")

    // See https://junit.org/junit5/ for latest version
    testImplementation("org.junit.jupiter:junit-jupiter-engine:5.13.3")
}
```

</div>

</div>

</div>