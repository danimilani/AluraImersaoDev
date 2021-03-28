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

var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BYTFiYzAwMTAtZWQzZi00NWQ2LWJmYzYtM2RhNzg5ZjVhZjVhXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_UY268_CR1,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BOTY0NDQ2NzQ2N15BMl5BanBnXkFtZTcwMTU0OTkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTM4NjY1MDQwMl5BMl5BanBnXkFtZTcwNTI3Njg3NA@@._V1_UX182_CR0,0,182,268_AL_.jpg"]

for (var i = 0; i < listaFilmes.length; i++){
    document.write("<img src = " + listaFilmes[i] + ">") 
}
