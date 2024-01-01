const btnUsuario = document.getElementById('btn-usuario')
const  usuariosContainer = document.getElementById('usuarios-container')
const helperTextUsuario  = document.getElementById('helper-text-usuario')

function gerarUsuario() {
    /*
    const resposta = fetch('https://random-data-api.com/api/v2/users')
    console.log(resposta)

    const tratamentoResposta = resposta.then((res)=>{
        console.log(res)
        return res.json // JSON.parse(stringJSON)
    })

    tratamentoResposta.then((data) => {
        console.log(data)
    })
*/
    fetch('https://random-data-api.com/api/v2/users')
        .then((res) => res.json())
        .then((data) => {
            const usuario = document.createElement('div')
            usuario.innerHTML = `
            <img src="${data.avatar}"/> 
            <span><strong>Username:</strong>${data.username}</span>
            `
            usuariosContainer.appendChild(usuario)
            console.log(data)
        })
}

btnUsuario .addEventListener('click', gerarUsuario)