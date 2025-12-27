const prompt = require("prompt-sync")()

let frasedigitada = prompt("Digite aqui uma frase para ser invertida: ")

function reverseWordsInSentence(frase) {
  let inverterfrase = frase.split(" ").map((word) => reverseString(word)).join(" ");
  return inverterfrase;
}


function reverseString(palavra) {
    if (palavra === "" || palavra === " ") {
        throw new Error("Você não digitou nada!")
    }
    let textoinvertido = ''
    for (let i = palavra.length - 1; i >= 0; i--) {
        textoinvertido += palavra[i]
    }
    return textoinvertido
}
console.log(reverseWordsInSentence(frasedigitada))