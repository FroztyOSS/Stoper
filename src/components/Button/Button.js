import styles from './Button.module.scss';

const Button = ({setStart, setTime}) => {

  return (
      <div className={styles.wrapper}>
          <button className={styles.button} onClick={() => setStart(true)}>START</button>
          <button className={styles.button} onClick={() => setStart(false)}>STOP</button>
          <button className={styles.button} onClick={() => {setStart(false); setTime(0)}}>RESET</button>
      </div>
  );

}

export default Button;