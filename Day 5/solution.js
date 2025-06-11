//// Task 1: Generate a Pyramid Pattern using Nested Loop as it is shown below

let star = "";
for (let i = 1; i < 6; i++) {
  star = "";
  for (let e = 0; e < i; e++) {
    star += " *";
  }
  console.log(star);
}

//// Task 2: Create Multiplication Table (Using for loop)

let num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}

/* you can make it more complex by get the limit(10) and the table
number(5) from user */

//// Task 3: Find the summation of all odd numbers between 1 to 500 and print them on teh console log.

let sumOfOddNum = null;
for (let i = 1; i <= 500; i++) {
  if (i % 2 !== 0) {
    sumOfOddNum += i;
  }
}
console.log(sumOfOddNum, "Sum of Odd number between 1 and 500 ");

//// Task 4: Skipping Multiples of 3

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i, "number between  1 and 20 that are not multiple of three(3)");
}

//// Task 5: Reverse Digits of a Number (Using while loop)

let newNum = 6789;
let reversedNum = 0;

while (newNum !== 0) {
  let digit = newNum % 10; // Get last digit
  reversedNum = reversedNum * 10 + digit; // Append digit
  newNum = Math.floor(newNum / 10); // Remove last digit
}

console.log(reversedNum);

//// Task 6: Write your understanding on the differences between for, while, and do-while loop. Create their flow charts.

//flow chart are on html page (image folder)
// we use "for" when we know how may time loop is going to iterate
// we use "while" when we don't know how may time loop is going to iterate
// we use "do-while loop when we want out loop to iterate one time no matter the condition is true or false"
