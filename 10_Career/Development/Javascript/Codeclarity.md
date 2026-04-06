# The Role of Semicolons

## 1. What is a Semicolon?
* **Symbol:** `;`
* **Analogy:** Just as a **period (.)** marks the end of a sentence in English, a semicolon marks the end of an **executable statement** in JavaScript.
* **Purpose:** It tells the JavaScript engine exactly where one command ends and the next one begins.

## 2. Why Use Semicolons?
* **Delineation:** Helps the engine distinguish between separate commands, especially when multiple statements are on different lines.
* **Clarity:** Improves the readability and maintainability of your code for other developers.
* **Error Prevention:** Helps avoid "ambiguity" (confusion) in how the code is parsed and executed.

## 3. Automatic Semicolon Insertion (ASI)
* **Definition:** JavaScript has a built-in feature that tries to automatically add semicolons where it thinks they are missing.
* **The Risk:** ASI is not perfect. Relying on it can lead to **unexpected behavior** or subtle bugs that are hard to track down.
* **Best Practice:** Explicitly writing your semicolons is highly recommended to ensure your code runs exactly as you intended.

## 4. Industry Standard
* **Universal Concept:** Semicolons are a fundamental part of many programming languages, including **C**, **C++**, and **Java**.
* **Compilation:** They help compilers (tools that translate high-level code to machine code) parse instructions correctly to create executable files.

## 5. Examples
* **Correct Usage:**
```javascript
  let a = 1; // Statement ends here
  let b = 2; // Another statement starts here
```

# Comments & Code Clarity

## 1. What are Comments?
* **Definition:** Lines or blocks of text in your code that are completely ignored by the JavaScript engine during execution.
* **Purpose:** They provide context, explanations, or notes for humans (yourself or other developers) reading the code.

## 2. Types of Comments

### Single-Line Comments
* **Syntax:** Created using two forward slashes `//`.
* **Usage:** Best for brief notes or clarifications on a specific line.
* **Example:**
  ```javascript
  // This is a single-line comment
  let score = 0; // Initialize player score
  ```
### Multi-Line Comments
- **Syntax:** Starts with `/*` and ends with `*/`.
- **Usage:** Best for longer descriptions, detailed documentation, or explaining complex logic across multiple lines.    
- **Example:**
```js
/* Since there can be more than one way to complete a certification,
  we need a field to track which one this belongs to.
*/
```

## Why Use Comments?
- **Context:** Helps other developers (or your future self) understand _why_ a specific piece of code exists.    
- **Teamwork:** In professional settings, comments prevent unnecessary changes or deletions that might cause bugs.    
- **Documentation:** Provides a roadmap for how different parts of a project interact.
## 4. Best Practices & Pitfalls
### Avoid "Over-Commenting"
- **Rule:** Do not comment on code that is straightforward and self-explanatory.    
- **Bad Example:** `const price = 10; // Assigning 10 to the price variable` (This clutters the code).  
### Refactor Instead of Commenting
- **Rule:** Don't use comments to "explain away" messy or poorly written code.    
- **Solution:** If the logic is confusing, it is better to **refactor** (rewrite) the code to be clearer rather than adding a long comment.
_Reference: [freeCodeCamp - What Are Comments in JavaScript?](https://www.freecodecamp.org/learn/javascript-v9/lecture-understanding-code-clarity/what-are-comments-in-javascript)_