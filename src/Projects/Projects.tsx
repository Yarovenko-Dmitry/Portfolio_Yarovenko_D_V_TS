import React from 'react';
import stylesConteiner from '../common/styles/Conteiner.module.css';
import styles from './Projects.module.css';


const Projects = () => {
  return (
    <div className={styles.projectsBlock}>
      <div className={`${stylesConteiner.conteiner} ${styles.projectsConteiner}`}>
        <h2 className={styles.title}>My projects</h2>
        <div className={styles.projects}>
          <SingleProject img={'add img sa bg'}
                         projectTitle={'First title'}
                         projectBrief={'fish-text 1 lmnff sdflid dsf'}/>
          <SingleProject img={'add img sa bg'}
                         projectTitle={'Second title'}
                         projectBrief={'fish-text 2 dsf lmnff dsf sdflid '}/>
        </div>
      </div>
    </div>
  );
}

const SingleProject = (props: any) => {
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

export default Projects;
