// Criando um Promise 
// let promiseFail = new Promise(
//     function(resolve,reject){
//        let x=true;
//        if(x==true){
//            resolve("Tudo OK");
//        } else {
//            reject(" Deu Erro");
//        }
//     }
// );

// console.log(promiseFail);


let verifica = '{"false":"DEU ERRO"}';
let x =  true; 


const promessa = new Promise ((resolve, reject) => {
    console.log("Requisição em andamento..."); 
    promiseFail(()=>{      
    if(x==true)
        reject("Tudo ok");
    else
        resolve(JSON.stringify({
            verifica}))}
    )
  }
)

promessa.then((resolve) => {
    const resultado = JSON.parse(resolve);
    console.log(resultado);
}).catch((reject) => {
    console.log(reject);
})

console.log(promessa);

