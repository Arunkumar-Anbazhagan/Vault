---
# yaml-language-server: $schema=schemas\page.schema.json
Object type:
    - Page
Backlinks:
    - Jmeter
Creation date: "2025-12-28T05:14:25Z"
Created by:
    - Arunkumar Anbazhagan
id: bafyreicitm5aotjdabipxz7v6eyrhsd4ebht7tyoasj5auqrxihjheihqi
---
# 14. Functions & Variables   
## Section 14: Functions & Variables   
### Built-in Functions   
- Syntax: `${\_\_functionName(parameters)}`   
   
### Common Functions   
- `${\_\_time()}`: Current time in milliseconds   
- `${\_\_time(yyyy-MM-dd)}`: Formatted date   
- `${\_\_Random(1,100)}`: Random number between 1-100   
- `${\_\_RandomString(10,abcdefg)}`: Random string   
- `${\_\_counter()}`: Incremental counter   
- `${\_\_threadNum}`: Current thread number   
- `${\_\_UUID()}`: Generate UUID   
- `${\_\_machineName()}`: Machine name   
- `${\_\_machineIP()}`: Machine IP   
- `${\_\_property(property\_name)}`: Get property value   
- `${\_\_P(property,default)}`: Get property with default   
- `${\_\_log(message)}`: Log message   
- `${\_\_eval(expression)}`: Evaluate expression   
- `${\_\_groovy(script)}`: Execute Groovy script   
- `${\_\_BeanShell(script)}`: Execute BeanShell   
- `${\_\_urlencode(string)}`: URL encode   
- `${\_\_urldecode(string)}`: URL decode   
- `${\_\_base64Encode(string)}`: Base64 encode   
- `${\_\_base64Decode(string)}`: Base64 decode   
   
### Variables   
- User Defined Variables   
- CSV variables   
- Extracted variables (correlation)   
- Properties vs Variables   
    - Variables: Thread-specific   
    - Properties: JVM-level, shared across threads   
 --- 
