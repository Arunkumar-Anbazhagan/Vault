# 🤖 Playwright Automation Learning Checklist

---

## 🚀 I. Core Fundamentals & Setup

- [x] **Installation:**[[Installing PlayWright]]
	- [ ] Architecture of Playwright: 
    - [x] Install Node.js (Prerequisite).
    - [x] Initialize project and install Playwright (`npm init playwright@latest`).
    - [x] Understand the basic project structure (`tests` folder, `playwright.config.js`).
- [ ] **Test Structure:** - [[Test Structure]]
    - [ ] Understand and use the **`test()`** block for individual scenarios.
    - [ ] Understand and use **`test.describe()`** for grouping test suites.
    - [ ] Master **`async` and `await`** keywords for all interactions.
- [ ] **Fixtures:**
    - [ ] Understand the core fixtures: **`page`**, **`browser`**, and **`context`**.
    - [ ] Learn to use built-in **hooks** (`test.beforeEach`, `test.afterAll`) for setup/teardown.

---

## 🔎 II. Locators, Actions, and Assertions

- [ ] **Locators (Finding Elements):**
    - [ ] Prioritize **User-Facing Locators** (Best Practice):
        - [ ] Use `getByRole()`.
        - [ ] Use `getByText()`, `getByLabel()`, `getByPlaceholder()`.
        - [ ] Use `getByTestId()` for custom attributes.
    - [ ] Understand traditional selectors (CSS and XPath) as a fallback.
    - [ ] Implement **Locator Chaining** for precise selection.
- [ ] **Actions (Interacting):**
    - [ ] Perform basic actions: `click()`, `fill()`, `check()`, `selectOption()`.
    - [ ] Handle complex actions: `hover()`, `dragAndDrop()`, `press()` (keyboard).
    - [ ] Handle file uploads using `setInputFiles()`.
- [ ] **Assertions (`expect`):**
    - [ ] Use **Asynchronous Matchers** for stability (e.g., `toHaveText`, `toBeVisible`).
    - [ ] Understand Playwright's **Auto-Waiting** mechanism (waits for element stability).

---

## ⚙️ III. Advanced Features & Framework Design

- [ ] **Debugging & Tooling:**
    - [ ] Use **Codegen** to record basic test flows.
    - [ ] Use the **`--debug`** flag and the Playwright Inspector UI.
    - [ ] Analyze failures with the **Trace Viewer** (DOM snapshots, network logs).
    - [ ] Use `page.pause()` for in-test debugging.
- [ ] **State Management:**
    - [ ] Implement the **Page Object Model (POM)** pattern.
    - [ ] Use `storageState` to save and reuse authentication (skip login).
- [ ] **Test Configuration:**
    - [ ] Configure different projects/browsers in `playwright.config.js`.
    - [ ] Adjust **Timeouts** (global and action-specific).
    -