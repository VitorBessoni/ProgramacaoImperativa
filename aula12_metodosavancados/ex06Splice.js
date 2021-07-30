//ex06Splice.js
// Splice = emendar
// O método array.splice(), serve para remover e adicionar elementos de um array 
//array.splice(inicio,quantidade,item1,item2, ...);
//quantidade: opcional -número inteiros a eliminar do array. 
// Itens:

const frutas = ['banana', 'laranja', 'limão', 'maça', 'manga'];
console.log(frutas);


frutas.splice(2,0,"mamão", "kiwi"); 

/* console.log("Lista com adição: " , frutas);  */

console.log("Lista com adição: " + frutas); 
