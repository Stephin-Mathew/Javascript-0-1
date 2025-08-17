let randomNum = (Math.random() * 6) + 1;
console.log(randomNum);

const min = 50;
const max = 100;
let num = Math.floor(Math.random() * (max - min)) + min;
console.log(num);


/*
Explanation of Code:

1. let randomNum = (Math.random() * 6) + 1;
   - Math.random() generates a random decimal between 0 (inclusive) and 1 (exclusive).
   - Multiplying by 6 scales it to a range of 0 → 6 (exclusive).
   - Adding 1 shifts the range to 1 → 7 (exclusive).
   - So randomNum will be between 1 and 6 (decimal).
   - Example: 3.4821, 5.99, etc.

2. console.log(randomNum);
   - Prints the generated random decimal number to the console.

---

3. const min = 50;
   const max = 100;

4. let num = Math.floor(Math.random() * (max - min)) + min;
   - Math.random() * (max - min) → generates a decimal between 0 → (100 - 50) = 50.
   - Math.floor(...) → converts it to an integer between 0 → 49.
   - Adding min (50) shifts the range → 50 → 99.
   - So num will be a random integer between 50 and 99 (inclusive of 50, exclusive of 100).

5. console.log(num);
   - Prints the random integer between 50 and 99.
*/
