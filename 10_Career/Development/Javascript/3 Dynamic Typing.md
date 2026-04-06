# JavaScript Fundamentals: Dynamic vs. Static Typing

## 1. Dynamic Typing (JavaScript)
* **Definition:** You do not need to specify a data type (integer, string, etc.) when declaring a variable.
* **How it works:** The data type is determined automatically based on the value assigned while the program is running.
* **Flexibility:** A single variable can hold a string, then be reassigned to a number later in the same program.
    * *Example:*
      ```javascript
      let data = "Hello"; // Currently a String
      data = 42;          // Now a Number (Allowed!)
      ```
* **Pros:** Forgiving, easy for quick scripting, and highly flexible.
* **Cons:** Can introduce bugs that are harder to catch as programs grow, leading to unexpected errors during execution.

## 2. Static Typing (C#, C++, Java)
* **Definition:** You must explicitly declare the data type of a variable when it is created.
* **How it works:** Once a type is set, it is fixed. The variable can only hold values of that specific type.
* **Strictness:** If you try to assign a different type to a static variable, the program will throw an error before it even runs.
    * *Example (C#):*
      ```csharp
      int data = 42;
      data = "Hello"; // Error: Cannot implicitly convert string to int
      ```
* **Pros:** Enforces stricter rules that catch errors early (compile-time).
* **Cons:** Requires more upfront setup and offers zero flexibility in changing types.

## 3. Key Comparison

| Feature              | Dynamic Typing (JS)        | Static Typing (C#/Java)         |
| :------------------- | :------------------------- | :------------------------------ |
| **Type Declaration** | Not required               | Mandatory                       |
| **Changeable Type**  | Yes                        | No                              |
| **Error Detection**  | During execution (Runtime) | Before execution (Compile-time) |
| **Main Benefit**     | Flexibility & Speed        | Safety & Predictability         |

---
*Reference: [freeCodeCamp - What Is Dynamic Typing in JavaScript?](https://www.freecodecamp.org/learn/javascript-v9/lecture-working-with-data-types/what-is-dynamic-typing-in-javascript-and-how-does-it-differ-from-statically-typed-languages)*