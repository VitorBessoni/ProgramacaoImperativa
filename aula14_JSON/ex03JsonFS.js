// Aula 14 =JSON -- 16/07/2021 file system

const fs = require('fs');
let frutas = '{"Fruta":"banana","Preço":8.50,"Tipo":["prata","maça","nanica","terra"],"Origem":"Brasil"}';

fs.writeFileSync('teste.txt',frutas);
// //no terminal você cria dentro da pasta que você está (node ex03JsonFS.js)
// ./aula14_JSON/teste.txt - segunda forma é colocar a pasta que você está que ele cria sem ser no terminal

//ler o arquivo 
let lerJson = fs.readFileSync('teste.txt','utf-8'); // codificação de caracteres universais -conversão
//console.log(lerJson);

//converter objetoJSON para objetoJS
let converterLerJson = JSON.parse(lerJson);
console.log(converterLerJson);


