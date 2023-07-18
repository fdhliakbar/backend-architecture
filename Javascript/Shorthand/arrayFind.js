const pets = [
  { type: "Dog", name: "Max" },
  { type: "Cat", name: "Karl" },
  { type: "Dog", name: "Tommy" },
];

function findDog(name) {
  for (let i = 0; i < pets.length; i++) {
    if (pets[i].type === "Dog" && pets[i].name === name) {
      return pets[i]; // { type: 'Dog', name: 'Max' }
    }
  }
  return null;
}

// Shorthand
const pet = pets.find((pet) => pet.type === "Dog" && pet.name === "Karl");
console.log(findDog("Max"));
