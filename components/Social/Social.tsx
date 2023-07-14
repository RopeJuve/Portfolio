import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Social.module.css";
import { data } from "@/data";
const Social = () => {
  const { socialLinks } = data;
  return (
    <div className={styles.social}>
      {socialLinks.map((link, index) => (
        <a
          key={`${link.socialIcon}-${index}`}
          href={link.socialLink}
          target="_blank"
        >
          <FontAwesomeIcon
            icon={link.socialIcon}
            className={styles.socialIcons}
          />
        </a>
      ))}
    </div>
  );
};

export default Social;
