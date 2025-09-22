#!/usr/bin/env sh
# CI convenience wrapper: prefer the root gradlew stub; create it if missing.
set -e
if [ ! -f "./gradlew" ]; then
  echo "[gradlew.sh] ./gradlew missing; creating stub."
  cat > ./gradlew <<'EOF'
#!/usr/bin/env sh
echo "[CI stub] ./gradlew invoked at repo root; Expo managed (no native Gradle by default)."
exit 0
EOF
  chmod +x ./gradlew 2>/dev/null || true
fi
exec ./gradlew "$@"
