let inputError = document.querySelector('.error');
inputError.classList.remove('error');
console.log(inputError.classList.contains('error'));

let inputCorrect = document.querySelector('#login-senha');
inputCorrect.classList.remove('correct');
console.log(inputCorrect.classList.contains('correct'));

let paragrafoVisible = document.querySelector('.visible')
paragrafoVisible.classList.remove('visible')
console.log(paragrafoVisible)

let h2 = document.querySelector("h2")
h2.style.color = 'red'

h2.style.fontSize = '40px'

let botao = document.querySelector('button')
botao.style.color = 'white'
botao.style.backgroundColor = 'blue'
botao.style.fontSize = '16px'