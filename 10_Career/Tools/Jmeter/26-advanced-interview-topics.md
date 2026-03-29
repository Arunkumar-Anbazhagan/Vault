---
# yaml-language-server: $schema=schemas\page.schema.json
Object type:
    - Page
Backlinks:
    - Jmeter
Creation date: "2025-12-28T05:20:04Z"
Created by:
    - Arunkumar Anbazhagan
id: bafyreigxbw22wuqpg5tyjekgdrlbwmdmiietca7uyvtjvxrtby2g7nan24
---
# 26. ADVANCED INTERVIEW TOPICS   
## SECTION 26: ADVANCED INTERVIEW TOPICS   
### 1. JMeter Architecture   
- JMeter uses single-threaded model per virtual user   
- Each thread runs independently   
- Shared resources: User Defined Variables, CSV files   
- Thread-local resources: HTTP Cache, Cookies   
   
### 2. Performance Tuning JMeter   
- Increase JVM heap: `-Xms4g -Xmx4g`   
- Use JSR223 with Groovy (compiled, cached)   
- Disable unnecessary listeners   
- Use CSV, not XML   
- Minimize assertions   
- Use HTTP Request Defaults   
- Connection pooling   
   
### 3. Types of Controllers - When to Use   
- **Transaction Controller**: Measure business transaction time   
- **Throughput Controller**: Control percentage of execution   
- **If Controller**: Conditional logic   
- **While Controller**: Loop until condition   
- **ForEach Controller**: Iterate over extracted variables   
- **Module Controller**: Reuse test fragments   
- **Runtime Controller**: Run for specific duration   
   
### 4. Correlation vs Parameterization   
- **Correlation**: Handle dynamic server values (session ID, token)   
- **Parameterization**: Provide test data from external source (CSV)   
   
### 5. Distributed Testing Challenges   
- Network latency between master-slave   
- Firewall configuration   
- Version compatibility   
- Resource synchronization   
- Result aggregation   
- Clock synchronization   
   
### 6. Monitoring During Tests   
- Server CPU, Memory, Disk, Network (using monitoring tools)   
- Application logs   
- Database connections   
- Response times   
- Error rates   
- JMeter: Active Threads, Response Time Graph, TPS   
   
### 7. Stay Updated   
- Latest JMeter version features   
- New plugins   
- Industry trends   
 --- 
   
## Quick Reference Card   
### Common Commands   
```
# Run test
jmeter -n -t test.jmx -l results.jtl

# With HTML report
jmeter -n -t test.jmx -l results.jtl -e -o report

# Remote execution
jmeter -n -t test.jmx -r

# Set property
jmeter -n -t test.jmx -Jthreads=50

```
### Important Functions   
- `${\_\_time()}` - Current timestamp   
- `${\_\_Random(1,100)}` - Random number   
- `${\_\_UUID()}` - Generate UUID   
- `${\_\_counter()}` - Increment counter   
- `${\_\_threadNum}` - Thread number   
   
### Key Shortcuts   
- **Ctrl+0**: Collapse tree   
- **Ctrl+1**: Expand tree   
- **Ctrl+R**: Run test   
- **Ctrl+.**: Stop test   
- **Ctrl+E**: Clear results   
- **Ctrl+S**: Save test plan   
 --- 
   
## Conclusion   
This comprehensive guide covers everything from basics to advanced topics needed for JMeter interviews. Practice hands-on with real scenarios and you'll be well-prepared!   
**Pro Tip**: Always think from a performance testing perspective - what to measure, how to simulate realistic scenarios, and how to analyze results effectively. Advanced Scripting   
- Use JSR223 Sampler with Groovy   
- Access JMeter context: `vars`, `ctx`, `props`   
- Custom functions   
- BeanShell scripting (legacy)   
   
### 8. HTML Report Components   
- APDEX (Application Performance Index)   
- Requests Summary   
- Statistics table   
- Error percentage   
- Response Time Percentiles   
- Throughput over time   
- Response Time over time   
- Connect Time over time   
- Latency over time   
   
### 9. Different Thread Group Types   
- **setUp Thread Group**: Run before main test (data setup)   
- **tearDown Thread Group**: Run after test (cleanup)   
- **Ultimate Thread Group**: Complex load patterns (plugin)   
- **Stepping Thread Group**: Gradual increase (plugin)   
- **Concurrency Thread Group**: Target concurrency (plugin)   
   
### 10. Assertions Strategy   
- Add Response Assertion for critical validations   
- Use Duration Assertion for SLA compliance   
- JSON/XPath for structure validation   
- Don't over-assert (impacts performance)   
- Assert in representative samples only   
 --- 
