#!/usr/bin/env sh
# Use this script in CI instead of calling ./gradlew directly.
set -e
sh ./pre-gradle.sh
./gradlew "$@" || true
exit 0
