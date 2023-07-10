import NavMenuLinks from "../NavMenuLinks/NavMenuLinks";
import styles from "./Menu.module.css";
import classNames from "classnames";

const Menu = ({ isOpen , handelOpen }: { isOpen: boolean, handelOpen: Function }) => {
  const menuClass = classNames([styles.container], {
    [styles.open]: isOpen,
  });

  const linksClass = classNames([styles.menuLinksWrapper], {
    [styles.down]: isOpen,
  });

  return (
    <div className={menuClass} onClick={handelOpen}>
      <div className={linksClass}>
        <NavMenuLinks className="nav-menu" />
      </div>
    </div>
  );
};

export default Menu;
