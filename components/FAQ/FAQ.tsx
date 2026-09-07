"use client";

import { useRef } from "react";
import Container from "../Container/Container";
import { useSectionReveal } from "@/lib/useSectionReveal";
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
        <dl
          data-rise-group
          data-rise-selector="div"
          data-rise-distance="34"
          className="mt-14 divide-y divide-ink"
        >
          {faq.map((item, index) => (
            <div key={index} className="py-8">
              <dt>
                <h3 className="text-body font-light uppercase text-ink">
                  {item.question}
                </h3>
              </dt>
              <dd className="mt-3 max-w-[60ch] font-serif text-lead text-ink">
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
