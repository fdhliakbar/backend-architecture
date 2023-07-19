let number = 3;
let count = 1;

for (let i = 0; i <= number; i++) {
  if (i == 3) {
    console.log(i);
  }
}

for (; count <= number; count++) {
  console.log(count);
}

for (; count <= number; ) {
  console.log(count);
  count++;
}

/* The foor in loop

  for (key in object)

  for (variable in array)

*/

// while loop
while (count <= number) {
  console.log(count);
  count++;
}

for (let i = 1; i < 100; i++) {
  if (i == 10) {
    continue;
  }
  if (i == 50) {
    break;
  }
}
