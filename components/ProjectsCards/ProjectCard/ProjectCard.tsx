import Button from "@/components/Button/Button";
import Pill from "@/components/ui/pill";
import { cn } from "@/lib/utils";
import { Project } from "@/types";

const ProjectCard = ({
  variant,
  project,
}: {
  variant: string;
  project: Project;
}) => {
  const isReverse = variant === "reverse";

  return (
    <div
      className={cn(
        "max-w-container mx-auto border border-border rounded-flat bg-linen grid gap-0 md:grid-cols-2"
      )}
    >
      <img
        src={project.projectImg}
        alt={`${project.projectName} screenshot`}
        className={cn(
          "w-full h-full object-cover",
          isReverse && "md:col-start-2"
        )}
      />
      <div
        className={cn(
          "flex flex-col gap-4 justify-center p-6 md:p-10",
          isReverse && "md:col-start-1 md:row-start-1 md:text-right"
        )}
      >
        <h5 className={cn("text-center", isReverse ? "md:text-right" : "md:text-left")}>
          {project.projectName}
        </h5>
        <p
          className={cn(
            "mx-auto max-w-full",
            isReverse
              ? "md:text-right md:mr-0 md:max-w-[70%] md:ml-auto"
              : "md:text-left md:ml-0 md:max-w-[70%]"
          )}
        >
          {project.description}
        </p>
        <h5 className={cn("text-center", isReverse ? "md:text-right" : "md:text-left")}>
          {project.techTitle}
        </h5>
        <ul
          className={cn(
            "flex flex-wrap justify-center items-center gap-2",
            isReverse ? "md:justify-end" : "md:justify-start"
          )}
        >
          {project.techNames.map((tech) => (
            <li key={tech.skillName}>
              <Pill className="bg-frame">{tech.skillName}</Pill>
            </li>
          ))}
        </ul>
        <div
          className={cn(
            "flex gap-4 justify-center",
            isReverse ? "md:justify-end" : "md:justify-start"
          )}
        >
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
      </div>
    </div>
  );
};

export default ProjectCard;
