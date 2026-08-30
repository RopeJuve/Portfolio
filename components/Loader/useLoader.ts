"use client";

import { useState, type RefObject } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import {
  shouldSkipMotion,
  signalLoaderComplete,
  useMotion,
} from "@/lib/motion";

const FAILSAFE_MS = 5000;

export const useLoader = (overlayRef: RefObject<HTMLDivElement | null>) => {
  const [gone, setGone] = useState(false);
  const { motion, durationScale } = useMotion();

  useGSAP(
    () => {
      const overlay = overlayRef.current;
      const meta = overlay?.querySelector<HTMLElement>("[data-loader-meta-row]");
      const wordmark = overlay?.querySelector<HTMLElement>("[data-loader-wordmark]");
      const counter = overlay?.querySelector<HTMLElement>("[data-loader-counter]");
      const track = overlay?.querySelector<HTMLElement>("[data-loader-track]");
      const bar = overlay?.querySelector<HTMLElement>("[data-loader-bar]");
      if (!overlay || !meta || !wordmark || !counter || !track || !bar) {
        return;
      }

      const finish = () => {
        document.documentElement.style.overflow = "";
        signalLoaderComplete();
        setGone(true);
      };

      if (shouldSkipMotion(motion)) {
        finish();
        return;
      }

      const previousOverflow = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";

      const failsafe = window.setTimeout(finish, FAILSAFE_MS);

      const metaItems = meta.querySelectorAll("[data-loader-meta]");
      const counterProxy = { value: 0 };

      const timeline = gsap.timeline({
        onComplete: () => {
          window.clearTimeout(failsafe);
          document.documentElement.style.overflow = previousOverflow;
          setGone(true);
          requestAnimationFrame(() => ScrollTrigger.refresh());
        },
      });

      timeline.fromTo(
        metaItems,
        { autoAlpha: 0, y: 12 },
        {
          autoAlpha: 1,
          y: 0,
          duration: durationScale * 0.6,
          ease: "power3.out",
          stagger: 0.06,
        },
        0
      );

      timeline.fromTo(
        wordmark,
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: durationScale * 1.1,
          ease: "power3.out",
        },
        0.05
      );

      timeline.fromTo(
        bar,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: durationScale * 1.5,
          ease: "power1.inOut",
          transformOrigin: "left center",
        },
        0.1
      );

      timeline.to(
        counterProxy,
        {
          value: 100,
          duration: durationScale * 1.5,
          ease: "power1.inOut",
          onUpdate: () => {
            counter.textContent = String(Math.round(counterProxy.value)).padStart(
              3,
              "0"
            );
          },
        },
        0.1
      );

      timeline.to(
        [wordmark, counter],
        {
          yPercent: -110,
          duration: durationScale * 0.7,
          ease: "power3.inOut",
        },
        1.7
      );

      timeline.to(
        [track, meta],
        {
          autoAlpha: 0,
          duration: durationScale * 0.4,
          ease: "power2.out",
        },
        1.7
      );

      timeline.add(() => {
        signalLoaderComplete();
      }, 2.0);

      timeline.to(
        overlay,
        {
          clipPath: "inset(100% 0 0 0)",
          duration: durationScale * 0.95,
          ease: "power3.inOut",
        },
        2.0
      );

      return () => {
        window.clearTimeout(failsafe);
        document.documentElement.style.overflow = previousOverflow;
      };
    },
    { scope: overlayRef, dependencies: [motion, durationScale] }
  );

  return { gone };
};
