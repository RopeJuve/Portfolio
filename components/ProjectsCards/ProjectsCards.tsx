import { ProjectsProps } from "@/types";
import ProjectCard from "./ProjectCard/ProjectCard";
import styles from "./ProjectsCards.module.css";

const ProjectsCards = ({ title, projects }: ProjectsProps) => {
  return (
    <div id="projects" className={styles.container}>
      <h3>{title}</h3>
      {projects.map((project, index) => (
        <ProjectCard
          key={`${index}-${project.projectName}`}
          variant={index % 2 == 0 ? "" : "reverse"}
          project={project}
        />
      ))}
    </div>
  );
};

export default ProjectsCards;
