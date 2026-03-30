---
# yaml-language-server: $schema=schemas\page.schema.json
Object type:
    - Page
Backlinks:
    - Jmeter
Creation date: "2025-12-28T05:15:13Z"
Created by:
    - Arunkumar Anbazhagan
id: bafyreiemqfmozs2j6k3eefzibenptnlabwovgljadh452m5xa4fsmtcida
---
# 15. Database Testing   
## Section 15: Database Testing (JDBC)   
### Setup   
1. Add JDBC driver JAR to `lib` folder   
2. Add JDBC Connection Configuration   
    - Variable Name: db\_conn   
    - Database URL: jdbc:mysql://localhost:3306/dbname   
    - JDBC Driver class: com.mysql.jdbc.Driver   
    - Username/Password   
3. Add JDBC Request   
    - Variable Name: db\_conn (same as config)   
    - Query Type: Select, Update, Callable Statement   
    - SQL Query: Your SQL query   
    - Variable names: Store results   
   
### Result Variables   
- `${variable\_#}`: Row count   
- `${variable\_1}`: First row   
- Use in subsequent requests   
 --- 
