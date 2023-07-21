const enter = confirm("Anda yakin mau masuk ?");
if (enter) {
  const name = prompt("Siapa nama anda? ");
} else {
  alert("bye");
}

// or

let firstName;
const popupResult = enter
  ? (firstName = prompt("Siapa nama anda? "))
  : alert("Bye-bye");
