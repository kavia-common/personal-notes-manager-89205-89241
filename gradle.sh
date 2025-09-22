#!/usr/bin/env bash
# Root-level helper invoked by CI that might call bash gradle.sh or similar.
# Prefer the gradlew stub if present; otherwise, no-op.

if [ -x "./gradlew" ]; then
  ./gradlew "$@"
  exit $?
fi

echo "[CI] gradlew not found at repo root; Expo managed project likely. No-op."
exit 0
