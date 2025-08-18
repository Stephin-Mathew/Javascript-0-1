let age = 0;
if (age == 0) {
    console.log("You are not born");

}
else if (age < 18) {
    console.log("you are not old enough");
}
else {
    console.log("yeah you can get in ");

}

let isStudent = true;
if (isStudent) {
    console.log("You are a student");
}


/*
Explanation of Code:

1. let age = 0;
   - Declares a variable age with value 0.

2. if (age == 0) {
       console.log("You are not born");
   }
   - If age is 0, it prints "You are not born".

3. else if (age < 18) {
       console.log("you are not old enough");
   }
   - If age is less than 18 (but not 0), it prints "you are not old enough".

4. else {
       console.log("yeah you can get in");
   }
   - If age is neither 0 nor less than 18 (so age ≥ 18), it prints "yeah you can get in".

---

5. let isStudent = true;
   - Declares a boolean variable isStudent with value true.

6. if (isStudent) {
       console.log("You are a student");
   }
   - If isStudent is true, it prints "You are a student".
   - If isStudent were false, nothing would print here.
*/
