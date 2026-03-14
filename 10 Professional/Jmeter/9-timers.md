---
# yaml-language-server: $schema=schemas\page.schema.json
Object type:
    - Page
Tag:
    - opensource
    - jmeter
Backlinks:
    - Jmeter
Creation date: "2025-12-28T05:10:46Z"
Created by:
    - Arunkumar Anbazhagan
id: bafyreifnvlzlmrrs5gkoo23mzsc2q5ewzktjpwsjwp3hlr4oyg3cj6wj44
---
# 9. Timers   
## Section 9: Timers   
### Purpose   
- Add delays between requests (think time)   
- Simulate realistic user behavior   
   
### Types of Timers   
### Constant Timer   
- Fixed delay (milliseconds)   
- Same delay for all requests   
   
### Uniform Random Timer   
- Random delay between min and max   
- **Constant Delay Offset** + Random value (0 to Random Delay Maximum)   
   
### Gaussian Random Timer   
- Delay based on Gaussian curve   
- **Constant Delay Offset** + Gaussian distribution   
   
### Constant Throughput Timer   
- Target throughput (requests/minute)   
- Adjusts delay to achieve target   
   
### Synchronizing Timer   
- Pause threads until threshold reached   
- Release all threads together (spike testing)   
   
### BeanShell Timer   
- Custom delay using BeanShell script   
   
### Poisson Random Timer   
- Delay based on Poisson distribution   
- More realistic traffic simulation   
 --- 
