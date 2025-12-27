const prompt = require("prompt-sync")()

let listarcontatos = require("./funcionalidades/listarcontatos")
let addcontato = require("./funcionalidades/addcontato")
let atualizarcontato = require("./funcionalidades/atualizarcontato")
let removercontato = require("./funcionalidades/removercontato")
let sair = require("./funcionalidades/sair")

let contatos = [
  { id: 1, nome: 'Alice', telefone: '1234-5678', email: 'alice@example.com' },
  { id: 2, nome: 'Bob', telefone: '8765-4321', email: 'bob@example.com' },
  { id: 3, nome: 'Carol', telefone: '5678-1234', email: 'carol@example.com' }
];

function programa() {
    console.log("Bem vindo ao gerenciamento de contatos!")
    console.log("Digite 1 se você deseja listar todos os contatos.")
    console.log("Digite 2 se você deseja adicionar um novo contato.")
    console.log("Digite 3 se você deseja atualizar um contato.")
    console.log("Digite 4 se você deseja remover um contato.")
    console.log("Digite 5 se você deseja sair do programa.")
    let decisao = prompt("Digite a sua resposta: ")

    switch (decisao) {
        case "1":
            listarcontatos(contatos)
            programa()
            break
        case "2":
            addcontato(contatos)
            programa()
            break
        case '3':
            atualizarcontato(contatos)
            programa()
            break
        case '4':
            removercontato(contatos)
            programa()
            break
        case '5':
            sair()
            break
        default:
            throw new Error("Digite um número correspondente!")
    }
}
programa()
