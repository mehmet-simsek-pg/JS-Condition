const num = Number(prompt("Enter your not here"));

if (num < 0 || num > 100) {
  console.error("Enter a number between 0 and 100");
} else if (num >= 0 && num <= 25) {
  console.log("FF");
} else if (num > 25 && num <= 45) {
  console.log("DD");
} else if (num > 45 && num <= 65) {
  console.log("CC");
} else if (num > 65 && num <= 75) {
  console.log("BB");
} else if (num > 75 && num <= 90) {
  console.log("BA");
} else {
  console.log("AA");
}
