"use client";

import type { RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { shouldSkipMotion, useMotion } from "@/lib/motion";

export const useScrollProgress = (barRef: RefObject<HTMLDivElement | null>) => {
  const { motion } = useMotion();

  useGSAP(
    () => {
      const bar = barRef.current;
      if (!bar || shouldSkipMotion(motion)) return;

      gsap.fromTo(
        bar,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "max",
            scrub: 0.4,
          },
        }
      );
    },
    { dependencies: [motion] }
  );
};
