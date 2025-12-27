const prompt = require("prompt-sync")()

let numeros = prompt("Digite aqui uma lista de números separados por vírgula: ")
let listanumeros = numeros.split(",").map((numeros) => parseFloat(numeros.trim())).filter((numeros) => !isNaN(numeros));

let impares = []
function getOddNumbers(listanumeros) {
    for (let i = 0; i < listanumeros.length; i++) {
        if (listanumeros[i] % 2 != 0) {
            impares.push(listanumeros[i])
        }
    }
    return impares
}
console.log(getOddNumbers(listanumeros))