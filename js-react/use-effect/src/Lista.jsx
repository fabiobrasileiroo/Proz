import styles from "./Lista.module.css";

export default function Lista({ lista }) {
  return (
    <div className={styles.container}>
      <ul>
        {
          lista.map((elemento,indice)=> {
            return <li key={indice}>
              {elemento.first_name}
            </li>
          })
        }
      </ul>
    </div>
  );
}
