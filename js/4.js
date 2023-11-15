// 1. Coercao explicita(manual)

const numero = 10
console.log(numero, typeof numero)

const numeroEmFormatoDeString = String(numero)
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)

console.log(Number('12345'))


console.clear()

const sera = '10' + 1
console.log(sera, typeof sera)

const seraDeNovo = '10' % 2 == 0
console.log(seraDeNovo,typeof seraDeNovo )

const seraMaisUmaVez = 10 - 'asdas'
console.log(seraMaisUmaVez, typeof seraMaisUmaVez)

10
95
5234
15
console.clear()

const media = 6

if(media >= 7) {
    console.log('malandrao passo')
} else if(media >= 5 && media < 7){
    console.log('maladrao ficou de rep se fufu')
} else {
    console.log('malandrao se fufu de vez')
}
