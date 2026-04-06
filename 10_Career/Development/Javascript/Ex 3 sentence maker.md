
**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should declare the following variables using `let`:    
    - `adjective`
    - `noun`
    - `verb`
    - `place`
    - `adjective2`
    - `noun2`
2. You should assign the above variables some string values of your choice.    
3. You should declare a `firstStory` variable.    
4. You should use the following story template to create the first story and assign it to the `firstStory` variable: `"Once upon a time, there was a(n) [adjective] [noun] who loved to eat [noun2]. The [noun] lived in a [place] and had [adjective2] nostrils that blew fire when it was [verb]."`;    
5. You should output your first story to the console using the message `"First story: [firstStory]"`.    
6. You should assign new values to your `adjective`, `noun`, `verb`, `place`, `adjective2`, and `noun2` variables.    
7. You should declare a `secondStory` variable.    
8. Create another story using the same template and assign it to the `secondStory` variable.    
9. You should output your second story to the console using the message `"Second story: [secondStory]"`.
```js
let adjective, noun, verb, place, adjective2, noun2;

adjective = "mystical";
noun = "dragon";
verb = "dancing";
place = "floating castle";
adjective2 = "gigantic";
noun2 = "golden apples";

// Note: Ensure it says "a(n)" and has NO space at the very beginning
let firstStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + ". The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";

// Note: "story" must be lowercase
console.log("First story: " + firstStory);

adjective = "mysterious";
noun = "explorer";
verb = "flying";
place = "underwater city";
adjective2 = "glowing";
noun2 = "ancient artifacts";

let secondStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + ". The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";

console.log("Second story: " + secondStory);
```
## output:
```bash
// running tests
// tests completed
// console output
First story: Once upon a time, there was a(n) mystical dragon who loved to eat golden apples. The dragon lived in a floating castle and had gigantic nostrils that blew fire when it was dancing.
Second story: Once upon a time, there was a(n) mysterious explorer who loved to eat ancient artifacts. The explorer lived in a underwater city and had glowing nostrils that blew fire when it was
```