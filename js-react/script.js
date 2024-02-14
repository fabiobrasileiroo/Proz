// Arrow fuctions
function somar(a,b) {
  return a + b
}

(a, b) => a+b

// // Tempalte strings 
// const a = 'Primeiro' 
// const b =  'segundo' 
// const  concatenado01 = a + '' + b

// const concatenado02 = `${a} ${b}`

// // Exportação e importação
// export const nome = 'fabio'
// export default {
//   nome: 'fabio',
//   idade: 21
// }
const numeros = [4,5,6]
console.log(numeros.join())
console.log(typeof numeros.join())
// console.log(numeros.slice(1))
// console.log(numeros.filter())
const numeros1 = [15,23,52,53,10]
numeros1.push(111)
console.log(numeros1)

const numerosMaiores = numeros1.filter((elemento)=> {
  return  elemento > 50
})

console.log(numerosMaiores,'\n')

const nomes = ['Monica','Cebolinha']
const nomesComCaracteres = nomes.map((elemento,index,valorCompletoArray) => {
  // return (nome, index, sla)
  return {
    nome: elemento,
    caracteres: elemento.length,
    index: index,
    valorCompleto: valorCompletoArray,
    primeiroCaracter: elemento[0]
  }
})
console.log(nomesComCaracteres)