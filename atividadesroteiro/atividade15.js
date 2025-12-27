const prompt = require("prompt-sync")()

let input = prompt("Digite aqui uma lista de números, separados por vírgula: ")
let listanumeros = input.split(",").map((input) => parseFloat(input.trim())).filter((input) => !isNaN(input));

function sortUniqueNumbers(listanumeros) {
    let listaUnicos = listanumeros.filter((item, index) => listanumeros.indexOf(item) === index)
    listaUnicos.sort((a, b) => a - b);
    return listaUnicos
}
console.log(sortUniqueNumbers(listanumeros))