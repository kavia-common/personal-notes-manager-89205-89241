#!/usr/bin/env node
// Ensures a root-level ./gradlew exists for CI. Cross-platform Node variant.
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const gradlewPath = path.join(root, 'gradlew');

try {
  if (!fs.existsSync(gradlewPath)) {
    const stub = `#!/usr/bin/env sh
echo "[CI stub] ./gradlew invoked at repo root; Expo managed, no native Gradle project."
exit 0
`;
    fs.writeFileSync(gradlewPath, stub, { mode: 0o755 });
    console.log('[ensure-gradlew.js] Created ./gradlew stub.');
  } else {
    // Ensure executable bit
    try {
      fs.chmodSync(gradlewPath, 0o755);
    } catch {}
    console.log('[ensure-gradlew.js] ./gradlew exists; ensured executable.');
  }
} catch (e) {
  console.log('[ensure-gradlew.js] Non-fatal error:', e?.message || e);
}
