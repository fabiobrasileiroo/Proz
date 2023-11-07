let sum = (a,b) => a+b

console.log(sum(2,4))

let isAdult = age => age >= 18

console.log(isAdult(19))

let getRandoNumber = () => Math.round(Math.random() * 100)

console.log(getRandoNumber())

console.log(Math.random(Math.random()* 100))

/*
let botao = document.querySelector(".butao");
botao.addEventListener('click', function() {
    console.log('clicked');
});
*/

//botao..addEventListener('click', () => console.log('clicked'))

class Person {
    constructor(name) {
        this.name = name
    }

}

printNameFunction() {
    setTimeout(function() {
        console.log(this.name)
    }, 100);
}

printNameArrowFunction() {
    setTimeout(() => {
        console.log(this.name)
    }, 100);
}