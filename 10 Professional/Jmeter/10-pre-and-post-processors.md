---
# yaml-language-server: $schema=schemas\page.schema.json
Object type:
    - Page
Backlinks:
    - Jmeter
Creation date: "2025-12-28T05:11:18Z"
Created by:
    - Arunkumar Anbazhagan
id: bafyreidoz3fs6gekwtdfasr23uvemxpfnarexytgpv3mkgrn6jk2optxw4
---
# 10. Pre & Post Processors   
## Section 10: Pre & Post Processors   
### Pre-Processors   
- Execute before sampler request   
   
### Types:   
1. **HTML Link Parser**: Extract links from HTML   
2. **HTTP URL Re-writing Modifier**: Append session ID   
3. **BeanShell PreProcessor**: Custom logic   
4. **JSR223 PreProcessor**: Groovy/JavaScript scripts   
5. **JDBC PreProcessor**: Execute SQL before request   
6. **RegEx User Parameters**: Extract and modify parameters   
   
### Post-Processors   
- Execute after sampler response   
   
### Types:   
1. **Regular Expression Extractor** (Most Important)   
    - Extract data using regex   
    - **Fields**:   
        - Apply to: Main sample/Sub-samples/Both   
        - Field to check: Body, Headers, URL, Code, Message   
        - Reference Name: Variable to store extracted value   
        - Regular Expression: Pattern with capturing groups ()   
        - Template: $1$, $2$ (captured groups)   
        - Match No: 0 (random), 1 (first), -1 (all)   
        - Default Value: If no match found   
2. **JSON Extractor** (JMESPath)   
    - Extract from JSON response   
    - JSON Path expression   
    - Match Numbers, Default values   
3. **CSS/JQuery Extractor**   
    - Extract using CSS selectors   
    - Similar to web scraping   
4. **XPath Extractor**   
    - Extract from XML using XPath   
    - Namespaces support   
5. **Boundary Extractor**   
    - Extract between left and right boundaries   
    - Alternative to regex for simple cases   
6. **BeanShell PostProcessor**   
    - Custom extraction logic   
7. **JSR223 PostProcessor**   
    - Groovy scripts for complex logic   
 --- 
