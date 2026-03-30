---
# yaml-language-server: $schema=schemas\page.schema.json
Object type:
    - Page
Backlinks:
    - Jmeter
Creation date: "2025-12-28T05:15:42Z"
Created by:
    - Arunkumar Anbazhagan
id: bafyreifw73hfl5xslp6euoczdgn52gclbiyob22fljhszvrygqsxy7jc6m
---
# 16. Rest API Testing   
## Section 16: REST API Testing   
### Steps   
1. Add Thread Group   
2. Add HTTP Request Sampler   
    - Method: GET, POST, PUT, DELETE   
    - URL: API endpoint   
    - Headers: Content-Type: application/json   
    - Body: JSON payload   
3. Add JSON Extractor (if needed)   
4. Add JSON Assertion   
5. Add Listeners   
   
### Example POST Request   
```
Body Data:
{
  "name": "John",
  "email": "john@example.com"
}

```
### Headers Required   
- Content-Type: application/json   
- Authorization: Bearer ${token}   
 --- 
