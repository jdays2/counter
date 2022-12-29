import styles from "./Score.module.css";
import Button from "./UI/PlusButtons";

function Score({ counter, onClick, owner, id }) {
  return (
    <div className={styles.counter__wrapper}>
      <p className={styles.counter__owner}>{owner}</p>
      <div className={styles.counter__score}>{counter}</div>
      <div className={styles.counter__buttons}>
        <Button plus={1} onClick={onClick} id={id} />
        <Button plus={2} onClick={onClick} id={id} />
        <Button plus={3} onClick={onClick} id={id} />
      </div>
    </div>
  );
}

export default Score;
