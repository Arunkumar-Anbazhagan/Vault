## 1. The Sequential Rule (The "Waterfall")

In 90% of UI testing, you must use `await` on every single line. This ensures that **Step B** only starts after **Step A** is 100% finished.

- **Logic:** Use this when the next action **depends** on the previous one.
    
- **Analogy:** Climbing a ladder. You don't put your left foot up until your right foot is secure.
    

TypeScript

```
// ✅ CORRECT: Sequential Flow
await page.goto('https://app.com'); // 1. Wait for page load
await page.fill('#user', 'admin');   // 2. Wait for typing to finish
await page.click('#login');         // 3. Wait for the click to process
```

---

## 2. The Parallel Rule (The "Batch")

You use `await Promise.all([...])` to start multiple tasks at the **exact same millisecond**.

- **Logic:** Use this when tasks are **independent** (they don't care about each other) OR when you need to "listen" for a result _while_ performing an action.
    
- **The Trap:** If you put a "Login" click and a "Username" fill in the same `Promise.all`, they will crash because they happen simultaneously.
    

TypeScript

```
// ✅ CORRECT: Parallel Flow (Speed Optimization)
await Promise.all([
  page.fill('#first-name', 'John'),
  page.fill('#last-name', 'Doe'),
  page.fill('#email', 'john@test.com')
]); 
// All three start typing at once. Total time = time of the longest field.
```

---

## 3. Comparison Table: When to use what?

| **Scenario**           | **Use await per line**          | **Use Promise.all**     |
| ---------------------- | ------------------------------- | ----------------------- |
| **Navigation**         | Yes (Must load page first)      | No                      |
| **Dependency**         | Yes (Fill field → Click button) | No                      |
| **Independent Fields** | No (Slower)                     | **Yes (Faster)**        |
| **Trigger & Effect**   | No (Might miss the effect)      | **Yes (Captures both)** |

---

## 4. Why we don't wrap the "Entire Function" in `Promise.all`

If you wrap your whole test in one `Promise.all`, JavaScript ignores the order of your lines. It fires them all like a starting gun.

> **Result:** The test will try to click the "Submit" button before the website has even finished loading its CSS. **Always keep your "Flow" sequential.**

```ts
// ❌ THIS WILL FAIL
await Promise.all([
  page.goto('https://example.com'),    // Task 1 starts
  page.fill('#user', 'admin'),        // Task 2 starts (fails because page isn't loaded)
  page.click('#login')                // Task 3 starts (fails because user isn't filled)
]);
```

>Why it fails:** JavaScript doesn't look at the order inside the `[]` array and say "Do this then that." It fires them all like a starting gun at a race. The `page.fill` will try to find the `#user` box while the browser is still looking up the DNS for `example.com`.

	
## 5. Master Reference Checklist

### 📺 Video Lessons

- **[Async/Await vs Promise.all (08:45)](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3DH7m9_E2B2pY):** This video shows a "Speed Test" comparing the two methods.
    
- **[Playwright: Waiting for Navigations (05:30)](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3D689N1pY9p9E):** Explains why `Promise.all` is the "Gold Standard" for clicking links that trigger page changes.
    

### 📖 Technical Articles

- **[MDN: Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all):** The technical deep dive into how the array handles errors (if one fails, they all fail).
    
- **[Playwright: Actionability Guide](https://playwright.dev/docs/actionability):** Understand what Playwright is doing during that "await" pause.
    

---

### Final Summary for your Brain 🧠

1. **`await`** = Wait for the result before moving to the next line. (Safety First).
    
2. **`Promise.all`** = Start everything in the list right now. (Speed/Synchronization).
    
3. **The Rule of Thumb:** When in doubt, `await` every line. Only use `Promise.all` when you are sure the actions can happen at the same time without breaking the logic.