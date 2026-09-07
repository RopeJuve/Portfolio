"use client";

import type { RefObject } from "react";
import { gsap, useGSAP, Observer } from "@/lib/gsap";
import { shouldSkipMotion, useMotion } from "@/lib/motion";

export const useTicker = (bandRef: RefObject<HTMLDivElement | null>) => {
  const { motion, durationScale } = useMotion();

  useGSAP(
    () => {
      const band = bandRef.current;
      const track = band?.querySelector<HTMLElement>("[data-ticker-track]");
      if (!band || !track || shouldSkipMotion(motion)) return;

      const first = track.firstElementChild as HTMLElement | null;
      if (!first) return;

      const width = first.offsetWidth;
      if (!width) return;

      gsap.set(band, { clipPath: "inset(50% 0 50% 0)" });
      gsap.to(band, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: durationScale * 1.1,
        ease: "power2.inOut",
        scrollTrigger: { trigger: band, start: "top 92%", once: true },
      });

      const loop = gsap.to(track, {
        x: -width,
        duration: 20,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(gsap.utils.wrap(-width, 0)),
        },
      });

      let idleTimer = 0;
      const observer = Observer.create({
        type: "wheel,touch,scroll",
        onChangeY: (self) => {
          const timeScale = gsap.utils.clamp(-4, 4, self.velocityY / 400);
          loop.timeScale(timeScale);
          window.clearTimeout(idleTimer);
          idleTimer = window.setTimeout(() => {
            gsap.to(loop, {
              timeScale: 1,
              duration: 0.35,
              ease: "power2.out",
              overwrite: true,
            });
          }, 180);
        },
      });

      return () => {
        window.clearTimeout(idleTimer);
        observer.kill();
        loop.kill();
      };
    },
    { scope: bandRef, dependencies: [motion, durationScale] }
  );
};
