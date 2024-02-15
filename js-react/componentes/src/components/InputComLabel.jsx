import estilos from '../styles/InputComLabel.module.css'
function InputComLabel({ idString, textoLabel, children}) {
  return (
    <>
      { children }
      <label htmlFor={idString} className={`${estilos.textoNovo} ${estilos.textoBack}`}>{textoLabel}</label>
      <input type="text" id={idString}></input>
      <br />
    </>
  );
}

export default InputComLabel