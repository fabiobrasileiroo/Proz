// lacos condicionais

const input = require('readline-sync')

const numeroSorteado = 2
let numero =  Number(input.question('Qual numero voce escolhe?'))

console.log(numero, typeof numero)
/*
let teste = false
while(teste === false) {
if(numero === numeroSorteado) {
    console.log("venceu na vida malandrao")
    teste = true
} else  {
    console.log('se fufu na vida maladrao')
    numero = Number(input.question('Qual numero voce escolhe')) 
}
}
*/

while (numero !== numeroSorteado) {

    console.log('venceu na vida malandrao')

    numero = Number(input.question('Qual numero voce escolhe?'))
} 

console.log('voce acertou')