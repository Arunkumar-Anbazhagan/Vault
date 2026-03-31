# Playwright Testing Framework Notes (Code Block Format)

## 1. Installation and Setup
Playwright Test is an **end-to-end test framework** for modern web apps [1]. It bundles the test runner, assertions, isolation, parallelization, and rich tooling [1]. It supports Chromium, WebKit, and Firefox on Windows, Linux, and macOS, running either **headless or headed** [1].

### Installation Commands
The installation command initializes a new project or adds Playwright to an existing one [2]:
*   `npm init playwright@latest` [2]

### Setup Details
During installation, prompts include choosing/confirming:
*   TypeScript or JavaScript (default: TypeScript) [2].
*   Tests folder name (default: `tests`) [2].
*   **Add a GitHub Actions workflow** (recommended for CI) [2].
*   Install Playwright browsers (default: yes) [2].

### Installed Components
Playwright downloads necessary browser binaries and sets up a scaffold [3]:
*   `playwright.config.ts`: Centralizes configuration for target browsers, timeouts, retries, projects, and reporters [3].
*   `tests/example.spec.ts`: Contains a minimal starter test [3, 4].
*   `tests-examples/`: Provides richer sample tests (e.g., a todo app) [3, 4].

---

## 2. Generating Tests (Codegen)
Codegen opens a browser window and the Playwright Inspector for **recording, copying, and managing generated tests** [5].

### Running Codegen
Run the test generator, optionally followed by a URL [5]:
*   `npx playwright codegen demo.playwright.dev/todomvc` [6]

### Recording Process
1.  Playwright generates code automatically as you perform actions (e.g., click or fill) [6].
2.  Codegen analyzes the page and recommends the **best locator**, prioritizing role, text, and test id locators [6].
3.  It improves locators to uniquely identify the target element when multiple elements match [6].
4.  Record **Assertions** by clicking a toolbar icon, then clicking an element to assert visibility, text, or value [7].
5.  When finished, press the **'record' button to stop recording** [7]. Use the **'copy' button** to copy the code, or **'clear'** to start a new recording [7].

### Generating Locators (Locator Playground)
1.  Press the **'Record' button to stop recording**; the **'Pick Locator' button** appears [8].
2.  Click 'Pick Locator' and hover over elements to see the locator highlighted [8].
3.  Click the element; the code appears in the **locator playground** [8].
4.  You can edit the locator in the playground and see the matching element highlighted live [8].
5.  Use the copy button to paste the locator into your code [8].

### Emulation
The test generator supports emulation for viewports, devices, color schemes, geolocation, language, or timezone, and can also preserve authenticated state [9].

---

## 3. Writing Tests and Assertions
Playwright tests are structured to **perform actions** and **assert the state** against expectations [10]. Playwright automatically waits for **actionability checks** before performing actions [10, 11].

### Actions and Interactions
*   **Navigation:** Tests usually start by navigating to a URL using `await page.goto('URL')` (Playwright waits for the load state) [12].
*   **Locators:** Interactions rely on the Locators API to find elements [11].
*   **Basic Actions:** Include `locator.click()`, `locator.fill()` (input text), `locator.check()`, `locator.uncheck()`, and `locator.hover()` [13].

### Assertions
Assertions use the `expect` function and a matcher [13].

| Assertion Type | Description | Example Matcher |
| :--- | :--- | :--- |
| **Async Matchers** | **Wait until the condition is met** (non-flaky) [14]. | `expect(page).toHaveTitle()` [14], `expect(locator).toBeVisible()` [14], `expect(locator).toHaveURL()` [14]. |
| **Generic Matchers** | Perform **immediate synchronous checks** on available values (do not use `await`) [15]. | `expect(success).toBeTruthy()` [15], `toEqual`, `toContain` [15]. |

### Test Structure and Isolation
*   **Isolation:** Tests are isolated between runs using the **Browser Context**, which is equivalent to a brand new browser profile [15].
*   **Test Hooks:** Used for organization: `test.describe` (grouping tests), `test.beforeEach`/`test.afterEach` (before/after *each* test), and `test.beforeAll`/`test.afterAll` (executed once per worker) [16].

---

## 4. Running and Debugging Tests

### Running Tests (Command Line)
Tests run **headless** and **in parallel** by default [4, 17].
*   Run all tests: `npx playwright test` [18].
*   Run in **headed mode** (browser window opens): `npx playwright test --headed` [19].
*   Run specific project/browser: `npx playwright test --project webkit` (can specify multiple projects) [19].
*   Run specific file: `npx playwright test landing-page.spec.ts` [20].
*   Run by title: `npx playwright test -g "add a todo item"` [21].
*   Run last failed tests: `npx playwright test --last-failed` [21].

### UI Mode (Recommended)
UI Mode provides a better developer experience [18, 22].
*   Command: `npx playwright test --ui` [19].
*   Features: watch mode, live step view, **time travel debugging**, and the **locator picker** [22, 23].
*   In UI Mode, the Pick Locator button allows selecting an element, viewing/editing the locator in the playground, and copying it [22].

### Playwright Inspector Debugging
The Inspector allows stepping through Playwright API calls [24, 25].
*   Debug all tests: `npx playwright test --debug` [25].
*   Debug specific line: `npx playwright test example.spec.ts:10 --debug` [26].
*   The Inspector includes a **step over button** and the Pick Locator button [25, 26].

---

## 5. Reporting and Trace Viewer

### HTML Test Reports
The HTML Reporter is a dashboard filterable by browser and status (passed, failed, skipped, flaky) [27, 28].
*   It automatically opens only when failures occur [27, 28].
*   Open manually: `npx playwright show-report` [27, 28].
*   The report allows inspecting errors, attachments, and steps for each test [27, 29].

### Trace Viewer
The Trace Viewer is a GUI tool that lets you **visually see what was happening during each action** by exploring recorded traces [30].
*   **Recording:** By default, traces are configured to run `trace: 'on-first-retry'` in `playwright.config.ts`, meaning they run on the first retry of a failed test [30, 31].
*   **Forcing Tracing Locally:** `npx playwright test --trace on` [32].
*   **Viewing:** Open the HTML report (`npx playwright show-report`) and click the trace icon next to the test file name [33, 34].
*   The viewer provides a **DOM snapshot** that is fully interactive, allowing you to open the browser DevTools during a specific step [35].

---

## 6. Continuous Integration (CI)
Playwright tests can run on any CI provider, with GitHub Actions being a common choice [36].

### GitHub Actions Setup
When installing Playwright, choosing the GitHub Actions workflow creates a `playwright.yml` file [37]. The workflow performs steps including:
1.  Install Node.js [37].
2.  Install Playwright Browsers (`npx playwright install --with-deps`) [37].
3.  Run Playwright tests [37].
4.  **Upload HTML report** (`playwright-report/`) as an artifact [37].

### Viewing CI Results
*   Test passes/failures are seen under the **Actions** tab on GitHub [38].
*   Clicking **"Run Playwright tests"** shows error messages and the call log [38].

### Viewing Downloaded Reports Locally
To view the downloaded `playwright-report` zip file (from Artifacts) locally, you must serve it:
*   Extract the zip, navigate to the directory, and run: `npx playwright show-report name-of-my-extracted-playwright-report` [33, 39].

### Handling Secrets and Security
Artifacts (traces, HTML reports, logs) can contain sensitive data (user credentials, access tokens) [40].
*   Treat these files carefully [40].
*   Only upload them to **trusted artifact stores**, or **encrypt the files** before uploading or sharing [40].

| Edition                               | Key                           | Ticket                                                                                                                      |
| ------------------------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Education                             | YNMGQ-8RYV3-4PGQ3-C8XTP-7CFBY | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Education.xml)                             |
| Education N                           | 84NGF-MHBT6-FXBX8-QWJK7-DRR8H | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Education.N.xml)                           |
| Enterprise                            | XGVPP-NMH47-7TTHJ-W3FW7-8HV2C | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Enterprise.xml)                            |
| Enterprise N                          | 3V6Q6-NQXCX-V8YXR-9QCYV-QPFCT | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Enterprise.N.xml)                          |
| Enterprise LTSB 2015                  | FWN7H-PF93Q-4GGP8-M8RF3-MDWWW | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Enterprise.LTSB.2015.xml)                  |
| Enterprise LTSB 2016                  | NK96Y-D9CD8-W44CQ-R8YTK-DYJWX | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Enterprise.LTSB.2016.xml)                  |
| Enterprise LTSC 2019                  | 43TBQ-NH92J-XKTM7-KT3KK-P39PB | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Enterprise.LTSC.2019.xml)                  |
| Enterprise N LTSB 2015                | NTX6B-BRYC2-K6786-F6MVQ-M7V2X | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Enterprise.N.LTSB.2015.xml)                |
| Enterprise N LTSB 2016                | 2DBW3-N2PJG-MVHW3-G7TDK-9HKR4 | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Enterprise.N.LTSB.2016.xml)                |
| Home                                  | YTMG3-N6DKC-DKB77-7M9GH-8HVX7 | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Home.xml)                                  |
| Home N                                | 4CPRK-NM3K3-X6XXQ-RXX86-WXCHW | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Home.N.xml)                                |
| Home China                            | N2434-X9D7W-8PF6X-8DV9T-8TYMD | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Home.China.xml)                            |
| Home Single Language                  | BT79Q-G7N6G-PGBYW-4YWX6-6F4BT | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Home.Single.Language.xml)                  |
| IoT Enterprise                        | XQQYW-NFFMW-XJPBH-K8732-CKFFD | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/IoT.Enterprise.xml)                        |
| IoT Enterprise Subscription           | P8Q7T-WNK7X-PMFXY-VXHBG-RRK69 | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/IoT.Enterprise.Subscription.xml)           |
| IoT Enterprise LTSC 2021              | QPM6N-7J2WJ-P88HH-P3YRH-YY74H | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/IoT.Enterprise.LTSC.2021.xml)              |
| IoT Enterprise LTSC 2024              | CGK42-GYN6Y-VD22B-BX98W-J8JXD | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/IoT.Enterprise.LTSC.2024.xml)              |
| IoT Enterprise LTSC Subscription 2024 | N979K-XWD77-YW3GB-HBGH6-D32MH | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/IoT.Enterprise.LTSC.Subscription.2024.xml) |
| Pro                                   | VK7JG-NPHTM-C97JM-9MPGT-3V66T | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Pro.xml)                                   |
| Pro N                                 | 2B87N-8KFHP-DKV6R-Y2C8J-PKCKT | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Pro.N.xml)                                 |
| Pro Education                         | 8PTT6-RNW4C-6V7J2-C2D3X-MHBPB | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Pro.Education.xml)                         |
| Pro Education N                       | GJTYN-HDMQY-FRR76-HVGC7-QPF8P | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Pro.Education.N.xml)                       |
| Pro for Workstations                  | DXG7C-N36C4-C4HTG-X4T3X-2YV77 | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Pro.for.Workstations.xml)                  |
| Pro N for Workstations                | WYPNQ-8C467-V2W6J-TX4WX-WT2RQ | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Pro.N.for.Workstations.xml)                |
| S                                     | V3WVW-N2PV2-CGWC3-34QGF-VMJ2C | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Cloud.S.xml)                               |
| S N                                   | NH9J3-68WK7-6FB93-4K3DF-DJ4F6 | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Cloud.S.N.xml)                             |
| SE                                    | KY7PN-VR6RX-83W6Y-6DDYQ-T6R4W | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/CloudEdition.SE.xml)                       |
| SE N                                  | K9VKN-3BGWV-Y624W-MCRMQ-BHDCD | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/CloudEdition.SE.N.xml)                     |
| Team                                  | XKCNC-J26Q9-KFHD2-FKTHY-KD72Y | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Team.xml)                                  |