# Topic: Postman Collections and Variables

## Key Concepts
* **Collections:** Group related API requests, often for a single project or API suite. They are portable and can be run together.
* **Variables:** Reusable placeholders for data. Essential for maintainability and environment switching.

## Variable Scopes and Usage
| Scope | Lifetime/Availability | Use Case | Example Syntax |
| :--- | :--- | :--- | :--- |
| **Global** | Across the entire workspace. | General parameters, tokens needed everywhere. | `{{global_token}}` |
| **Collection** | Within requests in the current collection. | Base URL for a specific API. | `{{base_url}}` |
| **Environment** | Tied to a specific environment (Dev, Test, Prod). | Switching API keys or URLs based on where you are testing. | `{{api_key}}` |
* **Initial vs. Current Value:** **Initial Value** is synced/shared when exporting the collection. **Current Value** is local to your machine (use this for sensitive secrets like tokens that shouldn't be shared).

## Example: Base URL Variable Setup
1.  Click the 'eye' icon next to the Environment selector, or go to the Collection settings.
2.  Define the variable `base_url`.
3.  **Value:** `https://simple-books-api.glitch.me` (Crucially, without the trailing slash).

## Example: Request using the Variable
* **Request URL:** `{{base_url}}/status`
* Postman resolves this to: `https://simple-books-api.glitch.me/status`