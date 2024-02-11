// pegando tags no html
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
    helperTextUsuario.innerHTML = 'Carregando...'
    fetch('https://random-data-api.com/api/v2/users')
        .then((res) => res.json())
        .then((data) => {
            const usuario = document.createElement('div')
            usuario.innerHTML = `
            <img src="${data.avatar}"/> 
            <span><strong>Username:</strong>${data.username}</span>
            `
            usuario.classList.add('usuario')
            usuariosContainer.appendChild(usuario)
            setInterval(() => {
                helperTextUsuario.innerHTML = ''
            },1000)
            console.log(data)
        })
        .catch((error)=> {
            helperTextUsuario.innerHTML = 'Não foi possivel gerar um usuário'
            console.log(error)
        })
}
// Eventos de click
btnUsuario .addEventListener('click', gerarUsuario)

// Gerador de postagens
// Captura de elementos
const postTitle = document.getElementById('post-title')
const postBody = document.getElementById('post-body')
const btnPost = document.getElementById('btn-post')
const postsContainer = document.getElementById('posts-container')
const helperTextPost = document.getElementById('helper-text-post')

function gerarPost(evento) { 
    evento.preventDefault()

    console.log(postTitle.value)
    console.log(postBody.value)

    const jsonBody = JSON.stringify({
        titulo:postTitle.value,
        mensagem:postBody.value
    })

    console.log(jsonBody)
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'Post',
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonBody
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const post = document.createElement('div')
        post.classList.add('postagem')
        post.innerHTML = `
            <h3>${data.id} - ${data.titulo}</h3> 
            <p>${data.mensagem}</p>
        `
        postsContainer.prepend(post)
        // Limpar o formulario
        postTitle.value= ''
        postBody.value = ''
        alert("adicionado com sucesso")
        })
    .catch((error) => {
        console.log(error)
        helperTextPost.innerHTML = 'Não foi possivel gerar a postagem '
    })
}

//3. Eventos
btnPost.addEventListener('click',(evento) => gerarPost(evento))
