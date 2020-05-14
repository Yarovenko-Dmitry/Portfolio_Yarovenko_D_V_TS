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
        <div className={styles.projectTitle}>{props.projectTitle}</div>
        <div className={styles.projectBrief}>{props.projectBrief}</div>
      </div>

    </div>

  )
}