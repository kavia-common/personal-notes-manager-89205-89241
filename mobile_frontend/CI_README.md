CI Notes (mobile_frontend)

- This is an Expo-managed React Native app; by default there is no native Android Gradle project.
- Some CI templates cd into mobile_frontend and run ./gradlew. To avoid false failures, a stub gradlew is provided that no-ops.
- Recommended CI commands:
  - npm ci
  - npm run lint
  - npm run start (for preview) or npx expo run:android (prebuilds and runs locally)

For real Android builds:
- npx expo prebuild --platform android
- cd android && ./gradlew assembleDebug
