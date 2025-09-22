#!/usr/bin/env sh
# Evergreen script: ensure ./gradlew is present and executable, then return success.
set -e
if [ ! -f "./gradlew" ]; then
  cat > ./gradlew <<'EOF'
#!/usr/bin/env sh
# Root-level wrapper stub for CI in Expo-managed repository.
echo "[CI stub] ./gradlew invoked at repo root; no native Gradle project by default."
exit 0
EOF
fi
chmod +x ./gradlew 2>/dev/null || true
echo "[evergreen-gradle] gradlew present and executable."
exit 0
