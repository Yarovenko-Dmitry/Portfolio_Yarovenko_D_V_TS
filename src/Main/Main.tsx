import React from 'react';
import styles from './Main.module.css';
import stylesConteiner from '../common/styles/Conteiner.module.css';

const Main = () => {
  return (
    <div className={styles.mainBlock}>
      <div className={`${stylesConteiner.conteiner} ${styles.mainConteiner}`}>
        <div className={styles.greeting}>
          <span> Hi There !!!</span>
          <h1>I'm Yerovenko Dmitry.</h1>
          <p>Frontend developer.</p>
        </div>
        <div className={styles.photo}></div>
      </div>


    </div>
  );
}

export default Main;
