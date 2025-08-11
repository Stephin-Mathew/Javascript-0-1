let students = 63;
students = students + 10;
// + , - , * , / , % , **
students -= 20;
students++;

/*---precendence---
  from left to right
  1) Paranthesis
  2) exponent
  3) multiplication & division & modulo
  4) addition and substraction
*/

console.log(students);




/*
Explanation of Code:

1. let students = 63;
   - Declares a variable students and assigns it the value 63.

2. students = students + 10;
   - Increases the value of students by 10 (now 73).

3. // + , - , * , / , % , **
   - Common arithmetic operators:
     +  → addition
     -  → subtraction
     *  → multiplication
     /  → division
     %  → modulo (remainder)
     ** → exponentiation (power)

4. students -= 20;
   - Shortcut for: students = students - 20 (now 53).

5. students++;
   - Increments the value of students by 1 (now 54).

6. /* ---precedence--- 
      from left to right:
      1) Parentheses
      2) Exponent (**)
      3) Multiplication (*), Division (/), Modulo (%)
      4) Addition (+) and Subtraction (-)
   */
   - Explains operator precedence — determines which operations happen first in an expression.

7. console.log(students);
   - Outputs the final value of students (54) to the console.
*/
