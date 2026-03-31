# Returning Values in Arrow Functions

## Implicit Return
- Used when there is a single expression
- No `return` keyword needed
- Syntax:
  x => x + 1

## Explicit Return
- Required when using `{}` block
- Syntax:
  x => {
    return x + 1;
  }

## Returning Objects
- Wrap object in parentheses
- Syntax:
  () => ({ key: value })

## No Return
- Returns `undefined`
- Syntax:
  () => {}

## Returning Functions
- Supports closures
- Syntax:
  x => y => x + y

## Async Return
- Always returns a Promise
- Syntax:
  async () => value