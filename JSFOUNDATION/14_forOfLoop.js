// for-of-loop.js

// The 'for...of' loop is used to iterate over iterable values like arrays, strings, sets, etc.

// Syntax:
// for (variable of iterable) {
//     // code to be executed
// }

const colors = ["red", "green", "blue"];

for (const color of colors) {
  // 'color' gets each value from the 'colors' array
  console.log("Color: " + color);
  // Output: red, green, blue
}
