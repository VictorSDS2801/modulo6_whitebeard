function divisao(n1, n2) {
    if (n2 === 0) {
        throw new Error("Não é possível realizar divisão por 0!")
    }
    else {
        return  n1 / n2
    }
}
module.exports = divisao