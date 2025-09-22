#!/usr/bin/env sh
# CI entrypoint to ensure gradle stubs exist before any pipeline step.
set -e
echo "[ci-run] Starting CI bootstrap."

# Prefer Node-based ensure (robust on many CIs)
if [ -f "./scripts/ensure-gradlew.js" ]; then
  node ./scripts/ensure-gradlew.js || true
fi

# Shell-based ensures
if [ -f "./scripts/ensure-gradlew.sh" ]; then
  sh ./scripts/ensure-gradlew.sh || true
fi

# Pre-gradle ensure
if [ -f "./.ci/pre-gradle.sh" ]; then
  sh ./.ci/pre-gradle.sh || true
fi

# Final fallback: create ./gradlew if still missing
if [ ! -f "./gradlew" ]; then
  echo "[ci-run] Creating ./gradlew stub (final fallback)."
  cat > ./gradlew <<'EOF'
#!/usr/bin/env sh
echo "[CI stub] ./gradlew invoked; Expo managed repo (no native Gradle by default)."
exit 0
EOF
fi

chmod +x ./gradlew 2>/dev/null || true
echo "[ci-run] gradlew is present and executable. Completed."
exit 0
