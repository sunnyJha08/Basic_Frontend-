// break-continue.js

// 'break' is used to exit a loop early
// 'continue' skips the current iteration and moves to the next one

console.log("Using break:");
for (let i = 1; i <= 5; i++) {
  if (i === 3) break; // Stops loop when i equals 3
  console.log(i); // Output: 1, 2
}

console.log("Using continue:");
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // Skips iteration when i equals 3
  console.log(i); // Output: 1, 2, 4, 5
}
