#!/usr/bin/env sh
# CI init script to ensure gradle wrapper stubs are present.
sh ./gradlew.shim || true
