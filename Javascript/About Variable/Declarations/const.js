const PI = 3.141592653589793;

/*
  Constant Arrays
*/

const fruits = ["lemon", "apple", "orange", "pear", "banana"];

// you can change an element
fruits[4] = "strawberry";

// you can add an element
fruits.push("watermelon");

//console.log(fruits[4]);

for (let fruit in fruits) {
  console.log(fruits[fruit]);
}

/*
  Constant Objects
*/

const car = { type: "Mazda", model: "210f", color: "smoke gray" };

// you can change an property
car.color = "black";

// you can add a property
car.owner = "Mio";

for (let n in car) {
  console.log(car[n]);
}
