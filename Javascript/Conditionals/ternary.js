/*
    Ternary Operators
*/
let mioAges = 20;
const answer = mioAges > 10 ? "Greather than 10" : "Less than 10";
const secondAnswer =
  mioAges > 10
    ? "Greather than 10"
    : mioAges < 5
    ? "Less than 5"
    : "between 5 and 10";

//console.log(answer);
// end ternary operation

let variable1;
let variable2 = variable1 || "bar";
//console.log(variable2 === "bar");

variable1 = "foo";
variable2 = variable1 || "bar";
//console.log(variable2);

// end ww

likeJavascript = "yes";

//if (likeJavascript == true) console.log("you right");

//if (likeJavascript) console.log("you right");

const cars = ["lambo", "buggati", "mclaren", "mazda", "bmw"];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

for (let car of cars) {
  console.log(cars[car]);
}
