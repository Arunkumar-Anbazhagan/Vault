# Topic: HTTP Methods and Status Codes

## Key Concepts
* **HTTP (HyperText Transfer Protocol):** The foundation of data communication for the Web.
* **Request/Response Cycle:** The client (Postman) sends a **Request** (URL, Method, Headers, optional Body); the server sends a **Response** (Status Code, Headers, optional Body).

## Core HTTP Methods (The CRUD Mappers)
| Method | Purpose | CRUD Action | Body Required? |
| :--- | :--- | :--- | :--- |
| **GET** | Retrieve a resource or list of resources. | Read | No |
| **POST** | Create a new resource. | Create | Yes |
| **PUT** | Completely replace an existing resource. | Update | Yes |
| **PATCH** | Partially update an existing resource. | Update | Yes (partial) |
| **DELETE** | Remove a resource. | Delete | No |

## Key Status Codes
* **2xx (Success):** * `200 OK`: General success.
    * `201 Created`: Resource was successfully created (e.g., a POST request).
    * `204 No Content`: Request succeeded, but no data is returned (e.g., PATCH/DELETE).
* **4xx (Client Error):**
    * `400 Bad Request`: Request format or data is incorrect (e.g., invalid JSON, missing required field).
    * `401 Unauthorized`: Missing or invalid authentication token.
    * `404 Not Found`: Resource or endpoint doesn't exist.
* **5xx (Server Error):**
    * `500 Internal Server Error`: Server encountered an unexpected condition.