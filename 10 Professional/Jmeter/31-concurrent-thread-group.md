---
# yaml-language-server: $schema=schemas\page.schema.json
Object type:
    - Page
Tag:
    - blazemeter
    - jmeter
Backlinks:
    - Jmeter
Creation date: "2025-12-28T14:17:19Z"
Created by:
    - Arunkumar Anbazhagan
id: bafyreif35b76skty2ldimlzajih6bsvuzs6xe7vlaaaotcpsgamkonfldq
---
# 31. Concurrent Thread group   
**Quick Reference:**   
The **Concurrency Thread Group** in JMeter is a plugin (installable via JMeter Plugins Manager) designed to simulate a controlled number of concurrent users. It’s documented on [JMeter-Plugins.org](https://jmeter-plugins.org/wiki/ConcurrencyThreadGroup/).   
📝 Notes on Concurrency Thread Group (from official documentation)   
📌 Overview   
- **Plugin Origin:** Developed by BlazeMeter, contributed to JMeter Plugins community.   
- **Purpose:** Maintains a target level of concurrency (threads/users) without creating all threads upfront.   
- **Difference from Classic Thread Group:** Unlike the default Thread Group, it dynamically adds threads during runtime to maintain concurrency, saving memory and allowing graceful thread completion.   
   
⚙️ Key Parameters (Documentation Section: *Description*)   
1. **Target Concurrency**   
    - *Definition:* The total number of concurrent threads (virtual users) you want to run.   
    - *Example:* Setting 100 means JMeter will maintain 100 active users at peak.   
2. **Ramp-Up Period (seconds)**   
    - *Definition:* The time taken to reach the target concurrency.   
    - *Example:* If set to 60 seconds, JMeter will gradually increase threads until 100 users are active.   
3. **Ramp-Up Steps Count**   
    - *Definition:* Number of increments used during ramp-up.   
    - *Example:* Ramp-Up Period = 60s, Steps = 6 → adds users in 6 equal jumps (every 10s).   
4. **Hold Target Rate (Duration)**   
    - *Definition:* How long JMeter maintains the target concurrency once reached.   
    - *Example:* Hold = 300s → keeps 100 users running for 5 minutes.   
5. **Test Duration (Overall)**   
- *Definition:* Total time including ramp-up + hold + ramp-down (if configured).   
- *Example:* Ramp-Up 60s + Hold 300s = 360s total.   
   
📊 Why Use It   
- **Capacity Testing:** Helps determine how many concurrent users your system can handle.   
- **Efficiency:** Doesn’t pre-create all threads, reducing memory usage.   
- **Flexibility:** Better suited for step-up or spike tests compared to the default Thread Group.   
   
🔗 Documentation Reference   
- Official JMeter Plugins page: [Concurrency Thread Group Documentation](https://jmeter-plugins.org/wiki/ConcurrencyThreadGroup/)   
- PerfMatrix tutorial: [Concurrency Thread Group in JMeter](https://www.perfmatrix.com/jmeter-concurrency-thread-group/)   
