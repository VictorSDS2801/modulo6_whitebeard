const prompt = require("prompt-sync")()

let nomes = prompt("Digite aqui uma lista de nomes separados por vírgula: ")
let listanomes = nomes.split(",").map(nomes => nomes.trim())

function greeetUsers(nomes) {
    if (nomes.length <= 0) {
        console.log("Você não digitou nenhum nome.")
    }
    for (let i = 0; i < nomes.length; i++) {
        console.log(`Seja bem vindo(a), ${nomes[i]}`)
    }
}
greeetUsers(listanomes)