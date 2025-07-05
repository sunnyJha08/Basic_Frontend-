// do-while-loop.js

// The 'do...while' loop is similar to the 'while' loop
// But it guarantees that the loop body will run at least once

// Syntax:
// do {
//     // code to be executed
// } while (condition);

let num = 1;

do {
  console.log("Do While Loop Iteration: " + num);
  num++; // Increment value
} while (num <= 5); // Condition is checked after code runs
