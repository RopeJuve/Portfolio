import { ReactNode } from "react";
import styles from "./Skill.module.css";

const Skill = ({ children, title }: { children: ReactNode; title: string }) => {
  return (
    <div className={styles.container}>
      {children}
      <h4 className={styles.title}>{title}</h4>
    </div>
  );
};

export default Skill;
