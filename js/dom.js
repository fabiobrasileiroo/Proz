const titulo = document.getElementById("title")
const p = document.getElementsByClassName("palavra")
const teste = document.querySelector("#title")

const doisP = document.querySelectorAll(".palavra")

const ul = document.querySelectorAll("ul")
const li = document.querySelectorAll("li")
console.log(li)
function percorrerAray(lista) {
    for(let i = 0; i < lista.length; i++) {
        console.log(lista[i])
    }
}

percorrerAray(li)