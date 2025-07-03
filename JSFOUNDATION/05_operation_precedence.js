// Operator precedence determines the order of operations

let result1 = 10 + 5 * 2; // Multiplication happens first
console.log("10 + 5 * 2 =", result1); // 20

let result2 = (10 + 5) * 2; // Parentheses override precedence
console.log("(10 + 5) * 2 =", result2); // 30

// Same with mixed types of operations
console.log(10 + 3 ** 2); // Exponent has higher precedence: 10 + 9 = 19
console.log((100 / 2) * 5); // Left-to-right: 50 * 5 = 250
