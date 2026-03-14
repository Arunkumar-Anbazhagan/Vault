# Flutter Course for Beginners - Detailed Notes

## Introduction
* **Target Audience**: Absolute beginners, graphic designers (Figma/Photoshop), and project managers.
* **Goal**: Go from zero to releasing apps on Apple App Store and Google Play Store.
* **Tools Used**: Visual Studio Code, Firebase, Figma.
* **Methodology**: Chronological learning is highly recommended. [00:00:00]

---

## Chapter 1: Developer Accounts
* **Purpose**: Necessary for releasing apps to stores and creating App IDs (Reverse Domain Identifiers).
* **App Identifiers**: E.g., `com.yourname.appname`. Needed for backend setup and official registration. [00:04:46]
* **Account Types**:
    * **Individual**: You are personally liable.
    * **Company/Organization**: Liability lies with the company. [00:10:12]
* **Apple Developer Account**:
    * Requires a D-U-N-S number for organizations (from Dun & Bradstreet).
    * Requires a website with content.
    * Cost: ~$99/year. [00:25:02]
* **Google Play Developer Account**:
    * More straightforward process.
    * One-time registration fee (approx $25).
    * Linked to Google account. [00:29:13]
* **Requirements**: A Mac is required to build and release iOS apps. Windows/Linux can be used for Android but cannot build for iOS. [00:35:14]

---

## Chapter 2: Setup & Installation
* **Flutter**: A UI framework for building cross-platform apps from a single codebase. [00:43:38]
* **Dart**: The programming language powering Flutter. Optimized for UI. [00:45:37]
* **DartPad**: Web-based tool to run Dart code without installation. [00:46:29]
* **Installation Steps**:
    1.  **Download Flutter SDK**: From `flutter.dev`. Unzip to a stable location (e.g., `~/development/flutter`). [00:50:22]
    2.  **Update Path**: Add Flutter bin directory to your system path (ZSH or Bash profile). [00:54:51]
    3.  **Flutter Doctor**: Run `flutter doctor` in terminal to check health and missing dependencies. [01:00:08]
    4.  **Xcode**: Install from Mac App Store (for iOS dev). Install command-line tools: `sudo xcode-select --install`. [01:02:24]
    5.  **Android Studio**: Download for Android SDK management. Install Android SDK via Tools > SDK Manager. [01:04:22]
    6.  **VS Code**: Recommended text editor. Install extensions: **Flutter**, **Dart**, **Error Lens**, **Bloc**. [01:08:52]

---

## Chapter 3: Dart Basics
* **Main Entry Point**: `void main() { ... }` is where the app starts. [01:37:25]
* **Variables & Constants**:
    * `var`: Mutable variables.
    * `final`: Runtime constant (value set once).
    * `const`: Compile-time constant (value must be known before running). [01:33:50]
* **Data Types**:
    * `String` (text), `int` (integers), `double` (decimals), `bool` (true/false).
    * Dart infers types automatically (Type Inference). [01:30:44]
* **Functions**: Blocks of reusable code.
    * Syntax: `ReturnType functionName(Parameters) { ... }`.
    * Arrow syntax `=>` for one-liners. [01:43:37]
* **String Interpolation**: Injecting variables into strings using `$variable` or `${expression}`. [01:54:24]

---

## Chapter 4: Control Statements & Collections
* **If/Else**: Branching logic based on conditions. [02:03:38]
* **Operators**:
    * Arithmetic: `+`, `-`, `*`, `/`.
    * Comparison: `==`, `!=`.
    * Increment/Decrement: `++`, `--` (Prefix vs Postfix). [02:14:05]
* **Lists**: Ordered collection of items (Arrays). Zero-based indexing.
    * `length` property.
    * `add()` to append items. [02:22:06]
* **Sets**: Unordered collection of **unique** items. Duplicates are ignored. [02:30:02]
* **Maps**: Key-value pairs (Dictionaries). Keys must be unique. [02:38:31]

---

## Chapter 5: Null Safety
* **Concept**: Variables cannot contain `null` unless explicitly declared nullable. Prevents runtime null pointer errors. [02:46:52]
* **Nullable Types**: Append `?` to type (e.g., `String? name`). [02:55:00]
* **Null Check**: `if (variable != null)`.
* **Operators**:
    * `??` (If null operator): `value ?? defaultValue`. [03:04:31]
    * `?.` (Conditional Access): `object?.property` (Access property only if object is not null). [03:18:23]
    * `!` (Force Unwrap): `value!` (Asserts value is not null - use with caution).

---

## Chapter 6: Classes & Objects
* **Class**: Blueprint for creating objects.
* **Object**: An instance of a class. [03:44:45]
* **Constructors**: Special functions to initialize objects.
    * `Class(this.property)` syntax.
    * **Factory Constructors**: Use `factory` keyword. Can return existing instances or sub-types. [04:01:43]
* **Inheritance**: `class Cat extends Animal`. Inherits functionality. [03:53:30]
* **Abstract Classes**: Classes that cannot be instantiated directly. Define interfaces. [03:59:11]
* **Custom Operators**: Overriding operators like `==` and `hashCode` for object comparison. [04:08:22]

---

## Chapter 7: Advanced Dart
* **Extensions**: Adding functionality to existing classes without modifying them. [04:19:53]
    * Syntax: `extension Name on Type { ... }`.
* **Asynchronous Programming**:
    * **Future**: Represents a value available in the future.
    * **async/await**: Syntax to write async code that looks synchronous. [04:33:32]
* **Streams**: A sequence of asynchronous events. Like a pipe of data. [04:37:28]
    * `Stream.periodic`: Emits events over time.
    * `await for`: Loop over stream events.
* **Generators**:
    * `sync*` (Synchronous generator): Returns `Iterable`. Uses `yield`.
    * `async*` (Asynchronous generator): Returns `Stream`. Uses `yield`. [04:46:25]
* **Generics**: Writing code that works with multiple types (e.g., `List<T>`). [04:54:09]

---

## Chapter 8: Project Setup (Notes App)
* **Create Project**: `flutter create --org com.domain projectname`. [05:07:18]
* **Folder Structure**:
    * `lib/`: Main Dart code.
    * `ios/` & `android/`: Platform-specific code.
    * `pubspec.yaml`: Dependency management. [05:23:28]
* **Dependencies**: Added via terminal `flutter pub add [package]`.
    * Added: `firebase_core`, `firebase_auth`, `cloud_firestore`, `firebase_analytics`. [05:43:38]

---

## Chapter 9: iOS Setup
* **Certificates**: Identity of the developer (Dev & Distribution). Created via Keychain Access > Certificate Assistant. [06:10:33]
* **Identifiers**: App IDs in Apple Developer Portal. Enable capabilities here. [06:24:06]
* **Profiles**: Connects App ID, Certificate, and Devices. (Dev & Distribution profiles). [06:30:48]
* **Xcode Config**: Disable "Automatically manage signing" to manually select profiles for better control. [06:36:48]

---

## Chapter 10: Android Setup
* **Developer Mode**: Enable on Android phone (Settings > About Phone > Tap Build Number 7 times). Enable USB Debugging. [07:10:29]
* **scrcpy**: Tool to mirror Android screen to computer via ADB. [07:05:02]
* **minSdkVersion**: Updated in `build.gradle` (usually to 19 or 21) to support Firebase plugins. [07:18:05]
* **MultiDex**: Enabled for apps with many methods (required by Firebase). [07:24:42]

---

## Chapter 11: Firebase Integration
* **Firebase Console**: Create project.
* **FlutterFire CLI**: New tool to configure Firebase apps automatically.
    * Command: `flutterfire configure`. [07:35:00]
    * Automatically generates `firebase_options.dart`.
* **Initialization**: `await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);` in `main()`. [08:48:15]

---

## Chapter 12: Registration View
* **UI Layout**: `Scaffold` > `AppBar` & `Body`.
* **TextFields**: For email and password.
    * `obscureText: true` for passwords.
    * `enableSuggestions: false`, `autocorrect: false`. [08:45:03]
* **Controllers**: `TextEditingController` to read input text. [08:33:56]
* **Firebase Auth**: `FirebaseAuth.instance.createUserWithEmailAndPassword()`. [08:41:44]
* **Error Handling**: `try-catch` blocks specifically catching `FirebaseAuthException`. [09:34:24]

---

## Chapter 13: Login View
* **Structure**: Similar to Registration.
* **Auth Call**: `FirebaseAuth.instance.signInWithEmailAndPassword()`. [09:24:30]
* **Navigation**: Introduced `Navigator.of(context).pushNamedAndRemoveUntil()` to switch screens and clear stack. [11:57:06]

---

## Chapter 14: App Initialization Logic
* **Refactoring**: Moved logic to a `HomePage` acting as a router.
* **FutureBuilder**: Used to initialize Firebase App before showing UI. [10:01:05]
* **Conditional Rendering**: Check `snapshot.connectionState`. If done, check `currentUser`.
    * If logged in & verified -> Show Notes.
    * If not logged in -> Show Login.
    * If not verified -> Show Verify Email view. [12:12:09]

---

## Chapter 15: Git & GitHub
* **Git Init**: `git init` in project folder.
* **Staging**: `git add .`
* **Committing**: `git commit -m "message"`. [10:37:46]
* **SSH Keys**: Generating SSH keys for secure GitHub connection. [10:46:22]
* **Remote**: `git remote add origin [url]`.
* **Push**: `git push -u origin main`. [11:02:24]

---

## Chapter 16: Email Verification
* **Send Verification**: `user.sendEmailVerification()`. [11:27:12]
* **Check Status**: `user.emailVerified`. Note: Firebase caches user object. Need to reload user or re-login to update this status. [11:42:33]
* **UI**: Simple view telling user to check email.

---

## Chapter 17: Navigation & Routing
* **Named Routes**: Defining strings for routes (e.g., `/login/`, `/register/`). [11:51:57]
* **Main Routes Map**: Defining the map in `MaterialApp(routes: { ... })`. [11:52:34]
* **Navigation**: Using `Navigator.pushNamed` vs `pushNamedAndRemoveUntil` (to prevent back button return). [13:29:30]

---

## Chapter 18: Main UI & Dialogs
* **AppBar Actions**: Creating a `PopupMenuButton` for Logout. [12:41:46]
* **Dialogs**: `showDialog()` with `AlertDialog`.
    * Returns a `Future<bool>` for confirmation. [12:56:09]
* **Logout Logic**: Sign out from Firebase -> Navigate to Login. [13:06:51]

---

## Chapter 21: Generic Error Dialogs
* **Refactoring**: Created a generic `showErrorDialog` to handle various auth errors (Wrong password, user not found).
* **Implementation**: Returns `Future<void>`, displays title/content and an 'OK' button. [13:58:02]

---

## Chapter 24: Auth Architecture (Service & Provider)
* **Abstraction**: Created `AuthUser` (wrapper around Firebase User) to decouple UI from Firebase. [15:10:48]
* **AuthProvider**: Abstract class defining auth interface (login, register, logout). [15:21:49]
* **FirebaseAuthProvider**: Concrete implementation using `FirebaseAuth`. [15:26:47]
* **AuthService**: Use Factory pattern to easily swap providers. Implements `AuthProvider` and delegates calls to the injected provider. [15:47:16]

---

## Chapter 25: Unit Testing
* **Mocking**: Creating `MockAuthProvider` to test logic without hitting Firebase. [16:59:44]
* **Test Package**: Added `test` dependency.
* **Writing Tests**:
    * `group()` to organize tests.
    * `test()` for individual cases.
    * `expect()` to assert results. [17:21:54]
    * Testing exceptions using `throwsA(isA<ExceptionType>())`.

---

## Chapter 26-27: Local Storage (CRUD with SQLite)
* **Purpose**: Initial local storage implementation before Cloud.
* **Dependencies**: `sqflite`, `path_provider`, `path`. [18:14:43]
* **Database Service**:
    * `open()`: Opens DB file in docs directory.
    * `execute()`: Run SQL to create tables (User, Note). [18:46:05]
    * **CRUD Operations**: `insert`, `query`, `update`, `delete`.
    * **Model Classes**: `DatabaseUser`, `DatabaseNote` with `fromRow` constructors. [18:23:12]

---

## Chapter 28: Reactive UI (Streams)
* **StreamController**: Manages state flow.
* **Broadcast Stream**: `StreamController.broadcast()` allows multiple listeners. [19:39:34]
* **Caching**: Reading DB into a local List, then adding to Stream.
* **UI Update**: `StreamBuilder` listens to service stream to rebuild UI automatically on data changes. [20:30:10]

---

## Chapter 29-34: Notes Functionality
* **Creating Notes**: Logic to ensure user exists in DB, then insert note.
* **Updating Notes**: `update()` SQL command.
* **Deleting Notes**: `delete()` SQL command with dismissal dialog.
* **UI List**: `ListView.builder` to display notes efficiently.
* **ListTile**: Used for note rows with trailing delete icon. [22:09:03]

---

## Chapter 36-37: Migration to Cloud Firestore
* **Firestore**: NoSQL document database.
* **Structure**: Collections (`notes`) -> Documents (individual note). [24:01:24]
* **Data Model**: Converted `DatabaseNote` to `CloudNote`.
* **Service**: `FirebaseCloudStorage` implementing CRUD using Firestore SDK.
    * `notes.snapshots()` provides a realtime stream of data. [24:49:44]
* **Security Rules**: Updated Firestore rules to allow read/write only if `request.auth != null`. [23:58:31]

---

## Chapter 38: Sharing Notes
* **Share Plus**: Plugin `share_plus` to trigger native share sheet. [25:22:35]
* **Implementation**: `Share.share(text)` called from an IconButton. [25:33:39]

---

## Chapter 39-41: Bloc Pattern
* **Bloc Library**: State management library to separate business logic from UI completely. [25:37:46]
* **Events**: Inputs to Bloc (e.g., `AuthEventLogin`, `AuthEventLogout`).
* **States**: Outputs from Bloc (e.g., `AuthStateLoggedIn`, `AuthStateLoggedOut`).
* **AuthBloc**: Handles logic. `on<Event>((event, emit) { ... })`. [26:49:47]

---

## Chapter 42: Integrating Bloc
* **BlocProvider**: Injects Bloc into widget tree. [27:10:16]
* **BlocBuilder**: Rebuilds UI based on state changes.
* **BlocListener**: Executes side effects (like showing dialogs) on state changes.
* **BlocConsumer**: Combines Builder and Listener. [29:43:11]
* **Refactoring**: Main `HomePage` now listens to `AuthBloc` state to switch between Login/Register/Notes views.

---

## Chapter 43: Loading Screen (Overlay)
* **Problem**: Dialogs block navigation.
* **Solution**: Use `OverlayEntry` to show a loading indicator on top of everything. [29:01:38]
* **LoadingController**: Manages showing/hiding/updating the overlay.
* **Logic**: `AuthBloc` emits `isLoading` state property. UI listens and toggles overlay. [29:38:02]

---

## Chapter 44: App Polish
* **App Icons**:
    * Tool: `flutter_launcher_icons` package.
    * Config: Define in `flutter_launcher_icons.yaml`, run generation command. [30:53:32]
* **App Name**:
    * iOS: Change `CFBundleDisplayName` in `Info.plist`. [31:03:20]
    * Android: Change `android:label` in `AndroidManifest.xml`. [31:04:39]
* **Splash Screen**:
    * iOS: Edit `LaunchScreen.storyboard` in Xcode. [31:12:18]
    * Android: Add splash images to `mipmap` folders and update `styles.xml`. [31:50:19]

---

## Chapter 45: Localization
* **Setup**: Add `flutter_localizations` & `intl`. Enable code generation. [35:04:40]
* **ARB Files**: JSON-like files for translations (`app_en.arb`, `app_sv.arb`). [35:21:13]
* **Usage**: `AppLocalizations.of(context)!.stringKey`.
* **Extensions**: Created context extension for cleaner syntax: `context.loc.stringKey`. [35:46:18]

---

## Chapter 46-50: Deployment
* **iOS**:
    * Archive in Xcode.
    * Upload to **App Store Connect**.
    * Test via **TestFlight**. [32:58:18]
* **Android**:
    * Create Keystore (`keytool`).
    * Configure `key.properties` and `build.gradle`. [34:43:51]
    * Build App Bundle: `flutter build appbundle`.
    * Upload to **Google Play Console**. [34:49:06]
* **Privacy**: Filled out data safety forms (Data types collected: Email, User ID, Files). [34:03:16]