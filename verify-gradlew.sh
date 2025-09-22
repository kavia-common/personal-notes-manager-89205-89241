#!/usr/bin/env sh
# Verifies ./gradlew exists for CI and prints guidance.
if [ ! -f "./gradlew" ]; then
  echo "[verify-gradlew] ERROR: ./gradlew is missing at repo root."
  echo "[verify-gradlew] Run: sh ./init-ci.sh  (or) sh ./pre-gradle.sh  (or) sh ./gradlew.auto"
  exit 2
fi
echo "[verify-gradlew] Found ./gradlew."
exit 0
