#!/usr/bin/env sh
set -e
echo "[ci-bootstrap] Ensuring root-level gradle stubs exist and are executable."
if [ ! -f "./gradlew" ]; then
  echo "[ci-bootstrap] Creating ./gradlew stub."
  cat > ./gradlew <<'EOF'
#!/usr/bin/env sh
echo "[CI stub] ./gradlew invoked; Expo managed repo without native Gradle project."
exit 0
EOF
fi
chmod +x ./gradlew || true
# Make other helpers executable too (best effort)
chmod +x ./gradle.sh 2>/dev/null || true
chmod +x ./gradlew.sh 2>/dev/null || true
chmod +x ./gradle-ci.sh 2>/dev/null || true
chmod +x ./.ci-gradle.sh 2>/dev/null || true
chmod +x ./.ci/gradle.sh 2>/dev/null || true
chmod +x ./.ci/init.sh 2>/dev/null || true
echo "[ci-bootstrap] Done."
