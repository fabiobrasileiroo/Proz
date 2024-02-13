const btnGerar = document.getElementById('btn-gerar')

function gerarUsuario() {
  axios.get("https://random-data-api.com/api/v2/users")
    .then(res => {
      console.log(res.data)
    })
}

btnGerar.addEventListener('click',gerarUsuario)