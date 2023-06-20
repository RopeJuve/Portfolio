import Image from "next/image";
import styles from "./ProjectCard.module.css";
import laptop from "@/public/images/Laptop.png";
import Button from "@/components/Button/Button";
import Skill from "@/components/Skill/Skill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { ReduxIcon } from "@/components/ReduxIcon";
import classNames from "classnames";

const ProjectCard = ({ variant }: { variant: string }) => {
  const contentClass = classNames([styles.content], {
    [styles.reverse]: variant === "reverse",
  });

  const containerClass = classNames([styles.container], {
    [styles.reverse]: variant === "reverse",
  });
  return (
    <div className={containerClass}>
      <Image src={laptop} alt="laptop" />
      <div className={contentClass}>
        <h5>Audiophile e-commerce website</h5>
        <p>
          Multi-page Figma conversion made using a Frontend Mentor design files.
          Responsive across devices.
        </p>
        <h5>Made with</h5>
        <div className={styles.tech}>
          <Skill variant="madeWith" title="react">
            <FontAwesomeIcon className={styles.madeWithIcon} icon={faReact} />
          </Skill>
          <Skill variant="madeWith" title="java script">
            <FontAwesomeIcon
              className={styles.madeWithIcon}
              icon={faJsSquare}
            />
          </Skill>
          <Skill variant="madeWith" title="sass">
            <FontAwesomeIcon className={styles.madeWithIcon} icon={faSass} />
          </Skill>
          <Skill variant="madeWith" title="redux">
            <ReduxIcon className={styles.redux} />
          </Skill>
        </div>
        <div className={styles.cta}>
          <Button text="live site" variant="primary" />
          <Button text="git hub" variant="secondary" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
