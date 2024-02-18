import { useState } from "react";
import styles from "./Busca.module.css";
function Busca({busca,setBusca}) {
  return (
    <>
      <label htmlFor="buscas">Busca: </label>
      <input
        type="text"
        id="busca"
        name="busca"
        className={styles.inputBusca}
        value={busca}
        onChange={(e)=> setBusca(e.target.value)}
      />
      <p>{busca}</p>
    </>
  );
}

export default Busca;
