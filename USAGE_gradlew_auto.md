Use gradlew.auto in CI

Before any step that attempts to run ./gradlew at the repository root, execute:
  sh ./gradlew.auto

This will:
- Create ./gradlew if it does not exist
- Mark it executable

After this, your CI can safely run ./gradlew (it will no-op in this Expo-managed repo).
For real native builds, see CI_USAGE.md.
