import styles from "./styles/Produto.module.css";
function Produto({ nome, estoque }) {
  console.log(nome, estoque);
  // if (estoque != true) return null;
  return (
    <>
      <div
        className={`${styles.container} ${estoque ? "" : styles.indisponivel}`}
      >
        <h3>Produto: {nome}</h3>
        <p>Estoque: {estoque > 0? `${estoque} item(s)` : "Indisponível"}</p>
      </div>
    </>
  );
}
export default Produto;
