const h1 = document.querySelector("h1")
h1.innerText = "H1 estar com texto agora"

const a = document.querySelector("a")
a.innerText = "link <a></a>"

const ol = document.querySelector("ol")
ol.innerHTML = ` 
    <li>Item
    <li> sapo
    <li> cachorro
`
const ul = document.querySelector("ul")
ul.innerHTML = ` 
    <li><a href="#">link 1</a>
    <li><a href="#">link 2</a>
    <li><a href="#">link 3</a>
`