"use client";

import { useRef } from "react";
import Container from "../Container/Container";
import { useSectionReveal } from "@/lib/useSectionReveal";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/types";

type FaqProps = {
  faq: FaqItem[];
};

const FAQ = ({ faq }: FaqProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  return (
    <section ref={sectionRef} id="faq" aria-labelledby="faq-heading" className="pt-[7.1875rem]">
      <Container>
        <div
          data-hairline="bottom"
          className="border-b border-ink pb-4"
        >
          <h2 id="faq-heading" className="split-text text-section font-light uppercase text-ink">
            FAQ
          </h2>
        </div>

        {/* Each row rises as a unit; distance matches body-text stagger (20px) */}
        <dl
          data-rise-group
          data-rise-selector="div"
          data-rise-distance="20"
          className="mt-14"
        >
          {faq.map((item, index) => (
            <div
              key={index}
              className={cn(
                // Two-column editorial split: question anchors left, answer flows right.
                // On mobile the columns collapse; gap-y bridges the stack.
                "grid grid-cols-1 gap-x-[29px] gap-y-5 py-10",
                "md:grid-cols-[2fr_3fr] md:py-14",
                index > 0 && "border-t border-ink",
                index === faq.length - 1 && "border-b border-ink",
              )}
            >
              <dt>
                {/* text-card is the h3 scale in the design system (22px, wt 400, uppercase) */}
                <h3 className="text-card font-normal uppercase text-ink">
                  {item.question}
                </h3>
              </dt>
              {/* max-w-[46ch] — lead paragraph cap from design spec */}
              <dd className="max-w-[46ch] font-serif text-lead text-ink">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
};

export default FAQ;
