import styles from "./App.module.css";
export default function Detalhes({ selecionado }) {
  return (
    <>
      <div className={styles.detalhes}>
        {
          selecionado ?
          <>
            <p>Nome: { selecionado.nome }</p>
            <p>Sobrenome: { selecionado.sobrenome } </p>
            <p>Idade: { selecionado.idade }</p>
            <p>Profissão: { selecionado.profissao }</p>
          </>
          : 
          <p>Selecione um usuario</p>
        }
      </div>
    </>
  );
}
