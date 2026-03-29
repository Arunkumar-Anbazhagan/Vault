[[Running Tests after Installing PlayWright]]
# Playwright Beginner Tutorial 4 | How to write 1st Test

**Video:** [Playwright Beginner Tutorial 4 | How to write 1st Test](https://youtu.be/wuWLpsRwB5o)
**Channel:** Automation Step by Step

This note outlines the structure, syntax, and essential keywords for creating a basic Playwright test in a Node.js project.

---

## 📝 Step 1: Create the Test File

1.  **Navigate to the `tests` folder** in your Playwright project [00:59](https://youtu.be/wuWLpsRwB5o?t=59).
2.  **Create a New File:**
    * Right-click the `tests` folder and select **New File** [01:34](https://youtu.be/wuWLpsRwB5o?t=94).
    * **Name the file** using the required format: `[Name].spec.js` (e.g., `myfirsttest.spec.js`) [01:58](https://youtu.be/wuWLpsRwB5o?t=118).

---

## 📦 Step 2: Import Modules

You need to include the necessary modules from the Playwright Test package.

* **Syntax:** Use the Node.js `require` function to import the `test` and `expect` modules.
    ```javascript
    const { test, expect } = require('@playwright/test');
    ```
* **Purpose:**
    * `require`: A Node.js built-in function to load modules from separate files [02:47](https://youtu.be/wuWLpsRwB5o?t=167).
    * `const`: A JavaScript keyword used to declare a **constant** to prevent its value from being changed later [04:30](https://youtu.be/wuWLpsRwB5o?t=270).
    * `test`: Used to define and structure a test block [04:08](https://youtu.be/wuWLpsRwB5o?t=248).
    * `expect`: Used for assertions and checks [04:15](https://youtu.be/wuWLpsRwB5o?t=255).

---

## 📜 Step 3: Write the Test Block

The test block defines the flow of your automation script.

1.  **Test Structure:**
    ```javascript
    test('Test Title', async ({ page }) => {
        // Test steps go here
    });
    ```
    [13:18](https://youtu.be/wuWLpsRwB5o?t=798)

2.  **Key Components:**
    * **`'Test Title'`:** A descriptive title for your test [13:35](https://youtu.be/wuWLpsRwB5o?t=815).
    * **`async`:** A keyword that makes the function return a **Promise** [17:29](https://youtu.be/wuWLpsRwB5o?t=1049). This is essential because JavaScript is asynchronous, and Playwright actions need to wait for each other.
    * **`{ page }`:** This is a **fixture** provided by Playwright. It represents a single isolated page instance within a browser and is used to perform actions like navigation [14:52](https://youtu.be/wuWLpsRwB5o?t=892).

---

## 🌐 Step 4: Add Steps and Assertions

Inside the test block, use the `page` fixture and `expect` module to define actions and verifications.

1.  **Navigation (Action):**
    * Use `page.goto()` to navigate to a URL.
    * The `await` keyword ensures the browser waits for the action (like page loading) to complete before proceeding to the next step [17:46](https://youtu.be/wuWLpsRwB5o?t=1066).
    ```javascript
    await page.goto('[https://www.google.com](https://www.google.com)'); // Example URL
    ```
    [15:48](https://youtu.be/wuWLpsRwB5o?t=948)

2.  **Assertion (Verification):**
    * Use `await expect(page).toHaveTitle()` to verify the page title.
    * The assertion waits for the check to pass or fail [20:23](https://youtu.be/wuWLpsRwB5o?t=1223).
    ```javascript
    await expect(page).toHaveTitle('Google'); // Expects the title to be 'Google'
    ```
    [19:44](https://youtu.be/wuWLpsRwB5o?t=1184)

---

## ▶️ Step 5: Run the Test

Execute your specific test file from the terminal.

* **Command:** Use the `npx playwright test` command followed by the file path.
    ```bash
    npx playwright test tests/myfirsttest.spec.js
    ```
    [16:21](https://youtu.be/wuWLpsRwB5o?t=981)

* **Headless vs. Headed:** To run with the browser GUI visible, use the `--headed` flag:
    ```bash
    npx playwright test tests/myfirsttest.spec.js --headed 
    ```
    [22:21](https://youtu.be/wuWLpsRwB5o?t=1341)
##### Summary:
# 🎬 Video Summary: Writing Your First Playwright Test

**Video:** [Playwright Beginner Tutorial 4 | How to write 1st Test](https://youtu.be/wuWLpsRwB5o)
**Channel:** Automation Step by Step

This video outlines the structure, syntax, and essential steps for creating and running a basic Playwright test in a Node.js project.

---

## 📝 1. Setting Up the Test File

1.  **File Location:** Create your test file inside the **`tests` folder** [00:59](https://youtu.be/wuWLpsRwB5o?t=59).
2.  **Naming Convention:** The file must be named using the format **`[name].spec.js`** (e.g., `myfirsttest.spec.js`) [01:58](https://youtu.be/wuWLpsRwB5o?t=118).

---

## 📦 2. Imports and Test Definition

1.  **Import Modules:** Use the Node.js `require` function to import the core modules for testing [02:47](https://youtu.be/wuWLpsRwB5o?t=167):
    ```javascript
    const { test, expect } = require('@playwright/test');
    ```
2.  **Define the Test Block:** The test structure requires a title and an **`async`** function with the **`{ page }`** fixture [13:18](https://youtu.be/wuWLpsRwB5o?t=798).
    * The **`async`** keyword is crucial for handling asynchronous operations.
    * The **`{ page }`** fixture provides the isolated browser page instance for all interactions.

---

## 🌐 3. Actions and Assertions

Inside the test block, all Playwright commands must be prefixed with the **`await`** keyword [17:46](https://youtu.be/wuWLpsRwB5o?t=1066).

* **Action (Navigation):** Use `await page.goto()` to navigate to a URL.
    ```javascript
    await page.goto('[https://www.google.com](https://www.google.com)'); // Example Action
    ```
    [15:48](https://youtu.be/wuWLpsRwB5o?t=948)
* **Assertion (Verification):** Use the `expect` module to verify outcomes, such as the page title.
    ```javascript
    await expect(page).toHaveTitle('Google'); // Example Assertion
    ```
    [19:44](https://youtu.be/wuWLpsRwB5o?t=1184)

---

## ▶️ 4. Test Execution

* **Run Command:** Execute the specific test file from your terminal:
    ```bash
    npx playwright test tests/myfirsttest.spec.js 
    ```
    [16:21](https://youtu.be/wuWLpsRwB5o?t=981)
* **Headed Mode:** Add the **`--headed`** flag to the command to run the test with the browser GUI visible [22:21](https://youtu.be/wuWLpsRwB5o?t=1341).