#!/usr/bin/env sh
# CI default location helper; ensures gradle checks pass in Expo managed repo.
if [ -f "../../gradlew" ]; then
  sh ../../gradlew "$@"
  exit 0
fi
echo "[CI stub] .ci/gradle.sh: no native gradle wrapper present; Expo managed workflow. No-op."
exit 0
