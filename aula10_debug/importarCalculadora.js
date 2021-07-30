// Aula 10 29-06-2021
// Debug - importaCalculadora.js
// fora da pasta modulo 

const operacoes = require('./modulos/exportCalculadora');

function calcular(a,b,acao){
    switch(acao){
        case '+': console.log(operacoes.soma(a,b));
        break;
        case '-':console.log(operacoes.subtrair(a,b));
        break;
        case '*':console.log(operacoes.multiplicar(a,b));
        break;  
        case '/':console.log(operacoes.dividir(a,b));
        break;  
        default: console.log("Digite uma opção válida")
    }
}

calcular('oi',5,'+');