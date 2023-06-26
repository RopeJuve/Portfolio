import Link from "next/link";
import styles from "./NavMenuLinks.module.css";

const NavMenuLinks = () => {
  return (
    <div className={styles.linksWrapper}>
      {["home", "about me", "projects", "contact"].map((menuItem, i) => (
        <Link key={i} href={`#${menuItem}`}>
          {menuItem}
        </Link>
      ))}
    </div>
  );
};

export default NavMenuLinks;
