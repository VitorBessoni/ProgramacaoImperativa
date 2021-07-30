//ex06SortNumeros.js
// Sort = ordenar 
// array. sort() nos ajuda a ordenar os elementos de um array 

const numeros = [50,100,2,5,25,10];


// ordem decrescente 
console.log(numeros.sort(
    function(a,b){
        return a-b;
    }
)); 


//ordem crescente 
console.log(numeros.sort(
    function(a,b){
        return b-a;
    }
));


