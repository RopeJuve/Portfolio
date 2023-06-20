import { ReactNode } from "react";
import styles from "./Skill.module.css";
import classNames from "classnames";

const Skill = ({
  children,
  title,
  variant,
}: {
  children: ReactNode;
  title: string;
  variant: string;
}) => {
  const skillClasses = classNames({
    [styles.titleSkills]: variant === "skills",
    [styles.titleMadeWith]: variant === "madeWith",
  });

  return (
    <div className={styles.container}>
      {children}
      <h4 className={skillClasses}>{title}</h4>
    </div>
  );
};

export default Skill;
