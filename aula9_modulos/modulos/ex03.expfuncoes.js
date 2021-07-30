// obejtivo criem funções de cáculo e exportem 
// dentro da pasta modulo
//ex03 ExpFunçoes 


const basicOps ={
    somar:(...n)=>n.reduce((acc,e)=>acc+e),
    subtrair:(...n)=> n.reduce((acc,e)=>acc-e),
    multplicar:(...n)=> n.reduce((acc,e)=>acc*e),
    dividir:(...n)=> n.reduce((acc,e)=>acc/e),
}

const advanceOps = {
    potenciacao:(n,n2)=>n**n2,
    radiciacao:(n,n2)=>n**(1/n2),
}

module.exports = {basicOps,advanceOps};

