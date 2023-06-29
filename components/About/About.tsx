import { AboutProps } from "@/types";
import styles from "./About.module.css";

const About = ({ title, aboutMe }: AboutProps) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <div className={styles.text}>
        {aboutMe.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default About;
