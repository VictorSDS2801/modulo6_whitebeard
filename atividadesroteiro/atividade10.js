const prompt = require("prompt-sync")()

let palavra = prompt("Digite aqui a palavra que você deseja cifrar: ")
let deslocamento = parseFloat(prompt("Digite aqui o deslocamento da cifra: "))

function caesarCipher(texto, shift) {
    let resultado = ""

    for (let i = 0; i < texto.length; i++) {
        let codigo = texto.charCodeAt(i)

        if (codigo >= 97 && codigo <= 122) {
            let novoCodigo = codigo + shift

            if (novoCodigo > 122) {
                novoCodigo = 96 + (novoCodigo - 122)
            }

            resultado += String.fromCharCode(novoCodigo)
        } else {
            resultado += texto[i]
        }
    }

    return resultado
}
console.log(caesarCipher(palavra, deslocamento))
