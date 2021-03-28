var numeroSecreto = parseInt(Math.random() * 100)
console.log(numeroSecreto)
var tentativas = 3  

function test1(){
    while (tentativas > 0) {
        var chuteDois = parseInt(prompt("Digite um número de 0 a 100:"))
        if (numeroSecreto == chuteDois){
            alert("Acertou! :)")
            break
        } else if (chuteDois > numeroSecreto) {
            alert("O número secreto é menor...Você tem mais " + (tentativas-1) + " chances!")
            tentativas = tentativas - 1
        } else if (chuteDois < numeroSecreto) {
            alert("O número secreto é maior...Você tem mais " + (tentativas-1) + " chances!")
            tentativas = tentativas - 1
        }
    } if (chuteDois != numeroSecreto) {
        alert("Fim do jogo. Suas alternativas acabaram! O número secreto era " + numeroSecreto)
    }
}


   

