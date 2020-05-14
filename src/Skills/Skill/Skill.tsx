import React from 'react';
import styles from './Skill.module.css';

const Skill = (props: any) => {
  return (
    <div className={styles.skill}>
      <div className={styles.icon}>icon</div>
      <h3 className={styles.skillTitle}>{props.title}</h3>
      <span className={styles.description}>
        {props.description}
      </span>
    </div>
  );
}

export default Skill;
