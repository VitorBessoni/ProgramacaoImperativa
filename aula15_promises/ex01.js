// Aula 15 - Promises - 20/07/2021
/*
Promises é um objeto javascript que vincula a produção do código. 
É o consumo do código 
Trabalha de forma assíncrona 
*/

function meuVerificador(resposta) {
    console.log(resposta);
}

let minhaPromessa = new Promise(
    function (Resolve, Reject) {
        let x = 0;
        if (x == 0) {
            Resolve("Tudo OK");
        } else { 
            Reject("Deu Erro");
        }
    }
);

minhaPromessa.then(
    function(Resolve) {
        meuVerificador(Resolve);
    }).catch((Reject) => { 
        console.log(Reject)
    });