document.addEventListener("DOMContentLoaded", function() {


let titulo = document.createElement("h1")

titulo.innerText = "Bem vindo ao meu site produto de venda"
titulo.id = "titulo"

let artigo = document.querySelector("body")
artigo.appendChild(titulo)

document.body.id = "body"

let imagem1 = document.createElement("img");
imagem1.src = './marmita-fitness.png';
imagem1.style.width = '200px'
imagem1.style.height = 'auto'
imagem1.style.margin = '10px'
imagem1.style.border = '1px solid #ccc'
imagem1.style.borderRadius = '10px'
imagem1.style.boxShadow = '0 0 10px rgba(0,0,0, 0.1)'
body.appendChild(imagem1);
})