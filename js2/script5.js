let elementoClicado = document.getElementById("subtitulo")
let botaoTempo = document.getElementById("botao-tempo")
let tempo = document.getElementById("tempo")

botaoTempo.addEventListener("click", (e)=> {
    let tempoNormal = (e.timeStamp)/1000
    console.log(tempoNormal)
    tempo.innerText = tempoNormal + "s" 
})


document.addEventListener("click", function(e){
    console.log(e.target)    
    elementoClicado.innerText = "Voce clicou no:" + e.target.id
})