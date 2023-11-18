let elementoJavacript = document.createElement("li");

elementoJavacript.innerText = "JavaScript"
elementoJavacript.id = "ling-js"

let listaLinguagens = document.querySelector(".lista-linguagens")
listaLinguagens.appendChild(elementoJavacript)

const postagemJavaScript = document.createElement("div");

postagemJavaScript.innerHTML = `<h2 class="post-titulo">Javacripts</h2>
<p class="post-texto">
JavaScript e legal ate</p>
`

const postagens = document.querySelector(".postagens")

postagens.appendChild(postagemJavaScript)