# 🏛️ Playwright Architecture in Detail

## Source

* **Video Title:** Playwright #3 Playwright Architecture in Detail
* **Channel:** Testers Talk
* **URL:** http://www.youtube.com/watch?v=f4y1pJdkdNA

---

## 1. Architectural Components

Playwright's architecture consists of three main components that communicate to execute tests [00:00:16]:

* **Client Component:** This is where testers write the Playwright automation code using various languages (JavaScript, Java, Python, C#, etc.) [00:00:24].
* **Playwright Server:** An intermediary component responsible for communicating between the client code and the browser engines [00:01:46].
* **Browser Engines:** The actual browser binaries where tests are executed (Chromium, Firefox, WebKit, and others) [00:00:41].

---

## 2. Communication Protocols

Playwright utilizes two distinct protocols to manage communication between these components [00:00:49]:

| Connection                             | Protocol                                      | Purpose                                                                                                                                                       |
| :------------------------------------- | :-------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Client ↔ Playwright Server**         | **WebSocket Protocol** [00:01:08]             | Used for real-time, bi-directional communication over a single, persistent connection [00:03:02].                                                             |
| **Playwright Server ↔ Browser**        | **CDP (Chrome DevTools Protocol)** [00:01:00] | The standard protocol used to interact with Chromium/Chrome browsers [00:02:25].                                                                              |
| **Playwright Server ↔ Other Browsers** | **W3C CDP-like Protocol** [00:02:38]          | Playwright implemented a similar protocol for browsers like Firefox and WebKit to ensure consistent, deep interaction features across all engines [00:02:46]. |

---

## 3. Execution Workflow and Reliability

The communication model is designed for speed and reliability:

1.  **Request Conversion:** When a test is triggered, the Client converts the automation code into **JSON format** [00:04:18].
2.  **Single Connection:** The Client sends this JSON request to the Playwright Server over a **single, persistent WebSocket connection** [00:04:25].
3.  **Efficiency:** All test requests (even 10+ tests) happen over this same single connection, which is **never closed** until the test session ends [00:05:08]. This dedicated, non-terminated connection is the primary reason why Playwright tests have **very low flakiness** compared to older automation tools [00:05:29].