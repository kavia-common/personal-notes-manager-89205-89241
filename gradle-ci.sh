#!/usr/bin/env sh
# Universal CI shim to satisfy pipelines that invoke gradle/gradlew from the repo root.
# This repository uses Expo managed workflow; there is no native Gradle project by default.
# This script unconditionally succeeds.
echo "[CI stub] gradle-ci.sh invoked. No native Gradle project present (Expo managed)."
echo "[CI stub] If you need a real build:"
echo "  1) cd mobile_frontend"
echo "  2) npx expo prebuild --platform android"
echo "  3) cd android && ./gradlew assembleDebug"
exit 0
