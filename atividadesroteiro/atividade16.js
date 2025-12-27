const prompt = require("prompt-sync")()

let alturainput = prompt("Informe a altura do triângulo: ")

function drawTriangle(alturainput) {
  let altura = parseInt(alturainput)

  if (isNaN(altura)) {
    console.log("O valor digitado não é um número!")
    return
  }

  for (let i = 0; i <= altura; i++) {
    console.log("*".repeat(i))
  }
}
drawTriangle(alturainput)