// JavaScript has 7 primitive data types. These are data types that are **not objects**
// and have no methods. They represent single values and are immutable.

// ✅ 1. String
// A sequence of characters, used to represent text.
let name = "Sunny";
console.log("Type of name:", typeof name); // "string"

// You can use single, double, or backtick (`) quotes.
let greeting1 = "Hello";
let greeting2 = "World";
let greeting3 = `Hi, ${name}`; // Template literals with interpolation
console.log(greeting3); // "Hi, Sunny"

// ✅ 2. Number
// Represents both integers and floating-point numbers
let age = 21; // Integer
let temperature = 36.6; // Floating-point number
console.log("Type of age:", typeof age); // "number"
console.log("Type of temperature:", typeof temperature); // "number"

// Special numeric values
console.log("Infinity:", Infinity); // Infinity
console.log("-Infinity:", -Infinity); // -Infinity
console.log("NaN (Not a Number):", NaN); // NaN

// ✅ 3. Boolean
// Represents true or false
let isLoggedIn = true;
let isVerified = false;
console.log("Type of isLoggedIn:", typeof isLoggedIn); // "boolean"

// Often used in conditions:
if (isLoggedIn) {
  console.log("User is logged in");
} else {
  console.log("Please log in");
}

// ✅ 4. Undefined
// A variable that has been declared but not assigned a value
let score;
console.log("score:", score); // undefined
console.log("Type of score:", typeof score); // "undefined"

// ✅ 5. Null
// Represents the intentional absence of any value or object
let user = null;
console.log("user:", user); // null
console.log("Type of user:", typeof user); // "object" ← This is a known JavaScript quirk!

// ✅ 6. Symbol (ES6)
// A unique and immutable primitive value, often used as object keys
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log("Symbols equal?", sym1 === sym2); // false (symbols are always unique)
console.log("Type of sym1:", typeof sym1); // "symbol"

// ✅ 7. BigInt (ES2020)
// For integers beyond the safe limit of Number (2^53 - 1)
let bigNum = 1234567890123456789012345678901234567890n;
console.log("BigInt value:", bigNum);
console.log("Type of bigNum:", typeof bigNum); // "bigint"

// ⚠ Note: BigInt and Number cannot be mixed in operations directly
// console.log(bigNum + 5); // ❌ Error
console.log(bigNum + 10n); // ✅ OK with another BigInt

// ✅ Summary
console.log("\n--- Summary of Primitive Types ---");
console.log("String:", typeof "abc");
console.log("Number:", typeof 123);
console.log("Boolean:", typeof true);
console.log("Undefined:", typeof undefined);
console.log("Null (typeof quirk):", typeof null);
console.log("Symbol:", typeof Symbol("x"));
console.log("BigInt:", typeof 12345678901234567890n);

// ✅ Why primitive types are important:
// - They are passed by value (not by reference like objects).
// - They are immutable — any operation creates a new value.
