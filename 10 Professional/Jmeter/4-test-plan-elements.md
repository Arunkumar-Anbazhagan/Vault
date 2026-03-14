---
# yaml-language-server: $schema=schemas\page.schema.json
Object type:
    - Page
Backlinks:
    - Jmeter
Creation date: "2025-12-28T05:04:04Z"
Created by:
    - Arunkumar Anbazhagan
Links:
    - jmeter-index.md
id: bafyreidmyxknb577amv33nrc2mhbjozp56ipki2bvizpxsqmorujbyjyku
---
# 4. Test Plan elements   
## Section 4: Test Plan Elements   
### Test Plan   
- Root element containing all test elements   
- Can add User Defined Variables   
- Options:   
    - Functional Test Mode   
    - Add directory/jar to classpath   
    - Run Thread Groups consecutively/separately   
   
### Thread Group   
- Simulates virtual users   
- **Key Parameters**:   
    - **Number of Threads**: Virtual users count   
    - **Ramp-up Period**: Time to start all threads (seconds)   
    - **Loop Count**: Number of iterations per thread   
    - **Duration**: Test duration in seconds   
    - **Delay Thread Creation**: Delay between thread creation   
   
**Example**: 100 threads, 10s ramp-up = 10 threads start per second   
### Controllers   
### Logic Controllers   
1. **Simple Controller**: Organize samplers   
2. **Loop Controller**: Execute samplers multiple times   
3. **Once Only Controller**: Execute once per thread   
4. **If Controller**: Conditional execution   
5. **While Controller**: Loop based on condition   
6. **Transaction Controller**: Group related requests, measure total time   
7. **Throughput Controller**: Control execution frequency   
8. **Runtime Controller**: Run for specified time   
9. **Interleave Controller**: Alternate between child elements   
10. **Random Controller**: Random selection of child elements   
11. **Random Order Controller**: Randomize execution order   
12. **Switch Controller**: Switch between child elements   
13. **ForEach Controller**: Loop through variables   
14. **Module Controller**: Reuse test plan fragments   
15. **Include Controller**: Include external test plan   
   
### Samplers   
- Generate requests to servers   
- **Types**:   
    - **HTTP Request**: Web application testing   
    - **JDBC Request**: Database testing   
    - **FTP Request**: FTP server testing   
    - **SOAP/REST Request**: Web services   
    - **JMS Request**: Message queue testing   
    - **SMTP Sampler**: Email testing   
    - **TCP Sampler**: TCP connections   
    - **Java Request**: Custom Java code   
    - **Debug Sampler**: Debugging test plans   
 --- 
[Jmeter Index](jmeter-index.md)    
