"use client";

import { useRef } from "react";
import Button from "../Button/Button";
import { HeaderProps } from "@/types";
import { gsap, useGSAP, SplitText, ScrollTrigger } from "@/lib/gsap";
import {
  onLoaderComplete,
  shouldSkipMotion,
  useMotion,
} from "@/lib/motion";

const Hero = ({ eyebrow, title, subTitle, heroImage }: HeaderProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const photoWrapRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLImageElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const leadRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const { motion, durationScale } = useMotion();

  useGSAP(
    () => {
      const section = sectionRef.current;
      const wrap = photoWrapRef.current;
      const photo = photoRef.current;
      const eyebrowEl = eyebrowRef.current;
      const titleEl = titleRef.current;
      const lead = leadRef.current;
      const actions = actionsRef.current;
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
          .filter((trigger) => trigger.trigger === section || trigger.trigger === photo)
          .forEach((trigger) => trigger.kill());
      };
    },
    { scope: sectionRef, dependencies: [motion, durationScale] }
  );

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative z-0 min-h-[calc(100svh-4.75rem)] w-full bg-stone"
    >
      <div ref={photoWrapRef} className="absolute inset-0 overflow-hidden">
        <img
          ref={photoRef}
          src={heroImage}
          alt="Robert Shterjov"
          className="h-full w-full object-cover object-[90%_12%]"
        />
        <div className="hero-scrim absolute inset-0 z-10" />
      </div>
      <div className="relative z-20 mx-auto flex min-h-[calc(100svh-4.75rem)] max-w-[90rem] flex-col justify-start px-[1.8125rem] py-8">
        <div className="mx-auto w-full">
          <div className="flex flex-col gap-6">
            <p ref={eyebrowRef} className="text-meta uppercase text-ink">
              {eyebrow}
            </p>
            <h1
              ref={titleRef}
              className="split-text max-w-[min(100%,36rem)] text-display font-light uppercase text-ink"
            >
              {title.split("\n").map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p
              ref={leadRef}
              className="max-w-[34ch] font-serif text-lead text-ink"
            >
              {subTitle}
            </p>
            <div ref={actionsRef} className="flex flex-wrap items-center gap-4">
              <Button
                usedAs="link"
                text="start a project"
                variant="primary"
                href="contact"
              />
              <Button
                usedAs="link"
                text="view work"
                variant="secondary"
                href="work"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
