const prompt = require("prompt-sync")()
let criarid = require("./criarid")

function addcontato(contatos) {
    let id = parseInt(criarid())
    let nome = prompt("Digite o nome do novo contato: ")
    let telefone = prompt("Digite o telefone do novo contato: ")
    let email = prompt("Digite o email do novo contato: ")

    let novocontato = {id: id, nome: nome, telefone: telefone, email: email}
    contatos.push(novocontato)
    console.log("Contato adicionado com sucesso!")
}
module.exports = addcontato