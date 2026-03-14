---
# yaml-language-server: $schema=schemas\page.schema.json
Object type:
    - Page
Backlinks:
    - Jmeter
Creation date: "2025-12-28T05:16:30Z"
Created by:
    - Arunkumar Anbazhagan
id: bafyreie5jfwuorltm2odz7kbqqu6cb7a2a3hzj7g6odej4x32r4g3bvwla
---
# 17.  SOAP Web Services Testing   
## Section 17: SOAP Web Services Testing   
### Steps   
1. Add HTTP Request Sampler   
2. Method: POST   
3. Path: SOAP endpoint URL   
4. Add HTTP Header Manager   
    - Content-Type: text/xml; charset=utf-8   
    - SOAPAction: Required action   
5. Body Data: SOAP envelope   
   
```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
   <soapenv:Header/>
   <soapenv:Body>
      <!-- Your SOAP request -->
   </soapenv:Body>
</soapenv:Envelope>

```
1. Add XPath Extractor for response   
2. Add XPath Assertion   
 --- 
   
   
