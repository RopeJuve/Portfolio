import styles from "./Footer.module.css";
import { Logo } from "../Logo";
import Social from "../Social/Social";
import NavMenuLinks from "../NavMenuLinks/NavMenuLinks";

const Footer = () => {
  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      <div className={styles.socialLinks}>
        <NavMenuLinks />
        <Social />
      </div>
      <div className={styles.footerTitle}>
        <h5>© 2023 Robert shterjov</h5>
      </div>
    </div>
  );
};

export default Footer;
