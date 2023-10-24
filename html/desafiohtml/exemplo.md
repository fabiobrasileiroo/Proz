[Link do site](https://proz-flax.vercel.app/html/desafiohtml/index.html)
``` html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pontos turistico | Que quero ir;)</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        body {
            font-family: Arial, Helvetica, sans-serif;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }
        a {
            text-decoration: none;
        }
        header {
            display: flex;
            justify-content: space-between;
            background-color: rgb(154, 154, 154);
        }
        header nav ul, header h2 {
            padding: 10px;
        }
        header nav ul li {
            display: inline;
        }
        header nav ul li a {
            color: black;
        }
        main {
            line-height: 1.5;
            flex-grow: 1;
        }
        section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        h1,h3,p{
            text-align:center;
        }
        footer {
            display: flex;
            justify-content: space-between;
            background-color: rgb(154, 154, 154);
        }
        footer ul li {
            display: inline;
        }
        footer ul li a {
            color: black; 
        }
        .card-container {
            display: flex;
            justify-content: space-between;
            max-width: 700px; 
            margin: 0 auto;
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
</style>

</head>
<body>
    <header>
        <h2>Euro Tour</h2>
            <nav>
                <ul>
                    <li><a href="#">Passagens</a></li>
                    <li><a href="#">Hospedagem</a></li>
                    <li><a href="#">Pontos Turísticos</a></li>
                </ul>
            </nav>
    </header>
    <main>    
        <section>
            <h1>Seja bem-vindo</h1>
            <h3>Ao lugares onde Fábio queria ir, mas não tem money ):</h3>
            <p>Esse é o meu primeiro blog, portanto gostaria 
	        de documentar meus pensamentos e alguns lugares com 
	        vocês,espero que gostem.</p>
        </section>
        <div class="card-container">
    <div class="card">
        <h2>Coliseu de Roma – Itália</h2>
        <img src="https://itaseguroviagem.com.br/wp-content/uploads/2023/02/pontos-turisticos-da-europa-para-voce-conhecer.jpg" alt="Roma antiga na Europa">
        <p>O Coliseu de Roma ou Anfiteatro Flaviano é um dos principais pontos turísticos da Itália e um dos monumentos mais famosos do mundo.</p>
    </div>
    <div class="card">
        <h2>Torre de Belém - Portugal</h2>
        <img src="https://itaseguroviagem.com.br/wp-content/uploads/2023/02/pontos-turisticos-da-europa-conheca-os-principais.jpg" alt="Torre de Belém">
        A Torre de Belém é um dos pontos turísticos da Europa mais visitados e um dos principais de Portugal. 
    </div>
    <div class="card">
        <h2>Torre de Paris</h2>
        <img src="https://www.melhoresdestinos.com.br/wp-content/uploads/2019/08/paris-820x546.jpg" alt="">
        <p>pontos turísticos mundialmente conhecidos – Torre Eiffel, o Museu do Louvre, o Arco do Triunfo, o Sacré Coeu</p>
    </div>
    </main>

    <footer>
	    <h3>EuroTour(c)</h3>
	    <ul>
    		<li><a href=”facebook.com/meublog”>Facebook</a></li>
    		<li><a href=”instagram.com/meublog”>Instagram</a></li>
    		<li><a href=”twitter.com/meublog”>Twitter</a></li>
	    </ul>
    </footer>  

</body>
</html>
```