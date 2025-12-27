const prompt = require("prompt-sync")()

let string = prompt("Digite aqui uma string: ")

function countVowels(string) {
    let vogais = ["a", 'e', 'i', 'o', 'u', "A", "E", "I", "O", "U"]

    let vogaisPresentes = 0

    for (let i = 0; i < string.length; i++) {
        if (vogais.includes(string[i])) {
            vogaisPresentes++
        }
    }

    return vogaisPresentes
}
console.log(`Na sua string, tem ${countVowels(string)} vogais.`)