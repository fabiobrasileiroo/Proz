const input = require('readline-sync')

for(let i = 0; i <10; i++) {
const nota1 = Number(input.question('Informe a nota1: '))
const nota2 = Number(input.question('informe a nota2: '))
let media = (nota1 + nota2)/2
console.log(`Sua media e ${media}`)
console.clear()

    console.log(i)
}