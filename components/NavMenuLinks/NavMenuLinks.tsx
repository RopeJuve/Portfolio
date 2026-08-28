import { cn } from "@/lib/utils";

type NavMenuVariant = "nav-links" | "nav-menu";

const links = ["work", "services", "stack", "about", "contact"];

const NavMenuLinks = ({ variant }: { variant: NavMenuVariant }) => {
  const wrapperClass = cn({
    "hidden md:flex max-w-[31.25rem] justify-between items-center gap-10":
      variant === "nav-links",
    "flex flex-col gap-6 mx-auto": variant === "nav-menu",
  });

  const showUnderline = variant === "nav-links";

  return (
    <nav className={wrapperClass} aria-label="Main navigation">
      {links.map((menuItem, i) => (
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
