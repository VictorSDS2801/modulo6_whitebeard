const prompt = require("prompt-sync")()

let palavra = prompt("Digite aqui uma palavra: ")

function reverseString(palavra) {
    if (palavra === "" || palavra === " ") {
        throw new Error("Você não digitou nada!")
    }
    let textoinvertido = ''
    for (let i = palavra.length - 1; i >= 0; i--) {
        textoinvertido += palavra[i]
    }
    return textoinvertido
}
console.log(`Sua palavra ao contrário é ${reverseString(palavra)}.`)