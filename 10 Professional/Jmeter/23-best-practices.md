---
# yaml-language-server: $schema=schemas\page.schema.json
Object type:
    - Page
Backlinks:
    - Jmeter
Creation date: "2025-12-28T05:18:59Z"
Created by:
    - Arunkumar Anbazhagan
id: bafyreibzd7xgv5dkum72x3ax4b4wirc46yyw5mcjdqhiifkrknuaushi5i
---
# 23. Best Practices   
## Section 23: Best Practices   
### Test Plan Design   
- Start simple, add complexity gradually   
- Use meaningful names for elements   
- Add comments using Comment element   
- Organize with Simple Controllers   
- Use Transaction Controllers for business flows   
- Disable elements you don't need (right-click > Disable)   
   
### Performance Best Practices   
- **Run in CLI mode** for actual load tests   
- Remove unnecessary listeners   
- Use Simple Data Writer instead of View Results Tree   
- Set appropriate Java heap size (-Xms and -Xmx)   
- Use CSV output format (not XML)   
- Don't use View Results Tree for high loads   
- Use Constant Throughput Timer cautiously   
- Close unused applications on test machine   
   
### Scripting Best Practices   
- Use parameterization for test data   
- Implement proper correlation   
- Add think time (timers)   
- Use HTTP Cache Manager and Cookie Manager   
- Add appropriate assertions   
- Handle errors gracefully   
- Use JSR223 (Groovy) over BeanShell (faster)   
   
### Realistic Testing   
- Simulate realistic user behavior   
- Include think time between requests   
- Vary user actions   
- Use different test data   
- Test during peak hours   
- Gradually ramp up users   
 --- 
