var valorEmCelsiusTexto = prompt("Qual o valor em dolar que voce quer converter?")

var valorEmCelsiusNumero = parseFloat(valorEmCelsiusTexto)

var valorEmFarenheit = (valorEmCelsiusNumero * 9/5)+32

var valorEmFarenheitDecimal = valorEmFarenheit.toFixed(1)

document.write(`<h4>${valorEmFarenheitDecimal}°F</h4>`)


//Revisao
//variaveis var int - float - string
//alert - parseInt - parseFloat - prompt
//operacoes matematicas
//comentarios finais