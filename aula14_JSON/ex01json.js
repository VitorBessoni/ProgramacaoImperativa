// Aula 14 -- 16/07/2021
// troca de dados - formulário e servidor
// criação e consumo -utilizando api's
// persistência de dados em navegadores e servidores 
// formato de dados - padrão na web atualmente 
// json - não suporta comentários 


let dadosJson = '{"nome":"Vitor","sobrenome":"Bessoni","idade":22}';
//console.log(dadosJson);
// JSON- é um objeto nativo da biblioteca JavaScript 

// desserialização = parsing // (analise) conversão do Jason para um objeto JS
let dadosConvertidosJS = JSON.parse(dadosJson); // objeto literal  
// console.log (dadosConvertidosJS);
// console.log(dadosConvertidosJS.nome.toUpperCase());
// console.log(dadosConvertidosJS.sobrenome);
// console.log(dadosConvertidosJS.idade);

//serialização cria um arquivo no formato JSON 
let objetoConvertidoJson = JSON.stringify(dadosConvertidosJS);
console.log(objetoConvertidoJson);






