import styles from "../UI/ResetButton.module.css";

function RessetButton({ onClick }) {
  return (
    <button className={styles.resetButton} onClick={onClick}>
      Reset
    </button>
  );
}

export default RessetButton;
