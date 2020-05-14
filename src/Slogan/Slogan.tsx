import React from 'react';
import styles from './Slogan.module.css';
import stylesConteiner from '../common/styles/Conteiner.module.css';


const Slogan = () => {
  return (
    <div className={styles.sloganBlock}>
      <div className={`${stylesConteiner.conteiner} ${styles.skillsConteiner}`}>
        <h2 className={styles.title}>My slogan</h2>
        <p className={styles.sloganText}>When you try, you have two options: you will succeed or not, and when you do not try - only one.</p>
      </div>
    </div>
  );
}

export default Slogan;
