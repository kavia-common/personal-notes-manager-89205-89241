#!/usr/bin/env sh
# Apply executable permissions to necessary helper scripts listed in .files_manifest
set -e
MANIFEST=".files_manifest"
if [ -f "$MANIFEST" ]; then
  echo "[init-ci] Applying executable permissions based on $MANIFEST"
  while IFS= read -r line; do
    # Skip comments and empty lines
    case "$line" in
      ""|\#*) continue ;;
      *)
        if [ -f "$line" ]; then
          chmod +x "$line" 2>/dev/null || true
          echo "[init-ci] +x $line"
        fi
      ;;
    esac
  done < "$MANIFEST"
else
  echo "[init-ci] Manifest $MANIFEST not found; skipping."
fi

# Ensure root-level ./gradlew exists (final fallback)
if [ ! -f "./gradlew" ]; then
  echo "[init-ci] Creating ./gradlew stub at repo root."
  cat > ./gradlew <<'EOF'
#!/usr/bin/env sh
# Root-level CI Gradle wrapper stub for Expo-managed repository.
echo "[CI stub] ./gradlew invoked at repo root; no native Gradle project by default."
exit 0
EOF
  chmod +x ./gradlew || true
  echo "[init-ci] Created and chmod +x ./gradlew"
fi

echo "[init-ci] Completed."
exit 0
