// 6. Faça um programa que leia o nome de um aluno e suas três notas, 
// calcule a média e informe se ele está aprovado (média maior ou igual a 7) ou reprovado.

var nomeAluno = "Hiago"
var nota1 = 6
var nota2 = 9
var nota3 = 9
var mediaAluno = (nota1 + nota2 + nota3) / 3

if ( mediaAluno > 7 ) {
    console.log("Você está aprovado! " + nomeAluno)
    console.log("Su media final foi: " + mediaAluno)

} else {
    console.log("Você não passou de ano :)")
}