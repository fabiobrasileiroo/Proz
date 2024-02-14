let app = document.getElementById("app")

function butao(text,cont=0) {
  cont++
  return `
    <button onclick="butao(cont)">${text}</button>
    <p>contador - ${cont}</p>
  `
}
app.innerHTML = `
  <h1>Ola mundo do jeito do react</h1>
  ${butao('ola button')}
  <p>lorem</p>
  ${butao('2 button')}
`