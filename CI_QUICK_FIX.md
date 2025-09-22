CI Quick Fix for ./gradlew Not Found

Before any CI step that invokes ./gradlew from the repository root, run:
  sh ./ci-ensure-root-gradlew.sh

This will:
- Create ./gradlew at the repo root
- Mark it executable

After that, your CI can safely invoke ./gradlew (the stub no-ops for Expo managed).
For a real Android build, follow CI_USAGE.md (prebuild in mobile_frontend, then use the generated wrapper).
