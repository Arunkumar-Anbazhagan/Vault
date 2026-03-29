---
# yaml-language-server: $schema=schemas\page.schema.json
Object type:
    - Page
Tag:
    - jmeter
    - opensource
Backlinks:
    - Jmeter
Creation date: "2025-12-28T05:09:16Z"
Created by:
    - Arunkumar Anbazhagan
id: bafyreicu3lriefgnvknr2okqagri7ksmdbtvtvxnau45ezid3w2mz7bafa
---
# 7. Listeners   
## Section 7: Listeners (Result Analysis)   
### View Results Tree   
- Detailed view of each request/response   
- Shows request data, response data, response code   
- Tabs: Sampler result, Request, Response data (Text, HTML, JSON, XML)   
- Best for debugging, not for large tests   
   
### Aggregate Report   
- Statistical summary of test results   
- **Metrics**:   
    - **Samples**: Number of requests   
    - **Average**: Average response time (ms)   
    - **Median**: 50th percentile   
    - **90% Line**: 90th percentile   
    - **95% Line**: 95th percentile   
    - **99% Line**: 99th percentile   
    - **Min/Max**: Minimum/Maximum response time   
    - **Error %**: Percentage of failed requests   
    - **Throughput**: Requests per second   
    - **KB/sec**: Data transfer rate   
   
### Summary Report   
- Similar to Aggregate Report with fewer columns   
- Lighter on resources   
   
### Graph Results   
- Visual graph of response times   
- Shows average, median, deviation   
- Color-coded: Black (average), Red (current), Blue (median)   
   
### Response Time Graph   
- Response time vs time graph   
- Multiple samplers comparison   
   
### Active Threads Over Time   
- Shows thread count vs time   
- Useful for ramp-up analysis   
   
### Transactions per Second   
- TPS (Throughput) vs time   
- Monitors transaction rate   
   
### Simple Data Writer   
- Save results to file (CSV/XML)   
- Minimal overhead during test execution   
   
### Backend Listener   
- Real-time results to external systems   
- Supports InfluxDB, Graphite   
- Integration with Grafana for dashboards   
 --- 
