const prompt = require("prompt-sync")()

let resposta = prompt("Digite um número para verificar se ele é primo: ")

let numero = Number(resposta)

function isPrime(numero) {
    if (numero <= 1) {
        return false
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false
        }
    }

    return true
}
if (isNaN(resposta)) {
    throw new Error("Digite um número!")
}
else {
    console.log(isPrime(numero))
}