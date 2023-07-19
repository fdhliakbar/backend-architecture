/*******************************************

    Javascript has 8 Data Types
    1. String
    2. Number
    3. Bigint
    4. Boolean
    5. Undefined
    6. Null
    7. Symbol
    8. Object

    The Object Datatype
    The object data type can contain:

    1. An object
    2. An array
    3. A date
*******************************************/

// Object
const person = {
  firstName: "Muhamad",
  middleName: "Fadhli",
  lastName: "Akbar",
  age: 32,
  anime: "yes",
};

// Array
const numbers = [4, 7, 2, 6, 3];

// Date
const date = new Date("2023-07-19");

let number; // Now number is undefined
number = 10; // Now number is a number
number = "ten"; // Now number is a string value

// double quote
let islandName = '"Skyplea island" which is in one piece';

// Exponenntial Notation

let test1 = 1e2; // 100
let test2 = 1e1; // 10
let test3 = 10e2; // 0.10
let test4 = 92e-4; // 0.0092

for (let i = 1; i <= test1; i++) {
  if (i == 100) {
    console.log("Ends to ", i);
    console.log("Variable test4 result: ", test4);
  }
}

console.log(`Do you like anime? ${person.anime}`);
