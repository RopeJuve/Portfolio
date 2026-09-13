"use client";

import { type ReactNode } from "react";
import ConsentBar from "@/components/Consent/ConsentBar";
import { ConsentProvider } from "@/components/Consent/ConsentContext";
import Footer from "@/components/Footer/Footer";
import Loader from "@/components/Loader/Loader";
import NavBar from "@/components/NavBar/NavBar";
import ScrollProgress from "@/components/ScrollProgress/ScrollProgress";
import { MotionProvider } from "@/lib/motion";
import { ChromeProps } from "@/types";

const AppShell = ({
  children,
  footerName,
  footerRole,
  contactLocale,
  navLinks,
}: ChromeProps & { children: ReactNode }) => (
  <MotionProvider>
    <ConsentProvider>
      <Loader footerRole={footerRole} contactLocale={contactLocale} />
      <ConsentBar />
      <ScrollProgress />
      <NavBar navLinks={navLinks} />
      {children}
      <Footer footerName={footerName} footerRole={footerRole} />
    </ConsentProvider>
  </MotionProvider>
);

export default AppShell;
