const prompt = require("prompt-sync")()

let frase = prompt("Digite aqui a frase que você deseja cifrar: ")
let deslocamento = parseFloat(prompt("Digite aqui o deslocamento das cifras em cada palavra: "))

function cifrarFrase(frase, deslocamento) {
  return frase
    .split(" ")
    .map(palavra => caesarCipher(palavra, deslocamento))
    .join(" ")
}
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
console.log(cifrarFrase(frase, deslocamento))