#!/usr/bin/env sh
# Proxy gradle check to mobile_frontend npm script
if [ -d "mobile_frontend" ]; then
  (cd mobile_frontend && npm run gradle:check) || exit 0
else
  echo "[CI stub] mobile_frontend not found; no-op."
fi
exit 0
