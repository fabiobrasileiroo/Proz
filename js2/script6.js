let button = document.querySelector("button")
let span = document.querySelector("span")
let section = document.querySelector("section")

function mostrarSpan(){
    span.style.opacity = "100"
}

button.addEventListener("mouseover",mostrarSpan)

function ocultarSpan() {
    span.style.opacity = "0"
}

button.addEventListener("mouseout",ocultarSpan)
var um = 0
function fazerUmClick() {
    um++
    section.innerText = `Fez um click simples ${um}`
}

button.addEventListener("click", fazerUmClick)

var duplo = 0
function fazerDoisClicks() {
    duplo++
    section.innerHTML = `Fez um duplo click ${duplo}`

}

button.addEventListener("dblclick", fazerDoisClicks)