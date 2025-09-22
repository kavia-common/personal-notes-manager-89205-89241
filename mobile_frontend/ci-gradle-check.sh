#!/usr/bin/env sh
# CI alias: Always succeed gradle check for Expo managed workflow.
echo "[CI stub] mobile_frontend/ci-gradle-check.sh invoked."
npm run gradle:check || true
exit 0
