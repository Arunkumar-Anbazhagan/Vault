---
# yaml-language-server: $schema=schemas\page.schema.json
Object type:
    - Page
Backlinks:
    - Jmeter
Creation date: "2025-12-28T05:12:34Z"
Created by:
    - Arunkumar Anbazhagan
id: bafyreihcilihlbmwe6nfbcl23mylvrljvj4vwinimyj3sxrfjlukh672py
---
# 11. Correlation    
## Section 11: Correlation (Dynamic Values)   
### What is Correlation?   
- Handling dynamic values from server   
- Example: Session IDs, tokens, CSRF tokens   
   
### Process   
1. Identify dynamic value in response (View Results Tree)   
2. Add Post-Processor (Regular Expression Extractor)   
3. Create regex to capture value   
4. Store in variable   
5. Use variable in subsequent requests   
   
### Example   
```
Response: "sessionId":"ABC123"

Regular Expression: "sessionId":"(.+?)"
Template: $1$
Variable: sessionId

Usage: ${sessionId}

```
 --- 
