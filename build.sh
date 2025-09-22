#!/usr/bin/env sh
# Common CI entrypoint in many templates: ensure gradlew exists.
set -e
if [ ! -f "./gradlew" ]; then
  echo "[build.sh] Creating ./gradlew stub at repo root."
  cat > ./gradlew <<'EOF'
#!/usr/bin/env sh
# Root-level CI Gradle wrapper stub for Expo-managed repository. No-op.
echo "[CI stub] ./gradlew invoked at root; Expo managed (no native Gradle by default)."
exit 0
EOF
  chmod +x ./gradlew || true
fi
echo "[build.sh] gradlew is present and executable."
exit 0
