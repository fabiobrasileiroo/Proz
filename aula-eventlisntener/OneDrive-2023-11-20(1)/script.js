// Captura de elementos no DOM(variaveis) QUEM?  
let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");
let btnAdicionar = document.getElementById("btn-adicionar-produto-01")
let qtdProduto01 = document.getElementById("quantidade-produto-01")
let qtdProdutoMenos01 = document.getElementById("btn-subtrair-produto-01")
let valorProduto1 = 11.66

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

//Definir a manipulacao os elementos capturados(funcoes) O QUE?
function atualizarSubtotal() {
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);

}

function adicionarUm() {
  qtdProduto01.value = Number(qtdProduto01.value) + 1 
    // Adicionar 1 ao subtotal
    //quantidadeSubtotal  
    subtotalInfo.quantidade = subtotalInfo.quantidade + 1
  
    //Adicionar o valor do produto ao  subtotal
    subtotalInfo.valor = subtotalInfo.valor + valorProduto1

    // Atualizar o Dom
    atualizarSubtotal()
}
atualizarSubtotal()
function DiminuirUm() {
  // Adicionando 1 à quantidade do produto
  qtdProduto01.value = parserInt(qtdProduto01.value) -1
}


// Definir quando devem ser minipulados so elementos (eventos) QUANDO?

btnAdicionar.addEventListener("click", adicionarUm)

