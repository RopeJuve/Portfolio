import styles from "./Skills.module.css";
import nextJs from "../../public/images/icons/nextjs.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faJsSquare,
  faSass,
  faReact,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Skills = () => {
  return (
    <div className={styles.container}>
      <h3>Skills</h3>
      <div className={styles.skillsList}>
        <FontAwesomeIcon className={styles.skillsIcons} icon={faHtml5} />
        <FontAwesomeIcon className={styles.skillsIcons} icon={faJsSquare} />
        <FontAwesomeIcon className={styles.skillsIcons} icon={faSass} />
        <FontAwesomeIcon className={styles.skillsIcons} icon={faReact} />
        <FontAwesomeIcon className={styles.skillsIcons} icon={faGitAlt} />
        <a className={styles.nextIcon}>
          <Image src={nextJs} alt="next" />
        </a>
      </div>
    </div>
  );
};

export default Skills;
