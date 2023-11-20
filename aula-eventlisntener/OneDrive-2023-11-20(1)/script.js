// Captura de elementos no DOM(variaveis) QUEM?  
let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");
let btnAdicionar = document.getElementById("btn-adicionar-produto-01")
let qtdProduto01 = document.getElementById("quantidade-produto-01")


let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

//Definir a manipulacao os elementos capturados(funcoes) O QUE?
quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor;
function adicionarUm() {
  qtdProduto01.value = parseInt(qtdProduto01.value) + 1 
}


// Definir quando devem ser minipulados so elementos (eventos) QUANDO?

btnAdicionar.addEventListener("click", adicionarUm)