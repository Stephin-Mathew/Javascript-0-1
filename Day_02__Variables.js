let x; //declaration
x = 100; //assignmnet
let y = 1000; //both
console.log(`The value of x and y is ${x} and ${y}`)

console.log(typeof y);

let fullName = "Peter "
let isAlive = true;
document.getElementById("new").textContent = `Is ${fullName} Alive : ${isAlive} `




/*
Explanation of Code:

1. let x; 
   - Declares a variable named x without assigning a value yet (undefined by default).

2. x = 100;
   - Assigns the value 100 to the variable x.

3. let y = 1000;
   - Declares a variable y and assigns the value 1000 at the same time.

4. console.log(`The value of x and y is ${x} and ${y}`);
   - Uses a template literal (backticks) to insert variable values directly into the string.
   - Prints: The value of x and y is 100 and 1000

5. console.log(typeof y);
   - Logs the data type of y to the console (in this case, "number").

6. let fullName = "Peter "
   - Declares a variable fullName and assigns it a string value.

7. let isAlive = true;
   - Declares a variable isAlive and assigns it the boolean value true.

8. document.getElementById("new").textContent = `Is ${fullName} Alive : ${isAlive} `;
   - Finds the HTML element with id="new".
   - Updates its displayed text to: "Is Peter Alive : true"
*/
