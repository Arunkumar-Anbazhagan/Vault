# Playwright Installation & Prerequisites(https://app.warp.dev/drive/notebook/-TDcmKPZ5RPNrYUsw0jsGNt )

This note summarizes the prerequisites and two methods for installing Playwright using Node.js, based on the video "Playwright Beginner Tutorial 2 | How to install".

---
## 🛠️ Installation Methods

There are two primary ways to install Playwright [04:32](https://youtu.be/IB2P1FBXjcQ?t=272):

### Method 1: Using Command Line (npm Package) [04:47](https://youtu.be/IB2P1FBXjcQ?t=287)

This method creates a Node.js project and installs Playwright via a single command.

1.  **Create and Open Folder:**
    * Create a new folder (e.g., `playwright_automation`) [05:12](https://youtu.be/IB2P1FBXjcQ?t=312).
    * Open this folder in VS Code (using File > Open Folder or drag-and-drop) [06:11](https://youtu.be/IB2P1FBXjcQ?t=371).
2.  **Run Installation Command:**
    * Open the integrated terminal in VS Code (**Terminal > New Terminal** or press `Ctrl + J`) [07:46](https://youtu.be/IB2P1FBXjcQ?t=466).
    * Run the main command:
        ```bash
        npm init playwright @latest
        ```
        (or specify a version like `@9.0.0` instead of `@latest`) [08:53](https://youtu.be/IB2P1FBXjcQ?t=533).
3.  **Follow Prompts:**
    * Choose between **TypeScript** or **JavaScript** (JavaScript was chosen in the video) [10:42](https://youtu.be/IB2P1FBXjcQ?t=642).
    * Specify the test folder name (e.g., `tests`) [10:47](https://youtu.be/IB2P1FBXjcQ?t=647).
    * Choose whether to add GitHub Action workflows (the video chose 'Yes') [11:08](https://youtu.be/IB2P1FBXjcQ?t=668).
4.  **Review Project Structure:** The command installs dependencies and creates the following structure [12:36](https://youtu.be/IB2P1FBXjcQ?t=756):
    * `package.json`: Manages the Node project and lists dependencies [12:44](https://youtu.be/IB2P1FBXjcQ?t=764).
    * `playwright.config.js` (or `.ts`): Configuration file for settings like test directory, timeouts, and browsers [13:32](https://youtu.be/IB2P1FBXjcQ?t=812).
    * `tests/` folder: Contains your test files (e.g., `example.spec.js`) [14:49](https://youtu.be/IB2P1FBXjcQ?t=889).
    * `.gitignore`: Used to exclude files when pushing to a Git repository [15:58](https://youtu.be/IB2P1FBXjcQ?t=958).
    * `.github/workflows/playwright.yml`: CI/CD file for GitHub Workflows [16:16](https://youtu.be/IB2P1FBXjcQ?t=976).
5.  **Verify Playwright Version (Optional):**
    * Check Playwright version: `npm playwright -v` [17:17](https://youtu.be/IB2P1FBXjcQ?t=1037)
    * Check available options: `npx playwright -h` [17:31](https://youtu.be/IB2P1FBXjcQ?t=1051)

---

### Method 2: Using VS Code Extension (Recommended) [04:57](https://youtu.be/IB2P1FBXjcQ?t=297)

This method is recommended when using VS Code as it provides a UI for running and debugging tests [23:10](https://youtu.be/IB2P1FBXjcQ?t=1390).

1.  **Create and Open Folder:** Create a new folder and open it in a new VS Code window [18:40](https://youtu.be/IB2P1FBXjcQ?t=1120).
2.  **Install Extension:**
    * Go to the Extensions view (`Ctrl + Shift + X`).
    * Search for **Playwright** and install **"Playwright Test for VS Code"** by Microsoft [20:02](https://youtu.be/IB2P1FBXjcQ?t=1202).
3.  **Install Playwright via Command Palette:**
    * Open the Command Palette (`Ctrl + Shift + P` or **View > Command Palette**) [20:45](https://youtu.be/IB2P1FBXjcQ?t=1245).
    * Type `playwright` and select the **Install Playwright** option [21:27](https://youtu.be/IB2P1FBXjcQ?t=1287).
    * Select the browsers to install and whether to include the GitHub Action workflow [21:36](https://youtu.be/IB2P1FBXjcQ?t=1296). This runs the same commands as Method 1 [22:00](https://youtu.be/IB2P1FBXjcQ?t=1320).
4.  **Extension Benefits:**
    * Access the **Playwright View** (Testing Focus) [23:47](https://youtu.be/IB2P1FBXjcQ?t=1427).
    * Allows you to directly **Run** or **Debug** tests using UI buttons [23:59](https://youtu.be/IB2P1FBXjcQ?t=1439).
    * You can select specific browsers to run on [24:18](https://youtu.be/IB2P1FBXjcQ?t=1458).
    * It highlights steps during execution and shows the time taken by each step [24:26](https://youtu.be/IB2P1FBXjcQ?t=1466).


#SDET QA
x