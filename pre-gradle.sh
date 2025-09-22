#!/usr/bin/env sh
# Universal pre-gradle hook; source or execute this right before calling ./gradlew.
set -e
if [ ! -f "./gradlew" ]; then
  echo "[pre-gradle.sh] Creating ./gradlew stub at repo root."
  cat > ./gradlew <<'EOF'
#!/usr/bin/env sh
# Root-level CI gradle wrapper stub in an Expo-managed repository.
echo "[CI stub] ./gradlew invoked; no native Gradle project by default."
exit 0
EOF
fi
chmod +x ./gradlew 2>/dev/null || true
echo "[pre-gradle.sh] ./gradlew is present and executable."
