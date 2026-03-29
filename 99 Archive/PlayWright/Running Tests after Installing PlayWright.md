[[Installing PlayWright]]
# Playwright Test Execution Commands and Options

**Video:** [Playwright Beginner Tutorial 3 | How to run tests](https://youtu.be/LTwg0kqdK4I)
**Channel:** Automation Step by Step

This note covers various commands and options for running, reporting, and debugging Playwright tests.

---

## 🚀 Basic Test Execution

### 1. Run All Tests
* **Command:** Runs all test files (`*.spec.js` or `*.spec.ts`) in the configured test directory (usually `tests/`).
    ```bash
    npx playwright test 
    ```
    (Runs on **Chromium**, **Firefox**, and **WebKit** by default) [01:44](https://youtu.be/LTwg0kqdK4I?t=104)

### 2. View HTML Report
* **Command:** Opens the generated HTML report in your browser after a run.
    ```bash
    npx playwright show report
    ```
    [03:14](https://youtu.be/LTwg0kqdK4I?t=194)

---

## ⚙️ Execution Options

### 1. Run in Parallel (Multiple Workers)
* **Command:** Use the `--workers` option to run tests in parallel, speeding up execution.
    ```bash
    npx playwright test --workers 3 
    ```
    (Runs with 3 workers simultaneously) [04:24](https://youtu.be/LTwg0kqdK4I?t=264)

### 2. Run a Specific Test File
* **Command:** Give the path to a specific file to run only the tests within it.
    ```bash
    npx playwright test tests/example.spec.js
    ```
    [05:14](https://youtu.be/LTwg0kqdK4I?t=314)

### 3. Run by File Name Pattern
* **Command:** Uses glob patterns or a word to match and run files containing that word in the name.
    ```bash
    npx playwright test example
    ```
    [06:19](https://youtu.be/LTwg0kqdK4I?t=379)

### 4. Run a Specific Test by Title
* **Command:** Use the `-g` (grep) option followed by the **title** of the test (or a partial match).
    ```bash
    npx playwright test -g "homepage has Playwright in title"
    ```
    [06:44](https://youtu.be/LTwg0kqdK4I?t=404)

### 5. Run on a Specific Browser (Project)
* **Command:** Use the `--project` option and specify the browser name (e.g., `chromium`, `firefox`, or `webkit`).
    ```bash
    npx playwright test --project chromium
    ```
    [08:04](https://youtu.be/LTwg0kqdK4I?t=484)

### 6. Run in Headed Mode (Show Browser UI)
* **Command:** Use the `--headed` option to display the physical browser GUI during execution (default is headless/no GUI).
    ```bash
    npx playwright test --project chromium --headed
    ```
    [08:57](https://youtu.be/LTwg0kqdK4I?t=537)

---

## 🐞 Debugging Tests

### 1. Start Debugger
* **Command:** Use the `--debug` option. This automatically runs in headed mode and opens the **Playwright Inspector** for step-by-step debugging.
    ```bash
    npx playwright test --project chromium --debug
    ```
    [09:57](https://youtu.be/LTwg0kqdK4I?t=597)

### 2. Debug from a Specific Line
* **Command:** Append the test file path with a colon and the **line number** where a test begins. This skips earlier tests in the file.
    ```bash
    npx playwright test tests/example.spec.js:23 --debug 
    ```
    [12:07](https://youtu.be/LTwg0kqdK4I?t=727)