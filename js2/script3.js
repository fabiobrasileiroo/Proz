let div = document.querySelector("div")


let incluiClasse = div.classList.contains("borda-azul")

console.log(incluiClasse)

div.classList.remove("borda-azul")
div.classList.add("texto-novo")
div.classList.toggle("borda-azul")
div.classList.toggle("borda-azul")
let sera = div.classList.contains("texto-novo")
console.log(sera)