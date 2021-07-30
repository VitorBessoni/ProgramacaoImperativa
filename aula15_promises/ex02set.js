// Aula 15 - Promises - 20/07/2021
// Criando Funcão SetTimeOut 

// Simulação para esperar um tempo limite
// Para demonstrar o uso de promises, usaremos exemplos de retorno de chamada: 
// Esperando por umm tempo limite. 

console.log("Requisição em andamento...");

setTimeout(
    function () {
        funcaoConectar("Server Coectado-OK");
    }, 2000);

    function funcaoConectar(value) {
    console.log(value);
    }