#### To Run all Tests on all Browsers 

```
npx playwright test
```

Run tests using the headed mode:

```
npx playwright test --headed
```

**Run Specific Tests:**

```
npm playwright test testname
```

**Running specific Browsers:**

```
npx playwright test --chromium/firefox/webkit
```

using the codegen to inspect elements-- will launch blank page `about:blank`

```
npx playwright codegen
```

Specified browser with url

```
npx playwright codegen --browser=firefox https://playwright.dev
```