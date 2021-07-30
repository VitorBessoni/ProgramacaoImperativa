let numeros = [5,3,8,2,9,5,4,10,23,5,2];
let resultado = []; // colocando o colchete disse que será um array
// for(i=0; i<numeros.length; i++){
//     resultado.push(numeros[i]*2);
// }
// console.log(resultado)

numeros.forEach(elemento => resultado.push(elemento*2));
console.log(resultado);
