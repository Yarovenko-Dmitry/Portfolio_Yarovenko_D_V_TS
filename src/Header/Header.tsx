import React from 'react';
import NavMenu from "./NavMenu/NavMenu";
import stylesConteiner from "../common/styles/Conteiner.module.css";
import styles from './Header.module.css';



const Header = () => {
  return (
    <div className={styles.headerBlock}>
      <div className={`${styles.headerConteiner}`}>
        <NavMenu/>
      </div>
    </div>
  );
}

export default Header;
