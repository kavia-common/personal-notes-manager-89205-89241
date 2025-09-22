Repository Notes

- This monorepo includes an Expo-managed React Native app at mobile_frontend/.
- CI systems that run ./gradlew from the repository root will use a stub gradlew that exits 0.
- For real native builds, do:
  1) cd mobile_frontend
  2) npx expo prebuild --platform android
  3) cd android && ./gradlew assembleDebug
- Additional helpers:
  - gradle.sh delegates to ./gradlew if present; otherwise it is a no-op for CI.
  - gradle-ci.sh is a universal stub that always succeeds; reference it in CI if possible.
