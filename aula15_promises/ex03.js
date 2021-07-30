// Aula 15 - Promises - 20/07/2021
// ex03 Prmises.js
//shift + alt + f - identar o código 

//host 
let dadosConexaoJson = '{"server": "192.168.0.1", "login":"admin", "senha":123}';
//console.log(dadosConexaoJson);

//convertendo para JS
let dadosConexaoJS = JSON.parse(dadosConexaoJson);
//console.log(dadosConexaoJS);
//console.log(dadosConexaoJS.server);
//console.log(dadosConexaoJS.login);
//console.log(dadosConexaoJS.senha);

// usuário 
let txtServer = "192.168.0.1";
let txtLogin = "admin";
let txtSenha = 123;

let conexao = false;
if (dadosConexaoJS.server == txtServer && dadosConexaoJS.login == txtLogin && dadosConexaoJS.senha == txtSenha) {
    conexao = true;
} else {
    conexao = false;
}

// Criação da Promise
const promessa = new Promise((resolve, reject) =>{
    console.log("Requisição em andamento...")
// Criação de um Delay de 3 segundos 
setTimeout(() => {
        //Verificamos se a promise dará erro ou não 
        if (conexao == false) reject("ACESSO NEGADO - SERVER NÂO CONECTADO")
        else resolve(JSON.stringify({
            vserver: "192.168.0.1",
            vlogin: "admin",
            vsenha: 123
        }))
    },3000)
})

// o then chama a promise 
promessa.then((resolve) => {//consumo da utilização do retorno da promise 
    const dados = JSON.parse(resolve); // converter para JS  
    console.log(dados);
}).catch((reject)=>{
    console.log(reject);
})