// Array.forEach = a callback function

const numbers = [10, 20, 30, 40, 50];
numbers.forEach(printNumbers);

function printNumbers(value, index, array) {
  console.log(value, index, array);
}
