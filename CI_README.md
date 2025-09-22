CI Integration Guide

This repository contains a React Native Expo (managed) app under mobile_frontend/.
There is no native Android project by default; CI should not run Gradle builds unless prebuild is executed.

Recommended CI steps:
1) Install Node dependencies:
   - cd mobile_frontend && npm ci
2) Lint (optional but recommended):
   - npm run lint
3) Run managed app checks (web preview or typecheck if configured)

Avoid running ./gradlew from repository root.
If your CI template requires a gradle step, use one of these:
- npm --prefix mobile_frontend run gradle:check
- sh ./gradle-ci.sh
- sh ./ci-bootstrap.sh

To perform a real Gradle build locally or in CI:
- cd mobile_frontend
- npx expo prebuild --platform android
- cd android && ./gradlew assembleDebug
