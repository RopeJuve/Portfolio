import Button from "@/components/Button/Button";
import { Project } from "@/types";

const ProjectCard = ({ project }: { project: Project }) => (
  <article className="flex flex-col gap-5">
    <p className="text-caption text-left text-carbon uppercase tracking-widest">
      {project.techNames.map((tech) => tech.skillName).join(" · ")}
    </p>
    <h3 className="text-left text-3xl">{project.projectName}</h3>
    <div className="w-full aspect-[4/3] overflow-hidden bg-ash border border-border">
      <img
        src={project.projectImg}
        alt={`${project.projectName} screenshot`}
        className="w-full h-full object-cover"
      />
    </div>
    <p className="text-left">{project.description}</p>
    <div className="flex gap-4">
      <Button
        usedAs="link"
        text="live site"
        variant="primaryLink"
        href={project.siteLink}
      />
      <Button
        usedAs="link"
        text="git hub"
        variant="secondaryLink"
        href={project.gitHubLink}
      />
    </div>
  </article>
);

export default ProjectCard;
