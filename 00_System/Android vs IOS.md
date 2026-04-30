---
tags:
  - android
  - ios
---


| Category                     | iOS (Restrictions)                                                             | Android (Flexibility)                                   | Impact on Your App                                   |
| ---------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------- | ---------------------------------------------------- |
| **Background Execution**     | ❌ No continuous background executionOnly limited modes (audio, location, VoIP) | ✅ Foreground services + WorkManager allowed             | Long-running features (tracking, sync) harder on iOS |
| **Persistent Notifications** | ❌ Not allowed (user can always dismiss)                                        | ✅ Allowed via foreground service                        | Cannot rely on notification as system UI on iOS      |
| **App Auto-start**           | ❌ Cannot start on boot or after kill                                           | ✅ Can start on boot (`BOOT_COMPLETED`)                  | Background recovery logic differs                    |
| **App Kill Behavior**        | ❌ App fully terminated → no execution                                          | ⚠️ Can still run services                               | Reliability gap for background tasks                 |
| **File System Access**       | ❌ Strict sandbox only                                                          | ⚠️ Scoped storage but still flexible                    | File-heavy apps need redesign on iOS                 |
| **Inter-App Communication**  | ❌ Limited (URL schemes only)                                                   | ✅ Intents, services, content providers                  | Deep integrations easier on Android                  |
| **Custom System UI**         | ❌ Very limited                                                                 | ✅ Highly customizable                                   | UI parity requires compromises                       |
| **App Distribution**         | ❌ Only via **Apple Inc. App Store (strict review)                              | ✅ Play Store + sideloading                              | Testing & distribution easier on Android             |
| **App Review Control**       | ❌ Manual + strict rejection policies                                           | ⚠️ Mostly automated                                     | iOS release cycles slower                            |
| **In-App Payments**          | ❌ Mandatory Apple IAP for digital goods                                        | ⚠️ Google Billing required but more flexible in regions | Revenue model constrained on iOS                     |
| **External Payments**        | ❌ Mostly restricted                                                            | ⚠️ Allowed in some cases                                | Business model differences                           |
| **Permissions Model**        | ⚠️ Strict + one-time prompts                                                   | ⚠️ Runtime permissions but more retry options           | UX flow differs                                      |
| **Tracking (Ads)**           | ❌ Mandatory ATT consent (opt-in)                                               | ⚠️ Opt-out model                                        | Ads revenue lower on iOS                             |
| **Bluetooth / NFC**          | ❌ Limited capabilities + entitlements                                          | ✅ More open hardware access                             | Hardware integrations harder on iOS                  |
| **Clipboard Access**         | ❌ User notified always                                                         | ⚠️ Less strict (recent versions tightened)              | Privacy-sensitive features limited                   |
| **Widgets / Live UI**        | ⚠️ Limited (static widgets, Live Activities)                                   | ✅ Dynamic widgets                                       | Real-time UI harder on iOS                           |
| **Multitasking**             | ❌ Limited (especially on iPhone)                                               | ✅ Split-screen, multi-window                            | UX differences                                       |
| **System-level Access**      | ❌ No access to system internals                                                | ⚠️ Limited but more open                                | Deep system tools not possible on iOS                |
| **Code Execution**           | ❌ No dynamic code execution                                                    | ⚠️ Some flexibility                                     | Plugin systems restricted on iOS                     |
| **App Updates / Hotfix**     | ❌ No dynamic updates (must go via App Store)                                   | ⚠️ Some dynamic delivery possible                       | Slower iteration on iOS                              |
[[iOS vs Android Platform Limitations for Cross‑Platform Apps]]
[[Different between the app development on Android and IOS]]