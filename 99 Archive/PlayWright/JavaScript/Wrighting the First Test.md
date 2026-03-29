Test requirement:
Tool: JavaScript
Playwright 

# Playwright with JavaScript: Create, Run, and Debug Tests

## Source

* **Video Title:** Playwright with Javascript | How To Create and Run Tests | Part 3
* **Channel:** SDET- QA
* **URL:** https://www.youtube.com/watch?v=ePy0Xl-JpRg

## Playwright File Naming & Conventions

The file naming structure is critical for the Playwright Test Runner to discover and execute tests.

| Convention              | Description                                                                                                                                                                                                                                                                         |
| :---------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Test File Extension** | Must use **`.spec.js`** or **`.spec.ts`** (for TypeScript). The term "spec" is short for "specification," signifying a file that defines the behavior of a feature.                                                                                                                 |
| **Test File Location**  | All test files must be created inside the designated **`test`** folder.                                                                                                                                                                                                             |
| **Keywords**            | Test files must import and use the **`test`** block and **`expect`** function.                                                                                                                                                                                                      |
| **Asynchronous Code**   | The test function block must be declared as **`async`**. Any action that interacts with the page (e.g., `page.goto()`, `expect()`, `page.close()`) must be preceded by **`await`**. This is necessary for sequential execution in Playwright's asynchronous JavaScript environment. |

---

## Playwright Test Script Structure

The basic structure of a Playwright test involves:

```javascript
const { test, expect } = require('@playwright/test');

// The test function is declared as 'async'
test('Verify Homepage Title and URL', async ({ page }) => {
    // 1. Launch URL (must use 'await')
    await page.goto('[https://demoblaze.com/](https://demoblaze.com/)');

    // 2. Assertions/Validations (must use 'await expect')
    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('[https://demoblaze.com/](https://demoblaze.com/)');

    // 3. Close the browser
    await page.close();
});