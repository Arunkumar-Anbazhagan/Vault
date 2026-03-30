---
# yaml-language-server: $schema=schemas\page.schema.json
Object type:
    - Page
Backlinks:
    - Jmeter
Creation date: "2025-12-28T05:22:52Z"
Created by:
    - Arunkumar Anbazhagan
id: bafyreibgmtgp27h22bnmyad57muwq6ovpmtixpzklify4mjx5rv5ns3daq
---
# 27. Common Interview Questions   
## Section 27: Common Interview Questions   
### Q1: Difference between Load, Stress, and Spike Testing?   
- **Load**: Test with expected load   
- **Stress**: Test beyond capacity to find breaking point   
- **Spike**: Sudden increase/decrease in load   
   
### Q2: How to handle HTTPS in JMeter?   
- Install JMeter CA certificate in browser   
- Use HTTPS protocol in HTTP Request   
- Configure SSL Manager if needed   
   
### Q3: How does ramp-up work?   
- Ramp-up = Time to start all threads   
- If 100 threads, 10s ramp-up: 10 threads/second   
- Formula: Delay = Ramp-up / Threads   
   
### Q4: What is throughput?   
- Number of requests processed per unit time   
- Measured in requests/second or requests/minute   
- Higher throughput = better performance   
   
### Q5: GUI vs Non-GUI mode?   
- **GUI**: Test plan creation, debugging   
- **Non-GUI**: Actual load testing, CI/CD   
   
### Q6: How to correlate dynamic values?   
1. Identify dynamic value in response   
2. Regular Expression Extractor   
3. Define regex with capturing groups   
4. Store in variable   
5. Use ${variable} in next request   
   
### Q7: Types of Post-Processors?   
- Regular Expression Extractor   
- JSON Extractor   
- XPath Extractor   
- CSS/jQuery Extractor   
- Boundary Extractor   
   
### Q8: What are Pre-Processors?   
- Execute before sampler   
- Modify request before sending   
- Examples: BeanShell PreProcessor, JSR223   
   
### Q9: Explain Listeners?   
- Display test results   
- Different formats: Tree, Table, Graph, Report   
- Should be disabled during load tests   
   
### Q10: What is a Transaction Controller?   
- Groups related samplers   
- Measures total time for business transaction   
- Can generate parent sample   
   
### Q11: How to parameterize from CSV?   
- Add CSV Data Set Config   
- Define filename, variable names, delimiter   
- Use ${variable} in samplers   
   
### Q12: Difference between HTTP Cookie Manager and HTTP Cache Manager?   
- **Cookie Manager**: Handles cookies (sessions)   
- **Cache Manager**: Handles browser caching   
   
### Q13: What is Backend Listener?   
- Sends real-time results to external systems   
- Supports InfluxDB, Graphite   
- Used with Grafana for live dashboards   
   
### Q14: How to exclude URLs in recording?   
- Use Include/Exclude patterns in Test Script Recorder   
- Regex patterns for URLs to exclude   
- Example: `.\*\\.js`, `.\*\\.css`   
   
### Q15: What are Timers?   
- Add delays between requests   
- Simulate think time   
- Types: Constant, Uniform Random, Gaussian, etc.   
   
### Q16: Maximum threads JMeter can handle?   
- Depends on machine resources   
- GUI: Few hundred threads   
- CLI: Thousands (with sufficient RAM)   
- Use distributed testing for higher loads   
   
### Q17: How to test WebSocket?   
- Use WebSocket Samplers by Peter Doornbosch plugin   
- Or use JSR223 Sampler with custom code   
   
### Q18: What is Property vs Variable?   
- **Variable**: Thread-specific, temporary   
- **Property**: JVM-level, shared, persistent   
   
### Q19: How to debug test plans?   
- View Results Tree   
- Debug Sampler   
- Log Viewer (jmeter.log)   
- Add Response Assertion to verify   
   
### Q20: Best practices for large-scale tests?   
- Use CLI mode   
- Distributed testing   
- Remove/disable listeners   
- Increase Java heap   
- Use Simple Data Writer   
- Monitor server resources   
- CSV output format   
 --- 
