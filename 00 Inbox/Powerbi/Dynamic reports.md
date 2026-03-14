# 📊 Power BI: Create Dynamic Reports with Parameters

## 🔧 What Are Parameters?
- User-defined variables used to filter data dynamically.
- Enable creation of flexible, reusable reports without editing queries manually.

## 🎯 Use Case
- Filter data by SalesPerson or Region without modifying the report.
- Ideal for tailoring reports to different audiences or scenarios.

## 🛠️ Steps to Create Dynamic Reports (Single Value)

1. **Connect to SQL Server**
   - Use *Get Data* > *SQL Server* > Input SQL query.

2. **Create a Parameter**
   - Go to *Manage Parameters* > New Parameter.
   - Define name, type (e.g., Text), and default value.

3. **Modify SQL Query**
   - Use parameter in WHERE clause:
     ```sql
     SELECT * FROM Sales WHERE SalesPerson = '&SalesPersonParam'
     ```

4. **Apply Parameter**
   - Use *Edit Parameters* > Change value > *Apply Changes*.

## 🔁 Dynamic Reports for Multiple Values

1. **Prepare Excel Table**
   - List multiple values (e.g., SalesPerson IDs).

2. **Load Table into Power BI**
   - Ensure column type matches parameter type.

3. **Create a Function**
   - Convert original query into a function that accepts a parameter.

4. **Invoke Function**
   - Use *Add Column* > *Invoke Custom Function* for each row.

5. **Expand Results**
   - Select desired fields from the function output.

6. **Refresh & Apply**
   - Load combined results into the report.

## ✅ Benefits
- Reduces report duplication.
- Empowers users to explore data interactively.
- Supports both single and multi-value filtering.

# 📚 Reference
- Full tutorial: https://learn.microsoft.com/en-us/training/modules/get-data/3b-parameters