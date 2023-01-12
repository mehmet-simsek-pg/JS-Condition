const input = prompt(
  "Enter F for convert fahrenheit to celsius or Enter C for convert celsius to fahrenheit"
);

const degree = Number(prompt("Enter the degree"));
let result;

switch (input) {
  case "F":
    result = (degree - 32) / 1.8;
    console.log(`Result = ${result} celsius`);
    break;
  case "C":
    result = degree * 1.8 + 32;
    console.log(`Result = ${result} fahrenheit`);
    break;
  default:
    console.log("Invalid input");
    break;
}
