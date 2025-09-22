Root Gradle Wrapper Template

- The file gradlew.template.sh is the canonical stub used to satisfy CI that calls ./gradlew.
- To deterministically create ./gradlew (and mark it executable), run:
    sh ./init-gradlew.sh
- Configure your CI to run the command above before any Gradle step.
- For a real Android build, see CI_USAGE.md (mobile_frontend prebuild).
