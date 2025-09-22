CI Bootstrap

- Always call: sh ./ci-run.sh
  This ensures ./gradlew exists and is executable before any Gradle-related step.
- Then, instead of running ./gradlew directly, prefer:
  - npm run gradle:check (repo root), or
  - sh ./gradle-check

For real Android builds, see CI_USAGE.md.
