const http = require("http");
const rupiah = require(`rupiah-format`);
const host = "localhost";
const port = 3002;

const server = http.createServer(function (request, response) {
  const nama = "Muahmad Fadhli Akbar";
  const uang = 12000;
  const jajan = 5000;
  const sisa = uang - jajan;

  const sisaRupiah = rupiah.convert(sisa);

  const hasil = `halo nama saya ${nama}. Saya jajan sebanyak ${jajan}, uang saya tadinya ${uang} sekarang menjadi sisa ${sisaRupiah}. 🤣`;

  response.end(hasil);
});

server.listen(port, host, function () {
  console.log(`Server menyala di ${host}:${port}`);
});
