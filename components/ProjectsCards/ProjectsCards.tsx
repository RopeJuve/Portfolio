import { ProjectsProps } from "@/types";
import ProjectCard from "./ProjectCard/ProjectCard";

const ProjectsCards = ({ title, projects }: ProjectsProps) => {
  return (
    <div
      id="work"
      className="mt-section px-6 md:px-10 xl:px-0 w-[90%] mx-auto grid gap-14"
    >
      <h3 className="text-left border-b border-carbon pb-4">{title}</h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,30rem),1fr))] gap-x-8 gap-y-20">
        {projects.map((project) => (
          <ProjectCard key={project.projectName} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsCards;
