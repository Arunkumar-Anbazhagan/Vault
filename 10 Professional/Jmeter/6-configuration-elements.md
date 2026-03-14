---
# yaml-language-server: $schema=schemas\page.schema.json
Object type:
    - Page
Tag:
    - jmeter
    - opensource
Backlinks:
    - Jmeter
Creation date: "2025-12-28T05:05:23Z"
Created by:
    - Arunkumar Anbazhagan
id: bafyreieb2cdwqigaccuu3az6tope35gupp4gnyvu6aapucmnet523rvctu
---
#  6. Configuration Elements   
## Section 6: Configuration Elements   
   
### Definition:    
### HTTP Request Defaults   
- Set default values for all HTTP requests   
- Server, port, protocol, path   
- Reduces redundancy in test plan   
   
### HTTP Header Manager   
- Add/modify HTTP headers   
- Common headers: Content-Type, Authorization, User-Agent, Accept   
   
### HTTP Cookie Manager   
- Handles cookies automatically   
- Stores and sends cookies like browser   
- Options:   
    - Clear cookies each iteration   
    - Cookie Policy (standard, compatibility, netscape)   
   
### CSV Data Set Config (Parameterization)   
- Read data from CSV file   
- **Parameters**:   
    - **Filename**: Path to CSV file   
    - **Variable Names**: Column names (comma-separated)   
    - **Delimiter**: Field separator (default: comma)   
    - **Recycle on EOF**: Restart from beginning   
    - **Stop thread on EOF**: Stop when file ends   
    - **Sharing mode**: All threads, Current thread group, Current thread   
   
### User Defined Variables   
- Define variables at test plan level   
- Syntax: `${variable\_name}`   
   
### HTTP Cache Manager   
- Simulates browser caching   
- Improves realistic testing   
   
### DNS Cache Manager   
- Manage DNS resolution   
- Custom DNS servers, static host table   
   
### Authorization Manager   
- Handle authentication (Basic, Digest)   
- Add username/password for protected resources   
 --- 
