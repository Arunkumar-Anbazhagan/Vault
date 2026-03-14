# 🛠️ Playwright Test Structure and Syntax

This note outlines the essential components required to build stable and organized automated tests using the Playwright Test Runner.

---

## 1. Required Imports and Keywords

Every Playwright test file must begin by importing the necessary libraries and rely on asynchronous JavaScript.

| Component | Syntax | Purpose |
| :--- | :--- | :--- |
| **Import** | `const { test, expect } = require('@playwright/test');` | Imports the core test function and the assertion library. |
| **Async** | `async ({ page }) => { ... }` | Declares the test function to handle Promises (operations that take time). **Mandatory.** |
| **Await** | `await page.click('#submit');` | Pauses execution until the preceding asynchronous action is complete. **Mandatory** before all browser interactions. |

---

## 2. The Core Test Block

The `test()` function defines an individual, executable test case.

**Structure:**
```javascript
test('A descriptive title of what the test verifies', async ({ page }) => {
    // 1. Arrange
    await page.goto('[https://example.com](https://example.com)');
    
    // 2. Act
    await page.fill('#username', 'testuser');

    // 3. Assert
    await expect(page.locator('.welcome-message')).toBeVisible();
});