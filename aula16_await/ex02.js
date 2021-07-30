//Aula 16 Await 

//Aqui ta definindo a funçao chamada resolverDepoisde2segundos 
//que fez uma promessa de serlver depois de 2 segundos:

function resolverDepoisDe2Segundos(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

// Aqui definiu a funçaõ chamada adicionar1 que vai retornar a soma do parametro passado 
// + a(que chama a funcao resolverDepoisde2Segundos com parametro 10)
// + b(que chama a funcao resolverDepoisde2Segundos com parametro 20)
async function adicionar1(x) {
    var a = resolverDepoisDe2Segundos(10);
    var b = resolverDepoisDe2Segundos(20);
    return x + await a + await b;
}

// // Aqui chamamos a funcao chamada adiconar1 passando 10  como parametro. O then eh para caso a promisse 
adicionar1(10).then(v => {
    console.log(v); // exibe 40 depois de 2 segundos. 
});

async function adicionar2(x) {
    var a = await resolverDepoisDe2Segundos(20);
    var b = await resolverDepoisDe2Segundos(30);
    return x + a + b;
}

adicionar2(10).then(v => {
    console.log(v); // exibe 60 depois de 4 segundos  
});


