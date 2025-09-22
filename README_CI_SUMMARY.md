CI Summary

- This repository uses an Expo managed workflow; there is no native Gradle project at the repo root by default.
- If your CI template attempts to run a Gradle step:
  1) Prefer: npm run gradle:check (repo root), or sh ./gradle-ci.sh
  2) If it insists on ./gradlew, add a step before it: sh ./.ci/pre-gradle.sh
  3) For a real Android build: cd mobile_frontend && npx expo prebuild --platform android && cd android && ./gradlew assembleDebug

See CI_USAGE.md and CI_NOTES.md for more details.
