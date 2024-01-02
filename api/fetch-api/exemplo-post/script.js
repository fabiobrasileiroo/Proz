//pegando tags html
const nomeProduto = document.getElementById('nome-produto');
const valorProduto = document.getElementById('valor-produto');
const descricaoProduto = document.getElementById('descricao-produto');
const btnEnviar = document.getElementById('btn-enviar');
const feedbackUsuario = document.getElementById('feedback-usuario')
const produtosCadastrados = document.getElementById('produtos-cadastrados')

function gerarPost(evento) {
    evento.preventDefault()

    console.log(nomeProduto.value)
    console.log(valorProduto.value)
    console.log(descricaoProduto.value)

    const jsonProduto = JSON.stringify({
        nome:nomeProduto.value,
        valor:valorProduto.value,
        descricao:descricaoProduto.value
    })
    console.log(jsonProduto)
    fetch(' https://httpbin.org/post',{
        method: 'Post',
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonProduto
    })
    .then(res => res.json()) 
    .then(data => {
        console.log(data)
        const post = document.createElement('div')
        post.classList.add('postagem')
        post.innerHTML = `
            <h2>Nome: ${data.json.nome}</h2>
            <h3>Valor: ${data.json.valor}</h3>
            <p><strong>Descrição:</strong></p>
            <p>${data.json.descricao}</p>
        `
        produtosCadastrados.prepend(post)
        //limpar formulario
        nomeProduto.value = ''
        valorProduto.value = ''
        descricaoProduto.value = ''
    })
    .catch((error) => {
        console.log(error)
        feedbackUsuario.innerHTML = "Não foi possivel gerar a postagem" 
    })
}

btnEnviar.addEventListener('click',(evento)=> gerarPost(evento))