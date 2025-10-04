package test;


import com.mojang.brigadier.CommandDispatcher;
import dev.jorel.commandapi.CommandAPIVersionHandler;
import dev.jorel.commandapi.InternalSpigotConfig;
import dev.jorel.commandapi.MockCommandAPIPlugin;
import dev.jorel.commandapi.MockCommandAPISpigot;
import dev.jorel.commandapi.MockCommandSource;
import org.bukkit.plugin.java.JavaPlugin;
import org.junit.jupiter.api.BeforeEach;
import org.mockbukkit.mockbukkit.MockBukkit;
import org.mockbukkit.mockbukkit.ServerMock;

import java.io.File;
import java.io.IOException;

class LoadMockCommandAPI {
    class Main extends JavaPlugin {

    }

    // #region loadMockCommandAPIExample
    @BeforeEach
    public void setUp() {
        // Set up MockBukkit server
        ServerMock server = MockBukkit.mock();

        // Load the CommandAPI plugin
        MockCommandAPIPlugin.load(config -> config
            .missingExecutorImplementationMessage("This command cannot be run by %S")
        );

        // Load our plugin
        MockBukkit.load(Main.class);
    }

    @org.junit.jupiter.api.AfterEach
    public void tearDown() {
        // Reset for a clean slate next test
        MockBukkit.unmock();
    }
    // #endregion loadMockCommandAPIExample

    class CustomExample {
        // #region loadCustomCommandAPIPlatformImplementationExample
        public class CustomMockCommandAPISpigot extends MockCommandAPISpigot {
            public CustomMockCommandAPISpigot(InternalSpigotConfig config) {
                super(config);
            }

            // Implement a method that usually throws `UnimplementedMethodException`
            @Override
            public void createDispatcherFile(File file, CommandDispatcher<MockCommandSource> brigadierDispatcher) throws IOException {
                // Whatever logic you need
            }
        }

        @BeforeEach
        public void setUp() {
            // Set up MockBukkit server
            MockBukkit.mock();

            // Tell the CommandAPI to use your custom platform implementation
            CommandAPIVersionHandler.usePlatformImplementation(CustomMockCommandAPISpigot::new);

            // Load CommandAPI and your plugin as mentioned above...
        }
        // #endregion loadCustomCommandAPIPlatformImplementationExample
    }
}
