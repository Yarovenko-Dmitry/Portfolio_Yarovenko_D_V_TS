import React from 'react';
import stylesConteiner from '../common/styles/Conteiner.module.css';
import styles from './Footer.module.css';


const Footer = () => {
  return (
    <div className={styles.footerBlock}>
      <div className={`${stylesConteiner.conteiner} ${styles.footerConteiner}`}>
        <h2 className={styles.title}>Yarovenko Dmitry</h2>
        <div className={styles.iconsBlock}>
          <div className={styles.icon}>LinkedIn</div>
          <div className={styles.icon}>GitHub</div>
          <div className={styles.icon}>Viber</div>
          <div className={styles.icon}>Telegram</div>
          <div className={styles.icon}>WhatsApps</div>
        </div>
        <p className={styles.allRights}>&copy; All rights reserved</p>
      </div>


    </div>
  );
}

export default Footer;
