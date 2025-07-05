// for-in-loop.js

// The 'for...in' loop is used to iterate over the keys (property names) of an object

// Syntax:
// for (key in object) {
//     // code to be executed
// }

const person = {
  name: "Alice",
  age: 25,
  city: "London",
};

for (const key in person) {
  // 'key' gets the property name (like 'name', 'age', etc.)
  // 'person[key]' accesses the corresponding value
  console.log(key + ": " + person[key]);
  // Output: name: Alice, age: 25, city: London
}
