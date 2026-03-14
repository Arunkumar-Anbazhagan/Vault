---
# yaml-language-server: $schema=schemas\page.schema.json
Object type:
    - Page
Backlinks:
    - Jmeter
Creation date: "2025-12-28T05:16:59Z"
Created by:
    - Arunkumar Anbazhagan
id: bafyreigobcofanepbvbl4txxhwkftmvcx57sj5lzpbbucg65wn47x5g6r4
---
# 18. Non-GUI (CLI) Mode   
## Section 18: Non-GUI (CLI) Mode   
### Why CLI Mode?   
- GUI consumes resources   
- Better for actual load testing   
- Automated test execution   
- CI/CD integration   
   
### Commands   
### Run Test   
```
jmeter -n -t test_plan.jmx -l results.jtl

```
### With HTML Report   
```
jmeter -n -t test_plan.jmx -l results.jtl -e -o report_folder

```
### Generate Report from Existing Results   
```
jmeter -g results.jtl -o report_folder

```
### Parameters   
- `-n`: Non-GUI mode   
- `-t`: Test plan file   
- `-l`: Log file (results)   
- `-e`: Generate report after test   
- `-o`: Output folder for HTML report   
- `-j`: JMeter log file   
- `-J`: Define property (e.g., -Jthreads=100)   
- `-G`: Define property globally   
   
### Remote Testing   
```
jmeter -n -t test.jmx -r

```
- `-r`: Run on all remote servers   
- `-R server1,server2`: Run on specific servers   
 --- 
