let count = 1;
let n = 0;
let numbers = [5, 2, 3, 1, 7];

for (let i = 1; i < 10; i++) {
  if (i == 5) {
    //console.log(i);
    break;
  }
}

for (let i = 1; i <= 3; i++) {
  console.log(i);
  for (let j = 1; j <= 2; j++) {
    console.log(" ", j);
  }
}

for (let n in numbers) {
  console.log(numbers[n]);
}

for (; numbers[n]; ) {
  console.log(numbers[n]);
  n++;
}

while (count <= 5) {
  if (count == 3) {
    continue;
  }
  count++;
}

do {
  console.log(count);
  count++;
} while (count <= 3);
