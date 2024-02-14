let lista = [1, 2, 3, 4, 5];
lista.push(6);
console.log(lista);

const produto = {
  nome: "leite",
  valor: 7.99,
};

// let nome = produto.nome
// let valor = produto.valor
let { nome, valor } = produto;
console.log(nome, valor);

const produtos = ["Bolacha", "Arroz", "Guanará"];

// const elemento01 = produtos[0]
// const elemento02 = produtos[1]

const [elemento01, elemento02, elemento03] = produtos;

console.log(elemento01);

const idade = 15;
let bebida = idade >= 18 ? "vinho" : "suco";
console.log("\n", bebida);

// Operador Spread
let numerosImpares = [1, 3, 5];
let numeros = [...numerosImpares, 2, 4, 5];
console.log(numeros[0]);

let info = {
  nome: "Maria",
  idade: "37",
};
let dadosDeAcesso = {
  login: "maria.al",
  senha: "1234",
};

let usuario = {
  ...info,
  ...dadosDeAcesso,
};
console.log(usuario);

let numeros1 = [1, 2, 3];
console.log(numeros1 == [1, 2, 3]);

//
let numeros92 = [4, 2, 3, 4, 5];

for (let numeros in numeros92) {
  console.log(numeros92[numeros]);
}
// for (let i = 0; i < numeros92.length; i++) {
//   console.log(numeros92[i]);
// }
// console.log('\n')
for (let numeros of numeros92) {
  console.log(numeros);
}

let filme = {
  titulo: 'Toy Story',
  ano: 1995,
  genero: 'animacao'
}
// filme.titulo
// filme['titulo']
for (let chave in filme) {
  console.log(`${chave}: ${filme[chave]}`)
}