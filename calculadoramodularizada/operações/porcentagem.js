function porcentagem(n1, n2) {
    if (n2 === 0) {
        throw new Error("Não é possível calcular uma porcentagem com um divisor 0!")
    }
    else {
        return (n1 / n2) * 100
    }
}
module.exports = porcentagem