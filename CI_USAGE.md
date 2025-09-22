CI Usage Quick Start

This repository uses Expo managed workflow for the React Native app in mobile_frontend/.
By default, there is no native Gradle project at the repository root.

If your CI template attempts to run ./gradlew from the repo root, add this step immediately before that call:
  - sh ./.ci/pre-gradle.sh

This ensures ./gradlew exists and is executable. If your goal is just to pass a "gradle check" step:
  - npm run gradle:check (from repo root), or
  - sh ./gradle-ci.sh

For real native Android builds:
  - cd mobile_frontend
  - npx expo prebuild --platform android
  - cd android && ./gradlew assembleDebug
