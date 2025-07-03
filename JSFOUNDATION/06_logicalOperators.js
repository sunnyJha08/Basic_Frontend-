// Logical Operators: AND (&&), OR (||), NOT (!)

let isLoggedIn = true;
let isAdmin = false;

console.log("AND:", isLoggedIn && isAdmin); // false
console.log("OR:", isLoggedIn || isAdmin); // true
console.log("NOT isAdmin:", !isAdmin); // true

// Use case example:
let age = 18;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("You are allowed to enter.");
} else {
  console.log("Access denied.");
}
