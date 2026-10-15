// 5. Escreva um programa que leia dois números e uma operação
//  (adição, subtração, multiplicação, divisão) e realize a operação entre os dois números.

var numero1 = 4
var numero2 = 6
var operacao = "A"
var resultado = 0

if  ( operacao == "A" ) {
    resultado = numero1 + numero2
    console.log("O resultado da sua adição é " + resultado)
    
}if ( operacao == "S" ) {
    resultado = numero1 - numero2
    console.log("O resultado da sua subtração é " + resultado)

}if ( operacao == "M" ) {
    resultado = numero1 * numero2
    console.log("O resultado da sua multiplicação é " + resultado)

}if ( operacao == "D") {
    resultado = numero1 / numero2
    console.log("O resultado da sua divisão é " + resultado)
}



