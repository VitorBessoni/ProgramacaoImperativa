// ex09Flat.js
// Flat = plano 
/* Esse método é feito para "desembrulhar"  sub-arrays dentrp de array, ou seja, 
ele não modifica o array original*/

let numeros = [1,2,3,[4,5]];
console.log(numeros);
novoArray = numeros.flat(2);
console.log(novoArray); 
