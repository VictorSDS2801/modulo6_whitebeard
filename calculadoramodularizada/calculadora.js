const prompt = require('prompt-sync')();
const adicao = require("./operações/soma")
const subtracao = require("./operações/subtracao")
const multiplicacao = require("./operações/multiplicacao")
const divisao = require("./operações/divisao")
const porcentagem = require("./operações/porcentagem")

function programa() {
    console.log("Seja bem-vindo a calculadora!")
    let pn = prompt("Digite aqui o seu primeiro número: ")
    let primeironumero = validarnumero(pn)
    console.log("Digite '+' se você deseja somar.")
    console.log("Digite '-' se você deseja subtrair.")
    console.log("Digite '*' se você deseja multiplicar.")
    console.log("Digite '/' se você deseja dividir.")
    console.log("Digite '%' se você deseja tirar a porcentagem.\n")
    let operacao = prompt("Digite aqui sua resposta: ")
    let sn = prompt("Digite aqui o segundo número: ")
    let segundonumero = validarnumero(sn)


    switch (operacao) {
        case "+":
            resultado = adicao(primeironumero, segundonumero)
            break
        case "-":
            resultado = subtracao(primeironumero, segundonumero)
            break
        case "*":
            resultado = multiplicacao(primeironumero, segundonumero)
            break
        case "/":
            resultado = divisao(primeironumero, segundonumero)
            break
        case "%":
            resultado = porcentagem(primeironumero, segundonumero)
            break
        default:
            throw new Error("Digite um caractere correspondente!")
    }
    if (operacao === "%") {
        console.log(`${primeironumero}% de ${segundonumero} é ${resultado}`)
    }
    else {
        console.log(`${primeironumero} ${operacao} ${segundonumero} = ${resultado}`)
    }
}
function validarnumero(n) {
    let numero = Number(n)
    if (isNaN(numero)) {
        throw new Error("Digite um número.")
    }
    return numero
}

programa()