### Summary

The guide covers the fundamental building blocks of JavaScript:

- **Data Types:** Explains the 8 primary types, including primitives (Number, String, Boolean, Undefined, Null, BigInt, Symbol) and the Object type    
- **Variables:** Details the difference between `let` (reassignable) and `const` (constant), along with naming best practices like `camelCase`.    
- **Strings:** Discusses immutability and the three ways to join text (Concatenation, Compound Assignment, and the `.concat()` method).    
- **Code Structure:** Reinforces the use of `console.log()` for debugging, semicolons for statement termination, and the importance of comments for human readability.    
- **Engine Behavior:** Explains that JavaScript is **dynamically typed** and notes the specific "object" quirk when checking the type of `null`.
# JavaScript Review: Variables & Data Types

## 1. Data Types Overview
JavaScript categorizes data into several types to determine how the program handles it:
* **Number & Floating Point:** Represents integers (7) and decimals (3.14).
* **String:** Text wrapped in quotes ("Hello").
* **Boolean:** Logical values: `true` or `false`.
* **Undefined:** A variable declared but not yet given a value.
* **Null:** An intentional "empty" value.
* **Object:** A collection of key-value pairs (e.g., `{name: "Fluffy", age: 3}`).
* **BigInt:** For numbers larger than the standard Number limit (ends in `n`).
* **Symbol:** Unique identifiers for object properties.

## 2. Variables (`let` vs. `const`)
* **let:** Allows the variable to be reassigned later.
* **const:** Creates a constant that cannot be changed once set.
* **Naming Rules:** * Use `camelCase` (e.g., `cityName`).
    * Must start with a letter, `_`, or `$`.
    * Case-sensitive (`age` and `Age` are different).
    * No reserved keywords or spaces.

## 3. String Operations & Immutability
* **Immutability:** You cannot change characters within a string; you must replace the whole string.
* **Concatenation Methods:**
    1. `+` Operator: `"Hello " + "World"`
    2. `+=` Operator: `message += "!"` (Appends to existing variable)
    3. `.concat()` Method: `str1.concat(" ", str2)`

## 4. Syntax & Logic
* **console.log():** The standard tool for displaying output and debugging.
* **Semicolons (;):** Mark the end of an instruction to prevent execution errors.
* **Comments:** * `//` for single lines.
    * `/* ... */` for multiple lines.
* **Dynamic Typing:** Variables change types automatically based on the assigned value (e.g., a variable holding a number can be reassigned to a string).

## 5. The typeof Quirk
* The `typeof` operator returns the type as a string.
* **Warning:** `typeof null` returns `"object"` due to a legacy bug in the language.

---
*Reference: [JavaScript Variables and Data Types Review](https://www.freecodecamp.org/learn/javascript-v9/#review-javascript-variables-and-data-types)*

|**#**|**Question**|**Correct Answer**|**Status in Screenshot**|
|---|---|---|---|
|**1**|Best description of JavaScript?|**A programming language used for web development.**|Incorrectly marked as "Server-side"|
|**2**|NOT a JavaScript data type?|**Double**|Correct ✅|
|**3**|NOT a valid variable declaration?|**public Int x;**|Correct ✅|
|**4**|Common naming convention?|**Camel case.**|Correct ✅|
|**5**|Difference between `let` and `const`?|**const cannot be re-assigned or re-declared. let can be re-assigned, but not re-declared.**|Correct ✅|
|**6**|Why are strings immutable?|**Once a string is created, you cannot change its characters directly.**|Correct ✅|
|**7**|Print "Hello, world!" to console?|**console.log("Hello, world!");**|Correct ✅|
|**8**|What does `hello += " world"` do?|**Combines current value with " world", reassigns it, and prints it.**|Correct ✅|
|**9**|Character to mark end of statement?|**; (Semicolon)**|Correct ✅|
|**10**|Valid single line comment?|**// This is a single line comment**|Correct ✅|
|**11**|What is Dynamic typing?|**JavaScript infers the type based on the value assigned to the variable.**|Correct ✅|
|**12**|Prints the type of variable `x`?|**console.log(typeof x);**|Correct ✅|
|**13**|Output of `typeof null`?|**"object"**|Correct ✅|
|**14**|Valid multi-line comment?|**/* Comment */**|Correct ✅|
|**15**|Declares a variable that cannot change?|**const x = 0;**|Correct ✅|
|**16**|Valid variable name?|**$number**|Correct ✅|
|**17**|NOT a valid concatenation method?|**console.log(string1 string2);**|Correct ✅|
|**18**|Correct camel case usage?|**aLongVariableName**|Correct ✅|
|**19**|Why use semicolons explicitly?|**To improve code readability and reliability.**|Correct ✅|
|**20**|NOT a JavaScript data type?|**Float**|Incorrectly marked as "Symbol"|
