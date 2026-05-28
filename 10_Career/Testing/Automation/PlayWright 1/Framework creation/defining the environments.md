1. create different environment files and provide variables for it
	1. file name should be `.env.znxt`,`env.z`,..
	2. then modify the file as mentioned below `playwright.config.ts`
```ts
import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// 1. Read the environment flag from the terminal. If you type nothing, it defaults to 'z'
const environment = process.env.ENV || 'z';

// 2. Map the path dynamically to match your exact files (e.g., .env.z, .env.znxt, .env.beta)
const envFilePath = path.resolve(__dirname, `.env.${environment}`);

// 3. Load the variables from that file into system memory
dotenv.config({ path: envFilePath });

console.log(`🚀 RUNNING AUTOMATION IN ENVIRONMENT: [ ${environment.toUpperCase()} ]`);

export default defineConfig({
  testDir: './tests',         // Where your test files live
  fullyParallel: true,        // Runs tests concurrently to save time
  reporter: 'html',           // Generates a clean web report after tests finish
  
  use: {
    // 4. Playwright pulls the BASE_URL straight out of the loaded .env file
    baseURL: process.env.BASE_URL,
    
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      // If your files have an API token/key, it maps here automatically:
      // 'Authorization': `Bearer ${process.env.API_TOKEN}`, 
    },
  },
});
```
2. run the following command to check whether the test is running or not
	```powershell
	$env:ENV="z"; npx playwright test
	```
	