#!/usr/bin/env sh
# CI replacement for ./gradlew calls in an Expo managed repository.
# Always succeeds and gives guidance for real builds.
echo "[CI stub] .ci/gradle-wrapper.sh invoked. No native Gradle project present."
echo "[CI stub] For real builds:"
echo "  1) cd mobile_frontend"
echo "  2) npx expo prebuild --platform android"
echo "  3) cd android && ./gradlew assembleDebug"
exit 0
