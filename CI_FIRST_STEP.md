First CI Step

Run this at the very beginning of your pipeline:
  sh ./init-ci.sh

This ensures:
- All helper scripts have executable permission.
- A root-level ./gradlew stub exists and is executable.

Then for a Gradle check substitute:
  npm run gradle:check
or:
  sh ./gradle-ci.sh

For real native Android builds, see CI_USAGE.md.
