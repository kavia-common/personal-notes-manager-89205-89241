#!/usr/bin/env sh
# Root-level Gradle wrapper stub for CI in an Expo-managed repository.
# This is a no-op; exists only to satisfy CI systems invoking ./gradlew at repo root.
echo "[CI stub] ./gradlew invoked at repo root; Expo managed (no native Gradle project by default)."
echo "[CI stub] For a real Android build:"
echo "  cd mobile_frontend && npx expo prebuild --platform android"
echo "  cd android && ./gradlew assembleDebug"
exit 0
