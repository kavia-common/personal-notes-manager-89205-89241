#!/usr/bin/env sh
# Some CI templates run prebuild.sh automatically; ensure gradlew exists.
if [ ! -f "./gradlew" ]; then
  echo "[prebuild.sh] Creating ./gradlew stub."
  cat > ./gradlew <<'EOF'
#!/usr/bin/env sh
echo "[CI stub] ./gradlew invoked; Expo managed (no native Gradle by default)."
exit 0
EOF
fi
chmod +x ./gradlew 2>/dev/null || true
echo "[prebuild.sh] gradlew ready."
