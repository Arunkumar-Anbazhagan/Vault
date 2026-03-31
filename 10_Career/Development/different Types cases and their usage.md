|Case Type|Format|Example|Used In & When|
|---|---|---|---|
|**camelCase**|First word lowercase, rest capitalized|`displayElectric`|**Java** (methods, variables), **JavaScript** (functions, variables), **C#** (parameters, variables), **TypeScript** (variables)|
|**PascalCase**|Every word capitalized|`DisplayElectric`|**Java** (class names), **C#** (classes, public methods), **TypeScript** (classes, interfaces), **.NET** (most identifiers)|
|**snake_case**|All lowercase, words separated by `_`|`display_electric`|**Python** (variables, functions), **Ruby** (variables, methods), **C** (variables, functions), **PHP**|
|**SCREAMING_SNAKE_CASE**|All uppercase, words separated by `_`|`DISPLAY_ELECTRIC`|**Python** (constants), **Java** (constants), **C/C++** (macros, `#define`), **Unix** (environment variables)|
|**kebab-case**|All lowercase, words separated by `-`|`display-electric`|**CSS** (class names, properties), **HTML** (attributes), **URLs** (slugs), **Lisp**|
|**FLAMING-KEBAB-CASE**|All uppercase, words separated by `-`|`DISPLAY-ELECTRIC`|Rarely used; seen in some config files and HTTP headers (e.g., `Content-Type`)|
|**PascalCase (Train-Case)**|Each word capitalized, separated by `-`|`Display-Electric`|**HTTP headers** (`Content-Type`, `Accept-Encoding`)|
## Language Usage Table
|Language|Variables & Functions|Classes|Constants|
|---|---|---|---|
|**Java**|`camelCase`|`PascalCase`|`SCREAMING_SNAKE_CASE`|
|**JavaScript**|`camelCase`|`PascalCase`|`SCREAMING_SNAKE_CASE`|
|**Python**|`snake_case`|`PascalCase`|`SCREAMING_SNAKE_CASE`|
|**C#**|`camelCase`|`PascalCase`|`PascalCase`|
|**CSS/HTML**|`kebab-case`|—|—|
|**C/C++**|`snake_case`|`PascalCase`|`SCREAMING_SNAKE_CASE`|
|**Ruby**|`snake_case`|`PascalCase`|`SCREAMING_SNAKE_CASE`|


- `camelCase` → methods and variables (`displayElectric`, `getUserId`)[](https://www.youtube.com/watch?v=pQLJdjdr2MI)
    
- `PascalCase` → class names (`DisplayElectric`, `TestRunner`)[](https://dev.to/kellyblaire/naming-conventions-in-programming-20ak)
    
- `SCREAMING_SNAKE_CASE` → constants (`MAX_RETRY_COUNT`)