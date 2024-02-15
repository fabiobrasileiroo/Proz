import Produto from "./components/Produto";
import "./App.css";

const listaInstrumentos = [
  { nomeInstrumento: "Guitarra", estoqueInstrumento: 12 },
  { nomeInstrumento: "Ukulele", estoqueInstrumento: 2 },
  { nomeInstrumento: "Pandeiro", estoqueInstrumento: 5 },
  { nomeInstrumento: "Violão", estoqueInstrumento: 6 },
  { nomeInstrumento: "Guitarra" },
];

function App() {
  return (
    <>
      <h1>Renderização</h1>
      {listaInstrumentos.map((value, index) => {
        return (
          <Produto
            key={index}
            nome={value.nomeInstrumento}
            estoque={value.estoqueInstrumento}
          />
        );
      })}
      {/* <Produto nome="Guitarra" estoque={1} /> */}
      {/* <Produto nome="Ukulele" estoque={8} /> */}
      {/* <Produto nome="Banjo" /> */}
    </>
  );
}

export default App;
