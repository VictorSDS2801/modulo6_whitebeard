const prompt = require("prompt-sync")()


function atualizarcontato(contatos) {
    let id = Number(prompt("Digite o id do contato que você deseja atualizar: "))
    if (isNaN(id) || id > contatos.length || id < 1){
        throw new Error("Digite um id válido!")
    }

    let nnome = prompt("Digite o novo nome do seu contato: ")
    let ntelefone = prompt("Digite o novo telefone do seu contato: ")
    let nemail = prompt("Digite o novo email do seu contato:  ")

    let posicao_contato = id - 1

    contatos[posicao_contato].nome = nnome || contatos[posicao_contato].nome
    contatos[posicao_contato].telefone = ntelefone || contatos[posicao_contato].telefone
    contatos[posicao_contato].email = nemail || contatos[posicao_contato].email
    console.log("Contato atualizado com sucesso!")
}
module.exports = atualizarcontato