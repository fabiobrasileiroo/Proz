let elementoH1 = document.querySelector("h1")

console.log(elementoH1.innerText)

let elementoMain = document.querySelector("main")

console.log(elementoMain.innerHTML)

elementoH1.innerText = "sla"

elementoMain.innerHTML = `
    <h2>Novo subtitulo</h2>
    <ul>
        <li>Elemento 1
    </ul>
`
