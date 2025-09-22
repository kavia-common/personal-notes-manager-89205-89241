CI Behavior Notes

- This repository uses an Expo managed workflow for the mobile_frontend container.
- Some CI pipelines try to run `./gradlew` from the repository root.
- We provide a root-level stub `gradlew` (shell script) that exits successfully to avoid false failures.
- A Makefile with gradle/check targets is provided as a secondary CI integration.
- The root-level package.json includes:
  - `postinstall` that sets execute permissions on stubs (best effort).
  - `prepare` that runs scripts/ensure-gradlew.sh to guarantee ./gradlew exists and is executable.
  - Manual: `npm run ensure:gradlew`
- Additional safety nets for CI:
  - .yarnrc.yml with enableScripts: true (ensures lifecycle scripts run under Yarn)
  - .profile.d/ensure-gradlew.sh (creates stub if CI sources profile scripts)
  - .husky/prepare (runs ensure-gradlew for CI images that execute it)
  - Root script: gradle-check (run with `npm run gradle:check` from repo root) to bypass direct ./gradlew calls
  - CI init: .ci/init.sh (run early in your pipeline to ensure ./gradlew stub exists)
  - Bootstrap: ci-bootstrap.sh (call this at the very start to create and chmod ./gradlew deterministically)
  - Minimal Gradle wrapper stubs present at repo root (gradlew, gradlew.bat, gradle/wrapper/gradle-wrapper.properties) so CI finds ./gradlew.
  - Node bootstrap: scripts/ensure-gradlew.js and npm script ensure:gradlew:node guarantee ./gradlew is created if missing.
  - Alternate CI shims:
    - .ci/gradle-wrapper.sh (use instead of ./gradlew)
    - gradle/wrapper/gradle-wrapper.sh (catch-all for wrapper path calls)
    - mobile_frontend/ci-gradle-check.sh (runs npm run gradle:check in mobile_frontend)
- For real native Android builds:
  1) cd mobile_frontend
  2) npx expo prebuild --platform android
  3) cd android && ./gradlew assembleDebug
