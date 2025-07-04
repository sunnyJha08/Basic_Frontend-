// ARRAYS IN JAVASCRIPT — In-Depth Explanation

// ✅ 1. What is an array?
// An array is an ordered collection of items.
// It can store elements of any type — numbers, strings, objects, even functions.

let numbers = [10, 20, 30, 40];
let mixed = [1, "hello", true, null, { key: "value" }, [100, 200]];

console.log("Numbers:", numbers);
console.log("Mixed array:", mixed);

// ✅ 2. Accessing array elements
console.log("First element:", numbers[0]); // 10
console.log("Last element:", numbers[numbers.length - 1]); // 40

// ✅ 3. Modifying elements
numbers[1] = 25;
console.log("Modified numbers:", numbers); // [10, 25, 30, 40]

// ✅ 4. Array length
console.log("Length of array:", numbers.length); // 4

// ✅ 5. Adding and removing elements
let fruits = ["apple", "banana"];

// Push → Add to the end
fruits.push("cherry");
console.log("After push:", fruits); // ["apple", "banana", "cherry"]

// Pop → Remove from the end
let lastFruit = fruits.pop();
console.log("After pop:", fruits); // ["apple", "banana"]
console.log("Removed:", lastFruit); // "cherry"

// Unshift → Add to the beginning
fruits.unshift("mango");
console.log("After unshift:", fruits); // ["mango", "apple", "banana"]

// Shift → Remove from the beginning
let firstFruit = fruits.shift();
console.log("After shift:", fruits); // ["apple", "banana"]
console.log("Removed:", firstFruit); // "mango"

// ✅ 6. Looping through arrays

let animals = ["cat", "dog", "cow"];

// Using for loop
for (let i = 0; i < animals.length; i++) {
  console.log(`Animal ${i}:`, animals[i]);
}

// Using for...of loop
for (let animal of animals) {
  console.log("Animal:", animal);
}

// Using forEach()
animals.forEach((animal, index) => {
  console.log(`Animal at ${index}: ${animal}`);
});

// ✅ 7. Common Array Methods

let scores = [90, 80, 70, 60];

// map → creates a new array by transforming each element
let doubled = scores.map((score) => score * 2);
console.log("Doubled scores:", doubled);

// filter → creates a new array with elements that match a condition
let highScores = scores.filter((score) => score > 75);
console.log("High scores:", highScores);

// reduce → reduces the array to a single value
let total = scores.reduce((sum, score) => sum + score, 0);
console.log("Total score:", total);

// includes → check if an element exists
console.log("Includes 80?", scores.includes(80)); // true

// indexOf → find position of element
console.log("Index of 70:", scores.indexOf(70)); // 2

// slice → returns part of the array without modifying original
let topTwo = scores.slice(0, 2);
console.log("Top 2 scores:", topTwo);

// splice → removes/replaces/adds elements (modifies original)
scores.splice(2, 1); // Removes 1 element at index 2
console.log("After splice:", scores);

// sort → sorts array (modifies original)
let unsorted = [5, 3, 9, 1];
unsorted.sort(); // Default sort as strings
console.log("Default sort:", unsorted); // [1, 3, 5, 9] (actually [1, 3, 5, 9] because numbers < 10)

let correctedSort = unsorted.sort((a, b) => a - b); // Numeric sort
console.log("Numerically sorted:", correctedSort);

// reverse
let reversed = unsorted.reverse();
console.log("Reversed:", reversed);

// ✅ 8. Nested Arrays

let matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log("Element at [1][1]:", matrix[1][1]); // 4

// ✅ 9. Array Destructuring

let [a, b, c = 0] = [100, 200];
console.log("a:", a); // 100
console.log("b:", b); // 200
console.log("c (default):", c); // 0

// ✅ 10. Arrays are objects

console.log("Type of array:", typeof numbers); // "object"
console.log("Is array?", Array.isArray(numbers)); // true

// ✅ Summary
// Arrays in JavaScript are powerful, flexible, and support a wide range of operations.
// Use them to manage ordered collections of data of any type.
