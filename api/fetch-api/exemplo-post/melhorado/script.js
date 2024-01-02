document.addEventListener("DOMContentLoaded", function () {
    const nomeProduto = document.getElementById("nome-produto");
    const valorProduto = document.getElementById("valor-produto");
    const descricaoProduto = document.getElementById("descricao-produto");
    const btnEnviar = document.getElementById("btn-enviar");
    const feedbackUsuario = document.getElementById("feedback-usuario");
    const produtosCadastrados = document.getElementById("produtos-cadastrados");
    const formProduto = document.getElementById("form-produto");

    btnEnviar.addEventListener("click", function () {
        const nome = nomeProduto.value.trim();
        const valor = valorProduto.value.trim();
        const descricao = descricaoProduto.value.trim();

        if (nome === "" || valor === "" || descricao === "") {
            feedbackUsuario.textContent = "Preencha todos os campos.";
            return;
        }

        const jsonProduto = JSON.stringify({
            produto: nome,
            valor: valor,
            descricao: descricao,
        });

        fetch("https://httpbin.org/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: jsonProduto,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                const post = document.createElement("div");
                post.classList.add("postagem");
                post.innerHTML = `
            <h2>Nome: ${data.json.produto}</h2>
            <h3>Valor: ${data.json.valor}</h3>
            <p>Descrição:</p>
            <p>${data.json.descricao}</p>
        `;

                produtosCadastrados.prepend(post);

                feedbackUsuario.textContent = "Produto cadastrado com sucesso.";
                formProduto.reset(); // Limpa os campos do formulário
            })
            .catch((error) => {
                console.error("Erro na requisição:", error);
                feedbackUsuario.textContent =
                    "Erro ao cadastrar o produto. Tente novamente mais tarde.";
            });
    });
});
