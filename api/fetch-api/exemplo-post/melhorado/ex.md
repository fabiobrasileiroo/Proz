Site:[site]()

```html
    <!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="script.js" defer></script>
    <title>Cadastro de Produtos Geek</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            text-align: center;
            margin: 20px;
        }

        form {
            display: flex;
            flex-direction: column;
            width: 300px;
            margin: 0 auto;
        }

        form>label {
            margin-top: 10px;
        }

        form>input,
        textarea {
            margin-top: 5px;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 3px;
        }

        form>button {
            margin-top: 10px;
            padding: 10px;
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }

        form>button:hover {
            background-color: #45a049;
        }

        #feedback-usuario {
            margin-top: 20px;
            color: #333;
        }

        #produtos-cadastrados {
            margin-top: 20px;
        }

        .postagem {
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 10px;
            text-align: left;
        }
    </style>
</head>

<body>
    <h1>Cadastro de Produtos Geek</h1>
    <form id="form-produto">
        <label for="nome-produto">Nome do produto:</label>
        <input type="text" id="nome-produto" name="nome-produto" required>

        <label for="valor-produto">Valor do produto:</label>
        <input type="number" id="valor-produto" name="valor-produto" required>

        <label for="descricao-produto">Descrição do produto:</label>
        <textarea name="descricao-produto" id="descricao-produto" cols="30" rows="5" required></textarea>

        <button type="button" id="btn-enviar">Cadastrar Produto</button>
    </form>

    <p id="feedback-usuario"></p>

    <section id="produtos-cadastrados"></section>
</body>

</html>
```

```js
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

```