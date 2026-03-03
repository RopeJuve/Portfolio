import { ProjectsProps } from "@/types";
import ProjectCard from "./ProjectCard/ProjectCard";

const ProjectsCards = ({ title, projects }: ProjectsProps) => {
  return (
    <div
      id="projects"
      className="mt-section p-6 px-4 flex flex-col gap-4 md:gap-8"
    >
      <h3>{title}</h3>
      {projects.map((project, index) => (
        <ProjectCard
          key={`${index}-${project.projectName}`}
          variant={index % 2 === 0 ? "" : "reverse"}
          project={project}
        />
      ))}
    </div>
  );
};

export default ProjectsCards;
