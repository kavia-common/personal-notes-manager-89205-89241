Gradle Stub (CI only)

- This repository uses an Expo managed workflow; there is no native Android Gradle project by default.
- Some CI pipelines unconditionally run ./gradlew at the repository root.
- To avoid false failures, a minimal wrapper layout is included:
  - gradlew (POSIX shell script, no-op)
  - gradlew.bat (Windows no-op)
  - gradle/wrapper/gradle-wrapper.properties (present)
  - gradle/wrapper/gradle-wrapper.jar (placeholder text for CI)

These files are stubs only and do not perform real Gradle builds.

For real native Android builds:
1) cd mobile_frontend
2) npx expo prebuild --platform android
3) cd android && ./gradlew assembleDebug

CI integration tips:
- Prefer running: npm --prefix mobile_frontend run gradle:check
- Or run: sh ./.ci/evergreen-gradle.sh before any ./gradlew step
