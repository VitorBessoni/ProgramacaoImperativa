


let Aluno = require('./aluno');
let curso = require('./curso');


let marcelo = new Aluno('Marcelo', 2, [10,7,8,7,9]);
let vitor = new Aluno ('Marcos', 4, [4,3,2,1,6]);
let maria = new Aluno ('Maria', 6,[8,7,9,10,8]);
let fernanda = new Aluno ('Fernanda',1,[10,7,9,10,9.5]);



curso.addAluno(marcelo,vitor,maria,fernanda);



// imprimir um histórico com a lista de estudantes aprovados e reprovados
// template string 
historico = (aluno) => {
    let media = aluno.calcularMedia()
    let aprovado = curso.aprovarAluno(aluno)
    console.log(`
    Nome: ${aluno.nome}
    Faltas: ${aluno.quantidadeFaltas} 
    Notas: ${aluno.notas}
    Media: ${media}
    Aprovado: ${aprovado}`)
}

curso.listaAlunos.forEach((elemento) => historico(elemento));



