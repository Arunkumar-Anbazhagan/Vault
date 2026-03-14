---
# yaml-language-server: $schema=schemas\page.schema.json
Object type:
    - Page
Backlinks:
    - Jmeter
Creation date: "2025-12-28T05:17:51Z"
Created by:
    - Arunkumar Anbazhagan
id: bafyreif4drasnjbfaxqzuiqngg5j7b33jkqgwbyygb45dbtjuhwtfmm7wq
---
# 20. JMeter Properties & Configuration   
## Section 20: JMeter Properties & Configuration   
### jmeter.properties   
- Main configuration file in `bin` folder   
   
### Important Properties   
```
# Thread Groups
jmeter.threads.thread_group_keep_alive_time=60

# Result file configuration
jmeter.save.saveservice.output_format=csv
jmeter.save.saveservice.timestamp_format=yyyy/MM/dd HH:mm:ss

# HTTP
httpclient.timeout=10000
httpclient.max_retries=1

# Remote testing
remote_hosts=192.168.1.100:1099

# SSL
https.default.protocol=TLS

# Memory
-Xms1g -Xmx1g (in jmeter.bat)

```
### user.properties   
- User-specific overrides   
- Don't modify jmeter.properties directly   
 --- 
