const prompt = require('prompt-sync')()

let numeros = prompt("Digite uma lista de números, separados por vírgula: ")
let listanumeros = numeros.split(",").map((numeros) => parseFloat(numeros.trim())).filter((numeros) => !isNaN(numeros));


let paresunicos = []
function sumOfUniqueEvenNumbers(listanumeros) {
    let somaunicos = 0
    let valoresunicos = listanumeros.filter((item, index) => listanumeros.indexOf(item) === index)
    for (let i = 0; i < valoresunicos.length; i++) {
        if (valoresunicos[i] % 2 === 0) {
            paresunicos.push(valoresunicos[i])
        }
    }
    for (let i = 0; i < paresunicos.length; i++) {
        somaunicos += paresunicos[i]
    }
    return somaunicos
}
console.log(sumOfUniqueEvenNumbers(listanumeros))