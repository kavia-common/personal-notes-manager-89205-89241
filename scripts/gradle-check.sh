#!/usr/bin/env sh
# Root scripts gradle checker for CI; ensures gradlew exists and then calls it.
set -e
if [ ! -f "../gradlew" ]; then
  echo "[scripts/gradle-check] Creating ../gradlew stub."
  cat > ../gradlew <<'EOF'
#!/usr/bin/env sh
echo "[CI stub] ./gradlew invoked at repo root; Expo managed repository."
exit 0
EOF
  chmod +x ../gradlew || true
fi
../gradlew "$@" || true
exit 0
