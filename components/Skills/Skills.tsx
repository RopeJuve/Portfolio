import styles from "./Skills.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextJs } from "../NextIcon";
import Skill from "../Skill/Skill";
import { SkillProps } from "@/types";

const Skills = ({ title, skills }: SkillProps) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <div className={styles.skillsList}>
        {skills.map((skill, index) =>
          skill.skillName !== "next" ? (
            <Skill
              key={`${index}-${skill.skillName}`}
              variant="skills"
              title={skill.skillName}
            >
              <FontAwesomeIcon
                className={styles.skillsIcons}
                icon={skill.skillIcon}
              />
            </Skill>
          ) : (
            <NextJs className={styles.nextIcon} />
          )
        )}
      </div>
    </div>
  );
};

export default Skills;
