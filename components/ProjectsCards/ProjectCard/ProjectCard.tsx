import Button from "@/components/Button/Button";
import Skill from "@/components/Skill/Skill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReduxIcon } from "@/components/ReduxIcon";
import { TailwindCSS } from "@/components/TailwindCSS";
import { cn } from "@/lib/utils";
import { Project } from "@/types";
import { ApiIcon } from "@/components/ApiIcon";

const iconClass =
  "transition-all text-primary w-14 h-14 hover:scale-110 hover:text-accent";

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
        "max-w-container mx-auto bg-frame bg-texture border border-primary shadow-[3px_3px_0px_hsl(73_5%_22%)] rounded-[2.5rem] p-6 md:px-10 xl:px-0 grid gap-4 md:grid-cols-2"
      )}
    >
      <img
        src={project.projectImg}
        alt={`${project.projectName} screenshot`}
        className={cn("w-full h-auto", isReverse && "md:col-start-2")}
      />
      <div
        className={cn(
          "flex flex-col gap-2 self-center",
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
        <div
          className={cn(
            "flex justify-center items-center gap-4",
            isReverse ? "md:justify-end" : "md:justify-start"
          )}
        >
          {project.techNames.map((tech, index) => {
            if (tech.skillName === "Tailwind") {
              return (
                <Skill key={`${index}-${tech.skillName}`} title="Tailwind CSS">
                  <TailwindCSS className={iconClass} />
                </Skill>
              );
            }

            if (tech.skillName === "API") {
              return (
                <Skill key={`${index}-${tech.skillName}`} title="API">
                  <ApiIcon className={iconClass} />
                </Skill>
              );
            }

            if (tech.skillName === "Redux") {
              return (
                <Skill key={`${index}-${tech.skillName}`} title="Redux">
                  <ReduxIcon className={iconClass} />
                </Skill>
              );
            }

            return (
              <Skill key={`${index}-${tech.skillName}`} title={tech.skillName}>
                <FontAwesomeIcon className={iconClass} icon={tech.skillIcon} />
              </Skill>
            );
          })}
        </div>
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
