import { useState } from "react";
import styles from "./App.module.css";
import { usuarios } from "./lista";
import Detalhes from "./Detalhes";

function App() {
  let [selecionado, setSelecionado] = useState(null);
  console.log(selecionado);
  return (
    <>
      <h1>Hooks Básicos</h1>
      <div className={styles.container}>
        <div className={styles.lista}>
          <h2>Usuários:</h2>
          <ul>
            {usuarios.map((value, index) => {
              return (
                <li key={index} onClick={() => setSelecionado(value)}>
                  {value.nome}
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
