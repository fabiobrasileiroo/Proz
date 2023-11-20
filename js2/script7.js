let keyText = document.querySelector("#key-text")
let codeText = document.querySelector("#code-text")
let quadrado = document.querySelector("#quadrado")
let distanciaX = 0
let distanciaY = 0
document.addEventListener("keyup",(e) => {
    keyText.innerHTML = e.key
    codeText.innerText = e.code
})

document.addEventListener("keydown",(e)=> {
    if(e.code === "ArrowRight"){ 
        distanciaX = distanciaX + 10
        quadrado.style.left = distanciaX + "px"
    } else if(e.code === "ArrowLeft") {
        distanciaX = distanciaX - 10
        quadrado.style.left = distanciaX + "px"
    } else if (e.code === "ArrowDown") {
        distanciaY+= 10
        quadrado.style.top = distanciaY + "px"
    } else if (e.code === "ArrowUp") {
        distanciaY -= 10
        quadrado.style.top = distanciaY + "px"
    }
})