---
tag:
  - faker
  - js
  - randomData
---
1. install the faker library using the command 
```powershell
	   npm install --save-dev @faker-js/fake
```
2. go to the documentation and learn how to use the library - [person](https://fakerjs.dev/api/person.html)
3. example program
```ts
import { test, expect } from '@playwright/test';
// 1. Import the Faker library at the top of the file
import { faker } from '@faker-js/faker';

test('Verify environment URL and fetch data', async ({ request }) => {
  // (Keep your existing GET test here...)
});

// 2. Add your new dynamic POST test here
test('Should create a new user profile with dynamic test data', async ({ request }) => {
  
  // 3. Generate random data at execution time using Faker
  const randomPayload = {
    title: faker.commerce.productName(), // Generates a random product title (e.g., "Ergonomic Chair")
    body: faker.lorem.paragraph(),       // Generates a random paragraph of descriptive text
    userId: faker.number.int({ min: 1, max: 100 }) // Generates a random number between 1 and 100
  };

  console.log('📝 Generated Dynamic Payload:', randomPayload);

  // 4. Send the POST request, passing the payload inside the 'data' option
  const response = await request.post('/posts', {
    data: randomPayload
  });

  // 5. Verify the server accepted the creation (Status 201 Created)
  expect(response.status()).toBe(201);

  // 6. Parse the response to ensure the server returned our dynamic data back to us
  const responseBody = await response.json();
  console.log('✅ Server Response:', responseBody);

  // Assert that the title we sent matches the title the server processed
  expect(responseBody.title).toBe(randomPayload.title);
});
```