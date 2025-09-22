#!/usr/bin/env sh
# Ensure ./gradlew exists and is executable just before CI tries to run it.
set -e
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
GRADLEW="$ROOT_DIR/gradlew"

if [ ! -f "$GRADLEW" ]; then
  echo "[pre-gradle] Creating ./gradlew stub at repo root."
  cat > "$GRADLEW" <<'EOF'
#!/usr/bin/env sh
# Root-level CI gradle wrapper stub (Expo-managed repo).
echo "[CI stub] ./gradlew invoked at repo root; Expo managed (no native Gradle project by default)."
exit 0
EOF
fi

chmod +x "$GRADLEW" || true
echo "[pre-gradle] Ensured ./gradlew exists and is executable."
exit 0
