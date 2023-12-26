const produtos = [
    {nome: 'leite', preco: 7.99, marca: 'Tirol'},
    {nome: 'suco', preco:10, marca: 'delvale'}
]
// Método stringify() para converter o array numa string JSON
const stringJSON = JSON.stringify(produtos)

console.log(stringJSON)

const arrayJS = JSON.parse(stringJSON)

console.log(arrayJS)
