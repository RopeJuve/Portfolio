"use client";

import { useRef } from "react";
import { useScrollProgress } from "./useScrollProgress";

const ScrollProgress = () => {
  const barRef = useRef<HTMLDivElement>(null);
  useScrollProgress(barRef);

  return (
    <div
      ref={barRef}
      className="pointer-events-none fixed left-0 top-0 z-[70] h-px w-full origin-left bg-ink"
    />
  );
};

export default ScrollProgress;
