"use client";

import { useRef } from "react";
import Container from "../Container/Container";
import { StackProps } from "@/types";
import { cn } from "@/lib/utils";
import { useSectionReveal } from "@/lib/useSectionReveal";

const Stack = ({ title, techStack }: StackProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  return (
    <section ref={sectionRef} id="stack" className="pt-[7.1875rem]">
      <Container>
        <div
          data-hairline="bottom"
          className="relative border-b border-ink pb-4"
        >
          <h2 className="split-text text-section font-light uppercase text-ink">
            {title}
          </h2>
        </div>
        <div
          data-rise-group
          data-rise-selector="[data-stack-row]"
          data-rise-distance="12"
          data-rise-start="top 92%"
        >
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
