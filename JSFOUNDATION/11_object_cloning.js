// OBJECT CLONING — Shallow vs Deep Copy

// Original object
let original = {
  name: "Sunny",
  age: 21,
  address: {
    city: "Mumbai",
    pin: 400001,
  },
};

// 🔁 Shallow Copy using Object.assign()
let copy1 = Object.assign({}, original);

// 🔁 Shallow Copy using Spread Operator
let copy2 = { ...original };

// Modifying top-level property
copy1.name = "John";
console.log("Original name:", original.name); // Still "Sunny" – OK

// Modifying nested object
copy2.address.city = "Delhi";
console.log("Original city:", original.address.city); // ❌ Changed! Shallow copy shares nested references

// ✅ Deep Copy using JSON methods (doesn’t work with functions, symbols, etc.)
let deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.address.city = "Pune";
console.log("Original city after deep copy:", original.address.city); // ✅ "Delhi" remains unaffected
