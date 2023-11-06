const a = function () {
  console.log("Boas-vindas");
  console.log("mais um");
  return 20; // Retorna o valor 20
};

console.log(a()) // Chbama a função e armazena o valor retornado em 'valor'

function multiplicar(num1,num2) {
    return num1*num2
}
console.log(multiplicar(2,2))


function parimp(n) {
    if(n%2==0) {
        return 'par'
    } else {
        return 'impar'
    }
}
let res = (parimp(2))
console.log(parimp(5))
console.log(res)

let elevadoQuadrado = (y)=> {
    return y*2
}


let x = elevadoQuadrado(2)
console.log(x)

/*
function fatorial(n) {
    let fat = 1
    for(let c = n; c >1; c--) {
        fat *= c
    }
    return fat
} 

fatorial5 = fatorial(100)
console.log(fatorial5)
*/
//funcao recursiva

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n* fatorial(n-1)
    }
}

console.log(fatorial(1))