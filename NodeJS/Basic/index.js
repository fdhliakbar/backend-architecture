const http = require("http");
const rupiah = require(`rupiah-format`);
const fs = require("fs");
const os = require("os");
const host = "localhost";
const port = 3002;

const server = http.createServer(function (request, response) {
  const nama = "Muahmad Fadhli Akbar";
  let uang = 12000;
  let jajan = 5000;
  let sisa = uang - jajan;

  uang = rupiah.convert(uang);
  jajan = rupiah.convert(jajan);
  sisa = rupiah.convert(sisa);

  fs.appendFile("sisauang.txt", sisa, () => {
    console.log("data uang berhasil di simpan");
  });

  const sisaRam = os.freemem();
  const jumlahCPU = os.cpus();

  function chekcCPU() {
    let myCPU = [];
    jumlahCPU.map((cpu, i) => {
      myCPU.push(cpu.model);
    });
    return myCPU;
  }

  console.log(chekcCPU());

  const hasil = `halo nama saya ${nama}. Saya jajan sebanyak ${jajan}, uang saya tadinya ${uang} sekarang menjadi sisa ${sisa}.
  \nSisa ram saya : ${sisaRam}
  \nJumlah CPU di laptop saya : ${jumlahCPU}`;

  response.end(hasil);
});

server.listen(port, host, function () {
  console.log(`Server menyala di ${host}:${port}`);
});
