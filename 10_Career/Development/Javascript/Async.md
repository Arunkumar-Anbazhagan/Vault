# JavaScript Async, Promises, async/await (Sync vs Async)

## Overview
- JavaScript runs your code synchronously on a single call stack, but coordinates async work (I/O, timers, events) through the event loop and queued callbacks/jobs. [web:103]
- Promises and async/await make async code easier to chain and safer to error-handle, while keeping apps responsive. [web:10][web:13]

## Key Concepts

### [[Synchronous vs Asynchronous]]
- **Synchronous (sync)**: Executes statements sequentially; each step must finish before the next begins (simple, predictable, but can block responsiveness). [web:15][web:23]
- **Asynchronous (async)**: Starts an operation and continues executing other code; completion is handled later via callbacks (including Promise handlers). [web:103][web:10]

### [[JavaScript Execution Model]] and [[Event Loop]]
- JavaScript execution depends on the JS engine plus a host environment (browser/Node) that can perform I/O and schedule callbacks when it completes. [web:103]
- Jobs/tasks are processed to completion; long-running jobs block user interactions like clicks/scroll. [web:103]

### [[Tasks vs Microtasks]]
- **Task queue**: Includes timers and events; tasks run one-by-one. [web:32]
- **Microtask queue**: Runs after the current stack clears and before returning to the event loop; Promises and MutationObserver callbacks use it. [web:32]
- Typical ordering: run a task → drain microtasks until empty → browser may render → next task. [web:32]
- Warning: microtasks can enqueue more microtasks and starve the loop if abused. [web:32]

### [[Promise]]
- A `Promise` represents eventual completion/failure and a resulting value. [web:11]
- Promise chaining: `.then()` returns a new promise, enabling flat chains instead of nested callbacks. [web:13]
- Error handling: `.catch()` can be placed at the end to handle failures from earlier steps in the chain. [web:13]
- Promise callbacks run via microtasks; `setTimeout` callbacks run via tasks. [web:10]

### [[async/await]]
- `async function` enables `await` inside; `await` suspends the async function until the awaited promise settles, then resumes with the value (or throws on rejection). [web:16][web:52]
- Even for already-fulfilled promises, `await` still pauses until a later tick/microtask; it does not block the main thread. [web:52]
- Concurrency semantics: `await` pauses only dependent code; it does not stop the entire program. [web:10]

## Step-by-step (how to learn it)

### Step 1 — Start with sync code
- Understand the call stack model: code runs top-to-bottom until the stack is empty. [web:103]

### Step 2 — See what “async” really means
- Async APIs return immediately and schedule completion as a callback/job later (e.g., fetch/network). [web:13][web:103]

### Step 3 — Use Promises to structure “later”
- Use `.then()` for success paths and `.catch()` for error paths, prefer flat chains. [web:13]
- Remember: `.then()` handlers won’t run synchronously; they’re queued as microtasks. [web:10]

### Step 4 — Switch to async/await for readability
- Replace long `.then()` chains with `await` inside an `async function`. [web:16][web:13]
- Use `try/catch` around awaited code to handle errors similarly to synchronous code. [web:16][web:13]

### Step 5 — Learn concurrency patterns
- Sequential awaits (slow, when not dependent): `await a(); await b();` forces series. [web:13]
- Concurrent start + join: `await Promise.all([a(), b()])` for independent work. [web:13][web:10]

## Applications (when/where to use)

### Browser
- Use async for network requests and any operation that would otherwise freeze UI responsiveness. [web:103][web:13]
- Avoid legacy blocking APIs like `alert()` or synchronous XHR because they block responsiveness. [web:103]

### Node.js
- Prefer async I/O in servers; synchronous filesystem APIs block the Node.js event loop and delay other requests. [web:65]
- Using `fs/promises` performs work off the event loop thread using the Node.js threadpool. [web:65]

## Pros and Cons

### Sync — Pros
- Straight-line execution is easy to reason about and debug. [web:15]

### Sync — Cons
- Blocking behavior can freeze apps; long tasks prevent handling user interactions/events. [web:103][web:15]
- In Node.js, sync filesystem APIs block the event loop and further JS execution. [web:65]

### Async — Pros
- Keeps programs responsive by not waiting on I/O; other work can proceed while awaiting results. [web:103][web:13]

### Async — Cons
- Harder control flow: ordering, races, and debugging complexity can increase. [web:15]
- Microtask abuse can starve the event loop if microtasks keep enqueuing more microtasks. [web:32]

## Backlinks
- [[JavaScript Execution Model]] ↔ [[Event Loop]] ↔ [[Tasks vs Microtasks]]
- [[Promise]] ↔ [[async/await]] (async/await is Promise-based syntax) [web:10][web:16]
- [[Synchronous vs Asynchronous]] ↔ [[Node.js fs Sync APIs]] [web:65]

## Tags
#javascript #async #promise #async-await #event-loop #microtask #task-queue #nodejs #browser #concurrency #learning #notes

## References (hyperlinked + properties)
- [JavaScript execution model — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model)  
  - Author: MDN contributors  
  - Source: MDN Web Docs  
  - Date: 2025-11-07 (last modified)  
  - Relevance: High (explains jobs, tasks vs microtasks, “never blocking”, legacy exceptions) [web:103]

- [Using promises — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)  
  - Author: MDN contributors  
  - Source: MDN Web Docs  
  - Date: 2025-07-15 (last modified)  
  - Relevance: High (promise chaining, microtask behavior, concurrency semantics, composition tools) [web:10]

- [Promise — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)  
  - Author: MDN contributors  
  - Source: MDN Web Docs  
  - Date: 2026-01-20 (publish/update)  
  - Relevance: Medium (core definition + concurrency helpers like all/any/allSettled) [web:11]

- [async function — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)  
  - Author: MDN contributors  
  - Source: MDN Web Docs  
  - Date: 2025-07-07 (last modified)  
  - Relevance: High (what async is, await behavior, relation to promise chains) [web:16]

- [await operator — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)  
  - Author: MDN contributors  
  - Source: MDN Web Docs  
  - Date: 2025-07-08 (last modified)  
  - Relevance: High (await pauses until next tick/microtask, doesn’t block main thread) [web:52]

- [Microtask guide (queueMicrotask, tasks vs microtasks) — MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide)  
  - Author: MDN contributors  
  - Source: MDN Web Docs  
  - Date: 2025-10-05 (last modified)  
  - Relevance: High (precise task vs microtask model + starvation warning) [web:32]

- [File system (fs) — Node.js docs](https://nodejs.org/api/fs.html)  
  - Author: Node.js contributors  
  - Source: nodejs.org  
  - Date: v25.8.2 docs page (accessed 2026-03-31)  
  - Relevance: High (explicitly states sync APIs block the event loop; explains fs/promises threadpool note) [web:65]

- [Tasks, microtasks, queues and schedules — Jake Archibald](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)  
  - Author: Jake Archibald  
  - Source: jakearchibald.com  
  - Date: 2015-08-16  
  - Relevance: Medium-High (clear conceptual model + examples; great for intuition) [web:31]

- [Synchronous vs Asynchronous in JavaScript — BrowserStack](https://www.browserstack.com/guide/synchronous-vs-asynchronous-in-javascript)  
  - Author: BrowserStack (site authorship)  
  - Source: browserstack.com  
  - Date: 2025-05-27  
  - Relevance: Medium (practical tradeoffs + beginner-friendly comparisons) [web:15]