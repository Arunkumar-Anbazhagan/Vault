# Playwright with Javascript: Introduction  
*Lecture Date: May 23, 2023*  

## Overview  
Playwright is a modern automation tool for **end-to-end testing** of web applications, supporting multi-language and cross-browser automation.

---

## What is Playwright?
- **Automates modern web apps**, API tests, and browser-based mobile apps (not native mobile apps)
- **Definition**: Enables reliable E2E testing for modern web applications

---

## Supported Features  
**Applications:**  
- Web browser apps  
- Mobile web apps  
- API testing

**Languages:**  
- JavaScript  
- TypeScript  
- Java  
- Python  
- .NET (C#)

**Browsers:**  
- Chromium-based (Chrome, Opera, Edge, Brave, Epic, Sim, etc.)  
- Firefox  
- WebKit (Safari)

**Operating Systems:**  
- Windows  
- macOS  
- Linux  
- Remote environments (CI, Jenkins, etc.)

---

## Key Features  
- **Free and Open Source**  
- **Multi-browser, Multi-language, Multi-OS support**  
- **Easy setup and config** (compared to Selenium, Cypress)  
- **Automate:**  
  - Functional tests  
  - API tests  
  - Accessibility (via 3rd party plugins)  
- **Built-in reporters** (auto-generated/custom reports)  
- **CI/CD and Docker integration**  
- **Cross-browser and parallel testing (built-in)**  
- **Auto-wait mechanism:**  
  - Handles synchronization internally  
  - No need for manual wait statements  
- **Built-in assertions**  
- **Multi-tab & multi-window support**  
- **Frame & Shadow DOM support**  
- **Parameterization**  
- **Mobile device emulation**  
- **Fast execution (faster than Selenium, Cypress)**  
- **Code generation (Codegen), Inspector, Trace Viewer**  
- **Strong Community Support** (GitHub, StackOverflow, YouTube, Blogs)

---

## Playwright vs. Selenium vs. Cypress
| Feature            | Playwright                                 | Selenium                                 | Cypress                   |
|--------------------|--------------------------------------------|------------------------------------------|----------------------------|
| Browsers           | Chromium, WebKit, Firefox                  | Chrome, Firefox, Safari, etc.            | Chrome, Firefox, Edge      |
| Languages          | JavaScript, TypeScript, Java, Python, .NET | Java, Python, JS, C#                     | JavaScript, TypeScript     |
| OS Support         | Windows, macOS, Linux                      | Windows, macOS, Linux                    | Windows, macOS, Linux      |
| Headless Mode      | Supported (default)                        | Supported                                | Supported                 |
| Cross-browser      | Yes                                        | Yes (needs TestNG for parallel)          | Yes                       |
| Parallel Tests     | Built-in                                   | Needs TestNG                             | Built-in                  |
| Auto-Wait          | Built-in                                   | Manual (implicit/explicit)               | Built-in                  |
| Assertions         | Built-in                                   | With test frameworks                     | Built-in (Mocha/Chai)     |
| Multi-tab/window   | Supported                                  | Supported                                | Not supported             |
| API Testing        | Supported                                  | Needs plugins                            | Supported                 |
| Performance        | Fast                                       | Slower (protocol overhead)               | Fast                      |
| Debugging          | Built-in debugger, DevTools                | DevTools, Java debugging                 | Built-in debugger, DevTools|
| Community          | Growing (docs, forums, YouTube)            | Large, mature                            | Growing                   |

---

## Why Learn Playwright with JavaScript?
- Most companies use Playwright with JavaScript (Node.js base)
- JS is widely adopted; good to pick up if you already know Java/Python

---

## Reference Links  
- Official Site: [playwright.dev](https://playwright.dev)  
- Compare with Selenium and Cypress in terms of E2E capabilities

---

## Next Steps  
- Next video: **Installation, Setup, Writing your first test** in Playwright

---

*Tip: For deeper learning, check the official documentation and their community resources (GitHub, Stack Overflow, YouTube channel)*
