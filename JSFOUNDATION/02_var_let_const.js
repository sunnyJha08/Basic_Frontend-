// var, let, const - Declaring variables

// var is function-scoped and can be redeclared
var x = 10;
var x = 20; // No error
console.log("var x:", x);

// let is block-scoped and cannot be redeclared in the same block
let y = 30;
// let y = 40; // ❌ Error: already declared
y = 35; // ✅ Reassignment allowed
console.log("let y:", y);

// const is block-scoped and cannot be reassigned or redeclared
const z = 50;
// z = 60;      // ❌ Error: reassignment not allowed
console.log("const z:", z);
