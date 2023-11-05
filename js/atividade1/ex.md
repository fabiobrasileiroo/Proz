# Exemplo clássico do uso de js

 Para mudar a cor da página apenas usando JS, você pode apenas criar uma função caso clique no ícone. Ele vai ativar o  style.css ou mudar o estilo pelo JS. 


### Antes

![Imagem](js.png)

### Depois
![Imagem](js1.png)

#### Exemplo de codigo
```js
// Cria um elemento `button` com um ícone
const button = document.createElement("button");
button.innerHTML = "<i class='fa fa-paint-brush'></i>";

// Adiciona um evento `click` ao botão
button.addEventListener("click", () => {
  // Obtém o elemento `body` da página
  const body = document.querySelector("body");

  // Ativa o `style.css`
  //body.setAttribute("style", "background-color: red");

  // Muda o estilo pelo JS
  body.style.backgroundColor = "red";
});

// Adiciona o botão à página
document.body.appendChild(button);
```