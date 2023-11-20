// ---------- FUNÇÕES GERAIS -------------- //
function togglePopup(input, label) {
  // Mostrar popup de campo obrigatório
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  // Ocultar popup de campo obrigatório
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}

// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

togglePopup(usernameInput, usernameLabel)

// Validar valor do input
usernameInput.addEventListener("change", (e)=> {
  let valor = e.target.value

  if(valor.length < 3){
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    usernameHelper.innerText = "Seu username precisa ter 3 ou mais caracteres";
    estilizarInputIncorreto(usernameInput, usernameHelper)
    inputsCorretos.username = false
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(usernameInput, usernameHelper);
    inputsCorretos.username = true
  }
})

// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel)

// Validar valor do input
emailInput.addEventListener("change", (e)=> {
  let valor = e.target.value

  if(valor.includes("@") && valor.includes(".com")){
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(emailInput, emailHelper);
    inputsCorretos.email = true
  } else {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    emailHelper.innerText = "Precisa inserir um email válido";
    estilizarInputIncorreto(emailInput, emailHelper);
    inputsCorretos.email = false

  }
})     

// -----------Validacão senha ----//
let senhaInput = document.getElementById("senha")
let senhaLabel = document.querySelector("label[for='senha'")
let senhaHelper = document.getElementById("senha-helper")

togglePopup(senhaInput,senhaLabel)

let confirmarSenha = document.getElementById("confirma-senha")
let confirmarSenhaHelper = document.getElementById("confirma-senha-helper")
let confirmarSenhaLabel = document.getElementById('label[for="confirma-senha]')
senhaInput.addEventListener("blur", (e)=> {
    let valor1 = e.target.value
    if(valor1 == "") {
        senhaHelper.innerText = "O campo senha não pode estar vazio"
        estilizarInputIncorreto(senhaInput, senhaHelper)
        inputsCorretos.senha = false
    } else {
        estilizarInputCorreto(senhaInput,senhaHelper)
        inputsCorretos.senha = true
    }

    confirmarSenha.addEventListener("change", (e)=> {
        let valor2 = e.target.value
        if(valor2 == valor1) {
            estilizarInputCorreto(confirmarSenha,confirmarSenhaHelper)
            inputsCorretos.confirmarSenha = true
        } else {
            confirmarSenhaHelper.innerText = "As senhas precisam ser iguais!"
            estilizarInputIncorreto(confirmarSenha,confirmarSenhaHelper)
            inputsCorretos.confirmarSenha = false
        }
    });
});

//desafio o valor do campo de confirmar senha tem que ser igual campo senha


// senhaInput.value dessa forma poderia pegar o valor

// -------------- Evitar Envio Do Formulario -------//
let btnSubmit = document.querySelector("button[type='submit'")
let inputsCorretos = { 
    username: false,
    email: false,
    senha: false,
    confirmarSenha: false
}

btnSubmit.addEventListener("click", (e)=> {
    if(inputsCorretos.username == false || 
        inputsCorretos.email == false || 
        inputsCorretos.senha ==false || 
        inputsCorretos.confirmarSenha == false) {
        e.preventDefault()
    } else {
        alert("formulario completo envidado com sucesso")
    }
})