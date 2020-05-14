import React from 'react';
import stylesConteiner from '../common/styles/Conteiner.module.css';
import {Project} from "./Project/Project";
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <div className={styles.projectsBlock}>

      <div className={`${stylesConteiner.conteiner} ${styles.projectsConteiner}`}>
        <h2 className={styles.title}>My projects</h2>
        <div className={styles.projects}>
          <Project img={'add img sa bg'}
                   projectTitle={'First title'}
                   projectBrief={'fish-text 1 lmnff sdflid dsf'}/>
          <Project img={'add img sa bg'}
                   projectTitle={'Second title'}
                   projectBrief={'fish-text 2 dsf lmnff dsf sdflid '}/>
        </div>
      </div>
    </div>
  );
}

export default Projects;
