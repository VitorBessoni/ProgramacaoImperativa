// Micro Desafio 
// Criar um array que tem nomes de produtos para compra 
// Join, Pop, Push, Shift, Unshift 

let produtosCompras = ["Arroz", "Feijão", "Suco"];
console.log(produtosCompras); 

//Usando o Join - junta elementos de um array 
let junta = produtosCompras.join();
console.log(junta);
console.log(produtosCompras);

//Usando Pop - elimina o ultimo elemnteo de um array
let eliminaUltimo = produtosCompras.pop();
console.log(eliminaUltimo);
console.log(produtosCompras);

// Usando Push - adiciona elemento no final de um array
let addFinal = produtosCompras.push("macarrao");
console.log(addFinal);
console.log(produtosCompras);

// Usando o Shift - tira o primeiro elemento do array
let tiraPrimeiro = produtosCompras.shift();
console.log(tiraPrimeiro); 
console.log(produtosCompras);

//Usando o Unshift - adiciona elemento no inicio do array 
let addInicio = produtosCompras.unshift("Farinha");
console.log (addInicio);
console.log(produtosCompras);

