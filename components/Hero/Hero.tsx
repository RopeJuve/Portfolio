import Button from "../Button/Button";
import styles from "./Hero.module.css";
import Social from "../Social/Social";
import { HeaderProps } from "@/types";

const Hero = ({ title, subTitle, profileImage }: HeaderProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <div className={styles.cta}>
          <div className={styles.btnWrapper}>
            <Button text="contact me" variant="primary" href="contact"/>
            <Button text="download cv" variant="secondary" />
          </div>
          <Social />
        </div>
      </div>
      <img className={styles.imgContainer} src={profileImage} alt="profile" />
    </div>
  );
};

export default Hero;
