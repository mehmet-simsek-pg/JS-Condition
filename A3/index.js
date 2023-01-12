const num1 = Number(prompt("Enter first number: "));
const num2 = Number(prompt("Enter second number: "));
const num3 = Number(prompt("Enter third number: "));

let max = Math.max(num1, num2, num3);
let min = Math.min(num1, num2, num3);
let sum = num1 + num2 + num3;
let multiply = num1 * num2 * num3;

console.log(`
 max : ${max},
 min : ${min},
 sum : ${sum},
 multiply : ${multiply}`);
