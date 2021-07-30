//callback

// Crie uma função acaoCarro(), que receberá uma callback como parâmetro. Após isso, crie duas funções: andar() – deve exibir uma mensagem dizendo que o carro está andando – e parar() – deve exibir uma mensagem dizendo que o carro parou.

// Execute ambas as ações utilizando a função acaoCarro(), passando suas ações como callbacks.

let andar =() =>"O carro está andando";
let parar =() =>"O carro parou"; 

 function acaoCarol() {
     console.log(andar());
     console.log(parar());
 }

acaoCarol();