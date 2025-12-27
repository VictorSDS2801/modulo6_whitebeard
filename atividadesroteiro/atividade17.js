const prompt = require("prompt-sync")()

let paresinput = Number(
    prompt("Informe a quantidade de números pares para a altura do triângulo: ")
)
function getEvenNumbers(n) {
    let pares = []

    let numero = 2
    while (pares.length < n) {
        pares.push(numero)
        numero += 2
    }

    return pares
}
function drawEvenNumberTriangle(n) {
    let pares = getEvenNumbers(n)

    for (let i = 1; i <= pares.length; i++) {
        let linha = pares.slice(0, i).join(" ")
        console.log(linha)
    }
}
drawEvenNumberTriangle(paresinput)
