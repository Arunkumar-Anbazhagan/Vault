---
tag:
  - js
  - learning
  - edgecases
  - wierd
---

# JavaScript Weird Behaviors - Complete Notes

## Equality Coercion Nightmares
**`[] == false` but `[] != 0`**
```javascript
[] == false   // true (array → "" → 0 → false)
[] == 0       // true  
[] != 0       // true ← Loose vs strict inequality!
```
Array-to-string-to-number coercion creates impossible logic [web:31][web:33].

**`null == undefined` but `null === undefined` is false**
```javascript
null == undefined  // true
null === undefined // false
```
Only loose equality (`==`) treats them as equal [web:33].

## NaN Identity Crisis
**`NaN !== NaN`**
```javascript
NaN === NaN     // false
NaN == NaN      // false
isNaN(NaN)      // true
```
NaN is never equal to itself. Use `Number.isNaN()` [web:36].

## Math Edge Cases
**`Math.max() > Math.min()`**
```javascript
Math.max()     // -Infinity
Math.min()     // Infinity
Math.max() > Math.min()  // false
```
No args = extreme values [web:31].

**`parseInt()` surprises**
```javascript
parseInt("10px")  // 10
parseInt("010")   // 10 (not 10, octal in old JS)
parseInt("10.5")  // 10
```
String parsing ignores suffixes, radix matters [web:35].

## Numeric Weirdness
**Floating point precision**
```javascript
0.1 + 0.2 === 0.3  // false (0.30000000000000004)
0.1 + 0.2          // 0.30000000000000004
```
Binary can't represent 0.1 exactly [web:31].

**Boolean arithmetic**
```javascript
true + true + true       // 3
"false" == false         // false (string vs boolean)
!!"false"                // true (truthy string)
```
Booleans → 1/0, strings stay strings [web:31].

## Array & Object Quirks
**Default `sort()` is string-based**
```javascript
.sort()  //[1][2][3]
```
Numbers sorted lexicographically [web:35].

**Array length overflow**
```javascript
const arr = [];
arr = "hi";
arr.length  // 4294967295 (2^32-1 max)
arr = "test";  // silently fails
```
32-bit signed integer limit [web:33].

## `this` & Scope Confusion
**Lost `this` context**
```javascript
const obj = {
  name: "JS",
  say: function() { console.log(this.name); }
};
setTimeout(obj.say, 0);  // undefined
```
Callbacks lose object context [web:36].

## Type Detection Lies
**`typeof null`**
```javascript
typeof null  // "object" (since 1995 bug)
Array.isArray(null)  // false
```
Historical mistake never fixed [web:35].

## Constructor Return Override
**Objects override `new`**
```javascript
function Test() {
  this.a = 1;
  return { b: 2 };  // overrides 'this'!
}
new Test();  // { b: 2 }, not { a: 1 }
```
Constructor can return objects and replace `this` [web:33].

## Block Scope Gotchas (pre-ES6)
**`var` ignores blocks**
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);  // 3 3 3
}
```
`var` is function-scoped, not block-scoped [web:24].

## References
- [WTFJS GitHub](https://github.com/denysdovhan/wtfjs) [web:33]
- [GeeksforGeeks Weird JS](https://www.geeksforgeeks.org/javascript/most-five-weird-behavior-of-javascript/) [web:31]
- [Weird JS Behaviors](https://shivamv12.github.io/Weird-JS/) [web:35]