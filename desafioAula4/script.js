//var filme1 = "Star Wars"
//var filme2 = "Toy Story"
//var filme3 = "Interstellar"

//array para consolidar variáveis

//var filmes = [ ]

//colocar valor dentro de array

//filmes.push("Star Wars")
//filmes.push("Toy Story")
//filmes.push("Interstellar")

//var filmes = ["Star Wars", "Toy Story", "Interstellar","oi"]

//for (var i = 0; i < filmes.length; i++){
    //console.log(filmes[i])
//}

var listaFilmes = ["https://www.youtube.com/watch?v=_kBGW1RqUvQ", "https://www.youtube.com/watch?v=YBn5dgXFMis", "https://www.youtube.com/watch?v=FAfR8omt-CY"]


function choose(){
    var numeroFilme=prompt("Digite o número do filme que deseja ver: \n 1- Medianeras \n 2- Frances Ha \n 3- Midnight in Paris")
    console.log(numeroFilme)
    if (numeroFilme == 1){
        window.open(listaFilmes[0])
        } else if (numeroFilme == 2){
            window.open(listaFilmes[1])
            } else if (numeroFilme == 3){
                window.open(listaFilmes[2])
                } else{
                    alert("Escolha um filme da lista!")
            }
}

function listarFilmesNaTela(filme) {
    var listaFilmes = document.querySelector('#listaFilmes')
    var elementoFilme = "<img src="+ filme + ">"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}



//for (var i = 0; i < listaFilmes.length; i++){
 //   document.write("<img src = " + listaFilmes[i] + ">")
//}

//document.write("<br>")

//for (var i = 0; i < listaNomes.length; i++){
 //   document.write(listaNomes[i])
//}