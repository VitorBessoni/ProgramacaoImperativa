// aula12-06/07/2021
// ex04Foreach.js 
// slice = fatiar
/* O método array.slice(), retorna os elementos selecionados 
da matriz, sintaxe: array.slice(inicio,fim) 
 */ 

/* slice(x, y):
  x - índice inicial, incluído ele próprio
  y - índice final, não incluído ele próprio -- para na porta */


const frutas = ['banana', 'laranja', 'limão', 'maça', 'manga'];
const citricas = frutas.slice(1,3); // pega uma fatia do array o primeiro é inclusivo e o segundo é exclusivo(para antes).
console.log(citricas);

