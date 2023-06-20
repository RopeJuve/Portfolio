import styles from "./Skills.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faJsSquare,
  faSass,
  faReact,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { NextJs } from "../NextIcon";
import Skill from "../Skill/Skill";

const Skills = () => {
  return (
    <div className={styles.container}>
      <h3>Skills</h3>
      <div className={styles.skillsList}>
        <Skill variant='skills' title="html">
          <FontAwesomeIcon className={styles.skillsIcons} icon={faHtml5} />
        </Skill>
        <Skill variant='skills' title="java script">
          <FontAwesomeIcon className={styles.skillsIcons} icon={faJsSquare} />
        </Skill>
        <Skill variant='skills' title="sass">
          <FontAwesomeIcon className={styles.skillsIcons} icon={faSass} />
        </Skill>
        <Skill variant='skills' title="react">
          <FontAwesomeIcon className={styles.skillsIcons} icon={faReact} />
        </Skill>
        <Skill variant='skills' title="git">
          <FontAwesomeIcon className={styles.skillsIcons} icon={faGitAlt} />
        </Skill>
        <NextJs className={styles.nextIcon} />
      </div>
    </div>
  );
};

export default Skills;
