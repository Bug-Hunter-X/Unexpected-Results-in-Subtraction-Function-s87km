function myFunction(a, b) {
  // Check for NaN or Infinity
  if (isNaN(a) || isNaN(b) || a === Infinity || b === Infinity || a === -Infinity || b === -Infinity) {
    return "Invalid input";
  }
  return a - b;
}

console.log(myFunction(5, 10)); // Output: -5
console.log(myFunction(10, 5)); // Output: 5
console.log(myFunction(Infinity, 5)); //Output: Invalid input
console.log(myFunction(5, NaN)); //Output: Invalid input