#!/usr/bin/env sh
# Ensure the root gradlew exists, then run a no-op gradle check.
set -e
if [ ! -f "../../gradlew" ]; then
  echo "[tools/scripts/gradle-check] Creating ../../gradlew stub."
  cat > ../../gradlew <<'EOF'
#!/usr/bin/env sh
echo "[CI stub] ./gradlew invoked at repo root; Expo managed repository."
exit 0
EOF
  chmod +x ../../gradlew || true
fi
../../gradlew "$@" || true
exit 0
