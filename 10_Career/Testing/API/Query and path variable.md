# Topic: Differentiating Request Parameters

## Key Concepts
* **Request Parameters:** Data sent to the server to modify the request. There are two main types:

## 1. Query Parameters (Optional Data)
* **Purpose:** Filtering, sorting, limiting the size of the result set.
* **Location:** Appended to the URL after a question mark (`?`) as `key=value` pairs separated by `&`.
* **Postman:** Entered in the **Params** tab (Postman automatically formats the URL).

## Example: Filtering Books
* **Endpoint:** GET /books
* **Parameters:** `type=fiction` and `limit=2`
* **Final URL:** `{{base_url}}/books?type=fiction&limit=2`
* **Gotcha:** Query parameter names and values are **case-sensitive** (`type` != `Type`).

## 2. Path Variables (Mandatory Resource Identifier)
* **Purpose:** Uniquely identifying a specific resource on which the action will be performed.
* **Location:** Part of the URL path itself.
* **Postman:** Entered directly in the URL bar.

## Example: Getting a Specific Book
* **Endpoint Pattern:** GET /books/:bookId
* **Request URL:** `{{base_url}}/books/1`
* **Response:** Detailed information for Book ID 1.
* **Gotcha:** Requesting a non-existent ID (e.g., `/books/100`) often results in a **404 Not Found** error.
