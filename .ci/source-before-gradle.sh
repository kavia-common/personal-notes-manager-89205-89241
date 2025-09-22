#!/usr/bin/env sh
# Source this script right before your CI tries to run ./gradlew.
# It guarantees the file exists and is executable.
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
GRADLEW="$ROOT_DIR/gradlew"

if [ ! -f "$GRADLEW" ]; then
  echo "[source-before-gradle] Creating ./gradlew stub for CI."
  cat > "$GRADLEW" <<'EOF'
#!/usr/bin/env sh
echo "[CI stub] ./gradlew invoked at repo root; Expo managed project (no native Gradle by default)."
exit 0
EOF
fi

chmod +x "$GRADLEW" || true
echo "[source-before-gradle] Ensured ./gradlew exists and is executable."
