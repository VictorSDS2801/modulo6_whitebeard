const prompt = require("prompt-sync")();

const numeros = prompt("Informe valores separados por vírgula: ");

function getUniqueValues(numeros) {
    let listanumeros = numeros.split(",").map((numeros) => numeros.trim())

    let valoresunicos = listanumeros.filter((item, index) => listanumeros.indexOf(item) === index)
    return valoresunicos
}
console.log(getUniqueValues(numeros))
