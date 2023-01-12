const month = prompt("Enter the month: ");

let monthNumber;

switch (month) {
  case "January":
    monthNumber = 1;
    break;
  case "Ferruary":
    monthNumber = 2;
    break;
  case "March":
    monthNumber = 3;
    break;
  case "April":
    monthNumber = 4;
    break;
  case "May":
    monthNumber = 5;
    break;
  case "June":
    monthNumber = 6;
    break;
  case "July":
    monthNumber = 7;
    break;
  case "August":
    monthNumber = 8;
    break;
  case "September":
    monthNumber = 9;
    break;
  case "October":
    monthNumber = 10;
    break;
  case "November":
    monthNumber = 11;
    break;
  case "December":
    monthNumber = 12;
    break;
  default:
    alert("Invalid month");
    break;
}

console.log(`${month} is on the ${monthNumber}th month of the year`);
