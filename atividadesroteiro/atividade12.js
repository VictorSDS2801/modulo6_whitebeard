const prompt = require("prompt-sync")()

let lista = prompt("Digite aqui uma lista de coisas, separados por vírgula: ")
let listaCoisas = lista.split(",").map((lista) => lista.trim())

function removeDuplicates(listaCoisas) {
    let listaUnicos = listaCoisas.filter((item, index) => listaCoisas.indexOf(item) === index)
    return listaUnicos
}
console.log(removeDuplicates(listaCoisas))