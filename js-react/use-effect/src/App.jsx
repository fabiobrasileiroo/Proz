import { useEffect, useState } from "react";
import Lista from "./Lista";
import Paginacao from "./Paginacao";
import "./App.css";

function App() {
  const [lista, setLista] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [pagina, setPagina] = useState(1);
  useEffect(() => {
    setCarregando(true);
    fetch(`https://reqres.in/api/users?page=${pagina}`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log(dados.data);
        setLista(dados.data);
        setCarregando(false);
      });
  }, [pagina]);
  // useEffect(() => {
  //   console.log(pagina);
  // }, [pagina]);
  return (
    <>
      <h1>Use Effect</h1>
      {carregando == true ? <p>Carregando...</p> : <Lista lista={lista} />}
      <Paginacao pagina={pagina} setPagina={setPagina} />
    </>
  );
}

export default App;
