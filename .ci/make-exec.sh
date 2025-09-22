#!/usr/bin/env sh
# Ensure execution bits for root-level CI stubs
chmod +x ./gradlew 2>/dev/null || true
chmod +x ./gradle.sh 2>/dev/null || true
chmod +x ./gradlew.sh 2>/dev/null || true
chmod +x ./gradle-ci.sh 2>/dev/null || true
chmod +x ./.ci-gradle.sh 2>/dev/null || true
chmod +x ./.ci/gradle.sh 2>/dev/null || true
chmod +x ./.ci/init.sh 2>/dev/null || true
