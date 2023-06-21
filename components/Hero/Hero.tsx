import Button from "../Button/Button";
import styles from "./Hero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTelegramPlane,
  faWhatsappSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>
          Hallo,
          <br /> I'm <span className={styles.name}>Robert</span>{" "}
          <span className={styles.sName}>Shterjov</span> Frontend Web Developer
        </h1>
        <h2>Transforming Ideas into Beautifully Responsive Websites</h2>
        <div className={styles.cta}>
          <Button text="contact me" variant="primary" />
          <Button text="download cv" variant="secondary" />
          <div className={styles.social}>
            <FontAwesomeIcon icon={faGithub} className={styles.socialIcons} />
            <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcons} />
            <FontAwesomeIcon
              icon={faWhatsappSquare}
              className={styles.socialIcons}
            />
            <FontAwesomeIcon
              icon={faTelegramPlane}
              className={styles.socialIcons}
            />
          </div>
        </div>
      </div>

      <img
        className={styles.imgContainer}
        src="/images/profile1.png"
        alt="profile"
      />
    </div>
  );
};

export default Hero;
