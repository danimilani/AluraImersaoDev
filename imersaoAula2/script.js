var primeiroValor = parseInt(prompt("Digite o primeiro número:"))
var segundoValor = parseInt(prompt("Digite o segundo número:"))


var operacao = prompt("Digite 1 para fazer uma divisão, 2 para multiplicação, 3 para soma e 4 para subtração")

if (operacao == 1) {
    var resultado = primeiroValor / segundoValor
    document.write(`<h3>${primeiroValor} / ${segundoValor} = ${resultado}</h3>`)
} else if (operacao == 2) {
    var resultado = primeiroValor * segundoValor
    document.write(`<h3>${primeiroValor} x ${segundoValor} = ${resultado}</h3>`)
} else if (operacao == 3) {
    var resultado = primeiroValor + segundoValor
    document.write(`<h3>${primeiroValor} + ${segundoValor} = ${resultado}</h3>`)
} else if (operacao == 4) {
    var resultado = primeiroValor - segundoValor
    document.write(`<h3>${primeiroValor} - ${segundoValor} = ${resultado}</h3>`)
} else {
    document.write("<h3>Opção Inválida!!</h3>")
}




//if - se
//else - senão
//else if - senão se