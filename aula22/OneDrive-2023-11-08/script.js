/*
// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório
usernameInput.addEventListener("focus", ()=> {
    //Adicionar a classe "required-popup"
    usernameLabel.classList.add('required-popup')
})

// Ocultar popup de campo obrigatório
usernameInput.addEventListener("blur", () => {
    usernameLabel.classList.remove('required-popup')
})

// Validar valor do input
usernameInput.addEventListener("change", (e) => {
    //Salvar o valor do input numa variavel
    let valor = e.target.value
    console.log(valor)

    //estrutura de condicao if else para validar o valor
    if(valor.length < 3) {
        usernameInput.classList.add("erro")
        usernameHelper.classList.add('visible')
        usernameHelper.innerText = " Digite um numero valido"
    } else {
        usernameInput.classList.remove("error")
        //Remover a mensagem de ajuada do usernameHelper
        usernameHelper.classList.remove("visible")
        //Adicionar a classe "correct" no meu usernameInput
        usernameInput.classList.add("correct")
    }
})

// ------------- validacao email ---------- //
const emailLabel = document.querySelector('label[for="email"]')
const emailInput = document.getElementById('email')
const emailHelper = document.getElementById('email-helper')

// 2 criar um funcao para mostrar e ocultar o popup
function mostraPopup (input,label) {
    input.addEventListener("focus", () => {
        label.classList.add("required-popup")
    })
    //ocultar a mensagem de obrigatorio
        label.classList.remove("required-popup")
} 

//Executar a funcao
mostraPopup(emailInput, emailLabel)
mostrarPopup(usernameInput, usernameLabel)

//Validar o campo de email

if(valor.includes("@") && valor.includes(".com")) {
    emailInput.classList.add("error")
    emailInput.classList.remove("correct")
    emailHelper.classList.add("visible")
    emailHelper.classList.remove("error")
}
*/

// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
//as colchetes ([]) são usados para selecionar elementos com um atributo específico, neste caso, o atributo "for" do elemento <label>.
//isso permite que a gente acesse e manipule o rótulo associado ao campo de entrada "Username" no seu código JavaScript.
let usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório
// 1. Chame o elemento usernameInput e aplique um addEventListener para o evento "focus"
usernameInput.addEventListener("focus", () => {
  // 2. Adicione a classe "required-popup" ao usernameLabel
  usernameLabel.classList.add("required-popup");
});
//O evento "focus" é acionado quando um usuário clica ou navega até um campo de entrada, tornando-o ativo e pronto para receber entrada, como digitar texto. É uma prática comum usar o evento "focus" para realçar campos de entrada e fornecer dicas visuais ao usuário, melhorando a usabilidade do formulário.

// Ocultar popup de campo obrigatório
usernameInput.addEventListener("blur", () => {
  // Remova a classe "required-popup" do usernameLabel
  usernameLabel.classList.remove("required-popup");
});
//O evento "blur" é acionado quando o campo de entrada deixa de ser o elemento ativo, ou seja, quando um usuário clica fora dele ou navega para outro elemento na página. Usar o evento "blur" é uma prática comum para manter a interface do usuário limpa e evitar a exibição de informações desnecessárias quando um campo não está em foco.

// Validar valor do input
usernameInput.addEventListener("change", (e) => {
  // 2. Salvar o valor do input em uma variável
  let valor = e.target.value;
  console.log(valor);
  //change" se refere a um evento que ocorre quando o valor de um campo de entrada (como um campo de texto) é alterado pelo usuário. Esse evento é acionado após o usuário modificar o conteúdo do campo e, em seguida, clicar fora do campo ou pressionar a tecla "Enter".

  // 3. Usar uma estrutura if... else para a validação
  if (valor.length < 3) {
    // Adicionar a classe de erro ao usernameInput
    usernameInput.classList.add("error");

    // Adicionar uma classe de erro e definir a mensagem de ajuda ao usernameHelper
    usernameHelper.classList.add("visible");
    usernameHelper.innerText =
      "O campo Username deve ter pelo menos 3 caracteres.";
  } else {
    // Remover a classe de erro do usernameInput
    usernameInput.classList.remove("error");

    // Remover a classe de erro e esconder a mensagem de ajuda no usernameHelper
    usernameHelper.classList.remove("visible");
    usernameInput.classList.add("correct");
  }
});
//innerText é uma propriedade que permite definir ou obter o conteúdo de texto de um elemento HTML. No geral, essas operações ajudam a fornecer feedback visual ao usuário com base na validação do campo de entrada "Username".

// ---------- VALIDAÇÃO EMAIL ---------- //
// 1. Capturar elementos do campo de email
const emailLabel = document.querySelector('label[for="email"]');
const emailInput = document.getElementById("email");
const emailHelper = document.getElementById("email-helper");

// 2. Refatorar a função para mostrar/ocultar o popup
function mostrarPopup(input, label) {
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });
  //ocultar o popup de campo obrigatório
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

// Executar a função para os campos de username e email
mostrarPopup(usernameInput, usernameLabel);
mostrarPopup(emailInput, emailLabel);

// 3. Aplicar validação ao campo de email
emailInput.addEventListener("change", (e) => {
  // 3.1. Salvar o valor do input em uma variável
  let valor = e.target.value;

  // 4. Validar se o input é válido
  if (valor.includes("@") && valor.includes(".com")) {
    // Estilo para entrada válida
    emailInput.classList.add("correct");
    emailInput.classList.remove("error");
    emailHelper.classList.remove("visible");
  } else {
    // Estilo para entrada inválida
    emailInput.classList.add("error");
    emailInput.classList.remove("correct");
    emailHelper.classList.add("visible");
    emailHelper.textContent = "O email deve conter '@' e '.com'";
  }
});
