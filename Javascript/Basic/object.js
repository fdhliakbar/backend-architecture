const person = {
  name: "araragi",
  address: "DC",
  age: 52,
};

console.table(person);

delete person.address;

console.table(person);
console.log(`Nama : ${person.name}`);
console.log(`Umur : ${person.age}`);
