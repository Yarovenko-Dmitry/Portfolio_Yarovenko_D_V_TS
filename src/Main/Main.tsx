import React from 'react';
import stylesConteiner from '../common/styles/Conteiner.module.css';
import styles from './Main.module.css';

const Main = () => {
  return (
    <div className={styles.mainBlock}>
      <div className={`${stylesConteiner.conteiner} ${styles.mainConteiner}`}>
        <div className={styles.greeting}>
          <span className={styles.greetingHi}> Hi There !!!</span>
          <h1 className={styles.greetingName}>I'm Yerovenko Dmitry.</h1>
          <p className={styles.greetingPosition}>Frontend developer.</p>
        </div>
        <div className={styles.photo}></div>
      </div>


    </div>
  );
}

export default Main;
