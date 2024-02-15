import InputComLabel from "./components/InputComLabel";
import Botao from "./components/botao";
function App() {
  const estiloBotao = {
    color: 'red',
    backgroundColor: 'lightgreen',
    padding: '8px'
  }
  return (
    <>
      <InputComLabel 
      idString="nome" 
      textoLabel="Nome:" 
      children={ <p>exemplo de children</p> }/>
      <InputComLabel idString="idade" textoLabel="Idade:" />
      <Botao textoBotao="click"></Botao>
      <Botao textoBotao="outro butao"></Botao>
      <h1>ola</h1>
      <button>sera</button>
      <button style={ estiloBotao }>Botao avulso</button>
    </>
  );
}

export default App;
