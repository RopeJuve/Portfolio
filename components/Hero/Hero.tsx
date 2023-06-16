import Button from "../Button/Button";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Hallo, I'm Robert Shterjov Frontend Web Developer</h1>
        <h2>Transforming Ideas into Beautifully Responsive Websites</h2>
      </div>
      <Button text="contact me" variant="primary" />
      <Button text="download cv" variant="secondary" />
    </div>
  );
};

export default Hero;
