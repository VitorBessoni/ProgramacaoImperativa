const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];

const retornoForEach = nomes.forEach((nomeAtual) => {
    console.log(nomeAtual);

    return nomeAtual.toUpperCase();
})
console.log(retornoForEach) // undefined
// // o forEach foi feito para ser uma alternativa ao loop for


const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];

const retornoMap = nomes.map((nomeAtual) => {
    console.log(nomeAtual);

    return nomeAtual.toUpperCase();
})
console.log(retornoMap) // ['WHINDS', 'FREEWAY', 'TESTE', 'MARIA']
// o map foi feito para fazemos operação de transformação/alteração 
// nos itens de um array e ao final dessas operações ter 
// uma lista nova com a mesma quantidade de itens da lista base.