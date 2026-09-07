"use client";
import NavMenuLinks from "../NavMenuLinks/NavMenuLinks";
import Button from "../Button/Button";
import Wordmark from "../Logo/Wordmark";
import Container from "../Container/Container";
import RollOver from "../RollOver/RollOver";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { NavBarProps } from "@/types";

const NavBar = ({ navLinks }: NavBarProps) => {
  return (
    <header className="sticky top-0 z-50 max-w-[90rem] mx-auto border-b border-ink bg-bone py-5">
      <Container className="flex items-center justify-between">
        <a
          href="#home"
          aria-label="Home"
          tabIndex={0}
          className="text-[0.875rem] text-ink hover:text-black"
        >
          <Wordmark className="text-[0.875rem]" />
        </a>
        <div className="flex items-center gap-[1.8125rem]">
          <NavMenuLinks variant="nav-links" links={navLinks} />
          <Button
            usedAs="link"
            text="CV"
            variant="primaryLink"
            href="./assets/RobertShterjovCV09_24.pdf"
          />
          <Sheet>
            <SheetTrigger
              className="text-micro uppercase text-ink hover:text-black md:hidden"
              aria-label="Open navigation menu"
            >
              <RollOver>Menu</RollOver>
            </SheetTrigger>
            <SheetContent side="right" aria-describedby={undefined}>
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <NavMenuLinks variant="nav-menu" links={navLinks} />
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
};

export default NavBar;
