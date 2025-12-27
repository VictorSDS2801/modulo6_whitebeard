const prompt = require("prompt-sync")()

function removercontato(contatos) {
    let id = Number(prompt("Digite o id do contato que você deseja remover: "))

    if (isNaN(id) || id > contatos.length || id < 1) {
        throw new Error("Digite um id válido!")
    }
    let posicao = id - 1

    contatos.splice(1, posicao)
    console.log("Contato removido com sucesso!")
}
module.exports = removercontato