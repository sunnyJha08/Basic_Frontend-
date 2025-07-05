// while-loop.js

// The 'while' loop is used when the number of iterations is not known in advance
// It continues to run as long as the condition is true

// Syntax:
// while (condition) {
//     // code to be executed
// }

let count = 1; // Initialization

while (count <= 5) {
  // Loop will run while count is less than or equal to 5
  console.log("While Loop Iteration: " + count);
  count++; // Increase count to avoid infinite loop
}
