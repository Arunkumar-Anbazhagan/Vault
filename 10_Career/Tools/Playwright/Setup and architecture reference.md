# Playwright TypeScript Installation & Directory Architecture Reference

When setting up Playwright with TypeScript via the official initialization CLI:

```bash
npm init playwright@latest
# or
pnpm create playwright
# or
yarn create playwright
```

During initialization, the CLI prompts for:
1. **Language selection:** `TypeScript`
2. **Test directory name:** `tests` (default) or `e2e`
3. **GitHub Actions workflow integration:** `true` / `false`
4. **Playwright browser binary installation:** `true` / `false`

---

## 1. Directory Tree Overview

```text
playwright-automation/
├── .github/
│   └── workflows/
│       └── playwright.yml           # CI/CD pipeline automation for GitHub Actions
├── node_modules/                    # Node.js runtime modules & Playwright Test engine
├── tests/
│   └── example.spec.ts              # Sample test suite covering core assertions & locators
├── tests-examples/
│   └── demo-todo-app.spec.ts        # Comprehensive reference test suite for a TodoMVC web app
├── .gitignore                       # Preset rules to exclude artifacts, caches, and reports
├── package.json                     # Project manifest, devDependencies, and test scripts
├── package-lock.json                # Locked dependency tree resolution (or yarn.lock / pnpm-lock.yaml)
└── playwright.config.ts             # Central test runner configuration & browser matrices
```

---

## 2. File-by-File Breakdown

### `playwright.config.ts`
* **Role:** Central configuration file controlling test execution parameters, worker threading, timeouts, and browser configurations.
* **Core Options Configured:**
  * `testDir`: Target directory for test files (`./tests`).
  * `fullyParallel`: Runs individual tests across parallel workers (`true`/`false`).
  * `forbidOnly`: Fails the build on CI pipelines if `test.only` is committed.
  * `retries`: Automatic retry threshold on test failure (`process.env.CI ? 2 : 0`).
  * `workers`: Concurrency allocation (`process.env.CI ? 1 : undefined`).
  * `reporter`: Report generators (`'html'`, `'list'`, `'json'`, etc.).
  * `use`: Global execution profile (`trace`, `screenshot`, `video`, `baseURL`, `headless`).
  * `projects`: Target execution matrix (Desktop Chrome, Firefox, Safari/WebKit, Mobile devices).
* **Reference:** [Playwright Test Configuration Docs](https://playwright.dev/docs/test-configuration)

---

### `package.json`
* **Role:** Node.js package manifest specifying scripts, metadata, and dependencies.
* **Default Scaffolding Injections:**
  * `devDependencies`:
    * `@playwright/test`: Core testing framework, runner, expect assertion engine, and driver.
    * `@types/node`: Node.js runtime TypeScript definitions.
* **Suggested Scripts to Add:**
  ```json
  "scripts": {
    "test": "playwright test",
    "test:ui": "playwright test --ui",
    "test:headed": "playwright test --headed",
    "test:debug": "playwright test --debug",
    "report": "playwright show-report"
  }
  ```
* **Reference:** [Playwright Installation Guide](https://playwright.dev/docs/intro)

---

### `tests/example.spec.ts`
* **Role:** Minimal starter spec file designed to verify browser launching, page navigation, and web-first assertions.
* **Key Patterns Demonstrated:**
  * Structural test layout using `import { test, expect } from '@playwright/test';`
  * Asynchronous browser navigation: `await page.goto('https://playwright.dev/');`
  * Role-based user-facing locators: `page.getByRole('link', { name: 'Get started' })`
  * Auto-retrying web-first assertions: `await expect(page).toHaveTitle(...)`

---

### `tests-examples/demo-todo-app.spec.ts`
* **Role:** Comprehensive demo suite showcasing realistic end-to-end interactions against a TodoMVC application.
* **Key Patterns Demonstrated:**
  * Lifecycle setup hooks (`test.beforeEach`)
  * Locator filtering and chaining (`locator.filter({ hasText: ... })`)
  * Keyboard actions (`press('Enter')`)
  * DOM count assertions (`expect(locator).toHaveCount(n)`)
  * Storage and session validation via client-side storage state

---

### `.gitignore`
* **Role:** Prevents transient run artifacts, cache files, and heavy binaries from polluting version control.
* **Default Scaffolding Rules:**
  ```text
  node_modules/
  test-results/
  playwright-report/
  blob-report/
  playwright/.cache/
  ```

---

### `.github/workflows/playwright.yml`
* **Role:** Continuous Integration (CI) configuration file for GitHub Actions (generated if selected during CLI prompts).
* **Execution Flow:**
  1. Triggers on pull requests and pushes to `main` or `master`.
  2. Provisions an Ubuntu runner with Node.js.
  3. Executes `npm ci` for deterministic dependency installation.
  4. Runs `npx playwright install --with-deps` to provision headless browser engines and system-level OS libraries.
  5. Runs `npx playwright test`.
  6. Archives and uploads `playwright-report/` as a workflow build artifact.
* **Reference:** [Playwright CI GitHub Actions Guide](https://playwright.dev/docs/ci-intro)

---

## 3. Local Browser Binary Storage (System Level)

Playwright does **not** install browser binaries inside `node_modules` or the project root. Browser binaries (Chromium, Firefox, WebKit, and FFmpeg) are downloaded to system-level cache directories:

* **Windows:** `%USERPROFILE%\AppData\Local\ms-playwright`
* **Linux / WSL:** `~/.cache/ms-playwright`
* **macOS:** `~/Library/Caches/ms-playwright`