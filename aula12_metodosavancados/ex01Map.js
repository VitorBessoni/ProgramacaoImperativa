//aula 12 -06/07/2021 
// ex01Map.js 
// O map() é um método que cria uma nova matriz com os resultados 
// da chamada de uma função para cada elemento da matriz.


let numeros = [5,3,4,5,6,7,8,10]
let numerosDobrados = numeros.map(elemento => elemento*2);
console.log(numerosDobrados);


let letrasMinusculas = ['a', 'b', 'c', 'd'];

/* let letrasMaiusculas= letrasMinusculas.map(
    function maiusculas(elemento){
        return elemento.toUpperCase();
    }
); */

// com arrow function 
let letrasMaiusculas = letrasMinusculas.map(maiuscula = elemento => elemento.toUpperCase());

console.log(letrasMinusculas);
console.log(letrasMaiusculas);
