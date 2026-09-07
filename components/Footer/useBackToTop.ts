"use client";

import type { MouseEvent } from "react";

export const useBackToTop = () => {
  const handleBackToTop = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const prefersReduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReduce ? "auto" : "smooth",
    });
  };

  return { handleBackToTop };
};
