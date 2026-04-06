# Notes on Hoisting in JavaScript

## Overview
Hoisting is JavaScript’s behavior of making declarations available before their apparent place in the code, because the engine processes declarations before execution [web:2][web:11]. In practice, this means function declarations can often be called early, while variable behavior depends on whether you use `var`, `let`, or `const` [web:2][web:3].

## Core Idea
- Hoisting applies to function, variable, class, and import declarations [web:2].
- Only declarations are hoisted, not assignments or initializations [web:3][web:11].
- JavaScript appears to “move” declarations to the top of their scope during compilation or before execution [web:2][web:7].

## `var` Hoisting
- `var` declarations are hoisted to the top of their function or global scope [web:3][web:10].
- The declaration is hoisted, but the assignment stays in place, so reading the variable early returns `undefined` instead of a value [web:3][web:11].
- Example: `console.log(x); var x = 5;` logs `undefined`, not `5` [web:3][web:7].

## `let` and `const`
- `let` and `const` are also hoisted, but they remain uninitialized until their declaration is reached [web:2][web:4].
- Accessing them before declaration throws a `ReferenceError` because they are in the Temporal Dead Zone (TDZ) [web:4][web:12].
- This is why `let` and `const` behave more strictly than `var` [web:4][web:12].

## Function Declarations
- Function declarations are hoisted with their full definition, so they can be called before they appear in the source code [web:5][web:8].
- Example: `sayHello(); function sayHello() {}` works because the whole function is available during the creation phase [web:5][web:9].
- This makes function declarations different from function expressions, which do not behave the same way as hoisted declarations [web:3][web:7].

## Common Rules
- You can safely call function declarations before they are written [web:5][web:8].
- Do not rely on early access to `var` unless you want `undefined` behavior [web:3][web:10].
- Avoid accessing `let` or `const` before declaration to prevent TDZ errors [web:4][web:12].

## Quick Example
```javascript
console.log(a); // undefined
var a = 10;

sayHi(); // "Hi"
function sayHi() {
  console.log("Hi");
}

console.log(b); // ReferenceError
let b = 20;
```
This example shows all three major hoisting outcomes: `var` gives `undefined`, function declarations work early, and `let` throws a `ReferenceError` [web:3][web:5][web:12].

## References
- [Hoisting - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [JavaScript Hoisting - W3Schools](https://www.w3schools.com/js/js_hoisting.asp)
- [JavaScript Hoisting](https://www.geeksforgeeks.org/javascript/javascript-hoisting/)
- [What is Hoisting in JavaScript](https://www.freecodecamp.org/news/what-is-hoisting-in-javascript-3/)
- [Understanding Hoisting in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript)
- [Variable and Function Hoisting With Examples | CodeHelp - YouTube](https://www.youtube.com/watch?v=-Hew3H_Xfmw)
- [Hoisting | Javascript Basics | #31 - YouTube](https://www.youtube.com/watch?v=EE-LlC8LxeE)