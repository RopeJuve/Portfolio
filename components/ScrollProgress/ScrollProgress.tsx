"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { shouldSkipMotion, useMotion } from "@/lib/motion";

const ScrollProgress = () => {
  const barRef = useRef<HTMLDivElement>(null);
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

  return (
    <div
      ref={barRef}
      className="pointer-events-none fixed left-0 top-0 z-[70] h-px w-full origin-left bg-ink"
    />
  );
};

export default ScrollProgress;
