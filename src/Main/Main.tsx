import React from 'react';
import stylesConteiner from '../common/styles/Conteiner.module.css';
import styles from './Main.module.css';

const Main = () => {
  return (
    <div className={styles.mainBlock}>
      <div className={`${stylesConteiner.conteiner} ${styles.mainConteiner}`}>
        <div className={styles.greeting}>
          <span className={styles.greetingHi}> Hi There !!!</span>
          <p className={styles.greetingName}>I'm Yerovenko Dmitry.</p>
          <h1 className={styles.greetingPosition}>Frontend developer.</h1>
        </div>
        <div className={styles.photo}></div>
      </div>


    </div>
  );
}

export default Main;
