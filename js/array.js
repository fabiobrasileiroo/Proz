const array= [30,12,43,32,29]

console.log(array.slice(0,3)) // minimo e maximo

console.log(array.slice(2)) // vai do minimo ao maximo sendo que minimo e o maximo

array.push(1,3,4)
console.log(array)

array.unshift(0)
console.log('No comeco',array)

const elementoRemovido = array.pop()
console.log(array)

console.log(elementoRemovido)

array.shift()
console.log(array)

console.clear()
const array2 = [2,3,4,1]

console.log(array)
console.log(array2)

console.log(array.concat(array2))
console.clear()

console.log(array)

let indiceDoElemento = array.indexOf(32)

console.log(indiceDoElemento)

let array3 = [2,3,5,6,1]
console.log(array.lastIndexOf(3))

console.clear()

console.log(array)
console.log(array.includes(30))

const arrayInvertido = array.reverse()