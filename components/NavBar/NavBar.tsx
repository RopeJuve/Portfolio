"use client";
import { Menu } from "lucide-react";
import NavMenuLinks from "../NavMenuLinks/NavMenuLinks";
import Button from "../Button/Button";
import Wordmark from "../Logo/Wordmark";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const NavBar = () => {
  return (
    <div className="relative px-6 md:px-10 bg-bg  w-full z-[1000]">
      <div className="max-w-[90%] mx-auto flex justify-between items-center py-5 border-b border-border">
        <a href="#home" aria-label="Home">
          <Wordmark className="text-body-sm" />
        </a>
        <div className="flex items-center gap-6 md:gap-10">
          <NavMenuLinks variant="nav-links" />
          <Button
            usedAs="link"
            text="CV"
            variant="primaryLink"
            href="./assets/RobertShterjovCV09_24.pdf"
            className="px-4 py-1.5 text-caption"
          />
          <Sheet>
            <SheetTrigger
              className="md:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="w-[25px] h-[25px] text-primary" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-frame border-primary">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <NavMenuLinks variant="nav-menu" />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
