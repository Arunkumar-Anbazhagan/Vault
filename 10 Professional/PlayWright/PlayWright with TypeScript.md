# Playwright Automation Using TypeScript Full Course 2025

**Video:** **#1 Playwright Automation Using TypeScript Full Course 2025 | Playwright TypeScript Beginner Tutorial**
* **Channel:** Testers Talk
* **URL:** [http://www.youtube.com/watch?v=788GvvcfwTY](http://www.youtube.com/watch?v=788GvvcfwTY)
* **Duration:** PT8H55M10S

---

### **# Course Overview & Introduction**

This course provides a full-stack deep dive into building and maintaining a **Playwright Automation Framework** using **TypeScript** [00:00:01].

* **Goal:** Write robust, clean, and scalable end-to-end tests [00:00:15].
* **Prerequisites:** All code is available in a GitHub repository [00:00:32].

#### **## What is Playwright & Core Concepts**
* **Definition:** An open-source, end-to-end testing tool/library [02:26:00].
* **Usage:** Tests modern web and mobile web applications in **headed** or **headless** mode, and supports **API testing** [02:37:00].
* **Architecture Flow:** Client (TS/JS code) sends JSON commands via **WebSockets** to the Playwright Node.js Server, which controls the browser engines via the **CDP Protocol** (Chrome Dev Tools Protocol) [10:31:00].
* **Key Terms:**
    * `async/await`: Used for handling asynchronous operations, where async functions return a Promise [01:15:06].
    * `test`: Function used to define individual test cases/suits [01:16:41].
    * `page`: The browser page object used to interact with the browser (clicking, typing, etc.) [01:17:51].
    * `expect`: The assertion library used for verification and comparison of actual vs. expected values [01:19:16].

#### **## Playwright Advantages (Why Choose Playwright?)**
* **Cross-Browser/Platform:** Supports Chromium, Firefox, WebKit, and runs on Windows, Linux, and macOS [02:59:00].
* **Automatic Waiting:** Eliminates flakiness by automatically waiting for elements to be ready (visible, enabled) before acting [04:26:00].
* **Dynamic Wait Assertions:** Automatically waits during assertions until the expected value is present [06:15:00].
* **Advanced Tools:**
    * **[[Trace Viewer]]**: Captures live DOM, screenshots, and video for easy debugging of failures [04:55:00].
    * **Codegen:** Tool for recording user actions and generating code automatically [07:44:00].
    * **Playwright Inspector:** Tool for identifying element locators [07:51:00].
* **Parallel Execution:** Built-in support for running tests in parallel, saving execution time [05:41:00].

---

### **# Chapter 2: Test Development Fundamentals**

#### **## Locator Strategies**
Playwright prioritizes accessibility-focused locators:

| Locator Type | Purpose & Example | Timestamp |
| :--- | :--- | :--- |
| `getByRole` | Best practice. Finds elements by accessibility role (e.g., button, link). `page.getByRole('link', { name: 'Sign in' })` | [02:46:45] |
| `getByLabel` | Finds element by its associated label. `page.getByLabel('Homepage')` | [02:50:11] |
| `getByText` | Finds an element based on its visible text content. `page.getByText('Sign up')` | [03:01:42] |
| `getByPlaceholder` | Finds an input element by its placeholder attribute. `page.getByPlaceholder('Search')` | [03:05:06] |
| `getByAltText` | Finds elements (usually images) by their `alt` attribute. `page.getByAltText('Avatar')` | [02:54:20] |
| `getByTestId` | Finds elements by a custom `data-testid` attribute (must be configured in `playwright.config.ts`) | [02:58:12] |
| `locator()` | For CSS selectors (recommended) or XPath. `page.locator('input[name="q"]')` | [03:09:47] |

#### **## Hooks for Setup/Cleanup**
Hooks are executed based on where they are defined (in a file or `test.describe` block).

* `test.beforeAll()`: Runs **once** before all tests in the file [03:18:49].
* `test.afterAll()`: Runs **once** after all tests in the file [03:19:58].
* `test.beforeEach()`: Runs **before every single test** (e.g., for login or navigation) [03:24:47].
* `test.afterEach()`: Runs **after every single test** (e.g., for data cleanup) [03:25:21].

#### **## UI Interaction Techniques**
* **Handling `[IFrames]`**: Elements inside iframes require switching context using `.frameLocator('iframe_selector')` [03:53:11].
* **Drag & Drop**: Use the `.dragTo(dropElement)` method on the source element [03:50:23].
* **Mouse Actions**:
    * Click with button control: `element.click({ button: 'middle' })` [04:01:39].
    * Hover: `element.hover()` [04:08:11].
    * Double Click: `element.dblclick()` [04:09:05].
* **Keyboard Actions**:
    * Press a single key (on an element): `element.press('Enter')` [04:16:01].
    * Press combination keys (global): `page.keyboard.press('Control+A')` [04:19:36].
* **Dropdowns**: Use `.selectOption()` with either the value, label, or index [03:37:11].

#### **## Assertions in Playwright**
* **Hard Assertions:** Standard assertions (e.g., `.toBeVisible()`). Execution stops immediately upon failure [04:40:59].
* **Soft Assertions:** Use `expect.soft()`. Execution **continues** after a failure to report all issues at the end of the test [05:09:18].

| Assertion | Checks if... | Example |
| :--- | :--- | :--- |
| `.toBeVisible()` | Element is visible [04:48:19] | `expect(element).toBeVisible()` |
| `.toHaveURL(url)` | Current URL matches expected value [04:55:49] | `expect(page).toHaveURL(expectedUrl)` |
| `.toHaveTitle(title)` | Page title matches expected value [04:57:30] | `expect(page).toHaveTitle(expectedTitle)` |
| `.toHaveText(text)` | Element's text content matches expected value [05:00:38] | `expect(element).toHaveText(expectedText)` |
| `.toHaveCount(num)` | Number of matching elements equals `num` [05:03:07] | `expect(locator).toHaveCount(5)` |
| `.toBeEditable()` | Input/textarea is editable [04:50:28] | `expect(element).toBeEditable()` |

---

### **# Chapter 3: Advanced Test Management**

#### **## Execution Control & Management**
| Feature | Command/Syntax | Purpose | Timestamp |
| :--- | :--- | :--- | :--- |
| **Skip Test** | `test.skip()` | Skips the individual test case [05:40:24] |
| **Run Only Test** | `test.only()` | Executes only the marked test [05:42:49] |
| **Group Tests** | `test.describe('Group Name', ...)` | Organizes tests logically [05:45:18] |
| **Tag Tests** | `{ tag: ['@smoke', '@reg'] }` | Assigns metadata for filtering runs. Use `npx playwright test --grep @tag` | [05:52:53] |
| **Repeat Run** | `npx playwright test --repeat-each 3` | Runs the entire test suite 3 times [05:59:20] |
| **Auto Retry** | `retries: 2` in `playwright.config.ts` | Automatically retries failed tests up to 2 extra times [06:03:42] |
| **Run Only Failed**| `npx playwright test --last-failed` | Reruns only the tests that failed in the immediate previous run [07:17:54] |

#### **## Timeouts Configuration**
Timeouts are specified in **milliseconds**. Individual settings override global ones.

* **Global Test Timeout:** `timeout: 60000` (1 minute) in `playwright.config.ts` [06:37:19].
* **Global Assertion Timeout:** `expect: { timeout: 10000 }` (10 seconds) in `playwright.config.ts` [06:44:29].
* **Global Action Timeout:** `use: { actionTimeout: 10000 }` (10 seconds) in `playwright.config.ts` [06:49:48].

#### **## Visual Testing**
Compares current screenshots to a golden reference snapshot.

* **Page Snapshot:** `await expect(page).toHaveScreenshot('login-page.png')` [06:19:25].
* **Element Snapshot:** `await expect(element).toHaveScreenshot('login-form.png')` [06:30:04].

---

### **# Chapter 4: Reports, Parallelism, and Advanced Scenarios**

#### **## Reporting and Media**
* **Multiple Reporters:** Configure an array in `playwright.config.ts` (e.g., `['html', ['json', { outputFile: 'report.json' }], 'list']`) [07:43:27].
    * Supported types: `html`, `json`, `junit`, `list`, `dot`, and `allure` [07:49:18].
* **Video Recording:** Enable in `playwright.config.ts` with `video: 'on'` to attach a recording of the test run to the HTML report [08:00:39].

#### **## Parallelism**
* **Configuration:** Set `fullyParallel: true` and define number of `workers` in `playwright.config.ts` [08:03:29].
* **Command Line:** Override config workers with `npx playwright test --workers 4` [08:07:23].

#### **## Multi-Session Handling**
* **New Browser Session:** Use `const context = await browser.newContext()` followed by `const newPage = await context.newPage()` to open a completely new session [07:04:05].
* **New Tab/Page (Same Session):** Use `const newTab = await page.context().newPage()` to open a new tab within the current session [07:08:38].

#### **## Handling Dialogs (Alerts/Popups/Prompts)**
To interact with any browser dialog, a listener must be registered *before* the action that triggers it.

* **Listener Setup:** `page.once('dialog', async dialog => { ... })` [07:26:00].
* **Actions:**
    * Accept (OK): `dialog.accept()` [07:27:16].
    * Dismiss (Cancel): `dialog.dismiss()` [07:33:58].
    * Enter text (Prompt): `dialog.accept('text to send')` [07:36:53].
    * Get message: `dialog.message()` [07:30:17].

---

### **# Chapter 5: Framework Design Patterns**

*(Note: The transcript for Chapter 5 is incomplete. Topics introduced include:)*

* **Data Driven Testing (DDT):** Using JSON, Excel, or CSV files to feed data into tests [08:54:34].
* **Page Object Model (POM):** Design pattern for test maintenance and readability [08:54:50].
* **Fixtures, Viewport, and Environment Variables** [08:54:57].