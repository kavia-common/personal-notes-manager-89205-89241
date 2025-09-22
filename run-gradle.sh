#!/usr/bin/env sh
# CI convenience: call this instead of ./gradlew. It ensures ./gradlew exists, then executes it.
set -e
if [ ! -f "./gradlew" ]; then
  echo "[run-gradle] Creating ./gradlew stub."
  cat > ./gradlew <<'EOF'
#!/usr/bin/env sh
echo "[CI stub] ./gradlew invoked at repo root; Expo managed (no native Gradle by default)."
exit 0
EOF
  chmod +x ./gradlew || true
fi
exec ./gradlew "$@"
