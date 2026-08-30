import Button from "@/components/Button/Button";
import GradedPhoto from "@/components/GradedPhoto/GradedPhoto";
import { Project } from "@/types";

const ProjectCard = ({ project }: { project: Project }) => (
  <article className="project-card flex flex-col gap-5">
    <p data-rise className="text-meta uppercase text-ink">
      {project.techNames.join(" · ")}
    </p>
    <h3 data-rise className="text-card font-normal uppercase text-ink">
      {project.projectName}
    </h3>
    <div data-photo className="aspect-[4/3] w-full overflow-hidden bg-stone">
      <GradedPhoto
        src={project.projectImg}
        alt={`${project.projectName} screenshot`}
        className="h-full w-full origin-center object-cover"
      />
    </div>
    <div className="flex flex-1 flex-col justify-between gap-2">
      <p data-rise className="max-w-[52ch] text-body text-ink">
        {project.description}
      </p>
      <div data-rise className="flex gap-4">
        <Button
          usedAs="link"
          text="Live"
          variant="primaryLink"
          href={project.siteLink}
        />
        <Button
          usedAs="link"
          text="GitHub"
          variant="secondaryLink"
          href={project.gitHubLink}
        />
      </div>
    </div>
  </article>
);

export default ProjectCard;
