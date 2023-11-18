
[Link Site do codigo](https://proz-flax.vercel.app/js/ativ6/index.html)
## Html
[Link Html](https://github.com/fabiobrasileiroo/Proz/blob/main/js/ativ6/index.html)
``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script defer src="index.js"></script>
</head>
<body>
</body>
</html>
```
## Codigo js
[link do codigo js](https://github.com/fabiobrasileiroo/Proz/blob/main/js/ativ6/index.js)
```js
// Use addEventListener para cada coisa ser carregar 
// em cascata do primerio ao ultimo
document.addEventListener("DOMContentLoaded", function() {
    document.body.style.fontFamily = "Arial"
    // Criação do título
    let titulo = document.createElement("h1");
    titulo.innerText = "Bem-vindo ao meu site de venda de produtos";
    titulo.id = "titulo";

    // Adiciona o título ao corpo do documento
    document.body.appendChild(titulo);

    // Adiciona uma ID ao corpo do documento
    document.body.id = "body";

    // Criação da div com a classe "card"
    let divCard = document.createElement("div");
    divCard.classList.add("card");
    divCard.style.width = "250px"
    divCard.style.display = "flex"
    divCard.style.flexDirection = "column"
    divCard.style.justifyContent = "center"
    divCard.style.alignItems = "center"
    divCard.style.backgroundColor = "#343541"
    divCard.style.color = "#fff"
    divCard.style.borderRadius = "15px"
    // Criação da imagem
    let imagem1 = document.createElement("img");
    imagem1.src = './marmita-fitness.png';
    imagem1.style.width = '200px';
    imagem1.style.height = 'auto';
    imagem1.style.margin = '10px';
    imagem1.style.border = '1px solid #ccc';
    imagem1.style.borderRadius = '10px';
    imagem1.style.boxShadow = '0 0 10px rgba(0,0,0, 0.1)';

    // Adiciona a imagem à div com a classe "card"
    divCard.appendChild(imagem1);

    let nome =  document.createElement("h2")
    let descricao = document.createElement("p")
    let preco = document.createElement("h3")

    nome.innerText = "Marmita fit"
    divCard.appendChild(nome)

    descricao.innerText = "Frango 55gramas, brocolis 50gramas e arroz 200gramas"
    divCard.appendChild(descricao)
    descricao.style.textAlign = "center"

    preco.innerText = "RS 10,00"
    preco.style.backgroundColor = "#000"
    divCard.appendChild(preco)

    // Adiciona a div com a classe "card" ao corpo do documento
    document.body.appendChild(divCard);
});
```