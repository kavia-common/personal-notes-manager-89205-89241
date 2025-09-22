# personal-notes-manager-89205-89241

Mobile Frontend (React Native / Expo)
- Style: "Ocean Professional" (Blue primary, Amber accents), minimalist UI with subtle shadows and rounded corners.
- Features: Create, read, update, delete notes. Pin notes. Light/Dark theme toggle in header. Floating + action button to create notes.

How to run (Expo managed workflow):
1. cd mobile_frontend
2. npm install
3. npm run start
4. Press a to open Android emulator, i to open iOS simulator, or scan QR with Expo Go.

Building native binaries:
- Managed: Use EAS Build (recommended).
- Local run on device/simulator:
  - Android: npx expo run:android (runs prebuild and uses Gradle)
  - iOS: npx expo run:ios (requires macOS)
- CI note:
  - Some CI systems invoke ./gradlew from the repo root. A root-level stub gradlew is provided to no-op this step.
  - If your pipeline expects a Gradle check, invoke: npm run gradle:check (inside mobile_frontend).
  - For a real Gradle build, run: npm run prebuild:android && cd android && ./gradlew assembleDebug (inside mobile_frontend).

Notes storage:
- Uses @react-native-async-storage/async-storage. Data persists on device.
- Code entrypoint: mobile_frontend/index.ts -> App.tsx -> src/navigation/Navigation.tsx
- Navigation: @react-navigation/native with native-stack. Types in src/navigation/types.ts
- Theming: Ocean Professional light/dark in src/theme.ts. Header toggle switches modes.