const prompt = require("prompt-sync")()

function programa() {
    let numeros = prompt("Digite uma lista de números separados por uma vírgula (ex: 1, 4, 6, 8): ")
    let lista = numeros.split(",").map((numero) => parseFloat(numero.trim())).filter((numero) => !isNaN(numero));
    console.log(findMax(lista))
}
function findMax(lista) {
    let maiornumero = lista[0]
    if (lista.length === 0) {
        throw new Error("Sua lista está vazia.")
    }
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > maiornumero) {
            maiornumero = lista[i]
        }
    }
    return `O maior número da lista que você digitou é ${maiornumero}`
}
programa()