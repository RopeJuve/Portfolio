"use client";

import type { RefObject } from "react";
import { gsap, useGSAP, SplitText, ScrollTrigger } from "@/lib/gsap";
import {
  onLoaderComplete,
  shouldSkipMotion,
  useMotion,
} from "@/lib/motion";

export const useHeroIntro = (sectionRef: RefObject<HTMLElement | null>) => {
  const { motion, durationScale } = useMotion();

  useGSAP(
    () => {
      const section = sectionRef.current;
      const wrap = section?.querySelector<HTMLElement>("[data-hero-photo-wrap]");
      const photo = section?.querySelector<HTMLImageElement>("[data-hero-photo]");
      const eyebrowEl = section?.querySelector<HTMLElement>("[data-hero-eyebrow]");
      const titleEl = section?.querySelector<HTMLElement>("[data-hero-title]");
      const lead = section?.querySelector<HTMLElement>("[data-hero-lead]");
      const actions = section?.querySelector<HTMLElement>("[data-hero-actions]");
      if (
        !section ||
        !wrap ||
        !photo ||
        !eyebrowEl ||
        !titleEl ||
        !lead ||
        !actions
      ) {
        return;
      }

      if (shouldSkipMotion(motion)) {
        return onLoaderComplete(() => undefined);
      }

      let cancelled = false;
      let unsubscribe: () => void = () => undefined;
      const snapshots = new Map<Element, string | null>();
      const track = (el: Element) => {
        if (!snapshots.has(el)) snapshots.set(el, el.getAttribute("style"));
      };

      [wrap, photo, eyebrowEl, titleEl, lead, actions].forEach(track);
      const titleHtml = titleEl.innerHTML;

      const intro = gsap.timeline({ paused: true });

      intro.fromTo(
        photo,
        { scale: 1.06 },
        {
          scale: 1,
          duration: durationScale * 1.2,
          ease: "power3.out",
          transformOrigin: "90% 12%",
        },
        0
      );
      intro.fromTo(
        eyebrowEl,
        { autoAlpha: 0, y: 18 },
        {
          autoAlpha: 1,
          y: 0,
          duration: durationScale * 0.7,
          ease: "power3.out",
        },
        0.15
      );
      intro.fromTo(
        lead,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: durationScale * 0.8,
          ease: "power3.out",
        },
        0.35
      );
      intro.fromTo(
        actions,
        { autoAlpha: 0, y: 18 },
        {
          autoAlpha: 1,
          y: 0,
          duration: durationScale * 0.7,
          ease: "power3.out",
        },
        0.5
      );

      const playTitle = () => {
        if (cancelled) return;
        try {
          SplitText.create(titleEl, {
            type: "lines",
            mask: "lines",
            aria: "auto",
            onSplit(self) {
              self.masks?.forEach((mask) => {
                (mask as HTMLElement).style.paddingBottom = "0.14em";
                (mask as HTMLElement).style.marginBottom = "-0.14em";
              });
              const tween = gsap.fromTo(
                self.lines,
                { yPercent: 110 },
                {
                  yPercent: 0,
                  duration: durationScale * 1.1,
                  ease: "power3.out",
                  stagger: 0.08,
                }
              );
              intro.add(tween, 0.05);
              return tween;
            },
          });
        } catch {
          intro.fromTo(
            titleEl,
            { yPercent: 110 },
            {
              yPercent: 0,
              duration: durationScale * 1.1,
              ease: "power3.out",
            },
            0.05
          );
        }
      };

      const armIntro = () => {
        if (cancelled) return;
        playTitle();
        unsubscribe = onLoaderComplete(() => {
          if (!cancelled) intro.play();
        });
      };

      if (document.fonts.status === "loaded") {
        armIntro();
      } else {
        void document.fonts.ready.then(armIntro);
      }

      return () => {
        cancelled = true;
        unsubscribe();
        intro.kill();
        titleEl.innerHTML = titleHtml;
        const targets = Array.from(snapshots.keys());
        if (targets.length) gsap.set(targets, { clearProps: "all" });
        snapshots.forEach((style, el) => {
          if (!el.isConnected) return;
          if (style === null) el.removeAttribute("style");
          else el.setAttribute("style", style);
        });
        ScrollTrigger.getAll()
          .filter(
            (trigger) => trigger.trigger === section || trigger.trigger === photo
          )
          .forEach((trigger) => trigger.kill());
      };
    },
    { scope: sectionRef, dependencies: [motion, durationScale] }
  );
};
