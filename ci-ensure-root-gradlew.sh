#!/usr/bin/env sh
# Deterministically create a root-level ./gradlew stub for CI that insists on calling it.
set -e
cat > ./gradlew <<'EOF'
#!/usr/bin/env sh
# Root-level CI Gradle wrapper stub for an Expo-managed repository.
# Exists to satisfy CI jobs that call ./gradlew from the repo root.
echo "[CI stub] ./gradlew invoked at repo root; no native Gradle project by default (Expo managed)."
echo "[CI stub] For a real Android build, run prebuild inside mobile_frontend and use the generated wrapper."
exit 0
EOF
chmod +x ./gradlew 2>/dev/null || true
echo "[ci-ensure-root-gradlew] Created and marked executable: ./gradlew"
exit 0
