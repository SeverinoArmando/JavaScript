// let nome = false
// nome = prompt("Digitou o nome?")

// // if (nome){
// //     console.log("Acenda a lâmpada")

// // }
// // else{
// //     console.log("Apague a luz")
// // }

// alert(nome + " É seu nome")

let primeraNota = Number (prompt("Digite a primeira nota: "))
let segundaNota =Number( prompt("Digite a segunda nota: "))
let terceiraNota = Number( prompt("Digite a terceira nota: "))

let media = (primeraNota+segundaNota+terceiraNota)/3



if (media > 7 )
{
    console.log("Você foi aprovado com a nota de "+ media.toFixed(2))
}
else{
    console.log("Infelizmente não podes ser aprovado com a média"+media.toFixed(2))
}