let nome = 'fabio'
let frase = `ola, ${nome}`
let qualquerValor

qualquerValor = 'o'
qualquerValor = 1

console.log(typeof qualquerValor)

let isAdmin: 0 | 1 | boolean = 0

if(isAdmin) {
  // isAdmin = 2
}

console.log(frase)

let tipoUsuario: 'aluno' | 'tutor' | 'admin'

let captura: HTMLElement | null 

let inputNome = document.querySelector('input')
let ancora:any = document.querySelector('a')

inputNome?.value
if(inputNome) {
  inputNome.value
}
ancora.value