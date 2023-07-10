"use client";
import styles from "./NavBar.module.css";
import { Logo } from "../Logo/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavMenuLinks from "../NavMenuLinks/NavMenuLinks";
import { useState } from "react";
import Menu from "../Menu/Menu";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handelOpen = () => setOpenMenu(!openMenu);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Logo className={styles.logo} />
          <NavMenuLinks className="nav-links" />
          <FontAwesomeIcon
            className={styles.hamburger}
            icon={faBars}
            style={{ width: "25px", height: "25px", color: "#264653" }}
            onClick={handelOpen}
          />
        </div>
      </div>
      {openMenu && <Menu isOpen={openMenu} handelOpen={handelOpen}/>}
    </>
  );
};

export default NavBar;
