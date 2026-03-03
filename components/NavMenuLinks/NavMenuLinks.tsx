import { cn } from "@/lib/utils";

type NavMenuVariant = "nav-links" | "nav-footer" | "nav-menu";

const NavMenuLinks = ({ variant }: { variant: NavMenuVariant }) => {
  const wrapperClass = cn({
    "hidden md:flex max-w-[31.25rem] justify-between items-center gap-10":
      variant === "nav-links",
    "max-w-[31.25rem] flex justify-between items-center flex-1":
      variant === "nav-footer",
    "flex flex-col gap-6 mx-auto": variant === "nav-menu",
  });

  const showUnderline = variant === "nav-links" || variant === "nav-footer";

  return (
    <nav className={wrapperClass} aria-label="Main navigation">
      {["home", "about me", "projects", "contact"].map((menuItem, i) => (
        <a
          key={`${i}-${menuItem}`}
          href={`#${menuItem}`}
          className={cn(showUnderline && "nav-link")}
          tabIndex={0}
          aria-label={menuItem}
        >
          {menuItem}
        </a>
      ))}
    </nav>
  );
};

export default NavMenuLinks;
