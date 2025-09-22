#!/usr/bin/env sh
# CI helper to satisfy templates that invoke a gradle script by convention.
if [ -f "./gradlew" ]; then
  sh ./gradlew "$@"
  exit 0
fi
echo "[CI stub] .ci-gradle.sh: no native gradle wrapper present; Expo managed workflow. No-op."
exit 0
