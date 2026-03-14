### Locate by test id

Testing by test ids is the most resilient way of testing as even if your text or role of the attribute changes, the test will still pass. QA's and developers should define explicit test ids and query them with [page.getByTestId()](https://playwright.dev/docs/api/class-page#page-get-by-test-id). However testing by test ids is not user facing. If the role or text value is important to you then consider using user facing locators such as [role](https://playwright.dev/docs/locators#locate-by-role) and [text locators](https://playwright.dev/docs/locators#locate-by-text).

For example, consider the following DOM structure.

```
<button data-testid="directions">Itinéraire</button>
```

You can locate the element by its test id:

```
await page.getByTestId('directions').click();
```

When to use testid locators

You can also use test ids when you choose to use the test id methodology or when you can't locate by [role](https://playwright.dev/docs/locators#locate-by-role) or [text](https://playwright.dev/docs/locators#locate-by-text).

#### Set a custom test id attribute

By default, [page.getByTestId()](https://playwright.dev/docs/api/class-page#page-get-by-test-id) will locate elements based on the `data-testid` attribute, but you can configure it in your test config or by calling [selectors.setTestIdAttribute()](https://playwright.dev/docs/api/class-selectors#selectors-set-test-id-attribute).

Set the test id to use a custom data attribute for your tests.

playwright.config.ts

```
import { defineConfig } from '@playwright/test';export default defineConfig({  use: {    testIdAttribute: 'data-pw'  }});
```

In your html you can now use `data-pw` as your test id instead of the default `data-testid`.

```
<button data-pw="directions">Itinéraire</button>
```

And then locate the element as you would normally do:

```
await page.getByTestId('directions').click();
```