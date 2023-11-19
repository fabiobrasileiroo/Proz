let elementoClicado = document.getElementById("elemento-clicado")
let botaoTempo = document.getElementById("botao-tempo")
let tempo = document.getElementById("tempo")

botaoTempo.addEventListener("click", (e)=> {
    let tempoNormal = (e.timeStamp)/1000
    console.log(tempoNormal)
    tempo.innerText = tempoNormal + "s" 
})

document.addEventListener("click", function(e){
    
})