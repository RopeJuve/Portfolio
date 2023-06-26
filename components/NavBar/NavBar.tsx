import styles from "./NavBar.module.css";
import { Logo } from "../Logo/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavMenuLinks from "../NavMenuLinks/NavMenuLinks";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Logo className={styles.logo} />
        <NavMenuLinks />
        <FontAwesomeIcon
          icon={faBars}
          style={{ width: "25px", height: "25px", color: "#264653" }}
        />
      </div>
    </div>
  );
};

export default NavBar;
