#!/usr/bin/env sh
# Sourced in some CI environments before running build steps.
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
if [ ! -f "$ROOT_DIR/gradlew" ]; then
  echo "[ensure-gradlew profile] Creating root-level gradlew stub for CI."
  cat > "$ROOT_DIR/gradlew" <<'EOF'
#!/usr/bin/env sh
echo "[CI stub] Root ./gradlew invoked; no native Gradle project present (Expo managed)."
exit 0
EOF
  chmod +x "$ROOT_DIR/gradlew" || true
fi
