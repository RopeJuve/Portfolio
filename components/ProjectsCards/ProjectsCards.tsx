import ProjectCard from "./ProjectCard/ProjectCard";
import styles from "./ProjectsCards.module.css";

const ProjectsCards = () => {
  return (
    <div className={styles.container}>
      <h3>Projects</h3>
      <ProjectCard variant="" />
      <ProjectCard variant="reverse" />
      <ProjectCard variant="" />
      <ProjectCard variant="reverse" />
    </div>
  );
};

export default ProjectsCards;
