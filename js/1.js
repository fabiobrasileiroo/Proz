teste = () => {
    const a = {nome: "fabio"}
    a.nome = "henrique"
    return a 
} 
console.log(teste())
for(var i = 1; i <=10;i++){
    console.log(i)
}
console.log(i)

// pecorre todos os array como for
let letras = ['a','b','c']

console.log(letras.length)

for(let con = 0; con < letras.length; con++) {
    console.log(letras[con])
}