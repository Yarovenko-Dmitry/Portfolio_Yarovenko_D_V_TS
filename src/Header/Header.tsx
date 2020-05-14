import React from 'react';
import styles from './Header.module.css';
import NavMenu from "./NavMenu/NavMenu";
import stylesConteiner from "../common/styles/Conteiner.module.css";


const Header = () => {
  return (
    <div className={styles.headerBlock}>
      <div className={`${stylesConteiner.conteiner} ${styles.headerConteiner}`}>
        <NavMenu/>
      </div>
    </div>
  );
}

export default Header;
