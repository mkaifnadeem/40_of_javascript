//// 1. What will be the output of this code snippet and why?

let day = "Monday";

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}

// the answer will be default because "monday"
// is different then "Monday", M is capital in day

////2. Build an ATM Cash Withdrawal System

let bankBalance = 1000;
let withDrawAmount = 900; //prompt("How much you want to withdraw");
if (withDrawAmount <= bankBalance) {
  console.log("withDraw Successful amount:", withDrawAmount);
} else {
  console.log("invalid amount");
}

//// 3. Build a Calculator with switch-case
let numOne = 20;
let numTwo = 10;
let operator = "+"; //prompt("Enter the operation(+, -, , /, %)");
switch (operator) {
  case "+":
    console.log(numOne + numTwo);
    break;
  case "-":
    console.log(numOne - numTwo);
    break;
  case "*":
    console.log(numOne * numTwo);
    break;
  case "/":
    console.log(numOne / numTwo);
    break;
  case "%":
    console.log(numOne % numTwo);
    break;
  default:
    console.log("invalid operator");
    break;
}

////4. Pay for your movie ticket
let age = "22";
let ticketPriceForChild = "3$";
let ticketPriceForAdult = "10$";
let ticketPriceForSeniors = "8$";
if (age < 18) {
  console.log(`Price of ticket ${ticketPriceForChild}.`);
} else if (age >= 12 && age <= 60) {
  console.log(`Price of ticket ${ticketPriceForAdult}.`);
} else {
  console.log(`Price of ticket ${ticketPriceForSeniors}.`);
}

////5. Horoscope Sign Checker
let monthOfBirth = "March";
let normalizeMonthName = monthOfBirth.toLowerCase();
switch (normalizeMonthName) {
  case "december":
  case "january":
    console.log("Capricorn"); // For December and January
    break;
  case "february":
  case "march":
    console.log("Aquarius"); // For February and March
    break;
  case "april":
  case "may":
    console.log("Aries"); // For April and May
    break;
  case "june":
  case "july":
    console.log("Taurus"); // For June and July
    break;
  case "august":
  case "september":
    console.log("Gemini"); // For August and September
    break;
  case "october":
  case "november":
    console.log("Cancer"); // For October and November
    break;
  default:
    console.log("Please enter a valid month name.");
}

//// 6. Which Triangle?
sideA = "10cm";
sideB = "12cm";
sideC = "10cm";

if (sideA === sideB && sideB === sideC) {
  console.log("All sides equal is called, Equilateral Triangle.");
} else if (sideA === sideB || sideB === sideC || sideC === sideA) {
  console.log("Two sides equal is called, Isosceles Triangle.");
} else {
  console.log("All sides different is called, Scalene Triangle.");
}
