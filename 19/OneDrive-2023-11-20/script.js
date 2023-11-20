let textInput = document.getElementById("login-usuario")
let titulo = document.querySelector("h2")
let button = document.querySelector("button")
titulo.style.color = "blue"
button.style.borderRadius = "10px"
textInput.classList.add(".erro")

// Primeira interacão do usuário
//Usuario digitou um nome de usuario nao valido

let loginUsuario = document.getElementById("login-usuario")
let errorTextUsuario= document.querySelector(".error-text")

loginUsuario.classList.add("correct")
errorTextUsuario.classList.add("visible")
errorTextUsuario.classList.remove("visible")

let passwordErrorText = document.querySelector("#login-senha + p.error-text")
passwordErrorText.classList.add("visible")
let login = document.querySelector("#login-senha")
login.classList.add("error")
// Segunda interecao do usuario
// Usuario digitou um nome de usuario valido, mas senha incorreta

 