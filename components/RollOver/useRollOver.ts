"use client";

import type { RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { shouldSkipMotion, useMotion } from "@/lib/motion";

export const useRollOver = (rootRef: RefObject<HTMLSpanElement | null>) => {
  const { motion } = useMotion();

  useGSAP(
    (context, contextSafe) => {
      const root = rootRef.current;
      const inner = root?.querySelector<HTMLElement>("[data-rollover-inner]");
      if (!root || !inner || !contextSafe || shouldSkipMotion(motion)) return;

      const target = root.closest("a, button") ?? root;

      const to = (yPercent: number) =>
        gsap.to(inner, {
          yPercent,
          duration: 0.42,
          ease: "power3.inOut",
          overwrite: true,
        });

      const handleEnter = contextSafe(() => to(-50));
      const handleLeave = contextSafe(() => {
        gsap.set(inner, { yPercent: 50 });
        to(0);
      });

      target.addEventListener("mouseenter", handleEnter);
      target.addEventListener("mouseleave", handleLeave);

      return () => {
        target.removeEventListener("mouseenter", handleEnter);
        target.removeEventListener("mouseleave", handleLeave);
      };
    },
    { scope: rootRef, dependencies: [motion] }
  );
};
