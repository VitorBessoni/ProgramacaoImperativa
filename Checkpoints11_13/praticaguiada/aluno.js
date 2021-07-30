// Micro desafio - Passo 1

// Crie um objeto aluno que tenha como atributos: nome(string), 
// quantidade de faltas(number) e notas(array de números).


// let aluno = { 
//     nome:"Marco Vínicius",
//     quantidadeFaltas:2,
//     notas: [10,9,6,8,9,10]
// }

// Micro desafio - Passo 2 

// Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas.
// Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.
// pensando o que está acontecendo por trás da função contrutora. 
// let aluno = { 
//     nome:"Marco Vínicius",
//     quantidadeFaltas:2,
//     notas: [10,9,6,8,9,10], 
//     faltas:quantidadeFaltas++, 
//     calcularMedia:
//     function calcularMedia(){
//         let total = 0;
//         for(var i=0; i<notas.length; i++){
//             total += notas[i]
//             var avg = total/ notas[i].notas.length  
//             return calcularMedia;
//     } 
//   }
// }

// Crie um construtor para ele e importe - o como o módulo aluno.
let Aluno = function(nome,quantidadeFaltas,notas){
    this.nome= nome; 
    this.quantidadeFaltas = quantidadeFaltas;
    this.notas = notas;
    this.calcularMedia = function () {
        return this.notas.reduce((acumulador,elemento) => acumulador + elemento)/this.notas.length
    }; 
    this.addFalta = function (){
        return this.faltas++
    };
}

// exportando o objeto Aluno: 
module.exports= Aluno;


