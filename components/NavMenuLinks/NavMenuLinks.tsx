import styles from "./NavMenuLinks.module.css";
import classNames from "classnames";

const NavMenuLinks = ({ className }: { className: string }) => {
  const linksClass = classNames({
    [styles.linksWrapper]: className === "nav-links",
    [styles.navFooter]: className === "nav-footer",
    [styles.navMenu]: className === "nav-menu",
  });
  return (
    <div className={linksClass}>
      {["home", "about me", "projects", "contact"].map((menuItem, i) => (
        <a key={`${i}-${menuItem}`} href={`#${menuItem}`}>
          {menuItem}
        </a>
      ))}
    </div>
  );
};

export default NavMenuLinks;
