// 1. Create parameterized method/function to multiply 3 numbers
function multiplyThreeNumbers(a, b, c) {
  return a * b * c;
}
const result1 = multiplyThreeNumbers(2, 3, 4);
console.log("Multiplication Result:", result1); // Output: Multiplication Result: 24

// 2. create parameterized method to divide 2 numbers
function divide(num1, num2) {
    if (num2 === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return num1 / num2;
}
const result2 = divide(10, 2);
console.log("Division Result:", result2); //Output: Division Result: 5
