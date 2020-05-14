import styles from "./Project.module.css";
import React from "react";

export const Project = (props: any) => {
  return (
    <div className={styles.singleProject}>
      <div className={styles.projectDisplay}>
        {props.img}
        <button className={styles.btnSeeMore}>see more</button>
      </div>
      <div className={styles.projectDescription}>
        <h3 className={styles.projectTitle}>{props.projectTitle}</h3>
        <p className={styles.projectBrief}>{props.projectBrief}</p>
      </div>

    </div>

  )
}