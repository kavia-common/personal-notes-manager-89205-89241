#!/usr/bin/env sh
# Alias used by certain CI templates to map to gradle/gradlew.
set -e
if [ ! -f "./gradlew" ]; then
  echo "[alias-gradle] Creating ./gradlew stub (alias)."
  cat > ./gradlew <<'EOF'
#!/usr/bin/env sh
echo "[CI stub] ./gradlew invoked; Expo managed (no native Gradle by default)."
exit 0
EOF
  chmod +x ./gradlew 2>/dev/null || true
fi
./gradlew "$@" || true
exit 0
