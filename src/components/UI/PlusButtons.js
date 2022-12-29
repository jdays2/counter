import styles from "./PlusButtons.module.css";

function Button({ plus, onClick, id }) {
  return (
    <button className={styles.plusButton} onClick={() => onClick(id, plus)}>
      +{plus}
    </button>
  );
}

export default Button;
