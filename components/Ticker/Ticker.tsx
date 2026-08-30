"use client";

import { useRef } from "react";
import { gsap, useGSAP, Observer } from "@/lib/gsap";
import { shouldSkipMotion, useMotion } from "@/lib/motion";

const COPIES = 4;

const Ticker = ({ words }: { words: string[] }) => {
  const bandRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { motion, durationScale } = useMotion();

  useGSAP(
    () => {
      const band = bandRef.current;
      const track = trackRef.current;
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
    { scope: bandRef, dependencies: [motion, durationScale, words] }
  );

  const run = (
    <p className="flex shrink-0 items-center whitespace-nowrap px-[1.8125rem] text-[2.75rem] font-light uppercase leading-none text-paper">
      {words.map((word) => (
        <span key={word}>
          {word.toUpperCase()}
          <span className="text-mute">{` \u2014 `}</span>
        </span>
      ))}
    </p>
  );

  return (
    <div
      ref={bandRef}
      className="h-[4.75rem] w-full overflow-hidden bg-ink mt-[7.1875rem] flex items-center justify-center"
      aria-hidden="true"
    >
      <div ref={trackRef} className="flex w-max will-change-transform">
        {Array.from({ length: COPIES }, (_, index) => (
          <div key={index}>{run}</div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
