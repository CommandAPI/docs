#!/bin/sh
echo "Old version:"
read -r oldVer
echo "New version:"
read -r newVer

# Update CommandAPI dependency versions
sed -i "s/commandApiVersion=$oldVer/commandApiVersion=$newVer/" reference-code/gradle.properties

# Update CommandAPI version in documentation files (Maven)
sed -i "s/<version>$oldVer<\/version>/<version>$newVer<\/version>/" docs/en/dev-setup/annotations.md
sed -i "s/<version>$oldVer<\/version>/<version>$newVer<\/version>/" docs/en/dev-setup/setup.md
sed -i "s/<version>$oldVer<\/version>/<version>$newVer<\/version>/" docs/en/dev-setup/shading.md
sed -i "s/<version>$oldVer<\/version>/<version>$newVer<\/version>/" docs/en/kotlin-dsl/intro.md
sed -i "s/<version>$oldVer<\/version>/<version>$newVer<\/version>/" docs/en/test/setup.md
sed -i "s/<version>$oldVer<\/version>/<version>$newVer<\/version>/" docs/en/velocity/intro.md

# Update CommandAPI version in documentation files (Gradle)
sed -i "s/dev.jorel:commandapi-annotations:$oldVer/dev.jorel:commandapi-annotations:$newVer/" docs/en/dev-setup/annotations.md
sed -i "s/dev.jorel:commandapi-paper-core:$oldVer/dev.jorel:commandapi-paper-core:$newVer/" docs/en/dev-setup/setup.md
sed -i "s/dev.jorel:commandapi-spigot-core:$oldVer/dev.jorel:commandapi-spigot-core:$newVer/" docs/en/dev-setup/setup.md
sed -i "s/dev.jorel:commandapi-paper-shade:$oldVer/dev.jorel:commandapi-paper-shade:$newVer/" docs/en/dev-setup/shading.md
sed -i "s/dev.jorel:commandapi-spigot-shade:$oldVer/dev.jorel:commandapi-spigot-shade:$newVer/" docs/en/dev-setup/shading.md
sed -i "s/dev.jorel:commandapi-kotlin-paper:$oldVer/dev.jorel:commandapi-kotlin-paper:$newVer/" docs/en/kotlin-dsl/intro.md
sed -i "s/dev.jorel:commandapi-kotlin-spigot:$oldVer/dev.jorel:commandapi-kotlin-spigot:$newVer/" docs/en/kotlin-dsl/intro.md
sed -i "s/dev.jorel:commandapi-paper-core:$oldVer/dev.jorel:commandapi-paper-core:$newVer/" docs/en/test/setup.md
sed -i "s/dev.jorel:commandapi-paper-test-toolkit:$oldVer/dev.jorel:commandapi-paper-test-toolkit:$newVer/" docs/en/test/setup.md
sed -i "s/dev.jorel:commandapi-spigot-core:$oldVer/dev.jorel:commandapi-spigot-core:$newVer/" docs/en/test/setup.md
sed -i "s/dev.jorel:commandapi-spigot-test-toolkit:$oldVer/dev.jorel:commandapi-spigot-test-toolkit:$newVer/" docs/en/test/setup.md
sed -i "s/dev.jorel:commandapi-velocity-shade:$oldVer/dev.jorel:commandapi-velocity-shade:$newVer/" docs/en/velocity/intro.md

# Possible manual updates
echo "These may have to be updated manually:"
echo "  docs/public/versions.yml"