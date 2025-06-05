// 1. Odd or Even?
let number = 7;
let result = number % 2 === 0 ? "Even" : "Odd";
console.log(`The number ${number} is ${result}`);

// 2. Do you have a Driving License?
let age = 13;
let ageForLicense = 18;
age === ageForLicense
  ? console.log("You can drive")
  : console.log("You cannot drive yet");

// 3. Calculate CTC with a Bonus
let salaryPerMonth = 12300;
let annualSalary = salaryPerMonth * 12;
let bonus = annualSalary * 0.2; //(20 / 100)
let ctcIs = annualSalary + bonus;
console.log("CTC", ctcIs);

// 4. Write a program for the Traffic Light Simulation.
let color = "red";
color === "green" ? console.log("Go") : console.log("Stop");

// 5. Create an Electricity Bill Calculator
let unitPrice = 150;
let month = 30;
let unitUse = 30;
let monthBill = unitUse * unitPrice;
console.log("Monthly bill", monthBill);
let annualBillWithOutDiscount = monthBill * 12;
console.log("Annual bill with out Discount", annualBillWithOutDiscount);
let discount = (20 / 100) * annualBillWithOutDiscount;
let annualBillWithDiscount = annualBillWithOutDiscount - discount;
console.log("Annual bill with 20% Discount", annualBillWithDiscount);

// 6. Leap Year Checker

let year = prompt("Give year to check year is 'Leap' year or Not");
year % 4 === 0
  ? console.log(`${year} is leap Year`)
  : console.log(`${year} is not leap year`); // also if you want to check century year like 1900 or 1800 you have to divide it by 400

// 7. Max of Three Numbers
let p = 20;
let q = 30;
let r = 3;
let maxNumber = p > q && p > r ? p : q > r ? q : r;
console.log(maxNumber);

// 8. Bitwise Doubling

let count = 5; // binary  101
let doubleCount = count << 1; // 1010 = 10
console.log(doubleCount);
