/* adalah operator yang bisa dilakukan untuk mengecek apalah sebuah
    property ada di dalam objek atau tidak
    jika ada di Object, maka hasilnya true jika tidak false
    in juga bisa digunakan untuk mengecek index di Array

*/

// Note: jadi walaupun property / index
// nya undefined atau null. tetap dianggap ada

const person = {
  firstName: "mio",
  middleName: "akiyama",
  lastName: undefined,
};

const names = [null, "akiyama", null];

const result = "firstName" in person; // true

if ("lastName" in person) {
  console.log(`Hello ${person.lastName}`);
} else {
  console.log("ngeh");
}
