#!/usr/bin/env node
// Root entrypoint used by some CI templates; ensures ./gradlew exists.
const fs = require('fs');
const path = require('path');

const gradlewPath = path.resolve(__dirname, 'gradlew');
if (!fs.existsSync(gradlewPath)) {
  const stub = `#!/usr/bin/env sh
echo "[CI stub] ./gradlew invoked at repo root; Expo managed (no native Gradle by default)."
exit 0
`;
  try {
    fs.writeFileSync(gradlewPath, stub, { mode: 0o755 });
    console.log('[root index] Created ./gradlew stub for CI.');
  } catch (e) {
    console.log('[root index] Failed to create ./gradlew stub (non-fatal):', e?.message || e);
  }
} else {
  try {
    fs.chmodSync(gradlewPath, 0o755);
  } catch {}
  console.log('[root index] ./gradlew exists; ensured executable.');
}
console.log('[root index] Initialization complete.');
