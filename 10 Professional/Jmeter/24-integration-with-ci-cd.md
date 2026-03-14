---
# yaml-language-server: $schema=schemas\page.schema.json
Object type:
    - Page
Backlinks:
    - Jmeter
Creation date: "2025-12-28T05:19:13Z"
Created by:
    - Arunkumar Anbazhagan
id: bafyreibrcbu2awdiiueb5be5w7izk7oz7elyxwv46aesiiqcyjvdao5vme
---
# 24. Integration with CI/CD   
## Section 24: Integration with CI/CD   
### Jenkins Integration   
### Setup   
1. Install Performance Plugin in Jenkins   
2. Add JMeter to Jenkins server   
3. Create Jenkins job   
4. jmeter -n -t test.jmx -l results.jtl -e -o report
   
5. Add post-build action: Performance Report   
6. Specify .jtl file path   
7. Set performance thresholds   
   
### Maven Integration   
- Use `jmeter-maven-plugin`   
- Configure in pom.xml   
- Run: `mvn verify`   
   
### Gradle Integration   
- Use JMeter Gradle Plugin   
- Configure in build.gradle   
 --- 
