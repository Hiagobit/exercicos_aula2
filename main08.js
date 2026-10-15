//  Escreva um programa que leia uma data (dia, mês, ano) e verifique se é uma data válida.

var dia = 30
var mes = 1
var ano = 2027

if ( dia <= 31 ){
    console.log("Seu dia está valido");
    
    if ( dia <= 28 ){ //Se fosse fevereiro
        console.log("Seu dia está valido");
        

    }else{
        console.log("Seu dia está invalido");
        
    }
} else{
    console.log("Seu dia está invalido");
    
} if (mes <= 12){
    console.log("Seu mês está valido");
    
} else{
    console.log("Seu mes esta invalido");
    
} if (ano <= 2026){
    console.log("Seu ano está valido");
    
}else {
    console.log("Seu ano está invalido");
    
}

// teve alteração