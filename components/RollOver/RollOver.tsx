"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import { gsap, useGSAP } from "@/lib/gsap";
import { shouldSkipMotion, useMotion } from "@/lib/motion";

const RollOver = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  const rootRef = useRef<HTMLSpanElement>(null);
  const innerRef = useRef<HTMLSpanElement>(null);
  const { motion } = useMotion();

  useGSAP(
    (context, contextSafe) => {
      const root = rootRef.current;
      const inner = innerRef.current;
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

  return (
    <span
      ref={rootRef}
      className={cn(
        "inline-block h-[1.25em] overflow-hidden leading-[1.25em]",
        className
      )}
    >
      <span ref={innerRef} className="flex flex-col">
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </span>
    </span>
  );
};

export default RollOver;
