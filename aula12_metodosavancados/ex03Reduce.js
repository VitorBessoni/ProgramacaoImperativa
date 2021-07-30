// aula 12 -06/07/2021 
// ex03Reduce.js 
// Reduce  é um método que pecorre um array e retorna 
// um único valor.  Ele acumula o resultado da operação com todos os itens do array. 


const numeros = [1,2,-3,4,-5,0,7,8,9,19];
// let resultado = numeros.reduce(
//     function(totalizador,elemento){
//         return totalizador + elemento;          
//     }
// );

let resultado = numeros.reduce((totalizador,elemento) => totalizador+elemento);

console.log(resultado);