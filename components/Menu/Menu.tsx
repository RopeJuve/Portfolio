import { MouseEventHandler } from "react";
import NavMenuLinks from "../NavMenuLinks/NavMenuLinks";
import styles from "./Menu.module.css";
import classNames from "classnames";

const Menu = ({
  isOpen,
  handelOpen,
}: {
  isOpen: boolean;
  handelOpen: MouseEventHandler<HTMLDivElement>;
}) => {
  const menuClass = classNames([styles.container], {
    [styles.open]: isOpen,
  });

  return (
    <div className={menuClass} onClick={handelOpen}>
      <div className={styles.menuLinksWrapper}>
        <NavMenuLinks className="nav-menu" />
      </div>
    </div>
  );
};

export default Menu;
