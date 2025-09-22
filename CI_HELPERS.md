CI Helper Scripts

- pre-gradle.sh
  - Use: source or execute right before any CI step that runs ./gradlew
  - Ensures ./gradlew exists and is executable (creates a stub if missing)

- run-gradle-ci.sh
  - Use: Run this instead of ./gradlew in CI
  - It ensures the stub and then calls ./gradlew with provided args

Recommended order:
1) sh ./pre-gradle.sh
2) sh ./gradle-check (or ./run-gradle-ci.sh tasks)
