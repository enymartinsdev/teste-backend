// // Manipulação de arquivos
// // Escreva uma função em NodeJS que receba a URL de um arquivo CSV
// // e retorne um array de objetos utilizando o cabeçalho do arquivo como propriedades.
const fs = require("fs");
const readline = require("readline");
const stream = fs.createReadStream("./file.csv");
const rl = readline.createInterface({ input: stream });

function jsonDataArray(array) {
  let headers = array[0].split(",");
  let jsonData = [];
  for (let i = 1, length = array.length; i < length; i++) {
    let row = array[i].split(",");
    let data = {};
    for (let x = 0; x < row.length; x++) {
      data[headers[x]] = row[x];
    }
    jsonData.push(data);
  }

  return jsonData;
}

let finalData = [];

rl.on("line", (row) => {
  finalData.push(row);
});

rl.on("close", () => {
  console.log(jsonDataArray(finalData));
});
