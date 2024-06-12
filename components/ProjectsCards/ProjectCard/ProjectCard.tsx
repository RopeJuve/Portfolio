import styles from "./ProjectCard.module.css";
import Button from "@/components/Button/Button";
import Skill from "@/components/Skill/Skill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReduxIcon } from "@/components/ReduxIcon";
import { TailwindCSS } from "@/components/TailwindCSS";
import classNames from "classnames";
import { Project } from "@/types";
import { ApiIcon } from "@/components/ApiIcon";

const ProjectCard = ({
  variant,
  project,
}: {
  variant: string;
  project: Project;
}) => {
  const contentClass = classNames([styles.content], {
    [styles.reverse]: variant === "reverse",
    [styles.notReverse]: variant === "",
  });

  const containerClass = classNames([styles.container], {
    [styles.reverse]: variant === "reverse",
  });

  const techClass = classNames([styles.tech], {
    [styles.reverse]: variant === "reverse",
  });

  const ctaClass = classNames([styles.cta], {
    [styles.reverse]: variant === "reverse",
    [styles.notReverse]: variant === "",
  });
  return (
    <div className={containerClass}>
      <img src={project.projectImg} alt="project image" />
      <div className={contentClass}>
        <h5>{project.projectName}</h5>
        <p>{project.description}</p>
        <h5>{project.techTitle}</h5>
        <div className={techClass}>
          {project.techNames.map((tech, index) =>
            tech.skillName !== "Redux" && tech.skillName !== 'Tailwind' && tech.skillName !== 'API' ? (
              <Skill
                key={`${index}-${tech.skillName}`}
                variant="madeWith"
                title={tech.skillName}
              >
                <FontAwesomeIcon
                  className={styles.madeWithIcon}
                  icon={tech.skillIcon}
                />
              </Skill>
            ) : tech.skillName === 'Tailwind' ? (
              <Skill
              key={`${index}-${tech.skillName}`}
              variant="madeWith"
              title="Tailwind CSS"
            >
              <TailwindCSS className={styles.redux} />
            </Skill>
            ) : tech.skillName === 'API' ? (
              <Skill
              key={`${index}-${tech.skillName}`}
              variant="madeWith"
              title="API">
                <ApiIcon className={styles.redux} />
              </Skill>
            ) : (
              <Skill
                key={`${index}-${tech.skillName}`}
                variant="madeWith"
                title="Redux"
              >
                <ReduxIcon className={styles.redux} />
              </Skill>
            )
          )}
        </div>
        <div className={ctaClass}>
          <Button usedAs="link" text="live site" variant="primaryLink" href={project.siteLink} />
          <Button usedAs="link" text="git hub" variant="secondaryLink" href={project.gitHubLink} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
