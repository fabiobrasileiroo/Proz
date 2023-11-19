//let numero = document.querySelector("h1");
//let botaoMais = document.querySelector(".+");
//let botaoMenos = document.querySelector(".-")
//let contagem = 0;

/*
function adicionarUm() {
    contagem = contagem +1;
    numero.innerHTML = contagem;

}
botao.addEventListener("click",adicionarUm)
*/

/*
botao.addEventListener("click", function(){
    contagem = contagem + 1;
    numero.innerHTML = contagem;
})
*/
/*
botaoMais.addEventListener("click",() => {
    contagem = contagem + 1;
    numero.innerHTML = contagem;
})
*/
let numero = document.querySelector("h1");
let botaoMais = document.querySelector(".mais");
let botaoMenos = document.querySelector(".menos");
let contagem = 0;

function adicionarUm() {
    contagem = contagem + 1;
    if(contagem < 0) {
        contagem = 0
    }
    numero.innerHTML = contagem;
}

function subtrairUm() {
    contagem = contagem - 1;
    if(contagem < 0) {
        contagem = 0
    }
    numero.innerHTML = contagem;
}

botaoMais.addEventListener("click", adicionarUm);
botaoMenos.addEventListener("click", subtrairUm);
