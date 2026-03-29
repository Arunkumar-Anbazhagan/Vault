---
# yaml-language-server: $schema=schemas\page.schema.json
Object type:
    - Page
Backlinks:
    - Jmeter
Creation date: "2025-12-28T05:17:27Z"
Created by:
    - Arunkumar Anbazhagan
id: bafyreig4e4xaki5tmpyp2q74aqtc5adw4jg5ss42b24ftdolfsqp66tdxu
---
# 19. Distributed Testing   
## Section 19: Distributed Testing   
### Architecture   
- **Master (Controller)**: Controls test execution   
- **Slaves (Load Generators)**: Generate load   
   
### Setup Steps   
### On Slave Machines   
1. Install JMeter (same version)   
2. Edit `jmeter-server.bat` if needed   
3. Run: `jmeter-server.bat` (Windows) or `jmeter-server` (Linux)   
4. Note the IP address   
   
### On Master Machine   
1. Edit `jmeter.properties`   
2. Add: `remote\_hosts=slave1\_ip:1099,slave2\_ip:1099`   
3. Ensure firewall allows port 1099   
4. Start JMeter GUI   
5. Run > Remote Start > Select slaves   
   
### Requirements   
- Same JMeter version on all machines   
- Test plan and CSV files on all machines (or network share)   
- Network connectivity   
- Sufficient resources on each machine   
   
### Best Practices   
- Use powerful slave machines   
- Monitor resources during test   
- Aggregate results centrally   
- Use CSV output for efficiency   
 --- 
