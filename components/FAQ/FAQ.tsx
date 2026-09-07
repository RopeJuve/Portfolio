"use client";

import { useRef } from "react";
import Container from "../Container/Container";
import { drawHairline, maskReveal, staggerRise, useMotionBuild } from "@/lib/motion";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import type { FaqItem } from "@/types";

type FaqProps = {
  faq: FaqItem[];
};

const FAQ = ({ faq }: FaqProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useMotionBuild(sectionRef, (ctx) => {
    const root = sectionRef.current;
    if (!root) return;

    // Section h2 — masked line reveal (design.md §8 primitive 1)
    root.querySelectorAll<HTMLElement>(".split-text").forEach((heading) => {
      maskReveal(heading, ctx, {
        scrollTrigger: { trigger: heading, start: "top 88%", once: true },
      });
    });

    // Section header hairline draw (design.md §8 primitive 2)
    root.querySelectorAll<HTMLElement>("[data-hairline]").forEach((rule) => {
      drawHairline(rule, ctx, {
        scrollTrigger: { trigger: rule, start: "top 92%", once: true },
      });
    });

    // Each row: stagger rise across the summary's 3 children (ordinal, question, sign).
    // Values match Stack rows: distance 14, trigger top 92%.
    root.querySelectorAll<HTMLDetailsElement>("details").forEach((details) => {
      const summary = details.querySelector<HTMLElement>("summary");
      if (!summary) return;

      staggerRise(Array.from(summary.children) as HTMLElement[], ctx, 14, {
        duration: ctx.duration(0.7),
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: { trigger: details, start: "top 92%", once: true },
      });

      // On open: fade the answer down from y: -8.
      // On either toggle: refresh stale scroll positions caused by height shift.
      const answerDiv = details.querySelector<HTMLElement>("[data-faq-answer]");
      if (!answerDiv) return;
      ctx.track(answerDiv); // ensure teardown clears any GSAP inline styles

      const handleToggle = () => {
        gsap.killTweensOf(answerDiv);

        if (details.open) {
          // Fire on the next frame so the browser has rendered the expanded content.
          requestAnimationFrame(() => {
            gsap.fromTo(
              answerDiv,
              { autoAlpha: 0, y: -8 },
              {
                autoAlpha: 1,
                y: 0,
                duration: ctx.duration(0.5),
                ease: "power2.out",
              },
            );
            // Refresh immediately so triggers below this row measure the new height.
            ScrollTrigger.refresh();
          });
        } else {
          // Close is instant (browser hides content); clear only the animated props and refresh.
          // design.md §8: never clearProps:"all" — it would wipe any authored inline styles.
          gsap.set(answerDiv, { clearProps: "autoAlpha,y" });
          ScrollTrigger.refresh();
        }
      };

      details.addEventListener("toggle", handleToggle);
      ctx.onCleanup(() => details.removeEventListener("toggle", handleToggle));
    });
  });

  const questionCount = String(faq.length).padStart(2, "0");

  return (
    <section ref={sectionRef} id="faq" aria-labelledby="faq-heading" className="pt-[7.1875rem]">
      <Container>
        {/* Header — identical structure to Work and Services (design.md §9) */}
        <div
          data-hairline="bottom"
          className="flex flex-wrap items-baseline justify-between gap-5 border-b border-ink pb-4"
        >
          <h2
            id="faq-heading"
            className="split-text text-section font-light uppercase text-ink"
          >
            FAQ
          </h2>
          {/* Meta counter — update automatically when items are added/removed */}
          <span className="text-meta uppercase text-mute">
            Working together — {questionCount}
          </span>
        </div>

        {/* Rows — native <details>/<summary>.
            border-b only: the header rule serves as the top edge of the first row. */}
        <div>
          {faq.map((item, index) => (
            <details key={index} className="group border-b border-ink">
              {/* list-none + [&::-webkit-details-marker]:hidden kill the native disclosure triangle
                  in both Firefox and WebKit without relying on appearance hacks. */}
              <summary className="flex cursor-pointer list-none items-baseline gap-5 py-[22px] [&::-webkit-details-marker]:hidden">
                <span className="min-w-[3ch] text-meta uppercase text-mute">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {/* text-question: clamp(18px,2vw,24px), uppercase Archivo 300 */}
                <span className="flex-1 text-question font-light uppercase text-ink">
                  {item.question}
                </span>
                {/* + closed, − open (U+2212 minus — same optical weight as +).
                    Content swap via ::before, no rotation, no animation. */}
                <span
                  aria-hidden="true"
                  className="text-lg leading-none text-ink before:content-['+'] group-open:before:content-['−']"
                />
              </summary>

              {/* Answer aligns to the question column via the matching 3ch spacer.
                  grid-cols-[3ch_1fr] mirrors the summary's min-w-[3ch] + gap-5 geometry. */}
              <div
                data-faq-answer
                className="grid grid-cols-[3ch_1fr] gap-5 pb-[26px]"
              >
                <span aria-hidden="true" />
                {/* text-lead-sm: 16px serif, 1.35 leading — answer body */}
                <p className="max-w-[62ch] font-serif text-lead-sm text-ink">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
