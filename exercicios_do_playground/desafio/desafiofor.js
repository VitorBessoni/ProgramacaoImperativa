//Desafio for 13-06-2021

// Olá mundo 5 vezes 

for(let i=1; i<=5; i++){
    console.log("Olá Mundo");
}

// Contando números ímpares 

for (let numero=1; numero<=10; numero++){
    console.log("Números ímpares:" + (numero++))
}


// Tabuada 
function pulaLinha() {
    console.log("\n");
}

var a = 1;
var b = 0;

for(cont = 1; cont < 10; cont++) {
    for(conta = 1; conta <= 10; conta++) {
        var result = a * b;
        console.log(b + "x" + a + " = " + result + " |" );
        b++;       
        if(conta == 10) {
            pulaLinha();
            a++;
            b = 0;
        }
        
    }
}