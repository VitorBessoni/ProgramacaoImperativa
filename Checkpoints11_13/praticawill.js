//Parte I 
const produtos =[
    {nome: "produto1", 
    valor:125, 
    qualidade: 7, 
    status: false
    },
    {nome: "produto2", 
    valor:1305, 
    qualidade: 10, 
    status: true
    },
    {nome: "produto3", 
    valor:758, 
    qualidade: 6, 
    status: true
    }   
]

//Parte 2 
const carrinho = produtps.filter((produto) => {
    const valor=produto.valor
    const qualidade = produto.qualidade 
    const status = produto.status 

    const selecionado = (valor >= 482 && valor <=1600) && (qualidade >=6) && (status == true)
    return selecionado 
})

// Parte 3 
carrinho.forEach((produto) => 
{
    console.log("Produto: ", produto.nome) 
    console.log("Valor: ", produto.valor)
    console.log("-------------------------")
})
const total= carrinho.reduce((acumulador,produto) => {
    return acumulador + produto.valor, 0 
})
console.log("Total: ", total)


