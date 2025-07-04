// In JavaScript, non-primitive data types are also called **reference types**.
// These types are more complex and can store collections or relationships of data.
// Unlike primitive types, **non-primitive types are mutable and stored by reference**.

// JavaScript has three main non-primitive (reference) data types:
// 1. Object
// 2. Array
// 3. Function

// ✅ 1. Object
// An object is a collection of key-value pairs

let person = {
  name: "Sunny",
  age: 21,
  isStudent: true,
};

console.log("Person Object:", person);
console.log("Access name:", person.name); // Dot notation
console.log("Access age:", person["age"]); // Bracket notation

// Add or modify properties
person.city = "Mumbai";
person.age = 22;
console.log("Updated person:", person);

// Objects are passed by reference
let anotherPerson = person;
anotherPerson.name = "John"; // This will also change `person.name`
console.log("Original person after change:", person.name); // "John"

// ✅ 2. Array
// Arrays are ordered collections of items (like lists)

let fruits = ["apple", "banana", "cherry"];
console.log("Fruits array:", fruits);
console.log("First fruit:", fruits[0]); // Access by index (starts at 0)

// Modify elements
fruits[1] = "orange";
console.log("Updated fruits:", fruits);

// Add new elements
fruits.push("grape"); // Add at the end
console.log("After push:", fruits);

// Arrays are objects under the hood
console.log("Type of fruits:", typeof fruits); // "object"
console.log("Is array?", Array.isArray(fruits)); // true

// Arrays are also passed by reference
let basket = fruits;
basket[0] = "mango";
console.log("Fruits after modifying basket:", fruits); // "mango" is now first element

// ✅ 3. Function
// Functions are reusable blocks of code, and in JavaScript, functions are also objects

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Sunny")); // "Hello, Sunny!"
console.log("Type of greet:", typeof greet); // "function"

// Functions can also be stored in variables (Function expressions)
let sayBye = function (name) {
  return `Bye, ${name}`;
};

console.log(sayBye("Sunny"));

// Functions can have properties like objects
sayBye.description = "This function says goodbye";
console.log("Function description:", sayBye.description);

// ✅ Summary of Differences Between Primitive and Non-Primitive:

// | Feature               | Primitive              | Non-Primitive        |
// |-----------------------|------------------------|----------------------|
// | Stored by             | Value                  | Reference            |
// | Mutability            | Immutable              | Mutable              |
// | Type result (typeof)  | string, number, etc.   | object/function      |
// | Examples              | string, number, etc.   | object, array, function |

// ✅ Quick Type Checks
console.log(typeof person); // "object"
console.log(typeof fruits); // "object"
console.log(typeof greet); // "function"
console.log(Array.isArray(fruits)); // true

/* 🔍 Key Points Recap:
Objects store related data with keys.
Arrays are special objects for ordered lists.
Functions are first-class objects (can be stored, passed, modified).
All non-primitive types are mutable and passed by reference. */