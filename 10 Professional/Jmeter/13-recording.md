---
# yaml-language-server: $schema=schemas\page.schema.json
Object type:
    - Page
Backlinks:
    - Jmeter
Creation date: "2025-12-28T05:13:25Z"
Created by:
    - Arunkumar Anbazhagan
id: bafyreiflyq7vcfopqmvs4wp6qxllvcy5kc2prix44gh3oj7menmbkizoje
---
# 13. Recording   
## Section 13: Recording (Proxy Server)   
### HTTP(S) Test Script Recorder   
- Record browser interactions   
- Creates test plan automatically   
   
### Steps   
1. Add Test Script Recorder to Workbench   
2. Configure:   
    - Port: 8888 (default)   
    - Target Controller: Thread Group   
3. Add HTTP Request Defaults with target application details   
4. Configure browser proxy settings (localhost:8888)   
5. Install JMeter CA certificate (for HTTPS)   
6. Start recorder in JMeter   
7. Perform actions in browser   
8. Stop recorder   
9. Review and clean up recorded requests   
   
### Best Practices   
- Use URL patterns to exclude (Include/Exclude patterns)   
- Exclude static resources (css, js, images) if not needed   
- Add Transaction Controller to group logical transactions   
- Clean up unnecessary requests   
- Add assertions and validation   
 --- 
