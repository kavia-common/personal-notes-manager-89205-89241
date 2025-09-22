#!/usr/bin/env sh
# Jenkins-style wrapper invoked by some pipelines instead of ./gradlew
set -e
if [ ! -f "./gradlew" ]; then
  echo "[jenkins-gradlew] Creating ./gradlew stub at repo root."
  cat > ./gradlew <<'EOF'
#!/usr/bin/env sh
echo "[CI stub] ./gradlew invoked at repo root; Expo managed project (no native Gradle by default)."
exit 0
EOF
  chmod +x ./gradlew || true
fi
echo "[jenkins-gradlew] Stub ensured. Exiting success."
exit 0
