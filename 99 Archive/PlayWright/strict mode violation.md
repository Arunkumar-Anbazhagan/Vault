```ts
import { test, expect } from '@playwright/test'
test('IMDB', async ({ page }) => {
    // Arrange
    await page.goto('https://www.imdb.com/');

    //logging in
    const signInSpan = page.locator('span.ipc-btn__text', { hasText: 'Sign in' });
    await signInSpan.click();

});
```

result:
```bash
 npx playwright test imdb.spec.ts --headed

Running 1 test using 1 worker

  ✘  1 imdb.spec.ts:2:5 › IMDB (3.6s)


  1) imdb.spec.ts:2:5 › IMDB ───────────────────────────────────────────────────────────────────────

    Error: locator.click: Error: strict mode violation: locator('span.ipc-btn__text').filter({ hasText: 'Sign in' }) resolved to 4 elements:    
        1) <span class="ipc-btn__text">Sign in</span> aka getByRole('link', { name: 'Sign in' }).first()
        2) <span class="ipc-btn__text">Sign in</span> aka getByTestId('coachmark-button').getByRole('link', { name: 'Sign in' })
        3) <span class="ipc-btn__text">Sign in for more access</span> aka getByRole('link', { name: 'Sign in for more access' })
        4) <span class="ipc-btn__text">Sign in for more access</span> aka getByText('Sign in for more access').nth(1)

    Call log:
      - waiting for locator('span.ipc-btn__text').filter({ hasText: 'Sign in' })


       6 |     //logging in
       7 |     const signInSpan = page.locator('span.ipc-btn__text', { hasText: 'Sign in' });
    >  8 |     await signInSpan.click();
         |                      ^
       9 |
      10 | });
        at E:\Playwright with TS\tests\imdb.spec.ts:8:22

    Error Context: ..\test-results\imdb-IMDB\error-context.md

  1 failed
    imdb.spec.ts:2:5 › IMDB ────────────────────────────────────────────────────────────────────────
PS E:\Playwright with TS\tests> 
```