import Link from "next/link";
import styles from "./NavMenuLinks.module.css";
import classNames from "classnames";

const NavMenuLinks = ({ className }: { className: string }) => {
  const linksClass = classNames({
    [styles.linksWrapper]: className === "nav-links",
    [styles.navFooter]: className === "nav-footer",
  });
  return (
    <div className={linksClass}>
      {["home", "about me", "projects", "contact"].map((menuItem, i) => (
        <Link key={i} href={`#${menuItem}`}>
          {menuItem}
        </Link>
      ))}
    </div>
  );
};

export default NavMenuLinks;
