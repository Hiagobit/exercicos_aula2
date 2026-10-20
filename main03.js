var numero1 = 31
var tipodetemperatura = "C"
var temperaturaconvertida = 0

if ( numero1 == "C" ) {
    console.log("Você escolheu Celsius")
    temperaturaconvertida = (( numero1 * 1.8 ) + 32)
} else if (numero1 == "F") {
    // if (numero == "F")
    console.log("Você escolheu Fahrenheeit")
    temperaturaconvertida = (( numero1 - 32 ) * (5/9))
} else {
    console.log("Você não escolheu nenhum numero")
}

console.log("Seu numero convertido é ->" + temperaturaconvertida)