const objetoJs = {
    nome: 'Fabio',
    idade: 28,
    estrangeiro: true
}

console.log(typeof(objetoJs))
const objJson = JSON.stringify(objetoJs)
console.log(typeof objJson)

const falsaStringJSON = {
    "nome": "Luiz",
    "idade": 28,
    "estrangeiro": false
}

const stringJSON = JSON.stringify(falsaStringJSON)

console.log(typeof stringJSON)
console.log(falsaStringJSON.nome)
console.log(stringJSON.length)

const convertendoJson = JSON.parse(stringJSON)

console.log(convertendoJson.nome)



