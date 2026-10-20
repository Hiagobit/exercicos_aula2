// 3. Escreva um programa que leia o salário de um funcionário - ok
// aplique um aumento de acordo com a seguinte regra:
//  salários menores que R$1000 recebem 20% de aumento, ok
//  entre R$1000 e R$2000 recebem 15%, ok
//  e acima de R$2000 recebem 10%. ok

var salário = 1000
var salarioFinal = 0

if (salário <= 1000){
    if ( salário <= 2000 ){
        salarioFinal = (salário * 0.15) + salário
    }
    else {
        salarioFinal = (salário * 0.10 ) + salário

    }
}
else {
    salarioFinal = (salário * 0.20 ) + salário

}

    
console.log(salarioFinal)  