import { useState } from "react";
import styles from "./App.module.css";
import { usuarios } from "./components/lista";
import Detalhes from "./Detalhes";
import Busca from "./components/busca/Busca";

function App() {
  let [selecionado, setSelecionado] = useState(null);
  const [busca, setBusca] = useState("");
  return (
    <>
      <h1>Hooks Básicos</h1>
      <Busca busca={busca} setBusca={setBusca} />
      <div className={styles.container}>
        <div className={styles.lista}>
          <h2>Usuários:</h2>
          <ul>
            {usuarios
              .filter((value) => value.nome.includes(busca))
              .map((value, index) => {
                return (
                  <li key={index} onClick={() => setSelecionado(value)}>
                    <button style={{ border: "none", borderRadius: "5px" }}>
                      {value.nome}
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
        <Detalhes selecionado={selecionado}></Detalhes>
      </div>
    </>
  );
}

export default App;
