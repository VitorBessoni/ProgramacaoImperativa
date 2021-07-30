// Crie uma função, que após 5 segundos, dobre o resultado do número
// passado como parâmetro. Essa função deverá retornar uma Promise. Use
// o setTimeOut como temporizador.
// 2. Crie uma função assíncrona que irá receber um parâmetro x. Crie três
// variáveis: a, b e c dentro do corpo da função. Cada uma dessas variáveis
// receberá um await da função do passo anterior. Você deve passar como
// parâmetros dessa função os números 10, 20 e 30, respectivamente.
// 3. Retorne a soma de todos esses elementos, inclusive o parâmetro da
// função assíncrona.

function resolverDepoisDe5Segundos(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x*2);
        }, 5000);
    });
}

async function dobrar(x) {
    let a = resolverDepoisDe5Segundos(10);
    let b = resolverDepoisDe5Segundos(20);
    let c = resolverDepoisDe5Segundos(30);
    return x + await a + await b + await c;
}


dobrar(10).then(resultado => console.log(resultado));