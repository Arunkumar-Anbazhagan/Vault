# JavaScript Arrow Functions

## Overview
- Arrow functions are a concise way to write functions in JavaScript (introduced in ES6)
- They are always function expressions
- They do NOT have their own `this`, `arguments`, or `prototype`

---

## Basic Syntax

### Standard Form
    (param1, param2) => {
      // function body
    }

Equivalent:
    function(param1, param2) {
      // function body
    }

---

## Syntax Variations

### 1. No Parameters
    () => {
      console.log("Hello");
    }

---

### 2. Single Parameter (parentheses optional)
    x => x * 2

---

### 3. Multiple Parameters
    (x, y) => x + y

---

### 4. Implicit Return
    x => x * 2

---

### 5. Explicit Return
    x => {
      return x * 2;
    }

---

### 6. Returning an Object
    () => ({ name: "Eren" })

Incorrect:
    () => { name: "Eren" } // ❌

---

### 7. Multi-line Function Body
    (x, y) => {
      const sum = x + y;
      return sum;
    }

---

### 8. Default Parameters
    (x = 10, y = 5) => x + y

---

### 9. Rest Parameters
    (...nums) => nums.reduce((a, b) => a + b)

---

### 10. Async Arrow Function
    async () => {
      const res = await fetch(url);
      return res.json();
    }

---

### 11. Immediately Invoked Arrow Function (IIFE)
    (() => {
      console.log("Runs immediately");
    })();

---

### 12. Returning Another Function (Closure)
    x => y => x + y

Usage:
    const add = x => y => x + y;
    add(5)(3); // 8

---

### 13. Arrow Functions in Array Methods

    [1, 2, 3].map(x => x * 2);

    [1, 2, 3].filter(x => x > 1);

    [1, 2, 3].reduce((a, b) => a + b);

---

## Key Differences from Regular Functions

### No `this` Binding (Lexical `this`)
    const obj = {
      value: 10,
      normal: function() {
        console.log(this.value); // 10
      },
      arrow: () => {
        console.log(this.value); // undefined
      }
    };

---

### Cannot Be Used as Constructor
    const Person = () => {};
    new Person(); // ❌ Error

---

### No `arguments` Object
    const fn = () => {
      console.log(arguments); // ❌ not available
    }

Use:
    (...args) => args

---

## When to Use
- Short functions
- Callbacks
- Array methods (map, filter, reduce)
- Async code (with async/await)

---

## When NOT to Use
- Object methods (need `this`)
- Constructors
- Functions requiring dynamic context

---

## Related Topics
- [[JavaScript Functions]]
- [[Closures]]
- [[Async Await]]
- [[Event Loop]]

---

## Tags
#javascript #arrowfunctions #es6 #learning #notes

---

## Properties
- Author: MDN, JavaScript.info, FreeCodeCamp
- Date: 2026-03-31
- Relevance: High