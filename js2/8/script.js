let linkProz = document.getElementById("link-proz")
let btnSubmit = 
document.querySelector("button[type=submit]")

linkProz.addEventListener("click", (e)=> {
    e.preventDefault()
    alert("Nao foi possivel acessar o link")
})

btnSubmit.addEventListener("click", (e)=> {
    alert("Não foi possível enviar os dados do formulário")
    e.preventDefault()
})