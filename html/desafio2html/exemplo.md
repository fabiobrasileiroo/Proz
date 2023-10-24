[Link do site](https://proz-flax.vercel.app/html/desafio2html/index.html)
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cidade de Recife</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        body {
            width: 100vw;
            height: 100vh;
            font-family: Arial, Helvetica, sans-serif;
        }
        header {
            background-color: #2b2b2b;
            color: white;
            display: flex;
            justify-content: space-between;
            padding: 10px;
        }
        header ul{
            margin-top: 10px;
            margin-right: 10px;
        }
        header ul li {
            display: inline;
            padding: 10px;
        }
        header ul li a {
            border: 1px solid white;
            padding: 2px;
            border-radius: 4px;
        }
        .hover:hover{
            background-color: rgb(0, 0, 0, 0.5) ;
        }
        a {
            text-decoration: none;
            color: white;
        }
        .card {
        border: 1px solid black;
        padding: 16px;
        border-radius: 8px;
        background: #f0f0f0;
        flex: 1;
        transition: all ease-in-out 150ms;
        text-align: center;
        margin-right: 20px; 
        }

        .card:last-child {
            margin-right: 0; 
        }

        .card:hover {
            box-shadow: 4px 4px 4px black;
            transform: translate(-2px, -2px);
        }

        .card > h2 {
            border-left: 8px solid rgb(38, 134, 186);
            padding-left: 16px;
        }

        .card img {
            max-width: 100%;
            border-radius: 16px;
        }
        main p {
            width: 50%;
            padding: 10px;
            margin: 0 auto;
            font-size: large;
        }
        main {
            min-height: calc(100vh - 50px);
            padding: 20px;
        }
        footer {
            display: flex;
            justify-content: space-between;
            background-color: #2b2b2b;
            padding: 10px;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
        }
        footer span {
            font-size: large;
            color: white;
        }
        footer ul li{
            display: inline;
            margin-right: 15px;
            border-bottom: 2px solid  white;
        }
        footer ul li a:hover{
            color:aqua;
        }
    </style>
</head>
<body>
    <header>
        <h1>Cidade de Recife</h1>
        <nav>
            <ul>
            <li><a class="hover" href="pontos.html">Pontos</a></li>
            <li><a class="hover" href="index.html">Sobre</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <article>
            <h2>Você conhecer o <strong>Marco zero?</strong></h2>
            <h3>Se não venhar conhecer</h3>
            <div class="card">
                <h2>Coliseu de Roma – Itália</h2>
                <img src="https://imgmd.net/images/c_limit%2Cw_800/v1/guia/1677519/marco-zero.jpg" alt="marco zero">
                <p>O Marco Zero, na Praça Rio Branco, é conhecido como local de fundação da cidade do Recife e também como ponto inicial de contagem das distâncias calculadas a partir da cidade. O lugar é um dos pontos mais importantes na capital Pernambucana, pois é também uma região de forte movimento durante o Carnaval. 
                Aproveite sua visita para tirar uma foto com os dois marcos (o antigo e o novo), observar a vista para o Parque de Esculturas e os edifícios do Centro Cultural da Caixa e da Associação Comercial de Pernambuco.
                Se quiser fazer compras, vale a pena visitar o novo Mercado de Artesanato, que também fica no local. </p>
            </div>
        </article>
    </main>
    <footer>
        <span>
            Feito por Fábio Brasileiro
        </span>
        <nav>
            <ul>
                <li><a href="https://github.com/fabiobrasileiroo" target="_blank">Github</a></li>
                <li><a href="https://www.linkedin.com/in/fabiobrasileiro/" target="_blank">Linkedin</a></li>
            </ul>
        </nav>
    </footer>
    
</body>
</html>
```