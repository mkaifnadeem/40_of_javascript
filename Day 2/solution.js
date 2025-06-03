//Task 1: Declare variables for a person’s name, age,
//      isStudent status, and favorite programming language.

let name = "Alex";
let age = 25;
let isStudent = true;
const favoriteLanguage = "JavaScript";

//Task 2: Print the values to the console.

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Favorite Programming Language:", favoriteLanguage);

//Task 3: Try reassigning values to let and const
//      variables and observe errors.

// Reassigning let variables - works fine
name = "Jordan";
age = 30;
isStudent = false;

console.log("After Reassignment:");
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

// Reassigning const variable - causes error
// Uncommenting the next line will throw an error
// favoriteLanguage = "Python"; // ❌ TypeError: Assignment to constant variable.

//Task 4: Create an object and an array, assign
//      them to new variables, modify, and observe changes.

// Create an object and an array
const person = { name: "Sam", age: 22 };
const languages = ["JavaScript", "Python", "C++"];

// Assign to new variables
const anotherPerson = person;
const otherLanguages = languages;

//After Reassigning

console.log(anotherPerson);
console.log(otherLanguages);
