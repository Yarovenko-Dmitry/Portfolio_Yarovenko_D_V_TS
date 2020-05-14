import React from 'react';
import styles from './Skills.module.css';
import stylesConteiner from '../common/styles/Conteiner.module.css';
import Skill from "./Skill/Skill";

const Skills = () => {
  return (
    <div className={styles.skillsBlock}>
      <div className={`${stylesConteiner.conteiner} ${styles.skillsConteiner}`}>
        <h2 className={styles.title}>My skills</h2>
        <div className={styles.skills}>
          <Skill title={'TS'} description={' TS fkjnf sdfiv  lskafj sadf dfk fkjnf sdfiv  lskafj sadf dfk fkjnf sdfiv  lskafj sadf dfk'}/>
          <Skill title={'React' } description={' React fkjnf sdfiv  lskafj sadf dfk'}/>
          <Skill title={'Node.js'}description={' Node.js fkjnf sdfiv  lskafj sadf dfk'}/>
        </div>
      </div>


    </div>
  );
}

export default Skills;
