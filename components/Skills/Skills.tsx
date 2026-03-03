import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextJs } from "../NextIcon";
import Skill from "../Skill/Skill";
import { SkillProps } from "@/types";

const skillIconClass =
  "transition-all text-primary w-20 h-20 hover:scale-110 hover:text-accent";

const nextIconClass =
  "justify-self-center transition-all w-24 h-full text-primary hover:scale-110 hover:text-accent";

const Skills = ({ title, skills }: SkillProps) => {
  return (
    <div className="mt-section py-4 bg-frame bg-texture">
      <h3>{title}</h3>
      <div className="max-w-container mx-auto mt-6 px-4 md:px-10 xl:px-0 grid grid-cols-3 md:grid-cols-6 items-center gap-2">
        {skills.map((skill, index) =>
          skill.skillName !== "next" ? (
            <Skill
              key={`${index}-${skill.skillName}`}
              variant="skills"
              title={skill.skillName}
            >
              <FontAwesomeIcon className={skillIconClass} icon={skill.skillIcon} />
            </Skill>
          ) : (
            <NextJs key={`${index}-${skill.skillName}`} className={nextIconClass} />
          )
        )}
      </div>
    </div>
  );
};

export default Skills;
