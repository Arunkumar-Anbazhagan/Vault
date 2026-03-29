# Postman Beginner's Course – API Testing: Detailed Notes and Examples

**YouTube:** [Postman Beginner's Course – API Testing](https://www.youtube.com/watch?v=VywxIQ2ZXw4)
**Instructor:** Valentin Despa
**API Base URL (Simple Books API):** `https://simple-books-api.glitch.me`
**Total Duration:** ~2h 09m

---

## Unit 1 – Introduction to Postman (Manual Testing)

### Lesson 1 – Welcome `00:00:00`
* **Course Scope:** Learn what Postman is, how to interact with APIs, write API tests, and automate the testing process.
* **Prerequisites:** Assignments and independent practice are key to mastering the content.

### Lesson 2 – What is Postman `00:01:12`
* **Key Concept:** An API (Application Programming Interface) is like a standardized electrical outlet (an interface/contract) that a server offers.
* **Postman's Role:** A tool used to "plug into" that API interface over the internet (HTTP) to send and receive data, making communication easier.

### Lesson 3 – How to install Postman `00:03:06`
* **Options:** Native desktop app or the web application (recommended for the course).
* **Deprecated:** Do **not** use the old Google Chrome extension.
* **Tip:** Postman is actively developed; slight UI changes may occur, but core principles remain the same.

### Lesson 4 – Your first request with Postman `00:04:45`
* **Key Concept:** Always start by consulting the **API documentation** to understand how to interact with the API.
* **API Endpoint (Status Check):** `GET /status`
* **Action:** Paste the full URL (`https://simple-books-api.glitch.me/status`), select the **GET** method, and click **Send**.
* **Example Request/Response:**
    * **Method:** `GET`
    * **URL:** `{{base_url}}/status`
    * **Status:** `200 OK`
    * **Body:** `{"status": "OK"}`

### Lesson 5 – HTTP `00:07:07`
* **Key Concepts:**
    * **HTTP/HTTPS:** HyperText Transfer Protocol (Secure).
    * **Request:** Message from client (Postman) to server (API).
    * **Response:** Message back from server to client.
* **Request Components:** URL, HTTP Method (GET, POST, etc.), Headers (meta-info like `Content-Type`), Body (data being sent).
* **Response Components:** Status Code, Headers (e.g., indicates JSON body), Body (the data).
* **Status Code Classes (The Basics):**
    * `2xx`: Success (e.g., **200 OK**, **201 Created**, **204 No Content**).
    * `4xx`: Client Error (e.g., **400 Bad Request**, **401 Unauthorized**, **404 Not Found**).
    * `5xx`: Server Error.

### Lesson 6 – Postman collections and variables `00:11:10`
* **Postman Collections:** Used to organize and group related requests (usually for the same API) for better workflow.
* **Variables:** Used to store reusable data (e.g., the Base URL).
    * **Syntax:** `{{variable_name}}`
    * **Scope:** **Collection** (shared within a collection), **Global** (shared across the entire workspace).
* **Example (Base URL Variable):**
    * **Key:** `base_url`
    * **Value:** `https://simple-books-api.glitch.me` (Do not include a trailing slash).
* **Gotcha (Values):** **Initial Value** is shared when exporting/syncing. **Current Value** is private to your Postman instance (use for secrets like tokens).

### Lesson 7 – Query parameters `00:15:55`
* **Endpoint:** `GET /books` (Returns a list of books)
* **Key Concept:** **Query parameters** are optional, non-essential data used for **filtering** or **limiting** results. They appear in the URL after a question mark (`?`) as `key=value` pairs, separated by an ampersand (`&`).
* **Example (Filtering):**
    * **URL:** `{{base_url}}/books?type=fiction`
    * **Postman:** Enter `type` and `fiction` in the **Query Params** table.
* **Gotcha (Case Sensitivity):** Query parameter names and values must **exactly match** the API documentation (e.g., `type` is not the same as `Type`).

### Lesson 9 – Path variables `00:25:21`
* **Endpoint:** `GET /books/:bookId`
* **Key Concept:** **Path variables** (or parameters) are used to identify a **specific resource** within the path of the URL (e.g., `/books/1`). They are essential for the API to locate the resource.
* **Example Request:**
    * **URL:** `{{base_url}}/books/1`
    * **Response:** Detailed information for book with ID 1.
* **Gotcha (Not Found):** Requesting a non-existent path variable (e.g., `/books/100`) results in **404 Not Found**.

### Lesson 10 – POST request / API Authentication `00:30:07`
* **POST Method:** Used to **create** a new resource (e.g., placing an order). Requires a request body.
* **Endpoint (Orders):** `POST /orders`
    * **Initial Failure:** Returns **401 Unauthorized** (Missing Authorization header).
* **API Authentication (Bearer Token):**
    1.  **Register Client:** Get an access token by sending a POST request to the registration endpoint.
        * **Endpoint:** `POST /api-clients`
        * **Body (JSON):** `{"clientName": "...", "clientEmail": "..."}`
        * **Success:** `201 Created` with an `accessToken`.
    2.  **Set Token:** Save the `accessToken` as a **Global Variable** (or Collection Variable). Use the **Current Value** field to keep it private.
    3.  **Use Token in Request:** Go to the **Authorization** tab of the `/orders` request. Select **Type: Bearer Token** and set the Token field to `{{accessToken}}`.
    * **Technical Detail:** Postman automatically generates the required header: `Authorization: Bearer <token>`.

### Lesson 11 – JSON format `00:41:21`
* **Key Concept:** JSON is the common format for request and response bodies.
* **Structure:** Key-value pairs.
    * Keys must be **double-quoted strings**.
    * Values can be **double-quoted strings**, **numbers** (no quotes), or **booleans** (no quotes).
* **Example (Order Request Body):**
    ```json
    {
      "bookId": 1,
      "customerName": "John" 
    }
    ```
* **Gotcha (Invalid JSON):** Forgetting a comma, using single quotes, or not quoting string values will result in an error like **400 Bad Request** or a parsing error.

### Lesson 13 – Random test data `00:47:32`
* **Key Concept:** Use **dynamic variables** to generate unique data (like names or emails) on the fly, which helps avoid data collisions and repeat testing with the same data.
* **Syntax (Random Full Name):** `{{$randomFullName}}`
* **Example:**
    ```json
    {
      "bookId": 1,
      "customerName": "{{$randomFullName}}"
    }
    ```
* **Debugging:** Use the **Postman Console** (at the bottom) to view the actual request body that was sent, confirming the random value was generated successfully.

### Lesson 15 – Viewing existing orders `00:52:16`
* **Endpoints (Viewing Orders):**
    * **All Orders:** `GET /orders` (Requires Authorization)
    * **Single Order:** `GET /orders/:orderId` (Requires Authorization)

### Lesson 17 – PATCH request `00:55:56`
* **Key Concept:** **PATCH** is an HTTP method used to **update a part** of an existing resource.
* **Endpoint:** `PATCH /orders/:orderId`
* **Request Body:** Only include the field(s) you wish to update.
    ```json
    {
      "customerName": "John Anderson"
    }
    ```
* **Success Response:** `Status: 204 No Content` (The update was successful, but no response body is returned).
* **Verification:** Use a `GET /orders/:orderId` request to check the updated resource.

### Lesson 18 – DELETE request `00:59:03`
* **Key Concept:** **DELETE** is an HTTP method used to remove a resource.
* **Endpoint:** `DELETE /orders/:orderId`
* **Request:** No body is required.
* **Success Response:** `Status: 204 No Content`.
* **Verification:** A subsequent `GET /orders/:orderId` request should now return **404 Not Found**.

---

## Unit 2 – Test automation with Postman

### Lesson 19 – Introduction to test automation `01:01:52`
* **Goal:** Replace manual inspection of responses with automated tests that verify expected API behavior.
* **Automation Focus:** Postman should execute the entire workflow, and you should only step in if a test fails (regression).

### Lesson 20 – Your first API tests `01:02:52`
* **Test Location:** The **Tests** tab of a request (code runs *after* the response is received).
* **Test Syntax:** Postman uses a testing library framework (based on JavaScript) to write assertions.
* **Basic Status Code Test (using Snippets):**
    ```javascript
    pm.test("Status code is 200", function () {
        pm.response.to.have.status(200);
    });
    ```
* **Response Body Test (JSON Assertion):**
    1.  **Parse JSON:** `const response = pm.response.json();` (converts JSON text into a JS object).
    2.  **Assert Content:**
        ```javascript
        pm.test("Status property is 'OK'", function () {
            pm.expect(response.status).to.equal("OK");
        });
        ```

### Lesson 22 – Postman variables `01:19:20`
* **Variable Scope Recap:**
    * **Global:** Available everywhere in the workspace (use for transactional data like a temporary ID).
    * **Environment:** Used to easily switch between configurations (e.g., different Base URLs for Dev/Test/Prod).
* **Goal:** Store dynamic data (e.g., an `orderId`) in a variable to be reused by subsequent requests (e.g., Get Order, Patch Order, Delete Order), eliminating manual copy-paste.

### Lesson 23 – Extracting data from the response `01:24:13`
* **Key Concept:** Using JavaScript in the **Tests** tab to extract data from a response and programmatically save it as a variable for the next request.
* **Example 1 (Setting `orderId` after POST):**
    ```javascript
    const response = pm.response.json();

    // Set a global variable named 'orderId'
    pm.globals.set("orderId", response.orderId);

    // Assert the response status for completeness
    pm.test("Order Created (201)", function () {
        pm.response.to.have.status(201);
    });
    ```
* **Example 2 (Handling Array Responses):** When the response is a list (an array) of objects, you must filter or iterate through the array to find the desired element before extracting a property.

### Lesson 25 (Assignment) – More complex assertions `01:38:08`
* **Gotcha (Hyphenated Properties):** Access object properties with hyphens using bracket notation, as dot notation (`.`) will cause a syntax error.
* **Example (Asserting Stock is Above Zero):**
    ```javascript
    const response = pm.response.json();
    
    // Using bracket notation for 'current-stock'
    pm.test("Book is in stock (current-stock > 0)", function () {
        pm.expect(response['current-stock']).to.be.above(0);
    });

    // Use {{bookId}} in the URL for dynamic lookups
    pm.test("Book ID is correctly rendered in the request", function () {
        pm.expect(pm.variables.get("bookId")).to.be.above(0);
    });
    ```

### Lesson 26 – Collection runner `01:42:52`
* **Function:** Executes all requests in a collection, one after another, and provides an aggregated report of all test outcomes (pass/fail).
* **Tip:** When running the collection, ensure the "Keep variable values" and "Save responses" options are checked for better debugging.

### Lesson 27 – Request execution order `01:49:00`
* **Function:** Use `postman.setNextRequest()` in the **Tests** script to override the default linear execution flow.
* **Example (Skipping a request):** To skip a request named "Register API Client," the *preceding* request's Tests script would include:
    ```javascript
    postman.setNextRequest("List of books"); // Jumps to this request next
    ```
* **Example (Stopping the run):**
    ```javascript
    postman.setNextRequest(null); // Stops the collection run after this request
    ```
* **Warning:** Be careful not to create **infinite loops** by setting the next request to one that has already run without a stop condition.

### Lesson 28 – Postman monitors `01:53:32`
* **Function:** Schedules the collection to run on Postman's cloud infrastructure at a defined frequency (e.g., hourly, daily). This checks API health without manual intervention.
* **Gotcha (Authentication):** Monitors use the **Initial Value** of variables. If your `accessToken` is only in the **Current Value**, the monitor will fail with **401 Unauthorized**. Always copy secrets to the **Initial Value** if they are needed by a monitor.

### Lesson 29 – Newman `01:57:45`
* **Key Concept:** Postman's Command Line Interface (CLI) runner. It allows you to run collections directly from your terminal, making it perfect for integration with CI/CD tools.
* **Prerequisite:** **Node.js** installed on the machine/server.
* **Execution (Exported File):** `newman run postman_collection.json`
* **Execution (Public URL):** `newman run <public_share_link>`

### Lesson 30 – HTML reports with Newman `02:01:58`
* **Function:** Generating comprehensive HTML reports to visualize test results, especially useful for non-technical stakeholders or detailed debugging.
* **Example Command (Using the popular `html-extra` reporter):**
    ```bash
    newman run collection.json --reporters cli,html-extra
    ```
* **Report Content:** Contains a summary, full request/response details (headers, body), and test results for every step, allowing for easy debugging of CI failures.

### Lesson 30 (typo in list) – CI/CD overview `02:05:28`
* **Key Concept:** Integrating Newman into Continuous Integration/Continuous Deployment (CI/CD) pipelines (e.g., Jenkins, GitLab CI).
* **Placement:** The Newman test run is typically executed after the API code is successfully built and deployed to a test/staging environment.
* **Outcome:** If the Newman run fails (a test breaks), the CI/CD pipeline fails, preventing bad code from proceeding to production.

### Lesson 31 – Conclusion `02:08:24`
* **Recap:** Covered manual API testing, creating automated tests (assertions and variable chaining), using the Collection Runner/Monitors, and integrating tests into a CI/CD pipeline using Newman.
* **Next Steps:** Explore advanced topics like data-driven testing (using CSV/JSON files), schema validation, and deeper authentication (like OAuth 2.0).

---

## Links

- **Course video:** https://www.youtube.com/watch?v=VywxIQ2ZXw4
- **Course notes & sample API repo:** https://github.com/vdespa/introduction-to-postman-course
- **Related freeCodeCamp article:** https://www.freecodecamp.org/news/master-api-testing-with-postman/