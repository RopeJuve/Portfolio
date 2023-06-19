import Project from './ProjectCard/ProjectCard'
import styles from './ProjectsCards.module.css'

const ProjectsCards = () => {
  return (
    <div className={styles.container}>
      <h3>Projects</h3>
        <Project />
    </div>
  )
}

export default ProjectsCards