// Pode subir desafio 



function podeSubir(altura,acompanhada){
    if(altura> 1.4 && altura <2) {
        return "Pode subir"

    }else if (altura >=1.2 && altura< 1.4 && acompanhada=="sim") {
        return " Pode Subir por estar acompanhada "

    }else if (altura >=1.2 && altura< 1.4 && acompanhada =="não") {
        return " Necessita de acompanhate para subir"

    } else {
        return " Não pode subir"
    }
   
}

console.log (podeSubir(1.3)); 