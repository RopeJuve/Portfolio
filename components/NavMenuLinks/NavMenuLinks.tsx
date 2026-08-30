"use client";

import { cn } from "@/lib/utils";
import RollOver from "../RollOver/RollOver";

type NavMenuVariant = "nav-links" | "nav-menu";

const links = ["work", "services", "stack", "about", "contact"];

const NavMenuLinks = ({ variant }: { variant: NavMenuVariant }) => {
  const wrapperClass = cn({
    "hidden items-center gap-[1.8125rem] md:flex": variant === "nav-links",
    "mt-14 flex flex-col gap-6": variant === "nav-menu",
  });

  return (
    <nav className={wrapperClass} aria-label="Main navigation">
      {links.map((menuItem) => (
        <a
          key={menuItem}
          href={`#${menuItem}`}
          className="text-micro uppercase text-ink hover:text-black"
          tabIndex={0}
          aria-label={menuItem}
        >
          <RollOver>{menuItem}</RollOver>
        </a>
      ))}
    </nav>
  );
};

export default NavMenuLinks;
