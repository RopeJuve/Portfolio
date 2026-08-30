"use client";

import { useRef } from "react";
import Container from "../Container/Container";
import { StackProps } from "@/types";
import { cn } from "@/lib/utils";
import {
  drawHairline,
  maskReveal,
  staggerRise,
  useMotionBuild,
} from "@/lib/motion";

const Stack = ({ title, techStack }: StackProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const hairlineRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useMotionBuild(sectionRef, (ctx) => {
    const heading = headingRef.current;
    const hairline = hairlineRef.current;
    const list = listRef.current;
    if (!heading || !hairline || !list) return;

    maskReveal(heading, ctx);
    drawHairline(hairline, ctx);

    const rows = list.querySelectorAll("[data-stack-row]");
    staggerRise(rows, ctx, 12, {
      scrollTrigger: { trigger: list, start: "top 92%" },
    });
  });

  return (
    <section ref={sectionRef} id="stack" className="pt-[7.1875rem]">
      <Container>
        <div
          ref={hairlineRef}
          data-hairline="bottom"
          className="relative border-b border-ink pb-4"
        >
          <h2
            ref={headingRef}
            className="split-text text-section font-light uppercase text-ink"
          >
            {title}
          </h2>
        </div>
        <div ref={listRef}>
          {techStack.map((row, index) => (
            <div
              key={row.label}
              data-stack-row
              className={cn(
                "flex flex-col justify-between gap-2 py-6 md:flex-row md:items-baseline",
                index > 0 && "border-t border-ink",
                index === techStack.length - 1 && "border-b border-ink"
              )}
            >
              <p className="text-meta uppercase text-ink">{row.label}</p>
              <p className="text-micro uppercase text-ink md:text-right">
                {row.technologies.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Stack;
