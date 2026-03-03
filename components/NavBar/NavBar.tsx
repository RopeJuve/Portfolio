"use client";
import { Logo } from "../Logo/index";
import { Menu } from "lucide-react";
import NavMenuLinks from "../NavMenuLinks/NavMenuLinks";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const NavBar = () => {
  return (
    <div className="relative px-6 md:px-10 bg-frame w-full z-[1000]">
      <div className="max-w-container mx-auto flex justify-between items-center">
        <a href="/" aria-label="Home">
          <Logo className="w-[6.25rem] h-[6.25rem] text-primary cursor-pointer hover:scale-110 transition-transform" />
        </a>
        <NavMenuLinks variant="nav-links" />
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
  );
};

export default NavBar;
