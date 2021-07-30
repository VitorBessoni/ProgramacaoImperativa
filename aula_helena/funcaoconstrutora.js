// funcao construtora - serve para otimizar objetos literais    
// nao tem como fazer arrow function para criar uma função construtora, mas pode para fazer como método dentro da função construtora.
// em um objeto literal você não pode usar arrow function para fazer um método da erro!
// o objeto literal não usa arrow function, porque é literal. 
// this funciona de forma diferente em situações diferentes
// função é verbo, e variavel substantivo // funcaoconstrutora -- Letra maiuscula.
// && e lógico , || ou lógico,  == operador de comparação,  === igual ao valor e o tipo,  = guarda esse valor dentro de uma variavel, != diferente,   

let Aluno = function(nome,faltas,notas){
    this.nome=nome; 
    this.faltas=faltas;
    this.notas=notas;
    this.calcularMedia = () => this.notas.reduce((totalizador,elemento) => totalizador+elemento)/this.notas.length;
    this.adicionarfaltas= () => this.faltas++;
}

let marcelo= new Aluno('Vitor', 2, [5,6,7,8.5]);
let fernanda= new Aluno('Fernanda', 1, [9,10,10,8.5]);
let helena= new Aluno('Helena', 1, [9,8,10,8.5]);
let matheus= new Aluno('Matheus', 3, [9,10,9,8.5]);
let debora= new Aluno('Debora', 4, [7,10,10,10]);


console.log(marcelo.calcularMedia());






