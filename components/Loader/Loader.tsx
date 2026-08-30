"use client";

import { useRef, useState } from "react";
import Wordmark from "@/components/Logo/Wordmark";
import { data } from "@/data";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import {
  shouldSkipMotion,
  signalLoaderComplete,
  useMotion,
} from "@/lib/motion";

const FAILSAFE_MS = 5000;

const Loader = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [gone, setGone] = useState(false);
  const { motion, durationScale } = useMotion();

  useGSAP(
    () => {
      const overlay = overlayRef.current;
      const meta = metaRef.current;
      const wordmark = wordmarkRef.current;
      const counter = counterRef.current;
      const track = trackRef.current;
      const bar = barRef.current;
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

  if (gone) return null;

  return (
    <div
      ref={overlayRef}
      className="loader-overlay fixed inset-0 z-[60] flex flex-col bg-bone motion-reduce:hidden"
      aria-hidden="true"
    >
      <div
        ref={metaRef}
        className="flex items-baseline justify-between border-b border-ink px-[1.8125rem] py-5"
      >
        <p data-loader-meta className="text-meta uppercase text-ink">
          {data.footerRole}
        </p>
        <p data-loader-meta className="text-meta uppercase text-mute">
          Germany · CET
        </p>
      </div>
      <div className="flex min-h-0 flex-1 flex-col justify-end px-[1.8125rem] pb-6">
        <div className="flex items-end justify-between gap-[1.8125rem]">
          <div className="overflow-hidden pb-[0.14em]">
            <div ref={wordmarkRef}>
              <Wordmark className="text-display font-light" />
            </div>
          </div>
          <div className="overflow-hidden pb-[0.14em]">
            <span
              ref={counterRef}
              className="block text-display font-light tabular-nums text-ink"
            >
              000
            </span>
          </div>
        </div>
        <div ref={trackRef} className="relative mt-6 h-px w-full bg-stone">
          <div
            ref={barRef}
            className="absolute inset-y-0 left-0 w-full origin-left bg-ink"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
