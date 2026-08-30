"use client";

import { type ReactNode } from "react";
import Footer from "@/components/Footer/Footer";
import Loader from "@/components/Loader/Loader";
import NavBar from "@/components/NavBar/NavBar";
import ScrollProgress from "@/components/ScrollProgress/ScrollProgress";
import { MotionProvider } from "@/lib/motion";

const AppShell = ({ children }: { children: ReactNode }) => (
  <MotionProvider>
    <Loader />
    <ScrollProgress />
    <NavBar />
    {children}
    <Footer />
  </MotionProvider>
);

export default AppShell;
