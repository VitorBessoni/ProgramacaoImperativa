// Aula 04 - 08/06/2021
// Condicional Simples / Composto 

let login = "wpantoja";
let senha = 123;
let acesso = true; 

/*if (login == "wpantoja"){
    console.log("Acesso Permitido");
} else{
    console.log("Acesso Negado"); 
}*/

//if composto 

if(login == "wpantoja" && senha == 123 && acesso == true){
    console.log("Acesso Permitido");
}else{
    console.log("Acesso Negado");
}