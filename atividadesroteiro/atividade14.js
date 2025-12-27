const prompt = require("prompt-sync")()

let string = prompt("Digite aqui uma string: ")

function removeDuplicatesAndCountVowels(string) {
    let stringUnicos = string.split("").filter((item, index) => string.indexOf(item) === index)

    let vogais = ["a", 'e', 'i', 'o', 'u', "A", "E", "I", "O", "U"]

    let vogaisPresentes = 0

    for (let i = 0; i < stringUnicos.length; i++) {
        if (vogais.includes(stringUnicos[i])) {
            vogaisPresentes++
        }
    }
    return vogaisPresentes
}
console.log(`Na sua string, tem ${removeDuplicatesAndCountVowels(string)} vogais.`)